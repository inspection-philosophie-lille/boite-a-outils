// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Descartes";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
		texte: `« [1] … si je considère la faculté de concevoir qui est en moi, je trouve qu'elle est d'une fort petite étendue, et grandement limitée, et tout ensemble je me représente l'idée d'une autre faculté beaucoup plus ample, et même infinie ; et de cela seul que je puis me représenter son idée, je connais sans difficulté qu'elle appartient à la nature de Dieu. [2] En même façon, si j'examine la mémoire, ou l'imagination, ou quelque autre puissance, je n'en trouve aucune qui ne soit en moi très petite et bornée, et qui en Dieu ne soit immense et infinie. [3] Il n'y a que la seule volonté, que j'expérimente en moi être si grande, que je ne conçois point l'idée d'aucune autre plus ample et plus étendue : en sorte que c'est elle principalement qui me fait connaître que je porte l'image et la ressemblance de Dieu. [4] Car, encore qu'elle soit incomparablement plus grande dans Dieu, que dans moi, soit à raison de la connaissance et de la puissance, qui s'y trouvant jointes la rendent plus ferme et plus efficace, soit à raison de l'objet, d'autant qu'elle se porte et s'étend infiniment à plus de choses ; elle ne me semble pas toutefois plus grande, si je la considère formellement et précisément en elle-même. [5] Car elle consiste seulement en ce que nous pouvons faire une chose, ou ne la faire pas (c'est-à-dire affirmer ou nier, poursuivre ou fuir), ou plutôt seulement en ce que, pour affirmer ou nier, poursuivre ou fuir les choses que l'entendement nous propose, nous agissons en telle sorte que nous ne sentons point qu'aucune force extérieure nous y contraigne. [6] Car, afin que je sois libre, il n'est pas nécessaire que je sois indifférent à choisir l'un ou l'autre des deux contraires ; mais plutôt, d'autant plus que je penche vers l'un, soit que je connaisse évidemment que le bien et le vrai s'y rencontrent, soit que Dieu dispose ainsi l'intérieur de ma pensée, d'autant plus librement j'en fais choix et je l'embrasse. [7] Et certes la grâce divine et la connaissance naturelle, bien loin de diminuer ma liberté, l'augmentent plutôt, et la fortifient. [8] De façon que cette indifférence que je sens, lorsque je ne suis point emporté vers un côté plutôt que vers un autre par le poids d'aucune raison, est le plus bas degré de la liberté, et fait plutôt paraître un défaut dans la connaissance, qu'une perfection dans la volonté, car si je connaissais toujours clairement ce qui est vrai et ce qui est bon, je ne serais jamais en peine de délibérer quel jugement et quel choix je devrais faire ; et ainsi je serais entièrement libre, sans jamais être indifférent. »`,

		source: "DESCARTES, Méditations métaphysiques, 4ᵉ éd., Adam et Tannery, Paris, Vrin, t. IX-1, [1647], pp.43-45."
};

// ============================================
// QUESTIONS DU QUIZ (50 questions)
// ============================================

