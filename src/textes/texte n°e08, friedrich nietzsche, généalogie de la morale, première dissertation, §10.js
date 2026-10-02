// ============================================
// DONNÉES GÉNÉRALES
// ============================================

const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Nietzsche";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	source: "Friedrich NIETZSCHE, <em>Généalogie de la morale</em>, Première dissertation, §10, trad. Philippe Choulet, Le Livre de Poche, 2000, pp.45-46.",
	texte: "« [1] La morale des maîtres et la morale des esclaves s'opposent **radicalement**. [2] **D'un côté**, les forts appellent « bon » leur propre mode d'existence. [3] **De l'autre**, les faibles, par ressentiment, qualifient de « mauvais » tout ce qui est fort. [4] **Ainsi**, le jugement de valeur naît **soit** d'une affirmation de soi, **soit** d'une négation de l'autre. [5] **En effet**, la morale des esclaves a besoin, pour exister, de poser un monde extérieur hostile. [6] **Par conséquent**, elle invente le « sujet libre » et le « méchant » pour pouvoir condamner. [7] **Mais** cette condamnation est une vengeance imaginaire. [8] **Car** le ressentiment est impuissant à agir directement. [9] **C'est pourquoi** il crée des valeurs réactives, **telles que** l'altruisme et la pitié. [10] **Or**, ces valeurs nient la vie **alors que** la morale noble l'affirme joyeusement. [11] **Donc**, il faut dépasser la morale pour une évaluation qui dise « oui » à la vie. »"
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    { 
        question: "Question n°1 : Combien de types de morale Nietzsche distingue-t-il ?",
        answers: [
            "un seul type", 
            "deux types : maîtres et esclaves", 
            "trois types"
        ], 
        correct: 2,
        explanation: "Nietzsche affirme : « La morale des maîtres et la morale des esclaves s'opposent radicalement. » Cette distinction entre deux types de morale est au cœur de la Généalogie de la morale. Nietzsche ne croit pas à une morale unique et universelle, mais à une pluralité de morales, qui s'opposent radicalement. La morale des maîtres est celle des forts, qui affirment leurs propres valeurs ; la morale des esclaves est celle des faibles, qui nient les valeurs des forts par ressentiment. Cette distinction est fondamentale pour comprendre la critique nietzschéenne de la morale."
    },
    { 
        question: "Question n°2 : Que font les forts selon Nietzsche ?",
        answers: [
            "ils appellent « bon » leur propre mode d'existence", 
            "ils condamnent les faibles", 
            "ils obéissent à la loi"
        ], 
        correct: 1,
        explanation: "Nietzsche affirme : « les forts appellent « bon » leur propre mode d'existence. » Cette conception de la morale des maîtres est au cœur de la Généalogie de la morale : les forts ne jugent pas en référence à un monde extérieur, mais à partir d'eux-mêmes. Ils appellent « bon » ce qui les caractérise (force, puissance, affirmation de soi) et « mauvais » ce qui est faible. Cette morale est celle de l'affirmation de soi : elle naît d'une surabondance de vie, non d'un manque. Elle est noble, aristocratique, active. Cette conception de la morale des maîtres distingue Nietzsche des conceptions universalistes de la morale (Kant)."
    },
    { 
        question: "Question n°3 : Que font les faibles selon Nietzsche ?",
        answers: [
            "ils appellent « bon » leur propre mode d'existence", 
            "ils qualifient de « mauvais » tout ce qui est fort", 
            "ils obéissent à la loi"
        ], 
        correct: 2,
        explanation: "Nietzsche affirme : « les faibles, par ressentiment, qualifient de « mauvais » tout ce qui est fort. » Cette conception de la morale des esclaves est au cœur de la Généalogie de la morale : les faibles ne jugent pas à partir d'eux-mêmes, mais en réaction aux forts. Ils qualifient de « mauvais » tout ce qui est fort (puissance, affirmation de soi) et de « bon » tout ce qui est faible (humilité, pitié, altruisme). Cette morale est celle du ressentiment : elle naît d'un manque, d'une impuissance. Elle est réactive, servile, négative. Cette conception de la morale des esclaves est la critique nietzschéenne de la morale chrétienne et démocratique."
    },
    { 
        question: "Question n°4 : D'où naît le jugement de valeur selon Nietzsche ?",
        answers: [
            "soit d'une affirmation de soi, soit d'une négation de l'autre", 
            "d'une révélation divine", 
            "d'une loi universelle"
        ], 
        correct: 1,
        explanation: "Nietzsche affirme : « le jugement de valeur naît soit d'une affirmation de soi, soit d'une négation de l'autre. » Cette distinction entre deux origines du jugement de valeur est au cœur de la Généalogie de la morale : la morale des maîtres naît d'une affirmation de soi (les forts se disent « bons »), tandis que la morale des esclaves naît d'une négation de l'autre (les faibles disent « mauvais » les forts). Cette distinction est fondamentale : elle montre que les valeurs ne sont pas universelles mais qu'elles ont une origine historique et psychologique. Nietzsche fait ici une généalogie de la morale, c'est-à-dire une analyse de son origine."
    },
    { 
        question: "Question n°5 : De quoi la morale des esclaves a-t-elle besoin pour exister ?",
        answers: [
            "d'un monde extérieur hostile", 
            "d'une affirmation de soi", 
            "d'une loi divine"
        ], 
        correct: 1,
        explanation: "Nietzsche affirme : « la morale des esclaves a besoin, pour exister, de poser un monde extérieur hostile. » Cette conception de la morale des esclaves est au cœur de la Généalogie de la morale : la morale des esclaves est essentiellement réactive, elle a besoin d'un ennemi pour exister. Elle se définit par opposition aux forts, qu'elle qualifie de « mauvais ». Cette conception de la morale comme réaction est fondamentale : elle montre que la morale des esclaves n'est pas une création positive, mais une réaction négative. Elle est l'expression du ressentiment, c'est-à-dire de l'impuissance qui se transforme en haine."
    },
    { 
        question: "Question n°6 : Qu'invente la morale des esclaves pour pouvoir condamner ?",
        answers: [
            "le « sujet libre » et le « méchant »", 
            "la loi morale", 
            "l'État"
        ], 
        correct: 1,
        explanation: "Nietzsche affirme : « elle invente le « sujet libre » et le « méchant » pour pouvoir condamner. » Cette analyse de l'invention du sujet libre est au cœur de la Généalogie de la morale : les faibles ont inventé la fiction du « sujet libre » pour pouvoir rendre les forts responsables de leur force, et donc les condamner. Si le fort est libre, il est responsable de sa force, et donc « méchant ». Cette invention du sujet libre est une ruse du ressentiment : elle permet aux faibles de condamner les forts sans avoir à les affronter. Cette critique nietzschéenne du sujet libre annonce la critique de la responsabilité morale."
    },
    { 
        question: "Question n°7 : Que sont les valeurs réactives selon Nietzsche ?",
        answers: [
            "des valeurs créées par les forts", 
            "des valeurs créées par le ressentiment", 
            "des valeurs universelles"
        ], 
        correct: 2,
        explanation: "Nietzsche affirme : « il crée des valeurs réactives, telles que l'altruisme et la pitié. » Cette conception des valeurs réactives est au cœur de la Généalogie de la morale : les valeurs réactives sont des valeurs créées par le ressentiment, c'est-à-dire par les faibles. Elles comprennent l'altruisme, la pitié, l'humilité, l'abnégation. Ces valeurs sont réactives car elles sont une réaction contre les valeurs des forts, qu'elles nient. Elles nient la vie, la puissance, l'affirmation de soi. Cette critique nietzschéenne des valeurs réactives est fondamentale : elle montre que la morale dominante (chrétienne, démocratique) est une morale de faibles, qui nient la vie."
    },
    { 
        question: "Question n°8 : Que nient les valeurs réactives selon Nietzsche ?",
        answers: [
            "la vie", 
            "la morale", 
            "la société"
        ], 
        correct: 1,
        explanation: "Nietzsche affirme : « ces valeurs nient la vie alors que la morale noble l'affirme joyeusement. » Cette conception des valeurs réactives comme négation de la vie est au cœur de la Généalogie de la morale : les valeurs réactives (altruisme, pitié, humilité) nient la vie, la puissance, l'affirmation de soi. Elles sont l'expression du ressentiment, c'est-à-dire de l'impuissance qui se transforme en haine. La morale noble, au contraire, affirme la vie, la puissance, la joie. Cette opposition entre négation et affirmation de la vie est fondamentale dans la philosophie de Nietzsche. Elle fonde la critique nietzschéenne de la morale chrétienne et démocratique."
    },
    { 
        question: "Question n°9 : Que faut-il dépasser selon Nietzsche ?",
        answers: [
            "la morale", 
            "la science", 
            "l'art"
        ], 
        correct: 1,
        explanation: "Nietzsche conclut : « il faut dépasser la morale pour une évaluation qui dise « oui » à la vie. » Cette conclusion est au cœur de la philosophie de Nietzsche : il ne s'agit pas de réformer la morale, mais de la dépasser pour une évaluation qui affirme la vie. Cette évaluation au-delà de la morale est celle des forts, des créateurs, des nobles. Elle dit « oui » à la vie, à la puissance, à la joie. Elle est affirmative, non réactive. Cette conception du dépassement de la morale est fondamentale dans la philosophie de Nietzsche : elle fonde l'idée du surhomme, qui crée ses propres valeurs au-delà de la morale établie."
    },
    { 
        question: "Question n°10 : Quelle est la méthode de Nietzsche dans ce passage ?",
        answers: [
            "la généalogie", 
            "la déduction", 
            "l'induction"
        ], 
        correct: 1,
        explanation: "Dans ce passage, Nietzsche utilise sa méthode caractéristique : la généalogie. La généalogie consiste à analyser l'origine des valeurs morales, à dévoiler leur genèse psychologique et historique. Nietzsche ne se contente pas d'analyser les valeurs telles qu'elles se présentent, mais il remonte à leur origine : le ressentiment des faibles, l'affirmation de soi des forts. Cette méthode généalogique est au cœur de la Généalogie de la morale. Elle est une critique des valeurs, qui montre qu'elles ne sont pas universelles mais qu'elles ont une origine historique et psychologique. Cette méthode distingue Nietzsche des philosophes traditionnels, qui prennent les valeurs comme des données."
    },
    { 
        question: "Question n°11 : Quel est le rapport entre ressentiment et morale chez Nietzsche ?",
        answers: [
            "le ressentiment est la source de la morale des esclaves", 
            "le ressentiment est indépendant de la morale", 
            "le ressentiment est la source de la morale des maîtres"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, le ressentiment est la source de la morale des esclaves. Cette conception du ressentiment est au cœur de la Généalogie de la morale : la morale des esclaves naît du ressentiment, c'est-à-dire de l'impuissance qui se transforme en haine. Les faibles, incapables d'agir directement contre les forts, créent des valeurs réactives (altruisme, pitié) pour condamner les forts. Cette morale est donc essentiellement réactive : elle naît d'un manque, d'une impuissance. Cette conception du ressentiment est fondamentale dans la philosophie de Nietzsche : elle fonde la critique de la morale chrétienne et démocratique, qui est une morale de faibles."
    },
    { 
        question: "Question n°12 : Quelle est la conception de la morale chez Nietzsche ?",
        answers: [
            "la morale est unique et universelle", 
            "il y a plusieurs morales qui s'opposent", 
            "la morale est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, il y a plusieurs morales qui s'opposent. Cette conception pluraliste de la morale est au cœur de la Généalogie de la morale : Nietzsche ne croit pas à une morale unique et universelle (comme Kant), mais à une pluralité de morales, qui s'opposent radicalement. La morale des maîtres est celle des forts, qui affirment leurs propres valeurs ; la morale des esclaves est celle des faibles, qui nient les valeurs des forts par ressentiment. Cette conception pluraliste de la morale distingue Nietzsche des philosophes universalistes (Kant) et des philosophes relativistes (sophistes). Pour Nietzsche, les morales sont des créations historiques, non des vérités éternelles."
    },
    { 
        question: "Question n°13 : Quel est le rapport entre force et valeur chez Nietzsche ?",
        answers: [
            "les forts créent leurs propres valeurs", 
            "les forts obéissent à des valeurs extérieures", 
            "les forts n'ont pas de valeurs"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, les forts créent leurs propres valeurs. Cette conception de la morale des maîtres est au cœur de la Généalogie de la morale : les forts ne jugent pas en référence à un monde extérieur, mais à partir d'eux-mêmes. Ils appellent « bon » ce qui les caractérise (force, puissance, affirmation de soi). Cette morale est celle de l'affirmation de soi : elle naît d'une surabondance de vie, non d'un manque. Cette conception de la création des valeurs par les forts est fondamentale dans la philosophie de Nietzsche : elle fonde l'idée du surhomme, qui crée ses propres valeurs au-delà de la morale établie."
    },
    { 
        question: "Question n°14 : Quelle est la conception de la vie chez Nietzsche ?",
        answers: [
            "la vie doit être niée", 
            "la vie doit être affirmée", 
            "la vie est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, la vie doit être affirmée. Cette conception affirmative de la vie est au cœur de la philosophie de Nietzsche : la morale noble affirme joyeusement la vie, tandis que la morale des esclaves la nie. Nietzsche critique la morale chrétienne et démocratique, qui est une morale de la négation de la vie : elle valorise l'altruisme, la pitié, l'humilité, qui sont des valeurs réactives, c'est-à-dire des négations de la vie. Cette conception affirmative de la vie fonde l'idée du surhomme, qui dit « oui » à la vie, à la puissance, à la joie. Elle distingue Nietzsche des philosophies pessimistes (Schopenhauer) et des philosophies ascétiques (christianisme)."
    },
    { 
        question: "Question n°15 : Quel est le rapport entre maîtres et esclaves chez Nietzsche ?",
        answers: [
            "les maîtres et les esclaves s'opposent radicalement", 
            "les maîtres et les esclaves sont complémentaires", 
            "les maîtres et les esclaves sont identiques"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, les maîtres et les esclaves s'opposent radicalement. Cette conception de l'opposition radicale entre maîtres et esclaves est au cœur de la Généalogie de la morale : Nietzsche ne croit pas à une morale unique et universelle, mais à une pluralité de morales, qui s'opposent radicalement. La morale des maîtres est celle des forts, qui affirment leurs propres valeurs ; la morale des esclaves est celle des faibles, qui nient les valeurs des forts par ressentiment. Cette opposition radicale fonde la critique nietzschéenne de la morale chrétienne et démocratique, qui est une morale d'esclaves."
    },
    { 
        question: "Question n°16 : Quelle est la conception du ressentiment chez Nietzsche ?",
        answers: [
            "le ressentiment est une force créatrice", 
            "le ressentiment est une impuissance qui se transforme en haine", 
            "le ressentiment est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, le ressentiment est une impuissance qui se transforme en haine. Cette conception du ressentiment est au cœur de la Généalogie de la morale : les faibles, incapables d'agir directement contre les forts, créent des valeurs réactives (altruisme, pitié) pour condamner les forts. Le ressentiment est donc essentiellement réactif : il naît d'un manque, d'une impuissance. Cette conception du ressentiment est fondamentale dans la philosophie de Nietzsche : elle fonde la critique de la morale chrétienne et démocratique, qui est une morale de faibles, née du ressentiment. Elle distingue Nietzsche des conceptions positives du ressentiment (comme force de revendication)."
    },
    { 
        question: "Question n°17 : Quel est le rapport entre valeurs et vie chez Nietzsche ?",
        answers: [
            "les valeurs peuvent nier ou affirmer la vie", 
            "les valeurs sont indépendantes de la vie", 
            "les valeurs sont toujours affirmatives"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, les valeurs peuvent nier ou affirmer la vie. Cette conception du rapport entre valeurs et vie est au cœur de la Généalogie de la morale : les valeurs réactives (altruisme, pitié) nient la vie ; les valeurs nobles (force, puissance) l'affirment. Cette distinction entre valeurs affirmatives et valeurs négatives fonde la critique nietzschéenne de la morale chrétienne et démocratique, qui est une morale de la négation de la vie. Elle fonde aussi l'idée du surhomme, qui crée des valeurs affirmatives, qui disent « oui » à la vie. Cette conception distingue Nietzsche des philosophies qui séparent les valeurs de la vie (Kant)."
    },
    { 
        question: "Question n°18 : Quelle est la conception du sujet chez Nietzsche ?",
        answers: [
            "le sujet est une substance pensante", 
            "le sujet libre est une invention du ressentiment", 
            "le sujet est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, le sujet libre est une invention du ressentiment. Cette conception critique du sujet est au cœur de la Généalogie de la morale : les faibles ont inventé la fiction du « sujet libre » pour pouvoir rendre les forts responsables de leur force, et donc les condamner. Si le fort est libre, il est responsable de sa force, et donc « méchant ». Cette invention du sujet libre est une ruse du ressentiment : elle permet aux faibles de condamner les forts sans avoir à les affronter. Cette critique nietzschéenne du sujet libre annonce la critique de la responsabilité morale et de la philosophie du sujet (Descartes, Kant)."
    },
    { 
        question: "Question n°19 : Quel est le rapport entre la morale noble et la joie chez Nietzsche ?",
        answers: [
            "la morale noble affirme joyeusement la vie", 
            "la morale noble nie la vie", 
            "la morale noble est indifférente à la vie"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, la morale noble affirme joyeusement la vie. Cette conception de la morale noble est au cœur de la Généalogie de la morale : la morale des maîtres est celle de l'affirmation de soi, de la puissance, de la joie. Elle naît d'une surabondance de vie, non d'un manque. Cette morale affirmative contraste avec la morale des esclaves, qui nie la vie et qui naît du ressentiment. Cette conception de la morale noble comme affirmation joyeuse de la vie est fondamentale dans la philosophie de Nietzsche : elle fonde l'idée du surhomme, qui dit « oui » à la vie, à la puissance, à la joie."
    },
    { 
        question: "Question n°20 : Quelle est la conception de la morale des maîtres chez Nietzsche ?",
        answers: [
            "une morale de l'affirmation de soi", 
            "une morale de la négation de soi", 
            "une morale de l'obéissance"
        ], 
        correct: 1,
        explanation: "Pour Nietzsche, la morale des maîtres est une morale de l'affirmation de soi. Cette conception de la morale des maîtres est au cœur de la Généalogie de la morale : les forts ne jugent pas en référence à un monde extérieur, mais à partir d'eux-mêmes. Ils appellent « bon » ce qui les caractérise (force, puissance, affirmation de soi). Cette morale est celle de l'affirmation de soi : elle naît d'une surabondance de vie, non d'un manque. Elle est noble, aristocratique, active. Cette conception de la morale des maîtres distingue Nietzsche des conceptions universalistes de la morale (Kant)."
    },
    { 
        question: "Question n°21 : Quel est le rapport entre la morale des esclaves et la vengeance chez Nietzsche ?",
        answers: [
            "la morale des esclaves est une vengeance imaginaire", 
            "la morale des esclaves est une vengeance réelle", 
            "la morale des esclaves est indépendante de la vengeance"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, la morale des esclaves est une vengeance imaginaire. Cette conception de la morale des esclaves est au cœur de la Généalogie de la morale : les faibles, incapables d'agir directement contre les forts, se vengent imaginairement en les condamnant. Ils inventent le « sujet libre » et le « méchant » pour pouvoir condamner les forts. Cette vengeance imaginaire est une ruse du ressentiment : elle permet aux faibles de condamner les forts sans avoir à les affronter. Cette conception de la morale des esclaves comme vengeance imaginaire est fondamentale dans la critique nietzschéenne de la morale chrétienne et démocratique."
    },
    { 
        question: "Question n°22 : Quelle est la conception du bon chez Nietzsche ?",
        answers: [
            "le bon est ce qui est utile", 
            "le bon est ce que les forts appellent ainsi", 
            "le bon est une valeur universelle"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, le bon est ce que les forts appellent ainsi. Cette conception du bon est au cœur de la Généalogie de la morale : les forts ne jugent pas en référence à un monde extérieur, mais à partir d'eux-mêmes. Ils appellent « bon » ce qui les caractérise (force, puissance, affirmation de soi). Cette conception du bon comme création des forts est fondamentale dans la philosophie de Nietzsche : elle montre que les valeurs ne sont pas universelles mais qu'elles sont créées par ceux qui ont la puissance de les imposer. Cette conception distingue Nietzsche des philosophes universalistes (Kant, Platon), pour qui le bien est une valeur objective."
    },
    { 
        question: "Question n°23 : Quel est le rapport entre la morale et l'histoire chez Nietzsche ?",
        answers: [
            "la morale est éternelle", 
            "la morale a une histoire", 
            "la morale est indépendante de l'histoire"
        ], 
        correct: 2,
        explanation: "Chez Nietzsche, la morale a une histoire. Cette conception historique de la morale est au cœur de la Généalogie de la morale : Nietzsche ne croit pas à une morale éternelle et universelle, mais à une morale qui a une origine historique et psychologique. La morale des maîtres et la morale des esclaves sont des créations historiques, qui sont apparues à un moment donné. Cette conception généalogique de la morale distingue Nietzsche des philosophes qui prennent la morale comme une donnée éternelle (Kant, Platon). Pour Nietzsche, la morale est une création humaine, qui peut être critiquée et dépassée."
    },
    { 
        question: "Question n°24 : Quelle est la conception de l'altruisme chez Nietzsche ?",
        answers: [
            "l'altruisme est une valeur noble", 
            "l'altruisme est une valeur réactive", 
            "l'altruisme est une valeur universelle"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, l'altruisme est une valeur réactive. Cette conception critique de l'altruisme est au cœur de la Généalogie de la morale : l'altruisme est une valeur créée par le ressentiment, c'est-à-dire par les faibles. Il est une négation de la vie, de la puissance, de l'affirmation de soi. Cette critique nietzschéenne de l'altruisme distingue Nietzsche des philosophes qui valorisent l'altruisme (chrétiens, utilitaristes, Rousseau). Pour Nietzsche, l'altruisme est une morale d'esclaves, qui nient la vie au nom d'une prétendue bonté. Cette critique est au cœur de la philosophie de Nietzsche, qui valorise au contraire l'égoïsme noble, l'affirmation de soi."
    },
    { 
        question: "Question n°25 : Quel est le rapport entre la pitié et la vie chez Nietzsche ?",
        answers: [
            "la pitié affirme la vie", 
            "la pitié nie la vie", 
            "la pitié est indifférente à la vie"
        ], 
        correct: 2,
        explanation: "Chez Nietzsche, la pitié nie la vie. Cette conception critique de la pitié est au cœur de la Généalogie de la morale : la pitié est une valeur réactive, créée par le ressentiment. Elle est une négation de la vie, de la puissance, de l'affirmation de soi. Cette critique nietzschéenne de la pitié distingue Nietzsche des philosophes qui valorisent la pitié (Schopenhauer, chrétiens, Rousseau). Pour Nietzsche, la pitié est une morale d'esclaves, qui nient la vie au nom d'une prétendue bonté. Cette critique est au cœur de la philosophie de Nietzsche, qui valorise au contraire la joie, la puissance, l'affirmation de soi."
    },
    { 
        question: "Question n°26 : Quelle est la conception de la force chez Nietzsche ?",
        answers: [
            "la force est une valeur noble", 
            "la force est une valeur réactive", 
            "la force est une illusion"
        ], 
        correct: 1,
        explanation: "Pour Nietzsche, la force est une valeur noble. Cette conception de la force est au cœur de la Généalogie de la morale : les forts appellent « bon » ce qui les caractérise, c'est-à-dire la force, la puissance, l'affirmation de soi. Cette morale est celle de l'affirmation de soi : elle naît d'une surabondance de vie, non d'un manque. Elle est noble, aristocratique, active. Cette conception de la force comme valeur noble distingue Nietzsche des philosophes qui condamnent la force (chrétiens, Rousseau, Kant). Pour Nietzsche, la force est une valeur affirmative, qui dit « oui » à la vie. Cette conception est au cœur de la philosophie de Nietzsche, qui valorise la puissance, la création, l'affirmation de soi."
    },
    { 
        question: "Question n°27 : Quel est le rapport entre la morale et la puissance chez Nietzsche ?",
        answers: [
            "la morale est indépendante de la puissance", 
            "la morale est une expression de la puissance ou de l'impuissance", 
            "la morale s'oppose à la puissance"
        ], 
        correct: 2,
        explanation: "Chez Nietzsche, la morale est une expression de la puissance ou de l'impuissance. Cette conception généalogique de la morale est au cœur de la Généalogie de la morale : la morale des maîtres est une expression de la puissance (les forts affirment leurs valeurs) ; la morale des esclaves est une expression de l'impuissance (les faibles nient les valeurs des forts par ressentiment). Cette conception de la morale comme expression de la puissance ou de l'impuissance est fondamentale dans la philosophie de Nietzsche : elle montre que les valeurs ne sont pas universelles, mais qu'elles sont l'expression d'une volonté de puissance. Cette conception distingue Nietzsche des philosophes qui séparent la morale de la puissance (Kant)."
    },
    { 
        question: "Question n°28 : Quelle est la conception de la volonté de puissance chez Nietzsche ?",
        answers: [
            "la volonté de puissance est le désir de dominer", 
            "la volonté de puissance est la force créatrice de valeurs", 
            "la volonté de puissance est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, la volonté de puissance est la force créatrice de valeurs. Cette conception de la volonté de puissance est au cœur de la philosophie de Nietzsche : la volonté de puissance n'est pas simplement le désir de dominer (conception réductrice), mais la force créatrice qui produit des valeurs. Les forts créent des valeurs affirmatives (force, puissance, joie) ; les faibles créent des valeurs réactives (altruisme, pitié). Cette conception de la volonté de puissance comme force créatrice est fondamentale dans la philosophie de Nietzsche : elle fonde l'idée du surhomme, qui crée ses propres valeurs. Elle distingue Nietzsche des philosophes qui réduisent la volonté à un désir de conservation (Schopenhauer)."
    },
    { 
        question: "Question n°29 : Quel est le rapport entre la morale des maîtres et l'activité chez Nietzsche ?",
        answers: [
            "la morale des maîtres est active", 
            "la morale des maîtres est réactive", 
            "la morale des maîtres est passive"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, la morale des maîtres est active. Cette conception de la morale des maîtres est au cœur de la Généalogie de la morale : les forts ne jugent pas en réaction à un monde extérieur, mais à partir d'eux-mêmes. Ils appellent « bon » ce qui les caractérise (force, puissance, affirmation de soi). Cette morale est celle de l'affirmation de soi : elle naît d'une surabondance de vie, non d'un manque. Elle est noble, aristocratique, active. Cette conception de la morale des maîtres comme active contraste avec la morale des esclaves, qui est réactive (elle naît du ressentiment). Cette distinction entre morale active et morale réactive est fondamentale dans la Généalogie de la morale."
    },
    { 
        question: "Question n°30 : Quelle est la conception de la morale des esclaves chez Nietzsche ?",
        answers: [
            "une morale de l'affirmation de soi", 
            "une morale de la négation de l'autre", 
            "une morale de l'obéissance"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, la morale des esclaves est une morale de la négation de l'autre. Cette conception de la morale des esclaves est au cœur de la Généalogie de la morale : les faibles ne jugent pas à partir d'eux-mêmes, mais en réaction aux forts. Ils qualifient de « mauvais » tout ce qui est fort (puissance, affirmation de soi) et de « bon » tout ce qui est faible (humilité, pitié, altruisme). Cette morale est celle du ressentiment : elle naît d'un manque, d'une impuissance. Elle est réactive, servile, négative. Cette conception de la morale des esclaves est la critique nietzschéenne de la morale chrétienne et démocratique."
    },
    { 
        question: "Question n°31 : Quel est le rapport entre la morale et la création chez Nietzsche ?",
        answers: [
            "la morale est une création humaine", 
            "la morale est une donnée divine", 
            "la morale est une illusion"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, la morale est une création humaine. Cette conception de la morale est au cœur de la Généalogie de la morale : Nietzsche ne croit pas à une morale éternelle et universelle, mais à une morale qui est créée par les hommes. La morale des maîtres et la morale des esclaves sont des créations humaines, qui sont apparues à un moment donné. Cette conception généalogique de la morale distingue Nietzsche des philosophes qui prennent la morale comme une donnée éternelle (Kant, Platon) ou divine (chrétiens). Pour Nietzsche, la morale est une création humaine, qui peut être critiquée et dépassée. Cette conception fonde l'idée du surhomme, qui crée ses propres valeurs."
    },
    { 
        question: "Question n°32 : Quelle est la conception de la bonté chez Nietzsche ?",
        answers: [
            "la bonté est une valeur noble", 
            "la bonté est une valeur réactive", 
            "la bonté est une valeur universelle"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, la bonté est une valeur réactive. Cette conception critique de la bonté est au cœur de la Généalogie de la morale : la bonté, telle qu'elle est comprise par la morale chrétienne et démocratique (altruisme, pitié, humilité), est une valeur créée par le ressentiment. Elle est une négation de la vie, de la puissance, de l'affirmation de soi. Cette critique nietzschéenne de la bonté distingue Nietzsche des philosophes qui valorisent la bonté (chrétiens, Rousseau, Kant). Pour Nietzsche, la bonté est une morale d'esclaves, qui nient la vie au nom d'une prétendue bonté. Cette critique est au cœur de la philosophie de Nietzsche, qui valorise au contraire la force, la puissance, l'affirmation de soi."
    },
    { 
        question: "Question n°33 : Quel est le rapport entre la morale et la santé chez Nietzsche ?",
        answers: [
            "la morale des maîtres est saine, la morale des esclaves est malade", 
            "la morale des maîtres est malade, la morale des esclaves est saine", 
            "la morale est indifférente à la santé"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, la morale des maîtres est saine, la morale des esclaves est malade. Cette conception médicale de la morale est au cœur de la Généalogie de la morale : Nietzsche analyse les morales comme des symptômes de santé ou de maladie. La morale des maîtres est saine car elle naît d'une surabondance de vie, d'une affirmation de soi. La morale des esclaves est malade car elle naît du ressentiment, d'une impuissance qui se transforme en haine. Cette conception médicale de la morale est fondamentale dans la philosophie de Nietzsche : elle fonde la critique de la morale chrétienne et démocratique, qui est une morale de malades. Elle distingue Nietzsche des philosophes qui analysent la morale en termes de bien et de mal."
    },
    { 
        question: "Question n°34 : Quelle est la conception de la noblesse chez Nietzsche ?",
        answers: [
            "la noblesse est une valeur réactive", 
            "la noblesse est une valeur active", 
            "la noblesse est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, la noblesse est une valeur active. Cette conception de la noblesse est au cœur de la Généalogie de la morale : les nobles (les maîtres, les forts) ne jugent pas en réaction à un monde extérieur, mais à partir d'eux-mêmes. Ils appellent « bon » ce qui les caractérise (force, puissance, affirmation de soi). Cette morale est celle de l'affirmation de soi : elle naît d'une surabondance de vie, non d'un manque. Elle est noble, aristocratique, active. Cette conception de la noblesse comme valeur active contraste avec la morale des esclaves, qui est réactive (elle naît du ressentiment). Cette distinction entre noblesse et servilité est fondamentale dans la Généalogie de la morale."
    },
    { 
        question: "Question n°35 : Quel est le rapport entre la morale et la joie chez Nietzsche ?",
        answers: [
            "la morale des maîtres affirme la joie", 
            "la morale des esclaves affirme la joie", 
            "la morale est indifférente à la joie"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, la morale des maîtres affirme la joie. Cette conception de la morale des maîtres est au cœur de la Généalogie de la morale : la morale des maîtres est celle de l'affirmation de soi, de la puissance, de la joie. Elle naît d'une surabondance de vie, non d'un manque. Cette morale affirmative contraste avec la morale des esclaves, qui nie la vie et qui naît du ressentiment. Cette conception de la morale des maîtres comme affirmation joyeuse de la vie est fondamentale dans la philosophie de Nietzsche : elle fonde l'idée du surhomme, qui dit « oui » à la vie, à la puissance, à la joie. Elle distingue Nietzsche des philosophies pessimistes (Schopenhauer)."
    },
    { 
        question: "Question n°36 : Quelle est la conception de la conscience chez Nietzsche ?",
        answers: [
            "la conscience est une réalité transparente", 
            "la conscience est un symptôme de la morale des esclaves", 
            "la conscience est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, la conscience est un symptôme de la morale des esclaves. Cette conception critique de la conscience est au cœur de la Généalogie de la morale : la conscience morale (le sentiment de culpabilité, le remords) est une invention du ressentiment. Les faibles, incapables d'agir directement contre les forts, intériorisent leur agressivité et la retournent contre eux-mêmes : c'est la mauvaise conscience. Cette conception critique de la conscience distingue Nietzsche des philosophes qui font de la conscience le fondement de la morale (Kant, Rousseau). Pour Nietzsche, la conscience morale est une maladie, non une donnée naturelle. Cette critique est au cœur de la philosophie de Nietzsche, qui valorise l'innocence du devenir."
    },
    { 
        question: "Question n°37 : Quel est le rapport entre la morale et la vérité chez Nietzsche ?",
        answers: [
            "la morale est une vérité éternelle", 
            "la morale est une illusion utile", 
            "la morale est indépendante de la vérité"
        ], 
        correct: 2,
        explanation: "Chez Nietzsche, la morale est une illusion utile. Cette conception critique de la morale est au cœur de la Généalogie de la morale : Nietzsche ne croit pas à une morale vraie et universelle, mais à une morale qui est une création humaine, une illusion utile à la vie. La morale des maîtres et la morale des esclaves sont des illusions, qui ont une fonction : affirmer ou nier la vie. Cette conception pragmatique de la morale distingue Nietzsche des philosophes qui cherchent une morale vraie (Kant, Platon). Pour Nietzsche, la morale est une perspective, non une vérité. Cette conception perspectiviste est au cœur de la philosophie de Nietzsche."
    },
    { 
        question: "Question n°38 : Quelle est la conception de la faiblesse chez Nietzsche ?",
        answers: [
            "la faiblesse est une valeur noble", 
            "la faiblesse est une valeur réactive", 
            "la faiblesse est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, la faiblesse est une valeur réactive. Cette conception critique de la faiblesse est au cœur de la Généalogie de la morale : les faibles n'ont pas de valeurs propres, ils réagissent aux valeurs des forts en les niant. Ils qualifient de « mauvais » tout ce qui est fort et de « bon » tout ce qui est faible. Cette morale est celle du ressentiment : elle naît d'un manque, d'une impuissance. Elle est réactive, servile, négative. Cette conception de la faiblesse comme valeur réactive est la critique nietzschéenne de la morale chrétienne et démocratique, qui valorise la faiblesse (humilité, pitié, altruisme)."
    },
    { 
        question: "Question n°39 : Quel est le rapport entre la morale et la volonté chez Nietzsche ?",
        answers: [
            "la morale est une expression de la volonté de puissance", 
            "la morale est indépendante de la volonté", 
            "la morale s'oppose à la volonté"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, la morale est une expression de la volonté de puissance. Cette conception généalogique de la morale est au cœur de la Généalogie de la morale : la morale des maîtres est une expression de la volonté de puissance affirmative (les forts affirment leurs valeurs) ; la morale des esclaves est une expression de la volonté de puissance réactive (les faibles nient les valeurs des forts par ressentiment). Cette conception de la morale comme expression de la volonté de puissance est fondamentale dans la philosophie de Nietzsche : elle montre que les valeurs ne sont pas universelles, mais qu'elles sont l'expression d'une volonté de puissance. Cette conception distingue Nietzsche des philosophes qui séparent la morale de la volonté (Kant)."
    },
    { 
        question: "Question n°40 : Quelle est la conception de la morale noble chez Nietzsche ?",
        answers: [
            "une morale de l'affirmation de soi", 
            "une morale de la négation de soi", 
            "une morale de l'obéissance"
        ], 
        correct: 1,
        explanation: "Pour Nietzsche, la morale noble est une morale de l'affirmation de soi. Cette conception de la morale noble est au cœur de la Généalogie de la morale : les nobles (les maîtres, les forts) ne jugent pas en réaction à un monde extérieur, mais à partir d'eux-mêmes. Ils appellent « bon » ce qui les caractérise (force, puissance, affirmation de soi). Cette morale est celle de l'affirmation de soi : elle naît d'une surabondance de vie, non d'un manque. Elle est noble, aristocratique, active. Cette conception de la morale noble distingue Nietzsche des conceptions universalistes de la morale (Kant)."
    },
    { 
        question: "Question n°41 : Quel est le rapport entre la morale et la maladie chez Nietzsche ?",
        answers: [
            "la morale des esclaves est une maladie", 
            "la morale des maîtres est une maladie", 
            "la morale est indifférente à la maladie"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, la morale des esclaves est une maladie. Cette conception médicale de la morale est au cœur de la Généalogie de la morale : Nietzsche analyse les morales comme des symptômes de santé ou de maladie. La morale des esclaves est malade car elle naît du ressentiment, d'une impuissance qui se transforme en haine. Elle est une négation de la vie, une fuite devant la réalité. Cette conception médicale de la morale est fondamentale dans la philosophie de Nietzsche : elle fonde la critique de la morale chrétienne et démocratique, qui est une morale de malades. Elle distingue Nietzsche des philosophes qui analysent la morale en termes de bien et de mal."
    },
    { 
        question: "Question n°42 : Quelle est la conception de l'égoïsme chez Nietzsche ?",
        answers: [
            "l'égoïsme est une valeur réactive", 
            "l'égoïsme est une valeur noble", 
            "l'égoïsme est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, l'égoïsme est une valeur noble. Cette conception de l'égoïsme est au cœur de la Généalogie de la morale : l'égoïsme des forts est une affirmation de soi, une surabondance de vie. Il n'est pas le contraire de l'altruisme (qui est une valeur réactive), mais une expression de la puissance. Cette conception de l'égoïsme comme valeur noble distingue Nietzsche des philosophes qui condamnent l'égoïsme (chrétiens, Rousseau, Kant). Pour Nietzsche, l'égoïsme noble est une vertu, une affirmation de la vie. Cette conception est au cœur de la philosophie de Nietzsche, qui valorise l'affirmation de soi, la puissance, la création."
    },
    { 
        question: "Question n°43 : Quel est le rapport entre la morale et la puissance chez Nietzsche ?",
        answers: [
            "la morale des maîtres est une expression de la puissance", 
            "la morale des maîtres est une expression de l'impuissance", 
            "la morale est indépendante de la puissance"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, la morale des maîtres est une expression de la puissance. Cette conception généalogique de la morale est au cœur de la Généalogie de la morale : la morale des maîtres est celle de l'affirmation de soi, de la puissance, de la joie. Elle naît d'une surabondance de vie, non d'un manque. Cette morale affirmative contraste avec la morale des esclaves, qui est une expression de l'impuissance (elle naît du ressentiment). Cette conception de la morale comme expression de la puissance ou de l'impuissance est fondamentale dans la philosophie de Nietzsche : elle montre que les valeurs ne sont pas universelles, mais qu'elles sont l'expression d'une volonté de puissance."
    },
    { 
        question: "Question n°44 : Quelle est la conception de la vie chez Nietzsche par rapport à la morale ?",
        answers: [
            "la morale peut affirmer ou nier la vie", 
            "la morale affirme toujours la vie", 
            "la morale nie toujours la vie"
        ], 
        correct: 1,
        explanation: "Pour Nietzsche, la morale peut affirmer ou nier la vie. Cette conception du rapport entre morale et vie est au cœur de la Généalogie de la morale : la morale des maîtres affirme la vie (elle naît d'une surabondance de vie) ; la morale des esclaves nie la vie (elle naît du ressentiment). Cette distinction entre morales affirmatives et morales négatives fonde la critique nietzschéenne de la morale chrétienne et démocratique, qui est une morale de la négation de la vie. Elle fonde aussi l'idée du surhomme, qui crée des valeurs affirmatives, qui disent « oui » à la vie. Cette conception distingue Nietzsche des philosophies qui séparent la morale de la vie (Kant)."
    },
    { 
        question: "Question n°45 : Quel est le rapport entre la morale et le corps chez Nietzsche ?",
        answers: [
            "la morale est une expression du corps", 
            "la morale est indépendante du corps", 
            "la morale s'oppose au corps"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, la morale est une expression du corps. Cette conception corporelle de la morale est au cœur de la Généalogie de la morale : Nietzsche analyse les morales comme des symptômes de la santé ou de la maladie du corps. La morale des maîtres est l'expression d'un corps sain, d'une surabondance de vie ; la morale des esclaves est l'expression d'un corps malade, d'une impuissance. Cette conception corporelle de la morale est fondamentale dans la philosophie de Nietzsche : elle fonde la critique de la morale chrétienne et démocratique, qui est une morale de malades. Elle distingue Nietzsche des philosophes qui séparent la morale du corps (Kant, Platon)."
    },
    { 
        question: "Question n°46 : Quelle est la conception du bonheur chez Nietzsche ?",
        answers: [
            "le bonheur est une valeur réactive", 
            "le bonheur est une valeur noble", 
            "le bonheur est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, le bonheur est une valeur noble. Cette conception du bonheur est au cœur de la Généalogie de la morale : le bonheur des forts est une affirmation de soi, une surabondance de vie. Il n'est pas le contraire de la souffrance (qui est une valeur réactive), mais une expression de la puissance. Cette conception du bonheur comme valeur noble distingue Nietzsche des philosophes qui font du bonheur l'absence de souffrance (épicuriens, utilitaristes). Pour Nietzsche, le bonheur noble est une vertu, une affirmation de la vie. Cette conception est au cœur de la philosophie de Nietzsche, qui valorise l'affirmation de soi, la puissance, la création."
    },
    { 
        question: "Question n°47 : Quel est le rapport entre la morale et l'histoire chez Nietzsche ?",
        answers: [
            "la morale a une histoire", 
            "la morale est éternelle", 
            "la morale est indépendante de l'histoire"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, la morale a une histoire. Cette conception historique de la morale est au cœur de la Généalogie de la morale : Nietzsche ne croit pas à une morale éternelle et universelle, mais à une morale qui a une origine historique et psychologique. La morale des maîtres et la morale des esclaves sont des créations historiques, qui sont apparues à un moment donné. Cette conception généalogique de la morale distingue Nietzsche des philosophes qui prennent la morale comme une donnée éternelle (Kant, Platon). Pour Nietzsche, la morale est une création humaine, qui peut être critiquée et dépassée."
    },
    { 
        question: "Question n°48 : Quelle est la conception de la souffrance chez Nietzsche ?",
        answers: [
            "la souffrance est une valeur noble", 
            "la souffrance est une valeur réactive", 
            "la souffrance est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, la souffrance est une valeur réactive. Cette conception critique de la souffrance est au cœur de la Généalogie de la morale : la valorisation de la souffrance (ascétisme, martyr) est une valeur créée par le ressentiment. Elle est une négation de la vie, de la puissance, de l'affirmation de soi. Cette critique nietzschéenne de la souffrance distingue Nietzsche des philosophes qui valorisent la souffrance (chrétiens, Schopenhauer). Pour Nietzsche, la souffrance n'est pas une valeur en soi : elle peut être surmontée par l'affirmation de la vie. Cette conception est au cœur de la philosophie de Nietzsche, qui valorise la joie, la puissance, l'affirmation de soi."
    },
    { 
        question: "Question n°49 : Quel est le rapport entre la morale et la création de valeurs chez Nietzsche ?",
        answers: [
            "la morale est une création de valeurs", 
            "la morale est une donnée éternelle", 
            "la morale est une illusion"
        ], 
        correct: 1,
        explanation: "Chez Nietzsche, la morale est une création de valeurs. Cette conception créatrice de la morale est au cœur de la Généalogie de la morale : la morale des maîtres et la morale des esclaves sont des créations de valeurs, qui sont apparues à un moment donné. Cette conception généalogique de la morale distingue Nietzsche des philosophes qui prennent la morale comme une donnée éternelle (Kant, Platon) ou divine (chrétiens). Pour Nietzsche, la morale est une création humaine, qui peut être critiquée et dépassée. Cette conception fonde l'idée du surhomme, qui crée ses propres valeurs. Elle est au cœur de la philosophie de Nietzsche, qui valorise la création, la puissance, l'affirmation de soi."
    },
    { 
        question: "Question n°50 : En quoi ce texte de Nietzsche est-il représentatif de sa philosophie ?",
        answers: [
            "il montre la distinction entre morale des maîtres et morale des esclaves", 
            "il montre la critique du ressentiment et des valeurs réactives", 
            "les deux réponses sont correctes"
        ], 
        correct: 3,
        explanation: "Ce texte de la Généalogie de la morale est représentatif de la philosophie de Nietzsche à plusieurs égards. D'abord, il montre la distinction entre morale des maîtres et morale des esclaves, qui est au cœur de la critique nietzschéenne de la morale. Ensuite, il montre la critique du ressentiment et des valeurs réactives (altruisme, pitié), qui nient la vie. Enfin, il montre l'idée du dépassement de la morale pour une évaluation qui dit « oui » à la vie, qui est au cœur de la philosophie de Nietzsche. Ce texte condense ainsi les thèmes majeurs de la Généalogie de la morale : opposition maîtres/esclaves, ressentiment, valeurs réactives, affirmation de la vie, dépassement de la morale."
    }
];