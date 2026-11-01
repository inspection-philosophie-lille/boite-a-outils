// ============================================================
// DONNÉES PARTAGÉES ENTRE PLUSIEURS APPLICATIONS
// ------------------------------------------------------------
// ⚠ Ce fichier est lu par plusieurs pages. 
// Chaque application lit uniquement les constantes qui la concernent
// ============================================================

// ============================================
// DONNÉES GÉNÉRALES
// ============================================

const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte d'Alain (Éléments de philosophie)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] L'idée fataliste, c'est que ce qui est écrit ou prédit se réalisera quelles que soient les causes ; les fables d'Eschyle tué par la chute d'une maison, et du fils du roi qui périt par l'image d'un Lion nous montrent cette superstition à l'état naïf. [2] Et le proverbe dit de même que l'homme qui est né pour être noyé ne sera jamais pendu. [3] Au lieu que, selon le déterminisme, le plus petit changement écarte de grands malheurs, ce qui fait qu'un malheur bien clairement prédit n'arriverait point. [4] Mais on sait que le fatalisme ne se rend pas pour si peu. [5] Si le malheur a été évité, c'est que fatalement il devait l'être. [6] Il était écrit que tu guérirais, mais il l'était aussi que tu prendrais le remède, que tu demanderais le médecin, et ainsi de suite. [7] Le fatalisme se transforme ainsi en un déterminisme théologique ; et l'oracle devient un dieu parfaitement instruit, qui voit d'avance les effets parce qu'il voit aussi les causes. [8] Il reste à disputer si c'est la bonté de Dieu ou sa sagesse qui l'emportera. [9] Ces jeux de paroles sont sans fin. »",
	source: "Alain (Émile-Auguste Chartier), <em>Éléments de philosophie</em>, coll. Idées, Gallimard, p. 240"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Émile-Auguste Chartier (Alain)", "Henri Bergson", "Jean-Paul Sartre"],
		correct: 1,
		explanation: "Le texte est extrait des *Éléments de philosophie* d'Alain, pseudonyme d'Émile-Auguste Chartier."
	},
	{
		question: "Question n°2 : De quelle œuvre ce passage est-il tiré ?",
		answers: ["Propos sur le bonheur", "Éléments de philosophie", "Les Dieux"],
		correct: 2,
		explanation: "La source indique explicitement les *Éléments de philosophie*."
	},
	{
		question: "Question n°3 : Comment Alain définit-il l'idée fataliste au §1 ?",
		answers: ["Comme une loi scientifique", "Comme l'idée que ce qui est prédit se réalisera quelles que soient les causes", "Comme une forme de déterminisme rigoureux"],
		correct: 2,
		explanation: "Il écrit : « L'idée fataliste, c'est que ce qui est écrit ou prédit se réalisera quelles que soient les causes »."
	},
	{
		question: "Question n°4 : Quel exemple tragique Alain cite-t-il pour illustrer le fatalisme ?",
		answers: ["La mort d'Œdipe", "Eschyle tué par la chute d'une maison", "La chute de Troie"],
		correct: 2,
		explanation: "Il mentionne « les fables d'Eschyle tué par la chute d'une maison »."
	},
	{
		question: "Question n°5 : Quel autre exemple mythique est cité au §1 ?",
		answers: ["Le fils du roi qui périt par l'image d'un Lion", "Icare tombant dans la mer", "Narcisse se noyant"],
		correct: 1,
		explanation: "Le texte évoque « du fils du roi qui périt par l'image d'un Lion »."
	},
	{
		question: "Question n°6 : Comment Alain qualifie-t-il ces exemples de fatalisme ?",
		answers: ["De vérités scientifiques", "De superstition à l'état naïf", "De métaphores poétiques"],
		correct: 2,
		explanation: "Il les présente comme montrant « cette superstition à l'état naïf »."
	},
	{
		question: "Question n°7 : Quel proverbe est cité au §2 pour illustrer le fatalisme populaire ?",
		answers: ["Qui vivra verra", "L'homme né pour être noyé ne sera jamais pendu", "À quelque chose malheur est bon"],
		correct: 2,
		explanation: "Le proverbe cité est : « l'homme qui est né pour être noyé ne sera jamais pendu »."
	},
	{
		question: "Question n°8 : Quelle notion Alain oppose-t-il au fatalisme au §3 ?",
		answers: ["Le hasard", "Le déterminisme", "Le libre arbitre absolu"],
		correct: 2,
		explanation: "Il introduit l'opposition par : « Au lieu que, selon le déterminisme... »."
	},
	{
		question: "Question n°9 : Selon le déterminisme, quel est l'effet du plus petit changement ?",
		answers: ["Il est négligeable", "Il écarte de grands malheurs", "Il provoque le chaos total"],
		correct: 2,
		explanation: "Le texte affirme : « selon le déterminisme, le plus petit changement écarte de grands malheurs »."
	},
	{
		question: "Question n°10 : Que devient un malheur clairement prédit selon la logique déterministe ?",
		answers: ["Inévitable", "Il n'arriverait point (car on peut agir pour l'éviter)", "Plus grave encore"],
		correct: 2,
		explanation: "Alain explique que cela « fait qu'un malheur bien clairement prédit n'arriverait point »."
	},
	{
		question: "Question n°11 : Comment le fatalisme réagit-il face à l'argument du déterminisme (§4) ?",
		answers: ["Il l'accepte", "Il ne se rend pas pour si peu", "Il se transforme en science"],
		correct: 2,
		explanation: "Alain note avec ironie : « Mais on sait que le fatalisme ne se rend pas pour si peu »."
	},
	{
		question: "Question n°12 : Quel est l'argument du fataliste si un malheur prédit est évité (§5) ?",
		answers: ["La prédiction était fausse", "C'est que fatalement il devait l'être", "C'est un miracle"],
		correct: 2,
		explanation: "Le fataliste affirme : « Si le malheur a été évité, c'est que fatalement il devait l'être »."
	},
	{
		question: "Question n°13 : Que signifie la phrase « Il était écrit que tu guérirais » (§6) ?",
		answers: ["Une métaphore religieuse", "L'intégration de l'action (prendre le remède) dans le scénario fatal", "Une garantie médicale"],
		correct: 2,
		explanation: "Le fatalisme inclut rétroactivement les causes (prendre le remède) dans la prédiction pour ne jamais avoir tort."
	},
	{
		question: "Question n°14 : Que signifie l'expression « et ainsi de suite » à la fin du §6 ?",
		answers: ["Une liste exhaustive", "La régression à l'infini des justifications fatalistes", "Une conclusion définitive"],
		correct: 2,
		explanation: "Cela montre que le fataliste peut remonter la chaîne des causes indéfiniment pour sauver sa prédiction."
	},
	{
		question: "Question n°15 : En quoi le fatalisme se transforme-t-il au §7 ?",
		answers: ["En athéisme", "En déterminisme théologique", "En science moderne"],
		correct: 2,
		explanation: "Alain écrit : « Le fatalisme se transforme ainsi en un déterminisme théologique »."
	},
	{
		question: "Question n°16 : Que devient l'oracle dans cette transformation théologique ?",
		answers: ["Un charlatan", "Un dieu parfaitement instruit", "Une métaphore poétique"],
		correct: 2,
		explanation: "« l'oracle devient un dieu parfaitement instruit »."
	},
	{
		question: "Question n°17 : Pourquoi ce dieu voit-il d'avance les effets ?",
		answers: ["Par magie", "Parce qu'il voit aussi les causes", "Parce qu'il contrôle le hasard"],
		correct: 2,
		explanation: "Il voit les effets « parce qu'il voit aussi les causes »."
	},
	{
		question: "Question n°18 : Quelle dispute subsiste selon le §8 ?",
		answers: ["Entre la science et la religion", "Entre la bonté de Dieu et sa sagesse", "Entre le bien et le mal"],
		correct: 2,
		explanation: "« Il reste à disputer si c'est la bonté de Dieu ou sa sagesse qui l'emportera »."
	},
	{
		question: "Question n°19 : Quelle est la conclusion d'Alain sur ces débats au §9 ?",
		answers: ["Ils sont essentiels", "Ces jeux de paroles sont sans fin", "Ils mènent à la vérité"],
		correct: 2,
		explanation: "Il conclut de manière lapidaire : « Ces jeux de paroles sont sans fin »."
	},
	{
		question: "Question n°20 : Quelle est la différence fondamentale entre fatalisme et déterminisme selon ce texte ?",
		answers: ["Aucune, ce sont des synonymes", "Le fatalisme ignore les causes, le déterminisme les prend en compte", "Le déterminisme est une superstition"],
		correct: 2,
		explanation: "Le fatalisme dit « quoi qu'il arrive », le déterminisme dit « à cause de ceci, cela arrive », laissant une place à l'action sur les causes."
	},
	{
		question: "Question n°21 : Que dénonce Alain à travers le terme « superstition » ?",
		answers: ["La religion organisée", "Une croyance irrationnelle qui nie l'efficacité des causes réelles", "La science"],
		correct: 2,
		explanation: "Le fatalisme est une superstition car il croit à une fin inéluctable indépendamment des moyens et des causes."
	},
	{
		question: "Question n°22 : Pourquoi l'exemple d'Eschyle est-il qualifié de « fable » ?",
		answers: ["Parce qu'Eschyle était un fabuliste", "Pour souligner le caractère mythique et non rationnel du récit", "Parce que c'est une histoire pour enfants"],
		correct: 2,
		explanation: "Le terme « fable » marque la distance critique d'Alain face à ces récits légendaires."
	},
	{
		question: "Question n°23 : Quel est le ton d'Alain dans ce passage ?",
		answers: ["Mystique et contemplatif", "Critique, ironique et rationaliste", "Triste et résigné"],
		correct: 2,
		explanation: "Alain démystifie le fatalisme avec ironie (« ne se rend pas pour si peu », « jeux de paroles »)."
	},
	{
		question: "Question n°24 : Que sous-entend l'expression « jeux de paroles » ?",
		answers: ["Des discussions amusantes", "Des arguments verbaux creux, sans prise sur le réel", "Des poèmes"],
		correct: 2,
		explanation: "Cela désigne des sophismes ou des raisonnements circulaires qui ne font que sauver l'apparence de la vérité sans expliquer le réel."
	},
	{
		question: "Question n°25 : En quoi le déterminisme, selon Alain, préserve-t-il la liberté d'action ?",
		answers: ["Il la nie totalement", "En montrant que modifier les causes (le plus petit changement) modifie les effets", "En disant que tout est hasard"],
		correct: 2,
		explanation: "Si le plus petit changement écarte le malheur, alors l'action humaine sur les causes est efficace et sensée."
	},
	{
		question: "Question n°26 : Que signifie « parfaitement instruit » à propos du dieu du déterminisme théologique ?",
		answers: ["Qu'il a été à l'école", "Qu'il possède une connaissance totale et omnisciente des causes et des effets", "Qu'il est sage"],
		correct: 2,
		explanation: "C'est une manière rationalisée de décrire l'omniscience divine dans le cadre du déterminisme."
	},
	{
		question: "Question n°27 : Pourquoi Alain mentionne-t-il la « bonté » et la « sagesse » de Dieu ?",
		answers: ["Pour faire un cours de théologie", "Pour montrer que même dans cette version sophistiquée, le fatalisme débouche sur des apories insolubles", "Pour louer Dieu"],
		correct: 2,
		explanation: "C'est une nouvelle impasse : si Dieu sait tout et peut tout, pourquoi le mal existe-t-il ? Le débat devient un « jeu de paroles »."
	},
	{
		question: "Question n°28 : Quel est le rôle de la conjonction « Au lieu que » (§3) ?",
		answers: ["Marquer une similitude", "Marquer une opposition forte entre deux conceptions", "Marquer une conséquence"],
		correct: 2,
		explanation: "Elle introduit le déterminisme comme l'opposé rationnel du fatalisme naïf."
	},
	{
		question: "Question n°29 : Que révèle l'usage du « on » dans « on sait que le fatalisme ne se rend pas » ?",
		answers: ["Une ignorance", "Une vérité d'expérience commune sur la ténacité des croyances irrationnelles", "Une rumeur"],
		correct: 2,
		explanation: "C'est un « on » de vérité générale, soulignant que c'est une caractéristique connue du raisonnement fataliste."
	},
	{
		question: "Question n°30 : En quoi la prise du remède (§6) est-elle un exemple clé ?",
		answers: ["C'est un acte médical banal", "C'est un acte volontaire qui est une cause réelle de la guérison, que le fatalisme tente d'absorber dans sa prédiction", "C'est une métaphore"],
		correct: 2,
		explanation: "Cela montre comment le fatalisme récupère l'action humaine (cause) pour en faire un simple maillon de la prédiction (effet annoncé)."
	},
	{
		question: "Question n°31 : Quelle est la structure logique du §5 et §6 ?",
		answers: ["Une démonstration mathématique", "Un raisonnement circulaire (tautologie) pour sauver la prédiction", "Une hypothèse scientifique"],
		correct: 2,
		explanation: "Si ça arrive, c'était écrit. Si ça n'arrive pas, c'était écrit que ça n'arriverait pas (et que tu ferais les gestes pour l'éviter). C'est irréfutable mais vide."
	},
	{
		question: "Question n°32 : Que signifie « à l'état naïf » (§1) ?",
		answers: ["À l'état pur, non sophistiqué, populaire", "À l'état infantile", "À l'état scientifique"],
		correct: 1,
		explanation: "Cela désigne la forme brute, non réfléchie et populaire de la croyance fataliste."
	},
	{
		question: "Question n°33 : Pourquoi le déterminisme n'est-il pas du fatalisme selon ce texte ?",
		answers: ["Parce qu'il est plus compliqué", "Parce qu'il reconnaît l'efficacité causale de l'action, rendant l'avenir modifiable", "Parce qu'il croit au hasard"],
		correct: 2,
		explanation: "Le déterminisme lie les événements par des causes, donc changer la cause change l'effet, ce qui donne un sens à l'action."
	},
	{
		question: "Question n°34 : Quel est l'enjeu philosophique de ce texte ?",
		answers: ["Prouver l'existence de Dieu", "Distinguer une vision rationnelle du monde (déterminisme) d'une vision magique (fatalisme) pour préserver le sens de l'action", "Critiquer la médecine"],
		correct: 2,
		explanation: "Alain, philosophe de l'action et de la volonté, veut montrer que croire au fatalisme est une démission de l'esprit et de l'action."
	},
	{
		question: "Question n°35 : Que signifie « disputer » dans « Il reste à disputer » (§8) ?",
		answers: ["Se battre physiquement", "Discuter, débattre de manière interminable", "Être d'accord"],
		correct: 2,
		explanation: "Au sens classique, disputer signifie débattre ou argumenter, souvent de manière stérile ici."
	},
	{
		question: "Question n°36 : L'oracle, dans la version théologique, perd-il son caractère mystérieux ?",
		answers: ["Oui, il devient une connaissance rationnelle des causes et des effets par un dieu instruit", "Non, il reste magique", "Il disparaît totalement"],
		correct: 1,
		explanation: "Il devient un « dieu parfaitement instruit », ce qui rationalise le mystère en une omniscience causale."
	},
	{
		question: "Question n°37 : En quoi ce texte s'inscrit-il dans la tradition des Lumières ?",
		answers: ["Il la rejette", "Il combat la superstition par la raison et l'analyse des causes", "Il prône la foi"],
		correct: 2,
		explanation: "La lutte contre la « superstition » et l'appel à la compréhension des causes sont des thèmes centraux des Lumières."
	},
	{
		question: "Question n°38 : Que nous apprend ce texte sur la conception du temps chez le fataliste ?",
		answers: ["Le temps est cyclique", "Le futur est déjà fixé et écrit, indépendamment du présent", "Le temps n'existe pas"],
		correct: 2,
		explanation: "Pour le fataliste, l'avenir est déjà « écrit », ce qui annule l'importance du présent comme moment de décision."
	},
	{
		question: "Question n°39 : Que nous apprend ce texte sur la conception du temps chez le déterministe ?",
		answers: ["Le futur est ouvert à l'influence des causes présentes", "Le futur est identique au passé", "Le temps est une illusion"],
		correct: 1,
		explanation: "Le « plus petit changement » présent peut écarter un malheur futur, ce qui donne au présent une efficacité réelle."
	},
	{
		question: "Question n°40 : Pourquoi Alain utilise-t-il le futur antérieur « aura été évité » (implicite dans « a été évité ») ?",
		answers: ["Pour marquer l'antériorité d'une action par rapport à une autre dans le passé", "Pour parler du futur", "Par erreur"],
		correct: 1,
		explanation: "Cela situe l'évitement comme un fait accompli que le fataliste doit ensuite expliquer rétroactivement."
	},
	{
		question: "Question n°41 : Le déterminisme théologique est-il une victoire de la raison selon Alain ?",
		answers: ["Oui, absolument", "Non, c'est une fuite du fatalisme qui débouche sur des « jeux de paroles sans fin »", "Oui, car il prouve Dieu"],
		correct: 2,
		explanation: "Alain le présente comme une transformation rhétorique du fatalisme qui ne résout pas le problème, mais le déplace dans des disputes stériles."
	},
	{
		question: "Question n°42 : Que signifie « l'emportera » (§8) ?",
		answers: ["Partira en colère", "L'emportera en termes d'importance ou de prédominance dans le débat", "Gagnera une course"],
		correct: 2,
		explanation: "Cela signifie prévaloir ou dominer dans le débat théologique."
	},
	{
		question: "Question n°43 : En quoi l'attitude fataliste est-elle une forme de paresse intellectuelle ?",
		answers: ["Elle ne l'est pas", "Elle dispense de chercher les causes réelles en invoquant une prédiction magique", "Elle est trop complexe"],
		correct: 2,
		explanation: "Au lieu d'analyser pourquoi quelque chose arrive (déterminisme), le fataliste se contente de dire « c'était écrit »."
	},
	{
		question: "Question n°44 : Quel est le lien entre ce texte et la notion de responsabilité ?",
		answers: ["Aucun", "Le déterminisme permet la responsabilité (j'aurais pu agir autrement sur les causes), le fatalisme la nie", "Le fatalisme augmente la responsabilité"],
		correct: 2,
		explanation: "Si tout est écrit quoi qu'il arrive, je ne suis pas responsable. Si mes actions (causes) changent le futur, je suis responsable."
	},
	{
		question: "Question n°45 : Que représente le « fils du roi » dans l'imaginaire philosophique ?",
		answers: ["Un personnage historique précis", "Un archétype de la tentative vaine d'échapper à son destin", "Un roi réel"],
		correct: 2,
		explanation: "C'est une référence à des mythes (comme Œdipe ou d'autres légendes) où l'on tente de fuir une prophétie, ce qui la réalise."
	},
	{
		question: "Question n°46 : Pourquoi Alain dit-il « ces jeux de paroles » au pluriel ?",
		answers: ["Parce qu'il y a plusieurs débats (bonté vs sagesse, causes vs effets, etc.)", "Parce qu'il aime les mots", "Par erreur"],
		correct: 1,
		explanation: "Cela englobe l'ensemble des arguties théologiques et fatalistes qui tournent en rond sans apporter de connaissance réelle."
	},
	{
		question: "Question n°47 : En quoi ce texte est-il un éloge implicite de la médecine et de l'action ?",
		answers: ["Il ne l'est pas", "En citant « prendre le remède » comme une cause efficace que le déterminisme valorise", "Il critique la médecine"],
		correct: 2,
		explanation: "Demander le médecin et prendre le remède sont des actions causales efficaces pour écarter le malheur (la maladie)."
	},
	{
		question: "Question n°48 : Quelle est la fonction du §9 dans l'architecture du texte ?",
		answers: ["Introduire un nouveau sujet", "Conclure de manière péremptoire et ironique sur la stérilité du débat fataliste", "Poser une question ouverte"],
		correct: 2,
		explanation: "C'est une chute qui disqualifie l'ensemble du raisonnement théologico-fataliste comme étant un « jeu de paroles »."
	},
	{
		question: "Question n°49 : Que signifie « quelles que soient les causes » (§1) ?",
		answers: ["Peu importe les actions entreprises, le résultat est fixé", "Les causes sont inconnues", "Les causes sont multiples"],
		correct: 1,
		explanation: "C'est l'essence du fatalisme : l'indifférence aux moyens et aux causes réelles au profit d'une fin supposée inéluctable."
	},
	{
		question: "Question n°50 : Quelle est la thèse globale de cet extrait ?",
		answers: ["Le fatalisme est une vérité supérieure", "Le fatalisme est une superstition qui nie l'efficacité des causes, et même lorsqu'il se rationalise en déterminisme théologique, il reste un jeu de paroles stérile face à l'efficacité de l'action déterministe", "Dieu contrôle tout"],
		correct: 2,
		explanation: "Alain oppose la fécondité du déterminisme (qui permet d'agir sur les causes) à la stérilité du fatalisme (qui annule l'action)."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "Fatalisme vs Déterminisme (Alain)" },
		{ key: 1, parent: 0, text: "L'idée fataliste (Superstition)" },
		{ key: 2, parent: 1, text: "[1] Ce qui est prédit arrive, quelles que soient les causes" },
		{ key: 3, parent: 1, text: "[1-2] Exemples : Eschyle, fils du roi, proverbe du noyé" },
		{ key: 4, parent: 0, text: "Le déterminisme (Raison)" },
		{ key: 5, parent: 4, text: "[3] Le plus petit changement (cause) écarte les malheurs (effets)" },
		{ key: 6, parent: 4, text: "[3] Un malheur prédit peut être évité par l'action" },
		{ key: 7, parent: 0, text: "La dérive du fatalisme" },
		{ key: 8, parent: 7, text: "[4-5] Il ne se rend pas : si évité, c'était écrit qu'il le serait" },
		{ key: 9, parent: 7, text: "[6] Intégration des causes (remède, médecin) dans la prédiction" },
		{ key: 10, parent: 7, text: "[7] Transformation en déterminisme théologique (Dieu voit causes et effets)" },
		{ key: 11, parent: 0, text: "La conclusion d'Alain" },
		{ key: 12, parent: 11, text: "[8-9] Disputes stériles (bonté vs sagesse) et jeux de paroles sans fin" }
	]
};

