/**
 * Genesis Internationalization System
 * Supports: English (UK), German, Japanese
 */

const translations = {
    'en-GB': {
        // Navigation
        'nav.howItWorks': 'How it works',
        'nav.whatYouGet': 'What you get',
        'nav.features': 'Features',
        'nav.faq': 'FAQ',
        'nav.blog': 'Blog',
        'nav.register': 'Get your first profile',

        // Hero
        'hero.badge': 'Coming Soon',
        'hero.title': 'Know which posts worked—and why',
        'hero.subtitle': 'Genesis analyses your LinkedIn content against your goals and shows you whether results came from your strategy—or from something else.',
        'hero.cta.primary': 'Get your first profile',
        'hero.cta.secondary': 'See how it works',

        // Mockup
        'mockup.title': 'Genesis Profile',
        'mockup.badge': 'January 2026',
        'mockup.pass': 'Pass',
        'mockup.fail': 'Fail',
        'mockup.coincidence': 'Coincidence',
        'mockup.uncertain': 'Uncertain',
        'mockup.confidence': 'Pattern confidence',

        // Problem Section
        'problem.label': 'The Problem',
        'problem.title': 'LinkedIn analytics tell you what happened.<br>They don\'t tell you why.',
        'problem.text1': 'You\'ve seen a post perform well. The likes are there. The comments look good. But was it the hook that worked? The timing? The topic? Or was it something else entirely—something you couldn\'t repeat if you tried?',
        'problem.text2': 'Most analytics show you numbers without context. They tell you a post got 50,000 impressions but not whether those impressions came from the strategy you intended or from an algorithm quirk you\'ll never understand.',
        'problem.text3': 'Teams end up doubling down on tactics that worked once by accident, while ignoring approaches that failed for fixable reasons. Without knowing why something worked, you can\'t reliably do it again.',

        // Solution Section
        'solution.label': 'The Solution',
        'solution.title': 'Genesis tells you if results happened<br>for the right reasons',
        'solution.text1': 'Genesis is a decision intelligence product for LinkedIn marketing. It analyses your content performance against your declared goals and tells you whether your results align with your intent.',
        'solution.text2': 'When a post performs well, Genesis shows you whether it performed because of your strategy—or despite it. When a post underperforms, Genesis shows you whether the approach was flawed or just unlucky.',
        'solution.text3': 'This means you can build on what actually works, not what happened to work once. Your strategy improves based on evidence, not guesswork.',

        // How It Works Section
        'howItWorks.label': 'How It Works',
        'howItWorks.title': 'Three steps to understanding what\'s working',
        'howItWorks.step1.title': 'Declare your intent',
        'howItWorks.step1.text': 'Before any analysis happens, you tell Genesis what you\'re trying to achieve. What\'s the goal of your LinkedIn presence? Who are you trying to reach? What action do you want them to take? This isn\'t optional—it\'s foundational. Genesis can\'t judge success without knowing what success looks like to you.',
        'howItWorks.step2.title': 'Upload your data',
        'howItWorks.step2.text': 'Export your LinkedIn data (CSV or XLSX) and upload it to Genesis. No complex integrations. No API connections to manage. Just your data, which takes about two minutes to prepare.',
        'howItWorks.step3.title': 'Receive your profile',
        'howItWorks.step3.text': 'Genesis analyses your content against your declared intent and delivers a Genesis Profile—a clear breakdown of which posts succeeded for the right reasons, which failed cleanly, which succeeded by accident, and which need more data. Delivered monthly via email or Slack.',

        // What You Get Section
        'whatYouGet.label': 'The Genesis Profile',
        'whatYouGet.title': 'A monthly verdict on your LinkedIn strategy',
        'whatYouGet.subtitle': 'The Genesis Profile is a comprehensive analysis delivered every month. It includes:',
        'whatYouGet.feature1.title': 'Verdict breakdown',
        'whatYouGet.feature1.text': 'Every post receives one of four verdicts: Pass (success by design), Fail (clean miss), Coincidence (success by accident), or Uncertain (insufficient data). No ambiguity.',
        'whatYouGet.feature2.title': 'Pattern analysis',
        'whatYouGet.feature2.text': 'Genesis identifies repeatable patterns in your content—approaches that consistently produce results for the right reasons. It also flags patterns you should avoid.',
        'whatYouGet.feature3.title': 'Alignment score',
        'whatYouGet.feature3.text': 'A single metric that shows how well your results align with your stated intent. Track this over time to see if your strategy is improving.',
        'whatYouGet.feature4.title': 'Reasoning traces',
        'whatYouGet.feature4.text': 'For each verdict, Genesis provides its reasoning. You\'ll see exactly why a post received its classification, so you can learn from both successes and failures.',

        // Who It's For Section
        'whoItsFor.label': 'Who Genesis Is For',
        'whoItsFor.title': 'Built for people who need to justify their approach',
        'whoItsFor.persona1.title': 'Heads of marketing at growing companies',
        'whoItsFor.persona1.text': 'You\'re accountable for results, but you\'re tired of presenting metrics without knowing if they mean anything. Genesis gives you evidence to back up your strategy—or evidence that it\'s time to change course.',
        'whoItsFor.persona2.title': 'Founders doing their own content',
        'whoItsFor.persona2.text': 'You don\'t have time to guess what works. You need to know which of your approaches is worth continuing and which is wasting your limited time. Genesis tells you directly.',
        'whoItsFor.persona3.title': 'Agency owners managing multiple clients',
        'whoItsFor.persona3.text': 'You need to show clients that your work is producing results for the right reasons—not just producing numbers. Genesis provides the proof that distinguishes your work from commodity content services.',

        // Features Section
        'features.label': 'Genesis Features',
        'features.title': 'What you get access to',
        'features.subtitle': 'Three tiers of access, each building on the last. Choose what fits your needs.',
        'features.core.name': 'Core',
        'features.core.tagline': 'The foundation',
        'features.advanced.name': 'Advanced',
        'features.advanced.tagline': 'Everything in Core, plus',
        'features.enterprise.name': 'Enterprise',
        'features.enterprise.tagline': 'Everything in Advanced, plus',
        'features.note': 'Ready to see which tier fits your needs?',
        'features.cta': 'Get early access',

        // FAQ Section
        'faq.label': 'Questions',
        'faq.title': 'Common questions, direct answers',
        'faq.q1.question': 'How is this different from LinkedIn Analytics?',
        'faq.q1.answer': 'LinkedIn Analytics tells you what happened—impressions, clicks, engagement rate. Genesis tells you why it happened and whether the "why" matches what you intended. LinkedIn shows you numbers. Genesis shows you whether those numbers mean what you think they mean.',
        'faq.q2.question': 'What data do I need to provide?',
        'faq.q2.answer': 'You\'ll export your LinkedIn data using LinkedIn\'s built-in export feature (available in your account settings). This gives you a CSV or XLSX file containing your posts, their content, and their performance metrics. Upload that file to Genesis. No API integration required.',
        'faq.q3.question': 'How long until I get my first profile?',
        'faq.q3.answer': 'After you upload your data and declare your intent, you\'ll receive your first Genesis Profile within 5 business days. Subsequent profiles arrive on your chosen schedule (monthly, bi-weekly, or weekly depending on your plan).',
        'faq.q4.question': 'What if I don\'t have clear goals yet?',
        'faq.q4.answer': 'Genesis includes an intent-setting workshop as part of onboarding. We\'ll help you articulate what you\'re actually trying to achieve with your LinkedIn presence. If you\'re not sure what success looks like, we\'ll help you figure it out before analysis begins.',
        'faq.q5.question': 'Is my data secure?',
        'faq.q5.answer': 'Yes. Your LinkedIn data is encrypted at rest and in transit. It\'s stored in UK/EU data centres and is never shared with third parties for advertising or sold to anyone. We process your data solely to generate your Genesis Profile. See our Privacy Policy for full details.',
        'faq.q6.question': 'Can I cancel anytime?',
        'faq.q6.answer': 'Yes. Cancel with 30 days notice. After cancellation, your data is deleted within 30 days unless you request an export first. No penalties, no long-term contracts.',

        // CTA Section
        'cta.label': 'Get Started',
        'cta.title': 'Find out what\'s actually driving your results',
        'cta.subtitle': 'Start with your first Genesis Profile. See which of your LinkedIn posts succeeded for the right reasons—and which ones just got numbers.',
        'cta.placeholder': 'Enter your email',
        'cta.button': 'Get your first profile',
        'cta.note': '14-day evaluation period. No credit card required to start.',
        'cta.loading': 'Submitting...',
        'cta.success': 'Thanks! Check your inbox for confirmation.',
        'cta.error': 'Something went wrong. Please try again.',

        // Footer
        'footer.tagline': 'Decision intelligence for LinkedIn marketing. Know which posts worked—and why.',
        'footer.product': 'Product',
        'footer.company': 'Company',
        'footer.legal': 'Legal',
        'footer.about': 'About',
        'footer.blog': 'Blog',
        'footer.careers': 'Careers',
        'footer.contact': 'Contact',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.cookies': 'Cookie Policy',
        'footer.earlyAccess': 'Early access',
        'footer.copyright': '2026 Genesis. All rights reserved.',

        // Language selector
        'lang.select': 'Language'
    },

    'de': {
        // Navigation
        'nav.howItWorks': 'So funktioniert es',
        'nav.whatYouGet': 'Was Sie bekommen',
        'nav.features': 'Funktionen',
        'nav.faq': 'FAQ',
        'nav.blog': 'Blog',
        'nav.register': 'Erstes Profil erhalten',

        // Hero
        'hero.badge': 'Bald verfügbar',
        'hero.title': 'Wissen, welche Beiträge funktioniert haben—und warum',
        'hero.subtitle': 'Genesis analysiert Ihre LinkedIn-Inhalte anhand Ihrer Ziele und zeigt Ihnen, ob die Ergebnisse von Ihrer Strategie stammen—oder von etwas anderem.',
        'hero.cta.primary': 'Erstes Profil erhalten',
        'hero.cta.secondary': 'So funktioniert es',

        // Mockup
        'mockup.title': 'Genesis Profil',
        'mockup.badge': 'Januar 2026',
        'mockup.pass': 'Bestanden',
        'mockup.fail': 'Fehlgeschlagen',
        'mockup.coincidence': 'Zufall',
        'mockup.uncertain': 'Unsicher',
        'mockup.confidence': 'Mustervertrauen',

        // Problem Section
        'problem.label': 'Das Problem',
        'problem.title': 'LinkedIn-Analysen sagen Ihnen, was passiert ist.<br>Sie sagen nicht, warum.',
        'problem.text1': 'Sie haben gesehen, wie ein Beitrag gut performt hat. Die Likes sind da. Die Kommentare sehen gut aus. Aber war es der Hook, der funktioniert hat? Das Timing? Das Thema? Oder war es etwas ganz anderes—etwas, das Sie nicht wiederholen könnten, selbst wenn Sie es versuchen würden?',
        'problem.text2': 'Die meisten Analysen zeigen Ihnen Zahlen ohne Kontext. Sie sagen Ihnen, dass ein Beitrag 50.000 Impressionen hatte, aber nicht, ob diese Impressionen von der beabsichtigten Strategie stammten oder von einer Algorithmus-Eigenheit, die Sie nie verstehen werden.',
        'problem.text3': 'Teams verdoppeln am Ende ihren Einsatz bei Taktiken, die einmal zufällig funktioniert haben, während sie Ansätze ignorieren, die aus behebbaren Gründen gescheitert sind. Ohne zu wissen, warum etwas funktioniert hat, können Sie es nicht zuverlässig wiederholen.',

        // Solution Section
        'solution.label': 'Die Lösung',
        'solution.title': 'Genesis sagt Ihnen, ob Ergebnisse<br>aus den richtigen Gründen entstanden sind',
        'solution.text1': 'Genesis ist ein Entscheidungsintelligenz-Produkt für LinkedIn-Marketing. Es analysiert Ihre Content-Performance anhand Ihrer erklärten Ziele und sagt Ihnen, ob Ihre Ergebnisse mit Ihrer Absicht übereinstimmen.',
        'solution.text2': 'Wenn ein Beitrag gut performt, zeigt Ihnen Genesis, ob er wegen Ihrer Strategie performt hat—oder trotz ihr. Wenn ein Beitrag unterperformt, zeigt Ihnen Genesis, ob der Ansatz fehlerhaft war oder einfach nur Pech.',
        'solution.text3': 'Das bedeutet, Sie können auf dem aufbauen, was wirklich funktioniert, nicht auf dem, was zufällig einmal funktioniert hat. Ihre Strategie verbessert sich basierend auf Beweisen, nicht auf Vermutungen.',

        // How It Works Section
        'howItWorks.label': 'So funktioniert es',
        'howItWorks.title': 'Drei Schritte zum Verständnis, was funktioniert',
        'howItWorks.step1.title': 'Erklären Sie Ihre Absicht',
        'howItWorks.step1.text': 'Bevor eine Analyse stattfindet, sagen Sie Genesis, was Sie erreichen möchten. Was ist das Ziel Ihrer LinkedIn-Präsenz? Wen möchten Sie erreichen? Welche Aktion sollen sie ausführen? Das ist nicht optional—es ist grundlegend. Genesis kann Erfolg nicht beurteilen, ohne zu wissen, wie Erfolg für Sie aussieht.',
        'howItWorks.step2.title': 'Laden Sie Ihre Daten hoch',
        'howItWorks.step2.text': 'Exportieren Sie Ihre LinkedIn-Daten (CSV oder XLSX) und laden Sie sie bei Genesis hoch. Keine komplexen Integrationen. Keine API-Verbindungen zu verwalten. Nur Ihre Daten, deren Vorbereitung etwa zwei Minuten dauert.',
        'howItWorks.step3.title': 'Erhalten Sie Ihr Profil',
        'howItWorks.step3.text': 'Genesis analysiert Ihre Inhalte anhand Ihrer erklärten Absicht und liefert ein Genesis-Profil—eine klare Aufschlüsselung, welche Beiträge aus den richtigen Gründen erfolgreich waren, welche sauber gescheitert sind, welche zufällig erfolgreich waren und welche mehr Daten benötigen. Monatlich per E-Mail oder Slack geliefert.',

        // What You Get Section
        'whatYouGet.label': 'Das Genesis-Profil',
        'whatYouGet.title': 'Ein monatliches Urteil über Ihre LinkedIn-Strategie',
        'whatYouGet.subtitle': 'Das Genesis-Profil ist eine umfassende Analyse, die jeden Monat geliefert wird. Es enthält:',
        'whatYouGet.feature1.title': 'Bewertungsaufschlüsselung',
        'whatYouGet.feature1.text': 'Jeder Beitrag erhält eine von vier Bewertungen: Bestanden (Erfolg durch Design), Fehlgeschlagen (klarer Fehlschlag), Zufall (zufälliger Erfolg) oder Unsicher (unzureichende Daten). Keine Mehrdeutigkeit.',
        'whatYouGet.feature2.title': 'Musteranalyse',
        'whatYouGet.feature2.text': 'Genesis identifiziert wiederholbare Muster in Ihren Inhalten—Ansätze, die konsequent Ergebnisse aus den richtigen Gründen liefern. Es markiert auch Muster, die Sie vermeiden sollten.',
        'whatYouGet.feature3.title': 'Übereinstimmungswert',
        'whatYouGet.feature3.text': 'Eine einzelne Metrik, die zeigt, wie gut Ihre Ergebnisse mit Ihrer erklärten Absicht übereinstimmen. Verfolgen Sie dies im Laufe der Zeit, um zu sehen, ob sich Ihre Strategie verbessert.',
        'whatYouGet.feature4.title': 'Begründungsspuren',
        'whatYouGet.feature4.text': 'Für jede Bewertung liefert Genesis seine Begründung. Sie werden genau sehen, warum ein Beitrag seine Klassifizierung erhalten hat, sodass Sie sowohl aus Erfolgen als auch aus Misserfolgen lernen können.',

        // Who It's For Section
        'whoItsFor.label': 'Für wen Genesis ist',
        'whoItsFor.title': 'Entwickelt für Menschen, die ihren Ansatz begründen müssen',
        'whoItsFor.persona1.title': 'Marketingleiter wachsender Unternehmen',
        'whoItsFor.persona1.text': 'Sie sind für Ergebnisse verantwortlich, aber Sie sind es leid, Metriken zu präsentieren, ohne zu wissen, ob sie etwas bedeuten. Genesis gibt Ihnen Beweise, um Ihre Strategie zu untermauern—oder Beweise, dass es Zeit ist, den Kurs zu ändern.',
        'whoItsFor.persona2.title': 'Gründer, die ihren eigenen Content erstellen',
        'whoItsFor.persona2.text': 'Sie haben keine Zeit zu raten, was funktioniert. Sie müssen wissen, welcher Ihrer Ansätze es wert ist, fortgesetzt zu werden, und welcher Ihre begrenzte Zeit verschwendet. Genesis sagt es Ihnen direkt.',
        'whoItsFor.persona3.title': 'Agenturinhaber mit mehreren Kunden',
        'whoItsFor.persona3.text': 'Sie müssen Kunden zeigen, dass Ihre Arbeit aus den richtigen Gründen Ergebnisse liefert—nicht nur Zahlen produziert. Genesis liefert den Beweis, der Ihre Arbeit von Standard-Content-Services unterscheidet.',

        // Features Section
        'features.label': 'Genesis-Funktionen',
        'features.title': 'Worauf Sie Zugriff erhalten',
        'features.subtitle': 'Drei Zugangsstufen, jede baut auf der vorherigen auf. Wählen Sie, was zu Ihren Bedürfnissen passt.',
        'features.core.name': 'Core',
        'features.core.tagline': 'Die Grundlage',
        'features.advanced.name': 'Advanced',
        'features.advanced.tagline': 'Alles in Core, plus',
        'features.enterprise.name': 'Enterprise',
        'features.enterprise.tagline': 'Alles in Advanced, plus',
        'features.note': 'Bereit zu sehen, welche Stufe zu Ihren Bedürfnissen passt?',
        'features.cta': 'Frühen Zugang erhalten',

        // FAQ Section
        'faq.label': 'Fragen',
        'faq.title': 'Häufige Fragen, direkte Antworten',
        'faq.q1.question': 'Wie unterscheidet sich das von LinkedIn Analytics?',
        'faq.q1.answer': 'LinkedIn Analytics sagt Ihnen, was passiert ist—Impressionen, Klicks, Engagement-Rate. Genesis sagt Ihnen, warum es passiert ist und ob das "Warum" mit dem übereinstimmt, was Sie beabsichtigt haben. LinkedIn zeigt Ihnen Zahlen. Genesis zeigt Ihnen, ob diese Zahlen das bedeuten, was Sie denken.',
        'faq.q2.question': 'Welche Daten muss ich bereitstellen?',
        'faq.q2.answer': 'Sie exportieren Ihre LinkedIn-Daten mit der integrierten Exportfunktion von LinkedIn (verfügbar in Ihren Kontoeinstellungen). Das gibt Ihnen eine CSV- oder XLSX-Datei mit Ihren Beiträgen, deren Inhalt und deren Performance-Metriken. Laden Sie diese Datei bei Genesis hoch. Keine API-Integration erforderlich.',
        'faq.q3.question': 'Wie lange dauert es, bis ich mein erstes Profil erhalte?',
        'faq.q3.answer': 'Nachdem Sie Ihre Daten hochgeladen und Ihre Absicht erklärt haben, erhalten Sie Ihr erstes Genesis-Profil innerhalb von 5 Werktagen. Nachfolgende Profile kommen nach Ihrem gewählten Zeitplan (monatlich, zweiwöchentlich oder wöchentlich je nach Plan).',
        'faq.q4.question': 'Was, wenn ich noch keine klaren Ziele habe?',
        'faq.q4.answer': 'Genesis beinhaltet einen Workshop zur Absichtserklärung als Teil des Onboardings. Wir helfen Ihnen zu artikulieren, was Sie tatsächlich mit Ihrer LinkedIn-Präsenz erreichen möchten. Wenn Sie sich nicht sicher sind, wie Erfolg aussieht, helfen wir Ihnen, es herauszufinden, bevor die Analyse beginnt.',
        'faq.q5.question': 'Sind meine Daten sicher?',
        'faq.q5.answer': 'Ja. Ihre LinkedIn-Daten werden im Ruhezustand und während der Übertragung verschlüsselt. Sie werden in UK/EU-Rechenzentren gespeichert und niemals für Werbung an Dritte weitergegeben oder an jemanden verkauft. Wir verarbeiten Ihre Daten ausschließlich, um Ihr Genesis-Profil zu erstellen. Siehe unsere Datenschutzrichtlinie für vollständige Details.',
        'faq.q6.question': 'Kann ich jederzeit kündigen?',
        'faq.q6.answer': 'Ja. Kündigen Sie mit 30 Tagen Frist. Nach der Kündigung werden Ihre Daten innerhalb von 30 Tagen gelöscht, es sei denn, Sie fordern zuerst einen Export an. Keine Strafen, keine langfristigen Verträge.',

        // CTA Section
        'cta.label': 'Loslegen',
        'cta.title': 'Finden Sie heraus, was Ihre Ergebnisse wirklich antreibt',
        'cta.subtitle': 'Beginnen Sie mit Ihrem ersten Genesis-Profil. Sehen Sie, welche Ihrer LinkedIn-Beiträge aus den richtigen Gründen erfolgreich waren—und welche nur Zahlen bekommen haben.',
        'cta.placeholder': 'E-Mail eingeben',
        'cta.button': 'Erstes Profil erhalten',
        'cta.note': '14-tägige Evaluierungsphase. Keine Kreditkarte erforderlich.',
        'cta.loading': 'Wird gesendet...',
        'cta.success': 'Danke! Prüfen Sie Ihren Posteingang.',
        'cta.error': 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',

        // Footer
        'footer.tagline': 'Entscheidungsintelligenz für LinkedIn-Marketing. Wissen, welche Beiträge funktioniert haben—und warum.',
        'footer.product': 'Produkt',
        'footer.company': 'Unternehmen',
        'footer.legal': 'Rechtliches',
        'footer.about': 'Über uns',
        'footer.blog': 'Blog',
        'footer.careers': 'Karriere',
        'footer.contact': 'Kontakt',
        'footer.privacy': 'Datenschutz',
        'footer.terms': 'Nutzungsbedingungen',
        'footer.cookies': 'Cookie-Richtlinie',
        'footer.earlyAccess': 'Früher Zugang',
        'footer.copyright': '2026 Genesis. Alle Rechte vorbehalten.',

        // Language selector
        'lang.select': 'Sprache'
    },

    'ja': {
        // Navigation
        'nav.howItWorks': '仕組み',
        'nav.whatYouGet': '得られるもの',
        'nav.features': '機能',
        'nav.faq': 'FAQ',
        'nav.blog': 'ブログ',
        'nav.register': '最初のプロファイルを取得',

        // Hero
        'hero.badge': '近日公開',
        'hero.title': 'どの投稿が効果的だったか—そしてその理由を知る',
        'hero.subtitle': 'Genesisは、あなたのLinkedInコンテンツを目標に照らして分析し、結果があなたの戦略によるものか—それとも別の何かによるものかを示します。',
        'hero.cta.primary': '最初のプロファイルを取得',
        'hero.cta.secondary': '仕組みを見る',

        // Mockup
        'mockup.title': 'Genesis プロファイル',
        'mockup.badge': '2026年1月',
        'mockup.pass': '合格',
        'mockup.fail': '不合格',
        'mockup.coincidence': '偶然',
        'mockup.uncertain': '不確定',
        'mockup.confidence': 'パターン信頼度',

        // Problem Section
        'problem.label': '問題',
        'problem.title': 'LinkedIn分析は何が起きたかを教えてくれます。<br>なぜかは教えてくれません。',
        'problem.text1': '投稿がうまくいったのを見たことがあるでしょう。いいねがある。コメントも良さそう。でも、効果があったのはフックでしたか？タイミング？トピック？それとも全く別の何か—試しても再現できない何かでしたか？',
        'problem.text2': 'ほとんどの分析は文脈なしに数字を見せます。投稿が5万インプレッションを獲得したと言いますが、そのインプレッションが意図した戦略からのものか、理解できないアルゴリズムの癖からのものかは教えてくれません。',
        'problem.text3': 'チームは結局、一度偶然にうまくいった戦術に倍賭けし、修正可能な理由で失敗したアプローチを無視してしまいます。なぜうまくいったかを知らなければ、確実に再現することはできません。',

        // Solution Section
        'solution.label': '解決策',
        'solution.title': 'Genesisは結果が正しい理由で<br>起きたかどうかを教えます',
        'solution.text1': 'Genesisは、LinkedInマーケティングのための意思決定インテリジェンス製品です。宣言した目標に対してコンテンツのパフォーマンスを分析し、結果があなたの意図と一致しているかどうかを教えます。',
        'solution.text2': '投稿がうまくいったとき、Genesisはそれが戦略のおかげでうまくいったのか—それとも戦略にもかかわらずうまくいったのかを示します。投稿が期待を下回ったとき、Genesisはアプローチに欠陥があったのか、単に運が悪かっただけなのかを示します。',
        'solution.text3': 'これは、実際に効果があるものの上に構築できることを意味します—一度たまたまうまくいったものではなく。あなたの戦略は推測ではなく、証拠に基づいて改善されます。',

        // How It Works Section
        'howItWorks.label': '仕組み',
        'howItWorks.title': '何が効果的かを理解するための3つのステップ',
        'howItWorks.step1.title': '意図を宣言する',
        'howItWorks.step1.text': '分析が行われる前に、何を達成しようとしているかをGenesisに伝えます。LinkedInプレゼンスの目標は何ですか？誰にリーチしようとしていますか？どのような行動を取ってほしいですか？これはオプションではありません—基本です。Genesisは、あなたにとって成功がどのようなものかを知らなければ、成功を判断できません。',
        'howItWorks.step2.title': 'データをアップロード',
        'howItWorks.step2.text': 'LinkedInデータ（CSVまたはXLSX）をエクスポートしてGenesisにアップロードします。複雑な統合は不要。管理するAPI接続もありません。準備に約2分かかるデータだけです。',
        'howItWorks.step3.title': 'プロファイルを受け取る',
        'howItWorks.step3.text': 'Genesisは宣言した意図に対してコンテンツを分析し、Genesisプロファイルを提供します—正しい理由で成功した投稿、きれいに失敗した投稿、偶然成功した投稿、より多くのデータが必要な投稿の明確な内訳。メールまたはSlackで毎月配信されます。',

        // What You Get Section
        'whatYouGet.label': 'Genesisプロファイル',
        'whatYouGet.title': 'LinkedInキャンペーンの月間判定',
        'whatYouGet.subtitle': 'Genesisプロファイルは毎月配信される包括的な分析です。含まれるもの：',
        'whatYouGet.feature1.title': '判定内訳',
        'whatYouGet.feature1.text': 'すべての投稿は4つの判定のいずれかを受けます：合格（設計による成功）、不合格（明確な失敗）、偶然（偶然の成功）、不確定（データ不足）。曖昧さはありません。',
        'whatYouGet.feature2.title': 'パターン分析',
        'whatYouGet.feature2.text': 'Genesisはコンテンツの再現可能なパターンを特定します—正しい理由で一貫して結果を出すアプローチ。避けるべきパターンもフラグします。',
        'whatYouGet.feature3.title': '整合性スコア',
        'whatYouGet.feature3.text': '結果が宣言した意図とどの程度一致しているかを示す単一の指標。これを時間の経過とともに追跡して、戦略が改善しているかどうかを確認します。',
        'whatYouGet.feature4.title': '推論トレース',
        'whatYouGet.feature4.text': '各判定について、Genesisはその理由を提供します。投稿がその分類を受けた理由を正確に確認できるため、成功と失敗の両方から学ぶことができます。',

        // Who It's For Section
        'whoItsFor.label': 'Genesisの対象者',
        'whoItsFor.title': 'アプローチを正当化する必要がある人のために構築',
        'whoItsFor.persona1.title': '成長企業のマーケティング責任者',
        'whoItsFor.persona1.text': '結果に責任を持っていますが、意味があるかどうかわからない指標を提示することにうんざりしています。Genesisは戦略を裏付ける証拠を提供します—または方向転換の時期であるという証拠を。',
        'whoItsFor.persona2.title': '自分でコンテンツを作成する創業者',
        'whoItsFor.persona2.text': '何が効果的かを推測する時間はありません。どのアプローチを続ける価値があり、どれが限られた時間を無駄にしているかを知る必要があります。Genesisは直接教えてくれます。',
        'whoItsFor.persona3.title': '複数のクライアントを管理するエージェンシーオーナー',
        'whoItsFor.persona3.text': 'クライアントに、あなたの仕事が正しい理由で結果を出していることを示す必要があります—単に数字を出しているだけではなく。Genesisは、あなたの仕事を一般的なコンテンツサービスと区別する証拠を提供します。',

        // Features Section
        'features.label': 'Genesis機能',
        'features.title': 'アクセスできるもの',
        'features.subtitle': '3つのアクセス層があり、それぞれが前のものの上に構築されています。ニーズに合ったものを選んでください。',
        'features.core.name': 'Core',
        'features.core.tagline': '基盤',
        'features.advanced.name': 'Advanced',
        'features.advanced.tagline': 'Coreのすべてに加えて',
        'features.enterprise.name': 'Enterprise',
        'features.enterprise.tagline': 'Advancedのすべてに加えて',
        'features.note': 'どの層がニーズに合っているか確認する準備はできましたか？',
        'features.cta': '早期アクセスを取得',

        // FAQ Section
        'faq.label': '質問',
        'faq.title': 'よくある質問、直接的な回答',
        'faq.q1.question': 'LinkedIn Analyticsとどう違いますか？',
        'faq.q1.answer': 'LinkedIn Analyticsは何が起きたかを教えてくれます—インプレッション、クリック、エンゲージメント率。Genesisはなぜそれが起きたか、そして「なぜ」があなたが意図したことと一致しているかを教えます。LinkedInは数字を見せます。Genesisはその数字があなたが思っていることを意味しているかどうかを見せます。',
        'faq.q2.question': 'どのようなデータを提供する必要がありますか？',
        'faq.q2.answer': 'LinkedInの組み込みエクスポート機能（アカウント設定で利用可能）を使用してLinkedInデータをエクスポートします。これにより、投稿、そのコンテンツ、パフォーマンス指標を含むCSVまたはXLSXファイルが得られます。そのファイルをGenesisにアップロードします。API統合は必要ありません。',
        'faq.q3.question': '最初のプロファイルを受け取るまでどのくらいかかりますか？',
        'faq.q3.answer': 'データをアップロードして意図を宣言した後、5営業日以内に最初のGenesisプロファイルを受け取ります。その後のプロファイルは選択したスケジュール（プランに応じて毎月、隔週、または毎週）で届きます。',
        'faq.q4.question': 'まだ明確な目標がない場合はどうすればいいですか？',
        'faq.q4.answer': 'Genesisにはオンボーディングの一部として意図設定ワークショップが含まれています。LinkedInプレゼンスで実際に何を達成しようとしているかを明確にするお手伝いをします。成功がどのようなものかわからない場合は、分析が始まる前に明確にするお手伝いをします。',
        'faq.q5.question': 'データは安全ですか？',
        'faq.q5.answer': 'はい。LinkedInデータは保存時と転送時に暗号化されています。UK/EUのデータセンターに保存され、広告目的で第三者と共有されたり、誰かに販売されたりすることはありません。Genesisプロファイルを生成するためだけにデータを処理します。詳細はプライバシーポリシーをご覧ください。',
        'faq.q6.question': 'いつでもキャンセルできますか？',
        'faq.q6.answer': 'はい。30日前の通知でキャンセルできます。キャンセル後、最初にエクスポートを要求しない限り、データは30日以内に削除されます。ペナルティなし、長期契約なし。',

        // CTA Section
        'cta.label': '始める',
        'cta.title': '結果を実際に動かしているものを見つける',
        'cta.subtitle': '最初のGenesisプロファイルから始めましょう。LinkedInの投稿のうち、正しい理由で成功したものと、単に数字を得ただけのものを確認してください。',
        'cta.placeholder': 'メールアドレスを入力',
        'cta.button': '最初のプロファイルを取得',
        'cta.note': '14日間の評価期間。開始にクレジットカードは必要ありません。',
        'cta.loading': '送信中...',
        'cta.success': 'ありがとうございます！受信トレイをご確認ください。',
        'cta.error': '問題が発生しました。もう一度お試しください。',

        // Footer
        'footer.tagline': 'LinkedInマーケティングのための意思決定インテリジェンス。どの投稿が効果的だったか—そしてその理由を知る。',
        'footer.product': '製品',
        'footer.company': '会社',
        'footer.legal': '法的情報',
        'footer.about': '会社概要',
        'footer.blog': 'ブログ',
        'footer.careers': '採用情報',
        'footer.contact': 'お問い合わせ',
        'footer.privacy': 'プライバシーポリシー',
        'footer.terms': '利用規約',
        'footer.cookies': 'Cookieポリシー',
        'footer.earlyAccess': '早期アクセス',
        'footer.copyright': '2026 Genesis. 全著作権所有。',

        // Language selector
        'lang.select': '言語'
    }
};

