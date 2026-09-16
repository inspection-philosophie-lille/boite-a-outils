// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de PASCAL";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
		texte: `« [1] Que l'homme contemple donc la nature entière dans sa haute et pleine majesté, qu'il éloigne sa vue des objets bas qui l'environnent. [2] Qu'il regarde cette éclatante lumière, mise comme une lampe éternelle pour éclairer l'univers, que la terre lui paraisse comme un point au prix du vaste tour que cet astre décrit et qu'il s'étonne de ce que ce vaste tour lui-même n'est qu'une pointe très délicate à l'égard de celui que les astres qui roulent dans le firmament embrassent. (…) [3] Tout ce monde visible n'est qu'un trait imperceptible dans l'ample sein de la nature. (…) [4] Qu'est-ce qu'un homme dans l'infini ?
 [5] Mais pour lui présenter un autre prodige aussi étonnant, qu'il recherche dans ce qu'il connaît les choses les plus délicates (…). [6] Qu'il y voie une infinité d'univers, dont chacun a son firmament, ses planètes, sa terre, en la même proportion que le monde visible ; dans cette terre, des animaux, et enfin des cirons, dans lesquels il retrouvera ce que les premiers ont donné ; et trouvant encore dans les autres la même chose sans fin et sans repos, qu'il se perde dans ses merveilles, aussi étonnantes dans leur petitesse que les autres par leur étendue ; car qui n'admira que notre corps, qui tantôt n'était pas perceptible dans l'univers, imperceptible lui-même dans le sein du tout, soit à présent un colosse, un monde, ou plutôt un tout, à l'égard du néant où l'on ne peut arriver ? (…)
[7] Car enfin qu'est-ce que l'homme dans la nature ? [8] Un néant à l'égard de l'infini, un tout à l'égard du néant, un milieu entre rien et tout. [9] Infiniment éloigné de comprendre les extrêmes, la fin des choses et leur principe sont pour lui invinciblement cachés dans un secret impénétrable, également incapable de voir le néant d'où il est tiré, et l'infini où il est englouti. »`,
		source: "Blaise PASCAL, Pensée n°199 (Lafuma), n°72 (Brunschvicg)"
};

// ============================================
// QUESTIONS DU QUIZ (50 questions)
// ============================================

