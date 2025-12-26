// ============================================
// DONNÉES GÉNÉRALES
// ============================================
const titre = "QUIZ HLP 1ère - l'autorité de la parole";
const sousTitre = "100 questions";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE (Synthèse)
// ============================================
const philosophyData = {
  texte: `L'autorité de la parole ne se réduit pas au pouvoir de la force. Elle oscille entre l'<em>auctoritas</em> (autorité fondée sur la tradition et l'origine) et la <em>potestas</em> (puissance de contrainte). Des paroles patriarcales aux discours charismatiques, des mythes fondateurs aux énoncés performatifs, cette séquence explore comment la parole peut fonder, légitimer ou subvertir l'ordre social. Elle interroge ce qui fait qu'une parole « fait autorité » : est-ce la personne qui la profère, la tradition qui la porte, ou la vérité qu'elle énonce ?`,
  source: "synthèse des enjeux de la séquence"
};

// ============================================
// QUESTIONS DU QUIZ (1 à 100)
// ============================================
const questions = [
  // Question n°1
  {
    question: "Quelle distinction fondamentale permet d'analyser le concept d'autorité ?",
    answers: [
      "Autorité naturelle et autorité acquise",
      "Autorité personnelle et autorité institutionnelle",
      "Autorité traditionnelle et puissance de contrainte"
    ],
    correct: 3,
    explanation: `La distinction centrale est entre l'<em>auctoritas</em> (autorité fondée sur la tradition, l'origine, le prestige) et la <em>potestas</em> (puissance de contrainte, pouvoir de commandement). L'<em>auctoritas</em> renvoie à une légitimité héritée du passé, à un poids symbolique. La <em>potestas</em> désigne l'exercice effectif du pouvoir, la capacité à imposer sa volonté. Cette distinction, héritée de la pensée politique romaine, permet de comprendre qu'une parole peut "faire autorité" sans pour autant détenir le pouvoir coercitif.\nExemple : Un grand professeur émérite a de l'<em>auctoritas</em> dans son domaine, même s'il n'a plus de <em>potestas</em> administrative.`
  },
  // Question n°2
  {
    question: "Que signifie étymologiquement le terme grec ἐξουσία, traduit par 'autorité' ?",
    answers: [
      "Ce qui provient de l'essence",
      "La force persuasive",
      "Le commandement absolu"
    ],
    correct: 1,
    explanation: `Le mot grec ἐξουσία se décompose en ἐκ (origine, provenance) et ουσία (substance, essence, bien). Étymologiquement, il désigne donc quelque chose dont on hérite, qui provient de la substance ou de l'essence. Cette origine souligne que l'autorité, dans la conception grecque, est liée à une légitimité qui vient du fond de l'être ou d'un héritage, plutôt qu'à une simple fonction ou à une force immédiate.\nExemple : L'autorité du père de famille dans la Grèce antique découlait de sa position substantielle comme chef de l'<em>oikos</em> (maisonnée).`
  },
  // Question n°3
  {
    question: "Comment Cicéron, dans <em>De Legibus</em>, distingue-t-il l'autorité du pouvoir ?",
    answers: [
      "L'autorité appartient au peuple, le pouvoir au Sénat",
      "L'autorité et le pouvoir sont concentrés dans les mains du consul",
      "Le pouvoir réside dans le peuple, l'autorité appartient au Sénat"
    ],
    correct: 3,
    explanation: `Cicéron énonce : "Tandis que le pouvoir réside dans le peuple, l'autorité appartient au sénat". Cette formule résume la conception républicaine romaine de la répartition des pouvoirs. Le peuple (<em>populus</em>) détient la souveraineté et le pouvoir de voter les lois (<em>potestas</em>). Le Sénat, assemblée des anciens et des hommes prestigieux, détient l'<em>auctoritas</em> : son avis, son prestige, son poids moral orientent et légitiment les décisions sans les commander directement.\nExemple : Une loi votée par les comices populaires acquérait une légitimité renforcée si elle recevait l'approbation (l'<em>auctoritas</em>) du Sénat.`
  },
  // Question n°4
  {
    question: "Quelle est la distinction établie par Max Weber entre 'puissance' (<em>Macht</em>) et 'domination' (<em>Herrschaft</em>) ?",
    answers: [
      "La puissance est la possibilité d'imposer sa volonté, la domination est une autorité institutionnalisée",
      "La puissance est légitime, la domination est illégitime",
      "La puissance est collective, la domination est individuelle"
    ],
    correct: 1,
    explanation: `Max Weber définit la puissance (<em>Macht</em>) comme "toute chance de faire triompher au sein d'une relation sociale sa propre volonté, même contre des résistances". C'est un rapport de force contingente. La domination (<em>Herrschaft</em>) est "la chance de trouver des personnes déterminables prêtes à obéir à un ordre de contenu déterminé". Elle implique une légitimité reconnue, une institutionnalisation qui rend l'obéissance quasi-automatique. La domination se rapproche ainsi de la notion d'autorité légitime.\nExemple : Un chef de bande a de la puissance sur ses hommes ; un juge exerce une domination légale-rationnelle.`
  },
  // Question n°5
  {
    question: "Dans l'<em>Odyssée</em>, comment Télémaque justifie-t-il son ordre à Pénélope de se retirer dans ses appartements ?",
    answers: [
      "En affirmant que parler appartient aux hommes",
      "Par son statut de futur roi",
      "En invoquant la volonté des dieux"
    ],
    correct: 1,
    explanation: `Face à Pénélope qui demande à l'aède de cesser de chanter les malheurs d'Ulysse, Télémaque, son fils, l'interrompt et lui ordonne de se retirer, déclarant : "Le soin de parler appartient aux hommes, et surtout à moi qui règne dans ce palais". Cette scène illustre l'autorité patriarcale dans la société homérique : la parole publique, politique et décisionnelle est l'apanage des hommes, en particulier du maître de maison. Pénélope, bien que reine, doit s'incliner devant la parole masculine de son fils devenu adulte.\nExemple : Cette scène fonde symboliquement le passage de l'autorité d'Ulysse (absent) à son fils Télémaque.`
  },
  // Question n°6
  {
    question: "Quel concept décrit l'autorité qui repose sur les qualités extraordinaires (réelles ou supposées) d'un individu ?",
    answers: [
      "Autorité traditionnelle",
      "Autorité légale-rationnelle",
      "Autorité charismatique"
    ],
    correct: 3,
    explanation: `L'autorité charismatique, selon Max Weber, est celle qui s'appuie sur la dévotion extraordinaire que suscite une personne en raison de ses qualités héroïques, exemplaires ou divinement inspirées. Le charisme (χάρισμα, "don de grâce") n'est pas tant une qualité objective qu'une croyance collective dans les pouvoirs exceptionnels du leader. Cette autorité est souvent instable et personnelle, contrairement aux autorités traditionnelle ou légale-rationnelle qui sont institutionnalisées.\nExemple : Les prophètes religieux, les leaders révolutionnaires ou certains chefs politiques populistes exercent une autorité charismatique.`
  },
  // Question n°7
  {
    question: "Que signifie l'expression 'dissonance cognitive' dans l'analyse des rapports à l'autorité ?",
    answers: [
      "Le conflit entre deux sources d'autorité",
      "La tendance à justifier une situation subie",
      "L'incapacité à comprendre les ordres"
    ],
    correct: 2,
    explanation: `La dissonance cognitive est un concept de psychologie sociale qui décrit l'inconfort mental ressenti lorsqu'une personne détient deux croyances, attitudes ou comportements contradictoires. Face à une autorité imposée et inchangeable, l'individu a tendance à modifier son attitude (son "avis sur la situation") pour la justifier et réduire la dissonance, plutôt que de maintenir une opinion critique qui le mettrait en conflit permanent avec une réalité immuable.\nExemple : Une victime de violence peut finir par justifier ou minimiser les actes de son agresseur pour réduire la dissonance entre la souffrance subie et l'impuissance à y échapper.`
  },
  // Question n°8
  {
    question: "Quelle est la principale conclusion de l'expérience de Milgram sur la soumission à l'autorité ?",
    answers: [
      "Seuls les individus malveillants obéissent à des ordres immoraux",
      "L'obéissance dépend exclusivement de la personnalité des individus",
      "Une majorité d'individus ordinaires peut obéir à une autorité perçue comme légitime"
    ],
    correct: 3,
    explanation: `L'expérience de Stanley Milgram (1961-1963) démontre que, dans un cadre institutionnel perçu comme légitime (un laboratoire universitaire), une proportion alarmante de participants ordinaires (environ 65%) est prête à administrer des décharges électriques potentiellement mortelles à un tiers, sur l'ordre d'une autorité scientifique. Cette expérience révèle la puissance de la situation et de l'autorité institutionnelle sur le comportement individuel, pouvant surpasser les inhibitions morales personnelles.\nExemple : L'adaptation télévisée française "Le Jeu de la Mort" (2010) a reproduit ces résultats, montrant que l'autorité d'une animatrice de télévision pouvait obtenir des taux de soumission encore plus élevés.`
  },
  // Question n°9
  {
    question: "Selon Hannah Arendt, quel est le fondement de l'autorité (<em>auctoritas</em>) dans la Rome antique ?",
    answers: [
      "La force militaire",
      "L'origine sacrée de sa fondation",
      "La richesse économique"
    ],
    correct: 2,
    explanation: `Hannah Arendt, dans <em>Qu'est-ce que l'autorité ?</em>, explique que l'<em>auctoritas</em> romaine dérive de la fondation sacrée de Rome. Les actes présents tirent leur légitimité en étant « ajoutés », pour ainsi dire, au poids entier du passé fondateur. L'autorité n'est pas la force (<em>potestas</em>) mais ce qui « augmente » (de <em>augere</em>) et confirme les actions humaines en les reliant à un commencement sacré. Les dieux et le Sénat avaient de l'<em>auctoritas</em> : ils augmentaient et validaient, mais ne commandaient pas directement.\nExemple : L'approbation du Sénat (son <em>auctoritas</em>) « augmentait » la valeur et la légitimité d'une décision prise par les magistrats.`
  },
  // Question n°10
  {
    question: "Quelle caractéristique définit principalement un 'mythe' par rapport à une légende ou une fable ?",
    answers: [
      "Il est historiquement attesté",
      "Il comporte toujours des éléments merveilleux",
      "Il met en scène des êtres symboliques"
    ],
    correct: 3,
    explanation: `Un mythe est un récit traditionnel et fabuleux qui met en scène des êtres (dieux, héros, forces naturelles) incarnant sous une forme symbolique des aspects fondamentaux de la condition humaine, du monde ou de la société. Contrairement à la légende (qui peut s'appuyer sur un fond historique) ou à la fable (qui a une morale explicite), le mythe propose une explication symbolique et fondatrice. Il répond aux grandes questions existentielles (origine du monde, du mal, de l'amour) et fonde des pratiques sociales.\nExemple : Le mythe de Prométhée explique l'origine du feu et de la technique humaine, ainsi que la condition de l'homme, partagé entre l'immortalité des dieux et la mortalité des bêtes.`
  },
  // Question n°11
  {
    question: "Quel est l'enjeu principal du mythe de Gygès, rapporté par Platon dans <em>La République</em> ?",
    answers: [
      "L'enjeu de la supériorité de la monarchie par rapport à la démocratie",
      "L'enjeu de l'importance de la richesse pour le bonheur",
      "L'enjeu de savoir si la vertu naît de la peur de la punition"
    ],
    correct: 3,
    explanation: `Le mythe de Gygès raconte l'histoire d'un berger qui trouve un anneau lui conférant l'invisibilité. Devenu impunissable, il séduit la reine, tue le roi et s'empare du trône. Platon utilise ce mythe pour poser une question fondamentale à la morale : un homme qui pourrait commettre l'injustice en toute impunité le ferait-il ? L'histoire suggère que oui. L'enjeu est de savoir si la justice est choisie pour elle-même ou seulement par crainte des conséquences. Socrate devra ensuite défendre, par la raison, que la justice est préférable en soi.\nExemple : La question posée par le mythe est : "Que feriez-vous si vous étiez sûr de ne jamais être découvert ?"`
  },
  // Question n°12
  {
    question: "Quelle est la fonction de la parole symbolique selon l'analyse anthropologique de Claude Lévi-Strauss ?",
    answers: [
      "Transmettre des informations pratiques",
      "Divertir la communauté",
      "Réparer symboliquement un désordre"
    ],
    correct: 3,
    explanation: `Claude Lévi-Strauss développe le concept d'"efficacité symbolique". À travers l'exemple du chaman qui guérit une femme en difficulté d'accouchement en racontant un mythe, il montre que la parole symbolique opère une "substitution" : elle transpose un trouble physiologique (corporel) dans un registre mythico-social compréhensible et manipulable par la collectivité. En donnant un sens social au mal individuel, le rituel verbal permet une réorganisation psychique et sociale qui peut avoir des effets thérapeutiques concrets. La parole fait le pont entre l'individu et le groupe.\nExemple : Le mythe raconté par le chaman fait de l'utérus de la femme le théâtre d'une lutte entre esprits, lutte que le chaman peut résoudre par sa parole, apaisant ainsi les contractions désordonnées.`
  },
  // Question n°13
  {
    question: "Dans la Genèse, quel pouvoir particulier est attribué à la parole de Dieu lors de la Création ?",
    answers: [
      "Elle fait advenir ce qu'elle nomme",
      "Elle décrit ce qui existe déjà",
      "Elle persuade les anges d'obéir"
    ],
    correct: 1,
    explanation: `Le récit de la Création dans la Genèse présente une parole performative à l'état pur. Dieu dit : "Que la lumière soit ! Et la lumière fut." Sa parole n'est pas descriptive mais créatrice : l'énonciation même fait advenir l'être désigné. Ensuite, il nomme les choses ("Dieu appela la lumière jour"), instituant par le langage l'ordre du monde. Cette parole fondatrice est le modèle absolu d'une autorité qui agit par la seule vertu de son énonciation, sans intermédiaire ni résistance possible.\nExemple : "Que la terre produise de la verdure" : l'ordre divin produit immédiatement son effet dans la réalité.`
  },
  // Question n°14
  {
    question: "Quel terme, repris par Martin Heidegger, désigne la vérité comme 'dévoilement' plutôt que comme adéquation ?",
    answers: [
      "<em>Logos</em> (λόγος)",
      "<em>Epistémè</em> (ἐπιστήμη)",
      "<em>Alètheia</em> (ἀλήθεια)"
    ],
    correct: 3,
    explanation: `Heidegger renoue avec le sens originel du mot grec ἀλήθεια (<em>alètheia</em>), formé du α- privatif et de λήθης (oubli, caché). La vérité n'est donc pas d'abord une correspondance entre un jugement et un fait, mais un "dé-voilement", un "arrachement à l'oubli". La parole poétique authentique, selon Heidegger, a cette fonction alèthique : elle ne décrit pas le monde, elle le dévoile, fait apparaître l'être des choses dans leur présence nue et essentielle.\nExemple : Pour Heidegger, un poème de Hölderlin ne parle pas "sur" les dieux, il fait advenir leur absence ou leur retrait dans la parole, les dévoilant comme retrait.`
  },
  // Question n°15
  {
    question: "Que signifie l'expression 'parole performative', développée par le philosophe John L. Austin ?",
    answers: [
      "Une parole particulièrement théâtrale",
      "Une parole qui persuade efficacement",
      "Une parole qui est en soi une action"
    ],
    correct: 3,
    explanation: `Dans <em>Quand dire, c'est faire</em>, Austin distingue les énoncés constatifs (qui décrivent un état de choses et peuvent être vrais ou faux) des énoncés performatifs. Un performatif est un énoncé qui, prononcé dans les conditions appropriées (contextuelles, institutionnelles, intentionnelles), accomplit l'action qu'il désigne. Dire, c'est faire. Ces énoncés sont au cœur de l'autorité discursive, car ils transforment la réalité sociale par la parole seule.\nExemple : "Je vous déclare mari et femme" (par un maire), "Je promets", "Je nomme", "Je parie" sont des performatifs.`
  },
  // Question n°16
  {
    question: "Dans la fable 'Le Loup et l'Agneau' (Ésope/La Fontaine), quelle est la fonction de la parole du loup ?",
    answers: [
      "Chercher un compromis",
      "Instruire moralement l'agneau",
      "Légitimer par avance la violence"
    ],
    correct: 3,
    explanation: `Le loup, décidé à dévorer l'agneau, invente successivement des prétextes ("tu troubles mon eau", "tu as insulté mon père l'an passé"). L'agneau réfute chaque accusation avec des arguments logiques et factuels. La parole du loup n'a donc pas pour but un dialogue authentique ou la recherche de la vérité, mais de donner une apparence de justification à son acte de violence. Elle sert à légitimer l'injustifiable, à masquer la loi du plus fort sous un semblant de droit. La morale est que face à celui qui veut abuser de sa force, la raison est impuissante.\nExemple : Le loup conclut : "Quelle que soit ta facilité à te justifier, je ne t'en mangerai pas moins", révélant la vacuité de son propre discours.`
  },
  // Question n°17
  {
    question: "Quelle distinction Kant établit-il dans son texte sur les Lumières entre les ordres courants et l'ordre du seul maître qui autorise à raisonner ?",
    answers: [
      "L'officier, le financier et le prêtre disent « Ne raisonnez pas, obéissez ! »",
      "Tous les maîtres disent « Raisonnez autant que vous voudrez, mais obéissez ! »",
      "L'officier dit « Raisonnez ! », le financier « Payez ! », le prêtre « Croyez ! »"
    ],
    correct: 1,
    explanation: `Kant dénonce les limitations de la liberté de penser imposées par différentes autorités sociales : l'officier (« Ne raisonnez pas, exécutez !"), le financier ("Ne raisonnez pas, payez !"), le prêtre ("Ne raisonnez pas, croyez !"). Face à cela, il fait exception : "Il n'y a qu'un seul maître au monde qui dise 'Raisonnez autant que vous voudrez et sur tout ce que vous voudrez, mais obéissez !'". Ce maître est le souverain légitime (Frédéric II de Prusse selon Kant). La formule paradoxale "Raisonnez mais obéissez" distingue la liberté de pensée (publique) de l'obéissance civile nécessaire.\nExemple : Un citoyen peut discuter publiquement des défauts d'une loi (raisonner), mais doit lui obéir tant qu'elle est en vigueur.`
  },
  // Question n°18
  {
    question: "Quel est le principal argument utilisé par Dominique de Villepin dans son discours à l'ONU (2003) pour s'opposer à la guerre en Irak ?",
    answers: [
      "La nécessité de laisser plus de temps aux inspections",
      "La faiblesse militaire de la France",
      "L'alliance historique avec Saddam Hussein"
    ],
    correct: 1,
    explanation: `Dans son célèbre discours, Dominique de Villepin utilise un discours délibératif pour exhorter à la paix et dissuader de l'intervention militaire. Son argument central est que la menace n'est pas assez avérée, immédiate et massive pour justifier un recours immédiat à la force. Il plaide pour donner du temps aux inspecteurs de l'ONU et pour privilégier la voie diplomatique et du désarmement contrôlé. Il en appelle à la responsabilité historique et à la sagesse ("un vieux pays... qui a connu les guerres, l'occupation, la barbarie") pour choisir la voie de la paix et de l'unité internationale.\nExemple : "Rien... ne sera le fait de la précipitation, de l'incompréhension, de la suspicion ou de la peur."`
  },
  // Question n°19
  {
    question: "Que signifie étymologiquement le mot 'poésie', issu du grec ποιεῖν (<em>poiein</em>) ?",
    answers: [
      "Faire",
      "Chanter",
      "Rêver"
    ],
    correct: 1,
    explanation: `Le mot "poésie" vient du verbe grec ποιεῖν (<em>poiein</em>), qui signifie "faire", "créer", "fabriquer". Le poète (ποιητής) est donc un "faiseur", un créateur. Son matériau n'est pas la pierre ou l'argile, mais le langage. Cette étymologie souligne la dimension active, voire artisanale, de la parole poétique : elle ne se contente pas de décrire le monde, elle le refait, le recrée par les mots, donnant forme à une réalité nouvelle ou rendant visible l'essence des choses.\nExemple : Pour Mallarmé, dire "une fleur" en poésie, c'est faire advenir "l'absente de tous bouquets", l'Idée pure de la fleur.`
  },
  // Question n°20
  {
    question: "Comment Stéphane Mallarmé définit-il le projet de la poésie dans <em>Crise de vers</em> ?",
    answers: [
      "Exprimer les sentiments personnels du poète",
      "Décrire la nature avec précision",
      "Transposer un fait de nature"
    ],
    correct: 3,
    explanation: `Mallarmé écrit : "A quoi bon la merveille de transposer un fait de nature en sa presque disparition vibratoire selon le jeu de la parole, cependant, si ce n'est pour qu'en émane, sans la gêne d'un proche ou concret rappel, la notion pure ?" La poésie ne cherche pas à copier ou décrire le monde sensible (la "fleur" concrète). Elle opère une "transposition" qui fait disparaître l'apparence immédiate pour faire surgir, par le jeu des mots et des sons, l'Idée ou l'essence pure de la chose. La parole poétique vise l'intelligible, non le visible.\nExemple : Le poème "Le vierge, le vivace et le bel aujourd'hui..." ne décrit pas un cygne, mais évoque l'idée de pureté, de blancheur et d'impuissance créatrice.`
  },
  // Question n°21
  {
    question: "Quelle est la critique majeure que Socrate (Platon) adresse à l'écriture dans le <em>Phèdre</em> ?",
    answers: [
      "Elle fixe la parole vivante, la rend muette et orpheline",
      "Elle est trop chère et réservée aux riches",
      "Elle est incapable de transmettre des connaissances complexes"
    ],
    correct: 1,
    explanation: `À travers le mythe de Theuth, Socrate présente l'écriture comme un φάρμακον (remède/poison). Elle donne aux hommes "la présomption qu'ils ont la science, non la science elle-même". L'écrit est une parole morte, figée, qui "roule partout" et ne sait pas à qui parler. Il ne peut répondre aux questions, se défendre, s'adapter. Elle affaiblit la vraie mémoire (intérieure) et produit des "savants imaginaires" (<em>doxosophoi</em>). Seule la parole dialogique, vivante, inscrite dans l'âme de l'apprenant, est capable de vérité.\nExemple : Un livre reste toujours silencieux face aux questions du lecteur, contrairement à un maître dans un dialogue.`
  },
  // Question n°22
  {
    question: "Selon Pierre Bourdieu, quelle est la fonction du 'pouvoir symbolique' de la parole ?",
    answers: [
      "Communiquer des informations neutres",
      "Produire des représentations du monde social",
      "Amuser et divertir"
    ],
    correct: 2,
    explanation: `Dans <em>Ce que parler veut dire</em>, Bourdieu analyse le langage comme un instrument de pouvoir symbolique. La parole n'est pas un simple moyen de communication neutre. Elle "vise à produire et à imposer des représentations (mentales, verbales, graphiques ou théâtrales) du monde social qui soient capables d'agir sur ce monde en agissant sur les représentations que s'en font les agents". Parler, c'est exercer un pouvoir de nomination, de catégorisation, qui structure la perception de la réalité et contribue à la maintenir ou à la transformer.\nExemple : Les discours politiques qui définissent qui est "français", "immigré", "intégré" participent à construire la réalité sociale qu'ils prétendent décrire.`
  },
  // Question n°23
  {
    question: "Quel est le sens de la célèbre formule de Pascal : 'La justice sans la force est impuissante, la force sans la justice est tyrannique' ?",
    answers: [
      "La justice et la force sont inconciliables",
      "Il faut toujours préférer la force à la justice",
      "L'idéal est d'unir la justice et la force"
    ],
    correct: 3,
    explanation: `Pascal expose ici le dilemme tragique du politique. D'un côté, une justice (le droit, la légitimité) qui n'a pas la force pour s'imposer est vaine, contournée par les méchants. De l'autre, une force (la puissance, la coercition) qui n'est pas guidée par la justice n'est qu'arbitraire et tyrannie. L'idéal serait de "mettre ensemble la justice et la force". Mais Pascal constate amèrement que dans la réalité, "ne pouvant faire que ce qui est juste fût fort, on a fait que ce qui est fort fût juste". La force finit par se donner à elle-même l'apparence de la justice.\nExemple : Un gouvernement légitime mais faible peut être renversé ; une dictature forte se donne des lois pour paraître juste.`
  },
  // Question n°24
  {
    question: "Que signifie le concept d'« internalité » dans l'analyse de la soumission à l'autorité (expériences type Milgram) ?",
    answers: [
      "Le fait de garder ses pensées pour soi",
      "L'obéissance due à une conviction intime",
      "La tendance à attribuer les événements à des causes internes"
    ],
    correct: 3,
    explanation: `L'internalité est un trait de personnalité qui consiste à attribuer la responsabilité des événements (succès, échecs) à des causes internes (ses propres efforts, capacités) plutôt qu'externes (la chance, les autres, le système). Dans les répliques de l'expérience de Milgram, il a été observé que les participants ayant un score élevé d'internalité administraient en moyenne des chocs électriques plus forts. Cela peut s'expliquer par le fait que les "internes", souvent bien intégrés socialement, adhèrent plus fortement aux normes et à l'autorité institutionnelle, qu'ils perçoivent comme légitime et à laquelle ils se soumettent.\nExemple : Un "interne" pensera : "J'obéis parce que c'est mon devoir dans cette expérience scientifique", un "externe" pensera : "C'est l'expérimentateur qui est responsable, pas moi".`
  },
  // Question n°25
  {
    question: "Quelle est la caractéristique de l'autorité 'traditionnelle' selon la typologie de Max Weber ?",
    answers: [
      "Elle repose sur la croyance en la sainteté des ordres et des pouvoirs de commandement existant de tout temps",
      "Elle repose sur la croyance en la légalité des règles établies",
      "Elle repose sur la dévotion envers la sainteté, la valeur héroïque ou le caractère exemplaire d'une personne"
    ],
    correct: 1,
    explanation: `L'autorité traditionnelle, selon Weber, trouve sa légitimité dans « la croyance en la sainteté des ordres et des pouvoirs de commandement existant de tout temps ». On obéit au chef, au roi, au père parce que "cela a toujours été ainsi", parce que la coutume et la tradition ont sanctifié cette position. L'autorité est héréditaire ou transmise selon des règles immémoriales. Son modèle est la monarchie de droit divin ou le patriarcat familial.\nExemple : L'autorité du roi Louis XIV découlait de la tradition monarchique et du sacre religieux, bien plus que de ses qualités personnelles ou d'une constitution.`
  },
  // Question n°26
  {
    question: "Quel rôle joue la parole dans le contrat social selon Rousseau ?",
    answers: [
      "Elle est l'instrument de la tromperie des puissants",
      "Elle est inutile, seul le pacte tacite importe",
      "Chacun aliène sa liberté naturelle à la volonté générale"
    ],
    correct: 3,
    explanation: `Pour Rousseau, le contrat social est l'acte fondateur par lequel des individus isolés deviennent un peuple. Cet acte est essentiellement verbal/discursif : "Chacun de nous met en commun sa personne et toute sa puissance sous la suprême direction de la volonté générale". La parole performative du pacte ("nous contractons") fait advenir une nouvelle réalité politique. Elle transforme la liberté naturelle (faire tout ce qu'on peut) en liberté civile (obéir à la loi qu'on s'est prescrite). L'autorité légitime émane ainsi de cette parole collective fondatrice.\nExemple : La Déclaration des droits de l'homme et du citoyen de 1789 est une parole performative qui institue un nouvel ordre politique fondé sur la souveraineté nationale.`
  },
  // Question n°27
  {
    question: "Que désigne le terme 'oint' (Christ, Messie) dans le contexte de la légitimation du pouvoir monarchique ?",
    answers: [
      "Celui qui est élu par Dieu",
      "Le guerrier le plus fort",
      "Le plus sage du royaume"
    ],
    correct: 1,
    explanation: `L'"oint" (du latin "<em>unctus</em>", "oint") traduit les termes hébreu "messie" et grec "<em>christos</em>". Il désigne celui qui a reçu l'onction d'huile sacrée, signe de son élection et de sa consécration par Dieu. Dans la monarchie de droit divin (notamment en France avec le sacre à Reims), le roi est "l'oint du Seigneur". Cette onction lui confère une autorité (<em>auctoritas</em>) sacrée, qui dépasse sa personne physique. Il incarne ainsi une double nature, à l'image du Christ : un corps mortel et un corps politique immortel (théorie des "deux corps du roi" étudiée par Kantorowicz).\nExemple : Le roi de France était réputé guérir les écrouelles (scrofules) par son toucher, pouvoir thaumaturgique lié à son onction sacrée.`
  },
  // Question n°28
  {
    question: "Quelle est la fonction principale du 'serment' dans l'accès à une fonction (médecin, président, etc.) ?",
    answers: [
      "Créer un engagement solennel",
      "Rassurer l'opinion publique",
      "Satisfaire une formalité administrative"
    ],
    correct: 1,
    explanation: `Le serment est un énoncé performatif par excellence. En prononçant la formule ("Je jure..."), l'individu accomplit l'acte de s'engager solennellement. Cet engagement a une double portée : morale (il lie la conscience de la personne) et souvent juridique (sa violation peut entraîner des sanctions). Le serment institue une autorité déléguée (celle du médecin, du président) et en même temps la soumet à des règles supérieures (la Constitution, l'éthique). Il marque le passage d'un statut privé à un statut public investi d'autorité.\nExemple : Le serment d'Hippocrate engage le médecin envers ses patients et la profession ; le serment présidentiel engage le chef de l'État envers la Constitution.`
  },
  // Question n°29
  {
    question: "Dans l'Exode, comment Dieu répond-il à l'objection de Moïse qui se dit 'lent à la parole' pour convaincre Pharaon ?",
    answers: [
      "Il lui donne un porte-parole, son frère Aaron",
      "Il lui apprend l'éloquence par un miracle",
      "Il renonce à l'envoyer"
    ],
    correct: 1,
    explanation: `Moïse, choisi par Dieu pour libérer les Hébreux, objecte : "Je ne suis pas un homme doué pour parler... j'ai la bouche et la langue embarrassées". Dieu répond d'abord en affirmant sa souveraineté sur les facultés humaines : "Qui a donné une bouche à l'homme ? ... N'est-ce pas moi, l'Éternel ?". Puis, face à l'insistance de Moïse, il lui délègue une partie de son autorité prophétique en lui donnant Aaron comme porte-parole : "Tu lui parleras et tu mettras les paroles dans sa bouche, et moi, je serai avec ta bouche et avec sa bouche". L'autorité de la parole divine peut ainsi se déléguer et s'incarner dans une chaîne de transmission.\nExemple : Aaron deviendra le "prophète" de Moïse, transmettant ses paroles à Pharaon avec éloquence.`
  },
  // Question n°30
  {
    question: "Que signifie l'expression 'parole déviante' dans le contexte de la critique socratique ?",
    answers: [
      "Une parole prononcée par un marginal",
      "Une parole grammaticalement incorrecte",
      "Une parole qui s'écarte de la recherche de la vérité"
    ],
    correct: 3,
    explanation: `Pour Socrate/Platon, une parole est "déviante" lorsqu'elle dévie de sa fin propre, qui est la recherche de la vérité (<em>alètheia</em>) et du bien. C'est le cas de la rhétorique sophistique, qui vise à persuader coûte que coûte, indépendamment du vrai ; de l'écriture, qui fige et appauvrit la pensée vivante ; du sérieux pompeux, qui masque l'ignorance sous des apparences savantes. Face à ces déviances, Socrate oppose la parole philosophique : dialogique, ironique, aporétique, toujours en quête, incarnée dans une relation vivante avec l'interlocuteur.\nExemple : Les discours flatteurs des sophistes auprès des jeunes aristocrates sont des paroles déviantes car ils visent à plaire et à gagner de l'argent, non à éveiller à la vérité.`
  },
  // Question n°31
  {
    question: "Comment Pierre Clastres caractérise-t-il la parole du chef dans les sociétés primitives qu'il étudie ?",
    answers: [
      "Elle est secrète et réservée aux initiés",
      "Elle est un ordre impératif et coercitif",
      "Elle est prolixe sans dire rien de nouveau"
    ],
    correct: 3,
    explanation: `Dans <em>La société contre l'État</em>, l'ethnologue Pierre Clastres observe que dans les sociétés amazoniennes, le chef a l'obligation de parler longuement. Mais cette parole n'est pas un commandement. Elle consiste "pour l'essentiel, en une célébration, maintes fois répétée, des normes de vie traditionnelles". Le chef ne dit "littéralement... rien" de nouveau ; il ne crée pas la loi, il la récite. Son autorité n'est pas un pouvoir de décision, mais une fonction de rappel et d'incarnation du consensus communautaire. La parole du chef maintient la cohésion sociale en réaffirmant ce que tout le monde sait déjà.\nExemple : Le chef prononce des discours lors des fêtes pour rappeler les mythes fondateurs et les règles du groupe, sans les modifier.`
  },
  // Question n°32
  {
    question: "Quel est le sens de la formule de Carl Schmitt : 'Le Führer protège le droit' ?",
    answers: [
      "L'action du Führer est la justice qui crée le droit",
      "Le chef a pour devoir de faire respecter les lois existantes",
      "Le chef est soumis à la loi comme tout le monde"
    ],
    correct: 1,
    explanation: `Carl Schmitt, théoricien du droit nazi, justifie ici les purges de la Nuit des Longs Couteaux (1934). Il affirme que "l'action du Führer était juridictionnelle. Elle n'est donc pas soumise à l'organisation judiciaire, mais elle est elle-même la justice suprême." Dans cette conception totalitaire, la parole/volonté du chef fait loi et justice immédiatement, sans médiation d'institutions indépendantes. Le Führer n'applique pas un droit préexistant ; son action souveraine crée le droit dans l'instant. C'est l'apogée d'une autorité personnelle et charismatique absorbant en elle toute légitimité.\nExemple : Hitler, en ordonnant l'exécution de ses opposants SA, ne violait pas la loi ; sa décision était la loi.`
  },
  // Question n°33
  {
    question: "Quelle est la différence entre 'mythe', 'légende' et 'fable' selon les définitions retenues ?",
    answers: [
      "Le mythe est grec, la légende est médiévale, la fable est moderne",
      "Le mythe est vrai, la légende est fausse, la fable est morale",
      "Le mythe explique symboliquement, la légende amplifie un fond historique, la fable enseigne une morale explicite"
    ],
    correct: 3,
    explanation: `Le mythe est un récit symbolique sur les origines, les dieux ou la condition humaine, fondateur pour une culture. La légende (du latin "<em>legenda</em>", "ce qui doit être lu") est un récit populaire traditionnel qui peut s'appuyer sur un fond historique réel, mais amplifié et merveilleux. La fable est un récit bref, souvent animalier, comportant une morale explicite à la fin. Le mythe vise à donner du sens, la légende à glorifier ou émerveiller, la fable à instruire moralement.\nExemple : Le mythe d'Œdipe explore la destinée et la faute ; la légende du roi Arthur mêle histoire et merveilleux ; la fable "Le Corbeau et le Renard" enseigne à se méfier de la flatterie.`
  },
  // Question n°34
  {
    question: "Que signifie l'expression 'parole utopique' au sens étymologique strict ?",
    answers: [
      "Une parole qui décrit une société parfaite",
      "Une parole idéaliste",
      "Une parole sans lieu propre"
    ],
    correct: 3,
    explanation: `Utopique vient du grec οὐ-τόπος (<em>ou-topos</em>), qui signifie "sans lieu". Une parole utopique est donc, au sens premier, une parole qui n'a pas de lieu institutionnel assigné, qui échappe aux cadres établis du discours (tribunal, assemblée, chaire, média). Elle est par essence marginale, subversive, déplacée. La parole authentique du philosophe, du poète ou du prophète est souvent utopique en ce sens : elle surgit hors des lieux prévus, dérange l'ordre discursif établi. Ce n'est que secondairement qu'"utopique" a pris le sens de "chimérique".\nExemple : Socrate parlait sur l'agora, dans la rue, hors des institutions scolaires ou politiques officielles ; sa parole était utopique.`
  },
  // Question n°35
  {
    question: "Quel rôle joue le 'silence' dans l'analyse de la prise de parole ?",
    answers: [
      "Il est toujours un signe de soumission ou d'impuissance",
      "Il doit être absolument combattu pour que la liberté d'expression règne",
      "Il est l'arrière-plan d'où émerge la parole"
    ],
    correct: 3,
    explanation: `Le silence n'est pas le simple contraire ou l'absence de parole. Il en est la condition de possibilité : comme le blanc du papier permet l'écriture, le silence est l'espace de résonance où la parole prend sens. De plus, le silence peut être lui-même une parole éloquente : silence de refus, de mépris, de recueillement, de complicité. Dans un débat, savoir se taire au bon moment est une stratégie rhétorique. Parler, c'est aussi savoir laisser des silences. La "minute de silence" est une parole collective non verbale.\nExemple : Le silence obstiné d'un accusé face à un juge est une parole de défi ou de protection.`
  },
  // Question n°36
  {
    question: "Que signifie le concept d'<em>efficacité symbolique</em> développé par Claude Lévi-Strauss ?",
    answers: [
      "L'effet magique des mots",
      "L'impact persuasif des figures de style",
      "La capacité à produire des effets réels"
    ],
    correct: 3,
    explanation: `L'efficacité symbolique désigne le pouvoir qu'ont certains discours rituels ou mythiques de produire des effets concrets (comme une guérison) non par magie, mais en opérant une réorganisation symbolique. En transposant un trouble physiologique individuel (une maladie) dans le langage mythique partagé par la collectivité, le chaman donne un sens social à ce trouble. Ce réencadrement symbolique permet au malade de réintégrer son expérience dans un ordre compréhensible, ce qui peut déclencher des processus psychosomatiques de guérison. La parole agit comme un opérateur de transformation du sens.\nExemple : Le chant du chaman décrit la lutte des esprits dans le corps de la femme ; cette narration "met en ordre" le chaos de la douleur et facilite l'accouchement.`
  },
  // Question n°37
  {
    question: "Comment Hannah Arendt définit-elle la relation entre autorité et tradition ?",
    answers: [
      "L'autorité est l'ennemie de la tradition",
      "La tradition fonde et est gardienne de l'autorité",
      "L'autorité et la tradition n'ont aucun lien nécessaire"
    ],
    correct: 2,
    explanation: `Pour Arendt, l'autorité (au sens romain d'<em>auctoritas</em>) est inextricablement liée à la tradition et à la fondation. L'autorité du Sénat romain venait de ce qu'il était le gardien et le continuateur de l'acte fondateur de Rome. L'autorité "augmente" le présent en le reliant constamment au passé fondateur. Dans le monde moderne, la crise de l'autorité est, selon Arendt, une crise de la tradition : le fil qui reliait le présent à l'origine s'est rompu. Sans tradition vivante, l'autorité dégénère en violence pure (<em>potestas</em>) ou en persuasion.\nExemple : L'autorité d'un professeur peut venir en partie de sa position dans une longue tradition de transmission du savoir, qu'il incarne et perpétue.`
  },
  // Question n°38
  {
    question: "Que signifie l'affirmation selon laquelle la parole poétique est une 'parole gratuite' ?",
    answers: [
      "Elle ne coûte rien à produire",
      "Elle est souvent offerte au public",
      "Elle n'a pas d'autre fin qu'elle-même"
    ],
    correct: 3,
    explanation: `La parole poétique est dite "gratuite" au sens où elle n'est pas soumise à une finalité extérieure. Elle ne vise pas à informer, convaincre, vendre, ordonner ou divertir (du moins pas comme fin principale). Elle est à elle-même sa propre fin : elle existe pour le plaisir du langage, pour la révélation de l'être, pour la beauté. Cette gratuité la distingue radicalement de la "parole de communication" utilitaire et en fait une forme de résistance à la réduction de la parole à un simple instrument.\nExemple : Un poème de René Char ne "sert" à rien d'utile ; il est un acte de langage pur, une offrande à la langue elle-même.`
  },
  // Question n°39
  {
    question: "Quelle est la caractéristique d'une 'parole testimoniale' ?",
    answers: [
      "Elle atteste d'un fait objectif et vérifiable",
      "Elle est prononcée devant un tribunal",
      "Elle engage celui qui parle"
    ],
    correct: 3,
    explanation: `Une parole testimoniale est une parole qui fait acte de témoignage. Celui qui parle ("je témoigne que...") s'engage personnellement dans son énonciation. Il certifie, par sa présence et son intégrité, la véracité de ce qu'il rapporte (une expérience, un événement vécu, une conviction). Cette parole est incarnée : sa force vient de l'identification entre le locuteur et son discours. Elle s'oppose à la parole anonyme, détachée, ou purement informative. Le témoignage fonde une autorité particulière, celle de l'expérience directe.\nExemple : Le témoignage d'une rescapée d'Auschwitz a une autorité morale et historique que n'a pas un manuel d'histoire, car elle incarne dans sa parole la mémoire vive de l'événement.`
  },
  // Question n°40
  {
    question: "Comment Démosthène, dans la <em>Première Philippique</em>, cherche-t-il à exhorter les Athéniens à l'action ?",
    answers: [
      "En piquant leur orgueil",
      "En les flattant sur leur puissance passée",
      "En leur promettant des richesses"
    ],
    correct: 1,
    explanation: `Démosthène utilise un discours délibératif pour exhorter ses concitoyens à se préparer à la guerre contre Philippe de Macédoine. Sa stratégie est de provoquer la honte et de réveiller la fierté athénienne. Il les apostrophe avec véhémence : "Quand est-ce que vous ferez ce que demande le salut de l'État ?" Il raille leur passivité ("vous demander les uns aux autres : Qu'y a-t-il de nouveau ?") et leur fait comprendre que leur inaction est la cause même de la puissance de Philippe. L'autorité de sa parole vient de sa clairvoyance politique et de son ardent patriotisme.\nExemple : "Philippe est-il mort ? ... Et que vous importe qu'il soit mort ou vivant ? puisque, s'il n'existait plus, vous vous feriez bientôt à vous-mêmes un autre Philippe, en gardant toujours la même conduite."`
  },
  // Question n°41
  {
    question: "Que signifie l'expression 'parole d'engagement' dans le contexte politique ?",
    answers: [
      "Un discours détaillé",
      "Un contrat écrit",
      "Une promesse publique"
    ],
    correct: 3,
    explanation: `Une parole d'engagement est une promesse publique par laquelle un individu (souvent un homme politique) s'engage à faire ou à être quelque chose dans le futur. Cette parole performative crée une attente chez les auditeurs et engage la responsabilité, la crédibilité et l'honneur de celui qui parle. Le fait de "donner sa parole" crée un lien moral. Si la promesse n'est pas tenue, c'est la confiance et l'autorité du locuteur qui sont atteintes. Dans l'ère médiatique, cet engagement est souvent renforcé par des formules comme "je vous le dis les yeux dans les yeux".\nExemple : Un candidat qui promet "Je ne fermerai pas telle usine" engage sa parole ; s'il la ferme une fois élu, il perd en crédibilité et en autorité morale.`
  },
  // Question n°42
  {
    question: "Quelle est la différence entre 'universel' et 'général' selon les définitions données ?",
    answers: [
      "L'universel est abstrait, le général est concret",
      "L'universel vaut pour tous, le général vaut pour la plupart",
      "L'universel est quantitatif, le général est qualitatif"
    ],
    correct: 2,
    explanation: `L'universel (du latin "<em>universus</em>", "tout entier") désigne ce qui s'applique nécessairement à tous les individus d'une catégorie, sans exception possible. C'est le registre de la loi logique, mathématique ou morale rationnelle (ex: "Tous les hommes sont mortels"). Le général désigne ce qui est vrai pour la majorité, le plus souvent, mais admet des exceptions. C'est le registre statistique et empirique (ex: "Les chats n'aiment pas l'eau" – mais certains si). Une loi juste aspire à l'universalité ; une coutume est générale.\nExemple : Le droit à la vie est un principe universel des droits de l'homme ; la mode vestimentaire est un phénomène général dans une société.`
  },
  // Question n°43
  {
    question: "Comment Machiavel justifie-t-il, dans <em>Le Prince</em>, qu'il vaut mieux être craint qu'aimé ?",
    answers: [
      "Parce que les hommes sont naturellement méchants et ne méritent pas l'amour",
      "Parce que l'amour est un lien versatile et la crainte du châtiment est plus stable",
      "Parce que la crainte est moralement beaucoup plus noble que l'amour"
    ],
    correct: 2,
    explanation: `Machiavel, dans un calcul purement pragmatique de conservation du pouvoir, argue que "l'amour tient par un lien de reconnaissance bien faible pour la perversité humaine, et qui cède au moindre motif d'intérêt personnel ; au lieu que la crainte résulte de la menace du châtiment, et cette peur ne s'évanouit jamais." Pour lui, l'autorité du prince doit reposer sur une crainte calculée : assez forte pour assurer l'obéissance, mais pas au point de provoquer la haine et la révolte. C'est une vision cynique de l'autorité comme <em>potestas</em> (puissance de contrainte) dénuée de légitimité morale (<em>auctoritas</em>).\nExemple : Un prince qui est seulement aimé risque d'être abandonné en cas de crise ; un prince craint mais pas haï peut compter sur l'obéissance par intérêt.`
  },
  // Question n°44
  {
    question: "Quel est le sens de la formule de l'apôtre Paul : 'Toute autorité vient de Dieu' (Romains 13:1) ?",
    answers: [
      "Le pouvoir politique a été voulu par Dieu et mérite donc obéissance",
      "Les détenteurs du pouvoir sont toujours des saints",
      "Seul un roi chrétien a une autorité légitime"
    ],
    correct: 1,
    explanation: `Dans un contexte où les premières communautés chrétiennes sont minoritaires dans l'Empire romain, Paul exhorte à l'obéissance civile : "Que chacun se soumette aux autorités qui nous gouvernent, car toute autorité vient de Dieu, et celles qui existent ont été établies par Dieu." Cette thèse fonde la doctrine de l'origine divine du pouvoir politique, quelle que soit la personne du détenteur. Elle légitime l'ordre établi et dissuade la révolte, tout en subordonnant ultimement le pouvoir temporel à Dieu. Cette idée sera centrale pour la théorie médiévale des "deux glaives" et la monarchie de droit divin.\nExemple : Même l'empereur Néron, persécuteur des chrétiens, tire son autorité de Dieu, selon cette lecture, ce qui impose (jusqu'à un certain point) l'obéissance.`
  },
  // Question n°45
  {
    question: "Que signifie le concept de 'domination légale-rationnelle' chez Max Weber ?",
    answers: [
      "La domination par la force de la loi",
      "L'obéissance à un leader charismatique qui promulgue des lois",
      "La croyance en la légalité des règles établies"
    ],
    correct: 3,
    explanation: `La domination légale-rationnelle est le troisième type de légitimité identifié par Weber. Elle repose sur "la croyance en la légalité des règlements arrêtés et du droit de donner des directives qu'ont ceux qui sont appelés à exercer la domination par ces moyens". On n'obéit pas à une personne, mais à la loi impersonnelle et à la fonction qu'elle incarne. C'est le modèle de l'État moderne bureaucratique, de l'administration, de l'entreprise. L'autorité y est dépersonnalisée, procédurale et limitée par des règles.\nExemple : On obéit à un agent de police ou à un chef de service non pas à titre personnel, mais parce qu'ils représentent et appliquent la loi ou le règlement intérieur.`
  },
  // Question n°46
  {
    question: "Quelle est la fonction de la 'parole fondatrice' ?",
    answers: [
      "Annoncer un programme politique",
      "Faire l'éloge des fondateurs",
      "Instituer une nouvelle réalité"
    ],
    correct: 3,
    explanation: `Une parole est fondatrice lorsqu'elle fait advenir, par sa seule énonciation performative, une entité nouvelle. Elle brise la continuité et inaugure un ordre différent. C'est la parole qui institue : "Nous, peuple des États-Unis..." (Constitution américaine), "Je fonde la République" (déclaration), "Je vous baptise...". Cette parole a une autorité originaire ; elle est l'acte de naissance symbolique. Elle crée le cadre à l'intérieur duquel d'autres paroles (lois, décisions) pourront ensuite avoir sens et autorité.\nExemple : Le "<em>Fiat lux</em>" de la Genèse est la parole fondatrice du cosmos ; la Déclaration d'Indépendance des États-Unis est la parole fondatrice de la nation américaine.`
  },
  // Question n°47
  {
    question: "Que signifie l'expression 'parole ironique' dans la méthode socratique ?",
    answers: [
      "Une parole qui dit le contraire de ce qu'elle pense pour tromper",
      "Une parole moqueuse et méprisante",
      "Une parole qui feint l'ignorance pour révéler celle de l'autre"
    ],
    correct: 3,
    explanation: `L'ironie socratique (είρωνεία, <em>eirôneia</em>) est une attitude discursive fondamentale de Socrate. Il feint l'ignorance ("Je sais que je ne sais rien"), pose des questions naïves, et se déclare l'élève de son interlocuteur. Cette feinte a un but pédagogique et dialectique : elle pousse l'interlocuteur, souvent présomptueux de son savoir, à exposer ses opinions. Socrate peut alors, par un questionnement serré, révéler les contradictions de ces opinions. L'ironie n'est pas méchante mais stratégique : elle déstabilise les certitudes non fondées pour ouvrir la voie à une recherche authentique.\nExemple : Socrate demande à un général : "Qu'est-ce que le courage ?" et, feignant d'admirer sa réponse, l'amène à se contredire, montrant qu'il ne sait pas vraiment ce qu'est le courage.`
  },
  // Question n°48
  {
    question: "Comment le mythe des androgynes (Platon, <em>Le Banquet</em>) explique-t-il l'origine de l'amour ?",
    answers: [
      "L'amour est le désir de retrouver notre moitié",
      "L'amour est une punition des dieux",
      "L'amour est une invention des poètes"
    ],
    correct: 1,
    explanation: `Selon le mythe raconté par Aristophane dans <em>Le Banquet</em>, les humains étaient à l'origine des êtres ronds et doubles (androgyne, masculin-masculin, féminin-féminin). Par orgueil, ils tentèrent d'escalader l'Olympe. Zeus les coupa en deux pour les affaiblir. Depuis, chaque moitié erre à la recherche de sa moitié originelle, et c'est ce désir de fusion qui est l'amour (Éros). L'amour est donc "l'aspiration à l'antique nature", l'effort pour "guérir la nature humaine" et retrouver l'unité perdue. Le mythe explique la puissance et la nostalgie du sentiment amoureux.\nExemple : "Nous sommes devenus deux ; aussi chacun cherche sa moitié." Cette explication symbolique rend compte de l'intensité du désir d'union.`
  },
  // Question n°49
  {
    question: "Que signifie la 'délégation d'autorité' dans l'exemple biblique de Moïse et Aaron ?",
    answers: [
      "Le transfert complet du pouvoir à un subordonné",
      "La renonciation à son propre discours",
      "La transmission d'une parole autorisée"
    ],
    correct: 3,
    explanation: `Moïse, investi par Dieu, délègue à son frère Aaron la fonction de porte-parole. Dieu dit : "Tu lui parleras et tu mettras les paroles dans sa bouche, et moi, je serai avec ta bouche et avec sa bouche". Aaron ne parle pas en son nom propre ; il est la "bouche" de Moïse, qui lui-même est le représentant de Dieu. L'autorité de la parole d'Aaron dérive entièrement de cette chaîne de délégation. Sa parole est performative parce qu'elle est investie de l'autorité divine qu'il transmet. C'est le modèle des prophètes et, en politique, des ambassadeurs ou porte-parole officiels.\nExemple : Un ambassadeur qui déclare : "Mon gouvernement exige..." parle avec l'autorité de l'État qu'il représente, non en son nom personnel.`
  },
  // Question n°50
  {
    question: "Quel est l'enjeu du 'serment d'allégeance' dans les relations féodales ?",
    answers: [
      "Un acte performatif hiérarchique",
      "Un simple formulaire juridique",
      "Une promesse d'amitié"
    ],
    correct: 1,
    explanation: `Le serment féodal (l'hommage) est un acte solennel de parole qui institue la relation vassalique. Le vassal place ses mains entre celles du seigneur et dit : "Je deviens votre homme". Le seigneur lui donne l'accolade et parfois un objet symbolique (un fief). Par ces paroles et gestes, le vassal s'engage à la fidélité et au service (<em>auxilium</em> et <em>consilium</em>) ; le seigneur s'engage à la protection et à l'entretien. L'autorité du seigneur sur le vassal naît de cet échange performatif. C'est une autorité personnelle, contractuelle et sacralisée par le serment.\nExemple : Cet acte de parole crée la pyramide féodale, fondement de l'ordre politique médiéval, distinct à la fois de la parenté et de l'État moderne.`
  },
  // Question n°51
  {
    question: "Quelle est la caractéristique d'une 'parole prophétique' ?",
    answers: [
      "Elle utilise un langage codé et obscur",
      "Elle prédit l'avenir avec exactitude",
      "Elle dénonce les injustices"
    ],
    correct: 3,
    explanation: `La parole prophétique (dans les traditions biblique et coranique notamment) n'est pas principalement divinatoire. Le prophète (<em>nabi</em> en hébreu) est un "porte-parole" de Dieu. Sa parole est une interpellation vigoureuse adressée au peuple et aux puissants, dénonçant l'idolâtrie, l'injustice sociale, l'hypocrisie religieuse, et appelant à un retour à l'Alliance (la Torah). Elle annonce des malheurs (châtiments) si l'on ne se convertit pas. L'autorité du prophète vient de sa conviction d'être mandaté par Dieu, non d'une institution. Sa parole est souvent en conflit avec l'autorité établie (rois, prêtres).\nExemple : Le prophète Amos tonne : "Je hais, je méprise vos fêtes... Mais que le droit coule comme l'eau, et la justice comme un torrent intarissable !" (Amos 5, 21-24).`
  },
  // Question n°52
  {
    question: "Comment la parole de l'oracle (comme la Pythie à Delphes) était-elle considérée dans l'Antiquité ?",
    answers: [
      "Comme une parole humaine éclairée",
      "Comme une supercherie des prêtres",
      "Comme une parole divine énigmatique"
    ],
    correct: 3,
    explanation: `La Pythie, assise sur un trépied au-dessus d'une faille d'où émanaient des vapeurs, prononçait des paroles incohérentes sous l'effet d'une possession divine (par Apollon). Ces paroles étaient ensuite transcrites et versifiées par les prêtres en réponses souvent ambiguës. L'oracle ne donnait pas des ordres clairs, mais des énigmes à interpréter. Son autorité était immense : on le consultait pour les décisions cruciales (fondation de colonies, déclarations de guerre). La parole oraculaire était performative : elle validait ou invalidait un projet, mais laissait à l'homme la responsabilité de l'interpréter correctement.\nExemple : L'oracle dit à Crésus : "Si tu traverses le fleuve Halys, tu détruiras un grand empire." Crésus interprète qu'il détruira l'empire perse ; c'est le sien qui sera détruit.`
  },
  // Question n°53
  {
    question: "Que signifie le concept de « violence symbolique » développé par Pierre Bourdieu ?",
    answers: [
      "Les insultes et le harcèlement verbal",
      "L'imposition de schèmes de perception",
      "La violence physique légitimée par le discours"
    ],
    correct: 2,
    explanation: `La violence symbolique est une forme de violence douce, invisible, qui s'exerce avec la complicité inconsciente de ceux qui la subissent. C'est l'imposition, par les dominants (via l'école, les médias, le langage courant), de catégories de pensée, de goûts, de normes qui font apparaître l'ordre social comme naturel, évident, juste. Cette violence est "symbolique" car elle passe par les symboles (les mots, les images, les rites). Elle est d'autant plus efficace qu'elle n'est pas perçue comme violence mais comme culture légitime.\nExemple : Le système scolaire qui valorise la culture "légitime" (littérature classique, art muséal) et dévalorise implicitement les cultures populaires exerce une violence symbolique en inculquant un sentiment d'illégitimité aux enfants des milieux populaires.`
  },
  // Question n°54
  {
    question: "Comment le 'silence de Dieu' (<em>deus absconditus</em>) est-il interprété dans la théologie et la littérature ?",
    answers: [
      "Comme un désintérêt de Dieu pour les affaires humaines",
      "Comme une parole en creux qu'il faut apprendre à écouter",
      "Comme une preuve de son inexistence"
    ],
    correct: 2,
    explanation: `Le silence de Dieu, surtout face à la souffrance (comme dans le Livre de Job ou pendant la Shoah), constitue une énigme majeure pour la foi. Il n'est pas nécessairement interprété comme une absence, mais souvent comme une présence cachée, un retrait, une parole qui se tait pour laisser place à la liberté humaine ou pour inviter à une écoute plus profonde. Ce silence peut être une épreuve qui purifie la foi de ses attentes magiques. Dans la littérature moderne, il devient parfois le signe de l'absurdité du monde (Camus).\nExemple : Le cri du Christ sur la croix, "Mon Dieu, mon Dieu, pourquoi m'as-tu abandonné ?", est l'expression paroxystique de cette expérience du silence de Dieu.`
  },
  // Question n°55
  {
    question: "Quelle est la fonction de la <em>parole de conciliation</em> ou de médiation ?",
    answers: [
      "Désigner un coupable",
      "Imposer un compromis par la force",
      "Rétablir la communication dans un conflit"
    ],
    correct: 3,
    explanation: `La parole de conciliation (diplomatique, judiciaire, familiale) a pour fonction de rétablir un lien rompu par le conflit. Le médiateur n'est pas un juge qui impose une solution, mais un tiers qui facilite la réouverture du dialogue. Sa parole cherche à faire entendre les positions de chacun, à désamorcer les malentendus, à reformuler les enjeux, et à aider les parties à trouver elles-mêmes un terrain d'entente. L'autorité du médiateur vient de sa neutralité, de son écoute et de son habileté à faire émerger une parole commune.\nExemple : Un médiateur familial aide des parents divorcés à trouver un accord sur la garde des enfants en les amenant à dépasser leurs griefs pour se recentrer sur l'intérêt de l'enfant.`
  },
  // Question n°56
  {
    question: "Que signifie l'expression « parole performative malheureuse » chez Austin ?",
    answers: [
      "Un performatif prononcé avec une mauvaise intention",
      "Un performatif qui échoue",
      "Une parole qui rend triste"
    ],
    correct: 2,
    explanation: `Austin appelle « infélicités » (<em>infelicities</em>) les échecs d'un énoncé performatif. Pour qu'un performatif réussisse (« Je te promets », « Je te baptise »), certaines conditions doivent être remplies : des procédures conventionnelles existantes, des participants et des circonstances appropriés, une exécution correcte et complète, et des intentions sincères. Si une de ces conditions fait défaut, le performatif est « malheureux » (<em>infelicitous</em>) : il n'accomplit pas l'action. Ex: dire « Je te baptise » à un chat, ou « Je vous déclare mari et femme » sans être maire.\nExemple : Un faux médecin qui dit « Je vous opère » ne réalise pas une opération médicale légitime ; le performatif échoue (il est « nul »).`
  },
  // Question n°57
  {
    question: "Comment le concept de « parole vive » s'oppose-t-il à celui de « parole morte » ?",
    answers: [
      "La parole vive est poétique, la parole morte est scientifique",
      "La parole vive est criée, la parole morte est chuchotée",
      "La parole vive est dialogique, la parole morte est fixée"
    ],
    correct: 3,
    explanation: `La « parole vive » est celle de la communication orale en présence, du dialogue, de l'enseignement interactif. Elle est vivante parce qu'elle peut s'adapter à l'interlocuteur, répondre à ses objections, se moduler selon les réactions. La « parole morte » est celle de l'écrit figé, du discours enregistré, du slogan répété. Elle est morte parce qu'elle est détachée de son auteur, qu'elle dit toujours la même chose et ne peut répondre. Pour Platon, la philosophie ne peut se faire que dans la parole vive ; l'écriture n'est qu'un simulacre mort.\nExemple : Une conversation entre un maître et son élève est une parole vive ; le manuel scolaire est une parole morte (mais utile).`
  },
  // Question n°58
  {
    question: "Quel rôle joue la <em>parole d'exhortation</em> dans les discours militaires ou politiques ?",
    answers: [
      "Dénoncer les erreurs du passé",
      "Susciter l'engagement dans l'action",
      "Analyser froidement une situation"
    ],
    correct: 2,
    explanation: `La parole d'exhortation (du latin "<em>exhortari</em>", encourager) est un sous-genre du discours délibératif. Elle vise à élever les esprits, à galvaniser les énergies, à pousser à l'action collective. Elle utilise massivement le pathos (appel aux émotions nobles : honneur, courage, fraternité, patriotisme), mais aussi l'ethos (crédibilité du leader) et le logos (arguments sur la nécessité ou la justice de la cause). Son autorité vient de sa capacité à créer une communion émotionnelle et une volonté commune.\nExemple : Le discours de Winston Churchill : "Nous nous battrons sur les plages... nous ne nous rendrons jamais" est une exhortation à la résistance face au nazisme.`
  },
  // Question n°59
  {
    question: "Que signifie l'affirmation <em>la parole est un acte</em> dans la philosophie du langage ?",
    answers: [
      "Il faut agir et non parler",
      "Parler nécessite un effort physique",
      "Toute énonciation est une action"
    ],
    correct: 3,
    explanation: `Contre une conception purement représentationnelle du langage (les mots décrivent le monde), la philosophie du langage du XXe siècle (Austin, Wittgenstein, Searle) a montré que "parler, c'est faire". Tout énoncé est une action : questionner, promettre, ordonner, insulter, baptiser, etc. Ces "actes de langage" modifient les relations entre les personnes, créent des obligations, des statuts, des réalités sociales. L'autorité de la parole réside précisément dans ce pouvoir d'agir sur le monde par les mots, et non seulement de le décrire.\nExemple : Dire "Je m'excuse" n'est pas décrire une excuse, c'est accomplir l'acte de s'excuser.`
  },
  // Question n°60
  {
    question: "Comment la <em>parole judiciaire</em> (du juge) exerce-t-elle son autorité ?",
    answers: [
      "Par la puissance performative de l'institution",
      "Par la force des arguments logiques seulement",
      "Par la persuasion émotionnelle des jurés"
    ],
    correct: 1,
    explanation: `La parole du juge est l'archétype de la parole performative institutionnelle. En prononçant la formule "Au nom du peuple français, la cour condamne..." ou "Le tribunal déclare...", le juge ne décrit pas une sanction, il l'institue. Cette parole a une force contraignante immédiate (<em>potestas</em>) parce qu'elle s'appuie sur l'autorité (<em>auctoritas</em>) de l'institution judiciaire et de la loi qu'elle représente. La solennité du rituel (robe, formules, décorum) renforce le caractère performatif de l'énoncé.\nExemple : La phrase "La cour vous condamne à cinq ans de prison" crée immédiatement l'obligation pour l'État d'incarcérer le condamné.`
  },
  // Question n°61
  {
    question: "Quelle est la caractéristique d'une <em>parole sacramentelle</em> dans les religions ?",
    answers: [
      "Elle est réservée aux prêtres",
      "Elle est incompréhensible aux laïcs",
      "Elle est performative par elle-même"
    ],
    correct: 3,
    explanation: `Dans les religions chrétiennes (notamment catholique et orthodoxe), les sacrements sont des signes sensibles institués par le Christ qui donnent la grâce. La parole qui les accompagne est essentielle et performative : elle ne décrit pas, elle agit. "Je te baptise", "Ceci est mon corps", "Je te pardonne tes péchés" – ces paroles, prononcées par le ministre avec l'intention requise et sur la matière appropriée, sont censées réaliser ce qu'elles disent, grâce à l'action de Dieu. L'autorité de cette parole vient à la fois de l'institution ecclésiale et de la promesse divine.\nExemple : Lors de l'Eucharistie, les paroles de la consécration ("Ceci est mon corps") transsubstantient, selon la doctrine, le pain en corps du Christ.`
  },
  // Question n°62
  {
    question: "Que signifie le concept de <em>parole aliénée</em> ou <em>aliénante</em> ?",
    answers: [
      "Une parole qui isole socialement",
      "Une parole prononcée dans une langue étrangère",
      "Une parole qui ne vient pas de celui qui parle"
    ],
    correct: 3,
    explanation: `Une parole est aliénée (ou aliénante) lorsqu'elle est subie plutôt qu'appropriée, lorsqu'elle exprime non la pensée personnelle de celui qui parle, mais des idées reçues, des slogans, un discours dominant intériorisé. L'individu parle avec des mots qui ne sont pas vraiment les siens, il se fait le porte-parole inconscient d'une idéologie ou d'un pouvoir. Cette parole peut aussi aliéner autrui en le maintenant dans la dépendance ou l'illusion. La critique de la parole aliénée est au cœur des pensées de Marx (idéologie), d'Ellul (parole anonyme) et de la psychanalyse (discours de l'Autre).\nExemple : Un employé qui répète sans distance critique le discours managérial de son entreprise ("Il faut être flexible, compétitif...") profère une parole aliénée.`
  },
  // Question n°63
  {
    question: "Comment la <em>parole proverbiale</em> ou de <em>sagesse populaire</em> exerce-t-elle son autorité ?",
    answers: [
      "Par la preuve scientifique apportée",
      "Par le poids de la tradition",
      "Par la force de la loi"
    ],
    correct: 2,
    explanation: `Les proverbes (« pierre qui roule n'amasse pas mousse », « l'habit ne fait pas le moine »...) sont des énoncés brefs, anonymes, traditionnels, qui prétendent énoncer une vérité générale sur la vie humaine. Leur autorité vient de leur ancienneté, de leur caractère supposé immémorial, et de la concision percutante de la formule. Ils condensent une prétendue sagesse collective, une expérience millénaire. On les cite pour clore une discussion, donner un conseil, ou justifier une action. Leur force persuasive tient à leur évidence apparente et à leur poids culturel.\nExemple : Invoquer « qui vole un œuf vole un bœuf » pour justifier une punition sévère pour un petit larcin, en s'appuyant sur l'autorité de la sagesse populaire.`
  },
  // Question n°64
  {
    question: "Quelle est la fonction de la <em>parole rituelle</em> dans les cérémonies ?",
    answers: [
      "Expliquer le sens du rituel",
      "Répéter des formules fixes",
      "Improviser selon l'inspiration"
    ],
    correct: 2,
    explanation: `La parole rituelle (liturgique, magique, cérémonielle) est caractérisée par sa fixité. Les formules doivent être répétées à l'identique, avec les bons mots, le bon ton, le bon ordre. Cette invariance garantit l'efficacité symbolique du rituel et son lien avec la tradition. En disant exactement ce qui a toujours été dit, on actualise le passé fondateur et on assure la continuité de l'ordre cosmique ou social. L'autorité de cette parole vient de sa fidélité à l'origine et de son pouvoir présumé de maintenir ou de restaurer l'harmonie.\nExemple : Les prières de la messe catholique, les formules du mariage civil ("Je déclare unis par les liens du mariage..."), les incantations d'un rituel magique doivent suivre un texte précis.`
  },
  // Question n°65
  {
    question: "Que signifie l'expression <em>prendre la parole</em> au-delà du simple fait de parler ?",
    answers: [
      "Parler à un niveau sonore très fort",
      "S'emparer physiquement d'un microphone",
      "Accéder à un espace public d'énonciation"
    ],
    correct: 3,
    explanation: `« Prendre la parole » est une expression performative qui désigne l'acte par lequel un individu ou un groupe s'inscrit dans l'espace public du discours, revendiquant le droit d'être écouté et de participer à la délibération commune. Cela suppose de franchir une barrière (timidité, exclusion sociale, censure). Dans un débat, "prendre la parole" c'est obtenir un tour de parole, une légitimité momentanée à s'exprimer. C'est un acte souvent politique, car il implique une redistribution de l'autorité discursive.\nExemple : Lors des États généraux de 1789, le Tiers État "prend la parole" en rédigeant des cahiers de doléances et en s'auto-proclamant Assemblée nationale, contestant le monopole de la parole royale.`
  },
  // Question n°66
  {
    question: "Comment la <em>parole d'aveu</em> fonctionne-t-elle dans les relations de pouvoir (Foucault) ?",
    answers: [
      "Elle libère toujours celui qui avoue",
      "Elle est un dialogue entre égaux",
      "Elle assujetit celui qui avoue"
    ],
    correct: 3,
    explanation: `Michel Foucault, dans <em>Histoire de la sexualité</em>, analyse l'aveu comme un « rituel de discours » où « le sujet énonce la vérité sur lui-même ». Ce rituel est profondément lié au pouvoir : le pouvoir (religieux, judiciaire, psychiatrique, éducatif) exige, encourage, organise l'aveu. En se confessant, l'individu reconnaît l'autorité de celui qui l'écoute (prêtre, juge, psychanalyste) et produit une vérité sur lui-même qui sera l'objet d'un jugement, d'une absolution, d'un diagnostic. L'aveu est ainsi à la fois un acte de libération (parler de son secret) et d'assujettissement (se soumettre au cadre interprétatif du pouvoir).\nExemple : La confession catholique, l'interrogatoire policier, l'entretien d'embauche où l'on doit « se raconter » sont des situations d'aveu.`
  },
  // Question n°67
  {
    question: "Quel est le rôle de la <em>parole d'intercession</em> (prière de demande) ?",
    answers: [
      "Intercéder en faveur de quelqu'un",
      "Ordonner quelque chose à Dieu",
      "Converser d'égal à égal avec le divin"
    ],
    correct: 1,
    explanation: `La parole d'intercession est une prière par laquelle on demande à une puissance supérieure (dieu, saint, souverain) d'accorder une faveur à un tiers. En priant pour quelqu'un, on reconnaît à la fois l'autorité de l'intercesseur (le saint, le Christ) et celle de l'autorité ultime (Dieu). On se place en position de demande, de dépendance. Dans le domaine politique, l'intercession (un courtisan demandant une grâce au roi pour un ami) fonctionne sur le même modèle : elle renforce la structure hiérarchique en passant par les canaux reconnus.\nExemple : "Priez pour nous, pauvres pécheurs" (Ave Maria) est une intercession adressée à Marie pour qu'elle intercède elle-même auprès de Dieu.`
  },
  // Question n°68
  {
    question: "Que signifie l'expression <em>parole d'ordre</em> dans le vocabulaire politique et militaire ?",
    answers: [
      "Un désordre verbal",
      "L'organisation alphabétique des discours",
      "Un mot d'ordre qui sert à mobiliser"
    ],
    correct: 3,
    explanation: `Une <em>parole d'ordre</em> (ou mot d'ordre) est une formule brève, frappante, souvent impérative, qui condense une orientation politique, une revendication, un appel à l'action. "Liberté, Égalité, Fraternité", "<em>Proletarier aller Länder, vereinigt euch!</em>" ("Prolétaires de tous les pays, unissez-vous !"), "Yes we can". Ces paroles ont une fonction performative de mobilisation : elles créent une identité collective ("nous"), désignent un ennemi ou un objectif, et incitent à agir. Leur autorité vient de leur simplicité, de leur répétition, et du mouvement qu'elles incarnent.\nExemple : Le mot d'ordre "Grève générale !" lancé par un syndicat a pour but de déclencher l'arrêt du travail en créant un sentiment d'urgence et d'unité.`
  },
  // Question n°69
  {
    question: "Comment la <em>parole d'expert</em> (scientifique, technicien) fonde-t-elle son autorité ?",
    answers: [
      "Sur la force de ses convictions",
      "Sur la reconnaissance sociale",
      "Sur le charisme de l'expert"
    ],
    correct: 2,
    explanation: `La parole d'expert tire son autorité non de la personne (<em>ethos</em> charismatique) ni de la tradition, mais de la compétence technique ou scientifique socialement reconnue. On fait confiance au médecin, à l'ingénieur, à l'économiste parce qu'ils maîtrisent un savoir validé par des institutions (universités, diplômes, publications). Leur parole est censée être objective, fondée sur des preuves et des méthodes reproductibles (logos). Cette autorité est limitée à son domaine de compétence et peut être contestée par d'autres experts.\nExemple : On suit les recommandations sanitaires d'un épidémiologiste non parce qu'il est charismatique, mais parce qu'on croit en la validité des modèles scientifiques qu'il utilise.`
  },
  // Question n°70
  {
    question: "Quelle est la caractéristique d'une 'parole délibérative' au sens aristotélicien ?",
    answers: [
      "Elle juge le passé",
      "Elle fait l'éloge ou le blâme du présent",
      "Elle délibère sur l'avenir"
    ],
    correct: 3,
    explanation: `Le discours délibératif, selon Aristote, a pour objet l'avenir : il vise à exhorter (pousser à faire) ou à dissuader (pousser à ne pas faire). Il se prononce dans les assemblées politiques. Sa finalité est l'utile (ou le nuisible) pour la cité. Il s'oppose au discours judiciaire (focalisé sur le passé, le juste/injuste) et au discours épidictique (focalisé sur le présent, l'honorable/honteux). L'autorité de l'orateur délibératif repose sur sa sagesse pratique (<em>phronésis</em>), sa connaissance des affaires de la cité et sa capacité à envisager les conséquences.\nExemple : Un discours parlementaire pour ou contre un projet de loi est un discours délibératif : il cherche à convaincre de voter une loi en montrant ses avantages ou ses dangers futurs.`
  },
  // Question n°71
  {
    question: "Que signifie l'expression <em>parole proleptique</em> ?",
    answers: [
      "Une parole qui propage des rumeurs",
      "Une parole complexe",
      "Une parole qui anticipe une objection"
    ],
    correct: 3,
    explanation: `La prolepse (du grec "<em>prolambanein</em>", prendre par avance) est une figure de rhétorique et une stratégie argumentative. Elle consiste à anticiper une objection que pourrait faire l'adversaire ou l'auditoire, et à y répondre avant qu'elle ne soit formulée. Cela permet de désamorcer la critique, de montrer qu'on l'a envisagée et qu'on a une réponse. C'est une manière de renforcer son autorité en se présentant comme ayant tout prévu. Cette technique est fréquente dans les discours politiques et les plaidoyers.\nExemple : "Certains diront que cette réforme coûte trop cher. Je leur réponds par avance que son coût est largement compensé par les économies futures qu'elle générera."`
  },
  // Question n°72
  {
    question: "Comment la <em>parole écrite</em> (lois, constitutions) fonde-t-elle l'autorité dans les États modernes ?",
    answers: [
      "Par le charisme de ceux qui l'ont écrite",
      "Par sa beauté stylistique",
      "Par sa fixité opposable à tous"
    ],
    correct: 3,
    explanation: `Dans l'État de droit moderne, l'autorité suprême est souvent incarnée par un texte écrit : la Constitution. Ce texte fait autorité (<em>auctoritas</em>) parce qu'il est le fondement écrit, stable et public de tout l'ordre juridique. Sa fixité le rend indépendant des fluctuations des majorités et des humeurs du moment. Il s'impose à tous, gouvernants et gouvernés. L'écriture permet ici de soustraire la loi fondamentale à l'arbitraire de la parole vive du souverain, en l'objectivant dans un document sacralisé.\nExemple : La Constitution américaine de 1787, écrite et amendée selon des procédures rigoureuses, fait autorité sur le Président, le Congrès et la Cour suprême elle-même.`
  },
  // Question n°73
  {
    question: "Quelle est la fonction de la <em>parole prophétique de malheur</em> (annonce de châtiment) ?",
    answers: [
      "Prédire l'avenir pour montrer sa puissance",
      "Appeler à la conversion par la crainte",
      "Démoraliser le peuple"
    ],
    correct: 2,
    explanation: `Les prophètes bibliques annoncent souvent des malheurs (guerre, exil, famine...) comme châtiments divins pour les infidélités du peuple (idolâtrie, injustice sociale). Cette parole de malheur n'est pas une simple prédiction ; elle a une fonction performative et pédagogique. En créant la crainte, elle cherche à provoquer un retour (<em>teshouva</em>) vers Dieu et la loi. L'annonce du malheur n'est pas inéluctable ; elle peut être évitée par la conversion. L'autorité du prophète vient de sa conviction d'être le porte-parole de la colère divine.\nExemple : Le prophète Jérémie annonce la destruction de Jérusalem et l'exil à Babylone pour punir l'infidélité, mais il appelle aussi constamment à la repentance pour l'éviter.`
  },
  // Question n°74
  {
    question: "Que signifie le concept de <em>parole autoréférentielle</em> du pouvoir (le pouvoir qui se légitime lui-même) ?",
    answers: [
      "Le pouvoir qui parle de lui-même avec modestie",
      "Le pouvoir qui écoute ses propres conseillers",
      "Le pouvoir qui produit le discours qui le légitime"
    ],
    correct: 3,
    explanation: `Dans les systèmes autocratiques ou totalitaires, le pouvoir tend à produire lui-même les discours qui le légitiment, sans référence à une instance extérieure (Dieu, le peuple, la raison). Il crée sa propre mythologie, sa propre histoire, son propre langage. La parole du pouvoir devient autoréférentielle : elle ne se justifie que par elle-même. "Le Führer a toujours raison" (Schmitt) est la formule extrême de cette autoréférentialité. L'autorité n'a plus de fondement que la puissance même de l'énonciation répétée.\nExemple : La propagande d'un régime totalitaire qui répète : "Notre chef est génial, notre système est parfait" sans autre argument que l'affirmation même, crée une bulle discursive autoréférentielle.`
  },
  // Question n°75
  {
    question: "Comment la 'parole de pardon' exerce-t-elle son autorité ?",
    answers: [
      "En effaçant magiquement la faute",
      "En rompant le cycle de la vengeance",
      "En humiliant celui qui est pardonné"
    ],
    correct: 2,
    explanation: `Le pardon est un acte de parole performatif par lequel la victime ou l'autorité lésée (« je te pardonne ») renonce à sa vengeance légitime et restaure le coupable dans sa dignité. Cet acte est d'une grande autorité morale car il suppose de dépasser le droit strict (qui exigerait châtiment) pour instaurer une relation nouvelle fondée sur la grâce. Le pardon ne nie pas la faute, mais en suspend les conséquences. Il est souvent considéré comme le sommet de l'autorité éthique, car il manifeste une liberté souveraine par rapport à la logique du talion.\nExemple : Le "Je vous pardonne" prononcé par des victimes d'attentats ou par des juges dans des procès restauratifs a une puissance symbolique et transformative considérable.`
  },
  // Question n°76
  {
    question: "Quelle est la caractéristique d'une <em>parole d'injonction thérapeutique</em> (ordres du médecin, du psychothérapeute) ?",
    answers: [
      "Elle n'a aucune force contraignante",
      "Elle est experte et performative",
      "Elle est toujours négociable"
    ],
    correct: 2,
    explanation: `La parole du thérapeute (médecin, psychanalyste, etc.) est une parole d'autorité particulière. Elle s'appuie sur un savoir expert (l'ethos du savant) mais elle est aussi performative : elle vise à produire un changement chez le patient. L'ordonnance ("Prenez ce médicament trois fois par jour") a force de prescription. L'interprétation du psychanalyste ("Vous dites ceci, mais vous pensez cela") a pour but de transformer la compréhension de soi du patient. Cette parole est censée agir sur le corps ou l'esprit en s'appuyant sur la confiance que le patient accorde à l'autorité du thérapeute.\nExemple : Le placebo ne fonctionne que si le patient croit en l'autorité du médecin qui le prescrit ; la parole du médecin fait partie du traitement.`
  },
  // Question n°77
  {
    question: "Que signifie l'expression <em>parole de défi</em> ou de provocation ?",
    answers: [
      "Une parole qui cherche à éviter le conflit",
      "Une parole qui propose un compromis",
      "Une parole qui défie une autorité établie"
    ],
    correct: 3,
    explanation: `La parole de défi est une parole qui s'adresse à une autorité (politique, morale, parentale) pour la contester frontalement. Elle peut prendre la forme de l'insulte, de la moquerie, de la déclaration publique d'opposition. Cette parole a une fonction performative de rupture : elle brise le silence de la soumission, elle institue un rapport de force symétrique (ou le revendique) là où régnait l'asymétrie. Elle est souvent le prélude à un conflit ouvert. Son autorité (celle du rebelle) vient du courage de dire non et de la justesse de la cause invoquée.\nExemple : La déclaration de Martin Luther : "Je ne peux pas, je ne veux pas me rétracter" face à la Diète de Worms est une parole de défi à l'autorité de l'Église et de l'Empereur.`
  },
  // Question n°78
  {
    question: "Comment la <em>parole de consolation</em> exerce-t-elle son autorité ?",
    answers: [
      "En ordonnant de ne plus souffrir",
      "En reconnaissant la souffrance d'autrui",
      "En minimisant la souffrance"
    ],
    correct: 2,
    explanation: `La parole de consolation est adressée à quelqu'un qui souffre (deuil, maladie, échec). Son autorité ne vient pas d'un savoir ou d'un pouvoir, mais d'une capacité à être présent, à écouter, et à dire les mots justes qui reconnaissent la douleur sans la nier, et qui offrent un réconfort, un espoir, ou simplement la certitude de ne pas être seul. Cette parole peut être religieuse ("Dieu est avec vous"), philosophique ("la mort fait partie de la vie") ou simplement humaine ("je suis là"). Elle a une autorité morale et affective.\nExemple : Les amis de Job qui viennent s'asseoir en silence près de lui pendant sept jours avant de tenter (maladroitement) des paroles de consolation.`
  },
  // Question n°79
  {
    question: "Quelle est la fonction de la <em>parole d'interdiction</em> (tabous, interdits) ?",
    answers: [
      "Cacher des secrets",
      "Limiter la liberté pour le plaisir",
      "Définir les limites du possible"
    ],
    correct: 3,
    explanation: `Les interdits (« tu ne tueras point », « tu ne commettras pas d'inceste », tabous alimentaires) sont énoncés dans des paroles fondatrices (loi divine, mythe, coutume). Leur énonciation performative crée la frontière entre le sacré et le profane, le pur et l'impur, le possible et l'impossible. Ces paroles ont une autorité immense car elles structurent l'identité et la cohésion du groupe. Leur transgression provoque souvent une sanction sociale ou symbolique (souillure, exclusion). L'interdit fondamental (l'inceste selon Lévi-Strauss) est même constitutif de la culture humaine.\nExemple : L'interdit de l'inceste, présent dans toutes les sociétés, fonde l'échange des femmes et la parenté, base de l'organisation sociale.`
  },
  // Question n°80
  {
    question: "Que signifie l'expression <em>parole d'institution</em> (Bourdieu) ?",
    answers: [
      "Le règlement intérieur d'une école",
      "Un discours prononcé dans une institution",
      "Un acte qui confère une identité sociale"
    ],
    correct: 3,
    explanation: `Pierre Bourdieu analyse les <em>actes d'institution</em> comme des performances symboliques qui ont le pouvoir de transformer l'identité sociale d'un individu en lui conférant un titre, un statut, un nom. "Je te baptise", "Je te fais chevalier", "Je te nomme professeur". Ces paroles sont magico-sociales : elles font être ce qu'elles disent, elles produisent une différence de statut reconnue par tous. L'autorité de celui qui institue (l'évêque, le roi, le président d'université) doit être socialement reconnue pour que l'acte prenne.\nExemple : La cérémonie de remise de diplôme est un acte d'institution : la parole du président ("je vous confère le grade de...") transforme officiellement l'étudiant en diplômé.`
  },
  // Question n°81
  {
    question: "Comment la 'parole de séduction' exerce-t-elle une forme d'autorité ?",
    answers: [
      "En disant toujours la vérité",
      "En imposant sa volonté par la force",
      "En captant le désir de l'autre"
    ],
    correct: 3,
    explanation: `La parole de séduction (amoureuse, commerciale, politique) vise à capter l'attention, à plaire, à créer du désir et à orienter le choix de l'autre. Elle exerce une autorité douce, une "<em>potestas</em>" affective. Elle utilise le charme, la promesse, la flatterie, le mystère. Son pouvoir réside dans sa capacité à créer un lien émotionnel et à faire adhérer l'autre à un projet (une relation, un achat, une idée) en donnant l'impression que c'est son propre désir. Cette autorité peut être bienveillante ou manipulatrice.\nExemple : Les discours de Dom Juan dans la pièce de Molière sont des paroles de séduction qui lui donnent autorité sur le cœur des femmes qu'il conquiert (puis abandonne).`
  },
  // Question n°82
  {
    question: "Quelle est la caractéristique de la <em>parole mystique</em> ou d'extase ?",
    answers: [
      "Elle donne des ordres à Dieu",
      "Elle tente de dire l'indicible, l'expérience de l'union avec le divin, souvent par le paradoxe et le silence",
      "Elle est parfaitement claire et rationnelle"
    ],
    correct: 2,
    explanation: `La parole mystique naît d'une expérience d'union ineffable avec Dieu ou l'Absolu. Le mystique se heurte aux limites du langage : ce qu'il a vécu est indicible. Sa parole est donc souvent paradoxale, poétique, allégorique, fragmentaire. Elle dit en même temps l'impossibilité de dire. Elle peut culminer dans le silence. L'autorité du mystique vient non d'une institution, mais de la force testimoniale de son expérience intérieure, parfois suspecte aux yeux de l'Église officielle.\nExemple : Thérèse d'Avila ou Jean de la Croix décrivent l'extase par des images ("nuit obscure", "château intérieur") tout en affirmant que les mots sont inadéquats.`
  },
  // Question n°83
  {
    question: "Que signifie l'expression <em>parole d'apaisement</em> ou de pacification ?",
    answers: [
      "Une parole qui impose la paix par la menace",
      "Une parole qui étouffe les conflits sans les résoudre",
      "Une parole qui cherche à calmer les tensions"
    ],
    correct: 3,
    explanation: `La parole d'apaisement est prononcée dans un contexte de crise, de colère ou de violence latente. Elle vise à réduire l'intensité émotionnelle, à faire baisser la pression, à créer les conditions d'un dialogue raisonnable. Elle peut reconnaître les griefs ("Je comprends votre colère"), faire appel au calme ("Restons raisonnables"), proposer des gages ("Examinons cela ensemble"). Son autorité vient de son caractère mesuré, de sa raisonnabilité, et souvent du statut de celui qui parle (médiateur, autorité respectée).\nExemple : Le discours d'un maire tentant de calmer des tensions communautaires après un fait divers : "Ne tombons pas dans le piège de la violence, parlons-nous."`
  },
  // Question n°84
  {
    question: "Comment la <em>parole de dénonciation</em> (<em>whistleblowing</em>, lanceur d'alerte) exerce-t-elle son autorité ?",
    answers: [
      "En répandant des rumeurs",
      "En obéissant aux ordres de sa hiérarchie",
      "En révélant des faits cachés"
    ],
    correct: 3,
    explanation: `La parole de dénonciation (ou « lancement d'alerte ») est prononcée par un individu qui, au sein d'une organisation (entreprise, État), révèle des actes illégaux, immoraux ou dangereux que cette organisation cherchait à cacher. Cette parole est hautement risquée pour le lanceur d'alerte (licenciement, poursuites). Son autorité vient de son courage, de la véracité des faits qu'elle apporte (preuves), et de l'appel à la conscience publique qu'elle lance. Elle s'adresse souvent aux médias ou à la justice pour contourner l'autorité hiérarchique corrompue.\nExemple : Edward Snowden révélant les programmes de surveillance massive de la NSA ; ou Chelsea Manning divulguant des documents militaires sur la guerre en Irak.`
  },
  // Question n°85
  {
    question: "Quelle est la fonction de la <em>parole d'enseignement</em> (du maître, du professeur) ?",
    answers: [
      "Imposer un savoir par la contrainte",
      "Répéter ce que disent les manuels",
      "Transmettre un savoir et des méthodes"
    ],
    correct: 3,
    explanation: `La parole d'enseignement exerce une autorité spécifique : l'autorité pédagogique. Le maître est censé détenir un savoir et une compétence didactique. Sa parole fait autorité (<em>auctoritas</em>) en ce sens. Mais une bonne pédagogie vise à ce que l'élève s'approprie le savoir et devienne autonome. L'autorité du maître doit donc être à la fois ferme (pour structurer l'apprentissage) et discrète, s'effaçant progressivement ("toute autorité véritable inclut le moment de sa propre abolition", selon Hegel). Le dialogue socratique est le modèle d'une autorité qui ne s'impose pas mais fait accoucher les esprits.\nExemple : Un bon professeur n'impose pas des réponses, mais pose des questions qui guident l'élève vers la découverte personnelle.`
  },
  // Question n°86
  {
    question: "Que signifie l'expression 'parole de résistance' face à une autorité oppressive ?",
    answers: [
      "Une parole silencieuse",
      "Une parole qui dit « non » à la parole dominante",
      "Une parole qui cherche un compromis avec l'oppresseur"
    ],
    correct: 2,
    explanation: `La parole de résistance est prononcée dans un contexte d'oppression, de censure, de terreur. Elle peut prendre des formes variées : pamphlet clandestin, graffiti, chanson protestataire, déclaration publique au péril de sa vie. Cette parole brise le monopole discursif du pouvoir. Elle affirme une vérité niée, une identité méprisée, un droit bafoué. Son autorité vient de son courage, de sa justesse, et de son pouvoir de mobilisation des consciences. Elle est souvent le premier acte d'une lutte pour la liberté.\nExemple : Les discours de Nelson Mandela contre l'apartheid, prononcés avant et pendant son emprisonnement ; ou les tracts de la Résistance française pendant l'Occupation.`
  },
  // Question n°87
  {
    question: "Comment la <em>parole prophétique de salut</em> (annonce d'un avenir radieux) fonctionne-t-elle ?",
    answers: [
      "Elle garantit le bonheur matériel immédiat",
      "Elle promet un salut conditionné",
      "Elle décrit un futur inéluctable"
    ],
    correct: 2,
    explanation: `À côté des prophéties de malheur, il y a les prophéties de salut. Elles annoncent un avenir de libération, de paix, de justice, de rédemption ("Voici que je crée un ciel nouveau et une terre nouvelle"). Cette parole n'est pas une simple prédiction ; elle est performative : en annonçant le salut, elle le rend possible, elle donne une espérance qui soutient l'action et la fidélité dans l'épreuve. Elle désigne un but (l'Exode, le Messie, la révolution) et mobilise les énergies pour l'atteindre. Son autorité vient de la force de l'espérance qu'elle suscite.\nExemple : Le discours "I have a dream" de Martin Luther King est une prophétie de salut racial, décrivant un avenir de fraternité qui appelle à l'action non-violente pour le réaliser.`
  },
  // Question n°88
  {
    question: "Quelle est la caractéristique d'une <em>parole d'assemblée</em> (délibérations collectives) ?",
    answers: [
      "Elle est secrète",
      "Elle est le produit de discussions",
      "Elle est toujours le monologue d'un chef"
    ],
    correct: 2,
    explanation: `La parole d'assemblée (parlement, conseil municipal, AG) est constitutive de la démocratie délibérative. L'autorité n'y réside pas dans la parole d'un seul, mais dans le processus discursif lui-même : la confrontation des arguments, le débat, le vote. La décision finale ("la loi est adoptée") tire son autorité de ce qu'elle a été discutée et approuvée selon des règles acceptées par tous. La parole y est à la fois un droit (prendre la parole) et un devoir (écouter, argumenter). C'est l'institutionnalisation de la parole comme fondement du pouvoir.\nExemple : Dans l'Athènes classique, les décisions de l'Ecclésia (assemblée du peuple) naissaient de discussions souvent vives entre citoyens.`
  },
  // Question n°89
  {
    question: "Que signifie l'expression <em>parole de trahison</em> ?",
    answers: [
      "Une parole prononcée dans une langue étrangère",
      "Une parole qui révèle un secret promis",
      "Une parole qui rompt un engagement"
    ],
    correct: 3,
    explanation: `La parole de trahison est l'envers de la parole d'engagement. Elle brise un pacte, une promesse, une alliance. Elle peut être explicite ("Je romps notre alliance") ou implicite (agir contrairement à sa parole). La trahison sape l'autorité même de la parole comme lien social, car elle montre que la parole peut être vaine. Dans les relations de confiance (amitié, mariage, politique), la trahison verbale est souvent plus blessante que la trahison par l'action, car elle attaque le fondement symbolique de la relation.\nExemple : Un ami qui révèle un secret intime qu'on lui avait confié trahit la parole de confiance qui les liait.`
  },
  // Question n°90
  {
    question: "Comment la <em>parole d'interprétation</em> (de l'herméneute, du critique) exerce-t-elle son autorité ?",
    answers: [
      "En répétant le texte mot pour mot",
      "En imposant une lecture unique",
      "En proposant une lecture éclairante"
    ],
    correct: 3,
    explanation: `L'interprète (philosophe, critique littéraire, historien, psychanalyste) ne crée pas un texte ou un événement, mais il en propose une lecture qui en dégage le sens caché, la structure, les implications. L'autorité de sa parole ne vient pas d'un pouvoir institutionnel (sauf cas de magistère religieux) mais de la qualité de son interprétation : sa rigueur, son érudition, sa profondeur, sa capacité à rendre compte du matériau étudié. Une bonne interprétation s'impose par sa force persuasive intrinsèque. Elle ouvre le texte à de nouvelles compréhensions.\nExemple : L'interprétation freudienne des rêves ou des actes manqués propose une grille de lecture (l'inconscient, le désir) qui fait autorité dans le champ psychanalytique, sans être pourtant une "preuve" scientifique au sens strict.`
  },
  // Question n°91
  {
    question: "Quelle est la fonction de la <em>parole d'investiture</em> (cérémonie d'intronisation) ?",
    answers: [
      "Critiquer le prédécesseur",
      "Conférer solennellement une charge",
      "Fêter la fin d'un mandat"
    ],
    correct: 2,
    explanation: `La cérémonie d'investiture (sacre d'un roi, intronisation d'un pape, inauguration d'un président) est un rituel performatif essentiel. La parole prononcée ("Je te sacre roi de France", "Je déclare investi le président de la République") accomplit le transfert d'autorité. Elle est souvent accompagnée de symboles (couronne, sceptre, serment sur la Constitution). Cette parole ne fait pas que constater une élection ou une succession ; elle l'achève et la rend effective aux yeux de tous. Elle marque le passage d'un individu à un statut supérieur, investi d'une autorité publique.\nExemple : Le sacre de Reims transformait le dauphin en roi "de droit divin" ; l'investiture présidentielle moderne transforme le président-élu en chef de l'État en exercice.`
  },
  // Question n°92
  {
    question: "Que signifie l'expression « parole de révélation » (dans les religions <em>révélées</em>) ?",
    answers: [
      "Une découverte scientifique",
      "Une parole de l'homme sur Dieu",
      "Une parole de Dieu aux hommes"
    ],
    correct: 3,
    explanation: `Dans les religions dites "révélées" (judaïsme, christianisme, islam), la parole fondatrice est une parole de révélation : Dieu se fait connaître et parle aux hommes. Cette parole est transcendante, elle vient d'en haut. Elle est consignée dans des textes sacrés (Torah, Bible, Coran) considérés comme "Parole de Dieu". L'autorité de ces textes est absolue pour les croyants, car elle a son origine en Dieu lui-même. L'interprétation de cette parole (exégèse, théologie) devient alors une activité majeure, mais soumise à l'autorité du texte révélé.\nExemple : Pour les musulmans, le Coran est la parole incréée de Dieu, dictée mot à mot à Mahomet par l'ange Gabriel ; son autorité est sans égale.`
  },
  // Question n°93
  {
    question: "Comment la <em>parole de dérision</em> (satire, moquerie) peut-elle saper une autorité ?",
    answers: [
      "En la ridiculisant",
      "En l'ignorant",
      "En la complimentant"
    ],
    correct: 1,
    explanation: `La parole satirique (des fabulistes, des comiques, des caricaturistes) use de l'ironie, de l'exagération, de la moquerie pour attaquer les puissants, les institutions, les dogmes. En ridiculisant, elle désacralise, elle montre que le roi est nu. Elle prive l'autorité de son aura de sérieux et d'inviolabilité. C'est une arme des faibles contre les forts, une forme de contre-pouvoir symbolique. Son autorité vient de son esprit, de sa justesse, et de la complicité qu'elle crée avec le public. Les régimes autoritaires redoutent et censurent souvent la satire.\nExemple : Les caricatures de Daumier ridiculisant le roi Louis-Philippe en poire contribuèrent à miner le prestige de la monarchie de Juillet.`
  },
  // Question n°94
  {
    question: "Quelle est la caractéristique de la <em>parole d'évidence</em> (qui s'impose comme allant de soi) ?",
    answers: [
      "Elle résulte d'une démonstration",
      "Elle se présente sans preuve",
      "Elle est toujours vraie"
    ],
    correct: 2,
    explanation: `La parole d'évidence est un énoncé qui se donne pour incontestable, qui va de soi ("Tout le monde sait que...", "Il est évident que..."). Elle tire son autorité non d'une argumentation, mais de son inscription dans le sens commun, dans les préjugés d'une époque ou d'un groupe. Elle fonctionne comme un raccourci de pensée et peut être un obstacle à la réflexion critique. La philosophie a souvent pour tâche de mettre en question ces "évidences". L'autorité de cette parole est celle de la doxa, souvent renforcée par la répétition.\nExemple : "Une femme doit rester à la maison" était une "évidence" sociale pendant des siècles, rarement remise en cause avant les mouvements féministes.`
  },
  // Question n°95
  {
    question: "Que signifie l'expression <em>parole de rupture</em> (dans les révolutions, les schismes) ?",
    answers: [
      "Une parole hésitante",
      "Une parole qui inaugure un nouvel ordre",
      "Une parole qui répare un lien"
    ],
    correct: 2,
    explanation: `La parole de rupture est un acte discursif qui brise une continuité institutionnelle ou idéologique. "Nous rompons avec Rome" (Henri VIII créant l'Église anglicane), "Le Tiers État est l'Assemblée nationale" (Serment du Jeu de Paume), "L'Algérie est indépendante" (Déclaration d'indépendance). Ces paroles performatives créent une nouvelle légitimité en niant l'ancienne. Elles sont souvent prononcées dans un contexte de crise et de conflit. Leur autorité est révolutionnaire : elle ne vient pas du passé, mais se fonde sur une nouvelle souveraineté qu'elle proclame.\nExemple : La déclaration d'indépendance des États-Unis (1776) est une parole de rupture avec l'autorité de la Couronne britannique, fondant la souveraineté du "peuple" américain.`
  },
  // Question n°96
  {
    question: "Comment la <em>parole de consolation philosophique</em> (Boèce, Sénèque) cherche-t-elle à agir ?",
    answers: [
      "En atténuant la douleur par la compréhension",
      "En promettant une récompense dans l'au-delà",
      "En niant la souffrance"
    ],
    correct: 1,
    explanation: `La consolation philosophique (genre illustré par Sénèque, Boèce) s'adresse à quelqu'un frappé par le malheur (deuil, exil, disgrâce). Elle n'use pas de compassion sentimentale, mais de raison (logos). Elle propose une mise en perspective : le malheur fait partie de la condition humaine, la Fortune est changeante, les biens perdus étaient précaires, la souffrance peut être surmontée par la force de l'âme. L'autorité de cette parole vient de la sagesse du philosophe et de la vérité des arguments stoïciens ou platoniciens qu'il déploie.\nExemple : Boèce, en prison et condamné à mort, écrit <em>La Consolation de la Philosophie</em>, où la figure allégorique de Philosophie lui explique que le vrai bonheur est intérieur et ne dépend pas des biens extérieurs que la Fortune peut retirer.`
  },
  // Question n°97
  {
    question: "Quelle est la fonction de la <em>parole d'avertissement</em> ?",
    answers: [
      "Annoncer une bonne nouvelle",
      "Mettre en garde",
      "Faire peur inutilement"
    ],
    correct: 2,
    explanation: `La parole d'avertissement (« attention ! », « méfie-toi de... », « si vous faites cela, il arrivera... ») a une fonction préventive. Elle vise à éviter un mal futur en alertant sur un risque. Son autorité peut venir de l'expérience de celui qui parle (« je te préviens en connaissance de cause »), d'un savoir expert (alerte scientifique), ou d'une position d'autorité (parent, gouvernement). Elle combine souvent un constat (le danger existe) et une injonction (il faut agir pour l'éviter). Son efficacité dépend de la crédibilité de l'émetteur et de la perception du risque par le récepteur.\nExemple : Les avertissements sanitaires sur les paquets de cigarettes (« fumer tue ») sont des paroles d'autorité (de l'État, de la science) visant à dissuader.`
  },
  // Question n°98
  {
    question: "Que signifie l'expression <em>parole de dévoilement</em> au sens philosophique (<em>alètheia</em>) ?",
    answers: [
      "Enlever un voile matériel",
      "Faire sortir de l'oubli",
      "Révéler un secret personnel"
    ],
    correct: 2,
    explanation: `Reprenant l'étymologie grecque d'<em>alètheia</em> (α-λήθεια, non-oubli), Heidegger fait de la parole authentique (surtout poétique) un "dévoilement". Elle ne se contente pas de communiquer des informations sur des étants (les choses). Elle fait advenir l'Être lui-même, elle rend présente la vérité des choses en les arrachant à l'oubli et à la banalité du quotidien. Cette parole a une autorité ontologique : elle nous met en contact avec le fondement de ce qui est. C'est la tâche du poète et, dans une autre mesure, du philosophe.\nExemple : Pour Heidegger, le poème de Hölderlin "Etremellement habite poétiquement l'homme..." n'est pas une belle image, mais un dévoilement de l'essence de l'habitation humaine comme fondée dans la poésie.`
  },
  // Question n°99
  {
    question: "Comment la <em>parole de réconciliation</em> (post-conflit) opère-t-elle ?",
    answers: [
      "En désignant un vainqueur et un vaincu",
      "En établissant une vérité commune",
      "En effaçant le passé"
    ],
    correct: 2,
    explanation: `Après un conflit violent (guerre civile, régime autoritaire), la parole de réconciliation est essentielle pour refonder une communauté. Elle peut prendre la forme de commissions "Vérité et Réconciliation" (Afrique du Sud), où victimes et bourreaux témoignent. Ces paroles visent à établir une vérité historique partagée, à reconnaître les souffrances, et parfois à pardonner. Des discours officiels ("tourner la page", "écrire ensemble une nouvelle histoire") sont aussi des performatifs qui visent à clore symboliquement le conflit et à inaugurer une nouvelle ère.\nExemple : Le discours de Nelson Mandela, devenu président, appelant à dépasser les haines raciales et à construire une "nation arc-en-ciel".`
  },
  // Question n°100
  {
    question: "Quel est l'enjeu ultime de la séquence l'<em>autorité de la parole</em> ?",
    answers: [
      "Distinguer les différents types de discours",
      "Apprendre à imposer sa parole par la force",
      "Interroger les conditions d'une autorité légitime"
    ],
    correct: 3,
    explanation: `Cette séquence explore la parole non comme simple communication, mais comme pouvoir de fonder, d'instituer, de légitimer ou de subvertir l'ordre des choses et des sociétés. Elle distingue l'autorité fondée sur la tradition (<em>auctoritas</em>) de la puissance de contrainte (<em>potestas</em>), analyse les formes concrètes de la parole d'autorité (du mythe au performatif, du charisme à l'institution), et interroge sans cesse ce qui fait qu'une parole "fait autorité". L'enjeu est de former un jugement critique sur les discours qui nous entourent et sur les conditions d'une parole authentique, qui lie vérité et responsabilité.\nExemple : Face à la prolifération des "paroles" sur les réseaux sociaux, la réflexion sur l'autorité légitime (compétence, preuve, débat contradictoire) est plus cruciale que jamais.`
  }
];