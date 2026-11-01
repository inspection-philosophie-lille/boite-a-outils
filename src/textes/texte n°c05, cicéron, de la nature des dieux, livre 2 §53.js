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
const sousTitre = "Tester ses connaissances sur un texte de Cicéron (De la nature des dieux)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Mais quelle n’est pas la bienveillance de la nature qui, pour nous alimenter, produit en quantité des fruits si variés et si délicieux, et cela non pas au même moment de l’année, mais de façon que nous ayons constamment un plaisir nouveau à goûter et une récolte nouvelle à faire ! [2] Avec quelle opportunité, quel profit non seulement pour les hommes mais pour les bêtes et pour la végétation soufflent les vents étésiens qui empêchent la chaleur de devenir excessive et rendent aussi plus sûres et plus rapides les traversées maritimes […]. [3] Ainsi, quel que soit le point de vue où l’on se place, on arrive à cette conclusion qu’une intelligence et un calcul divins ont présidé à l’arrangement merveilleux de ce monde, pour la conservation et le salut de tous ses habitants. [4] On demandera ici pour quels êtres tant de dispositions s’étendant à tant d’objets ont pu être prises. [5] Est-ce en faveur des arbres et des végétaux en général qui, bien que dépourvus de sentiment, possèdent une sorte d’activité interne qui les fait se maintenir en vie ? [6] Mais cela est absurde. [7] Est-ce en faveur des bêtes ? [8] Il n’est pas plus probable que les dieux aient pris tant de peine pour des êtres muets et sans connaissance. [9] Pour qui donc le monde a-t-il été fait, qui nous le dira ? [10] Pour les êtres animés qui ont la raison en partage. [11] Ce sont les dieux et les hommes au-dessus desquels il n’y a rien, car la raison est de toutes choses celle qui vaut le plus. [12] Il est donc à croire que le monde, avec tout ce qu’il contient a été fait pour les dieux et pour les hommes. »",
	source: "Cicéron, <em>De la nature des dieux</em>, Livre II, 53"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Sénèque", "Cicéron", "Lucrèce"],
		correct: 2,
		explanation: "Le texte est extrait du *De la nature des dieux* (De Natura Deorum), une œuvre majeure de l'homme d'État et philosophe romain Cicéron."
	},
	{
		question: "Question n°2 : De quel livre de cette œuvre ce passage est-il tiré ?",
		answers: ["Livre I", "Livre II", "Livre III"],
		correct: 2,
		explanation: "La source indique explicitement le Livre II, qui est consacré à l'exposition de la théologie stoïcienne et de la providence."
	},
	{
		question: "Question n°3 : Quelle est la thèse centrale défendue dans ce passage ?",
		answers: ["Le monde est le fruit du hasard", "Le monde est organisé par une intelligence divine pour les dieux et les hommes", "La nature est indifférente au sort des vivants"],
		correct: 2,
		explanation: "Cicéron conclut que « le monde, avec tout ce qu’il contient a été fait pour les dieux et pour les hommes » sous l'effet d'un « calcul divin »."
	},
	{
		question: "Question n°4 : Comment la nature est-elle qualifiée dès la première phrase ?",
		answers: ["Cruelle et indifférente", "Bienveillante", "Chaotique"],
		correct: 2,
		explanation: "Le texte s'ouvre sur une exclamation admirative : « Mais quelle n’est pas la bienveillance de la nature »."
	},
	{
		question: "Question n°5 : Comment se manifeste cette bienveillance selon le §1 ?",
		answers: ["Par la production de fruits variés et délicieux en quantité", "Par l'absence de maladies", "Par la douceur du climat uniquement"],
		correct: 1,
		explanation: "Cicéron cite la production abondante et variée de fruits comme preuve de la générosité naturelle."
	},
	{
		question: "Question n°6 : Quelle est la particularité temporelle de cette production de fruits ?",
		answers: ["Tout pousse en même temps", "Cela se produit à différents moments de l'année pour un plaisir constant", "Cela dépend uniquement de la volonté humaine"],
		correct: 2,
		explanation: "Le texte précise : « non pas au même moment de l’année, mais de façon que nous ayons constamment un plaisir nouveau »."
	},
	{
		question: "Question n°7 : Quel phénomène naturel est cité au §2 comme preuve d'« opportunité » ?",
		answers: ["Les marées", "Les vents étésiens", "Les éruptions volcaniques"],
		correct: 2,
		explanation: "Cicéron mentionne les « vents étésiens » (vents réguliers de l'été) comme un bienfait ordonné."
	},
	{
		question: "Question n°8 : Quels sont les bénéficiaires de ces vents étésiens ?",
		answers: ["Les hommes uniquement", "Les hommes, les bêtes et la végétation", "Les dieux uniquement"],
		correct: 2,
		explanation: "Le texte dit : « quel profit non seulement pour les hommes mais pour les bêtes et pour la végétation »."
	},
	{
		question: "Question n°9 : Quelle est l'action concrète de ces vents selon le texte ?",
		answers: ["Ils provoquent des tempêtes", "Ils empêchent la chaleur de devenir excessive et facilitent la navigation", "Ils arrosent les champs"],
		correct: 2,
		explanation: "Ils « empêchent la chaleur de devenir excessive et rendent aussi plus sûres et plus rapides les traversées maritimes »."
	},
	{
		question: "Question n°10 : Quelle conclusion générale tire l'auteur au §3 ?",
		answers: ["La nature est aveugle", "Une intelligence et un calcul divins ont présidé à l'arrangement du monde", "L'homme doit dompter la nature"],
		correct: 2,
		explanation: "C'est la formulation classique de l'argument téléologique : « une intelligence et un calcul divins ont présidé à l’arrangement merveilleux de ce monde »."
	},
	{
		question: "Question n°11 : Quel est le but de cet arrangement divin ?",
		answers: ["La destruction des impies", "La conservation et le salut de tous ses habitants", "Le divertissement des dieux"],
		correct: 2,
		explanation: "Le texte vise « la conservation et le salut de tous ses habitants »."
	},
	{
		question: "Question n°12 : Quel type d'argument philosophique est mis en œuvre ici ?",
		answers: ["L'argument ontologique", "L'argument téléologique (par les fins)", "L'argument d'autorité"],
		correct: 2,
		explanation: "L'argument téléologique déduit l'existence d'une cause intelligente (Dieu) de l'ordre et de l'utilité observés dans la nature."
	},
	{
		question: "Question n°13 : Quelle question l'auteur anticipe-t-il au §4 ?",
		answers: ["Comment les dieux ont-ils créé le monde ?", "Pour quels êtres ces dispositions ont-elles été prises ?", "Pourquoi le mal existe-t-il ?"],
		correct: 2,
		explanation: "Il introduit une objection dialectique : « On demandera ici pour quels êtres tant de dispositions [...] ont pu être prises »."
	},
	{
		question: "Question n°14 : Quelle est la première hypothèse de bénéficiaire envisagée ?",
		answers: ["Les arbres et les végétaux", "Les minéraux", "Les astres"],
		correct: 1,
		explanation: "Le texte propose d'abord : « Est-ce en faveur des arbres et des végétaux en général »."
	},
	{
		question: "Question n°15 : Comment les végétaux sont-ils décrits dans cette hypothèse ?",
		answers: ["Doués de raison", "Dépourvus de sentiment, mais possédant une activité interne", "Capables de se déplacer"],
		correct: 2,
		explanation: "Ils sont « dépourvus de sentiment » mais ont une « sorte d’activité interne qui les fait se maintenir en vie »."
	},
	{
		question: "Question n°16 : Quel jugement Cicéron porte-t-il sur cette première hypothèse ?",
		answers: ["Elle est probable", "Elle est absurde", "Elle est partiellement vraie"],
		correct: 2,
		explanation: "La réponse est catégorique et lapidaire : « Mais cela est absurde »."
	},
	{
		question: "Question n°17 : Quelle est la deuxième hypothèse de bénéficiaire ?",
		answers: ["Les éléments (feu, eau)", "Les bêtes", "Les démons"],
		correct: 2,
		explanation: "L'auteur enchaîne avec une nouvelle question rhétorique : « Est-ce en faveur des bêtes ? »"
	},
	{
		question: "Question n°18 : Pourquoi cette deuxième hypothèse est-elle rejetée ?",
		answers: ["Parce que les bêtes sont trop nombreuses", "Parce que les dieux n'auraient pas pris tant de peine pour des êtres muets et sans connaissance", "Parce que les bêtes sont méchantes"],
		correct: 2,
		explanation: "Le texte juge « pas plus probable » que les dieux agissent pour des « êtres muets et sans connaissance »."
	},
	{
		question: "Question n°19 : Quelle figure de style domine les §§4 à 9 ?",
		answers: ["La métaphore", "La question rhétorique (ou interrogation oratoire)", "L'hyperbole"],
		correct: 2,
		explanation: "Cicéron utilise une série de questions (« Est-ce en faveur... ? », « Pour qui donc... ? ») pour guider le raisonnement du lecteur."
	},
	{
		question: "Question n°20 : Quelle est la réponse finale à la question « Pour qui donc le monde a-t-il été fait ? »",
		answers: ["Pour la nature elle-même", "Pour les êtres animés qui ont la raison en partage", "Pour le hasard"],
		correct: 2,
		explanation: "La réponse tombe au §10 : « Pour les êtres animés qui ont la raison en partage »."
	},
	{
		question: "Question n°21 : Qui sont concrètement ces êtres rationnels selon le §11 ?",
		answers: ["Les hommes et les anges", "Les dieux et les hommes", "Les philosophes uniquement"],
		correct: 2,
		explanation: "Cicéron précise : « Ce sont les dieux et les hommes »."
	},
	{
		question: "Question n°22 : Quelle est la justification de ce choix ?",
		answers: ["Ils sont les plus nombreux", "La raison est de toutes choses celle qui vaut le plus", "Ils sont les plus forts physiquement"],
		correct: 2,
		explanation: "Le critère de valeur est intellectuel et moral : « car la raison est de toutes choses celle qui vaut le plus »."
	},
	{
		question: "Question n°23 : Que signifie l'expression « au-dessus desquels il n’y a rien » ?",
		answers: ["Qu'ils vivent dans le ciel", "Que la raison place les dieux et les hommes au sommet de l'échelle des valeurs", "Qu'ils n'ont pas de devoirs"],
		correct: 2,
		explanation: "Cela marque le caractère suprême et inégalé de la raison dans la hiérarchie des biens et des êtres."
	},
	{
		question: "Question n°24 : Quelle est la conclusion finale du §12 ?",
		answers: ["Le monde est une illusion", "Le monde a été fait pour les dieux et pour les hommes", "L'homme doit se méfier de la nature"],
		correct: 2,
		explanation: "C'est la synthèse déductive : « Il est donc à croire que le monde [...] a été fait pour les dieux et pour les hommes »."
	},
	{
		question: "Question n°25 : Que signifie le terme « étésiens » ?",
		answers: ["Relatifs à l'été, réguliers et annuels", "Relatifs aux étoiles", "Violents et imprévisibles"],
		correct: 1,
		explanation: "Les vents étésiens (ou vents annuels) sont des vents qui soufflent régulièrement chaque année à la même saison, preuve d'ordre."
	},
	{
		question: "Question n°26 : Que désigne le « calcul divin » ?",
		answers: ["Une comptabilité matérielle", "La rationalité, l'intentionnalité et la providence des dieux", "Un destin aveugle"],
		correct: 2,
		explanation: "Le « calcul » (ratio ou consilium en latin) renvoie à la raison ordonnatrice qui organise le monde avec un but."
	},
	{
		question: "Question n°27 : Quelle conception du monde (cosmos) ce texte défend-il ?",
		answers: ["Un monde chaotique et absurde", "Un monde ordonné, harmonieux et finalisé", "Un monde purement mécanique"],
		correct: 2,
		explanation: "L'« arrangement merveilleux » et le « salut » des habitants supposent un cosmos (ordre) et non un chaos."
	},
	{
		question: "Question n°28 : Quel courant philosophique est principalement exposé ici ?",
		answers: ["L'épicurisme", "Le stoïcisme", "Le scepticisme"],
		correct: 2,
		explanation: "Dans le *De la nature des dieux*, le Livre II est le discours de Balbus, qui expose la doctrine stoïcienne de la providence."
	},
	{
		question: "Question n°29 : En quoi ce texte s'oppose-t-il à l'épicurisme ?",
		answers: ["Il nie l'existence des dieux", "Il affirme que les dieux s'occupent du monde et des hommes, contrairement aux dieux épicuriens", "Il prône l'athéisme"],
		correct: 2,
		explanation: "Pour Épicure, les dieux sont indifférents au monde. Cicéron (via le stoïcisme) affirme qu'ils ont pris « tant de peine » pour l'organiser."
	},
	{
		question: "Question n°30 : Que révèle l'expression « quel que soit le point de vue où l’on se place » ?",
		answers: ["Une incertitude de l'auteur", "L'universalité et la solidité de la preuve téléologique", "Un relativisme total"],
		correct: 2,
		explanation: "Cela signifie que l'observation de n'importe quel aspect de la nature conduit à la même conclusion d'une intelligence ordonnatrice."
	},
	{
		question: "Question n°31 : Que signifie « activité interne » à propos des végétaux ?",
		answers: ["Une conscience réflexive", "Un principe vital ou une force de croissance automatique", "Une capacité de langage"],
		correct: 2,
		explanation: "C'est la *vis interna*, la force biologique qui permet aux plantes de vivre et de croître, mais sans sensibilité ni raison."
	},
	{
		question: "Question n°32 : Pourquoi le plaisir est-il mentionné comme un bienfait ?",
		answers: ["Pour encourager la débauche", "Parce que la jouissance modérée des biens naturels est conforme à l'ordre providentiel", "Parce que les dieux aiment nous voir heureux"],
		correct: 2,
		explanation: "Le « plaisir nouveau à goûter » est un signe de la bienveillance de la nature, qui ne se contente pas de la survie brute mais offre l'agrément."
	},
	{
		question: "Question n°33 : Quelle est la fonction de la navigation dans l'argumentation ?",
		answers: ["C'est un exemple de l'utilité de l'ordre naturel pour l'activité humaine", "C'est une métaphore de la vie politique", "C'est une distraction"],
		correct: 1,
		explanation: "La sûreté des « traversées maritimes » grâce aux vents réguliers est un exemple classique de l'adaptation du monde aux besoins de l'homme."
	},
	{
		question: "Question n°34 : Que signifie le mot « salut » dans ce contexte ?",
		answers: ["Le salut religieux de l'âme après la mort", "La préservation, la sauvegarde et le maintien en bon état de l'ordre naturel", "La guérison des maladies"],
		correct: 2,
		explanation: "Le « salut » (salus en latin) désigne ici la conservation et la prospérité de l'ensemble des êtres vivants dans le cosmos."
	},
	{
		question: "Question n°35 : Quelle hiérarchie des êtres le texte établit-il ?",
		answers: ["Bêtes > Végétaux > Hommes", "Végétaux (vie) < Bêtes (vie + mouvement) < Hommes/Dieux (vie + raison)", "Tous les êtres sont égaux"],
		correct: 2,
		explanation: "Le texte élimine successivement les végétaux (pas de sentiment) et les bêtes (pas de connaissance) pour couronner les êtres rationnels."
	},
	{
		question: "Question n°36 : En quoi la raison crée-t-elle une communauté entre dieux et hommes ?",
		answers: ["Elle n'en crée aucune", "Elle est le trait commun qui les distingue radicalement des autres animaux", "Elle permet aux hommes de devenir des dieux"],
		correct: 2,
		explanation: "La raison est le lien ontologique qui place les hommes et les dieux dans une catégorie à part, supérieure à la simple vie biologique."
	},
	{
		question: "Question n°37 : Que marque l'expression « On demandera ici » ?",
		answers: ["Une perte de fil conducteur", "Un procédé dialectique d'anticipation d'objection", "Une citation d'un autre auteur"],
		correct: 2,
		explanation: "C'est une formule rhétorique qui introduit une fausse objection pour mieux la réfuter et renforcer la démonstration."
	},
	{
		question: "Question n°38 : Quelle est la portée anthropologique de ce texte ?",
		answers: ["L'homme est un loup pour l'homme", "L'homme est défini par sa participation à la raison divine et est la fin de la nature", "L'homme est un accident biologique"],
		correct: 2,
		explanation: "Le texte fonde la dignité humaine sur la raison et fait de l'homme (avec les dieux) la finalité de l'organisation cosmique."
	},
	{
		question: "Question n°39 : Quelle est la portée théologique de ce texte ?",
		answers: ["Les dieux sont méchants", "Les dieux sont rationnels, bienveillants et providentiels", "Les dieux n'existent pas"],
		correct: 2,
		explanation: "L'intelligence et le calcul divins sont orientés vers le « salut » des habitants, ce qui définit une providence bienveillante."
	},
	{
		question: "Question n°40 : Que signifie « muets et sans connaissance » ?",
		answers: ["Que les bêtes ne parlent pas français", "L'absence de logos (raison et langage articulé) et de compréhension rationnelle", "Que les bêtes sont sourdes"],
		correct: 2,
		explanation: "C'est la définition négative de l'animalité par rapport à l'humanité : l'absence de la faculté rationnelle qui permet de comprendre l'ordre du monde."
	},
	{
		question: "Question n°41 : Pourquoi l'hypothèse des végétaux est-elle qualifiée d'« absurde » ?",
		answers: ["Parce qu'ils sont utiles", "Parce qu'il est illogique que l'univers entier soit organisé pour des êtres sans aucune sensibilité", "Parce qu'ils meurent en hiver"],
		correct: 2,
		explanation: "Le décalage est trop grand entre la complexité de l'« arrangement merveilleux » du monde et le statut purement biologique des plantes."
	},
	{
		question: "Question n°42 : Quel est le mouvement logique global du texte ?",
		answers: ["Déductif uniquement", "Inductif (des bienfaits observés à la cause divine) puis éliminatoire (pour trouver le bénéficiaire)", "Circulaire"],
		correct: 2,
		explanation: "On part des faits (fruits, vents) pour remonter à la cause (intelligence divine), puis on cherche la fin (bénéficiaire) par élimination."
	},
	{
		question: "Question n°43 : En quoi ce texte est-il un exemple d'humanisme antique ?",
		answers: ["Il place l'homme et sa raison au centre de la finalité cosmique", "Il rejette toute forme de religion", "Il prône l'égalité sociale"],
		correct: 1,
		explanation: "En faisant de l'homme (doté de raison) l'un des deux destinataires du monde avec les dieux, il exalte la dignité de la condition humaine."
	},
	{
		question: "Question n°44 : Que suggère l'idée que « la raison [...] vaut le plus » ?",
		answers: ["Une échelle de valeurs objective où l'intellect prime sur la matière", "Que les riches sont plus raisonnables", "Que la force physique est méprisée"],
		correct: 1,
		explanation: "C'est un axiome de la philosophie classique : l'être le plus élevé est celui qui possède la faculté la plus élevée, la raison."
	},
	{
		question: "Question n°45 : Quel est le rôle de la nature dans ce passage ?",
		answers: ["Une marâtre", "L'instrument bienveillant de la providence divine", "Un simple décor"],
		correct: 2,
		explanation: "La nature n'est pas une entité aveugle, mais le vecteur de la « bienveillance » et du « calcul » des dieux pour les vivants."
	},
	{
		question: "Question n°46 : Comment qualifier la relation entre les dieux et les hommes dans ce texte ?",
		answers: ["De conflit permanent", "De communauté rationnelle et de bienveillance", "D'indifférence mutuelle"],
		correct: 2,
		explanation: "Ils sont mis sur le même plan en tant que bénéficiaires, unis par le partage de la raison, dans un monde conçu pour eux."
	},
	{
		question: "Question n°47 : Que signifie « arrangements merveilleux » ?",
		answers: ["Des coïncidences inexplicables", "L'ordre cosmique (kosmos) qui suscite l'admiration par son harmonie", "Des miracles surnaturels"],
		correct: 2,
		explanation: "Le « merveilleux » (admirabilis) renvoie à l'admiration rationnelle devant l'harmonie et la complexité fonctionnelle de l'univers."
	},
	{
		question: "Question n°48 : Pourquoi la mention des « bêtes » est-elle importante dans l'argumentation ?",
		answers: ["Pour montrer qu'elles sont les vraies maîtresses du monde", "Pour servir d'étape intermédiaire dans la gradation vers la raison", "Pour les protéger"],
		correct: 2,
		explanation: "Les bêtes permettent de franchir un degré dans l'échelle des êtres (elles ont le sentiment, contrairement aux plantes) mais échouent au test final de la raison."
	},
	{
		question: "Question n°49 : Quelle est la visée persuasive de ce texte ?",
		answers: ["Décourager l'étude de la nature", "Convaincre le lecteur de la rationalité et de la bonté de l'ordre du monde", "Prouver que l'agriculture est la seule activité digne"],
		correct: 2,
		explanation: "Cicéron veut amener le lecteur à adhérer à la vision stoïcienne d'un univers sensé, bon et accueillant pour l'homme rationnel."
	},
	{
		question: "Question n°50 : En quoi ce texte résonne-t-il avec la maxime « Connais-toi toi-même » ?",
		answers: ["Il n'y a aucun lien", "Il invite l'homme à reconnaître sa propre nature rationnelle comme ce qui le relie au divin et donne son sens au monde", "Il dit qu'il faut se méfier de soi"],
		correct: 2,
		explanation: "En identifiant la raison comme ce qui « vaut le plus » et nous lie aux dieux, le texte invite l'homme à prendre conscience de sa propre excellence et de sa place dans le cosmos."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "Providence et finalité du monde (Cicéron)" },
		{ key: 1, parent: 0, text: "Les bienfaits de la nature" },
		{ key: 2, parent: 1, text: "[1] Fruits variés et délicieux (plaisir constant)" },
		{ key: 3, parent: 1, text: "[2] Vents étésiens (modération, navigation)" },
		{ key: 4, parent: 0, text: "La cause de cet ordre" },
		{ key: 5, parent: 4, text: "[3] Intelligence et calcul divins" },
		{ key: 6, parent: 4, text: "[3] But : conservation et salut de tous" },
		{ key: 7, parent: 0, text: "Recherche du bénéficiaire (par élimination)" },
		{ key: 8, parent: 7, text: "[5-6] Les végétaux ? NON (absurde, pas de sentiment)" },
		{ key: 9, parent: 7, text: "[7-8] Les bêtes ? NON (improbable, muettes, sans connaissance)" },
		{ key: 10, parent: 0, text: "La conclusion finale" },
		{ key: 11, parent: 10, text: "[10] Les êtres ayant la raison en partage" },
		{ key: 12, parent: 10, text: "[11] Les dieux et les hommes (la raison vaut le plus)" },
		{ key: 13, parent: 10, text: "[12] Le monde a été fait pour les dieux et les hommes" }
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
			origine: "Cicéron, De la nature des dieux, II, 53",
			theme: "La religion",
			these: "L'ordre harmonieux et les bienfaits du monde naturel témoignent d'une intelligence et d'une providence divines, ayant conçu l'univers spécifiquement pour les êtres doués de raison, c'est-à-dire les dieux et les hommes.",
			interet: "Ce texte illustre parfaitement l'argument téléologique : l'observation rationnelle de la nature (ses ressources, son ordre) conduit à la conclusion nécessaire d'un dessein intelligent et bienveillant. Il fonde ainsi la religion sur la raison, en établissant une communauté de raison entre les hommes et les dieux.",
			problematique: "En quoi l'observation de l'ordre et de l'utilité des phénomènes naturels permet-elle de démontrer rationnellement l'existence d'une providence divine et la place privilégiée de l'homme dans le cosmos ?"
		}
	}
];}
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
			"text": "DÉBUT\nObservation de la nature\n(fruits, vents, ordre)",
			"loc": "233.34 82.84",
			"category": "ellipse",
			"color": "#74b9ff",
			"borderColor": "#286DB3",
			"width": 220,
			"height": 100,
			"revealed": true
		},
		{
			"key": "2",
			"text": "Quelle est la cause\nde cet arrangement\nmerveilleux ?",
			"loc": "496.16 82.84",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "3",
			"text": "[3] Intelligence et calcul\ndivins (providence)\npour la conservation\net le salut de tous.",
			"loc": "496.16 259.98",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "4",
			"text": "Pour qui ces\ndispositions ont-elles\nété prises ?",
			"loc": "894.62 82.84",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "5",
			"text": "[5-6] Les végétaux ?\nNON : absurde\n(dépourvus de sentiment).",
			"loc": "760.53 259.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "6",
			"text": "[7-8] Les bêtes ?\nNON : improbable\n(êtres muets et sans\nconnaissance).",
			"loc": "760.53 389.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "7",
			"text": "[10-11] Les êtres\nrationnels (dieux\net hommes), car la\nraison vaut le plus.",
			"loc": "1023.05 264.83",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "8",
			"text": "FIN\n[12] DONC le monde\na été fait pour les\ndieux et pour les\nhommes.",
			"loc": "1313.28 264.83",
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
			"from": "5",
			"to": "6",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "4",
			"to": "7",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "7",
			"to": "8",
			"fromSide": "right",
			"toSide": "left"
		}
	]
};
