// All content is aligned to AAMC Psychological, Social, and Biological
// Foundations of Behavior outline. Flag any question in-game if something
// feels off — accuracy is everything.
//
// wrongPool: 5-6 plausible distractors, 3 are randomly picked each session
// so the same concept isn't always paired with the same wrong answers.

// ── MCAT Sections ──────────────────────────────────────────────────────────
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

// ── Clusters ───────────────────────────────────────────────────────────────
const CLUSTERS = [

  // ── Memory Systems ────────────────────────────────────────────────────
  {
    id: 'memory-systems',
    name: 'Memory Systems',
    place: 'The Memory Maze',
    tagline: 'Where memories are made (and broken)',
    emoji: '🧠',
    color: '#7C3AED',
    lightColor: '#EDE9FE',
    description: "Atkinson-Shiffrin · Miller's 7±2 · Primacy & Recency · Dual-coding · State-dependent · Misinformation",

    scenarioDrop: [
      {
        conceptId: 'stm',
        scenarios: [
          "James glances at a phone number, repeats it silently while dialing, then forgets it the moment he hangs up. Which component of the Atkinson-Shiffrin model held the number while he dialed?",
          "A nurse reads a patient's room number from a chart, holds it in mind while walking down the hall, then can't recall it by the time she reaches the door. Which memory store was active?",
          "A student reads a formula off the board and holds it in mind just long enough to copy it down, then immediately forgets it. Which Atkinson-Shiffrin component was responsible?",
        ],
        correct: "Short-Term Memory (STM)",
        wrongPool: ["Sensory Memory", "Long-Term Memory (LTM)", "Implicit Memory", "Episodic Memory", "Procedural Memory", "The Primacy Effect"],
        explanation: "STM (working memory) holds a small amount of information for brief, active use. Without rehearsal, information decays quickly.",
      },
      {
        conceptId: 'sensory-memory',
        scenarios: [
          "A visual afterimage persists for a fraction of a second after a camera flash, even with eyes closed. Which component of the Atkinson-Shiffrin model stores this?",
          "After looking at a bright window and closing your eyes, you briefly see an outline of the window frame lasting under a second. This fleeting image is stored in...",
          "A researcher finds that a visual impression vanishes within 250ms unless attended to. This phenomenon involves which memory store?",
        ],
        correct: "Sensory Memory",
        wrongPool: ["Short-Term Memory (STM)", "Long-Term Memory (LTM)", "Episodic Memory", "Working Memory", "Procedural Memory", "Implicit Memory"],
        explanation: "Sensory memory (iconic memory for vision) holds raw environmental input for under 1 second before it decays or is selectively encoded.",
      },
      {
        conceptId: 'primacy-effect',
        scenarios: [
          "In a memory study, participants reliably recall the first 3 words on a 20-word list better than words from the middle. This demonstrates...",
          "At a conference, attendees remember the keynote speaker's opening argument more clearly than any point made in the middle of the talk. This is an example of...",
          "A hiring manager finds she is most influenced by the first few things a candidate said, even though she remembers little from the middle of the interview. This reflects...",
        ],
        correct: "The Primacy Effect",
        wrongPool: ["The Recency Effect", "Chunking", "Encoding Specificity", "State-Dependent Memory", "The Misinformation Effect", "Miller's Law (7±2)"],
        explanation: "The primacy effect: early items receive more rehearsal and are more likely to transfer to LTM. Recency = remembering the LAST items, not the first.",
      },
      {
        conceptId: 'recency-effect',
        scenarios: [
          "After a long lecture, a student remembers the last few points the professor made much more clearly than anything from the middle. This is an example of...",
          "In a job interview, the hiring manager is most influenced by the final things the candidate said, even though the interview was 30 minutes long. This best illustrates...",
          "A jury deliberates after a week-long trial. Research predicts they will be most influenced by the final witness's testimony. This is most likely due to...",
        ],
        correct: "The Recency Effect",
        wrongPool: ["The Primacy Effect", "Chunking", "Encoding Specificity", "State-Dependent Memory", "Dual-Coding Theory", "Miller's Law (7±2)"],
        explanation: "The recency effect: items at the END of a sequence are recalled better because they remain active in short-term memory. Primacy = better recall for FIRST items.",
      },
      {
        conceptId: 'millers-law',
        scenarios: [
          "An experiment finds that participants can hold between 5 and 9 chunks of information in working memory at the same time. This best supports...",
          "A cognitive psychologist finds that recall accuracy drops sharply once a random digit list exceeds 9 items. This finding is most consistent with...",
          "Telephone numbers were designed to be 7 digits long because researchers found this fell within the typical capacity of short-term memory. This design reflects...",
        ],
        correct: "Miller's Law (7±2)",
        wrongPool: ["The Primacy Effect", "The Atkinson-Shiffrin Model", "Encoding Specificity", "The Recency Effect", "Chunking Theory", "Sensory Memory Capacity"],
        explanation: "Miller's 7±2 describes the capacity limit of short-term/working memory — approximately 7 chunks, plus or minus 2.",
      },
      {
        conceptId: 'state-dependent-memory',
        scenarios: [
          "A student studies pharmacology every morning while drinking coffee. On exam day, she drinks coffee beforehand and recalls the material better than when she studied caffeine-free. This best demonstrates...",
          "A diver memorizes a list of words while submerged. When tested later, recall is significantly better underwater than on land. This is an example of...",
          "A patient learns anxiety-management techniques during a calm therapy session. During a panic attack, she struggles to retrieve them. State-dependent memory predicts recall would be best when...",
        ],
        correct: "State-Dependent Memory",
        wrongPool: ["Dual-Coding Theory", "The Misinformation Effect", "Context-Dependent Memory", "Encoding Specificity", "Mood-Congruent Memory", "The Primacy Effect"],
        explanation: "State-dependent memory: recall improves when your internal physiological or emotional state at retrieval matches your state during encoding.",
      },
      {
        conceptId: 'misinformation-effect',
        scenarios: [
          "After witnessing an accident, a participant reads a report describing the driver as 'reckless.' Later they sincerely 'remember' the driver speeding, even though he wasn't. This illustrates...",
          "After a robbery, a witness reads a news article describing the suspect as 'tall and heavyset.' In her police interview, she describes the suspect as larger than she originally recalled. This is an example of...",
          "Participants shown a car crash film and asked 'How fast were the cars going when they smashed into each other?' later reported seeing broken glass that was never in the film. This demonstrates...",
        ],
        correct: "The Misinformation Effect",
        wrongPool: ["State-Dependent Memory", "Source Monitoring Error", "Retroactive Interference", "Proactive Interference", "Dual-Coding Theory", "Encoding Specificity"],
        explanation: "The misinformation effect (Loftus): post-event information gets integrated into the original memory, distorting what was actually encoded.",
      },
      {
        conceptId: 'dual-coding',
        scenarios: [
          "A student creates detailed diagrams alongside her written notes, finding that pairing visual and verbal information helps her retain biochemical pathways far better. The theory supporting this is...",
          "A professor teaches cardiovascular physiology using both detailed diagrams AND verbal explanations. Research suggests this approach improves retention because...",
          "A test-prep tutor advises students to draw flowcharts while reading, arguing that combining pictures and words creates stronger memories than either format alone. This advice is based on...",
        ],
        correct: "Dual-Coding Theory",
        wrongPool: ["State-Dependent Memory", "The Misinformation Effect", "Elaborative Rehearsal", "Encoding Specificity", "Levels of Processing Theory", "The Recency Effect"],
        explanation: "Dual-coding theory (Paivio): encoding in both verbal AND visual formats creates two independent memory traces, improving recall.",
      },
    ],

    showdown: [
      {
        conceptId: 'dual-coding',
        scenarios: [
          "A nursing student draws anatomical diagrams while reading her textbook, believing the combination of images and words helps the material stick better than words alone.",
          "A biochemistry tutor always pairs his verbal explanations with hand-drawn pathway diagrams, arguing the combination is more effective than either alone.",
        ],
        conceptA: "Dual-Coding Theory",
        conceptB: "State-Dependent Memory",
        correct: "Dual-Coding Theory",
        explanation: "Dual-coding = combining visual + verbal encoding for stronger memory. State-dependent = internal physiological state matching at encoding and retrieval — no state cue here.",
      },
      {
        conceptId: 'misinformation-effect',
        scenarios: [
          "A witness to a robbery is later interviewed by a detective who asks, 'Did you notice the large man in the red jacket?' At trial, the witness sincerely describes a red jacket — which the robber never wore.",
          "After seeing a minor car accident, a participant overhears bystanders say the driver 'ran the red light.' Later, the participant reports the driver running a light, though they never saw this.",
        ],
        conceptA: "State-Dependent Memory",
        conceptB: "The Misinformation Effect",
        correct: "The Misinformation Effect",
        explanation: "Post-event suggestion contaminated the original memory. State-dependent memory involves internal physiological states — not external false information altering a memory.",
      },
      {
        conceptId: 'primacy-effect',
        scenarios: [
          "After a long conference talk, a student clearly remembers the professor's opening remarks but has forgotten most of the middle content.",
          "A jury member recalls the prosecutor's opening argument vividly but has trouble remembering testimony from the middle of the trial.",
        ],
        conceptA: "Primacy Effect",
        conceptB: "Recency Effect",
        correct: "Primacy Effect",
        explanation: "Primacy = better recall for items at the BEGINNING of a sequence. Recency = better recall for items at the END.",
      },
      {
        conceptId: 'recency-effect',
        scenarios: [
          "A student remembers the last few slides of a lecture very clearly but has forgotten most of what came before.",
          "After a long series of candidate interviews, the committee finds they are most influenced by the last person they spoke with.",
        ],
        conceptA: "Primacy Effect",
        conceptB: "Recency Effect",
        correct: "Recency Effect",
        explanation: "Recency = better recall for items at the END of a sequence (still active in STM). Primacy = better recall for items at the BEGINNING.",
      },
    ],
  },

  // ── Social Psychology ─────────────────────────────────────────────────
  {
    id: 'social-psychology',
    name: 'Social Psychology',
    place: 'Social Square',
    tagline: "It's not you, it's your attribution style",
    emoji: '👥',
    color: '#F97316',
    lightColor: '#FFEDD5',
    description: "Actor-observer bias · Intrinsic vs. extrinsic motivation · Organizational culture × individual bias",

    scenarioDrop: [
      {
        conceptId: 'actor-observer-bias',
        scenarios: [
          "Dr. Chen arrives late to a meeting and blames heavy traffic. When a colleague arrives late, Dr. Chen assumes the colleague is disorganized. This pattern best illustrates...",
          "After missing a deadline, a resident explains that the ER was unusually chaotic. When a colleague misses the same deadline, the resident assumes she just doesn't manage her time well. This reflects...",
          "When Priya spills coffee on herself, she blames the crowded hallway. When she sees Marcus spill his coffee, she assumes he is careless. This asymmetry is an example of...",
        ],
        correct: "Actor-Observer Bias",
        wrongPool: ["Fundamental Attribution Error", "Self-Serving Bias", "In-Group Favoritism", "Hostile Attribution Bias", "The Halo Effect", "Correspondence Bias"],
        explanation: "Actor-observer bias: we attribute OUR behavior to situations, but OTHER PEOPLE's behavior to their character — a two-way asymmetry. FAE applies only to observers overattributing disposition.",
      },
      {
        conceptId: 'fundamental-attribution-error',
        scenarios: [
          "A student watches a classmate bomb a presentation and concludes 'she must just not handle pressure well' — never considering that the classmate was up all night with a sick child.",
          "An attending physician sees a resident make a procedural error and assumes the resident lacks competence, without considering the resident had been on call for 28 hours.",
          "After watching a driver cut someone off in traffic, a passenger immediately concludes the driver is an aggressive, inconsiderate person — not that they might be rushing to an emergency.",
        ],
        correct: "Fundamental Attribution Error",
        wrongPool: ["Actor-Observer Bias", "Self-Serving Bias", "In-Group Favoritism", "Correspondence Bias", "The Halo Effect", "Hostile Attribution Bias"],
        explanation: "FAE = an OBSERVER over-attributes another person's behavior to stable character traits while ignoring situational factors. Actor-observer bias involves the actor also making a situational attribution for their OWN behavior.",
      },
      {
        conceptId: 'intrinsic-motivation',
        scenarios: [
          "A resident physician works extra ICU shifts, not for overtime pay, but because she finds the intellectual challenge of critical care genuinely fulfilling. Her motivation is best described as...",
          "A second-year medical student spends extra hours in the anatomy lab without being asked, simply because she finds the complexity of the human body fascinating. This is an example of...",
          "A researcher continues working on a difficult problem over a holiday weekend without additional compensation, driven entirely by curiosity about the mechanism. This best describes...",
        ],
        correct: "Intrinsic Motivation",
        wrongPool: ["Extrinsic Motivation", "Achievement Motivation", "Self-Efficacy", "Identified Regulation", "Flow State", "Mastery Orientation"],
        explanation: "Intrinsic motivation arises from internal satisfaction — enjoyment, curiosity, personal meaning — not from external rewards or outcomes.",
      },
      {
        conceptId: 'extrinsic-motivation',
        scenarios: [
          "A pre-med student attends every optional review session primarily because the professor awards bonus points for attendance. His motivation is best described as...",
          "A pre-med student volunteers at a free clinic every weekend, noting that 'it looks great on medical school applications.' His motivation is best described as...",
          "A student takes on additional research responsibilities after learning that top residency programs view research experience favorably. Her motivation is best described as...",
        ],
        correct: "Extrinsic Motivation",
        wrongPool: ["Intrinsic Motivation", "Achievement Motivation", "Identified Regulation", "Self-Efficacy", "Mastery Orientation", "Flow State"],
        explanation: "Extrinsic motivation is driven by external rewards (grades, recognition, application benefits) rather than the inherent enjoyment of the activity.",
      },
      {
        conceptId: 'org-culture-bias',
        scenarios: [
          "A hospital consistently promotes physicians from a single medical school — not due to any written policy, but because senior leaders unconsciously favor those who 'fit the culture.' This best illustrates the interaction of...",
          "A tech firm's informal happy hours consistently exclude introverted employees, and managers unconsciously rate extroverted employees as better 'culture fits' during reviews. This illustrates...",
          "Researchers find that organizations with strong 'prestige culture' amplify individual interviewers' preference for candidates from elite universities. This is an example of...",
        ],
        correct: "Organizational Culture and Individual Bias",
        wrongPool: ["In-Group Favoritism", "Institutional Discrimination", "Social Loafing", "Confirmation Bias", "Groupthink", "The Halo Effect"],
        explanation: "When organizational norms reinforce individual cognitive biases, each amplifies the other. Neither alone fully explains a self-sustaining pattern.",
      },
    ],

    showdown: [
      {
        conceptId: 'intrinsic-motivation',
        scenarios: [
          "A medical student volunteers at a free clinic every Saturday. When asked why, she says: 'I genuinely love working with underserved patients — it's the whole reason I went into medicine.'",
          "A junior researcher runs additional experiments on her day off because the scientific question genuinely excites her, even though it won't affect her performance review.",
        ],
        conceptA: "Intrinsic Motivation",
        conceptB: "Extrinsic Motivation",
        correct: "Intrinsic Motivation",
        explanation: "The reward IS the activity and the personal meaning derived from it — the definition of intrinsic motivation.",
      },
      {
        conceptId: 'extrinsic-motivation',
        scenarios: [
          "A medical student volunteers at a free clinic every Saturday. When asked why, he says: 'Honestly, it looks great on my residency application.'",
          "A student signs up for an elective research course after learning that top residency programs view research experience favorably.",
        ],
        conceptA: "Intrinsic Motivation",
        conceptB: "Extrinsic Motivation",
        correct: "Extrinsic Motivation",
        explanation: "The application benefit is an external outcome — the behavior is driven by what it gets, not what it feels like to do it.",
      },
      {
        conceptId: 'actor-observer-bias',
        scenarios: [
          "When Raj forgets a meeting, he blames his overloaded schedule. When he sees a colleague forget a meeting, he thinks 'she just isn't very organized.'",
          "After arriving late, a student explains it was due to a bus delay. When his classmate arrives late the next day, he assumes she's just not a punctual person.",
        ],
        conceptA: "Actor-Observer Bias",
        conceptB: "Fundamental Attribution Error",
        correct: "Actor-Observer Bias",
        explanation: "Both an actor (attributing their own behavior to situation) AND an observer (attributing someone else's to character) are shown — that two-way asymmetry is actor-observer bias. FAE describes only the observer side.",
      },
      {
        conceptId: 'fundamental-attribution-error',
        scenarios: [
          "A student watches a classmate bomb a presentation and concludes 'she must just not handle pressure well' — never considering that the classmate was up all night with a sick child.",
          "An attending physician sees a resident make a procedural error and assumes the resident lacks competence, without considering that the resident had been on call for 28 hours.",
        ],
        conceptA: "Actor-Observer Bias",
        conceptB: "Fundamental Attribution Error",
        correct: "Fundamental Attribution Error",
        explanation: "Only the OBSERVER's judgment is shown here — over-attributing the other person's behavior to disposition. Actor-observer bias requires also seeing the actor make a situational attribution for their OWN behavior.",
      },
    ],
  },

  // ── Development & Language ─────────────────────────────────────────────
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
        conceptId: 'linguistic-relativity',
        scenarios: [
          "A language has no words for 'past' or 'future' — only the present. A researcher hypothesizes that speakers of this language therefore perceive time differently than English speakers. This exemplifies...",
          "Russian speakers, who have separate words for light blue and dark blue, are faster at distinguishing similar shades of blue than English speakers. This finding supports...",
          "An anthropologist argues that cultures with richer vocabulary for emotional states produce individuals who experience emotions more distinctly. This idea reflects...",
        ],
        correct: "Linguistic Relativity (Sapir-Whorf Hypothesis)",
        wrongPool: ["Linguistic Determinism", "Universal Grammar", "Language Acquisition Device", "Prototype Theory", "Embodied Cognition", "Semantic Priming"],
        explanation: "Linguistic relativity: language INFLUENCES (but does not fully determine) how we perceive and think. Determinism is the stronger, largely discredited claim that language entirely controls thought.",
      },
      {
        conceptId: 'ego-integrity',
        scenarios: [
          "An 85-year-old reflects on his life with deep satisfaction, feeling his choices were meaningful and his legacy secure. According to Erikson, he has successfully resolved...",
          "A 79-year-old woman looks back on her career and relationships with contentment, accepting the path her life took. According to Erikson, she is experiencing the successful resolution of...",
          "A 91-year-old tells his family he has no regrets and feels at peace with the life he lived. According to Erikson, this reflects successful resolution of...",
        ],
        correct: "Ego Integrity vs. Despair",
        wrongPool: ["Generativity vs. Stagnation", "Intimacy vs. Isolation", "Industry vs. Inferiority", "Identity vs. Role Confusion", "Autonomy vs. Shame and Doubt", "Trust vs. Mistrust"],
        explanation: "Erikson's final stage (late adulthood): success = ego integrity — acceptance of one's life as meaningful. Failure = despair over regret and missed opportunities.",
      },
      {
        conceptId: 'despair',
        scenarios: [
          "A 70-year-old retired surgeon looks back on her career and thinks 'I wasted my best years — I should have done so much more.' She feels bitter and regretful. According to Erikson, she is experiencing...",
          "An 82-year-old tells his grandson he wishes he had spent less time working and more time with family, and now feels it's too late to change anything. According to Erikson, this reflects...",
          "A woman in her late 70s is consumed by regret over career choices she made decades ago, feeling her life was ultimately wasted. According to Erikson, she is experiencing...",
        ],
        correct: "Despair (Ego Integrity vs. Despair)",
        wrongPool: ["Stagnation (Generativity vs. Stagnation)", "Isolation (Intimacy vs. Isolation)", "Inferiority (Industry vs. Inferiority)", "Role Confusion (Identity vs. Role Confusion)", "Shame (Autonomy vs. Shame and Doubt)", "Mistrust (Trust vs. Mistrust)"],
        explanation: "Despair is the failure outcome of Erikson's final stage — bitterness and regret over one's life as a whole. Stagnation is the failure outcome of stage 7 (middle adulthood), not late adulthood.",
      },
      {
        conceptId: 'identity-role-confusion',
        scenarios: [
          "A 16-year-old is trying out different friend groups, belief systems, and career ideas, unsure of who she really is. According to Erikson, she is navigating...",
          "A 19-year-old changes his major three times, joins and quits multiple clubs, and frequently questions his values. He tells his therapist he doesn't know who he is. According to Erikson, he is struggling with...",
          "A high school senior experiments with different political beliefs, social groups, and future plans as she tries to establish a sense of self. Erikson would describe this as navigating...",
        ],
        correct: "Identity vs. Role Confusion",
        wrongPool: ["Initiative vs. Guilt", "Industry vs. Inferiority", "Intimacy vs. Isolation", "Generativity vs. Stagnation", "Autonomy vs. Shame and Doubt", "Ego Integrity vs. Despair"],
        explanation: "Erikson's stage 5 (adolescence): the core task is forming a stable, coherent identity. Role confusion results from failure to establish one.",
      },
      {
        conceptId: 'intimacy-isolation',
        scenarios: [
          "A 30-year-old is focused on building deep, committed relationships and fears being alone. According to Erikson, this reflects...",
          "A 28-year-old throws himself into building a serious long-term partnership, feeling that meaningful connection is the most important thing in his life right now. According to Erikson, he is navigating...",
          "A 32-year-old in therapy discusses her fear of commitment and pattern of keeping relationships superficial to avoid vulnerability. Erikson would place her struggle in the stage of...",
        ],
        correct: "Intimacy vs. Isolation",
        wrongPool: ["Identity vs. Role Confusion", "Generativity vs. Stagnation", "Ego Integrity vs. Despair", "Industry vs. Inferiority", "Initiative vs. Guilt", "Trust vs. Mistrust"],
        explanation: "Erikson's stage 6 (young adulthood): forming intimate bonds. Isolation results from an inability to connect. Generativity (stage 7) comes later — contributing to the next generation.",
      },
      {
        conceptId: 'generativity-stagnation',
        scenarios: [
          "A 45-year-old professor mentors students and writes policy papers, feeling her work gives her life purpose beyond herself. According to Erikson, she has successfully resolved...",
          "A 50-year-old physician coaches junior residents and serves on hospital ethics committees, finding deep meaning in shaping the next generation of doctors. According to Erikson, this reflects...",
          "A 48-year-old who previously felt his work was meaningful now feels he is just 'going through the motions' with no impact on others. Erikson would describe his struggle as...",
        ],
        correct: "Generativity vs. Stagnation",
        wrongPool: ["Intimacy vs. Isolation", "Ego Integrity vs. Despair", "Industry vs. Inferiority", "Identity vs. Role Confusion", "Initiative vs. Guilt", "Trust vs. Mistrust"],
        explanation: "Erikson's stage 7 (middle adulthood): generativity = contributing to society and the next generation. Stagnation = self-absorption and a sense of purposelessness.",
      },
      {
        conceptId: 'industry-inferiority',
        scenarios: [
          "A 7-year-old works hard at school projects and feels proud when he masters new skills. When he struggles, he worries he's 'not smart.' According to Erikson, he is navigating...",
          "An 8-year-old compares her schoolwork to her classmates' and feels ashamed when hers isn't as good. According to Erikson, she is working through the conflict of...",
          "A 10-year-old who excels at math develops a strong sense of competence, while a classmate who struggles begins to feel fundamentally less capable. Erikson would describe this as the stage of...",
        ],
        correct: "Industry vs. Inferiority",
        wrongPool: ["Initiative vs. Guilt", "Identity vs. Role Confusion", "Autonomy vs. Shame and Doubt", "Trust vs. Mistrust", "Intimacy vs. Isolation", "Generativity vs. Stagnation"],
        explanation: "Erikson's stage 4 (school age, ~6–12): developing competence through learning and achievement. Failure leads to feelings of inferiority relative to peers.",
      },
    ],

    showdown: [
      {
        conceptId: 'linguistic-relativity',
        scenarios: [
          "A study finds that people who speak languages with more distinct color terms can more quickly distinguish similar shades of blue — suggesting language shapes, but doesn't fully control, color perception.",
          "Bilingual speakers shift their categorization of ambiguous colors depending on which language they're currently using — language moderates, but doesn't determine, perception.",
        ],
        conceptA: "Linguistic Relativity",
        conceptB: "Linguistic Determinism",
        correct: "Linguistic Relativity",
        explanation: "Relativity = language INFLUENCES thought (moderate, supported claim). Determinism = language DETERMINES thought (extreme claim — largely discredited).",
      },
      {
        conceptId: 'identity-role-confusion',
        scenarios: [
          "A 19-year-old college student changes his major three times, joins and quits multiple clubs, and frequently questions his values and career direction.",
          "A first-year college student describes feeling like she is 'trying on different personalities' as she experiments with new friend groups and political beliefs.",
        ],
        conceptA: "Identity vs. Role Confusion",
        conceptB: "Intimacy vs. Isolation",
        correct: "Identity vs. Role Confusion",
        explanation: "Active identity exploration is the hallmark of Erikson's stage 5. Intimacy vs. Isolation (stage 6) comes AFTER a person has established a stable sense of self.",
      },
      {
        conceptId: 'generativity-stagnation',
        scenarios: [
          "A 44-year-old feels disconnected and purposeless at work, as though his daily tasks benefit no one beyond himself. According to Erikson, he is experiencing...",
          "A 50-year-old describes her life as 'going through the motions' — she feels she is contributing nothing to the world beyond her own comfort.",
        ],
        conceptA: "Generativity vs. Stagnation",
        conceptB: "Ego Integrity vs. Despair",
        correct: "Generativity vs. Stagnation",
        explanation: "Stagnation is the failure outcome of stage 7 (middle adulthood) — feeling unproductive and self-absorbed. Despair belongs to stage 8 (late adulthood) — looking back on a life with regret.",
      },
    ],
  },

  // ── Research & Statistics ─────────────────────────────────────────────
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
        conceptId: 'mixed-methods',
        scenarios: [
          "A researcher measures patient satisfaction using a validated 1–10 scale for 500 patients AND conducts in-depth interviews with 20 patients about their experiences. This study design is best described as...",
          "A public health researcher uses hospital records to track infection rates AND interviews patients about their healthcare experiences. This is an example of...",
          "A sociologist measures social mobility using census data AND conducts focus groups to understand barriers to advancement. Her approach is best described as...",
        ],
        correct: "Mixed-Methods Design",
        wrongPool: ["Quasi-Experimental Design", "Longitudinal Design", "Case Study", "Grounded Theory", "Ethnography", "Cross-Sectional Design"],
        explanation: "Mixed-methods integrates quantitative data (numbers, scales) AND qualitative data (interviews, narrative) in a single study.",
      },
      {
        conceptId: 'median',
        scenarios: [
          "A dataset of physician incomes includes a handful of specialists earning $2M+. Which measure of central tendency best represents what the typical physician earns?",
          "A real estate report lists the 'average' home price in a neighborhood, but three ultra-luxury penthouses have dramatically inflated this figure. Which measure better represents what a typical buyer will pay?",
          "In a study of medical school debt, a few students with family-funded tuition owe nothing while most owe $200,000+. Which measure best represents the 'typical' graduate's debt burden?",
        ],
        correct: "Median",
        wrongPool: ["Mean", "Mode", "Standard Deviation", "Variance", "Range", "Interquartile Range"],
        explanation: "The median is resistant to extreme outliers. The mean would be pulled dramatically by the few extreme values, misrepresenting the typical person.",
      },
      {
        conceptId: 'mean',
        scenarios: [
          "Which measure of central tendency is MOST distorted by a single extreme outlier?",
          "A researcher calculates the average exam score for 30 students. One student scored 0 due to academic dishonesty. Which measure is most affected by including this score?",
          "Which measure of central tendency uses every value in the dataset in its calculation, making it sensitive to extreme scores at either end?",
        ],
        correct: "Mean",
        wrongPool: ["Median", "Mode", "Range", "Standard Deviation", "Variance", "Geometric Mean"],
        explanation: "The mean uses every value in its calculation, so one extreme number shifts it significantly. The median uses only the middle value(s) — outliers don't change it.",
      },
      {
        conceptId: 'dyad',
        scenarios: [
          "Two medical students form a study partnership and develop shared shorthand and unspoken norms. This two-person social group is called a...",
          "A therapist and client meet weekly for individual therapy. Their exclusive two-person relationship is an example of a...",
          "Two business partners found a startup with no other employees. Their working relationship exemplifies the structure of a...",
        ],
        correct: "Dyad",
        wrongPool: ["Triad", "Primary Group", "In-Group", "Reference Group", "Social Network", "Coalition"],
        explanation: "A dyad is the smallest social unit — just two people. Dyads are uniquely fragile: if either person leaves, the group ceases to exist entirely.",
      },
      {
        conceptId: 'triad',
        scenarios: [
          "When a third student joins a two-person study group, new coalition possibilities emerge — two can gang up on one, someone can mediate — and the dynamics fundamentally shift. The new group is called a...",
          "A married couple has managed household decisions smoothly for years. After adopting a child, decisions now involve more negotiation and shifting alliances. Their family unit has become a...",
          "Adding a third partner to a two-person business creates new possibilities for coalition formation and introduces a potential mediator for disputes. The new group structure is called a...",
        ],
        correct: "Triad",
        wrongPool: ["Dyad", "Social Network", "Reference Group", "Coalition", "Primary Group", "In-Group"],
        explanation: "A triad (three members) introduces coalition formation and mediation — dynamics structurally impossible in a dyad. Simmel identified this as a critical threshold.",
      },
      {
        conceptId: 'closed-network',
        scenarios: [
          "A tight-knit religious community where members primarily marry within the group, do business only with each other, and share information almost entirely internally exemplifies a...",
          "A private equity firm whose partners exclusively hire from their own alumni network and refer deals only to each other, rarely bringing in outside contacts, exemplifies a...",
          "A small town where residents mainly socialize with each other, distrust outsiders, and circulate news only through established internal channels is best described as having a...",
        ],
        correct: "Closed Network",
        wrongPool: ["Open Network", "Weak-Tie Network", "Bridging Network", "Structural Hole", "Brokerage Network", "Social Capital"],
        explanation: "Closed networks have dense internal ties and strong social boundaries. They build trust and reinforce norms but limit access to outside information and opportunities.",
      },
    ],

    showdown: [
      {
        conceptId: 'median',
        scenarios: [
          "A hospital publishes its 'average' ER wait time. The dataset includes a few patients who waited 10+ hours due to unusual complications. Which measure gives prospective patients the most accurate picture of what THEY will likely experience?",
          "A city reports the 'average' household income to describe typical residents' finances, but a small number of billionaires are included. Which measure better captures the typical household?",
        ],
        conceptA: "Median",
        conceptB: "Mean",
        correct: "Median",
        explanation: "The median represents the typical experience because it isn't pulled by extreme outliers. The mean would be inflated by those rare extreme cases.",
      },
      {
        conceptId: 'mean',
        scenarios: [
          "A hospital administrator wants to calculate the exact total nursing hours worked across all 50 nurses this month to determine payroll costs. Which measure should she use?",
          "A researcher needs to calculate the total caloric intake across all 80 study participants to determine average daily consumption for the whole group. Which measure is appropriate?",
        ],
        conceptA: "Mean",
        conceptB: "Median",
        correct: "Mean",
        explanation: "When you need a precise aggregate that accounts for ALL data points (for resource calculations, totals), the mean is the right tool.",
      },
      {
        conceptId: 'triad',
        scenarios: [
          "Two longtime colleagues always resolve disagreements quickly and privately. When their manager joins their project team permanently, conflicts become more visible and shifting alliances start forming.",
          "A couple that has made joint decisions easily for years adds a third business partner to their small firm. Suddenly some decisions become contentious, with two often siding against one.",
        ],
        conceptA: "Dyad",
        conceptB: "Triad",
        correct: "Triad",
        explanation: "The arrival of the third person introduces coalition dynamics and power shifts that Simmel identified as structurally unavailable in two-person groups.",
      },
      {
        conceptId: 'dyad',
        scenarios: [
          "Two co-founders run a company smoothly with no outside partners. Every decision is made by consensus between just the two of them, and the company would dissolve if either left.",
          "A peer-mentorship program pairs each new medical student with exactly one senior student for one-on-one guidance throughout the year.",
        ],
        conceptA: "Dyad",
        conceptB: "Triad",
        correct: "Dyad",
        explanation: "Two-person group = dyad. The key feature: the relationship is entirely dependent on both people staying — no third party to form coalitions with or mediate.",
      },
      {
        conceptId: 'mixed-methods',
        scenarios: [
          "A health researcher surveys 300 patients with a validated scale AND conducts 15 semi-structured interviews to understand the 'why' behind the survey results. She never manipulates any variable.",
          "A study on burnout collects burnout scores from 200 physicians (quantitative) and follows up with in-depth interviews of 25 physicians about their lived experience (qualitative).",
        ],
        conceptA: "Mixed-Methods Design",
        conceptB: "Quasi-Experimental Design",
        correct: "Mixed-Methods Design",
        explanation: "Mixed-methods = combining quantitative + qualitative data. Quasi-experimental = studying groups without random assignment but WITH variable manipulation. No manipulation here.",
      },
    ],
  },
];
