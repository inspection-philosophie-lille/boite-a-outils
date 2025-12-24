// ============================================
// DONNÉES GÉNÉRALES
// ============================================
const titre = "QUIZ HLP - Création, continuités et ruptures";
const sousTitre = "100 questions";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE (Synthèse)
// ============================================
const philosophyData = {
  texte: `Le 20e et le 21e siècles sont marqués par une remise en question fondamentale de la confiance positiviste et progressiste du 19e siècle. Les guerres mondiales, les crises écologiques et les mutations artistiques interrogent la possibilité même de « faire monde » autour de normes communes. Ce module explore la tension dialectique entre rupture et continuité, que ce soit dans la définition des notions clés (science, État, justice), dans les expressions artistiques (de la mort de l'art à sa réinterprétation des mythes) ou dans les courants philosophiques majeurs (phénoménologie, philosophie analytique). Il s'agit de comprendre comment l'époque contemporaine tente de créer du sens entre l'héritage critique et l'invention de nouvelles formes de pensée et d'être-ensemble.`,
  source: "synthèse des enjeux de la séquence."
};

// ============================================
// QUESTIONS DU QUIZ (1 à 100)
// ============================================
const questions = [
  // Question n°1
  {
    question: "Quelle conviction du 19e siècle est radicalement mise en doute par les événements du 20e siècle ?",
    answers: [
      "La croyance en la supériorité de l'art classique.",
      "La confiance dans le progrès inéluctable de l'humanité.",
      "La primauté de la métaphysique sur la science."
    ],
    correct: 2,
    explanation: `La réponse correcte identifie le positivisme et l'idée de progrès liée à la révolution industrielle comme le paradigme ébranlé par les deux guerres mondiales. L'importance philosophique réside dans le passage d'un sens de l'histoire orienté vers le mieux à une ère de doute et de questionnements sur la nature même de l'humanité. Cette rupture fondamentale conditionne toutes les réflexions ultérieures sur l'art, la politique et la connaissance. La crise écologique actuelle constitue une autre manifestation de cette perte de confiance dans un avenir maîtrisé par la raison technique.
Exemple : La Shoah, en tant qu'événement du 20e siècle, a été analysée par de nombreux penseurs comme une rupture civilisationnelle qui met en question les fondements mêmes de la raison et du progrès humaniste occidental.`
  },
  // Question n°2
  {
    question: "Quel est l'enjeu principal du monde contemporain face à son passé ?",
    answers: [
      "Il doit impérativement rompre avec toutes les traditions pour inventer du neuf.",
      "Il doit choisir entre l'invention pure, la poursuite de l'héritage ou la critique libératrice.",
      "Il doit retrouver et restaurer intégralement les valeurs et normes du passé."
    ],
    correct: 2,
    explanation: `La réponse correcte synthétise les trois postures possibles face au passé : création de nouvelles normes (invention), transmission (continuité) et rejet critique (rupture). L'enjeu philosophique est de définir une attitude qui ne soit ni un rejet stérile ni une soumission aveugle, mais une relation dialectique. La difficulté, et peut-être la solution, réside dans la possibilité d'opter simultanément pour ces trois modes de relation, sans tomber dans l'incohérence ou la démagogie.
Exemple : L'architecture contemporaine oscille souvent entre des bâtiments futuristes qui rompent avec le paysage (invention), des restaurations à l'identique de centres historiques (continuité) et des constructions qui dialoguent de manière critique avec le patrimoine existant, comme la pyramide du Louvre.`
  },
  // Question n°3
  {
    question: "L'exemple du candidat Djemi Drici offrant des bons d'essence est présenté comme une illustration de :",
    answers: [
      "L'efficacité des campagnes électorales modernes.",
      "La démagogie, définie par des promesses visant à influencer le vote par l'appât du gain.",
      "Une innovation légitime dans la communication politique."
    ],
    correct: 2,
    explanation: `Cet exemple illustre la démagogie, pratique qui corrompt le processus démocratique en substituant l'intérêt particulier immédiat à la délibération sur le bien commun. Son importance philosophique et politique est majeure : elle montre comment la parole publique peut être vidée de son sens pour devenir un simple instrument de manipulation des affects et des désirs. Elle constitue un obstacle direct au « faire monde », c'est-à-dire à la constitution d'un espace public rationnel et partagé.
Exemple : Cette pratique trouve un écho dans des promesses électorales irréalistes ou purement clientélistes qui contournent le débat sur les projets de société, réduisant la politique à un marché d'échanges de faveurs.`
  },
  // Question n°4
  {
    question: "Que signifie précisément l'expression « faire monde » ?",
    answers: [
      "Conquérir et dominer la nature par la technique.",
      "Produire des œuvres d'art qui représentent le monde.",
      "Constituer un monde commun où, par principe, chacun a sa place."
    ],
    correct: 3,
    explanation: `« Faire monde » est une expression-clé de la philosophie du 20e siècle qui désigne l'activité politique et sociale de construction d'un espace commun de sens et de coexistence. Son enjeu est de répondre à l'éclatement des certitudes et au morcellement communautaire. Dans un contexte de prévalence des croyances individuelles, la question devient : comment établir des normes communes sans imposer une vision unique ni sombrer dans le relativisme absolu ?
Exemple : Les débats contemporains sur la laïcité peuvent être vus comme une tentative de « faire monde » en définissant un cadre commun permettant la coexistence de convictions religieuses différentes dans un espace public neutre.`
  },
  // Question n°5
  {
    question: "En quoi la découverte des Amériques constitue-t-elle un bon exemple pour penser la relativité de la notion de rupture ?",
    answers: [
      "Parce qu'elle a été vécue comme une continuité par tous les peuples impliqués.",
      "Parce qu'elle n'a constitué une rupture que du point de vue des Européens, pour qui c'était un « nouveau monde ».",
      "Parce qu'elle a marqué une rupture technologique absolue, perceptible par tous."
    ],
    correct: 2,
    explanation: `Cet exemple montre que la rupture n'est pas une qualité objective de l'événement, mais dépend du point de vue de celui qui l'éprouve. Pour les civilisations précolombiennes, il n'y a pas eu de « découverte » mais une invasion. L'importance philosophique est de remettre en cause un historicisme qui pose des ruptures absolues. Cela invite à une approche plus nuancée et plurielle de l'histoire, reconnaissant la multiplicité des expériences temporelles.
Exemple : La chute du mur de Berlin en 1989 a été vécue comme une libération et une rupture joyeuse vers l'Ouest, mais aussi comme un traumatisme et une perte de repères pour une partie de la population est-allemande, illustrant la relativité de l'événement « rupture ».`
  },
  // Question n°6
  {
    question: "Quelle question fondamentale est posée par l'opposition entre rupture et continuité ?",
    answers: [
      "La question de la supériorité de l'ancien ou du moderne.",
      "La question de la différence entre ce qui est neuf et ce qui est nouveau, entre l'origine et l'originalité.",
      "La question de savoir qui a le pouvoir de décider du sens de l'histoire."
    ],
    correct: 2,
    explanation: `L'opposition revient à interroger la nature même de ce qui advient. Le « nouveau » peut n'être qu'un renouvellement dans le cadre de la mêmeté (continuité), tandis que le « neuf » implique une altérité radicale, une irruption de l'inédit (rupture). Cette distinction est cruciale pour analyser les prétentions à la modernité des différentes époques et œuvres. Elle oblige à examiner si un changement est de surface ou de structure.
Exemple : L'invention de la photographie au 19e siècle fut un surgissement de réellement neuf (rupture technique et esthétique), tandis que le passage du téléphone filaire au smartphone est plutôt un renouvellement et une complexification du même principe de communication à distance (continuité évolutive).`
  },
  // Question n°7
  {
    question: "Quelle est la singularité potentielle des ruptures à l'époque contemporaine ?",
    answers: [
      "Elles sont moins profondes qu'aux siècles précédents.",
      "Elles sont plurielles et touchent à des fondements : l'art, l'histoire, la raison, l'humanité, la nature.",
      "Elles concernent uniquement le domaine technologique."
    ],
    correct: 2,
    explanation: `Le contemporain se caractérise par une multiplication de crises qui semblent mettre en jeu des catégories fondamentales de notre existence et de notre pensée. La particularité philosophique est que ces « morts annoncées » (de l'art, de l'histoire, etc.) ne sont pas de simples changements, mais des interrogations sur la possibilité même de poursuivre sous les mêmes concepts. La crise écologique est particulièrement citée comme étant sans précédent historique par son ampleur systémique.
Exemple : Le mouvement transhumaniste prône explicitement une rupture avec la condition humaine biologique actuelle, envisageant un « dépassement » de l'humanité par la fusion avec la technologie, posant la question de la « mort de l'humanité » au sens traditionnel.`
  },
  // Question n°8
  {
    question: "Quel concept permet d'articuler de manière plus subtile les notions de rupture et de continuité ?",
    answers: [
      "Le concept de révolution.",
      "Le concept de seuil.",
      "Le concept de cycle."
    ],
    correct: 2,
    explanation: `La notion de seuil suggère un passage progressif, une accumulation de changements qui finissent par modifier qualitativement un état sans qu'il y ait nécessairement un moment de rupture claire et datable. Cela permet de dépasser l'opposition binaire et de penser la transformation historique de manière plus complexe. Un seuil est franchi quand la quantité de changements produit une nouvelle qualité, sans effacer entièrement ce qui précède.
Exemple : On peut considérer que la diffusion massive d'Internet et des réseaux sociaux a franchi un seuil dans nos sociétés, modifiant en profondeur la communication, l'information et les liens sociaux, sans qu'une date unique ne marque une « rupture » nette avec l'avant.`
  },
  // Question n°9
  {
    question: "Que montre la psychanalyse à propos de la nature humaine ?",
    answers: [
      "Que l'homme est d'abord et avant tout un être de raison, comme le pensait Aristote.",
      "Que la conscience, longtemps considérée comme l'essence de l'homme, n'est que la partie émergée de l'appareil psychique.",
      "Que les croyances individuelles sont sans effet sur la raison universelle."
    ],
    correct: 2,
    explanation: `La psychanalyse freudienne opère une rupture majeure avec la tradition philosophique qui définissait l'homme par sa conscience et sa raison (animal rationale). Elle introduit l'idée d'un inconscient qui détermine une grande partie de notre vie psychique. Cette découverte a des implications considérables : elle explique en partie pourquoi l'universel (la raison) semble reculer devant le singulier (les pulsions, les traumatismes individuels) et complique le projet de « faire monde » sur des bases purement rationnelles.
Exemple : Les résistances irrationnelles à certains faits scientifiques (comme le changement climatique) peuvent s'analyser, en partie, par des mécanismes psychiques inconscients (déni, refoulement) plutôt que par un simple manque d'information.`
  },
  // Question n°10
  {
    question: "Contre quelle tradition philosophique Wittgenstein rompt-il dans 'De la certitude' ?",
    answers: [
      "Contre l'empirisme de Locke qui fait de l'expérience la source de toute connaissance.",
      "Contre le scepticisme cartésien qui doute de tout pour trouver un fondement indubitable.",
      "Contre l'idéalisme hégélien qui fait de l'histoire le déploiement de l'Esprit."
    ],
    correct: 2,
    explanation: `Wittgenstein s'oppose à la méthode du doute hyperbolique de Descartes. Il montre que le doute lui-même présuppose un arrière-plan de certitudes non-doutées (comme l'existence du monde, de son corps, etc.). La certitude n'est donc pas le point d'arrivée d'une enquête, mais le fondement toujours déjà là de toute pensée et action. Ces certitudes sont le produit de notre histoire, de notre éducation et de notre « forme de vie », et sont si fondamentales qu'elles en deviennent indiscutables.
Exemple : Lorsque je tends la main pour attraper un objet, je ne doute pas un instant de son existence ou de la réalité de mon bras ; cette certitude pratique est le socle sur lequel s'appuient toutes mes actions, et un doute à son sujet serait pathologique.`
  },
  // Question n°11
  {
    question: "Que signifie l'affirmation de Wittgenstein selon laquelle l'homme est « d'abord un être de croyance et de certitude » ?",
    answers: [
      "Que la religion est le fondement de toute société.",
      "Que notre rapport au monde est immédiatement pratique et ancré dans des évidences partagées, avant d'être un savoir théorique discuté.",
      "Que nous devons croire sans preuve ce que nous disent les autorités."
    ],
    correct: 2,
    explanation: `Cette thèse renverse la hiérarchie classique entre croyance (doxa, δόξα) et connaissance (epistémè, ἐπιστήμη). Pour Wittgenstein, un vaste socle de certitudes non questionnées (les « vérités du sens commun ») conditionne la possibilité même du langage, de l'action et, finalement, de la connaissance savante. La difficulté n'est pas tant de « pouvoir savoir » que de « vouloir savoir », c'est-à-dire de questionner ce qui nous semble aller de soi.
Exemple : Notre certitude que le soleil se lèvera demain n'est pas le fruit d'une déduction scientifique complexe, mais une croyance fondamentale ancrée dans notre expérience répétée et partagée du monde, sans laquelle toute planification serait impossible.`
  },
  // Question n°12
  {
    question: "Que sont les « obstacles épistémologiques » selon Gaston Bachelard ?",
    answers: [
      "Les limites techniques des instruments de mesure scientifique.",
      "Des obstacles liés à la connaissance elle-même, des soubassements inconscients qui viennent fausser l'accès à l'objet de la connaissance.",
      "Les difficultés financières et politiques à financer la recherche."
    ],
    correct: 2,
    explanation: `Bachelard identifie dans 'La formation de l'esprit scientifique' des entraves internes à l'esprit qui l'empêchent de connaître objectivement. Ces obstacles (comme l'expérience première, le verbalisme, l'animisme) sont des habitudes de pensée, des images ou des affects qui se placent entre le désir de connaître et l'objet. L'enjeu est de réaliser une catharsis (κάθαρσις) intellectuelle pour s'en défaire. La science progresse en rompant avec les opinions et les évidences immédiates.
Exemple : L'obstacle « substantialiste » pousse à imaginer derrière toute propriété (la chaleur, l'électricité) une substance particulière (le « calorique », le « fluide électrique »), alors que la physique moderne en donne des explications relationnelles et énergétiques.`
  },
  // Question n°13
  {
    question: "Quelle est la prescription principale de Bachelard pour former un esprit scientifique ?",
    answers: [
      "Acquérir le plus de données expérimentales possibles.",
      "Apprendre par cœur les théories des grands savants.",
      "Réaliser une catharsis intellectuelle et affective, réformer son esprit, refuser l'argument d'autorité et laisser sa raison inquiète."
    ],
    correct: 3,
    explanation: `Bachelard propose une véritable ascèse intellectuelle. La catharsis est un nettoyage des opinions préconçues. Réformer son esprit, c'est lutter contre l'habitude et l'inertie de la pensée. Refuser l'argument d'autorité, c'est affirmer l'autonomie du jugement scientifique. Enfin, la « raison inquiète » est une vigilance critique permanente, opposée à la tranquillité dogmatique. Le savoir scientifique n'est pas un stock de vérités mais une activité critique incessante.
Exemple : Galilée a dû réaliser une telle catharsis pour rompre avec l'obstacle de l'expérience première (qui nous montre le soleil tourner autour de la Terre) et construire l'héliocentrisme sur la base du calcul et de l'observation instrumentale.`
  },
  // Question n°14
  {
    question: "Selon Robert Nozick dans 'Anarchie, Etat et utopie', quel devrait être le rôle de l'État ?",
    answers: [
      "Intervenir activement pour redistribuer les richesses et garantir la justice sociale.",
      "Se réduire au minimum, laissant les individus libres d'échanger et de s'associer sans taxation coercitive.",
      "Définir et imposer des valeurs communes pour assurer la cohésion sociale."
    ],
    correct: 2,
    explanation: `Nozick défend une conception libertarienne (ou « libertaire ») minimale de l'État. L'État ne doit être qu'un « veilleur de nuit » protégeant les droits individuels fondamentaux (vie, liberté, propriété). Toute intervention au-delà (taxation pour redistribuer, réglementation des échanges) est une violation de la liberté individuelle. Sa thèse radicale illustre une rupture avec les conceptions interventionnistes ou sociales de l'État, au nom d'un individualisme strict.
Exemple : Pour un penseur comme Nozick, un impôt sur le revenu à finalité redistributive est moralement équivalent à du travail forcé, car il prélève le fruit du travail d'un individu sans son consentement au profit d'un autre.`
  },
  // Question n°15
  {
    question: "Quel principe de justice John Rawls met-il en avant à travers l'article 6 de la DDHC ?",
    answers: [
      "La justice comme égalité stricte des résultats pour tous.",
      "La justice comme reconnaissance sociale, accordant les emplois publics au plus méritant selon ses vertus et talents.",
      "La justice comme héritage, garantissant la transmission des positions sociales."
    ],
    correct: 2,
    explanation: `Rawls, dans une certaine continuité avec l'idéal méritocratique des Lumières, défend un principe d'« égalité équitable des chances ». Les inégalités sociales ne sont justes que si les positions sont ouvertes à tous dans des conditions de concurrence loyale, en fonction des seuls mérites et talents. Ce principe vise à corriger les injustices de la naissance ou du hasard pour que la société soit une compétition équitable. Cependant ce principe est relativisé dans le monde contemporain.
Exemple : Les concours de la fonction publique, en théorie, incarnent ce principe rawlsien : ils sont ouverts à tous sous condition de diplôme et les postes sont attribués au mieux classé, indépendamment de l'origine sociale ou des relations.`
  },
  // Question n°16
  {
    question: "Quelle thèse célèbre de Hegel sur l'art est citée pour introduire l'idée de la « fin de l'art » ?",
    answers: [
      "L'art est l'imitation de la nature.",
      "L'art est l'expression sensible de l'Idée absolue, mais à notre époque de culture réflexive, cette destination suprême est pour nous quelque chose du passé.",
      "L'art doit être utile et éducatif pour la société."
    ],
    correct: 2,
    explanation: `Hegel estime que l'art a joué un rôle essentiel dans l'histoire de l'Esprit en donnant une forme sensible à l'absolu. Cependant, l'époque moderne, caractérisée par la pensée réflexive et abstraite (philosophie, science), ne serait plus « propice » à cet accomplissement suprême de l'art. L'Esprit se comprend désormais mieux par des concepts que par des intuitions sensibles. Cette thèse est reprise au 20e siècle pour interpréter les mutations de l'art contemporain comme une « mort » de l'art traditionnel.
Exemple : Pour Hegel, les sculptures des dieux grecs représentaient parfaitement l'idéal religieux et éthique de leur temps, alors qu'une société moderne rationaliste ne peut plus trouver dans une statue une satisfaction spirituelle équivalente.`
  },
  // Question n°17
  {
    question: "Quelle caractéristique de l'œuvre d'art classique, selon Kant, est remise en cause par l'art contemporain ?",
    answers: [
      "Son utilité pratique.",
      "Sa finalité sans fin, son inutilité qui en fait un objet de contemplation pour lui-même.",
      "Son caractère nécessairement figuratif."
    ],
    correct: 2,
    explanation: `Kant définit le jugement esthétique comme désintéressé : on apprécie la beauté d'un objet sans se soucier de son utilité. L'œuvre d'art classique incarne cette « finalité sans fin ». L'art contemporain, notamment avec la performance ou l'art conceptuel, rompt avec cette idée : l'œuvre n'est plus un objet pérenne à contempler, mais devient un événement, un processus, une idée, voire une provocation qui interroge ses propres conditions d'existence. L'objet peut disparaître au profit de l'action ou du concept.
Exemple : La « performance » est par essence éphémère ; elle n'existe que dans le temps de sa réalisation et n'a pas pour but premier de produire un objet beau à contempler, mais de créer une expérience ou de transmettre une idée.`
  },
  // Question n°18
  {
    question: "Quel exemple Walter Benjamin donne-t-il pour illustrer comment la technique modifie l'œuvre d'art ?",
    answers: [
      "La presse à imprimer qui multiplie les livres.",
      "Le cliché photographique, qui sépare la création (le négatif) de sa manifestation (le tirage).",
      "Le synthétiseur qui permet de créer de nouveaux sons."
    ],
    correct: 2,
    explanation: `Dans 'L'Œuvre d'art à l'époque de sa reproductibilité technique', Benjamin analyse comment des techniques comme la photographie et le cinéma abolissent la notion d'« original » et d'« aura » (l'ici et maintenant unique de l'œuvre). Le cliché (négatif) est la matrice reproductible à l'infini, rendant chaque tirage aussi « original » qu'un autre. Cela rompt avec l'idée d'une pièce unique et sacralisée, ouvrant la voie à des pratiques artistiques dématérialisées.
Exemple : Une affiche publicitaire reproduite à des millions d'exemplaires n'a pas d'« aura » au sens benjaminien, contrairement à la 'Joconde' qui est un original unique accroché au Louvre.`
  },
  // Question n°19
  {
    question: "Qu'est-ce qu'une « performance » dans l'art contemporain ?",
    answers: [
      "Une démonstration technique virtuose d'un artiste sur scène.",
      "Une œuvre où l'action de l'artiste, souvent face à un public, devient l'œuvre elle-même, effaçant la séparation entre création et manifestation.",
      "Une évaluation de la qualité d'une œuvre par des experts."
    ],
    correct: 2,
    explanation: `La performance est un art de l'événement et du corps. L'artiste utilise son propre corps, souvent dans une durée réelle et dans un rapport direct au public, pour créer une situation qui est l'œuvre. Il n'y a pas d'objet final séparé à vendre ou à exposer (hormis des traces : photos, vidéos). Cela représente une rupture totale avec la conception de l'art comme production d'objets pérennes et autonomes. La performance met l'accent sur le processus, l'expérience et la présence.
Exemple : La performance 'Shoot' (1971) de Chris Burden, où il se fait tirer dessus au bras, fait de l'acte même de violence et de risque extrême le cœur de l'œuvre, interrogeant les limites du corps et du spectacle.`
  },
  // Question n°20
  {
    question: "Quel est l'objectif de la performance 'I like America and America likes me' de Joseph Beuys (1974) ?",
    answers: [
      "Faire l'éloge du mode de vie américain.",
      "Créer un spectacle animalier captivant.",
      "Mettre en cause, symboliquement, la relation entre l'homme blanc, la nature (le coyote) et la culture économique (le Wall Street Journal)."
    ],
    correct: 3,
    explanation: `Beuys, enfermé avec un coyote sauvage, engage un rituel de réconciliation symbolique avec la nature et l'histoire pré-coloniale de l'Amérique. Le coyote représente la nature sauvage et l'esprit du continent avant l'arrivée des Européens. Le fait que l'animal urine sur le 'Wall Street Journal' quotidiennement apporté est un geste de critique de la civilisation capitaliste et industrielle. Cette performance est typique d'un art qui cherche à guérir des traumatismes historiques et écologiques par des actions symboliques.
Exemple : En choisissant un coyote, animal mythique dans les cultures amérindiennes et souvent persécuté, Beuys propose une critique écologique et post-coloniale de l'Amérique moderne.`
  },
  // Question n°21
  {
    question: "Que critique l'art conceptuel, selon Joseph Kosuth, à propos de l'art traditionnel ?",
    answers: [
      "Son manque de beauté.",
      "Son cantonnement au registre de l'apparence décorative et du plaisir des sens (l'esthétique).",
      "Son coût de production trop élevé."
    ],
    correct: 2,
    explanation: `Pour Kosuth, l'art après Duchamp doit être « conceptuel ». L'idée ou la proposition prime sur la matérialité ou l'apparence sensible de l'objet. L'art ne doit plus viser à produire du beau, mais à interroger sa propre définition et son statut. Ainsi, une œuvre peut consister en une simple phrase ou un protocole. Cette thèse rompt avec la définition kantienne de l'art comme jugement esthétique et le replace dans le domaine de la philosophie et de l'analyse du langage.
Exemple : L'œuvre 'One and Three Chairs' (1965) de Kosuth présente une chaise réelle, une photo de cette chaise et la définition du mot « chaise » tirée d'un dictionnaire, interrogeant ainsi les relations entre l'objet, sa représentation et son concept.`
  },
  // Question n°22
  {
    question: "Quelle controverse illustre la question « qui est l'auteur ? » dans l'art contemporain ?",
    answers: [
      "La querelle entre peintres abstraits et figuratifs.",
      "Le différend entre Daniel Druet (l'exécutant des statues de cire) et Maurizio Cattelan (le donneur d'ordre).",
      "Le conflit sur la paternité de la photographie."
    ],
    correct: 2,
    explanation: `Cette controverse juridique met en lumière la dissociation possible, dans l'art contemporain, entre celui qui conçoit l'idée (le concepteur, Cattelan) et celui qui réalise matériellement l'objet (l'artisan, Druet). Elle questionne la notion romantique de l'artiste-génie qui maîtrise seul tout le processus de création. Dans une économie artistique où l'idée prime, l'exécutant peut être relégué au rang d'ouvrier, ce qui pose des problèmes de droits d'auteur et de reconnaissance.
Exemple : De nombreux artistes contemporains de renom, comme Jeff Koons ou Damien Hirst, ont des ateliers avec des assistants qui réalisent matériellement les œuvres à partir de leurs instructions, remettant en cause l'idée d'une « main » unique de l'artiste.`
  },
  // Question n°23
  {
    question: "Comment Jean Cocteau, dans 'La Machine infernale', traite-t-il le mythe antique d'Œdipe ?",
    answers: [
      "Il le suit à la lettre dans un style grandiloquent et tragique.",
      "Il le transpose dans le monde contemporain en habillant les personnages en costumes modernes.",
      "Il le démystifie en utilisant un langage familier, voire enfantin (comme le diminutif « Zizi » pour Tirésias), pour en dénoncer la cruauté."
    ],
    correct: 3,
    explanation: `Cocteau opère une réécriture critique et distanciée du mythe. En réduisant le prophète Tirésias à un « Zizi » ridiculisé par Jocaste dans une scène de vaudeville (escaliers, écharpe), il brise la solennité tragique. Cette rupture de ton a pour but de rendre les personnages plus humains, plus faibles, et ainsi de souligner l'absurdité et la violence mécanique (« machine infernale ») du destin qui s'abat sur eux. C'est une continuité par le sujet, mais une rupture par le traitement.
Exemple : En faisant de la rencontre entre Jocaste et Tirésias une querelle domestique et burlesque, Cocteau montre que les grandes tragédies naissent aussi de la banalité et de l'incompréhension, et non seulement de la fatalité divine.`
  },
  // Question n°24
  {
    question: "Quel est l'enjeu principal de la pièce 'La guerre de Troie n'aura pas lieu' de Jean Giraudoux ?",
    answers: [
      "Raconter de manière fidèle l'épopée homérique.",
      "Faire un plaidoyer contre la guerre, en montrant l'absurdité et l'engrenage qui y mènent, à la veille de la Seconde Guerre mondiale.",
      "Célébrer l'héroïsme des guerriers antiques."
    ],
    correct: 2,
    correct: 2,
    explanation: `Écrite en 1935, la pièce de Giraudoux est une tragédie anticipatrice. En réécrivant le conflit troyen, elle met en scène les mécanismes politiques, rhétoriques et psychologiques qui rendent la guerre inévitable malgré les efforts des pacifistes comme Hector. Le ton familier et ironique sert à désacraliser la guerre héroïque et à en montrer la stupidité concrète. C'est un exemple de continuité littéraire (le mythe) au service d'un message de rupture avec l'idéologie guerrière.
Exemple : La célèbre tirade d'Hector aux morts, où il avoue sa honte d'être un vainqueur vivant et se moque des distinctions entre morts braves et peureux, est une déconstruction puissante de la gloire militaire.`
  },
  // Question n°25
  {
    question: "Quel aspect du roman courtois médiéval Marcel Proust reprend-il dans 'Du côté de chez Swann' ?",
    answers: [
      "La figure du chevalier errant.",
      "Les combats et les tournois.",
      "La description du coup de foudre amoureux à travers le champ lexical de la vision et du regard qui veut « toucher, capturer, emmener » l'être aimé."
    ],
    correct: 3,
    explanation: `Proust s'inscrit dans une longue tradition littéraire qui fait de la rencontre amoureuse un événement visuel et presque physique de capture. Le narrateur décrit le regard non pas comme un simple sens, mais comme le « porte-parole » de tous les sens, animé par un désir de possession totale. Cette continuité thématique montre comment la littérature moderne réactive des archétypes anciens pour décrire l'expérience subjective la plus intime. La rupture réside dans l'analyse psychologique extrêmement fine et introspective que Proust y applique.
Exemple : La scène où le narrateur aperçoit Gilberte Swann aux Champs-Élysées et où son regard cherche désespérément à attirer le sien est une variation moderne et analytique du « coup de foudre » traditionnel.`
  },
  // Question n°26
  {
    question: "Que signifie le concept d'« hantologie » en musique, tel qu'appliqué par Leyland Kirby (The Caretaker) ?",
    answers: [
      "L'étude des musiques effrayantes pour films d'horreur.",
      "Le fait que le présent est hanté par les fantômes du passé, par des sons, des mélodies ou des ambiances disparues qui ressurgissent.",
      "Une technique de composition utilisant des boucles électroniques."
    ],
    correct: 2,
    explanation: `Le terme, forgé par Jacques Derrida, désigne le retour persistant de ce qui est censé avoir disparu. En musique, cela peut se traduire par l'utilisation d'enregistrements anciens (vinyls craquelés, musiques de bal des années 1920-30), traités pour créer une atmosphère de mémoire floue, de nostalgie et de spectralité. L'œuvre n'est pas dans la nouveauté pure, mais dans la résurgence et la transformation d'un passé qui hante le présent. C'est une forme de continuité mélancolique et critique.
Exemple : L'album 'Everywhere at the end of time' de The Caretaker évoque, à travers la dégradation progressive de musiques de danse anciennes, l'expérience de la perte de mémoire et de la maladie d'Alzheimer, faisant littéralement hanter le présent par les fragments d'un passé qui s'efface.`
  },
  // Question n°27
  {
    question: "Quel est le projet philosophique d'Edmund Husserl avec la phénoménologie ?",
    answers: [
      "Interpréter le monde pour le transformer, selon la maxime de Marx.",
      "Établir la philosophie comme une « science rigoureuse » des phénomènes, en accédant aux choses mêmes telles qu'elles se donnent à la conscience.",
      "Douter de tout pour fonder la connaissance sur une base absolument certaine, comme Descartes."
    ],
    correct: 2,
    explanation: `Husserl veut rompre à la fois avec le psychologisme (qui réduit la logique à des faits psychologiques) et le positivisme (qui prétend remplacer la philosophie par la science). Sa méthode, la « réduction phénoménologique » ou époché (ἐποχή), consiste à mettre entre parenthèses nos croyances sur l'existence du monde pour décrire purement les structures de l'expérience vécue. Le but est de fonder un savoir absolu sur la conscience pure (l'ego transcendantal) et son intentionnalité (« toute conscience est conscience de... »).
Exemple : Pour décrire phénoménologiquement la perception d'un arbre, je ne m'intéresse pas à l'arbre en soi (objet de la botanique), mais à la manière dont il m'apparaît, avec ses côtés visibles et invisibles, dans la lumière, avec la certitude qu'il continue d'exister hors de ma vue, etc.`
  },
  // Question n°28
  {
    question: "Que reproche Husserl, dans 'La Crise des sciences européennes', à la science moderne ?",
    answers: [
      "Son manque de précision technique.",
      "De s'être détournée des « questions décisives » pour une humanité authentique, celles du sens ou de l'absence de sens de l'existence.",
      "De ne pas être assez lucrative."
    ],
    correct: 2,
    explanation: `Husserl critique le réductionnisme des sciences positives qui, en se focalisant exclusivement sur les « faits » mesurables, ont oublié le « monde-de-la-vie » (Lebenswelt) pré-scientifique, le cadre de sens dans lequel la science elle-même émerge. Ces sciences « de fait » fabriquent une « humanité de fait », désenchantée et coupée des interrogations fondamentales sur son existence. La phénoménologie doit donc refonder la rationalité en réintégrant cette dimension du vécu et du sens.
Exemple : Une approche purement médicale et statistique de la mort peut décrire ses causes biologiques, mais elle est muette sur la question du sens de la mort pour celui qui la vit ou pour ses proches, question qui relève du monde-de-la-vie.`
  },
  // Question n°29
  {
    question: "Comment Heidegger, dans 'Être et Temps', décrit-il l'existence inauthentique de l'être-là (Dasein) ?",
    answers: [
      "Comme une vie de péché et d'éloignement de Dieu.",
      "Comme une vie sous l'emprise du « on » (das Man), où l'individu se dissout dans la banalité du quotidien et se dérobe à sa propre possibilité d'être.",
      "Comme une vie dominée par les passions irrationnelles."
    ],
    correct: 2,
    explanation: `Le « on » est la dictature anonyme de l'opinion moyenne, du « comme tout le monde ». Dans ce mode d'être, l'individu pense, juge, agit et parle « comme on pense, on juge, on agit ». Cette existence inauthentique permet de fuir l'angoisse (Angst) qui naît de la confrontation à la liberté, à la finitude et à la responsabilité de son propre être. Le « on » retire à l'être-là toute responsabilité concrète, car « on » n'est jamais personne en particulier.
Exemple : Les modes vestimentaires, les opinions répétées sans critique tirées des réseaux sociaux, ou le choix d'une carrière « parce que c'est ce qui se fait » sont des manifestations de la domination du « on » sur l'existence.`
  },
  // Question n°30
  {
    question: "Quelle est la thèse centrale du 'Tractatus logico-philosophicus' de Wittgenstein concernant la philosophie ?",
    answers: [
      "La philosophie est la reine des sciences, fondant toutes les autres.",
      "La philosophie n'est pas une doctrine mais une activité de clarification logique des pensées et du langage.",
      "La philosophie doit produire des systèmes métaphysiques expliquant la totalité du réel."
    ],
    correct: 2,
    explanation: `Pour le premier Wittgenstein, les problèmes philosophiques naissent de la mécompréhension de la logique de notre langage. La tâche de la philosophie est donc thérapeutique : il s'agit d'analyser les propositions pour distinguer celles qui ont un sens (les propositions des sciences de la nature) de celles qui n'en ont pas (les propositions métaphysiques, éthiques, esthétiques). En clarifiant le langage, on dissout les pseudo-problèmes. Le résultat n'est pas un ensemble de thèses philosophiques, mais de la clarté.
Exemple : La question « Quelle est la substance ultime du monde ? » est, pour Wittgenstein, un non-sens car le mot « substance » est utilisé en dehors de tout contexte logique qui lui donnerait un sens vérifiable. La philosophie doit montrer que cette question est mal posée.`
  },
  // Question n°31
  {
    question: "Quelle célèbre proposition du 'Tractatus' résume sa position sur les limites du langage sensé ?",
    answers: [
      "« Je pense, donc je suis. »",
      "« Ce dont on ne peut parler, il faut le taire. »",
      "« Dieu est mort. »"
    ],
    correct: 2,
    explanation: `Cette dernière proposition du 'Tractatus' (7) est à la fois une limite et un mystique. Elle signifie que tout ce qui peut être dit de manière sensé se limite aux propositions factuelles des sciences naturelles. Le reste – l'éthique, l'esthétique, le sens de la vie, le mystique – ne peut pas être exprimé en propositions, mais seulement « montré » ou vécu. Parler de ces choses revient à produire des non-sens. Cette idée a une influence majeure sur le positivisme logique du Cercle de Vienne.
Exemple : Dire « La bonté est une valeur absolue » n'est, pour le Wittgenstein du 'Tractatus', ni vrai ni faux, mais dénué de sens propositionnel ; cela exprime une attitude éthique, non un fait.`
  },
  // Question n°32
  {
    question: "Quel est le projet du « Cercle de Vienne » et de Rudolf Carnap ?",
    answers: [
      "Promouvoir un néo-positivisme ou « empirisme logique » excluant absolument les spéculations métaphysiques du discours rationnel.",
      "Développer une nouvelle métaphysique fondée sur les sciences.",
      "Rétablir la philosophie idéaliste allemande."
    ],
    correct: 1,
    explanation: `Le Cercle de Vienne (1923-1936) pousse à l'extrême la critique wittgensteinienne du langage. Son manifeste est un « empirisme logique » : seules deux sortes d'énoncés sont acceptables. 1) Les tautologies logiques et mathématiques (vraies par convention). 2) Les énoncés empiriques des sciences, vérifiables par l'expérience (les « énoncés protocolaires »). Tout le reste, en particulier la métaphysique, la théologie, l'éthique normative, est rejeté comme dénué de sens cognitif, simple expression d'émotions ou « art raté ».
Exemple : Pour Carnap, une question comme « Pourquoi y a-t-il quelque chose plutôt que rien ? » est aussi vide de sens que « Où va la flamme quand on souffle la chandelle ? » car elle ne peut être tranchée par aucun protocole d'observation.`
  },
  // Question n°33
  {
    question: "Quel type d'énoncé Carnap qualifie-t-il de « tautologie » ?",
    answers: [
      "Un énoncés empirique vérifié par l'expérience.",
      "Un énoncé logique ou mathématique, vrai en vertu de sa forme seule (comme « A = A »), correspondant au jugement analytique de Kant.",
      "Un énoncé poétique particulièrement beau."
    ],
    correct: 2,
    explanation: `Les tautologies sont les propositions de la logique et des mathématiques pures. Elles ne disent rien sur le monde, ne nous apprennent rien de nouveau, mais sont vraies de manière nécessaire en vertu des règles de formation et de déduction que nous avons conventionnellement établies. Elles sont analytiques (le prédicat est contenu dans le sujet). Leur vérité est formelle et a priori. Elles constituent, avec les énoncés empiriques, l'un des deux piliers du discours sensé pour le positivisme logique.
Exemple : « Tous les célibataires sont des hommes non mariés » est une tautologie/analyse, car la définition de « célibataire » contient déjà « homme non marié ». Cette proposition est vraie quelle que soit l'expérience.`
  },
  // Question n°34
  {
    question: "Pourquoi Carnap considère-t-il que les mots métaphysiques comme « Dieu » ou « l'Être » sont dénués de sens ?",
    answers: [
      "Parce qu'ils sont difficiles à comprendre.",
      "Parce qu'ils sont trop anciens.",
      "Parce qu'on ne peut pas produire leur « syntaxe », c'est-à-dire définir l'énoncé élémentaire et les conditions d'observation qui permettraient de les vérifier ou de les infirmer."
    ],
    correct: 3,
    explanation: `Selon le critère de vérifiabilité du Cercle de Vienne, un terme n'a de sens que si l'on peut indiquer la procédure empirique (le « protocole ») pour vérifier les propositions où il figure. Or, on ne peut pas dire quelles observations confirmeraient ou infirmeraient que « x est Dieu » ou que « l'Être néantit ». Ces termes n'ont donc pas de signification cognitive ; ils ne sont que des bruits ou des traces écrites qui peuvent exprimer des sentiments, mais ne véhiculent aucune connaissance.
Exemple : L'affirmation « L'absolu est parfait » ne peut être reliée à aucune expérience possible ; elle est donc, pour Carnap, une pseudo-proposition qui simule une affirmation sans en être une.`
  },
  // Question n°35
  {
    question: "Quel philosophe et quel texte Carnap critique-t-il explicitement comme exemple du non-sens métaphysique ?",
    answers: [
      "Hegel et 'La Phénoménologie de l'Esprit'.",
      "Heidegger et sa conférence 'Qu'est-ce que la métaphysique ?' (1929), en particulier la phrase « Le rien lui-même néantit ».",
      "Sartre et 'L'Être et le Néant'."
    ],
    correct: 2,
    explanation: `Carnap prend Heidegger comme cible paradigmatique de la métaphysique verbale et creuse. Il cite des passages sur le « rien » (das Nichts) pour montrer comment des mots sensés (« rien » comme négation) sont assemblés en violation de la syntaxe logique (« le rien néantit ») pour produire des pseudo-énoncés qui ont l'apparence de la profondeur mais sont vides de signification vérifiable. Cette attaque fonde une opposition durable entre philosophie « analytique » et philosophie « continentale ».
Exemple : Carnap analyse « Le rien néantit » comme une construction illogique similaire à « César est un nombre premier », où des catégories différentes (un nom propre et un concept mathématique) sont mêlées de façon absurde.`
  },
  // Question n°36
  {
    question: "Quelle est la « différence ontologique » selon Heidegger ?",
    answers: [
      "La différence entre le bien et le mal.",
      "La différence entre l'apparence et la réalité.",
      "La différence, oubliée par la métaphysique, entre l'étant (ce qui est) et l'être (le fait d'être, le il y a)."
    ],
    correct: 3,
    explanation: `Heidegger accuse toute la métaphysique occidentale d'avoir « oublié l'être » (Seinsvergessenheit) pour ne s'être intéressée qu'aux étants, c'est-à-dire aux choses, aux entités présentes. L'être n'est pas un étant suprême (comme Dieu), mais le processus ou l'événement qui permet aux étants d'apparaître. La tâche de la pensée est de se réapproprier cette question de l'être, ce qui nécessite de rompre avec le langage conceptuel traditionnel et de se tourner vers la poésie.
Exemple : Dans la phrase « Au bois, il y a un oiseau » (Rimbaud), « l'oiseau » et « le bois » sont des étants. « Il y a » est l'expression même de l'être, de la donation, de la présence anonyme qui rend possible l'apparition de tout étant.`
  },
  // Question n°37
  {
    question: "Pourquoi Heidegger considère-t-il que la poésie est essentielle pour penser l'être ?",
    answers: [
      "Parce qu'elle est plus belle que la prose philosophique.",
      "Parce qu'elle est accessible à tous.",
      "Parce que le langage est la « demeure de l'être » et que la parole poétique, en déployant le langage de manière créatrice, laisse advenir l'être d'une manière que la rationalité technique et métaphysique a oblitérée."
    ],
    correct: 3,
    explanation: `Face à la domination du langage calculant et instrumental de la science et de la technique, la poésie représente pour Heidegger un autre usage du langage, un « dire » qui ne vise pas à expliquer ou à dominer, mais à dévoiler, à laisser être. Le poète écoute et recueille la parole de l'être. Ainsi, pour accéder à la question de l'être, la philosophie doit abandonner la méthode scientifique et suivre les « chemins qui ne mènent nulle part » de la pensée poétique.
Exemple : Heidegger consacre de nombreuses études au poète Hölderlin, voyant en lui le « poète des poètes » qui nomme le sacré et interroge la demeure de l'homme sur terre, tâche fondamentale à l'époque de la « détresse » provoquée par l'oubli de l'être.`
  },
  // Question n°38
  {
    question: "Quelle expérience concrète Alain Finkielkraut évoque-t-il pour illustrer la notion d'« il y a » (être impersonnel) ?",
    answers: [
      "L'expérience du sublime face à la montagne.",
      "L'expérience de la peur dans le noir de l'enfant, qui appréhende non un objet menaçant mais l'existence anonyme et continue, le « bruissement impalpable de la nuit ».",
      "L'expérience de l'amour passionnel."
    ],
    correct: 2,
    explanation: `Finkielkraut, commentant Levinas (lui-même inspiré par Heidegger), décrit la frayeur enfantine comme la révélation non d'un étant terrifiant, mais de l'être en tant que tel, dans son impersonnalité écrasante. Dans la chambre vide et noire, « il n'y a rien, sinon l'être en général ». Cette expérience du « il y a » est celle d'une présence sans visage, d'un murmure continu de l'existence dont on ne peut s'extraire. Elle montre comment la question de l'être peut être une expérience vécue, non un abstrait conceptuel.
Exemple : Le sentiment d'angoisse (Heidegger) ou d'horreur devant le « il y a » (Levinas) n'a pas d'objet déterminé ; c'est l'horreur de l'existence pure, de se sentir « absorbé par cette existence sans contours ».`
  },
  // Question n°39
  {
    question: "En quoi la peinture d'Édouard Manet, avec 'Le Déjeuner sur l'herbe' (1863), rompt-elle avec la peinture académique ?",
    answers: [
      "Par son sujet religieux.",
      "Par son absence de signification narrative évidente et son traitement de la peinture comme arrangement de couleurs et de formes plutôt que comme illustration d'une histoire.",
      "Par son utilisation exclusive du noir et blanc."
    ],
    correct: 2,
    explanation: `Manet rompt avec la doctrine académique 'Ut pictura poesis' qui veut que la peinture raconte une histoire édifiant comme la poésie. Son tableau est énigmatique : qui sont ces personnes ? Que font-ils ? Pourquoi ce nu contrastant avec des hommes habillés ? Comme l'écrit Zola, le sujet n'est qu'un « prétexte à peindre ». L'attention se porte sur les « masses franches », les « oppositions vives », la « tache blanche » sur le fond vert. La peinture devient silencieuse, elle montre plus qu'elle ne raconte.
Exemple : Contrairement à 'Napoléon en Égypte' de Gérôme (même année), qui illustre un épisode historique clair, 'Le Déjeuner' laisse le spectateur déconcerté, obligé de regarder la peinture pour elle-même, et non pour ce qu'elle représente.`
  },
  // Question n°40
  {
    question: "Quelle affirmation d'Emile Zola résume le mieux la rupture opérée par Manet ?",
    answers: [
      "« Le sujet pour eux [les peintres comme Manet] est un prétexte à peindre. »",
      "« La peinture doit éduquer le peuple. »",
      "« Seul le réalisme est vrai. »"
    ],
    correct: 1,
    explanation: `Zola, défenseur de Manet, identifie le cœur de la révolution moderne : la primauté de la peinture sur le sujet. Ce qui importe, ce n'est pas l'histoire racontée (un déjeuner), mais la manière dont elle est peinte – le traitement de la lumière, la composition, le rapport des couleurs. Cela libère la peinture de sa fonction illustrative ou morale et ouvre la voie à l'autonomie de l'art moderne, où la forme devient le contenu principal. C'est une rupture avec plusieurs siècles de tradition.
Exemple : Dans un tableau classique d'histoire, on admire d'abord le geste héroïque ou l'expression tragique ; chez Manet, on admire d'abord la façon dont la robe blanche fait tache sur l'herbe, ou comment la perspective est aplatie.`
  },
  // Question n°41
  {
    question: "Que signifie l'idée de « faire monde » dans un contexte où « la croyance individuelle prévaut sur la connaissance universelle » ?",
    answers: [
      "Il faut imposer une vérité universelle par la force.",
      "Il faut renoncer à tout projet commun et vivre dans le relativisme absolu.",
      "Il faut inventer des formes de délibération et de coexistence qui parviennent à articuler les singularités sans les nier, pour construire un espace commun malgré la pluralité des certitudes."
    ],
    correct: 3,
    explanation: `C'est le défi politique majeur des sociétés contemporaines pluralistes. Si chacun est ancré dans ses certitudes (religieuses, culturelles, idéologiques) et que l'on ne peut plus s'appuyer sur une raison universelle indiscutée, comment créer du commun ? La réponse ne peut être ni l'imposition autoritaire d'une norme, ni le renoncement à toute norme (ce qui mènerait à la guerre de tous contre tous). Il s'agit de trouver des procédures, des institutions et une culture du débat qui permettent le « vivre-ensemble » dans le désaccord.
Exemple : Les démocraties modernes tentent de répondre à ce défi par l'État de droit, la laïcité, la protection des libertés individuelles et l'organisation d'élections et de débats publics, sans garantir pour autant un consensus sur les valeurs ultimes.`
  },
  // Question n°42
  {
    question: "Pourquoi la crise écologique constitue une rupture « sans précédent historique » ?",
    answers: [
      "Parce qu'elle est la première crise économique mondiale.",
      "Parce qu'elle est la première guerre pour des ressources.",
      "Parce qu'elle met en péril, à l'échelle globale et pour la première fois, les conditions naturelles d'existence de l'humanité elle-même, par l'action de l'humanité."
    ],
    correct: 3,
    explanation: `Les crises passées (guerres, famines, épidémies) étaient localisées ou avaient des causes externes. La crise écologique actuelle est systémique, globale, et causée par le modèle de développement industriel de l'humanité tout entière. Elle ne menace pas tel ou tel groupe, mais les équilibres biosphériques qui rendent la vie humaine possible. Cela constitue une rupture qualitative avec l'idée même d'un progrès linéaire et place l'humanité face à une responsabilité et une vulnérabilité inédites.
Exemple : Le changement climatique anthropique, avec ses effets en cascade (fonte des glaces, montée des eaux, événements extrêmes), représente une menace existentielle pour de nombreuses civilisations côtières et pour la sécurité alimentaire mondiale, à une échelle jamais vue.`
  },
  // Question n°43
  {
    question: "Selon la psychanalyse, quelle conséquence a la découverte de l'inconscient sur le projet de « faire monde » ?",
    answers: [
      "Elle le facilite, car elle fournit une science exacte de l'âme humaine.",
      "Elle le complique, car l'homme n'étant pas premièrement un être de raison, la construction d'un monde commun sur des bases purement rationnelles devient problématique.",
      "Elle n'a aucune conséquence, car la politique et la psyché sont séparées."
    ],
    correct: 2,
    explanation: `Si une partie déterminante de la vie psychique échappe à la conscience et à la maîtrise rationnelle (pulsions, refoulements, complexes), alors les individus ne sont pas les sujets transparents et rationnels que supposent certains modèles politiques (comme le contrat social). Les passions, les haines irrationnelles, les identifications collectives inconscientes deviennent des forces politiques majeures. « Faire monde » doit donc prendre en compte cette dimension obscure et conflictuelle de la nature humaine.
Exemple : L'analyse des mécanismes de foule, de la propagande ou du charisme des leaders politiques bénéficie grandement des apports de la psychanalyse pour comprendre les adhésions collectives qui ne relèvent pas du calcul rationnel d'intérêt.`
  },
  // Question n°44
  {
    question: "En quoi la critique de la métaphysique par le Cercle de Vienne est-elle aussi une critique de la philosophie traditionnelle dans son ensemble ?",
    answers: [
      "Elle nie toute valeur à la philosophie antérieure.",
      "Elle réduit la philosophie légitime à n'être qu'une « logique de la science », une analyse du langage scientifique, et relègue les questions de valeurs, de sens ou d'être à l'expression de simples sentiments.",
      "Elle propose de remplacer la philosophie par la théologie."
    ],
    correct: 2,
    explanation: `Pour Carnap et le positivisme logique, la philosophie n'a de légitimité que comme activité auxiliaire de la science (clarification des concepts, analyse des méthodes). Tout ce qui, dans la tradition philosophique, prétendait dire quelque chose sur le monde en dehors du cadre scientifique (l'éthique normative, la métaphysique, la philosophie de l'histoire) est disqualifié comme non cognitif. La philosophie se voit ainsi amputée de la plus grande partie de ses ambitions traditionnelles, au profit d'une conception étroite de la rationalité.
Exemple : Les grandes questions « Comment vivre ? », « Qu'est-ce que le bien ? », « Quel est le sens de la vie ? » ne reçoivent plus, dans ce cadre, de réponse philosophique « vraie », mais sont renvoyées à des choix personnels, à l'art ou à la religion.`
  },
  // Question n°45
  {
    question: "Comment l'art contemporain, en cherchant à désacraliser l'art et à le sortir des musées, peut-il être vu comme une continuité avec l'art antique ?",
    answers: [
      "Parce qu'il utilise les mêmes matériaux que l'art antique.",
      "Parce que l'art antique était aussi un objet utilitaire et technique intégré à la vie de la cité, et non un objet sacralisé dans un lieu dédié à la seule contemplation.",
      "Parce qu'il représente les mêmes dieux et héros."
    ],
    correct: 2,
    explanation: `Cette idée propose un renversement dialectique. L'art classique (du 17e au 19e siècle) avait souvent sacralisé l'œuvre, l'isolant dans le musée ou le palais comme objet de culte esthétique. L'art contemporain, par des performances, des installations in situ ou l'art urbain, cherche à réintégrer l'art dans l'espace public et le quotidien. En cela, il retrouve une fonction de l'art antique (grec, par exemple) qui était mêlé à l'architecture, aux rituels religieux et à la vie politique de la cité, sans être autonome.
Exemple : Les fresques murales dans l'espace public ou les performances dans la rue cherchent à créer une rencontre imprévue avec l'art, rompant avec le rituel de la visite au musée, à la manière dont un citoyen athénien croisait des sculptures en allant à l'agora.`
  },
  // Question n°46
  {
    question: "Quelle est la relation entre la phrase de Marx (« Les philosophes n'ont fait qu'interpréter le monde ; il faut désormais le transformer ») et le projet de la phénoménologie ?",
    answers: [
      "La phénoménologie s'y oppose, voulant seulement décrire le monde.",
      "La phénoménologie la rejette car elle est matérialiste.",
      "La phénoménologie partage, dans une certaine mesure, cette volonté de rompre avec la philosophie purement spéculative pour atteindre une connaissance plus rigoureuse, voire transformative, bien que par des moyens différents (description des structures de l'expérience)."
    ],
    correct: 3,
    explanation: `Husserl aussi veut rompre avec la philosophie comme simple interprétation ou construction de systèmes. Il veut une philosophie « scientifique » et rigoureuse qui parte des « choses mêmes ». Si son but n'est pas la transformation révolutionnaire au sens de Marx, il s'agit bien d'une transformation de notre rapport au monde par la compréhension radicale de ses fondements dans la conscience. La phénoménologie entend fournir un sol ferme à partir duquel une transformation authentique pourrait éventuellement s'envisager.
Exemple : En décrivant comment nous sommes toujours déjà « au monde », la phénoménologie peut changer notre manière d'envisager notre responsabilité dans ce monde, ouvrant potentiellement la voie à une transformation éthique et existentielle.`
  },
  // Question n°47
  {
    question: "Pourquoi le « je sais » a-t-il un sens problématique selon Wittgenstein ?",
    answers: [
      "Parce qu'on ne peut jamais être certain de rien.",
      "Parce que cette expression n'a de sens que lorsqu'elle est prononcée par une personne singulière, dans une forme de vie particulière, et qu'il est difficile d'en faire l'expression objective de ce qui nous est commun.",
      "Parce que c'est une expression grammaticalement incorrecte."
    ],
    correct: 2,
    explanation: `Wittgenstein souligne l'asymétrie entre la première et la troisième personne. Dire « Il sait qu'il a mal » a un sens vérifiable (comportement, paroles). Mais dire « Je sais que j'ai mal » est étrange, car la certitude de ma propre douleur n'est pas un « savoir » au sens d'une connaissance que je pourrais vérifier ou douter ; c'est une certitude immédiate, grammaticale. Cela montre la difficulté de fonder un savoir universel et objectif sur des expressions qui sont d'abord ancrées dans l'expérience subjective et dans des jeux de langage.
Exemple : L'affirmation « Je sais que je suis conscient » est une tautologie vide, car la conscience n'est pas un objet de connaissance pour soi, mais la condition même de toute connaissance. En revanche, « Il est conscient » est une hypothèse que je peux inférer de son comportement.`
  },
  // Question n°48
  {
    question: "Que signifie « laisser sa raison inquiète » selon Bachelard ?",
    answers: [
      "Être constamment anxieux et pessimiste.",
      "Exercer une vigilance critique permanente, être aux aguets, refuser la tranquillité dogmatique de l'opinion arrêtée.",
      "Ne jamais se fier à la raison et lui préférer l'intuition."
    ],
    correct: 2,
    explanation: `C'est l'attitude contraire de l'esprit de système ou de l'opinion figée. La science, pour Bachelard, n'avance pas par accumulation pacifique de vérités, mais par des ruptures, des révolutions qui bouleversent les cadres de pensée établis. L'esprit scientifique doit donc être en état d'alerte permanent, prêt à remettre en cause ses certitudes les plus ancrées face à l'anomalie expérimentale ou à la contradiction logique. Cette « inquiétude » est la dynamique même du progrès de la connaissance.
Exemple : Le physicien qui découvre un résultat expérimental inexplicable dans le cadre théorique actuel ne doit pas le rejeter, mais laisser cette anomalie « inquiéter » sa raison jusqu'à ce qu'elle oblige à une refonte des concepts, comme cela a été le cas avec la théorie de la relativité ou la mécanique quantique.`
  },
  // Question n°49
  {
    question: "Quel est le principal problème soulevé par la thèse libertarienne de Nozick sur l'État minimal ?",
    answers: [
      "Son inefficacité économique.",
      "Le fait que le règne du « chacun pour soi » qu'elle promeut pourrait être celui de l'injustice sociale et de l'accroissement des inégalités.",
      "Son incompatibilité avec toute forme de démocratie."
    ],
    correct: 2,
    explanation: `La critique classique adressée au libertarianisme est qu'en réduisant l'État à un simple gardien des contrats et de la propriété, il laisse le champ libre aux dynamiques du marché qui, laissées à elles-mêmes, tendent à produire et à amplifier les inégalités de richesses et de pouvoir. Sans mécanismes de redistribution ou de régulation, ces inégalités peuvent devenir si grandes qu'elles vident de son sens l'égalité formelle des droits et des chances. La « justice » se réduirait alors à la liberté des transactions, sans considération pour leurs effets sociaux.
Exemple : Dans une société purement nozickienne, un héritier oisif posséderait légitimement une fortune colossale sans rien produire, tandis qu'un travailleur talentueux mais né dans la pauvreté pourrait peiner à survivre, sans que l'État n'ait le droit d'intervenir pour corriger cette inégalité de départ par l'impôt.`
  },
  // Question n°50
  {
    question: "Comment la notion de « seuil » permet-elle de dépasser l'opposition binaire rupture/continuité ?",
    answers: [
      "Elle nie l'existence de toute rupture.",
      "Elle affirme que tout n'est que continuité.",
      "Elle suggère qu'un changement qualitatif peut survenir de manière progressive, par accumulation de modifications quantitatives, sans qu'il y ait un moment de rupture clairement identifiable."
    ],
    correct: 3,
    explanation: `Le concept de seuil, emprunté à la biologie ou à la chimie (point de bascule), permet de penser des transformations historiques ou sociales qui ne sont pas des événements soudains (comme une révolution), mais le résultat d'une lente évolution qui finit par changer la nature d'un système. On est dans la continuité jusqu'à un certain point, puis, une fois un seuil franchi, on entre dans un nouveau régime. Cela évite de chercher une « date » précise de rupture et rend compte de processus complexes.
Exemple : On ne peut pas dater précisément le début de l'Anthropocène (ère géologique marquée par l'impact humain). C'est le franchissement d'un seuil critique dans la concentration de CO2, la perte de biodiversité, etc., résultant de plusieurs siècles d'industrialisation.`
  },
  // Question n°51
  {
    question: "Quel est le statut des jugements de valeur (éthique, esthétique) dans la perspective du Cercle de Vienne ?",
    answers: [
      "Ce sont des jugements synthétiques a priori.",
      "Ce sont des propositions factuelles comme les autres, vérifiables par l'expérience.",
      "Ce sont des expressions d'émotions ou d'attitudes, dénuées de contenu cognitif et de valeur de vérité."
    ],
    correct: 3,
    explanation: `Pour les positivistes logiques, une proposition comme « Le meurtre est mal » n'exprime pas un fait objectif que l'on pourrait vérifier, mais une désapprobation émotionnelle, équivalente à dire « Meurtre, bouh ! » ou à émettre un cri de réprobation. De même, « Cette musique est belle » exprime un plaisir subjectif. Ces énoncés ne sont ni vrais ni faux ; ils relèvent de la sphère non-cognitive de la vie. La philosophie ne peut donc pas fonder rationnellement des valeurs, elle ne peut qu'analyser le langage des valeurs.
Exemple : Le désaccord entre quelqu'un qui dit « L'avortement est immoral » et un autre qui dit « L'avortement est un droit » n'est pas, selon cette vue, un désaccord sur des faits, mais un conflit d'attitudes ou d'émotions, qui ne peut être résolu par l'argumentation logique ou l'observation.`
  },
  // Question n°52
  {
    question: "En quoi l'art de Patricia Piccinini, qui cherche « délibérément la laideur », s'inscrit-il dans la critique de l'esthétique traditionnelle ?",
    answers: [
      "Il prouve qu'elle a tort, car ses œuvres sont en fait très belles.",
      "Il refuse la catégorie du beau comme critère essentiel de l'art, lui préférant l'exploration d'idées (hybridation, biotechnologie, monstruosité) qui peuvent provoquer le dégoût ou l'inquiétude.",
      "Il veut simplement choquer pour attirer l'attention."
    ],
    correct: 2,
    explanation: `En créant des créatures hyperréalistes, hybrides et souvent inquiétantes, Piccinini questionne les frontières (entre humain/animal, naturel/artificiel, normal/monstrueux) bien plus qu'elle ne cherche à produire un plaisir esthétique harmonieux. Son travail est conceptuel : il interroge notre rapport au vivant à l'ère du génie génétique et des prothèses. La « laideur » ou l'étrangeté devient un moyen de rompre avec l'attente de beauté et d'ouvrir une réflexion éthique et philosophique.
Exemple : Ses sculptures d'enfants-porcs ou d'humains avec des excroissances interrogent les peurs et les fantasmes liés aux manipulations biologiques, déplaçant la question de « Est-ce beau ? » à « Qu'est-ce que cela dit de nos désirs et de nos peurs face à la technique ? ».`
  },
  // Question n°53
  {
    question: "Quel rôle joue l'angoisse (Angst) dans la philosophie de Heidegger ?",
    answers: [
      "C'est une maladie psychologique à soigner.",
      "C'est un sentiment négatif à éviter à tout prix.",
      "C'est le sentiment qui révèle à l'être-là (Dasein) sa liberté, sa finitude (être-pour-la-mort) et le retire de l'oubli de soi dans le « on », l'ouvrant ainsi à la possibilité d'une existence authentique."
    ],
    correct: 3,
    explanation: `Contrairement à la peur qui a un objet déterminé (je crains un chien), l'angoisse est sans objet précis ; on est anxieux « de rien ». Pour Heidegger, cette absence d'objet révèle que ce qui angoisse, c'est l'être-au-monde lui-même, et plus précisément la possibilité la plus propre du Dasein : sa mort. L'angoisse arrache l'individu à la banalité du « on » et le confronte à sa propre existence comme projet à assumer dans sa finitude. Elle est donc le vecteur d'une possible authenticité.
Exemple : La crise existentielle, où tout semble perdre son sens habituel et où l'on se sent étranger au monde, peut être interprétée comme une expérience d'angoisse au sens heideggérien, qui, si elle est assumée, peut conduire à une reconfiguration authentique de son existence.`
  },
  // Question n°54
  {
    question: "Pourquoi associer le retour de la crinoline dans la mode (2025) à une recherche de continuité ?",
    answers: [
      "Parce que la crinoline est un vêtement purement fonctionnel.",
      "Parce que les couturiers puisent dans un passé idéalisé et sécurisant (le 19e siècle) pour imaginer l'avenir, cherchant un ancrage dans l'histoire face aux incertitudes du présent.",
      "Parce que c'est une preuve que la mode ne change jamais."
    ],
    correct: 2,
    explanation: `La mode est un lieu privilégié d'observation des rapports au temps. Le retour d'une silhouette aussi marquée historiquement que la crinoline (symbole d'un ordre social hiérarchique et d'une certaine image de la féminité) n'est pas un simple pastiche, mais souvent une réinterprétation, une citation qui dialogue avec le présent. Cela peut exprimer une nostalgie, une critique du présent par le passé, ou le désir de réactiver des codes esthétiques perçus comme stables dans un monde fluide. C'est une forme d'« hantologie » vestimentaire.
Exemple : Dans un contexte de crise et d'incertitude, les styles rétro ou néo-vintage connaissent souvent un regain, offrant un sentiment de familiarité et de permanence face à un futur anxiogène.`
  },
  // Question n°55
  {
    question: "Que signifie l'idée de Geworfenheit (déréliction) chez Heidegger ?",
    answers: [
      "Le fait d'être choisi par Dieu.",
      "Le fait que l'être-là est « jeté » dans le monde, dans une situation historique, familiale et sociale qu'il n'a pas choisie, et à partir de laquelle il doit pourtant se projeter.",
      "Le fait de pouvoir tout choisir librement dès la naissance."
    ],
    correct: 2,
    explanation: `La déréliction est le fait concret de notre existence : nous nous trouvons toujours déjà dans un monde, un corps, une langue, une époque, avec des possibilités qui ne dépendent pas entièrement de nous. Contrairement à un sujet cartésien abstrait, l'être-là est toujours en situation. L'authenticité ne consiste pas à nier cette facticité, mais à l'assumer comme le point de départ à partir duquel nous pouvons nous projeter librement vers nos possibilités (le « projet »). Nous sommes un « souci » tourné vers le futur à partir d'un passé subi.
Exemple : Je ne choisis pas ma nationalité, ma langue maternelle ou la classe sociale dans laquelle je nais. Ces éléments de ma « déréliction » conditionnent profondément mes possibilités, mais ne déterminent pas entièrement ce que je peux en faire. L'authenticité est de prendre en charge cette situation sans la subir passivement.`
  },
  // Question n°56
  {
    question: "Quelle est la différence entre un jugement analytique et un jugement synthétique selon Kant, reprise par Carnap ?",
    answers: [
      "L'analytique est basé sur l'expérience, le synthétique sur la raison.",
      "L'analytique est subjectif, le synthétique est objectif.",
      "Dans un jugement analytique, le prédicat est contenu dans le sujet (ex: « Tous les corps sont étendus »). Dans un jugement synthétique, le prédicat ajoute une information au sujet (ex: « Tous les corps sont pesants »)."
    ],
    correct: 3,
    explanation: `Cette distinction est fondamentale pour la philosophie des sciences. Les jugements analytiques sont vrais a priori, par définition, et n'étendent pas notre connaissance (tautologies). Les jugements synthétiques étendent notre connaissance, mais ils peuvent être a posteriori (fondés sur l'expérience) ou, selon Kant, a priori (comme les principes des mathématiques pures). Carnap reprend cette distinction pour les appliquer à sa théorie du langage : les énoncés analytiques/tautologiques d'un côté, les énoncés synthétiques/empiriques de l'autre.
Exemple : « Un triangle a trois angles » est analytique (par définition). « La somme des angles d'un triangle est égale à 180° » est synthétique a priori pour Kant (il ajoute une connaissance géométrique). « Ce triangle est rouge » est synthétique a posteriori (nécessite l'observation).`
  },
  // Question n°57
  {
    question: "Quelle est l'importance du concept d'« intentionnalité » chez Husserl ?",
    answers: [
      "Elle désigne l'intention morale de nos actions.",
      "Elle signifie que toute conscience est toujours conscience « de » quelque chose, qu'elle vise un objet transcendant, qu'elle est tournée vers le monde.",
      "Elle explique que nous avons toujours l'intention de bien faire."
    ],
    correct: 2,
    explanation: `L'intentionnalité (empruntée à Brentano) est la propriété fondamentale de la conscience selon Husserl. Elle rompt avec l'idée d'une conscience close sur elle-même (solipsisme). La conscience n'est pas un contenant avec des représentations à l'intérieur, mais un flux qui se dirige vers des objets. Cela permet de dépasser l'opposition sujet/objet : l'objet n'est pas « dans » la conscience, mais il est visé par elle. Le monde est corrélat de la conscience intentionnelle. C'est le fondement de la phénoménologie comme description de l'expérience vécue.
Exemple : Quand je perçois une maison, ma conscience n'est pas occupée par une image mentale de la maison, mais elle est dirigée vers la maison elle-même, telle qu'elle m'apparaît sous différents aspects (façade, toit, etc.) dans un acte perceptif unifié.`
  },
  // Question n°58
  {
    question: "Pourquoi dire que la performance de Marina Abramović et Ulay 'Relation in Time' (assis dos à dos pendant 18h) est une œuvre d'art ?",
    answers: [
      "Parce qu'ils sont des artistes célèbres.",
      "Parce que c'est esthétiquement beau à regarder.",
      "Parce que l'action elle-même, l'épreuve de la durée et de la présence mutuelle dans l'immobilité, devient l'œuvre, interrogeant les limites du corps, du temps et de la relation humaine."
    ],
    correct: 3,
    explanation: `Cette performance n'a pas d'objet à vendre. Sa valeur artistique réside dans le défi physique et mental qu'elle représente, et dans la situation qu'elle crée pour les artistes et, indirectement, pour le public qui en connaît le protocole. Elle explore des thèmes comme la dépendance, la patience, la présence à l'autre dans l'absence de communication verbale ou visuelle. C'est une forme d'art qui privilégie l'expérience vécue et le concept sur la production d'un objet pérenne.
Exemple : L'œuvre invite à réfléchir sur la nature des relations humaines en dehors de l'action et du langage. Que reste-t-il quand on enlève tout ce qui fait habituellement une interaction ? La simple coprésence physique dans la durée devient alors le matériau même de l'œuvre.`
  },
  // Question n°59
  {
    question: "Quel est l'enjeu de la performance de Chris Burden 'Shoot' (1971) où il se fait tirer dessus au bras ?",
    answers: [
      "Faire un coup de publicité choquant.",
      "Banaliser le spectacle de l'horreur (en lien avec la guerre du Vietnam) et rendre la violence encore plus réelle, en mettant son propre corps en danger extrême.",
      "Tester les limites de la résistance humaine à la douleur."
    ],
    correct: 2,
    explanation: `Burden pousse à l'extrême la logique de la performance en faisant de son corps le lieu d'une violence réelle, non simulée. En se faisant blesser volontairement, il interroge la frontière entre l'art et la vie, entre le spectacle et l'événement traumatique. Dans le contexte de la télévision qui diffuse des images de guerre, il pose la question : quelle est la différence entre une violence vue à l'écran et une violence subie en direct dans une galerie ? L'art devient ici un acte de confrontation brutale avec le réel.
Exemple : En transformant une agression en « performance », Burden force le spectateur à une position inconfortable : est-il témoin d'un acte artistique ou d'un crime ? Cela met en crise la position passive et sécurisée du regardeur d'art.`
  },
  // Question n°60
  {
    question: "Comment le concept de « jeu de langage », développé par le second Wittgenstein, pourrait-il répondre aux difficultés de « faire monde » ?",
    answers: [
      "En imposant un seul jeu de langage à toute la société.",
      "En montrant que la signification des mots et des règles émerge de leur usage dans des « formes de vie » partagées. Pour faire monde, il s'agirait donc de participer à des jeux de langage communs ou d'en inventer de nouveaux qui permettent l'intercompréhension, sans nécessairement partager toutes les mêmes certitudes fondamentales.",
      "En prouvant que toute communication est impossible."
    ],
    correct: 2,
    explanation: `Dans 'Investigations philosophiques', Wittgenstein abandonne l'idée d'un langage parfaitement logique pour observer la diversité des usages du langage dans la vie sociale (donner un ordre, raconter une blague, prier, décrire...). Chaque usage constitue un « jeu de langage » avec ses règles internes. « Faire monde » pourrait alors consister à maîtriser suffisamment les jeux de langage de la délibération politique, du droit, de la négociation, pour pouvoir coexister et coopérer malgré des différences profondes, en reconnaissant la légitimité de différents jeux.
Exemple : Dans un débat démocratique, un scientifique, un religieux et un artiste participent à des jeux de langage différents (empirique, révélé, expressif). L'enjeu est de créer un méta-jeu (le débat public) avec ses règles (écoute, argumentation, vote) qui permette une traduction ou une articulation entre ces langages sans les réduire à un seul.`
  },
  // Question n°61
  {
    question: "En quoi la figure de Marcel Duchamp est-elle une « charnière » selon Joseph Kosuth ?",
    answers: [
      "Elle marque la fin de la peinture.",
      "Elle représente le passage de l'art comme apparence décorative à l'art comme idée, ouvrant la voie à l'art conceptuel.",
      "Elle symbolise le retour à l'artisanat."
    ],
    correct: 2,
    explanation: `Pour Kosuth, avec Duchamp et son ready-made ('Fontaine', l'urinoir), l'art cesse d'être principalement une question de savoir-faire, de beauté ou d'expression pour devenir une question de définition et de contexte. L'œuvre réside dans le geste de choix, de désignation et de présentation de l'objet. Après Duchamp, toute œuvre d'art est fondamentalement conceptuelle, car elle pose la question « Qu'est-ce que l'art ? ». L'art devient une activité de réflexion sur ses propres conditions de possibilité.
Exemple : En exposant un urinoir manufacturé dans une galerie et en le signant « R. Mutt », Duchamp ne créait pas un objet beau, mais il créait une proposition : « Cet objet peut être considéré comme une œuvre d'art ». L'œuvre, c'est cette proposition elle-même.`
  },
  // Question n°62
  {
    question: "Quelle est la signification de l'œuvre 'La Nona Ora' de Maurizio Cattelan (le pape écrasé par une météorite) ?",
    answers: [
      "Une critique anticléricale violente.",
      "Une célébration de la foi du pape.",
      "Une image surréaliste et provocante qui met en scène la chute d'une autorité sacrée (le pape) par un événement absurde et contingent (la météorite), interrogeant la vulnérabilité du pouvoir et des institutions."
    ],
    correct: 3,
    explanation: `Cattelan est connu pour son humour noir et ses mises en scène subversives. Ici, il représente le souverain pontife, symbole d'une autorité spirituelle et temporelle millénaire, terrassé par un objet banal et aléatoire. L'œuvre ne se réduit pas à une simple provocation ; elle peut être lue comme une métaphore de la fragilité de toutes les autorités face au hasard, à l'absurdité de l'existence, ou à la sécularisation du monde moderne. Elle opère une rupture avec le respect dû aux figures sacrées.
Exemple : En achetant et exposant une telle œuvre pour une somme faramineuse, le marché de l'art contemporain valide aussi cette provocation, montrant comment la transgression devient elle-même une valeur marchande dans le système artistique.`
  },
  // Question n°63
  {
    question: "Qu'est-ce que la « réduction eidétique » (eidétique venant de εἶδος, l'idée) chez Husserl ?",
    answers: [
      "Réduire le monde à des données économiques.",
      "Mettre entre parenthèses les éléments contingents de l'expérience pour accéder à l'essence (eidos) des phénomènes, à ce qui en fait un objet de tel type.",
      "Réduire la philosophie à la psychologie."
    ],
    correct: 2,
    explanation: `C'est une méthode pour passer de la description de faits particuliers à la saisie des essences universelles. Par exemple, à partir de l'expérience de différentes rougesurs, je peux, par une variation imaginative, faire abstraction des nuances particulières pour saisir l'essence « rouge » en général. Cette essence n'est pas une abstraction statistique, mais une structure invariante de l'expérience. Elle permet à la phénoménologie de viser une connaissance a priori et nécessaire des structures de la conscience.
Exemple : En observant différentes actions de « promettre », je peux, par réduction eidétique, décrire l'essence de l'acte de promesse : l'intention de s'engager, la communication de cette intention à autrui, la création d'une obligation, etc., indépendamment des contenus particuliers des promesses.`
  },
  // Question n°64
  {
    question: "Que signifie l'idée que « l'art est mort » avec l'art contemporain ?",
    answers: [
      "Que plus personne ne fait d'art.",
      "Que les notions traditionnelles d'œuvre, d'artiste, de beauté et de fonction de l'art sont mises en crise au point que l'on peut parler d'une fin de l'art au sens classique, et de la naissance de quelque chose d'autre qui en porte encore le nom.",
      "Que les musées vont tous fermer."
    ],
    correct: 2,
    explanation: `Cette formule, inspirée de Hegel, ne signifie pas la cessation de toute activité artistique, mais la fin d'un certain paradigme. L'art n'a plus de rôle assigné (représenter le divin, exprimer le beau, éduquer le public). Il est devenu autoréflexif, s'interrogeant sans cesse sur sa propre nature. L'œuvre peut être éphémère, l'artiste peut être un robot, la beauté peut être rejetée. L'« art » devient alors un terme fourre-tout pour des pratiques très hétérogènes, dont le seul point commun est de se situer dans le champ institutionnel de l'art.
Exemple : Quand un artiste expose un tas de détritus ou vit enfermé dans une cage, on ne peut plus juger ces œuvres avec les critères de la mimésis (imitation) ou de l'harmonie formelle. Il faut les comprendre comme des gestes, des concepts ou des critiques, ce qui représente une rupture radicale.`
  },
  // Question n°65
  {
    question: "Comment le mythe est-il utilisé au 20e siècle dans le théâtre, selon les exemples de Cocteau et Giraudoux ?",
    answers: [
      "Comme une fidèle reproduction des textes anciens pour éduquer le public.",
      "Comme un matériau à réinterpréter de manière critique et distanciée, pour parler du présent (la guerre, la fatalité, la politique) à travers des histoires connues de tous, en rompant avec le ton solennel antique.",
      "Comme un simple décor exotique."
    ],
    correct: 2,
    explanation: `La réécriture des mythes antiques permet un double mouvement : une continuité avec le patrimoine culturel européen, et une rupture par le traitement moderne qui en est fait. En désacralisant les héros (Œdipe, Hector), en les rendant vulgaires ou ironiques, les dramaturges font du mythe un miroir critique de leur époque. Le mythe, parce qu'il est supposé universel, devient le support idéal pour interroger des problèmes contemporains (la mécanique de la guerre, l'absurdité du destin, les rapports de pouvoir).
Exemple : Giraudoux utilise le conflit troyen, que tout le monde sait devoir finir par la guerre, pour démonter, dans les dialogues, les rhétoriques nationalistes et les lâchetés qui mènent aux conflits, offrant une tragédie de l'échec de la paix très actuelle en 1935.`
  },
  // Question n°66
  {
    question: "Pourquoi la « banane » de Maurizio Cattelan scotchée au mur est-elle devenue une œuvre d'art célèbre et chère ?",
    answers: [
      "Parce que c'est une sculpture extrêmement difficile à réaliser.",
      "Parce que le geste conceptuel (scotcher un fruit ordinaire au mur), le titre ('Comedian'), le contexte (la foire d'art de Miami) et l'institution du monde de l'art (galeries, collectionneurs) en font une œuvre, interrogeant la valeur, l'absurde et les codes du marché de l'art.",
      "Parce que les bananes sont naturellement belles."
    ],
    correct: 2,
    explanation: `Cette œuvre est un ready-made duchampien poussé à l'extrême par son caractère périssable et dérisoire. Son succès repose entièrement sur le dispositif institutionnel de l'art contemporain : l'autorité de l'artiste, la validation de la galerie, la médiatisation du geste, et finalement l'acte d'achat à un prix exorbitant. L'œuvre, plus que l'objet, est le commentaire sur le système artistique lui-même. Elle questionne : qu'est-ce qui donne de la valeur ? Jusqu'où peut aller l'absurde dans le marché de l'art ?
Exemple : Le fait qu'un entrepreneur ait mangé la banane lors d'une performance en 2024 a ajouté une couche à l'œuvre, transformant l'acte de destruction en continuation de la performance et en nouvel événement médiatique, prouvant que l'« œuvre » est bien le concept et son histoire, pas l'objet.`
  },
  // Question n°67
  {
    question: "Quel est le sens de la performance d'Orlan qui se fait poser des implants de silicone sur le visage en direct ?",
    answers: [
      "Promouvoir la chirurgie esthétique.",
      "Mettre en cause les critères de beauté normatifs et sexualisés, en faisant de son corps le support et le sujet de l'œuvre, transformant l'acte chirurgical en rituel artistique et critique.",
      "Devenir plus belle."
    ],
    correct: 2,
    explanation: `Orlan pratique un « art charnel » qui utilise la modification de son propre corps comme matériau. En se faisant opérer sous caméra, elle détourne la chirurgie esthétique, pratique normalement destinée à se conformer à des canons de beauté, en un acte de déconstruction de ces canons. Elle interroge la pression sociale sur le corps féminin, les frontières entre nature et culture, et la douleur comme expérience artistique. Son œuvre est une performance permanente, son corps devenant une œuvre en évolution.
Exemple : En choisissant des implants sur le front qui évoquent des bosses, elle renvoie à des représentations de la beauté dans l'art (comme les portraits de Léonard de Vinci), créant une beauté délibérément « monstrueuse » qui défie les standards.`
  },
  // Question n°68
  {
    question: "En quoi le travail de l'artiste Saburō Murakami (percer des écrans de papier) implique-t-il le spectateur ?",
    answers: [
      "Il lui demande de payer un ticket.",
      "Il fait du premier visiteur un participant actif à la création de l'œuvre, puisqu'il doit traverser les feuilles pour entrer, devenant ainsi l'« instrument » qui achève l'installation.",
      "Il lui distribue des feuilles d'or."
    ],
    correct: 2,
    explanation: `Cette œuvre, proche du mouvement Gutai japonais, brise la frontière passive entre l'œuvre et le spectateur. L'œuvre n'est pas achevée sans l'action du visiteur. En transperçant le papier, le visiteur vit une expérience physique (la résistance du papier, le bruit de la déchirure) et devient co-créateur de l'œuvre qui se modifie à chaque passage. Cela rompt avec la sacralisation de l'œuvre intouchable et fait de l'art un événement partagé et changeant.
Exemple : Chaque visiteur laisse une trace unique (la forme de la déchirure) de son passage, faisant de l'œuvre une accumulation de performances individuelles, une trace de la présence des corps.`
  },
  // Question n°69
  {
    question: "Que signifie l'affirmation de Kant : « Il n'est pas douteux que toutes nos connaissances ne commencent avec l'expérience » ?",
    answers: [
      "Que seule l'expérience compte, la raison est inutile.",
      "Que l'expérience est le point de départ temporel et matériel de toute connaissance, même si la raison y apporte ses structures a priori (espace, temps, catégories) pour l'organiser.",
      "Que nous naissons avec toutes les connaissances en nous."
    ],
    correct: 2,
    explanation: `Kant opère une synthèse entre empirisme et rationalisme. Il concède aux empiristes (Locke, Hume) que sans la stimulation des sens, notre faculté de connaître resterait vide. Mais il ajoute que l'expérience brute ne deviendrait jamais une connaissance organisée sans les structures a priori de la sensibilité (espace et temps) et de l'entendement (les catégories comme la causalité). L'expérience fournit le contenu, la raison fournit la forme. Toute connaissance est donc le produit de leur collaboration.
Exemple : Voir une boule de billard en frapper une autre est une expérience sensorielle. En dire « la première boule a causé le mouvement de la seconde » implique d'avoir appliqué la catégorie a priori de causalité à cette expérience pour en faire une connaissance intelligible.`
  },
  // Question n°70
  {
    question: "Quel est le sens de la performance de Michel Journiac 'Messe pour un corps' (1969) où il distribue une hostie faite de son sang ?",
    answers: [
      "Profaner l'Eucharistie par simple provocation blasphématoire.",
      "Représenter « l'archétype de la création » : l'homme se nourrissant de lui-même, interrogeant les rites religieux, la consommation du corps et les limites de l'art dans un geste radical qui mêle sacré et profane.",
      "Faire une démonstration culinaire."
    ],
    correct: 2,
    explanation: `Journiac pousse la logique de l'incarnation chrétienne (« Ceci est mon corps ») à son paroxysme littéral et charnel. En transformant le rituel eucharistique en un acte d'autoconsommation, il pose des questions sur l'identité, le sacrifice, et les tabous entourant le corps. Son geste est une performance extrême qui utilise les codes religieux pour créer un choc et une réflexion métaphysique. C'est un exemple d'art qui explore les frontières entre vie et mort, sacré et abject.
Exemple : Cette performance peut être vue comme une critique de la société de consommation qui « dévore » les individus, ou comme une méditation sur le cycle de la vie où la création nécessite une forme de destruction de soi.`
  },
  // Question n°71
  {
    question: "Pourquoi Heidegger reproche-t-il à la métaphysique traditionnelle d'avoir « oublié l'être » (Seinsvergessenheit) ?",
    answers: [
      "Parce qu'elle ne parle pas assez de Dieu.",
      "Parce qu'elle s'est toujours intéressée aux étants (les choses qui sont) en cherchant leur cause ou leur substance, sans jamais s'interroger sur le sens de l'« être » lui-même, sur le fait que les étants soient.",
      "Parce qu'elle est trop compliquée."
    ],
    correct: 2,
    explanation: `Selon Heidegger, depuis Platon, la philosophie a pris l'étant (l'essence, l'idée, la substance, Dieu) pour l'être. Elle a cherché l'étant suprême qui explique tous les autres, mais a manqué la question plus fondamentale : qu'est-ce que cela signifie « être » pour un étant ? L'être n'est pas un étant, mais l'événement ou le processus de dévoilement qui permet aux étants d'apparaître. Retrouver cette question, c'est la tâche d'une pensée qui rompt avec 2500 ans de tradition.
Exemple : Quand Aristote définit la substance (ousia, οὐσία) comme ce qui est en soi, il pense déjà à un étant (un substrat), et non à l'être comme tel. La métaphysique devient une « onto-théologie », une étude des étants les plus élevés.`
  },
  // Question n°72
  {
    question: "Quel est le sens politique de la pièce de Giraudoux 'La guerre de Troie n'aura pas lieu', au moment de son écriture ?",
    answers: [
      "Célébrer la montée des nationalismes en Europe.",
      "Servir de propagande pour le réarmement français.",
      "Dénoncer, à la veille de la Seconde Guerre mondiale, les mécanismes rhétoriques, les passions et les lâchetés qui rendent la guerre inévitable, malgré les efforts des pacifistes, et faire ainsi un plaidoyer désespéré pour la paix."
    ],
    correct: 3,
    explanation: `Écrite en 1935, alors que les tensions montent en Europe (réarmement de l'Allemagne nazie, crise éthiopienne), la pièce est une tragédie de la paix qui échoue. Elle montre que la guerre n'est pas une fatalité extérieure, mais le produit des discours nationalistes (Demokos), des calculs politiques, de l'honneur mal placé et de la lâcheté des foules. Le titre est ironique et tragique : tout le monde sait que la guerre de Troie a eu lieu, et le public de 1935 pressent qu'une nouvelle guerre est proche.
Exemple : Le personnage d'Hector, le héros pacifiste, échoue à convaincre parce que la logique de la vengeance, de l'honneur et la rhétorique guerrière sont plus fortes que la raison et le désir de paix.`
  },
  // Question n°73
  {
    question: "Quelle est la différence entre l'« être jeté » (Geworfenheit) et le « projet » (Entwurf) chez Heidegger ?",
    answers: [
      "L'être jeté est le passé subi, le projet est l'avenir choisi ; l'être-là authentique assume son être-jeté pour se projeter librement vers ses possibilités.",
      "L'être jeté est l'avenir, le projet est le passé.",
      "Ce sont deux termes synonymes."
    ],
    correct: 1,
    explanation: `L'existence humaine est cette tension dialectique. D'un côté, nous sommes « jetés » dans une facticité que nous n'avons pas choisie (notre naissance, notre famille, notre époque). De l'autre, nous sommes toujours en avant de nous-mêmes, nous nous « projetons » vers des possibilités, nous sommes un « pouvoir-être ». L'inauthenticité consiste à se réduire à son être-jeté (se définir par son passé, son milieu). L'authenticité consiste à prendre en charge cette facticité comme le sol à partir duquel on choisit son projet, en ayant conscience de sa finitude (être-pour-la-mort).
Exemple : Une personne née dans un milieu modeste (être-jeté) peut, de manière authentique, assumer cette origine sans honte ni ressentiment, et en faire la motivation d'un projet (devenir éducateur, militant, artiste) qui donne sens à sa situation, plutôt que de la subir comme une fatalité.`
  },
  // Question n°74
  {
    question: "En quoi la performance de Gina Pane 'je' (1972) explore-t-elle la relation entre l'individu et l'autre ?",
    answers: [
      "En dansant avec le public.",
      "En se plaçant sur le bord d'une fenêtre, entre espace privé (« je ») et espace public (« l'autre »), et en observant une famille dont la vie privée est diffusée, elle interroge les frontières entre intime et public, entre voyeurisme et spectacle.",
      "En criant le mot « je » très fort."
    ],
    correct: 2,
    explanation: `Pane, figure majeure de l'art corporel, utilise son corps comme outil d'analyse sociale. Ici, son corps fait office de seuil, de membrane entre deux espaces. D'un côté, le public qui la regarde. De l'autre, une famille dont elle observe la vie intime, rediffusée au public. Cette mise en abyme complexe questionne : qui regarde qui ? Qu'est-ce que la vie privée à l'ère des médias ? Le « je » de l'artiste est-il un observateur, un voyeur, un médium ? L'œuvre explore la construction de l'identité dans le regard d'autrui.
Exemple : Cette performance préfigure les questions soulevées par les émissions de téléréalité, où la frontière entre vie privée et spectacle public est volontairement brouillée, et où les individus se construisent en s'exposant au regard des autres.`
  },
  // Question n°75
  {
    question: "Que signifie l'idée que l'art contemporain a tué « l'artiste » au sens romantique du génie ?",
    answers: [
      "Que personne n'a plus de talent.",
      "Que la figure de l'artiste inspiré, maître de tout son processus créatif, est remise en cause par le travail en atelier, l'art conceptuel (où l'idée prime sur l'exécution), les performances éphémères, et même l'utilisation de robots ou d'algorithmes comme créateurs.",
      "Que les artistes sont tous morts physiquement."
    ],
    correct: 2,
    explanation: `Le mythe romantique de l'artiste-génie, habité par une inspiration divine et dépositaire d'un savoir-faire unique, est érodé par les pratiques contemporaines. L'artiste peut être un « faiseur de propositions » (Duchamp), un performeur dont le corps est le médium, un directeur d'atelier, ou un programmeur. L'œuvre peut être collective, aléatoire, ou générée par une machine. L'« auteur » devient une fonction plus qu'une personne singulière, et la création un processus souvent dépersonnalisé.
Exemple : Les œuvres générées par intelligence artificielle (comme les images de DALL-E ou Midjourney) posent avec acuité la question : qui est l'artiste ? Celui qui a écrit la requête (le « prompt »), les programmeurs de l'IA, l'IA elle-même, ou l'ensemble du système ?`
  },
  // Question n°76
  {
    question: "Pourquoi la phénoménologie de Husserl est-elle dite « transcendantale » ?",
    answers: [
      "Parce qu'elle dépasse la science.",
      "Parce qu'elle opère une réduction qui suspend la croyance au monde naturel pour se tourner vers les structures pures de la conscience constituante (l'ego transcendantal), qui sont la condition de possibilité de toute expérience d'un monde.",
      "Parce qu'elle est très difficile à comprendre."
    ],
    correct: 2,
    explanation: `L'adjectif « transcendantal » renvoie à Kant : il s'agit de l'étude des conditions de possibilité a priori de l'expérience. Husserl va plus loin en faisant de la conscience pure (l'ego transcendantal) le fondement absolu à partir duquel le monde se constitue comme phénomène. Après la réduction, je ne suis plus un homme psychologique dans le monde, mais la conscience pure pour laquelle un monde apparaît. La phénoménologie devient ainsi une science des essences de la subjectivité constituante.
Exemple : En pratiquant la réduction, je ne nie pas l'existence de la table devant moi, mais je suspends mon adhésion à cette existence pour analyser comment la « tabléité » se constitue dans mon flux de perceptions et de intentions.`
  },
  // Question n°77
  {
    question: "Quel est le rôle de la technique dans la modification du statut de l'œuvre d'art selon Walter Benjamin ?",
    answers: [
      "Elle le rend plus sacré.",
      "Elle détruit son « aura », c'est-à-dire son caractère unique, authentique et lié à un ici et maintenant ritualisé, en la rendant reproductible à l'infini et accessible au plus grand nombre.",
      "Elle n'a aucun rôle."
    ],
    correct: 2,
    explanation: `Benjamin analyse que la reproduction technique (photographie, cinéma, gravure) prive l'œuvre d'art de son « aura », cette distance respectueuse qui entourait l'original unique. Désormais, on peut avoir une copie de la 'Joconde' sur un mug ou un poster. Cela a deux conséquences majeures : démocratisation de l'art, mais aussi perte de sa valeur cultuelle et de son ancrage dans la tradition. L'art devient politique (au service de masses) et perd sa dimension rituelle et sacrée.
Exemple : Écouter un enregistrement de la 9e symphonie de Beethoven chez soi n'a pas la même « aura » que d'assister à sa création en 1824 à Vienne. L'expérience est désacralisée, décontextualisée, mais aussi potentiellement plus critique, car on peut l'écouter de manière répétée et analytique.`
  },
  // Question n°78
  {
    question: "Que cherche à montrer la performance de Chris Burden 'Trans-Fixed' (1974) où il se fait crucifier sur une Coccinelle ?",
    answers: [
      "Sa foi chrétienne.",
      "La supériorité des voitures allemandes.",
      "Une démystification de l'acte de sacrifice, en le transposant dans un contexte moderne (la rue, la voiture) et en le rendant absurde et spectaculaire, interrogeant le rapport entre le sacré, la violence et la société de consommation."
    ],
    correct: 3,
    explanation: `Burden réactive l'iconographie christique de la crucifixion, symbole ultime du sacrifice rédempteur, mais la greffe sur un objet du quotidien et de la mobilité moderne (une Volkswagen). La performance est brève, violente et dérisoire. Elle peut être lue comme une critique de la société qui transforme tout, même le sacrifice, en spectacle, ou comme une métaphore de l'individu crucifié sur l'autel de la technologie et de la vitesse. C'est un geste qui mélange sacré et profane pour créer un choc symbolique.
Exemple : En faisant rugir le moteur de la voiture pendant qu'il est crucifié, Burden associe le bruit industriel à l'agonie, créant une image puissante et ambiguë de la souffrance dans le monde moderne.`
  },
  // Question n°79
  {
    question: "Comment la phrase de Hegel « l'art est pour nous quelque chose du passé » doit-elle être comprise ?",
    answers: [
      "L'art a totalement disparu.",
      "L'art a atteint sa perfection dans le passé et on ne peut plus rien créer de nouveau.",
      "La « destination suprême » de l'art (être la forme sensible adéquate de l'Idée absolue) appartient au passé ; dans l'époque moderne de la pensée réflexive, l'art ne peut plus remplir cette fonction de la même manière, il doit évoluer ou être dépassé par la philosophie."
    ],
    correct: 3,
    explanation: `Pour Hegel, l'Esprit évolue à travers l'histoire. À l'époque grecque, la forme sensible de la sculpture était parfaitement adéquate pour exprimer l'idéal religieux. À l'époque romantique (moderne), l'Esprit est devenu trop intérieur, trop réflexif pour se satisfaire pleinement d'une manifestation sensible. L'art continue d'exister, mais sa fonction n'est plus centrale pour la compréhension de l'absolu ; c'est le rôle de la religion puis de la philosophie. Cette thèse est souvent interprétée comme annonciatrice des crises de l'art moderne.
Exemple : Pour Hegel, la philosophie de son temps (l'idéalisme allemand) permettait de comprendre conceptuellement ce que l'art grec ne faisait que montrer de manière intuitive. L'art devenait ainsi un « souvenir » plutôt qu'une nécessité actuelle.`
  },
  // Question n°80
  {
    question: "Quelle est la signification de l'épigraphe de l'article 6 de la DDHC ?",
    answers: [
      "Elle fonde le despotisme éclairé.",
      "Elle établit le principe méritocratique : l'accès aux emplois publics doit se faire selon la capacité, sans autre distinction que celle des vertus et des talents, principe que Rawls reprend dans sa théorie de la justice.",
      "Elle institue l'hérédité des charges."
    ],
    correct: 2,
    explanation: `Cet article incarne l'idéal des Lumières de rompre avec les privilèges de la naissance (Ancien Régime) pour fonder la société sur le mérite individuel. Rawls, dans 'Théorie de la justice', fait de l'« égalité équitable des chances » un de ses deux principes de justice. Les inégalités sociales et économiques ne sont justes que si les positions sont ouvertes à tous dans des conditions de juste égalité des chances. C'est une tentative de concilier liberté (carrière ouverte aux talents) et égalité (correction des handicaps sociaux).
Exemple : Un système éducatif gratuit et de qualité est souvent vu comme un moyen de mettre en œuvre ce principe, en donnant à chaque enfant, quelle que soit son origine, la chance de développer ses talents et de concourir pour les positions sociales élevées.`
  },
  // Question n°81
  {
    question: "Quelle critique peut-on adresser à la thèse de Nozick en citant Rawls ensuite ?",
    answers: [
      "Nozick a raison, Rawls a tort.",
      "La vision minimaliste de l'État de Nozick, en laissant les individus livrés à eux-mêmes, risque de perpétuer ou d'aggraver les injustices sociales, alors que Rawls propose un cadre pour une justice plus distributive et égalitaire.",
      "Rawls est un anarchiste comme Nozick."
    ],
    correct: 2,
    explanation: `La juxtaposition des deux penseurs met en lumière un débat central de la philosophie politique contemporaine : libéralisme libertarien vs libéralisme égalitaire. Nozick défend une justice procédurale (respect des droits de propriété et des contrats librement consentis). Rawls défend une justice substantielle qui doit corriger les inégalités qui ne sont pas méritées (handicap, naissance pauvre). La position de Nozick, en pratique, pourrait conduire à un monde de fortes inégalités considérées comme « justes » par simple respect de la liberté formelle.
Exemple : Pour Nozick, un magnat qui a légalement gagné sa fortune a un droit absolu sur elle. Pour Rawls, une telle fortune n'est juste que si elle résulte d'un système où les inégalités profitent aux plus défavorisés et où les chances étaient vraiment équitables pour tous au départ.`
  },
  // Question n°82
  {
    question: "Que signifie « l'esprit scientifique se forme en se réformant » selon Bachelard ?",
    answers: [
      "Il faut changer souvent de métier.",
      "La science progresse non par accumulation linéaire, mais par des ruptures, des révolutions qui obligent à réformer profondément les concepts et les méthodes, en luttant contre les obstacles épistémologiques issus de l'opinion commune.",
      "Les scientifiques doivent faire des réformes politiques."
    ],
    correct: 2,
    explanation: `Bachelard insiste sur le caractère discontinu et critique du progrès scientifique. Une découverte importante (la relativité, la mécanique quantique) ne vient pas compléter l'ancien savoir, mais le bouleverse, obligeant à réformer les catégories de pensée elles-mêmes. L'esprit scientifique n'est donc pas un esprit qui sait, mais un esprit qui sait qu'il doit douter de ses évidences, se purger de ses préjugés, et être prêt à une reconstruction complète de ses théories. La vérité scientifique est une « erreur rectifiée ».
Exemple : Le passage de la physique newtonienne à la physique einsteinienne n'a pas été un simple ajout, mais une refonte des concepts d'espace, de temps, de masse et de gravitation, obligeant les physiciens à abandonner des intuitions vieilles de plusieurs siècles.`
  },
  // Question n°83
  {
    question: "Comment l'exemple du « coq de Locke » illustre-t-il un obstacle épistémologique ?",
    answers: [
      "Le coq croit que le soleil se lève pour lui, faisant une généralisation abusive à partir d'une expérience répétée mais contingente.",
      "Le coq est un animal stupide.",
      "Locke aimait les animaux."
    ],
    correct: 1,
    explanation: `Locke utilise cette image pour critiquer l'induction naïve. Le coq, qui voit le soleil se lever chaque matin, finit par croire que c'est une loi de la nature. Mais un jour, le cuisinier lui tord le cou. L'habitude, si constante soit-elle, ne peut fonder une certitude scientifique. Bachelard reprend cette idée : l'« expérience première », l'observation immédiate et répétée, peut être un obstacle si on la prend pour une explication. La science doit construire ses objets et ses expériences, rompant avec l'évidence sensible.
Exemple : Pendant des millénaires, l'expérience première montrait que la Terre était plate et immobile. La science a dû rompre avec cette évidence pour construire l'héliocentrisme et la sphéricité de la Terre.`
  },
  // Question n°84
  {
    question: "Quelle est la vision de l'homme que propose Wittgenstein contre le cartésianisme ?",
    answers: [
      "L'homme est une machine.",
      "L'homme n'est pas d'abord un « je pense » solitaire et transparent, mais un être immergé dans des « formes de vie », des pratiques sociales et des jeux de langage qui fondent ses certitudes bien avant toute réflexion abstraite.",
      "L'homme est un ange déchu."
    ],
    correct: 2,
    explanation: `Contre le cogito cartésien (un sujet isolé qui doute de tout), Wittgenstein montre que notre rapport au monde est d'abord fait de certitudes pratiques et partagées. Je ne prouve pas que j'ai deux mains, je les utilise. Ces certitudes ne sont pas des connaissances inférentielles, mais le « substrat » de tous nos jeux de langage. L'homme est donc essentiellement un être social, dont la pensée même est modelée par la grammaire de la langue qu'il partage avec les autres. Le « je » émerge dans et par le langage.
Exemple : Un enfant apprend à compter, à nommer les couleurs, à obéir aux ordres, en participant à des activités sociales. Sa capacité à dire « je » et à penser de manière réflexive émerge bien après qu'il ait maîtrisé ces pratiques linguistiques de base.`
  },
  // Question n°85
  {
    question: "Pourquoi peut-on dire que l'art contemporain, en rompant avec l'art classique, renoue avec une certaine fonction de l'art antique ?",
    answers: [
      "Parce qu'il utilise le marbre.",
      "Parce qu'il cherche à sortir du musée et à réintégrer l'espace public et le quotidien, à la manière dont l'art grec était présent dans les temples, les agoras et les lieux de vie, avant la sacralisation muséale de la Renaissance.",
      "Parce qu'il ne représente que des dieux."
    ],
    correct: 2,
    explanation: `C'est l'idée d'un retour dialectique. L'art classique et moderne (de la Renaissance au 19e siècle) a souvent autonomisé l'œuvre, l'a isolée comme objet de contemplation esthétique désintéressée. L'art contemporain, par le street art, les performances, les installations in situ, veut briser cette « aura » muséale et rendre l'art à la vie commune. En cela, il retrouve, sous une forme critique, une dimension de l'art antique qui était intégré aux pratiques religieuses, politiques et sociales, même si le contexte et les significations sont radicalement différents.
Exemple : Une fresque murale dans un quartier, comme celles du street artiste Banksy, interagit avec l'environnement urbain, commente l'actualité politique et est accessible à tous gratuitement, à la manière dont une frise du Parthénon s'adressait aux citoyens athéniens.`
  },
  // Question n°86
  {
    question: "Quel est le sens du titre 'La Machine infernale' de Cocteau ?",
    answers: [
      "Une invention technologique diabolique.",
      "Une métaphore pour désigner le destin des personnages, présenté comme un mécanisme implacable et absurde qui les broie, comme une machine bien huilée et cruelle.",
      "Le nom d'un engin de guerre."
    ],
    correct: 2,
    explanation: `Cocteau voit dans le mythe d'Œdipe non une tragédie noble, mais le fonctionnement d'une « machine » froide et efficace. Les dieux (ou le destin) ont monté un piège parfait dont tous les rouages (la prophétie, la fuite d'Œdipe, la rencontre au carrefour, l'énigme du Sphinx) s'emboîtent pour aboutir au parricide et à l'inceste. Le ton familier et parfois comique de la pièce accentue cette impression d'absurdité mécanique : les personnages sont des pantins dans un engrenage qu'ils ne comprennent pas.
Exemple : La scène des escaliers avec Tirésias et Jocaste, pleine de quiproquos et de ridicules, montre que la grande tragédie peut naître de détails minuscules et grotesques, comme dans une machine de Rube Goldberg.`
  },
  // Question n°87
  {
    question: "En quoi le traitement du temps par Husserl diffère-t-il d'une conception linéaire ?",
    answers: [
      "Pour Husserl, le temps n'existe pas.",
      "Le présent n'est pas un instant ponctuel, mais une « durée » qui retient en lui le passé immédiat (rétention) et anticipe l'avenir immédiat (protention). Le sujet n'est présent à lui-même que dans cette triple structure (passé-présent-futur) étirée.",
      "Il pense que seul le futur compte."
    ],
    correct: 2,
    explanation: `Husserl analyse la conscience du temps comme un flux où le présent n'est jamais nu. Quand j'écoute une mélodie, la note actuelle est perçue en relation avec la note qui vient de s'éteindre (rétention) et l'attente de la note à venir (protention). Le « maintenant » est donc toujours chargé de passé et tendu vers l'avenir. Cette analyse phénoménologique rompt avec le temps physique objectivé (une succession de « maintenants ») pour décrire le temps vécu de la conscience, qui est synthèse et intentionnalité.
Exemple : En ce moment même, votre lecture de cette phrase est accompagnée de la rétention des phrases précédentes (qui donnent du sens) et de la protention de la suite du texte que vous anticipez. Votre présent de lecture est cette « interface » vivante entre passé et futur.`
  },
  // Question n°88
  {
    question: "Que signifie l'affirmation « Tout ce qui peut être dit, peut être dit clairement » dans le contexte du 'Tractatus' ?",
    answers: [
      "Il faut parler fort.",
      "Si une pensée peut être exprimée de manière sensée, alors elle peut être exprimée dans un langage logiquement parfait, où la structure de la proposition reflète la structure du fait qu'elle représente.",
      "Tout le monde peut tout comprendre."
    ],
    correct: 2,
    explanation: `C'est l'idéal d'un langage parfaitement logique, transparent, qui serait l'image du monde. Les limites de mon langage signifieraient les limites de mon monde. Si quelque chose ne peut pas être dit clairement dans ce langage (comme les propositions de l'éthique ou de la métaphysique), c'est qu'on ne peut pas en parler de manière sensée du tout. La tâche de la philosophie est de tracer les limites du langage sensé, de montrer ce qui relève du dicible (la science) et ce qui doit être tu.
Exemple : La proposition « Il pleut » a un sens clair car on peut imaginer l'état de choses qu'elle décrit et le vérifier. La proposition « La vie a un sens » n'a pas, pour le premier Wittgenstein, de conditions de vérité claires et vérifiables ; elle est donc dépourvue de sens propositionnel, même si elle exprime une attitude.`
  },
  // Question n°89
  {
    question: "Pourquoi l'art conceptuel de Kosuth considère-t-il que « l'art après la philosophie » commence avec Duchamp ?",
    answers: [
      "Parce que Duchamp a arrêté de peindre.",
      "Parce qu'avec le ready-made, l'art cesse d'être une question d'esthétique pour devenir une question de définition et de langage, une activité conceptuelle proche de la philosophie, voire qui la remplace dans sa fonction interrogative.",
      "Parce que Duchamp était aussi philosophe."
    ],
    correct: 2,
    explanation: `Kosuth inverse la lecture hégélienne. Pour Hegel, l'art est dépassé par la philosophie. Pour Kosuth, après Duchamp, l'art devient lui-même une activité philosophique de premier plan, car son objet principal est de s'interroger sur sa propre nature : « Qu'est-ce que l'art ? ». L'artiste ne produit plus des objets beaux, mais des propositions sur l'art. En ce sens, l'art conceptuel serait la véritable philosophie de notre temps, une philosophie en acte qui utilise les moyens de l'art.
Exemple : L'œuvre 'Art as Idea as Idea' de Kosuth, qui consiste en la définition photocopiée et agrandie du mot « art » tirée d'un dictionnaire, est une pure proposition philosophique sur l'art, matérialisée sous forme d'objet. L'idée est l'œuvre.`
  },
  // Question n°90
  {
    question: "Quel est le paradoxe de la notion de « progrès » au 20e siècle, tel qu'exposé en introduction ?",
    answers: [
      "Il n'y a eu aucun progrès.",
      "Le progrès technique et scientifique, censé améliorer la condition humaine, a aussi produit les moyens de sa destruction massive (guerres mondiales, crise écologique), conduisant à une perte de confiance dans l'idée même de progrès linéaire et positif.",
      "Le progrès n'a concerné que l'art."
    ],
    correct: 2,
    explanation: `Le 19e siècle croyait au progrès continu de l'humanité grâce à la science et à l'industrie (positivisme de Comte). Les horreurs de la Première et de la Seconde Guerre mondiale, rendues possibles par les avancées technologiques (armes chimiques, bombes atomiques), ont brisé cette croyance. Le progrès apparaît alors comme ambivalent, voire dangereux. Cette désillusion est à l'origine du doute et des interrogations qui traversent tout le 20e siècle en philosophie, en art et en politique.
Exemple : La bombe atomique, summum du progrès scientifique (physique nucléaire), est aussi le symbole de la capacité d'autodestruction de l'humanité, marquant une rupture dans la relation de l'homme à sa propre puissance.`
  },
  // Question n°91
  {
    question: "Comment l'exemple de « l'artiste et robots » (exposition Grand Palais, 2018) illustre-t-il la « mort de l'artiste » ?",
    answers: [
      "Les robots tuent les artistes.",
      "La création artistique peut être déléguée à des machines, des algorithmes, remettant en cause la notion d'auteur unique, d'inspiration et de « main » de l'artiste, centrales dans la tradition.",
      "Les robots sont de meilleurs artistes."
    ],
    correct: 2,
    explanation: `L'utilisation de robots ou d'IA dans la création artistique pousse à l'extrême la question de l'auteur. Si une œuvre est générée par un algorithme conçu par un humain, qui est l'artiste ? Le programmeur ? L'utilisateur qui a choisi les paramètres ? La machine elle-même ? Cela dissout la figure romantique de l'artiste-génie. L'art devient un processus collaboratif homme-machine, où l'intention humaine peut être distanciée, voire absente (œuvres algorithmiques aléatoires).
Exemple : Les peintures réalisées par le robot artiste « e-David » ou les compositions musicales générées par l'IA « AIVA » posent la question de l'originalité et de l'expression : une machine peut-elle « exprimer » quelque chose ? Ou ne fait-elle qu'exécuter un programme ?`
  },
  // Question n°92
  {
    question: "Que signifie l'idée de « modernité relative » ?",
    answers: [
      "La modernité n'existe pas.",
      "Parler de modernité est relatif à celui qui en parle ; chaque siècle se vit comme moderne et en rupture avec le passé, donc la prétention à la rupture est un trait permanent de l'histoire.",
      "Seul le 20e siècle est vraiment moderne."
    ],
    correct: 2,
    explanation: `On doit s'intriguer d'unvision téléologique de l'histoire où notre époque serait « enfin » moderne. Les hommes de la Renaissance se pensaient en rupture avec le « Moyen Âge obscur », les Lumières avec l'« obscurantisme » religieux. Ainsi, la conscience d'être moderne, d'inaugurer une nouvelle ère, est une constante historique. Cela relativise la singularité de notre propre sentiment de rupture et invite à une analyse plus fine des continuités sous-jacentes aux discours de la nouveauté.
Exemple : Le manifeste futuriste de Marinetti (1909) proclamait une rupture radicale avec tout le passé, vouant à la destruction les musées et les bibliothèques. Cette volonté de table rase est un topos des avant-gardes, que l'on retrouve à différentes époques.`
  },
  // Question n°93
  {
    question: "Quelle est la fonction de l'« époché » (ἐποχή) ou réduction phénoménologique chez Husserl ?",
    answers: [
      "Accélérer la pensée.",
      "Mettre entre parenthèses, suspendre le jugement concernant l'existence du monde extérieur, pour se concentrer sur la manière dont les phénomènes se donnent à la conscience pure, indépendamment de nos croyances naïves.",
      "Douter de l'existence de sa propre conscience."
    ],
    correct: 2,
    explanation: `L'époché n'est pas un doute sceptique (je ne nie pas le monde), mais une mise hors circuit méthodologique. Je décide de ne pas m'intéresser à la question « Est-ce que ce monde existe réellement ? » pour décrire comment il m'apparaît. Cela permet d'accéder au « résidu phénoménologique » : les actes de la conscience (percevoir, imaginer, juger) et leurs corrélats intentionnels (le perçu, l'imaginaire, le jugé). C'est le premier pas vers la constitution d'une science rigoureuse de la subjectivité transcendantale.
Exemple : Face à un arbre, au lieu de dire « c'est un chêne » (jugement naturel), je décris : « je vis une perception visuelle d'un objet vert et brun avec telle forme, accompagnée de la certitude qu'il a d'autres côtés invisibles, etc. ». Je décris l'expérience, pas l'objet botanique.`
  },
  // Question n°94
  {
    question: "Pourquoi évoquer le fait qu'Hitler et Wittgenstein sont nés à quelques jours d'intervalle ?",
    answers: [
      "Pour faire une coïncidence anecdotique.",
      "Pour souligner, de manière frappante, comment une même époque peut produire des figures symbolisant des extrêmes de la pensée humaine : la destruction barbare et la réflexion philosophique la plus exigeante sur le langage et les limites du sens.",
      "Pour dire qu'ils se connaissaient."
    ],
    correct: 2,
    explanation: `Cette coïncidence biographique sert de raccourci symbolique pour illustrer les tensions du 20e siècle. D'un côté, Hitler incarne la régression barbare, le déchaînement des passions identitaires et la destruction du monde commun. De l'autre, Wittgenstein représente la tentative la plus radicale de clarification rationnelle, d'analyse des conditions du sens et de la communication. Leur contemporanéité montre que le siècle est à la fois celui des pires obscurantismes et des lumières critiques les plus aiguës, sans que les secondes n'aient pu empêcher les premiers.
Exemple : Alors que Hitler mobilisait les masses par une rhétorique simplificatrice et haineuse, Wittgenstein travaillait à dissoudre les illusions métaphysiques et à montrer les limites de ce qui peut être dit de manière sensé, deux rapports au langage et au monde radicalement opposés.`
  },
  // Question n°95
  {
    question: "Quelle est la différence entre « vouloir savoir » et « pouvoir savoir » évoquée à propos de Wittgenstein ?",
    answers: [
      "« Vouloir savoir » est plus facile.",
      "« Pouvoir savoir » concerne les capacités cognitives, tandis que « vouloir savoir » désigne l'attitude philosophique qui consiste à questionner ses propres certitudes les plus ancrées, ce qui est difficile car ces certitudes sont le fondement même de notre pensée.",
      "C'est la même chose."
    ],
    correct: 2,
    explanation: `Wittgenstein montre que nous « pouvons » savoir beaucoup de choses (des faits scientifiques, des compétences pratiques). Mais le geste philosophique authentique est de « vouloir savoir » sur le savoir lui-même, sur ses conditions. Cela implique de mettre en question ce qui nous semble aller de soi, nos évidences grammaticales, nos formes de vie. Or, comme ces certitudes sont constitutives de notre monde, les questionner est extrêmement difficile et déstabilisant. La philosophie est donc un travail sur soi, un effort pour voir le familier comme étrange.
Exemple : Il est facile de savoir utiliser le mot « temps » dans la vie quotidienne. Il est beaucoup plus difficile de « vouloir savoir » ce que signifie réellement ce mot, comme l'ont tenté Augustin ou Heidegger, car on se heurte alors aux limites de notre langage et de nos représentations.`
  },
  // Question n°96
  {
    question: "Comment la performance de Chris Burden 'Five Day Locker Piece' (enfermé 5 jours dans un casier) peut-elle être interprétée ?",
    answers: [
      "Comme une farce d'étudiant.",
      "Comme une expérience régressive et « placentaire », explorant les limites de l'enfermement, de la privation et de la réduction de l'existence à ses fonctions biologiques les plus basiques, poussant à l'extrême la condition corporelle de l'artiste.",
      "Comme une critique des casiers trop petits."
    ],
    correct: 2,
    explanation: `Cette performance est une expérience de confinement et de survie minimaliste. En se réduisant à un espace foetal, sans nourriture solide, Burden fait de son corps l'objet et le sujet d'une expérience-limite. Elle peut évoquer la régression, l'enfermement psychique, la réduction de l'humain à l'animal en cage, ou une métaphore de la condition humaine contrainte. L'œuvre réside dans l'endurance et la documentation de cette épreuve, transformant la souffrance et la monotonie en matériau artistique.
Exemple : Cette performance préfigure les expériences d'isolement sensoriel et questionne les besoins fondamentaux de l'être humain, tout en mettant en scène une vulnérabilité radicale face au public (qui sait qu'il est là, immobile et silencieux).`
  },
  // Question n°97
  {
    question: "Quel est le statut des mathématiques dans l'empirisme logique de Carnap ?",
    answers: [
      "Ce sont des sciences empiriques comme les autres.",
      "Ce sont des systèmes de tautologies, des conventions logiques vraies par définition, qui ne disent rien sur le monde mais constituent l'outil formel pour organiser la connaissance empirique.",
      "Ce sont des non-sens métaphysiques."
    ],
    correct: 2,
    explanation: `Pour le Cercle de Vienne, les mathématiques pures (arithmétique, géométrie formelle) sont analytiques. La proposition « 2+2=4 » est vraie en vertu des définitions des symboles « 2 », « + », « = » et « 4 » et des règles de la logique. Elle n'est pas vérifiée par l'expérience (compter des pommes), même si elle s'applique au monde. Les mathématiques sont donc un langage, un jeu de signes régi par des règles syntaxiques. Elles n'apportent pas de connaissance factuelle, mais elles sont le squelette logique de toute science empirique.
Exemple : Le théorème de Pythagore est vrai dans le système de la géométrie euclidienne par déduction logique à partir des axiomes. Son application à un triangle réel (dans l'espace physique) nécessite une vérification empirique pour savoir si l'espace est bien euclidien.`
  },
  // Question n°98
  {
    question: "En quoi le « body art » ou « art corporel » (comme celui d'Orlan ou de Gina Pane) représente-t-il une rupture ?",
    answers: [
      "Il rompt avec l'idée que le support de l'art doit être extérieur à l'artiste ; ici, le corps vivant, souffrant, modifié de l'artiste devient à la fois le sujet, l'objet et le médium de l'œuvre.",
      "Il est moins durable que la peinture.",
      "Il est plus beau que la sculpture."
    ],
    correct: 1,
    explanation: `Le body art pousse à l'extrême l'implication de l'artiste. Il ne crée pas un objet séparé de lui, il agit sur et avec son propre corps. Cela abolit la distance traditionnelle entre le créateur et la création. L'œuvre est souvent éphémère (la performance), douloureuse, et engage la responsabilité éthique du spectateur, qui devient témoin d'une expérience réelle, non simulée. C'est une forme d'art qui explore les limites physiques et psychologiques, et qui interroge les normes sociales (beauté, genre, santé).
Exemple : Les « actions » de Gina Pane où elle se coupait volontairement avec des lames de rasoir mettaient en scène la douleur et la vulnérabilité féminine de manière directe et troublante, forçant le public à une confrontation avec la réalité de la chair et de la souffrance.`
  },
  // Question n°99
  {
    question: "Que signifie l'idée que « la crise écologique est sans précédent historique » ?",
    answers: [
      "C'est la première crise économique.",
      "Pour la première fois, l'activité d'une espèce (l'humanité) modifie à l'échelle planétaire et à un rythme rapide les équilibres géophysiques et biologiques qui ont permis son émergence, menaçant les conditions de sa propre survie et celle de millions d'autres espèces.",
      "Il y a toujours eu des crises écologiques."
    ],
    correct: 2,
    explanation: `Les changements environnementaux passés (ères glaciaires, extinctions) étaient dus à des causes naturelles et s'étalaient sur des millénaires. La crise actuelle est causée par l'homme en quelques siècles, voire décennies (pour le changement climatique). Son caractère global (elle affecte l'ensemble de la biosphère) et sa rapidité en font un phénomène nouveau. Elle pose une question inédite à l'humanité : peut-elle maîtriser les conséquences de son propre développement et assurer la pérennité de son habitat ?
Exemple : La concentration de CO2 dans l'atmosphère dépasse aujourd'hui tout ce qui a été mesuré depuis 800 000 ans, et le taux d'extinction des espèces est des centaines de fois supérieur au taux naturel, ce qui définit une nouvelle époque géologique : l'Anthropocène.`
  },
  // Question n°100
  {
    question: "Quel est le fil conducteur qui relie les différentes parties du cours de HLP (notions, art, philosophie) ?",
    answers: [
      "Une chronologie simple du 20e siècle.",
      "La biographie des auteurs.",
      "L'exploration des différentes manières dont le 20e et le 21e siècles tentent de penser et de vivre la tension dialectique entre rupture et continuité, entre l'héritage d'un monde ancien qui s'effondre et l'invention problématique de nouvelles formes de sens, de savoir, d'art et de communauté.",
      "Une critique uniforme de la modernité."
    ],
    correct: 3,
    explanation: `Le cours est structuré autour de ce paradigme central. La première partie montre comment les notions clés (science, État, justice) sont travaillées par cette tension. La deuxième partie l'illustre dans le champ artistique, entre la mort annoncée de l'art et sa réinvention par la réinterprétation des mythes. La troisième partie montre comment la philosophie elle-même est le lieu de ruptures radicales (phénoménologie, analytique) qui tentent de répondre à la crise du sens. Le thème unificateur est la quête, dans un monde éclaté, des conditions de possibilité d'un « monde commun ».
Exemple : De Manet (rupture avec la peinture narrative) à Heidegger (rupture avec la métaphysique) en passant par Wittgenstein (rupture avec le langage philosophique traditionnel), on observe une même volonté de rompre avec le passé pour fonder de nouveaux paradigmes, tout en étant inévitablement hanté par ce qu'on rejette.`
  },
];