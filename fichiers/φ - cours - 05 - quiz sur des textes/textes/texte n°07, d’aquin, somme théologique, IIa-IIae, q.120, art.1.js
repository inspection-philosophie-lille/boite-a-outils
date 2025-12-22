// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de D'AQUIN";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
    texte: `« [1] Nous avons dit, à propos de l'étude des lois, que les actes humains soumis aux lois portent sur des situations singulières qui peuvent varier à l'infini. [2] Il est donc impossible d'instituer une loi qui ne serait jamais dans aucun cas en défaut. [3] Pour établir une loi, les législateurs considèrent les conditions générales ; mais l'observance de cette loi serait dans certaines situations contraire à la justice et au bien commun que la loi entend sauvegarder. [4] Par exemple, la loi déclare qu'il faut rendre un dépôt, ce qui est juste dans la généralité des cas particuliers, mais peut devenir dangereux dans des cas particuliers, tel le fou qui réclame l'épée qu'il a déposée, ou l'individu qui demande son dépôt pour trahir sa patrie. [5] En pareilles circonstances et en d'autres semblables, il serait mal d'obéir à la loi, et le bien consiste à transgresser la lettre de la loi pour rester fidèle à l'esprit de justice et à l'exigence du bien commun ».`,
    source: "THOMAS D'AQUIN, Somme théologique, Secunda Secundae (IIa-IIae), q.120, art.1, trad. A. Lemonnyer o. p., Paris, Desclée&Brouwer/Le Cerf, pp.584-585"
};

// ============================================
// QUESTIONS DU QUIZ (50 questions)
// ============================================