// ============================================
// APP : EXPLICATION DE TEXTE
// ============================================

const textes = [
	{
		contenu: philosophyData.texte,
		source: philosophyData.source,
		reponses: {
			origine: "Alain, Éléments de philosophie, p. 240",
			theme: "La liberté",
			these: "Le fatalisme est une superstition qui nie l'efficacité des causes au profit d'une prédiction inéluctable, tandis que le déterminisme, en reconnaissant la chaîne causale, préserve le sens de l'action humaine ; toute tentative du fatalisme de se rationaliser en déterminisme théologique ne mène qu'à des jeux de paroles stériles.",
			interet: "Ce texte est fondamental pour distinguer deux conceptions souvent confondues : le fatalisme (magique et résigné) et le déterminisme (rationnel et ouvert à l'action). Alain y défend une philosophie de la volonté et de l'action, montrant que reconnaître les causes, c'est se donner les moyens d'agir sur les effets, contrairement à la résignation fataliste.",
			problematique: "En quoi la distinction entre fatalisme et déterminisme est-elle essentielle pour préserver le sens de l'action humaine et démasquer les raisonnements circulaires de la superstition ?"
		}
	}
];

// ============================================
// APP : ALGORIGRAMME
// ------------------------------------------------------------
// BLOC RÉÉCRIT AUTOMATIQUEMENT PAR L'ÉDITEUR LORS D'UN EXPORT.
// Ne rien ajouter APRÈS ce bloc : un export ne conserverait que
// ce qui le précède + le bloc régénéré.
// ------------------------------------------------------------
// Le nom de la variable doit commencer par « algorigramme ».
// ============================================

