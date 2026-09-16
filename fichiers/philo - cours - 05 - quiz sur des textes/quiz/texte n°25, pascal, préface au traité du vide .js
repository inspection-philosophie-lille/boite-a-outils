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
		texte: `« [1] Les ruches des abeilles étaient aussi bien mesurées il y a mille ans qu'aujourd'hui, et chacune d'elles forme cet hexagone aussi exactement la première fois que la dernière. [2] Il en est de même de tout ce que les animaux produisent par ce mouvement occulte. [3] La nature les instruit à mesure que la nécessité les presse ; mais cette science fragile se perd avec les besoins qu'ils en ont : comme ils la reçoivent sans étude ils n'ont pas le bonheur de la conserver ; et toutes les fois qu'elle leur est donnée, elle leur est nouvelle, puisque, la nature n'ayant pour objet que de maintenir les animaux dans un ordre de perfection bornée elle leur inspire cette science nécessaire, toujours égale, de peur qu'ils ne tombent dans le dépérissement, et ne permet pas qu'ils y ajoutent, de peur qu'ils ne passent les limites qu'elle leur a prescrites. [4] Il n'en est pas de même de l'homme qui n'est produit que pour l'infinité. [5] Il est dans l'ignorance au premier Age de sa vie ; mais il s'instruit sans cesse dans son progrès : car il tire avantage non seulement de sa propre expérience, mais encore de celle de ses prédécesseurs, parce qu'il garde toujours dans sa mémoire les connaissances qu'il s'est une fois acquises, et que celles des anciens lui sont toujours présentes dans les livres qu'ils en ont laissés. »`,
		source: "Blaise PASCAL, Préface au Traité du vide (1651)"
};

// ============================================
// QUESTIONS DU QUIZ (50 questions)
// ============================================

