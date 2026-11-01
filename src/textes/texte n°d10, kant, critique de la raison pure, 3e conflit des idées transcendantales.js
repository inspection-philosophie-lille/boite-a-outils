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
const sousTitre = "Tester ses connaissances sur un texte de Kant (Critique de la raison pure)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] THÈSE : La causalité selon les lois de la nature n'est pas la seule dont puissent être dérivés tous les phénomènes du monde. [2] Il est encore nécessaire d'admettre une causalité libre pour l'explication de ces phénomènes. [3] ANTITHÈSE : Il n'y a pas de liberté, mais tout arrive dans le monde uniquement suivant des lois de la nature. »",
	source: "Emmanuel Kant, <em>Critique de la raison pure</em>, « Troisième conflit des idées transcendantales » (Troisième Antinomie), PUF, 1971, pp. 348-349"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Georg Wilhelm Friedrich Hegel", "Emmanuel Kant", "Arthur Schopenhauer"],
		correct: 2,
		explanation: "Le texte est extrait de la *Critique de la raison pure*, l'œuvre majeure d'Emmanuel Kant."
	},
	{
		question: "Question n°2 : De quelle section de la *Critique de la raison pure* ce passage est-il tiré ?",
		answers: ["L'Esthétique transcendantale", "L'Analytique transcendantale", "La Dialectique transcendantale (conflit des idées)"],
		correct: 3,
		explanation: "Il s'agit du « Troisième conflit des idées transcendantales », aussi appelé la Troisième Antinomie, situé dans la Dialectique."
	},
	{
		question: "Question n°3 : Quel est le thème central de ce court extrait ?",
		answers: ["L'existence de Dieu", "Le conflit entre la causalité naturelle et la liberté", "La nature de l'espace et du temps"],
		correct: 2,
		explanation: "Le texte oppose explicitement la « causalité selon les lois de la nature » à la « causalité libre »."
	},
	{
		question: "Question n°4 : Que nie la THÈSE au §1 ?",
		answers: ["Que la nature existe", "Que la causalité naturelle est la seule à pouvoir dériver tous les phénomènes", "Que les phénomènes sont réels"],
		correct: 2,
		explanation: "La thèse affirme que la causalité naturelle « n'est pas la seule » dont puissent être dérivés les phénomènes."
	},
	{
		question: "Question n°5 : Que postule la THÈSE au §2 pour expliquer les phénomènes ?",
		answers: ["Une causalité libre", "Le hasard absolu", "Une intervention divine miraculeuse"],
		correct: 1,
		explanation: "Le texte dit : « Il est encore nécessaire d'admettre une causalité libre pour l'explication de ces phénomènes »."
	},
	{
		question: "Question n°6 : Que affirme l'ANTITHÈSE au §3 concernant la liberté ?",
		answers: ["Qu'elle est la base de la morale", "Qu'il n'y a pas de liberté", "Qu'elle est une illusion nécessaire"],
		correct: 2,
		explanation: "L'antithèse commence par une négation catégorique : « Il n'y a pas de liberté »."
	},
	{
		question: "Question n°7 : Selon l'ANTITHÈSE, comment tout arrive-t-il dans le monde ?",
		answers: ["Par la volonté des hommes", "Uniquement suivant des lois de la nature", "Par des causes finales"],
		correct: 2,
		explanation: "L'antithèse affirme que « tout arrive dans le monde uniquement suivant des lois de la nature »."
	},
	{
		question: "Question n°8 : Que désigne le terme « phénomènes » dans ce contexte kantien ?",
		answers: ["Les apparences trompeuses", "Les objets tels qu'ils nous apparaissent dans l'expérience", "Les choses en soi"],
		correct: 2,
		explanation: "Chez Kant, les phénomènes sont les objets de l'expérience possible, structurés par nos formes a priori de la sensibilité et de l'entendement."
	},
	{
		question: "Question n°9 : Qu'est-ce qu'une « antinomie » chez Kant ?",
		answers: ["Une contradiction entre deux lois physiques", "Un conflit où la raison peut démontrer avec une égale force une thèse et son opposé", "Une erreur de logique formelle"],
		correct: 2,
		explanation: "Une antinomie est un conflit inévitable de la raison avec elle-même, où deux propositions contradictoires semblent toutes deux démontrables."
	},
	{
		question: "Question n°10 : Pourquoi la THÈSE juge-t-elle « nécessaire » d'admettre une causalité libre ?",
		answers: ["Pour expliquer l'origine absolue d'une série de phénomènes", "Pour justifier la science moderne", "Pour nier l'existence de la nature"],
		correct: 1,
		explanation: "Sans une cause première libre (inconditionnée), la série des causes naturelles remonterait à l'infini sans jamais avoir de commencement absolu."
	},
	{
		question: "Question n°11 : Quelle conception du monde l'ANTITHÈSE défend-elle implicitement ?",
		answers: ["Le finalisme", "Le déterminisme universel", "L'indéterminisme quantique"],
		correct: 2,
		explanation: "En disant que « tout arrive... uniquement suivant des lois de la nature », l'antithèse défend un déterminisme causal strict."
	},
	{
		question: "Question n°12 : Quel est l'enjeu moral sous-jacent à la THÈSE ?",
		answers: ["La responsabilité morale, qui exige la liberté", "La recherche du bonheur", "L'obéissance aux lois civiles"],
		correct: 1,
		explanation: "Bien que non explicité dans cet extrait court, la « causalité libre » est la condition de possibilité de l'imputabilité et de la morale chez Kant."
	},
	{
		question: "Question n°13 : Quel est l'enjeu scientifique sous-jacent à l'ANTITHÈSE ?",
		answers: ["L'unité et l'universalité de l'explication scientifique", "La beauté de la nature", "La liberté de la recherche"],
		correct: 1,
		explanation: "La science exige que tout phénomène ait une cause naturelle antécédente ; admettre une liberté (cause sans cause) briserait cette unité."
	},
	{
		question: "Question n°14 : Que signifie « dérivés » dans « dérivés tous les phénomènes » ?",
		answers: ["Copiés", "Expliqués ou produits par une cause", "Observés"],
		correct: 2,
		explanation: "Il s'agit de l'explication causale : les phénomènes sont les effets dont on cherche la cause (la dérivation)."
	},
	{
		question: "Question n°15 : La THÈSE nie-t-elle la causalité naturelle ?",
		answers: ["Oui, totalement", "Non, elle dit seulement qu'elle n'est pas la « seule »", "Oui, mais seulement pour les humains"],
		correct: 2,
		explanation: "La thèse est additive, pas exclusive : elle admet la causalité naturelle mais lui ajoute la causalité libre."
	},
	{
		question: "Question n°16 : L'ANTITHÈSE est-elle nuancée dans sa formulation ?",
		answers: ["Oui, elle laisse une place au doute", "Non, elle est absolue (« Il n'y a pas », « uniquement »)", "Oui, elle dépend des circonstances"],
		correct: 2,
		explanation: "Les termes « Il n'y a pas » et « uniquement » marquent une affirmation dogmatique et sans exception."
	},
	{
		question: "Question n°17 : À quel domaine la « causalité libre » appartient-elle en dernière instance chez Kant ?",
		answers: ["Au domaine des phénomènes", "Au domaine des choses en soi (le noumène)", "Au domaine de l'imagination"],
		correct: 2,
		explanation: "Pour résoudre l'antinomie, Kant placera la liberté du côté de la chose en soi, hors du temps et des lois naturelles."
	},
	{
		question: "Question n°18 : Que révèle ce texte sur les limites de la raison pure ?",
		answers: ["Qu'elle est toute-puissante", "Qu'elle tombe dans des contradictions inévitables lorsqu'elle dépasse l'expérience possible", "Qu'elle est inutile"],
		correct: 2,
		explanation: "L'antinomie montre que la raison, en voulant penser l'inconditionné (la liberté ou la totalité des causes), se contredit."
	},
	{
		question: "Question n°19 : Comment Kant résoudra-t-il ce conflit dans la suite de la *Critique* ?",
		answers: ["En niant la liberté", "En distinguant le phénomène (déterminé) de la chose en soi (potentiellement libre)", "En disant que la science a tort"],
		correct: 2,
		explanation: "La solution kantienne est que les deux propositions peuvent être vraies si elles s'appliquent à des domaines différents (phénomène vs noumène)."
	},
	{
		question: "Question n°20 : Le mot « monde » dans ce texte désigne :",
		answers: ["La planète Terre", "La totalité des phénomènes dans l'espace et le temps", "L'univers physique uniquement"],
		correct: 2,
		explanation: "Chez Kant, le « monde » est une idée de la raison : la totalité absolue de la série des phénomènes."
	},
	{
		question: "Question n°21 : Pourquoi parle-t-on de conflit « transcendantal » ?",
		answers: ["Parce qu'il concerne les conditions de possibilité de l'expérience et les idées de la raison", "Parce qu'il est religieux", "Parce qu'il est mystique"],
		correct: 1,
		explanation: "Transcendantal renvoie à l'étude des conditions a priori de notre connaissance. Le conflit naît de l'usage de ces conditions au-delà de leurs limites."
	},
	{
		question: "Question n°22 : Quelle tradition philosophique l'ANTITHÈSE représente-t-elle historiquement ?",
		answers: ["Le spinozisme et le déterminisme des Lumières", "Le christianisme augustinien", "L'existentialisme"],
		correct: 1,
		explanation: "L'idée que tout suit des lois naturelles nécessaires est au cœur du déterminisme (ex: Spinoza, Hobbes, ou la physique newtonienne poussée à l'absolu)."
	},
	{
		question: "Question n°23 : Quelle tradition philosophique la THÈSE défend-elle ?",
		answers: ["Le matérialisme", "La tradition de la liberté humaine et de la responsabilité (ex: Leibniz, tradition morale)", "Le scepticisme"],
		correct: 2,
		explanation: "La thèse préserve l'idée d'une spontanéité de la cause, nécessaire pour penser un commencement absolu et la liberté."
	},
	{
		question: "Question n°24 : La causalité naturelle est-elle suffisante pour expliquer *tous* les phénomènes selon la THÈSE ?",
		answers: ["Oui", "Non", "Peut-être"],
		correct: 2,
		explanation: "La thèse dit explicitement qu'elle « n'est pas la seule »."
	},
	{
		question: "Question n°25 : L'ANTITHÈSE admet-elle des exceptions aux lois de la nature ?",
		answers: ["Oui, pour les êtres humains", "Non, « tout » arrive suivant ces lois", "Oui, pour les miracles"],
		correct: 2,
		explanation: "Le mot « uniquement » et « tout » excluent toute exception."
	},
	{
		question: "Question n°26 : Que signifie « admettre » dans « Il est encore nécessaire d'admettre » ?",
		answers: ["Croire aveuglément", "Postuler comme hypothèse nécessaire de la raison", "Observer empiriquement"],
		correct: 2,
		explanation: "Il s'agit d'un postulat de la raison : on ne peut pas l'observer, mais la raison exige de le penser pour éviter la régression à l'infini des causes."
	},
	{
		question: "Question n°27 : En quoi ce texte est-il concis ?",
		answers: ["Il est très long et détaillé", "Il résume en trois phrases l'essence d'un débat métaphysique majeur", "Il est incompréhensible"],
		correct: 2,
		explanation: "C'est la formulation la plus ramassée et célèbre de la Troisième Antinomie."
	},
	{
		question: "Question n°28 : Quel est le rapport entre la THÈSE et la morale kantienne ?",
		answers: ["Aucun", "La THÈSE ouvre la possibilité de la liberté, condition de la loi morale", "La THÈSE détruit la morale"],
		correct: 2,
		explanation: "Sans la causalité libre (spontanéité), l'impératif catégorique et la responsabilité morale n'auraient aucun sens."
	},
	{
		question: "Question n°29 : Quel est le rapport entre l'ANTITHÈSE et la science moderne ?",
		answers: ["Elle la rejette", "Elle en formule le principe régulateur : chercher une cause naturelle à tout phénomène", "Elle la dépasse"],
		correct: 2,
		explanation: "Le scientifique doit agir *comme si* l'antithèse était vraie, en cherchant toujours des causes naturelles."
	},
	{
		question: "Question n°30 : Que se passe-t-il si on accepte uniquement la THÈSE ?",
		answers: ["La science devient impossible car on pourrait attribuer n'importe quel événement à la liberté", "La morale devient impossible", "Rien de spécial"],
		correct: 1,
		explanation: "Si on introduit la liberté dans l'explication des phénomènes naturels, on brise l'enchaînement nécessaire des causes, rendant la science impossible."
	},
	{
		question: "Question n°31 : Que se passe-t-il si on accepte uniquement l'ANTITHÈSE ?",
		answers: ["La science progresse mieux", "La liberté et la responsabilité morale sont anéanties", "La religion est renforcée"],
		correct: 2,
		explanation: "Un déterminisme absolu ne laisse aucune place à l'imputabilité des actions humaines."
	},
	{
		question: "Question n°32 : Le terme « lois de la nature » implique :",
		answers: ["Une régularité et une nécessité", "Un chaos organisé", "Une volonté divine changeante"],
		correct: 1,
		explanation: "Une loi de la nature implique que, les mêmes causes produisant les mêmes effets, le phénomène est nécessaire."
	},
	{
		question: "Question n°33 : La « causalité libre » est-elle une causalité sans cause ?",
		answers: ["Oui, c'est le hasard", "Non, c'est une causalité qui commence d'elle-même une série (spontanéité), sans être déterminée par une cause antécédente", "Oui, c'est un miracle"],
		correct: 2,
		explanation: "Chez Kant, la liberté n'est pas le hasard, mais une spontanéité rationnelle : la capacité de commencer absolument une série d'états."
	},
	{
		question: "Question n°34 : Pourquoi ce conflit est-il qualifié de « troisième » ?",
		answers: ["C'est le troisième livre de Kant", "Il suit les antinomies sur la quantité (fini/infini) et la qualité (simple/composé) du monde", "C'est un hasard éditorial"],
		correct: 2,
		explanation: "Les quatre antinomies traitent respectivement de : 1. La quantité (monde fini/infini), 2. La qualité (divisibilité), 3. La relation (causalité/liberté), 4. La modalité (être nécessaire)."
	},
	{
		question: "Question n°35 : L'expression « pour l'explication de ces phénomènes » montre que :",
		answers: ["La liberté est un objet d'observation", "La causalité libre est un principe explicatif requis par la raison", "Les phénomènes sont illusoires"],
		correct: 2,
		explanation: "C'est un besoin heuristique et rationnel : pour que la série des causes ait un sens, la raison doit penser un commencement inconditionné."
	},
	{
		question: "Question n°36 : Kant est-il d'accord avec la THÈSE ou l'ANTITHÈSE ?",
		answers: ["Il rejette les deux comme fausses", "Il montre que les deux peuvent être vraies si on les rapporte à des domaines différents (phénomène / chose en soi)", "Il choisit la THÈSE"],
		correct: 2,
		explanation: "C'est la solution critique : l'antithèse vaut pour les phénomènes, la thèse vaut pour les choses en soi."
	},
	{
		question: "Question n°37 : Que signifie le fait que tout arrive « uniquement » suivant des lois de la nature (ANTITHÈSE) ?",
		answers: ["Qu'il n'y a pas de place pour la contingence ou la spontanéité dans le monde phénoménal", "Que la nature est gentille", "Que les lois sont des suggestions"],
		correct: 1,
		explanation: "Le déterminisme est exclusif et ne tolère aucune rupture dans la chaîne causale des phénomènes."
	},
	{
		question: "Question n°38 : En quoi ce texte est-il fondateur pour la philosophie de l'action ?",
		answers: ["Il la nie", "Il pose le problème central de la compatibilité entre déterminisme et responsabilité", "Il résout le problème définitivement"],
		correct: 2,
		explanation: "Il formule de manière limpide le dilemme : comment agir librement dans un monde régi par des lois causales ?"
	},
	{
		question: "Question n°39 : Le mot « encore » dans « Il est encore nécessaire » indique :",
		answers: ["Une répétition", "Un ajout, une condition supplémentaire à la causalité naturelle", "Une hésitation"],
		correct: 2,
		explanation: "La causalité naturelle ne suffit pas ; il faut lui *ajouter* (encore) la causalité libre pour une explication complète de la raison."
	},
	{
		question: "Question n°40 : La THÈSE est-elle une affirmation dogmatique ?",
		answers: ["Oui, elle prétend connaître la liberté", "Non, elle est présentée comme une nécessité de la raison face à l'insuffisance du seul déterminisme", "Oui, elle est religieuse"],
		correct: 2,
		explanation: "Dans la Dialectique, Kant expose les arguments de la raison inévitablement, sans encore les valider dogmatiquement."
	},
	{
		question: "Question n°41 : L'ANTITHÈSE est-elle une affirmation dogmatique ?",
		answers: ["Oui, elle affirme catégoriquement l'inexistence de la liberté", "Non, elle est sceptique", "Non, elle est morale"],
		correct: 1,
		explanation: "L'antithèse prend la forme d'une affirmation dogmatique sur la totalité du monde, ce que Kant critiquera comme une illusion transcendantale."
	},
	{
		question: "Question n°42 : Que nous apprend ce texte sur la notion de « monde » ?",
		answers: ["Qu'il est un objet d'expérience", "Qu'il est une idée de la raison qui cherche l'inconditionné", "Qu'il est une illusion"],
		correct: 2,
		explanation: "Le « monde » est ici l'objet du conflit, en tant que totalité des phénomènes dont la raison cherche la condition ultime."
	},
	{
		question: "Question n°43 : La causalité libre est-elle observable ?",
		answers: ["Oui, dans les actions humaines", "Non, elle est une idée de la raison, non un phénomène", "Oui, par introspection"],
		correct: 2,
		explanation: "Tout ce qui est observable est un phénomène, donc soumis aux lois de la nature. La liberté est une idée, non une donnée de l'expérience."
	},
	{
		question: "Question n°44 : Pourquoi Kant utilise-t-il la forme « THÈSE / ANTITHÈSE » ?",
		answers: ["Pour imiter les mathématiques", "Pour montrer la structure dialectique inévitable de la raison lorsqu'elle pense l'inconditionné", "Pour s'opposer à Hegel"],
		correct: 2,
		explanation: "C'est la méthode de la Dialectique : exposer les deux faces contradictoires mais également défendables de la raison spéculative."
	},
	{
		question: "Question n°45 : En quoi la THÈSE protège-t-elle la dignité humaine ?",
		answers: ["En affirmant que l'homme n'est pas qu'un rouage de la nature", "En disant que l'homme est un dieu", "En niant la biologie"],
		correct: 1,
		explanation: "Admettre une causalité libre, c'est admettre que l'homme peut être un commencement absolu, source de ses actions, et non un simple effet."
	},
	{
		question: "Question n°46 : L'ANTITHÈSE est-elle « fausse » pour Kant ?",
		answers: ["Oui, absolument", "Non, elle est vraie et nécessaire pour l'usage constitutif de l'entendement dans le domaine des phénomènes", "Elle est vraie uniquement la nuit"],
		correct: 2,
		explanation: "Kant donnera raison à l'antithèse *dans le domaine des phénomènes* : la science doit toujours chercher des causes naturelles."
	},
	{
		question: "Question n°47 : La THÈSE est-elle « fausse » pour Kant ?",
		answers: ["Oui, absolument", "Non, elle est vraie et nécessaire pour l'usage pratique (moral) de la raison, rapportée à la chose en soi", "Elle est vraie uniquement pour les animaux"],
		correct: 2,
		explanation: "Kant donnera raison à la thèse *du point de vue de la chose en soi*, rendant la liberté possible et nécessaire pour la morale."
	},
	{
		question: "Question n°48 : Que signifie « dérivés » dans le contexte de la causalité ?",
		answers: ["Copiés", "Expliqués comme effets d'une cause", "Observés"],
		correct: 2,
		explanation: "Dériver un phénomène, c'est remonter à sa cause pour l'expliquer."
	},
	{
		question: "Question n°49 : Quel est le style de ce passage ?",
		answers: ["Poétique et métaphorique", "Formel, logique et apodictique", "Narratif et romanesque"],
		correct: 2,
		explanation: "Kant utilise un langage rigoureux, propre à la logique et à la métaphysique, pour énoncer des propositions universelles."
	},
	{
		question: "Question n°50 : Quelle est la thèse globale de cet extrait (en tant qu'exposition du conflit) ?",
		answers: ["La liberté n'existe pas", "La raison est condamnée à osciller entre la nécessité d'admettre la liberté et la nécessité d'admettre le déterminisme universel", "La nature est libre"],
		correct: 2,
		explanation: "L'extrait expose l'antinomie elle-même : la raison se heurte à deux affirmations contradictoires, toutes deux semblant nécessaires, révélant ainsi les limites de la connaissance spéculative."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "Troisième Antinomie : Causalité et Liberté" },
		{ key: 1, parent: 0, text: "La THÈSE" },
		{ key: 2, parent: 1, text: "[1] La causalité naturelle n'est pas la seule explication" },
		{ key: 3, parent: 1, text: "[2] Nécessité d'admettre une causalité libre" },
		{ key: 4, parent: 0, text: "L'ANTITHÈSE" },
		{ key: 5, parent: 4, text: "[3] Il n'y a pas de liberté" },
		{ key: 6, parent: 4, text: "[3] Tout arrive uniquement suivant les lois de la nature" },
		{ key: 7, parent: 0, text: "Les concepts en jeu" },
		{ key: 8, parent: 7, text: "Phénomènes : objets de l'expérience" },
		{ key: 9, parent: 7, text: "Causalité naturelle : enchaînement déterminé" },
		{ key: 10, parent: 7, text: "Causalité libre : commencement absolu (spontanéité)" },
		{ key: 11, parent: 0, text: "L'enjeu du conflit" },
		{ key: 12, parent: 11, text: "Science (déterminisme) vs Morale (liberté)" },
		{ key: 13, parent: 11, text: "Les limites de la raison pure face à l'inconditionné" }
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
			origine: "Emmanuel Kant, Critique de la raison pure, « Troisième conflit des idées transcendantales »",
			theme: "La liberté",
			these: "La raison humaine se heurte à une contradiction inévitable (antinomie) : elle doit postuler à la fois la causalité naturelle pour expliquer les phénomènes, et une causalité libre pour rendre compte de l'origine absolue des séries causales et de la responsabilité morale.",
			interet: "Ce texte est le cœur de la dialectique transcendantale. Il expose le conflit fondamental entre le déterminisme scientifique (nécessaire à la connaissance) et la liberté (nécessaire à la morale), préparant la solution kantienne de la distinction entre phénomène (où règne la nécessité) et chose en soi (où la liberté est pensable).",
			problematique: "En quoi la raison est-elle contrainte d'admettre simultanément la nécessité des lois de la nature et l'existence d'une causalité libre, créant ainsi un conflit insoluble au niveau de la connaissance des phénomènes ?"
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
			"text": "DÉBUT\nProblème de la raison :\nComment expliquer\ntous les phénomènes\ndu monde ?",
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
			"text": "CONFLIT (ANTINOMIE)\nLa raison formule\ndeux propositions\ncontradictoires mais\nnécessaires.",
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
			"text": "THÈSE :\nLa causalité naturelle\nne suffit pas.\nIl faut admettre une\ncausalité libre\n(spontanéité).",
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
			"text": "ANTITHÈSE :\nIl n'y a pas de liberté.\nTout arrive uniquement\nsuivant des lois\nde la nature\n(déterminisme).",
			"loc": "760.53 259.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "5",
			"text": "L'ENJEU :\nScience (nécessite\nl'antithèse) contre\nMorale (nécessite\nla thèse).",
			"loc": "1034.36 120",
			"category": "rectangle",
			"color": "#a3bffa",
			"borderColor": "#3b5bdb",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "6",
			"text": "FIN\nRévélation des limites\nde la raison pure :\nle conflit sera résolu\nen distinguant\nphénomène et chose en soi.",
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
			"from": "2",
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