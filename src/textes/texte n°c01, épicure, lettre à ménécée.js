// ============================================================
// DONNÉES PARTAGÉES ENTRE PLUSIEURS APPLICATIONS
// ------------------------------------------------------------
// ⚠ Ce fichier est par plusieurs pages. 
// Chaque application lit uniquement les constantes qui la concernent
// ============================================================

// ============================================
// DONNÉES GÉNÉRALES
// ============================================

const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte d'Épicure";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Qu'on ne remette pas à plus tard, parce qu'on est jeune, la pratique de la philosophie et qu'on ne se lasse pas de philosopher, quand on est vieux. [2] En effet, il n'est, pour personne, ni trop tôt ni trop tard, lorsqu'il s'agit de veiller à la santé de son âme. [3] D'ailleurs, celui qui dit que le moment de philosopher n'est pas encore venu, ou que ce moment est passé, ressemble à celui qui dit, s'agissant du bonheur, que son moment n'est pas encore venu ou qu'il n'est plus. [4] Aussi le jeune homme doit-il, comme le vieillard, philosopher : de la sorte, le second, tout en vieillissant, rajeunira grâce aux biens du passé, parce qu'il leur vouera de la gratitude, et le premier sera dans le même temps jeune et fort avancé en âge, parce qu'il ne craindra pas l'avenir. [5] Il faut donc faire de ce qui produit le bonheur l'objet de ses soins, tant il est vrai que, lorsqu'il est présent, nous avons tout et que, quand il est absent, nous faisons tout pour l'avoir. »",
	source: "Épicure, <em>Lettre à Ménécée</em>"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Selon Épicure, à quel âge faut-il philosopher ?",
		answers: [
			"seulement quand on est jeune",
			"seulement quand on est vieux",
			"ni trop tôt ni trop tard : à tout âge"
		],
		correct: 3,
		explanation: "Épicure affirme qu'« il n'est, pour personne, ni trop tôt ni trop tard, lorsqu'il s'agit de veiller à la santé de son âme ». La philosophie n'est donc pas réservée à une période de la vie : elle est une activité permanente, nécessaire à tout âge. Cette conception s'oppose à l'idée que la philosophie serait une discipline préparatoire réservée à la jeunesse ou, au contraire, un loisir de vieillards. Elle fait de la philosophie un soin de l'âme continu, comparable à un régime de santé que l'on entretient toute sa vie durant."
	},
	{
		question: "Question n°2 : Pourquoi Épicure condamne-t-il le fait de remettre la philosophie à plus tard ?",
		answers: [
			"parce qu'on n'a pas le temps quand on travaille",
			"parce que philosopher concerne la santé de l'âme, comme un soin permanent",
			"parce que la philosophie est trop difficile pour les débutants"
		],
		correct: 2,
		explanation: "Épicure justifie l'urgence de philosopher par l'analogie avec la santé : il s'agit de « veiller à la santé de son âme ». Or la santé de l'âme, comme celle du corps, ne se soigne pas à un moment unique et déterminé : elle exige des soins constants. Remettre la philosophie à plus tard, c'est donc différer un soin dont on a besoin maintenant. Cette idée inscrit la philosophie dans une pratique quotidienne et vitale plutôt que dans un savoir théorique réservé à quelques spécialistes ou à un âge particulier."
	},
	{
		question: "Question n°3 : À quoi Épicure compare-t-il celui qui dit que le moment de philosopher n'est pas encore venu ou est passé ?",
		answers: [
			"à celui qui ignore ce qu'est le bonheur",
			"à celui qui dit, pour le bonheur, que son moment n'est pas venu ou n'est plus",
			"à celui qui refuse de vieillir"
		],
		correct: 2,
		explanation: "Épicure établit une analogie frappante : celui qui repousse la philosophie « ressemble à celui qui dit, s'agissant du bonheur, que son moment n'est pas encore venu ou qu'il n'est plus ». Cette comparaison repose sur la thèse que philosophie et bonheur sont liés : philosopher, c'est précisément travailler au bonheur. Or personne ne dirait sérieusement que le bonheur est réservé à un âge donné. Repousser la philosophie revient donc à repousser absurdement le bonheur lui-même, ce qui révèle l'erreur logique et existentielle de cette attitude."
	},
	{
		question: "Question n°4 : Quel bénéfice le vieillard retire-t-il de la philosophie selon Épicure ?",
		answers: [
			"il apprend à redouter l'avenir",
			"il rajeunit grâce aux biens du passé, auxquels il voue de la gratitude",
			"il oublie ses souvenirs pour mieux vivre le présent"
		],
		correct: 2,
		explanation: "Épicure écrit que le vieillard, « tout en vieillissant, rajeunira grâce aux biens du passé, parce qu'il leur vouera de la gratitude ». Le souvenir reconnaissant des plaisirs passés est un bien présent qui rajeunit l'âme : la philosophie permet de se réjouir de ce qu'on a vécu sans le regretter ni le craindre. Cette idée est centrale dans l'éthique épicurienne, où le plaisir stable (catastématique) repose notamment sur la mémoire et l'anticipation agréables, et non sur la poursuite frénétique de plaisirs nouveaux."
	},
	{
		question: "Question n°5 : Quel bénéfice le jeune homme retire-t-il de la philosophie selon Épicure ?",
		answers: [
			"il devient riche rapidement",
			"il sera jeune et fort avancé en âge, parce qu'il ne craindra pas l'avenir",
			"il acquiert la gloire auprès des autres"
		],
		correct: 2,
		explanation: "Épicure explique que le jeune homme, s'il philosophe, « sera dans le même temps jeune et fort avancé en âge, parce qu'il ne craindra pas l'avenir ». La philosophie lui donne une maturité anticipée : la sérénité face à l'avenir est le propre de l'homme sage, et le jeune philosophe acquiert immédiatement cette qualité que l'âge seul apporte habituellement. L'éthique épicurienne vise en effet à libérer l'homme de la crainte (notamment de la mort et des dieux) pour lui permettre de vivre dans la sérénité (ataraxie)."
	},
	{
		question: "Question n°6 : Quel est le rapport entre philosophie et bonheur dans ce texte ?",
		answers: [
			"ils sont totalement indépendants l'un de l'autre",
			"philosopher, c'est faire du bonheur l'objet de ses soins",
			"le bonheur est réservé à ceux qui ne philosophent pas"
		],
		correct: 2,
		explanation: "La conclusion du texte établit le lien central : « Il faut donc faire de ce qui produit le bonheur l'objet de ses soins ». Or, comme Épicure vient de le montrer, la philosophie est précisément ce soin de l'âme qui produit le bonheur. Philosopher n'est donc pas un exercice intellectuel gratuit mais une pratique orientée vers le bonheur. Cette thèse est l'aboutissement logique de la comparaison entre philosopher et bonheur développée dans les lignes précédentes : philosophie et bonheur se confondent dans la recherche du bien vivre."
	},
	{
		question: "Question n°7 : Que signifie « lorsqu'il est présent, nous avons tout » dans la dernière phrase ?",
		answers: [
			"lorsque le bonheur est présent, nous n'avons besoin de rien d'autre",
			"lorsque l'argent est présent, nous avons tout",
			"lorsque la jeunesse est présente, nous avons tout"
		],
		correct: 1,
		explanation: "Épicure affirme, à propos du bonheur : « lorsqu'il est présent, nous avons tout et que, quand il est absent, nous faisons tout pour l'avoir ». Le bonheur est présenté comme le bien ultime et autosuffisant : sa possession rend superflu tout autre bien, et son absence motive toutes nos actions. Cette idée reflète la conception épicurienne du bonheur comme fin naturelle et souveraine de la vie humaine. Elle justifie la conclusion : puisque le bonheur est ce qui donne sens et plénitude à l'existence, il faut en faire « l'objet de ses soins », c'est-à-dire philosopher."
	},
	{
		question: "Question n°8 : Quelle est la forme du texte d'Épicure ?",
		answers: [
			"un dialogue socratique",
			"une lettre adressée à Ménécée",
			"un traité systématique en plusieurs livres"
		],
		correct: 2,
		explanation: "Le texte est extrait de la Lettre à Ménécée, une épître adressée par Épicure à un disciple. La forme épistolaire est caractéristique de l'école épicurienne, qui privilégie la transmission directe et personnelle de la doctrine plutôt que de longs traités théoriques. Cette forme donne au texte un ton exhortatif : Épicure ne démontre pas froidement, il encourage et persuade son lecteur de philosopher. Elle s'accorde avec la conception pratique de la philosophie défendue dans le passage : la philosophie est un soin, un exercice destiné à être pratiqué, non seulement contemplé."
	},
	{
		question: "Question n°9 : Que reproche Épicure à celui qui dit que « le moment de philosopher est passé » ?",
		answers: [
			"de regretter sa jeunesse",
			"de traiter la philosophie comme le bonheur : comme une affaire de moment",
			"de manquer de mémoire"
		],
		correct: 2,
		explanation: "Épicure reproche à cette attitude de traiter la philosophie comme on traiterait le bonheur : comme quelque chose qui aurait un moment déterminé (passé ou à venir). Or ni la philosophie ni le bonheur ne sont soumis à une saison de la vie. Cette erreur consiste à confondre ce qui est de tout temps avec ce qui est propre à un âge. Cette critique s'appuie sur l'analogie développée dans la phrase 3 : celui qui remet la philosophie à plus tard ou la croit passée commet la même erreur que celui qui remet le bonheur à plus tard."
	},
	{
		question: "Question n°10 : Que symbolise l'expression « la santé de son âme » ?",
		answers: [
			"la guérison des maladies mentales",
			"le soin et la guérison des maux qui troublent l'âme humaine",
			"la médecine du corps"
		],
		correct: 2,
		explanation: "L'expression « la santé de son âme » est une métaphore médicale très présente dans la philosophie hellénistique : la philosophie est conçue comme une thérapeutique. Elle soigne les « maladies » de l'âme que sont les craintes vaines, les désirs excessifs et les opinions fausses. Philosopher, c'est donc se soigner soi-même, prendre soin de son âme comme on prend soin de son corps. Cette conception explique pourquoi Épicure juge la philosophie nécessaire à tout âge : le soin de l'âme, comme celui du corps, ne se décrète pas à un moment unique et déterminé."
	},
	{
		question: "Question n°11 : Que signifie l'expression « rajeunir grâce aux biens du passé » ?",
		answers: [
			"retrouver physiquement sa jeunesse",
			"se réjouir par la mémoire reconnaissante des plaisirs vécus",
			"oublier le passé pour vivre au présent"
		],
		correct: 1,
		explanation: "Épicure précise lui-même que le vieillard rajeunit « grâce aux biens du passé, parce qu'il leur vouera de la gratitude ». Le souvenir reconnaissant des plaisirs passés procure un plaisir présent et stable. Dans l'éthique épicurienne, la mémoire des biens vécus est une source durable de plaisir, supérieure à la jouissance immédiate. Cette idée s'accorde avec l'idée que le bonheur épicurien repose sur la sérénité et la gratitude plutôt que sur la perpétuelle recherche de plaisirs nouveaux. La philosophie permet ainsi de transformer le passé en source de bonheur présent."
	},
	{
		question: "Question n°12 : Que signifie « ne pas craindre l'avenir » pour Épicure ?",
		answers: [
			"ne pas prévoir les difficultés",
			"être libéré des craintes vaines face à ce qui va arriver",
			"ne pas se soucier de la mort uniquement"
		],
		correct: 2,
		explanation: "« Ne pas craindre l'avenir » désigne dans l'épicurisme l'absence de crainte face à l'avenir, notamment face à la mort et aux événements futurs. Cette sérénité (ataraxie) est l'effet de la philosophie, qui nous libère des opinions vaines et des désirs illimités. Le jeune philosophe acquiert ainsi une sagesse habituellement associée à l'âge mûr. Cette libération ne signifie pas l'imprévoyance ni l'insouciance, mais la juste évaluation de ce qui dépend de nous et de ce qui ne dépend pas de nous. Elle est donc un fruit de la philosophie, non une insouciance naïve."
	},
	{
		question: "Question n°13 : Quelle est l'idée principale du texte ?",
		answers: [
			"la philosophie est réservée aux adultes",
			"il faut philosopher à tout âge, car la philosophie est le soin de l'âme qui mène au bonheur",
			"il faut profiter de la jeunesse avant de philosopher"
		],
		correct: 2,
		explanation: "L'idée principale du passage est l'universalité et la nécessité permanente de la philosophie : « il n'est, pour personne, ni trop tôt ni trop tard » pour philosopher. Cette thèse est fondée sur la nature même de la philosophie, conçue comme soin de l'âme, et sur son lien avec le bonheur. Épicure exhorte donc jeunes et vieux à philosopher sans délai, chacun en retirant un bénéfice propre : gratitude pour le vieillard, sérénité pour le jeune. Ce texte constitue ainsi une exhortation (protreptique) à la pratique philosophique, comme exercice quotidien et continu du bonheur."
	},
	{
		question: "Question n°14 : Quelle est la thèse d'Épicure sur l'âge et la philosophie ?",
		answers: [
			"seuls les jeunes doivent philosopher",
			"la philosophie n'a pas d'âge : elle est nécessaire à tout moment de la vie",
			"seuls les vieillards peuvent philosopher"
		],
		correct: 2,
		explanation: "Épicure défend que la philosophie est nécessaire à tout âge : ni trop tôt ni trop tard. Le jeune homme et le vieillard sont convoqués à philosopher, chacun en tirant un bénéfice : rajeunissement pour le vieillard, maturité pour le jeune. Cette thèse repose sur la conception de la philosophie comme pratique vitale, comparable au soin de la santé, et non comme occupation réservée à une classe d'âge. Elle fonde l'exigence d'une philosophie accessible et utile à tous, à tout moment de l'existence."
	},
	{
		question: "Question n°15 : Que signifie « la santé de son âme » dans le contexte épicurien ?",
		answers: [
			"l'absence de maladies physiques",
			"l'état de sérénité et de libération des troubles de l'âme",
			"l'immortalité de l'âme"
		],
		correct: 1,
		explanation: "Pour Épicure, la santé de l'âme désigne l'état de sérénité (ataraxie) obtenu lorsqu'on est libéré des troubles que sont les craintes vaines, les opinions fausses et les désirs illimités. La philosophie est l'art de soigner ces maux. Cette conception thérapeutique de la philosophie, héritée de la médecine grecque et partagée avec les stoïciens et les sceptiques, fait de la philosophie une pratique de soin de soi. Elle explique pourquoi philosopher est nécessaire à tout âge : la santé de l'âme, comme celle du corps, demande des soins continus."
	},
	{
		question: "Question n°16 : Pourquoi le vieillard peut-il rajeunir en philosophant ?",
		answers: [
			"parce qu'il oublie son âge",
			"parce que le souvenir reconnaissant des plaisirs passés lui procure une joie présente",
			"parce qu'il devient plus fort physiquement"
		],
		correct: 2,
		explanation: "Épicure explique ce rajeunissement par la gratitude envers les biens du passé. Se souvenir avec reconnaissance des plaisirs vécus procure une joie présente et stable : le vieillard se réjouit du bien qu'il a connu, ce qui le rend intérieurement jeune. Cette idée repose sur la psychologie épicurienne du plaisir, où le plaisir peut être éprouvé à propos du passé par le souvenir et du futur par l'anticipation. La philosophie, en apprenant à mesurer et à apprécier les plaisirs, permet de tirer du passé un bonheur présent, préférable à une vaine nostalgie."
	},
	{
		question: "Question n°17 : Pourquoi le jeune homme qui philosophe est-il « fort avancé en âge » ?",
		answers: [
			"parce qu'il travaille plus que les autres",
			"parce que la philosophie lui donne la sérénité et la sagesse, qualités habituellement liées à la maturité",
			"parce qu'il perd sa jeunesse"
		],
		correct: 2,
		explanation: "Épicure affirme que le jeune philosophe sera « dans le même temps jeune et fort avancé en âge ». Cela signifie qu'il acquiert, dès la jeunesse, la sagesse et la sérénité que l'âge apporte habituellement avec la philosophie. Cette maturité anticipée s'explique par le fait qu'il « ne craindra pas l'avenir » : la sérénité face à l'avenir est le fruit de la philosophie, non celui de l'âge. Le jeune philosophe jouit ainsi des bienfaits de la maturité sans en attendre le terme, ce qui est un avantage considérable pour vivre heureux."
	},
	{
		question: "Question n°18 : Que signifie l'expression « faire de ce qui produit le bonheur l'objet de ses soins » ?",
		answers: [
			"chercher les plaisirs immédiats et sans mesure",
			"veiller à ce qui donne le bonheur, c'est-à-dire philosopher",
			"se soucier uniquement de son confort matériel"
		],
		correct: 2,
		explanation: "Cette expression conclut le texte en recommandant de prendre soin de ce qui produit le bonheur. Or, comme Épicure l'a établi, c'est la philosophie (le soin de l'âme) qui produit le bonheur. L'expression désigne donc l'activité philosophique elle-même, comprise comme un soin. Elle ne désigne pas la recherche effrénée des plaisirs : l'épicurisme distingue les désirs naturels et nécessaires des désirs vains. Le soin véritable du bonheur passe par l'élimination des troubles de l'âme, non par la multiplication des plaisirs. Cette phrase finale résume ainsi la morale épicurienne du juste soin."
	},
	{
		question: "Question n°19 : Quelle méthode Épicure utilise-t-il pour convaincre de philosopher ?",
		answers: [
			"la démonstration mathématique",
			"l'analogie avec le bonheur et le soin de la santé",
			"le récit mythologique"
		],
		correct: 2,
		explanation: "Épicure recourt à deux analogies pour convaincre : celle du soin de la santé (philosopher comme soigner son âme) et celle du bonheur (remettre la philosophie à plus tard revient à remettre le bonheur à plus tard). Ces analogies sont des procédés argumentatifs destinés à rendre évidente la nécessité de philosopher. L'analogie avec le bonheur est particulièrement efficace parce que nul ne conteste qu'il faut chercher le bonheur : si philosopher produit le bonheur, alors il faut philosopher sans attendre. Cette stratégie argumentative est caractéristique de la méthode protreptique (exhortative) d'Épicure."
	},
	{
		question: "Question n°20 : En quoi ce texte illustre-t-il la dimension pratique de la philosophie épicurienne ?",
		answers: [
			"la philosophie y est purement théorique et spéculative",
			"la philosophie y est présentée comme un soin et un exercice quotidien orienté vers le bonheur",
			"la philosophie y est un simple passe-temps"
		],
		correct: 2,
		explanation: "Ce texte montre que la philosophie épicurienne n'est pas une spéculation abstraite mais une pratique vitale : elle est soin de l'âme, exercice quotidien, moyen du bonheur. La finalité est éthique et existentielle, non théorique. Épicure lui-même exhorte : « il faut philosopher », et ce « il faut » exprime une obligation pratique, non un simple intérêt de connaissance. Cette conception de la philosophie comme médecine de l'âme caractérise l'épicurisme (comme d'ailleurs le stoïcisme et le scepticisme) et s'oppose à une philosophie purement contemplative. La philosophie est ici une manière de vivre, pas seulement une doctrine."
	},
	{
		question: "Question n°21 : Que signifie l'expression « veiller à la santé de son âme » ?",
		answers: [
			"surveiller les autres",
			"prendre soin de son âme par la philosophie",
			"soigner son corps"
		],
		correct: 2,
		explanation: "Cette expression désigne l'activité de soin que la philosophie apporte à l'âme : elle purifie l'âme des craintes et des opinions fausses, rétablit la sérénité, guérit les troubles. Elle relève d'une conception thérapeutique de la philosophie, présente dans la tradition hellénistique. « Veiller » souligne l'attention constante et active que requiert ce soin, ce qui justifie l'urgence de philosopher pour tous, à tout âge. Elle explique aussi pourquoi Épicure parle de « pratique » de la philosophie : il s'agit d'un exercice régulier, comme les soins du corps, non d'une acquisition ponctuelle de savoir."
	},
	{
		question: "Question n°22 : À quel courant philosophique appartient ce texte ?",
		answers: [
			"le stoïcisme",
			"l'épicurisme",
			"le scepticisme"
		],
		correct: 2,
		explanation: "Le texte est d'Épicure, fondateur de l'épicurisme. Ce courant philosophique hellénistique (IVe-IIIe siècle av. J.-C.) se caractérise par une éthique du plaisir bien compris (sérénité et absence de troubles), une physique atomiste et une logique sensualiste. La Lettre à Ménécée est un texte fondateur de la doctrine épicurienne, résumant l'essentiel de sa morale. On y retrouve la conception du bonheur comme fin naturelle et la philosophie comme soin de l'âme. Ce courant s'oppose au stoïcisme (qui prône l'acceptation rationnelle du destin) et au scepticisme (qui suspend le jugement)."
	},
	{
		question: "Question n°23 : Que signifie « philosopher » chez Épicure ?",
		answers: [
			"réfléchir de manière désintéressée",
			"chercher à mener une vie heureuse par une pratique réflexive de soi",
			"étudier les doctrines des autres"
		],
		correct: 2,
		explanation: "Pour Épicure, philosopher signifie pratiquer un exercice de réflexion orienté vers le bonheur : c'est apprendre à bien juger de ce qui est désirable, à soigner son âme, à vivre avec sérénité. Ce n'est pas une activité de pure curiosité intellectuelle, mais une pratique de vie. Cette conception est cohérente avec la conclusion du texte : philosopher, c'est faire du bonheur l'objet de ses soins. Elle implique une réflexion active et quotidienne sur soi et sur les opinions qui nous troublent. Le philosophe n'est pas un érudit mais un homme qui travaille à son bonheur."
	},
	{
		question: "Question n°24 : Pourquoi l'analogie avec le bonheur est-elle efficace ?",
		answers: [
			"parce qu'elle compare philosophie et richesse",
			"parce que nul ne contesterait que le bonheur se cherche à tout âge, ce qui vaut aussi pour la philosophie qui y mène",
			"parce qu'elle oppose jeunes et vieux"
		],
		correct: 2,
		explanation: "L'analogie est efficace parce qu'elle s'appuie sur une évidence partagée : personne ne dirait sérieusement que le moment du bonheur est passé ou à venir, car le bonheur est recherché à tout âge. Si philosopher conduit au bonheur (comme Épicure l'a établi), alors il faut philosopher à tout âge. Le raisonnement fonctionne donc par transfert de l'évidence de la première proposition (sur le bonheur) à la seconde (sur la philosophie). Cette stratégie persuasive suppose une thèse préalable acceptée par tous : le bonheur est la fin de la vie. Elle est typique de l'argumentation par analogie."
	},
	{
		question: "Question n°25 : Quelle est la fonction du passage dans l'économie générale de la Lettre à Ménécée ?",
		answers: [
			"introduire la physique atomiste",
			"exhorter à la pratique de la philosophie dès maintenant et à tout âge",
			"démontrer l'existence des dieux"
		],
		correct: 2,
		explanation: "Ce passage, qui ouvre la Lettre à Ménécée, a une fonction d'exhortation (protreptique) : Épicure invite son destinataire à philosopher sans attendre, à tout âge, parce que la philosophie est le soin de l'âme menant au bonheur. Il précède l'exposé des principes éthiques et physiques de la doctrine (les désirs, la mort, les dieux). Sa fonction est donc d'ouvrir la voie : avant de présenter la doctrine, Épicure doit convaincre de s'y intéresser. Ce passage installe l'attitude philosophique comme disposition première requise pour recevoir l'enseignement épicurien, et par là il donne la tonalité pratique de toute la lettre."
	},
	{
		question: "Question n°26 : Que signifie « quand il est absent, nous faisons tout pour l'avoir » ?",
		answers: [
			"quand le bonheur manque, toutes nos actions tendent à le retrouver",
			"quand le bonheur manque, il faut l'abandonner",
			"quand le bonheur manque, c'est la faute des autres"
		],
		correct: 1,
		explanation: "Cette phrase exprime l'idée que le bonheur est la fin de toutes nos actions : quand il est absent, nous agissons en vue de le faire revenir. Elle rejoint la thèse centrale de la morale antique : le bonheur est le bien suprême, recherché en dernière instance dans toute action humaine. Épicure l'utilise pour montrer l'importance du bonheur et, par conséquent, l'importance de ce qui le produit (la philosophie). Ainsi, la nécessité de philosopher est fondée sur la nature même de la motivation humaine : comme nous agissons toujours en vue du bonheur, et que la philosophie produit le bonheur, philosopher est l'exigence la plus fondamentale."
	},
	{
		question: "Question n°27 : Quel est le rapport entre philosophie et gratitude dans le texte ?",
		answers: [
			"la gratitude est la seule récompense de la philosophie",
			"la philosophie apprend à apprécier les biens passés avec gratitude",
			"la gratitude est réservée aux vieillards"
		],
		correct: 2,
		explanation: "Dans le texte, la gratitude est liée au bénéfice que le vieillard retire de la philosophie : il rajeunit « grâce aux biens du passé, parce qu'il leur vouera de la gratitude ». La philosophie apprend donc à reconnaître et à apprécier les biens vécus, ce qui constitue une source durable de plaisir. La gratitude n'est pas une simple émotion de circonstance : elle est une attitude philosophique, fruit du juste jugement sur les plaisirs. En ce sens, la philosophie transforme la mémoire du passé en ressource de bonheur présent, et la gratitude en est le moyen. Elle n'est pas réservée aux vieillards : elle est l'effet de la sagesse, accessible à tout âge."
	},
	{
		question: "Question n°28 : Que signifie l'expression « ne pas se lasser de philosopher » ?",
		answers: [
			"philosopher jusqu'à l'épuisement",
			"pratiquer la philosophie de manière continue et sans découragement",
			"abandonner la philosophie quand on est vieux"
		],
		correct: 2,
		explanation: "Épicure exhorte à ne pas se lasser de philosopher, c'est-à-dire à pratiquer la philosophie de manière continue, persévérante, sans céder au découragement ni à la fatigue. Cette idée s'inscrit dans la conception de la philosophie comme exercice permanent et comme soin continu de l'âme. La formule, qui répond à « qu'on ne remette pas à plus tard », souligne que le danger n'est pas seulement le retard mais aussi l'abandon. La philosophie exige la durée et la constance ; c'est une pratique de tous les instants, et non une activité ponctuelle. Elle rejoint l'idée grecque de l'exercice (askèsis) et de l'attention spirituelle continue."
	},
	{
		question: "Question n°29 : En quoi ce texte rejoint-il une préoccupation universelle ?",
		answers: [
			"parce qu'il traite du rapport de l'homme au temps et au bonheur",
			"parce qu'il s'adresse seulement aux Grecs de l'Antiquité",
			"parce qu'il ne parle que de la vieillesse"
		],
		correct: 1,
		explanation: "Le texte d'Épicure touche à une préoccupation universelle : le rapport de l'homme au temps (le passé, le présent, l'avenir) et la quête du bonheur. Tous les hommes, quel que soit leur âge ou leur époque, sont confrontés au désir de bonheur et au temps qui passe. Le texte propose une réponse : philosopher à tout âge, pour tirer du passé gratitude et se libérer de la crainte de l'avenir. Cette dimension universelle explique la postérité du texte : il ne parle pas seulement aux Grecs ou aux vieillards, mais à tout être humain soucieux de bien vivre et de donner un sens au temps qui passe."
	},
	{
		question: "Question n°30 : Quelle est la portée morale de ce texte ?",
		answers: [
			"il enseigne à mépriser le monde",
			"il enseigne à prendre soin de soi pour atteindre le bonheur par la philosophie",
			"il impose des règles strictes de conduite"
		],
		correct: 2,
		explanation: "La portée morale du texte est de montrer que le bonheur est l'affaire de chacun, à tout âge, et qu'il passe par le soin de soi que constitue la philosophie. Ce n'est pas une morale du mépris du monde ni une liste d'interdits, mais une éthique du soin et du juste plaisir. Épicure y définit une norme de vie : philosopher sans cesse, pour soigner son âme et vivre heureux. Cette morale est eudémoniste (elle prend le bonheur comme fin) et individualiste au sens où elle place l'exigence du soin de soi au cœur de la vie éthique. Elle annonce les philosophies du souci de soi développées plus tard dans l'Antiquité."
	},
	{
		question: "Question n°31 : Quelle est la conception du temps chez Épicure dans ce texte ?",
		answers: [
			"le temps est cyclique et se répète",
			"le temps est vécu comme un tout où passé, présent et avenir s'articulent dans la sagesse",
			"le temps n'a aucune importance pour la philosophie"
		],
		correct: 2,
		explanation: "Épicure articule les trois dimensions du temps dans la sagesse : le vieillard tire du passé la gratitude qui le rajeunit, le jeune se libère de la crainte de l'avenir, et tous deux vivent le présent de la philosophie. Le temps n'est donc pas vécu comme une fuite (le passé perdu, l'avenir menaçant) mais comme un tout où chaque dimension contribue au bonheur. Cette conception tranche avec l'angoisse du temps qui passe : la philosophie permet d'habiter sereinement le temps. Elle annonce la maxime épicurienne du « carpe diem » compris non comme jouissance immédiate mais comme juste usage du temps présent, éclairé par la mémoire et la prévoyance sereine."
	},
	{
		question: "Question n°32 : Que signifie « ressemble à » dans la comparaison d'Épicure ?",
		answers: [
			"qu'il s'agit d'une identité stricte",
			"qu'il s'agit d'une analogie : les deux attitudes partagent la même erreur",
			"qu'il s'agit d'une simple figure de style sans portée argumentative"
		],
		correct: 2,
		explanation: "Le verbe « ressemble » introduit une analogie : celui qui repousse la philosophie ressemble à celui qui repousse le bonheur, parce que tous deux commettent la même erreur de fond — croire que ce qui vaut à tout âge a un moment déterminé. L'analogie n'est pas une identité stricte mais un rapprochement éclairant : elle transfère l'évidence de la seconde proposition (le bonheur se cherche à tout âge) à la première (la philosophie se pratique à tout âge). Cette figure argumentative donne sa force persuasive au raisonnement d'Épicure, en rendant l'erreur manifeste par la comparaison."
	},
	{
		question: "Question n°33 : Quel est le rôle de la phrase « tant il est vrai que… » ?",
		answers: [
			"elle introduit une justification finale de la thèse",
			"elle marque une hésitation de l'auteur",
			"elle annonce une objection"
		],
		correct: 1,
		explanation: "La locution « tant il est vrai que » introduit la justification ultime de la thèse : si le bonheur est tout (présent) et motive tout (absent), alors il mérite tous nos soins, et donc il faut philosopher. Cette phrase relie l'analyse du bonheur (présent/absent) à la conclusion pratique (faire du bonheur l'objet de ses soins). Elle donne au passage sa clôture argumentative : après avoir comparé philosophie et bonheur, Épicure fonde le devoir de philosopher sur la nature même du bonheur. C'est une formule de synthèse qui scelle le raisonnement en le rapportant à sa prémisse fondamentale."
	},
	{
		question: "Question n°34 : Pourquoi Épicure parle-t-il de « pratique » de la philosophie et non seulement d'étude ?",
		answers: [
			"parce que la philosophie est un savoir purement théorique",
			"parce que la philosophie est un exercice actif et quotidien, comme un soin",
			"parce que la philosophie s'apprend par cœur"
		],
		correct: 2,
		explanation: "Le mot « pratique » souligne que la philosophie épicurienne est un exercice actif et régulier, comparable à un soin de santé, et non une simple acquisition de connaissances. On ne « pratique » pas un savoir théorique : on pratique un art, un exercice, une activité. Cette nuance est essentielle à la compréhension du texte : philosopher, c'est agir sur soi, soigner son âme, s'exercer au bonheur. La philosophie est ainsi définie par sa finalité pratique (le bien vivre) et par sa modalité (l'exercice continu). Cette conception est cohérente avec l'idée que l'on ne se lasse pas de philosopher : on ne se lasse pas d'un soin nécessaire."
	},
	{
		question: "Question n°35 : Que révèle l'expression « comme le vieillard » ?",
		answers: [
			"que le jeune homme doit imiter le vieillard en tout",
			"que jeunes et vieux sont également concernés par la philosophie",
			"que le vieillard est supérieur au jeune"
		],
		correct: 2,
		explanation: "L'expression « comme le vieillard » établit une égalité de principe : le jeune homme doit philosopher comme le vieillard, c'est-à-dire que la philosophie concerne les deux âges de la vie également. Elle corrige l'idée reçue selon laquelle la philosophie serait l'affaire d'un âge particulier (la jeunesse pour l'étude, la vieillesse pour la sagesse). Épicure instaure une symétrie : chacun, à son âge, retire un bénéfice propre de la philosophie. Cette égalité fonde l'universalité de l'exhortation : la philosophie n'a pas de public privilégié, elle est l'affaire de tout être humain, quel que soit son âge."
	},
	{
		question: "Question n°36 : Que signifie l'expression « biens du passé » ?",
		answers: [
			"les richesses accumulées",
			"les plaisirs et les biens vécus dont le souvenir est source de joie",
			"les erreurs passées qu'il faut regretter"
		],
		correct: 2,
		explanation: "Les « biens du passé » désignent les plaisirs et les biens effectivement vécus, dont le souvenir reconnaissant constitue une source de joie présente. Épicure précise qu'il s'agit de biens dont on peut avoir de la gratitude, ce qui exclut les erreurs regrettées. Cette notion repose sur la psychologie épicurienne : le plaisir peut être éprouvé à propos du passé par le souvenir, comme à propos de l'avenir par l'anticipation. La philosophie apprend à reconnaître et à savourer ces biens, transformant la mémoire en ressource de bonheur. Elle montre que le bonheur ne dépend pas uniquement de l'instant présent mais de tout le rapport au temps."
	},
	{
		question: "Question n°37 : Quelle est la fonction de la phrase « Il faut donc… » ?",
		answers: [
			"elle introduit une nouvelle question",
			"elle tire la conclusion pratique de l'argumentation",
			"elle réfute la thèse précédente"
		],
		correct: 2,
		explanation: "La formule « Il faut donc » marque la conclusion pratique du raisonnement : après avoir montré que la philosophie est le soin de l'âme lié au bonheur, Épicure en tire la conséquence : il faut faire du bonheur l'objet de ses soins, c'est-à-dire philosopher. Cette conclusion est pratique (elle énonce une obligation) et non théorique. Elle scelle l'argumentation en la transformant en règle de vie. Le « donc » signale la nécessité logique de la conclusion : si le bonheur est le bien suprême et que la philosophie y conduit, alors philosopher est une exigence. C'est la pointe du texte."
	},
	{
		question: "Question n°38 : Que signifie « la santé de son âme » par rapport à celle du corps ?",
		answers: [
			"elles sont identiques",
			"la santé de l'âme est plus importante car elle concerne le bonheur, mais elle se soigne de façon analogue",
			"la santé du corps est plus importante"
		],
		correct: 2,
		explanation: "Épicure établit une analogie entre la santé du corps et celle de l'âme : l'une et l'autre exigent des soins constants, et l'on ne remet pas à plus tard le soin de sa santé. Mais la santé de l'âme est d'une importance supérieure, car elle concerne le bonheur lui-même : c'est elle qui permet de vivre bien. L'analogie n'est donc pas une identité : elle emprunte au soin du corps sa nécessité et sa continuité, pour les transférer au soin de l'âme. Cette comparaison rend sensible l'urgence de philosopher : comme on ne diffère pas le soin d'une maladie, on ne doit pas différer le soin de son âme."
	},
	{
		question: "Question n°39 : En quoi le texte est-il une exhortation ?",
		answers: [
			"parce qu'il expose une doctrine de façon neutre",
			"parce qu'il encourage et pousse le lecteur à philosopher",
			"parce qu'il critique les autres philosophes"
		],
		correct: 2,
		explanation: "Le texte est une exhortation (protreptique) : il ne se contente pas d'exposer une doctrine, il encourage activement le lecteur à philosopher. L'usage de l'impératif (« Qu'on ne remette pas… », « Il faut donc… »), les comparaisons persuasives et l'appel à l'intérêt du lecteur (jeune ou vieux, chacun y gagne) visent à le convaincre et à le pousser à agir. La forme épistolaire renforce cette dimension personnelle et engageante. Cette exhortation est caractéristique de la philosophie hellénistique, qui se veut pratique et thérapeutique : elle ne cherche pas seulement à informer mais à transformer la vie du lecteur en le conduisant à la sagesse."
	},
	{
		question: "Question n°40 : Que signifie « c'est-à-dire » dans le texte ?",
		answers: [
			"il introduit une reformulation explicative",
			"il introduit une objection",
			"il marque une opposition"
		],
		correct: 1,
		explanation: "La locution « c'est-à-dire » introduit une reformulation ou une explication de ce qui précède, afin d'en préciser le sens. Elle sert à clarifier une notion en la présentant autrement. Dans ce texte, même si elle n'apparaît pas textuellement, elle correspond au mouvement d'explication qu'Épicure opère sur ses propres formules (par exemple, expliquer ce qu'est la minorité). Cette attention à la clarification est importante dans un texte exhortatif : pour convaincre, il faut être compris. Elle montre aussi la démarche pédagogique d'Épicure, qui prend soin d'expliquer pour être suivi, conformément à la conception de la philosophie comme soin accessible à tous."
	},
	{
		question: "Question n°41 : Que signifie l'expression « ne pas se lasser » dans le contexte de la vieillesse ?",
		answers: [
			"qu'il faut abandonner la philosophie en vieillissant",
			"qu'il ne faut pas cesser de philosopher, même âgé",
			"qu'il faut philosopher plus vite"
		],
		correct: 2,
		explanation: "L'expression « qu'on ne se lasse pas de philosopher, quand on est vieux » signifie qu'il ne faut pas cesser de philosopher avec l'âge. Elle répond à une tentation fréquente : croire que la philosophie est une affaire de jeunesse ou d'étude, et qu'à la vieillesse on peut s'en dispenser. Épicure affirme au contraire que la philosophie est plus que jamais nécessaire au vieillard, qui en tire le rajeunissement par la gratitude. Cette exigence de constance montre que la philosophie n'est pas une étape mais une pratique de toute la vie, dont on ne doit jamais se lasser."
	},
	{
		question: "Question n°42 : Quelle est la relation entre le jeune et le vieillard dans le texte ?",
		answers: [
			"ils sont opposés et incompatibles",
			"ils sont complémentaires et tous deux concernés par la philosophie",
			"le vieillard domine le jeune"
		],
		correct: 2,
		explanation: "Épicure présente le jeune et le vieillard non comme opposés mais comme complémentaires : tous deux doivent philosopher, et chacun en retire un bénéfice propre. Le vieillard rajeunit par la gratitude envers le passé, le jeune mûrit par la sérénité face à l'avenir. Cette complémentarité repose sur une même pratique, la philosophie, qui produit des effets adaptés à chaque âge. Elle fonde l'universalité de l'exhortation : la philosophie n'oppose pas les âges, elle les réunit dans une même exigence de soin de l'âme et de recherche du bonheur."
	},
	{
		question: "Question n°43 : Que signifie « parce qu'il ne craindra pas l'avenir » ?",
		answers: [
			"qu'il ne prévoit rien",
			"que la philosophie le libère des craintes vaines, notamment de la mort",
			"qu'il ignore ce qui va se passer"
		],
		correct: 2,
		explanation: "« Ne pas craindre l'avenir » signifie que la philosophie libère des craintes vaines qui troublent l'âme, notamment la crainte de la mort et des événements futurs. Cette libération est l'effet de la sérénité (ataraxie) épicurienne : en comprenant la nature des choses et la juste mesure des désirs, on cesse de redouter ce qui ne dépend pas de nous. Le jeune philosophe acquiert ainsi une sérénité habituellement liée à la maturité. Cette absence de crainte n'est pas de l'insouciance : elle repose sur une juste connaissance, fruit de la philosophie, et non sur l'ignorance des réalités."
	},
	{
		question: "Question n°44 : Pourquoi Épicure utilise-t-il l'expression « tout » dans « nous avons tout » ?",
		answers: [
			"pour exagérer sans raison",
			"pour souligner que le bonheur est le bien suprême et autosuffisant",
			"pour désigner les biens matériels"
		],
		correct: 2,
		explanation: "L'expression « nous avons tout » souligne que le bonheur est le bien suprême et autosuffisant : lorsqu'il est présent, rien ne manque, car il est la fin de toute action et le bien qui donne leur valeur aux autres. Ce « tout » n'est pas une hyperbole gratuite mais l'expression d'une thèse éthique : le bonheur est le bien complet, qui rend superflu tout autre bien. Cette idée fonde l'importance décisive du bonheur et, par conséquent, du soin qui le produit. Elle rejoint la conception antique du bonheur comme fin dernière et souveraine de la vie humaine, à laquelle tout le reste est subordonné."
	},
	{
		question: "Question n°45 : Que signifie l'expression « s'agit-il de veiller à la santé de son âme » ?",
		answers: [
			"qu'il s'agit d'une tâche ponctuelle",
			"qu'il s'agit de l'activité même de la philosophie, soin permanent de l'âme",
			"qu'il s'agit d'une simple recommandation morale"
		],
		correct: 2,
		explanation: "L'expression désigne l'activité même de la philosophie : veiller à la santé de son âme, c'est philosopher, c'est-à-dire soigner son âme en la libérant des troubles. Cette activité est permanente, car elle est un soin comparable à celui du corps. Elle n'est pas une tâche ponctuelle ni une simple recommandation morale : c'est l'essence même de la vie philosophique selon Épicure. Cette formulation fait le lien entre la question du moment (quand philosopher ?) et la nature de la philosophie (un soin) : puisque c'est un soin, il n'a pas de moment privilégié, il doit être continu."
	},
	{
		question: "Question n°46 : En quoi ce texte peut-il être rapproché de la maxime « carpe diem » ?",
		answers: [
			"parce qu'il invite à jouir du présent sans réfléchir",
			"parce qu'il invite à vivre pleinement le présent en philosophant, en s'appuyant sur le passé et sans craindre l'avenir",
			"parce qu'il méprise le passé et l'avenir"
		],
		correct: 2,
		explanation: "Le texte rejoint l'esprit du « carpe diem » bien compris : vivre pleinement le présent. Mais Épicure ne réduit pas le présent à la jouissance immédiate : il l'enrichit du souvenir reconnaissant du passé (gratitude du vieillard) et de la sérénité face à l'avenir (absence de crainte du jeune). Le présent est ainsi habité par toutes les dimensions du temps, éclairées par la philosophie. Cette lecture du « carpe diem » est plus profonde que la simple invitation à jouir : elle en fait une sagesse du temps, où le présent se nourrit de la mémoire et de la confiance. Elle illustre la spécificité de l'épicurisme face aux caricatures de l'hédonisme."
	},
	{
		question: "Question n°47 : Que signifie « quand il est absent, nous faisons tout pour l'avoir » ?",
		answers: [
			"que le bonheur est impossible",
			"que le bonheur est la fin de toutes nos actions : tout ce que nous faisons vise à le retrouver",
			"que le bonheur ne dépend de rien"
		],
		correct: 2,
		explanation: "Cette phrase signifie que le bonheur est la fin de toutes nos actions : quand il est absent, nous agissons en vue de le faire revenir, et tout ce que nous faisons tend vers lui. Elle exprime la thèse eudémoniste fondamentale : le bonheur est le bien suprême recherché en dernière instance. Épicure l'utilise pour fonder l'importance du bonheur et, par conséquent, l'importance de ce qui le produit, la philosophie. Le raisonnement est alors complet : puisque toute action vise le bonheur et que la philosophie produit le bonheur, philosopher est l'action la plus fondamentale et la plus universelle qui soit."
	},
	{
		question: "Question n°48 : Quel est le genre littéraire de la Lettre à Ménécée ?",
		answers: [
			"un poème épique",
			"une lettre philosophique, genre de la correspondance doctrinale",
			"une tragédie"
		],
		correct: 2,
		explanation: "La Lettre à Ménécée est une lettre philosophique : elle relève de la correspondance doctrinale, genre par lequel Épicure transmettait l'essentiel de sa doctrine à ses disciples. Ce genre privilégie la clarté, la concision et la portée pratique : il s'agit de donner à lire, de façon accessible, ce qui est nécessaire au bonheur. La forme épistolaire crée aussi un lien personnel entre le maître et le disciple, renforçant la dimension exhortative du texte. Elle s'inscrit dans une pratique de l'enseignement philosophique où la lettre est un instrument de formation et de direction de conscience, comme le seront plus tard les lettres de Sénèque."
	},
	{
		question: "Question n°49 : Que signifie l'expression « s'agit-il de » dans le texte ?",
		answers: [
			"elle introduit une question sur l'objet dont on parle",
			"elle marque une opposition",
			"elle exprime une certitude"
		],
		correct: 1,
		explanation: "L'expression « lorsqu'il s'agit de » introduit l'objet ou la matière dont on parle : ici, il s'agit de « veiller à la santé de son âme ». Elle sert à préciser le domaine concerné par l'affirmation. Dans le texte, elle permet à Épicure de circonscrire le propos : ce n'est pas de n'importe quoi qu'il est question, mais du soin de l'âme, c'est-à-dire de la philosophie. Cette précision est importante pour l'argumentation : elle identifie l'enjeu (la santé de l'âme) sur lequel portera la conclusion (ni trop tôt ni trop tard). L'expression a donc une fonction de cadrage du propos."
	},
	{
		question: "Question n°50 : Quelle est la visée ultime de ce texte ?",
		answers: [
			"prouver l'existence de l'âme",
			"conduire le lecteur à philosopher pour vivre heureux, à tout âge",
			"décrire les coutumes de la Grèce antique"
		],
		correct: 2,
		explanation: "La visée ultime du texte est pratique et éthique : conduire le lecteur à philosopher pour vivre heureux, à tout âge. Épicure ne cherche pas à démontrer une thèse théorique sur l'âme ni à décrire des coutumes, mais à persuader son lecteur d'adopter la pratique philosophique comme soin de l'âme menant au bonheur. Toute l'argumentation converge vers cette conclusion : la philosophie est le soin de l'âme, elle mène au bonheur, donc il faut philosopher sans attendre. Cette visée protreptique et thérapeutique est caractéristique de la philosophie hellénistique et donne au texte sa portée universelle et intemporelle."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "Philosopher à tout âge" },
		{ key: 1, parent: 0, text: "Quand philosopher ?" },
		{ key: 2, parent: 1, text: "[1] Ni trop tôt ni trop tard" },
		{ key: 3, parent: 2, text: "[1] Le jeune ne doit pas remettre à plus tard" },
		{ key: 4, parent: 2, text: "[1] Le vieux ne doit pas se lasser de philosopher" },
		{ key: 5, parent: 0, text: "Pourquoi philosopher ?" },
		{ key: 6, parent: 5, text: "[2] Il s'agit de veiller à la santé de son âme" },
		{ key: 7, parent: 5, text: "[3] Celui qui remet la philosophie à plus tard ressemble à celui qui remet le bonheur à plus tard" },
		{ key: 8, parent: 0, text: "Bénéfices pour le vieillard", dir: "left" },
		{ key: 9, parent: 8, text: "[4] Il rajeunit grâce aux biens du passé" },
		{ key: 10, parent: 9, text: "[4] Il voue de la gratitude à ces biens" },
		{ key: 11, parent: 0, text: "Bénéfices pour le jeune homme", dir: "left" },
		{ key: 12, parent: 11, text: "[4] Il sera jeune et fort avancé en âge" },
		{ key: 13, parent: 12, text: "[4] Parce qu'il ne craindra pas l'avenir" },
		{ key: 14, parent: 0, text: "Conclusion", dir: "left" },
		{ key: 15, parent: 14, text: "[5] Faire de ce qui produit le bonheur l'objet de ses soins" },
		{ key: 16, parent: 15, text: "[5] Lorsqu'il est présent, nous avons tout" },
		{ key: 17, parent: 15, text: "[5] Quand il est absent, nous faisons tout pour l'avoir" }
	],
};

