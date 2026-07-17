// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Kant";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
    texte: `« [1] Lorsqu'il s'agit de ce qui est agréable, chacun consent à ce que son jugement, qu'il fonde sur un sentiment personnel et en fonction duquel il affirme qu'un objet lui plaît, soit restreint à sa seule personne. [2] Aussi bien disant : « Le vin des Canaries est agréable », il admettra volontiers qu'un autre corrige l'expression et lui rappelle qu'il doit dire : cela m'est agréable. [3] Il en est ainsi non seulement pour le goût de la langue, du palais et du gosier, mais aussi pour tout ce qui peut être agréable aux yeux et aux oreilles de chacun. [4] La couleur violette sera douce et aimable pour celui-ci, morte et éteinte pour celui-là. [5] Celui-ci aime le son des instruments à vent, celui-là aime les instruments à cordes. [6] Ce serait folie que de discuter à ce propos, afin de réputer erroné le jugement d'autrui, qui diffère du nôtre, comme s'il lui était logiquement opposé ; le principe : « À chacun son goût » (s'agissant des sens) est un principe valable pour ce qui est agréable.

[7] Il en va tout autrement du beau. [8] Il serait (tout juste à l'inverse) ridicule que quelqu'un, s'imaginant avoir du goût, songe en faire la preuve en déclarant : cet objet (l'édifice que nous voyons, le vêtement que porte celui-ci, le concert que nous entendons, le poème que l'on soumet à notre appréciation) est beau pour moi. [9] Car il ne doit pas appeler beau, ce qui ne plaît qu'à lui. [10] Beaucoup de choses peuvent avoir pour lui du charme ou de l'agrément ; personne ne s'en soucie ; toutefois lorsqu'il dit qu'une chose est belle, il attribue aux autres la même satisfaction ; il ne juge pas seulement pour lui, mais aussi pour autrui et parle alors de la beauté comme si elle était une propriété des choses. [11] C'est pourquoi il dit : la chose est belle et dans son jugement exprimant sa satisfaction, il exige l'adhésion des autres, loin de compter sur leur adhésion, parce qu'il a constaté maintes fois que leur jugement s'accordait avec le sien. [12] Il les blâme s'ils jugent autrement et leur dénie un goût, qu'ils devraient cependant posséder d'après ses exigences ; et ainsi on ne peut dire : « À chacun son goût ». [13] Cela reviendrait à dire : le goût n'existe pas, il n'existe pas de jugement esthétique qui pourrait légitimement prétendre à l'assentiment de tous. »`,
    
    source: "KANT, Critique de la faculté de juger, §7, trad. A. Philonenko, Vrin, [1790] 1993, pp.74-75."
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    // Question n°1
    { 
        question: "Question n°1 : Comment chacun considère-t-il son jugement sur l'agréable selon Kant ?",
        answers: [
            "Réponse : comme un jugement universel", 
            "Réponse : comme un jugement restreint à sa seule personne", 
            "Réponse : comme un jugement scientifique"
        ], 
        correct: 2,
        explanation: "Kant affirme : « chacun consent à ce que son jugement, qu'il fonde sur un sentiment personnel et en fonction duquel il affirme qu'un objet lui plaît, soit restreint à sa seule personne. » Cette caractérisation du jugement sur l'agréable est essentielle pour comprendre la distinction kantienne fondamentale entre agréable et beau. Le jugement sur l'agréable est subjectif au sens le plus radical : il ne vaut que pour le sujet qui l'énonce, sans prétention à valoir pour les autres. Cette restriction volontaire (« chacun consent ») montre que nous reconnaissons spontanément la légitimité des différences de sensibilité en matière d'agrément. Cette position fonde le relativisme légitime en matière de plaisirs sensibles et prépare le contraste avec le jugement sur le beau qui, lui, prétend à l'universalité."
    },

    // Question n°2
    { 
        question: "Question n°2 : Que devrait dire correctement quelqu'un qui déclare : « Le vin des Canaries est agréable » ?",
        answers: [
            "Réponse : cela est agréable", 
            "Réponse : cela m'est agréable", 
            "Réponse : cela est universellement agréable"
        ], 
        correct: 2,
        explanation: "Kant précise : « il admettra volontiers qu'un autre corrige l'expression et lui rappelle qu'il doit dire : cela m'est agréable. » Cet exemple concret montre la rectification linguistique nécessaire pour exprimer correctement le caractère purement subjectif du jugement sur l'agréable. L'expression « est agréable » suggère faussement une propriété objective de l'objet, alors que « m'est agréable » révèle la relation subjective entre le sujet et l'objet. Cette correction grammaticale n'est pas une simple convention de langage mais révèle une vérité philosophique profonde : l'agréable n'est pas dans l'objet mais dans la relation de cet objet avec la sensibilité particulière d'un sujet. Kant utilise cet exemple pour illustrer comment le langage ordinaire, s'il n'est pas corrigé, peut masquer la nature véritable de nos jugements."
    },

    // Question n°3
    { 
        question: "Question n°3 : Quel principe Kant valide-t-il pour ce qui est agréable ?",
        answers: [
            "Réponse : « Le beau est universel »", 
            "Réponse : « À chacun son goût »", 
            "Réponse : « L'art pour l'art »"
        ], 
        correct: 2,
        explanation: "Kant déclare : « le principe : « À chacun son goût » (s'agissant des sens) est un principe valable pour ce qui est agréable. » Cette validation du principe de relativité sensorielle constitue un moment important de l'argumentation kantienne. En acceptant ce principe pour l'agréable, Kant reconnaît la légitimité des différences individuelles dans les préférences sensibles. Cependant, il précise soigneusement « s'agissant des sens », indiquant ainsi que ce principe ne s'applique qu'au domaine des plaisirs sensoriels immédiats. Cette restriction prépare la distinction radicale avec le jugement sur le beau, pour lequel le principe « à chacun son goût » serait inacceptable. L'acceptation de ce principe pour l'agréable montre que Kant n'est pas un absolutiste naïf : il reconnaît la diversité légitime des sensibilités, mais seulement dans le domaine approprié."
    },

    // Question n°4
    { 
        question: "Question n°4 : Que serait-il selon Kant de discuter des préférences sensibles ?",
        answers: [
            "Réponse : nécessaire et raisonnable", 
            "Réponse : une folie", 
            "Réponse : un devoir moral"
        ], 
        correct: 2,
        explanation: "Kant affirme catégoriquement : « Ce serait folie que de discuter à ce propos, afin de réputer erroné le jugement d'autrui, qui diffère du nôtre, comme s'il lui était logiquement opposé. » Cette déclaration forte souligne l'absurdité qu'il y aurait à vouloir imposer ses préférences sensibles aux autres ou à critiquer celles des autres. L'argument kantien est double : d'une part, ces jugements étant purement subjectifs, ils ne peuvent entrer en contradiction logique (puisqu'ils ne portent pas sur des propriétés objectives) ; d'autre part, vouloir les discuter reviendrait à méconnaître leur nature même. Le terme « folie » est significatif : il indique que ce serait non seulement vain mais irrationnel, une méconnaissance des conditions de validité des jugements. Cette position préserve la liberté de chacun dans ses préférences sensibles tout en traçant une limite claire à la discussion rationnelle."
    },

    // Question n°5
    { 
        question: "Question n°5 : Comment Kant décrit-il les différences de perception de la couleur violette ?",
        answers: [
            "Réponse : tous la voient de la même façon", 
            "Réponse : douce et aimable pour l'un, morte et éteinte pour l'autre", 
            "Réponse : toujours désagréable"
        ], 
        correct: 2,
        explanation: "Kant illustre la variabilité des sensations : « La couleur violette sera douce et aimable pour celui-ci, morte et éteinte pour celui-là. » Cet exemple concret montre comment une même perception sensorielle peut provoquer des réactions affectives diamétralement opposées selon les individus. L'opposition entre « douce et aimable » et « morte et éteinte » révèle que ces différences ne portent pas seulement sur l'intensité du plaisir mais sur sa qualité même. Cet exemple est particulièrement bien choisi car la couleur violette, située à l'extrémité du spectre visible, peut effectivement être perçue très différemment selon les sensibilités. Il montre que même dans le domaine de la perception visuelle (qui semble plus « objectif » que le goût ou l'odorat), les réactions subjectives varient considérablement. Cet exemple renforce l'argument de Kant sur la légitimité du principe « à chacun son goût » dans le domaine sensoriel."
    },

    // Question n°6
    { 
        question: "Question n°6 : Quelle différence Kant établit-il entre agréable et beau ?",
        answers: [
            "Réponse : il n'y a pas de différence", 
            "Réponse : l'agréable est subjectif, le beau prétend à l'universalité", 
            "Réponse : le beau est subjectif, l'agréable est universel"
        ], 
        correct: 2,
        explanation: "Kant opère une distinction radicale : « Il en va tout autrement du beau. » Alors que le jugement sur l'agréable est subjectif et ne vaut que pour l'individu, le jugement sur le beau, bien que lui aussi fondé sur un sentiment subjectif, prétend à l'universalité. Cette distinction constitue le cœur de l'analyse kantienne du jugement de goût. Elle repose sur une observation phénoménologique : quand nous disons « ceci est beau », nous n'exprimons pas une simple préférence personnelle mais nous attendons que les autres partagent notre sentiment. Cette prétention à l'universalité, bien que paradoxale (car le jugement reste subjectif), est constitutive du jugement esthétique authentique. Kant explore tout au long de la Critique de la faculté de juger les conditions de possibilité de cette prétention, aboutissant à sa célèbre théorie du « sensus communis » ou sentiment commun qui fonde la communicabilité universelle des jugements de goût."
    },

    // Question n°7
    { 
        question: "Question n°7 : Que serait-il pour quelqu'un de dire « cet objet est beau pour moi » ?",
        answers: [
            "Réponse : une preuve de goût", 
            "Réponse : ridicule", 
            "Réponse : une vérité scientifique"
        ], 
        correct: 2,
        explanation: "Kant déclare : « Il serait (tout juste à l'inverse) ridicule que quelqu'un, s'imaginant avoir du goût, songe en faire la preuve en déclarant : cet objet... est beau pour moi. » Cette affirmation peut sembler surprenante au premier abord, mais elle révèle la logique interne du jugement de goût. L'expression « beau pour moi » serait contradictoire avec l'essence même du beau qui prétend à l'universalité. Celui qui dirait « beau pour moi » trahirait qu'il n'a pas compris ce qu'est un véritable jugement esthétique : il réduirait le beau à l'agréable. Le terme « ridicule » est fort : il indique que cette expression serait non seulement incorrecte mais absurde, une méconnaissance comique de la nature du jugement qu'on prétend émettre. Cette analyse montre que pour Kant, la formulation même de nos jugements révèle leur nature : dire « beau » sans restriction, c'est déjà manifester la prétention à l'universalité inhérente au jugement de goût."
    },

    // Question n°8
    { 
        question: "Question n°8 : Que ne doit-on pas appeler beau selon Kant ?",
        answers: [
            "Réponse : ce qui plaît universellement", 
            "Réponse : ce qui ne plaît qu'à soi", 
            "Réponse : ce qui est utile"
        ], 
        correct: 2,
        explanation: "Kant est catégorique : « Car il ne doit pas appeler beau, ce qui ne plaît qu'à lui. » Cette injonction établit une norme pour l'usage légitime du terme « beau ». Elle distingue clairement le beau de ce qui est simplement agréable ou charmant pour un individu particulier. Si quelque chose ne me plaît qu'à moi, je peux le trouver agréable, charmant, séduisant, mais je n'ai pas le droit de l'appeler « beau » au sens strict du terme. Cette restriction linguistique correspond à une exigence philosophique : le beau n'est pas une propriété que je projette arbitrairement sur les objets selon mes préférences personnelles, mais une qualité dont la reconnaissance implique une prétention à l'accord universel. Ainsi, l'usage du mot « beau » engage une responsabilité : il suppose que j'ai examiné mon jugement, que j'ai cherché à m'assurer qu'il n'est pas fondé sur des considérations purement personnelles, et que je le propose légitimement à l'assentiment de tous."
    },

    // Question n°9
    { 
        question: "Question n°9 : Que fait-on quand on dit qu'une chose est belle selon Kant ?",
        answers: [
            "Réponse : on exprime une préférence personnelle", 
            "Réponse : on attribue aux autres la même satisfaction", 
            "Réponse : on décrit une propriété physique"
        ], 
        correct: 2,
        explanation: "Kant analyse : « lorsqu'il dit qu'une chose est belle, il attribue aux autres la même satisfaction ; il ne juge pas seulement pour lui, mais aussi pour autrui. » Cette attribution est l'élément décisif qui distingue le jugement de beauté du simple constat de plaisir personnel. En disant « c'est beau », je ne me contente pas de décrire mon état subjectif ; je présuppose que tout autre être raisonnable, placé dans les mêmes conditions, éprouverait la même satisfaction. Cette attribution n'est pas une simple hypothèse psychologique (« les autres vont probablement aimer aussi ») mais une exigence normative (« les autres doivent aimer »). Elle transforme le jugement esthétique d'un fait personnel en une revendication universelle. Cette analyse phénoménologique est remarquable : elle montre que dans l'acte même de porter un jugement de goût, nous impliquons les autres, nous les incluons dans notre expérience, nous leur demandons de confirmer notre sentiment."
    },

    // Question n°10
    { 
        question: "Question n°10 : Comment parle-t-on de la beauté selon Kant ?",
        answers: [
            "Réponse : comme d'une propriété des choses", 
            "Réponse : comme d'une illusion", 
            "Réponse : comme d'une simple sensation"
        ], 
        correct: 1,
        explanation: "Kant remarque : « il parle alors de la beauté comme si elle était une propriété des choses. » Cette observation linguistique est cruciale : elle révèle comment le langage ordinaire trahit la prétention à l'objectivité inhérente au jugement de goût. Quand nous disons « cette fleur est belle », nous utilisons la même structure grammaticale que quand nous disons « cette fleur est rouge » - comme si la beauté était une qualité objective de la fleur au même titre que sa couleur. Cette analogie grammaticale n'est pas accidentelle : elle correspond à la prétention du jugement esthétique à l'universalité. Cependant, Kant soulignera ailleurs que cette objectivité n'est qu'apparente : la beauté n'est pas vraiment une propriété des choses, mais elle est « subjectivement universelle » - elle vaut pour tous les sujets sans être pour autant une qualité de l'objet. Cette tension entre la forme linguistique (qui suggère l'objectivité) et la nature réelle (qui est subjective mais universelle) constitue l'un des paradoxes fascinants du jugement de goût."
    },

    // Question n°11
    { 
        question: "Question n°11 : Que fait-on dans un jugement de beauté selon Kant ?",
        answers: [
            "Réponse : on exige l'adhésion des autres", 
            "Réponse : on accepte toutes les opinions", 
            "Réponse : on reste indifférent"
        ], 
        correct: 1,
        explanation: "Kant précise : « dans son jugement exprimant sa satisfaction, il exige l'adhésion des autres. » Cette exigence est constitutive du jugement de goût authentique. Il ne s'agit pas d'une simple attente ou d'un espoir, mais d'une revendication légitime : celui qui juge qu'une chose est belle considère que les autres devraient partager son sentiment. Cette exigence distingue radicalement le jugement de goût du simple constat de plaisir personnel. Elle montre que le jugement esthétique a une dimension normative : il ne se contente pas de décrire un fait psychologique, il prescrit ce que les autres devraient ressentir. Cette exigence n'est pas arbitraire : elle repose, selon Kant, sur le présupposition d'un « sens commun » (sensus communis) qui est la condition de possibilité de toute communication des sentiments. Ainsi, quand j'exige l'adhésion des autres à mon jugement de goût, je ne fais pas preuve d'intolérance mais je manifeste la prétention à l'universalité qui est au cœur de l'expérience esthétique."
    },

    // Question n°12
    { 
        question: "Question n°12 : Comment réagit-on face à ceux qui jugent autrement du beau ?",
        answers: [
            "Réponse : on les blâme et on leur dénie le goût", 
            "Réponse : on accepte leur différence", 
            "Réponse : on change d'avis"
        ], 
        correct: 1,
        explanation: "Kant observe : « Il les blâme s'ils jugent autrement et leur dénie un goût, qu'ils devraient cependant posséder d'après ses exigences. » Cette réaction spontanée face au désaccord en matière de goût révèle la nature normative du jugement esthétique. Contrairement au domaine de l'agréable où les différences sont acceptées sans discussion, dans le domaine du beau, le désaccord est perçu comme un problème, voire comme une faute. Blâmer ceux qui jugent autrement, leur « dénier un goût », c'est considérer qu'ils manquent à une exigence qui devrait pourtant être universelle. Cette réaction n'est pas due à un simple entêtement personnel, mais à la conviction que le jugement de goût, s'il est authentique, doit pouvoir s'imposer à tout être doué de sensibilité et de raison. Pour Kant, cette réaction est significative : elle montre que nous présupposons l'existence d'une faculté de juger esthétique commune à tous les êtres humains, et que nous tenons ceux qui jugent différemment pour déficients dans l'exercice de cette faculté."
    },

    // Question n°13
    { 
        question: "Question n°13 : Que signifie « À chacun son goût » appliqué au beau selon Kant ?",
        answers: [
            "Réponse : une vérité esthétique", 
            "Réponse : la négation du goût et du jugement esthétique", 
            "Réponse : un principe moral"
        ], 
        correct: 2,
        explanation: "Kant conclut : « Cela reviendrait à dire : le goût n'existe pas, il n'existe pas de jugement esthétique qui pourrait légitimement prétendre à l'assentiment de tous. » Cette analyse montre que le principe « à chacun son goût », s'il était appliqué au beau, équivaudrait à un scepticisme esthétique radical. Il nierait la possibilité même d'un jugement de goût authentique, c'est-à-dire d'un jugement qui, bien que subjectif, prétend à l'accord universel. Pour Kant, cela serait inacceptable car cela contredirait l'expérience phénoménologique même du jugement esthétique : quand nous disons « c'est beau », nous ne nous contentons pas d'exprimer une préférence personnelle, nous revendiquons une validité universelle. Ainsi, le principe « à chacun son goût » ne peut valoir que pour l'agréable ; l'appliquer au beau, ce serait nier la spécificité du jugement esthétique et réduire la beauté à un simple plaisir sensoriel variable selon les individus."
    },

    // Question n°14
    { 
        question: "Question n°14 : Quelle est la nature du jugement de goût selon Kant ?",
        answers: [
            "Réponse : un jugement subjectif mais prétendant à l'universalité", 
            "Réponse : un jugement objectif et scientifique", 
            "Réponse : un jugement purement arbitraire"
        ], 
        correct: 1,
        explanation: "Pour Kant, le jugement de goût présente une nature paradoxale : il est subjectif (car fondé sur un sentiment de plaisir ou de déplaisir) mais il prétend néanmoins à l'universalité (car nous exigeons l'adhésion de tous). Cette double caractéristique en fait un type de jugement unique, que Kant appelle « jugement réfléchissant » par opposition aux jugements déterminants de la connaissance scientifique. Le jugement de goût n'est pas objectif au sens où il ne se fonde pas sur des concepts déterminés de l'entendement, mais il n'est pas non plus purement subjectif au sens de l'agréable, car il revendique une validité intersubjective. Cette nature hybride explique pourquoi le jugement esthétique a longtemps posé problème à la philosophie : il échappe aux catégories traditionnelles de l'objectif et du subjectif. La grande originalité de Kant est d'avoir reconnu cette spécificité et d'avoir cherché à en expliquer la possibilité à travers sa théorie des facultés de l'esprit et du sens commun."
    },

    // Question n°15
    { 
        question: "Question n°15 : Que montre l'exigence d'accord dans le jugement de beauté ?",
        answers: [
            "Réponse : la prétention à l'universalité du jugement esthétique", 
            "Réponse : l'intolérance des gens", 
            "Réponse : l'objectivité des propriétés esthétiques"
        ], 
        correct: 1,
        explanation: "L'exigence d'accord dans le jugement de beauté révèle, selon Kant, la prétention à l'universalité qui est constitutive du jugement esthétique authentique. Cette exigence n'est pas un simple fait psychologique (le désir que les autres partagent nos goûts) mais une dimension essentielle de l'expérience esthétique elle-même. Quand nous jugeons qu'une chose est belle, nous ne nous contentons pas de constater un plaisir personnel ; nous affirmons que ce plaisir devrait être éprouvé par tout être raisonnable placé dans les mêmes conditions. Cette prétention à l'universalité distingue radicalement le jugement de goût des simples préférences sensibles. Elle montre que l'expérience esthétique, bien qu'étant d'ordre sensible, engage notre humanité commune, notre capacité à partager des sentiments. Pour Kant, cette universalité présumée du jugement de goût repose sur le présupposition d'un « sens commun » (sensus communis) qui est la condition de possibilité de toute communication des sentiments et, finalement, de toute vie sociale harmonieuse."
    },

    // Question n°16
    { 
        question: "Question n°16 : Quelle distinction fondamentale Kant établit-il ?",
        answers: [
            "Réponse : entre agréable (subjectif) et beau (subjectif mais universel)", 
            "Réponse : entre beau et sublime", 
            "Réponse : entre art et nature"
        ], 
        correct: 1,
        explanation: "La distinction fondamentale que Kant établit dans ce texte est entre l'agréable, qui est purement subjectif et individuel, et le beau, qui est subjectif mais prétend à l'universalité. Cette distinction structure toute l'analyse kantienne du jugement de goût et constitue l'une de ses contributions majeures à l'esthétique philosophique. Alors que l'agréable relève de la sensibilité pure et varie selon les individus, leurs dispositions physiologiques, leurs habitudes, leurs associations d'idées, le beau engage une dimension universelle de l'être humain. Cette distinction permet à Kant de répondre à un problème ancien de l'esthétique : comment concilier le caractère apparemment subjectif des jugements de goût (les goûts et les couleurs...) avec leur prétention à l'objectivité (nous discutons et argumentons sur la beauté). En distinguant soigneusement ces deux types de jugements, Kant peut reconnaître la légitimité du relativisme dans le domaine des plaisirs sensibles tout en affirmant la possibilité d'un accord universel dans le domaine esthétique proprement dit."
    },

    // Question n°17
    { 
        question: "Question n°17 : Pourquoi ne peut-on dire « À chacun son goût » pour le beau ?",
        answers: [
            "Réponse : parce que le goût n'existerait pas comme faculté de juger universellement", 
            "Réponse : parce que tout le monde a le même goût", 
            "Réponse : parce que la beauté est une illusion"
        ], 
        correct: 1,
        explanation: "On ne peut dire « À chacun son goût » pour le beau, selon Kant, parce que cela équivaudrait à nier l'existence même du goût comme faculté de juger pouvant prétendre légitimement à l'assentiment universel. Le principe « à chacun son goût », s'il était appliqué au beau, réduirait les jugements esthétiques à de simples expressions de préférences personnelles, sans aucune prétention à l'accord des autres. Or, pour Kant, cette réduction est inacceptable car elle contredit l'expérience phénoménologique même du jugement de goût : quand nous disons « c'est beau », nous ne nous contentons pas d'exprimer un plaisir personnel, nous revendiquons une validité pour tous. Accepter « à chacun son goût » pour le beau, ce serait donc renoncer à l'idée qu'il existe un jugement esthétique authentique, c'est-à-dire un jugement qui, bien que fondé sur un sentiment subjectif, peut légitimement exiger l'adhésion des autres. Ce serait nier la possibilité même d'une esthétique philosophique."
    },

    // Question n°18
    { 
        question: "Question n°18 : Quelle est la caractéristique du « beau » par opposition au « charmant » ?",
        answers: [
            "Réponse : le beau prétend à l'accord universel, le charmant est personnel", 
            "Réponse : le beau est toujours utile, le charmant inutile", 
            "Réponse : le beau est rare, le charmant commun"
        ], 
        correct: 1,
        explanation: "Kant établit une distinction nette : « Beaucoup de choses peuvent avoir pour lui du charme ou de l'agrément ; personne ne s'en soucie ; toutefois lorsqu'il dit qu'une chose est belle, il attribue aux autres la même satisfaction. » Le charmant (ou l'agréable) est de l'ordre de la préférence personnelle ; il ne donne lieu à aucune exigence d'accord universel. Si quelque chose me charme, je reconnais volontiers que cela peut laisser les autres indifférents. En revanche, le beau implique nécessairement une prétention à l'universalité : quand je juge qu'une chose est belle, je considère que les autres devraient éprouver la même satisfaction que moi. Cette distinction est cruciale car elle permet de séparer ce qui relève du simple plaisir sensoriel (variable selon les individus) de ce qui relève de l'appréciation esthétique proprement dite (qui engage notre humanité commune). Le charmant flatte mes sens ; le beau éveille en moi un sentiment qui, je le présume, doit être accessible à tout être raisonnable."
    },

    // Question n°19
    { 
        question: "Question n°19 : À quel siècle et courant philosophique appartient ce texte ?",
        answers: [
            "Réponse : XVIIIe siècle, philosophie critique (idéalisme transcendantal)", 
            "Réponse : XVIIe siècle, rationalisme", 
            "Réponse : XIXe siècle, romantisme"
        ], 
        correct: 1,
        explanation: "Ce texte est extrait de la Critique de la faculté de juger publiée par Emmanuel Kant en 1790, ce qui le situe à la fin du XVIIIe siècle, période des Lumières. Kant (1724-1804) est le fondateur de la philosophie critique ou idéalisme transcendantal, courant philosophique qui cherche à déterminer les conditions de possibilité de la connaissance, de la moralité et du jugement esthétique. La philosophie critique kantienne se caractérise par son attention aux structures a priori de l'esprit humain et par sa tentative de délimiter les domaines de validité des différentes facultés (entendement, raison, jugement). La Critique de la faculté de juger, troisième grande Critique après la Critique de la raison pure (1781) et la Critique de la raison pratique (1788), vise à combler le fossé entre la nature (domaine de la nécessité) et la liberté (domaine de la moralité) en analysant la faculté de juger, notamment dans ses usages esthétiques et téléologiques. Ce texte sur la distinction entre agréable et beau s'inscrit donc dans ce projet philosophique d'ensemble."
    },

    // Question n°20
    { 
        question: "Question n°20 : Quelle est la portée philosophique de cette distinction ?",
        answers: [
            "Réponse : elle fonde l'autonomie du jugement esthétique", 
            "Réponse : elle nie toute valeur à l'art", 
            "Réponse : elle réduit la beauté à l'utilité"
        ], 
        correct: 1,
        explanation: "La distinction kantienne entre agréable et beau a une portée philosophique considérable : elle fonde l'autonomie du jugement esthétique comme type spécifique de jugement, irréductible aussi bien au jugement de connaissance (qui porte sur des propriétés objectives) qu'au simple constat de plaisir sensoriel. En établissant que le jugement de goût, tout en étant subjectif, prétend à l'universalité, Kant ouvre la voie à une esthétique qui échappe à la fois au subjectivisme radical (tout est affaire de goût personnel) et à l'objectivisme naïf (la beauté est une propriété des choses). Cette autonomisation du jugement esthétique permet de penser l'art non comme un simple divertissement ou une imitation de la nature, mais comme une activité humaine spécifique qui engage notre capacité à juger et à communiquer des sentiments. Elle prépare également la célèbre définition kantienne du beau comme « ce qui plaît universellement sans concept » et fonde la possibilité d'une critique d'art qui ne soit ni purement technique ni purement impressionniste. Enfin, elle relie l'esthétique à l'éthique en suggérant que le jugement de goût préfigure l'accord des volontés dans la communauté morale."
    },

    // Question n°21
    { 
        question: "Question n°21 : Comment Kant définit-il le plaisir esthétique par opposition au plaisir sensoriel ?",
        answers: [
            "Réponse : le plaisir esthétique est désintéressé, le plaisir sensoriel est intéressé", 
            "Réponse : le plaisir esthétique est plus intense", 
            "Réponse : le plaisir sensoriel est plus durable"
        ], 
        correct: 1,
        explanation: "Bien que ce point ne soit pas explicitement développé dans ce passage, il est sous-jacent à toute l'analyse kantienne : le plaisir esthétique est désintéressé, alors que le plaisir sensoriel (l'agréable) est intéressé. Pour Kant, le plaisir que nous éprouvons devant le beau est « désintéressé » dans le sens où il ne dépend pas de l'existence réelle de l'objet, ni de sa capacité à satisfaire un besoin ou un désir. Nous pouvons trouver beau un tableau même si nous ne désirons pas le posséder, une musique même si elle ne nous est pas utile. En revanche, le plaisir sensoriel est toujours « intéressé » : il est lié à la satisfaction d'un besoin, d'un désir, d'une inclination. Je trouve le vin agréable parce qu'il satisfait mon palais, la couleur douce parce qu'elle me repose les yeux. Cette distinction entre intérêt et désintéressement est fondamentale car elle explique pourquoi le jugement sur le beau peut prétendre à l'universalité : étant libéré des inclinations purement personnelles, il peut revendiquer une validité pour tout être raisonnable. Le plaisir esthétique est ainsi un plaisir « libre » qui naît du jeu harmonieux de nos facultés (imagination et entendement) plutôt que de la satisfaction d'un intérêt particulier."
    },

    // Question n°22
    { 
        question: "Question n°22 : Quelle est la fonction du « sens commun » (sensus communis) dans l'esthétique kantienne ?",
        answers: [
            "Réponse : une faculté qui permet de percevoir les couleurs", 
            "Réponse : le principe subjectif qui fonde la prétention à l'universalité du jugement de goût", 
            "Réponse : la capacité à distinguer le vrai du faux"
        ], 
        correct: 2,
        explanation: "Le « sens commun » (sensus communis) est, pour Kant, le principe subjectif qui fonde la prétention à l'universalité du jugement de goût. Il ne s'agit pas d'un sens physique comme la vue ou l'ouïe, ni d'une opinion commune, mais d'une faculté de juger qui nous est attribuée a priori. Ce sens commun est l'idée que nous présupposons lorsque nous exigeons l'adhésion des autres à nos jugements esthétiques : nous supposons que tout être humain possède la même capacité à éprouver du plaisir devant ce qui est beau, parce que cette capacité repose sur des conditions subjectives universelles de la connaissance. Plus précisément, le sens commun est le principe selon lequel nous jugeons en faisant abstraction de nos inclinations personnelles et en nous plaçant au point de vue de tout autre. Il est ainsi le fondement de la communicabilité des sentiments et de la possibilité d'une communauté esthétique. Pour Kant, ce sens commun n'est pas démontrable empiriquement, mais il doit être présupposé comme condition de possibilité des jugements de goût. Il représente ainsi le lien entre l'esthétique et la socialité humaine."
    },

    // Question n°23
    { 
        question: "Question n°23 : Comment Kant analyse-t-il la relation entre beauté et moralité ?",
        answers: [
            "Réponse : la beauté est le symbole de la moralité", 
            "Réponse : la beauté et la moralité n'ont aucun rapport", 
            "Réponse : la moralité détruit la beauté"
        ], 
        correct: 1,
        explanation: "Dans des développements ultérieurs de la Critique de la faculté de juger, Kant établit un lien profond entre beauté et moralité : la beauté est le « symbole de la moralité ». Cette idée, bien qu'absente de ce passage spécifique, éclaire rétrospectivement l'analyse de la prétention à l'universalité du jugement de goût. Pour Kant, l'expérience du beau préfigure l'accord des volontés dans le règne des fins : de même que nous exigeons l'adhésion universelle à nos jugements esthétiques, de même la loi morale exige l'accord universel des volontés. Dans les deux cas, il s'agit d'une universalité qui n'est pas fondée sur des concepts mais sur un sentiment (plaisir esthétique / respect moral). La beauté nous familiarise ainsi avec l'idée d'universalité sans concept et prépare à la reconnaissance de la loi morale. De plus, le désintéressement du plaisir esthétique (nous apprécions la beauté sans désirer posséder l'objet) ressemble au désintéressement de l'action morale (nous agissons par pur respect pour la loi, non par intérêt). Cette analogie entre esthétique et éthique permet à Kant d'intégrer la réflexion sur le beau dans son système philosophique d'ensemble et de montrer comment les différentes facultés humaines s'articulent harmonieusement."
    },

    // Question n°24
    { 
        question: "Question n°24 : Quelle est la différence entre jugement déterminant et jugement réfléchissant ?",
        answers: [
            "Réponse : le jugement déterminant subsume sous des concepts, le jugement réfléchissant cherche des concepts pour le particulier", 
            "Réponse : le jugement déterminant est esthétique, le jugement réfléchissant est logique", 
            "Réponse : il n'y a pas de différence"
        ], 
        correct: 1,
        explanation: "Kant introduit une distinction capitale entre jugement déterminant et jugement réfléchissant, qui éclaire sa conception du jugement de goût. Le jugement déterminant est celui qui subsume un cas particulier sous un concept universel déjà donné : par exemple, quand je dis « ceci est une rose », j'applique le concept de rose à cette fleur particulière. C'est le type de jugement qui opère dans la connaissance scientifique. Le jugement réfléchissant, au contraire, part d'un cas particulier et cherche un concept universel pour le penser : c'est le cas du jugement de goût, où je suis confronté à un objet singulier (ce tableau, ce paysage) et où je cherche à formuler un jugement qui aurait valeur universelle sans pourtant pouvoir m'appuyer sur un concept déterminé. Le jugement esthétique est ainsi un jugement réfléchissant par excellence : il réfléchit sur la forme de l'objet et sur l'état d'accord harmonieux de mes facultés (imagination et entendement) qu'elle provoque. Cette distinction permet à Kant de situer le jugement de goût dans l'économie générale des facultés : il occupe une position médiatrice entre la sensibilité et l'entendement, entre le particulier et l'universel, préparant ainsi le passage de la nature à la liberté."
    },

    // Question n°25
    { 
        question: "Question n°25 : Comment Kant analyse-t-il le sublime par rapport au beau ?",
        answers: [
            "Réponse : le sublime provoque un plaisir mêlé de terreur, le beau un plaisir pur", 
            "Réponse : le sublime et le beau sont identiques", 
            "Réponse : le sublime est inférieur au beau"
        ], 
        correct: 1,
        explanation: "Dans la Critique de la faculté de juger, Kant distingue soigneirement le beau du sublime. Alors que le beau provoque un plaisir pur et immédiat, le sublime suscite un plaisir négatif, mêlé de terreur ou d'effroi. Le beau est lié à la forme de l'objet, à sa limitation, à son harmonie ; le sublime, au contraire, est lié à l'illimité, à l'informe, à ce qui dépasse toute mesure. Devant un paysage de montagnes écrasantes ou un océan déchaîné (sublime dynamique), ou devant l'immensité du ciel étoilé (sublime mathématique), nous éprouvons d'abord un sentiment d'écrasement, d'impuissance de notre imagination à embrasser la totalité. Mais ce sentiment négatif est converti en plaisir positif par la raison qui prend conscience de sa propre suprématie sur la nature. Le sublime nous révèle ainsi notre vocation morale : si la nature nous dépasse par sa grandeur, notre raison, elle, est capable de penser l'infini. Cette analyse montre que pour Kant, l'expérience esthétique a différentes modalités qui correspondent à différentes dimensions de l'être humain : le beau révèle l'harmonie de nos facultés, le sublime révèle la supériorité de notre raison sur la nature sensible."
    },

    // Question n°26
    { 
        question: "Question n°26 : Quelle est la place de l'art dans l'esthétique kantienne ?",
        answers: [
            "Réponse : l'art est une production du génie qui donne des règles à l'art", 
            "Réponse : l'art n'est qu'une imitation de la nature", 
            "Réponse : l'art est inférieur à la nature"
        ], 
        correct: 1,
        explanation: "Pour Kant, l'art n'est pas une simple imitation de la nature (position qu'il critique), mais une production du « génie ». Le génie est défini comme le talent naturel qui donne ses règles à l'art. Cette conception rompt avec les théories classiques de l'art comme imitation : l'artiste génial ne copie pas la nature, il crée des œuvres originales qui semblent pourtant avoir la nécessité de la nature. L'œuvre d'art géniale apparaît comme si elle était naturelle, bien qu'elle soit le produit de la liberté humaine. Cette idée est complémentaire de l'analyse du jugement de goût : de même que le spectateur juge l'œuvre belle en présupposant un sens commun, de même l'artiste créateur produit l'œuvre en obéissant à une règle qu'il ne peut formuler explicitement mais qui s'impose à lui comme naturelle. L'art ainsi conçu est le lieu où la nature et la liberté se rejoignent : il est production libre (donc humaine) mais qui semble nécessaire (donc naturelle). Cette conception de l'art comme médiation entre nature et liberté correspond parfaitement au projet général de la troisième Critique qui cherche précisément à combler le fossé entre le monde de la nécessité naturelle et le monde de la liberté morale."
    },

    // Question n°27
    { 
        question: "Question n°27 : Comment Kant définit-il le génie ?",
        answers: [
            "Réponse : comme la capacité à imiter parfaitement la nature", 
            "Réponse : comme le talent naturel qui donne ses règles à l'art", 
            "Réponse : comme la maîtrise technique parfaite"
        ], 
        correct: 2,
        explanation: "Kant définit le génie comme « le talent (don naturel) qui donne les règles à l'art ». Cette définition est révolutionnaire à plusieurs égards. D'abord, elle fait du génie un don naturel, non quelque chose qui s'acquiert par l'étude ou l'effort. Ensuite, elle inverse la relation traditionnelle entre règles et création : d'habitude, l'artiste applique des règles préexistantes ; le génie, lui, crée des œuvres qui établissent de nouvelles règles. Le génie ne suit pas des recettes, il invente des manières de faire qui deviendront des modèles pour d'autres. Cependant, Kant précise que le génie ne produit pas n'importe quoi : ses créations doivent avoir une « exemplarité », c'est-à-dire pouvoir servir de modèles, et une « originalité », c'est-à-dire être nouvelles. Cette conception du génie comme législateur de l'art s'accorde avec l'analyse du jugement de goût : de même que le spectateur juge en présupposant un sens commun, de même l'artiste génial crée en obéissant à une règle innée qui correspond aux conditions universelles de la beauté. Le génie est ainsi la contrepartie créatrice du goût : là où le goût juge, le génie produit."
    },

    // Question n°28
    { 
        question: "Question n°28 : Quelle est la relation entre goût et génie selon Kant ?",
        answers: [
            "Réponse : le génie prime toujours sur le goût", 
            "Réponse : le goût discipline le génie", 
            "Réponse : ils sont totalement indépendants"
        ], 
        correct: 2,
        explanation: "Pour Kant, le goût et le génie sont deux facultés distinctes mais complémentaires dans la production artistique. Le génie est la faculté créatrice, qui produit des idées esthétiques originales. Le goût est la faculté de juger, qui évalue si ces productions sont belles, c'est-à-dire si elles peuvent prétendre à l'accord universel. Kant insiste sur la nécessité de leur collaboration : sans génie, l'art manque d'originalité et de vie ; sans goût, il manque de mesure et de communicabilité. En particulier, le goût doit « discipliner » le génie : il empêche les excès, les extravagances, tout ce qui serait purement original mais ne pourrait prétendre à l'universalité. Une œuvre vraiment réussie est donc celle qui allie la force créatrice du génie à la mesure du goût. Cette articulation entre création et jugement reflète la structure même de la faculté de juger, qui est à la fois productive (dans l'art) et réceptrice (dans l'appréciation). Elle montre que pour Kant, l'art n'est pas l'expression brute de la subjectivité, mais une activité qui engage notre humanité commune et présuppose un accord possible des esprits."
    },

    // Question n°29
    { 
        question: "Question n°29 : Comment Kant comprend-il la finalité dans la nature et dans l'art ?",
        answers: [
            "Réponse : la nature a une finalité interne, l'art une finalité sans fin", 
            "Réponse : la nature et l'art n'ont aucune finalité", 
            "Réponse : seul l'art a une finalité"
        ], 
        correct: 1,
        explanation: "Kant introduit la notion de « finalité sans fin » (Zweckmässigkeit ohne Zweck) pour caractériser à la fois la beauté naturelle et la beauté artistique. Une chose est belle quand elle donne l'impression d'être finalisée, c'est-à-dire d'avoir été faite selon un dessein, une intention, mais sans que nous puissions assigner à cette finalité un but déterminé. Devant une fleur ou un cristal, nous avons le sentiment qu'ils sont « faits pour » quelque chose, mais nous ne savons pas pour quoi. De même, une œuvre d'art réussie semble obéir à une nécessité interne, comme si chaque détail était à sa place, mais sans que nous puissions réduire cette organisation à une fonction utilitaire ou à un message déterminé. Cette « finalité sans fin » est précisément ce qui distingue le beau de l'utile (qui a une fin déterminée) et de l'agréable (qui satisfait un besoin). Elle correspond au jeu libre de nos facultés : imagination et entendement sont en harmonie, comme si elles étaient faites l'une pour l'autre, mais sans que cette harmonie soit subordonnée à un concept déterminé. La finalité esthétique est ainsi une finalité subjective : elle n'est pas dans l'objet mais dans la manière dont notre esprit l'appréhende."
    },

    // Question n°30
    { 
        question: "Question n°30 : Quelle est la place de l'imagination dans l'esthétique kantienne ?",
        answers: [
            "Réponse : l'imagination est la faculté créatrice libre qui joue avec l'entendement", 
            "Réponse : l'imagination est une faculté inférieure à copier", 
            "Réponse : l'imagination n'a aucune importance"
        ], 
        correct: 1,
        explanation: "Dans l'esthétique kantienne, l'imagination joue un rôle central comme faculté créatrice libre qui entre en jeu harmonieux avec l'entendement. Alors que dans la connaissance, l'imagination est soumise à l'entendement (elle synthétise le divers selon les catégories), dans l'expérience esthétique, elle joue librement avec l'entendement, sans être contrainte par des concepts déterminés. Devant une œuvre belle, l'imagination parcourt librement les formes, les combine, les transforme, tandis que l'entendement cherche sans les trouver des concepts pour les saisir. C'est ce jeu libre et harmonieux entre imagination et entendement qui produit le plaisir esthétique. L'imagination est ainsi la faculté qui nous permet d'apprécier la « finalité sans fin » des formes belles : elle perçoit l'organisation des formes comme si elle était finalisée, mais sans la réduire à un concept déterminé. Dans la création artistique, l'imagination du génie est encore plus importante : elle produit des « idées esthétiques », c'est-à-dire des représentations riches qui suscitent beaucoup de pensées mais qu'aucun concept ne peut épuiser. L'imagination est ainsi au cœur de l'expérience esthétique, tant du côté de la réception que de la création."
    },

    // Question n°31
    { 
        question: "Question n°31 : Comment Kant analyse-t-il les beaux-arts ?",
        answers: [
            "Réponse : il les classe selon leur capacité à exprimer des idées esthétiques", 
            "Réponse : il ne s'intéresse qu'à la peinture", 
            "Réponse : il les considère tous comme équivalents"
        ], 
        correct: 1,
        explanation: "Kant propose une classification des beaux-arts basée sur leur capacité à exprimer des « idées esthétiques ». Les idées esthétiques sont des représentations de l'imagination qui suscitent une abondance de pensées sans qu'aucun concept ne puisse les épuiser. Kant distingue trois grands types d'arts : 1) Les arts de la parole (poésie, éloquence), qui sont les plus élevés car ils peuvent exprimer l'inexprimable et éveiller le plus d'idées ; 2) Les arts de la forme (peinture, sculpture, architecture), qui présentent des formes dans l'espace ; 3) Les arts du jeu des sensations (musique, art des couleurs). La poésie est pour Kant l'art suprême car elle peut, par le jeu des mots et des images, évoquer des mondes entiers et susciter une réflexion infinie. Cette classification n'est pas arbitraire : elle correspond au degré de liberté de l'imagination dans chaque art et à leur capacité à éveiller l'esprit sans le contraindre par des concepts. Elle montre que pour Kant, la valeur d'un art ne se mesure pas à sa capacité à imiter la nature, mais à sa puissance d'expression et à sa capacité à mettre en jeu librement nos facultés."
    },

    // Question n°32
    { 
        question: "Question n°32 : Quelle est la conception kantienne de la perfection esthétique ?",
        answers: [
            "Réponse : la beauté est indépendante de la perfection", 
            "Réponse : la beauté est identique à la perfection", 
            "Réponse : la perfection détruit la beauté"
        ], 
        correct: 1,
        explanation: "Kant distingue soigneusement la beauté de la perfection. La perfection implique l'adéquation d'un objet à un concept de ce qu'il doit être. Par exemple, un cheval est parfait s'il correspond au concept de cheval idéal. Cette perfection peut être appréciée par un jugement logique (ou téléologique). La beauté, au contraire, est indépendante de tout concept de perfection : nous trouvons beau un objet sans avoir besoin de savoir à quoi il doit servir ou ce qu'il doit être. Un coquillage ou une arabesque peuvent être beaux sans que nous ayons le moindre concept de ce qu'un coquillage ou une arabesque « devraient » être. Cette indépendance de la beauté par rapport à la perfection est essentielle pour Kant : elle garantit le caractère « libre » et désintéressé du plaisir esthétique. Si la beauté dépendait de la perfection, elle serait subordonnée à des concepts et perdrait son autonomie. Bien sûr, Kant reconnaît qu'il existe une « beauté adhérente » (comme la beauté d'un être humain) qui combine beauté et perfection, mais il insiste sur le fait que la beauté pure (comme celle d'une fleur) est indépendante de toute considération de finalité ou de concept. C'est cette pureté qui fonde sa prétention à l'universalité."
    },

    // Question n°33
    { 
        question: "Question n°33 : Comment Kant analyse-t-il la relation entre beau naturel et beau artistique ?",
        answers: [
            "Réponse : le beau naturel est supérieur car il est désintéressé", 
            "Réponse : le beau artistique est supérieur car il exprime l'esprit humain", 
            "Réponse : ils sont strictement équivalents"
        ], 
        correct: 1,
        explanation: "Pour Kant, le beau naturel (une fleur, un paysage) a une certaine supériorité sur le beau artistique (un tableau, une symphonie) en ce qu'il est plus purement désintéressé. Devant une fleur, nous ne pouvons même pas soupçonner qu'elle ait été faite pour nous plaire ; sa beauté semble donc plus « gratuite », plus indépendante de toute intention humaine. En revanche, une œuvre d'art a été produite par un être humain avec l'intention (au moins implicite) de plaire. Cette intention pourrait corrompre le désintéressement de notre plaisir. Cependant, Kant reconnaît aussi que l'art a sa propre dignité : il exprime l'esprit humain, la liberté créatrice, les idées esthétiques. Une œuvre d'art réussie est même « plus belle » que la nature en un sens, car elle montre comment l'esprit humain peut créer des formes qui semblent naturelles tout en étant des produits de la liberté. Finalement, Kant établit une complémentarité : la nature nous offre des modèles de beauté pure, désintéressée ; l'art nous montre comment l'esprit humain peut, à partir de sa liberté, produire à son tour de la beauté. Les deux formes de beauté nous révèlent différentes dimensions de notre relation au monde : la réceptivité désintéressée et la créativité libre."
    },

    // Question n°34
    { 
        question: "Question n°34 : Quelle est la place de la culture dans le développement du goût selon Kant ?",
        answers: [
            "Réponse : la culture est nécessaire pour perfectionner le goût naturel", 
            "Réponse : le goût est inné, la culture n'a aucun effet", 
            "Réponse : la culture corrompt le goût naturel"
        ], 
        correct: 1,
        explanation: "Kant reconnaît que si la faculté de juger esthétiquement est une disposition naturelle commune à tous les êtres humains (c'est le « sens commun »), elle a besoin d'être cultivée, exercée, perfectionnée par l'éducation et la fréquentation des œuvres d'art. Le goût brut, spontané, peut se tromper, confondre l'agréable et le beau, le charmant et le sublime. La culture esthétique (l'étude des œuvres, la discussion, la comparaison) permet d'affiner le jugement, de distinguer les différents types de beauté, de reconnaître les chefs-d'œuvre. Cependant, Kant insiste sur le fait que cette culture ne crée pas le goût ex nihilo : elle développe une capacité qui est déjà présente en germe. Elle est à l'esthétique ce que l'éducation est à la morale : elle ne donne pas les principes (qui sont a priori), mais elle apprend à les appliquer correctement. Cette conception évite à la fois le naturalisme naïf (tout le monde a spontanément bon goût) et le culturalisme radical (le goût est entièrement construit par la société). Elle permet de comprendre pourquoi il peut y avoir des désaccords en matière de goût (la culture varie) tout en maintenant la possibilité d'un accord universel (car tous partagent la même faculté de base)."
    },

    // Question n°35
    { 
        question: "Question n°35 : Comment Kant définit-il les idées esthétiques ?",
        answers: [
            "Réponse : des représentations de l'imagination qui suscitent une abondance de pensées", 
            "Réponse : des concepts clairs et distincts", 
            "Réponse : des impressions sensibles pures"
        ], 
        correct: 1,
        explanation: "Kant introduit la notion d'« idée esthétique » pour désigner ces représentations de l'imagination qui sont si riches qu'elles suscitent une abondance de pensées et de sentiments, sans qu'aucun concept ne puisse les épuiser complètement. Une idée esthétique est comme l'envers d'une idée de la raison : alors qu'une idée de la raison (comme l'idée de liberté ou d'immortalité) est un concept qui dépasse toute expérience possible, une idée esthétique est une représentation sensible (une image, un son, une forme) qui dépasse tout concept déterminé. Par exemple, un poème peut évoquer la mélancolie par des images qui suggèrent beaucoup plus que ne pourrait le faire une définition conceptuelle de la mélancolie. Les idées esthétiques sont le propre du génie artistique : l'artiste génial a la capacité de créer des formes qui éveillent en nous une profusion de pensées et de sentiments. Elles sont aussi ce qui fait la supériorité de l'art sur la nature pure : l'art peut exprimer ce qui est inexprimable conceptuellement. Les idées esthétiques montrent ainsi comment l'imagination peut être « productrice » et pas seulement « reproductrice », comment elle peut créer du nouveau qui élargit notre horizon mental."
    },

    // Question n°36
    { 
        question: "Question n°36 : Quelle est la relation entre jugement esthétique et jugement téléologique ?",
        answers: [
            "Réponse : ce sont deux formes du jugement réfléchissant", 
            "Réponse : ils n'ont aucun rapport", 
            "Réponse : ils sont identiques"
        ], 
        correct: 1,
        explanation: "Dans la Critique de la faculté de juger, Kant distingue deux types de jugements réfléchissants : le jugement esthétique (qui porte sur la beauté et le sublime) et le jugement téléologique (qui porte sur la finalité dans la nature). Ces deux jugements ont en commun de ne pas subsumer le particulier sous un universel déjà donné, mais de réfléchir sur le particulier pour y trouver une forme d'unité ou de signification. Le jugement esthétique découvre une « finalité sans fin » dans les formes belles : elles semblent faites pour être appréciées, mais sans but déterminé. Le jugement téléologique découvre une finalité objective dans les organismes vivants : ils semblent organisés en vue d'une fin (la survie, la reproduction). Ces deux types de jugement sont complémentaires : l'un révèle la finalité subjective (l'accord de l'objet avec nos facultés), l'autre révèle la finalité objective (l'organisation de l'objet en vue d'une fin). Ensemble, ils permettent de penser la nature non comme un simple mécanisme, mais comme un système qui semble fait pour être compris et apprécié par nous. Ils préparent ainsi l'idée d'une harmonie entre la nature et l'esprit humain, entre le monde des phénomènes et le monde de la liberté."
    },

    // Question n°37
    { 
        question: "Question n°37 : Comment Kant comprend-il la notion de « libre jeu » des facultés ?",
        answers: [
            "Réponse : comme l'accord harmonieux et non contraint de l'imagination et de l'entendement", 
            "Réponse : comme l'absence de toute règle", 
            "Réponse : comme le chaos créateur"
        ], 
        correct: 1,
        explanation: "La notion de « libre jeu » (freies Spiel) des facultés est centrale dans l'esthétique kantienne. Elle désigne l'état d'accord harmonieux et non contraint de l'imagination et de l'entendement devant un objet beau. Dans la connaissance ordinaire, l'imagination est au service de l'entendement : elle synthétise le divers sensible selon les catégories. Dans l'expérience esthétique, au contraire, l'imagination joue librement avec les formes, les combine, les transforme, sans être soumise à la contrainte des concepts. L'entendement, de son côté, est présent mais non dominateur : il cherche des concepts pour saisir ces formes, mais ne les trouve pas, ce qui laisse l'imagination libre. C'est ce jeu libre et harmonieux qui produit le plaisir esthétique : nous éprouvons une satisfaction à sentir nos facultés fonctionner de concert, dans un équilibre parfait où aucune ne domine l'autre. Ce « libre jeu » est subjectif (c'est un état de notre esprit) mais il est présumé universel (nous supposons que tout être humain pourrait l'éprouver devant le même objet). Il est ainsi le fondement phénoménologique de la prétention à l'universalité du jugement de goût : si je trouve un objet beau, c'est parce qu'il met mes facultés en libre jeu, et je présume que tout autre être humain, ayant les mêmes facultés, pourrait en faire l'expérience."
    },

    // Question n°38
    { 
        question: "Question n°38 : Quelle est la place de la sociabilité dans l'esthétique kantienne ?",
        answers: [
            "Réponse : le jugement de goût est essentiellement tourné vers la communication", 
            "Réponse : l'art est une activité purement solitaire", 
            "Réponse : la sociabilité corrompt le jugement esthétique"
        ], 
        correct: 1,
        explanation: "Pour Kant, le jugement de goût est essentiellement tourné vers la communication et présuppose la sociabilité humaine. Quand je dis « c'est beau », je ne me contente pas d'exprimer un plaisir personnel ; j'invite les autres à partager ce plaisir, je cherche leur accord. Cette dimension communicative est constitutive du jugement esthétique authentique. Elle repose sur le présupposition d'un « sens commun » (sensus communis) qui est la condition de possibilité de toute communication des sentiments. Kant va même jusqu'à dire que le goût pourrait être défini comme « la faculté de juger de ce qui rend universellement communicable notre sentiment ». Cette orientation vers la communication explique pourquoi l'expérience esthétique nous pousse naturellement à discuter des œuvres, à les commenter, à les critiquer. Elle montre aussi le lien profond entre esthétique et éthique : de même que la morale présuppose une communauté des volontés (le « règne des fins »), l'esthétique présuppose une communauté des sentiments. Le beau est ainsi ce qui peut être partagé, ce qui crée du lien entre les hommes. Dans cette perspective, l'art n'est pas un luxe individuel mais une activité essentielle à la vie sociale, car il exerce et perfectionne notre capacité à communiquer nos sentiments et à nous mettre à la place d'autrui."
    },

    // Question n°39
    { 
        question: "Question n°39 : Comment Kant analyse-t-il la relation entre beauté et vérité ?",
        answers: [
            "Réponse : la beauté est le symbole de la vérité morale", 
            "Réponse : la beauté et la vérité n'ont aucun rapport", 
            "Réponse : la beauté est une vérité supérieure"
        ], 
        correct: 1,
        explanation: "Pour Kant, la beauté n'est pas directement liée à la vérité théorique (la connaissance scientifique), mais elle est le « symbole de la moralité ». Cette affirmation célèbre signifie que l'expérience du beau entretient une analogie structurelle avec l'expérience morale, et qu'elle peut ainsi nous préparer à reconnaître et à accepter la loi morale. Plus précisément, Kant identifie quatre analogies : 1) Le plaisir esthétique, comme le respect moral, est désintéressé ; 2) Le beau plaît universellement, comme la loi morale vaut universellement ; 3) La beauté présente une finalité sans fin, comme la moralité est une fin en soi ; 4) Le beau est reconnu nécessairement, comme la loi morale s'impose nécessairement. Ces analogies ne signifient pas que le beau enseigne directement la moralité, mais qu'il nous familiarise avec des structures formelles (universalité, nécessité, désintéressement) qui sont aussi celles de la moralité. Ainsi, l'éducation esthétique peut préparer à l'éducation morale en développant notre capacité à juger de manière désintéressée et universelle. La beauté est ainsi le « pont » sensible entre la nature et la liberté, entre ce qui est et ce qui doit être."
    },

    // Question n°40
    { 
        question: "Question n°40 : Quelle est la postérité de l'esthétique kantienne ?",
        answers: [
            "Réponse : elle a influencé profondément l'esthétique et la philosophie de l'art moderne", 
            "Réponse : elle a été totalement oubliée", 
            "Réponse : elle n'a eu d'influence qu'en Allemagne"
        ], 
        correct: 1,
        explanation: "L'esthétique kantienne a eu une postérité immense et a influencé profondément l'esthétique et la philosophie de l'art modernes. Parmi ses héritages les plus importants, on peut citer : 1) La notion d'autonomie de l'art (l'art pour l'art) développée par les romantiques et les symbolistes ; 2) La théorie de l'« Einfühlung » (empathie esthétique) qui reprend l'idée de mise en jeu de nos facultés ; 3) La phénoménologie de l'expérience esthétique (Ingarden, Dufrenne) ; 4) Les théories formalistes (Clive Bell, Roger Fry) avec leur insistance sur la « forme significative » ; 5) La psychologie de la Gestalt et ses études sur la perception des formes ; 6) Les théories de la réception (Jauss, Iser) qui développent l'idée de la participation active du spectateur ; 7) La philosophie de l'art d'Arthur Danto et sa notion de « monde de l'art ». Même les penseurs qui critiquent Kant (comme Nietzsche, Heidegger ou Adorno) doivent se positionner par rapport à lui. Son analyse du jugement de goût comme à la fois subjectif et universel, sa distinction entre beau et agréable, sa théorie du génie, restent des références incontournables pour quiconque réfléchit sur l'art et la beauté. L'esthétique kantienne constitue ainsi l'un des fondements de la pensée esthétique moderne."
    },

    // Question n°41
    { 
        question: "Question n°41 : Comment Kant analyse-t-il le plaisir dans l'expérience esthétique ?",
        answers: [
            "Réponse : comme un plaisir de réflexion lié au libre jeu des facultés", 
            "Réponse : comme un plaisir sensoriel immédiat", 
            "Réponse : comme un plaisir intellectuel de connaissance"
        ], 
        correct: 1,
        explanation: "Pour Kant, le plaisir esthétique n'est ni un plaisir sensoriel immédiat (comme celui de l'agréable), ni un plaisir intellectuel de connaissance (comme celui de la vérité), mais un plaisir spécifique de réflexion lié au libre jeu des facultés. Ce plaisir naît quand l'imagination et l'entendement entrent dans un rapport harmonieux et non contraint devant une forme belle. Contrairement au plaisir sensoriel qui est passif (je reçois une sensation agréable), le plaisir esthétique est actif : il suppose une activité de l'esprit qui réfléchit sur ses propres opérations. Contrairement au plaisir de la connaissance qui est lié à la subsomption sous des concepts, le plaisir esthétique est lié à l'absence de concept déterminé, au jeu libre avec les formes. C'est pourquoi Kant le qualifie de « plaisir de la réflexion » : il provient de la conscience que nos facultés fonctionnent de manière harmonieuse, que l'objet est « fait pour » notre manière de connaître, sans pourtant servir à une connaissance déterminée. Ce plaisir est à la fois subjectif (c'est mon esprit qui l'éprouve) et présumé universel (je suppose que tout être humain pourrait l'éprouver). Il est ainsi le signe que l'objet beau réalise une adéquation particulière avec les structures universelles de l'esprit humain."
    },

    // Question n°42
    { 
        question: "Question n°42 : Quelle est la conception kantienne de la critique d'art ?",
        answers: [
            "Réponse : la critique doit analyser les conditions de possibilité du jugement de goût", 
            "Réponse : la critique doit imposer des règles aux artistes", 
            "Réponse : la critique est impossible"
        ], 
        correct: 1,
        explanation: "Pour Kant, la critique d'art (ou plutôt la « critique du goût ») ne consiste pas à imposer des règles aux artistes ni à prononcer des verdicts définitifs sur les œuvres, mais à analyser les conditions de possibilité du jugement de goût. La Critique de la faculté de juger est elle-même une telle critique : elle ne dit pas quelles œuvres sont belles, mais explore ce que signifie juger qu'une œuvre est belle, quelles facultés sont en jeu, quelle prétention est impliquée. La critique kantienne est ainsi « transcendantale » : elle remonte des faits de l'expérience esthétique à leurs conditions a priori. Cela ne signifie pas que Kant refuse toute évaluation concrète des œuvres, mais que cette évaluation doit être fondée sur une compréhension philosophique de la nature du jugement esthétique. Une bonne critique, pour Kant, serait celle qui aide le spectateur à exercer correctement son jugement de goût, à distinguer le beau de l'agréable, à reconnaître les idées esthétiques, à apprécier le jeu des facultés. Elle serait pédagogique plutôt que dogmatique, cherchant à développer le goût plutôt qu'à l'impressionner par son autorité. Cette conception de la critique comme analyse réflexive plutôt que comme jugement normatif a profondément influencé l'esthétique moderne."
    },

    // Question n°43
    { 
        question: "Question n°43 : Comment Kant comprend-il la relation entre forme et matière dans le beau ?",
        answers: [
            "Réponse : seul la forme est importante pour la beauté, la matière est indifférente", 
            "Réponse : seule la matière compte", 
            "Réponse : forme et matière sont inséparables"
        ], 
        correct: 1,
        explanation: "Pour Kant, dans l'expérience du beau, c'est la forme de l'objet qui est essentielle, non sa matière ou son contenu sensible. Un objet est beau en raison de l'organisation de ses formes (ses lignes, ses contours, sa composition) plutôt qu'en raison de ses couleurs ou de ses sons pris isolément. Bien sûr, Kant reconnaît que les couleurs et les sons peuvent être agréables, mais pour qu'ils soient beaux, ils doivent être organisés en une forme (une mélodie, une harmonie de couleurs). Cette insistance sur la forme plutôt que sur la matière correspond à plusieurs aspects de la théorie kantienne : d'abord, la forme est ce qui peut être saisi par l'imagination dans son jeu libre avec l'entendement ; ensuite, la forme est ce qui peut présenter une « finalité sans fin » ; enfin, la forme est plus susceptible d'être universellement appréciée que la matière qui dépend davantage de la sensibilité individuelle. Cette priorité de la forme explique pourquoi Kant valorise les arts du dessin (qui travaillent essentiellement la forme) sur les arts de la couleur, et la musique instrumentale (où la forme mélodique et harmonique est essentielle) sur la musique vocale (où le plaisir peut venir du timbre de la voix). Elle fonde aussi les théories formalistes en esthétique qui verront dans la forme l'essence de l'œuvre d'art."
    },

    // Question n°44
    { 
        question: "Question n°44 : Quelle est la place de l'éducation esthétique chez Kant ?",
        answers: [
            "Réponse : l'éducation esthétique développe la faculté de juger et prépare à la moralité", 
            "Réponse : l'éducation esthétique est inutile", 
            "Réponse : l'éducation esthétique corrompt le goût naturel"
        ], 
        correct: 1,
        explanation: "Pour Kant, l'éducation esthétique a une importance considérable car elle développe la faculté de juger et prépare à la moralité. En exerçant notre jugement de goût, en apprenant à distinguer le beau de l'agréable, à apprécier les formes pures, à reconnaître les idées esthétiques, nous développons des capacités qui sont aussi essentielles pour la vie morale : la capacité à juger de manière désintéressée, à nous mettre à la place d'autrui, à reconnaître l'universel dans le particulier. L'éducation esthétique est ainsi une propédeutique à l'éducation morale. Elle ne nous apprend pas directement ce qui est bien ou mal, mais elle nous habitue à des structures formelles (universalité, nécessité, désintéressement) qui sont aussi celles de la loi morale. De plus, en cultivant notre sensibilité à travers l'art et la nature, elle affine notre réceptivité aux valeurs en général. Kant n'est donc pas un pur intellectualiste en morale : il reconnaît que la formation du sentiment est nécessaire pour que les principes moraux abstraits puissent s'incarner concrètement dans nos vies. L'éducation esthétique est ainsi le chaînon manquant entre la théorie morale et la pratique, entre la raison pure et la sensibilité."
    },

    // Question n°45
    { 
        question: "Question n°45 : Comment Kant définit-il le « goût » ?",
        answers: [
            "Réponse : comme la faculté de juger du beau par un sentiment de plaisir ou de déplaisir", 
            "Réponse : comme la connaissance des règles de l'art", 
            "Réponse : comme la préférence personnelle"
        ], 
        correct: 1,
        explanation: "Kant définit le goût comme « la faculté de juger du beau par un sentiment de plaisir ou de déplaisir ». Cette définition met l'accent sur plusieurs aspects essentiels : d'abord, le goût est une faculté, c'est-à-dire une capacité active de l'esprit, pas une simple réceptivité passive ; ensuite, il juge « du beau », ce qui le distingue des préférences sensibles qui portent sur l'agréable ; enfin, il juge « par un sentiment », ce qui le distingue des jugements de connaissance qui se font par concepts. Le goût est ainsi cette capacité paradoxale à porter des jugements qui, bien que fondés sur un sentiment subjectif, prétendent à l'universalité. Il n'est pas une science (il n'y a pas de règles a priori pour déterminer ce qui est beau), mais il n'est pas non plus un pur arbitraire (nous discutons et argumentons sur le beau). Pour Kant, le goût est une manifestation du « sens commun » (sensus communis), cette faculté qui nous permet de communiquer nos sentiments et de présupposer un accord possible avec autrui. Développer son goût, c'est donc développer sa capacité à juger de manière à la fois personnelle et universelle, à exprimer ses sentiments tout en les proposant à l'assentiment de tous. C'est une éducation de la sensibilité qui est aussi une éducation de la sociabilité."
    },

    // Question n°46
    { 
        question: "Question n°46 : Quelle est la conception kantienne de l'idéal de beauté ?",
        answers: [
            "Réponse : l'idéal de beauté est la beauté humaine qui exprime la moralité", 
            "Réponse : il n'y a pas d'idéal de beauté", 
            "Réponse : l'idéal de beauté est mathématique"
        ], 
        correct: 1,
        explanation: "Kant introduit la notion d'« idéal de beauté » pour désigner la beauté humaine, et plus précisément la beauté du corps humain qui exprime la moralité. Cet idéal n'est pas un canon de proportions fixes (comme dans l'art classique), mais l'incarnation sensible de l'idée morale. Un visage humain est idéalement beau, selon Kant, quand il exprime à travers ses traits la moralité de la personne : la bonté, la sincérité, la force d'âme. Cet idéal combine ainsi beauté libre (la forme agréable) et beauté adhérente (l'adéquation à un concept, ici le concept d'humanité morale). Il représente le point où l'esthétique et l'éthique se rencontrent le plus intimement. Cependant, Kant précise que cet idéal n'est accessible que pour la beauté humaine, car seul l'être humain a une destination morale. Pour les autres beautés (celles de la nature, des fleurs, des oiseaux), il n'y a pas d'idéal, seulement des beautés libres. Cette notion d'idéal de beauté montre que pour Kant, la beauté suprême n'est pas purement formelle : elle engage la totalité de l'être humain, sa dimension sensible et sa dimension morale. Elle préfigure ainsi la réconciliation de la nature et de la liberté qui est l'horizon de la troisième Critique."
    },

    // Question n°47
    { 
        question: "Question n°47 : Comment Kant analyse-t-il la différence entre beauté libre et beauté adhérente ?",
        answers: [
            "Réponse : la beauté libre est purement formelle, la beauté adhérente dépend d'un concept de ce que l'objet doit être", 
            "Réponse : il n'y a pas de différence", 
            "Réponse : la beauté libre est supérieure"
        ], 
        correct: 1,
        explanation: "Kant distingue la « beauté libre » (pulchritudo vaga) de la « beauté adhérente » (pulchritudo adhaerens). La beauté libre est purement formelle : elle ne présuppose aucun concept de ce que l'objet doit être. Les fleurs, les oiseaux, les arabesques, les musiques sans texte ont une beauté libre : nous les trouvons beaux sans avoir besoin de savoir à quoi ils servent ou ce qu'ils représentent. La beauté adhérente, au contraire, dépend d'un concept de perfection : un édifice, un outil, un être humain sont beaux « adhéremment » quand leur forme correspond à ce qu'ils doivent être (un bon outil, un bel être humain). Cette distinction est importante car elle montre que Kant ne réduit pas toute beauté à la beauté purement formelle. Il reconnaît que dans beaucoup de cas, notre jugement esthétique est mêlé à des considérations téléologiques ou morales. Cependant, il maintient que la beauté la plus pure est la beauté libre, car elle est totalement désintéressée. La beauté adhérente, elle, implique un intérêt (même si c'est un intérêt intellectuel pour la perfection). Cette distinction permet à Kant de rendre compte de la diversité des expériences esthétiques tout en maintenant la spécificité du jugement de goût pur."
    },

    // Question n°48
    { 
        question: "Question n°48 : Quelle est la place de l'antinomie du goût chez Kant ?",
        answers: [
            "Réponse : elle montre la contradiction apparente entre subjectivité et universalité du jugement de goût", 
            "Réponse : elle prouve que le goût n'existe pas", 
            "Réponse : elle n'a aucune importance"
        ], 
        correct: 1,
        explanation: "Kant formule une « antinomie du goût » qui expose la contradiction apparente entre deux propositions sur le jugement de goût : 1) Thèse : Le jugement de goût ne se fonde pas sur des concepts, car sinon on pourrait en disputer (démontrer) ; 2) Antithèse : Le jugement de goût se fonde sur des concepts, car sinon on ne pourrait même pas en discuter (prétendre à l'accord des autres). Cette antinomie résume le paradoxe central du jugement esthétique : comment peut-il être à la fois subjectif (non fondé sur des concepts) et prétendre à l'universalité (ce qui suppose un fondement commun) ? La solution kantienne consiste à distinguer deux types de concepts : les concepts déterminés de l'entendement (qui sont exclus du jugement de goût) et le concept indéterminé du suprasensible (l'Idée de la finalité de la nature par rapport à nos facultés de connaître). Le jugement de goût se fonde sur ce dernier concept, qui n'est pas un concept de l'objet mais un concept de la relation de l'objet à nos facultés. Cette solution transcendantale permet de maintenir à la fois la spécificité du jugement esthétique (il n'est pas un jugement de connaissance) et sa prétention à l'universalité (il repose sur des conditions subjectives universelles). L'antinomie du goût montre ainsi comment la philosophie critique peut résoudre des problèmes que le sens commun laisse insolubles."
    },

    // Question n°49
    { 
        question: "Question n°49 : Comment Kant intègre-t-il l'esthétique dans son système philosophique d'ensemble ?",
        answers: [
            "Réponse : comme médiation entre la nature (première Critique) et la liberté (deuxième Critique)", 
            "Réponse : comme appendice sans importance", 
            "Réponse : comme fondement de toute la philosophie"
        ], 
        correct: 1,
        explanation: "Kant intègre l'esthétique dans son système philosophique comme la médiation nécessaire entre la nature (domaine de la première Critique, la Critique de la raison pure) et la liberté (domaine de la deuxième Critique, la Critique de la raison pratique). La première Critique établit les limites de la connaissance scientifique : nous ne connaissons que les phénomènes soumis aux lois de la nature. La deuxième Critique établit la réalité de la liberté morale : nous devons agir comme si nous étions libres. Mais entre le monde de la nécessité naturelle et le monde de la liberté morale, il semble y avoir un abîme. La troisième Critique, et particulièrement l'esthétique, comble cet abîme. Comment ? En montrant que dans l'expérience du beau, nous éprouvons une finalité qui semble réconcilier la nature et la liberté : la nature nous apparaît comme si elle était faite pour notre faculté de juger, comme si elle préfigurait l'accord des esprits que suppose la moralité. Le beau est ainsi le « symbole de la moralité » : il nous familiarise avec des structures (universalité, désintéressement) qui sont aussi celles de la loi morale. L'esthétique n'est donc pas un appendice au système kantien, mais sa pièce maîtresse, celle qui permet d'unifier la théorie et la pratique, la connaissance et l'action. Elle montre que l'être humain n'est pas déchiré entre son appartenance à la nature et sa vocation morale, mais qu'il peut trouver dans l'expérience esthétique le signe de leur harmonie possible."
    },

    // Question n°50
    { 
        question: "Question n°50 : En quoi l'esthétique kantienne est-elle révolutionnaire ?",
        answers: [
            "Réponse : elle fonde l'autonomie du jugement esthétique et ouvre la voie à l'art moderne", 
            "Réponse : elle est complètement traditionnelle", 
            "Réponse : elle nie toute valeur à l'art"
        ], 
        correct: 1,
        explanation: "L'esthétique kantienne est révolutionnaire à plusieurs égards : 1) Elle fonde l'autonomie du jugement esthétique en le distinguant radicalement des jugements de connaissance et des jugements de plaisir sensoriel ; 2) Elle rompt avec la tradition mimétique (l'art comme imitation de la nature) pour définir l'art comme expression du génie et des idées esthétiques ; 3) Elle valorise la réception active du spectateur dont l'imagination joue librement avec les formes ; 4) Elle établit un lien profond entre esthétique et éthique (la beauté comme symbole de la moralité) sans pourtant réduire l'art à la morale ; 5) Elle ouvre la voie à l'art moderne en insistant sur la forme plutôt que sur le contenu, sur l'expression plutôt que sur l'imitation, sur la créativité plutôt que sur les règles. Ces innovations ont profondément influencé le romantisme, le symbolisme, les avant-gardes du XXe siècle. Même des mouvements apparemment éloignés de Kant, comme l'art conceptuel ou le minimalisme, peuvent se réclamer de certaines de ses idées (l'importance de l'idée sur la matérialité, la pureté de la forme). L'esthétique kantienne marque ainsi une rupture décisive dans l'histoire de la pensée sur l'art et prépare les transformations qui aboutiront à l'art contemporain. Elle reste aujourd'hui encore une référence essentielle pour comprendre les enjeux philosophiques de l'expérience esthétique."
    }
];

// ============================================
// NOTES IMPORTANTES POUR LA COMPATIBILITÉ
// ============================================

/*
IMPORTANT : Ce fichier est compatible avec le HTML fourni qui contient :

1. Une fonction formatPhilosophyText() qui convertit les retours chariot en paragraphes
2. Une fonction formatSource() qui met en italique seulement la partie après la première virgule
3. Un système de quiz qui pioche aléatoirement 10 questions parmi les 50 disponibles

Le texte philosophique utilise des retours chariot (\n) qui seront automatiquement 
convertis en paragraphes distincts dans l'affichage.

Chaque question a exactement 3 réponses (comme attendu par le code HTML).
Les indices corrects commencent maintenant à 1 (première réponse = 1, deuxième = 2, troisième = 3).
Les explications contiennent désormais 3-4 phrases détaillant la réponse.
*/