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
const sousTitre = "Tester ses connaissances sur un texte d'Épictète (Manuel)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Souviens-toi que tu dois te comporter comme dans un festin. [2] Le plat qui circule arrive-t-il à toi ? [3] Tends la main et prends modérément. [4] Passe-t-il loin de toi ? [5] Ne le recherche pas. [6] Tarde-t-il à venir ? [7] Ne jette pas de loin sur lui ton désir, mais patiente jusqu’à ce qu’il arrive à toi. [8] Sois ainsi pour tes enfants, ainsi pour ta femme, ainsi pour les charges publiques, ainsi pour la richesse, et tu seras un jour digne d’être le convive des Dieux.\n[9] Souviens-toi que tu es comme un acteur dans le rôle que l’auteur dramatique a voulu te donner : court, s’il est court ; long, s’il est long. [10] S’il veut que tu joues un rôle de mendiant, joue-le encore convenablement. [11] Fais de même pour un rôle de boiteux, de magistrat, de simple particulier. [12] Il dépend de toi, en effet, de bien jouer le personnage qui t’est donné ; mais le choisir appartient à un autre.\n[13] Si tu prends un rôle au-dessus de tes forces, non seulement tu y fais pauvre figure, mais celui que tu aurais pu remplir, tu le laisses de côté.\n[14] Décline les repas extérieurs et ceux des gens vulgaires... [15] Pour ce qui regarde le corps, ne prends que selon la stricte utilité, qu’il s’agisse de nourriture, de boisson, de vêtement, d’habitation, de domesticité. [16] Tout ce qui a trait à l’ostentation et au luxe, efface-le.\n[17] Toute chose a deux anses : l’une par où on peut la porter, l’autre par où on ne le peut pas. [18] Si ton frère a des torts, ne le prends pas du côté par où il a des torts ; ce serait l’anse par où on ne peut rien porter. [19] Prends-le plutôt par l’autre, te rappelant qu’il est ton frère, qu’il a été nourri avec toi, et tu prendras la chose par où on peut la porter. »",
	source: "Épictète, <em>Manuel</em> (Enchiridion)"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Sénèque", "Épictète", "Marc Aurèle"],
		correct: 2,
		explanation: "Le texte est extrait du *Manuel* (ou *Enchiridion*), un résumé de l'enseignement du philosophe stoïcien Épictète, rédigé par son disciple Arrien."
	},
	{
		question: "Question n°2 : Quelle est la première métaphore utilisée par Épictète pour illustrer le comportement sage ?",
		answers: ["La navigation en mer", "Le comportement dans un festin", "Le combat sportif"],
		correct: 2,
		explanation: "Le texte commence par : « Souviens-toi que tu dois te comporter comme dans un festin »."
	},
	{
		question: "Question n°3 : Selon la métaphore du festin, que faut-il faire quand le plat arrive à soi ?",
		answers: ["Le prendre en grande quantité", "Tendre la main et prendre modérément", "Le refuser par ascétisme"],
		correct: 2,
		explanation: "Épictète prescrit la modération : « Tends la main et prends modérément »."
	},
	{
		question: "Question n°4 : Que faut-il faire si le plat passe loin de soi ?",
		answers: ["Le réclamer avec insistance", "Ne pas le rechercher", "Se mettre en colère"],
		correct: 2,
		explanation: "Le sage doit faire preuve de détachement : « Passe-t-il loin de toi ? Ne le recherche pas »."
	},
	{
		question: "Question n°5 : Quelle attitude adopter si le plat tarde à venir ?",
		answers: ["S'impatienter et s'agiter", "Patienter jusqu'à ce qu'il arrive", "Quitter le festin"],
		correct: 2,
		explanation: "Il faut « patienter jusqu’à ce qu’il arrive à toi », sans projeter son désir prématurément."
	},
	{
		question: "Question n°6 : À quels domaines de la vie Épictète applique-t-il cette métaphore du festin (§8) ?",
		answers: ["Uniquement à la nourriture", "Aux enfants, à la femme, aux charges publiques et à la richesse", "Uniquement à la vie politique"],
		correct: 2,
		explanation: "Il étend la métaphore à tous les biens extérieurs et aux relations humaines : « Sois ainsi pour tes enfants, ainsi pour ta femme, ainsi pour les charges publiques, ainsi pour la richesse »."
	},
	{
		question: "Question n°7 : Quelle est la récompense ultime de cette attitude de modération et de détachement ?",
		answers: ["Devenir riche et puissant", "Être un jour digne d’être le convive des Dieux", "Obtenir l'immortalité physique"],
		correct: 2,
		explanation: "La finalité est spirituelle et morale : « tu seras un jour digne d’être le convive des Dieux »."
	},
	{
		question: "Question n°8 : Quelle est la deuxième grande métaphore introduite au §9 ?",
		answers: ["La métaphore du théâtre (l'acteur)", "La métaphore du jardinage", "La métaphore de la construction"],
		correct: 1,
		explanation: "Épictète écrit : « Souviens-toi que tu es comme un acteur dans le rôle que l’auteur dramatique a voulu te donner »."
	},
	{
		question: "Question n°9 : Qui est « l'auteur dramatique » dans cette métaphore ?",
		answers: ["Le destin, la Providence ou Dieu (le Logos)", "La société humaine", "L'individu lui-même"],
		correct: 1,
		explanation: "Dans le stoïcisme, l'auteur de la pièce est la Raison universelle, Dieu ou le Destin, qui distribue les rôles."
	},
	{
		question: "Question n°10 : Que doit faire l'acteur si le rôle est court ou long ?",
		answers: ["Le modifier pour qu'il lui convienne", "L'accepter tel qu'il est : court s'il est court, long s'il est long", "Refuser de jouer"],
		correct: 2,
		explanation: "L'acceptation inconditionnelle du rôle assigné est requise : « court, s’il est court ; long, s’il est long »."
	},
	{
		question: "Question n°11 : Quels exemples de rôles Épictète donne-t-il ?",
		answers: ["Roi, guerrier, esclave", "Mendiant, boiteux, magistrat, simple particulier", "Dieu, héros, monstre"],
		correct: 2,
		explanation: "Il cite des conditions sociales et physiques variées pour montrer que le statut importe peu."
	},
	{
		question: "Question n°12 : Selon le §12, qu'est-ce qui dépend de nous ?",
		answers: ["Choisir notre rôle dans la vie", "Bien jouer le personnage qui nous est donné", "Changer l'auteur de la pièce"],
		correct: 2,
		explanation: "C'est l'application de la dichotomie du contrôle : « Il dépend de toi [...] de bien jouer le personnage qui t’est donné »."
	},
	{
		question: "Question n°13 : Selon le §12, qu'est-ce qui ne dépend pas de nous ?",
		answers: ["La qualité de notre jeu", "Le choix du rôle, qui appartient à un autre", "Notre attitude intérieure"],
		correct: 2,
		explanation: "« mais le choisir [le rôle] appartient à un autre » (l'auteur dramatique / la Providence)."
	},
	{
		question: "Question n°14 : Que se passe-t-il si l'on prend un rôle au-dessus de ses forces (§13) ?",
		answers: ["On réussit par surprise", "On y fait pauvre figure et on néglige le rôle qu'on aurait pu remplir", "On est félicité pour son ambition"],
		correct: 2,
		explanation: "La démesure mène à l'échec : « non seulement tu y fais pauvre figure, mais celui que tu aurais pu remplir, tu le laisses de côté »."
	},
	{
		question: "Question n°15 : Que recommande Épictète concernant les « repas extérieurs » (§14) ?",
		answers: ["De les accepter avec joie", "De les décliner", "De les organiser soi-même"],
		correct: 2,
		explanation: "Il conseille de s'en écarter pour préserver son indépendance intérieure : « Décline les repas extérieurs »."
	},
	{
		question: "Question n°16 : Quel critère doit guider nos besoins corporels (§15) ?",
		answers: ["Le plaisir maximal", "La stricte utilité", "L'apparence sociale"],
		correct: 2,
		explanation: "Pour le corps, il faut se limiter à « la stricte utilité »."
	},
	{
		question: "Question n°17 : Que faut-il faire de tout ce qui a trait à l'ostentation et au luxe (§16) ?",
		answers: ["Le modérer", "L'effacer", "Le montrer avec fierté"],
		correct: 2,
		explanation: "Le texte est impératif : « Tout ce qui a trait à l’ostentation et au luxe, efface-le »."
	},
	{
		question: "Question n°18 : Quelle est la troisième grande métaphore introduite au §17 ?",
		answers: ["La métaphore du navire", "La métaphore des deux anses (ou poignées)", "La métaphore du miroir"],
		correct: 2,
		explanation: "Épictète écrit : « Toute chose a deux anses : l’une par où on peut la porter, l’autre par où on ne le peut pas »."
	},
	{
		question: "Question n°19 : Que signifie le mot « anse » dans ce contexte philosophique ?",
		answers: ["Une poignée de porte", "Une manière de saisir, d'envisager ou de juger une situation", "Une anse de panier"],
		correct: 2,
		explanation: "L'anse représente l'angle sous lequel on choisit de considérer un événement : soit de manière supportable, soit de manière insupportable."
	},
	{
		question: "Question n°20 : Quelle application concrète Épictète donne-t-il à la métaphore des deux anses (§18) ?",
		answers: ["Une dispute avec un voisin", "Les torts d'un frère", "Une perte d'argent"],
		correct: 2,
		explanation: "Il prend l'exemple des relations familiales : « Si ton frère a des torts, ne le prends pas du côté par où il a des torts »."
	},
	{
		question: "Question n°21 : Pourquoi ne faut-il pas saisir la situation par l'anse des torts du frère ?",
		answers: ["Parce que c'est l'anse par où on ne peut rien porter (cela crée conflit et souffrance)", "Parce que c'est illégal", "Parce qu'il faut toujours avoir raison"],
		correct: 1,
		explanation: "Saisir le problème par le côté du tort, c'est choisir l'angle qui rend la situation insupportable et destructrice pour la relation."
	},
	{
		question: "Question n°22 : Par quelle anse faut-il saisir la situation avec le frère (§19) ?",
		answers: ["En se rappelant qu'il est ton frère et qu'il a été nourri avec toi", "En ignorant ses défauts", "En le punissant"],
		correct: 1,
		explanation: "Il faut changer de représentation : « Prends-le plutôt par l’autre, te rappelant qu’il est ton frère, qu’il a été nourri avec toi »."
	},
	{
		question: "Question n°23 : Quel concept stoïcien fondamental est illustré par la métaphore de l'acteur ?",
		answers: ["L'ataraxie", "La dichotomie de ce qui dépend de nous et de ce qui n'en dépend pas", "L'atomisme"],
		correct: 2,
		explanation: "Le rôle (extérieur) ne dépend pas de nous, mais la manière de le jouer (intérieur) dépend de nous."
	},
	{
		question: "Question n°24 : Que signifie « prendre modérément » dans le contexte du festin ?",
		answers: ["Ne rien prendre du tout", "Accepter ce qui vient sans s'y attacher avec excès", "Prendre le plus possible avant que cela ne parte"],
		correct: 2,
		explanation: "La modération (sôphrosynè) est l'usage mesuré et sans attachement passionné des biens extérieurs."
	},
	{
		question: "Question n°25 : Que révèle l'expression « joue-le encore convenablement » à propos du mendiant ?",
		answers: ["Que la pauvreté est une honte", "Que la dignité morale est possible dans n'importe quelle condition sociale", "Que le mendiant doit devenir magistrat"],
		correct: 2,
		explanation: "La vertu est indépendante du statut social. Un mendiant peut être vertueux s'il joue son rôle avec dignité."
	},
	{
		question: "Question n°26 : Quelle est la fonction de la répétition « ainsi pour... ainsi pour... ainsi pour... » (§8) ?",
		answers: ["Montrer une hésitation", "Généraliser la règle de la modération à tous les domaines de l'existence", "Énumérer des choses sans importance"],
		correct: 2,
		explanation: "Cette anaphore souligne l'universalité de la règle stoïcienne face à tous les « indifférents »."
	},
	{
		question: "Question n°27 : Que signifie « stricte utilité » (§15) ?",
		answers: ["Ce qui est nécessaire à la survie et au fonctionnement du corps, sans superflu", "Ce qui rapporte de l'argent", "Ce qui est agréable au goût"],
		correct: 1,
		explanation: "Le stoïcisme prône l'ascétisme fonctionnel : utiliser les choses uniquement pour ce qu'elles valent objectivement."
	},
	{
		question: "Question n°28 : Pourquoi faut-il décliner les repas des « gens vulgaires » ?",
		answers: ["Parce qu'ils sont malpolis", "Parce que ces repas impliquent des compromis moraux et un attachement aux apparences", "Parce que la nourriture y est mauvaise"],
		correct: 2,
		explanation: "Les « repas extérieurs » symbolisent la dépendance sociale et la compromission des valeurs philosophiques."
	},
	{
		question: "Question n°29 : Quel est le lien entre les trois métaphores (festin, acteur, anses) ?",
		answers: ["Elles sont contradictoires", "Elles illustrent toutes l'acceptation de l'ordre du monde et la maîtrise active de nos jugements intérieurs", "Elles n'ont aucun lien"],
		correct: 2,
		explanation: "Chaque métaphore enseigne à accepter ce qui vient (le plat, le rôle, l'événement) et à choisir la bonne attitude intérieure (modération, jeu convenable, bonne anse)."
	},
	{
		question: "Question n°30 : Que signifie « faire pauvre figure » (§13) ?",
		answers: ["Être mal habillé", "Échouer de manière ridicule parce qu'on a surestimé ses capacités", "Avoir un visage triste"],
		correct: 2,
		explanation: "C'est la conséquence de l'ambition démesurée : vouloir un rôle trop grand mène à l'échec et à la perte de la dignité."
	},
	{
		question: "Question n°31 : En quoi ce texte est-il un « manuel » ?",
		answers: ["C'est un livre d'histoire", "Il donne des règles pratiques, des images mnémotechniques et des conseils concrets pour la vie quotidienne", "C'est un roman"],
		correct: 2,
		explanation: "Le *Manuel* (Enchiridion, « ce qu'on a à la main ») est un guide pratique, une boîte à outils mentale."
	},
	{
		question: "Question n°32 : Que nous apprend le texte sur la liberté selon Épictète ?",
		answers: ["La liberté est de faire tout ce qu'on veut", "La liberté est d'accepter l'ordre du monde et de maîtriser ses désirs et jugements", "La liberté est une illusion"],
		correct: 2,
		explanation: "La vraie liberté est intérieure : elle consiste à ne pas dépendre de ce qu'on ne contrôle pas et à exceller dans ce qu'on contrôle."
	},
	{
		question: "Question n°33 : Pourquoi Épictète utilise-t-il des questions rhétoriques (§2, §4, §6) ?",
		answers: ["Parce qu'il ne connaît pas les réponses", "Pour impliquer activement le lecteur et simuler un dialogue intérieur d'auto-examen", "Pour remplir de l'espace"],
		correct: 2,
		explanation: "Les questions forcent le lecteur à s'auto-interroger et à appliquer la règle à chaque situation concrète."
	},
	{
		question: "Question n°34 : Que signifie « domesticité » dans la liste du §15 ?",
		answers: ["Les animaux de compagnie", "Le fait d'avoir des serviteurs ou des esclaves", "La vie de famille"],
		correct: 2,
		explanation: "Dans l'Antiquité, la domesticité renvoie aux serviteurs. Il faut les utiliser avec stricte utilité, sans attachement passionné ni cruauté."
	},
	{
		question: "Question n°35 : Quelle vertu est principalement mobilisée dans la métaphore du festin ?",
		answers: ["Le courage", "La tempérance (modération)", "La justice"],
		correct: 2,
		explanation: "La tempérance est la vertu qui règle les désirs et les plaisirs, exactement ce que décrit la scène du festin."
	},
	{
		question: "Question n°36 : Que se passe-t-il si l'on désire un plat qui tarde à venir ?",
		answers: ["On souffre inutilement avant même de l'avoir", "On montre sa détermination", "On est récompensé plus vite"],
		correct: 1,
		explanation: "« Ne jette pas de loin sur lui ton désir » : anticiper le désir pour un bien non contrôlable est une source de trouble."
	},
	{
		question: "Question n°37 : En quoi la richesse est-elle traitée dans ce texte ?",
		answers: ["Comme un bien absolu à rechercher", "Comme un « plat » qui peut passer ou arriver, à accueillir avec détachement", "Comme un mal absolu à fuir"],
		correct: 2,
		explanation: "La richesse est un « indifférent préféré » : elle peut arriver, et on peut la prendre modérément, mais elle ne doit pas être recherchée avec anxiété."
	},
	{
		question: "Question n°38 : Que signifie « un autre » dans « le choisir appartient à un autre » (§12) ?",
		answers: ["Un autre acteur", "La Providence / Dieu / la Nature", "Le public"],
		correct: 2,
		explanation: "C'est le Logos divin qui assigne à chacun sa place et son rôle dans le grand théâtre du monde."
	},
	{
		question: "Question n°39 : Pourquoi le texte dit-il « Souviens-toi » à deux reprises (§1 et §9) ?",
		answers: ["Parce que l'auteur a une mauvaise mémoire", "Pour marquer l'importance de ces règles fondamentales à garder constamment à l'esprit (meletè)", "C'est une erreur de traduction"],
		correct: 2,
		explanation: "La philosophie stoïcienne est une pratique de la mémoire : il faut se rappeler continuellement ces principes pour ne pas être emporté par les passions."
	},
	{
		question: "Question n°40 : Comment le stoïcien doit-il considérer son corps selon les §15-16 ?",
		answers: ["Comme un temple sacré à embellir", "Comme un instrument à entretenir selon la stricte utilité, en effaçant le luxe", "Comme une prison à détruire"],
		correct: 2,
		explanation: "Le corps est un « indifférent » : il faut en prendre soin mais uniquement pour ce qui est strictement utile, en rejetant l'ostentation."
	},
	{
		question: "Question n°41 : Quelle est la différence entre le rôle et la manière de le jouer ?",
		answers: ["Aucune", "Le rôle est un indifférent (extérieur), la manière de le jouer est l'usage de notre raison (intérieur, moral)", "Le rôle est plus important"],
		correct: 2,
		explanation: "La valeur morale ne réside pas dans ce qui nous arrive (le rôle), mais dans notre jugement et notre action face à ce qui nous arrive."
	},
	{
		question: "Question n°42 : Que suggère l'idée de « laisser de côté » un rôle qu'on aurait pu remplir (§13) ?",
		answers: ["Que l'ambition nous fait négliger nos véritables devoirs et capacités", "Qu'il faut toujours changer de métier", "Que les rôles sont interchangeables"],
		correct: 1,
		explanation: "En visant trop haut, on échoue et on gâche l'opportunité d'exceller dans la tâche qui était réellement à notre mesure."
	},
	{
		question: "Question n°43 : En quoi la métaphore des deux anses illustre-t-elle la théorie des représentations (phantasiai) ?",
		answers: ["Elle montre que les choses sont objectivement bonnes ou mauvaises", "Elle montre qu'une même chose peut être représentée sous un jour supportable ou insupportable selon l'angle choisi par notre raison", "Elle nie la réalité des choses"],
		correct: 2,
		explanation: "C'est le cœur de la thérapie stoïcienne : nous ne souffrons pas des choses, mais du jugement que nous portons sur elles. Changer d'anse, c'est changer de jugement."
	},
	{
		question: "Question n°44 : Que signifie « gens vulgaires » (§14) ?",
		answers: ["Les gens pauvres", "Les gens qui vivent selon les opinions communes, les passions et les apparences, sans philosophie", "Les gens grossiers"],
		correct: 2,
		explanation: "Le « vulgaire » (hoi polloi) désigne la masse des gens non philosophes, attachés aux biens extérieurs."
	},
	{
		question: "Question n°45 : Quelle est la portée politique de ce texte ?",
		answers: ["Il appelle à la révolution", "Il prône un détachement des charges publiques si elles ne sont pas conformes à la vertu, et une acceptation de sa place", "Il soutient la tyrannie"],
		correct: 2,
		explanation: "On peut être magistrat ou simple particulier ; l'important n'est pas la fonction politique, mais la manière vertueuse de l'exercer."
	},
	{
		question: "Question n°46 : Que nous apprend la phrase « court, s’il est court ; long, s’il est long » ?",
		answers: ["Qu'il faut abréger les discours", "L'acceptation totale de la durée et des conditions de notre existence (Amor Fati)", "Que la vie est toujours courte"],
		correct: 2,
		explanation: "C'est l'amour du destin : accepter la durée de vie, la santé ou la maladie telles qu'elles sont distribuées par la nature."
	},
	{
		question: "Question n°47 : Pourquoi Épictète mentionne-t-il « nourri avec toi » (§19) ?",
		answers: ["Pour rappeler le lien du sang et de l'éducation commune qui doit primer sur les torts passagers", "Pour parler de gastronomie", "Pour dire qu'il faut partager la nourriture"],
		correct: 1,
		explanation: "Ce souvenir de l'origine commune est l'« anse » qui permet de porter la relation malgré les conflits, en activant la bienveillance naturelle."
	},
	{
		question: "Question n°48 : En quoi la métaphore du théâtre est-elle libératrice ?",
		answers: ["Elle permet de mentir", "Elle dédramatise les épreuves : ce n'est qu'un rôle, notre vraie nature (la raison) reste intacte et libre", "Elle encourage à changer de vie constamment"],
		correct: 2,
		explanation: "Savoir que l'on « joue un rôle » permet de prendre de la distance par rapport aux malheurs apparents et de préserver sa liberté intérieure."
	},
	{
		question: "Question n°49 : Que signifie « ne jette pas de loin sur lui ton désir » ?",
		answers: ["Ne pas lancer d'objets", "Ne pas anticiper anxieusement la possession d'un bien, ce qui crée un manque et une souffrance inutiles", "Ne pas désirer les choses lointaines"],
		correct: 2,
		explanation: "Le désir anticipé est une projection de l'âme qui se trouble elle-même avant même que l'événement n'ait lieu."
	},
	{
		question: "Question n°50 : Quelle est la leçon ultime de ce texte pour le lecteur ?",
		answers: ["Il faut devenir acteur professionnel", "Il faut se concentrer sur ce qui dépend de nous et choisir la bonne « anse » pour juger les événements avec sagesse", "Il faut éviter tous les repas en société"],
		correct: 2,
		explanation: "C'est la synthèse de tout l'enseignement d'Épictète : la distinction entre ce qui est à nous et ce qui ne l'est pas, et la recherche de la vertu dans l'usage correct des représentations."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "La sagesse stoïcienne selon Épictète" },
		{ key: 1, parent: 0, text: "1. La métaphore du festin (Modération)" },
		{ key: 2, parent: 1, text: "[2-3] Le plat arrive : prendre modérément" },
		{ key: 3, parent: 1, text: "[4-5] Le plat passe : ne pas le rechercher" },
		{ key: 4, parent: 1, text: "[6-7] Le plat tarde : patienter sans désir anticipé" },
		{ key: 5, parent: 1, text: "[8] Application universelle : enfants, femme, charges, richesse" },
		{ key: 6, parent: 0, text: "2. La métaphore de l'acteur (Acceptation)" },
		{ key: 7, parent: 6, text: "[9-11] Jouer le rôle donné (mendiant, magistrat, etc.)" },
		{ key: 8, parent: 6, text: "[12] Dichotomie : bien jouer dépend de nous, choisir le rôle non" },
		{ key: 9, parent: 6, text: "[13] Danger de prendre un rôle au-dessus de ses forces" },
		{ key: 10, parent: 0, text: "3. Discipline et ascétisme" },
		{ key: 11, parent: 10, text: "[14-15] Décliner les repas vulgaires, viser la stricte utilité" },
		{ key: 12, parent: 10, text: "[16] Effacer l'ostentation et le luxe" },
		{ key: 13, parent: 0, text: "4. La métaphore des deux anses (Jugement)" },
		{ key: 14, parent: 13, text: "[17] Toute chose a une anse portable et une autre non" },
		{ key: 15, parent: 13, text: "[18-19] Exemple du frère : saisir le lien du sang, pas le tort" },
		{ key: 16, parent: 0, text: "Finalité" },
		{ key: 17, parent: 16, text: "[8] Être digne d'être le convive des Dieux" }
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
			origine: "Épictète, Manuel (Enchiridion)",
			theme: "La liberté",
			these: "La véritable liberté réside dans la distinction rigoureuse entre ce qui dépend de nous (nos jugements, nos désirs) et ce qui n'en dépend pas (les biens extérieurs, les rôles assignés), nous permettant d'accepter l'ordre du monde avec sérénité et de choisir la bonne manière de saisir chaque événement.",
			interet: "Ce texte condense l'essence de l'éthique stoïcienne à travers trois métaphores puissantes (le festin, le théâtre, les deux anses). Il offre une méthode pratique pour préserver sa liberté intérieure face aux aléas de l'existence, en transformant notre rapport aux événements par un changement de jugement plutôt que par une modification illusoire du monde extérieur.",
			problematique: "En quoi la distinction entre ce qui dépend de nous et ce qui n'en dépend pas, illustrée par les métaphores du festin et du théâtre, constitue-t-elle la condition nécessaire pour atteindre la véritable liberté intérieure et la sagesse ?"
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
			"text": "DÉBUT\nComment se comporter\nface aux biens et aux\névénements de la vie ?",
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
			"text": "MÉTAPHORE DU FESTIN\n(Gestion du désir)",
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
			"text": "[2-7] Prendre modérément\nsi ça arrive, ne pas\nrechercher si ça passe,\npatienter si ça tarde.",
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
			"text": "MÉTAPHORE DE L'ACTEUR\n(Gestion du destin)",
			"loc": "760.53 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "5",
			"text": "[9-13] Jouer convenablement\nle rôle donné.\nLe choix du rôle ne\ndépend pas de nous.\nÉviter l'ambition\ndémesurée.",
			"loc": "760.53 259.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "6",
			"text": "DISCIPLINE PRATIQUE",
			"loc": "1034.36 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "7",
			"text": "[14-16] Décliner les\ncompromis sociaux.\nViser la stricte utilité\net effacer le luxe.",
			"loc": "1034.36 266.25",
			"category": "rectangle",
			"color": "#a3bffa",
			"borderColor": "#3b5bdb",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "8",
			"text": "MÉTAPHORE DES DEUX ANSES\n(Maîtrise du jugement)",
			"loc": "1319.74 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "9",
			"text": "[17-19] Saisir les\nchoses par l'angle\nsupportable (ex: le lien\nfraternel) et non par\nl'angle du conflit.",
			"loc": "1319.74 266.25",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "10",
			"text": "FIN\n[8] Résultat : être digne\nd'être le convive des Dieux\n(sagesse et liberté intérieure).",
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
		},
		{
			"from": "8",
			"to": "9",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "8",
			"to": "10",
			"fromSide": "right",
			"toSide": "left"
		}
	]
};