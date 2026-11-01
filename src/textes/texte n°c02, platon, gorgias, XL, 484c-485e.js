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
const sousTitre = "Tester ses connaissances sur un texte de Platon (Gorgias)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Calliclès : Il est beau d’étudier la philosophie dans la mesure où elle sert à l’instruction et il n’y a pas de honte pour un jeune garçon à philosopher ; mais, lorsqu’on continue à philosopher dans un âge avancé, la chose devient ridicule, Socrate, et, pour ma part, j’éprouve à l’égard de ceux qui cultivent la philosophie un sentiment très voisin de celui que m’inspirent les gens qui balbutient et font les enfants. [2] Quand je vois un petit enfant, à qui cela convient encore, balbutier et jouer, cela m’amuse et me paraît charmant, digne d’un homme libre et séant à cet âge, tandis que, si j’entends un bambin causer avec netteté, cela me paraît choquant, me blesse l’oreille et j’y vois quelque chose de servile. [3] Mais si c’est un homme fait qu’on entend ainsi balbutier et qu’on voit jouer, cela semble ridicule, indigne d’un homme, et mérite le fouet.\n[4] C’est juste le même sentiment que j’éprouve à l’égard de ceux qui s’adonnent à la philosophie. [5] J’aime la philosophie chez un adolescent, cela me paraît séant et dénote à mes yeux un homme libre. [6] Celui qui la néglige me paraît au contraire avoir une âme basse, qui ne se croira jamais capable d’une action belle et généreuse. [7] Mais quand je vois un homme déjà vieux qui philosophe encore et ne renonce pas à cette étude, je tiens, Socrate, qu’il mérite le fouet. »",
	source: "Platon, <em>Gorgias</em>, 484c-485e, trad. Émile Chambry"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est le locuteur de ce passage ?",
		answers: ["Socrate", "Calliclès", "Gorgias"],
		correct: 2,
		explanation: "Le texte est explicitement introduit par « Calliclès : ». C'est lui qui expose son point de vue sur la philosophie et l'âge à Socrate dans le dialogue *Gorgias* de Platon."
	},
	{
		question: "Question n°2 : De quelle œuvre de Platon ce texte est-il extrait ?",
		answers: ["La République", "Le Banquet", "Gorgias"],
		correct: 3,
		explanation: "La source indique clairement « Platon, Gorgias ». Ce dialogue oppose notamment Socrate à Calliclès sur la nature de la justice, du pouvoir et de la philosophie."
	},
	{
		question: "Question n°3 : Selon Calliclès, à quel moment est-il « beau » d’étudier la philosophie ?",
		answers: ["À tout âge, sans restriction", "Dans la jeunesse, dans la mesure où elle sert à l’instruction", "Uniquement dans la vieillesse pour prendre du recul"],
		correct: 2,
		explanation: "Calliclès affirme dès la première phrase : « Il est beau d’étudier la philosophie dans la mesure où elle sert à l’instruction et il n’y a pas de honte pour un jeune garçon à philosopher »."
	},
	{
		question: "Question n°4 : Que pense Calliclès du fait qu'un jeune garçon philosophe ?",
		answers: ["C'est une perte de temps", "Il n'y a pas de honte, c'est séant", "C'est une marque de servilité"],
		correct: 2,
		explanation: "Il déclare explicitement : « il n’y a pas de honte pour un jeune garçon à philosopher » et ajoute plus loin que cela lui « paraît séant et dénote à mes yeux un homme libre »."
	},
	{
		question: "Question n°5 : Que devient la philosophie lorsqu’on la pratique dans un âge avancé, selon Calliclès ?",
		answers: ["Elle devient une sagesse suprême", "Elle devient ridicule", "Elle devient une nécessité politique"],
		correct: 2,
		explanation: "Calliclès affirme sans ambiguïté : « lorsqu’on continue à philosopher dans un âge avancé, la chose devient ridicule »."
	},
	{
		question: "Question n°6 : À quoi Calliclès compare-t-il les gens qui continuent à philosopher âgés ?",
		answers: ["À des esclaves qui travaillent trop", "À des gens qui balbutient et font les enfants", "À des sophistes qui cherchent le pouvoir"],
		correct: 2,
		explanation: "Il écrit : « j’éprouve à l’égard de ceux qui cultivent la philosophie un sentiment très voisin de celui que m’inspirent les gens qui balbutient et font les enfants »."
	},
	{
		question: "Question n°7 : Quel sentiment Calliclès éprouve-t-il en voyant un petit enfant balbutier et jouer ?",
		answers: ["De l'agacement et du mépris", "De l'amusement, il trouve cela charmant", "De la pitié et de la tristesse"],
		correct: 2,
		explanation: "Il dit : « Quand je vois un petit enfant, à qui cela convient encore, balbutier et jouer, cela m’amuse et me paraît charmant »."
	},
	{
		question: "Question n°8 : Quelles qualités Calliclès attribue-t-il au petit enfant qui balbutie ?",
		answers: ["Il est digne d’un homme libre et cela sied à son âge", "Il est déjà un futur grand orateur", "Il est servile et contraint"],
		correct: 1,
		explanation: "Le texte précise que ce comportement est « digne d’un homme libre et séant à cet âge »."
	},
	{
		question: "Question n°9 : Comment Calliclès réagit-il lorsqu’il entend un enfant « causer avec netteté » ?",
		answers: ["Il est impressionné par sa précocité", "Cela le choque, blesse son oreille et lui semble servile", "Il trouve cela très amusant"],
		correct: 2,
		explanation: "Il affirme : « si j’entends un bambin causer avec netteté, cela me paraît choquant, me blesse l’oreille et j’y vois quelque chose de servile »."
	},
	{
		question: "Question n°10 : Pourquoi un enfant qui parle avec trop de netteté est-il jugé « servile » par Calliclès ?",
		answers: ["Parce qu'il imite les esclaves qui doivent être précis", "Parce qu'il perd la liberté et la spontanéité naturelles de l'enfance", "Parce qu'il est forcé d'apprendre par cœur"],
		correct: 2,
		explanation: "Pour Calliclès, la netteté du langage chez un enfant est contre-nature ; elle trahit une contrainte qui enlève à l'enfant sa liberté naturelle, le rendant ainsi « servile »."
	},
	{
		question: "Question n°11 : Que pense Calliclès d’un homme fait qui balbutie et joue ?",
		answers: ["C'est une preuve de jeunesse éternelle", "C'est ridicule, indigne d’un homme et cela mérite le fouet", "C'est une forme de sagesse supérieure"],
		correct: 2,
		explanation: "Il déclare : « si c’est un homme fait qu’on entend ainsi balbutier et qu’on voit jouer, cela semble ridicule, indigne d’un homme, et mérite le fouet »."
	},
	{
		question: "Question n°12 : Quelle punition Calliclès estime-t-il méritée par l'homme fait qui se comporte comme un enfant ?",
		answers: ["L'exil", "Le fouet", "L'amende"],
		correct: 2,
		explanation: "Le texte utilise l'expression explicite : « mérite le fouet », soulignant le caractère socialement inacceptable et infantilisé de ce comportement."
	},
	{
		question: "Question n°13 : Quel est le lien logique établi par Calliclès entre l'analogie de l'enfant et la philosophie ?",
		answers: ["Aucun, ce sont deux sujets séparés", "Il éprouve le même sentiment envers les philosophes âgés qu'envers les adultes qui jouent", "La philosophie est réservée aux enfants"],
		correct: 2,
		explanation: "Il fait la transition explicitement : « C’est juste le même sentiment que j’éprouve à l’égard de ceux qui s’adonnent à la philosophie »."
	},
	{
		question: "Question n°14 : Que dénote, selon Calliclès, le fait d'aimer la philosophie chez un adolescent ?",
		answers: ["Une faiblesse de caractère", "Un homme libre", "Une future carrière de sophiste"],
		correct: 2,
		explanation: "Il affirme : « J’aime la philosophie chez un adolescent, cela me paraît séant et dénote à mes yeux un homme libre »."
	},
	{
		question: "Question n°15 : Comment Calliclès qualifie-t-il celui qui néglige la philosophie dans sa jeunesse ?",
		answers: ["D'homme prudent et réaliste", "D'homme ayant une âme basse", "D'homme libre et indépendant"],
		correct: 2,
		explanation: "Il dit : « Celui qui la néglige me paraît au contraire avoir une âme basse »."
	},
	{
		question: "Question n°16 : Quelle conséquence Calliclès tire-t-il du fait d'avoir une « âme basse » ?",
		answers: ["On ne se croira jamais capable d’une action belle et généreuse", "On deviendra forcément un tyran", "On sera exclu de la cité"],
		correct: 1,
		explanation: "Il précise que l'homme à l'âme basse « ne se croira jamais capable d’une action belle et généreuse »."
	},
	{
		question: "Question n°17 : Quel est le jugement final de Calliclès sur l'homme déjà vieux qui philosophe encore ?",
		answers: ["Il est admirable et devrait être imité", "Il mérite le fouet", "Il est digne de compassion"],
		correct: 2,
		explanation: "La conclusion du passage est sans appel : « quand je vois un homme déjà vieux qui philosophe encore et ne renonce pas à cette étude, je tiens, Socrate, qu’il mérite le fouet »."
	},
	{
		question: "Question n°18 : Selon Calliclès, quelle est la fonction légitime de la philosophie pour la jeunesse ?",
		answers: ["L'instruction et la formation", "La domination politique immédiate", "Le divertissement pur"],
		correct: 1,
		explanation: "Il précise que la philosophie est belle « dans la mesure où elle sert à l’instruction »."
	},
	{
		question: "Question n°19 : Quelle figure de style est au cœur de l'argumentation de Calliclès dans ce passage ?",
		answers: ["L'analogie (ou comparaison filée)", "L'hyperbole uniquement", "L'oxymore"],
		correct: 1,
		explanation: "Calliclès construit une analogie détaillée entre le comportement langagier et ludique selon l'âge (enfant vs homme fait) et la pratique de la philosophie selon l'âge (jeune vs vieux)."
	},
	{
		question: "Question n°20 : Que signifie le terme « séant » dans ce texte ?",
		answers: ["Qui est assis", "Qui convient, qui est approprié à la situation ou à l'âge", "Qui est ennuyeux"],
		correct: 2,
		explanation: "« Séant » (du verbe seoir) signifie ce qui sied, ce qui convient, ce qui est approprié. Calliclès l'utilise pour dire que la philosophie convient à l'adolescent."
	},
	{
		question: "Question n°21 : Qui est la cible implicite de la critique de Calliclès sur l'homme vieux qui philosophe ?",
		answers: ["Platon lui-même", "Socrate", "Gorgias"],
		correct: 2,
		explanation: "Dans le dialogue, Calliclès s'adresse directement à Socrate (« je tiens, Socrate, qu'il mérite le fouet »), qui est l'archétype du vieillard philosophe aux yeux de Calliclès."
	},
	{
		question: "Question n°22 : Que suggère le verbe « balbutier » appliqué à la philosophie ?",
		answers: ["Que la philosophie est un langage technique incompréhensible", "Que la philosophie est une activité enfantine, imprécise et inadaptée à l'homme d'action", "Que les philosophes ont des défauts d'élocution"],
		correct: 2,
		explanation: "« Balbutier » renvoie à l'incapacité de s'exprimer clairement et efficacement, associant le discours philosophique à un jeu d'enfant plutôt qu'à un outil sérieux pour l'homme adulte."
	},
	{
		question: "Question n°23 : Quel est le ton général du discours de Calliclès ?",
		answers: ["Neutre et descriptif", "Moralisateur, méprisant et assertif", "Hésitant et interrogatif"],
		correct: 2,
		explanation: "Calliclès utilise des jugements de valeur forts (« ridicule », « âme basse », « mérite le fouet ») et exprime ses sentiments personnels, ce qui donne un ton méprisant et assuré."
	},
	{
		question: "Question n°24 : Quelle opposition fondamentale structure ce texte ?",
		answers: ["La richesse et la pauvreté", "La jeunesse (liberté, formation) et la vieillesse (ridicule, incapacité d'action)", "La ville et la campagne"],
		correct: 2,
		explanation: "Tout le passage oppose la légitimité de la philosophie chez le jeune (formation, liberté) à son illégitimité chez l'homme mûr ou vieux (ridicule, infantilisation)."
	},
	{
		question: "Question n°25 : Que signifie « âme basse » dans le vocabulaire de Calliclès ?",
		answers: ["Une âme humble et modeste", "Une âme incapable de viser des actions belles, généreuses et viriles", "Une âme triste et mélancolique"],
		correct: 2,
		explanation: "Pour Calliclès, l'âme basse est celle qui manque d'ambition et de grandeur, incapable de s'élever vers l'action politique ou généreuse."
	},
	{
		question: "Question n°26 : Pourquoi Calliclès utilise-t-il autant la première personne du singulier (« je », « mon ») ?",
		answers: ["Pour montrer son incertitude", "Pour ancrer son jugement dans une réaction naturelle et spontanée qu'il présente comme universelle", "Parce qu'il est le seul à avoir lu Platon"],
		correct: 2,
		explanation: "En disant « j'éprouve », « je vois », « j'aime », Calliclès présente son dégoût pour le philosophe âgé comme une réaction instinctive, naturelle et partagée par tout homme sensé."
	},
	{
		question: "Question n°27 : Quel est le rôle du paragraphe [4] (« C’est juste le même sentiment... ») ?",
		answers: ["Introduire une nouvelle idée sans rapport", "Faire le pont explicite entre l'analogie de l'enfant et le sujet principal (la philosophie)", "Conclure définitivement le dialogue"],
		correct: 2,
		explanation: "Ce paragraphe sert de charnière : il applique explicitement les jugements émis sur le comportement des enfants aux philosophes, validant ainsi l'analogie."
	},
	{
		question: "Question n°28 : Selon Calliclès, que prépare la philosophie chez l'adolescent ?",
		answers: ["À devenir un enfant éternel", "À accomplir des actions belles et généreuses", "À mépriser les lois de la cité"],
		correct: 2,
		explanation: "Il oppose celui qui la néglige (âme basse, incapable d'action belle) à celui qui la pratique, sous-entendant que la philosophie jeunesse est un propédeutique à l'action virile."
	},
	{
		question: "Question n°29 : Que révèle l'expression « ne renonce pas à cette étude » ?",
		answers: ["Que la philosophie doit être abandonnée à un certain stade de la vie", "Que la philosophie est une étude qui ne finit jamais", "Que l'étude est une punition"],
		correct: 1,
		explanation: "Calliclès considère que la philosophie a un terme. « Ne pas renoncer » est vu comme un acharnement ridicule, preuve que l'individu n'a pas compris qu'il doit passer à l'action adulte."
	},
	{
		question: "Question n°30 : En quoi la vision de Calliclès est-elle « mondaine » ou « politique » ?",
		answers: ["Elle valorise la contemplation pure", "Elle subordonne la philosophie à l'efficacité, à l'action et aux conventions sociales de la virilité", "Elle rejette toute forme d'action"],
		correct: 2,
		explanation: "Calliclès juge la philosophie à l'aune de son utilité sociale et politique. Si elle ne sert pas à l'action « belle et généreuse », elle devient un jeu d'enfant ridicule."
	},
	{
		question: "Question n°31 : Quel est le genre littéraire du *Gorgias* ?",
		answers: ["Un poème épique", "Un dialogue philosophique", "Une tragédie grecque"],
		correct: 2,
		explanation: "Le *Gorgias* est l'un des dialogues de Platon, mettant en scène des personnages discutant de manière contradictoire sur des sujets philosophiques."
	},
	{
		question: "Question n°32 : Que signifie « faire les enfants » dans ce contexte ?",
		answers: ["Avoir des enfants", "Adopter un comportement immature, frivole et inadapté à son âge", "Jouer avec des enfants"],
		correct: 2,
		explanation: "L'expression désigne une régression comportementale : un adulte qui adopte les manières, le langage et les jeux de l'enfance, ce qui est socialement inacceptable."
	},
	{
		question: "Question n°33 : Quelle est la fonction de la traduction d'Émile Chambry mentionnée dans la source ?",
		answers: ["C'est l'auteur original du texte", "C'est une traduction française de référence, offrant une version classique et fidèle du texte grec", "C'est un commentateur moderne"],
		correct: 2,
		explanation: "Émile Chambry est un helléniste français connu pour ses traductions des œuvres de Platon, publiées notamment en collection GF Flammarion."
	},
	{
		question: "Question n°34 : Comment Calliclès définit-il implicitement l'homme libre ?",
		answers: ["Comme celui qui obéit strictement aux lois", "Comme celui qui agit conformément à sa nature et à son âge, sans contrainte servile", "Comme celui qui ne travaille pas"],
		correct: 2,
		explanation: "L'homme libre est celui dont le comportement est « séant » à son âge. L'adulte qui joue perd cette liberté pour tomber dans la servilité du ridicule."
	},
	{
		question: "Question n°35 : Que reproche Calliclès à la philosophie en tant que pratique prolongée ?",
		answers: ["D'être trop coûteuse", "De rendre impropre à l'action virile et politique en maintenant dans l'immaturité", "D'être trop facile"],
		correct: 2,
		explanation: "Le reproche central est que la philosophie, si elle se prolonge, empêche l'homme de devenir un acteur sérieux de la cité, le maintenant dans un état d'infantilisme."
	},
	{
		question: "Question n°36 : Quelle est la valeur de l'argument par l'analogie chez Calliclès ?",
		answers: ["Elle est purement décorative", "Elle vise à rendre évidente et absurde la situation du philosophe âgé en la comparant à une situation sociale clairement jugée ridicule", "Elle prouve logiquement que la philosophie est fausse"],
		correct: 2,
		explanation: "L'analogie vise à provoquer un jugement de valeur partagé : tout le monde trouve ridicule un homme fait qui balbutie, donc on doit trouver ridicule le vieux philosophe."
	},
	{
		question: "Question n°37 : Que signifie « action belle et généreuse » dans ce passage ?",
		answers: ["Un acte de charité isolé", "Une action politique, virile et noble, digne d'un citoyen accompli", "Une action artistique"],
		correct: 2,
		explanation: "Dans le contexte de la morale aristocratique de Calliclès, une « action belle et généreuse » (kalos kagathos) renvoie à l'excellence politique et civique."
	},
	{
		question: "Question n°38 : Pourquoi Calliclès dit-il que la philosophie sert à l'« instruction » ?",
		answers: ["Parce qu'elle est un outil temporaire de formation de l'esprit, comme un exercice gymnique pour l'adolescent", "Parce qu'elle donne des diplômes", "Parce qu'elle remplace l'expérience"],
		correct: 1,
		explanation: "Calliclès concède une utilité propédeutique à la philosophie : elle aiguise l'esprit du jeune homme. Mais elle doit laisser place à l'activité sérieuse une fois l'âge adulte atteint."
	},
	{
		question: "Question n°39 : Quel est le rapport entre « choquant » et « servile » dans le texte ?",
		answers: ["Ils sont opposés", "Le caractère choquant de l'enfant qui parle net vient de ce que cela trahit une contrainte servile, contraire à sa nature libre", "Ils désignent deux enfants différents"],
		correct: 2,
		explanation: "Calliclès lie les deux : le langage trop net chez l'enfant est « choquant » précisément parce qu'il y voit « quelque chose de servile », c'est-à-dire une perte de la spontanéité libre."
	},
	{
		question: "Question n°40 : En quoi ce texte est-il une attaque contre Socrate ?",
		answers: ["Il ne l'attaque pas du tout", "Il vise directement le mode de vie de Socrate, vieillard qui passe son temps à discuter au lieu de s'occuper de politique", "Il loue Socrate en secret"],
		correct: 2,
		explanation: "Socrate est l'incarnation même du « vieillard qui philosophe encore ». Calliclès lui signifie que son mode de vie est socialement ridicule et indigne."
	},
	{
		question: "Question n°41 : Que signifie le mot « honte » dans « il n’y a pas de honte pour un jeune garçon à philosopher » ?",
		answers: ["La culpabilité religieuse", "Le déshonneur social ou le ridicule", "La timidité"],
		correct: 2,
		explanation: "La « honte » (aidôs en grec) renvoie ici au regard des autres, au sentiment de ce qui est socialement acceptable ou non."
	},
	{
		question: "Question n°42 : Quelle est la conception du temps chez Calliclès dans cet extrait ?",
		answers: ["Le temps est cyclique et sans importance", "Le temps est linéaire et chaque âge a ses tâches spécifiques qu'il faut respecter sous peine de ridicule", "Le temps s'arrête pour le philosophe"],
		correct: 2,
		explanation: "Calliclès a une vision strictement chronologique et développementale : l'enfance a ses jeux, la jeunesse sa formation, l'âge mûr son action."
	},
	{
		question: "Question n°43 : Que révèle l'expression « à mes yeux » dans « dénote à mes yeux un homme libre » ?",
		answers: ["Un doute sur la réalité", "Une affirmation de son autorité morale et de son point de vue aristocratique", "Une hallucination visuelle"],
		correct: 2,
		explanation: "Calliclès assume son jugement de valeur. « À mes yeux » signifie que selon ses critères (ceux de l'aristocratie athénienne), c'est ainsi que les choses doivent être évaluées."
	},
	{
		question: "Question n°44 : Pourquoi le fouet est-il mentionné comme punition ?",
		answers: ["C'est une punition pour les esclaves ou les enfants, soulignant l'infantilisation du philosophe âgé", "C'est une métaphore de la douleur physique de la pensée", "C'est une référence à un rituel religieux"],
		correct: 1,
		explanation: "Le fouet est une punition corporelle infamante, réservée aux esclaves ou aux enfants désobéissants. L'appliquer à un homme fait souligne à quel point son comportement l'a fait déchoir de son statut d'homme libre."
	},
	{
		question: "Question n°45 : Quel est le thème principal de ce passage ?",
		answers: ["La théorie des Idées", "La place légitime de la philosophie selon l'âge et son rapport à l'action", "La critique de la démocratie"],
		correct: 2,
		explanation: "Le passage se concentre exclusivement sur la question de savoir quand il est convenable de philosopher et sur les conséquences sociales et morales de cette pratique selon l'âge."
	},
	{
		question: "Question n°46 : En quoi la philosophie est-elle « belle » pour Calliclès (dans la jeunesse) ?",
		answers: ["Parce qu'elle est esthétiquement plaisante à écouter", "Parce qu'elle est appropriée, noble et formatrice à ce stade de la vie", "Parce qu'elle rapporte de l'argent"],
		correct: 2,
		explanation: "Le « beau » (kalos) chez les Grecs a une dimension morale et fonctionnelle : est beau ce qui remplit bien sa fonction. La philosophie est belle chez le jeune car elle remplit sa fonction d'instruction."
	},
	{
		question: "Question n°47 : Quelle est la faiblesse de l'argument de Calliclès du point de vue de Socrate (implicite) ?",
		answers: ["Il confond la vérité avec l'opinion sociale et le ridicule, et nie que la philosophie soit une quête de vérité valable toute la vie", "Il aime trop les enfants", "Il ne sait pas ce qu'est le fouet"],
		correct: 1,
		explanation: "Socrate répondra que la philosophie n'est pas un jeu d'enfant, mais la recherche de la vérité et de la vertu, qui est nécessaire à tout âge."
	},
	{
		question: "Question n°48 : Que signifie « s'adonnent à la philosophie » ?",
		answers: ["Lire un livre une fois", "Se consacrer de manière excessive ou exclusive à la philosophie, au détriment d'autres activités", "Enseigner la philosophie"],
		correct: 2,
		explanation: "Le verbe « s'adonner » implique une pratique régulière, voire une passion ou une dépendance. Calliclès critique ceux qui en font leur occupation principale à un âge où ils devraient faire autre chose."
	},
	{
		question: "Question n°49 : Comment Calliclès caractérise-t-il la transition de l'adolescence à l'âge adulte ?",
		answers: ["Comme une continuité paisible", "Comme une rupture où l'on doit abandonner certaines pratiques (la philosophie) pour devenir un homme d'action", "Comme une décadence inévitable"],
		correct: 2,
		explanation: "Il y a une coupure nette : ce qui est vertueux et libre à 15 ans devient ridicule et servile à 40 ans. L'homme doit changer d'activité pour rester digne."
	},
	{
		question: "Question n°50 : Quelle est la visée rhétorique de ce discours de Calliclès ?",
		answers: ["Convaincre Socrate d'abandonner la philosophie et de se tourner vers la vie politique active, en jouant sur la honte sociale", "Apprendre à philosopher", "Raconter une histoire drôle"],
		correct: 1,
		explanation: "C'est un discours protreptique inversé (une exhortation à quitter la philosophie). Calliclès utilise la honte sociale pour tenter de détourner Socrate de son mode de vie et le ramener à la politique."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "Philosophie et âge selon Calliclès" },
		{ key: 1, parent: 0, text: "La jeunesse : un temps pour philosopher" },
		{ key: 2, parent: 1, text: "[1] C'est beau et sans honte" },
		{ key: 3, parent: 1, text: "[1] Cela sert à l'instruction" },
		{ key: 4, parent: 1, text: "[5] Cela dénote un homme libre" },
		{ key: 5, parent: 1, text: "[6] Négliger la philosophie = âme basse" },
		{ key: 6, parent: 0, text: "L'analogie de l'enfance" },
		{ key: 7, parent: 6, text: "[2] Petit enfant qui balbutie : charmant, libre" },
		{ key: 8, parent: 6, text: "[2] Enfant qui parle net : choquant, servile" },
		{ key: 9, parent: 6, text: "[3] Homme fait qui balbutie : ridicule, mérite le fouet" },
		{ key: 10, parent: 0, text: "La vieillesse : un temps pour renoncer" },
		{ key: 11, parent: 10, text: "[1] Continuer à philosopher est ridicule" },
		{ key: 12, parent: 10, text: "[4] Sentiment similaire à l'enfant qui joue" },
		{ key: 13, parent: 10, text: "[7] L'homme vieux qui philosophe mérite le fouet" },
		{ key: 14, parent: 0, text: "Enjeu moral et politique" },
		{ key: 15, parent: 14, text: "La philosophie jeune prépare à l'action belle" },
		{ key: 16, parent: 14, text: "La philosophie vieille empêche l'action virile" }
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
			origine: "Platon, Gorgias, 484c-485e",
			theme: "La liberté",
			these: "La philosophie est une pratique noble qui sied à la jeunesse et dénote un homme libre, mais elle devient une occupation servile et ridicule pour l'homme fait, qui doit se consacrer à l'action plutôt qu'à une étude qui l'infantilise.",
			interet: "Ce texte propose une conception de la liberté étroitement liée à l'âge et à l'action : être libre, c'est agir selon sa nature et son stade de développement. Calliclès critique la pratique prolongée de la philosophie car elle maintient l'adulte dans une forme de servilité et d'immaturité (le « balbutiement »), l'empêchant d'exercer sa véritable liberté d'homme d'action.",
			problematique: "En quoi la pratique de la philosophie, louable chez le jeune homme, devient-elle une marque de servilité et une entrave à la véritable liberté de l'homme fait selon Calliclès ?"
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
			"text": "DÉBUT\nFaut-il philosopher ?\nQuelle est la place de la philosophie ?",
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
			"text": "Quel est l'âge\ndu philosophe ?",
			"loc": "480 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "3",
			"text": "[1-5] JEUNESSE :\nC'est beau, sans honte,\nsert à l'instruction,\ndénote un homme libre.",
			"loc": "480 259.98",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "4",
			"text": "[6] Celui qui la néglige\njeune a une âme basse\net ne fera rien de beau.",
			"loc": "480 400",
			"category": "rectangle",
			"color": "#a3bffa",
			"borderColor": "#3b5bdb",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "5",
			"text": "[1, 3, 7] ÂGE AVANCÉ :\nC'est ridicule, indigne,\ncomme un homme fait\nqui balbutie.",
			"loc": "760.53 120",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "6",
			"text": "ANALOGIE :\nEnfant qui balbutie = charmant\nHomme fait qui balbutie = fouet",
			"loc": "760.53 258.35",
			"category": "rectangle",
			"color": "#a3bffa",
			"borderColor": "#3b5bdb",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "7",
			"text": "FIN\n[7] DONC l'homme vieux\nqui philosophe encore\nmérite le fouet.",
			"loc": "1041.17 120",
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
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "3",
			"to": "4",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "2",
			"to": "5",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "5",
			"to": "6",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "5",
			"to": "7",
			"fromSide": "right",
			"toSide": "left"
		}
	]
};
