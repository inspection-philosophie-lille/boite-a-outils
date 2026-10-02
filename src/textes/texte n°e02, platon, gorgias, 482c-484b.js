// ============================================
// DONNÉES GÉNÉRALES
// ============================================

const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Platon";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	source: "PLATON, <em>Gorgias</em>, 482c-484b, in <em>Œuvres complètes</em>, trad. Léon Robin, Bibliothèque de la Pléiade, Gallimard, 1950, pp.406-407",
	texte: "« [1] **En effet**, Calliclès, **c'est pourquoi** la vraie politique, c'est bien celle que tu pratiques toi-même. [2] **Mais** il faut considérer ceci : **si** la vie ne doit pas être **uniquement** la conservation de soi **mais** une existence meilleure, **il s'ensuit qu'**il nous faut réfléchir à ce qui est véritablement utile. [3] **Car** ce n'est pas n'importe quel plaisir qui est un bien. [4] **Au contraire**, la plupart d'entre eux sont mauvais. [5] **C'est pourquoi** l'homme tempérant, qui fuit les plaisirs, est heureux, **tandis que** l'intempérant est malheureux. [6] **Ainsi**, la vertu ne consiste pas à assouvir ses désirs **mais** à les maîtriser par la raison. [7] **Par conséquent**, ce que tu appelles justice naturelle n'est qu'une loi du plus fort. [8] **Or** la loi véritable est celle qui vise l'avantage commun, **et non** l'intérêt particulier. [9] **En réalité**, le tyran est le plus malheureux des hommes, **puisque** son âme est en désordre. »"
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    { 
        question: "Question n°1 : Que doit-on rechercher dans la vie selon Socrate ?",
        answers: [
            "uniquement la conservation de soi", 
            "une existence meilleure et ce qui est véritablement utile", 
            "la satisfaction immédiate de tous les désirs"
        ], 
        correct: 2,
        explanation: "Socrate affirme : « si la vie ne doit pas être uniquement la conservation de soi mais une existence meilleure, il s'ensuit qu'il nous faut réfléchir à ce qui est véritablement utile. » Cette distinction est fondamentale : il ne s'agit pas de simplement survivre, mais de vivre bien. Socrate oppose une conception quantitative de la vie (durer) à une conception qualitative (vivre selon la vertu). Cette réflexion sur ce qui est « véritablement utile » prépare la critique des plaisirs immédiats. L'enjeu est de distinguer ce qui semble utile sur le moment de ce qui l'est réellement en vue du bonheur authentique."
    },
    { 
        question: "Question n°2 : Tous les plaisirs sont-ils bons selon Socrate ?",
        answers: [
            "oui, tout plaisir est un bien", 
            "non, la plupart des plaisirs sont mauvais", 
            "seuls les plaisirs du corps sont bons"
        ], 
        correct: 2,
        explanation: "Socrate est catégorique : « ce n'est pas n'importe quel plaisir qui est un bien. Au contraire, la plupart d'entre eux sont mauvais. » Cette thèse s'oppose directement à l'hédonisme de Calliclès, pour qui le bien consiste à satisfaire tous ses désirs. Socrate introduit une distinction qualitative parmi les plaisirs : certains sont bénéfiques, d'autres nuisibles. Cette position fonde la nécessité d'une évaluation rationnelle des désirs. Elle annonce la conception platonicienne de la tempérance comme vertu essentielle."
    },
    { 
        question: "Question n°3 : Qui est heureux selon Socrate ?",
        answers: [
            "l'homme tempérant qui fuit les plaisirs mauvais", 
            "l'homme qui assouvit tous ses désirs", 
            "l'homme riche et puissant"
        ], 
        correct: 1,
        explanation: "Socrate affirme : « l'homme tempérant, qui fuit les plaisirs [mauvais], est heureux, tandis que l'intempérant est malheureux. » Cette affirmation renverse la conception commune du bonheur, qui l'associe souvent à l'abondance de plaisirs. Pour Socrate, le bonheur ne dépend pas de la quantité de plaisirs mais de leur qualité et de l'ordre de l'âme. L'homme tempérant est celui qui maîtrise ses désirs et choisit les plaisirs conformes au bien. L'intempérant, au contraire, est esclave de ses désirs et vit dans le désordre."
    },
    { 
        question: "Question n°4 : En quoi consiste la vertu selon Socrate ?",
        answers: [
            "à assouvir ses désirs", 
            "à maîtriser ses désirs par la raison", 
            "à accumuler des richesses"
        ], 
        correct: 2,
        explanation: "Socrate déclare : « la vertu ne consiste pas à assouvir ses désirs mais à les maîtriser par la raison. » Cette définition de la vertu comme maîtrise rationnelle des désirs est au cœur de l'éthique platonicienne. Elle s'oppose radicalement à la thèse de Calliclès, pour qui la vertu consiste au contraire à laisser libre cours à ses désirs. Pour Socrate, la raison doit gouverner les désirs comme le pilote gouverne le navire. Cette maîtrise n'est pas répression mais ordre : il s'agit de hiérarchiser les désirs et de les subordonner au bien de l'âme."
    },
    { 
        question: "Question n°5 : Que représente la « justice naturelle » de Calliclès selon Socrate ?",
        answers: [
            "la loi véritable", 
            "une loi du plus fort", 
            "un principe divin"
        ], 
        correct: 2,
        explanation: "Socrate affirme : « ce que tu appelles justice naturelle n'est qu'une loi du plus fort. » Cette critique démasque la prétention de Calliclès à fonder la justice sur la nature. Pour Calliclès, la nature veut que les forts dominent les faibles et que leurs désirs soient satisfaits sans entrave. Socrate montre que cette « justice naturelle » n'est en réalité qu'une justification de la domination et de l'égoïsme. Elle confond la force et le droit, la puissance et la légitimité. Socrate oppose à cette pseudo-justice une conception véritable de la loi."
    },
    { 
        question: "Question n°6 : Quelle est la loi véritable selon Socrate ?",
        answers: [
            "celle qui vise l'avantage commun", 
            "celle qui sert l'intérêt du plus fort", 
            "celle qui est établie par les dieux"
        ], 
        correct: 1,
        explanation: "Socrate définit : « la loi véritable est celle qui vise l'avantage commun, et non l'intérêt particulier. » Cette conception de la loi s'oppose à celle de Calliclès, pour qui la loi n'est qu'une convention établie par les faibles pour se protéger des forts. Pour Socrate, la loi véritable a une dimension éthique et politique : elle vise le bien de la communauté tout entière, non la satisfaction des intérêts individuels. Elle exprime ce qui est juste en soi et fonde l'obligation morale et politique."
    },
    { 
        question: "Question n°7 : Qui est le plus malheureux des hommes selon Socrate ?",
        answers: [
            "le pauvre", 
            "le tyran", 
            "l'esclave"
        ], 
        correct: 2,
        explanation: "Socrate affirme : « le tyran est le plus malheureux des hommes, puisque son âme est en désordre. » Cette thèse est profondément contre-intuitive : le tyran, qui dispose de tous les pouvoirs et peut satisfaire tous ses désirs, semble être le plus heureux des hommes. Mais pour Socrate, le bonheur ne dépend pas des biens extérieurs mais de l'état de l'âme. Le tyran, en assouvissant tous ses désirs, laisse son âme dans le désordre : il est esclave de ses passions. Son pouvoir extérieur masque une misère intérieure."
    },
    { 
        question: "Question n°8 : Pourquoi le tyran est-il malheureux selon Socrate ?",
        answers: [
            "parce qu'il a des ennemis", 
            "parce que son âme est en désordre", 
            "parce qu'il est pauvre"
        ], 
        correct: 2,
        explanation: "Socrate explique : « le tyran est le plus malheureux des hommes, puisque son âme est en désordre. » Le désordre de l'âme est ici conçu comme un déséquilibre entre les différentes parties de l'âme (rationnelle, irascible, désirante). Chez le tyran, la partie désirante domine et soumet la raison, ce qui produit un état de servitude intérieure. Le tyran, tout-puissant à l'extérieur, est en réalité esclave de ses désirs les plus bas. Cette analyse psychologique et morale fonde la condamnation platonicienne de la tyrannie."
    },
    { 
        question: "Question n°9 : Quel est le rapport entre plaisir et bien selon Socrate ?",
        answers: [
            "tout plaisir est un bien", 
            "le plaisir n'est pas identique au bien", 
            "le bien est l'absence de plaisir"
        ], 
        correct: 2,
        explanation: "Socrate affirme : « ce n'est pas n'importe quel plaisir qui est un bien. Au contraire, la plupart d'entre eux sont mauvais. » Cette distinction entre plaisir et bien est capitale dans la philosophie platonicienne. Elle s'oppose à l'hédonisme, qui identifie le bien et le plaisir. Pour Socrate, certains plaisirs peuvent être nuisibles, soit parce qu'ils nuisent à la santé du corps, soit parce qu'ils désordonnent l'âme. Le bien n'est donc pas le plaisir, mais ce qui est conforme à la vertu et à la raison."
    },
    { 
        question: "Question n°10 : Quelle est la conception du bonheur chez Socrate ?",
        answers: [
            "le bonheur est la satisfaction de tous les désirs", 
            "le bonheur est lié à la vertu et à l'ordre de l'âme", 
            "le bonheur est la richesse"
        ], 
        correct: 2,
        explanation: "Pour Socrate, le bonheur est indissociable de la vertu et de l'ordre de l'âme. L'homme tempérant, qui maîtrise ses désirs par la raison, est heureux ; l'intempérant, qui est esclave de ses désirs, est malheureux. Cette conception eudémoniste de l'éthique fait du bonheur non pas un état de satisfaction immédiate, mais un état durable qui résulte d'une vie conforme à la vertu. Le bonheur n'est donc pas un don de la fortune mais un accomplissement de la raison. Cette thèse sera développée par Aristote dans l'Éthique à Nicomaque."
    },
    { 
        question: "Question n°11 : Quel est le rôle de la raison dans l'éthique platonicienne ?",
        answers: [
            "la raison doit être soumise aux désirs", 
            "la raison doit maîtriser les désirs", 
            "la raison n'a aucun rôle"
        ], 
        correct: 2,
        explanation: "Dans l'éthique platonicienne, la raison joue un rôle central : elle doit maîtriser les désirs. Socrate affirme : « la vertu ne consiste pas à assouvir ses désirs mais à les maîtriser par la raison. » Cette conception fait de la raison la faculté directrice de l'âme. Elle doit commander aux désirs comme le cocher commande aux chevaux (image célèbre du Phèdre). Cette maîtrise n'est pas une répression brutale mais une éducation : la raison doit persuader les désirs de se conformer au bien."
    },
    { 
        question: "Question n°12 : Quelle est la critique adressée à Calliclès par Socrate ?",
        answers: [
            "Calliclès est trop timide", 
            "Calliclès confond la force et le droit", 
            "Calliclès est trop savant"
        ], 
        correct: 2,
        explanation: "Socrate critique Calliclès en montrant qu'il confond la force et le droit. Calliclès prétend fonder la justice sur la nature, selon laquelle les forts doivent dominer les faibles. Mais Socrate objecte : « ce que tu appelles justice naturelle n'est qu'une loi du plus fort. » En d'autres termes, Calliclès ne fait que justifier la domination par la force, sans fonder véritablement la justice. La force ne crée pas le droit : le fait que quelqu'un soit plus fort ne signifie pas qu'il soit plus juste."
    },
    { 
        question: "Question n°13 : Qu'est-ce qui distingue la loi véritable de la loi du plus fort ?",
        answers: [
            "la loi véritable vise l'avantage commun, la loi du plus fort l'intérêt particulier", 
            "la loi véritable est écrite, la loi du plus fort orale", 
            "il n'y a pas de différence"
        ], 
        correct: 1,
        explanation: "Socrate distingue clairement les deux : « la loi véritable est celle qui vise l'avantage commun, et non l'intérêt particulier. » La loi du plus fort, au contraire, ne vise que l'intérêt de celui qui a la puissance. Cette distinction est fondamentale : elle oppose une conception éthique de la loi (qui vise le bien de tous) à une conception cynique (qui n'est qu'un instrument de domination). Pour Socrate, la loi véritable oblige même le plus fort, car elle est fondée sur la justice et non sur la puissance."
    },
    { 
        question: "Question n°14 : Quelle est la méthode philosophique de Socrate dans ce passage ?",
        answers: [
            "la rhétorique persuasive", 
            "le questionnement critique et la réfutation (elenchos)", 
            "la démonstration mathématique"
        ], 
        correct: 2,
        explanation: "Dans ce passage, Socrate utilise sa méthode caractéristique : le questionnement critique et la réfutation (elenchos). Il ne se contente pas d'affirmer ses propres thèses ; il examine et critique les thèses de son interlocuteur, en montrant leurs contradictions internes. Ici, il montre que la position de Calliclès est intenable : si tous les plaisirs n'en sont pas au même titre, alors il faut choisir, et ce choix exige un critère rationnel. Socrate ne cherche pas seulement à réfuter mais à faire accoucher en lui une vérité qu'il porte sans le savoir."
    },
    { 
        question: "Question n°15 : Quelle est la conception de l'âme chez Platon dans ce passage ?",
        answers: [
            "l'âme est matérielle", 
            "l'âme a un ordre ou un désordre qui détermine le bonheur", 
            "l'âme est une illusion"
        ], 
        correct: 2,
        explanation: "Dans ce passage, Platon conçoit l'âme comme une réalité dont l'état (ordre ou désordre) détermine le bonheur. Le tyran est malheureux « puisque son âme est en désordre ». Inversement, l'homme tempérant a une âme ordonnée. Cette conception de l'âme comme structure hiérarchique (raison, courage, désir) est développée dans la République et le Phèdre. L'ordre de l'âme consiste dans la soumission des parties inférieures à la partie supérieure, la raison. La vertu est l'ordre de l'âme, le vice son désordre."
    },
    { 
        question: "Question n°16 : Comment Socrate définit-il le rapport entre tempérance et bonheur ?",
        answers: [
            "la tempérance est un obstacle au bonheur", 
            "la tempérance est la condition du bonheur", 
            "il n'y a pas de rapport"
        ], 
        correct: 2,
        explanation: "Pour Socrate, la tempérance est la condition du bonheur : « l'homme tempérant, qui fuit les plaisirs [mauvais], est heureux. » La tempérance (sôphrosunè) n'est pas une privation mais une libération : elle libère l'âme de la tyrannie des désirs. L'homme tempérant n'est pas celui qui se prive de tout plaisir, mais celui qui choisit les plaisirs conformes au bien et renonce à ceux qui nuisent à son âme. Le bonheur est donc inséparable d'un certain rapport aux plaisirs, fondé sur la maîtrise et non sur la satisfaction immédiate."
    },
    { 
        question: "Question n°17 : Quel est le rôle de la loi dans la cité selon Socrate ?",
        answers: [
            "la loi doit servir les intérêts des gouvernants", 
            "la loi doit viser l'avantage commun", 
            "la loi doit être abolie"
        ], 
        correct: 2,
        explanation: "Pour Socrate, la loi dans la cité doit viser l'avantage commun : « la loi véritable est celle qui vise l'avantage commun, et non l'intérêt particulier. » Cette conception de la loi s'oppose à la thèse de Calliclès, pour qui la loi n'est qu'une convention établie par les faibles pour se protéger des forts. Pour Platon, la loi juste est celle qui organise la cité en vue du bien de tous. Cette conception fonde la justice politique sur la recherche du bien commun, non sur la domination."
    },
    { 
        question: "Question n°18 : Comment Socrate caractérise-t-il la rhétorique de Calliclès ?",
        answers: [
            "comme une vraie politique", 
            "comme une flatterie", 
            "comme une science exacte"
        ], 
        correct: 2,
        explanation: "Socrate commence ironiquement par dire : « la vraie politique, c'est bien celle que tu pratiques toi-même », mais l'ensemble du passage montre que cette affirmation est ironique. En réalité, Socrate considère la rhétorique de Calliclès comme une flatterie (kolakeia), non comme une vraie politique. La vraie politique, selon Platon, est celle qui améliore les citoyens, qui vise leur bien, qui se fonde sur la connaissance du juste. Cette critique de la rhétorique est développée tout au long du Gorgias."
    },
    { 
        question: "Question n°19 : Quelle est la conception platonicienne du plaisir dans ce texte ?",
        answers: [
            "tous les plaisirs sont bons", 
            "les plaisirs doivent être évalués selon un critère rationnel", 
            "le plaisir est le souverain bien"
        ], 
        correct: 2,
        explanation: "Dans ce texte, Platon soutient que les plaisirs doivent être évalués selon un critère rationnel. Tous ne sont pas bons : « la plupart d'entre eux sont mauvais ». Cette position rejette l'hédonisme naïf, qui identifie le bien et le plaisir. Elle fonde la nécessité d'une évaluation rationnelle des plaisirs : la raison doit examiner chaque plaisir et déterminer s'il est conforme au bien de l'âme. Cette conception ouvre la voie à la distinction platonicienne entre plaisirs purs et impurs, développée dans le Philèbe."
    },
    { 
        question: "Question n°20 : Quel est l'objectif de Socrate dans ce passage ?",
        answers: [
            "convaincre Calliclès de renoncer à l'injustice", 
            "gagner de l'argent", 
            "devenir tyran"
        ], 
        correct: 1,
        explanation: "L'objectif de Socrate dans ce passage est de convaincre Calliclès de renoncer à l'injustice et à la vie intempérante. Socrate ne cherche pas à triompher par la rhétorique mais à faire reconnaître la vérité : que le bonheur ne consiste pas dans la satisfaction de tous les désirs, que la justice n'est pas la loi du plus fort, que la tempérance est la condition du bonheur. Cet objectif est éthique et pédagogique : il s'agit de convertir Calliclès à la vie philosophique. Cette dimension pédagogique est caractéristique de la méthode socratique."
    },
    { 
        question: "Question n°21 : Quelle est la nature du bien selon Platon ?",
        answers: [
            "le bien est identique au plaisir", 
            "le bien est ce qui ordonne l'âme et la cité", 
            "le bien est l'absence de douleur"
        ], 
        correct: 2,
        explanation: "Pour Platon, le bien est ce qui ordonne l'âme et la cité. Dans ce passage, le bien est ce qui est « véritablement utile » et qui permet de vivre « une existence meilleure ». Il s'oppose aux plaisirs mauvais qui désordonnent l'âme. Cette conception du bien comme principe d'ordre est développée dans la République, où le bien est comparé au soleil qui éclaire et fait vivre toutes choses. Le bien n'est pas une réalité parmi d'autres mais le principe qui rend possible l'ordre et l'harmonie."
    },
    { 
        question: "Question n°22 : Comment Socrate conçoit-il la justice dans ce passage ?",
        answers: [
            "comme l'avantage du plus fort", 
            "comme l'harmonie de l'âme et de la cité", 
            "comme une convention arbitraire"
        ], 
        correct: 2,
        explanation: "Dans ce passage, Socrate conçoit la justice comme l'harmonie de l'âme et de la cité. La justice s'oppose à la « loi du plus fort », qui n'est qu'une apparence de justice. La justice véritable est celle qui ordonne l'âme (tempérance) et la cité (loi visant l'avantage commun). Cette conception de la justice comme harmonie est développée dans la République, où elle est définie comme l'accord des parties de l'âme sous la direction de la raison. La justice n'est donc pas une vertu parmi d'autres mais la vertu qui organise toutes les autres."
    },
    { 
        question: "Question n°23 : Quel est le rapport entre vertu et connaissance chez Socrate ?",
        answers: [
            "la vertu est indépendante de la connaissance", 
            "la vertu est une forme de connaissance", 
            "la vertu s'oppose à la connaissance"
        ], 
        correct: 2,
        explanation: "Bien que ce point ne soit pas explicitement développé dans ce passage, il est sous-jacent à toute la pensée de Socrate : la vertu est une forme de connaissance. Pour Socrate, on ne peut faire le mal que par ignorance : celui qui sait véritablement ce qui est bien ne peut pas ne pas le faire. Cette thèse, dite de l'intellectualisme socratique, identifie vertu et savoir. Dans notre passage, cette thèse se manifeste par l'idée qu'il faut « réfléchir à ce qui est véritablement utile » et que la raison doit maîtriser les désirs."
    },
    { 
        question: "Question n°24 : Quelle est la fonction de la raison dans la cité selon Platon ?",
        answers: [
            "la raison doit obéir aux passions", 
            "la raison doit gouverner la cité", 
            "la raison n'a aucun rôle politique"
        ], 
        correct: 2,
        explanation: "Pour Platon, la raison doit gouverner la cité comme elle doit gouverner l'âme. Cette analogie entre l'âme et la cité est au cœur de la République : de même que dans l'âme la raison doit commander aux désirs, de même dans la cité les philosophes (qui incarnent la raison) doivent gouverner. Dans notre passage, cette conception se manifeste par l'idée que la loi véritable vise l'avantage commun et que le tyran, qui suit ses désirs, est malheureux. Cette conception fonde le gouvernement des philosophes-rois."
    },
    { 
        question: "Question n°25 : Comment Platon conçoit-il le plaisir dans sa philosophie morale ?",
        answers: [
            "comme un bien en soi", 
            "comme un bien conditionnel qui doit être évalué", 
            "comme un mal absolu"
        ], 
        correct: 2,
        explanation: "Dans la philosophie morale de Platon, le plaisir est un bien conditionnel qui doit être évalué. Ce n'est pas un bien en soi (comme le soutient l'hédonisme), ni un mal absolu (comme le soutiennent certains ascètes). Dans notre passage, Socrate affirme que « la plupart » des plaisirs sont mauvais, ce qui implique que certains sont bons. Le plaisir n'est donc pas condamné en bloc, mais il doit être soumis à l'évaluation de la raison. Cette conception ouvre la voie à la hiérarchie des plaisirs développée dans le Philèbe."
    },
    { 
        question: "Question n°26 : Quelle est la conception de la liberté chez Platon dans ce texte ?",
        answers: [
            "la liberté est l'absence de contrainte", 
            "la liberté est l'obéissance à la raison", 
            "la liberté est la satisfaction des désirs"
        ], 
        correct: 2,
        explanation: "Dans ce texte, Platon conçoit la liberté comme l'obéissance à la raison. Cette conception est paradoxale pour un moderne, qui tend à identifier la liberté à l'absence de contrainte et à la satisfaction des désirs. Pour Platon, au contraire, celui qui suit ses désirs est esclave de ses désirs. Le tyran, qui peut satisfaire tous ses désirs, est le plus malheureux des hommes parce qu'il est esclave. L'homme libre est celui qui maîtrise ses désirs par la raison. Cette conception de la liberté comme autonomie sera reprise par Kant."
    },
    { 
        question: "Question n°27 : Quel est le rôle de l'éducation dans la philosophie politique de Platon ?",
        answers: [
            "l'éducation est inutile", 
            "l'éducation forme les citoyens à la vertu", 
            "l'éducation corrompt la jeunesse"
        ], 
        correct: 2,
        explanation: "Bien que ce point ne soit pas explicitement traité dans ce passage, il est central dans la philosophie politique de Platon : l'éducation forme les citoyens à la vertu. Dans la République, Platon décrit un système d'éducation complet, qui commence par la musique et la gymnastique et culmine dans la dialectique. L'éducation ne se contente pas de transmettre des connaissances : elle forme le caractère, ordonne les désirs, oriente l'âme vers le bien. La politique platonicienne est donc inséparable de la pédagogie : gouverner, c'est éduquer."
    },
    { 
        question: "Question n°28 : Comment Socrate définit-il la vraie politique ?",
        answers: [
            "comme l'art de flatter le peuple", 
            "comme l'art de rendre les citoyens meilleurs", 
            "comme l'art de conquérir le pouvoir"
        ], 
        correct: 2,
        explanation: "Dans ce passage, Socrate critique la fausse politique de Calliclès et définit implicitement la vraie politique : celle qui vise le bien des citoyens et les rend meilleurs. La vraie politique n'est pas l'art de flatter le peuple (démagogie) ni l'art de conquérir le pouvoir (tyrannie), mais l'art de gouverner en vue du bien commun et d'améliorer les citoyens. Cette conception de la politique comme éducation et soin des âmes est développée tout au long du Gorgias."
    },
    { 
        question: "Question n°29 : Quel est le rapport entre loi et nature chez Platon ?",
        answers: [
            "la loi s'oppose à la nature", 
            "la loi véritable est conforme à la nature", 
            "la loi est arbitraire"
        ], 
        correct: 2,
        explanation: "Dans ce passage, Platon critique la conception de Calliclès pour qui la loi (convention) s'oppose à la nature. Pour Calliclès, la nature veut que le fort domine, tandis que la loi, établie par les faibles, prétend protéger l'égalité. Socrate, au contraire, soutient qu'il existe une loi véritable, conforme à la nature, qui vise l'avantage commun. Cette loi n'est pas une convention arbitraire mais l'expression de la justice naturelle. Cette conception ouvre la voie à l'idée d'un droit naturel."
    },
    { 
        question: "Question n°30 : Comment Socrate conçoit-il le rapport entre le corps et l'âme ?",
        answers: [
            "le corps est supérieur à l'âme", 
            "l'âme est supérieure au corps et doit le gouverner", 
            "le corps et l'âme sont identiques"
        ], 
        correct: 2,
        explanation: "Bien que ce point ne soit pas explicitement développé dans ce passage, il est central dans la pensée de Platon : l'âme est supérieure au corps et doit le gouverner. Cette conception dualiste est développée dans le Phédon et la République. Dans notre passage, cette hiérarchie se manifeste par l'idée que la raison (faculté de l'âme) doit maîtriser les désirs (liés au corps). Le bonheur consiste dans l'ordre de l'âme, non dans la satisfaction des désirs corporels."
    },
    { 
        question: "Question n°31 : Quelle est la conception de la justice chez Calliclès ?",
        answers: [
            "la justice est l'égalité", 
            "la justice est la loi du plus fort", 
            "la justice est l'avantage commun"
        ], 
        correct: 2,
        explanation: "Pour Calliclès, la justice est la loi du plus fort. Selon lui, la nature veut que les forts dominent les faibles et que leurs désirs soient satisfaits sans entrave. La loi, établie par les faibles, est une convention contre-nature qui prétend protéger l'égalité. Socrate critique cette conception en montrant qu'elle confond la force et le droit : la puissance ne fonde pas la légitimité. La justice véritable, selon Socrate, vise l'avantage commun et non l'intérêt du plus fort."
    },
    { 
        question: "Question n°32 : Quel est le rôle de la tempérance dans la cité selon Platon ?",
        answers: [
            "la tempérance est l'ordre de l'âme et de la cité", 
            "la tempérance est un obstacle à l'action", 
            "la tempérance est une faiblesse"
        ], 
        correct: 1,
        explanation: "Pour Platon, la tempérance (sôphrosunè) est l'ordre de l'âme et de la cité. Dans l'âme, elle consiste dans la soumission des désirs à la raison ; dans la cité, elle consiste dans l'accord des classes sur le gouvernement des meilleurs. La tempérance n'est pas une faiblesse mais une force : elle permet à l'âme de ne pas être esclave de ses désirs, et à la cité de ne pas être déchirée par les conflits. Dans notre passage, Socrate affirme que « l'homme tempérant est heureux », ce qui montre que la tempérance est la condition du bonheur individuel et collectif."
    },
    { 
        question: "Question n°33 : Comment Socrate définit-il le bonheur par rapport au plaisir ?",
        answers: [
            "le bonheur est identique au plaisir", 
            "le bonheur est indépendant du plaisir", 
            "le bonheur n'est pas réductible au plaisir"
        ], 
        correct: 3,
        explanation: "Socrate affirme que le bonheur n'est pas réductible au plaisir. Tous les plaisirs ne sont pas bons, et certains sont même mauvais. Le bonheur ne consiste donc pas à maximiser les plaisirs, mais à vivre selon la vertu et l'ordre de l'âme. Cette distinction entre bonheur et plaisir est fondamentale dans l'éthique platonicienne : elle permet de critiquer l'hédonisme et de fonder une morale rationnelle. Le bonheur est un état durable qui résulte d'une vie vertueuse, non un état passager de satisfaction."
    },
    { 
        question: "Question n°34 : Quel est le rapport entre vertu et bonheur chez Platon ?",
        answers: [
            "la vertu est un moyen pour atteindre le bonheur", 
            "la vertu est identique au bonheur", 
            "la vertu s'oppose au bonheur"
        ], 
        correct: 2,
        explanation: "Chez Platon, la vertu est identique au bonheur, ou du moins inséparable de lui. L'homme vertueux est heureux parce que son âme est ordonnée ; l'homme vicieux est malheureux parce que son âme est en désordre. Le bonheur n'est donc pas une récompense extérieure de la vertu, mais la vertu elle-même en tant qu'état de l'âme. Cette conception eudémoniste de l'éthique fait du bonheur l'accomplissement de la nature humaine, non un don de la fortune. Elle sera nuancée par Aristote, pour qui le bonheur dépend aussi de biens extérieurs."
    },
    { 
        question: "Question n°35 : Quelle est la conception de la rhétorique chez Platon dans ce texte ?",
        answers: [
            "la rhétorique est un art véritable", 
            "la rhétorique est une flatterie", 
            "la rhétorique est une science"
        ], 
        correct: 2,
        explanation: "Dans ce texte, Platon conçoit la rhétorique de Calliclès comme une flatterie (kolakeia), non comme un art véritable. La flatterie vise à plaire, non à améliorer. Elle est à la politique ce que la cuisine est à la médecine : elle flatte les désirs au lieu de les soigner. La vraie politique, au contraire, vise le bien des citoyens et les rend meilleurs. Cette critique de la rhétorique est développée tout au long du Gorgias, qui oppose la flatterie (rhétorique, sophistique, cuisine, cosmétique) à l'art véritable (politique, philosophie, médecine, gymnastique)."
    },
    { 
        question: "Question n°36 : Comment Socrate conçoit-il le rapport entre l'individu et la cité ?",
        answers: [
            "l'individu est indépendant de la cité", 
            "l'individu et la cité sont analogues", 
            "la cité est indépendante de l'individu"
        ], 
        correct: 2,
        explanation: "Chez Platon, l'individu et la cité sont analogues : la justice dans l'âme est la même que la justice dans la cité. De même que l'âme a trois parties (raison, courage, désir), la cité a trois classes (gouvernants, gardiens, producteurs). De même que la justice dans l'âme consiste dans l'ordre des parties, la justice dans la cité consiste dans l'ordre des classes. Cette analogie fonde l'unité de l'éthique et de la politique chez Platon. Dans notre passage, cette conception se manifeste par l'idée que la loi véritable vise l'avantage commun et que le tyran, dont l'âme est en désordre, est malheureux."
    },
    { 
        question: "Question n°37 : Quelle est la conception du plaisir chez Calliclès ?",
        answers: [
            "le plaisir doit être maîtrisé", 
            "le plaisir doit être satisfait sans entrave", 
            "le plaisir est un mal"
        ], 
        correct: 2,
        explanation: "Pour Calliclès, le plaisir doit être satisfait sans entrave. Selon lui, la vie bonne consiste à laisser croître ses désirs et à avoir les moyens de les satisfaire. La tempérance, prônée par Socrate, est une sottise : elle prive l'homme des plaisirs les plus intenses. Cette conception hédoniste est critiquée par Socrate, qui montre que tous les plaisirs ne sont pas bons et que la satisfaction illimitée des désirs rend l'âme malade. Le débat entre Socrate et Calliclès porte ainsi sur la nature du bonheur : est-il dans la satisfaction des désirs ou dans leur maîtrise ?"
    },
    { 
        question: "Question n°38 : Quel est le rapport entre loi et justice chez Platon ?",
        answers: [
            "la loi est toujours juste", 
            "la loi véritable est celle qui vise la justice", 
            "la loi et la justice sont indépendantes"
        ], 
        correct: 2,
        explanation: "Chez Platon, la loi véritable est celle qui vise la justice, c'est-à-dire l'avantage commun. La loi n'est pas juste simplement parce qu'elle est établie par l'autorité, mais parce qu'elle vise le bien de tous. Cette conception fonde la critique des lois injustes, qui ne sont que des instruments de domination. Dans notre passage, Socrate oppose la « loi du plus fort », qui n'est qu'une apparence de loi, à la loi véritable, qui vise l'avantage commun. Cette distinction ouvre la voie à l'idée d'un droit naturel, supérieur aux lois positives."
    },
    { 
        question: "Question n°39 : Comment Socrate conçoit-il la responsabilité morale ?",
        answers: [
            "l'homme est responsable de ses actes", 
            "l'homme n'est pas responsable de ses actes", 
            "la responsabilité dépend de la fortune"
        ], 
        correct: 1,
        explanation: "Bien que ce point ne soit pas explicitement traité dans ce passage, il est sous-jacent à la pensée de Socrate : l'homme est responsable de ses actes. Si le bonheur dépend de la vertu, et si la vertu dépend de la connaissance et de l'effort, alors l'homme est responsable de son bonheur ou de son malheur. Le tyran est malheureux parce qu'il a choisi de vivre dans le désordre, non parce que le destin l'a voulu. Cette conception de la responsabilité morale fonde l'exigence éthique : nous sommes responsables de notre âme, nous devons en prendre soin. Cette idée sera développée par Platon dans le mythe d'Er, où les âmes choisissent leur destin."
    },
    { 
        question: "Question n°40 : Quelle est la conception de la vertu chez Calliclès ?",
        answers: [
            "la vertu est la tempérance", 
            "la vertu est la puissance de satisfaire ses désirs", 
            "la vertu est la justice"
        ], 
        correct: 2,
        explanation: "Pour Calliclès, la vertu est la puissance de satisfaire ses désirs. Selon lui, l'homme vertueux est celui qui a les moyens de réaliser tous ses désirs, sans être entravé par les lois ou la morale commune. Cette conception identifie la vertu à la puissance et le bonheur à la jouissance. Socrate critique cette conception en montrant qu'elle confond la force et le droit, et qu'elle rend l'âme esclave de ses désirs. La vertu véritable, selon Socrate, consiste dans la maîtrise rationnelle des désirs, non dans leur satisfaction illimitée."
    },
    { 
        question: "Question n°41 : Quel est le rôle de la philosophie dans la cité selon Platon ?",
        answers: [
            "la philosophie doit gouverner la cité", 
            "la philosophie est inutile", 
            "la philosophie doit être abolie"
        ], 
        correct: 1,
        explanation: "Pour Platon, la philosophie doit gouverner la cité. Cette thèse, développée dans la République, fonde le gouvernement des philosophes-rois : seuls ceux qui connaissent le bien peuvent gouverner justement. Dans notre passage, cette conception se manifeste par l'idée que la vraie politique est celle qui vise le bien des citoyens et que la loi véritable vise l'avantage commun. Gouverner, c'est donc philosopher : c'est ordonner la cité selon la justice, qui est la connaissance du bien. Cette conception fonde l'unité de la philosophie et de la politique chez Platon."
    },
    { 
        question: "Question n°42 : Comment Socrate conçoit-il le rapport entre le bien et l'utile ?",
        answers: [
            "le bien et l'utile sont identiques", 
            "le bien et l'utile sont indépendants", 
            "le bien véritable est véritablement utile"
        ], 
        correct: 3,
        explanation: "Dans ce passage, Socrate affirme qu'il faut « réfléchir à ce qui est véritablement utile ». Cette formule suggère que le bien véritable est véritablement utile, mais qu'il faut distinguer l'utile apparent de l'utile réel. Ce qui semble utile sur le moment (le plaisir immédiat) peut être nuisible à long terme ; ce qui semble inutile (la tempérance) peut être le plus grand des biens. Cette conception fonde la distinction entre les biens apparents et les biens réels, et l'idée que la raison doit évaluer ce qui est véritablement utile en vue du bonheur."
    },
    { 
        question: "Question n°43 : Quelle est la conception de l'âme chez Calliclès ?",
        answers: [
            "l'âme doit être ordonnée", 
            "l'âme doit satisfaire tous ses désirs", 
            "l'âme est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Calliclès, l'âme doit satisfaire tous ses désirs. Selon lui, la vie bonne consiste à laisser croître ses désirs et à les assouvir. Cette conception hédoniste de l'âme s'oppose à celle de Socrate, pour qui l'âme doit être ordonnée et maîtriser ses désirs. Le débat entre Socrate et Calliclès porte ainsi sur la nature de l'âme : est-elle faite pour jouir ou pour gouverner ? Socrate montre que l'âme qui satisfait tous ses désirs est en désordre, et que ce désordre est la source du malheur. L'âme ordonnée, au contraire, est heureuse."
    },
    { 
        question: "Question n°44 : Comment Socrate conçoit-il le rapport entre la raison et les désirs ?",
        answers: [
            "la raison doit servir les désirs", 
            "la raison doit maîtriser les désirs", 
            "la raison et les désirs sont indépendants"
        ], 
        correct: 2,
        explanation: "Pour Socrate, la raison doit maîtriser les désirs. Cette conception, exprimée par la formule « la vertu ne consiste pas à assouvir ses désirs mais à les maîtriser par la raison », fonde l'éthique platonicienne de la tempérance. La raison n'est pas au service des désirs (comme le soutient Calliclès) ; elle doit les gouverner. Cette maîtrise n'est pas une répression mais une éducation : la raison doit persuader les désirs de se conformer au bien. Cette conception fonde l'idée que la vertu est une affaire de raison, non de passion."
    },
    { 
        question: "Question n°45 : Quelle est la conception de la loi chez Calliclès ?",
        answers: [
            "la loi est l'expression de la justice", 
            "la loi est une convention des faibles", 
            "la loi est un commandement divin"
        ], 
        correct: 2,
        explanation: "Pour Calliclès, la loi est une convention des faibles. Selon lui, les faibles, qui sont la majorité, ont établi des lois pour se protéger des forts. Ces lois sont contre-nature, car la nature veut que le fort domine. Calliclès méprise donc la loi et la considère comme un obstacle à la satisfaction des désirs. Socrate critique cette conception en montrant que la loi véritable n'est pas une convention arbitraire mais l'expression de la justice, qui vise l'avantage commun. La loi n'est pas l'ennemie de la nature, elle en est l'accomplissement."
    },
    { 
        question: "Question n°46 : Comment Socrate conçoit-il le rapport entre l'individu et la loi ?",
        answers: [
            "l'individu doit obéir à la loi", 
            "l'individu doit mépriser la loi", 
            "l'individu doit changer la loi"
        ], 
        correct: 1,
        explanation: "Bien que ce point ne soit pas explicitement traité dans ce passage, il est développé dans le Criton : Socrate affirme que l'individu doit obéir à la loi, même injuste, car la loi est la condition de la vie en société. Cette conception de l'obéissance à la loi s'oppose à celle de Calliclès, pour qui le fort doit mépriser la loi. Pour Socrate, l'obéissance à la loi n'est pas une soumission aveugle : elle repose sur la reconnaissance que la loi est la condition de la justice et du bien commun. Cette conception fonde l'idée d'un contrat social entre l'individu et la cité."
    },
    { 
        question: "Question n°47 : Quelle est la conception du bonheur chez Calliclès ?",
        answers: [
            "le bonheur est la satisfaction de tous les désirs", 
            "le bonheur est la tempérance", 
            "le bonheur est la justice"
        ], 
        correct: 1,
        explanation: "Pour Calliclès, le bonheur est la satisfaction de tous les désirs. Selon lui, l'homme heureux est celui qui a les moyens de réaliser tous ses désirs, sans être entravé par les lois ou la morale commune. Cette conception hédoniste du bonheur s'oppose à celle de Socrate, pour qui le bonheur consiste dans la vertu et l'ordre de l'âme. Socrate critique la conception de Calliclès en montrant que la satisfaction illimitée des désirs rend l'âme malade et l'homme malheureux. Le bonheur véritable n'est donc pas dans la jouissance mais dans la maîtrise."
    },
    { 
        question: "Question n°48 : Comment Socrate conçoit-il le rapport entre la force et le droit ?",
        answers: [
            "la force crée le droit", 
            "la force et le droit sont indépendants", 
            "le droit ne dépend pas de la force"
        ], 
        correct: 3,
        explanation: "Pour Socrate, le droit ne dépend pas de la force. Cette conception s'oppose à celle de Calliclès, pour qui la force crée le droit : le plus fort a le droit de dominer. Socrate montre que cette conception confond la puissance et la légitimité. Le fait d'être plus fort ne donne pas le droit de dominer ; le droit est fondé sur la justice, non sur la puissance. Dans notre passage, Socrate affirme que « ce que tu appelles justice naturelle n'est qu'une loi du plus fort », ce qui signifie que la force ne fonde pas la justice. Cette conception fonde l'idée d'un droit naturel, supérieur à la force."
    },
    { 
        question: "Question n°49 : Quelle est la conception de la politique chez Platon dans ce texte ?",
        answers: [
            "la politique est l'art de conquérir le pouvoir", 
            "la politique est l'art de rendre les citoyens meilleurs", 
            "la politique est l'art de flatter le peuple"
        ], 
        correct: 2,
        explanation: "Dans ce texte, Platon conçoit la politique comme l'art de rendre les citoyens meilleurs. Cette conception s'oppose à celle de Calliclès, pour qui la politique est l'art de conquérir et de conserver le pouvoir. Pour Platon, la vraie politique est celle qui vise le bien des citoyens, qui les éduque, qui les rend vertueux. La politique n'est donc pas une technique de domination mais une éthique appliquée : gouverner, c'est prendre soin des âmes. Cette conception fonde l'idée que le politique doit être philosophe, c'est-à-dire connaître le bien et vouloir le réaliser."
    },
    { 
        question: "Question n°50 : En quoi ce texte de Platon est-il représentatif de sa philosophie ?",
        answers: [
            "il montre l'opposition entre la rhétorique et la philosophie", 
            "il montre l'opposition entre la force et le droit", 
            "les deux réponses sont correctes"
        ], 
        correct: 3,
        explanation: "Ce texte du Gorgias est représentatif de la philosophie de Platon à plusieurs égards. D'abord, il montre l'opposition entre la rhétorique (flatterie) et la philosophie (recherche de la vérité et du bien). Ensuite, il montre l'opposition entre la force (loi du plus fort) et le droit (loi véritable visant l'avantage commun). Enfin, il illustre la méthode socratique de réfutation et l'idée que le bonheur consiste dans la vertu et l'ordre de l'âme. Ce texte condense ainsi les thèmes majeurs du Gorgias et de la philosophie platonicienne : critique de l'hédonisme, primat de la justice, conception eudémoniste de l'éthique, analogie entre l'âme et la cité."
    }
];