// 1. TITRES DE L'APPLICATION
const title = "texte à trous";
const subtitle = "réviser le cours sur les auteurs";

// 2. CITATIONS AVEC TROUS PRÉDÉFINIS
const textesAvecTrous = [
    {
        texte: "Platon décrit le monde des idées comme étant plus réel que le monde sensible. Dans son allégorie de la caverne, il illustre comment les hommes sont prisonniers d'illusions. La connaissance véritable nécessite un voyage vers le monde des idées. Ce voyage demande une éducation philosophique. Platon fonde l'académie pour enseigner cette quête de vérité.",
        source: "Cours sur PLATON",
        trous: ["idées", "sensible", "caverne", "illusions", "philosophique", "académie"]
    },
    {
        texte: "Aristote insiste sur l'importance de la vertu pour atteindre le bonheur. Selon lui, la vertu est une disposition à agir selon le juste milieu entre deux extrêmes. Il définit le bonheur comme l'activité de l'âme en accord avec la vertu. Aristote développe une éthique basée sur la pratique. Il étudie également la logique et les sciences naturelles.",
        source: "Cours sur ARISTOTE",
        trous: ["vertu", "bonheur", "milieu", "âme", "pratique", "logique"]
    },
    {
        texte: "René Descartes affirme : « Je pense, donc je suis ». Le doute méthodique est central dans sa philosophie. Il cherche des idées claires et distinctes. Sa méthode vise à atteindre la certitude. Il propose de tout remettre en question. Le cogito est son point de départ inébranlable. Il reconstruit ensuite sa connaissance du monde.",
        source: "Cours sur René DESCARTES",
        trous: ["pense", "doute", "claires", "certitude", "question", "inébranlable", "monde"]
    },
    {
        texte: "John Locke défend l'idée que l'esprit humain est une tabula rasa à la naissance. Nos connaissances proviennent de l'expérience et de la réflexion sur cette expérience. Il développe une théorie de l'identité personnelle basée sur la continuité de la conscience. Locke influence grandement la pensée politique moderne. Il est considéré comme le père du libéralisme classique.",
        source: "Cours sur John LOCKE",
        trous: ["tabula rasa", "connaissances", "expérience", "réflexion", "identité", "libéralisme"]
    },
    {
        texte: "Baruch Spinoza développe une philosophie du monisme. Il affirme que Dieu et la Nature sont une seule et même chose. Il propose une éthique basée sur la compréhension de notre place dans l'univers. Spinoza encourage une vie guidée par la raison plutôt que par les passions. Sa pensée influence profondément la philosophie moderne. Il développe une conception de la liberté comme nécessité comprise.",
        source: "Cours sur Baruch SPINOZA",
        trous: ["monisme", "Nature", "éthique", "raison", "philosophie", "liberté"]
    },
    {
        texte: "David Hume remet en question les notions traditionnelles de cause et d'effet. Il soutient que nos croyances sont basées sur des habitudes plutôt que sur des preuves rationnelles. Selon lui, nous ne pouvons jamais être absolument certains d'une causalité. Hume développe une philosophie sceptique. Il influence profondément Kant et la philosophie moderne.",
        source: "Cours sur David HUME",
        trous: ["cause", "effet", "croyances", "habitudes", "sceptique", "Kant"]
    },
    {
        texte: "Emmanuel Kant soutient que la liberté est essentielle à la moralité. Selon lui, agir par devoir est un signe de moralité. La raison doit guider nos actions pour atteindre le bien. Il affirme que l'homme est un être de valeur intrinsèque. Kant explore les limites de la connaissance humaine.",
        source: "Cours sur Emmanuel KANT",
        trous: ["liberté", "devoir", "moralité", "raison", "bien", "valeur", "connaissance"]
    },
    {
        texte: "Georg Wilhelm Friedrich Hegel propose que l'histoire évolue par des conflits entre des idées opposées, un processus qu'il appelle la dialectique. Chaque thèse engendre une antithèse qui mène à une synthèse. Ce mouvement historique est une quête vers la liberté absolue. Hegel voit cette évolution comme un progrès de l'Esprit.",
        source: "Cours sur Georg Wilhelm Friedrich HEGEL",
        trous: ["dialectique", "thèse", "antithèse", "synthèse", "liberté", "Esprit"]
    },
    {
        texte: "Friedrich Nietzsche déclare : « Dieu est mort » pour signifier la fin des certitudes absolues. Il encourage l'individu à créer ses propres valeurs. La volonté de puissance est au cœur de sa pensée. L'éternel retour pose la question : êtes-vous prêt à vivre votre vie encore et encore ? Cette idée remet en question notre rapport au temps. Nietzsche critique la morale traditionnelle.",
        source: "Cours sur Friedrich NIETZSCHE",
        trous: ["certitudes", "valeurs", "volonté", "éternel", "temps", "morale"]
    },
    {
        texte: "Karl Marx critique le capitalisme comme un système d'exploitation. Il prône une révolution prolétarienne pour établir une société sans classes. Marx voit l'histoire comme une lutte entre les classes sociales. Il développe une théorie matérialiste de l'histoire. Son influence s'étend bien au-delà de la philosophie, touchant l'économie et la politique.",
        source: "Cours sur Karl MARX",
        trous: ["capitalisme", "exploitation", "révolution", "classes", "matérialiste", "économie"]
    },
    {
        texte: "Sigmund Freud introduit l'idée que notre comportement est influencé par des forces inconscientes. Il explore les concepts du ça, du moi et du surmoi pour expliquer notre psyché. Selon lui, nos désirs refoulés peuvent se manifester dans nos rêves. Freud développe la psychanalyse comme méthode thérapeutique. Ses théories ont profondément marqué la culture occidentale.",
        source: "Cours sur Sigmund FREUD",
        trous: ["inconscientes", "ça", "moi", "surmoi", "rêves", "psychanalyse"]
    },
    {
        texte: "Edmund Husserl développe la phénoménologie comme méthode philosophique. Il propose de revenir aux choses elles-mêmes par la réduction phénoménologique. Husserl explore la structure de la conscience intentionnelle. Sa pensée influence profondément la philosophie continentale. Il est considéré comme le fondateur de la phénoménologie moderne.",
        source: "Cours sur Edmund HUSSERL",
        trous: ["phénoménologie", "choses", "réduction", "conscience", "continentale"]
    },
    {
        texte: "Ludwig Wittgenstein explore les limites du langage et son rôle dans notre compréhension du monde. Il affirme que les problèmes philosophiques naissent souvent d'une confusion linguistique. Dans son Tractatus, il tente de délimiter ce qui peut être dit clairement. Plus tard, il développe le concept de jeux de langage. Wittgenstein révolutionne la philosophie du langage. Il influence profondément la philosophie analytique.",
        source: "Cours sur Ludwig WITTGENSTEIN",
        trous: ["langage", "confusion", "clairement", "jeux de langage", "philosophie", "analytique"]
    },
    {
        texte: "Martin Heidegger explore la question de l'être dans son œuvre majeure Être et Temps. Il distingue l'être de l'étant et analyse l'existence humaine comme Dasein. Heidegger examine les concepts d'authenticité et d'inauthenticité. Sa pensée influence profondément l'existentialisme et l'herméneutique. Il remet en question la métaphysique traditionnelle occidentale.",
        source: "Cours sur Martin HEIDEGGER",
        trous: ["être", "étant", "Dasein", "authenticité", "métaphysique"]
    },
    {
        texte: "Hannah Arendt analyse la nature du totalitarisme et ses effets sur la société. Elle souligne l'importance de la pluralité et de l'action politique. Arendt développe le concept de la banalité du mal. Elle réfléchit sur la condition de l'homme moderne. Son travail influence profondément la philosophie politique.",
        source: "Cours sur Hannah ARENDT",
        trous: ["totalitarisme", "pluralité", "action", "banalité du mal", "moderne", "politique"]
    },
    {
        texte: "Jean-Paul Sartre affirme que l'existence précède l'essence. L'homme est condamné à être libre, ce qui implique une responsabilité totale pour ses choix. L'angoisse existentielle découle de cette liberté sans limites. Nous devons créer notre propre essence par nos actions. Sartre développe une philosophie de l'engagement.",
        source: "Cours sur Jean-Paul SARTRE",
        trous: ["existence", "essence", "libre", "responsabilité", "angoisse", "actions", "engagement"]
    },
    {
        texte: "Simone de Beauvoir soutient que l'on ne naît pas femme, mais qu'on le devient. Elle explore les constructions sociales autour du genre. Elle appelle à la libération des femmes par l'éducation et l'autonomie. Dans Le Deuxième Sexe, elle analyse comment les femmes ont été historiquement définies par rapport aux hommes. Beauvoir remet en question les rôles traditionnels de genre.",
        source: "Cours sur Simone de BEAUVOIR",
        trous: ["femme", "constructions", "libération", "autonomie", "rôles"]
    },
    {
        texte: "Emmanuel Levinas développe une éthique basée sur la responsabilité envers l'Autre. Il critique la primauté de l'ontologie dans la philosophie occidentale. Levinas explore le concept de visage comme appel éthique. Il influence profondément la philosophie éthique contemporaine. Son travail s'étend à la phénoménologie et à la philosophie juive.",
        source: "Cours sur Emmanuel LEVINAS",
        trous: ["responsabilité", "Autre", "ontologie", "visage", "éthique", "phénoménologie"]
    },
    {
        texte: "Simone Weil explore la notion de malheur et son rôle dans la condition humaine. Elle développe une philosophie du travail et de l'attention. Weil cherche à comprendre la souffrance et sa place dans la spiritualité. Elle s'engage politiquement tout en développant une pensée mystique. Son œuvre mêle philosophie, politique et spiritualité.",
        source: "Cours sur Simone WEIL",
        trous: ["malheur", "travail", "attention", "souffrance", "mystique", "politique"]
    },
    {
        texte: "John Rawls élabore une théorie de la justice comme équité. Il imagine une position originelle sous un voile d'ignorance. Rawls cherche à concilier liberté et égalité. Il développe le concept de consensus par recoupement. Son travail renouvelle la philosophie politique libérale. Il propose une alternative au conséquentialisme en éthique.",
        source: "Cours sur John RAWLS",
        trous: ["justice", "voile", "liberté", "consensus", "libérale", "conséquentialisme"]
    },
    {
        texte: "Hilary Putnam contribue à la philosophie analytique et des sciences. Il développe le fonctionnalisme en philosophie de l'esprit. Putnam explore les questions de réalisme et de vérité. Il s'intéresse aux implications éthiques de la science. Son travail influence la philosophie du langage et des mathématiques.",
        source: "Cours sur Hilary PUTNAM",
        trous: ["analytique", "fonctionnalisme", "réalisme", "éthiques", "langage"]
    },
    {
        texte: "Michel Foucault analyse comment le pouvoir se manifeste dans les institutions sociales. Il étudie comment le pouvoir façonne notre compréhension de la vérité et de la connaissance. Foucault développe le concept de bio-pouvoir. Il examine l'histoire de la folie et de la sexualité. Son travail influence profondément les sciences sociales.",
        source: "Cours sur Michel FOUCAULT",
        trous: ["pouvoir", "vérité", "connaissance", "bio-pouvoir", "folie", "sciences"]
    }
];