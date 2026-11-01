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
const sousTitre = "Tester ses connaissances sur un texte de Diderot (Jacques le fataliste)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] JACQUES : C'est que, tandis que je m'enivre de son mauvais vin, j'oublie de mener nos chevaux à l'abreuvoir. [2] Mon père s'en aperçoit ; il se fâche. [3] Je hoche de la tête ; il prend un bâton et m'en frotte un peu durement les épaules. [4] Un régiment passait pour aller au camp devant Fontenoy ; de dépit je m'enrôle. [5] Nous arrivons ; la bataille se donne. [6] LE MAÎTRE : Et tu reçois la balle à ton adresse. »",
	source: "Denis Diderot, <em>Jacques le fataliste et son maître</em>, Paris : Flammarion, coll. G.F., 1970, p.25"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de cette œuvre ?",
		answers: ["Voltaire", "Denis Diderot", "Jean-Jacques Rousseau"],
		correct: 2,
		explanation: "Le texte est extrait de *Jacques le fataliste et son maître*, roman inachevé de Denis Diderot."
	},
	{
		question: "Question n°2 : Qui est le locuteur principal de ce passage ?",
		answers: ["Le Maître", "Jacques", "L'auteur"],
		correct: 2,
		explanation: "Le texte est introduit par « JACQUES : », c'est donc lui qui raconte l'anecdote."
	},
	{
		question: "Question n°3 : Quelle est la cause initiale de l'enchaînement des événements selon Jacques ?",
		answers: ["Une dispute politique", "Le fait de s'enivrer de mauvais vin et d'oublier les chevaux", "Une attaque ennemie"],
		correct: 2,
		explanation: "Jacques commence son récit par : « tandis que je m'enivre de son mauvais vin, j'oublie de mener nos chevaux à l'abreuvoir »."
	},
	{
		question: "Question n°4 : Comment réagit le père de Jacques face à cet oubli ?",
		answers: ["Il rit", "Il se fâche", "Il l'ignore"],
		correct: 2,
		explanation: "Le texte indique explicitement : « Mon père s'en aperçoit ; il se fâche »."
	},
	{
		question: "Question n°5 : Quelle est la réaction physique de Jacques à la colère de son père ?",
		answers: ["Il s'enfuit", "Il hoche de la tête", "Il pleure"],
		correct: 2,
		explanation: "Jacques raconte : « Je hoche de la tête »."
	},
	{
		question: "Question n°6 : Quelle est la conséquence immédiate de ce hochement de tête ?",
		answers: ["Le père prend un bâton et le frappe", "Le père le pardonne", "Jacques part travailler"],
		correct: 1,
		explanation: "« il prend un bâton et m'en frotte un peu durement les épaules »."
	},
	{
		question: "Question n°7 : Quelle expression euphémique Jacques utilise-t-il pour décrire les coups de bâton ?",
		answers: ["Il m'a cassé le dos", "Il m'en frotte un peu durement les épaules", "Il m'a blessé gravement"],
		correct: 2,
		explanation: "L'expression « m'en frotte un peu durement les épaules » est une litote ou un euphémisme pour atténuer la violence des coups."
	},
	{
		question: "Question n°8 : Quelle décision Jacques prend-il suite à cette punition ?",
		answers: ["Il retourne travailler aux champs", "Il s'enrôle dans un régiment", "Il se venge de son père"],
		correct: 2,
		explanation: "« de dépit je m'enrôle » dans un régiment qui passait."
	},
	{
		question: "Question n°9 : Quel sentiment pousse Jacques à s'enrôler ?",
		answers: ["Le courage", "Le dépit", "La peur"],
		correct: 2,
		explanation: "Le texte précise : « de dépit je m'enrôle ». Le dépit est un mélange de colère, de frustration et de vexation."
	},
	{
		question: "Question n°10 : Où se dirigeait le régiment dans lequel Jacques s'est enrôlé ?",
		answers: ["À Paris", "Au camp devant Fontenoy", "En Allemagne"],
		correct: 2,
		explanation: "« Un régiment passait pour aller au camp devant Fontenoy »."
	},
	{
		question: "Question n°11 : Que se passe-t-il une fois qu'ils arrivent au camp ?",
		answers: ["Ils se reposent", "La bataille se donne", "Ils sont faits prisonniers"],
		correct: 2,
		explanation: "Jacques conclut son récit par : « Nous arrivons ; la bataille se donne »."
	},
	{
		question: "Question n°12 : Qui prend la parole à la fin de l'extrait ?",
		answers: ["Jacques", "Le Maître", "Un soldat"],
		correct: 2,
		explanation: "La dernière réplique est introduite par « LE MAÎTRE : »."
	},
	{
		question: "Question n°13 : Que dit le Maître pour conclure le récit de Jacques ?",
		answers: ["C'est une histoire triste", "Et tu reçois la balle à ton adresse", "Tu aurais dû rester"],
		correct: 2,
		explanation: "Le Maître anticipe ou rappelle la suite : « Et tu reçois la balle à ton adresse »."
	},
	{
		question: "Question n°14 : Que signifie l'expression « à ton adresse » dans ce contexte ?",
		answers: ["Envoyée par la poste", "Destinée spécifiquement à toi (par le destin ou la fatalité)", "Tirée par un ami"],
		correct: 2,
		explanation: "C'est une formule ironique suggérant que la balle était inévitablement destinée à Jacques, scellant son destin."
	},
	{
		question: "Question n°15 : Quel concept philosophique ce récit illustre-t-il principalement ?",
		answers: ["Le libre arbitre", "Le déterminisme (ou fatalisme)", "L'existentialisme"],
		correct: 2,
		explanation: "L'enchaînement inéluctable des causes et des effets illustre parfaitement le déterminisme ou fatalisme de Jacques."
	},
	{
		question: "Question n°16 : Dans ce récit, les actions de Jacques sont-elles présentées comme le fruit d'un choix libre et réfléchi ?",
		answers: ["Oui, absolument", "Non, elles sont des réactions mécaniques à des causes extérieures", "On ne peut pas savoir"],
		correct: 2,
		explanation: "Chaque action de Jacques est une réaction (oubli, hochement de tête, enrôlement par dépit) à un événement précédent, niant le libre arbitre."
	},
	{
		question: "Question n°17 : Quelle figure de style est présente dans « m'en frotte un peu durement les épaules » ?",
		answers: ["Une hyperbole", "Un euphémisme", "Une métaphore"],
		correct: 2,
		explanation: "C'est un euphémisme (ou une litote) qui consiste à dire moins pour laisser entendre plus (des coups de bâton violents)."
	},
	{
		question: "Question n°18 : Quel est le ton général de ce passage ?",
		answers: ["Tragique et solennel", "Ironique, familier et détaché", "Poétique et lyrique"],
		correct: 2,
		explanation: "Le récit est fait avec simplicité, voire humour, face à des événements graves (coups, guerre, blessure), typique de l'ironie diderotienne."
	},
	{
		question: "Question n°19 : Que révèle l'intervention du Maître à la fin ?",
		answers: ["Qu'il n'écoute pas", "Qu'il connaît déjà l'histoire et joue le rôle de complice ou de relais du destin", "Qu'il est en colère"],
		correct: 2,
		explanation: "Le Maître complète la phrase, montrant que cette histoire a été racontée maintes fois et que la conclusion est inévitable, comme le destin de Jacques."
	},
	{
		question: "Question n°20 : À quel siècle se déroule l'action de ce roman ?",
		answers: ["XVIIe siècle", "XVIIIe siècle", "XIXe siècle"],
		correct: 2,
		explanation: "Diderot écrit au XVIIIe siècle, et la bataille de Fontenoy a eu lieu en 1745."
	},
	{
		question: "Question n°21 : La bataille de Fontenoy est un événement :",
		answers: ["Fictif", "Historique réel", "Mythologique"],
		correct: 2,
		explanation: "La bataille de Fontenoy (1745) est un événement historique réel de la guerre de Succession d'Autriche."
	},
	{
		question: "Question n°22 : Que signifie « s'enivre » dans ce contexte ?",
		answers: ["Boire avec modération", "Boire jusqu'à perdre la raison ou la maîtrise de soi", "Goûter"],
		correct: 2,
		explanation: "S'enivrer implique une perte de contrôle, ce qui est la première cause de la chaîne d'événements."
	},
	{
		question: "Question n°23 : Le « mauvais vin » est-il présenté comme une excuse ou une cause réelle ?",
		answers: ["Une excuse", "Une cause réelle dans la chaîne déterministe", "Une métaphore de la vie"],
		correct: 2,
		explanation: "Pour Jacques, tout a une cause. Le mauvais vin est le premier maillon objectif de la chaîne causale."
	},
	{
		question: "Question n°24 : Que signifie « hoche de la tête » ?",
		answers: ["Faire un signe de dénégation ou d'agacement", "Approuver vivement", "Dormir"],
		correct: 1,
		explanation: "Hocher la tête ici marque un geste d'agacement, d'indifférence ou de défi, qui provoque la colère du père."
	},
	{
		question: "Question n°25 : En quoi ce texte est-il une illustration du « grand rouleau » mentionné ailleurs dans le roman ?",
		answers: ["Il parle d'un vrai rouleau de papier", "Il montre que chaque événement est écrit et enchaîné comme sur un rouleau inéluctable", "Il décrit un paysage"],
		correct: 2,
		explanation: "Le « grand rouleau » est la métaphore de Jacques pour le destin ou la chaîne des causes et des effets qui se déroule sans qu'on puisse l'arrêter."
	},
	{
		question: "Question n°26 : L'enrôlement de Jacques est-il un acte de bravoure ?",
		answers: ["Oui, pour défendre la patrie", "Non, c'est un acte de fuite et de dépit", "Oui, pour devenir riche"],
		correct: 2,
		explanation: "Il s'enrôle « de dépit », c'est-à-dire par réaction émotionnelle négative, et non par vocation ou courage."
	},
	{
		question: "Question n°27 : Quelle est la fonction de la ponctuation (points-virgules) dans le récit de Jacques ?",
		answers: ["Ralentir le récit", "Marquer la succession rapide et mécanique des événements", "Séparer des dialogues"],
		correct: 2,
		explanation: "Les points-virgules créent un rythme saccadé qui mime l'enchaînement inéluctable et mécanique des causes et des effets."
	},
	{
		question: "Question n°28 : Le Maître est-il un personnage passif dans cet extrait ?",
		answers: ["Oui, il ne fait rien", "Non, il active la conclusion et valide la logique fataliste de Jacques", "Oui, il dort"],
		correct: 2,
		explanation: "En ajoutant la chute (« Et tu reçois la balle... »), il participe activement à la construction du sens fataliste du récit."
	},
	{
		question: "Question n°29 : Que nous apprend ce passage sur la relation entre Jacques et son père ?",
		answers: ["Elle est harmonieuse", "Elle est marquée par l'autorité brutale et la rébellion", "Elle est inexistante"],
		correct: 2,
		explanation: "La relation est conflictuelle, basée sur la punition physique et la réaction de dépit du fils."
	},
	{
		question: "Question n°30 : Selon la philosophie de Jacques, aurait-il pu éviter la balle ?",
		answers: ["Oui, s'il avait été plus prudent", "Non, car toute la chaîne des événements y menait nécessairement", "Oui, s'il avait déserté"],
		correct: 2,
		explanation: "Pour un fataliste, modifier un maillon de la chaîne est impossible ; la balle était la conséquence nécessaire de tout ce qui a précédé."
	},
	{
		question: "Question n°31 : Quel genre littéraire cet extrait représente-t-il ?",
		answers: ["Une tragédie classique", "Un roman philosophique et dialogué", "Un traité scientifique"],
		correct: 2,
		explanation: "C'est un roman qui utilise le dialogue et l'anecdote pour illustrer une thèse philosophique (le déterminisme)."
	},
	{
		question: "Question n°32 : Que signifie « à l'abreuvoir » ?",
		answers: ["À l'écurie", "Au lieu où l'on mène les animaux boire", "Au marché"],
		correct: 2,
		explanation: "L'abreuvoir est l'endroit où l'on donne à boire aux chevaux."
	},
	{
		question: "Question n°33 : L'expression « la bataille se donne » utilise une voix :",
		answers: ["Active", "Pronominale (à valeur passive ou impersonnelle)", "Impérative"],
		correct: 2,
		explanation: "« Se donne » indique que l'événement a lieu de manière impersonnelle, comme si la bataille était une force de la nature, renforçant le déterminisme."
	},
	{
		question: "Question n°34 : En quoi ce texte remet-il en cause la notion de responsabilité morale ?",
		answers: ["Il la renforce", "Il suggère que Jacques n'est pas pleinement responsable, car il est poussé par des causes extérieures", "Il n'en parle pas"],
		correct: 2,
		explanation: "Si Jacques agit par dépit et réaction mécanique, sa responsabilité dans son enrôlement et sa blessure est atténuée par la chaîne des causes."
	},
	{
		question: "Question n°35 : Quel est le rôle de l'humour dans ce passage ?",
		answers: ["Il n'y a pas d'humour", "Il permet d'aborder une question philosophique lourde (le destin, la guerre) avec légèreté et distance", "Il sert à insulter le père"],
		correct: 2,
		explanation: "L'ironie et le ton familier (« frotte un peu durement ») créent un décalage comique qui est une marque de fabrique de Diderot."
	},
	{
		question: "Question n°36 : Que représente la « balle » dans ce récit ?",
		answers: ["Un simple objet", "L'aboutissement inéluctable de la chaîne des causes, le destin accompli", "Une métaphore de l'amour"],
		correct: 2,
		explanation: "La balle est le point final de la série causale, le destin qui s'accomplit mécaniquement."
	},
	{
		question: "Question n°37 : Le récit de Jacques est-il chronologique ?",
		answers: ["Oui, il suit l'ordre des événements", "Non, il commence par la fin", "Il est désordonné"],
		correct: 1,
		explanation: "Jacques raconte les événements dans l'ordre où ils se sont produits, ce qui renforce la logique de cause à effet."
	},
	{
		question: "Question n°38 : Que signifie « de dépit » ?",
		answers: ["Avec joie", "Par déception, vexation et colère rentrée", "Avec courage"],
		correct: 2,
		explanation: "Le dépit est un sentiment de vexation qui pousse à agir de manière irréfléchie ou contradictoire."
	},
	{
		question: "Question n°39 : En quoi ce passage est-il métatextuel ?",
		answers: ["Il ne l'est pas", "Le Maître anticipe la fin de l'histoire, montrant que le récit est connu et répété, comme un scénario", "Il parle d'écrire un livre"],
		correct: 2,
		explanation: "L'intervention du Maître qui souffle la fin montre la conscience du récit en tant que récit, une caractéristique du roman diderotien."
	},
	{
		question: "Question n°40 : Quelle est la vision de l'histoire humaine qui se dégage de cet extrait ?",
		answers: ["L'histoire est faite de grands héros", "L'histoire est faite d'une suite de hasards et de réactions mécaniques individuelles", "L'histoire est dirigée par Dieu"],
		correct: 2,
		explanation: "Une grande bataille historique (Fontenoy) est ici réduite à la conséquence d'une dispute domestique et d'un moment de dépit."
	},
	{
		question: "Question n°41 : Le terme « fataliste » dans le titre du roman signifie :",
		answers: ["Quelqu'un qui aime le destin", "Quelqu'un qui croit que tout est écrit et déterminé par des causes antérieures", "Quelqu'un qui est triste"],
		correct: 2,
		explanation: "Le fatalisme (ou déterminisme chez Diderot) postule que chaque événement est la conséquence nécessaire d'un événement précédent."
	},
	{
		question: "Question n°42 : Pourquoi Jacques raconte-t-il cette histoire ?",
		answers: ["Pour expliquer l'origine de sa boiterie / de sa blessure", "Pour se vanter", "Pour plaindre son père"],
		correct: 1,
		explanation: "Dans le contexte du roman, cette anecdote sert à expliquer au Maître (et au lecteur) comment Jacques a reçu la balle qui le fait boiter."
	},
	{
		question: "Question n°43 : L'attitude de Jacques face à sa blessure est-elle de la révolte ?",
		answers: ["Oui, il est très en colère", "Non, il la raconte avec détachement, comme une nécessité", "Oui, il pleure"],
		correct: 2,
		explanation: "Le ton est descriptif et neutre, ce qui illustre son acceptation fataliste des événements."
	},
	{
		question: "Question n°44 : Que peut-on déduire de la relation entre Jacques et son Maître ?",
		answers: ["Ils sont ennemis", "Ils ont une relation complice et dialogique, où le Maître connaît les habitudes de Jacques", "Ils ne se parlent pas"],
		correct: 2,
		explanation: "Le Maître connaît la fin de l'histoire, ce qui prouve une familiarité et une complicité dans leurs échanges."
	},
	{
		question: "Question n°45 : En quoi ce texte s'oppose-t-il à la tragédie classique ?",
		answers: ["Il n'y a pas d'opposition", "La tragédie met en scène des héros et un destin noble, ici c'est un valet et des causes triviales (vin, bâton)", "Il est plus long"],
		correct: 2,
		explanation: "Diderot démystifie le destin tragique en le remplaçant par une chaîne de causes matérielles et triviales."
	},
	{
		question: "Question n°46 : Que signifie « s'aperçoit » dans ce contexte ?",
		answers: ["Se rend compte", "Se trompe", "Se souvient"],
		correct: 1,
		explanation: "Le père se rend compte de l'oubli de Jacques."
	},
	{
		question: "Question n°47 : Quelle est la portée universelle de cette anecdote ?",
		answers: ["Elle ne concerne que Jacques", "Elle illustre la condition humaine soumise à la causalité, où nos vies sont façonnées par des détails apparemment insignifiants", "Elle critique le vin"],
		correct: 2,
		explanation: "Diderot utilise le particulier (Jacques) pour illustrer une vérité générale sur le déterminisme universel."
	},
	{
		question: "Question n°48 : Le mot « adresse » dans « à ton adresse » peut aussi évoquer :",
		answers: ["L'habileté du tireur", "Une lettre", "Un lieu géographique"],
		correct: 1,
		explanation: "Il y a un jeu de mots : la balle est destinée à Jacques (comme une lettre), mais elle a aussi été tirée avec une certaine « adresse » (précision) par le destin."
	},
	{
		question: "Question n°49 : Ce passage est-il un exemple de la « dialectique » du roman ?",
		answers: ["Non", "Oui, il oppose la narration de Jacques à l'intervention conclusive du Maître", "Oui, il oppose deux batailles"],
		correct: 2,
		explanation: "La structure dialoguée crée une dynamique entre celui qui vit/raconte (Jacques) et celui qui juge/résume (le Maître)."
	},
	{
		question: "Question n°50 : Quelle est la thèse globale illustrée par cet extrait ?",
		answers: ["L'homme est totalement libre de son destin", "L'existence humaine est une chaîne de causalité inéluctable où le libre arbitre n'est qu'une illusion", "La guerre est la faute des pères"],
		correct: 2,
		explanation: "C'est l'essence du fatalisme de Jacques : de l'ivresse à la blessure de guerre, chaque étape est la conséquence nécessaire de la précédente."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "Le récit de la blessure (Jacques le fataliste)" },
		{ key: 1, parent: 0, text: "La chaîne des causes (Déterminisme)" },
		{ key: 2, parent: 1, text: "[1] Cause initiale : ivresse et oubli des chevaux" },
		{ key: 3, parent: 1, text: "[2-3] Réaction du père : colère et coups de bâton" },
		{ key: 4, parent: 1, text: "[4] Réaction de Jacques : enrôlement par dépit" },
		{ key: 5, parent: 0, text: "L'issue inéluctable" },
		{ key: 6, parent: 5, text: "[5] La bataille de Fontenoy" },
		{ key: 7, parent: 5, text: "[6] La balle reçue (le destin accompli)" },
		{ key: 8, parent: 0, text: "La dynamique du dialogue" },
		{ key: 9, parent: 8, text: "Jacques : narrateur passif et détaché" },
		{ key: 10, parent: 8, text: "Le Maître : interlocuteur qui anticipe et valide la fatalité" }
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
			origine: "Denis Diderot, Jacques le fataliste et son maître, p.25",
			theme: "La liberté",
			these: "L'existence humaine est soumise à une chaîne de causalité inéluctable (fatalisme), où les actions et les malheurs individuels ne sont pas le fruit du libre arbitre, mais la conséquence mécanique et nécessaire d'une série de causes antérieures, même triviales.",
			interet: "Ce passage est une illustration parfaite et ironique de la thèse du déterminisme. Diderot y montre comment un événement majeur (une blessure de guerre) peut être réduit à une suite logique de causes dérisoires (mauvais vin, oubli, coups de bâton, dépit). Le dialogue met en scène la complicité entre Jacques et son Maître, qui valident ensemble cette vision d'un destin écrit d'avance.",
			problematique: "En quoi ce récit rétrospectif et anecdotique de sa blessure par Jacques illustre-t-il la conception déterministe de l'existence, niant le libre arbitre au profit d'une chaîne de causalité inéluctable ?"
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
			"text": "DÉBUT\nJacques raconte\nl'origine de sa blessure.",
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
			"text": "CAUSE INITIALE :\nIvresse (mauvais vin)\net oubli des chevaux.",
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
			"text": "RÉACTION EN CHAÎNE :\nColère du père ->\nHochement de tête ->\nCoups de bâton.",
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
			"text": "RÉACTION DE JACQUES :\nEnrôlement dans un\nrégiment par dépit.",
			"loc": "1034.36 120",
			"category": "rectangle",
			"color": "#a3bffa",
			"borderColor": "#3b5bdb",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "5",
			"text": "CONSÉQUENCE\nINÉLUCTABLE :\nArrivée au camp et\nla bataille se donne.",
			"loc": "1319.74 120",
			"category": "rectangle",
			"color": "#ff7675",
			"borderColor": "#d63031",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "6",
			"text": "FIN\nLe Maître conclut :\n« Et tu reçois la balle\nà ton adresse. »\n(Confirmation du destin).",
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