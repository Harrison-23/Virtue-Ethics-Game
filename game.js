const passages = {
    start: {
        text: `You've built this company from the ground up over four decades. As CEO, you've weathered economic downturns, pivoted through technological revolutions, and built a reputation for integrity and innovation. But now, at 68, you feel the weight of time. Your reflexes aren't what they used to be, and the younger executives speak in acronyms you sometimes have to look up later.

Today, a representative from NeuralEdge—one of the hottest AI companies in Silicon Valley—sits across from you in your office. They're rapidly gaining market share, and they're here with a proposition: integrate their AI systems into your company's operations.

"AI is the future," they say with confident smile. "It's a money maker. Your competitors are already moving. The question is: will you lead, follow, or fall behind?"

You have a choice to make—perhaps one of the most important of your career. How do you respond?`,
        choices: [
            { text: "Confront the situation head-on and take control", goto: "confront" },
            { text: "Delegate the decision to your trusted apprentice", goto: "report" },
            { text: "Sell the company and retire with a large profit", goto: "ignore" },
            { text: "Buy time—monitor the situation and gather more data", goto: "document" }
        ]
    },
    
    confront: {
        text: `You decide this is your last major decision as CEO—your final opportunity to shape the company's future. You dismiss the NeuralEdge representative politely but firmly, saying you'll need to think about this carefully and make your own assessment.

This is your company. You built it. And you're not about to hand over control of such a critical decision to consultants or subordinates without understanding every angle.

But how do you proceed?`,
        choices: [
            { text: "Outright deny AI integration—protect your employees and data", goto: "deny_ai" },
            { text: "Consult your two most trusted senior advisors", goto: "consult_advisors" },
            { text: "Analyze AI's future yourself through personal research", goto: "self_analysis" }
        ]
    },

    report: {
        text: `You look at the eager face of the NeuralEdge representative, then at the stack of reports on your desk that you've been meaning to review for weeks. 

You think of Marcus, your apprentice of seven years. He's sharp, understands the new technologies better than you do, and has proven himself time and again. You hired him specifically to be your successor. Maybe it's time to let him prove he's ready.

"I'm going to have my VP of Strategy handle this evaluation," you tell the representative. "Marcus Chen will be your point of contact moving forward."

You slowly begin transferring more responsibilities to Marcus, stepping back from the day-to-day decisions. You hope—no, you trust—that he'll make the right choice.

Three months later, Marcus comes to your office with his recommendation. He's done extensive due diligence and believes a moderate integration of AI could improve efficiency by 23% without significant layoffs. He's negotiated protections and staged rollout plans.

You approve his recommendation and announce your retirement.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_report" }
        ]
    },

    ignore: {
        text: `You sit in your office after the NeuralEdge representative leaves, staring at the city skyline. You've been thinking about retirement for two years now. The company is worth more than you ever imagined it would be. Your children are grown, your grandchildren are starting college.

Why are you still doing this? Why carry the weight of thousands of employees, quarterly earnings calls, and now this AI dilemma?

Within a week, you've contacted an investment firm. Within three months, you've negotiated a sale to a larger tech conglomerate for a staggering sum—far more than you'd make if you stayed and tried to compete in the AI race.

You announce your retirement at the acquisition celebration. The room applauds, but you notice some faces—especially the older employees who've been with you for decades—look betrayed. They whisper to each other. Some avoid eye contact.

You're wealthy beyond measure. But you know, deep down, that you took the easy way out. You ran from the hard decision that could have defined your career.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_ignore" }
        ]
    },

    document: {
        text: `"This is interesting," you tell the NeuralEdge representative, "but I need to see more data. Let me monitor how AI integration plays out in the market for another quarter or two. Come back to me then."

Over the next three months, you watch carefully. NeuralEdge signs deals with three of your competitors. Their stock prices surge. Analysts publish glowing reports about productivity gains. But something nags at you.

You have your team dig deeper into NeuralEdge's practices. The findings are... ambiguous. It's not entirely clear what the company is doing with user data once it's integrated into their systems. They've passed all legal compliance checks and have been declared lawful. Their profits are soaring. Everything looks promising on paper.

But you can't shake a feeling of unease. What do you do?`,
        choices: [
            { text: "Accept AI integration but deny access to customer records", goto: "half_acceptance" },
            { text: "Wait one more quarter for additional information", goto: "confront_delayed" }
        ]
    },

    deny_ai: {
        text: `You call an all-hands meeting. The auditorium is packed—employees from every department watching you on the stage where you've made so many announcements over the years.

"I've made a decision about the AI proposal," you begin. "After careful consideration, we will not be integrating third-party AI systems into our operations."

There's a murmur in the crowd.

"I know this might seem like we're falling behind. I know the analysts will criticize this decision. But this company was built on trust—trust between us and our customers, and trust between me and you. I will not risk your jobs or our customers' data for a quarterly earnings boost."

The room is silent for a moment. Then someone in the back starts clapping. It spreads. Within moments, the entire auditorium is on its feet.

Over the next two years, your profits do decline—slowly but steadily. Competitors with AI integration gain market share. Your stock price stagnates. You eventually retire, and the board reluctantly begins exploring AI options after you're gone.

But every employee who was there that day remembers. You're invited to company events for years afterward. When you walk through the office, people stop to shake your hand. They call you "a man of the people."

You chose your people over profits. History will decide if that was wise, but your conscience is clear.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_deny_ai" }
        ]
    },

    consult_advisors: {
        text: `You call your two most trusted advisors into your office: Sarah, your CFO of 15 years, and James, your Chief Technology Officer.

"I need your honest assessment," you tell them. "No sugarcoating. Should we integrate NeuralEdge's AI systems?"

They work for six weeks, bringing in cybersecurity experts, data ethicists, and legal consultants. They visit companies that have integrated NeuralEdge's systems. They interview former NeuralEdge employees under confidentiality agreements.

When they return to your office, their faces are grim.

"We found something," Sarah says, sliding a folder across your desk. "NeuralEdge has been selling anonymized user data to third-party research firms. It's technically legal—hidden deep in their terms of service—but it's highly unethical. None of the companies using their system seem to know the full extent of it."

"If we integrate their system," James adds, "we'd be exposing our customers to this practice."

You immediately decline NeuralEdge's proposal and quietly leak your findings to a tech journalist. The story breaks three weeks later. NeuralEdge's stock crashes. Several of your competitors who'd integrated their systems scramble to remove them.

Your company gains market share as customers flock to a business that prioritized their privacy. Your advisors' diligence saved your reputation and turned a potential crisis into a competitive advantage.

You made the decision to seek counsel from those wiser in specific domains than yourself, demonstrating practical wisdom and humility.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_consult_advisors" }
        ]
    },

    self_analysis: {
        text: `You decide to tackle this yourself. After all, you didn't build this company by relying on others to make the big decisions.

You spend evenings and weekends reading white papers, watching conference talks, taking online courses about machine learning and neural networks. You're determined to understand AI deeply enough to make an informed decision.

But the technology moves faster than you can learn. The terminology is dense. The mathematics are beyond what you remember from your engineering degree forty years ago. You find yourself confused by concepts that younger engineers grasp intuitively.

Still, you press on. After three months of research, you develop what you believe is a comprehensive AI integration strategy. You present it to your board with confidence.

Your CTO raises his hand hesitantly. "With respect, sir, this approach is based on outdated assumptions about how modern AI systems work. This architecture you're proposing... it would be extremely vulnerable to adversarial attacks and wouldn't scale."

Your face flushes. Other board members shift uncomfortably.

You realize too late that your analysis was fundamentally flawed. You spent months going down the wrong path because you were too proud to admit that this technology had passed you by. The board votes to table the AI discussion and suggests bringing in external consultants.

Your authority is diminished. Whispers start about whether it's time for new leadership. Within six months, you announce your retirement, earlier than you'd planned.

You learned the hard lesson that wisdom sometimes means knowing the limits of your own expertise.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_self_analysis" }
        ]
    },

    half_acceptance: {
        text: `You negotiate a middle path with NeuralEdge. You'll integrate their AI systems for operational efficiency—inventory management, logistics, some customer service automation—but you explicitly deny them access to your customer database and sensitive records.

"We'll use your tools," you tell them, "but our customer data stays behind our firewall."

NeuralEdge agrees, though they're clearly disappointed with the limited scope.

The integration proceeds. Your efficiency improves modestly. But when news breaks about your partial AI adoption, several long-time employees—particularly in customer service departments—resign. They feel betrayed that you're replacing human judgment with algorithms, even in limited ways.

Your profits remain steady, but your company culture shifts. There's a new tension between the "old guard" who remember the pre-AI days and the "new guard" who push for deeper integration.

You retire two years later, unsure whether your compromise was wisdom or cowardice. You protected customer data but lost some of the human touch that made your company special.

You demonstrated practical wisdom by finding a middle ground, but perhaps at the cost of a clear ethical stance that could have defined your legacy more strongly.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_half_acceptance" }
        ]
    },

    confront_delayed: {
        text: `You wait another quarter, watching carefully as NeuralEdge continues its expansion. The company's profits surge even higher. They sign deals with two more major corporations. Industry awards pile up.

But still, no one has definitively clarified what exactly happens to the user data that flows through their systems. The company issues vague statements about "privacy-forward practices" and "industry-leading security," but provides no specific details. Every inquiry is met with "proprietary information" disclaimers.

The lack of transparency bothers you more than ever, but you still don't have concrete evidence of wrongdoing. What do you do?`,
        choices: [
            { text: "Wait another quarter—the information is still too inconclusive", goto: "explain_reasoning" },
            { text: "Invest in developing your own AI capabilities in-house", goto: "conduct_insights" }
        ]
    },

    explain_reasoning: {
        text: `"One more quarter," you tell your executive team. "The information is still too inconclusive to make such a major decision. We can't take this risk without more clarity."

Your CFO looks frustrated. "We've been saying that for six months now. Meanwhile, our competitors are pulling ahead."

But you stand firm. You wait another quarter. Then another.

Each time you're about to make a decision, some new piece of ambiguous information emerges that makes you hesitate. Maybe NeuralEdge isn't completely transparent, but they're not doing anything illegal. Maybe your concerns are just the anxiety of an aging executive who doesn't fully understand the technology.

A year passes. Then eighteen months. Your market share erodes steadily. Talented young employees leave for companies with "cutting-edge tech." Your stock price stagnates while competitors soar.

Finally, the board votes to remove you as CEO. They bring in a younger leader who immediately signs a deal with NeuralEdge.

You retired not because you made the wrong decision, but because you failed to make any decision at all. Paralysis masked as caution became its own form of failure.

Aristotle warned against the vice of cowardice—not just the absence of courage, but the failure to act when action is required. In trying to avoid making a mistake, you made the worst mistake of all: letting fear prevent you from leading.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_wait" }
        ]
    },

    conduct_insights: {
        text: `You make a bold decision: if you can't trust external AI providers, you'll build your own capabilities.

You allocate significant resources to creating an in-house AI research division. You hire top talent from universities and competing firms. You partner with academic institutions. You invest in the infrastructure needed to develop proprietary AI systems.

It's expensive and risky. Your board is nervous. Analysts question the decision. But you're committed.

Over the next eighteen months, your team makes remarkable progress. They develop AI tools specifically designed for your industry, with transparent data practices and strong ethical guidelines built in from the ground up. Because you control the entire system, you can ensure customer data is protected.

The integration is gradual, thoughtful, and designed to augment your workforce rather than replace them. You retrain employees to work alongside AI tools, creating new roles rather than eliminating old ones. Layoffs are minimal—far fewer than competitors who adopted third-party solutions experienced.

During this time, an investigative journalist breaks the story you suspected: NeuralEdge has been selling user data to research firms in ways that, while technically legal, violate the spirit of privacy protection. Companies that integrated their systems face backlash and lawsuits.

Your company emerges stronger. You've navigated the AI revolution while maintaining your ethical standards. You learned extensively about the technology in the process—not by pretending to be an expert, as you once might have done, but by hiring experts and learning from them.

When you retire two years later, you're celebrated as a leader who adapted to change without compromising values. You demonstrated patience, wisdom, courage to invest in an uncertain outcome, and commitment to doing things the right way rather than the easy way.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_conduct_insights" }
        ]
    },

    reflect_report: {
        text: `<div class="virtue-note yellow">
<strong>Virtue Ethics Reflection:</strong><br><br>
You demonstrated several important virtues in this path: <strong>humility</strong> (recognizing your apprentice's superior understanding), <strong>trust</strong> (delegating to someone you'd trained), and <strong>practical wisdom</strong> (knowing when to step back).

However, you also avoided the burden of making the hard decision yourself. Did you demonstrate <strong>courage</strong> by empowering the next generation, or did you evade responsibility at a crucial moment?

Aristotle taught that virtue lies in the mean between extremes. You avoided the extremes of stubborn control (vice of arrogance) and total abandonment (vice of cowardice), finding a middle path of mentored delegation.

Your legacy is secure but not exceptional. You left on good terms with decent profits, but you'll always wonder: what if you'd stayed and led through the transformation yourself? Did you step aside at the right time, or did you step aside when things got difficult?

The virtue of practical wisdom includes knowing when to lead and when to follow, when to hold on and when to let go. You made a reasonable choice, but perhaps not a courageous one.
</div>`,
        choices: [
            { text: "Start over", goto: "start" }
        ]
    },

    reflect_ignore: {
        text: `<div class="virtue-note red">
<strong>Virtue Ethics Reflection:</strong><br><br>
You chose financial security and personal comfort over responsibility to your employees and the legacy you'd built. This represents a failure of several key virtues:

<strong>Courage</strong>: You ran from a difficult decision rather than facing it<br>
<strong>Justice</strong>: You prioritized your own interests over those of your employees and stakeholders<br>
<strong>Temperance</strong>: You allowed the temptation of wealth to override your sense of duty<br>

The looks of betrayal from your long-time employees reveal a deeper truth: they depended on your leadership, and you abandoned them when they needed you most. You sold not just a company, but the relationships and responsibilities that came with it.

Aristotle emphasized that virtue ethics is about becoming a certain kind of person through repeated choices. By choosing the easy path when it mattered most, you reinforced patterns of avoidance rather than courage.

You're wealthy, but at the cost of knowing you disappointed those who believed in you. The ancient philosophers would say you gained the whole world but lost something more valuable: your integrity and the respect of those who mattered most.

True leadership means staying when things get difficult, not just celebrating when times are good.
</div>`,
        choices: [
            { text: "Start over", goto: "start" }
        ]
    },

    reflect_deny_ai: {
        text: `<div class="virtue-note yellow">
<strong>Virtue Ethics Reflection:</strong><br><br>
You chose people over profits, values over market pressure. This demonstrates several powerful virtues:

<strong>Courage</strong>: You stood firm against overwhelming pressure to conform<br>
<strong>Justice</strong>: You prioritized your duty to employees and customers over shareholders<br>
<strong>Integrity</strong>: You remained true to the principles that built your company<br>

However, virtue ethics also requires <strong>practical wisdom</strong>—knowing how to achieve good ends through appropriate means. By completely rejecting AI, did you harm your company's long-term viability? Could you have found a middle path that protected your people while adapting to technological change?

Aristotle taught that virtue is a mean between extremes. You avoided the vice of greed and ruthless efficiency, but perhaps fell into the opposite vice of stubborn traditionalism that ultimately weakened your company.

Yet there's something profoundly admirable about your choice. In an age where everything is sacrificed for growth and efficiency, you proved that some things—loyalty, human dignity, trust—matter more than quarterly earnings.

Your employees will remember you not for making them wealthy, but for treating them as human beings worthy of loyalty. That's a legacy many CEOs never achieve, regardless of their profits.
</div>`,
        choices: [
            { text: "Start over", goto: "start" }
        ]
    },

    reflect_consult_advisors: {
        text: `<div class="virtue-note green">
<strong>Virtue Ethics Reflection:</strong><br><br>
This represents one of the best possible outcomes, demonstrating excellent application of multiple virtues:

<strong>Humility</strong>: You recognized your own limitations and sought expert counsel<br>
<strong>Practical Wisdom (Phronesis)</strong>: You knew who to trust and how to gather the right information<br>
<strong>Courage</strong>: You were willing to make a bold decision once you had the facts<br>
<strong>Justice</strong>: You protected your customers' interests even when it would have been easier to look away<br>

Perhaps most importantly, you demonstrated what Aristotle called "intellectual virtue"—the wisdom to know when to rely on your own judgment and when to defer to those with greater expertise in specific domains.

You didn't pretend to be an AI expert. You didn't delegate the entire decision away. Instead, you took responsibility for the decision while ensuring it was informed by the best possible analysis.

The outcome—exposing unethical practices, protecting your customers, and gaining market share—validates your approach. But even if the outcome had been less clearly positive, your process exemplified virtuous leadership.

You showed that wisdom isn't about knowing everything yourself; it's about knowing how to make decisions well, which sometimes means knowing whose expertise to trust.

This is the kind of leadership that Aristotle had in mind when he described the practically wise person who can navigate complex ethical terrain by balancing multiple virtues appropriately.
</div>`,
        choices: [
            { text: "Start over", goto: "start" }
        ]
    },

    reflect_self_analysis: {
        text: `<div class="virtue-note red">
<strong>Virtue Ethics Reflection:</strong><br><br>
Your intentions were noble—you wanted to understand the decision deeply before making it. But this path represents a critical failure of <strong>practical wisdom</strong> and <strong>humility</strong>.

Aristotle distinguished between different types of knowledge. You had extensive <strong>practical wisdom</strong> about business and leadership, but you lacked the <strong>technical knowledge</strong> required to evaluate AI systems. The virtuous response would have been recognizing this distinction.

Your failure stems from <strong>pride</strong>—the belief that because you'd been successful in the past, you could master any domain through sheer effort. But wisdom includes knowing the limits of one's expertise and when to rely on others.

The Dunning-Kruger effect was at play: you didn't know enough about AI to recognize how much you didn't know. Your outdated engineering education gave you false confidence.

Moreover, you wasted precious time and organizational resources pursuing a path that could never succeed. Your employees needed decisive leadership, and instead they got an aging CEO stubbornly trying to prove he could still do everything himself.

This is what Aristotle might call the vice of "unjustified self-regard"—an excess of confidence that leads to poor decisions. True wisdom includes knowing when to lead from the front and when to orchestrate expertise you don't personally possess.

The lesson: leadership isn't about being the smartest person in the room. It's about knowing how to utilize the smartest people in the room.
</div>`,
        choices: [
            { text: "Start over", goto: "start" }
        ]
    },

    reflect_half_acceptance: {
        text: `<div class="virtue-note yellow">
<strong>Virtue Ethics Reflection:</strong><br><br>
You demonstrated <strong>practical wisdom</strong> by seeking a compromise between competing demands: operational efficiency versus data protection, technological adaptation versus human employment.

Aristotle taught that virtue often lies in the mean between extremes. You avoided both complete rejection of AI (stubborn traditionalism) and complete embrace (reckless adoption). This shows <strong>temperance</strong>—moderation in response to pressure.

However, your outcome reveals a tension in virtue ethics: sometimes the middle path satisfies no one completely. Your compromise protected customer data (demonstrating <strong>justice</strong> toward customers) but alienated some employees (failure of <strong>loyalty</strong>?) while disappointing those pushing for full AI adoption (failure of <strong>innovation</strong>?).

Did you demonstrate wisdom by balancing competing concerns, or did you lack the <strong>courage</strong> to take a clear ethical stance? Were you prudent or merely cautious? These questions don't have easy answers.

Your steady profits suggest competence, but the cultural tension suggests you may have failed to lead your organization with a clear vision. Virtue ethics values not just outcomes but the unity of purpose and character.

Perhaps the lesson is that some decisions require bold leadership rather than careful compromise. Or perhaps you demonstrated precisely the kind of practical wisdom needed in an ethically ambiguous situation where no perfect solution exists.

Aristotle might say: you acted with moderate virtue, which is good, but perhaps not with excellence—which is what makes someone truly virtuous.
</div>`,
        choices: [
            { text: "Start over", goto: "start" }
        ]
    },

    reflect_wait: {
        text: `<div class="virtue-note red">
<strong>Virtue Ethics Reflection:</strong><br><br>
This outcome represents one of the most instructive failures in virtue ethics: the paralysis that comes from excessive caution masquerading as wisdom.

You failed to demonstrate <strong>courage</strong>—not in the sense of recklessness, but in the Aristotelian sense of acting appropriately despite fear and uncertainty. <strong>Courage</strong> is the mean between cowardice (your path) and recklessness (acting without any deliberation).

You also failed in <strong>practical wisdom (phronesis)</strong>. True wisdom isn't just gathering information—it's knowing when you have enough information to act, and recognizing that perfect information is impossible. You confused endless deliberation with careful consideration.

Aristotle warned against the vice of indecisiveness. At some point, the refusal to decide becomes its own decision—a decision to cede control to circumstances rather than shape them through leadership.

Your employees and board lost confidence not because you made the wrong choice, but because you made no choice. Leadership requires accepting the burden of uncertainty and acting with the best judgment available.

The philosopher Søren Kierkegaard wrote that "anxiety is the dizziness of freedom." You became so dizzy contemplating the decision that you froze entirely. This is perhaps the most common failure of leadership: not malice or incompetence, but simple paralysis.

The virtuous leader acts decisively when action is required, accepting that they might be wrong, but understanding that inaction in the face of necessary decision is guaranteed failure.
</div>`,
        choices: [
            { text: "Start over", goto: "start" }
        ]
    },

    reflect_conduct_insights: {
        text: `<div class="virtue-note green">
<strong>Virtue Ethics Reflection:</strong><br><br>
This represents an exemplary application of virtue ethics, perhaps the best possible outcome. You demonstrated:

<strong>Courage</strong>: You took a significant risk investing in unproven capabilities rather than choosing the easy path of outsourcing<br>
<strong>Practical Wisdom</strong>: You recognized the limits of your own expertise and hired those who possessed it, learning from them rather than pretending to be an expert<br>
<strong>Justice</strong>: You protected customer data and minimized harm to your employees<br>
<strong>Temperance</strong>: You resisted pressure for quick results, taking the time to do things properly<br>
<strong>Humility</strong>: You learned extensively without letting pride prevent you from acknowledging what you didn't know<br>

Most importantly, you demonstrated what Aristotle called <strong>megalopsychia</strong>—often translated as "greatness of soul" or "proper pride." This is the virtue of someone who has genuine excellence and is aware of it, acting accordingly. You took on a challenge worthy of your capabilities while recognizing where you needed help.

You didn't just adapt to change—you shaped it according to your values. You proved that ethical leadership and business success aren't opposites; they can reinforce each other when guided by wisdom.

Your approach also demonstrates the virtue of <strong>patience</strong>—not the paralysis of indecision, but the discipline to do difficult things properly rather than quickly. You built something sustainable rather than grabbing short-term gains.

This is what virtue ethics in leadership looks like: navigating complex challenges by balancing multiple virtues, adapting to new realities without abandoning core principles, and taking responsibility for outcomes while empowering others to contribute their expertise.

Aristotle would point to you as an example of the practically wise leader—someone who achieved <em>eudaimonia</em> (flourishing) not just for themselves, but for their entire organization.
</div>`,
        choices: [
            { text: "Start over", goto: "start" }
        ]
    }
};

function displayPassage(passageId) {
    const passage = passages[passageId];
    let html = `<div class="passage">
        <p>${passage.text}</p>`;
    
    passage.choices.forEach(choice => {
        html += `<button class="choice" onclick="displayPassage('${choice.goto}')">${choice.text}</button>`;
    });
    
    html += `</div>`;
    document.getElementById('game-content').innerHTML = html;
    window.scrollTo(0, 0);
}

// Start the game
displayPassage('start');
