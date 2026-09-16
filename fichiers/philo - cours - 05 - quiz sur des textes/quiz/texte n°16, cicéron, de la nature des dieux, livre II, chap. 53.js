// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de CICÉRON";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
		texte: `« [1] Ainsi, quel que soit le point de vue où l'on se place, on arrive à cette conclusion qu'une intelligence et un calcul divins ont présidé à l'arrangement merveilleux de ce monde, pour la conservation et le salut de tous ses habitants. [2] On demandera ici pour quels êtres tant de dispositions s'étendant à tant d'objets ont pu être prises. [3] Est-ce en faveur des arbres et des végétaux en général qui, bien que dépourvus de sentiment, possèdent une sorte d'activité interne qui les fait se maintenir en vie ? [4] Mais cela est absurde. [5] Est-ce en faveur des bêtes ? [6] Il n'est pas plus probable que les dieux aient pris tant de peine pour des êtres muets et sans connaissance. [7] Pour qui donc le monde a-t-il été fait, qui nous le dira ? Pour les êtres animés qui ont la raison en partage. [8] Ce sont les dieux et les hommes au-dessus desquels il n'y a rien, car la raison est de toutes choses celle qui vaut le plus. [9] Il est donc à croire que le monde, avec tout ce qu'il contient a été fait pour les dieux et pour les hommes. »`,
		source: "CICÉRON, De la nature des dieux, livre II, chap. 53, Paris, Garnier, 1935"
};

// ============================================
// QUESTIONS DU QUIZ (50 questions)
// ============================================

