// ============================================
// DONNÉES GÉNÉRALES
// ============================================

const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Hannah Arendt";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] L'action est la seule activité qui mette directement en rapport les hommes, sans l'intermédiaire des choses ou de la matière. [2] **En effet**, elle correspond à la condition humaine de la pluralité. [3] **Cependant**, elle a deux caractéristiques déroutantes : elle est irréversible et imprévisible. [4] **C'est pourquoi** les hommes ont cherché, depuis l'Antiquité, à y échapper. [5] Par exemple, en lui substituant la fabrication, qui maîtrise son matériau. [6] **Mais** l'action possède la vertu rédemptrice de la promesse, qui pallie l'imprévisibilité, et du pardon, qui remédie à l'irréversibilité. [7] **Ainsi**, sans être maîtrisable, l'action peut être sauvée de sa futilité. [8] **Car** elle fonde le pouvoir, qui n'est pas la violence **mais** la capacité d'agir de concert. [9] **Par conséquent**, l'espace public est le lieu où la parole et l'action révèlent qui nous sommes. [10] **En définitive**, c'est dans l'action que l'homme fait l'expérience de la liberté. »",
	source: "Hannah ARENDT, <em>Condition de l'homme moderne</em>, chap. V, « L'Action », trad. Georges Fradier, Calmann-Lévy, 1961, pp.282-283"
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    { 
        question: "Question n°1 : Quelle est la seule activité qui mette directement en rapport les hommes selon Arendt ?",
        answers: [
            "le travail", 
            "l'action", 
            "la fabrication"
        ], 
        correct: 2,
        explanation: "Arendt affirme : « L'action est la seule activité qui mette directement en rapport les hommes, sans l'intermédiaire des choses ou de la matière. » Cette conception de l'action est au cœur de la philosophie d'Arendt : l'action se distingue du travail (qui produit des biens de consommation) et de la fabrication (qui produit des objets durables). L'action est l'activité qui met les hommes en relation directe, par la parole et le geste, sans médiation matérielle. Cette conception de l'action comme relation directe entre les hommes distingue Arendt des philosophies qui réduisent l'action à la production ou au travail. Pour Arendt, l'action est la condition de la liberté et de la politique."
    },
    { 
        question: "Question n°2 : À quelle condition humaine correspond l'action selon Arendt ?",
        answers: [
            "à la condition de la pluralité", 
            "à la condition de la vie", 
            "à la condition de la mondanéité"
        ], 
        correct: 1,
        explanation: "Arendt affirme : « elle correspond à la condition humaine de la pluralité. » Cette conception de l'action est au cœur de la philosophie d'Arendt : l'action correspond à la pluralité, c'est-à-dire au fait que les hommes sont multiples, différents les uns des autres, et qu'ils vivent ensemble. C'est parce que les hommes sont pluriels que l'action est possible : elle est l'activité qui met en relation des êtres uniques et irremplaçables. Cette conception de la pluralité comme condition de l'action distingue Arendt des philosophies qui réduisent l'homme à un sujet universel (Kant, Descartes). Pour Arendt, la pluralité est la condition de la politique et de la liberté."
    },
    { 
        question: "Question n°3 : Quelles sont les deux caractéristiques déroutantes de l'action selon Arendt ?",
        answers: [
            "elle est irréversible et imprévisible", 
            "elle est productive et utile", 
            "elle est individuelle et égoïste"
        ], 
        correct: 1,
        explanation: "Arendt affirme : « elle a deux caractéristiques déroutantes : elle est irréversible et imprévisible. » Ces deux caractéristiques de l'action sont au cœur de la philosophie d'Arendt : l'action est irréversible (on ne peut pas défaire ce qu'on a fait) et imprévisible (on ne peut pas prévoir les conséquences de ses actes). Ces caractéristiques rendent l'action déroutante, car elles échappent à la maîtrise humaine. Cette conception de l'action comme irréversible et imprévisible distingue Arendt des philosophies qui cherchent à maîtriser l'action (Platon, Hobbes). Pour Arendt, ces caractéristiques sont constitutives de l'action et de la liberté."
    },
    { 
        question: "Question n°4 : Qu'ont cherché les hommes depuis l'Antiquité selon Arendt ?",
        answers: [
            "à échapper à l'action", 
            "à développer l'action", 
            "à célébrer l'action"
        ], 
        correct: 1,
        explanation: "Arendt affirme : « les hommes ont cherché, depuis l'Antiquité, à y échapper. » Cette observation historique est au cœur de la philosophie d'Arendt : depuis Platon, les philosophes ont cherché à échapper à l'action, à sa fragilité, à son imprévisibilité. Ils ont cherché à substituer à l'action des activités plus maîtrisables : la fabrication (Platon), la contemplation (Aristote), le travail (modernité). Cette conception de l'histoire de la philosophie comme fuite devant l'action distingue Arendt des philosophies traditionnelles. Pour Arendt, l'action est la condition de la liberté, et la fuite devant l'action est une fuite devant la liberté."
    },
    { 
        question: "Question n°5 : Par quoi les hommes ont-ils cherché à substituer l'action selon Arendt ?",
        answers: [
            "par la fabrication", 
            "par le travail", 
            "par la contemplation"
        ], 
        correct: 1,
        explanation: "Arendt affirme : « en lui substituant la fabrication, qui maîtrise son matériau. » Cette conception de la fabrication est au cœur de la philosophie d'Arendt : la fabrication est l'activité qui produit des objets durables, en maîtrisant son matériau. Contrairement à l'action, la fabrication est maîtrisable : l'artisan sait ce qu'il fait, il a un modèle, il contrôle son processus. C'est pourquoi les hommes ont cherché à substituer la fabrication à l'action : pour échapper à l'imprévisibilité et à l'irréversibilité de l'action. Cette conception de la fabrication comme activité maîtrisable distingue Arendt des philosophies qui valorisent la fabrication (Marx). Pour Arendt, la fabrication est inférieure à l'action, car elle ne met pas les hommes en relation directe."
    },
    { 
        question: "Question n°6 : Quelle est la vertu rédemptrice qui pallie l'imprévisibilité selon Arendt ?",
        answers: [
            "la promesse", 
            "le pardon", 
            "la violence"
        ], 
        correct: 1,
        explanation: "Arendt affirme : « l'action possède la vertu rédemptrice de la promesse, qui pallie l'imprévisibilité, et du pardon, qui remédie à l'irréversibilité. » Cette conception de la promesse est au cœur de la philosophie d'Arendt : la promesse est la faculté qui permet de pallier l'imprévisibilité de l'action. En promettant, les hommes se lient à l'avenir, ils créent des îlots de prévisibilité dans l'océan de l'imprévisibilité. Cette conception de la promesse distingue Arendt des philosophies qui cherchent à maîtriser l'action par la contrainte (Hobbes). Pour Arendt, la promesse est une faculté humaine qui permet de sauver l'action de sa futilité."
    },
    { 
        question: "Question n°7 : Quelle est la vertu rédemptrice qui remédie à l'irréversibilité selon Arendt ?",
        answers: [
            "la promesse", 
            "le pardon", 
            "la violence"
        ], 
        correct: 2,
        explanation: "Arendt affirme : « l'action possède la vertu rédemptrice de la promesse, qui pallie l'imprévisibilité, et du pardon, qui remédie à l'irréversibilité. » Cette conception du pardon est au cœur de la philosophie d'Arendt : le pardon est la faculté qui permet de remédier à l'irréversibilité de l'action. En pardonnant, les hommes libèrent l'autre du poids de son passé, ils lui permettent de recommencer. Cette conception du pardon distingue Arendt des philosophies qui cherchent à punir ou à oublier (Nietzsche). Pour Arendt, le pardon est une faculté humaine qui permet de sauver l'action de sa futilité."
    },
    { 
        question: "Question n°8 : Qu'est-ce que le pouvoir selon Arendt ?",
        answers: [
            "la capacité d'agir de concert", 
            "la violence", 
            "la domination"
        ], 
        correct: 1,
        explanation: "Arendt affirme : « elle fonde le pouvoir, qui n'est pas la violence mais la capacité d'agir de concert. » Cette conception du pouvoir est au cœur de la philosophie politique d'Arendt : le pouvoir n'est pas la violence (qui est instrumentale et solitaire), ni la domination (qui est imposée d'en haut), mais la capacité d'agir de concert, c'est-à-dire la capacité d'un groupe d'agir ensemble. Le pouvoir naît de l'action commune, il est le pouvoir du peuple, non le pouvoir sur le peuple. Cette conception du pouvoir distingue Arendt des philosophies qui identifient le pouvoir à la violence (Weber) ou à la domination (Foucault). Pour Arendt, le pouvoir est la condition de la liberté politique."
    },
    { 
      question: "Question n°9 : Qu'est-ce que l'espace public selon Arendt ?",
      answers: [
        "le lieu où la parole et l'action révèlent qui nous sommes", 
        "le lieu du travail", 
        "le lieu de la fabrication"
      ], 
      correct: 1,
      explanation: "Arendt affirme : « l'espace public est le lieu où la parole et l'action révèlent qui nous sommes. » Cette conception de l'espace public est au cœur de la philosophie politique d'Arendt : l'espace public n'est pas un espace physique (comme la place publique), ni un espace juridique (comme l'État), mais un espace d'apparition où les hommes se révèlent les uns aux autres par la parole et l'action. C'est dans l'espace public que l'homme montre qui il est, non ce qu'il est (ses qualités, ses talents). Cette conception de l'espace public comme lieu de révélation de soi distingue Arendt des philosophies qui réduisent l'espace public à un espace d'intérêt ou de pouvoir."
    },
    { 
      question: "Question n°10 : Où l'homme fait-il l'expérience de la liberté selon Arendt ?",
      answers: [
        "dans l'action", 
        "dans le travail", 
        "dans la contemplation"
      ], 
      correct: 1,
      explanation: "Arendt affirme : « c'est dans l'action que l'homme fait l'expérience de la liberté. » Cette conception de la liberté est au cœur de la philosophie politique d'Arendt : la liberté n'est pas une propriété de la volonté (comme chez Descartes, Kant), ni un état de nature (comme chez Rousseau), mais une expérience qui se vit dans l'action. C'est en agissant, en prenant des initiatives, en commençant quelque chose de nouveau, que l'homme fait l'expérience de la liberté. Cette conception de la liberté comme action distingue Arendt des philosophies qui font de la liberté une propriété intérieure. Pour Arendt, la liberté est politique : elle se vit dans l'espace public, avec les autres."
    },
    { 
      question: "Question n°11 : Quelle est la méthode d'Arendt dans ce passage ?",
      answers: [
        "l'analyse phénoménologique", 
        "la déduction logique", 
        "l'induction expérimentale"
      ], 
      correct: 1,
      explanation: "Dans ce passage, Arendt utilise une méthode phénoménologique : elle décrit les structures de l'action humaine telles qu'elles se donnent dans l'expérience. Elle ne s'agit pas de déduire des principes (méthode déductive), ni d'observer des faits (méthode inductive), mais de décrire les caractéristiques de l'action (irréversibilité, imprévisibilité), ses vertus rédemptrices (promesse, pardon), et ses effets (pouvoir, espace public, liberté). Cette méthode phénoménologique, héritée de Husserl et Heidegger, est au cœur de la philosophie d'Arendt. Elle consiste à décrire les phénomènes politiques tels qu'ils se donnent, sans les réduire à des concepts abstraits."
    },
    { 
      question: "Question n°12 : Quel est le rapport entre action et pluralité chez Arendt ?",
      answers: [
        "l'action correspond à la pluralité", 
        "l'action s'oppose à la pluralité", 
        "l'action est indépendante de la pluralité"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action correspond à la pluralité. Cette conception de l'action est au cœur de la philosophie d'Arendt : l'action est l'activité qui met en relation des êtres pluriels, uniques et irremplaçables. C'est parce que les hommes sont pluriels que l'action est possible : elle est l'activité qui révèle l'unicité de chacun. Cette conception de la pluralité comme condition de l'action distingue Arendt des philosophies qui réduisent l'homme à un sujet universel (Kant, Descartes). Pour Arendt, la pluralité est la condition de la politique et de la liberté."
    },
    { 
      question: "Question n°13 : Quelle est la conception de l'action chez Arendt ?",
      answers: [
        "l'action est l'activité qui met les hommes en relation", 
        "l'action est la production d'objets", 
        "l'action est le travail"
      ], 
      correct: 1,
      explanation: "Pour Arendt, l'action est l'activité qui met les hommes en relation. Cette conception de l'action est au cœur de la philosophie d'Arendt : l'action se distingue du travail (qui produit des biens de consommation) et de la fabrication (qui produit des objets durables). L'action est l'activité qui met les hommes en relation directe, par la parole et le geste, sans médiation matérielle. Cette conception de l'action comme relation directe entre les hommes distingue Arendt des philosophies qui réduisent l'action à la production ou au travail. Pour Arendt, l'action est la condition de la liberté et de la politique."
    },
    { 
      question: "Question n°14 : Quel est le rapport entre action et liberté chez Arendt ?",
      answers: [
        "l'action est la condition de la liberté", 
        "l'action supprime la liberté", 
        "l'action est indépendante de la liberté"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action est la condition de la liberté. Cette conception de la liberté est au cœur de la philosophie politique d'Arendt : la liberté n'est pas une propriété de la volonté (comme chez Descartes, Kant), ni un état de nature (comme chez Rousseau), mais une expérience qui se vit dans l'action. C'est en agissant, en prenant des initiatives, en commençant quelque chose de nouveau, que l'homme fait l'expérience de la liberté. Cette conception de la liberté comme action distingue Arendt des philosophies qui font de la liberté une propriété intérieure. Pour Arendt, la liberté est politique : elle se vit dans l'espace public, avec les autres."
    },
    { 
      question: "Question n°15 : Quelle est la conception du pouvoir chez Arendt ?",
      answers: [
        "le pouvoir est la violence", 
        "le pouvoir est la capacité d'agir de concert", 
        "le pouvoir est la domination"
      ], 
      correct: 2,
      explanation: "Pour Arendt, le pouvoir est la capacité d'agir de concert. Cette conception du pouvoir est au cœur de la philosophie politique d'Arendt : le pouvoir n'est pas la violence (qui est instrumentale et solitaire), ni la domination (qui est imposée d'en haut), mais la capacité d'agir de concert, c'est-à-dire la capacité d'un groupe d'agir ensemble. Le pouvoir naît de l'action commune, il est le pouvoir du peuple, non le pouvoir sur le peuple. Cette conception du pouvoir distingue Arendt des philosophies qui identifient le pouvoir à la violence (Weber) ou à la domination (Foucault). Pour Arendt, le pouvoir est la condition de la liberté politique."
    },
    { 
      question: "Question n°16 : Quel est le rapport entre action et espace public chez Arendt ?",
      answers: [
        "l'action se déploie dans l'espace public", 
        "l'action est indépendante de l'espace public", 
        "l'action supprime l'espace public"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action se déploie dans l'espace public. Cette conception de l'espace public est au cœur de la philosophie politique d'Arendt : l'espace public n'est pas un espace physique (comme la place publique), ni un espace juridique (comme l'État), mais un espace d'apparition où les hommes se révèlent les uns aux autres par la parole et l'action. C'est dans l'espace public que l'homme montre qui il est, non ce qu'il est (ses qualités, ses talents). Cette conception de l'espace public comme lieu de révélation de soi distingue Arendt des philosophies qui réduisent l'espace public à un espace d'intérêt ou de pouvoir."
    },
    { 
      question: "Question n°17 : Quelle est la conception de la pluralité chez Arendt ?",
      answers: [
        "la pluralité est la condition de l'action", 
        "la pluralité est un obstacle à l'action", 
        "la pluralité est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Arendt, la pluralité est la condition de l'action. Cette conception de la pluralité est au cœur de la philosophie d'Arendt : la pluralité est le fait que les hommes sont multiples, différents les uns des autres, et qu'ils vivent ensemble. C'est parce que les hommes sont pluriels que l'action est possible : elle est l'activité qui met en relation des êtres uniques et irremplaçables. Cette conception de la pluralité comme condition de l'action distingue Arendt des philosophies qui réduisent l'homme à un sujet universel (Kant, Descartes). Pour Arendt, la pluralité est la condition de la politique et de la liberté."
    },
    { 
      question: "Question n°18 : Quel est le rapport entre action et parole chez Arendt ?",
      answers: [
        "l'action et la parole révèlent qui nous sommes", 
        "l'action est indépendante de la parole", 
        "l'action s'oppose à la parole"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action et la parole révèlent qui nous sommes. Cette conception de l'action et de la parole est au cœur de la philosophie politique d'Arendt : l'action et la parole sont les activités qui révèlent l'unicité de chacun, qui montrent qui il est (non ce qu'il est). C'est par la parole et l'action que l'homme apparaît dans l'espace public, qu'il se distingue des autres, qu'il affirme son identité. Cette conception de l'action et de la parole comme révélation de soi distingue Arendt des philosophies qui réduisent la parole à la communication (Habermas) ou l'action à la production (Marx). Pour Arendt, l'action et la parole sont inséparables."
    },
    { 
      question: "Question n°19 : Quelle est la conception du pardon chez Arendt ?",
      answers: [
        "le pardon remédie à l'irréversibilité", 
        "le pardon est une faiblesse", 
        "le pardon est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Arendt, le pardon remédie à l'irréversibilité. Cette conception du pardon est au cœur de la philosophie d'Arendt : le pardon est la faculté qui permet de remédier à l'irréversibilité de l'action. En pardonnant, les hommes libèrent l'autre du poids de son passé, ils lui permettent de recommencer. Cette conception du pardon distingue Arendt des philosophies qui cherchent à punir ou à oublier (Nietzsche). Pour Arendt, le pardon est une faculté humaine qui permet de sauver l'action de sa futilité. Il est, avec la promesse, l'une des deux vertus rédemptrices de l'action."
    },
    { 
      question: "Question n°20 : Quel est le rapport entre action et imprévisibilité chez Arendt ?",
      answers: [
        "l'action est imprévisible", 
        "l'action est prévisible", 
        "l'action est indifférente à l'imprévisibilité"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action est imprévisible. Cette conception de l'action est au cœur de la philosophie d'Arendt : l'action est imprévisible car on ne peut pas prévoir les conséquences de ses actes. Cette imprévisibilité est l'une des deux caractéristiques déroutantes de l'action (avec l'irréversibilité). C'est pourquoi les hommes ont cherché à échapper à l'action en lui substituant la fabrication (qui maîtrise son matériau). Mais l'action possède la vertu rédemptrice de la promesse, qui pallie l'imprévisibilité. Cette conception de l'action comme imprévisible distingue Arendt des philosophies qui cherchent à maîtriser l'action (Platon, Hobbes)."
    },
    { 
      question: "Question n°21 : Quelle est la conception de la promesse chez Arendt ?",
      answers: [
        "la promesse pallie l'imprévisibilité", 
        "la promesse est une contrainte", 
        "la promesse est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Arendt, la promesse pallie l'imprévisibilité. Cette conception de la promesse est au cœur de la philosophie d'Arendt : la promesse est la faculté qui permet de pallier l'imprévisibilité de l'action. En promettant, les hommes se lient à l'avenir, ils créent des îlots de prévisibilité dans l'océan de l'imprévisibilité. Cette conception de la promesse distingue Arendt des philosophies qui cherchent à maîtriser l'action par la contrainte (Hobbes). Pour Arendt, la promesse est une faculté humaine qui permet de sauver l'action de sa futilité. Elle est, avec le pardon, l'une des deux vertus rédemptrices de l'action."
    },
    { 
      question: "Question n°22 : Quel est le rapport entre action et irréversibilité chez Arendt ?",
      answers: [
        "l'action est irréversible", 
        "l'action est réversible", 
        "l'action est indifférente à l'irréversibilité"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action est irréversible. Cette conception de l'action est au cœur de la philosophie d'Arendt : l'action est irréversible car on ne peut pas défaire ce qu'on a fait. Cette irréversibilité est l'une des deux caractéristiques déroutantes de l'action (avec l'imprévisibilité). C'est pourquoi les hommes ont cherché à échapper à l'action en lui substituant la fabrication (qui maîtrise son matériau). Mais l'action possède la vertu rédemptrice du pardon, qui remédie à l'irréversibilité. Cette conception de l'action comme irréversible distingue Arendt des philosophies qui cherchent à maîtriser l'action (Platon, Hobbes)."
    },
    { 
      question: "Question n°23 : Quelle est la conception de la liberté chez Arendt ?",
      answers: [
        "la liberté est une propriété de la volonté", 
        "la liberté est une expérience de l'action", 
        "la liberté est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Arendt, la liberté est une expérience de l'action. Cette conception de la liberté est au cœur de la philosophie politique d'Arendt : la liberté n'est pas une propriété de la volonté (comme chez Descartes, Kant), ni un état de nature (comme chez Rousseau), mais une expérience qui se vit dans l'action. C'est en agissant, en prenant des initiatives, en commençant quelque chose de nouveau, que l'homme fait l'expérience de la liberté. Cette conception de la liberté comme action distingue Arendt des philosophies qui font de la liberté une propriété intérieure. Pour Arendt, la liberté est politique : elle se vit dans l'espace public, avec les autres."
    },
    { 
      question: "Question n°24 : Quel est le rapport entre action et commencement chez Arendt ?",
      answers: [
        "l'action est commencement", 
        "l'action est répétition", 
        "l'action est une illusion"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action est commencement. Cette conception de l'action est au cœur de la philosophie d'Arendt : agir, c'est commencer quelque chose de nouveau, prendre une initiative, mettre en mouvement. L'action est l'activité qui introduit du nouveau dans le monde, qui rompt avec le cours ordinaire des choses. Cette conception de l'action comme commencement distingue Arendt des philosophies qui réduisent l'action à la production (Marx) ou à la répétition (structuralisme). Pour Arendt, l'action est la condition de la liberté et de la nouveauté. Elle est liée à la natalité : chaque naissance est un nouveau commencement, une nouvelle possibilité d'action."
    },
    { 
      question: "Question n°25 : Quelle est la conception de la politique chez Arendt ?",
      answers: [
        "la politique est l'action commune dans l'espace public", 
        "la politique est la domination", 
        "la politique est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Arendt, la politique est l'action commune dans l'espace public. Cette conception de la politique est au cœur de la philosophie politique d'Arendt : la politique n'est pas la domination (comme chez les réalistes), ni la gestion (comme chez les technocrates), mais l'action commune des citoyens dans l'espace public. La politique est l'activité qui permet aux hommes de se révéler les uns aux autres, de délibérer ensemble, d'agir de concert. Cette conception de la politique comme action commune distingue Arendt des philosophies qui réduisent la politique à la violence (Weber) ou à la domination (Foucault). Pour Arendt, la politique est la condition de la liberté."
    },
    { 
      question: "Question n°26 : Quel est le rapport entre action et natalité chez Arendt ?",
      answers: [
        "l'action est liée à la natalité", 
        "l'action est indépendante de la natalité", 
        "l'action s'oppose à la natalité"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action est liée à la natalité. Cette conception de l'action est au cœur de la philosophie d'Arendt : l'action est liée à la natalité car chaque naissance est un nouveau commencement, une nouvelle possibilité d'action. Les hommes sont des êtres natals, c'est-à-dire des êtres qui naissent et qui sont capables de commencer quelque chose de nouveau. Cette conception de l'action comme liée à la natalité distingue Arendt des philosophies qui réduisent l'action à la production (Marx) ou à la répétition (structuralisme). Pour Arendt, l'action est la condition de la liberté et de la nouveauté."
    },
    { 
      question: "Question n°27 : Quelle est la conception du travail chez Arendt ?",
      answers: [
        "le travail produit des biens de consommation", 
        "le travail met les hommes en relation", 
        "le travail est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Arendt, le travail produit des biens de consommation. Cette conception du travail est au cœur de la philosophie d'Arendt : le travail est l'activité qui correspond à la condition de la vie, qui produit les biens nécessaires à la survie. Le travail se distingue de l'action (qui met les hommes en relation) et de la fabrication (qui produit des objets durables). Le travail est l'activité la plus humble, la plus nécessaire, mais aussi la moins libre. Cette conception du travail distingue Arendt des philosophies qui valorisent le travail (Marx) ou qui le dévalorisent (aristocratie). Pour Arendt, le travail est nécessaire mais il n'est pas la condition de la liberté : c'est l'action qui est la condition de la liberté."
    },
    { 
      question: "Question n°28 : Quel est le rapport entre action et nouveauté chez Arendt ?",
      answers: [
        "l'action introduit du nouveau dans le monde", 
        "l'action répète le passé", 
        "l'action est indifférente à la nouveauté"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action introduit du nouveau dans le monde. Cette conception de l'action est au cœur de la philosophie d'Arendt : agir, c'est commencer quelque chose de nouveau, prendre une initiative, mettre en mouvement. L'action est l'activité qui rompt avec le cours ordinaire des choses, qui introduit de l'imprévisible, du nouveau. Cette conception de l'action comme nouveauté distingue Arendt des philosophies qui réduisent l'action à la production (Marx) ou à la répétition (structuralisme). Pour Arendt, l'action est la condition de la liberté et de la créativité humaine."
    },
    { 
      question: "Question n°29 : Quelle est la conception de la fabrication chez Arendt ?",
      answers: [
        "la fabrication produit des objets durables", 
        "la fabrication met les hommes en relation", 
        "la fabrication est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Arendt, la fabrication produit des objets durables. Cette conception de la fabrication est au cœur de la philosophie d'Arendt : la fabrication est l'activité qui correspond à la condition de la mondanéité, qui produit les objets du monde (outils, œuvres, institutions). La fabrication se distingue du travail (qui produit des biens de consommation) et de l'action (qui met les hommes en relation). La fabrication est maîtrisable : l'artisan sait ce qu'il fait, il a un modèle, il contrôle son processus. Cette conception de la fabrication comme activité maîtrisable distingue Arendt des philosophies qui valorisent la fabrication (Marx). Pour Arendt, la fabrication est inférieure à l'action."
    },
    { 
      question: "Question n°30 : Quel est le rapport entre action et révélation de soi chez Arendt ?",
      answers: [
        "l'action révèle qui nous sommes", 
        "l'action cache qui nous sommes", 
        "l'action est indifférente à qui nous sommes"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action révèle qui nous sommes. Cette conception de l'action est au cœur de la philosophie d'Arendt : l'action, avec la parole, est l'activité qui révèle l'unicité de chacun, qui montre qui il est (non ce qu'il est). C'est par la parole et l'action que l'homme apparaît dans l'espace public, qu'il se distingue des autres, qu'il affirme son identité. Cette conception de l'action comme révélation de soi distingue Arendt des philosophies qui réduisent l'action à la production (Marx) ou à la communication (Habermas). Pour Arendt, l'action est la condition de la liberté et de l'identité personnelle."
    },
    { 
      question: "Question n°31 : Quelle est la conception de l'espace public chez Arendt ?",
      answers: [
        "l'espace public est le lieu de l'apparition", 
        "l'espace public est le lieu du travail", 
        "l'espace public est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Arendt, l'espace public est le lieu de l'apparition. Cette conception de l'espace public est au cœur de la philosophie politique d'Arendt : l'espace public n'est pas un espace physique (comme la place publique), ni un espace juridique (comme l'État), mais un espace d'apparition où les hommes se révèlent les uns aux autres par la parole et l'action. C'est dans l'espace public que l'homme montre qui il est, non ce qu'il est (ses qualités, ses talents). Cette conception de l'espace public comme lieu d'apparition distingue Arendt des philosophies qui réduisent l'espace public à un espace d'intérêt ou de pouvoir."
    },
    { 
      question: "Question n°32 : Quel est le rapport entre action et pouvoir chez Arendt ?",
      answers: [
        "l'action fonde le pouvoir", 
        "l'action supprime le pouvoir", 
        "l'action est indépendante du pouvoir"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action fonde le pouvoir. Cette conception du pouvoir est au cœur de la philosophie politique d'Arendt : le pouvoir n'est pas la violence (qui est instrumentale et solitaire), ni la domination (qui est imposée d'en haut), mais la capacité d'agir de concert, c'est-à-dire la capacité d'un groupe d'agir ensemble. Le pouvoir naît de l'action commune, il est le pouvoir du peuple, non le pouvoir sur le peuple. Cette conception du pouvoir distingue Arendt des philosophies qui identifient le pouvoir à la violence (Weber) ou à la domination (Foucault). Pour Arendt, le pouvoir est la condition de la liberté politique."
    },
    { 
      question: "Question n°33 : Quelle est la conception de la violence chez Arendt ?",
      answers: [
        "la violence est le pouvoir", 
        "la violence est le contraire du pouvoir", 
        "la violence est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Arendt, la violence est le contraire du pouvoir. Cette conception de la violence est au cœur de la philosophie politique d'Arendt : la violence n'est pas le pouvoir, mais son contraire. Le pouvoir naît de l'action commune, la violence est instrumentale et solitaire. Le pouvoir est la capacité d'agir de concert, la violence est la capacité d'imposer sa volonté par la force. Cette conception de la violence comme contraire du pouvoir distingue Arendt des philosophies qui identifient le pouvoir à la violence (Weber, Foucault). Pour Arendt, le pouvoir est la condition de la liberté politique, la violence est la négation de la politique."
    },
    { 
      question: "Question n°34 : Quel est le rapport entre action et liberté chez Arendt ?",
      answers: [
        "l'action est l'expérience de la liberté", 
        "l'action supprime la liberté", 
        "l'action est indépendante de la liberté"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action est l'expérience de la liberté. Cette conception de la liberté est au cœur de la philosophie politique d'Arendt : la liberté n'est pas une propriété de la volonté (comme chez Descartes, Kant), ni un état de nature (comme chez Rousseau), mais une expérience qui se vit dans l'action. C'est en agissant, en prenant des initiatives, en commençant quelque chose de nouveau, que l'homme fait l'expérience de la liberté. Cette conception de la liberté comme action distingue Arendt des philosophies qui font de la liberté une propriété intérieure. Pour Arendt, la liberté est politique : elle se vit dans l'espace public, avec les autres."
    },
    { 
      question: "Question n°35 : Quelle est la conception de la pluralité chez Arendt par rapport à l'action ?",
      answers: [
        "la pluralité est la condition de l'action", 
        "la pluralité est un obstacle à l'action", 
        "la pluralité est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Arendt, la pluralité est la condition de l'action. Cette conception de la pluralité est au cœur de la philosophie d'Arendt : la pluralité est le fait que les hommes sont multiples, différents les uns des autres, et qu'ils vivent ensemble. C'est parce que les hommes sont pluriels que l'action est possible : elle est l'activité qui met en relation des êtres uniques et irremplaçables. Cette conception de la pluralité comme condition de l'action distingue Arendt des philosophies qui réduisent l'homme à un sujet universel (Kant, Descartes). Pour Arendt, la pluralité est la condition de la politique et de la liberté."
    },
    { 
      question: "Question n°36 : Quel est le rapport entre action et pardon chez Arendt ?",
      answers: [
        "le pardon remédie à l'irréversibilité de l'action", 
        "le pardon supprime l'action", 
        "le pardon est indépendant de l'action"
      ], 
      correct: 1,
      explanation: "Chez Arendt, le pardon remédie à l'irréversibilité de l'action. Cette conception du pardon est au cœur de la philosophie d'Arendt : le pardon est la faculté qui permet de remédier à l'irréversibilité de l'action. En pardonnant, les hommes libèrent l'autre du poids de son passé, ils lui permettent de recommencer. Cette conception du pardon distingue Arendt des philosophies qui cherchent à punir ou à oublier (Nietzsche). Pour Arendt, le pardon est une faculté humaine qui permet de sauver l'action de sa futilité. Il est, avec la promesse, l'une des deux vertus rédemptrices de l'action."
    },
    { 
      question: "Question n°37 : Quelle est la conception de la promesse chez Arendt par rapport à l'action ?",
      answers: [
        "la promesse pallie l'imprévisibilité de l'action", 
        "la promesse supprime l'action", 
        "la promesse est indépendante de l'action"
      ], 
      correct: 1,
      explanation: "Pour Arendt, la promesse pallie l'imprévisibilité de l'action. Cette conception de la promesse est au cœur de la philosophie d'Arendt : la promesse est la faculté qui permet de pallier l'imprévisibilité de l'action. En promettant, les hommes se lient à l'avenir, ils créent des îlots de prévisibilité dans l'océan de l'imprévisibilité. Cette conception de la promesse distingue Arendt des philosophies qui cherchent à maîtriser l'action par la contrainte (Hobbes). Pour Arendt, la promesse est une faculté humaine qui permet de sauver l'action de sa futilité. Elle est, avec le pardon, l'une des deux vertus rédemptrices de l'action."
    },
    { 
      question: "Question n°38 : Quel est le rapport entre action et espace public chez Arendt ?",
      answers: [
        "l'action se déploie dans l'espace public", 
        "l'action est indépendante de l'espace public", 
        "l'action supprime l'espace public"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action se déploie dans l'espace public. Cette conception de l'espace public est au cœur de la philosophie politique d'Arendt : l'espace public n'est pas un espace physique (comme la place publique), ni un espace juridique (comme l'État), mais un espace d'apparition où les hommes se révèlent les uns aux autres par la parole et l'action. C'est dans l'espace public que l'homme montre qui il est, non ce qu'il est (ses qualités, ses talents). Cette conception de l'espace public comme lieu de révélation de soi distingue Arendt des philosophies qui réduisent l'espace public à un espace d'intérêt ou de pouvoir."
    },
    { 
      question: "Question n°39 : Quelle est la conception de la politique chez Arendt par rapport à l'action ?",
      answers: [
        "la politique est l'action commune dans l'espace public", 
        "la politique est la domination", 
        "la politique est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Arendt, la politique est l'action commune dans l'espace public. Cette conception de la politique est au cœur de la philosophie politique d'Arendt : la politique n'est pas la domination (comme chez les réalistes), ni la gestion (comme chez les technocrates), mais l'action commune des citoyens dans l'espace public. La politique est l'activité qui permet aux hommes de se révéler les uns aux autres, de délibérer ensemble, d'agir de concert. Cette conception de la politique comme action commune distingue Arendt des philosophies qui réduisent la politique à la violence (Weber) ou à la domination (Foucault). Pour Arendt, la politique est la condition de la liberté."
    },
    { 
      question: "Question n°40 : Quel est le rapport entre action et monde chez Arendt ?",
      answers: [
        "l'action crée le monde commun", 
        "l'action est indépendante du monde", 
        "l'action détruit le monde"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action crée le monde commun. Cette conception de l'action est au cœur de la philosophie d'Arendt : l'action, avec la parole, crée le monde commun, c'est-à-dire l'espace public où les hommes se rencontrent, délibèrent et agissent ensemble. Le monde commun n'est pas un donné, mais une création humaine, qui naît de l'action commune. Cette conception de l'action comme création du monde commun distingue Arendt des philosophies qui réduisent le monde à la nature (naturalisme) ou à la matière (matérialisme). Pour Arendt, le monde est le produit de l'action humaine, il est l'espace de la liberté et de la politique."
    },
    { 
      question: "Question n°41 : Quelle est la conception de la liberté chez Arendt par rapport à la politique ?",
      answers: [
        "la liberté est politique", 
        "la liberté est intérieure", 
        "la liberté est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Arendt, la liberté est politique. Cette conception de la liberté est au cœur de la philosophie politique d'Arendt : la liberté n'est pas une propriété de la volonté (comme chez Descartes, Kant), ni un état de nature (comme chez Rousseau), mais une expérience qui se vit dans l'action politique. C'est en agissant, en prenant des initiatives, en commençant quelque chose de nouveau, que l'homme fait l'expérience de la liberté. Cette conception de la liberté comme politique distingue Arendt des philosophies qui font de la liberté une propriété intérieure. Pour Arendt, la liberté se vit dans l'espace public, avec les autres."
    },
    { 
      question: "Question n°42 : Quel est le rapport entre action et initiative chez Arendt ?",
      answers: [
        "l'action est initiative", 
        "l'action est répétition", 
        "l'action est une illusion"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action est initiative. Cette conception de l'action est au cœur de la philosophie d'Arendt : agir, c'est prendre une initiative, commencer quelque chose de nouveau, mettre en mouvement. L'action est l'activité qui introduit du nouveau dans le monde, qui rompt avec le cours ordinaire des choses. Cette conception de l'action comme initiative distingue Arendt des philosophies qui réduisent l'action à la production (Marx) ou à la répétition (structuralisme). Pour Arendt, l'action est la condition de la liberté et de la nouveauté. Elle est liée à la natalité : chaque naissance est un nouveau commencement, une nouvelle possibilité d'action."
    },
    { 
      question: "Question n°43 : Quelle est la conception du monde chez Arendt ?",
      answers: [
        "le monde est l'espace public de l'action", 
        "le monde est la nature", 
        "le monde est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Arendt, le monde est l'espace public de l'action. Cette conception du monde est au cœur de la philosophie d'Arendt : le monde n'est pas la nature (comme chez les naturalistes), ni la matière (comme chez les matérialistes), mais l'espace public où les hommes se rencontrent, délibèrent et agissent ensemble. Le monde est le produit de l'action humaine, il est l'espace de la liberté et de la politique. Cette conception du monde comme espace public distingue Arendt des philosophies qui réduisent le monde à la nature ou à la matière. Pour Arendt, le monde est le lieu de l'apparition, où les hommes se révèlent les uns aux autres."
    },
    { 
      question: "Question n°44 : Quel est le rapport entre action et parole chez Arendt ?",
      answers: [
        "l'action et la parole sont inséparables", 
        "l'action est indépendante de la parole", 
        "l'action s'oppose à la parole"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action et la parole sont inséparables. Cette conception de l'action et de la parole est au cœur de la philosophie politique d'Arendt : l'action et la parole sont les activités qui révèlent l'unicité de chacun, qui montrent qui il est (non ce qu'il est). C'est par la parole et l'action que l'homme apparaît dans l'espace public, qu'il se distingue des autres, qu'il affirme son identité. Cette conception de l'action et de la parole comme inséparables distingue Arendt des philosophies qui réduisent la parole à la communication (Habermas) ou l'action à la production (Marx). Pour Arendt, l'action et la parole sont les deux faces de la même activité."
    },
    { 
      question: "Question n°45 : Quelle est la conception de la natalité chez Arendt ?",
      answers: [
        "la natalité est la condition de l'action", 
        "la natalité est un obstacle à l'action", 
        "la natalité est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Arendt, la natalité est la condition de l'action. Cette conception de la natalité est au cœur de la philosophie d'Arendt : la natalité est le fait que les hommes naissent, qu'ils sont des êtres natals, capables de commencer quelque chose de nouveau. Chaque naissance est un nouveau commencement, une nouvelle possibilité d'action. Cette conception de la natalité comme condition de l'action distingue Arendt des philosophies qui réduisent l'homme à un être de travail (Marx) ou de fabrication (Hegel). Pour Arendt, l'homme est un être d'action, capable d'initiative et de nouveauté."
    },
    { 
      question: "Question n°46 : Quel est le rapport entre action et liberté chez Arendt ?",
      answers: [
        "l'action est l'expérience de la liberté", 
        "l'action supprime la liberté", 
        "l'action est indépendante de la liberté"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action est l'expérience de la liberté. Cette conception de la liberté est au cœur de la philosophie politique d'Arendt : la liberté n'est pas une propriété de la volonté (comme chez Descartes, Kant), ni un état de nature (comme chez Rousseau), mais une expérience qui se vit dans l'action. C'est en agissant, en prenant des initiatives, en commençant quelque chose de nouveau, que l'homme fait l'expérience de la liberté. Cette conception de la liberté comme action distingue Arendt des philosophies qui font de la liberté une propriété intérieure. Pour Arendt, la liberté est politique : elle se vit dans l'espace public, avec les autres."
    },
    { 
      question: "Question n°47 : Quelle est la conception du pouvoir chez Arendt par rapport à la violence ?",
      answers: [
        "le pouvoir est le contraire de la violence", 
        "le pouvoir est identique à la violence", 
        "le pouvoir est indépendant de la violence"
      ], 
      correct: 1,
      explanation: "Pour Arendt, le pouvoir est le contraire de la violence. Cette conception du pouvoir est au cœur de la philosophie politique d'Arendt : le pouvoir n'est pas la violence (qui est instrumentale et solitaire), ni la domination (qui est imposée d'en haut), mais la capacité d'agir de concert, c'est-à-dire la capacité d'un groupe d'agir ensemble. Le pouvoir naît de l'action commune, il est le pouvoir du peuple, non le pouvoir sur le peuple. Cette conception du pouvoir distingue Arendt des philosophies qui identifient le pouvoir à la violence (Weber) ou à la domination (Foucault). Pour Arendt, le pouvoir est la condition de la liberté politique."
    },
    { 
      question: "Question n°48 : Quel est le rapport entre action et apparition chez Arendt ?",
      answers: [
        "l'action est apparition dans l'espace public", 
        "l'action est cachée", 
        "l'action est une illusion"
      ], 
      correct: 1,
      explanation: "Chez Arendt, l'action est apparition dans l'espace public. Cette conception de l'action est au cœur de la philosophie politique d'Arendt : l'action, avec la parole, est l'activité qui fait apparaître l'homme dans l'espace public, qui le révèle aux autres, qui montre qui il est (non ce qu'il est). C'est par l'action que l'homme se distingue des autres, qu'il affirme son identité, qu'il laisse une trace dans le monde. Cette conception de l'action comme apparition distingue Arendt des philosophies qui réduisent l'action à la production (Marx) ou à la communication (Habermas). Pour Arendt, l'action est la condition de la liberté et de l'identité personnelle."
    },
    { 
      question: "Question n°49 : Quelle est la conception de la liberté chez Arendt par rapport à l'action ?",
      answers: [
        "la liberté est l'expérience de l'action", 
        "la liberté est une propriété de la volonté", 
        "la liberté est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Arendt, la liberté est l'expérience de l'action. Cette conception de la liberté est au cœur de la philosophie politique d'Arendt : la liberté n'est pas une propriété de la volonté (comme chez Descartes, Kant), ni un état de nature (comme chez Rousseau), mais une expérience qui se vit dans l'action. C'est en agissant, en prenant des initiatives, en commençant quelque chose de nouveau, que l'homme fait l'expérience de la liberté. Cette conception de la liberté comme action distingue Arendt des philosophies qui font de la liberté une propriété intérieure. Pour Arendt, la liberté est politique : elle se vit dans l'espace public, avec les autres."
    },
    { 
      question: "Question n°50 : En quoi ce texte d'Arendt est-il représentatif de sa philosophie ?",
      answers: [
        "il montre la distinction entre action, travail et fabrication", 
        "il montre la conception du pouvoir comme action commune et de la liberté comme expérience politique", 
        "les deux réponses sont correctes"
      ], 
      correct: 3,
      explanation: "Ce texte de Condition de l'homme moderne est représentatif de la philosophie d'Arendt à plusieurs égards. D'abord, il montre la distinction entre action, travail et fabrication, qui est au cœur de sa philosophie. Ensuite, il montre la conception du pouvoir comme action commune (capacité d'agir de concert), qui se distingue de la violence et de la domination. Enfin, il montre la conception de la liberté comme expérience politique, qui se vit dans l'espace public, avec les autres. Ce texte condense ainsi les thèmes majeurs de la philosophie d'Arendt : action, pluralité, espace public, pouvoir, liberté, promesse et pardon, natalité."
    }
];