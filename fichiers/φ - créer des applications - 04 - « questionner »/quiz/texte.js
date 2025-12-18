// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
    // il suffit que la ligne suivante soit vide pour faire disparaître la zone de texte dans le fichier html
    texte: `« Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae coniunxit.
        Duplexque isdem diebus acciderat malum, quod et Theophilum insontem atrox interceperat casus, et Serenianus dignus exsecratione cunctorum, innoxius, modo non reclamante publico vigore, discessit.
        Ut enim benefici liberalesque sumus, non ut exigamus gratiam (neque enim beneficium faeneramur sed natura propensi ad liberalitatem sumus), sic amicitiam non spe mercedis adducti sed quod omnis eius fructus in ipso amore inest, expetendam putamus. »`,
    source: "Auteur, Titre, p.XX (année de parution)"
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    // Question n°1
    {
        question: "Question n°1 : contenu de la question à rédiger",
        answers: [
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 1,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°2
    {
        question: "Question n°2 : contenu de la question à rédiger",
        answers: [
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 2,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°3
    {
        question: "Question n°3 : contenu de la question à rédiger",
        answers: [
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 2,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°4
    {
        question: "Question n°4 : contenu de la question à rédiger",
        answers: [
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 1,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°5
    {
        question: "Question n°5 : contenu de la question à rédiger",
        answers: [
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la bonne réponse à rédiger"
        ],
        correct: 3,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°6
    {
        question: "Question n°6 : contenu de la question à rédiger",
        answers: [
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 1,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°7
    {
        question: "Question n°7 : contenu de la question à rédiger",
        answers: [
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 2,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°8
    {
        question: "Question n°8 : contenu de la question à rédiger",
        answers: [
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 1,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°9
    {
        question: "Question n°9 : contenu de la question à rédiger",
        answers: [
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 2,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°10
    {
        question: "Question n°10 : contenu de la question à rédiger",
        answers: [
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 2,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°11
    {
        question: "Question n°11 : contenu de la question à rédiger",
        answers: [
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 1,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°12
    {
        question: "Question n°12 : contenu de la question à rédiger",
        answers: [
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la bonne réponse à rédiger"
        ],
        correct: 3,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°13
    {
        question: "Question n°13 : contenu de la question à rédiger",
        answers: [
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 2,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°14
    {
        question: "Question n°14 : contenu de la question à rédiger",
        answers: [
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 1,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°15
    {
        question: "Question n°15 : contenu de la question à rédiger",
        answers: [
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la bonne réponse à rédiger"
        ],
        correct: 3,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°16
    {
        question: "Question n°16 : contenu de la question à rédiger",
        answers: [
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 2,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°17
    {
        question: "Question n°17 : contenu de la question à rédiger",
        answers: [
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 1,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°18
    {
        question: "Question n°18 : contenu de la question à rédiger",
        answers: [
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la bonne réponse à rédiger"
        ],
        correct: 3,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°19
    {
        question: "Question n°19 : contenu de la question à rédiger",
        answers: [
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 2,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    },

    // Question n°20
    {
        question: "Question n°20 : contenu de la question à rédiger",
        answers: [
            "Contenu de la bonne réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger",
            "Contenu de la mauvaise réponse à rédiger"
        ],
        correct: 1,
        explanation: "Contenu de la justification de la bonne réponse à rédiger."
    }
];

// ============================================
// NOTES IMPORTANTES POUR LA COMPATIBILITÉ
// ============================================

/*
IMPORTANT : Ce fichier est compatible avec le HTML fourni qui contient :

1. Une fonction formatPhilosophyText() qui convertit les retours chariot en paragraphes
2. Une fonction formatSource() qui met en italique seulement la partie après la première virgule
3. Un système de quiz qui pioche aléatoirement 10 questions parmi les 20 disponibles

Le texte philosophique utilise des retours chariot (\n) qui seront automatiquement
convertis en paragraphes distincts dans l'affichage.

Chaque question a exactement 3 réponses : contenu de la réponse à rédiger (comme attendu par le code HTML).
*/
