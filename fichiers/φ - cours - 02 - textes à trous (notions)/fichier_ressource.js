// 1. TITRES DE L'APPLICATION
const title = "texte à trous";
const subtitle = "réviser le cours sur les notions";

// 2. CITATIONS AVEC TROUS PRÉDÉFINIS
const textesAvecTrous = [
    {
        texte: "L'art est une forme d'expression qui touche les sens et évoque des réactions uniques. Il nous transporte à travers des mélodies, des couleurs et des formes qui défient les conventions culturelles et interpellent notre âme.",
        source: "notion abordée : art",
        trous: ["art", "expression", "sens", "réactions", "mélodies", "couleurs", "formes", "âme"]
    },
    {
        texte: "La créativité est le moteur de l'innovation et de l'expression artistique. Elle nous permet d'imaginer des idées originales et de dépasser les conventions dans nos projets.",
        source: "notion abordée : art",
        trous: ["créativité", "innovation", "idées", "conventions"]
    },
    {
        texte: "La littérature nous ouvre des portes vers des univers infinis d'imaginaire et de sagesse. Les auteurs nous racontent des histoires qui enrichissent notre esprit et notre moralité.",
        source: "notion abordée : art",
        trous: ["littérature", "univers", "histoires"]
    },
    {
        texte: "Le bonheur est un état d'être que chaque individu recherche dans sa vie. Il se manifeste souvent à travers des relations humaines épanouissantes, le succès personnel et des moments de joie authentique.",
        source: "notion abordée : bonheur",
        trous: ["bonheur", "être", "individu", "relations"]
    },
    {
        texte: "L'égalité est un principe fondamental qui garantit les mêmes droits et opportunités à toutes les personnes. Promouvoir cette valeur est essentiel pour construire des sociétés justes et inclusives.",
        source: "notion abordée : justice",
        trous: ["égalité", "droits", "personnes", "sociétés"]
    },
    {
        texte: "L'histoire est un miroir de notre passé, offrant les clés pour comprendre notre présent et orienter notre futur. Elle nous apprend que chaque événement historique a façonné nos sociétés modernes.",
        source: "notion abordée : histoire",
        trous: ["histoire", "passé", "comprendre", "présent"]
    },
    {
        texte: "La nature nous rappelle la beauté du monde vivant avec ses paysages diversifiés, ses animaux fascinants et les écosystèmes qui interagissent. Elle nous enseigne des leçons sur la patience, le respect et l'harmonie à travers ses cycles.",
        source: "notion abordée : nature",
        trous: ["nature", "monde", "paysages", "animaux", "écosystèmes", "patience"]
    },
    {
        texte: "L'écologie étudie les interactions entre les êtres vivants et leur environnement naturel. Cette science met en lumière les conséquences des actions humaines sur la nature et appelle à un changement de comportement.",
        source: "notion abordée : nature",
        trous: ["écologie", "êtres", "environnement", "nature"]
    },
    {
        texte: "La nature nous enseigne des leçons cruciales sur la résilience, l'équilibre et l'interconnexion de toutes les espèces. Elle rappelle que chaque élément est essentiel pour l'ensemble.",
        source: "notion abordée : nature",
        trous: ["nature", "leçons", "équilibre", "élément"]
    },
    {
        texte: "La nature nous rappelle l'importance de chaque élément dans l'équilibre de notre écosystème. Elle nous enseigne que la diversité des espèces est essentielle à la survie de la planète.",
        source: "notion abordée : nature",
        trous: ["nature", "élément", "espèces"]
    },
    {
        texte: "La spiritualité est un voyage intérieur qui nous connecte à des réalités plus grandes. Ce chemin nous pousse à réfléchir, à explorer des questions existentielles et à chercher un sens dans notre existence.",
        source: "notion abordée : religion",
        trous: ["spiritualité", "questions"]
    },
    {
        texte: "La science est une démarche d'étude qui repose sur l'observation et l'expérimentation. Elle nous permet d'explorer les lois de l'Univers, de comprendre notre existence et d'améliorer notre qualité de vie.",
        source: "notion abordée : science",
        trous: ["science", "étude", "existence"]
    },
    {
        texte: "Le progrès humain repose sur notre capacité à innover et à améliorer notre condition de vie. Chaque avancée contribue positivement à notre futur et à celui de nos enfants.",
        source: "notion abordée : technique",
        trous: ["progrès", "condition", "futur"]
    },
    {
        texte: "Le sport est un excellent moyen de développer la discipline, la confiance et la cohésion. Pratiquer une activité physique peut non seulement améliorer notre santé physique mais également notre bien-être mental.",
        source: "notion abordée : travail",
        trous: ["sport", "développer", "discipline", "confiance", "cohésion", "santé"]
    },
    {
        texte: "Le temps est un concept précieux qui régit notre existence. Il nous rappelle que chaque instant est unique et éphémère, à apprécier pleinement et savourer les petits plaisirs de la vie.",
        source: "notion abordée : temps",
        trous: ["temps", "existence", "instant"]
    },
    {
        texte: "Le temps est un concept précieux qui régit notre existence. Il nous rappelle que chaque instant est unique et éphémère, à apprécier pleinement et savourer les petits plaisirs de la vie.",
        source: "notion abordée : temps",
        trous: ["temps", "existence", "instant"]
    },
    {
        texte: "Le travail d'équipe est indispensable pour atteindre des objectifs communs et réaliser des projets ambitieux. Chaque membre contribue avec ses compétences uniques qui enrichissent le processus.",
        source: "notion abordée : travail",
        trous: ["travail", "objectifs", "compétences"]
    }
];