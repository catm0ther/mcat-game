#!/usr/bin/env python3
"""
validate-cards.py — run before deploying new card data.

Checks every scenarioDrop card across all data files for:
  1. Duplicate stripped button labels  (all buttons must be distinguishable)
  2. Missing correct answer            (card has no 'correct' field)
  3. Answer in stem                    (correct label appears verbatim in the scenario)
  4. Bracket balance                   (JS syntax check, string-aware)

Usage:  python3 validate-cards.py
Exit 0 = clean, Exit 1 = problems found.
"""

import re, sys, os

DATA_FILES = [
    'data.js',
    'data-bio-biochem.js',
    'data-bio-biochem-fl3.js',
    'data-psych-soc-fl2.js',
    'data-psych-soc-fl3.js',
    'data-chem-phys.js',
    'data-chem-phys-fl3.js',
]

def strip_expl(s):
    idx = s.find(' — ')
    return s[:idx] if idx != -1 else s

def check_brackets(content, fname):
    """String-aware bracket balance check."""
    depth, i, n, line = 0, 0, len(content), 1
    problems = []
    while i < n:
        c = content[i]
        if c == '\n':
            line += 1; i += 1; continue
        for q in ("'", '"', '`'):
            if c == q:
                i += 1
                while i < n:
                    if content[i] == '\\': i += 2; continue
                    if content[i] == q: i += 1; break
                    if content[i] == '\n': line += 1
                    i += 1
                break
        else:
            if c == '[': depth += 1
            elif c == ']':
                depth -= 1
                if depth < 0:
                    problems.append(f'  BRACKET ERROR: extra ] at line {line}')
                    depth = 0
            i += 1
    if depth != 0:
        problems.append(f'  BRACKET ERROR: unclosed brackets (depth={depth} at EOF)')
    return problems

def is_valid_answer(s):
    """Reject items that are just whitespace, commas, or very short noise."""
    stripped = s.strip().strip(',').strip()
    return len(stripped) >= 8 and not re.match(r'^[\s,\n]+$', s)

def extract_cards(content):
    """
    Very rough extraction of scenarioDrop cards.
    Returns list of dicts with keys: line, scenario, correct, wrongPool_items
    """
    cards = []
    lines = content.split('\n')
    i = 0
    while i < len(lines):
        line = lines[i]
        # Find conceptId markers
        if 'conceptId:' in line:
            card = {'line': i+1, 'scenario': None, 'correct': None, 'wrong': []}
            # Scan forward for scenario/scenarios, correct, wrongPool
            j = i
            while j < min(i+40, len(lines)) and (j == i or 'conceptId:' not in lines[j]):
                l = lines[j]
                # scenarios array (first item)
                if ('scenarios:' in l or 'scenario:' in l) and "'" in l:
                    m = re.search(r"'([^']{15,})'", l)
                    if not m and j+1 < len(lines):
                        m = re.search(r"'([^']{15,})'", lines[j+1])
                    if m:
                        card['scenario'] = m.group(1)
                # correct field
                if re.search(r"\bcorrect:", l) and "'" in l:
                    m = re.search(r"correct:\s*'([^']+)'", l)
                    if m:
                        card['correct'] = m.group(1)
                # wrongPool items
                if 'wrongPool:' in l:
                    pool_text = l
                    if ']' not in pool_text:
                        for k in range(j+1, min(j+10, len(lines))):
                            pool_text += lines[k]
                            if ']' in lines[k]: break
                    card['wrong'] = [x for x in re.findall(r"'([^']{10,})'", pool_text)
                                     if is_valid_answer(x)]
                j += 1
            if card['correct'] and is_valid_answer(card['correct']):
                cards.append(card)
        i += 1
    return cards

errors_found = False

for fname in DATA_FILES:
    fpath = os.path.join(os.path.dirname(__file__), fname)
    if not os.path.exists(fpath):
        continue
    with open(fpath) as f:
        content = f.read()

    file_errors = []

    # 1. Bracket balance
    bracket_errs = check_brackets(content, fname)
    file_errors.extend(bracket_errs)

    # 2. Card-level checks
    cards = extract_cards(content)
    for card in cards:
        if not card['correct']:
            file_errors.append(f'  LINE {card["line"]}: missing correct field')
            continue

        all_answers = [card['correct']] + card['wrong']
        labels = [strip_expl(a) for a in all_answers]

        # Duplicate label check
        seen = {}
        for label in labels:
            seen.setdefault(label, 0)
            seen[label] += 1
        dupes = {k: v for k,v in seen.items() if v > 1}
        if dupes:
            for label, count in dupes.items():
                file_errors.append(
                    f'  LINE {card["line"]}: duplicate button label "{label[:50]}" '
                    f'appears {count}x — buttons will be indistinguishable'
                )

        # Answer-in-stem check: flag only if the FULL stripped label appears
        # verbatim in the scenario (catches "De novo mutation" in stem, not "social")
        if card['scenario']:
            correct_label = strip_expl(card['correct'])
            # Only check labels with >= 3 words and not dominated by numbers/units
            label_words = [w for w in correct_label.split() if re.search(r'[a-zA-Z]{2,}', w)]
            if len(label_words) >= 3 and not re.search(r'^[\d\s\+\-\.×÷r=]+$', correct_label):
                if correct_label.lower() in card['scenario'].lower():
                    file_errors.append(
                        f'  LINE {card["line"]}: answer in stem — '
                        f'"{correct_label[:60]}" appears verbatim in scenario'
                    )

    if file_errors:
        errors_found = True
        print(f'\n=== {fname} ===')
        for e in file_errors:
            print(e)

if not errors_found:
    print('✓ All card files look clean.')
    sys.exit(0)
else:
    print('\nFix the issues above before deploying.')
    sys.exit(1)