const questions = [
	// Question n°1
	{
		question: "Question n°1 : Quelle est la conclusion à laquelle Cicéron arrive au début du texte ?",
		answers: [
			"Le monde est le fruit du hasard",
			"Une intelligence et un calcul divins ont présidé à l'arrangement du monde",
			"Le monde est éternel et incréé"
			],
			correct: 2,
			explanation: "Cicéron affirme explicitement : « on arrive à cette conclusion qu'une intelligence et un calcul divins ont présidé à l'arrangement merveilleux de ce monde. » Cette thèse est centrale dans le stoïcisme, dont Cicéron se fait ici le porte-parole. Elle postule que l'ordre du monde n'est pas le produit du hasard mais d'une providence rationnelle et bienveillante."
		},

		// Question n°2
	{
		question: "Question n°2 : Dans quel but le monde a-t-il été arrangé selon Cicéron ?",
		answers: [
			"Pour le plaisir des dieux",
			"Pour la conservation et le salut de tous ses habitants",
			"Pour servir de spectacle aux hommes"
			],
			correct: 2,
			explanation: "Cicéron précise que l'arrangement du monde a été fait « pour la conservation et le salut de tous ses habitants. » Cette finalité bienveillante de la providence divine est caractéristique de la théologie stoïcienne. Le monde n'est pas indifférent au sort de ses créatures : il est ordonné à leur préservation et à leur bien-être."
		},

		// Question n°3
		{
		question: "Question n°3 : Quelle question Cicéron pose-t-il après avoir établi la finalité du monde ?",
		answers: [
			"Comment le monde a-t-il été créé ?",
			"Pour quels êtres tant de dispositions ont-elles été prises ?",
			"Quand le monde a-t-il été créé ?"
			],
			correct: 2,
			explanation: "Cicéron formule la question suivante : « On demandera ici pour quels êtres tant de dispositions s'étendant à tant d'objets ont pu être prises. » Cette question porte sur les destinataires de la providence divine. Il s'agit de déterminer à qui profite l'ordre merveilleux du monde. La réponse à cette question permettra de comprendre la place de l'homme dans le cosmos."
		},

		// Question n°4
	{
		question: "Question n°4 : Quelle première hypothèse Cicéron envisage-t-il pour les destinataires de la providence ?",
		answers: [
			"Les dieux",
			"Les arbres et les végétaux",
			"Les astres"
			],
			correct: 2,
			explanation: "Cicéron envisage d'abord l'hypothèse que le monde aurait été fait « en faveur des arbres et des végétaux en général ». Cette hypothèse est immédiatement rejetée comme absurde. Elle sert de repoussoir pour mieux établir la thèse finale : le monde est fait pour les êtres doués de raison."
		},

		// Question n°5
	{
		question: "Question n°5 : Pourquoi l'hypothèse des végétaux est-elle rejetée ?",
		answers: [
			"Parce qu'ils sont trop nombreux",
			"Parce qu'ils sont dépourvus de sentiment",
			"Parce qu'ils sont nuisibles"
			],
			correct: 2,
			explanation: "Cicéron rejette l'hypothèse végétale en ces termes : « Mais cela est absurde. » La raison implicite est que les végétaux sont dépourvus de sentiment et de connaissance. Il serait déraisonnable de penser que les dieux aient déployé tant de soins pour des êtres incapables de percevoir et d'apprécier cet ordre. Seuls des êtres sensibles et rationnels peuvent être les bénéficiaires légitimes d'une providence aussi élaborée."
		},

		// Question n°6
	{
		question: "Question n°6 : Quelle deuxième hypothèse Cicéron examine-t-il ?",
		answers: [
			"Les hommes seuls",
			"Les bêtes",
			"Les dieux seuls"
			],
			correct: 2,
			explanation: "Après avoir écarté les végétaux, Cicéron examine l'hypothèse des bêtes : « Est-ce en faveur des bêtes ? » Cette seconde hypothèse est également rejetée, mais pour des raisons légèrement différentes. Les bêtes, bien que douées de sensibilité, sont dépourvues de raison, ce qui les rend indignes d'être la finalité ultime de l'univers."
		},

		// Question n°7
	{
		question: "Question n°7 : Pourquoi l'hypothèse des bêtes est-elle rejetée ?",
		answers: [
			"Parce qu'elles sont dangereuses",
			"Parce qu'elles sont muettes et sans connaissance",
			"Parce qu'elles sont trop nombreuses"
			],
			correct: 2,
			explanation: "Cicéron rejette l'hypothèse des bêtes en affirmant : « Il n'est pas plus probable que les dieux aient pris tant de peine pour des êtres muets et sans connaissance. » Les bêtes sont caractérisées par leur mutisme (absence de langage articulé) et leur absence de connaissance rationnelle. Elles ne peuvent donc être la raison d'être d'un cosmos aussi parfaitement ordonné."
		},

		// Question n°8
	{
		question: "Question n°8 : Quelle est la réponse finale à la question des destinataires du monde ?",
		answers: [
			"Les végétaux",
			"Les êtres animés qui ont la raison en partage",
			"Les bêtes sauvages"
			],
			correct: 2,
			explanation: "Cicéron répond clairement : « Pour les êtres animés qui ont la raison en partage. » Cette réponse identifie les destinataires de la providence divine aux êtres rationnels. La rationalité est le critère décisif qui distingue les bénéficiaires légitimes de l'ordre cosmique. Cette thèse est au cœur de l'humanisme antique : l'homme occupe une place privilégiée dans l'univers en vertu de sa raison."
		},

		// Question n°9
	{
		question: "Question n°9 : Quels sont les deux types d'êtres qui ont la raison en partage selon Cicéron ?",
		answers: [
			"Les hommes et les bêtes",
			"Les dieux et les hommes",
			"Les dieux et les anges"
			],
			correct: 2,
			explanation: "Cicéron identifie deux catégories d'êtres rationnels : « Ce sont les dieux et les hommes au-dessus desquels il n'y a rien. » Cette affirmation place les dieux et les hommes au sommet de la hiérarchie des êtres. Les deux partagent la raison, ce qui les unit dans une même dignité. Cette conception d'une communauté rationnelle entre dieux et hommes est caractéristique du stoïcisme."
		},

		// Question n°10
	{
		question: "Question n°10 : Pourquoi les dieux et les hommes sont-ils supérieurs aux autres êtres ?",
		answers: [
			"Parce qu'ils sont plus forts",
			"Parce que la raison est de toutes choses celle qui vaut le plus",
			"Parce qu'ils sont immortels"
			],
			correct: 2,
			explanation: "Cicéron justifie la supériorité des dieux et des hommes par cette raison : « car la raison est de toutes choses celle qui vaut le plus. » La raison est présentée comme la valeur suprême, ce qui justifie la place éminente de ceux qui la possèdent. Cette hiérarchie des valeurs place la rationalité au-dessus de la simple sensibilité ou de la simple vie végétative."
		},

		// Question n°11
	{
		question: "Question n°11 : Quelle est la conclusion finale du texte ?",
		answers: [
			"Le monde a été fait pour les dieux seuls",
			"Le monde, avec tout ce qu'il contient, a été fait pour les dieux et pour les hommes",
			"Le monde n'a pas de finalité"
			],
			correct: 2,
			explanation: "Cicéron conclut : « Il est donc à croire que le monde, avec tout ce qu'il contient a été fait pour les dieux et pour les hommes. » Cette conclusion synthétise l'argumentation : après avoir écarté les végétaux et les bêtes, Cicéron établit que seuls les êtres rationnels (dieux et hommes) peuvent être la finalité de l'univers. Cette thèse est une forme de finalisme anthropocentrique et théocentrique."
		},

		// Question n°12
	{
		question: "Question n°12 : Quelle conception de la nature Cicéron défend-il dans ce texte ?",
		answers: [
			"Une conception mécaniste",
			"Une conception téléologique et providentielle",
			"Une conception matérialiste"
			],
			correct: 2,
			explanation: "Cicéron défend une conception téléologique et providentielle de la nature. Le monde n'est pas le produit du hasard ou de forces aveugles, mais d'une « intelligence et un calcul divins ». Tout dans l'univers est ordonné à une fin : la conservation et le salut des êtres rationnels. Cette vision finaliste s'oppose radicalement aux conceptions épicuriennes et matérialistes que Cicéron critique dans le reste de l'œuvre."
		},

		// Question n°13
	{
		question: "Question n°13 : Quel est le rôle de la raison dans la hiérarchie des êtres selon Cicéron ?",
		answers: [
			"Elle est secondaire",
			"Elle est le critère suprême de valeur",
			"Elle est réservée aux dieux"
			],
			correct: 2,
			explanation: "Selon Cicéron, la raison est « de toutes choses celle qui vaut le plus ». Elle constitue donc le critère suprême de valeur dans la hiérarchie des êtres. Les végétaux, dépourvus de sentiment, sont au bas de l'échelle. Les bêtes, douées de sensibilité mais non de raison, occupent une position intermédiaire. Les dieux et les hommes, seuls êtres rationnels, sont au sommet. Cette hiérarchie fonde la dignité exceptionnelle de l'homme."
		},

		// Question n°14
{
		question: "Question n°14 : À quelle école philosophique Cicéron s'associe-t-il dans ce passage ?",
		answers: [
			"À l'épicurisme",
			"Au stoïcisme",
			"Au scepticisme"
			],
			correct: 2,
			explanation: "Dans ce passage du De la nature des dieux, Cicéron expose la doctrine stoïcienne de la providence. Le stoïcisme affirme que le monde est gouverné par une raison divine (le Logos) qui ordonne tout pour le bien. Cicéron, bien qu'éclectique, se fait ici le porte-parole de cette conception providentielle et finaliste de l'univers, s'opposant ainsi à l'épicurisme qui nie toute providence."
		},

		// Question n°15
	{
		question: "Question n°15 : Quelle est la différence entre les végétaux et les bêtes selon le texte ?",
		answers: [
			"Il n'y a pas de différence",
			"Les végétaux sont dépourvus de sentiment, les bêtes sont muettes et sans connaissance",
			"Les bêtes sont des végétaux supérieurs"
			],
			correct: 2,
			explanation: "Cicéron distingue les végétaux, « dépourvus de sentiment », des bêtes, « muets et sans connaissance ». Les végétaux ont une « sorte d'activité interne qui les fait se maintenir en vie » mais sont privés de sensibilité. Les bêtes ont la sensibilité mais sont privées de langage articulé et de connaissance rationnelle. Cette gradation dans les capacités psychiques fonde la hiérarchie des êtres et justifie que seuls les êtres rationnels soient la finalité de l'univers."
		},

		// Question n°16
{
		question: "Question n°16 : Que signifie l'expression « conservation et salut » dans ce contexte ?",
		answers: [
			"La préservation et le bien-être des habitants du monde",
			"La fuite et l'évasion",
			"La destruction et la création"
			],
			correct: 1,
			explanation: "L'expression « conservation et salut » désigne la préservation et le bien-être des habitants du monde. Elle exprime la finalité bienveillante de la providence divine : le monde est arrangé de manière à garantir la survie et l'épanouissement de ses habitants. Cette idée d'un ordre cosmique orienté vers le bien des créatures est centrale dans la théologie stoïcienne reprise par Cicéron."
		},

		// Question n°17
{
		question: "Question n°17 : Comment Cicéron caractérise-t-il l'arrangement du monde ?",
		answers: [
			"Comme chaotique",
			"Comme merveilleux",
			"Comme aléatoire"
			],
			correct: 2,
			explanation: "Cicéron qualifie l'arrangement du monde de « merveilleux ». Cet adjectif exprime l'admiration devant l'ordre et la beauté du cosmos. Il suggère que la perfection de l'univers témoigne de l'intelligence et de la puissance de son créateur. Cette admiration pour l'ordre cosmique est un lieu commun de la philosophie antique, partagé par Platon, Aristote et les stoïciens."
		},

		// Question n°18
{
		question: "Question n°18 : Quelle est la fonction de la question rhétorique « qui nous le dira ? » ?",
		answers: [
			"Exprimer le doute",
			"Introduire la réponse qui va suivre",
			"Marquer l'ignorance de Cicéron"
			],
			correct: 2,
			explanation: "La question rhétorique « qui nous le dira ? » sert à introduire la réponse qui va suivre : « Pour les êtres animés qui ont la raison en partage. » Cicéron ne doute pas de la réponse ; il utilise cette figure de style pour donner plus de force à sa conclusion. C'est un procédé pédagogique qui captive l'attention du lecteur et met en valeur la réponse apportée."
		},

		// Question n°19
{
		question: "Question n°19 : Quelle est la place de l'homme dans la conception cicéronienne du monde ?",
		answers: [
			"L'homme est un être insignifiant",
			"L'homme est au sommet de la hiérarchie avec les dieux",
			"L'homme est inférieur aux bêtes"
			],
			correct: 2,
			explanation: "Dans la conception cicéronienne, l'homme occupe une place éminente : il est au sommet de la hiérarchie des êtres, avec les dieux. Cette position privilégiée lui est conférée par sa rationalité. Le monde entier a été fait pour lui et pour les dieux. Cette conception anthropocentrique et théocentrique donne à l'homme une dignité exceptionnelle et une responsabilité particulière dans l'ordre cosmique."
		},

		// Question n°20
{
		question: "Question n°20 : Quel type de raisonnement Cicéron utilise-t-il dans ce passage ?",
		answers: [
			"Un raisonnement inductif",
			"Un raisonnement par élimination",
			"Un raisonnement par analogie"
			],
			correct: 2,
			explanation: "Cicéron utilise un raisonnement par élimination : il examine successivement les hypothèses possibles (végétaux, bêtes, êtres rationnels) et élimine celles qui sont absurdes ou improbables pour ne retenir que la plus plausible. Cette méthode, proche de la « voie royale » platonicienne, procède par exclusion des alternatives pour aboutir à la conclusion nécessaire. Elle donne à l'argumentation une apparence de rigueur logique."
		},

		// Question n°21
{
		question: "Question n°21 : Que signifie l'expression « au-dessus desquels il n'y a rien » ?",
		answers: [
			"Que les dieux et les hommes sont au sommet de la hiérarchie des êtres",
			"Qu'ils sont dans le ciel",
			"Qu'ils sont invisibles"
			],
			correct: 1,
			explanation: "L'expression « au-dessus desquels il n'y a rien » signifie que les dieux et les hommes sont au sommet de la hiérarchie des êtres. Il n'existe rien de supérieur à eux dans l'ordre de la création. Cette affirmation souligne la dignité éminente des êtres rationnels et fonde leur droit à être la finalité de l'univers. Elle implique aussi une certaine égalité de nature entre dieux et hommes, tous deux définis par la raison."
		},

		// Question n°22
{
		question: "Question n°22 : Pourquoi les végétaux ne peuvent-ils pas être la finalité du monde ?",
		answers: [
			"Parce qu'ils sont trop petits",
			"Parce qu'ils sont dépourvus de sentiment et de connaissance",
			"Parce qu'ils sont comestibles"
			],
			correct: 2,
			explanation: "Les végétaux ne peuvent pas être la finalité du monde parce qu'ils sont dépourvus de sentiment et de connaissance. Cicéron juge « absurde » l'idée que les dieux aient pris tant de peine pour des êtres incapables de percevoir et d'apprécier l'ordre cosmique. Seuls des êtres conscients et rationnels peuvent être les bénéficiaires légitimes d'une providence aussi élaborée. Cette exigence de rationalité comme critère de valeur est fondamentale dans l'argumentation."
		},

		// Question n°23
{
		question: "Question n°23 : Quelle est la différence entre « sentiment » et « connaissance » dans le texte ?",
		answers: [
			"Ce sont des synonymes",
			"Le sentiment est la sensibilité, la connaissance est la rationalité",
			"Le sentiment est supérieur à la connaissance"
			],
			correct: 2,
			explanation: "Dans le texte, le « sentiment » désigne la sensibilité, c'est-à-dire la capacité de percevoir et d'éprouver des sensations. La « connaissance » désigne la rationalité, c'est-à-dire la capacité de comprendre, de raisonner et de saisir des vérités universelles. Les bêtes ont le sentiment mais non la connaissance ; les végétaux n'ont ni l'un ni l'autre ; seuls les dieux et les hommes ont les deux. Cette distinction fonde la hiérarchie des êtres."
		},

		// Question n°24
{
		question: "Question n°24 : Comment Cicéron qualifie-t-il les bêtes ?",
		answers: [
			"Comme sages",
			"Comme muettes et sans connaissance",
			"Comme divines"
			],
			correct: 2,
			explanation: "Cicéron qualifie les bêtes de « muettes et sans connaissance ». « Muettes » signifie qu'elles sont dépourvues de langage articulé, capacité proprement humaine qui permet l'expression de la pensée rationnelle. « Sans connaissance » signifie qu'elles n'ont pas accès à la connaissance intellectuelle des vérités universelles. Ces deux caractéristiques les excluent de la catégorie des êtres rationnels et les rendent indignes d'être la finalité de l'univers."
		},

		// Question n°25
{
		question: "Question n°25 : Quelle est la thèse centrale de ce passage ?",
		answers: [
			"Le monde est éternel",
			"Le monde a été fait par une intelligence divine pour les êtres rationnels",
			"Le monde est une illusion"
			],
			correct: 2,
			explanation: "La thèse centrale de ce passage est que le monde a été fait par une intelligence divine pour les êtres rationnels, c'est-à-dire les dieux et les hommes. Cette thèse combine trois éléments : le finalisme (le monde a une fin), le providentialisme (cette fin est voulue par une intelligence divine) et l'humanisme (les hommes, en tant qu'êtres rationnels, sont les bénéficiaires de cette providence). C'est une synthèse de la théologie stoïcienne et de l'humanisme antique."
		},

		// Question n°26
{
		question: "Question n°26 : Comment Cicéron conçoit-il la relation entre les dieux et les hommes ?",
		answers: [
			"Comme une relation de domination",
			"Comme une communauté fondée sur la raison partagée",
			"Comme une relation d'indifférence"
			],
			correct: 2,
			explanation: "Cicéron conçoit la relation entre les dieux et les hommes comme une communauté fondée sur la raison partagée. Les deux sont « au-dessus desquels il n'y a rien » et ont « la raison en partage ». Cette communauté rationnelle unit les dieux et les hommes dans une même dignité et une même finalité. Elle implique une certaine proximité entre le divin et l'humain, l'homme étant capable de connaître et d'imiter les dieux par l'exercice de sa raison."
		},

		// Question n°27
{
		question: "Question n°27 : Quelle est la fonction de l'adjectif « merveilleux » dans le texte ?",
		answers: [
			"Exprimer l'émerveillement devant l'ordre cosmique",
			"Marquer le doute",
			"Critiquer la création"
			],
			correct: 1,
			explanation: "L'adjectif « merveilleux » exprime l'émerveillement devant l'ordre cosmique. Il souligne la perfection et la beauté de l'arrangement du monde, qui témoignent de l'intelligence et de la bonté du créateur. Cet émerveillement est une attitude philosophique fondamentale dans l'Antiquité : il est le point de départ de la réflexion sur l'origine et la finalité du cosmos. Pour Cicéron, l'admiration devant l'ordre du monde conduit naturellement à reconnaître l'existence d'une providence divine."
		},

		// Question n°28
{
		question: "Question n°28 : Pourquoi Cicéron utilise-t-il le terme « absurde » pour qualifier l'hypothèse végétale ?",
		answers: [
			"Parce qu'elle est scientifiquement fausse",
			"Parce qu'elle contredit la raison et le bon sens",
			"Parce qu'elle est immorale"
			],
			correct: 2,
			explanation: "Cicéron qualifie l'hypothèse végétale d'« absurde » parce qu'elle contredit la raison et le bon sens. Il serait irrationnel de penser que les dieux aient déployé tant de soins pour des êtres incapables de percevoir et d'apprécier l'ordre cosmique. L'absurdité réside dans l'inadéquation entre l'importance des moyens (l'arrangement merveilleux du monde) et l'insignifiance des destinataires (des êtres dépourvus de sentiment). C'est un argument de convenance rationnelle."
		},

		// Question n°29
{
		question: "Question n°29 : Quelle est la place de la sensibilité dans la hiérarchie des êtres selon Cicéron ?",
		answers: [
			"Elle est au sommet",
			"Elle est intermédiaire entre la vie végétative et la vie rationnelle",
			"Elle est inférieure à la vie végétative"
			],
			correct: 2,
			explanation: "Dans la hiérarchie des êtres selon Cicéron, la sensibilité occupe une position intermédiaire entre la vie végétative et la vie rationnelle. Les végétaux ont seulement la vie végétative (activité interne de croissance et de reproduction). Les bêtes ont en plus la sensibilité (capacité de percevoir et de ressentir). Les dieux et les hommes ont en plus la rationalité (capacité de connaître et de raisonner). Cette gradation reflète la conception antique des trois niveaux de l'âme : végétative, sensitive et rationnelle."
		},

		// Question n°30
{
		question: "Question n°30 : Comment Cicéron définit-il la raison ?",
		answers: [
			"Comme une faculté secondaire",
			"Comme ce qui vaut le plus de toutes choses",
			"Comme une illusion"
			],
			correct: 2,
			explanation: "Cicéron définit la raison comme « de toutes choses celle qui vaut le plus ». Cette définition axiologique fait de la raison la valeur suprême, le critère ultime de dignité et de perfection. Cette conception est caractéristique du rationalisme antique : la raison est ce qui distingue l'homme de l'animal et le rapproche du divin. Elle fonde la supériorité des êtres rationnels et justifie leur place éminente dans l'univers."
		},

		// Question n°31
{
		question: "Question n°31 : Quel est le rapport entre raison et divinité dans ce texte ?",
		answers: [
			"La raison est opposée à la divinité",
			"La raison est ce qui unit les dieux et les hommes",
			"La raison est réservée aux dieux"
			],
			correct: 2,
			explanation: "Dans ce texte, la raison est ce qui unit les dieux et les hommes. Les deux sont définis comme « les êtres animés qui ont la raison en partage ». Cette communauté rationnelle établit une parenté entre le divin et l'humain : l'homme participe à la raison divine et peut ainsi connaître l'ordre du monde et s'y conformer. Cette conception de la raison comme lien entre dieux et hommes est centrale dans le stoïcisme et dans l'humanisme antique."
		},

		// Question n°32
{
		question: "Question n°32 : Pourquoi Cicéron exclut-il les bêtes de la finalité du monde ?",
		answers: [
			"Parce qu'elles sont dangereuses",
			"Parce qu'elles sont dépourvues de raison",
			"Parce qu'elles sont mortelles"
			],
			correct: 2,
			explanation: "Cicéron exclut les bêtes de la finalité du monde parce qu'elles sont dépourvues de raison. Bien qu'elles possèdent la sensibilité, elles sont « muettes et sans connaissance », c'est-à-dire incapables de langage articulé et de connaissance intellectuelle. Or, seule la raison « vaut le plus » et peut légitimer une providence aussi élaborée. Les bêtes, ne pouvant ni comprendre ni apprécier l'ordre cosmique, ne peuvent en être les bénéficiaires ultimes."
		},

		// Question n°33
{
		question: "Question n°33 : Quelle est la signification philosophique de la conclusion de Cicéron ?",
		answers: [
			"Le monde est dépourvu de sens",
			"Le monde a un sens et une finalité centrés sur les êtres rationnels",
			"Le monde est une prison"
			],
			correct: 2,
			explanation: "La conclusion de Cicéron a une signification philosophique profonde : le monde a un sens et une finalité centrés sur les êtres rationnels. Cette vision téléologique donne à l'existence humaine une dignité et une responsabilité exceptionnelles. L'homme n'est pas un être perdu dans un cosmos indifférent ; il est la raison d'être de l'univers, avec les dieux. Cette conception optimiste et humaniste s'oppose aux visions matérialistes et nihilistes."
		},

		// Question n°34
{
		question: "Question n°34 : Comment Cicéron conçoit-il la providence divine ?",
		answers: [
			"Comme aveugle et indifférente",
			"Comme intelligente, calculatrice et bienveillante",
			"Comme capricieuse"
			],
			correct: 2,
			explanation: "Cicéron conçoit la providence divine comme intelligente, calculatrice et bienveillante. Elle est « une intelligence et un calcul divins » qui a présidé à l'arrangement du monde « pour la conservation et le salut de tous ses habitants ». Cette providence n'est pas aveugle ou capricieuse : elle est rationnelle et orientée vers le bien. Elle témoigne de la sagesse et de la bonté du créateur, qui a tout ordonné pour le meilleur."
		},

		// Question n°35
{
		question: "Question n°35 : Quel est le rôle de l'homme dans le cosmos selon Cicéron ?",
		answers: [
			"L'homme est un spectateur passif",
			"L'homme est le bénéficiaire et le contemplateur de l'ordre cosmique",
			"L'homme est un accident"
			],
			correct: 2,
			explanation: "Selon Cicéron, l'homme est à la fois le bénéficiaire et le contemplateur de l'ordre cosmique. En tant qu'être rationnel, il est destinataire de la providence divine : le monde a été fait pour lui et pour les dieux. Mais il est aussi celui qui peut comprendre et admirer cet ordre, par l'exercice de sa raison. Cette double position fait de l'homme un être privilégié, capable de connaître sa place dans l'univers et de s'y conformer volontairement."
		},

		// Question n°36
{
		question: "Question n°36 : Quelle est la différence entre la conception de Cicéron et celle des épicuriens ?",
		answers: [
			"Les épicuriens croient à la providence, Cicéron non",
			"Cicéron croit à la providence, les épicuriens non",
			"Ils sont d'accord sur tout"
			],
			correct: 2,
			explanation: "La différence fondamentale entre Cicéron et les épicuriens porte sur la providence. Cicéron, s'exprimant ici dans une perspective stoïcienne, croit à une providence divine intelligente et bienveillante qui a ordonné le monde pour le bien des êtres rationnels. Les épicuriens, au contraire, nient toute providence : pour eux, les dieux, s'ils existent, sont indifférents aux affaires humaines, et le monde est le produit du hasard et des atomes. Cette opposition est au cœur du De la nature des dieux."
		},

		// Question n°37
{
		question: "Question n°37 : Pourquoi Cicéron affirme-t-il que les dieux et les hommes sont au-dessus de tout ?",
		answers: [
			"Parce qu'ils sont plus forts",
			"Parce qu'ils possèdent la raison, qui est la valeur suprême",
			"Parce qu'ils sont immortels"
			],
			correct: 2,
			explanation: "Cicéron affirme que les dieux et les hommes sont au-dessus de tout parce qu'ils possèdent la raison, qui est la valeur suprême. La raison est « de toutes choses celle qui vaut le plus », ce qui confère à ceux qui la détiennent une dignité exceptionnelle. Cette supériorité n'est pas fondée sur la force ou l'immortalité, mais sur la rationalité. C'est une hiérarchie de valeurs intellectuelles et morales, non de puissance physique."
		},

		// Question n°38
{
		question: "Question n°38 : Quel est le sens de l'expression « la raison est de toutes choses celle qui vaut le plus » ?",
		answers: [
			"La raison est utile",
			"La raison est la valeur suprême, supérieure à toutes les autres",
			"La raison est rare"
			],
			correct: 2,
			explanation: "L'expression « la raison est de toutes choses celle qui vaut le plus » signifie que la raison est la valeur suprême, supérieure à toutes les autres. Elle établit une hiérarchie objective des valeurs où la rationalité occupe le premier rang. Cette affirmation fonde la supériorité des êtres rationnels (dieux et hommes) sur les êtres non rationnels (bêtes et végétaux). Elle implique aussi que la finalité de l'univers doit être cherchée du côté de ce qui a le plus de valeur, c'est-à-dire la rationalité."
		},

		// Question n°39
{
		question: "Question n°39 : Comment Cicéron justifie-t-il le finalisme cosmique ?",
		answers: [
			"Par la foi",
			"Par l'observation de l'ordre et de la beauté du monde",
			"Par la tradition"
			],
			correct: 2,
			explanation: "Cicéron justifie le finalisme cosmique par l'observation de l'ordre et de la beauté du monde. L'« arrangement merveilleux » du cosmos témoigne selon lui de l'existence d'une intelligence et d'un calcul divins. C'est un argument téléologique classique : la perfection de l'univers ne peut s'expliquer par le hasard ; elle requiert une cause intelligente et bienveillante. Cet argument, développé par Socrate et Platon, sera repris par les stoïciens et plus tard par les théologiens chrétiens."
		},

		// Question n°40
{
		question: "Question n°40 : Quelle est la place des végétaux dans l'argumentation de Cicéron ?",
		answers: [
			"Ils sont les destinataires du monde",
			"Ils servent d'hypothèse absurde à écarter",
			"Ils sont les créateurs du monde"
			],
			correct: 2,
			explanation: "Dans l'argumentation de Cicéron, les végétaux servent d'hypothèse absurde à écarter. En envisageant l'hypothèse que le monde aurait été fait pour les végétaux, Cicéron montre l'absurdité d'une telle proposition et renforce par contraste la thèse finale. C'est une figure argumentative classique : réfuter une position extrême pour mieux établir la position médiane. Les végétaux, dépourvus de sentiment, ne peuvent évidemment pas être la finalité d'un cosmos aussi parfaitement ordonné."
		},

		// Question n°41
{
		question: "Question n°41 : Comment Cicéron définit-il la place de l'homme dans la nature ?",
		answers: [
			"L'homme est un animal comme les autres",
			"L'homme est un être rationnel, supérieur aux bêtes et proche des dieux",
			"L'homme est inférieur aux dieux mais supérieur aux bêtes",
			"L'homme est un être purement matériel"
			],
			correct: 3,
			explanation: "Cicéron définit la place de l'homme dans la nature comme celle d'un être intermédiaire entre les bêtes et les dieux. Inférieur aux dieux par sa mortalité et ses imperfections, il est supérieur aux bêtes par sa rationalité. Cette position médiane fait de l'homme un être de transition, capable de s'élever vers le divin par l'exercice de sa raison ou de retomber vers l'animalité en la négligeant. Cette conception hiérarchique et dynamique de la nature humaine est caractéristique de l'humanisme antique."
		},

		// Question n°42
{
		question: "Question n°42 : Quel est le rapport entre intelligence et calcul dans le texte ?",
		answers: [
			"Ils sont opposés",
			"Ils sont complémentaires pour désigner l'action divine",
			"Ils sont identiques"
			],
			correct: 2,
			explanation: "Dans le texte, l'intelligence et le calcul sont complémentaires pour désigner l'action divine. L'« intelligence » évoque la connaissance et la sagesse ; le « calcul » évoque la prévision et l'organisation rationnelle des moyens en vue d'une fin. Ensemble, ils caractérisent l'action providentielle de Dieu, qui connaît la fin (le bien des êtres rationnels) et dispose les moyens appropriés pour l'atteindre (l'arrangement du monde). Cette complémentarité souligne le caractère à la fois sage et efficace de la providence divine."
		},

		// Question n°43
{
		question: "Question n°43 : Pourquoi Cicéron rejette-t-il l'idée que le monde soit fait pour les bêtes ?",
		answers: [
			"Parce qu'elles sont nuisibles",
			"Parce qu'elles sont dépourvues de raison et de langage",
			"Parce qu'elles sont trop nombreuses"
			],
			correct: 2,
			explanation: "Cicéron rejette l'idée que le monde soit fait pour les bêtes parce qu'elles sont dépourvues de raison et de langage. Il les qualifie de « muettes et sans connaissance ». Sans la rationalité, les bêtes ne peuvent ni comprendre ni apprécier l'ordre cosmique ; elles ne peuvent donc être les bénéficiaires ultimes d'une providence aussi élaborée. Seuls des êtres capables de connaissance et de reconnaissance peuvent être la finalité d'un univers ordonné par une intelligence divine."
		},

		// Question n°44
{
		question: "Question n°44 : Quelle est la fonction de l'énumération dans ce passage ?",
		answers: [
			"Orner le discours",
			"Examiner successivement les hypothèses possibles",
			"Créer du rythme"
			],
			correct: 2,
			explanation: "L'énumération dans ce passage a pour fonction d'examiner successivement les hypothèses possibles concernant les destinataires de la providence. Cicéron passe en revue les végétaux, puis les bêtes, puis les êtres rationnels. Cette énumération exhaustive donne à l'argumentation une apparence de rigueur et de complétude. Elle permet d'écarter méthodiquement les hypothèses insuffisantes pour ne retenir que la plus plausible."
		},

		// Question n°45
{
		question: "Question n°45 : Quelle est la conception de la divinité qui se dégage de ce texte ?",
		answers: [
			"Une divinité indifférente",
			"Une divinité providencieuse et rationnelle",
			"Une divinité capricieuse"
			],
			correct: 2,
			explanation: "La conception de la divinité qui se dégage de ce texte est celle d'une divinité providencieuse et rationnelle. Les dieux sont dotés de « la raison en partage » et ont présidé par « une intelligence et un calcul divins » à l'arrangement du monde. Ils se soucient du bien des créatures rationnelles et ont tout ordonné pour leur conservation et leur salut. Cette divinité n'est ni indifférente ni capricieuse : elle est sage, bienveillante et rationnelle."
		},

		// Question n°46
{
		question: "Question n°46 : Comment Cicéron conçoit-il la relation entre l'homme et la nature ?",
		answers: [
			"L'homme est soumis à la nature",
			"L'homme est la finalité de la nature et son contemplateur",
			"L'homme est étranger à la nature"
			],
			correct: 2,
			explanation: "Cicéron conçoit la relation entre l'homme et la nature comme une relation de finalité et de contemplation. La nature (le monde) a été faite pour l'homme, en tant qu'être rationnel. Mais l'homme est aussi celui qui peut contempler et comprendre la nature, par l'exercice de sa raison. Cette double relation fait de l'homme à la fois le bénéficiaire et le spectateur privilégié de l'ordre cosmique. Cette conception est au cœur de l'humanisme antique."
		},

		// Question n°47
{
		question: "Question n°47 : Quelle est la signification de l'expression « pour la conservation et le salut de tous ses habitants » ?",
		answers: [
			"Le monde est dangereux",
			"Le monde est ordonné au bien-être de ses habitants",
			"Le monde est indifférent"
			],
			correct: 2,
			explanation: "L'expression « pour la conservation et le salut de tous ses habitants » signifie que le monde est ordonné au bien-être de ses habitants. La providence divine ne vise pas seulement la survie mais le « salut », c'est-à-dire le bien-être complet et l'épanouissement. Cette finalité bienveillante de l'ordre cosmique est caractéristique de la théologie stoïcienne. Elle implique que le monde n'est pas un lieu hostile ou indifférent, mais un environnement favorable au développement des êtres rationnels."
		},

		// Question n°48
{
		question: "Question n°48 : Pourquoi Cicéron affirme-t-il que le monde a été fait pour les dieux et les hommes ?",
		answers: [
			"Parce qu'ils sont les plus nombreux",
			"Parce qu'ils sont les seuls êtres rationnels",
			"Parce qu'ils sont les plus forts"
			],
			correct: 2,
			explanation: "Cicéron affirme que le monde a été fait pour les dieux et les hommes parce qu'ils sont les seuls êtres rationnels. La rationalité est le critère décisif : « la raison est de toutes choses celle qui vaut le plus ». Seuls les êtres capables de raison peuvent comprendre et apprécier l'ordre cosmique, et donc être la finalité d'un univers ordonné par une intelligence divine. Cette thèse fonde la dignité exceptionnelle des êtres rationnels et leur place centrale dans le cosmos."
		},

		// Question n°49
{
		question: "Question n°49 : Comment ce texte illustre-t-il la méthode philosophique de Cicéron ?",
		answers: [
			"Par la exposition dogmatique",
			"Par l'examen critique des hypothèses et le raisonnement par élimination",
			"Par la citation d'autorités"
			],
			correct: 2,
			explanation: "Ce texte illustre la méthode philosophique de Cicéron par l'examen critique des hypothèses et le raisonnement par élimination. Cicéron ne se contente pas d'affirmer dogmatiquement sa thèse ; il examine successivement les hypothèses concurrentes (végétaux, bêtes) et montre leur insuffisance avant d'établir sa conclusion. Cette méthode dialectique, héritée de Socrate et de Platon, donne à l'argumentation une rigueur et une crédibilité supérieures. Elle reflète aussi l'éclectisme de Cicéron, qui combine différentes traditions philosophiques."
		},

		// Question n°50
{
		question: "Question n°50 : Quelle est l'importance de ce passage dans l'histoire de la philosophie ?",
		answers: [
			"C'est un texte mineur sans influence",
			"C'est un texte majeur qui a influencé la théologie chrétienne et l'humanisme",
			"C'est un texte purement littéraire"
			],
			correct: 2,
			explanation: "Ce passage du De la nature des dieux est un texte majeur qui a influencé la théologie chrétienne et l'humanisme. La conception d'une providence divine rationnelle et bienveillante, l'idée d'une hiérarchie des êtres fondée sur la rationalité, la place éminente de l'homme dans le cosmos : toutes ces thèses seront reprises et développées par les Pères de l'Église et les théologiens médiévaux. Cicéron a joué un rôle crucial dans la transmission de la philosophie grecque à l'Occident latin et dans la formation de la pensée chrétienne."
		}
];