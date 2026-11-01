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
const sousTitre = "Tester ses connaissances sur un texte de Descartes (Discours de la méthode, 6e partie)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] … il est possible de parvenir à des connaissances qui soient fort utiles à la vie, et qu'au lieu de cette philosophie spéculative, qu'on enseigne dans les écoles, on peut en trouver une pratique, par laquelle, connaissant la force et les actions du feu, de l'eau, de l'air, des astres, des cieux et de tous les autres corps qui nous environnent, aussi distinctement que nous connaissons les divers métiers de nos artisans, nous les pourrions employer en même façon à tous les usages auxquels ils sont propres et ainsi nous rendre comme maîtres et possesseurs de la Nature. [2] Ce qui n'est pas seulement à désirer pour l'invention d'une infinité d'artifices, qui feraient qu'on jouirait, sans aucune peine, des fruits de la terre et de toutes les commodités qui s'y trouvent, mais principalement aussi pour la conservation de la santé, laquelle est sans doute le premier bien et le fondement de tous les autres biens de cette vie ; [3] car même l'esprit dépend si fort du tempérament, et de la disposition des organes du corps que, s'il est possible de trouver quelque moyen qui rende communément les hommes plus sages et plus habiles qu'ils n'ont été jusques ici, je crois que c'est dans la médecine qu'on doit le chercher. »",
	source: "René Descartes, <em>Discours de la méthode</em>, 6e partie, coll. Pléiade, 1966, p.168"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Francis Bacon", "René Descartes", "Galilée"],
		correct: 2,
		explanation: "Le texte est extrait de la 6e partie du *Discours de la méthode* de René Descartes."
	},
	{
		question: "Question n°2 : Quelle partie du *Discours de la méthode* est concernée ?",
		answers: ["La 2e partie", "La 4e partie", "La 6e partie"],
		correct: 3,
		explanation: "La source indique explicitement la 6e partie, qui traite des conditions du progrès des sciences et de la morale."
	},
	{
		question: "Question n°3 : Quel type de philosophie Descartes oppose-t-il à la « philosophie pratique » ?",
		answers: ["La philosophie antique", "La philosophie spéculative", "La philosophie morale"],
		correct: 2,
		explanation: "Il oppose la philosophie pratique à « cette philosophie spéculative, qu'on enseigne dans les écoles »."
	},
	{
		question: "Question n°4 : Où est enseignée la philosophie spéculative selon le texte ?",
		answers: ["Dans les laboratoires", "Dans les écoles", "Dans la nature"],
		correct: 2,
		explanation: "Le texte mentionne « cette philosophie spéculative, qu'on enseigne dans les écoles » (référence à la scolastique)."
	},
	{
		question: "Question n°5 : Que doit-on connaître pour appliquer la philosophie pratique ?",
		answers: ["Les textes anciens", "La force et les actions des corps naturels", "Les lois de l'État"],
		correct: 2,
		explanation: "Il s'agit de connaître « la force et les actions du feu, de l'eau, de l'air, des astres, des cieux et de tous les autres corps »."
	},
	{
		question: "Question n°6 : À quoi Descartes compare-t-il la connaissance des forces de la nature ?",
		answers: ["À la connaissance des divers métiers de nos artisans", "À la contemplation des idées", "À la lecture des livres saints"],
		correct: 1,
		explanation: "Il faut les connaître « aussi distinctement que nous connaissons les divers métiers de nos artisans »."
	},
	{
		question: "Question n°7 : Quel est le but ultime de cette connaissance pratique des corps naturels ?",
		answers: ["Devenir maîtres et possesseurs de la Nature", "Admirer la création divine", "Détruire l'environnement"],
		correct: 1,
		explanation: "C'est la célèbre formule : « ainsi nous rendre comme maîtres et possesseurs de la Nature »."
	},
	{
		question: "Question n°8 : Que signifie l'expression « maîtres et possesseurs » ?",
		answers: ["Avoir un droit de propriété juridique", "Avoir la capacité d'utiliser les forces naturelles au service de l'homme", "Détruire la nature sans limite"],
		correct: 2,
		explanation: "Il s'agit d'une maîtrise technique et utilitaire : employer les corps naturels « à tous les usages auxquels ils sont propres »."
	},
	{
		question: "Question n°9 : Pourquoi cette maîtrise est-elle « à désirer » selon le §2 ?",
		answers: ["Pour la gloire de l'État", "Pour l'invention d'artifices et la conservation de la santé", "Pour dominer les autres hommes"],
		correct: 2,
		explanation: "C'est désirable « pour l'invention d'une infinité d'artifices... mais principalement aussi pour la conservation de la santé »."
	},
	{
		question: "Question n°10 : Que permettent les « artifices » mentionnés dans le texte ?",
		answers: ["De jouir sans peine des fruits de la terre et des commodités", "De créer des œuvres d'art", "De faire la guerre"],
		correct: 1,
		explanation: "Ils feraient « qu'on jouirait, sans aucune peine, des fruits de la terre et de toutes les commodités qui s'y trouvent »."
	},
	{
		question: "Question n°11 : Quel est le « premier bien » selon Descartes ?",
		answers: ["La richesse", "La santé", "La gloire"],
		correct: 2,
		explanation: "Il affirme que la santé « est sans doute le premier bien et le fondement de tous les autres biens de cette vie »."
	},
	{
		question: "Question n°12 : Pourquoi la santé est-elle si importante ?",
		answers: ["Parce qu'elle est le fondement de tous les autres biens", "Parce qu'elle est facile à obtenir", "Parce qu'elle est un don divin"],
		correct: 1,
		explanation: "Le texte la définit comme « le fondement de tous les autres biens de cette vie »."
	},
	{
		question: "Question n°13 : Quel rapport l'esprit entretient-il avec le corps selon le §3 ?",
		answers: ["Ils sont totalement indépendants", "L'esprit dépend fort du tempérament et de la disposition des organes du corps", "Le corps dépend uniquement de l'esprit"],
		correct: 2,
		explanation: "Descartes écrit : « l'esprit dépend si fort du tempérament, et de la disposition des organes du corps »."
	},
	{
		question: "Question n°14 : Dans quelle discipline faut-il chercher le moyen de rendre les hommes plus sages ?",
		answers: ["Dans la philosophie morale", "Dans la médecine", "Dans la théologie"],
		correct: 2,
		explanation: "Il conclut : « je crois que c'est dans la médecine qu'on doit le chercher »."
	},
	{
		question: "Question n°15 : Que signifie le mot « tempérament » dans ce contexte ?",
		answers: ["Le caractère émotionnel", "L'état physique et l'équilibre des humeurs ou des organes du corps", "La colère"],
		correct: 2,
		explanation: "Au XVIIe siècle, le tempérament désigne la constitution physique et l'équilibre des éléments dans le corps."
	},
	{
		question: "Question n°16 : Quelle vision de la science ce texte promeut-il ?",
		answers: ["Une science contemplative et désintéressée", "Une science utilitaire, technique et tournée vers le bien-être humain", "Une science purement mathématique"],
		correct: 2,
		explanation: "Le texte prône une « philosophie pratique » visant l'utilité, les artifices et la santé."
	},
	{
		question: "Question n°17 : Quelle tradition philosophique Descartes critique-t-il implicitement ?",
		answers: ["La scolastique et la philosophie spéculative des écoles", "L'épicurisme", "Le stoïcisme"],
		correct: 1,
		explanation: "Il critique explicitement « cette philosophie spéculative, qu'on enseigne dans les écoles »."
	},
	{
		question: "Question n°18 : Que signifie « distinctement » dans « connaissant... aussi distinctement » ?",
		answers: ["De manière floue", "De manière claire, précise et détaillée", "De manière lointaine"],
		correct: 2,
		explanation: "C'est un terme clé du vocabulaire cartésien, synonyme de clarté et de précision intellectuelle."
	},
	{
		question: "Question n°19 : Quel est le lien entre la maîtrise de la nature et la morale chez Descartes ?",
		answers: ["Ils sont opposés", "La maîtrise de la nature (via la médecine) est un moyen d'améliorer la condition morale et la sagesse de l'homme", "La morale interdit la maîtrise de la nature"],
		correct: 2,
		explanation: "En améliorant le corps (médecine), on améliore l'esprit, rendant les hommes « plus sages et plus habiles »."
	},
	{
		question: "Question n°20 : Que suggère l'expression « sans aucune peine » ?",
		answers: ["La paresse humaine", "L'idéal d'un progrès technique libérant l'homme du labeur et de la pénurie", "L'absence d'effort intellectuel"],
		correct: 2,
		explanation: "C'est la promesse de la technique : supprimer la pénibilité du travail et de la survie grâce aux « artifices »."
	},
	{
		question: "Question n°21 : Pourquoi Descartes mentionne-t-il les « astres » et les « cieux » ?",
		answers: ["Pour faire de l'astrologie", "Pour inclure la physique céleste dans le champ d'application de la science pratique", "Pour parler de religion"],
		correct: 2,
		explanation: "La mécanique céleste fait partie des « corps qui nous environnent » dont la connaissance peut avoir des usages pratiques (ex: navigation)."
	},
	{
		question: "Question n°22 : Quelle est la fonction de la conjonction « mais principalement aussi » (§2) ?",
		answers: ["Annuler la proposition précédente", "Hiérarchiser les bienfaits en plaçant la santé au-dessus des simples commodités matérielles", "Ajouter une idée accessoire"],
		correct: 2,
		explanation: "Descartes accorde une priorité absolue à la santé sur les simples inventions de confort."
	},
	{
		question: "Question n°23 : Que signifie « disposition des organes » ?",
		answers: ["L'agencement et l'état de fonctionnement des parties du corps", "La volonté de travailler", "L'organisation sociale"],
		correct: 1,
		explanation: "Cela renvoie à la conception mécaniste du corps humain, vu comme une machine dont les pièces doivent être bien agencées."
	},
	{
		question: "Question n°24 : En quoi ce texte est-il fondateur pour la modernité ?",
		answers: ["Il prône le retour à la nature", "Il formule le projet moderne de domination technique de la nature au service de l'homme", "Il rejette le progrès"],
		correct: 2,
		explanation: "La formule « maîtres et possesseurs de la nature » est souvent citée comme la charte du projet technoscientifique moderne."
	},
	{
		question: "Question n°25 : Descartes promet-il une maîtrise *absolue* de la nature ?",
		answers: ["Oui, une maîtrise totale et divine", "Non, il dit « nous rendre *comme* maîtres et possesseurs », indiquant une analogie ou une maîtrise pratique, non métaphysique", "Il ne se prononce pas"],
		correct: 2,
		explanation: "Le mot « comme » est crucial : il s'agit d'une maîtrise pratique et relative, non d'une toute-puissance divine."
	},
	{
		question: "Question n°26 : Que signifie « artifices » dans ce contexte ?",
		answers: ["Des tromperies", "Des inventions techniques et des machines créées par l'homme", "Des œuvres d'art"],
		correct: 2,
		explanation: "Au XVIIe siècle, un « artifice » désigne une construction technique ou une invention issue de l'art (la technique)."
	},
	{
		question: "Question n°27 : Quel est le rapport entre la médecine et la sagesse selon la fin du texte ?",
		answers: ["La médecine détruit la sagesse", "Une meilleure santé du corps est une condition préalable pour améliorer l'esprit et la sagesse", "La médecine et la sagesse sont identiques"],
		correct: 2,
		explanation: "Puisque l'esprit dépend du corps, soigner le corps (médecine) est le moyen de rendre les hommes « plus sages »."
	},
	{
		question: "Question n°28 : Quelle image de l'artisan Descartes utilise-t-il ?",
		answers: ["L'artisan comme un être inférieur", "L'artisan comme modèle de connaissance pratique et efficace des matériaux", "L'artisan comme un théoricien"],
		correct: 2,
		explanation: "L'artisan connaît son métier de manière concrète et efficace ; le savant doit connaître la nature avec la même efficacité pratique."
	},
	{
		question: "Question n°29 : Que dénonce Descartes à travers l'expression « qu'on enseigne dans les écoles » ?",
		answers: ["Le système éducatif moderne", "L'aristotélisme scolastique, jugé stérile et inutile pour la vie concrète", "L'absence d'écoles"],
		correct: 2,
		explanation: "Il critique la scolastique, qui se perd en disputes verbales et en spéculations sans applications pratiques."
	},
	{
		question: "Question n°30 : Quelle est la portée éthique de ce passage ?",
		answers: ["Aucune, c'est purement technique", "Elle est forte : la science a pour finalité morale le soulagement de la souffrance et l'amélioration de la condition humaine", "Elle est négative : la science est dangereuse"],
		correct: 2,
		explanation: "Le but ultime n'est pas la domination pour la domination, mais la « conservation de la santé » et le bien-être."
	},
	{
		question: "Question n°31 : Que signifie « force et les actions » des corps ?",
		answers: ["Leur poids et leur taille", "Leurs propriétés mécaniques et leurs effets causaux", "Leur beauté"],
		correct: 2,
		explanation: "Cela renvoie à la physique mécaniste : comprendre comment les corps agissent les uns sur les autres pour pouvoir les utiliser."
	},
	{
		question: "Question n°32 : Pourquoi la santé est-elle le « fondement » des autres biens ?",
		answers: ["Parce qu'elle est la plus chère", "Parce que sans elle, la richesse, la gloire ou le savoir ne peuvent être pleinement jouis", "Parce que c'est une loi religieuse"],
		correct: 2,
		explanation: "La santé est la condition de possibilité de toute jouissance ou activité humaine."
	},
	{
		question: "Question n°33 : En quoi ce texte anticipe-t-il la bioéthique ou la médecine moderne ?",
		answers: ["Il ne l'anticipe pas", "En faisant de la médecine le levier principal de l'amélioration de la condition humaine, y compris mentale", "En interdisant la médecine"],
		correct: 2,
		explanation: "L'idée que l'intervention sur le corps (médecine) peut améliorer l'esprit (sagesse) est au cœur des enjeux neuroscientifiques et médicaux modernes."
	},
	{
		question: "Question n°34 : Que signifie « communément » dans « rende communément les hommes plus sages » ?",
		answers: ["De manière vulgaire", "De manière générale, pour le plus grand nombre", "De manière exceptionnelle"],
		correct: 2,
		explanation: "Descartes vise un progrès universel et démocratique du savoir et de la santé, pas réservé à une élite."
	},
	{
		question: "Question n°35 : Quelle est la différence entre « habiles » et « sages » ici ?",
		answers: ["Aucune", "Habiles renvoie aux compétences pratiques, sages renvoie à la rectitude du jugement et à la tranquillité de l'âme", "Sages signifie riche"],
		correct: 2,
		explanation: "Descartes associe la compétence technique (habile) à l'amélioration morale et intellectuelle (sage) via la santé."
	},
	{
		question: "Question n°36 : Le projet de devenir « maître et possesseur » est-il égoïste selon ce texte ?",
		answers: ["Oui, il vise le pouvoir personnel", "Non, il vise le bien commun (« les hommes », « conservation de la santé »)", "Il est neutre"],
		correct: 2,
		explanation: "Le texte parle de rendre « les hommes » plus sages et de conserver la santé, ce qui est un projet humaniste et universel."
	},
	{
		question: "Question n°37 : Que signifie « jouirait » dans « qu'on jouirait... des fruits de la terre » ?",
		answers: ["Prendre un plaisir coupable", "Bénéficier, user légitimement des ressources", "Posséder juridiquement"],
		correct: 2,
		explanation: "Au sens classique, « jouir » signifie user d'un bien, en tirer profit et satisfaction."
	},
	{
		question: "Question n°38 : Pourquoi Descartes parle-t-il de « tous les autres corps qui nous environnent » ?",
		answers: ["Pour être exhaustif", "Pour montrer que l'homme est au centre d'un environnement physique qu'il peut et doit comprendre", "Pour parler de métaphysique"],
		correct: 2,
		explanation: "Cela ancre l'homme dans un milieu physique (l'environnement) qui est objet de connaissance et d'action."
	},
	{
		question: "Question n°39 : Quelle est la condition sine qua non pour employer les corps à leurs usages propres ?",
		answers: ["Avoir de l'argent", "Les connaître distinctement", "Avoir la foi"],
		correct: 2,
		explanation: "La maîtrise pratique est conditionnée par la connaissance théorique distincte (« connaissant... aussi distinctement »)."
	},
	{
		question: "Question n°40 : En quoi ce passage est-il une réponse à la condition de vulnérabilité de l'homme ?",
		answers: ["Il l'ignore", "Il propose la science et la médecine comme remèdes à la vulnérabilité physique et aux misères de la vie", "Il dit qu'il faut l'accepter passivement"],
		correct: 2,
		explanation: "La maladie et la pénurie sont des vulnérabilités que la philosophie pratique vise à surmonter."
	},
	{
		question: "Question n°41 : Que signifie « tempérament » dans la phrase « l'esprit dépend si fort du tempérament » ?",
		answers: ["L'humeur changeante", "La constitution physique et l'équilibre physiologique du corps", "La colère"],
		correct: 2,
		explanation: "C'est un terme de médecine ancienne et classique désignant l'état d'équilibre des humeurs ou des organes, influençant l'esprit."
	},
	{
		question: "Question n°42 : Quel est le lien entre ce texte et le dualisme cartésien ?",
		answers: ["Il le nie", "Il le confirme tout en soulignant l'union substantielle et l'interaction forte entre l'esprit et le corps (via la médecine)", "Il n'en parle pas"],
		correct: 2,
		explanation: "Bien que distincts, l'esprit et le corps interagissent fortement (« l'esprit dépend si fort... »), justifiant l'action sur le corps pour améliorer l'esprit."
	},
	{
		question: "Question n°43 : Que signifie « jusques ici » (§3) ?",
		answers: ["Jusqu'à cet endroit", "Jusqu'à présent, dans l'histoire passée de l'humanité", "Jusqu'à la fin du livre"],
		correct: 2,
		explanation: "Cela marque une rupture historique : le progrès scientifique va permettre de dépasser l'état de sagesse et d'habileté du passé."
	},
	{
		question: "Question n°44 : Pourquoi l'expression « maîtres et possesseurs » est-elle parfois critiquée aujourd'hui ?",
		answers: ["Parce qu'elle est trop modeste", "Parce qu'elle est interprétée comme une justification de l'exploitation destructrice et non durable de l'environnement", "Parce qu'elle est religieuse"],
		correct: 2,
		explanation: "La lecture moderne, notamment écologique, y voit parfois l'origine d'une arrogance anthropocentrique, bien que le texte vise le bien-être."
	},
	{
		question: "Question n°45 : Que signifie « principalement aussi » ?",
		answers: ["Accessoirement", "En premier lieu, avec une importance supérieure", "Rarement"],
		correct: 2,
		explanation: "Cela marque une hiérarchie des valeurs : la santé est l'objectif principal, avant les commodités."
	},
	{
		question: "Question n°46 : Quel est le rôle de la nature dans ce texte ?",
		answers: ["Un sanctuaire intouchable", "Un réservoir de forces et de ressources à connaître pour être utilisé au bénéfice de l'homme", "Une illusion"],
		correct: 2,
		explanation: "La nature est un objet de connaissance et d'usage, structuré par des lois (forces et actions) que l'homme peut exploiter."
	},
	{
		question: "Question n°47 : En quoi la médecine est-elle la « clé de voûte » de ce projet ?",
		answers: ["Parce qu'elle est la plus lucrative", "Parce qu'elle agit directement sur le lien corps-esprit, garantissant la santé, fondement de la sagesse", "Parce qu'elle est la science la plus facile"],
		correct: 2,
		explanation: "La médecine est le point d'application ultime où la maîtrise de la nature (le corps) se traduit par un bien moral (la sagesse)."
	},
	{
		question: "Question n°48 : Que signifie « commodités » ?",
		answers: ["Les toilettes", "Les avantages, le confort et les facilités de la vie", "Les objets inutiles"],
		correct: 2,
		explanation: "Au XVIIe siècle, les commodités désignent tout ce qui rend la vie plus aisée, confortable et agréable."
	},
	{
		question: "Question n°49 : Quelle est la structure argumentative de ce passage ?",
		answers: ["Une simple description", "Une opposition (spéculatif/pratique), une définition de la maîtrise, une hiérarchie des biens (artifices/santé), et une conclusion sur la médecine", "Un dialogue"],
		correct: 2,
		explanation: "Le texte progresse logiquement de la méthode (connaissance pratique) à son but (maîtrise), puis à sa finalité éthique (santé et sagesse)."
	},
	{
		question: "Question n°50 : Quelle est la thèse globale de cet extrait ?",
		answers: ["La philosophie doit rester théorique", "La philosophie doit devenir une science pratique permettant de maîtriser la nature, principalement pour préserver la santé et améliorer la condition humaine", "La nature est inconnaissable"],
		correct: 2,
		explanation: "C'est la synthèse du passage : le savoir doit être utile, et son plus haut usage est la maîtrise de la nature au service de la santé et de la sagesse."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "La philosophie pratique et la maîtrise de la nature" },
		{ key: 1, parent: 0, text: "Opposition des philosophies" },
		{ key: 2, parent: 1, text: "Philosophie spéculative (écoles, stérile)" },
		{ key: 3, parent: 1, text: "Philosophie pratique (utile à la vie)" },
		{ key: 4, parent: 0, text: "La méthode de maîtrise" },
		{ key: 5, parent: 4, text: "Connaître distinctement les forces et actions des corps (feu, eau, air, astres)" },
		{ key: 6, parent: 4, text: "Modèle : la connaissance des métiers par les artisans" },
		{ key: 7, parent: 4, text: "But : employer les corps à leurs usages propres" },
		{ key: 8, parent: 0, text: "La finalité : Maîtres et possesseurs de la Nature" },
		{ key: 9, parent: 8, text: "Bienfait secondaire : Invention d'artifices et commodités" },
		{ key: 10, parent: 8, text: "Bienfait principal : Conservation de la santé (premier bien)" },
		{ key: 11, parent: 0, text: "Le rôle central de la médecine" },
		{ key: 12, parent: 11, text: "L'esprit dépend du tempérament et des organes du corps" },
		{ key: 13, parent: 11, text: "La médecine est le moyen de rendre les hommes plus sages et plus habiles" }
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
			origine: "René Descartes, Discours de la méthode, 6e partie",
			theme: "La nature",
			these: "La philosophie doit abandonner la spéculation stérile pour devenir une science pratique, permettant à l'homme de connaître et d'utiliser les forces de la nature afin d'en devenir « maître et possesseur », avec pour finalité éthique suprême la conservation de la santé et l'amélioration de la condition humaine.",
			interet: "Ce passage est l'un des plus célèbres et des plus discutés de la philosophie moderne. Il marque le basculement de la science contemplative vers une science utilitaire et technique. Il formule le projet des Lumières et de la révolution scientifique, tout en posant les bases d'une éthique de la santé, reliant le progrès matériel au progrès moral.",
			problematique: "En quoi le passage d'une philosophie spéculative à une philosophie pratique permet-il à l'homme de devenir « maître et possesseur de la nature », et quelle est la finalité éthique de cette maîtrise ?"
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
			"text": "DÉBUT\nOpposition :\nPhilosophie spéculative\n(écoles)\nvs\nPhilosophie pratique\n(utile à la vie).",
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
			"text": "LA MÉTHODE :\nConnaître distinctement\nles forces et actions\ndes corps (feu, eau,\nair, astres) comme\nles artisans leurs métiers.",
			"loc": "480 120",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "3",
			"text": "L'OBJECTIF :\nEmployer les corps\nà leurs usages propres\npour devenir « maîtres\net possesseurs de la Nature ».",
			"loc": "760.53 120",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "4",
			"text": "LES BIENFAITS\nHIÉRARCHISÉS :",
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
			"text": "Secondaire :\nInvention d'artifices,\ncommodités, jouissance\nsans peine des fruits\nde la terre.",
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
			"text": "Principal :\nConservation de la santé\n(premier bien et fondement\nde tous les autres).",
			"loc": "1034.36 389.98",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "7",
			"text": "FIN\nLe moyen ultime :\nLa médecine, car\nl'esprit dépend du corps.\nBut : rendre les hommes\nplus sages et plus habiles.",
			"loc": "1319.74 120",
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
			"from": "5",
			"to": "6",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "4",
			"to": "7",
			"fromSide": "right",
			"toSide": "left"
		}
	]
};