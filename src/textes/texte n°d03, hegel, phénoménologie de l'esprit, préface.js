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
const sousTitre = "Tester ses connaissances sur un texte de Hegel (Phénoménologie de l'Esprit)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Il paraît particulièrement nécessaire de faire de nouveau de la philosophie une affaire sérieuse. [2] Pour toutes les sciences, les arts, les talents, les techniques, prévaut la conviction qu'on ne les possède pas sans se donner la peine et sans faire l'effort de les apprendre et de les pratiquer. [3] Si quiconque ayant des yeux et des doigts, à qui on fournit du cuir et un instrument, n'est pas pour cela en mesure de faire des souliers, de nos jours domine le préjugé selon lequel chacun sait immédiatement philosopher et apprécier la philosophie puisqu'il possède l'unité de mesure nécessaire dans sa raison naturelle — comme si chacun ne possédait pas aussi dans son pied la mesure d'un soulier. […] [4] Puisque le sens commun fait appel au sentiment, son oracle intérieur, il rompt tout contact avec qui n'est pas de son avis, il est ainsi contraint d'expliquer qu'il n'a rien d'autres à dire à celui qui ne trouve pas et ne sent pas en soi-même la même vérité ; [5] en d'autres termes, il foule aux pieds la racine de l'humanité, car la nature de l'humanité c'est de tendre à l'accord mutuel, son existence est seulement dans la communauté instituée des consciences. [6] Ce qui est anti-humain, ce qui est seulement animal, c'est de s'enfermer dans le sentiment et de ne pouvoir se communiquer que par le sentiment. »",
	source: "G.W.F. Hegel, <em>Phénoménologie de l'Esprit</em>, Préface, trad. Jean Hyppolite, Aubier, 1941, pp. 57-58"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Emmanuel Kant", "G.W.F. Hegel", "Friedrich Nietzsche"],
		correct: 2,
		explanation: "Le texte est extrait de la célèbre Préface de la *Phénoménologie de l'Esprit* de Georg Wilhelm Friedrich Hegel."
	},
	{
		question: "Question n°2 : De quelle œuvre ce passage est-il tiré ?",
		answers: ["Science de la logique", "Phénoménologie de l'Esprit", "Principes de la philosophie du droit"],
		correct: 2,
		explanation: "Il s'agit de la Préface de la *Phénoménologie de l'Esprit*, publiée en 1807."
	},
	{
		question: "Question n°3 : Qui est le traducteur de cette édition de référence ?",
		answers: ["Bernard Bourgeois", "Jean Hyppolite", "Alexandre Kojève"],
		correct: 2,
		explanation: "La source indique la traduction de Jean Hyppolite, publiée chez Aubier en 1941, qui a marqué la réception de Hegel en France."
	},
	{
		question: "Question n°4 : Quelle est l'exigence fondamentale énoncée dès le §1 ?",
		answers: ["Rendre la philosophie accessible à tous sans effort", "Faire de nouveau de la philosophie une affaire sérieuse", "Abandonner la philosophie au profit des sciences"],
		correct: 2,
		explanation: "Hegel ouvre le texte par cette affirmation : « Il paraît particulièrement nécessaire de faire de nouveau de la philosophie une affaire sérieuse »."
	},
	{
		question: "Question n°5 : Quelle conviction prévaut pour les sciences, les arts et les techniques (§2) ?",
		answers: ["Qu'ils sont innés et ne nécessitent pas d'apprentissage", "Qu'on ne les possède pas sans se donner la peine et l'effort de les apprendre", "Qu'ils sont réservés à une élite divine"],
		correct: 2,
		explanation: "Hegel constate que pour ces domaines, « prévaut la conviction qu'on ne les possède pas sans se donner la peine et sans faire l'effort de les apprendre et de les pratiquer »."
	},
	{
		question: "Question n°6 : Quelle analogie concrète Hegel utilise-t-il au §3 ?",
		answers: ["La construction d'une maison", "La fabrication de souliers par un cordonnier", "La culture d'un champ"],
		correct: 2,
		explanation: "Il prend l'exemple de la cordonnerie : « faire des souliers » à partir de cuir et d'instruments."
	},
	{
		question: "Question n°7 : Avoir des yeux, des doigts, du cuir et un instrument suffit-il à faire des souliers ?",
		answers: ["Oui, c'est suffisant", "Non, cela ne met pas en mesure de faire des souliers", "Seulement si on est pressé"],
		correct: 2,
		explanation: "Hegel souligne que ces conditions matérielles et physiques ne suffisent pas : « n'est pas pour cela en mesure de faire des souliers »."
	},
	{
		question: "Question n°8 : Quel « préjugé » domine « de nos jours » concernant la philosophie (§3) ?",
		answers: ["Qu'elle est trop difficile pour le commun des mortels", "Que chacun sait immédiatement philosopher et apprécier la philosophie", "Qu'elle est une perte de temps"],
		correct: 2,
		explanation: "Le préjugé est que « chacun sait immédiatement philosopher et apprécier la philosophie »."
	},
	{
		question: "Question n°9 : Sur quoi les gens fondent-ils cette prétention à savoir philosopher immédiatement ?",
		answers: ["Sur leur richesse", "Sur le fait qu'ils possèdent l'unité de mesure nécessaire dans leur raison naturelle", "Sur leur foi religieuse"],
		correct: 2,
		explanation: "Ils pensent pouvoir philosopher car ils possèdent « l'unité de mesure nécessaire dans sa raison naturelle »."
	},
	{
		question: "Question n°10 : Quelle est la réplique ironique de Hegel concernant cette « mesure » naturelle ?",
		answers: ["Que cette mesure est fausse", "Que chacun possède aussi dans son pied la mesure d'un soulier", "Que la raison n'a pas de mesure"],
		correct: 2,
		explanation: "Il ironise : « comme si chacun ne possédait pas aussi dans son pied la mesure d'un soulier »."
	},
	{
		question: "Question n°11 : À quoi le « sens commun » fait-il appel selon le §4 ?",
		answers: ["À la logique formelle", "Au sentiment, son oracle intérieur", "Aux données scientifiques"],
		correct: 2,
		explanation: "Le texte indique : « Puisque le sens commun fait appel au sentiment, son oracle intérieur »."
	},
	{
		question: "Question n°12 : Que fait le sens commun face à celui qui n'est pas de son avis ?",
		answers: ["Il débat rationnellement", "Il rompt tout contact", "Il cherche à le convaincre par des preuves"],
		correct: 2,
		explanation: "Hegel affirme qu'« il rompt tout contact avec qui n'est pas de son avis »."
	},
	{
		question: "Question n°13 : Que se voit-il contraint d'expliquer dans ce cas de figure ?",
		answers: ["Qu'il a raison", "Qu'il n'a rien d'autre à dire à celui qui ne trouve pas et ne sent pas en soi-même la même vérité", "Qu'il est supérieur"],
		correct: 2,
		explanation: "Il est contraint d'expliquer « qu'il n'a rien d'autres à dire à celui qui ne trouve pas et ne sent pas en soi-même la même vérité »."
	},
	{
		question: "Question n°14 : Que foule aux pieds le sens commun en agissant ainsi (§5) ?",
		answers: ["Les lois de l'État", "La racine de l'humanité", "Les traditions religieuses"],
		correct: 2,
		explanation: "Hegel utilise une image forte : « il foule aux pieds la racine de l'humanité »."
	},
	{
		question: "Question n°15 : Quelle est la « nature de l'humanité » selon Hegel ?",
		answers: ["La guerre de tous contre tous", "De tendre à l'accord mutuel", "L'isolement et l'individualisme"],
		correct: 2,
		explanation: "Il définit l'humanité ainsi : « la nature de l'humanité c'est de tendre à l'accord mutuel »."
	},
	{
		question: "Question n°16 : Où réside l'existence de l'humanité ?",
		answers: ["Dans la solitude de la conscience", "Dans la communauté instituée des consciences", "Dans la lutte pour la reconnaissance"],
		correct: 2,
		explanation: "« son existence est seulement dans la communauté instituée des consciences »."
	},
	{
		question: "Question n°17 : Qu'est-ce qui est qualifié d'« anti-humain » et de « seulement animal » (§6) ?",
		answers: ["La raison froide", "S'enfermer dans le sentiment et ne pouvoir se communiquer que par le sentiment", "Le travail manuel"],
		correct: 2,
		explanation: "Hegel conclut : « Ce qui est anti-humain, ce qui est seulement animal, c'est de s'enfermer dans le sentiment et de ne pouvoir se communiquer que par le sentiment »."
	},
	{
		question: "Question n°18 : Quel courant philosophique Hegel critique-t-il implicitement ici ?",
		answers: ["Le rationalisme cartésien", "La philosophie du sentiment (Gefühlsphilosophie) et le romantisme", "Le marxisme"],
		correct: 2,
		explanation: "Hegel vise les penseurs de son époque (comme Jacobi ou Schleiermacher) qui faisaient du sentiment immédiat le critère suprême de la vérité."
	},
	{
		question: "Question n°19 : Que signifie « affaire sérieuse » dans ce contexte ?",
		answers: ["Une entreprise lucrative", "Une discipline exigeant rigueur, effort et développement conceptuel", "Une discussion de salon"],
		correct: 2,
		explanation: "La philosophie doit être une science (Wissenschaft) rigoureuse, s'opposant à la facilité de l'opinion immédiate."
	},
	{
		question: "Question n°20 : Que désigne l'expression « oracle intérieur » ?",
		answers: ["La voix de la conscience morale", "L'intuition subjective érigée en autorité suprême sans justification rationnelle", "Une hallucination"],
		correct: 2,
		explanation: "C'est une métaphore critique : le sentiment se pose comme une autorité infaillible et indiscutable, comme un oracle, ce qui bloque tout dialogue."
	},
	{
		question: "Question n°21 : Pourquoi l'analogie du soulier est-elle efficace ?",
		answers: ["Elle est poétique", "Elle utilise un exemple trivial et indiscutable d'acquisition de compétence pour révéler l'absurdité du préjugé sur la philosophie", "Elle flatte le lecteur"],
		correct: 2,
		explanation: "Personne ne conteste qu'il faut apprendre à faire des souliers ; Hegel montre que la philosophie exige le même apprentissage, rendant le préjugé contraire absurde."
	},
	{
		question: "Question n°22 : Que signifie « immédiatement » dans « sait immédiatement philosopher » ?",
		answers: ["Rapidement", "Sans médiation, sans effort d'apprentissage ni développement rationnel", "Avec enthousiasme"],
		correct: 2,
		explanation: "L'immédiateté est l'ennemie de la médiation (le travail du concept) chez Hegel. C'est la prétention à posséder la vérité sans passer par l'effort de la pensée."
	},
	{
		question: "Question n°23 : Quelle est la fonction de la conjonction « puisque » au §4 ?",
		answers: ["Marquer une hypothèse", "Introduire la cause du comportement asocial du sens commun", "Marquer une concession"],
		correct: 2,
		explanation: "Elle explique la cause : c'est *parce que* le sens commun s'en remet au sentiment qu'il est incapable de dialogue rationnel."
	},
	{
		question: "Question n°24 : Que signifie « communauté instituée des consciences » ?",
		answers: ["Un groupe d'amis", "L'espace objectif et rationnel du savoir partagé, du langage et de l'Esprit (Geist)", "Une association religieuse"],
		correct: 2,
		explanation: "C'est le règne de l'objectivité rationnelle, où les consciences se reconnaissent mutuellement à travers des concepts partagés, par opposition à l'enfermement subjectif."
	},
	{
		question: "Question n°25 : Pourquoi s'enfermer dans le sentiment est-il « animal » selon Hegel ?",
		answers: ["Parce que les animaux ont des sentiments", "Parce que cela réduit l'homme à l'immédiateté sensible, sans la médiation du langage et de la raison universelle", "Parce que c'est instinctif"],
		correct: 2,
		explanation: "L'animalité représente pour Hegel l'enfermement dans la singularité subjective et l'incapacité à s'élever à l'universalité du concept et de la communication rationnelle."
	},
	{
		question: "Question n°26 : Quel est le ton général de ce passage ?",
		answers: ["Conciliant et doux", "Polémique, critique et exigeant", "Indifférent et descriptif"],
		correct: 2,
		explanation: "Hegel utilise un ton ferme, ironique (« oracle intérieur », « mesure d'un soulier ») et critique pour fustiger la paresse intellectuelle de son époque."
	},
	{
		question: "Question n°27 : Que signifie « apprécier la philosophie » dans ce contexte ?",
		answers: ["Aimer la philosophie", "Porter un jugement de valeur sur elle, l'évaluer", "La financer"],
		correct: 2,
		explanation: "Il s'agit de la prétention du sens commun à juger de la valeur des doctrines philosophiques sans en posséder les critères rationnels."
	},
	{
		question: "Question n°28 : En quoi ce texte prépare-t-il le projet de la *Phénoménologie* ?",
		answers: ["Il l'annule", "Il justifie la nécessité d'un parcours rigoureux (le chemin du doute et du travail du concept) pour atteindre le savoir absolu", "Il le résume"],
		correct: 2,
		explanation: "En rejetant l'immédiateté du sentiment, Hegel ouvre la voie à la démonstration que la vérité est un résultat qui s'obtient par un processus médiateur et laborieux."
	},
	{
		question: "Question n°29 : Que révèle l'expression « de nos jours » (§3) ?",
		answers: ["Une intemporalité", "Une critique ciblée de l'époque contemporaine de Hegel (le romantisme et l'idéalisme subjectif)", "Une nostalgie du passé"],
		correct: 2,
		explanation: "Hegel vise directement les tendances intellectuelles de son temps, qu'il juge frivoles et anti-scientifiques."
	},
	{
		question: "Question n°30 : Quelle est la différence entre la « raison naturelle » et la raison philosophique ici ?",
		answers: ["Aucune", "La raison naturelle est immédiate et non formée, tandis que la raison philosophique est le fruit d'un effort et d'une culture", "La raison naturelle est supérieure"],
		correct: 2,
		explanation: "La raison naturelle est un point de départ, mais elle devient un obstacle si elle prétend être une mesure suffisante sans le travail de la culture et de la science."
	},
	{
		question: "Question n°31 : Pourquoi le sens commun « rompt tout contact » ?",
		answers: ["Par timidité", "Parce qu'il manque d'arguments rationnels et ne peut opposer que l'affirmation de son propre sentiment", "Parce qu'il est occupé"],
		correct: 2,
		explanation: "Le sentiment étant par définition privé et subjectif, il ne peut pas servir de base à une discussion universelle ; il ne reste que l'affirmation dogmatique."
	},
	{
		question: "Question n°32 : Que signifie « tendre à l'accord mutuel » ?",
		answers: ["Être d'accord sur tout", "La vocation de l'esprit à dépasser la singularité subjective pour atteindre l'universalité objective par le dialogue rationnel", "Se soumettre à l'opinion majoritaire"],
		correct: 2,
		explanation: "C'est la définition hégélienne de la sociabilité rationnelle : la vérité n'est pas privée, elle se constitue dans l'intersubjectivité rationnelle."
	},
	{
		question: "Question n°33 : Que désigne le mot « racine » dans « racine de l'humanité » ?",
		answers: ["L'origine biologique", "Le fondement essentiel et constitutif de l'être humain", "Le passé historique"],
		correct: 2,
		explanation: "C'est ce qui définit l'essence de l'homme : sa capacité à communiquer rationnellement et à chercher l'universel."
	},
	{
		question: "Question n°34 : L'ironie de la « mesure du soulier » dans le pied vise à montrer que :",
		answers: ["La nature nous donne tout", "La possession d'un organe ou d'une faculté naturelle ne vaut pas la maîtrise d'un art ou d'une science", "Les souliers sont importants"],
		correct: 2,
		explanation: "Avoir un pied (mesure naturelle) ne fait pas de vous un cordonnier (maîtrise technique acquise) ; avoir une raison naturelle ne fait pas de vous un philosophe."
	},
	{
		question: "Question n°35 : Que signifie « se donner la peine » (§2) ?",
		answers: ["Souffrir inutilement", "Consentir à l'effort laborieux et à la discipline requis par l'apprentissage", "Se plaindre"],
		correct: 2,
		explanation: "La « peine » (Mühe) est un concept clé chez Hegel : le travail négatif et formateur que l'esprit doit accomplir pour s'élever à la vérité."
	},
	{
		question: "Question n°36 : En quoi la vérité est-elle menacée par le « sentiment » selon ce texte ?",
		answers: ["Elle n'est pas menacée", "Elle est réduite à une impression subjective, perdant son caractère universel et communicable", "Elle devient trop rationnelle"],
		correct: 2,
		explanation: "Si la vérité n'est que ce que je « sens », elle devient incommunicable et dogmatique, détruisant l'idée même de vérité objective."
	},
	{
		question: "Question n°37 : Quel est le rôle de l'énumération « sciences, arts, talents, techniques » (§2) ?",
		answers: ["Remplir l'espace", "Établir une norme universelle de l'effort dans tous les domaines, pour mieux souligner l'exception illégitime accordée à la philosophie", "Critiquer ces domaines"],
		correct: 2,
		explanation: "C'est un argument *a fortiori* : si même les domaines pratiques exigent un effort, à plus forte raison la philosophie, qui est la plus haute des disciplines."
	},
	{
		question: "Question n°38 : Que signifie « institué » dans « communauté instituée » (§5) ?",
		answers: ["Imposé par la force", "Établi, structuré, objectif, relevant de l'Esprit objectif (langage, droit, culture)", "Naturel et spontané"],
		correct: 2,
		explanation: "L'institution marque le passage de la nature à l'esprit : c'est un ordre rationnel et objectif, pas une simple agrégation d'individus."
	},
	{
		question: "Question n°39 : Pourquoi Hegel utilise-t-il le terme « oracle » ?",
		answers: ["Pour louer le sens commun", "Pour dénoncer le caractère irrationnel, mystique et autoritaire de l'appel au sentiment", "Pour faire référence à la Grèce antique"],
		correct: 2,
		explanation: "Un oracle ne donne pas de raisons, il énonce. Qualifier le sentiment d'« oracle intérieur » est une critique de son dogmatisme irrationnel."
	},
	{
		question: "Question n°40 : Ce texte est-il une défense du relativisme ?",
		answers: ["Oui, absolument", "Non, c'est une défense de l'universalité rationnelle contre le relativisme subjectif du sentiment", "Il ne se prononce pas"],
		correct: 2,
		explanation: "Hegel combat le relativisme du « chacun sa vérité » (fondé sur le sentiment) en exigeant une vérité objective et partagée."
	},
	{
		question: "Question n°41 : Que signifie « ne pouvoir se communiquer que par le sentiment » ?",
		answers: ["Être très émotif", "Être incapable de traduire ses intuitions en concepts universels et en arguments rationnels", "Parler avec douceur"],
		correct: 2,
		explanation: "C'est l'échec de la médiation conceptuelle : rester dans le sentiment, c'est rester dans le privé et l'indicible, donc hors de la communauté rationnelle."
	},
	{
		question: "Question n°42 : Quelle est la structure logique de l'argumentation de Hegel ici ?",
		answers: ["Une simple affirmation", "Exigence de sérieux -> Analogie réfutant le préjugé -> Critique de l'épistémologie du sens commun -> Conséquence anthropologique", "Un dialogue"],
		correct: 2,
		explanation: "Le texte progresse de la constatation d'un préjugé à sa réfutation par l'analogie, puis à l'analyse de ses conséquences désastreuses pour l'humanité."
	},
	{
		question: "Question n°43 : En quoi ce passage s'oppose-t-il à la philosophie de Jacobi ?",
		answers: ["Il la soutient", "Jacobi faisait de la « foi » ou du sentiment immédiat le critère de la vérité, ce que Hegel rejette radicalement ici", "Il n'y a aucun rapport"],
		correct: 2,
		explanation: "Hegel critique directement la « philosophie de la foi » ou du sentiment immédiat, qu'il juge être une abdication de la raison."
	},
	{
		question: "Question n°44 : Que nous apprend ce texte sur la conception hégélienne de l'apprentissage ?",
		answers: ["Qu'il est inutile", "Qu'il est un processus de formation (Bildung) nécessaire pour transformer la faculté naturelle en compétence réelle", "Qu'il est réservé aux riches"],
		correct: 2,
		explanation: "La « peine » et l'« effort » sont les moteurs de la *Bildung* (formation/culture), sans laquelle l'esprit reste à l'état naturel et animal."
	},
	{
		question: "Question n°45 : Pourquoi le sens commun est-il « contraint d'expliquer » son silence ?",
		answers: ["Par politesse", "Parce que son incapacité à argumenter rationnellement le force à avouer implicitement son impuissance discursive", "Parce qu'il est bavard"],
		correct: 2,
		explanation: "C'est une contrainte logique : n'ayant pas de raisons universelles à opposer, il ne peut que constater l'absence de sentiment partagé chez l'autre."
	},
	{
		question: "Question n°46 : Quel est le lien entre « humanité » et « communication » dans ce texte ?",
		answers: ["Ils sont opposés", "L'humanité se réalise essentiellement dans la communication rationnelle et la recherche d'accord", "La communication est un obstacle"],
		correct: 2,
		explanation: "L'existence humaine est « seulement dans la communauté instituée des consciences », ce qui implique nécessairement une communication conceptuelle."
	},
	{
		question: "Question n°47 : Que signifie « foule aux pieds » ?",
		answers: ["Marcher vite", "Une violation violente et un mépris total de l'essence humaine", "Une métaphore agricole"],
		correct: 2,
		explanation: "L'expression marque la gravité de la faute : refuser le dialogue rationnel, c'est détruire le fondement même de l'humain."
	},
	{
		question: "Question n°48 : En quoi la philosophie est-elle une « affaire sérieuse » par opposition au sentiment ?",
		answers: ["Elle est ennuyeuse", "Elle exige des preuves, des concepts et un travail de médiation, là où le sentiment se contente de l'immédiateté", "Elle est réglementée par l'État"],
		correct: 2,
		explanation: "Le sérieux (Ernst) est la marque de la science (Wissenschaft) qui ne se paie pas de mots ou d'impressions, mais qui travaille la réalité conceptuellement."
	},
	{
		question: "Question n°49 : Quelle est la portée de la critique de la « raison naturelle » ici ?",
		answers: ["Elle est niée en bloc", "Elle est critiquée dans sa prétention à être une mesure suffisante sans le travail de la culture et de la science", "Elle est divinisée"],
		correct: 2,
		explanation: "Hegel ne nie pas la raison naturelle, mais il nie qu'elle soit *suffisante* telle quelle. Elle doit être éduquée et médiatisée pour devenir raison philosophique."
	},
	{
		question: "Question n°50 : Quelle est la thèse globale de cet extrait ?",
		answers: ["Le sentiment est la voie royale vers la vérité", "La philosophie exige un effort rigoureux et conceptuel, et la réduction de la vérité au sentiment immédiat est une régression anti-humaine", "La philosophie est inutile"],
		correct: 2,
		explanation: "C'est le résumé du texte : défense de la philosophie comme science exigeante et rejet de la facilité dogmatique du sens commun et du sentiment."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "La philosophie comme affaire sérieuse (Hegel)" },
		{ key: 1, parent: 0, text: "L'exigence de sérieux" },
		{ key: 2, parent: 1, text: "[1] Nécessité de faire de la philosophie une affaire sérieuse" },
		{ key: 3, parent: 1, text: "[2] Analogie avec les autres domaines : effort et apprentissage requis" },
		{ key: 4, parent: 0, text: "Critique du préjugé contemporain" },
		{ key: 5, parent: 4, text: "[3] Préjugé : chacun sait immédiatement philosopher" },
		{ key: 6, parent: 4, text: "[3] Fausse justification : la 'mesure' de la raison naturelle" },
		{ key: 7, parent: 4, text: "[3] Réfutation ironique : la mesure du soulier dans le pied" },
		{ key: 8, parent: 0, text: "Critique du sens commun et du sentiment" },
		{ key: 9, parent: 8, text: "[4] Le sentiment comme 'oracle intérieur' indémontrable" },
		{ key: 10, parent: 8, text: "[4] Rupture du contact et incapacité au dialogue rationnel" },
		{ key: 11, parent: 0, text: "Conséquences anthropologiques" },
		{ key: 12, parent: 11, text: "[5] Fouler aux pieds la racine de l'humanité (tendre à l'accord mutuel)" },
		{ key: 13, parent: 11, text: "[5] L'existence humaine est dans la communauté instituée des consciences" },
		{ key: 14, parent: 11, text: "[6] S'enfermer dans le sentiment est anti-humain et animal" }
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
			origine: "G.W.F. Hegel, Phénoménologie de l'Esprit, Préface, trad. Jean Hyppolite",
			theme: "La vérité",
			these: "La philosophie doit être une entreprise rigoureuse et laborieuse, car la vérité ne se donne pas dans l'immédiateté du sentiment ou du sens commun, mais s'acquiert par le travail du concept au sein d'une communauté rationnelle de consciences.",
			interet: "Ce passage célèbre de la Préface pose les fondements épistémologiques et éthiques du projet hégélien. Il rejette radicalement la philosophie du sentiment (romantisme, Jacobi) et le préjugé de la facilité, pour affirmer que la vérité est un résultat qui exige l'effort de la médiation conceptuelle, seule capable de fonder une communauté humaine authentique.",
			problematique: "En quoi l'exigence de sérieux et de travail conceptuel en philosophie est-elle la condition nécessaire pour accéder à la vérité et préserver l'essence communicative et rationnelle de l'humanité ?"
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
			"text": "DÉBUT\nNécessité de faire de la\nphilosophie une affaire\nsérieuse.",
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
			"text": "CONSTAT :\nTous les arts et sciences\nexigent effort et\napprentissage.",
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
			"text": "CRITIQUE DU\nPRÉJUGÉ :\nCroire qu'on sait\nimmédiatement\nphilosopher par\n'raison naturelle'.",
			"loc": "760.53 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "4",
			"text": "RÉFUTATION PAR\nL'ANALOGIE :\nAvoir la mesure du\nsoulier dans le pied\nne fait pas le cordonnier.",
			"loc": "760.53 259.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "5",
			"text": "DÉRIVE DU\nSENS COMMUN :\nAppel au sentiment\n('oracle intérieur')\net rupture du dialogue.",
			"loc": "1034.36 120",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "6",
			"text": "CONSÉQUENCE\nANTHROPOLOGIQUE :\nFouler aux pieds la\nracine de l'humanité\n(l'accord mutuel).",
			"loc": "1319.74 120",
			"category": "rectangle",
			"color": "#ff7675",
			"borderColor": "#d63031",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "7",
			"text": "FIN\nL'enfermement dans\nle sentiment est\nanti-humain et animal.\nLa vérité exige la\ncommunauté des\nconsciences.",
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
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "3",
			"to": "5",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "5",
			"to": "6",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "6",
			"to": "7",
			"fromSide": "right",
			"toSide": "left"
		}
	]
};