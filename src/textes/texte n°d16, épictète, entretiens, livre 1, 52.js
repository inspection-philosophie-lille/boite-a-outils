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
const sousTitre = "Tester ses connaissances sur un texte d'Épictète (Entretiens)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Un tyran me dit : « Je suis le maître, je peux tout. [2] — Eh ! que peux-tu ? [3] Peux-tu te donner un bon esprit ? [4] Peux-tu m'ôter ma liberté ? [5] Eh ! que peux-tu donc ? [6] Sur un vaisseau, ne dépends-tu pas du pilote ? [7] Sur ton char, ne dépends-tu pas du cocher ? [8] — Tout le monde me fait la cour. [9] — Mais te la fait-on comme à un homme ? [10] Montre-moi quelqu'un qui te prenne pour tel, qui voulût te ressembler, qui voulût marcher sur tes traces comme sur celles de Socrate. [11] — Mais je puis te faire couper le cou. [12] — Tu parles bien. [13] J'avais oublié qu'il faut te faire la cour comme aux dieux nuisibles, et t'offrir des sacrifices comme à la fièvre. [14] N'a-t-elle pas un autel à Rome ? [15] Tu le mérites plus qu'elle, car tu es plus malfaisant. [16] Mais que tes satellites et toute ta pompe effraient et troublent la vile populace, tu ne me troubleras point ; je ne puis être troublé que par moi-même. [17] Tu as beau me menacer, je te dis que je suis libre. [18] — Toi libre ! [19] Et comment ? [20] — C'est la divinité même qui m'a affranchi. [21] Penses-tu qu'elle souffre que son fils tombe sous ta puissance ? [22] Tu es le maître de ma carcasse ; prends-la. [23] Tu n'as aucun pouvoir sur moi. »",
	source: "Épictète, <em>Entretiens</em>, livre 1, 52, in <em>Les stoïciens</em>, P.U.F., coll. Les grands textes, p.14"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Sénèque", "Épictète", "Marc Aurèle"],
		correct: 2,
		explanation: "Le texte est extrait des *Entretiens* (ou *Discours*) du philosophe stoïcien Épictète."
	},
	{
		question: "Question n°2 : Quel est le thème central de ce dialogue ?",
		answers: ["La justice", "La liberté", "La technique"],
		correct: 2,
		explanation: "Le dialogue oppose la prétention de pouvoir du tyran à l'affirmation inviolable de la liberté intérieure du philosophe."
	},
	{
		question: "Question n°3 : Quelle est l'affirmation initiale du tyran ?",
		answers: ["Je suis le maître, je peux tout", "Je suis le plus sage des hommes", "Je crains les dieux"],
		correct: 1,
		explanation: "Le tyran ouvre le dialogue par une prétention de toute-puissance : « Je suis le maître, je peux tout »."
	},
	{
		question: "Question n°4 : Quelle est la première question rhétorique du philosophe pour tester ce pouvoir ?",
		answers: ["Peux-tu me donner de l'or ?", "Peux-tu te donner un bon esprit ?", "Peux-tu vaincre la mort ?"],
		correct: 2,
		explanation: "Épictète demande : « Peux-tu te donner un bon esprit ? », visant l'impuissance du tyran sur sa propre vertu."
	},
	{
		question: "Question n°5 : Que répond le philosophe à la menace de perdre sa liberté ?",
		answers: ["Qu'il a peur", "Qu'il est impossible de la lui ôter", "Qu'il la lui donne volontiers"],
		correct: 2,
		explanation: "Il rétorque par une autre question : « Peux-tu m'ôter ma liberté ? », sous-entendant que c'est impossible."
	},
	{
		question: "Question n°6 : À qui le tyran dépend-il sur un vaisseau, selon le philosophe ?",
		answers: ["Au propriétaire du vaisseau", "Au pilote", "Aux passagers"],
		correct: 2,
		explanation: "« Sur un vaisseau, ne dépends-tu pas du pilote ? » illustre les limites du pouvoir du tyran."
	},
	{
		question: "Question n°7 : À qui le tyran dépend-il sur son char ?",
		answers: ["Au cocher", "Au forgeron", "Au cheval"],
		correct: 1,
		explanation: "« Sur ton char, ne dépends-tu pas du cocher ? » renforce l'idée que le tyran est soumis à des compétences techniques externes."
	},
	{
		question: "Question n°8 : Quel argument le tyran avance-t-il pour prouver sa puissance ?",
		answers: ["Sa richesse", "Le fait que tout le monde lui fait la cour", "Sa force physique"],
		correct: 2,
		explanation: "Le tyran dit : « Tout le monde me fait la cour »."
	},
	{
		question: "Question n°9 : Quelle distinction le philosophe introduit-il concernant cette « cour » ?",
		answers: ["Est-ce une cour sincère ou forcée ?", "Te la fait-on comme à un homme ?", "Est-ce une cour dangereuse ?"],
		correct: 2,
		explanation: "Épictète demande : « Mais te la fait-on comme à un homme ? », remettant en cause la valeur humaine de cette flatterie."
	},
	{
		question: "Question n°10 : Quel philosophe est cité comme modèle d'imitation véritable ?",
		answers: ["Platon", "Aristote", "Socrate"],
		correct: 3,
		explanation: "Le philosophe défie le tyran de montrer quelqu'un qui voudrait « marcher sur tes traces comme sur celles de Socrate »."
	},
	{
		question: "Question n°11 : Quelle est la menace ultime du tyran ?",
		answers: ["L'exil", "La confiscation des biens", "Faire couper le cou"],
		correct: 3,
		explanation: "Le tyran menace de mort : « Mais je puis te faire couper le cou »."
	},
	{
		question: "Question n°12 : Quelle est la réaction immédiate et ironique du philosophe à cette menace ?",
		answers: ["Il supplie", "Tu parles bien", "Il rit aux éclats"],
		correct: 2,
		explanation: "Il répond avec un calme ironique : « Tu parles bien », reconnaissant la factualité de la menace sans lui accorder de pouvoir moral."
	},
	{
		question: "Question n°13 : À quoi le philosophe compare-t-il le tyran ?",
		answers: ["À un roi légitime", "À des dieux nuisibles et à la fièvre", "À un animal sauvage"],
		correct: 2,
		explanation: "Il dit qu'il faut lui faire la cour « comme aux dieux nuisibles, et t'offrir des sacrifices comme à la fièvre »."
	},
	{
		question: "Question n°14 : Quel fait historique concernant la fièvre est mentionné ?",
		answers: ["Elle a un autel à Rome", "Elle est incurable", "Elle est envoyée par Zeus"],
		correct: 1,
		explanation: "Le philosophe rappelle : « N'a-t-elle pas un autel à Rome ? » (référence au culte de la déesse Febris)."
	},
	{
		question: "Question n°15 : Pourquoi le tyran mérite-t-il plus ce culte que la fièvre ?",
		answers: ["Car il est plus riche", "Car il est plus malfaisant", "Car il est plus puissant"],
		correct: 2,
		explanation: "« Tu le mérites plus qu'elle, car tu es plus malfaisant »."
	},
	{
		question: "Question n°16 : Qui est troublé par les « satellites » et la « pompe » du tyran ?",
		answers: ["Le philosophe", "La vile populace", "Les autres tyrans"],
		correct: 2,
		explanation: "Ces apparats « effraient et troublent la vile populace », mais pas le sage."
	},
	{
		question: "Question n°17 : Par qui le philosophe peut-il être troublé ?",
		answers: ["Par les dieux", "Par lui-même uniquement", "Par le tyran"],
		correct: 2,
		explanation: "C'est un principe stoïcien fondamental : « je ne puis être troublé que par moi-même »."
	},
	{
		question: "Question n°18 : Que déclare le philosophe face aux menaces ?",
		answers: ["Qu'il a peur", "Qu'il est libre", "Qu'il est résigné"],
		correct: 2,
		explanation: "Il affirme avec force : « Tu as beau me menacer, je te dis que je suis libre »."
	},
	{
		question: "Question n°19 : Selon le philosophe, qui l'a affranchi ?",
		answers: ["La loi romaine", "La divinité même", "Son propre effort"],
		correct: 2,
		explanation: "Il attribue sa liberté à une source transcendante : « C'est la divinité même qui m'a affranchi »."
	},
	{
		question: "Question n°20 : Quel lien familial le philosophe revendique-t-il avec la divinité ?",
		answers: ["Celui d'esclave", "Celui de fils", "Celui d'étranger"],
		correct: 2,
		explanation: "Il demande : « Penses-tu qu'elle souffre que son fils tombe sous ta puissance ? »"
	},
	{
		question: "Question n°21 : Que signifie le terme « carcasse » dans ce contexte ?",
		answers: ["Le corps physique, distinct du moi véritable", "Un objet sans valeur", "Une insulte au tyran"],
		correct: 1,
		explanation: "La « carcasse » désigne le corps matériel, considéré comme un « indifférent » que le tyran peut détruire, mais qui n'est pas l'essence de la personne."
	},
	{
		question: "Question n°22 : Quelle est la conclusion du philosophe sur le pouvoir du tyran ?",
		answers: ["Il est absolu", "Il est nul sur le moi véritable", "Il est partagé"],
		correct: 2,
		explanation: "« Tu n'as aucun pouvoir sur moi » résume l'invulnérabilité de la sphère intérieure."
	},
	{
		question: "Question n°23 : Que désignent les « satellites » du tyran ?",
		answers: ["Des astres", "Des gardes ou des sbires", "Des conseillers sages"],
		correct: 2,
		explanation: "Les satellites sont les hommes de main ou la garde armée qui entourent le tyran pour le protéger et intimider."
	},
	{
		question: "Question n°24 : Quelle figure de style domine les répliques du philosophe ?",
		answers: ["La métaphore", "La question rhétorique", "L'hyperbole"],
		correct: 2,
		explanation: "Épictète utilise abondamment la question rhétorique pour mettre le tyran en contradiction avec ses propres affirmations."
	},
	{
		question: "Question n°25 : Quel concept stoïcien est au cœur de ce dialogue ?",
		answers: ["L'ataraxie", "La dichotomie du contrôle", "L'atomisme"],
		correct: 2,
		explanation: "La distinction entre ce qui dépend de nous (la liberté, le jugement) et ce qui n'en dépend pas (le corps, la vie) est centrale."
	},
	{
		question: "Question n°26 : Pourquoi la comparaison avec Socrate est-elle pertinente ?",
		answers: ["Socrate était un tyran", "Socrate incarne le philosophe qui a choisi la mort plutôt que de renier sa liberté intérieure", "Socrate aimait la flatterie"],
		correct: 2,
		explanation: "Socrate est le modèle du sage qui reste libre et digne face à la condamnation à mort, contrairement au tyran qui inspire la crainte, pas l'admiration."
	},
	{
		question: "Question n°27 : Que révèle l'expression « vile populace » sur le regard du philosophe ?",
		answers: ["Un mépris de classe sociale", "Une critique de ceux qui se laissent intimider par les apparences du pouvoir", "Une haine du peuple"],
		correct: 2,
		explanation: "La « vilenie » ici est morale et intellectuelle : c'est la facilité à être troublé par des menaces extérieures au lieu de se fier à sa propre raison."
	},
	{
		question: "Question n°28 : En quoi la réponse « Tu parles bien » est-elle ironique ?",
		answers: ["Elle est sincère", "Elle feint d'approuver la menace pour mieux en souligner l'absurdité morale", "Elle est une erreur de traduction"],
		correct: 2,
		explanation: "C'est une ironie mordante : le philosophe reconnaît la capacité physique du tyran à tuer, mais la vide de toute valeur intimidante."
	},
	{
		question: "Question n°29 : Que symbolise l'autel de la fièvre à Rome ?",
		answers: ["La puissance de la médecine", "L'absurdité d'adorer par peur ce qui nous fait du mal", "La piété romaine"],
		correct: 2,
		explanation: "Cela illustre comment la peur pousse les hommes à honorer des forces nuisibles, ce que le tyran exige également."
	},
	{
		question: "Question n°30 : Quelle est la nature de la liberté selon ce texte ?",
		answers: ["Politique et juridique", "Intérieure, morale et inviolable", "Illusoire"],
		correct: 2,
		explanation: "La liberté n'est pas l'absence de chaînes physiques, mais l'autonomie du jugement que personne ne peut contraindre."
	},
	{
		question: "Question n°31 : Pourquoi le tyran dépend-il du pilote ou du cocher ?",
		answers: ["Parce qu'il est incompétent", "Pour montrer que son pouvoir est limité par des nécessités techniques et externes", "Parce qu'il est esclave"],
		correct: 2,
		explanation: "Cela démontre que le tyran n'est pas « maître de tout », mais dépendant d'experts pour des tâches spécifiques."
	},
	{
		question: "Question n°32 : Que signifie « marcher sur tes traces » ?",
		answers: ["Suivre physiquement", "Prendre pour modèle et imiter la conduite morale", "Être un disciple formel"],
		correct: 2,
		explanation: "Cela signifie vouloir adopter les mêmes valeurs et le même mode de vie exemplaire."
	},
	{
		question: "Question n°33 : Quel est le ton général du philosophe dans ce dialogue ?",
		answers: ["Suppliant et craintif", "Calme, ironique et didactique", "Colérique et violent"],
		correct: 2,
		explanation: "Épictète garde son sang-froid, utilise l'ironie et enseigne une leçon de morale au tyran."
	},
	{
		question: "Question n°34 : Quelle est la faiblesse du tyran mise en lumière par le texte ?",
		answers: ["Son manque d'argent", "Sa dépendance à la peur qu'il inspire et son incapacité à se maîtriser lui-même", "Sa mauvaise santé"],
		correct: 2,
		explanation: "Le tyran a besoin de « satellites » et de « pompe » pour effrayer, ce qui révèle sa propre insécurité et son manque de véritable autorité morale."
	},
	{
		question: "Question n°35 : En quoi ce texte est-il autobiographique pour Épictète ?",
		answers: ["Il a été tyran", "Il a été esclave, ce qui rend son discours sur la liberté intérieure d'autant plus puissant", "Il a été pilote"],
		correct: 2,
		explanation: "Épictète a été esclave avant d'être affranchi, ce qui donne un poids existentiel majeur à sa définition de la liberté."
	},
	{
		question: "Question n°36 : Que signifie « je ne puis être troublé que par moi-même » ?",
		answers: ["Je suis paranoïaque", "Mes jugements et mes assentiments sont la seule source de mes troubles", "Je suis seul au monde"],
		correct: 2,
		explanation: "C'est le principe stoïcien selon lequel ce ne sont pas les choses qui nous troublent, mais l'opinion que nous en avons."
	},
	{
		question: "Question n°37 : Quel est le rôle de la divinité dans la liberté du philosophe ?",
		answers: ["Elle le protège physiquement", "Elle lui a donné la raison, le rendant libre par nature", "Elle punit le tyran"],
		correct: 2,
		explanation: "La divinité a donné à l'homme la raison (le « bon esprit »), qui est la source de sa liberté inaliénable."
	},
	{
		question: "Question n°38 : Pourquoi le philosophe dit-il « prends-la » en parlant de sa carcasse ?",
		answers: ["Parce qu'il est suicidaire", "Parce que le corps est un « indifférent » qui n'affecte pas la valeur morale de la personne", "Parce qu'il n'aime pas son corps"],
		correct: 2,
		explanation: "Le corps est extérieur au moi véritable (la *prohairesis* ou faculté de choix) ; le perdre n'est pas une vraie perte pour le sage."
	},
	{
		question: "Question n°39 : Quelle est la structure logique de l'argumentation du philosophe ?",
		answers: ["Une simple affirmation", "Une réfutation par l'absurde, des analogies, et une distinction ontologique (corps/esprit)", "Un syllogisme formel"],
		correct: 2,
		explanation: "Il déconstruit la prétention du tyran par des questions, des images, puis établit la distinction radicale entre le corps et la liberté intérieure."
	},
	{
		question: "Question n°40 : Que nous apprend ce texte sur la notion de « maître » ?",
		answers: ["Le tyran est le seul maître", "Le vrai maître est celui qui se maîtrise lui-même, non celui qui domine les autres", "Il n'y a pas de maître"],
		correct: 2,
		explanation: "Le tyran prétend être maître, mais il est esclave de ses passions et de la peur qu'il doit entretenir ; le philosophe est le vrai maître de lui-même."
	},
	{
		question: "Question n°41 : En quoi la flatterie (« faire la cour ») est-elle un signe de faiblesse pour le tyran ?",
		answers: ["Elle montre qu'il a besoin de validation externe et qu'il n'est pas respecté pour sa vertu", "Elle est agréable", "Elle est obligatoire"],
		correct: 1,
		explanation: "La vraie grandeur (comme celle de Socrate) inspire l'émulation, tandis que la tyrannie n'inspire que la flatterie intéressée ou forcée."
	},
	{
		question: "Question n°42 : Que signifie le mot « affranchi » dans ce contexte ?",
		answers: ["Libéré de l'esclavage juridique uniquement", "Libéré des passions et des illusions par la raison divine", "Libéré de ses devoirs"],
		correct: 2,
		explanation: "C'est une libération spirituelle et morale, bien plus profonde que la simple libération juridique."
	},
	{
		question: "Question n°43 : Quelle est la portée universelle de ce dialogue ?",
		answers: ["Il ne concerne que l'Antiquité", "Il s'applique à toute situation où un pouvoir extérieur tente d'opprimer la conscience individuelle", "Il est purement fictionnel"],
		correct: 2,
		explanation: "Le dialogue oppose éternellement le pouvoir coercitif à l'intégrité morale, un enjeu universel."
	},
	{
		question: "Question n°44 : Que révèle l'expression « bon esprit » ?",
		answers: ["L'intelligence technique", "La vertu, la sagesse et la rectitude du jugement", "La bonne humeur"],
		correct: 2,
		explanation: "Le « bon esprit » (ou la droite raison) est le bien suprême que le tyran est incapable de se donner ou d'ôter."
	},
	{
		question: "Question n°45 : Pourquoi le tyran est-il comparé à une maladie (la fièvre) ?",
		answers: ["Parce qu'il est contagieux", "Parce qu'il est une force nuisible que l'on subit et que l'on cherche à apaiser par peur", "Parce qu'il est faible"],
		correct: 2,
		explanation: "On « offre des sacrifices » à la fièvre non par amour, mais par terreur de ses ravages, tout comme on flatte le tyran."
	},
	{
		question: "Question n°46 : En quoi ce texte illustre-t-il la « forteresse intérieure » du stoïcisme ?",
		answers: ["Il décrit un château fort", "Il montre que le jugement du sage est un refuge imprenable par les forces extérieures", "Il parle de retraite spirituelle"],
		correct: 2,
		explanation: "Le tyran peut atteindre le corps, mais il se heurte à une muraille infranchissable lorsqu'il tente d'atteindre la liberté du jugement."
	},
	{
		question: "Question n°47 : Que signifie « Tu n'as aucun pouvoir sur moi » ?",
		answers: ["Une négation de la réalité physique", "Une affirmation que l'essence de l'être (la volonté) échappe à toute emprise extérieure", "Une fanfaronnade"],
		correct: 2,
		explanation: "C'est la conclusion logique de la dichotomie du contrôle : le tyran n'a de pouvoir que sur les « indifférents », pas sur le moi moral."
	},
	{
		question: "Question n°48 : Quel est le rôle du lecteur face à ce dialogue ?",
		answers: ["Juger le tyran", "S'identifier au philosophe et apprendre à distinguer ce qui dépend de lui", "Rire du tyran"],
		correct: 2,
		explanation: "Le texte est une exhortation (protreptique) invitant le lecteur à adopter cette même attitude de liberté intérieure."
	},
	{
		question: "Question n°49 : En quoi la mort n'est-elle pas un mal pour le philosophe dans ce texte ?",
		answers: ["Parce qu'il ne croit pas à la vie après la mort", "Parce que la mort ne concerne que la « carcasse », pas la liberté morale", "Parce qu'il est immortel"],
		correct: 2,
		explanation: "La mort est un « indifférent » ; elle ne peut pas atteindre la vertu ou la liberté, qui sont les seuls véritables biens."
	},
	{
		question: "Question n°50 : Quelle est la thèse globale de cet extrait ?",
		answers: ["Le tyran est tout-puissant", "La véritable liberté est une conquête intérieure, donnée par la raison divine, qu'aucune menace physique ne peut atteindre ou détruire", "Il faut obéir au tyran pour survivre"],
		correct: 2,
		explanation: "Le texte démontre que la liberté ne réside pas dans l'absence de contraintes extérieures, mais dans la maîtrise absolue de son propre jugement face à ces contraintes."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "La véritable liberté face à la tyrannie (Épictète)" },
		{ key: 1, parent: 0, text: "La prétention du tyran" },
		{ key: 2, parent: 1, text: "[1] « Je suis le maître, je peux tout »" },
		{ key: 3, parent: 1, text: "[8] Tout le monde lui fait la cour" },
		{ key: 4, parent: 1, text: "[11] Menace ultime : faire couper le cou" },
		{ key: 5, parent: 0, text: "La réfutation du philosophe" },
		{ key: 6, parent: 5, text: "[3-4] Questions sur le pouvoir réel (bon esprit, liberté)" },
		{ key: 7, parent: 5, text: "[6-7] Analogies de la dépendance (pilote, cocher)" },
		{ key: 8, parent: 5, text: "[10] Comparaison défavorable avec Socrate" },
		{ key: 9, parent: 5, text: "[13-15] Ironie : le tyran comparé à la fièvre (malfaisant)" },
		{ key: 10, parent: 0, text: "La nature de la vraie liberté" },
		{ key: 11, parent: 10, text: "[16] Je ne puis être troublé que par moi-même" },
		{ key: 12, parent: 10, text: "[20] Affranchi par la divinité même" },
		{ key: 13, parent: 10, text: "[22-23] Distinction corps/esprit : maître de la carcasse, aucun pouvoir sur moi" }
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
			origine: "Épictète, Entretiens, livre 1, 52",
			theme: "La liberté",
			these: "La véritable liberté est une conquête intérieure et morale, donnée par la raison divine, qu'aucun tyran, aussi puissant soit-il physiquement, ne peut atteindre ou détruire, car son pouvoir se limite au corps (la « carcasse »), qui n'est pas le moi véritable.",
			interet: "Ce dialogue est une illustration magistrale de la dichotomie du contrôle, cœur de l'éthique stoïcienne. Il oppose la puissance illusoire et externe de la tyrannie, qui repose sur la peur et la flatterie, à la forteresse inviolable de la conscience morale. Il redéfinit la liberté non comme une absence de contraintes physiques, mais comme une autonomie absolue du jugement.",
			problematique: "En quoi la confrontation entre le tyran et le philosophe révèle-t-elle que la véritable liberté est une invulnérabilité intérieure, totalement indépendante des menaces et des pouvoirs extérieurs ?"
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
			"text": "DÉBUT\nAffirmation du tyran :\n« Je suis le maître,\nje peux tout. »",
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
			"text": "TEST DU POUVOIR :\nLe philosophe interroge\nles limites de ce pouvoir\n(bon esprit, liberté,\ndépendance au pilote/cocher).",
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
			"text": "MENACE :\nLe tyran brandit son\nultime argument :\n« Je puis te faire\ncouper le cou. »",
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
			"text": "RÉPONSE STOÏCIENNE :\nIronie (culte de la fièvre)\net distinction radicale\ncorps (carcasse) / esprit.",
			"loc": "760.53 259.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "5",
			"text": "AFFIRMATION\nDE LA LIBERTÉ :\n« Je ne puis être\ntroublé que par\nmoi-même. »",
			"loc": "1034.36 120",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "6",
			"text": "FIN\nConclusion inviolable :\n« Tu es le maître de ma\ncarcasse [...]\nTu n'as aucun pouvoir\nsur moi. »",
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
			"fromSide": "bottom",
			"toSide": "top"
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