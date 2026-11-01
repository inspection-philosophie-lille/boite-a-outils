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
const sousTitre = "Tester ses connaissances sur un texte de Rousseau (Second Discours)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Le premier qui, ayant enclos un terrain, s'avisa de dire : \"Ceci est à moi\", et trouva des gens assez simples pour le croire, fut le vrai fondateur de la société civile. [2] Que de crimes, de guerres, de meurtres, que de misères et d'horreurs n'eût point épargnés au genre humain celui qui, arrachant les pieux ou comblant le fossé, eût crié à ses semblables : \"Gardez-vous d'écouter cet imposteur ; vous êtes perdus, si vous oubliez que les fruits sont à tous, et que la terre n'est à personne.\" »",
	source: "Jean-Jacques Rousseau, <em>Discours sur l'origine et les fondements de l'inégalité parmi les hommes</em>, II, coll. Pléiade, p. 164"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Voltaire", "Montesquieu", "Jean-Jacques Rousseau"],
		correct: 3,
		explanation: "Le texte est extrait du célèbre *Discours sur l'origine et les fondements de l'inégalité parmi les hommes* de Jean-Jacques Rousseau."
	},
	{
		question: "Question n°2 : De quelle partie de l'œuvre ce passage est-il tiré ?",
		answers: ["De la première partie", "De la seconde partie", "De la préface"],
		correct: 2,
		explanation: "La source indique explicitement « II », ce qui correspond à la seconde partie du Discours, consacrée à la naissance de la propriété et de l'inégalité."
	},
	{
		question: "Question n°3 : Selon le texte, quelle action marque la fondation de la société civile ?",
		answers: ["La signature d'un contrat", "Le fait d'enclore un terrain et de dire \"Ceci est à moi\"", "La découverte de l'agriculture"],
		correct: 2,
		explanation: "Rousseau identifie cet acte comme fondateur : « Le premier qui, ayant enclos un terrain, s'avisa de dire : \"Ceci est à moi\"... fut le vrai fondateur de la société civile »."
	},
	{
		question: "Question n°4 : Comment Rousseau qualifie-t-il les personnes qui ont cru le premier propriétaire ?",
		answers: ["De sages", "De simples", "De méchantes"],
		correct: 2,
		explanation: "Il écrit qu'il « trouva des gens assez simples pour le croire »."
	},
	{
		question: "Question n°5 : Quel terme ironique Rousseau utilise-t-il pour qualifier ce « premier » ?",
		answers: ["Le vrai fondateur", "Le bienfaiteur", "Le héros"],
		correct: 1,
		explanation: "L'expression « le vrai fondateur » est chargée d'ironie : il est le fondateur réel, mais d'un système désastreux, non d'un progrès glorieux."
	},
	{
		question: "Question n°6 : Que signifie le verbe « s'avisa » dans ce contexte ?",
		answers: ["Il eut la bonne idée", "Il eut l'audace ou l'idée absurde", "Il fut contraint par la loi"],
		correct: 2,
		explanation: "« S'aviser de » implique ici une initiative audacieuse, arbitraire et illégitime, soulignant l'absurdité de la revendication."
	},
	{
		question: "Question n°7 : Quelle liste de maux Rousseau énumère-t-il comme conséquences de cet acte ?",
		answers: ["La pauvreté et la maladie", "Des crimes, des guerres, des meurtres, des misères et des horreurs", "L'ignorance et la superstition"],
		correct: 2,
		explanation: "Le texte énumère : « Que de crimes, de guerres, de meurtres, que de misères et d'horreurs »."
	},
	{
		question: "Question n°8 : Qui aurait pu épargner ces maux au genre humain selon Rousseau ?",
		answers: ["Un roi puissant", "Celui qui aurait arraché les pieux ou comblé le fossé", "Un philosophe des Lumières"],
		correct: 2,
		explanation: "Rousseau évoque celui qui, « arrachant les pieux ou comblant le fossé, eût crié à ses semblables... »."
	},
	{
		question: "Question n°9 : Comment le premier propriétaire est-il qualifié dans le discours du sauveur hypothétique ?",
		answers: ["D'imposteur", "De voleur", "D'ignorant"],
		correct: 1,
		explanation: "Le sauveur crie : « Gardez-vous d'écouter cet imposteur »."
	},
	{
		question: "Question n°10 : Quelle est la conséquence ultime si l'on écoute cet « imposteur » ?",
		answers: ["On devient riche", "On est perdu", "On devient esclave"],
		correct: 2,
		explanation: "L'avertissement est sans appel : « vous êtes perdus, si vous oubliez... »."
	},
	{
		question: "Question n°11 : À qui appartiennent les fruits selon l'état naturel décrit par Rousseau ?",
		answers: ["À celui qui les cueille", "À tous", "Au propriétaire du terrain"],
		correct: 2,
		explanation: "Le texte affirme : « les fruits sont à tous »."
	},
	{
		question: "Question n°12 : À qui appartient la terre selon ce même principe naturel ?",
		answers: ["Au premier occupant", "À personne", "À Dieu"],
		correct: 2,
		explanation: "Rousseau conclut : « et que la terre n'est à personne »."
	},
	{
		question: "Question n°13 : Quelle figure de style domine le début de la seconde phrase ?",
		answers: ["Une métaphore", "Une énumération et une exclamation", "Une antithèse"],
		correct: 2,
		explanation: "« Que de crimes, de guerres, de meurtres, que de misères et d'horreurs... » est une énumération à valeur d'exclamation rhétorique."
	},
	{
		question: "Question n°14 : Que symbolisent les « pieux » et le « fossé » ?",
		answers: ["Des outils agricoles", "Les frontières artificielles de la propriété privée", "Des defenses contre les animaux"],
		correct: 2,
		explanation: "Ce sont les marques physiques de l'appropriation exclusive et de la séparation d'avec le commun."
	},
	{
		question: "Question n°15 : Que signifie « arrachant les pieux ou comblant le fossé » ?",
		answers: ["Détruire les infrastructures", "Abolir les frontières de la propriété pour rétablir le droit naturel", "Travailler la terre"],
		correct: 2,
		explanation: "C'est un acte de résistance symbolique et concret pour annuler l'acte fondateur illégitime de la propriété."
	},
	{
		question: "Question n°16 : Quel temps verbal est utilisé dans « n'eût point épargnés » ?",
		answers: ["Le passé simple", "Le plus-que-parfait du subjonctif (valeur de conditionnel passé)", "Le futur antérieur"],
		correct: 2,
		explanation: "Il exprime une action qui aurait pu se produire dans le passé mais qui ne s'est pas produite (irréel du passé)."
	},
	{
		question: "Question n°17 : Quelle conception de la propriété ce texte critique-t-il implicitement ?",
		answers: ["Le droit naturel de propriété (comme chez Locke)", "Le communisme", "Le féodalisme uniquement"],
		correct: 1,
		explanation: "Rousseau s'oppose à l'idée que la propriété est un droit naturel ou légitime découlant du travail ou de la première occupation."
	},
	{
		question: "Question n°18 : Quel est le ton général de ce passage ?",
		answers: ["Descriptif et neutre", "Polémique, ironique et prophétique", "Lyrique et romantique"],
		correct: 2,
		explanation: "Rousseau utilise l'ironie (« vrai fondateur »), l'indignation (« imposteur ») et l'avertissement solennel (« vous êtes perdus »)."
	},
	{
		question: "Question n°19 : Que révèle l'expression « gens assez simples » sur le peuple ?",
		answers: ["Qu'il est naturellement bon mais naïf", "Qu'il est complice du crime", "Qu'il est intellectuellement inférieur"],
		correct: 1,
		explanation: "La « simplicité » ici désigne un manque de méfiance et de jugement critique, permettant la manipulation par le premier usurpateur."
	},
	{
		question: "Question n°20 : En quoi ce texte est-il une critique de la « société civile » ?",
		answers: ["Il la présente comme une source de corruption et d'inégalité, non comme un progrès moral", "Il dit qu'elle est trop complexe", "Il préfère la monarchie"],
		correct: 1,
		explanation: "Contrairement à d'autres philosophes des Lumières, Rousseau voit dans la fondation de la société civile (basée sur la propriété) l'origine des maux de l'humanité."
	},
	{
		question: "Question n°21 : Que signifie le mot « genre humain » dans ce contexte ?",
		answers: ["Les hommes uniquement", "L'humanité dans son ensemble", "Les citoyens d'un État"],
		correct: 2,
		explanation: "Il désigne l'humanité entière, soulignant l'impact universel et désastreux de l'invention de la propriété."
	},
	{
		question: "Question n°22 : Quelle est la fonction du discours direct (« Ceci est à moi ») ?",
		answers: ["Rendre le texte plus vivant", "Mettre en scène l'acte de langage performatif qui crée la propriété", "Citer un document historique"],
		correct: 2,
		explanation: "C'est un acte de langage performatif : dire « Ceci est à moi » est l'acte même qui, selon Rousseau, institue illégitimement le droit de propriété."
	},
	{
		question: "Question n°23 : Pourquoi le sauveur hypothétique s'adresse-t-il à ses « semblables » ?",
		answers: ["Pour rappeler l'égalité naturelle entre les hommes", "Pour les insulter", "Pour demander de l'aide"],
		correct: 1,
		explanation: "Le terme « semblables » renforce l'idée d'une communauté naturelle d'égaux, brisée par l'appropriation individuelle."
	},
	{
		question: "Question n°24 : Que suggère l'opposition entre « les fruits » et « la terre » ?",
		answers: ["Une distinction juridique moderne", "Que l'usage (les fruits) peut être partagé, mais que le sol lui-même ne peut être possédé", "Que l'agriculture est mauvaise"],
		correct: 2,
		explanation: "Rousseau distingue l'usage des ressources (les fruits, qui sont à tous) de la possession du sol (la terre, qui n'est à personne)."
	},
	{
		question: "Question n°25 : Ce passage est souvent considéré comme le fondement de quelle pensée politique ?",
		answers: ["Le libéralisme économique", "La critique socialiste et anarchiste de la propriété privée", "Le conservatisme"],
		correct: 2,
		explanation: "Cette dénonciation de la propriété comme source de tous les maux a inspiré de nombreux penseurs critiques du capitalisme et de l'inégalité."
	},
	{
		question: "Question n°26 : Que signifie « oublié » dans « si vous oubliez » ?",
		answers: ["Une perte de mémoire clinique", "L'aliénation : l'homme perd le souvenir de son état naturel et de ses droits", "Une négligence scolaire"],
		correct: 2,
		explanation: "L'oubli est ici une aliénation morale et politique : accepter la propriété, c'est oublier notre condition naturelle d'égaux."
	},
	{
		question: "Question n°27 : Quelle est la portée de l'adjectif « vrai » dans « vrai fondateur » ?",
		answers: ["Il est sincère", "Il est le fondateur historique réel, par opposition aux mythes glorifiants d'un contrat social bienveillant", "Il est honnête"],
		correct: 2,
		explanation: "Rousseau démystifie les récits officiels : le vrai fondateur n'est pas un sage législateur, mais un usurpateur opportun."
	},
	{
		question: "Question n°28 : En quoi l'acte d'enclore est-il un acte de violence ?",
		answers: ["Il est physiquement dangereux", "Il exclut les autres d'une ressource qui était auparavant commune", "Il détruit la nature"],
		correct: 2,
		explanation: "L'enclos est une exclusion. Il transforme un bien commun en bien privé, privant les autres de leur droit naturel d'usage."
	},
	{
		question: "Question n°29 : Que représente le « sauveur » qui arrache les pieux ?",
		answers: ["Un anarchiste violent", "Le gardien de la mémoire de l'état de nature et du droit naturel", "Un ennemi du progrès"],
		correct: 2,
		explanation: "C'est une figure idéale qui rappelle les hommes à leur condition naturelle et à l'illégitimité de l'appropriation exclusive."
	},
	{
		question: "Question n°30 : Quelle est la relation entre ce texte et le concept d'« état de nature » ?",
		answers: ["Il le nie", "Il en décrit la fin tragique et la corruption par l'institution de la propriété", "Il le décrit en détail"],
		correct: 2,
		explanation: "Ce passage marque le basculement de l'état de nature (où la terre n'est à personne) vers l'état civil (marqué par l'inégalité)."
	},
	{
		question: "Question n°31 : Pourquoi Rousseau utilise-t-il le conditionnel passé (« eût crié », « n'eût point épargnés ») ?",
		answers: ["Pour exprimer un regret historique et une possibilité non réalisée", "Pour montrer qu'il n'est pas sûr de ses faits", "Pour parler du futur"],
		correct: 1,
		explanation: "Le conditionnel passé marque l'irréel : cette action salvatrice n'a pas eu lieu, ce qui explique la présence des maux actuels."
	},
	{
		question: "Question n°32 : Que dénonce Rousseau à travers le mot « imposteur » ?",
		answers: ["La fraude fiscale", "L'illusion que le droit de propriété est naturel ou légitime", "Le mensonge religieux"],
		correct: 2,
		explanation: "L'imposture réside dans la prétention à transformer un fait (l'occupation) en un droit (la propriété), trompant ainsi les autres."
	},
	{
		question: "Question n°33 : En quoi ce texte est-il une réponse à John Locke ?",
		answers: ["Il est d'accord avec lui", "Locke voyait la propriété comme un droit naturel issu du travail, Rousseau la voit comme une usurpation source de conflits", "Il ne le mentionne pas"],
		correct: 2,
		explanation: "Rousseau s'oppose directement à la théorie lockéenne de la propriété comme extension naturelle de la personne par le travail."
	},
	{
		question: "Question n°34 : Que signifie « fondements » dans le titre de l'œuvre ?",
		answers: ["Les bases architecturales", "Les origines historiques et les causes profondes", "Les lois écrites"],
		correct: 2,
		explanation: "Rousseau cherche les causes profondes et historiques (souvent hypothétiques) de l'inégalité, ici incarnées par l'acte de propriété."
	},
	{
		question: "Question n°35 : Quel est le rôle de la nature dans ce passage ?",
		answers: ["Elle est une ressource à exploiter", "Elle est le modèle d'un ordre juste où les ressources sont communes", "Elle est hostile à l'homme"],
		correct: 2,
		explanation: "La nature est invoquée comme norme de justice : « les fruits sont à tous, et que la terre n'est à personne »."
	},
	{
		question: "Question n°36 : Que nous apprend ce texte sur la psychologie humaine selon Rousseau ?",
		answers: ["L'homme est naturellement cupide", "L'homme est naturellement simple et crédule, mais peut être corrompu par l'illusion de la propriété", "L'homme est naturellement sociable"],
		correct: 2,
		explanation: "Les gens sont « assez simples » pour croire à l'imposture, montrant une vulnérabilité à la manipulation qui mène à leur propre perte."
	},
	{
		question: "Question n°37 : Quelle est la fonction rhétorique de l'apostrophe « Gardez-vous d'écouter... » ?",
		answers: ["Mettre en garde de manière solennelle et urgente", "Donner un conseil amical", "Raconter une histoire"],
		correct: 1,
		explanation: "C'est un appel à la vigilance et à la résistance, donnant au texte une dimension prophétique et politique."
	},
	{
		question: "Question n°38 : En quoi l'acte de « combler le fossé » est-il symbolique ?",
		answers: ["Il représente la fin des travaux publics", "Il symbolise l'effacement des divisions artificielles entre les hommes", "Il représente l'union des classes sociales"],
		correct: 2,
		explanation: "Le fossé est la matérialisation de la séparation et de l'exclusion ; le combler, c'est rétablir la continuité et la communauté."
	},
	{
		question: "Question n°39 : Que signifie « épargner » dans ce contexte ?",
		answers: ["Économiser de l'argent", "Éviter, préserver de", "Pardonner"],
		correct: 2,
		explanation: "« Épargner au genre humain » signifie lui éviter de subir ces maux."
	},
	{
		question: "Question n°40 : Quelle est la thèse centrale de cet extrait ?",
		answers: ["La propriété est un droit sacré", "La propriété privée est une usurpation illégitime à l'origine de tous les maux de la société civile", "L'agriculture est la base de la civilisation"],
		correct: 2,
		explanation: "C'est la synthèse du passage : l'enclosure et la revendication « Ceci est à moi » sont des actes d'imposture aux conséquences désastreuses."
	},
	{
		question: "Question n°41 : Comment Rousseau qualifie-t-il implicitement le droit du premier occupant ?",
		answers: ["Comme un droit fondé", "Comme une simple force transformée en droit par la crédulité d'autrui", "Comme une loi divine"],
		correct: 2,
		explanation: "Le droit du premier occupant n'est légitime que parce que des gens « simples » ont accepté de croire à cette prétention."
	},
	{
		question: "Question n°42 : Que suggère l'expression « vous êtes perdus » ?",
		answers: ["Une perte géographique", "Une damnation morale et politique irréversible si l'on accepte l'inégalité", "Une faillite économique"],
		correct: 2,
		explanation: "C'est une perte de la liberté et de l'égalité naturelles, entraînant l'humanité dans la servitude et le conflit."
	},
	{
		question: "Question n°43 : En quoi ce texte est-il fondateur pour la pensée écologique moderne ?",
		answers: ["Il ne l'est pas", "Il affirme que la terre n'est pas une marchandise à posséder, mais un bien commun", "Il prône l'industrialisation"],
		correct: 2,
		explanation: "L'idée que « la terre n'est à personne » résonne fortement avec les critiques contemporaines de l'appropriation et de la destruction des biens communs naturels."
	},
	{
		question: "Question n°44 : Quelle est la différence entre « les fruits » et « la terre » dans l'argumentation ?",
		answers: ["Aucune", "Les fruits sont des biens de consommation renouvelables, la terre est le fondement permanent ; aucun des deux ne doit être privatisé", "La terre peut être possédée, pas les fruits"],
		correct: 2,
		explanation: "Rousseau insiste sur le fait que ni l'usage temporaire (fruits) ni le support permanent (terre) ne peuvent légitimement faire l'objet d'une appropriation exclusive."
	},
	{
		question: "Question n°45 : Que révèle l'usage des guillemets pour « Ceci est à moi » ?",
		answers: ["Une citation exacte", "La mise à distance critique de cette formule, montrant son caractère artificiel et performatif", "Une hésitation de l'auteur"],
		correct: 2,
		explanation: "Les guillemets soulignent que cette phrase est l'acte de langage magique et trompeur qui crée la propriété, que Rousseau désapprouve."
	},
	{
		question: "Question n°46 : Pourquoi le texte parle-t-il de « misères et d'horreurs » ?",
		answers: ["Pour exagérer", "Pour montrer que les conséquences de la propriété ne sont pas seulement économiques, mais morales et physiques", "Pour décrire la nature"],
		correct: 2,
		explanation: "La propriété engendre non seulement la pauvreté (misères), mais aussi la violence extrême (horreurs, meurtres, guerres)."
	},
	{
		question: "Question n°47 : En quoi ce passage est-il une critique de l'idée de « progrès » ?",
		answers: ["Il ne la critique pas", "Il montre que ce que l'on appelle progrès (la société civile) est en réalité une décadence morale et une source de malheur", "Il célèbre le progrès technique"],
		correct: 2,
		explanation: "Rousseau renverse la narration des Lumières : la fondation de la société civile n'est pas un progrès, mais une chute."
	},
	{
		question: "Question n°48 : Que signifie « semblables » dans « crié à ses semblables » ?",
		answers: ["Des amis", "Des êtres humains égaux en nature et en droit", "Des voisins"],
		correct: 2,
		explanation: "Ce terme rappelle l'égalité fondamentale des hommes à l'état de nature, avant que la propriété ne crée des maîtres et des valets."
	},
	{
		question: "Question n°49 : Quelle solution implicite Rousseau propose-t-il ici ?",
		answers: ["Le retour à la vie dans les bois", "La résistance à l'appropriation illégitime et la reconnaissance des biens comme communs", "La dictature"],
		correct: 2,
		explanation: "L'appel à « arracher les pieux » est une métaphore de la résistance contre l'accumulation illégitime et pour la préservation du bien commun."
	},
	{
		question: "Question n°50 : Quelle est la portée universelle de ce texte ?",
		answers: ["Il ne concerne que la France du XVIIIe siècle", "Il dénonce un mécanisme universel d'usurpation et d'inégalité qui reste d'actualité", "Il est purement historique"],
		correct: 2,
		explanation: "Le mécanisme décrit (l'appropriation par la force ou la ruse, acceptée par la naïveté) est une critique intemporelle des fondements de l'inégalité sociale."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "La fondation illégitime de la société civile" },
		{ key: 1, parent: 0, text: "L'acte fondateur" },
		{ key: 2, parent: 1, text: "[1] Enclore un terrain" },
		{ key: 3, parent: 1, text: "[1] Dire : \"Ceci est à moi\"" },
		{ key: 4, parent: 1, text: "[1] Trouver des gens assez simples pour le croire" },
		{ key: 5, parent: 0, text: "Les conséquences désastreuses" },
		{ key: 6, parent: 5, text: "[2] Crimes, guerres, meurtres" },
		{ key: 7, parent: 5, text: "[2] Misères et horreurs pour le genre humain" },
		{ key: 8, parent: 0, text: "Le contre-discours salvateur" },
		{ key: 9, parent: 8, text: "[2] Arracher les pieux ou combler le fossé" },
		{ key: 10, parent: 8, text: "[2] Dénoncer l'« imposteur »" },
		{ key: 11, parent: 8, text: "[2] Rappeler le droit naturel : les fruits sont à tous, la terre n'est à personne" }
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
			origine: "Jean-Jacques Rousseau, Discours sur l'origine et les fondements de l'inégalité parmi les hommes, II",
			theme: "La nature",
			these: "La propriété privée n'est pas un droit naturel, mais une usurpation illégitime fondée sur la ruse et la crédulité, qui marque la fin de l'état de nature et l'origine de toutes les inégalités, crimes et misères de la société civile.",
			interet: "Ce passage est l'un des plus célèbres de la philosophie politique. Il opère une démystification radicale de la propriété, la présentant non comme un progrès ou un droit naturel, mais comme un acte de violence et d'imposture. Il oppose la loi artificielle de l'appropriation à la loi naturelle du partage des ressources.",
			problematique: "En quoi l'acte d'appropriation d'un terrain constitue-t-il, selon Rousseau, une rupture illégitime avec l'ordre naturel, fondant ainsi une société civile source de tous les maux de l'humanité ?"
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
			"text": "DÉBUT\nL'état de nature :\nLes fruits sont à tous,\nla terre n'est à personne.",
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
			"text": "L'ACTE D'USURPATION :\nLe premier enclos un\nterrain et dit :\n\"Ceci est à moi\".",
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
			"text": "LA CRÉDULITÉ :\nIl trouve des gens\nassez simples pour\nle croire.",
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
			"text": "CONSÉQUENCE :\nFondation de la\nsociété civile (source\nde crimes, guerres,\nmisères).",
			"loc": "1034.36 120",
			"category": "rectangle",
			"color": "#ff7675",
			"borderColor": "#d63031",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "5",
			"text": "L'ALTERNATIVE\nMANQUÉE (Irréel du passé) :\nArracher les pieux,\ncombler le fossé,\ndénoncer l'imposteur.",
			"loc": "1034.36 259.98",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "6",
			"text": "FIN\nAvertissement :\nVous êtes perdus si\nvous oubliez que la\nterre n'est à personne.",
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
			"from": "4",
			"to": "6",
			"fromSide": "right",
			"toSide": "left"
		}
	]
};