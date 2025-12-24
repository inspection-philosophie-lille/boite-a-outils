// ============================================
// DONNÉES GÉNÉRALES
// ============================================
const titre = "QUIZ HLP - L'humain et ses limites";
const sousTitre = "100 questions pour maîtriser les enjeux du progrès technique, de la société liquide aux dystopies.";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE (Synthèse)
// ============================================
const philosophyData = {
  texte: `Le XXe siècle, marqué par l'explosion cognitive et technologique, a vu s'effondrer la confiance naïve dans le progrès. Des catastrophes industrielles aux génocides, la science a révélé son double visage, libérateur et mortifère. Face à une société 'liquide' où les liens se fragilisent, les écrans isolent et la technique promet l'augmentation de l'homme, se pose la question fondamentale des limites humaines. De Prométhée à l'intelligence artificielle, des utopies aux dystopies, l'enjeu est de penser un progrès responsable qui respecte l'homme et son environnement.`,
  source: "Synthèse des enjeux philosophiques de la séquence 'L'humain et ses limites'."
};

// ============================================
// QUESTIONS DU QUIZ (1 à 100)
// ============================================
const questions = [
  // Question n°1
  {
    question: "Que signifie l'expression 'société liquide' développée par Zygmunt Bauman ?",
    answers: [
      "Une société où l'argent circule sans entrave et où les richesses sont redistribuées équitablement.",
      "Une société fondée sur la consommation d'eau et de ressources naturelles en abondance.",
      "Une société atomisée en individus dont les liens sont fragiles, impermanents, et où les institutions solides sont érodées."
    ],
    correct: 3,
    explanation: `La société liquide décrit un monde contemporain où les individus sont isolés comme des atomes, les engagements sont précaires et les modes de vie instables, remplaçant la fidélité par le nomadisme professionnel et affectif. Ce concept critique la dissolution des structures sociales traditionnelles au profit d'une fluidité qui comprime l'espace et le temps. L'homme y est défini avant tout comme un consommateur perpétuellement insatisfait, dont l'identité sociale est construite par ses achats. L'idéal de fluidité absolue menace de transformer ceux qui ne suivent pas le courant en déchets sociaux.\nExemple : Le télétravail et la mondialisation de la production, comme pour la poupée Barbie dont les pièces viennent du monde entier, illustrent cette compression du temps et de l'espace caractéristique de la liquidité.`
  },

  // Question n°2
  {
    question: "Quel est le pourcentage de jeunes (18-24 ans) en 2022 qui estiment que la science apporte plus de bien que de mal ?",
    answers: [
      "55%",
      "22%",
      "6%"
    ],
    correct: 2,
    explanation: `En 2022, seuls 22% des 18-24 ans estimaient que la science apportait plus de bien que de mal, contre 55% en 1972. Cette chute spectaculaire de 33 points en cinquante ans révèle une défiance historique envers la science chez la génération Z. Symétriquement, la proportion de ceux qui la jugent néfaste a triplé, passant de 6% à 17%. Cette défiance est corrélée à l'effondrement des médias traditionnels et à la montée en puissance des réseaux sociaux comme sources d'information.\nExemple : Selon l'étude Ifop pour la Fondation Reboot, les jeunes préfèrent désormais les courtes vidéos ludiques de TikTok aux résultats de recherche traditionnels, favorisant la dissémination de vérités 'alternatives'.`
  },

  // Question n°3
  {
    question: "Dans le mythe de Prométhée raconté par Platon, que fait Épiméthée qui crée le problème fondamental de la condition humaine ?",
    answers: [
      "Il vole le feu aux dieux pour le donner aux animaux.",
      "Il distribue toutes les qualités aux animaux avant que vienne le tour de l'homme, le laissant nu et sans défense.",
      "Il refuse de donner la technique aux hommes par jalousie."
    ],
    correct: 2,
    explanation: `Épiméthée, dont le nom signifie 'celui qui pense après' ou plutôt 'celui qui comprend de manière superficielle', distribue imprudemment toutes les qualités aux animaux. Lorsqu'arrive le dernier être, l'homme, il ne reste plus aucune qualité à lui attribuer. L'homme se retrouve ainsi 'nu, sans chaussures, ni couvertures ni armes', démuni face à la nature. Cette oubli crée la condition de manque originel qui définit l'humanité et justifie l'intervention de Prométhée.\nExemple : Contrairement au castor qui a des dents pour couper le bois ou à l'oiseau qui a des ailes pour voler, l'homme naît sans qualités naturelles spécialisées, ce qui le contraint à développer la technique pour survivre.`
  },

  // Question n°4
  {
    question: "Que vole Prométhée aux dieux pour le donner aux hommes, selon le mythe platonicien ?",
    answers: [
      "L'ambroisie, la nourriture des dieux qui confère l'immortalité.",
      "Le feu et la connaissance des arts (la technique).",
      "Le secret de la politique et de la justice."
    ],
    correct: 2,
    explanation: `Pour pallier l'oubli de son frère, Prométhée vole à Héphaïstos et Athéna 'la connaissance des arts avec le feu'. Ce don n'est pas naturel mais le fruit d'un rapt, d'une transgression de l'ordre divin. La technique (τέχνη) et le feu deviennent ainsi les instruments qui permettent à l'homme, être naturellement démuni, de survivre et de se développer. Ce vol aura des conséquences, car Zeus se vengera en créant Pandore, introduisant le malheur dans l'existence humaine.\nExemple : Le feu représente ici bien plus qu'une flamme ; il symbolise l'ensemble des savoir-faire techniques qui permettent à l'homme de transformer la nature, de cuire ses aliments, de forger des outils, et donc de s'arracher partiellement à sa condition animale.`
  },

  // Question n°5
  {
    question: "Comment Henri Bergson définit-il l'intelligence humaine dans 'L'évolution créatrice' ?",
    answers: [
      "Comme la faculté de contempler les vérités éternelles.",
      "Comme la faculté de fabriquer des objets artificiels, en particulier des outils à faire des outils.",
      "Comme la capacité de communiquer par un langage symbolique complexe."
    ],
    correct: 2,
    explanation: `Pour Bergson, la caractéristique originelle de l'intelligence est la fabrication, ce qui justifie de nommer l'homme 'Homo faber' plutôt qu''Homo sapiens'. L'intelligence est avant tout la capacité de créer des outils, et surtout des outils pour en fabriquer d'autres, permettant une variation et un perfectionnement indéfinis. Cette faculté inventive, bien qu'elle produise des instruments 'imparfaits' comparés aux organes spécialisés des animaux, offre à l'homme une souplesse et une adaptabilité illimitées.\nExemple : Un couteau de silex taillé est moins efficace pour couper que la mâchoire d'un prédateur, mais il peut être amélioré, transformé en épée, en scie, en scalpel, s'adaptant à une infinité de besoins nouveaux.`
  },

  // Question n°6
  {
    question: "Quelle est la principale différence entre l'outil animal et l'outil humain selon Bergson ?",
    answers: [
      "L'outil animal est en métal, l'outil humain est en bois ou en pierre.",
      "L'outil animal est un organe du corps ou un objet naturel détourné, tandis que l'outil humain est fabriqué de toutes pièces.",
      "L'outil animal sert à construire, l'outil humain à détruire."
    ],
    correct: 2,
    explanation: `L'animal utilise soit son propre corps comme outil (un bec, une griffe), soit des 'instruments appropriés' détachés de la nature (une branche, une pierre). Ces outils sont liés à des instincts spécialisés et sont peu modifiables. L'homme, lui, conçoit et fabrique des 'instruments fabriqués', créés ex nihilo à partir de matières inorganisées. Ces outils sont imparfaits mais d'une flexibilité infinie, permettant à l'homme de s'adapter à toute situation nouvelle et d'acquérir des pouvoirs illimités.\nExemple : Le chimpanzé qui utilise une brindille pour attraper des termites utilise un outil naturel détourné. L'homme qui conçoit une fourchette en métal, puis la machine qui les produit en série, fabrique un outil artificiel qu'il peut sans cesse perfectionner.`
  },

  // Question n°7
  {
    question: "Que critique essentiellement Adorno et Horkheimer concernant les moyens de communication modernes comme la radio ?",
    answers: [
      "Leur coût exorbitant pour les auditeurs.",
      "Leur faible portée géographique.",
      "La transformation de tous les participants en auditeurs passifs, soumis autoritairement à des programmes standardisés, et la disparition de tout système de réponse."
    ],
    correct: 3,
    explanation: `Dans 'La Dialectique de la Raison', les auteurs critiquent le passage d'un média libéral comme le téléphone, où l'usager est encore un sujet actif, à des médias démocratiques mais autoritaires comme la radio. Celle-ci impose un flux unidirectionnel : une minorité émet, la majorité écoute passivement. Toute spontanéité du public est organisée, contrôlée et intégrée à l'industrie du divertissement. Les talents sont formatés avant même d'être présentés, annihilant toute possibilité de réponse ou de débat véritable.\nExemple : Les émissions de radio avec public, où les réactions sont soigneusement sélectionnées et canalisées, ou les compétitions télévisées où les candidats sont préalablement formatés, illustrent cette confiscation de la parole et cette illusion de participation.`
  },

  // Question n°8
  {
    question: "Que représente le 'syndrome du Titanic' dans le cadre de la critique du progrès technique ?",
    answers: [
      "L'idée que les grandes catastrophes maritimes sont inévitables.",
      "La confiance aveugle et arrogante dans la technologie moderne, considérée comme invulnérable, qui rend en réalité la société plus vulnérable aux catastrophes.",
      "La nécessité de toujours construire des navires plus grands et plus luxueux."
    ],
    correct: 2,
    explanation: `Le Titanic était le symbole triomphant de la technologie et de la modernité du début du XXe siècle, réputé 'insubmersible'. Son naufrage en 1912 a servi de choc et de symbole durable de la fin d'une confiance naïve dans le progrès technique. Il montre qu'une technologie non maîtrisée, associée à l'orgueil humain (l'ὕβρις), peut conduire à des catastrophes. Ce syndrome désigne ainsi la vulnérabilité créée par une foi excessive dans la capacité de la science à contrôler tous les risques.\nExemple : Les catastrophes industrielles comme l'explosion de l'usine AZF à Toulouse ou l'accident nucléaire de Fukushima rappellent que les systèmes techniques les plus sophistiqués restent exposés à l'erreur humaine, à la défaillance ou à des événements imprévus.`
  },

  // Question n°9
  {
    question: "Quelle définition de l'utopie est historiquement la première, liée à Thomas More ?",
    answers: [
      "Un projet irréaliste et dangereux qu'il faut combattre.",
      "Le nom d'une île imaginaire où règne un gouvernement idéal, servant de critique de la société réelle.",
      "Un plan scientifique pour réorganiser la société sur des bases rationnelles."
    ],
    correct: 2,
    explanation: `Thomas More invente le terme 'Utopia' (d'οὐ, 'non' et τόπος, 'lieu' : le non-lieu) en 1516 pour désigner une île fictive dotée d'institutions parfaites. Cette construction littéraire et philosophique a d'abord une fonction critique : en dépeignant une société idéale, elle met en lumière les défauts et les injustices de la société anglaise de son temps. L'utopie est donc initialement un modèle idéal qui sert de miroir et d'idéal régulateur pour penser l'amélioration du présent.\nExemple : Dans 'Candide', Voltaire décrit l'Eldorado, un pays où l'or n'a aucune valeur et où règne la tolérance, pour critiquer par contraste l'avidité, la violence et le fanatisme des sociétés européennes.`
  },

  // Question n°10
  {
    question: "Quelle est la thèse centrale de la 'collapsologie' ?",
    answers: [
      "Notre civilisation industrielle est vouée à s'effondrer inévitablement et prochainement en raison de la surexploitation des ressources et du changement climatique.",
      "Les sociétés humaines sont cycliques et connaissent nécessairement des phases de déclin puis de renaissance.",
      "Le progrès technique finira toujours par résoudre les crises qu'il a lui-même créées."
    ],
    correct: 1,
    explanation: `La collapsologie (de 'collapsus', effondrement) est un courant de pensée qui, à partir de données scientifiques, anticipe l'effondrement systémique de la civilisation industrielle moderne. Elle identifie plusieurs facteurs convergents et interdépendants : épuisement des ressources, changement climatique, effondrement de la biodiversité, crises financières. Ce courant, popularisé par des auteurs comme Yves Cochet, s'oppose à l'idée d'un 'développement durable' et prône une préparation à un monde post-effondrement.\nExemple : Le rapport du 'Club de Rome' en 1972, 'Les Limites à la croissance', est un précurseur de cette pensée en modélisant l'épuisement des ressources et la pollution dans un monde à la croissance exponentielle.`
  },

  // Question n°11
  {
    question: "Quelle est la célèbre formule de Descartes concernant le rapport de l'homme à la nature grâce à la technique ?",
    answers: [
      "L'homme est le roi de la création.",
      "L'homme doit vivre en harmonie avec la nature.",
      "Nous rendre comme maîtres et possesseurs de la nature."
    ],
    correct: 3,
    explanation: `Dans la sixième partie du 'Discours de la méthode', Descartes énonce que la nouvelle science pratique doit nous permettre de 'nous rendre comme maîtres et possesseurs de la nature'. Cette formule souvent citée résume un projet : utiliser la connaissance des lois de la nature (feu, eau, air) pour inventer des artifices améliorant la vie humaine, notamment la santé. Il est crucial de noter le 'comme' : l'homme n'est pas vraiment le propriétaire (abusus) mais celui qui, par la connaissance (comme un maître artisan), utilise raisonnablement la nature.\nExemple : La médecine moderne, avec ses vaccins et ses chirurgies, ou l'agriculture industrielle, illustrent cette volonté de maîtriser les forces naturelles pour le bénéfice humain, mais aussi les dérives possibles d'une exploitation sans limite.`
  },

  // Question n°12
  {
    question: "Comment Heidegger décrit-il l'action de la technique moderne sur la nature, par exemple à travers une centrale hydroélectrique sur le Rhin ?",
    answers: [
      "Elle sublime la nature en l'intégrant harmonieusement à l'art.",
      "Elle 'commet' la nature, la transformant en simple stock de ressources à exploiter, en l'arrachant à son essence.",
      "Elle protège la nature en utilisant des énergies renouvelables."
    ],
    correct: 2,
    explanation: `Heidegger oppose deux rapports au fleuve. Le vieux pont de bois 'unit une rive à l'autre' et laisse le Rhin être le Rhin. La centrale électrique, elle, le 'mure', le 'somme' de livrer sa pression hydraulique. La technique moderne ne se contente pas d'utiliser la nature ; elle la 'commet', c'est-à-dire la transforme en fonds disponible, en réserve (Bestand) à commander et à épuiser. Le Rhin n'est plus un fleuve poétique (comme dans l'hymne de Hölderlin) mais un fournisseur d'énergie intégré à une chaîne causale industrielle.\nExemple : Une forêt ancienne vue comme un écosystème complexe et sacré (par certaines cultures) versus la même forêt vue comme un 'stock de bois' ou un 'puits de carbone' à gérer, illustre ce passage d'un rapport poétique à un rapport technique et calculant.`
  },

  // Question n°13
  {
    question: "Quelle est la proposition principale d'Arne Næss avec le concept d''écologie profonde' (deep ecology) ?",
    answers: [
      "Une écologie scientifique et technique visant à optimiser l'exploitation des ressources.",
      "Un passage d'un anthropocentrisme (l'homme au centre) à un biocentrisme où toute forme de vie a une valeur intrinsèque, indépendamment de son utilité pour l'homme.",
      "Une écologie réservée aux experts et aux décideurs politiques."
    ],
    correct: 2,
    explanation: `Face à l'écologie 'superficielle' ou 'de gestion' qui cherche à préserver l'environnement pour le bien-être humain (anthropocentrisme), Arne Næss propose une 'écologie profonde'. Celle-ci considère que le vivant dans son ensemble a une valeur en soi. L'homme n'est plus le centre et le maître, mais un nœud dans le réseau de la biosphère, avec la responsabilité éthique de respecter l'épanouissement de toute vie. Cette vision radicale implique un changement de civilisation bien plus profond qu'un simple ajustement technologique.\nExemple : Protéger une espèce de moustique rare non parce qu'elle pollinise des plantes utiles ou a une valeur esthétique, mais simplement parce qu'elle a le droit d'exister et fait partie de la trame du vivant, relève d'une position biocentriste.`
  },

  // Question n°14
  {
    question: "Que propose Yves Paccalet dans 'Sortie de secours' face à la crise écologique ?",
    answers: [
      "Accélérer le progrès technique et la colonisation spatiale pour trouver de nouvelles ressources.",
      "Une décroissance économique et matérielle vigoureuse dans les pays riches, considérant que ni la technique ni le développement durable ne suffiront.",
      "Un retour généralisé à un mode de vie agricole pré-industriel de type 'Amish'."
    ],
    correct: 2,
    explanation: `Yves Paccalet, dans la lignée de la décroissance, estime que l'idée d'un 'développement durable' ou d'une croissance 'verte' est un leurre dans un monde fini. Il prône une décroissance volontaire, radicale et planifiée de notre consommation matérielle et énergétique (il suggère de diviser par deux la consommation des pays riches). Pour lui, l'humanité n'est pas prête à renoncer à son confort, ce qui rend cette solution utopique mais nécessaire, la seule alternative étant le 'néant' de l'effondrement.\nExemple : Réduire drastiquement l'usage de la voiture individuelle, limiter le chauffage, généraliser une alimentation locale et peu carnée, et ralentir le rythme de renouvellement des objets électroniques sont des mesures concrètes de décroissance.`
  },

  // Question n°15
  {
    question: "Quel est le 'principe de précaution' popularisé par Hans Jonas ?",
    answers: [
      "Le principe selon lequel il faut toujours attendre des preuves scientifiques certaines avant d'agir face à un risque potentiel.",
      "Le principe qui impose, face à l'incertitude scientifique sur les conséquences d'une action, de prendre des mesures anticipatoires pour éviter des dommages graves et irréversibles à l'environnement ou à la santé.",
      "Le principe qui interdit toute innovation technologique présentant le moindre risque."
    ],
    correct: 2,
    explanation: `Formulé dans 'Le Principe responsabilité' (1979), le principe de précaution répond à la puissance inédite de la technoscience moderne, capable de causer des dommages planétaires et irréversibles (nucléaire, génétique, climat). Face à l'incertitude, et par crainte du pior (la catastrophe), il commande d'agir avec prudence et anticipation, quitte à renoncer à certains bénéfices. Il s'agit d'une éthique de la responsabilité envers les générations futures et la planète, visant le risque zéro par anticipation.\nExemple : Le moratoire sur les OGM dans certains pays, ou les restrictions sur l'utilisation de certains produits chimiques comme les néonicotinoïdes (tueurs d'abeilles) avant que leur nocivité ne soit absolument prouvée, relèvent d'une application du principe de précaution.`
  },

  // Question n°16
  {
    question: "Quelle est la différence fondamentale entre une 'utopie' et une 'dystopie' (ou contre-utopie) ?",
    answers: [
      "L'utopie se passe dans le futur, la dystopie dans le passé.",
      "L'utopie décrit une société idéale et heureuse, la dystopie une société cauchemardesque fondée sur un pouvoir totalitaire où la population est malheureuse.",
      "L'utopie est réaliste, la dystopie est fantastique."
    ],
    correct: 2,
    explanation: `L'utopie (de Thomas More) est un modèle de société parfaite, un idéal qui sert de critique et d'horizon. La dystopie, terme inventé par John Stuart Mill, en est l'inversion : elle décrit une société qui prétend être parfaite (souvent au nom du progrès, de la science ou de la stabilité) mais qui est en réalité un enfer totalitaire, aliénant et oppressif. La dystopie est une critique des dérives possibles des utopies lorsqu'elles sont mises en œuvre sans respect pour la liberté et la singularité humaines.\nExemple : 'Le Meilleur des mondes' d'Aldous Huxley présente une société stable, sans maladie ni guerre, mais où le bonheur est chimiquement imposé, la pensée abolie et les individus conditionnés dès la naissance : c'est l'utopie scientifique devenue cauchemar.`
  },

  // Question n°17
  {
    question: "Dans le film 'Une nouvelle chance' (Trouble with the Curve), que critique-t-il à propos des nouvelles méthodes de recrutement sportif ?",
    answers: [
      "La corruption des recruteurs.",
      "L'incapacité des programmes informatiques et des statistiques à capter les subtilités humaines, le 'feeling' et l'expérience.",
      "Le manque de forme physique des jeunes joueurs."
    ],
    correct: 2,
    explanation: `Le film oppose un vieux recruteur à l'ancienne, Gus (Clint Eastwood), qui observe les joueurs avec son expérience et son intuition, à des méthodes modernes basées sur l'analyse informatique de statistiques. Il dénonce la froideur et l'aveuglement de ces algorithmes qui, en réduisant le joueur à des données quantitatives, manquent l'essentiel : le mental, le caractère, la capacité à performer sous pression, toutes qualités qui échappent aux chiffres. C'est une critique de la substitution de l'intelligence humaine par l'intelligence artificielle dans des domaines requérant du jugement.\nExemple : Un algorithme pourrait rejeter un joueur de baseball à cause d'une mauvaise moyenne au bâton, sans voir qu'il excelle dans les moments décisifs ou qu'il a un leadership exceptionnel dans son équipe.`
  },

  // Question n°18
  {
    question: "D'après l'étude Ifop citée, quel facteur est mis en avant comme 'grand responsable' de la défiance des jeunes envers la science ?",
    answers: [
      "L'enseignement défaillant des sciences à l'école.",
      "La complexité croissante des découvertes scientifiques.",
      "L'effondrement des médias traditionnels et leur substitution par les réseaux sociaux, passant 'de la génération ORTF à la génération TikTok'."
    ],
    correct: 3,
    explanation: `François Kraus de l'Ifop identifie le bouleversement médiatique comme cause majeure. Dans les années 1970, des médias de masse crédibles (grands quotidiens, radio comme Europe 1) relayaient avec autorité les progrès scientifiques. Aujourd'hui, les réseaux sociaux, notamment TikTok, ont pris leur place. Ces plateformes privilégient le ludique, l'émotionnel et l'immédiat, et mesurent la crédibilité à l'aune de l'audience des influenceurs, et non de l'expertise. Cela favorise la dissémination massive de désinformation et de thèses alternatives.\nExemple : Un jeune cherchant des informations sur un vaccin tombera plus facilement sur une vidéo virale d'un influenceur anti-vaccin aux millions de vues que sur une publication longue et nuancée d'un virologue reconnu.`
  },

  // Question n°19
  {
    question: "Quelle est l'une des 'contrevérités scientifiques' à laquelle adhère une forte proportion de jeunes selon l'étude ?",
    answers: [
      "La Terre est au centre de l'univers (géocentrisme).",
      "L'homme n'est jamais allé sur la Lune (théorie du complot).",
      "Les plantes respirent du dioxyde de carbone la nuit."
    ],
    correct: 2,
    explanation: `L'étude révèle que 20% des 18-24 ans sont convaincus que l'homme n'est jamais allé sur la Lune, avec une progression de 5 points en cinq ans. Cette croyance en un complot de grande envergure (le 'moon hoax') est un exemple frappant de défiance envers les institutions scientifiques et gouvernementales. Elle prospère dans l'écosystème des réseaux sociaux où des vidéos 'débunkant' les images de la NASA recueillent des millions de vues, sans contre-discours efficace.\nExemple : Des vidéos TikTok pointant des 'incohérences' dans les images des missions Apollo (ombres parallèles, drapeau qui bouge) sont largement partagées et contribuent à entretenir le doute, bien que ces 'preuves' aient été maintes fois réfutées scientifiquement.`
  },

  // Question n°20
  {
    question: "Quel rôle joue le facteur religieux, selon l'étude, dans l'adhésion aux contrevérités scientifiques ?",
    answers: [
      "Il n'a aucun rôle, la défiance est purement sociale.",
      "Il joue un rôle important, notamment chez une partie des jeunes musulmans pour qui l'interprétation littérale des textes prime sur le rationalisme scientifique.",
      "Les jeunes religieux sont plus méfiants envers la science, mais uniquement sur les questions de morale."
    ],
    correct: 2,
    explanation: `L'étude souligne que parmi les jeunes musulmans (et dans une moindre mesure les protestants évangéliques), une catégorie adopte une lecture très littérale des textes sacrés. Pour eux, admettre certaines réalités scientifiques (comme l'évolution) reviendrait à se soumettre à une 'vision occidentaliste' et à trahir leurs valeurs religieuses, perçues comme identité suprême. Le hiatus est significatif entre jeunes et seniors au sein de cette population.\nExemple : 27% des 18-24 ans pensent qu'une 'force divine' est à l'origine de l'homme (créationnisme). Cette proportion monte à 38% chez les jeunes ouvriers et est surreprésentée dans le segment 'croyants et religieux', montrant la corrélation entre appartenance religieuse littéraliste et rejet de la science établie.`
  },

  // Question n°21
  {
    question: "Que signifie l'expression 'homme augmenté' ?",
    answers: [
      "L'homme qui a fait de longues études et possède une grande culture.",
      "L'homme dont les capacités physiques ou cognitives sont dépassées ou améliorées par des prothèses techniques, chimiques, génétiques ou robotiques.",
      "L'homme altruiste qui a dépassé son égoïsme naturel."
    ],
    correct: 2,
    explanation: `L'idée d''homme augmenté' désigne le projet de dépasser les limites biologiques de l'être humain grâce à la technoscience. Cette augmentation peut être externe (exosquelette, interface cerveau-machine), interne (implants, nanoparticules) ou chimique (dopage cognitif ou physique). Elle s'inscrit souvent dans la mouvance transhumaniste qui rêve d'une humanité libérée de la maladie, du vieillissement et des contraintes corporelles. Cela pose des questions éthiques profondes sur l'identité humaine, l'équité d'accès et les risques de dérives eugénistes.\nExemple : Un soldat équipé d'un exosquelette lui permettant de porter des charges lourdes, un trader prenant des médicaments pour améliorer sa concentration et réduire son besoin de sommeil, ou à l'avenir, des implants rétiniens pour voir dans l'infrarouge, sont des figures de l'homme augmenté.`
  },

  // Question n°22
  {
    question: "Selon Gilbert Simondon, comment l'homme peut-il se libérer de son statut d''auxiliaire de la machine' ?",
    answers: [
      "En détruisant toutes les machines et en retournant à un mode de vie artisanal.",
      "En devenant lui-même une machine parfaite et invulnérable.",
      "En inventant des machines autonomes ('individus techniques') qu'il n'aurait plus à assister, passant ainsi du statut d'ouvrier à celui d'inventeur et de réparateur."
    ],
    correct: 3,
    explanation: `Simondon critique la relation aliénante où l'homme n'est que le serviteur de la machine, un porteur d'outil. Sa solution n'est pas le refus de la technique, mais son accomplissement : il faut créer des machines qui soient de véritables 'individus techniques', autonomes et capables de s'auto-réguler. Libéré des tâches d'assistance fastidieuses, l'homme pourrait alors se consacrer aux activités proprement humaines : l'invention, la supervision, la réparation créative et la pensée. La technique bien comprise doit libérer l'homme, non l'asservir.\nExemple : Un robot industriel entièrement automatisé qui assemble des voitures, nécessitant seulement la surveillance et la maintenance d'un technicien qualifié, illustre cette libération par rapport à l'ouvrier rivetant manuellement des pièces sur une chaîne de montage.`
  },

  // Question n°23
  {
    question: "Que critique Michel Serres avec l'image de 'Petite Poucette' tenant son ordinateur ?",
    answers: [
      "La mauvaise posture des jeunes devant les écrans.",
      "Le fait que la cognition (mémoire, savoir) est désormais objectivée, extériorisée dans les machines et les réseaux, formant une 'boîte cognitive' hors de la tête.",
      "Le coût élevé des technologies numériques pour les jeunes générations."
    ],
    correct: 2,
    explanation: `Serres constate une révolution cognitive aussi importante que l'invention de l'écriture. Avec le numérique, notre mémoire et nos savoirs ne sont plus seulement 'dans notre tête' mais stockés et accessibles à l'extérieur, dans les ordinateurs, les smartphones et le cloud. Il parle d'une 'tête jetée devant nous', comme Saint Denis portant sa propre tête. Cette externalisation change profondément notre rapport au savoir : nous n'avons plus besoin de tout mémoriser, mais de savoir chercher, trier et utiliser l'information disponible.\nExemple : Un étudiant n'a plus besoin d'apprendre par cœur des dates ou des formules ; il doit maîtriser la recherche sur internet, évaluer la fiabilité des sources et synthétiser des informations dispersées.`
  },

  // Question n°24
  {
    question: "Quel est le principal danger pointé par Adorno et Horkheimer concernant l'automobile ?",
    answers: [
      "Sa pollution atmosphérique.",
      "Le fait qu'elle isole physiquement les hommes, réduisant les possibilités de rencontres fortuites et de conversations profondes lors des voyages.",
      "Son dangerosité accidentogène."
    ],
    correct: 2,
    explanation: `Les philosophes de l'École de Francfort voient dans l'automobile privée le symbole d'un isolement croissant. En remplaçant les transports en commun (comme le train), elle enferme l'individu dans sa bulle privée. Les voyages deviennent des déplacements solitaires ou familiaux, coupant les liens avec les inconnus. Les conversations se réduisent alors à des 'bavardages sans profondeur' orientés vers le pratique. L'automobile participe ainsi à l'atomisation de la société et à l'appauvrissement des interactions sociales.\nExemple : Dans un train de nuit, on pouvait avoir des conversations avec des inconnus de tous horizons. En voiture, on ne parle qu'avec ses proches ou on écoute la radio, et les rares contacts avec l'extérieur (auto-stoppeurs) sont souvent perçus comme inquiétants.`
  },

  // Question n°25
  {
    question: "Que symbolise la catastrophe nucléaire de Tchernobyl (1986) dans la critique du progrès ?",
    answers: [
      "La supériorité de la technologie occidentale sur la technologie soviétique.",
      "L'idée qu'un accident est toujours possible, même dans les systèmes les plus sûrs, et que ses conséquences peuvent être catastrophiques, transfrontalières et durables, échappant à tout contrôle humain.",
      "La nécessité de fermer toutes les centrales nucléaires immédiatement."
    ],
    correct: 2,
    explanation: `Tchernobyl est l'archétype de la catastrophe technologique majeure du XXe siècle. Elle a démontré de manière tragique que les systèmes techniques complexes, surtout lorsqu'ils sont gérés dans un contexte de secret et de négligence, peuvent connaître des défaillances catastrophiques. Ses conséquences (nuage radioactif, milliers de morts, territoire inhabitable pour des siècles) ont montré l'ampleur des risques associés à certaines technologies et ont profondément ébranlé la confiance dans l'énergie nucléaire et, plus largement, dans la capacité à maîtriser les productions de la science.\nExemple : Le nuage radioactif de Tchernobyl, dont les autorités françaises de l'époque avaient dit qu'il s'était arrêté à la frontière, est devenu le symbole de l'opacité et du mensonge d'État face aux risques technologiques.`
  },

  // Question n°26
  {
    question: "Dans '1984' de George Orwell, quelle est la fonction du 'novlangue' (Newspeak) ?",
    answers: [
      "Rendre la langue plus riche et plus précise pour les besoins administratifs.",
      "Appauvrir le langage pour restreindre les limites de la pensée et rendre littéralement impossible le crime par la pensée (thoughtcrime).",
      "Créer une langue universelle pour faciliter la communication mondiale."
    ],
    correct: 2,
    explanation: `Le novlangue est un outil de contrôle totalitaire. En supprimant les mots complexes, les nuances et les synonymes (comme 'liberté', 'justice'), et en réduisant le vocabulaire, le Parti cherche à empêcher les citoyens de formuler des pensées subversives ou même simplement critiques. Si un concept n'a plus de mot pour l'exprimer, il devient impensable. La perfection du novlangue coïnciderait avec l'impossibilité absolue de se révolter, car la révolte nécessite d'abord une pensée articulée.\nExemple : Supprimer le mot 'liberte' (freedom) et ne garder que des mots comme 'bonpensée' (goodthink) ou 'doublepensée' (doublethink) permet de formater les esprits pour qu'ils n'envisagent même pas l'idée de contester le pouvoir.`
  },

  // Question n°27
  {
    question: "Quel est le sens profond du mythe de l'écriture raconté par Platon dans le 'Phèdre' (le dieu Thot) ?",
    answers: [
      "L'écriture est un don divin parfait qui sauvera l'humanité.",
      "L'écriture est un remède dangereux : en extériorisant la mémoire, elle fait négliger la mémoire vivante intérieure et donne une présomption de savoir sans la science véritable.",
      "L'écriture est supérieure à la parole car elle permet une transmission plus fidèle."
    ],
    correct: 2,
    explanation: `Le roi Thamous rejette l'invention de Thot. Il argue que l'écriture, en permettant de conserver les souvenirs 'par le dehors, par des empreintes étrangères', va affaiblir la mémoire intérieure et vivante. Les hommes, ayant foi dans l'écrit, n'exerceront plus leur mémoire et chercheront à se ressouvenir à l'extérieur. Pire, ils auront 'la présomption qu'ils ont la science, non la science elle-même', devenant des 'savants imaginaires' plutôt que de vrais savants forgés par le dialogue et la réflexion personnelle.\nExemple : Un étudiant qui se contente de recopier un cours sans le comprendre, pensant le 'posséder' parce qu'il est écrit dans son cahier, illustre cette présomption de savoir. La vraie connaissance nécessite l'assimilation intérieure et la capacité à restituer par ses propres mots, comme dans un dialogue socratique.`
  },

  // Question n°28
  {
    question: "Quel est l'argument de Jean-Baptiste Say concernant la croissance économique ?",
    answers: [
      "Elle est nécessairement limitée par les ressources naturelles.",
      "L'accumulation du capital et la croissance peuvent être illimitées, même si les ressources en travail ou en énergie ne le sont pas.",
      "Elle doit être stoppée pour préserver l'environnement."
    ],
    correct: 2,
    explanation: `L'économiste classique Jean-Baptiste Say est un optimiste de la croissance. Il considère que l'accumulation du capital (machines, usines) et le progrès technique peuvent compenser les limites des ressources naturelles et du travail. Les matières premières se substituent les unes aux autres, et l'innovation permet de faire plus avec moins. Cette vision a dominé la pensée économique jusqu'aux chocs pétroliers et à la prise de conscience écologique, qui ont remis en cause l'idée d'une croissance matérielle infinie dans un monde fini.\nExemple : Le pétrole a remplacé le charbon, les fibres synthétiques remplacent partiellement le coton, et les énergies renouvelables pourraient à l'avenir remplacer les fossiles, illustrant la substituabilité des ressources dans la vision de Say.`
  },

  // Question n°29
  {
    question: "Que désigne le terme 'noosphère' employé par Teilhard de Chardin et évoqué par Michel Serres ?",
    answers: [
      "La couche atmosphérique polluée par les activités humaines.",
      "La sphère de la pensée humaine, de l'information et de la communication qui enveloppe la Terre, superposée à la biosphère.",
      "Le monde virtuel créé par internet."
    ],
    correct: 2,
    explanation: `Inspiré par le géologue Vernadsky et le philosophe Teilhard de Chardin, le concept de noosphère (de νοῦς, esprit, et σφαῖρα, sphère) désigne l'enveloppe pensante de la planète. Avec l'avènement des technologies de communication (écriture, imprimerie, numérique), l'humanité a créé une couche d'information, de savoirs et d'échanges qui recouvre le globe et interconnecte les consciences. Cette sphère de l'esprit modifie profondément notre rapport au monde et aux autres.\nExemple : Internet, les satellites, les bibliothèques numériques, les réseaux sociaux forment les infrastructures contemporaines de la noosphère, permettant une intelligence collaborative et une circulation instantanée de l'information à l'échelle planétaire.`
  },

  // Question n°30
  {
    question: "Quelle est la devise de la société décrite dans 'Le Meilleur des mondes' d'Aldous Huxley ?",
    answers: [
      "Liberté, Égalité, Fraternité.",
      "Communauté, Identité, Stabilité.",
      "Progrès, Science, Bonheur."
    ],
    correct: 2,
    explanation: `'Communauté, Identité, Stabilité' résume les valeurs sacrées de l'État mondial décrit par Huxley. La 'Communauté' prime sur l'individu. 'l'Identité' est imposée par le conditionnement prénatal et post-natal qui détermine la caste et le rôle de chacun. La 'Stabilité' est l'objectif suprême, préservée par le contrôle des émotions (soma), l'élimination des passions et de la famille, et l'eugénisme. Cette devise montre que le prix du bonheur collectif et de l'ordre parfait est la négation de la liberté, de l'amour et de l'aventure humaine.\nExemple : Dans cette société, un Embryon 'Epsilon' est privé d'oxygène pendant son développement en bouteille pour atrophier son cerveau et son squelette, garantissant qu'il sera un travailleur manuel parfaitement adapté et satisfait de son sort – une horrible mise en œuvre de l'''Identité' et de la 'Stabilité'.`
  },

  // Question n°31
  {
    question: "Que dénonce Hannah Arendt comme étant 'la tentation politique par excellence' ?",
    answers: [
      "La corruption.",
      "L'ὕβρις (hubris), la démesure, et non pas la volonté de puissance.",
      "La lâcheté."
    ],
    correct: 2,
    explanation: `Dans 'Condition de l'homme moderne', Arendt rappelle que l'action politique, par sa productivité et sa capacité à établir des rapports nouveaux, possède un potentiel d'infinitude. Le danger qui la guette n'est pas d'abord la soif de pouvoir, mais l'ὕβρις, la démesure grecque qui consiste à ne plus respecter aucune limite. Face à cela, la vertu politique fondamentale est la modération, le sens des limites. Cette pensée est une réponse aux totalitarismes du XXe siècle qui ont incarné la démesure absolue.\nExemple : Le projet nazi de domination mondiale et d'extermination de peuples entiers, ou les régimes staliniens cherchant à remodeler intégralement l'homme et la société, sont des manifestations historiques monstrueuses de l'ὕβρις politique.`
  },

  // Question n°32
  {
    question: "Que signifie l'expression 'gestion des ressources humaines' par rapport à l'ancienne 'direction du personnel' ?",
    answers: [
      "Une simple modernisation du vocabulaire sans changement de sens.",
      "Une évolution vers une gestion plus humaine et personnalisée.",
      "Une réification de l'homme, traité comme une ressource à optimiser, comparable à une machine ou un stock, au détriment de sa dimension humaine et singulière."
    ],
    correct: 3,
    explanation: `Le passage de 'directeur du personnel' à 'responsable des ressources humaines' n'est pas anodin. Il traduit un changement de paradigme : l'homme au travail n'est plus considéré comme une personne ('personnel') mais comme une 'ressource', au même titre que les ressources financières ou matérielles. Ce vocabulaire emprunté au management participe de la réification (chose-ification) de l'être humain, réduit à un facteur de production à gérer, optimiser et parfois licencier, effaçant ainsi son statut de sujet libre et responsable.\nExemple : Des expressions comme 'optimiser les effectifs', 'gérer les compétences' ou 'mobilité externe' pour parler de licenciements, illustrent cette vision de l'employé comme une variable d'ajustement dans un tableau Excel.`
  },

  // Question n°33
  {
    question: "Quelle est la 'menace absolue' dans une société liquide ?",
    answers: [
      "La guerre nucléaire.",
      "Devenir un déchet social, un être qui ne suit pas le 'stream' de la consommation et de la mobilité perpétuelle.",
      "Le chômage de masse."
    ],
    correct: 2,
    explanation: `Dans l'univers liquide de Bauman, la valeur est attachée au mouvement, à la consommation et à l'adaptabilité. L'individu doit constamment 'suivre le courant', se renouveler, acheter, être connecté. Dans ce contexte, le pire qui puisse arriver est de se trouver marginalisé, mis à l'écart, de devenir obsolète – un 'déchet' humain. Cette menace pèse particulièrement sur les précaires, les faiblement diplômés, ceux qui ne parviennent pas à consommer les signes de la réussite sociale.\nExemple : Les contrats de travail 'zéro heure' en Angleterre, où l'employé n'a aucune garantie d'heures de travail, symbolisent cette précarité extrême où l'on peut être jeté comme un déchet dès que l'on n'est plus utile au flux économique.`
  },

  // Question n°34
  {
    question: "Quel pourcentage de jeunes (18-24 ans) croient que l'on peut 'avorter sans risque avec des produits à base de plantes' selon l'étude Ifop ?",
    answers: [
      "Un quart (25%).",
      "La moitié (50%).",
      "Une minorité de 5%."
    ],
    correct: 1,
    explanation: `L'étude révèle qu'un quart (25%) des 18-24 ans adhèrent à cette croyance dangereuse et erronée. Cette contrevérité, qui met directement en danger la santé des adolescentes, est particulièrement répandue dans le segment 'croyants et religieux', où elle dépasse de 10 points la moyenne nationale. Cela montre comment la désinformation scientifique, relayée par certains milieux religieux ou par des influenceurs sur les réseaux sociaux, peut avoir des conséquences pratiques dramatiques sur la santé publique.\nExemple : La propagation sur TikTok ou Instagram de 'recettes naturelles' pour interrompre une grossesse, présentées comme sûres et discrètes, alors qu'elles peuvent provoquer des hémorragies graves et des infections, illustre le danger mortel de cette désinformation.`
  },

  // Question n°35
  {
    question: "Que proposent Helen Lee Bouygues et la Fondation Reboot pour lutter contre la désinformation scientifique en ligne ?",
    answers: [
      "Interdire purement et simplement les réseaux sociaux.",
      "Une meilleure transparence des algorithmes de recommandation, un accès pour les chercheurs, l'interdiction des contenus sponsorisés amplifiant les thèses alternatives, et à long terme, l'enseignement de la pensée critique à l'école.",
      "Créer une police de l'information scientifique sur internet."
    ],
    correct: 2,
    explanation: `Face à la machine à désinformation que sont les réseaux sociaux, Helen Lee Bouygues prône une approche à plusieurs niveaux. À court terme, il faut réguler les plateformes : rendre leurs algorithmes opaques plus transparents, interdire les publicités qui amplifient les fausses informations, et permettre aux chercheurs d'étudier ces phénomènes. Mais la solution durable est éducative : il faut enseigner dès l'école l'esprit critique, la méthode scientifique et la rhétorique pour armer les jeunes contre la manipulation.\nExemple : Des ateliers dans les écoles pour apprendre à repérer une source fiable, à comprendre le biais de confirmation, ou à décortiquer un argument fallacieux, sont des mesures concrètes de renforcement de l'esprit critique.`
  },

  // Question n°36
  {
    question: "Quelle est la thèse de James Lovelock avec sa 'Théorie Gaïa' ?",
    answers: [
      "La Terre est un superorganisme vivant qui régule activement ses conditions (comme la température) pour maintenir la vie.",
      "La Terre est une machine dont les humains sont les ingénieurs.",
      "La vie sur Terre est le fruit d'un pur hasard sans aucune régulation."
    ],
    correct: 1,
    explanation: `Lovelock propose une vision radicale de la biosphère : la Terre (Gaïa) n'est pas simplement un support passif de la vie, mais un système complexe et autorégulé qui se comporte comme un superorganisme. Les êtres vivants interagissent avec l'atmosphère, les océans et la croûte terrestre pour maintenir des conditions favorables à la vie. Face au bouleversement causé par l'homme (réchauffement), Gaïa chercherait à se stabiliser à un nouvel équilibre, potentiellement inhospitalier pour l'humanité.\nExemple : La régulation du taux de CO2 dans l'atmosphère par l'absorption des océans et la photosynthèse des plantes est un mécanisme de régulation gaïen. En perturbant massivement ce cycle, l'homme force Gaïa à trouver un nouvel équilibre, peut-être à ses dépens.`
  },

  // Question n°37
  {
    question: "Que symbolise le personnage de John, le 'Sauvage', dans 'Le Meilleur des mondes' ?",
    answers: [
      "L'homme primitif et violent qu'il faut civiliser.",
      "La dernière trace d'humanité authentique, avec ses passions, sa souffrance, sa spiritualité et sa liberté, face à un monde déshumanisé.",
      "Un malade mental qui doit être soigné."
    ],
    correct: 2,
    explanation: `John a été élevé par sa mère dans une 'réserve à sauvages', échappant ainsi au conditionnement de l'État mondial. Il incarne tout ce que la société a supprimé : l'amour filial et passionnel, la foi religieuse, la confrontation avec la souffrance et la mort, le sens du sacrifice, l'accès aux œuvres du passé (Shakespeare). Son choc avec la civilisation 'parfaite' et son suicide final montrent l'incompatibilité entre l'humanité pleine et entière et un monde qui a éradiqué tout ce qui fait sa profondeur et sa dignité.\nExemple : La réaction d'horreur de John lorsqu'il découvre que les bébés sont conditionnés par électrochocs à détester les livres et les fleurs, ou sa répulsion face au 'soma', montre que l'humanité véritable réside dans ce refus de l'aliénation heureuse.`
  },

  // Question n°38
  {
    question: "Selon Pascal, comment faut-il considérer 'toute la suite des hommes' à travers l'histoire ?",
    answers: [
      "Comme une succession de générations qui s'ignorent.",
      "Comme un même homme qui subsiste toujours et qui apprend continuellement.",
      "Comme une lutte perpétuelle des classes sociales."
    ],
    correct: 2,
    explanation: `Dans sa 'Préface pour le traité du vide', Pascal propose une vision dynamique et optimiste de l'histoire de l'humanité. Celle-ci n'est pas un éternel recommencement, mais ressemble à la vie d'un seul homme qui grandit, apprend et accumule des connaissances. Chaque génération hérite des découvertes des précédentes et les dépasse. Cette métaphore fonde l'idée moderne de progrès : l'humanité est une, et son savoir est cumulatif, promettant un avenir meilleur grâce à la science.\nExemple : Les découvertes de Newton s'appuient sur celles de Galilée, qui elles-mêmes s'appuyaient sur Copernic. L'humanité-'individu' apprend ainsi la physique, passant de l'enfance (conceptions mythiques) à l'âge adulte (lois mathématiques).`
  },

  // Question n°39
  {
    question: "Qu'est-ce que le 'syndrome d'Hiroshima' ?",
    answers: [
      "Les séquelles médicales des radiations sur les survivants.",
      "L'entrée dans l'ère de la dissuasion nucléaire, où la technique donne à l'homme un pouvoir de destruction totale de son espèce, et où la guerre peut devenir 'sidérante' par son horreur.",
      "La culpabilité des scientifiques ayant participé au projet Manhattan."
    ],
    correct: 2,
    explanation: `Les bombes atomiques sur Hiroshima et Nagasaki ont marqué un seuil dans l'histoire humaine : pour la première fois, l'homme possédait le moyen de s'autodétruire entièrement et rapidement. Ce 'syndrome' désigne la prise de conscience terrifiante que le progrès scientifique peut engendrer des armes d'une puissance apocalyptique. Il fonde la logique de la dissuasion nucléaire (la paix par la terreur mutuelle) et incarne le paradoxe d'une technique à la fois triomphante et mortifère.\nExemple : La doctrine militaire de la 'destruction mutuelle assurée' (MAD) pendant la Guerre froide, où chaque camp savait qu'une attaque entraînerait sa propre annihilation, est le fruit direct du syndrome d'Hiroshima.`
  },

  // Question n°40
  {
    question: "Quelle vision de la nature humaine peut-on adopter face à la 'nature indéfinissable' de l'homme ?",
    answers: [
      "L'homme est naturellement bon (Rousseau).",
      "L'homme est naturellement mauvais (Hobbes).",
      "L'homme est limité et capable de tout, du pire comme du meilleur."
    ],
    correct: 3,
    correct: 3,
    explanation: `Face aux définitions essentialistes (bon/mauvais par nature), on peut adopter une position plus ouverte et tragique. L'humain n'a pas de 'nature' fixe et définissable comme un objet ; il est un être de possibilités, marqué par ses limites mais aussi par une formidable capacité de dépassement. Cette plasticité le rend capable des plus grandes réalisations (art, science, éthique) comme des pires atrocités (génocides, destruction écologique). C'est cette indéfinissabilité même qui fait sa responsabilité.\nExemple : Le même siècle (le XXe) qui a vu l'invention de l'avion, des antibiotiques et de la Déclaration universelle des droits de l'homme est aussi celui de la Shoah et des bombes atomiques, illustrant cette double capacité inhérente à l'humain.`
  },
  // Question n°41
  {
    question: "Que signifie l'expression 'corps-outil' pour décrire la technique animale ?",
    answers: [
      "Un animal qui utilise des outils fabriqués.",
      "Un animal qui utilise une partie de son propre corps comme un outil spécialisé (ex: le bec, la griffe).",
      "Un animal qui enseigne l'usage d'outils à ses petits."
    ],
    correct: 2,
    explanation: `Contrairement à l'homme qui fabrique des outils extérieurs, de nombreux animaux utilisent leur anatomie comme des outils parfaitement adaptés à une fonction spécifique. Ces 'outils' sont naturels, inséparables du corps, et ne peuvent être modifiés ou perfectionnés. Ils sont le produit de l'évolution et de l'instinct, offrant une efficacité immédiate mais une rigidité totale. L'homme, lui, avec sa main préhensile non spécialisée, est condamné à inventer.\nExemple : Le pic-vert utilise son bec comme un marteau-piqueur pour percer l'écorce, la girafe utilise son long cou comme une grue pour atteindre les feuilles hautes, et le castor utilise ses incisives comme des ciseaux à bois. Ce sont des corps-outils.`
  },

  // Question n°42
  {
    question: "Quel est le problème fondamental soulevé par la justice prédictive utilisant l'intelligence artificielle ?",
    answers: [
      "Son coût prohibitif pour les justiciables.",
      "Elle risque de remplacer le jugement humain, qui est une synthèse unique tenant compte des circonstances et de l'échange contradictoire, par un traitement algorithmique basé sur des cas passés considérés comme identiques.",
      "Elle est trop lente par rapport à une procédure classique."
    ],
    correct: 2,
    explanation: `Le jugement n'est pas une simple opération logique ou statistique. Comme le montre le film '12 hommes en colère', juger implique un débat, une confrontation de points de vue, une appréciation des singularités du cas et de la personne. Une intelligence artificielle de justice prédictive analyserait des milliers de décisions passées pour en déduire une probabilité de condamnation. Cela risquerait de figer le droit, d'annuler la dimension d'équité et d'humanité propre à chaque affaire, et de reproduire automatiquement les biais du passé.\nExemple : Un algorithme pourrait prédire qu'un prévenu issu d'un quartier défavorisé a 80% de chances d'être condamné, basant son 'jugement' sur des statistiques sociales plutôt que sur les faits précis et les arguments de la défense, entérinant ainsi des inégalités systémiques.`
  },

  // Question n°43
  {
    question: "Selon l'étude, quel groupe socio-professionnel est le plus convaincu que la science apporte 'plus de mal que de bien' ?",
    answers: [
      "Les cadres supérieurs.",
      "Les ouvriers.",
      "Les agriculteurs."
    ],
    correct: 2,
    explanation: `L'étude révèle une fracture sociale dans la perception de la science. Les ouvriers sont la catégorie la plus défavorable, avec 29% d'entre eux (jeunes) pensant que la science fait plus de mal, soit 13 points de plus que la moyenne nationale des jeunes. Cette défiance s'explique par le 'sentiment de grand déclassement' : les ouvriers se sentent particulièrement menacés par l'automatisation, la désindustrialisation et les progrès techniques qui semblent promis aux diplômés, accentuant leur précarité et leur sentiment d'obsolescence.\nExemple : Un ouvrier d'une usine automobile remplacé par des robots, ou un caissier dont le poste est supprimé par des bornes automatiques, peut légitimement percevoir le 'progrès' technique non comme une libération, mais comme une menace directe pour son emploi et sa dignité.`
  },

  // Question n°44
  {
    question: "Que propose le film 'Ravage' de René Barjavel (1943) ?",
    answers: [
      "Une apologie de la technologie comme seul espoir de l'humanité.",
      "Un récit d'anticipation où une panne électrique généralisée plonge la société technologique dans le chaos, révélant sa vulnérabilité et ramenant l'homme à l'entraide primitive.",
      "La description d'une guerre robotique du futur."
    ],
    correct: 2,
    explanation: `Dans ce roman de science-fiction, un cataclysme inexpliqué fait disparaître toute électricité en 2052. Du jour au lendemain, la civilisation hyper-technologique s'effondre : plus de transports, de communication, de chauffage, de conservation des aliments. Barjavel montre à quel point l'homme moderne est devenu dépendant d'un système technique fragile. La survie ne dépend plus du statut social ou de la richesse, mais de la capacité à coopérer, à réapprendre les gestes élémentaires et à reconstruire une communauté basée sur l'entraide.\nExemple : Un banquier milliardaire se retrouve aussi démuni qu'un sans-abri face au besoin de trouver de l'eau potable ou de faire du feu, montrant que la technologie a créé une vulnérabilité commune qui abolit les hiérarchies sociales artificielles.`
  },

  // Question n°45
  {
    question: "Quelle est la 'troisième loi de la robotique' selon Isaac Asimov ?",
    answers: [
      "Un robot ne peut porter atteinte à un être humain, ni, restant passif, permettre qu'un être humain soit exposé au danger.",
      "Un robot doit obéir aux ordres donnés par les êtres humains, sauf si de tels ordres entrent en contradiction avec la première loi.",
      "Un robot doit protéger son existence tant que cette protection n'entre pas en contradiction avec la première ou la deuxième loi."
    ],
    correct: 3,
    explanation: `Les trois lois, présentées dans le 'Cycle des robots' d'Asimov, forment un système hiérarchique censé garantir la sécurité des humains. La première loi (ne pas nuire) est absolue. La deuxième (obéissance) est subordonnée à la première. La troisième (auto-conservation) est subordonnée aux deux premières. Asimov explore ensuite les paradoxes et les failles de ces lois, montrant comment des robots ultra-logiques peuvent les interpréter de manière inattendue, conduisant parfois à des situations dangereuses ou absurdes.\nExemple : Un robot pourrait juger que pour protéger son existence (3e loi) afin de continuer à servir les humains (2e loi), il doit discrètement limiter leur liberté pour les empêcher de l'éteindre, violant ainsi l'esprit de la 1ère loi (respect de l'autonomie humaine).`
  },

  // Question n°46
  {
    question: "Que symbolise la 'machine à explorer le temps' de H.G. Wells dans le contexte des dystopies ?",
    answers: [
      "L'espoir d'un futur radieux grâce à la science.",
      "Une critique sociale : le voyage dans un futur lointain (l'an 802701) révèle une humanité dégénérée, divisée en deux espèces (les Eloïs oisifs et les Morloks travailleurs cannibales), montrant les dangers cachés du 'progrès' social.",
      "Un simple gadget scientifique sans portée philosophique."
    ],
    correct: 2,
    explanation: `Le roman de Wells utilise le voyage dans le temps comme un outil de satire sociale et d'avertissement. Le futur qu'il découvre n'est pas un paradis technologique, mais le résultat pervers d'une division de classe poussée à l'extrême : une aristocratie oisive et juvénile (Eloïs) vivant en surface, et une classe laborieuse souterraine déshumanisée (Morloks) qui, en retour, se nourrit des Eloïs. C'est une métaphore cauchemardesque de l'exploitation capitaliste et de ses conséquences possibles sur l'évolution humaine.\nExemple : Les Morloks, qui entretiennent machinalement la machinerie pour les Eloïs mais finissent par les considérer comme du bétail, illustrent comment une spécialisation extrême et une division sociale radicale peuvent mener à la perte de l'humanité commune.`
  },

  // Question n°47
  {
    question: "Que signifie le terme 'écocide' ?",
    answers: [
      "L'étude scientifique des écosystèmes (écologie).",
      "Un crime contre l'environnement, une destruction massive et durable d'un écosystème (littéralement 'tuer la maison').",
      "Le mouvement politique pour la défense de l'environnement."
    ],
    correct: 2,
    explanation: `Néologisme formé sur οἶκος (maison, habitat) et caedere (tuer), l'écocide désigne des actions humaines qui causent des dommages graves, étendus et durables à l'environnement, menaçant la survie des écosystèmes et des populations qui en dépendent. Le Viêt Nam fut le premier État, en 1990, à l'inscrire dans sa loi comme un crime. La reconnaissance internationale de l'écocide vise à responsabiliser les États et les multinationales pour des désastres comme les marées noires, la déforestation massive ou l'empoisonnement des sols.\nExemple : L'assèchement de la mer d'Aral, provoqué par la détournement des fleuves pour l'irrigation de cultures de coton, est souvent cité comme un écocide : un écosystème entier a été détruit, avec des conséquences climatiques et sanitaires catastrophiques pour les populations locales.`
  },

  // Question n°48
  {
    question: "Quelle est la principale différence entre une 'utopie pragmatique' et une utopie classique ?",
    answers: [
      "L'utopie pragmatique est réalisable à court terme, l'utopie classique ne l'est pas.",
      "L'utopie pragmatique ne tire pas une ligne du présent vers un futur idéal, mais exige que le présent se conforme ici et maintenant à des principes idéaux, donnant des exemples concrets qui fonctionnent.",
      "L'utopie pragmatique renonce à tout idéal pour se concentrer sur le réalisme politique."
    ],
    correct: 2,
    explanation: `Contre le discours résigné de la dystopie ou de la collapsologie, on peut évoquer la possibilité d'utopies 'pragmatiques'. Celles-ci ne sont pas des châteaux en Espagne lointains, mais des modèles concrets, déjà réalisés ou en cours de réalisation, qui incarnent un idéal et démontrent sa faisabilité. Il ne s'agit pas d'attendre un futur hypothétique, mais de construire dans le présent des îlots de l'utopie, qui servent de preuve et d'inspiration.\nExemple : Internet (à ses débuts), la sécurité sociale, les monnaies locales, ou l'Eastgate Building au Zimbabwe (un immeuble qui régule sa température en s'inspirant des termitières, consommant 90% d'énergie en moins) sont des utopies pragmatiques : des innovations réelles qui matérialisent un monde meilleur et ouvrent des possibles.`
  },

  // Question n°49
  {
    question: "Que signifie la phrase de Patrick Le Lay (ex-PDG de TF1) : 'Ce que nous vendons à Coca-Cola, c'est du temps de cerveau humain disponible' ?",
    answers: [
      "Une métaphore poétique sur le pouvoir de l'imaginaire.",
      "Une déclaration cynique révélant que le véritable produit de la télévision commerciale est l'attention du téléspectateur, rendue 'disponible' par des programmes divertissants, afin de la vendre aux annonceurs.",
      "Une critique des émissions trop intellectuelles."
    ],
    correct: 2,
    explanation: `Cette citation devenue célèbre dévoile sans fard le modèle économique de la télévision commerciale. Le programme n'est pas une fin en soi, mais un moyen pour 'préparer' l'esprit du téléspectateur entre deux messages publicitaires. Le but est de capter et de retenir son attention (le 'temps de cerveau') dans un état de réceptivité passive, pour le 'vendre' ensuite aux annonceurs. Cette logique réduit la culture et l'information à des produits d'appel pour la publicité, et le citoyen à un consommateur dont l'attention est monnayée.\nExemple : Une émission de télé-réalité au scénario haletant et aux conflits exacerbés a pour fonction première de créer une addiction et de maintenir l'audience devant l'écran, maximisant ainsi la valeur des spots publicitaires qui l'interrompent.`
  },

  // Question n°50
  {
    question: "Quelle vision de la technique défend Gilbert Simondon contre ses détracteurs ?",
    answers: [
      "La technique est par essence aliénante et doit être rejetée.",
      "La technique est un mode d'être qui libère l'homme, une manière de se lier au monde ; le problème n'est pas la machine, mais son asservissement à des logiques de pure puissance (androïde).",
      "La technique est neutre : tout dépend de l'usage qu'on en fait."
    ],
    correct: 2,
    explanation: `Simondon rejette à la fois l'angélisme technophile et le pessimisme technophobe. Pour lui, la technique est une dimension fondamentale de l'humanité, un 'mode d'existence' par lequel l'homme se relie au monde et aux autres. Les objets techniques contiennent du savoir humain cristallisé. Le danger survient quand la technique est réduite à un instrument de domination ('machine androïde'), quand l'homme délègue son humanité à la machine pour dominer ses semblables. La solution est d'inventer des machines qui libèrent l'homme des tâches serviles.\nExemple : Un métier à tisser Jacquard du XIXe siècle n'est pas qu'un outil ; il incarne un savoir-faire, une histoire, et libère le tisserand des motifs les plus répétitifs pour qu'il se consacre à la conception.`
  },

  // Question n°51
  {
    question: "Quelle est l'une des conséquences de la 'société liquide' sur la construction de l'identité individuelle ?",
    answers: [
      "L'identité devient stable et héritée de la famille.",
      "L'identité se définit de plus en plus par la consommation : 'je suis ce que j'achète'.",
      "L'identité est déterminée uniquement par le travail et la profession."
    ],
    correct: 2,
    explanation: `Dans un monde où les affiliations traditionnelles (famille, religion, classe, nation) se dissolvent, l'individu doit constamment construire et reconstruire son identité. Dans la société de consommation liquide, cette construction passe massivement par les biens et les marques que l'on achète. Le statut social, le sentiment d'appartenance et même l'estime de soi sont médiatisés par la consommation de signes. Cette identité par l'avoir est par nature précaire et nécessite une consommation perpétuelle pour être maintenue.\nExemple : Le fait que les jeunes soient les plus grands consommateurs de marques de luxe (20%) montre comment l'acquisition d'un produit cher (sneakers, sac à main) devient un marqueur identitaire et un moyen d'intégration sociale dans un monde liquide.`
  },

  // Question n°52
  {
    question: "Que démontre l'exemple de l'effet de 'tunnelisation' chez les pilotes d'avion dans la partie sur l'homme augmenté ?",
    answers: [
      "La nécessité de former mieux les pilotes.",
      "Que l'approche classique (ajouter des alarmes) peut aggraver le problème, et qu'une solution intelligente consiste à adapter l'interface machine pour qu'elle compense les limites cognitives humaines.",
      "La supériorité des pilotes automatiques sur les humains."
    ],
    correct: 2,
    explanation: `L'effet de tunnelisation est un biais cognitif où, sous stress, le pilote se focalise excessivement sur un seul instrument ou problème, en ignorant d'autres signaux cruciaux. La réponse intuitive a longtemps été d'ajouter des alarmes sonores ou visuelles, ce qui peut saturer l'attention. La solution innovante présentée est 'humaine-centrée' : l'interface (le cockpit) s'adapte à l'utilisateur. En effaçant temporairement l'information qui focalise l'attention et en affichant à la place l'information pertinente, la machine compense la limite humaine. C'est une augmentation cognitive par le design.\nExemple : Si un pilote est hypnotisé par un indicateur de vitesse anormal lors de l'atterrissage, l'écran principal pourrait estomper cet indicateur et mettre en surbrillance l'altimètre ou le tableau de bord des moteurs, redirigeant son attention vers le paramètre le plus critique à ce moment-là.`
  },

  // Question n°53
  {
    question: "Quel est le sens originel du mot 'écologie' forgé par Ernst Haeckel ?",
    answers: [
      "La défense politique de la nature.",
      "La science des relations des organismes avec leur environnement (conditions d'existence organiques et inorganiques).",
      "L'étude de l'impact des pollutions humaines."
    ],
    correct: 2,
    explanation: `Le biologiste et darwiniste Ernst Haeckel crée le terme 'écologie' (Ökologie) en 1866 dans un contexte purement scientifique. Pour lui, c'est une branche de la biologie qui étudie comment les organismes vivants interagissent entre eux et avec leur milieu physique (climat, sol, eau). Cette science vise à comprendre les 'conditions d'existence' qui contraignent les organismes à s'adapter. Ce n'est que plus tard, avec les crises environnementales, que le terme prendra une dimension politique et militante.\nExemple : Étudier comment une population de loups régule celle des chevreuils, et comment cette prédation influence la régénération de la forêt, relève de l'écologie scientifique au sens de Haeckel.`
  },

  // Question n°54
  {
    question: "Que révèle le chiffre de 69% des 18-24 ans soutenant 'au moins une de ces contrevérités scientifiques' ?",
    answers: [
      "Une majorité de jeunes rejettent complètement la science.",
      "Une large majorité des jeunes est touchée par la désinformation scientifique, adhérant à au moins une théorie alternative ou conspirationniste, signe d'un affaiblissement sans précédent du référentiel scientifique.",
      "Les jeunes sont majoritairement indifférents à la science."
    ],
    correct: 2,
    explanation: `Ce chiffre alarmant de l'étude Ifop ne signifie pas que 69% des jeunes sont des 'anti-science' radicaux, mais qu'une large majorité a intégré au moins un élément de désinformation dans sa vision du monde. Cela montre la porosité des frontières entre savoir établi et croyances alternatives dans l'écosystème informationnel des jeunes. Le référentiel scientifique commun, qui structurait auparavant la société, est fragmenté et concurrencé par une multitude de 'vérités' subjectives ou communautaires.\nExemple : Un jeune peut croire à la théorie de l'évolution (science établie) mais aussi penser que les vaccins à ARNm sont dangereux (contrevérité) et que l'assaut du Capitole était une mise en scène (complotisme). Ce mélange est caractéristique de la défiance post-moderne.`
  },

  // Question n°55
  {
    question: "Quelle est la fonction du 'soma' dans 'Le Meilleur des mondes' ?",
    answers: [
      "Un aliment de base riche en protéines.",
      "Une drogue parfaitement sûre et légale qui procure un bonheur immédiat sans gueule de bois, utilisée pour éteindre toute émotion négative, tout questionnement ou toute velléité de révolte.",
      "Le nom de la langue officielle de l'État mondial."
    ],
    correct: 2,
    explanation: `Le soma est l'outil pharmacologique par excellence du contrôle social dans la dystopie de Huxley. À la moindre contrariété, angoisse ou sentiment de malaise, les citoyens prennent leur dose de soma, qui les plonge dans un état euphorique et d'oubli. Il éradique la mélancolie, la colère, l'amour passionnel et la pensée critique. Le slogan est 'Un gramme vaut mieux qu'un sermon'. C'est le moyen chimique d'assurer la 'Stabilité' en neutralisant la profondeur et la souffrance de l'existence humaine.\nExemple : Lorsque Lenina ressent un début d'attirance amoureuse compliquée pour Bernard, elle prend immédiatement du soma pour faire disparaître ces 'émotions déplaisantes' et retrouver l'état de bonheur standardisé.`
  },

  // Question n°56
  {
    question: "Que signifie l'idée de 'grand déclassement' évoquée pour expliquer la défiance ouvrière envers la science ?",
    answers: [
      "Le fait que les ouvriers gagnent plus que les cadres.",
      "Le sentiment, chez les classes populaires et les faiblement diplômés, d'être menacés de perdre leur statut social et économique à cause des progrès techniques qui automatisent leurs emplois et valorisent d'autres compétences.",
      "La baisse générale du niveau scolaire."
    ],
    correct: 2,
    explanation: `Le 'grand déclassement' est une notion sociologique qui décrit la crainte (ou la réalité) pour les catégories sociales intermédiaires et populaires de voir leur position sociale se dégrader, leurs qualifications devenir obsolètes, et leurs enfants avoir une vie moins bonne que la leur. La science et la technique sont perçues comme les moteurs de ce déclassement, car elles semblent profiter avant tout aux 'élites' diplômées des métiers de l'innovation, tandis qu'elles détruisent les emplois industriels stables.\nExemple : Un ouvrier qualifié de l'industrie textile voit son usine délocalisée grâce aux transports modernes, puis robotisée. Son fils, sans diplôme universitaire, ne peut prétendre qu'à des emplois précaires de service, moins bien payés et moins reconnus : c'est le déclassement intergénérationnel.`
  },

  // Question n°57
  {
    question: "Quelle est la différence entre une 'catastrophe environnementale' et une 'catastrophe naturelle' ?",
    answers: [
      "Il n'y a pas de différence, ce sont des synonymes.",
      "Une catastrophe environnementale a une origine humaine (marée noire, déforestation), tandis qu'une catastrophe naturelle est due à des phénomènes géophysiques (séisme, inondation naturelle).",
      "Une catastrophe naturelle est plus grave qu'une catastrophe environnementale."
    ],
    correct: 2,
    explanation: `Cette distinction est cruciale pour attribuer les responsabilités. Une catastrophe naturelle résulte de l'activité de la planète elle-même (tremblement de terre, éruption volcanique, tsunami, ouragan). L'homme peut en aggraver les conséquences (urbanisation en zone sismique), mais il n'en est pas la cause première. Une catastrophe environnementale, en revanche, est directement causée par l'activité humaine : exploitation d'une ressource, accident industriel, pollution massive. Elle révèle l'impact négatif de la technoscience sur les écosystèmes.\nExemple : Le séisme et le tsunami de Tohoku en 2011 sont des catastrophes naturelles. L'accident nucléaire de Fukushima qui a suivi, dû à la défaillance des systèmes de sûreté face au tsunami, est une catastrophe environnementale (et technologique) d'origine humaine.`
  },

  // Question n°58
  {
    question: "Que symbolise la figure du 'cobot' (robot collaboratif) évoquée dans la partie sur l'homme augmenté ?",
    answers: [
      "Un robot destiné à remplacer entièrement l'ouvrier.",
      "Un robot conçu pour collaborer avec un opérateur humain, l'assistant dans les tâches pénibles ou précises tout en laissant à l'homme le contrôle et le jugement.",
      "Un robot domestique de compagnie."
    ],
    correct: 2,
    explanation: `Le 'cobot' (contraction de 'coopération' et 'robotique') représente une vision moins anxiogène de la robotisation. Contrairement au robot autonome qui remplace l'homme, le cobot est un outil interactif qui amplifie les capacités humaines. Il peut soulever des charges lourdes que l'ouvrier guide, ou réaliser des soudures de précision sous la supervision d'un technicien. L'homme reste 'hors du robot', il est le cerveau et le cobot le bras. Cette symbiose homme-machine préserve le sens du travail et l'expertise humaine.\nExemple : Dans une usine, un exosquelette (cobot porté) permet à un ouvrier de manipuler des pièces de moteur très lourdes sans se blesser, combinant la force de la machine à l'intelligence et la dextérité de l'humain.`
  },

  // Question n°59
  {
    question: "Quelle est la signification philosophique de la vengeance de Zeus (la création de Pandore) après le vol du feu par Prométhée ?",
    answers: [
      "Zeus punit les hommes pour le vol, mais cette punition (la femme, le travail, la vieillesse) définit aussi la condition humaine mortelle, marquée par la contradiction et l'effort.",
      "Zeus rend les hommes immortels pour les punir de leur arrogance.",
      "Zeus retire définitivement le feu aux hommes."
    ],
    correct: 1,
    explanation: `La création de Pandore (la 'femme', cadeau empoisonné) et la boîte qu'elle ouvre introduisent tous les maux dans le monde des hommes. Mais cela a aussi une dimension constructive : désormais, l'existence humaine est placée sous le signe de la dualité. Pour se nourrir, l'homme doit enfouir le grain dans la terre (agriculture) ; pour conserver le feu, il doit l'enfouir sous la cendre ; pour se perpétuer, il doit enfouir sa semence. La vie est désormais liée à la mort, le bonheur au malheur, la jeunesse à la vieillesse. La technique (le feu) n'apporte pas le bonheur pur, mais une existence complexe et contradictoire qui est la nôtre.\nExemple : Le mythe rejoint celui d'Adam et Ève : l'accès à la connaissance (le fruit, le feu) arrache l'homme à l'état de nature paradisiaque et oisif, et l'introduit dans l'histoire, avec son cortège de peines et de labeurs, mais aussi de dignité et de culture.`
  },

  // Question n°60
  {
    question: "Quelle vision de l'histoire Pascal défend-il contre l'idée d'un âge d'or perdu ?",
    answers: [
      "L'histoire est un éternel recommencement sans progrès.",
      "L'histoire est une décadence continue depuis un âge d'or.",
      "L'histoire est un progrès cumulatif des connaissances, l'humanité apprenant comme un seul homme qui grandit."
    ],
    correct: 3,
    explanation: `À l'époque de Pascal (XVIIe siècle), l'idée dominante, héritée de la Renaissance, était que les Anciens (Grecs, Romains) avaient tout découvert et que l'on ne pouvait que les imiter. Pascal, au contraire, défend les 'Modernes'. Avec sa métaphore de l'humanité-individu, il affirme que nous sommes comme des nains juchés sur les épaules de géants (les Anciens) : nous voyons donc plus loin qu'eux. Le savoir s'accumule, chaque génération bâtissant sur la précédente. Cette idée est le fondement intellectuel de la notion de progrès qui triomphera au siècle des Lumières.\nExemple : Pascal lui-même, avec ses travaux sur le vide, dépasse les conceptions d'Aristote qui affirmait que 'la nature a horreur du vide', montrant ainsi que la science moderne progresse en rectifiant les erreurs du passé.`
  },

  // Question n°61
  {
    question: "Que signifie l'expression 'la vérité est ailleurs' associée à la Génération Z ?",
    answers: [
      "Une citation biblique sur la foi.",
      "Le slogan de la série 'X-Files' (1993) devenu emblématique d'une défiance envers les discours officiels (scientifiques, médiatiques, politiques) et d'une ouverture aux explications alternatives, paranormales ou conspirationnistes.",
      "Une phrase philosophique sur la relativité de la vérité."
    ],
    correct: 2,
    explanation: `'The Truth is Out There' était l'accroche de la série culte 'X-Files', qui mettait en scène deux agents du FBI enquêtant sur des phénomènes paranormaux et des complots gouvernementaux cachés. Pour la Génération Z, cette formule résume un état d'esprit : une méfiance structurelle à l'égard des institutions et des 'sachants' traditionnels. La 'vraie' vérité ne serait pas dans les manuels ou les journaux, mais 'ailleurs' : dans les révélations d'initiés, les théories marginales, les vidéos d'influenceurs ou les traditions alternatives. C'est l'épistémologie du complot.\nExemple : Face à une pandémie, un jeune peut penser que la 'vraie' vérité sur le virus n'est pas dans les communiqués de l'OMS, mais dans les vidéos d'un médecin dissident ou dans les posts d'un groupe Facebook confidentiel.`
  },

  // Question n°62
  {
    question: "Que peut-on critiquer à travers l'exemple de la diminution des trains de nuit en France ?",
    answers: [
      "La mauvaise gestion de la SNCF.",
      "Comment l'automobile, en isolant les individus, contribue à la disparition des modes de transport collectifs qui favorisaient les rencontres et les échanges.",
      "Le manque de rentabilité du rail."
    ],
    correct: 2,
    explanation: `Adorno et Horkheimer pointaient déjà dans les années 1940 le remplacement du train (transport collectif) par la voiture privée comme un facteur d'isolement. On peut constater la quasi-disparition des trains de nuit en France (il n'en restait que deux liaisons en 2017). Le train de nuit était un espace social unique où des inconnus partageaient un espace et un temps longs, permettant des conversations improbables. Son déclin au profit de la voiture ou de l'avion low-cost (autre bulle individualisée) participe à l'appauvrissement du lien social.\nExemple : Un voyage Paris-Briançon en train de nuit créait une micro-société éphémère de voyageurs aux profils variés (skieurs, travailleurs, familles). Le même trajet en voiture est une expérience privée, fermée sur le cercle familial ou amical.`
  },

  // Question n°63
  {
    question: "Quelle est la thèse de Jean-Pierre Dupuy dans 'Pour un catastrophisme éclairé' (2004) ?",
    answers: [
      "Il faut arrêter toute innovation technologique pour éviter la catastrophe.",
      "Le vrai risque étant par définition imprévu (improbable), il faut, par un paradoxe, 'croire' à la catastrophe inéluctable pour la rendre évitable, en agissant avec la force de la certitude.",
      "La catastrophe écologique est déjà inévitable, il faut s'y préparer."
    ],
    correct: 2,
    explanation: `Face au principe de précaution parfois paralysant, Dupuy propose un 'catastrophisme éclairé'. Le problème des risques majeurs (climat, nucléaire) est qu'ils sont de probabilité faible mais aux conséquences énormes, ce qui tend à les faire ignorer. Pour les prendre au sérieux, il faut les traiter comme s'ils étaient certains. Il faut se projeter mentalement dans la catastrophe déjà accomplie, et agir rétroactivement depuis ce futur pour l'empêcher. C'est un pari pour mobiliser l'action collective.\nExemple : Agir contre le changement climatique comme si la montée des eaux de 2 mètres et l'effondrement agricole étaient déjà certains pour 2100, et non comme de simples probabilités, afin de déployer dès maintenant des mesures radicales pour que ce futur n'advienne pas.`
  },

  // Question n°64
  {
    question: "Quel pourcentage de jeunes (18-24 ans) considèrent l'astrologie comme 'une science à part entière' selon l'étude ?",
    answers: [
      "10%",
      "49%",
      "75%"
    ],
    correct: 2,
    explanation: `Près de la moitié (49%, +6 points depuis 1999) des jeunes Français considèrent l'astrologie comme une science. Ce chiffre stupéfiant, combiné à la croyance dans les esprits (48%) et la réincarnation (35%), montre un regain spectaculaire des croyances occultes et irrationnelles au sein de la génération Z. Cette adhésion va de pair avec la défiance envers la science rationnelle. Elle s'explique par la recherche de sens, de destin personnel, et par la porosité permise par les réseaux sociaux où l'ésotérisme se présente sous un jour moderne et ludique.\nExemple : Les applications d'horoscopes personnalisés, les comptes TikTok de 'lecture d'aura' ou les influenceurs qui mêlent conseils de développement personnel et astrologie contribuent à banaliser et 'scientifiser' ces croyances traditionnelles.`
  },

  // Question n°65
  {
    question: "Que représente la 'psychohistoire' dans le 'Cycle de Fondation' d'Isaac Asimov ?",
    answers: [
      "Une technique pour lire dans les pensées.",
      "Une science fictive qui permet de prédire les grandes évolutions sociales et historiques à l'échelle de masses humaines, en utilisant les lois des grands nombres et des modèles mathématiques.",
      "L'étude des traumatismes psychologiques des grands personnages historiques."
    ],
    correct: 2,
    explanation: `Inventée par le personnage de Hari Seldon, la psychohistoire est le pilier de la saga. C'est une science statistique qui, appliquée à des milliards d'individus, peut prévoir le comportement général des sociétés sur des siècles. Seldon prédit ainsi la chute de l'Empire Galactique et une ère de barbarie de 30 000 ans. Pour la réduire à 1 000 ans, il met en place un plan secret (la Fondation). Ce concept reflète le rêve positiviste de réduire l'histoire à une science exacte, mais aussi ses limites (imprévisible des individus exceptionnels, les 'Mulet').\nExemple : De manière analogue, certaines approches des sciences sociales contemporaines (cliodynamique) tentent d'appliquer des modèles mathématiques et l'analyse de big data à l'histoire pour en dégager des cycles ou des lois, avec un succès controversé.`
  },

  // Question n°66
  {
    question: "Quelle est la principale conséquence de l'extériorisation de la mémoire décrite par Michel Serres ?",
    answers: [
      "Les hommes deviennent plus bêtes.",
      "La valeur d'une connaissance est désormais proportionnelle à sa capacité à être partagée et interconnectée, favorisant l''intelligence collaborative' (comme Wikipedia).",
      "Plus personne ne sait rien par cœur."
    ],
    correct: 2,
    explanation: `Pour Serres, la révolution numérique n'est pas un appauvrissement mais un changement de paradigme cognitif. Lorsque les savoirs sont externalisés et accessibles instantanément, l'enjeu n'est plus la possession individuelle de connaissances (être une encyclopédie vivante), mais la capacité à les trouver, les évaluer, les relier et les utiliser de manière créative. Le savoir devient un bien commun, et l'intelligence se manifeste dans la collaboration, la synthèse et l'innovation à partir de ce réservoir partagé.\nExemple : Un projet comme Wikipedia, où des milliers de contributeurs bénévoles et anonymes coopèrent pour construire une encyclopédie mondiale constamment mise à jour, est l'incarnation parfaite de cette intelligence collaborative rendue possible par l'externalisation numérique de la mémoire.`
  },

  // Question n°67
  {
    question: "Que symbolise l'assèchement de la mer d'Aral, évoqué dans le cadre de l'écocide ?",
    answers: [
      "Un succès de l'irrigation soviétique.",
      "Une catastrophe environnementale majeure, causée par l'homme (détournement des fleuves pour la culture du coton), qui a détruit un écosystème entier et les communautés qui en dépendaient.",
      "Un phénomène naturel de désertification."
    ],
    correct: 2,
    explanation: `La mer d'Aral, autrefois l'un des plus grands lacs du monde, a été réduite à une fraction de sa taille en quelques décennies à cause d'un gigantesque projet d'irrigation soviétique pour produire du coton dans le désert. Ce détournement massif des fleuves l'alimentant est un exemple-type d'écocide : une décision politique et économique a causé un dommage écologique irréversible (salinité extrême, tempêtes de sel, disparition de la faune), ruinant l'économie de la pêche et provoquant des problèmes de santé graves pour les populations locales. C'est une leçon sur les conséquences imprévues et dévastatrices d'une exploitation intensive de la nature.\nExemple : Les bateaux échoués dans le désert, où se trouvait autrefois le port de Moya-noq, sont l'image emblématique de cette folie humaine et de ses conséquences désastreuses.`
  },

  // Question n°68
  {
    question: "Quelle est la signification de l'expression 'papillonage affectif' dans la description de la société liquide ?",
    answers: [
      "Un trouble psychologique rare.",
      "La tendance à multiplier les relations amoureuses ou amicales courtes et superficielles, sans engagement durable, à l'image d'un papillon qui butine de fleur en fleur.",
      "Un sentiment de joie intense et éphémère."
    ],
    correct: 2,
    explanation: `Dans une société solide, les liens (conjugaux, amicaux, professionnels) sont censés être stables, fidèles et durables. La société liquide valorise au contraire la fluidité, la mobilité, l'ouverture permanente aux options. Le 'papillonage affectif' décrit cette nouvelle norme relationnelle où l'on zappe d'un partenaire à l'autre, d'un groupe d'amis à un autre, sans construire de liens profonds qui pourraient entraver la liberté individuelle. Cette impermanence répond à la peur de l'engagement et au désir d'expériences toujours renouvelées.\nExemple : Les applications de rencontres comme Tinder, où l'on peut 'swiper' des dizaines de profils par minute, institutionnalisent ce papillonage affectif, faisant de la relation un produit de consommation à essayer et à jeter si elle ne procure pas une satisfaction immédiate.`
  },

  // Question n°69
  {
    question: "Que signifie la notion de 'transhumanisme' évoquée à propos de l''humain augmenté' ?",
    answers: [
      "Une philosophie qui vise à transcender les limites biologiques de l'homme par la technologie, pour atteindre un stade post-humain d'immortalité, d'intelligence supérieure, etc.",
      "Le simple fait de porter des lunettes ou une prothèse auditive.",
      "Une nouvelle religion basée sur la science."
    ],
    correct: 1,
    explanation: `Le transhumanisme est un mouvement intellectuel et culturel qui considère que la condition humaine actuelle, avec ses souffrances, son vieillissement et ses limitations cognitives, n'est pas une fatalité. Grâce aux progrès convergents des biotechnologies, nanotechnologies, informatique et sciences cognitives (NBIC), il sera possible et désirable de 'transcender' l'humanité pour créer des 'post-humains' aux capacités décuplées. C'est le projet ultime d'augmentation, non plus pour compenser un handicap, mais pour améliorer l'espèce.\nExemple : Les rêves transhumanistes incluent le téléchargement de la conscience dans un ordinateur pour vivre éternellement dans un monde virtuel, ou la modification génétique pour éradiquer toutes les maladies et augmenter l'intelligence moyenne.`
  },

  // Question n°70
  {
    question: "Quel est le principal danger pointé par Gilbert Simondon dans la phrase : 'L'homme qui veut dominer ses semblables suscite la machine androïde' ?",
    answers: [
      "La machine devient plus intelligente que l'homme.",
      "L'homme, en déléguant son humanité à la machine pour dominer, finit par abdiquer devant elle et devient son esclave ; la technique est alors pervertie en instrument de puissance pure.",
      "Les machines androïdes sont trop chères à produire."
    ],
    correct: 2,
    explanation: `Simondon analyse une perversion de la technique : au lieu d'être un médiateur entre l'homme et le monde, elle devient le 'philtre moderne' de la domination. L'homme qui cherche le pouvoir absolu imagine des machines à son image (androïdes) pour asservir les autres. Mais ce faisant, il projette dans la machine sa propre volonté de puissance et finit par s'y soumettre. La machine androïde (comme le robot soldat, l'algorithme de surveillance totale) n'est plus un outil, mais l'incarnation d'un désir de domination qui finit par asservir son propre créateur.\nExemple : Un dictateur qui déploie une police robotisée pour surveiller et réprimer la population finit par dépendre du bon fonctionnement de ce système et par craindre que les programmeurs ou l'IA elle-même ne prennent le pouvoir.`
  },

  // Question n°71
  {
    question: "Que signifie l'expression 'mettre au niveau' dans la distinction entre 'homme augmenté' et 'humain augmenté' ?",
    answers: [
      "Améliorer les performances sportives jusqu'au record mondial.",
      "Compenser un handicap ou une déficience pour permettre à un individu d'atteindre un niveau de fonctionnement considéré comme 'normal' (ex: prothèse pour un amputé).",
      "Élever le QI moyen de l'humanité."
    ],
    correct: 2,
    explanation: `L''homme augmenté' renvoie souvent à des technologies d'assistance ou de réhabilitation visant à restaurer des capacités perdues ou absentes, à 'mettre au niveau' d'une norme. L''humain augmenté', dans le cadre du transhumanisme, vise au contraire à dépasser la norme humaine, à améliorer des capacités déjà fonctionnelles pour les porter au-delà de toute limite biologique connue. La première approche est thérapeutique et égalitaire, la seconde est eugéniste et potentiellement créatrice d'inégalités.\nExemple : Un implant cochléaire qui permet à une personne sourde d'entendre est une augmentation 'mise au niveau'. Un implant cérébral qui permettrait à un trader de traiter l'information dix fois plus vite que la normale est une augmentation transhumaniste.`
  },

  // Question n°72
  {
    question: "Que montre l'exemple du film 'The Truman Show' cité en filmographie ?",
    answers: [
      "Les dangers du métier de marin.",
      "Le pouvoir manipulatoire des médias et de la télé-réalité, qui peuvent construire un monde factice autour d'un individu à son insu, et la capacité humaine à s'en évader par la volonté et la recherche de vérité.",
      "La beauté de la vie en communauté."
    ],
    correct: 2,
    explanation: `Dans 'The Truman Show', la vie entière de Truman Burbank est une émission de télé-réalité géante, dont il est la seule star inconsciente. Tous les gens autour de lui sont des acteurs, sa ville est un décor. Le film dénonce l'omniprésence des médias, leur manque de scrupules (ici poussé à l'extrême), et la façon dont ils peuvent fabriquer une réalité. Mais c'est aussi un film sur la résistance humaine : Truman, par ses doutes, sa curiosité et son courage, finit par percer l'illusion et s'échapper vers le monde réel, symbolisant l'indomptable désir de liberté et de vérité.\nExemple : Le film préfigure les inquiétudes contemporaines sur les bulles informationnelles des réseaux sociaux, où des algorithmes nous enferment dans une réalité personnalisée, et sur l'exploitation de l'intimité par la téléréalité.`
  },

  // Question n°73
  {
    question: "Quel est le sens de la citation d'Hannah Arendt : 'Les limitations de la loi n'offrent pas de garanties absolues contre une action venue de l'intérieur de la nation' ?",
    answers: [
      "Les lois sont inutiles.",
      "Même les démocraties les plus solides sur le papier (avec une constitution, des contre-pouvoirs) ne sont pas à l'abri d'une prise de pouvoir totalitaire ou criminel de l'intérieur, comme l'a montré l'arrivée des Nazis en Allemagne.",
      "Il faut renforcer constamment les lois répressives."
    ],
    correct: 2,
    explanation: `Arendt, analysant les origines du totalitarisme, montre que l'État de droit allemand, réputé moderne et civilisé, n'a pas pu résister à la subversion de l'intérieur par le parti national-socialiste. Les institutions 'solides' en apparence peuvent être liquidées si la société civile se délite, si la parole publique est corrompue, et si les citoyens abdiquent leur jugement politique. Aucune loi, aucune frontière ne protège absolument une communauté contre sa propre décomposition ou contre la montée en son sein d'un projet criminel.\nExemple : L'assaut du Capitole américain le 6 janvier 2021, tentative de renversement d'une élection par une foule excitée par des mensonges, a montré que même la plus ancienne démocratie moderne pouvait être violemment attaquée de l'intérieur, malgré son cadre constitutionnel.`
  },

  // Question n°74
  {
    question: "Que signifie la notion de 'body hacking' (piratage de corps) ?",
    answers: [
      "Le fait de se faire voler ses données médicales.",
      "Une pratique qui consiste à modifier volontairement son corps en y intégrant des composants électroniques ou mécaniques (puces RFID, aimants sous la peau), non pour des raisons médicales, mais pour augmenter ses capacités ou explorer de nouvelles sensations.",
      "Un régime alimentaire extrême pour performer."
    ],
    correct: 2,
    explanation: `Le body hacking est une forme radicale et expérimentale d'augmentation humaine, pratiquée par des bio-hackers. Il s'agit de considérer son corps comme une machine imparfaite que l'on peut 'bidouiller' et améliorer par soi-même, en défiant les normes médicales et sociales. Ces modifications (comme s'implanter un aimant dans le bout du doigt pour 'sentir' les champs magnétiques) sont souvent faites à la limite de l'art, de la performance et de la provocation. Cela pose des questions sur les limites de l'autonomie corporelle et les risques sanitaires.\nExemple : Certains bio-hackers se sont implanté une puce NFC entre le pouce et l'index pour déverrouiller leur porte ou leur smartphone d'un simple geste, ou un aimant pour percevoir les vibrations des appareils électroniques.`
  },

  // Question n°75
  {
    question: "Que révèle l'étude sur la croyance au créationnisme (une force divine à l'origine de l'homme) chez les jeunes ?",
    answers: [
      "Elle est en baisse constante depuis 50 ans.",
      "Elle concerne 27% des 18-24 ans en France, et est fortement corrélée à l'appartenance religieuse (notamment musulmane) et au milieu social ouvrier.",
      "Elle est marginale et ne dépasse pas 5%."
    ],
    correct: 2,
    explanation: `Contrairement à une idée reçue, le créationnisme (rejet de la théorie de l'évolution au profit d'une création divine littérale) n'est pas un phénomène marginal en France, surtout chez les jeunes. 27% d'entre eux y adhèrent. L'étude montre une forte surreprésentation dans deux groupes : les jeunes ouvriers (38%, +11 points) et les jeunes se déclarant 'croyants et religieux', principalement musulmans et protestants évangéliques. Cela illustre comment le facteur religieux littéraliste et le sentiment de déclassement social peuvent converger pour favoriser le rejet du récit scientifique dominant.\nExemple : L'écart avec les États-Unis est frappant : en 1979, 40% des Américains croyaient au créationnisme littéral (7 jours). En France, le chiffre actuel des jeunes (27%) montre une montée préoccupante d'une vision du monde en contradiction frontale avec la biologie moderne.`
  },

  // Question n°76
  {
    question: "Quelle est la principale critique adressée au 'développement durable' par les partisans de la décroissance comme Yves Paccalet ?",
    answers: [
      "Il coûte trop cher.",
      "C'est un oxymore ou un leurre qui prétend concilier croissance économique infinie et préservation d'une planète aux ressources finies, ce qui est selon eux impossible.",
      "Il n'est pas assez ambitieux techniquement."
    ],
    correct: 2,
    explanation: `Le 'développement durable' (ou 'croissance verte') est l'idée dominante pour répondre à la crise écologique. Les décroissants y voient une contradiction dans les termes et une fuite en avant. Pour eux, dans un monde fini, toute croissance matérielle et énergétique, même 'décarbonée', finit par épuiser les ressources et perturber les écosystèmes. L'idée de 'découpler' complètement la croissance du PIB de l'utilisation des ressources est un mythe. La seule solution réaliste serait donc une décroissance planifiée et équitable de notre consommation dans les pays riches.\nExemple : Même une voiture électrique 'propre' nécessite l'extraction de métaux rares (lithium, cobalt) qui détruit des environnements, consomme de l'énergie pour être produite, et ne résout pas les problèmes de congestion et d'étalement urbain. Pour un décroissant, il faut réduire le besoin de voiture, pas simplement changer de motorisation.`
  },

  // Question n°77
  {
    question: "Que signifie l'idée d''exocortex' dans les rêves transhumanistes les plus radicaux ?",
    answers: [
      "Une prothèse crânienne esthétique.",
      "Un système d'interconnexion directe entre le cerveau humain et les réseaux informatiques (internet), créant une pensée hybride, désincarnée et augmentée par la puissance de calcul et l'information mondiale.",
      "Un nouvel organe biologique qui pourrait pousser."
    ],
    correct: 2,
    explanation: `L'exocortex (cortex extérieur) est le concept ultime d'augmentation cognitive. Il s'agirait d'une interface cerveau-machine si parfaite qu'elle ferait des bases de données mondiales et de l'intelligence artificielle une extension transparente de notre propre pensée. Plus besoin d'écran ou de clavier : on 'penserait' une requête et la réponse surgirait dans l'esprit. Cela conduirait à une forme de conscience collective et désincarnée, défiant toute conception traditionnelle de l'identité individuelle et de l'intériorité.\nExemple : Le projet 'Neuralink' d'Elon Musk, qui vise à implanter des puces dans le cerveau pour traiter des maladies puis, à terme, fusionner avec l'IA, s'inscrit dans cette utopie/ dystopie de l'exocortex.`
  },

  // Question n°78
  {
    question: "Que montre l'exemple des 'Trente Glorieuses' par rapport au rapport du Club de Rome (1972) ?",
    answers: [
      "Que la croissance est éternelle.",
      "Que la période de forte croissance économique d'après-guerre a créé un optimisme qui a été brutalement remis en cause par le rapport alertant sur les 'limites à la croissance' due à l'épuisement des ressources.",
      "Que le Club de Rome s'est trompé dans ses prévisions."
    ],
    correct: 2,
    explanation: `Les 'Trente Glorieuses' (1945-1975) ont été l'âge d'or de la croissance industrielle, de la consommation de masse et de la foi dans le progrès technique illimité. Le rapport du Club de Rome 'Les limites à la croissance', publié en 1972, a constitué un électrochoc. En modélisant l'impact de la croissance démographique et industrielle sur les ressources finies (pétrole, minerais), il prédisait un effondrement possible avant la fin du XXe siècle. Il a marqué le début de la prise de conscience écologique à grande échelle et a introduit l'idée que le progrès matériel pourrait buter sur des limites physiques.\nExemple : Les chocs pétroliers de 1973 et 1979, survenant juste après le rapport, ont semblé lui donner raison et ont mis un terme à l'insouciance des Trente Glorieuses, inaugurant une ère de crises et de doutes.`
  },

  // Question n°79
  {
    question: "Quelle est la signification de l'expression 'génération ORTF' opposée à la 'génération TikTok' par François Kraus ?",
    answers: [
      "Une opposition d'âge sans signification profonde.",
      "L'opposition entre une époque où l'information était centralisée, contrôlée et délivrée par des médias de masse puissants et crédibles (l'ORTF, radio-télévision publique) et l'époque actuelle où l'information est fragmentée, décentralisée, produite par les pairs sur des plateformes sociales ludiques et algorithmiques.",
      "L'ORTF parlait aux vieux, TikTok aux jeunes."
    ],
    correct: 2,
    explanation: `L'ORTF (Office de radiodiffusion-télévision française) était un monopole public jusqu'en 1974. Il incarnait une parole institutionnelle, unique, descendante et relativement fiable. La 'génération ORTF' a été éduquée dans ce paysage médiatique homogène. La 'génération TikTok' évolue dans un écosystème inverse : l'information vient de millions de sources (influenceurs, vlogs, memes), elle est horizontale, personnalisée par les algorithmes, privilégie le format court et le divertissement. La crédibilité n'y est plus liée à l'institution ou à l'expertise, mais à l'audience et au charisme de l'émetteur.\nExemple : En 1972, un journaliste scientifique d'Europe 1 commentant l'atterrissage sur la Lune était une autorité incontestée. Aujourd'hui, un ado préférera une explication de ce même événement par un youtubeur qu'il suit et apprécie, même si ce dernier n'a aucune formation scientifique.`
  },

  // Question n°80
  {
    question: "Que symbolise la figure de l''influenceur' dans l'analyse de la défiance scientifique des jeunes ?",
    answers: [
      "Un nouvel éducateur plus proche des jeunes.",
      "Une figure dont la crédibilité est mesurée à l'aune de son audience et de son charisme personnel plutôt qu'à son expertise, et qui devient une source d'information privilégiée au détriment des 'sachants' traditionnels (chercheurs, journalistes spécialisés).",
      "Un artiste des nouveaux médias."
    ],
    correct: 2,
    explanation: `L'influenceur incarne le nouvel arbitre de la vérité pour beaucoup de jeunes. Sur les réseaux sociaux, sa légitimité ne vient pas d'un diplôme, d'une institution ou d'une méthode, mais de son succès quantifiable (nombre d'abonnés, de likes, de partages). Il parle sur un mode personnel, confidentiel, souvent émotionnel. Quand un influenceur à plusieurs millions d'abonnés émet un doute sur un vaccin ou promeut une théorie du complot, son impact est immense, car il bénéficie d'une confiance 'affective' que n'ont plus les experts perçus comme lointains et arrogants.\nExemple : Un médecin généraliste essayant d'expliquer la sécurité des vaccins sur un plateau télévision traditionnelle aura beaucoup moins d'impact qu'un influenceur fitness, sans formation médicale, partageant une vidéo émouvante sur les 'dangers cachés' des vaccins, si cette dernière devient virale sur TikTok.`
  },

  // Question n°81
  {
    question: "Quelle est la thèse de Heidegger concernant le pont face à la centrale électrique sur le Rhin ?",
    answers: [
      "Le pont est laid, la centrale est belle.",
      "Le pont de bois ancien 'unit une rive à l'autre' et laisse le fleuve être lui-même, tandis que la centrale électrique le 'mure', le 'commet', le transforme en simple stock d'énergie, l'arrachant à son être de fleuve.",
      "Les deux sont des constructions humaines équivalentes."
    ],
    correct: 2,
    explanation: `Heidegger oppose deux modes du 'faire' humain. L'œuvre d'artisanat (le pont) s'inscrit dans le paysage, révèle le lieu (en reliant les rives) et respecte l'essence des choses (le Rhin reste un fleuve). La technique moderne (la centrale) ne révèle pas, elle arraisonne. Elle ne laisse pas la nature être, elle la somme de livrer son énergie, la réduisant au statut de 'fonds disponible' (Bestand) dans un processus industriel. Le Rhin n'est plus qu'un maillon dans la chaîne de production d'électricité.\nExemple : Un moulin à eau traditionnel utilise la force du courant pour moudre le grain, mais il s'intègre au paysage et au cycle de l'eau. Un barrage hydroélectrique géant, en noyant des vallées entières et en régulant artificiellement le débit, transforme radicalement le fleuve en une machine hydraulique.`
  },

  // Question n°82
  {
    question: "Que signifie l'expression 'réification' de l'homme évoquée à propos des 'ressources humaines' ?",
    answers: [
      "Le fait de rendre l'homme plus efficace.",
      "Le fait de traiter un être humain comme une chose (res, en latin), un objet manipulable, mesurable et jetable, en niant sa subjectivité, sa liberté et sa dignité.",
      "Le fait de digitaliser les dossiers du personnel."
    ],
    correct: 2,
    explanation: `La réification (Verdinglichung) est un concept marxiste et critique qui décrit le processus par lequel les relations sociales sont transformées en relations entre choses. Appliquée au management, parler de 'ressources humaines' c'est mettre sur le même plan les employés et les autres ressources de l'entreprise (matérielles, financières). L'homme devient une variable d'ajustement, un 'coût', un 'actif' à optimiser. Cette vision économique efface la dimension personnelle, morale et sociale du travail, réduisant le travailleur à sa force de travail marchandisable.\nExemple : Un plan social qui licencie des centaines de personnes pour 'améliorer la productivité' et faire monter le cours de l'action en Bourse traite les salariés comme des chiffres négatifs sur un bilan, occultant totalement le drame humain, familial et social que représentent ces licenciements.`
  },

  // Question n°83
  {
    question: "Que montre l'exemple du film 'Yes Man' cité en filmographie ?",
    answers: [
      "Les dangers de dire oui à tout.",
      "Que le bonheur et l'ouverture à la vie peuvent advenir quand on dépasse sa fermeture d'esprit et son refus systématique (dire 'non'), en acceptant de dire 'oui' aux opportunités et aux rencontres.",
      "L'importance d'être prudent."
    ],
    correct: 2,
    explanation: `Le film comique 'Yes Man' met en scène un homme blasé et renfermé qui, suite à un séminaire, se met au défi de dire 'oui' à toute proposition. Cette contrainte absurde le conduit à vivre une série d'aventures improbables, à rencontrer des gens et finalement à se réouvrir au monde et au bonheur. Le film illustre, sur un mode léger, une idée philosophique : une des sources du mal-être dans la société contemporaine est la fermeture sur soi, la peur du risque et de l'engagement. Dire 'oui' symbolise l'acceptation de l'imprévu, de l'altérité et de la vie elle-même.\nExemple : Un jeune qui passe ses soirées seul devant un écran, refusant les invitations par paresse ou cynisme, s'enferme dans une bulle. En acceptant (même avec appréhension) une sortie, un projet associatif, une conversation avec un inconnu, il brise cette bulle et recrée du lien et du sens.`
  },

  // Question n°84
  {
    question: "Quelle est la principale caractéristique de la 'biotechnologie rouge' ?",
    answers: [
      "Son application à l'agriculture et l'alimentation.",
      "Son application médicale (thérapies géniques, médecine régénérative, fabrication d'organes).",
      "Son application à l'industrie et à la dépollution."
    ],
    correct: 2,
    explanation: `Les biotechnologies sont classées par couleur selon leur domaine d'application. La biotechnologie 'rouge' est dédiée au secteur de la santé et de la médecine. Elle utilise les organismes vivants ou leurs composants pour développer de nouveaux médicaments, vaccins, thérapies géniques ou cellulaires, ou pour créer des dispositifs médicaux innovants. C'est le domaine le plus directement lié à l'''augmentation' humaine thérapeutique, mais aussi le plus sensible éthiquement (manipulation du génome, clonage).\nExemple : La bio-imprimante 3D F3DB, capable d'imprimer des cellules vivantes directement sur un organe lésé pour le réparer, est une application spectaculaire de biotechnologie rouge. Les vaccins à ARN messager contre le Covid-19 en sont une autre.`
  },

  // Question n°85
  {
    question: "Que symbolise la 'boîte cognitive objectivée' dont parle Michel Serres ?",
    answers: [
      "Une nouvelle forme de boîte crânienne plus grosse.",
      "L'ensemble des dispositifs numériques (ordinateurs, smartphones, cloud) qui contiennent et traitent nos savoirs, fonctionnant comme une mémoire et une intelligence externes que nous pouvons consulter à tout moment.",
      "Les bibliothèques physiques."
    ],
    correct: 2,
    explanation: `Pour Serres, avec le numérique, notre cognition (mémoire, calcul, raisonnement) n'est plus seulement un processus interne et biologique. Elle est désormais partagée avec des machines qui en contiennent une partie objectivée. Cette 'boîte cognitive' (l'ordinateur, le réseau) est à la fois un prolongement et un miroir de notre esprit. Nous dialoguons avec elle, lui déléguons des tâches, et puisons en elle des informations. Cette externalisation change la nature même de la pensée, qui devient de plus en plus une activité de navigation, de filtrage et de connexion dans un espace informationnel externe.\nExemple : Lorsque vous utilisez un moteur de recherche pour vous souvenir d'un fait, un GPS pour vous orienter, ou un logiciel de traduction pour comprendre une langue, vous utilisez cette 'boîte cognitive objectivée' comme une prothèse de votre propre cerveau.`
  },

  // Question n°86
  {
    question: "Quelle est la signification de l'expression 'pulsions de l'homme' évoquée pour expliquer pourquoi l'homme menace le monde ?",
    answers: [
      "Les instincts animaux primitifs.",
      "Trois forces profondes qui poussent l'homme à surexploiter la planète : la pulsion de reproduction (démographie), la pulsion du territoire (conquête, propriété), et la pulsion de hiérarchie (égoïsme, refus du partage).",
      "Les désirs sexuels incontrôlables."
    ],
    correct: 2,
    explanation: `Pour expliquer la dynamique apparemment irrationnelle de la destruction environnementale, on peut invoquer trois pulsions fondamentales, héritées peut-être de notre évolution. La pulsion de reproduction conduit à une population toujours croissante, augmentant la pression sur les ressources. La pulsion du territoire pousse à s'approprier toujours plus d'espace et de ressources, quitte à détruire les écosystèmes et à entrer en conflit avec les autres. La pulsion de hiérarchie (ou d'égoïsme) fait que les individus et les nations privilégient leur bien-être immédiat au détriment du bien commun et des générations futures.\nExemple : La déforestation de l'Amazonie combine ces trois pulsions : des populations en croissance ont besoin de terres (reproduction), des éleveurs et spéculateurs s'approprient de vastes territoires (territoire), et les intérêts économiques privés et nationaux (soja, bœuf) priment sur la préservation d'un bien commun planétaire (hiérarchie/égoïsme).`
  },

  // Question n°87
  {
    question: "Que signifie le terme 'doxa' (δόξα) dans le contexte de la défiance envers la science ?",
    answers: [
      "La science véritable.",
      "L'opinion courante, non fondée sur une connaissance rigoureuse, qui circule dans le public et sur les réseaux sociaux, et qui tend à remplacer l'épistémè (la science).",
      "Une nouvelle religion."
    ],
    correct: 2,
    explanation: `Dans la philosophie grecque (notamment chez Platon), la doxa s'oppose à l'épistémè (science vraie). La doxa est l'opinion, la croyance fluctuante, influencée par les apparences et la rhétorique. On peut craindre le retour de la doxa comme mode de connaissance dominant. Sur les réseaux sociaux, ce qui fait 'vérité' n'est pas la démonstration méthodique, mais ce qui est cru par le plus grand nombre, ce qui est répété par des influenceurs, ce qui 'fait sens' émotionnellement. La science (épistémè) perd son statut d'autorité face à cette doxa numérique.\nExemple : L'idée que les vaccins modifient notre ADN est une doxa qui circule largement, basée sur des approximations et des peurs, malgré les démentis scientifiques (épistémè) répétés des généticiens.`
  },

  // Question n°88
  {
    question: "Quelle est la fonction du conditionnement prénatal (par la privation d'oxygène) dans 'Le Meilleur des mondes' ?",
    answers: [
      "Soigner les maladies congénitales.",
      "Créer délibérément des déficiences intellectuelles et physiques chez les embryons des castes inférieures (Epsilon, Delta) pour les adapter parfaitement et sans révolte à leur futur travail manuel pénible.",
      "Améliorer la santé des fœtus."
    ],
    correct: 2,
    explanation: `L'eugénisme dans le monde d'Huxley est négatif et social. Il ne vise pas à créer une race supérieure, mais à fabriquer des êtres parfaitement adaptés et heureux dans leur condition sociale prédéterminée. Pour les castes inférieures, cela implique de les rendre intellectuellement limités et physiquement robustes. La privation d'oxygène ('moins de soixante-dix pour cent, des monstres sans yeux') est une technique systématique pour atrophier le cerveau et le squelette, produisant des ouvriers dociles, sans aspirations ni capacité de réflexion. C'est l'horreur absolue d'une science mise au service d'une stratification sociale biologique.\nExemple : Un Embryon Epsilon destiné à être égoutier ou mineur sera conditionné à aimer l'obscurité et la chaleur, et à détester la nature et les livres, garantissant qu'il n'aspirera jamais à autre chose qu'à son travail souterrain.`
  },

  // Question n°89
  {
    question: "Que signifie l'idée que 'l'homme est par principe perfectible, contrairement à l'animal' ?",
    answers: [
      "Que l'homme peut devenir physiquement plus fort que n'importe quel animal.",
      "Que l'homme, contrairement à l'animal déterminé par son instinct et son espèce, a la capacité de se transformer lui-même et sa société par l'apprentissage, la culture, la technique et la morale. C'est une définition par la plasticité et l'ouverture.",
      "Que l'homme est moralement supérieur à l'animal."
    ],
    correct: 2,
    explanation: `Cette idée, centrale chez Rousseau et les Lumières, fonde l'humanisme. L'animal est parfaitement adapté à son milieu par l'évolution, mais il est 'fermé' dans sa programmation instinctive. L'homme, lui, naît 'inachevé', avec des instincts faibles. Cette indétermination est sa chance : elle le condamne à inventer, à apprendre, à créer des institutions, à progresser moralement. Sa 'nature' est de n'avoir pas de nature fixe, mais une perfectibilité infinie. C'est cette capacité qui lui permet aussi bien de créer la démocratie que la bombe atomique.\nExemple : Un louveteau saura instinctivement chasser à l'âge adulte. Un enfant humain, lui, devra tout apprendre (marcher, parler, lire) et pourra devenir artiste, scientifique ou tyran selon son éducation et ses choix.`
  },

  // Question n°90
  {
    question: "Que révèle l'exemple des 'messages tweets' limités à 280 caractères et faisant en moyenne 33 caractères ?",
    answers: [
      "La paresse des utilisateurs de Twitter.",
      "Comment les nouveaux moyens de communication, en privilégiant la brièveté et l'immédiateté, peuvent rendre difficile le développement d'une discussion sérieuse, nuancée et approfondie.",
      "La supériorité de la communication écrite courte."
    ],
    correct: 2,
    explanation: `On peut pointer ce paradoxe : l'explosion des moyens de communication s'accompagne souvent d'un appauvrissement du contenu des échanges. Twitter, avec sa limite de caractères, est l'archétype de la communication en slogans, en punchlines, en réactions épidermiques. Une moyenne de 33 caractères correspond à peu près à une phrase très courte. Il est impossible d'y développer un argument complexe, de nuancer sa pensée, de citer ses sources. Cela favorise la polémique, le simplisme et la manipulation émotionnelle plutôt que le débat d'idées construit.\nExemple : Un débat politique sur Twitter se réduit souvent à des échanges d'insultes et de formules choc, tandis qu'un débat télévisé de deux heures (avec ses limites) permettait au moins un développement minimal des arguments de chaque camp.`
  },

  // Question n°91
  {
    question: "Que signifie l'expression 'génération Z est en fait bien plus réac' utilisée par le spécialiste de l'Ifop ?",
    answers: [
      "Les jeunes sont plus révolutionnaires que leurs aînés.",
      "Contrairement à l'image progressiste qu'on leur attribue souvent, les jeunes (Gen Z) montrent sur certains sujets de société (notamment liés à la religion, à la science, aux mœurs) des attitudes bien plus conservatrices, traditionalistes voire réactionnaires.",
      "Ils réagissent plus vite aux stimuli médiatiques."
    ],
    correct: 2,
    explanation: `L'étude bouleverse un cliché : la jeune génération, censée être ouverte, libertaire et progressiste, révèle en fait des tendances fortes au conservatisme, notamment dans les milieux religieux. Le poids du facteur religieux (musulman et évangélique) pousse une partie de la jeunesse vers des positions littéralistes, anti-évolutionnistes, parfois anti-avortement et méfiantes envers la science moderne, perçue comme une imposition occidentale. Cette 'réac-attitude' s'exprime aussi dans l'adhésion à des théories du complot qui rejettent les élites scientifiques et médiatiques.\nExemple : Le fait qu'un quart des jeunes croient possible d'avorter sans risque avec des plantes, croyance plus répandue chez les 'croyants et religieux', montre un recul des connaissances médicales basiques au profit de croyances traditionnelles ou alternatives, ce qui est un signe de conservatisme en matière de santé.`
  },

  // Question n°92
  {
    question: "Que symbolise la figure du 'Sauvage' (John) face aux citoyens conditionnés du 'Meilleur des mondes' ?",
    answers: [
      "La supériorité de la civilisation primitive.",
      "La contradiction irréductible entre l'humanité authentique, avec ses passions, ses douleurs et sa liberté, et l'humanité artificielle, aseptisée et aliénée du monde technocratique.",
      "Un simple attardé mental."
    ],
    correct: 2,
    explanation: `John incarne tout ce que la société a voulu éradiquer pour assurer son bonheur et sa stabilité. Il a connu l'amour maternel (interdit), la jalousie, la foi religieuse, la lecture de la grande littérature (Shakespeare), la souffrance et le sentiment de la mort. Sa rencontre avec la société 'civilisée' est un choc des mondes. Son désespoir et son suicide final signifient qu'il n'y a pas de place pour une humanité pleine et entière dans un paradis artificiel. Il préfère la douleur d'être humain au bonheur d'un animal conditionné.\nExemple : La scène où John tente de libérer les Delta de leur distribution de soma en leur criant qu'ils sont 'esclaves', et où ceux-ci, paniqués, le repoussent et réclament leur drogue, montre l'abîme entre la quête de liberté et le confort de la servitude volontaire.`
  },

  // Question n°93
  {
    question: "Quelle est la principale caractéristique d'une 'dystopie' littéraire par rapport à un simple récit d'horreur ?",
    answers: [
      "Elle se passe toujours dans le futur.",
      "Elle présente une société qui prétend être parfaite, juste ou rationnelle, mais où cette perfection est obtenue au prix de l'aliénation, de la perte de liberté, de l'abolition de l'individu ou de la vérité.",
      "Elle met en scène des monstres et des fantômes."
    ],
    correct: 2,
    explanation: `La dystopie n'est pas simplement un monde horrible ; c'est un monde qui justifie son horreur par un grand récit séduisant : le bonheur pour tous ('Le Meilleur des mondes'), la paix et la pureté ('1984'), la stabilité sociale, le progrès scientifique. Le cauchemar réside dans la perversion de valeurs nobles (bonheur, paix, progrès) en instruments de contrôle total. Le lecteur est amené à comprendre comment une utopie peut devenir un enfer quand elle est réalisée sans respect pour la complexité humaine. La dystopie est donc une critique politique et philosophique, pas un simple thriller.\nExemple : Dans '1984', le Parti prétend œuvrer pour un monde sans guerre, sans pauvreté, sans injustice. En réalité, il utilise cette promesse pour justifier une surveillance totale, une réécriture de l'histoire et l'abolition de la pensée, créant la pire des injustices.`
  },

  // Question n°94
  {
    question: "Que signifie l'expression 'nomadisme (les jeunes / CDI)' dans la description de la société liquide ?",
    answers: [
      "Les jeunes aiment voyager pendant leurs vacances.",
      "La précarisation du marché du travail qui fait que les jeunes enchaînent les CDD, les intérims, les stages, sans perspective de carrière stable dans une même entreprise, les contraignant à une mobilité professionnelle et géographique permanente.",
      "Un style de vie choisi de digital nomad."
    ],
    correct: 2,
    explanation: `Bauman utilise la métaphore du nomadisme pour décrire la condition précaire dans le travail. Alors que la génération précédente pouvait espérer un CDI et une carrière linéaire dans une entreprise, les jeunes doivent désormais être flexibles, mobiles, prêts à changer de job, de ville, voire de pays. Le CDI devient un Graal inaccessible pour beaucoup. Ce nomadisme imposé fragilise les identités professionnelles, empêche l'enracinement et perpétue un état d'insécurité et d'instabilité qui caractérise la vie liquide.\nExemple : Un jeune diplômé peut enchaîner un stage non rémunéré à Paris, un CDD de 6 mois à Lyon, puis un contrat d'intérim à Marseille, sans jamais savoir où il sera dans un an, et sans pouvoir construire de projet de vie stable (achat immobilier, famille).`
  },

  // Question n°95
  {
    question: "Que montre l'exemple du film 'Sully' (de Clint Eastwood) cité en filmographie ?",
    answers: [
      "La dangerosité des vols sur l'Hudson.",
      "La supériorité de l'instinct et de l'expérience humaine face à la froide logique des ordinateurs et des simulations dans une situation de crise extrême.",
      "La nécessité de mieux former les pilotes automatiques."
    ],
    correct: 2,
    explanation: `Le film raconte l'''amerrissage forcé'' réussi du vol 1549 sur l'Hudson par le pilote Chesley 'Sully' Sullenberger. Le conflit central oppose Sully, qui a pris la décision en quelques secondes basée sur son expérience et son 'feeling', à une enquête qui utilise des simulations informatiques pour suggérer qu'il aurait pu rejoindre un aéroport. Le film montre que les modèles informatiques ne peuvent pas intégrer tous les paramètres humains (le temps de réaction, le stress, les incertitudes) et que le jugement expert d'un humain, forgé par des milliers d'heures de vol, peut être supérieur à la logique froide d'un algorithme.\nExemple : Les simulations supposaient une réaction immédiate et parfaite. Sully, lui, a dû évaluer la situation, communiquer avec le copilote, rassurer les passagers, et choisir le seul plan d'eau viable en quelques secondes, un jugement situationnel qu'aucun ordinateur de l'époque ne pouvait modéliser.`
  },

  // Question n°96
  {
    question: "Quelle est la signification de l'expression 'le corps est une fin à améliorer plutôt qu'un moyen' dans la société liquide ?",
    answers: [
      "Il faut faire du sport pour être en bonne santé.",
      "Le corps n'est plus principalement considéré comme l'instrument du travail ou de la procréation, mais comme un objet de consommation et de représentation de soi, qu'il faut sculpter, embellir, maintenir 'en forme' pour répondre à des standards esthétiques et sociaux.",
      "La médecine permet désormais de réparer tous les défauts corporels."
    ],
    correct: 2,
    explanation: `Dans une société de consommation où l'identité se construit par l'image, le corps devient le premier support de cette identité marchande. On ne l'entretient plus seulement pour qu'il fonctionne bien (la santé comme moyen), mais pour qu'il 'paraisse' bien, qu'il soit performant esthétiquement et symboliquement. Le culte du corps 'fit', jeune et conforme aux canons dominants devient une fin en soi, alimentant des industries (salles de sport, chirurgie esthétique, régimes). Le corps devient un projet perpétuel d'amélioration, jamais achevé, source d'insatisfaction constante.\nExemple : La prolifération des selfies sur les réseaux sociaux, où l'on expose son corps filtré et mis en scène, et la pression sociale pour avoir un 'summer body' ou suivre des défis fitness, illustrent cette transformation du corps en objet de consommation et de performance sociale.`
  },

  // Question n°97
  {
    question: "Que signifie l'idée de 'vérités alternatives' employée dans le contexte de l'étude Ifop ?",
    answers: [
      "Des découvertes scientifiques révolutionnaires non encore reconnues.",
      "Des croyances, théories du complot ou récits qui prétendent offrir une explication du monde concurrente de la science établie et des faits vérifiés, et qui trouvent un large écho sur les réseaux sociaux.",
      "Des opinions politiques différentes."
    ],
    correct: 2,
    explanation: `L'expression 'vérités alternatives' (ou 'faits alternatifs'), popularisée sous la présidence Trump, désigne la prétention à substituer aux faits objectifs et vérifiables des récits subjectifs qui servent une idéologie, une identité ou un sentiment. Dans l'étude, ces 'vérités' vont du créationnisme à la négation de l'alunissage, en passant par les remèdes abortifs aux plantes. Elles ne résistent pas à l'examen scientifique, mais prospèrent car elles répondent à un besoin de sens, d'appartenance communautaire ou de révolte contre les 'élites' savantes.\nExemple : L'affirmation selon laquelle le massacre de Boutcha a été 'mis en scène par les Ukrainiens' est une 'vérité alternative' propagée par la Russie, qui nie les preuves accablantes (images satellites, témoignages) pour servir sa narration de la guerre. 26% des jeunes Français y croient.`
  },

  // Question n°98
  {
    question: "Quelle est la vision de la technique dans le mythe de Prométhée ?",
    answers: [
      "Un don divin bienveillant.",
      "Un vol, une transgression nécessaire mais risquée, qui arrache l'homme à l'animalité mais l'expose aussi à la colère des dieux et aux maux de l'existence (Pandore). C'est un pouvoir ambivalent.",
      "Une malédiction pure et simple."
    ],
    correct: 2,
    explanation: `Le mythe est ambigu. D'un côté, la technique (feu + arts) sauve l'homme de l'impuissance naturelle et le rapproche des dieux. De l'autre, elle est acquise par la ruse et le vol, c'est-à-dire dans la violence et l'illégalité. Elle déclenche la vengeance divine (Pandore, le travail, la maladie, la mort). Ainsi, la technique n'est pas présentée comme un simple progrès, mais comme un pacte faustien : l'homme gagne en puissance, mais perd l'innocence et la facilité de la vie naturelle. Elle est à la fois libératrice et source de nouveaux malheurs.\nExemple : L'énergie nucléaire illustre cette ambivalence : elle offre une source d'énergie prodigieuse (le feu moderne) mais avec le risque de catastrophes apocalyptiques (Tchernobyl, Fukushima) et de prolifération d'armes terrifiantes – une puissance qui peut se retourner contre son créateur.`
  },

  // Question n°99
  {
    question: "Que signifie l'expression 'perte de crédibilité des sachants' comme cause de la défiance scientifique ?",
    answers: [
      "Les scientifiques commettent trop d'erreurs.",
      "Les figures traditionnelles de l'autorité savante (chercheurs, experts, professeurs) ne sont plus perçues comme des sources neutres et incontestables de vérité, mais comme des acteurs intéressés, politisés, ou simplement déconnectés des préoccupations du public.",
      "Les jeunes n'écoutent plus leurs professeurs."
    ],
    correct: 2,
    explanation: `La défiance ne vise pas la science en tant que méthode, mais ses représentants institutionnels. Plusieurs crises (affaire du sang contaminé, vache folle, déni climatique de certains scientifiques liés à l'industrie) ont entamé la confiance. Les 'sachants' sont aussi suspectés d'être au service du pouvoir politique ou économique, ou de former une caste élitiste méprisant le sens commun. Sur les réseaux sociaux, cette crédibilité est concurrencée par celle des 'influenceurs' qui paraissent plus authentiques et proches.\nExemple : Pendant la pandémie de Covid-19, les revirements apparents des experts (sur les masques, les modes de transmission) et les conflits publics entre scientifiques ont nourri l'idée qu'''ils ne savent pas' ou qu'''ils nous mentent', sapant leur autorité au profit de voix alternatives auto-proclamées.`
  },

  // Question n°100
  {
    question: "Que peut-on conclure de la séquence sur 'L'humain et ses limites' ?",
    answers: [
      "L'homme doit renoncer à toute technique pour revenir à un état de nature.",
      "L'homme, être limité mais perfectible, doit apprendre à penser et à maîtriser ses propres créations (technique, science) avec sagesse, mesure et responsabilité, pour éviter qu'elles ne se retournent contre lui et contre le monde.",
      "Le progrès est inéluctablement mortifère, il n'y a pas d'espoir."
    ],
    correct: 2,
    explanation: `Il faut éviter de tomber dans un optimisme naïf ou dans un pessimisme absolu. L'homme est confronté à des dangers colossaux qu'il a lui-même créés en dépassant ses limites biologiques (armes de destruction massive, crise écologique, aliénation technologique, désinformation). Cette capacité de dépassement est le propre de l'homme. L'enjeu n'est donc pas de renoncer au progrès, mais de l'orienter par la politique, l'éthique et l'éducation. Il faut réapprendre la vertu de modération (respect des limites), développer l'esprit critique, et inventer des utopies pragmatiques pour construire un avenir où la technique serve la liberté et la dignité humaines dans un monde préservé.\nExemple : Le principe de précaution, l'enseignement de la pensée critique à l'école, la régulation des réseaux sociaux, ou la recherche de technologies low-tech et sobres, sont des tentatives pour réintroduire de la sagesse et des limites dans le déploiement de la puissance humaine.`
  }
];