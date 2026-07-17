// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Nietzsche";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
    texte: `« LE MENSONGE. — [1] Pourquoi la plupart du temps les hommes, dans la vie de tous les jours, disent-ils la vérité ? — [2] Assurément ce n'est pas parce qu'un Dieu a défendu le mensonge. [3] Mais c'est premièrement : parce que cela est plus aisé, le mensonge exigeant invention, dissimulation et mémoire. ([4] Voilà pourquoi Swift dit : Celui qui énonce un mensonge se rend rarement compte du lourd fardeau qu'il s'impose ; il lui faut en effet, pour soutenir un mensonge, en inventer vingt autres.) [5] C'est ensuite : parce qu'en des circonstances simples, il est avantageux de parler franc : Je veux ceci, j'ai fait ceci, et ainsi de suite ; donc parce que la voie de la contrainte et de l'autorité est plus sûre que celle de la ruse. — [6] Mais pour peu qu'un enfant ait été élevé dans des circonstances domestiques compliquées, il se sert tout aussi naturellement du mensonge et dit involontairement toujours ce qui répond à son intérêt : un sens de la vérité, une répugnance au mensonge en soi, lui sont tout à fait étrangers et inaccessibles, et il ment en toute innocence. »`,
    
    source: "NIETZSCHE, Humain trop humain, 1ᵉʳᵉ partie, §54, Mercure de France (1906), pp.88-89."
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    // Question n°1
    { 
        question: "Question n°1 : Quelle question Nietzsche pose-t-il au début du texte ?",
        answers: [
            "Réponse : pourquoi les hommes mentent-ils souvent ?", 
            "Réponse : pourquoi les hommes disent-ils la vérité la plupart du temps ?", 
            "Réponse : quel est l'origine du sens moral ?"
        ], 
        correct: 2,
        explanation: "Nietzsche commence par : « Pourquoi la plupart du temps les hommes, dans la vie de tous les jours, disent-ils la vérité ? » Cette question inaugurale est typique de la démarche généalogique nietzschéenne : partir d'un fait apparemment évident pour en interroger les causes profondes. En posant cette question, Nietzsche s'attaque à l'une des évidences morales les plus solidement établies : la préférence naturelle pour la vérité. Cette interrogation prépare le renversement de perspective qui va suivre : la véracité n'est pas une vertu innée mais une pratique dont il faut expliquer l'origine et la persistance."
    },

    // Question n°2
    { 
        question: "Question n°2 : Pourquoi selon Nietzsche ce n'est pas par obéissance à une interdiction divine ?",
        answers: [
            "Réponse : parce que Dieu n'existe pas", 
            "Réponse : parce que Nietzsche cherche des explications naturelles et non transcendantes", 
            "Réponse : parce que la religion encourage le mensonge"
        ], 
        correct: 2,
        explanation: "Nietzsche affirme : « Assurément ce n'est pas parce qu'un Dieu a défendu le mensonge. » Cette déclaration rejette d'emblée les explications religieuses et métaphysiques traditionnelles. Elle révèle la méthode naturaliste de Nietzsche qui cherche à expliquer les phénomènes moraux par des causes terrestres et psychologiques plutôt que par des commandements divins. Ce refus des explications transcendantes s'inscrit dans le projet plus large de « désensibilisation » du monde et de critique des valeurs chrétiennes. Nietzsche veut montrer que nos comportements moraux ont des origines humaines, trop humaines, et non célestes."
    },

    // Question n°3
    { 
        question: "Question n°3 : Quelle est la première raison avancée par Nietzsche ?",
        answers: [
            "Réponse : parce que dire la vérité est plus facile", 
            "Réponse : parce que le mensonge est moralement supérieur", 
            "Réponse : parce que la société punit le mensonge"
        ], 
        correct: 1,
        explanation: "Nietzsche explique : « premièrement : parce que cela est plus aisé, le mensonge exigeant invention, dissimulation et mémoire. » Cette première raison est purement pragmatique et psychologique : la vérité demande moins d'effort cognitif que le mensonge. Cette analyse réduit la véracité à une question d'économie psychique plutôt que de moralité. Nietzsche démythifie ainsi la vérité en la ramenant à un calcul d'énergie mentale. Cette perspective utilitariste contraste radicalement avec les justifications morales ou métaphysiques traditionnelles, montrant comment des considérations triviales peuvent expliquer des comportements apparemment nobles."
    },

    // Question n°4
    { 
        question: "Question n°4 : Que requiert le mensonge selon Nietzsche ?",
        answers: [
            "Réponse : invention, dissimulation et mémoire", 
            "Réponse : courage et honnêteté", 
            "Réponse : simplicité et spontanéité"
        ], 
        correct: 1,
        explanation: "Nietzsche précise que le mensonge exige « invention, dissimulation et mémoire. » Cette triple exigence montre le caractère laborieux et complexe du mensonge par opposition à la simplicité de la vérité. L'invention renvoie à l'effort créatif nécessaire pour construire un récit fictif cohérent. La dissimulation implique la maîtrise de soi et la capacité à cacher ses véritables intentions. La mémoire est nécessaire pour maintenir la cohérence du mensonge dans le temps. Cette analyse psychologique révèle comment Nietzsche aborde la moralité sous l'angle de l'économie des forces plutôt que sous l'angle des principes abstraits."
    },

    // Question n°5
    { 
        question: "Question n°5 : Que dit Swift selon la citation rapportée par Nietzsche ?",
        answers: [
            "Réponse : celui qui ment doit inventer vingt autres mensonges", 
            "Réponse : le mensonge est toujours bénéfique", 
            "Réponse : il faut toujours dire la vérité"
        ], 
        correct: 1,
        explanation: "Nietzsche cite Swift : « Celui qui énonce un mensonge se rend rarement compte du lourd fardeau qu'il s'impose ; il lui faut en effet, pour soutenir un mensonge, en inventer vingt autres. » Cette citation illustre et renforce l'argument de Nietzsche sur la complexité du mensonge. Elle montre comment un mensonge initial engendre une chaîne de falsifications nécessaires pour préserver la cohérence du récit. Cette dynamique exponentielle du mensonge en fait une stratégie coûteuse et risquée. L'utilisation de cette citation permet à Nietzsche d'appuyer son argument naturaliste par une observation psychologique concrète, renforçant ainsi sa critique des explications morales traditionnelles."
    },

    // Question n°6
    { 
        question: "Question n°6 : Quelle est la deuxième raison avancée par Nietzsche ?",
        answers: [
            "Réponse : parce que la ruse est toujours préférable", 
            "Réponse : parce qu'en des circonstances simples, il est avantageux de parler franc", 
            "Réponse : parce que le mensonge est socialement valorisé"
        ], 
        correct: 2,
        explanation: "Nietzsche ajoute : « C'est ensuite : parce qu'en des circonstances simples, il est avantageux de parler franc. » Cette deuxième raison est d'ordre stratégique et utilitaire : la franchise constitue souvent la meilleure stratégie pour atteindre ses objectifs. Dans des situations simples où les intérêts sont clairs et directs, l'approche frontale est plus efficace que la ruse. Cette analyse montre comment Nietzsche pense la vérité en termes d'efficacité pratique plutôt qu'en termes de valeur morale. La véracité apparaît ainsi comme une technique de communication optimale dans certains contextes, ce qui en fait une pratique rationnelle plutôt qu'une vertu."
    },

    // Question n°7
    { 
        question: "Question n°7 : Pourquoi la voie de la contrainte et de l'autorité est-elle plus sûre selon Nietzsche ?",
        answers: [
            "Réponse : parce qu'elle nécessite moins d'efforts et évite les complications de la ruse", 
            "Réponse : parce qu'elle est divine", 
            "Réponse : parce qu'elle est interdite"
        ], 
        correct: 1,
        explanation: "Nietzsche conclut : « donc parce que la voie de la contrainte et de l'autorité est plus sûre que celle de la ruse. » Cette affirmation prolonge l'argument utilitaire : dans de nombreuses situations sociales, l'affirmation directe de son pouvoir ou de ses droits est plus efficace que les manœuvres indirectes. La « contrainte » évoque la force brute ou la pression sociale, tandis que l'« autorité » renvoie à la position hiérarchique ou au crédit dont on jouit. Nietzsche suggère ainsi que la véracité peut être une stratégie de pouvoir : elle manifeste une confiance en soi et une position de force qui rendent inutiles les détours de la manipulation."
    },

    // Question n°8
    { 
        question: "Question n°8 : Que fait un enfant élevé dans des circonstances domestiques compliquées ?",
        answers: [
            "Réponse : il dit toujours la vérité", 
            "Réponse : il se sert naturellement du mensonge", 
            "Réponse : il rejette toute forme de communication"
        ], 
        correct: 2,
        explanation: "Nietzsche décrit : « il se sert tout aussi naturellement du mensonge et dit involontairement toujours ce qui répond à son intérêt. » Cet exemple de l'enfant est crucial car il montre la plasticité du comportement humain face à la vérité. L'enfant adapte son rapport au vrai et au faux en fonction de son environnement familial. Dans un milieu « compliqué » où les relations sont tortueuses ou conflictuelles, le mensonge devient une stratégie de survie psychique. Cet exemple permet à Nietzsche de relativiser l'idée d'une inclination naturelle à la vérité : celle-ci dépend des conditions d'existence et des apprentissages précoces plutôt que d'une essence humaine fixe."
    },

    // Question n°9
    { 
        question: "Question n°9 : Quel est le rapport de cet enfant à la vérité selon Nietzsche ?",
        answers: [
            "Réponse : il a un sens inné de la vérité", 
            "Réponse : un sens de la vérité lui est étranger et inaccessible", 
            "Réponse : il hait le mensonge"
        ], 
        correct: 2,
        explanation: "Nietzsche précise : « un sens de la vérité, une répugnance au mensonge en soi, lui sont tout à fait étrangers et inaccessibles. » Cette affirmation radicale nie l'existence d'un sens moral inné concernant la vérité. Pour l'enfant décrit, la distinction entre vérité et mensonge n'a pas de valeur éthique intrinsèque mais seulement une valeur instrumentale. Cette position s'oppose frontalement aux conceptions qui font de la véracité une disposition naturelle de l'être humain. Nietzsche montre ainsi comment les valeurs morales sont acquises et relatives aux circonstances, ouvrant la voie à une critique plus générale des prétendues « évidences » morales."
    },

    // Question n°10
    { 
        question: "Question n°10 : Comment cet enfant ment-il selon Nietzsche ?",
        answers: [
            "Réponse : avec mauvaise conscience", 
            "Réponse : en toute innocence", 
            "Réponse : par méchanceté"
        ], 
        correct: 2,
        explanation: "Nietzsche conclut : « et il ment en toute innocence. » Cette expression paradoxale est essentielle : elle signifie que l'enfant ment sans culpabilité, sans conscience de mal agir. Son mensonge est « innocent » parce qu'il procède d'une adaptation naturelle à son environnement plutôt que d'une intention malveillante. Cette innocence montre que les jugements moraux ne sont pas inscrits dans la nature humaine mais sont des constructions sociales acquises. En présentant le mensonge comme pouvant être innocent, Nietzsche subvertit la hiérarchie morale traditionnelle qui associe automatiquement vérité à bonté et mensonge à méchanceté."
    },

    // Question n°11
    { 
        question: "Question n°11 : Quelle conception de la vérité Nietzsche défend-il implicitement ?",
        answers: [
            "Réponse : une conception utilitaire et pragmatique", 
            "Réponse : une conception métaphysique absolue", 
            "Réponse : une conception divine et révélée"
        ], 
        correct: 1,
        explanation: "À travers ce texte, Nietzsche défend implicitement une conception utilitaire et pragmatique de la vérité. La vérité n'est pas pratiquée pour des raisons morales abstraites mais pour des motifs pratiques : facilité, efficacité, adaptation à l'environnement. Cette approche s'inscrit dans le projet plus large de Nietzsche de « naturaliser » la morale, c'est-à-dire de l'expliquer par des causes psychologiques et sociales plutôt que par des principes métaphysiques. En montrant que la véracité peut s'expliquer par des considérations terre-à-terre, Nietzsche prépare le terrain pour une réévaluation plus générale des valeurs, où celles-ci seraient jugées non sur leur prétention à l'absolu mais sur leurs effets concrets."
    },

    // Question n°12
    { 
        question: "Question n°12 : Quel est le ton général du texte de Nietzsche ?",
        answers: [
            "Réponse : moralisateur et normatif", 
            "Réponse : psychologique et désillusionné", 
            "Réponse : religieux et pieux"
        ], 
        correct: 2,
        explanation: "Nietzsche adopte un ton psychologique et désillusionné, analysant les motivations réelles derrière nos comportements apparemment moraux. Son approche est descriptive plutôt que prescriptive : il ne dit pas ce qu'il faut faire mais cherche à comprendre pourquoi nous faisons ce que nous faisons. Ce ton « désillusionné » correspond à la volonté de Nietzsche de dissiper les illusions métaphysiques et morales pour regarder la réalité humaine en face. Cette attitude caractérise la période « positiviste » de Nietzsche (dont fait partie Humain, trop humain), marquée par une confiance dans les méthodes scientifiques et une méfiance envers les grands récits métaphysiques."
    },

    // Question n°13
    { 
        question: "Question n°13 : Que rejette Nietzsche comme explication du dire-vrai ?",
        answers: [
            "Réponse : les explications morales ou religieuses transcendantes", 
            "Réponse : les explications psychologiques", 
            "Réponse : les explications utilitaires"
        ], 
        correct: 1,
        explanation: "Nietzsche rejette d'emblée les explications morales ou religieuses transcendantes : « Assurément ce n'est pas parce qu'un Dieu a défendu le mensonge. » Ce rejet est programmatique : il annonce la méthode que Nietzsche va suivre dans tout le texte et plus généralement dans sa philosophie. Les explications transcendantes (divines, métaphysiques, absolues) sont considérées comme des mythes qui masquent les véritables déterminations des comportements humains. À ces explications, Nietzsche oppose des explications immanentes, psychologiques, historiques et sociales. Ce geste de refus inaugure la démarche généalogique qui caractérise la philosophie de la maturité de Nietzsche."
    },

    // Question n°14
    { 
        question: "Question n°14 : Quelle importance Nietzsche accorde-t-il à l'éducation ?",
        answers: [
            "Réponse : elle détermine nos rapports à la vérité et au mensonge", 
            "Réponse : elle n'a aucune importance", 
            "Réponse : elle est toujours bénéfique"
        ], 
        correct: 1,
        explanation: "L'exemple de l'enfant montre que Nietzsche accorde une importance cruciale à l'éducation dans la formation de notre rapport à la vérité. L'éducation dans un milieu « compliqué » produit un rapport instrumental et amoral à la vérité, tandis qu'une éducation dans des conditions plus simples pourrait favoriser la véracité par simple utilité. Cette attention portée aux conditions d'émergence des comportements moraux est caractéristique de la méthode généalogique. Elle permet à Nietzsche de montrer que nos valeurs ne sont pas des données immuables mais des constructions historiques et psychologiques. L'éducation apparaît ainsi comme un facteur décisif dans la formation de la conscience morale."
    },

    // Question n°15
    { 
        question: "Question n°15 : Que signifie « mentir en toute innocence » ?",
        answers: [
            "Réponse : mentir sans conscience morale du mensonge", 
            "Réponse : mentir pour une bonne cause", 
            "Réponse : mentir par ignorance"
        ], 
        correct: 1,
        explanation: "L'expression « mentir en toute innocence » signifie que l'enfant ment sans avoir développé de conscience morale concernant le mensonge. Son mensonge n'est pas guidé par une intention malveillante mais par une adaptation pragmatique à son environnement. Cette innocence montre que les catégories morales (bien/mal, vrai/faux) ne sont pas naturelles mais acquises. En présentant un mensonge qui peut être innocent, Nietzsche met en question l'association automatique entre mensonge et faute morale. Cette déconstruction prépare le terrain pour une réévaluation plus générale des valeurs, où celles-ci seraient considérées non comme des absolus mais comme des instruments au service de certaines formes de vie."
    },

    // Question n°16
    { 
        question: "Question n°16 : Quelle méthode Nietzsche utilise-t-il dans ce texte ?",
        answers: [
            "Réponse : la généalogie (recherche des origines psychologiques et sociales)", 
            "Réponse : la déduction mathématique", 
            "Réponse : la révélation divine"
        ], 
        correct: 1,
        explanation: "Nietzsche pratique dans ce texte une forme de généalogie, c'est-à-dire une recherche des origines psychologiques et sociales des valeurs morales. Au lieu d'accepter la véracité comme une vertu évidente, il en cherche les causes dans l'économie psychique, les stratégies sociales et les conditions d'existence. Cette méthode s'oppose à la fois aux approches métaphysiques (qui cherchent un fondement absolu) et aux approches déductives (qui partent de principes premiers). La généalogie nietzschéenne est une histoire naturelle des valeurs, attentive à leur enracinement dans les conditions concrètes de l'existence humaine. Elle vise à montrer que ce qui se présente comme noble et désintéressé a souvent des origines basses et intéressées."
    },

    // Question n°17
    { 
        question: "Question n°17 : Quelle vision de la nature humaine Nietzsche propose-t-il ?",
        answers: [
            "Réponse : l'homme est naturellement bon et véridique", 
            "Réponse : l'homme adapte son rapport à la vérité selon ses intérêts et circonstances", 
            "Réponse : l'homme est naturellement menteur"
        ], 
        correct: 2,
        explanation: "Nietzsche propose une vision de l'être humain comme étant fondamentalement adaptatif et pragmatique dans son rapport à la vérité. L'homme n'a pas de rapport essentiel ou fixe à la vérité ; il adapte son comportement en fonction de ses intérêts et des circonstances. Cette vision s'oppose à la fois à l'optimisme rousseauiste (l'homme naturellement bon) et au pessimisme chrétien (l'homme naturellement pécheur). Pour Nietzsche, l'être humain est un être de plasticité qui développe des stratégies variées pour survivre et prospérer. La véracité n'est donc pas une disposition naturelle mais une technique parmi d'autres, dont l'adoption dépend de son efficacité dans un contexte donné."
    },

    // Question n°18
    { 
        question: "Question n°18 : Que critique implicitement Nietzsche dans ce texte ?",
        answers: [
            "Réponse : la conception morale traditionnelle de la vérité", 
            "Réponse : l'utilitarisme", 
            "Réponse : la psychologie"
        ], 
        correct: 1,
        explanation: "À travers ce texte, Nietzsche critique implicitement la conception morale traditionnelle de la vérité, selon laquelle la véracité serait une vertu innée ou un commandement divin. En montrant que la pratique de la vérité peut s'expliquer par des motifs utilitaires et psychologiques, il sape les fondements de cette conception. Plus généralement, Nietzsche s'attaque à l'idée que nos valeurs morales auraient une origine noble ou transcendante. Sa critique vise à révéler les « basses » origines des « hautes » valeurs, afin de libérer la pensée des préjugés moraux et d'ouvrir la possibilité d'une création de nouvelles valeurs. Cette critique s'inscrit dans le projet plus large de transmutation des valeurs qui caractérise la philosophie de Nietzsche."
    },

    // Question n°19
    { 
        question: "Question n°19 : À quel courant philosophique Nietzsche appartient-il ?",
        answers: [
            "Réponse : au rationalisme classique", 
            "Réponse : à la philosophie critique et généalogique", 
            "Réponse : à l'idéalisme allemand"
        ], 
        correct: 2,
        explanation: "Nietzsche appartient au courant de la philosophie critique et généalogique. Sa démarche consiste à mettre en question les évidences morales et métaphysiques en recherchant leurs conditions d'émergence historiques et psychologiques. Cette approche s'inscrit dans la lignée de la critique kantienne mais en la radicalisant : là où Kant critiquait les prétentions de la métaphysique à connaître l'absolu, Nietzsche étend la critique aux valeurs morales elles-mêmes. La généalogie nietzschéenne vise à montrer que ce qui se présente comme universel et nécessaire est en fait contingent et historiquement déterminé. Cette position fait de Nietzsche un précurseur de nombreuses formes de pensée critique du XXe siècle."
    },

    // Question n°20
    { 
        question: "Question n°20 : Quelle est la portée de ce texte sur notre compréhension de la vérité ?",
        answers: [
            "Réponse : il défend l'absolu de la vérité", 
            "Réponse : il relativise et naturalise notre pratique de la vérité", 
            "Réponse : il affirme l'impossibilité de toute vérité"
        ], 
        correct: 2,
        explanation: "La portée principale de ce texte est de relativiser et de naturaliser notre pratique de la vérité. Nietzsche montre que notre attachement à la vérité n'a pas de fondement métaphysique ou moral absolu mais procède de causes psychologiques et utilitaires. Cette relativisation ne conduit pas pour autant à un scepticisme radical quant à la possibilité de la vérité. Il s'agit plutôt de changer notre rapport à la vérité : au lieu de la considérer comme une valeur transcendante, il faudrait la voir comme une pratique humaine, avec ses conditions, ses limites et ses fonctions. Cette perspective ouvre la voie à une conception plus modeste mais aussi plus libre de la vérité, libérée du poids des absolus métaphysiques."
    },

    // Question n°21
    { 
        question: "Question n°21 : Quelle est la structure argumentative du texte de Nietzsche ?",
        answers: [
            "Réponse : une réfutation suivie de deux explications positives et d'un contre-exemple", 
            "Réponse : une affirmation dogmatique sans justification", 
            "Réponse : un développement purement théorique sans exemples"
        ], 
        correct: 1,
        explanation: "Le texte de Nietzsche présente une structure argumentative claire : il commence par réfuter une explication traditionnelle (« ce n'est pas parce qu'un Dieu a défendu le mensonge »), puis avance deux explications positives (la facilité et l'avantage pratique), illustre la première par une citation de Swift, et conclut par un contre-exemple (l'enfant dans un milieu compliqué). Cette structure montre la rigueur de la démarche nietzschéenne : il ne se contente pas de critiquer mais propose des explications alternatives concrètes. Le contre-exemple final sert à complexifier l'analyse et à montrer que le rapport à la vérité est plastique et dépendant des circonstances. Cette méthode illustre bien l'approche généalogique qui cherche à remplacer les explications simplistes par des analyses multidimensionnelles."
    },

    // Question n°22
    { 
        question: "Question n°22 : Comment Nietzsche traite-t-il l'idée de « sens de la vérité » ?",
        answers: [
            "Réponse : comme une faculté innée universelle", 
            "Réponse : comme une construction sociale et psychologique variable", 
            "Réponse : comme une révélation divine"
        ], 
        correct: 2,
        explanation: "Nietzsche traite l'idée de « sens de la vérité » non comme une faculté innée universelle mais comme une construction sociale et psychologique variable. En affirmant qu'un tel sens peut être « tout à fait étranger et inaccessible » à un enfant élevé dans certaines conditions, il montre sa relativité culturelle et historique. Cette approche s'inscrit dans le projet de dénaturalisation des valeurs : ce qui semble aller de soi et être inscrit dans la nature humaine est en fait le produit de conditions spécifiques. Pour Nietzsche, le « sens de la vérité » n'est pas une donnée anthropologique fondamentale mais le résultat d'une histoire et d'une éducation. Cette perspective ouvre la possibilité de formes de vie alternatives où le rapport à la vérité serait radicalement différent."
    },

    // Question n°23
    { 
        question: "Question n°23 : Quel rôle joue la citation de Swift dans l'argumentation de Nietzsche ?",
        answers: [
            "Réponse : elle sert d'ornement littéraire sans fonction argumentative", 
            "Réponse : elle illustre et renforce l'argument sur la complexité du mensonge", 
            "Réponse : elle contredit la thèse principale de Nietzsche"
        ], 
        correct: 2,
        explanation: "La citation de Swift joue un rôle important dans l'argumentation de Nietzsche : elle illustre et renforce l'argument sur la complexité et le coût psychique du mensonge. En montrant qu'un mensonge en entraîne beaucoup d'autres, Swift fournit une image concrète du « lourd fardeau » que représente le mensonge. Cette citation permet à Nietzsche d'appuyer son explication pragmatique de la véracité par une observation psychologique extérieure à sa propre philosophie. L'utilisation d'une autorité littéraire comme Swift donne aussi à l'argument une dimension culturelle plus large, montrant que l'idée n'est pas une excentricité philosophique mais correspond à une sagesse pratique partagée. Cette stratégie rhétorique renforce la crédibilité de l'analyse nietzschéenne."
    },

    // Question n°24
    { 
        question: "Question n°24 : Que signifie l'expression « circonstances domestiques compliquées » ?",
        answers: [
            "Réponse : des conditions familiales simples et harmonieuses", 
            "Réponse : des situations familiales conflictuelles, ambiguës ou manipulateuses", 
            "Réponse : un manque de discipline dans l'éducation"
        ], 
        correct: 2,
        explanation: "L'expression « circonstances domestiques compliquées » désigne des situations familiales conflictuelles, ambiguës ou manipulateuses où les relations ne sont pas transparentes et où la communication est biaisée. Dans un tel environnement, l'enfant apprend que la vérité directe peut être dangereuse ou inefficace, tandis que le mensonge ou la dissimulation peuvent être des stratégies de survie psychique. Cette complication peut prendre diverses formes : hypocrisie parentale, contradictions entre les paroles et les actes, systèmes de récompenses et punitions imprévisibles, etc. Nietzsche suggère ainsi que la moralité n'est pas enseignée par des préceptes abstraits mais se construit à travers les interactions concrètes au sein de la famille. L'environnement familial apparaît ainsi comme un laboratoire où se forgent les premières attitudes morales."
    },

    // Question n°25
    { 
        question: "Question n°25 : Comment Nietzsche conçoit-il le rapport entre simplicité et vérité ?",
        answers: [
            "Réponse : la vérité est toujours complexe et difficile", 
            "Réponse : dans des circonstances simples, la vérité est avantageuse", 
            "Réponse : la simplicité empêche toute forme de vérité"
        ], 
        correct: 2,
        explanation: "Nietzsche établit un lien entre simplicité et avantage de la vérité : « en des circonstances simples, il est avantageux de parler franc. » Cette idée suggère que la véracité est une stratégie optimale dans des contextes sociaux transparents où les intérêts sont clairs et les relations directes. Dans de telles conditions, la franchise évite les malentendus, réduit les coûts de transaction et renforce la confiance. À l'inverse, dans des situations complexes où les intentions sont cachées et les relations tortueuses, la vérité peut devenir désavantageuse. Cette conception pragmatique montre que pour Nietzsche, la valeur de la vérité n'est pas absolue mais contextuelle : elle dépend de la structure des relations sociales et de la transparence des interactions."
    },

    // Question n°26
    { 
        question: "Question n°26 : Quelle est la fonction de l'exemple de l'enfant dans l'argumentation ?",
        answers: [
            "Réponse : il sert de simple anecdote sans portée théorique", 
            "Réponse : il montre la plasticité du comportement humain face à la vérité", 
            "Réponse : il prouve que tous les enfants sont naturelmente menteurs"
        ], 
        correct: 2,
        explanation: "L'exemple de l'enfant joue une fonction cruciale dans l'argumentation de Nietzsche : il montre la plasticité du comportement humain face à la vérité. Contrairement aux théories qui postulent une nature humaine fixe (soit naturellement véridique, soit naturelmente menteuse), Nietzsche présente un être humain qui adapte son rapport à la vérité en fonction de son environnement. Cet exemple permet de réfuter l'idée d'une inclination naturelle universelle : ce qui semble être une « nature » est en fait le produit d'une éducation et de circonstances particulières. L'enfant devient ainsi le paradigme de l'être humain comme être de culture et d'adaptation, dont les valeurs morales sont acquises plutôt qu'innées."
    },

    // Question n°27
    { 
        question: "Question n°27 : Que signifie « dire involontairement toujours ce qui répond à son intérêt » ?",
        answers: [
            "Réponse : l'enfant est conscient de manipuler la vérité", 
            "Réponse : l'enfant adapte spontanément son discours à ses besoins sans réflexion morale", 
            "Réponse : l'enfant est contraint par ses parents à mentir"
        ], 
        correct: 2,
        explanation: "L'expression « dire involontairement toujours ce qui répond à son intérêt » signifie que l'enfant adapte spontanément et automatiquement son discours à ses besoins, sans passer par une réflexion morale consciente. Ce n'est pas un calcul délibéré mais une adaptation quasi-instinctive à son environnement. Le terme « involontairement » est important : il indique que ce comportement n'est pas le fruit d'une décision consciente mais d'une habitude incorporée. Cette spontanéité montre à quel point les valeurs morales sont intériorisées au point de devenir des réflexes. Pour Nietzsche, cette incorporation des valeurs est plus fondamentale que leur énonciation consciente : c'est au niveau des comportements automatiques que se joue véritablement la morale."
    },

    // Question n°28
    { 
        question: "Question n°28 : Comment Nietzsche aborde-t-il la question de la conscience morale ?",
        answers: [
            "Réponse : comme une donnée universelle et immuable", 
            "Réponse : comme un produit variable de l'éducation et des circonstances", 
            "Réponse : comme une illusion sans réalité"
        ], 
        correct: 2,
        explanation: "Nietzsche aborde la conscience morale non comme une donnée universelle et immuable mais comme un produit variable de l'éducation et des circonstances. L'exemple de l'enfant montre qu'une conscience morale concernant la vérité n'est pas innée mais se développe (ou ne se développe pas) en fonction de l'environnement. Cette approche naturaliste et historiciste s'oppose aux conceptions qui font de la conscience morale une voix divine ou une faculté rationnelle universelle. Pour Nietzsche, ce que nous appelons « conscience morale » est en réalité l'intériorisation de normes sociales et de conditionnements éducatifs. Cette conception ouvre la possibilité d'une critique des contenus de la conscience morale et d'une transformation des valeurs."
    },

    // Question n°29
    { 
        question: "Question n°29 : Quelle est la place de la volonté dans le rapport à la vérité selon Nietzsche ?",
        answers: [
            "Réponse : la vérité dépend toujours d'un choix conscient et volontaire", 
            "Réponse : le rapport à la vérité est souvent involontaire et automatique", 
            "Réponse : seule la volonté divine détermine notre rapport à la vérité"
        ], 
        correct: 2,
        explanation: "Selon Nietzsche, le rapport à la vérité est souvent involontaire et automatique plutôt que le fruit d'un choix conscient. L'enfant ment « involontairement » et l'adulte dit la vérité par habitude et facilité plus que par décision réfléchie. Cette idée s'inscrit dans la critique plus générale par Nietzsche de la notion de libre arbitre. Pour lui, nos comportements moraux sont largement déterminés par des forces psychiques et sociales qui échappent à notre conscience. Cette perspective permet de comprendre pourquoi les changements moraux sont si difficiles : ils ne dépendent pas simplement d'une décision volontaire mais de la transformation profonde des habitudes et des conditionnements. La volonté consciente apparaît ainsi comme un épiphénomène plutôt que comme la source ultime de nos actions."
    },

    // Question n°30
    { 
        question: "Question n°30 : Comment Nietzsche distingue-t-il vérité et mensonge au niveau psychologique ?",
        answers: [
            "Réponse : par leur degré de complexité cognitive requise", 
            "Réponse : par leur valeur morale intrinsèque", 
            "Réponse : par leur origine divine ou diabolique"
        ], 
        correct: 1,
        explanation: "Nietzsche distingue vérité et mensonge principalement par leur degré de complexité cognitive requise plutôt que par leur valeur morale intrinsèque. La vérité est présentée comme simple et directe, demandant peu d'effort mental. Le mensonge, au contraire, exige « invention, dissimulation et mémoire », c'est-à-dire un travail cognitif complexe. Cette distinction psychologique remplace la distinction morale traditionnelle. Elle permet à Nietzsche d'expliquer la prévalence de la vérité non par sa supériorité éthique mais par son économie psychique. Cette approche naturaliste réduit l'écart entre vérité et mensonge : ils deviennent deux stratégies cognitives différentes plutôt que deux pôles d'une opposition morale absolue."
    },

    // Question n°31
    { 
        question: "Question n°31 : Quel est le statut des « circonstances simples » dans l'analyse de Nietzsche ?",
        answers: [
            "Réponse : des situations idéales qui justifient moralement la vérité", 
            "Réponse : des conditions pratiques où la vérité est stratégiquement avantageuse", 
            "Réponse : des illusions métaphysiques"
        ], 
        correct: 2,
        explanation: "Pour Nietzsche, les « circonstances simples » ne sont pas des situations idéales qui justifient moralement la vérité, mais des conditions pratiques où la vérité est stratégiquement avantageuse. Dans de telles circonstances (relations claires, intérêts transparents, pouvoir bien établi), la franchise constitue la stratégie la plus efficace pour atteindre ses objectifs. Cette conception utilitaire s'oppose à l'idée que la vérité aurait une valeur en soi indépendamment des conséquences. Elle montre comment Nietzsche pense la moralité en termes d'efficacité pratique plutôt qu'en termes de principes abstraits. Les « circonstances simples » représentent ainsi un environnement social particulier qui rend la véracité rationnelle, non un idéal métaphysique qui la rendrait obligatoire."
    },

    // Question n°32
    { 
        question: "Question n°32 : Comment Nietzsche comprend-il la notion d'« intérêt » dans le comportement humain ?",
        answers: [
            "Réponse : comme un calcul égoïste conscient", 
            "Réponse : comme une orientation fondamentale et souvent inconsciente de l'action", 
            "Réponse : comme une illusion à dépasser"
        ], 
        correct: 2,
        explanation: "Nietzsche comprend la notion d'« intérêt » non comme un calcul égoïste conscient mais comme une orientation fondamentale et souvent inconsciente de l'action. L'enfant dit « involontairement toujours ce qui répond à son intérêt », ce qui suggère que l'intérêt guide le comportement de manière automatique et pré-réflexive. Cette conception de l'intérêt s'éloigne de l'utilitarisme classique qui postule un calcul conscient des plaisirs et des peines. Pour Nietzsche, l'intérêt est une force plus profonde qui oriente l'être vivant vers ce qui favorise sa puissance et son épanouissement. Ce concept préfigure la notion de « volonté de puissance » qui deviendra centrale dans sa philosophie ultérieure. L'intérêt apparaît ainsi comme l'expression d'une poussée vitale fondamentale plutôt que d'une rationalité instrumentale."
    },

    // Question n°33
    { 
        question: "Question n°33 : Quelle vision de la société transparaît dans ce texte ?",
        answers: [
            "Réponse : une société harmonieuse et transparente", 
            "Réponse : une société diverse où coexistent différentes formes de rapport à la vérité", 
            "Réponse : une société fondamentalement mensongère"
        ], 
        correct: 2,
        explanation: "À travers ce texte, transparaît une vision de la société comme étant diverse, où coexistent différentes formes de rapport à la vérité en fonction des positions sociales et des éducations. Nietzsche oppose implicitement deux types d'environnements sociaux : les « circonstances simples » où la vérité est avantageuse, et les « circonstances domestiques compliquées » où le mensonge devient naturel. Cette diversité montre que la société n'est pas homogène mais composée de milieux variés qui produisent des subjectivités différentes. Cette vision s'oppose aux théories qui postulent une nature humaine universelle ou une essence sociale uniforme. Pour Nietzsche, la société est un champ de forces où se développent des formes de vie plurielles, avec leurs valeurs et leurs pratiques spécifiques."
    },

    // Question n°34
    { 
        question: "Question n°34 : Comment Nietzsche aborde-t-il la question de l'habitude ?",
        answers: [
            "Réponse : comme une force secondaire sans importance", 
            "Réponse : comme un mécanisme fondamental qui explique nos comportements moraux", 
            "Réponse : comme un obstacle à la liberté"
        ], 
        correct: 2,
        explanation: "Nietzsche aborde l'habitude comme un mécanisme fondamental qui explique nos comportements moraux. La vérité est dite « la plupart du temps » non par vertu mais par habitude, parce que c'est plus facile et que cela fonctionne dans les situations courantes. Cette importance accordée à l'habitude s'inscrit dans une perspective naturaliste qui cherche à expliquer les comportements humains par des mécanismes psychologiques plutôt que par des décisions rationnelles. Les habitudes sont des automatismes acquis qui structurent notre rapport au monde sans passer par la conscience. Pour Nietzsche, la morale est d'abord une question d'habitudes incorporées plutôt que de principes réfléchis. Cette approche permet de comprendre la stabilité des comportements moraux mais aussi leur possible transformation par la modification des habitudes."
    },

    // Question n°35
    { 
        question: "Question n°35 : Quel rapport Nietzsche établit-il entre vérité et pouvoir ?",
        answers: [
            "Réponse : la vérité est toujours du côté des opprimés", 
            "Réponse : la vérité peut être une stratégie de ceux qui détiennent l'autorité", 
            "Réponse : la vérité est indépendante des rapports de pouvoir"
        ], 
        correct: 2,
        explanation: "Nietzsche établit un lien entre vérité et pouvoir en affirmant que « la voie de la contrainte et de l'autorité est plus sûre que celle de la ruse ». Cette idée suggère que la vérité peut être une stratégie de ceux qui détiennent le pouvoir ou l'autorité : ils peuvent se permettre d'être francs parce qu'ils n'ont pas besoin de ruser. À l'inverse, ceux qui sont en position de faiblesse pourraient avoir recours au mensonge comme arme des faibles. Cette analyse préfigure les développements ultérieurs de Nietzsche sur la morale des maîtres et la morale des esclaves. Elle montre comment les pratiques morales sont liées aux positions sociales et aux rapports de force. La véracité apparaît ainsi non comme une vertu désintéressée mais comme le luxe de ceux qui sont en position de force."
    },

    // Question n°36
    { 
        question: "Question n°36 : Comment Nietzsche conçoit-il la « naturalité » du comportement humain ?",
        answers: [
            "Réponse : comme une essence fixe et immuable", 
            "Réponse : comme une plasticité qui s'adapte aux circonstances", 
            "Réponse : comme une perfection divine à retrouver"
        ], 
        correct: 2,
        explanation: "Nietzsche conçoit la « naturalité » du comportement humain non comme une essence fixe et immuable mais comme une plasticité qui s'adapte aux circonstances. L'enfant se sert « tout aussi naturellement » du mensonge dans un milieu compliqué, montrant que la nature humaine n'est pas une mais multiple, capable de développer des comportements différents selon les contextes. Cette conception de la naturalité comme plasticité s'oppose aux essentialismes qui postulent une nature humaine déterminée une fois pour toutes. Pour Nietzsche, ce qui est « naturel » à l'être humain, c'est précisément sa capacité à se transformer, à s'adapter, à développer de nouvelles formes de vie. Cette plasticité ouvre la possibilité d'une transformation radicale de l'humanité et de ses valeurs."
    },

    // Question n°37
    { 
        question: "Question n°37 : Quelle est la fonction de la parenthèse contenant la citation de Swift ?",
        answers: [
            "Réponse : une digression sans rapport avec l'argument principal", 
            "Réponse : une illustration concrète qui renforce l'argument sur la complexité du mensonge", 
            "Réponse : une contradiction délibérée de la thèse de Nietzsche"
        ], 
        correct: 2,
        explanation: "La parenthèse contenant la citation de Swift remplit une fonction argumentative importante : elle fournit une illustration concrète qui renforce l'argument de Nietzsche sur la complexité et le coût psychique du mensonge. En montrant comment un mensonge en entraîne beaucoup d'autres, Swift donne une image vivante du « lourd fardeau » évoqué par Nietzsche. Cette citation sert aussi à étayer l'analyse par une autorité extérieure, montrant que l'observation nietzschéenne n'est pas isolée mais correspond à une sagesse partagée. La forme de la parenthèse suggère que cette illustration vient en appui de l'argument principal sans en être le cœur. Elle enrichit l'analyse sans la surcharger, respectant ainsi l'économie du texte et son rythme argumentatif."
    },

    // Question n°38
    { 
        question: "Question n°38 : Comment Nietzsche traite-t-il le problème de la mémoire dans le mensonge ?",
        answers: [
            "Réponse : comme une faculté sans importance", 
            "Réponse : comme une exigence qui rend le mensonge difficile et coûteux", 
            "Réponse : comme un don divin qui permet de distinguer le vrai du faux"
        ], 
        correct: 2,
        explanation: "Nietzsche traite la mémoire comme une exigence qui rend le mensonge difficile et coûteux. Dans la liste des requis du mensonge (« invention, dissimulation et mémoire »), la mémoire apparaît comme la condition de la cohérence temporelle du mensonge. Le menteur doit se souvenir de ses mensonges passés pour éviter les contradictions, ce qui représente une charge cognitive importante. Cette analyse psychologique montre comment Nietzsche aborde les problèmes moraux sous l'angle des contraintes pratiques plutôt que sous l'angle des principes. La mémoire devient ainsi un facteur qui pèse dans la balance utilitaire entre vérité et mensonge. Cette attention portée aux capacités cognitives concrètes est caractéristique de l'approche naturaliste de Nietzsche, qui cherche à ancrer la morale dans la psychologie humaine réelle plutôt que dans des abstractions."
    },

    // Question n°39
    { 
        question: "Question n°39 : Que signifie « répugnance au mensonge en soi » dans le texte ?",
        answers: [
            "Réponse : un dégoût moral inné pour le mensonge", 
            "Réponse : une réaction affective négative indépendante des conséquences", 
            "Réponse : une construction éducative et sociale"
        ], 
        correct: 3,
        explanation: "L'expression « répugnance au mensonge en soi » désigne une réaction affective négative au mensonge considéré en lui-même, indépendamment de ses conséquences. Nietzsche affirme qu'une telle répugnance est « étrangère et inaccessible » à l'enfant élevé dans un milieu compliqué, montrant ainsi qu'elle n'est pas innée mais acquise. Cette idée s'oppose aux conceptions qui font de la répugnance morale une donnée naturelle ou une intuition immédiate. Pour Nietzsche, ce type de réaction affective est le produit d'une éducation morale spécifique qui intériorise certaines valeurs au point qu'elles deviennent des réflexes émotionnels. La « répugnance en soi » représente ainsi le degré le plus profond d'incorporation des valeurs, où celles-ci ne sont plus perçues comme des règles extérieures mais comme des évidences affectives."
    },

    // Question n°40
    { 
        question: "Question n°40 : Comment Nietzsche articule-t-il individu et société dans son analyse ?",
        answers: [
            "Réponse : l'individu est totalement déterminé par la société", 
            "Réponse : l'individu et la société s'influencent mutuellement", 
            "Réponse : l'individu est indépendant de la société"
        ], 
        correct: 2,
        explanation: "Nietzsche articule individu et société dans une relation d'influence mutuelle plutôt que de détermination unilatérale. D'un côté, la société (à travers l'éducation, les circonstances domestiques) forme l'individu et ses valeurs. De l'autre, l'individu adapte ces valeurs à ses intérêts et développe des stratégies personnelles. L'exemple de l'enfant montre comment un individu particulier réagit à un environnement social spécifique. Cette conception évite à la fois l'individualisme abstrait (qui isolerait l'individu de la société) et le sociologisme réducteur (qui nierait toute marge de manœuvre individuelle). Pour Nietzsche, l'individu est un point de croisement entre des forces sociales et des pulsions personnelles, et c'est dans cette tension que se construisent les valeurs et les comportements moraux."
    },

    // Question n°41
    { 
        question: "Question n°41 : Quelle est la place de l'affectivité dans l'analyse nietzschéenne de la vérité ?",
        answers: [
            "Réponse : elle est totalement absente de l'analyse", 
            "Réponse : elle joue un rôle central à travers les notions de facilité et de répugnance", 
            "Réponse : elle est considérée comme un obstacle à la vérité"
        ], 
        correct: 2,
        explanation: "L'affectivité joue un rôle central dans l'analyse nietzschéenne de la vérité, notamment à travers les notions de facilité (qui a une dimension hédonique) et de répugnance (qui est une réaction affective). Nietzsche montre que notre rapport à la vérité n'est pas seulement guidé par la raison ou la moralité mais aussi par des affects : la paresse cognitive nous pousse vers la vérité parce qu'elle est plus facile, tandis que dans d'autres contextes, la peur ou le désir d'éviter les conflits peuvent pousser au mensonge. Cette attention portée à la dimension affective s'inscrit dans le projet de Nietzsche de penser l'être humain comme un être entier, corps et esprit, raison et passion. Les affects ne sont pas des perturbations de la rationalité mais des forces constitutives de notre rapport au monde et aux valeurs."
    },

    // Question n°42
    { 
        question: "Question n°42 : Comment Nietzsche comprend-il la notion de « simplicité » des circonstances ?",
        answers: [
            "Réponse : comme une caractéristique objective des situations", 
            "Réponse : comme une perception subjective liée à la position sociale", 
            "Réponse : comme une illusion métaphysique"
        ], 
        correct: 2,
        explanation: "Nietzsche comprend la notion de « simplicité » des circonstances non comme une caractéristique objective des situations mais comme une perception subjective liée à la position sociale et au pouvoir de l'individu. Ce qui est « simple » pour une personne en position d'autorité (dont les désirs sont clairs et peuvent s'exprimer directement) peut être « compliqué » pour une personne dominée (qui doit naviguer entre des demandes contradictoires). Cette relativité de la simplicité montre comment les conditions sociales structurent notre expérience du monde. Pour Nietzsche, il n'y a pas de situations intrinsèquement simples ou complexes ; il y a des positions sociales qui rendent les relations plus ou moins transparentes. Cette analyse révèle le lien entre structures sociales et formes de subjectivité."
    },

    // Question n°43
    { 
        question: "Question n°43 : Quel est le statut des exemples concrets dans la méthode de Nietzsche ?",
        answers: [
            "Réponse : ils sont évités au profit de la pure théorie", 
            "Réponse : ils jouent un rôle essentiel pour ancrer l'analyse dans le réel", 
            "Réponse : ils servent seulement d'illustrations décoratives"
        ], 
        correct: 2,
        explanation: "Les exemples concrets jouent un rôle essentiel dans la méthode de Nietzsche pour ancrer l'analyse philosophique dans le réel. L'exemple de l'enfant élevé dans des circonstances compliquées n'est pas une simple illustration mais un élément constitutif de l'argumentation. Il permet de montrer concrètement comment les principes abstraits se traduisent dans des situations réelles. Cette importance accordée aux exemples correspond à la volonté de Nietzsche de faire une philosophie proche de la vie, attentive aux phénomènes concrets plutôt qu'aux constructions abstraites. Les exemples servent aussi à rendre la pensée accessible et vivante, évitant l'écueil d'un discours purement théorique. Cette méthode montre comment Nietzsche cherche à renouveler la pratique philosophique en la rapprochant de l'observation psychologique et sociale."
    },

    // Question n°44
    { 
        question: "Question n°44 : Comment Nietzsche envisage-t-il la possibilité d'une éducation différente ?",
        answers: [
            "Réponse : il ne l'envisage pas, considérant l'éducation actuelle comme naturelle", 
            "Réponse : il la suggère implicitement en montrant comment l'éducation actuelle produit certains effets", 
            "Réponse : il propose un programme éducatif détaillé"
        ], 
        correct: 2,
        explanation: "Nietzsche envisage la possibilité d'une éducation différente implicitement, en montrant comment l'éducation actuelle dans des « circonstances domestiques compliquées » produit des effets spécifiques (un rapport instrumental à la vérité). En révélant les mécanismes par lesquels l'éducation forme la conscience morale, il ouvre la possibilité d'imaginer d'autres formes d'éducation qui produiraient d'autres types de subjectivité. Cette approche est caractéristique de la méthode généalogique : en montrant l'origine contingente des phénomènes, elle rend visible leur possible transformation. Nietzsche ne propose pas de programme éducatif positif mais crée les conditions intellectuelles pour penser une éducation différente, libérée des présupposés moraux traditionnels. Cette ouverture vers le possible est l'une des dimensions les plus fécondes de sa pensée."
    },

    // Question n°45
    { 
        question: "Question n°45 : Quel rapport Nietzsche établit-il entre vérité et transparence ?",
        answers: [
            "Réponse : la vérité est toujours liée à la transparence des relations", 
            "Réponse : la vérité est indépendante de la transparence", 
            "Réponse : la vérité détruit la transparence"
        ], 
        correct: 1,
        explanation: "Nietzsche établit un lien étroit entre vérité et transparence des relations sociales. Dans les « circonstances simples » où les relations sont transparentes (intérêts clairs, hiérarchies établies, communications directes), la vérité est avantageuse. À l'inverse, dans les situations « compliquées » où règne l'opacité (intentions cachées, relations ambiguës, communications biaisées), le mensonge devient naturel. Cette analyse montre que la pratique de la vérité dépend moins d'une décision individuelle que de la qualité des relations sociales. La véracité apparaît ainsi comme le luxe des situations sociales transparentes, tandis que l'opacité sociale favorise la dissimulation. Cette perspective sociologique enrichit considérablement la réflexion sur la vérité en la situant dans son contexte relationnel concret."
    },

    // Question n°46
    { 
        question: "Question n°46 : Comment Nietzsche aborde-t-il la question de l'innocence morale ?",
        answers: [
            "Réponse : comme un état originel à retrouver", 
            "Réponse : comme un mythe chrétien sans réalité", 
            "Réponse : comme une absence de conscience morale acquise"
        ], 
        correct: 3,
        explanation: "Nietzsche aborde l'innocence morale non comme un état originel à retrouver (comme dans le mythe rousseauiste de l'état de nature) ni comme un mythe chrétien, mais comme une absence de conscience morale acquise. L'enfant qui ment « en toute innocence » n'est pas innocent au sens d'une pureté originelle, mais au sens d'une non-incorporation des valeurs morales traditionnelles. Son innocence est une non-moralité plutôt qu'une moralité parfaite. Cette conception s'oppose aux nostalgies d'un âge d'or moral et aux projets de retour à une innocence perdue. Pour Nietzsche, l'innocence n'est pas derrière nous mais pourrait être devant nous, sous la forme d'une humanité ayant dépassé les valeurs morales traditionnelles pour en créer de nouvelles. Cette innocence serait alors non un retour à l'origine mais un dépassement vers l'avenir."
    },

    // Question n°47
    { 
        question: "Question n°47 : Quelle est la fonction de la référence à la « vie de tous les jours » ?",
        answers: [
            "Réponse : limiter l'analyse aux situations triviales sans portée philosophique", 
            "Réponse : ancrer la réflexion philosophique dans l'expérience ordinaire", 
            "Réponse : éviter les questions métaphysiques importantes"
        ], 
        correct: 2,
        explanation: "La référence à la « vie de tous les jours » remplit une fonction méthodologique importante : elle ancre la réflexion philosophique dans l'expérience ordinaire plutôt que dans des spéculations abstraites. Nietzsche part des pratiques concrètes des êtres humains dans leur existence quotidienne pour en tirer des enseignements philosophiques. Cette démarche s'inscrit dans le projet de faire une philosophie « humaine, trop humaine », proche de la vie réelle et attentive aux phénomènes les plus banals. En se focalisant sur la vie quotidienne, Nietzsche montre que les grandes questions philosophiques (comme celle de la vérité) ne sont pas réservées aux situations exceptionnelles mais se jouent dans les interactions les plus ordinaires. Cette attention au quotidien est une manière de démocratiser la philosophie et de la rendre pertinente pour l'existence concrète."
    },

    // Question n°48
    { 
        question: "Question n°48 : Comment Nietzsche traite-t-il la question de la spontanéité du comportement ?",
        answers: [
            "Réponse : il la valorise comme expression de l'authenticité", 
            "Réponse : il la décrit comme le résultat d'habitudes incorporées", 
            "Réponse : il la rejette comme irrationnelle"
        ], 
        correct: 2,
        explanation: "Nietzsche traite la question de la spontanéité du comportement non comme l'expression d'une authenticité intérieure mais comme le résultat d'habitudes incorporées. L'enfant dit « involontairement » ce qui répond à son intérêt, ce qui montre que sa spontanéité est en réalité le produit d'un conditionnement. Cette conception s'oppose aux romantismes qui célèbrent la spontanéité comme expression d'un moi authentique et libre. Pour Nietzsche, ce qui apparaît comme spontané est en fait l'effet de mécanismes psychologiques et sociaux profondément intériorisés. Cette analyse permet de démythifier l'idée de naturel : ce qui semble aller de soi et être immédiat est en réalité construit et acquis. La spontanéité apparaît ainsi comme le degré ultime de l'incorporation, où les valeurs deviennent des réflexes si profonds qu'ils semblent naturels."
    },

    // Question n°49
    { 
        question: "Question n°49 : Quel est le rôle de la contradiction dans la pensée de Nietzsche ?",
        answers: [
            "Réponse : elle est évitée comme un défaut logique", 
            "Réponse : elle est recherchée comme moteur de la pensée", 
            "Réponse : elle est résolue par la synthèse hégélienne"
        ], 
        correct: 2,
        explanation: "Dans la pensée de Nietzsche, la contradiction n'est pas évitée comme un défaut logique mais est souvent recherchée comme moteur de la pensée. Le texte présente plusieurs tensions fécondes : entre la simplicité des situations où la vérité est avantageuse et la complexité des situations où le mensonge devient naturel ; entre l'innocence du mensonge enfantin et la culpabilité morale traditionnelle. Ces contradictions ne sont pas résolues par une synthèse mais maintenues comme révélatrices de la complexité du réel. Nietzsche pratique une pensée du paradoxe qui cherche à saisir les aspects contradictoires de l'existence sans les réduire à une unité artificielle. Cette approche correspond à sa vision d'un monde multiple et conflictuel, où les oppositions ne doivent pas être abolies mais comprises dans leur fécondité."
    },

    // Question n°50
    { 
        question: "Question n°50 : Quelle est l'originalité de l'approche nietzschéenne de la vérité dans ce texte ?",
        answers: [
            "Réponse : elle substitue aux justifications morales des explications psychologiques et utilitaires", 
            "Réponse : elle réaffirme les fondements métaphysiques de la vérité", 
            "Réponse : elle nie toute possibilité de distinction entre vérité et mensonge"
        ], 
        correct: 1,
        explanation: "L'originalité de l'approche nietzschéenne dans ce texte réside dans le fait qu'elle substitue aux justifications morales et métaphysiques traditionnelles de la vérité des explications psychologiques et utilitaires. Au lieu de fonder la véracité sur un commandement divin ou sur une obligation morale abstraite, Nietzsche la explique par des mécanismes concrets : économie cognitive, stratégies sociales, adaptations environnementales. Cette substitution correspond au projet de « naturalisation » de la morale qui caractérise la philosophie de Nietzsche. En montrant que des motifs « bas » (facilité, intérêt, avantage) peuvent expliquer des comportements apparemment « nobles » (la véracité), il opère un renversement des perspectives qui vise à libérer la pensée des préjugés moraux. Cette approche ouvre la voie à une réévaluation générale des valeurs et à la possibilité de créer de nouvelles valeurs affranchies des illusions métaphysiques."
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