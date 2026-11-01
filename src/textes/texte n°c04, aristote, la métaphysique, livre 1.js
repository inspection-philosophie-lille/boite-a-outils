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
const sousTitre = "Tester ses connaissances sur un texte d'Aristote (La Métaphysique)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [Philosophie :] [1] Ce doit être en effet la science théorique des premiers principes et des premières causes, car le bien, c’est-à-dire la fin, est l’une de ces causes. [2] Qu’elle ne soit pas une science poétique, c’est ce que montre l’histoire des premiers philosophes. [3] Ce fut en effet l’étonnement qui poussa les hommes, autrefois comme aujourd’hui, à philosopher. [4] Au début, ce furent les difficultés les plus apparentes qui les étonnèrent. [5] Ensuite, s’avançant peu à peu, ils cherchèrent à résoudre des problèmes plus importants, tels que les mouvements de la lune, du soleil et des étoiles, enfin la genèse de l’univers. [6] Apercevoir une difficulté et s’étonner, c’est reconnaître son ignorance, et c’est pourquoi aimer les mythes est en quelque manière aimer la sagesse, car le mythe est composé de choses étonnantes. [7] Ainsi donc, si ce fut pour fuir l’ignorance que les hommes philosophèrent, il est clair qu’ils poursuivaient la science en vue de connaître et non dans un but utilitaire. »",
	source: "Aristote, <em>La Métaphysique</em>, Livre I, p.61 (trad. Roger Verneaux)"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Platon", "Aristote", "Socrate"],
		correct: 2,
		explanation: "Le texte est extrait de *La Métaphysique*, œuvre majeure d'Aristote, ici dans la traduction de Roger Verneaux."
	},
	{
		question: "Question n°2 : De quelle œuvre précise ce texte est-il tiré ?",
		answers: ["L'Éthique à Nicomaque", "La Politique", "La Métaphysique"],
		correct: 3,
		explanation: "La source indique explicitement *La Métaphysique*, Livre I. Ce livre traite des causes premières et de la nature de la sagesse."
	},
	{
		question: "Question n°3 : Selon le texte, la philosophie est d'abord définie comme une science...",
		answers: ["Pratique", "Poétique", "Théorique"],
		correct: 3,
		explanation: "Le texte affirme dès la première phrase : « Ce doit être en effet la science théorique des premiers principes et des premières causes »."
	},
	{
		question: "Question n°4 : Quel est l'objet d'étude de cette science théorique ?",
		answers: ["Les opinions des hommes", "Les premiers principes et les premières causes", "Les règles de la vie politique"],
		correct: 2,
		explanation: "Aristote précise que la philosophie théorique porte sur les fondements ultimes de la réalité : « les premiers principes et des premières causes »."
	},
	{
		question: "Question n°5 : Comment Aristote identifie-t-il « le bien » dans ce passage ?",
		answers: ["Comme une illusion", "Comme l'une des causes (la fin)", "Comme une simple opinion"],
		correct: 2,
		explanation: "Le texte dit : « car le bien, c’est-à-dire la fin, est l’une de ces causes ». Il s'agit de la cause finale."
	},
	{
		question: "Question n°6 : Que nie Aristote concernant la nature de la philosophie ?",
		answers: ["Qu'elle soit une science poétique", "Qu'elle soit une science théorique", "Qu'elle soit une recherche de la vérité"],
		correct: 1,
		explanation: "Il affirme : « Qu’elle ne soit pas une science poétique, c’est ce que montre l’histoire des premiers philosophes »."
	},
	{
		question: "Question n°7 : Que signifie « science poétique » dans le vocabulaire aristotélicien ?",
		answers: ["L'étude des poèmes et de la littérature", "Une science productive, visant à fabriquer ou produire quelque chose", "Une science basée sur l'imagination"],
		correct: 2,
		explanation: "Chez Aristote, la « poïétique » (de *poiesis*, faire) désigne les savoirs productifs (comme l'artisanat), par opposition au savoir théorique (contemplatif) ou pratique (l'action morale)."
	},
	{
		question: "Question n°8 : Quelle preuve Aristote avance-t-il pour montrer que la philosophie n'est pas une science poétique ?",
		answers: ["La logique formelle", "L'histoire des premiers philosophes", "L'autorité des dieux"],
		correct: 2,
		explanation: "Il écrit : « c’est ce que montre l’histoire des premiers philosophes », faisant appel à l'observation historique de l'émergence de la pensée."
	},
	{
		question: "Question n°9 : Quel est le moteur psychologique qui pousse les hommes à philosopher ?",
		answers: ["La peur", "L'étonnement", "La cupidité"],
		correct: 2,
		explanation: "Le texte est célèbre pour cette affirmation : « Ce fut en effet l’étonnement qui poussa les hommes [...] à philosopher »."
	},
	{
		question: "Question n°10 : Cette poussée de l'étonnement est-elle limitée à une époque ?",
		answers: ["Oui, uniquement dans l'Antiquité", "Non, elle vaut « autrefois comme aujourd'hui »", "Oui, uniquement à l'époque moderne"],
		correct: 2,
		explanation: "Aristote universalise ce phénomène : « autrefois comme aujourd'hui », montrant que l'étonnement est une constante de la nature humaine."
	},
	{
		question: "Question n°11 : Par quoi les premiers hommes ont-ils été étonnés au début ?",
		answers: ["Par les mystères de l'âme", "Par les difficultés les plus apparentes", "Par les lois de la cité"],
		correct: 2,
		explanation: "Le texte précise : « Au début, ce furent les difficultés les plus apparentes qui les étonnèrent »."
	},
	{
		question: "Question n°12 : Comment décrit-il la progression de la recherche philosophique ?",
		answers: ["Par des révolutions brutales", "En s'avançant peu à peu", "Par des révélations divines soudaines"],
		correct: 2,
		explanation: "Il utilise l'expression « s’avançant peu à peu », soulignant le caractère progressif et cumulatif de la quête du savoir."
	},
	{
		question: "Question n°13 : Quels exemples de « problèmes plus importants » sont cités ?",
		answers: ["La gestion des affaires publiques", "Les mouvements de la lune, du soleil et des étoiles", "Les techniques agricoles"],
		correct: 2,
		explanation: "Le texte mentionne explicitement les phénomènes cosmiques : « les mouvements de la lune, du soleil et des étoiles »."
	},
	{
		question: "Question n°14 : Quel est le problème ultime mentionné à la fin de cette progression ?",
		answers: ["La mort de l'individu", "La genèse de l'univers", "La nature du langage"],
		correct: 2,
		explanation: "Après les astres, la quête aboutit à la question la plus vaste : « enfin la genèse de l’univers »."
	},
	{
		question: "Question n°15 : Que signifie « apercevoir une difficulté et s’étonner » ?",
		answers: ["Reconnaître son ignorance", "Prouver sa supériorité intellectuelle", "Abandonner la recherche"],
		correct: 1,
		explanation: "Aristote établit une équivalence : « Apercevoir une difficulté et s’étonner, c’est reconnaître son ignorance »."
	},
	{
		question: "Question n°16 : Quel lien Aristote établit-il entre le mythe et la sagesse ?",
		answers: ["Ils sont totalement opposés", "Aimer les mythes est en quelque manière aimer la sagesse", "Le mythe est l'ennemi de la sagesse"],
		correct: 2,
		explanation: "Il nuance le rapport au mythe : « aimer les mythes est en quelque manière aimer la sagesse »."
	},
	{
		question: "Question n°17 : Pourquoi aimer les mythes est-il une forme d'amour de la sagesse ?",
		answers: ["Parce que les mythes sont des vérités scientifiques", "Parce que le mythe est composé de choses étonnantes", "Parce que les mythes sont utiles politiquement"],
		correct: 2,
		explanation: "La justification est donnée immédiatement : « car le mythe est composé de choses étonnantes », partageant ainsi la même racine (l'étonnement) que la philosophie."
	},
	{
		question: "Question n°18 : Selon la conclusion du texte, pourquoi les hommes ont-ils philosophé ?",
		answers: ["Pour devenir riches", "Pour fuir l'ignorance", "Pour dominer la nature"],
		correct: 2,
		explanation: "La phrase finale reprend la prémisse : « si ce fut pour fuir l’ignorance que les hommes philosophèrent »."
	},
	{
		question: "Question n°19 : Dans quel but les hommes poursuivent-ils la science, selon ce texte ?",
		answers: ["En vue de connaître", "Dans un but utilitaire", "Pour impressionner les autres"],
		correct: 1,
		explanation: "Aristote conclut : « ils poursuivaient la science en vue de connaître »."
	},
	{
		question: "Question n°20 : Quel type de but est explicitement rejeté pour la philosophie ?",
		answers: ["Le but esthétique", "Le but utilitaire", "Le but théorique"],
		correct: 2,
		explanation: "La phrase se termine par une exclusion nette : « et non dans un but utilitaire »."
	},
	{
		question: "Question n°21 : Que révèle le terme « en effet » au début du texte ?",
		answers: ["Une contradiction", "Une justification ou une explication d'une thèse précédente", "Une hypothèse incertaine"],
		correct: 2,
		explanation: "« En effet » marque que cette phrase vient justifier ou préciser une affirmation faite juste avant dans le texte original d'Aristote."
	},
	{
		question: "Question n°22 : Que signifie « la fin » dans l'expression « le bien, c’est-à-dire la fin » ?",
		answers: ["La mort", "Le but ou la finalité (cause finale)", "La limite spatiale"],
		correct: 2,
		explanation: "En philosophie aristotélicienne, la « fin » (telos) désigne le but pour lequel une chose existe ou est faite, c'est la cause finale."
	},
	{
		question: "Question n°23 : Pourquoi la philosophie n'a-t-elle pas de but utilitaire selon ce passage ?",
		answers: ["Parce qu'elle est trop difficile", "Parce qu'elle naît du désir de savoir pour lui-même, pour fuir l'ignorance", "Parce qu'elle est interdite par les lois"],
		correct: 2,
		explanation: "Son origine (l'étonnement) et son but (fuir l'ignorance) montrent qu'elle est une fin en soi, et non un moyen pour obtenir un avantage matériel."
	},
	{
		question: "Question n°24 : Que nous apprend ce texte sur la conception aristotélicienne de l'histoire de la philosophie ?",
		answers: ["Qu'elle est un déclin constant", "Qu'elle est une progression de l'étonnement face aux apparences vers la compréhension des causes cosmiques", "Qu'elle est cyclique et sans progrès"],
		correct: 2,
		explanation: "Le texte décrit un mouvement : des difficultés apparentes vers les problèmes plus importants (astres, genèse), montrant une maturation de la raison."
	},
	{
		question: "Question n°25 : En quoi ce texte fait-il écho à la pensée de Socrate ?",
		answers: ["Par l'importance donnée à la richesse", "Par l'idée que reconnaître son ignorance est le début de la sagesse", "Par le rejet de tout questionnement"],
		correct: 2,
		explanation: "L'idée que « s'étonner, c'est reconnaître son ignorance » reprend le célèbre « Je sais que je ne sais rien » socratique, point de départ de toute quête philosophique."
	},
	{
		question: "Question n°26 : Que désigne l'expression « premiers philosophes » ?",
		answers: ["Les philosophes des Lumières", "Les penseurs présocratiques et les premiers auteurs de mythes", "Les disciples immédiats d'Aristote"],
		correct: 2,
		explanation: "Aristote fait référence aux origines de la pensée grecque, incluant les auteurs de cosmogonies mythiques (comme Hésiode) et les premiers physiciens."
	},
	{
		question: "Question n°27 : Quel est le registre de ce texte ?",
		answers: ["Polémique et agressif", "Expositif, définitionnel et historique", "Poétique et métaphorique"],
		correct: 2,
		explanation: "Aristote définit, explique et retrace une genèse historique avec un ton calme, rationnel et pédagogique."
	},
	{
		question: "Question n°28 : Pourquoi la connaissance est-elle qualifiée de « science » ici ?",
		answers: ["Au sens moderne de sciences expérimentales", "Au sens d'epistémè : un savoir certain, démonstratif et organisé", "Au sens de croyance opinion"],
		correct: 2,
		explanation: "Le terme grec sous-jacent est *epistémè*, qui désigne un savoir structuré et certain, par opposition à la simple opinion (*doxa*)."
	},
	{
		question: "Question n°29 : Que signifie « choses étonnantes » dans le contexte du mythe ?",
		answers: ["Des faits scientifiques avérés", "Des récits merveilleux ou inexplicables qui suscitent la curiosité", "Des mensonges délibérés"],
		correct: 2,
		explanation: "Le mythe raconte des événements merveilleux (thaumasta) qui provoquent l'étonnement, même s'il ne les explique pas encore rationnellement."
	},
	{
		question: "Question n°30 : Quelle est la thèse centrale de cet extrait ?",
		answers: ["La philosophie est un art utile pour gagner de l'argent", "La philosophie est une science théorique, née de l'étonnement et de la volonté de fuir l'ignorance, visant la connaissance pour elle-même", "La philosophie doit remplacer la religion"],
		correct: 2,
		explanation: "C'est la synthèse de tout le passage : définition théorique, origine psychologique (étonnement/ignorance) et finalité désintéressée."
	},
	{
		question: "Question n°31 : Que implique le fait que la philosophie soit « théorique » ?",
		answers: ["Qu'elle est purement spéculative et détachée de l'action ou de la production", "Qu'elle est réservée aux théâtres", "Qu'elle est incertaine"],
		correct: 1,
		explanation: "Le « théorique » (de *theorein*, contempler) désigne l'activité de l'esprit qui contemple la vérité pour elle-même, sans viser à transformer ou fabriquer le monde."
	},
	{
		question: "Question n°32 : Comment Aristote justifie-t-il la dignité de la philosophie ?",
		answers: ["Par son utilité économique", "Par son objet (les premières causes) et son désintéressement", "Par son ancienneté uniquement"],
		correct: 2,
		explanation: "Sa dignité vient du fait qu'elle s'attaque aux causes les plus fondamentales et qu'elle est libre de toute servitude utilitaire."
	},
	{
		question: "Question n°33 : Que signifie « fuir l'ignorance » ?",
		answers: ["Éviter de réfléchir", "Se libérer de l'état de privation de savoir", "Fuir les philosophes"],
		correct: 2,
		explanation: "L'ignorance est vue comme un état négatif dont on cherche à s'extraire activement par la conquête du savoir."
	},
	{
		question: "Question n°34 : Pourquoi les mouvements des astres sont-ils cités comme « problèmes plus importants » ?",
		answers: ["Parce qu'ils sont proches de nous", "Parce qu'ils échappent à l'expérience immédiate et exigent une réflexion abstraite sur l'ordre du cosmos", "Parce qu'ils sont utiles à l'agriculture"],
		correct: 2,
		explanation: "Contrairement aux difficultés « apparentes » du quotidien, les astres représentent un ordre supérieur, régulier mais lointain, qui pousse la raison à s'abstraire du sensible immédiat."
	},
	{
		question: "Question n°35 : Quel est le rapport entre la cause finale (« le bien ») et la science théorique ?",
		answers: ["Ils s'excluent mutuellement", "La science théorique cherche à comprendre le bien comme l'une des causes premières de l'ordre du monde", "Le bien n'est pas une cause"],
		correct: 2,
		explanation: "Aristote inclut la cause finale (le bien) dans le champ de la science théorique, car comprendre le monde, c'est aussi comprendre sa finalité."
	},
	{
		question: "Question n°36 : Que révèle l'expression « en quelque manière » concernant le mythe ?",
		answers: ["Une identité totale entre mythe et philosophie", "Une parenté partielle et nuancée, sans les confondre", "Un rejet total du mythe"],
		correct: 2,
		explanation: "Aristote est prudent : le mythomane n'est pas un philosophe accompli, mais il partage avec lui la disposition à s'étonner, ce qui est un début de sagesse."
	},
	{
		question: "Question n°37 : Quelle faculté humaine est principalement mobilisée dans ce texte ?",
		answers: ["La sensibilité", "La raison (l'intellect)", "L'imagination créatrice"],
		correct: 2,
		explanation: "La recherche des causes, la compréhension de l'univers et la fuite de l'ignorance sont des actes de la raison."
	},
	{
		question: "Question n°38 : En quoi ce texte est-il une défense de la « connaissance désintéressée » ?",
		answers: ["Il dit qu'il ne faut rien payer pour apprendre", "Il affirme que la valeur de la connaissance réside en elle-même, pas dans ses applications pratiques", "Il critique les professeurs"],
		correct: 2,
		explanation: "En opposant « en vue de connaître » à « but utilitaire », Aristote fonde la valeur intrinsèque du savoir, indépendant de tout profit."
	},
	{
		question: "Question n°39 : Que signifie « genèse de l'univers » ?",
		answers: ["La fin du monde", "L'origine et la formation du cosmos", "La création de l'homme uniquement"],
		correct: 2,
		explanation: "La genèse (du grec *genesis*) désigne la naissance, l'origine ou la formation du monde (cosmogonie)."
	},
	{
		question: "Question n°40 : Quelle est la structure logique de ce passage ?",
		answers: ["Une simple énumération de faits", "Une définition, une preuve par l'histoire, une analyse psychologique, et une conclusion téléologique", "Un dialogue entre deux personnages"],
		correct: 2,
		explanation: "Le texte suit un enchaînement rigoureux : définition (1), preuve négative (2), origine historique et psychologique (3-6), conclusion sur la finalité (7)."
	},
	{
		question: "Question n°41 : Pourquoi l'étonnement est-il lié à l'ignorance ?",
		answers: ["Parce que l'étonnement naît d'un manque de compréhension face à un phénomène", "Parce que les ignorants sont toujours surpris", "Il n'y a aucun lien"],
		correct: 1,
		explanation: "On ne s'étonne que de ce qu'on ne comprend pas encore. L'étonnement est la prise de conscience active de ce manque de savoir."
	},
	{
		question: "Question n°42 : Que suggère le texte sur la nature humaine ?",
		answers: ["Qu'elle est naturellement paresseuse", "Qu'elle est naturellement désireuse de savoir", "Qu'elle est indifférente au monde"],
		correct: 2,
		explanation: "La première phrase de la Métaphysique (juste avant cet extrait) dit « Tous les hommes désirent naturellement savoir ». Ce texte le confirme par l'analyse de l'étonnement."
	},
	{
		question: "Question n°43 : En quoi la philosophie se distingue-t-elle de la technique (techne) ici ?",
		answers: ["La philosophie vise l'utilité, la technique non", "La philosophie vise la connaissance pour elle-même, la technique vise un but utilitaire", "Il n'y a aucune différence"],
		correct: 2,
		explanation: "Le rejet du « but utilitaire » pour la philosophie la distingue radicalement des savoir-faire techniques ou productifs (sciences poétiques)."
	},
	{
		question: "Question n°44 : Quel est le rôle de la conjonction « Ainsi donc » à la fin ?",
		answers: ["Introduire une nouvelle idée", "Marquer la conclusion logique déduite des prémices précédentes", "Exprimer un doute"],
		correct: 2,
		explanation: "« Ainsi donc » (ara en grec) marque la conclusion syllogistique : puisque l'origine est l'étonnement/ignorance, la fin ne peut être que la connaissance pour elle-même."
	},
	{
		question: "Question n°45 : Que signifie « difficultés les plus apparentes » ?",
		answers: ["Les problèmes les plus faciles à résoudre", "Les phénomènes qui se présentent d'abord à l'expérience sensible et commune", "Les erreurs des philosophes"],
		correct: 2,
		explanation: "Ce sont les paradoxes ou les mystères du quotidien qui frappent d'abord l'homme, avant qu'il ne s'élève à des questions plus abstraites."
	},
	{
		question: "Question n°46 : Pourquoi Aristote mentionne-t-il « la lune, du soleil et des étoiles » ?",
		answers: ["Pour faire de l'astronomie pratique", "Pour illustrer le passage du proche (difficultés apparentes) au lointain et universel (cosmos)", "Parce qu'il était astronome"],
		correct: 2,
		explanation: "C'est un exemple de la progression de la pensée : quitter le terrestre immédiat pour contempler l'ordre éternel et divin des cieux."
	},
	{
		question: "Question n°47 : En quoi ce texte est-il fondateur pour la définition de la métaphysique ?",
		answers: ["Il la définit comme l'étude des causes premières et de l'être en tant qu'être, de manière désintéressée", "Il la définit comme une science de la nature", "Il la rejette comme inutile"],
		correct: 1,
		explanation: "Ce passage est l'un des plus cités pour définir la métaphysique comme la science la plus haute, car la plus désintéressée et la plus fondamentale."
	},
	{
		question: "Question n°48 : Que nous dit ce texte sur la valeur du mythe ?",
		answers: ["Qu'il est une erreur à effacer", "Qu'il est une première ébauche, imparfaite mais noble, de la quête philosophique", "Qu'il est supérieur à la science"],
		correct: 2,
		explanation: "Aristote ne méprise pas le mythe ; il y voit une manifestation primitive du même désir de comprendre l'étonnant qui anime le philosophe."
	},
	{
		question: "Question n°49 : Quelle est la portée de l'expression « autrefois comme aujourd'hui » ?",
		answers: ["Elle limite la philosophie à deux époques", "Elle affirme l'intemporalité et l'universalité de la démarche philosophique", "Elle montre que les anciens étaient meilleurs"],
		correct: 2,
		explanation: "L'étonnement n'est pas un phénomène historique dépassé, mais une structure permanente de l'esprit humain face au monde."
	},
	{
		question: "Question n°50 : Quelle est la leçon morale ou existentielle de ce texte ?",
		answers: ["Il faut chercher à être utile à tout prix", "La plus haute liberté de l'homme réside dans la contemplation désintéressée de la vérité", "Il faut croire aux mythes sans réfléchir"],
		correct: 2,
		explanation: "En montrant que la philosophie est libre de toute utilité, Aristote en fait l'activité la plus libre et la plus digne de l'homme, celle qui réalise sa nature rationnelle."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "Nature et origine de la philosophie" },
		{ key: 1, parent: 0, text: "Définition" },
		{ key: 2, parent: 1, text: "[1] Science théorique" },
		{ key: 3, parent: 1, text: "[1] Étude des premiers principes et causes" },
		{ key: 4, parent: 1, text: "[1] Le bien (la fin) est une de ces causes" },
		{ key: 5, parent: 0, text: "Ce qu'elle n'est pas" },
		{ key: 6, parent: 5, text: "[2] Pas une science poétique (productive)" },
		{ key: 7, parent: 5, text: "[7] Pas de but utilitaire" },
		{ key: 8, parent: 0, text: "Origine psychologique et historique" },
		{ key: 9, parent: 8, text: "[3] L'étonnement (autrefois comme aujourd'hui)" },
		{ key: 10, parent: 8, text: "[4] Début : difficultés apparentes" },
		{ key: 11, parent: 8, text: "[5] Progrès : problèmes cosmiques (lune, soleil, genèse)" },
		{ key: 12, parent: 8, text: "[6] Mythe : amour des choses étonnantes" },
		{ key: 13, parent: 0, text: "Finalité" },
		{ key: 14, parent: 13, text: "[6] Reconnaître son ignorance" },
		{ key: 15, parent: 13, text: "[7] Fuir l'ignorance" },
		{ key: 16, parent: 13, text: "[7] Poursuivre la science en vue de connaître (désintéressement)" }
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
			origine: "Aristote, La Métaphysique, Livre I, p.61 (trad. Roger Verneaux)",
			theme: "La vérité",
			these: "La philosophie est une science théorique née de l'étonnement et du désir de fuir l'ignorance, dont le but est la connaissance désintéressée des premiers principes et des premières causes, et non l'utilité pratique.",
			interet: "Ce texte est fondamental car il définit l'essence même de la démarche philosophique : partir de l'étonnement face aux difficultés apparentes pour s'élever progressivement vers la compréhension des causes premières. Il établit la noblesse de la quête de la vérité en la distinguant radicalement de toute préoccupation utilitaire ou productive (science poétique).",
			problematique: "En quoi l'étonnement, en tant que prise de conscience de notre ignorance, fonde-t-il la philosophie comme une quête désintéressée de la vérité et des causes premières, plutôt que comme un savoir à visée utilitaire ?"
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
			"text": "DÉBUT\nQu'est-ce que la philosophie ?",
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
			"text": "Est-ce une science\npoétique ou utilitaire ?",
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
			"text": "[1-2] NON :\nC'est une science théorique\ndes premiers principes\net des premières causes.",
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
			"text": "Quelle est son origine ?",
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
			"text": "[3-5] L'ÉTONNEMENT :\nD'abord face aux difficultés\napparentes, puis aux\nproblèmes cosmiques\n(lune, soleil, genèse).",
			"loc": "760.53 259.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 120,
			"revealed": true
		},
		{
			"key": "6",
			"text": "Que signifie s'étonner ?",
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
			"text": "[6] C'est reconnaître\nson ignorance.\n(Lien avec le mythe\nqui aime l'étonnant).",
			"loc": "1034.36 266.25",
			"category": "rectangle",
			"color": "#a3bffa",
			"borderColor": "#3b5bdb",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "8",
			"text": "FIN\n[7] DONC, pour fuir\nl'ignorance, on poursuit\nla science en vue de\nconnaître (but non\nutilitaire).",
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
		}
	]
};