const questions = [
    // Question n°1
    { 
        question: "Question n°1 : Que portent les actes humains soumis aux lois selon Thomas d'Aquin ?",
        answers: [
            "Réponse : sur des situations universelles et immuables", 
            "Réponse : sur des situations singulières qui peuvent varier à l'infini", 
            "Réponse : sur des principes métaphysiques"
        ], 
        correct: 2,
        explanation: "Thomas d'Aquin déclare : « les actes humains soumis aux lois portent sur des situations singulières qui peuvent varier à l'infini. » Cette affirmation fondamentale souligne le caractère concret et variable des situations auxquelles s'appliquent les lois, ce qui explique pourquoi aucune loi générale ne peut prévoir tous les cas particuliers."
    },

    // Question n°2
    { 
        question: "Question n°2 : Que peut-on dire d'une loi qui ne serait jamais en défaut ?",
        answers: [
            "Réponse : qu'elle est possible et souhaitable", 
            "Réponse : qu'elle est impossible à instituer", 
            "Réponse : qu'elle existe dans la loi divine"
        ], 
        correct: 2,
        explanation: "« Il est donc impossible d'instituer une loi qui ne serait jamais dans aucun cas en défaut. » Cette conclusion logique découle directement de la nature variable des situations humaines. Thomas d'Aquin affirme ainsi l'imperfection nécessaire des lois humaines, qui ne peuvent jamais atteindre une perfection absolue dans leur application."
    },

    // Question n°3
    { 
        question: "Question n°3 : Que considèrent les législateurs pour établir une loi ?",
        answers: [
            "Réponse : tous les cas particuliers possibles", 
            "Réponse : les conditions générales", 
            "Réponse : uniquement les situations exceptionnelles"
        ], 
        correct: 2,
        explanation: "« Pour établir une loi, les législateurs considèrent les conditions générales. » Cette approche est nécessaire car il serait impossible de prévoir tous les cas particuliers. Cependant, cette généralité inhérente aux lois crée le problème des exceptions où l'application stricte de la loi peut devenir injuste."
    },

    // Question n°4
    { 
        question: "Question n°4 : Que peut devenir l'observance de la loi dans certaines situations ?",
        answers: [
            "Rép : toujours bénéfique", 
            "Rép : contraire à la justice et au bien commun", 
            "Rép : plus stricte encore"
        ], 
        correct: 2,
        explanation: "« l'observance de cette loi serait dans certaines situations contraire à la justice et au bien commun. » Cette affirmation paradoxale montre que l'application mécanique d'une loi peut parfois trahir son propre objectif. Pour Thomas d'Aquin, c'est la finalité de la loi (justice et bien commun) qui doit guider son application, non son texte littéral."
    },

    // Question n°5
    { 
        question: "Question n°5 : Quel exemple Thomas d'Aquin donne-t-il pour illustrer son propos ?",
        answers: [
            "Rép : la loi sur le paiement des impôts", 
            "Rép : la loi sur le rendement des dépôts", 
            "Rép : la loi sur la propriété privée"
        ], 
        correct: 2,
        explanation: "« Par exemple, la loi déclare qu'il faut rendre un dépôt. » Ce choix d'exemple n'est pas anodin : le dépôt représente un cas particulièrement clair où le principe général (rendre ce qui a été confié) est normalement juste, mais peut devenir dangereux dans certaines circonstances exceptionnelles."
    },

    // Question n°6
    { 
        question: "Question n°6 : Dans quels cas particuliers le rendement d'un dépôt devient-il dangereux ?",
        answers: [
            "Rép : quand le déposant est pauvre", 
            "Rép : quand un fou réclame son épée ou quand on trahit sa patrie", 
            "Rép : quand le dépôt est de peu de valeur"
        ], 
        correct: 2,
        explanation: "« tel le fou qui réclame l'épée qu'il a déposée, ou l'individu qui demande son dépôt pour trahir sa patrie. » Ces deux exemples illustrent des situations où l'application littérale de la loi créerait un danger manifeste. Dans les deux cas, rendre le dépôt mettrait en péril des biens supérieurs : la sécurité publique ou la défense de la patrie."
    },

    // Question n°7
    { 
        question: "Question n°7 : Que faudrait-il faire dans ces circonstances exceptionnelles ?",
        answers: [
            "Rép : obéir strictement à la loi", 
            "Rép : transgresser la lettre de la loi", 
            "Rép : attendre une nouvelle loi"
        ], 
        correct: 2,
        explanation: "« il serait mal d'obéir à la loi, et le bien consiste à transgresser la lettre de la loi. » Cette position courageuse affirme qu'il existe des situations où la désobéissance à la lettre de la loi est moralement requise. Thomas d'Aquin renverse ainsi la conception simpliste selon laquelle l'obéissance aux lois serait toujours vertueuse."
    },

    // Question n°8
    { 
        question: "Question n°8 : Pourquoi faut-il transgresser la lettre de la loi dans ces cas ?",
        answers: [
            "Rép : pour rester fidèle à l'esprit de justice et au bien commun", 
            "Rép : pour éviter une sanction", 
            "Rép : pour faire preuve de courage"
        ], 
        correct: 1,
        explanation: "« pour rester fidèle à l'esprit de justice et à l'exigence du bien commun. » La transgression de la lettre n'est pas justifiée par des motifs personnels, mais par la fidélité aux finalités supérieures que la loi doit servir. Cette distinction entre lettre et esprit de la loi est fondamentale dans la pensée juridique de Thomas d'Aquin."
    },

    // Question n°9
    { 
        question: "Question n°9 : Quelle distinction Thomas d'Aquin établit-il implicitement ?",
        answers: [
            "Rép : entre loi écrite et loi orale", 
            "Rép : entre lettre et esprit de la loi", 
            "Rép : entre loi humaine et loi animale"
        ], 
        correct: 2,
        explanation: "Il distingue la lettre (texte formel) et l'esprit (finalité morale) de la loi. Cette distinction est cruciale car elle permet de résoudre les cas où l'application littérale de la loi contredirait sa propre finalité. Pour Thomas d'Aquin, c'est l'esprit de la loi, non sa lettre, qui constitue son essence véritable."
    },

    // Question n°10
    { 
        question: "Question n°10 : Quel est le critère suprême pour juger de l'application d'une loi ?",
        answers: [
            "Rép : le texte exact de la loi", 
            "Rép : l'autorité du législateur", 
            "Rép : la justice et le bien commun"
        ], 
        correct: 3,
        explanation: "La loi doit servir la justice et le bien commun, qui priment sur son application littérale. Ce principe téléologique signifie que la valeur d'une loi se mesure à sa capacité à réaliser ces fins supérieures. Quand la lettre de la loi entre en conflit avec ces fins, c'est l'esprit qui doit prévaloir."
    },

    // Question n°11
    { 
        question: "Question n°11 : Pourquoi les législateurs ne peuvent-ils prévoir tous les cas ?",
        answers: [
            "Rép : parce qu'ils manquent de sagesse", 
            "Rép : parce que les situations singulières sont infiniment variables", 
            "Rép : parce qu'ils sont pressés"
        ], 
        correct: 2,
        explanation: "Les actes humains concernent « des situations singulières qui peuvent varier à l'infini. » Cette variabilité infinie rend impossible la création de lois parfaitement adaptées à tous les cas. Les législateurs sont donc contraints de formuler des règles générales, laissant aux juges et aux citoyens la tâche de les adapter aux circonstances particulières."
    },

    // Question n°12
    { 
        question: "Question n°12 : Que signifie « être en défaut » pour une loi ?",
        answers: [
            "Rép : être mal écrite", 
            "Rép : ne pas atteindre son but dans certains cas", 
            "Rép : être trop ancienne"
        ], 
        correct: 2,
        explanation: "Une loi est « en défaut » quand son application stricte va contre sa finalité. Ce défaut n'est pas nécessairement une faute du législateur, mais souvent une conséquence inévitable de la généralité des lois. Reconnaître ces défauts permet d'adapter l'application des lois sans pour autant les remettre en cause dans leur principe."
    },

    // Question n°13
    { 
        question: "Question n°13 : Quelle vertu permet de corriger la loi générale dans des cas particuliers ?",
        answers: [
            "Rép : la prudence", 
            "Rép : l'équité", 
            "Rép : la force"
        ], 
        correct: 2,
        explanation: "Thomas d'Aquin développe ici la théorie de l'équité qui corrige la loi générale. L'épiquie, ἐπιείκεια est cette vertu qui permet de reconnaître quand l'application stricte d'une loi serait injuste et d'y déroger légitimement. Elle représente une forme de sagesse pratique indispensable au bon fonctionnement du système juridique."
    },

    // Question n°14
    { 
        question: "Question n°14 : Quelle est la finalité première de toute loi selon ce texte ?",
        answers: [
            "Rép : être appliquée littéralement", 
            "Rép : sauvegarder la justice et le bien commun", 
            "Rép : punir les délinquants"
        ], 
        correct: 2,
        explanation: "La loi vise à « sauvegarder » la justice et le bien commun. Cette conception téléologique signifie que les lois ne sont pas des fins en soi, mais des moyens au service de valeurs supérieures. Quand une loi ne remplit plus cette fonction dans un cas particulier, son application littérale perd sa légitimité morale."
    },

    // Question n°15
    { 
        question: "Question n°15 : Que montre l'exemple du fou et de l'épée ?",
        answers: [
            "Rép : qu'il faut toujours respecter la propriété", 
            "Rép : que certaines applications littérales de la loi peuvent être nuisibles", 
            "Rép : que les fous ne devraient pas posséder d'épées"
        ], 
        correct: 2,
        explanation: "C'est un cas où l'application littérale de la loi (rendre le dépôt) serait dangereuse. L'exemple montre clairement que le respect formel de la propriété peut entrer en conflit avec la sécurité publique. Dans ce cas, c'est le bien supérieur (la sécurité) qui doit prévaloir sur le principe général (rendre les dépôts)."
    },

    // Question n°16
    { 
        question: "Question n°16 : Quelle conception de la loi Thomas d'Aquin défend-il ?",
        answers: [
            "Rép : une conception formaliste et rigide", 
            "Rép : une conception téléologique et flexible", 
            "Rép : une conception purement punitive"
        ], 
        correct: 2,
        explanation: "Une conception orientée vers une fin (téléologique) qui permet des ajustements. Cette vision s'oppose au formalisme juridique qui considère la loi comme une fin en soi. Pour Thomas d'Aquin, la loi est un instrument au service du bien commun, qui doit donc pouvoir s'adapter aux circonstances pour mieux réaliser sa finalité."
    },

    // Question n°17
    { 
        question: "Question n°17 : Quelle est la différence entre « généralité des cas » et « cas particuliers » ?",
        answers: [
            "Rép : la généralité concerne la majorité des situations, les particuliers sont exceptionnels", 
            "Rép : il n'y a pas de différence", 
            "Rép : la généralité concerne les riches, les particuliers les pauvres"
        ], 
        correct: 1,
        explanation: "La loi est juste « dans la généralité des cas particuliers » mais peut faire exception. Cette distinction est essentielle pour comprendre la pensée de Thomas d'Aquin : une loi peut être bonne et juste dans la plupart des cas tout en étant inadaptée dans certaines situations exceptionnelles. Reconnaître cette distinction évite à la fois l'anarchie et le légalisme rigide."
    },

    // Question n°18
    { 
        question: "Question n°18 : Que permet la transgression de la lettre de la loi ?",
        answers: [
            "Rép : l'anarchie", 
            "Rép : une meilleure réalisation de la justice", 
            "Rép : l'arbitraire"
        ], 
        correct: 2,
        explanation: "Elle permet de réaliser « l'esprit de justice » quand la lettre y fait obstacle. Loin de mener à l'anarchie, cette transgression contrôlée et raisonnée sert au contraire à perfectionner le système juridique en corrigeant ses imperfections. Elle représente une forme de sagesse pratique qui complète la sagesse théorique du législateur."
    },

    // Question n°19
    { 
        question: "Question n°19 : À quelle tradition philosophique appartient cette conception ?",
        answers: [
            "Rép : au positivisme juridique", 
            "Rép : à la tradition aristotélicienne-thomiste", 
            "Rép : à l'utilitarisme"
        ], 
        correct: 2,
        explanation: "Cette idée d'équité corrigeant la loi générale vient d'Aristote et est développée par Thomas d'Aquin. La notion d'épiquie, ἐπιείκεια (équité) est explicitement traitée par Aristote dans l'Éthique à Nicomaque, et Thomas d'Aquin l'intègre à sa réflexion théologique et juridique, l'enrichissant de sa propre pensée."
    },

    // Question n°20
    { 
        question: "Question n°20 : Quelle leçon politique découle de ce texte ?",
        answers: [
            "Rép : il faut toujours obéir aux lois sans réfléchir", 
            "Rép : il faut parfois adapter l'application des lois aux circonstances", 
            "Rép : il faut abolir toutes les lois"
        ], 
        correct: 2,
        explanation: "Le texte justifie une certaine flexibilité dans l'application des lois pour mieux servir leur finalité. Cette leçon politique est modérée : elle ne rejette pas l'autorité des lois, mais reconnaît la nécessité d'une certaine souplesse dans leur application. C'est une position réaliste qui tient compte des limites inhérentes à toute législation humaine."
    },

    // Question n°21
    { 
        question: "Question n°21 : Selon Thomas d'Aquin, les lois s'appliquent-elles à des situations abstraites ou concrètes ?",
        answers: [
            "Rép : à des situations abstraites et universelles", 
            "Rép : à des situations singulières et concrètes", 
            "Rép : uniquement à des situations idéales"
        ], 
        correct: 2,
        explanation: "Les lois portent sur « des situations singulières » selon le texte. Cette précision est importante car elle explique pourquoi les lois, étant générales par nature, rencontrent nécessairement des difficultés dans leur application concrète. C'est cette tension entre généralité des lois et singularité des situations qui fonde la nécessité de l'équité."
    },

    // Question n°22
    { 
        question: "Question n°22 : Quelle est la caractéristique principale des situations humaines selon le texte ?",
        answers: [
            "Rép : leur stabilité", 
            "Rép : leur variabilité infinie", 
            "Rép : leur simplicité"
        ], 
        correct: 2,
        explanation: "Les situations peuvent « varier à l'infini. » Cette affirmation a des conséquences importantes pour la philosophie du droit : elle implique que toute tentative de créer un système juridique parfaitement complet et cohérent est vouée à l'échec. La variabilité des situations humaines impose une certaine humilité dans l'élaboration et l'application des lois."
    },

    // Question n°23
    { 
        question: "Question n°23 : Que cherchent à sauvegarder les lois selon Thomas d'Aquin ?",
        answers: [
            "Rép : le pouvoir des législateurs", 
            "Rép : la justice et le bien commun", 
            "Rép : la stabilité sociale à tout prix"
        ], 
        correct: 2,
        explanation: "La loi entend « sauvegarder » la justice et le bien commun. Ces deux notions sont intimement liées dans la pensée thomiste : la justice réalise le bien commun en assurant à chacun ce qui lui est dû. Les lois sont donc des instruments au service de cette double finalité, et leur valeur se mesure à leur capacité à la réaliser."
    },

    // Question n°24
    { 
        question: "Question n°24 : Dans quel type de cas la loi sur le dépôt est-elle juste ?",
        answers: [
            "Rép : dans tous les cas sans exception", 
            "Rép : dans la généralité des cas particuliers", 
            "Rép : seulement dans les cas prévus par le législateur"
        ], 
        correct: 2,
        explanation: "Elle est juste « dans la généralité des cas particuliers. » Cette formulation nuancée reconnaît la validité générale de la loi tout en admettant l'existence d'exceptions légitimes. Elle évite ainsi à la fois le relativisme (qui nierait la valeur de la loi) et l'absolutisme (qui refuserait toute exception)."
    },

    // Question n°25
    { 
        question: "Question n°25 : Qu'est-ce qui serait « mal » dans les circonstances exceptionnelles ?",
        answers: [
            "Rép : transgresser la loi", 
            "Rép : obéir à la loi", 
            "Rép : interpréter la loi"
        ], 
        correct: 2,
        explanation: "« il serait mal d'obéir à la loi » dans ces cas exceptionnels. Cette affirmation forte renverse la conception commune selon laquelle l'obéissance aux lois est toujours bonne. Pour Thomas d'Aquin, l'obéissance aveugle peut parfois être moralement répréhensible quand elle fait obstacle à la réalisation de valeurs supérieures comme la justice."
    },

    // Question n°26
    { 
        question: "Question n°26 : Quelle est l'opposition principale dans ce texte ?",
        answers: [
            "Rép : entre loi ancienne et loi nouvelle", 
            "Rép : entre lettre et esprit de la loi", 
            "Rép : entre loi divine et loi humaine"
        ], 
        correct: 2,
        explanation: "Le texte oppose la lettre (application stricte) et l'esprit (finalité) de la loi. Cette opposition structure toute la réflexion de Thomas d'Aquin sur le droit. Elle permet de résoudre les cas difficiles où l'application littérale de la loi créerait une injustice, sans pour autant rejeter l'autorité de la loi elle-même."
    },

    // Question n°27
    { 
        question: "Question n°27 : Que risque-t-on en appliquant strictement la loi dans tous les cas ?",
        answers: [
            "Rép : de rendre la société plus juste", 
            "Rép : de trahir la justice dans certains cas", 
            "Rép : de simplifier la justice"
        ], 
        correct: 2,
        explanation: "L'application stricte peut être « contraire à la justice » selon le texte. Ce risque est particulièrement présent dans les systèmes juridiques complexes où la multiplication des règles peut créer des contradictions ou des applications absurdes. L'équité (épiquie, ἐπιείκεια) sert précisément à corriger ces défauts du système."
    },

    // Question n°28
    { 
        question: "Question n°28 : Quelle qualité devrait avoir un bon juge selon cette conception ?",
        answers: [
            "Rép : rigidité dans l'application des lois", 
            "Rép : capacité d'adaptation aux circonstances", 
            "Rép : obéissance aveugle au législateur"
        ], 
        correct: 2,
        explanation: "Un bon juge devrait savoir adapter la loi aux circonstances particulières. Cette qualité implique non seulement une connaissance du droit, mais aussi une sagesse pratique (prudence) et une compréhension des finalités de la loi. Le juge devient ainsi le complément nécessaire du législateur, corrigeant par l'application ce que la généralité des lois a de nécessairement imparfait."
    },

    // Question n°29
    { 
        question: "Question n°29 : Comment Thomas d'Aquin qualifie-t-il les circonstances où il faut transgresser ?",
        answers: [
            "Rép : rares et exceptionnelles", 
            "Rép : fréquentes et habituelles", 
            "Rép : identiques pour tous"
        ], 
        correct: 1,
        explanation: "Il parle de « certaines situations » et de « cas particuliers » exceptionnels. Cette précision est importante pour éviter tout malentendu : Thomas d'Aquin ne défend pas l'arbitraire ou la désobéissance généralisée, mais seulement des exceptions justifiées et rares. L'équité est une correction exceptionnelle, non une règle générale."
    },

    // Question n°30
    { 
        question: "Question n°30 : Que représente le « fou réclamant son épée » dans l'argumentation ?",
        answers: [
            "Rép : un cas ordinaire", 
            "Rép : un contre-exemple montrant les limites de la loi", 
            "Rép : un exemple de désobéissance justifiée"
        ], 
        correct: 2,
        explanation: "C'est un contre-exemple qui montre où l'application stricte de la loi serait dangereuse. Cet exemple frappant rend tangible l'argument théorique de Thomas d'Aquin. Il montre concrètement comment une loi parfaitement raisonnable dans son principe (rendre les dépôts) peut avoir des conséquences absurdes ou dangereuses dans des cas particuliers."
    },

    // Question n°31
    { 
        question: "Question n°31 : Quelle est l'intention du législateur selon Thomas d'Aquin ?",
        answers: [
            "Rép : créer des lois parfaites", 
            "Rép : prévoir tous les cas particuliers", 
            "Rép : établir des règles pour le bien commun"
        ], 
        correct: 3,
        explanation: "Le législateur cherche à « sauvegarder » le bien commun. Cette intention doit guider non seulement la création des lois, mais aussi leur interprétation et leur application. Quand une application littérale contredirait cette intention, il faut selon Thomas d'Aquin privilégier l'intention sur la lettre, car c'est l'intention qui donne son sens à la loi."
    },

    // Question n°32
    { 
        question: "Question n°32 : Pourquoi la loi est-elle nécessairement générale ?",
        answers: [
            "Rép : par paresse des législateurs", 
            "Rép : parce qu'elle doit couvrir de nombreux cas", 
            "Rép : par tradition juridique"
        ], 
        correct: 2,
        explanation: "Elle est générale car les législateurs considèrent « les conditions générales. » Cette généralité n'est pas un défaut, mais une nécessité pratique : des lois trop spécifiques seraient trop nombreuses et impossibles à appliquer systématiquement. La généralité permet au contraire de couvrir un grand nombre de cas avec un nombre limité de règles."
    },

    // Question n°33
    { 
        question: "Question n°33 : Que signifie « transgresser la lettre de la loi » ?",
        answers: [
            "Rép : abolir la loi", 
            "Rép : ne pas appliquer le texte strictement", 
            "Rép : créer une nouvelle loi"
        ], 
        correct: 2,
        explanation: "Transgresser la lettre signifie ne pas appliquer le texte à la lettre dans certains cas. Il ne s'agit pas de rejeter la loi, mais de l'interpréter à la lumière de sa finalité. Cette transgression est donc paradoxalement une forme de fidélité à la loi, puisqu'elle cherche à réaliser son esprit quand sa lettre y ferait obstacle."
    },

    // Question n°34
    { 
        question: "Question n°34 : Quelle est la source de cette réflexion de Thomas d'Aquin ?",
        answers: [
            "Rép : la Bible", 
            "Rép : la philosophie aristotélicienne", 
            "Rép : le droit romain"
        ], 
        correct: 2,
        explanation: "Cette réflexion sur l'équité vient d'Aristote. Thomas d'Aquin, en bon aristotélicien, intègre cette notion à sa pensée théologique. Cependant, il la développe et l'enrichit en la confrontant à la tradition juridique romaine et à la théologie chrétienne, créant ainsi une synthèse originale."
    },

    // Question n°35
    { 
        question: "Question n°35 : En quel siècle Thomas d'Aquin a-t-il écrit ce texte ?",
        answers: [
            "Rép : XIIe siècle", 
            "Rép : XIIIe siècle", 
            "Rép : XIVe siècle"
        ], 
        correct: 2,
        explanation: "La Somme théologique a été écrite au XIIIe siècle (1269). Ce siècle représente l'apogée de la scolastique médiévale, période où la philosophie d'Aristote est redécouverte et intégrée à la pensée chrétienne. Thomas d'Aquin est l'une des figures majeures de cette synthèse entre foi et raison."
    },

    // Question n°36
    { 
        question: "Question n°36 : Quelle œuvre contient ce passage ?",
        answers: [
            "Rép : La Cité de Dieu", 
            "Rép : Somme théologique", 
            "Rép : Les Politiques"
        ], 
        correct: 2,
        explanation: "Ce passage est tiré de la Somme théologique. Cette œuvre monumentale, inachevée à la mort de Thomas d'Aquin, représente la synthèse de sa pensée. Elle traite de questions théologiques, philosophiques, éthiques et juridiques, cherchant à articuler systématiquement la raison et la foi."
    },

    // Question n°37
    { 
        question: "Question n°37 : Que montre l'exemple de la trahison de la patrie ?",
        answers: [
            "Rép : qu'il faut toujours rendre un dépôt", 
            "Rép : que certains principes peuvent entrer en conflit", 
            "Rép : que la patrie est plus importante que la justice"
        ], 
        correct: 2,
        explanation: "Il montre un conflit entre le devoir de rendre un dépôt et le devoir envers la patrie. Ce type de conflit de devoirs est particulièrement éclairant pour la pensée juridique : il montre que des principes apparemment absolus (comme la fidélité aux engagements) peuvent entrer en contradiction avec d'autres principes également importants (comme la loyauté envers la communauté politique)."
    },

    // Question n°38
    { 
        question: "Question n°38 : Quelle est la position de Thomas d'Aquin face aux lois injustes ?",
        answers: [
            "Rép : il faut toujours leur obéir", 
            "Rép : il faut parfois y désobéir", 
            "Rép : il faut les réformer d'abord"
        ], 
        correct: 2,
        explanation: "Le texte justifie de transgresser la loi quand elle va contre sa finalité. Cette position est nuancée : il ne s'agit pas de désobéir systématiquement aux lois qu'on estime injustes, mais seulement dans les cas où l'application de la loi créerait une injustice manifeste. La désobéissance reste exceptionnelle et doit être fondée sur des raisons solides."
    },

    // Question n°39
    { 
        question: "Question n°39 : Comment qualifier la pensée juridique de Thomas d'Aquin ?",
        answers: [
            "Rép : positiviste", 
            "Rép : naturaliste", 
            "Rép : réaliste"
        ], 
        correct: 2,
        explanation: "C'est une pensée naturaliste qui juge les lois humaines à l'aune de la loi naturelle. Pour Thomas d'Aquin, il existe une loi naturelle (accessible à la raison) qui sert de critère pour évaluer les lois positives. Quand une loi humaine contredit la loi naturelle, elle perd sa force obligatoire et peut légitimement être transgressée."
    },

    // Question n°40
    { 
        question: "Question n°40 : Quel est le statut des exceptions dans cette conception ?",
        answers: [
            "Rép : elles sont interdites", 
            "Rép : elles sont nécessaires", 
            "Rép : elles sont dangereuses"
        ], 
        correct: 2,
        explanation: "Les exceptions sont nécessaires pour réaliser la justice dans des cas particuliers. Cette nécessité découle de la nature même des lois humaines, qui sont nécessairement générales et donc nécessairement imparfaites dans leur application concrète. Les exceptions ne sont pas des faiblesses du système, mais au contraire ce qui lui permet de fonctionner correctement."
    },

    // Question n°41
    { 
        question: "Question n°41 : Que faut-il privilégier entre la forme et le fond de la loi ?",
        answers: [
            "Rép : toujours la forme", 
            "Rép : toujours le fond", 
            "Rép : le fond quand la forme y fait obstacle"
        ], 
        correct: 3,
        explanation: "Il faut privilégier le fond (l'esprit de justice) quand la forme (la lettre) y fait obstacle. Cette position évite les deux extrêmes : le formalisme qui sacralise la lettre au mépris de la justice, et l'arbitraire qui négligerait complètement les formes juridiques. Elle cherche au contraire à articuler forme et fond de manière équilibrée."
    },

    // Question n°42
    { 
        question: "Question n°42 : Quelle est la limite de tout système juridique selon ce texte ?",
        answers: [
            "Rép : son manque de précision", 
            "Rép : son incapacité à prévoir tous les cas", 
            "Rép : sa complexité"
        ], 
        correct: 2,
        explanation: "Aucun système ne peut prévoir tous les cas particuliers. Cette limite n'est pas contingente (elle ne dépend pas de l'habileté des législateurs) mais essentielle (elle découle de la nature des choses). La reconnaissance de cette limite est une marque de réalisme et de sagesse, qui évite l'illusion d'un système juridique parfaitement complet et cohérent."
    },

    // Question n°43
    { 
        question: "Question n°43 : Comment Thomas d'Aquin envisage-t-il le rapport entre loi et moralité ?",
        answers: [
            "Rép : comme séparés", 
            "Rép : comme intimement liés", 
            "Rép : comme identiques"
        ], 
        correct: 2,
        explanation: "La loi doit servir la justice, qui est une valeur morale. Pour Thomas d'Aquin, le droit ne peut être séparé de la morale, car sa finalité est essentiellement morale (réaliser la justice et le bien commun). Cependant, loi et morale ne sont pas identiques : la loi est une institution humaine nécessairement imparfaite, tandis que la morale relève de la conscience individuelle."
    },

    // Question n°44
    { 
        question: "Question n°44 : Quel rôle joue la prudence dans cette conception ?",
        answers: [
            "Rép : aucun rôle", 
            "Rép : un rôle secondaire", 
            "Rép : un rôle essentiel"
        ], 
        correct: 3,
        explanation: "La prudence est essentielle pour savoir quand et comment adapter la loi. Cette vertu intellectuelle et morale permet de discerner, dans des situations concrètes et complexes, ce que requiert véritablement la justice. Sans la prudence, l'équité (épiquie, ἐπιείκεια) risquerait de dégénérer en arbitraire ou en laxisme."
    },

    // Question n°45
    { 
        question: "Question n°45 : Que signifie « épiquie, ἐπιείκεια » dans la tradition thomiste ?",
        answers: [
            "Rép : l'égalité devant la loi", 
            "Rép : la vertu qui adapte la loi aux cas particuliers", 
            "Rép : la justice distributive"
        ], 
        correct: 2,
        explanation: "L'épiquie, ἐπιείκεια est la vertu qui corrige la loi générale dans des cas particuliers. Terme d'origine grecque, elle désigne cette forme supérieure de justice qui sait déroger à la règle générale quand son application stricte créerait une injustice. C'est une vertu du juge, mais aussi du citoyen, qui doit parfois interpréter les lois à la lumière de leur finalité."
    },

    // Question n°46
    { 
        question: "Question n°46 : Quel est le danger d'une application trop rigide des lois ?",
        answers: [
            "Rép : l'arbitraire", 
            "Rép : l'injustice dans certains cas", 
            "Rép : la lenteur de la justice"
        ], 
        correct: 2,
        explanation: "Une application trop rigide peut mener à l'injustice dans des cas particuliers. Ce danger est particulièrement réel dans les systèmes juridiques complexes, où l'accumulation des règles peut créer des situations absurdes ou injustes. L'histoire juridique fournit de nombreux exemples de ce phénomène, que l'équité cherche précisément à éviter."
    },

    // Question n°47
    { 
        question: "Question n°47 : Comment Thomas d'Aquin justifie-t-il moralement la désobéissance ?",
        answers: [
            "Rép : par l'intérêt personnel", 
            "Rép : par un principe supérieur de justice", 
            "Rép : par la nécessité politique"
        ], 
        correct: 2,
        explanation: "Il justifie la désobéissance par la fidélité à « l'esprit de justice. » Cette justification est profondément morale : il ne s'agit pas de désobéir par intérêt ou par caprice, mais par souci d'une justice supérieure. La désobéissance ainsi conçue n'est pas une négation de l'autorité, mais au contraire une forme exigeante de respect pour ses véritables finalités."
    },

    // Question n°48
    { 
        question: "Question n°48 : Quelle est la différence entre légalité et légitimité selon ce texte ?",
        answers: [
            "Rép : aucune différence", 
            "Rép : la légalité est formelle, la légitimité est morale", 
            "Rép : la légalité est morale, la légitimité est formelle"
        ], 
        correct: 2,
        explanation: "La légalité concerne le respect de la lettre, la légitimité concerne la conformité à la justice. Cette distinction est fondamentale : une action peut être légale (conforme à la lettre de la loi) sans être légitime (conforme à la justice), et inversement. Pour Thomas d'Aquin, c'est la légitimité qui doit primer quand les deux entrent en conflit."
    },

    // Question n°49
    { 
        question: "Question n°49 : Que faut-il faire quand deux devoirs entrent en conflit ?",
        answers: [
            "Rép : suivre toujours le devoir légal", 
            "Rép : choisir le devoir moral supérieur", 
            "Rép : ne rien faire"
        ], 
        correct: 2,
        explanation: "Il faut choisir le devoir moral supérieur (comme la justice ou le bien commun). Cette solution découle directement de la hiérarchie des valeurs établie par Thomas d'Aquin : quand des principes entrent en conflit, c'est le plus important qui doit prévaloir. Cette approche évite à la fois le relativisme (qui refuserait de hiérarchiser) et le rigorisme (qui appliquerait mécaniquement les règles)."
    },

    // Question n°50
    { 
        question: "Question n°50 : En quoi cette conception s'oppose-t-elle au légalisme ?",
        answers: [
            "Rép : elle refuse toute exception", 
            "Rép : elle admet des exceptions justifiées", 
            "Rép : elle nie la valeur des lois"
        ], 
        correct: 2,
        explanation: "Contre le légalisme strict, elle admet des exceptions moralement justifiées. Le légalisme absolutise la lettre de la loi au détriment de sa finalité, tandis que Thomas d'Aquin cherche à articuler respect des règles et souci de la justice. Cette position représente une voie moyenne entre l'anarchie (qui nie toute autorité) et le légalisme (qui sacralise les formes)."
    }
];