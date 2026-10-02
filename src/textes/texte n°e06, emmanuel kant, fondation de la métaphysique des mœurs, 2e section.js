// ============================================
// DONNÉES GÉNÉRALES
// ============================================

const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Kant";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	source: "Emmanuel KANT, <em>Fondation de la métaphysique des mœurs</em>, 2e section, in <em>Œuvres philosophiques</em>, tome II, Bibliothèque de la Pléiade, Gallimard, 1985, pp.290-291",
	texte: "« [1] L'impératif catégorique est **donc** unique ; **en effet**, il peut s'énoncer **ainsi** : Agis **uniquement** d'après la maxime **grâce à** laquelle tu peux vouloir en même temps qu'elle devienne une loi universelle. [2] **Or**, **si** de toutes les impératifs du devoir nous pouvons dériver un même impératif, c'est que nous comprenons du moins ce qu'il signifie. [3] **Mais** il reste toujours problématique de savoir si un tel impératif existe **absolument**. [4] **Toutefois**, nous pouvons montrer qu'il s'impose à toute volonté rationnelle. [5] **En effet**, l'être raisonnable se conçoit **comme** législateur universel. [6] **Car** la valeur de ses maximes ne réside pas dans les effets attendus, **mais** dans le principe du vouloir. [7] **Ainsi**, la moralité d'une action ne dépend pas de la réalisation de l'objet, **mais** **uniquement** du principe de la volonté. [8] **Par conséquent**, la bonne volonté est bonne non pas par ce qu'elle effectue ou accomplit, **mais** par son seul vouloir. »"
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    { 
        question: "Question n°1 : Combien d'impératifs catégoriques existe-t-il selon Kant ?",
        answers: [
            "plusieurs", 
            "un seul", 
            "aucun"
        ], 
        correct: 2,
        explanation: "Kant affirme : « L'impératif catégorique est donc unique. » Cette unicité est fondamentale dans l'éthique kantienne : il n'y a qu'un seul impératif catégorique, qui est le principe suprême de la moralité. Tous les impératifs du devoir peuvent en être dérivés. Cette unicité distingue l'impératif catégorique des impératifs hypothétiques, qui sont multiples et dépendent des fins poursuivies. L'impératif catégorique est unique parce qu'il est inconditionné : il commande sans condition, indépendamment de toute fin extérieure."
    },
    { 
        question: "Question n°2 : Comment Kant énonce-t-il l'impératif catégorique ?",
        answers: [
            "Agis uniquement d'après la maxime grâce à laquelle tu peux vouloir en même temps qu'elle devienne une loi universelle", 
            "Fais ce qui te plaît", 
            "Obéis à l'autorité"
        ], 
        correct: 1,
        explanation: "Kant énonce l'impératif catégorique ainsi : « Agis uniquement d'après la maxime grâce à laquelle tu peux vouloir en même temps qu'elle devienne une loi universelle. » Cette formule est la première formulation de l'impératif catégorique dans la Fondation de la métaphysique des mœurs. Elle exige que nous agissions selon des maximes universalisables, c'est-à-dire des maximes que tout être raisonnable pourrait adopter. Cette exigence d'universalisation est le critère de la moralité : une action est morale si sa maxime peut être universalisée sans contradiction."
    },
    { 
        question: "Question n°3 : Que signifie « maxime » chez Kant ?",
        answers: [
            "une règle de conduite subjective", 
            "une loi objective", 
            "un commandement divin"
        ], 
        correct: 1,
        explanation: "Chez Kant, la maxime est une règle de conduite subjective, c'est-à-dire le principe que le sujet se donne à lui-même pour agir. Elle est subjective car elle est propre à un individu ou à une situation particulière ; elle n'est pas encore une loi objective (qui vaudrait pour tous). La maxime est donc le principe subjectif de l'action, tandis que la loi morale est le principe objectif. L'impératif catégorique exige que nos maximes puissent devenir des lois universelles, c'est-à-dire que nos règles subjectives de conduite puissent être adoptées par tout être raisonnable."
    },
    { 
        question: "Question n°4 : Que peut-on dériver de tous les impératifs du devoir ?",
        answers: [
            "un même impératif", 
            "plusieurs impératifs différents", 
            "aucun impératif"
        ], 
        correct: 1,
        explanation: "Kant affirme : « si de tous les impératifs du devoir nous pouvons dériver un même impératif, c'est que nous comprenons du moins ce qu'il signifie. » Cette dérivation de tous les impératifs du devoir à partir d'un seul impératif est une thèse fondamentale de l'éthique kantienne : tous les devoirs particuliers (ne pas mentir, ne pas voler, etc.) peuvent être déduits de l'impératif catégorique. Cette dérivation montre l'unité de la morale : il n'y a qu'un seul principe suprême, qui fonde tous les devoirs particuliers. Cette conception fonde l'idée d'une morale rationnelle, universelle et nécessaire."
    },
    { 
        question: "Question n°5 : Que reste-t-il problématique selon Kant ?",
        answers: [
            "savoir si un tel impératif existe absolument", 
            "savoir si l'impératif est unique", 
            "savoir si l'impératif est universel"
        ], 
        correct: 1,
        explanation: "Kant affirme : « Mais il reste toujours problématique de savoir si un tel impératif existe absolument. » Cette remarque est importante : Kant reconnaît que l'existence d'un impératif catégorique (inconditionné) n'est pas immédiatement évidente. On peut comprendre ce que signifie un impératif catégorique sans savoir s'il existe réellement. Cette distinction entre la compréhension du sens et la preuve de l'existence est caractéristique de la méthode kantienne. La preuve de l'existence de l'impératif catégorique sera donnée par la déduction transcendantale, qui montre qu'il s'impose à toute volonté rationnelle."
    },
    { 
        question: "Question n°6 : À quoi s'impose l'impératif catégorique selon Kant ?",
        answers: [
            "à toute volonté rationnelle", 
            "à certains hommes seulement", 
            "à Dieu seul"
        ], 
        correct: 1,
        explanation: "Kant affirme : « Toutefois, nous pouvons montrer qu'il s'impose à toute volonté rationnelle. » Cette universalité de l'impératif catégorique est fondamentale dans l'éthique kantienne : l'impératif catégorique n'est pas une règle particulière à une culture ou à une époque, mais un principe qui s'impose à tout être raisonnable. Cette universalité fonde l'idée d'une morale universelle, valable pour tous les êtres raisonnables, y compris Dieu (même si Dieu, étant saint, n'éprouve pas l'obligation comme une contrainte). Cette conception de l'universalité de la loi morale distingue Kant des éthiques particularistes (Aristote) ou divines (Saint Thomas)."
    },
    { 
        question: "Question n°7 : Comment l'être raisonnable se conçoit-il selon Kant ?",
        answers: [
            "comme législateur universel", 
            "comme sujet passif", 
            "comme esclave"
        ], 
        correct: 1,
        explanation: "Kant affirme : « l'être raisonnable se conçoit comme législateur universel. » Cette conception de l'être raisonnable comme législateur universel est au cœur de l'éthique kantienne : l'être raisonnable n'est pas seulement soumis à la loi morale, il est aussi l'auteur de cette loi. Cette conception fonde l'autonomie de la volonté : la volonté se donne à elle-même sa propre loi. Cette autonomie est la dignité de l'être raisonnable : il n'obéit qu'à la loi qu'il s'est prescrite. Cette conception de l'autonomie distingue Kant des éthiques hétéronomes, qui fondent la morale sur une autorité extérieure (Dieu, la nature, la société)."
    },
    { 
        question: "Question n°8 : Où réside la valeur des maximes selon Kant ?",
        answers: [
            "dans les effets attendus", 
            "dans le principe du vouloir", 
            "dans les conséquences"
        ], 
        correct: 2,
        explanation: "Kant affirme : « la valeur de ses maximes ne réside pas dans les effets attendus, mais dans le principe du vouloir. » Cette distinction est fondamentale : la moralité d'une action ne dépend pas de ses conséquences (éthique conséquentialiste), mais de l'intention qui l'anime (éthique déontologique). Ce qui compte, c'est le principe du vouloir, c'est-à-dire la maxime de l'action. Cette conception déontologique de la morale distingue Kant des éthiques conséquentialistes (utilitarisme) et des éthiques des vertus (Aristote). Pour Kant, une action est morale si elle est accomplie par devoir, c'est-à-dire par respect pour la loi morale."
    },
    { 
        question: "Question n°9 : De quoi dépend la moralité d'une action selon Kant ?",
        answers: [
            "de la réalisation de l'objet", 
            "du principe de la volonté", 
            "des conséquences"
        ], 
        correct: 2,
        explanation: "Kant affirme : « la moralité d'une action ne dépend pas de la réalisation de l'objet, mais uniquement du principe de la volonté. » Cette thèse est au cœur de l'éthique kantienne : la moralité ne dépend pas du succès de l'action (réalisation de l'objet), mais de l'intention qui l'anime (principe de la volonté). Une action moralement bonne peut échouer dans ses effets sans perdre sa valeur morale ; une action moralement mauvaise peut réussir sans acquérir de valeur morale. Cette conception déontologique de la morale distingue Kant des éthiques conséquentialistes, pour qui la valeur d'une action dépend de ses conséquences."
    },
    { 
        question: "Question n°10 : Quand la bonne volonté est-elle bonne selon Kant ?",
        answers: [
            "par ce qu'elle effectue", 
            "par son seul vouloir", 
            "par ses conséquences"
        ], 
        correct: 2,
        explanation: "Kant affirme : « la bonne volonté est bonne non pas par ce qu'elle effectue ou accomplit, mais par son seul vouloir. » Cette thèse est la conclusion de l'analyse kantienne de la moralité : la bonne volonté est bonne en elle-même, indépendamment de ses effets. Elle est bonne parce qu'elle veut le bien, non parce qu'elle le réalise. Cette conception de la bonne volonté est au cœur de l'éthique kantienne : la valeur morale réside dans l'intention, non dans le résultat. Cette conception déontologique distingue Kant des éthiques conséquentialistes et fonde l'idée que la morale est affaire de volonté, non de succès."
    },
    { 
        question: "Question n°11 : Quelle est la méthode de Kant dans ce passage ?",
        answers: [
            "la déduction à partir de principes a priori", 
            "l'observation empirique", 
            "l'analyse psychologique"
        ], 
        correct: 1,
        explanation: "Dans ce passage, Kant utilise une méthode déductive : il part de l'impératif catégorique et en déduit ses conséquences (l'autonomie de la volonté, la valeur morale de l'intention). Cette méthode est caractéristique de l'éthique kantienne : il s'agit de fonder la morale sur des principes a priori, non sur l'expérience. Kant ne part pas de l'observation des mœurs pour en déduire des règles, mais il part du concept d'impératif catégorique pour en déduire les principes de la moralité. Cette méthode a priori distingue Kant des éthiques empiristes (Hume) et des éthiques des vertus (Aristote)."
    },
    { 
        question: "Question n°12 : Quel est le rapport entre impératif catégorique et impératif hypothétique chez Kant ?",
        answers: [
            "ils sont identiques", 
            "l'impératif catégorique est inconditionné, l'impératif hypothétique est conditionné", 
            "l'impératif hypothétique est supérieur"
        ], 
        correct: 2,
        explanation: "Chez Kant, l'impératif catégorique est inconditionné, tandis que l'impératif hypothétique est conditionné. L'impératif hypothétique commande sous condition : « si tu veux X, fais Y ». Il est donc relatif à une fin poursuivie. L'impératif catégorique, au contraire, commande sans condition : il commande absolument, indépendamment de toute fin. Cette distinction est fondamentale : seule la morale repose sur un impératif catégorique, les autres règles (techniques, pragmatiques) reposent sur des impératifs hypothétiques. Cette conception distingue la morale de la prudence et de l'habileté."
    },
    { 
        question: "Question n°13 : Quel est le rapport entre autonomie et loi morale chez Kant ?",
        answers: [
            "l'autonomie s'oppose à la loi morale", 
            "l'autonomie est la condition de la loi morale", 
            "l'autonomie est indépendante de la loi morale"
        ], 
        correct: 2,
        explanation: "Chez Kant, l'autonomie est la condition de la loi morale. En effet, la loi morale n'est pas une contrainte extérieure, mais la loi que la volonté se donne à elle-même. L'être raisonnable est législateur universel : il se donne à lui-même la loi à laquelle il obéit. Cette conception de l'autonomie de la volonté est au cœur de l'éthique kantienne : la liberté et la moralité sont inséparables. Être libre, c'est obéir à la loi qu'on s'est prescrite ; être moral, c'est agir par devoir, c'est-à-dire par respect pour la loi morale. Cette conception de l'autonomie distingue Kant des éthiques hétéronomes."
    },
    { 
        question: "Question n°14 : Quelle est la conception du devoir chez Kant ?",
        answers: [
            "le devoir est une contrainte extérieure", 
            "le devoir est l'obéissance à la loi morale", 
            "le devoir est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Kant, le devoir est l'obéissance à la loi morale. Le devoir n'est pas une contrainte extérieure (imposée par la société ou par Dieu), mais l'obéissance à la loi que la volonté se donne à elle-même. Cette conception du devoir comme autonomie est au cœur de l'éthique kantienne : agir par devoir, c'est agir par respect pour la loi morale, non par inclination ou par intérêt. Cette conception du devoir distingue Kant des éthiques du bonheur (Aristote, épicuriens), pour qui l'action morale vise le bonheur, et des éthiques théologiques (Saint Thomas), pour qui l'action morale obéit à Dieu."
    },
    { 
        question: "Question n°15 : Quel est le rapport entre la bonne volonté et la loi morale chez Kant ?",
        answers: [
            "la bonne volonté s'oppose à la loi morale", 
            "la bonne volonté est conforme à la loi morale", 
            "la bonne volonté est indépendante de la loi morale"
        ], 
        correct: 2,
        explanation: "Chez Kant, la bonne volonté est conforme à la loi morale. La bonne volonté est celle qui agit par devoir, c'est-à-dire par respect pour la loi morale. Elle est donc conforme à la loi morale, non parce qu'elle en attend un avantage, mais parce qu'elle la reconnaît comme obligatoire. Cette conception de la bonne volonté comme conformité à la loi morale est au cœur de l'éthique kantienne : la valeur morale réside dans l'intention, non dans le résultat. La bonne volonté est bonne en elle-même, indépendamment de ses effets."
    },
    { 
        question: "Question n°16 : Quelle est la conception de la liberté chez Kant ?",
        answers: [
            "la liberté est l'absence de contrainte", 
            "la liberté est l'autonomie de la volonté", 
            "la liberté est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Kant, la liberté est l'autonomie de la volonté, c'est-à-dire la capacité de la volonté à se donner à elle-même sa propre loi. Cette conception de la liberté comme autonomie est au cœur de l'éthique kantienne : être libre, c'est obéir à la loi qu'on s'est prescrite, non à une loi extérieure. Cette conception de la liberté distingue Kant des conceptions de la liberté comme absence de contrainte (liberté négative) et comme capacité de faire ce qu'on veut (liberté d'indifférence). Pour Kant, la vraie liberté est dans l'obéissance à la loi morale, qui est la loi de la raison."
    },
    { 
        question: "Question n°17 : Quel est le rapport entre la raison et la moralité chez Kant ?",
        answers: [
            "la raison est indépendante de la moralité", 
            "la raison fonde la moralité", 
            "la raison s'oppose à la moralité"
        ], 
        correct: 2,
        explanation: "Chez Kant, la raison fonde la moralité. La loi morale est une loi de la raison : elle s'impose à tout être raisonnable. C'est pourquoi l'impératif catégorique s'impose à toute volonté rationnelle. Cette conception rationaliste de la morale distingue Kant des éthiques sentimentalistes (Hume, Rousseau), pour qui la morale est fondée sur le sentiment. Pour Kant, la morale est affaire de raison : c'est la raison qui détermine ce qui est bien et qui commande à la volonté. Cette conception fonde l'universalité et la nécessité de la loi morale."
    },
    { 
        question: "Question n°18 : Quelle est la conception de la volonté chez Kant ?",
        answers: [
            "la volonté est déterminée par les inclinations", 
            "la volonté est autonome", 
            "la volonté est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Kant, la volonté est autonome : elle se donne à elle-même sa propre loi. Cette conception de la volonté comme autonomie est au cœur de l'éthique kantienne : la volonté n'est pas déterminée par les inclinations sensibles (hétéronomie), mais par la loi morale qu'elle se prescrit à elle-même (autonomie). Cette conception de la volonté comme autonome fonde la liberté et la moralité : être libre, c'est obéir à la loi qu'on s'est prescrite ; être moral, c'est agir par devoir, c'est-à-dire par respect pour la loi morale. Cette conception distingue Kant des éthiques hétéronomes."
    },
    { 
        question: "Question n°19 : Quel est le rapport entre la moralité et le bonheur chez Kant ?",
        answers: [
            "la moralité vise le bonheur", 
            "la moralité est indépendante du bonheur", 
            "la moralité s'oppose au bonheur"
        ], 
        correct: 2,
        explanation: "Chez Kant, la moralité est indépendante du bonheur. La moralité ne consiste pas à rechercher le bonheur, mais à accomplir son devoir par respect pour la loi morale. Cette conception déontologique de la morale distingue Kant des éthiques eudémonistes (Aristote, épicuriens), pour qui la morale vise le bonheur. Pour Kant, la morale est affaire de devoir, non de bonheur : on doit agir par devoir, même si cela ne procure pas de bonheur. Cependant, Kant reconnaît que la vertu rend digne du bonheur, et que le souverain bien consiste dans l'union de la vertu et du bonheur (postulat de la raison pratique)."
    },
    { 
        question: "Question n°20 : Quelle est la conception de l'impératif catégorique chez Kant ?",
        answers: [
            "un impératif conditionnel", 
            "un impératif inconditionné", 
            "un impératif hypothétique"
        ], 
        correct: 2,
        explanation: "Pour Kant, l'impératif catégorique est un impératif inconditionné : il commande absolument, sans condition. Il ne dépend pas d'une fin poursuivie (comme l'impératif hypothétique), mais il s'impose à la volonté indépendamment de tout désir. Cette conception de l'impératif catégorique comme inconditionné est au cœur de l'éthique kantienne : la loi morale est catégorique, elle ne souffre aucune exception. Cette conception distingue la morale de la prudence et de l'habileté, qui reposent sur des impératifs hypothétiques. Elle fonde l'idée d'un devoir absolu, qui s'impose à tout être raisonnable."
    },
    { 
        question: "Question n°21 : Quel est le rapport entre la loi morale et l'universalité chez Kant ?",
        answers: [
            "la loi morale est particulière", 
            "la loi morale est universelle", 
            "la loi morale est relative"
        ], 
        correct: 2,
        explanation: "Chez Kant, la loi morale est universelle : elle vaut pour tout être raisonnable, indépendamment des circonstances et des cultures. Cette universalité est exprimée par la première formulation de l'impératif catégorique : « Agis uniquement d'après la maxime grâce à laquelle tu peux vouloir en même temps qu'elle devienne une loi universelle. » Cette conception de l'universalité de la loi morale distingue Kant des éthiques particularistes (Aristote) et des éthiques relativistes (sophistes). Pour Kant, la morale est une, universelle et nécessaire : elle s'impose à tous les êtres raisonnables."
    },
    { 
        question: "Question n°22 : Quelle est la conception du bien chez Kant ?",
        answers: [
            "le bien est ce qui est utile", 
            "le bien est ce que veut la bonne volonté", 
            "le bien est le plaisir"
        ], 
        correct: 2,
        explanation: "Pour Kant, le bien est ce que veut la bonne volonté. La bonne volonté est celle qui agit par devoir, c'est-à-dire par respect pour la loi morale. Ce n'est donc pas le bien qui détermine la bonne volonté (comme dans les éthiques des biens), mais la bonne volonté qui détermine le bien : est bien ce que veut une volonté bonne. Cette conception déontologique de la morale distingue Kant des éthiques téléologiques (Aristote), pour qui le bien est une fin à atteindre. Pour Kant, le bien n'est pas une fin extérieure, mais l'objet de la volonté bonne."
    },
    { 
        question: "Question n°23 : Quel est le rapport entre la raison pratique et la loi morale chez Kant ?",
        answers: [
            "la raison pratique découvre la loi morale", 
            "la raison pratique crée la loi morale", 
            "la raison pratique est indifférente à la loi morale"
        ], 
        correct: 1,
        explanation: "Chez Kant, la raison pratique découvre la loi morale. La loi morale n'est pas une création de la raison, mais un fait de la raison (Faktum der Vernunft) : elle s'impose à la raison comme un principe a priori. La raison pratique n'invente pas la loi morale, elle la reconnaît comme obligatoire. Cette conception de la loi morale comme fait de la raison est au cœur de l'éthique kantienne : la loi morale est un donné de la raison, non une convention ou une création humaine. Cette conception fonde l'universalité et la nécessité de la loi morale."
    },
    { 
        question: "Question n°24 : Quelle est la conception du devoir chez Kant par rapport à l'inclination ?",
        answers: [
            "le devoir est conforme à l'inclination", 
            "le devoir s'oppose à l'inclination", 
            "le devoir est indifférent à l'inclination"
        ], 
        correct: 2,
        explanation: "Chez Kant, le devoir s'oppose à l'inclination. Agir par devoir, c'est agir par respect pour la loi morale, non par inclination sensible. L'action morale est donc celle qui est accomplie par devoir, même si elle est contraire à nos inclinations. Cette conception du devoir comme opposition à l'inclination distingue Kant des éthiques eudémonistes, pour qui l'action morale est conforme au désir naturel de bonheur. Pour Kant, la morale est affaire de raison, non de sentiment : elle exige parfois de sacrifier ses inclinations à la loi morale. Cette conception fonde l'idée d'un devoir absolu, qui s'impose à la volonté."
    },
    { 
        question: "Question n°25 : Quel est le rapport entre la bonne volonté et le devoir chez Kant ?",
        answers: [
            "la bonne volonté agit par devoir", 
            "la bonne volonté agit par inclination", 
            "la bonne volonté agit par intérêt"
        ], 
        correct: 1,
        explanation: "Chez Kant, la bonne volonté agit par devoir. Elle n'agit pas par inclination (comme dans les actions conformes au devoir mais intéressées), ni par intérêt (comme dans les actions prudentielles), mais par respect pour la loi morale. Cette conception de la bonne volonté comme action par devoir est au cœur de l'éthique kantienne : la valeur morale d'une action réside dans l'intention, non dans le résultat. La bonne volonté est bonne en elle-même, indépendamment de ses effets. Cette conception déontologique distingue Kant des éthiques conséquentialistes."
    },
    { 
        question: "Question n°26 : Quelle est la conception de l'action morale chez Kant ?",
        answers: [
            "l'action morale est accomplie par devoir", 
            "l'action morale est accomplie par inclination", 
            "l'action morale est accomplie par intérêt"
        ], 
        correct: 1,
        explanation: "Pour Kant, l'action morale est accomplie par devoir. Elle n'est pas accomplie par inclination (comme les actions conformes au devoir mais intéressées), ni par intérêt (comme les actions prudentielles), mais par respect pour la loi morale. Cette conception de l'action morale comme action par devoir est au cœur de l'éthique kantienne : la moralité d'une action réside dans l'intention, non dans le résultat. Une action accomplie par inclination peut être conforme au devoir, mais elle n'a pas de valeur morale ; seule l'action accomplie par devoir a une valeur morale."
    },
    { 
        question: "Question n°27 : Quel est le rapport entre la loi morale et la raison chez Kant ?",
        answers: [
            "la loi morale est fondée sur la raison", 
            "la loi morale est fondée sur le sentiment", 
            "la loi morale est fondée sur l'expérience"
        ], 
        correct: 1,
        explanation: "Chez Kant, la loi morale est fondée sur la raison. Elle est un principe a priori de la raison pratique, qui s'impose à tout être raisonnable. Cette conception rationaliste de la morale distingue Kant des éthiques sentimentalistes (Hume, Rousseau), pour qui la morale est fondée sur le sentiment, et des éthiques empiristes, pour qui la morale est fondée sur l'expérience. Pour Kant, la morale est affaire de raison : c'est la raison qui détermine ce qui est bien et qui commande à la volonté. Cette conception fonde l'universalité et la nécessité de la loi morale."
    },
    { 
        question: "Question n°28 : Quelle est la conception de la vertu chez Kant ?",
        answers: [
            "la vertu est une habitude", 
            "la vertu est la force de la volonté dans l'accomplissement du devoir", 
            "la vertu est un don de la nature"
        ], 
        correct: 2,
        explanation: "Pour Kant, la vertu est la force de la volonté dans l'accomplissement du devoir. Cette conception de la vertu comme force morale distingue Kant des éthiques des vertus (Aristote), pour qui la vertu est une habitude acquise par l'exercice. Pour Kant, la vertu n'est pas une habitude, mais une force : elle consiste à surmonter les obstacles (inclinations, passions) qui s'opposent à l'accomplissement du devoir. Cette conception de la vertu comme force morale est développée dans la Métaphysique des mœurs. Elle fonde l'idée que la vertu est une lutte, non une disposition naturelle."
    },
    { 
        question: "Question n°29 : Quel est le rapport entre la moralité et la liberté chez Kant ?",
        answers: [
            "la moralité suppose la liberté", 
            "la moralité supprime la liberté", 
            "la moralité est indifférente à la liberté"
        ], 
        correct: 1,
        explanation: "Chez Kant, la moralité suppose la liberté. En effet, la loi morale n'a de sens que pour un être libre : si l'homme n'était pas libre, il ne pourrait pas être soumis à un devoir. La liberté est donc la condition de la moralité (ratio essendi), et la loi morale est la condition de la connaissance de la liberté (ratio cognoscendi). Cette conception du rapport entre moralité et liberté est au cœur de l'éthique kantienne : la liberté est la clé de voûte de tout l'édifice de la raison pratique. Elle fonde l'idée que l'homme est responsable de ses actes."
    },
    { 
        question: "Question n°30 : Quelle est la conception du souverain bien chez Kant ?",
        answers: [
            "le souverain bien est la vertu seule", 
            "le souverain bien est l'union de la vertu et du bonheur", 
            "le souverain bien est le bonheur seul"
        ], 
        correct: 2,
        explanation: "Pour Kant, le souverain bien est l'union de la vertu et du bonheur. La vertu est la condition du bonheur (elle rend digne d'être heureux), mais elle n'est pas le bonheur lui-même. Le souverain bien, qui est l'objet de la raison pratique, est l'union des deux : la vertu et le bonheur proportionné à la vertu. Cette conception du souverain bien est développée dans la Critique de la raison pratique. Elle fonde les postulats de la raison pratique : l'immortalité de l'âme (pour la sainteté) et l'existence de Dieu (pour le bonheur)."
    },
    { 
        question: "Question n°31 : Quel est le rapport entre la loi morale et le devoir chez Kant ?",
        answers: [
            "le devoir est l'obéissance à la loi morale", 
            "le devoir est indépendant de la loi morale", 
            "le devoir s'oppose à la loi morale"
        ], 
        correct: 1,
        explanation: "Chez Kant, le devoir est l'obéissance à la loi morale. Le devoir n'est pas une contrainte extérieure (imposée par la société ou par Dieu), mais l'obéissance à la loi que la volonté se donne à elle-même. Cette conception du devoir comme obéissance à la loi morale est au cœur de l'éthique kantienne : agir par devoir, c'est agir par respect pour la loi morale, non par inclination ou par intérêt. Cette conception du devoir distingue Kant des éthiques eudémonistes et des éthiques théologiques."
    },
    { 
        question: "Question n°32 : Quelle est la conception de l'impératif catégorique chez Kant ?",
        answers: [
            "un impératif universel et nécessaire", 
            "un impératif particulier", 
            "un impératif contingent"
        ], 
        correct: 1,
        explanation: "Pour Kant, l'impératif catégorique est un impératif universel et nécessaire. Il est universel : il vaut pour tout être raisonnable. Il est nécessaire : il s'impose à la volonté indépendamment de toute condition. Cette conception de l'impératif catégorique comme universel et nécessaire est au cœur de l'éthique kantienne : la loi morale est la même pour tous, et elle s'impose absolument. Cette conception distingue la morale de la prudence et de l'habileté, qui reposent sur des impératifs hypothétiques (particuliers et contingents). Elle fonde l'idée d'un devoir absolu."
    },
    { 
        question: "Question n°33 : Quel est le rapport entre la volonté et la loi morale chez Kant ?",
        answers: [
            "la volonté est déterminée par la loi morale", 
            "la volonté est indépendante de la loi morale", 
            "la volonté s'oppose à la loi morale"
        ], 
        correct: 1,
        explanation: "Chez Kant, la volonté est déterminée par la loi morale. La volonté bonne est celle qui est déterminée par la loi morale, c'est-à-dire qui agit par devoir. Cette conception de la volonté comme déterminée par la loi morale distingue Kant des éthiques hédonistes, pour qui la volonté est déterminée par le désir de plaisir. Pour Kant, la volonté morale est déterminée par la raison, non par les inclinations sensibles. Cette conception fonde l'autonomie de la volonté : la volonté se donne à elle-même sa propre loi."
    },
    { 
        question: "Question n°34 : Quelle est la conception de la morale chez Kant ?",
        answers: [
            "une morale déontologique", 
            "une morale téléologique", 
            "une morale eudémoniste"
        ], 
        correct: 1,
        explanation: "Pour Kant, la morale est déontologique : elle est fondée sur le devoir, non sur les conséquences ou sur le bonheur. Cette conception déontologique de la morale distingue Kant des éthiques téléologiques (Aristote), pour qui la morale vise une fin (le bonheur), et des éthiques conséquentialistes (utilitarisme), pour qui la morale se juge aux conséquences. Pour Kant, la moralité d'une action dépend de l'intention, non du résultat. Cette conception fonde l'idée d'un devoir absolu, qui s'impose à la volonté indépendamment de ses effets."
    },
    { 
        question: "Question n°35 : Quel est le rapport entre la raison et la liberté chez Kant ?",
        answers: [
            "la raison est la condition de la liberté", 
            "la raison supprime la liberté", 
            "la raison est indifférente à la liberté"
        ], 
        correct: 1,
        explanation: "Chez Kant, la raison est la condition de la liberté. En effet, la liberté est l'autonomie de la volonté, c'est-à-dire la capacité de la volonté à se donner à elle-même sa propre loi. Or, cette capacité est une capacité de la raison : c'est la raison qui se donne la loi morale. La liberté est donc inséparable de la raison : seul un être raisonnable peut être libre (au sens d'autonome). Cette conception du rapport entre raison et liberté est au cœur de l'éthique kantienne : la liberté est la propriété de la volonté d'être déterminée par la raison. Elle distingue Kant des conceptions de la liberté comme absence de contrainte."
    },
    { 
        question: "Question n°36 : Quelle est la conception du devoir chez Kant par rapport au bonheur ?",
        answers: [
            "le devoir vise le bonheur", 
            "le devoir est indépendant du bonheur", 
            "le devoir s'oppose au bonheur"
        ], 
        correct: 2,
        explanation: "Chez Kant, le devoir est indépendant du bonheur. Agir par devoir, c'est agir par respect pour la loi morale, non par désir de bonheur. Cette conception du devoir comme indépendant du bonheur distingue Kant des éthiques eudémonistes (Aristote, épicuriens), pour qui la morale vise le bonheur. Pour Kant, la morale est affaire de devoir, non de bonheur : on doit agir par devoir, même si cela ne procure pas de bonheur. Cependant, Kant reconnaît que la vertu rend digne du bonheur, et que le souverain bien consiste dans l'union de la vertu et du bonheur."
    },
    { 
        question: "Question n°37 : Quel est le rapport entre la loi morale et la liberté chez Kant ?",
        answers: [
            "la loi morale est la condition de la liberté", 
            "la loi morale supprime la liberté", 
            "la loi morale est indifférente à la liberté"
        ], 
        correct: 1,
        explanation: "Chez Kant, la loi morale est la condition de la connaissance de la liberté. En effet, c'est la loi morale qui nous révèle notre liberté : si nous nous sentons obligés, c'est que nous sommes libres. La liberté est la condition d'existence de la loi morale (ratio essendi), et la loi morale est la condition de connaissance de la liberté (ratio cognoscendi). Cette conception du rapport entre loi morale et liberté est au cœur de l'éthique kantienne : la liberté est la clé de voûte de tout l'édifice de la raison pratique. Elle fonde l'idée que l'homme est responsable de ses actes."
    },
    { 
        question: "Question n°38 : Quelle est la conception de l'autonomie chez Kant ?",
        answers: [
            "l'autonomie est l'obéissance à une loi extérieure", 
            "l'autonomie est la capacité de la volonté à se donner sa propre loi", 
            "l'autonomie est l'absence de loi"
        ], 
        correct: 2,
        explanation: "Pour Kant, l'autonomie est la capacité de la volonté à se donner sa propre loi. Cette conception de l'autonomie est au cœur de l'éthique kantienne : la volonté n'obéit pas à une loi extérieure (hétéronomie), mais à la loi qu'elle se prescrit à elle-même. Cette conception de l'autonomie distingue Kant des éthiques hétéronomes (fondées sur Dieu, la nature ou la société). Elle fonde l'idée que la liberté et la moralité sont inséparables : être libre, c'est obéir à la loi qu'on s'est prescrite ; être moral, c'est agir par devoir, c'est-à-dire par respect pour la loi morale."
    },
    { 
        question: "Question n°39 : Quel est le rapport entre la bonne volonté et la loi morale chez Kant ?",
        answers: [
            "la bonne volonté est conforme à la loi morale", 
            "la bonne volonté s'oppose à la loi morale", 
            "la bonne volonté est indépendante de la loi morale"
        ], 
        correct: 1,
        explanation: "Chez Kant, la bonne volonté est conforme à la loi morale. La bonne volonté est celle qui agit par devoir, c'est-à-dire par respect pour la loi morale. Elle est donc conforme à la loi morale, non parce qu'elle en attend un avantage, mais parce qu'elle la reconnaît comme obligatoire. Cette conception de la bonne volonté comme conformité à la loi morale est au cœur de l'éthique kantienne : la valeur morale réside dans l'intention, non dans le résultat. La bonne volonté est bonne en elle-même, indépendamment de ses effets."
    },
    { 
        question: "Question n°40 : Quelle est la conception de la moralité chez Kant ?",
        answers: [
            "la moralité est une affaire de raison", 
            "la moralité est une affaire de sentiment", 
            "la moralité est une affaire d'expérience"
        ], 
        correct: 1,
        explanation: "Pour Kant, la moralité est une affaire de raison. La loi morale est un principe a priori de la raison pratique, qui s'impose à tout être raisonnable. Cette conception rationaliste de la morale distingue Kant des éthiques sentimentalistes (Hume, Rousseau), pour qui la morale est fondée sur le sentiment, et des éthiques empiristes, pour qui la morale est fondée sur l'expérience. Pour Kant, la morale est affaire de raison : c'est la raison qui détermine ce qui est bien et qui commande à la volonté. Cette conception fonde l'universalité et la nécessité de la loi morale."
    },
    { 
        question: "Question n°41 : Quel est le rapport entre la volonté et la raison chez Kant ?",
        answers: [
            "la volonté est déterminée par la raison", 
            "la volonté est indépendante de la raison", 
            "la volonté s'oppose à la raison"
        ], 
        correct: 1,
        explanation: "Chez Kant, la volonté est déterminée par la raison. La volonté bonne est celle qui est déterminée par la loi morale, c'est-à-dire par la raison pratique. Cette conception de la volonté comme déterminée par la raison distingue Kant des éthiques hédonistes, pour qui la volonté est déterminée par le désir de plaisir. Pour Kant, la volonté morale est déterminée par la raison, non par les inclinations sensibles. Cette conception fonde l'autonomie de la volonté : la volonté se donne à elle-même sa propre loi, qui est la loi de la raison."
    },
    { 
        question: "Question n°42 : Quelle est la conception de la loi morale chez Kant ?",
        answers: [
            "une loi universelle et nécessaire", 
            "une loi particulière et contingente", 
            "une loi relative"
        ], 
        correct: 1,
        explanation: "Pour Kant, la loi morale est universelle et nécessaire. Elle est universelle : elle vaut pour tout être raisonnable. Elle est nécessaire : elle s'impose à la volonté indépendamment de toute condition. Cette conception de la loi morale comme universelle et nécessaire est au cœur de l'éthique kantienne : la loi morale est la même pour tous, et elle s'impose absolument. Cette conception distingue la morale de la prudence et de l'habileté, qui reposent sur des règles particulières et contingentes. Elle fonde l'idée d'un devoir absolu, qui s'impose à tout être raisonnable."
    },
    { 
        question: "Question n°43 : Quel est le rapport entre la liberté et la loi morale chez Kant ?",
        answers: [
            "la liberté est la condition de la loi morale", 
            "la liberté supprime la loi morale", 
            "la liberté est indifférente à la loi morale"
        ], 
        correct: 1,
        explanation: "Chez Kant, la liberté est la condition de la loi morale (ratio essendi). En effet, la loi morale n'a de sens que pour un être libre : si l'homme n'était pas libre, il ne pourrait pas être soumis à un devoir. La liberté est donc la condition d'existence de la loi morale, et la loi morale est la condition de connaissance de la liberté (ratio cognoscendi). Cette conception du rapport entre liberté et loi morale est au cœur de l'éthique kantienne : la liberté est la clé de voûte de tout l'édifice de la raison pratique. Elle fonde l'idée que l'homme est responsable de ses actes."
    },
    { 
        question: "Question n°44 : Quelle est la conception du devoir chez Kant ?",
        answers: [
            "le devoir est l'obéissance à la loi morale par respect", 
            "le devoir est l'obéissance à une autorité extérieure", 
            "le devoir est une illusion"
        ], 
        correct: 1,
        explanation: "Pour Kant, le devoir est l'obéissance à la loi morale par respect. Le devoir n'est pas une contrainte extérieure (imposée par la société ou par Dieu), mais l'obéissance à la loi que la volonté se donne à elle-même. Agir par devoir, c'est agir par respect pour la loi morale, non par inclination ou par intérêt. Cette conception du devoir comme obéissance par respect est au cœur de l'éthique kantienne : la valeur morale réside dans l'intention, non dans le résultat. Cette conception du devoir distingue Kant des éthiques eudémonistes et des éthiques théologiques."
    },
    { 
        question: "Question n°45 : Quel est le rapport entre la raison pratique et la liberté chez Kant ?",
        answers: [
            "la raison pratique est la condition de la liberté", 
            "la raison pratique supprime la liberté", 
            "la raison pratique est indifférente à la liberté"
        ], 
        correct: 1,
        explanation: "Chez Kant, la raison pratique est la condition de la liberté. En effet, la liberté est l'autonomie de la volonté, c'est-à-dire la capacité de la volonté à se donner à elle-même sa propre loi. Or, cette capacité est une capacité de la raison pratique : c'est la raison pratique qui se donne la loi morale. La liberté est donc inséparable de la raison pratique : seul un être raisonnable peut être libre (au sens d'autonome). Cette conception du rapport entre raison pratique et liberté est au cœur de l'éthique kantienne. Elle distingue Kant des conceptions de la liberté comme absence de contrainte."
    },
    { 
        question: "Question n°46 : Quelle est la conception de l'impératif catégorique chez Kant par rapport à la loi morale ?",
        answers: [
            "l'impératif catégorique est l'expression de la loi morale", 
            "l'impératif catégorique s'oppose à la loi morale", 
            "l'impératif catégorique est indépendant de la loi morale"
        ], 
        correct: 1,
        explanation: "Chez Kant, l'impératif catégorique est l'expression de la loi morale. La loi morale est le principe objectif de la moralité ; l'impératif catégorique est la formulation de ce principe pour une volonté imparfaite (comme la volonté humaine). Pour une volonté sainte (comme celle de Dieu), il n'y aurait pas d'impératif, car la volonté serait toujours conforme à la loi morale. Mais pour la volonté humaine, qui peut être tentée par les inclinations, la loi morale s'exprime sous forme d'impératif. Cette distinction entre loi morale et impératif catégorique est importante dans l'éthique kantienne."
    },
    { 
        question: "Question n°47 : Quel est le rapport entre la volonté bonne et le devoir chez Kant ?",
        answers: [
            "la volonté bonne agit par devoir", 
            "la volonté bonne agit par inclination", 
            "la volonté bonne agit par intérêt"
        ], 
        correct: 1,
        explanation: "Chez Kant, la volonté bonne agit par devoir. Elle n'agit pas par inclination (comme dans les actions conformes au devoir mais intéressées), ni par intérêt (comme dans les actions prudentielles), mais par respect pour la loi morale. Cette conception de la volonté bonne comme action par devoir est au cœur de l'éthique kantienne : la valeur morale d'une action réside dans l'intention, non dans le résultat. La volonté bonne est bonne en elle-même, indépendamment de ses effets. Cette conception déontologique distingue Kant des éthiques conséquentialistes."
    },
    { 
        question: "Question n°48 : Quelle est la conception de la morale chez Kant par rapport au devoir ?",
        answers: [
            "la morale est fondée sur le devoir", 
            "la morale est fondée sur le bonheur", 
            "la morale est fondée sur l'intérêt"
        ], 
        correct: 1,
        explanation: "Pour Kant, la morale est fondée sur le devoir. Cette conception déontologique de la morale distingue Kant des éthiques eudémonistes (Aristote, épicuriens), pour qui la morale vise le bonheur, et des éthiques utilitaristes, pour qui la morale vise l'utilité générale. Pour Kant, la morale est affaire de devoir, non de bonheur ou d'intérêt : on doit agir par devoir, même si cela ne procure pas de bonheur ou d'avantage. Cette conception fonde l'idée d'un devoir absolu, qui s'impose à la volonté indépendamment de ses conséquences."
    },
    { 
        question: "Question n°49 : Quel est le rapport entre la liberté et la moralité chez Kant ?",
        answers: [
            "la liberté est la condition de la moralité", 
            "la liberté supprime la moralité", 
            "la liberté est indifférente à la moralité"
        ], 
        correct: 1,
        explanation: "Chez Kant, la liberté est la condition de la moralité. En effet, la loi morale n'a de sens que pour un être libre : si l'homme n'était pas libre, il ne pourrait pas être soumis à un devoir. La liberté est donc la condition d'existence de la moralité (ratio essendi), et la loi morale est la condition de connaissance de la liberté (ratio cognoscendi). Cette conception du rapport entre liberté et moralité est au cœur de l'éthique kantienne : la liberté est la clé de voûte de tout l'édifice de la raison pratique. Elle fonde l'idée que l'homme est responsable de ses actes."
    },
    { 
        question: "Question n°50 : En quoi ce texte de Kant est-il représentatif de sa philosophie morale ?",
        answers: [
            "il montre l'impératif catégorique et l'autonomie de la volonté", 
            "il montre la conception déontologique de la morale", 
            "les deux réponses sont correctes"
        ], 
        correct: 3,
        explanation: "Ce texte de la Fondation de la métaphysique des mœurs est représentatif de la philosophie morale de Kant à plusieurs égards. D'abord, il montre l'impératif catégorique, qui est le principe suprême de la moralité. Ensuite, il montre l'autonomie de la volonté, qui est la capacité de la volonté à se donner sa propre loi. Enfin, il montre la conception déontologique de la morale, pour qui la moralité d'une action dépend de l'intention, non du résultat. Ce texte condense ainsi les thèmes majeurs de l'éthique kantienne : impératif catégorique, autonomie, devoir, bonne volonté, universalité de la loi morale."
    }
];