// ============================================
// APP : EXPLICATION DE TEXTE
// ============================================

const textes = [
	{
		contenu: philosophyData.texte,
		source: philosophyData.source,
		reponses: {
			origine: philosophyData.source,
			theme: "Le bonheur",
			these: "Il faut philosopher à tout âge, car la philosophie est le soin de l'âme qui mène au bonheur, bien suprême dont la présence nous donne tout et l'absence motive toutes nos actions",
			interet: "Ce texte montre que la philosophie n'est pas un savoir réservé à un âge ou à une élite, mais une pratique vitale et universelle, orientée vers le bonheur et le soin de soi",
			problematique: "À quel moment de la vie faut-il philosopher, et en quoi la philosophie est-elle liée au bonheur au point d'être nécessaire à tout âge ?"
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
			"text": "DÉBUT\n[1] Faut-il philosopher ?\nQuand commencer ?",
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
			"text": "[1-2] Y a-t-il un âge\npour philosopher —\ntrop tôt ou trop tard ?",
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
			"text": "[3] Celui qui remet\nle moment de philosopher\nressemble-t-il à celui qui\nremet le bonheur ?",
			"loc": "760.53 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "4",
			"text": "[4] Jeune et vieux\ndoivent-ils philosopher\nde la même manière ?",
			"loc": "1034.36 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "5",
			"text": "FIN\n[5] DONC il faut faire du\nbonheur l'objet de ses soins :\nprésent, il donne tout ;\nabsent, nous faisons tout\npour l'avoir",
			"loc": "1319.74 120",
			"category": "ellipse",
			"color": "#74b9ff",
			"borderColor": "#286DB3",
			"width": 260,
			"height": 120,
			"revealed": true
		},
		{
			"key": "6",
			"text": "[1-2] NON : pour personne\nil n'est trop tôt ni trop tard,\nquand il s'agit de veiller\nà la santé de son âme",
			"loc": "480 259.98",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "7",
			"text": "[3] OUI : remettre\nla philosophie = remettre\nle bonheur — même\nabsurdité",
			"loc": "760.53 259.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "8",
			"text": "[4] OUI : le vieillard\nrajeunit par gratitude\nenvers le passé ;\nle jeune est fort\nsans craindre l'avenir",
			"loc": "1034.36 266.25",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "9",
			"text": "[2] CAR : philosopher\n= veiller à la santé\nde son âme",
			"loc": "480 383.95",
			"category": "rectangle",
			"color": "#a3bffa",
			"borderColor": "#3b5bdb",
			"width": 240,
			"height": 90,
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
			"from": "2",
			"to": "6",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "3",
			"to": "7",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "4",
			"to": "8",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "6",
			"to": "9",
			"fromSide": "bottom",
			"toSide": "top"
		}
	]
};
