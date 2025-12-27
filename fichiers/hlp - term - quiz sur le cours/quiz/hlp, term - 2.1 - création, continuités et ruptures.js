// ============================================
// DONNÉES GÉNÉRALES
// ============================================
const titre = "QUIZ HLP - Création, continuités et ruptures";
const sousTitre = "100 questions";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE (Synthèse)
// ============================================
const philosophyData = {
  texte: `Les 20e et 21e siècles se caractérisent par une remise en question profonde des certitudes positivistes du 19e siècle. Face aux guerres mondiales, aux crises écologiques et aux mutations artistiques, la possibilité même de construire un monde commun autour de normes partagées est interrogée. Cette séquence explore la tension dialectique entre rupture et continuité, que ce soit dans la définition de notions fondamentales, dans les expressions artistiques ou dans les courants philosophiques majeurs. Il s’agit de comprendre comment notre époque tente de créer du sens entre l’héritage critique et l’invention de nouvelles formes de pensée et d’être-ensemble.`,
  source: "Synthèse des enjeux de la séquence"
};

// ============================================
// QUESTIONS DU QUIZ (1 à 100)
// ============================================
const questions = [
  // Question n°1
  {
    question: "Quelle conviction héritée du 19e siècle est radicalement ébranlée par les événements du 20e siècle ?",
    answers: [
      "L’idée que la métaphysique est supérieure à toute connaissance scientifique.",
      "La foi dans l’art classique comme modèle indépassable de toute création.",
      "La confiance positiviste en un progrès linéaire et inéluctable de l’humanité."
    ],
    correct: 3,
    explanation: `La réponse correcte identifie le positivisme et l’idéologie du progrès liée à la révolution industrielle comme le paradigme ébranlé par les deux guerres mondiales. L’importance philosophique réside dans le passage d’un sens de l’histoire orienté vers le mieux à une ère de doute sur la nature même de l’humanité et de sa raison. Cette rupture fondamentale conditionne toutes les réflexions ultérieures sur l’art, la politique et la connaissance, rendant problématique la simple transmission d’un héritage.
    \nExemple : La Shoah, en tant qu’événement du 20e siècle, a été analysée par de nombreux penseurs comme une rupture civilisationnelle qui met en question les fondements mêmes de la raison et du progrès humaniste occidental.`
  },
  // Question n°2
  {
    question: "Quel est le principal défi du monde contemporain face à son passé ?",
    answers: [
      "Il doit choisir entre l’invention pure, la poursuite de l’héritage ou la critique libératrice.",
      "Il doit impérativement rompre avec toutes les traditions pour inventer du neuf.",
      "Il doit retrouver et restaurer intégralement les valeurs et normes du passé."
    ],
    correct: 1,
    explanation: `La réponse correcte synthétise les trois postures possibles face au passé : création de nouvelles normes (invention), transmission (continuité) et rejet critique (rupture). L’enjeu philosophique est de définir une attitude qui ne soit ni un rejet stérile ni une soumission aveugle, mais une relation dialectique. La difficulté, et peut-être la solution, réside dans la possibilité d’opter simultanément pour ces trois modes de relation, sans tomber dans l’incohérence.
    \nExemple : L’architecture contemporaine oscille souvent entre des bâtiments futuristes qui rompent avec le paysage, des restaurations à l’identique de centres historiques et des constructions qui dialoguent de manière critique avec le patrimoine existant, comme la pyramide du Louvre.`
  },
  // Question n°3
  {
    question: "L’exemple du candidat Djemi Drici offrant des bons d’essence illustre principalement :",
    answers: [
      "Une innovation légitime dans la communication politique moderne.",
      "L’efficacité incontestable des campagnes électorales fondées sur le concret.",
      "La démagogie, définie par des promesses visant à influencer le vote par l’appât du gain immédiat."
    ],
    correct: 3,
    explanation: `Cet exemple illustre la démagogie, pratique qui corrompt le processus démocratique en substituant l’intérêt particulier immédiat à la délibération sur le bien commun. Son importance politique est majeure : elle montre comment la parole publique peut être vidée de son sens pour devenir un simple instrument de manipulation des affects. Elle constitue un obstacle direct au « faire monde », c’est-à-dire à la constitution d’un espace public rationnel et partagé.
    \nExemple : Cette pratique trouve un écho dans des promesses électorales irréalistes ou purement clientélistes qui contournent le débat sur les projets de société, réduisant la politique à un marché d’échanges de faveurs.`
  },
  // Question n°4
  {
    question: "Que signifie précisément l’expression « faire monde » dans le contexte philosophique contemporain ?",
    answers: [
      "Conquérir et dominer la nature par la technique et la science.",
      "Produire des œuvres d’art qui représentent le monde de manière fidèle.",
      "Constituer un espace commun de sens et de coexistence où, par principe, chacun a sa place."
    ],
    correct: 3,
    explanation: `« Faire monde » est une expression-clé qui désigne l’activité politique et sociale de construction d’un espace commun. Son enjeu est de répondre à l’éclatement des certitudes et au morcellement communautaire. Dans un contexte de prévalence des croyances individuelles, la question devient : comment établir des normes communes sans imposer une vision unique ni sombrer dans le relativisme absolu ? C’est la quête d’un vivre-ensemble malgré la pluralité.
    \nExemple : Les débats contemporains sur la laïcité peuvent être vus comme une tentative de « faire monde » en définissant un cadre commun permettant la coexistence de convictions religieuses différentes dans un espace public neutre.`
  },
  // Question n°5
  {
    question: "Pourquoi la découverte des Amériques est-elle un bon exemple pour penser la relativité de la notion de rupture ?",
    answers: [
      "Parce qu’elle a marqué une rupture technologique absolue, perceptible par toutes les civilisations.",
      "Parce qu’elle n’a constitué une rupture que du point de vue des Européens, pour qui c’était un « nouveau monde ».",
      "Parce qu’elle a été vécue comme une simple continuité par tous les peuples impliqués sans exception."
    ],
    correct: 2,
    explanation: `Cet exemple montre que la rupture n’est pas une qualité objective de l’événement, mais dépend du point de vue et de l’histoire de celui qui l’éprouve. Pour les civilisations précolombiennes, il n’y a pas eu de « découverte » mais une invasion et une catastrophe. L’importance philosophique est de remettre en cause un historicisme qui pose des ruptures absolues et universelles.
    \nExemple : La chute du mur de Berlin en 1989 a été vécue comme une libération à l’Ouest, mais aussi comme un traumatisme et une perte de repères pour une partie de la population est-allemande, illustrant la relativité de l’événement « rupture ».`
  },
  // Question n°6
  {
    question: "Quelle question fondamentale est posée par l’opposition entre rupture et continuité ?",
    answers: [
      "La question de savoir qui détient le pouvoir de décider du sens officiel de l’histoire.",
      "La question de la supériorité intrinsèque de l’ancien sur le moderne, ou l’inverse.",
      "La question de la différence entre ce qui est neuf et ce qui est nouveau, entre l’origine et l’originalité."
    ],
    correct: 3,
    explanation: `L’opposition revient à interroger la nature même de ce qui advient. Le « nouveau » peut n’être qu’un renouvellement dans le cadre de la mêmeté (continuité), tandis que le « neuf » implique une altérité radicale, une irruption de l’inédit (rupture). Cette distinction est cruciale pour analyser les prétentions à la modernité des différentes époques et œuvres.
    \nExemple : L’invention de la photographie fut un surgissement de réellement neuf, tandis que le passage du téléphone filaire au smartphone est plutôt un renouvellement et une complexification du même principe de communication.`
  },
  // Question n°7
  {
    question: "Quelle est la singularité potentielle des ruptures à l’époque contemporaine ?",
    answers: [
      "Elles concernent exclusivement et en priorité le domaine technologique et numérique.",
      "Elles sont plurielles et touchent à des fondements : l’art, l’histoire, la raison, l’humanité, la nature.",
      "Elles sont en réalité moins profondes et moins durables qu’aux siècles précédents."
    ],
    correct: 2,
    explanation: `Le contemporain se caractérise par une multiplication de crises qui semblent mettre en jeu des catégories fondamentales de notre existence et de notre pensée. La particularité est que ces « morts annoncées » ne sont pas de simples changements, mais des interrogations sur la possibilité même de poursuivre sous les mêmes concepts. La crise écologique est particulièrement citée comme étant sans précédent par son ampleur systémique.
    \nExemple : Le mouvement transhumaniste prône explicitement une rupture avec la condition humaine biologique actuelle, envisageant un « dépassement » de l’humanité, posant la question de la « mort de l’humanité » au sens traditionnel.`
  },
  // Question n°8
  {
    question: "Quel concept permet d’articuler de manière plus subtile et nuancée les notions de rupture et de continuité ?",
    answers: [
      "Le concept de révolution, comme renversement violent et complet.",
      "Le concept de seuil, suggérant un passage progressif par accumulation.",
      "Le concept de cycle, impliquant un retour éternel du même."
    ],
    correct: 2,
    explanation: `La notion de seuil suggère un passage progressif, une accumulation de changements qui finissent par modifier qualitativement un état sans qu’il y ait nécessairement un moment de rupture claire et datable. Cela permet de dépasser l’opposition binaire et de penser la transformation historique de manière plus complexe. Un seuil est franchi quand la quantité de changements produit une nouvelle qualité.
    \nExemple : La diffusion massive d’Internet et des réseaux sociaux a franchi un seuil dans nos sociétés, modifiant en profondeur la communication et les liens sociaux, sans qu’une date unique ne marque une « rupture » nette.`
  },
  // Question n°9
  {
    question: "Que montre la psychanalyse à propos de la nature humaine et de la conscience ?",
    answers: [
      "Que les croyances individuelles sont sans effet aucun sur la raison universelle et objective.",
      "Que l’homme est d’abord et avant tout un être de raison, comme le pensait la tradition.",
      "Que la conscience, longtemps considérée comme l’essence de l’homme, n’est que la partie émergée de l’appareil psychique."
    ],
    correct: 3,
    explanation: `La psychanalyse freudienne opère une rupture majeure avec la tradition philosophique qui définissait l’homme par sa conscience et sa raison. Elle introduit l’idée d’un inconscient qui détermine une grande partie de notre vie psychique. Cette découverte a des implications considérables : elle explique en partie pourquoi l’universel semble reculer devant le singulier et complique le projet de « faire monde » sur des bases purement rationnelles.
    \nExemple : Les résistances irrationnelles à certains faits scientifiques peuvent s’analyser, en partie, par des mécanismes psychiques inconscients comme le déni, plutôt que par un simple manque d’information.`
  },
  // Question n°10
  {
    question: "Contre quelle tradition philosophique précise Ludwig Wittgenstein rompt-il dans <em>De la certitude</em> ?",
    answers: [
      "Contre l’idéalisme hégélien qui fait de l’histoire le déploiement nécessaire de l’Esprit.",
      "Contre l’empirisme de Locke qui fait de l’expérience sensorielle la source unique de toute connaissance.",
      "Contre le scepticisme cartésien qui doute de tout pour trouver un fondement indubitable."
    ],
    correct: 3,
    explanation: `Wittgenstein s’oppose à la méthode du doute hyperbolique de Descartes. Il montre que le doute lui-même présuppose un arrière-plan de certitudes non-doutées, comme l’existence du monde ou de son corps. La certitude n’est donc pas le point d’arrivée d’une enquête, mais le fondement toujours déjà là de toute pensée et action, produit de notre « forme de vie ».
    \nExemple : Lorsque je tends la main pour attraper un objet, je ne doute pas un instant de son existence ; cette certitude pratique est le socle sur lequel s’appuient toutes mes actions.`
  },
  // Question n°11
  {
    question: "Que signifie l’affirmation de Wittgenstein selon laquelle l’homme est « d’abord un être de croyance et de certitude » ?",
    answers: [
      "Que la religion constitue le fondement incontournable de toute société organisée.",
      "Que nous devons croire sans preuve ce que nous disent les autorités établies et les traditions.",
      "Que notre rapport au monde est immédiatement pratique et ancré dans des évidences partagées, avant d’être un savoir théorique discuté."
    ],
    correct: 3,
    explanation: `Cette thèse renverse la hiérarchie classique entre croyance et connaissance. Pour Wittgenstein, un vaste socle de certitudes non questionnées conditionne la possibilité même du langage, de l’action et, finalement, de la connaissance savante. La difficulté n’est pas tant de « pouvoir savoir » que de « vouloir savoir », c’est-à-dire de questionner ce qui nous semble aller de soi.
    \nExemple : Notre certitude que le soleil se lèvera demain n’est pas le fruit d’une déduction scientifique, mais une croyance fondamentale ancrée dans notre expérience répétée et partagée du monde.`
  },
  // Question n°12
  {
    question: "Que sont les « obstacles épistémologiques » selon Gaston Bachelard ?",
    answers: [
      "Les difficultés financières et politiques qui empêchent le financement adéquat de la recherche scientifique.",
      "Les limites techniques inhérentes aux instruments de mesure scientifique disponibles à une époque.",
      "Des entraves internes à l’esprit, des soubassements inconscients qui viennent fausser l’accès à l’objet de la connaissance."
    ],
    correct: 3,
    explanation: `Bachelard identifie dans <em>La formation de l’esprit scientifique</em> des obstacles liés à la connaissance elle-même. Ces obstacles, comme l’expérience première ou l’animisme, sont des habitudes de pensée, des images ou des affects qui se placent entre le désir de connaître et l’objet. L’enjeu est de réaliser une catharsis intellectuelle pour s’en défaire. La science progresse en rompant avec les opinions.
    \nExemple : L’obstacle « substantialiste » pousse à imaginer derrière toute propriété une substance particulière, alors que la physique moderne en donne des explications relationnelles et énergétiques.`
  },
  // Question n°13
  {
    question: "Quelle est la prescription principale de Bachelard pour former un authentique esprit scientifique ?",
    answers: [
      "Apprendre par cœur et accepter sans discussion les théories des grands savants du passé.",
      "Acquérir le plus grand nombre possible de données expérimentales brutes et précises.",
      "Réaliser une catharsis intellectuelle et affective, refuser l’argument d’autorité et laisser sa raison inquiète."
    ],
    correct: 3,
    explanation: `Bachelard propose une véritable ascèse intellectuelle. La catharsis est un nettoyage des opinions préconçues. Réformer son esprit, c’est lutter contre l’habitude. Refuser l’argument d’autorité, c’est affirmer l’autonomie du jugement. Enfin, la « raison inquiète » est une vigilance critique permanente. Le savoir scientifique n’est pas un stock de vérités mais une activité critique incessante.
    \nExemple : Galilée a dû réaliser une telle catharsis pour rompre avec l’obstacle de l’expérience première et construire l’héliocentrisme sur la base du calcul.`
  },
  // Question n°14
  {
    question: "Selon Robert Nozick dans <em>Anarchie, État et utopie</em>, quel devrait être le rôle légitime de l’État ?",
    answers: [
      "Définir et imposer des valeurs communes fortes pour assurer la cohésion sociale.",
      "Intervenir activement pour redistribuer les richesses et garantir une justice sociale substantielle.",
      "Se réduire au minimum, protégeant les droits individuels mais laissant les individus libres sans taxation coercitive."
    ],
    correct: 3,
    explanation: `Nozick défend une conception libertarienne minimale de l’État. L’État ne doit être qu’un « veilleur de nuit » protégeant les droits individuels fondamentaux. Toute intervention au-delà, comme la taxation redistributive, est vue comme une violation de la liberté individuelle. Sa thèse radicale illustre une rupture avec les conceptions interventionnistes ou sociales de l’État.
    \nExemple : Pour un penseur comme Nozick, un impôt sur le revenu à finalité redistributive est moralement équivalent à du travail forcé, car il prélève le fruit du travail sans consentement.`
  },
  // Question n°15
  {
    question: "Quel principe de justice John Rawls met-il en avant à travers l’article 6 de la Déclaration des Droits de l’Homme et du Citoyen ?",
    answers: [
      "La justice comme égalité stricte des résultats économiques pour tous les membres de la société.",
      "La justice comme héritage, garantissant la transmission légitime des positions sociales aux descendants.",
      "La justice comme égalité équitable des chances, accordant les emplois au plus méritant selon ses vertus et talents."
    ],
    correct: 3,
    explanation: `Rawls, dans une continuité avec l’idéal méritocratique des Lumières, défend le principe d’« égalité équitable des chances ». Les inégalités sociales ne sont justes que si les positions sont ouvertes à tous dans des conditions de concurrence loyale. Ce principe vise à corriger les injustices de la naissance pour que la société soit une compétition équitable.
    \nExemple : Les concours de la fonction publique, en théorie, incarnent ce principe rawlsien : ils sont ouverts à tous et les postes sont attribués au mieux classé, indépendamment de l’origine sociale.`
  },
  // Question n°16
  {
    question: "Quelle thèse célèbre de Hegel sur l’art est citée pour introduire l’idée de la « fin de l’art » ?",
    answers: [
      "L’art doit être utile et éducatif pour le plus grand nombre dans la société.",
      "L’art est l’imitation fidèle et idéalisée de la nature et de ses beautés.",
      "L’art est l’expression sensible de l’Idée absolue, mais à notre époque de culture réflexive, cette destination suprême est pour nous quelque chose du passé."
    ],
    correct: 3,
    explanation: `Hegel estime que l’art a joué un rôle essentiel en donnant une forme sensible à l’absolu. Cependant, l’époque moderne, caractérisée par la pensée réflexive et abstraite, ne serait plus « propice » à cet accomplissement suprême de l’art. L’Esprit se comprend désormais mieux par des concepts. Cette thèse est reprise au 20e siècle pour interpréter les mutations de l’art contemporain.
    \nExemple : Pour Hegel, les sculptures des dieux grecs représentaient parfaitement l’idéal de leur temps, alors qu’une société moderne rationaliste ne peut plus trouver dans une statue une satisfaction spirituelle équivalente.`
  },
  // Question n°17
  {
    question: "Quelle caractéristique de l’œuvre d’art classique, selon Kant, est remise en cause par certaines pratiques de l’art contemporain ?",
    answers: [
      "Son caractère nécessairement figuratif et représentatif d’un sujet identifiable.",
      "Son utilité pratique immédiate dans la vie quotidienne des individus.",
      "Sa finalité sans fin, son inutilité qui en fait un objet de contemplation désintéressée pour lui-même."
    ],
    correct: 3,
    explanation: `Kant définit le jugement esthétique comme désintéressé. L’œuvre d’art classique incarne cette « finalité sans fin ». L’art contemporain, notamment avec la performance ou l’art conceptuel, rompt avec cette idée : l’œuvre n’est plus un objet pérenne à contempler, mais devient un événement, un processus, une idée. L’objet peut disparaître au profit de l’action ou du concept.
    \nExemple : La « performance » est par essence éphémère ; elle n’existe que dans le temps de sa réalisation et n’a pas pour but premier de produire un objet beau à contempler.`
  },
  // Question n°18
  {
    question: "Quel exemple Walter Benjamin donne-t-il pour illustrer comment la technique modifie radicalement l’œuvre d’art ?",
    answers: [
      "Le synthétiseur électronique qui permet de créer de nouveaux sons inouïs.",
      "La presse à imprimer qui multiplie à l’infini les exemplaires d’un livre.",
      "Le cliché photographique, qui sépare la création (le négatif) de sa manifestation (le tirage) reproductible."
    ],
    correct: 3,
    explanation: `Dans <em>L’Œuvre d’art à l’époque de sa reproductibilité technique</em>, Benjamin analyse comment des techniques comme la photographie abolissent la notion d’« original » et d’« aura ». Le cliché est la matrice reproductible à l’infini, rendant chaque tirage aussi « original » qu’un autre. Cela rompt avec l’idée d’une pièce unique et sacralisée.
    \nExemple : Une affiche publicitaire reproduite à des millions d’exemplaires n’a pas d’« aura » au sens benjaminien, contrairement à la <em>Joconde</em> qui est un original unique.`
  },
  // Question n°19
  {
    question: "Qu’est-ce qu’une « performance » dans le champ de l’art contemporain ?",
    answers: [
      "Une évaluation rigoureuse de la qualité technique d’une œuvre par un collège d’experts.",
      "Une démonstration technique virtuose d’un artiste sur une scène traditionnelle.",
      "Une œuvre où l’action de l’artiste, souvent face à un public, devient l’œuvre elle-même, effaçant la séparation entre création et manifestation."
    ],
    correct: 3,
    explanation: `La performance est un art de l’événement et du corps. L’artiste utilise son propre corps, souvent dans une durée réelle, pour créer une situation qui est l’œuvre. Il n’y a pas d’objet final séparé à vendre. Cela représente une rupture totale avec la conception de l’art comme production d’objets pérennes et autonomes.
    \nExemple : La performance <em>Shoot</em> (1971) de Chris Burden, où il se fait tirer dessus au bras, fait de l’acte même de violence et de risque le cœur de l’œuvre.`
  },
  // Question n°20
  {
    question: "Quel est l’objectif principal de la performance <em>I like America and America likes me</em> de Joseph Beuys (1974) ?",
    answers: [
      "Créer un spectacle animalier captivant et éducatif pour le grand public.",
      "Faire un éloge artistique et sans réserve du mode de vie américain moderne.",
      "Mettre en cause, symboliquement, la relation entre l’homme blanc, la nature (le coyote) et la culture économique capitaliste."
    ],
    correct: 3,
    explanation: `Beuys, enfermé avec un coyote sauvage, engage un rituel de réconciliation symbolique avec la nature et l’histoire pré-coloniale de l’Amérique. Le coyote représente la nature sauvage. Le fait que l’animal urine sur le <em>Wall Street Journal</em> est un geste de critique de la civilisation capitaliste. Cette performance est typique d’un art qui cherche à guérir des traumatismes historiques et écologiques.
    \nExemple : En choisissant un coyote, animal mythique dans les cultures amérindiennes, Beuys propose une critique écologique et post-coloniale de l’Amérique moderne.`
  },
  // Question n°21
  {
    question: "Que critique l’art conceptuel, selon Joseph Kosuth, à propos de l’art traditionnel ?",
    answers: [
      "Son coût de production trop élevé et son élitisme économique indéfendable.",
      "Son manque de beauté et d’harmonie formelle selon les canons classiques.",
      "Son cantonnement au registre de l’apparence décorative et du plaisir des sens (l’esthétique)."
    ],
    correct: 3,
    explanation: `Pour Kosuth, l’art après Duchamp doit être « conceptuel ». L’idée ou la proposition prime sur la matérialité ou l’apparence sensible de l’objet. L’art ne doit plus viser à produire du beau, mais à interroger sa propre définition. Ainsi, une œuvre peut consister en une simple phrase. Cette thèse rompt avec la définition kantienne de l’art.
    \nExemple : L’œuvre <em>One and Three Chairs</em> de Kosuth présente une chaise réelle, une photo de cette chaise et sa définition, interrogeant les relations entre l’objet, sa représentation et son concept.`
  },
  // Question n°22
  {
    question: "Quelle controverse illustre la question « qui est l’auteur ? » dans le monde de l’art contemporain ?",
    answers: [
      "Le conflit sur la paternité historique de l’invention de la photographie au 19e siècle.",
      "La querelle esthétique entre les peintres abstraits et les peintres figuratifs dans les années 1950.",
      "Le différend entre Daniel Druet (l’exécutant des statues de cire) et Maurizio Cattelan (le donneur d’ordre et concepteur)."
    ],
    correct: 3,
    explanation: `Cette controverse juridique met en lumière la dissociation possible, dans l’art contemporain, entre celui qui conçoit l’idée et celui qui réalise matériellement l’objet. Elle questionne la notion romantique de l’artiste-génie qui maîtrise seul tout le processus. Dans une économie où l’idée prime, l’exécutant peut être relégué au rang d’ouvrier.
    \nExemple : De nombreux artistes contemporains, comme Jeff Koons, ont des ateliers avec des assistants qui réalisent matériellement les œuvres, remettant en cause l’idée d’une « main » unique de l’artiste.`
  },
  // Question n°23
  {
    question: "Comment Jean Cocteau, dans <em>La Machine infernale</em>, traite-t-il le mythe antique d’Œdipe ?",
    answers: [
      "Il le transpose intégralement dans le monde contemporain en habillant les personnages en costumes modernes.",
      "Il le suit à la lettre dans un style grandiloquent et tragique inspiré des Anciens.",
      "Il le démystifie en utilisant un langage familier, voire enfantin, pour en dénoncer la cruauté mécanique."
    ],
    correct: 3,
    explanation: `Cocteau opère une réécriture critique et distanciée du mythe. En réduisant le prophète Tirésias à un « Zizi » ridiculisé dans une scène de vaudeville, il brise la solennité tragique. Cette rupture de ton a pour but de rendre les personnages plus humains et faibles, soulignant l’absurdité de la « machine infernale » du destin.
    \nExemple : En faisant de la rencontre entre Jocaste et Tirésias une querelle domestique, Cocteau montre que les grandes tragédies naissent aussi de la banalité et de l’incompréhension.`
  },
  // Question n°24
  {
    question: "Quel est l’enjeu principal de la pièce <em>La guerre de Troie n’aura pas lieu</em> de Jean Giraudoux ?",
    answers: [
      "Célébrer l’héroïsme et la gloire éternelle des guerriers antiques comme modèles.",
      "Raconter de manière fidèle et pédagogique l’épopée homérique de la guerre de Troie.",
      "Faire un plaidoyer contre la guerre, en montrant l’absurdité de l’engrenage qui y mène, à la veille de la Seconde Guerre mondiale."
    ],
    correct: 3,
    explanation: `Écrite en 1935, la pièce de Giraudoux est une tragédie anticipatrice. En réécrivant le conflit troyen, elle met en scène les mécanismes politiques, rhétoriques et psychologiques qui rendent la guerre inévitable malgré les efforts des pacifistes. Le ton familier et ironique sert à désacraliser la guerre héroïque.
    \nExemple : La célèbre tirade d’Hector aux morts est une déconstruction puissante de la gloire militaire et de ses distinctions absurdes.`
  },
  // Question n°25
  {
    question: "Quel aspect du roman courtois médiéval Marcel Proust reprend-il dans <em>Du côté de chez Swann</em> ?",
    answers: [
      "La figure archétypale du chevalier errant à la recherche d’une quête.",
      "Les combats et les tournois comme métaphores des conflits intérieurs.",
      "La description du coup de foudre amoureux à travers le champ lexical de la vision et du regard qui veut « capturer » l’être aimé."
    ],
    correct: 3,
    explanation: `Proust s’inscrit dans une longue tradition littéraire qui fait de la rencontre amoureuse un événement visuel de capture. Le narrateur décrit le regard comme le « porte-parole » de tous les sens, animé par un désir de possession totale. Cette continuité thématique montre comment la littérature moderne réactive des archétypes anciens.
    \nExemple : La scène où le narrateur aperçoit Gilberte Swann aux Champs-Élysées est une variation moderne et analytique du « coup de foudre » traditionnel.`
  },
  // Question n°26
  {
    question: "Que signifie le concept d’« hantologie » en musique, tel qu’appliqué par Leyland Kirby (The Caretaker) ?",
    answers: [
      "Une technique de composition avant-gardiste utilisant des boucles électroniques complexes.",
      "L’étude systématique des musiques effrayantes composées pour les films d’horreur.",
      "Le fait que le présent est hanté par les fantômes du passé, par des sons ou des ambiances disparues qui ressurgissent."
    ],
    correct: 3,
    explanation: `Le terme, forgé par Jacques Derrida, désigne le retour persistant de ce qui est censé avoir disparu. En musique, cela peut se traduire par l’utilisation d’enregistrements anciens, traités pour créer une atmosphère de mémoire floue et de spectralité. L’œuvre n’est pas dans la nouveauté pure, mais dans la résurgence d’un passé qui hante le présent.
    \nExemple : L’album <em>Everywhere at the end of time</em> de The Caretaker évoque, à travers la dégradation de musiques de danse anciennes, l’expérience de la perte de mémoire et de la maladie d’Alzheimer.`
  },
  // Question n°27
  {
    question: "Quel est le projet philosophique fondamental d’Edmund Husserl avec la phénoménologie ?",
    answers: [
      "Douter radicalement de tout pour fonder la connaissance sur une base absolument certaine, à la manière de Descartes.",
      "Interpréter le monde pour le transformer concrètement, selon la maxime célèbre de Marx.",
      "Établir la philosophie comme une « science rigoureuse » des phénomènes, en accédant aux choses mêmes telles qu’elles se donnent à la conscience."
    ],
    correct: 3,
    explanation: `Husserl veut rompre à la fois avec le psychologisme et le positivisme. Sa méthode, la « réduction phénoménologique », consiste à mettre entre parenthèses nos croyances sur l’existence du monde pour décrire purement les structures de l’expérience vécue. Le but est de fonder un savoir absolu sur la conscience pure et son intentionnalité.
    \nExemple : Pour décrire phénoménologiquement la perception d’un arbre, je m’intéresse à la manière dont il m’apparaît, avec ses côtés visibles et invisibles, et non à l’arbre en tant qu’objet botanique.`
  },
  // Question n°28
  {
    question: "Que reproche Husserl, dans <em>La Crise des sciences européennes</em>, à la science moderne ?",
    answers: [
      "Son manque de précision technique et sa lenteur à produire des applications utiles.",
      "De s’être détournée des « questions décisives » pour une humanité authentique, celles du sens de l’existence.",
      "De ne pas être assez lucrative et de dépendre excessivement des financements publics."
    ],
    correct: 2,
    explanation: `Husserl critique le réductionnisme des sciences positives qui, en se focalisant exclusivement sur les « faits » mesurables, ont oublié le « monde-de-la-vie » pré-scientifique, le cadre de sens dans lequel la science elle-même émerge. Ces sciences fabriquent une « humanité de fait », désenchantée et coupée des interrogations fondamentales.
    \nExemple : Une approche purement médicale de la mort peut décrire ses causes biologiques, mais elle est muette sur la question du sens de la mort pour celui qui la vit.`
  },
  // Question n°29
  {
    question: "Comment Heidegger, dans <em>Être et Temps</em>, décrit-il l’existence inauthentique de l’être-là (Dasein) ?",
    answers: [
      "Comme une vie dominée par les passions irrationnelles et les désirs désordonnés.",
      "Comme une vie de péché et d’éloignement métaphysique de Dieu et de la grâce.",
      "Comme une vie sous l’emprise du « on », où l’individu se dissout dans la banalité du quotidien et se dérobe à sa propre possibilité d’être."
    ],
    correct: 3,
    explanation: `Le « on » est la dictature anonyme de l’opinion moyenne. Dans ce mode d’être, l’individu pense, juge et agit « comme on pense, on juge, on agit ». Cette existence inauthentique permet de fuir l’angoisse qui naît de la confrontation à la liberté, à la finitude et à la responsabilité de son propre être.
    \nExemple : Les modes vestimentaires ou le choix d’une carrière « parce que c’est ce qui se fait » sont des manifestations de la domination du « on » sur l’existence.`
  },
  // Question n°30
  {
    question: "Quelle est la thèse centrale du <em>Tractatus logico-philosophicus</em> de Wittgenstein concernant la tâche de la philosophie ?",
    answers: [
      "La philosophie doit produire des systèmes métaphysiques expliquant la totalité du réel.",
      "La philosophie est la reine des sciences, fondant et validant toutes les autres.",
      "La philosophie n’est pas une doctrine mais une activité de clarification logique des pensées et du langage."
    ],
    correct: 3,
    explanation: `Pour le premier Wittgenstein, les problèmes philosophiques naissent de la mécompréhension de la logique de notre langage. La tâche de la philosophie est donc thérapeutique : analyser les propositions pour distinguer celles qui ont un sens (les propositions des sciences) de celles qui n’en ont pas. En clarifiant le langage, on dissout les pseudo-problèmes.
    \nExemple : La question « Quelle est la substance ultime du monde ? » est, pour Wittgenstein, un non-sens car le mot « substance » est utilisé en dehors de tout contexte logique qui lui donnerait un sens vérifiable.`
  },
  // Question n°31
  {
    question: "Quelle célèbre proposition du <em>Tractatus</em> résume sa position sur les limites du langage sensé ?",
    answers: [
      "« Dieu est mort », annonçant la fin des valeurs transcendantes.",
      "« Je pense, donc je suis », fondement de toute certitude.",
      "« Ce dont on ne peut parler, il faut le taire. », délimitant le dicible du montrable."
    ],
    correct: 3,
    explanation: `Cette dernière proposition signifie que tout ce qui peut être dit de manière sensé se limite aux propositions factuelles des sciences naturelles. Le reste – l’éthique, l’esthétique, le sens de la vie – ne peut pas être exprimé en propositions, mais seulement « montré » ou vécu. Parler de ces choses revient à produire des non-sens.
    \nExemple : Dire « La bonté est une valeur absolue » n’est, pour le Wittgenstein du <em>Tractatus</em>, ni vrai ni faux, mais dénué de sens propositionnel ; cela exprime une attitude.`
  },
  // Question n°32
  {
    question: "Quel est le projet du « Cercle de Vienne » et de Rudolf Carnap ?",
    answers: [
      "Développer une nouvelle métaphysique fondée sur les découvertes scientifiques récentes.",
      "Rétablir et moderniser la philosophie idéaliste allemande du 19e siècle.",
      "Promouvoir un « empirisme logique » excluant absolument les spéculations métaphysiques du discours rationnel."
    ],
    correct: 3,
    explanation: `Le Cercle de Vienne pousse à l’extrême la critique wittgensteinienne du langage. Son manifeste est un « empirisme logique » : seules les tautologies logiques et les énoncés empiriques vérifiables sont acceptables. Tout le reste, en particulier la métaphysique, est rejeté comme dénué de sens cognitif, simple expression d’émotions.
    \nExemple : Pour Carnap, une question comme « Pourquoi y a-t-il quelque chose plutôt que rien ? » est vide de sens car elle ne peut être tranchée par aucun protocole d’observation.`
  },
  // Question n°33
  {
    question: "Quel type d’énoncé Rudolf Carnap qualifie-t-il de « tautologie » ?",
    answers: [
      "Un énoncé poétique particulièrement beau et évocateur d’émotions fortes.",
      "Un énoncé logique ou mathématique, vrai en vertu de sa forme seule, correspondant au jugement analytique de Kant.",
      "Un énoncé empirique vérifié de manière répétée et certaine par l’expérience sensorielle."
    ],
    correct: 2,
    explanation: `Les tautologies sont les propositions de la logique et des mathématiques pures. Elles ne disent rien sur le monde, mais sont vraies de manière nécessaire en vertu des règles de formation que nous avons conventionnellement établies. Elles sont analytiques. Leur vérité est formelle et a priori.
    \nExemple : « Tous les célibataires sont des hommes non mariés » est une tautologie, car la définition de « célibataire » contient déjà « homme non marié ».`
  },
  // Question n°34
  {
    question: "Pourquoi Carnap considère-t-il que les mots métaphysiques comme « Dieu » ou « l’Être » sont dénués de sens ?",
    answers: [
      "Parce qu’ils sont trop anciens et chargés d’une histoire religieuse suspecte.",
      "Parce qu’ils sont intrinsèquement trop difficiles à comprendre pour l’esprit humain moyen.",
      "Parce qu’on ne peut pas produire les conditions d’observation empirique qui permettraient de vérifier ou d’infirmer les propositions où ils figurent."
    ],
    correct: 3,
    explanation: `Selon le critère de vérifiabilité, un terme n’a de sens que si l’on peut indiquer la procédure empirique pour vérifier les propositions où il figure. Or, on ne peut pas dire quelles observations confirmeraient que « x est Dieu ». Ces termes n’ont donc pas de signification cognitive ; ils ne sont que des bruits exprimant des sentiments.
    \nExemple : L’affirmation « L’absolu est parfait » ne peut être reliée à aucune expérience possible ; elle est donc, pour Carnap, une pseudo-proposition.`
  },
  // Question n°35
  {
    question: "Quel philosophe et quel texte Carnap critique-t-il explicitement comme exemple paradigmatique du non-sens métaphysique ?",
    answers: [
      "Sartre et son ouvrage <em>L’Être et le Néant</em> sur la conscience.",
      "Heidegger et sa conférence <em>Qu’est-ce que la métaphysique ?</em>, en particulier la phrase « Le rien lui-même néantit ».",
      "Hegel et son œuvre <em>La Phénoménologie de l’Esprit</em> sur la dialectique."
    ],
    correct: 2,
    explanation: `Carnap prend Heidegger comme cible de la métaphysique verbale et creuse. Il cite des passages sur le « rien » pour montrer comment des mots sensés sont assemblés en violation de la syntaxe logique pour produire des pseudo-énoncés qui ont l’apparence de la profondeur mais sont vides. Cette attaque fonde une opposition durable entre philosophie « analytique » et « continentale ».
    \nExemple : Carnap analyse « Le rien néantit » comme une construction illogique similaire à « César est un nombre premier », où des catégories différentes sont mêlées de façon absurde.`
  },
  // Question n°36
  {
    question: "Quelle est la « différence ontologique » selon Martin Heidegger ?",
    answers: [
      "La différence fondamentale entre l’apparence illusoire et la réalité vraie des choses.",
      "La différence morale et métaphysique entre le bien suprême et le mal absolu.",
      "La différence, oubliée par la métaphysique, entre l’étant (ce qui est) et l’être (le fait d’être, le il y a)."
    ],
    correct: 3,
    explanation: `Heidegger accuse toute la métaphysique occidentale d’avoir « oublié l’être » pour ne s’être intéressée qu’aux étants, c’est-à-dire aux choses présentes. L’être n’est pas un étant suprême, mais le processus ou l’événement qui permet aux étants d’apparaître. La tâche de la pensée est de se réapproprier cette question de l’être.
    \nExemple : Dans la phrase « Au bois, il y a un oiseau », « l’oiseau » est un étant. « Il y a » est l’expression même de l’être, de la donation qui rend possible l’apparition.`
  },
  // Question n°37
  {
    question: "Pourquoi Heidegger considère-t-il que la poésie est essentielle pour penser l’être ?",
    answers: [
      "Parce qu’elle est plus belle et plus accessible à tous que la prose philosophique aride.",
      "Parce que le langage est la « demeure de l’être » et que la parole poétique laisse advenir l’être d’une manière que la rationalité technique a oblitérée.",
      "Parce qu’elle permet de s’évader du monde réel et de ses contraintes matérielles."
    ],
    correct: 2,
    explanation: `Face à la domination du langage calculant de la science et de la technique, la poésie représente pour Heidegger un autre usage du langage, un « dire » qui ne vise pas à expliquer ou à dominer, mais à dévoiler, à laisser être. Le poète écoute et recueille la parole de l’être.
    \nExemple : Heidegger consacre de nombreuses études au poète Hölderlin, voyant en lui celui qui nomme le sacré et interroge la demeure de l’homme sur terre.`
  },
  // Question n°38
  {
    question: "Quelle expérience concrète Alain Finkielkraut évoque-t-il pour illustrer la notion d’« il y a » (être impersonnel) ?",
    answers: [
      "L’expérience du sublime esthétique face à la puissance d’une montagne.",
      "L’expérience de l’amour passionnel qui absorbe totalement l’individu.",
      "L’expérience de la peur dans le noir de l’enfant, qui appréhende non un objet mais l’existence anonyme et continue."
    ],
    correct: 3,
    explanation: `Finkielkraut, commentant Levinas, décrit la frayeur enfantine comme la révélation non d’un étant terrifiant, mais de l’être en tant que tel, dans son impersonnalité écrasante. Dans la chambre vide et noire, « il n’y a rien, sinon l’être en général ». Cette expérience montre comment la question de l’être peut être une expérience vécue.
    \nExemple : Le sentiment d’angoisse sans objet déterminé est l’horreur de l’existence pure, de se sentir « absorbé par cette existence sans contours ».`
  },
  // Question n°39
  {
    question: "En quoi la peinture d’Édouard Manet, avec <em>Le Déjeuner sur l’herbe</em> (1863), rompt-elle avec la peinture académique ?",
    answers: [
      "Par son utilisation exclusive et novatrice du noir et blanc et des contrastes.",
      "Par son sujet religieux traité de manière irrévérencieuse et critique.",
      "Par son absence de signification narrative évidente et son traitement de la peinture comme arrangement de couleurs et de formes."
    ],
    correct: 3,
    explanation: `Manet rompt avec la doctrine académique qui veut que la peinture raconte une histoire édifiant. Son tableau est énigmatique. Comme l’écrit Zola, le sujet n’est qu’un « prétexte à peindre ». L’attention se porte sur les « masses franches » et les « oppositions vives ». La peinture devient silencieuse, elle montre plus qu’elle ne raconte.
    \nExemple : Contrairement à un tableau d’histoire, où on admire le geste héroïque, chez Manet on admire d’abord la façon dont la robe blanche fait tache sur l’herbe.`
  },
  // Question n°40
  {
    question: "Quelle affirmation d’Émile Zola résume le mieux la rupture opérée par Manet selon l’analyse présentée ?",
    answers: [
      "« Seul le réalisme brut et sans concession est vrai et digne d’être peint. »",
      "« La peinture doit avant tout éduquer le peuple et porter un message social. »",
      "« Le sujet pour eux [les peintres comme Manet] est un prétexte à peindre. »"
    ],
    correct: 3,
    explanation: `Zola, défenseur de Manet, identifie le cœur de la révolution moderne : la primauté de la peinture sur le sujet. Ce qui importe, ce n’est pas l’histoire racontée, mais la manière dont elle est peinte. Cela libère la peinture de sa fonction illustrative et ouvre la voie à l’autonomie de l’art moderne.
    \nExemple : Dans un tableau classique d’histoire, on admire le geste héroïque ; chez Manet, on admire d’abord la façon dont la lumière est traitée et la composition est construite.`
  },
  // Question n°41
  {
    question: "Que signifie l’idée de « faire monde » dans un contexte où « la croyance individuelle prévaut sur la connaissance universelle » ?",
    answers: [
      "Il faut renoncer à tout projet commun et accepter un relativisme absolu des valeurs.",
      "Il faut imposer par la force une vérité universelle unique pour rétablir l’ordre.",
      "Il faut inventer des formes de délibération qui articulent les singularités pour construire un espace commun malgré la pluralité."
    ],
    correct: 3,
    explanation: `C’est le défi politique majeur des sociétés contemporaines pluralistes. Si chacun est ancré dans ses certitudes et que l’on ne peut plus s’appuyer sur une raison universelle indiscutée, comment créer du commun ? La réponse ne peut être ni l’imposition autoritaire, ni le renoncement. Il s’agit de trouver des procédures et une culture du débat qui permettent le « vivre-ensemble » dans le désaccord.
    \nExemple : Les démocraties modernes tentent de répondre à ce défi par l’État de droit, la laïcité et l’organisation de débats publics, sans garantir un consensus sur les valeurs ultimes.`
  },
  // Question n°42
  {
    question: "Pourquoi la crise écologique actuelle constitue-t-elle une rupture « sans précédent historique » ?",
    answers: [
      "Parce qu’elle est la première guerre mondiale pour le contrôle des ressources naturelles.",
      "Parce qu’elle met en péril, à l’échelle globale, les conditions naturelles d’existence de l’humanité par l’action de l’humanité elle-même.",
      "Parce qu’elle représente la première crise économique véritablement mondiale et synchronisée."
    ],
    correct: 2,
    explanation: `Les crises passées étaient localisées ou avaient des causes externes. La crise écologique actuelle est systémique, globale, et causée par le modèle de développement industriel de l’humanité. Elle ne menace pas tel ou tel groupe, mais les équilibres biosphériques qui rendent la vie humaine possible. Cela constitue une rupture qualitative.
    \nExemple : Le changement climatique anthropique représente une menace existentielle pour de nombreuses civilisations côtières, à une échelle jamais vue.`
  },
  // Question n°43
  {
    question: "Selon les perspectives ouvertes par la psychanalyse, quelle conséquence a la découverte de l’inconscient sur le projet de « faire monde » ?",
    answers: [
      "Elle le facilite grandement, car elle fournit enfin une science exacte de l’âme humaine.",
      "Elle n’a strictement aucune conséquence, car la politique et la psyché sont des domaines entièrement séparés.",
      "Elle le complique, car l’homme n’étant pas premièrement un être de raison, la construction d’un monde commun sur des bases purement rationnelles devient problématique."
    ],
    correct: 3,
    explanation: `Si une partie déterminante de la vie psychique échappe à la conscience, alors les individus ne sont pas les sujets transparents et rationnels que supposent certains modèles politiques. Les passions et les identifications collectives inconscientes deviennent des forces politiques majeures. « Faire monde » doit donc prendre en compte cette dimension obscure.
    \nExemple : L’analyse des mécanismes de foule ou de la propagande bénéficie des apports de la psychanalyse pour comprendre les adhésions qui ne relèvent pas du calcul rationnel.`
  },
  // Question n°44
  {
    question: "En quoi la critique de la métaphysique par le Cercle de Vienne est-elle aussi une critique de la philosophie traditionnelle dans son ensemble ?",
    answers: [
      "Elle propose de remplacer purement et simplement la philosophie par la théologie révélée.",
      "Elle nie catégoriquement toute valeur et toute pertinence à la philosophie antérieure au 20e siècle.",
      "Elle réduit la philosophie légitime à n’être qu’une « logique de la science », une analyse du langage scientifique."
    ],
    correct: 3,
    explanation: `Pour Carnap et le positivisme logique, la philosophie n’a de légitimité que comme activité auxiliaire de la science. Tout ce qui, dans la tradition, prétendait dire quelque chose sur le monde en dehors du cadre scientifique est disqualifié comme non cognitif. La philosophie se voit ainsi amputée de la plus grande partie de ses ambitions traditionnelles.
    \nExemple : Les grandes questions « Comment vivre ? » ou « Quel est le sens de la vie ? » ne reçoivent plus, dans ce cadre, de réponse philosophique « vraie », mais sont renvoyées à des choix personnels.`
  },
  // Question n°45
  {
    question: "Comment l’art contemporain, en cherchant à désacraliser l’art, peut-il être vu comme une continuité avec l’art antique ?",
    answers: [
      "Parce qu’il utilise les mêmes matériaux nobles, comme le marbre ou le bronze, que l’art antique.",
      "Parce qu’il représente à nouveau les mêmes dieux, héros et mythes de la mythologie gréco-romaine.",
      "Parce que l’art antique était intégré à la vie de la cité, et non un objet sacralisé dans un lieu dédié à la seule contemplation."
    ],
    correct: 3,
    explanation: `Cette idée propose un renversement dialectique. L’art classique avait souvent sacralisé l’œuvre, l’isolant dans le musée. L’art contemporain, par des performances ou l’art urbain, cherche à réintégrer l’art dans l’espace public et le quotidien. En cela, il retrouve une fonction de l’art antique qui était mêlé à l’architecture et à la vie politique.
    \nExemple : Les fresques murales dans l’espace public créent une rencontre imprévue avec l’art, à la manière dont un citoyen athénien croisait des sculptures en allant à l’agora.`
  },
  // Question n°46
  {
    question: "Quelle est la relation entre la phrase de Marx (« Les philosophes n’ont fait qu’interpréter le monde… ») et le projet de la phénoménologie ?",
    answers: [
      "La phénoménologie la rejette catégoriquement car elle est matérialiste et révolutionnaire.",
      "La phénoménologie s’y oppose, voulant seulement décrire le monde et non le transformer.",
      "La phénoménologie partage cette volonté de rompre avec la philosophie purement spéculative, bien que par des moyens descriptifs différents."
    ],
    correct: 3,
    explanation: `Husserl aussi veut rompre avec la philosophie comme simple interprétation ou construction de systèmes. Il veut une philosophie « scientifique » et rigoureuse qui parte des « choses mêmes ». Si son but n’est pas la transformation révolutionnaire, il s’agit bien d’une transformation de notre rapport au monde par la compréhension radicale de ses fondements.
    \nExemple : En décrivant comment nous sommes toujours déjà « au monde », la phénoménologie peut changer notre manière d’envisager notre responsabilité, ouvrant potentiellement la voie à une transformation éthique.`
  },
  // Question n°47
  {
    question: "Pourquoi le « je sais » a-t-il un sens problématique selon l’analyse de Wittgenstein ?",
    answers: [
      "Parce que c’est une expression grammaticalement incorrecte dans la langue française.",
      "Parce qu’on ne peut jamais, en réalité, être certain de quoi que ce soit.",
      "Parce que cette expression n’a de sens clair que dans des jeux de langage singuliers, et qu’il est difficile d’en faire l’expression objective de ce qui nous est commun."
    ],
    correct: 3,
    explanation: `Wittgenstein souligne l’asymétrie entre la première et la troisième personne. Dire « Il sait qu’il a mal » a un sens vérifiable. Mais dire « Je sais que j’ai mal » est étrange, car la certitude de ma propre douleur n’est pas un « savoir » au sens d’une connaissance que je pourrais vérifier. Cela montre la difficulté de fonder un savoir universel sur des expressions ancrées dans l’expérience subjective.
    \nExemple : L’affirmation « Je sais que je suis conscient » est une tautologie vide, car la conscience n’est pas un objet de connaissance pour soi.`
  },
  // Question n°48
  {
    question: "Que signifie « laisser sa raison inquiète » selon la prescription de Gaston Bachelard ?",
    answers: [
      "Ne jamais se fier à la raison et lui préférer systématiquement l’intuition ou la foi.",
      "Être constamment anxieux et pessimiste face aux découvertes scientifiques.",
      "Exercer une vigilance critique permanente, refuser la tranquillité dogmatique de l’opinion arrêtée."
    ],
    correct: 3,
    explanation: `C’est l’attitude contraire de l’esprit de système ou de l’opinion figée. La science, pour Bachelard, n’avance pas par accumulation pacifique, mais par des ruptures. L’esprit scientifique doit donc être en état d’alerte permanent, prêt à remettre en cause ses certitudes face à l’anomalie. Cette « inquiétude » est la dynamique même du progrès.
    \nExemple : Le physicien qui découvre un résultat inexplicable ne doit pas le rejeter, mais laisser cette anomalie « inquiéter » sa raison jusqu’à ce qu’elle oblige à une refonte des concepts.`
  },
  // Question n°49
  {
    question: "Quel est le principal problème soulevé par la thèse libertarienne de Robert Nozick sur l’État minimal ?",
    answers: [
      "Son incompatibilité totale et absolue avec toute forme de démocratie représentative.",
      "Son inefficacité économique avérée pour générer de la croissance et de la richesse.",
      "Le fait que le règne du « chacun pour soi » qu’elle promeut risque d’accroître les inégalités sociales et l’injustice."
    ],
    correct: 3,
    explanation: `La critique classique adressée au libertarianisme est qu’en réduisant l’État, il laisse le champ libre aux dynamiques du marché qui tendent à produire et amplifier les inégalités. Sans redistribution, ces inégalités peuvent vider de son sens l’égalité formelle des droits. La « justice » se réduirait alors à la liberté des transactions.
    \nExemple : Dans une société purement nozickienne, un héritier posséderait légitimement une fortune colossale sans rien produire, tandis qu’un travailleur talentueux né pauvre pourrait peiner à survivre, sans correction possible.`
  },
  // Question n°50
  {
    question: "Comment la notion de « seuil » permet-elle de dépasser l’opposition binaire entre rupture et continuité ?",
    answers: [
      "Elle affirme de manière définitive que tout n’est en réalité que continuité pure.",
      "Elle nie radicalement l’existence même de toute rupture historique significative.",
      "Elle suggère qu’un changement qualitatif peut survenir progressivement, par accumulation, sans moment de rupture claire."
    ],
    correct: 3,
    explanation: `Le concept de seuil permet de penser des transformations qui ne sont pas des événements soudains, mais le résultat d’une lente évolution qui finit par changer la nature d’un système. On est dans la continuité jusqu’à un certain point, puis, un seuil franchi, on entre dans un nouveau régime. Cela évite de chercher une « date » précise de rupture.
    \nExemple : On ne peut pas dater précisément le début de l’Anthropocène. C’est le franchissement d’un seuil critique dans la concentration de CO2, résultant de plusieurs siècles d’industrialisation.`
  },
  // Question n°51
  {
    question: "Quel est le statut des jugements de valeur (éthiques ou esthétiques) dans la perspective du Cercle de Vienne ?",
    answers: [
      "Ce sont des propositions factuelles comme les autres, parfaitement vérifiables par l’expérience.",
      "Ce sont des jugements synthétiques a priori, fondant une connaissance morale objective.",
      "Ce sont des expressions d’émotions ou d’attitudes, dénuées de contenu cognitif et de valeur de vérité."
    ],
    correct: 3,
    explanation: `Pour les positivistes logiques, une proposition comme « Le meurtre est mal » n’exprime pas un fait objectif, mais une désapprobation émotionnelle. Ces énoncés ne sont ni vrais ni faux ; ils relèvent de la sphère non-cognitive de la vie. La philosophie ne peut donc pas fonder rationnellement des valeurs.
    \nExemple : Le désaccord entre « L’avortement est immoral » et « L’avortement est un droit » n’est pas un désaccord sur des faits, mais un conflit d’attitudes, selon cette vue.`
  },
  // Question n°52
  {
    question: "En quoi l’art de Patricia Piccinini, qui cherche « délibérément la laideur », s’inscrit-il dans une critique de l’esthétique ?",
    answers: [
      "Il veut simplement choquer le public bourgeois pour attirer l’attention médiatique.",
      "Il prouve que l’esthétique traditionnelle a tort, car ses œuvres sont en fait secrètement très belles.",
      "Il refuse la catégorie du beau comme critère essentiel, lui préférant l’exploration d’idées qui peuvent provoquer le dégoût ou l’inquiétude."
    ],
    correct: 3,
    explanation: `En créant des créatures hyperréalistes, hybrides et inquiétantes, Piccinini questionne les frontières bien plus qu’elle ne cherche à produire un plaisir esthétique harmonieux. Son travail est conceptuel : il interroge notre rapport au vivant à l’ère du génie génétique. La « laideur » devient un moyen de rompre avec l’attente de beauté.
    \nExemple : Ses sculptures d’enfants-porcs interrogent les peurs liées aux manipulations biologiques, déplaçant la question de « Est-ce beau ? » à « Qu’est-ce que cela dit de nos peurs ? ».`
  },
  // Question n°53
  {
    question: "Quel rôle joue l’angoisse (Angst) dans la philosophie de Martin Heidegger ?",
    answers: [
      "C’est un sentiment négatif à éviter à tout prix pour mener une vie heureuse et épanouie.",
      "C’est une maladie psychologique moderne qu’il convient de soigner par la thérapie.",
      "C’est le sentiment qui révèle à l’être-là sa liberté et sa finitude, l’ouvrant à la possibilité d’une existence authentique."
    ],
    correct: 3,
    explanation: `Contrairement à la peur qui a un objet, l’angoisse est sans objet précis. Pour Heidegger, cette absence révèle que ce qui angoisse, c’est l’être-au-monde lui-même, et plus précisément la possibilité la plus propre du Dasein : sa mort. L’angoisse arrache l’individu à la banalité du « on ».
    \nExemple : La crise existentielle, où tout semble perdre son sens habituel, peut être interprétée comme une expérience d’angoisse qui, si elle est assumée, peut conduire à une reconfiguration authentique de son existence.`
  },
  // Question n°54
  {
    question: "Pourquoi associer le retour de la crinoline dans la mode (2025) à une recherche de continuité ?",
    answers: [
      "Parce que c’est une preuve indéniable que la mode, en réalité, ne change jamais fondamentalement.",
      "Parce que la crinoline est un vêtement purement fonctionnel, sans signification culturelle particulière.",
      "Parce que les créateurs puisent dans un passé idéalisé pour imaginer l’avenir, cherchant un ancrage face aux incertitudes du présent."
    ],
    correct: 3,
    explanation: `La mode est un lieu d’observation des rapports au temps. Le retour d’une silhouette aussi marquée historiquement que la crinoline n’est pas un simple pastiche, mais souvent une réinterprétation qui dialogue avec le présent. Cela peut exprimer une nostalgie ou une critique du présent par le passé. C’est une forme d’« hantologie » vestimentaire.
    \nExemple : Dans un contexte de crise, les styles rétro connaissent souvent un regain, offrant un sentiment de familiarité et de permanence face à un futur anxiogène.`
  },
  // Question n°55
  {
    question: "Que signifie l’idée de <em>Geworfenheit</em> (déréliction) chez Heidegger ?",
    answers: [
      "Le fait d’être choisi par Dieu pour une mission ou une grâce particulière.",
      "Le fait de pouvoir tout choisir et déterminer librement dès le moment de sa naissance.",
      "Le fait que l’être-là est « jeté » dans le monde, dans une situation historique et sociale qu’il n’a pas choisie."
    ],
    correct: 3,
    explanation: `La déréliction est le fait concret de notre existence : nous nous trouvons toujours déjà dans un monde, un corps, une époque, avec des possibilités qui ne dépendent pas entièrement de nous. L’authenticité ne consiste pas à nier cette facticité, mais à l’assumer comme le point de départ à partir duquel nous pouvons nous projeter librement.
    \nExemple : Je ne choisis pas ma langue maternelle ou ma classe sociale de naissance. Ces éléments conditionnent mes possibilités, mais ne déterminent pas entièrement ce que je peux en faire. L’authenticité est de prendre en charge cette situation.`
  },
  // Question n°56
  {
    question: "Quelle est la différence entre un jugement analytique et un jugement synthétique selon Kant, reprise par Carnap ?",
    answers: [
      "L’analytique est subjectif et relatif, le synthétique est objectif et universel.",
      "L’analytique est basé uniquement sur l’expérience sensible, le synthétique sur la raison pure.",
      "Dans un jugement analytique, le prédicat est contenu dans le sujet ; dans un jugement synthétique, le prédicat ajoute une information au sujet."
    ],
    correct: 3,
    explanation: `Cette distinction est fondamentale pour la philosophie des sciences. Les jugements analytiques sont vrais a priori, par définition, et n’étendent pas notre connaissance. Les jugements synthétiques étendent notre connaissance, mais ils peuvent être a posteriori ou, selon Kant, a priori. Carnap reprend cette distinction pour sa théorie du langage.
    \nExemple : « Un triangle a trois angles » est analytique. « La somme des angles d’un triangle est égale à 180° » est synthétique a priori pour Kant. « Ce triangle est rouge » est synthétique a posteriori.`
  },
  // Question n°57
  {
    question: "Quelle est l’importance du concept d’« intentionnalité » dans la phénoménologie de Husserl ?",
    answers: [
      "Elle désigne l’intention morale ou le but conscient qui guide nos actions vertueuses.",
      "Elle explique que nous avons toujours, par nature, l’intention de bien faire et de faire le bien.",
      "Elle signifie que toute conscience est toujours conscience « de » quelque chose, qu’elle vise un objet transcendant."
    ],
    correct: 3,
    explanation: `L’intentionnalité est la propriété fondamentale de la conscience selon Husserl. Elle rompt avec l’idée d’une conscience close sur elle-même. La conscience n’est pas un contenant, mais un flux qui se dirige vers des objets. Cela permet de dépasser l’opposition sujet/objet. Le monde est corrélat de la conscience intentionnelle.
    \nExemple : Quand je perçois une maison, ma conscience est dirigée vers la maison elle-même, telle qu’elle m’apparaît sous différents aspects, dans un acte perceptif unifié.`
  },
  // Question n°58
  {
    question: "Pourquoi dire que la performance de Marina Abramović et Ulay <em>Relation in Time</em> (assis dos à dos) est une œuvre d’art ?",
    answers: [
      "Parce qu’ils sont des artistes célèbres et que tout ce qu’ils font est donc automatiquement de l’art.",
      "Parce que c’est esthétiquement beau et harmonieux à regarder pendant de longues heures.",
      "Parce que l’action elle-même, l’épreuve de la durée et de la présence mutuelle dans l’immobilité, devient l’œuvre."
    ],
    correct: 3,
    explanation: `Cette performance n’a pas d’objet à vendre. Sa valeur artistique réside dans le défi physique et mental qu’elle représente, et dans la situation qu’elle crée. Elle explore des thèmes comme la dépendance, la patience, la présence à l’autre. C’est une forme d’art qui privilégie l’expérience vécue et le concept sur la production d’un objet.
    \nExemple : L’œuvre invite à réfléchir sur la nature des relations humaines en dehors de l’action et du langage. La simple coprésence physique dans la durée devient le matériau de l’œuvre.`
  },
  // Question n°59
  {
    question: "Quel est l’enjeu de la performance de Chris Burden <em>Shoot</em> (1971) où il se fait tirer dessus au bras ?",
    answers: [
      "Tester les limites physiologiques de la résistance humaine à la douleur aiguë.",
      "Banaliser le spectacle de l’horreur et rendre la violence encore plus réelle en mettant son corps en danger extrême.",
      "Faire un simple coup de publicité choquant pour accéder à la célébrité artistique."
    ],
    correct: 2,
    explanation: `Burden pousse à l’extrême la logique de la performance en faisant de son corps le lieu d’une violence réelle, non simulée. En se faisant blesser volontairement, il interroge la frontière entre l’art et la vie, entre le spectacle et l’événement traumatique. L’art devient ici un acte de confrontation brutale avec le réel.
    \nExemple : En transformant une agression en « performance », Burden force le spectateur à une position inconfortable : est-il témoin d’un acte artistique ou d’un crime ?`
  },
  // Question n°60
  {
    question: "Comment le concept de « jeu de langage » pourrait-il répondre aux difficultés de « faire monde » ?",
    answers: [
      "En prouvant de manière définitive que toute communication entre les hommes est en réalité impossible.",
      "En imposant un seul jeu de langage rigoureux et universel à toute la société pour uniformiser la pensée.",
      "En montrant que la signification émerge de l’usage dans des « formes de vie » partagées, invitant à participer à des jeux communs ou à en inventer de nouveaux."
    ],
    correct: 3,
    explanation: `Dans <em>Investigations philosophiques</em>, Wittgenstein observe la diversité des usages du langage dans la vie sociale. Chaque usage constitue un « jeu de langage » avec ses règles. « Faire monde » pourrait alors consister à maîtriser suffisamment les jeux de langage de la délibération politique pour pouvoir coexister malgré des différences profondes.
    \nExemple : Dans un débat démocratique, un scientifique, un religieux et un artiste participent à des jeux de langage différents. L’enjeu est de créer un méta-jeu (le débat public) avec des règles qui permettent une articulation entre ces langages.`
  },
  // Question n°61
  {
    question: "En quoi la figure de Marcel Duchamp est-elle une « charnière » selon l’analyse de Joseph Kosuth ?",
    answers: [
      "Elle marque la fin définitive et absolue de toute forme de peinture et de sculpture.",
      "Elle symbolise un retour nostalgique à l’artisanat et aux techniques traditionnelles oubliées.",
      "Elle représente le passage de l’art comme apparence à l’art comme idée, ouvrant la voie à l’art conceptuel."
    ],
    correct: 3,
    explanation: `Pour Kosuth, avec Duchamp et son ready-made, l’art cesse d’être principalement une question de savoir-faire ou de beauté pour devenir une question de définition et de contexte. L’œuvre réside dans le geste de choix et de présentation. Après Duchamp, toute œuvre d’art est fondamentalement conceptuelle.
    \nExemple : En exposant un urinoir manufacturé dans une galerie, Duchamp créait une proposition : « Cet objet peut être considéré comme une œuvre d’art ». L’œuvre, c’est cette proposition elle-même.`
  },
  // Question n°62
  {
    question: "Quelle est la signification de l’œuvre <em>La Nona Ora</em> de Maurizio Cattelan (le pape écrasé par une météorite) ?",
    answers: [
      "Une célébration artistique de la foi inébranlable du pape face aux épreuves cosmiques.",
      "Une critique anticléricale violente et sans nuance visant à détruire l’image de l’Église.",
      "Une image provocante qui met en scène la chute d’une autorité sacrée par un événement absurde, interrogeant la vulnérabilité du pouvoir."
    ],
    correct: 3,
    explanation: `Cattelan représente le souverain pontife, symbole d’une autorité millénaire, terrassé par un objet banal et aléatoire. L’œuvre peut être lue comme une métaphore de la fragilité de toutes les autorités face au hasard, à l’absurdité, ou à la sécularisation. Elle opère une rupture avec le respect dû aux figures sacrées.
    \nExemple : En achetant et exposant une telle œuvre pour une somme faramineuse, le marché de l’art contemporain valide aussi cette provocation, montrant comment la transgression devient une valeur marchande.`
  },
  // Question n°63
  {
    question: "Qu’est-ce que la « réduction eidétique » (de εἶδος, l’idée) chez Husserl ?",
    answers: [
      "Réduire la philosophie à la simple psychologie des faits mentaux observables.",
      "Réduire le monde complexe à ses seules données économiques et matérielles mesurables.",
      "Mettre entre parenthèses les éléments contingents de l’expérience pour accéder à l’essence des phénomènes."
    ],
    correct: 3,
    explanation: `C’est une méthode pour passer de la description de faits particuliers à la saisie des essences universelles. Par exemple, à partir de l’expérience de différentes rougesurs, je peux, par une variation imaginative, faire abstraction des nuances pour saisir l’essence « rouge » en général. Cette essence est une structure invariante de l’expérience.
    \nExemple : En observant différentes actions de « promettre », je peux décrire l’essence de l’acte de promesse : l’intention de s’engager, la communication, la création d’une obligation, etc.`
  },
  // Question n°64
  {
    question: "Que signifie l’idée que « l’art est mort » avec l’avènement de l’art contemporain ?",
    answers: [
      "Que les musées et les galeries vont tous fermer leurs portes dans un avenir proche.",
      "Que plus personne ne crée ni ne s’intéresse à quoi que ce soit qui puisse s’appeler art.",
      "Que les notions traditionnelles d’œuvre, d’artiste et de beauté sont mises en crise au point de parler d’une fin de l’art au sens classique."
    ],
    correct: 3,
    explanation: `Cette formule, inspirée de Hegel, ne signifie pas la cessation de toute activité artistique, mais la fin d’un certain paradigme. L’art n’a plus de rôle assigné. Il est devenu autoréflexif, s’interrogeant sans cesse sur sa propre nature. L’« art » devient un terme fourre-tout pour des pratiques hétérogènes.
    \nExemple : Quand un artiste expose un tas de détritus, on ne peut plus juger avec les critères de l’imitation ou de l’harmonie. Il faut le comprendre comme un geste ou un concept, ce qui représente une rupture.`
  },
  // Question n°65
  {
    question: "Comment le mythe est-il utilisé au 20e siècle dans le théâtre, selon les exemples de Cocteau et Giraudoux ?",
    answers: [
      "Comme un simple décor exotique et spectaculaire pour divertir un public moderne.",
      "Comme une fidèle reproduction des textes anciens pour éduquer le public à la culture classique.",
      "Comme un matériau à réinterpréter de manière critique et distanciée, pour parler du présent à travers des histoires connues de tous."
    ],
    correct: 3,
    explanation: `La réécriture des mythes antiques permet un double mouvement : une continuité avec le patrimoine, et une rupture par le traitement moderne. En désacralisant les héros, en les rendant ironiques, les dramaturges font du mythe un miroir critique de leur époque. Le mythe devient le support pour interroger des problèmes contemporains.
    \nExemple : Giraudoux utilise le conflit troyen, que tout le monde sait devoir finir par la guerre, pour démonter les rhétoriques nationalistes qui mènent aux conflits.`
  },
  // Question n°66
  {
    question: "Pourquoi la « banane » scotchée au mur par Maurizio Cattelan est-elle devenue une œuvre d’art célèbre ?",
    answers: [
      "Parce que c’est une sculpture extrêmement difficile à réaliser et d’une beauté naturelle rare.",
      "Parce que les bananes sont par nature des objets esthétiquement beaux et harmonieux.",
      "Parce que le geste conceptuel, le titre, le contexte institutionnel et le marché en font une œuvre, interrogeant la valeur et l’absurde."
    ],
    correct: 3,
    explanation: `Cette œuvre est un ready-made duchampien poussé à l’extrême par son caractère périssable. Son succès repose entièrement sur le dispositif institutionnel de l’art contemporain : l’autorité de l’artiste, la validation de la galerie, la médiatisation, et finalement l’acte d’achat à un prix exorbitant. L’œuvre est le commentaire sur le système artistique lui-même.
    \nExemple : Le fait qu’un entrepreneur ait mangé la banane lors d’une performance a ajouté une couche à l’œuvre, transformant l’acte de destruction en continuation de la performance.`
  },
  // Question n°67
  {
    question: "Quel est le sens de la performance d’Orlan qui se fait poser des implants de silicone sur le visage en direct ?",
    answers: [
      "Devenir plus belle selon les canons esthétiques dominants de la société.",
      "Promouvoir la chirurgie esthétique comme une pratique libératrice et positive.",
      "Mettre en cause les critères de beauté normatifs, en faisant de son corps le support d’un rituel artistique et critique."
    ],
    correct: 3,
    explanation: `Orlan pratique un « art charnel » qui utilise la modification de son propre corps comme matériau. En se faisant opérer sous caméra, elle détourne la chirurgie esthétique, pratique normalement destinée à se conformer, en un acte de déconstruction de ces canons. Elle interroge la pression sociale sur le corps féminin.
    \nExemple : En choisissant des implants sur le front qui évoquent des bosses, elle renvoie à des représentations de la beauté dans l’art, créant une beauté délibérément « monstrueuse ».`
  },
  // Question n°68
  {
    question: "En quoi le travail de l’artiste Saburō Murakami (percer des écrans de papier) implique-t-il le spectateur ?",
    answers: [
      "Il lui distribue des feuilles d’or en récompense de sa présence et de son attention.",
      "Il lui demande de payer un ticket d’entrée particulièrement onéreux pour avoir le privilège de voir l’œuvre.",
      "Il fait du premier visiteur un participant actif à la création, puisqu’il doit traverser les feuilles pour entrer."
    ],
    correct: 3,
    explanation: `Cette œuvre brise la frontière passive entre l’œuvre et le spectateur. L’œuvre n’est pas achevée sans l’action du visiteur. En transperçant le papier, le visiteur vit une expérience physique et devient co-créateur de l’œuvre qui se modifie à chaque passage. Cela rompt avec la sacralisation de l’œuvre intouchable.
    \nExemple : Chaque visiteur laisse une trace unique de son passage, faisant de l’œuvre une accumulation de performances individuelles, une trace de la présence des corps.`
  },
  // Question n°69
  {
    question: "Que signifie l’affirmation de Kant : « Il n’est pas douteux que toutes nos connaissances ne commencent avec l’expérience » ?",
    answers: [
      "Que nous naissons avec toutes les connaissances nécessaires déjà inscrites en nous.",
      "Que seule l’expérience sensorielle compte, la raison étant totalement inutile et trompeuse.",
      "Que l’expérience est le point de départ temporel de toute connaissance, même si la raison y apporte ses structures a priori."
    ],
    correct: 3,
    explanation: `Kant opère une synthèse entre empirisme et rationalisme. Il concède que sans la stimulation des sens, notre faculté de connaître resterait vide. Mais il ajoute que l’expérience brute ne deviendrait jamais une connaissance organisée sans les structures a priori de la sensibilité et de l’entendement. L’expérience fournit le contenu, la raison la forme.
    \nExemple : Voir une boule de billard en frapper une autre est une expérience. En dire « la première boule a causé le mouvement de la seconde » implique d’avoir appliqué la catégorie a priori de causalité.`
  },
  // Question n°70
  {
    question: "Quel est le sens de la performance de Michel Journiac <em>Messe pour un corps</em> où il distribue une hostie faite de son sang ?",
    answers: [
      "Faire une simple démonstration culinaire macabre et spectaculaire.",
      "Profaner l’Eucharistie par une provocation blasphématoire purement gratuite.",
      "Représenter « l’archétype de la création » : l’homme se nourrissant de lui-même, interrogeant les rites et les tabous."
    ],
    correct: 3,
    explanation: `Journiac pousse la logique de l’incarnation chrétienne à son paroxysme littéral et charnel. En transformant le rituel eucharistique en un acte d’autoconsommation, il pose des questions sur l’identité, le sacrifice, et les tabous entourant le corps. Son geste est une performance extrême qui utilise les codes religieux pour créer une réflexion.
    \nExemple : Cette performance peut être vue comme une critique de la société de consommation qui « dévore » les individus, ou comme une méditation sur le cycle de la vie.`
  },
  // Question n°71
  {
    question: "Pourquoi Heidegger reproche-t-il à la métaphysique traditionnelle d’avoir « oublié l’être » ?",
    answers: [
      "Parce qu’elle est trop compliquée et inaccessible au commun des mortels.",
      "Parce qu’elle ne parle pas assez de Dieu et de la transcendance divine.",
      "Parce qu’elle s’est toujours intéressée aux étants en cherchant leur cause, sans s’interroger sur le sens de l’« être » lui-même."
    ],
    correct: 3,
    explanation: `Selon Heidegger, depuis Platon, la philosophie a pris l’étant pour l’être. Elle a cherché l’étant suprême qui explique tous les autres, mais a manqué la question plus fondamentale : qu’est-ce que cela signifie « être » pour un étant ? Retrouver cette question, c’est la tâche d’une pensée qui rompt avec la tradition.
    \nExemple : Quand Aristote définit la substance comme ce qui est en soi, il pense à un étant, et non à l’être comme tel.`
  },
  // Question n°72
  {
    question: "Quel est le sens politique de la pièce de Giraudoux <em>La guerre de Troie n’aura pas lieu</em> au moment de son écriture ?",
    answers: [
      "Servir de propagande pour le réarmement français face à la menace allemande.",
      "Célébrer la montée des nationalismes et l’esprit guerrier en Europe.",
      "Dénoncer, à la veille de la Seconde Guerre mondiale, les mécanismes qui rendent la guerre inévitable, malgré les efforts des pacifistes."
    ],
    correct: 3,
    explanation: `Écrite en 1935, alors que les tensions montent en Europe, la pièce est une tragédie de la paix qui échoue. Elle montre que la guerre n’est pas une fatalité, mais le produit des discours nationalistes, des calculs politiques et de la lâcheté. Le titre est ironique et tragique : le public de 1935 pressent qu’une nouvelle guerre est proche.
    \nExemple : Le personnage d’Hector, le héros pacifiste, échoue à convaincre parce que la logique de la vengeance et la rhétorique guerrière sont plus fortes.`
  },
  // Question n°73
  {
    question: "Quelle est la différence entre l’« être jeté » et le « projet » chez Heidegger ?",
    answers: [
      "L’être jeté est l’avenir ouvert, le projet est le passé subi et déterminant.",
      "L’être jeté est le passé subi, le projet est l’avenir choisi ; l’authenticité consiste à assumer le premier pour se projeter vers le second.",
      "Ce sont deux termes parfaitement synonymes dans la philosophie heideggérienne."
    ],
    correct: 2,
    explanation: `L’existence humaine est cette tension. D’un côté, nous sommes « jetés » dans une facticité non choisie. De l’autre, nous nous « projetons » vers des possibilités. L’inauthenticité consiste à se réduire à son être-jeté. L’authenticité consiste à prendre en charge cette facticité comme le sol à partir duquel on choisit son projet.
    \nExemple : Une personne née dans un milieu modeste peut assumer cette origine et en faire la motivation d’un projet qui donne sens à sa situation, plutôt que de la subir.`
  },
  // Question n°74
  {
    question: "En quoi la performance de Gina Pane <em>je</em> (1972) explore-t-elle la relation entre l’individu et l’autre ?",
    answers: [
      "En dansant de manière extatique avec les membres du public présents.",
      "En criant très fort le mot « je » pour affirmer son individualité face à la foule.",
      "En se plaçant sur le bord d’une fenêtre, entre espace privé (« je ») et espace public (« l’autre »), elle interroge les frontières entre intime et public."
    ],
    correct: 3,
    explanation: `Pane utilise son corps comme outil d’analyse sociale. Ici, son corps fait office de seuil entre deux espaces. D’un côté, le public qui la regarde. De l’autre, une famille dont elle observe la vie intime. Cette mise en abyme questionne : qui regarde qui ? Qu’est-ce que la vie privée ? Le « je » est-il un observateur ou un voyeur ?
    \nExemple : Cette performance préfigure les questions soulevées par les émissions de téléréalité, où la frontière entre vie privée et spectacle public est brouillée.`
  },
  // Question n°75
  {
    question: "Que signifie l’idée que l’art contemporain a tué « l’artiste » au sens romantique du génie ?",
    answers: [
      "Que les artistes sont tous morts physiquement et qu’il n’y a plus de création.",
      "Que la figure de l’artiste inspiré maîtrisant tout le processus est remise en cause par le travail en atelier, l’art conceptuel et l’utilisation de robots.",
      "Que les artistes ont perdu tout talent et tout savoir-faire technique dans le monde moderne."
    ],
    correct: 2,
    explanation: `Le mythe romantique de l’artiste-génie est érodé par les pratiques contemporaines. L’artiste peut être un « faiseur de propositions », un performeur, un directeur d’atelier, ou un programmeur. L’œuvre peut être collective ou générée par une machine. L’« auteur » devient une fonction plus qu’une personne singulière.
    \nExemple : Les œuvres générées par intelligence artificielle posent la question : qui est l’artiste ? Celui qui a écrit la requête, les programmeurs, l’IA elle-même, ou l’ensemble du système ?`
  },
  // Question n°76
  {
    question: "Pourquoi la phénoménologie de Husserl est-elle dite « transcendantale » ?",
    answers: [
      "Parce qu’elle est très difficile à comprendre et dépasse les capacités du sens commun.",
      "Parce qu’elle dépasse et rejette entièrement toute approche scientifique du monde.",
      "Parce qu’elle opère une réduction qui se tourne vers les structures pures de la conscience constituante, condition de possibilité de toute expérience."
    ],
    correct: 3,
    explanation: `L’adjectif « transcendantal » renvoie à l’étude des conditions de possibilité a priori de l’expérience. Husserl va plus loin en faisant de la conscience pure le fondement absolu à partir duquel le monde se constitue. Après la réduction, je ne suis plus un homme dans le monde, mais la conscience pure pour laquelle un monde apparaît.
    \nExemple : En pratiquant la réduction, je suspens mon adhésion à l’existence de la table pour analyser comment la « tabléité » se constitue dans mon flux de perceptions.`
  },
  // Question n°77
  {
    question: "Quel est le rôle de la technique dans la modification du statut de l’œuvre d’art selon Walter Benjamin ?",
    answers: [
      "Elle le rend plus sacré, plus unique et plus précieux que jamais auparavant.",
      "Elle n’a strictement aucun rôle, l’art étant par essence hors de toute technique.",
      "Elle détruit son « aura », en la rendant reproductible à l’infini et accessible au plus grand nombre."
    ],
    correct: 3,
    explanation: `Benjamin analyse que la reproduction technique prive l’œuvre d’art de son « aura », cette distance respectueuse qui entourait l’original unique. Désormais, on peut avoir une copie de la <em>Joconde</em> sur un poster. Cela a deux conséquences : démocratisation de l’art, mais aussi perte de sa valeur cultuelle.
    \nExemple : Écouter un enregistrement de Beethoven chez soi n’a pas la même « aura » que d’assister à sa création en 1824. L’expérience est désacralisée, mais potentiellement plus critique.`
  },
  // Question n°78
  {
    question: "Quel est le sens de la performance de Chris Burden <em>Trans-Fixed</em> où il se fait crucifier sur une Coccinelle ?",
    answers: [
      "Démontrer la supériorité technique et la robustesse des voitures allemandes.",
      "Exprimer publiquement et artistiquement sa foi chrétienne personnelle et profonde.",
      "Démystifier l’acte de sacrifice en le transposant dans un contexte moderne absurde, interrogeant le sacré et la société de consommation."
    ],
    correct: 3,
    explanation: `Burden réactive l’iconographie christique de la crucifixion, mais la greffe sur un objet du quotidien. La performance est brève, violente et dérisoire. Elle peut être lue comme une critique de la société qui transforme tout, même le sacrifice, en spectacle, ou comme une métaphore de l’individu crucifié sur l’autel de la technologie.
    \nExemple : En faisant rugir le moteur de la voiture pendant qu’il est crucifié, Burden associe le bruit industriel à l’agonie, créant une image puissante de la souffrance dans le monde moderne.`
  },
  // Question n°79
  {
    question: "Comment la phrase de Hegel « l’art est pour nous quelque chose du passé » doit-elle être comprise ?",
    answers: [
      "L’art a totalement disparu et n’existe plus dans le monde contemporain.",
      "L’art a atteint sa perfection absolue dans le passé et on ne peut plus rien créer de nouveau.",
      "La « destination suprême » de l’art appartient au passé ; dans l’époque moderne, l’art doit évoluer ou être dépassé par la philosophie."
    ],
    correct: 3,
    explanation: `Pour Hegel, l’Esprit évolue. À l’époque grecque, la forme sensible de la sculpture était adéquate pour exprimer l’idéal. À l’époque moderne, l’Esprit est devenu trop réflexif pour se satisfaire pleinement d’une manifestation sensible. L’art continue d’exister, mais sa fonction n’est plus centrale.
    \nExemple : Pour Hegel, la philosophie de son temps permettait de comprendre conceptuellement ce que l’art grec ne faisait que montrer de manière intuitive.`
  },
  // Question n°80
  {
    question: "Quelle est la signification de l’épigraphe de l’article 6 de la DDHC reprise par Rawls ?",
    answers: [
      "Elle institue le principe de l’hérédité légitime des charges et des positions sociales.",
      "Elle fonde le despotisme éclairé sur la supériorité naturelle d’une élite intellectuelle.",
      "Elle établit le principe méritocratique : l’accès aux emplois publics doit se faire selon la capacité et les talents."
    ],
    correct: 3,
    explanation: `Cet article incarne l’idéal des Lumières de rompre avec les privilèges de la naissance pour fonder la société sur le mérite individuel. Rawls fait de l’« égalité équitable des chances » un de ses principes de justice. Les inégalités ne sont justes que si les positions sont ouvertes à tous dans des conditions de juste égalité.
    \nExemple : Un système éducatif gratuit et de qualité est souvent vu comme un moyen de mettre en œuvre ce principe, en donnant à chaque enfant la chance de développer ses talents.`
  },
  // Question n°81
  {
    question: "Quelle critique peut-on adresser à la thèse de Nozick en citant ensuite la théorie de Rawls ?",
    answers: [
      "Rawls est un anarchiste comme Nozick, donc leurs thèses sont identiques et se renforcent.",
      "Nozick a entièrement raison, et Rawls a complètement tort sur la nature de la justice.",
      "La vision minimaliste de l’État de Nozick risque d’aggraver les injustices sociales, alors que Rawls propose un cadre pour une justice plus distributive."
    ],
    correct: 3,
    explanation: `La juxtaposition des deux penseurs met en lumière un débat central : libéralisme libertarien vs libéralisme égalitaire. Nozick défend une justice procédurale. Rawls défend une justice substantielle qui doit corriger les inégalités non méritées. La position de Nozick, en pratique, pourrait conduire à un monde de fortes inégalités considérées comme « justes ».
    \nExemple : Pour Nozick, un magnat a un droit absolu sur sa fortune légalement gagnée. Pour Rawls, une telle fortune n’est juste que si elle résulte d’un système où les chances étaient vraiment équitables pour tous au départ.`
  },
  // Question n°82
  {
    question: "Que signifie « l’esprit scientifique se forme en se réformant » selon Bachelard ?",
    answers: [
      "Les scientifiques doivent faire des réformes politiques dans la société pour être crédibles.",
      "La science progresse non par accumulation, mais par des ruptures qui obligent à réformer profondément les concepts et les méthodes.",
      "Il faut changer souvent de métier et de discipline pour former son esprit scientifique."
    ],
    correct: 2,
    explanation: `Bachelard insiste sur le caractère discontinu et critique du progrès scientifique. Une découverte importante ne vient pas compléter l’ancien savoir, mais le bouleverse, obligeant à réformer les catégories de pensée. L’esprit scientifique est un esprit qui sait qu’il doit douter de ses évidences.
    \nExemple : Le passage de la physique newtonienne à la physique einsteinienne a été une refonte des concepts d’espace et de temps, obligeant à abandonner des intuitions vieilles de plusieurs siècles.`
  },
  // Question n°83
  {
    question: "Comment l’exemple du « coq de Locke » illustre-t-il un obstacle épistémologique ?",
    answers: [
      "Le coq est un animal stupide qui ne peut rien nous apprendre sur la science.",
      "Le coq croit que le soleil se lève pour lui, faisant une généralisation abusive à partir d’une expérience répétée mais contingente.",
      "Locke aimait beaucoup les animaux et les utilisait souvent dans ses exemples pédagogiques."
    ],
    correct: 2,
    explanation: `Locke utilise cette image pour critiquer l’induction naïve. Le coq, qui voit le soleil se lever chaque matin, finit par croire que c’est une loi de la nature. Mais un jour, le cuisinier lui tord le cou. L’habitude, si constante soit-elle, ne peut fonder une certitude scientifique. La science doit rompre avec l’évidence sensible.
    \nExemple : Pendant des millénaires, l’expérience première montrait que la Terre était plate. La science a dû rompre avec cette évidence pour construire l’héliocentrisme.`
  },
  // Question n°84
  {
    question: "Quelle vision de l’homme Wittgenstein propose-t-il contre le cartésianisme ?",
    answers: [
      "L’homme est un ange déchu, à la fois spirituel et prisonnier de la matière.",
      "L’homme est une machine complexe, entièrement déterminée par des causes matérielles.",
      "L’homme n’est pas d’abord un « je pense » solitaire, mais un être immergé dans des « formes de vie » sociales qui fondent ses certitudes."
    ],
    correct: 3,
    explanation: `Contre le cogito cartésien, Wittgenstein montre que notre rapport au monde est d’abord fait de certitudes pratiques et partagées. Je ne prouve pas que j’ai deux mains, je les utilise. Ces certitudes sont le « substrat » de tous nos jeux de langage. L’homme est donc essentiellement un être social.
    \nExemple : Un enfant apprend à compter, à nommer les couleurs, en participant à des activités sociales. Sa capacité à dire « je » émerge bien après qu’il ait maîtrisé ces pratiques linguistiques.`
  },
  // Question n°85
  {
    question: "Pourquoi peut-on dire que l’art contemporain, en rompant avec l’art classique, renoue avec une fonction de l’art antique ?",
    answers: [
      "Parce qu’il ne représente plus que des dieux et des héros, comme l’art antique.",
      "Parce qu’il cherche à sortir du musée et à réintégrer l’espace public, à la manière de l’art grec présent dans la cité.",
      "Parce qu’il utilise exclusivement le marbre et le bronze, les matériaux nobles de l’antiquité."
    ],
    correct: 2,
    explanation: `C’est l’idée d’un retour dialectique. L’art classique a souvent autonomisé l’œuvre, l’isolant comme objet de contemplation. L’art contemporain, par le street art ou les performances, veut briser cette « aura » muséale et rendre l’art à la vie commune. En cela, il retrouve une dimension de l’art antique intégré aux pratiques sociales.
    \nExemple : Une fresque murale dans un quartier interagit avec l’environnement urbain et est accessible à tous, à la manière dont une frise du Parthénon s’adressait aux citoyens.`
  },
  // Question n°86
  {
    question: "Quel est le sens du titre <em>La Machine infernale</em> de Jean Cocteau ?",
    answers: [
      "Le nom d’un engin de guerre particulièrement destructeur utilisé pendant la Première Guerre mondiale.",
      "Une invention technologique diabolique et futuriste au cœur de l’intrigue de la pièce.",
      "Une métaphore pour désigner le destin des personnages, présenté comme un mécanisme implacable et absurde qui les broie."
    ],
    correct: 3,
    explanation: `Cocteau voit dans le mythe d’Œdipe non une tragédie noble, mais le fonctionnement d’une « machine » froide et efficace. Les dieux ont monté un piège parfait dont tous les rouages s’emboîtent pour aboutir au parricide et à l’inceste. Le ton familier accentue cette impression d’absurdité mécanique.
    \nExemple : La scène des escaliers avec Tirésias et Jocaste, pleine de quiproquos, montre que les grandes tragédies naissent aussi de la banalité, comme dans une machine de Rube Goldberg.`
  },
  // Question n°87
  {
    question: "En quoi le traitement du temps par Husserl diffère-t-il d’une conception linéaire ?",
    answers: [
      "Pour Husserl, le temps n’existe tout simplement pas, c’une pure illusion de la conscience.",
      "Il pense que seul le futur compte, le passé étant totalement aboli et sans importance.",
      "Le présent n’est pas un instant ponctuel, mais une « durée » qui retient le passé immédiat et anticipe l’avenir immédiat."
    ],
    correct: 3,
    explanation: `Husserl analyse la conscience du temps comme un flux où le présent n’est jamais nu. Quand j’écoute une mélodie, la note actuelle est perçue en relation avec la note qui vient de s’éteindre et l’attente de la note à venir. Le « maintenant » est donc toujours chargé de passé et tendu vers l’avenir.
    \nExemple : En ce moment même, votre lecture de cette phrase est accompagnée de la rétention des phrases précédentes et de la protention de la suite du texte que vous anticipez.`
  },
  // Question n°88
  {
    question: "Que signifie l’affirmation « Tout ce qui peut être dit, peut être dit clairement » dans le contexte du <em>Tractatus</em> ?",
    answers: [
      "Tout le monde peut tout comprendre si on lui explique avec des mots simples.",
      "Il faut parler fort et distinctement pour être bien compris de son auditoire.",
      "Si une pensée peut être exprimée de manière sensé, alors elle peut l’être dans un langage logiquement parfait, où la structure de la proposition reflète la structure du fait."
    ],
    correct: 3,
    explanation: `C’est l’idéal d’un langage parfaitement logique, transparent, qui serait l’image du monde. Les limites de mon langage signifieraient les limites de mon monde. Si quelque chose ne peut pas être dit clairement dans ce langage, c’est qu’on ne peut pas en parler de manière sensée du tout.
    \nExemple : La proposition « Il pleut » a un sens clair car on peut imaginer l’état de choses qu’elle décrit. « La vie a un sens » n’a pas, pour le premier Wittgenstein, de conditions de vérité claires.`
  },
  // Question n°89
  {
    question: "Pourquoi l’art conceptuel de Kosuth considère-t-il que « l’art après la philosophie » commence avec Duchamp ?",
    answers: [
      "Parce que Duchamp était aussi philosophe et a mélangé les deux disciplines.",
      "Parce qu’avec le ready-made, l’art devient une activité conceptuelle interrogative proche de la philosophie, voire qui la remplace.",
      "Parce que Duchamp a arrêté de peindre pour se consacrer uniquement à la philosophie."
    ],
    correct: 2,
    explanation: `Kosuth inverse la lecture hégélienne. Pour Hegel, l’art est dépassé par la philosophie. Pour Kosuth, après Duchamp, l’art devient lui-même une activité philosophique de premier plan, car son objet principal est de s’interroger sur sa propre nature. L’artiste ne produit plus des objets beaux, mais des propositions sur l’art.
    \nExemple : L’œuvre <em>Art as Idea as Idea</em> de Kosuth, qui consiste en la définition du mot « art », est une pure proposition philosophique sur l’art, matérialisée sous forme d’objet.`
  },
  // Question n°90
  {
    question: "Quel est le paradoxe de la notion de « progrès » au 20e siècle, tel qu’exposé en introduction ?",
    answers: [
      "Le progrès n’a concerné que l’art, laissant la science et la technique stagner.",
      "Le progrès technique, censé améliorer la condition humaine, a aussi produit les moyens de sa destruction massive, conduisant à une perte de confiance en l’idée de progrès.",
      "Il n’y a eu aucun progrès véritable au 20e siècle, seulement des reculs et des barbaries."
    ],
    correct: 2,
    explanation: `Le 19e siècle croyait au progrès continu grâce à la science et à l’industrie. Les horreurs des deux guerres mondiales, rendues possibles par les avancées technologiques, ont brisé cette croyance. Le progrès apparaît alors comme ambivalent, voire dangereux. Cette désillusion est à l’origine du doute qui traverse le 20e siècle.
    \nExemple : La bombe atomique, summum du progrès scientifique, est aussi le symbole de la capacité d’autodestruction de l’humanité.`
  },
  // Question n°91
  {
    question: "Comment l’exemple de « l’artiste et robots » illustre-t-il la « mort de l’artiste » au sens traditionnel ?",
    answers: [
      "Les robots tuent physiquement les artistes pour prendre leur place dans les ateliers.",
      "Les robots sont de bien meilleurs artistes que les humains, rendant ces derniers obsolètes.",
      "La création peut être déléguée à des machines, remettant en cause la notion d’auteur unique et d’inspiration personnelle."
    ],
    correct: 3,
    explanation: `L’utilisation de robots ou d’IA dans la création artistique pousse à l’extrême la question de l’auteur. Si une œuvre est générée par un algorithme, qui est l’artiste ? Le programmeur ? L’utilisateur ? La machine ? Cela dissout la figure de l’artiste-génie. L’art devient un processus collaboratif homme-machine.
    \nExemple : Les peintures réalisées par un robot ou les compositions générées par une IA posent la question de l’originalité et de l’expression : une machine peut-elle « exprimer » quelque chose ?`
  },
  // Question n°92
  {
    question: "Que signifie l’idée de « modernité relative » ?",
    answers: [
      "Seul le 20e siècle est vraiment et absolument moderne, les autres époques ne l’étant pas.",
      "Parler de modernité est relatif ; chaque siècle se vit comme moderne et en rupture avec le passé.",
      "La modernité n’existe pas, c’est une illusion rétrospective des historiens."
    ],
    correct: 2,
    explanation: `On doit se méfier d’une vision téléologique où notre époque serait « enfin » moderne. Les hommes de la Renaissance se pensaient en rupture avec le « Moyen Âge obscur ». Ainsi, la conscience d’être moderne est une constante historique. Cela relativise la singularité de notre propre sentiment de rupture.
    \nExemple : Le manifeste futuriste de Marinetti (1909) proclamait une rupture radicale avec tout le passé, un topos des avant-gardes que l’on retrouve à différentes époques.`
  },
  // Question n°93
  {
    question: "Quelle est la fonction de l’« époché » ou réduction phénoménologique chez Husserl ?",
    answers: [
      "Douter de l’existence de sa propre conscience pour atteindre un solipsisme absolu.",
      "Accélérer la pensée pour atteindre des vérités métaphysiques plus rapidement.",
      "Mettre entre parenthèses le jugement sur l’existence du monde, pour se concentrer sur la manière dont les phénomènes se donnent à la conscience."
    ],
    correct: 3,
    explanation: `L’époché n’est pas un doute sceptique, mais une mise hors circuit méthodologique. Je décide de ne pas m’intéresser à la question « Est-ce que ce monde existe ? » pour décrire comment il m’apparaît. Cela permet d’accéder aux actes de la conscience et leurs corrélats intentionnels.
    \nExemple : Face à un arbre, au lieu de dire « c’est un chêne », je décris : « je vis une perception visuelle d’un objet vert et brun avec telle forme… ». Je décris l’expérience, pas l’objet.`
  },
  // Question n°94
  {
    question: "Pourquoi évoquer le fait qu’Hitler et Wittgenstein sont nés à quelques jours d’intervalle ?",
    answers: [
      "Pour faire une coïncidence anecdotique et amusante sans portée philosophique.",
      "Pour dire qu’ils se connaissaient personnellement et ont peut-être discuté ensemble.",
      "Pour souligner comment une même époque peut produire des figures symbolisant des extrêmes de la pensée humaine : la destruction barbare et la réflexion philosophique exigeante."
    ],
    correct: 3,
    explanation: `Cette coïncidence biographique sert de raccourci symbolique pour illustrer les tensions du 20e siècle. D’un côté, Hitler incarne la régression barbare. De l’autre, Wittgenstein représente la tentative de clarification rationnelle. Leur contemporanéité montre que le siècle est à la fois celui des pires obscurantismes et des lumières critiques.
    \nExemple : Alors que Hitler mobilisait les masses par une rhétorique simplificatrice, Wittgenstein travaillait à dissoudre les illusions métaphysiques, deux rapports au langage radicalement opposés.`
  },
  // Question n°95
  {
    question: "Quelle est la différence entre « vouloir savoir » et « pouvoir savoir » évoquée à propos de Wittgenstein ?",
    answers: [
      "C’est la même chose, les deux expressions sont synonymes en philosophie.",
      "« Pouvoir savoir » concerne les capacités cognitives, tandis que « vouloir savoir » désigne l’attitude qui consiste à questionner ses propres certitudes ancrées.",
      "« Vouloir savoir » est beaucoup plus facile que « pouvoir savoir », qui demande un effort intellectuel."
    ],
    correct: 2,
    explanation: `Wittgenstein montre que nous « pouvons » savoir beaucoup de choses. Mais le geste philosophique authentique est de « vouloir savoir » sur le savoir lui-même, sur ses conditions. Cela implique de mettre en question ce qui nous semble aller de soi, nos évidences grammaticales. Or, comme ces certitudes sont constitutives de notre monde, les questionner est très difficile.
    \nExemple : Il est facile de savoir utiliser le mot « temps » dans la vie quotidienne. Il est beaucoup plus difficile de « vouloir savoir » ce que signifie réellement ce mot, comme l’ont tenté Augustin ou Heidegger.`
  },
  // Question n°96
  {
    question: "Comment la performance de Chris Burden <em>Five Day Locker Piece</em> peut-elle être interprétée ?",
    answers: [
      "Comme une critique des casiers d’école trop petits et inconfortables.",
      "Comme une farce d’étudiant sans profondeur ni signification artistique.",
      "Comme une expérience de confinement extrême, explorant les limites de l’enfermement et la réduction de l’existence à ses fonctions biologiques."
    ],
    correct: 3,
    explanation: `Cette performance est une expérience de confinement et de survie minimaliste. En se réduisant à un espace foetal, Burden fait de son corps l’objet d’une expérience-limite. Elle peut évoquer la régression, l’enfermement psychique, ou une métaphore de la condition humaine contrainte. L’œuvre réside dans l’endurance et la documentation.
    \nExemple : Cette performance préfigure les expériences d’isolement sensoriel et questionne les besoins fondamentaux, tout en mettant en scène une vulnérabilité radicale face au public.`
  },
  // Question n°97
  {
    question: "Quel est le statut des mathématiques dans l’empirisme logique de Rudolf Carnap ?",
    answers: [
      "Ce sont des non-sens métaphysiques qu’il faut éliminer du discours rationnel.",
      "Ce sont des sciences empiriques comme la physique, fondées sur l’observation du monde.",
      "Ce sont des systèmes de tautologies, des conventions logiques vraies par définition, outils formels pour organiser la connaissance empirique."
    ],
    correct: 3,
    explanation: `Pour le Cercle de Vienne, les mathématiques pures sont analytiques. La proposition « 2+2=4 » est vraie en vertu des définitions des symboles et des règles de la logique. Elles n’apportent pas de connaissance factuelle, mais elles sont le squelette logique de toute science empirique.
    \nExemple : Le théorème de Pythagore est vrai dans le système de la géométrie euclidienne par déduction logique. Son application à un triangle réel nécessite une vérification empirique.`
  },
  // Question n°98
  {
    question: "En quoi le « body art » ou « art corporel » représente-t-il une rupture avec la tradition artistique ?",
    answers: [
      "Il est moins durable et moins beau que la peinture ou la sculpture classique.",
      "Il rompt avec l’idée que le support de l’art doit être extérieur ; le corps vivant de l’artiste devient à la fois sujet, objet et médium de l’œuvre.",
      "Il est plus facile à réaliser et ne demande aucun savoir-faire technique particulier."
    ],
    correct: 2,
    explanation: `Le body art pousse à l’extrême l’implication de l’artiste. Il ne crée pas un objet séparé de lui, il agit sur et avec son propre corps. Cela abolit la distance entre le créateur et la création. L’œuvre est souvent éphémère, douloureuse, et engage la responsabilité éthique du spectateur.
    \nExemple : Les « actions » de Gina Pane où elle se coupait avec des lames mettaient en scène la douleur et la vulnérabilité féminine de manière directe, forçant le public à une confrontation avec la réalité de la chair.`
  },
  // Question n°99
  {
    question: "Que signifie l’idée que « la crise écologique est sans précédent historique » ?",
    answers: [
      "Il y a toujours eu des crises écologiques, celle-ci n’est donc pas nouvelle.",
      "Pour la première fois, l’activité d’une espèce modifie à l’échelle planétaire les équilibres qui ont permis son émergence, menaçant sa survie.",
      "C’est la première crise qui soit aussi une crise économique mondiale synchronisée."
    ],
    correct: 2,
    explanation: `Les changements environnementaux passés étaient dus à des causes naturelles et s’étalaient sur des millénaires. La crise actuelle est causée par l’homme en quelques décennies. Son caractère global et sa rapidité en font un phénomène nouveau. Elle pose une question inédite : l’humanité peut-elle maîtriser les conséquences de son développement ?
    \nExemple : La concentration de CO2 dépasse tout ce qui a été mesuré depuis 800 000 ans, et le taux d’extinction des espèces est des centaines de fois supérieur au taux naturel, définissant une nouvelle époque : l’Anthropocène.`
  },
  // Question n°100
  {
    question: "Quel est le fil conducteur qui relie les différentes parties du cours de HLP sur cette séquence ?",
    answers: [
      "Une simple chronologie linéaire des événements du 20e et du 21e siècle.",
      "Une critique uniforme et négative de toute la modernité et de ses productions.",
      "L’exploration des manières dont notre époque tente de penser la tension entre rupture et continuité, entre héritage et invention de nouvelles formes de sens."
    ],
    correct: 3,
    explanation: `Le cours est structuré autour de ce paradigme central. La première partie montre comment les notions clés sont travaillées par cette tension. La deuxième l’illustre dans le champ artistique. La troisième montre comment la philosophie est le lieu de ruptures radicales qui tentent de répondre à la crise du sens. Le thème unificateur est la quête des conditions de possibilité d’un « monde commun ».
    \nExemple : De Manet à Heidegger en passant par Wittgenstein, on observe une même volonté de rompre avec le passé pour fonder de nouveaux paradigmes, tout en étant inévitablement hanté par ce qu’on rejette.`
  },
];