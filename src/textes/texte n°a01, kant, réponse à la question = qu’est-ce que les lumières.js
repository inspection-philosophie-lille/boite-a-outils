// ============================================
// DONNÉES GÉNÉRALES
// ============================================

const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Kant";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Qu'est-ce que les Lumières ? [2] La sortie de l'homme de sa minorité dont il est lui-même responsable. [3] Minorité, **c'est-à-dire** incapacité de se servir de son entendement sans la direction d'autrui. [4] Minorité dont il est lui-même responsable, **puisque** la cause en réside non dans un défaut de l'entendement, **mais** dans un manque de décision et de courage de s'en servir sans la direction d'autrui. [5] Sapere aude ! [6] Aie le courage de te servir de ton propre entendement. [7] Voilà la devise des Lumières. [8] La paresse et la lâcheté sont les causes qui expliquent qu'un si grand nombre d'hommes, après que la nature les a affranchis depuis longtemps d'une direction étrangère… restent cependant volontiers leur vie durant mineurs, et qu'ils soient si facile à d'autres de se poser en tuteur des premiers. [9] Il est si aisé d'être mineur ! [10] **Si** j'ai un livre qui me tient lieu d'entendement, un directeur qui me tient lieu de conscience, un médecin qui décide pour moi de mon régime etc., je n'ai vraiment pas besoin de me donner de peine moi-même. [11] Je n'ai pas besoin de penser, **pourvu que** je puisse payer ; d'autres se chargeront bien de ce travail ennuyeux. [12] Il est **donc** difficile pour chaque individu de sortir tout seul de la minorité qui est presque pour lui devenue un état naturel. »",
	source: "Emmanuel KANT, <em>Réponse à la question : qu'est-ce que les Lumières ?</em>"
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================
const questions = [
    {
        question: "Question n°1 : Comment Kant définit-il les Lumières ?",
        answers: [
            "l'acquisition de connaissances scientifiques",
            "la sortie de l'homme de sa minorité dont il est lui-même responsable",
            "l'obéissance à l'autorité éclairée"
        ],
        correct: 2,
        explanation: "La définition correcte est donnée explicitement au début du texte : « La sortie de l'homme de sa minorité dont il est lui-même responsable. »"
    },
    {
        question: "Question n°2 : Que signifie « minorité » dans ce texte ?",
        answers: [
            "être jeune d'âge",
            "incapacité de se servir de son entendement sans la direction d'autrui",
            "avoir un statut social inférieur"
        ],
        correct: 2,
        explanation: "Kant définit explicitement la minorité comme « incapacité de se servir de son entendement sans la direction d'autrui » (phrase [3])."
    },
    {
        question: "Question n°3 : Pourquoi l'homme est-il responsable de sa minorité selon Kant ?",
        answers: [
            "parce qu'il naît naturellement ignorant",
            "parce que la cause réside dans un défaut de l'entendement",
            "parce que la cause réside dans un manque de décision et de courage"
        ],
        correct: 3,
        explanation: "Kant précise (phrase [4]) que « la cause en réside non dans un défaut de l'entendement, mais dans un manque de décision et de courage »."
    },
    {
        question: "Question n°4 : Que signifie la formule latine « Sapere aude ! » ?",
        answers: [
            "pense par toi-même",
            "aie le courage de te servir de ton propre entendement",
            "connais-toi toi-même"
        ],
        correct: 2,
        explanation: "Kant traduit lui-même la formule (phrase [6]) par « Aie le courage de te servir de ton propre entendement »."
    },
    {
        question: "Question n°5 : Que constitue « Sapere aude ! » pour Kant ?",
        answers: [
            "le principe fondamental de la métaphysique",
            "la devise des Lumières",
            "une maxime morale universelle"
        ],
        correct: 2,
        explanation: "Kant déclare explicitement (phrase [7]) : « Voilà la devise des Lumières »."
    },
    {
        question: "Question n°6 : Quelles sont les deux causes principales qui maintiennent les hommes dans la minorité ?",
        answers: [
            "l'ignorance et la pauvreté",
            "la paresse et la lâcheté",
            "l'oppression politique et religieuse"
        ],
        correct: 2,
        explanation: "Kant identifie clairement (phrase [8]) « la paresse et la lâcheté » comme les causes psychologiques de la minorité."
    },
    {
        question: "Question n°7 : Pourquoi selon Kant est-il « si aisé d'être mineur » ?",
        answers: [
            "parce que l'État y encourage",
            "parce qu'on n'a pas besoin de penser par soi-même",
            "parce que c'est notre condition naturelle"
        ],
        correct: 2,
        explanation: "Kant explique cette facilité (phrases [9]-[11]) par le confort intellectuel : être mineur dispense de l'effort de penser."
    },
    {
        question: "Question n°8 : Quel exemple Kant donne-t-il pour illustrer la facilité de rester mineur ?",
        answers: [
            "avoir un livre qui tient lieu d'entendement",
            "suivre les coutumes traditionnelles",
            "obéir aux lois sans les questionner"
        ],
        correct: 1,
        explanation: "Kant énumère plusieurs exemples concrets (phrase [10]) : « un livre qui me tient lieu d'entendement, un directeur qui me tient lieu de conscience, un médecin qui décide pour moi de mon régime »."
    },
    {
        question: "Question n°9 : Que permet l'argent selon le texte lorsqu'on veut éviter de penser ?",
        answers: [
            "d'acheter la liberté",
            "de payer d'autres pour penser à notre place",
            "d'accéder à l'éducation"
        ],
        correct: 2,
        explanation: "Kant écrit ironiquement (phrase [11]) : « Je n'ai pas besoin de penser, pourvu que je puisse payer ; d'autres se chargeront bien de ce travail ennuyeux. »"
    },
    {
        question: "Question n°10 : Pourquoi est-il difficile de sortir de la minorité ?",
        answers: [
            "parce que la société l'interdit",
            "parce que c'est presque devenu un état naturel",
            "parce que cela nécessite une intelligence exceptionnelle"
        ],
        correct: 2,
        explanation: "Kant conclut (phrase [12]) que la minorité est « presque pour lui devenue un état naturel »."
    }
];

