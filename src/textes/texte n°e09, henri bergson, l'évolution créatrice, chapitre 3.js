// ============================================
// DONNÉES GÉNÉRALES
// ============================================

const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Bergson";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	source: "Henri BERGSON, <em>L'évolution créatrice</em>, chap.III, in <em>Œuvres</em>, éd. André Robinet, PUF, 1959, pp.730-731",
	texte: "« [1] L'intelligence et l'instinct sont deux directions divergentes de l'évolution de la vie. [2] **En effet**, l'intelligence est tournée vers la matière inerte ; **au contraire**, l'instinct est en affinité avec la vie. [3] **Cependant**, l'intelligence humaine a pour caractère de ne pas comprendre la vie. [4] **Car** elle applique à ce qui est mouvant des formes fixes. [5] **Ainsi**, elle analyse le devenir **mais** ne le saisit pas dans sa durée réelle. [6] Par exemple, elle découpe le temps en instants identiques, **tandis que** la durée est hétérogène et créatrice. [7] **C'est pourquoi** une philosophie intuitive est nécessaire. [8] **En d'autres termes**, il faut coïncider avec le mouvement même de la réalité. [9] **Or**, cela est possible par l'intuition, qui est l'instinct devenu désintéressé. [10] **Par conséquent**, la métaphysique doit être l'expérience vécue de la durée. [11] **Finalement**, comprendre la vie exige un effort pour se placer en elle, et non pour l'observer du dehors. »"
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    { 
        question: "Question n°1 : Que sont l'intelligence et l'instinct selon Bergson ?",
        answers: [
            "deux directions divergentes de l'évolution de la vie", 
            "deux facultés identiques", 
            "deux illusions"
        ], 
        correct: 1,
        explanation: "Bergson affirme : « L'intelligence et l'instinct sont deux directions divergentes de l'évolution de la vie. » Cette conception de l'intelligence et de l'instinct est au cœur de la philosophie de Bergson : l'intelligence et l'instinct ne sont pas deux facultés de même nature, mais deux directions divergentes de l'évolution de la vie. L'intelligence est tournée vers la matière inerte ; l'instinct est en affinité avec la vie. Cette conception évolutionniste des facultés distingue Bergson des philosophes qui font de l'intelligence la faculté suprême (Descartes, Kant). Pour Bergson, l'intelligence est une faculté pratique, adaptée à l'action sur la matière, non à la connaissance de la vie."
    },
    { 
        question: "Question n°2 : Vers quoi est tournée l'intelligence selon Bergson ?",
        answers: [
            "vers la matière inerte", 
            "vers la vie", 
            "vers l'esprit"
        ], 
        correct: 1,
        explanation: "Bergson affirme : « l'intelligence est tournée vers la matière inerte. » Cette conception de l'intelligence est au cœur de la philosophie de Bergson : l'intelligence n'est pas une faculté de connaissance pure, mais une faculté pratique, adaptée à l'action sur la matière inerte. Elle est faite pour fabriquer des outils, pour agir sur les choses, pour les découper en parties manipulables. Cette conception pragmatique de l'intelligence distingue Bergson des philosophes qui font de l'intelligence la faculté de connaître la vérité (Descartes, Kant). Pour Bergson, l'intelligence est adaptée à la matière, non à la vie."
    },
    { 
        question: "Question n°3 : Avec quoi l'instinct est-il en affinité selon Bergson ?",
        answers: [
            "avec la matière inerte", 
            "avec la vie", 
            "avec l'esprit"
        ], 
        correct: 2,
        explanation: "Bergson affirme : « l'instinct est en affinité avec la vie. » Cette conception de l'instinct est au cœur de la philosophie de Bergson : l'instinct est une faculté adaptée à la vie, non à la matière inerte. Il est une sorte de sympathie qui permet à l'être vivant de coïncider avec le mouvement de la vie. Cette conception de l'instinct distingue Bergson des philosophes qui font de l'instinct une faculté inférieure (Descartes). Pour Bergson, l'instinct est une forme de connaissance, mais une connaissance immédiate et non intellectuelle. C'est cette affinité avec la vie que Bergson retrouvera dans l'intuition."
    },
    { 
        question: "Question n°4 : Quel est le caractère de l'intelligence humaine selon Bergson ?",
        answers: [
            "de comprendre la vie", 
            "de ne pas comprendre la vie", 
            "de comprendre la matière"
        ], 
        correct: 2,
        explanation: "Bergson affirme : « l'intelligence humaine a pour caractère de ne pas comprendre la vie. » Cette conception critique de l'intelligence est au cœur de la philosophie de Bergson : l'intelligence, étant tournée vers la matière inerte, est incapable de comprendre la vie. Elle applique à ce qui est mouvant des formes fixes ; elle analyse le devenir mais ne le saisit pas dans sa durée réelle. Cette critique de l'intelligence distingue Bergson des philosophes intellectualistes (Descartes, Kant), pour qui l'intelligence est la faculté de connaître la vérité. Pour Bergson, l'intelligence est adaptée à la matière, non à la vie. C'est pourquoi une philosophie intuitive est nécessaire."
    },
    { 
        question: "Question n°5 : Qu'applique l'intelligence à ce qui est mouvant ?",
        answers: [
            "des formes fixes", 
            "des formes mouvantes", 
            "des formes vivantes"
        ], 
        correct: 1,
        explanation: "Bergson affirme : « elle applique à ce qui est mouvant des formes fixes. » Cette conception de l'intelligence est au cœur de la philosophie de Bergson : l'intelligence, étant tournée vers la matière inerte, applique à ce qui est mouvant des formes fixes, c'est-à-dire des concepts, des catégories, des cadres rigides. Elle découpe le réel en parties stables, elle l'analyse en éléments immuables. Cette conception critique de l'intelligence distingue Bergson des philosophes intellectualistes, pour qui l'intelligence est la faculté de connaître la vérité. Pour Bergson, l'intelligence est adaptée à la matière, non à la vie. C'est pourquoi elle ne peut pas saisir la durée, qui est mouvante et créatrice."
    },
    { 
        question: "Question n°6 : Que fait l'intelligence du devenir selon Bergson ?",
        answers: [
            "elle le saisit dans sa durée réelle", 
            "elle l'analyse mais ne le saisit pas dans sa durée réelle", 
            "elle l'ignore"
        ], 
        correct: 2,
        explanation: "Bergson affirme : « elle analyse le devenir mais ne le saisit pas dans sa durée réelle. » Cette conception critique de l'intelligence est au cœur de la philosophie de Bergson : l'intelligence analyse le devenir, c'est-à-dire qu'elle le découpe en états stables, en instants juxtaposés. Mais elle ne saisit pas le devenir dans sa durée réelle, c'est-à-dire dans son mouvement continu et créateur. Cette distinction entre analyse et intuition est fondamentale dans la philosophie de Bergson : l'analyse est le mode de connaissance de l'intelligence, l'intuition est le mode de connaissance de la durée. Cette conception distingue Bergson des philosophes intellectualistes."
    },
    { 
        question: "Question n°7 : Comment l'intelligence découpe-t-elle le temps selon Bergson ?",
        answers: [
            "en instants identiques", 
            "en moments hétérogènes", 
            "en durées créatrices"
        ], 
        correct: 1,
        explanation: "Bergson affirme : « elle découpe le temps en instants identiques, tandis que la durée est hétérogène et créatrice. » Cette conception critique de l'intelligence est au cœur de la philosophie de Bergson : l'intelligence, étant tournée vers la matière inerte, spatialise le temps. Elle le découpe en instants identiques, juxtaposés, comme les points d'une ligne. Mais cette conception spatialisée du temps ne rend pas compte de la durée réelle, qui est hétérogène et créatrice. Cette distinction entre temps spatialisé et durée réelle est fondamentale dans la philosophie de Bergson. Elle fonde la critique de l'intelligence, qui ne peut pas saisir la durée."
    },
    { 
        question: "Question n°8 : Qu'est-ce que la durée selon Bergson ?",
        answers: [
            "une succession d'instants identiques", 
            "une réalité hétérogène et créatrice", 
            "une illusion"
        ], 
        correct: 2,
        explanation: "Bergson affirme : « la durée est hétérogène et créatrice. » Cette conception de la durée est au cœur de la philosophie de Bergson : la durée n'est pas une succession d'instants identiques (temps spatialisé), mais une réalité hétérogène et créatrice. Elle est hétérogène : les moments de la durée ne sont pas identiques mais qualitativement différents. Elle est créatrice : chaque moment apporte du nouveau, de l'imprévisible. Cette conception de la durée distingue Bergson des philosophes qui spatialisent le temps (Kant, Descartes). Pour Bergson, la durée est la réalité même de la vie intérieure et de la vie en général."
    },
    { 
        question: "Question n°9 : Qu'est-ce qui est nécessaire selon Bergson ?",
        answers: [
            "une philosophie intuitive", 
            "une philosophie intellectuelle", 
            "une philosophie sceptique"
        ], 
        correct: 1,
        explanation: "Bergson affirme : « une philosophie intuitive est nécessaire. » Cette conception de la philosophie intuitive est au cœur de la philosophie de Bergson : puisque l'intelligence ne peut pas saisir la durée, il faut une autre méthode de connaissance, qui est l'intuition. La philosophie intuitive consiste à coïncider avec le mouvement même de la réalité, à se placer en elle, non à l'observer du dehors. Cette conception de la philosophie intuitive distingue Bergson des philosophes intellectualistes (Descartes, Kant), pour qui la philosophie est une affaire de concepts et de raisonnements. Pour Bergson, la philosophie est une expérience vécue, une sympathie avec la vie."
    },
    { 
        question: "Question n°10 : Avec quoi faut-il coïncider selon Bergson ?",
        answers: [
            "avec le mouvement même de la réalité", 
            "avec les concepts", 
            "avec les instants"
        ], 
        correct: 1,
        explanation: "Bergson affirme : « il faut coïncider avec le mouvement même de la réalité. » Cette conception de la philosophie intuitive est au cœur de la philosophie de Bergson : la philosophie intuitive consiste à coïncider avec le mouvement même de la réalité, à se placer en elle, non à l'observer du dehors. Cette coïncidence est une expérience vécue, une sympathie avec la vie. Elle n'est pas une connaissance conceptuelle, mais une intuition immédiate. Cette conception de la philosophie intuitive distingue Bergson des philosophes intellectualistes (Descartes, Kant), pour qui la philosophie est une affaire de concepts et de raisonnements. Pour Bergson, la philosophie est une expérience vécue."
    },
    { 
        question: "Question n°11 : Qu'est-ce que l'intuition selon Bergson ?",
        answers: [
            "l'instinct devenu désintéressé", 
            "l'intelligence supérieure", 
            "une illusion"
        ], 
        correct: 1,
        explanation: "Bergson affirme : « l'intuition, qui est l'instinct devenu désintéressé. » Cette conception de l'intuition est au cœur de la philosophie de Bergson : l'intuition n'est pas une faculté mystérieuse, mais l'instinct devenu désintéressé. L'instinct est une faculté adaptée à la vie, mais il est intéressé (il vise l'action utile). L'intuition est l'instinct qui s'est détaché de l'action utilitaire pour devenir une connaissance désintéressée. Cette conception de l'intuition distingue Bergson des philosophes qui font de l'intuition une faculté inférieure (Descartes). Pour Bergson, l'intuition est la faculté de connaître la durée, la vie, la réalité mouvante. Elle est la méthode de la philosophie."
    },
    { 
        question: "Question n°12 : Que doit être la métaphysique selon Bergson ?",
        answers: [
            "l'expérience vécue de la durée", 
            "une construction conceptuelle", 
            "une science exacte"
        ], 
        correct: 1,
        explanation: "Bergson affirme : « la métaphysique doit être l'expérience vécue de la durée. » Cette conception de la métaphysique est au cœur de la philosophie de Bergson : la métaphysique n'est pas une construction conceptuelle (comme chez Descartes, Kant), mais une expérience vécue de la durée. Elle consiste à coïncider avec le mouvement même de la réalité, à saisir la durée dans son mouvement créateur. Cette conception de la métaphysique comme expérience vécue distingue Bergson des philosophes intellectualistes. Pour Bergson, la métaphysique est une sympathie avec la vie, non une connaissance conceptuelle. Elle est la méthode de la philosophie intuitive."
    },
    { 
        question: "Question n°13 : Que faut-il pour comprendre la vie selon Bergson ?",
        answers: [
            "un effort pour se placer en elle", 
            "un effort pour l'observer du dehors", 
            "un effort pour la conceptualiser"
        ], 
        correct: 1,
        explanation: "Bergson affirme : « comprendre la vie exige un effort pour se placer en elle, et non pour l'observer du dehors. » Cette conception de la connaissance de la vie est au cœur de la philosophie de Bergson : pour comprendre la vie, il ne suffit pas de l'observer du dehors (méthode de l'intelligence), il faut se placer en elle, coïncider avec son mouvement, sympathiser avec elle. Cette méthode intuitive est la seule qui puisse saisir la durée, la vie, la réalité mouvante. Cette conception distingue Bergson des philosophes intellectualistes, pour qui la connaissance est toujours une observation du dehors. Pour Bergson, la connaissance de la vie est une expérience vécue, une intuition."
    },
    { 
        question: "Question n°14 : Quelle est la méthode de Bergson dans ce passage ?",
        answers: [
            "l'intuition", 
            "la déduction", 
            "l'induction"
        ], 
        correct: 1,
        explanation: "Dans ce passage, Bergson utilise sa méthode caractéristique : l'intuition. L'intuition n'est pas une faculté mystérieuse, mais l'instinct devenu désintéressé, c'est-à-dire une sympathie avec la vie qui permet de coïncider avec le mouvement même de la réalité. Cette méthode intuitive est au cœur de la philosophie de Bergson : elle consiste à se placer en deçà des concepts et des analyses de l'intelligence, à saisir la durée dans son mouvement créateur. Cette méthode distingue Bergson des philosophes intellectualistes (Descartes, Kant), pour qui la philosophie est une affaire de concepts et de raisonnements. Pour Bergson, la philosophie est une expérience vécue."
    },
    { 
        question: "Question n°15 : Quel est le rapport entre intelligence et instinct chez Bergson ?",
        answers: [
            "ils sont identiques", 
            "ils sont deux directions divergentes de l'évolution", 
            "ils sont complémentaires"
        ], 
        correct: 2,
        explanation: "Chez Bergson, l'intelligence et l'instinct sont deux directions divergentes de l'évolution. Cette conception des facultés est au cœur de la philosophie de Bergson : l'intelligence et l'instinct ne sont pas deux facultés de même nature, mais deux directions divergentes de l'évolution de la vie. L'intelligence est tournée vers la matière inerte ; l'instinct est en affinité avec la vie. Cette conception évolutionniste des facultés distingue Bergson des philosophes qui font de l'intelligence la faculté suprême (Descartes, Kant). Pour Bergson, l'intelligence est une faculté pratique, adaptée à l'action sur la matière, non à la connaissance de la vie."
    },
    { 
        question: "Question n°16 : Quelle est la conception de la vie chez Bergson ?",
        answers: [
            "la vie est mécanique", 
            "la vie est création et durée", 
            "la vie est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Bergson, la vie est création et durée. Cette conception de la vie est au cœur de la philosophie de Bergson : la vie n'est pas un mécanisme (comme le pensent les mécanistes), ni une finalité préétablie (comme le pensent les finalistes), mais une création continue, une durée créatrice. La vie est un élan vital qui se diversifie et se crée en se diversifiant. Cette conception créatrice de la vie distingue Bergson des philosophies mécanistes et finalistes. Pour Bergson, la vie est imprévisible, créatrice, elle apporte du nouveau à chaque instant. C'est pourquoi elle ne peut être comprise que par l'intuition, non par l'intelligence."
    },
    { 
        question: "Question n°17 : Quel est le rapport entre la durée et l'intelligence chez Bergson ?",
        answers: [
            "l'intelligence saisit la durée", 
            "l'intelligence ne saisit pas la durée", 
            "la durée est indépendante de l'intelligence"
        ], 
        correct: 2,
        explanation: "Chez Bergson, l'intelligence ne saisit pas la durée. Cette conception critique de l'intelligence est au cœur de la philosophie de Bergson : l'intelligence, étant tournée vers la matière inerte, applique à ce qui est mouvant des formes fixes. Elle analyse le devenir mais ne le saisit pas dans sa durée réelle. Elle découpe le temps en instants identiques, tandis que la durée est hétérogène et créatrice. C'est pourquoi une philosophie intuitive est nécessaire. Cette conception distingue Bergson des philosophes intellectualistes, pour qui l'intelligence est la faculté de connaître la vérité. Pour Bergson, l'intelligence est adaptée à la matière, non à la vie."
    },
    { 
        question: "Question n°18 : Quelle est la conception du temps chez Bergson ?",
        answers: [
            "le temps est une succession d'instants identiques", 
            "le temps est hétérogène et créateur", 
            "le temps est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Bergson, le temps est hétérogène et créateur. Cette conception du temps est au cœur de la philosophie de Bergson : le temps n'est pas une succession d'instants identiques (temps spatialisé), mais une réalité hétérogène et créatrice (durée). La durée est hétérogène : les moments ne sont pas identiques mais qualitativement différents. Elle est créatrice : chaque moment apporte du nouveau, de l'imprévisible. Cette conception de la durée distingue Bergson des philosophes qui spatialisent le temps (Kant, Descartes). Pour Bergson, la durée est la réalité même de la vie intérieure et de la vie en général."
    },
    { 
      question: "Question n°19 : Quel est le rapport entre l'intuition et l'instinct chez Bergson ?",
      answers: [
        "l'intuition est l'instinct devenu désintéressé", 
        "l'intuition s'oppose à l'instinct", 
        "l'intuition est identique à l'instinct"
      ], 
      correct: 1,
      explanation: "Chez Bergson, l'intuition est l'instinct devenu désintéressé. Cette conception de l'intuition est au cœur de la philosophie de Bergson : l'intuition n'est pas une faculté mystérieuse, mais l'instinct qui s'est détaché de l'action utilitaire pour devenir une connaissance désintéressée. L'instinct est une faculté adaptée à la vie, mais il est intéressé (il vise l'action utile). L'intuition est l'instinct qui s'est élevé au niveau de la connaissance pure. Cette conception de l'intuition distingue Bergson des philosophes qui font de l'intuition une faculté inférieure (Descartes). Pour Bergson, l'intuition est la faculté de connaître la durée, la vie, la réalité mouvante."
    },
    { 
      question: "Question n°20 : Quelle est la conception de la métaphysique chez Bergson ?",
      answers: [
        "une construction conceptuelle", 
        "une expérience vécue de la durée", 
        "une science exacte"
      ], 
      correct: 2,
      explanation: "Pour Bergson, la métaphysique est une expérience vécue de la durée. Cette conception de la métaphysique est au cœur de la philosophie de Bergson : la métaphysique n'est pas une construction conceptuelle (comme chez Descartes, Kant), mais une expérience vécue de la durée. Elle consiste à coïncider avec le mouvement même de la réalité, à saisir la durée dans son mouvement créateur. Cette conception de la métaphysique comme expérience vécue distingue Bergson des philosophes intellectualistes. Pour Bergson, la métaphysique est une sympathie avec la vie, non une connaissance conceptuelle. Elle est la méthode de la philosophie intuitive."
    },
    { 
      question: "Question n°21 : Quel est le rapport entre l'intelligence et la matière chez Bergson ?",
      answers: [
        "l'intelligence est adaptée à la matière", 
        "l'intelligence s'oppose à la matière", 
        "l'intelligence est indépendante de la matière"
      ], 
      correct: 1,
      explanation: "Chez Bergson, l'intelligence est adaptée à la matière. Cette conception de l'intelligence est au cœur de la philosophie de Bergson : l'intelligence est tournée vers la matière inerte, elle est faite pour agir sur elle, pour la découper en parties manipulables. Elle applique à ce qui est mouvant des formes fixes ; elle analyse le devenir mais ne le saisit pas dans sa durée réelle. Cette conception pragmatique de l'intelligence distingue Bergson des philosophes qui font de l'intelligence la faculté de connaître la vérité (Descartes, Kant). Pour Bergson, l'intelligence est adaptée à la matière, non à la vie."
    },
    { 
      question: "Question n°22 : Quelle est la conception de l'instinct chez Bergson ?",
      answers: [
        "l'instinct est une faculté inférieure", 
        "l'instinct est en affinité avec la vie", 
        "l'instinct est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Bergson, l'instinct est en affinité avec la vie. Cette conception de l'instinct est au cœur de la philosophie de Bergson : l'instinct est une faculté adaptée à la vie, non à la matière inerte. Il est une sorte de sympathie qui permet à l'être vivant de coïncider avec le mouvement de la vie. Cette conception de l'instinct distingue Bergson des philosophes qui font de l'instinct une faculté inférieure (Descartes). Pour Bergson, l'instinct est une forme de connaissance, mais une connaissance immédiate et non intellectuelle. C'est cette affinité avec la vie que Bergson retrouvera dans l'intuition."
    },
    { 
      question: "Question n°23 : Quel est le rapport entre l'intelligence et l'action chez Bergson ?",
      answers: [
        "l'intelligence est tournée vers l'action", 
        "l'intelligence est tournée vers la contemplation", 
        "l'intelligence est indépendante de l'action"
      ], 
      correct: 1,
      explanation: "Chez Bergson, l'intelligence est tournée vers l'action. Cette conception pragmatique de l'intelligence est au cœur de la philosophie de Bergson : l'intelligence n'est pas une faculté de contemplation désintéressée, mais une faculté pratique, adaptée à l'action sur la matière inerte. Elle est faite pour fabriquer des outils, pour agir sur les choses, pour les découper en parties manipulables. Cette conception de l'intelligence comme faculté pratique distingue Bergson des philosophes qui font de l'intelligence la faculté de connaître la vérité (Descartes, Kant). Pour Bergson, l'intelligence est adaptée à l'action, non à la connaissance pure."
    },
    { 
      question: "Question n°24 : Quelle est la conception de la connaissance chez Bergson ?",
      answers: [
        "la connaissance est conceptuelle", 
        "il y a deux formes de connaissance : intellectuelle et intuitive", 
        "la connaissance est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Bergson, il y a deux formes de connaissance : intellectuelle et intuitive. Cette conception dualiste de la connaissance est au cœur de la philosophie de Bergson : la connaissance intellectuelle est le mode de connaissance de l'intelligence, adaptée à la matière inerte ; la connaissance intuitive est le mode de connaissance de l'intuition, adaptée à la vie et à la durée. Ces deux formes de connaissance ne s'opposent pas mais se complètent : l'intelligence est nécessaire pour l'action, l'intuition pour la philosophie. Cette conception distingue Bergson des philosophes intellectualistes (Descartes, Kant), pour qui la connaissance intellectuelle est la seule forme de connaissance valable."
    },
    { 
      question: "Question n°25 : Quel est le rapport entre la durée et la création chez Bergson ?",
      answers: [
        "la durée est création continue", 
        "la durée est répétition", 
        "la durée est une illusion"
      ], 
      correct: 1,
      explanation: "Chez Bergson, la durée est création continue. Cette conception de la durée est au cœur de la philosophie de Bergson : la durée n'est pas une succession d'instants identiques (temps spatialisé), mais une création continue, une nouveauté perpétuelle. Chaque moment de la durée apporte du nouveau, de l'imprévisible. Cette conception créatrice de la durée distingue Bergson des philosophes qui spatialisent le temps (Kant, Descartes). Pour Bergson, la durée est la réalité même de la vie intérieure et de la vie en général. Elle est création, non répétition."
    },
    { 
      question: "Question n°26 : Quelle est la conception de la philosophie chez Bergson ?",
      answers: [
        "une construction conceptuelle", 
        "une expérience vécue de la durée", 
        "une science exacte"
      ], 
      correct: 2,
      explanation: "Pour Bergson, la philosophie est une expérience vécue de la durée. Cette conception de la philosophie est au cœur de la philosophie de Bergson : la philosophie n'est pas une construction conceptuelle (comme chez Descartes, Kant), mais une expérience vécue de la durée. Elle consiste à coïncider avec le mouvement même de la réalité, à saisir la durée dans son mouvement créateur. Cette conception de la philosophie comme expérience vécue distingue Bergson des philosophes intellectualistes. Pour Bergson, la philosophie est une sympathie avec la vie, non une connaissance conceptuelle. Elle est la méthode de la philosophie intuitive."
    },
    { 
      question: "Question n°27 : Quel est le rapport entre l'intelligence et les concepts chez Bergson ?",
      answers: [
        "l'intelligence crée des concepts", 
        "l'intelligence refuse les concepts", 
        "l'intelligence est indépendante des concepts"
      ], 
      correct: 1,
      explanation: "Chez Bergson, l'intelligence crée des concepts. Cette conception de l'intelligence est au cœur de la philosophie de Bergson : l'intelligence, étant tournée vers la matière inerte, applique à ce qui est mouvant des formes fixes, c'est-à-dire des concepts. Elle découpe le réel en parties stables, elle l'analyse en éléments immuables. Cette conception critique de l'intelligence distingue Bergson des philosophes intellectualistes, pour qui les concepts sont les instruments de la connaissance vraie. Pour Bergson, les concepts sont adaptés à la matière, non à la vie. C'est pourquoi ils ne peuvent pas saisir la durée, qui est mouvante et créatrice."
    },
    { 
      question: "Question n°28 : Quelle est la conception de la réalité chez Bergson ?",
      answers: [
        "la réalité est statique", 
        "la réalité est mouvante et créatrice", 
        "la réalité est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Bergson, la réalité est mouvante et créatrice. Cette conception de la réalité est au cœur de la philosophie de Bergson : la réalité n'est pas un ensemble de choses stables (conception statique), mais un mouvement continu, une durée créatrice. La réalité est changement, devenir, création. Cette conception dynamique de la réalité distingue Bergson des philosophes statiques (Platon, Descartes). Pour Bergson, la réalité ne peut être saisie que par l'intuition, qui coïncide avec son mouvement, non par l'intelligence, qui applique à ce qui est mouvant des formes fixes."
    },
    { 
      question: "Question n°29 : Quel est le rapport entre l'intelligence et la science chez Bergson ?",
      answers: [
        "la science est fondée sur l'intelligence", 
        "la science est fondée sur l'intuition", 
        "la science est une illusion"
      ], 
      correct: 1,
      explanation: "Chez Bergson, la science est fondée sur l'intelligence. Cette conception de la science est au cœur de la philosophie de Bergson : la science est le mode de connaissance de l'intelligence, adaptée à la matière inerte. Elle découpe le réel en parties stables, elle l'analyse en éléments immuables. Cette conception pragmatique de la science distingue Bergson des philosophes qui font de la science la connaissance vraie du réel (positivisme). Pour Bergson, la science est adaptée à la matière, non à la vie. C'est pourquoi une philosophie intuitive est nécessaire pour comprendre la vie et la durée. La science et la philosophie sont deux modes de connaissance complémentaires."
    },
    { 
      question: "Question n°30 : Quelle est la conception de l'évolution chez Bergson ?",
      answers: [
        "l'évolution est mécanique", 
        "l'évolution est créatrice", 
        "l'évolution est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Bergson, l'évolution est créatrice. Cette conception de l'évolution est au cœur de la philosophie de Bergson : l'évolution n'est pas un mécanisme (comme le pensent les darwiniens), ni une finalité préétablie (comme le pensent les finalistes), mais une création continue, un élan vital qui se diversifie et se crée en se diversifiant. Cette conception créatrice de l'évolution distingue Bergson des philosophies mécanistes et finalistes. Pour Bergson, l'évolution est imprévisible, créatrice, elle apporte du nouveau à chaque instant. C'est pourquoi elle ne peut être comprise que par l'intuition, non par l'intelligence."
    },
    { 
      question: "Question n°31 : Quel est le rapport entre l'intuition et la durée chez Bergson ?",
      answers: [
        "l'intuition saisit la durée", 
        "l'intuition ne saisit pas la durée", 
        "l'intuition est indépendante de la durée"
      ], 
      correct: 1,
      explanation: "Chez Bergson, l'intuition saisit la durée. Cette conception de l'intuition est au cœur de la philosophie de Bergson : l'intuition est la faculté de connaître la durée, la vie, la réalité mouvante. Elle coïncide avec le mouvement même de la réalité, elle sympathise avec la vie. Cette conception de l'intuition distingue Bergson des philosophes intellectualistes, pour qui l'intelligence est la faculté de connaître la vérité (Descartes, Kant). Pour Bergson, l'intuition est la méthode de la philosophie, la seule qui puisse saisir la durée dans son mouvement créateur."
    },
    { 
      question: "Question n°32 : Quelle est la conception de l'élan vital chez Bergson ?",
      answers: [
        "une force créatrice qui traverse la matière", 
        "une force mécanique", 
        "une illusion"
      ], 
      correct: 1,
      explanation: "Pour Bergson, l'élan vital est une force créatrice qui traverse la matière. Cette conception de l'élan vital est au cœur de la philosophie de Bergson : l'élan vital est la force qui anime l'évolution, qui pousse la vie à se diversifier et à se créer. Il n'est pas une force mécanique (comme les forces physiques), mais une force créatrice, qui apporte du nouveau à chaque instant. Cette conception de l'élan vital distingue Bergson des philosophies mécanistes et finalistes. Pour Bergson, la vie est création, non répétition. C'est pourquoi elle ne peut être comprise que par l'intuition, non par l'intelligence."
    },
    { 
      question: "Question n°33 : Quel est le rapport entre l'intelligence et la vie chez Bergson ?",
      answers: [
        "l'intelligence comprend la vie", 
        "l'intelligence ne comprend pas la vie", 
        "l'intelligence est indifférente à la vie"
      ], 
      correct: 2,
      explanation: "Chez Bergson, l'intelligence ne comprend pas la vie. Cette conception critique de l'intelligence est au cœur de la philosophie de Bergson : l'intelligence, étant tournée vers la matière inerte, est incapable de comprendre la vie. Elle applique à ce qui est mouvant des formes fixes ; elle analyse le devenir mais ne le saisit pas dans sa durée réelle. C'est pourquoi une philosophie intuitive est nécessaire. Cette conception distingue Bergson des philosophes intellectualistes, pour qui l'intelligence est la faculté de connaître la vérité (Descartes, Kant). Pour Bergson, l'intelligence est adaptée à la matière, non à la vie."
    },
    { 
      question: "Question n°34 : Quelle est la conception de la conscience chez Bergson ?",
      answers: [
        "la conscience est une chose", 
        "la conscience est durée et mémoire", 
        "la conscience est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Bergson, la conscience est durée et mémoire. Cette conception de la conscience est au cœur de la philosophie de Bergson : la conscience n'est pas une chose (comme chez Descartes), mais une durée, c'est-à-dire un flux continu de vécus, et une mémoire, c'est-à-dire la conservation du passé dans le présent. Cette conception de la conscience comme durée et mémoire distingue Bergson des philosophes substantialistes (Descartes) et des philosophes associationnistes (Hume). Pour Bergson, la conscience est la réalité même de la vie intérieure, qui ne peut être saisie que par l'intuition, non par l'intelligence."
    },
    { 
      question: "Question n°35 : Quel est le rapport entre l'intelligence et la matière chez Bergson ?",
      answers: [
        "l'intelligence est tournée vers la matière", 
        "l'intelligence est tournée vers l'esprit", 
        "l'intelligence est indifférente à la matière"
      ], 
      correct: 1,
      explanation: "Chez Bergson, l'intelligence est tournée vers la matière. Cette conception de l'intelligence est au cœur de la philosophie de Bergson : l'intelligence est tournée vers la matière inerte, elle est faite pour agir sur elle, pour la découper en parties manipulables. Elle applique à ce qui est mouvant des formes fixes ; elle analyse le devenir mais ne le saisit pas dans sa durée réelle. Cette conception pragmatique de l'intelligence distingue Bergson des philosophes qui font de l'intelligence la faculté de connaître la vérité (Descartes, Kant). Pour Bergson, l'intelligence est adaptée à la matière, non à la vie."
    },
    { 
      question: "Question n°36 : Quelle est la conception de la philosophie intuitive chez Bergson ?",
      answers: [
        "une méthode de connaissance qui coïncide avec la réalité", 
        "une méthode de connaissance qui analyse la réalité", 
        "une méthode de connaissance qui conceptualise la réalité"
      ], 
      correct: 1,
      explanation: "Pour Bergson, la philosophie intuitive est une méthode de connaissance qui coïncide avec la réalité. Cette conception de la philosophie intuitive est au cœur de la philosophie de Bergson : la philosophie intuitive ne consiste pas à analyser la réalité (méthode de l'intelligence), ni à la conceptualiser (méthode des philosophes intellectualistes), mais à coïncider avec elle, à se placer en elle, à sympathiser avec son mouvement. Cette méthode est celle de l'intuition, qui est l'instinct devenu désintéressé. Cette conception distingue Bergson des philosophes intellectualistes (Descartes, Kant), pour qui la philosophie est une affaire de concepts et de raisonnements. Pour Bergson, la philosophie est une expérience vécue."
    },
    { 
      question: "Question n°37 : Quel est le rapport entre la durée et la vie chez Bergson ?",
      answers: [
        "la durée est la réalité de la vie", 
        "la durée est indépendante de la vie", 
        "la durée s'oppose à la vie"
      ], 
      correct: 1,
      explanation: "Chez Bergson, la durée est la réalité de la vie. Cette conception de la durée est au cœur de la philosophie de Bergson : la durée n'est pas seulement une réalité psychologique (la vie intérieure), mais la réalité même de la vie en général. La vie est durée, c'est-à-dire création continue, nouveauté perpétuelle. Cette conception de la durée comme réalité de la vie distingue Bergson des philosophes qui réduisent la durée à la conscience (Kant) ou qui la nient (positivisme). Pour Bergson, la durée est la trame de la réalité, qui ne peut être saisie que par l'intuition."
    },
    { 
      question: "Question n°38 : Quelle est la conception de l'instinct chez Bergson par rapport à l'intelligence ?",
      answers: [
        "l'instinct est supérieur à l'intelligence", 
        "l'instinct est inférieur à l'intelligence", 
        "l'instinct est complémentaire de l'intelligence"
      ], 
      correct: 3,
      explanation: "Pour Bergson, l'instinct est complémentaire de l'intelligence. Cette conception de l'instinct est au cœur de la philosophie de Bergson : l'instinct et l'intelligence sont deux directions divergentes de l'évolution, mais ils sont complémentaires. L'intelligence est adaptée à la matière inerte ; l'instinct est en affinité avec la vie. L'intelligence est nécessaire pour l'action ; l'instinct est nécessaire pour la compréhension de la vie. Cette conception de la complémentarité de l'instinct et de l'intelligence distingue Bergson des philosophes qui hiérarchisent les facultés (Descartes). Pour Bergson, l'intuition est l'instinct devenu désintéressé, qui permet de connaître la vie."
    },
    { 
      question: "Question n°39 : Quel est le rapport entre l'intelligence et la vérité chez Bergson ?",
      answers: [
        "l'intelligence saisit la vérité", 
        "l'intelligence ne saisit pas la vérité de la vie", 
        "l'intelligence est indifférente à la vérité"
      ], 
      correct: 2,
      explanation: "Chez Bergson, l'intelligence ne saisit pas la vérité de la vie. Cette conception critique de l'intelligence est au cœur de la philosophie de Bergson : l'intelligence, étant tournée vers la matière inerte, est incapable de saisir la vérité de la vie. Elle applique à ce qui est mouvant des formes fixes ; elle analyse le devenir mais ne le saisit pas dans sa durée réelle. C'est pourquoi une philosophie intuitive est nécessaire. Cette conception distingue Bergson des philosophes intellectualistes, pour qui l'intelligence est la faculté de connaître la vérité (Descartes, Kant). Pour Bergson, l'intelligence est adaptée à la matière, non à la vie."
    },
    { 
      question: "Question n°40 : Quelle est la conception de la réalité chez Bergson par rapport à la durée ?",
      answers: [
        "la réalité est durée", 
        "la réalité est statique", 
        "la réalité est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Bergson, la réalité est durée. Cette conception de la réalité est au cœur de la philosophie de Bergson : la réalité n'est pas un ensemble de choses stables (conception statique), mais un mouvement continu, une durée créatrice. La réalité est changement, devenir, création. Cette conception dynamique de la réalité distingue Bergson des philosophes statiques (Platon, Descartes). Pour Bergson, la réalité ne peut être saisie que par l'intuition, qui coïncide avec son mouvement, non par l'intelligence, qui applique à ce qui est mouvant des formes fixes. Cette conception de la réalité comme durée est la thèse centrale de la philosophie de Bergson."
    },
    { 
      question: "Question n°41 : Quel est le rapport entre l'intelligence et la connaissance chez Bergson ?",
      answers: [
        "l'intelligence est la seule forme de connaissance", 
        "l'intelligence est une forme de connaissance parmi d'autres", 
        "l'intelligence n'est pas une forme de connaissance"
      ], 
      correct: 2,
      explanation: "Chez Bergson, l'intelligence est une forme de connaissance parmi d'autres. Cette conception pluraliste de la connaissance est au cœur de la philosophie de Bergson : la connaissance intellectuelle est le mode de connaissance de l'intelligence, adaptée à la matière inerte ; la connaissance intuitive est le mode de connaissance de l'intuition, adaptée à la vie et à la durée. Ces deux formes de connaissance ne s'opposent pas mais se complètent : l'intelligence est nécessaire pour l'action, l'intuition pour la philosophie. Cette conception distingue Bergson des philosophes intellectualistes (Descartes, Kant), pour qui la connaissance intellectuelle est la seule forme de connaissance valable."
    },
    { 
      question: "Question n°42 : Quelle est la conception de la métaphysique chez Bergson par rapport à la science ?",
      answers: [
        "la métaphysique est supérieure à la science", 
        "la métaphysique est complémentaire de la science", 
        "la métaphysique s'oppose à la science"
      ], 
      correct: 2,
      explanation: "Pour Bergson, la métaphysique est complémentaire de la science. Cette conception de la métaphysique est au cœur de la philosophie de Bergson : la métaphysique n'est pas une science supérieure, ni une science concurrente, mais une forme de connaissance complémentaire. La science est le mode de connaissance de l'intelligence, adaptée à la matière inerte ; la métaphysique est le mode de connaissance de l'intuition, adaptée à la vie et à la durée. Ces deux formes de connaissance ne s'opposent pas mais se complètent : la science est nécessaire pour l'action, la métaphysique pour la compréhension de la vie. Cette conception distingue Bergson des philosophes positivistes, pour qui la science est la seule forme de connaissance valable."
    },
    { 
      question: "Question n°43 : Quel est le rapport entre l'intuition et la sympathie chez Bergson ?",
      answers: [
        "l'intuition est une sympathie", 
        "l'intuition s'oppose à la sympathie", 
        "l'intuition est indépendante de la sympathie"
      ], 
      correct: 1,
      explanation: "Chez Bergson, l'intuition est une sympathie. Cette conception de l'intuition est au cœur de la philosophie de Bergson : l'intuition est une sympathie par laquelle on se place à l'intérieur d'un objet pour coïncider avec ce qu'il a d'unique et d'inexprimable. Elle n'est pas une connaissance conceptuelle, mais une expérience vécue, une communion avec la réalité. Cette conception de l'intuition comme sympathie distingue Bergson des philosophes intellectualistes, pour qui la connaissance est une observation du dehors. Pour Bergson, la connaissance de la vie est une sympathie, une intuition."
    },
    { 
      question: "Question n°44 : Quelle est la conception de la vie chez Bergson par rapport à la matière ?",
      answers: [
        "la vie est indépendante de la matière", 
        "la vie est un élan qui traverse la matière", 
        "la vie s'oppose à la matière"
      ], 
      correct: 2,
      explanation: "Pour Bergson, la vie est un élan qui traverse la matière. Cette conception de la vie est au cœur de la philosophie de Bergson : la vie n'est pas indépendante de la matière (comme chez Platon), ni opposée à la matière (comme chez les dualistes), mais un élan vital qui traverse la matière et la façonne. La vie est une force créatrice qui utilise la matière pour se diversifier et se créer. Cette conception de la vie comme élan vital distingue Bergson des philosophies mécanistes et finalistes. Pour Bergson, la vie est création, non répétition. C'est pourquoi elle ne peut être comprise que par l'intuition, non par l'intelligence."
    },
    { 
      question: "Question n°45 : Quel est le rapport entre l'intelligence et la pratique chez Bergson ?",
      answers: [
        "l'intelligence est tournée vers la pratique", 
        "l'intelligence est tournée vers la théorie", 
        "l'intelligence est indépendante de la pratique"
      ], 
      correct: 1,
      explanation: "Chez Bergson, l'intelligence est tournée vers la pratique. Cette conception pragmatique de l'intelligence est au cœur de la philosophie de Bergson : l'intelligence n'est pas une faculté de contemplation désintéressée, mais une faculté pratique, adaptée à l'action sur la matière inerte. Elle est faite pour fabriquer des outils, pour agir sur les choses, pour les découper en parties manipulables. Cette conception de l'intelligence comme faculté pratique distingue Bergson des philosophes qui font de l'intelligence la faculté de connaître la vérité (Descartes, Kant). Pour Bergson, l'intelligence est adaptée à l'action, non à la connaissance pure."
    },
    { 
      question: "Question n°46 : Quelle est la conception de l'intuition chez Bergson par rapport à la vie ?",
      answers: [
        "l'intuition est en affinité avec la vie", 
        "l'intuition s'oppose à la vie", 
        "l'intuition est indifférente à la vie"
      ], 
      correct: 1,
      explanation: "Pour Bergson, l'intuition est en affinité avec la vie. Cette conception de l'intuition est au cœur de la philosophie de Bergson : l'intuition est l'instinct devenu désintéressé, c'est-à-dire une faculté qui est en affinité avec la vie. Elle permet de coïncider avec le mouvement de la vie, de sympathiser avec elle, de la comprendre de l'intérieur. Cette conception de l'intuition distingue Bergson des philosophes intellectualistes, pour qui la connaissance est une observation du dehors (Descartes, Kant). Pour Bergson, la connaissance de la vie est une intuition, une sympathie."
    },
    { 
      question: "Question n°47 : Quel est le rapport entre l'intelligence et la durée chez Bergson ?",
      answers: [
        "l'intelligence saisit la durée", 
        "l'intelligence ne saisit pas la durée", 
        "l'intelligence est indépendante de la durée"
      ], 
      correct: 2,
      explanation: "Chez Bergson, l'intelligence ne saisit pas la durée. Cette conception critique de l'intelligence est au cœur de la philosophie de Bergson : l'intelligence, étant tournée vers la matière inerte, applique à ce qui est mouvant des formes fixes. Elle analyse le devenir mais ne le saisit pas dans sa durée réelle. Elle découpe le temps en instants identiques, tandis que la durée est hétérogène et créatrice. C'est pourquoi une philosophie intuitive est nécessaire. Cette conception distingue Bergson des philosophes intellectualistes, pour qui l'intelligence est la faculté de connaître la vérité. Pour Bergson, l'intelligence est adaptée à la matière, non à la durée."
    },
    { 
      question: "Question n°48 : Quelle est la conception de la philosophie chez Bergson par rapport à la science ?",
      answers: [
        "la philosophie est complémentaire de la science", 
        "la philosophie s'oppose à la science", 
        "la philosophie est inférieure à la science"
      ], 
      correct: 1,
      explanation: "Pour Bergson, la philosophie est complémentaire de la science. Cette conception de la philosophie est au cœur de la philosophie de Bergson : la philosophie n'est pas une science supérieure, ni une science concurrente, mais une forme de connaissance complémentaire. La science est le mode de connaissance de l'intelligence, adaptée à la matière inerte ; la philosophie est le mode de connaissance de l'intuition, adaptée à la vie et à la durée. Ces deux formes de connaissance ne s'opposent pas mais se complètent : la science est nécessaire pour l'action, la philosophie pour la compréhension de la vie. Cette conception distingue Bergson des philosophes positivistes, pour qui la science est la seule forme de connaissance valable."
    },
    { 
      question: "Question n°49 : Quel est le rapport entre l'intuition et la réalité chez Bergson ?",
      answers: [
        "l'intuition coïncide avec la réalité", 
        "l'intuition s'oppose à la réalité", 
        "l'intuition est indépendante de la réalité"
      ], 
      correct: 1,
      explanation: "Chez Bergson, l'intuition coïncide avec la réalité. Cette conception de l'intuition est au cœur de la philosophie de Bergson : l'intuition est une sympathie par laquelle on se place à l'intérieur d'un objet pour coïncider avec ce qu'il a d'unique et d'inexprimable. Elle n'est pas une connaissance conceptuelle, mais une expérience vécue, une communion avec la réalité. Cette conception de l'intuition comme coïncidence avec la réalité distingue Bergson des philosophes intellectualistes, pour qui la connaissance est une observation du dehors (Descartes, Kant). Pour Bergson, la connaissance de la vie est une intuition, une sympathie."
    },
    { 
      question: "Question n°50 : En quoi ce texte de Bergson est-il représentatif de sa philosophie ?",
      answers: [
        "il montre la distinction entre intelligence et intuition", 
        "il montre la critique de l'intelligence et l'éloge de l'intuition", 
        "les deux réponses sont correctes"
      ], 
      correct: 3,
      explanation: "Ce texte de L'évolution créatrice est représentatif de la philosophie de Bergson à plusieurs égards. D'abord, il montre la distinction entre intelligence et intuition, qui est au cœur de la philosophie de Bergson. Ensuite, il montre la critique de l'intelligence, qui ne peut pas comprendre la vie, et l'éloge de l'intuition, qui est l'instinct devenu désintéressé. Enfin, il montre la conception de la durée comme hétérogène et créatrice, et la conception de la métaphysique comme expérience vécue de la durée. Ce texte condense ainsi les thèmes majeurs de la philosophie de Bergson : intelligence vs intuition, critique de l'intellectualisme, éloge de la durée, philosophie intuitive, élan vital."
    }
];