const questions = [
		// Question n°1
		{
				question: "Question n°1 : Que découvre Descartes en examinant sa faculté de concevoir ?",
				answers: [
						"qu'elle est infinie et parfaite",
						"qu'elle est très petite et limitée",
						"qu'elle est égale à celle de Dieu"
				],
				correct: 2,
				explanation: "Descartes déclare : « je trouve qu'elle est d'une fort petite étendue, et grandement limitée. » Cette constatation fondamentale révèle la finitude essentielle de l'entendement humain. Cette reconnaissance des limites de la raison constitue le point de départ de la démarche cartésienne qui, partant du doute, cherche à établir des connaissances certaines sur des fondements solides."
		},

		// Question n°2
		{
				question: "Question n°2 : Que représente-t-il comme idée d'une autre faculté ?",
				answers: [
						"une faculté beaucoup plus ample et même infinie",
						"une faculté semblable à la sienne",
						"une faculté uniquement humaine"
				],
				correct: 1,
				explanation: "Il se représente « l'idée d'une autre faculté beaucoup plus ample, et même infinie » qu'il attribue à Dieu. Cette idée d'infini joue un rôle crucial dans l'argumentation cartésienne car elle sert de preuve ontologique de l'existence divine. Selon le principe de causalité cartésien, l'effet ne peut contenir plus de réalité que sa cause, donc l'idée d'infini ne peut provenir que d'un être effectivement infini."
		},

		// Question n°3
		{
				question: "Question n°3 : À quelle nature appartient cette faculté infinie selon Descartes ?",
				answers: [
						"à la nature humaine",
						"à la nature de Dieu",
						"à la nature des anges"
				],
				correct: 2,
				explanation: "« je connais sans difficulté qu'elle appartient à la nature de Dieu. » Cette attribution découle logiquement du principe cartésien selon lequel les perfections infinies ne peuvent appartenir qu'à un être infiniment parfait. Cette identification est essentielle à l'édifice métaphysique cartésien, qui fonde la certitude des connaissances humaines sur l'existence et la véracité divines."
		},

		// Question n°4
		{
				question: "Question n°4 : En examinant la mémoire et l'imagination, que constate Descartes ?",
				answers: [
						"qu'elles sont infinies en lui",
						"qu'elles sont très petites et bornées en lui, mais infinies en Dieu",
						"qu'elles n'existent pas en Dieu"
				],
				correct: 2,
				explanation: "« je n'en trouve aucune qui ne soit en moi très petite et bornée, et qui en Dieu ne soit immense et infinie. » Cette comparaison systématique met en évidence la distance ontologique entre la créature et le créateur. Toutes les facultés humaines, à l'exception notable de la volonté, présentent ce même schéma de finitude chez l'homme et de perfection infinie chez Dieu, soulignant ainsi la dépendance radicale de la créature."
		},

		// Question n°5
		{
				question: "Question n°5 : Quelle est la seule faculté que Descartes expérimente comme très grande en lui ?",
				answers: [
						"l'entendement",
						"la volonté",
						"l'imagination"
				],
				correct: 2,
				explanation: "« Il n'y a que la seule volonté, que j'expérimente en moi être si grande. » Cette exception capitale établit la spécificité anthropologique de la volonté dans la philosophie cartésienne. Contrairement aux autres facultés qui sont intrinsèquement limitées, la volonté présente une étendue et une puissance qui l'apparentent à la volonté divine, faisant de l'homme une exception dans la création."
		},

		// Question n°6
		{
				question: "Question n°6 : Qu'est-ce qui fait connaître à Descartes qu'il porte l'image de Dieu ?",
				answers: [
						"sa capacité de raisonner",
						"sa volonté",
						"sa mémoire"
				],
				correct: 2,
				explanation: "« c'est elle [la volonté] principalement qui me fait connaître que je porte l'image et la ressemblance de Dieu. » Cette affirmation révèle le statut privilégié de la volonté dans l'anthropologie cartésienne. La ressemblance avec Dieu ne réside pas dans l'entendement limité ni dans les autres facultés finies, mais dans la volonté libre et infinie dans son essence formelle, ce qui fonde la dignité unique de l'être humain."
		},

		// Question n°7
		{
				question: "Question n°7 : En quoi consiste formellement la volonté selon Descartes ?",
				answers: [
						"dans le fait d'être contraint par des forces extérieures",
						"dans le fait de pouvoir faire ou ne pas faire une chose sans contrainte extérieure",
						"dans l'indifférence complète"
				],
				correct: 2,
				explanation: "« elle consiste seulement en ce que nous pouvons faire une chose, ou ne la faire pas... sans qu'aucune force extérieure nous y contraigne. » Cette définition formelle isole l'essence de la volonté comme pouvoir d'autodétermination. L'absence de contrainte extérieure est le critère essentiel qui distingue l'acte volontaire de l'action forcée ou déterminée de l'extérieur, marquant ainsi la spécificité de la causalité libre."
		},

		// Question n°8
		{
				question: "Question n°8 : Pour Descartes, que faut-il pour être libre ?",
				answers: [
						"être indifférent entre deux options",
						"ne pas être indifférent, mais pencher vers un choix avec connaissance",
						"être déterminé par des causes extérieures"
				],
				correct: 2,
				explanation: "« afin que je sois libre, il n'est pas nécessaire que je sois indifférent... d'autant plus que je penche vers l'un... d'autant plus librement j'en fais choix. » Cette thèse révolutionne la conception traditionnelle de la liberté. Descartes rejette l'idée que la liberté exige l'indifférence et montre au contraire qu'elle culmine dans le choix éclairé par la raison, où la volonté se détermine spontanément vers ce que l'entendement lui présente comme clairement bon et vrai."
		},

		// Question n°9
		{
				question: "Question n°9 : Quel effet ont la grâce divine et la connaissance naturelle sur la liberté selon Descartes ?",
				answers: [
						"elles la diminuent",
						"elles l'augmentent et la fortifient",
						"elles la rendent indifférente"
				],
				correct: 2,
				explanation: "« la grâce divine et la connaissance naturelle, bien loin de diminuer ma liberté, l'augmentent plutôt, et la fortifient. » Cette affirmation concilie la liberté humaine avec l'action divine et le progrès de la connaissance rationnelle. Pour Descartes, la grâce et la raison ne sont pas des menaces pour la liberté mais des moyens de son perfectionnement et de son accomplissement, car elles éclairent la volonté sans la contraindre, lui permettant ainsi de se déterminer plus parfaitement."
		},

		// Question n°10
		{
				question: "Question n°10 : Comment Descartes qualifie-t-il l'indifférence ?",
				answers: [
						"comme le plus haut degré de la liberté",
						"comme le plus bas degré de la liberté",
						"comme l'essence même de la liberté"
				],
				correct: 2,
				explanation: "« cette indifférence... est le plus bas degré de la liberté. » Cette qualification hiérarchise les degrés de liberté et renverse la conception commune héritée de la scolastique. L'indifférence n'est pas la perfection de la liberté mais son état le plus imparfait, correspondant à l'ignorance ou à l'incertitude, où la volonté balance entre des options sans raison déterminante."
		},

		// Question n°11
		{
				question: "Question n°11 : Que révèle l'indifférence selon Descartes ?",
				answers: [
						"une perfection de la volonté",
						"un défaut dans la connaissance",
						"la présence de la grâce divine"
				],
				correct: 2,
				explanation: "« fait plutôt paraître un défaut dans la connaissance, qu'une perfection dans la volonté. » Cette analyse déplace le problème de la liberté du domaine de la volonté à celui de la connaissance. L'indifférence n'est pas un pouvoir positif de la volonté mais le signe d'une connaissance insuffisante qui empêche la détermination rationnelle du choix. Elle indique donc une limitation cognitive plutôt qu'une capacité volontaire."
		},

		// Question n°12
		{
				question: "Question n°12 : Quand serions-nous entièrement libres selon Descartes ?",
				answers: [
						"quand nous serions toujours indifférents",
						"quand nous connaîtrions toujours clairement le vrai et le bien",
						"quand nous serions déterminés par nos passions"
				],
				correct: 2,
				explanation: "« si je connaissais toujours clairement ce qui est vrai et ce qui est bon... je serais entièrement libre, sans jamais être indifférent. » Cette conception idéale de la liberté la présente comme l'accord parfait entre la volonté et la connaissance. La liberté parfaite n'est pas le pouvoir de choisir sans raison mais la capacité de suivre nécessairement l'évidence rationnelle, où la volonté se détermine spontanément vers ce que l'entendement lui présente comme indubitablement vrai et bon."
		},

		// Question n°13
		{
				question: "Question n°13 : Pourquoi la volonté divine est-elle plus grande que la volonté humaine selon Descartes ?",
				answers: [
						"formellement, dans son essence même",
						"par la connaissance et la puissance qui s'y joignent",
						"parce qu'elle est moins libre"
				],
				correct: 2,
				explanation: "« soit à raison de la connaissance et de la puissance, qui s'y trouvant jointes la rendent plus ferme et plus efficace. » Cette distinction est cruciale pour comprendre la spécificité de la volonté divine. La supériorité ne réside pas dans l'essence formelle de la volonté mais dans les perfections qui l'accompagnent : la connaissance infinie qui éclaire parfaitement ses choix, et la puissance infinie qui garantit leur réalisation effective."
		},

		// Question n°14
		{
				question: "Question n°14 : Formellement considérée, la volonté humaine semble-t-elle plus petite que la volonté divine ?",
				answers: [
						"oui, beaucoup plus petite",
						"non, elle ne semble pas plus grande",
						"elle est identique"
				],
				correct: 2,
				explanation: "« elle ne me semble pas toutefois plus grande, si je la considère formellement et précisément en elle-même. » Cette précision technique distingue l'essence formelle de la volonté de ses modalités concrètes d'exercice. Formellement, la volonté humaine possède la même nature que la volonté divine : le pouvoir d'auto-détermination sans contrainte extérieure. C'est cette identité formelle qui fonde la ressemblance entre l'homme et Dieu."
		},

		// Question n°15
		{
				question: "Question n°15 : Comment l'objet de la volonté divine diffère-t-il de celui de la volonté humaine ?",
				answers: [
						"il est plus restreint",
						"il s'étend infiniment à plus de choses",
						"il est identique"
				],
				correct: 2,
				explanation: "« à raison de l'objet, d'autant qu'elle se porte et s'étend infiniment à plus de choses. » Cette différence quantitative dans l'étendue des objets correspond à la distinction ontologique entre fini et infini. La volonté divine peut se porter sur la totalité de l'être et sur toutes les possibilités, tandis que la volonté humaine est limitée par la finitude de l'entendement qui lui présente ses objets et par son champ d'action concret dans le monde."
		},

		// Question n°16
		{
				question: "Question n°16 : Que signifie « affirmer ou nier, poursuivre ou fuir » dans la définition de la volonté ?",
				answers: [
						"les actions de l'entendement",
						"les opérations fondamentales de la volonté",
						"les passions du corps"
				],
				correct: 2,
				explanation: "Ces termes décrivent les actions fondamentales de la volonté selon Descartes. « Affirmer ou nier » correspondent aux jugements théoriques sur le vrai et le faux, tandis que « poursuivre ou fuir » renvoient aux décisions pratiques concernant le bien et le mal. Ces quatre modalités épuisent le champ d'action possible de la volonté humaine, recouvrant à la fois le domaine de la connaissance et celui de l'action."
		},

		// Question n°17
		{
				question: "Question n°17 : Quand la liberté est-elle la plus grande selon ce texte ?",
				answers: [
						"quand on est indifférent",
						"quand on suit son penchant avec connaissance évidente",
						"quand on est contraint"
				],
				correct: 2,
				explanation: "« d'autant plus que je penche vers l'un, soit que je connaisse évidemment... d'autant plus librement j'en fais choix. » Cette gradation inverse la conception traditionnelle de la liberté. Le maximum de liberté ne correspond pas à l'indifférence mais à la détermination par l'évidence rationnelle. Plus le choix est éclairé par la connaissance claire du vrai et du bien, plus il est libre, car la volonté se détermine alors de manière pleinement consciente et raisonnée."
		},

		// Question n°18
		{
				question: "Question n°18 : Quelle est la relation entre connaissance et liberté chez Descartes ?",
				answers: [
						"la connaissance diminue la liberté",
						"la connaissance augmente la liberté",
						"elles sont sans rapport"
				],
				correct: 2,
				explanation: "Une connaissance claire du vrai et du bien rend la volonté plus libre en la déterminant rationnellement sans la contraindre. Cette thèse révolutionnaire établit une corrélation positive entre liberté et nécessité rationnelle. Pour Descartes, être libre ce n'est pas choisir arbitrairement mais agir en conformité avec la vérité clairement perçue par l'entendement, dans un mouvement spontané de la volonté vers ce qui lui apparaît comme indubitablement bon."
		},

		// Question n°19
		{
				question: "Question n°19 : Pourquoi Descartes ne conçoit-il pas d'idée de volonté plus grande que la sienne ?",
				answers: [
						"parce qu'il est Dieu",
						"parce que sa volonté est déjà infinie",
						"parce qu'il l'expérimente comme très grande et étendue"
				],
				correct: 3,
				explanation: "« je n'expérimente en moi [la volonté] être si grande, que je ne conçois point l'idée d'aucune autre plus ample et plus étendue. » Cette expérience intime fondée sur l'introspection révèle la spécificité de la volonté humaine. Contrairement aux autres facultés dont on peut concevoir des perfections supérieures, la volonté humaine semble atteindre dans son essence formelle une plénitude telle qu'on ne peut imaginer de volonté plus parfaite dans son principe d'auto-détermination."
		},

		// Question n°20
		{
				question: "Question n°20 : À quel courant philosophique appartient cette conception cartésienne de la liberté ?",
				answers: [
						"au déterminisme absolu",
						"au libertarisme indifférentiste",
						"au rationalisme de la liberté éclairée"
				],
				correct: 3,
				explanation: "Descartes défend une conception rationaliste où la liberté atteint son plein exercice quand elle est éclairée par la connaissance du vrai et du bien. Cette position originale synthétise la liberté du volontarisme avec la nécessité du rationalisme, créant ainsi une troisième voie entre l'indifférentisme libertarien et le déterminisme mécaniste. Elle influencera profondément la philosophie moderne en établissant que la vraie liberté est celle qui s'exerce dans la lumière de la raison."
		},

		// Question n°21
		{
				question: "Question n°21 : Quel est le statut de l'entendement dans la comparaison entre l'homme et Dieu ?",
				answers: [
						"il est infini en l'homme comme en Dieu",
						"il est limité en l'homme mais infini en Dieu",
						"il est identique dans les deux cas"
				],
				correct: 2,
				explanation: "Descartes constate que sa faculté de concevoir est « d'une fort petite étendue, et grandement limitée » tandis qu'il représente « l'idée d'une autre faculté beaucoup plus ample, et même infinie » appartenant à Dieu. Cette différence radicale établit une distinction essentielle entre la connaissance finie humaine et la connaissance infinie divine, marquant la dépendance épistémologique de l'homme par rapport à Dieu."
		},

		// Question n°22
		{
				question: "Question n°22 : Que signifie « formellement et précisément » dans le contexte de l'analyse de la volonté ?",
				answers: [
						"selon son apparence extérieure",
						"selon son essence même, abstraction faite de ses circonstances",
						"selon ses effets pratiques"
				],
				correct: 2,
				explanation: "L'expression « formellement et précisément en elle-même » désigne l'analyse de la volonté dans sa pure essence, indépendamment des perfections qui l'accompagnent et des circonstances de son exercice. Cette distinction méthodologique permet à Descartes d'isoler ce qui appartient en propre à la volonté comme telle, distinct de la connaissance et de la puissance qui peuvent y être jointes dans son exercice concret."
		},

		// Question n°23
		{
				question: "Question n°23 : Comment Descartes définit-il l'action de la volonté par rapport à l'entendement ?",
				answers: [
						"la volonté précède et détermine l'entendement",
						"la volonté agit sur les choses que l'entendement lui propose",
						"l'entendement et la volonté sont totalement indépendants"
				],
				correct: 2,
				explanation: "Descartes précise que la volonté agit « pour affirmer ou nier, poursuivre ou fuir les choses que l'entendement nous propose ». Cette formulation établit une collaboration structurée entre les deux facultés : l'entendement présente les objets à connaître ou à poursuivre, la volonté décide de les affirmer, les nier, les poursuivre ou les fuir. Cette division du travail cognitif et pratique est caractéristique de l'anthropologie cartésienne dualiste."
		},

		// Question n°24
		{
				question: "Question n°24 : Quel rôle joue Dieu dans la détermination de la pensée humaine selon ce texte ?",
				answers: [
						"Dieu n'intervient pas dans la pensée humaine",
						"Dieu peut disposer l'intérieur de la pensée",
						"Dieu empêche la liberté humaine"
				],
				correct: 2,
				explanation: "Descartes évoque la possibilité que « Dieu dispose ainsi l'intérieur de ma pensée ». Cette mention montre que pour Descartes, l'action divine peut orienter la pensée humaine sans pour autant détruire sa liberté. Cette conception s'inscrit dans l'effort cartésien pour concilier la liberté humaine avec la toute-puissance et l'omniscience divines, en faisant de l'influence divine une illumination plutôt qu'une contrainte."
		},

		// Question n°25
		{
				question: "Question n°25 : Comment Descartes comprend-il le rapport entre liberté et délibération ?",
				answers: [
						"la délibération est le signe de la liberté parfaite",
						"la délibération indique un manque de connaissance",
						"la délibération est toujours inutile"
				],
				correct: 2,
				explanation: "Descartes affirme que s'il connaissait toujours clairement le vrai et le bien, il « ne serais jamais en peine de délibérer ». La délibération n'est donc pas l'essence de la liberté mais plutôt le signe d'une connaissance imparfaite. Dans l'idéal cartésien, la connaissance parfaite rendrait la délibération superflue en présentant immédiatement l'évidence du choix à faire, permettant ainsi à la volonté de se déterminer instantanément et librement."
		},

		// Question n°26
		{
				question: "Question n°26 : Quelle est la fonction de l'idée d'infini dans l'argumentation cartésienne ?",
				answers: [
						"elle sert uniquement d'idée régulatrice",
						"elle prouve l'existence de Dieu",
						"elle montre les limites de la raison humaine"
				],
				correct: 2,
				explanation: "L'idée d'une faculté « infinie » permet à Descartes d'établir une preuve de l'existence de Dieu. Selon le principe de causalité cartésien selon lequel l'effet ne peut contenir plus de réalité que sa cause, l'idée d'infini ne peut provenir d'un être fini comme l'homme, donc elle doit avoir été mise en lui par un être effectivement infini. Cet argument ontologique est central dans la métaphysique cartésienne et fonde la possibilité même de la connaissance certaine."
		},

		// Question n°27
		{
				question: "Question n°27 : Que signifie « le poids d'aucune raison » dans le contexte de l'indifférence ?",
				answers: [
						"l'absence totale de raison",
						"la présence de raisons trop nombreuses",
						"la force des raisons qui déterminent le choix"
				],
				correct: 1,
				explanation: "L'expression « lorsque je ne suis point emporté vers un côté plutôt que vers un autre par le poids d'aucune raison » décrit l'état d'indifférence comme absence complète de raison déterminante. Le « poids » métaphorique évoque la force persuasive des raisons qui, lorsqu'elles sont absentes ou également réparties entre les options, laissent la volonté dans un équilibre parfait entre les possibilités, ce qui constitue pour Descartes le degré le plus bas de liberté."
		},

		// Question n°28
		{
				question: "Question n°28 : Comment la volonté humaine est-elle « image et ressemblance » de Dieu ?",
				answers: [
						"par sa perfection absolue",
						"par son infinité formelle dans son essence",
						"par sa capacité à créer ex nihilo"
				],
				correct: 2,
				explanation: "La volonté humaine est « image et ressemblance » de Dieu non par son infinité réelle dans son exercice (car elle est limitée) mais par son infinité formelle dans son essence. Bien qu'exercée de manière finie et concrète, la volonté humaine partage avec la volonté divine la même nature formelle de pouvoir d'auto-détermination sans contrainte extérieure. Cette ressemblance ontologique fonde la dignité particulière de l'être humain dans la métaphysique cartésienne."
		},

		// Question n°29
		{
				question: "Question n°29 : Quelle est la différence entre « affirmer/nier » et « poursuivre/fuir » ?",
				answers: [
						"la première paire concerne la connaissance, la seconde l'action",
						"la première est passive, la seconde active",
						"la première relève du corps, la seconde de l'âme"
				],
				correct: 1,
				explanation: "« Affirmer ou nier » correspondent aux opérations intellectuelles de jugement sur le vrai et le faux dans le domaine de la connaissance théorique, tandis que « poursuivre ou fuir » se rapportent aux décisions pratiques concernant le bien et le mal dans le domaine de l'action. Cette distinction recoupe la division classique entre raison théorique et raison pratique, toutes deux mises en œuvre par la volonté selon la philosophie cartésienne."
		},

		// Question n°30
		{
				question: "Question n°30 : Pourquoi la volonté divine est-elle « plus ferme et plus efficace » ?",
				answers: [
						"parce qu'elle est plus indifférente",
						"parce qu'elle est jointe à la connaissance et à la puissance infinies",
						"parce qu'elle est moins libre"
				],
				correct: 2,
				explanation: "La volonté divine est « plus ferme et plus efficace » en raison de « la connaissance et de la puissance, qui s'y trouvant jointes ». La connaissance infinie assure que la volonté divine ne se trompe jamais sur ce qui est véritablement bon et vrai, et la puissance infinie garantit que ce qu'elle veut s'accomplit nécessairement sans obstacle. Cette conjonction de perfections distingue radicalement la volonté divine de la volonté humaine, bien que leurs essences formelles soient semblables."
		},

		// Question n°31
		{
				question: "Question n°31 : Quel est le sens du terme « expérimente » quand Descartes dit « j'expérimente en moi » ?",
				answers: [
						"il fait une expérience scientifique",
						"il a une connaissance empirique sensible",
						"il a une conscience immédiate par introspection"
				],
				correct: 3,
				explanation: "Quand Descartes dit « j'expérimente en moi », il fait référence à la connaissance introspective immédiate qu'il a de ses propres états mentaux par la conscience réflexive. Cette expérience intérieure n'est pas sensorielle mais intellectuelle, relevant de ce que la tradition philosophique appelle la conscience de soi. C'est par cette introspection méthodique que Descartes découvre la grandeur de sa volonté et plus généralement les contenus de sa pensée."
		},

		// Question n°32
		{
				question: "Question n°32 : Que signifie « connaissance naturelle » dans ce contexte ?",
				answers: [
						"la connaissance intuitive immédiate",
						"la connaissance acquise par les sens",
						"la connaissance rationnelle développée par la raison humaine"
				],
				correct: 3,
				explanation: "La « connaissance naturelle » désigne chez Descartes la connaissance que la raison humaine peut développer par ses propres forces naturelles, sans recours à la révélation divine ou à l'illumination surnaturelle. Elle comprend notamment les vérités mathématiques, métaphysiques et morales accessibles par la lumière naturelle de la raison. Descartes affirme que cette connaissance, loin de diminuer la liberté, l'augmente en éclairant les choix de la volonté."
		},

		// Question n°33
		{
				question: "Question n°33 : Comment comprendre l'expression « d'autant plus librement » chez Descartes ?",
				answers: [
						"comme une gradation dans l'intensité de la liberté",
						"comme une contradiction dans les termes",
						"comme une métaphore sans portée conceptuelle"
				],
				correct: 1,
				explanation: "L'expression « d'autant plus librement » indique que la liberté n'est pas un tout ou rien mais admet des degrés d'intensité et de perfection. Pour Descartes, la liberté est d'autant plus grande et parfaite que le choix est plus éclairé par la connaissance claire et distincte. Cette conception graduelle et perfectible de la liberté s'oppose aux conceptions qui font de la liberté un pouvoir absolu et indivisible, identique dans tous ses exercices."
		},

		// Question n°34
		{
				question: "Question n°34 : Quelle est la place de la volonté dans la hiérarchie des facultés selon Descartes ?",
				answers: [
						"elle est la faculté la plus limitée",
						"elle est la faculté la plus étendue et semblable à celle de Dieu",
						"elle est équivalente aux autres facultés"
				],
				correct: 2,
				explanation: "Descartes établit une hiérarchie claire où la volonté occupe la position suprême parmi les facultés humaines. Alors que l'entendement, la mémoire et l'imagination sont « très petites et bornées », la volonté est « si grande » qu'on ne peut concevoir « l'idée d'aucune autre plus ample et plus étendue ». Cette prééminence fonde la dignité particulière de l'être humain comme image de Dieu et explique pourquoi l'erreur est possible : la volonté peut s'étendre au-delà de ce que l'entendement limité perçoit clairement."
		},

		// Question n°35
		{
				question: "Question n°35 : Comment Descartes résout-il le problème du mal étant donné la bonté divine ?",
				answers: [
						"en niant la réalité du mal",
						"en attribuant le mal à la liberté humaine",
						"en faisant de Dieu l'auteur du mal"
				],
				correct: 2,
				explanation: "Bien que non explicitement mentionné dans ce texte, la conception cartésienne de la liberté comme puissance d'auto-détermination fournit la clé de sa solution au problème du mal. Si l'homme peut choisir le mal, c'est parce que sa volonté, bien qu'image de celle de Dieu, peut se tromper en n'étant pas suffisamment éclairée par l'entendement limité ou en s'étendant au-delà de ce que celui-ci perçoit clairement. Le mal provient ainsi d'un mauvais usage de la liberté humaine, non de la volonté divine."
		},

		// Question n°36
		{
				question: "Question n°36 : Quel est le statut de la « grâce divine » dans la pensée cartésienne ?",
				answers: [
						"elle supprime la liberté humaine",
						"elle coopère avec la liberté sans la détruire",
						"elle est incompatible avec la raison"
				],
				correct: 2,
				explanation: "Descartes affirme que « la grâce divine... bien loin de diminuer ma liberté, l'augmente plutôt, et la fortifient ». Cette position cherche à concilier la toute-puissance divine avec la liberté humaine dans le cadre d'une théologie rationaliste. La grâce n'agit pas comme une force contraignante qui annulerait la liberté, mais comme une lumière qui éclaire la volonté de l'intérieur, la rendant ainsi plus capable de choisir le bien véritable sans être pour autant déterminée de l'extérieur."
		},

		// Question n°37
		{
				question: "Question n°37 : Que signifie « indifférence » dans le vocabulaire cartésien ?",
				answers: [
						"le détachement affectif",
						"l'équilibre parfait entre deux options possibles",
						"l'impartialité du jugement"
				],
				correct: 2,
				explanation: "Dans le vocabulaire technique cartésien, l'« indifférence » désigne spécifiquement l'état de la volonté lorsqu'elle n'est déterminée par aucune raison vers une option plutôt qu'une autre, se trouvant ainsi dans un équilibre parfait entre des possibilités également envisageables. Descartes considère cet état non comme la perfection de la liberté mais comme son degré le plus bas, lié à l'ignorance ou à l'absence d'évidence rationnelle, où la volonté doit choisir sans guide clair."
		},

		// Question n°38
		{
				question: "Question n°38 : Comment la volonté humaine peut-elle errer selon Descartes ?",
				answers: [
						"parce qu'elle est mauvaise par nature",
						"parce qu'elle dépasse les limites de l'entendement",
						"parce qu'elle est déterminée par le corps"
				],
				correct: 2,
				explanation: "Dans la quatrième Méditation, Descartes explique que l'erreur provient de ce que la volonté, étendue et infinie dans son essence formelle, peut affirmer ou nier au-delà de ce que l'entendement, limité, perçoit clairement et distinctement. L'erreur naît ainsi du déséquilibre structurel entre l'étendue infinie de la volonté et la limitation intrinsèque de l'entendement. La volonté peut ainsi se précipiter à juger sur des choses que l'entendement ne comprend pas encore clairement."
		},

		// Question n°39
		{
				question: "Question n°39 : Quel est le rôle de la « lumière naturelle » dans la philosophie cartésienne ?",
				answers: [
						"elle désigne la connaissance sensorielle",
						"elle représente la raison humaine capable de connaître l'évidence",
						"elle symbolise la révélation divine"
				],
				correct: 2,
				explanation: "La « lumière naturelle » est la métaphore cartésienne pour désigner la raison humaine dans sa capacité à reconnaître l'évidence et les vérités nécessaires par une intuition intellectuelle immédiate. C'est par cette lumière naturelle que l'homme peut développer la « connaissance naturelle » qui, jointe à la grâce divine, perfectionne sa liberté en éclairant ses choix. Elle s'oppose à la « lumière de la foi » qui relève de la révélation surnaturelle et complète la raison sans la contredire."
		},

		// Question n°40
		{
				question: "Question n°40 : Quelle est l'importance méthodologique de l'introspection dans ce texte ?",
				answers: [
						"elle est accessoire et secondaire",
						"elle est le fondement de toute la démarche cartésienne",
						"elle ne sert qu'à constater des limites"
				],
				correct: 2,
				explanation: "L'introspection ou examen de conscience est la méthode fondamentale par laquelle Descartes découvre à la fois la limitation de ses facultés cognitives et la grandeur exceptionnelle de sa volonté. Cette démarche introspective caractérise toute la philosophie cartésienne, qui part systématiquement de l'examen des contenus de la pensée et des certitudes immédiates de la conscience pour remonter à leurs causes et fonder une métaphysique certaine sur la base du cogito."
		},

		// Question n°41
		{
				question: "Question n°41 : Comment Descartes comprend-il la « contrainte extérieure » ?",
				answers: [
						"comme toute influence venant de l'extérieur",
						"comme une force physique qui empêche l'action",
						"comme une pression psychologique"
				],
				correct: 1,
				explanation: "La « contrainte extérieure » désigne chez Descartes toute force qui s'exerce sur la volonté de l'extérieur et l'empêche de se déterminer elle-même selon sa propre inclination. Cette contrainte peut être physique (chaînes, violence, obstacles matériels) ou psychologique (menaces, manipulation, influences déterminantes). L'absence de cette contrainte définit formellement la liberté de la volonté, même lorsque celle-ci est déterminée par des raisons internes ou par l'évidence rationnelle."
		},

		// Question n°42
		{
				question: "Question n°42 : Que signifie « perfection dans la volonté » pour Descartes ?",
				answers: [
						"la capacité de rester indifférente",
						"le pouvoir de choisir sans raison",
						"l'aptitude à suivre l'évidence rationnelle"
				],
				correct: 3,
				explanation: "La « perfection dans la volonté » consiste pour Descartes dans sa capacité à se déterminer spontanément en conformité avec ce que l'entendement lui présente comme clairement vrai et bon. Cette perfection n'est donc pas l'indifférence (qui est plutôt un défaut lié à l'ignorance) mais au contraire la détermination par la raison éclairée. Plus la volonté est ainsi déterminée rationnellement par l'évidence, plus elle est libre et parfaite dans son exercice."
		},

		// Question n°43
		{
				question: "Question n°43 : Comment la volonté humaine peut-elle être dite « infinie » ?",
				answers: [
						"par son exercice concret",
						"par son essence formelle",
						"par ses effets dans le monde"
				],
				correct: 2,
				explanation: "La volonté humaine est dite « infinie » non dans son exercice concret (qui est limité par la finitude humaine) mais dans son essence formelle considérée abstraction faite de ses modalités d'exercice. Formellement considérée, la volonté humaine possède le même pouvoir d'auto-détermination sans contrainte extérieure que la volonté divine, sans limitation intrinsèque. Cette infinité formelle fonde la ressemblance avec Dieu et explique pourquoi on ne peut concevoir de volonté plus grande dans son principe essentiel."
		},

		// Question n°44
		{
				question: "Question n°44 : Quel est le lien entre volonté et jugement chez Descartes ?",
				answers: [
						"la volonté est un type de jugement",
						"le jugement est l'acte par lequel la volonté affirme ou nie",
						"ils sont totalement séparés"
				],
				correct: 2,
				explanation: "Pour Descartes, le jugement est précisément l'acte par lequel la volonté affirme ou nie ce que l'entendement lui présente comme objet de connaissance. Cette théorie identifie le jugement à un acte de volonté plutôt qu'à une simple opération intellectuelle passive. C'est pourquoi l'erreur est possible : la volonté peut précipitamment affirmer ce que l'entendement ne perçoit pas encore clairement, ou elle peut refuser d'affirmer ce qui pourtant est clairement évident."
		},

		// Question n°45
		{
				question: "Question n°45 : Comment Descartes évite-t-il le déterminisme tout en rejetant l'indifférence ?",
				answers: [
						"par la doctrine de la grâce divine",
						"en distinguant détermination interne et contrainte externe",
						"en faisant de la liberté un mystère"
				],
				correct: 2,
				explanation: "Descartes évite le déterminisme en distinguant soigneusement entre la détermination interne par la raison (qui est liberté) et la contrainte externe (qui est son contraire). La volonté déterminée par l'évidence rationnelle n'est pas contrainte mais libre, car c'est elle-même qui, éclairée par la raison, se détermine spontanément vers ce qui lui apparaît comme indubitablement vrai et bon. Cette distinction subtile lui permet de rejeter à la fois l'indifférence (comme degré inférieur de liberté) et le déterminisme (comme négation de la liberté)."
		},

		// Question n°46
		{
				question: "Question n°46 : Quelle est la signification théologique de cette conception de la liberté ?",
				answers: [
						"elle nie la toute-puissance divine",
						"elle concilie liberté humaine et souveraineté divine",
						"elle rend Dieu responsable du mal"
				],
				correct: 2,
				explanation: "La conception cartésienne de la liberté cherche à concilier la liberté humaine avec la toute-puissance et l'omniscience divines dans le cadre d'une théologie rationaliste. En faisant de la grâce divine et de la connaissance naturelle des auxiliaires de la liberté plutôt que des menaces, Descartes propose une vision harmonieuse où la souveraineté divine et la liberté humaine ne s'opposent pas mais coopèrent, Dieu éclairant la volonté humaine sans la contraindre, et l'homme utilisant sa liberté pour suivre la vérité ainsi révélée."
		},

		// Question n°47
		{
				question: "Question n°47 : Comment cette conception de la volonté influence-t-elle la morale cartésienne ?",
				answers: [
						"elle fonde une morale du devoir absolu",
						"elle conduit à une éthique intellectualiste",
						"elle justifie l'immoralisme"
				],
				correct: 2,
				explanation: "La conception cartésienne de la volonté comme liberté éclairée par la connaissance conduit à une éthique intellectualiste où le bien moral consiste à faire usage de sa liberté en se déterminant selon ce que la raison présente comme clairement bon. La vertu réside ainsi dans la fermeté de la volonté à suivre les jugements éclairés de la raison, ce que Descartes appelle la « générosité » dans son Traité des passions. Cette éthique rationaliste fait de la connaissance du bien la condition de l'action vertueuse."
		},

		// Question n°48
		{
				question: "Question n°48 : Quel est le rapport entre volonté et passions selon Descartes ?",
				answers: [
						"les passions déterminent nécessairement la volonté",
						"la volonté peut maîtriser les passions",
						"volonté et passions sont indépendantes"
				],
				correct: 2,
				explanation: "Dans les « Passions de l'âme », Descartes développe l'idée que la volonté, bien qu'affectée par les passions qui ont leur origine dans le corps, conserve toujours le pouvoir de les maîtriser par des jugements fermes et des habitudes vertueuses. Cette maîtrise est possible parce que la volonté, étant d'une nature différente des passions (elle relève de l'âme pure pensée, elles du corps étendu), n'est pas déterminée par elles mais peut librement consentir ou résister à leur influence par l'exercice de la raison."
		},

		// Question n°49
		{
				question: "Question n°49 : Comment Descartes justifie-t-il la possibilité de la science étant donné la finitude de l'entendement ?",
				answers: [
						"par la révélation divine",
						"par la méthode et la progression des connaissances",
						"en renonçant à la certitude"
				],
				correct: 2,
				explanation: "Bien que l'entendement humain soit intrinsèquement limité, Descartes justifie la possibilité de la science certaine par l'usage méthodique et ordonné de la raison. En procédant par ordre, en ne jugeant que sur des évidences claires et distinctes, en déduisant rigoureusement les conséquences de ces évidences, et en construisant progressivement les connaissances, l'homme peut étendre sa connaissance bien au-delà de ses limites initiales. Cette confiance méthodique dans la raison caractérise l'optimisme scientifique cartésien."
		},

		// Question n°50
		{
				question: "Question n°50 : Quelle est la postérité de cette conception cartésienne de la liberté ?",
				answers: [
						"elle n'a eu aucune influence",
						"elle a inspiré le déterminisme spinoziste",
						"elle a influencé Leibniz, Kant et la philosophie moderne"
				],
				correct: 3,
				explanation: "La conception cartésienne de la liberté comme détermination rationnelle a profondément influencé le développement de la philosophie moderne. Leibniz reprendra et développera l'idée que la liberté culmine dans la détermination par la raison. Kant transformera cette intuition en sa célèbre théorie de l'autonomie comme obéissance à la loi rationnelle qu'on s'est prescrite soi-même. Cette filiation intellectuelle montre l'importance durable de l'innovation cartésienne dans la pensée de la liberté, qui rompt avec l'indifférentisme médiéval pour fonder la liberté sur la rationalité."
		}
];