(function () {
  const clusters = [

    // ── Drill 1A: Sensory & Perceptual Concepts ───────────────────────────────
    {
      id: 'fl3-ps-sensory-perception',
      label: 'Sensory & Perceptual Concepts',
      color: '#7c3aed',
      light: '#ede9fe',
      icon: '👁️',
      scenarioDrop: [
        {
          conceptId: 'fl3-ps-sp-1',
          scenarios: [
            'A tightrope walker performs better when she can see the horizon than when she closes her eyes. Vision is stabilizing her balance. What concept does this illustrate?',
            'A skier stays upright more easily when trees are visible than in a whiteout. One sensory modality is assisting another. What is this?',
          ],
          options: ['Sensory interaction — one sensory modality (vision) enhances the function of another (balance)', 'Vestibular sense — the inner-ear balance system is activated by the visual input', 'Proprioception — the body detects its own position using joint and muscle receptors', 'Perceptual adaptation — the visual system adjusts to the unusual environment'],
          correct: 'Sensory interaction — one sensory modality (vision) enhances the function of another (balance)',
          wrongPool: ['Vestibular sense — the inner-ear balance system is activated by the visual input', 'Proprioception — the body detects its own position using joint and muscle receptors', 'Perceptual adaptation — the visual system adjusts to the unusual environment', 'Motion parallax — nearby objects appear to move faster, aiding depth perception'],
        },
        {
          conceptId: 'fl3-ps-sp-2',
          scenarios: [
            'A subject experiences nausea on a ship when the visual scene suggests stillness but the inner ear detects motion. Which system is providing the "motion" signal?',
            'The semicircular canals and otolith organs detect head rotation and linear acceleration. What sensory system are they part of?',
          ],
          options: ['Vestibular sense — the inner-ear system that detects rotational and linear motion and head position', 'Sensory interaction — the visual and motion signals are interacting to cause nausea', 'Proprioception — the joints are detecting the body\'s position on the ship', 'Kinesthesis — muscle and tendon receptors signal the body\'s movement through space'],
          correct: 'Vestibular sense — the inner-ear system that detects rotational and linear motion and head position',
          wrongPool: ['Sensory interaction — the visual and motion signals are interacting to cause nausea', 'Proprioception — the joints are detecting the body\'s position on the ship', 'Kinesthesis — muscle and tendon receptors signal the body\'s movement through space', 'Perceptual set — prior experience creates an expectation of motion on ships'],
        },
        {
          conceptId: 'fl3-ps-sp-3',
          scenarios: [
            'A dancer can sense that her arm is extended overhead even with her eyes closed. She is not using touch. What sensory concept is at work?',
          ],
          options: ['Proprioception — receptors in muscles, joints, and tendons signal body-part position without vision', 'Vestibular sense — the inner ear detects the position of limbs relative to the head', 'Sensory interaction — the visual memory of past movements guides current position sense', 'Perceptual adaptation — practice has changed how the brain processes body position'],
          correct: 'Proprioception — receptors in muscles, joints, and tendons signal body-part position without vision',
          wrongPool: ['Vestibular sense — the inner ear detects the position of limbs relative to the head', 'Sensory interaction — the visual memory of past movements guides current position sense', 'Perceptual adaptation — practice has changed how the brain processes body position', 'Kinesthetic imagery — mental rehearsal substitutes for actual sensory signals'],
        },
        {
          conceptId: 'fl3-ps-sp-4',
          scenarios: [
            'Looking out a car window, nearby fences seem to rush past while distant mountains barely move. A driver uses this to judge depth. What depth cue is this?',
          ],
          options: ['Motion parallax — near objects move faster across the visual field than far objects when the observer moves', 'Sensory interaction — movement sensors and vision combine to judge distance', 'Vestibular sense — head movement detected by the inner ear calibrates depth perception', 'Relative size — near objects appear larger than far ones'],
          correct: 'Motion parallax — near objects move faster across the visual field than far objects when the observer moves',
          wrongPool: ['Sensory interaction — movement sensors and vision combine to judge distance', 'Vestibular sense — head movement detected by the inner ear calibrates depth perception', 'Relative size — near objects appear larger than far ones', 'Perceptual adaptation — the visual system has learned to interpret this pattern'],
        },
        {
          conceptId: 'fl3-ps-sp-5',
          scenarios: [
            'When mint is in a person\'s mouth, a cool beverage tastes even colder. One sense is amplifying the perception in another. What concept applies?',
            'Loud background music makes a food taste more intense. Two sensory modalities are interacting. What is this called?',
          ],
          options: ['Sensory interaction — input in one modality alters perception in another', 'Perceptual adaptation — repeated exposure has recalibrated the taste threshold', 'Signal detection — the stimulus crosses threshold only because of the background modality', 'Absolute threshold — the mint lowers the threshold for cold detection'],
          correct: 'Sensory interaction — input in one modality alters perception in another',
          wrongPool: ['Perceptual adaptation — repeated exposure has recalibrated the taste threshold', 'Signal detection — the stimulus crosses threshold only because of the background modality', 'Absolute threshold — the mint lowers the threshold for cold detection', 'Weber\'s law — the just-noticeable difference is proportional to stimulus intensity'],
        },
        {
          conceptId: 'fl3-ps-sp-6',
          scenarios: [
            'After wearing prism goggles that shift vision 15° right for a week, a subject can throw accurately. When the goggles are removed, throws initially go left. Over days, accuracy returns. What concept covers this recovery?',
          ],
          options: ['Perceptual adaptation — the sensory system recalibrates after altered input is removed', 'Sensory interaction — the visual and motor systems are interacting to recalibrate aim', 'Vestibular readjustment — inner-ear position sense resets after the optical shift', 'Top-down processing — conscious expectation corrects the throw direction'],
          correct: 'Perceptual adaptation — the sensory system recalibrates after altered input is removed',
          wrongPool: ['Sensory interaction — the visual and motor systems are interacting to recalibrate aim', 'Vestibular readjustment — inner-ear position sense resets after the optical shift', 'Top-down processing — conscious expectation corrects the throw direction', 'Habituation — the brain stops responding to the novel prism distortion over time'],
        },
        {
          conceptId: 'fl3-ps-sp-7',
          scenarios: [
            'The KEY DISTINCTION test: a scenario says "vision helped the person balance." Which answer is correct?',
          ],
          options: ['Sensory interaction — because vision (one modality) is assisting balance (another modality); the vestibular sense names the balance SYSTEM, not the cross-modal phenomenon', 'Vestibular sense — because the question is about balance, and vestibular = balance', 'Proprioception — because the body is sensing its own position during balance', 'Kinesthesis — because movement is involved in maintaining balance'],
          correct: 'Sensory interaction — because vision (one modality) is assisting balance (another modality); the vestibular sense names the balance SYSTEM, not the cross-modal phenomenon',
          wrongPool: ['Vestibular sense — because the question is about balance, and vestibular = balance', 'Proprioception — because the body is sensing its own position during balance', 'Kinesthesis — because movement is involved in maintaining balance', 'Perceptual set — prior experience with balance guides visual processing'],
        },
        {
          conceptId: 'fl3-ps-sp-8',
          scenarios: [
            'A swimmer feels dizzy when she surfaces because her vestibular system signaled rotation while she was submerged. The visual system now contradicts it. What sensory mismatch is this?',
          ],
          options: ['Vestibular-visual conflict — the vestibular sense detected motion the visual system no longer confirms, causing disorientation', 'Sensory interaction — the two modalities are actively cooperating to restore balance', 'Perceptual adaptation — the brain is adapting to the conflicting signals in real time', 'Proprioceptive mismatch — joint receptors contradict the vestibular signal'],
          correct: 'Vestibular-visual conflict — the vestibular sense detected motion the visual system no longer confirms, causing disorientation',
          wrongPool: ['Sensory interaction — the two modalities are actively cooperating to restore balance', 'Perceptual adaptation — the brain is adapting to the conflicting signals in real time', 'Proprioceptive mismatch — joint receptors contradict the vestibular signal', 'Motion parallax failure — the visual system cannot process depth cues underwater'],
        },
      ],
      showdown: [],
    },

    // ── Drill 1B: Brain Imaging Techniques ───────────────────────────────────
    {
      id: 'fl3-ps-brain-imaging',
      label: 'Brain Imaging Techniques',
      color: '#0369a1',
      light: '#e0f2fe',
      icon: '🧠',
      scenarioDrop: [
        {
          conceptId: 'fl3-ps-bi-1',
          scenarios: [
            'A researcher wants to identify which brain region is MOST ACTIVE while a subject solves math problems. She needs spatial precision. Which technique is best?',
            'A neuroscientist needs to localize neural ACTIVITY during language comprehension with good spatial resolution. Which scan?',
          ],
          options: ['fMRI — measures blood-oxygenation (BOLD signal) as a proxy for neural activity; excellent spatial resolution', 'MRI — provides detailed structural images of the brain, not activity', 'EEG — measures electrical activity but has poor spatial resolution', 'CT — provides structural cross-sections; does not measure activity'],
          correct: 'fMRI — measures blood-oxygenation (BOLD signal) as a proxy for neural activity; excellent spatial resolution',
          wrongPool: ['MRI — provides detailed structural images of the brain, not activity', 'EEG — measures electrical activity but has poor spatial resolution', 'CT — provides structural cross-sections; does not measure activity', 'PET — also localizes activity but uses radioactive tracers; less common for this purpose'],
        },
        {
          conceptId: 'fl3-ps-bi-2',
          scenarios: [
            'A clinician wants to identify whether a patient has a tumor or lesion causing structural brain damage. Which scan is best?',
            'A researcher wants an image of brain ANATOMY, not activity, with high spatial detail. Which technique?',
          ],
          options: ['MRI (or CT) — both image brain structure; MRI gives superior soft-tissue contrast without radiation', 'fMRI — measures both structure and activity simultaneously', 'EEG — provides direct images of cortical structure via electrode placement', 'PET — best for structural imaging because radioactive tracers bind to tissue'],
          correct: 'MRI (or CT) — both image brain structure; MRI gives superior soft-tissue contrast without radiation',
          wrongPool: ['fMRI — measures both structure and activity simultaneously', 'EEG — provides direct images of cortical structure via electrode placement', 'PET — best for structural imaging because radioactive tracers bind to tissue', 'SPECT — the only scan capable of imaging structural lesions'],
        },
        {
          conceptId: 'fl3-ps-bi-3',
          scenarios: [
            'A researcher needs millisecond-level timing of neural responses during a visual stimulus. Spatial precision can be sacrificed. Which technique?',
            'Which imaging method has the best TEMPORAL resolution — able to capture neural events unfolding in milliseconds?',
          ],
          options: ['EEG — directly measures electrical brain activity with millisecond temporal resolution; spatial resolution is poor', 'fMRI — has the best temporal resolution because blood flow is fast', 'PET — because radioactive decay events are instantaneous', 'CT — rapid scanning captures neural events in milliseconds'],
          correct: 'EEG — directly measures electrical brain activity with millisecond temporal resolution; spatial resolution is poor',
          wrongPool: ['fMRI — has the best temporal resolution because blood flow is fast', 'PET — because radioactive decay events are instantaneous', 'CT — rapid scanning captures neural events in milliseconds', 'MRI — the magnet field changes instantaneously when neurons fire'],
        },
        {
          conceptId: 'fl3-ps-bi-4',
          scenarios: [
            'PET uses radioactive tracers that bind to metabolically active areas. What is PET most useful for that fMRI and MRI cannot do as well?',
          ],
          options: ['Measuring metabolic activity and neurotransmitter/receptor binding with specific radiolabeled tracers (e.g., dopamine receptor imaging)', 'Providing the best spatial localization of brain activity among all imaging methods', 'Imaging brain structure with the highest soft-tissue contrast', 'Recording millisecond-level timing of neural events during behavior'],
          correct: 'Measuring metabolic activity and neurotransmitter/receptor binding with specific radiolabeled tracers (e.g., dopamine receptor imaging)',
          wrongPool: ['Providing the best spatial localization of brain activity among all imaging methods', 'Imaging brain structure with the highest soft-tissue contrast', 'Recording millisecond-level timing of neural events during behavior', 'PET is the only scan safe for patients with metal implants'],
        },
        {
          conceptId: 'fl3-ps-bi-5',
          scenarios: [
            'KEY DISCRIMINATION: The question asks which technique "localizes neural ACTIVITY." The options include PET, EEG, MRI, and CT. Which is correct and why is MRI wrong?',
          ],
          options: ['PET (or fMRI) localizes activity; MRI images STRUCTURE — an MRI with no functional component does not measure activity at all', 'MRI is correct because it has the best spatial resolution of all four techniques', 'EEG because it measures electrical activity, which is more directly "neural activity" than any metabolic measure', 'CT because it uses X-rays that are sensitive to changes in neural firing rate'],
          correct: 'PET (or fMRI) localizes activity; MRI images STRUCTURE — an MRI with no functional component does not measure activity at all',
          wrongPool: ['MRI is correct because it has the best spatial resolution of all four techniques', 'EEG because it measures electrical activity, which is more directly "neural activity" than any metabolic measure', 'CT because it uses X-rays that are sensitive to changes in neural firing rate', 'MRI can be run in "functional mode" automatically, so it also measures activity'],
        },
        {
          conceptId: 'fl3-ps-bi-6',
          scenarios: [
            'A researcher is studying PTSD and wants to know if a treatment changes patterns of brain activity over time. She wants good spatial AND temporal compromise. Which technique?',
          ],
          options: ['fMRI — the best balance of spatial and temporal resolution for tracking activity changes across sessions', 'EEG — better for PTSD because temporal precision captures hyperarousal responses', 'CT — safest for longitudinal studies because it does not use a magnetic field', 'PET — the only technique that can track changes in emotional brain circuits over time'],
          correct: 'fMRI — the best balance of spatial and temporal resolution for tracking activity changes across sessions',
          wrongPool: ['EEG — better for PTSD because temporal precision captures hyperarousal responses', 'CT — safest for longitudinal studies because it does not use a magnetic field', 'PET — the only technique that can track changes in emotional brain circuits over time', 'MRI — because structural changes accompany functional changes over weeks'],
        },
        {
          conceptId: 'fl3-ps-bi-7',
          scenarios: [
            'Match the technique to its primary strength: EEG → ?, fMRI → ?, MRI → ?, PET → ?',
          ],
          options: ['EEG = temporal precision; fMRI = spatial + activity; MRI = structure; PET = metabolism/receptor binding', 'EEG = spatial precision; fMRI = structure; MRI = activity; PET = temporal precision', 'EEG = structure; fMRI = temporal; MRI = receptor binding; PET = activity', 'All four measure the same things; they differ only in cost and availability'],
          correct: 'EEG = temporal precision; fMRI = spatial + activity; MRI = structure; PET = metabolism/receptor binding',
          wrongPool: ['EEG = spatial precision; fMRI = structure; MRI = activity; PET = temporal precision', 'EEG = structure; fMRI = temporal; MRI = receptor binding; PET = activity', 'All four measure the same things; they differ only in cost and availability', 'EEG = activity; fMRI = temporal; MRI = metabolism; PET = structure'],
        },
        {
          conceptId: 'fl3-ps-bi-8',
          scenarios: [
            'An epilepsy patient is having a seizure in the scanner. Which imaging tool would capture the precise millisecond-level spread of abnormal electrical activity?',
          ],
          options: ['EEG — measures brain electrical activity directly; excellent temporal resolution to track seizure propagation in real time', 'fMRI — blood-flow changes track seizure spread in real time', 'PET — radiotracer decay events coincide with electrical discharge', 'MRI — diffusion-weighted MRI detects axonal changes during seizure activity'],
          correct: 'EEG — measures brain electrical activity directly; excellent temporal resolution to track seizure propagation in real time',
          wrongPool: ['fMRI — blood-flow changes track seizure spread in real time', 'PET — radiotracer decay events coincide with electrical discharge', 'MRI — diffusion-weighted MRI detects axonal changes during seizure activity', 'CT — the rapid X-ray acquisition captures millisecond changes in neural density'],
        },
      ],
      showdown: [
        {
            conceptId: 'fl3-ps-bi-sd1',
            scenario: 'Research goal: localize which brain region is active during emotion regulation',
            conceptA: 'MRI — best spatial resolution among all scanners',
            conceptB: 'fMRI — measures activity (BOLD signal) with good spatial resolution; MRI images structure only',
            correct: 'fMRI — measures activity (BOLD signal) with good spatial resolution; MRI images structure only',
            explanation: 'MRI = anatomy. fMRI = function. Activity questions require fMRI or PET, never plain MRI or CT.',
          },
        {
            conceptId: 'fl3-ps-bi-sd2',
            scenario: 'Which has better temporal resolution for catching a 50 ms neural event?',
            conceptA: 'fMRI — BOLD signal peaks ~5 seconds after neural activity, giving second-level resolution',
            conceptB: 'EEG — measures electrical activity directly with millisecond resolution',
            correct: 'EEG — measures electrical activity directly with millisecond resolution',
            explanation: 'EEG tracks voltage changes as they happen. fMRI lags ~5 seconds behind because it reads downstream blood-flow changes.',
          },
      ],
    },

    // ── Drill 1C: Group & Social Influence ───────────────────────────────────
    {
      id: 'fl3-ps-group-influence',
      label: 'Group & Social Influence',
      color: '#0f766e',
      light: '#ccfbf1',
      icon: '👥',
      scenarioDrop: [
        {
          conceptId: 'fl3-ps-gi-1',
          scenarios: [
            'A jury enters deliberations leaning toward acquittal. After discussion, the jury votes unanimously to acquit by a larger margin than the initial leanings. What phenomenon explains this shift?',
            'A political focus group initially has moderate anti-immigration views. After two hours of discussion among members who all share those views, attitudes become extreme. What is this?',
          ],
          options: ['Group polarization — discussion among like-minded members pushes the group to a more extreme position than any individual held initially', 'Groupthink — the group is suppressing dissent to maintain harmony', 'Social facilitation — the audience (other jurors) improves individual performance on an easy task', 'Deindividuation — anonymity in the group causes members to express extreme views'],
          correct: 'Group polarization — discussion among like-minded members pushes the group to a more extreme position than any individual held initially',
          wrongPool: ['Groupthink — the group is suppressing dissent to maintain harmony', 'Social facilitation — the audience (other jurors) improves individual performance on an easy task', 'Deindividuation — anonymity in the group causes members to express extreme views', 'Conformity pressure — members change to match a perceived group norm'],
        },
        {
          conceptId: 'fl3-ps-gi-2',
          scenarios: [
            'KEY DISCRIMINATION: "Group grows more extreme after discussion" — is this polarization or social facilitation?',
          ],
          options: ['Group polarization — extremity shift follows discussion; social facilitation is about performance improvement in front of an audience, not opinion change', 'Social facilitation — the group members are performing the "task" of discussing, which an audience improves', 'Both could apply — polarization is a subtype of social facilitation in group settings', 'Neither — extreme shifts after discussion are explained by normative influence, not polarization'],
          correct: 'Group polarization — extremity shift follows discussion; social facilitation is about performance improvement in front of an audience, not opinion change',
          wrongPool: ['Social facilitation — the group members are performing the "task" of discussing, which an audience improves', 'Both could apply — polarization is a subtype of social facilitation in group settings', 'Neither — extreme shifts after discussion are explained by normative influence, not polarization', 'Groupthink — any group shift toward consensus is a form of groupthink'],
        },
        {
          conceptId: 'fl3-ps-gi-3',
          scenarios: [
            'A product-design team pressures a dissenting member to stay quiet to preserve team harmony, ultimately approving a flawed product. Which concept applies?',
            'An advisory board ignores an outside expert\'s warning because challenging the consensus would disrupt the group\'s unity. What is this pattern?',
          ],
          options: ['Groupthink — harmony-seeking overrides critical thinking, leading to poor decisions', 'Group polarization — the group consensus becomes more extreme after suppressing dissent', 'Social facilitation — the presence of teammates improves individuals\' performance', 'Social loafing — members contribute less when others can do the work'],
          correct: 'Groupthink — harmony-seeking overrides critical thinking, leading to poor decisions',
          wrongPool: ['Group polarization — the group consensus becomes more extreme after suppressing dissent', 'Social facilitation — the presence of teammates improves individuals\' performance', 'Social loafing — members contribute less when others can do the work', 'Normative conformity — individuals change only because they fear social rejection'],
        },
        {
          conceptId: 'fl3-ps-gi-4',
          scenarios: [
            'A concert pianist performs more accurately in front of an audience than when practicing alone on a well-rehearsed piece. What explains this?',
            'An experienced swimmer beats her personal record in a race with spectators. In practice alone, she cannot match that time. What social phenomenon is at work?',
          ],
          options: ['Social facilitation — the presence of an audience improves performance on well-learned (easy) tasks', 'Group polarization — the audience pushes her performance toward a more extreme level', 'Deindividuation — the audience removes self-consciousness, freeing peak performance', 'Social loafing — she works harder because others are watching her specifically'],
          correct: 'Social facilitation — the presence of an audience improves performance on well-learned (easy) tasks',
          wrongPool: ['Group polarization — the audience pushes her performance toward a more extreme level', 'Deindividuation — the audience removes self-consciousness, freeing peak performance', 'Social loafing — she works harder because others are watching her specifically', 'Evaluation apprehension — anxiety about being judged always impairs performance'],
        },
        {
          conceptId: 'fl3-ps-gi-5',
          scenarios: [
            'When students work on a group rope-pulling task, each individual pulls less hard than when pulling alone. What is this?',
          ],
          options: ['Social loafing — individuals exert less effort in a group because individual contribution is less identifiable', 'Social facilitation — the group environment improves performance on this easy physical task', 'Deindividuation — group membership causes reduced self-awareness and effort', 'Group polarization — the group collectively produces less force than individual extremes combined'],
          correct: 'Social loafing — individuals exert less effort in a group because individual contribution is less identifiable',
          wrongPool: ['Social facilitation — the group environment improves performance on this easy physical task', 'Deindividuation — group membership causes reduced self-awareness and effort', 'Group polarization — the group collectively produces less force than individual extremes combined', 'Conformity — individuals match the performance level of the slowest member'],
        },
        {
          conceptId: 'fl3-ps-gi-6',
          scenarios: [
            'A fan at a large sports event, wearing team gear and surrounded by thousands of fans, participates in destructive behavior he would never engage in alone. What explains this?',
          ],
          options: ['Deindividuation — immersion in the crowd reduces personal identity and self-monitoring, releasing inhibitions', 'Social facilitation — the large audience improves performance on the behavior', 'Groupthink — the crowd collectively agrees to behave destructively to maintain harmony', 'Group polarization — individual views become more extreme after exposure to others\' views'],
          correct: 'Deindividuation — immersion in the crowd reduces personal identity and self-monitoring, releasing inhibitions',
          wrongPool: ['Social facilitation — the large audience improves performance on the behavior', 'Groupthink — the crowd collectively agrees to behave destructively to maintain harmony', 'Group polarization — individual views become more extreme after exposure to others\' views', 'Social loafing — responsibility is diffused so no individual feels fully accountable'],
        },
        {
          conceptId: 'fl3-ps-gi-7',
          scenarios: [
            'GROUP POLARIZATION vs GROUPTHINK: both involve groups moving toward a shared position. What is the key difference?',
          ],
          options: ['Polarization = views become more EXTREME via discussion; groupthink = harmony-seeking suppresses dissent → bad DECISIONS (not necessarily extreme views)', 'They are the same phenomenon described at different group sizes', 'Polarization = groups suppress dissent; groupthink = discussion makes views more extreme', 'Groupthink produces more extreme views; polarization produces only consensus'],
          correct: 'Polarization = views become more EXTREME via discussion; groupthink = harmony-seeking suppresses dissent → bad DECISIONS (not necessarily extreme views)',
          wrongPool: ['They are the same phenomenon described at different group sizes', 'Polarization = groups suppress dissent; groupthink = discussion makes views more extreme', 'Groupthink produces more extreme views; polarization produces only consensus', 'Both involve the same process; they are distinguished only by the researcher\'s theoretical framework'],
        },
        {
          conceptId: 'fl3-ps-gi-8',
          scenarios: [
            'A novice violinist performs much worse in front of an audience than in private practice. Which concept applies and why?',
          ],
          options: ['Social facilitation — but for DIFFICULT/poorly-learned tasks, arousal from an audience IMPAIRS performance', 'Group polarization — her performance shifts toward the extreme position of worst or best violinist in the audience', 'Deindividuation — the audience causes her to lose her sense of individual playing style', 'Groupthink — she conforms to what she thinks the audience expects'],
          correct: 'Social facilitation — but for DIFFICULT/poorly-learned tasks, arousal from an audience IMPAIRS performance',
          wrongPool: ['Group polarization — her performance shifts toward the extreme position of worst or best violinist in the audience', 'Deindividuation — the audience causes her to lose her sense of individual playing style', 'Groupthink — she conforms to what she thinks the audience expects', 'Social loafing — she exerts less effort because the audience will evaluate the overall concert, not just her'],
        },
        {
          conceptId: 'fl3-ps-gi-9',
          scenarios: [
            'Online social media algorithms show users content aligned with their existing views. After months, users hold more extreme versions of their initial beliefs. This is an algorithmic version of which social psychology concept?',
          ],
          options: ['Group polarization — exposure to like-minded content amplifies initial positions toward extremes', 'Groupthink — the algorithm suppresses dissenting content to maintain platform harmony', 'Deindividuation — online anonymity releases users from social norms', 'Social facilitation — the virtual audience improves the quality of user beliefs'],
          correct: 'Group polarization — exposure to like-minded content amplifies initial positions toward extremes',
          wrongPool: ['Groupthink — the algorithm suppresses dissenting content to maintain platform harmony', 'Deindividuation — online anonymity releases users from social norms', 'Social facilitation — the virtual audience improves the quality of user beliefs', 'Social comparison — users adjust to match the median view of their feed'],
        },
        {
          conceptId: 'fl3-ps-gi-10',
          scenarios: [
            'A high-stakes government committee is under pressure to reach a unanimous decision quickly. Members who have doubts stay silent because they assume others must know better. Which failure mode is this?',
          ],
          options: ['Groupthink — members suppress doubts to preserve unity, producing premature consensus; the "assume others know better" variant is also informational conformity', 'Group polarization — time pressure drives the group to a more extreme position', 'Social loafing — under pressure, each member assumes another will voice the concern', 'Deindividuation — committee membership reduces individual accountability for the decision'],
          correct: 'Groupthink — members suppress doubts to preserve unity, producing premature consensus; the "assume others know better" variant is also informational conformity',
          wrongPool: ['Group polarization — time pressure drives the group to a more extreme position', 'Social loafing — under pressure, each member assumes another will voice the concern', 'Deindividuation — committee membership reduces individual accountability for the decision', 'Obedience — members are following explicit orders from the committee chair to stay silent'],
        },
      ],
      showdown: [
        {
            conceptId: 'fl3-ps-gi-sd1',
            scenario: 'Group scenario: members discuss → final position is more extreme than initial individual positions',
            conceptA: 'Groupthink — the group is suppressing dissent to reach consensus',
            conceptB: 'Group polarization — discussion amplifies the dominant initial tendency toward a more extreme position',
            correct: 'Group polarization — discussion amplifies the dominant initial tendency toward a more extreme position',
            explanation: 'Groupthink is about suppressing dissent to maintain harmony, often resulting in bad decisions. Polarization is specifically about the post-discussion shift toward extremity — it requires initial lean + like-minded discussion.',
          },
        {
            conceptId: 'fl3-ps-gi-sd2',
            scenario: 'Expert swimmer with an audience: performance improves on a well-rehearsed race',
            conceptA: 'Deindividuation — the crowd absorbs her identity and she performs more freely',
            conceptB: 'Social facilitation — arousal from observers enhances performance on a dominant (well-learned) response',
            correct: 'Social facilitation — arousal from observers enhances performance on a dominant (well-learned) response',
            explanation: 'Deindividuation is about loss of individuality causing disinhibition (often leading to antisocial behavior). Social facilitation is specifically about observer-caused arousal improving dominant, well-rehearsed behaviors.',
          },
      ],
    },

    // ── Drill 1D: Cohort vs Period vs Age Effects ─────────────────────────────
    {
      id: 'fl3-ps-cohort-period-age',
      label: 'Cohort vs Period vs Age',
      color: '#b45309',
      light: '#fef3c7',
      icon: '📅',
      scenarioDrop: [
        {
          conceptId: 'fl3-ps-cpa-1',
          scenarios: [
            'A health campaign targets people born between 1946 and 1964 because their generation grew up with different dietary norms. The researchers are addressing a difference specific to this generation\'s shared experiences. What type of effect?',
            'Researchers find that adults who grew up during the Great Depression spend significantly less money than those who grew up in prosperity. This spending habit is specific to one birth-year group. What type of effect?',
          ],
          options: ['Cohort effect — a difference arising from shared experiences of a particular birth cohort (generation), not from age or a specific point in time affecting everyone', 'Period effect — the Great Depression affected everyone alive at that time, not just one birth cohort', 'Age effect — spending habits change predictably as people grow older regardless of birth year', 'Selection bias — the groups were not randomly assigned to historical periods'],
          correct: 'Cohort effect — a difference arising from shared experiences of a particular birth cohort (generation), not from age or a specific point in time affecting everyone',
          wrongPool: ['Period effect — the Great Depression affected everyone alive at that time, not just one birth cohort', 'Age effect — spending habits change predictably as people grow older regardless of birth year', 'Selection bias — the groups were not randomly assigned to historical periods', 'Interaction effect — age and period combine to produce this specific pattern'],
        },
        {
          conceptId: 'fl3-ps-cpa-2',
          scenarios: [
            'KEY DISCRIMINATION: A researcher finds that ALL age groups (20s, 40s, 60s, 80s) showed decreased social trust in 2020 compared to 2019. What type of effect explains this?',
          ],
          options: ['Period effect — a historical event in 2020 shifted all cohorts simultaneously; cohort effect would only affect one birth group', 'Cohort effect — all groups born before 2020 were affected the same way', 'Age effect — trust decreases naturally with aging and all groups got one year older', 'Longitudinal artifact — repeated measurement caused all groups to change together'],
          correct: 'Period effect — a historical event in 2020 shifted all cohorts simultaneously; cohort effect would only affect one birth group',
          wrongPool: ['Cohort effect — all groups born before 2020 were affected the same way', 'Age effect — trust decreases naturally with aging and all groups got one year older', 'Longitudinal artifact — repeated measurement caused all groups to change together', 'Maturation effect — one year of development caused the same change in all age groups'],
        },
        {
          conceptId: 'fl3-ps-cpa-3',
          scenarios: [
            'Cognitive processing speed reliably declines from age 25 to 75, regardless of birth year or the year of testing. This is a function of biological aging. What type of effect?',
          ],
          options: ['Age effect — the outcome changes predictably as individuals grow older, independent of when they were born or tested', 'Cohort effect — people born earlier show more decline because of fewer educational opportunities', 'Period effect — modern cognitive demands affect all age groups identically', 'Maturation effect — a developmental process that only applies to children, not aging adults'],
          correct: 'Age effect — the outcome changes predictably as individuals grow older, independent of when they were born or tested',
          wrongPool: ['Cohort effect — people born earlier show more decline because of fewer educational opportunities', 'Period effect — modern cognitive demands affect all age groups identically', 'Maturation effect — a developmental process that only applies to children, not aging adults', 'Cross-sectional artifact — older participants in cross-sectional studies always show more decline due to sampling'],
        },
        {
          conceptId: 'fl3-ps-cpa-4',
          scenarios: [
            'A sociologist finds that millennials (born ~1981-1996) are delaying home ownership compared to Baby Boomers at the same age. Is this a cohort effect, period effect, or age effect?',
          ],
          options: ['Cohort effect — the difference is specific to the millennial generation\'s shared experiences (student debt, housing costs in their young-adult years)', 'Period effect — housing unaffordability affects all current age groups equally, not just millennials', 'Age effect — younger adults always own fewer homes than older adults, which is an age-related pattern', 'This cannot be classified — it requires a longitudinal study to rule out all three'],
          correct: 'Cohort effect — the difference is specific to the millennial generation\'s shared experiences (student debt, housing costs in their young-adult years)',
          wrongPool: ['Period effect — housing unaffordability affects all current age groups equally, not just millennials', 'Age effect — younger adults always own fewer homes than older adults, which is an age-related pattern', 'This cannot be classified — it requires a longitudinal study to rule out all three', 'Selection effect — millennials chose not to own homes due to personal preference, not generation-wide factors'],
        },
        {
          conceptId: 'fl3-ps-cpa-5',
          scenarios: [
            'CRITICAL DISTINCTION: A public health policy targets people born in the 1950s because they have higher smoking rates. The policymakers are addressing a ___ effect, not a ___ effect.',
          ],
          options: ['Cohort effect (generation-specific); NOT a period effect (which would target everyone alive now)', 'Period effect (historical smoking norms in the 1950s-1980s affected all cohorts then alive); NOT a cohort effect', 'Age effect (older adults smoke more); NOT a cohort effect', 'Age effect and cohort effect together — they are the same thing when targeting older adults'],
          correct: 'Cohort effect (generation-specific); NOT a period effect (which would target everyone alive now)',
          wrongPool: ['Period effect (historical smoking norms in the 1950s-1980s affected all cohorts then alive); NOT a cohort effect', 'Age effect (older adults smoke more); NOT a cohort effect', 'Age effect and cohort effect together — they are the same thing when targeting older adults', 'The distinction is irrelevant for public health policy — only prevalence matters'],
        },
        {
          conceptId: 'fl3-ps-cpa-6',
          scenarios: [
            'Quick classification: In 1945, worldwide birth rates increased sharply across all countries (post-WWII baby boom). Parents in 1945 had more children than parents in 1944. Is this change an age effect, cohort effect, or period effect?',
          ],
          options: ['Period effect — all cohorts of reproductive-age adults were affected simultaneously by the end of WWII; it was not specific to one birth year group', 'Cohort effect — children born in 1945 form a distinct cohort with higher numbers', 'Age effect — adults were at peak reproductive age in 1945 regardless of historical context', 'All three — period, cohort, and age effects always co-occur in demographic data'],
          correct: 'Period effect — all cohorts of reproductive-age adults were affected simultaneously by the end of WWII; it was not specific to one birth year group',
          wrongPool: ['Cohort effect — children born in 1945 form a distinct cohort with higher numbers', 'Age effect — adults were at peak reproductive age in 1945 regardless of historical context', 'All three — period, cohort, and age effects always co-occur in demographic data', 'Cohort effect — the 1945 parents share a unique generational experience that led to higher birth rates'],
        },
      ],
      showdown: [
        {
            conceptId: 'fl3-ps-cpa-sd1',
            scenario: 'Researchers find that one specific generation (born 1965-1980) has higher divorce rates than other generations at the same age',
            conceptA: 'Period effect — the historical context of that era affected only this birth group',
            conceptB: 'Cohort effect — the shared formative experiences of this generation account for the difference, not the historical moment affecting all current age groups',
            correct: 'Cohort effect — the shared formative experiences of this generation account for the difference, not the historical moment affecting all current age groups',
            explanation: 'Cohort = difference specific to one birth group\'s formative experiences. Period = a historical moment shifts ALL age groups at once. "One specific generation" = cohort.',
          },
      ],
    },

    // ── Drill 1E: Manifest vs Latent Functions ────────────────────────────────
    {
      id: 'fl3-ps-manifest-latent',
      label: 'Manifest vs Latent Functions',
      color: '#7c3aed',
      light: '#ede9fe',
      icon: '🏛️',
      scenarioDrop: [
        {
          conceptId: 'fl3-ps-ml-1',
          scenarios: [
            'The stated purpose of schools is to teach academic subjects. This intended, recognized function is called what?',
          ],
          options: ['Manifest function — intended, officially recognized purpose of a social institution', 'Latent function — schools teach subjects as a hidden, unintended consequence of bringing children together', 'Dysfunction — academic teaching produces negative unintended consequences', 'Social reproduction — transmitting academic knowledge is always about maintaining class structures'],
          correct: 'Manifest function — intended, officially recognized purpose of a social institution',
          wrongPool: ['Latent function — schools teach subjects as a hidden, unintended consequence of bringing children together', 'Dysfunction — academic teaching produces negative unintended consequences', 'Social reproduction — transmitting academic knowledge is always about maintaining class structures', 'Instrumental norm — teaching is a functional expectation, not a manifest function'],
        },
        {
          conceptId: 'fl3-ps-ml-2',
          scenarios: [
            'Beyond teaching math and reading, schools teach children to raise their hands, follow schedules, and respect authority — behaviors valued in the workplace. This was never written into the curriculum. What is this?',
            'Students learn punctuality, obedience, and teamwork not from course content but from the implicit daily structure of schooling. What sociological concept is this?',
          ],
          options: ['Latent function — an unintended, unrecognized but beneficial consequence; the "hidden curriculum" of socialization is the classic example', 'Manifest function — teaching workplace behaviors is an explicitly planned curriculum outcome', 'Dysfunction — socialization to obedience undermines critical thinking', 'Social control — schools are exclusively instruments of oppression, not functional institutions'],
          correct: 'Latent function — an unintended, unrecognized but beneficial consequence; the "hidden curriculum" of socialization is the classic example',
          wrongPool: ['Manifest function — teaching workplace behaviors is an explicitly planned curriculum outcome', 'Dysfunction — socialization to obedience undermines critical thinking', 'Social control — schools are exclusively instruments of oppression, not functional institutions', '"Discriminatory function" — the hidden curriculum disadvantages certain groups'],
        },
        {
          conceptId: 'fl3-ps-ml-3',
          scenarios: [
            'KEY TEST: The MCAT describes an unintended consequence of a social institution that is nonetheless helpful or socially valued. Is this a manifest function, latent function, or dysfunction?',
          ],
          options: ['Latent function — UNINTENDED + beneficial; manifest = intended + recognized; dysfunction = unintended + harmful', 'Manifest function — if it is socially valued, it must have been intended', 'Dysfunction — any unintended consequence is a dysfunction by definition', '"Discriminatory function" is correct if the outcome disadvantages a minority group'],
          correct: 'Latent function — UNINTENDED + beneficial; manifest = intended + recognized; dysfunction = unintended + harmful',
          wrongPool: ['Manifest function — if it is socially valued, it must have been intended', 'Dysfunction — any unintended consequence is a dysfunction by definition', '"Discriminatory function" is correct if the outcome disadvantages a minority group', 'Latent dysfunction — positive unintended consequences are always reclassified as dysfunctions'],
        },
        {
          conceptId: 'fl3-ps-ml-4',
          scenarios: [
            'A prison system is officially intended to rehabilitate offenders. In practice, inmates form criminal networks and recidivism increases. What is this unintended harmful outcome?',
          ],
          options: ['Dysfunction — an unintended negative consequence of a social institution', 'Latent function — prison networking is an unintended but socially functional outcome', 'Manifest dysfunction — the prison explicitly intends to increase recidivism', 'Structural violence — all negative prison outcomes are classified as structural violence, not dysfunction'],
          correct: 'Dysfunction — an unintended negative consequence of a social institution',
          wrongPool: ['Latent function — prison networking is an unintended but socially functional outcome', 'Manifest dysfunction — the prison explicitly intends to increase recidivism', 'Structural violence — all negative prison outcomes are classified as structural violence, not dysfunction', 'Period effect — the increase in recidivism is a generational trend unrelated to prison function'],
        },
        {
          conceptId: 'fl3-ps-ml-5',
          scenarios: [
            'An unintended consequence of widespread college attendance is that it serves as a marriage market — many couples meet at university. What is this?',
          ],
          options: ['Latent function — an unintended but beneficial social outcome of a higher-education institution', 'Manifest function — universities explicitly provide social networking opportunities for future partners', 'Dysfunction — forming romantic relationships during college increases dropout rates', 'Social institution — the marriage market is a formal institutional function of higher education'],
          correct: 'Latent function — an unintended but beneficial social outcome of a higher-education institution',
          wrongPool: ['Manifest function — universities explicitly provide social networking opportunities for future partners', 'Dysfunction — forming romantic relationships during college increases dropout rates', 'Social institution — the marriage market is a formal institutional function of higher education', 'Cohort effect — college-educated cohorts have different marriage patterns due to shared generational experiences'],
        },
        {
          conceptId: 'fl3-ps-ml-6',
          scenarios: [
            'Classify the following: (A) A hospital\'s intended purpose of treating illness; (B) The unintended creation of a community gathering space when a new park is built; (C) Rising antibiotic resistance from widespread hospital antibiotic use.',
          ],
          options: ['A = manifest function; B = latent function; C = dysfunction', 'A = latent function; B = manifest function; C = dysfunction', 'A = manifest function; B = dysfunction; C = latent function', 'A = dysfunction; B = manifest function; C = latent function'],
          correct: 'A = manifest function; B = latent function; C = dysfunction',
          wrongPool: ['A = latent function; B = manifest function; C = dysfunction', 'A = manifest function; B = dysfunction; C = latent function', 'A = dysfunction; B = manifest function; C = latent function', 'All three are manifest functions — intended outcomes of institutional design'],
        },
      ],
      showdown: [
        {
            conceptId: 'fl3-ps-ml-sd1',
            scenario: 'Schools teach children punctuality and deference to authority through daily structure — the "hidden curriculum"',
            conceptA: 'Manifest function — socialization is a well-known outcome of schooling, so it must be intended',
            conceptB: 'Latent function — the socialization is real and often beneficial but was never the explicit stated purpose; it arises as an unrecognized byproduct',
            correct: 'Latent function — the socialization is real and often beneficial but was never the explicit stated purpose; it arises as an unrecognized byproduct',
            explanation: '"Well-known to sociologists" ≠ "intended." Latent functions can become recognized over time without becoming manifest. The key is whether the institution officially organized itself to produce this outcome.',
          },
      ],
    },

    // ── Drill 2A: Direction-Check (P/S) ──────────────────────────────────────
    {
      id: 'fl3-ps-direction-check',
      label: 'Direction Checks (P/S)',
      color: '#0369a1',
      light: '#e0f2fe',
      icon: '↕️',
      scenarioDrop: [
        {
          conceptId: 'fl3-ps-dc-1',
          scenarios: [
            'A subject is selectively deprived of REM sleep for five nights using EEG monitoring. On night six (no deprivation), what happens to REM sleep?',
            'After REM deprivation, homeostatic pressure builds up for REM. What does this predict about subsequent REM duration?',
          ],
          options: ['REM increases — REM deprivation triggers REM rebound; the brain compensates by spending MORE time in REM the next opportunity', 'REM decreases — the sleep architecture has been disrupted so REM is permanently reduced', 'REM stays the same — sleep is regulated by circadian rhythm, not prior deprivation', 'REM alternates — it rebounds on night six but drops below baseline on night seven'],
          correct: 'REM increases — REM deprivation triggers REM rebound; the brain compensates by spending MORE time in REM the next opportunity',
          wrongPool: ['REM decreases — the sleep architecture has been disrupted so REM is permanently reduced', 'REM stays the same — sleep is regulated by circadian rhythm, not prior deprivation', 'REM alternates — it rebounds on night six but drops below baseline on night seven', 'REM increases only if NREM was also deprived; REM-only deprivation has no rebound effect'],
        },
        {
          conceptId: 'fl3-ps-dc-2',
          scenarios: [
            'Which direction does REM rebound go — more or less REM — and why?',
          ],
          options: ['MORE REM — deprivation builds homeostatic pressure; the brain "makes up" lost REM when finally allowed to sleep freely', 'LESS REM — deprivation trains the brain to function with less REM, reducing future REM need', 'SAME — REM is set by circadian rhythm and cannot be changed by prior deprivation', 'LESS — consolidating the previous nights\' memories requires NREM, not REM, so REM is exchanged'],
          correct: 'MORE REM — deprivation builds homeostatic pressure; the brain "makes up" lost REM when finally allowed to sleep freely',
          wrongPool: ['LESS REM — deprivation trains the brain to function with less REM, reducing future REM need', 'SAME — REM is set by circadian rhythm and cannot be changed by prior deprivation', 'LESS — consolidating the previous nights\' memories requires NREM, not REM, so REM is exchanged', 'More deep NREM (stage 3), not more REM — homeostatic rebound is always NREM-specific'],
        },
        {
          conceptId: 'fl3-ps-dc-3',
          scenarios: [
            'A study finds that individuals with lower socioeconomic status (SES) report higher perceived stress than those with higher SES. What is the sign and approximate magnitude of the correlation between SES and stress?',
          ],
          options: ['Negative correlation — as SES goes DOWN, stress goes UP; an inverse relationship; likely around r = −0.20 to −0.35', 'Positive correlation — lower SES is associated with more resources and therefore more stress demands', 'Zero correlation — SES and stress are unrelated at the population level', 'Negative correlation — around r = −0.95 because SES almost perfectly predicts stress'],
          correct: 'Negative correlation — as SES goes DOWN, stress goes UP; an inverse relationship; likely around r = −0.20 to −0.35',
          wrongPool: ['Positive correlation — lower SES is associated with more resources and therefore more stress demands', 'Zero correlation — SES and stress are unrelated at the population level', 'Negative correlation — around r = −0.95 because SES almost perfectly predicts stress', 'Positive correlation — higher SES individuals report more work-related stress'],
        },
        {
          conceptId: 'fl3-ps-dc-4',
          scenarios: [
            'DIRECTION FIRST: Lower SES → more stress. What is the SIGN of the SES-stress correlation? Then: which coefficient is most plausible — r = +0.50, r = −0.05, r = −0.20, or r = +0.20?',
          ],
          options: ['Sign = NEGATIVE (inverse relationship); r = −0.20 is most plausible (−0.05 too weak, −0.50 implausibly strong, positive values wrong direction)', 'Sign = POSITIVE (same direction); r = +0.20 because higher SES creates more stress demands', 'Sign = NEGATIVE; r = −0.05 because SES explains very little variance in stress', 'Sign = POSITIVE; r = +0.50 because wealthier people have more stress overall'],
          correct: 'Sign = NEGATIVE (inverse relationship); r = −0.20 is most plausible (−0.05 too weak, −0.50 implausibly strong, positive values wrong direction)',
          wrongPool: ['Sign = POSITIVE (same direction); r = +0.20 because higher SES creates more stress demands', 'Sign = NEGATIVE; r = −0.05 because SES explains very little variance in stress', 'Sign = POSITIVE; r = +0.50 because wealthier people have more stress overall', 'Sign = NEGATIVE; r = −0.80 because SES is the primary determinant of chronic stress'],
        },
        {
          conceptId: 'fl3-ps-dc-5',
          scenarios: [
            'A drug increases slow-wave (deep NREM) sleep. What happens to the proportion of REM sleep in the same night?',
          ],
          options: ['REM decreases — total sleep is divided among stages; more NREM means proportionally less time for REM', 'REM also increases — deep sleep and REM sleep are coupled and increase together', 'REM is unaffected — REM is regulated independently by the brainstem regardless of NREM duration', 'REM doubles — a rebound effect occurs whenever NREM increases'],
          correct: 'REM decreases — total sleep is divided among stages; more NREM means proportionally less time for REM',
          wrongPool: ['REM also increases — deep sleep and REM sleep are coupled and increase together', 'REM is unaffected — REM is regulated independently by the brainstem regardless of NREM duration', 'REM doubles — a rebound effect occurs whenever NREM increases', 'REM increases because deeper NREM consolidates memory faster, freeing time for REM'],
        },
        {
          conceptId: 'fl3-ps-dc-6',
          scenarios: [
            'Homeostatic sleep pressure (Process S) builds during wakefulness and dissipates during sleep. If someone stays awake for 36 hours, what happens to sleep pressure and subsequent sleep depth/duration?',
          ],
          options: ['Sleep pressure is very high → subsequent sleep is deeper and/or longer as the body compensates', 'Sleep pressure is depleted → subsequent sleep is shorter because the homeostatic need has been expressed', 'Sleep pressure does not change with wakefulness — it is regulated only by circadian rhythm (Process C)', 'Sleep pressure leads to more REM specifically, not deeper NREM'],
          correct: 'Sleep pressure is very high → subsequent sleep is deeper and/or longer as the body compensates',
          wrongPool: ['Sleep pressure is depleted → subsequent sleep is shorter because the homeostatic need has been expressed', 'Sleep pressure does not change with wakefulness — it is regulated only by circadian rhythm (Process C)', 'Sleep pressure leads to more REM specifically, not deeper NREM', 'Sleep pressure reversal — 36 hours of waking resets the homeostatic clock to zero'],
        },
        {
          conceptId: 'fl3-ps-dc-7',
          scenarios: [
            'Sign-check practice: Education level and income are positively correlated (r = +0.45). Anxiety and academic performance are negatively correlated (r = −0.30). Which correctly describes these relationships?',
          ],
          options: ['Positive r = both go up together (more education → more income); negative r = one goes up as the other goes down (more anxiety → lower performance)', 'Positive r = the variables are causally related; negative r = the variables are not causally related', 'Positive r means r > 0.5; negative r means r < −0.5; values in between indicate no relationship', 'Negative r always indicates a stronger relationship than positive r of the same absolute value'],
          correct: 'Positive r = both go up together (more education → more income); negative r = one goes up as the other goes down (more anxiety → lower performance)',
          wrongPool: ['Positive r = the variables are causally related; negative r = the variables are not causally related', 'Positive r means r > 0.5; negative r means r < −0.5; values in between indicate no relationship', 'Negative r always indicates a stronger relationship than positive r of the same absolute value', 'Positive r = the predictor has a stronger effect; negative r = the predictor has a weaker effect'],
        },
        {
          conceptId: 'fl3-ps-dc-8',
          scenarios: [
            'A passage states that stress exposure is inversely related to SES and asks for the correlation coefficient. The options are r = −0.50, r = −0.20, r = +0.20, r = +0.50. What is the two-step approach to answer this correctly?',
          ],
          correct: 'Sign then magnitude — "inversely related" → negative; cut +0.20 and +0.50; −0.50 is implausibly strong for SES, −0.20 is moderate and realistic → r = −0.20',
          wrongPool: ['Magnitude then sign — find the weakest option (closest to zero) first, then apply whatever sign the passage describes', 'Default positive — stress is a real-world harm so the correlation must be positive; judge size after', 'Strongest r first — pick the highest absolute value, then apply the correct sign'],
        },
      ],
      showdown: [
        {
            conceptId: 'fl3-ps-dc-sd1',
            scenario: 'After 5 nights of REM deprivation, what happens on the first unrestricted sleep night?',
            conceptA: 'REM is reduced — the sleep system has adapted to function without it',
            conceptB: 'REM increases (REM rebound) — homeostatic pressure accumulated during deprivation is discharged',
            correct: 'REM increases (REM rebound) — homeostatic pressure accumulated during deprivation is discharged',
            explanation: 'Sleep homeostasis: deprive a stage → pressure builds → rebound when restriction is lifted. Always MORE, not less. Same logic applies to total sleep deprivation: longer, deeper sleep follows.',
          },
      ],
    },

    // ── Drill 3A: Evidence Evaluation ────────────────────────────────────────
    {
      id: 'fl3-ps-evidence-evaluation',
      label: 'Evidence Evaluation',
      color: '#0f766e',
      light: '#ccfbf1',
      icon: '🔍',
      scenarioDrop: [
        {
          conceptId: 'fl3-ps-ee-1',
          scenarios: [
            'A hypothesis states that empathy and cognitive perspective-taking are separate, distinct skills. Which finding BEST supports this?',
            'Theory: two social-cognitive abilities are independent modules. Which result most strongly confirms modularity?',
          ],
          options: ['A brain region is damaged and selectively abolishes empathy but leaves perspective-taking intact — this double dissociation is the strongest evidence for separability', 'Both skills improve together after training, suggesting they share overlapping neural substrates', 'A study shows empathy scores positively predict perspective-taking scores (r = +0.65)', 'Instructions that increase task difficulty reduce both skills, suggesting a common capacity limit'],
          correct: 'A brain region is damaged and selectively abolishes empathy but leaves perspective-taking intact — this double dissociation is the strongest evidence for separability',
          wrongPool: ['Both skills improve together after training, suggesting they share overlapping neural substrates', 'A study shows empathy scores positively predict perspective-taking scores (r = +0.65)', 'Instructions that increase task complexity reduce both skills, suggesting a common capacity limit', 'Participants who score high on empathy also score high on perspective-taking, consistent with a single skill'],
        },
        {
          conceptId: 'fl3-ps-ee-2',
          scenarios: [
            'The "dissociation" logic: when a hypothesis says two things are SEPARATE, the best support is:',
          ],
          options: ['A finding where one can be disrupted (by lesion, drug, or task demand) while the other is preserved — this shows they can operate independently', 'A finding where both are correlated positively — correlation proves they are distinct entities', 'A finding that merely confirms both abilities exist in the same individuals', 'A confounded study where a single manipulation changes both — this confirms they are coupled'],
          correct: 'A finding where one can be disrupted (by lesion, drug, or task demand) while the other is preserved — this shows they can operate independently',
          wrongPool: ['A finding where both are correlated positively — correlation proves they are distinct entities', 'A finding that merely confirms both abilities exist in the same individuals', 'A confounded study where a single manipulation changes both — this confirms they are coupled', 'A meta-analysis showing the two skills have the same average effect size across studies'],
        },
        {
          conceptId: 'fl3-ps-ee-3',
          scenarios: [
            'The theory states that race is socially constructed — categories are maintained by social norms, not biological differences. Which finding would MOST challenge this theory?',
          ],
          options: ['Identifying a specific genetic marker that reliably clusters along racial lines, suggesting biological rather than purely social patterning', 'Finding that people self-identify their race differently than an interviewer classifies them', 'Showing that racial categories differ across cultures and historical periods', 'Demonstrating that racial disparities in health outcomes are mediated by social factors like SES'],
          correct: 'Identifying a specific genetic marker that reliably clusters along racial lines, suggesting biological rather than purely social patterning',
          wrongPool: ['Finding that people self-identify their race differently than an interviewer classifies them', 'Showing that racial categories differ across cultures and historical periods', 'Demonstrating that racial disparities in health outcomes are mediated by social factors like SES', 'Proving that racial identity is predictive of social treatment — consistent with social construction, not a challenge'],
        },
        {
          conceptId: 'fl3-ps-ee-4',
          scenarios: [
            'KEY DISTINCTION: "Best supports" vs "merely consistent with" — what is the difference?',
          ],
          options: ['"Best supports" = the finding would be unlikely if the hypothesis were false (discriminating); "merely consistent" = the finding is compatible but many other hypotheses could also predict it', '"Best supports" = the finding has the largest effect size; "merely consistent" = the effect size is small', '"Best supports" means p < 0.01; "merely consistent" means p > 0.05', '"Best supports" requires a randomized experiment; "merely consistent" allows observational data'],
          correct: '"Best supports" = the finding would be unlikely if the hypothesis were false (discriminating); "merely consistent" = the finding is compatible but many other hypotheses could also predict it',
          wrongPool: ['"Best supports" = the finding has the largest effect size; "merely consistent" = the effect size is small', '"Best supports" means p < 0.01; "merely consistent" means p > 0.05', '"Best supports" requires a randomized experiment; "merely consistent" allows observational data', '"Best supports" is the same as "consistent" — both mean the data do not contradict the hypothesis'],
        },
        {
          conceptId: 'fl3-ps-ee-5',
          scenarios: [
            'A theory claims drug X causes aggression. Study results: people given drug X self-reported feeling more aggressive. Drug X also increases anxiety. The finding is confounded. Does this best support, weakly support, or challenge the theory?',
          ],
          options: ['Weakly supports — the result is consistent but the anxiety confound means aggression might be anxiety-driven, not drug-driven; a controlled design is needed for strong support', 'Best supports — self-report data are the gold standard for emotional states like aggression', 'Challenges — anxiety and aggression are opposite emotional states', 'Strongly supports — any correlation between drug X and aggression confirms causation'],
          correct: 'Weakly supports — the result is consistent but the anxiety confound means aggression might be anxiety-driven, not drug-driven; a controlled design is needed for strong support',
          wrongPool: ['Best supports — self-report data are the gold standard for emotional states like aggression', 'Challenges — anxiety and aggression are opposite emotional states', 'Strongly supports — any correlation between drug X and aggression confirms causation', 'Does not support — confounded studies are disqualified from being used as evidence'],
        },
        {
          conceptId: 'fl3-ps-ee-6',
          scenarios: [
            'A theory predicts that racial identity is based purely on social perception, not self-identification. A study finds that self-identified race and observer-classified race agree 95% of the time. Does this BEST support, challenge, or merely replicate the theory?',
          ],
          options: ['Merely consistent — high agreement is compatible with BOTH social-construction theory AND genetic/biological theories; it does not discriminate between them', 'Best supports — 95% agreement shows race is determined by observable social cues', 'Challenges — if race were purely social, agreement rates would be random (50%)', 'Best supports — this is a perfect operationalization of social construction theory'],
          correct: 'Merely consistent — high agreement is compatible with BOTH social-construction theory AND genetic/biological theories; it does not discriminate between them',
          wrongPool: ['Best supports — 95% agreement shows race is determined by observable social cues', 'Challenges — if race were purely social, agreement rates would be random (50%)', 'Best supports — this is a perfect operationalization of social construction theory', 'Challenges — the high agreement rate suggests a biological, not social, basis for racial categories'],
        },
        {
          conceptId: 'fl3-ps-ee-7',
          scenarios: [
            '"Greatest challenge to theory T" — which choice belongs?',
          ],
          options: ['The finding that most directly contradicts T\'s CORE claim — not a tangential finding or one that is merely unlikely', 'The finding with the lowest p-value — statistical significance determines challenge strength', 'A finding from a different cultural context — cross-cultural failures challenge all psychological theories', 'The finding the theory\'s authors said they had not tested yet — unexplored territory challenges any theory'],
          correct: 'The finding that most directly contradicts T\'s CORE claim — not a tangential finding or one that is merely unlikely',
          wrongPool: ['The finding with the lowest p-value — statistical significance determines challenge strength', 'A finding from a different cultural context — cross-cultural failures challenge all psychological theories', 'The finding the theory\'s authors said they had not tested yet — unexplored territory challenges any theory', 'The most recent finding published — newer evidence always supersedes older findings in evaluating a theory'],
        },
        {
          conceptId: 'fl3-ps-ee-8',
          scenarios: [
            'A hypothesis says social media use causes loneliness. A study finds that lonely people use social media MORE than non-lonely people (positive correlation, r = +0.40, p < 0.001). Which conclusion does this BEST support?',
          ],
          options: ['Social media use and loneliness are positively associated, but direction of causation cannot be determined from correlational data', 'Social media causes loneliness — the significant positive correlation confirms causation', 'Loneliness causes social media use — reverse causation is always the correct interpretation of correlational studies', 'Neither — a p < 0.001 finding without replication cannot support any conclusion'],
          correct: 'Social media use and loneliness are positively associated, but direction of causation cannot be determined from correlational data',
          wrongPool: ['Social media causes loneliness — the significant positive correlation confirms causation', 'Loneliness causes social media use — reverse causation is always the correct interpretation of correlational studies', 'Neither — a p < 0.001 finding without replication cannot support any conclusion', 'Social media reduces loneliness — the positive correlation means both variables increase, so social media must help'],
        },
      ],
      showdown: [
        {
            conceptId: 'fl3-ps-ee-sd1',
            scenario: 'Hypothesis: empathy and perspective-taking are separate. Which finding BEST supports it?',
            conceptA: 'Both skills correlate at r = +0.60 across a large sample',
            conceptB: 'Patients with vmPFC damage show impaired empathy but intact perspective-taking on neuropsychological testing',
            correct: 'Patients with vmPFC damage show impaired empathy but intact perspective-taking on neuropsychological testing',
            explanation: 'Correlation (A) is consistent with both separation AND overlap. A selective neurological dissociation (B) proves the skills can operate independently — the strongest possible evidence for separability.',
          },
        {
            conceptId: 'fl3-ps-ee-sd2',
            scenario: 'Challenge to social construction of race: which finding is stronger?',
            conceptA: 'People self-identify race differently than an interviewer classifies them — showing race is perceived inconsistently',
            conceptB: 'A genetic locus is found that predicts racial-category membership — suggesting a biological component',
            correct: 'A genetic locus is found that predicts racial-category membership — suggesting a biological component',
            explanation: 'Inconsistent self-vs-observer classification (A) is actually CONSISTENT with social construction — it shows race is malleable. A genetic basis (B) directly contradicts the core claim that race has no biological grounding.',
          },
      ],
    },

    // ── Drill 4A: Figure / Data Interpretation ────────────────────────────────
    {
      id: 'fl3-ps-figure-interpretation',
      label: 'Figure Interpretation',
      color: '#b45309',
      light: '#fef3c7',
      icon: '📊',
      scenarioDrop: [
        {
          conceptId: 'fl3-ps-fi-1',
          scenarios: [
            'A bar graph shows three therapy groups at 2-month and 6-month follow-up. At 2 months, Group A has a higher bar than Groups B and C (marked *). At 6 months, all bars are similar and below a "clinically significant" threshold line, with no * markers. What is supported?',
          ],
          options: ['At 6 months, all three therapies produced outcomes that did not significantly differ from one another AND all were below the clinical threshold — equally effective by 6 months', 'Group A is the most effective therapy overall because it was superior at 2 months', 'The 6-month similarity means all three therapies stopped working by that point', 'Group A remains superior at 6 months even though the * is absent — the trend from 2 months persists'],
          correct: 'At 6 months, all three therapies produced outcomes that did not significantly differ from one another AND all were below the clinical threshold — equally effective by 6 months',
          wrongPool: ['Group A is the most effective therapy overall because it was superior at 2 months', 'The 6-month similarity means all three therapies stopped working by that point', 'Group A remains superior at 6 months even though the * is absent — the trend from 2 months persists', 'The 2-month advantage of Group A proves it is clinically preferred; 6-month data are less reliable'],
        },
        {
          conceptId: 'fl3-ps-fi-2',
          scenarios: [
            'KEY RULE: Significance markers (*, p < 0.05) tell you what conclusions the figure LICENSES. If * is absent at a time point, what can you NOT conclude?',
          ],
          options: ['You cannot conclude any group is superior at that time point — absent * means the difference is not statistically significant, so you can only say groups do not significantly differ', 'You can conclude the smaller bar is still trending toward significance and will become significant with more data', 'You can infer that the * would appear if the sample were larger — the trend is real', 'Absent * means the measurement failed; that time point should be excluded from analysis'],
          correct: 'You cannot conclude any group is superior at that time point — absent * means the difference is not statistically significant, so you can only say groups do not significantly differ',
          wrongPool: ['You can conclude the smaller bar is still trending toward significance and will become significant with more data', 'You can infer that the * would appear if the sample were larger — the trend is real', 'Absent * means the measurement failed; that time point should be excluded from analysis', 'You can still rank groups by bar height even without * markers, because trends are informative'],
        },
        {
          conceptId: 'fl3-ps-fi-3',
          scenarios: [
            'A figure shows four groups over three time points. Group X is above the diagnostic threshold at time 1, crosses below it at time 2, and stays below at time 3. Groups Y and Z stay above the threshold the whole time. What is supported?',
          ],
          options: ['Group X crossed below the clinical threshold by time 2 while Y and Z did not; Group X showed clinically meaningful improvement that Y and Z did not', 'All groups improved because all bars decreased over time, even if Y and Z stayed above the threshold', 'Group X is the superior treatment because it had the lowest bar at time 1', 'The figure does not support any comparative conclusions because threshold-crossing is not a statistical test'],
          correct: 'Group X crossed below the clinical threshold by time 2 while Y and Z did not; Group X showed clinically meaningful improvement that Y and Z did not',
          wrongPool: ['All groups improved because all bars decreased over time, even if Y and Z stayed above the threshold', 'Group X is the superior treatment because it had the lowest bar at time 1', 'The figure does not support any comparative conclusions because threshold-crossing is not a statistical test', 'Y and Z are equally effective to X because all groups showed downward trends'],
        },
        {
          conceptId: 'fl3-ps-fi-4',
          scenarios: [
            'A figure reports means with error bars representing standard error. Two adjacent bars LOOK different (one appears ~10% higher). No significance markers. What is the correct interpretation?',
          ],
          options: ['The apparent difference may not be statistically significant — no * means no license to claim a difference; the eye can be deceived by bar height differences that are within chance variation', 'A 10% difference is always meaningful regardless of statistical significance markers', 'Standard error bars always correspond to statistical significance; if bars don\'t overlap, the difference is significant', 'The higher bar represents a superior group even without * — statistical testing is just one way to evaluate magnitude'],
          correct: 'The apparent difference may not be statistically significant — no * means no license to claim a difference; the eye can be deceived by bar height differences that are within chance variation',
          wrongPool: ['A 10% difference is always meaningful regardless of statistical significance markers', 'Standard error bars always correspond to statistical significance; if bars don\'t overlap, the difference is significant', 'The higher bar represents a superior group even without * — statistical testing is just one way to evaluate magnitude', 'Figure comparisons are always meaningful when n > 30, regardless of significance markers'],
        },
        {
          conceptId: 'fl3-ps-fi-5',
          scenarios: [
            'Over-reading trap: a figure shows that at immediate post-therapy (week 8), Group A was significantly better than Group B (*). A student concludes that "Group A is a better long-term treatment." Is this conclusion supported?',
          ],
          options: ['No — the figure only supports that Group A was superior at week 8; no long-term data are shown, so "long-term treatment" is an unsupported generalization', 'Yes — a significant week-8 advantage predicts long-term superiority by extension', 'No — week-8 significance indicates the opposite: short-term effects do not persist', 'Yes — any statistically significant advantage licenses conclusions about the full course of treatment'],
          correct: 'No — the figure only supports that Group A was superior at week 8; no long-term data are shown, so "long-term treatment" is an unsupported generalization',
          wrongPool: ['Yes — a significant week-8 advantage predicts long-term superiority by extension', 'No — week-8 significance indicates the opposite: short-term effects do not persist', 'Yes — any statistically significant advantage licenses conclusions about the full course of treatment', 'No — week-8 data are too early to support ANY conclusions about treatment outcomes'],
        },
        {
          conceptId: 'fl3-ps-fi-6',
          scenarios: [
            'A bar chart shows Group A = 45, Group B = 42, Group C = 44 (no error bars, no significance markers). A question asks which group performed best. What is the correct response?',
          ],
          options: ['Cannot determine — without error bars or significance tests, the numerical differences could be due to chance; no group can be called "best"', 'Group A — it has the numerically highest value, making it the best performer', 'Group C — the middle value is the most reliable because outliers bias the extremes', 'Group B — the lowest value represents the most conservative estimate of true performance'],
          correct: 'Cannot determine — without error bars or significance tests, the numerical differences could be due to chance; no group can be called "best"',
          wrongPool: ['Group A — it has the numerically highest value, making it the best performer', 'Group C — the middle value is the most reliable because outliers bias the extremes', 'Group B — the lowest value represents the most conservative estimate of true performance', 'All three are equivalent — values within 5 points of each other are always considered equal'],
        },
      ],
      showdown: [
        {
            conceptId: 'fl3-ps-fi-sd1',
            scenario: 'Three therapy groups, all below clinical threshold at 6 months, no * markers. Can Group A be called the best therapy?',
            conceptA: 'Yes — Group A was significantly superior at 2 months, and that advantage defines the best therapy overall',
            conceptB: 'No — at 6 months there are no significant differences; reading a 2-month advantage into a 6-month conclusion overclaims the figure',
            correct: 'No — at 6 months there are no significant differences; reading a 2-month advantage into a 6-month conclusion overclaims the figure',
            explanation: 'Figures license conclusions only for the time points and comparisons where significance was demonstrated. A * at month 2 does NOT grant you a conclusion at month 6. Read only what the markers say.',
          },
      ],
    },

  ]; // end all P/S FL3 clusters

  clusters.forEach(c => CLUSTERS.push(c));
  console.log('[PS-FL3] loaded', clusters.length, 'clusters. CLUSTERS total:', CLUSTERS.length);
})();