const languageLabels = {
    'en-GB': 'English (UK)',
    'de': 'Deutsch',
    'ja': '日本語'
};

const languageFlags = {
    'en-GB': '🇬🇧',
    'de': '🇩🇪',
    'ja': '🇯🇵'
};

class I18n {
    constructor() {
        this.currentLang = this.getStoredLanguage() || this.detectBrowserLanguage();
        this.translations = translations;
    }

    getStoredLanguage() {
        return localStorage.getItem('genesis-lang');
    }

    setStoredLanguage(lang) {
        localStorage.setItem('genesis-lang', lang);
    }

    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('de')) return 'de';
        if (browserLang.startsWith('ja')) return 'ja';
        return 'en-GB';
    }

    t(key) {
        const translation = this.translations[this.currentLang]?.[key];
        if (!translation) {
            console.warn(`Missing translation: ${key} for ${this.currentLang}`);
            return this.translations['en-GB']?.[key] || key;
        }
        return translation;
    }

    setLanguage(lang) {
        if (!this.translations[lang]) {
            console.warn(`Language ${lang} not supported`);
            return;
        }
        this.currentLang = lang;
        this.setStoredLanguage(lang);
        this.updatePage();
        this.updateLanguageSelector();
    }

    updatePage() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);

            // Handle HTML content
            if (translation.includes('<br>')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });

        // Update document language
        document.documentElement.lang = this.currentLang;
    }

    updateLanguageSelector() {
        const currentLabel = document.querySelector('.lang-current');
        const options = document.querySelectorAll('.lang-option');

        if (currentLabel) {
            currentLabel.textContent = languageFlags[this.currentLang];
        }

        options.forEach(option => {
            option.classList.toggle('active', option.dataset.lang === this.currentLang);
        });
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    getLanguageLabel(lang) {
        return languageLabels[lang] || lang;
    }

    getLanguageFlag(lang) {
        return languageFlags[lang] || '';
    }

    getSupportedLanguages() {
        return Object.keys(this.translations);
    }
}

// Create global instance
const i18n = new I18n();

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { I18n, i18n, translations, languageLabels, languageFlags };
}
