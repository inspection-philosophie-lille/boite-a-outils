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
const sousTitre = "Tester ses connaissances sur un texte de Descartes (Discours de la méthode)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] J'ai été nourri aux lettres dès mon enfance, et parce qu'on me persuadait que, par leur moyen, on pouvait acquérir une connaissance claire et assurée de tout ce qui est utile à la vie, j'avais un extrême désir de les apprendre. [2] Mais, sitôt que j'eus achevé tout ce cours d'études, au bout duquel on a coutume d'être reçu au rang des doctes, je changeai entièrement d'opinion. [3] Car je me trouvais embarrassé de tant de doutes et d'erreurs, qu'il me semblait n'avoir fait autre profit, en tâchant de m'instruire, sinon que j'avais découvert de plus en plus mon ignorance. [4] Et néanmoins j'étais en l'une des plus célèbres écoles de l'Europe, où je pensais qu'il devait y avoir de savants hommes, s'il y en avait en aucun endroit de la terre. [5] J'y avais appris tout ce que les autres y apprenaient ; et même, ne m'étant pas contenté des sciences qu'on nous enseignait, j'avais parcouru tous les livres, traitant de celles qu'on estime les plus curieuses et les plus rares, qui avaient pu tomber entre mes mains. [6] Avec cela, je savais les jugements que les autres faisaient de moi ; et je ne voyais point qu'on m'estimât inférieur à mes condisciples, bien qu'il y en eût déjà entre eux quelques-uns, qu'on destinait à remplir les places de nos maîtres. [7] Et enfin notre siècle me semblait aussi fleurissant, et aussi fertile en bons esprits, qu'ait été aucun des précédents. [8] Ce qui me faisait prendre la liberté de juger par moi de tous les autres, et de penser qu'il n'y avait aucune doctrine dans le monde qui fût telle qu'on m'avait auparavant fait espérer. [9] Je ne laissais pas toutefois d'estimer les exercices, auxquels on s'occupe dans les écoles. [10] Je savais que les langues, qu'on y apprend, sont nécessaires pour l'intelligence des livres anciens ; [11] que la gentillesse des fables réveille l'esprit ; [12] que les actions mémorables des histoires le relèvent, et qu'étant lues avec discrétion, elles aident à former le jugement ; [13] que la lecture de tous les bons livres est comme une conversation avec les plus honnêtes gens des siècles passés, qui en ont été les auteurs, et même une conversation étudiée, en laquelle ils ne nous découvrent que les meilleures de leurs pensées ; [14] que l'éloquence a des forces et des beautés incomparables ; [15] que la poésie a des délicatesses et des douceurs très ravissantes ; [16] que les mathématiques ont des inventions très subtiles et qui peuvent beaucoup servir, tant à contenter les curieux, qu'à faciliter tous les arts et diminuer le travail des hommes ; [17] que les écrits qui traitent des mœurs contiennent plusieurs enseignements et plusieurs exhortations à la vertu qui sont fort utiles ; [18] que la théologie enseigne à gagner le ciel ; [19] que la philosophie donne moyen de parler vraisemblablement de toutes choses, et se faire admirer des moins savants ; [20] que la jurisprudence, la médecine et les autres sciences apportent des honneurs et des richesses à ceux qui les cultivent ; [21] et enfin, qu'il est bon de les avoir toutes examinées, même les plus superstitieuses et les plus fausses, afin de connaître leur juste valeur et se garder d'en être trompé. »",
	source: "René Descartes, <em>Discours de la méthode</em>, Première partie, §6 et suivants (1637)"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Michel de Montaigne", "René Descartes", "Blaise Pascal"],
		correct: 2,
		explanation: "Le texte est extrait du *Discours de la méthode*, œuvre fondatrice de René Descartes publiée en 1637."
	},
	{
		question: "Question n°2 : De quelle partie du *Discours de la méthode* ce passage est-il tiré ?",
		answers: ["De la Première partie", "De la Deuxième partie", "De la Sixième partie"],
		correct: 1,
		explanation: "Il s'agit du célèbre récit de formation et du bilan des études situé dans la Première partie de l'ouvrage."
	},
	{
		question: "Question n°3 : Quel était le désir initial de Descartes concernant les lettres (§1) ?",
		answers: ["Un désir modéré", "Un extrême désir", "Un rejet immédiat"],
		correct: 2,
		explanation: "Il écrit : « j'avais un extrême désir de les apprendre », motivé par la promesse d'une connaissance claire et assurée."
	},
	{
		question: "Question n°4 : Que se passe-t-il sitôt que Descartes achève son cours d'études (§2) ?",
		answers: ["Il devient professeur", "Il change entièrement d'opinion", "Il commence à écrire ses méditations"],
		correct: 2,
		explanation: "Le texte indique : « je changeai entièrement d'opinion »."
	},
	{
		question: "Question n°5 : Quel est le seul « profit » que Descartes pense avoir tiré de ses études (§3) ?",
		answers: ["Devenir riche", "Avoir découvert de plus en plus son ignorance", "Maîtriser la rhétorique"],
		correct: 2,
		explanation: "Il affirme n'avoir fait « autre profit... sinon que j'avais découvert de plus en plus mon ignorance »."
	},
	{
		question: "Question n°6 : Où Descartes a-t-il étudié, selon le §4 ?",
		answers: ["Dans une petite école de province", "En l'une des plus célèbres écoles de l'Europe", "À l'université de Padoue uniquement"],
		correct: 2,
		explanation: "Il précise : « j'étais en l'une des plus célèbres écoles de l'Europe » (le collège de La Flèche)."
	},
	{
		question: "Question n°7 : Descartes s'est-il contenté des sciences enseignées à l'école (§5) ?",
		answers: ["Oui, absolument", "Non, il a aussi parcouru des livres traitant de sciences curieuses et rares", "Non, il a arrêté de lire"],
		correct: 2,
		explanation: "Il dit : « ne m'étant pas contenté des sciences qu'on nous enseignait, j'avais parcouru tous les livres... les plus curieuses et les plus rares »."
	},
	{
		question: "Question n°8 : Comment Descartes était-il estimé par rapport à ses condisciples (§6) ?",
		answers: ["Il était considéré comme inférieur", "Il n'était pas estimé inférieur, et certains le destinaient à devenir maître", "Il était ignoré de tous"],
		correct: 2,
		explanation: "Il note : « je ne voyais point qu'on m'estimât inférieur à mes condisciples, bien qu'il y en eût déjà entre eux quelques-uns, qu'on destinait à remplir les places de nos maîtres »."
	},
	{
		question: "Question n°9 : Comment Descartes juge-t-il son siècle (§7) ?",
		answers: ["Comme une période de décadence", "Comme aussi fleurissant et fertile en bons esprits qu'aucun des précédents", "Comme une époque de guerre et de chaos"],
		correct: 2,
		explanation: "Il écrit : « notre siècle me semblait aussi fleurissant, et aussi fertile en bons esprits, qu'ait été aucun des précédents »."
	},
	{
		question: "Question n°10 : Quelle conclusion Descartes tire-t-il de ces observations (§8) ?",
		answers: ["Qu'il faut suivre aveuglément les maîtres", "Qu'il n'y avait aucune doctrine dans le monde telle qu'on lui avait fait espérer", "Que la science est impossible"],
		correct: 2,
		explanation: "Cela lui fait « prendre la liberté de juger par moi de tous les autres, et de penser qu'il n'y avait aucune doctrine dans le monde qui fût telle qu'on m'avait auparavant fait espérer »."
	},
	{
		question: "Question n°11 : Descartes méprise-t-il totalement les exercices scolaires (§9) ?",
		answers: ["Oui, il les déteste", "Non, il ne laisse pas toutefois de les estimer", "Il n'en parle pas"],
		correct: 2,
		explanation: "Il nuance son propos : « Je ne laissais pas toutefois d'estimer les exercices, auxquels on s'occupe dans les écoles »."
	},
	{
		question: "Question n°12 : À quoi servent les langues selon le §10 ?",
		answers: ["À voyager", "À l'intelligence des livres anciens", "À impressionner les étrangers"],
		correct: 2,
		explanation: "« les langues, qu'on y apprend, sont nécessaires pour l'intelligence des livres anciens »."
	},
	{
		question: "Question n°13 : Quel est l'effet de la « gentillesse des fables » (§11) ?",
		answers: ["Elle endort l'esprit", "Elle réveille l'esprit", "Elle trompe l'esprit"],
		correct: 2,
		explanation: "Le texte dit : « la gentillesse des fables réveille l'esprit »."
	},
	{
		question: "Question n°14 : Comment faut-il lire les histoires pour qu'elles aident à former le jugement (§12) ?",
		answers: ["Rapidement", "Avec discrétion", "En les apprenant par cœur"],
		correct: 2,
		explanation: "« qu'étant lues avec discrétion, elles aident à former le jugement »."
	},
	{
		question: "Question n°15 : À quoi Descartes compare-t-il la lecture des bons livres (§13) ?",
		answers: ["À un voyage immobile", "À une conversation avec les plus honnêtes gens des siècles passés", "À un monologue"],
		correct: 2,
		explanation: "« la lecture de tous les bons livres est comme une conversation avec les plus honnêtes gens des siècles passés »."
	},
	{
		question: "Question n°16 : Que nous découvrent les auteurs lors de cette « conversation étudiée » (§13) ?",
		answers: ["Toutes leurs pensées, bonnes ou mauvaises", "Seulement les meilleures de leurs pensées", "Leurs secrets inavouables"],
		correct: 2,
		explanation: "« en laquelle ils ne nous découvrent que les meilleures de leurs pensées »."
	},
	{
		question: "Question n°17 : Que possède l'éloquence selon le §14 ?",
		answers: ["Des forces et des beautés incomparables", "Des défauts majeurs", "Une utilité purement politique"],
		correct: 1,
		explanation: "« l'éloquence a des forces et des beautés incomparables »."
	},
	{
		question: "Question n°18 : Quelle qualité Descartes attribue-t-il à la poésie (§15) ?",
		answers: ["Des délicatesses et des douceurs très ravissantes", "Une grande rigidité", "Une utilité scientifique"],
		correct: 1,
		explanation: "« la poésie a des délicatesses et des douceurs très ravissantes »."
	},
	{
		question: "Question n°19 : À quoi servent les inventions des mathématiques (§16) ?",
		answers: ["Uniquement à contenter les curieux", "À faciliter tous les arts et diminuer le travail des hommes", "À prouver l'existence de Dieu"],
		correct: 2,
		explanation: "Elles servent « tant à contenter les curieux, qu'à faciliter tous les arts et diminuer le travail des hommes »."
	},
	{
		question: "Question n°20 : Que contiennent les écrits qui traitent des mœurs (§17) ?",
		answers: ["Des recettes de cuisine", "Plusieurs enseignements et exhortations à la vertu", "Des critiques de la société"],
		correct: 2,
		explanation: "Ils contiennent « plusieurs enseignements et plusieurs exhortations à la vertu qui sont fort utiles »."
	},
	{
		question: "Question n°21 : Que promet la théologie selon le §18 ?",
		answers: ["La richesse sur terre", "Enseigne à gagner le ciel", "La domination politique"],
		correct: 2,
		explanation: "« la théologie enseigne à gagner le ciel »."
	},
	{
		question: "Question n°22 : Quel est l'effet de la philosophie selon le §19 ?",
		answers: ["Elle donne la vérité absolue", "Elle donne moyen de parler vraisemblablement de toutes choses et de se faire admirer des moins savants", "Elle rend modeste"],
		correct: 2,
		explanation: "C'est une critique ironique de la scolastique : elle « donne moyen de parler vraisemblablement de toutes choses, et se faire admirer des moins savants »."
	},
	{
		question: "Question n°23 : Que rapportent la jurisprudence et la médecine à ceux qui les cultivent (§20) ?",
		answers: ["Des honneurs et des richesses", "La sagesse", "La pauvreté"],
		correct: 1,
		explanation: "Elles « apportent des honneurs et des richesses à ceux qui les cultivent »."
	},
	{
		question: "Question n°24 : Quelle est la conclusion finale de ce bilan (§21) ?",
		answers: ["Il faut tout rejeter en bloc", "Il est bon de les avoir toutes examinées, même les plus fausses, pour connaître leur juste valeur", "Il faut se spécialiser dans une seule science"],
		correct: 2,
		explanation: "« il est bon de les avoir toutes examinées, même les plus superstitieuses et les plus fausses, afin de connaître leur juste valeur et se garder d'en être trompé »."
	},
	{
		question: "Question n°25 : Quelle figure de style domine les §10 à 20 ?",
		answers: ["La métaphore filée", "L'anaphore (répétition de « que »)", "L'hyperbole"],
		correct: 2,
		explanation: "La répétition systématique de « que » en début de proposition crée une énumération rythmée et exhaustive (anaphore)."
	},
	{
		question: "Question n°26 : Que signifie « doctes » au §2 ?",
		answers: ["Ignorants", "Savants, instruits", "Médecins"],
		correct: 2,
		explanation: "Au XVIIe siècle, un « docte » est une personne très savante, ayant achevé un cycle d'études supérieures."
	},
	{
		question: "Question n°27 : Que signifie « discrétion » au §12 ?",
		answers: ["Silence", "Jugement, prudence et discernement", "Rapidité"],
		correct: 2,
		explanation: "Au sens classique, la « discrétion » désigne la capacité de distinguer, de juger avec prudence et mesure."
	},
	{
		question: "Question n°28 : Pourquoi Descartes dit-il « je ne laissais pas toutefois d'estimer » (§9) ?",
		answers: ["Pour montrer qu'il n'est pas un destructeur aveugle, mais qu'il opère un tri rationnel", "Parce qu'il a peur de l'Église", "Parce qu'il aime l'école"],
		correct: 1,
		explanation: "Cette concession montre que sa démarche n'est pas un rejet nihiliste, mais une évaluation nuancée de l'utilité relative de chaque savoir."
	},
	{
		question: "Question n°29 : Quelle discipline Descartes critique-t-il implicitement avec ironie au §19 ?",
		answers: ["Les mathématiques", "La philosophie scolastique", "La poésie"],
		correct: 2,
		explanation: "Dire que la philosophie sert à « parler vraisemblablement » et à « se faire admirer des moins savants » est une critique cinglante de la philosophie des écoles, qui privilégie l'apparence du savoir à la vérité."
	},
	{
		question: "Question n°30 : Que signifie « curieuses » dans « sciences les plus curieuses » (§5) ?",
		answers: ["Étranges", "Qui suscitent l'intérêt et la recherche, rares et précieuses", "Inutiles"],
		correct: 2,
		explanation: "Au XVIIe siècle, « curieux » qualifie ce qui est digne d'être étudié avec soin, ce qui est rare et intéressant."
	},
	{
		question: "Question n°31 : Quel est le but ultime de cet examen de toutes les doctrines (§21) ?",
		answers: ["Devenir un érudit", "Connaître leur juste valeur et se garder d'en être trompé", "Enseigner à son tour"],
		correct: 2,
		explanation: "Le but est critique et protecteur : « connaître leur juste valeur et se garder d'en être trompé »."
	},
	{
		question: "Question n°32 : En quoi ce texte prépare-t-il le « doute méthodique » ?",
		answers: ["Il ne le prépare pas", "Il montre que les savoirs traditionnels sont incertains, justifiant la nécessité de douter pour reconstruire", "Il prouve que tout est certain"],
		correct: 2,
		explanation: "En montrant que les études n'ont apporté que « doutes et erreurs », Descartes justifie la nécessité de faire table rase des opinions reçues pour chercher une fondation certaine."
	},
	{
		question: "Question n°33 : Que révèle l'expression « prendre la liberté de juger par moi de tous les autres » (§8) ?",
		answers: ["De l'arrogance", "De l'autonomie de la raison et de la responsabilité du sujet pensant", "De l'individualisme moderne"],
		correct: 2,
		explanation: "C'est l'affirmation du sujet rationnel qui ne s'en remet plus à l'autorité, mais à son propre jugement."
	},
	{
		question: "Question n°34 : Pourquoi Descartes mentionne-t-il les « honneurs et les richesses » (§20) ?",
		answers: ["Pour les encourager", "Pour montrer que ces sciences sont motivées par des intérêts extérieurs, et non par la recherche de la vérité", "Pour dire qu'il est riche"],
		correct: 2,
		explanation: "C'est une critique implicite : ces sciences sont utiles socialement et financièrement, mais ne garantissent pas la vérité ou la sagesse."
	},
	{
		question: "Question n°35 : Que signifie « superstitieuses » au §21 ?",
		answers: ["Religieuses", "Croyances fausses ou fondées sur des autorités non rationnelles", "Magiques"],
		correct: 2,
		explanation: "Descartes vise ici les doctrines qui reposent sur la crédulité ou l'autorité aveugle plutôt que sur la raison."
	},
	{
		question: "Question n°36 : Quel est le ton général de ce bilan des études ?",
		answers: ["Désespéré et nihiliste", "Critique, nuancé et méthodique", "Enthousiaste et naïf"],
		correct: 2,
		explanation: "Descartes est critique envers les résultats, mais il reste méthodique et nuancé en reconnaissant l'utilité relative de chaque discipline."
	},
	{
		question: "Question n°37 : En quoi la lecture est-elle une « conversation étudiée » (§13) ?",
		answers: ["Parce qu'elle est bruyante", "Parce que l'auteur a sélectionné et poli ses pensées pour le lecteur", "Parce qu'elle se fait à deux"],
		correct: 2,
		explanation: "Contrairement à une conversation spontanée, la lecture offre un accès filtré et perfectionné aux « meilleures » pensées de l'auteur."
	},
	{
		question: "Question n°38 : Que signifie « relèvent » à propos des histoires (§12) ?",
		answers: ["Elles racontent des faits", "Elles élèvent l'esprit, lui donnent de la grandeur", "Elles sont répétitives"],
		correct: 2,
		explanation: "Les actions mémorables « relèvent » (élèvent, grandissent) l'esprit en lui proposant des modèles héroïques."
	},
	{
		question: "Question n°39 : Pourquoi Descartes insiste-t-il sur le fait qu'il était dans une « célèbre école » (§4) ?",
		answers: ["Pour se vanter", "Pour renforcer son argument : si même dans la meilleure école il n'a trouvé que doutes, alors le système éducatif est fondamentalement défaillant", "Pour critiquer ses professeurs personnellement"],
		correct: 2,
		explanation: "C'est un argument *a fortiori* : l'échec n'est pas dû à la médiocrité de l'établissement, mais à la nature même des savoirs enseignés."
	},
	{
		question: "Question n°40 : Quelle place Descartes accorde-t-il aux mathématiques dans ce bilan ?",
		answers: ["Aucune", "Une place à part, reconnaissant leur subtilité et leur utilité pratique, ce qui annonce leur rôle de modèle dans la Méthode", "Une place inférieure à la poésie"],
		correct: 2,
		explanation: "Il reconnaît leurs « inventions très subtiles » et leur utilité, préparant le terrain pour en faire le modèle de la certitude dans la Deuxième partie."
	},
	{
		question: "Question n°41 : Que signifie « vraisemblablement » (§19) dans la bouche de Descartes ?",
		answers: ["De manière certaine", "De manière probable mais non certaine, ce qui est insuffisant pour la science", "De manière mensongère"],
		correct: 2,
		explanation: "Pour Descartes, le « vraisemblable » (probable) s'oppose au « certain ». La philosophie scolastique se contente du vraisemblable, ce qui est un défaut majeur."
	},
	{
		question: "Question n°42 : Quel est le lien entre ce texte et le projet global du *Discours* ?",
		answers: ["Il en est la conclusion", "Il constitue le constat d'échec initial qui motive la recherche d'une nouvelle méthode", "Il n'y a aucun lien"],
		correct: 2,
		explanation: "Ce bilan négatif des études traditionnelles est le point de départ qui rend nécessaire l'invention d'une méthode personnelle pour atteindre la vérité."
	},
	{
		question: "Question n°43 : Que signifie « se garder d'en être trompé » (§21) ?",
		answers: ["Éviter de perdre de l'argent", "Éviter d'accepter des faussetés pour des vérités", "Éviter de voyager"],
		correct: 2,
		explanation: "C'est l'objectif de la vigilance critique : ne pas se laisser abuser par l'apparence de vérité des doctrines fausses."
	},
	{
		question: "Question n°44 : Comment Descartes qualifie-t-il les pensées des auteurs des bons livres (§13) ?",
		answers: ["Comme ordinaires", "Comme les meilleures de leurs pensées", "Comme dépassées"],
		correct: 2,
		explanation: "Il suppose une bienveillance et une excellence dans l'écrit : « ils ne nous découvrent que les meilleures de leurs pensées »."
	},
	{
		question: "Question n°45 : Que révèle l'usage du « je » dans ce texte ?",
		answers: ["Une subjectivité purement émotionnelle", "Une subjectivité rationnelle qui s'érige en modèle universel de réflexion", "Une confession intime"],
		correct: 2,
		explanation: "Le « je » cartésien n'est pas anecdotique ; il raconte une expérience intellectuelle que tout lecteur rationnel est invité à faire sienne."
	},
	{
		question: "Question n°46 : Pourquoi Descartes mentionne-t-il la théologie (§18) avec une certaine déférence ?",
		answers: ["Parce qu'il veut devenir prêtre", "Par prudence rhétorique et parce que son objet (gagner le ciel) dépasse la raison naturelle", "Parce qu'il la trouve scientifique"],
		correct: 2,
		explanation: "Descartes marque le respect dû à la théologie, dont les vérités sont révélées et non démontrées par la raison naturelle, évitant ainsi la censure."
	},
	{
		question: "Question n°47 : Que signifie « fleurissant » (§7) ?",
		answers: ["Décoré de fleurs", "Prosper, riche en productions de l'esprit", "Fragile"],
		correct: 2,
		explanation: "Au sens figuré, un siècle « fleurissant » est un siècle prospère, qui produit de grandes œuvres et de grands esprits."
	},
	{
		question: "Question n°48 : En quoi ce passage est-il un éloge paradoxal de l'ignorance ?",
		answers: ["Il ne l'est pas", "Car reconnaître son ignorance est le premier pas vers la véritable sagesse, contrairement à la fausse science des doctes", "Car il préfère rester ignorant"],
		correct: 2,
		explanation: "La découverte de son ignorance est le seul « profit » réel, car elle libère l'esprit des préjugés et ouvre la voie à la recherche authentique."
	},
	{
		question: "Question n°49 : Quelle est la fonction de la conjonction « et enfin » au §21 ?",
		answers: ["Marquer la fin du livre", "Introduire la conclusion synthétique et le principe méthodique de l'examen critique", "Ajouter une idée secondaire"],
		correct: 2,
		explanation: "« Et enfin » marque l'aboutissement du raisonnement : après avoir évalué chaque discipline, il tire la règle générale de l'examen critique."
	},
	{
		question: "Question n°50 : Quelle est la thèse centrale de cet extrait ?",
		answers: ["Les études sont inutiles et doivent être abolies", "Les savoirs traditionnels sont décevants pour la vérité, mais il faut les examiner tous pour en connaître la juste valeur et ne pas en être trompé", "La philosophie est la reine des sciences"],
		correct: 2,
		explanation: "C'est le résumé du mouvement du texte : constat d'échec des doctrines établies, suivi d'une évaluation nuancée de leur utilité relative, aboutissant à la nécessité d'un examen critique personnel."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "Bilan critique des études (Descartes)" },
		{ key: 1, parent: 0, text: "Le constat d'échec" },
		{ key: 2, parent: 1, text: "[1] Désir initial de connaissance claire et assurée" },
		{ key: 3, parent: 1, text: "[2-3] Changement d'opinion : doutes, erreurs, découverte de l'ignorance" },
		{ key: 4, parent: 1, text: "[4-8] Constat aggravé : même dans la meilleure école, aucune doctrine n'est à la hauteur" },
		{ key: 5, parent: 0, text: "L'évaluation nuancée des disciplines" },
		{ key: 6, parent: 5, text: "[10-15] Lettres et humanités : langues, fables, histoire, éloquence, poésie (formation de l'esprit)" },
		{ key: 7, parent: 5, text: "[16] Mathématiques : inventions subtiles, utilité pour les arts" },
		{ key: 8, parent: 5, text: "[17-20] Sciences pratiques et morales : mœurs, théologie, philosophie (ironique), droit, médecine" },
		{ key: 9, parent: 0, text: "La conclusion méthodique" },
		{ key: 10, parent: 9, text: "[21] Examiner toutes les doctrines, même les fausses" },
		{ key: 11, parent: 9, text: "[21] But : connaître leur juste valeur et se garder d'être trompé" }
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
			origine: "René Descartes, Discours de la méthode, Première partie, §6 et suivants",
			theme: "La vérité",
			these: "Les savoirs traditionnels, bien qu'utiles à certains égards, échouent à fournir une connaissance claire et assurée ; il est donc nécessaire de les examiner tous de manière critique pour en connaître la juste valeur et ne pas en être trompé, posant ainsi les bases de la recherche personnelle de la vérité.",
			interet: "Ce texte est fondamental car il constitue le récit de formation intellectuelle de Descartes et le constat d'échec qui rend nécessaire l'invention d'une nouvelle méthode. Il illustre le passage de l'autorité des livres à l'autonomie du jugement, et montre que le doute n'est pas un rejet nihiliste, mais un outil de tri pour accéder à la vérité.",
			problematique: "En quoi ce bilan critique des savoirs traditionnels, tout en reconnaissant leur utilité relative, constitue-t-il une étape nécessaire et méthodique vers la recherche d'une connaissance vraie et assurée ?"
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
			"text": "DÉBUT\nDésir initial :\nAcquérir une connaissance\nclaire et assurée par les lettres.",
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
			"text": "CONSTAT D'ÉCHEC :\nAu terme des études,\ndécouverte de doutes,\nd'erreurs et de sa\npropre ignorance.",
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
			"text": "AGGRAVATION :\nMême dans la meilleure\nécole, aucune doctrine\nn'est à la hauteur des\nespérances.",
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
			"text": "ÉVALUATION NUANCÉE :\nReconnaissance de l'utilité\nrelative des disciplines\n(langues, histoire, maths,\nmœurs, etc.).",
			"loc": "1034.36 120",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "5",
			"text": "CONCLUSION\nMÉTHODIQUE :\nIl faut toutes les\nexaminer, même les\nfausses.",
			"loc": "1319.74 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "6",
			"text": "FIN\nBut : Connaître leur\njuste valeur et se garder\nd'en être trompé.\n(Préparation à la\nrecherche de la vérité).",
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