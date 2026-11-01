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
const sousTitre = "Tester ses connaissances sur un texte de Descartes (Préface aux Principes)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Or c’est proprement avoir les yeux fermés, sans tâcher jamais de les ouvrir, que de vivre sans philosopher ; et le plaisir de voir toutes les choses que notre vue découvre n’est point comparable à la satisfaction que donne la connaissance de celles qu’on trouve par la philosophie ; et, enfin, cette étude est plus nécessaire pour régler nos mœurs et nous conduire en cette vie, que n’est l’usage de nos yeux pour guider nos pas. [2] Les bêtes brutes, qui n’ont que leur corps à conserver, s’occupent continuellement à chercher de quoi le nourrir ; mais les hommes, dont la principale partie est l’esprit, devraient employer leurs principaux soins à la recherche de la sagesse qui en est la vraie nourriture ; et je m’assure aussi qu’il y en a plusieurs qui n’y manqueraient pas, s’ils avaient espérance d’y réussir, et qu’ils sussent combien ils en sont capables. [3] Il n’y a point d’âme tant soit peu noble qui demeure si fort attachée aux objets des sens qu’elle ne s’en détourne quelque fois pour souhaiter quelque autre plus grand bien, nonobstant qu’elle ignore souvent en quoi il consiste (...) »",
	source: "René Descartes, <em>Préface aux Principes de la philosophie</em>, 1644"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Blaise Pascal", "René Descartes", "Emmanuel Kant"],
		correct: 2,
		explanation: "Le texte est extrait de la Préface des *Principes de la philosophie*, œuvre majeure de René Descartes publiée en 1644."
	},
	{
		question: "Question n°2 : En quelle année cette œuvre a-t-elle été publiée ?",
		answers: ["1637", "1641", "1644"],
		correct: 3,
		explanation: "Les *Principes de la philosophie* ont été publiés en 1644 (d'abord en latin, puis traduits en français)."
	},
	{
		question: "Question n°3 : Selon Descartes, à quoi revient le fait de « vivre sans philosopher » ?",
		answers: ["À vivre comme un dieu", "À avoir les yeux fermés sans tâcher de les ouvrir", "À vivre en parfaite sécurité"],
		correct: 2,
		explanation: "Descartes utilise une métaphore visuelle forte : vivre sans philosopher, c'est « proprement avoir les yeux fermés, sans tâcher jamais de les ouvrir »."
	},
	{
		question: "Question n°4 : Que vaut, selon l'auteur, le plaisir de la vue par rapport à la satisfaction de la connaissance philosophique ?",
		answers: ["Il est supérieur", "Il est équivalent", "Il n'est point comparable (il est inférieur)"],
		correct: 3,
		explanation: "Descartes affirme que le plaisir des sens (la vue) « n’est point comparable à la satisfaction que donne la connaissance » philosophique, établissant une hiérarchie au profit de l'esprit."
	},
	{
		question: "Question n°5 : Quelle est, selon ce texte, la fonction pratique de la philosophie ?",
		answers: ["Acquérir des richesses matérielles", "Régler nos mœurs et nous conduire en cette vie", "Dominer la nature par la force brute"],
		correct: 2,
		explanation: "Le texte stipule clairement que cette étude est « plus nécessaire pour régler nos mœurs et nous conduire en cette vie »."
	},
	{
		question: "Question n°6 : À quoi Descartes compare-t-il la nécessité de la philosophie ?",
		answers: ["À l'usage de nos yeux pour guider nos pas", "À la nécessité de dormir", "À l'instinct de survie des animaux"],
		correct: 1,
		explanation: "Il file la métaphore de la vue : la philosophie est plus nécessaire pour guider notre vie que nos yeux ne le sont pour guider nos pas physiques."
	},
	{
		question: "Question n°7 : Quelle est l'occupation continuelle des « bêtes brutes » selon le texte ?",
		answers: ["Chercher de quoi nourrir leur corps", "Contempler la beauté du monde", "Chercher la vérité"],
		correct: 1,
		explanation: "Descartes écrit : « Les bêtes brutes, qui n’ont que leur corps à conserver, s’occupent continuellement à chercher de quoi le nourrir »."
	},
	{
		question: "Question n°8 : Quelle est la « principale partie » de l'homme selon Descartes ?",
		answers: ["Le cœur", "Le corps", "L'esprit"],
		correct: 3,
		explanation: "Il oppose l'homme à la bête en affirmant que chez l'homme, « la principale partie est l’esprit »."
	},
	{
		question: "Question n°9 : Que devraient faire les hommes de leurs « principaux soins » ?",
		answers: ["Les employer à la recherche de la sagesse", "Les employer à accumuler des biens", "Les employer à satisfaire leurs sens"],
		correct: 1,
		explanation: "Puisque l'esprit est la principale partie de l'homme, il devrait employer ses principaux soins « à la recherche de la sagesse »."
	},
	{
		question: "Question n°10 : Qu'est-ce qui constitue la « vraie nourriture » de l'esprit ?",
		answers: ["Les connaissances scientifiques", "La sagesse", "Les plaisirs des sens"],
		correct: 2,
		explanation: "Descartes qualifie explicitement la sagesse de « vraie nourriture » de l'esprit, en écho à la nourriture corporelle des bêtes."
	},
	{
		question: "Question n°11 : Pourquoi, selon Descartes, beaucoup d'hommes ne cherchent-ils pas la sagesse ?",
		answers: ["Parce qu'ils sont naturellement paresseux", "Parce qu'ils n'ont pas espérance d'y réussir et ignorent leur capacité", "Parce que la sagesse est interdite"],
		correct: 2,
		explanation: "Il affirme que plusieurs n'y manqueraient pas « s’ils avaient espérance d’y réussir, et qu’ils sussent combien ils en sont capables »."
	},
	{
		question: "Question n°12 : Que signifie l'expression « je m'assure aussi » ?",
		answers: ["Un doute profond de l'auteur", "Une certitude et une confiance de l'auteur en la nature humaine", "Une hypothèse invérifiable"],
		correct: 2,
		explanation: "Cette formule marque la conviction de Descartes : il est certain que les hommes chercheraient la sagesse s'ils connaissaient leurs propres capacités."
	},
	{
		question: "Question n°13 : Que fait une âme « tant soit peu noble » face aux objets des sens ?",
		answers: ["Elle s'y abandonne totalement", "Elle s'en détourne quelquefois", "Elle les détruit"],
		correct: 2,
		explanation: "Le texte dit qu'il n'y a point d'âme noble qui demeure « si fort attachée aux objets des sens qu’elle ne s’en détourne quelque fois »."
	},
	{
		question: "Question n°14 : Que souhaite l'âme noble lorsqu'elle se détourne des sens ?",
		answers: ["Un repos éternel", "Quelque autre plus grand bien", "La domination sur les autres"],
		correct: 2,
		explanation: "Elle se détourne des sens « pour souhaiter quelque autre plus grand bien »."
	},
	{
		question: "Question n°15 : L'âme noble sait-elle toujours en quoi consiste ce « plus grand bien » ?",
		answers: ["Oui, toujours", "Non, elle l'ignore souvent", "Seuls les philosophes le savent"],
		correct: 2,
		explanation: "Descartes précise : « nonobstant qu’elle ignore souvent en quoi il consiste », montrant que le désir précède parfois la connaissance claire."
	},
	{
		question: "Question n°16 : Quelle distinction fondamentale est opérée dans le paragraphe [2] ?",
		answers: ["Entre les riches et les pauvres", "Entre les bêtes brutes (corps) et les hommes (esprit)", "Entre les jeunes et les vieux"],
		correct: 2,
		explanation: "Le texte oppose explicitement les « bêtes brutes », centrées sur le corps, aux « hommes », dont la principale partie est l'esprit."
	},
	{
		question: "Question n°17 : Que révèle l'usage du terme « bêtes brutes » ?",
		answers: ["Une affection pour les animaux", "Une vision mécaniste et hiérarchique du vivant, dépourvu de raison", "Une métaphore politique"],
		correct: 2,
		explanation: "Dans la philosophie cartésienne, les animaux sont des automates sans âme rationnelle, guidés uniquement par la conservation du corps."
	},
	{
		question: "Question n°18 : Quel est le registre dominant de ce texte ?",
		answers: ["Comique et satirique", "Exhortatif et persuasif", "Poétique et lyrique"],
		correct: 2,
		explanation: "Descartes cherche à convaincre le lecteur de l'importance de la philosophie, en l'exhortant à utiliser sa raison et en lui donnant espoir."
	},
	{
		question: "Question n°19 : Que signifie « régler nos mœurs » dans ce contexte ?",
		answers: ["Suivre les lois de la société", "Ordonner et guider notre comportement et notre vie morale", "Réprimer toutes nos émotions"],
		correct: 2,
		explanation: "Pour Descartes, la philosophie a une visée éthique pratique : elle doit servir de guide pour l'action et la vie quotidienne, pas seulement de spéculation."
	},
	{
		question: "Question n°20 : Quelle métaphore filée structure le premier paragraphe ?",
		answers: ["La métaphore du voyage", "La métaphore de la vue et de la lumière", "La métaphore de la guerre"],
		correct: 2,
		explanation: "Descartes utilise le champ lexical de la vue : « yeux fermés », « ouvrir », « plaisir de voir », « vue découvre », « usage de nos yeux »."
	},
	{
		question: "Question n°21 : Quelle métaphore filée structure le second paragraphe ?",
		answers: ["La métaphore alimentaire (nourriture)", "La métaphore architecturale", "La métaphore théâtrale"],
		correct: 1,
		explanation: "On trouve « nourrir », « vraie nourriture », établissant un parallèle entre la nourriture du corps (bêtes) et celle de l'esprit (sagesse)."
	},
	{
		question: "Question n°22 : En quoi ce texte est-il une « propédeutique » ?",
		answers: ["Il conclut une longue démonstration", "Il introduit et prépare l'esprit du lecteur à l'étude de la philosophie", "Il critique les ouvrages précédents"],
		correct: 2,
		explanation: "En tant que préface, ce texte vise à motiver le lecteur, à lui donner l'envie et la confiance nécessaires pour aborder les *Principes*."
	},
	{
		question: "Question n°23 : Que sous-entend Descartes sur la capacité humaine à atteindre la sagesse ?",
		answers: ["Elle est réservée à une élite divine", "Elle est universelle, mais les hommes l'ignorent", "Elle est impossible à atteindre"],
		correct: 2,
		explanation: "Il écrit : « s’ils... sussent combien ils en sont capables », ce qui implique que tout homme a la capacité naturelle d'atteindre la sagesse."
	},
	{
		question: "Question n°24 : Quel est le rapport entre l'esprit et le corps chez l'homme, selon ce texte ?",
		answers: ["Ils sont strictement identiques", "L'esprit est la « principale partie », hiérarchiquement supérieure au corps", "Le corps domine l'esprit"],
		correct: 2,
		explanation: "Descartes affirme que « la principale partie [de l'homme] est l’esprit », reflétant son dualisme substance où la pensée prime sur l'étendue."
	},
	{
		question: "Question n°25 : Que signifie « nonobstant » dans le paragraphe [3] ?",
		answers: ["À cause de", "Malgré le fait que", "En plus de"],
		correct: 2,
		explanation: "« Nonobstant » est un terme de langue classique signifiant « malgré », « en dépit de »."
	},
	{
		question: "Question n°26 : Pourquoi Descartes mentionne-t-il les « objets des sens » ?",
		answers: ["Pour les valoriser comme seule source de vérité", "Pour les opposer aux biens supérieurs de l'esprit", "Pour expliquer le fonctionnement de l'œil"],
		correct: 2,
		explanation: "Les objets des sens représentent les plaisirs immédiats et matériels, que l'âme noble apprend à dépasser pour viser un « plus grand bien »."
	},
	{
		question: "Question n°27 : Quelle est la finalité ultime de la philosophie cartésienne évoquée ici ?",
		answers: ["La contemplation mystique", "La sagesse pratique et la conduite de la vie", "La domination politique"],
		correct: 2,
		explanation: "Le texte lie explicitement la philosophie à l'action : « régler nos mœurs et nous conduire en cette vie »."
	},
	{
		question: "Question n°28 : Que révèle l'expression « sans tâcher jamais de les ouvrir » ?",
		answers: ["Une simple négligence passive", "Une faute active, un refus de faire l'effort de connaître", "Une incapacité physique"],
		correct: 2,
		explanation: "Le verbe « tâcher » implique un effort. Ne pas philosopher n'est pas juste une ignorance, c'est un refus coupable de faire l'effort de connaître."
	},
	{
		question: "Question n°29 : Comment Descartes définit-il implicitement l'homme ?",
		answers: ["Comme un animal politique", "Comme un être dont l'essence est de penser et de chercher la sagesse", "Comme une machine complexe"],
		correct: 2,
		explanation: "En opposant l'homme à la bête et en faisant de l'esprit sa « principale partie », il rappelle sa définition de l'homme comme substance pensante."
	},
	{
		question: "Question n°30 : Quel rôle joue l'« espérance » dans la démarche philosophique selon ce texte ?",
		answers: ["Aucun, la raison suffit", "Elle est une condition nécessaire pour motiver la recherche de la sagesse", "Elle est un obstacle à la raison"],
		correct: 2,
		explanation: "Descartes note que les hommes chercheraient la sagesse « s’ils avaient espérance d’y réussir », faisant de la confiance en soi un préalable à l'effort."
	},
	{
		question: "Question n°31 : Que signifie le mot « mœurs » au XVIIe siècle dans ce contexte ?",
		answers: ["Les coutumes sexuelles", "Les habitudes de comportement, la morale et la façon de vivre", "Les lois écrites de l'État"],
		correct: 2,
		explanation: "Au XVIIe siècle, les « mœurs » désignent l'ensemble des dispositions morales et des habitudes de vie d'une personne."
	},
	{
		question: "Question n°32 : En quoi la philosophie est-elle « plus nécessaire » que la vue ?",
		answers: ["Parce que la vue est inutile", "Parce que guider sa vie morale est plus fondamental que de guider ses pas physiques", "Parce que la philosophie rend aveugle"],
		correct: 2,
		explanation: "C'est une hyperbole argumentative : la lumière de la raison est plus vitale pour l'orientation globale de l'existence que la lumière physique pour la marche."
	},
	{
		question: "Question n°33 : Quelle est la fonction du « je » dans « je m'assure aussi » ?",
		answers: ["Exprimer une opinion subjective faible", "Marquer l'autorité du philosophe qui connaît la nature humaine", "Raconter une anecdote personnelle"],
		correct: 2,
		explanation: "Le « je » cartésien ici n'est pas l'expression d'un doute, mais l'affirmation d'une certitude rationnelle sur la capacité universelle de la raison."
	},
	{
		question: "Question n°34 : Que suggère l'idée que l'âme noble « s'en détourne quelquefois » ?",
		answers: ["Que le détachement des sens est un processus intermittent et un combat", "Que les sens sont totalement mauvais", "Que l'âme noble n'aime pas la nature"],
		correct: 1,
		explanation: "Le terme « quelquefois » montre que l'attachement aux sens est naturel, mais que la noblesse de l'âme réside dans sa capacité à s'en extraire ponctuellement pour viser plus haut."
	},
	{
		question: "Question n°35 : Quel est le lien entre la Préface et le reste des *Principes* ?",
		answers: ["Aucun lien", "La Préface justifie l'utilité pratique de la métaphysique et de la physique qui vont suivre", "La Préface contredit le reste du livre"],
		correct: 2,
		explanation: "Descartes doit convaincre que l'étude ardue des principes de la nature a une finalité morale concrète : la sagesse et la conduite de la vie."
	},
	{
		question: "Question n°36 : Que signifie « vraie nourriture » par opposition à la nourriture des bêtes ?",
		answers: ["Une nourriture biologique supérieure", "Ce qui permet à l'esprit de croître, de se maintenir et de s'épanouir", "Un repas symbolique religieux"],
		correct: 2,
		explanation: "Tout comme le corps périt sans nourriture matérielle, l'esprit dépérit ou reste à l'état brut sans la « nourriture » intellectuelle et morale qu'est la sagesse."
	},
	{
		question: "Question n°37 : Pourquoi Descartes insiste-t-il sur le fait que les hommes « ignorent souvent » en quoi consiste le plus grand bien ?",
		answers: ["Pour les insulter", "Pour justifier la nécessité d'un enseignement philosophique (le sien)", "Pour dire que ce bien n'existe pas"],
		correct: 2,
		explanation: "C'est une justification pédagogique : si les hommes désirent ce bien mais l'ignorent, ils ont besoin de la philosophie pour le leur révéler clairement."
	},
	{
		question: "Question n°38 : Quelle conception du bonheur transparaît dans ce texte ?",
		answers: ["Le bonheur est la satisfaction des désirs sensoriels", "Le bonheur réside dans la sagesse et la connaissance rationnelle", "Le bonheur est inaccessible"],
		correct: 2,
		explanation: "Le « plus grand bien » et la « satisfaction » de la connaissance placent le bonheur dans l'activité rationnelle et morale, non dans les plaisirs éphémères."
	},
	{
		question: "Question n°39 : Que dénonce implicitement Descartes en parlant de ceux qui ne cherchent pas la sagesse ?",
		answers: ["L'ignorance volontaire et le manque de confiance en sa propre raison", "La pauvreté matérielle", "L'excès de travail"],
		correct: 1,
		explanation: "Il dénonce une forme de lâcheté intellectuelle : ne pas essayer d'ouvrir les yeux ou abandonner par manque d'espérance, alors que la capacité est là."
	},
	{
		question: "Question n°40 : En quoi ce texte s'oppose-t-il au scepticisme ?",
		answers: ["Il affirme que la connaissance est possible et satisfaisante", "Il dit que tout est illusion", "Il nie l'existence de l'esprit"],
		correct: 1,
		explanation: "En parlant de la « satisfaction que donne la connaissance » et de l'« espérance d'y réussir », Descartes s'oppose à l'idée que la vérité serait hors de portée de l'homme."
	},
	{
		question: "Question n°41 : Quelle est la valeur de l'argument par l'absurde implicite concernant les bêtes ?",
		answers: ["Il n'y en a pas", "Si l'homme ne cherche pas la sagesse, il se réduit au rang de la bête, ce qui est absurde vu sa nature", "Il prouve que les bêtes sont philosophes"],
		correct: 2,
		explanation: "L'argument est : l'homme a un esprit (contrairement à la bête) ; s'il ne nourrit pas son esprit, il néglige sa propre essence, se rabaissant au niveau de la brute."
	},
	{
		question: "Question n°42 : Que signifie « tant soit peu noble » ?",
		answers: ["Uniquement les rois et les princes", "Même la plus petite marque de noblesse ou d'élévation morale", "Les personnes riches"],
		correct: 2,
		explanation: "L'expression signifie « même légèrement » ou « à un degré quelconque ». Cela universalise le désir du bien : il est présent en tout homme ayant un minimum d'élévation."
	},
	{
		question: "Question n°43 : Quel est le mouvement logique du texte ?",
		answers: ["Du général au particulier", "De la métaphore de la vue, à l'opposition homme/bête, puis à l'aspiration intérieure de l'âme", "De la conclusion aux prémisses"],
		correct: 2,
		explanation: "Le texte progresse : 1. Nécessité de la philosophie (vue) -> 2. Nature de l'homme vs animal (nourriture) -> 3. Preuve interne de cette aspiration (l'âme noble)."
	},
	{
		question: "Question n°44 : En quoi la philosophie est-elle un « devoir » selon ce texte ?",
		answers: ["Elle est imposée par la loi", "Elle découle de notre nature d'être spirituel qui doit se nourrir adéquatement", "Elle est une punition"],
		correct: 2,
		explanation: "Puisque l'esprit est notre « principale partie », le rechercher la sagesse n'est pas un loisir, mais l'accomplissement de notre nature, donc un devoir envers soi-même."
	},
	{
		question: "Question n°45 : Que signifie « s'occupent continuellement » à propos des bêtes ?",
		answers: ["Qu'elles sont très productives", "Qu'elles sont enfermées dans l'immédiateté et la nécessité biologique", "Qu'elles ont un emploi du temps"],
		correct: 2,
		explanation: "Cela souligne l'absence de liberté et de transcendance chez l'animal, entièrement captif de la nécessité de survie corporelle."
	},
	{
		question: "Question n°46 : Quel est le rôle de la conjonction « et, enfin » dans le paragraphe [1] ?",
		answers: ["Marquer la fin du livre", "Introduire l'argument le plus fort et la conclusion pratique de la phrase", "Signaler une contradiction"],
		correct: 2,
		explanation: "« Et, enfin » sert à amener le point culminant de l'argument : la philosophie n'est pas seulement un plaisir, c'est une nécessité vitale pour l'action."
	},
	{
		question: "Question n°47 : Comment ce texte défend-il la rationalité ?",
		answers: ["En la présentant comme froide et sans émotion", "En la présentant comme source de « satisfaction » et de « plaisir » supérieur", "En la rejetant"],
		correct: 2,
		explanation: "Descartes ne sépare pas raison et plaisir : la connaissance rationnelle procure une « satisfaction » supérieure au plaisir sensible, rendant la raison désirable."
	},
	{
		question: "Question n°48 : Que signifie le mot « consiste » dans « en quoi il consiste » ?",
		answers: ["En quoi il dépense de l'argent", "En quoi il réside, quelle est sa nature", "En quoi il est solide"],
		correct: 2,
		explanation: "Au sens classique, « consister » signifie « résider », « être constitué de ». L'âme ignore quelle est la nature profonde de ce bien supérieur."
	},
	{
		question: "Question n°49 : Quelle vision de l'éducation philosophique ce texte promeut-il ?",
		answers: ["Une éducation élitiste et fermée", "Une éducation qui donne confiance et révèle à chacun sa propre capacité", "Une éducation purement livresque"],
		correct: 2,
		explanation: "En disant que les hommes réussiraient « s’ils sussent combien ils en sont capables », Descartes propose une philosophie émancipatrice qui restaure l'estime de soi."
	},
	{
		question: "Question n°50 : Quelle est la thèse centrale de cet extrait ?",
		answers: ["La philosophie est une perte de temps", "La philosophie est une nécessité vitale pour l'homme, car elle est la nourriture de l'esprit et le guide de l'action, accessible à tous", "Les animaux sont supérieurs aux hommes"],
		correct: 2,
		explanation: "L'ensemble du texte converge vers cette idée : vivre sans philosophie est une mutilation volontaire, alors que la sagesse est la vocation naturelle et accessible de tout esprit humain."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "Nécessité de la philosophie (Descartes)" },
		{ key: 1, parent: 0, text: "1. Vivre sans philosopher" },
		{ key: 2, parent: 1, text: "C'est avoir les yeux fermés" },
		{ key: 3, parent: 1, text: "C'est refuser de tâcher de les ouvrir" },
		{ key: 4, parent: 0, text: "2. Supériorité de la connaissance" },
		{ key: 5, parent: 4, text: "Plaisir de la vue < Satisfaction de la philosophie" },
		{ key: 6, parent: 4, text: "Plus nécessaire pour régler nos mœurs que la vue pour guider nos pas" },
		{ key: 7, parent: 0, text: "3. Distinction Homme / Bête" },
		{ key: 8, parent: 7, text: "Bêtes brutes : conservent le corps, cherchent nourriture matérielle" },
		{ key: 9, parent: 7, text: "Hommes : principale partie = l'esprit" },
		{ key: 10, parent: 9, text: "Doivent chercher la sagesse (vraie nourriture)" },
		{ key: 11, parent: 0, text: "4. Capacité et aspiration humaines" },
		{ key: 12, parent: 11, text: "Les hommes en sont capables (manque d'espérance, pas de capacité)" },
		{ key: 13, parent: 11, text: "L'âme noble se détourne des sens" },
		{ key: 14, parent: 13, text: "Pour souhaiter un plus grand bien (même si elle l'ignore)" }
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
			origine: "René Descartes, Préface aux Principes de la philosophie, 1644",
			theme: "La vérité",
			these: "La recherche de la sagesse et de la connaissance est la vocation essentielle et la « vraie nourriture » de l'esprit humain, le distinguant radicalement de l'animalité, et constitue le « plus grand bien » vers lequel toute âme noble tend naturellement.",
			interet: "Ce texte est intéressant car il fonde la dignité humaine sur la quête de la vérité. En opposant la simple conservation du corps (vie animale) à l'exercice de l'esprit, Descartes élève la philosophie au rang de nécessité vitale et de guide de l'existence, accessible à tous ceux qui acceptent d'« ouvrir les yeux » au-delà des illusions des sens.",
			problematique: "En quoi la quête de la sagesse et de la vérité constitue-t-elle la spécificité et la nécessité absolue de la condition humaine, la distinguant de la simple vie animale et de l'attachement aux objets des sens ?"
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
			"text": "DÉBUT\nComment vivre ?\nAvec ou sans philosophie ?",
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
			"text": "Vivre sans philosopher,\nest-ce acceptable ?",
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
			"text": "NON : C'est avoir\nles yeux fermés.\nLa philosophie est plus\nnécessaire pour régler\nnos mœurs que la vue\npour guider nos pas",
			"loc": "480 259.98",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 120,
			"revealed": true
		},
		{
			"key": "4",
			"text": "Quelle est la nature\nde l'être humain ?",
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
			"text": "Bêtes : corps → cherchent nourriture.\nHommes : esprit → doivent chercher la\nsagesse (vraie nourriture)",
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
			"text": "L'homme est-il\ncapable de sagesse ?",
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
			"text": "OUI : S'ils avaient\nespérance et savaient\nleur capacité, ils la\nchercheraient.\nL'âme noble souhaite\ntoujours un plus grand\nbien au-delà des sens",
			"loc": "1034.36 266.25",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 120,
			"revealed": true
		},
		{
			"key": "8",
			"text": "FIN\nDONC la philosophie\nest la vocation naturelle\net nécessaire de tout\nhomme pour atteindre\nla sagesse.",
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
