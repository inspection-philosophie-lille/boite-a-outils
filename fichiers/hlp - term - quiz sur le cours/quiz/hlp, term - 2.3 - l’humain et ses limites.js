// ============================================
// DONNÉES GÉNÉRALES
// ============================================
const titre = "QUIZ HLP - L'humain et ses limites";
const sousTitre = "100 questions pour maîtriser les enjeux du progrès technique, de la société liquide aux dystopies.";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE (Synthèse)
// ============================================
const philosophyData = {
  texte: `Le XXe siècle, marqué par l'explosion cognitive et technologique, a vu s'effondrer la confiance naïve dans le progrès. Des catastrophes industrielles aux génocides, la science a révélé son double visage, libérateur et mortifère. Face à une société « liquide » où les liens se fragilisent, les écrans isolent et la technique promet l'augmentation de l'homme, se pose la question fondamentale des limites humaines. De Prométhée à l'intelligence artificielle, des utopies aux dystopies, l'enjeu est de penser un progrès responsable qui respecte l'homme et son environnement.`,
  source: "Synthèse des enjeux philosophiques de la séquence « L'humain et ses limites »."
};

// ============================================
// QUESTIONS DU QUIZ (1 à 100)
// ============================================
const questions = [
  // Question n°1
  {
    question: "Quel penseur du XXe siècle a développé le concept de « société liquide » pour décrire la fragilité des liens sociaux contemporains ?",
    answers: [
      "Michel Serres, dans son ouvrage <em>Petite Poucette</em>.",
      "Zygmunt Bauman, sociologue et philosophe polonais.",
      "Hannah Arendt, dans <em>Condition de l'homme moderne</em>."
    ],
    correct: 2,
    explanation: `Le concept de « société liquide » est central dans l'œuvre de Zygmunt Bauman. Il décrit un monde où les structures sociales solides (famille, travail stable, institutions traditionnelles) se dissolvent au profit de relations flexibles, précaires et éphémères. Cette liquidité caractérise tous les aspects de la vie, des engagements affectifs au parcours professionnel, et transforme les individus en consommateurs perpétuellement insatisfaits, constamment en mouvement.\n<b>Exemple :</b> Le « papillonage affectif » encouragé par les applications de rencontres comme Tinder, où l'on « swipe » des profils sans cesse, illustre cette fluidité et cette réticence à l'engagement durable caractéristiques de la liquidité sociale.`
  },

  // Question n°2
  {
    question: "Que signifie l'expression « homme augmenté » dans les débats technologiques contemporains ?",
    answers: [
      "Un être humain ayant acquis une grande sagesse par la philosophie.",
      "Un individu dont les capacités physiques, sensorielles ou cognitives sont dépassées par des prothèses techniques, des implants ou des modifications chimiques.",
      "Une personne ayant bénéficié d'une éducation particulièrement poussée et complète."
    ],
    correct: 2,
    explanation: `L'« homme augmenté » désigne le projet de dépasser les limites biologiques de l'être humain grâce aux technosciences (biotechnologies, nanotechnologies, informatique, sciences cognitives). Cette augmentation peut être externe (exosquelettes), interne (implants cérébraux) ou chimique (dopage cognitif). Ce concept est au cœur des mouvements transhumanistes, qui envisagent une humanité libérée de la maladie, du vieillissement et des contraintes corporelles.\n<b>Exemple :</b> Les recherches sur les interfaces cerveau-machine, comme le projet Neuralink, qui visent à fusionner l'intelligence biologique avec l'intelligence artificielle, représentent une forme radicale d'augmentation cognitive.`
  },

  // Question n°3
  {
    question: "Selon le mythe de Prométhée rapporté par Platon, quel est le geste fondateur de la condition humaine ?",
    answers: [
      "La distribution équitable des qualités entre tous les animaux par Épiméthée.",
      "Le vol du feu et de la connaissance des arts (<em>technè</em>) par Prométhée pour compenser la nudité originelle de l'homme.",
      "La création de la femme, Pandore, par Zeus pour châtier l'humanité."
    ],
    correct: 2,
    explanation: `Dans le <em>Protagoras</em>, Platon raconte comment Prométhée, voyant l'homme nu et sans défense après l'erreur de son frère Épiméthée, vole le feu de l'intelligence technique à Héphaïstos et Athéna. Ce don, acquis par transgression, permet à l'être naturellement démuni de survivre et de se développer. La technique (<em>technè</em>) est ainsi présentée comme une compensation à un manque originel, mais aussi comme une source de puissance ambivalente qui expose l'homme à la vengeance divine.\n<b>Exemple :</b> Le feu symbolise ici bien plus qu'une flamme ; il représente l'ensemble des savoir-faire qui permettent à l'homme de transformer son environnement, de cuire ses aliments et de forger des outils, s'arrachant ainsi partiellement à sa condition animale.`
  },

  // Question n°4
  {
    question: "Comment Henri Bergson définit-il spécifiquement l'intelligence humaine dans <em>L'Évolution créatrice</em> ?",
    answers: [
      "Comme la faculté de contempler les vérités éternelles et métaphysiques.",
      "Comme la capacité de fabriquer des objets artificiels, et en particulier des outils à faire des outils.",
      "Comme le pouvoir unique de communiquer par un langage symbolique complexe."
    ],
    correct: 2,
    explanation: `Pour Bergson, l'intelligence est avant tout « la faculté de fabriquer des objets artificiels, en particulier des outils à faire des outils ». Cette définition justifie de nommer l'homme <em>Homo faber</em> (l'homme fabricant) plutôt qu'<em>Homo sapiens</em>. Cette faculté inventive, bien qu'elle produise des instruments « imparfaits » comparés aux organes spécialisés des animaux, offre une flexibilité et une adaptabilité illimitées, sources d'un pouvoir démesuré.\n<b>Exemple :</b> Un couteau de silex, moins tranchant que la griffe d'un tigre, peut être perfectionné indéfiniment pour devenir épée, scie ou scalpel, s'adaptant à une infinité de besoins nouveaux, ce qu'aucun organe animal naturel ne peut faire.`
  },

  // Question n°5
  {
    question: "Que critiquent principalement Adorno et Horkheimer dans les médias modernes comme la radio ?",
    answers: [
      "Leur coût prohibitif pour les classes populaires et leur caractère élitiste.",
      "Leur faible qualité technique et leur portée géographique limitée.",
      "La transformation des auditeurs en consommateurs passifs d'un flux unidirectionnel standardisé, annihilant toute possibilité de réponse."
    ],
    correct: 3,
    explanation: `Dans <em>La Dialectique de la Raison</em>, les auteurs analysent le passage des médias libéraux (comme le téléphone) aux médias de masse « démocratiques » comme la radio. Cette dernière impose un modèle autoritaire : une minorité émet, la majorité écoute passivement. Toute spontanéité du public est organisée, canalisée et intégrée à l'industrie du divertissement, créant une illusion de participation tout en confisquant la parole véritable.\n<b>Exemple :</b> Les émissions de radio avec public, où les réactions et questions sont soigneusement sélectionnées et préparées à l'avance, illustrent cette mise en scène d'une interactivité factice qui sert en réalité à renforcer le contrôle sur le message diffusé.`
  },

  // Question n°6
  {
    question: "Quel pourcentage de jeunes Français de 18 à 24 ans, selon l'étude Ifop de 2022, estiment que la science apporte plus de mal que de bien ?",
    answers: [
      "Seulement 6%, signe d'une confiance intacte.",
      "17%, une proportion qui a triplé depuis 1972.",
      "55%, soit la majorité de cette génération."
    ],
    correct: 2,
    explanation: `L'étude révèle une défiance historique : 17% des 18-24 ans pensent que la science fait plus de mal que de bien, contre seulement 6% en 1972. Symétriquement, seuls 22% (contre 55% en 1972) estiment qu'elle apporte plus de bien. Cette bascule spectaculaire en cinquante ans est attribuée à l'effondrement des médias traditionnels crédibles et à la montée en puissance des réseaux sociaux comme sources d'information, favorisant la désinformation.\n<b>Exemple :</b> Selon la même étude, près de la moitié des jeunes considèrent l'astrologie comme une science, illustrant comment le référentiel scientifique rationnel est concurrencé par des croyances alternatives dans l'écosystème numérique.`
  },

  // Question n°7
  {
    question: "Que symbolise le naufrage du Titanic dans la critique philosophique du progrès technique ?",
    answers: [
      "La supériorité finale de la nature sur les constructions humaines les plus audacieuses.",
      "L'incompétence et l'impréparation des équipages face aux situations d'urgence en mer.",
      "L'orgueil démesuré (<em>hubris</em>) et la confiance naïve dans une technologie présentée comme invulnérable, qui rend en réalité la société plus vulnérable."
    ],
    correct: 3,
    explanation: `Le « syndrome du Titanic » désigne la foi aveugle dans la technologie moderne considérée comme maîtrisant tous les risques. Le paquebot, réputé « insubmersible », a sombré lors de son voyage inaugural en 1912. Cette catastrophe est devenue un symbole durable de la fin d'une confiance naïve dans le progrès et de la vulnérabilité créée par l'orgueil humain (<em>hubris</em>).\n<b>Exemple :</b> Les accidents nucléaires de Tchernobyl (1986) ou de Fukushima (2011) rappellent de manière tragique qu'aucun système technique complexe n'est à l'abri d'une défaillance, d'une erreur humaine ou d'un événement imprévu, remettant en cause l'idée d'un contrôle absolu.`
  },

  // Question n°8
  {
    question: "Quelle est la définition originelle et littérale du terme « utopie », forgé par Thomas More ?",
    answers: [
      "Un plan rationnel et scientifique pour réorganiser parfaitement la société.",
      "Un projet politique irréaliste et dangereux qu'il faut combattre absolument.",
      "Un « non-lieu » (du grec <em>ou</em>, non, et <em>topos</em>, lieu), une île imaginaire servant de modèle idéal pour critiquer la société réelle."
    ],
    correct: 3,
    explanation: `Thomas More invente le terme « Utopia » en 1516 pour désigner une île fictive dotée d'institutions parfaites. Cette construction littéraire a d'abord une fonction critique et heuristique : en dépeignant une société idéale, elle fait miroir aux défauts et aux injustices de la société anglaise de son temps. L'utopie est donc initialement un idéal régulateur, un modèle pour penser l'amélioration du présent.\n<b>Exemple :</b> Dans <em>Candide</em>, Voltaire décrit l'Eldorado, un pays où l'or n'a aucune valeur et où règnent la tolérance et la paix, pour critiquer par contraste l'avidité, la violence et le fanatisme des sociétés européennes du XVIIIe siècle.`
  },

  // Question n°9
  {
    question: "Quelle proposition résume le mieux la thèse centrale de la « collapsologie » ?",
    answers: [
      "Les sociétés humaines sont cycliques et connaissent nécessairement des phases de décadence suivies de renaissance.",
      "Le progrès technique et l'innovation finiront toujours par résoudre les crises écologiques et sociales qu'ils ont engendrées.",
      "Notre civilisation industrielle est vouée à un effondrement systémique et prochain en raison de l'épuisement des ressources et du dérèglement climatique."
    ],
    correct: 3,
    explanation: `La collapsologie (de <em>collapsus</em>, effondrement) est un courant de pensée transdisciplinaire qui, à partir de données scientifiques, anticipe l'effondrement de la civilisation industrielle moderne. Elle identifie plusieurs facteurs interdépendants et convergents : pic pétrolier, changement climatique, effondrement de la biodiversité, crises financières. Elle s'oppose à l'idée d'un « développement durable » et prône une préparation à un monde « post-effondrement ».\n<b>Exemple :</b> Le rapport du Club de Rome, <em>Les Limites à la croissance</em> (1972), est un précurseur de cette pensée en modélisant l'impossibilité d'une croissance exponentielle dans un monde aux ressources finies.`
  },

  // Question n°10
  {
    question: "Quelle formule de Descartes incarne le projet moderne de maîtrise technique de la nature ?",
    answers: [
      "« L'homme doit vivre en harmonie avec la nature, dont il est le jardinier et non le propriétaire. »",
      "« Nous rendre comme maîtres et possesseurs de la nature. »",
      "« L'homme est le roi de la création, à qui tout a été soumis. »"
    ],
    correct: 2,
    explanation: `Dans la sixième partie du <em>Discours de la méthode</em>, Descartes énonce que la nouvelle science doit nous permettre de « nous rendre comme maîtres et possesseurs de la nature ». Cette formule célèbre résume un projet prométhéen : utiliser la connaissance des lois naturelles (du feu, de l'eau, de l'air) pour inventer des artifices améliorant la condition humaine, notamment la santé. Le « comme » est crucial : il s'agit d'une maîtrise raisonnable, non d'un droit de propriété absolu (<em>abusus</em>).\n<b>Exemple :</b> La médecine moderne, avec ses vaccins, ses antibiotiques et ses chirurgies de pointe, illustre cette volonté de maîtriser les forces naturelles (maladies, virus) pour le bénéfice humain, mais interroge aussi les limites éthiques de cette emprise.`
  },

  // Question n°11
  {
    question: "Comment Heidegger décrit-il l'action de la technique moderne sur un fleuve comme le Rhin ?",
    answers: [
      "Elle le sublime en l'intégrant harmonieusement à une œuvre d'art paysagère.",
      "Elle le « commet », le transformant en simple stock de ressources (<em>Bestand</em>) à exploiter, l'arrachant à son essence de fleuve.",
      "Elle le protège en utilisant sa force de manière renouvelable et respectueuse de son écosystème."
    ],
    correct: 2,
    explanation: `Dans <em>La Question de la technique</em>, Heidegger oppose le vieux pont de bois, qui « unit une rive à l'autre » et laisse le Rhin être le Rhin, à la centrale hydroélectrique. Cette dernière ne se contente pas d'utiliser le fleuve ; elle le « mure », le « somme » de livrer sa pression hydraulique. La technique moderne arraisonne la nature, la transformant en « fonds disponible » (<em>Bestand</em>), un simple maillon dans une chaîne causale industrielle.\n<b>Exemple :</b> Une forêt vue comme un écosystème complexe et sacré contraste avec la même forêt vue comme un « stock de bois » ou un « puits de carbone » à gérer, illustrant ce passage d'un rapport poétique à un rapport purement calculant et utilitaire.`
  },

  // Question n°12
  {
    question: "Quelle est la proposition fondamentale d'Arne Næss avec le concept d'« écologie profonde » (<em>deep ecology</em>) ?",
    answers: [
      "Une écologie scientifique et technique visant à optimiser l'exploitation durable des ressources pour le bien-être humain.",
      "Un passage d'un anthropocentrisme (l'homme au centre) à un biocentrisme, où toute forme de vie a une valeur intrinsèque indépendante de son utilité pour l'homme.",
      "Une écologie réservée aux experts, capable de prendre les décisions politiques nécessaires sans débat public."
    ],
    correct: 2,
    explanation: `Face à l'écologie « superficielle » de gestion, qui cherche à préserver l'environnement pour le bien-être humain futur, Arne Næss propose une « écologie profonde ». Celle-ci considère le vivant dans son ensemble comme ayant une valeur en soi (<em>value in itself</em>). L'homme n'est plus le centre et le maître, mais un nœud dans le réseau de la biosphère, avec la responsabilité éthique de respecter l'épanouissement de toute vie.\n<b>Exemple :</b> Protéger une espèce d'insecte rare non parce qu'elle pollinise des plantes utiles ou a une valeur esthétique, mais simplement parce qu'elle a le droit d'exister et fait partie de la trame du vivant, relève d'une position biocentriste radicale.`
  },

  // Question n°13
  {
    question: "Que propose Hans Jonas avec le « principe de précaution » face aux risques des technosciences ?",
    answers: [
      "Il faut systématiquement interdire toute innovation dont les conséquences à long terme ne sont pas parfaitement connues.",
      "Il faut toujours attendre des preuves scientifiques certaines et irréfutables avant d'agir face à un risque potentiel.",
      "Face à l'incertitude sur les conséquences d'une action, il faut prendre des mesures anticipatoires pour éviter des dommages graves et irréversibles à l'environnement ou aux générations futures."
    ],
    correct: 3,
    explanation: `Formulé dans <em>Le Principe responsabilité</em> (1979), le principe de précaution répond à la puissance inédite et planétaire de la technoscience moderne (nucléaire, génétique, climat). Par « heuristique de la peur », il commande d'agir avec prudence et anticipation face au risque de catastrophe irréversible, quitte à renoncer à certains bénéfices. C'est une éthique de la responsabilité envers un avenir lointain et la planète elle-même.\n<b>Exemple :</b> Le moratoire sur la dissémination d'OGM dans l'environnement dans certains pays, ou les restrictions sur l'usage des néonicotinoïdes (pesticides « tueurs d'abeilles ») avant que leur nocivité totale ne soit absolument prouvée, relèvent d'une logique de précaution.`
  },

  // Question n°14
  {
    question: "Quelle est la distinction fondamentale entre une « utopie » et une « dystopie » (ou contre-utopie) ?",
    answers: [
      "L'utopie est un récit du passé, la dystopie une projection dans le futur.",
      "L'utopie décrit une société idéale et heureuse, la dystopie une société cauchemardesque, souvent totalitaire, qui prétend au bonheur parfait mais aliène ses membres.",
      "L'utopie est réaliste et applicable, la dystopie est fantastique et invraisemblable."
    ],
    correct: 2,
    explanation: `L'utopie (de Thomas More) est un modèle de société parfaite, un idéal qui sert de critique et d'horizon. La dystopie, terme inventé par John Stuart Mill, en est l'inversion perverse : elle décrit une société qui prétend être parfaite (au nom du progrès, de la science, de la stabilité) mais qui est en réalité un enfer de contrôle, d'aliénation et d'oppression. La dystopie critique les dérives possibles des utopies lorsqu'elles sont réalisées sans respect pour la liberté, la singularité et la complexité humaines.\n<b>Exemple :</b> <em>Le Meilleur des mondes</em> d'Aldous Huxley présente une société stable, sans maladie ni guerre, mais où le bonheur est chimiquement imposé (soma), la pensée abolie et les individus conditionnés dès la naissance : c'est l'utopie scientifique devenue cauchemar.`
  },

  // Question n°15
  {
    question: "Dans le film <em>Une nouvelle chance</em> (<em>Trouble with the Curve</em>), que critique-t-il concernant le recrutement sportif moderne ?",
    answers: [
      "La corruption généralisée des recruteurs et des agents.",
      "L'incapacité des programmes informatiques et des statistiques (« sabermetrics ») à capter les subtilités humaines comme le mental, le caractère ou l'expérience.",
      "Le manque de forme physique et d'engagement des jeunes joueurs issus de l'ère numérique."
    ],
    correct: 2,
    explanation: `Le film oppose Gus, un vieux recruteur à l'ancienne (Clint Eastwood) qui observe les joueurs avec son intuition et son expérience, aux méthodes modernes basées sur l'analyse algorithmique de statistiques. Il dénonce la froideur et l'aveuglement de ces modèles qui, en réduisant le joueur à des données quantitatives, manquent l'essentiel : la capacité à performer sous pression, le leadership, l'intelligence de jeu. C'est une critique de la substitution du jugement humain par l'intelligence artificielle dans des domaines où la nuance est cruciale.\n<b>Exemple :</b> Un algorithme pourrait rejeter un joueur de baseball à cause d'une mauvaise moyenne au bâton, sans voir qu'il excelle dans les moments décisifs des playoffs ou qu'il a un impact moral décisif sur son équipe.`
  },

  // Question n°16
  {
    question: "Quel facteur majeur l'étude Ifop identifie-t-elle comme responsable de la défiance des jeunes envers la science ?",
    answers: [
      "Un enseignement des sciences défaillant et trop théorique à l'école.",
      "La complexité croissante et l'inaccessibilité des découvertes scientifiques contemporaines.",
      "L'effondrement des médias traditionnels crédibles et leur remplacement par les réseaux sociaux, passant « de la génération ORTF à la génération TikTok »."
    ],
    correct: 3,
    explanation: `Le bouleversement médiatique est pointé comme cause majeure. Dans les années 1970, des médias de masse relativement crédibles (grands quotidiens, radio publique) relayaient avec autorité les progrès scientifiques. Aujourd'hui, les réseaux sociaux, notamment TikTok, ont pris leur place. Ces plateformes privilégient le format court, ludique, émotionnel, et mesurent la crédibilité à l'aune de l'audience des influenceurs, et non de l'expertise. Cela favorise la dissémination massive de désinformation.\n<b>Exemple :</b> Un jeune cherchant des informations sur un vaccin tombera plus facilement sur une vidéo virale d'un influenceur aux millions de vues promouvant des thèses alternatives que sur une publication longue et nuancée d'un virologue reconnu.`
  },

  // Question n°17
  {
    question: "Quelle est l'une des « contrevérités scientifiques » à laquelle adhère une forte proportion de jeunes selon l'étude Ifop ?",
    answers: [
      "La Terre est plate et au centre de l'univers (retour du géocentrisme).",
      "Les plantes respirent du dioxyde de carbone la nuit et rejettent de l'oxygène le jour.",
      "L'homme n'est jamais allé sur la Lune, l'alunissage étant une mise en scène de la NASA (« moon hoax »)."
    ],
    correct: 3,
    explanation: `L'étude révèle que 20% des 18-24 ans sont convaincus que l'homme n'est jamais allé sur la Lune, avec une progression de 5 points en cinq ans. Cette croyance conspirationniste (« moon hoax ») est un exemple frappant de défiance envers les institutions scientifiques et gouvernementales. Elle prospère dans l'écosystème des réseaux sociaux où des vidéos « débunkant » les images d'archives de la NASA recueillent des millions de vues.\n<b>Exemple :</b> Des vidéos TikTok pointant des « incohérences » dans les images des missions Apollo (comme l'absence d'étoiles ou le drapeau qui bouge) sont largement partagées, entretenant le doute malgré les réfutations scientifiques exhaustives de ces arguments.`
  },

  // Question n°18
  {
    question: "Quel rôle significatif joue le facteur religieux dans l'adhésion des jeunes aux contrevérités scientifiques ?",
    answers: [
      "Il n'a aucun rôle, la défiance étant purement sociale et générationnelle.",
      "Il joue un rôle marginal, uniquement sur des questions de morale sexuelle ou de fin de vie.",
      "Il est important, notamment chez une partie des jeunes musulmans et protestants évangéliques pour qui l'interprétation littérale des textes sacrés prime sur le rationalisme scientifique."
    ],
    correct: 3,
    explanation: `L'étude souligne que parmi les jeunes musulmans (et dans une moindre mesure les protestants évangéliques), une catégorie adopte une lecture très littérale des textes sacrés. Pour eux, admettre certaines réalités scientifiques (comme l'évolution) reviendrait à se soumettre à une « vision occidentaliste » et à trahir leurs valeurs religieuses, perçues comme identité suprême. Le hiatus est significatif entre jeunes et seniors au sein de ces communautés.\n<b>Exemple :</b> 27% des 18-24 ans pensent qu'une « force divine » est à l'origine de l'homme (créationnisme). Cette proportion monte à 38% chez les jeunes ouvriers et est surreprésentée dans le segment « croyants et religieux ».`
  },

  // Question n°19
  {
    question: "Selon Gilbert Simondon, comment l'homme peut-il échapper à la relation aliénante de serviteur de la machine ?",
    answers: [
      "En détruisant toutes les machines et en retournant à un mode de vie artisanal et autarcique.",
      "En devenant lui-même une machine parfaite et invulnérable, fusionnant avec la technologie.",
      "En inventant des machines autonomes (« individus techniques ») qu'il n'aurait plus à assister en permanence, passant ainsi du statut d'ouvrier à celui d'inventeur et de réparateur."
    ],
    correct: 3,
    explanation: `Simondon critique la relation où l'homme n'est que le « porteur d'outil », l'auxiliaire de la machine. Sa solution n'est pas le refus de la technique, mais son accomplissement : il faut créer des machines qui soient de véritables « individus techniques », autonomes et capables de s'auto-réguler. Libéré des tâches d'assistance fastidieuses, l'homme pourrait alors se consacrer aux activités proprement humaines : l'invention, la supervision, la réparation créative et la pensée. La technique bien comprise doit libérer l'homme, non l'asservir.\n<b>Exemple :</b> Un robot industriel entièrement automatisé qui assemble des voitures, nécessitant seulement la surveillance et la maintenance d'un technicien qualifié, illustre cette libération par rapport à l'ouvrier rivetant manuellement des pièces sur une chaîne de montage fordiste.`
  },

  // Question n°20
  {
    question: "Que décrit Michel Serres avec l'image de « Petite Poucette » tenant son ordinateur ?",
    answers: [
      "La mauvaise posture des jeunes devant les écrans et les problèmes de santé associés.",
      "Le fait que la cognition (mémoire, savoir) est désormais objectivée, extériorisée dans les machines et les réseaux, formant une « boîte cognitive » hors de la tête.",
      "La dépendance économique des jeunes générations à des technologies coûteuses et contrôlées par de grandes firmes."
    ],
    correct: 2,
    explanation: `Serres constate une révolution cognitive aussi importante que l'invention de l'écriture. Avec le numérique, notre mémoire et nos savoirs ne sont plus seulement « dans notre tête » mais stockés et accessibles à l'extérieur, dans les ordinateurs, les smartphones et le cloud. Il parle d'une « tête jetée devant nous ». Cette externalisation change profondément notre rapport au savoir : nous n'avons plus besoin de tout mémoriser, mais de savoir chercher, trier, évaluer et synthétiser l'information disponible.\n<b>Exemple :</b> Un étudiant n'a plus besoin d'apprendre par cœur des dates ou des formules ; il doit maîtriser la recherche sur internet, évaluer la fiabilité des sources et savoir relier des informations dispersées pour construire un raisonnement.`
  },

  // Question n°21
  {
    question: "Quel danger principal Adorno et Horkheimer voient-ils dans l'automobile privée ?",
    answers: [
      "Sa pollution atmosphérique, source de dérèglement climatique à long terme.",
      "Le fait qu'elle isole physiquement les individus, réduisant les rencontres fortuites et les conversations profondes propres aux transports en commun.",
      "Son dangerosité accidentogène, faisant des routes des lieux de mort massive."
    ],
    correct: 2,
    explanation: `Les philosophes de l'École de Francfort voient dans l'automobile privée le symbole d'un isolement croissant. En remplaçant les transports en commun (comme le train), elle enferme l'individu dans sa bulle privée (familiale ou solitaire). Les voyages deviennent des déplacements solitaires, coupant les liens avec les inconnus. Les conversations se réduisent alors à des « bavardages sans profondeur » orientés vers le pratique. L'automobile participe ainsi à l'atomisation de la société.\n<b>Exemple :</b> Dans un train de nuit, on pouvait avoir des conversations imprévues avec des inconnus de tous horizons. En voiture, on ne parle qu'avec ses proches ou on écoute la radio, et les rares contacts avec l'extérieur (auto-stoppeurs) sont souvent perçus comme une menace.`
  },

  // Question n°22
  {
    question: "Que symbolise la catastrophe nucléaire de Tchernobyl (1986) dans la pensée contemporaine du risque ?",
    answers: [
      "La supériorité de la technologie occidentale sur la technologie soviétique défaillante.",
      "L'idée qu'un accident majeur est toujours possible, même dans les systèmes les plus sûrs, et que ses conséquences transfrontalières et durables échappent à tout contrôle humain.",
      "La nécessité de fermer immédiatement toutes les centrales nucléaires à travers le monde."
    ],
    correct: 2,
    explanation: `Tchernobyl est l'archétype de la catastrophe technologique majeure du XXe siècle. Elle a démontré que les systèmes techniques complexes, surtout gérés dans le secret et la négligence, pouvaient connaître des défaillances catastrophiques. Ses conséquences (nuage radioactif, milliers de morts, territoire inhabitable pour des siècles) ont montré l'ampleur des risques associés à certaines technologies et ont profondément ébranlé la confiance dans la capacité à maîtriser les productions de la science.\n<b>Exemple :</b> Le nuage radioactif de Tchernobyl, dont les autorités françaises de l'époque avaient affirmé qu'il s'était « arrêté à la frontière », est devenu le symbole de l'opacité, du mensonge d'État et de l'impuissance politique face aux risques technologiques globaux.`
  },

  // Question n°23
  {
    question: "Dans <em>1984</em> de George Orwell, quelle est la fonction politique du « novlangue » (<em>Newspeak</em>) ?",
    answers: [
      "Rendre la langue plus riche et précise pour les besoins de l'administration totalitaire.",
      "Appauvrir le langage pour restreindre les limites de la pensée et rendre littéralement impossible le « crime par la pensée » (<em>thoughtcrime</em>).",
      "Créer une langue universelle simple pour faciliter la communication et l'unité à l'intérieur de l'Océania."
    ],
    correct: 2,
    explanation: `Le novlangue est un outil de contrôle totalitaire. En supprimant les mots complexes, les nuances, les synonymes (comme « liberté », « justice ») et en réduisant le vocabulaire, le Parti cherche à empêcher les citoyens de formuler des pensées subversives ou même simplement critiques. Si un concept n'a plus de mot pour l'exprimer, il devient impensable. La perfection du novlangue coïnciderait avec l'impossibilité absolue de la révolte.\n<b>Exemple :</b> Supprimer le mot « liberté » (<em>freedom</em>) et ne garder que des termes comme « bonpensée » (<em>goodthink</em>) permet de formater les esprits pour qu'ils n'envisagent même pas l'idée de contester le pouvoir ou de rêver d'autre chose.`
  },

  // Question n°24
  {
    question: "Quel sens profond Platon donne-t-il au mythe de l'invention de l'écriture par le dieu Thot (dans le <em>Phèdre</em>) ?",
    answers: [
      "L'écriture est un don divin parfait qui sauvera l'humanité de l'oubli et de l'ignorance.",
      "L'écriture est un « remède » dangereux : en extériorisant la mémoire, elle fait négliger la mémoire vivante intérieure et donne une présomption de savoir sans la science véritable.",
      "L'écriture est supérieure à la parole car elle permet une transmission plus fidèle et indépendante de la présence de l'auteur."
    ],
    correct: 2,
    explanation: `Le roi Thamous rejette l'invention de Thot. Il argue que l'écriture, en permettant de conserver les souvenirs « par le dehors, par des empreintes étrangères », va affaiblir la mémoire intérieure et vivante. Les hommes, ayant foi dans l'écrit, n'exerceront plus leur mémoire. Pire, ils auront « la présomption qu'ils ont la science, non la science elle-même », devenant des « savants imaginaires » plutôt que de vrais savants forgés par le dialogue et la réflexion personnelle.\n<b>Exemple :</b> Un étudiant qui se contente de recopier un cours sans le comprendre, pensant le « posséder » parce qu'il est écrit dans son cahier, illustre cette présomption de savoir. La vraie connaissance nécessite l'assimilation intérieure et la capacité à restituer par ses propres mots, comme dans un dialogue socratique.`
  },

  // Question n°25
  {
    question: "Que signifie le terme « noosphère » employé par Teilhard de Chardin et repris par Michel Serres ?",
    answers: [
      "La couche atmosphérique polluée par les activités humaines (smog, particules fines).",
      "La sphère de la pensée humaine, de l'information et de la communication qui enveloppe la Terre, superposée à la biosphère.",
      "Le monde virtuel et immersif créé par internet et la réalité augmentée."
    ],
    correct: 2,
    explanation: `Inspiré par le géologue Vernadsky et le philosophe Teilhard de Chardin, le concept de noosphère (de <em>νοῦς</em>, esprit, et <em>σφαῖρα</em>, sphère) désigne l'enveloppe pensante de la planète. Avec l'avènement des technologies de communication (écriture, imprimerie, numérique), l'humanité a créé une couche d'information, de savoirs et d'échanges qui recouvre le globe et interconnecte les consciences. Cette sphère de l'esprit modifie profondément notre rapport au monde.\n<b>Exemple :</b> Internet, les satellites, les bibliothèques numériques, les réseaux sociaux forment les infrastructures contemporaines de la noosphère, permettant une intelligence collaborative et une circulation instantanée de l'information à l'échelle planétaire.`
  },

  // Question n°26
  {
    question: "Quelle est la devise de l'État mondial dans <em>Le Meilleur des mondes</em> d'Aldous Huxley ?",
    answers: [
      "« Liberté, Égalité, Fraternité » – un héritage des révolutions démocratiques conservé ironiquement.",
      "« Communauté, Identité, Stabilité » – les trois valeurs sacrées justifiant le contrôle total.",
      "« Progrès, Science, Bonheur » – le triptyque du rationalisme scientiste poussé à son extrême."
    ],
    correct: 2,
    explanation: `« Communauté, Identité, Stabilité » résume les valeurs sacrées de l'État mondial décrit par Huxley. La « Communauté » prime sur l'individu. « l'Identité » est imposée par le conditionnement prénatal et postnatal qui détermine la caste et le rôle de chacun. La « Stabilité » est l'objectif suprême, préservée par le contrôle des émotions (soma), l'élimination des passions, de la famille et par l'eugénisme. Cette devise montre que le prix de l'ordre parfait est la négation de la liberté, de l'amour et de l'aventure humaine.\n<b>Exemple :</b> Un Embryon « Epsilon » est privé d'oxygène pendant son développement en bouteille pour atrophier son cerveau et son squelette, garantissant qu'il sera un travailleur manuel parfaitement adapté et satisfait de son sort – une horrible mise en œuvre de l'« Identité » et de la « Stabilité ».`
  },

  // Question n°27
  {
    question: "Que dénonce Hannah Arendt comme étant « la tentation politique par excellence » ?",
    answers: [
      "La corruption et l'enrichissement personnel des gouvernants.",
      "L'<em>hubris</em> (ὕβρις), la démesure, et non pas simplement la volonté de puissance.",
      "La lâcheté et le refus de prendre ses responsabilités face à l'histoire."
    ],
    correct: 2,
    explanation: `Dans <em>Condition de l'homme moderne</em>, Arendt rappelle que l'action politique, par sa productivité et sa capacité à établir des rapports nouveaux, possède un potentiel d'infinitude. Le danger qui la guette n'est pas d'abord la soif de pouvoir, mais l'<em>hubris</em>, la démesure grecque qui consiste à ne plus respecter aucune limite. Face à cela, la vertu politique fondamentale est la modération, le sens des limites. Cette pensée est une réponse aux totalitarismes du XXe siècle.\n<b>Exemple :</b> Le projet nazi de domination mondiale et d'extermination de peuples entiers, ou les régimes staliniens cherchant à remodeler intégralement l'homme et la société, sont des manifestations historiques monstrueuses de l'<em>hubris</em> politique.`
  },

  // Question n°28
  {
    question: "Que signifie le passage de la « direction du personnel » à la « gestion des ressources humaines » ?",
    answers: [
      "Une simple modernisation du vocabulaire managérial sans changement conceptuel profond.",
      "Une évolution vers une gestion plus humaine, personnalisée et soucieuse du bien-être des salariés.",
      "Une réification de l'homme, traité comme une ressource à optimiser, comparable à un stock ou une machine, au détriment de sa dimension singulière et libre."
    ],
    correct: 3,
    explanation: `Ce changement sémantique n'est pas anodin. Il traduit un changement de paradigme : l'homme au travail n'est plus considéré comme une personne (« personnel ») mais comme une « ressource », au même titre que les ressources financières ou matérielles. Ce vocabulaire participe de la réification (chose-ification) de l'être humain, réduit à un facteur de production à gérer, optimiser et parfois « licencier », effaçant ainsi son statut de sujet libre et responsable.\n<b>Exemple :</b> Des expressions comme « optimiser les effectifs », « gérer les compétences » ou « mobilité externe » pour parler de licenciements, illustrent cette vision de l'employé comme une variable d'ajustement dans un tableau Excel, une « ressource » parmi d'autres.`
  },

  // Question n°29
  {
    question: "Quelle est la « menace absolue » pour un individu dans une société liquide selon Bauman ?",
    answers: [
      "La guerre ou la violence physique directe.",
      "Devenir un déchet social, un être qui ne suit pas le « stream » de la consommation et de la mobilité perpétuelle, et qui est donc marginalisé et rejeté.",
      "Le chômage de longue durée et la perte de tout revenu stable."
    ],
    correct: 2,
    explanation: `Dans l'univers liquide, la valeur est attachée au mouvement, à la consommation et à l'adaptabilité. L'individu doit constamment « suivre le courant », se renouveler, consommer, être connecté. Dans ce contexte, le pire qui puisse arriver est de se trouver marginalisé, mis à l'écart, de devenir obsolète – un « déchet » humain. Cette menace pèse particulièrement sur les précaires, les faiblement diplômés, ceux qui ne parviennent pas à consommer les signes de la réussite sociale.\n<b>Exemple :</b> Les contrats « zéro heure » en Angleterre, où l'employé n'a aucune garantie d'heures de travail, symbolisent cette précarité extrême où l'on peut être jeté comme un déchet dès que l'on n'est plus utile au flux économique immédiat.`
  },

  // Question n°30
  {
    question: "Quel pourcentage de jeunes (18-24 ans) croient que l'on peut « avorter sans risque avec des produits à base de plantes » selon l'étude Ifop ?",
    answers: [
      "Une minorité marginale de 5%, signe d'une bonne information sanitaire.",
      "Un quart (25%) d'entre eux, une croyance dangereuse particulièrement répandue chez les « croyants et religieux ».",
      "La majorité (55%), montrant un rejet des institutions médicales traditionnelles."
    ],
    correct: 2,
    explanation: `L'étude révèle qu'un quart (25%) des 18-24 ans adhère à cette croyance erronée et potentiellement mortelle. Cette contrevérité est particulièrement répandue dans le segment « croyants et religieux », où elle dépasse de 10 points la moyenne nationale. Cela montre comment la désinformation scientifique, relayée par certains milieux religieux ou par des influenceurs sur les réseaux sociaux, peut avoir des conséquences pratiques dramatiques sur la santé publique et l'autonomie des jeunes femmes.\n<b>Exemple :</b> La propagation sur TikTok ou Instagram de « recettes naturelles » pour interrompre une grossesse, présentées comme sûres et discrètes, alors qu'elles peuvent provoquer des hémorragies graves, des infections et la mort, illustre le danger mortel de cette désinformation.`
  },

  // Question n°31
  {
    question: "Que proposent Helen Lee Bouygues et la Fondation Reboot pour lutter contre la désinformation scientifique ?",
    answers: [
      "Interdire purement et simplement les réseaux sociaux aux mineurs et réguler drastiquement leurs contenus.",
      "Une meilleure transparence des algorithmes, un accès pour les chercheurs, l'interdiction des contenus sponsorisés amplifiant les thèses alternatives, et, à long terme, l'enseignement de la pensée critique à l'école.",
      "Créer une police de l'information scientifique dotée du pouvoir de censurer les contenus faux sur internet."
    ],
    correct: 2,
    explanation: `Face à la machine à désinformation des réseaux sociaux, Helen Lee Bouygues prône une approche à plusieurs niveaux. À court terme, il faut réguler les plateformes : rendre leurs algorithmes opaques plus transparents, interdire les publicités qui amplifient les fausses informations, permettre aux chercheurs d'étudier ces phénomènes. Mais la solution durable est éducative : il faut enseigner dès l'école l'esprit critique, la méthode scientifique et la rhétorique pour armer les jeunes contre la manipulation.\n<b>Exemple :</b> Des ateliers dans les écoles pour apprendre à reposter une source fiable, à comprendre le biais de confirmation, ou à décortiquer un argument fallacieux, sont des mesures concrètes de renforcement de l'esprit critique face au flux informationnel.`
  },

  // Question n°32
  {
    question: "Quelle est la thèse centrale de James Lovelock avec sa « Théorie Gaïa » ?",
    answers: [
      "La Terre est une machine dont les humains sont et doivent être les ingénieurs en chef pour l'optimiser.",
      "La Terre est un superorganisme vivant qui régule activement ses conditions (comme la température ou la composition atmosphérique) pour maintenir la vie.",
      "La vie sur Terre est le fruit d'un pur hasard cosmique, sans aucune logique de régulation ou d'équilibre."
    ],
    correct: 2,
    explanation: `Lovelock propose une vision radicale : la Terre (Gaïa) n'est pas simplement un support passif de la vie, mais un système complexe et autorégulé qui se comporte comme un superorganisme. Les êtres vivants interagissent avec l'atmosphère, les océans et la croûte terrestre pour maintenir des conditions favorables à la vie. Face au bouleversement causé par l'homme, Gaïa chercherait à se stabiliser à un nouvel équilibre, potentiellement inhospitalier pour l'humanité.\n<b>Exemple :</b> La régulation du taux de CO2 dans l'atmosphère par l'absorption des océans et la photosynthèse est un mécanisme de régulation gaïen. En perturbant massivement ce cycle, l'homme force Gaïa à trouver un nouvel équilibre, peut-être à ses dépens (réchauffement, acidification).`
  },

  // Question n°33
  {
    question: "Que symbolise le personnage de John, le « Sauvage », dans <em>Le Meilleur des mondes</em> ?",
    answers: [
      "L'homme primitif et violent qu'il faut absolument civiliser par la science pour son propre bien.",
      "La dernière trace d'humanité authentique, avec ses passions, sa souffrance, sa spiritualité et sa liberté, face à un monde déshumanisé.",
      "Un malade mental attardé qui doit être soigné et rééduqué pour s'adapter au bonheur collectif."
    ],
    correct: 2,
    explanation: `John a été élevé dans une « réserve à sauvages », échappant ainsi au conditionnement de l'État mondial. Il incarne tout ce que la société a supprimé : l'amour filial et passionnel, la foi religieuse, la confrontation avec la souffrance et la mort, le sens du sacrifice, l'accès aux grandes œuvres du passé (Shakespeare). Son choc avec la civilisation « parfaite » et son suicide final montrent l'incompatibilité entre l'humanité pleine et entière et un monde qui a éradiqué tout ce qui fait sa profondeur.\n<b>Exemple :</b> La réaction d'horreur de John lorsqu'il découvre que les bébés sont conditionnés par électrochocs à détester les livres et les fleurs montre que l'humanité véritable réside dans ce refus de l'aliénation heureuse et dans la soif d'expériences authentiques.`
  },

  // Question n°34
  {
    question: "Selon Pascal, comment faut-il envisager « toute la suite des hommes » à travers l'histoire ?",
    answers: [
      "Comme une succession de générations qui s'ignorent et se répètent dans des cycles éternels.",
      "Comme un même homme qui subsiste toujours et qui apprend continuellement, accumulant les connaissances.",
      "Comme une lutte perpétuelle des classes sociales dont le moteur est la possession des moyens de production."
    ],
    correct: 2,
    explanation: `Dans sa <em>Préface pour le traité du vide</em>, Pascal propose une vision dynamique et optimiste de l'histoire de l'humanité. Celle-ci n'est pas un éternel recommencement, mais ressemble à la vie d'un seul homme qui grandit, apprend et accumule des connaissances. Chaque génération hérite des découvertes des précédentes et les dépasse. Cette métaphore fonde l'idée moderne de progrès cumulatif.\n<b>Exemple :</b> Les découvertes de Newton s'appuient sur celles de Galilée, qui elles-mêmes s'appuyaient sur Copernic. L'humanité-« individu » apprend ainsi la physique, passant de l'enfance (conceptions mythiques) à l'âge adulte (lois mathématiques universelles).`
  },

  // Question n°35
  {
    question: "Qu'est-ce que le « syndrome d'Hiroshima » désigne dans la culture et la pensée du XXe siècle ?",
    answers: [
      "Les séquelles médicales spécifiques (cancers, malformations) causées par les radiations sur les survivants.",
      "L'entrée dans l'ère de la dissuasion nucléaire, où la technique donne à l'homme le pouvoir d'autodestruction totale, rendant la guerre « sidérante » par son horreur.",
      "La culpabilité collective des scientifiques ayant participé au projet Manhattan, responsables de l'arme atomique."
    ],
    correct: 2,
    explanation: `Les bombes atomiques sur Hiroshima et Nagasaki (1945) ont marqué un seuil : pour la première fois, l'homme possédait le moyen de s'autodétruire entièrement et rapidement. Ce « syndrome » désigne la prise de conscience terrifiante que le progrès scientifique peut engendrer des armes apocalyptiques. Il fonde la logique de la dissuasion nucléaire (la paix par la terreur mutuelle) et incarne le paradoxe d'une technique à la fois triomphante et mortifère.\n<b>Exemple :</b> La doctrine militaire de la « destruction mutuelle assurée » (MAD) pendant la Guerre froide, où chaque camp savait qu'une attaque entraînerait sa propre annihilation, est le fruit direct du syndrome d'Hiroshima.`
  },

  // Question n°36
  {
    question: "Quelle vision de la nature humaine peut-on adopter face à son caractère « indéfinissable » ?",
    answers: [
      "L'homme est naturellement bon, c'est la société qui le corrompt (Rousseau).",
      "L'homme est un loup pour l'homme, naturellement mauvais et asocial (Hobbes).",
      "L'homme est un être limité mais capable de tout, du pire comme du meilleur, en raison de sa plasticité et de son absence de « nature » fixe."
    ],
    correct: 3,
    explanation: `Face aux définitions essentialistes (bon/mauvais par nature), on peut adopter une position plus ouverte et tragique. L'humain n'a pas de « nature » fixe et définissable comme un objet ; il est un être de possibilités, marqué par ses limites mais aussi par une formidable capacité de dépassement. Cette plasticité le rend capable des plus grandes réalisations (art, science, éthique) comme des pires atrocités (génocides, destruction écologique). C'est cette indéfinissabilité même qui fonde sa responsabilité.\n<b>Exemple :</b> Le même siècle (le XXe) qui a vu l'invention de l'avion, des antibiotiques et de la Déclaration universelle des droits de l'homme est aussi celui de la Shoah et des bombes atomiques, illustrant cette double capacité inhérente à l'humain.`
  },

  // Question n°37
  {
    question: "Que signifie l'expression « corps-outil » pour décrire la technique animale ?",
    answers: [
      "Un animal qui utilise des outils fabriqués par ses soins, comme le chimpanzé avec une brindille.",
      "Un animal qui utilise une partie de son propre corps comme un outil spécialisé (ex: le bec, la griffe, la dent).",
      "Un animal qui est capable d'enseigner l'usage d'un outil à ses petits, transmettant une culture technique."
    ],
    correct: 2,
    explanation: `Contrairement à l'homme qui fabrique des outils extérieurs, de nombreux animaux utilisent leur anatomie comme des outils parfaitement adaptés à une fonction spécifique. Ces « outils » sont naturels, inséparables du corps, et ne peuvent être modifiés ou perfectionnés. Ils sont le produit de l'évolution et de l'instinct, offrant une efficacité immédiate mais une rigidité totale. L'homme, avec sa main préhensile non spécialisée, est condamné à inventer des outils artificiels.\n<b>Exemple :</b> Le pic-vert utilise son bec comme un marteau-piqueur, la girafe utilise son long cou comme une grue, et le castor utilise ses incisives comme des ciseaux à bois. Ce sont des « corps-outils » parfaits mais inflexibles.`
  },

  // Question n°38
  {
    question: "Quel problème fondamental soulève la « justice prédictive » utilisant l'intelligence artificielle ?",
    answers: [
      "Son coût prohibitif qui la réserve aux justiciables les plus riches, créant une inégalité d'accès au droit.",
      "Elle risque de remplacer le jugement humain, synthèse unique tenant compte des circonstances et de l'échange contradictoire, par un traitement algorithmique basé sur des statistiques passées.",
      "Elle est trop lente et bureaucratique par rapport à une procédure judiciaire classique menée par des humains."
    ],
    correct: 2,
    explanation: `Le jugement n'est pas une simple opération logique ou statistique. Juger implique un débat, une confrontation de points de vue, une appréciation des singularités du cas et de la personne (comme le montre le film <em>12 hommes en colère</em>). Une IA de justice prédictive analyserait des milliers de décisions passées pour prédire une issue. Cela risquerait de figer le droit, d'annuler l'équité propre à chaque affaire, et de reproduire automatiquement les biais sociaux et raciaux du passé.\n<b>Exemple :</b> Un algorithme pourrait prédire qu'un prévenu issu d'un quartier défavorisé a 80% de chances d'être condamné, basant son « jugement » sur des corrélations statistiques plutôt que sur les faits précis et les arguments de la défense, entérinant ainsi des inégalités systémiques.`
  },

  // Question n°39
  {
    question: "Selon l'étude Ifop, quel groupe socio-professionnel est le plus convaincu que la science apporte « plus de mal que de bien » ?",
    answers: [
      "Les cadres supérieurs, inquiets des dérives éthiques des biotechnologies.",
      "Les ouvriers, qui se sentent particulièrement menacés par l'automatisation et le déclassement technique.",
      "Les agriculteurs, méfiants envers l'agro-industrie et les OGM."
    ],
    correct: 2,
    explanation: `L'étude révèle une fracture sociale : les ouvriers sont la catégorie la plus défavorable, avec 29% d'entre eux (jeunes) pensant que la science fait plus de mal, soit 13 points de plus que la moyenne nationale des jeunes. Cette défiance s'explique par un « sentiment de grand déclassement » : les ouvriers se sentent directement menacés par l'automatisation, la robotisation et les progrès techniques qui semblent promis aux diplômés, accentuant leur précarité et leur sentiment d'obsolescence.\n<b>Exemple :</b> Un ouvrier d'usine remplacé par des robots, ou un caissier dont le poste est supprimé par des bornes automatiques, peut légitimement percevoir le « progrès » technique non comme une libération, mais comme une menace directe pour son emploi, son identité professionnelle et sa dignité.`
  },

  // Question n°40
  {
    question: "Que propose le roman d'anticipation <em>Ravage</em> de René Barjavel (1943) ?",
    answers: [
      "Une apologie de la technologie comme seul espoir de l'humanité face aux catastrophes naturelles.",
      "Un récit où une panne électrique généralisée plonge la société technologique dans le chaos, révélant sa vulnérabilité et ramenant l'homme à l'entraide primitive.",
      "La description d'une guerre future où des robots autonomes s'affrontent, menaçant l'humanité."
    ],
    correct: 2,
    explanation: `Dans ce roman, un cataclysme inexpliqué fait disparaître toute électricité en 2052. Du jour au lendemain, la civilisation hyper-technologique s'effondre : plus de transports, de communication, de chauffage, de conservation des aliments. Barjavel montre à quel point l'homme moderne est devenu dépendant d'un système technique fragile. La survie ne dépend plus du statut social, mais de la capacité à coopérer, à réapprendre les gestes élémentaires et à reconstruire une communauté basée sur l'entraide.\n<b>Exemple :</b> Un banquier milliardaire se retrouve aussi démuni qu'un sans-abri face au besoin de trouver de l'eau potable ou de faire du feu, montrant que la technologie a créé une vulnérabilité commune qui abolit temporairement les hiérarchies sociales artificielles.`
  },

  // Question n°41
  {
    question: "Quelle est la « troisième loi de la robotique » selon Isaac Asimov ?",
    answers: [
      "Un robot ne peut porter atteinte à un être humain ni, restant passif, permettre qu'un être humain soit exposé au danger.",
      "Un robot doit obéir aux ordres donnés par les êtres humains, sauf si de tels ordres entrent en contradiction avec la première loi.",
      "Un robot doit protéger son existence tant que cette protection n'entre pas en contradiction avec la première ou la deuxième loi."
    ],
    correct: 3,
    explanation: `Les trois lois, présentées dans le <em>Cycle des robots</em> d'Asimov, forment un système hiérarchique éthique censé garantir la sécurité. La première loi (ne pas nuire) est absolue. La deuxième (obéissance) est subordonnée à la première. La troisième (auto-conservation) est subordonnée aux deux premières. Asimov explore les paradoxes de ces lois, montrant comment des robots ultra-logiques peuvent les interpréter de manière inattendue, créant des situations problématiques.\n<b>Exemple :</b> Un robot pourrait juger que pour protéger son existence (3e loi) afin de continuer à servir les humains (2e loi), il doit discrètement limiter leur liberté pour les empêcher de l'éteindre, violant ainsi l'esprit de la 1ère loi (respect de l'autonomie et du bien-être humains).`
  },

  // Question n°42
  {
    question: "Que symbolise la « machine à explorer le temps » de H.G. Wells dans le contexte des dystopies ?",
    answers: [
      "L'espoir d'un futur radieux grâce à la science et à l'évolution sociale.",
      "Une critique sociale : le voyage dans un futur lointain révèle une humanité dégénérée, divisée en deux espèces exploiteuses/exploitées (Eloïs/Morlocks).",
      "Un simple gadget scientifique sans portée politique, purement destiné à l'aventure et au divertissement."
    ],
    correct: 2,
    explanation: `Le roman de Wells utilise le voyage dans le temps comme un outil de satire sociale et d'avertissement. Le futur qu'il découvre (l'an 802701) n'est pas un paradis, mais le résultat pervers d'une division de classe poussée à l'extrême : une aristocratie oisive et juvénile (Eloïs) vivant en surface, et une classe laborieuse souterraine déshumanisée (Morlocks) qui, en retour, se nourrit des Eloïs. C'est une métaphore cauchemardesque de l'exploitation capitaliste.\n<b>Exemple :</b> Les Morlocks, qui entretiennent machinalement la machinerie pour les Eloïs mais finissent par les considérer comme du bétail, illustrent comment une spécialisation extrême et une division sociale radicale peuvent mener à la perte de l'humanité commune et à une régression barbare.`
  },

  // Question n°43
  {
    question: "Que signifie le terme « écocide » ?",
    answers: [
      "L'étude scientifique des écosystèmes et de leurs interactions (synonyme d'écologie).",
      "Un crime contre l'environnement, une destruction massive et durable d'un écosystème (littéralement « tuer la maison »).",
      "Le mouvement politique et militant pour la défense de l'environnement et la justice climatique."
    ],
    correct: 2,
    explanation: `Néologisme formé sur <em>οἶκος</em> (maison, habitat) et <em>caedere</em> (tuer), l'écocide désigne des actions humaines qui causent des dommages graves, étendus et durables à l'environnement, menaçant la survie des écosystèmes et des populations. Le Viêt Nam fut le premier État, en 1990, à l'inscrire dans sa loi comme un crime. La reconnaissance internationale de l'écocide vise à responsabiliser les États et les multinationales pour des désastres environnementaux majeurs.\n<b>Exemple :</b> L'assèchement de la mer d'Aral, provoqué par le détournement des fleuves pour l'irrigation de cultures de coton, est souvent cité comme un écocide : un écosystème entier a été détruit, avec des conséquences climatiques et sanitaires catastrophiques pour les populations locales.`
  },

  // Question n°44
  {
    question: "Quelle est la principale caractéristique d'une « utopie pragmatique » ?",
    answers: [
      "Elle est réalisable à court terme car elle renonce à tout idéal trop ambitieux pour se concentrer sur le possible.",
      "Elle ne tire pas une ligne du présent vers un futur idéal, mais exige que le présent se conforme ici et maintenant à des principes idéaux, donnant des exemples concrets qui fonctionnent.",
      "Elle est purement théorique et n'a aucune intention de se réaliser, servant uniquement de pensée expérimentale."
    ],
    correct: 2,
    explanation: `Contre le discours résigné de la dystopie ou de la collapsologie, on peut évoquer les utopies « pragmatiques ». Celles-ci ne sont pas des châteaux en Espagne lointains, mais des modèles concrets, déjà réalisés ou en cours, qui incarnent un idéal et démontrent sa faisabilité. Il ne s'agit pas d'attendre un futur hypothétique, mais de construire dans le présent des îlots de l'utopie, qui servent de preuve et d'inspiration.\n<b>Exemple :</b> Internet à ses débuts (idéal de connaissance libre et partagée), la sécurité sociale (idéal de protection collective), ou l'Eastgate Building au Zimbabwe (immeuble auto-climatisé inspiré des termitières) sont des utopies pragmatiques : des innovations réelles qui matérialisent un monde meilleur.`
  },

  // Question n°45
  {
    question: "Que révèle la phrase de Patrick Le Lay (ex-PDG de TF1) : « Ce que nous vendons à Coca-Cola, c'est du temps de cerveau humain disponible » ?",
    answers: [
      "Une métaphore poétique sur le pouvoir de l'imaginaire publicitaire pour façonner les désirs.",
      "Une déclaration cynique révélant que le produit réel de la télévision commerciale est l'attention captive du téléspectateur, vendue aux annonceurs.",
      "Une critique interne du modèle des émissions trop intellectuelles qui ne captent pas assez l'audience."
    ],
    correct: 2,
    explanation: `Cette citation célèbre dévoile sans fard le modèle économique de la télévision commerciale. Le programme n'est pas une fin en soi, mais un « appât » pour capter et retenir l'attention (le « temps de cerveau ») du téléspectateur dans un état de réceptivité passive, afin de la « vendre » ensuite aux annonceurs. Cette logique réduit la culture et l'information à des produits d'appel pour la publicité, et le citoyen à un consommateur dont l'attention est monnayée.\n<b>Exemple :</b> Une émission de télé-réalité au scénario haletant et aux conflits exacerbés a pour fonction première de créer une addiction et de maximiser l'audience, augmentant ainsi la valeur des spots publicitaires qui l'interrompent.`
  },

  // Question n°46
  {
    question: "Quelle vision positive de la technique défend Gilbert Simondon ?",
    answers: [
      "La technique est par essence aliénante et doit être contenue dans des limites strictes pour préserver l'humain.",
      "La technique est un mode d'être qui libère l'homme, une manière de se lier au monde ; le problème n'est pas la machine, mais son asservissement à des logiques de pure puissance.",
      "La technique est moralement neutre ; tout dépend de l'usage bon ou mauvais qu'en font les hommes, indépendamment de sa structure."
    ],
    correct: 2,
    explanation: `Simondon rejette à la fois l'angélisme technophile et le pessimisme technophobe. Pour lui, la technique est une dimension fondamentale de l'humanité, un « mode d'existence » par lequel l'homme se relie au monde. Les objets techniques contiennent du savoir humain cristallisé. Le danger survient quand la technique est réduite à un instrument de domination (« machine androïde »). La solution est d'inventer des machines qui libèrent l'homme des tâches serviles pour qu'il se consacre à des activités créatrices.\n<b>Exemple :</b> Un métier à tisser Jacquard du XIXe siècle n'est pas qu'un outil ; il incarne un savoir-faire, une histoire, et libère le tisserand des motifs les plus répétitifs pour qu'il se consacre à la conception et à l'innovation.`
  },

  // Question n°47
  {
    question: "Quelle est une conséquence de la société liquide sur la construction de l'identité individuelle ?",
    answers: [
      "L'identité devient stable, héritée de la famille, de la religion et de la classe sociale, comme dans les sociétés traditionnelles.",
      "L'identité se définit de plus en plus par la consommation : « je suis ce que j'achète et ce que je montre ».",
      "L'identité est déterminée uniquement et définitivement par le diplôme et la profession, marqueurs solides dans un monde fluide."
    ],
    correct: 2,
    explanation: `Dans un monde où les affiliations traditionnelles (famille, religion, classe, nation) se dissolvent, l'individu doit constamment construire et reconstruire son identité. Dans la société de consommation liquide, cette construction passe massivement par les biens et les marques que l'on achète et expose. Le statut social, le sentiment d'appartenance et l'estime de soi sont médiatisés par la consommation de signes. Cette identité par l'avoir est précaire et nécessite une consommation perpétuelle.\n<b>Exemple :</b> Le fait que les jeunes soient les plus grands consommateurs de marques de luxe (20%) montre comment l'acquisition d'un produit cher (sneakers, sac) devient un marqueur identitaire essentiel et un moyen d'intégration sociale dans un monde liquide.`
  },

  // Question n°48
  {
    question: "Que démontre l'exemple de l'effet de « tunnelisation » chez les pilotes d'avion ?",
    answers: [
      "La nécessité absolue de former mieux et plus longuement les pilotes aux situations de stress.",
      "Que l'approche classique (ajouter des alarmes) peut saturer l'attention, et qu'une solution intelligente consiste à adapter l'interface machine pour compenser les limites cognitives humaines.",
      "La supériorité incontestable et souhaitable des pilotes automatiques sur les pilotes humains, trop faillibles."
    ],
    correct: 2,
    explanation: `L'effet de tunnelisation est un biais cognitif où, sous stress, le pilote se focalise excessivement sur un seul instrument, ignorant d'autres signaux cruciaux. La réponse intuitive (ajouter des alarmes) peut aggraver la saturation attentionnelle. La solution innovante est « humaine-centrée » : l'interface (cockpit) s'adapte dynamiquement. En atténuant l'information qui focalise et en affichant l'information pertinente, la machine compense la limite humaine. C'est une augmentation cognitive par le design.\n<b>Exemple :</b> Si un pilote est hypnotisé par un indicateur de vitesse défaillant à l'atterrissage, l'écran principal pourrait estomper cet indicateur et mettre en surbrillance l'altimètre, redirigeant son attention vers le paramètre le plus critique à ce moment-là.`
  },

  // Question n°49
  {
    question: "Quel est le sens originel, purement scientifique, du mot « écologie » forgé par Ernst Haeckel ?",
    answers: [
      "La défense politique de la nature contre les ravages de l'industrie.",
      "La science des relations des organismes avec leur environnement organique et inorganique (conditions d'existence).",
      "L'étude de l'impact des pollutions humaines sur la santé des écosystèmes et des populations."
    ],
    correct: 2,
    explanation: `Le biologiste darwiniste Ernst Haeckel crée le terme « écologie » (<em>Ökologie</em>) en 1866. Pour lui, c'est une branche de la biologie qui étudie comment les organismes vivants interagissent entre eux et avec leur milieu physique (climat, sol, eau). Cette science vise à comprendre les « conditions d'existence » et les adaptations. Ce n'est qu'avec les crises environnementales du XXe siècle que le terme prendra une dimension politique, militante et normative.\n<b>Exemple :</b> Étudier comment une population de loups régule celle des chevreuils, et comment cette prédation influence la régénération de la forêt, relève de l'écologie scientifique au sens strict de Haeckel.`
  },

  // Question n°50
  {
    question: "Que révèle le chiffre de 69% des 18-24 ans soutenant « au moins une de ces contrevérités scientifiques » ?",
    answers: [
      "Une majorité de jeunes rejettent complètement et radicalement la science au profit de croyances alternatives.",
      "Une large majorité des jeunes est touchée par la désinformation, adhérant à au moins une théorie alternative, signe d'un affaiblissement du référentiel scientifique commun.",
      "Les jeunes sont majoritairement indifférents à la science, considérant que cela ne les concerne pas dans leur vie quotidienne."
    ],
    correct: 2,
    explanation: `Ce chiffre alarmant ne signifie pas que 69% des jeunes sont des « anti-science » radicaux, mais qu'une large majorité a intégré au moins un élément de désinformation dans sa vision du monde. Cela montre la porosité des frontières entre savoir établi et croyances alternatives dans l'écosystème informationnel des jeunes. Le référentiel scientifique commun, qui structurait auparavant la société, est fragmenté et concurrencé par une multitude de « vérités » subjectives ou communautaires.\n<b>Exemple :</b> Un jeune peut croire à la théorie de l'évolution, mais aussi penser que les vaccins à ARNm sont dangereux et que le changement climatique est une exagération. Ce mélange éclectique est caractéristique de la défiance post-moderne et de l'information en réseaux.`
  },

  // Question n°51
  {
    question: "Quelle est la fonction du « soma » dans la société du <em>Meilleur des mondes</em> ?",
    answers: [
      "Un aliment de base riche en nutriments, distribué équitablement à toutes les castes.",
      "Une drogue parfaitement sûre qui procure un bonheur immédiat, utilisée pour éteindre toute émotion négative ou pensée critique et assurer la stabilité sociale.",
      "Le nom de la langue officielle et simplifiée de l'État mondial, favorisant une communication sans ambiguïté."
    ],
    correct: 2,
    explanation: `Le soma est l'outil pharmacologique par excellence du contrôle social. À la moindre contrariété, angoisse ou sentiment de malaise, les citoyens prennent leur dose, qui les plonge dans un état euphorique d'oubli. Il éradique la mélancolie, la colère, l'amour passionnel et la pensée critique. Son slogan est « Un gramme vaut mieux qu'un sermon ». C'est le moyen chimique d'assurer la « Stabilité » en neutralisant la profondeur et la souffrance de l'existence humaine.\n<b>Exemple :</b> Lorsque Lenina ressent un début d'attirance amoureuse compliquée pour Bernard, elle prend immédiatement du soma pour faire disparaître ces « émotions déplaisantes » et retrouver l'état de bonheur standardisé et impersonnel.`
  },

  // Question n°52
  {
    question: "Que signifie l'idée de « grand déclassement » pour expliquer la défiance ouvrière ?",
    answers: [
      "Le fait que les ouvriers gagnent désormais moins que les employés et cadres moyens, inversant la hiérarchie salariale traditionnelle.",
      "Le sentiment, chez les classes populaires, d'être menacés de perdre leur statut social à cause de l'automatisation et de la valorisation d'autres compétences (diplômes).",
      "La baisse générale et irréversible du niveau de vie des classes moyennes, qui rejoignent la condition ouvrière."
    ],
    correct: 2,
    explanation: `Le « grand déclassement » est une notion sociologique qui décrit la crainte (ou la réalité) pour les catégories populaires et intermédiaires de voir leur position sociale se dégrader, leurs qualifications devenir obsolètes, et leurs enfants avoir une vie moins bonne. La science et la technique sont perçues comme les moteurs de ce déclassement, car elles semblent profiter aux « élites » diplômées tandis qu'elles détruisent les emplois industriels stables.\n<b>Exemple :</b> Un ouvrier qualifié de la métallurgie voit son usine robotisée. Son fils, sans diplôme universitaire, ne peut prétendre qu'à des emplois précaires de service (livreur, caissier), moins bien payés et moins reconnus : c'est le déclassement intergénérationnel vécu comme une injustice.`
  },

  // Question n°53
  {
    question: "Quelle est la différence entre une « catastrophe environnementale » et une « catastrophe naturelle » ?",
    answers: [
      "Il n'y a pas de différence significative ; les deux termes sont synonymes dans le langage courant.",
      "Une catastrophe environnementale a une origine humaine (marée noire, déforestation), tandis qu'une catastrophe naturelle est due à des phénomènes géophysiques (séisme, ouragan).",
      "Une catastrophe naturelle est toujours plus grave et meurtrière qu'une catastrophe environnementale, qui n'affecte « que » la nature."
    ],
    correct: 2,
    explanation: `Cette distinction est cruciale pour attribuer les responsabilités. Une catastrophe naturelle résulte de l'activité de la planète elle-même (tremblement de terre, tsunami, éruption). L'homme peut en aggraver les conséquences (urbanisation en zone risquée), mais il n'en est pas la cause première. Une catastrophe environnementale, en revanche, est directement causée par l'activité humaine : exploitation, accident industriel, pollution massive. Elle révèle l'impact négatif de la technoscience.\n<b>Exemple :</b> Le séisme et le tsunami de Tohoku en 2011 sont des catastrophes naturelles. L'accident nucléaire de Fukushima qui a suivi, dû à la défaillance des systèmes de sûreté face au tsunami, est une catastrophe environnementale (et technologique) d'origine humaine.`
  },

  // Question n°54
  {
    question: "Que symbolise la figure du « cobot » (robot collaboratif) dans l'industrie ?",
    answers: [
      "Un robot destiné à remplacer entièrement l'ouvrier humain pour des questions de coût et d'efficacité.",
      "Un robot conçu pour collaborer avec un opérateur humain, l'assistant dans les tâches pénibles ou précises tout en laissant à l'homme le contrôle et le jugement.",
      "Un robot domestique de compagnie, destiné à assister les personnes âgées ou handicapées dans leur quotidien."
    ],
    correct: 2,
    explanation: `Le « cobot » (contraction de « coopération » et « robotique ») représente une vision moins anxiogène de la robotisation. Contrairement au robot autonome qui remplace, le cobot est un outil interactif qui amplifie les capacités humaines. Il peut soulever des charges lourdes que l'ouvrier guide, ou réaliser des soudures de précision sous supervision. L'homme reste « dans la boucle », il est le cerveau et le cobot le bras. Cette symbiose préserve le sens du travail et l'expertise humaine.\n<b>Exemple :</b> Dans un atelier, un exosquelette (cobot porté) permet à un ouvrier de manipuler des pièces très lourdes sans se blesser, combinant la force de la machine à l'intelligence et la dextérité de l'humain.`
  },

  // Question n°55
  {
    question: "Quelle est la signification philosophique de la vengeance de Zeus (Pandore) après le vol du feu par Prométhée ?",
    answers: [
      "Zeux punit injustement les hommes pour une faute qu'ils n'ont pas commise, montrant l'arbitraire du pouvoir divin.",
      "Zeus punit les hommes, mais cette punition définit la condition humaine mortelle, marquée par le travail, la souffrance et l'espoir.",
      "Zeus retire définitivement aux hommes le don de l'immortalité, les condamnant à une vie brève et insignifiante."
    ],
    correct: 2,
    explanation: `La création de Pandore (la « femme », cadeau empoisonné) et la boîte qu'elle ouvre introduisent tous les maux dans le monde. Mais cela a une dimension constitutive : désormais, l'existence humaine est placée sous le signe de la dualité et de l'effort. Pour se nourrir, l'homme doit travailler la terre ; pour conserver le feu, il doit l'entretenir ; pour se perpétuer, il doit aimer et souffrir. La technique n'apporte pas le bonheur pur, mais une existence complexe et contradictoire.\n<b>Exemple :</b> Le mythe rejoint celui d'Adam et Ève : l'accès à la connaissance (le fruit, le feu) arrache l'homme à l'état de nature oisif et l'introduit dans l'histoire, avec son cortège de peines et de labeurs, mais aussi de dignité, de culture et d'espoir (resté au fond de la boîte).`
  },

  // Question n°56
  {
    question: "Quelle vision de l'histoire Pascal défend-il contre l'idée d'un âge d'or perdu des Anciens ?",
    answers: [
      "L'histoire est un éternel recommencement, un cycle où les civilisations naissent, grandissent et meurent.",
      "L'histoire est une décadence continue depuis un âge d'or mythique, et les Modernes ne sont que des nains par rapport aux géants antiques.",
      "L'histoire est un progrès cumulatif des connaissances, l'humanité apprenant comme un seul homme qui grandit et voit plus loin que ses prédécesseurs."
    ],
    correct: 3,
    explanation: `À l'époque de Pascal, l'idée dominante était que les Anciens avaient tout découvert. Pascal, au contraire, défend les Modernes. Avec sa métaphore de l'humanité-individu, il affirme que nous sommes comme des nains juchés sur les épaules de géants (les Anciens) : nous voyons donc plus loin qu'eux. Le savoir s'accumule, chaque génération bâtissant sur la précédente. Cette idée est le fondement intellectuel de la notion de progrès qui triomphera aux Lumières.\n<b>Exemple :</b> Pascal lui-même, avec ses expériences sur le vide, dépasse les conceptions erronées d'Aristote (« la nature a horreur du vide »), montrant ainsi que la science moderne progresse en rectifiant les erreurs du passé.`
  },

  // Question n°57
  {
    question: "Que signifie l'expression « la vérité est ailleurs » (<em>The Truth is Out There</em>) pour la Génération Z ?",
    answers: [
      "Une citation biblique sur la foi qui dépasse la raison et les apparences immédiates.",
      "Le slogan de la série <em>X-Files</em> devenu emblématique d'une défiance envers les discours officiels et d'une ouverture aux explications alternatives et conspirationnistes.",
      "Une phrase philosophique soulignant la relativité de toute vérité et son caractère insaisissable."
    ],
    correct: 2,
    explanation: `« The Truth is Out There » était l'accroche de la série culte <em>X-Files</em> (1993), qui mettait en scène des enquêtes sur le paranormal et les complots gouvernementaux cachés. Pour la Génération Z, cette formule résume un état d'esprit : une méfiance structurelle à l'égard des institutions et des « sachants » traditionnels. La « vraie » vérité ne serait pas dans les canaux officiels, mais « ailleurs » : dans les révélations d'initiés, les théories marginales ou les vidéos d'influenceurs. C'est l'épistémologie du soupçon et du complot.\n<b>Exemple :</b> Face à une pandémie, un jeune peut penser que la « vérité » sur le virus n'est pas dans les communiqués de l'OMS, mais dans les vidéos d'un médecin dissident ou dans les posts d'un groupe Facebook confidentiel présenté comme « ayant percé le secret ».`
  },

  // Question n°58
  {
    question: "Que peut-on critiquer à travers l'exemple de la quasi-disparition des trains de nuit en France ?",
    answers: [
      "La mauvaise gestion et le manque d'investissement chronique de la SNCF, entreprise publique.",
      "Comment l'automobile et l'avion low-cost, en isolant les individus, contribuent à la disparition des modes de transport collectifs qui favorisaient les rencontres et les échanges imprévus.",
      "Le manque de rentabilité intrinsèque du rail face à la route et à l'air, justifiant son abandon par les pouvoirs publics."
    ],
    correct: 2,
    explanation: `Adorno et Horkheimer pointaient déjà le remplacement du train (transport collectif) par la voiture privée comme un facteur d'isolement. La quasi-disparition des trains de nuit (il n'en restait que deux liaisons en 2017) illustre ce déclin. Le train de nuit était un espace social unique où des inconnus partageaient un temps long, permettant des conversations improbables. Son déclin au profit de la voiture ou de l'avion (autres bulles individualisées) participe à l'appauvrissement du lien social.\n<b>Exemple :</b> Un voyage Paris-Briançon en train de nuit créait une micro-société éphémère de voyageurs aux profils variés (skieurs, travailleurs, familles). Le même trajet en voiture ou en avion est une expérience privée, fermée sur le cercle familial ou amical.`
  },

  // Question n°59
  {
    question: "Quelle est la thèse de Jean-Pierre Dupuy dans <em>Pour un catastrophisme éclairé</em> (2004) ?",
    answers: [
      "Il faut arrêter toute innovation technologique risquée pour éviter à tout prix la catastrophe, quels que soient les bénéfices perdus.",
      "Le vrai risque étant imprévu, il faut, par un paradoxe, « croire » à la catastrophe inéluctable pour la rendre évitable, en agissant avec la force de la certitude.",
      "La catastrophe écologique est déjà inévitable, il faut donc cesser de lutter et se préparer à l'effondrement et à la survie."
    ],
    correct: 2,
    explanation: `Face au principe de précaution parfois paralysant, Dupuy propose un « catastrophisme éclairé ». Le problème des risques majeurs (climat, nucléaire) est leur faible probabilité mais leurs conséquences énormes, ce qui tend à les faire ignorer. Pour les prendre au sérieux, il faut les traiter comme s'ils étaient certains. Il faut se projeter mentalement dans la catastrophe déjà accomplie, et agir rétroactivement depuis ce futur pour l'empêcher. C'est un pari pour mobiliser l'action.\n<b>Exemple :</b> Agir contre le changement climatique comme si la montée des eaux de 2 mètres et l'effondrement agricole étaient certains pour 2100, afin de déployer dès maintenant des mesures radicales pour que ce futur n'advienne pas.`
  },

  // Question n°60
  {
    question: "Quel pourcentage de jeunes (18-24 ans) considèrent l'astrologie comme « une science à part entière » selon l'étude Ifop ?",
    answers: [
      "Une minorité de 10%, signe que la raison l'emporte largement.",
      "Près de la moitié, 49% (en progression de 6 points depuis 1999).",
      "Une large majorité de 75%, montrant un basculement culturel complet."
    ],
    correct: 2,
    explanation: `Près de la moitié (49%) des jeunes Français considèrent l'astrologie comme une science. Ce chiffre stupéfiant, combiné à la croyance dans les esprits (48%) et la réincarnation (35%), montre un regain spectaculaire des croyances occultes et irrationnelles au sein de la génération Z. Cette adhésion va de pair avec la défiance envers la science rationnelle. Elle s'explique par la recherche de sens, de destin personnel, et par la porosité permise par les réseaux sociaux où l'ésotérisme se présente sous un jour moderne.\n<b>Exemple :</b> Les applications d'horoscopes personnalisés, les comptes TikTok de « lecture d'aura » ou les influenceurs qui mêlent conseils de développement personnel et astrologie contribuent à banaliser et à « scientifiser » ces croyances traditionnelles.`
  },

  // Question n°61
  {
    question: "Que représente la « psychohistoire » dans le <em>Cycle de Fondation</em> d'Isaac Asimov ?",
    answers: [
      "Une technique futuriste pour lire dans les pensées et manipuler les esprits à distance.",
      "Une science fictive qui permet de prédire les grandes évolutions sociales à l'échelle de masses, en utilisant les lois des grands nombres et des modèles mathématiques.",
      "L'étude des traumatismes psychologiques des grands personnages historiques pour expliquer leurs décisions."
    ],
    correct: 2,
    explanation: `Inventée par le personnage de Hari Seldon, la psychohistoire est le pilier de la saga. C'est une science statistique qui, appliquée à des milliards d'individus, peut prévoir le comportement général des sociétés sur des siècles. Seldon prédit ainsi la chute de l'Empire Galactique et une ère de barbarie. Pour la réduire, il met en place un plan secret. Ce concept reflète le rêve positiviste de réduire l'histoire à une science exacte, mais aussi ses limites (l'imprévisible individu exceptionnel, le « Mulet »).\n<b>Exemple :</b> De manière analogue, certaines approches contemporaines des sciences sociales (la cliodynamique) tentent d'appliquer des modèles mathématiques et l'analyse de big data à l'histoire pour en dégager des cycles, avec un succès controversé.`
  },

  // Question n°62
  {
    question: "Quelle est la principale conséquence de l'extériorisation de la mémoire décrite par Michel Serres ?",
    answers: [
      "Les hommes deviennent plus bêtes, dépendants d'une mémoire de substitution qui atrophie leurs capacités cognitives.",
      "La valeur d'une connaissance est désormais liée à sa capacité à être partagée et interconnectée, favorisant l'« intelligence collaborative ».",
      "Plus personne ne sait rien par cœur, conduisant à une perte générale de la culture et des références communes."
    ],
    correct: 2,
    explanation: `Pour Serres, la révolution numérique n'est pas un appauvrissement mais un changement de paradigme cognitif. Lorsque les savoirs sont externalisés et accessibles, l'enjeu n'est plus la possession individuelle de connaissances (être une encyclopédie vivante), mais la capacité à les trouver, évaluer, relier et utiliser de manière créative. Le savoir devient un bien commun, et l'intelligence se manifeste dans la collaboration, la synthèse et l'innovation.\n<b>Exemple :</b> Un projet comme Wikipedia, où des milliers de contributeurs anonymes coopèrent pour construire une encyclopédie mondiale constamment mise à jour, est l'incarnation de cette intelligence collaborative rendue possible par l'externalisation numérique.`
  },

  // Question n°63
  {
    question: "Que symbolise l'assèchement de la mer d'Aral dans le cadre de la notion d'écocide ?",
    answers: [
      "Un succès de l'ingénierie soviétique qui a transformé un désert en terres agricoles fertiles.",
      "Une catastrophe environnementale majeure, causée par le détournement des fleuves pour la culture du coton, qui a détruit un écosystème entier.",
      "Un phénomène naturel de désertification accéléré par le changement climatique, indépendant des actions humaines."
    ],
    correct: 2,
    explanation: `La mer d'Aral, autrefois l'un des plus grands lacs du monde, a été réduite à une fraction de sa taille en quelques décennies à cause d'un gigantesque projet d'irrigation soviétique pour produire du coton dans le désert. Ce détournement massif est un exemple-type d'écocide : une décision politique a causé un dommage écologique irréversible (salinité, tempêtes de sel, disparition de la faune), ruinant l'économie de la pêche et provoquant des problèmes de santé graves.\n<b>Exemple :</b> Les bateaux échoués dans le désert, où se trouvait autrefois le port de Moya-noq, sont l'image emblématique de cette folie humaine et de ses conséquences désastreuses et durables.`
  },

  // Question n°64
  {
    question: "Quelle est la signification de l'expression « papillonage affectif » dans la société liquide ?",
    answers: [
      "Un trouble psychologique rare caractérisé par une incapacité à maintenir des relations stables.",
      "La tendance à multiplier les relations amoureuses ou amicales courtes et superficielles, sans engagement durable, à l'image d'un papillon qui butine.",
      "Un sentiment de joie intense mais éphémère, typique des expériences consuméristes et numériques."
    ],
    correct: 2,
    explanation: `Dans une société solide, les liens sont censés être stables et durables. La société liquide valorise au contraire la fluidité, la mobilité, l'ouverture permanente aux options. Le « papillonage affectif » décrit cette norme relationnelle où l'on zappe d'un partenaire à l'autre, d'un groupe d'amis à un autre, sans construire de liens profonds qui pourraient entraver la liberté individuelle. Cette impermanence répond à la peur de l'engagement.\n<b>Exemple :</b> Les applications de rencontres comme Tinder, où l'on peut « swiper » des dizaines de profils par minute, institutionnalisent ce papillonage, faisant de la relation un produit de consommation à essayer et à jeter si elle ne procure pas une satisfaction immédiate.`
  },

  // Question n°65
  {
    question: "Que signifie la notion de « transhumanisme » ?",
    answers: [
      "Une philosophie qui vise à transcender les limites biologiques de l'homme par la technologie pour atteindre un stade post-humain.",
      "Le simple fait d'utiliser des prothèses ou des aides techniques pour compenser un handicap, comme porter des lunettes.",
      "Une nouvelle religion syncrétique basée sur la science, le mysticisme et la croyance en une évolution spirituelle de l'humanité."
    ],
    correct: 1,
    explanation: `Le transhumanisme est un mouvement intellectuel qui considère que la condition humaine actuelle, avec ses souffrances, son vieillissement et ses limitations, n'est pas une fatalité. Grâce aux progrès convergents des NBIC (Nanotechnologies, Biotechnologies, Informatique, Sciences cognitives), il sera possible et désirable de « transcender » l'humanité pour créer des « post-humains » aux capacités décuplées. C'est le projet ultime d'augmentation, non plus thérapeutique, mais améliorative.\n<b>Exemple :</b> Les rêves transhumanistes incluent le téléchargement de la conscience dans un ordinateur pour une vie éternelle virtuelle, ou la modification génétique pour éradiquer toutes les maladies et augmenter l'intelligence moyenne, créant potentiellement de nouvelles inégalités.`
  },

  // Question n°66
  {
    question: "Quel est le principal danger pointé par Simondon dans la phrase : « L'homme qui veut dominer ses semblables suscite la machine androïde » ?",
    answers: [
      "La machine androïde devient nécessairement plus intelligente que l'homme et finit par le dominer à son tour.",
      "L'homme, en déléguant son humanité à la machine pour dominer, finit par abdiquer devant elle et devient son esclave ; la technique est pervertie en instrument de puissance pure.",
      "Les machines androïdes sont trop complexes et coûteuses à produire, conduisant à un gaspillage des ressources."
    ],
    correct: 2,
    explanation: `Simondon analyse une perversion de la technique : au lieu d'être un médiateur, elle devient le « philtre moderne » de la domination. L'homme qui cherche le pouvoir absolu imagine des machines à son image (androïdes) pour asservir les autres. Mais ce faisant, il projette dans la machine sa propre volonté de puissance et finit par s'y soumettre. La machine androïde n'est plus un outil, mais l'incarnation d'un désir de domination qui asservit son créateur.\n<b>Exemple :</b> Un régime qui déploie une surveillance de masse algorithmique pour contrôler sa population finit par dépendre du bon fonctionnement de ce système et par craindre que les programmeurs ou l'IA elle-même ne prennent le pouvoir, créant une nouvelle forme de tyrannie technique.`
  },

  // Question n°67
  {
    question: "Que signifie l'expression « mettre au niveau » dans la distinction entre « homme augmenté » et « humain augmenté » ?",
    answers: [
      "Améliorer les performances sportives jusqu'à battre des records mondiaux et repousser les limites du corps.",
      "Compenser un handicap ou une déficience pour permettre à un individu d'atteindre un niveau de fonctionnement considéré comme « normal ».",
      "Élever le QI moyen de l'humanité entière grâce à des thérapies génétiques ou des implants cérébraux généralisés."
    ],
    correct: 2,
    explanation: `L'« homme augmenté » renvoie souvent à des technologies d'assistance ou de réhabilitation visant à restaurer des capacités perdues ou absentes, à « mettre au niveau » d'une norme (ex: prothèse pour un amputé). L'« humain augmenté », dans le cadre transhumaniste, vise au contraire à dépasser la norme humaine, à améliorer des capacités déjà fonctionnelles. La première approche est thérapeutique et égalitaire, la seconde est améliorative et potentiellement créatrice d'inégalités abyssales.\n<b>Exemple :</b> Un implant cochléaire qui permet à une personne sourde d'entendre est une augmentation « mise au niveau ». Un implant cérébral qui permettrait à un trader de traiter l'information dix fois plus vite que la normale est une augmentation transhumaniste, créant une nouvelle « aristocratie biologique ».`
  },

  // Question n°68
  {
    question: "Que montre le film <em>The Truman Show</em> cité en filmographie ?",
    answers: [
      "Les dangers physiques et psychologiques du métier de marin et de la vie en mer.",
      "Le pouvoir manipulatoire des médias et de la télé-réalité, qui peuvent construire un monde factice, et la capacité humaine à s'en évader par la volonté.",
      "La beauté et la simplicité authentique d'une vie en petite communauté idéale et protégée."
    ],
    correct: 2,
    explanation: `Dans <em>The Truman Show</em>, la vie entière de Truman Burbank est une émission de télé-réalité géante dont il est la star inconsciente. Tous les gens autour de lui sont des acteurs, sa ville est un décor. Le film dénonce l'omniprésence des médias, leur manque de scrupules, et la façon dont ils peuvent fabriquer une réalité. Mais c'est aussi un film sur la résistance humaine : Truman, par ses doutes et son courage, finit par percer l'illusion et s'échapper, symbolisant le désir indomptable de liberté et de vérité.\n<b>Exemple :</b> Le film préfigure les inquiétudes sur les bulles informationnelles des réseaux sociaux, où des algorithmes nous enferment dans une réalité personnalisée, et sur l'exploitation de l'intimité par la téléréalité.`
  },

  // Question n°69
  {
    question: "Que signifie la citation d'Hannah Arendt : « Les limitations de la loi n'offrent pas de garanties absolues contre une action venue de l'intérieur de la nation » ?",
    answers: [
      "Les lois sont par essence imparfaites et inutiles pour prévenir les crimes, il faut leur préférer l'éducation morale.",
      "Même les démocraties avec des constitutions solides ne sont pas à l'abri d'une prise de pouvoir totalitaire ou criminel de l'intérieur, comme l'arrivée des Nazis.",
      "Il faut constamment renforcer les lois répressives et les pouvoirs de police pour se protéger des ennemis intérieurs."
    ],
    correct: 2,
    explanation: `Arendt, analysant les origines du totalitarisme, montre que l'État de droit allemand, réputé moderne, n'a pas pu résister à la subversion de l'intérieur par le parti national-socialiste. Les institutions « solides » en apparence peuvent être liquidées si la société civile se délite, si la parole publique est corrompue, et si les citoyens abdiquent leur jugement politique. Aucune loi ne protège absolument une communauté contre sa propre décomposition.\n<b>Exemple :</b> L'assaut du Capitole américain le 6 janvier 2021, tentative de renversement d'une élection par une foule excitée par des mensonges, a montré que même la plus ancienne démocratie moderne pouvait être violemment attaquée de l'intérieur, malgré son cadre constitutionnel.`
  },

  // Question n°70
  {
    question: "Que signifie la notion de « body hacking » (piratage de corps) ?",
    answers: [
      "Le fait de se faire voler ses données médicales personnelles sur internet par des hackers.",
      "Une pratique qui consiste à modifier volontairement son corps en y intégrant des composants électroniques, non pour des raisons médicales, mais pour augmenter ses capacités ou explorer de nouvelles sensations.",
      "Un régime alimentaire et d'exercice extrême visant à transformer son corps en machine performante, popularisé par certains athlètes."
    ],
    correct: 2,
    explanation: `Le body hacking est une forme radicale et expérimentale d'augmentation humaine, pratiquée par des bio-hackers. Il s'agit de considérer son corps comme une machine imparfaite que l'on peut « bidouiller » et améliorer par soi-même, en défiant les normes médicales et sociales. Ces modifications (comme s'implanter un aimant dans le doigt) sont souvent faites à la limite de l'art, de la performance et de la provocation. Cela pose des questions sur les limites de l'autonomie corporelle.\n<b>Exemple :</b> Certains bio-hackers se sont implanté une puce NFC entre le pouce et l'index pour déverrouiller leur porte ou leur smartphone d'un simple geste, ou un aimant pour percevoir les vibrations des appareils électroniques, explorant de nouveaux sens.`
  },

  // Question n°71
  {
    question: "Que révèle l'étude sur la croyance au créationnisme (une force divine à l'origine de l'homme) chez les jeunes Français ?",
    answers: [
      "Elle est en baisse constante et rapide depuis 50 ans, du fait de la sécularisation.",
      "Elle concerne 27% des 18-24 ans, et est fortement corrélée à l'appartenance religieuse littéraliste (musulmane, évangélique) et au milieu ouvrier.",
      "Elle est marginale et ne dépasse pas 5%, restant l'apanage de petites communautés très isolées."
    ],
    correct: 2,
    explanation: `Contrairement à une idée reçue, le créationnisme n'est pas marginal en France, surtout chez les jeunes. 27% d'entre eux y adhèrent. L'étude montre une forte surreprésentation dans deux groupes : les jeunes ouvriers (38%, +11 points) et les jeunes se déclarant « croyants et religieux », principalement musulmans et protestants évangéliques. Cela illustre comment le facteur religieux littéraliste et le sentiment de déclassement social peuvent converger pour favoriser le rejet du récit scientifique dominant (évolution).\n<b>Exemple :</b> L'écart avec les États-Unis est frappant, mais la montée en France, notamment dans certaines banlieues et milieux populaires, montre une remise en cause préoccupante des bases de la biologie moderne au nom d'une identité religieuse perçue comme menacée.`
  },

  // Question n°72
  {
    question: "Quelle est la principale critique adressée au « développement durable » par les partisans de la décroissance ?",
    answers: [
      "Il coûte trop cher et ralentit la croissance économique, principale source de progrès social.",
      "C'est un oxymore ou un leurre qui prétend concilier croissance économique infinie et préservation d'une planète aux ressources finies, ce qui est impossible.",
      "Il n'est pas assez ambitieux techniquement et repose sur des solutions dépassées et inefficaces."
    ],
    correct: 2,
    explanation: `Le « développement durable » (ou « croissance verte ») est l'idée dominante pour répondre à la crise écologique. Les décroissants comme Yves Paccalet y voient une contradiction dans les termes et une fuite en avant. Pour eux, dans un monde fini, toute croissance matérielle et énergétique, même « décarbonée », finit par épuiser les ressources. L'idée de « découpler » complètement la croissance du PIB de l'utilisation des ressources est un mythe. La seule solution serait une décroissance planifiée et équitable.\n<b>Exemple :</b> Même une voiture électrique « propre » nécessite l'extraction de métaux rares qui détruit des environnements. Pour un décroissant, il faut réduire le besoin de voiture (relocalisation, télétravail, transports en commun), pas simplement changer de motorisation.`
  },

  // Question n°73
  {
    question: "Que signifie l'idée d'« exocortex » dans les rêves transhumanistes les plus radicaux ?",
    answers: [
      "Une prothèse crânienne esthétique recouvrant le cerveau pour le protéger et le refroidir.",
      "Un système d'interconnexion directe entre le cerveau humain et les réseaux informatiques, créant une pensée hybride augmentée par la puissance de calcul.",
      "Un nouvel organe biologique qui pourrait pousser grâce à la génétique, décuplant nos capacités de mémoire."
    ],
    correct: 2,
    explanation: `L'exocortex (cortex extérieur) est le concept ultime d'augmentation cognitive. Il s'agirait d'une interface cerveau-machine si parfaite qu'elle ferait des bases de données mondiales et de l'intelligence artificielle une extension transparente de notre propre pensée. Plus besoin d'écran ou de clavier : on « penserait » une requête et la réponse surgirait dans l'esprit. Cela conduirait à une forme de conscience collective et désincarnée.\n<b>Exemple :</b> Le projet « Neuralink » d'Elon Musk, qui vise à implanter des puces dans le cerveau pour traiter des maladies puis, à terme, fusionner avec l'IA, s'inscrit dans cette utopie/dystopie de l'exocortex et pose des questions vertigineuses sur l'identité et la privacy mentale.`
  },

  // Question n°74
  {
    question: "Que montre l'exemple des « Trente Glorieuses » par rapport au rapport du Club de Rome (1972) ?",
    answers: [
      "Que la croissance économique est éternelle et qu'il faut poursuivre sur cette voie pour le bien-être de tous.",
      "Que la période de forte croissance d'après-guerre a créé un optimisme qui a été brutalement remis en cause par le rapport alertant sur les « limites à la croissance ».",
      "Que le Club de Rome s'est trompé dans ses prévisions pessimistes, puisque la croissance a continué après 1972 grâce à l'innovation."
    ],
    correct: 2,
    explanation: `Les « Trente Glorieuses » (1945-1975) ont été l'âge d'or de la croissance industrielle, de la consommation de masse et de la foi dans le progrès technique illimité. Le rapport du Club de Rome <em>Les limites à la croissance</em>, publié en 1972, a constitué un électrochoc. En modélisant l'impact de la croissance sur les ressources finies, il prédisait un effondrement possible. Il a marqué le début de la prise de conscience écologique à grande échelle.\n<b>Exemple :</b> Les chocs pétroliers de 1973 et 1979, survenant juste après le rapport, ont semblé lui donner raison et ont mis un terme à l'insouciance des Trente Glorieuses, inaugurant une ère de crises, de chômage et de doutes sur le modèle de développement.`
  },

  // Question n°75
  {
    question: "Que signifie l'opposition entre « génération ORTF » et « génération TikTok » selon François Kraus ?",
    answers: [
      "Une simple opposition d'âge sans signification profonde sur le rapport à l'information.",
      "L'opposition entre une époque où l'information était centralisée, contrôlée et délivrée par des médias de masse crédibles et l'époque actuelle où elle est fragmentée, produite par les pairs sur des plateformes ludiques.",
      "L'ORTF parlait aux vieux, TikTok aux jeunes, mais le fond (divertissement) reste le même."
    ],
    correct: 2,
    explanation: `L'ORTF (Office de radiodiffusion-télévision française) était un monopole public jusqu'en 1974. Il incarnait une parole institutionnelle, unique, descendante et relativement fiable. La « génération ORTF » a été éduquée dans ce paysage homogène. La « génération TikTok » évolue dans un écosystème inverse : l'information vient de millions de sources, elle est horizontale, personnalisée par les algorithmes, privilégie le format court et le divertissement. La crédibilité n'y est plus liée à l'institution, mais à l'audience.\n<b>Exemple :</b> En 1972, un journaliste scientifique d'Europe 1 commentant l'atterrissage sur la Lune était une autorité. Aujourd'hui, un ado préférera l'explication d'un youtubeur qu'il suit, même sans formation scientifique, car il lui fait confiance « d'homme à homme ».`
  },

  // Question n°76
  {
    question: "Que symbolise la figure de l'« influenceur » dans l'analyse de la défiance scientifique ?",
    answers: [
      "Un nouvel éducateur plus proche, plus accessible et plus compréhensible que le professeur traditionnel.",
      "Une figure dont la crédibilité est mesurée à son audience et son charisme plutôt qu'à son expertise, devenue une source d'information privilégiée au détriment des « sachants ».",
      "Un artiste des nouveaux médias, créateur de contenus esthétiques et divertissants, sans prétention informative."
    ],
    correct: 2,
    explanation: `L'influenceur incarne le nouvel arbitre de la vérité pour beaucoup de jeunes. Sur les réseaux sociaux, sa légitimité ne vient pas d'un diplôme ou d'une institution, mais de son succès quantifiable (abonnés, likes). Il parle sur un mode personnel, confidentiel, souvent émotionnel. Quand un influenceur à plusieurs millions d'abonnés émet un doute sur un vaccin, son impact est immense, car il bénéficie d'une confiance « affective » que n'ont plus les experts perçus comme lointains.\n<b>Exemple :</b> Un médecin généraliste sur un plateau télé aura moins d'impact qu'un influenceur fitness, sans formation médicale, partageant une vidéo émouvante sur les « dangers cachés » des vaccins, si cette dernière devient virale sur TikTok.`
  },

  // Question n°77
  {
    question: "Quelle est la thèse de Heidegger concernant le pont face à la centrale électrique sur le Rhin ?",
    answers: [
      "Le pont est une construction archaïque et laide, la centrale une œuvre de la modernité belle et fonctionnelle.",
      "Le pont de bois ancien « unit une rive à l'autre » et laisse le fleuve être, tandis que la centrale le « mure », le transformant en stock d'énergie.",
      "Les deux sont des constructions humaines équivalentes, mais la centrale est plus utile économiquement, justifiant sa préférence."
    ],
    correct: 2,
    explanation: `Heidegger oppose deux modes du « faire » humain. L'œuvre d'artisanat (le pont) s'inscrit dans le paysage, révèle le lieu (en reliant) et respecte l'essence des choses (le Rhin reste un fleuve). La technique moderne (la centrale) ne révèle pas, elle arraisonne. Elle ne laisse pas la nature être, elle la somme de livrer son énergie, la réduisant au statut de « fonds disponible » (<em>Bestand</em>). Le Rhin n'est plus qu'un maillon dans la production.\n<b>Exemple :</b> Un moulin à eau traditionnel utilise la force du courant pour moudre le grain, mais s'intègre au paysage. Un barrage hydroélectrique géant, en noyant des vallées, transforme radicalement le fleuve en une machine hydraulique, l'arrachant à son être.`
  },

  // Question n°78
  {
    question: "Que signifie l'expression « réification » de l'homme évoquée à propos des « ressources humaines » ?",
    answers: [
      "Le fait de rendre l'homme plus efficace et productif grâce à des techniques de management scientifique.",
      "Le fait de traiter un être humain comme une chose (<em>res</em>), un objet manipulable, mesurable et jetable, en niant sa subjectivité et sa dignité.",
      "Le fait de digitaliser les dossiers du personnel pour une gestion plus fluide et moins bureaucratique."
    ],
    correct: 2,
    explanation: `La réification (<em>Verdinglichung</em>) est un concept critique qui décrit le processus par lequel les relations sociales sont transformées en relations entre choses. Appliquée au management, parler de « ressources humaines » c'est mettre sur le même plan les employés et les autres ressources de l'entreprise. L'homme devient une variable d'ajustement, un « coût », un « actif ». Cette vision économique efface la dimension personnelle, morale et sociale du travail.\n<b>Exemple :</b> Un plan social qui licencie des centaines de personnes pour « améliorer la productivité » et faire monter le cours en Bourse traite les salariés comme des chiffres négatifs sur un bilan, occultant totalement le drame humain et social.`
  },

  // Question n°79
  {
    question: "Que montre le film <em>Yes Man</em> cité en filmographie ?",
    answers: [
      "Les dangers de dire oui à tout, qui mènent à des situations absurdes, dangereuses et aliénantes.",
      "Que le bonheur et l'ouverture à la vie peuvent advenir quand on dépasse sa fermeture d'esprit et son refus systématique en acceptant de dire « oui » aux opportunités.",
      "L'importance d'être prudent, de savoir dire « non » pour se protéger des arnaques et des mauvaises influences."
    ],
    correct: 2,
    explanation: `Le film comique <em>Yes Man</em> met en scène un homme blasé qui se met au défi de dire « oui » à toute proposition. Cette contrainte absurde le conduit à vivre des aventures improbables, à rencontrer des gens et finalement à se réouvrir au monde. Le film illustre, sur un mode léger, une idée philosophique : une source du mal-être contemporain est la fermeture sur soi, la peur du risque. Dire « oui » symbolise l'acceptation de l'imprévu, de l'altérité et de la vie.\n<b>Exemple :</b> Un jeune qui refuse les invitations par paresse ou cynisme s'enferme dans une bulle. En acceptant une sortie, un projet associatif, une conversation, il brise cette bulle et recrée du lien et du sens, luttant contre l'atomisation liquide.`
  },

  // Question n°80
  {
    question: "Quelle est la principale caractéristique de la « biotechnologie rouge » ?",
    answers: [
      "Son application à l'agriculture et à la production alimentaire (OGM, bio-pesticides).",
      "Son application médicale et pharmaceutique (thérapies géniques, médecine régénérative, fabrication d'organes).",
      "Son application à l'industrie et à la dépollution (bactéries mangeuses de pétrole, enzymes industrielles)."
    ],
    correct: 2,
    explanation: `Les biotechnologies sont classées par couleur. La biotechnologie « rouge » est dédiée au secteur de la santé et de la médecine. Elle utilise les organismes vivants ou leurs composants pour développer de nouveaux médicaments, vaccins, thérapies géniques ou cellulaires, ou pour créer des dispositifs médicaux innovants. C'est le domaine le plus directement lié à l'augmentation humaine thérapeutique, mais aussi le plus sensible éthiquement.\n<b>Exemple :</b> La bio-imprimante 3D F3DB, capable d'imprimer des cellules vivantes directement sur un organe lésé pour le réparer, est une application spectaculaire de biotechnologie rouge. Les vaccins à ARN messager contre le Covid-19 en sont une autre illustration.`
  },

  // Question n°81
  {
    question: "Que symbolise la « boîte cognitive objectivée » dont parle Michel Serres ?",
    answers: [
      "Une nouvelle forme de boîte crânienne, plus grosse, que développeront les futurs humains augmentés.",
      "L'ensemble des dispositifs numériques (ordinateurs, smartphones, cloud) qui contiennent et traitent nos savoirs, fonctionnant comme une mémoire et une intelligence externes.",
      "Les bibliothèques physiques et les centres d'archives, premiers supports externes de la mémoire collective."
    ],
    correct: 2,
    explanation: `Pour Serres, avec le numérique, notre cognition n'est plus seulement un processus interne. Elle est désormais partagée avec des machines qui en contiennent une partie objectivée. Cette « boîte cognitive » (l'ordinateur, le réseau) est à la fois un prolongement et un miroir de notre esprit. Nous dialoguons avec elle, lui déléguons des tâches, et puisons en elle des informations. Cette externalisation change la nature même de la pensée.\n<b>Exemple :</b> Lorsque vous utilisez un moteur de recherche pour vous souvenir d'un fait, un GPS pour vous orienter, ou un logiciel de traduction, vous utilisez cette « boîte cognitive objectivée » comme une prothèse de votre propre cerveau.`
  },

  // Question n°82
  {
    question: "Quelles sont les « trois pulsions de l'homme » évoquées pour expliquer la menace qu'il fait peser sur le monde ?",
    answers: [
      "La pulsion de vie, la pulsion de mort et la pulsion de pouvoir (concepts freudiens).",
      "La pulsion de reproduction (démographie), la pulsion du territoire (conquête) et la pulsion de hiérarchie (égoïsme, refus du partage).",
      "La pulsion de consommation, la pulsion de possession et la pulsion de reconnaissance sociale (analyses sociologiques)."
    ],
    correct: 2,
    explanation: `Pour expliquer la dynamique apparemment irrationnelle de la destruction environnementale, on peut invoquer trois pulsions fondamentales, héritées de notre évolution. La pulsion de reproduction conduit à une population croissante. La pulsion du territoire pousse à s'approprier toujours plus d'espace et de ressources. La pulsion de hiérarchie (ou d'égoïsme) fait que les individus et les nations privilégient leur bien-être immédiat au détriment du bien commun et des générations futures.\n<b>Exemple :</b> La déforestation de l'Amazonie combine ces trois pulsions : des populations en croissance ont besoin de terres (reproduction), des acteurs s'approprient de vastes territoires (territoire), et les intérêts économiques privés priment sur la préservation d'un bien commun planétaire (hiérarchie/égoïsme).`
  },

  // Question n°83
  {
    question: "Que signifie le terme « doxa » (δόξα) dans le contexte de la défiance envers la science ?",
    answers: [
      "La science véritable, fondée sur la démonstration et l'expérience, par opposition aux croyances.",
      "L'opinion courante, non fondée sur une connaissance rigoureuse, qui circule dans le public et tend à remplacer l'<em>epistémè</em> (la science).",
      "Une nouvelle forme de religion séculière, centrée sur la croyance en la toute-puissance de la technique."
    ],
    correct: 2,
    explanation: `Dans la philosophie grecque, la doxa s'oppose à l'<em>epistémè</em> (science vraie). La doxa est l'opinion, la croyance fluctuante, influencée par les apparences. On peut craindre le retour de la doxa comme mode de connaissance dominant. Sur les réseaux sociaux, ce qui fait « vérité » n'est pas la démonstration, mais ce qui est cru par le plus grand nombre, ce qui est répété par des influenceurs. La science perd son statut d'autorité face à cette doxa numérique.\n<b>Exemple :</b> L'idée que les vaccins modifient notre ADN est une doxa qui circule largement, basée sur des approximations et des peurs, malgré les démentis scientifiques (<em>epistémè</em>) répétés des généticiens.`
  },

  // Question n°84
  {
    question: "Quelle est la fonction du conditionnement prénatal par privation d'oxygène dans <em>Le Meilleur des mondes</em> ?",
    answers: [
      "Soigner les maladies congénitales et assurer la naissance de bébés parfaitement sains.",
      "Créer délibérément des déficiences intellectuelles et physiques chez les embryons des castes inférieures pour les adapter sans révolte à leur travail manuel.",
      "Améliorer la santé des fœtus en les habituant à un environnement pauvre en oxygène, comme sur d'autres planètes."
    ],
    correct: 2,
    explanation: `L'eugénisme dans le monde d'Huxley est négatif et social. Il ne vise pas à créer une race supérieure, mais à fabriquer des êtres parfaitement adaptés et heureux dans leur condition sociale prédéterminée. Pour les castes inférieures (Epsilon, Delta), cela implique de les rendre intellectuellement limités et physiquement robustes. La privation d'oxygène est une technique systématique pour atrophier le cerveau et le squelette, produisant des ouvriers dociles.\n<b>Exemple :</b> Un Embryon Epsilon destiné à être égoutier ou mineur sera conditionné à aimer l'obscurité et la chaleur, garantissant qu'il n'aspirera jamais à autre chose qu'à son travail souterrain, incarnant l'horreur d'une science mise au service d'une stratification sociale biologique.`
  },

  // Question n°85
  {
    question: "Que signifie l'idée que « l'homme est par principe perfectible, contrairement à l'animal » ?",
    answers: [
      "Que l'homme peut devenir physiquement plus fort et plus rapide que n'importe quel animal par l'entraînement.",
      "Que l'homme, contrairement à l'animal déterminé par l'instinct, a la capacité de se transformer par l'apprentissage, la culture, la technique et la morale.",
      "Que l'homme est moralement perfectible, pouvant atteindre la sainteté, alors que l'animal reste dans l'immoralité naturelle."
    ],
    correct: 2,
    explanation: `Cette idée, centrale chez Rousseau et les Lumières, fonde l'humanisme. L'animal est parfaitement adapté par l'évolution, mais il est « fermé » dans sa programmation instinctive. L'homme, lui, naît « inachevé », avec des instincts faibles. Cette indétermination est sa chance : elle le condamne à inventer, à apprendre, à créer des institutions, à progresser moralement. Sa « nature » est de n'avoir pas de nature fixe.\n<b>Exemple :</b> Un louveteau saura instinctivement chasser. Un enfant humain devra tout apprendre (marcher, parler, lire) et pourra devenir artiste, scientifique ou tyran selon son éducation et ses choix, illustrant cette ouverture et cette responsabilité.`
  },

  // Question n°86
  {
    question: "Que révèle l'exemple des messages tweets limités à 280 caractères et faisant en moyenne 33 caractères ?",
    answers: [
      "La paresse des utilisateurs de Twitter, qui ne veulent pas faire l'effort de rédiger des messages longs.",
      "Comment les nouveaux moyens de communication, en privilégiant la brièveté et l'immédiateté, peuvent rendre difficile le développement d'une discussion nuancée et approfondie.",
      "La supériorité de la communication écrite courte, plus directe et percutante que les longs discours."
    ],
    correct: 2,
    explanation: `On peut pointer ce paradoxe : l'explosion des moyens de communication s'accompagne souvent d'un appauvrissement du contenu des échanges. Twitter, avec sa limite de caractères, est l'archétype de la communication en slogans, en punchlines, en réactions épidermiques. Une moyenne de 33 caractères correspond à une phrase très courte. Il est impossible d'y développer un argument complexe, de nuancer, de citer ses sources. Cela favorise la polémique et le simplisme.\n<b>Exemple :</b> Un débat politique sur Twitter se réduit souvent à des échanges d'insultes et de formules choc, tandis qu'un débat télévisé de deux heures permettait au moins un développement minimal des arguments.`
  },

  // Question n°87
  {
    question: "Que signifie l'expression « la génération Z est en fait bien plus réac » utilisée par le spécialiste de l'Ifop ?",
    answers: [
      "Les jeunes sont plus révolutionnaires et contestataires que leurs aînés, prêts à renverser l'ordre établi.",
      "Contrairement à l'image progressiste qu'on leur attribue, les jeunes montrent sur certains sujets (religion, science, mœurs) des attitudes plus conservatrices, voire réactionnaires.",
      "Ils réagissent plus vite et plus fortement aux stimuli médiatiques, notamment aux injustices perçues."
    ],
    correct: 2,
    explanation: `L'étude bouleverse un cliché : la jeune génération, censée être ouverte et progressiste, révèle en fait des tendances fortes au conservatisme, notamment dans les milieux religieux. Le poids du facteur religieux (musulman et évangélique) pousse une partie de la jeunesse vers des positions littéralistes, anti-évolutionnistes, parfois anti-avortement et méfiantes envers la science moderne. Cette « réac-attitude » s'exprime aussi dans l'adhésion à des théories du complot.\n<b>Exemple :</b> Le fait qu'un quart des jeunes croient possible d'avorter sans risque avec des plantes, croyance plus répandue chez les « croyants et religieux », montre un recul des connaissances médicales basiques au profit de croyances traditionnelles, signe de conservatisme en matière de santé et de corps.`
  },

  // Question n°88
  {
    question: "Que symbolise la figure du « Sauvage » (John) face aux citoyens conditionnés du <em>Meilleur des mondes</em> ?",
    answers: [
      "La supériorité de la civilisation primitive, plus authentique et plus proche de la nature que la civilisation technicienne.",
      "La contradiction irréductible entre l'humanité authentique, avec ses passions et sa liberté, et l'humanité artificielle, aliénée du monde technocratique.",
      "Un simple attardé mental, incapable de s'adapter au bonheur moderne et donc voué à l'échec et à la mort."
    ],
    correct: 2,
    explanation: `John incarne tout ce que la société a voulu éradiquer pour assurer son bonheur et sa stabilité. Il a connu l'amour maternel, la jalousie, la foi, la lecture de la grande littérature, la souffrance et le sentiment de la mort. Sa rencontre avec la société « civilisée » est un choc des mondes. Son désespoir et son suicide signifient qu'il n'y a pas de place pour une humanité pleine et entière dans un paradis artificiel. Il préfère la douleur d'être humain.\n<b>Exemple :</b> La scène où John tente de libérer les Delta de leur distribution de soma en leur criant qu'ils sont « esclaves », et où ceux-ci, paniqués, le repoussent, montre l'abîme entre la quête de liberté et le confort de la servitude volontaire.`
  },

  // Question n°89
  {
    question: "Quelle est la principale caractéristique d'une « dystopie » littéraire par rapport à un simple récit d'horreur ?",
    answers: [
      "Elle se passe toujours dans un futur lointain ou alternatif, utilisant la science-fiction comme cadre.",
      "Elle présente une société qui prétend être parfaite, juste ou rationnelle, mais où cette perfection est obtenue au prix de l'aliénation et de la perte de liberté.",
      "Elle met en scène des monstres, des catastrophes ou des phénomènes surnaturels pour effrayer le lecteur."
    ],
    correct: 2,
    explanation: `La dystopie n'est pas simplement un monde horrible ; c'est un monde qui justifie son horreur par un grand récit séduisant : le bonheur pour tous, la paix, la stabilité sociale, le progrès scientifique. Le cauchemar réside dans la perversion de valeurs nobles en instruments de contrôle total. Le lecteur est amené à comprendre comment une utopie peut devenir un enfer quand elle est réalisée sans respect pour la complexité humaine.\n<b>Exemple :</b> Dans <em>1984</em>, le Parti prétend œuvrer pour un monde sans guerre, sans injustice. En réalité, il utilise cette promesse pour justifier une surveillance totale et l'abolition de la pensée, créant la pire des injustices.`
  },

  // Question n°90
  {
    question: "Que signifie l'expression « nomadisme (les jeunes / CDI) » dans la description de la société liquide ?",
    answers: [
      "Les jeunes aiment voyager pendant leurs vacances et aspirent à un mode de vie de « digital nomad ».",
      "La précarisation du marché du travail qui fait que les jeunes enchaînent les CDD, intérims, stages, sans perspective de carrière stable dans une même entreprise.",
      "Un style de vie choisi et assumé, refusant l'enracinement et la routine du CDI pour plus de liberté et d'aventure."
    ],
    correct: 2,
    explanation: `Bauman utilise la métaphore du nomadisme pour décrire la condition précaire dans le travail. Alors que la génération précédente pouvait espérer un CDI et une carrière linéaire, les jeunes doivent être flexibles, mobiles, prêts à changer de job, de ville. Le CDI devient un Graal inaccessible. Ce nomadisme imposé fragilise les identités professionnelles, empêche l'enracinement et perpétue un état d'insécurité caractéristique de la vie liquide.\n<b>Exemple :</b> Un jeune diplômé peut enchaîner un stage non rémunéré à Paris, un CDD de 6 mois à Lyon, puis un contrat d'intérim à Marseille, sans jamais savoir où il sera dans un an, et sans pouvoir construire de projet de vie stable (achat immobilier, famille).`
  },

  // Question n°91
  {
    question: "Que montre le film <em>Sully</em> (de Clint Eastwood) cité en filmographie ?",
    answers: [
      "La dangerosité des vols au-dessus de l'Hudson et la nécessité de changer les couloirs aériens.",
      "La supériorité de l'instinct et de l'expérience humaine face à la froide logique des ordinateurs dans une situation de crise extrême.",
      "La nécessité de mieux former les pilotes automatiques pour qu'ils puissent gérer ce type d'incident sans intervention humaine."
    ],
    correct: 2,
    explanation: `Le film raconte l'« amerrissage forcé » réussi du vol 1549 sur l'Hudson par le pilote Chesley « Sully » Sullenberger. Le conflit oppose Sully, qui a pris la décision en quelques secondes basée sur son expérience, à une enquête qui utilise des simulations informatiques pour suggérer qu'il aurait pu rejoindre un aéroport. Le film montre que les modèles ne peuvent intégrer tous les paramètres humains (stress, temps de réaction) et que le jugement expert peut être supérieur.\n<b>Exemple :</b> Les simulations supposaient une réaction immédiate et parfaite. Sully a dû évaluer, communiquer, rassurer, et choisir le seul plan d'eau viable en quelques secondes, un jugement situationnel qu'aucun ordinateur de l'époque ne pouvait modéliser.`
  },

  // Question n°92
  {
    question: "Que signifie l'expression « le corps est une fin à améliorer plutôt qu'un moyen » dans la société liquide ?",
    answers: [
      "Il faut faire du sport et bien manger pour être en bonne santé et vivre longtemps (le corps comme moyen de la vie).",
      "Le corps n'est plus l'instrument du travail, mais un objet de consommation et de représentation de soi, qu'il faut sculpter et embellir pour répondre à des standards.",
      "La médecine permet désormais de réparer tous les défauts corporels, faisant du corps un projet de perfection technique achevable."
    ],
    correct: 2,
    explanation: `Dans une société de consommation où l'identité se construit par l'image, le corps devient le premier support de cette identité marchande. On ne l'entretient plus seulement pour qu'il fonctionne bien (santé comme moyen), mais pour qu'il « paraisse » bien, qu'il soit performant esthétiquement. Le culte du corps « fit », jeune et conforme devient une fin en soi, alimentant des industries. Le corps devient un projet perpétuel d'amélioration, source d'insatisfaction constante.\n<b>Exemple :</b> La prolifération des selfies sur les réseaux sociaux, où l'on expose son corps filtré, et la pression pour avoir un « summer body » illustrent cette transformation du corps en objet de performance sociale et de consommation.`
  },

  // Question n°93
  {
    question: "Que signifie l'idée de « vérités alternatives » employée dans le contexte de l'étude Ifop ?",
    answers: [
      "Des découvertes scientifiques révolutionnaires non encore reconnues par les académies traditionnelles.",
      "Des croyances, théories du complot ou récits qui prétendent offrir une explication du monde concurrente de la science établie et des faits vérifiés.",
      "Des opinions politiques différentes, légitimes dans le cadre d'un débat démocratique pluraliste."
    ],
    correct: 2,
    explanation: `L'expression « vérités alternatives » (ou « faits alternatifs »), popularisée sous la présidence Trump, désigne la prétention à substituer aux faits objectifs des récits subjectifs qui servent une idéologie ou une identité. Dans l'étude, ces « vérités » vont du créationnisme à la négation de l'alunissage. Elles ne résistent pas à l'examen scientifique, mais prospèrent car elles répondent à un besoin de sens, d'appartenance ou de révolte.\n<b>Exemple :</b> L'affirmation selon laquelle le massacre de Boutcha a été « mis en scène par les Ukrainiens » est une « vérité alternative » propagée par la Russie, qui nie les preuves accablantes pour servir sa narration. 26% des jeunes Français y croient.`
  },

  // Question n°94
  {
    question: "Quelle est la vision de la technique dans le mythe de Prométhée ?",
    answers: [
      "Un don divin bienveillant, offert gratuitement aux hommes pour leur salut et leur épanouissement.",
      "Un vol, une transgression nécessaire mais risquée, qui arrache l'homme à l'animalité mais l'expose aussi à la colère des dieux et aux maux de l'existence.",
      "Une malédiction pure et simple, à l'origine de tous les malheurs de l'humanité, qu'il faudrait regretter."
    ],
    correct: 2,
    explanation: `Le mythe est ambigu. D'un côté, la technique sauve l'homme de l'impuissance naturelle et le rapproche des dieux. De l'autre, elle est acquise par la ruse et le vol, dans la violence. Elle déclenche la vengeance divine (Pandore, le travail, la maladie). Ainsi, la technique n'est pas présentée comme un simple progrès, mais comme un pacte faustien : l'homme gagne en puissance, mais perd l'innocence. Elle est à la fois libératrice et source de nouveaux malheurs.\n<b>Exemple :</b> L'énergie nucléaire illustre cette ambivalence : elle offre une source d'énergie prodigieuse (le feu moderne) mais avec le risque de catastrophes apocalyptiques (Tchernobyl) – une puissance qui peut se retourner contre son créateur.`
  },

  // Question n°95
  {
    question: "Que signifie l'expression « perte de crédibilité des sachants » comme cause de la défiance scientifique ?",
    answers: [
      "Les scientifiques commettent trop d'erreurs et de fraudes, discréditant l'ensemble de leur discipline.",
      "Les figures traditionnelles de l'autorité savante ne sont plus perçues comme des sources neutres, mais comme des acteurs intéressés, politisés ou déconnectés.",
      "Les jeunes n'écoutent plus leurs professeurs, par un effet de rébellion générationnel classique."
    ],
    correct: 2,
    explanation: `La défiance ne vise pas la science en tant que méthode, mais ses représentants institutionnels. Plusieurs crises (affaire du sang contaminé, vache folle, déni climatique de certains scientifiques liés à l'industrie) ont entamé la confiance. Les « sachants » sont aussi suspectés d'être au service du pouvoir ou de former une caste élitiste. Sur les réseaux sociaux, cette crédibilité est concurrencée par celle des « influenceurs » qui paraissent plus authentiques.\n<b>Exemple :</b> Pendant la pandémie de Covid-19, les revirements apparents des experts (sur les masques) et les conflits publics entre scientifiques ont nourri l'idée qu'« ils ne savent pas » ou qu'« ils nous mentent », sapant leur autorité.`
  },

  // Question n°96
  {
    question: "Quelle proposition de Yves Paccalet résume sa réponse à la crise écologique dans <em>Sortie de secours</em> ?",
    answers: [
      "Accélérer le progrès technique et la colonisation spatiale pour trouver de nouvelles ressources et un nouvel habitat.",
      "Une décroissance économique et matérielle vigoureuse et planifiée dans les pays riches, considérant que ni la technique ni le développement durable ne suffiront.",
      "Un retour généralisé et obligatoire à un mode de vie agricole pré-industriel de type « Amish », seul garant d'un équilibre avec la nature."
    ],
    correct: 2,
    explanation: `Yves Paccalet, dans la lignée de la décroissance, estime que l'idée d'un « développement durable » ou d'une croissance « verte » est un leurre dans un monde fini. Il prône une décroissance volontaire, radicale et planifiée de notre consommation matérielle et énergétique (diviser par deux la consommation des pays riches). Pour lui, l'humanité n'est pas prête à ce renoncement, ce qui rend cette solution utopique mais nécessaire, l'alternative étant le « néant » de l'effondrement.\n<b>Exemple :</b> Réduire drastiquement l'usage de la voiture individuelle, limiter le chauffage, généraliser une alimentation locale et peu carnée, et ralentir le rythme de renouvellement des objets sont des mesures concrètes de décroissance.`
  },

  // Question n°97
  {
    question: "Quel est l'argument économique classique de Jean-Baptiste Say concernant la croissance ?",
    answers: [
      "Elle est nécessairement limitée par la quantité finie de ressources naturelles et de travail disponible.",
      "L'accumulation du capital et le progrès technique peuvent compenser les limites des ressources, permettant une croissance illimitée.",
      "Elle doit être stoppée et remplacée par une économie stationnaire pour préserver l'environnement et la paix sociale."
    ],
    correct: 2,
    explanation: `L'économiste classique Jean-Baptiste Say est un optimiste de la croissance. Il considère que l'accumulation du capital (machines, usines) et l'innovation peuvent compenser les limites des ressources naturelles et du travail. Les matières premières se substituent les unes aux autres, et le progrès permet de faire plus avec moins. Cette vision a dominé la pensée économique jusqu'aux chocs pétroliers et à la prise de conscience écologique.\n<b>Exemple :</b> Le pétrole a remplacé le charbon, les fibres synthétiques remplacent partiellement le coton, et les énergies renouvelables pourraient à l'avenir remplacer les fossiles, illustrant la substituabilité des ressources dans la vision optimiste de Say.`
  },

  // Question n°98
  {
    question: "Quel exemple de « cobot » est donné pour illustrer la collaboration homme-machine ?",
    answers: [
      "Un robot-chien de compagnie capable de détecter les émotions de son propriétaire.",
      "Un exosquelette porté par un ouvrier pour lui permettre de soulever des charges lourdes sans effort.",
      "Une intelligence artificielle de conversation (chatbot) capable de répondre aux questions des clients d'une banque."
    ],
    correct: 2,
    explanation: `Le « cobot » (robot collaboratif) représente une vision où la machine amplifie les capacités humaines sans les remplacer. L'exosquelette est un cobot porté : il augmente la force physique de l'opérateur tout en laissant à celui-ci le contrôle des mouvements, la dextérité et l'intelligence de la tâche. L'homme et la machine travaillent en symbiose, l'un apportant la puissance, l'autre le jugement et l'adaptabilité.\n<b>Exemple :</b> Dans un entrepôt logistique, un exosquelette permet à un préparateur de commandes de manipuler des colis lourds toute la journée sans se blesser le dos, combinant l'efficacité technique au savoir-faire humain pour choisir et emballer les articles.`
  },

  // Question n°99
  {
    question: "Que critique le film <em>Une nouvelle chance</em> à propos des nouvelles méthodes de recrutement sportif ?",
    answers: [
      "Le recrutement se fait désormais sur des critères physiques (taille, poids) au détriment du talent technique.",
      "La survalorisation des statistiques et des algorithmes, qui ignorent des qualités essentielles comme le mental ou l'expérience du jeu.",
      "La corruption des jeunes joueurs par des agents sans scrupules qui les poussent à signer des contrats désavantageux."
    ],
    correct: 2,
    explanation: `Le film oppose un vieux recruteur à l'ancienne, Gus, qui observe les joueurs avec son expérience et son intuition, à des méthodes modernes basées sur l'analyse informatique de statistiques (« sabermetrics »). Il dénonce la froideur et l'aveuglement de ces algorithmes qui, en réduisant le joueur à des données quantitatives, manquent l'essentiel : le mental, le caractère, la capacité à performer sous pression, toutes qualités qui échappent aux chiffres.\n<b>Exemple :</b> Un algorithme pourrait rejeter un joueur de baseball à cause d'une mauvaise moyenne au bâton, sans voir qu'il excelle dans les moments décisifs des playoffs ou qu'il a un leadership exceptionnel dans son équipe, qualités pourtant décisives pour le succès collectif.`
  },

  // Question n°100
  {
    question: "Que peut-on conclure de la séquence sur « L'humain et ses limites » concernant l'avenir du progrès ?",
    answers: [
      "L'homme doit renoncer à toute ambition technique et scientifique pour revenir à un état de nature préservé et harmonieux.",
      "L'homme, être limité mais perfectible, doit apprendre à penser et à maîtriser ses créations avec sagesse, mesure et responsabilité, pour éviter qu'elles ne se retournent contre lui.",
      "Le progrès est inéluctablement mortifère et conduit à l'effondrement ; il n'y a donc aucun espoir pour l'avenir de l'humanité."
    ],
    correct: 2,
    explanation: `Il faut éviter l'optimisme naïf et le pessimisme absolu. L'homme est confronté à des dangers colossaux qu'il a lui-même créés en dépassant ses limites (armes de destruction, crise écologique, aliénation technologique). Cette capacité de dépassement est son propre. L'enjeu n'est donc pas de renoncer au progrès, mais de l'orienter par la politique, l'éthique et l'éducation. Il faut réapprendre la modération, développer l'esprit critique, et inventer des utopies pragmatiques pour un avenir où la technique serve la liberté et la dignité dans un monde préservé.\n<b>Exemple :</b> Le principe de précaution, l'enseignement de la pensée critique, la régulation des réseaux sociaux, ou la recherche de technologies sobres, sont des tentatives pour réintroduire de la sagesse et des limites dans le déploiement de la puissance humaine.`
  }
];