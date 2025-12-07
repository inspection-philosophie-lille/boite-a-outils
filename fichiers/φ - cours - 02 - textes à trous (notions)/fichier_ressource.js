// 1. TITRES DE L'APPLICATION
const title = "texte à trous";
const subtitle = "réviser le cours sur les notions";

// 2. CITATIONS AVEC TROUS PRÉDÉFINIS
const textesAvecTrous = [
    {
        texte: "La psychologie est l'étude de l'esprit, des émotions et du comportement humains, ainsi que des relations complexes qui nous influencent au quotidien. Comprendre ces dynamiques nous aide à mieux appréhender notre réalité et à naviguer dans nos interactions.",
        source: "Citation n°1",
        trous: ["psychologie", "esprit", "émotions", "comportement", "relations", "dynamiques", "réalité", "interactions"]
    },
    {
        texte: "L'art est une forme d'expression qui touche les sens et évoque des réactions uniques. Il nous transporte à travers des mélodies, des couleurs et des formes qui défient les conventions culturelles et interpellent notre âme.",
        source: "Citation n°2",
        trous: ["art", "expression", "sens", "réactions", "mélodies", "couleurs", "formes", "âme"]
    },
    {
        texte: "La sociologie examine les rapports humains au sein des sociétés contemporaines, mettant en lumière comment la culture et les normes façonnent notre comportement ainsi que nos choix de vie au quotidien.",
        source: "Citation n°3",
        trous: ["sociologie", "rapports", "sociétés", "culture", "normes", "comportement"]
    },
    {
        texte: "La musique possède le pouvoir d'influencer nos émotions, de créer des souvenirs profonds et de transformer les ambiance au sein de nos vies. Les composites et les paroles touchent notre esprit et évoquent des moments nostalgiques.",
        source: "Citation n°4",
        trous: ["musique", "influencer", "émotions", "souvenirs", "ambiance", "vies", "esprit"]
    },
    {
        texte: "L'éducation est la clé des opportunités dans notre monde moderne. Elle favorise la connaissance, la compréhension et l'esprit critique, ouvrant des portes vers l'autonomie et l'inclusion de chacun à travers des valeurs fondamentales.",
        source: "Citation n°5",
        trous: ["éducation", "opportunités", "monde", "connaissance", "compréhension", "esprit", "valeurs"]
    },
    {
        texte: "La nature nous rappelle la beauté du monde vivant avec ses paysages diversifiés, ses animaux fascinants et les écosystèmes qui interagissent. Elle nous enseigne des leçons sur la patience, le respect et l'harmonie à travers ses cycles.",
        source: "Citation n°6",
        trous: ["nature", "monde", "paysages", "animaux", "écosystèmes", "patience"]
    },
    {
        texte: "L'amour est un sentiment complexe, constitué de passion, d'engagement et de partage réel. Une véritable aventure humaine pleine de joies et de défis quotidiens qui enrichit notre existence.",
        source: "Citation n°7",
        trous: ["amour", "passion", "engagement", "partage", "joies"]
    },
    {
        texte: "La technologie redéfinit nos vies à travers des outils de communication et d'information. Elle nous offre de nouvelles possibilités tout en soulevant des questions éthiques qui méritent d'être examinées en profondeur.",
        source: "Citation n°8",
        trous: ["technologie", "vies", "outils", "possibilités"]
    },
    {
        texte: "La bienveillance est une valeur fondamentale dans nos relations humaines, nous rappelant l'importance de l'empathie, de la compassion et de l'écoute attentive envers autrui pour créer des liens sacrés.",
        source: "Citation n°9",
        trous: ["bienveillance", "relations", "empathie", "compassion", "écoute"]
    },
    {
        texte: "Le sport est un excellent moyen de développer la discipline, la confiance et la cohésion. Pratiquer une activité physique peut non seulement améliorer notre santé physique mais également notre bien-être mental.",
        source: "Citation n°10",
        trous: ["sport", "développer", "discipline", "confiance", "cohésion", "santé"]
    },
    {
        texte: "L'innovation est le moteur de changement dans notre société moderne. Elle pousse les individus à remettre en question les normes établies et à imaginer des solutions créatives devant chaque défi rencontré.",
        source: "Citation n°11",
        trous: ["innovation", "changement", "individus", "solutions"]
    },
    {
        texte: "La lecture est une porte d'entrée vers d'autres mondes et d'autres croyances. S'immerger dans un livre enrichit nos horizons et stimule notre imagination tout en nous ouvrant à de nouvelles perspectives.",
        source: "Citation n°12",
        trous: ["lecture", "entrée", "mondes", "croyances", "horizons", "imagination"]
    },
    {
        texte: "Le leadership repose sur la capacité à inspirer et à guider un groupe vers un objectif commun. Un bon leader sait écouter, valoriser les idées de chacun et favoriser la collaboration au sein de l'équipe.",
        source: "Citation n°13",
        trous: ["leadership", "objectif", "idées", "collaboration"]
    },
    {
        texte: "L'histoire est un miroir de notre passé, offrant les clés pour comprendre notre présent et orienter notre futur. Elle nous apprend que chaque événement historique a façonné nos sociétés modernes.",
        source: "Citation n°14",
        trous: ["histoire", "passé", "comprendre", "présent"]
    },
    {
        texte: "Le bonheur est un état d'être que chaque individu recherche dans sa vie. Il se manifeste souvent à travers des relations humaines épanouissantes, le succès personnel et des moments de joie authentique.",
        source: "Citation n°15",
        trous: ["bonheur", "être", "individu", "relations"]
    },
    {
        texte: "L'écologie étudie les interactions entre les êtres vivants et leur environnement naturel. Cette science met en lumière les conséquences des actions humaines sur la nature et appelle à un changement de comportement.",
        source: "Citation n°16",
        trous: ["écologie", "êtres", "environnement", "nature"]
    },
    {
        texte: "La découverte est un moteur de curiosité et d'exploration dans notre monde. Chaque expérience nouvelle nous offre des occasions d'apprendre davantage sur notre environnement et notre place dans l'univers.",
        source: "Citation n°17",
        trous: ["découverte", "curiosité", "exploration", "monde", "expérience"]
    },
    {
        texte: "Le temps est un concept précieux qui régit notre existence. Il nous rappelle que chaque instant est unique et éphémère, à apprécier pleinement et savourer les petits plaisirs de la vie.",
        source: "Citation n°18",
        trous: ["temps", "existence", "instant"]
    },
    {
        texte: "Les rêves constituent des manifestations de nos aspirations profondes, de nos désirs et de nos plus grands espoirs. Ils nous encouragent à agir et à rechercher un sens plus profond dans notre quotidien.",
        source: "Citation n°19",
        trous: ["rêves", "aspirations", "désirs"]
    },
    {
        texte: "La spiritualité est un voyage intérieur qui nous connecte à des réalités plus grandes. Ce chemin nous pousse à réfléchir, à explorer des questions existentielles et à chercher un sens dans notre existence.",
        source: "Citation n°20",
        trous: ["spiritualité", "questions"]
    },
    {
        texte: "L'engagement civique est essentiel pour faire entendre nos voix dans la société. Participer à des initiatives renforce la communauté et favorise la prise de conscience sur les enjeux qui nous entourent.",
        source: "Citation n°21",
        trous: ["engagement", "voix", "société", "communauté"]
    },
    {
        texte: "L'espoir est une lumière dans l'obscurité qui nous pousse à croire en de meilleurs jours à venir. Cultiver cet espoir permet de surmonter des obstacles et de garder notre foi en l'avenir.",
        source: "Citation n°22",
        trous: ["espoir", "meilleurs", "obstacles"]
    },
    {
        texte: "La mémoire collective façonne notre identité culturelle et historique. Elle nous connecte aux générations passées et transmet des enseignements précieux qui éclairent notre chemin.",
        source: "Citation n°23",
        trous: ["mémoire", "identité", "générations", "enseignements"]
    },
    {
        texte: "La mode constitue un moyen puissant d'expression personnelle, un reflet des cultures contemporaines. Elle permet à chacun de se démarquer et d'affirmer son identité unique dans un monde diversifié.",
        source: "Citation n°24",
        trous: ["mode", "expression", "cultures", "identité"]
    },
    {
        texte: "La science est une démarche d'étude qui repose sur l'observation et l'expérimentation. Elle nous permet d'explorer les lois de l'Univers, de comprendre notre existence et d'améliorer notre qualité de vie.",
        source: "Citation n°25",
        trous: ["science", "étude", "existence"]
    },
    {
        texte: "L'humour est un antidote à la tristesse et à la frustration qui limite les conflits. Il favorise les connections humaines et peut apporter légèreté et bonheur dans les moments difficiles.",
        source: "Citation n°26",
        trous: ["humour", "tristesse", "conflits", "connections"]
    },
    {
        texte: "L'optimisme est une attitude qui nous pousse à voir le verre à moitié plein. Cultiver cet esprit positif permet d'affronter les défis tout en explorant des possibilités nouvelles.",
        source: "Citation n°27",
        trous: ["optimisme", "verre", "défis", "possibilités"]
    },
    {
        texte: "Le changement est inévitable et souvent difficile à accepter. Cependant, il représente aussi une opportunité de croissance, qu'elle soit personnelle, sociale ou professionnelle.",
        source: "Citation n°28",
        trous: ["changement", "croissance"]
    },
    {
        texte: "La compassion est la capacité de ressentir la souffrance d'autrui et de vouloir apporter du soulagement. Elle favorise des interactions humaines empreintes d'empathie et de solidarité.",
        source: "Citation n°29",
        trous: ["compassion", "souffrance", "interactions"]
    },
    {
        texte: "La méditation est une pratique qui nous aide à trouver la tranquillité d'esprit. Elle permet de recentrer nos pensées et de gérer nos émotions de manière apaisante.",
        source: "Citation n°30",
        trous: ["méditation", "tranquillité", "recentrer", "émotions"]
    },
    {
        texte: "L'altruisme est un acte désintéressé qui vise à aider les autres sans rien attendre en retour. Ce comportement améliore non seulement la vie des autres, mais aussi notre propre existence.",
        source: "Citation n°31",
        trous: ["altruisme", "comportement", "existence"]
    },
    {
        texte: "Les valeurs et les principes guident nos décisions et nos comportements. Les vivre au quotidien renforce notre intégrité, nous permettant d'agir en accord avec nos croyances.",
        source: "Citation n°32",
        trous: ["valeurs", "principes", "intégrité"]
    },
    {
        texte: "L'équilibre est essentiel pour mener une vie harmonieuse. Trouver cet équilibre entre le travail et la vie personnelle est un défi, mais une nécessité pour notre bien-être.",
        source: "Citation n°33",
        trous: ["équilibre", "harmonieuse", "travail", "bien-être"]
    },
    {
        texte: "La patience est une vertu qui demande du temps et de l'engagement. Savoir attendre sans frustration et accepter que certains changements nécessitent des efforts importants.",
        source: "Citation n°34",
        trous: ["patience", "temps", "efforts"]
    },
    {
        texte: "La créativité est le moteur de l'innovation et de l'expression artistique. Elle nous permet d'imaginer des idées originales et de dépasser les conventions dans nos projets.",
        source: "Citation n°35",
        trous: ["créativité", "innovation", "idées", "conventions"]
    },
    {
        texte: "L'égalité est un principe fondamental qui garantit les mêmes droits et opportunités à toutes les personnes. Promouvoir cette valeur est essentiel pour construire des sociétés justes et inclusives.",
        source: "Citation n°36",
        trous: ["égalité", "droits", "personnes", "sociétés"]
    },
    {
        texte: "La résilience est la capacité à rebondir après des épreuves. Adopter une attitude résiliente nous aide face aux défis et nous pousse à rester fidèles à nos objectifs.",
        source: "Citation n°37",
        trous: ["résilience", "épreuves", "objectifs"]
    },
    {
        texte: "Les décisions que nous prenons façonnent notre chemin dans la vie. Nos choix ont des conséquences qui impactent non seulement notre avenir, mais aussi celui des autres.",
        source: "Citation n°38",
        trous: ["décisions", "chemin", "choix"]
    },
    {
        texte: "La diversité enrichit notre société en intégrant une variété de perspectives et d'expériences uniques. Reconnaître cette richesse favorise l'inclusion et l'harmonie au sein de nos communautés.",
        source: "Citation n°39",
        trous: ["diversité", "société", "perspectives", "inclusion"]
    },
    {
        texte: "La nature nous enseigne des leçons cruciales sur la résilience, l'équilibre et l'interconnexion de toutes les espèces. Elle rappelle que chaque élément est essentiel pour l'ensemble.",
        source: "Citation n°40",
        trous: ["nature", "leçons", "équilibre", "élément"]
    },
    {
        texte: "Le voyage est une aventure unique qui élargit nos horizons. Chaque expérience nous confronte à de nouvelles cultures, traduisant ainsi notre rapport aux gens et aux paysages variés.",
        source: "Citation n°41",
        trous: ["voyage", "horizons", "expérience", "cultures", "gens"]
    },
    {
        texte: "L'honnêteté est une valeur qui renforce la confiance dans nos relations. Faire preuve de transparence et d'authenticité crée des liens solides et durables avec autrui.",
        source: "Citation n°42",
        trous: ["honnêteté", "confiance", "relations", "liens"]
    },
    {
        texte: "La tranquillité d'esprit est un état recherché par quiconque pour vivre une vie équilibrée. Cette tranquillité aide également à gérer le stress et savourer les petits joies.",
        source: "Citation n°43",
        trous: ["tranquillité", "vie", "stress", "joies"]
    },
    {
        texte: "L'apprentissage est un processus continu qui débute dès notre naissance. Acquérir des compétences diverses et développer la curiosité sont essentiels pour notre épanouissement.",
        source: "Citation n°44",
        trous: ["apprentissage", "naissance", "compétences", "épanouissement"]
    },
    {
        texte: "La collaboration est vitale pour la réalisation de projets significatifs. Coopérer ensemble vers un même objectif favorise les liens qui mènent à des réussites partagées.",
        source: "Citation n°45",
        trous: ["collaboration", "projets", "objectif", "liens"]
    },
    {
        texte: "L'amitié est un précieux cadeau qui embellit nos vies. Elle nous accompagne dans les moments de joie ainsi que les épreuves, offrant soutien et réconfort.",
        source: "Citation n°46",
        trous: ["amitié", "cadeau", "vies", "moments"]
    },
    {
        texte: "Le respect est au cœur de toutes nos interactions humaines. Traiter les autres avec dignité fait partie intégrante de la construction de relations saines et positives.",
        source: "Citation n°47",
        trous: ["respect", "humaines", "autres", "relations"]
    },
    {
        texte: "L'imagination est le terrain de jeu de notre esprit. Elle nous permet d'inventer, de créer et de penser en dehors des normes établies, enrichissant ainsi notre parcours.",
        source: "Citation n°48",
        trous: ["imagination", "esprit", "normes"]
    },
    {
        texte: "La technologie continue d'influencer nos vies à un rythme rapide et changeant. Elle nous offre des solutions innovantes, mais entraîne aussi des défis éthiques à prendre en compte.",
        source: "Citation n°49",
        trous: ["technologie", "vies", "solutions"]
    },
    {
        texte: "La réflexion est cruciale pour notre croissance. Prendre le temps d'évaluer nos choix et nos actions favorise une meilleure compréhension de nous-mêmes et des autres.",
        source: "Citation n°50",
        trous: ["réflexion", "croissance", "choix", "actions"]
    },
    {
        texte: "L'humanité est souvent définie par notre capacité à ressentir et à établir des liens. C'est cette empathie qui nous unit en tant qu'espèce sur cette planète.",
        source: "Citation n°51",
        trous: ["humanité", "liens", "espèce"]
    },
    {
        texte: "La trahison est l'une des blessures les plus douloureuses que l'on puisse infliger à une relation. Cela remet en question la confiance et laisse des marques durables.",
        source: "Citation n°52",
        trous: ["trahison", "relation", "confiance"]
    },
    {
        texte: "Le succès est une notion multiple qui varie d'une personne à l'autre. Chaque individu définit son propre succès selon ses critères et ses aspirations personnelles.",
        source: "Citation n°53",
        trous: ["succès", "personne", "individu"]
    },
    {
        texte: "La générosité est un acte pur de don qui élève à la fois celui qui donne et celui qui reçoit. Elle crée un sentiment d'abondance dans nos vies au sein de nos échanges.",
        source: "Citation n°54",
        trous: ["générosité", "don", "abondance"]
    },
    {
        texte: "La persévérance est la qualité qui nous permet de continuer, même face aux obstacles. En surmontant nos épreuves avec détermination, nous prouvons que rien n'est impossible.",
        source: "Citation n°55",
        trous: ["persévérance", "obstacles"]
    },
    {
        texte: "Le respect de soi est fondamental pour construire une image positive. Acceptons-nous tel que nous sommes, le renforcement de l'estime de soi favorise une plus grande confiance.",
        source: "Citation n°56",
        trous: ["respect", "image", "estime"]
    },
    {
        texte: "La curiosité est l'énergie motrice de l'apprentissage et de la découverte. Elle incite chaque individu à explorer, à poser des questions et à découvrir de nouvelles idées.",
        source: "Citation n°57",
        trous: ["curiosité", "apprentissage", "individu", "questions"]
    },
    {
        texte: "Le sentiment d'appartenance est essentiel pour notre bien-être social. Établir des connexions authentiques avec les autres favorise un climat de solidarité dans notre communauté.",
        source: "Citation n°58",
        trous: ["sentiment", "bien-être", "connexions"]
    },
    {
        texte: "La philosophie de vie que l'on choisit influe profondément sur notre manière de percevoir le monde. Chaque croyance façonne nos habitudes et guide nos réponses face aux défis.",
        source: "Citation n°59",
        trous: ["philosophie", "monde", "croyance"]
    },
    {
        texte: "La spontanéité infuse une énergie nouvelle dans notre quotidien souvent prévisible. Être réceptif aux moments de surprise et saisir des occasions enrichit notre existence.",
        source: "Citation n°60",
        trous: ["spontanéité", "prévisible", "occasions"]
    },
    {
        texte: "Le dialogue est crucial pour résoudre des conflits et établir des relations saines. Écouter les autres nous aide à créer un pont vers une meilleure compréhension mutuelle.",
        source: "Citation n°61",
        trous: ["dialogue", "conflits", "compréhension"]
    },
    {
        texte: "L'authenticité est la capacité d'être vrai envers soi-même et les autres. Être authentique dans toutes nos relations est essentiel pour construire la confiance et l'honnêteté.",
        source: "Citation n°62",
        trous: ["authenticité", "autres", "relations"]
    },
    {
        texte: "Le travail d'équipe est indispensable pour atteindre des objectifs communs et réaliser des projets ambitieux. Chaque membre contribue avec ses compétences uniques qui enrichissent le processus.",
        source: "Citation n°63",
        trous: ["travail", "objectifs", "compétences"]
    },
    {
        texte: "La nature nous rappelle l'importance de chaque élément dans l'équilibre de notre écosystème. Elle nous enseigne que la diversité des espèces est essentielle à la survie de la planète.",
        source: "Citation n°64",
        trous: ["nature", "élément", "espèces"]
    },
    {
        texte: "Le progrès humain repose sur notre capacité à innover et à améliorer notre condition de vie. Chaque avancée contribue positivement à notre futur et à celui de nos enfants.",
        source: "Citation n°65",
        trous: ["progrès", "condition", "futur"]
    },
    {
        texte: "Le plaisir des petites choses de la vie quotidienne nous rappelle d'apprécier chaque instant. Que ce soit un bon repas ou une douce mélodie, ces joies enrichissent notre existence.",
        source: "Citation n°66",
        trous: ["plaisir", "vie", "instant"]
    },
    {
        texte: "L'optimisme est une attitude qui nous pousse à voir le verre à moitié plein. Cultiver cette vision positive permet d'affronter les épreuves avec force et confiance.",
        source: "Citation n°67",
        trous: ["optimisme", "verre", "épreuves"]
    },
    {
        texte: "L'excellence est une quête permanente pour nous surpasser dans toutes nos actions. Chercher à être le meilleur dans nos différents domaines enrichit notre parcours de vie.",
        source: "Citation n°68",
        trous: ["excellence", "surpasser"]
    },
    {
        texte: "La santé mentale est une composante essentielle de notre bien-être global. Prendre soin de notre esprit est aussi crucial que veiller sur notre santé physique et sociale.",
        source: "Citation n°69",
        trous: ["santé", "bien-être"]
    },
    {
        texte: "La nostalgie évoque des souvenirs du passé qui peuvent mélanger joie et mélancolie. Accepter ces sentiments fait partie intégrante de notre expérience humaine.",
        source: "Citation n°70",
        trous: ["nostalgie", "passé"]
    },
    {
        texte: "La littérature nous ouvre des portes vers des univers infinis d'imaginaire et de sagesse. Les auteurs nous racontent des histoires qui enrichissent notre esprit et notre moralité.",
        source: "Citation n°71",
        trous: ["littérature", "univers", "histoires"]
    },
    {
        texte: "L'acceptation est une étape cruciale dans le processus de la guérison. Apprendre à accueillir ce qui ne peut être changé est essentiel pour avancer sereinement dans nos vies.",
        source: "Citation n°72",
        trous: ["acceptation", "guérison"]
    },
    {
        texte: "La responsabilité envers nous-mêmes et les autres est primordiale. Chaque action a des conséquences, il est donc fondamental d'en être conscient et d'agir en conséquence.",
        source: "Citation n°73",
        trous: ["responsabilité", "autres", "action"]
    }
];