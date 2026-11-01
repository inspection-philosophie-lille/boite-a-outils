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
const sousTitre = "Tester ses connaissances sur un texte de Platon (Gorgias, 492c)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] CALLICLES – Voici ce qui est beau et juste suivant la nature, je te le dis en toute franchise, c’est que pour bien vivre, il faut laisser prendre à ses passions tout l’accroissement possible, au lieu de les réprimer, et, quand elles ont atteint toute leur force, être capable de leur donner satisfaction par son courage et son intelligence et de remplir tous ses désirs à mesure qu’ils éclosent.\n[2] Mais cela n’est pas, je suppose, à la portée du vulgaire. [3] De là vient qu’il décrie les gens qui en sont capables, parce qu’il a honte de lui-même et veut cacher sa propre impuissance. [4] Il dit que l’intempérance est une chose laide, essayant par-là d’asservir ceux qui sont mieux doués par la nature, et ne pouvant lui-même fournir à ses passions de quoi les contenter, il fait l’éloge de la tempérance et de la justice à cause de sa propre lâcheté (...).\n[5] La vérité que tu prétends chercher, Socrate, la voici : le luxe, l’incontinence et la liberté, quand ils sont soutenus par la force, constituent la vertu et le bonheur ; le reste, toutes ces belles idées, ces conventions contraires à la nature, ne sont que niaiseries et néant. »",
	source: "Platon, <em>Gorgias</em>, 492c"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est le locuteur de ce passage ?",
		answers: ["Socrate", "Calliclès", "Gorgias"],
		correct: 2,
		explanation: "Le texte est explicitement introduit par « CALLICLES – ». C'est lui qui expose sa conception radicale de la justice et du bonheur."
	},
	{
		question: "Question n°2 : De quelle œuvre de Platon ce texte est-il extrait ?",
		answers: ["La République", "Le Banquet", "Gorgias"],
		correct: 3,
		explanation: "Le passage 492c est un moment clé du dialogue *Gorgias*, où Calliclès affronte Socrate sur la nature de la justice et de la tempérance."
	},
	{
		question: "Question n°3 : Selon Calliclès, qu'est-ce qui est « beau et juste suivant la nature » ?",
		answers: ["Réprimer ses passions pour vivre en société", "Laisser prendre à ses passions tout l’accroissement possible", "Obéir aux lois de la cité"],
		correct: 2,
		explanation: "Calliclès affirme dès la première phrase que la justice naturelle consiste à laisser ses passions croître au maximum, sans les réprimer."
	},
	{
		question: "Question n°4 : Comment doit-on traiter ses passions selon cette conception ?",
		answers: ["Les modérer par la raison", "Les laisser s'accroître et les satisfaire", "Les éliminer complètement"],
		correct: 2,
		explanation: "Il faut « laisser prendre à ses passions tout l’accroissement possible, au lieu de les réprimer »."
	},
	{
		question: "Question n°5 : Quelles facultés doivent être utilisées pour satisfaire ses passions ?",
		answers: ["La foi et l'espérance", "Le courage et l'intelligence", "La ruse et la tromperie"],
		correct: 2,
		explanation: "Calliclès précise qu'il faut être capable de donner satisfaction à ses passions « par son courage et son intelligence »."
	},
	{
		question: "Question n°6 : À quel moment faut-il satisfaire ses désirs selon le texte ?",
		answers: ["Une fois qu'ils ont disparu", "À mesure qu'ils éclosent", "À la fin de sa vie uniquement"],
		correct: 2,
		explanation: "Le texte préconise de « remplir tous ses désirs à mesure qu’ils éclosent », c'est-à-dire de manière immédiate et continue."
	},
	{
		question: "Question n°7 : Qui est, selon Calliclès, incapable de mener cette vie ?",
		answers: ["Les philosophes", "Le vulgaire (la masse)", "Les dieux"],
		correct: 2,
		explanation: "Il affirme que cette vie de satisfaction des passions « n’est pas, je suppose, à la portée du vulgaire »."
	},
	{
		question: "Question n°8 : Pourquoi le « vulgaire » décrie-t-il ceux qui satisfont leurs passions ?",
		answers: ["Parce qu'ils sont dangereux pour la cité", "Parce qu'il a honte de lui-même et veut cacher son impuissance", "Parce qu'ils sont trop intelligents"],
		correct: 2,
		explanation: "Calliclès psychanalyse la morale commune : le vulgaire critique les forts par « honte de lui-même » et pour « cacher sa propre impuissance »."
	},
	{
		question: "Question n°9 : Comment le vulgaire qualifie-t-il l'intempérance ?",
		answers: ["De chose laide", "De vertu suprême", "De nécessité biologique"],
		correct: 1,
		explanation: "Le texte indique : « Il dit que l’intempérance est une chose laide »."
	},
	{
		question: "Question n°10 : Quel est le véritable but du vulgaire en faisant l'éloge de la tempérance et de la justice ?",
		answers: ["Améliorer la société", "Asservir ceux qui sont mieux doués par la nature", "Atteindre le bonheur spirituel"],
		correct: 2,
		explanation: "C'est une stratégie de domination des faibles : ils font l'éloge de ces valeurs « essayant par-là d’asservir ceux qui sont mieux doués par la nature »."
	},
	{
		question: "Question n°11 : Quelle est la cause profonde, selon Calliclès, de l'adhésion du vulgaire à la tempérance ?",
		answers: ["La sagesse", "La lâcheté", "La tradition religieuse"],
		correct: 2,
		explanation: "Calliclès est sans appel : le vulgaire fait l'éloge de la tempérance et de la justice « à cause de sa propre lâcheté »."
	},
	{
		question: "Question n°12 : Que signifie « mieux doués par la nature » ?",
		answers: ["Les plus riches financièrement", "Les plus forts, capables de grandes passions et de les assouvir", "Les plus éduqués scolairement"],
		correct: 2,
		explanation: "Il s'agit des individus supérieurs, dotés de la force et de l'intelligence nécessaires pour réaliser leurs désirs sans être entravés."
	},
	{
		question: "Question n°13 : Quels éléments constituent la « vertu et le bonheur » selon la conclusion de Calliclès ?",
		answers: ["La sagesse, la modération et la paix", "Le luxe, l’incontinence et la liberté", "La pauvreté, l'ascétisme et le devoir"],
		correct: 2,
		explanation: "Calliclès résume sa thèse : « le luxe, l’incontinence et la liberté [...] constituent la vertu et le bonheur »."
	},
	{
		question: "Question n°14 : Quelle condition est requise pour que le luxe et l'incontinence soient vertueux ?",
		answers: ["Qu'ils soient approuvés par la loi", "Qu'ils soient soutenus par la force", "Qu'ils soient cachés au public"],
		correct: 2,
		explanation: "Le texte précise : « quand ils sont soutenus par la force »."
	},
	{
		question: "Question n°15 : Que sont, pour Calliclès, les « belles idées » et les conventions morales ?",
		answers: ["Des vérités éternelles", "Des niaiseries et du néant", "Des outils nécessaires à la survie"],
		correct: 2,
		explanation: "Il les rejette radicalement : « le reste, toutes ces belles idées [...] ne sont que niaiseries et néant »."
	},
	{
		question: "Question n°16 : Quelle opposition fondamentale structure ce discours ?",
		answers: ["La nature contre la convention (la loi)", "Le corps contre l'esprit", "Le passé contre l'avenir"],
		correct: 1,
		explanation: "Calliclès oppose constamment ce qui est « suivant la nature » à ce qui est « convention contraire à la nature »."
	},
	{
		question: "Question n°17 : Quel est le ton général du discours de Calliclès ?",
		answers: ["Hésitant et dubitatif", "Franc, provocateur et méprisant envers la masse", "Poétique et mélancolique"],
		correct: 2,
		explanation: "Il annonce parler « en toute franchise », utilise un vocabulaire violent (« niaiseries », « lâcheté », « asservir ») et méprise ouvertement le « vulgaire »."
	},
	{
		question: "Question n°18 : En quoi l'intelligence est-elle redéfinie par Calliclès ?",
		answers: ["Comme la capacité de se maîtriser soi-même", "Comme un instrument au service de la satisfaction des passions", "Comme la contemplation des Idées"],
		correct: 2,
		explanation: "Loin d'être un frein (comme chez Socrate), l'intelligence est ici un moyen de « donner satisfaction » aux passions."
	},
	{
		question: "Question n°19 : Que révèle l'expression « à mesure qu'ils éclosent » ?",
		answers: ["Une croissance artificielle des désirs", "Une satisfaction immédiate, naturelle et continue des désirs", "Une planification rationnelle des plaisirs"],
		correct: 2,
		explanation: "La métaphore de l'éclosion suggère que les désirs sont des poussées naturelles qui doivent être comblées dès leur apparition, sans délai."
	},
	{
		question: "Question n°20 : Pourquoi Calliclès s'adresse-t-il directement à Socrate à la fin (« La vérité que tu prétends chercher, Socrate... ») ?",
		answers: ["Pour lui demander de l'aide", "Pour l'humilier en lui assénant une vérité qu'il refuse de voir", "Pour se rallier à son point de vue"],
		correct: 2,
		explanation: "C'est une attaque directe contre la recherche socratique : Calliclès prétend détenir la vérité brute que Socrate, aveuglé par ses « belles idées », refuse d'admettre."
	},
	{
		question: "Question n°21 : Que signifie le terme « incontinence » dans ce contexte ?",
		answers: ["Une maladie physique", "L'absence de retenue, la capacité à ne pas se limiter dans la jouissance", "Un manque de connaissance"],
		correct: 2,
		explanation: "L'incontinence (akrasia) est habituellement un vice, mais Calliclès la revendique comme une libération des contraintes artificielles."
	},
	{
		question: "Question n°22 : Comment Calliclès qualifie-t-il la justice traditionnelle ?",
		answers: ["De naturelle et divine", "De convention contraire à la nature", "De supérieure à la force"],
		correct: 2,
		explanation: "Il la classe explicitement parmi les « conventions contraires à la nature »."
	},
	{
		question: "Question n°23 : Quel est le rapport entre la force et la liberté chez Calliclès ?",
		answers: ["La force est l'ennemie de la liberté", "La force est la condition de possibilité de la liberté et du luxe", "La liberté existe sans la force"],
		correct: 2,
		explanation: "Le luxe et la liberté ne sont vertueux que « quand ils sont soutenus par la force ». Sans force, on est vulnérable et esclave des conventions."
	},
	{
		question: "Question n°24 : En quoi ce texte est-il une critique de la démocratie athénienne ?",
		answers: ["Il la soutient pleinement", "Il dénonce la loi du nombre (le vulgaire) qui opprime l'excellence individuelle (les mieux doués)", "Il ne parle pas de politique"],
		correct: 2,
		explanation: "Le « vulgaire » qui impose ses lois pour « asservir » les meilleurs est une critique directe de la démocratie, que Calliclès juge comme la tyrannie des faibles."
	},
	{
		question: "Question n°25 : Que signifie « je te le dis en toute franchise » ?",
		answers: ["Une marque d'hésitation", "Une revendication de sincérité et de courage face aux hypocrisies sociales", "Une formule de politesse"],
		correct: 2,
		explanation: "Calliclès se pose en homme vrai, qui ose dire ce que les autres pensent tout bas mais n'osent avouer par lâcheté."
	},
	{
		question: "Question n°26 : Pourquoi le vulgaire a-t-il « honte de lui-même » ?",
		answers: ["Parce qu'il est pauvre", "Parce qu'il est incapable de satisfaire ses propres désirs et l'envie", "Parce qu'il est mal éduqué"],
		correct: 2,
		explanation: "La honte naît de la comparaison avec les forts : le vulgaire sait qu'il est impuissant, et cette impuissance est source de honte qu'il cherche à masquer."
	},
	{
		question: "Question n°27 : Quelle est la fonction rhétorique de l'énumération « le luxe, l’incontinence et la liberté » ?",
		answers: ["Créer un effet de rythme et accumuler les valeurs positives de son hédonisme radical", "Montrer qu'il hésite entre plusieurs concepts", "Critiquer ces trois éléments"],
		correct: 1,
		explanation: "L'accumulation renforce la thèse en associant des termes habituellement négatifs (incontinence) à des termes positifs (liberté), les unifiant dans la vertu."
	},
	{
		question: "Question n°28 : En quoi la conception de Calliclès est-elle un « naturalisme moral » ?",
		answers: ["Elle fonde la morale sur les lois de la cité", "Elle fonde la valeur sur ce qui est naturel (la force, le désir) et rejette les constructions sociales", "Elle nie l'existence de la nature"],
		correct: 2,
		explanation: "Le critère du bien et du mal n'est pas la loi humaine, mais la « nature » : est bon ce qui est puissant et conforme aux pulsions naturelles."
	},
	{
		question: "Question n°29 : Que devient la « tempérance » (sophrosyne) dans ce discours ?",
		answers: ["La vertu cardinale", "Un masque de la lâcheté et un outil d'asservissement", "Une nécessité biologique"],
		correct: 2,
		explanation: "Calliclès retourne la valeur socratique : la tempérance n'est pas une maîtrise de soi admirable, mais la résignation des faibles qui ne peuvent pas faire autrement."
	},
	{
		question: "Question n°30 : Quelle est la portée de l'expression « cacher sa propre impuissance » ?",
		answers: ["Elle révèle que la morale est une sublimation de l'échec et de la faiblesse", "Elle parle de magie", "Elle décrit une stratégie militaire"],
		correct: 1,
		explanation: "C'est une analyse généalogique avant la lettre (proche de Nietzsche) : les valeurs morales sont créées par les faibles pour se venger des forts."
	},
	{
		question: "Question n°31 : Le bonheur selon Calliclès est-il statique ou dynamique ?",
		answers: ["Statique, c'est l'ataraxie", "Dynamique, c'est un processus continu de satisfaction de désirs sans cesse renaissants", "Il n'existe pas"],
		correct: 2,
		explanation: "L'idée de « remplir tous ses désirs à mesure qu’ils éclosent » implique un mouvement perpétuel, une activité intense, et non un état de repos."
	},
	{
		question: "Question n°32 : Que signifie « le reste » dans « le reste [...] ne sont que niaiseries » ?",
		answers: ["Les biens matériels", "Toutes les autres valeurs morales traditionnelles (justice, piété, modération)", "Les sciences naturelles"],
		correct: 2,
		explanation: "« Le reste » désigne tout l'édifice moral et conventionnel que Socrate défend, balayé d'un revers de main par Calliclès."
	},
	{
		question: "Question n°33 : En quoi ce texte prépare-t-il la réfutation de Socrate ?",
		answers: ["Il ne la prépare pas", "Il pousse la logique de l'hédonisme à son extrême, permettant à Socrate d'en montrer les contradictions (ex: l'homme aux tonneaux percés)", "Il donne raison à Socrate"],
		correct: 2,
		explanation: "En définissant le bonheur comme un remplissage infini de désirs, Calliclès offre à Socrate la cible parfaite pour sa célèbre image des tonneaux percés."
	},
	{
		question: "Question n°34 : Quel est le statut de la loi (nomos) pour Calliclès ?",
		answers: ["Sacré et inviolable", "Une invention artificielle des faibles pour limiter les forts", "L'expression de la volonté divine"],
		correct: 2,
		explanation: "La loi est une « convention contraire à la nature », un outil politique de la masse pour neutraliser l'excellence individuelle."
	},
	{
		question: "Question n°35 : Que révèle l'usage du mot « niaiseries » ?",
		answers: ["Un respect profond pour la tradition", "Un mépris total et une dévalorisation radicale des concepts moraux adverses", "Une incompréhension des concepts"],
		correct: 2,
		explanation: "Le terme est péjoratif et infantilisant, visant à réduire les arguments de Socrate à des futilités sans consistance réelle."
	},
	{
		question: "Question n°36 : La « liberté » (eleutheria) chez Calliclès est-elle une liberté politique ?",
		answers: ["Oui, la liberté démocratique", "Non, c'est une liberté individuelle de jouissance, affranchie de toute contrainte morale", "C'est la liberté de penser"],
		correct: 2,
		explanation: "Il s'agit de la liberté de faire ce que l'on veut, quand on veut, sans être freiné par des interdits sociaux ou moraux."
	},
	{
		question: "Question n°37 : Pourquoi Calliclès mentionne-t-il la « honte » ?",
		answers: ["Pour dire qu'il a honte de son discours", "Pour expliquer le mécanisme psychologique de la morale : la honte de sa faiblesse pousse à condamner la force d'autrui", "Pour louer la pudeur"],
		correct: 2,
		explanation: "La honte est le moteur de l'hypocrisie sociale : on condamne chez les autres ce qu'on est incapable de faire soi-même."
	},
	{
		question: "Question n°38 : En quoi l'idéal de Calliclès est-il élitiste ?",
		answers: ["Il est réservé à tous", "Il est explicitement « pas à la portée du vulgaire » et réservé aux « mieux doués »", "Il favorise les esclaves"],
		correct: 2,
		explanation: "Sa morale est une morale de maîtres, réservée à une minorité capable de puissance, de courage et d'intelligence."
	},
	{
		question: "Question n°39 : Que signifie « fournir à ses passions de quoi les contenter » ?",
		answers: ["Les nourrir physiquement", "Leur donner les moyens (richesse, pouvoir) de se réaliser", "Les ignorer"],
		correct: 2,
		explanation: "Il faut avoir la capacité matérielle et psychique d'alimenter et de satisfaire l'ampleur de ses désirs."
	},
	{
		question: "Question n°40 : Quelle est la différence entre « nature » (physis) et « convention » (nomos) dans ce texte ?",
		answers: ["Aucune, c'est la même chose", "La nature est le règne de la force et du désir ; la convention est l'artifice inventé par les faibles", "La convention est supérieure à la nature"],
		correct: 2,
		explanation: "C'est le cœur du débat sophistique : Calliclès prend parti pour la physis contre le nomos, qu'il juge illégitime."
	},
	{
		question: "Question n°41 : Comment Calliclès perçoit-il la relation entre les hommes ?",
		answers: ["Comme une fraternité universelle", "Comme un rapport de domination où les forts doivent l'emporter sur les faibles", "Comme une collaboration égale"],
		correct: 2,
		explanation: "Son discours implique une lutte : les faibles essaient d'« asservir » les forts par la morale, et les forts doivent utiliser la « force » pour être libres."
	},
	{
		question: "Question n°42 : Que signifie « quand elles ont atteint toute leur force » ?",
		answers: ["Quand les passions sont épuisées", "Quand les passions sont devenues aussi grandes et puissantes que possible", "Quand on est vieux"],
		correct: 2,
		explanation: "Il ne faut pas les réprimer à leur début, mais les laisser grandir jusqu'à leur maximum avant de les satisfaire."
	},
	{
		question: "Question n°43 : En quoi ce texte est-il un manifeste de l'hédonisme radical ?",
		answers: ["Il prône la modération des plaisirs", "Il fait de la satisfaction maximale et débridée des désirs le souverain bien", "Il nie l'existence du plaisir"],
		correct: 2,
		explanation: "Contrairement à un hédonisme calculé (comme celui d'Épicure), celui de Calliclès est une exaltation de la démesure (hubris) et de l'expansion illimitée du désir."
	},
	{
		question: "Question n°44 : Quel est le rôle de la « lâcheté » dans l'argumentation ?",
		answers: ["C'est la cause de l'adhésion aux valeurs conventionnelles", "C'est la vertu principale", "C'est une qualité des forts"],
		correct: 1,
		explanation: "La lâcheté est le vice fondamental du vulgaire, qui le pousse à inventer la morale de la tempérance pour se protéger de ceux qu'il craint."
	},
	{
		question: "Question n°45 : Que suggère l'expression « je suppose » dans « cela n’est pas, je suppose, à la portée du vulgaire » ?",
		answers: ["Un doute réel de Calliclès", "Une ironie méprisante, car il est certain que le vulgaire en est incapable", "Une demande de confirmation à Socrate"],
		correct: 2,
		explanation: "C'est une fausse modestie rhétorique (prétérition) qui renforce en réalité le mépris : il est évident pour lui que la masse est incapable de cette grandeur."
	},
	{
		question: "Question n°46 : Pourquoi Calliclès associe-t-il « luxe » et « vertu » ?",
		answers: ["Parce que le luxe est un signe de la capacité à satisfaire ses désirs, donc de l'excellence naturelle", "Parce que le luxe est bon pour l'économie", "Parce qu'il est corruptible"],
		correct: 1,
		explanation: "Dans sa logique, le luxe n'est pas un gaspillage, mais la manifestation visible de la puissance et de la liberté d'un homme qui ne se refuse rien."
	},
	{
		question: "Question n°47 : En quoi ce passage est-il crucial pour la structure du *Gorgias* ?",
		answers: ["Il conclut le dialogue", "Il représente le point de résistance le plus fort de l'immoralisme, obligeant Socrate à fondre sa réfutation sur la nature même du désir et du bien", "Il est hors sujet"],
		correct: 2,
		explanation: "Après avoir réfuté Gorgias et Polos sur la rhétorique, Socrate affronte ici la version la plus dure et la plus cohérente de l'injustice : celle qui se revendique comme nature."
	},
	{
		question: "Question n°48 : Que signifie « asservir ceux qui sont mieux doués » ?",
		answers: ["Les mettre en prison", "Les soumettre moralement en leur faisant accepter des valeurs qui brident leur puissance", "Les rendre esclaves au sens juridique"],
		correct: 2,
		explanation: "Il s'agit d'un asservissement psychologique et moral : faire croire aux forts qu'ils ont tort d'être forts, en leur inculquant la culpabilité."
	},
	{
		question: "Question n°49 : Quelle anthropologie (vision de l'homme) sous-tend ce discours ?",
		answers: ["L'homme est un être rationnel fait pour la cité", "L'homme est un être de désir et de puissance, dont la valeur se mesure à sa capacité d'expansion", "L'homme est un être divin et immortel"],
		correct: 2,
		explanation: "Calliclès réduit l'essence humaine à la dynamique des passions et de la force, évacuant la dimension rationnelle ou sociale comme étant « contre nature »."
	},
	{
		question: "Question n°50 : Quelle est la visée ultime de ce discours de Calliclès ?",
		answers: ["Convertir Socrate à la démocratie", "Légitimer la domination des forts et disqualifier la morale commune comme une invention de faibles", "Définir la justice juridique"],
		correct: 2,
		explanation: "Calliclès cherche à renverser la table des valeurs : ce que la société appelle « vice » (incontinence) est la vraie vertu, et ce qu'elle appelle « vertu » (tempérance) est un vice de lâche."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "La morale de la nature selon Calliclès" },
		{ key: 1, parent: 0, text: "Le principe fondamental du bien vivre" },
		{ key: 2, parent: 1, text: "Laisser croître ses passions au maximum" },
		{ key: 3, parent: 1, text: "Les satisfaire par courage et intelligence" },
		{ key: 4, parent: 1, text: "Remplir ses désirs à mesure qu'ils éclosent" },
		{ key: 5, parent: 0, text: "La critique du « vulgaire » (les faibles)" },
		{ key: 6, parent: 5, text: "Incapable de cette vie (impuissance)" },
		{ key: 7, parent: 5, text: "Honte de soi et lâcheté" },
		{ key: 8, parent: 5, text: "Stratégie : décrier les forts et faire l'éloge de la tempérance pour les asservir" },
		{ key: 9, parent: 0, text: "La véritable vertu et le bonheur" },
		{ key: 10, parent: 9, text: "Luxe, incontinence et liberté" },
		{ key: 11, parent: 9, text: "Condition : soutenus par la force" },
		{ key: 12, parent: 0, text: "Le rejet des conventions" },
		{ key: 13, parent: 12, text: "Belles idées = niaiseries et néant" },
		{ key: 14, parent: 12, text: "Contraires à la nature" }
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
			origine: "Platon, Gorgias, 492c",
			theme: "La justice",
			these: "Calliclès définit la véritable justice selon la nature comme la capacité des plus forts à satisfaire sans retenue leurs désirs, rejetant la tempérance et les lois conventionnelles comme des inventions des faibles destinées à asservir les meilleurs.",
			interet: "Ce passage expose de manière crue et radicale l'immoralisme naturaliste. Il renverse les valeurs traditionnelles en faisant de l'incontinence, du luxe et de la force les véritables vertus, offrant ainsi la critique la plus exigeante de la justice morale et politique, qui est réduite à une ruse des lâches.",
			problematique: "En quoi le renversement des valeurs opéré par Calliclès, qui érige la satisfaction illimitée des désirs en vertu, constitue-t-il une critique radicale de la justice conventionnelle au nom d'une prétendue justice naturelle ?"
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
			"text": "DÉBUT\nQu'est-ce que le beau\net le juste suivant la nature ?",
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
			"text": "La règle naturelle :\nLaisser croître ses passions\net les satisfaire par\ncourage et intelligence.",
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
			"text": "Le constat sur le\n« vulgaire » :\nIl en est incapable\n(impuissance).",
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
			"text": "La stratégie du vulgaire :\nDécrier les forts et faire\nl'éloge hypocrite de la\ntempérance et de la justice\npour les asservir (lâcheté).",
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
			"text": "La véritable vérité :\nLuxe, incontinence\net liberté, quand ils sont\nsoutenus par la force,\nsont la vertu et le bonheur.",
			"loc": "1034.36 120",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "6",
			"text": "FIN\nRejet des conventions\ncontraires à la nature :\n« niaiseries et néant ».",
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
		}
	]
};