const questions = [
	// Question n°1
	{
		question: "Question n°1 : Que remarque Pascal à propos des ruches des abeilles ?",
		answers: [
			"Elles changent constamment",
			"Elles étaient aussi bien mesurées il y a mille ans qu'aujourd'hui",
			"Elles sont imparfaites"
			],
			correct: 2,
			explanation: "Pascal affirme : « Les ruches des abeilles étaient aussi bien mesurées il y a mille ans qu'aujourd'hui. » Cette observation souligne la fixité et la perfection constante de la production animale. Les abeilles construisent leurs ruches avec une précision géométrique qui ne varie pas à travers le temps. Cette régularité contraste avec le progrès humain, qui est accumulation et dépassement continus. Pascal utilise cet exemple pour illustrer la différence entre l'instinct animal et la raison humaine."
		},

		// Question n°2
	{
		question: "Question n°2 : Comment les abeilles forment-elles leur hexagone selon Pascal ?",
		answers: [
			"Imparfaitement",
			"Aussi exactement la première fois que la dernière",
			"Différemment selon les époques"
			],
		correct: 2,
		explanation: "Pascal affirme que chaque abeille « forme cet hexagone aussi exactement la première fois que la dernière ». Cette précision constante montre que l'abeille n'apprend pas : elle produit son ouvrage avec une perfection immédiate et invariable. Il n'y a ni progrès ni régression dans la production animale. Cette fixité est le signe de l'instinct, qui est une science infuse et bornée. Elle contraste avec la perfectibilité humaine, qui procède par accumulation et dépassement."
		},

		// Question n°3
{
	question: "Question n°3 : À quoi Pascal compare-t-il la production des abeilles ?",
	answers: [
			"À l'art humain",
			"À tout ce que les animaux produisent par ce mouvement occulte",
			"À la science"
			],
		correct: 2,
		explanation: "Pascal affirme qu'« il en est de même de tout ce que les animaux produisent par ce mouvement occulte ». L'expression « mouvement occulte » désigne l'instinct, cette force secrète qui pousse les animaux à agir de manière déterminée sans apprentissage ni réflexion. Pascal généralise l'observation faite sur les abeilles : tous les animaux produisent de manière identique et invariable, par instinct. Cette uniformité de la production animale contraste avec la diversité et le progrès de la production humaine."
		},

		// Question n°4
{
	question: "Question n°4 : Comment la nature instruit-elle les animaux selon Pascal ?",
	answers: [
			"Par l'éducation",
			"À mesure que la nécessité les presse",
			"Par la raison"
			],
		correct: 2,
		explanation: "Pascal affirme : « La nature les instruit à mesure que la nécessité les presse. » L'instruction des animaux n'est pas un apprentissage réfléchi : c'est une inspiration naturelle qui se produit sous la pression du besoin. L'animal ne raisonne pas : la nature lui fournit au moment opportun la connaissance nécessaire à sa survie. Cette conception de l'instinct comme instruction naturelle liée au besoin est caractéristique de la pensée de Pascal. Elle oppose radicalement l'instinct animal à la raison humaine."
		},

		// Question n°5
{
	question: "Question n°5 : Que devient la science des animaux selon Pascal ?",
	answers: [
			"Elle se conserve",
			"Elle se perd avec les besoins qu'ils en ont",
			"Elle se développe"
			],
		correct: 2,
		explanation: "Pascal affirme que « cette science fragile se perd avec les besoins qu'ils en ont ». La science des animaux est fragile car elle n'est pas conservée : elle disparaît aussitôt que le besoin est satisfait. L'animal ne garde pas en mémoire ce qu'il a fait : il recommence chaque fois comme si c'était la première. Cette absence de conservation de la science animale contraste avec la mémoire et l'accumulation des connaissances chez l'homme. C'est cette différence qui fonde la perfectibilité humaine."
		},

		// Question n°6
{
	question: "Question n°6 : Pourquoi les animaux ne peuvent-ils pas conserver leur science ?",
	answers: [
			"Parce qu'ils la reçoivent sans étude",
			"Parce qu'ils sont paresseux",
			"Parce qu'ils sont méchants"
			],
		correct: 2,
		explanation: "Pascal affirme que les animaux ne peuvent pas conserver leur science « comme ils la reçoivent sans étude ». La science animale est infuse, donnée par la nature, non acquise par l'effort. C'est précisément parce qu'ils ne l'ont pas apprise que les animaux ne peuvent pas la conserver. Ils n'ont pas le « bonheur de la conserver », dit Pascal. Cette conception de l'instinct comme science infuse non conservable est essentielle : elle explique l'immobilité de la production animale et contraste avec la perfectibilité humaine."
		},

		// Question n°7
{
	question: "Question n°7 : Que se passe-t-il chaque fois que la science est donnée aux animaux ?",
	answers: [
			"Elle est identique",
			"Elle leur est nouvelle",
			"Elle est meilleure"
			],
		correct: 2,
		explanation: "Pascal affirme que « toutes les fois qu'elle leur est donnée, elle leur est nouvelle ». Chaque fois que l'animal agit, c'est comme si c'était la première fois : il ne se souvient pas d'avoir déjà fait la même chose. La science animale est toujours nouvelle car elle n'est jamais conservée. Cette nouveauté perpétuelle n'est pas un progrès : c'est une répétition identique. L'animal recommence chaque fois le même ouvrage, sans mémoire ni accumulation. Cette conception de l'instinct comme science toujours nouvelle mais toujours identique est caractéristique de Pascal."
		},

		// Question n°8
{
	question: "Question n°8 : Quel est l'objet de la nature selon Pascal ?",
	answers: [
			"Maintenir les animaux dans un ordre de perfection bornée",
			"Rendre les animaux parfaits",
			"Donner la raison aux animaux"
			],
		correct: 2,
		explanation: "Pascal affirme que « la nature n'ayant pour objet que de maintenir les animaux dans un ordre de perfection bornée ». La nature ne vise pas à perfectionner indéfiniment les animaux : elle les maintient dans un état de perfection limité, borné. Les animaux ont une perfection réelle mais fixe : ils ne peuvent ni progresser ni régresser. Cette conception de la nature comme conservatrice d'un ordre borné est essentielle : elle explique l'immobilité de l'animal. L'homme, au contraire, est produit pour l'infinité et la perfectibilité."
		},

		// Question n°9
{
	question: "Question n°9 : Pourquoi la nature inspire-t-elle aux animaux cette science nécessaire ?",
	answers: [
			"De peur qu'ils ne tombent dans le dépérissement",
			"Pour qu'ils progressent",
			"Pour qu'ils deviennent raisonnables"
			],
		correct: 2,
		explanation: "Pascal affirme que la nature inspire aux animaux cette science nécessaire « de peur qu'ils ne tombent dans le dépérissement ». La science animale a une fonction de conservation : elle permet à l'animal de survivre, de se maintenir dans l'être. Sans elle, l'animal périrait. Cette conception téléologique de l'instinct comme moyen de conservation est caractéristique de la pensée de Pascal. L'instinct n'est pas orienté vers le progrès mais vers la conservation. Il maintient l'animal dans un ordre de perfection bornée."
		},

		// Question n°10
{
	question: "Question n°10 : Pourquoi la nature ne permet-elle pas aux animaux d'ajouter à leur science ?",
	answers: [
			"De peur qu'ils ne passent les limites qu'elle leur a prescrites",
			"Parce qu'ils sont incapables",
			"Parce qu'ils sont paresseux"
			],
		correct: 2,
		explanation: "Pascal affirme que la nature « ne permet pas qu'ils y ajoutent, de peur qu'ils ne passent les limites qu'elle leur a prescrites ». La nature a fixé des limites à la perfection animale : elle ne veut pas que les animaux les dépassent. Cette conception de la nature comme gardienne des limites est essentielle : elle explique pourquoi les animaux ne progressent pas. Leur perfection est bornée, fixe, définitive. L'homme, au contraire, n'a pas de limites : il est produit pour l'infinité et la perfectibilité indéfinie."
		},

		// Question n°11
{
	question: "Question n°11 : Pour quoi l'homme est-il produit selon Pascal ?",
	answers: [
			"Pour la perfection bornée",
			"Pour l'infinité",
			"Pour l'ignorance"
			],
		correct: 2,
		explanation: "Pascal affirme : « Il n'en est pas de même de l'homme qui n'est produit que pour l'infinité. » L'homme est destiné à l'infinité, c'est-à-dire à un progrès sans limite, à une perfectibilité indéfinie. Contrairement aux animaux, dont la perfection est bornée, l'homme est capable de se perfectionner sans cesse. Cette conception de l'homme comme être perfectible et ouvert à l'infini est caractéristique de la pensée de Pascal dans cette préface. Elle fonde la dignité exceptionnelle de l'homme et sa vocation au progrès."
		},

		// Question n°12
{
	question: "Question n°12 : Dans quel état l'homme est-il au premier âge de sa vie ?",
	answers: [
			"Dans la science",
			"Dans l'ignorance",
			"Dans la sagesse"
			],
		correct: 2,
		explanation: "Pascal affirme : « Il est dans l'ignorance au premier Age de sa vie. » L'homme commence dans l'ignorance, contrairement à l'animal qui reçoit immédiatement la science nécessaire. Cette ignorance initiale n'est pas un défaut : elle est la condition de la perfectibilité. C'est parce qu'il commence dans l'ignorance que l'homme peut s'instruire et progresser. L'ignorance première est le point de départ d'un progrès sans fin. Cette conception de l'homme comme être qui commence dans l'ignorance et s'instruit sans cesse est au cœur de la pensée de Pascal."
		},

		// Question n°13
{
	question: "Question n°13 : Que fait l'homme dans son progrès selon Pascal ?",
	answers: [
			"Il régresse",
			"Il s'instruit sans cesse",
			"Il reste ignorant"
			],
		correct: 2,
		explanation: "Pascal affirme que l'homme « s'instruit sans cesse dans son progrès ». L'homme est un être de progrès : il ne cesse de s'instruire, d'accumuler des connaissances, de se perfectionner. Cette instruction continue est rendue possible par la mémoire et la transmission. Contrairement à l'animal, dont la science est fixe et bornée, l'homme progresse indéfiniment. Cette conception de l'homme comme être perfectible et progressif est caractéristique de la pensée de Pascal dans cette préface. Elle fonde la supériorité de l'homme sur l'animal."
		},

		// Question n°14
{
	question: "Question n°14 : De quoi l'homme tire-t-il avantage selon Pascal ?",
	answers: [
			"De sa propre expérience seulement",
			"De sa propre expérience et de celle de ses prédécesseurs",
			"De l'expérience des animaux"
			],
		correct: 2,
		explanation: "Pascal affirme que l'homme « tire avantage non seulement de sa propre expérience, mais encore de celle de ses prédécesseurs ». Cette capacité de tirer profit de l'expérience des autres est essentielle : elle permet l'accumulation et la transmission des connaissances. L'homme ne recommence pas chaque fois à zéro : il hérite du savoir des générations précédentes. Cette conception de la tradition comme accumulation et transmission du savoir est au cœur de la pensée de Pascal. Elle explique la perfectibilité humaine."
		},

		// Question n°15
{
	question: "Question n°15 : Que garde toujours l'homme dans sa mémoire selon Pascal ?",
	answers: [
			"Les connaissances qu'il s'est une fois acquises",
			"Les erreurs",
			"Les besoins"
			],
		correct: 2,
		explanation: "Pascal affirme que l'homme « garde toujours dans sa mémoire les connaissances qu'il s'est une fois acquises ». La mémoire est la condition de l'accumulation du savoir : sans elle, chaque génération devrait tout réapprendre. Grâce à la mémoire, les connaissances acquises ne sont pas perdues : elles s'ajoutent aux nouvelles. Cette conception de la mémoire comme conservation du savoir est essentielle : elle explique la perfectibilité humaine. Contrairement à l'animal, dont la science se perd, l'homme conserve et accumule ses connaissances."
		},

		// Question n°16
{
	question: "Question n°16 : Où sont présentes les connaissances des anciens selon Pascal ?",
	answers: [
			"Dans les livres qu'ils ont laissés",
			"Dans la nature",
			"Dans les ruches"
			],
		correct: 2,
		explanation: "Pascal affirme que les connaissances des anciens « lui sont toujours présentes dans les livres qu'ils en ont laissés ». Les livres sont le moyen de transmission du savoir à travers les générations. Grâce à l'écriture, les connaissances des anciens ne sont pas perdues : elles sont disponibles pour les générations suivantes. Cette conception du livre comme mémoire de l'humanité est essentielle : elle permet l'accumulation et la transmission du savoir. Elle explique la perfectibilité humaine, qui contraste avec la fixité animale."
		},

		// Question n°17
{
	question: "Question n°17 : Quelle est la thèse principale de ce texte ?",
	answers: [
			"L'homme et l'animal sont identiques",
			"L'homme est perfectible, l'animal ne l'est pas",
			"L'animal est supérieur à l'homme"
			],
		correct: 2,
		explanation: "La thèse principale de ce texte est que l'homme est perfectible, l'animal ne l'est pas. Pascal oppose la fixité de l'instinct animal à la perfectibilité de la raison humaine. Les animaux produisent toujours de la même manière, sans progrès ni régression. L'homme, au contraire, s'instruit sans cesse, accumule les connaissances et progresse indéfiniment. Cette différence fonde la supériorité de l'homme sur l'animal. Elle est au cœur de la conception pascalienne de l'homme comme être produit pour l'infinité."
		},

		// Question n°18
{
	question: "Question n°18 : Comment Pascal caractérise-t-il la science des animaux ?",
	answers: [
			"Comme parfaite et croissante",
			"Comme fragile et non conservée",
			"Comme rationnelle"
			],
		correct: 2,
		explanation: "Pascal caractérise la science des animaux comme fragile et non conservée. Il affirme : « cette science fragile se perd avec les besoins qu'ils en ont ». La science animale est fragile car elle n'est pas retenue : elle disparaît aussitôt que le besoin est satisfait. Elle est non conservée car les animaux ne peuvent pas la garder en mémoire. Cette fragilité de la science animale contraste avec la solidité et l'accumulation de la science humaine. Elle explique l'immobilité de la production animale."
		},

		// Question n°19
{
	question: "Question n°19 : Comment Pascal caractérise-t-il la science humaine ?",
	answers: [
			"Comme fragile",
			"Comme accumulée et transmissible",
			"Comme fixe"
			],
		correct: 2,
		explanation: "Pascal caractérise la science humaine comme accumulée et transmissible. L'homme garde dans sa mémoire les connaissances acquises et profite de celles de ses prédécesseurs. Les livres transmettent le savoir à travers les générations. Cette accumulation et transmission rendent possible le progrès indéfini. Contrairement à la science animale, qui se perd, la science humaine se conserve et s'accroît. Cette conception de la science humaine comme patrimoine accumulé et transmissible est essentielle dans la pensée de Pascal. Elle fonde la perfectibilité humaine."
		},

		// Question n°20
{
	question: "Question n°20 : Quel est le rapport entre l'homme et le temps selon Pascal ?",
	answers: [
			"L'homme est immobile dans le temps",
			"L'homme progresse dans le temps par accumulation du savoir",
			"L'homme régresse dans le temps"
			],
		correct: 2,
		explanation: "Selon Pascal, le rapport entre l'homme et le temps est un rapport de progrès par accumulation du savoir. L'homme s'instruit sans cesse, accumule les connaissances, profite de l'expérience de ses prédécesseurs. Le temps est pour lui le vecteur d'un progrès continu. Cette conception du temps comme vecteur de progrès humain contraste avec la conception cyclique du temps animal, où rien ne change. L'homme est un être historique : il progresse dans et par le temps. Cette conception est au cœur de la modernité."
		},

		// Question n°21
{
	question: "Question n°21 : Pourquoi les animaux ne peuvent-ils pas progresser selon Pascal ?",
	answers: [
			"Parce qu'ils n'ont pas de mémoire pour conserver leurs connaissances",
			"Parce qu'ils sont paresseux",
			"Parce qu'ils sont méchants"
			],
		correct: 2,
		explanation: "Les animaux ne peuvent pas progresser selon Pascal parce qu'ils n'ont pas de mémoire pour conserver leurs connaissances. Leur science se perd avec le besoin : ils ne peuvent pas accumuler ce qu'ils ont appris. Sans conservation, pas d'accumulation ; sans accumulation, pas de progrès. La nature a fixé des limites à leur perfection : elle ne permet pas qu'ils y ajoutent. Les animaux sont donc condamnés à répéter toujours la même chose, sans progrès ni régression. Cette fixité est le signe de leur nature bornée."
		},

		// Question n°22
{
	question: "Question n°22 : Qu'est-ce qui rend l'homme perfectible selon Pascal ?",
	answers: [
			"Sa force physique",
			"Sa mémoire et la transmission du savoir",
			"Son instinct"
			],
		correct: 2,
		explanation: "Ce qui rend l'homme perfectible selon Pascal, c'est sa mémoire et la transmission du savoir. L'homme garde dans sa mémoire les connaissances acquises et profite de celles de ses prédécesseurs par les livres. Cette double capacité de conservation et de transmission permet l'accumulation du savoir et le progrès indéfini. Sans mémoire, pas d'accumulation ; sans transmission, pas d'héritage. C'est cette capacité qui distingue radicalement l'homme de l'animal et fonde sa perfectibilité. Elle est au cœur de la conception pascalienne de l'homme."
		},

		// Question n°23
{
	question: "Question n°23 : Comment Pascal conçoit-il la nature de l'animal ?",
	answers: [
			"Comme perfectible",
			"Comme bornée et fixe",
			"Comme infinie"
			],
		correct: 2,
		explanation: "Pascal conçoit la nature de l'animal comme bornée et fixe. Les animaux sont maintenus par la nature dans « un ordre de perfection bornée ». Leur perfection est réelle mais limitée : ils ne peuvent ni progresser ni régresser. Cette fixité est le signe de leur nature bornée. L'animal est ce qu'il est, définitivement. Il n'a pas la vocation à l'infini qui caractérise l'homme. Cette conception de l'animal comme être borné et fixe contraste avec la conception de l'homme comme être perfectible et ouvert à l'infini."
		},

		// Question n°24
{
	question: "Question n°24 : Comment Pascal conçoit-il la nature de l'homme ?",
	answers: [
			"Comme bornée",
			"Comme perfectible et ouverte à l'infini",
			"Comme fixe"
			],
		correct: 2,
		explanation: "Pascal conçoit la nature de l'homme comme perfectible et ouverte à l'infini. L'homme « n'est produit que pour l'infinité ». Il est capable de se perfectionner sans cesse, d'accumuler les connaissances, de progresser indéfiniment. Cette vocation à l'infini distingue radicalement l'homme de l'animal. Elle fonde la dignité exceptionnelle de l'homme et sa responsabilité dans l'histoire. L'homme n'est pas un être achevé : il est un être en devenir, appelé à se dépasser sans cesse. Cette conception de l'homme comme être perfectible est au cœur de la pensée de Pascal."
		},

		// Question n°25
{
	question: "Question n°25 : Quel est le rôle de la mémoire dans la perfectibilité humaine selon Pascal ?",
	answers: [
			"La mémoire est inutile",
			"La mémoire est la condition de l'accumulation du savoir",
			"La mémoire empêche le progrès"
			],
		correct: 2,
		explanation: "Selon Pascal, le rôle de la mémoire dans la perfectibilité humaine est d'être la condition de l'accumulation du savoir. C'est parce que l'homme garde dans sa mémoire les connaissances acquises qu'il peut les accumuler et progresser. Sans mémoire, chaque génération devrait tout réapprendre, et il n'y aurait pas de progrès. La mémoire est donc le fondement de la perfectibilité humaine. Cette conception de la mémoire comme condition du progrès est essentielle dans la pensée de Pascal. Elle contraste avec l'absence de mémoire chez l'animal, qui explique sa fixité."
		},

		// Question n°26
{
	question: "Question n°26 : Quel est le rôle des livres dans la perfectibilité humaine selon Pascal ?",
	answers: [
			"Les livres sont inutiles",
			"Les livres transmettent le savoir des anciens aux nouvelles générations",
			"Les livres empêchent le progrès"
			],
		correct: 2,
		explanation: "Selon Pascal, le rôle des livres dans la perfectibilité humaine est de transmettre le savoir des anciens aux nouvelles générations. Les connaissances des anciens « lui sont toujours présentes dans les livres qu'ils en ont laissés ». Les livres sont la mémoire de l'humanité : ils permettent au savoir de traverser les siècles et de s'accumuler. Sans les livres, chaque génération devrait tout réinventer. Les livres sont donc un instrument essentiel de la perfectibilité humaine. Cette conception du livre comme vecteur de transmission du savoir est au cœur de la pensée de Pascal."
		},

		// Question n°27
{
	question: "Question n°27 : Comment Pascal définit-il l'instinct animal ?",
	answers: [
			"Comme une science infuse et bornée",
			"Comme une raison imparfaite",
			"Comme une mémoire"
			],
		correct: 2,
		explanation: "Pascal définit l'instinct animal comme une science infuse et bornée. L'animal reçoit de la nature, sans étude, la science nécessaire à sa conservation. Cette science est infuse : elle est donnée, non acquise. Elle est bornée : elle est limitée à ce qui est nécessaire à la survie de l'animal. L'animal ne peut ni la dépasser ni y ajouter. Cette conception de l'instinct comme science infuse et bornée est caractéristique de la pensée de Pascal. Elle oppose radicalement l'instinct animal à la raison humaine, qui est perfectible et ouverte à l'infini."
		},

		// Question n°28
{
	question: "Question n°28 : Pourquoi la science des animaux est-elle dite « fragile » par Pascal ?",
	answers: [
			"Parce qu'elle est imparfaite",
			"Parce qu'elle se perd avec les besoins",
			"Parce qu'elle est inutile"
			],
		correct: 2,
		explanation: "Pascal dit que la science des animaux est « fragile » parce qu'elle se perd avec les besoins. La science animale n'est pas conservée : elle disparaît aussitôt que le besoin est satisfait. Chaque fois que l'animal agit, c'est comme si c'était la première fois. Cette fragilité de la science animale contraste avec la solidité et la permanence de la science humaine. Elle explique l'immobilité de la production animale. L'adjectif « fragile » souligne le caractère précaire et non cumulatif de la science animale."
		},

		// Question n°29
{
	question: "Question n°29 : Comment Pascal conçoit-il le rapport entre nature et animal ?",
	answers: [
			"La nature est indifférente à l'animal",
			"La nature instruit l'animal et le maintient dans un ordre borné",
			"La nature donne la raison à l'animal"
			],
		correct: 2,
		explanation: "Pascal conçoit le rapport entre nature et animal comme un rapport d'instruction et de maintien. La nature instruit l'animal en lui inspirant la science nécessaire à sa conservation. Elle le maintient dans un ordre de perfection bornée, sans permettre qu'il y ajoute. La nature est donc à la fois instructrice et limitante : elle donne à l'animal ce qui lui est nécessaire, mais ne lui permet pas de dépasser les limites qu'elle a fixées. Cette conception de la nature comme providence bornée est caractéristique de la pensée de Pascal dans cette préface."
		},

		// Question n°30
{
	question: "Question n°30 : Comment Pascal conçoit-il le rapport entre nature et homme ?",
	answers: [
			"La nature limite l'homme",
			"La nature a produit l'homme pour l'infinité, sans le limiter",
			"La nature ignore l'homme"
			],
		correct: 2,
		explanation: "Pascal conçoit le rapport entre nature et homme comme un rapport d'ouverture à l'infini. L'homme « n'est produit que pour l'infinité » : la nature ne l'a pas enfermé dans un ordre borné comme l'animal. Elle lui a donné la capacité de se perfectionner sans cesse, de progresser indéfiniment. Cette conception de l'homme comme être ouvert à l'infini contraste avec la conception de l'animal comme être borné et fixe. Elle fonde la dignité exceptionnelle de l'homme et sa vocation au progrès. Elle est au cœur de la pensée de Pascal dans cette préface."
		},

		// Question n°31
{
	question: "Question n°31 : Pourquoi l'homme est-il dans l'ignorance au premier âge de sa vie ?",
	answers: [
			"Parce qu'il est inférieur à l'animal",
			"Parce qu'il doit tout apprendre par lui-même et par les autres",
			"Parce qu'il est paresseux"
			],
		correct: 2,
		explanation: "L'homme est dans l'ignorance au premier âge de sa vie parce qu'il doit tout apprendre par lui-même et par les autres. Contrairement à l'animal, qui reçoit immédiatement la science nécessaire, l'homme commence sans savoir. Cette ignorance initiale n'est pas un défaut : elle est la condition de la perfectibilité. C'est parce qu'il commence dans l'ignorance que l'homme peut s'instruire et progresser. L'ignorance première est le point de départ d'un progrès sans fin. Cette conception de l'homme comme être qui commence dans l'ignorance et s'instruit sans cesse est au cœur de la pensée de Pascal."
		},

		// Question n°32
{
	question: "Question n°32 : Comment Pascal caractérise-t-il le progrès humain ?",
	answers: [
			"Comme cyclique",
			"Comme continu et cumulatif",
			"Comme régressif"
			],
		correct: 2,
		explanation: "Pascal caractérise le progrès humain comme continu et cumulatif. L'homme « s'instruit sans cesse dans son progrès » : il ne cesse d'accumuler des connaissances. Ce progrès est cumulatif car il intègre les acquis du passé : l'homme profite de sa propre expérience et de celle de ses prédécesseurs. Il ne recommence pas à zéro à chaque génération. Cette conception du progrès comme continu et cumulatif est caractéristique de la modernité. Elle contraste avec la conception cyclique du temps animal, où rien ne change. Elle fonde la perfectibilité humaine."
		},

		// Question n°33
{
	question: "Question n°33 : Quel est le rôle de l'expérience dans la perfectibilité humaine selon Pascal ?",
	answers: [
			"L'expérience est inutile",
			"L'expérience est une source de connaissance qui s'ajoute à celle des autres",
			"L'expérience empêche le progrès"
			],
		correct: 2,
		explanation: "Selon Pascal, le rôle de l'expérience dans la perfectibilité humaine est d'être une source de connaissance qui s'ajoute à celle des autres. L'homme « tire avantage non seulement de sa propre expérience, mais encore de celle de ses prédécesseurs ». L'expérience personnelle et l'expérience transmise par les livres sont deux sources complémentaires du savoir. Cette conception de l'expérience comme source de connaissance est essentielle : elle explique comment l'homme accumule et transmet le savoir. Elle fonde la perfectibilité humaine, qui contraste avec la fixité animale."
		},

		// Question n°34
{
	question: "Question n°34 : Pourquoi l'homme peut-il profiter de l'expérience de ses prédécesseurs ?",
	answers: [
			"Parce qu'il a une mémoire et des livres",
			"Parce qu'il est plus fort",
			"Parce qu'il est chanceux"
			],
		correct: 2,
		explanation: "L'homme peut profiter de l'expérience de ses prédécesseurs parce qu'il a une mémoire et des livres. La mémoire lui permet de conserver les connaissances acquises ; les livres lui transmettent celles des anciens. Cette double capacité de conservation et de transmission rend possible l'accumulation du savoir à travers les générations. Sans mémoire ni livres, chaque génération devrait tout réapprendre. C'est cette capacité qui distingue radicalement l'homme de l'animal et fonde sa perfectibilité. Elle est au cœur de la conception pascalienne de l'homme."
		},

		// Question n°35
{
	question: "Question n°35 : Comment Pascal oppose-t-il l'homme et l'animal dans ce texte ?",
	answers: [
			"Par leur force physique",
			"Par la fixité de l'un et la perfectibilité de l'autre",
			"Par leur taille"
			],
		correct: 2,
		explanation: "Pascal oppose l'homme et l'animal par la fixité de l'un et la perfectibilité de l'autre. L'animal est enfermé dans un ordre de perfection bornée : il répète toujours la même chose, sans progrès ni régression. L'homme, au contraire, est produit pour l'infinité : il s'instruit sans cesse, accumule les connaissances, progresse indéfiniment. Cette opposition entre fixité animale et perfectibilité humaine est au cœur du texte. Elle fonde la supériorité de l'homme sur l'animal et sa vocation exceptionnelle dans la création."
		},

		// Question n°36
{
	question: "Question n°36 : Quel est le rapport entre l'homme et l'infini selon Pascal ?",
	answers: [
			"L'homme est limité",
				"L'homme est produit pour l'infinité, c'est-à-dire pour un progrès sans limite",
			"L'homme est indifférent à l'infini"
			],
		correct: 2,
		explanation: "Selon Pascal, le rapport entre l'homme et l'infini est un rapport de destination : l'homme est produit pour l'infinité. Cela signifie que l'homme est appelé à un progrès sans limite, à une perfectibilité indéfinie. Contrairement à l'animal, dont la perfection est bornée, l'homme est ouvert à l'infini. Cette vocation à l'infini fonde la dignité exceptionnelle de l'homme et sa responsabilité dans l'histoire. Elle est au cœur de la conception pascalienne de l'homme comme être perfectible. L'homme n'est pas un être achevé : il est un être en devenir, appelé à se dépasser sans cesse."
		},

		// Question n°37
{
	question: "Question n°37 : Comment Pascal conçoit-il la différence entre la science animale et la science humaine ?",
	answers: [
			"Elles sont identiques",
			"La science animale est fixe et se perd, la science humaine s'accumule et se transmet",
			"La science animale est supérieure"
			],
		correct: 2,
		explanation: "Pascal conçoit la différence entre la science animale et la science humaine comme une différence de nature. La science animale est fixe et se perd : elle est infuse, bornée, non conservée. La science humaine s'accumule et se transmet : elle est acquise, perfectible, conservée dans la mémoire et les livres. Cette différence fondamentale explique l'immobilité de l'animal et le progrès de l'homme. Elle fonde la supériorité de l'homme sur l'animal. Elle est au cœur de la conception pascalienne de la perfectibilité humaine."
		},

		// Question n°38
{
	question: "Question n°38 : Pourquoi la nature a-t-elle fixé des limites à la perfection animale selon Pascal ?",
	answers: [
			"Parce qu'elle est méchante",
			"De peur que les animaux ne passent les limites qu'elle leur a prescrites",
			"Parce qu'elle est indifférente"
			],
		correct: 2,
		explanation: "Selon Pascal, la nature a fixé des limites à la perfection animale « de peur qu'ils ne passent les limites qu'elle leur a prescrites ». La nature veut maintenir les animaux dans un ordre de perfection bornée : elle ne permet pas qu'ils y ajoutent. Cette conception de la nature comme gardienne des limites est essentielle : elle explique pourquoi les animaux ne progressent pas. Leur perfection est fixe, définitive. L'homme, au contraire, n'a pas de limites : il est produit pour l'infinité et la perfectibilité indéfinie. Cette opposition est au cœur du texte."
		},

		// Question n°39
{
	question: "Question n°39 : Comment Pascal définit-il la perfectibilité humaine ?",
	answers: [
			"Comme la capacité de se perfectionner sans cesse par accumulation du savoir",
			"Comme la capacité de rester identique",
			"Comme la capacité de régresser"
			],
		correct: 2,
		explanation: "Pascal définit la perfectibilité humaine comme la capacité de se perfectionner sans cesse par accumulation du savoir. L'homme s'instruit continuellement, profite de sa propre expérience et de celle de ses prédécesseurs, conserve les connaissances acquises dans sa mémoire et les transmet par les livres. Cette accumulation et transmission rendent possible un progrès indéfini. La perfectibilité humaine contraste avec la fixité animale. Elle est au cœur de la conception pascalienne de l'homme comme être produit pour l'infinité. Elle fonde la dignité exceptionnelle de l'homme."
		},

		// Question n°40
{
	question: "Question n°40 : Quel est le rôle de l'écriture dans la perfectibilité humaine selon Pascal ?",
	answers: [
			"L'écriture est inutile",
			"L'écriture permet la transmission du savoir à travers les générations",
			"L'écriture empêche le progrès"
			],
		correct: 2,
		explanation: "Selon Pascal, le rôle de l'écriture dans la perfectibilité humaine est de permettre la transmission du savoir à travers les générations. Les livres laissés par les anciens rendent leurs connaissances « toujours présentes » aux nouvelles générations. L'écriture est donc la mémoire de l'humanité : elle permet au savoir de traverser les siècles et de s'accumuler. Sans l'écriture, le savoir serait limité à la mémoire individuelle et périrait avec chaque génération. L'écriture est donc un instrument essentiel de la perfectibilité humaine. Cette conception du livre comme vecteur de transmission du savoir est au cœur de la pensée de Pascal."
		},

		// Question n°41
{
	question: "Question n°41 : Pourquoi l'animal ne peut-il pas ajouter à sa science selon Pascal ?",
	answers: [
			"Parce qu'il est paresseux",
			"Parce que la nature ne le permet pas",
			"Parce qu'il est méchant"
			],
		correct: 2,
		explanation: "L'animal ne peut pas ajouter à sa science parce que la nature ne le permet pas. Pascal affirme que la nature « ne permet pas qu'ils y ajoutent, de peur qu'ils ne passent les limites qu'elle leur a prescrites ». La nature a fixé des limites à la perfection animale et veille à ce qu'elles ne soient pas dépassées. L'animal est donc enfermé dans un ordre de perfection bornée : il ne peut ni progresser ni régresser. Cette conception de la nature comme gardienne des limites est essentielle : elle explique la fixité de l'animal. Elle contraste avec la vocation de l'homme à l'infini."
		},

		// Question n°42
{
	question: "Question n°42 : Comment Pascal conçoit-il l'histoire de l'humanité ?",
	answers: [
			"Comme cyclique",
			"Comme un progrès continu par accumulation du savoir",
			"Comme une décadence"
			],
		correct: 2,
		explanation: "Pascal conçoit l'histoire de l'humanité comme un progrès continu par accumulation du savoir. L'homme s'instruit sans cesse, profite de l'expérience de ses prédécesseurs, conserve les connaissances acquises et les transmet. Cette accumulation et transmission rendent possible un progrès indéfini. L'histoire de l'humanité est donc l'histoire d'un progrès continu, non d'une répétition cyclique ou d'une décadence. Cette conception progressiste de l'histoire est caractéristique de la modernité. Elle contraste avec la conception cyclique du temps animal et avec les conceptions traditionalistes de l'histoire."
		},

		// Question n°43
{
	question: "Question n°43 : Quel est le rapport entre mémoire et progrès selon Pascal ?",
	answers: [
			"La mémoire empêche le progrès",
			"La mémoire est la condition du progrès",
			"La mémoire est indifférente au progrès"
			],
		correct: 2,
		explanation: "Selon Pascal, le rapport entre mémoire et progrès est un rapport de condition : la mémoire est la condition du progrès. C'est parce que l'homme garde dans sa mémoire les connaissances acquises qu'il peut les accumuler et progresser. Sans mémoire, chaque génération devrait tout réapprendre, et il n'y aurait pas de progrès. La mémoire est donc le fondement de la perfectibilité humaine. Cette conception de la mémoire comme condition du progrès est essentielle dans la pensée de Pascal. Elle contraste avec l'absence de mémoire chez l'animal, qui explique sa fixité."
		},

		// Question n°44
{
	question: "Question n°44 : Comment Pascal définit-il l'ignorance initiale de l'homme ?",
	answers: [
			"Comme un défaut",
			"Comme la condition de la perfectibilité",
			"Comme une malédiction"
			],
		correct: 2,
		explanation: "Pascal définit l'ignorance initiale de l'homme comme la condition de la perfectibilité. L'homme commence dans l'ignorance, contrairement à l'animal qui reçoit immédiatement la science nécessaire. Cette ignorance n'est pas un défaut : elle est la condition du progrès. C'est parce qu'il commence dans l'ignorance que l'homme peut s'instruire et progresser. L'ignorance première est le point de départ d'un progrès sans fin. Cette conception de l'ignorance comme condition de la perfectibilité est essentielle dans la pensée de Pascal. Elle contraste avec la science infuse de l'animal, qui est bornée et fixe."
		},

		// Question n°45
{
	question: "Question n°45 : Quel est le sens de l'expression « la nature n'ayant pour objet que de maintenir les animaux dans un ordre de perfection bornée » ?",
	answers: [
			"La nature veut perfectionner les animaux",
			"La nature maintient les animaux dans un état de perfection limité et fixe",
			"La nature ignore les animaux"
			],
		correct: 2,
		explanation: "L'expression « la nature n'ayant pour objet que de maintenir les animaux dans un ordre de perfection bornée » signifie que la nature maintient les animaux dans un état de perfection limité et fixe. Les animaux ont une perfection réelle mais bornée : ils ne peuvent ni progresser ni régresser. La nature ne vise pas à les perfectionner indéfiniment : elle les conserve dans l'état où elle les a placés. Cette conception de la nature comme conservatrice d'un ordre borné est essentielle : elle explique la fixité de l'animal. Elle contraste avec la vocation de l'homme à l'infini et à la perfectibilité."
		},

		// Question n°46
{
	question: "Question n°46 : Pourquoi l'homme est-il supérieur à l'animal selon Pascal ?",
	answers: [
			"Parce qu'il est plus fort",
			"Parce qu'il est perfectible et ouvert à l'infini",
			"Parce qu'il est plus grand"
			],
		correct: 2,
		explanation: "L'homme est supérieur à l'animal selon Pascal parce qu'il est perfectible et ouvert à l'infini. L'animal est enfermé dans un ordre de perfection bornée : il répète toujours la même chose. L'homme, au contraire, est produit pour l'infinité : il s'instruit sans cesse, accumule les connaissances, progresse indéfiniment. Cette perfectibilité est le signe de la supériorité de l'homme. Elle fonde sa dignité exceptionnelle dans la création. Cette conception de la supériorité humaine est au cœur de la pensée de Pascal dans cette préface. Elle contraste avec les conceptions qui font de l'homme un animal comme les autres."
		},

		// Question n°47
{
	question: "Question n°47 : Comment Pascal conçoit-il le temps humain ?",
	answers: [
			"Comme cyclique",
			"Comme linéaire et progressif",
			"Comme immobile"
			],
		correct: 2,
		explanation: "Pascal conçoit le temps humain comme linéaire et progressif. L'homme s'instruit sans cesse dans son progrès : il avance dans le temps en accumulant les connaissances. Le temps est pour lui le vecteur d'un progrès continu. Cette conception linéaire et progressive du temps humain contraste avec la conception cyclique du temps animal, où rien ne change. Elle est caractéristique de la modernité et de la conception progressiste de l'histoire. Elle fonde la perfectibilité humaine et la vocation de l'homme à l'infini. Elle est au cœur de la pensée de Pascal dans cette préface."
		},

		// Question n°48
{
	question: "Question n°48 : Quel est le rôle de la transmission dans la perfectibilité humaine selon Pascal ?",
	answers: [
			"La transmission est inutile",
			"La transmission permet à chaque génération de partir des acquis des précédentes",
			"La transmission empêche le progrès"
			],
		correct: 2,
		explanation: "Selon Pascal, le rôle de la transmission dans la perfectibilité humaine est de permettre à chaque génération de partir des acquis des précédentes. Grâce à la mémoire et aux livres, les connaissances acquises par les anciens sont transmises aux nouvelles générations. Celles-ci peuvent alors les accumuler et les dépasser. La transmission est donc la condition du progrès cumulatif. Sans elle, chaque génération devrait tout réapprendre. Cette conception de la transmission comme condition du progrès est essentielle dans la pensée de Pascal. Elle contraste avec l'absence de transmission chez l'animal."
		},

		// Question n°49
{
	question: "Question n°49 : Comment Pascal caractérise-t-il la condition humaine ?",
	answers: [
			"Comme bornée et fixe",
			"Comme ouverte à l'infini et perfectible",
			"Comme identique à celle de l'animal"
			],
		correct: 2,
		explanation: "Pascal caractérise la condition humaine comme ouverte à l'infini et perfectible. L'homme « n'est produit que pour l'infinité » : il est appelé à un progrès sans limite. Contrairement à l'animal, dont la perfection est bornée, l'homme est capable de se perfectionner sans cesse. Cette perfectibilité est le signe de sa dignité exceptionnelle. Elle fonde sa vocation à l'infini et sa responsabilité dans l'histoire. Cette conception de la condition humaine comme ouverte à l'infini est au cœur de la pensée de Pascal dans cette préface. Elle contraste avec la conception de l'animal comme être borné et fixe."
		},

		// Question n°50
{
	question: "Question n°50 : Quelle est l'importance de ce texte dans l'histoire de la philosophie ?",
	answers: [
			"C'est un texte mineur",
			"C'est un texte majeur qui fonde la distinction entre l'instinct animal et la perfectibilité humaine",
			"C'est un texte purement littéraire"
			],
		correct: 2,
		explanation: "Ce texte de la Préface au Traité du vide est majeur car il fonde la distinction entre l'instinct animal et la perfectibilité humaine. Pascal y oppose la fixité de l'instinct animal à la perfectibilité de la raison humaine. L'animal est enfermé dans un ordre de perfection bornée ; l'homme est produit pour l'infinité et capable de progrès indéfini. Cette conception de la perfectibilité humaine, fondée sur la mémoire et la transmission du savoir, a profondément influencé la philosophie moderne et la conception progressiste de l'histoire. Elle est au cœur de la pensée de Pascal et de la modernité."
		}
];