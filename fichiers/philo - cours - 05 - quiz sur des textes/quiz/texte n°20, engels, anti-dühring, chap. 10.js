// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte d'ENGELS";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
		texte: `« [1a] La liberté n'est pas dans une indépendance rêvée à l'égard des lois de la nature, [1b] mais dans la connaissance de ces lois et dans la possibilité donnée par là même [= ainsi] de les mettre en œuvre méthodiquement pour des fins [= des buts] déterminées [...]. [2] Cela est vrai aussi bien des lois de la nature extérieure que de celles qui régissent l'existence physique et psychique de l'homme lui-même [...], — deux classes de lois que nous pouvons séparer tout au plus dans la représentation, mais non dans la réalité. [3] La liberté de la volonté ne signifie donc pas autre chose que la faculté de décider en connaissance de cause. [4] Donc, plus le jugement d'un homme est libre sur une question déterminée, plus grande est la nécessité qui détermine la teneur de ce jugement ; tandis que l'incertitude reposant sur l'ignorance, — qui choisit en apparence arbitrairement entre de nombreuses possibilités de décisions diverses et contradictoires —, ne manifeste précisément par là que sa non-liberté, sa soumission à l'objet qu'elle devrait justement se soumettre. [5] La liberté consiste par conséquent dans l'empire sur nous-mêmes et sur la nature extérieure, fondée sur la connaissance des nécessités naturelles ; ainsi, elle est nécessairement un produit du développement historique. »`,
		source: "Friedrich ENGELS, Anti-Dühring, chap. X, tr. fr. E. Borrigelli, éd. Sociales, p. 143"
};

// ============================================
// QUESTIONS DU QUIZ (50 questions)
// ============================================

