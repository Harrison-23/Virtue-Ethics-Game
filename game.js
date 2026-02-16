const passages = {
    start: {
        text: `You've built this company from the ground up over the past four decades. As founder, president, and CEO, you've stuck it out through financial crises, pivoted through technological revolutions, and built a reputation for integrity and respect. But now, at 68, you feel the weight of time. Your reflexes aren't what they used to be, and the emerging technologies sometimes seem more like alien technology than the 1s and 0s that you once knew.

Today, a representative from DaVinci AI, one of the hottest AI companies in Silicon Valley, sits across from you in your office. They're rapidly gaining market share, and they're here with a proposition: integrate their AI systems into your company's operations.

"AI is the future," they say with a confident smile. "It's a money maker. Every single one of our clients have seen favorable profits." The question is: will you lead, follow, or fall behind?"

You have a choice to make, perhaps the most important of your career. What do you say?`,
        choices: [
            { text: "Confront the situation yourself, this is your last shabang as CEO", goto: "confront" },
            { text: "Gradually delegate responsibilities to your trusted apprentice and wind down your career", goto: "report" },
            { text: "Sell the company off and retire with a large profit", goto: "ignore" },
            { text: "Monitor the AI situation for another quarter before commiting", goto: "document" }
        ]
    },

    confront: {
        text: `You decide this is your last major decision as CEO, your final opportunity to create a legacy. You dismiss the DaVinci AI representative politely but firmly, saying you'll need to think about this decision carefully and make your own assessment.

This is your company. You built it. You are sat in the pilot's seat, and the controls are now at your fingertips.

What's the order, captain?`,
        choices: [
            { text: "Deny AI altogether, profit is secondary to your employees and history", goto: "deny_ai" },
            { text: "Consult your two most trusted senior advisors", goto: "consult_advisors" },
            { text: "Take the wheel and analyze AI's future yourself through personal research", goto: "self_analysis" }
        ]
    },

    report: {
        text: `You look at the eager face of the DaVinci AI representative, then at the stack of reports on your desk that you've been meaning to review for weeks. 

You think of Leonardo, your apprentice of seven years. He's sharp, understands the new technologies better than you do, and has proven himself time and again. You hired him specifically to be your successor. Maybe it's time to let him prove he's ready.

"Give me another quarter to consult my second-in-command," you tell the DaVinci rep. "I hope you make the right decision," he says with a slightly upturned smile as he exits the office.

Over the next two months you slowly slough responsibilities off to Leonardo. He's an intelligent man and assumes his new position quickly. Your farewell is quiet 

and Leonardo decides that a moderate integration of AI will generate profits without too many layoffs.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_report" }
        ]
    },

    ignore: {
        text: `You sit in your office after the DaVinci AI representative leaves, gazing over the twinkling cityscape you once wished to climb. The cityscape you now preside over. It's been a long journey and your feet are sore. You have been exploring options for retirement over the past couple years, and now might be the time. In the following weeks you explore larger tech conglomerates that have long been interested in your assets. You resign from management, sell your market shares, and cash out the company. You lay upon an impressive sum of your own money, and nobody elses. Upon retirement, all the regular decencies are made. Cake and candles. Your last tour of the offices do not gather much applause. You notice some familiar faces, especially among the older employees who've been with you for decades, look betrayed. `,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_ignore" }
        ]
    },

    document: {
        text: `"This is interesting," you tell the DaVinci AI representative, "but I need to see more data. Let me monitor how AI integration plays out in the market for another quarter or two. Come back to me then." Over the next few quarters you analyze how AI is shaping the market and the impressive profits that other companies are garnering. Your team also dive deeper into the history and practices of DaVinci AI. The results are slightly ambiguous, it is not entirely clear what their data is used for, but there is nothing inherently suspicious or illegal. DaVinvi AI have seen impressive growth since its conception two years ago and have successfully integrated with some of your top competitors. Their numbers have soared. DaVinci's origins are slightly grey but everything looks promising on paper. What do you do?`,
        choices: [
            { text: "Accept AI integration on the conditions that DaVinci has no access to customer records", goto: "half_acceptance" },
            { text: "Wait one more quarter for additional information, see how it plays out", goto: "confront_delayed" }
        ]
    },

    deny_ai: {
        text: `You call an all hands meeting. The auditorium is packed, employees from every department watching you on the stage where you've made so many announcements over the years.

"I've made a decision about the AI proposal," you begin. "After careful consideration, we will not be integrating third party AI systems into our operations."

There's a murmur in the crowd.

"I know this might seem like we're falling behind. I know the analysts will criticize this decision. But this company was built on trust between us and our customers, and trust between me and you. I will not risk your jobs or our customers' data for a quarterly earnings boost."

The room is silent for a moment. Then someone in the back starts clapping. It spreads. Within moments, the entire auditorium is on its feet.

Over the next two years, your profits do decline slowly but steadily. Competitors with AI integration gain market share. Your stock price stagnates. You eventually retire, and the board reluctantly begins exploring AI options after you're gone.

But every employee who was there that day remembers. You're invited to company events for years afterward. When you walk through the office, people stop to shake your hand. They call you "a man of the people."

You chose your people over profits. History will decide if that was wise, but your conscience is clear.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_deny_ai" }
        ]
    },

    consult_advisors: {
        text: `You call your two most trusted advisors into your office: Sarah, your CFO of 15 years, and James, your Chief Technology Officer.

"I need your honest assessment," you tell them. "No sugarcoating. Should we integrate DaVinci AI's AI systems?"

They work for six weeks, bringing in cybersecurity experts, data ethicists, and legal consultants. They visit companies that have integrated DaVinci AI's systems. They interview former DaVinci AI employees under confidentiality agreements.

When they return to your office, their faces are grim.

"We found something," Sarah says, sliding a folder across your desk. "DaVinci AI has been selling anonymized user data to third party research firms. It's technically legal, hidden deep in their terms of service, but it's highly unethical. None of the companies using their system seem to know the full extent of it."

"If we integrate their system," James adds, "we'd be exposing our customers to this practice."

You immediately decline DaVinci AI's proposal and quietly leak your findings to a tech journalist. The story breaks three weeks later. DaVinci AI's stock crashes. Several of your competitors who'd integrated their systems scramble to remove them.

Your company gains market share as customers flock to a business that prioritized their privacy. Your advisors' diligence saved your reputation and turned a potential crisis into a competitive advantage.

You demonstrated practical wisdom and humility.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_consult_advisors" }
        ]
    },

    self_analysis: {
        text: `You decide to tackle this yourself. After all, you didn't build this company by relying on others to make the big decisions.

You spend evenings and weekends reading white papers, watching conference talks, taking online courses about machine learning and neural networks. You're determined to understand AI deeply enough to make an informed decision.

But the technology moves faster than you can learn. The terminology is dense. The mathematics are beyond what you remember from your engineering degree forty years ago. You find yourself confused by concepts that younger engineers grasp intuitively.

Still, you press on. After three months of research, you develop what you believe is a comprehensive AI integration strategy. You present it to your board with confidence.

Your chief of technology raises his hand hesitantly. "With respect, sir, this approach is based on outdated informatoin about how modern AI systems work. None of this architecture you're proposing... would even be implementable. We would be vulnerable to cyber attacks and many other things."

Your face flushes. Other board members shift uncomfortably.

You realize too late that your analysis was fundamentally flawed. You spent months going down the wrong path because you were too proud to admit that this technology had passed you by. The board votes to table the AI discussion and suggests bringing in someone else.

Your authority is diminished. Whispers start about whether it's time for new leadership. Within six months, you announce your retirement, earlier than you'd planned.

You learned the hard lesson that wisdom sometimes means knowing the limits of your own expertise.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_self_analysis" }
        ]
    },

    half_acceptance: {
        text: `You negotiate a middle path with DaVinci AI. You'll integrate their AI systems for operational efficiency inventory management, logistics, some customer service automation, but you explicitly deny them access to your customer database and sensitive records.

"We'll use your tools," you tell them, "but our customer data stays behind our firewall."

DaVinci AI agrees, though they're clearly disappointed with the limited scope.

The integration proceeds. Your efficiency improves modestly. When news breaks about your partial AI adoption, several long time employees particularly in customer service departments resign. They feel betrayed that you're replacing human judgment with algorithms, even in limited ways.

Your profits remain steady, but your company culture slightly shifts. There's a new tension between the previous creativity and free expression that used to take place and the now more streamlined process.

You retire two years later, unsure whether your compromise was wisdom or cowardice. You protected customer data but lost some of the human touch that made your company special. 

You demonstrated practical wisdom by finding a middle ground and keeping the company, but perhaps at the cost of a clear ethical stance that could have defined your legacy more strongly.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_half_acceptance" }
        ]
    },

    confront_delayed: {
        text: `You wait another quarter, watching carefully as DaVinci AI continues its expansion. The company's profits surge even higher. They sign deals with two more major corporations. Industry awards pile up.

But still, no one has definitively clarified what exactly happens to the user data that flows through their systems. The company issues vague statements about "industry leading security," but provides no specific details. Every inquiry is met with odd assurance and unspecific responses.

The lack of transparency bothers you more than ever, but you still don't have concrete evidence of wrongdoing. Other companies are really flying now. What do you do?`,
        choices: [
            { text: "Wait another quarter—the information is still too inconclusive", goto: "explain_reasoning" },
            { text: "Invest in developing your own AI capabilities in house", goto: "conduct_insights" }
        ]
    },

    explain_reasoning: {
        text: `"One more quarter," you tell your executive team. "The information is still too inconclusive to make such a major decision. We can't take this risk without more clarity."

Your apprentice looks frustrated. "We've been saying that for six months now. Meanwhile, our competitors are pulling ahead."

But you stand firm. You wait another quarter. Then another.

Each time you're about to make a decision, some new piece of ambiguous information emerges that makes you hesitate. Maybe DaVinci AI isn't completely transparent, but they're not doing anything illegal. Maybe your concerns are just the anxiety of an aging executive who doesn't fully understand the technology.

A year passes. Then eighteen months. Your market share erodes steadily. Talented young employees leave for companies with "cutting edge tech." Your stock price stagnates while competitors soar.

Finally, the board votes to remove you as CEO. They bring in a younger leader who immediately signs a deal with DaVinci AI.

You retired not because you made the wrong decision, but because you failed to make any decision at all. Paralysis masked as caution became its own form of failure.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_wait" }
        ]
    },

    conduct_insights: {
        text: `You make a bold decision: if you can't trust external AI providers, you'll build your own.

You allocate significant resources to creating an in house AI research division. You hire top talent from universities and competing firms. You partner with academic institutions. You invest in the infrastructure needed to develop proprietary AI systems.

It's expensive and risky. Your board is nervous. Analysts question the decision. But you're committed.

Over the next eighteen months, your team makes remarkable progress. They develop AI tools specifically designed for your industry, with transparent data practices and strong ethical guidelines built in from the ground up. Because you control the entire system, you can ensure customer data is protected.

The integration is gradual, thoughtful, and designed to augment your workforce rather than replace them. You retrain employees to work alongside AI tools, creating new roles rather than eliminating old ones. Layoffs are minimal, far fewer than competitors who adopted third party solutions experienced such as DaVinci AI.

During this time, an investigative journalist breaks the story you suspected: DaVinci AI has been selling user data to research firms in ways that, while technically legal, violate privacy protection. Companies that integrated their systems face backlash and lawsuits.

Your company emerges stronger. You learned extensively about the technology in the process, not by pretending to be an expert, as you once might have done, but by hiring experts and learning from them.

When you retire two years later, you're celebrated as a leader who adapted to change without compromising values. You demonstrated patience, wisdom, courage to invest in an uncertain outcome, and commitment to doing things the right way rather than the easy way.`,
        choices: [
            { text: "Reflect on this outcome", goto: "reflect_conduct_insights" }
        ]
    },

    reflect_report: {
        text: `<div class="virtue-note yellow">
<strong>Virtue Ethics Reflection:</strong><br><br>
You demonstrated several important virtues in this path: <strong>humility</strong> (recognizing your apprentice's superior understanding), <strong>trust</strong> (delegating to someone you'd trained), and <strong>practical wisdom</strong>, knowing when to step back. You assured the existence and progress of a company that you once proudly built yourself. And by doing so you entrusted the company with someone you helped succeed themselves. However, you also avoided the burden of making the hard decision yourself. Did you demonstrate <strong>courage</strong> by empowering the next generation, or did you evade responsibility at a crucial legacy defining moment?

</div>`,
        choices: [
            { text: "Start over", goto: "start" }
        ]
    },

    reflect_ignore: {
        text: `<div class="virtue-note red">
<strong>Virtue Ethics Reflection:</strong><br><br>
You chose financial security and personal gain over responsibility to your employees and the legacy you'd built. This represents a failure of several key virtues. First of all, you lacked <strong>Courage</strong>. You ran from a difficult decision and didn't give seocond thought. Despite your long history of making hard decisons you sold out in the end. Second, <strong>Justice</strong>, you valued yourself over all of the human connection and friendships that you built over the last 30 years. And lastly, <strong>Temperance</strong>, you allowed the temptation of money to spill over into your values. The prize looked big and you took it. The looks of betrayal from your long time employees reveal a deeper truth: they depended on your leadership, and you abandoned them when they needed you most. You sold not just a company, but the relationships and responsibilities that came with it. Hope you like the smell of cash.
</div>`,
        choices: [
            { text: "Start over", goto: "start" }
        ]
    },

    reflect_deny_ai: {
        text: `<div class="virtue-note yellow">
<strong>Virtue Ethics Reflection:</strong><br><br>
You chose people over profits, and valued the connection of human beings over profit. This demonstrates several powerful virtues such as <strong>Courage</strong>. you stood tall and swam against the current. Showing courage for your employees and standing up against AI automation. You also showed <strong>Integrity</strong>, remaining true to yourself and the values that built your company. Despite all this, you showed a lack of <strong>practical wisdom</strong>. You retained the hearts and souls of those whom respect you but almost certainly conceded the future of the company itself. By completely rejecting AI your company's long term success has been highly dampered but you kept the human essence alive. You have lived and died by your values, A valiant life indeed.
</div>`,
        choices: [
            { text: "Start over", goto: "start" }
        ]
    },

    reflect_consult_advisors: {
        text: `<div class="virtue-note green">
<strong>Virtue Ethics Reflection:</strong><br><br>
This represents one of the best possible outcomes, demonstrating excellent application of multiple virtues such as <strong>Humility</strong>. You recognized your limitations and decided to seek advice. You showed strong <strong>Courage</strong> in confronting the situation head on, but also strong <strong>practical wisdom</strong> by knowing the right moves to makes, whether they came from your own brain or not. You protected your customers data, the relationships that you have curated, and the company that you created all at once. It looks like you will be able to put your feet up these last couple years and see the child that you created grow and flourish without compromising your own values.
</div>`,
        choices: [
            { text: "Start over", goto: "start" }
        ]
    },

    reflect_self_analysis: {
        text: `<div class="virtue-note red">
<strong>Virtue Ethics Reflection:</strong><br><br>
Your intentions were noble, you wanted to understand the decision deeply before making it. But this path represents a critical failure of <strong>practical wisdom</strong> and <strong>humility</strong>. You thought that you could handle the situation all by yourself. Sometimes we need to realize that we are out of our own powerhouses. With your extensive experience you should have known what you don't know. It was a valiant effort in confronting the situation head-on but you ultimately failed yourself and others.
</div>`,
        choices: [
            { text: "Start over", goto: "start" }
        ]
    },

    reflect_half_acceptance: {
        text: `<div class="virtue-note yellow">
<strong>Virtue Ethics Reflection:</strong><br><br>
You demonstrated <strong>practical wisdom</strong> by seeking a compromise between the competing demands of the current market and your ethical values. You showed strong <strong>temperance</strong>, not allowing the potential of a greater profit and refusing to sellout when the data of your customers was potentially at stake. Virtue ethics is all about how the solution lies between the extremes, and you certianly displayed that value. The downside is that you demonstrated a slight failure of <strong>loyalty</strong>, without a doubt the integration of third-party AI will cause moderate layoffs witin the company. Some employees have been alienated but at least the company is still functioning at large. Customers are happy their data wasn't caught in DaVinci's scheme but you will also wonder what would have happened if you wouldn't have had to loose an amount of the company's trust.
</div>`,
        choices: [
            { text: "Start over", goto: "start" }
        ]
    },

    reflect_wait: {
        text: `<div class="virtue-note red">
<strong>Virtue Ethics Reflection:</strong><br><br>
This outcome represents one of crucial failures in virtue ethics. The paralysis that comes from excessive caution without the use of real <strong>practical wisdom</strong>. You failed to demonstrate any sense of <strong>courage</strong>, not in the sense of recklessness, but in the sense of acting appropriately despite fear and uncertainty. <strong>Courage</strong> is the mean between cowardice and recklessness (acting without any deliberation). The operation blew up in your face, you have gone down with the ship.
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
You didn't just adapt to change, you shaped it according to your values. You proved that ethical leadership and business success aren't opposites; they can reinforce each other when guided by wisdom.
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
