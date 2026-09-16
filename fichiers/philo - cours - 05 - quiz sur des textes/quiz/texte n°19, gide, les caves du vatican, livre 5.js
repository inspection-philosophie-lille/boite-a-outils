// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de GIDE";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
		texte: `« [1] — Un crime immotivé, continuait Lafcadio : quel embarras pour la police ! [2] Au demeurant, sur ce sacré talus, n'importe qui peut, d'un compartiment voisin, remarquer qu'une portière s'ouvre, et voir l'ombre du Chinois cabrioler. [3] Du moins les rideaux du couloir sont tirés… [4] Ce n'est pas tant des événements que j'ai curiosité, que de moi-même. [5] Tel se croit capable de tout, qui, devant que d'agir, recule… [6] Qu'il y a loin, entre l'imagination et le fait !… [7] Et pas plus le droit de reprendre son coup qu'aux échecs. [8] Bah ! qui prévoirait tous les risques, le jeu perdrait tout intérêt !… [9] Entre l'imagination d'un fait et… [10] Tiens ! le talus cesse. [11] Nous sommes sur un pont, je crois ; une rivière…
[12] Sur le fond de la vitre, à présent noire, les reflets apparaissaient plus clairement, Fleurissoire se pencha pour rectifier la position de sa cravate.
[13] — Là, sous la main, cette double fermeture — tandis qu'il est distrait et regarde au loin devant lui — joue, ma foi ! plus aisément encore qu'on eût cru. [14] Si je puis compter jusqu'à douze, sans me presser, avant de voir dans la campagne quelque feu, le tapir est sauvé. [15] Je commence : Une ; deux ; trois ; quatre ; (lentement ! lentement) cinq ; six ; sept ; huit ; neuf… Dix, un feu…
[16] Fleurissoire ne poussa pas un cri. »`,
		source: "André GIDE, Les caves du Vatican (1914), Livre V,1, 2"
};

// ============================================
// QUESTIONS DU QUIZ (50 questions)
// ============================================

