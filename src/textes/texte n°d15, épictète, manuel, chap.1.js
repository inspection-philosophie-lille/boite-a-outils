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
const sousTitre = "Tester ses connaissances sur un texte d'Épictète (Manuel, I)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Il y a ce qui dépend de nous, il y a ce qui ne dépend pas de nous. [2] Dépendent de nous l'opinion, la tendance, le désir, l'aversion, en un mot toutes nos œuvres propres ; ne dépendent pas de nous le corps, la richesse, les témoignages de considération, les hautes charges, en un mot toutes les choses qui ne sont pas nos œuvres propres. [3] Les choses qui dépendent de nous sont naturellement libres, sans entrave ; celles qui ne dépendent pas de nous sont fragiles, serves, facilement empêchées, propres à autrui. »",
	source: "Épictète, <em>Manuel</em> (Enchiridion), I, trad. J. Pépin, coll. Pléiade, p.1111"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Sénèque", "Épictète", "Marc Aurèle"],
		correct: 2,
		explanation: "Le texte est le premier chapitre du *Manuel* (ou *Enchiridion*), attribué au philosophe stoïcien Épictète."
	},
	{
		question: "Question n°2 : Quelle est la distinction fondamentale énoncée dès le §1 ?",
		answers: ["Le bien et le mal", "Ce qui dépend de nous et ce qui ne dépend pas de nous", "Le corps et l'âme"],
		correct: 2,
		explanation: "Le texte s'ouvre sur la célèbre dichotomie : « Il y a ce qui dépend de nous, il y a ce qui ne dépend pas de nous »."
	},
	{
		question: "Question n°3 : Parmi les éléments suivants, lequel dépend de nous selon le §2 ?",
		answers: ["Le corps", "La richesse", "L'opinion"],
		correct: 3,
		explanation: "Le texte liste explicitement : « Dépendent de nous l'opinion, la tendance, le désir, l'aversion »."
	},
	{
		question: "Question n°4 : Comment Épictète résume-t-il l'ensemble de ce qui dépend de nous ?",
		answers: ["Toutes nos œuvres propres", "Tous nos biens matériels", "Toutes nos relations sociales"],
		correct: 1,
		explanation: "Il conclut la liste par : « en un mot toutes nos œuvres propres »."
	},
	{
		question: "Question n°5 : Lequel de ces éléments ne dépend PAS de nous selon le §2 ?",
		answers: ["Le désir", "L'aversion", "La richesse"],
		correct: 3,
		explanation: "Le texte précise : « ne dépendent pas de nous le corps, la richesse, les témoignages de considération, les hautes charges »."
	},
	{
		question: "Question n°6 : Comment Épictète résume-t-il ce qui ne dépend pas de nous ?",
		answers: ["Toutes les choses qui ne sont pas nos œuvres propres", "Toutes les choses mauvaises", "Toutes les choses naturelles"],
		correct: 1,
		explanation: "Il utilise la formule : « en un mot toutes les choses qui ne sont pas nos œuvres propres »."
	},
	{
		question: "Question n°7 : Quelle est la caractéristique des choses qui dépendent de nous (§3) ?",
		answers: ["Elles sont fragiles et serves", "Elles sont naturellement libres, sans entrave", "Elles sont propres à autrui"],
		correct: 2,
		explanation: "Le texte affirme : « Les choses qui dépendent de nous sont naturellement libres, sans entrave »."
	},
	{
		question: "Question n°8 : Quelle est la caractéristique des choses qui ne dépendent pas de nous (§3) ?",
		answers: ["Elles sont libres et puissantes", "Elles sont fragiles, serves, facilement empêchées, propres à autrui", "Elles sont éternelles"],
		correct: 2,
		explanation: "Le texte les décrit comme « fragiles, serves, facilement empêchées, propres à autrui »."
	},
	{
		question: "Question n°9 : Que désigne le terme « opinion » (hypolêpsis) dans ce contexte stoïcien ?",
		answers: ["La rumeur publique", "Le jugement personnel ou l'assentiment que nous donnons aux représentations", "Une simple supposition"],
		correct: 2,
		explanation: "Pour les stoïciens, l'opinion est la faculté de juger et d'interpréter les impressions, ce qui est entièrement sous notre contrôle."
	},
	{
		question: "Question n°10 : Pourquoi le corps est-il classé parmi ce qui ne dépend pas de nous ?",
		answers: ["Parce qu'il est mauvais", "Parce qu'il est soumis aux maladies, à la vieillesse et aux forces extérieures", "Parce qu'il n'existe pas"],
		correct: 2,
		explanation: "Le corps est un « indifférent » : nous ne contrôlons pas entièrement sa santé, sa force ou sa survie, qui dépendent de causes extérieures."
	},
	{
		question: "Question n°11 : Que signifie « œuvres propres » ?",
		answers: ["Les créations artistiques", "Les actions intérieures, les choix moraux et les jugements de la volonté", "Le travail manuel"],
		correct: 2,
		explanation: "Cela renvoie à la *prohairesis* (le choix moral ou la faculté de choix), le noyau de notre liberté intérieure."
	},
	{
		question: "Question n°12 : Pourquoi les « témoignages de considération » (la réputation) ne dépendent-ils pas de nous ?",
		answers: ["Parce qu'ils dépendent du jugement et de la volonté d'autrui", "Parce qu'ils sont illégaux", "Parce qu'ils sont inutiles"],
		correct: 1,
		explanation: "La réputation est externe : nous ne pouvons pas forcer les autres à nous estimer, elle leur appartient."
	},
	{
		question: "Question n°13 : Quel est le but philosophique de cette dichotomie ?",
		answers: ["Devenir riche", "Atteindre la liberté intérieure et l'ataraxie en ne désirant que ce que l'on contrôle", "Dominer les autres"],
		correct: 2,
		explanation: "En focalisant notre désir uniquement sur ce qui dépend de nous, nous évitons la frustration et l'esclavage des passions."
	},
	{
		question: "Question n°14 : Que signifie « sans entrave » dans ce contexte ?",
		answers: ["Sans obstacles physiques", "Ne pouvant être bloqué ou contrarié par aucune force extérieure", "Sans lois"],
		correct: 2,
		explanation: "Notre jugement et notre volonté ne peuvent être forcés par personne ; nous restons maîtres de notre assentiment."
	},
	{
		question: "Question n°15 : Que signifie « serves » appliqué aux choses externes ?",
		answers: ["Utiles aux esclaves", "Soumises à la domination d'autrui ou des circonstances, donc sources d'esclavage pour celui qui s'y attache", "Rapides"],
		correct: 2,
		explanation: "Ce qui ne dépend pas de nous peut nous être retiré ; s'y attacher, c'est se rendre esclave de celui qui le détient ou du hasard."
	},
	{
		question: "Question n°16 : Quelle est la place de ce chapitre dans le *Manuel* ?",
		answers: ["C'est la conclusion", "C'est le fondement et le principe premier de toute la doctrine", "C'est une annexe"],
		correct: 2,
		explanation: "C'est le premier chapitre, car toute la pratique stoïcienne découle de cette distinction fondamentale."
	},
	{
		question: "Question n°17 : Que nous apprend ce texte sur la conception stoïcienne de la liberté ?",
		answers: ["La liberté est politique et sociale", "La liberté est purement intérieure et morale, indépendante des conditions extérieures", "La liberté est une illusion"],
		correct: 2,
		explanation: "Un esclave comme Épictète peut être libre intérieurement, tandis qu'un empereur peut être esclave de ses passions et de sa réputation."
	},
	{
		question: "Question n°18 : Que signifie « facilement empêchées » ?",
		answers: ["Qu'elles sont interdites par la loi", "Qu'elles peuvent être entravées ou retirées par des forces extérieures à tout moment", "Qu'elles sont difficiles à obtenir"],
		correct: 2,
		explanation: "La richesse peut être volée, la santé peut être perdue : ces biens sont vulnérables aux aléas du monde."
	},
	{
		question: "Question n°19 : L'« aversion » (ekklisis) dépend-elle de nous ?",
		answers: ["Oui, nous choisissons ce que nous refusons ou fuyons moralement", "Non, c'est un réflexe incontrôlable", "Seulement la nuit"],
		correct: 1,
		explanation: "Notre aversion rationnelle (par exemple, fuir le vice) est un acte de notre volonté, donc libre."
	},
	{
		question: "Question n°20 : Pourquoi Épictète utilise-t-il l'expression « en un mot » ?",
		answers: ["Pour abréger un discours trop long", "Pour synthétiser et généraliser la liste précédente sous un principe unique", "Par manque de vocabulaire"],
		correct: 2,
		explanation: "C'est une formule de résumé qui élève la liste d'exemples au rang de règle universelle."
	},
	{
		question: "Question n°21 : Que se passe-t-il si nous traitons ce qui ne dépend pas de nous comme si cela dépendait de nous ?",
		answers: ["Nous devenons heureux", "Nous rencontrons l'obstacle, le trouble et l'esclavage", "Nous devenons riches"],
		correct: 2,
		explanation: "C'est la source de toute souffrance selon le stoïcisme : désirer contrôler l'incontrôlable mène inévitablement à la frustration."
	},
	{
		question: "Question n°22 : Le terme « naturellement » dans « naturellement libres » signifie :",
		answers: ["Dans la forêt", "Par essence, intrinsèquement, sans condition extérieure", "Par hasard"],
		correct: 2,
		explanation: "La liberté est l'essence même de notre faculté de choix ; elle ne peut nous être retirée par une force extérieure."
	},
	{
		question: "Question n°23 : Qui a compilé le *Manuel* d'Épictète ?",
		answers: ["Platon", "Arrien, son disciple", "Sénèque"],
		correct: 2,
		explanation: "Arrien de Nicomédie a rassemblé et rédigé les enseignements oraux d'Épictète dans les *Entretiens* et le *Manuel*."
	},
	{
		question: "Question n°24 : Que signifie « propres à autrui » ?",
		answers: ["Qui appartiennent à d'autres personnes ou sont sous leur contrôle", "Qui sont très propres", "Qui sont uniques"],
		correct: 1,
		explanation: "Les biens externes dépendent de la volonté des autres (un tyran peut confisquer la richesse) ou du hasard."
	},
	{
		question: "Question n°25 : La « tendance » (hormê) désigne :",
		answers: ["La mode vestimentaire", "L'impulsion ou l'élan de l'âme vers une action", "La pente d'un terrain"],
		correct: 2,
		explanation: "C'est l'impulsion à agir, qui, lorsqu'elle est guidée par la raison, dépend entièrement de nous."
	},
	{
		question: "Question n°26 : En quoi ce texte est-il un appel à la responsabilité ?",
		answers: ["Il dit que tout est la faute des autres", "Il nous rend entièrement responsables de nos jugements et de nos réactions, quelles que soient les circonstances", "Il nie la responsabilité"],
		correct: 2,
		explanation: "Nous ne pouvons pas contrôler ce qui nous arrive, mais nous sommes absolument responsables de la manière dont nous le jugeons et y réagissons."
	},
	{
		question: "Question n°27 : Quelle figure de style structure le §2 ?",
		answers: ["La métaphore", "L'énumération et l'opposition binaire", "L'hyperbole"],
		correct: 2,
		explanation: "Le texte oppose systématiquement deux listes de termes pour marquer la dichotomie."
	},
	{
		question: "Question n°28 : Pourquoi les « hautes charges » (fonctions politiques) ne dépendent-elles pas de nous ?",
		answers: ["Parce qu'elles sont trop difficiles", "Parce qu'elles dépendent du suffrage ou de la nomination d'autrui", "Parce qu'elles sont illégales"],
		correct: 2,
		explanation: "Une charge publique est un « indifférent préféré » : elle est externe et peut être retirée par la cité ou le souverain."
	},
	{
		question: "Question n°29 : Quel est le ton de ce passage ?",
		answers: ["Poétique et vague", "Dogmatique, clair et impératif", "Hésitant et interrogatif"],
		correct: 2,
		explanation: "Épictète énonce des vérités qu'il considère comme absolues et fondatrices, avec une grande netteté."
	},
	{
		question: "Question n°30 : En quoi ce texte s'oppose-t-il au sens commun ?",
		answers: ["Il le confirme", "Le sens commun croit que la richesse et la santé sont des gages de liberté, Épictète y voit des sources d'esclavage", "Il dit que le corps est une illusion"],
		correct: 2,
		explanation: "C'est un renversement complet des valeurs : la vraie liberté est intérieure, pas matérielle."
	},
	{
		question: "Question n°31 : Que signifie le mot « fragiles » (§3) ?",
		answers: ["Délicats et précieux", "Instables, susceptibles d'être brisés ou perdus à tout moment", "Transparents"],
		correct: 2,
		explanation: "Les biens extérieurs n'ont pas de stabilité intrinsèque ; ils sont soumis au changement et à la perte."
	},
	{
		question: "Question n°32 : La dichotomie du contrôle est-elle une invitation à l'inaction ?",
		answers: ["Oui, il faut tout abandonner", "Non, elle invite à agir avec vertu sur ce qui dépend de nous, sans s'attacher aux résultats externes", "Oui, il faut dormir"],
		correct: 2,
		explanation: "Le stoïcisme est une philosophie de l'action juste, mais détachée de l'obsession du résultat."
	},
	{
		question: "Question n°33 : Que nous apprend ce texte sur le désir stoïcien ?",
		answers: ["Il faut supprimer tout désir", "Il faut désirer uniquement ce qui dépend de nous (la vertu)", "Il faut désirer la richesse modérément"],
		correct: 2,
		explanation: "Le désir n'est pas mauvais en soi, mais il devient destructeur s'il vise des choses qui ne dépendent pas de nous."
	},
	{
		question: "Question n°34 : Quel lien ce texte fait-il entre liberté et autonomie ?",
		answers: ["Aucun", "Être libre, c'est être autonome, c'est-à-dire se donner à soi-même sa propre loi (raison) sans dépendre de l'extérieur", "La liberté est l'absence de toute loi"],
		correct: 2,
		explanation: "L'autonomie est la capacité de se gouverner soi-même par la raison, ce qui correspond exactement à la maîtrise de nos « œuvres propres »."
	},
	{
		question: "Question n°35 : Pourquoi Épictète insiste-t-il sur le mot « naturellement » ?",
		answers: ["Pour dire que c'est biologique", "Pour souligner que cette liberté est une essence inaliénable, impossible à détruire par la contrainte", "Pour s'opposer à la culture"],
		correct: 2,
		explanation: "Même un esclave physiquement enchaîné reste libre de juger et de désirer intérieurement ; c'est sa nature rationnelle."
	},
	{
		question: "Question n°36 : Que signifie « témoignages de considération » ?",
		answers: ["Les documents officiels", "La réputation, l'honneur et l'estime accordés par les autres", "Les témoignages au tribunal"],
		correct: 2,
		explanation: "C'est la gloire ou la reconnaissance sociale, qui dépend entièrement de l'opinion d'autrui."
	},
	{
		question: "Question n°37 : En quoi la traduction de J. Pépin est-elle significative ici ?",
		answers: ["Elle est très libre", "Elle rend avec précision les termes techniques du stoïcisme (opinion, tendance, aversion)", "Elle est en vers"],
		correct: 2,
		explanation: "Jean Pépin est un helléniste réputé qui restitue fidèlement les concepts de la *prohairesis* et de l'assentiment."
	},
	{
		question: "Question n°38 : Que se passe-t-il si nous averser (fuyons) ce qui ne dépend pas de nous ?",
		answers: ["Nous sommes en paix", "Nous serons inévitablement frustrés et malheureux", "Nous deviendrons riches"],
		correct: 2,
		explanation: "Fuir la maladie ou la pauvreté (qui ne dépendent pas entièrement de nous) mène à la peur et à l'échec, car nous ne pouvons pas toujours les éviter."
	},
	{
		question: "Question n°39 : Quelle est la portée pratique de ce premier chapitre ?",
		answers: ["Aucune, c'est théorique", "C'est un exercice quotidien de tri mental pour préserver sa sérénité", "C'est une règle juridique"],
		correct: 2,
		explanation: "Le *Manuel* est un guide pratique : il faut appliquer ce tri à chaque situation de la vie pour ne pas souffrir."
	},
	{
		question: "Question n°40 : Le corps est-il considéré comme « mauvais » par Épictète ?",
		answers: ["Oui, absolument", "Non, il est simplement classé comme « indifférent » (ni bon ni mauvais en soi), car il ne dépend pas de notre volonté morale", "Oui, c'est une prison"],
		correct: 2,
		explanation: "Le stoïcisme ne méprise pas le corps, mais refuse d'en faire le fondement du bonheur ou de la vertu."
	},
	{
		question: "Question n°41 : Que révèle l'usage du présent de vérité générale dans ce texte ?",
		answers: ["Une action passée", "La validité universelle et intemporelle de cette loi psychologique et morale", "Une action future"],
		correct: 2,
		explanation: "Les verbes au présent (« Il y a », « Dépendent », « sont ») énoncent des vérités permanentes sur la condition humaine."
	},
	{
		question: "Question n°42 : En quoi ce texte prépare-t-il la notion de « consentement » ?",
		answers: ["Il ne la prépare pas", "En montrant que notre opinion et notre tendance (notre assentiment) sont les seules choses que nous puissions vraiment contrôler", "En disant qu'il faut consentir à tout"],
		correct: 2,
		explanation: "La liberté réside dans le pouvoir de dire « oui » ou « non » intérieurement aux représentations qui nous assaillent."
	},
	{
		question: "Question n°43 : Que signifie « toutes nos œuvres propres » ?",
		answers: ["Nos productions artistiques", "L'ensemble de nos actes volontaires et jugements intérieurs", "Nos biens immobiliers"],
		correct: 2,
		explanation: "Cela englobe tout ce qui émane de notre faculté de choix morale (*prohairesis*)."
	},
	{
		question: "Question n°44 : Pourquoi Épictète utilise-t-il une structure binaire aussi stricte ?",
		answers: ["Pour faire joli", "Pour forcer l'esprit à classer immédiatement toute expérience dans l'une ou l'autre catégorie, sans zone grise", "Par manque d'idées"],
		correct: 2,
		explanation: "La rigueur de la dichotomie est un outil mental pour éviter l'illusion de contrôle sur les choses externes."
	},
	{
		question: "Question n°45 : Que nous dit ce texte sur la richesse ?",
		answers: ["Qu'il faut la chercher à tout prix", "Qu'elle est un bien externe, fragile et propre à autrui, donc incapable de garantir la liberté", "Qu'elle est la source de la vertu"],
		correct: 2,
		explanation: "La richesse est classée sans ambiguïté parmi les choses qui ne dépendent pas de nous."
	},
	{
		question: "Question n°46 : Comment qualifier la relation entre l'homme et les choses externes selon ce texte ?",
		answers: ["De possession absolue", "De dépendance et de vulnérabilité si on s'y attache", "D'indifférence totale"],
		correct: 2,
		explanation: "Les choses externes sont « serves » et « propres à autrui » ; s'y lier, c'est accepter d'être vulnérable."
	},
	{
		question: "Question n°47 : En quoi ce chapitre est-il une définition de la sagesse ?",
		answers: ["La sagesse est de tout savoir", "La sagesse est de savoir distinguer ce qui dépend de nous de ce qui n'en dépend pas", "La sagesse est de ne rien faire"],
		correct: 2,
		explanation: "C'est la définition même de la sagesse pratique stoïcienne : le discernement des pouvoirs."
	},
	{
		question: "Question n°48 : Que signifie « empêchées » dans ce contexte ?",
		answers: ["Interdites par la loi", "Entravées, bloquées ou frustrées dans leur accomplissement par des obstacles extérieurs", "Lentes"],
		correct: 2,
		explanation: "Contrairement à la volonté qui ne peut être bloquée, un projet externe (devenir riche) peut être « empêché » par les circonstances."
	},
	{
		question: "Question n°49 : Quel est le rapport entre ce texte et la notion de destin ?",
		answers: ["Il le nie", "Il accepte le destin pour les choses externes, mais revendique la liberté morale face à ce destin", "Il dit que le destin n'existe pas"],
		correct: 2,
		explanation: "Le sage accepte ce qui ne dépend pas de lui (le destin) tout en exerçant sa liberté sur son jugement face à ces événements."
	},
	{
		question: "Question n°50 : Quelle est la thèse globale de cet extrait ?",
		answers: ["Le monde est injuste", "La véritable liberté et la sérénité ne s'obtiennent qu'en limitant notre investissement moral à ce qui dépend exclusivement de nous (nos jugements et désirs)", "Il faut accumuler des richesses pour être libre"],
		correct: 2,
		explanation: "C'est le résumé du premier chapitre du *Manuel* : la dichotomie du contrôle est la clé de voûte de l'éthique stoïcienne et de la liberté intérieure."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "La dichotomie du contrôle (Épictète)" },
		{ key: 1, parent: 0, text: "Ce qui dépend de nous" },
		{ key: 2, parent: 1, text: "Opinion, tendance, désir, aversion" },
		{ key: 3, parent: 1, text: "Toutes nos œuvres propres" },
		{ key: 4, parent: 1, text: "Caractère : naturellement libres, sans entrave" },
		{ key: 5, parent: 0, text: "Ce qui ne dépend pas de nous" },
		{ key: 6, parent: 5, text: "Corps, richesse, considération, hautes charges" },
		{ key: 7, parent: 5, text: "Toutes les choses qui ne sont pas nos œuvres propres" },
		{ key: 8, parent: 5, text: "Caractère : fragiles, serves, facilement empêchées, propres à autrui" },
		{ key: 9, parent: 0, text: "Enjeu philosophique" },
		{ key: 10, parent: 9, text: "La vraie liberté réside dans la maîtrise de nos jugements" },
		{ key: 11, parent: 9, text: "L'attachement aux biens externes mène à l'esclavage et au trouble" }
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
			origine: "Épictète, Manuel (Enchiridion), I, trad. J. Pépin",
			theme: "La liberté",
			these: "La liberté authentique ne réside pas dans la possession de biens extérieurs, mais exclusivement dans la maîtrise de ce qui dépend de nous (nos jugements, nos désirs et nos aversions), tandis que tout le reste est par nature fragile et source d'esclavage.",
			interet: "Ce premier chapitre du *Manuel* est le fondement absolu de toute l'éthique stoïcienne. Il opère un renversement radical du sens commun en redéfinissant la liberté non comme une condition sociale ou matérielle, mais comme une autonomie intérieure inaliénable. Il offre un outil pratique immédiat (la dichotomie du contrôle) pour préserver sa sérénité face aux aléas du monde.",
			problematique: "En quoi la distinction rigoureuse entre ce qui dépend de nous et ce qui n'en dépend pas constitue-t-elle la condition nécessaire et suffisante de la liberté humaine ?"
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
			"text": "DÉBUT\nDistinction fondamentale :\nDeux catégories d'existants",
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
			"text": "CATÉGORIE A :\nCe qui dépend de nous\n(Opinion, désir, aversion,\nœuvres propres).",
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
			"text": "Propriété A :\nNaturellement libres,\nsans entrave.",
			"loc": "480 259.98",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "4",
			"text": "CATÉGORIE B :\nCe qui ne dépend pas\nde nous (Corps, richesse,\nconsidération, charges).",
			"loc": "760.53 120",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "5",
			"text": "Propriété B :\nFragiles, serves,\nfacilement empêchées,\npropres à autrui.",
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
			"text": "FIN\nLa vraie liberté consiste\nà n'investir son désir\nque dans la Catégorie A,\nen acceptant la Catégorie B\ncomme indifférente.",
			"loc": "1034.36 120",
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
			"from": "1",
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
			"from": "3",
			"to": "6",
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