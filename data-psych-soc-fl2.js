// Psych/Soc — FL2 gap additions
// Source: AAMC Practice Exam 2 gap analysis

(function () {
  const clusters = [

    // ── Conditioning & Learning ────────────────────────────────────────────
    {
      id: 'conditioning-learning',
      name: 'Conditioning & Learning',
      place: 'Conditioning Corner',
      tagline: 'Pavlov, Skinner, and everything between',
      emoji: '🔔',
      color: '#D97706',
      lightColor: '#FEF3C7',
      description: 'Operant vs classical conditioning, CS vs UCS, reinforcement schedules',
      scenarioDrop: [
        {
          conceptId: 'operant-vs-classical',
          label: 'Reward-seeking = operant conditioning',
          scenarios: [
            'A rat learns to press a lever repeatedly because pressing it delivers food. This behavior change is governed by which type of learning?',
            'Animals learn to perform actions that produce rewards and avoid actions that produce punishment. This is called...',
            'A researcher studying reward-seeking motivation in mice would draw on which learning theory?',
          ],
          correct: 'Operant conditioning — behavior is shaped by its consequences (rewards increase behavior, punishments decrease it)',
          wrongPool: [
            'Classical conditioning — a neutral stimulus is paired with a stimulus that already evokes a response; about association, not reward-driven action',
            'Observational learning — watching and imitating a model\'s behavior (Bandura)',
            'Habituation — decreased response after repeated, inconsequential exposure to a stimulus',
            'Sensitization — increased response after a strong or noxious stimulus',
            'Latent learning — occurs without reinforcement and is not demonstrated until needed',
          ],
          explanation: 'Operant conditioning (Skinner): consequences shape behavior. Rewards (positive reinforcement) increase the behavior; punishments decrease it. Lever → food → more pressing = operant. Classical conditioning (Pavlov) is about stimulus–response associations, not reward-driven action.',
        },
        {
          conceptId: 'cs-vs-ucs',
          label: 'CS = neutral cue (the light); UCS = the shock',
          scenarios: [
            'A light is repeatedly paired with a foot shock. Eventually the light alone elicits fear. The light is the... and the foot shock is the...',
            'In Pavlov\'s experiments, the tone that was initially neutral and later elicited salivation on its own is called the...',
            'A dog salivates to food automatically. After pairing a bell with food, the dog salivates to the bell alone. The food is the...',
          ],
          correct: 'Conditioned stimulus (CS) — the originally-neutral cue that acquires the ability to elicit the response after pairing',
          wrongPool: [
            'Unconditioned stimulus (UCS) — the stimulus that naturally and automatically triggers the response without any learning',
            'Conditioned response (CR) — the learned response to the CS (e.g., the fear elicited by the light)',
            'Unconditioned response (UCR) — the automatic, unlearned response to the UCS (e.g., fear to the shock)',
            'Neutral stimulus — what the CS is called BEFORE conditioning; the bell/light before pairing',
            'Discriminative stimulus — operant term for a cue signaling when reinforcement is available',
          ],
          explanation: 'Classical conditioning sequence: UCS (shock/food) → UCR (fear/salivation) — automatic, no learning needed. After pairing: CS (light/bell) → CR (same response). The light/bell starts neutral and becomes the CS. The shock/food is always the UCS — it triggers the response naturally.',
        },
        {
          conceptId: 'fixed-ratio-reinforcement',
          label: 'Fixed-ratio = count-based, consistent',
          scenarios: [
            'A factory worker is paid for every 10 items assembled, every time — regardless of how long it took. This reinforcement schedule is...',
            'A rat must press a lever exactly 5 times to receive one food pellet, every single time. This is a...',
            'Reinforcement is delivered after a consistent number of correct responses, with no time component. This is a...',
          ],
          correct: 'Fixed-ratio (FR) schedule — reinforcer delivered after a set NUMBER of responses; count-based and consistent',
          wrongPool: [
            'Variable-interval (VI) schedule — reinforcer delivered after VARYING amounts of TIME have elapsed; time-based and unpredictable',
            'Fixed-interval (FI) schedule — reinforcer for the first response after a SET TIME has passed; time-based and consistent',
            'Variable-ratio (VR) schedule — reinforcer after an AVERAGE number of responses that varies unpredictably; count-based but unpredictable',
            'Continuous reinforcement (CRF) — reward after every single response; not ratio or interval',
            'Negative reinforcement — removal of an aversive stimulus to increase behavior; not a schedule type',
          ],
          explanation: 'Ratio = count of responses. Interval = time elapsed. Fixed = consistent. Variable = unpredictable. Fixed-ratio: reward every Nth response — produces high, steady response rate with brief pauses after each reward. Variable-interval (common wrong answer): time-based, not count-based.',
        },
      ],
      showdown: [
        {
          conceptId: 'operant-vs-classical',
          scenarios: [
            'A dog presses a button with its nose to receive treats. Treat delivery is contingent on the behavior. The behavior increases because of its consequences. This is...',
            'Reward-seeking motivation — behavior reinforced by positive outcomes — is explained by which learning theory?',
          ],
          conceptA: 'Operant conditioning — consequences shape behavior',
          conceptB: 'Classical conditioning — neutral stimulus paired with response-eliciting stimulus',
          correct: 'Operant conditioning — consequences shape behavior',
          explanation: 'Rewards and punishments → operant. Stimulus–stimulus pairing and automatic response transfer → classical. Lever → food → more pressing = consequences driving behavior = operant.',
        },
        {
          conceptId: 'cs-vs-ucs',
          scenarios: [
            'A foot shock automatically causes fear — no training needed. Paired with a light, the shock is the...',
            'In a fear-conditioning experiment, the stimulus that naturally produces the response (without learning) is the...',
          ],
          conceptA: 'Unconditioned stimulus (UCS) — naturally triggers the response',
          conceptB: 'Conditioned stimulus (CS) — neutral cue that learned to trigger the response',
          correct: 'Unconditioned stimulus (UCS) — naturally triggers the response',
          explanation: 'UCS (shock, food) → automatic response, no learning required. CS (light, bell) = started neutral, acquired the response through pairing. The shock IS the UCS; the light BECOMES the CS.',
        },
        {
          conceptId: 'fixed-ratio-reinforcement',
          scenarios: [
            'A gig worker gets paid per delivery — every 10th delivery triggers payment, consistently. The payment is count-based and consistent. This is...',
            'Count-based + consistent reinforcement schedule:',
          ],
          conceptA: 'Fixed-ratio — reinforcement after a set NUMBER of responses',
          conceptB: 'Variable-interval — reinforcement after VARYING amounts of TIME',
          correct: 'Fixed-ratio — reinforcement after a set NUMBER of responses',
          explanation: 'Fixed-ratio: count responses, fixed threshold, deliver reward. Variable-interval: wait unpredictable time periods, deliver reward for first response after each interval. Pay-per-unit = count-based = ratio.',
        },
      ],
    },

    // ── Intelligence Types ─────────────────────────────────────────────────
    {
      id: 'intelligence-types',
      name: 'Intelligence Types',
      place: 'Intelligence Hub',
      tagline: 'Not all smarts look the same',
      emoji: '💡',
      color: '#8B5CF6',
      lightColor: '#EDE9FE',
      description: 'Emotional vs interpersonal intelligence, crystallized vs fluid intelligence',
      scenarioDrop: [
        {
          conceptId: 'emotional-vs-interpersonal',
          label: 'Delay of gratification = emotional intelligence',
          scenarios: [
            'A child resists eating one marshmallow now to receive two marshmallows later. This delay of gratification reflects which type of intelligence?',
            'The ability to recognize, understand, and manage one\'s own emotions — including resisting immediate impulses for long-term reward — is called...',
            'A student recognizes rising test anxiety and uses self-calming techniques to maintain focus. This self-regulation reflects...',
          ],
          correct: 'Emotional intelligence — perceiving, understanding, and managing one\'s own emotions and impulses',
          wrongPool: [
            'Interpersonal intelligence — understanding and managing relationships with OTHER people; not self-regulation',
            'Intrapersonal intelligence — awareness of one\'s own inner states (broader; EI is more specifically about emotion management)',
            'Linguistic intelligence — verbal and language-based abilities',
            'Logical-mathematical intelligence — reasoning, numbers, and pattern recognition',
            'Practical intelligence — applying knowledge to real-world problems (Sternberg)',
          ],
          explanation: 'Emotional intelligence (Mayer/Salovey): perceiving, using, understanding, and MANAGING emotions — especially one\'s own. Delay of gratification = managing personal impulses = emotional. Interpersonal intelligence (Gardner) = understanding and relating to OTHER people. Self-regulation vs. other-directed: emotional vs. interpersonal.',
        },
        {
          conceptId: 'crystallized-vs-fluid',
          label: 'Crystallized = stored knowledge; Fluid = novel reasoning',
          scenarios: [
            'A retired professor still recalls obscure Latin phrases from decades of study. This reflects which type of intelligence?',
            'Solving a completely novel puzzle that requires in-the-moment reasoning rather than remembered knowledge relies on which intelligence type?',
            'Which type of intelligence declines with age while the other is relatively preserved or improves?',
          ],
          correct: 'Fluid intelligence — reasoning with novel problems; peaks in early adulthood and declines with age',
          wrongPool: [
            'Crystallized intelligence — accumulated knowledge, vocabulary, and learned skills; relatively preserved or improves with age',
            'Emotional intelligence — recognition and management of emotions; unrelated to the crystallized/fluid distinction',
            'Spatial intelligence — ability to visualize and mentally manipulate objects in space',
            'Practical intelligence — real-world problem-solving (Sternberg\'s triarchic theory)',
            'Analytical intelligence — logical reasoning in academic contexts (Sternberg)',
          ],
          explanation: 'Crystallized (Gc): stored knowledge and skills built over a lifetime — vocabulary, facts, expertise. Stable or improves into old age. Fluid (Gf): reasoning with new information in the moment — pattern recognition, novel problem-solving. Peaks in early 20s, declines with age.',
        },
      ],
      showdown: [
        {
          conceptId: 'emotional-vs-interpersonal',
          scenarios: [
            'A student resists the urge to check social media while studying, recognizing and managing her own impulses. This self-regulation reflects which type of intelligence?',
            'Delay of gratification = control over one\'s own emotions. Understanding what a friend is feeling = ...',
          ],
          conceptA: 'Emotional intelligence — managing one\'s own emotions',
          conceptB: 'Interpersonal intelligence — understanding others',
          correct: 'Emotional intelligence — managing one\'s own emotions',
          explanation: 'Emotional (self): recognizing and managing own emotional states, impulses, self-regulation. Interpersonal (other): reading others, empathy, social skill in relationships. Delay of gratification = self-management = emotional.',
        },
        {
          conceptId: 'crystallized-vs-fluid',
          scenarios: [
            'An older adult excels at crossword puzzles (vocabulary/stored knowledge) but struggles with a novel logic game (new reasoning). Their crossword strength reflects...',
            'Knowledge you\'ve accumulated over years vs. reasoning you apply to brand-new situations:',
          ],
          conceptA: 'Crystallized intelligence — preserved knowledge',
          conceptB: 'Fluid intelligence — novel reasoning, declines with age',
          correct: 'Crystallized intelligence — preserved knowledge',
          explanation: 'Crystallized (Gc) = accumulated knowledge + skills. Preserved or improves with age. Fluid (Gf) = novel reasoning. Declines with age. Crossword = crystallized; unfamiliar logic game = fluid.',
        },
      ],
    },

    // ── Sensation & Perception ─────────────────────────────────────────────
    {
      id: 'sensation-perception',
      name: 'Sensation & Perception',
      place: 'The Perception Lab',
      tagline: 'From stimulus to experience',
      emoji: '👁️',
      color: '#0D9488',
      lightColor: '#CCFBF1',
      description: 'Fovea vs optic disc, signal detection sensitivity vs response bias',
      scenarioDrop: [
        {
          conceptId: 'fovea-vs-optic-disc',
          label: 'Fovea = cones + acuity (not optic disc)',
          scenarios: [
            'Which region of the retina has the highest density of cones and is responsible for sharp color vision in central gaze?',
            'When you stare directly at a word, which retinal area processes that central image with maximum detail and color accuracy?',
            'A person stares at a bright red apple. The retinal region providing the clearest color discrimination is the...',
          ],
          correct: 'Fovea — highest cone density; the center of the visual field; provides maximum acuity and color vision',
          wrongPool: [
            'Optic disc — the blind spot; contains zero photoreceptors; cannot contribute to color vision or acuity',
            'Peripheral retina — high rod density; good for low-light and motion detection, not central color acuity',
            'Cornea — refracts light onto the retina but is not a photoreceptor region',
            'Lens — focuses light but contains no photoreceptors',
            'Macula — surrounds the fovea; partially correct, but the fovea centralis is the specific high-acuity region',
          ],
          explanation: 'Fovea = roughly 50,000 cones/mm² in the center of the macula. When you look directly at something, its image falls on the fovea — maximum sharpness and color detail. The optic disc is the blind spot (where the optic nerve exits; no photoreceptors at all). These are opposite: best vision vs. no vision.',
        },
        {
          conceptId: 'signal-detection-bias',
          label: 'SDT: criterion (β) ≠ sensitivity (d′)',
          scenarios: [
            'A radiologist lowers their threshold for flagging suspicious tissue (to avoid missing any cancer), resulting in more false alarms. What has changed?',
            'In signal detection theory, a subject who says "yes" more liberally — accepting more false alarms to catch more hits — has shifted their...',
            'Signal detection theory separates two independent factors. One is the ability to distinguish signal from noise. The other is the willingness to say "yes." A liberal criterion affects which of these?',
          ],
          correct: 'Response bias (criterion β) — how willing the observer is to respond "yes"; independent of true sensitivity',
          wrongPool: [
            'Sensitivity (d′) — the true ability to detect signal from noise; determined by sensory capacity, not decision strategy',
            'Absolute threshold — the minimum stimulus detectable 50% of the time; not the SDT criterion',
            'Difference threshold (JND) — the smallest detectable change between two stimuli; not response bias',
            'Selective attention — focusing on one stimulus while filtering others; not an SDT parameter',
            'Perceptual set — how expectations shape perception; not the SDT criterion shift',
          ],
          explanation: 'SDT separates two things: d′ (d-prime) = true sensitivity (can you hear the signal in the noise?) — fixed by sensory biology. β (criterion) = decision threshold (how sure do you need to be before saying "yes?") — set by strategy, cost of errors, motivation. A radiologist lowering threshold to catch more tumors shifts β, not d′.',
        },
      ],
      showdown: [
        {
          conceptId: 'fovea-vs-optic-disc',
          scenarios: [
            'You look directly at a word and see it in crisp detail — the image lands on the most cone-dense region of the retina. Which retinal area is responsible?',
            'The blind spot (zero photoreceptors) is the optic disc. The center of sharpest vision (cone-dense) is the...',
          ],
          conceptA: 'Fovea — cone-dense, maximum acuity and color vision',
          conceptB: 'Optic disc — blind spot, no photoreceptors',
          correct: 'Fovea — cone-dense, maximum acuity and color vision',
          explanation: 'Fovea = highest cone concentration → best color vision and acuity. Optic disc = where optic nerve exits → zero photoreceptors → blind spot. Exact opposites in terms of visual function.',
        },
        {
          conceptId: 'signal-detection-bias',
          scenarios: [
            'A doctor says "yes, I see something suspicious" more often to avoid missing cancers. True sensitivity (d′) is unchanged. What has shifted?',
            'In SDT, the ability to detect signal (d′) vs. the willingness to say "yes" (β): which one changes when a radiologist lowers their threshold?',
          ],
          conceptA: 'Response bias / criterion (β) — willingness to say yes',
          conceptB: 'Sensitivity (d′) — true ability to detect signal',
          correct: 'Response bias / criterion (β) — willingness to say yes',
          explanation: 'd′ is set by sensory biology and stays fixed unless sensory conditions change. β is a decision strategy — shift it to say yes more often (liberal) or less often (conservative). Lowering a detection threshold = shifting β.',
        },
      ],
    },

    // ── Group Dynamics ─────────────────────────────────────────────────────
    {
      id: 'group-dynamics',
      name: 'Group Dynamics',
      place: 'The Social Arena',
      tagline: 'How groups change individual behavior',
      emoji: '👥',
      color: '#DC2626',
      lightColor: '#FEE2E2',
      description: 'Hawthorne effect vs impression management, social loafing vs social facilitation',
      scenarioDrop: [
        {
          conceptId: 'hawthorne-vs-impression',
          label: 'Hawthorne effect = passive response to being watched',
          scenarios: [
            'Workers in a factory increased productivity simply because they knew researchers were observing them — not because they were trying to look good. This is the...',
            'Research participants perform differently when they know they are being watched, without any deliberate self-presentation strategy. This is the...',
            'A clinical trial finds that patients exercise more during monitored weeks than unmonitored weeks, even in the control group. This illustrates the...',
          ],
          correct: 'Hawthorne effect — behavior changes simply because of being observed; no deliberate intent required',
          wrongPool: [
            'Impression management — actively and deliberately controlling how others perceive you; requires intentional effort',
            'Social desirability bias — tendency to answer surveys in ways that seem socially acceptable',
            'Placebo effect — outcomes change because of belief in a treatment, not because of observation',
            'Demand characteristics — experimental cues that signal what the researcher expects; related but distinct',
            'Observer bias — researcher\'s expectations distort their observations; different from participant behavior change',
          ],
          explanation: 'Hawthorne effect: being watched (even passively/neutrally) changes behavior — no strategy needed. Impression management: deliberately crafting the image you project. Key distinction: Hawthorne = automatic, passive response to observation; impression management = deliberate, strategic self-presentation.',
        },
        {
          conceptId: 'social-loafing',
          label: 'Social loafing = less effort in groups than alone',
          scenarios: [
            'In a rope-pulling experiment, individuals pull with less force when in a group than when pulling alone. This is called...',
            'A brainstorming study finds that people generate fewer ideas per person in groups than when working individually. This is evidence of...',
            'Individual effort and accountability decrease when working as part of a group. This phenomenon is...',
          ],
          correct: 'Social loafing — individuals exert less effort in a group than when working alone',
          wrongPool: [
            'Social facilitation — improved performance in the presence of others (for well-learned tasks); the opposite effect',
            'Groupthink — group cohesion suppresses dissent and critical thinking; not about individual effort reduction',
            'Deindividuation — loss of self-awareness in crowds leads to impulsive behavior; not reduced effort per se',
            'Bystander effect — decreased individual helping as group size increases; specific to helping situations',
            'Conformity — adjusting behavior to match group norms; not the same as reduced individual effort',
          ],
          explanation: 'Social loafing: individual contribution decreases in groups because accountability is diffused (everyone assumes others will carry the load). Social facilitation is the opposite: an audience improves performance for well-practiced tasks. Loafing = less effort; facilitation = more effort.',
        },
      ],
      showdown: [
        {
          conceptId: 'hawthorne-vs-impression',
          scenarios: [
            'Factory workers speed up when a researcher watches, then slow down when the researcher leaves — no deliberate effort to look good, just an automatic response to being observed. Which phenomenon describes this?',
            'Being observed passively changes behavior (Hawthorne). Deliberately managing how you appear to others is...',
          ],
          conceptA: 'Hawthorne effect — passive, automatic response to observation',
          conceptB: 'Impression management — deliberate, strategic self-presentation',
          correct: 'Hawthorne effect — passive, automatic response to observation',
          explanation: 'Hawthorne effect: people behave differently just because they\'re being watched — no conscious effort to look good required. Impression management: active strategy to control your image. Passive vs. deliberate is the key distinction.',
        },
        {
          conceptId: 'social-loafing',
          scenarios: [
            'Each person in a rope-pulling team exerts less force than when pulling alone — individual accountability is diffused across the group. Which phenomenon is this?',
            'In a clapping study, people in a crowd clap less loudly per person than when clapping alone. In a separate study, an audience watching a trained pianist improved her performance. The first phenomenon (reduced individual effort in groups) is...',
          ],
          conceptA: 'Social loafing — less effort in groups',
          conceptB: 'Social facilitation — better performance with audience',
          correct: 'Social loafing — less effort in groups',
          explanation: 'Social loafing = reduced individual effort when accountability is shared. Social facilitation = performance boost from being watched (for well-learned tasks). They can actually oppose each other: being in a group reduces individual effort (loafing), but having an audience can improve performance (facilitation).',
        },
      ],
    },

    // ── Stratification & Demography ────────────────────────────────────────
    {
      id: 'stratification-demography',
      name: 'Stratification & Demography',
      place: 'Stratification Station',
      tagline: 'Class, poverty, and population dynamics',
      emoji: '⚖️',
      color: '#4338CA',
      lightColor: '#E0E7FF',
      description: 'Meritocracy vs cultural capital, relative vs absolute poverty, dependency ratio',
      scenarioDrop: [
        {
          conceptId: 'meritocracy-vs-cultural-capital',
          label: 'Meritocracy = talent + effort → success',
          scenarios: [
            'A society claims that success comes purely from talent and hard work. Evidence of low intergenerational social mobility challenges which concept?',
            'The belief that social rewards are distributed based on ability and effort — independent of inherited status or background — is called...',
            'A sociologist argues that elite university admission depends more on parents\' class and cultural knowledge than on individual merit. The concept being challenged is...',
          ],
          correct: 'Meritocracy — the system/belief that reward reflects talent and effort alone, without inherited advantage',
          wrongPool: [
            'Cultural capital — the non-financial social assets (knowledge, credentials, tastes) that confer advantage and are inherited; this EXPLAINS why meritocracy fails, not what is being challenged',
            'Social mobility — movement between social strata over time; a measure, not a belief system',
            'Social stratification — the hierarchical arrangement of groups; broader than meritocracy',
            'Cultural reproduction — Bourdieu\'s concept that culture perpetuates class across generations; related to cultural capital',
            'Symbolic interactionism — framework focused on meaning in social interactions; not relevant here',
          ],
          explanation: 'Meritocracy = the ideal (or ideology) that talent + effort = reward. Evidence of persistent class advantage challenges this. Cultural capital (Bourdieu) = non-monetary assets (education, social connections, cultural knowledge) that are inherited and create advantage — which undermines meritocracy.',
        },
        {
          conceptId: 'relative-vs-structural-poverty',
          label: 'Relative poverty = disadvantaged compared to others',
          scenarios: [
            'A family earns significantly less than the median income in their society — they have food and shelter but are far poorer than their neighbors. This is called...',
            'As a country\'s average income rises, the threshold for who counts as poor also rises. This definition of poverty is...',
            'Relative poverty measures disadvantage in comparison to other members of the same society. How does it differ from absolute poverty?',
          ],
          correct: 'Relative poverty — defined by income/wealth disadvantage compared to others in the same society; threshold shifts as society changes',
          wrongPool: [
            'Structural poverty — refers to systemic barriers (lack of opportunity, discrimination) that trap people in poverty; about cause, not the comparison-based definition',
            'Absolute poverty — failing to meet basic survival needs (food, shelter) regardless of what others have; fixed threshold',
            'Subjective poverty — self-reported sense of being poor; based on personal perception, not comparison',
            'Cyclical poverty — poverty caused by economic downturns; temporary in nature',
            'Generational poverty — poverty passed down across multiple family generations',
          ],
          explanation: 'Relative poverty = comparison to others in the same society (e.g., below 50% of median income). Shifts as society\'s wealth changes. Absolute poverty = fixed threshold (e.g., below $2/day regardless of what others earn). Structural poverty = about systemic causes (discrimination, lack of opportunity) — a causal explanation, not a definition of who is poor.',
        },
        {
          conceptId: 'dependency-ratio-vs-life-course',
          label: 'Dependency ratio = dependents ÷ working-age adults',
          scenarios: [
            'As the proportion of people over 65 grows and fewer working-age adults remain, what demographic statistic increases?',
            'An aging population means fewer workers supporting more retirees. The quantitative measure capturing this is the...',
            'The ratio of economically dependent people (children + elderly) to the working-age population is called the...',
          ],
          correct: 'Dependency ratio — (dependents under 18 + over 65) ÷ working-age population (18–65)',
          wrongPool: [
            'Life course perspective — examines how early-life events and social contexts shape health and development across the lifespan; a theoretical framework, not a demographic ratio',
            'Fertility rate — average number of children per woman; not the same as the dependency ratio',
            'Cohort effect — shared experiences of people born in the same era; not a demographic ratio',
            'Age-specific mortality rate — deaths per 1,000 in a specific age group; not the dependency ratio',
            'Total fertility rate — expected children per woman over a lifetime; different from the dependency ratio',
          ],
          explanation: 'Dependency ratio = number of dependents (roughly age 0–14 + 65+) ÷ number of working-age adults (15–64). An aging population (more elderly, fewer workers) raises this ratio. Life course perspective is a theoretical lens — it examines how early-life exposures shape later health outcomes. One is a number; the other is a framework.',
        },
      ],
      showdown: [
        {
          conceptId: 'meritocracy-vs-cultural-capital',
          scenarios: [
            'The belief that talent and effort alone determine success is meritocracy. The inherited social assets (education, connections, cultural knowledge) that actually confer advantage are...',
            'Meritocracy assumes effort = reward. Bourdieu\'s concept explaining WHY inherited advantage persists is...',
          ],
          conceptA: 'Meritocracy — effort and talent determine success',
          conceptB: 'Cultural capital — inherited social assets create advantage',
          correct: 'Meritocracy — effort and talent determine success',
          explanation: 'Meritocracy = the belief/system. Cultural capital (Bourdieu) = the inherited assets (education, tastes, credentials) that undermine meritocracy by giving advantages to those who already have them. Cultural capital explains why pure meritocracy is hard to achieve.',
        },
        {
          conceptId: 'relative-vs-structural-poverty',
          scenarios: [
            'A family has food and shelter but earns well below the median income in their wealthy country. They are relatively disadvantaged — this is...',
            'Poverty defined by comparison to others in the same society (not a fixed survival threshold) is...',
          ],
          conceptA: 'Relative poverty — defined by comparison to others',
          conceptB: 'Absolute poverty — below a fixed survival threshold',
          correct: 'Relative poverty — defined by comparison to others',
          explanation: 'Relative poverty moves with the society — a family "poor" in a wealthy country may exceed the absolute poverty line but still be far below their neighbors. Absolute poverty is fixed: do you have enough for basic survival?',
        },
        {
          conceptId: 'dependency-ratio-vs-life-course',
          scenarios: [
            'A government report quantifies how many retirees each worker must support. The statistic is the dependency ratio, not the...',
            'Dependency ratio (a number) vs. life course perspective (a theory): which explains how aging population demographics strain working-age populations?',
          ],
          conceptA: 'Dependency ratio — quantitative demographic statistic',
          conceptB: 'Life course perspective — theoretical framework on early-life effects',
          correct: 'Dependency ratio — quantitative demographic statistic',
          explanation: 'Dependency ratio = a number (dependents ÷ workers). Life course perspective = a theory about how early experiences shape later life outcomes. One measures population structure; the other explains individual development across time.',
        },
      ],
    },

  ];

  // Push clusters into global CLUSTERS array
  clusters.forEach(c => CLUSTERS.push(c));

  // Add new cluster IDs to the Psych/Soc section
  const psychSoc = SECTIONS.find(s => s.id === 'psych-soc');
  if (psychSoc) {
    psychSoc.clusterIds.push(...clusters.map(c => c.id));
  }
})();
