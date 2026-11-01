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
const sousTitre = "Tester ses connaissances sur un texte de Kant (La philosophie de l'histoire)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Le dernier progrès que fit la raison, achevant d'élever l'homme tout à fait au-dessus de la société animale, ce fût qu'il comprit (obscurément encore) qu'il était proprement la fin de la Nature, et que rien de ce qui vit sur terre ne pouvait lui disputer ce droit. [2] La première fois qu'il dit au mouton : \"La peau que tu portes, ce n'est pas pour toi, mais pour moi que la Nature te l'a donnée\", qu'il lui retira et s'en revêtit (III :21), il découvrit un privilège, qu'il avait, en raison de sa nature, sur tous les animaux. [3] Et il cessa de les considérer comme ses compagnons dans la création, pour les regarder comme des moyens et des instruments mis à la disposition de sa volonté en vue d'atteindre les desseins qu'il se propose. [4] Cette représentation implique (obscurément sans doute) cette contrepartie, à savoir qu'il n'avait pas le droit de traiter un autre homme de cette façon, mais qu'il devait le considérer comme un associé participant sur un pied d'égalité avec lui aux dons de la Nature. »",
	source: "Emmanuel Kant, <em>La philosophie de l'histoire</em> (Idée d'une histoire universelle au point de vue cosmopolitique), p.117"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Georg Wilhelm Friedrich Hegel", "Emmanuel Kant", "Jean-Jacques Rousseau"],
		correct: 2,
		explanation: "Le texte est extrait des réflexions d'Emmanuel Kant sur l'histoire, notamment de l'« Idée d'une histoire universelle au point de vue cosmopolitique »."
	},
	{
		question: "Question n°2 : Quelle faculté permet à l'homme de s'élever au-dessus de la société animale selon le §1 ?",
		answers: ["L'instinct", "La raison", "L'imagination"],
		correct: 2,
		explanation: "Le texte affirme que c'est « le dernier progrès que fit la raison » qui achève d'élever l'homme au-dessus de l'animal."
	},
	{
		question: "Question n°3 : Qu'a compris l'homme, même « obscurément encore », selon le §1 ?",
		answers: ["Qu'il était mortel", "Qu'il était proprement la fin de la Nature", "Qu'il était un animal comme les autres"],
		correct: 2,
		explanation: "Il a compris « qu'il était proprement la fin de la Nature »."
	},
	{
		question: "Question n°4 : Quel être vivant peut disputer ce droit à l'homme, selon le texte ?",
		answers: ["Les animaux les plus forts", "Les autres hommes", "Rien de ce qui vit sur terre"],
		correct: 3,
		explanation: "Le texte est absolu : « rien de ce qui vit sur terre ne pouvait lui disputer ce droit »."
	},
	{
		question: "Question n°5 : Quel animal est pris pour exemple dans le §2 ?",
		answers: ["Le bœuf", "Le mouton", "Le cheval"],
		correct: 2,
		explanation: "Kant écrit : « La première fois qu'il dit au mouton... »."
	},
	{
		question: "Question n°6 : Que dit l'homme au mouton dans cet exemple ?",
		answers: ["Que la peau est pour lui, et non pour le mouton", "Que le mouton est son ami", "Que la Nature est cruelle"],
		correct: 1,
		explanation: "« La peau que tu portes, ce n'est pas pour toi, mais pour moi que la Nature te l'a donnée »."
	},
	{
		question: "Question n°7 : Que découvre l'homme en agissant ainsi (§2) ?",
		answers: ["Un péché originel", "Un privilège qu'il avait sur tous les animaux", "Une faiblesse biologique"],
		correct: 2,
		explanation: "Il découvre « un privilège, qu'il avait, en raison de sa nature, sur tous les animaux »."
	},
	{
		question: "Question n°8 : Comment l'homme considérait-il les animaux avant ce progrès de la raison (§3) ?",
		answers: ["Comme des ennemis", "Comme ses compagnons dans la création", "Comme des dieux"],
		correct: 2,
		explanation: "Le texte indique qu'il « cessa de les considérer comme ses compagnons dans la création »."
	},
	{
		question: "Question n°9 : Comment l'homme regarde-t-il les animaux après ce progrès (§3) ?",
		answers: ["Comme des moyens et des instruments", "Comme des égaux", "Comme des maîtres"],
		correct: 1,
		explanation: "Il les regarde « comme des moyens et des instruments mis à la disposition de sa volonté »."
	},
	{
		question: "Question n°10 : Dans quel but l'homme utilise-t-il les animaux comme instruments (§3) ?",
		answers: ["Pour les détruire sans raison", "En vue d'atteindre les desseins qu'il se propose", "Pour les étudier scientifiquement uniquement"],
		correct: 2,
		explanation: "Ils sont mis à disposition « en vue d'atteindre les desseins qu'il se propose »."
	},
	{
		question: "Question n°11 : Que signifie l'expression « fin de la Nature » (§1) dans ce contexte kantien ?",
		answers: ["La disparition de la Nature", "Le but ultime ou la finalité pour laquelle la Nature existe", "La limite géographique de la Nature"],
		correct: 2,
		explanation: "Dans la philosophie kantienne, être la « fin » (Zweck) signifie être le but téléologique ultime de l'organisation naturelle."
	},
	{
		question: "Question n°12 : Quelle est la « contrepartie » impliquée par cette représentation (§4) ?",
		answers: ["L'homme doit protéger les animaux à tout prix", "L'homme n'a pas le droit de traiter un autre homme de cette façon", "L'homme doit rendre la peau au mouton"],
		correct: 2,
		explanation: "La contrepartie est qu'« il n'avait pas le droit de traiter un autre homme de cette façon »."
	},
	{
		question: "Question n°13 : Comment l'homme doit-il considérer un autre homme (§4) ?",
		answers: ["Comme un rival", "Comme un moyen pour arriver à ses fins", "Comme un associé participant sur un pied d'égalité"],
		correct: 3,
		explanation: "Il doit le considérer « comme un associé participant sur un pied d'égalité avec lui aux dons de la Nature »."
	},
	{
		question: "Question n°14 : Le terme « obscurément » apparaît deux fois dans le texte. Que signifie-t-il ici ?",
		answers: ["Dans le noir", "De manière intuitive et non encore pleinement conceptuelle ou rationnelle", "De manière fausse"],
		correct: 2,
		explanation: "Kant indique que cette prise de conscience est d'abord intuitive ou pré-réflexive (« obscurément encore », « obscurément sans doute ») avant de devenir un principe moral clair."
	},
	{
		question: "Question n°15 : Quelle notion morale fondamentale de Kant est préfigurée dans le §4 ?",
		answers: ["L'impératif catégorique (traiter l'humanité comme une fin, jamais simplement comme un moyen)", "L'utilitarisme", "Le relativisme moral"],
		correct: 1,
		explanation: "L'idée de ne pas traiter un autre homme comme un instrument, mais comme une fin en soi, est le cœur de la seconde formulation de l'impératif catégorique."
	},
	{
		question: "Question n°16 : Que marque le passage de la considération des animaux comme « compagnons » à « instruments » ?",
		answers: ["Une régression morale", "L'avènement de la culture et de la rationalité humaine", "Une erreur de jugement"],
		correct: 2,
		explanation: "Pour Kant, c'est un « progrès de la raison » qui marque la sortie de l'état de pure animalité et l'entrée dans la culture."
	},
	{
		question: "Question n°17 : Pourquoi l'homme a-t-il ce privilège sur les animaux, selon le texte ?",
		answers: ["Parce qu'il est plus gros", "En raison de sa nature (rationnelle)", "Parce qu'il est plus nombreux"],
		correct: 2,
		explanation: "Le texte précise : « un privilège, qu'il avait, en raison de sa nature, sur tous les animaux »."
	},
	{
		question: "Question n°18 : Que symbolise l'acte de retirer la peau du mouton ?",
		answers: ["La cruauté gratuite", "La prise de conscience de la finalité de la Nature au profit de l'homme", "Le début de l'agriculture"],
		correct: 2,
		explanation: "C'est l'acte inaugural par lequel l'homme s'approprie les ressources naturelles en les jugeant destinées à son usage."
	},
	{
		question: "Question n°19 : Quelle est la différence de traitement entre l'animal et l'homme dans ce texte ?",
		answers: ["Aucune, tous sont égaux", "L'animal est un moyen, l'homme est une fin et un associé", "L'homme est un moyen, l'animal est une fin"],
		correct: 2,
		explanation: "Le texte établit une rupture éthique : l'instrumentalisation est permise pour l'animal, mais interdite pour l'homme."
	},
	{
		question: "Question n°20 : Que signifie « desseins qu'il se propose » (§3) ?",
		answers: ["Les instincts biologiques", "Les projets rationnels et les objectifs conscients de la volonté humaine", "Les ordres de la Nature"],
		correct: 2,
		explanation: "Cela renvoie à l'autonomie de la volonté humaine, capable de se fixer des buts (desseins) rationnels."
	},
	{
		question: "Question n°21 : L'expression « dons de la Nature » (§4) suggère que :",
		answers: ["La Nature est une personne", "Les ressources naturelles sont un patrimoine commun à l'humanité", "La Nature est avare"],
		correct: 2,
		explanation: "Les hommes sont des « associés » qui participent également à ces dons, fondant ainsi une forme de droit naturel ou de communauté humaine."
	},
	{
		question: "Question n°22 : Ce texte appartient à quel courant de pensée ?",
		answers: ["L'empirisme", "L'idéalisme allemand et les Lumières", "Le romantisme"],
		correct: 2,
		explanation: "Kant est la figure centrale des Lumières allemandes et de l'idéalisme, cherchant à fonder la morale sur la raison."
	},
	{
		question: "Question n°23 : Que signifie le chiffre « (III :21) » dans le texte ?",
		answers: ["Une date", "Une référence biblique (Genèse 3:21) où Dieu fait des tuniques de peau pour Adam et Ève", "Un numéro de page"],
		correct: 2,
		explanation: "C'est une allusion à la Genèse, montrant que Kant intègre le récit biblique dans une interprétation philosophique de l'éveil de la raison."
	},
	{
		question: "Question n°24 : En quoi ce texte est-il une réflexion sur l'anthropogenèse ?",
		answers: ["Il décrit la biologie humaine", "Il raconte le passage symbolique de l'état animal à l'état humain par la raison", "Il parle de l'évolution darwinienne"],
		correct: 2,
		explanation: "Kant décrit ici, de manière quasi-mythique, le moment où la raison émerge et transforme le rapport de l'être au monde."
	},
	{
		question: "Question n°25 : Pourquoi l'homme ne peut-il pas traiter un autre homme comme un instrument ?",
		answers: ["Parce que c'est illégal", "Parce que l'autre homme possède la même raison et est aussi une « fin »", "Parce que c'est dangereux"],
		correct: 2,
		explanation: "C'est l'implication logique du §4 : si je suis une fin, l'autre, doté de la même nature rationnelle, l'est aussi."
	},
	{
		question: "Question n°26 : Quel est le ton de ce passage ?",
		answers: ["Poétique et lyrique", "Analytique, normatif et téléologique", "Polémique"],
		correct: 2,
		explanation: "Kant analyse un progrès (téléologie), en tire des conséquences descriptives, puis établit une norme morale (devoir)."
	},
	{
		question: "Question n°27 : Que signifie « achevant d'élever » (§1) ?",
		answers: ["Commencer à monter", "Porter à son terme, compléter un processus de séparation d'avec l'animalité", "Détruire"],
		correct: 2,
		explanation: "C'est l'aboutissement d'un processus : la raison achève la séparation entre l'homme et la société animale."
	},
	{
		question: "Question n°28 : La vision des animaux comme « compagnons » est-elle valorisée par Kant ici ?",
		answers: ["Oui, c'est l'idéal", "Non, c'est un état pré-rationnel que la raison doit dépasser", "Il reste neutre"],
		correct: 2,
		explanation: "L'homme « cessa » de les voir ainsi pour s'élever ; c'est un progrès, pas une chute."
	},
	{
		question: "Question n°29 : Quelle est la source de la légitimité de l'homme sur les animaux ?",
		answers: ["La force brute", "La volonté divine explicite", "Sa nature rationnelle qui fait de lui la fin de la Nature"],
		correct: 3,
		explanation: "Le texte lie le privilège à la « raison » et au statut de « fin de la Nature »."
	},
	{
		question: "Question n°30 : Que signifie « représentation » dans « Cette représentation implique » (§4) ?",
		answers: ["Une image mentale", "Le concept ou l'idée que l'homme se fait de sa propre place dans la Nature", "Une pièce de théâtre"],
		correct: 2,
		explanation: "C'est la prise de conscience conceptuelle (la représentation) de son statut qui entraîne logiquement une conséquence morale."
	},
	{
		question: "Question n°31 : En quoi ce texte anticipe-t-il l'écologie ou la bioéthique moderne ?",
		answers: ["Il les refuse totalement", "Il pose la question de la frontière morale entre l'instrumentalisation animale et la dignité humaine", "Il défend les droits des animaux au même titre que les humains"],
		correct: 2,
		explanation: "Il établit clairement une distinction de statut moral entre l'homme (fin) et l'animal (moyen), ce qui est au cœur des débats bioéthiques."
	},
	{
		question: "Question n°32 : Que signifie « pied d'égalité » (§4) ?",
		answers: ["Une égalité de richesse", "Une égalité de dignité et de droit en tant qu'êtres rationnels", "Une égalité physique"],
		correct: 2,
		explanation: "C'est l'égalité morale fondamentale : personne ne peut être réduit au statut d'outil par un autre."
	},
	{
		question: "Question n°33 : Le progrès de la raison est-il présenté comme un événement soudain ou un processus ?",
		answers: ["Un processus (« le dernier progrès que fit la raison », « obscurément encore »)", "Un événement magique instantané", "Une régression"],
		correct: 1,
		explanation: "Les termes indiquent une évolution, un achèvement progressif d'une prise de conscience."
	},
	{
		question: "Question n°34 : Que nous apprend ce texte sur la conception kantienne de la Nature ?",
		answers: ["La Nature est un chaos sans but", "La Nature est un système téléologique (orienté vers des fins), dont l'homme est le sommet", "La Nature est une illusion"],
		correct: 2,
		explanation: "L'expression « fin de la Nature » implique que la Nature a une organisation finalisée dont l'homme rationnel est l'aboutissement."
	},
	{
		question: "Question n°35 : Pourquoi l'exemple du vêtement (la peau) est-il significatif ?",
		answers: ["Il est trivial", "Il symbolise le premier artifice technique par lequel l'homme supplée à son manque naturel", "Il montre que l'homme aime la mode"],
		correct: 2,
		explanation: "Le vêtement est le premier signe de la culture : l'homme ne se contente pas de la nature immédiate, il la transforme pour ses desseins."
	},
	{
		question: "Question n°36 : Quelle est la structure logique du §4 ?",
		answers: ["Une simple affirmation", "Une implication logique : si A (je suis une fin) est vrai pour moi, alors A doit être vrai pour tout autre être similaire (contrepartie)", "Une contradiction"],
		correct: 2,
		explanation: "C'est l'application du principe d'universalisation : ma propre nature rationnelle m'oblige à reconnaître la même nature chez l'autre."
	},
	{
		question: "Question n°37 : Que signifie « société animale » (§1) ?",
		answers: ["Une organisation politique des bêtes", "L'état de pure instinct et de vie biologique sans raison", "Un groupe de chasseurs"],
		correct: 2,
		explanation: "C'est l'état d'existence régi uniquement par les instincts, dont la raison permet à l'homme de s'extraire."
	},
	{
		question: "Question n°38 : En quoi ce texte est-il lié à la notion de « dignité » ?",
		answers: ["Il ne l'est pas", "Il fonde la dignité humaine sur le fait de ne pas être un simple instrument, mais une fin en soi", "Il dit que la dignité s'achète"],
		correct: 2,
		explanation: "Le refus de traiter l'homme comme un moyen est la définition même de la dignité chez Kant."
	},
	{
		question: "Question n°39 : Que veut dire Kant par « en raison de sa nature » (§2) ?",
		answers: ["À cause de son corps", "En vertu de son essence rationnelle", "Par hasard"],
		correct: 2,
		explanation: "La « nature » spécifique de l'homme, qui le distingue, est la raison."
	},
	{
		question: "Question n°40 : L'homme a-t-il le droit de maltraiter les animaux selon ce texte ?",
		answers: ["Oui, sans aucune limite", "Le texte ne parle pas de maltraitance gratuite, mais d'utilisation comme moyen pour des desseins ; cependant, la philosophie kantienne ailleurs condamne la cruauté car elle endurcit le cœur de l'homme", "Non, les animaux sont sacrés"],
		correct: 2,
		explanation: "Le texte autorise l'instrumentalisation (« moyens et instruments »), mais dans le cadre des « desseins » rationnels, pas de la cruauté gratuite (que Kant condamne ailleurs)."
	},
	{
		question: "Question n°41 : Quel est le lien entre ce texte et l'« Idée d'une histoire universelle » ?",
		answers: ["Aucun", "Ce progrès de la raison est une étape clé dans le développement historique de l'humanité vers un état civil et moral", "C'est la conclusion de l'histoire"],
		correct: 2,
		explanation: "Ce moment marque le passage de l'état de nature à l'état culturel, étape nécessaire dans la philosophie de l'histoire de Kant."
	},
	{
		question: "Question n°42 : Que signifie « désapprouver » implicitement dans le fait de traiter un homme comme un instrument ?",
		answers: ["C'est une simple préférence", "C'est une violation du devoir moral et de la raison", "C'est une stratégie efficace"],
		correct: 2,
		explanation: "C'est une contradiction de la raison pratique, donc une faute morale."
	},
	{
		question: "Question n°43 : Pourquoi l'homme a-t-il « cessé » de voir les animaux comme des compagnons ?",
		answers: ["Parce qu'ils sont devenus méchants", "Parce que la raison lui a révélé sa propre finalité supérieure", "Parce qu'il les a oubliés"],
		correct: 2,
		explanation: "C'est une conséquence directe de la prise de conscience d'être la « fin de la Nature »."
	},
	{
		question: "Question n°44 : Que signifie « associé » (§4) ?",
		answers: ["Un partenaire commercial", "Un membre d'une communauté morale partageant les mêmes droits et devoirs", "Un subalterne"],
		correct: 2,
		explanation: "L'association implique une réciprocité et une reconnaissance mutuelle de la dignité."
	},
	{
		question: "Question n°45 : La compréhension de l'homme comme « fin de la Nature » est-elle immédiate et claire ?",
		answers: ["Oui, dès la naissance", "Non, elle est d'abord « obscure » avant de s'éclairer par la réflexion", "Non, elle est impossible"],
		correct: 2,
		explanation: "Le texte insiste sur le caractère « obscurément encore » de cette compréhension initiale."
	},
	{
		question: "Question n°46 : Que nous dit ce texte sur la liberté humaine ?",
		answers: ["L'homme n'est pas libre", "L'homme est libre car il peut se proposer des « desseins » et utiliser la nature pour les atteindre", "La liberté est une illusion"],
		correct: 2,
		explanation: "La capacité à se proposer des desseins et à instrumentaliser la nature est une manifestation de la liberté et de l'autonomie."
	},
	{
		question: "Question n°47 : En quoi ce texte est-il une justification philosophique de la propriété ?",
		answers: ["Il l'interdit", "Il suggère que s'approprier les choses de la nature (comme la peau) est légitime car la nature les destine à l'homme", "Il dit que la propriété est un vol"],
		correct: 2,
		explanation: "L'acte de prendre la peau est présenté comme la découverte d'un « privilège » légitime fondé sur la finalité naturelle."
	},
	{
		question: "Question n°48 : Quelle est la portée universelle de la conclusion du texte ?",
		answers: ["Elle ne concerne que les Européens", "Elle s'applique à tout être humain, fondant un droit cosmopolitique", "Elle s'applique uniquement aux philosophes"],
		correct: 2,
		explanation: "En parlant de « un autre homme » sans restriction, Kant pose les bases d'un universalisme moral."
	},
	{
		question: "Question n°49 : Que signifie le mot « proprement » dans « il était proprement la fin » (§1) ?",
		answers: ["De manière sale", "Au sens strict, véritablement, essentiellement", "De manière approximative"],
		correct: 2,
		explanation: "« Proprement » signifie ici « au sens propre », c'est-à-dire véritablement et essentiellement."
	},
	{
		question: "Question n°50 : Quelle est la thèse globale de cet extrait ?",
		answers: ["L'homme doit vivre comme un animal", "La raison élève l'homme au rang de fin de la Nature, lui permettant d'instrumentaliser les animaux, mais lui imposant en contrepartie de respecter absolument la dignité de ses semblables", "La Nature est l'ennemie de l'homme"],
		correct: 2,
		explanation: "C'est la synthèse parfaite du texte : le progrès rationnel a deux faces, la domination sur la nature non-rationnelle et le respect moral entre êtres rationnels."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "L'homme comme fin de la Nature (Kant)" },
		{ key: 1, parent: 0, text: "Le progrès de la raison" },
		{ key: 2, parent: 1, text: "[1] Élève l'homme au-dessus de la société animale" },
		{ key: 3, parent: 1, text: "[1] Compréhension (obscure) d'être la fin de la Nature" },
		{ key: 4, parent: 0, text: "La découverte du privilège" },
		{ key: 5, parent: 4, text: "[2] L'exemple du mouton : la peau est pour l'homme" },
		{ key: 6, parent: 4, text: "[2] Privilège fondé sur la nature rationnelle de l'homme" },
		{ key: 7, parent: 0, text: "Le nouveau rapport aux animaux" },
		{ key: 8, parent: 7, text: "[3] Fin de la considération comme 'compagnons'" },
		{ key: 9, parent: 7, text: "[3] Les animaux deviennent des moyens et instruments" },
		{ key: 10, parent: 0, text: "La contrepartie morale (L'impératif)" },
		{ key: 11, parent: 10, text: "[4] Interdiction de traiter un autre homme comme un moyen" },
		{ key: 12, parent: 10, text: "[4] L'autre homme est un associé sur un pied d'égalité" }
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
			origine: "Emmanuel Kant, La philosophie de l'histoire (Idée d'une histoire universelle au point de vue cosmopolitique)",
			theme: "La nature",
			these: "Le progrès de la raison permet à l'homme de se comprendre comme la fin ultime de la Nature, ce qui légitime son usage des animaux comme moyens, mais impose en contrepartie morale absolue de reconnaître tout autre être humain comme une fin en soi et un associé égalitaire.",
			interet: "Ce texte est fondamental car il articule la téléologie naturelle (l'homme comme but de la création) et l'éthique kantienne (l'impératif catégorique). Il explique le passage de l'état de nature à l'état culturel et moral, en établissant une frontière éthique stricte entre l'instrumentalisation permise du règne animal et l'interdiction absolue d'instrumentaliser l'être humain.",
			problematique: "En quoi la prise de conscience par l'homme de sa place de « fin de la Nature » fonde-t-elle à la fois sa légitime domination sur le règne animal et le respect inconditionnel dû à la dignité de ses semblables ?"
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
			"text": "DÉBUT\nLe progrès de la raison\nélève l'homme au-dessus\nde la société animale.",
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
			"text": "PRISE DE CONSCIENCE :\nL'homme comprend qu'il\nest la « fin de la Nature ».",
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
			"text": "CONSÉQUENCE SUR\nLES ANIMAUX :\nDécouverte du privilège\n(ex: la peau du mouton).\nLes animaux deviennent\ndes moyens/instruments.",
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
			"text": "LA CONTREPARTIE\nMORALE :\nCette logique ne peut\ns'appliquer à un autre\nêtre humain.",
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
			"text": "FIN\nL'autre homme doit être\nconsidéré comme un\nassocié égalitaire (fin en soi,\njamais comme un simple\nmoyen).",
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
			"fromSide": "right",
			"toSide": "left"
		}
	]
};