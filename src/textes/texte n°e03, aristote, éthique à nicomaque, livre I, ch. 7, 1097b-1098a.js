// ============================================
// DONNÉES GÉNÉRALES
// ============================================

const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte d'Aristote";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	source: "ARISTOTE, <em>Éthique à Nicomaque</em>, livre I, ch. 7, 1097b-1098a, trad. Jules Tricot, <em>Librairie Philosophique J. Vrin</em>, 1990, pp.54-55.",
	texte: "« [1] Le bien suprême auquel aspirent tous les hommes est, de l'avis général, le bonheur. [2] **Cependant**, on s'accorde sur le nom, **mais** non sur la définition. [3] **En effet**, les uns le placent dans le plaisir, **tandis que** d'autres le mettent dans les honneurs. [4] **Or** ces biens sont recherchés pour autre chose qu'eux-mêmes. [5] **Par contre**, le bonheur ne semble jamais être choisi en vue d'une autre fin. [6] **De plus**, nous le désirons par lui-même **et jamais** en vue d'autre chose. [7] **Aussi** faut-il le définir par la fonction propre de l'homme. [8] **Car** tout être accomplit son bien lorsqu'il remplit sa fonction spécifique. [9] **Par ailleurs**, la fonction de l'homme est une activité de l'âme selon la raison. [10] **Donc**, le souverain bien est une activité de l'âme conforme à la vertu. [11] **Finalement**, c'est dans une vie accomplie que réside la félicité. »"
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    { 
        question: "Question n°1 : Quel est le bien suprême selon Aristote ?",
        answers: [
            "la richesse", 
            "le bonheur", 
            "la gloire"
        ], 
        correct: 2,
        explanation: "Aristote affirme : « Le bien suprême auquel aspirent tous les hommes est, de l'avis général, le bonheur. » Cette affirmation est le point de départ de l'Éthique à Nicomaque : le bonheur (eudaimonia) est la fin ultime de toutes nos actions. Aristote ne fait ici que constater un consensus : tous les hommes recherchent le bonheur. Mais il s'empresse de préciser que ce consensus ne porte que sur le nom, non sur la définition. La tâche du philosophe sera donc de déterminer ce qu'est véritablement le bonheur."
    },
    { 
        question: "Question n°2 : Sur quoi porte le désaccord concernant le bonheur ?",
        answers: [
            "sur son nom", 
            "sur sa définition", 
            "sur son existence"
        ], 
        correct: 2,
        explanation: "Aristote précise : « on s'accorde sur le nom, mais non sur la définition. » Tout le monde appelle « bonheur » le bien suprême, mais les opinions divergent sur ce qu'il est. Les uns le placent dans le plaisir, d'autres dans les honneurs, d'autres dans la richesse ou la contemplation. Ce désaccord n'est pas simplement verbal : il porte sur la nature même du bonheur. La tâche de l'éthique est précisément de trancher ce débat en déterminant ce qu'est véritablement le bonheur, au-delà des opinions communes."
    },
    { 
        question: "Question n°3 : Où les uns placent-ils le bonheur selon Aristote ?",
        answers: [
            "dans la contemplation", 
            "dans le plaisir", 
            "dans la vertu"
        ], 
        correct: 2,
        explanation: "Aristote rapporte : « les uns le placent dans le plaisir, tandis que d'autres le mettent dans les honneurs. » Cette diversité des opinions reflète les différents modes de vie : la vie de jouissance, la vie politique, la vie contemplative. Aristote ne rejette pas d'emblée ces opinions : il les examine pour voir ce qu'elles contiennent de vérité. Le plaisir n'est pas un mal en soi, mais il n'est pas le bien suprême car il est recherché pour autre chose. Les honneurs non plus ne sont pas le bien suprême car ils dépendent de ceux qui les accordent."
    },
    { 
        question: "Question n°4 : Pourquoi le plaisir et les honneurs ne sont-ils pas le bien suprême ?",
        answers: [
            "parce qu'ils sont recherchés pour autre chose qu'eux-mêmes", 
            "parce qu'ils sont impossibles à atteindre", 
            "parce qu'ils sont immoraux"
        ], 
        correct: 1,
        explanation: "Aristote affirme : « ces biens sont recherchés pour autre chose qu'eux-mêmes. » Le plaisir est recherché pour le bonheur, les honneurs pour la reconnaissance ou l'estime de soi. Ils ne sont donc pas des fins ultimes mais des moyens. Or, le bien suprême doit être une fin en soi, recherchée pour elle-même et jamais en vue d'autre chose. C'est cette caractéristique qui distingue le bonheur de tous les autres biens. Aristote utilise ici un critère formel : est bien suprême ce qui est toujours désiré pour soi et jamais pour autre chose."
    },
    { 
        question: "Question n°5 : Comment Aristote caractérise-t-il le bonheur ?",
        answers: [
            "comme un bien parmi d'autres", 
            "comme le bien parfait et autosuffisant", 
            "comme un bien extérieur"
        ], 
        correct: 2,
        explanation: "Aristote caractérise le bonheur comme le bien parfait et autosuffisant. Il est parfait parce qu'il est toujours choisi pour lui-même et jamais en vue d'autre chose. Il est autosuffisant parce qu'il se suffit à lui-même et ne dépend pas d'autre chose pour être complet. Cette caractérisation distingue le bonheur de tous les autres biens, qui sont relatifs et dépendants. Le bonheur est la fin ultime de toutes nos actions, le bien auquel tous les autres biens sont subordonnés. Cette conception eudémoniste fonde toute l'éthique aristotélicienne."
    },
    { 
        question: "Question n°6 : Par quoi faut-il définir le bonheur selon Aristote ?",
        answers: [
            "par la fonction propre de l'homme", 
            "par la richesse", 
            "par le nombre d'amis"
        ], 
        correct: 1,
        explanation: "Aristote affirme : « il faut le définir par la fonction propre de l'homme. » Cette méthode est caractéristique d'Aristote : pour déterminer ce qu'est le bien d'un être, il faut d'abord déterminer sa fonction spécifique. Ainsi, le bien d'un flûtiste est de bien jouer de la flûte ; le bien d'un cheval est de bien courir. Le bien de l'homme sera donc l'accomplissement de sa fonction propre. Cette méthode téléologique consiste à définir le bien par la fin (telos) inscrite dans la nature de chaque être."
    },
    { 
        question: "Question n°7 : Quelle est la fonction propre de l'homme selon Aristote ?",
        answers: [
            "la nutrition", 
            "la sensation", 
            "l'activité de l'âme selon la raison"
        ], 
        correct: 3,
        explanation: "Aristote affirme : « la fonction de l'homme est une activité de l'âme selon la raison. » Cette définition distingue l'homme des autres êtres vivants. Les plantes ont pour fonction la nutrition et la reproduction ; les animaux ont en plus la sensation et le mouvement. Mais l'homme se distingue par la raison (logos). Sa fonction propre est donc l'activité rationnelle, c'est-à-dire la pensée et l'action guidée par la raison. Le bonheur consistera donc dans l'exercice de cette fonction : une vie conforme à la raison."
    },
    { 
        question: "Question n°8 : Quel est le souverain bien selon Aristote ?",
        answers: [
            "la richesse", 
            "une activité de l'âme conforme à la vertu", 
            "la santé"
        ], 
        correct: 2,
        explanation: "Aristote conclut : « le souverain bien est une activité de l'âme conforme à la vertu. » Cette définition est le résultat de l'analyse précédente : si la fonction de l'homme est l'activité rationnelle, alors le bien de l'homme sera une activité conforme à la raison, c'est-à-dire conforme à la vertu. La vertu (aretê) est l'excellence dans l'exercice de la fonction. Le bonheur n'est donc pas un état mais une activité (energeia) : il consiste à agir selon la vertu, non à posséder des biens extérieurs."
    },
    { 
        question: "Question n°9 : Où réside la félicité selon Aristote ?",
        answers: [
            "dans une vie accomplie", 
            "dans un moment de plaisir", 
            "dans la mort"
        ], 
        correct: 1,
        explanation: "Aristote affirme : « c'est dans une vie accomplie que réside la félicité. » La félicité (eudaimonia) n'est pas un état ponctuel mais une vie entière accomplie selon la vertu. Cette précision est importante : elle signifie que le bonheur ne se mesure pas à un instant de plaisir mais à la totalité d'une existence. Aristote ajoute même qu'une vie doit être complète pour être heureuse : une hirondelle ne fait pas le printemps, et un jour heureux ne fait pas une vie heureuse. Cette conception exigeante du bonheur implique la durée et la constance."
    },
    { 
        question: "Question n°10 : Quelle est la méthode d'Aristote dans ce passage ?",
        answers: [
            "la déduction à partir de principes a priori", 
            "l'analyse des opinions communes (endoxa)", 
            "l'intuition mystique"
        ], 
        correct: 2,
        explanation: "Dans ce passage, Aristote utilise sa méthode caractéristique : l'analyse des opinions communes (endoxa). Il part de l'avis général selon lequel le bonheur est le bien suprême, puis examine les différentes définitions qu'on en donne (plaisir, honneurs, etc.). Il ne rejette pas d'emblée ces opinions : il les prend au sérieux, les examine, et retient ce qu'elles contiennent de vrai. Cette méthode dialectique consiste à partir de ce qui est dit communément pour s'élever vers la vérité. Aristote procède ici comme dans toute sa philosophie : il ne part pas de principes a priori mais de l'expérience et des opinions communes."
    },
    { 
        question: "Question n°11 : Comment Aristote définit-il le bien ?",
        answers: [
            "comme ce qui est recherché pour autre chose", 
            "comme ce qui est recherché pour soi-même", 
            "comme ce qui est imposé par la loi"
        ], 
        correct: 2,
        explanation: "Aristote définit le bien comme ce qui est recherché pour soi-même. C'est le critère du bien suprême : il est toujours choisi pour lui-même et jamais en vue d'autre chose. Les biens relatifs (plaisir, honneurs, richesse) sont recherchés pour autre chose ; le bien absolu (bonheur) est recherché pour lui-même. Cette conception du bien comme fin en soi est fondamentale dans l'éthique aristotélicienne. Elle fonde la distinction entre les biens instrumentaux (qui sont des moyens) et le bien final (qui est la fin)."
    },
    { 
        question: "Question n°12 : Quel est le rapport entre bonheur et vertu chez Aristote ?",
        answers: [
            "la vertu est indépendante du bonheur", 
            "le bonheur est une activité conforme à la vertu", 
            "la vertu s'oppose au bonheur"
        ], 
        correct: 2,
        explanation: "Pour Aristote, le bonheur est une activité conforme à la vertu. La vertu n'est pas un obstacle au bonheur mais la condition même du bonheur : on ne peut être heureux qu'en agissant selon la vertu. Cette conception unit étroitement l'éthique et l'eudémonisme : la morale n'est pas un ensemble de règles à suivre mais la voie vers le bonheur. La vertu est l'excellence dans l'exercice de la fonction propre de l'homme, c'est-à-dire l'activité rationnelle. Le bonheur est l'accomplissement de cette activité. Ainsi, la vie vertueuse et la vie heureuse sont identiques."
    },
    { 
        question: "Question n°13 : Comment Aristote conçoit-il le rapport entre l'âme et le corps ?",
        answers: [
            "l'âme est séparée du corps", 
            "l'âme est la forme du corps", 
            "l'âme est une illusion"
        ], 
        correct: 2,
        explanation: "Bien que ce point ne soit pas explicitement traité dans ce passage, il est fondamental dans la philosophie d'Aristote : l'âme est la forme du corps. Contrairement à Platon, qui conçoit l'âme comme une réalité séparée et immortelle, Aristote conçoit l'âme comme la forme (eidos) du corps vivant, c'est-à-dire le principe qui organise et anime le corps. L'âme n'est pas une substance séparée mais l'acte du corps organisé. Dans notre passage, cette conception se manifeste par l'idée que la fonction de l'homme est « une activité de l'âme selon la raison »."
    },
    { 
        question: "Question n°14 : Quel est le rôle de la raison dans l'éthique aristotélicienne ?",
        answers: [
            "la raison doit être soumise aux passions", 
            "la raison doit guider l'action vers le bien", 
            "la raison n'a aucun rôle"
        ], 
        correct: 2,
        explanation: "Dans l'éthique aristotélicienne, la raison doit guider l'action vers le bien. La fonction propre de l'homme étant l'activité rationnelle, la vertu consiste à agir selon la raison. La raison pratique (phronesis) détermine les moyens de réaliser le bien dans les situations particulières. Elle ne se contente pas de connaître le bien en général, elle détermine ce qu'il faut faire ici et maintenant. La vertu morale est ainsi un juste milieu déterminé par la raison. Cette conception de la raison pratique distingue Aristote de Platon."
    },
    { 
        question: "Question n°15 : Quelle est la conception du bonheur chez Aristote ?",
        answers: [
            "le bonheur est un état passif", 
            "le bonheur est une activité", 
            "le bonheur est un don des dieux"
        ], 
        correct: 2,
        explanation: "Pour Aristote, le bonheur est une activité (energeia), non un état passif. Cette conception est fondamentale : elle signifie que le bonheur ne consiste pas à recevoir quelque chose mais à agir. Le bonheur est l'exercice de la fonction propre de l'homme, c'est-à-dire l'activité rationnelle conforme à la vertu. Il ne dépend donc pas principalement des circonstances extérieures mais de notre propre activité. Cette conception dynamique du bonheur distingue Aristote des conceptions qui font du bonheur un état de satisfaction ou un don de la fortune."
    },
    { 
        question: "Question n°16 : Quel est le rapport entre bonheur et plaisir chez Aristote ?",
        answers: [
            "le plaisir est identique au bonheur", 
            "le plaisir accompagne le bonheur mais n'est pas le bonheur", 
            "le plaisir est incompatible avec le bonheur"
        ], 
        correct: 2,
        explanation: "Pour Aristote, le plaisir accompagne le bonheur mais n'est pas identifié à lui. Le plaisir n'est pas le bien suprême (comme le soutiennent les hédonistes) car il est recherché pour autre chose, mais il n'est pas non plus un mal (comme le soutiennent certains ascètes). Le plaisir est un accompagnement naturel de l'activité conforme à la vertu : l'homme vertueux éprouve du plaisir à agir vertueusement. Le plaisir est ainsi un signe de la perfection de l'activité. Cette conception intégrée du plaisir distingue Aristote des stoïciens et des épicuriens."
    },
    { 
        question: "Question n°17 : Comment Aristote conçoit-il la vertu ?",
        answers: [
            "comme une disposition acquise par l'habitude", 
            "comme une connaissance innée", 
            "comme un don de la nature"
        ], 
        correct: 1,
        explanation: "Pour Aristote, la vertu est une disposition (hexis) acquise par l'habitude. Elle n'est ni innée (comme le soutient Platon, pour qui la vertu est une connaissance innée), ni un simple don de la nature. Elle s'acquiert par la répétition des actes vertueux : c'est en pratiquant la justice qu'on devient juste, en pratiquant le courage qu'on devient courageux. Cette conception de la vertu comme habitude est fondamentale dans l'éthique aristotélicienne : elle implique que l'éducation morale est possible et nécessaire."
    },
    { 
        question: "Question n°18 : Quel est le rôle de l'éducation dans l'éthique aristotélicienne ?",
        answers: [
            "l'éducation est inutile", 
            "l'éducation forme le caractère et les habitudes vertueuses", 
            "l'éducation corrompt la jeunesse"
        ], 
        correct: 2,
        explanation: "Pour Aristote, l'éducation forme le caractère et les habitudes vertueuses. Puisque la vertu est une disposition acquise par l'habitude, l'éducation joue un rôle central : c'est par l'exercice répété des actes vertueux que l'on devient vertueux. L'éducation ne se contente pas de transmettre des connaissances : elle forme le caractère, elle habitue l'âme à agir selon la vertu. Cette conception fonde l'importance de l'éducation morale et politique : la cité doit former ses citoyens à la vertu pour qu'ils puissent être heureux."
    },
    { 
        question: "Question n°19 : Quelle est la conception de la fonction propre chez Aristote ?",
        answers: [
            "chaque être a une fonction spécifique", 
            "tous les êtres ont la même fonction", 
            "la fonction est imposée par la société"
        ], 
        correct: 1,
        explanation: "Pour Aristote, chaque être a une fonction spécifique (ergon). La fonction d'un être est l'activité qui lui est propre et qui le distingue des autres. Ainsi, la fonction de l'œil est de voir, la fonction du cheval est de courir, la fonction de l'homme est de penser et d'agir selon la raison. Cette conception téléologique fonde l'éthique aristotélicienne : le bien d'un être consiste à accomplir sa fonction propre, c'est-à-dire à réaliser pleinement sa nature. Le bonheur de l'homme consiste donc à exercer sa fonction propre, qui est l'activité rationnelle."
    },
    { 
        question: "Question n°20 : Quel est le rapport entre le bonheur et les biens extérieurs chez Aristote ?",
        answers: [
            "le bonheur dépend uniquement des biens extérieurs", 
            "le bonheur ne dépend pas des biens extérieurs", 
            "le bonheur dépend en partie des biens extérieurs"
        ], 
        correct: 3,
        explanation: "Pour Aristote, le bonheur dépend en partie des biens extérieurs. Bien que le bonheur consiste essentiellement dans l'activité vertueuse, il ne peut se réaliser pleinement sans un minimum de biens extérieurs : la santé, la richesse, les amis, la famille. Aristote reconnaît que la pauvreté, la maladie ou la solitude peuvent entraver l'exercice de la vertu et donc le bonheur. Cette conception réaliste du bonheur distingue Aristote des stoïciens, pour qui la vertu suffit au bonheur, et des épicuriens, pour qui le bonheur dépend des plaisirs. Le bonheur aristotélicien est à la fois activité vertueuse et condition favorable."
    },
    { 
        question: "Question n°21 : Comment Aristote conçoit-il le rapport entre l'âme et le corps ?",
        answers: [
            "l'âme est séparée du corps", 
            "l'âme est la forme du corps", 
            "l'âme est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Aristote, l'âme est la forme du corps. Cette conception hylémorphique (unité de la matière et de la forme) distingue Aristote de Platon. L'âme n'est pas une substance séparée qui serait emprisonnée dans le corps, mais le principe qui organise et anime le corps vivant. L'âme et le corps ne sont pas deux substances distinctes mais deux aspects d'une même réalité : la matière (le corps) et la forme (l'âme). Cette conception unitaire de l'être humain fonde la psychologie aristotélicienne et distingue sa philosophie de celle de Platon."
    },
    { 
        question: "Question n°22 : Quelle est la conception de la vertu chez Aristote ?",
        answers: [
            "la vertu est une connaissance", 
            "la vertu est une disposition acquise par l'habitude", 
            "la vertu est un don de la nature"
        ], 
        correct: 2,
        explanation: "Pour Aristote, la vertu est une disposition acquise par l'habitude. Cette conception distingue Aristote de Socrate et Platon, pour qui la vertu est une connaissance. Pour Aristote, la vertu n'est pas seulement une affaire de savoir : elle est une affaire de caractère, d'habitude, d'exercice. On ne devient pas vertueux en connaissant le bien, mais en le pratiquant. La vertu est une hexis, c'est-à-dire une manière d'être stable qui s'acquiert par la répétition des actes. Cette conception fonde l'importance de l'éducation et de l'exercice dans la formation morale."
    },
    { 
        question: "Question n°23 : Quel est le rôle de la raison pratique chez Aristote ?",
        answers: [
            "la raison pratique connaît le bien en soi", 
            "la raison pratique détermine ce qu'il faut faire dans les situations particulières", 
            "la raison pratique n'a aucun rôle"
        ], 
        correct: 2,
        explanation: "Pour Aristote, la raison pratique (phronesis) détermine ce qu'il faut faire dans les situations particulières. Elle ne se contente pas de connaître le bien en général (comme la sagesse théorique), elle détermine les moyens de réaliser le bien ici et maintenant. La phronesis est la vertu intellectuelle qui guide l'action morale : elle permet de délibérer correctement sur ce qui est bon et utile pour bien vivre. Cette conception de la raison pratique distingue Aristote de Platon, pour qui la vertu est surtout une connaissance du bien en soi. Pour Aristote, la vertu est inséparable de l'action et de la situation concrète."
    },
    { 
        question: "Question n°24 : Quelle est la conception du bonheur chez Aristote par rapport au plaisir ?",
        answers: [
            "le bonheur est identique au plaisir", 
            "le bonheur est indépendant du plaisir", 
            "le bonheur n'est pas réductible au plaisir"
        ], 
        correct: 3,
        explanation: "Pour Aristote, le bonheur n'est pas réductible au plaisir. Le plaisir n'est pas le bien suprême car il est recherché pour autre chose (le bonheur). Cependant, le plaisir accompagne naturellement le bonheur : l'activité vertueuse est plaisante pour l'homme vertueux. Le bonheur n'est donc pas l'absence de plaisir, mais il n'est pas non plus la recherche du plaisir pour lui-même. Cette conception intégrée du plaisir distingue Aristote des hédonistes (pour qui le plaisir est le souverain bien) et des ascètes (pour qui le plaisir est un mal)."
    },
    { 
        question: "Question n°25 : Quel est le rapport entre le bonheur et la vertu chez Aristote ?",
        answers: [
            "la vertu est un moyen pour atteindre le bonheur", 
            "la vertu est identique au bonheur", 
            "la vertu s'oppose au bonheur"
        ], 
        correct: 2,
        explanation: "Chez Aristote, la vertu est identique au bonheur, ou du moins inséparable de lui. Le bonheur est une activité conforme à la vertu, ce qui signifie que la vie vertueuse et la vie heureuse sont la même vie. La vertu n'est pas un moyen extérieur pour atteindre le bonheur : elle est le bonheur lui-même en tant qu'activité. Cette conception eudémoniste de l'éthique fait du bonheur l'accomplissement de la nature humaine, non un don de la fortune. Elle sera nuancée par Aristote lui-même, qui reconnaît que les biens extérieurs sont nécessaires à la pleine réalisation du bonheur."
    },
    { 
        question: "Question n°26 : Quelle est la conception de la politique chez Aristote ?",
        answers: [
            "la politique est l'art de conquérir le pouvoir", 
            "la politique est l'art de rendre les citoyens vertueux", 
            "la politique est l'art de flatter le peuple"
        ], 
        correct: 2,
        explanation: "Pour Aristote, la politique est l'art de rendre les citoyens vertueux. Cette conception, développée dans la Politique, fait de la cité une communauté éducative dont la fin est le bonheur des citoyens. Le politique doit légiférer en vue de la vertu : il doit créer les conditions qui permettent aux citoyens de devenir vertueux et donc heureux. Cette conception de la politique comme éducation distingue Aristote de Platon (pour qui le politique doit être philosophe) et des sophistes (pour qui la politique est l'art de gouverner). Pour Aristote, la politique est la science pratique la plus haute, car elle ordonne toutes les autres en vue du bien commun."
    },
    { 
        question: "Question n°27 : Quel est le rapport entre l'individu et la cité chez Aristote ?",
        answers: [
            "l'individu est indépendant de la cité", 
            "l'individu et la cité sont analogues", 
            "la cité est indépendante de l'individu"
        ], 
        correct: 2,
        explanation: "Chez Aristote, l'individu et la cité sont analogues : de même que l'âme a des parties hiérarchisées, la cité a des classes hiérarchisées. De même que le bonheur de l'individu consiste dans l'activité vertueuse, le bonheur de la cité consiste dans la vertu de ses citoyens. Cette analogie fonde l'unité de l'éthique et de la politique chez Aristote. La cité est une communauté naturelle qui vise le bien commun, et l'individu ne peut atteindre son bonheur qu'au sein de la cité. Cette conception distingue Aristote des sophistes, pour qui la cité est une convention artificielle."
    },
    { 
        question: "Question n°28 : Quelle est la conception du plaisir chez Aristote ?",
        answers: [
            "le plaisir est le souverain bien", 
            "le plaisir est un mal", 
            "le plaisir accompagne l'activité vertueuse"
        ], 
        correct: 3,
        explanation: "Pour Aristote, le plaisir accompagne l'activité vertueuse. Le plaisir n'est pas le souverain bien (comme le soutiennent les hédonistes), mais il n'est pas non plus un mal (comme le soutiennent certains ascètes). Le plaisir est un signe de la perfection de l'activité : une activité est d'autant plus parfaite qu'elle est accompagnée de plaisir. L'homme vertueux éprouve du plaisir à agir vertueusement, et ce plaisir est le signe qu'il a atteint la perfection dans l'exercice de sa fonction. Cette conception intégrée du plaisir distingue Aristote des stoïciens, pour qui le plaisir est indifférent."
    },
    { 
        question: "Question n°29 : Quel est le rapport entre la loi et la vertu chez Aristote ?",
        answers: [
            "la loi est indépendante de la vertu", 
            "la loi doit former les citoyens à la vertu", 
            "la loi s'oppose à la vertu"
        ], 
        correct: 2,
        explanation: "Pour Aristote, la loi doit former les citoyens à la vertu. Cette conception, développée dans la Politique, fait de la loi un instrument d'éducation morale : le législateur doit créer des lois qui habituent les citoyens à agir vertueusement. La loi ne se contente pas de réguler les comportements extérieurs : elle doit former le caractère, orienter l'âme vers le bien. Cette conception de la loi comme éducation distingue Aristote des sophistes (pour qui la loi est une convention) et des stoïciens (pour qui la loi est l'expression de la raison universelle). Pour Aristote, la loi est l'expression de la raison pratique du législateur, qui vise le bien commun."
    },
    { 
        question: "Question n°30 : Comment Aristote conçoit-il le rapport entre le bonheur et la contemplation ?",
        answers: [
            "le bonheur est indépendant de la contemplation", 
            "le bonheur parfait est la contemplation", 
            "la contemplation s'oppose au bonheur"
        ], 
        correct: 2,
        explanation: "Pour Aristote, le bonheur parfait est la contemplation (theoria). Cette thèse, développée au livre X de l'Éthique à Nicomaque, fait de la contemplation l'activité la plus haute et la plus parfaite. La contemplation est l'exercice de la raison théorique, qui est la fonction la plus propre de l'homme. Elle est autosuffisante, continue, plaisante, et ne dépend pas des circonstances extérieures. C'est pourquoi elle est identifiée au bonheur parfait. Cette conception intellectualiste du bonheur distingue Aristote des conceptions plus pratiques, qui font du bonheur une activité morale ou politique."
    },
    { 
        question: "Question n°31 : Quelle est la conception de la vertu chez Aristote par rapport à la raison ?",
        answers: [
            "la vertu est indépendante de la raison", 
            "la vertu est conforme à la raison", 
            "la vertu s'oppose à la raison"
        ], 
        correct: 2,
        explanation: "Pour Aristote, la vertu est conforme à la raison. La fonction propre de l'homme étant l'activité rationnelle, la vertu consiste à agir selon la raison. Cette conception fonde la distinction entre les vertus intellectuelles (sagesse, science, intelligence) et les vertus morales (courage, tempérance, justice). Les vertus morales sont des dispositions à agir selon la raison, c'est-à-dire selon le juste milieu déterminé par la raison pratique. La vertu n'est donc pas une affaire de passion aveugle, mais une affaire de raison : elle consiste à choisir le juste milieu conformément à la raison."
    },
    { 
        question: "Question n°32 : Quel est le rôle de l'habitude dans l'éthique aristotélicienne ?",
        answers: [
            "l'habitude est inutile", 
            "l'habitude forme la vertu", 
            "l'habitude corrompt la vertu"
        ], 
        correct: 2,
        explanation: "Pour Aristote, l'habitude forme la vertu. La vertu est une disposition acquise par la répétition des actes : c'est en pratiquant la justice qu'on devient juste, en pratiquant le courage qu'on devient courageux. L'habitude joue donc un rôle central dans l'éducation morale : elle transforme les actes en dispositions stables, elle inscrit la vertu dans le caractère. Cette conception de la vertu comme habitude distingue Aristote de Socrate et Platon, pour qui la vertu est une connaissance. Pour Aristote, la vertu n'est pas seulement une affaire de savoir : elle est une affaire de pratique, d'exercice, d'habitude."
    },
    { 
        question: "Question n°33 : Quelle est la conception du bonheur chez Aristote par rapport à la fortune ?",
        answers: [
            "le bonheur dépend entièrement de la fortune", 
            "le bonheur est indépendant de la fortune", 
            "le bonheur dépend en partie de la fortune"
        ], 
        correct: 3,
        explanation: "Pour Aristote, le bonheur dépend en partie de la fortune. Bien que le bonheur consiste essentiellement dans l'activité vertueuse, il ne peut se réaliser pleinement sans un minimum de biens extérieurs : la santé, la richesse, les amis, la famille. Aristote reconnaît que la pauvreté, la maladie ou la solitude peuvent entraver l'exercice de la vertu et donc le bonheur. Cette conception réaliste du bonheur distingue Aristote des stoïciens, pour qui la vertu suffit au bonheur, et des épicuriens, pour qui le bonheur dépend des plaisirs. Le bonheur aristotélicien est à la fois activité vertueuse et condition favorable."
    },
    { 
        question: "Question n°34 : Comment Aristote conçoit-il le rapport entre l'âme et le corps ?",
        answers: [
            "l'âme est séparée du corps", 
            "l'âme est la forme du corps", 
            "l'âme est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Aristote, l'âme est la forme du corps. Cette conception hylémorphique (unité de la matière et de la forme) distingue Aristote de Platon. L'âme n'est pas une substance séparée qui serait emprisonnée dans le corps, mais le principe qui organise et anime le corps vivant. L'âme et le corps ne sont pas deux substances distinctes mais deux aspects d'une même réalité : la matière (le corps) et la forme (l'âme). Cette conception unitaire de l'être humain fonde la psychologie aristotélicienne et distingue sa philosophie de celle de Platon."
    },
    { 
        question: "Question n°35 : Quelle est la conception de la vertu chez Aristote par rapport au plaisir ?",
        answers: [
            "la vertu est indépendante du plaisir", 
            "la vertu est accompagnée de plaisir", 
            "la vertu s'oppose au plaisir"
        ], 
        correct: 2,
        explanation: "Pour Aristote, la vertu est accompagnée de plaisir. L'homme vertueux éprouve du plaisir à agir vertueusement, et ce plaisir est le signe de la perfection de son activité. Le plaisir n'est donc pas l'ennemi de la vertu, mais son accompagnement naturel. Cette conception intégrée du plaisir distingue Aristote des ascètes (pour qui le plaisir est un mal) et des hédonistes (pour qui le plaisir est le souverain bien). Pour Aristote, le plaisir est un bien quand il accompagne une activité vertueuse, et un mal quand il accompagne une activité vicieuse."
    },
    { 
        question: "Question n°36 : Quel est le rapport entre le bonheur et la vie accomplie chez Aristote ?",
        answers: [
            "le bonheur est indépendant de la vie accomplie", 
            "le bonheur réside dans une vie accomplie", 
            "le bonheur s'oppose à la vie accomplie"
        ], 
        correct: 2,
        explanation: "Pour Aristote, le bonheur réside dans une vie accomplie. Cette affirmation signifie que le bonheur n'est pas un état ponctuel mais une vie entière vécue selon la vertu. Aristote compare le bonheur à une œuvre d'art : il faut une vie complète pour l'achever. Une hirondelle ne fait pas le printemps, et un jour heureux ne fait pas une vie heureuse. Cette conception exigeante du bonheur implique la durée, la constance et l'accomplissement de toutes les potentialités de l'être humain. Elle fonde l'idée que le bonheur est le résultat d'une vie vertueuse, non un don de la fortune."
    },
    { 
        question: "Question n°37 : Quelle est la conception de la vertu chez Aristote par rapport à la cité ?",
        answers: [
            "la vertu est individuelle", 
            "la vertu est politique", 
            "la vertu est indépendante de la cité"
        ], 
        correct: 2,
        explanation: "Pour Aristote, la vertu est politique. Cette conception, développée dans la Politique, fait de la cité le lieu où les citoyens peuvent devenir vertueux. La cité n'est pas seulement une association pour la sécurité ou le commerce : elle est une communauté éducative dont la fin est le bonheur des citoyens. Le politique doit légiférer en vue de la vertu : il doit créer les conditions qui permettent aux citoyens de devenir vertueux et donc heureux. Cette conception de la vertu comme politique distingue Aristote des sophistes (pour qui la vertu est une affaire privée) et des stoïciens (pour qui la vertu est universelle). Pour Aristote, la vertu est inséparable de la cité."
    },
    { 
        question: "Question n°38 : Quel est le rapport entre le bonheur et la raison chez Aristote ?",
        answers: [
            "le bonheur est indépendant de la raison", 
            "le bonheur est une activité conforme à la raison", 
            "le bonheur s'oppose à la raison"
        ], 
        correct: 2,
        explanation: "Pour Aristote, le bonheur est une activité conforme à la raison. La fonction propre de l'homme étant l'activité rationnelle, le bonheur consiste à exercer cette fonction avec excellence, c'est-à-dire selon la vertu. Cette conception rationaliste du bonheur distingue Aristote des conceptions hédonistes (pour qui le bonheur est le plaisir) et des conceptions mystiques (pour qui le bonheur est une contemplation passive). Pour Aristote, le bonheur est une activité (energeia) de l'âme selon la raison, c'est-à-dire une vie active guidée par la raison et conforme à la vertu."
    },
    { 
        question: "Question n°39 : Quelle est la conception du bonheur chez Aristote par rapport à l'amitié ?",
        answers: [
            "le bonheur est indépendant de l'amitié", 
            "l'amitié est nécessaire au bonheur", 
            "l'amitié s'oppose au bonheur"
        ], 
        correct: 2,
        explanation: "Pour Aristote, l'amitié est nécessaire au bonheur. Cette thèse, développée aux livres VIII et IX de l'Éthique à Nicomaque, fait de l'amitié (philia) un bien essentiel pour la vie heureuse. Nul ne voudrait vivre sans amis, même s'il possédait tous les autres biens. L'amitié est nécessaire à l'exercice de la vertu : elle fournit un miroir où l'homme vertueux peut contempler ses propres actions et progresser. Elle est aussi un plaisir et une aide dans l'adversité. Cette conception de l'amitié comme condition du bonheur distingue Aristote des stoïciens (pour qui l'amitié est indifférente) et des épicuriens (pour qui l'amitié est un contrat utilitaire)."
    },
    { 
        question: "Question n°40 : Quel est le rapport entre le bonheur et la contemplation chez Aristote ?",
        answers: [
            "le bonheur est indépendant de la contemplation", 
            "le bonheur parfait est la contemplation", 
            "la contemplation s'oppose au bonheur"
        ], 
        correct: 2,
        explanation: "Pour Aristote, le bonheur parfait est la contemplation (theoria). Cette thèse, développée au livre X de l'Éthique à Nicomaque, fait de la contemplation l'activité la plus haute et la plus parfaite. La contemplation est l'exercice de la raison théorique, qui est la fonction la plus propre de l'homme. Elle est autosuffisante, continue, plaisante, et ne dépend pas des circonstances extérieures. C'est pourquoi elle est identifiée au bonheur parfait. Cette conception intellectualiste du bonheur distingue Aristote des conceptions plus pratiques, qui font du bonheur une activité morale ou politique."
    },
    { 
        question: "Question n°41 : Quelle est la conception de la vertu chez Aristote par rapport à la loi ?",
        answers: [
            "la vertu est indépendante de la loi", 
            "la loi forme la vertu", 
            "la loi s'oppose à la vertu"
        ], 
        correct: 2,
        explanation: "Pour Aristote, la loi forme la vertu. Cette conception, développée dans la Politique, fait de la loi un instrument d'éducation morale : le législateur doit créer des lois qui habituent les citoyens à agir vertueusement. La loi ne se contente pas de réguler les comportements extérieurs : elle doit former le caractère, orienter l'âme vers le bien. Cette conception de la loi comme éducation distingue Aristote des sophistes (pour qui la loi est une convention) et des stoïciens (pour qui la loi est l'expression de la raison universelle). Pour Aristote, la loi est l'expression de la raison pratique du législateur, qui vise le bien commun."
    },
    { 
        question: "Question n°42 : Quel est le rapport entre le bonheur et la vertu chez Aristote ?",
        answers: [
            "le bonheur est la récompense de la vertu", 
            "le bonheur est l'activité vertueuse elle-même", 
            "le bonheur est indépendant de la vertu"
        ], 
        correct: 2,
        explanation: "Pour Aristote, le bonheur est l'activité vertueuse elle-même. Le bonheur n'est pas une récompense extérieure de la vertu (comme dans certaines conceptions religieuses), mais la vertu en acte. Être heureux, c'est agir selon la vertu, exercer pleinement sa fonction propre. Cette conception identifie le bonheur et la vertu : la vie vertueuse est la vie heureuse. Elle distingue Aristote des conceptions qui font du bonheur un état passif ou une récompense future. Pour Aristote, le bonheur est une activité présente, l'actualisation de nos potentialités les plus hautes."
    },
    { 
        question: "Question n°43 : Quelle est la conception de la vertu chez Aristote par rapport à l'âme ?",
        answers: [
            "la vertu est une qualité du corps", 
            "la vertu est une excellence de l'âme", 
            "la vertu est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Aristote, la vertu est une excellence de l'âme. L'âme étant le principe de la vie et de l'activité, la vertu est l'excellence dans l'exercice des fonctions de l'âme. Aristote distingue les vertus de l'âme rationnelle (sagesse, science, intelligence) et les vertus de l'âme irrationnelle (courage, tempérance, justice). Les vertus morales sont des dispositions de la partie désirante de l'âme, qui est capable d'écouter la raison. Cette conception psychologique de la vertu fonde la division tripartite de l'âme (végétative, sensitive, rationnelle) et la distinction entre vertus intellectuelles et vertus morales."
    },
    { 
        question: "Question n°44 : Quel est le rapport entre le bonheur et la cité chez Aristote ?",
        answers: [
            "le bonheur est individuel", 
            "le bonheur est politique", 
            "le bonheur est indépendant de la cité"
        ], 
        correct: 2,
        explanation: "Pour Aristote, le bonheur est politique. Cette conception, développée dans la Politique, fait de la cité le lieu où les citoyens peuvent atteindre le bonheur. La cité n'est pas seulement une association pour la sécurité ou le commerce : elle est une communauté éducative dont la fin est le bonheur des citoyens. Le politique doit légiférer en vue de la vertu : il doit créer les conditions qui permettent aux citoyens de devenir vertueux et donc heureux. Cette conception du bonheur comme politique distingue Aristote des épicuriens (pour qui le bonheur est individuel et privé) et des stoïciens (pour qui le bonheur est universel). Pour Aristote, le bonheur est inséparable de la cité."
    },
    { 
        question: "Question n°45 : Quelle est la conception de la vertu chez Aristote par rapport à la nature ?",
        answers: [
            "la vertu est contre-nature", 
            "la vertu est l'accomplissement de la nature", 
            "la vertu est indépendante de la nature"
        ], 
        correct: 2,
        explanation: "Pour Aristote, la vertu est l'accomplissement de la nature. La nature de l'homme étant l'activité rationnelle, la vertu consiste à exercer cette activité avec excellence. La vertu n'est donc pas contre-nature (comme le soutiennent certains sophistes), mais l'accomplissement de la nature humaine. Cette conception téléologique de la vertu fonde l'idée que le bonheur est l'accomplissement de la nature humaine, non un don de la fortune. Elle distingue Aristote des sophistes (pour qui la vertu est une convention) et des stoïciens (pour qui la vertu est l'obéissance à la raison universelle). Pour Aristote, la vertu est l'excellence dans l'exercice de la fonction propre de l'homme."
    },
    { 
        question: "Question n°46 : Quel est le rapport entre le bonheur et l'activité chez Aristote ?",
        answers: [
            "le bonheur est un état passif", 
            "le bonheur est une activité", 
            "le bonheur est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Aristote, le bonheur est une activité (energeia), non un état passif. Cette conception est fondamentale : elle signifie que le bonheur ne consiste pas à recevoir quelque chose mais à agir. Le bonheur est l'exercice de la fonction propre de l'homme, c'est-à-dire l'activité rationnelle conforme à la vertu. Il ne dépend donc pas principalement des circonstances extérieures mais de notre propre activité. Cette conception dynamique du bonheur distingue Aristote des conceptions qui font du bonheur un état de satisfaction ou un don de la fortune. Elle implique que le bonheur est en notre pouvoir, du moins en partie."
    },
    { 
        question: "Question n°47 : Quelle est la conception de la vertu chez Aristote par rapport à la raison pratique ?",
        answers: [
            "la vertu est indépendante de la raison pratique", 
            "la vertu est guidée par la raison pratique", 
            "la vertu s'oppose à la raison pratique"
        ], 
        correct: 2,
        explanation: "Pour Aristote, la vertu est guidée par la raison pratique (phronesis). La phronesis est la vertu intellectuelle qui permet de délibérer correctement sur ce qui est bon et utile pour bien vivre. Elle détermine le juste milieu dans les situations particulières. La vertu morale est ainsi inséparable de la raison pratique : elle consiste à choisir le juste milieu conformément à la raison. Cette conception de la vertu comme guidée par la raison pratique distingue Aristote de Platon, pour qui la vertu est surtout une connaissance du bien en soi. Pour Aristote, la vertu est inséparable de l'action et de la situation concrète."
    },
    { 
        question: "Question n°48 : Quel est le rapport entre le bonheur et la vertu chez Aristote ?",
        answers: [
            "le bonheur est la récompense de la vertu", 
            "le bonheur est l'activité vertueuse elle-même", 
            "le bonheur est indépendant de la vertu"
        ], 
        correct: 2,
        explanation: "Pour Aristote, le bonheur est l'activité vertueuse elle-même. Le bonheur n'est pas une récompense extérieure de la vertu (comme dans certaines conceptions religieuses), mais la vertu en acte. Être heureux, c'est agir selon la vertu, exercer pleinement sa fonction propre. Cette conception identifie le bonheur et la vertu : la vie vertueuse est la vie heureuse. Elle distingue Aristote des conceptions qui font du bonheur un état passif ou une récompense future. Pour Aristote, le bonheur est une activité présente, l'actualisation de nos potentialités les plus hautes."
    },
    { 
        question: "Question n°49 : Quelle est la conception de la vertu chez Aristote par rapport à l'excellence ?",
        answers: [
            "la vertu est une médiocrité", 
            "la vertu est une excellence", 
            "la vertu est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Aristote, la vertu est une excellence (aretê). Ce terme, souvent traduit par « vertu », signifie en grec « excellence », « mérite ». La vertu est l'excellence dans l'exercice de la fonction propre d'un être. Pour l'homme, la vertu est l'excellence dans l'activité rationnelle. Cette conception de la vertu comme excellence distingue Aristote des conceptions qui font de la vertu une simple conformité à la loi ou une obéissance à des règles. Pour Aristote, la vertu est une qualité positive, une perfection, un achèvement. Elle est ce qui rend un être bon et lui permet d'accomplir sa fonction propre avec excellence."
    },
    { 
        question: "Question n°50 : En quoi ce texte d'Aristote est-il représentatif de sa philosophie ?",
        answers: [
            "il montre la méthode dialectique et l'eudémonisme", 
            "il montre l'importance de la fonction propre et de la vertu", 
            "les deux réponses sont correctes"
        ], 
        correct: 3,
        explanation: "Ce texte de l'Éthique à Nicomaque est représentatif de la philosophie d'Aristote à plusieurs égards. D'abord, il montre la méthode dialectique d'Aristote, qui part des opinions communes (endoxa) pour s'élever vers la vérité. Ensuite, il montre l'eudémonisme aristotélicien, qui fait du bonheur la fin ultime de toutes nos actions. Enfin, il montre l'importance de la fonction propre (ergon) et de la vertu (aretê) dans la définition du bien suprême. Ce texte condense ainsi les thèmes majeurs de l'éthique aristotélicienne : le bonheur comme fin en soi, la fonction propre de l'homme, la vertu comme excellence, la vie accomplie comme félicité."
    }
];