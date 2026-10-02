// ============================================
// DONNÉES GÉNÉRALES
// ============================================

const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Sartre";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] L'homme est condamné à être libre. [2] Condamné, **parce que** il ne s'est pas créé lui-même ; et **pourtant** libre, **parce que**, une fois jeté dans le monde, il est responsable de tout ce qu'il fait. [3] **Ainsi**, l'existentialiste affirme que l'existence précède l'essence. [4] **C'est-à-dire** que l'homme existe **d'abord**, se rencontre, surgit dans le monde, et qu'il se définit après. [5] **En effet**, il n'y a pas de nature humaine préétablie. [6] **Par conséquent**, l'homme est ce qu'il se fait. [7] **Mais** cela ne signifie pas qu'il est n'importe quoi. [8] **Car**, en se choisissant, il choisit en même temps tous les hommes. [9] **Donc**, notre responsabilité est beaucoup plus grande que nous ne pourrions le supposer, **puisque** elle engage l'humanité entière. [10] **Aussi** l'angoisse est-elle le sentiment même de cette responsabilité totale. [11] En résumé, l'homme est un projet qui se vit subjectivement. »",
	source: "Jean-Paul SARTRE, <em>L'existentialisme est un humanisme</em>, Éditions Nagel, 1946, pp.36-37"
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    { 
        question: "Question n°1 : À quoi l'homme est-il condamné selon Sartre ?",
        answers: [
            "à être esclave", 
            "à être libre", 
            "à être malheureux"
        ], 
        correct: 2,
        explanation: "Sartre affirme : « L'homme est condamné à être libre. » Cette formule célèbre est au cœur de l'existentialisme sartrien. Le terme « condamné » est paradoxal : il suggère que la liberté n'est pas un cadeau mais une charge, une obligation à laquelle nous ne pouvons pas échapper. L'homme n'a pas choisi d'être libre ; il est jeté dans le monde et contraint d'exercer sa liberté. Cette conception de la liberté comme condamnation distingue Sartre des conceptions optimistes de la liberté comme épanouissement. Pour Sartre, la liberté est à la fois la dignité de l'homme et son fardeau, car elle implique une responsabilité totale."
    },
    { 
        question: "Question n°2 : Pourquoi l'homme est-il condamné selon Sartre ?",
        answers: [
            "parce qu'il ne s'est pas créé lui-même", 
            "parce qu'il est pécheur", 
            "parce qu'il est ignorant"
        ], 
        correct: 1,
        explanation: "Sartre affirme : « Condamné, parce qu'il ne s'est pas créé lui-même. » Cette précision explique le sens du mot « condamné » : l'homme n'a pas choisi d'exister, il se trouve jeté dans le monde sans l'avoir voulu. Il n'a pas choisi sa liberté, mais il est contraint de l'exercer. Cette conception de la facticité (le fait d'être jeté dans le monde) est au cœur de l'existentialisme sartrien. L'homme est à la fois libre (il se choisit) et non libre (il n'a pas choisi d'être libre). Cette tension entre liberté et facticité est constitutive de la condition humaine selon Sartre."
    },
    { 
        question: "Question n°3 : Pourquoi l'homme est-il libre selon Sartre ?",
        answers: [
            "parce qu'il est responsable de tout ce qu'il fait", 
            "parce qu'il a une âme immortelle", 
            "parce qu'il est doué de raison"
        ], 
        correct: 1,
        explanation: "Sartre affirme : « et pourtant libre, parce que, une fois jeté dans le monde, il est responsable de tout ce qu'il fait. » Cette précision lie étroitement liberté et responsabilité : l'homme est libre parce qu'il est responsable. Cette conception de la liberté comme responsabilité est au cœur de l'existentialisme sartrien : être libre, c'est être responsable de ses actes, de sa vie, de son être même. L'homme ne peut pas échapper à cette responsabilité, car il ne peut pas ne pas choisir (même ne pas choisir est un choix). Cette conception radicale de la liberté et de la responsabilité distingue Sartre des conceptions déterministes, pour qui l'homme est déterminé par sa nature, son milieu ou son éducation."
    },
    { 
        question: "Question n°4 : Que signifie « l'existence précède l'essence » selon Sartre ?",
        answers: [
            "que l'homme existe d'abord et se définit après", 
            "que l'homme a une essence éternelle", 
            "que l'homme n'existe pas"
        ], 
        correct: 1,
        explanation: "Sartre affirme : « l'existentialiste affirme que l'existence précède l'essence. C'est-à-dire que l'homme existe d'abord, se rencontre, surgit dans le monde, et qu'il se définit après. » Cette formule est la thèse centrale de l'existentialisme sartrien. Contrairement aux objets fabriqués (comme un coupe-papier), dont l'essence précède l'existence (le concept précède la fabrication), l'homme n'a pas d'essence préétablie : il existe d'abord, puis se définit par ses choix. Cette conception de l'homme comme être sans essence prédéfinie fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies essentialistes (Platon, Aristote, chrétiennes)."
    },
    { 
        question: "Question n°5 : Qu'est-ce qui n'existe pas selon Sartre ?",
        answers: [
            "une nature humaine préétablie", 
            "la liberté", 
            "la responsabilité"
        ], 
        correct: 1,
        explanation: "Sartre affirme : « il n'y a pas de nature humaine préétablie. » Cette négation de la nature humaine est au cœur de l'existentialisme sartrien : l'homme n'a pas d'essence donnée à l'avance, il n'est pas déterminé par une nature (biologique, psychologique, divine). Il est ce qu'il se fait, par ses choix et ses actes. Cette conception de l'homme sans nature préétablie fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies essentialistes, pour qui l'homme a une nature fixe (Platon, Aristote, chrétiennes). Pour Sartre, l'homme est d'abord un projet, une possibilité, non une substance."
    },
    { 
        question: "Question n°6 : Que signifie « l'homme est ce qu'il se fait » ?",
        answers: [
            "que l'homme est déterminé par sa nature", 
            "que l'homme se définit par ses choix et ses actes", 
            "que l'homme est ce qu'il naît"
        ], 
        correct: 2,
        explanation: "Sartre affirme : « Par conséquent, l'homme est ce qu'il se fait. » Cette formule résume la conception existentialiste de l'homme : l'homme n'est pas ce qu'il naît (déterminisme biologique), ni ce qu'il a (déterminisme social), mais ce qu'il se fait par ses choix et ses actes. L'homme est responsable de son être : il se définit par sa praxis, par son projet, par son engagement. Cette conception de l'homme comme être qui se fait lui-même fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies déterministes, pour qui l'homme est déterminé par des facteurs extérieurs."
    },
    { 
        question: "Question n°7 : Que signifie « en se choisissant, il choisit tous les hommes » ?",
        answers: [
            "que chaque choix engage l'humanité entière", 
            "que chaque choix est indépendant des autres", 
            "que chaque choix est déterminé par la société"
        ], 
        correct: 1,
        explanation: "Sartre affirme : « en se choisissant, il choisit en même temps tous les hommes. » Cette conception de la responsabilité universelle est au cœur de l'existentialisme sartrien : quand je choisis, je ne choisis pas seulement pour moi, mais pour tous les hommes. En choisissant une manière d'être, je propose un modèle d'humanité, je dis que telle conduite est valable pour tous. Cette conception de la responsabilité universelle distingue Sartre des philosophies individualistes, pour qui mes choix ne concernent que moi. Pour Sartre, chaque choix engage l'humanité entière, ce qui produit l'angoisse."
    },
    { 
        question: "Question n°8 : Que produit la responsabilité totale selon Sartre ?",
        answers: [
            "la joie", 
            "l'angoisse", 
            "la sérénité"
        ], 
        correct: 2,
        explanation: "Sartre affirme : « Aussi l'angoisse est-elle le sentiment même de cette responsabilité totale. » Cette conception de l'angoisse est au cœur de l'existentialisme sartrien : l'angoisse n'est pas une émotion pathologique, mais le sentiment qui accompagne la conscience de notre responsabilité totale. L'homme est angoissé parce qu'il sait que ses choix engagent l'humanité entière, parce qu'il n'a pas d'excuse, parce qu'il est seul à décider. Cette conception de l'angoisse distingue Sartre des philosophies qui voient dans l'angoisse une maladie à guérir. Pour Sartre, l'angoisse est le sentiment même de la liberté et de la responsabilité."
    },
    { 
        question: "Question n°9 : Qu'est-ce que l'homme selon Sartre ?",
        answers: [
            "un projet qui se vit subjectivement", 
            "une substance pensante", 
            "un animal raisonnable"
        ], 
        correct: 1,
        explanation: "Sartre affirme : « En résumé, l'homme est un projet qui se vit subjectivement. » Cette définition de l'homme comme projet est au cœur de l'existentialisme sartrien : l'homme n'est pas une substance (contrairement à Descartes), ni un animal raisonnable (contrairement à Aristote), mais un projet, c'est-à-dire une projection vers l'avenir, un dépassement constant du donné. Ce projet se vit subjectivement : l'homme n'est pas un objet observable, mais une subjectivité qui se vit. Cette conception de l'homme comme projet fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies substantialistes."
    },
    { 
      question: "Question n°10 : Quelle est la méthode de Sartre dans ce passage ?",
      answers: [
        "l'analyse phénoménologique", 
        "la déduction logique", 
        "l'induction expérimentale"
      ], 
      correct: 1,
      explanation: "Dans ce passage, Sartre utilise une méthode phénoménologique : il décrit l'expérience vécue de la liberté et de la responsabilité. Il ne s'agit pas de déduire des principes (méthode déductive), ni d'observer des faits (méthode inductive), mais de décrire les structures de l'existence humaine telles qu'elles se donnent dans l'expérience. Cette méthode phénoménologique, héritée de Husserl et Heidegger, est au cœur de l'existentialisme sartrien. Elle consiste à décrire l'homme tel qu'il se vit, dans sa liberté, sa responsabilité, son angoisse. Elle distingue Sartre des philosophes qui construisent des systèmes abstraits."
    },
    { 
      question: "Question n°11 : Quel est le rapport entre liberté et responsabilité chez Sartre ?",
      answers: [
        "la liberté implique la responsabilité", 
        "la liberté supprime la responsabilité", 
        "la liberté est indépendante de la responsabilité"
      ], 
      correct: 1,
      explanation: "Chez Sartre, la liberté implique la responsabilité. Cette conception du rapport entre liberté et responsabilité est au cœur de l'existentialisme sartrien : être libre, c'est être responsable de ses actes, de sa vie, de son être même. L'homme est « responsable de tout ce qu'il fait ». Cette responsabilité est totale, car elle engage non seulement l'individu, mais l'humanité entière. Cette conception radicale de la responsabilité distingue Sartre des philosophies qui séparent la liberté de la responsabilité (libéralisme) ou qui nient la responsabilité (déterminisme). Pour Sartre, la liberté est inséparable de la responsabilité."
    },
    { 
      question: "Question n°12 : Quelle est la conception de l'existence chez Sartre ?",
      answers: [
        "l'existence est donnée", 
        "l'existence précède l'essence", 
        "l'existence est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Sartre, l'existence précède l'essence. Cette conception de l'existence est au cœur de l'existentialisme sartrien : l'homme existe d'abord, puis se définit par ses choix. Il n'a pas d'essence préétablie, de nature donnée à l'avance. Cette conception de l'existence comme antérieure à l'essence fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies essentialistes (Platon, Aristote, chrétiennes), pour qui l'essence précède l'existence. Pour Sartre, l'homme est un être sans essence prédéfinie, qui se fait lui-même par ses choix et ses actes."
    },
    { 
      question: "Question n°13 : Quel est le rapport entre l'homme et l'humanité chez Sartre ?",
      answers: [
        "l'homme est indépendant de l'humanité", 
        "l'homme engage l'humanité par ses choix", 
        "l'humanité détermine l'homme"
      ], 
      correct: 2,
      explanation: "Chez Sartre, l'homme engage l'humanité par ses choix. Cette conception de la responsabilité universelle est au cœur de l'existentialisme sartrien : quand je choisis, je ne choisis pas seulement pour moi, mais pour tous les hommes. En choisissant une manière d'être, je propose un modèle d'humanité, je dis que telle conduite est valable pour tous. Cette conception de la responsabilité universelle distingue Sartre des philosophies individualistes, pour qui mes choix ne concernent que moi. Pour Sartre, chaque choix engage l'humanité entière, ce qui produit l'angoisse."
    },
    { 
      question: "Question n°14 : Quelle est la conception de la liberté chez Sartre ?",
      answers: [
        "la liberté est un donné", 
        "la liberté est une condamnation", 
        "la liberté est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Sartre, la liberté est une condamnation. Cette conception paradoxale de la liberté est au cœur de l'existentialisme sartrien : l'homme n'a pas choisi d'être libre, il est condamné à l'être. Le terme « condamné » suggère que la liberté n'est pas un cadeau mais une charge, une obligation à laquelle nous ne pouvons pas échapper. Cette conception de la liberté comme condamnation distingue Sartre des conceptions optimistes de la liberté comme épanouissement. Pour Sartre, la liberté est à la fois la dignité de l'homme et son fardeau, car elle implique une responsabilité totale."
    },
    { 
      question: "Question n°15 : Quel est le rapport entre l'homme et son passé chez Sartre ?",
      answers: [
        "l'homme est déterminé par son passé", 
        "l'homme est libre par rapport à son passé", 
        "l'homme est indifférent à son passé"
      ], 
      correct: 2,
      explanation: "Chez Sartre, l'homme est libre par rapport à son passé. Cette conception de la liberté est au cœur de l'existentialisme sartrien : l'homme n'est pas déterminé par son passé, son milieu, son éducation. Il peut toujours se ressaisir, se réinventer, donner un nouveau sens à son passé par ses projets présents. Cette conception radicale de la liberté distingue Sartre des philosophies déterministes (psychanalyse, marxisme vulgaire), pour qui l'homme est déterminé par son passé. Pour Sartre, l'homme est libre, c'est-à-dire qu'il peut toujours échapper à son passé et se projeter vers l'avenir."
    },
    { 
      question: "Question n°16 : Quelle est la conception de l'homme chez Sartre ?",
      answers: [
        "l'homme est un être déterminé", 
        "l'homme est un être libre et responsable", 
        "l'homme est un être passif"
      ], 
      correct: 2,
      explanation: "Pour Sartre, l'homme est un être libre et responsable. Cette conception de l'homme est au cœur de l'existentialisme sartrien : l'homme n'est pas déterminé par sa nature, son milieu ou son passé ; il est libre, c'est-à-dire qu'il se définit par ses choix et ses actes. Cette liberté implique une responsabilité totale : l'homme est responsable de tout ce qu'il fait, de sa vie, de son être même. Cette conception radicale de la liberté et de la responsabilité distingue Sartre des philosophies déterministes et des philosophies qui limitent la responsabilité humaine. Pour Sartre, l'homme est l'unique responsable de son existence."
    },
    { 
      question: "Question n°17 : Quel est le rapport entre angoisse et liberté chez Sartre ?",
      answers: [
        "l'angoisse est le sentiment de la liberté", 
        "l'angoisse supprime la liberté", 
        "l'angoisse est indépendante de la liberté"
      ], 
      correct: 1,
      explanation: "Chez Sartre, l'angoisse est le sentiment de la liberté. Cette conception de l'angoisse est au cœur de l'existentialisme sartrien : l'angoisse n'est pas une émotion pathologique, mais le sentiment qui accompagne la conscience de notre responsabilité totale. L'homme est angoissé parce qu'il sait que ses choix engagent l'humanité entière, parce qu'il n'a pas d'excuse, parce qu'il est seul à décider. Cette conception de l'angoisse distingue Sartre des philosophies qui voient dans l'angoisse une maladie à guérir (psychiatrie, stoïcisme). Pour Sartre, l'angoisse est le sentiment même de la liberté et de la responsabilité."
    },
    { 
      question: "Question n°18 : Quelle est la conception du choix chez Sartre ?",
      answers: [
        "le choix est déterminé", 
        "le choix est libre et engage l'humanité", 
        "le choix est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Sartre, le choix est libre et engage l'humanité. Cette conception du choix est au cœur de l'existentialisme sartrien : l'homme est libre de choisir, mais ce choix engage l'humanité entière. En choisissant une manière d'être, je propose un modèle d'humanité, je dis que telle conduite est valable pour tous. Cette conception de la responsabilité universelle distingue Sartre des philosophies individualistes, pour qui mes choix ne concernent que moi. Pour Sartre, chaque choix est un choix pour tous, ce qui produit l'angoisse."
    },
    { 
      question: "Question n°19 : Quel est le rapport entre l'homme et Dieu chez Sartre ?",
      answers: [
        "l'homme est créé par Dieu", 
        "l'homme est sans Dieu et donc responsable", 
        "l'homme est indifférent à Dieu"
      ], 
      correct: 2,
      explanation: "Chez Sartre, l'homme est sans Dieu et donc responsable. Cette conception athée de l'existentialisme sartrien est au cœur de sa philosophie : s'il n'y a pas de Dieu, il n'y a pas de nature humaine préétablie, pas de valeurs données, pas de sens de l'histoire. L'homme est seul, sans excuse, entièrement responsable de son existence. Cette conception radicale de la responsabilité distingue Sartre des philosophies théistes, pour qui l'homme reçoit sa nature et ses valeurs de Dieu. Pour Sartre, l'absence de Dieu est la condition de la liberté et de la responsabilité humaines. C'est ce qu'il appelle « l'existentialisme est un humanisme » : l'homme est l'unique source de ses valeurs."
    },
    { 
      question: "Question n°20 : Quelle est la conception de la subjectivité chez Sartre ?",
      answers: [
        "la subjectivité est une illusion", 
        "la subjectivité est le point de départ de l'existentialisme", 
        "la subjectivité est un obstacle à la vérité"
      ], 
      correct: 2,
      explanation: "Pour Sartre, la subjectivité est le point de départ de l'existentialisme. Cette conception de la subjectivité est au cœur de l'existentialisme sartrien : l'homme est un projet qui se vit subjectivement, c'est-à-dire qu'il n'est pas un objet observable, mais une subjectivité qui se vit. Cette conception de la subjectivité comme point de départ distingue Sartre des philosophies objectivistes, pour qui l'homme est un objet parmi d'autres. Pour Sartre, la subjectivité est la vérité première de l'existence humaine : l'homme se vit avant de se connaître. Cette conception fonde la liberté et la responsabilité radicales de l'homme."
    },
    { 
      question: "Question n°21 : Quel est le rapport entre l'existence et la définition chez Sartre ?",
      answers: [
        "l'existence précède la définition", 
        "la définition précède l'existence", 
        "l'existence et la définition sont identiques"
      ], 
      correct: 1,
      explanation: "Chez Sartre, l'existence précède la définition. Cette conception de l'existence est au cœur de l'existentialisme sartrien : l'homme existe d'abord, puis se définit par ses choix. Il n'a pas d'essence préétablie, de nature donnée à l'avance. Cette conception de l'existence comme antérieure à la définition fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies essentialistes (Platon, Aristote, chrétiennes), pour qui la définition (essence) précède l'existence. Pour Sartre, l'homme est un être sans essence prédéfinie, qui se définit par ses choix et ses actes."
    },
    { 
      question: "Question n°22 : Quelle est la conception de la morale chez Sartre ?",
      answers: [
        "la morale est donnée", 
        "la morale est créée par l'homme", 
        "la morale est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Sartre, la morale est créée par l'homme. Cette conception de la morale est au cœur de l'existentialisme sartrien : s'il n'y a pas de Dieu, il n'y a pas de valeurs données, pas de bien ni de mal objectifs. L'homme est l'unique source de ses valeurs : en se choisissant, il crée sa propre morale. Cette conception de la morale comme création humaine distingue Sartre des philosophies théistes (chrétiennes) et des philosophies rationalistes (Kant), pour qui la morale est donnée (par Dieu ou par la raison). Pour Sartre, l'homme est responsable de sa morale, comme il est responsable de son existence. C'est ce qu'il appelle « l'existentialisme est un humanisme » : l'homme est l'unique législateur de sa vie."
    },
    { 
      question: "Question n°23 : Quel est le rapport entre liberté et angoisse chez Sartre ?",
      answers: [
        "la liberté produit l'angoisse", 
        "la liberté supprime l'angoisse", 
        "la liberté est indépendante de l'angoisse"
      ], 
      correct: 1,
      explanation: "Chez Sartre, la liberté produit l'angoisse. Cette conception du rapport entre liberté et angoisse est au cœur de l'existentialisme sartrien : l'angoisse est le sentiment qui accompagne la conscience de notre liberté et de notre responsabilité totales. L'homme est angoissé parce qu'il sait que ses choix engagent l'humanité entière, parce qu'il n'a pas d'excuse, parce qu'il est seul à décider. Cette conception de l'angoisse distingue Sartre des philosophies qui voient dans l'angoisse une maladie à guérir (psychiatrie, stoïcisme). Pour Sartre, l'angoisse est le sentiment même de la liberté et de la responsabilité."
    },
    { 
      question: "Question n°24 : Quelle est la conception de l'homme chez Sartre par rapport à son essence ?",
      answers: [
        "l'homme a une essence préétablie", 
        "l'homme n'a pas d'essence préétablie", 
        "l'homme est une essence"
      ], 
      correct: 2,
      explanation: "Pour Sartre, l'homme n'a pas d'essence préétablie. Cette conception de l'homme est au cœur de l'existentialisme sartrien : l'homme n'a pas de nature donnée à l'avance, il n'est pas déterminé par une essence (biologique, psychologique, divine). Il existe d'abord, puis se définit par ses choix. Cette conception de l'homme sans essence préétablie fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies essentialistes (Platon, Aristote, chrétiennes), pour qui l'homme a une nature fixe. Pour Sartre, l'homme est un être sans essence prédéfinie, qui se fait lui-même par ses choix et ses actes."
    },
    { 
      question: "Question n°25 : Quel est le rapport entre projet et existence chez Sartre ?",
      answers: [
        "l'homme est un projet", 
        "l'homme est une substance", 
        "l'homme est une illusion"
      ], 
      correct: 1,
      explanation: "Chez Sartre, l'homme est un projet. Cette conception de l'homme comme projet est au cœur de l'existentialisme sartrien : l'homme n'est pas une substance (contrairement à Descartes), ni un animal raisonnable (contrairement à Aristote), mais un projet, c'est-à-dire une projection vers l'avenir, un dépassement constant du donné. Ce projet se vit subjectivement : l'homme n'est pas un objet observable, mais une subjectivité qui se vit. Cette conception de l'homme comme projet fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies substantialistes."
    },
    { 
      question: "Question n°26 : Quelle est la conception de la responsabilité chez Sartre ?",
      answers: [
        "la responsabilité est limitée", 
        "la responsabilité est totale", 
        "la responsabilité est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Sartre, la responsabilité est totale. Cette conception de la responsabilité est au cœur de l'existentialisme sartrien : l'homme est responsable de tout ce qu'il fait, de sa vie, de son être même. Cette responsabilité est totale car elle engage non seulement l'individu, mais l'humanité entière. En se choisissant, l'homme choisit en même temps tous les hommes. Cette conception radicale de la responsabilité distingue Sartre des philosophies qui limitent la responsabilité humaine (déterminisme, libéralisme). Pour Sartre, la responsabilité est inséparable de la liberté : être libre, c'est être responsable de tout."
    },
    { 
      question: "Question n°27 : Quel est le rapport entre l'homme et ses actes chez Sartre ?",
      answers: [
        "l'homme est ce qu'il fait", 
        "l'homme est indépendant de ses actes", 
        "l'homme est déterminé par ses actes"
      ], 
      correct: 1,
      explanation: "Chez Sartre, l'homme est ce qu'il fait. Cette conception de l'homme est au cœur de l'existentialisme sartrien : l'homme n'est pas ce qu'il naît (déterminisme biologique), ni ce qu'il a (déterminisme social), mais ce qu'il se fait par ses choix et ses actes. L'homme est responsable de son être : il se définit par sa praxis, par son projet, par son engagement. Cette conception de l'homme comme être qui se fait lui-même fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies déterministes, pour qui l'homme est déterminé par des facteurs extérieurs."
    },
    { 
      question: "Question n°28 : Quelle est la conception de l'humanisme chez Sartre ?",
      answers: [
        "l'humanisme est l'affirmation de la dignité humaine", 
        "l'humanisme est l'affirmation que l'homme est la source de ses valeurs", 
        "l'humanisme est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Sartre, l'humanisme est l'affirmation que l'homme est la source de ses valeurs. Cette conception de l'humanisme est au cœur de l'existentialisme sartrien : s'il n'y a pas de Dieu, il n'y a pas de valeurs données, pas de bien ni de mal objectifs. L'homme est l'unique source de ses valeurs : en se choisissant, il crée sa propre morale, il propose un modèle d'humanité. Cette conception de l'humanisme comme création de valeurs distingue Sartre des humanismes traditionnels, pour qui l'homme a une essence et une dignité données. Pour Sartre, l'humanisme est l'affirmation que l'homme est responsable de son existence et de ses valeurs."
    },
    { 
      question: "Question n°29 : Quel est le rapport entre l'homme et sa situation chez Sartre ?",
      answers: [
        "l'homme est déterminé par sa situation", 
        "l'homme est libre dans sa situation", 
        "l'homme est indifférent à sa situation"
      ], 
      correct: 2,
      explanation: "Chez Sartre, l'homme est libre dans sa situation. Cette conception de la liberté est au cœur de l'existentialisme sartrien : l'homme est toujours situé (il a un corps, un milieu, une histoire), mais il n'est jamais déterminé par sa situation. Il peut toujours se ressaisir, se réinventer, donner un nouveau sens à sa situation par ses projets présents. Cette conception de la liberté dans la situation distingue Sartre des philosophies déterministes, pour qui l'homme est déterminé par sa situation. Pour Sartre, la situation est le point de départ de la liberté, non sa limite."
    },
    { 
      question: "Question n°30 : Quelle est la conception de l'angoisse chez Sartre ?",
      answers: [
        "l'angoisse est une maladie", 
        "l'angoisse est le sentiment de la responsabilité", 
        "l'angoisse est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Sartre, l'angoisse est le sentiment de la responsabilité. Cette conception de l'angoisse est au cœur de l'existentialisme sartrien : l'angoisse n'est pas une émotion pathologique, mais le sentiment qui accompagne la conscience de notre responsabilité totale. L'homme est angoissé parce qu'il sait que ses choix engagent l'humanité entière, parce qu'il n'a pas d'excuse, parce qu'il est seul à décider. Cette conception de l'angoisse distingue Sartre des philosophies qui voient dans l'angoisse une maladie à guérir (psychiatrie, stoïcisme). Pour Sartre, l'angoisse est le sentiment même de la liberté et de la responsabilité."
    },
    { 
      question: "Question n°31 : Quel est le rapport entre l'homme et l'avenir chez Sartre ?",
      answers: [
        "l'homme est déterminé par son passé", 
        "l'homme se projette vers l'avenir", 
        "l'homme est indifférent à l'avenir"
      ], 
      correct: 2,
      explanation: "Chez Sartre, l'homme se projette vers l'avenir. Cette conception de l'homme comme projet est au cœur de l'existentialisme sartrien : l'homme n'est pas déterminé par son passé, il se projette vers l'avenir par ses choix et ses projets. Il est un être de possibles, un dépassement constant du donné. Cette conception de l'homme comme être de projet fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies déterministes, pour qui l'homme est déterminé par son passé. Pour Sartre, l'homme est toujours au-delà de lui-même, dans un avenir à créer."
    },
    { 
      question: "Question n°32 : Quelle est la conception de la liberté chez Sartre par rapport à la situation ?",
      answers: [
        "la liberté est indépendante de la situation", 
        "la liberté est toujours située", 
        "la liberté est supprimée par la situation"
      ], 
      correct: 2,
      explanation: "Pour Sartre, la liberté est toujours située. Cette conception de la liberté est au cœur de l'existentialisme sartrien : l'homme est toujours situé (il a un corps, un milieu, une histoire), mais il n'est jamais déterminé par sa situation. Il peut toujours se ressaisir, se réinventer, donner un nouveau sens à sa situation par ses projets présents. Cette conception de la liberté située distingue Sartre des philosophies abstraites de la liberté (libéralisme) et des philosophies déterministes. Pour Sartre, la situation est le point de départ de la liberté, non sa limite."
    },
    { 
      question: "Question n°33 : Quel est le rapport entre l'homme et ses possibilités chez Sartre ?",
      answers: [
        "l'homme est ce qu'il fait de ses possibilités", 
        "l'homme est déterminé par ses possibilités", 
        "l'homme est indifférent à ses possibilités"
      ], 
      correct: 1,
      explanation: "Chez Sartre, l'homme est ce qu'il fait de ses possibilités. Cette conception de l'homme est au cœur de l'existentialisme sartrien : l'homme n'est pas déterminé par ses possibilités (facteurs biologiques, sociaux, historiques), il les dépasse par ses choix et ses projets. Il est un être de possibles, qui se définit par ce qu'il fait de ses possibles. Cette conception de l'homme comme être qui se fait lui-même fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies déterministes, pour qui l'homme est déterminé par des facteurs extérieurs."
    },
    { 
      question: "Question n°34 : Quelle est la conception de la mauvaise foi chez Sartre ?",
      answers: [
        "la mauvaise foi est la fuite devant la liberté", 
        "la mauvaise foi est une vertu", 
        "la mauvaise foi est une illusion"
      ], 
      correct: 1,
      explanation: "Pour Sartre, la mauvaise foi est la fuite devant la liberté. Cette conception de la mauvaise foi est au cœur de l'existentialisme sartrien : la mauvaise foi consiste à se mentir à soi-même en se croyant déterminé, en niant sa liberté et sa responsabilité. C'est la attitude de celui qui dit « je suis comme ça », « je n'y peux rien », « c'est la faute de mon éducation ». Cette conception de la mauvaise foi distingue Sartre des philosophies qui excusent l'homme en le croyant déterminé. Pour Sartre, la mauvaise foi est une fuite devant la responsabilité, une inauthenticité. Elle est développée dans L'Être et le Néant."
    },
    { 
      question: "Question n°35 : Quel est le rapport entre l'homme et sa liberté chez Sartre ?",
      answers: [
        "l'homme est libre, mais sa liberté est une condamnation", 
        "l'homme est libre, et sa liberté est un bonheur", 
        "l'homme n'est pas libre"
      ], 
      correct: 1,
      explanation: "Chez Sartre, l'homme est libre, mais sa liberté est une condamnation. Cette conception paradoxale de la liberté est au cœur de l'existentialisme sartrien : l'homme n'a pas choisi d'être libre, il est condamné à l'être. Le terme « condamné » suggère que la liberté n'est pas un cadeau mais une charge, une obligation à laquelle nous ne pouvons pas échapper. Cette conception de la liberté comme condamnation distingue Sartre des conceptions optimistes de la liberté comme épanouissement. Pour Sartre, la liberté est à la fois la dignité de l'homme et son fardeau, car elle implique une responsabilité totale."
    },
    { 
      question: "Question n°36 : Quelle est la conception de l'humanisme chez Sartre par rapport à Dieu ?",
      answers: [
        "l'humanisme est sans Dieu", 
        "l'humanisme est avec Dieu", 
        "l'humanisme est indifférent à Dieu"
      ], 
      correct: 1,
      explanation: "Pour Sartre, l'humanisme est sans Dieu. Cette conception athée de l'existentialisme sartrien est au cœur de sa philosophie : s'il n'y a pas de Dieu, il n'y a pas de nature humaine préétablie, pas de valeurs données, pas de sens de l'histoire. L'homme est seul, sans excuse, entièrement responsable de son existence et de ses valeurs. Cette conception radicale de la responsabilité distingue Sartre des philosophies théistes, pour qui l'homme reçoit sa nature et ses valeurs de Dieu. Pour Sartre, l'absence de Dieu est la condition de la liberté et de la responsabilité humaines. C'est ce qu'il appelle « l'existentialisme est un humanisme » : l'homme est l'unique source de ses valeurs."
    },
    { 
      question: "Question n°37 : Quel est le rapport entre l'homme et son essence chez Sartre ?",
      answers: [
        "l'homme n'a pas d'essence, il se fait", 
        "l'homme a une essence éternelle", 
        "l'homme est une essence"
      ], 
      correct: 1,
      explanation: "Chez Sartre, l'homme n'a pas d'essence, il se fait. Cette conception de l'homme est au cœur de l'existentialisme sartrien : l'homme n'a pas de nature donnée à l'avance, il n'est pas déterminé par une essence (biologique, psychologique, divine). Il existe d'abord, puis se définit par ses choix. Cette conception de l'homme sans essence préétablie fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies essentialistes (Platon, Aristote, chrétiennes), pour qui l'homme a une nature fixe. Pour Sartre, l'homme est un être sans essence prédéfinie, qui se fait lui-même par ses choix et ses actes."
    },
    { 
      question: "Question n°38 : Quelle est la conception de l'engagement chez Sartre ?",
      answers: [
        "l'engagement est une fuite", 
        "l'engagement est l'expression de la liberté", 
        "l'engagement est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Sartre, l'engagement est l'expression de la liberté. Cette conception de l'engagement est au cœur de l'existentialisme sartrien : l'homme est libre, mais sa liberté ne se réalise que dans l'engagement. En s'engageant (dans une action, une cause, un projet), l'homme donne un sens à sa vie, il se définit, il assume sa responsabilité. Cette conception de l'engagement distingue Sartre des philosophies contemplatives, pour qui la liberté est pure intériorité. Pour Sartre, la liberté est inséparable de l'action, de l'engagement, de la praxis. C'est ce qu'il développera dans sa philosophie politique et dans sa théorie de la littérature engagée."
    },
    { 
      question: "Question n°39 : Quel est le rapport entre l'homme et sa responsabilité chez Sartre ?",
      answers: [
        "l'homme est responsable de tout", 
        "l'homme est responsable de rien", 
        "l'homme est responsable de certaines choses"
      ], 
      correct: 1,
      explanation: "Chez Sartre, l'homme est responsable de tout. Cette conception radicale de la responsabilité est au cœur de l'existentialisme sartrien : l'homme est responsable de tout ce qu'il fait, de sa vie, de son être même. Cette responsabilité est totale car elle engage non seulement l'individu, mais l'humanité entière. En se choisissant, l'homme choisit en même temps tous les hommes. Cette conception radicale de la responsabilité distingue Sartre des philosophies qui limitent la responsabilité humaine (déterminisme, libéralisme). Pour Sartre, la responsabilité est inséparable de la liberté : être libre, c'est être responsable de tout."
    },
    { 
      question: "Question n°40 : Quelle est la conception de la liberté chez Sartre par rapport à la responsabilité ?",
      answers: [
        "la liberté implique la responsabilité", 
        "la liberté supprime la responsabilité", 
        "la liberté est indépendante de la responsabilité"
      ], 
      correct: 1,
      explanation: "Pour Sartre, la liberté implique la responsabilité. Cette conception du rapport entre liberté et responsabilité est au cœur de l'existentialisme sartrien : être libre, c'est être responsable de ses actes, de sa vie, de son être même. L'homme est « responsable de tout ce qu'il fait ». Cette responsabilité est totale, car elle engage non seulement l'individu, mais l'humanité entière. Cette conception radicale de la responsabilité distingue Sartre des philosophies qui séparent la liberté de la responsabilité (libéralisme) ou qui nient la responsabilité (déterminisme). Pour Sartre, la liberté est inséparable de la responsabilité."
    },
    { 
      question: "Question n°41 : Quel est le rapport entre l'homme et son projet chez Sartre ?",
      answers: [
        "l'homme est un projet", 
        "l'homme est une substance", 
        "l'homme est une illusion"
      ], 
      correct: 1,
      explanation: "Chez Sartre, l'homme est un projet. Cette conception de l'homme comme projet est au cœur de l'existentialisme sartrien : l'homme n'est pas une substance (contrairement à Descartes), ni un animal raisonnable (contrairement à Aristote), mais un projet, c'est-à-dire une projection vers l'avenir, un dépassement constant du donné. Ce projet se vit subjectivement : l'homme n'est pas un objet observable, mais une subjectivité qui se vit. Cette conception de l'homme comme projet fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies substantialistes."
    },
    { 
      question: "Question n°42 : Quelle est la conception de l'existentialisme chez Sartre ?",
      answers: [
        "une philosophie de l'absurde", 
        "une philosophie de la liberté et de la responsabilité", 
        "une philosophie du désespoir"
      ], 
      correct: 2,
      explanation: "Pour Sartre, l'existentialisme est une philosophie de la liberté et de la responsabilité. Cette conception de l'existentialisme est au cœur de sa philosophie : l'homme est condamné à être libre, il est responsable de tout ce qu'il fait, il est l'unique source de ses valeurs. Cette conception de l'existentialisme distingue Sartre des philosophies de l'absurde (Camus), du désespoir (Kierkegaard), ou du nihilisme (Nietzsche). Pour Sartre, l'existentialisme est un humanisme : il affirme la dignité de l'homme comme être libre et responsable. C'est une philosophie de l'action, de l'engagement, de la création de valeurs."
    },
    { 
      question: "Question n°43 : Quel est le rapport entre l'homme et sa vie chez Sartre ?",
      answers: [
        "l'homme est responsable de sa vie", 
        "l'homme est déterminé par sa vie", 
        "l'homme est indifférent à sa vie"
      ], 
      correct: 1,
      explanation: "Chez Sartre, l'homme est responsable de sa vie. Cette conception de la responsabilité est au cœur de l'existentialisme sartrien : l'homme est responsable de tout ce qu'il fait, de sa vie, de son être même. Il n'a pas d'excuse, pas de déterminisme, pas de nature qui l'excuserait. Cette conception radicale de la responsabilité distingue Sartre des philosophies qui excusent l'homme en le croyant déterminé (psychanalyse, marxisme vulgaire). Pour Sartre, l'homme est l'unique responsable de sa vie : il est ce qu'il se fait, il est l'auteur de son existence. Cette conception fonde la dignité de l'homme, mais aussi son angoisse."
    },
    { 
      question: "Question n°44 : Quelle est la conception de la valeur chez Sartre ?",
      answers: [
        "la valeur est donnée", 
        "la valeur est créée par l'homme", 
        "la valeur est une illusion"
      ], 
      correct: 2,
      explanation: "Pour Sartre, la valeur est créée par l'homme. Cette conception de la valeur est au cœur de l'existentialisme sartrien : s'il n'y a pas de Dieu, il n'y a pas de valeurs données, pas de bien ni de mal objectifs. L'homme est l'unique source de ses valeurs : en se choisissant, il crée sa propre morale, il propose un modèle d'humanité. Cette conception de la valeur comme création humaine distingue Sartre des philosophies théistes (chrétiennes) et des philosophies rationalistes (Kant), pour qui les valeurs sont données (par Dieu ou par la raison). Pour Sartre, l'homme est responsable de ses valeurs, comme il est responsable de son existence."
    },
    { 
      question: "Question n°45 : Quel est le rapport entre l'homme et son angoisse chez Sartre ?",
      answers: [
        "l'angoisse est le sentiment de sa responsabilité", 
        "l'angoisse est une maladie", 
        "l'angoisse est une illusion"
      ], 
      correct: 1,
      explanation: "Chez Sartre, l'angoisse est le sentiment de sa responsabilité. Cette conception de l'angoisse est au cœur de l'existentialisme sartrien : l'angoisse n'est pas une émotion pathologique, mais le sentiment qui accompagne la conscience de notre responsabilité totale. L'homme est angoissé parce qu'il sait que ses choix engagent l'humanité entière, parce qu'il n'a pas d'excuse, parce qu'il est seul à décider. Cette conception de l'angoisse distingue Sartre des philosophies qui voient dans l'angoisse une maladie à guérir (psychiatrie, stoïcisme). Pour Sartre, l'angoisse est le sentiment même de la liberté et de la responsabilité."
    },
    { 
      question: "Question n°46 : Quelle est la conception de l'homme chez Sartre par rapport à sa liberté ?",
      answers: [
        "l'homme est condamné à être libre", 
        "l'homme est libre par nature", 
        "l'homme n'est pas libre"
      ], 
      correct: 1,
      explanation: "Pour Sartre, l'homme est condamné à être libre. Cette conception paradoxale de la liberté est au cœur de l'existentialisme sartrien : l'homme n'a pas choisi d'être libre, il est condamné à l'être. Le terme « condamné » suggère que la liberté n'est pas un cadeau mais une charge, une obligation à laquelle nous ne pouvons pas échapper. Cette conception de la liberté comme condamnation distingue Sartre des conceptions optimistes de la liberté comme épanouissement. Pour Sartre, la liberté est à la fois la dignité de l'homme et son fardeau, car elle implique une responsabilité totale."
    },
    { 
      question: "Question n°47 : Quel est le rapport entre l'homme et son existence chez Sartre ?",
      answers: [
        "l'existence précède l'essence", 
        "l'essence précède l'existence", 
        "l'existence et l'essence sont identiques"
      ], 
      correct: 1,
      explanation: "Chez Sartre, l'existence précède l'essence. Cette conception de l'existence est au cœur de l'existentialisme sartrien : l'homme existe d'abord, puis se définit par ses choix. Il n'a pas d'essence préétablie, de nature donnée à l'avance. Cette conception de l'existence comme antérieure à l'essence fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies essentialistes (Platon, Aristote, chrétiennes), pour qui l'essence précède l'existence. Pour Sartre, l'homme est un être sans essence prédéfinie, qui se fait lui-même par ses choix et ses actes."
    },
    { 
      question: "Question n°48 : Quelle est la conception de l'homme chez Sartre par rapport à ses choix ?",
      answers: [
        "l'homme est ce qu'il choisit d'être", 
        "l'homme est déterminé par ses choix", 
        "l'homme est indifférent à ses choix"
      ], 
      correct: 1,
      explanation: "Pour Sartre, l'homme est ce qu'il choisit d'être. Cette conception de l'homme est au cœur de l'existentialisme sartrien : l'homme n'est pas déterminé par sa nature, son milieu ou son passé ; il est ce qu'il se fait par ses choix et ses actes. L'homme est responsable de son être : il se définit par sa praxis, par son projet, par son engagement. Cette conception de l'homme comme être qui se fait lui-même fonde la liberté et la responsabilité radicales de l'homme. Elle distingue Sartre des philosophies déterministes, pour qui l'homme est déterminé par des facteurs extérieurs."
    },
    { 
      question: "Question n°49 : Quel est le rapport entre l'homme et sa dignité chez Sartre ?",
      answers: [
        "la dignité de l'homme réside dans sa liberté", 
        "la dignité de l'homme réside dans sa nature", 
        "la dignité de l'homme est une illusion"
      ], 
      correct: 1,
      explanation: "Chez Sartre, la dignité de l'homme réside dans sa liberté. Cette conception de la dignité est au cœur de l'existentialisme sartrien : l'homme n'a pas de dignité donnée (par Dieu ou par la nature), mais il acquiert sa dignité par l'exercice de sa liberté. En se choisissant, en s'engageant, en assumant sa responsabilité, l'homme se donne une dignité. Cette conception de la dignité comme création humaine distingue Sartre des humanismes traditionnels, pour qui l'homme a une dignité donnée. Pour Sartre, l'homme est l'unique source de sa dignité, comme il est l'unique source de ses valeurs."
    },
    { 
      question: "Question n°50 : En quoi ce texte de Sartre est-il représentatif de sa philosophie ?",
      answers: [
        "il montre la liberté comme condamnation et la responsabilité totale", 
        "il montre l'existence qui précède l'essence", 
        "les deux réponses sont correctes"
      ], 
      correct: 3,
      explanation: "Ce texte de L'existentialisme est un humanisme est représentatif de la philosophie de Sartre à plusieurs égards. D'abord, il montre la conception de la liberté comme condamnation : l'homme n'a pas choisi d'être libre, il est condamné à l'être. Ensuite, il montre la responsabilité totale de l'homme : il est responsable de tout ce qu'il fait, et ses choix engagent l'humanité entière. Enfin, il montre la thèse centrale de l'existentialisme : l'existence précède l'essence, l'homme n'a pas de nature préétablie, il est ce qu'il se fait. Ce texte condense ainsi les thèmes majeurs de la philosophie de Sartre : liberté, responsabilité, angoisse, existence, essence, projet, engagement."
    }
];