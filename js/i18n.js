/**
 * Genesis Internationalization System
 * Supports: English (UK), German, Japanese
 */

const translations = {
    'en-GB': {
        // Navigation
        'nav.howItWorks': 'How it works',
        'nav.features': 'Features',
        'nav.verdicts': 'Verdicts',
        'nav.register': 'Register Interest',

        // Hero
        'hero.badge': 'Coming Soon',
        'hero.title': 'Stop confusing luck with strategy',
        'hero.subtitle': 'Genesis is decision intelligence for teams who care whether their work actually worked—not just whether it performed.',
        'hero.cta.primary': 'Register Interest',
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
        'problem.title': 'Teams have data. Teams have AI.<br>Teams still can\'t judge outcomes.',
        'problem.subtitle': 'Most "wins" are coincidences that get promoted to strategy. Most "failures" contain learning that gets ignored.',
        'problem.card1.title': 'Vanity metrics everywhere',
        'problem.card1.text': 'Dashboards show what happened. They don\'t tell you if it happened for the right reasons.',
        'problem.card2.title': 'Reactive decision-making',
        'problem.card2.text': 'Teams double down on what "worked" without asking whether it was skill or luck.',
        'problem.card3.title': 'No shared judgement standard',
        'problem.card3.text': 'Everyone has opinions about what\'s working. No one has a framework to verify.',

        // Models Section
        'models.label': 'Dual Intelligence',
        'models.title': 'Two models. One truth.',
        'models.subtitle': 'Genesis uses two distinct models that work together—one for memory, one for judgement.',
        'models.rim.name': 'RIM',
        'models.rim.title': 'Retrospective Intelligence Model',
        'models.rim.question': '"What patterns exist in what we\'ve done, and which are trustworthy?"',
        'models.rim.feature1': 'Aggregates historical actions and outcomes',
        'models.rim.feature2': 'Identifies repeatable patterns vs one-off successes',
        'models.rim.feature3': 'Flags false positives (noise mistaken as signal)',
        'models.rim.feature4': 'Establishes baselines for future judgement',
        'models.iem.name': 'IEM',
        'models.iem.title': 'Intent-Execution Model',
        'models.iem.question': '"Did this action behave the way it was designed to behave?"',
        'models.iem.feature1': 'Tests executions against stated intent',
        'models.iem.feature2': 'Distinguishes designed success from coincidence',
        'models.iem.feature3': 'Produces pass / fail / uncertain verdicts',
        'models.iem.feature4': 'Generates reasoning traces for every decision',

        // Intent Section
        'intent.label': 'Intent Within Execution',
        'intent.title': 'Know why things work,<br>not just that they do',
        'intent.subtitle': 'Genesis tests whether your actions achieved their intended purpose—not just whether they got engagement.',
        'intent.feature1.title': 'Declare intent upfront',
        'intent.feature1.text': 'Before you execute, define what success actually looks like.',
        'intent.feature2.title': 'Get honest verdicts',
        'intent.feature2.text': 'Genesis tells you when success was accidental—even if the numbers look good.',
        'intent.feature3.title': 'Learn what actually works',
        'intent.feature3.text': 'Only validated learnings inform strategy. Noise is blocked.',

        // Verdicts Section
        'verdicts.label': 'The Four Verdicts',
        'verdicts.title': 'Every action gets a judgement',
        'verdicts.subtitle': 'Clear classifications. No ambiguity. Each verdict tells you exactly what to do next.',
        'verdicts.pass.name': 'Pass',
        'verdicts.pass.title': 'Success by design',
        'verdicts.pass.text': 'The action achieved its intended purpose. The outcome matched the expected markers.',
        'verdicts.pass.status': 'Informs RIM',
        'verdicts.fail.name': 'Fail',
        'verdicts.fail.title': 'Clean miss',
        'verdicts.fail.text': 'Good execution, wrong outcome. The action didn\'t achieve what it was designed to do.',
        'verdicts.fail.status': 'Informs RIM (negative signal)',
        'verdicts.coincidence.name': 'Coincidence',
        'verdicts.coincidence.title': 'Success by accident',
        'verdicts.coincidence.text': 'The numbers look good, but for the wrong reasons. This shouldn\'t inform your strategy.',
        'verdicts.coincidence.status': 'Blocked until recalibration',
        'verdicts.uncertain.name': 'Uncertain',
        'verdicts.uncertain.title': 'Insufficient signal',
        'verdicts.uncertain.text': 'Not enough data to make a judgement. Genesis won\'t guess—it waits for clarity.',
        'verdicts.uncertain.status': 'Blocked until resolved',

        // CTA Section
        'cta.label': 'Early Access',
        'cta.title': 'Be first to know when Genesis launches',
        'cta.subtitle': 'Join the waitlist for early access. We\'re starting with a small group of teams who want honest answers about their marketing.',
        'cta.placeholder': 'Enter your email',
        'cta.button': 'Register Interest',
        'cta.note': 'No spam. Just one email when we\'re ready.',
        'cta.success': 'Thanks for registering! We\'ll be in touch at',

        // Footer
        'footer.tagline': 'Decision intelligence for teams who care whether their work actually worked.',
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
        'nav.features': 'Funktionen',
        'nav.verdicts': 'Bewertungen',
        'nav.register': 'Interesse anmelden',

        // Hero
        'hero.badge': 'Bald verfügbar',
        'hero.title': 'Verwechseln Sie nicht Glück mit Strategie',
        'hero.subtitle': 'Genesis ist Entscheidungsintelligenz für Teams, die wissen wollen, ob ihre Arbeit wirklich funktioniert hat — nicht nur, ob sie performt hat.',
        'hero.cta.primary': 'Interesse anmelden',
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
        'problem.title': 'Teams haben Daten. Teams haben KI.<br>Teams können trotzdem keine Ergebnisse beurteilen.',
        'problem.subtitle': 'Die meisten „Erfolge" sind Zufälle, die zur Strategie erklärt werden. Die meisten „Misserfolge" enthalten Lernpotenzial, das ignoriert wird.',
        'problem.card1.title': 'Überall Eitelkeitsmetriken',
        'problem.card1.text': 'Dashboards zeigen, was passiert ist. Sie sagen nicht, ob es aus den richtigen Gründen passiert ist.',
        'problem.card2.title': 'Reaktive Entscheidungsfindung',
        'problem.card2.text': 'Teams verdoppeln ihren Einsatz bei dem, was „funktioniert" hat, ohne zu fragen, ob es Können oder Glück war.',
        'problem.card3.title': 'Kein gemeinsamer Beurteilungsstandard',
        'problem.card3.text': 'Jeder hat Meinungen darüber, was funktioniert. Niemand hat einen Rahmen zur Überprüfung.',

        // Models Section
        'models.label': 'Duale Intelligenz',
        'models.title': 'Zwei Modelle. Eine Wahrheit.',
        'models.subtitle': 'Genesis verwendet zwei unterschiedliche Modelle, die zusammenarbeiten — eines für Gedächtnis, eines für Beurteilung.',
        'models.rim.name': 'RIM',
        'models.rim.title': 'Retrospektives Intelligenzmodell',
        'models.rim.question': '„Welche Muster existieren in dem, was wir getan haben, und welche sind vertrauenswürdig?"',
        'models.rim.feature1': 'Aggregiert historische Aktionen und Ergebnisse',
        'models.rim.feature2': 'Identifiziert wiederholbare Muster vs. einmalige Erfolge',
        'models.rim.feature3': 'Markiert falsche Positive (Rauschen als Signal verwechselt)',
        'models.rim.feature4': 'Etabliert Basislinien für zukünftige Beurteilungen',
        'models.iem.name': 'IEM',
        'models.iem.title': 'Absichts-Ausführungs-Modell',
        'models.iem.question': '„Hat diese Aktion so funktioniert, wie sie konzipiert wurde?"',
        'models.iem.feature1': 'Testet Ausführungen gegen erklärte Absicht',
        'models.iem.feature2': 'Unterscheidet geplanten Erfolg von Zufall',
        'models.iem.feature3': 'Liefert Bestanden / Fehlgeschlagen / Unsicher Bewertungen',
        'models.iem.feature4': 'Generiert Begründungsspuren für jede Entscheidung',

        // Intent Section
        'intent.label': 'Absicht in der Ausführung',
        'intent.title': 'Wissen, warum Dinge funktionieren,<br>nicht nur dass sie es tun',
        'intent.subtitle': 'Genesis testet, ob Ihre Aktionen ihren beabsichtigten Zweck erreicht haben — nicht nur, ob sie Engagement erzielt haben.',
        'intent.feature1.title': 'Absicht vorab erklären',
        'intent.feature1.text': 'Bevor Sie ausführen, definieren Sie, wie Erfolg tatsächlich aussieht.',
        'intent.feature2.title': 'Ehrliche Bewertungen erhalten',
        'intent.feature2.text': 'Genesis sagt Ihnen, wann Erfolg zufällig war — auch wenn die Zahlen gut aussehen.',
        'intent.feature3.title': 'Lernen, was wirklich funktioniert',
        'intent.feature3.text': 'Nur validierte Erkenntnisse fließen in die Strategie ein. Rauschen wird blockiert.',

        // Verdicts Section
        'verdicts.label': 'Die vier Bewertungen',
        'verdicts.title': 'Jede Aktion erhält eine Beurteilung',
        'verdicts.subtitle': 'Klare Klassifizierungen. Keine Mehrdeutigkeit. Jede Bewertung sagt Ihnen genau, was als nächstes zu tun ist.',
        'verdicts.pass.name': 'Bestanden',
        'verdicts.pass.title': 'Erfolg durch Design',
        'verdicts.pass.text': 'Die Aktion hat ihren beabsichtigten Zweck erreicht. Das Ergebnis entsprach den erwarteten Markern.',
        'verdicts.pass.status': 'Informiert RIM',
        'verdicts.fail.name': 'Fehlgeschlagen',
        'verdicts.fail.title': 'Klarer Fehlschlag',
        'verdicts.fail.text': 'Gute Ausführung, falsches Ergebnis. Die Aktion hat nicht erreicht, was sie erreichen sollte.',
        'verdicts.fail.status': 'Informiert RIM (negatives Signal)',
        'verdicts.coincidence.name': 'Zufall',
        'verdicts.coincidence.title': 'Erfolg durch Zufall',
        'verdicts.coincidence.text': 'Die Zahlen sehen gut aus, aber aus den falschen Gründen. Dies sollte nicht Ihre Strategie beeinflussen.',
        'verdicts.coincidence.status': 'Blockiert bis zur Rekalibrierung',
        'verdicts.uncertain.name': 'Unsicher',
        'verdicts.uncertain.title': 'Unzureichendes Signal',
        'verdicts.uncertain.text': 'Nicht genug Daten für eine Beurteilung. Genesis rät nicht — es wartet auf Klarheit.',
        'verdicts.uncertain.status': 'Blockiert bis zur Klärung',

        // CTA Section
        'cta.label': 'Früher Zugang',
        'cta.title': 'Seien Sie der Erste, der erfährt, wann Genesis startet',
        'cta.subtitle': 'Treten Sie der Warteliste für frühen Zugang bei. Wir starten mit einer kleinen Gruppe von Teams, die ehrliche Antworten über ihr Marketing wollen.',
        'cta.placeholder': 'E-Mail eingeben',
        'cta.button': 'Interesse anmelden',
        'cta.note': 'Kein Spam. Nur eine E-Mail, wenn wir bereit sind.',
        'cta.success': 'Danke für Ihre Anmeldung! Wir melden uns bei',

        // Footer
        'footer.tagline': 'Entscheidungsintelligenz für Teams, die wissen wollen, ob ihre Arbeit wirklich funktioniert hat.',
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
        'nav.features': '機能',
        'nav.verdicts': '判定',
        'nav.register': '登録する',

        // Hero
        'hero.badge': '近日公開',
        'hero.title': '運と戦略を混同しない',
        'hero.subtitle': 'Genesisは、パフォーマンスだけでなく、実際に効果があったかどうかを知りたいチームのための意思決定インテリジェンスです。',
        'hero.cta.primary': '登録する',
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
        'problem.title': 'チームにはデータがある。AIもある。<br>しかし、結果を判断できない。',
        'problem.subtitle': 'ほとんどの「成功」は戦略に昇格された偶然です。ほとんどの「失敗」には無視される学びが含まれています。',
        'problem.card1.title': '虚栄の指標があふれている',
        'problem.card1.text': 'ダッシュボードは何が起きたかを示します。正しい理由で起きたかどうかは教えてくれません。',
        'problem.card2.title': '受動的な意思決定',
        'problem.card2.text': 'チームは「うまくいった」ことに倍賭けしますが、それがスキルか運かを問いません。',
        'problem.card3.title': '共通の判断基準がない',
        'problem.card3.text': '何がうまくいっているかについて全員が意見を持っています。検証するフレームワークを持つ人はいません。',

        // Models Section
        'models.label': 'デュアルインテリジェンス',
        'models.title': '2つのモデル。1つの真実。',
        'models.subtitle': 'Genesisは、記憶用と判断用の2つの異なるモデルを使用して連携します。',
        'models.rim.name': 'RIM',
        'models.rim.title': '回顧的インテリジェンスモデル',
        'models.rim.question': '「私たちが行ったことにどのようなパターンが存在し、どれが信頼できるか？」',
        'models.rim.feature1': '過去のアクションと結果を集約',
        'models.rim.feature2': '再現可能なパターンと一度きりの成功を識別',
        'models.rim.feature3': '偽陽性（信号と誤解されたノイズ）をフラグ',
        'models.rim.feature4': '将来の判断のためのベースラインを確立',
        'models.iem.name': 'IEM',
        'models.iem.title': '意図-実行モデル',
        'models.iem.question': '「このアクションは設計どおりに動作したか？」',
        'models.iem.feature1': '明示された意図に対して実行をテスト',
        'models.iem.feature2': '設計された成功と偶然を区別',
        'models.iem.feature3': '合格/不合格/不確定の判定を生成',
        'models.iem.feature4': 'すべての決定に対して推論トレースを生成',

        // Intent Section
        'intent.label': '実行における意図',
        'intent.title': 'なぜ機能するかを知る、<br>単に機能するだけでなく',
        'intent.subtitle': 'Genesisは、エンゲージメントを得たかどうかだけでなく、アクションが意図した目的を達成したかどうかをテストします。',
        'intent.feature1.title': '事前に意図を宣言',
        'intent.feature1.text': '実行する前に、成功が実際にどのようなものかを定義します。',
        'intent.feature2.title': '正直な判定を得る',
        'intent.feature2.text': 'Genesisは、数字が良く見えても、成功が偶然だった場合に教えてくれます。',
        'intent.feature3.title': '実際に機能するものを学ぶ',
        'intent.feature3.text': '検証された学びだけが戦略に反映されます。ノイズはブロックされます。',

        // Verdicts Section
        'verdicts.label': '4つの判定',
        'verdicts.title': 'すべてのアクションに判定',
        'verdicts.subtitle': '明確な分類。曖昧さなし。各判定は次に何をすべきかを正確に伝えます。',
        'verdicts.pass.name': '合格',
        'verdicts.pass.title': '設計による成功',
        'verdicts.pass.text': 'アクションは意図した目的を達成しました。結果は期待されたマーカーと一致しました。',
        'verdicts.pass.status': 'RIMに反映',
        'verdicts.fail.name': '不合格',
        'verdicts.fail.title': '明確な失敗',
        'verdicts.fail.text': '良い実行、間違った結果。アクションは設計されたことを達成しませんでした。',
        'verdicts.fail.status': 'RIMに反映（否定的シグナル）',
        'verdicts.coincidence.name': '偶然',
        'verdicts.coincidence.title': '偶然の成功',
        'verdicts.coincidence.text': '数字は良く見えますが、間違った理由です。これは戦略に反映すべきではありません。',
        'verdicts.coincidence.status': '再調整までブロック',
        'verdicts.uncertain.name': '不確定',
        'verdicts.uncertain.title': '不十分なシグナル',
        'verdicts.uncertain.text': '判断を下すのに十分なデータがありません。Genesisは推測しません—明確になるまで待ちます。',
        'verdicts.uncertain.status': '解決までブロック',

        // CTA Section
        'cta.label': '早期アクセス',
        'cta.title': 'Genesisの開始を最初に知る',
        'cta.subtitle': '早期アクセスのウェイトリストに参加してください。マーケティングについて正直な答えを求める少数のチームから始めます。',
        'cta.placeholder': 'メールアドレスを入力',
        'cta.button': '登録する',
        'cta.note': 'スパムはありません。準備ができたら1通だけ。',
        'cta.success': '登録ありがとうございます！こちらにご連絡します：',

        // Footer
        'footer.tagline': '自分たちの仕事が本当に効果があったかどうかを知りたいチームのための意思決定インテリジェンス。',
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
