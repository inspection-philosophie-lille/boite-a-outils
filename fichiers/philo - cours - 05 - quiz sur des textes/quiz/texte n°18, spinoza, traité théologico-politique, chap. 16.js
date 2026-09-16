// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de SPINOZA";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
		texte: `« [1] On pense que l'esclave est celui qui agit par commandement et l'homme libre celui qui agit selon son bon plaisir. [2] Cela cependant n'est pas absolument vrai, car en réalité être captif de son plaisir et incapable de rien voir ni faire qui nous soit vraiment utile, c'est le pire esclavage, et la liberté n'est qu'à celui qui de son entier consentement vit sous la seule conduite de la Raison. [3] Quant à l'action par commandement, c'est-à-dire l'obéissance, elle ôte bien en quelque manière la liberté, elle ne fait cependant pas sur-le-champ un esclavage, c'est la raison déterminante de l'action qui le fait. [4] Si la fin de l'action n'est pas l'utilité de l'agent lui-même, mais de celui qui commande, alors l'agent est un esclave, inutile à lui-même ; au contraire, dans un Etat et sous un commandement pour lesquels la loi suprême est le salut de tout le peuple, non de celui qui commande, celui qui obéit en tout au souverain ne doit pas être dit un esclave inutile à lui-même, mais un sujet. [5] Ainsi cet Etat est le plus libre, dont les lois sont fondées en droite Raison, car dans cet Etat chacun, dès qu'il le veut, peut être libre, c'est-à-dire vivre de son entier consentement sous la conduite de la Raison ».`,
		source: "Baruch SPINOZA, Traité théologico-politique, chap. XVI (1665), in Œuvres, Garnier-Flammarion, t. 2, p.267"
};

// ============================================
// QUESTIONS DU QUIZ (50 questions)
// ============================================