// ============================================
// CARTE MENTALE
// Les numéros [N] renvoient aux phrases du texte ci-dessus.
// Les textes longs utilisent \n pour forcer un retour à la ligne
// → évite que les vignettes deviennent trop larges et se chevauchent.
// ============================================

const carte = {
	nodes: [
		// ============ RACINE ============
		{ key: 0, parent: null, text: "Les Lumières\nselon Kant", color: "#fff8b0", dir: "right", bold: true, fontSize: 18, x: 0, y: 0 },

		// ============ BRANCHE 1 : DÉFINITION ============
		{ key: 1, parent: 0, text: "Définition", color: "#e57373", dir: "right", bold: true, fontSize: 16 },
		{ key: 2, parent: 1, text: "[1] Qu'est-ce que\nles Lumières ?", color: "#e57373", fontSize: 13 },
		{ key: 3, parent: 1, text: "[2] Sortie de l'homme\nde sa minorité", color: "#e57373", fontSize: 13 },
		{ key: 4, parent: 1, text: "[3] Minorité =\nincapacité de se servir\nde son entendement\nsans la direction d'autrui", color: "#e57373", fontSize: 13 },

		// ============ BRANCHE 2 : RESPONSABILITÉ ============
		{ key: 5, parent: 0, text: "Responsabilité\nindividuelle", color: "#81c784", dir: "right", bold: true, fontSize: 16 },
		{ key: 6, parent: 5, text: "[4] Cause non dans\nun défaut de l'entendement", color: "#81c784", fontSize: 13 },
		{ key: 7, parent: 5, text: "[4] Mais dans un manque\nde décision et de courage", color: "#81c784", fontSize: 13 },

		// ============ BRANCHE 3 : LA DEVISE ============
		{ key: 8, parent: 0, text: "Devise des\nLumières", color: "#64b5f6", dir: "right", bold: true, fontSize: 16 },
		{ key: 9, parent: 8, text: "[5] Sapere aude !", color: "#64b5f6", fontSize: 14, italic: true },
		{ key: 10, parent: 8, text: "[6] Aie le courage\nde te servir de ton\npropre entendement", color: "#64b5f6", fontSize: 13 },
		{ key: 11, parent: 8, text: "[7] Voilà la devise\ndes Lumières", color: "#64b5f6", fontSize: 13 },

		// ============ BRANCHE 4 : CAUSES DE LA MINORITÉ ============
		{ key: 12, parent: 0, text: "Causes de\nla minorité", color: "#ffb74d", dir: "left", bold: true, fontSize: 16 },
		{ key: 13, parent: 12, text: "[8] Paresse", color: "#ffb74d", fontSize: 14 },
		{ key: 14, parent: 12, text: "[8] Lâcheté", color: "#ffb74d", fontSize: 14 },
		{ key: 15, parent: 12, text: "[8] Tuteurs qui se posent\nen guides", color: "#ffb74d", fontSize: 13 },

		// ============ BRANCHE 5 : FACILITÉ DE RESTER MINEUR ============
		{ key: 16, parent: 0, text: "Facilité de\nrester mineur", color: "#ba68c8", dir: "left", bold: true, fontSize: 16 },
		{ key: 17, parent: 16, text: "[9] Il est si aisé\nd'être mineur !", color: "#ba68c8", fontSize: 14 },
		{ key: 18, parent: 16, text: "[10] Un livre =\nentendement", color: "#ba68c8", fontSize: 13 },
		{ key: 19, parent: 16, text: "[10] Un directeur =\nconscience", color: "#ba68c8", fontSize: 13 },
		{ key: 20, parent: 16, text: "[10] Un médecin =\n régime", color: "#ba68c8", fontSize: 13 },
		{ key: 21, parent: 16, text: "[11] Payer\npour ne pas penser", color: "#ba68c8", fontSize: 13 },

		// ============ BRANCHE 6 : DIFFICULTÉ DE SORTIR ============
		{ key: 22, parent: 0, text: "Difficulté\nde sortir", color: "#4db6ac", dir: "left", bold: true, fontSize: 16 },
		{ key: 23, parent: 22, text: "[12] Minorité devenue\nétat naturel", color: "#4db6ac", fontSize: 13 },
		{ key: 24, parent: 22, text: "[12] Difficile de sortir\ntout seul", color: "#4db6ac", fontSize: 13 }
	],
	links: [],
	nextKey: 25
};