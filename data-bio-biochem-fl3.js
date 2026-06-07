(function () {
  const clusters = [

    // ── Module 1: Negative-stem handling ─────────────────────────────────────
    {
      id: 'fl3-bb-negative-stems',
      label: 'Negative-Stem Traps',
      color: '#7c3aed',
      light: '#ede9fe',
      icon: '🚫',
      scenarioDrop: [
        {
          conceptId: 'fl3-bb-ns-1',
          scenarios: [
            'A student marks answer choice C because it is a correct fact about enzyme kinetics. The question asks which statement is NOT supported by the data. What went wrong?',
            'A test-taker picks the factually accurate statement about membrane permeability. The stem asked which option the passage does NOT support. What error did they make?',
          ],
          options: ['Chose a true statement instead of reading what the passage contradicts', 'Picked the answer that seemed most scientifically important overall', 'Eliminated three choices and selected whatever remained without re-reading the stem', 'Confused NOT/EXCEPT with "directly contradicts the passage"'],
          correct: 'Chose a true statement instead of reading what the passage contradicts',
          wrongPool: ['Picked the answer that seemed most scientifically important overall', 'Eliminated three choices and selected whatever remained without re-reading the stem', 'Confused NOT/EXCEPT with "directly contradicts the passage"', 'Assumed the longest answer choice was the NOT answer'],
        },
        {
          conceptId: 'fl3-bb-ns-2',
          scenarios: [
            'A passage shows that Treatment X increases cell proliferation. The question asks which conclusion is LEAST supported. Which answer type is the correct pick?',
            'Data show that Gene Y knockout reduces migration. The question asks which interpretation the data LEAST support. Which choice belongs in the correct answer?',
          ],
          options: ['A statement the data directly contradict or fail to address', 'The statement most consistent with the data trend', 'A statement that is factually false in general', 'The answer choice with the largest effect size'],
          correct: 'A statement the data directly contradict or fail to address',
          wrongPool: ['The statement most consistent with the data trend', 'A statement that is factually false in general', 'The answer choice with the largest effect size', 'The only answer mentioning the control group'],
        },
        {
          conceptId: 'fl3-bb-ns-3',
          scenarios: [
            'A question asks: "Which of the following CANNOT be concluded from Figure 2?" A student picks an answer that disagrees with their prior knowledge. Why is this a trap?',
          ],
          options: ['CANNOT = not supported by the figure; prior knowledge is irrelevant if the figure does not address it', 'CANNOT means the answer must be factually wrong in all contexts', 'CANNOT questions always pick the choice with the smallest bar', 'CANNOT is equivalent to EXCEPT only in genetics questions'],
          correct: 'CANNOT = not supported by the figure; prior knowledge is irrelevant if the figure does not address it',
          wrongPool: ['CANNOT means the answer must be factually wrong in all contexts', 'CANNOT questions always pick the smallest bar', 'CANNOT is equivalent to EXCEPT only in genetics questions', 'CANNOT means the correct answer is always a definition'],
        },
        {
          conceptId: 'fl3-bb-ns-4',
          scenarios: [
            'A question asks which amino acid side chain is NOT capable of hydrogen bonding. Serine, threonine, and asparagine all have OH or NH groups. Which class of side chain fits the NOT answer?',
          ],
          options: ['A nonpolar/hydrophobic side chain such as leucine or valine', 'Any charged side chain at physiological pH', 'Any aromatic side chain', 'Any side chain containing a carbonyl group'],
          correct: 'A nonpolar/hydrophobic side chain such as leucine or valine',
          wrongPool: ['Any charged side chain at physiological pH', 'Any aromatic side chain', 'Any side chain containing a carbonyl group', 'Any side chain with a ring structure'],
        },
        {
          conceptId: 'fl3-bb-ns-5',
          scenarios: [
            'The stem reads: "All of the following are characteristics of G-protein coupled receptors EXCEPT." A student picks an answer stating GPCRs have 7 transmembrane domains because they recall that fact is true. Is this correct reasoning?',
          ],
          options: ['No — EXCEPT means the correct answer is the one characteristic GPCRs do NOT have', 'Yes — 7 TM domains is the key feature so it must be the exception', 'Yes — the longest answer is usually the EXCEPT answer', 'No — EXCEPT questions always target the rarest characteristic'],
          correct: 'No — EXCEPT means the correct answer is the one characteristic GPCRs do NOT have',
          wrongPool: ['Yes — 7 TM domains is the key feature so it must be the exception', 'Yes — the longest answer is usually the EXCEPT answer', 'No — EXCEPT questions always target the rarest characteristic', 'No — EXCEPT only applies to pharmacology questions'],
        },
        {
          conceptId: 'fl3-bb-ns-6',
          scenarios: [
            'A question reads: "Which of the following would NOT increase the rate of an enzyme-catalyzed reaction?" Choices include: adding more substrate, adding a competitive inhibitor, raising temperature moderately, adding more enzyme. Which is correct?',
          ],
          options: ['Adding a competitive inhibitor — it reduces rate, so it is the NOT answer', 'Adding more substrate — Km means more substrate always slows things down', 'Raising temperature — enzymes are always inhibited by heat', 'Adding more enzyme — Vmax never changes'],
          correct: 'Adding a competitive inhibitor — it reduces rate, so it is the NOT answer',
          wrongPool: ['Adding more substrate — Km means more substrate always slows things down', 'Raising temperature — enzymes are always inhibited by heat', 'Adding more enzyme — Vmax never changes', 'None of these would change the rate'],
        },
        {
          conceptId: 'fl3-bb-ns-7',
          scenarios: [
            'A figure shows hormone levels over time. A LEAST-supported question is asked. A student picks the answer that matches a trend in the figure. What should they have done differently?',
          ],
          options: ['Find the answer the figure data directly contradict or simply do not address, not one it supports', 'Pick the answer about a hormone not shown in the figure', 'Always choose the numerically largest value from the figure', 'Re-read the question stem after choosing to confirm the positive framing'],
          correct: 'Find the answer the figure data directly contradict or simply do not address, not one it supports',
          wrongPool: ['Pick the answer about a hormone not shown in the figure', 'Always choose the numerically largest value from the figure', 'Re-read the question stem after choosing to confirm the positive framing', 'Eliminate the answer containing the word "only"'],
        },
        {
          conceptId: 'fl3-bb-ns-8',
          scenarios: [
            'Strategy: when you see NOT/EXCEPT/LEAST in the stem, what is the single best habit before selecting?',
          ],
          options: ['Physically circle or underline the negative word so your brain switches to "find the wrong one" mode', 'Answer the positive form of the question first, then select whichever choice does not fit', 'Evaluate every answer choice as if it were a standalone true/false statement, ignoring the stem modifier', 'Read the answer choices before finishing the question stem to save time'],
          correct: 'Physically circle or underline the negative word so your brain switches to "find the wrong one" mode',
          wrongPool: ['Answer the positive form of the question first, then select whichever choice does not fit', 'Evaluate every answer choice as if it were a standalone true/false statement, ignoring the stem modifier', 'Read the answer choices before finishing the question stem to save time', 'Pick the answer that contradicts the most information in the passage'],
        },
        {
          conceptId: 'fl3-bb-ns-9',
          scenarios: [
            'A passage describes an experiment where adding Drug Z decreased cAMP. The question asks which conclusion is NOT supported. One choice says "Drug Z activates adenylyl cyclase." Should this be chosen?',
          ],
          options: ['Yes — activating adenylyl cyclase would increase cAMP, which contradicts the data, making it the NOT-supported answer', 'No — the passage never mentions adenylyl cyclase so it cannot be answered', 'No — Drug Z decreasing cAMP proves adenylyl cyclase was inhibited, which is supported', 'Yes — any answer mentioning an enzyme is automatically the NOT answer'],
          correct: 'Yes — activating adenylyl cyclase would increase cAMP, which contradicts the data, making it the NOT-supported answer',
          wrongPool: ['No — the passage never mentions adenylyl cyclase so it cannot be answered', 'No — Drug Z decreasing cAMP proves adenylyl cyclase was inhibited, which is supported', 'Yes — any answer mentioning an enzyme is automatically the NOT answer', 'No — only quantitative claims can be NOT-supported'],
        },
        {
          conceptId: 'fl3-bb-ns-10',
          scenarios: [
            'The question stem says: "Which of the following is NOT a function of the liver?" Choices include gluconeogenesis, urea synthesis, producing bile, and producing insulin. Which is correct?',
          ],
          options: ['Producing insulin — the pancreatic β-cells make insulin, not the liver', 'Gluconeogenesis — the liver does not produce glucose', 'Urea synthesis — urea is made in the kidneys', 'Producing bile — bile is made by the gallbladder'],
          correct: 'Producing insulin — the pancreatic β-cells make insulin, not the liver',
          wrongPool: ['Gluconeogenesis — the liver does not produce glucose', 'Urea synthesis — urea is made in the kidneys', 'Producing bile — bile is made by the gallbladder', 'All of these are liver functions'],
        },
        {
          conceptId: 'fl3-bb-ns-11',
          scenarios: [
            'A student reads "which of the following would LEAST likely occur" and picks the most dramatic or unusual-sounding answer. Why is this a pattern error?',
          ],
          options: ['LEAST likely = the answer that the biological logic does NOT predict; dramatic wording is irrelevant', 'LEAST likely always refers to low-probability single-nucleotide events', 'Dramatic answers are always wrong on the MCAT regardless of stem type', 'LEAST is equivalent to MOST when asking about probabilities'],
          correct: 'LEAST likely = the answer that the biological logic does NOT predict; dramatic wording is irrelevant',
          wrongPool: ['LEAST likely always refers to low-probability single-nucleotide events', 'Dramatic answers are always wrong on the MCAT regardless of stem type', 'LEAST is equivalent to MOST when asking about probabilities', 'Pick the longest answer for LEAST questions'],
        },
        {
          conceptId: 'fl3-bb-ns-12',
          scenarios: [
            'Final rule: on a negative-stem question (NOT/EXCEPT/LEAST/CANNOT), how many answer choices should feel "correct" in a positive sense before you find your answer?',
          ],
          options: ['Three — three choices should be clearly true/supported; the odd one out is the answer', 'One — there should only be one obviously correct choice as always', 'Zero — none of the choices should look right', 'Two — MCAT always splits 50/50 on negative-stem questions'],
          correct: 'Three — three choices should be clearly true/supported; the odd one out is the answer',
          wrongPool: ['One — there should only be one obviously correct choice as always', 'Zero — none of the choices should look right', 'Two — MCAT always splits 50/50 on negative-stem questions', 'Four — verify each choice individually without elimination'],
        },
      ],
      showdown: [
        {
            conceptId: 'fl3-bb-ns-sd1',
            scenario: 'Negative-stem question type: EXCEPT vs LEAST',
            conceptA: 'EXCEPT → one option is factually not a member of the category',
            conceptB: 'LEAST → one option is least supported by evidence/logic in context',
            correct: 'LEAST → one option is least supported by evidence/logic in context',
            explanation: 'Both mean "find the outlier" but EXCEPT = categorical exclusion; LEAST = weakest evidence link. Knowing the difference prevents misapplying the strategy.',
          },
        {
            conceptId: 'fl3-bb-ns-sd2',
            scenario: 'When stuck on a NOT/EXCEPT question, which approach is more reliable?',
            conceptA: 'Eliminate the three that are clearly true/correct; what remains is the answer',
            conceptB: 'Scan for the choice that sounds least scientific or most extreme',
            correct: 'Eliminate the three that are clearly true/correct; what remains is the answer',
            explanation: 'Elimination by confirming three positives is systematic and accurate. "Sounds extreme" is a heuristic that fails on MCAT passages with counterintuitive findings.',
          },
      ],
    },

    // ── Module 2A: Direction-check drills ────────────────────────────────────
    {
      id: 'fl3-bb-direction-check',
      label: 'Direction-Check Drills',
      color: '#0369a1',
      light: '#e0f2fe',
      icon: '↕️',
      scenarioDrop: [
        {
          conceptId: 'fl3-bb-dc-1',
          scenarios: [
            'Limb A is twice as long as Limb B. Both move the same load the same vertical height. Which limb does MORE work? (W = F·d)',
            'A longer muscle lever arm moves a weight the same vertical displacement as a shorter arm. Compare the work done.',
          ],
          options: ['They do the same work — work depends on force × vertical displacement, not limb length', 'The longer limb does more work because it travels a longer arc path', 'The shorter limb does more work because it applies more force per unit length', 'Cannot be determined without knowing the mass'],
          correct: 'They do the same work — work depends on force × vertical displacement, not limb length',
          wrongPool: ['The longer limb does more work because it travels a longer arc path', 'The shorter limb does more work because it applies more force per unit length', 'Cannot be determined without knowing the mass', 'The longer limb does less work due to mechanical disadvantage'],
        },
        {
          conceptId: 'fl3-bb-dc-2',
          scenarios: [
            'Muscle fiber A has a larger cross-sectional diameter than fiber B. Both contract at the same velocity. Which generates more FORCE?',
            'Two myosin filaments differ only in diameter. Same shortening speed. Which produces greater contractile force?',
          ],
          options: ['The larger diameter fiber — force ∝ cross-sectional area, not length or velocity', 'The smaller fiber — it concentrates force at a point', 'They generate the same force if velocity is equal', 'The smaller fiber because it has higher myosin density'],
          correct: 'The larger diameter fiber — force ∝ cross-sectional area, not length or velocity',
          wrongPool: ['The smaller fiber — it concentrates force at a point', 'They generate the same force if velocity is equal', 'The smaller fiber because it has higher myosin density', 'The larger fiber because it has more actin binding sites per sarcomere'],
        },
        {
          conceptId: 'fl3-bb-dc-3',
          scenarios: [
            'Fiber A has the same diameter as Fiber B but higher myosin ATPase activity. Same load. Which fiber produces more POWER?',
            'Two fibers lift the same load. Identical diameter. Fiber A has a higher myosin ATPase rate than Fiber B. Which develops more power output?',
          ],
          options: ['Fiber A — higher ATPase → faster cross-bridge cycling → higher velocity at same force → more power', 'Fiber B — lower ATPase conserves energy, allowing more total power', 'They have equal power because diameter is the same', 'Fiber A generates more force, not more power'],
          correct: 'Fiber A — higher ATPase → faster cross-bridge cycling → higher velocity at same force → more power',
          wrongPool: ['Fiber B — lower ATPase conserves energy, allowing more total power', 'They have equal power because diameter is the same', 'Fiber A generates more force, not more power', 'ATPase activity only affects relaxation speed, not power'],
        },
        {
          conceptId: 'fl3-bb-dc-4',
          scenarios: [
            'Dosage compensation in mammals inactivates one X chromosome per cell. A cell has three X chromosomes. How many Barr bodies are present?',
            'An individual with 47,XXX karyotype undergoes Lyon hypothesis-based X-inactivation. How many inactive X chromosomes are present per somatic cell?',
          ],
          options: ['Two Barr bodies — one X remains active; the rest are inactivated', 'One Barr body — always one regardless of X count', 'Three Barr bodies — all X chromosomes form Barr bodies', 'Zero — dosage compensation activates rather than inactivates'],
          correct: 'Two Barr bodies — one X remains active; the rest are inactivated',
          wrongPool: ['One Barr body — always one regardless of X count', 'Three Barr bodies — all X chromosomes form Barr bodies', 'Zero — dosage compensation activates rather than inactivates', 'Cannot be determined without knowing the cell type'],
        },
        {
          conceptId: 'fl3-bb-dc-5',
          scenarios: [
            'Histone deacetylase (HDAC) removes acetyl groups from histone tails. What happens to chromatin compaction and transcription?',
            'An HDAC inhibitor is applied to cells. How would you predict transcription levels to change compared to uninhibited cells?',
          ],
          options: ['HDAC removes acetyl → restored + charge on histone → tighter DNA binding → chromatin condenses → transcription OFF', 'HDAC removes acetyl → histone becomes neutral → DNA loosens → transcription ON', 'HDAC adds acetyl groups → transcription increases', 'HDAC condenses DNA by adding methyl groups to cytosines'],
          correct: 'HDAC removes acetyl → restored + charge on histone → tighter DNA binding → chromatin condenses → transcription OFF',
          wrongPool: ['HDAC removes acetyl → histone becomes neutral → DNA loosens → transcription ON', 'HDAC adds acetyl groups → transcription increases', 'HDAC condenses DNA by adding methyl groups to cytosines', 'HDAC activity has no effect on transcription rate'],
        },
        {
          conceptId: 'fl3-bb-dc-6',
          scenarios: [
            'A solution has osmotic pressure π. A second solution has ¼ of that osmotic pressure. The van\'t Hoff equation is π = iMRT. By what factor does molarity change?',
            'Comparing two solutions: one has osmotic pressure 4× the other. Temperature and i are constant. What is the ratio of their molarities?',
          ],
          options: ['Molarity is ¼ as large — osmotic pressure is directly proportional to concentration', 'Molarity is 4× as large — lower pressure means more particles needed', 'Molarity is ½ as large — the relationship is square-root based', 'Molarity is unchanged — only solute type affects osmotic pressure'],
          correct: 'Molarity is ¼ as large — osmotic pressure is directly proportional to concentration',
          wrongPool: ['Molarity is 4× as large — lower pressure means more particles needed', 'Molarity is ½ as large — the relationship is square-root based', 'Molarity is unchanged — only solute type affects osmotic pressure', 'Molarity doubles because π and M are inversely related'],
        },
        {
          conceptId: 'fl3-bb-dc-7',
          scenarios: [
            'Increased luminal solute in the colon raises osmotic pressure. What happens to water movement and stool consistency?',
            'Osmotic laxatives retain water in the gut lumen by raising luminal osmolarity. What is the downstream effect on stool?',
          ],
          options: ['Water is drawn into the lumen (osmosis follows solute) → stool becomes watery → diarrhea', 'Water is pushed out of the lumen → stool becomes harder → constipation', 'Osmotic pressure changes do not affect water movement across the gut', 'Higher luminal solute triggers active water pumping into epithelium'],
          correct: 'Water is drawn into the lumen (osmosis follows solute) → stool becomes watery → diarrhea',
          wrongPool: ['Water is pushed out of the lumen → stool becomes harder → constipation', 'Osmotic pressure changes do not affect water movement across the gut', 'Higher luminal solute triggers active water pumping into epithelium', 'Water retention in the lumen triggers the vomiting reflex only'],
        },
        {
          conceptId: 'fl3-bb-dc-8',
          scenarios: [
            'Blood calcium rises above normal. To restore homeostasis, which direction should osteoclast and osteoblast activity shift?',
            'Hypercalcemia must be corrected. Which cellular response in bone would lower serum calcium?',
          ],
          options: ['↓ osteoclast (stops releasing Ca from bone) + ↑ osteoblast (deposits Ca into bone)', '↑ osteoclast (releases more Ca) + ↓ osteoblast (stores less Ca)', '↑ both osteoclast and osteoblast equally to remodel bone', '↓ both; all bone remodeling halts during hypercalcemia'],
          correct: '↓ osteoclast (stops releasing Ca from bone) + ↑ osteoblast (deposits Ca into bone)',
          wrongPool: ['↑ osteoclast (releases more Ca) + ↓ osteoblast (stores less Ca)', '↑ both osteoclast and osteoblast equally to remodel bone', '↓ both; all bone remodeling halts during hypercalcemia', 'Osteoclast activity is calcium-independent; only osteoblasts change'],
        },
        {
          conceptId: 'fl3-bb-dc-9',
          scenarios: [
            'Succinate dehydrogenase (SDH) converts succinate to fumarate in the TCA cycle. A mutation inactivates SDH. What happens to succinate levels?',
          ],
          options: ['Succinate accumulates — SDH cannot consume it', 'Succinate falls — SDH normally produces succinate, so losing it means less is made', 'Fumarate accumulates and succinate stays the same', 'Succinate is converted to oxaloacetate via an alternative route'],
          correct: 'Succinate accumulates — SDH cannot consume it',
          wrongPool: ['Succinate falls — SDH normally produces succinate, so losing it means less is made', 'Fumarate accumulates and succinate stays the same', 'Succinate is converted to oxaloacetate via an alternative route', 'No change — succinate is maintained by equilibrium reactions'],
        },
        {
          conceptId: 'fl3-bb-dc-10',
          scenarios: [
            'Succinyl-CoA synthetase converts succinyl-CoA → succinate in the TCA cycle. High HIF-1α is associated with elevated succinate. How does this fit together?',
          ],
          options: ['Succinyl-CoA synthetase PRODUCES succinate; more succinate → PHD inhibition → HIF-1α stabilization → ↑HIF', 'Succinyl-CoA synthetase CONSUMES succinate, so more enzyme activity means less HIF', 'Succinate activates PHD, which degrades HIF-1α', 'Succinyl-CoA synthetase is in the ETC, not the TCA cycle'],
          correct: 'Succinyl-CoA synthetase PRODUCES succinate; more succinate → PHD inhibition → HIF-1α stabilization → ↑HIF',
          wrongPool: ['Succinyl-CoA synthetase CONSUMES succinate, so more enzyme activity means less HIF', 'Succinate activates PHD, which degrades HIF-1α', 'Succinyl-CoA synthetase is in the ETC, not the TCA cycle', 'Succinate is produced by the citrate synthase step, not succinyl-CoA synthetase'],
        },
        {
          conceptId: 'fl3-bb-dc-11',
          scenarios: [
            'An SSRI blocks the presynaptic serotonin reuptake transporter (SERT). What happens to synaptic serotonin concentration and receptor activation?',
          ],
          options: ['Serotonin stays in the synapse longer → higher concentration → more postsynaptic receptor activation', 'SERT blockade reduces serotonin release from the presynaptic terminal', 'SSRIs block postsynaptic receptors, preventing serotonin from binding', 'Blocking SERT causes serotonin to be degraded faster by MAO'],
          correct: 'Serotonin stays in the synapse longer → higher concentration → more postsynaptic receptor activation',
          wrongPool: ['SERT blockade reduces serotonin release from the presynaptic terminal', 'SSRIs block postsynaptic receptors, preventing serotonin from binding', 'Blocking SERT causes serotonin to be degraded faster by MAO', 'SSRIs have no effect on synaptic serotonin; they act on reuptake only in noradrenergic neurons'],
        },
        {
          conceptId: 'fl3-bb-dc-12',
          scenarios: [
            'Intestinal villi increase surface area for absorption. A disease that blunts villi (e.g., celiac) primarily impairs which function?',
          ],
          options: ['Nutrient absorption — villi maximize surface area for uptake, not for propulsion', 'Peristalsis — villi contain smooth muscle for propulsion', 'Mucus secretion — villi are the primary source of intestinal mucus', 'Enzyme secretion — villi produce all intestinal brush-border enzymes'],
          correct: 'Nutrient absorption — villi maximize surface area for uptake, not for propulsion',
          wrongPool: ['Peristalsis — villi contain smooth muscle for propulsion', 'Mucus secretion — villi are the primary source of intestinal mucus', 'Enzyme secretion — villi produce all intestinal brush-border enzymes', 'Hormone secretion — all GI hormones come from villous enterocytes'],
        },
        {
          conceptId: 'fl3-bb-dc-13',
          scenarios: [
            'A figure shows experimental data. One answer choice states the data support a conclusion that the figure directly contradicts. Another states the data support a separate conclusion the figure is silent on. In a LEAST-supported question, which is the better answer?',
          ],
          options: ['The answer the figure directly contradicts — "least supported" means the data argue against it most strongly', 'The answer the figure is silent on — absence of support = least supported', 'Either — both are equally "least supported" by the figure', 'The answer about which the figure provides the most data'],
          correct: 'The answer the figure directly contradicts — "least supported" means the data argue against it most strongly',
          wrongPool: ['The answer the figure is silent on — absence of support = least supported', 'Either — both are equally "least supported" by the figure', 'The answer about which the figure provides the most data', 'The answer that uses the most technical vocabulary'],
        },
        {
          conceptId: 'fl3-bb-dc-14',
          scenarios: [
            'A drug raises intracellular cAMP. Via PKA, what happens to glycogen phosphorylase and glycogen synthase activity?',
          ],
          options: ['Phosphorylase is activated (↑ glycogen breakdown) and synthase is inhibited (↓ glycogen synthesis)', 'Phosphorylase is inhibited and synthase is activated — cAMP promotes glycogen storage', 'Both enzymes are activated to balance glucose flux', 'cAMP has no effect on glycogen metabolism enzymes'],
          correct: 'Phosphorylase is activated (↑ glycogen breakdown) and synthase is inhibited (↓ glycogen synthesis)',
          wrongPool: ['Phosphorylase is inhibited and synthase is activated — cAMP promotes glycogen storage', 'Both enzymes are activated to balance glucose flux', 'cAMP has no effect on glycogen metabolism enzymes', 'Synthase is activated only when phosphorylase is also active'],
        },
      ],
      showdown: [
        {
            conceptId: 'fl3-bb-dc-sd1',
            scenario: 'Higher ATPase rate in a muscle fiber with same diameter and same load',
            conceptA: 'More force generated because ATP hydrolysis drives cross-bridge attachment',
            conceptB: 'More power generated because higher ATPase → faster shortening velocity → more power at same force',
            correct: 'More power generated because higher ATPase → faster shortening velocity → more power at same force',
            explanation: 'Diameter determines force. ATPase rate determines velocity. Power = Force × velocity, so higher ATPase → higher power, not more force.',
          },
        {
            conceptId: 'fl3-bb-dc-sd2',
            scenario: 'Effect of HDAC inhibitor on gene expression',
            conceptA: 'Transcription increases — inhibiting HDAC keeps acetyl groups on histones → open chromatin',
            conceptB: 'Transcription decreases — inhibiting HDAC prevents chromatin condensation needed for expression',
            correct: 'Transcription increases — inhibiting HDAC keeps acetyl groups on histones → open chromatin',
            explanation: 'Acetylated histones = open chromatin = transcription ON. HDAC removes acetyl, so inhibiting HDAC preserves acetylation → more open chromatin → more transcription.',
          },
      ],
    },

    // ── Module 2B: Direction-anchor rapid pairs ────────────────────────────────
    {
      id: 'fl3-bb-direction-anchors',
      label: 'Direction Anchors',
      color: '#0369a1',
      light: '#e0f2fe',
      icon: '⚓',
      showdown: [
        {
            conceptId: 'fl3-bb-da-1',
            scenario: 'SDH (succinate dehydrogenase) and succinate: producer vs consumer',
            conceptA: 'SDH produces succinate from succinyl-CoA (succinate is its output)',
            conceptB: 'SDH consumes succinate, converting it to fumarate (succinate is its substrate)',
            correct: 'SDH consumes succinate, converting it to fumarate (succinate is its substrate)',
            explanation: 'In the TCA cycle: succinyl-CoA → succinate (succinyl-CoA synthetase), then succinate → fumarate (SDH = succinate dehydrogenase). SDH is the consumer of succinate.',
          },
        {
            conceptId: 'fl3-bb-da-2',
            scenario: 'Succinyl-CoA synthetase: what does it produce?',
            conceptA: 'Succinyl-CoA synthetase produces succinyl-CoA from succinate',
            conceptB: 'Succinyl-CoA synthetase produces succinate from succinyl-CoA',
            correct: 'Succinyl-CoA synthetase produces succinate from succinyl-CoA',
            explanation: 'Succinyl-CoA SYNTHETASE sounds like it makes succinyl-CoA, but as a TCA enzyme it converts succinyl-CoA → succinate + GTP. It produces succinate.',
          },
        {
            conceptId: 'fl3-bb-da-3',
            scenario: 'X-inactivation: when an extra X chromosome is present, what happens to it?',
            conceptA: 'The extra X is duplicated to ensure dosage balance',
            conceptB: 'The extra X is inactivated (Barr body formed) to achieve dosage compensation',
            correct: 'The extra X is inactivated (Barr body formed) to achieve dosage compensation',
            explanation: 'Dosage compensation = silence the extras. One X stays active; every additional X forms a Barr body. 46,XX → 1 active, 0 Barr bodies. 47,XXX → 1 active, 2 Barr bodies.',
          },
        {
            conceptId: 'fl3-bb-da-4',
            scenario: 'Blood Ca²⁺ is too HIGH. How do bone cells respond?',
            conceptA: '↑ osteoclast activity to resorb bone and raise Ca further',
            conceptB: '↓ osteoclast + ↑ osteoblast to deposit Ca into bone and lower serum Ca',
            correct: '↓ osteoclast + ↑ osteoblast to deposit Ca into bone and lower serum Ca',
            explanation: 'Osteoclasts CRUSH bone (release Ca). Osteoblasts BUILD bone (store Ca). To lower serum Ca: crush less, build more.',
          },
        {
            conceptId: 'fl3-bb-da-5',
            scenario: 'SERT (serotonin transporter) is blocked. Net effect on synaptic serotonin?',
            conceptA: 'Synaptic serotonin decreases — SERT normally releases serotonin into the synapse',
            conceptB: 'Synaptic serotonin increases — SERT normally clears serotonin; blocking it lets serotonin accumulate',
            correct: 'Synaptic serotonin increases — SERT normally clears serotonin; blocking it lets serotonin accumulate',
            explanation: 'SERT is a REUPTAKE transporter: it pulls serotonin BACK into the presynaptic terminal. Block it → serotonin stays in synapse longer → ↑ concentration.',
          },
        {
            conceptId: 'fl3-bb-da-6',
            scenario: 'Osmotic pressure and solute concentration: which direction?',
            conceptA: 'Higher solute concentration → lower osmotic pressure',
            conceptB: 'Higher solute concentration → higher osmotic pressure (π = iMRT)',
            correct: 'Higher solute concentration → higher osmotic pressure (π = iMRT)',
            explanation: 'π = iMRT. π is directly proportional to M. More solute = more particles = more osmotic pressure. The relationship is direct, not inverse.',
          },
        {
            conceptId: 'fl3-bb-da-7',
            scenario: 'Intestinal villi: absorption surface vs propulsion',
            conceptA: 'Villi primarily drive peristalsis and propel luminal contents',
            conceptB: 'Villi primarily expand absorptive surface area; propulsion is driven by smooth muscle in the muscularis',
            correct: 'Villi primarily expand absorptive surface area; propulsion is driven by smooth muscle in the muscularis',
            explanation: 'Villi = finger-like projections that maximize surface area for absorption. Movement = circular and longitudinal smooth muscle layers in the muscularis externa.',
          },
        {
            conceptId: 'fl3-bb-da-8',
            scenario: 'Work (W = F·d) vs power (P = W/t) when only ATPase rate differs',
            conceptA: 'Higher ATPase rate increases force and therefore increases work',
            conceptB: 'Higher ATPase rate increases cross-bridge cycling speed → higher velocity → more power, not more force',
            correct: 'Higher ATPase rate increases cross-bridge cycling speed → higher velocity → more power, not more force',
            explanation: 'Force is set by fiber diameter (# parallel sarcomeres). ATPase rate sets velocity. Work = F × d is unchanged if the load and displacement are the same; power increases because the same work is done faster.',
          },
      ],
      scenarioDrop: [],
    },

    // ── Module 3A: Purines vs Pyrimidines ────────────────────────────────────
    {
      id: 'fl3-bb-purines-pyrimidines',
      label: 'Purines vs Pyrimidines',
      color: '#b45309',
      light: '#fef3c7',
      icon: '🧬',
      scenarioDrop: [
        {
          conceptId: 'fl3-bb-pp-1',
          scenarios: [
            'A C→T substitution mutation occurs. Is this a transition (same class) or transversion (different class)?',
            'Cytosine is replaced by thymine. Both are pyrimidines. What type of base substitution is this?',
          ],
          options: ['Transition — both C and T are pyrimidines (single-ring bases)', 'Transversion — C is a pyrimidine and T is a purine', 'Transversion — any C→T change crosses the purine/pyrimidine boundary', 'Transition — because both have similar molecular weights'],
          correct: 'Transition — both C and T are pyrimidines (single-ring bases)',
          wrongPool: ['Transversion — C is a pyrimidine and T is a purine', 'Transversion — any C→T change crosses the purine/pyrimidine boundary', 'Transition — because both have similar molecular weights', 'Cannot be classified without knowing the DNA strand orientation'],
        },
        {
          conceptId: 'fl3-bb-pp-2',
          scenarios: [
            'Which bases are purines? Which are pyrimidines?',
          ],
          options: ['Purines: Adenine, Guanine (double ring). Pyrimidines: Cytosine, Thymine, Uracil (single ring)', 'Purines: Adenine, Thymine. Pyrimidines: Guanine, Cytosine', 'Purines: Cytosine, Guanine. Pyrimidines: Adenine, Thymine', 'Purines: Adenine, Cytosine, Guanine. Pyrimidines: Thymine only'],
          correct: 'Purines: Adenine, Guanine (double ring). Pyrimidines: Cytosine, Thymine, Uracil (single ring)',
          wrongPool: ['Purines: Adenine, Thymine. Pyrimidines: Guanine, Cytosine', 'Purines: Cytosine, Guanine. Pyrimidines: Adenine, Thymine', 'Purines: Adenine, Cytosine, Guanine. Pyrimidines: Thymine only', 'All four DNA bases are purines; RNA uses pyrimidines only'],
        },
        {
          conceptId: 'fl3-bb-pp-3',
          scenarios: [
            'A G→A mutation is described. Both are double-ring bases. Is this a transition or transversion?',
          ],
          options: ['Transition — both G and A are purines', 'Transversion — G pairs with C while A pairs with T, so they are functionally different classes', 'Transversion — a purine replacing a purine is always a transversion', 'Cannot be determined from base identity alone'],
          correct: 'Transition — both G and A are purines',
          wrongPool: ['Transversion — G pairs with C while A pairs with T, so they are functionally different classes', 'Transversion — a purine replacing a purine is always a transversion', 'Cannot be determined from base identity alone', 'Transition only applies to pyrimidine-to-pyrimidine changes'],
        },
        {
          conceptId: 'fl3-bb-pp-4',
          scenarios: [
            'A→C is classified as what type of mutation?',
          ],
          options: ['Transversion — A is a purine, C is a pyrimidine (different classes)', 'Transition — both A and C are single-ring bases', 'Transition — both base-pair with G in DNA', 'Transversion — only because A pairs with T and C pairs with G'],
          correct: 'Transversion — A is a purine, C is a pyrimidine (different classes)',
          wrongPool: ['Transition — both A and C are single-ring bases', 'Transition — both base-pair with G in DNA', 'Transversion — only because A pairs with T and C pairs with G', 'This is a deletion, not a substitution'],
        },
        {
          conceptId: 'fl3-bb-pp-5',
          scenarios: [
            'Why are purines always found base-paired with pyrimidines in double-stranded DNA?',
          ],
          options: ['One large (purine) + one small (pyrimidine) = constant helix width; two purines or two pyrimidines would distort the helix', 'Purines have more hydrogen bond donors than pyrimidines, making cross-class pairing energetically favorable', 'Purines are found only in the template strand; pyrimidines only in the coding strand', 'The pairing is random but stabilized by base-stacking forces'],
          correct: 'One large (purine) + one small (pyrimidine) = constant helix width; two purines or two pyrimidines would distort the helix',
          wrongPool: ['Purines have more hydrogen bond donors than pyrimidines, making cross-class pairing energetically favorable', 'Purines are found only in the template strand; pyrimidines only in the coding strand', 'The pairing is random but stabilized by base-stacking forces', 'DNA polymerase can only read purines; pyrimidines are added by ligase'],
        },
        {
          conceptId: 'fl3-bb-pp-6',
          scenarios: [
            'Uracil replaces thymine in RNA. What class of base is uracil?',
          ],
          options: ['Pyrimidine — uracil is single-ring like thymine', 'Purine — uracil contains two fused rings', 'Neither — uracil is unique to RNA and has no purine/pyrimidine classification', 'Purine — uracil pairs with adenine, a purine'],
          correct: 'Pyrimidine — uracil is single-ring like thymine',
          wrongPool: ['Purine — uracil contains two fused rings', 'Neither — uracil is unique to RNA and has no purine/pyrimidine classification', 'Purine — uracil pairs with adenine, a purine', 'Uracil is a modified purine found only in tRNA'],
        },
        {
          conceptId: 'fl3-bb-pp-7',
          scenarios: [
            'Chemotherapy drug 5-fluorouracil (5-FU) mimics uracil and is incorporated into DNA/RNA. Which base class does it belong to?',
          ],
          options: ['Pyrimidine analog — 5-FU is a uracil analog, and uracil is a pyrimidine', 'Purine analog — fluorine substitution converts it to a double-ring compound', 'Neither; fluorinated bases form a third class', 'Purine analog — fluorouracil pairs with guanine, a purine'],
          correct: 'Pyrimidine analog — 5-FU is a uracil analog, and uracil is a pyrimidine',
          wrongPool: ['Purine analog — fluorine substitution converts it to a double-ring compound', 'Neither; fluorinated bases form a third class', 'Purine analog — fluorouracil pairs with guanine, a purine', 'Pyrimidine only when in RNA; purine when incorporated into DNA'],
        },
        {
          conceptId: 'fl3-bb-pp-8',
          scenarios: [
            'In a C→T transition driven by deamination of 5-methylcytosine, both the original and final base are pyrimidines. What makes deamination of 5-methylcytosine more mutagenic than deamination of cytosine itself?',
          ],
          options: ['Deamination of cytosine produces uracil (recognized and repaired by UNG); deamination of 5-methylcytosine produces thymine (a normal base, not flagged for repair)', 'Deamination of 5-methylcytosine is faster because methyl groups are bulkier', 'Both deaminations produce the same product; methylation has no effect on repair', 'Deamination of 5-methylcytosine produces adenine, causing a transversion'],
          correct: 'Deamination of cytosine produces uracil (recognized and repaired by UNG); deamination of 5-methylcytosine produces thymine (a normal base, not flagged for repair)',
          wrongPool: ['Deamination of 5-methylcytosine is faster because methyl groups are bulkier', 'Both deaminations produce the same product; methylation has no effect on repair', 'Deamination of 5-methylcytosine produces adenine, causing a transversion', 'Methyl groups prevent deamination, so 5-methylcytosine is more stable'],
        },
      ],
      showdown: [],
    },

    // ── Module 3B: Endocrine Axes ─────────────────────────────────────────────
    {
      id: 'fl3-bb-endocrine-axes',
      label: 'Endocrine Axes',
      color: '#0f766e',
      light: '#ccfbf1',
      icon: '🧪',
      scenarioDrop: [
        {
          conceptId: 'fl3-bb-ea-1',
          scenarios: [
            'GnRH is released from the hypothalamus. Which endocrine axis does it govern?',
            'A patient has a GnRH-secreting tumor. Which gland and hormones are most directly affected?',
          ],
          options: ['Reproductive axis — GnRH stimulates the anterior pituitary to release FSH and LH, which act on the gonads', 'Thyroid axis — GnRH stimulates the anterior pituitary to release TSH', 'Adrenal axis — GnRH stimulates ACTH release from the anterior pituitary', 'Pituitary axis — GnRH acts directly on the gonads without pituitary involvement'],
          correct: 'Reproductive axis — GnRH stimulates the anterior pituitary to release FSH and LH, which act on the gonads',
          wrongPool: ['Thyroid axis — GnRH stimulates the anterior pituitary to release TSH', 'Adrenal axis — GnRH stimulates ACTH release from the anterior pituitary', 'Pituitary axis — GnRH acts directly on the gonads without pituitary involvement', 'Pancreatic axis — GnRH controls insulin secretion from β-cells'],
        },
        {
          conceptId: 'fl3-bb-ea-2',
          scenarios: [
            'TRH, TSH, and thyroid hormones form which axis?',
            'A patient lacks TRH. Which downstream hormones are most affected?',
          ],
          options: ['Thyroid axis — TRH (hypothalamus) → TSH (anterior pituitary) → T3/T4 (thyroid gland)', 'Reproductive axis — TRH drives gonadotropin release', 'Adrenal axis — TRH stimulates cortisol via ACTH', 'Growth axis — TRH controls GH release from the anterior pituitary'],
          correct: 'Thyroid axis — TRH (hypothalamus) → TSH (anterior pituitary) → T3/T4 (thyroid gland)',
          wrongPool: ['Reproductive axis — TRH drives gonadotropin release', 'Adrenal axis — TRH stimulates cortisol via ACTH', 'Growth axis — TRH controls GH release from the anterior pituitary', 'Pancreatic axis — TRH stimulates glucagon and insulin secretion'],
        },
        {
          conceptId: 'fl3-bb-ea-3',
          scenarios: [
            'CRH → ACTH → cortisol. Which axis is this?',
          ],
          options: ['HPA axis (hypothalamic-pituitary-adrenal) — the stress response axis', 'HPG axis (hypothalamic-pituitary-gonadal) — reproductive axis', 'HPT axis (hypothalamic-pituitary-thyroid) — metabolic axis', 'HPGF axis (growth factor) — growth and development axis'],
          correct: 'HPA axis (hypothalamic-pituitary-adrenal) — the stress response axis',
          wrongPool: ['HPG axis (hypothalamic-pituitary-gonadal) — reproductive axis', 'HPT axis (hypothalamic-pituitary-thyroid) — metabolic axis', 'HPGF axis (growth factor) — growth and development axis', 'HPA axis controls insulin release, not cortisol'],
        },
        {
          conceptId: 'fl3-bb-ea-4',
          scenarios: [
            'A drug that specifically blocks GnRH receptors on gonadotroph cells would most directly reduce which hormones?',
          ],
          options: ['FSH and LH — gonadotrophs release these in response to GnRH', 'TSH — gonadotrophs also control thyroid-stimulating hormone', 'ACTH — the drug blocks pituitary stress signaling', 'Prolactin — GnRH is the primary prolactin-releasing factor'],
          correct: 'FSH and LH — gonadotrophs release these in response to GnRH',
          wrongPool: ['TSH — gonadotrophs also control thyroid-stimulating hormone', 'ACTH — the drug blocks pituitary stress signaling', 'Prolactin — GnRH is the primary prolactin-releasing factor', 'GH — GnRH drives growth hormone from somatotrophs'],
        },
        {
          conceptId: 'fl3-bb-ea-5',
          scenarios: [
            'The adrenal medulla releases epinephrine and norepinephrine. This is part of which division of the nervous system?',
          ],
          options: ['Sympathetic — adrenal medulla = modified sympathetic ganglion; epi/NE mediate fight-or-flight', 'Parasympathetic — epi/NE are parasympathetic neurotransmitters at rest', 'Somatic — the adrenal medulla is innervated by motor neurons', 'Enteric — adrenal medulla hormones regulate gut motility'],
          correct: 'Sympathetic — adrenal medulla = modified sympathetic ganglion; epi/NE mediate fight-or-flight',
          wrongPool: ['Parasympathetic — epi/NE are parasympathetic neurotransmitters at rest', 'Somatic — the adrenal medulla is innervated by motor neurons', 'Enteric — adrenal medulla hormones regulate gut motility', 'Sympathetic — but only for norepinephrine; epinephrine is parasympathetic'],
        },
        {
          conceptId: 'fl3-bb-ea-6',
          scenarios: [
            'Somatostatin released by the hypothalamus inhibits GH from the anterior pituitary. A somatostatin analog drug is given. What is the predicted effect?',
          ],
          options: ['Reduced GH secretion — somatostatin inhibits GH release; an analog mimics this inhibition', 'Increased GH secretion — the analog blocks somatostatin receptors, removing inhibition', 'No effect on GH — somatostatin only acts on pancreatic insulin', 'Increased IGF-1 — somatostatin analogs stimulate GH directly'],
          correct: 'Reduced GH secretion — somatostatin inhibits GH release; an analog mimics this inhibition',
          wrongPool: ['Increased GH secretion — the analog blocks somatostatin receptors, removing inhibition', 'No effect on GH — somatostatin only acts on pancreatic insulin', 'Increased IGF-1 — somatostatin analogs stimulate GH directly', 'Reduced cortisol — somatostatin analogs suppress the HPA axis'],
        },
        {
          conceptId: 'fl3-bb-ea-7',
          scenarios: [
            'Negative feedback in the HPT axis: rising T3/T4 inhibits TRH and TSH. If T4 is given exogenously, what happens to endogenous TSH?',
          ],
          options: ['TSH falls — exogenous T4 raises T3/T4, triggering negative feedback that suppresses TSH release', 'TSH rises — the anterior pituitary compensates by making more TSH to match exogenous T4', 'TSH is unaffected — negative feedback only involves TRH, not TSH', 'TSH rises then falls — a biphasic response is always seen with exogenous hormones'],
          correct: 'TSH falls — exogenous T4 raises T3/T4, triggering negative feedback that suppresses TSH release',
          wrongPool: ['TSH rises — the anterior pituitary compensates by making more TSH to match exogenous T4', 'TSH is unaffected — negative feedback only involves TRH, not TSH', 'TSH rises then falls — a biphasic response is always seen with exogenous hormones', 'TSH falls — but only because TRH levels rise first, which paradoxically suppresses TSH'],
        },
        {
          conceptId: 'fl3-bb-ea-8',
          scenarios: [
            'A patient has low FSH and LH despite low estrogen/testosterone. Where is the most likely lesion in the HPG axis?',
          ],
          options: ['Hypothalamus or anterior pituitary — low gonadotropins despite absent negative feedback signal indicates a central (not gonadal) defect', 'Gonads — low sex steroids means the gonads are failing, which should raise FSH/LH', 'Adrenal glands — FSH/LH regulation comes from the adrenal medulla', 'Posterior pituitary — FSH and LH are stored and released from the posterior pituitary'],
          correct: 'Hypothalamus or anterior pituitary — low gonadotropins despite absent negative feedback signal indicates a central (not gonadal) defect',
          wrongPool: ['Gonads — low sex steroids means the gonads are failing, which should raise FSH/LH', 'Adrenal glands — FSH/LH regulation comes from the adrenal medulla', 'Posterior pituitary — FSH and LH are stored and released from the posterior pituitary', 'Thyroid — low thyroid function suppresses FSH and LH via TRH'],
        },
      ],
      showdown: [],
    },

    // ── Module 3C: Enzyme Classes B/B ─────────────────────────────────────────
    {
      id: 'fl3-bb-enzyme-classes-bb',
      label: 'Enzyme Classification',
      color: '#7c3aed',
      light: '#ede9fe',
      icon: '✂️',
      scenarioDrop: [
        {
          conceptId: 'fl3-bb-ec-1',
          scenarios: [
            'Caspase cleaves a target protein using water. Which enzyme class is caspase?',
            'A cysteine protease hydrolyzes a peptide bond using a water molecule. What enzyme class does this describe?',
          ],
          options: ['Hydrolase — uses water to cleave a bond (hydrolysis)', 'Lyase — removes a group without water', 'Transferase — transfers a functional group to a substrate', 'Isomerase — rearranges the substrate into an isomer'],
          correct: 'Hydrolase — uses water to cleave a bond (hydrolysis)',
          wrongPool: ['Lyase — removes a group without water', 'Transferase — transfers a functional group to a substrate', 'Isomerase — rearranges the substrate into an isomer', 'Ligase — joins two molecules using ATP'],
        },
        {
          conceptId: 'fl3-bb-ec-2',
          scenarios: [
            'Pyruvate decarboxylase removes CO₂ from pyruvate without using water. Which enzyme class?',
            'An enzyme catalyzes the non-hydrolytic removal of a carboxyl group. What class is it?',
          ],
          options: ['Lyase — cleaves bonds by means other than hydrolysis or oxidation (including decarboxylation)', 'Hydrolase — because CO₂ is a leaving group', 'Oxidoreductase — decarboxylation involves electron transfer', 'Transferase — CO₂ is transferred to acceptor molecule'],
          correct: 'Lyase — cleaves bonds by means other than hydrolysis or oxidation (including decarboxylation)',
          wrongPool: ['Hydrolase — because CO₂ is a leaving group', 'Oxidoreductase — decarboxylation involves electron transfer', 'Transferase — CO₂ is transferred to acceptor molecule', 'Ligase — CO₂ is used to join two substrates'],
        },
        {
          conceptId: 'fl3-bb-ec-3',
          scenarios: [
            'Hexokinase transfers a phosphate group from ATP to glucose. Which enzyme class?',
          ],
          options: ['Transferase — moves a phosphate group from one molecule to another', 'Kinase is a lyase because it breaks the ATP→ADP bond without water', 'Hydrolase — phosphate transfer requires water', 'Oxidoreductase — ATP hydrolysis involves oxidation of the phosphate'],
          correct: 'Transferase — moves a phosphate group from one molecule to another',
          wrongPool: ['Kinase is a lyase because it breaks the ATP→ADP bond without water', 'Hydrolase — phosphate transfer requires water', 'Oxidoreductase — ATP hydrolysis involves oxidation of the phosphate', 'Ligase — kinases join ADP to phosphate to make ATP'],
        },
        {
          conceptId: 'fl3-bb-ec-4',
          scenarios: [
            'Lactate dehydrogenase converts pyruvate to lactate by oxidizing NADH. Which enzyme class?',
          ],
          options: ['Oxidoreductase — involves transfer of electrons (NAD+/NADH interconversion)', 'Hydrolase — because NADH donates H atoms', 'Transferase — because the hydrogen is transferred', 'Lyase — because the ketone group of pyruvate is removed'],
          correct: 'Oxidoreductase — involves transfer of electrons (NAD+/NADH interconversion)',
          wrongPool: ['Hydrolase — because NADH donates H atoms', 'Transferase — because the hydrogen is transferred', 'Lyase — because the ketone group of pyruvate is removed', 'Isomerase — pyruvate and lactate are isomers'],
        },
        {
          conceptId: 'fl3-bb-ec-5',
          scenarios: [
            'Phosphoglucose isomerase converts glucose-6-phosphate to fructose-6-phosphate. Which enzyme class?',
          ],
          options: ['Isomerase — interconverts two structural isomers without adding or removing atoms', 'Lyase — rearranges by breaking a C–C bond', 'Transferase — moves the phosphate to a different carbon', 'Oxidoreductase — aldose-to-ketose conversion involves oxidation at C1'],
          correct: 'Isomerase — interconverts two structural isomers without adding or removing atoms',
          wrongPool: ['Lyase — rearranges by breaking a C–C bond', 'Transferase — moves the phosphate to a different carbon', 'Oxidoreductase — aldose-to-ketose conversion involves oxidation at C1', 'Hydrolase — water is needed to open the sugar ring'],
        },
        {
          conceptId: 'fl3-bb-ec-6',
          scenarios: [
            'DNA ligase joins two DNA fragments using ATP. Which enzyme class?',
          ],
          options: ['Ligase — catalyzes bond formation coupled to ATP hydrolysis', 'Transferase — ligase transfers the phosphate from one strand to another', 'Lyase — ligase breaks the pyrophosphate bond of ATP', 'Hydrolase — because ATP is hydrolyzed during the reaction'],
          correct: 'Ligase — catalyzes bond formation coupled to ATP hydrolysis',
          wrongPool: ['Transferase — ligase transfers the phosphate from one strand to another', 'Lyase — ligase breaks the pyrophosphate bond of ATP', 'Hydrolase — because ATP is hydrolyzed during the reaction', 'Isomerase — ligase balances the two DNA strands'],
        },
        {
          conceptId: 'fl3-bb-ec-7',
          scenarios: [
            'A methyl group is transferred from SAM (S-adenosylmethionine) to a DNA cytosine by a methyltransferase. Which enzyme class?',
          ],
          options: ['Transferase — a functional group (methyl) is transferred from one molecule to another', 'Hydrolase — SAM is hydrolyzed to release the methyl group', 'Lyase — the methyl group is removed from SAM by breaking a C–S bond non-hydrolytically', 'Oxidoreductase — methyl transfer involves oxidation of the sulfur'],
          correct: 'Transferase — a functional group (methyl) is transferred from one molecule to another',
          wrongPool: ['Hydrolase — SAM is hydrolyzed to release the methyl group', 'Lyase — the methyl group is removed from SAM by breaking a C–S bond non-hydrolytically', 'Oxidoreductase — methyl transfer involves oxidation of the sulfur', 'Ligase — methyl group joins two substrates'],
        },
        {
          conceptId: 'fl3-bb-ec-8',
          scenarios: [
            'Caspase is specifically a ___, while the lyase pyruvate decarboxylase does what differently?',
          ],
          options: ['Caspase = protease = hydrolase (uses H₂O to cleave peptide bonds); pyruvate decarboxylase = lyase (removes CO₂ without H₂O)', 'Both are lyases; caspase cleaves without water and pyruvate decarboxylase uses water', 'Caspase = transferase; pyruvate decarboxylase = hydrolase', 'Both are hydrolases; all biological bond-cleavage reactions require water'],
          correct: 'Caspase = protease = hydrolase (uses H₂O to cleave peptide bonds); pyruvate decarboxylase = lyase (removes CO₂ without H₂O)',
          wrongPool: ['Both are lyases; caspase cleaves without water and pyruvate decarboxylase uses water', 'Caspase = transferase; pyruvate decarboxylase = hydrolase', 'Both are hydrolases; all biological bond-cleavage reactions require water', 'Caspase = lyase; pyruvate decarboxylase = oxidoreductase'],
        },
      ],
      showdown: [],
    },

    // ── Module 3D: Electron Carriers ──────────────────────────────────────────
    {
      id: 'fl3-bb-electron-carriers',
      label: 'Electron Carriers',
      color: '#b45309',
      light: '#fef3c7',
      icon: '⚡',
      scenarioDrop: [
        {
          conceptId: 'fl3-bb-elc-1',
          scenarios: [
            'NADH donates electrons to Complex I of the ETC. What is the oxidation state of NAD in NADH?',
            'Which form of nicotinamide adenine dinucleotide carries electrons to the electron transport chain?',
          ],
          options: ['NADH is the reduced form — it carries electrons (energy) and is oxidized to NAD+ at Complex I', 'NAD+ is the reduced form — the + charge indicates it has gained electrons', 'NADH is the oxidized form — it has lost electrons in metabolic reactions', 'Both NAD+ and NADH carry electrons equally to the ETC'],
          correct: 'NADH is the reduced form — it carries electrons (energy) and is oxidized to NAD+ at Complex I',
          wrongPool: ['NAD+ is the reduced form — the + charge indicates it has gained electrons', 'NADH is the oxidized form — it has lost electrons in metabolic reactions', 'Both NAD+ and NADH carry electrons equally to the ETC', 'Only FADH2 carries electrons; NAD+ is a cofactor only'],
        },
        {
          conceptId: 'fl3-bb-elc-2',
          scenarios: [
            'NAD+ accepts electrons from glycolysis and the TCA cycle. What does NAD+ become after accepting electrons?',
          ],
          options: ['NADH — NAD+ gains electrons (is reduced) to become NADH', 'NAD+ stays the same — it is only a structural cofactor', 'NAD+ becomes NADP+ — the phosphate group is added when electrons are gained', 'NAD+ becomes FAD — the two carriers interchange depending on substrate'],
          correct: 'NADH — NAD+ gains electrons (is reduced) to become NADH',
          wrongPool: ['NAD+ stays the same — it is only a structural cofactor', 'NAD+ becomes NADP+ — the phosphate group is added when electrons are gained', 'NAD+ becomes FAD — the two carriers interchange depending on substrate', 'NADH — NAD+ is oxidized to become NADH by losing electrons'],
        },
        {
          conceptId: 'fl3-bb-elc-3',
          scenarios: [
            'FADH₂ enters the ETC at Complex II. How many ATP equivalents does FADH₂ yield compared to NADH?',
          ],
          options: ['Fewer — FADH₂ yields ~1.5 ATP; NADH yields ~2.5 ATP because FADH₂ enters at a lower energy point (Complex II, not I)', 'More — FADH₂ enters at Complex II which is closer to Complex IV where ATP is made', 'The same — both carry two electrons and yield the same number of ATP', 'More — because FAD has a higher reduction potential than NAD'],
          correct: 'Fewer — FADH₂ yields ~1.5 ATP; NADH yields ~2.5 ATP because FADH₂ enters at a lower energy point (Complex II, not I)',
          wrongPool: ['More — FADH₂ enters at Complex II which is closer to Complex IV where ATP is made', 'The same — both carry two electrons and yield the same number of ATP', 'More — because FAD has a higher reduction potential than NAD', 'Fewer — FADH₂ carries only one electron while NADH carries two'],
        },
        {
          conceptId: 'fl3-bb-elc-4',
          scenarios: [
            'An inhibitor blocks Complex I of the ETC. Which carrier accumulates upstream?',
          ],
          options: ['NADH accumulates — Complex I oxidizes NADH; blocking it means NADH cannot be oxidized', 'FADH₂ accumulates — Complex I normally oxidizes FADH₂', 'NAD+ accumulates — Complex I reduces NAD+ to NADH', 'Cytochrome c accumulates — Complex I is downstream of cytochrome c'],
          correct: 'NADH accumulates — Complex I oxidizes NADH; blocking it means NADH cannot be oxidized',
          wrongPool: ['FADH₂ accumulates — Complex I normally oxidizes FADH₂', 'NAD+ accumulates — Complex I reduces NAD+ to NADH', 'Cytochrome c accumulates — Complex I is downstream of cytochrome c', 'O₂ accumulates — blocking Complex I prevents oxygen from reaching Complex IV'],
        },
        {
          conceptId: 'fl3-bb-elc-5',
          scenarios: [
            'In anaerobic conditions, why must pyruvate be converted to lactate?',
          ],
          options: ['To regenerate NAD+ from NADH, allowing glycolysis to continue producing ATP', 'To generate additional ATP from the pyruvate molecule', 'To store energy as a high-energy molecule for future use', 'To remove excess pyruvate from the cell before it becomes toxic'],
          correct: 'To regenerate NAD+ from NADH, allowing glycolysis to continue producing ATP',
          wrongPool: ['To generate additional ATP from the pyruvate molecule', 'To store energy as a high-energy molecule for future use', 'To remove excess pyruvate from the cell before it becomes toxic', 'To supply the TCA cycle with an alternative carbon source'],
        },
        {
          conceptId: 'fl3-bb-elc-6',
          scenarios: [
            'NADPH (not NADH) is produced by the pentose phosphate pathway. What is NADPH primarily used for?',
          ],
          options: ['Reductive biosynthesis (fatty acid synthesis, antioxidant defense via glutathione) and anabolic reactions', 'Supplying the ETC to generate ATP just like NADH', 'Driving gluconeogenesis by phosphorylating metabolic intermediates', 'Transporting electrons from the mitochondria to the cytoplasm'],
          correct: 'Reductive biosynthesis (fatty acid synthesis, antioxidant defense via glutathione) and anabolic reactions',
          wrongPool: ['Supplying the ETC to generate ATP just like NADH', 'Driving gluconeogenesis by phosphorylating metabolic intermediates', 'Transporting electrons from the mitochondria to the cytoplasm', 'NADPH is interconvertible with NADH and serves identical functions'],
        },
      ],
      showdown: [],
    },

    // ── Module 3E: ETC Pathway ────────────────────────────────────────────────
    {
      id: 'fl3-bb-etc-pathway',
      label: 'ETC & Metabolic Pathways',
      color: '#0f766e',
      light: '#ccfbf1',
      icon: '🔋',
      scenarioDrop: [
        {
          conceptId: 'fl3-bb-etc-1',
          scenarios: [
            'Succinate dehydrogenase (SDH) is embedded in the inner mitochondrial membrane. Which ETC complex is it?',
          ],
          options: ['Complex II — SDH is the only TCA enzyme that is also an ETC component (Complex II)', 'Complex IV — SDH is the terminal oxidase that reduces O₂', 'Complex I — SDH accepts electrons from NADH just like Complex I', 'Complex III — SDH transfers electrons to cytochrome b'],
          correct: 'Complex II — SDH is the only TCA enzyme that is also an ETC component (Complex II)',
          wrongPool: ['Complex IV — SDH is the terminal oxidase that reduces O₂', 'Complex I — SDH accepts electrons from NADH just like Complex I', 'Complex III — SDH transfers electrons to cytochrome b', 'SDH is not part of the ETC; it only functions in the TCA cycle'],
        },
        {
          conceptId: 'fl3-bb-etc-2',
          scenarios: [
            'Phosphoglucose isomerase (PGI) converts glucose-6-phosphate to fructose-6-phosphate. Which metabolic pathway does PGI belong to?',
          ],
          options: ['Glycolysis — PGI catalyzes step 2 of glycolysis in the cytoplasm', 'TCA cycle — PGI is a TCA intermediate enzyme', 'Gluconeogenesis — PGI operates in reverse only during glucose synthesis', 'Pentose phosphate pathway — PGI supplies ribose-5-phosphate'],
          correct: 'Glycolysis — PGI catalyzes step 2 of glycolysis in the cytoplasm',
          wrongPool: ['TCA cycle — PGI is a TCA intermediate enzyme', 'Gluconeogenesis — PGI operates in reverse only during glucose synthesis', 'Pentose phosphate pathway — PGI supplies ribose-5-phosphate', 'Fatty acid synthesis — PGI isomerizes fatty acyl intermediates'],
        },
        {
          conceptId: 'fl3-bb-etc-3',
          scenarios: [
            'ETC order: electrons flow from NADH through which complexes in order?',
          ],
          options: ['Complex I → CoQ → Complex III → cytochrome c → Complex IV → O₂', 'Complex II → Complex I → CoQ → Complex IV → O₂', 'Complex I → Complex IV → cytochrome c → Complex III → O₂', 'NADH → Complex III → CoQ → Complex I → O₂'],
          correct: 'Complex I → CoQ → Complex III → cytochrome c → Complex IV → O₂',
          wrongPool: ['Complex II → Complex I → CoQ → Complex IV → O₂', 'Complex I → Complex IV → cytochrome c → Complex III → O₂', 'NADH → Complex III → CoQ → Complex I → O₂', 'Complex I → Complex II → CoQ → Complex IV → O₂'],
        },
        {
          conceptId: 'fl3-bb-etc-4',
          scenarios: [
            'FADH₂ (from SDH/Complex II) feeds electrons into CoQ. What does this mean for proton pumping compared to NADH?',
          ],
          options: ['FADH₂ bypasses Complex I so fewer protons are pumped → less ATP produced (~1.5 vs ~2.5 ATP)', 'FADH₂ uses all four complexes just like NADH so ATP yield is the same', 'FADH₂ pumps more protons because it enters at a higher energy complex', 'FADH₂ only generates ATP in anaerobic conditions'],
          correct: 'FADH₂ bypasses Complex I so fewer protons are pumped → less ATP produced (~1.5 vs ~2.5 ATP)',
          wrongPool: ['FADH₂ uses all four complexes just like NADH so ATP yield is the same', 'FADH₂ pumps more protons because it enters at a higher energy complex', 'FADH₂ only generates ATP in anaerobic conditions', 'FADH₂ yields more ATP because succinate dehydrogenase is more efficient than Complex I'],
        },
        {
          conceptId: 'fl3-bb-etc-5',
          scenarios: [
            'Cyanide inhibits Complex IV. What is the immediate consequence for the proton gradient and ATP synthesis?',
          ],
          options: ['Proton gradient collapses — electrons cannot be passed to O₂, ETC stalls, no more protons pumped, ATP synthesis stops', 'ATP synthesis increases — blocked Complex IV reroutes electrons to Complex II making more FADH₂', 'Only NADH-linked ATP is affected; FADH₂ can still supply Complex II and make ATP', 'Proton gradient increases — electrons back up, pumping more H+ through Complexes I and III'],
          correct: 'Proton gradient collapses — electrons cannot be passed to O₂, ETC stalls, no more protons pumped, ATP synthesis stops',
          wrongPool: ['ATP synthesis increases — blocked Complex IV reroutes electrons to Complex II making more FADH₂', 'Only NADH-linked ATP is affected; FADH₂ can still supply Complex II and make ATP', 'Proton gradient increases — electrons back up, pumping more H+ through Complexes I and III', 'Only oxidative phosphorylation is affected; substrate-level ATP continues at full speed'],
        },
        {
          conceptId: 'fl3-bb-etc-6',
          scenarios: [
            'Glycolysis net produces 2 ATP and 2 NADH per glucose. The TCA cycle produces 3 NADH, 1 FADH₂, 1 GTP per acetyl-CoA (×2 for one glucose). Roughly how many total ATP are generated aerobically per glucose?',
          ],
          options: ['~30-32 ATP — glycolysis (2) + pyruvate dehydrogenase NADH + TCA NADH + FADH₂ all feed the ETC', '4 ATP — only substrate-level phosphorylation counts', '56 ATP — each NADH makes 3 ATP and each FADH₂ makes 2 ATP', '2 ATP — aerobic respiration only yields substrate-level ATP; ETC restores carriers, not ATP'],
          correct: '~30-32 ATP — glycolysis (2) + pyruvate dehydrogenase NADH + TCA NADH + FADH₂ all feed the ETC',
          wrongPool: ['4 ATP — only substrate-level phosphorylation counts', '56 ATP — each NADH makes 3 ATP and each FADH₂ makes 2 ATP', '2 ATP — aerobic respiration only yields substrate-level ATP; ETC restores carriers, not ATP', '~38 ATP using the old P/O ratio of 3 per NADH and 2 per FADH₂'],
        },
        {
          conceptId: 'fl3-bb-etc-7',
          scenarios: [
            'Rotenone blocks Complex I. Which carrier accumulates and what happens to FADH₂-dependent ATP production?',
          ],
          options: ['NADH accumulates; FADH₂ can still feed CoQ via Complex II, so Complex II → IV ATP generation continues (reduced but not zero)', 'Both NADH and FADH₂ accumulate because all ETC flow stops', 'NAD+ accumulates; glycolysis slows because NAD+ is depleted', 'FADH₂ accumulates; NADH can still donate to Complex III directly'],
          correct: 'NADH accumulates; FADH₂ can still feed CoQ via Complex II, so Complex II → IV ATP generation continues (reduced but not zero)',
          wrongPool: ['Both NADH and FADH₂ accumulate because all ETC flow stops', 'NAD+ accumulates; glycolysis slows because NAD+ is depleted', 'FADH₂ accumulates; NADH can still donate to Complex III directly', 'Only glycolytic ATP is affected; mitochondrial ATP is produced by substrate-level phosphorylation'],
        },
        {
          conceptId: 'fl3-bb-etc-8',
          scenarios: [
            'Uncouplers like DNP dissipate the proton gradient across the inner mitochondrial membrane. What happens to O₂ consumption and ATP synthesis?',
          ],
          options: ['O₂ consumption increases (ETC runs faster trying to restore gradient) but ATP synthesis decreases (gradient needed for ATP synthase is gone)', 'Both O₂ consumption and ATP synthesis decrease — uncouplers inhibit the ETC directly', 'O₂ consumption decreases because the proton gradient drives electron flow', 'ATP synthesis increases — more ADP is available when the gradient is dissipated'],
          correct: 'O₂ consumption increases (ETC runs faster trying to restore gradient) but ATP synthesis decreases (gradient needed for ATP synthase is gone)',
          wrongPool: ['Both O₂ consumption and ATP synthesis decrease — uncouplers inhibit the ETC directly', 'O₂ consumption decreases because the proton gradient drives electron flow', 'ATP synthesis increases — more ADP is available when the gradient is dissipated', 'Both increase — uncouplers stimulate all mitochondrial processes equally'],
        },
        {
          conceptId: 'fl3-bb-etc-9',
          scenarios: [
            'The TCA cycle step: α-ketoglutarate → succinyl-CoA. This is catalyzed by α-ketoglutarate dehydrogenase. What cofactors does this reaction use?',
          ],
          options: ['NAD+, CoA, and thiamine pyrophosphate (TPP) — analogous to the pyruvate dehydrogenase complex', 'FAD and CoQ — it feeds electrons directly into the ETC', 'ATP and GTP — the reaction is driven by nucleotide hydrolysis', 'NADP+ and biotin — same cofactors as acetyl-CoA carboxylase'],
          correct: 'NAD+, CoA, and thiamine pyrophosphate (TPP) — analogous to the pyruvate dehydrogenase complex',
          wrongPool: ['FAD and CoQ — it feeds electrons directly into the ETC', 'ATP and GTP — the reaction is driven by nucleotide hydrolysis', 'NADP+ and biotin — same cofactors as acetyl-CoA carboxylase', 'Pyridoxal phosphate (PLP) and CoA — same as aminotransferase reactions'],
        },
        {
          conceptId: 'fl3-bb-etc-10',
          scenarios: [
            'Complex III transfers electrons from CoQH₂ to cytochrome c. If cytochrome c is chemically depleted from the intermembrane space, what happens to electron flow from Complex III onward?',
          ],
          options: ['Electron flow from Complex III to Complex IV stops — cytochrome c is the obligate shuttle between them', 'Complex III transfers electrons directly to Complex IV without cytochrome c', 'Electron flow continues via NADH bypassing cytochrome c', 'Electrons accumulate at CoQ and feed back to Complex I'],
          correct: 'Electron flow from Complex III to Complex IV stops — cytochrome c is the obligate shuttle between them',
          wrongPool: ['Complex III transfers electrons directly to Complex IV without cytochrome c', 'Electron flow continues via NADH bypassing cytochrome c', 'Electrons accumulate at CoQ and feed back to Complex I', 'Cytochrome c depletion only affects FADH₂-dependent electron flow'],
        },
      ],
      showdown: [],
    },

    // ── Module 4A: Amino Acid Side Chains ────────────────────────────────────
    {
      id: 'fl3-bb-amino-acids',
      label: 'Amino Acid Side Chains',
      color: '#b45309',
      light: '#fef3c7',
      icon: '🔬',
      scenarioDrop: [
        {
          conceptId: 'fl3-bb-aa-1',
          scenarios: [
            'Histidine is the only amino acid with a pKa near physiological pH (~6.0). What functional group on its side chain allows this?',
            'An enzyme uses an amino acid with an imidazole side chain as a general acid-base catalyst at pH 7. Which amino acid?',
          ],
          options: ['Histidine — its imidazole ring (not phenylalanine\'s benzyl group) ionizes near pH 7', 'Phenylalanine — the benzyl group acts as the acid-base catalyst', 'Tyrosine — its phenol side chain ionizes near physiological pH', 'Tryptophan — the indole ring is the ionizable group near pH 7'],
          correct: 'Histidine — its imidazole ring (not phenylalanine\'s benzyl group) ionizes near pH 7',
          wrongPool: ['Phenylalanine — the benzyl group acts as the acid-base catalyst', 'Tyrosine — its phenol side chain ionizes near physiological pH', 'Tryptophan — the indole ring is the ionizable group near pH 7', 'Aspartate — its carboxyl group is the only ionizable group near pH 7'],
        },
        {
          conceptId: 'fl3-bb-aa-2',
          scenarios: [
            'Which amino acid has an imidazole side chain?',
          ],
          options: ['Histidine (His)', 'Phenylalanine (Phe) — has a benzyl group', 'Tryptophan (Trp) — has an indole group', 'Proline (Pro) — has a cyclic pyrrolidine ring'],
          correct: 'Histidine (His)',
          wrongPool: ['Phenylalanine (Phe) — has a benzyl group', 'Tryptophan (Trp) — has an indole group', 'Proline (Pro) — has a cyclic pyrrolidine ring', 'Arginine (Arg) — has a guanidinium group'],
        },
        {
          conceptId: 'fl3-bb-aa-3',
          scenarios: [
            'Lysine has a long aliphatic chain ending in a terminal amine (-NH₃⁺ at pH 7). Which enzyme can modify this amine by adding an acetyl group?',
            'HDAC (histone deacetylase) acts on which amino acid residue in histone tails?',
          ],
          options: ['Lysine — its terminal amine is acetylated by HATs and deacetylated by HDACs', 'Asparagine — its amide group is modified by HDAC', 'Glutamine — the γ-carboxamide is the target of acetylation', 'Arginine — its guanidinium group is the HDAC substrate'],
          correct: 'Lysine — its terminal amine is acetylated by HATs and deacetylated by HDACs',
          wrongPool: ['Asparagine — its amide group is modified by HDAC', 'Glutamine — the γ-carboxamide is the target of acetylation', 'Arginine — its guanidinium group is the HDAC substrate', 'Serine — its hydroxyl group is the primary acetylation target in histones'],
        },
        {
          conceptId: 'fl3-bb-aa-4',
          scenarios: [
            'Asparagine contains an amide group (–C(=O)–NH₂) on its side chain. How does this differ from lysine\'s side chain?',
          ],
          options: ['Asparagine has a neutral amide; lysine has a positively charged terminal amine (–NH₃⁺) that can be acetylated', 'Asparagine and lysine have identical side chains; only their backbone differs', 'Lysine has an amide and asparagine has a terminal amine', 'Both have charged amines at pH 7; they differ only in chain length'],
          correct: 'Asparagine has a neutral amide; lysine has a positively charged terminal amine (–NH₃⁺) that can be acetylated',
          wrongPool: ['Asparagine and lysine have identical side chains; only their backbone differs', 'Lysine has an amide and asparagine has a terminal amine', 'Both have charged amines at pH 7; they differ only in chain length', 'Asparagine is positively charged and lysine is neutral at pH 7'],
        },
        {
          conceptId: 'fl3-bb-aa-5',
          scenarios: [
            'Which amino acids are classified as acidic (negatively charged at physiological pH)?',
          ],
          options: ['Aspartate (Asp) and Glutamate (Glu) — both have carboxylic acid side chains with pKa ~4', 'Asparagine and Glutamine — amide groups make them acidic', 'Histidine and Cysteine — both have pKa values below 7', 'Serine and Threonine — hydroxyl groups lose protons at pH 7'],
          correct: 'Aspartate (Asp) and Glutamate (Glu) — both have carboxylic acid side chains with pKa ~4',
          wrongPool: ['Asparagine and Glutamine — amide groups make them acidic', 'Histidine and Cysteine — both have pKa values below 7', 'Serine and Threonine — hydroxyl groups lose protons at pH 7', 'Proline and Glycine — lack of side chain makes them acidic by default'],
        },
        {
          conceptId: 'fl3-bb-aa-6',
          scenarios: [
            'A question asks which of the following amino acids is NOT acidic: Pro, Arg, Lys, Thr. What is the correct answer?',
          ],
          options: ['All four — none of Pro/Arg/Lys/Thr is acidic; the acidic amino acids are Asp and Glu', 'Proline — it lacks a side chain so it cannot be classified', 'Lysine — it has a positive charge instead of a negative one', 'Threonine — its hydroxyl is neutral, making it the only non-acidic choice'],
          correct: 'All four — none of Pro/Arg/Lys/Thr is acidic; the acidic amino acids are Asp and Glu',
          wrongPool: ['Proline — it lacks a side chain so it cannot be classified', 'Lysine — it has a positive charge instead of a negative one', 'Threonine — its hydroxyl is neutral, making it the only non-acidic choice', 'Arginine — its high pKa makes it the least acidic'],
        },
        {
          conceptId: 'fl3-bb-aa-7',
          scenarios: [
            'Tyrosine has a phenol side chain (benzene ring with an –OH group). How does this differ from phenylalanine?',
          ],
          options: ['Tyrosine = benzene + –OH (phenol); phenylalanine = benzene only (benzyl/methyl-benzene); tyrosine can hydrogen-bond and ionize (pKa ~10)', 'Phenylalanine has a phenol group and tyrosine has a pure benzyl group', 'Both have phenol groups; they differ only in the number of hydroxyl groups', 'Tyrosine is nonpolar; phenylalanine is polar because of its larger ring'],
          correct: 'Tyrosine = benzene + –OH (phenol); phenylalanine = benzene only (benzyl/methyl-benzene); tyrosine can hydrogen-bond and ionize (pKa ~10)',
          wrongPool: ['Phenylalanine has a phenol group and tyrosine has a pure benzyl group', 'Both have phenol groups; they differ only in the number of hydroxyl groups', 'Tyrosine is nonpolar; phenylalanine is polar because of its larger ring', 'Phenylalanine and tyrosine are interchangeable in enzyme active sites'],
        },
        {
          conceptId: 'fl3-bb-aa-8',
          scenarios: [
            'Tryptophan has an indole side chain. Phenylalanine has a benzyl group. Tyrosine has a phenol. Histidine has imidazole. Match: which absorbs UV light most strongly at 280 nm?',
          ],
          options: ['Tryptophan > Tyrosine > Phenylalanine; all three aromatic residues absorb at 280 nm but Trp most strongly', 'Histidine absorbs most strongly because its imidazole ring is fully aromatic', 'Phenylalanine absorbs most at 280 nm because it is the simplest benzene derivative', 'None absorb at 280 nm; protein UV absorption is only at 260 nm'],
          correct: 'Tryptophan > Tyrosine > Phenylalanine; all three aromatic residues absorb at 280 nm but Trp most strongly',
          wrongPool: ['Histidine absorbs most strongly because its imidazole ring is fully aromatic', 'Phenylalanine absorbs most at 280 nm because it is the simplest benzene derivative', 'None absorb at 280 nm; protein UV absorption is only at 260 nm', 'All four aromatic amino acids absorb equally at 280 nm'],
        },
        {
          conceptId: 'fl3-bb-aa-9',
          scenarios: [
            'Cysteine can form disulfide bonds. What functional group on cysteine enables this?',
          ],
          options: ['Thiol (–SH) group — two thiol groups are oxidized to form –S–S– disulfide bonds', 'Hydroxyl (–OH) group — same as serine, which also forms disulfide bonds', 'Imidazole group — the same group that makes histidine catalytic', 'Carboxamide group — the same group found in asparagine'],
          correct: 'Thiol (–SH) group — two thiol groups are oxidized to form –S–S– disulfide bonds',
          wrongPool: ['Hydroxyl (–OH) group — same as serine, which also forms disulfide bonds', 'Imidazole group — the same group that makes histidine catalytic', 'Carboxamide group — the same group found in asparagine', 'Guanidinium group — the same group that makes arginine form bonds'],
        },
        {
          conceptId: 'fl3-bb-aa-10',
          scenarios: [
            'Which amino acid is often found at the active site of serine proteases and contributes to the catalytic triad?',
          ],
          options: ['Serine — its hydroxyl acts as a nucleophile; the triad is Ser-His-Asp', 'Cysteine — its thiol forms the nucleophilic attack in all proteases', 'Lysine — its amine stabilizes the tetrahedral intermediate', 'Glycine — its small size allows access to the active site'],
          correct: 'Serine — its hydroxyl acts as a nucleophile; the triad is Ser-His-Asp',
          wrongPool: ['Cysteine — its thiol forms the nucleophilic attack in all proteases', 'Lysine — its amine stabilizes the tetrahedral intermediate', 'Glycine — its small size allows access to the active site', 'Tyrosine — its phenol group is the nucleophile in serine proteases'],
        },
        {
          conceptId: 'fl3-bb-aa-11',
          scenarios: [
            'Proline is unusual among amino acids. What structural feature makes it disrupt alpha-helices?',
          ],
          options: ['Its side chain is covalently bonded to the backbone nitrogen, creating a rigid ring that cannot form the N–H…O=C hydrogen bond required for helices', 'Proline has two carboxylic acid groups that introduce steric clash in helices', 'Proline lacks a side chain, which weakens the helix at that position', 'Proline is too large to fit into the narrow helix core'],
          correct: 'Its side chain is covalently bonded to the backbone nitrogen, creating a rigid ring that cannot form the N–H…O=C hydrogen bond required for helices',
          wrongPool: ['Proline has two carboxylic acid groups that introduce steric clash in helices', 'Proline lacks a side chain, which weakens the helix at that position', 'Proline is too large to fit into the narrow helix core', 'Proline\'s positive charge at pH 7 repels the helix dipole'],
        },
        {
          conceptId: 'fl3-bb-aa-12',
          scenarios: [
            'Basic amino acids (positively charged at pH 7) include which residues?',
          ],
          options: ['Lysine (Lys), Arginine (Arg), and Histidine (His) — though His is partially protonated at pH 7', 'Lysine and Asparagine — both have amine-containing side chains', 'Arginine and Glutamine — both have nitrogen-containing side chains', 'Histidine and Serine — both have polar uncharged side chains at pH 7'],
          correct: 'Lysine (Lys), Arginine (Arg), and Histidine (His) — though His is partially protonated at pH 7',
          wrongPool: ['Lysine and Asparagine — both have amine-containing side chains', 'Arginine and Glutamine — both have nitrogen-containing side chains', 'Histidine and Serine — both have polar uncharged side chains at pH 7', 'Only Lysine and Arginine; Histidine is classified as neutral at physiological pH'],
        },
      ],
      showdown: [],
    },

    // ── Module 4B: Metabolism Map ─────────────────────────────────────────────
    {
      id: 'fl3-bb-metabolism-map',
      label: 'Metabolism Map',
      color: '#0f766e',
      light: '#ccfbf1',
      icon: '🗺️',
      scenarioDrop: [
        {
          conceptId: 'fl3-bb-mm-1',
          scenarios: [
            'During prolonged fasting, the liver converts fatty acids to ketone bodies. What is the primary ketone body produced by sustained β-oxidation?',
          ],
          options: ['β-hydroxybutyrate (and acetoacetate) — produced when acetyl-CoA from sustained fatty acid β-oxidation exceeds TCA capacity', 'Pyruvate — produced from fatty acid catabolism when glucose is low', 'Acetyl-CoA — the final product of fatty acid oxidation accumulates as a ketone body', 'Lactate — produced when fatty acids fuel anaerobic respiration'],
          correct: 'β-hydroxybutyrate (and acetoacetate) — produced when acetyl-CoA from sustained fatty acid β-oxidation exceeds TCA capacity',
          wrongPool: ['Pyruvate — produced from fatty acid catabolism when glucose is low', 'Acetyl-CoA — the final product of fatty acid oxidation accumulates as a ketone body', 'Lactate — produced when fatty acids fuel anaerobic respiration', 'Malonate — an intermediate produced during odd-chain fatty acid oxidation'],
        },
        {
          conceptId: 'fl3-bb-mm-2',
          scenarios: [
            'Why can the brain use ketone bodies for fuel during prolonged fasting but not fatty acids directly?',
          ],
          options: ['Fatty acids cannot cross the blood-brain barrier; ketone bodies are water-soluble and cross freely', 'The brain lacks the enzymes for β-oxidation; ketone bodies feed directly into the TCA cycle', 'Both A and B — fatty acids cannot cross the BBB AND the brain cannot perform β-oxidation', 'The brain prefers ketone bodies because they generate more ATP per molecule than fatty acids'],
          correct: 'Both A and B — fatty acids cannot cross the BBB AND the brain cannot perform β-oxidation',
          wrongPool: ['Fatty acids cannot cross the blood-brain barrier; ketone bodies are water-soluble and cross freely', 'The brain lacks the enzymes for β-oxidation; ketone bodies feed directly into the TCA cycle', 'The brain prefers ketone bodies because they generate more ATP per molecule than fatty acids', 'Fatty acids do cross the BBB but are too slow to meet neural energy demands'],
        },
        {
          conceptId: 'fl3-bb-mm-3',
          scenarios: [
            'SDH loss causes succinate to accumulate. Succinate inhibits PHD (prolyl hydroxylase domain enzyme). What does PHD normally do to HIF-1α?',
          ],
          options: ['PHD hydroxylates HIF-1α, marking it for ubiquitin-proteasome degradation; SDH loss → ↑succinate → PHD inhibition → HIF-1α stable → ↑HIF target genes', 'PHD stabilizes HIF-1α; SDH loss removes PHD, so HIF-1α is degraded', 'PHD phosphorylates HIF-1α to activate it; succinate inhibits this step', 'HIF-1α is regulated by HDAC, not by PHD or succinate'],
          correct: 'PHD hydroxylates HIF-1α, marking it for ubiquitin-proteasome degradation; SDH loss → ↑succinate → PHD inhibition → HIF-1α stable → ↑HIF target genes',
          wrongPool: ['PHD stabilizes HIF-1α; SDH loss removes PHD, so HIF-1α is degraded', 'PHD phosphorylates HIF-1α to activate it; succinate inhibits this step', 'HIF-1α is regulated by HDAC, not by PHD or succinate', 'SDH loss reduces HIF-1α because less oxygen is consumed'],
        },
        {
          conceptId: 'fl3-bb-mm-4',
          scenarios: [
            'Gluconeogenesis converts non-carbohydrate precursors to glucose. Which molecules can serve as gluconeogenic precursors?',
          ],
          options: ['Lactate, glycerol, glucogenic amino acids, and oxaloacetate — all can enter the gluconeogenic pathway', 'Fatty acids (even-chain) — β-oxidation generates acetyl-CoA which feeds gluconeogenesis', 'Ketone bodies — β-hydroxybutyrate is converted to glucose in the liver', 'NADH — the electron carrier is directly used to power glucose synthesis'],
          correct: 'Lactate, glycerol, glucogenic amino acids, and oxaloacetate — all can enter the gluconeogenic pathway',
          wrongPool: ['Fatty acids (even-chain) — β-oxidation generates acetyl-CoA which feeds gluconeogenesis', 'Ketone bodies — β-hydroxybutyrate is converted to glucose in the liver', 'NADH — the electron carrier is directly used to power glucose synthesis', 'All metabolic intermediates can be converted to glucose given enough ATP'],
        },
        {
          conceptId: 'fl3-bb-mm-5',
          scenarios: [
            'Insulin promotes glycogen synthesis and inhibits gluconeogenesis. Glucagon does the opposite. Which enzyme does glucagon activate to start glycogenolysis?',
          ],
          options: ['Glycogen phosphorylase — activated by glucagon via cAMP→PKA signaling to release glucose-1-phosphate from glycogen', 'Glycogen synthase — glucagon directly activates the synthase to break down glycogen', 'Hexokinase — glucagon inhibits hexokinase to prevent glucose from entering glycolysis', 'Phosphofructokinase-1 — glucagon activates PFK-1 to speed up glycogen breakdown'],
          correct: 'Glycogen phosphorylase — activated by glucagon via cAMP→PKA signaling to release glucose-1-phosphate from glycogen',
          wrongPool: ['Glycogen synthase — glucagon directly activates the synthase to break down glycogen', 'Hexokinase — glucagon inhibits hexokinase to prevent glucose from entering glycolysis', 'Phosphofructokinase-1 — glucagon activates PFK-1 to speed up glycogen breakdown', 'Pyruvate kinase — glucagon activates PK to increase ATP for glucose release'],
        },
        {
          conceptId: 'fl3-bb-mm-6',
          scenarios: [
            'Fatty acid synthesis occurs in the cytoplasm. β-oxidation occurs in the mitochondrial matrix. How does acetyl-CoA, produced in the mitochondria, get to the cytoplasm for fatty acid synthesis?',
          ],
          options: ['Acetyl-CoA is exported as citrate (which crosses the inner mitochondrial membrane), then citrate lyase regenerates acetyl-CoA in the cytoplasm', 'Acetyl-CoA freely diffuses through the inner mitochondrial membrane via channel proteins', 'Acetyl-CoA is converted to acetate, transported, then re-activated to acetyl-CoA in the cytoplasm', 'Acetyl-CoA is phosphorylated to acetyl-AMP, transported, then dephosphorylated'],
          correct: 'Acetyl-CoA is exported as citrate (which crosses the inner mitochondrial membrane), then citrate lyase regenerates acetyl-CoA in the cytoplasm',
          wrongPool: ['Acetyl-CoA freely diffuses through the inner mitochondrial membrane via channel proteins', 'Acetyl-CoA is converted to acetate, transported, then re-activated to acetyl-CoA in the cytoplasm', 'Acetyl-CoA is phosphorylated to acetyl-AMP, transported, then dephosphorylated', 'Carnitine shuttles acetyl-CoA across the inner membrane just like it shuttles fatty acyl groups'],
        },
        {
          conceptId: 'fl3-bb-mm-7',
          scenarios: [
            'The Cori cycle involves lactate transfer from muscle to liver. What happens to lactate in the liver?',
          ],
          options: ['Lactate is converted to pyruvate (by LDH), then to glucose via gluconeogenesis, which is exported back to muscle', 'Lactate is directly phosphorylated to lactate-6-phosphate and enters glycolysis', 'Lactate is oxidized to acetyl-CoA and fed into the TCA cycle for ATP', 'Lactate is stored as glycogen in the liver without being converted to glucose'],
          correct: 'Lactate is converted to pyruvate (by LDH), then to glucose via gluconeogenesis, which is exported back to muscle',
          wrongPool: ['Lactate is directly phosphorylated to lactate-6-phosphate and enters glycolysis', 'Lactate is oxidized to acetyl-CoA and fed into the TCA cycle for ATP', 'Lactate is stored as glycogen in the liver without being converted to glucose', 'Lactate crosses the liver cell membrane and is used directly as fuel for mitochondria'],
        },
        {
          conceptId: 'fl3-bb-mm-8',
          scenarios: [
            'Rate-limiting step of glycolysis: which enzyme and what does it use?',
          ],
          options: ['Phosphofructokinase-1 (PFK-1) — converts fructose-6-phosphate to fructose-1,6-bisphosphate using ATP; inhibited by ATP and citrate', 'Hexokinase — the first step is always rate-limiting in any pathway', 'Pyruvate kinase — the last step is rate-limiting because it is irreversible', 'Aldolase — it catalyzes the slowest chemical step in glycolysis'],
          correct: 'Phosphofructokinase-1 (PFK-1) — converts fructose-6-phosphate to fructose-1,6-bisphosphate using ATP; inhibited by ATP and citrate',
          wrongPool: ['Hexokinase — the first step is always rate-limiting in any pathway', 'Pyruvate kinase — the last step is rate-limiting because it is irreversible', 'Aldolase — it catalyzes the slowest chemical step in glycolysis', 'Phosphoglucose isomerase — the isomerization step determines overall glycolytic flux'],
        },
        {
          conceptId: 'fl3-bb-mm-9',
          scenarios: [
            'Odd-chain fatty acid oxidation produces propionyl-CoA in addition to acetyl-CoA. Propionyl-CoA requires which vitamin as a cofactor to enter the TCA cycle?',
          ],
          options: ['Vitamin B12 (cobalamin) — methylmalonyl-CoA mutase requires B12 to convert methylmalonyl-CoA to succinyl-CoA', 'Biotin — propionyl-CoA carboxylase uses biotin to add CO₂', 'Thiamine (B1) — same as pyruvate dehydrogenase', 'Niacin (B3) — propionyl-CoA feeds NAD+ reduction directly'],
          correct: 'Vitamin B12 (cobalamin) — methylmalonyl-CoA mutase requires B12 to convert methylmalonyl-CoA to succinyl-CoA',
          wrongPool: ['Biotin — propionyl-CoA carboxylase uses biotin to add CO₂', 'Thiamine (B1) — same as pyruvate dehydrogenase', 'Niacin (B3) — propionyl-CoA feeds NAD+ reduction directly', 'Folate — methyl group transfer requires folate for propionyl-CoA metabolism'],
        },
        {
          conceptId: 'fl3-bb-mm-10',
          scenarios: [
            'HMG-CoA reductase catalyzes the rate-limiting step of cholesterol synthesis. Statins inhibit HMG-CoA reductase. What is the direct consequence?',
          ],
          options: ['Reduced cholesterol synthesis → cells upregulate LDL receptors to import cholesterol from blood → LDL-cholesterol falls', 'Reduced cholesterol synthesis → more VLDL is produced as a compensatory mechanism', 'Reduced cholesterol synthesis → HDL rises and LDL stays the same', 'Statins block HMG-CoA reductase, which also directly inhibits triglyceride synthesis'],
          correct: 'Reduced cholesterol synthesis → cells upregulate LDL receptors to import cholesterol from blood → LDL-cholesterol falls',
          wrongPool: ['Reduced cholesterol synthesis → more VLDL is produced as a compensatory mechanism', 'Reduced cholesterol synthesis → HDL rises and LDL stays the same', 'Statins block HMG-CoA reductase, which also directly inhibits triglyceride synthesis', 'Statins reduce LDL by blocking its synthesis in the intestine, not in the liver'],
        },
      ],
      showdown: [],
    },

    // ── Module 4C: Physiology ─────────────────────────────────────────────────
    {
      id: 'fl3-bb-physiology',
      label: 'Physiology',
      color: '#0369a1',
      light: '#e0f2fe',
      icon: '🫀',
      scenarioDrop: [
        {
          conceptId: 'fl3-bb-phy-1',
          scenarios: [
            'The adrenal medulla releases epinephrine and norepinephrine. Embryologically, from what tissue does the adrenal medulla derive?',
          ],
          options: ['Neural crest cells — the adrenal medulla is a modified sympathetic ganglion derived from neural crest', 'Mesoderm — same origin as the adrenal cortex', 'Endoderm — same origin as the pancreas and liver', 'Neuroectoderm of the neural tube — same as the brain'],
          correct: 'Neural crest cells — the adrenal medulla is a modified sympathetic ganglion derived from neural crest',
          wrongPool: ['Mesoderm — same origin as the adrenal cortex', 'Endoderm — same origin as the pancreas and liver', 'Neuroectoderm of the neural tube — same as the brain', 'Lateral plate mesoderm — same as the limb musculature'],
        },
        {
          conceptId: 'fl3-bb-phy-2',
          scenarios: [
            'The adrenal medulla is innervated by preganglionic sympathetic fibers. What neurotransmitter do these fibers release onto chromaffin cells?',
          ],
          options: ['Acetylcholine (ACh) — preganglionic sympathetic neurons always release ACh onto their targets', 'Norepinephrine — postganglionic sympathetic neurons release NE, so preganglionic do as well', 'Epinephrine — the adrenal medulla requires epinephrine to secrete its own hormones', 'Dopamine — the adrenal medulla is a dopaminergic structure'],
          correct: 'Acetylcholine (ACh) — preganglionic sympathetic neurons always release ACh onto their targets',
          wrongPool: ['Norepinephrine — postganglionic sympathetic neurons release NE, so preganglionic do as well', 'Epinephrine — the adrenal medulla requires epinephrine to secrete its own hormones', 'Dopamine — the adrenal medulla is a dopaminergic structure', 'GABA — the adrenal medulla uses inhibitory signaling to regulate hormone release'],
        },
        {
          conceptId: 'fl3-bb-phy-3',
          scenarios: [
            'Intestinal villi are lined with enterocytes that absorb nutrients. A drug that specifically destroys villi would most impair which physiological process?',
          ],
          options: ['Nutrient absorption — villi create the surface area needed to absorb amino acids, fatty acids, and glucose', 'Intestinal motility — villi contain the smooth muscle responsible for peristalsis', 'Enzyme secretion — all digestive enzymes originate from villous goblet cells', 'Water reabsorption — villi are only present in the colon where water is absorbed'],
          correct: 'Nutrient absorption — villi create the surface area needed to absorb amino acids, fatty acids, and glucose',
          wrongPool: ['Intestinal motility — villi contain the smooth muscle responsible for peristalsis', 'Enzyme secretion — all digestive enzymes originate from villous goblet cells', 'Water reabsorption — villi are only present in the colon where water is absorbed', 'Immune surveillance — villi house the entire mucosal immune system'],
        },
        {
          conceptId: 'fl3-bb-phy-4',
          scenarios: [
            'SSRIs selectively block SERT, the serotonin reuptake transporter on presynaptic terminals. How do SSRIs increase serotonergic signaling?',
          ],
          options: ['By preventing serotonin clearance from the synapse, SSRIs increase the concentration and dwell time of serotonin, enhancing receptor activation', 'SSRIs stimulate serotonin synthesis in raphe neurons, increasing the amount released', 'SSRIs block postsynaptic 5-HT receptors, causing compensatory upregulation of serotonin production', 'SSRIs degrade MAO-A, the enzyme that breaks down serotonin in the synapse'],
          correct: 'By preventing serotonin clearance from the synapse, SSRIs increase the concentration and dwell time of serotonin, enhancing receptor activation',
          wrongPool: ['SSRIs stimulate serotonin synthesis in raphe neurons, increasing the amount released', 'SSRIs block postsynaptic 5-HT receptors, causing compensatory upregulation of serotonin production', 'SSRIs degrade MAO-A, the enzyme that breaks down serotonin in the synapse', 'SSRIs stimulate vesicular serotonin release by activating autoreceptors'],
        },
        {
          conceptId: 'fl3-bb-phy-5',
          scenarios: [
            'During bone remodeling, which cell type resorbs bone (releases calcium into blood) and which cell type deposits bone (removes calcium from blood)?',
          ],
          options: ['Osteoclasts resorb bone (release Ca²⁺); osteoblasts form bone (deposit Ca²⁺)', 'Osteoblasts resorb bone; osteoclasts form bone', 'Both osteoblasts and osteoclasts release calcium; only osteocytes deposit it', 'Osteocytes resorb bone; osteoblasts and osteoclasts only regulate bone density'],
          correct: 'Osteoclasts resorb bone (release Ca²⁺); osteoblasts form bone (deposit Ca²⁺)',
          wrongPool: ['Osteoblasts resorb bone; osteoclasts form bone', 'Both osteoblasts and osteoclasts release calcium; only osteocytes deposit it', 'Osteocytes resorb bone; osteoblasts and osteoclasts only regulate bone density', 'Osteoclasts deposit calcium; the prefix "clast" means "build"'],
        },
        {
          conceptId: 'fl3-bb-phy-6',
          scenarios: [
            'PTH (parathyroid hormone) raises serum calcium. What are its three major mechanisms?',
          ],
          options: ['↑ osteoclast activity (bone resorption) + ↑ renal Ca²⁺ reabsorption + ↑ 1,25-OH₂ Vitamin D production (↑ gut Ca²⁺ absorption)', '↑ osteoblast activity (bone deposition) + ↓ renal Ca²⁺ reabsorption + ↑ calcitonin release', '↑ calcitonin release from the thyroid + ↑ gut Ca²⁺ absorption + ↓ PTH-related peptide', '↓ osteoclast activity + ↑ phosphate retention by the kidney + ↑ vitamin D activation'],
          correct: '↑ osteoclast activity (bone resorption) + ↑ renal Ca²⁺ reabsorption + ↑ 1,25-OH₂ Vitamin D production (↑ gut Ca²⁺ absorption)',
          wrongPool: ['↑ osteoblast activity (bone deposition) + ↓ renal Ca²⁺ reabsorption + ↑ calcitonin release', '↑ calcitonin release from the thyroid + ↑ gut Ca²⁺ absorption + ↓ PTH-related peptide', '↓ osteoclast activity + ↑ phosphate retention by the kidney + ↑ vitamin D activation', 'PTH only acts on the kidney; bone effects are mediated by calcitonin downstream'],
        },
        {
          conceptId: 'fl3-bb-phy-7',
          scenarios: [
            'Calcitonin is released when blood calcium is HIGH. What does calcitonin do to osteoclast activity?',
          ],
          options: ['Calcitonin inhibits osteoclasts → less bone resorption → Ca²⁺ deposited in bone → serum Ca²⁺ falls', 'Calcitonin activates osteoclasts → more bone resorption → serum Ca²⁺ rises further', 'Calcitonin acts on the kidney only; it has no direct effect on bone cells', 'Calcitonin stimulates osteoblasts and has no effect on osteoclasts'],
          correct: 'Calcitonin inhibits osteoclasts → less bone resorption → Ca²⁺ deposited in bone → serum Ca²⁺ falls',
          wrongPool: ['Calcitonin activates osteoclasts → more bone resorption → serum Ca²⁺ rises further', 'Calcitonin acts on the kidney only; it has no direct effect on bone cells', 'Calcitonin stimulates osteoblasts and has no effect on osteoclasts', 'Calcitonin raises Ca²⁺ to balance the hypercalcemia signal'],
        },
        {
          conceptId: 'fl3-bb-phy-8',
          scenarios: [
            'The Frank-Starling mechanism states that increased ventricular filling (preload) leads to increased stroke volume. What is the cellular basis?',
          ],
          options: ['Greater stretch of sarcomeres → more optimal overlap of actin and myosin → greater force of contraction per beat', 'Greater preload increases heart rate via the SA node to compensate for lower filling pressure', 'Increased filling stretches the ventricular wall, activating baroreceptors that increase contractility', 'Greater preload activates sympathetic nerves that release NE to increase contractility'],
          correct: 'Greater stretch of sarcomeres → more optimal overlap of actin and myosin → greater force of contraction per beat',
          wrongPool: ['Greater preload increases heart rate via the SA node to compensate for lower filling pressure', 'Increased filling stretches the ventricular wall, activating baroreceptors that increase contractility', 'Greater preload activates sympathetic nerves that release NE to increase contractility', 'Increased sarcomere length causes Ca²⁺ release from the SR to be greater'],
        },
      ],
      showdown: [],
    },

    // ── Module 4D: Genetics ───────────────────────────────────────────────────
    {
      id: 'fl3-bb-genetics',
      label: 'Genetics',
      color: '#7c3aed',
      light: '#ede9fe',
      icon: '🧬',
      scenarioDrop: [
        {
          conceptId: 'fl3-bb-gen-1',
          scenarios: [
            'A pedigree shows a trait in every generation, affecting both males and females, with approximately 50% of offspring affected. What is the most likely inheritance pattern?',
          ],
          options: ['Autosomal dominant — every generation affected, both sexes equally, ~50% of offspring', 'Autosomal recessive — skips generations, usually 25% affected', 'X-linked recessive — affects males more than females', 'Mitochondrial — transmitted only through mothers, not fathers'],
          correct: 'Autosomal dominant — every generation affected, both sexes equally, ~50% of offspring',
          wrongPool: ['Autosomal recessive — skips generations, usually 25% affected', 'X-linked recessive — affects males more than females', 'Mitochondrial — transmitted only through mothers, not fathers', 'Y-linked — only males would be affected, passed father to all sons'],
        },
        {
          conceptId: 'fl3-bb-gen-2',
          scenarios: [
            'A trait is expressed differently depending on whether it was inherited from the mother or father, even though both alleles are present. What genetic phenomenon explains this?',
          ],
          options: ['Genomic imprinting — parent-of-origin determines which allele is expressed; one allele is silenced by methylation', 'Y-linkage — only the paternal allele is ever expressed because Y is paternal', 'Incomplete dominance — expression varies by allele dose', 'Epigenetic mutation — the mutation rate differs between maternal and paternal chromosomes'],
          correct: 'Genomic imprinting — parent-of-origin determines which allele is expressed; one allele is silenced by methylation',
          wrongPool: ['Y-linkage — only the paternal allele is ever expressed because Y is paternal', 'Incomplete dominance — expression varies by allele dose', 'Epigenetic mutation — the mutation rate differs between maternal and paternal chromosomes', 'Anticipation — repeat expansion causes variable expression across generations'],
        },
        {
          conceptId: 'fl3-bb-gen-3',
          scenarios: [
            'A bacterial operon has a single promoter controlling multiple structural genes. When the operon is transcribed, what type of mRNA is produced?',
          ],
          options: ['Polycistronic mRNA — one mRNA encodes multiple proteins from a single promoter', 'Monocistronic mRNA — bacteria produce one mRNA per gene like eukaryotes', 'Pre-mRNA — bacterial transcripts require splicing before translation', 'Antisense mRNA — the operon produces a complementary regulatory strand'],
          correct: 'Polycistronic mRNA — one mRNA encodes multiple proteins from a single promoter',
          wrongPool: ['Monocistronic mRNA — bacteria produce one mRNA per gene like eukaryotes', 'Pre-mRNA — bacterial transcripts require splicing before translation', 'Antisense mRNA — the operon produces a complementary regulatory strand', 'Ribozyme — the operon transcript catalyzes its own splicing'],
        },
        {
          conceptId: 'fl3-bb-gen-4',
          scenarios: [
            'Angelman syndrome (maternal deletion of 15q11-13) and Prader-Willi syndrome (paternal deletion of 15q11-13) affect the same chromosomal region yet produce different diseases. Why?',
          ],
          options: ['Genomic imprinting — different genes in the region are active depending on parental origin; maternal deletion silences maternally-expressed genes, paternal deletion silences paternally-expressed genes', 'The two conditions involve different mutations; the chromosomal region only appears similar', 'Anticipation — repeat expansions of maternal origin cause Angelman; paternal repeats cause Prader-Willi', 'Epistasis — modifier genes on chromosome 15 interact differently depending on parent of origin'],
          correct: 'Genomic imprinting — different genes in the region are active depending on parental origin; maternal deletion silences maternally-expressed genes, paternal deletion silences paternally-expressed genes',
          wrongPool: ['The two conditions involve different mutations; the chromosomal region only appears similar', 'Anticipation — repeat expansions of maternal origin cause Angelman; paternal repeats cause Prader-Willi', 'Epistasis — modifier genes on chromosome 15 interact differently depending on parent of origin', 'X-inactivation — the imbalance in silencing creates the two phenotypes'],
        },
        {
          conceptId: 'fl3-bb-gen-5',
          scenarios: [
            'An X-linked recessive condition: a carrier mother × unaffected father. What are the expected frequencies among male offspring?',
          ],
          options: ['50% affected males, 50% unaffected males — male offspring have a 50% chance of inheriting the X with the allele', '25% affected males — the same as autosomal recessive', '100% of male offspring are affected — all males get the maternal X', 'Only 25% of males are affected if they also inherit a second risk allele from the father'],
          correct: '50% affected males, 50% unaffected males — male offspring have a 50% chance of inheriting the X with the allele',
          wrongPool: ['25% affected males — the same as autosomal recessive', '100% of male offspring are affected — all males get the maternal X', 'Only 25% of males are affected if they also inherit a second risk allele from the father', '0% affected — carrier mothers protect all male offspring from expression'],
        },
        {
          conceptId: 'fl3-bb-gen-6',
          scenarios: [
            'In the lac operon, the repressor is active by default. Allolactose binds the repressor and causes it to release the operator. What happens next?',
          ],
          options: ['RNA polymerase can now transcribe the structural genes (lacZ, lacY, lacA) → β-galactosidase and permease are made → lactose is metabolized', 'The repressor becomes a positive regulator and actively recruits RNA polymerase', 'Allolactose phosphorylates the repressor, permanently inactivating it', 'The operator sequence is methylated, preventing repressor from ever re-binding'],
          correct: 'RNA polymerase can now transcribe the structural genes (lacZ, lacY, lacA) → β-galactosidase and permease are made → lactose is metabolized',
          wrongPool: ['The repressor becomes a positive regulator and actively recruits RNA polymerase', 'Allolactose phosphorylates the repressor, permanently inactivating it', 'The operator sequence is methylated, preventing repressor from ever re-binding', 'The polycistronic mRNA is translated into a single fusion protein by default'],
        },
        {
          conceptId: 'fl3-bb-gen-7',
          scenarios: [
            'A mutation arises spontaneously in a spermatogonium and is passed to the offspring. Neither parent carries the mutation in their somatic or germ cells. What term describes this phenomenon?',
          ],
          options: ['De novo mutation — arises spontaneously in a germ cell; not present in either parent', 'Recessive inheritance — both parents are carriers but unaffected', 'Incomplete penetrance — the parents carry the allele but do not express the phenotype', 'Somatic mutation — the mutation arose in a non-reproductive cell'],
          correct: 'De novo mutation — arises spontaneously in a germ cell; not present in either parent',
          wrongPool: ['Recessive inheritance — both parents are carriers but unaffected', 'Incomplete penetrance — the parents carry the allele but do not express the phenotype', 'Somatic mutation — the mutation arose in a non-reproductive cell', 'Germline mosaicism — both parents have somatic and germline cells with the mutation'],
        },
        {
          conceptId: 'fl3-bb-gen-8',
          scenarios: [
            'A trp operon is controlled by attenuation. When tryptophan is abundant, what happens to the leader peptide and transcription?',
          ],
          options: ['Ribosome translates the leader peptide fully → mRNA forms a terminator hairpin → transcription terminates early → trp biosynthesis genes are NOT expressed', 'Abundant tryptophan stalls the ribosome → antiterminator hairpin forms → transcription continues through the structural genes', 'Leader peptide is never translated; tryptophan directly binds the operator', 'Abundant tryptophan activates an activator protein that prevents the hairpin'],
          correct: 'Ribosome translates the leader peptide fully → mRNA forms a terminator hairpin → transcription terminates early → trp biosynthesis genes are NOT expressed',
          wrongPool: ['Abundant tryptophan stalls the ribosome → antiterminator hairpin forms → transcription continues through the structural genes', 'Leader peptide is never translated; tryptophan directly binds the operator', 'Abundant tryptophan activates an activator protein that prevents the hairpin', 'Attenuation uses protein-protein interactions, not mRNA secondary structure'],
        },
        {
          conceptId: 'fl3-bb-gen-9',
          scenarios: [
            'Codominance vs incomplete dominance: in ABO blood type, type AB individuals express both A and B antigens. What inheritance pattern is this?',
          ],
          options: ['Codominance — both alleles are fully expressed; neither is dominant over the other', 'Incomplete dominance — the two alleles blend to produce a new intermediate antigen', 'Overdominance — the AB heterozygote is more fit than either homozygote', 'Multiple allelism only — codominance is not a separate concept from incomplete dominance'],
          correct: 'Codominance — both alleles are fully expressed; neither is dominant over the other',
          wrongPool: ['Incomplete dominance — the two alleles blend to produce a new intermediate antigen', 'Overdominance — the AB heterozygote is more fit than either homozygote', 'Multiple allelism only — codominance is not a separate concept from incomplete dominance', 'Epistasis — the I^A and I^B alleles suppress each other only in O homozygotes'],
        },
      ],
      showdown: [],
    },

    // ── Module 5A: Figure Reasoning ───────────────────────────────────────────
    {
      id: 'fl3-bb-figure-reasoning',
      label: 'Figure Reasoning',
      color: '#b45309',
      light: '#fef3c7',
      icon: '📊',
      scenarioDrop: [
        {
          conceptId: 'fl3-bb-fr-1',
          scenarios: [
            'A bar graph shows that cells with Gene X knocked out proliferate 30% slower than wild-type. A question asks which conclusion is BEST supported. One answer says "Gene X promotes cell proliferation." Another says "Gene X is required for all cell division." Which is best supported by the figure?',
          ],
          options: ['"Gene X promotes cell proliferation" — the data show reduction, not abolition; "required for all" overclaims the figure', '"Gene X is required for all cell division" — 30% reduction means the gene is essential', 'Neither — bar graphs cannot support causal conclusions', '"Gene X suppresses proliferation" — the knockout grows 30% slower, so X was inhibitory'],
          correct: '"Gene X promotes cell proliferation" — the data show reduction, not abolition; "required for all" overclaims the figure',
          wrongPool: ['"Gene X is required for all cell division" — 30% reduction means the gene is essential', 'Neither — bar graphs cannot support causal conclusions', '"Gene X suppresses proliferation" — the knockout grows 30% slower, so X was inhibitory', '"Gene X has no role in proliferation" — 30% is within normal experimental variation'],
        },
        {
          conceptId: 'fl3-bb-fr-2',
          scenarios: [
            'A Western blot shows a band at 50 kDa for protein A in lane 1 (control) and no band in lane 2 (drug-treated). What conclusion is directly supported?',
          ],
          options: ['Drug treatment reduces or eliminates detectable protein A at 50 kDa under these conditions', 'The drug degrades protein A by activating the proteasome specifically', 'Protein A is transcriptionally silenced by the drug based on the Western blot result', 'The drug causes protein A to migrate to a different molecular weight'],
          correct: 'Drug treatment reduces or eliminates detectable protein A at 50 kDa under these conditions',
          wrongPool: ['The drug degrades protein A by activating the proteasome specifically', 'Protein A is transcriptionally silenced by the drug based on the Western blot result', 'The drug causes protein A to migrate to a different molecular weight', 'The drug induces protein A degradation by reducing its half-life — the Western blot confirms mechanism'],
        },
        {
          conceptId: 'fl3-bb-fr-3',
          scenarios: [
            'A line graph shows enzyme activity vs. substrate concentration, with activity plateauing at high substrate. What kinetic constant does the plateau represent?',
          ],
          options: ['Vmax — maximum velocity when all enzyme active sites are saturated', 'Km — substrate concentration at half-maximal velocity (not the plateau)', 'kcat — the plateau reflects the turnover number per enzyme molecule', 'Ki — the plateau shows where inhibitor binding is maximized'],
          correct: 'Vmax — maximum velocity when all enzyme active sites are saturated',
          wrongPool: ['Km — substrate concentration at half-maximal velocity (not the plateau)', 'kcat — the plateau reflects the turnover number per enzyme molecule', 'Ki — the plateau shows where inhibitor binding is maximized', 'The plateau is an artifact of substrate depletion, not a meaningful constant'],
        },
        {
          conceptId: 'fl3-bb-fr-4',
          scenarios: [
            'A figure compares two experimental groups. Group A has an error bar that overlaps with Group B\'s mean. A question asks if the difference is "statistically significant." Based on the figure alone, what can you say?',
          ],
          options: ['Overlapping error bars suggest the difference may not be statistically significant, but a formal statistical test is needed to confirm', 'Overlapping error bars prove there is no significant difference', 'Overlapping error bars prove the groups are identical because they share a confidence interval', 'Statistical significance cannot be assessed from figures; the p-value is always given in the text'],
          correct: 'Overlapping error bars suggest the difference may not be statistically significant, but a formal statistical test is needed to confirm',
          wrongPool: ['Overlapping error bars prove there is no significant difference', 'Overlapping error bars prove the groups are identical because they share a confidence interval', 'Statistical significance cannot be assessed from figures; the p-value is always given in the text', 'Overlapping error bars always mean p > 0.05 regardless of sample size'],
        },
        {
          conceptId: 'fl3-bb-fr-5',
          scenarios: [
            'A passage reports that in a dose-response curve, the EC50 for Drug A is 10 nM and for Drug B is 100 nM. A question asks which drug is MORE potent. Which is correct?',
          ],
          options: ['Drug A — lower EC50 means less drug is needed to achieve 50% maximal effect = more potent', 'Drug B — higher EC50 means the drug can handle a larger dose range = more potent', 'Both are equally potent — potency is determined by efficacy, not EC50', 'Drug A is more efficacious; Drug B is more potent — EC50 and potency are not related'],
          correct: 'Drug A — lower EC50 means less drug is needed to achieve 50% maximal effect = more potent',
          wrongPool: ['Drug B — higher EC50 means the drug can handle a larger dose range = more potent', 'Both are equally potent — potency is determined by efficacy, not EC50', 'Drug A is more efficacious; Drug B is more potent — EC50 and potency are not related', 'Cannot determine from EC50 alone; maximal response (Emax) must also be compared'],
        },
        {
          conceptId: 'fl3-bb-fr-6',
          scenarios: [
            'A scatter plot shows a positive correlation between variable X and variable Y (r = 0.85). A question asks if X causes Y. What is the correct interpretation?',
          ],
          options: ['Correlation does not imply causation — a strong r only shows the variables move together; a controlled experiment is needed to establish causality', 'r = 0.85 is high enough to conclude causation; r > 0.8 is the threshold for causal claims', 'X causes Y because the correlation is positive; negative correlations are non-causal', 'The scatter plot proves causation because both variables are biological'],
          correct: 'Correlation does not imply causation — a strong r only shows the variables move together; a controlled experiment is needed to establish causality',
          wrongPool: ['r = 0.85 is high enough to conclude causation; r > 0.8 is the threshold for causal claims', 'X causes Y because the correlation is positive; negative correlations are non-causal', 'The scatter plot proves causation because both variables are biological', 'Causation is established when p < 0.05 for the correlation coefficient'],
        },
        {
          conceptId: 'fl3-bb-fr-7',
          scenarios: [
            'A passage shows that Figure 3 has both experimental and control group data. A LEAST-supported question asks about the experiment. Which answer choice should you pick?',
          ],
          options: ['The answer that is directly contradicted by the figure data — not merely an unsupported claim', 'The answer that uses the most technical terms not shown in the figure', 'The answer about the control group, since it was not the focus of the study', 'The answer with the highest numerical value shown in the figure'],
          correct: 'The answer that is directly contradicted by the figure data — not merely an unsupported claim',
          wrongPool: ['The answer that uses the most technical terms not shown in the figure', 'The answer about the control group, since it was not the focus of the study', 'The answer with the highest numerical value shown in the figure', 'Any answer that refers to a timepoint not shown in the figure'],
        },
        {
          conceptId: 'fl3-bb-fr-8',
          scenarios: [
            'A gel electrophoresis image shows DNA bands at 500 bp, 1000 bp, and 2000 bp for a digestion with Enzyme 1. Enzyme 2 produces bands at 500 bp and 2500 bp. A double digest (both enzymes) produces bands at 500 bp, 500 bp, and 1500 bp. What does the double digest tell you?',
          ],
          options: ['There are two 500 bp fragments (one from each enzyme) and a 1500 bp fragment, meaning the enzymes cut at overlapping but distinct sites within the 2000 bp fragment', 'The double digest confirms that the enzymes cannot both cut the same circular DNA', 'A 1500 bp band means one enzyme failed to cut the 2000 bp fragment', 'The double digest always produces the sum of all single-digest bands'],
          correct: 'There are two 500 bp fragments (one from each enzyme) and a 1500 bp fragment, meaning the enzymes cut at overlapping but distinct sites within the 2000 bp fragment',
          wrongPool: ['The double digest confirms that the enzymes cannot both cut the same circular DNA', 'A 1500 bp band means one enzyme failed to cut the 2000 bp fragment', 'The double digest always produces the sum of all single-digest bands', 'The double digest shows that the 2000 bp fragment is a PCR artifact'],
        },
      ],
      showdown: [],
    },

    // ── Module 5B: Passage Mechanism ──────────────────────────────────────────
    {
      id: 'fl3-bb-passage-mechanism',
      label: 'Passage Mechanism',
      color: '#0369a1',
      light: '#e0f2fe',
      icon: '📖',
      scenarioDrop: [
        {
          conceptId: 'fl3-bb-pm-1',
          scenarios: [
            'A passage describes a novel enzyme that uses an unknown cofactor. A question asks you to predict what type of reaction the enzyme catalyzes based on the fact that the cofactor contains a flavin ring. What is the most justified prediction?',
          ],
          options: ['An oxidation-reduction reaction — flavin (FAD/FMN) cofactors are electron carriers used in redox reactions', 'A phosphorylation reaction — flavin rings carry phosphate groups to substrates', 'A hydrolysis reaction — flavin rings use water as the electron donor', 'A decarboxylation reaction — flavin-containing enzymes always remove CO₂'],
          correct: 'An oxidation-reduction reaction — flavin (FAD/FMN) cofactors are electron carriers used in redox reactions',
          wrongPool: ['A phosphorylation reaction — flavin rings carry phosphate groups to substrates', 'A hydrolysis reaction — flavin rings use water as the electron donor', 'A decarboxylation reaction — flavin-containing enzymes always remove CO₂', 'A transamination reaction — flavin acts like pyridoxal phosphate'],
        },
        {
          conceptId: 'fl3-bb-pm-2',
          scenarios: [
            'A passage reports that a gene is upregulated in hypoxic tumor cells. The gene encodes a transcription factor. A question asks which downstream effect is most consistent with HIF-1α being that transcription factor.',
          ],
          options: ['Increased expression of VEGF and glycolytic enzymes — HIF-1α drives angiogenesis and metabolic reprogramming to anaerobic glycolysis', 'Increased expression of p53 — HIF-1α promotes apoptosis in hypoxic cells', 'Increased expression of HDAC — HIF-1α remodels chromatin to silence survival genes', 'Decreased expression of GLUT transporters — HIF-1α limits glucose uptake to conserve resources'],
          correct: 'Increased expression of VEGF and glycolytic enzymes — HIF-1α drives angiogenesis and metabolic reprogramming to anaerobic glycolysis',
          wrongPool: ['Increased expression of p53 — HIF-1α promotes apoptosis in hypoxic cells', 'Increased expression of HDAC — HIF-1α remodels chromatin to silence survival genes', 'Decreased expression of GLUT transporters — HIF-1α limits glucose uptake to conserve resources', 'Increased expression of Bcl-2 — HIF-1α is an anti-apoptotic transcription factor only'],
        },
        {
          conceptId: 'fl3-bb-pm-3',
          scenarios: [
            'A passage describes a receptor that dimerizes upon ligand binding. Without reading further, what type of receptor is most likely being described?',
          ],
          options: ['A receptor tyrosine kinase (RTK) — ligand-induced dimerization is the hallmark mechanism of RTK activation', 'A GPCR — GPCRs undergo dimerization upon ligand binding in all signaling cascades', 'A nuclear receptor — nuclear receptors form dimers only after entering the nucleus', 'An ion channel — ligand-gated channels dimerize to form the pore'],
          correct: 'A receptor tyrosine kinase (RTK) — ligand-induced dimerization is the hallmark mechanism of RTK activation',
          wrongPool: ['A GPCR — GPCRs undergo dimerization upon ligand binding in all signaling cascades', 'A nuclear receptor — nuclear receptors form dimers only after entering the nucleus', 'An ion channel — ligand-gated channels dimerize to form the pore', 'An intracellular receptor — dimerization occurs in the cytoplasm before nuclear translocation for all receptors'],
        },
        {
          conceptId: 'fl3-bb-pm-4',
          scenarios: [
            'A passage states that Drug Z increased cAMP in cells. Without any other information, what is the most likely proximal mechanism?',
          ],
          options: ['Drug Z activates adenylyl cyclase (or inhibits phosphodiesterase) — cAMP is made by adenylyl cyclase and degraded by PDE', 'Drug Z activates phospholipase C — PLC generates cAMP from DAG', 'Drug Z inhibits PKA — less PKA activity means more cAMP accumulates', 'Drug Z activates guanylyl cyclase — cAMP and cGMP are interconverted by the same enzyme'],
          correct: 'Drug Z activates adenylyl cyclase (or inhibits phosphodiesterase) — cAMP is made by adenylyl cyclase and degraded by PDE',
          wrongPool: ['Drug Z activates phospholipase C — PLC generates cAMP from DAG', 'Drug Z inhibits PKA — less PKA activity means more cAMP accumulates', 'Drug Z activates guanylyl cyclase — cAMP and cGMP are interconverted by the same enzyme', 'Drug Z stimulates G-protein independent cAMP synthesis through the MAPK pathway'],
        },
        {
          conceptId: 'fl3-bb-pm-5',
          scenarios: [
            'A passage describes an experiment where cells are treated with a proteasome inhibitor. Ubiquitinated proteins accumulate. A question asks what would happen to a normally short-lived regulatory protein (e.g., cyclin D). What is the best prediction?',
          ],
          options: ['Cyclin D accumulates — its normal degradation pathway is blocked, so it persists longer than usual', 'Cyclin D is degraded faster — the proteasome inhibitor reroutes degradation to lysosomes', 'Cyclin D is unaffected — cyclins are degraded by caspases, not the proteasome', 'Cyclin D synthesis increases — cells compensate for proteasome blockade by making more protein'],
          correct: 'Cyclin D accumulates — its normal degradation pathway is blocked, so it persists longer than usual',
          wrongPool: ['Cyclin D is degraded faster — the proteasome inhibitor reroutes degradation to lysosomes', 'Cyclin D is unaffected — cyclins are degraded by caspases, not the proteasome', 'Cyclin D synthesis increases — cells compensate for proteasome blockade by making more protein', 'Cyclin D is immediately re-ubiquitinated and degraded via an alternative pathway'],
        },
        {
          conceptId: 'fl3-bb-pm-6',
          scenarios: [
            'A passage gives you a novel enzyme\'s mechanism: it transfers an amino group from one molecule to another, using pyridoxal phosphate. Without further context, predict its function.',
          ],
          options: ['It is an aminotransferase (transaminase) — PLP is the characteristic cofactor for transamination, which shuffles amino groups between amino acids and keto-acids', 'It is a decarboxylase — PLP is used when CO₂ is released from amino acids', 'It is an oxidoreductase — PLP carries electrons for amino acid oxidation', 'It is a hydrolase — PLP activates water for amino group transfer by hydrolysis'],
          correct: 'It is an aminotransferase (transaminase) — PLP is the characteristic cofactor for transamination, which shuffles amino groups between amino acids and keto-acids',
          wrongPool: ['It is a decarboxylase — PLP is used when CO₂ is released from amino acids', 'It is an oxidoreductase — PLP carries electrons for amino acid oxidation', 'It is a hydrolase — PLP activates water for amino group transfer by hydrolysis', 'It is a ligase — PLP is required for all ATP-dependent bond-formation reactions'],
        },
      ],
      showdown: [],
    },

  ]; // end all clusters

  clusters.forEach(c => CLUSTERS.push(c));
  console.log('[BB-FL3] loaded', clusters.length, 'clusters. CLUSTERS total:', CLUSTERS.length);
})();