const questions = [
	// Question n°1
	{
		question: "Question n°1 : À quoi Pascal invite-t-il l'homme au début du texte ?",
		answers: [
			"À contempler la nature entière dans sa haute et pleine majesté",
			"À se replier sur lui-même",
			"À ignorer le monde extérieur"
			],
			correct: 1,
			explanation: "Pascal invite l'homme à « contempler la nature entière dans sa haute et pleine majesté ». Cette invitation à la contemplation cosmique est le point de départ de la méditation pascalienne sur la condition humaine. En élevant son regard vers l'immensité de l'univers, l'homme prend conscience de sa petitesse et de sa place paradoxale dans le cosmos. La contemplation est ainsi la voie d'accès à la vérité sur soi-même."
		},

		// Question n°2
	{
		question: "Question n°2 : Que doit faire l'homme de sa vue selon Pascal ?",
		answers: [
			"La fixer sur les objets bas",
			"L'éloigner des objets bas qui l'environnent",
			"La fermer"
			],
			correct: 2,
			explanation: "Pascal exhorte l'homme à « éloigner sa vue des objets bas qui l'environnent ». Cette prescription implique un mouvement d'élévation spirituelle : il s'agit de détourner son attention des préoccupations triviales et matérielles pour se tourner vers les réalités grandes et éternelles. Cette démarche est nécessaire pour que l'homme prenne la mesure véritable de sa condition dans l'univers."
		},

		// Question n°3
	{
		question: "Question n°3 : Quelle image Pascal utilise-t-il pour désigner le soleil ?",
		answers: [
			"Une boule de feu",
			"Une lampe éternelle",
			"Un œil du ciel"
			],
			correct: 2,
			explanation: "Pascal désigne le soleil comme « cette éclatante lumière, mise comme une lampe éternelle pour éclairer l'univers ». Cette métaphore de la lampe éternelle souligne à la fois l'éclat, la permanence et la fonction du soleil : illuminer et rendre visible l'univers. Elle suggère aussi une dimension providentielle : le soleil n'est pas un simple astre physique, mais un instrument au service de la vie et de la connaissance."
		},

		// Question n°4
{
		question: "Question n°4 : Comment la terre apparaît-elle à l'homme qui contemple l'univers ?",
		answers: [
			"Comme un immense continent",
			"Comme un point",
			"Comme une sphère parfaite"
			],
			correct: 2,
			explanation: "Pascal affirme que la terre doit paraître à l'homme « comme un point au prix du vaste tour que cet astre décrit ». Ce changement d'échelle est fondamental : ce qui nous semble immense (la Terre) devient insignifiant à l'échelle cosmique. Cette relativisation des grandeurs terrestres est la première étape de la prise de conscience pascalienne de la petitesse humaine. Elle prépare la célèbre formule du « roseau pensant »."
		},

		// Question n°5
{
		question: "Question n°5 : Que devient le tour du soleil dans le firmament selon Pascal ?",
		answers: [
			"Une ligne droite",
			"Une pointe très délicate",
			"Un cercle parfait"
			],
			correct: 2,
			explanation: "Pascal affirme que « ce vaste tour lui-même n'est qu'une pointe très délicate à l'égard de celui que les astres qui roulent dans le firmament embrassent ». Cette nouvelle gradation dans l'infiniment grand montre que même l'orbite du soleil, déjà immense à l'échelle terrestre, devient infinitésimale à l'échelle des étoiles. Ce procédé de mise en abîme des grandeurs est caractéristique de la rhétorique pascalienne de l'effacement."
		},

		// Question n°6
{
		question: "Question n°6 : Comment Pascal qualifie-t-il le monde visible ?",
		answers: [
			"Comme un trait imperceptible dans l'ample sein de la nature",
			"Comme une réalité ultime",
			"Comme une illusion"
			],
			correct: 1,
			explanation: "Pascal qualifie le monde visible de « trait imperceptible dans l'ample sein de la nature ». Cette formule exprime l'infinie petitesse du monde visible par rapport à l'ensemble de la nature. « Trait imperceptible » suggère quelque chose d'à peine visible, presque inexistant. « Ample sein de la nature » évoque au contraire l'immensité généreuse et mystérieuse qui englobe tout. Ce contraste saisissant est typique du style pascalien."
		},

		// Question n°7
{
		question: "Question n°7 : Quelle question Pascal pose-t-il après avoir décrit l'infiniment grand ?",
		answers: [
			"Qu'est-ce qu'un homme dans l'infini ?",
			"Qu'est-ce que Dieu ?",
			"Qu'est-ce que la vérité ?"
			],
			correct: 1,
			explanation: "Pascal pose la question fondamentale : « Qu'est-ce qu'un homme dans l'infini ? » Cette question est le pivot du texte : après avoir établi l'immensité de l'univers, Pascal en vient à interroger la place de l'homme dans cet infini. La réponse, développée dans la suite du texte, sera celle d'un être paradoxal, à la fois néant et tout, milieu entre rien et tout. Cette interrogation sur la place de l'homme dans le cosmos est au cœur de l'anthropologie pascalienne."
		},

		// Question n°8
{
		question: "Question n°8 : Quel « autre prodige » Pascal invite-t-il l'homme à rechercher ?",
		answers: [
			"L'infiniment grand",
			"L'infiniment petit",
			"L'infini mathématique"
			],
			correct: 2,
			explanation: "Après avoir décrit l'infiniment grand, Pascal invite l'homme à rechercher « dans ce qu'il connaît les choses les plus délicates », c'est-à-dire l'infiniment petit. Cette exploration de la petitesse révèle un autre infini, tout aussi étonnant que le premier. Le texte organise ainsi une double mouvement : l'homme est écrasé entre deux infinis, celui de la grandeur et celui de la petitesse, sans pouvoir saisir ni l'un ni l'autre."
		},

		// Question n°9
{
		question: "Question n°9 : Que trouve-t-on dans l'infiniment petit selon Pascal ?",
		answers: [
			"Une infinité d'univers",
			"Le néant absolu",
			"Une seule réalité"
			],
			correct: 1,
			explanation: "Pascal affirme qu'il faut voir dans l'infiniment petit « une infinité d'univers, dont chacun a son firmament, ses planètes, sa terre, en la même proportion que le monde visible ». C'est le principe de la mise en abîme : chaque partie contient un tout, qui contient lui-même des parties, et ainsi de suite à l'infini. Cette structure fractale de la réalité montre que l'infiniment petit est aussi inépuisable que l'infiniment grand. L'homme se perd dans cette régression sans fin."
		},

		// Question n°10
{
		question: "Question n°10 : Quel animal Pascal mentionne-t-il dans l'infiniment petit ?",
		answers: [
			"Les fourmis",
			"Les cirons",
			"Les puces"
			],
			correct: 2,
			explanation: "Pascal mentionne les « cirons », c'est-à-dire les acariens ou les très petits insectes. Ces créatures minuscules servent d'exemple pour illustrer l'infiniment petit : dans un ciron, on peut encore trouver des parties plus petites, et ainsi de suite à l'infini. Pascal utilise cette image pour montrer que la petitesse n'a pas de limite, tout comme la grandeur. L'homme est ainsi suspendu entre deux abîmes, également incapables de les comprendre."
		},

		// Question n°11
{
		question: "Question n°11 : Comment Pascal décrit-il le corps humain dans l'infiniment petit ?",
		answers: [
			"Comme un néant",
			"Comme un colosse, un monde, un tout",
			"Comme une poussière"
			],
			correct: 2,
			explanation: "Pascal affirme que notre corps, « qui tantôt n'était pas perceptible dans l'univers », devient « un colosse, un monde, ou plutôt un tout, à l'égard du néant où l'on ne peut arriver ». Cette inversion des perspectives est vertigineuse : ce qui était insignifiant à l'échelle cosmique devient immense à l'échelle de l'infiniment petit. L'homme est ainsi à la fois néant et tout selon le point de vue adopté. Cette relativité des grandeurs est au cœur de la méditation pascalienne."
		},

		// Question n°12
{
		question: "Question n°12 : Quelle est la question centrale du texte ?",
		answers: [
			"Qu'est-ce que Dieu ?",
			"Qu'est-ce que l'homme dans la nature ?",
			"Qu'est-ce que la science ?"
			],
			correct: 2,
			explanation: "La question centrale du texte est : « qu'est-ce que l'homme dans la nature ? » Cette interrogation anthropologique est le cœur de la pensée pascalienne. Après avoir exploré les deux infinis, Pascal en vient à s'interroger sur la place de l'homme dans cet univers démesuré. La réponse, célèbre, est que l'homme est « un néant à l'égard de l'infini, un tout à l'égard du néant, un milieu entre rien et tout ». Cette définition paradoxale exprime la condition humaine dans toute son ambiguïté."
		},

		// Question n°13
{
		question: "Question n°13 : Comment Pascal définit-il l'homme par rapport à l'infini ?",
		answers: [
			"Un tout",
			"Un néant",
			"Un milieu"
			],
			correct: 2,
			explanation: "Pascal définit l'homme comme « un néant à l'égard de l'infini ». Cette formule exprime l'infinie petitesse de l'homme face à l'immensité de l'univers. À l'échelle cosmique, l'homme est insignifiant, imperceptible, presque inexistant. Cette prise de conscience de la petitesse humaine est destinée à humilier la raison orgueilleuse qui prétend tout comprendre. Elle prépare la réflexion sur la grandeur de l'homme par la pensée, développée dans d'autres fragments."
		},

		// Question n°14
{
		question: "Question n°14 : Comment Pascal définit-il l'homme par rapport au néant ?",
		answers: [
			"Un néant",
			"Un tout",
			"Un milieu"
			],
			correct: 2,
			explanation: "Pascal définit l'homme comme « un tout à l'égard du néant ». Cette formule exprime la grandeur relative de l'homme par rapport à l'infiniment petit. À l'échelle des cirons, notre corps est un colosse, un monde, un tout. Cette grandeur relative montre que l'homme n'est pas rien : il est quelque chose d'important dans l'ordre des créatures. Mais cette grandeur est toute relative, car elle coexiste avec sa petitesse à l'échelle cosmique."
		},

		// Question n°15
{
	question: "Question n°15 : Quelle formule célèbre résume la condition humaine selon Pascal ?",
		answers: [
			"Un roseau pensant",
			"Un milieu entre rien et tout",
			"Une ombre qui passe"
			],
			correct: 2,
			explanation: "La formule « un milieu entre rien et tout » résume la condition humaine selon Pascal. L'homme n'est ni pur néant ni pur tout : il est intermédiaire entre ces deux extrêmes. Cette position médiane est source d'angoisse car elle implique une instabilité fondamentale : l'homme ne peut se fixer ni dans la grandeur ni dans la petitesse. Il est condamné à osciller entre des extrêmes qu'il ne peut atteindre. Cette conception de l'homme comme être intermédiaire est centrale dans l'anthropologie pascalienne."
		},

		// Question n°16
{
	question: "Question n°16 : Pourquoi les extrêmes sont-ils cachés à l'homme selon Pascal ?",
		answers: [
			"Parce qu'ils sont trop éloignés",
			"Parce qu'ils sont invinciblement cachés dans un secret impénétrable",
			"Parce qu'ils n'existent pas"
			],
			correct: 2,
			explanation: "Pascal affirme que « la fin des choses et leur principe sont pour lui invinciblement cachés dans un secret impénétrable ». Les extrêmes (le néant et l'infini) sont inaccessible à la connaissance humaine non par simple éloignement mais par une impossibilité structurelle. L'homme est « infiniment éloigné de comprendre les extrêmes ». Cette limitation cognitive est fondamentale : elle montre les bornes de la raison humaine et prépare l'appel à la foi."
		},

		// Question n°17
{
	question: "Question n°17 : De quoi l'homme est-il incapable selon la fin du texte ?",
		answers: [
			"De voir le néant d'où il est tiré et l'infini où il est englouti",
			"De comprendre les mathématiques",
			"De connaître les autres hommes"
			],
			correct: 1,
			explanation: "Pascal affirme que l'homme est « également incapable de voir le néant d'où il est tiré, et l'infini où il est englouti ». Cette double incapacité définit la condition humaine : l'homme ne peut connaître ni son origine (le néant) ni sa fin (l'infini). Il est suspendu entre deux abîmes qu'il ne peut sonder. Cette ignorance fondamentale est source d'angoisse mais aussi d'humilité : elle rappelle à l'homme les limites de sa raison."
		},

		// Question n°18
{
	question: "Question n°18 : Quelle est la fonction de la contemplation dans ce texte ?",
		answers: [
			"Distraire l'homme",
			"Faire prendre conscience à l'homme de sa condition",
			"Prouver l'existence de Dieu"
			],
			correct: 2,
			explanation: "La contemplation a pour fonction de faire prendre conscience à l'homme de sa condition véritable. En contemplant les deux infinis, l'homme découvre sa petitesse et sa grandeur, sa position médiane entre rien et tout. Cette prise de conscience est le premier pas vers la sagesse : elle humilie l'orgueil de la raison et ouvre l'homme à la reconnaissance de ses limites. La contemplation pascalienne n'est pas une fin en soi mais un moyen de connaissance de soi."
		},

		// Question n°19
{
	question: "Question n°19 : Quel est le double mouvement du texte ?",
		answers: [
			"L'exploration de l'infiniment grand puis de l'infiniment petit",
			"L'exploration de l'âme puis du corps",
			"L'exploration de la terre puis du ciel"
			],
			correct: 1,
			explanation: "Le texte organise un double mouvement : d'abord l'exploration de l'infiniment grand (la nature, le soleil, les astres), puis l'exploration de l'infiniment petit (les cirons, les parties infinitésimales). Cette double exploration révèle que l'homme est également dépassé par les deux infinis. Il ne peut saisir ni la démesure de l'univers ni la complexité de l'infiniment petit. Ce double mouvement est caractéristique de la méthode pascalienne : montrer les limites de l'homme en l'écartelant entre deux extrêmes."
		},

		// Question n°20
{
	question: "Question n°20 : Que signifie l'expression « ample sein de la nature » ?",
		answers: [
			"Une caverne",
			"L'immensité englobante de la nature",
			"Le centre de la terre"
			],
			correct: 2,
			explanation: "L'expression « ample sein de la nature » désigne l'immensité englobante de la nature. Le mot « sein » évoque à la fois la matrice maternelle et le centre d'un être. La nature est présentée comme une réalité immense et mystérieuse qui contient et dépasse toute chose. Le monde visible n'est qu'un « trait imperceptible » dans cet « ample sein ». Cette image souligne à la fois la petitesse du monde visible et la grandeur de la nature qui le contient."
		},

		// Question n°21
{
	question: "Question n°21 : Quelle est la signification de l'adjectif « imperceptible » dans le texte ?",
		answers: [
			"Qui ne peut être perçu tant il est petit",
			"Qui est invisible par nature",
			"Qui n'existe pas"
			],
			correct: 1,
			explanation: "L'adjectif « imperceptible » signifie « qui ne peut être perçu tant il est petit ». Le monde visible est qualifié de « trait imperceptible dans l'ample sein de la nature ». Cette qualification exprime la petitesse extrême du monde visible à l'échelle de la nature entière. Mais « imperceptible » peut aussi suggérer une limite de la perception humaine : ce qui est imperceptible pour l'homme peut être perçu par un autre regard. Cette notion d'imperceptible joue un rôle central dans la rhétorique pascalienne de l'effacement."
		},

		// Question n°22
{
	question: "Question n°22 : Comment Pascal caractérise-t-il les merveilles de l'infiniment petit ?",
		answers: [
			"Moins étonnantes que celles de l'infiniment grand",
			"Aussi étonnantes que celles de l'infiniment grand",
			"Plus étonnantes que celles de l'infiniment grand"
			],
			correct: 2,
			explanation: "Pascal caractérise les merveilles de l'infiniment petit comme « aussi étonnantes dans leur petitesse que les autres par leur étendue ». Cette symétrie entre les deux infinis est fondamentale : l'homme est également dépassé par la grandeur et par la petitesse. Il n'y a pas de hiérarchie entre les deux infinis : tous deux manifestent la puissance et la sagesse du créateur. Cette égalité dans l'étonnement souligne l'incapacité humaine à saisir l'un comme l'autre."
		},

		// Question n°23
{
	question: "Question n°23 : Que signifie l'expression « se perdre dans ses merveilles » ?",
		answers: [
			"S'égarer dans la nature",
			"Être submergé par l'étonnement devant l'infinie complexité du réel",
			"Renoncer à comprendre"
			],
			correct: 2,
			explanation: "L'expression « se perdre dans ses merveilles » signifie être submergé par l'étonnement devant l'infinie complexité du réel. « Se perdre » n'est pas ici péjoratif : c'est reconnaître les limites de sa raison et s'ouvrir à l'admiration. L'homme qui contemple les deux infinis est saisi d'un vertige devant l'inépuisable richesse de l'univers. Cette expérience du sublime est à la fois humiliante (elle révèle notre petitesse) et enrichissante (elle ouvre à une forme de sagesse)."
		},

		// Question n°24
{
	question: "Question n°24 : Quelle est la place de l'homme dans l'univers selon Pascal ?",
		answers: [
			"Au centre de l'univers",
			"Entre deux infinis, sans pouvoir saisir ni l'un ni l'autre",
			"Au sommet de la création"
			],
			correct: 2,
			explanation: "Selon Pascal, l'homme est placé entre deux infinis, sans pouvoir saisir ni l'un ni l'autre. Cette position médiane est inconfortable : l'homme n'est ni au centre ni au sommet de l'univers. Il est suspendu entre le néant et l'infini, également incapable de comprendre son origine et sa fin. Cette conception contraste avec l'anthropocentrisme traditionnel qui plaçait l'homme au centre du cosmos. Pascal inaugure ainsi une vision moderne de l'homme comme être décentré et limité."
		},

		// Question n°25
{
	question: "Question n°25 : Quel sentiment Pascal cherche-t-il à provoquer chez le lecteur ?",
		answers: [
			"L'orgueil",
			"L'étonnement et le vertige",
			"L'indifférence"
			],
			correct: 2,
			explanation: "Pascal cherche à provoquer chez le lecteur l'étonnement et le vertige. Le texte multiplie les formules frappantes (« qu'il s'étonne », « qu'il se perde », « qui n'admira ») pour susciter une expérience émotionnelle intense. Cette stratégie rhétorique vise à ébranler les certitudes du lecteur et à lui faire prendre conscience de sa condition véritable. L'étonnement est pour Pascal le début de la sagesse : il ouvre à la réflexion sur les mystères de l'existence."
		},

		// Question n°26
{
	question: "Question n°26 : Comment Pascal décrit-il la connaissance humaine ?",
		answers: [
			"Comme illimitée",
			"Comme limitée et incapable de saisir les extrêmes",
			"Comme parfaite"
			],
			correct: 2,
			explanation: "Pascal décrit la connaissance humaine comme limitée et incapable de saisir les extrêmes. L'homme est « infiniment éloigné de comprendre les extrêmes » ; « la fin des choses et leur principe sont pour lui invinciblement cachés ». Cette limitation n'est pas accidentelle mais structurelle : elle tient à la nature finie de l'homme. Cette conception sceptique de la connaissance humaine prépare la distinction pascalienne entre l'esprit de géométrie et l'esprit de finesse, et finalement l'appel à la foi."
		},

		// Question n°27
{
	question: "Question n°27 : Quelle est la différence entre le néant et l'infini selon Pascal ?",
		answers: [
			"Ils sont identiques",
			"Ils sont les deux extrêmes que l'homme ne peut comprendre",
			"Le néant est plus accessible que l'infini"
			],
			correct: 2,
			explanation: "Selon Pascal, le néant et l'infini sont les deux extrêmes que l'homme ne peut comprendre. L'homme est « également incapable de voir le néant d'où il est tiré, et l'infini où il est englouti ». Cette symétrie est importante : l'homme ne peut connaître ni son origine (le néant) ni sa destination (l'infini). Il est suspendu entre deux mystères également impénétrables. Cette double ignorance est la marque de la finitude humaine et de sa dépendance à l'égard de Dieu."
		},

		// Question n°28
{
	question: "Question n°28 : Quel est le rapport entre l'homme et les deux infinis selon Pascal ?",
	answers: [
			"L'homme domine les deux infinis",
			"L'homme est écrasé par les deux infinis",
			"L'homme ignore les deux infinis"
			],
			correct: 2,
			explanation: "Selon Pascal, l'homme est écrasé par les deux infinis. Il est « un néant à l'égard de l'infini » et en même temps « un tout à l'égard du néant », mais il ne peut saisir ni l'un ni l'autre. Cette position d'écrasement est source d'angoisse : l'homme se sent perdu dans un univers démesuré. Mais elle est aussi source d'humilité : elle rappelle à l'homme sa place réelle dans la création. Cette tension entre petitesse et grandeur est au cœur de l'anthropologie pascalienne."
		},

		// Question n°29
{
	question: "Question n°29 : Que signifie l'expression « la fin des choses et leur principe » ?",
		answers: [
			"Le commencement et la fin",
			"L'origine et la destination finale",
			"Les causes et les effets"
			],
			correct: 2,
			explanation: "L'expression « la fin des choses et leur principe » désigne l'origine et la destination finale des choses. « Principe » signifie commencement, origine, cause première. « Fin » signifie but, achèvement, destination ultime. Pascal affirme que ces deux extrémités de la réalité sont « invinciblement cachés » à l'homme. Il ne peut savoir d'où vient l'univers ni où il va. Cette ignorance des origines et des fins est une dimension essentielle de la condition humaine selon Pascal."
		},

		// Question n°30
{
	question: "Question n°30 : Comment Pascal qualifie-t-il le secret qui cache les extrêmes ?",
		answers: [
			"Un secret révélé",
			"Un secret impénétrable",
			"Un secret provisoire"
			],
			correct: 2,
			explanation: "Pascal qualifie le secret qui cache les extrêmes d'« impénétrable ». Cet adjectif souligne l'impossibilité radicale pour l'homme de pénétrer les mystères de l'origine et de la fin. Il ne s'agit pas d'un secret temporaire qui serait un jour révélé, mais d'une limite structurelle de la connaissance humaine. Cette conception de l'impénétrable prépare la distinction entre les vérités accessibles à la raison et les mystères qui ne peuvent être connus que par la foi."
		},

		// Question n°31
{
	question: "Question n°31 : Quelle est la fonction de l'infiniment petit dans l'argumentation de Pascal ?",
	answers: [
			"Décorer le texte",
			"Montrer que l'homme est aussi dépassé par la petitesse que par la grandeur",
			"Prouver l'existence des atomes"
			],
			correct: 2,
			explanation: "L'infiniment petit a pour fonction de montrer que l'homme est aussi dépassé par la petitesse que par la grandeur. En explorant l'infiniment petit, Pascal découvre une nouvelle forme d'infini qui échappe tout autant à la compréhension humaine. Cette symétrie entre les deux infinis renforce la thèse de la limitation humaine : l'homme ne peut saisir ni l'immensité ni la petitesse du réel. Il est doublement dépassé."
		},

		// Question n°32
{
	question: "Question n°32 : Que signifie l'expression « un milieu entre rien et tout » ?",
	answers: [
			"L'homme est parfait",
			"L'homme est intermédiaire entre le néant et l'infini",
			"L'homme est au centre du monde"
			],
			correct: 2,
			explanation: "L'expression « un milieu entre rien et tout » signifie que l'homme est intermédiaire entre le néant et l'infini. Il n'est ni purement rien ni purement tout : il participe des deux à des degrés divers. Cette position médiane est instable : l'homme peut s'élever vers la grandeur ou s'abîmer dans la misère. Cette conception de l'homme comme être intermédiaire est centrale dans l'anthropologie pascalienne, développée dans les fragments sur les grandeurs et misères de l'homme."
		},

		// Question n°33
{
	question: "Question n°33 : Comment Pascal décrit-il la relation entre l'homme et l'univers ?",
	answers: [
			"L'homme est maître de l'univers",
			"L'homme est perdu dans l'univers",
			"L'homme est indifférent à l'univers"
			],
			correct: 2,
			explanation: "Pascal décrit l'homme comme perdu dans l'univers : « Qu'est-ce qu'un homme dans l'infini ? » Cette question rhétorique exprime le vertige de l'homme face à l'immensité cosmique. L'homme n'est qu'un « trait imperceptible » dans l'univers. Cette expérience de la perdition est fondamentale dans la pensée pascalienne : elle provoque l'angoisse mais aussi l'ouverture vers Dieu. L'homme perdu dans l'univers cherche un point fixe, et c'est Dieu qui peut seul lui en donner un."
		},

		// Question n°34
{
	question: "Question n°34 : Quel est le rôle de l'étonnement dans ce texte ?",
	answers: [
			"Exprimer la naïveté",
			"Conduire à la prise de conscience de la condition humaine",
			"Divertir le lecteur"
			],
			correct: 2,
			explanation: "L'étonnement a pour rôle de conduire à la prise de conscience de la condition humaine. Pascal invite l'homme à s'étonner de la petitesse de la terre, de l'immensité des astres, de la complexité de l'infiniment petit. Cet étonnement n'est pas une simple émotion mais une expérience philosophique : il ébranle les certitudes et ouvre à la réflexion. Pour Pascal, l'étonnement est le début de la sagesse, car il révèle à l'homme sa véritable situation dans l'univers."
		},

		// Question n°35
{
	question: "Question n°35 : Comment Pascal caractérise-t-il la position de l'homme dans le cosmos ?",
	answers: [
			"Centrale et privilégiée",
			"Intermédiaire et paradoxale",
			"Insignifiante et sans importance"
			],
			correct: 2,
			explanation: "Pascal caractérise la position de l'homme dans le cosmos comme intermédiaire et paradoxale. L'homme est « un milieu entre rien et tout », « un néant à l'égard de l'infini, un tout à l'égard du néant ». Cette position est paradoxale car elle combine des contraires : grandeur et petitesse, importance et insignifiance. L'homme n'est ni ange ni bête, ni pur esprit ni pure matière. Il est un être de tension et d'ambiguïté, ce qui fait à la fois sa misère et sa grandeur."
		},

		// Question n°36
{
	question: "Question n°36 : Que signifie l'expression « invinciblement cachés » ?",
	answers: [
			"Qui peuvent être découverts",
			"Qui ne peuvent être vaincus ni découverts",
			"Qui sont cachés par erreur"
			],
			correct: 2,
			explanation: "L'expression « invinciblement cachés » signifie que les extrêmes ne peuvent être ni vaincus ni découverts par l'homme. L'adverbe « invinciblement » souligne l'impossibilité radicale pour l'homme de surmonter cette limitation. Il ne s'agit pas d'une difficulté temporaire mais d'une impossibilité structurelle liée à la finitude humaine. Cette conception de l'impénétrable prépare la distinction entre l'ordre de la raison et l'ordre de la foi."
		},

		// Question n°37
{
	question: "Question n°37 : Quelle est la signification de la question « Qu'est-ce qu'un homme dans l'infini ? » ?",
	answers: [
			"Une question rhétorique sans réponse",
			"Une interrogation sur la place et la valeur de l'homme dans le cosmos",
			"Une question scientifique"
			],
			correct: 2,
			explanation: "La question « Qu'est-ce qu'un homme dans l'infini ? » est une interrogation sur la place et la valeur de l'homme dans le cosmos. Elle exprime l'angoisse de l'homme moderne face à un univers infini qui semble l'écraser. Mais elle ouvre aussi à une réflexion sur la grandeur de l'homme : bien que petit dans l'univers, l'homme est capable de le penser, et c'est en quoi il est grand. Cette question est au cœur de l'anthropologie pascalienne et annonce le célèbre fragment sur le roseau pensant."
		},

		// Question n°38
{
	question: "Question n°38 : Comment Pascal conçoit-il la relation entre le fini et l'infini ?",
	answers: [
			"Le fini et l'infini sont séparés",
			"Le fini est englobé par l'infini et le néant",
			"Le fini est supérieur à l'infini"
			],
			correct: 2,
			explanation: "Pascal conçoit la relation entre le fini et l'infini comme une relation d'englobement : le fini (l'homme, le monde visible) est englobé par l'infini et le néant. L'homme est « également incapable de voir le néant d'où il est tiré, et l'infini où il est englouti ». Cette image de l'engloutissement exprime la dépendance radicale du fini à l'égard des deux infinis qui le dépassent. Le fini n'est qu'un point entre deux abîmes."
		},

		// Question n°39
{
	question: "Question n°39 : Quel est le genre littéraire de ce texte ?",
	answers: [
			"Un traité scientifique",
			"Une méditation philosophique et religieuse",
			"Un roman"
			],
			correct: 2,
			explanation: "Ce texte est une méditation philosophique et religieuse. Il appartient aux Pensées de Pascal, fragments destinés à une apologie de la religion chrétienne. Le style est à la fois littéraire (images frappantes, rythme des phrases) et philosophique (argumentation rigoureuse). Pascal y déploie une rhétorique de l'effacement et du vertige pour conduire le lecteur à prendre conscience de sa condition et à s'ouvrir à la foi. Ce genre de la méditation est caractéristique de la tradition augustinienne."
		},

		// Question n°40
{
	question: "Question n°40 : Comment Pascal décrit-il le rapport entre le monde visible et la nature ?",
	answers: [
			"Le monde visible est plus grand que la nature",
			"Le monde visible est un trait imperceptible dans l'ample sein de la nature",
			"Le monde visible est identique à la nature"
			],
			correct: 2,
			explanation: "Pascal décrit le rapport entre le monde visible et la nature comme un rapport d'infinie petitesse : le monde visible est « un trait imperceptible dans l'ample sein de la nature ». Cette formule exprime la démesure de la nature par rapport au monde que nous percevons. Ce que nous appelons « monde » n'est qu'une infime partie d'une réalité infiniment plus vaste. Cette conception relativise notre perception et notre connaissance : nous ne voyons qu'une infime partie du réel."
		},

		// Question n°41
{
	question: "Question n°41 : Quelle est la fonction de l'énumération des grandeurs dans ce texte ?",
	answers: [
			"Décorer le discours",
			"Créer un effet de vertige par la multiplication des perspectives",
			"Prouver l'existence de Dieu"
			],
			correct: 2,
			explanation: "L'énumération des grandeurs (terre, tour du soleil, firmament, etc.) a pour fonction de créer un effet de vertige par la multiplication des perspectives. Chaque nouvelle échelle relativise la précédente : la terre est un point par rapport au soleil, le tour du soleil est une pointe par rapport au firmament, et ainsi de suite. Cette régression à l'infini dans la grandeur produit un sentiment d'écrasement et de perte. C'est une stratégie rhétorique visant à provoquer l'expérience du sublime."
		},

		// Question n°42
{
	question: "Question n°42 : Comment Pascal caractérise-t-il la connaissance des extrêmes ?",
	answers: [
			"Facile et immédiate",
			"Impossible et invinciblement cachée",
			"Réservée aux savants"
			],
			correct: 2,
			explanation: "Pascal caractérise la connaissance des extrêmes comme impossible et invinciblement cachée. L'homme est « infiniment éloigné de comprendre les extrêmes » ; « la fin des choses et leur principe sont pour lui invinciblement cachés dans un secret impénétrable ». Cette impossibilité n'est pas relative à l'ignorance ou à l'incompétence : elle est structurelle, liée à la finitude humaine. Elle fonde l'humilité intellectuelle et prépare l'appel à la révélation."
		},

		// Question n°43
{
	question: "Question n°43 : Que signifie l'expression « également incapable » ?",
	answers: [
			"Capable de tout",
			"Tout aussi incapable de voir le néant que l'infini",
			"Incapable une seule fois"
			],
			correct: 2,
			explanation: "L'expression « également incapable » signifie que l'homme est tout aussi incapable de voir le néant que l'infini. Cette symétrie dans l'incapacité souligne que la limitation humaine est totale : elle concerne les deux extrêmes de la réalité. L'homme ne peut connaître ni son origine (le néant) ni sa fin (l'infini). Cette double ignorance définit la condition humaine comme suspendue entre deux mystères. Elle est source d'angoisse mais aussi d'ouverture à la transcendance."
		},

		// Question n°44
{
	question: "Question n°44 : Quel est le thème principal de ce texte ?",
	answers: [
			"La grandeur de l'homme",
			"La condition humaine entre les deux infinis",
			"La beauté de la nature"
			],
			correct: 2,
			explanation: "Le thème principal de ce texte est la condition humaine entre les deux infinis. Pascal explore l'infiniment grand et l'infiniment petit pour montrer que l'homme est dépassé par tous les côtés. Il est « un milieu entre rien et tout », incapable de comprendre les extrêmes. Cette méditation sur la place de l'homme dans le cosmos est au cœur de l'anthropologie pascalienne. Elle prépare la réflexion sur la grandeur de l'homme par la pensée, développée dans d'autres fragments."
		},

		// Question n°45
{
	question: "Question n°45 : Comment Pascal utilise-t-il les mathématiques dans ce texte ?",
	answers: [
			"Il ne les utilise pas",
			"Il utilise les notions d'infini et de néant comme concepts mathématiques et métaphysiques",
			"Il les critique"
			],
			correct: 2,
			explanation: "Pascal utilise les notions d'infini et de néant comme concepts à la fois mathématiques et métaphysiques. En tant que mathématicien, Pascal connaît les travaux sur l'infiniment petit et l'infiniment grand. Il transpose ces notions dans le domaine philosophique pour décrire la condition humaine. L'homme est « un néant à l'égard de l'infini, un tout à l'égard du néant ». Cette utilisation des concepts mathématiques à des fins métaphysiques est caractéristique de la pensée pascalienne."
		},

		// Question n°46
{
	question: "Question n°46 : Quelle est la visée apologétique de ce texte ?",
	answers: [
			"Prouver la supériorité de la science",
			"Conduire l'homme à reconnaître ses limites et à s'ouvrir à Dieu",
			"Défendre la liberté de pensée"
			],
			correct: 2,
			explanation: "La visée apologétique de ce texte est de conduire l'homme à reconnaître ses limites et à s'ouvrir à Dieu. En montrant que l'homme est perdu entre deux infinis et incapable de comprendre les extrêmes, Pascal prépare le lecteur à reconnaître la nécessité d'une révélation. Si la raison humaine est impuissante à saisir les mystères de l'origine et de la fin, alors seule la foi peut donner un sens à l'existence. Cette stratégie apologétique est au cœur des Pensées."
		},

		// Question n°47
{
	question: "Question n°47 : Comment Pascal conçoit-il la grandeur de l'homme ?",
	answers: [
			"L'homme est grand par sa raison",
			"L'homme est grand parce qu'il se reconnaît misérable",
			"L'homme est grand par sa force"
			],
			correct: 2,
			explanation: "Pascal conçoit la grandeur de l'homme comme liée à la reconnaissance de sa misère. Dans d'autres fragments, il écrit que « la grandeur de l'homme est grande en ce qu'il se connaît misérable ». Dans ce texte, la contemplation des deux infinis conduit l'homme à reconnaître sa petitesse et son ignorance. Mais cette reconnaissance est elle-même une grandeur : elle distingue l'homme de l'animal qui ne se pose pas ces questions. La grandeur de l'homme réside dans sa capacité à prendre conscience de sa condition."
		},

		// Question n°48
{
	question: "Question n°48 : Quel est le rapport entre ce texte et la science moderne ?",
	answers: [
			"Ce texte s'oppose à la science",
			"Ce texte intègre les découvertes scientifiques de son temps (infini, vide, astronomie)",
			"Ce texte ignore la science"
			],
			correct: 2,
			explanation: "Ce texte intègre les découvertes scientifiques de son temps : l'infini mathématique, le vide, les observations astronomiques de Galilée et Copernic. Pascal, lui-même savant, utilise ces découvertes pour appuyer sa méditation philosophique. L'idée d'une infinité d'univers dans l'infiniment petit reflète les travaux sur les indivisibles et le calcul infinitésimal. Ce texte témoigne de l'articulation entre science et philosophie dans la pensée pascalienne."
		},

		// Question n°49
{
	question: "Question n°49 : Quelle est la signification de l'image du « néant où l'on ne peut arriver » ?",
	answers: [
			"Le néant est accessible",
			"Le néant est un extrême inaccessible comme l'infini",
			"Le néant n'existe pas"
			],
			correct: 2,
			explanation: "L'image du « néant où l'on ne peut arriver » signifie que le néant est un extrême inaccessible comme l'infini. Pascal souligne ainsi la symétrie entre les deux bornes de la réalité : on ne peut atteindre ni le néant absolu ni l'infini absolu. L'homme est suspendu entre ces deux limites qu'il ne peut franchir. Cette impossibilité d'atteindre les extrêmes est une caractéristique fondamentale de la condition humaine : elle exprime la finitude radicale de l'homme."
		},

		// Question n°50
{
	question: "Question n°50 : Quelle est l'importance de ce texte dans l'histoire de la philosophie ?",
	answers: [
			"C'est un texte mineur sans influence",
			"C'est un texte majeur qui inaugure une nouvelle conception de la condition humaine",
			"C'est un texte purement littéraire"
			],
			correct: 2,
			explanation: "Ce texte est majeur car il inaugure une nouvelle conception de la condition humaine. Pascal y rompt avec l'anthropocentrisme traditionnel : l'homme n'est plus au centre du cosmos mais perdu entre deux infinis. Cette conception annonce la sensibilité moderne et contemporaine : l'angoisse existentielle, le sentiment d'absurde, la conscience de la finitude. Ce texte a influencé de nombreux philosophes et écrivains, de Kierkegaard à Sartre, de Baudelaire à Malraux. Il est l'un des textes fondateurs de la modernité philosophique."
		}
];