const questions = [
	// Question n°1
	{
		question: "Question n°1 : Quel type de crime Lafcadio évoque-t-il au début du texte ?",
		answers: [
			"Un crime passionnel",
			"Un crime immotivé",
			"Un crime politique"
			],
			correct: 2,
			explanation: "Lafcadio parle d'« un crime immotivé ». Cette notion est centrale dans le texte et dans l'ensemble des Caves du Vatican : il s'agit d'un crime sans motif, gratuit, commis par pur exercice de la liberté. Gide explore ici le thème de l'acte gratuit, c'est-à-dire d'une action qui ne répond à aucune nécessité, à aucun intérêt, à aucune passion. C'est précisément l'absence de motif qui rend ce crime si déroutant pour la police et pour la morale traditionnelle."
		},

		// Question n°2
	{
		question: "Question n°2 : Pourquoi un crime immotivé est-il un embarras pour la police ?",
		answers: [
			"Parce qu'il est plus violent",
			"Parce qu'il est difficile à expliquer et à élucider",
			"Parce qu'il est impossible à commettre"
			],
			correct: 2,
			explanation: "Lafcadio s'exclame : « Un crime immotivé, quel embarras pour la police ! » La police cherche en effet des motifs : intérêt, jalousie, vengeance, passion. Un crime sans motif échappe à cette grille d'analyse. L'absence de mobile rend l'enquête impossible à orienter, car il n'y a pas de suspect logique. Cette difficulté policière est le signe de l'étrangeté radicale de l'acte gratuit, qui défie la rationalité ordinaire et les catégories morales et juridiques habituelles."
		},

		// Question n°3
	{
		question: "Question n°3 : Que risque Lafcadio en commettant son crime selon le texte ?",
		answers: [
			"Rien du tout",
			"D'être remarqué depuis un compartiment voisin",
			"D'être arrêté immédiatement"
			],
			correct: 2,
			explanation: "Lafcadio envisage le risque : « sur ce sacré talus, n'importe qui peut, d'un compartiment voisin, remarquer qu'une portière s'ouvre, et voir l'ombre du Chinois cabrioler. » Cette conscience du risque montre que Lafcadio n'agit pas par inconscience mais en connaissance de cause. Il évalue les dangers, cherche à les minimiser, mais accepte finalement de courir le risque. Cette lucidité dans le calcul du risque est caractéristique de l'acte gratuit gidien : il ne s'agit pas d'une impulsivité aveugle mais d'une décision réfléchie."
		},

		// Question n°4
{
		question: "Question n°4 : Quelle précaution Lafcadio note-t-il pour son crime ?",
		answers: [
			"Les rideaux du couloir sont tirés",
			"Le train est vide",
			"Il fait nuit noire"
			],
			correct: 1,
			explanation: "Lafcadio note : « Du moins les rideaux du couloir sont tirés… » Cette observation montre qu'il prend des précautions pour éviter d'être vu. Les rideaux tirés constituent une protection relative contre les regards indiscrets. Cette attention aux détails pratiques du crime contraste avec l'absence de motif : Lafcadio veut commettre un acte gratuit, mais il ne veut pas être pris. Le crime est gratuit dans sa motivation, non dans son exécution. Cette distinction est importante pour comprendre la nature de l'acte gratuit."
		},

		// Question n°5
{
	question: "Question n°5 : De quoi Lafcadio a-t-il curiosité selon ses propres mots ?",
	answers: [
			"Des événements",
			"De lui-même",
			"Des autres"
			],
			correct: 2,
			explanation: "Lafcadio déclare : « Ce n'est pas tant des événements que j'ai curiosité, que de moi-même. » Cette phrase révèle la véritable motivation de Lafcadio : ce n'est pas le crime en lui-même qui l'intéresse, mais ce qu'il va découvrir sur lui-même en le commettant. Le crime est un moyen de connaissance de soi, une expérience existentielle. Lafcadio veut savoir de quoi il est capable, si son imagination se traduira en acte. Cette dimension réflexive et expérimentale de l'acte gratuit est essentielle."
		},

		// Question n°6
{
	question: "Question n°6 : Que signifie l'expression « Tel se croit capable de tout, qui, devant que d'agir, recule » ?",
	answers: [
			"Beaucoup surestiment leurs capacités et reculent au moment d'agir",
			"Personne n'est capable de tout",
			"Tout le monde agit"
			],
			correct: 1,
			explanation: "L'expression « Tel se croit capable de tout, qui, devant que d'agir, recule » signifie que beaucoup de personnes se croient capables de tout mais reculent au moment d'agir. Lafcadio formule ici une observation psychologique : il y a un écart entre l'imagination et l'action. Beaucoup imaginent des actes audacieux mais ne les réalisent jamais. Lafcadio veut précisément franchir cet écart, passer de l'imagination à l'acte. C'est en cela que consiste l'acte gratuit : non pas seulement imaginer, mais exécuter."
		},

		// Question n°7
{
	question: "Question n°7 : Quelle distance Lafcadio souligne-t-il entre l'imagination et le fait ?",
	answers: [
			"Une distance infranchissable",
			"Une grande distance",
			"Une distance nulle"
			],
		correct: 2,
		explanation: "Lafcadio s'exclame : « Qu'il y a loin, entre l'imagination et le fait !… » Cette exclamation souligne la distance considérable qui sépare la conception mentale d'un acte et sa réalisation effective. Beaucoup de gens imaginent des actions qu'ils ne commettent jamais. Lafcadio veut précisément franchir cette distance, combler cet écart. C'est dans ce franchissement que réside la difficulté et la valeur de l'acte gratuit. La phrase sera reprise plus loin, interrompue, avant le crime."
		},

		// Question n°8
{
	question: "Question n°8 : À quoi Lafcadio compare-t-il l'irréversibilité de l'action ?",
	answers: [
			"À la vie",
			"À une partie d'échecs",
			"À un voyage"
			],
		correct: 2,
		explanation: "Lafcadio affirme : « Et pas plus le droit de reprendre son coup qu'aux échecs. » Il compare l'action à une partie d'échecs : une fois le coup joué, on ne peut pas le reprendre. Cette comparaison souligne le caractère irréversible de l'action, en particulier du crime. Contrairement à l'imagination, qui peut revenir en arrière et modifier ses scénarios, l'acte est définitif. Cette irréversibilité est ce qui donne à l'acte son poids et sa gravité. C'est aussi ce qui le rend si dangereux et si excitant."
		},

		// Question n°9
{
	question: "Question n°9 : Que pense Lafcadio du risque dans le jeu de l'action ?",
	answers: [
			"Il faut éviter tout risque",
			"Le risque fait l'intérêt du jeu",
			"Le risque est insignifiant"
			],
		correct: 2,
		explanation: "Lafcadio s'exclame : « Bah ! qui prévoirait tous les risques, le jeu perdrait tout intérêt !… » Cette phrase révèle son attitude face au risque : c'est le risque qui donne de l'intérêt à l'action. Si tout était prévisible et calculable, l'action perdrait sa saveur. Lafcadio cherche précisément l'incertitude, le danger, l'imprévu. Cette valorisation du risque est caractéristique de l'acte gratuit : il ne s'agit pas d'une action prudente et calculée, mais d'une action qui intègre une part d'incertitude et d'aventure."
		},

		// Question n°10
{
	question: "Question n°10 : Que remarque Lafcadio sur le paysage au moment du crime ?",
	answers: [
			"Le talus cesse, ils sont sur un pont, une rivière",
			"Le train entre dans un tunnel",
			"Il commence à pleuvoir"
			],
		correct: 1,
		explanation: "Lafcadio remarque : « Tiens ! le talus cesse. Nous sommes sur un pont, je crois ; une rivière… » Cette observation interrompt sa méditation sur l'acte gratuit. Le paysage change : le talus cesse, laissant place à un pont et à une rivière. Cette notation topographique crée un effet de réel et de suspense. Elle montre aussi que Lafcadio reste attentif à son environnement, malgré sa réflexion intérieure. Le changement de paysage accompagne le passage à l'acte imminent."
		},

		// Question n°11
{
	question: "Question n°11 : Que fait Fleurissoire pendant que Lafcadio médite ?",
	answers: [
			"Il dort",
			"Il se penche pour rectifier la position de sa cravate",
			"Il lit un journal"
			],
		correct: 2,
		explanation: "Le texte indique : « Fleurissoire se pencha pour rectifier la position de sa cravate. » Ce geste anodin et prosaïque contraste tragiquement avec la méditation criminelle de Lafcadio. Fleurissoire, ignorant totalement le danger qui le menace, s'occupe de détails vestimentaires. Ce contraste entre la banalité du geste et l'imminence du crime crée un effet de suspens et d'ironie tragique. Il souligne aussi l'innocence et la vulnérabilité de la victime."
		},

		// Question n°12
{
	question: "Question n°12 : Comment Lafcadio qualifie-t-il la facilité de la double fermeture ?",
	answers: [
			"Difficile à manœuvrer",
			"Plus aisée qu'on eût cru",
			"Impossible à ouvrir"
			],
		correct: 2,
		explanation: "Lafcadio constate : « cette double fermeture... joue, ma foi ! plus aisément encore qu'on eût cru. » Cette remarque souligne la facilité inattendue avec laquelle la portière peut être ouverte. Cette facilité rend le crime plus tentant et plus proche de sa réalisation. Elle suggère aussi une forme de complicité du destin : tout semble conspirer à rendre le crime possible et facile. Lafcadio note cette facilité avec un étonnement qui n'est pas exempt d'une certaine satisfaction."
		},

		// Question n°13
{
	question: "Question n°13 : Quel stratagème Lafcadio imagine-t-il pour décider du sort de Fleurissoire ?",
	answers: [
			"Tirer à pile ou face",
			"Compter jusqu'à douze avant de voir un feu dans la campagne",
			"Attendre le prochain arrêt"
			],
		correct: 2,
		explanation: "Lafcadio imagine un stratagème : « Si je puis compter jusqu'à douze, sans me presser, avant de voir dans la campagne quelque feu, le tapir est sauvé. » Ce procédé introduit une dimension de hasard et de jeu dans la décision criminelle. Le sort de Fleurissoire dépend d'un compte à rebours arbitraire. Cette arbitraire est précisément ce qui caractérise l'acte gratuit : la décision ne repose sur aucune raison, mais sur un pur caprice. Le crime devient un jeu avec le destin."
		},

		// Question n°14
{
	question: "Question n°14 : Qui est désigné par le terme « tapir » dans le texte ?",
	answers: [
			"Lafcadio lui-même",
			"Fleurissoire",
			"Un animal"
			],
		correct: 2,
		explanation: "Le terme « tapir » désigne Fleurissoire. Lafcadio affirme : « le tapir est sauvé ». Cette appellation animalière et péjorative révèle la distance que Lafcadio établit entre lui et sa victime. Fleurissoire n'est pas considéré comme un être humain à part entière mais comme un animal, un « tapir ». Cette déshumanisation de la victime facilite le passage à l'acte : il est plus facile de tuer un « tapir » qu'un homme. Elle révèle aussi le mépris de Lafcadio pour les conventions sociales et morales."
		},

		// Question n°15
{
	question: "Question n°15 : Comment Lafcadio compte-t-il ?",
	answers: [
			"Rapidement",
			"Lentement",
			"Sans compter"
			],
		correct: 2,
		explanation: "Lafcadio compte lentement : « (lentement ! lentement) cinq ; six ; sept ; huit ; neuf… » Cette lenteur est essentielle : elle prolonge le suspens et montre que Lafcadio prend son temps. Il ne se précipite pas. Cette maîtrise de soi contraste avec la violence de l'acte qu'il s'apprête à commettre. La lenteur du compte à rebours souligne aussi le caractère délibéré de l'acte : Lafcadio ne tue pas dans un moment d'impulsion, mais après une longue réflexion et un compte à rebours méthodique."
		},

		// Question n°16
{
	question: "Question n°16 : Que voit Lafcadio en comptant ?",
	answers: [
			"Un feu dans la campagne",
			"Une ville",
			"Un autre train"
			],
		correct: 2,
		explanation: "Lafcadio voit « un feu » dans la campagne : « Dix, un feu… » Cette apparition du feu avant la fin du compte à rebours signifie que Fleurissoire est « sauvé » selon les règles du jeu que Lafcadio s'est fixées. Mais le texte se termine par « Fleurissoire ne poussa pas un cri », ce qui suggère que le crime a bien eu lieu malgré tout. Ce décalage entre la règle du jeu et l'issue réelle souligne l'arbitraire et la mauvaise foi de Lafcadio : le jeu n'était qu'un prétexte pour justifier une décision déjà prise."
		},

		// Question n°17
{
	question: "Question n°17 : Que signifie l'expression « acte gratuit » dans le contexte du texte ?",
	answers: [
			"Un acte charitable",
			"Un acte sans motif, commis par pur exercice de la liberté",
			"Un acte involontaire"
			],
		correct: 2,
		explanation: "L'expression « acte gratuit » désigne un acte sans motif, commis par pur exercice de la liberté. C'est le thème central des Caves du Vatican. Lafcadio veut commettre un crime qui ne réponde à aucune nécessité : ni intérêt, ni passion, ni vengeance. L'acte gratuit est un défi à la rationalité et à la morale traditionnelle. Il pose la question de la liberté humaine : sommes-nous capables d'agir sans raison, par pur caprice ? L'acte gratuit est une expérience limite de la liberté."
		},

		// Question n°18
{
	question: "Question n°18 : Quel est le rapport entre l'acte gratuit et la connaissance de soi ?",
	answers: [
			"Ils sont indépendants",
			"L'acte gratuit est un moyen de se connaître soi-même",
			"L'acte gratuit empêche la connaissance de soi"
			],
		correct: 2,
		explanation: "Lafcadio affirme : « Ce n'est pas tant des événements que j'ai curiosité, que de moi-même. » L'acte gratuit est donc un moyen de se connaître soi-même. En commettant un acte extrême, Lafcadio veut découvrir sa vraie nature, ses capacités, ses limites. Le crime est une expérience existentielle, une exploration de soi. Cette dimension réflexive de l'acte gratuit le distingue du simple crime : il ne s'agit pas de nuire à autrui mais de se découvrir soi-même. La victime n'est qu'un moyen au service de cette quête de soi."
		},

		// Question n°19
{
	question: "Question n°19 : Pourquoi Lafcadio parle-t-il de « jeu » pour désigner son crime ?",
	answers: [
			"Parce que c'est amusant",
			"Parce qu'il introduit hasard et incertitude dans la décision",
			"Parce que c'est sans conséquence"
			],
		correct: 2,
		explanation: "Lafcadio parle de « jeu » pour désigner son crime parce qu'il introduit hasard et incertitude dans la décision. Le compte à rebours, l'observation d'un feu, tout cela transforme le crime en une partie de jeu. Cette dimension ludique est essentielle à l'acte gratuit : il ne s'agit pas d'un acte sérieux et rationnel, mais d'un acte qui intègre une part d'arbitraire et de gratuité. Le jeu est aussi une façon de se donner bonne conscience : si le sort décide, Lafcadio n'est pas vraiment responsable. C'est une forme de mauvaise foi."
		},

		// Question n°20
{
	question: "Question n°20 : Comment le texte crée-t-il un effet de suspense ?",
	answers: [
			"Par la description du paysage",
			"Par l'interruption de la phrase et le compte à rebours",
			"Par le dialogue"
			],
		correct: 2,
		explanation: "Le texte crée un effet de suspense par l'interruption de la phrase (« Entre l'imagination d'un fait et… ») et par le compte à rebours. La phrase inachevée suspend le lecteur, tandis que le compte à rebours crée une attente insoutenable. Le lecteur sait qu'un crime se prépare mais ne sait pas s'il sera commis. Cette tension narrative est renforcée par les notations du paysage (le talus qui cesse, le pont, la rivière) qui accompagnent la progression vers l'acte. Le suspense atteint son paroxysme avec « Dix, un feu… » suivi de « Fleurissoire ne poussa pas un cri »."
		},

		// Question n°21
{
	question: "Question n°21 : Que signifie l'expression « le tapir est sauvé » ?",
	answers: [
			"Fleurissoire va survivre",
			"Le compte à rebours a réussi et Lafcadio renonce au crime",
			"L'animal s'est échappé"
			],
		correct: 1,
		explanation: "L'expression « le tapir est sauvé » signifie que, selon la règle du jeu que Lafcadio s'est fixée, Fleurissoire devrait être épargné. Si Lafcadio voit un feu avant d'avoir compté jusqu'à douze, il renonce au crime. Mais le texte se termine par « Fleurissoire ne poussa pas un cri », ce qui suggère que le crime a eu lieu malgré tout. Ce décalage révèle l'arbitraire du jeu : les règles n'étaient qu'un prétexte, et Lafcadio était décidé à tuer quoi qu'il arrive. Le jeu était truqué dès le départ."
		},

		// Question n°22
{
	question: "Question n°22 : Comment Lafcadio considère-t-il sa victime ?",
	answers: [
			"Avec respect",
			"Comme un être humain digne de compassion",
			"Comme un animal, un « tapir »"
			],
		correct: 2,
		explanation: "Lafcadio considère sa victime comme un animal, un « tapir ». Cette déshumanisation est essentielle pour comprendre comment il peut commettre son crime. En réduisant Fleurissoire à un animal, Lafcadio se libère des scrupules moraux qui accompagneraient normalement un meurtre. Il ne tue pas un homme mais un « tapir », c'est-à-dire une créature insignifiante. Cette déshumanisation révèle aussi le mépris aristocratique de Lafcadio pour les bourgeois médiocres, et plus profondément, la tentation nihiliste de l'acte gratuit."
		},

		// Question n°23
{
	question: "Question n°23 : Quel est le rôle du hasard dans la décision de Lafcadio ?",
	answers: [
			"Le hasard est absent",
			"Le hasard décide du sort de Fleurissoire",
			"Le hasard empêche le crime"
			],
		correct: 2,
		explanation: "Le hasard joue un rôle central dans la décision de Lafcadio : c'est le compte à rebours et l'apparition éventuelle d'un feu qui doivent décider du sort de Fleurissoire. Lafcadio s'en remet au hasard pour trancher. Cette délégation de la décision au hasard est paradoxale : elle permet à Lafcadio de ne pas assumer pleinement la responsabilité de son acte. En même temps, c'est lui qui a fixé les règles du jeu. Le hasard n'est donc qu'une apparence : la décision réelle reste celle de Lafcadio. C'est une forme de mauvaise foi."
		},

		// Question n°24
{
	question: "Question n°24 : Que révèle le geste de Fleurissoire rectifiant sa cravate ?",
	answers: [
			"Sa coquetterie",
			"Sa naïveté et son innocence face au danger",
			"Sa peur"
			],
		correct: 2,
		explanation: "Le geste de Fleurissoire rectifiant sa cravate révèle sa naïveté et son innocence face au danger. Il ne se doute de rien, s'occupe de détails vestimentaires, alors que la mort le menace. Ce contraste entre l'innocence de la victime et la préméditation du criminel crée un effet de pathétique et d'ironie tragique. Il souligne aussi l'absurdité du crime : Fleurissoire est tué sans raison, sans même savoir pourquoi. C'est cette absurdité qui fait la dimension tragique et scandaleuse de l'acte gratuit."
		},

		// Question n°25
{
	question: "Question n°25 : Quel est le thème principal de ce passage ?",
	answers: [
			"L'amour",
			"L'acte gratuit et la liberté",
			"La guerre"
			],
		correct: 2,
		explanation: "Le thème principal de ce passage est l'acte gratuit et la liberté. Gide explore ici la possibilité d'un acte sans motif, commis par pur exercice de la liberté. Lafcadio veut savoir s'il est capable de passer de l'imagination à l'acte, de commettre un crime gratuit. Ce passage est l'un des plus célèbres des Caves du Vatican et illustre la philosophie de l'acte gratuit que Gide développera dans toute son œuvre. Il pose la question de la liberté humaine et de ses limites."
		},

		// Question n°26
{
	question: "Question n°26 : Comment Gide crée-t-il un contraste entre Lafcadio et Fleurissoire ?",
	answers: [
			"Par leurs vêtements",
			"Par l'opposition entre la méditation criminelle et l'occupation prosaïque",
			"Par leur âge"
			],
		correct: 2,
		explanation: "Gide crée un contraste entre Lafcadio et Fleurissoire par l'opposition entre la méditation criminelle de l'un et l'occupation prosaïque de l'autre. Lafcadio réfléchit à l'acte gratuit, au crime, à la liberté ; Fleurissoire rectifie sa cravate. Ce contraste est tragique et ironique : celui qui pense à la mort est en pleine activité intellectuelle, celui qui va mourir s'occupe de détails insignifiants. Cette opposition souligne aussi la distance qui sépare le criminel de sa victime : l'un est un intellectuel tourmenté, l'autre un bourgeois naïf."
		},

		// Question n°27
{
	question: "Question n°27 : Que signifie l'interruption de la phrase « Entre l'imagination d'un fait et… » ?",
	answers: [
			"Une erreur de l'auteur",
			"Le passage à l'acte interrompt la réflexion",
			"Un trou de mémoire"
			],
		correct: 2,
		explanation: "L'interruption de la phrase « Entre l'imagination d'un fait et… » signifie que le passage à l'acte interrompt la réflexion. Lafcadio ne termine pas sa phrase car il est interrompu par l'observation du paysage (« Tiens ! le talus cesse ») puis par le crime lui-même. Cette interruption est significative : elle marque le passage de la théorie à la pratique, de l'imagination à l'acte. La phrase inachevée suggère que la réflexion ne peut aller jusqu'au bout : l'acte est un saut dans l'inconnu qui échappe au discours."
		},

		// Question n°28
{
	question: "Question n°28 : Quel est le rôle des rideaux tirés dans le récit ?",
	answers: [
			"Créer une atmosphère intimiste",
			"Protéger Lafcadio des regards pendant le crime",
			"Empêcher Fleurissoire de voir le paysage"
			],
		correct: 2,
		explanation: "Les rideaux tirés ont pour rôle de protéger Lafcadio des regards pendant le crime. Lafcadio note avec soulagement : « Du moins les rideaux du couloir sont tirés… » Cette précaution est essentielle pour que le crime puisse être commis sans témoin. Elle montre que Lafcadio calcule les risques et prend des dispositions pratiques. Mais elle crée aussi une atmosphère d'intimité et de secret propice au crime. Les rideaux tirés isolent les deux hommes du reste du monde, créant un huis clos tragique."
		},

		// Question n°29
{
	question: "Question n°29 : Que signifie l'expression « le jeu perdrait tout intérêt » ?",
	answers: [
			"Le crime serait moins amusant",
			"Le risque est ce qui donne de la valeur à l'action",
			"Le crime serait impossible"
			],
		correct: 2,
		explanation: "L'expression « le jeu perdrait tout intérêt » signifie que le risque est ce qui donne de la valeur à l'action. Si tout était prévisible et calculable, l'acte n'aurait plus d'intérêt. Lafcadio recherche précisément l'incertitude, le danger, l'imprévu. Cette valorisation du risque est caractéristique de l'acte gratuit : il s'agit d'une action qui intègre une part d'aventure et d'inconnu. Le crime n'est pas seulement un moyen de se connaître, c'est aussi un jeu excitant avec le destin."
		},

		// Question n°30
{
	question: "Question n°30 : Comment Lafcadio justifie-t-il son crime ?",
	answers: [
			"Par la vengeance",
			"Par la curiosité de soi-même et le désir d'exercer sa liberté",
			"Par la nécessité"
			],
		correct: 2,
		explanation: "Lafcadio justifie son crime par la curiosité de soi-même et le désir d'exercer sa liberté. Il déclare : « Ce n'est pas tant des événements que j'ai curiosité, que de moi-même. » Le crime est un moyen de se connaître, de tester sa liberté, de passer de l'imagination à l'acte. Il ne s'agit pas de nuire à Fleurissoire mais de faire une expérience sur soi-même. Cette justification est profondément immorale : la victime n'est qu'un moyen au service de la quête de soi du criminel. C'est la logique de l'acte gratuit."
		},

		// Question n°31
{
	question: "Question n°31 : Quel est le rapport entre Lafcadio et la morale dans ce passage ?",
	answers: [
			"Il respecte la morale",
			"Il la transgresse par l'acte gratuit",
			"Il l'ignore"
			],
		correct: 2,
		explanation: "Le rapport entre Lafcadio et la morale dans ce passage est un rapport de transgression. Lafcadio commet un crime sans motif, ce qui est une violation radicale de la morale traditionnelle. L'acte gratuit remet en cause l'idée que toute action doit avoir une justification morale. En tuant sans raison, Lafcadio affirme sa liberté au-delà du bien et du mal. Il commet ce que la morale réprouve absolument : un meurtre gratuit. Cette transgression est au cœur de l'acte gratuit gidien."
		},

		// Question n°32
{
	question: "Question n°32 : Comment le compte à rebours fonctionne-t-il comme procédé narratif ?",
	answers: [
			"Il ralentit le récit",
			"Il crée un suspense insoutenable",
			"Il accélère le récit"
			],
		correct: 2,
		explanation: "Le compte à rebours fonctionne comme un procédé narratif qui crée un suspense insoutenable. En égrenant les chiffres, Gide suspend le lecteur dans l'attente de l'issue. Chaque chiffre rapproche du dénouement. La lenteur du compte (« lentement ! lentement ») accentue cette tension. Le lecteur sait qu'un crime peut être commis mais ne sait pas s'il le sera. Cette technique narrative, empruntée au roman d'aventure et au cinéma, est ici utilisée pour créer un moment de vérité existentielle : le passage à l'acte de Lafcadio."
		},

		// Question n°33
{
	question: "Question n°33 : Quelle est la signification de l'expression « devant que d'agir, recule » ?",
	answers: [
			"Beaucoup de gens reculent au moment d'agir",
			"Personne n'agit",
			"L'action est facile"
			],
		correct: 2,
		explanation: "L'expression « devant que d'agir, recule » signifie que beaucoup de gens reculent au moment d'agir. C'est une observation psychologique de Lafcadio : entre l'imagination et l'action, il y a un pas que beaucoup ne franchissent pas. La peur, les scrupules, l'hésitation empêchent de passer à l'acte. Lafcadio veut précisément franchir ce pas, ne pas reculer. C'est en quoi consiste l'acte gratuit : non pas seulement imaginer, mais exécuter. Le passage à l'acte est la véritable épreuve de la liberté."
		},

		// Question n°34
{
	question: "Question n°34 : Quel est le rôle du paysage dans le récit ?",
	answers: [
			"Décorer le texte",
			"Accompagner et rythmer la progression vers le crime",
			"Distraire le lecteur"
			],
		correct: 2,
		explanation: "Le paysage joue un rôle important dans le récit : il accompagne et rythme la progression vers le crime. Le talus qui cesse, le pont, la rivière, la campagne où apparaît un feu : tous ces éléments marquent les étapes du compte à rebours et du passage à l'acte. Le paysage n'est pas un simple décor mais un élément actif du suspense. Il crée aussi un contraste entre la beauté et la sérénité de la nature et l'horreur du crime qui se prépare. Cette ironie du contraste est caractéristique du style de Gide."
		},

		// Question n°35
{
	question: "Question n°35 : Comment Lafcadio considère-t-il la vie de Fleurissoire ?",
	answers: [
			"Comme sacrée",
			"Comme insignifiante et disponible pour son expérience",
			"Comme précieuse"
			],
		correct: 2,
		explanation: "Lafcadio considère la vie de Fleurissoire comme insignifiante et disponible pour son expérience. En l'appelant « tapir », il la réduit à celle d'un animal. Cette dévalorisation de la vie d'autrui est nécessaire pour commettre l'acte gratuit. Lafcadio ne voit pas en Fleurissoire un être humain avec une dignité propre, mais un simple moyen pour son expérience de soi. Cette conception est profondément immorale et révèle la dimension nihiliste de l'acte gratuit. Elle pose la question des limites de la liberté : peut-on tout faire au nom de la liberté ?"
		},

		// Question n°36
{
	question: "Question n°36 : Que signifie l'expression « crime immotivé » ?",
	answers: [
			"Un crime sans mobile apparent",
			"Un crime passionnel",
			"Un crime politique"
			],
		correct: 1,
		explanation: "L'expression « crime immotivé » désigne un crime sans mobile apparent. Contrairement aux crimes habituels qui ont des motifs (intérêt, jalousie, vengeance), le crime immotivé ne répond à aucune raison identifiable. C'est cette absence de motif qui le rend si déroutant pour la police et si scandaleux pour la morale. L'acte gratuit est précisément un crime immotivé : il est commis par pur exercice de la liberté, sans aucune nécessité. Cette notion est au cœur de la philosophie de l'acte gratuit chez Gide."
		},

		// Question n°37
{
	question: "Question n°37 : Quel est le rapport entre l'acte gratuit et la liberté selon Gide ?",
	answers: [
			"L'acte gratuit est une illusion de liberté",
			"L'acte gratuit est l'exercice suprême de la liberté",
			"L'acte gratuit limite la liberté"
			],
		correct: 2,
		explanation: "Selon Gide, l'acte gratuit est l'exercice suprême de la liberté. En commettant un acte sans motif, Lafcadio affirme sa liberté au-delà de toute détermination. Il ne se laisse pas guider par les raisons, les intérêts ou les passions. Il agit par pur caprice, par pur exercice de sa volonté. L'acte gratuit est donc la manifestation la plus pure de la liberté humaine. Mais cette liberté est ambiguë : elle peut mener au crime et au nihilisme. Gide explore cette ambiguïté tout au long des Caves du Vatican."
		},

		// Question n°38
{
	question: "Question n°38 : Comment le texte illustre-t-il l'écart entre imagination et action ?",
	answers: [
			"Par des discours",
			"Par le passage de la méditation au crime effectif",
			"Par des descriptions"
			],
		correct: 2,
		explanation: "Le texte illustre l'écart entre imagination et action par le passage de la méditation au crime effectif. Lafcadio réfléchit longuement à l'acte gratuit, imagine le crime, calcule les risques. Puis, à un moment donné, il passe à l'acte. Ce passage est marqué par l'interruption de la phrase, l'observation du paysage, le compte à rebours. Le crime effectif (« Fleurissoire ne poussa pas un cri ») est l'accomplissement de ce qui n'était qu'imagination. Cet écart entre la théorie et la pratique est au cœur de la réflexion de Lafcadio."
		},

		// Question n°39
{
	question: "Question n°39 : Quel est le rôle de la double fermeture dans le crime ?",
	answers: [
			"Elle empêche le crime",
			"Elle facilite l'ouverture de la portière",
			"Elle retient Fleurissoire"
			],
		correct: 2,
		explanation: "La double fermeture joue un rôle pratique dans le crime : elle facilite l'ouverture de la portière. Lafcadio constate qu'elle « joue, ma foi ! plus aisément encore qu'on eût cru ». Cette facilité inattendue rend le crime plus proche et plus tentant. Elle suggère aussi une forme de complicité du destin : tout semble conspirer à rendre le crime possible. La double fermeture est donc à la fois un élément technique du crime et un symbole de la facilité avec laquelle on peut passer à l'acte."
		},

		// Question n°40
{
	question: "Question n°40 : Comment Gide décrit-il le moment du crime ?",
	answers: [
			"De manière explicite et violente",
			"De manière elliptique et suggérée",
			"De manière comique"
			],
		correct: 2,
		explanation: "Gide décrit le moment du crime de manière elliptique et suggérée. Le texte se termine par « Fleurissoire ne poussa pas un cri » sans décrire explicitement le geste criminel. Cette ellipse crée un effet de suspension et laisse au lecteur le soin d'imaginer l'acte. Elle renforce aussi l'horreur du crime en ne le montrant pas directement. Ce choix narratif est caractéristique du style de Gide : suggérer plutôt que montrer, laisser le lecteur complice de l'imagination. L'acte gratuit lui-même reste en partie mystérieux, insaisissable."
		},

		// Question n°41
{
	question: "Question n°41 : Quelle est la signification de l'expression « qu'il y a loin, entre l'imagination et le fait » ?",
	answers: [
			"Il n'y a pas de différence",
			"Il y a un abîme entre concevoir un acte et le commettre",
			"L'imagination est supérieure à l'action"
			],
		correct: 2,
		explanation: "L'expression « qu'il y a loin, entre l'imagination et le fait » signifie qu'il y a un abîme entre concevoir un acte et le commettre. Beaucoup de gens imaginent des actions qu'ils ne réalisent jamais. Le passage de l'idée à l'acte est une épreuve décisive. Lafcadio veut précisément franchir cet abîme, prouver qu'il est capable de passer de l'imagination à l'action. C'est en cela que consiste l'acte gratuit : non pas seulement imaginer, mais exécuter. Cette phrase sera interrompue plus loin, signe que l'acte dépasse le discours."
		},

		// Question n°42
{
	question: "Question n°42 : Comment Lafcadio envisage-t-il les conséquences de son acte ?",
	answers: [
			"Il les ignore totalement",
			"Il les calcule mais accepte le risque",
			"Il en est terrifié"
			],
		correct: 2,
		explanation: "Lafcadio envisage les conséquences de son acte : il calcule les risques, prend des précautions (rideaux tirés, double fermeture), mais accepte finalement le risque. Il ne s'agit pas d'une imprudence aveugle mais d'une décision réfléchie qui intègre une part d'incertitude. Lafcadio sait qu'il peut être découvert, mais il accepte ce risque car c'est le risque qui donne de l'intérêt au jeu. Cette attitude combine lucidité et audace. Elle montre que l'acte gratuit n'est pas un acte irréfléchi mais un acte qui intègre consciemment le risque et l'incertitude."
		},

		// Question n°43
{
	question: "Question n°43 : Quel est le rapport entre l'acte gratuit et l'immoralité ?",
	answers: [
			"L'acte gratuit est moral",
			"L'acte gratuit est immoral car il nie la valeur de la vie d'autrui",
			"L'acte gratuit est indifférent à la morale"
			],
		correct: 2,
		explanation: "L'acte gratuit est immoral car il nie la valeur de la vie d'autrui. En tuant Fleurissoire sans motif, Lafcadio traite un être humain comme un simple moyen au service de son expérience de soi. Il le réduit à un « tapir », un animal insignifiant. Cette déshumanisation de la victime est le signe de l'immoralité de l'acte gratuit. L'acte gratuit remet en cause les fondements de la morale : la valeur de la vie humaine, le respect d'autrui, la responsabilité. Gide ne cautionne pas cet acte : il l'explore comme une expérience limite de la liberté."
		},

		// Question n°44
{
	question: "Question n°44 : Comment le texte illustre-t-il l'idée que « le jeu perdrait tout intérêt » sans risque ?",
	answers: [
			"Par le compte à rebours",
			"Par la description du crime",
			"Par le dialogue"
			],
		correct: 1,
		explanation: "Le texte illustre l'idée que le jeu perdrait tout intérêt sans risque par le compte à rebours. Ce procédé introduit une part d'incertitude et de hasard dans la décision. Lafcadio ne sait pas s'il verra un feu avant d'avoir compté jusqu'à douze. Cette incertitude est précisément ce qui rend le moment intéressant et excitant. Sans ce risque, le crime ne serait qu'une exécution banale, sans enjeu. Le risque transforme le crime en jeu, en aventure, en expérience existentielle. C'est cette dimension ludique et risquée qui caractérise l'acte gratuit."
		},

		// Question n°45
{
	question: "Question n°45 : Quelle est la place de la préméditation dans ce crime ?",
	answers: [
			"Le crime est impulsif",
			"Le crime est longuement prémédité",
			"Le crime est accidentel"
			],
		correct: 2,
		explanation: "La place de la préméditation dans ce crime est centrale. Lafcadio réfléchit longuement avant d'agir : il calcule les risques, prévoit les précautions, fixe les règles du jeu. Le crime n'est pas impulsif mais longuement prémédité. Cette préméditation est paradoxale : un crime gratuit devrait être spontané, improvisé. Mais Lafcadio le prépare minutieusement. Cette contradiction révèle l'ambiguïté de l'acte gratuit : il veut être gratuit mais il est calculé. La préméditation est peut-être une façon de se rassurer, de maîtriser l'acte, alors que la gratuité pure serait insoutenable."
		},

		// Question n°46
{
	question: "Question n°46 : Comment Lafcadio se justifie-t-il auprès de lui-même ?",
	answers: [
			"Par la vengeance",
			"Par la curiosité de soi et l'exercice de la liberté",
			"Par la nécessité"
			],
		correct: 2,
		explanation: "Lafcadio se justifie auprès de lui-même par la curiosité de soi et l'exercice de la liberté. Il déclare : « Ce n'est pas tant des événements que j'ai curiosité, que de moi-même. » Le crime est un moyen de se connaître, de tester sa liberté, de passer de l'imagination à l'acte. Cette auto-justification est caractéristique de l'acte gratuit : il ne s'agit pas de nuire à autrui mais de faire une expérience sur soi. Mais cette justification est illusoire : elle masque l'immoralité de l'acte et la déshumanisation de la victime. Lafcadio est en partie de mauvaise foi."
		},

		// Question n°47
{
	question: "Question n°47 : Quel est le rôle de l'observation « les rideaux du couloir sont tirés » ?",
	answers: [
			"Créer une atmosphère",
			"Montrer que Lafcadio prend des précautions",
			"Décorer le texte"
			],
		correct: 2,
		explanation: "L'observation « les rideaux du couloir sont tirés » montre que Lafcadio prend des précautions. Cette notation pratique révèle que Lafcadio ne veut pas être vu. Il calcule les risques et prend des dispositions pour les minimiser. Cette précaution contraste avec la gratuité du crime : si le crime est vraiment gratuit, pourquoi prendre des précautions ? La réponse est que Lafcadio veut commettre l'acte gratuit sans en subir les conséquences. Il veut être libre mais pas puni. Cette contradiction révèle l'ambiguïté de sa position."
		},

		// Question n°48
{
	question: "Question n°48 : Comment le texte met-il en scène le passage à l'acte ?",
	answers: [
			"Par une description explicite",
			"Par une ellipse et une phrase inachevée",
			"Par un dialogue"
			],
		correct: 2,
		explanation: "Le texte met en scène le passage à l'acte par une ellipse et une phrase inachevée. La phrase « Entre l'imagination d'un fait et… » est interrompue par l'observation du paysage. Le crime lui-même n'est pas décrit : le texte se termine par « Fleurissoire ne poussa pas un cri ». Cette ellipse crée un effet de suspension et laisse le lecteur imaginer l'acte. Elle suggère aussi que l'acte est indicible, qu'il échappe au langage. Le passage à l'acte est un saut dans l'inconnu qui ne peut être totalement représenté."
		},

		// Question n°49
{
	question: "Question n°49 : Quelle est la signification philosophique de l'acte gratuit ?",
	answers: [
			"C'est un acte sans importance",
			"C'est une expérience limite de la liberté humaine",
			"C'est un acte moral"
			],
		correct: 2,
		explanation: "La signification philosophique de l'acte gratuit est celle d'une expérience limite de la liberté humaine. En commettant un acte sans motif, Lafcadio teste les limites de sa liberté : peut-il agir sans raison, par pur caprice ? L'acte gratuit pose la question de la nature de la liberté : sommes-nous déterminés par des causes ou pouvons-nous agir gratuitement ? Cette question est au cœur de la philosophie de Gide et de l'existentialisme. L'acte gratuit est une réponse ambiguë : il affirme la liberté mais révèle aussi son caractère destructeur et nihiliste."
		},

		// Question n°50
{
	question: "Question n°50 : Quelle est l'importance de ce passage dans l'histoire de la littérature ?",
	answers: [
			"C'est un passage mineur",
			"C'est un passage majeur qui illustre la notion d'acte gratuit",
			"C'est un passage comique"
			],
		correct: 2,
		explanation: "Ce passage des Caves du Vatican est un passage majeur qui illustre la notion d'acte gratuit. Il est l'un des textes les plus célèbres de Gide et de la littérature française du XXe siècle. La scène du crime de Lafcadio est devenue emblématique de l'acte gratuit, concept qui a influencé de nombreux écrivains et philosophes, notamment les existentialistes. Ce passage pose des questions fondamentales sur la liberté, la morale, la responsabilité. Il marque une étape importante dans l'histoire du roman moderne, qui explore les profondeurs de la psyché et les limites de la liberté humaine."
		}
];