const questions = [
	// Question n°1
	{
		question: "Question n°1 : Quelle est l'opinion courante sur l'esclave selon Spinoza ?",
		answers: [
			"L'esclave est celui qui agit par commandement",
			"L'esclave est celui qui agit selon son bon plaisir",
			"L'esclave est celui qui obéit à la Raison"
			],
			correct: 1,
			explanation: "Spinoza rapporte l'opinion commune : « On pense que l'esclave est celui qui agit par commandement et l'homme libre celui qui agit selon son bon plaisir. » Cette conception spontanée identifie la liberté à l'absence de contrainte extérieure et à la satisfaction des désirs immédiats. Spinoza va renverser cette vision en montrant qu'elle est superficielle et qu'elle confond la vraie liberté avec une forme d'esclavage."
		},

		// Question n°2
	{
		question: "Question n°2 : Quelle est l'opinion courante sur l'homme libre selon Spinoza ?",
		answers: [
			"L'homme libre est celui qui agit par commandement",
			"L'homme libre est celui qui agit selon son bon plaisir",
			"L'homme libre est celui qui obéit aux lois"
			],
			correct: 2,
			explanation: "Selon l'opinion commune rapportée par Spinoza, « l'homme libre [est] celui qui agit selon son bon plaisir ». Cette conception identifie la liberté à la capacité de faire tout ce que l'on désire, sans contrainte ni règle. Spinoza va critiquer cette vision en montrant que celui qui suit aveuglément ses désirs est en réalité esclave de ses passions, tandis que la vraie liberté consiste à vivre sous la conduite de la Raison."
		},

		// Question n°3
	{
		question: "Question n°3 : Spinoza accepte-t-il entièrement l'opinion courante ?",
		answers: [
			"Oui, entièrement",
			"Non, elle n'est pas absolument vraie",
			"Il ne se prononce pas"
			],
			correct: 2,
			explanation: "Spinoza rejette l'opinion courante : « Cela cependant n'est pas absolument vrai. » Cette formule marque la distance critique que Spinoza prend par rapport au sens commun. L'opinion commune confond la liberté avec la satisfaction des désirs et l'esclavage avec l'obéissance. Spinoza va montrer que c'est l'inverse : la vraie liberté est dans la Raison, et l'esclavage véritable est dans la soumission aux passions."
		},

		// Question n°4
{
		question: "Question n°4 : Qu'est-ce que le « pire esclavage » selon Spinoza ?",
		answers: [
			"L'obéissance à un tyran",
			"Être captif de son plaisir",
			"Vivre en société"
			],
			correct: 2,
			explanation: "Spinoza affirme que « être captif de son plaisir et incapable de rien voir ni faire qui nous soit vraiment utile, c'est le pire esclavage ». Cette thèse est fondamentale : l'esclavage véritable n'est pas d'abord politique ou social, il est intérieur. Celui qui est dominé par ses passions, qui ne peut rien voir ni faire d'utile, est le plus esclave de tous, même s'il n'obéit à aucun maître extérieur. La liberté commence donc par la maîtrise de soi."
		},

		// Question n°5
{
	question: "Question n°5 : À qui appartient la liberté selon Spinoza ?",
	answers: [
			"À celui qui agit selon son bon plaisir",
			"À celui qui vit sous la seule conduite de la Raison",
			"À celui qui commande"
			],
			correct: 2,
			explanation: "Spinoza affirme que « la liberté n'est qu'à celui qui de son entier consentement vit sous la seule conduite de la Raison ». La liberté spinoziste n'est donc pas l'absence de règles mais l'obéissance consentie à la Raison. L'homme libre est celui qui comprend la nécessité rationnelle et s'y conforme volontairement. Cette conception de la liberté comme soumission raisonnée à la Raison est au cœur de l'éthique spinoziste."
		},

		// Question n°6
{
	question: "Question n°6 : Que signifie « de son entier consentement » dans le texte ?",
	answers: [
			"Par contrainte",
			"Volontairement et pleinement",
			"Par habitude"
			],
			correct: 2,
			explanation: "L'expression « de son entier consentement » signifie volontairement et pleinement. Elle souligne que la liberté spinoziste implique l'adhésion volontaire de l'esprit à la Raison. L'homme libre ne subit pas la Raison comme une contrainte extérieure ; il la reconnaît intérieurement comme sa propre loi. Cette adhésion consentie distingue la liberté de la simple obéissance mécanique. Elle est le fruit de la connaissance adéquate des causes."
		},

		// Question n°7
{
	question: "Question n°7 : Qu'est-ce que l'obéissance selon Spinoza ?",
	answers: [
			"L'action par commandement",
			"L'action selon son bon plaisir",
			"L'action selon la Raison"
			],
			correct: 1,
			explanation: "Spinoza définit l'obéissance comme « l'action par commandement ». Obéir, c'est agir conformément à la volonté d'un autre, que cet autre soit un maître, un souverain ou la loi. Spinoza va nuancer son jugement sur l'obéissance : elle n'est pas nécessairement un esclavage. Tout dépend de la raison pour laquelle on obéit et de la finalité de l'action commandée. C'est la destination de l'obéissance qui détermine sa nature."
		},

		// Question n°8
{
	question: "Question n°8 : Quel est l'effet de l'obéissance sur la liberté selon Spinoza ?",
	answers: [
			"Elle la supprime totalement",
			"Elle l'ôte en quelque manière sans faire un esclavage",
			"Elle la renforce"
			],
			correct: 2,
			explanation: "Spinoza affirme que l'obéissance « ôte bien en quelque manière la liberté, elle ne fait cependant pas sur-le-champ un esclavage ». Cette distinction est cruciale : l'obéissance diminue la liberté mais ne la supprime pas nécessairement. Elle ne devient esclavage que dans certaines conditions. Spinoza refuse donc l'assimilation trop rapide entre obéissance et servitude. L'obéissance peut être compatible avec la liberté si elle est consentie et orientée vers le bien commun."
		},

		// Question n°9
{
	question: "Question n°9 : Qu'est-ce qui détermine si l'obéissance est un esclavage ?",
	answers: [
			"La dureté du commandement",
			"La raison déterminante de l'action",
			"Le nombre de commandements"
			],
			correct: 2,
			explanation: "Spinoza affirme que « c'est la raison déterminante de l'action qui le fait », c'est-à-dire qui fait d'une obéissance un esclavage. Ce qui compte, ce n'est pas le fait d'obéir en lui-même, mais la finalité visée par l'obéissance. Si la fin de l'action est l'utilité de l'agent, l'obéissance est compatible avec la liberté. Si la fin est l'utilité de celui qui commande au détriment de l'agent, alors l'obéissance est servitude."
		},

		// Question n°10
{
	question: "Question n°10 : Dans quel cas l'agent est-il un esclave selon Spinoza ?",
	answers: [
			"Quand la fin de l'action est l'utilité de l'agent",
			"Quand la fin de l'action est l'utilité de celui qui commande",
			"Quand l'action est conforme à la Raison"
			],
			correct: 2,
			explanation: "Spinoza affirme : « Si la fin de l'action n'est pas l'utilité de l'agent lui-même, mais de celui qui commande, alors l'agent est un esclave, inutile à lui-même. » L'esclavage se définit donc par la destination de l'action : si elle profite au maître et non à l'agent, alors l'agent est véritablement esclave. Cette définition fait de l'esclavage une notion relationnelle et finaliste : ce n'est pas l'obéissance en soi qui est esclavage, mais l'obéissance qui ne profite pas à celui qui obéit."
		},

		// Question n°11
{
	question: "Question n°11 : Que signifie l'expression « inutile à lui-même » ?",
	answers: [
			"Qui est paresseux",
			"Qui agit pour l'utilité d'autrui et non pour la sienne",
			"Qui ne sert à rien"
			],
			correct: 2,
			explanation: "L'expression « inutile à lui-même » signifie que l'agent agit pour l'utilité d'autrui et non pour la sienne. L'esclave, dans la définition spinoziste, est celui dont l'action ne profite pas à lui-même mais à son maître. Il est « inutile à lui-même » car son activité ne contribue pas à sa propre conservation et à son propre perfectionnement. Cette conception de l'esclavage met l'accent sur la finalité de l'action plutôt que sur la contrainte extérieure."
		},

		// Question n°12
{
	question: "Question n°12 : Dans quel cas l'obéissant n'est-il pas un esclave selon Spinoza ?",
	answers: [
			"Quand la loi suprême est le salut de tout le peuple",
			"Quand il obéit à un roi juste",
			"Quand il obéit par peur"
			],
			correct: 1,
			explanation: "Spinoza affirme que « dans un Etat et sous un commandement pour lesquels la loi suprême est le salut de tout le peuple, non de celui qui commande, celui qui obéit en tout au souverain ne doit pas être dit un esclave inutile à lui-même, mais un sujet. » L'obéissance politique n'est donc pas un esclavage quand elle est orientée vers le bien commun. Le sujet qui obéit à des lois justes n'est pas un esclave : il participe à la réalisation de sa propre liberté par le bien commun."
		},

		// Question n°13
{
	question: "Question n°13 : Quelle est la différence entre esclave et sujet selon Spinoza ?",
	answers: [
			"Le sujet obéit, l'esclave non",
			"Le sujet obéit pour le bien commun, l'esclave pour le bien du maître",
			"Il n'y a pas de différence"
			],
			correct: 2,
			explanation: "Pour Spinoza, la différence entre esclave et sujet réside dans la finalité de l'obéissance. L'esclave obéit pour l'utilité de son maître, il est « inutile à lui-même ». Le sujet obéit à des lois dont la fin est « le salut de tout le peuple », y compris lui-même. Le sujet n'est donc pas un esclave car son obéissance sert son propre intérêt bien compris. Cette distinction est fondamentale pour la théorie politique spinoziste : la liberté politique consiste à obéir à des lois rationnelles orientées vers le bien commun."
		},

		// Question n°14
{
	question: "Question n°14 : Quelle est la « loi suprême » d'un Etat selon Spinoza ?",
	answers: [
			"La volonté du souverain",
			"Le salut de tout le peuple",
			"La conservation du pouvoir"
			],
			correct: 2,
			explanation: "Spinoza affirme que dans un Etat libre, « la loi suprême est le salut de tout le peuple, non de celui qui commande ». Le salut du peuple (salus populi) est la fin ultime de toute organisation politique légitime. Cette conception fait de l'Etat un instrument au service du bien commun et non un instrument de domination. Elle fonde la légitimité politique sur sa finalité : un Etat qui ne sert pas le peuple est un Etat tyrannique, et ses sujets sont en réalité des esclaves."
		},

		// Question n°15
{
	question: "Question n°15 : Comment Spinoza définit-il l'Etat le plus libre ?",
	answers: [
			"Celui où chacun fait ce qu'il veut",
			"Celui dont les lois sont fondées en droite Raison",
			"Celui qui n'a pas de lois"
			],
			correct: 2,
			explanation: "Spinoza affirme que « cet Etat est le plus libre, dont les lois sont fondées en droite Raison ». La liberté de l'Etat ne se mesure pas à l'absence de lois mais à la rationalité de ses lois. Un Etat libre est un Etat dont les lois sont conformes à la Raison et orientées vers le bien commun. Cette conception de la liberté politique est profondément rationnelle : être libre, c'est vivre selon la Raison, et cela vaut pour l'individu comme pour l'Etat."
		},

		// Question n°16
{
	question: "Question n°16 : Que peut faire chacun dans l'Etat le plus libre selon Spinoza ?",
	answers: [
			"Faire tout ce qu'il veut",
			"Être libre dès qu'il le veut",
			"Échapper aux lois"
			],
			correct: 2,
			explanation: "Spinoza affirme que dans l'Etat le plus libre, « chacun, dès qu'il le veut, peut être libre ». Cette liberté n'est pas donnée automatiquement : elle est une possibilité offerte à chacun. L'Etat libre crée les conditions permettant à chacun de vivre sous la conduite de la Raison. Mais c'est à l'individu de vouloir cette liberté et de s'y efforcer. La liberté est donc à la fois une condition politique et une conquête personnelle."
		},

		// Question n°17
{
	question: "Question n°17 : Que signifie « vivre sous la conduite de la Raison » ?",
	answers: [
			"Obéir aveuglément aux lois",
			"Agir selon la compréhension rationnelle de ce qui est utile",
			"Suivre ses instincts"
			],
			correct: 2,
			explanation: "« Vivre sous la conduite de la Raison » signifie agir selon la compréhension rationnelle de ce qui est véritablement utile. Pour Spinoza, la Raison permet de connaître ce qui contribue à notre conservation et à notre perfectionnement. Vivre sous la conduite de la Raison, c'est donc se libérer des passions aveugles qui nous rendent esclaves, et agir en connaissance de cause. C'est la définition même de la liberté spinoziste."
		},

		// Question n°18
{
	question: "Question n°18 : Quelle est la conception spinoziste de la liberté ?",
	answers: [
			"La liberté est l'absence de contrainte",
			"La liberté est la soumission consentie à la Raison",
			"La liberté est la satisfaction des désirs"
			],
			correct: 2,
			explanation: "La conception spinoziste de la liberté est celle d'une soumission consentie à la Raison. Contrairement à la conception commune qui identifie la liberté à l'absence de contrainte et à la satisfaction des désirs, Spinoza affirme que la vraie liberté consiste à vivre sous la conduite de la Raison. Cette conception est paradoxale en apparence : être libre, c'est obéir à la Raison. Mais cette obéissance est libératrice car elle nous affranchit de l'esclavage des passions."
		},

		// Question n°19
{
	question: "Question n°19 : Pourquoi être captif de son plaisir est-il le pire esclavage ?",
	answers: [
			"Parce que le plaisir est immoral",
			"Parce que cela nous rend incapables de voir et faire ce qui nous est vraiment utile",
			"Parce que le plaisir est éphémère"
			],
			correct: 2,
			explanation: "Être captif de son plaisir est le pire esclavage parce que cela nous rend « incapable[s] de rien voir ni faire qui nous soit vraiment utile ». L'esclavage des passions est le plus grave car il nous prive de la connaissance de notre véritable intérêt et de la capacité de l'atteindre. Contrairement à l'esclavage politique, qui peut être surmonté, l'esclavage des passions est intérieur et nous aveugle sur nous-mêmes. C'est pourquoi la libération des passions est la première condition de toute liberté véritable."
		},

		// Question n°20
{
	question: "Question n°20 : Quel est le rapport entre liberté et Raison chez Spinoza ?",
	answers: [
			"La liberté est opposée à la Raison",
			"La liberté consiste à vivre sous la conduite de la Raison",
			"La Raison limite la liberté"
			],
			correct: 2,
			explanation: "Chez Spinoza, la liberté consiste à vivre sous la conduite de la Raison. Loin d'être opposées, liberté et Raison sont inséparables : on ne peut être libre qu'en suivant la Raison, et la Raison est ce qui nous libère des passions. Cette conception rationaliste de la liberté s'oppose à la conception commune qui voit dans la Raison une contrainte. Pour Spinoza, la Raison n'est pas une limitation mais une libération : elle nous permet de comprendre la nécessité et de nous y conformer volontairement."
		},

		// Question n°21
{
	question: "Question n°21 : Comment Spinoza conçoit-il la relation entre l'individu et l'Etat ?",
	answers: [
			"L'Etat est un mal nécessaire",
			"L'Etat libre est le moyen de la liberté individuelle",
			"L'Etat s'oppose à la liberté individuelle"
			],
			correct: 2,
			explanation: "Spinoza conçoit la relation entre l'individu et l'Etat comme une relation positive : l'Etat libre est le moyen de la liberté individuelle. Dans un Etat dont les lois sont fondées en droite Raison, chacun peut vivre sous la conduite de la Raison et donc être libre. Loin de s'opposer à la liberté individuelle, l'Etat rationnel la rend possible. Cette conception optimiste de la politique est caractéristique de Spinoza : la vie en société est un moyen de perfectionnement et non une limitation de la liberté."
		},

		// Question n°22
{
	question: "Question n°22 : Que signifie l'expression « de son entier consentement » ?",
	answers: [
			"Sous la contrainte",
			"Par un acte volontaire et réfléchi de l'esprit",
			"Par habitude"
			],
			correct: 2,
			explanation: "L'expression « de son entier consentement » signifie par un acte volontaire et réfléchi de l'esprit. Pour Spinoza, la liberté implique l'adhésion consciente de l'esprit à la Raison. On n'est pas libre par hasard ou par contrainte : on le devient par un effort de connaissance et de compréhension. L'entier consentement est le fruit de la connaissance adéquate, qui nous fait comprendre que vivre selon la Raison est ce qui nous est véritablement utile. C'est un consentement éclairé, non un simple acquiescement."
		},

		// Question n°23
{
	question: "Question n°23 : Quelle est la différence entre bon plaisir et Raison dans le texte ?",
	answers: [
			"Ils sont identiques",
			"Le bon plaisir est la satisfaction immédiate des désirs, la Raison est la connaissance de ce qui est véritablement utile",
			"Le bon plaisir est supérieur à la Raison"
			],
			correct: 2,
			explanation: "Dans le texte, le bon plaisir désigne la satisfaction immédiate des désirs, sans réflexion ni considération des conséquences. La Raison, au contraire, est la faculté de connaître ce qui est véritablement utile à notre conservation et à notre perfectionnement. Suivre son bon plaisir conduit à l'esclavage des passions ; suivre la Raison conduit à la liberté. Cette opposition entre bon plaisir et Raison structure toute l'argumentation de Spinoza."
		},

		// Question n°24
{
	question: "Question n°24 : Pourquoi l'action par commandement n'est-elle pas immédiatement un esclavage ?",
	answers: [
			"Parce que le commandement est toujours juste",
			"Parce que tout dépend de la fin de l'action",
			"Parce que l'obéissance est naturelle"
			],
			correct: 2,
			explanation: "L'action par commandement n'est pas immédiatement un esclavage parce que tout dépend de la fin de l'action. Si la fin est l'utilité de l'agent, l'obéissance est compatible avec la liberté. Si la fin est l'utilité de celui qui commande, alors elle est esclavage. Spinoza refuse donc de juger l'obéissance en elle-même : c'est la finalité qui détermine sa nature. Cette analyse nuancée permet de distinguer l'obéissance politique légitime (au service du bien commun) de la servitude (au service d'un maître)."
		},

		// Question n°25
{
	question: "Question n°25 : Quel est le critère de la liberté politique selon Spinoza ?",
	answers: [
			"L'absence de lois",
			"La rationalité des lois et leur orientation vers le bien commun",
			"La participation directe du peuple"
			],
			correct: 2,
			explanation: "Le critère de la liberté politique selon Spinoza est la rationalité des lois et leur orientation vers le bien commun. Un Etat est libre quand ses lois sont « fondées en droite Raison » et que « la loi suprême est le salut de tout le peuple ». Ce critère est à la fois rationnel (les lois doivent être conformes à la Raison) et finaliste (elles doivent viser le bien commun). Un Etat tyrannique, dont les lois servent l'intérêt du souverain, n'est pas libre même si les sujets obéissent."
		},

		// Question n°26
{
	question: "Question n°26 : Que signifie l'expression « la loi suprême » ?",
	answers: [
			"La loi la plus ancienne",
			"La finalité ultime qui doit guider toute législation",
			"La loi du plus fort"
			],
			correct: 2,
			explanation: "L'expression « la loi suprême » désigne la finalité ultime qui doit guider toute législation. Pour Spinoza, cette loi suprême est le salut du peuple. Toute loi particulière doit être jugée à l'aune de cette fin ultime. Si une loi ne sert pas le salut du peuple, elle est contraire à la loi suprême et perd sa légitimité. Cette conception téléologique du droit politique est caractéristique de Spinoza : la politique est ordonnée au bien commun, non au maintien du pouvoir."
		},

		// Question n°27
{
	question: "Question n°27 : Comment Spinoza distingue-t-il l'esclave du sujet ?",
	answers: [
			"Par la nature du commandement",
			"Par la finalité de l'obéissance",
			"Par le statut social"
			],
			correct: 2,
			explanation: "Spinoza distingue l'esclave du sujet par la finalité de l'obéissance. L'esclave obéit pour l'utilité de son maître ; le sujet obéit à des lois dont la fin est le salut de tout le peuple. Cette distinction est essentielle : elle montre que l'obéissance n'est pas en soi servile. Ce qui compte, c'est la destination de l'action. Le sujet d'un Etat rationnel n'est pas un esclave car il obéit à des lois qui servent son propre intérêt bien compris. Cette conception réhabilite l'obéissance politique légitime."
		},

		// Question n°28
{
	question: "Question n°28 : Quel est le rapport entre esclavage et passions chez Spinoza ?",
	answers: [
			"Les passions libèrent",
			"Les passions asservissent",
			"Les passions sont neutres"
			],
			correct: 2,
			explanation: "Chez Spinoza, les passions asservissent : « être captif de son plaisir... c'est le pire esclavage ». Les passions sont des affections qui nous déterminent sans que nous en soyons la cause adéquate. Elles nous font agir sans comprendre, nous rendant dépendants de causes extérieures. La libération consiste donc à comprendre les passions pour cesser d'en être l'esclave. Cette conception de l'esclavage des passions est développée dans l'Éthique, notamment dans les parties IV et V."
		},

		// Question n°29
{
	question: "Question n°29 : Que signifie « vivre de son entier consentement sous la conduite de la Raison » ?",
	answers: [
			"Obéir aveuglément",
			"Vivre librement en suivant la Raison volontairement",
			"Suivre ses instincts"
			],
			correct: 2,
			explanation: "« Vivre de son entier consentement sous la conduite de la Raison » signifie vivre librement en suivant la Raison volontairement. Cette expression réunit les deux dimensions de la liberté spinoziste : le consentement (dimension volontaire) et la Raison (dimension rationnelle). L'homme libre n'est pas celui qui fait tout ce qu'il veut, mais celui qui veut ce que la Raison lui prescrit. Cette union du désir et de la raison est la marque de la liberté véritable."
		},

		// Question n°30
{
	question: "Question n°30 : Pourquoi l'Etat le plus libre est-il celui dont les lois sont fondées en Raison ?",
	answers: [
			"Parce que la Raison est contraignante",
			"Parce que ces lois permettent à chacun de vivre selon la Raison et donc d'être libre",
			"Parce que ces lois sont plus faciles à obéir"
			],
			correct: 2,
			explanation: "L'Etat le plus libre est celui dont les lois sont fondées en Raison parce que ces lois permettent à chacun de vivre selon la Raison et donc d'être libre. Dans un tel Etat, l'obéissance aux lois n'est pas une contrainte mais une aide : les lois rationnelles créent les conditions de la liberté individuelle. La rationalité des lois les rend conformes à la nature humaine et donc libératrices. C'est pourquoi Spinoza peut affirmer que dans l'Etat le plus libre, chacun peut être libre dès qu'il le veut."
		},

		// Question n°31
{
	question: "Question n°31 : Quelle est la différence entre l'esclave et le sujet dans la terminologie spinoziste ?",
	answers: [
			"L'esclave est soumis, le sujet est libre",
			"L'esclave est inutile à lui-même, le sujet bénéficie du bien commun",
			"Il n'y a pas de différence"
			],
			correct: 2,
			explanation: "Dans la terminologie spinoziste, l'esclave est « inutile à lui-même » : son action sert l'utilité de son maître, non la sienne. Le sujet, au contraire, obéit à des lois dont la fin est le salut de tout le peuple, y compris lui-même. Le sujet bénéficie donc du bien commun que les lois visent à réaliser. Cette distinction montre que l'esclavage et la sujétion politique sont de nature différente : l'esclavage est servitude, la sujétion politique légitime est participation au bien commun."
		},

		// Question n°32
{
	question: "Question n°32 : Comment Spinoza définit-il la liberté dans ce texte ?",
	answers: [
			"Comme absence de contrainte",
			"Comme vie sous la conduite de la Raison par entier consentement",
			"Comme satisfaction des désirs"
			],
			correct: 2,
			explanation: "Spinoza définit la liberté comme vie sous la conduite de la Raison par entier consentement. Cette définition combine trois éléments : la Raison (le contenu de la liberté), le consentement (l'adhésion volontaire) et la vie (l'activité concrète). La liberté n'est pas un état passif mais une activité : vivre selon la Raison. Elle n'est pas non plus une donnée naturelle mais une conquête : elle requiert un effort de connaissance et de compréhension. Cette définition est au cœur de l'éthique spinoziste."
		},

		// Question n°33
{
	question: "Question n°33 : Quel est le rôle de la Raison dans la liberté politique selon Spinoza ?",
	answers: [
			"La Raison est un obstacle à la liberté",
			"La Raison fonde la légitimité des lois et permet la liberté",
			"La Raison est réservée aux philosophes"
			],
			correct: 2,
			explanation: "Dans la liberté politique selon Spinoza, la Raison fonde la légitimité des lois et permet la liberté. Les lois d'un Etat libre sont « fondées en droite Raison » : c'est leur rationalité qui les rend légitimes et libératrices. Une loi rationnelle est une loi qui sert le bien commun et qui est conforme à la nature raisonnable de l'homme. En obéissant à de telles lois, l'homme ne fait qu'obéir à sa propre raison. C'est pourquoi la rationalité des lois est la condition de la liberté politique."
		},

		// Question n°34
{
	question: "Question n°34 : Que signifie l'expression « utile à lui-même » ?",
	answers: [
			"Qui est égoïste",
			"Qui agit pour sa propre conservation et son perfectionnement",
			"Qui est égoïste et méchant"
			],
			correct: 2,
			explanation: "L'expression « utile à lui-même » signifie qui agit pour sa propre conservation et son perfectionnement. Chez Spinoza, l'utilité n'est pas une notion égoïste ou moralement suspecte : elle désigne ce qui contribue à la puissance d'agir et à la perfection de l'être. L'homme utile à lui-même est celui qui cherche ce qui le conserve et l'augmente. L'esclave, au contraire, est « inutile à lui-même » car son action ne contribue pas à son propre perfectionnement mais à celui de son maître."
		},

		// Question n°35
{
	question: "Question n°35 : Comment Spinoza conçoit-il l'obéissance dans un Etat libre ?",
	answers: [
			"Comme une contrainte",
			"Comme une participation volontaire au bien commun",
			"Comme une soumission aveugle"
			],
			correct: 2,
			explanation: "Dans un Etat libre, Spinoza conçoit l'obéissance comme une participation volontaire au bien commun. Le sujet qui obéit à des lois rationnelles ne subit pas une contrainte : il participe à la réalisation d'une fin qui le concerne lui-même, le salut du peuple. Cette obéissance est donc compatible avec la liberté, voire constitutive de la liberté. Le sujet d'un Etat libre n'est pas un esclave : il est un citoyen qui, en obéissant aux lois, obéit à sa propre raison et réalise sa propre liberté."
		},

		// Question n°36
{
	question: "Question n°36 : Quelle est la fin de l'action dans un Etat libre selon Spinoza ?",
	answers: [
			"L'utilité du souverain",
			"Le salut de tout le peuple",
			"La gloire de l'Etat"
			],
			correct: 2,
			explanation: "Dans un Etat libre selon Spinoza, la fin de l'action est le salut de tout le peuple. Cette fin est « la loi suprême » à laquelle toute législation doit être ordonnée. Le salut du peuple comprend la paix, la sécurité, la prospérité et les conditions permettant à chacun de vivre selon la Raison. C'est cette finalité qui distingue l'Etat libre de l'Etat tyrannique : dans ce dernier, la fin de l'action est l'utilité du souverain, non celle du peuple. La légitimité politique se mesure donc à sa finalité."
		},

		// Question n°37
{
	question: "Question n°37 : Pourquoi Spinoza refuse-t-il d'assimiler obéissance et esclavage ?",
	answers: [
			"Parce que l'obéissance est toujours libre",
			"Parce que tout dépend de la fin de l'obéissance",
			"Parce que l'esclavage n'existe pas"
			],
			correct: 2,
			explanation: "Spinoza refuse d'assimiler obéissance et esclavage parce que tout dépend de la fin de l'obéissance. Si l'obéissance sert l'utilité de l'agent, elle est compatible avec la liberté. Si elle sert l'utilité d'un maître, elle est esclavage. Cette distinction permet de penser une obéissance politique légitime, qui n'est pas servitude mais participation au bien commun. Spinoza réhabilite ainsi l'obéissance rationnelle comme voie de la liberté, contre la conception commune qui voit dans toute obéissance une perte de liberté."
		},

		// Question n°38
{
	question: "Question n°38 : Comment Spinoza caractérise-t-il l'homme libre ?",
	answers: [
			"Comme celui qui fait tout ce qu'il veut",
			"Comme celui qui vit sous la conduite de la Raison",
			"Comme celui qui n'obéit à personne"
			],
			correct: 2,
			explanation: "Spinoza caractérise l'homme libre comme celui qui vit sous la conduite de la Raison. Cette caractérisation est développée dans l'Éthique, notamment dans la partie IV consacrée à la servitude humaine et à la liberté. L'homme libre n'est pas celui qui satisfait tous ses désirs, mais celui qui comprend la nécessité et agit selon la Raison. Il est libre parce qu'il n'est pas déterminé par des causes extérieures mais par sa propre compréhension de ce qui est utile."
		},

		// Question n°39
{
	question: "Question n°39 : Quel est le rapport entre liberté et connaissance chez Spinoza ?",
	answers: [
			"La connaissance limite la liberté",
			"La connaissance libère des passions",
			"La connaissance est indifférente à la liberté"
			],
			correct: 2,
			explanation: "Chez Spinoza, la connaissance libère des passions. C'est par la connaissance adéquate que nous comprenons les causes de nos affects et cessons d'en être les esclaves. La connaissance de la nécessité nous libère de l'illusion du libre arbitre et nous permet d'agir selon la Raison. Cette conception intellectualiste de la liberté est caractéristique du rationalisme spinoziste : la libération est un processus de connaissance, et la liberté est le fruit de la compréhension."
		},

		// Question n°40
{
	question: "Question n°40 : Pourquoi Spinoza affirme-t-il que l'Etat le plus libre est celui dont les lois sont fondées en Raison ?",
	answers: [
			"Parce que la Raison est universelle",
			"Parce que ces lois permettent à chacun de vivre selon la Raison et donc d'être libre",
			"Parce que la Raison est plus efficace que la force"
			],
			correct: 2,
			explanation: "Spinoza affirme que l'Etat le plus libre est celui dont les lois sont fondées en Raison parce que ces lois permettent à chacun de vivre selon la Raison et donc d'être libre. Les lois rationnelles ne sont pas des contraintes arbitraires : elles sont conformes à la nature humaine et visent le bien commun. En les observant, l'homme ne fait qu'obéir à sa propre raison. C'est pourquoi un Etat rationnel est un Etat libre : il crée les conditions dans lesquelles chacun peut réaliser sa liberté en vivant selon la Raison."
		},

		// Question n°41
{
	question: "Question n°41 : Quelle est la différence entre l'esclave et le sujet selon Spinoza ?",
	answers: [
			"L'esclave est soumis à un maître, le sujet à la loi",
			"L'esclave est inutile à lui-même, le sujet est utile à lui-même par le bien commun",
			"Il n'y a pas de différence"
			],
			correct: 2,
			explanation: "La différence entre l'esclave et le sujet réside dans leur rapport à l'utilité. L'esclave est « inutile à lui-même » : son action sert l'utilité de son maître, non la sienne. Le sujet, au contraire, est utile à lui-même car il obéit à des lois dont la fin est le salut de tout le peuple, y compris lui-même. Le sujet bénéficie du bien commun que les lois visent à réaliser. Cette distinction fait de la sujétion politique légitime une forme de participation au bien commun, non une servitude."
		},

		// Question n°42
{
	question: "Question n°42 : Comment Spinoza définit-il le « pire esclavage » ?",
	answers: [
			"Comme l'obéissance à un tyran",
			"Comme la captivité du plaisir qui nous rend incapables de voir ce qui nous est utile",
			"Comme l'absence de lois"
			],
			correct: 2,
			explanation: "Spinoza définit le « pire esclavage » comme la captivité du plaisir qui nous rend incapables de voir ce qui nous est utile. Cette définition est paradoxale car elle renverse l'opinion commune : l'esclavage véritable n'est pas d'abord politique mais psychologique et moral. C'est l'asservissement aux passions qui est le pire des esclavages, car il nous prive de la connaissance et de la capacité d'agir pour notre bien. Cette conception fait de la libération intérieure la première des libertés."
		},

		// Question n°43
{
	question: "Question n°43 : Quel est le rôle de la Raison dans la définition spinoziste de la liberté ?",
	answers: [
			"La Raison est un instrument de domination",
			"La Raison est le principe de la liberté",
			"La Raison est indifférente à la liberté"
			],
			correct: 2,
			explanation: "Dans la définition spinoziste de la liberté, la Raison est le principe de la liberté. Être libre, c'est vivre sous la conduite de la Raison. La Raison n'est pas une contrainte mais une libération : elle nous affranchit des passions qui nous asservissent. En comprenant la nécessité, nous cessons d'être déterminés par des causes extérieures et nous agissons selon notre propre nature. La Raison est donc le principe de l'autonomie et de la liberté véritable. Cette conception rationaliste de la liberté est au cœur de la philosophie spinoziste."
		},

		// Question n°44
{
	question: "Question n°44 : Pourquoi l'obéissance dans un Etat libre n'est-elle pas un esclavage ?",
	answers: [
			"Parce que l'obéissance est toujours libre",
			"Parce que la fin de l'obéissance est le salut du peuple, y compris l'obéissant",
			"Parce que l'Etat est tout-puissant"
			],
			correct: 2,
			explanation: "L'obéissance dans un Etat libre n'est pas un esclavage parce que la fin de l'obéissance est le salut du peuple, y compris l'obéissant. Le sujet qui obéit à des lois rationnelles participe à la réalisation d'une fin qui le concerne lui-même. Son obéissance n'est pas au service d'un maître mais au service du bien commun. Il est donc « utile à lui-même » par son obéissance. Cette conception fait de la citoyenneté dans un Etat rationnel une forme de liberté, non de servitude."
		},

		// Question n°45
{
	question: "Question n°45 : Comment Spinoza conçoit-il la relation entre l'individu et la loi ?",
	answers: [
			"La loi est une contrainte extérieure",
			"La loi rationnelle est l'expression de la Raison commune et le moyen de la liberté",
			"La loi est l'ennemie de la liberté"
			],
			correct: 2,
			explanation: "Spinoza conçoit la relation entre l'individu et la loi comme une relation positive : la loi rationnelle est l'expression de la Raison commune et le moyen de la liberté. Les lois d'un Etat libre sont « fondées en droite Raison » : elles expriment la rationalité commune et visent le bien de tous. En obéissant à de telles lois, l'individu ne fait qu'obéir à sa propre raison. La loi n'est donc pas une contrainte extérieure mais une condition de la liberté. Cette conception réhabilite la loi comme instrument de libération."
		},

		// Question n°46
{
	question: "Question n°46 : Quelle est la signification de l'expression « la liberté n'est qu'à celui qui... vit sous la seule conduite de la Raison » ?",
	answers: [
			"La liberté est réservée à une élite",
			"La liberté consiste à suivre la Raison, non ses désirs",
			"La liberté est impossible"
			],
			correct: 2,
			explanation: "L'expression « la liberté n'est qu'à celui qui... vit sous la seule conduite de la Raison » signifie que la liberté consiste à suivre la Raison, non ses désirs. Cette formule exclusive (« n'est qu'à ») souligne qu'il n'y a pas de liberté en dehors de la Raison. Suivre ses désirs n'est pas être libre mais être esclave de ses passions. La vraie liberté est donc une conquête rationnelle, non une donnée naturelle. Cette conception exigeante de la liberté est caractéristique du rationalisme spinoziste."
		},

		// Question n°47
{
	question: "Question n°47 : Comment Spinoza articule-t-il liberté individuelle et liberté politique ?",
	answers: [
			"Elles sont opposées",
			"La liberté politique est la condition de la liberté individuelle",
			"La liberté individuelle prime sur la liberté politique"
			],
			correct: 2,
			explanation: "Spinoza articule liberté individuelle et liberté politique en faisant de la liberté politique la condition de la liberté individuelle. Un Etat libre, dont les lois sont fondées en Raison, crée les conditions dans lesquelles chacun peut vivre selon la Raison et donc être libre. La liberté individuelle n'est pas menacée par l'Etat rationnel : elle est rendue possible par lui. Cette conception positive de la politique est caractéristique de Spinoza : l'Etat n'est pas un mal nécessaire mais un moyen de perfectionnement et de liberté."
		},

		// Question n°48
{
	question: "Question n°48 : Quel est le sens de l'expression « vivre de son entier consentement » ?",
	answers: [
			"Vivre sous la contrainte",
			"Vivre librement et volontairement selon sa propre raison",
			"Vivre sans règles"
			],
			correct: 2,
			explanation: "L'expression « vivre de son entier consentement » signifie vivre librement et volontairement selon sa propre raison. Cette expression souligne la dimension volontaire de la liberté spinoziste : l'homme libre adhère pleinement à la Raison. Il ne la subit pas comme une contrainte extérieure mais la reconnaît comme sa propre loi. L'entier consentement est le fruit de la connaissance adéquate, qui nous fait comprendre que vivre selon la Raison est ce qui nous est véritablement utile. C'est cette adhésion consciente qui fait la liberté."
		},

		// Question n°49
{
	question: "Question n°49 : Pourquoi Spinoza affirme-t-il que « cela n'est pas absolument vrai » ?",
	answers: [
			"Parce que l'opinion commune est totalement fausse",
			"Parce que l'opinion commune est partiellement vraie mais superficielle",
			"Parce qu'il ne sait pas"
			],
			correct: 2,
			explanation: "Spinoza affirme que « cela n'est pas absolument vrai » parce que l'opinion commune est partiellement vraie mais superficielle. Il est vrai que l'obéissance diminue la liberté et que le bon plaisir semble être une forme de liberté. Mais cette vision est superficielle car elle ne distingue pas les différents types d'obéissance et confond la liberté avec la satisfaction des désirs. Spinoza ne rejette donc pas totalement l'opinion commune : il la dépasse en montrant ses insuffisances et en la corrigeant par une analyse plus profonde."
		},

		// Question n°50
{
	question: "Question n°50 : Quelle est l'importance de ce texte dans l'histoire de la philosophie politique ?",
	answers: [
			"C'est un texte mineur sans influence",
			"C'est un texte majeur qui fonde une conception rationnelle de la liberté politique",
			"C'est un texte purement théologique"
			],
			correct: 2,
			explanation: "Ce texte du Traité théologico-politique est majeur car il fonde une conception rationnelle de la liberté politique. Spinoza y articule liberté individuelle et liberté politique en montrant que la loi rationnelle est le moyen de la liberté. Cette conception a influencé la philosophie politique moderne, notamment les théories du contrat social et de l'Etat de droit. Elle a aussi contribué à la défense de la liberté de penser et d'expression. Ce texte est l'un des fondements de la tradition libérale et républicaine en philosophie politique."
		}
];