// All content is aligned to AAMC Psychological, Social, and Biological
// Foundations of Behavior outline. Flag any question in-game if something
// feels off — accuracy is everything.

// ── MCAT Sections ──────────────────────────────────────────────────────────
// CARS is intentionally excluded — not a gap area.
const SECTIONS = [
  {
    id: 'psych-soc',
    name: 'Psych/Soc',
    fullName: 'Psychological, Social & Biological Foundations',
    emoji: '🧠',
    color: '#7C3AED',
    lightColor: '#EDE9FE',
    available: true,
    clusterIds: ['memory-systems', 'social-psychology', 'development-language', 'research-stats'],
  },
  {
    id: 'bio-biochem',
    name: 'Bio/Biochem',
    fullName: 'Biological & Biochemical Foundations of Living Systems',
    emoji: '🔬',
    color: '#059669',
    lightColor: '#D1FAE5',
    available: false,
    clusterIds: [],
  },
  {
    id: 'chem-phys',
    name: 'Chem/Phys',
    fullName: 'Chemical & Physical Foundations of Biological Systems',
    emoji: '⚗️',
    color: '#0284C7',
    lightColor: '#E0F2FE',
    available: false,
    clusterIds: [],
  },
];

const CLUSTERS = [
  {
    id: 'memory-systems',
    name: 'Memory Systems',
    place: 'The Memory Maze',
    tagline: 'Where memories are made (and broken)',
    emoji: '🧠',
    color: '#7C3AED',
    lightColor: '#EDE9FE',
    description: "Atkinson-Shiffrin · Miller's 7±2 · Primacy effect · Dual-coding · State-dependent · Misinformation",
    scenarioDrop: [
      {
        scenario: "James glances at a phone number, repeats it silently while dialing, then forgets it the moment he hangs up. Which component of the Atkinson-Shiffrin model held the number while he dialed?",
        correct: "Short-Term Memory (STM)",
        wrong: ["Sensory Memory", "Long-Term Memory (LTM)", "Implicit Memory"],
        explanation: "STM holds a small amount of information for brief, active use. The number was never rehearsed enough to encode into LTM."
      },
      {
        scenario: "A visual afterimage persists for a fraction of a second after a camera flash, even with eyes closed. Which component of the Atkinson-Shiffrin model stores this?",
        correct: "Sensory Memory",
        wrong: ["Short-Term Memory (STM)", "Long-Term Memory (LTM)", "Episodic Memory"],
        explanation: "Sensory memory (iconic memory for vision) holds raw environmental input for under 1 second before it decays or gets encoded further."
      },
      {
        scenario: "In a memory study, participants reliably recall the first 3 words on a 20-word list better than words in the middle. This demonstrates...",
        correct: "The Primacy Effect",
        wrong: ["The Recency Effect", "Chunking", "Encoding Specificity"],
        explanation: "The primacy effect occurs because early items receive more rehearsal time and are more likely to transfer into long-term memory. Recency = remembering the LAST items."
      },
      {
        scenario: "An experiment finds that participants can hold between 5 and 9 chunks of information in working memory at the same time. This best supports...",
        correct: "Miller's Law (7±2)",
        wrong: ["The Primacy Effect", "The Atkinson-Shiffrin Model", "Encoding Specificity"],
        explanation: "Miller's 7±2 describes the capacity limit of short-term/working memory — approximately 7 items, plus or minus 2."
      },
      {
        scenario: "A student studies pharmacology every morning while drinking coffee. On exam day, she drinks coffee beforehand and recalls the material better than when she studied caffeine-free. This best demonstrates...",
        correct: "State-Dependent Memory",
        wrong: ["Dual-Coding Theory", "The Misinformation Effect", "Context-Dependent Memory"],
        explanation: "State-dependent memory: recall improves when your internal physiological state at retrieval matches your state at encoding. Caffeine is an internal (physiological) state cue."
      },
      {
        scenario: "After witnessing an accident, a participant reads a report describing the driver as 'reckless.' Later they sincerely 'remember' the driver speeding, even though he wasn't. This illustrates...",
        correct: "The Misinformation Effect",
        wrong: ["State-Dependent Memory", "Source Monitoring Error", "Retroactive Interference"],
        explanation: "The misinformation effect (Loftus): post-event information gets integrated into the original memory, distorting what was actually encoded."
      },
      {
        scenario: "A student creates detailed diagrams alongside her written notes, finding that pairing visual and verbal information helps her retain biochemical pathways far better. The theory supporting this is...",
        correct: "Dual-Coding Theory",
        wrong: ["State-Dependent Memory", "The Misinformation Effect", "Elaborative Rehearsal"],
        explanation: "Dual-coding theory (Paivio): encoding information in both verbal AND visual formats creates two independent memory traces, improving recall."
      }
    ],
    showdown: [
      {
        conceptA: "Dual-Coding Theory",
        conceptB: "State-Dependent Memory",
        scenario: "A nursing student draws anatomical diagrams while reading her textbook, believing the combination of images and words helps the material stick better than words alone.",
        correct: "Dual-Coding Theory",
        explanation: "Dual-coding = combining visual + verbal encoding for stronger memory traces. State-dependent = internal physiological state matching at encoding and retrieval. No state cue here — just two formats."
      },
      {
        conceptA: "State-Dependent Memory",
        conceptB: "The Misinformation Effect",
        scenario: "A witness to a robbery is later interviewed by a detective who asks, 'Did you notice the large man in the red jacket?' At trial, the witness sincerely describes a red jacket — which the robber never wore.",
        correct: "The Misinformation Effect",
        explanation: "Post-event suggestion (the detective's question) contaminated the original memory. State-dependent memory involves internal physiological states — not external false information."
      },
      {
        conceptA: "Primacy Effect",
        conceptB: "Recency Effect",
        scenario: "After a long conference talk, a student clearly remembers the professor's opening remarks but has forgotten most of the material from the middle of the lecture.",
        correct: "Primacy Effect",
        explanation: "Primacy = better recall for items at the BEGINNING of a sequence (they had more rehearsal time). Recency = better recall for items at the END."
      },
      {
        conceptA: "Dual-Coding Theory",
        conceptB: "The Misinformation Effect",
        scenario: "After seeing a car crash, participants who were asked 'How fast were the cars going when they smashed into each other?' later recalled higher speeds than those asked a neutral question.",
        correct: "The Misinformation Effect",
        explanation: "The loaded word 'smashed' introduced misinformation that distorted the original memory. This is the classic Loftus & Palmer study."
      }
    ]
  },

  {
    id: 'social-psychology',
    name: 'Social Psychology',
    place: 'Social Square',
    tagline: 'It\'s not you, it\'s your attribution style',
    emoji: '👥',
    color: '#F97316',
    lightColor: '#FFEDD5',
    description: "Actor-observer bias · Intrinsic vs. extrinsic motivation · Organizational culture × individual bias",
    scenarioDrop: [
      {
        scenario: "Dr. Chen arrives late to a meeting and blames heavy traffic. When a colleague arrives late, Dr. Chen assumes the colleague is simply disorganized. This pattern best illustrates...",
        correct: "Actor-Observer Bias",
        wrong: ["Fundamental Attribution Error", "Self-Serving Bias", "In-Group Favoritism"],
        explanation: "Actor-observer bias: we attribute OUR OWN behavior to situations, but OTHER PEOPLE's behavior to their character. (FAE applies only to observers overattributing disposition — this shows the full two-way asymmetry.)"
      },
      {
        scenario: "A resident physician works extra ICU shifts, not for overtime pay, but because she finds the intellectual challenge of critical care genuinely fulfilling. Her motivation is best described as...",
        correct: "Intrinsic Motivation",
        wrong: ["Extrinsic Motivation", "Achievement Motivation", "Self-Determination"],
        explanation: "Intrinsic motivation arises from internal satisfaction — enjoyment, curiosity, personal meaning — not from external rewards or outcomes."
      },
      {
        scenario: "A pre-med student attends every optional review session primarily because the professor awards bonus points for attendance. His motivation is best described as...",
        correct: "Extrinsic Motivation",
        wrong: ["Intrinsic Motivation", "Achievement Motivation", "Identified Regulation"],
        explanation: "Extrinsic motivation is driven by external rewards (grades, money, recognition) rather than the inherent enjoyment of the activity."
      },
      {
        scenario: "A hospital consistently promotes physicians from a single medical school — not due to any written policy, but because senior leaders unconsciously favor those who 'fit the culture.' This best illustrates the interaction of...",
        correct: "Organizational Culture and Individual Bias",
        wrong: ["In-Group Favoritism Alone", "Institutional Discrimination", "Social Loafing"],
        explanation: "When organizational norms reinforce individual cognitive biases, each amplifies the other. Neither alone fully explains a pattern that requires both to sustain."
      }
    ],
    showdown: [
      {
        conceptA: "Intrinsic Motivation",
        conceptB: "Extrinsic Motivation",
        scenario: "A medical student volunteers at a free clinic every Saturday. When asked why, she says: 'I genuinely love working with underserved patients — it's the whole reason I went into medicine.'",
        correct: "Intrinsic Motivation",
        explanation: "The reward IS the activity and the personal meaning she derives from it — the textbook definition of intrinsic motivation."
      },
      {
        conceptA: "Intrinsic Motivation",
        conceptB: "Extrinsic Motivation",
        scenario: "A medical student volunteers at a free clinic every Saturday. When asked why, he says: 'Honestly, it looks great on my residency application.'",
        correct: "Extrinsic Motivation",
        explanation: "The application benefit is an external outcome — he's doing it for what it gets him, not for the work itself."
      },
      {
        conceptA: "Actor-Observer Bias",
        conceptB: "Fundamental Attribution Error",
        scenario: "A student watches a classmate bomb a presentation and concludes 'she must just not handle pressure well' — never considering that the classmate was up all night with a sick child.",
        correct: "Fundamental Attribution Error",
        explanation: "FAE = an observer over-attributes another's behavior to stable character traits while ignoring situational factors. Actor-observer bias requires the ACTOR also making a situational attribution for their own behavior — only one role is shown here."
      }
    ]
  },

  {
    id: 'development-language',
    name: 'Development & Language',
    place: 'Language Lagoon',
    tagline: 'Words shape worlds (a little bit)',
    emoji: '🌱',
    color: '#0D9488',
    lightColor: '#CCFBF1',
    description: "Erikson's 8 psychosocial stages · Linguistic relativity (Sapir-Whorf)",
    scenarioDrop: [
      {
        scenario: "A language has no words for 'past' or 'future' — only the present moment. A researcher hypothesizes that speakers of this language therefore perceive time differently than English speakers. This exemplifies...",
        correct: "Linguistic Relativity (Sapir-Whorf Hypothesis)",
        wrong: ["Linguistic Determinism", "Universal Grammar", "Language Acquisition Device"],
        explanation: "Linguistic relativity: language INFLUENCES (but does not fully determine) thought and perception. Linguistic determinism is the stronger, largely discredited claim that language entirely controls thought."
      },
      {
        scenario: "An 85-year-old reflects on his life with deep satisfaction, feeling his choices were meaningful and his legacy secure. According to Erikson, he has successfully resolved...",
        correct: "Ego Integrity vs. Despair",
        wrong: ["Generativity vs. Stagnation", "Intimacy vs. Isolation", "Industry vs. Inferiority"],
        explanation: "Erikson's final stage (late adulthood): success = ego integrity — acceptance of one's life as it was. Failure = despair over regret and missed chances."
      },
      {
        scenario: "A 16-year-old is trying out different friend groups, belief systems, and career ideas, unsure of who she really is. According to Erikson, she is navigating...",
        correct: "Identity vs. Role Confusion",
        wrong: ["Initiative vs. Guilt", "Industry vs. Inferiority", "Intimacy vs. Isolation"],
        explanation: "Erikson's stage 5 (adolescence): the core task is forming a stable, coherent identity. Failure to do so results in role confusion."
      },
      {
        scenario: "A 30-year-old is focused on building deep, committed romantic relationships and close friendships, and fears being left alone. According to Erikson, this reflects...",
        correct: "Intimacy vs. Isolation",
        wrong: ["Identity vs. Role Confusion", "Generativity vs. Stagnation", "Ego Integrity vs. Despair"],
        explanation: "Erikson's stage 6 (young adulthood): forming intimate bonds. Isolation results from the inability to connect. Generativity (stage 7) comes later and involves contributing to the next generation."
      },
      {
        scenario: "A 45-year-old professor mentors students and writes policy papers, feeling her work gives her life purpose beyond herself. According to Erikson, she has successfully resolved...",
        correct: "Generativity vs. Stagnation",
        wrong: ["Intimacy vs. Isolation", "Ego Integrity vs. Despair", "Industry vs. Inferiority"],
        explanation: "Erikson's stage 7 (middle adulthood): generativity = productively contributing to society and the next generation. Stagnation = self-absorption and a feeling of purposelessness."
      },
      {
        scenario: "A 7-year-old works hard at school projects and feels proud when he masters new skills. When he struggles, he feels he's 'not smart.' According to Erikson, he is navigating...",
        correct: "Industry vs. Inferiority",
        wrong: ["Initiative vs. Guilt", "Identity vs. Role Confusion", "Autonomy vs. Shame and Doubt"],
        explanation: "Erikson's stage 4 (school age, ~6–12): developing a sense of competence through learning and achievement. Failure leads to feelings of inferiority."
      }
    ],
    showdown: [
      {
        conceptA: "Linguistic Relativity",
        conceptB: "Linguistic Determinism",
        scenario: "A study finds that people who speak languages with more distinct color terms can more quickly distinguish similar shades of blue, suggesting language shapes (but doesn't fully control) color perception.",
        correct: "Linguistic Relativity",
        explanation: "Relativity = language INFLUENCES thought (moderate claim, well-supported). Determinism = language DETERMINES thought (extreme claim — largely discredited)."
      },
      {
        conceptA: "Identity vs. Role Confusion",
        conceptB: "Intimacy vs. Isolation",
        scenario: "A 19-year-old changes his major three times, joins and quits multiple clubs, and frequently questions his values. He tells his therapist he doesn't know who he is.",
        correct: "Identity vs. Role Confusion",
        explanation: "Active identity searching is the hallmark of Erikson's stage 5. Intimacy vs. Isolation (stage 6) comes AFTER a person has established a stable identity."
      },
      {
        conceptA: "Generativity vs. Stagnation",
        conceptB: "Ego Integrity vs. Despair",
        scenario: "A 70-year-old retired surgeon looks back on her career and thinks 'I wasted my best years — I should have done so much more.' She feels bitter and regretful.",
        correct: "Ego Integrity vs. Despair",
        explanation: "Despair is the failure outcome of Erikson's final stage (late adulthood) — characterized by regret over one's life as a whole. Stagnation (stage 7) involves feeling unproductive during midlife, not looking back in old age."
      }
    ]
  },

  {
    id: 'research-stats',
    name: 'Research & Statistics',
    place: 'Data Desert',
    tagline: 'Outliers will not save you here',
    emoji: '📊',
    color: '#2563EB',
    lightColor: '#DBEAFE',
    description: "Mixed-methods · Dyads vs. triads · Closed networks · Median vs. mean",
    scenarioDrop: [
      {
        scenario: "A researcher measures patient satisfaction using a validated 1–10 scale for 500 patients AND conducts in-depth interviews with 20 patients about their experiences. This study design is best described as...",
        correct: "Mixed-Methods Design",
        wrong: ["Quasi-Experimental Design", "Longitudinal Design", "Case Study"],
        explanation: "Mixed-methods integrates quantitative data (numerical ratings) AND qualitative data (interviews) in a single study — that combination is the defining feature."
      },
      {
        scenario: "A dataset of physician incomes in a city includes a handful of specialists earning $2M+. Which measure of central tendency best represents what the typical physician earns?",
        correct: "Median",
        wrong: ["Mean", "Mode", "Standard Deviation"],
        explanation: "The median is resistant to extreme outliers. The mean would be pulled dramatically upward by those few ultra-high earners, making it unrepresentative of most physicians."
      },
      {
        scenario: "Which measure of central tendency is MOST distorted by a single extreme outlier?",
        correct: "Mean",
        wrong: ["Median", "Mode", "Range"],
        explanation: "The mean uses every value in its calculation, so one extreme number shifts it significantly. The median uses only the middle value(s) — extreme outliers don't affect it."
      },
      {
        scenario: "Two medical students form a study partnership. They develop shared shorthand and unspoken norms about how they work together. This two-person social group is called a...",
        correct: "Dyad",
        wrong: ["Triad", "Primary Group", "In-Group"],
        explanation: "A dyad is the smallest social unit — just two people. Dyads are uniquely fragile: if either person leaves, the group ceases to exist entirely."
      },
      {
        scenario: "A third student joins the study group. Suddenly two can form a coalition against one, someone can play mediator, and the group dynamics shift fundamentally. The new structure is called a...",
        correct: "Triad",
        wrong: ["Dyad", "Social Network", "Reference Group"],
        explanation: "A triad (three members) introduces coalition formation and mediation — social dynamics that are structurally impossible in a dyad. Simmel identified this as a critical threshold."
      },
      {
        scenario: "A tight-knit religious community where members primarily marry within the group, do business only with each other, and share information almost entirely internally exemplifies a...",
        correct: "Closed Network",
        wrong: ["Open Network", "Weak-Tie Network", "Bridging Network"],
        explanation: "Closed networks have dense internal ties and strong social boundaries. They build trust and reinforce norms but limit access to outside information and opportunities."
      }
    ],
    showdown: [
      {
        conceptA: "Median",
        conceptB: "Mean",
        scenario: "A hospital publishes its 'average' ER wait time. The dataset includes a few patients who waited 10+ hours due to unusual complications. Which measure gives prospective patients the most accurate picture of what THEY will likely experience?",
        correct: "Median",
        explanation: "The median represents the typical patient's experience because it isn't pulled by extreme outliers. The mean would be inflated by those rare 10-hour cases."
      },
      {
        conceptA: "Mean",
        conceptB: "Median",
        scenario: "A researcher wants to calculate the exact total amount of time all 200 patients waited in the ER, then divide by 200 to determine resource allocation for staffing models. Which measure should she use?",
        correct: "Mean",
        explanation: "When you need a mathematically precise average that accounts for ALL data points (for resource calculations, totals, etc.), the mean is appropriate — even if outliers exist."
      },
      {
        conceptA: "Dyad",
        conceptB: "Triad",
        scenario: "Two longtime colleagues always resolve disagreements quickly and privately. When their manager joins their project team permanently, conflicts become more visible and shifting alliances start forming.",
        correct: "Triad",
        explanation: "The arrival of the third person transforms the dyad into a triad — introducing the coalition dynamics and power shifts that Simmel identified as structurally unavailable in two-person groups."
      },
      {
        conceptA: "Mixed-Methods Design",
        conceptB: "Quasi-Experimental Design",
        scenario: "A health researcher surveys 300 patients with a validated scale AND conducts 15 semi-structured interviews to understand the 'why' behind the survey results. She never manipulates any variable.",
        correct: "Mixed-Methods Design",
        explanation: "Mixed-methods = combining quantitative + qualitative data collection. Quasi-experimental = studying groups without random assignment but WITH variable manipulation. No manipulation here."
      }
    ]
  }
];
