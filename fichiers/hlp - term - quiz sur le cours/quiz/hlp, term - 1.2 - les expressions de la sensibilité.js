// ============================================
// DONNÉES GÉNÉRALES
// ============================================
const titre = "QUIZ HLP TERM - les expressions de la sensibilité";
const sousTitre = "100 questions";

// ============================================
// SYNTHESE
// ============================================
const philosophyData = {
  texte: `La sensibilité désigne notre capacité à être affecté, à éprouver des émotions et des sentiments. Depuis l’Antiquité, elle est pensée dans un rapport de tension avec la raison : doit-elle être gouvernée ou est-elle la source authentique de notre rapport au monde ? Le romantisme du XIXe siècle exalte cette sensibilité, en fait l’expression d’un mal-être individuel et générationnel, et la place au cœur de la création artistique. Au XXe siècle, la phénoménologie et la psychologie interrogent le corps comme lieu premier de la sensibilité et la difficile objectivation de l’expérience subjective. Aujourd’hui, les neurosciences et la sociologie continuent de débattre de l’universalité ou de la construction sociale de nos émotions.`,
  source: "synthèse des enjeux de la séquence"
};

// ============================================
// QUESTIONS DU QUIZ (1 à 100)
// ============================================
const questions = [
  // Question n°1
  {
    question: "Que signifie étymologiquement le terme <em>expression</em>, tel qu'il est défini en introduction de la séquence ?",
    answers: [
      "L'action de graver ou d'imprimer une marque indélébile.",
      "L'action de transformer une impression initiale en une idée abstraite.",
      "L'action de faire sortir en pressant, de rendre visible ce qui était à l'intérieur."
    ],
    correct: 3,
    explanation: `Étymologiquement, <em>expression</em> vient du latin <em>expressio</em>, qui signifie « action de presser pour faire sortir ». Cela correspond à l'idée de rendre manifeste et visible une réalité intérieure, comme le jus d'un citron qu'on presse. Cette définition fonde l'approche de la séquence : exprimer sa sensibilité, c'est faire advenir à l'extérieur des émotions ou des sentiments d'abord éprouvés intérieurement. Le processus d'expression est ainsi conçu comme une extériorisation et une mise en forme.
    \nExemple : Un artiste qui peint un tableau mélancolique exprime et donne à voir un état d'âme qui était d'abord en lui.`
  },
  // Question n°2
  {
    question: "Selon la comparaison développée par Platon dans le <em>Phèdre</em>, que symbolisent les deux chevaux de l'attelage qui représente l'âme humaine ?",
    answers: [
      "L'un (blanc) obéit à la raison et aime la modération, l'autre (noir) est rétif et attiré par le désordre.",
      "Ils représentent les deux formes d'amour : l'amour charnel et l'amour platonique désincarné.",
      "L'un symbolise les sens et l'autre la mémoire, tous deux étant nécessaires à la connaissance."
    ],
    correct: 1,
    explanation: `Dans le mythe de l'attelage ailé, Platon utilise une allégorie pour décrire la structure de l'âme. Le cocher représente la raison (le <em>logistikon</em>), chargée de diriger l'ensemble. Le cheval blanc symbolise la partie de l'âme liée aux sentiments nobles comme le courage et l'honneur, qui obéit relativement bien. Le cheval noir représente la partie désirante et appetitive (<em>epithumetikon</em>), attirée par les plaisirs sensibles, l'absence de mesure, et qui n'obéit qu'à la force. Cette image illustre le conflit interne de l'homme et la nécessité pour la raison de dominer les pulsions pour atteindre la sagesse.
    \nExemple : Le combat intérieur d'une personne qui résiste à une tentation immédiate par respect pour un principe moral illustre cette lutte entre le cheval noir et le cocher guidé par la raison.`
  },
  // Question n°3
  {
    question: "Comment Kant, dans son <em>Anthropologie</em>, distingue-t-il principalement la passion de l'émotion ?",
    answers: [
      "L'émotion relève du corps, la passion relève exclusivement de l'esprit.",
      "L'émotion est une ivresse passagère, la passion est une maladie enracinée qui résiste à l'amélioration morale.",
      "L'émotion est sociale, la passion est purement individuelle et solitaire."
    ],
    correct: 2,
    explanation: `Kant établit une distinction morale cruciale entre l'émotion (<em>Affekt</em>) et la passion (<em>Leidenschaft</em>). L'émotion est un mouvement soudain et intense de l'âme, une « ivresse » qui porte une atteinte momentanée à la liberté et à la maîtrise de soi. La passion, en revanche, est une inclination durable et réfléchie, un attachement constant à un objet. Elle est une « maladie » car elle s'enracine, se concilie avec le raisonnement et installe une servitude volontaire qui exclut l'amélioration morale. Pour Kant, la passion est donc plus dangereuse car elle corrompt durablement la liberté interne.
    \nExemple : Une colère subie face à une injustice est une émotion ; une rancune tenace et calculée qui oriente toute la conduite d'une personne est une passion.`
  },
  // Question n°4
  {
    question: "Quelle est la thèse centrale de Schopenhauer, présentée dans la séance 1, concernant le sentiment amoureux ?",
    answers: [
      "Il exprime les mouvements authentiques du cœur et la recherche de l'âme sœur.",
      "Il manifeste une pulsion vitale et sexuelle aveugle (la Volonté) que l'individu s'ignore lui-même.",
      "Il est une sublimation purement spirituelle du désir, permettant d'échapper à la volonté de vivre."
    ],
    correct: 2,
    explanation: `Schopenhauer propose une vision désenchantée et vitaliste du sentiment amoureux. Dans <em>Le Monde comme volonté et représentation</em>, il affirme que ce que nous prenons pour un sentiment élevé n'est que l'expression déguisée de la « Volonté » métaphysique, une force aveugle et sans finalité qui pousse à la reproduction de l'espèce. L'individu croit aimer une personne unique, mais il est en réalité le jouet d'une pulsion vitale (le <em>conatus</em>) qui le dépasse. Le sentiment amoureux est ainsi une illusion qui masque le désir sexuel fondamental.
    \nExemple : Schopenhauer explique l'infidélité non par un manque de sentiment, mais par l'action de cette force vitale aveugle qui pousse l'individu à chercher de nouveaux partenaires pour la perpétuation de l'espèce.`
  },
  // Question n°5
  {
    question: "Pourquoi faut-il attendre le XVIIIe siècle pour voir un intérêt marqué pour la sensibilité en littérature et en philosophie ?",
    answers: [
      "Parce que l'Église a perdu son emprise et a autorisé l'expression des sentiments personnels.",
      "Parce que les périodes de trouble et de bouleversement, comme celle des Lumières puis de la Révolution, favorisent l'introspection et l'expression du moi.",
      "Parce que les progrès de la médecine ont enfin permis de cartographier le système nerveux."
    ],
    correct: 2,
    explanation: `La naissance d'un intérêt prononcé pour la sensibilité est historiquement située. On peut la relier au contexte du XVIIIe siècle, marqué par des bouleversements politiques, sociaux et intellectuels (les Lumières, la Révolution). Ce climat d'instabilité et de remise en question des anciens cadres (monarchie, religion) pousse les individus à se replier sur leur intériorité et à chercher dans leurs sentiments une vérité personnelle. Ce mouvement pré-romantique pose les bases du romantisme du XIXe siècle, qui fera de l'expression de la sensibilité son credo.
    \nExemple : Les <em>Rêveries du promeneur solitaire</em> de Rousseau, écrites dans un contexte d'exil et de désillusion politique, sont emblématiques de cette exploration de l'intimité sensible.`
  },
  // Question n°6
  {
    question: "Quelle affirmation de Maurice Merleau-Ponty résume le rôle du corps dans notre rapport au monde ?",
    answers: [
      "Le corps est une prison pour l'âme, qui l'empêche d'accéder au monde des idées.",
      "Le corps est aussi la texture commune de tous les objets et l'instrument général de ma « compréhension ».",
      "Le corps est une machine dont les émotions sont les rouages défectueux."
    ],
    correct: 2,
    explanation: `Dans sa <em>Phénoménologie de la perception</em>, Merleau-Ponty rompt avec la tradition dualiste qui oppose l'esprit et le corps. Il affirme que le corps n'est pas un simple objet parmi d'autres, mais notre moyen premier et fondamental d'être au monde et de le comprendre. Le corps est « la texture commune » car c'est par lui que nous entrons en contact avec toute chose ; il est « l'instrument général » car toute perception, tout savoir, toute interaction passent par lui. La sensibilité n'est donc pas un accident de la matière, mais le mode d'être originel de la conscience incarnée.
    \nExemple : Un sculpteur comprend les propriétés de l'argile (sa souplesse, sa résistance) non par la pensée abstraite, mais par la sensation et le geste de ses mains, par son corps en action.`
  },
  // Question n°7
  {
    question: "Selon David Le Breton, quelle reformulation du cogito cartésien mettrait mieux en lumière la condition humaine ?",
    answers: [
      "« Je sens donc je suis », car l'immersion sensorielle dans le monde précède la pensée.",
      "« Je souffre donc je suis », car la douleur est la preuve indubitable de l'existence.",
      "« Je désire donc je suis », car le désir est le moteur de toute action."
    ],
    correct: 1,
    explanation: `L'anthropologue David Le Breton, dans <em>La Saveur du monde</em>, propose de corriger l'intellectualisme du « Je pense donc je suis » de Descartes. Il soutient que notre existence n'est pas d'abord une existence de « chose pensante », mais une existence corporelle et sensible. Avant toute élaboration rationnelle, nous sommes immergés dans le monde par nos sens. La formule « Je sens donc je suis » souligne que la conscience de soi et du monde émerge d'abord de cette expérience sensorielle continue. Elle replace le corps et la sensibilité au fondement de l'identité et de la connaissance.
    \nExemple : Un nouveau-né qui tète, sent la chaleur et entend une voix construit son sentiment d'existence et son premier rapport au monde bien avant de pouvoir formuler la moindre pensée conceptuelle.`
  },
  // Question n°8
  {
    question: "Outre les cinq sens traditionnels, quel sens est défini comme « la capacité à localiser les parties de son corps dans l'espace sans utiliser la vue » ?",
    answers: [
      "La proprioception.",
      "La nociception.",
      "L'équilibrioception."
    ],
    correct: 1,
    explanation: `La proprioception, ou sens kinesthésique, est un sens interne souvent méconnu. Il s'agit de la perception inconsciente de la position et des mouvements des différentes parties de notre corps. C'est ce sens qui nous permet de marcher sans regarder nos pieds, de porter un verre à nos lèvres les yeux fermés, ou de savoir si notre bras est levé ou non. Il ne repose pas sur les organes sensoriels externes (vue, toucher), mais sur des récepteurs situés dans les muscles, les tendons et les articulations. Son dysfonctionnement entraîne une grande maladresse.
    \nExemple : Une personne privée de proprioception aurait besoin de regarder constamment ses membres pour savoir où ils se trouvent et ne pourrait pas applaudir les yeux fermés.`
  },
  // Question n°9
  {
    question: "Dans la réflexion sur la peau comme lieu de la sensibilité, que permet-elle par rapport à l'identité ?",
    answers: [
      "Elle projette une identité, l'inscrit et la donne à voir, notamment à travers le visage.",
      "Elle cache l'identité véritable, qui est purement spirituelle et invisible.",
      "Elle permet uniquement une identification biologique et génétique infaillible."
    ],
    correct: 1,
    explanation: `La peau n'est pas seulement un organe de protection ou de sensation. Elle joue un rôle crucial dans la construction et la manifestation de l'identité. Socialement, la peau (sa couleur, ses marques, ses parures, son odeur) projette une image de soi et inscrit le sujet dans un groupe. Philosophiquement, le visage, comme partie visible de la peau, est le lieu de « l'épiphanie de l'autre » (Levinas), où autrui se révèle dans son altérité et son humanité. La peau est donc une frontière vivante qui à la fois délimite et expose le moi.
    \nExemple : Les expressions idiomatiques comme « être bien dans sa peau » ou « se mettre dans la peau de quelqu'un » témoignent de ce lien profond entre l'enveloppe corporelle et l'identité personnelle.`
  },
  // Question n°10
  {
    question: "Quelle est la principale différence entre « sympathie » et « empathie » ?",
    answers: [
      "La sympathie (ou compassion) signifie « souffrir avec », l'empathie signifie « souffrir à la place de ».",
      "La sympathie est un sentiment universel, l'empathie est réservée aux liens familiaux.",
      "La sympathie est intellectuelle, l'empathie est émotionnelle."
    ],
    correct: 1,
    explanation: `Il faut insister sur une distinction étymologique et conceptuelle importante. La sympathie (du grec <em>syn</em>, avec, et <em>pathos</em>, souffrance) désigne la capacité à partager ou à compatir à la souffrance d'autrui, à « souffrir avec » lui. L'empathie (du grec <em>en</em>, dans, et <em>pathos</em>) désigne une forme plus profonde et problématique d'identification : c'est le fait de se mettre à la place de l'autre, de ressentir ce qu'il ressent, comme si l'on « souffrait à sa place ». Cette distinction questionne la possibilité et les limites de la compréhension d'autrui : peut-on vraiment sortir de soi pour éprouver le vécu d'un autre ?
    \nExemple : Voir un ami triste et se sentir triste avec lui relève de la sympathie ; imaginer et ressentir physiquement la douleur d'un patient subissant une intervention relève d'un effort d'empathie.`
  },
  // Question n°11
  {
    question: "Dans l'extrait des <em>Rêveries du promeneur solitaire</em>, comment Rousseau décrit-il l'effet du spectacle du lac de Bienne sur son âme ?",
    answers: [
      "Il l'apaise et la plonge dans une « rêverie délicieuse » qui fixe ses sens et chasse toute autre agitation.",
      "Il l'excite et la remplit d'idées révolutionnaires et de projets politiques.",
      "Il l'emplit d'une terreur sublime face à la puissance écrasante de la nature."
    ],
    correct: 1,
    explanation: `Cet extrait de la « Cinquième promenade » est un paradigme du préromantisme. Rousseau y décrit un état de fusion harmonieuse avec la nature. Le mouvement régulier des vagues (« le flux et reflux »), son bruit continu, agissent comme un bercement sensoriel qui « fixe » ses sens. Cette immersion sensorielle éteint les « mouvements internes » de l'âme (les tourments, les pensées agitées) et le plonge dans une rêverie passive et heureuse. L'expérience sensible suffit à lui faire sentir son existence avec plaisir, « sans prendre la peine de penser ». La nature est ici un agent thérapeutique qui pacifie la sensibilité.
    \nExemple : Ce passage illustre comment un paysage naturel peut servir de miroir et de baume aux états d'âme, annonçant le lyrisme romantique.`
  },
  // Question n°12
  {
    question: "Quel est « l'effet Werther », évoqué à propos du roman de Goethe ?",
    answers: [
      "Le phénomène de contagion par lequel des lecteurs, émus par le suicide du héros, se suicident à leur tour.",
      "La tendance à idéaliser l'amour malheureux comme la forme la plus pure de sentiment.",
      "L'effet stimulant que peut avoir une œuvre d'art sur la créativité d'autres artistes."
    ],
    correct: 1,
    explanation: `« Les Souffrances du jeune Werther » de Goethe (1774) a eu un retentissement sociologique inattendu. Le roman épistolaire, qui raconte le suicide par désespoir amoureux du jeune Werther, a provoqué une vague de suicides mimétiques parmi ses jeunes lecteurs en Europe. Les sociologues ont nommé « effet Werther » ce phénomène de contagion sociale par lequel la médiatisation d'un suicide peut en provoquer d'autres. Il s'oppose à « l'effet Papageno » (du personnage de Mozart), où la présentation d'alternatives positives à la crise prévient le passage à l'acte. Cet effet montre la puissance de l'expression artistique de la sensibilité et son impact réel sur les comportements.
    \nExemple : Les inquiétudes autour de la diffusion de certaines séries traitant du suicide parmi les adolescents s'appuient sur la connaissance de « l'effet Werther ».`
  },
  // Question n°13
  {
    question: "Quelle émotion spécifique, profonde et sans cause apparente, caractérise le « mal du siècle » romantique ?",
    answers: [
      "La mélancolie (tristesse vague et persistante).",
      "L'angoisse (peur sans objet).",
      "La phobie (peur irraisonnée)."
    ],
    correct: 1,
    explanation: `La mélancolie est l'humeur emblématique du héros romantique. Contrairement à une tristesse passagère liée à un événement, la mélancolie (étymologiquement « bile noire » dans la théorie des humeurs) est un état durable de profonde tristesse, souvent sans cause clairement identifiable. Elle traduit un sentiment de vide existentiel, un désenchantement face au monde, un mal-être ontologique. Les romantiques comme Chateaubriand, Musset ou Baudelaire (qui parle de « spleen ») en ont fait le ressort de leur création, explorant les nuances de cette souffrance intime qui devient le signe d'une âme supérieure et incomprise.
    \nExemple : Le personnage de René chez Chateaubriand incarne cette mélancolie qui le pousse à se replier sur lui-même et à errer sans but.`
  },
  // Question n°14
  {
    question: "Dans <em>Lorenzaccio</em> d'Alfred de Musset, pourquoi le personnage éponyme compare-t-il le meurtre qu'il projette à « un brin d'herbe » ?",
    answers: [
      "Parce que c'est la seule chose à laquelle il peut encore se raccrocher pour donner un sens à sa vie dégradée.",
      "Parce que c'est un acte insignifiant dans le grand cours de l'histoire.",
      "Parce que c'est une action pure et naturelle, comme la pousse d'une plante."
    ],
    correct: 1,
    explanation: `Lorenzaccio est un héros romantique rongé par la mélancolie et la perte de son innocence. Dans la tirade citée, il explique qu'il n'est plus que « l'ombre de lui-même ». Le meurtre du tyran Alexandre de Médicis n'est pas présenté comme un acte héroïque vertueux, mais comme « le seul fil » qui le rattache encore à son « cœur d'autrefois », le seul « brin d'herbe » auquel il peut se cramponner alors qu'il glisse sur un « mur taillé à pic ». L'action violente, même criminelle, devient pour lui le seul moyen désespéré de retrouver une forme d'unité et de sens, la « seule chose qui [lui] reste de [sa] vertu ».
    \nExemple : Ce raisonnement illustre la logique tragique du héros romantique pour qui l'action extrême, même destructrice, est préférable à la passivité et au néant intérieur.`
  },
  // Question n°15
  {
    question: "Selon l'analyse kantienne du sublime, que découvre l'homme face à la puissance irrésistible de la nature ?",
    answers: [
      "Sa supériorité spirituelle et sa liberté, qui le rendent indépendant de cette puissance physique.",
      "La nécessité de dominer techniquement cette nature pour assurer sa survie.",
      "Son insignifiance absolue et son anéantissement inéluctable."
    ],
    correct: 1,
    explanation: `Dans la <em>Critique de la faculté de juger</em>, Kant analyse le sentiment du sublime. Face à une manifestation démesurée de la nature (un océan déchaîné, une montagne écrasante), l'homme prend d'abord conscience de sa faiblesse physique et de sa vulnérabilité en tant qu'être naturel. Mais cette même expérience lui révèle en contrepoint une « supériorité » d'un tout autre ordre : sa capacité de juger cette puissance, sa liberté morale et sa destination spirituelle, qui le rendent indépendant de la nature sensible. Le sublime ne réside pas dans l'objet, mais dans l'élévation de l'esprit humain qu'il provoque.
    \nExemple : Se sentir écrasé par une tempête en mer, mais en même temps fier de la résistance de l'esprit humain qui peut la concevoir et l'affronter, illustre ce mouvement du sublime.`
  },
  // Question n°16
  {
    question: "Dans la citation de Chateaubriand (<em>René</em>), comment le narrateur décrit-il le rapport entre le « chant naturel de l'homme » et le bonheur ?",
    answers: [
      "Le chant naturel est triste, « même lorsqu'il exprime le bonheur », car notre cœur est un « instrument incomplet ».",
      "Le chant naturel est toujours joyeux, car il exprime l'élan vital.",
      "Le chant naturel est silencieux, car le vrai bonheur est indicible et ne s'exprime pas."
    ],
    correct: 1,
    explanation: `Chateaubriand formule ici une intuition profonde sur la sensibilité humaine. Il observe que les chants mélancoliques d'un pâtre lui rappellent que le « chant naturel de l'homme est triste, lors même qu'il exprime le bonheur ». La raison qu'il avance est métaphysique : « Notre cœur est un instrument incomplet, une lyre où il manque des cordes ». Cela signifie que la condition humaine est marquée par une insuffisance ontologique, une nostalgie ou un manque constitutif. Même dans la joie, une note de tristesse résonne, car le bonheur terrestre est toujours imparfait et l'âme aspire à un absolu qu'elle ne peut atteindre.
    \nExemple : Cette idée que la mélancolie est la tonalité fondamentale de l'existence humaine sera reprise par tous les romantiques, des <em>Méditations</em> de Lamartine au <em>Spleen</em> baudelairien.`
  },
  // Question n°17
  {
    question: "Dans « Le Lac » de Lamartine, quelle est la requête adressée au temps par les amants ?",
    answers: [
      "De suspendre son vol pour laisser durer les « rapides délices » des beaux jours.",
      "De s'accélérer pour hâter leurs retrouvailles.",
      "De effacer le souvenir des jours heureux pour atténuer la douleur de la séparation."
    ],
    correct: 1,
    explanation: `Le poème « Le Lac » est une méditation lyrique sur la fuite du temps, thème central de la sensibilité romantique. Le poète, se souvenant d'un bonheur amoureux passé au bord d'un lac, invoque le temps personnifié. La supplication célèbre – « Ô temps, suspends ton vol ! » – exprime le désir impossible d'arrêter l'écoulement temporel pour fixer l'instant de bonheur et de plénitude. Les amants demandent aux « heures propices » de suspendre leur cours pour qu'ils puissent « savourer les rapides délices / Des plus beaux de nos jours ». Ce vœu traduit la conscience aiguë et douloureuse de la temporalité, caractéristique de la sensibilité moderne.
    \nExemple : La tentative de photographier ou d'enregistrer un moment précieux est un écho contemporain de ce désir romantique de fixer le temps qui passe.`
  },
  // Question n°18
  {
    question: "Comment Alfred de Musset, dans <em>La Confession d'un enfant du siècle</em>, décrit-il la situation de sa génération entre le passé et l'avenir ?",
    answers: [
      "Comme une génération sacrifiée, errant dans un « chaos » et un « je ne sais quoi de vague et de flottant » entre un passé détruit et un avenir incertain.",
      "Comme une génération chanceuse, héritière des Lumières et promise à un avenir radieux.",
      "Comme une génération responsable, chargée de reconstruire l'ordre ancien sur des bases plus solides."
    ],
    correct: 1,
    explanation: `Musset analyse le « mal du siècle » comme un mal historique. Sa génération, née avec le siècle, est prise en tenaille entre un passé révolu (l'Ancien Régime, l'épopée napoléonienne) et un avenir qui tarde à se dessiner (les espoirs déçus des révolutions). Elle erre dans un présent décrit comme un « chaos », une « mer houleuse et pleine de naufrages », quelque chose d'impalpable (« je ne sais quoi de vague et de flottant ») qui n'est « ni l'un ni l'autre » (passé ou avenir). Ce sentiment de désorientation, de vide historique et de perte de sens est la cause profonde de la mélancolie et du désarroi romantiques.
    \nExemple : Cette description pourrait s'appliquer à d'autres générations « perdues », comme celle qui a vécu l'après-Première Guerre mondiale.`
  },
  // Question n°19
  {
    question: "Quelle mission Victor Hugo assigne-t-il au poète dans l'extrait des <em>Rayons et les ombres</em> ?",
    answers: [
      "D'être un « rêveur sacré », un « homme des utopies » qui « prépare des jours meilleurs » et « fait flamboyer l'avenir ».",
      "D'explorer les abîmes de son moi pour son seul plaisir solitaire.",
      "De divertir la cour et les salons par des vers légers et galants."
    ],
    correct: 1,
    explanation: `Contrairement à une vision repliée du poète romantique, Hugo incarne la figure du poète prophète et guide. Dans ce poème, il définit une mission sociale et politique à la poésie. Le poète n'est pas un simple artisan des mots ; il est « l'homme des utopies », celui qui, « les pieds ici, les yeux ailleurs », anticipe et imagine l'avenir. Comme un prophète, il a pour tâche de « préparer des jours meilleurs » en éclairant les peuples (« il seul a le front éclairé ») et en faisant « flamboyer l'avenir » par sa parole visionnaire. La sensibilité artistique est ici mise au service d'un projet collectif de transformation du monde.
    \nExemple : Hugo lui-même a incarné ce rôle par son engagement politique, ses prises de position et ses poèmes dénonçant la misère ou exaltant le progrès.`
  },
  // Question n°20
  {
    question: "Selon Hegel, cité dans la séance 3, de quelle double manière l'homme acquiert-il la conscience de lui-même ?",
    answers: [
      "Théoriquement, en se représentant intérieurement, et pratiquement, en transformant le monde extérieur pour y laisser son cachet.",
      "Par la souffrance et par le plaisir, qui sont les deux pôles de l'expérience sensible.",
      "Par l'imitation des autres dans l'enfance, puis par la rébellion contre eux à l'âge adulte."
    ],
    correct: 1,
    explanation: `Dans son <em>Esthétique</em>, Hegel propose une dialectique de la conscience de soi. L'homme ne se découvre pas uniquement par introspection. Il y a deux voies complémentaires : 1) La voie théorique : en prenant conscience de ses mouvements intérieurs, de ses sentiments, en se représentant à lui-même par la pensée. 2) La voie pratique : en agissant sur le monde extérieur, en le transformant, en y imprimant sa marque personnelle. C'est en voyant son action objectivée dans le monde (« son œuvre ») que l'homme se reconnaît et prend conscience de ses propres capacités et de son identité. L'art est le paradigme de cette objectivation de soi.
    \nExemple : Un enfant qui construit un château de sable et contemple son œuvre avec fierté fait l'expérience pratique de sa capacité créatrice et de son moi agissant.`
  },
  // Question n°21
  {
    question: "Que signifie, selon Bergson, « l'intensité » d'un état d'âme comme un désir profond ?",
    answers: [
      "Elle correspond au nombre d'états psychiques simples qu'il a réussi à « pénétrer » et à « teindre de sa couleur ».",
      "Elle se mesure à la force physique des réactions corporelles qu'il provoque.",
      "Elle est proportionnelle à la rareté ou à la valeur de l'objet désiré."
    ],
    correct: 1,
    explanation: `Dans <em>Essai sur les données immédiates de la conscience</em>, Bergson critique les conceptions spatialisantes et quantitatives des états psychiques. L'intensité d'une émotion ou d'un sentiment (comme un désir qui devient passion) n'est pas une grandeur mesurable. Elle se définit qualitativement par son pouvoir de pénétration et d'organisation de la vie psychique. Un désir intense est un désir qui a cessé d'être « isolé » pour « pénétrer un plus grand nombre d'éléments psychiques », les « teignant pour ainsi dire de sa propre couleur » jusqu'à changer « le point de vue sur l'ensemble des choses ». L'intensité est donc une qualité expansive et transformatrice.
    \nExemple : Une passion amoureuse qui, de simple attirance, finit par colorer tous les souvenirs, projets et perceptions d'une personne, modifiant son rapport au monde entier.`
  },
  // Question n°22
  {
    question: "Pourquoi, selon Bergson, une personne non initiée à la musique classique a-t-elle du mal à apprécier une symphonie de Beethoven ?",
    answers: [
      "Parce que son attention ne peut se fixer, la « distance » étant trop grande entre ce qu'elle perçoit et les souvenirs musicaux qu'elle possède.",
      "Parce que sa culture musicale est trop pauvre pour comprendre les harmonies complexes.",
      "Parce que son ouïe n'est pas physiquement entraînée à distinguer les sons graves des aigus."
    ],
    correct: 1,
    explanation: `Bergson explique l'appréciation esthétique par un mécanisme d'attention fondé sur la mémoire. Faire attention, ce n'est pas simplement regarder ou écouter ; c'est établir une « coalescence », une fusion entre la perception actuelle et des souvenirs antérieurs. Si l'œuvre est trop nouvelle, trop éloignée des schémas familiers (les « airs de danse » dans l'exemple), la jonction ne se fait pas. L'attention, privée de points de repère, ne peut pas se fixer véritablement : on croit écouter, mais on ne « distingue pas », donc on ne « comprend pas » et on n'apprécie pas. L'expérience sensible nécessite un apprentissage qui crée des souvenirs mobilisables.
    \nExemple : Un amateur de jazz peut avoir du mal à apprécier du métal extrême, et vice-versa, car leurs cadres de référence musicaux sont trop éloignés pour permettre une coalescence immédiate.`
  },
  // Question n°23
  {
    question: "Que signifie la formule de Pascal « L'homme passe l'homme », citée dans le contexte de l'expression spirituelle de la sensibilité ?",
    answers: [
      "L'homme est capable de se transcender lui-même, d'aller au-delà de sa condition individuelle et naturelle.",
      "Chaque génération d'hommes dépasse la précédente en connaissances et en pouvoir.",
      "L'homme est toujours en compétition avec ses semblables pour les dépasser."
    ],
    correct: 1,
    explanation: `Cette pensée de Pascal résume le paradoxe de la condition humaine. L'homme a une nature finie, physique, limitée. Pourtant, il est aussi capable d'actes (moraux, spirituels, intellectuels, artistiques) qui excèdent cette nature, qui la « dépassent ». La sensibilité spirituelle est précisément cette capacité à éprouver et à viser quelque chose qui transcende l'individualité sensible : l'infini, l'universel, l'absolu, l'humanité dans son ensemble. L'art, la religion, la morale sont des expressions de cette capacité de l'homme à se « passer » lui-même.
    \nExemple : Le sacrifice de sa vie pour sauver un inconnu est un acte où « l'homme passe l'homme », où la valeur spirituelle et morale l'emporte sur l'instinct de conservation individuel.`
  },
  // Question n°24
  {
    question: "Pourquoi Bergson affirme-t-il, dans <em>L'Énergie spirituelle</em>, qu'une connaissance parfaite du cerveau ne permettrait pas de déduire avec certitude l'état d'âme correspondant ?",
    answers: [
      "Parce qu'à un même état cérébral pourraient correspondre une multitude d'états d'âme différents, également possibles.",
      "Parce que les états d'âme sont immatériels et échappent par nature à toute investigation physique.",
      "Parce que le cerveau est trop complexe et que la science n'atteindra jamais cette perfection."
    ],
    correct: 1,
    explanation: `Bergson s'oppose ici à un réductionnisme matérialiste strict. Il admet qu'un état mental donné (une émotion, une pensée) s'accompagne d'un état cérébral déterminé, et que la science pourrait un jour établir cette corrélation. Mais il soutient que la relation inverse n'est pas vraie : connaissant l'état exact du cerveau, on ne pourrait pas déduire avec certitude l'état d'âme, car celui-ci possède une dimension qualitative et vécue irréductible. La conscience a une autonomie et une richesse qui excèdent son support matériel. La métaphore théâtrale est claire : on ne peut pas deviner la pièce (l'état d'âme) en observant seulement les gestes des acteurs (les états cérébraux).
    \nExemple : Un même sourire (mouvement musculaire) peut exprimer la joie, la gêne, l'ironie ou la compassion ; le geste ne détermine pas le sentiment.`
  },
  // Question n°25
  {
    question: "Dans <em>La Nausée</em> de Sartre, que découvre soudainement le personnage Roquentin en contemplant la racine du marronnier ?",
    answers: [
      "L'existence brute et contingente des choses, indépendamment des mots et des significations humaines.",
      "Le sens caché et symbolique de toute chose.",
      "La beauté harmonieuse et rassurante de la nature."
    ],
    correct: 1,
    explanation: `L'expérience décrite par Sartre est une révélation existentielle. Roquentin subit une « illumination » qui lui fait perdre les repères habituels. Les mots, les « modes d'emploi », les significations utilitaires ou culturelles dont nous recouvrons les choses s'évanouissent. Il se trouve face à la racine dans sa pure « existence » brute, « noueuse », « entièrement brute ». La chose n'est plus un objet défini par son usage (« racine »), mais une présence opaque, absurde et écrasante. Cette expérience de la contingence (le fait que les choses soient là, sans raison) est à l'origine de la « nausée », sentiment de dégoût et d'angoisse face au monde dépouillé de son sens humain.
    \nExemple : Voir un objet familier (une chaise, un caillou) comme une pure présence étrangère et inexplicable est une expérience proche de celle décrite par Sartre.`
  },
  // Question n°26
  {
    question: "Dans les définitions d'Alain, comment se situe le « sentiment » par rapport à l'« émotion » et à la « passion » ?",
    answers: [
      "Il est « l'état de passion surmontée », formé par « une reprise de volonté ».",
      "Il est le degré le plus bas, l'émotion étant le plus élevé.",
      "Il en est la source première et inconsciente."
    ],
    correct: 1,
    explanation: `Alain propose une hiérarchie éthique des affections. 1) L'émotion est le degré le plus bas : un mouvement corporel involontaire et soudain (trembler, pleurer). 2) La passion est le degré intermédiaire : c'est une émotion réfléchie, désirée ou redoutée, qui s'installe et asservit (« la lâcheté est une passion »). 3) Le sentiment est le degré le plus haut, « le plus haut degré de l'affection ». Il naît d'un effort volontaire pour surmonter et dominer la passion. Il est une « reprise de volonté », comme « l'amour [qui] jure d'aimer ». Le sentiment conserve la matière de l'émotion (la peur dans le courage) mais la soumet à un choix moral.
    \nExemple : La peur (émotion) peut devenir lâcheté (passion) si on s'y abandonne, ou courage (sentiment) si on la surmonte par un acte de volonté.`
  },
  // Question n°27
  {
    question: "Selon Merleau-Ponty dans « Le doute de Cézanne », en quoi la peinture de Cézanne se distingue-t-elle de celle des Impressionnistes ?",
    answers: [
      "Elle veut restituer la structure permanente des choses, et pas seulement leur « enveloppe lumineuse » instantanée.",
      "Elle rejette le travail sur nature pour un travail purement d'atelier et d'imagination.",
      "Elle cherche à projeter des rêves et des sentiments, non à étudier les apparences."
    ],
    correct: 1,
    explanation: `Merleau-Ponty analyse l'évolution de Cézanne. Après une première phase « rêvée », Cézanne adopte des Impressionnistes le travail sur nature et l'étude des apparences. Mais il s'en sépare sur un point essentiel. L'Impressionnisme veut saisir « la manière même dont les objets frappent notre vue » à un instant donné, leur « enveloppe lumineuse » changeante. Cézanne, lui, cherche à travers les variations de la lumière et de la couleur à retrouver la forme solide, la géométrie secrète, « la montagne dans sa lourdeur ». Son art exprime une sensibilité qui n'est pas seulement réceptive à l'instant, mais qui cherche à saisir l'essence durable des choses perçues.
    \nExemple : Alors que Monet peint une série de Cathédrales de Rouen à différentes heures, Cézanne cherche dans ses nombreuses <em>Montagnes Sainte-Victoire</em> la structure géologique permanente du paysage.`
  },
  // Question n°28
  {
    question: "Selon Nietzsche dans <em>Par-delà le bien et le mal</em>, sur quoi repose fondamentalement la capacité de se comprendre mutuellement par le langage ?",
    answers: [
      "Sur le fait d'avoir « en commun certaines expériences » intérieures fréquentes et similaires.",
      "Sur l'emploi de mots qui désignent des idées abstraites et universelles.",
      "Sur la maîtrise parfaite de la grammaire et du vocabulaire."
    ],
    correct: 1,
    explanation: `Nietzsche propose une vision pragmatique et anti-idéaliste du langage. Se comprendre ne se réduit pas à utiliser les mêmes mots. Les mots sont d'abord des « signes imagés » pour des « sensations » et des « expériences intérieures ». Pour que la communication fonctionne, il faut que les interlocuteurs aient vécu des expériences sensibles analogues, que les mêmes mots « éveillent en [eux] d'autres souhaits et d'autres craintes » similaires. Cette communauté d'expériences se forge par une vie commune (« même climat », « mêmes besoins », « même travail »). Le langage est ainsi le produit d'une histoire partagée, et non l'expression d'une raison universelle.
    \nExemple : Le mot « neige » n'évoque pas les mêmes sensations et expériences pour un Inuit et pour un habitant des tropiques, ce qui peut créer un malentendu au-delà du sens conceptuel commun.`
  },
  // Question n°29
  {
    question: "Contre quelle opinion Rousseau s'élève-t-il dans l'<em>Essai sur l'origine des langues</em> concernant l'invention de la parole ?",
    answers: [
      "Contre l'idée que les hommes ont inventé la parole pour exprimer leurs besoins matériels.",
      "Contre l'idée que le langage a été donné par Dieu aux premiers hommes.",
      "Contre l'idée que le langage est né de l'imitation des sons de la nature."
    ],
    correct: 1,
    explanation: `Rousseau s'oppose à une vision utilitaire et individualiste des origines du langage. Selon lui, si le langage n'avait servi qu'à exprimer des besoins physiques (faim, soif), il aurait éloigné les hommes (chacun cherchant sa propre nourriture) au lieu de les rapprocher. Au contraire, Rousseau affirme que l'origine des langues est due aux « passions » (« besoins moraux ») : l'amour, la haine, la pitié, la colère. Ces passions, qui rapprochent les hommes, leur auraient « arraché les premières voix ». Le langage serait donc né de l'expression émotionnelle et sociale, et non de la nécessité utilitaire.
    \nExemple : Un cri de détresse ou une déclaration d'amour sont, pour Rousseau, des formes de parole plus originaires que la demande « donne-moi à manger ».`
  },
  // Question n°30
  {
    question: "Dans l'approche naturaliste, quelle est la thèse originale de William James sur le lien entre l'émotion et les modifications corporelles ?",
    answers: [
      "Nous avons peur parce que nous tremblons. (La physiologie cause la conscience de l'émotion)",
      "Nous tremblons parce que nous avons peur. (L'émotion cause la physiologie)",
      "L'émotion et les modifications corporelles sont deux phénomènes parallèles et indépendants."
    ],
    correct: 1,
    explanation: `William James renverse la conception intuitive de l'émotion. Le sens commun pense que la perception d'un danger (un ours) provoque l'émotion de peur, qui elle-même cause des réactions physiques (tremblements, fuite). James inverse cet ordre : la perception provoque *directement* des changements corporels (par des voies réflexes). C'est la conscience *rétrospective* de ces changements (je sens que je tremble, que mon cœur bat) qui constitue l'émotion elle-même. L'émotion n'est donc pas la cause, mais la conséquence de la physiologie. « Je tremble donc j'ai peur », et non l'inverse.
    \nExemple : Selon James, si on pouvait supprimer tous les symptômes physiques de la peur (tremblement, pâleur, etc.), il ne resterait plus qu'une perception froide et intellectuelle du danger, sans l'émotion de peur.`
  },
  // Question n°31
  {
    question: "Quelle expérience de Duchenne de Boulogne suggère une approche matérialiste des expressions émotionnelles ?",
    answers: [
      "Il a provoqué, par stimulation électrique des muscles du visage, des expressions ressemblant à des passions sans que le sujet n'éprouve l'émotion correspondante.",
      "Il a mesuré la vitesse de propagation des influx nerveux liés à la joie.",
      "Il a cartographié les zones cérébrales activées lors de l'écoute de musique triste."
    ],
    correct: 1,
    explanation: `Duchenne de Boulogne a mené des expériences pionnières en électrophysiologie. En appliquant des décharges électriques sur les muscles faciaux de sujets, il parvenait à provoquer des contractions produisant des expressions faciales caractéristiques (un sourire, un air de colère). L'aspect crucial est que ces expressions étaient produites mécaniquement, sans que le sujet ne ressente nécessairement l'émotion correspondante. Cette expérience suggère que l'expression corporelle de l'émotion peut être dissociée du vécu subjectif, et qu'elle relève d'un mécanisme physiologique qui peut être déclenché artificiellement.
    \nExemple : Un acteur qui simule la colère en contractant certains muscles de son visage utilise un mécanisme similaire, bien que volontaire, à celui mis en lumière par Duchenne.`
  },
  // Question n°32
  {
    question: "Selon la perspective constructiviste défendue par Merleau-Ponty, pourquoi la mimique de la colère n'est-elle pas la même chez un Japonais et un Occidental ?",
    answers: [
      "Parce que la manière d'accueillir et de vivre la situation (la colère) elle-même est différente, façonnée par la culture.",
      "Parce que leur organisation anatomique et leur système nerveux sont fondamentalement différents.",
      "Parce que les Japonais ont une maîtrise supérieure de la dissimulation de leurs émotions."
    ],
    correct: 1,
    explanation: `Merleau-Ponty s'oppose à l'idée d'une nature humaine universelle et fixe, y compris dans l'expression des émotions. Il souligne que les gestes et les mimiques ne sont pas le simple reflet mécanique d'un état intérieur prédéfini. Ils sont déjà une manière culturellement codée de « vivre » la situation émotionnelle. Si un Japonais en colère sourit et un Occidental rougit et frappe du pied, ce n'est pas parce qu'ils cachent différemment la même émotion, mais parce que la colère elle-même est vécue, comprise et incarnée différemment dans les deux cultures. L'émotion est une « institution » humaine, à la fois naturelle (elle engage le corps) et fabriquée (elle est modelée par la culture).
    \nExemple : Le rite du sourire de politesse dans certaines cultures asiatiques, même en situation de contrariété, illustre cette incorporation d'un code émotionnel différent.`
  },
  // Question n°33
  {
    question: "Quel concept émotionnel danois désigne un sentiment de bien-être lié à la convivialité et au confort ?",
    answers: [
      "Hygge.",
      "Saudade.",
      "Sisu (endurance)."
    ],
    correct: 1,
    explanation: `Le « hygge » (prononcé « houga ») est un concept émotionnel central dans la culture danoise, souvent cité comme un facteur de leur bonheur national. Il n'a pas d'équivalent exact en français mais renvoie à une atmosphère ou un sentiment de confort chaleureux, de convivialité simple et apaisante. Il est associé à des moments de partage avec des proches, dans un cadre rassurant (une maison bien chauffée, des bougies, un bon repas), surtout pendant les longs hivers. Ce concept montre comment une culture invente et valorise des tonalités affectives particulières, façonnant la sensibilité de ses membres.
    \nExemple : Une soirée entre amis à discuter autour d'un feu de cheminée, avec des boissons chaudes, est souvent décrite comme un moment « hygge ».`
  },
  // Question n°34
  {
    question: "Selon l'analyse d'Eva Illouz mentionnée en conclusion, quel serait l'effet combiné de la culture de la consommation et de la technologie sur les relations amoureuses contemporaines ?",
    answers: [
      "Elles les transforment en favorisant des « non-relations » (ghosting, relations sans engagement) et un désarroi.",
      "Elles les rendent plus rationnelles et moins passionnelles, éliminant la souffrance amoureuse.",
      "Elles les renforcent en facilitant les rencontres et la communication."
    ],
    correct: 1,
    explanation: `La sociologue Eva Illouz analyse une mutation des relations intimes dans <em>La fin de l'amour</em>. Elle soutient que les logiques de la consommation (choix, échange, satisfaction immédiate, remplaçabilité) et les technologies de communication (applications de rencontre, réseaux sociaux) se combinent pour transformer profondément le lien amoureux. Cela se traduit par l'émergence de pratiques comme le « ghosting » (rupture par disparition soudaine), le « casual sex » (relations sexuelles dénuées d'engagement), ou une difficulté à construire des attachements durables. La sensibilité amoureuse serait ainsi mise à mal par des structures sociales qui privilégient l'option et l'instantanéité sur l'engagement et la durée.
    \nExemple : Le phénomène du « zapping » sentimental, où l'on passe rapidement d'un partenaire à l'autre via des applications, illustre cette tendance analysée par Illouz.`
  },
  // Question n°35
  {
    question: "Entre le « vitalisme » de Schopenhauer et le « romantisme », quelle approche semble finalement prévaloir dans la compréhension du sentiment amoureux ?",
    answers: [
      "Ces deux approches sont deux interprétations concurrentes et toujours actuelles.",
      "Le vitalisme l'emporte en réduisant l'amour à une pulsion biologique aveugle.",
      "Le romantisme l'emporte en redécouvrant la dimension subjective et spirituelle de la sensibilité amoureuse."
    ],
    correct: 1,
    explanation: `Le vitalisme (Schopenhauer, et plus tard Freud) « désenchante » le sentiment en le ramenant à des forces inconscientes (pulsion sexuelle, volonté de vie). Le romantisme « réenchante » la sensibilité en en faisant l'expression authentique du moi, une quête spirituelle et esthétique. La conclusion ne privilégie pas l'une sur l'autre ; elle montre que le débat entre une explication naturaliste et une valorisation subjective de l'amour reste ouvert et structurant pour penser notre sensibilité. Ces deux interprétations puissantes sont en tension permanente.
    \nExemple : Aujourd'hui encore, on peut expliquer une attirance par des critères biologiques (phéromones) ou la vivre comme une rencontre unique et inexplicable des âmes, montrant la persistance de ces deux grilles de lecture.`
  },
  // Question n°36
  {
    question: "Que signifie étymologiquement le terme « sensibilité », tel qu'il est sous-entendu dans toute la séquence ?",
    answers: [
      "La faculté de sentir, d'éprouver des sensations et d'être affecté par le monde extérieur ou intérieur.",
      "La capacité à produire du sens à partir des sensations.",
      "La propriété d'un instrument de mesure à détecter de faibles variations."
    ],
    correct: 1,
    explanation: `L'usage du mot « sensibilité » renvoie à la racine latine <em>sentire</em> (sentir, percevoir). La sensibilité désigne notre capacité fondamentale à recevoir des impressions par les sens, à être affecté physiquement et émotionnellement, que cette affection vienne du monde extérieur (une douce mélodie, un paysage) ou de notre intériorité (un souvenir, une pensée). Elle est le socle de l'expérience vécue, antérieur à la raison raisonnante. Toute la séquence explore les formes, les expressions et les conflits de cette faculté.
    \nExemple : Se sentir ému par un film, avoir mal à une blessure, ou être nostalgique en repensant à son enfance sont toutes des manifestations de la sensibilité.`
  },
  // Question n°37
  {
    question: "Quelle est la conséquence principale, selon Platon, si le cocher (la raison) ne parvient pas à maîtriser le cheval noir (les désirs désordonnés) ?",
    answers: [
      "L'âme reste attachée au monde sensible et ne peut s'élever vers la contemplation des Idées.",
      "Le corps devient malade, car les humeurs ne sont plus équilibrées.",
      "L'individu devient un grand artiste, car la créativité naît du désordre."
    ],
    correct: 1,
    explanation: `Dans l'allégorie de l'attelage, l'enjeu est métaphysique et éthique. Les ailes de l'attelage symbolisent la capacité de l'âme à s'élever vers le monde intelligible, le monde des Idées éternelles (le Vrai, le Beau, le Bien). Si le cheval noir, symbolisant la part désirante et charnelle, n'est pas dominé par la raison du cocher, il entraîne l'attelage vers le bas, vers le monde sensible et changeant. L'âme reste alors prisonnière des illusions des sens et des passions, incapable d'accéder à la connaissance vraie et à la sagesse. La maîtrise de la sensibilité par la raison est donc la condition de l'accès à une vie philosophique.
    \nExemple : Pour Platon, l'amour d'un beau corps (sensible) doit être une étape pour s'élever vers l'amour de la Beauté en soi (intelligible) ; rester attaché au seul désir physique empêche cette ascension.`
  },
  // Question n°38
  {
    question: "Quelle image Rousseau utilise-t-il pour décrire l'effet des vagues du lac sur son esprit dans les <em>Rêveries</em> ?",
    answers: [
      "Un bercement qui l'attache sans l'effort actif de son âme.",
      "Un marteau qui frappe sans relâche.",
      "Un miroir qui réfléchit ses pensées les plus sombres."
    ],
    correct: 1,
    explanation: `Rousseau insiste sur le caractère passif et réceptif de son état pendant la rêverie. Le mouvement régulier des vagues et leur bruit ont un effet hypnotique et apaisant. Ils « me berçaient », écrit-il. Plus encore, cet effet se produit « sans aucun concours actif de mon âme ». La sensibilité est ici présentée comme une ouverture totale à l'influence du monde extérieur, une réceptivité qui suspend l'activité volontaire et pensante. La nature agit directement sur le corps et l'âme, produisant un état de bonheur simple et immédiat. Cette description fonde une esthétique où le beau n'est pas dans l'objet, mais dans l'harmonie entre l'état de l'âme et le spectacle naturel.
    \nExemple : Le sentiment de paix que l'on peut éprouver en écoutant le bruit régulier des vagues ou de la pluie est une expérience proche de celle décrite par Rousseau.`
  },
  // Question n°39
  {
    question: "Quelle est la caractéristique de l'angoisse, évoquée dans la séance 4, par rapport à la peur ?",
    answers: [
      "L'angoisse est une peur sans objet déterminé.",
      "L'angoisse a un objet précis, la peur est diffuse.",
      "L'angoisse est une peur socialement construite, la peur est une réaction naturelle."
    ],
    correct: 1,
    explanation: `La distinction entre peur et angoisse (ou anxiété) est conceptuellement importante. La peur est une émotion qui a un objet identifiable : on a peur *de* quelque chose (un animal, un danger, un examen). L'angoisse, en revanche, est un état de malaise diffus, d'appréhension, qui n'est pas lié à un danger objectif et précis. Elle est souvent décrite comme une « peur sans objet ». Cet affect peut être provoqué par la confrontation à la liberté, à la mort, ou à l'absurdité de l'existence, comme l'illustre la « nausée » sartrienne. Elle relève plus d'un sentiment existentiel que d'une réaction à une menace concrète.
    \nExemple : Le sentiment de vague inquiétude et d'oppression que l'on peut ressentir sans raison apparente, par opposition à la peur soudaine causée par un bruit violent.`
  },
  // Question n°40
  {
    question: "Dans la théorie constructiviste des émotions, que signifie l'affirmation selon laquelle les émotions seraient « inventées comme les mots » ?",
    answers: [
      "Qu'elles sont des constructions sociales et culturelles qui donnent forme et nom à des sensations corporelles brutes.",
      "Qu'elles sont arbitraires et peuvent être choisies librement par les individus.",
      "Qu'elles n'existent que dans le langage et disparaissent si on ne les nomme pas."
    ],
    correct: 1,
    explanation: `Cette formule de Merleau-Ponty résume l'approche constructiviste. Elle ne nie pas la réalité des sensations corporelles (tremblements, accélération du cœur). Mais elle affirme que ce que nous vivons comme une « émotion » distincte (la colère, la honte) est le résultat d'un travail d'interprétation et de catégorisation culturel. Une même excitation physiologique peut être labellisée et vécue différemment selon le contexte culturel. Les émotions, comme les mots, sont des « institutions » humaines : elles ont une base naturelle (le corps), mais leur forme et leur signification sont modelées par la vie en société.
    \nExemple : Le sentiment du « liget » chez les Ilongots (énergie agressive) catégorise et valorise des sensations qui, dans une autre culture, pourraient être étiquetées comme de la « colère » ou de la « frustration », avec des connotations différentes.`
  },
  // Question n°41
  {
    question: "Quelle est la thèse défendue par Lisa Feldman Barrett concernant la création des émotions ?",
    answers: [
      "Nous pouvons créer nos propres émotions en appliquant des concepts culturels à nos perceptions internes.",
      "Les émotions sont entièrement déterminées par les gènes et universelles.",
      "Les émotions sont des illusions qu'il faut apprendre à dépasser par la raison."
    ],
    correct: 1,
    explanation: `Lisa Feldman Barrett est une neuroscientifique contemporaine représentative du constructivisme social. Sa théorie, dite de la « construction conceptuelle », soutient que le cerveau utilise des concepts culturellement appris pour donner un sens aux sensations corporelles internes et aux stimuli externes. Ainsi, l'émotion n'est pas un programme cérébral prédéterminé qui se « déclenche », mais une construction en temps réel. Cela ouvre la possibilité de créer de nouvelles catégories émotionnelles (« chiplessness ») si un concept culturel émerge pour nommer et structurer une expérience sensible particulière.
    \nExemple : Le sentiment de « FOMO » (Fear Of Missing Out) est une émotion contemporaine née de l'ère des réseaux sociaux, qui catégorise une anxiété spécifique liée à la comparaison sociale virtuelle.`
  },
  // Question n°42
  {
    question: "Quelle affirmation résume le mieux le point de vue du romantisme sur le rapport entre l'individu et la Nature ?",
    answers: [
      "La Nature est le miroir des états d'âme de l'individu et le lieu où s'exprime sa sensibilité la plus profonde.",
      "La Nature est un obstacle à vaincre par la technique et la raison humaine.",
      "La Nature est un décor indifférent, un simple cadre pour les actions humaines."
    ],
    correct: 1,
    explanation: `Le romantisme opère un renversement complet dans le rapport à la nature. Celle-ci n'est plus perçue comme un mécanisme froid (comme chez les scientifiques du XVIIIe) ou comme un jardin à ordonner (comme dans le classicisme). Elle devient une entité vivante, expressive, en correspondance avec l'âme humaine. Le paysage extérieur reflète et magnifie le paysage intérieur. La tempête peut symboliser une passion déchaînée, le lac paisible une mélancolie sereine, l'océan infini l'aspiration de l'âme. La sensibilité romantique se projette et se reconnaît dans la nature.
    \nExemple : Dans le tableau « Le Voyageur contemplant une mer de nuages » de Caspar David Friedrich, le personnage solitaire, de dos, semble absorbé par un paysage grandiose qui est le reflet visible de son monde intérieur tourmenté et sublime.`
  },
  // Question n°43
  {
    question: "Que recherche fondamentalement le héros romantique à travers l'expression de sa souffrance et de sa mélancolie ?",
    answers: [
      "Un sens à son existence et une forme d'absolu que le monde réel lui refuse.",
      "La pitié des autres et une position sociale de victime.",
      "L'oubli de soi dans la dissipation et les plaisirs faciles."
    ],
    correct: 1,
    explanation: `La mélancolie romantique n'est pas un simple mal-être psychologique ; elle a une dimension métaphysique. Le héros romantique souffre d'un décalage entre ses aspirations infinies (vers l'absolu, l'idéal, l'amour parfait) et la réalité finie, médiocre et désenchantée du monde. Son désespoir est le signe de la grandeur de son âme, qui refuse les compromis. Exprimer cette souffrance (dans l'art, la poésie, le comportement) est une manière de témoigner de cette quête d'absolu et de donner une forme, une dignité, à son existence en lui conférant une intensité dramatique. La sensibilité exacerbée devient ainsi une voie d'accès à une vérité supérieure sur soi et le monde.
    \nExemple : Le Werther de Goethe se suicide moins par désespoir amoureux que parce que la réalité ne peut accueillir la perfection et l'intensité de son sentiment, qu'il préserve ainsi dans la mort.`
  },
  // Question n°44
  {
    question: "En quoi l'exemple de Pierre Scerri (12 ans pour construire une voiture miniature) illustre-t-il la conception kantienne de la passion ?",
    answers: [
      "Il montre que la passion est un attachement durable et enraciné qui occupe toute la vie d'un homme.",
      "Il montre que la passion est une émotion noble qui mène à la création de beauté.",
      "Il montre que la passion est une force destructrice qui isole l'individu de la société."
    ],
    correct: 1,
    explanation: `L'exemple contemporain de Pierre Scerri est donné comme une illustration moderne de la passion au sens kantien. Cet homme a consacré douze années de sa vie, une énergie considérable et une patience infinie à un projet unique et apparemment démesuré (construire une voiture à l'échelle 1/3). Cela correspond parfaitement à la définition de la passion chez Kant : une inclination constante, réfléchie, qui s'installe durablement et oriente toute l'existence vers un seul objet. La passion n'est pas un feu de paille (émotion), mais une combustion lente et continue. Elle illustre la « servitude » volontaire et l'« enchantement » dont parle Kant, où l'individu trouve son « contentement » dans cette occupation exclusive.
    \nExemple : Un collectionneur obsessionnel, un chercheur absorbé par un problème unique, vivent une forme de passion similaire.`
  },
  // Question n°45
  {
    question: "Que permet de comprendre l'expérience de « l'hallucination », brièvement mentionnée dans les remarques introductives ?",
    answers: [
      "Que la sensibilité peut être une « perception sans objet », montrant que l'esprit produit ses propres contenus sensibles.",
      "Que la perception est toujours infaillible et donne un accès direct à la réalité.",
      "Que la sensibilité est fondamentalement trompeuse et doit être corrigée par la raison scientifique."
    ],
    correct: 1,
    explanation: `L'exemple de l'hallucination est un cas limite qui éclaire la nature de la sensibilité. Une hallucination est une perception vive (on voit, on entend) sans qu'il n'y ait d'objet extérieur correspondant. Cela démontre que la sensibilité n'est pas une simple réception passive des données du monde, mais une activité du sujet. Le cerveau et l'esprit peuvent générer des contenus sensoriels de toutes pièces. Cette capacité (pathologique dans l'hallucination, mais normale dans l'imagination ou le rêve) montre que la frontière entre le perçu et le conçu, l'extérieur et l'intérieur, est poreuse. La sensibilité est donc un phénomène complexe où se mêlent stimulation externe et production interne.
    \nExemple : Le rêve est une expérience hallucinatoire normale où la sensibilité est entièrement génée par le cerveau en l'absence de stimuli externes.`
  },
  // Question n°46
  {
    question: "Pourquoi Aristote a-t-il « spatialisé » les sens et les a-t-il organisés en deux groupes ?",
    answers: [
      "Pour distinguer les sens de la distance (vue, ouïe) des sens du contact (toucher, goût), l'odorat étant intermédiaire.",
      "Pour montrer la supériorité des sens nobles (vue, ouïe) sur les sens vulgaires (toucher, goût).",
      "Pour faire correspondre chaque sens à un des cinq éléments fondamentaux de la nature."
    ],
    correct: 1,
    explanation: `Aristote, dans son traité <em>De l'âme</em>, propose une classification des sens basée sur le média nécessaire à leur fonctionnement. Les sens de la distance – la vue et l'ouïe – peuvent percevoir des objets éloignés, sans contact physique. Les sens du contact – le toucher et le goût – nécessitent un contact immédiat avec l'objet. L'odorat occupe une position intermédiaire, pouvant percevoir à distance, mais souvent lié à des effluves qui proviennent d'un corps. Cette spatialisation n'est pas seulement descriptive ; elle has une portée philosophique. Les sens de la distance, permettant une certaine objectivité et distance, sont souvent associés à la connaissance théorique, tandis que les sens du contact sont liés à la jouissance immédiate et au plaisir corporel.
    \nExemple : On « contemple » un tableau (vue, distance), mais on « déguste » un plat (goût, contact).`
  },
  // Question n°47
  {
    question: "Quel est le « dysfonctionnement » associé à la thermoception, le sens de la température ?",
    answers: [
      "L'incapacité à doser la température de l'eau sous la douche.",
      "Le mal de mer, dû à un conflit avec le sens de la vue.",
      "L'impossibilité de toucher le bout de son nez les yeux fermés."
    ],
    correct: 1,
    explanation: `La thermoception est notre capacité à percevoir la chaleur et le froid. Comme les autres sens, elle peut présenter des dysfonctionnements. L'exemple est l'incapacité de certaines personnes à régler correctement la température de l'eau sous la douche. Elles ne parviennent pas à percevoir avec justesse si l'eau est trop chaude ou trop froide, et peuvent se brûler ou se laver à l'eau glacée sans s'en rendre compte. Ce trouble, qui peut être lié à des lésions nerveuses, montre que la perception de la température n'est pas un simple fait brut, mais une capacité sensorielle fine qui peut être altérée.
    \nExemple : Les personnes atteintes de certaines neuropathies diabétiques perdent la sensibilité thermique (et douloureuse) dans les pieds, ce qui les expose à des brûlures sans qu'elles ne s'en aperçoivent.`
  },
  // Question n°48
  {
    question: "Pourquoi le vocabulaire pour décrire les odeurs est-il généralement plus pauvre que celui pour décrire les choses vues ?",
    answers: [
      "Parce que, dans notre culture, la vue est valorisée comme sens de la connaissance (« théorie »), tandis que l'odorat est associé à l'animalité et à la sensualité.",
      "Parce que l'odorat est un sens moins développé et moins important que la vue dans l'évolution humaine.",
      "Parce que les odeurs sont par nature indescriptibles et ineffables."
    ],
    correct: 1,
    explanation: `On souligne une inégalité culturelle dans le traitement des sens. En Occident, depuis l'Antiquité grecque (Platon, Aristote), la vue est considérée comme le sens le plus noble, car il permet la contemplation désintéressée (<em>theôria</em>) et la connaissance objective à distance. L'odorat, en revanche, est souvent associé au corps, aux plaisirs animaux, à la sensualité, voire à la putréfaction et au péché (chez certains auteurs chrétiens comme Lactance). Cette hiérarchie culturelle se reflète dans le langage : nous avons une riche terminologie pour les couleurs, les formes, les lumières, mais peu de mots spécifiques pour les odeurs, que nous décrivons souvent par analogie (« ça sent le brûlé », « une odeur florale »).
    \nExemple : Le métier de « nez » en parfumerie consiste justement à développer un vocabulaire technique et une finesse de perception exceptionnels pour pallier cette pauvreté linguistique générale.`
  },
  // Question n°49
  {
    question: "Que signifie l'expression « se mettre dans la peau de quelqu'un », analysée dans la partie sur la peau et l'identité ?",
    answers: [
      "Comprendre son point de vue et ses sentiments par un effort d'empathie et d'imagination.",
      "Prendre l'apparence physique de cette personne par un déguisement.",
      "Lui voler son identité et sa place dans la société."
    ],
    correct: 1,
    explanation: `Cette expression idiomatique est riche de sens. Elle montre à quel point, dans notre imaginaire, l'identité d'une personne est associée à son enveloppe corporelle, à sa « peau ». « Se mettre dans la peau de » signifie tenter de sortir de sa propre subjectivité pour accéder à celle d'autrui, adopter son cadre de référence, comprendre ses émotions et ses motivations. C'est une métaphore de l'empathie. Elle révèle aussi la difficulté de cet exercice : il s'agit d'un « mettre dans », comme si l'on endossait un vêtement étranger, suggérant que l'identité de l'autre reste toujours en partie inaccessible, une peau qu'on ne peut jamais totalement faire sienne.
    \nExemple : Un acteur qui prépare un rôle cherche à « se mettre dans la peau » de son personnage pour incarner de manière crédible ses émotions et ses gestes.`
  },
  // Question n°50
  {
    question: "Comment définir le « sentiment » par opposition à l'« émotion », dans le cadre général de la sensibilité ?",
    answers: [
      "Le sentiment est une émotion durable, réfléchie, qui s'inscrit dans la durée et implique souvent une dimension morale ou esthétique.",
      "L'émotion est physique, le sentiment est purement intellectuel.",
      "L'émotion est vraie, le sentiment est faux ou illusoire."
    ],
    correct: 1,
    explanation: `Bien que les termes soient parfois utilisés de manière interchangeable dans le langage courant, on peut les distinguer. L'émotion est généralement conçue comme une réaction affective vive, soudaine, souvent liée à une situation précise et accompagnée de manifestations physiques (rougir, trembler, pleurer). Le sentiment (l'amour, l'amitié, le respect, la nostalgie) désigne un état affectif plus stable, plus durable, moins dépendant d'un stimulus immédiat. Il implique souvent une élaboration par la pensée, une évaluation, et peut avoir une dimension éthique (sentiment moral) ou esthétique. Le sentiment est l'affect qui a mûri et s'est installé dans la personnalité.
    \nExemple : La peur ressentie face à un chien agressif est une émotion ; l'affection durable que l'on porte à son propre chien est un sentiment.`
  },
  // Question n°51
  {
    question: "Quelle idée Chateaubriand exprime-t-il lorsqu'il écrit, dans <em>René</em>, « notre cœur est un instrument incomplet » ?",
    answers: [
      "Que la sensibilité humaine est par nature insatisfaite et marquée par un manque ontologique.",
      "Que l'homme est biologiquement imparfait et sujet aux maladies cardiaques.",
      "Que nous manquons de courage pour affronter les épreuves de la vie."
    ],
    correct: 1,
    explanation: `Cette image musicale est au cœur de la mélancolie romantique. Le cœur, siège des sentiments, est comparé à une lyre à laquelle il « manque des cordes ». Cette incomplétude signifie que la condition humaine est caractérisée par une aspiration à un bonheur, un amour ou un absolu qui excède toujours les possibilités réelles de l'expérience. Même dans les moments de joie, une note de tristesse résonne, car la plénitude parfaite nous est inaccessible. Cette idée d'une sensibilité fondamentalement « désajustée » au monde, d'une âme trop grande pour le réel, est un leitmotiv du romantisme et explique le « vague à l'âme » et la nostalgie permanente des héros comme René.
    \nExemple : Le sentiment de « saudade » portugais, mélange de nostalgie, de manque et de douce tristesse, est une incarnation de cette idée d'un « cœur incomplet ».`
  },
  // Question n°52
  {
    question: "Dans la théorie de William James, quelle serait la conséquence logique si l'on supprimait toutes les sensations corporelles associées à une émotion ?",
    answers: [
      "Il ne resterait qu'une perception froide et intellectuelle de la situation, sans la tonalité affective.",
      "L'émotion deviendrait plus pure et plus spirituelle.",
      "L'émotion serait remplacée par une autre émotion plus primitive."
    ],
    correct: 1,
    explanation: `Cette expérience de pensée découle directement de la thèse de James. Puisque l'émotion *est* la perception des changements corporels, si on les supprime, on supprime l'émotion elle-même. Il ne resterait alors qu'un état cognitif : la reconnaissance intellectuelle de la situation (par exemple : « c'est un ours, c'est dangereux »), mais dénuée de la coloration affective de la peur (les tremblements, le cœur qui bat, la sensation de froid). La peur ne serait plus « ressentie ». Cela montre, pour James, que le corps n'est pas un simple accessoire de l'émotion, mais son substrat constitutif.
    \nExemple : Une personne sous beta-bloquants (médicaments qui atténuent les symptômes physiques de l'anxiété comme les palpitations) peut rapporter sentir moins l'émotion de peur ou de trac, illustrant partiellement cette idée.`
  },
  // Question n°53
  {
    question: "Quel argument avancer pour dire que la sensibilité « conditionne notre rapport au monde » depuis l'Antiquité ?",
    answers: [
      "Parce que la sensibilité est notre moyen premier d'être impliqué dans le monde et de l'interpréter.",
      "Parce que les Grecs avaient déjà découvert tous les sens.",
      "Parce que, depuis Hippocrate, on sait que le corps sensible est un outil de diagnostic médical."
    ],
    correct: 1,
    explanation: `L'affirmation selon laquelle la sensibilité conditionne notre rapport au monde signifie que notre manière d'être présent au monde, de le connaître, de lui donner du sens, et d'y agir, est d'abord et fondamentalement une affaire de corps et de sensations. Avant toute théorie, nous sommes des êtres sensibles immergés dans un environnement que nous percevons et avec lequel nous interagissons par nos sens. Cette idée, bien que thématisée différemment, est présente depuis l'Antiquité. Par exemple, la médecine hippocratique considérait le corps du patient comme un système sensible dont les déséquilibres (les « humeurs ») se manifestaient par des symptômes perceptibles. La sensibilité n'est donc pas un voile sur la réalité, mais notre mode d'accès originaire à elle.
    \nExemple : Un artisan qui « sent » la bonne consistance de l'argile avec ses mains, ou un marin qui « sent » le vent changer sur sa peau, ont une connaissance pratique du monde passant par une sensibilité éduquée.`
  },
  // Question n°54
  {
    question: "Que désigne le « conatus » chez Schopenhauer, évoqué à propos de la plante qui pousse sur du carrelage ?",
    answers: [
      "Une pulsion vitale aveugle et sans finalité, une « volonté de vivre » indifférente à l'individu.",
      "La recherche consciente du bonheur par l'individu.",
      "Un effort rationnel pour comprendre le monde."
    ],
    correct: 1,
    explanation: `Schopenhauer emprunte le terme « conatus » (effort, élan) à la philosophie moderne (Spinoza) pour désigner le noyau de la « Volonté » métaphysique. Il s'agit d'une force aveugle, irrationnelle, qui pousse tout être vivant à persévérer dans son être, à se reproduire, à croître, sans but ni raison d'être. L'exemple de la plante qui perce le carrelage pour pousser illustre parfaitement cette idée : la plante ne « veut » pas consciemment percer le carrelage ; elle est mue par une impulsion vitale inconsciente qui la pousse à déployer sa force coûte que coûte. Cette même force, selon Schopenhauer, anime l'homme dans ses désirs les plus fondamentaux, notamment le désir sexuel, qui n'est que l'expression de la Volonté cherchant à perpétuer l'espèce.
    \nExemple : La faim insatiable, la soif de pouvoir ou l'instinct de reproduction sont, pour Schopenhauer, des manifestations de ce « conatus » aveugle.`
  },
  // Question n°55
  {
    question: "Selon la lecture essentialiste du romantisme (René Wellek), que cherche-t-on à identifier ?",
    answers: [
      "Quelques caractéristiques communes et fondamentales à toutes les formes de romantisme.",
      "La diversité infinie et contradictoire des mouvements romantiques à travers l'Europe.",
      "L'influence exclusive de la Révolution française sur la naissance du romantisme."
    ],
    correct: 1,
    explanation: `Face à la difficulté de définir le romantisme, deux approches méthodologiques s'opposent. L'approche essentialiste, représentée par René Wellek, postule qu'il existe un « esprit » ou un ensemble de traits communs qui unissent les différentes manifestations romantiques à travers les pays et les arts, malgré leurs divergences. Elle cherche à dégager des principes généraux (exaltation du moi, culte de la nature, valorisation de la sensibilité et de l'imagination, goût pour le passé et l'exotisme). Cette approche permet une synthèse conceptuelle, mais risque de gommer les spécificités historiques et nationales.
    \nExemple : On pourrait dire que le culte de l'individu et de ses émotions est un trait essentialiste du romantisme, retrouvé à la fois chez Goethe, Chateaubriand et Byron.`
  },
  // Question n°56
  {
    question: "Selon la lecture relativiste du romantisme (Arthur Lovejoy), comment faut-il parler du romantisme ?",
    answers: [
      "Au pluriel, comme d'une multiplicité de « romantismes » nationaux et historiques.",
      "Au singulier, comme d'une doctrine unifiée.",
      "Comme d'un simple synonyme de « lyrisme » ou de « subjectivisme »."
    ],
    correct: 1,
    explanation: `Arthur Lovejoy défend une approche nominaliste ou relativiste. Selon lui, il n'existe pas une essence unique du romantisme, mais une multitude de mouvements, d'idées, de sensibilités, qui ont été rassemblés sous le même nom de façon confuse. Il préconise donc de parler des « romantismes » au pluriel, et de les étudier dans leur contexte historique, géographique et culturel spécifique (le romantisme allemand n'est pas le romantisme français, etc.). Cette approche est plus rigoureuse historiquement, mais elle rend plus difficile toute tentative de généralisation sur « le » romantisme comme phénomène philosophique et esthétique.
    \nExemple : Lovejoy montrerait que le romantisme politique de Hugo n'a pas grand-chose à voir avec le romantisme nostalgique et catholique de Chateaubriand, et qu'il faut les étudier séparément.`
  },
  // Question n°57
  {
    question: "Que signifie « l'effet Papageno », opposé à « l'effet Werther » ?",
    answers: [
      "L'influence positive d'une œuvre d'art qui montre des alternatives à la crise et prévient le passage à l'acte désespéré.",
      "L'effet comique et libérateur de la musique sur les émotions tristes.",
      "La tendance à imiter les comportements héroïques des personnages de fiction."
    ],
    correct: 1,
    explanation: `« L'effet Papageno » tire son nom du personnage de « La Flûte enchantée » de Mozart. Papageno, désespéré d'avoir perdu sa bien-aimée Papagena, envisage de se suicider. Mais des esprits l'en dissuadent en lui rappelant les alternatives à la mort, et il finit par retrouver Papagena et vivre heureux. En sociologie et en prévention du suicide, « l'effet Papageno » désigne l'impact protecteur d'une communication (médiatique, artistique, personnelle) qui met en lumière des issues possibles à la souffrance, des ressources d'aide, et des exemples de résilience. Il s'oppose directement à « l'effet Werther » de contagion mimétique.
    \nExemple : Les campagnes de prévention du suicide qui présentent des témoignages de personnes ayant surmonté une crise grave cherchent à produire un « effet Papageno ».`
  },
  // Question n°58
  {
    question: "Quelle est la fonction attribuée à la peau dans la communication sociale ?",
    answers: [
      "Elle est le lieu du toucher et un medium de communication non verbale, régissant la proximité physique et le contact.",
      "Elle est un obstacle à la communication vraie, qui doit être spirituelle.",
      "Elle est neutre et ne joue aucun rôle dans la communication."
    ],
    correct: 1,
    explanation: `La peau est notre interface avec le monde social. Elle est le siège du sens du toucher, fondamental pour la communication non verbale. Le contact physique (une poignée de main, une caresse, une tape amicale) transmet des messages émotionnels et sociaux puissants. La peau régule aussi la distance : on ne touche pas n'importe qui. Son état (rougeur de honte, pâleur de peur, transpiration de stress) communique involontairement nos émotions. Enfin, son apparence (couleur, marques, parures) signale une appartenance sociale, culturelle ou ethnique. La peau est donc un organe de communication à part entière.
    \nExemple : La différence entre une poignée de main ferme et une poignée de main molle envoie un message immédiat sur la confiance ou l'assurance de la personne.`
  },
  // Question n°59
  {
    question: "Comment définir la « passion » dans son sens philosophique fort ?",
    answers: [
      "Une inclination constante, exclusive et réfléchie de l'âme vers un objet, qui peut durer toute une vie et structurer l'existence.",
      "Un enthousiasme passager pour une activité ou une personne.",
      "Une émotion violente et incontrôlable qui prive l'homme de sa raison."
    ],
    correct: 1,
    explanation: `En philosophie, particulièrement chez des auteurs comme Descartes et Kant, la passion a un sens technique précis qui dépasse l'usage courant. Elle n'est pas simplement une émotion forte. C'est une « inclination » (un penchant durable) de l'âme, souvent née d'une émotion, mais qui s'est installée, « enracinée ». Elle est « constante » (elle dure) et « exclusive » (elle centre les désirs sur un seul objet : l'argent pour l'avare, le pouvoir pour l'ambitieux). Elle est « réfléchie » : elle peut coexister avec le raisonnement (l'avare calcule). Enfin, elle « structure l'existence » : elle devient le principe organisateur de la vie, au point de créer une servitude volontaire.
    \nExemple : La passion de l'alpiniste qui consacre sa vie à gravir des sommets de plus en plus difficiles, au mépris du danger, correspond à cette définition philosophique.`
  },
  // Question n°60
  {
    question: "Quelle est la « difficulté méthodologique » principale lorsqu'on cherche à étudier la sensibilité ?",
    answers: [
      "La nécessité de parler objectivement et rationnellement de ce qui est par essence subjectif et vécu.",
      "Le manque de textes philosophiques sur le sujet avant le XVIIIe siècle.",
      "L'impossibilité de mener des expériences scientifiques sur les émotions humaines."
    ],
    correct: 1,
    explanation: `La sensibilité pose un défi épistémologique de taille. Son objet – le ressenti, l'émotion, le vécu subjectif – est par définition intérieur, privé, qualitatif et difficilement communicable. Pourtant, la philosophie, la psychologie, la sociologie prétendent en faire un objet de connaissance rationnelle et objective. Comment traduire en concepts et en analyses ce qui est d'abord de l'ordre de l'expérience immédiate ? Cette difficulté traverse toute la séquence : faut-il adopter une approche naturaliste (objectivante), une approche phénoménologique (descriptive du vécu), ou une approche constructiviste (analysant les cadres sociaux) ?
    \nExemple : Décrire la douleur. Un médecin peut en mesurer les causes physiologiques (objectif), mais seul le patient en connaît l'intensité et la qualité subjective (cuisante, lancinante...), qui échappe à la mesure.`
  },
  // Question n°61
  {
    question: "Quel auteur du XXe siècle affirme que « tout est fabriqué et tout est naturel chez l'homme » à propos des émotions ?",
    answers: [
      "Maurice Merleau-Ponty.",
      "Henri Bergson.",
      "Jean-Paul Sartre."
    ],
    correct: 1,
    explanation: `Cette formule célèbre est de Maurice Merleau-Ponty, dans la <em>Phénoménologie de la perception</em>. Elle résume sa position qui cherche à dépasser l'opposition classique entre nature et culture, inné et acquis. Concernant les émotions, elle signifie qu'elles ne sont ni de purs réflexes biologiques (comme le croit le naturalisme naïf), ni de pures conventions arbitraires (comme le croirait un culturalisme radical). Elles sont à la fois « naturelles » car elles engagent le corps, ses sensations et ses réponses physiologiques, et « fabriquées » car la manière de les vivre, de les interpréter, de les exprimer est modelée par la culture et l'histoire. L'émotion est une institution humaine qui émerge à l'intersection du biologique et du social.
    \nExemple : Le sentiment amoureux engage des mécanismes hormonaux et cérébraux (naturel), mais la façon de le vivre (coup de foudre, amour courtois, mariage arrangé) est profondément culturelle (fabriqué).`
  },
  // Question n°62
  {
    question: "Selon Hegel, pourquoi l'art est-il capable de nous toucher universellement, même à travers la singularité d'une œuvre ?",
    answers: [
      "Parce qu'il « renseigne sur l'humain » en éveillant en nous « tous les sentiments qui s'agitent dans l'âme humaine », révélant ainsi l'universel dans le singulier.",
      "Parce qu'il utilise un langage symbolique directement compréhensible par tous les cerveaux humains.",
      "Parce qu'il représente des scènes de la vie quotidienne auxquelles tout le monde peut s'identifier."
    ],
    correct: 1,
    explanation: `Hegel voit dans l'art une des formes suprêmes de l'Esprit absolu se manifestant. L'artiste, à travers son œuvre singulière et personnelle, ne fait pas qu'exprimer sa subjectivité étroite. Il réussit à objectiver et à rendre sensibles des vérités universelles sur la condition humaine, sur les « vrais intérêts de l'esprit ». En contemplant une tragédie grecque, un tableau de la Renaissance ou un poème romantique, nous sommes émus parce que l'œuvre met en scène, de manière concrète et sensible, des conflits, des passions, des aspirations qui nous sont communs en tant qu'êtres humains. L'art nous révèle à nous-mêmes en présentant l'universel (l'humain) incarné dans le particulier (l'œuvre).
    \nExemple : « Antigone » de Sophocle nous touche encore car elle met en scène le conflit éternel entre la loi divine (ou morale) et la loi humaine, un dilemme universel.`
  },
  // Question n°63
  {
    question: "Quelle est la critique adressée par le romantisme au rationalisme des Lumières du XVIIIe siècle ?",
    answers: [
      "Le rationalisme est trop optimiste et naïf, il néglige les dimensions obscures, irrationnelles et passionnelles de l'homme et du monde.",
      "Le rationalisme est immoral car il justifie l'égoïsme et la recherche du plaisir.",
      "Le rationalisme est inefficace car il n'a pas permis d'éviter les guerres et les révolutions."
    ],
    correct: 1,
    explanation: `Le romantisme apparaît en partie comme une réaction contre l'esprit des Lumières. Les philosophes des Lumières (Voltaire, Diderot) prônaient la raison, la science, le progrès, la critique des traditions et des superstitions. Les romantiques estiment que ce rationalisme a desséché l'homme, l'a coupé de ses racines, de ses sentiments, du mystère et du sublime. Ils lui reprochent d'avoir produit un monde désenchanté, mécanique, où l'individu ne trouve plus sa place. Le romantisme va donc réhabiliter tout ce que le rationalisme marginalisait : la sensibilité, l'imagination, le sentiment religieux, l'attachement au passé, l'irrationnel, le génie individuel, la mélancolie.
    \nExemple : Alors qu'un philosophe des Lumières voit dans une forêt un écosystème à étudier, un romantique y voit un lieu mystérieux, peuplé de forces invisibles, propre à inspirer la rêverie et la terreur.`
  },
  // Question n°64
  {
    question: "Comment caractériser l'engagement politique des écrivains romantiques comme Hugo ou Lamartine ?",
    answers: [
      "Comme le prolongement naturel de leur mission de poète, chargés d'éclairer le peuple et de préparer un avenir meilleur.",
      "Comme un opportunisme de carrière, sans convictions profondes.",
      "Comme une fuite hors de la littérature, vers l'action concrète."
    ],
    correct: 1,
    explanation: `Pour de nombreux romantiques, il n'y a pas de séparation entre l'art et l'engagement civique. Le poète, doté d'une sensibilité et d'une vision supérieures, a une responsabilité envers la société. Hugo, Lamartine, George Sand ou Mme de Staël considèrent que la parole littéraire doit servir à éduquer, à critiquer, à inspirer, à « préparer des jours meilleurs ». Leur engagement politique (en tant que députés, journalistes, intellectuels influents) est la mise en acte de cette conviction. Leur sensibilité aux malheurs du peuple, leur aspiration à la justice et à la liberté, trouvent une expression directe dans l'arène politique. L'art et l'action sont les deux faces d'une même vocation : transformer le monde par la puissance de l'esprit et du sentiment.
    \nExemple : Les <em>Châtiments</em> de Hugo sont à la fois une œuvre poétique majeure et un pamphlet politique virulent contre Napoléon III.`
  },
  // Question n°65
  {
    question: "Quelle est la thèse de Descartes sur l'origine « somatique » des passions, évoquée dans la séance 4 ?",
    answers: [
      "Les passions sont des perceptions de l'âme qui lui viennent du corps et qui l'informent de l'état de ce corps.",
      "Les passions sont causées uniquement par des jugements erronés de l'âme.",
      "Les passions n'ont aucune origine corporelle et sont purement spirituelles."
    ],
    correct: 1,
    explanation: `Dans <em>Les Passions de l'âme</em>, Descartes, en bon dualiste, attribue l'origine de nombreuses passions au corps. L'âme, unie au corps, reçoit par l'intermédiaire des nerfs et des « esprits animaux » des informations sur l'état corporel. Ces perceptions, que l'âme éprouve, sont les passions. Par exemple, la perception d'un danger cause un certain mouvement des esprits animaux dans le corps, et l'âme perçoit ce mouvement comme la passion de la peur. Ainsi, les passions sont d'abord pour Descartes des affects *subis* par l'âme du fait de son union avec le corps, et non des produits de sa volonté ou de sa raison.
    \nExemple : La sensation de faim ou de soif, qui pousse à l'action, est pour Descartes une passion d'origine somatique.`
  },
  // Question n°66
  {
    question: "Quel sens particulier le romantisme donne-t-il au terme « rêverie », notamment chez Rousseau ?",
    answers: [
      "Un état de dérive paisible de la pensée, souvent en plein air, où l'âme se laisse aller à ses sensations et à une méditation libre, en harmonie avec la nature.",
      "Une activité oisive et stérile de l'esprit qui divague.",
      "Un état de conscience altéré, proche du sommeil ou de l'ivresse."
    ],
    correct: 1,
    explanation: `La rêverie romantique (pré-romantique chez Rousseau) est une catégorie importante de l'expérience sensible. Elle n'est pas la rêverie distraite du quotidien. C'est un état volontairement cultivé, où le moi se met en retrait de l'action et de la pensée discursive pour se livrer à un flux libre d'impressions, de souvenirs et de sentiments. Souvent provoquée par la contemplation d'un paysage naturel, elle implique une fusion entre le sujet et l'objet. La rêverie est un mode de connaissance de soi et du monde par la sensibilité, où l'on « sent » son existence sans la « penser ». Elle est source de bonheur simple et de vérité intime.
    \nExemple : Les <em>Rêveries du promeneur solitaire</em> de Rousseau sont le journal de ces états où la marche et la nature suscitent une introspection sensible et heureuse.`
  },
  // Question n°67
  {
    question: "Quelle définition donner du « spleen » baudelairien ?",
    answers: [
      "Une forme de mélancolie moderne, urbaine, liée à l'ennui, au dégoût et à l'angoisse du temps.",
      "Une joie intense et paradoxale née de la souffrance.",
      "Un sentiment d'exaltation face à la laideur du monde moderne."
    ],
    correct: 1,
    explanation: `Baudelaire, poète à la charnière du romantisme et du symbolisme, reprend et transforme la mélancolie romantique. Son « spleen » (mot anglais désignant la rate, organe associé à l'humeur noire) est une mélancolie spécifiquement moderne. Elle n'est plus liée aux grands espaces naturels, mais à l'univers clos de la ville, de la chambre, de la foule anonyme. C'est un ennui profond, un dégoût existentiel, une angoisse métaphysique face au temps qui passe et à la mort, souvent décrit avec des images de lourdeur, d'étouffement et de pourrissement. Le spleen est l'envers de « l'idéal » baudelairien, la chute dans le néant après l'aspiration vers le beau et l'infini.
    \nExemple : Le poème « Spleen » (« Quand le ciel bas et lourd pèse comme un couvercle... ») décrit cet état de dépression totale où même l'espoir n'est plus qu'une chauve-souris qui se heurte aux murs.`
  },
  // Question n°68
  {
    question: "Comment expliquer la phrase de Descartes : « en les examinant, je les ai trouvées presque toutes bonnes » à propos des passions ?",
    answers: [
      "Descartes considère que les passions, bien que troublant l'âme, sont utiles à la conservation de la vie et que l'âme n'aurait pas de raison de rester unie au corps sans elles.",
      "Descartes pense que les passions sont moralement neutres.",
      "Descartes croit que les passions sont un don de Dieu et donc nécessairement bonnes."
    ],
    correct: 1,
    explanation: `Dans sa lettre à Chanut, Descartes défend une position nuancée sur les passions, loin d'un stoïcisme radical qui les condamnerait toutes. Il reconnaît que les passions troublent l'âme et peuvent l'égarer. Cependant, il souligne leur fonction vitale positive. Les passions (la peur face au danger, le désir de nourriture, l'amour pour sa progéniture) sont des signaux utiles qui nous poussent à agir pour notre conservation et celle de l'espèce. Sans ces affections qui nous lient au corps et à ses besoins, l'âme n'aurait « pas sujet de vouloir demeurer jointe à son corps ». Les passions sont donc bonnes dans leur finalité naturelle, même si la raison doit apprendre à les réguler.
    \nExemple : La passion de l'amour, selon Descartes, peut être désordonnée, mais à l'origine, elle pousse les parents à protéger leurs enfants, ce qui est bon pour l'espèce.`
  },
  // Question n°69
  {
    question: "Quelle est la fonction de la « nociception » ?",
    answers: [
      "La capacité à ressentir la douleur, qui est liée à l'émotion plus qu'au dommage tissulaire lui-même.",
      "La perception de l'équilibre et de la position dans l'espace.",
      "La perception des températures (chaud/froid)."
    ],
    correct: 1,
    explanation: `La nociception est le système sensoriel qui détecte les stimuli potentiellement dommageables (mécaniques, thermiques, chimiques) et transmet cette information au cerveau, où elle est interprétée comme douleur. La douleur n'est pas une simple mesure objective du dommage. Elle est une expérience subjective et émotionnelle complexe. L'intensité de la douleur dépend de facteurs psychologiques (l'anxiété, l'attention), contextuels (le sens qu'on donne à la blessure) et culturels. C'est pourquoi on peut être insensible à la douleur dans certaines circonstances (sous l'effet de l'adrénaline) ou au contraire l'amplifier (douleur chronique).
    \nExemple : L'histoire de l'ouvrier transpercé par un clou qui passait entre ses orteils montre que la douleur est déclenchée par la représentation mentale de la blessure, et non par la lésion elle-même (inexistante dans ce cas).`
  },
  // Question n°70
  {
    question: "Comment interpréter l'expression « amour platonique » telle qu'elle est comprise à l'époque romantique ?",
    answers: [
      "Un amour qui vise l'union des âmes plus que celle des corps, mais qui, chez les romantiques, peut basculer dans une haine ou une négation du corps.",
      "Un amour purement spirituel et désincarné, qui glorifie la raison et méprise le corps.",
      "Un amour impossible réservé aux relations entre professeurs et élèves dans l'Académie de Platon."
    ],
    correct: 1,
    explanation: `L'« amour platonicien », inspiré du <em>Banquet</em> de Platon, désigne originellement un amour qui commence par l'attirance pour un beau corps mais qui doit s'élever progressivement vers l'amour de la Beauté en soi, intelligible et éternelle. C'est une ascension spirituelle qui ne méprise pas le corps mais l'utilise comme un marchepied. À l'époque romantique, cette notion est souvent déformée en « amour platonique » au sens d'un amour purement spirituel, désincarné, impossible à consommer charnellement, et parfois teinté d'une méfiance envers la sensualité. Cet amour « glorifie la raison contre la jouissance » et devient une « prétention à être désincarné ».
    \nExemple : Les amours chastes et idéalisées, mais souvent malheureuses, des héros de romans romantiques comme « Les Liaisons dangereuses » (la relation entre la Présidente de Tourvel et Valmont avant la chute) ou <em>René</em> illustrent cette conception.`
  },
  // Question n°71
  {
    question: "Quelle est la position de Lactance, évoquée à propos des cinq sens, concernant le corps et la sensualité ?",
    answers: [
      "Il entretient une méfiance envers le corps, associant la sensibilité sensorielle à la sensualité et la considérant comme un égarement potentiel.",
      "Il célèbre le corps comme le temple de l'âme et la sensualité comme un don de Dieu.",
      "Il considère les sens comme des outils parfaites pour connaître la vérité divine dans la nature."
    ],
    correct: 1,
    explanation: `Lactance, un auteur chrétien latin, représente une tendance dualiste et ascétique présente dans une partie de la pensée chrétienne. Influencé par des courants qui voient dans le corps et ses plaisirs un obstacle au salut de l'âme, il entretient une méfiance à l'égard de la sensibilité. Pour lui, la sensibilité, qui est notre capacité à percevoir par les sens, risque toujours de dégénérer en « sensualité », c'est-à-dire en recherche des plaisirs charnels, considérée comme un égarement moral et spirituel. Cette position contraste avec celle d'un saint François d'Assise qui célèbre la création, ou avec la réhabilitation du corps dans certaines philosophies modernes.
    \nExemple : La méfiance traditionnelle de certaines doctrines religieuses envers la danse, considérée comme une excitation des sens menant au péché, relève de cette même méfiance.`
  },
  // Question n°72
  {
    question: "Selon la réflexion proposée en conclusion de la séance 1, que cherche-t-on fondamentalement dans le sentiment amoureux ?",
    answers: [
      "La réponse à une question existentielle qui reste ouverte : est-ce la fusion des âmes, l'assouvissement d'un désir, ou autre chose ?",
      "Un partenaire pour assurer sa descendance et la survie de l'espèce.",
      "Une validation sociale et une amélioration de son statut économique."
    ],
    correct: 1,
    explanation: `La conclusion de la première séance pose une série de questions ouvertes qui montrent que le sentiment amoureux est une énigme philosophique. Les différentes théories abordées (platonisme, romantisme, vitalisme) proposent des réponses contradictoires. S'agit-il d'une quête d'absolu et de fusion spirituelle (romantisme) ? D'une illusion masquant une pulsion biologique (Schopenhauer) ? D'un compromis entre le corps et la raison ? La question « Que cherche-t-on dans le sentiment amoureux ? » n'appelle pas une réponse unique, mais invite à réfléchir à la pluralité des interprétations possibles de notre sensibilité la plus intense. L'amour apparaît comme le lieu par excellence où s'exprime et se questionne le mystère de la condition humaine, entre nature et culture, corps et esprit.
    \nExemple : Un même couple pourra vivre son amour à la fois comme une attraction physique inexplicable, un lien spirituel profond, et un projet de vie commun, sans pouvoir réduire cette expérience à une seule de ces dimensions.`
  },
  // Question n°73
  {
    question: "Quel est le principal obstacle à la transmission de sa sensibilité à autrui, selon la réflexion finale de la séance 1 ?",
    answers: [
      "Le fait que les mouvements de l'intimité soient liés à l'intériorité propre du sujet, donc difficilement objectivables et communicables sans dénaturation.",
      "Le manque de vocabulaire approprié pour décrire les émotions.",
      "L'indifférence générale des autres à notre vie intérieure."
    ],
    correct: 1,
    explanation: `La première question de la réflexion finale soulève un problème fondamental de la philosophie de l'esprit et de l'expression artistique. La sensibilité est d'abord une expérience privée, subjective, vécue « de l'intérieur ». La transmettre à autrui suppose de l'objectiver, de la mettre en forme (par des mots, des couleurs, des sons). Mais cette objectivation est-elle fidèle ? Le langage est-il adéquat aux nuances du sentiment ? L'œuvre d'art trahit-elle ou révèle-t-elle l'émotion de l'artiste ? Il y a un risque permanent de dénaturation, de simplification, d'incompréhension. Pourtant, c'est ce défi que relève l'art et la communication humaine.
    \nExemple : Un poème d'amour tente de capturer et de communiquer un sentiment intime, mais le lecteur le comprendra toujours à travers le prisme de sa propre sensibilité, créant un écart avec l'intention originelle du poète.`
  },
  // Question n°74
  {
    question: "Comment présenter le rapport du romantisme à l'Histoire ?",
    answers: [
      "Les romantiques sont nostalgiques d'un passé idéalisé (Moyen Âge, Antiquité), déçus par un présent instable, et tantôt désespérés, tantôt engagés pour un avenir utopique.",
      "Les romantiques détestent l'Histoire, qu'ils considèrent comme une suite d'horreurs sans signification.",
      "Les romantiques sont tournés uniquement vers l'avenir et le progrès, comme les Lumières."
    ],
    correct: 1,
    explanation: `Le rapport du romantisme au temps historique est complexe et souvent contradictoire. 1) Nostalgie : nombreux sont les romantiques qui idéalisent un passé perçu comme plus authentique, héroïque ou spirituel (le Moyen Âge des cathédrales, l'Antiquité païenne). 2) Désenchantement présent : ils vivent le présent post-révolutionnaire et industriel comme un temps de chaos, de désorientation et de médiocrité (« mal du siècle »). 3) Rapport à l'avenir : certains sombrent dans le désespoir et la mélancolie face à cet avenir incertain. D'autres, comme Hugo, transforment ce désenchantement en engagement utopique, faisant du poète le prophète d'un avenir meilleur à construire.
    \nExemple : Le goût pour les ruines gothiques chez Chateaubriand exprime la nostalgie ; le désespoir de Musset face à l'après-Napoléon illustre le présent vide ; les poèmes visionnaires de Hugo incarnent l'engagement pour l'avenir.`
  },
  // Question n°75
  {
    question: "Quelle est la signification philosophique de l'exemple d'Aron Ralston, qui s'est amputé le bras pour survivre, cité à propos de la nociception ?",
    answers: [
      "Elle illustre le fait que, dans des circonstances extrêmes, la raison et la volonté de survie peuvent temporairement supprimer ou dominer la sensation de douleur.",
      "Elle montre que la douleur est toujours insupportable et qu'il faut tout faire pour l'éviter.",
      "Elle prouve que la douleur est une construction sociale, car il a pu l'ignorer."
    ],
    correct: 1,
    explanation: `L'histoire dramatique d'Aron Ralston (racontée dans le film « 127 heures ») est un cas extrême qui éclaire la relation complexe entre douleur, émotion et volonté. Bloqué par un rocher, Ralston a dû se sectionner le bras avec un canif pour se libérer. Le fait qu'il ait pu accomplir cet acte d'automutilation, normalement source d'une douleur atroce, montre que la perception de la douleur n'est pas un réflexe purement mécanique. Dans une situation de survie, où l'enjeu est vital, des facteurs psychologiques supérieurs (la volonté, l'adrénaline, la concentration sur un but) peuvent moduler, voire masquer temporairement, la sensation douloureuse. La douleur est donc une expérience intégrée, où l'interprétation cognitive et émotionnelle de la situation joue un rôle crucial.
    \nExemple : Les soldats blessés au combat rapportent parfois ne pas avoir ressenti la douleur de leur blessure sur le moment, tant ils étaient focalisés sur la survie ou la mission.`
  },
  // Question n°76
  {
    question: "En quoi l'exemple de la tribu brésilienne où les hommes portent des gants recouverts d'abeilles illustre-t-il le caractère culturel de la sensibilité ?",
    answers: [
      "Il illustre que ce à quoi nous sommes sensibles (ici, la douleur infligée par des piqûres) et la signification que nous lui donnons sont liés à notre histoire et à notre univers culturel.",
      "Il montre que la sensibilité à la douleur est universelle et identique chez tous les humains.",
      "Il prouve que certaines cultures sont plus résistantes à la douleur que d'autres en raison de différences génétiques."
    ],
    correct: 1,
    explanation: `Cet exemple ethnographique vise à montrer que notre sensibilité n'est pas une donnée naturelle brute et universelle. Le fait que des hommes d'une tribu acceptent de subir volontairement des piqûres d'abeilles dans le cadre d'un rite initiatique ou d'une épreuve de courage signifie que la sensation de douleur provoquée par les piqûres ne porte pas la même signification que dans notre culture. Là où nous verrions une torture insensée, eux y voient peut-être une preuve de virilité, un passage obligé, une communion avec les forces de la nature. La sensibilité (ici à la douleur) est toujours déjà interprétée, mise en récit, intégrée dans un système de valeurs culturel. L'expérience sensible est modelée par le sens qu'une communauté lui donne.
    \nExemple : Les rites de scarification ou de tatouage traditionnels dans certaines cultures transforment un acte douloureux en un marqueur identitaire et esthétique valorisé.`
  },
  // Question n°77
  {
    question: "Quelle conception de l'amour attribuer à Socrate dans le <em>Banquet</em> de Platon ?",
    answers: [
      "Un amour libérateur qui n'est possible que si l'on désire le vrai et le bien, et qui élève l'âme.",
      "Un amour possessif qui vise à dominer l'autre.",
      "Un amour purement charnel et passager, sans valeur spirituelle."
    ],
    correct: 1,
    explanation: `Dans le <em>Banquet</em>, Socrate (rapportant les enseignements de la prêtresse Diotime) propose une vision ascendante et philosophique de l'amour (Éros). L'amour n'est pas possession de l'autre, mais désir de ce qui nous manque, à savoir le Beau et le Bien. Il commence par l'attirance pour un beau corps, puis s'élève vers l'amour de la beauté des âmes, des lois, des sciences, pour finalement contempler la Beauté en soi, éternelle et immuable (l'Idée du Beau). Cet amour est « libérateur » car il arrache l'âme à l'attachement aux choses sensibles et périssables pour la conduire vers la vérité et l'immortalité. C'est un amour qui est au service de la philosophie.
    \nExemple : La relation entre Socrate et ses jeunes disciples comme Alcibiade est souvent interprétée comme une illustration de cet amour philosophique qui cherche à éveiller l'âme de l'autre à la vérité, et non à en jouir charnellement.`
  },
  // Question n°78
  {
    question: "Comment analyser l'expression « avoir quelqu'un dans la peau » ?",
    answers: [
      "Comme l'expression d'un amour possessif et fusionnel, où le désir de l'autre est vécu comme une incorporation physique obsessionnelle.",
      "Comme une simple métaphore sans rapport avec le corps.",
      "Comme la description d'une maladie dermatologique contagieuse."
    ],
    correct: 1,
    explanation: `Cette expression populaire est analysée comme révélatrice du lien profond entre la peau, la sensualité et la passion amoureuse. « Avoir quelqu'un dans la peau » signifie être habité, possédé par le désir et l'amour pour cette personne, au point que ce sentiment semble faire partie de son propre corps, de son enveloppe charnelle. Cela évoque une fusion imaginaire, une incorporation de l'autre, et souvent une forme de dépendance ou d'obsession. L'expression montre comment la passion amoureuse est vécue et pensée à travers le registre corporel et sensoriel. Elle traduit l'idée que l'amour n'est pas seulement un sentiment abstrait, mais une expérience qui engage tout le corps.
    \nExemple : Une chanson d'amour qui dit « Je ne peux pas t'oublier, tu es sous ma peau » utilise cette même image pour exprimer un attachement viscéral et ineffaçable.`
  },
  // Question n°79
  {
    question: "Selon la thèse de la « construction conceptuelle » des émotions (Lisa Feldman Barrett), que se passe-t-il lorsqu'une culture invente un nouveau mot pour une émotion ?",
    answers: [
      "Cela permet de mieux reconnaître, catégoriser et donc de vivre consciemment une nuance d'expérience sensible qui pouvait exister de manière diffuse.",
      "Rien, car les émotions préexistent aux mots qui les désignent.",
      "Cela crée artificiellement une émotion qui n'existait pas auparavant dans le cerveau humain."
    ],
    correct: 1,
    explanation: `Selon la théorie constructiviste radicale de Barrett, les émotions ne préexistent pas comme des entités fixes dans le cerveau. Le cerveau prédit et catégorise en permanence les sensations internes et externes en utilisant des concepts qu'il a appris. L'invention d'un nouveau mot émotionnel (« FOMO », « chiplessness », « hygge ») fournit un nouveau concept culturel. Les individus qui s'approprient ce concept vont alors pouvoir regrouper sous ce label un ensemble de sensations et de situations qu'ils vivaient auparavant de manière confuse ou qu'ils catégorisaient différemment. Le mot ne crée pas l'expérience physiologique brute, mais il crée une nouvelle manière de la conceptualiser, de l'interpréter et donc de la vivre comme une émotion distincte.
    \nExemple : Avant que le terme « stress » ne se diffuse largement au XXe siècle, les gens ressentaient de l'inquiétude, des maux de tête, de l'irritabilité, mais ils ne les rassemblaient pas nécessairement sous le concept unifié de « stress », qui donne aujourd'hui un sens à cet ensemble de symptômes.`
  },
  // Question n°80
  {
    question: "En quoi l'exemple des « nez » en parfumerie répond-il à la « difficulté langagière » concernant l'odorat ?",
    answers: [
      "Il illustre comment une profession spécialisée a dû développer un vocabulaire technique et une éducation sensorielle exceptionnelle pour pallier la pauvreté du langage courant concernant les odeurs.",
      "Il montre que le vocabulaire des odeurs est naturellement riche et n'a pas besoin d'être développé.",
      "Il prouve que l'odorat est un sens moins important que les autres, puisqu'il nécessite des experts."
    ],
    correct: 1,
    explanation: `Notre culture possède un vocabulaire relativement pauvre pour décrire les odeurs, comparé à celui dédié à la vue ou à l'ouïe. Nous disons souvent « ça sent bon/mauvais » ou nous avons recours à des analogies (« ça sent le frais, le bois, le brûlé »). Les « nez », ces professionnels de la parfumerie, constituent une exception qui confirme la règle. Leur métier exige une sensibilité olfactive extrêmement fine, qu'ils ont dû entraîner pendant des années. Surtout, ils ont développé un langage technique sophistiqué, avec des familles olfactives précises (hespéridés, aromatiques, orientaux...) et une grammaire des accords, pour pouvoir communiquer entre eux et créer des parfums complexes. Leur expertise montre que la pauvreté du langage olfactif courant n'est pas une fatalité biologique, mais un fait culturel qui peut être surmonté par un apprentissage spécialisé.
    \nExemple : Un « nez » peut décrire un parfum comme « un départ frais et acidulé de bergamote, sur un cœur floral de jasmin et de rose, posé sur un fond boisé de patchouli et de vétiver », là où le profane dirait simplement « ça sent bon et fleuri ».`
  },
  // Question n°81
  {
    question: "Comment expliquer que l'on puisse être « ponctuellement insensible à la douleur », par exemple lors d'une opération sans anesthésie ?",
    answers: [
      "Par le fait que la douleur est une construction mentale qui peut être suspendue par une forte concentration, un état de choc ou des techniques comme l'hypnose.",
      "Par la magie ou des pouvoirs surnaturels.",
      "Parce que le système nerveux est momentanément endommagé."
    ],
    correct: 1,
    explanation: `L'exemple de l'insensibilité ponctuelle à la douleur illustre la complexité de la nociception. La douleur n'est pas le simple reflet d'une lésion ; c'est une perception construite par le cerveau. Dans certaines conditions psychologiques ou physiologiques extrêmes, le cerveau peut « décider » de ne pas produire la sensation de douleur malgré un stimulus nocif. Cela peut arriver sous l'effet d'un choc émotionnel violent, d'une concentration intense sur autre chose (comme dans l'exemple de Ralston), sous hypnose, ou dans des états de transe. Cela montre le rôle actif du cerveau dans la genèse de l'expérience douloureuse.
    \nExemple : On rapporte des cas de blessés graves sur un champ de bataille qui ne ressentent pas immédiatement leur douleur, ou de pratiquants de méditation avancée capables de contrôler leur perception de la douleur.`
  },
  // Question n°82
  {
    question: "Que signifie l'expression « le temps, comme l'eau, s'écoule inexorablement » dans le contexte romantique ?",
    answers: [
      "L'idée que le temps est une substance fluide et insaisissable, dont la fuite est source d'angoisse et de mélancolie pour le sujet sensible.",
      "Une métaphore scientifique sur le cycle de l'eau dans la nature.",
      "L'affirmation que le temps est cyclique et éternel, comme le mouvement des vagues."
    ],
    correct: 1,
    explanation: `Cette image, centrale dans le lyrisme romantique (cf. « Le Lac » de Lamartine), exprime une conception spécifique du temps. Pour les romantiques, le temps n'est pas un cadre neutre, mais une force qui emporte tout sur son passage, en particulier les moments de bonheur et les êtres aimés. Comme l'eau d'une rivière qu'on ne peut retenir, le temps « s'écoule », « fuit » de manière irréversible. Cette conscience aiguë de la temporalité (« l'écoulement inexorable ») est une source majeure de la sensibilité romantique : elle génère la nostalgie du passé, l'angoisse de la mort, et le désir désespéré de fixer l'instant éphémère. L'eau, dans la nature, devient ainsi le symbole sensible de cette angoisse métaphysique.
    \nExemple : La célèbre devise « Carpe diem » (« Cueille le jour ») est une réponse ancienne à cette angoisse de la fuite du temps, reprise et amplifiée par les romantiques.`
  },
  // Question n°83
  {
    question: "Quelle est la définition de « l'équilibrioception » ?",
    answers: [
      "Le sens de l'équilibre, permettant de se repérer dans l'espace et de savoir si l'on est en mouvement.",
      "Le sens de la douleur.",
      "Le sens de la position des membres."
    ],
    correct: 1,
    explanation: `L'équilibrioception est un sens interne souvent oublié. Il nous permet de maintenir notre équilibre, de connaître l'orientation de notre tête et de notre corps dans l'espace, et de percevoir les accélérations (mouvements linéaires et rotatifs). Il repose principalement sur le système vestibulaire, situé dans l'oreille interne, qui contient des canaux remplis de liquide et des otolithes sensibles à la gravité. Ce sens est essentiel pour la coordination des mouvements et la station debout. Son dysfonctionnement provoque des vertiges et des pertes d'équilibre.
    \nExemple : Le « mal de mer » ou le « mal des transports » est causé par un conflit entre les informations de l'équilibrioception (qui perçoit le mouvement du bateau ou de la voiture) et celles de la vue (qui peut, dans un habitacle, indiquer l'immobilité), créant une confusion sensorielle nauséeuse.`
  },
  // Question n°84
  {
    question: "Pourquoi dire que « la sensibilité n'est pas le désir » ?",
    answers: [
      "Parce que le désir est actif (on tend vers un objet) tandis que la sensibilité est d'abord réceptive (on est affecté).",
      "Parce que le désir est toujours conscient, la sensibilité est inconsciente.",
      "Parce que le désir est mauvais et la sensibilité est bonne."
    ],
    correct: 1,
    explanation: `Cette distinction, faite en introduction, est importante pour délimiter le champ de la séquence. Le désir est une tension de l'être vers un objet qu'il ne possède pas, une force active qui pousse à l'action pour combler un manque. La sensibilité, au sens large, est la capacité à être affecté, à recevoir des impressions, qu'elles viennent du monde extérieur ou de notre propre corps. Elle est donc d'abord de l'ordre de la réceptivité, de la passivité (au sens de « subir »). Bien sûr, désir et sensibilité sont liés (un désir peut naître d'une sensation agréable), mais ils désignent deux moments différents de la vie psychique : être affecté (sensibilité) et tendre vers (désir).
    \nExemple : Sentir l'odeur d'un gâteau (sensibilité) peut susciter le désir d'en manger (désir).`
  },
  // Question n°85
  {
    question: "Comment caractériser la « tempérance » (φρόνησις) dans la pensée antique, notamment platonicienne ?",
    answers: [
      "Comme une modération dans les plaisirs des sens, considérée comme une meilleure conseillère que le sentiment ou la passion.",
      "Comme une forme de lâcheté et de fuite devant les plaisirs de la vie.",
      "Comme un rejet total et ascétique de toute forme de sensibilité et de plaisir."
    ],
    correct: 1,
    explanation: `Dans la philosophie antique, notamment chez Platon et Aristote, la tempérance (<em>sophrosunè</em> en grec) est l'une des quatre vertus cardinales. Il ne s'agit pas d'une répression brutale des désirs, mais d'une juste mesure, d'un contrôle raisonnable des plaisirs et des appétits sensibles. L'homme tempérant n'est pas insensible ; il éprouve des désirs, mais sa raison lui indique la mesure à ne pas dépasser. Pour les Anciens, cette vertu de modération est une « meilleure conseillère » que le sentiment ou la passion, car ces derniers, désordonnés, peuvent mener à l'excès et au malheur. La tempérance est donc une forme de sagesse pratique qui gouverne la sensibilité.
    \nExemple : Savoir apprécier un bon repas sans tomber dans la gloutonnie, ou savourer un vin sans s'enivrer, sont des manifestations contemporaines de l'idéal antique de tempérance.`
  },
  // Question n°86
  {
    question: "Que symbolise l'attelage « ailé » dans le mythe de Platon ?",
    answers: [
      "La capacité de l'âme à s'élever vers le monde intelligible des Idées lorsqu'elle est bien conduite.",
      "La vitesse de la pensée humaine.",
      "L'instabilité et la folie de l'âme passionnée."
    ],
    correct: 1,
    explanation: `Les ailes de l'attelage dans le <em>Phèdre</em> ne sont pas un détail décoratif ; elles sont symboliquement essentielles. Elles représentent la capacité naturelle de l'âme à s'élever vers les réalités supérieures, les Idées éternelles (le Vrai, le Beau, le Bien). Lorsque le cocher (la raison) parvient à maîtriser les deux chevaux, surtout le cheval noir des désirs désordonnés, l'attelage peut prendre son essor et contempler les réalités intelligibles. En revanche, si les chevaux, en particulier le noir, ne sont pas maîtrisés, ils entraînent l'attelage vers le bas, vers le monde sensible, et les ailes se cassent ou s'alourdissent, empêchant l'ascension. Les ailes symbolisent donc la dimension transcendante de l'âme et sa destination spirituelle, qui ne peut être atteinte que par la maîtrise de la sensibilité.
    \nExemple : L'expérience de l'amour véritable, pour Platon, doit « donner des ailes » à l'âme et la faire s'élever de l'amour d'un beau corps à l'amour de la Beauté absolue.`
  },
  // Question n°87
  {
    question: "Quelle est la position de Schopenhauer sur la « chose en soi » kantienne ?",
    answers: [
      "Il affirme que mon corps est une chose en soi que je connais immédiatement, sans la médiation de la raison.",
      "Il suit Kant en affirmant qu'elle est totalement inconnaissable.",
      "Il rejette complètement l'idée de chose en soi comme métaphysique indéfendable."
    ],
    correct: 1,
    explanation: `Schopenhauer se présente comme le véritable héritier de Kant, mais il modifie profondément sa doctrine sur un point crucial. Kant affirmait que la « chose en soi » (le noumène) est inconnaissable ; nous ne connaissons que les phénomènes, façonnés par les structures de notre sensibilité et de notre entendement. Schopenhauer conteste cela. Il soutient qu'il existe une exception : notre propre corps. Nous ne connaissons pas notre corps seulement comme un objet parmi d'autres (phénomène), mais aussi « de l'intérieur », immédiatement, comme volonté. Quand je veux bouger mon bras, je connais directement cette volonté avant même de voir le mouvement (phénomène). À partir de cette intuition, Schopenhauer généralise : la chose en soi de tout l'univers est une « Volonté » aveugle et irrationnelle, analogue à la force vitale que j'expérimente en moi.
    \nExemple : La faim que je ressens n'est pas une simple sensation ; c'est pour Schopenhauer la manifestation directe en moi de la Volonté métaphysique cherchant à se perpétuer.`
  },
  // Question n°88
  {
    question: "Pourquoi l'homme romantique se sent-il à la fois faible et fort face à la Nature ?",
    answers: [
      "Faible physiquement face à ses forces, mais fort spirituellement par sa capacité à la juger et à s'en rendre indépendant moralement.",
      "Faible car il la détruit, fort car il peut la recréer en art.",
      "Faible car il en dépend pour survivre, fort car il peut la dominer par la science."
    ],
    correct: 1,
    explanation: `Cette dialectique est au cœur de l'analyse kantienne du sublime, reprise par les romantiques. Face à la nature dans sa démesure (océan, tempête, montagne), l'homme éprouve d'abord sa petitesse, sa fragilité physique, son impuissance en tant qu'être naturel soumis aux mêmes lois. C'est le moment de la « faiblesse ». Mais immédiatement après, ou simultanément, il prend conscience que son esprit est capable de *concevoir* cette immensité, de la juger, de ressentir du sublime. Il découvre en lui une liberté, une raison, une dignité morale qui le rendent supérieur à cette nature purement physique. Cette « force » spirituelle le rend indépendant de la nature, même si son corps peut en être victime.
    \nExemple : Un alpiniste au sommet d'une montagne peut se sentir insignifiant face à l'immensité du paysage, mais aussi fier et libre d'avoir accompli cet exploit qui engage sa volonté et son courage, qualités spirituelles.`
  },
  // Question n°89
  {
    question: "Comment interpréter la phrase de Mme de Staël : « Je suis poète lorsque j’admire, lorsque je méprise, lorsque je hais, non par des sentiments personnels... mais pour la dignité de l’espèce humaine » ?",
    answers: [
      "Comme la définition d'une sensibilité poétique qui dépasse l'individualité pour se faire l'écho de sentiments universels et moraux.",
      "Comme l'affirmation d'un détachement froid et impersonnel de l'artiste.",
      "Comme le rejet de toute émotion dans l'acte de création poétique."
    ],
    correct: 1,
    explanation: `Mme de Staël, figure majeure du préromantisme, définit ici la poésie comme une activité éminemment morale et universelle. Le poète n'exprime pas ses humeurs personnelles, ses rancunes ou ses préférences étroites. Sa sensibilité est comme un instrument accordé aux grandes causes humaines. Quand il admire, méprise ou hait, c'est au nom de valeurs transcendantes : « la dignité de l'espèce humaine », « la gloire du monde ». Sa passion est désintéressée ; elle est suscitée par ce qui élève ou abaisse l'humanité en général. Le poète devient ainsi la voix de la conscience collective, et sa sensibilité individuelle est le canal par lequel s'exprime une vérité universelle sur le bien et le mal.
    \nExemple : Un poème de Victor Hugo dénonçant la misère des enfants (« Melancholia ») ou la tyrannie (« Les Châtiments ») illustre cette idée : la colère du poète n'est pas personnelle, elle est au service de la justice et de la compassion pour tous.`
  },
  // Question n°90
  {
    question: "Quelle est, selon la théorie constructiviste, la principale cause des différences observables dans l'expression des émotions d'une culture à l'autre ?",
    answers: [
      "Des différences dans les concepts, les valeurs et les pratiques sociales qui façonnent la manière de vivre et d'exprimer les situations émotionnelles.",
      "Des différences génétiques dans le système nerveux des populations.",
      "Des différences climatiques qui affectent le métabolisme."
    ],
    correct: 1,
    explanation: `Le constructivisme social explique la diversité des expressions émotionnelles non par la biologie, mais par la culture. Chaque société élabore un ensemble de « scripts » ou de « règles de sentiment » qui dictent, souvent de manière implicite, quelles émotions il est approprié de ressentir, dans quelles circonstances, avec quelle intensité, et comment les exprimer (par quels gestes, quels mots, quel contrôle). Un enfant apprend ces règles par socialisation. Ainsi, ce n'est pas que les Japonais et les Occidentaux ressentent exactement la même chose « à l'intérieur » et le cachent différemment ; c'est que leur culture leur a appris à catégoriser, à interpréter et à vivre la situation de « colère » de manières distinctes, qui incluent des expressions faciales différentes.
    \nExemple : Dans certaines cultures, l'expression publique de la tristesse (pleurs) est encouragée lors des funérailles ; dans d'autres, une retenue stoïque est valorisée.`
  },
  // Question n°91
  {
    question: "Comment définir le « vague à l'âme » lamartinien ?",
    answers: [
      "Une aspiration indéterminée au bonheur, un sentiment d'incomplétude et de nostalgie sans objet clair.",
      "Une angoisse précise et paralysante.",
      "Un état de grande excitation joyeuse."
    ],
    correct: 1,
    explanation: `Le « vague à l'âme » est une notion clé de la sensibilité romantique, particulièrement associée à Lamartine. Il ne s'agit pas d'une émotion définie (tristesse, joie), mais d'un état diffus, d'un sentiment d'inquiétude, de nostalgie, d'aspiration vers un idéal indéfinissable. L'âme est comme agitée par des « vagues » intérieures dont elle ne connaît pas la source ni la destination. C'est le sentiment d'un manque, d'une attente, d'une capacité de désir qui excède tous les objets concrets du monde. Ce « vague » est à la fois une souffrance (celle de l'insatisfaction permanente) et la marque d'une âme supérieure, trop grande pour se contenter des réalités terrestres.
    \nExemple : Le début du poème « L'Isolement » de Lamartine – « Souvent sur la montagne, à l'ombre du vieux chêne, / Je m'assieds au hasard, et je contemple en vain / (...) / Un vague et violent désir de choses inconnues » – est une parfaite illustration de ce « vague à l'âme ».`
  },
  // Question n°92
  {
    question: "Quel est le sens profond de l'expression « les passions sont des maladies de l'âme » ?",
    answers: [
      "Les passions perturbent l'ordre et la santé de l'âme en l'asservissant à un objet particulier et en l'éloignant de sa vocation rationnelle et vertueuse.",
      "Les passions sont causées par un déséquilibre des humeurs corporelles qui affecte l'âme.",
      "Les passions sont des états mentaux contagieux, comme les maladies physiques."
    ],
    correct: 1,
    explanation: `Cette métaphore médicale, utilisée déjà par les stoïciens et reprise par Kant (« la passion est une maladie »), exprime une condamnation morale et psychologique de la passion. Une âme en bonne santé est une âme gouvernée par la raison, libre, capable de juger sainement et de poursuivre le bien. La passion, en focalisant toute l'énergie de l'âme sur un seul objet (l'argent, la gloire, une personne), la déséquilibre. Elle crée une dépendance, une obsession, qui empêche l'âme de fonctionner selon sa nature rationnelle. Comme une maladie affaiblit le corps, la passion affaiblit et corrompt l'âme. Elle est une aliénation de soi.
    \nExemple : L'avare, selon Molière, est « malade » de sa passion pour l'or ; elle a déformé son jugement, ses sentiments, et l'isole de tout lien humain normal.`
  },
  // Question n°93
  {
    question: "En quoi l'art romantique est-il souvent un « art de plein air » ?",
    answers: [
      "Parce que la Nature est pour eux un refuge, un espace de liberté et d'imagination où ils peuvent déployer et consoler leur sensibilité.",
      "Parce que les romantiques peignaient exclusivement des paysages.",
      "Parce qu'ils rejetaient les ateliers comme des lieux conventionnels et bourgeois."
    ],
    correct: 1,
    explanation: `Cette expression signifie que les artistes romantiques ont souvent pratiqué leur art en dehors des ateliers, directement face au motif naturel. Mais au-delà de la technique, il y a une raison spirituelle profonde. La Nature n'est pas un simple modèle à copier ; elle est un sanctuaire où l'artiste va chercher l'inspiration, la solitude, et un écho à ses états d'âme. En peignant ou en écrivant en plein air, il cherche à capturer non seulement l'apparence des choses, mais l'atmosphère, le sentiment, l'émotion que le paysage lui inspire. La Nature est un partenaire actif dans la création, un « terrain de jeu » pour l'imagination et la sensibilité blessée de l'artiste, qui y trouve une consolation et une forme de libération.
    \nExemple : Les peintres de l'école de Barbizon, comme Théodore Rousseau, ont vécu et peint en forêt de Fontainebleau pour être au plus près de la nature et de ses moods changeants.`
  },
  // Question n°94
  {
    question: "Pourquoi affirmer que « la sensibilité nous confronte à ce à quoi nous sommes sensibles » ?",
    answers: [
      "Parce que notre univers sensoriel et notre manière d'interpréter les sensations sont liés à notre histoire personnelle et culturelle ; nous ne sommes pas sensibles de la même manière aux mêmes choses.",
      "Parce que nos sens nous donnent une image parfaite et objective de la réalité.",
      "Parce que si on n'est pas sensible à quelque chose, cela n'existe pas pour nous."
    ],
    correct: 1,
    explanation: `Cette phrase souligne le caractère actif et sélectif de la sensibilité. Être sensible, ce n'est pas être une éponge passive qui absorbe toutes les stimulations de l'environnement. C'est être réceptif à *certaines* choses, d'une *certaine* manière. Ce à quoi nous sommes sensibles (une musique, une odeur, un paysage) et la façon dont nous le percevons (comme beau, inquiétant, nostalgique) dépendent de notre éducation, de notre culture, de nos expériences passées, de notre humeur du moment. La sensibilité est donc un filtre à travers lequel nous rencontrons le monde ; elle constitue notre « monde vécu » personnel. Deux individus dans la même situation ne la vivront pas de la même manière, car leurs sensibilités sont différentes.
    \nExemple : Un ancien marin sera sensible au bruit et à l'odeur de la mer d'une manière différente (pleine de souvenirs, de significations) de quelqu'un qui la découvre pour la première fois.`
  },
  // Question n°95
  {
    question: "Quel est le rôle du « cocher » dans l'allégorie platonicienne de l'attelage ?",
    answers: [
      "Il représente la raison (λόγος), chargée de diriger et de harmoniser les deux chevaux pour conduire l'âme vers sa destination.",
      "Il représente les désirs charnels qui tirent l'âme vers le bas.",
      "Il représente l'instinct de survie et les besoins physiologiques."
    ],
    correct: 1,
    explanation: `Le cocher est la figure centrale de l'allégorie. Il symbolise la partie rationnelle de l'âme (le « logistikon »). Son rôle est essentiel et difficile : il doit tenir les rênes et conduire l'attelage. Cela signifie qu'il doit utiliser la raison pour maîtriser les deux forces pulsionnelles représentées par les chevaux. Il doit encourager et guider le cheval blanc (les sentiments nobles) et, surtout, contenir et dompter par la force (le « fouet ») le cheval noir rétif (les désirs désordonnés). Le cocher n'est pas un tyran qui écrase les chevaux ; sa tâche est de les harmoniser pour que l'attelage puisse avancer droit et, surtout, s'élever vers les hauteurs. Il représente l'idéal du gouvernement de soi par la raison.
    \nExemple : Dans une décision difficile, le « cocher » est la voix de la raison qui pèse le pour et le contre, essaie de calmer les pulsions immédiates (colère, peur) et de suivre le chemin jugé le meilleur à long terme.`
  },
  // Question n°96
  {
    question: "Comment définir « l'empathie » par distinction avec la simple « sympathie » ou « compassion » ?",
    answers: [
      "L'empathie est le fait de « souffrir à la place de » l'autre (se mettre à sa place), la sympathie/compassion est de « souffrir avec » lui.",
      "L'empathie est intellectuelle, la sympathie est émotionnelle.",
      "L'empathie est le fait de « souffrir avec » (côte à côte), la sympathie de « souffrir à la place de »."
    ],
    correct: 1,
    explanation: `Cette distinction étymologique et conceptuelle est souvent floue dans le langage courant. La sympathie (ou son équivalent latin, la compassion) signifie littéralement « souffrir avec » (<em>syn-pathos</em>). C'est le fait de partager la peine d'autrui, d'être ému par son sort, de compatir. L'empathie (<em>en-pathos</em>) signifie « souffrir dans », c'est-à-dire se mettre intérieurement à la place de l'autre, essayer de ressentir ce qu'il ressent, d'adopter son point de vue de l'intérieur. C'est un processus plus actif et plus profond d'identification. La question philosophique est de savoir si une telle identification totale est vraiment possible, ou si elle reste une projection de notre propre sensibilité.
    \nExemple : Un médecin peut avoir de la compassion (sympathie) pour la douleur de son patient, et tenter de comprendre son vécu (empathie) pour mieux le soigner, sans pour autant pouvoir littéralement « sentir » sa douleur.`
  },
  // Question n°97
  {
    question: "Que signifie l'idée, présente chez Schopenhauer et Freud, selon laquelle le sentiment serait « fictif » ?",
    answers: [
      "Que ce que nous prenons pour des sentiments authentiques (comme l'amour) ne sont que des rationalisations ou des déguisements de forces pulsionnelles inconscientes (désir sexuel, volonté de vivre).",
      "Que les sentiments n'existent pas du tout ; ce sont des inventions complètes.",
      "Que seuls les sentiments négatifs (haine, jalousie) sont réels, les sentiments positifs étant des illusions."
    ],
    correct: 1,
    explanation: `C'est la thèse « désenchantante » du vitalisme et de la psychanalyse. Schopenhauer et Freud, à des degrés divers, sont soupçonneux à l'égard des sentiments conscients. Ils estiment que notre vie psychique est gouvernée en profondeur par des forces irrationnelles et inconscientes (la Volonté chez Schopenhauer, les pulsions chez Freud). Le sentiment conscient (l'amour romantique, par exemple) serait une sorte de fiction que le moi se raconte pour justifier ou masquer ces forces obscures. Il ne serait pas la cause réelle de nos actes, mais un effet de surface, un alibi. Le sentiment est donc « fictif » non parce qu'il n'est pas ressenti, mais parce qu'il n'est pas la vérité profonde de notre être.
    \nExemple : Pour Freud, le sentiment amoureux intense pour une personne peut cacher (sublimer) un attachement infantile aux parents, dont le sujet n'a pas conscience.`
  },
  // Question n°98
  {
    question: "Pourquoi l'exemple de la personne morte de froid dans une chambre froide en panne est-il donné à propos de la thermoception ?",
    answers: [
      "Pour illustrer le dysfonctionnement de la thermoception : la personne n'a pas perçu la baisse mortelle de température, soit par insensibilité, soit parce que la perception a été faussée.",
      "Pour montrer que le froid tue.",
      "Pour démontrer la supériorité des instruments de mesure sur les sens humains."
    ],
    correct: 1,
    explanation: `Cet exemple tragique sert à montrer que la thermoception, comme les autres sens, peut nous tromper ou dysfonctionner, avec des conséquences graves. Une chambre froide en panne peut se réchauffer lentement puis, une fois réparée, redescendre brutalement en température. Une personne endormie ou occupée peut ne pas percevoir cette baisse progressive, ou la perception peut être confuse (on frissonne sans savoir pourquoi). Le sens de la température n'est pas un thermomètre parfait ; il peut être altéré par la fatigue, l'état de conscience, ou des conditions extrêmes. Cet exemple souligne que notre survie dépend de la fiabilité de nos sens, qui n'est pas absolue.
    \nExemple : Les hypothermies en montagne surviennent souvent parce que les alpinistes, fatigués et concentrés sur leur effort, ne perçoivent pas les signaux de froid extrême envoyés par leur corps jusqu'à ce qu'il soit trop tard.`
  },
  // Question n°99
  {
    question: "Quel est le sens de la phrase de Rousseau : « J’existe, et j’ai des sens par lesquels je suis affecté. Voilà la première vérité qui me frappe » ?",
    answers: [
      "La reconnaissance que l'existence et la sensibilité (le fait d'être affecté) sont les données les plus immédiates et certaines de la conscience, avant même la pensée rationnelle.",
      "Une vérité scientifique sur le fonctionnement des organes sensoriels.",
      "L'affirmation du solipsisme : seul moi et mes sensations existent."
    ],
    correct: 1,
    explanation: `Dans la « Profession de foi du vicaire savoyard », Rousseau cherche un fondement inébranlable à la connaissance, en réaction au doute cartésien. Il ne commence pas par « Je pense donc je suis », mais par une constatation plus immédiate et sensible. Avant même de me concevoir comme une « chose pensante », j'ai la certitude intime d'exister, et cette existence se manifeste d'abord par le fait d'être affecté, de sentir, d'éprouver des sensations (chaud, froid, plaisir, douleur). La sensibilité est donc posée comme le fondement premier de la conscience de soi et du rapport au monde. C'est une vérité qui « frappe », c'est-à-dire qui s'impose à moi avec une évidence immédiate, sans raisonnement.
    \nExemple : Si je me pince, la douleur que je ressens me donne une certitude immédiate et irréfutable de mon existence à cet instant, bien avant que je ne formule la pensée « j'existe ».`
  },
  // Question n°100
  {
    question: "Comment faut-il comprendre le débat entre « vitalisme » et « romantisme » concernant la sensibilité ?",
    answers: [
      "Comme deux pôles d'une tension irrésolue qui structure encore notre compréhension de la sensibilité : entre explication naturaliste (corps, pulsions) et valorisation subjective (moi, sentiments, spiritualité).",
      "Comme un débat dépassé, la science contemporaine ayant définitivement donné raison au vitalisme.",
      "Comme la preuve que le romantisme était une erreur sentimentale, corrigée par le sérieux des sciences humaines."
    ],
    correct: 1,
    explanation: `Le vitalisme (de Schopenhauer à certaines neurosciences) et le romantisme ne sont pas présentés comme des étapes historiques successives, mais comme deux paradigmes interprétatifs concurrents et toujours actuels. Le vitalisme tend à expliquer la sensibilité par des causes infrapersonnelles (biologiques, inconscientes), la « désenchantant ». Le romantisme, au contraire, valorise la subjectivité, l'intériorité, le vécu conscient, et voit dans la sensibilité la source de la créativité, de la spiritualité et de l'authenticité. Notre manière de nous comprendre nous-mêmes oscille encore aujourd'hui entre ces deux pôles : suis-je le jouet de mes hormones et de mes neurones, ou le sujet libre de mes sentiments et de mes choix ? Cette tension est constitutive de la condition humaine moderne.
    \nExemple : On peut expliquer la dépression par un déséquilibre chimique (vitalisme) tout en la vivant et en la traitant comme une expérience subjective de désespoir et de perte de sens qui nécessite une écoute et un récit (approche romantique/thérapeutique).`
  }
];