const questions = [
	// Question n°1
	{
		question: "Question n°1 : Selon Engels, où ne réside pas la liberté ?",
		answers: [
			"Dans la connaissance des lois de la nature",
			"Dans une indépendance rêvée à l'égard des lois de la nature",
			"Dans la mise en œuvre méthodique des lois"
			],
			correct: 2,
			explanation: "Engels affirme d'emblée : « La liberté n'est pas dans une indépendance rêvée à l'égard des lois de la nature. » Cette négation initiale vise à écarter une conception illusoire de la liberté, celle qui consisterait à s'affranchir des lois naturelles. Pour Engels, une telle indépendance est « rêvée », c'est-à-dire imaginaire et impossible. Nier les lois de la nature ne rend pas libre ; au contraire, cela conduit à s'y soumettre aveuglément. La liberté véritable commence par la reconnaissance de ces lois."
		},

		// Question n°2
	{
		question: "Question n°2 : Où réside la liberté selon Engels ?",
		answers: [
			"Dans l'ignorance des lois",
			"Dans la connaissance des lois de la nature et leur mise en œuvre méthodique",
			"Dans la soumission aveugle aux lois"
			],
			correct: 2,
			explanation: "Engels définit la liberté comme résidant « dans la connaissance de ces lois et dans la possibilité donnée par là même de les mettre en œuvre méthodiquement pour des fins déterminées ». La liberté est donc double : elle est d'abord connaissance (compréhension des lois naturelles) et ensuite action (mise en œuvre méthodique de ces lois pour atteindre des buts). Cette conception est dialectique : la liberté ne s'oppose pas à la nécessité, elle naît de sa compréhension et de son utilisation réfléchie."
		},

		// Question n°3
{
	question: "Question n°3 : Que signifie l'expression « mettre en œuvre méthodiquement » ?",
	answers: [
			"Agir au hasard",
			"Utiliser les lois de manière organisée et réfléchie",
			"Contourner les lois"
			],
		correct: 2,
		explanation: "L'expression « mettre en œuvre méthodiquement » signifie utiliser les lois de manière organisée et réfléchie. La méthode implique un ordre, une progression rationnelle, une finalité consciente. Engels souligne par là que la liberté n'est pas une simple contemplation des lois mais une action efficace qui les utilise pour atteindre des buts. Cette dimension pratique et technique de la liberté est caractéristique du marxisme : la liberté est une capacité d'agir sur le monde, non une simple attitude mentale."
		},

		// Question n°4
{
	question: "Question n°4 : Pour quelles fins pouvons-nous mettre en œuvre les lois de la nature ?",
	answers: [
			"Pour des fins déterminées",
			"Pour des fins indéterminées",
			"Pour aucune fin"
			],
		correct: 1,
		explanation: "Engels précise que les lois de la nature peuvent être mises en œuvre « pour des fins déterminées ». Ces fins sont choisies par l'homme en fonction de ses besoins et de ses projets. La liberté consiste précisément à pouvoir déterminer ces fins et à utiliser les lois naturelles pour les atteindre. Cette conception téléologique de la liberté implique que l'homme n'est pas passif face à la nature : il est un agent qui se propose des buts et mobilise les lois naturelles pour les réaliser."
		},

		// Question n°5
{
	question: "Question n°5 : À quelles lois s'applique cette conception de la liberté selon Engels ?",
	answers: [
			"Aux seules lois de la nature extérieure",
			"Aux lois de la nature extérieure et aux lois de l'existence physique et psychique de l'homme",
			"Aux seules lois psychiques"
			],
		correct: 2,
		explanation: "Engels affirme que cette conception de la liberté s'applique « aussi bien des lois de la nature extérieure que de celles qui régissent l'existence physique et psychique de l'homme lui-même ». La liberté concerne donc à la fois le monde extérieur (nature) et le monde intérieur (l'homme). Il n'y a pas de liberté qui serait réservée à l'esprit : la liberté s'applique à toutes les dimensions de l'existence, y compris la vie corporelle et psychique. Cette extension est caractéristique du matérialisme d'Engels."
		},

		// Question n°6
{
	question: "Question n°6 : Comment Engels qualifie-t-il les deux classes de lois ?",
	answers: [
			"Comme totalement séparées",
			"Comme séparables dans la représentation mais non dans la réalité",
			"Comme identiques"
			],
		correct: 2,
		explanation: "Engels qualifie les deux classes de lois (nature extérieure et existence humaine) comme « deux classes de lois que nous pouvons séparer tout au plus dans la représentation, mais non dans la réalité ». Cette affirmation est essentielle : elle signifie que la distinction entre lois naturelles et lois humaines est une abstraction utile mais qui ne correspond pas à une séparation réelle. L'homme fait partie de la nature ; ses lois physiques et psychiques sont des lois naturelles. Cette conception moniste et matérialiste s'oppose aux dualismes qui séparent radicalement l'esprit et la nature."
		},

		// Question n°7
{
	question: "Question n°7 : Que signifie la liberté de la volonté selon Engels ?",
	answers: [
			"La faculté de choisir arbitrairement",
			"La faculté de décider en connaissance de cause",
			"L'absence de toute détermination"
			],
		correct: 2,
		explanation: "Engels affirme : « La liberté de la volonté ne signifie donc pas autre chose que la faculté de décider en connaissance de cause. » Cette définition de la liberté de la volonté est rationaliste : être libre, ce n'est pas choisir arbitrairement, mais décider en fonction d'une connaissance adéquate. La liberté de la volonté n'est donc pas l'absence de détermination mais la détermination par la connaissance. Plus la connaissance est adéquate, plus la décision est libre. Cette conception s'oppose au libre arbitre indéterminé de la tradition métaphysique."
		},

		// Question n°8
{
	question: "Question n°8 : Que signifie « décider en connaissance de cause » ?",
	answers: [
			"Décider sans réfléchir",
			"Décider en comprenant les raisons et les conséquences",
			"Décider par habitude"
			],
		correct: 2,
		explanation: "« Décider en connaissance de cause » signifie décider en comprenant les raisons et les conséquences de sa décision. Cette expression implique une connaissance adéquate de la situation, des lois qui la régissent et des effets de l'action envisagée. La décision libre est donc une décision éclairée, fondée sur la raison et non sur l'ignorance ou l'arbitraire. Plus la connaissance est complète, plus la décision est libre. La liberté est ainsi proportionnelle à la connaissance : c'est une thèse rationaliste caractéristique d'Engels."
		},

		// Question n°9
{
	question: "Question n°9 : Quel est le rapport entre liberté et nécessité selon Engels ?",
	answers: [
			"Elles sont opposées",
			"La liberté naît de la connaissance de la nécessité",
			"Elles sont identiques"
			],
		correct: 2,
		explanation: "Selon Engels, la liberté naît de la connaissance de la nécessité. Loin d'être opposées, liberté et nécessité sont dialectiquement liées : c'est en comprenant les lois nécessaires de la nature que l'homme peut les utiliser pour ses propres fins et devenir libre. Cette conception est au cœur du matérialisme dialectique : la liberté n'est pas l'absence de détermination mais la maîtrise des déterminations par la connaissance. Plus l'homme connaît les nécessités qui le déterminent, plus il peut agir librement."
		},

		// Question n°10
{
	question: "Question n°10 : Que se passe-t-il quand le jugement d'un homme est libre selon Engels ?",
	answers: [
			"Il n'y a plus de nécessité",
			"Plus grande est la nécessité qui détermine la teneur de ce jugement",
			"Le jugement devient arbitraire"
			],
		correct: 2,
		explanation: "Engels affirme : « plus le jugement d'un homme est libre sur une question déterminée, plus grande est la nécessité qui détermine la teneur de ce jugement ». Cette formule paradoxale exprime la conception dialectique de la liberté : un jugement libre n'est pas un jugement sans détermination, mais un jugement dont la détermination est connue et comprise. Plus le jugement est libre (c'est-à-dire fondé sur la connaissance), plus il est déterminé par la nécessité objective. La liberté n'est donc pas l'absence de nécessité mais la pleine conscience de la nécessité."
		},

		// Question n°11
{
	question: "Question n°11 : Qu'est-ce qui caractérise l'incertitude selon Engels ?",
	answers: [
			"Elle repose sur l'ignorance",
			"Elle repose sur la connaissance",
			"Elle est la marque de la liberté"
			],
		correct: 1,
		explanation: "Engels affirme que l'incertitude « repos[e] sur l'ignorance ». L'incertitude n'est pas la liberté : elle est au contraire la marque de la non-liberté. Celui qui ne sait pas, qui ignore les lois et les conséquences, se croit libre parce qu'il peut choisir arbitrairement entre plusieurs possibilités. Mais cette apparence de liberté n'est qu'une illusion : elle manifeste en réalité la soumission de l'homme à des causes qu'il ne comprend pas. La vraie liberté est certitude fondée sur la connaissance, non incertitude fondée sur l'ignorance."
		},

		// Question n°12
{
	question: "Question n°12 : Que fait l'ignorance en apparence selon Engels ?",
	answers: [
			"Elle choisit arbitrairement entre de nombreuses possibilités",
			"Elle détermine rationnellement la décision",
			"Elle supprime le choix"
			],
		correct: 1,
		explanation: "Engels affirme que l'incertitude reposant sur l'ignorance « choisit en apparence arbitrairement entre de nombreuses possibilités de décisions diverses et contradictoires ». L'ignorance donne l'illusion de la liberté : celui qui ne sait pas peut choisir n'importe quoi, apparemment. Mais cette apparence est trompeuse : ce choix arbitraire n'est pas libre, car il n'est pas fondé sur la connaissance des raisons et des conséquences. L'arbitraire n'est pas la liberté ; il est la marque de la non-liberté, de la soumission à l'objet."
		},

		// Question n°13
{
	question: "Question n°13 : Que manifeste l'incertitude selon Engels ?",
	answers: [
			"La liberté",
			"La non-liberté et la soumission à l'objet",
			"La puissance de l'homme"
			],
		correct: 2,
		explanation: "Engels affirme que l'incertitude « ne manifeste précisément par là que sa non-liberté, sa soumission à l'objet qu'elle devrait justement se soumettre ». L'incertitude est donc la marque de la non-liberté : celui qui est incertain n'est pas maître de la situation, il est soumis à l'objet au lieu de le soumettre. La liberté consiste précisément à soumettre l'objet par la connaissance. Tant que l'homme ne connaît pas les lois, il est dominé par elles ; dès qu'il les connaît, il peut les maîtriser. La connaissance est donc le moyen de la libération."
		},

		// Question n°14
{
	question: "Question n°14 : Que devrait faire l'homme de l'objet selon Engels ?",
	answers: [
			"Le contempler",
			"Le soumettre",
			"L'ignorer"
			],
		correct: 2,
		explanation: "Engels affirme que l'incertitude manifeste « sa soumission à l'objet qu'elle devrait justement se soumettre ». L'homme devrait soumettre l'objet, c'est-à-dire le maîtriser par la connaissance et l'action. La liberté est cette capacité de soumission de l'objet : au lieu d'être dominé par les choses, l'homme les domine par la connaissance des lois qui les régissent. Cette conception prométhéenne de la liberté comme maîtrise de la nature est caractéristique du marxisme et de la modernité technique. Elle implique une transformation active du monde."
		},

		// Question n°15
{
	question: "Question n°15 : Où consiste la liberté selon la formule finale d'Engels ?",
	answers: [
			"Dans l'indépendance absolue",
			"Dans l'empire sur nous-mêmes et sur la nature extérieure",
			"Dans la contemplation passive"
			],
		correct: 2,
		explanation: "Engels conclut : « La liberté consiste par conséquent dans l'empire sur nous-mêmes et sur la nature extérieure, fondée sur la connaissance des nécessités naturelles. » La liberté est donc empire, c'est-à-dire maîtrise, domination. Elle s'exerce sur deux domaines : nous-mêmes (maîtrise de soi, de nos passions, de notre corps) et la nature extérieure (maîtrise des forces naturelles). Cette conception active et prométhéenne de la liberté est fondée sur la connaissance des nécessités naturelles. Elle fait de la liberté un pouvoir, non un état."
		},

		// Question n°16
{
	question: "Question n°16 : Sur quoi est fondé l'empire sur nous-mêmes et sur la nature ?",
	answers: [
			"Sur la force brute",
			"Sur la connaissance des nécessités naturelles",
			"Sur l'ignorance"
			],
		correct: 2,
		explanation: "Engels affirme que l'empire sur nous-mêmes et sur la nature est « fondé sur la connaissance des nécessités naturelles ». La connaissance est donc le fondement de la liberté : sans elle, pas de maîtrise possible. C'est en comprenant les lois nécessaires de la nature que l'homme peut les utiliser pour ses propres fins. Cette conception rationaliste de la liberté est au cœur de la pensée d'Engels : la liberté n'est pas un don mais une conquête de la connaissance. Elle est proportionnelle au savoir."
		},

		// Question n°17
{
	question: "Question n°17 : Comment Engels caractérise-t-il la liberté à la fin du texte ?",
	answers: [
			"Comme un produit du développement historique",
			"Comme une donnée naturelle",
			"Comme une illusion"
			],
		correct: 1,
		explanation: "Engels caractérise la liberté comme « nécessairement un produit du développement historique ». La liberté n'est donc pas une donnée naturelle ou un attribut essentiel de l'homme : elle est le résultat d'un processus historique. Elle se conquiert progressivement au cours de l'histoire par le développement de la connaissance et de la maîtrise technique de la nature. Cette conception historique de la liberté est caractéristique du marxisme : la liberté est le fruit d'un développement social et technique, non une propriété métaphysique de la volonté."
		},

		// Question n°18
{
	question: "Question n°18 : Quelle est la conception de la liberté défendue par Engels ?",
	answers: [
			"Une conception idéaliste",
			"Une conception matérialiste et dialectique",
			"Une conception religieuse"
			],
		correct: 2,
		explanation: "La conception de la liberté défendue par Engels est matérialiste et dialectique. Matérialiste : la liberté est fondée sur la connaissance des lois de la nature, y compris les lois physiques et psychiques de l'homme. Dialectique : la liberté ne s'oppose pas à la nécessité, elle naît de sa connaissance et de sa maîtrise. Cette conception s'oppose aux conceptions idéalistes qui font de la liberté une propriété de l'esprit ou de la volonté indépendante des conditions matérielles. Pour Engels, la liberté est une capacité pratique de transformation du monde."
		},

		// Question n°19
{
	question: "Question n°19 : Que signifie l'expression « indépendance rêvée » ?",
	answers: [
			"Une indépendance réelle",
			"Une indépendance imaginaire et impossible",
			"Une indépendance partielle"
			],
		correct: 2,
		explanation: "L'expression « indépendance rêvée » désigne une indépendance imaginaire et impossible. Engels qualifie de « rêvée » la conception de la liberté comme indépendance à l'égard des lois de la nature, car une telle indépendance n'existe pas. Les lois de la nature sont nécessaires : on ne peut pas s'y soustraire. Croire qu'on peut être libre en les ignorant est une illusion. La liberté véritable ne consiste pas à nier les lois mais à les connaître et à les utiliser. Le rêve d'indépendance absolue est donc une fausse liberté."
		},

		// Question n°20
{
	question: "Question n°20 : Quel est le rapport entre liberté et connaissance chez Engels ?",
	answers: [
			"Elles sont opposées",
			"La liberté est proportionnelle à la connaissance",
			"La connaissance limite la liberté"
			],
		correct: 2,
		explanation: "Chez Engels, la liberté est proportionnelle à la connaissance : plus l'homme connaît les lois de la nature, plus il est libre. Cette conception rationaliste fait de la connaissance le moyen de la libération. L'ignorance, au contraire, est source de servitude : celui qui ne connaît pas les lois est dominé par elles. La liberté n'est donc pas une donnée mais une conquête de la connaissance. Elle progresse avec le développement des sciences et des techniques. Cette thèse est au cœur du marxisme : la libération passe par la science."
		},

		// Question n°21
{
	question: "Question n°21 : Pourquoi Engels parle-t-il de « deux classes de lois » ?",
	answers: [
			"Pour les séparer définitivement",
			"Pour montrer qu'elles sont distinctes dans la pensée mais unies dans la réalité",
			"Pour les opposer"
			],
		correct: 2,
		explanation: "Engels parle de « deux classes de lois » pour montrer qu'elles sont distinctes dans la pensée mais unies dans la réalité. Les lois de la nature extérieure et les lois de l'existence physique et psychique de l'homme sont deux aspects d'une même réalité. La distinction est une commodité de langage, non une séparation ontologique. L'homme fait partie de la nature ; ses lois sont des lois naturelles. Cette conception moniste et matérialiste s'oppose aux dualismes qui séparent radicalement l'esprit et la matière, l'homme et la nature."
		},

		// Question n°22
{
	question: "Question n°22 : Que signifie l'expression « en connaissance de cause » ?",
	answers: [
			"Sans savoir pourquoi",
			"En comprenant les raisons et les effets de son action",
			"Par habitude"
			],
		correct: 2,
		explanation: "L'expression « en connaissance de cause » signifie en comprenant les raisons et les effets de son action. Elle implique une connaissance adéquate de la situation, des lois qui la régissent et des conséquences de la décision. La liberté de la volonté consiste précisément à décider en connaissance de cause : c'est une décision éclairée, fondée sur la raison. Cette conception rationaliste de la liberté s'oppose à l'idée d'un choix arbitraire ou capricieux. Pour Engels, la liberté est inséparable de la connaissance."
		},

		// Question n°23
{
	question: "Question n°23 : Comment Engels définit-il la liberté de la volonté ?",
	answers: [
			"Comme la faculté de choisir arbitrairement",
			"Comme la faculté de décider en connaissance de cause",
			"Comme l'absence de détermination"
			],
		correct: 2,
		explanation: "Engels définit la liberté de la volonté comme « la faculté de décider en connaissance de cause ». Cette définition est rationaliste : la liberté de la volonté n'est pas l'absence de détermination mais la détermination par la connaissance. Elle s'oppose à la conception traditionnelle du libre arbitre comme pouvoir de choisir indifféremment entre plusieurs possibilités. Pour Engels, le choix n'est libre que s'il est éclairé par la connaissance. La liberté de la volonté est donc une liberté éclairée, non une liberté aveugle."
		},

		// Question n°24
{
	question: "Question n°24 : Quel est le paradoxe de la liberté selon Engels ?",
	answers: [
			"La liberté est l'absence de nécessité",
			"Plus le jugement est libre, plus la nécessité le détermine",
			"La liberté est impossible"
			],
		correct: 2,
		explanation: "Le paradoxe de la liberté selon Engels est que « plus le jugement d'un homme est libre sur une question déterminée, plus grande est la nécessité qui détermine la teneur de ce jugement ». Ce paradoxe s'explique par la conception dialectique de la liberté : un jugement libre n'est pas un jugement sans détermination, mais un jugement dont la détermination est connue et comprise. Plus la connaissance est adéquate, plus le jugement est déterminé par la nécessité objective, et plus il est libre. La liberté est donc la conscience de la nécessité."
		},

		// Question n°25
{
	question: "Question n°25 : Pourquoi l'incertitude est-elle une marque de non-liberté ?",
	answers: [
			"Parce qu'elle est confortable",
			"Parce qu'elle repose sur l'ignorance et soumet l'homme à l'objet",
			"Parce qu'elle est rare"
			],
		correct: 2,
		explanation: "L'incertitude est une marque de non-liberté parce qu'elle repose sur l'ignorance et soumet l'homme à l'objet. Celui qui est incertain ne connaît pas les lois qui régissent la situation ; il est donc dominé par des causes qu'il ne comprend pas. Son choix apparemment arbitraire n'est qu'une illusion de liberté : en réalité, il est déterminé par des facteurs qu'il ignore. La vraie liberté est certitude fondée sur la connaissance, maîtrise de l'objet par la science. L'incertitude est donc l'envers de la liberté."
		},

		// Question n°26
{
	question: "Question n°26 : Que signifie « soumission à l'objet » ?",
	answers: [
			"La maîtrise de l'objet",
			"Être dominé par l'objet au lieu de le dominer",
			"L'indifférence à l'objet"
			],
		correct: 2,
		explanation: "L'expression « soumission à l'objet » signifie être dominé par l'objet au lieu de le dominer. Engels affirme que l'incertitude manifeste « sa soumission à l'objet qu'elle devrait justement se soumettre ». L'homme devrait soumettre l'objet, c'est-à-dire le maîtriser par la connaissance. Mais tant qu'il est dans l'incertitude, c'est l'objet qui le soumet. La liberté consiste précisément à inverser ce rapport : passer de la soumission à la maîtrise par la connaissance des lois. C'est le sens de l'empire sur la nature."
		},

		// Question n°27
{
	question: "Question n°27 : Quel est le rôle de la méthode dans la liberté selon Engels ?",
	answers: [
			"La méthode est inutile",
			"La méthode permet de mettre en œuvre les lois pour des fins déterminées",
			"La méthode limite la liberté"
			],
		correct: 2,
		explanation: "Le rôle de la méthode dans la liberté selon Engels est de permettre de mettre en œuvre les lois pour des fins déterminées. La méthode est l'organisation rationnelle de l'action en vue d'un but. Elle implique la connaissance des lois, la définition des fins et la mise en œuvre des moyens appropriés. Sans méthode, la connaissance des lois reste théorique ; avec la méthode, elle devient pratique et libératrice. La méthode est donc le lien entre la connaissance et l'action, entre la théorie et la pratique. C'est par elle que la liberté se réalise."
		},

		// Question n°28
{
	question: "Question n°28 : Comment Engels conçoit-il le rapport entre l'homme et la nature ?",
	answers: [
			"L'homme est séparé de la nature",
			"L'homme fait partie de la nature et peut la maîtriser par la connaissance",
			"L'homme est soumis passivement à la nature"
			],
		correct: 2,
		explanation: "Engels conçoit le rapport entre l'homme et la nature comme un rapport d'appartenance et de maîtrise. L'homme fait partie de la nature : ses lois physiques et psychiques sont des lois naturelles. Mais il peut maîtriser la nature par la connaissance : en comprenant les lois naturelles, il peut les utiliser pour ses propres fins. Cette conception dialectique refuse à la fois la séparation dualiste et la soumission passive. L'homme est un être naturel qui se libère par la connaissance de sa propre nature et de la nature extérieure."
		},

		// Question n°29
{
	question: "Question n°29 : Que signifie l'expression « empire sur nous-mêmes » ?",
	answers: [
			"La domination des autres",
			"La maîtrise de soi, de ses passions et de ses désirs",
			"L'isolement"
			],
		correct: 2,
		explanation: "L'expression « empire sur nous-mêmes » signifie la maîtrise de soi, de ses passions et de ses désirs. Elle désigne la capacité de se gouverner soi-même, de contrôler ses impulsions, de diriger sa vie selon la raison. Cette maîtrise est fondée sur la connaissance des lois qui régissent l'existence physique et psychique de l'homme. En comprenant ses propres déterminations, l'homme peut les maîtriser au lieu de les subir. L'empire sur soi est donc le premier aspect de la liberté, avant l'empire sur la nature extérieure."
		},

		// Question n°30
{
	question: "Question n°30 : Comment Engels définit-il la liberté dans la dernière phrase ?",
	answers: [
			"Comme l'absence de contrainte",
			"Comme l'empire sur nous-mêmes et sur la nature, fondé sur la connaissance",
			"Comme la satisfaction des désirs"
			],
		correct: 2,
		explanation: "Dans la dernière phrase, Engels définit la liberté comme « l'empire sur nous-mêmes et sur la nature extérieure, fondée sur la connaissance des nécessités naturelles ». Cette définition synthétise toute sa conception : la liberté est une maîtrise (empire) qui s'exerce sur deux domaines (soi-même et la nature) et qui est fondée sur la connaissance des nécessités. La liberté n'est donc ni une donnée ni une illusion : c'est une conquête pratique fondée sur la science. Elle est le produit du développement historique de la connaissance et de la technique."
		},

		// Question n°31
{
	question: "Question n°31 : Pourquoi la liberté est-elle un produit du développement historique ?",
	answers: [
			"Parce qu'elle est innée",
			"Parce qu'elle se conquiert progressivement par le développement de la connaissance et de la technique",
			"Parce qu'elle est éternelle"
			],
		correct: 2,
		explanation: "La liberté est un produit du développement historique parce qu'elle se conquiert progressivement par le développement de la connaissance et de la technique. À mesure que l'humanité découvre les lois de la nature et développe des moyens de les utiliser, elle élargit son domaine de liberté. Cette conception historique et progressiste de la liberté est caractéristique du marxisme : la liberté n'est pas une propriété métaphysique de la volonté mais un acquis historique de l'humanité. Elle progresse avec les sciences, les techniques et les transformations sociales."
		},

		// Question n°32
{
	question: "Question n°32 : Quel est le rapport entre liberté et nécessité dans la pensée d'Engels ?",
	answers: [
			"Elles s'excluent mutuellement",
			"La liberté est la connaissance et la maîtrise de la nécessité",
			"La nécessité détruit la liberté"
			],
		correct: 2,
		explanation: "Dans la pensée d'Engels, la liberté est la connaissance et la maîtrise de la nécessité. Loin de s'exclure, liberté et nécessité sont dialectiquement liées : c'est en connaissant les lois nécessaires de la nature que l'homme peut les utiliser pour ses propres fins et devenir libre. La nécessité n'est pas l'ennemie de la liberté ; elle en est la condition. Cette conception s'oppose au libre arbitre indéterminé : la liberté n'est pas l'absence de détermination mais la détermination par la connaissance. C'est une thèse centrale du matérialisme dialectique."
		},

		// Question n°33
{
	question: "Question n°33 : Que signifie l'expression « possibilité donnée par là même » ?",
	answers: [
			"Une possibilité sans rapport avec la connaissance",
			"Une possibilité qui découle de la connaissance des lois",
			"Une possibilité impossible"
			],
		correct: 2,
		explanation: "L'expression « possibilité donnée par là même » signifie une possibilité qui découle de la connaissance des lois. C'est parce que l'homme connaît les lois de la nature qu'il peut les mettre en œuvre pour ses propres fins. La connaissance ouvre la possibilité de l'action libre. Sans connaissance, pas de possibilité d'action efficace. Cette conception instrumentale de la connaissance fait de la science le moyen de la libération. La connaissance n'est pas une fin en soi : elle est un moyen au service de la liberté."
		},

		// Question n°34
{
	question: "Question n°34 : Comment Engels caractérise-t-il l'action libre ?",
	answers: [
			"Comme une action arbitraire",
			"Comme une action méthodique orientée vers des fins déterminées",
			"Comme une action instinctive"
			],
		correct: 2,
		explanation: "Engels caractérise l'action libre comme une action méthodique orientée vers des fins déterminées. L'action libre n'est pas une action arbitraire ou impulsive : elle est réfléchie, organisée, finalisée. Elle suppose la connaissance des lois, la définition de buts et la mise en œuvre de moyens appropriés. Cette conception de l'action libre est rationaliste et technique : elle fait de la liberté une capacité de transformation méthodique du monde. C'est une conception prométhéenne de la liberté, caractéristique de la modernité."
		},

		// Question n°35
{
	question: "Question n°35 : Quel est le rôle de la science dans la conception de la liberté selon Engels ?",
	answers: [
			"La science est un obstacle à la liberté",
			"La science est le moyen de la libération",
			"La science est indifférente à la liberté"
			],
		correct: 2,
		explanation: "Dans la conception de la liberté selon Engels, la science est le moyen de la libération. C'est par la connaissance scientifique des lois de la nature que l'homme peut les maîtriser et devenir libre. La science n'est pas une activité désintéressée : elle est un instrument de pouvoir et de libération. Cette conception utilitariste et prométhéenne de la science est caractéristique du marxisme et de la modernité industrielle. Elle fait de la connaissance scientifique le moteur du progrès et de la liberté humaine."
		},

		// Question n°36
{
	question: "Question n°36 : Pourquoi Engels critique-t-il la conception d'une indépendance à l'égard des lois de la nature ?",
	answers: [
			"Parce qu'elle est trop facile",
			"Parce qu'elle est illusoire et conduit à la servitude",
			"Parce qu'elle est dangereuse"
			],
		correct: 2,
		explanation: "Engels critique la conception d'une indépendance à l'égard des lois de la nature parce qu'elle est illusoire et conduit à la servitude. Croire qu'on peut être libre en ignorant les lois naturelles est une illusion : les lois continuent de s'appliquer, qu'on les connaisse ou non. Celui qui les ignore est dominé par elles. La vraie liberté ne consiste pas à nier les lois mais à les connaître et à les utiliser. La critique de l'indépendance rêvée est donc une critique de l'illusion de liberté, qui masque une servitude réelle."
		},

		// Question n°37
{
	question: "Question n°37 : Comment Engels définit-il le rapport entre liberté et ignorance ?",
	answers: [
			"L'ignorance est la liberté",
			"L'ignorance est la servitude",
			"L'ignorance est neutre"
			],
		correct: 2,
		explanation: "Engels définit le rapport entre liberté et ignorance comme un rapport d'opposition : l'ignorance est la servitude. Celui qui ignore les lois de la nature est dominé par elles ; il ne peut pas les utiliser pour ses propres fins. Son apparente liberté de choix n'est qu'une illusion : il est en réalité soumis à des causes qu'il ne comprend pas. La liberté est donc inséparable de la connaissance : elle est proportionnelle au savoir. Cette conception fait de l'éducation et de la science des moyens essentiels de la libération."
		},

		// Question n°38
{
	question: "Question n°38 : Quel est le sens de l'expression « produit du développement historique » ?",
	answers: [
			"Quelque chose d'inné",
			"Quelque chose qui se conquiert progressivement au cours de l'histoire",
			"Quelque chose d'immuable"
			],
		correct: 2,
		explanation: "L'expression « produit du développement historique » signifie que la liberté se conquiert progressivement au cours de l'histoire. Elle n'est pas donnée à l'homme dès l'origine : elle est le résultat d'un long processus de découverte des lois naturelles et de développement des techniques. Cette conception historique de la liberté est caractéristique du marxisme : la liberté est un acquis social et historique, non une propriété individuelle. Elle dépend du niveau de développement des forces productives et des connaissances scientifiques."
		},

		// Question n°39
{
	question: "Question n°39 : Comment Engels conçoit-il la relation entre l'homme et les lois naturelles ?",
	answers: [
			"L'homme doit subir passivement les lois",
			"L'homme peut connaître et utiliser les lois pour ses fins",
			"L'homme peut ignorer les lois"
			],
		correct: 2,
		explanation: "Engels conçoit la relation entre l'homme et les lois naturelles comme une relation de connaissance et d'utilisation. L'homme ne peut pas s'affranchir des lois naturelles, mais il peut les connaître et les utiliser pour ses propres fins. Cette conception dialectique refuse à la fois la soumission passive et l'indépendance illusoire. L'homme est à la fois soumis aux lois (il ne peut les nier) et libre par rapport à elles (il peut les utiliser). La liberté est cette capacité de connaissance et d'utilisation des lois nécessaires."
		},

		// Question n°40
{
	question: "Question n°40 : Que signifie l'expression « fins déterminées » ?",
	answers: [
			"Buts choisis consciemment par l'homme",
			"Buts imposés par la nature",
			"Buts aléatoires"
			],
		correct: 1,
		explanation: "L'expression « fins déterminées » désigne des buts choisis consciemment par l'homme. La liberté consiste précisément à pouvoir se proposer des fins et à utiliser les lois naturelles pour les atteindre. Ces fins ne sont pas imposées par la nature : elles sont le produit de la volonté et de la raison humaines. Cette conception téléologique de l'action libre implique que l'homme est un agent qui se propose des buts et mobilise les moyens pour les réaliser. La liberté est cette capacité de déterminer soi-même ses fins et d'agir en conséquence."
		},

		// Question n°41
{
	question: "Question n°41 : Pourquoi Engels affirme-t-il que les deux classes de lois ne peuvent être séparées dans la réalité ?",
	answers: [
			"Parce qu'elles sont identiques",
			"Parce que l'homme fait partie de la nature",
			"Parce qu'elles n'existent pas"
			],
		correct: 2,
		explanation: "Engels affirme que les deux classes de lois ne peuvent être séparées dans la réalité parce que l'homme fait partie de la nature. Les lois de l'existence physique et psychique de l'homme sont des lois naturelles, au même titre que les lois de la nature extérieure. La distinction entre les deux est une abstraction utile pour l'analyse, mais elle ne correspond pas à une séparation réelle. Cette conception moniste et matérialiste s'oppose aux dualismes qui séparent radicalement l'esprit et la matière, l'homme et la nature."
		},

		// Question n°42
{
	question: "Question n°42 : Quel est le rapport entre liberté et nécessité dans la tradition philosophique ?",
	answers: [
			"Elles sont toujours opposées",
			"Engels propose une conception dialectique où la liberté naît de la connaissance de la nécessité",
			"Elles sont identiques"
			],
		correct: 2,
		explanation: "Dans la tradition philosophique, liberté et nécessité sont souvent opposées : être libre, ce serait échapper à la nécessité. Engels propose une conception dialectique où la liberté naît de la connaissance de la nécessité. Cette conception s'inscrit dans une longue tradition qui remonte à Spinoza et à Hegel : la liberté n'est pas l'absence de détermination mais la conscience de la détermination. Engels radicalise cette conception en l'articulant au matérialisme et à l'histoire. La liberté est le produit de la connaissance des lois naturelles et de leur maîtrise technique."
		},

		// Question n°43
{
	question: "Question n°43 : Comment Engels définit-il la liberté par rapport à la nature extérieure ?",
	answers: [
			"Comme une soumission passive",
			"Comme un empire fondé sur la connaissance des lois",
			"Comme une indépendance totale"
			],
		correct: 2,
		explanation: "Engels définit la liberté par rapport à la nature extérieure comme un empire fondé sur la connaissance des lois. L'homme libre n'est pas celui qui ignore ou nie les lois naturelles, mais celui qui les connaît et les utilise pour ses propres fins. Cette conception de la liberté comme empire sur la nature est prométhéenne : elle fait de l'homme un maître et possesseur de la nature. Elle est caractéristique de la modernité technique et industrielle. Elle implique une transformation active du monde par le travail et la science."
		},

		// Question n°44
{
	question: "Question n°44 : Que signifie l'expression « décider en connaissance de cause » pour la liberté de la volonté ?",
	answers: [
			"La volonté est libre quand elle ignore les causes",
			"La volonté est libre quand elle connaît les causes et les conséquences",
			"La volonté est libre quand elle est indéterminée"
			],
		correct: 2,
		explanation: "L'expression « décider en connaissance de cause » signifie que la volonté est libre quand elle connaît les causes et les conséquences de sa décision. La liberté de la volonté n'est donc pas l'indétermination mais la détermination par la connaissance. Plus la connaissance est adéquate, plus la décision est libre. Cette conception rationaliste de la liberté de la volonté s'oppose au libre arbitre indéterminé de la tradition métaphysique. Pour Engels, la volonté n'est libre que si elle est éclairée par la raison."
		},

		// Question n°45
{
	question: "Question n°45 : Pourquoi l'incertitude est-elle une illusion de liberté ?",
	answers: [
			"Parce qu'elle donne l'impression de choisir librement alors qu'on est soumis à l'objet",
			"Parce qu'elle est agréable",
			"Parce qu'elle est rare"
			],
		correct: 1,
		explanation: "L'incertitude est une illusion de liberté parce qu'elle donne l'impression de choisir librement alors qu'on est soumis à l'objet. Celui qui est incertain peut choisir apparemment n'importe quoi, mais ce choix arbitraire n'est pas fondé sur la connaissance. En réalité, il est déterminé par des causes qu'il ignore. L'incertitude manifeste donc la non-liberté, la soumission à l'objet. La vraie liberté est certitude fondée sur la connaissance, non incertitude fondée sur l'ignorance. Cette critique de l'illusion de liberté est centrale chez Engels."
		},

		// Question n°46
{
	question: "Question n°46 : Comment Engels conçoit-il le progrès de la liberté ?",
	answers: [
			"Comme un progrès de la connaissance et de la maîtrise de la nature",
			"Comme un progrès de l'ignorance",
			"Comme un progrès de la soumission"
			],
		correct: 1,
		explanation: "Engels conçoit le progrès de la liberté comme un progrès de la connaissance et de la maîtrise de la nature. À mesure que l'humanité découvre les lois naturelles et développe des techniques pour les utiliser, elle élargit son domaine de liberté. Ce progrès n'est pas linéaire ni automatique : il dépend des conditions historiques et sociales. Mais dans son ensemble, l'histoire de l'humanité est celle d'une libération progressive par la science et le travail. Cette conception optimiste et progressiste est caractéristique du marxisme."
		},

		// Question n°47
{
	question: "Question n°47 : Quel est le rôle de la connaissance dans la libération selon Engels ?",
	answers: [
			"La connaissance est inutile",
			"La connaissance est le moyen de la libération",
			"La connaissance est un obstacle"
			],
		correct: 2,
		explanation: "Selon Engels, la connaissance est le moyen de la libération. C'est par la connaissance des lois naturelles que l'homme peut les maîtriser et devenir libre. La connaissance n'est pas une fin en soi : elle est un instrument de pouvoir et de libération. Cette conception utilitariste de la connaissance est caractéristique du marxisme : la science doit servir à transformer le monde et à libérer l'humanité. La connaissance est donc inséparable de l'action et de la pratique. Elle est le premier moment de la libération."
		},

		// Question n°48
{
	question: "Question n°48 : Comment Engels définit-il la liberté dans sa dimension sociale ?",
	answers: [
			"Comme une affaire individuelle",
			"Comme un produit du développement historique et social",
			"Comme une illusion"
			],
		correct: 2,
		explanation: "Engels définit la liberté dans sa dimension sociale comme un produit du développement historique et social. La liberté n'est pas une affaire purement individuelle : elle dépend du niveau de développement des connaissances, des techniques et des rapports sociaux. Une société plus développée offre plus de possibilités de liberté à ses membres. Cette conception sociale et historique de la liberté est caractéristique du marxisme : la libération est un processus collectif, non une conquête individuelle. Elle passe par la transformation des conditions sociales."
		},

		// Question n°49
{
	question: "Question n°49 : Que signifie l'expression « la liberté est nécessairement un produit du développement historique » ?",
	answers: [
			"La liberté est donnée dès la naissance",
			"La liberté se conquiert progressivement au cours de l'histoire",
			"La liberté est impossible"
			],
		correct: 2,
		explanation: "L'expression « la liberté est nécessairement un produit du développement historique » signifie que la liberté se conquiert progressivement au cours de l'histoire. Le mot « nécessairement » souligne que ce processus n'est pas contingent : il découle du développement des forces productives et des connaissances. La liberté n'est donc pas un idéal abstrait mais un résultat concret de l'histoire humaine. Cette conception matérialiste et historique de la liberté s'oppose aux conceptions idéalistes qui font de la liberté une propriété essentielle de l'esprit ou de la volonté."
		},

		// Question n°50
{
	question: "Question n°50 : Quelle est l'importance de ce texte dans l'histoire de la philosophie ?",
	answers: [
			"C'est un texte mineur",
			"C'est un texte majeur qui propose une conception matérialiste et dialectique de la liberté",
			"C'est un texte religieux"
			],
		correct: 2,
		explanation: "Ce texte de l'Anti-Dühring est majeur car il propose une conception matérialiste et dialectique de la liberté. Engels y synthétise la position marxiste sur la liberté : la liberté n'est pas l'indépendance à l'égard des lois naturelles mais la connaissance et la maîtrise de ces lois. Cette conception s'inscrit dans la tradition spinoziste et hégélienne tout en la radicalisant par le matérialisme et l'historicisme. Elle a influencé de nombreux penseurs marxistes et au-delà. Ce texte est l'un des textes classiques sur la liberté dans la tradition marxiste."
		}
];