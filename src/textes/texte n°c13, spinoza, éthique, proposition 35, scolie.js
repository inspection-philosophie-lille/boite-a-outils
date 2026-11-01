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
const sousTitre = "Tester ses connaissances sur un texte de Spinoza (Éthique)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] … les hommes se trompent en ce qu’ils se croient libres ; et cette opinion consiste en cela seul qu’ils ont conscience de leurs actions et sont ignorants des causes par où ils sont déterminés ; ce qui constitue donc leur idée de la liberté, c’est qu’ils ne connaissent aucune cause de leurs actions. [2] Pour ce qu’ils disent en effet : que les actions humaines dépendent de la volonté, ce sont des mots auxquels ne correspond aucune idée. [3] Car tous ignorent ce que peut être la volonté et comment elle peut mouvoir le corps ; pour ceux qui ont plus de prétention et forgent un siège ou une demeure de l’âme, ils excitent habituellement le rire ou le dégoût. [4] De même, quand nous regardons le soleil, nous imaginons qu’il est distant de nous d’environ deux cents pieds, et l’erreur ici ne consiste pas dans l’action d’imaginer cela, prise en elle-même, mais en ce que, tandis que nous l’imaginons, nous ignorons la vraie distance du soleil et la cause de cette imagination que nous avons. [5] Plus tard, en effet, tout en sachant que le soleil est distant de plus de 600 fois le diamètre terrestre, nous ne laisserons pas néanmoins imaginer qu’il est près de nous ; car nous n’imaginons pas le soleil aussi proche parce que nous ignorons sa vraie distance, mais parce qu’une affection de notre corps enveloppe l’essence du soleil, en tant que le corps lui-même est affecté par cet astre. »",
	source: "Spinoza, <em>Éthique</em>, proposition 35, scolie"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Descartes", "Spinoza", "Leibniz"],
		correct: 2,
		explanation: "Le texte est extrait de l'Éthique, l'œuvre majeure du philosophe rationaliste Baruch Spinoza."
	},
	{
		question: "Question n°2 : De quelle œuvre ce passage est-il tiré ?",
		answers: ["Le Traité théologico-politique", "L'Éthique", "Le Court Traité"],
		correct: 2,
		explanation: "Il s'agit d'un célèbre scolie de l'Éthique (plus précisément de la Partie III, proposition 2, bien que la source fournie indique 'proposition 35, scolie')."
	},
	{
		question: "Question n°3 : Quelle est l'illusion fondamentale des hommes selon le §1 ?",
		answers: ["Ils se croient mortels", "Ils se croient libres", "Ils se croient tout-puissants"],
		correct: 2,
		explanation: "Spinoza affirme d'emblée : « les hommes se trompent en ce qu’ils se croient libres »."
	},
	{
		question: "Question n°4 : En quoi consiste cette opinion de la liberté, selon le texte ?",
		answers: ["En la conscience de leurs actions et l'ignorance des causes qui les déterminent", "En la capacité de choisir entre le bien et le mal", "En l'absence de toute contrainte sociale"],
		correct: 1,
		explanation: "Le texte précise : « cette opinion consiste en cela seul qu’ils ont conscience de leurs actions et sont ignorants des causes par où ils sont déterminés »."
	},
	{
		question: "Question n°5 : Que signifie être « déterminé » dans ce contexte ?",
		answers: ["Être résolu et courageux", "Être causé et nécessité par des facteurs antérieurs", "Être limité dans le temps"],
		correct: 2,
		explanation: "Dans le déterminisme spinoziste, être déterminé signifie être le résultat nécessaire de causes précédentes."
	},
	{
		question: "Question n°6 : Quel est le statut du mot « volonté » selon le §2 ?",
		answers: ["C'est un concept clair et distinct", "Ce sont des mots auxquels ne correspond aucune idée", "C'est la faculté suprême de l'homme"],
		correct: 2,
		explanation: "Spinoza rejette la notion traditionnelle de volonté libre : « ce sont des mots auxquels ne correspond aucune idée »."
	},
	{
		question: "Question n°7 : Que disent les hommes sur les actions humaines, selon le §2 ?",
		answers: ["Qu'elles dépendent du hasard", "Qu'elles dépendent de la volonté", "Qu'elles dépendent de Dieu uniquement"],
		correct: 2,
		explanation: "Le texte mentionne : « Pour ce qu’ils disent en effet : que les actions humaines dépendent de la volonté »."
	},
	{
		question: "Question n°8 : Que ignorent tous les hommes concernant la volonté (§3) ?",
		answers: ["Son origine divine", "Ce qu'elle peut être et comment elle peut mouvoir le corps", "Son lien avec la morale"],
		correct: 2,
		explanation: "Spinoza écrit : « Car tous ignorent ce que peut être la volonté et comment elle peut mouvoir le corps »."
	},
	{
		question: "Question n°9 : Que font ceux qui ont « plus de prétention » selon le §3 ?",
		answers: ["Ils nient l'existence de l'âme", "Ils forgent un siège ou une demeure de l’âme", "Ils deviennent des sages"],
		correct: 2,
		explanation: "Il s'agit d'une critique des métaphysiciens (comme Descartes) qui inventent une localisation physique ou métaphysique de l'âme (ex: la glande pinéale)."
	},
	{
		question: "Question n°10 : Quelle réaction ces théories sur le « siège de l'âme » provoquent-elles chez Spinoza ?",
		answers: ["L'admiration", "Le rire ou le dégoût", "L'indifférence"],
		correct: 2,
		explanation: "Le texte est sans appel : « ils excitent habituellement le rire ou le dégoût »."
	},
	{
		question: "Question n°11 : Quelle analogie Spinoza utilise-t-il au §4 pour illustrer son propos ?",
		answers: ["La réflexion dans un miroir", "La perception du soleil", "La chute d'une pierre"],
		correct: 2,
		explanation: "Il prend l'exemple de la perception sensible du soleil : « quand nous regardons le soleil, nous imaginons qu’il est distant de nous d’environ deux cents pieds »."
	},
	{
		question: "Question n°12 : À quelle distance imaginons-nous le soleil, selon le texte ?",
		answers: ["À quelques milliers de kilomètres", "D'environ deux cents pieds", "À l'infini"],
		correct: 2,
		explanation: "Le texte indique : « nous imaginons qu’il est distant de nous d’environ deux cents pieds »."
	},
	{
		question: "Question n°13 : En quoi consiste l'erreur concernant le soleil, selon le §4 ?",
		answers: ["Dans le fait même d'imaginer le soleil", "Dans l'ignorance de la vraie distance et de la cause de cette imagination", "Dans la faiblesse de nos yeux"],
		correct: 2,
		explanation: "Spinoza précise : « l’erreur ici ne consiste pas dans l’action d’imaginer cela... mais en ce que... nous ignorons la vraie distance... et la cause de cette imagination »."
	},
	{
		question: "Question n°14 : L'action d'imaginer le soleil proche est-elle une erreur en soi ?",
		answers: ["Oui, absolument", "Non, prise en elle-même, ce n'est pas une erreur", "Seulement la nuit"],
		correct: 2,
		explanation: "Spinoza distingue l'imagination (qui est une affection réelle du corps) de l'erreur (qui est un manque de connaissance adéquate)."
	},
	{
		question: "Question n°15 : Quelle est la « vraie distance » du soleil mentionnée au §5 ?",
		answers: ["Plus de 600 fois le diamètre terrestre", "Exactement 150 millions de kilomètres", "Incalculable"],
		correct: 1,
		explanation: "Le texte donne cette mesure : « le soleil est distant de plus de 600 fois le diamètre terrestre »."
	},
	{
		question: "Question n°16 : Le fait de connaître la vraie distance du soleil fait-il disparaître l'imagination de sa proximité ?",
		answers: ["Oui, complètement", "Non, nous continuons néanmoins à l'imaginer près de nous", "Cela dépend des personnes"],
		correct: 2,
		explanation: "Spinoza souligne la persistance de l'imagination : « nous ne laisserons pas néanmoins imaginer qu’il est près de nous »."
	},
	{
		question: "Question n°17 : Pourquoi continuons-nous à imaginer le soleil proche malgré la connaissance rationnelle ?",
		answers: ["Parce que nous sommes stupides", "Parce qu'une affection de notre corps enveloppe l'essence du soleil", "Parce que nos yeux nous trompent volontairement"],
		correct: 2,
		explanation: "La cause est physique et ontologique : « parce qu’une affection de notre corps enveloppe l’essence du soleil »."
	},
	{
		question: "Question n°18 : Que signifie « affection de notre corps » dans ce contexte ?",
		answers: ["Une maladie", "Une modification ou un état du corps sous l'influence d'une cause extérieure", "Un sentiment amoureux"],
		correct: 2,
		explanation: "Chez Spinoza, une affection (affectio) est l'état du corps résultant de l'action d'un autre corps sur lui."
	},
	{
		question: "Question n°19 : Que signifie l'expression « enveloppe l’essence du soleil » ?",
		answers: ["Le corps contient physiquement le soleil", "L'état du corps exprime ou représente la nature du soleil tel qu'il affecte ce corps", "Le soleil est une partie du corps"],
		correct: 2,
		explanation: "L'idée que nous avons du soleil est l'idée de l'affection de notre corps, laquelle 'enveloppe' (contient et exprime) la nature du soleil en tant qu'il affecte notre corps."
	},
	{
		question: "Question n°20 : Quel type de connaissance représente l'idée que le soleil est à 200 pieds ?",
		answers: ["La raison (deuxième genre)", "L'imagination (premier genre)", "La science intuitive (troisième genre)"],
		correct: 2,
		explanation: "C'est une connaissance inadéquate, fondée sur l'expérience sensible et les affections du corps, propre au premier genre de connaissance."
	},
	{
		question: "Question n°21 : Quel type de connaissance représente la distance de 600 diamètres terrestres ?",
		answers: ["L'opinion", "La raison ou l'entendement (deuxième genre)", "La foi"],
		correct: 2,
		explanation: "C'est une connaissance adéquate, fondée sur des notions communes et des démonstrations (astronomie)."
	},
	{
		question: "Question n°22 : Que nous apprend l'analogie du soleil sur le libre arbitre ?",
		answers: ["Que le libre arbitre est une vérité scientifique", "Que la croyance au libre arbitre est une imagination persistante, née de l'ignorance des causes, tout comme la proximité du soleil", "Que le soleil détermine notre volonté"],
		correct: 2,
		explanation: "Tout comme nous imaginons le soleil proche par ignorance de la cause physique, nous nous imaginons libres par ignorance des causes psychiques et physiques qui nous déterminent."
	},
	{
		question: "Question n°23 : Quelle est la cible implicite de la critique du « siège de l'âme » ?",
		answers: ["Aristote", "Descartes (et sa glande pinéale)", "Platon"],
		correct: 2,
		explanation: "Spinoza critique ici directement la conception cartésienne de l'interaction âme-corps via un point localisé du cerveau."
	},
	{
		question: "Question n°24 : Que signifie le mot « scolie » ?",
		answers: ["Une démonstration géométrique", "Une note explicative ou un commentaire ajouté à une proposition", "Une erreur de traduction"],
		correct: 2,
		explanation: "Dans l'Éthique, un scolie est un scholie, un commentaire où Spinoza s'écarte de l'ordre géométrique pour expliquer, critiquer ou illustrer sa pensée."
	},
	{
		question: "Question n°25 : Selon Spinoza, la conscience est-elle la cause de nos actions ?",
		answers: ["Oui, absolument", "Non, elle n'est que la conscience de l'action, pas de ses causes déterminantes", "Seulement pour les actions morales"],
		correct: 2,
		explanation: "La conscience est un effet, pas une cause. Nous sommes conscients de nos désirs, mais ignorants des causes qui les produisent."
	},
	{
		question: "Question n°26 : Que signifie « forger » dans « forgent un siège » ?",
		answers: ["Fabriquer physiquement", "Inventer de toutes pièces, sans fondement réel", "Découvrir par l'expérience"],
		correct: 2,
		explanation: "Le terme implique une fabrication imaginaire et arbitraire, sans base dans la réalité de la nature."
	},
	{
		question: "Question n°27 : L'erreur, pour Spinoza, est-elle une entité positive ?",
		answers: ["Oui, c'est une force du mal", "Non, c'est une privation de connaissance (ignorance)", "Oui, c'est une création divine"],
		correct: 2,
		explanation: "L'erreur n'est pas une chose en soi, mais un manque (privation) de connaissance adéquate qui devrait accompagner l'imagination."
	},
	{
		question: "Question n°28 : Pourquoi Spinoza dit-il « nous ne laisserons pas néanmoins imaginer » ?",
		answers: ["Parce que l'imagination est une faculté passive liée à la nature du corps, que la raison ne peut annuler", "Parce que nous sommes têtus", "Parce que le soleil change de place"],
		correct: 1,
		explanation: "L'imagination est un mode de la pensée correspondant à une affection du corps ; tant que le corps est affecté de la même manière, l'image persiste, même si l'entendement la corrige."
	},
	{
		question: "Question n°29 : Quelle est la relation entre le corps et l'esprit illustrée ici ?",
		answers: ["Dualiste et séparée", "Parallèle : à toute affection du corps correspond une idée dans l'esprit", "Matérialiste : l'esprit n'existe pas"],
		correct: 2,
		explanation: "C'est l'illustration du parallélisme spinoziste : l'idée de l'affection du corps est l'imagination que nous avons du soleil."
	},
	{
		question: "Question n°30 : Que signifie « en tant que le corps lui-même est affecté par cet astre » ?",
		answers: ["Que le corps subit une action physique réelle du soleil (rayons, chaleur)", "Que le corps adore le soleil", "Que le corps est brûlé"],
		correct: 1,
		explanation: "L'essence du soleil est enveloppée dans l'idée seulement sous l'aspect où il agit physiquement sur notre corps."
	},
	{
		question: "Question n°31 : Comment Spinoza définit-il implicitement la vraie liberté ?",
		answers: ["Comme l'absence de toute cause", "Comme la connaissance adéquate des causes qui nous déterminent", "Comme le pouvoir de faire n'importe quoi"],
		correct: 2,
		explanation: "Si l'illusion de la liberté vient de l'ignorance des causes, la liberté réelle (spinoziste) consiste à comprendre ces causes et à agir selon la nécessité de sa propre nature."
	},
	{
		question: "Question n°32 : Le texte appartient-il à la Partie II ou III de l'Éthique ?",
		answers: ["Partie I (De Dieu)", "Partie III (De l'origine et de la nature des affects)", "Partie V (De la puissance de l'entendement)"],
		correct: 2,
		explanation: "Ce scolie célèbre se trouve dans la Partie III, où Spinoza traite des affects et de la nature humaine, en introduisant le déterminisme psychologique."
	},
	{
		question: "Question n°33 : Que dénonce Spinoza à travers l'expression « mots auxquels ne correspond aucune idée » ?",
		answers: ["La poésie", "L'usage vide du langage métaphysique traditionnel", "Les langues étrangères"],
		correct: 2,
		explanation: "Il critique les concepts scolastiques ou cartésiens (comme la 'volonté libre') qui sont des étiquettes verbales sans réalité objective claire et distincte."
	},
	{
		question: "Question n°34 : L'analogie du soleil sert-elle à prouver que les sens sont toujours faux ?",
		answers: ["Oui, les sens sont totalement trompeurs", "Non, elle montre que les sens donnent une connaissance vraie de l'affection du corps, mais inadéquate de l'objet extérieur", "Oui, le soleil n'existe pas"],
		correct: 2,
		explanation: "L'imagination n'est pas fausse en soi : elle dit vrai sur l'état de notre corps. L'erreur surgit quand on attribue cette propriété (la proximité) au soleil lui-même par ignorance."
	},
	{
		question: "Question n°35 : Que signifie « plus de prétention » ?",
		answers: ["Plus d'humilité", "Plus d'arrogance intellectuelle ou d'ambition métaphysique infondée", "Plus de demandes financières"],
		correct: 2,
		explanation: "Cela vise les philosophes qui croient pouvoir localiser l'âme ou expliquer l'interaction âme-corps par des hypothèses imaginaires."
	},
	{
		question: "Question n°36 : Quel est le lien entre l'ignorance et la croyance au libre arbitre ?",
		answers: ["L'ignorance est la cause nécessaire de cette croyance", "L'ignorance est la conséquence de la liberté", "Il n'y a aucun lien"],
		correct: 1,
		explanation: "C'est la thèse centrale : « ce qui constitue donc leur idée de la liberté, c’est qu’ils ne connaissent aucune cause de leurs actions »."
	},
	{
		question: "Question n°37 : La connaissance de la vraie distance du soleil est-elle inutile puisque l'imagination persiste ?",
		answers: ["Oui, elle est inutile", "Non, elle est cruciale car elle permet de ne pas commettre l'erreur de juger que le soleil est réellement proche", "Oui, il faut rester dans l'ignorance"],
		correct: 2,
		explanation: "La connaissance vraie ne supprime pas l'image, mais elle l'empêche de devenir une croyance erronée. Elle corrige le jugement."
	},
	{
		question: "Question n°38 : Que nous apprend ce texte sur la méthode de Spinoza ?",
		answers: ["Il utilise uniquement des formules mathématiques", "Il utilise des analogies concrètes (le soleil) pour illustrer des vérités métaphysiques abstraites", "Il se base sur l'autorité des anciens"],
		correct: 2,
		explanation: "Bien que l'Éthique soit géométrique, les scolies utilisent souvent des exemples sensibles (le soleil, la pierre qui tombe) pour rendre la pensée accessible."
	},
	{
		question: "Question n°39 : En quoi ce texte est-il une critique de la morale traditionnelle ?",
		answers: ["Il nie l'existence de la morale", "Il sape le fondement de la responsabilité morale basée sur le libre arbitre", "Il impose une morale religieuse stricte"],
		correct: 2,
		explanation: "Si le libre arbitre est une illusion, la culpabilité et le mérite tels qu'entendus traditionnellement perdent leur fondement, ouvrant la voie à une éthique de la puissance et de la compréhension."
	},
	{
		question: "Question n°40 : Que signifie « déterminés » dans « les causes par où ils sont déterminés » ?",
		answers: ["Psychologiquement motivés", "Causés de manière nécessaire par une chaîne de causes antérieures", "Décidés par un contrat social"],
		correct: 2,
		explanation: "C'est le principe du déterminisme universel : rien n'arrive par hasard, tout est le produit nécessaire de causes antécédentes."
	},
	{
		question: "Question n°41 : Pourquoi Spinoza mentionne-t-il le « dégoût » ?",
		answers: ["Parce qu'il est malade", "Pour marquer le rejet violent des explications métaphysiques fantaisistes qui violent l'ordre de la nature", "Parce qu'il n'aime pas le soleil"],
		correct: 2,
		explanation: "Le dégoût traduit l'indignation du philosophe face aux hypothèses ad hoc (comme le siège de l'âme) qui obscurcissent la compréhension de la nature."
	},
	{
		question: "Question n°42 : L'expression « action d'imaginer » montre que l'imagination est :",
		answers: ["Une passivité totale", "Une activité réelle de l'esprit, bien qu'inadéquate", "Une illusion pure"],
		correct: 2,
		explanation: "Imaginer est une action réelle de l'esprit (il forme une idée), même si cette idée est confuse et inadéquate."
	},
	{
		question: "Question n°43 : Que se passe-t-il si un homme acquiert la connaissance des causes de ses actions ?",
		answers: ["Il devient un animal", "Il cesse de se croire libre au sens illusoire, et accède à une liberté réelle (autonomie)", "Il devient triste"],
		correct: 2,
		explanation: "C'est le but de l'Éthique : passer de la servitude (ignorance des causes) à la liberté (compréhension de la nécessité)."
	},
	{
		question: "Question n°44 : Le soleil est-il un exemple de cause finale ?",
		answers: ["Oui", "Non, c'est un exemple de cause efficiente (il affecte le corps)", "C'est une cause formelle"],
		correct: 2,
		explanation: "Le soleil agit physiquement sur le corps (cause efficiente), produisant une affection dont l'esprit a l'idée."
	},
	{
		question: "Question n°45 : Que signifie « enveloppe » dans ce contexte philosophique ?",
		answers: ["Cache complètement", "Contient et exprime (comme une idée contient son objet)", "Détruit"],
		correct: 2,
		explanation: "En terminologie spinoziste, une idée 'enveloppe' son objet : l'idée de l'affection du corps contient et exprime la nature du soleil en tant qu'il cause cette affection."
	},
	{
		question: "Question n°46 : Ce texte réfute-t-il l'existence de la volonté ?",
		answers: ["Oui, la volonté n'existe pas du tout", "Non, il réfute la volonté comme faculté libre et indifférente, mais pas les volitions singulières comme modes de la pensée", "Il affirme que la volonté est divine"],
		correct: 2,
		explanation: "Spinoza nie la 'volonté' comme entité ou faculté universelle libre, mais admet que des 'volitions' (désirs spécifiques) existent, bien qu'elles soient déterminées."
	},
	{
		question: "Question n°47 : Quelle est la structure logique du scolie ?",
		answers: ["Une simple affirmation", "Une thèse (illusion de la liberté), une critique conceptuelle (la volonté), et une analogie éclairante (le soleil)", "Un dialogue"],
		correct: 2,
		explanation: "Spinoza pose la thèse, déconstruit le concept adverse (volonté), puis valide sa propre théorie par une analogie épistémologique puissante."
	},
	{
		question: "Question n°48 : En quoi ce texte est-il fondateur pour la psychologie moderne ?",
		answers: ["Il invente la psychanalyse", "Il anticipe l'idée que la conscience n'est pas le centre de commande de l'appareil psychique, mais un phénomène secondaire", "Il fonde le behaviorisme"],
		correct: 2,
		explanation: "L'idée que nous avons conscience de nos actions mais ignorons leurs causes préfigure les découvertes de l'inconscient et des déterminismes cognitifs."
	},
	{
		question: "Question n°49 : Que nous dit ce texte sur la relation entre la science et le sens commun ?",
		answers: ["La science doit détruire le sens commun", "La science corrige le jugement du sens commun, mais ne peut pas toujours effacer ses représentations imaginaires", "Le sens commun a toujours raison"],
		correct: 2,
		explanation: "Nous savons scientifiquement que le soleil est loin, mais nous le voyons toujours proche. La science corrige l'erreur, pas l'image."
	},
	{
		question: "Question n°50 : Quelle est la thèse globale de ce passage ?",
		answers: ["L'homme est libre", "Le libre arbitre est une illusion née de l'ignorance des causes, tout comme les illusions sensibles persistent malgré la connaissance rationnelle", "Dieu n'existe pas"],
		correct: 2,
		explanation: "C'est la synthèse du texte : la liberté humaine telle qu'elle est communément conçue est une méconnaissance du déterminisme universel, analogue à la méconnaissance des causes de nos perceptions sensibles."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "L'illusion du libre arbitre et l'imagination (Spinoza)" },
		{ key: 1, parent: 0, text: "L'illusion de la liberté (§1-3)" },
		{ key: 2, parent: 1, text: "Conscience des actions" },
		{ key: 3, parent: 1, text: "Ignorance des causes déterminantes" },
		{ key: 4, parent: 1, text: "Critique du concept de 'volonté' (mot sans idée)" },
		{ key: 5, parent: 1, text: "Rejet du 'siège de l'âme' (ridicule/dégoût)" },
		{ key: 6, parent: 0, text: "L'analogie du soleil (§4)" },
		{ key: 7, parent: 6, text: "Imagination : le soleil est à 200 pieds" },
		{ key: 8, parent: 6, text: "L'erreur = ignorance de la vraie distance + cause de l'imagination" },
		{ key: 9, parent: 6, text: "L'imagination en elle-même n'est pas une erreur" },
		{ key: 10, parent: 0, text: "La persistance de l'imagination (§5)" },
		{ key: 11, parent: 10, text: "Connaissance rationnelle : >600 diamètres terrestres" },
		{ key: 12, parent: 10, text: "L'image de proximité persiste malgré le savoir" },
		{ key: 13, parent: 10, text: "Cause : une affection du corps enveloppe l'essence du soleil" },
		{ key: 14, parent: 0, text: "Conclusion épistémologique" },
		{ key: 15, parent: 14, text: "Distinction entre imagination (inadéquate) et raison (adéquate)" },
		{ key: 16, parent: 14, text: "La vraie liberté est la connaissance des causes, non l'illusion du libre arbitre" }
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
			origine: "Spinoza, Éthique, proposition 35, scolie (Partie III, prop. 2, scolie)",
			theme: "La critique du libre arbitre et la théorie de l'imagination et de l'erreur",
			these: "La croyance des hommes en leur propre liberté n'est qu'une illusion née de la conscience de leurs actions associée à l'ignorance des causes qui les déterminent, tout comme l'imagination sensible (le soleil proche) persiste malgré l'acquisition de la connaissance rationnelle de la réalité.",
			interet: "Ce texte est fondamental pour comprendre le déterminisme spinoziste et sa théorie de la connaissance. Il montre que l'erreur n'est pas dans l'imagination elle-même (qui est une affection réelle du corps), mais dans le manque de connaissance adéquate qui l'accompagne. Il réfute ainsi la conception cartésienne de la volonté libre et du dualisme âme-corps.",
			problematique: "En quoi l'illusion du libre arbitre est-elle structurellement comparable à une illusion sensible, et comment Spinoza explique-t-il la persistance de l'imagination malgré l'acquisition de la connaissance vraie ?"
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
			"text": "DÉBUT\nLes hommes se croient\nlibres. Pourquoi ?",
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
			"text": "CAUSE DE L'ILLUSION :\nConscience des actions\n+ Ignorance des causes\ndéterminantes.",
			"loc": "480 120",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "3",
			"text": "CONSÉQUENCE :\nLa 'volonté' est un mot\nvide. Le 'siège de l'âme'\nest une invention\nridicule.",
			"loc": "760.53 120",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "4",
			"text": "ANALOGIE :\nL'exemple du soleil.",
			"loc": "1034.36 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "5",
			"text": "IMAGINATION vs RAISON :\nImagination : 200 pieds.\nRaison : >600 diamètres\nterrestres.",
			"loc": "1034.36 259.98",
			"category": "rectangle",
			"color": "#a3bffa",
			"borderColor": "#3b5bdb",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "6",
			"text": "POURQUOI L'ERREUR\nET LA PERSISTANCE\nDE L'IMAGE ?",
			"loc": "1319.74 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "7",
			"text": "L'erreur = ignorance\nde la vraie cause.\nL'image persiste car\nune affection du corps\nenveloppe l'essence\ndu soleil.",
			"loc": "1319.74 259.98",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "8",
			"text": "FIN\nLa vraie liberté n'est pas\nl'illusion du libre arbitre,\nmais la connaissance\nadéquate des causes.",
			"loc": "1600 120",
			"category": "ellipse",
			"color": "#74b9ff",
			"borderColor": "#286DB3",
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
			"from": "2",
			"to": "3",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "3",
			"to": "4",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "4",
			"to": "5",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "4",
			"to": "6",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "6",
			"to": "7",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "6",
			"to": "8",
			"fromSide": "right",
			"toSide": "left"
		}
	]
};