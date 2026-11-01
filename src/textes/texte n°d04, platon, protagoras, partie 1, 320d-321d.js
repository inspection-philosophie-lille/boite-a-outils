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
const sousTitre = "Tester ses connaissances sur un texte de Platon (Protagoras)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Au moment de produire à la lumière les races mortelles, les dieux ordonnèrent à Prométhée et à Epiméthée de distinguer entre elles toutes les qualités dont elles avaient à être pourvues. [2] Epiméthée demanda à Prométhée de lui laisser le soin de faire lui-même la distribution. (…) [3] Dans cette distribution, il donne aux uns la force sans la vitesse ; aux plus faibles, il attribue le privilège de la rapidité ; à certains il accorde des armes. (…) [4] Bref, entre toutes les qualités, il maintient un équilibre. (…) [5] Après qu'il les ait prémunis suffisamment contre les destructions réciproques, il s'occupa de les défendre contre les intempéries qui viennent de Zeus, les revêtant de poils touffus et de peaux épaisses, abris contre le froid, abris aussi contre la chaleur. (…) [6] Or Epiméthée, dont la sagesse était imparfaite, avait déjà dépensé, sans y prendre garde, toutes les facultés en faveur des animaux, et il lui restait encore à pourvoir l'espèce humaine. (…) [7] Dans cet embarras, survient Prométhée pour inspecter le travail. [8] Celui-ci voit toutes les autres races harmonieusement équipées, et l'homme nu, sans chaussures, sans couvertures, sans armes. (…) [9] Prométhée, devant cette difficulté, ne sachant quel moyen de salut trouver l'homme, se décide à dérober l'habileté artiste d'Héphaestos et d'Athéna, et en même temps le feu — car, sans le feu, il était impossible que cette habilité rendit aucun service — puis, cela fait, il en fit présent à l'homme. [10] C'est ainsi que l'homme fut mis en possession des arts utiles à la vie. »",
	source: "Platon, <em>Protagoras</em>, 320d-321d"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Aristote", "Platon", "Homère"],
		correct: 2,
		explanation: "Le texte est extrait du dialogue *Protagoras* de Platon."
	},
	{
		question: "Question n°2 : Quel personnage du dialogue prononce ce récit ?",
		answers: ["Socrate", "Protagoras", "Gorgias"],
		correct: 2,
		explanation: "C'est le sophiste Protagoras qui raconte ce mythe pour expliquer l'origine de la vertu politique et des compétences humaines."
	},
	{
		question: "Question n°3 : Quelle était la mission confiée par les dieux à Prométhée et Épiméthée ?",
		answers: ["Créer l'univers", "Distinguer et distribuer les qualités aux races mortelles", "Détruire les monstres"],
		correct: 2,
		explanation: "Les dieux leur ordonnèrent de « distinguer entre elles toutes les qualités dont elles avaient à être pourvues »."
	},
	{
		question: "Question n°4 : Qui se charge effectivement de faire la distribution des qualités ?",
		answers: ["Prométhée", "Épiméthée", "Zeus"],
		correct: 2,
		explanation: "Le texte précise : « Epiméthée demanda à Prométhée de lui laisser le soin de faire lui-même la distribution »."
	},
	{
		question: "Question n°5 : Comment Épiméthée répartit-il les qualités entre les animaux ?",
		answers: ["Il donne tout aux plus forts", "Il maintient un équilibre entre toutes les qualités", "Il oublie la plupart des espèces"],
		correct: 2,
		explanation: "Le texte indique : « Bref, entre toutes les qualités, il maintient un équilibre »."
	},
	{
		question: "Question n°6 : Que donne Épiméthée aux animaux les plus faibles ?",
		answers: ["La force brute", "Le privilège de la rapidité", "Des armes tranchantes"],
		correct: 2,
		explanation: "« aux plus faibles, il attribue le privilège de la rapidité »."
	},
	{
		question: "Question n°7 : Quel est le but de cette distribution équilibrée ?",
		answers: ["Prémunir les races contre les destructions réciproques", "Faire de l'homme le roi des animaux", "Plaire à Zeus"],
		correct: 1,
		explanation: "Il les prémunit « suffisamment contre les destructions réciproques »."
	},
	{
		question: "Question n°8 : Comment les animaux sont-ils protégés contre les intempéries de Zeus ?",
		answers: ["Par des abris construits", "Par des poils touffus et des peaux épaisses", "Par la migration saisonnière"],
		correct: 2,
		explanation: "Il les revêt « de poils touffus et de peaux épaisses, abris contre le froid, abris aussi contre la chaleur »."
	},
	{
		question: "Question n°9 : Quelle est la faille d'Épiméthée mentionnée au §6 ?",
		answers: ["Sa méchanceté", "Sa sagesse imparfaite", "Sa lenteur"],
		correct: 2,
		explanation: "Le texte dit : « Or Epiméthée, dont la sagesse était imparfaite, avait déjà dépensé... toutes les facultés »."
	},
	{
		question: "Question n°10 : Que reste-t-il à pourvoir après la distribution d'Épiméthée ?",
		answers: ["Les plantes", "L'espèce humaine", "Les dieux mineurs"],
		correct: 2,
		explanation: "« il lui restait encore à pourvoir l'espèce humaine »."
	},
	{
		question: "Question n°11 : Dans quel état Prométhée trouve-t-il l'homme ?",
		answers: ["Déjà équipé de fourrures", "Nu, sans chaussures, sans couvertures, sans armes", "En train de construire un abri"],
		correct: 2,
		explanation: "Prométhée voit « l'homme nu, sans chaussures, sans couvertures, sans armes »."
	},
	{
		question: "Question n°12 : Que fait Prométhée face à cette difficulté ?",
		answers: ["Il demande de l'aide à Zeus", "Il se décide à dérober l'habileté artiste et le feu", "Il abandonne l'homme à son sort"],
		correct: 2,
		explanation: "Il « se décide à dérober l'habileté artiste d'Héphaestos et d'Athéna, et en même temps le feu »."
	},
	{
		question: "Question n°13 : De qui Prométhée vole-t-il l'habileté artiste (la technè) ?",
		answers: ["De Zeus et d'Héra", "D'Héphaestos et d'Athéna", "De Poséidon et d'Apollon"],
		correct: 2,
		explanation: "Il la dérobe à « Héphaestos et d'Athéna »."
	},
	{
		question: "Question n°14 : Pourquoi le feu est-il indispensable selon le texte ?",
		answers: ["Pour se chauffer uniquement", "Car sans lui, l'habileté artiste ne pouvait rendre aucun service", "Pour faire fuir les animaux"],
		correct: 2,
		explanation: "« car, sans le feu, il était impossible que cette habilité rendit aucun service »."
	},
	{
		question: "Question n°15 : Quel est le résultat final du don de Prométhée ?",
		answers: ["L'homme devient immortel", "L'homme fut mis en possession des arts utiles à la vie", "L'homme devient l'égal des dieux"],
		correct: 2,
		explanation: "« C'est ainsi que l'homme fut mis en possession des arts utiles à la vie »."
	},
	{
		question: "Question n°16 : Que signifie littéralement le nom « Épiméthée » ?",
		answers: ["Celui qui réfléchit avant", "Celui qui réfléchit après (l'après-coup)", "Le bienfaiteur"],
		correct: 2,
		explanation: "En grec, *Epimêtheus* signifie « celui qui pense après », ce qui explique son oubli final de l'homme."
	},
	{
		question: "Question n°17 : Que signifie littéralement le nom « Prométhée » ?",
		answers: ["Celui qui réfléchit avant (la prévoyance)", "Celui qui vole", "Le créateur"],
		correct: 1,
		explanation: "En grec, *Promêtheus* signifie « celui qui pense avant », ce qui lui permet de trouver une solution de rattrapage."
	},
	{
		question: "Question n°18 : Quel type de discours ce passage représente-t-il dans le dialogue ?",
		answers: ["Un mythe (mythos)", "Une démonstration mathématique", "Un syllogisme"],
		correct: 1,
		explanation: "Protagoras introduit ce récit comme un « mythe » pour illustrer son propos avant de passer à l'argumentation rationnelle (logos)."
	},
	{
		question: "Question n°19 : Que révèle ce mythe sur la condition naturelle de l'homme ?",
		answers: ["L'homme est naturellement parfait", "L'homme est un être inachevé, carencé par rapport aux animaux", "L'homme est naturellement destiné à dominer"],
		correct: 2,
		explanation: "L'homme est laissé « nu, sans chaussures, sans couvertures, sans armes », montrant une absence de déterminisme naturel positif."
	},
	{
		question: "Question n°20 : Quelle notion philosophique centrale est introduite par le don de Prométhée ?",
		answers: ["La justice (dikè)", "La technique (technè)", "La tempérance (sôphrosynè)"],
		correct: 2,
		explanation: "Le don est l'« habileté artiste » (technè), qui compense le manque naturel de l'homme."
	},
	{
		question: "Question n°21 : Pourquoi Épiméthée a-t-il épuisé toutes les facultés ?",
		answers: ["Parce qu'il était avare", "Parce qu'il les a dépensées « sans y prendre garde »", "Parce que les dieux lui en ont donné trop peu"],
		correct: 2,
		explanation: "Son manque de prévoyance (sagesse imparfaite) l'a conduit à tout distribuer sans réserver de part pour l'homme."
	},
	{
		question: "Question n°22 : Que symbolise le vol commis par Prométhée ?",
		answers: ["La criminalité inhérente à l'homme", "Le passage de l'état de nature à l'état de culture par un acte de transgression", "La colère des dieux"],
		correct: 2,
		explanation: "La culture (les arts) n'est pas un don naturel pacifique, mais le fruit d'un arrachement (vol) au domaine divin."
	},
	{
		question: "Question n°23 : Dans la suite du dialogue (hors extrait), que manquait-il encore à l'homme pour vivre en cité ?",
		answers: ["La nourriture", "L'art politique et la justice (donnés plus tard par Zeus)", "Le langage"],
		correct: 2,
		explanation: "La technè sauve l'homme physiquement, mais Protagoras ajoute ensuite que Zeus dut envoyer la justice et la pudeur pour que les hommes puissent vivre ensemble sans s'entre-détruire."
	},
	{
		question: "Question n°24 : Que signifie « produire à la lumière » (§1) ?",
		answers: ["Créer physiquement", "Faire apparaître, façonner et organiser les espèces", "Éclairer le monde"],
		correct: 2,
		explanation: "C'est une périphrase pour désigner l'acte de création et d'organisation des espèces vivantes."
	},
	{
		question: "Question n°25 : Quelle est la fonction de l'énumération « nu, sans chaussures, sans couvertures, sans armes » ?",
		answers: ["Montrer la richesse du vocabulaire", "Souligner par accumulation la carence totale et la vulnérabilité originaire de l'homme", "Décrire la mode de l'époque"],
		correct: 2,
		explanation: "Cette énumération insiste sur l'absence totale de protections naturelles, contrairement aux animaux."
	},
	{
		question: "Question n°26 : En quoi ce texte s'oppose-t-il à l'idée d'un âge d'or naturel ?",
		answers: ["Il le confirme", "Il montre que l'origine de l'homme est marquée par le manque et la nécessité, non par l'abondance", "Il ne parle pas de l'origine"],
		correct: 2,
		explanation: "L'homme ne naît pas dans un paradis naturel ; il doit conquérir sa survie grâce à la technique."
	},
	{
		question: "Question n°27 : Que représente Zeus dans ce passage ?",
		answers: ["Un bienfaiteur direct de l'homme", "La puissance naturelle (intempéries) contre laquelle il faut se protéger", "Un personnage absent"],
		correct: 2,
		explanation: "Ici, Zeus est mentionné comme la source des « intempéries », une force naturelle à laquelle les animaux doivent résister."
	},
	{
		question: "Question n°28 : Pourquoi Prométhée « inspecte »-t-il le travail ?",
		answers: ["Par curiosité oisive", "Parce qu'il est responsable et prévoyant, vérifiant le résultat de la distribution", "Pour punir son frère"],
		correct: 2,
		explanation: "Cela illustre son nom (prévoyance) : il vérifie a posteriori le travail d'Épiméthée pour corriger les erreurs."
	},
	{
		question: "Question n°29 : Que signifie « habileté artiste » dans la traduction ?",
		answers: ["La peinture et la sculpture", "La technè, c'est-à-dire le savoir-faire technique et artisanal", "La ruse politique"],
		correct: 2,
		explanation: "Le terme grec est *technè*, qui englobe tous les savoir-faire pratiques et artisanaux (forge, tissage, agriculture, etc.)."
	},
	{
		question: "Question n°30 : Quelle est la relation entre la nature et la technique selon ce mythe ?",
		answers: ["La technique détruit la nature", "La technique compense les déficiences de la nature humaine", "La nature et la technique sont identiques"],
		correct: 2,
		explanation: "La *technè* est une réponse artificielle à une carence naturelle (le manque de griffes, de fourrure, etc.)."
	},
	{
		question: "Question n°31 : Pourquoi les autres races sont-elles « harmonieusement équipées » ?",
		answers: ["Parce qu'elles sont divines", "Parce qu'Épiméthée a réussi l'équilibre des compensations entre elles", "Parce qu'elles n'ont pas besoin de technique"],
		correct: 2,
		explanation: "L'harmonie résulte de la distribution compensatoire (force vs vitesse, etc.) opérée par Épiméthée."
	},
	{
		question: "Question n°32 : Que nous apprend ce texte sur la conception grecque de l'homme ?",
		answers: ["L'homme est un animal comme les autres", "L'homme est un être à part, défini par ce qu'il n'a pas naturellement et ce qu'il doit acquérir", "L'homme est un dieu déchu"],
		correct: 2,
		explanation: "L'identité humaine se construit par l'acquisition (la culture) et non par l'inné (la nature)."
	},
	{
		question: "Question n°33 : Quel est le ton de ce récit ?",
		answers: ["Tragique et désespéré", "Pédagogique, imagé et explicatif", "Satirique et moqueur"],
		correct: 2,
		explanation: "Protagoras utilise un récit imagé pour rendre accessible et convaincante une thèse sur l'origine des compétences humaines."
	},
	{
		question: "Question n°34 : Que signifie « moyen de salut » (§9) ?",
		answers: ["Le salut religieux de l'âme", "La survie physique et la capacité à subvenir à ses besoins", "La victoire à la guerre"],
		correct: 2,
		explanation: "Il s'agit de trouver comment l'homme peut survivre et vivre décemment malgré son dénuement naturel."
	},
	{
		question: "Question n°35 : Pourquoi le feu est-il volé en même temps que l'habileté artiste ?",
		answers: ["Parce que Prométhée avait froid", "Car le feu est la condition matérielle de possibilité de la plupart des techniques (forge, cuisson, etc.)", "Pour éclairer la nuit"],
		correct: 2,
		explanation: "Le texte le dit explicitement : « sans le feu, il était impossible que cette habilité rendît aucun service »."
	},
	{
		question: "Question n°36 : En quoi ce mythe prépare-t-il la thèse de Protagoras sur l'enseignement ?",
		answers: ["Il montre que tout est inné", "Il montre que les compétences humaines (arts, vertu) s'acquièrent et se transmettent, elles ne sont pas innées", "Il dit que seul Zeus peut enseigner"],
		correct: 2,
		explanation: "Si l'homme n'a rien reçu de naturel, tout ce qu'il a (technique, et plus tard vertu politique) doit être appris et transmis."
	},
	{
		question: "Question n°37 : Que signifie « distinguer entre elles » (§1) ?",
		answers: ["Séparer pour opposer", "Répartir de manière différenciée selon les besoins de chaque espèce", "Créer des conflits"],
		correct: 2,
		explanation: "Il s'agit d'attribuer à chaque espèce les qualités spécifiques qui lui permettront de survivre."
	},
	{
		question: "Question n°38 : Quelle est la limite de la technique (technè) donnée par Prométhée dans ce passage ?",
		answers: ["Elle rend l'homme immortel", "Elle ne suffit pas à garantir la vie en communauté politique (il manque la justice)", "Elle rend l'homme méchant"],
		correct: 2,
		explanation: "Bien que hors du passage strict, le contexte du *Protagoras* montre que la technique ne suffit pas à empêcher les hommes de s'entre-tuer ; il faudra l'intervention de Zeus."
	},
	{
		question: "Question n°39 : Que représente Héphaestos dans ce contexte ?",
		answers: ["Le dieu de la guerre", "Le dieu forgeron, symbole de l'artisanat et de la technique", "Le dieu de la mer"],
		correct: 2,
		explanation: "Héphaestos est le dieu du feu et des artisans, source de l'habileté manuelle et technique."
	},
	{
		question: "Question n°40 : Que représente Athéna dans ce contexte ?",
		answers: ["La déesse de l'amour", "La déesse de la sagesse et des arts, protectrice des cités", "La déesse de la chasse"],
		correct: 2,
		explanation: "Athéna incarne l'intelligence appliquée et les arts civilisateurs."
	},
	{
		question: "Question n°41 : Pourquoi Épiméthée demande-t-il à faire la distribution lui-même ?",
		answers: ["Par arrogance", "Le texte ne le dit pas explicitement, mais cela montre son initiative qui tournera à la maladresse", "Par ordre de Zeus"],
		correct: 2,
		explanation: "C'est une initiative qui révèle son manque de prévoyance, créant la situation de crise que Prométhée devra résoudre."
	},
	{
		question: "Question n°42 : Que signifie « arts utiles à la vie » ?",
		answers: ["Les beaux-arts", "Les techniques de survie et de production (vêtement, habitation, agriculture, etc.)", "La magie"],
		correct: 2,
		explanation: "Ce sont les savoir-faire pratiques qui permettent à l'homme de subvenir à ses besoins et de survivre."
	},
	{
		question: "Question n°43 : En quoi ce texte est-il fondateur pour l'anthropologie philosophique ?",
		answers: ["Il nie la spécificité humaine", "Il définit l'homme comme un être de culture et de technique, et non comme un être de nature", "Il définit l'homme par sa biologie"],
		correct: 2,
		explanation: "C'est l'une des premières formulations de l'idée que l'homme se construit lui-même par la technique en raison de son inachèvement biologique."
	},
	{
		question: "Question n°44 : Quel est le rapport entre Prométhée et l'humanité dans ce récit ?",
		answers: ["Il est leur ennemi", "Il est leur bienfaiteur (philanthrope)", "Il est indifférent"],
		correct: 2,
		explanation: "En volant le feu et la technique pour les donner aux hommes, Prométhée agit en bienfaiteur de l'humanité."
	},
	{
		question: "Question n°45 : Que signifie « sans y prendre garde » (§6) ?",
		answers: ["Avec une grande attention", "Par négligence, sans anticiper les conséquences futures", "Avec méchanceté"],
		correct: 2,
		explanation: "Cela souligne l'absence de prévoyance d'Épiméthée, qui épuise les ressources sans penser à la dernière espèce à créer."
	},
	{
		question: "Question n°46 : Pourquoi les animaux n'ont-ils pas besoin de technique selon ce mythe ?",
		answers: ["Parce qu'ils sont stupides", "Parce qu'ils sont déjà équipés par la nature (fourrure, griffes, vitesse)", "Parce qu'ils sont immortels"],
		correct: 2,
		explanation: "La nature a pourvu à leurs besoins, rendant la *technè* inutile pour eux, contrairement à l'homme."
	},
	{
		question: "Question n°47 : Quelle est la fonction du mythe dans la stratégie argumentative de Protagoras ?",
		answers: ["Remplacer toute argumentation", "Préparer l'esprit de l'auditeur à accepter l'idée que la vertu et la technique s'enseignent", "Divertir Socrate"],
		correct: 2,
		explanation: "Le mythe sert de propédeutique : il rend plausible l'idée que les qualités humaines ne sont pas innées mais acquises."
	},
	{
		question: "Question n°48 : Que signifie « prémunir » (§5) ?",
		answers: ["Attaquer", "Protéger à l'avance, mettre en défense", "Nourrir"],
		correct: 2,
		explanation: "Prémunir signifie prendre des mesures pour se protéger contre un danger éventuel (ici, les intempéries et les destructions réciproques)."
	},
	{
		question: "Question n°49 : En quoi la solution de Prométhée est-elle précaire ?",
		answers: ["Elle est illégale (vol) et ne résout pas tout (il manque la politique)", "Elle est trop coûteuse", "Elle rend l'homme faible"],
		correct: 1,
		explanation: "Le vol expose Prométhée à la colère de Zeus, et la technique seule ne suffit pas à organiser la cité (d'où le besoin ultérieur de la justice)."
	},
	{
		question: "Question n°50 : Quelle est la thèse globale de cet extrait ?",
		answers: ["Les dieux ont tout donné à l'homme", "L'homme, oublié par la nature, doit sa survie au don prométhéen de la technique et du feu", "La nature est toujours plus forte que la technique"],
		correct: 2,
		explanation: "Le mythe explique que la condition humaine est définie par un manque originaire, comblé non par la nature, mais par l'apport artificiel de la technique."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "Le mythe de Prométhée et Épiméthée (Platon)" },
		{ key: 1, parent: 0, text: "La commande divine" },
		{ key: 2, parent: 1, text: "[1] Produire les races mortelles" },
		{ key: 3, parent: 1, text: "[1] Distribuer les qualités nécessaires" },
		{ key: 4, parent: 0, text: "La distribution d'Épiméthée" },
		{ key: 5, parent: 4, text: "[3-4] Équilibre des qualités (force, vitesse, armes)" },
		{ key: 6, parent: 4, text: "[5] Protection contre les intempéries (poils, peaux)" },
		{ key: 7, parent: 4, text: "[6] Erreur : épuisement des facultés avant l'homme" },
		{ key: 8, parent: 0, text: "La carence humaine" },
		{ key: 9, parent: 8, text: "[8] L'homme est nu, sans chaussures, sans couvertures, sans armes" },
		{ key: 10, parent: 0, text: "La solution de Prométhée" },
		{ key: 11, parent: 10, text: "[9] Vol de l'habileté artiste (Héphaestos/Athéna)" },
		{ key: 12, parent: 10, text: "[9] Vol du feu (condition de la technique)" },
		{ key: 13, parent: 10, text: "[10] Résultat : l'homme possède les arts utiles à la vie" }
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
			origine: "Platon, Protagoras, 320d-321d",
			theme: "La technique",
			these: "L'homme, oublié par la nature et dépourvu de défenses physiques, doit sa survie et son essor non à des dons innés, mais à l'acquisition de la technique (technè) et du feu, compensant ainsi sa carence originaire par la culture.",
			interet: "Ce mythe est un texte fondateur de l'anthropologie philosophique. Il illustre l'idée que l'homme est un être « inachevé » biologiquement, et que c'est précisément ce manque qui le contraint à inventer la technique et la culture. Il prépare l'argument central de Protagoras : si les compétences techniques sont acquises, la vertu politique l'est aussi, et peut donc s'enseigner.",
			problematique: "En quoi le mythe de la distribution des qualités montre-t-il que la condition humaine est définie par un manque naturel que seule la technique (technè) peut compenser ?"
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
			"text": "DÉBUT\nMission divine :\nÉquiper les races\nmortelles de qualités.",
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
			"text": "ACTION D'ÉPIMÉTHÉE :\nDistribution équilibrée\naux animaux (force,\nvitesse, protection).",
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
			"text": "L'ERREUR :\nSagesse imparfaite.\nToutes les facultés\nsont épuisées avant\nl'homme.",
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
			"text": "CONSÉQUENCE :\nL'homme est laissé\nnu, sans armes,\nsans abri naturel.",
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
			"text": "INTERVENTION DE\nPROMÉTHÉE :\nInspection et\nconstat de la\ndétresse humaine.",
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
			"text": "LA SOLUTION :\nVol de l'habileté\nartiste (technè)\net du feu divin.",
			"loc": "1319.74 120",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "7",
			"text": "FIN\nL'homme reçoit\nles arts utiles\nà la vie (compensation\ndu manque naturel).",
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
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "3",
			"to": "5",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "5",
			"to": "6",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "6",
			"to": "7",
			"fromSide": "right",
			"toSide": "left"
		}
	]
};