const algorigramme = {
	"nodeDataArray": [
		{
			"key": "1",
			"text": "DÉBUT\nDeux conceptions\ns'opposent :\nFatalisme vs\nDéterminisme",
			"loc": "217.18 120",
			"category": "ellipse",
			"color": "#74b9ff",
			"borderColor": "#286DB3",
			"width": 220,
			"height": 100,
			"revealed": true
		},
		{
			"key": "2",
			"text": "FATALISME (Superstition) :\nCe qui est prédit arrive,\nquelles que soient\nles causes (ex: Eschyle).",
			"loc": "480 120",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "3",
			"text": "DÉTERMINISME (Raison) :\nLe plus petit changement\ndes causes écarte\nles malheurs.\nL'action est efficace.",
			"loc": "480 259.98",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "4",
			"text": "RÉACTION DU\nFATALISME :\nSi le malheur est évité,\nc'est qu'il était écrit\nqu'il le serait (et que\ntu prendrais le remède).",
			"loc": "760.53 120",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "5",
			"text": "TRANSFORMATION :\nLe fatalisme devient\nun déterminisme\nthéologique (Dieu\nvoit causes et effets).",
			"loc": "1034.36 120",
			"category": "rectangle",
			"color": "#a3bffa",
			"borderColor": "#3b5bdb",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "6",
			"text": "FIN (Critique d'Alain) :\nDisputes sur la bonté\nou la sagesse de Dieu.\nCe sont des jeux de\nparoles sans fin.",
			"loc": "1319.74 120",
			"category": "ellipse",
			"color": "#ff7675",
			"borderColor": "#d63031",
			"width": 260,
			"height": 120,
			"revealed": true
		}
	],
	"linkDataArray": [
		{
			"from": "1",
			"to": "2",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "1",
			"to": "3",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "2",
			"to": "4",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "4",
			"to": "5",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "5",
			"to": "6",
			"fromSide": "right",
			"toSide": "left"
		}
	]
};