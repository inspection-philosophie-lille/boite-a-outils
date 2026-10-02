// ============================================
// DONNÉES GÉNÉRALES
// ============================================

const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Descartes";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	source: "René DESCARTES, <em>Discours de la méthode</em>, 4e partie, in <em>Œuvres et Lettres</em>, éd. André Bridoux, Bibliothèque de la Pléiade, Gallimard, 1953, pp.147-148.",
	texte: "« [1] Je pris garde que, **pendant que** je voulais **ainsi** penser que tout était faux, il fallait nécessairement que moi, qui le pensais, fusse quelque chose. [2] Et remarquant que cette vérité : « je pense, **donc** je suis » était si ferme et si assurée, je jugeai que je pouvais la recevoir sans scrupule pour le premier principe de la philosophie. [3] **Ensuite**, examinant avec attention ce que j'étais, je vis que je pouvais feindre que je n'avais aucun corps et qu'il n'y avait aucun monde ni aucun lieu où je fusse ; **mais** que je ne pouvais pas feindre pour cela que je n'étais point. [4] **Au contraire**, de cela même que je pensais à douter de la vérité des autres choses, il suivait **très évidemment** et **très certainement** que j'étais. [5] **Tandis que**, **si** j'eusse **seulement** cessé de penser, **bien que** tout le reste de ce que j'avais imaginé eût été vrai, je n'avais aucune raison de croire que j'eusse été. [6] **Ainsi** je connus que j'étais une substance dont toute l'essence ou la nature n'est que de penser. [7] **Par conséquent**, ce moi – **c'est-à-dire** l'âme – est **entièrement** distinct du corps. »"
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    { 
        question: "Question n°1 : Que découvre Descartes en doutant de tout ?",
        answers: [
            "que rien n'est vrai", 
            "que lui qui pense doit être quelque chose", 
            "que le monde n'existe pas"
        ], 
        correct: 2,
        explanation: "Descartes affirme : « pendant que je voulais ainsi penser que tout était faux, il fallait nécessairement que moi, qui le pensais, fusse quelque chose. » Cette découverte est le point de départ de la métaphysique cartésienne. Le doute hyperbolique, qui remet en question toutes les croyances, ne peut pas se retourner contre le sujet qui doute : pour douter, il faut être. Ainsi, le doute lui-même révèle une certitude indubitable : l'existence du sujet pensant. C'est le fameux cogito ergo sum, première vérité indubitable."
    },
    { 
        question: "Question n°2 : Quelle est la première vérité indubitable selon Descartes ?",
        answers: [
            "Dieu existe", 
            "« Je pense, donc je suis »", 
            "Le monde existe"
        ], 
        correct: 2,
        explanation: "Descartes affirme : « cette vérité : « je pense, donc je suis » était si ferme et si assurée, je jugeai que je pouvais la recevoir sans scrupule pour le premier principe de la philosophie. » Cette vérité est indubitable car elle résiste au doute le plus radical : même si tout est faux, il faut que je sois pour penser que tout est faux. Elle est le fondement sur lequel Descartes reconstruira tout le savoir. Le cogito est ainsi le premier principe de la philosophie, la première certitude qui échappe au doute."
    },
    { 
        question: "Question n°3 : Pourquoi le cogito est-il indubitable ?",
        answers: [
            "parce qu'il est démontré par la science", 
            "parce que même en doutant de tout, il faut être pour douter", 
            "parce qu'il est révélé par Dieu"
        ], 
        correct: 2,
        explanation: "Descartes explique : « de cela même que je pensais à douter de la vérité des autres choses, il suivait très évidemment et très certainement que j'étais. » Le cogito est indubitable parce qu'il est auto-réfutant de le nier : pour nier le cogito, il faudrait penser, et donc être. Le doute lui-même présuppose l'existence du sujet qui doute. C'est pourquoi le cogito résiste au doute hyperbolique : il est la première certitude qui s'impose à l'esprit. Cette auto-fondation du sujet est le geste fondateur de la philosophie moderne."
    },
    { 
        question: "Question n°4 : Que peut-on feindre selon Descartes ?",
        answers: [
            "ne pas penser", 
            "ne pas avoir de corps", 
            "ne pas exister"
        ], 
        correct: 2,
        explanation: "Descartes affirme : « je pouvais feindre que je n'avais aucun corps et qu'il n'y avait aucun monde ni aucun lieu où je fusse ; mais que je ne pouvais pas feindre pour cela que je n'étais point. » Cette expérience de pensée est décisive : elle montre que l'existence du sujet pensant ne dépend pas de l'existence du corps ni du monde. On peut douter de tout ce qui est corporel, mais on ne peut douter de l'existence du sujet qui doute. Cette distinction entre l'âme et le corps fonde le dualisme cartésien."
    },
    { 
        question: "Question n°5 : Que ne peut-on pas feindre selon Descartes ?",
        answers: [
            "ne pas avoir de corps", 
            "ne pas exister", 
            "ne pas avoir de monde"
        ], 
        correct: 2,
        explanation: "Descartes affirme : « je ne pouvais pas feindre pour cela que je n'étais point. » Cette impossibilité est la marque de la certitude du cogito. On peut douter de tout : du corps, du monde, des autres, mais on ne peut pas douter de sa propre existence en tant que sujet pensant. Le cogito est ainsi la première vérité indubitable, le point d'Archimède à partir duquel Descartes reconstruira tout le savoir. Cette auto-fondation du sujet est le geste fondateur de la philosophie moderne."
    },
    { 
        question: "Question n°6 : Que se passe-t-il si l'on cesse de penser selon Descartes ?",
        answers: [
            "on continue d'exister", 
            "on n'a aucune raison de croire qu'on existe", 
            "on devient Dieu"
        ], 
        correct: 2,
        explanation: "Descartes affirme : « si j'eusse seulement cessé de penser, bien que tout le reste de ce que j'avais imaginé eût été vrai, je n'avais aucune raison de croire que j'eusse été. » Cette expérience de pensée est décisive : elle montre que la pensée est l'essence du sujet. Sans la pensée, le sujet n'est rien. C'est pourquoi Descartes conclut que le moi est une substance dont toute l'essence ou la nature n'est que de penser. Cette conception fait de la pensée l'attribut essentiel de l'âme, distincte du corps."
    },
    { 
        question: "Question n°7 : Quelle est l'essence du moi selon Descartes ?",
        answers: [
            "le corps", 
            "la pensée", 
            "l'imagination"
        ], 
        correct: 2,
        explanation: "Descartes affirme : « je connus que j'étais une substance dont toute l'essence ou la nature n'est que de penser. » Cette définition fait de la pensée l'attribut essentiel du moi. Le moi n'est pas d'abord un corps qui pense, mais une substance pensante. Cette conception fonde le dualisme cartésien : l'âme (substance pensante) est entièrement distincte du corps (substance étendue). L'essence du moi est donc la pensée, c'est-à-dire le fait de douter, comprendre, concevoir, affirmer, nier, vouloir, imaginer et sentir."
    },
    { 
        question: "Question n°8 : Quelle est la relation entre l'âme et le corps selon Descartes ?",
        answers: [
            "ils sont identiques", 
            "ils sont entièrement distincts", 
            "l'âme est une partie du corps"
        ], 
        correct: 2,
        explanation: "Descartes conclut : « ce moi – c'est-à-dire l'âme – est entièrement distinct du corps. » Cette conclusion est le fondement du dualisme cartésien. L'âme (substance pensante) est entièrement distincte du corps (substance étendue). Cette distinction signifie que l'âme peut exister sans le corps, ce qui fonde la possibilité de l'immortalité de l'âme. Elle signifie aussi que l'âme et le corps sont deux substances de nature différente, ce qui pose le problème de leur union (résolu par Descartes par la théorie des esprits animaux et de la glande pinéale)."
    },
    { 
        question: "Question n°9 : Quelle est la méthode de Descartes dans ce passage ?",
        answers: [
            "la déduction à partir de principes a priori", 
            "le doute hyperbolique", 
            "l'induction expérimentale"
        ], 
        correct: 2,
        explanation: "Dans ce passage, Descartes utilise sa méthode caractéristique : le doute hyperbolique. Il s'agit de douter de tout ce qui peut être mis en doute, non pas pour rester dans le scepticisme, mais pour trouver une vérité indubitable qui résiste au doute. Le doute est donc méthodique et provisoire : il est un instrument pour atteindre la certitude. Cette méthode, exposée dans les Méditations métaphysiques et le Discours de la méthode, est le geste fondateur de la philosophie moderne. Elle consiste à suspendre son jugement sur tout ce qui n'est pas absolument certain."
    },
    { 
        question: "Question n°10 : Quelle est la nature du cogito selon Descartes ?",
        answers: [
            "une déduction logique", 
            "une intuition immédiate", 
            "une révélation divine"
        ], 
        correct: 2,
        explanation: "Le cogito est, pour Descartes, une intuition immédiate, non une déduction logique. Il ne s'agit pas de raisonner « je pense, donc je suis » comme on déduit une conclusion d'une prémisse, mais de saisir immédiatement et intuitivement l'existence du sujet pensant dans l'acte même de penser. Cette intuition est indubitable car elle est immédiate : elle ne dépend d'aucun raisonnement qui pourrait être faux. Le cogito est ainsi la première vérité, le fondement de toute connaissance. Il est saisi par une intuition évidente, non par un discours."
    },
    { 
        question: "Question n°11 : Quel est le rapport entre le doute et la certitude chez Descartes ?",
        answers: [
            "le doute mène au scepticisme", 
            "le doute mène à la certitude du cogito", 
            "le doute est inutile"
        ], 
        correct: 2,
        explanation: "Chez Descartes, le doute mène à la certitude du cogito. Le doute hyperbolique, qui remet en question toutes les croyances, ne peut pas se retourner contre le sujet qui doute : pour douter, il faut être. Ainsi, le doute lui-même révèle une certitude indubitable : l'existence du sujet pensant. Le doute n'est donc pas une fin en soi (scepticisme), mais un moyen pour atteindre la certitude. Cette méthode fait du doute un instrument de reconstruction du savoir, non une position définitive."
    },
    { 
        question: "Question n°12 : Quelle est la portée du cogito chez Descartes ?",
        answers: [
            "il fonde la science moderne", 
            "il fonde la métaphysique moderne", 
            "il fonde la morale"
        ], 
        correct: 2,
        explanation: "Le cogito fonde la métaphysique moderne en inaugurant le primat du sujet. Avec Descartes, la philosophie ne part plus de l'être (comme chez Aristote) ou de Dieu (comme chez les médiévaux), mais du sujet pensant. Cette révolution copernicienne de la philosophie fait du moi le point de départ de toute réflexion. Le cogito est ainsi le geste fondateur de la philosophie moderne, qui sera développée par Kant, Fichte, Husserl et Sartre. Il marque le passage de la métaphysique de l'être à la métaphysique du sujet."
    },
    { 
        question: "Question n°13 : Quel est le rapport entre l'âme et le corps chez Descartes ?",
        answers: [
            "l'âme est une partie du corps", 
            "l'âme est entièrement distincte du corps", 
            "l'âme et le corps sont identiques"
        ], 
        correct: 2,
        explanation: "Pour Descartes, l'âme est entièrement distincte du corps. Cette conception dualiste est fondée sur la distinction entre la substance pensante (âme) et la substance étendue (corps). L'âme est caractérisée par la pensée, le corps par l'étendue. Cette distinction signifie que l'âme peut exister sans le corps, ce qui fonde la possibilité de l'immortalité. Elle signifie aussi que l'âme et le corps sont deux substances de nature différente, ce qui pose le problème de leur union, résolu par Descartes par la théorie de la glande pinéale."
    },
    { 
        question: "Question n°14 : Quelle est la fonction du doute chez Descartes ?",
        answers: [
            "détruire toute certitude", 
            "trouver une certitude indubitable", 
            "justifier le scepticisme"
        ], 
        correct: 2,
        explanation: "Chez Descartes, la fonction du doute est de trouver une certitude indubitable. Le doute est méthodique et provisoire : il s'agit de douter de tout ce qui peut être mis en doute, non pas pour rester dans le scepticisme, mais pour trouver une vérité qui résiste au doute. Cette vérité est le cogito : « je pense, donc je suis ». Le doute est donc un instrument au service de la certitude. Il permet de faire table rase des opinions reçues pour reconstruire le savoir sur des fondements solides."
    },
    { 
        question: "Question n°15 : Quelle est la conception de la vérité chez Descartes ?",
        answers: [
            "la vérité est relative", 
            "la vérité est fondée sur l'évidence", 
            "la vérité est révélée"
        ], 
        correct: 2,
        explanation: "Pour Descartes, la vérité est fondée sur l'évidence. Est vrai ce qui est saisi par l'esprit avec évidence, c'est-à-dire clairement et distinctement. Le cogito est le modèle de cette évidence : il est saisi immédiatement et indubitablement. Cette conception de la vérité comme évidence fonde la méthode cartésienne : ne recevoir pour vrai que ce qui se présente à l'esprit avec évidence, c'est-à-dire clairement et distinctement. Cette conception rationaliste de la vérité distingue Descartes de l'empirisme, qui fonde la vérité sur l'expérience."
    },
    { 
        question: "Question n°16 : Quel est le rapport entre le cogito et Dieu chez Descartes ?",
        answers: [
            "le cogito prouve l'existence de Dieu", 
            "Dieu prouve le cogito", 
            "il n'y a pas de rapport"
        ], 
        correct: 1,
        explanation: "Chez Descartes, le cogito prouve l'existence de Dieu. À partir du cogito, Descartes remonte à l'idée d'infini présente en moi, qui ne peut venir que d'un être infini : Dieu. Cette preuve de l'existence de Dieu, développée dans les Méditations métaphysiques, permet de garantir la vérité des idées claires et distinctes et de sortir du solipsisme. Le cogito est donc le point de départ d'une remontée vers Dieu, qui garantit la vérité de nos connaissances. Cette structure est caractéristique de la métaphysique cartésienne."
    },
    { 
        question: "Question n°17 : Quelle est la conception de l'âme chez Descartes ?",
        answers: [
            "l'âme est une substance pensante", 
            "l'âme est une substance étendue", 
            "l'âme est une illusion"
        ], 
        correct: 1,
        explanation: "Pour Descartes, l'âme est une substance pensante (res cogitans). Son essence est la pensée, c'est-à-dire le fait de douter, comprendre, concevoir, affirmer, nier, vouloir, imaginer et sentir. L'âme est distincte du corps (substance étendue) et peut exister sans lui. Cette conception de l'âme comme substance pensante fonde le dualisme cartésien et la possibilité de l'immortalité de l'âme. Elle distingue Descartes de la conception aristotélicienne de l'âme comme forme du corps."
    },
    { 
        question: "Question n°18 : Quel est le rapport entre le cogito et le corps chez Descartes ?",
        answers: [
            "le cogito dépend du corps", 
            "le cogito est indépendant du corps", 
            "le cogito est le corps"
        ], 
        correct: 2,
        explanation: "Chez Descartes, le cogito est indépendant du corps. Cette indépendance est établie par l'expérience de pensée du doute : je peux feindre que je n'ai aucun corps, mais je ne peux pas feindre que je ne suis pas. Le cogito est donc indépendant du corps, ce qui signifie que l'âme peut exister sans le corps. Cette conclusion fonde le dualisme cartésien et la possibilité de l'immortalité de l'âme. Elle distingue radicalement Descartes de la conception aristotélicienne de l'âme comme forme du corps."
    },
    { 
        question: "Question n°19 : Quelle est la conception de la substance chez Descartes ?",
        answers: [
            "la substance est ce qui n'a besoin que de soi pour exister", 
            "la substance est ce qui est perçu", 
            "la substance est une illusion"
        ], 
        correct: 1,
        explanation: "Pour Descartes, la substance est ce qui n'a besoin que de soi pour exister. Au sens strict, seul Dieu est substance, car seul Dieu n'a besoin de rien pour exister. Au sens large, l'âme (substance pensante) et le corps (substance étendue) sont des substances créées, qui n'ont besoin que de Dieu pour exister. Cette conception de la substance fonde le dualisme cartésien : l'âme et le corps sont deux substances distinctes, ayant chacune son attribut essentiel (la pensée pour l'âme, l'étendue pour le corps)."
    },
    { 
        question: "Question n°20 : Quel est le rapport entre le cogito et le monde chez Descartes ?",
        answers: [
            "le cogito prouve l'existence du monde", 
            "le cogito doute de l'existence du monde", 
            "le cogito est indifférent au monde"
        ], 
        correct: 2,
        explanation: "Chez Descartes, le cogito doute de l'existence du monde. Dans l'expérience du doute hyperbolique, je peux feindre qu'il n'y a aucun monde ni aucun lieu où je fusse. Le cogito est donc la première certitude, avant toute certitude concernant le monde. C'est seulement après avoir prouvé l'existence de Dieu que Descartes pourra prouver l'existence du monde extérieur, en montrant que Dieu, qui est vérace, ne peut pas nous tromper sur l'existence du monde. Le cogito est donc le point de départ d'une reconstruction du savoir, qui passe par Dieu pour atteindre le monde."
    },
    { 
        question: "Question n°21 : Quelle est la conception de la pensée chez Descartes ?",
        answers: [
            "la pensée est une activité corporelle", 
            "la pensée est l'attribut essentiel de l'âme", 
            "la pensée est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Descartes, la pensée est l'attribut essentiel de l'âme. Tout ce qui est en nous de telle manière que nous en sommes immédiatement conscients est une pensée : douter, comprendre, concevoir, affirmer, nier, vouloir, imaginer, sentir. La pensée est donc coextensive à la conscience : tout ce dont nous sommes conscients est une pensée. Cette conception large de la pensée distingue Descartes de la conception moderne, qui réduit la pensée au raisonnement. Pour Descartes, sentir, imaginer, vouloir sont aussi des manières de penser."
    },
    { 
        question: "Question n°22 : Quel est le rapport entre le cogito et la vérité chez Descartes ?",
        answers: [
            "le cogito est la première vérité", 
            "le cogito est une opinion", 
            "le cogito est une illusion"
        ], 
        correct: 1,
        explanation: "Chez Descartes, le cogito est la première vérité. Il est la première certitude qui résiste au doute hyperbolique et qui peut servir de fondement à toutes les autres. Descartes affirme : « je jugeai que je pouvais la recevoir sans scrupule pour le premier principe de la philosophie. » Le cogito est donc le fondement de la philosophie, la première vérité à partir de laquelle toutes les autres seront déduites. Cette conception fait du cogito le point d'Archimède de la philosophie moderne, le point fixe à partir duquel on peut soulever le monde."
    },
    { 
        question: "Question n°23 : Quelle est la conception de l'évidence chez Descartes ?",
        answers: [
            "l'évidence est une opinion commune", 
            "l'évidence est la clarté et la distinction de l'idée", 
            "l'évidence est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Descartes, l'évidence est la clarté et la distinction de l'idée. Une idée est claire quand elle est présente et manifeste à l'esprit attentif ; elle est distincte quand elle est séparée de toute autre idée, sans mélange. Le cogito est le modèle de l'évidence : il est saisi clairement et distinctement. Cette conception de l'évidence fonde la méthode cartésienne : ne recevoir pour vrai que ce qui se présente à l'esprit avec évidence. Elle fonde aussi la règle de vérité : tout ce que je conçois clairement et distinctement est vrai."
    },
    { 
        question: "Question n°24 : Quel est le rapport entre le cogito et l'âme chez Descartes ?",
        answers: [
            "le cogito est l'âme", 
            "le cogito prouve l'existence de l'âme", 
            "le cogito est le corps"
        ], 
        correct: 2,
        explanation: "Chez Descartes, le cogito prouve l'existence de l'âme. En découvrant que je suis une substance pensante, je découvre que je suis une âme, c'est-à-dire une substance dont l'essence est la pensée. Descartes affirme : « ce moi – c'est-à-dire l'âme – est entièrement distinct du corps. » Le cogito est donc la preuve de l'existence de l'âme comme substance pensante, distincte du corps. Cette preuve fonde le dualisme cartésien et la possibilité de l'immortalité de l'âme."
    },
    { 
        question: "Question n°25 : Quelle est la conception du sujet chez Descartes ?",
        answers: [
            "le sujet est passif", 
            "le sujet est actif et fondateur", 
            "le sujet est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Descartes, le sujet est actif et fondateur. Le cogito révèle un sujet qui est à l'origine de ses pensées, qui doute, qui affirme, qui veut. Ce sujet n'est pas passif (comme le sera le sujet humien, qui n'est qu'un faisceau de perceptions), mais actif : il est la source de ses actes. De plus, ce sujet est fondateur : il est le point de départ de toute connaissance, le fondement de la philosophie. Cette conception du sujet comme actif et fondateur est le geste fondateur de la philosophie moderne, qui sera développée par Kant, Fichte et Husserl."
    },
    { 
        question: "Question n°26 : Quel est le rapport entre le cogito et l'existence chez Descartes ?",
        answers: [
            "le cogito prouve l'existence", 
            "le cogito doute de l'existence", 
            "le cogito est indifférent à l'existence"
        ], 
        correct: 1,
        explanation: "Chez Descartes, le cogito prouve l'existence. En découvrant que je pense, je découvre que je suis : le cogito est la preuve de mon existence comme substance pensante. Cette preuve est indubitable car elle résiste au doute hyperbolique : même en doutant de tout, il faut être pour douter. Le cogito est donc la première vérité d'existence, le fondement de toute certitude. Cette conception fait du cogito le point d'Archimède de la philosophie, le point fixe à partir duquel on peut reconstruire tout le savoir."
    },
    { 
        question: "Question n°27 : Quelle est la conception de la conscience chez Descartes ?",
        answers: [
            "la conscience est une illusion", 
            "la conscience est coextensive à la pensée", 
            "la conscience est corporelle"
        ], 
        correct: 2,
        explanation: "Pour Descartes, la conscience est coextensive à la pensée. Tout ce dont nous sommes conscients est une pensée, et toute pensée est consciente. Cette conception fait de la conscience le propre de l'âme : l'âme est essentiellement consciente. Cette conception de la conscience comme transparence à soi-même fondera la philosophie moderne de la conscience (Locke, Kant, Husserl). Elle sera critiquée par Freud, qui montrera que la conscience n'est pas transparente à elle-même, et par Nietzsche, pour qui la conscience est superficielle."
    },
    { 
        question: "Question n°28 : Quel est le rapport entre le cogito et le doute chez Descartes ?",
        answers: [
            "le cogito est antérieur au doute", 
            "le cogito est révélé par le doute", 
            "le cogito s'oppose au doute"
        ], 
        correct: 2,
        explanation: "Chez Descartes, le cogito est révélé par le doute. C'est en doutant de tout que je découvre que je suis : le doute lui-même présuppose l'existence du sujet qui doute. Le cogito n'est donc pas antérieur au doute, mais il est découvert à travers le doute. Cette structure est fondamentale : le doute est l'instrument qui conduit à la certitude. Il est méthodique et provisoire, non sceptique et définitif. Il permet de faire table rase des opinions reçues pour trouver une vérité indubitable."
    },
    { 
        question: "Question n°29 : Quelle est la conception de l'être chez Descartes ?",
        answers: [
            "l'être est matériel", 
            "l'être est spirituel (pensée)", 
            "l'être est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Descartes, l'être du moi est spirituel : il est pensée. Descartes affirme : « je connus que j'étais une substance dont toute l'essence ou la nature n'est que de penser. » L'être du moi n'est donc pas corporel mais spirituel. Cette conception fonde le dualisme cartésien : l'âme (substance pensante) est entièrement distincte du corps (substance étendue). Elle fonde aussi l'idée que l'âme peut exister sans le corps, ce qui ouvre la possibilité de l'immortalité. Cette conception spiritualiste de l'être humain est caractéristique de la métaphysique cartésienne."
    },
    { 
        question: "Question n°30 : Quel est le rapport entre le cogito et la science chez Descartes ?",
        answers: [
            "le cogito fonde la science", 
            "le cogito s'oppose à la science", 
            "le cogito est indifférent à la science"
        ], 
        correct: 1,
        explanation: "Chez Descartes, le cogito fonde la science. En établissant une première vérité indubitable, le cogito fournit un fondement solide sur lequel reconstruire tout le savoir, y compris le savoir scientifique. Le cogito est donc le point de départ de la reconstruction du savoir, qui passera par la preuve de l'existence de Dieu et du monde extérieur. Cette conception fait de la métaphysique le fondement de la physique : la science présuppose une métaphysique qui garantit la vérité de ses principes. Cette conception fondationnaliste de la science est caractéristique du rationalisme cartésien."
    },
    { 
        question: "Question n°31 : Quelle est la conception de l'âme chez Descartes par rapport au corps ?",
        answers: [
            "l'âme est une partie du corps", 
            "l'âme est entièrement distincte du corps", 
            "l'âme et le corps sont identiques"
        ], 
        correct: 2,
        explanation: "Pour Descartes, l'âme est entièrement distincte du corps. Cette distinction est fondée sur la différence de nature entre la substance pensante (âme) et la substance étendue (corps). L'âme est caractérisée par la pensée, le corps par l'étendue. Cette distinction signifie que l'âme peut exister sans le corps, ce qui fonde la possibilité de l'immortalité. Elle signifie aussi que l'âme et le corps sont deux substances de nature différente, ce qui pose le problème de leur union, résolu par Descartes par la théorie de la glande pinéale. Cette conception dualiste est l'une des thèses les plus célèbres et les plus discutées de la philosophie cartésienne."
    },
    { 
        question: "Question n°32 : Quel est le rapport entre le cogito et la liberté chez Descartes ?",
        answers: [
            "le cogito prouve la liberté", 
            "le cogito nie la liberté", 
            "le cogito est indifférent à la liberté"
        ], 
        correct: 1,
        explanation: "Chez Descartes, le cogito prouve la liberté. En découvrant que je suis une substance pensante, je découvre que je suis capable de douter, de suspendre mon jugement, de vouloir. Or, la volonté est infinie en moi : je peux vouloir tout ce que je peux concevoir. Cette expérience de la volonté infinie est la preuve de ma liberté. Le cogito est donc la preuve de la liberté, qui est pour Descartes la plus haute perfection de l'homme. Cette conception de la liberté comme volonté infinie fondera la morale cartésienne, développée dans le Traité des passions."
    },
    { 
        question: "Question n°33 : Quelle est la conception de la vérité chez Descartes par rapport à Dieu ?",
        answers: [
            "la vérité dépend de Dieu", 
            "la vérité est indépendante de Dieu", 
            "la vérité est une illusion"
        ], 
        correct: 1,
        explanation: "Pour Descartes, la vérité dépend de Dieu. Dieu est vérace : il ne peut pas nous tromper. C'est pourquoi les idées claires et distinctes sont vraies : elles sont garanties par la véracité divine. Cette conception fonde la preuve de l'existence de Dieu et la garantie de la vérité de nos connaissances. Sans Dieu, le cogito resterait enfermé dans le solipsisme : je ne pourrais pas être sûr de l'existence du monde extérieur. Avec Dieu, je peux sortir du solipsisme et fonder la science. Cette conception fait de Dieu le garant de la vérité, non seulement de la vérité métaphysique, mais aussi de la vérité scientifique."
    },
    { 
        question: "Question n°34 : Quel est le rapport entre le cogito et l'expérience chez Descartes ?",
        answers: [
            "le cogito est fondé sur l'expérience", 
            "le cogito est indépendant de l'expérience", 
            "le cogito est une illusion"
        ], 
        correct: 2,
        explanation: "Chez Descartes, le cogito est indépendant de l'expérience. Il est saisi par une intuition immédiate, non par l'expérience sensible. Cette indépendance est essentielle : le cogito résiste au doute hyperbolique, qui remet en question toutes les données de l'expérience. Le cogito est donc une vérité a priori, saisie par la seule raison. Cette conception rationaliste du cogito distingue Descartes de l'empirisme, qui fonde la connaissance sur l'expérience. Pour Descartes, la première vérité est saisie par l'intuition rationnelle, non par les sens."
    },
    { 
        question: "Question n°35 : Quelle est la conception de la méthode chez Descartes ?",
        answers: [
            "la méthode est l'ensemble des règles pour bien conduire sa raison", 
            "la méthode est l'observation des faits", 
            "la méthode est la révélation divine"
        ], 
        correct: 1,
        explanation: "Pour Descartes, la méthode est l'ensemble des règles pour bien conduire sa raison et chercher la vérité dans les sciences. Elle comprend quatre préceptes : l'évidence (ne recevoir rien pour vrai qui ne soit évident), l'analyse (diviser les difficultés), la synthèse (aller du simple au composé), et l'énumération (vérifier qu'on n'a rien omis). Cette méthode, exposée dans le Discours de la méthode, est le fondement de la philosophie cartésienne. Elle vise à éviter l'erreur en ne recevant pour vrai que ce qui est clair et distinct."
    },
    { 
        question: "Question n°36 : Quel est le rapport entre le cogito et la métaphysique chez Descartes ?",
        answers: [
            "le cogito est le fondement de la métaphysique", 
            "le cogito est indépendant de la métaphysique", 
            "le cogito est une illusion métaphysique"
        ], 
        correct: 1,
        explanation: "Chez Descartes, le cogito est le fondement de la métaphysique. Il est le premier principe de la philosophie, le point de départ de la reconstruction du savoir. La métaphysique cartésienne, exposée dans les Méditations, part du cogito pour remonter à Dieu puis redescendre vers le monde. Cette structure fait du cogito le fondement de toute la métaphysique : sans le cogito, pas de certitude ; sans certitude, pas de science. Le cogito est donc le geste fondateur de la métaphysique moderne, qui est une métaphysique du sujet."
    },
    { 
        question: "Question n°37 : Quelle est la conception du moi chez Descartes ?",
        answers: [
            "le moi est le corps", 
            "le moi est une substance pensante", 
            "le moi est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Descartes, le moi est une substance pensante. Cette conception est fondée sur l'expérience du cogito : en doutant de tout, je découvre que je suis une chose qui pense, c'est-à-dire une substance dont toute l'essence est de penser. Le moi n'est donc pas le corps (substance étendue), mais l'âme (substance pensante). Cette conception du moi comme substance pensante fonde le dualisme cartésien et la possibilité de l'immortalité de l'âme. Elle sera critiquée par Hume, pour qui le moi n'est qu'un faisceau de perceptions, et par Nietzsche, pour qui le moi est une fiction grammaticale."
    },
    { 
        question: "Question n°38 : Quel est le rapport entre le cogito et l'erreur chez Descartes ?",
        answers: [
            "le cogito est la source de l'erreur", 
            "le cogito protège de l'erreur", 
            "le cogito est indifférent à l'erreur"
        ], 
        correct: 2,
        explanation: "Chez Descartes, le cogito protège de l'erreur. En établissant une vérité indubitable, le cogito fournit un fondement solide sur lequel reconstruire le savoir et éviter l'erreur. L'erreur, selon Descartes, vient du jugement : elle résulte d'un désaccord entre la volonté (qui affirme trop vite) et l'entendement (qui conçoit confusément). Le cogito, en montrant la puissance de l'évidence, apprend à ne juger que ce qui est clair et distinct. Il est donc le remède à l'erreur, le fondement de la méthode. Cette conception fonde la règle de vérité : ne recevoir pour vrai que ce qui est évident."
    },
    { 
        question: "Question n°39 : Quelle est la conception de la substance pensante chez Descartes ?",
        answers: [
            "la substance pensante est matérielle", 
            "la substance pensante est immatérielle", 
            "la substance pensante est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Descartes, la substance pensante est immatérielle. Elle est caractérisée par la pensée, non par l'étendue. Elle est donc distincte du corps (substance étendue) et peut exister sans lui. Cette conception immatérialiste de l'âme fonde le dualisme cartésien et la possibilité de l'immortalité. Elle distingue Descartes de la conception aristotélicienne de l'âme comme forme du corps (inséparable du corps) et de la conception matérialiste (pour qui l'âme est le cerveau). Pour Descartes, l'âme est une substance immatérielle, créée par Dieu, qui est unie au corps pendant la vie mais qui peut en être séparée par la mort."
    },
    { 
        question: "Question n°40 : Quel est le rapport entre le cogito et la volonté chez Descartes ?",
        answers: [
            "le cogito est indépendant de la volonté", 
            "le cogito prouve la volonté infinie", 
            "le cogito nie la volonté"
        ], 
        correct: 2,
        explanation: "Chez Descartes, le cogito prouve la volonté infinie. En découvrant que je suis une substance pensante, je découvre que je suis capable de vouloir. Or, la volonté est infinie en moi : je peux vouloir tout ce que je peux concevoir. Cette expérience de la volonté infinie est la preuve de ma liberté et de ma ressemblance avec Dieu. Le cogito est donc la preuve de la volonté infinie, qui est pour Descartes la plus haute perfection de l'homme. Cette conception de la volonté infinie fondera la morale cartésienne, qui fait de la générosité (la connaissance de sa propre liberté) la vertu suprême."
    },
    { 
        question: "Question n°41 : Quelle est la conception de l'âme chez Descartes par rapport à Dieu ?",
        answers: [
            "l'âme est une partie de Dieu", 
            "l'âme est une substance créée par Dieu", 
            "l'âme est Dieu"
        ], 
        correct: 2,
        explanation: "Pour Descartes, l'âme est une substance créée par Dieu. Elle n'est pas une partie de Dieu (comme dans le panthéisme spinoziste), ni Dieu lui-même (comme dans le mysticisme), mais une substance finie créée par Dieu. Cette conception fonde la distinction entre le créateur et la créature, entre l'infini et le fini. L'âme, bien qu'immatérielle et immortelle, n'est pas divine : elle est une créature de Dieu. Cette conception est conforme à l'orthodoxie chrétienne et distingue Descartes du spinozisme, qui fera de l'âme un mode de la substance divine."
    },
    { 
        question: "Question n°42 : Quel est le rapport entre le cogito et la connaissance chez Descartes ?",
        answers: [
            "le cogito est la première connaissance", 
            "le cogito est une opinion", 
            "le cogito est une illusion"
        ], 
        correct: 1,
        explanation: "Chez Descartes, le cogito est la première connaissance. Il est la première vérité qui résiste au doute hyperbolique et qui peut servir de fondement à toutes les autres. Descartes affirme : « je jugeai que je pouvais la recevoir sans scrupule pour le premier principe de la philosophie. » Le cogito est donc la première connaissance certaine, le point de départ de la reconstruction du savoir. Cette conception fonde la philosophie moderne comme théorie de la connaissance : la connaissance commence par le sujet, non par l'objet. Elle sera développée par Kant, qui fera du sujet transcendantal le fondement de la connaissance."
    },
    { 
        question: "Question n°43 : Quelle est la conception de la liberté chez Descartes ?",
        answers: [
            "la liberté est l'absence de contrainte", 
            "la liberté est la puissance de la volonté", 
            "la liberté est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Descartes, la liberté est la puissance de la volonté. Elle consiste dans la capacité de choisir, de suspendre son jugement, de vouloir. Cette puissance est infinie en nous : nous pouvons vouloir tout ce que nous pouvons concevoir. La liberté est donc la plus haute perfection de l'homme, ce qui le rend semblable à Dieu. Cette conception de la liberté comme puissance de la volonté fonde la morale cartésienne : la générosité, qui est la connaissance de sa propre liberté, est la vertu suprême. Elle distingue Descartes des conceptions déterministes, pour qui la liberté est une illusion."
    },
    { 
        question: "Question n°44 : Quel est le rapport entre le cogito et l'âme chez Descartes ?",
        answers: [
            "le cogito est l'âme", 
            "le cogito prouve l'existence de l'âme", 
            "le cogito est le corps"
        ], 
        correct: 2,
        explanation: "Chez Descartes, le cogito prouve l'existence de l'âme. En découvrant que je suis une substance pensante, je découvre que je suis une âme, c'est-à-dire une substance dont l'essence est la pensée. Descartes affirme : « ce moi – c'est-à-dire l'âme – est entièrement distinct du corps. » Le cogito est donc la preuve de l'existence de l'âme comme substance pensante, distincte du corps. Cette preuve fonde le dualisme cartésien et la possibilité de l'immortalité de l'âme. Elle distingue Descartes de la conception aristotélicienne de l'âme comme forme du corps."
    },
    { 
        question: "Question n°45 : Quelle est la conception de la pensée chez Descartes par rapport au corps ?",
        answers: [
            "la pensée dépend du corps", 
            "la pensée est indépendante du corps", 
            "la pensée est le corps"
        ], 
        correct: 2,
        explanation: "Pour Descartes, la pensée est indépendante du corps. Cette indépendance est établie par l'expérience de pensée du doute : je peux feindre que je n'ai aucun corps, mais je ne peux pas feindre que je ne pense pas. La pensée est donc indépendante du corps, ce qui signifie que l'âme peut exister sans le corps. Cette conception fonde le dualisme cartésien et la possibilité de l'immortalité de l'âme. Elle distingue radicalement Descartes de la conception matérialiste, pour qui la pensée est un produit du cerveau."
    },
    { 
        question: "Question n°46 : Quel est le rapport entre le cogito et l'existence de Dieu chez Descartes ?",
        answers: [
            "le cogito prouve l'existence de Dieu", 
            "Dieu prouve le cogito", 
            "il n'y a pas de rapport"
        ], 
        correct: 1,
        explanation: "Chez Descartes, le cogito prouve l'existence de Dieu. À partir du cogito, Descartes remonte à l'idée d'infini présente en moi, qui ne peut venir que d'un être infini : Dieu. Cette preuve de l'existence de Dieu, développée dans les Méditations métaphysiques, permet de garantir la vérité des idées claires et distinctes et de sortir du solipsisme. Le cogito est donc le point de départ d'une remontée vers Dieu, qui garantit la vérité de nos connaissances. Cette structure est caractéristique de la métaphysique cartésienne : le sujet prouve Dieu, qui prouve le monde."
    },
    { 
        question: "Question n°47 : Quelle est la conception de l'être humain chez Descartes ?",
        answers: [
            "l'être humain est un corps", 
            "l'être humain est une âme unie à un corps", 
            "l'être humain est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Descartes, l'être humain est une âme unie à un corps. Cette conception est dualiste : l'homme est composé de deux substances distinctes, l'âme (substance pensante) et le corps (substance étendue), qui sont unies pendant la vie. Cette union est un mystère : comment deux substances de nature différente peuvent-elles interagir ? Descartes répond par la théorie de la glande pinéale, siège de l'âme, où les esprits animaux transmettent les mouvements du corps à l'âme et vice-versa. Cette conception dualiste de l'être humain est l'une des thèses les plus célèbres et les plus discutées de la philosophie cartésienne."
    },
    { 
        question: "Question n°48 : Quel est le rapport entre le cogito et la morale chez Descartes ?",
        answers: [
            "le cogito fonde la morale", 
            "le cogito est indépendant de la morale", 
            "le cogito nie la morale"
        ], 
        correct: 1,
        explanation: "Chez Descartes, le cogito fonde la morale. En découvrant que je suis une substance pensante, je découvre que je suis libre, que ma volonté est infinie. Cette liberté est le fondement de la morale : elle me rend responsable de mes actes et me permet de choisir le bien. La morale cartésienne, exposée dans le Traité des passions, fait de la générosité (la connaissance de sa propre liberté) la vertu suprême. Le cogito est donc le fondement de la morale, comme il est le fondement de la science. Cette conception unit la métaphysique, la science et la morale dans un même système."
    },
    { 
        question: "Question n°49 : Quelle est la conception de la vérité chez Descartes par rapport au sujet ?",
        answers: [
            "la vérité est indépendante du sujet", 
            "la vérité est fondée sur le sujet", 
            "la vérité est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Descartes, la vérité est fondée sur le sujet. Avec le cogito, la vérité n'est plus fondée sur l'objet (comme dans la conception aristotélicienne de la vérité comme adéquation de la pensée et de la chose) mais sur le sujet : est vrai ce qui est saisi par le sujet avec évidence. Cette révolution copernicienne de la philosophie fait du sujet le fondement de la vérité. Elle sera développée par Kant, qui fera du sujet transcendantal le fondement de la connaissance, et par Husserl, qui fera de la conscience intentionnelle le fondement de toute vérité. Cette conception subjectiviste de la vérité est le geste fondateur de la philosophie moderne."
    },
    { 
        question: "Question n°50 : En quoi ce texte de Descartes est-il représentatif de sa philosophie ?",
        answers: [
            "il montre la méthode du doute et le cogito", 
            "il montre le dualisme de l'âme et du corps", 
            "les deux réponses sont correctes"
        ], 
        correct: 3,
        explanation: "Ce texte du Discours de la méthode est représentatif de la philosophie de Descartes à plusieurs égards. D'abord, il montre la méthode du doute hyperbolique, qui consiste à douter de tout pour trouver une vérité indubitable. Ensuite, il montre le cogito, première vérité indubitable qui fonde la philosophie. Enfin, il montre le dualisme de l'âme et du corps, qui est l'une des thèses les plus célèbres de Descartes. Ce texte condense ainsi les thèmes majeurs de la philosophie cartésienne : le doute méthodique, le cogito, le dualisme, la substance pensante, la distinction de l'âme et du corps."
    }
];