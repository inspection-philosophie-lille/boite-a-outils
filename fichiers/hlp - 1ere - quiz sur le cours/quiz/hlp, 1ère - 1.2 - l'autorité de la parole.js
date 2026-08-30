// ============================================
// DONNÉES GÉNÉRALES
// ============================================
const titre = "QUIZ HPL 1ère - l'autorité de la parole";
const sousTitre = "tester ses connaissances";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE (Synthèse)
// ============================================
const philosophyData = {
  texte: `L'autorité de la parole ne se réduit pas au pouvoir de la force. Elle oscille entre l'<em>auctoritas</em> (autorité fondée sur la tradition et l'origine) et la <em>potestas</em> (puissance de contrainte). Des paroles patriarcales aux discours charismatiques, des mythes fondateurs aux énoncés performatifs, cette séquence explore comment la parole peut fonder, légitimer ou subvertir l'ordre social. Elle interroge ce qui fait qu'une parole « fait autorité » : est-ce la personne qui la profère, la tradition qui la porte, ou la vérité qu'elle énonce ?`,
  source: "synthèse des enjeux de la séquence"
};

// ============================================
// QUESTIONS DU QUIZ (1 à 100) - Corrigées avec <em>
// ============================================
const questions = [
  // Question n°01
  {
    question: "Question n°01 : Quelle distinction fondamentale permet d'analyser le concept d'<em>autorité</em> ?",
    answers: [
      "<em>Autorité</em> naturelle et <em>autorité</em> acquise",
      "<em>Autorité</em> personnelle et <em>autorité</em> institutionnelle",
      "<em>Autorité</em> traditionnelle et <em>puissance</em> de contrainte"
    ],
    correct: 3,
    explanation: `La distinction centrale est entre l'<em>auctoritas</em> (<em>autorité</em> fondée sur la tradition, l'origine, le prestige) et la <em>potestas</em> (<em>puissance</em> de contrainte, pouvoir de commandement). L'<em>auctoritas</em> renvoie à une légitimité héritée du passé, à un poids symbolique. La <em>potestas</em> désigne l'exercice effectif du pouvoir, la capacité à imposer sa volonté. Cette distinction, héritée de la pensée politique romaine, permet de comprendre qu'une parole peut « faire <em>autorité</em> » sans pour autant détenir le pouvoir coercitif.<br>Exemple : Un grand professeur émérite a de l'<em>auctoritas</em> dans son domaine, même s'il n'a plus de <em>potestas</em> administrative.`
  },
  // Question n°02
  {
    question: "Question n°02 : Que signifie étymologiquement le terme grec ἐξουσία, traduit par <em>autorité</em> ?",
    answers: [
      "Ce qui provient de l'<em>essence</em>",
      "La <em>force</em> persuasive",
      "Le <em>commandement</em> absolu"
    ],
    correct: 1,
    explanation: `Le mot grec ἐξουσία se décompose en ἐκ (origine, provenance) et ουσία (substance, <em>essence</em>, bien). Étymologiquement, il désigne donc quelque chose dont on hérite, qui provient de la substance ou de l'<em>essence</em>. Cette origine souligne que l'<em>autorité</em>, dans la conception grecque, est liée à une légitimité qui vient du fond de l'être ou d'un héritage, plutôt qu'à une simple fonction ou à une <em>force</em> immédiate.<br>Exemple : L'<em>autorité</em> du père de famille dans la Grèce antique découlait de sa position substantielle comme chef de l'<em>oikos</em> (maisonnée).`
  },
  // Question n°03
  {
    question: "Question n°03 : Comment Cicéron, dans <em>De Legibus</em>, distingue-t-il l'<em>autorité</em> du <em>pouvoir</em> ?",
    answers: [
      "L'<em>autorité</em> appartient au peuple, le <em>pouvoir</em> au Sénat",
      "L'<em>autorité</em> et le <em>pouvoir</em> sont concentrés dans les mains du consul",
      "Le <em>pouvoir</em> réside dans le peuple, l'<em>autorité</em> appartient au Sénat"
    ],
    correct: 3,
    explanation: `Cicéron énonce : « Tandis que le <em>pouvoir</em> réside dans le peuple, l'<em>autorité</em> appartient au sénat ». Cette formule résume la conception républicaine romaine de la répartition des <em>pouvoirs</em>. Le peuple (<em>populus</em>) détient la souveraineté et le <em>pouvoir</em> de voter les lois (<em>potestas</em>). Le Sénat, assemblée des anciens et des hommes prestigieux, détient l'<em>auctoritas</em> : son avis, son prestige, son poids moral orientent et légitiment les décisions sans les commander directement.<br>Exemple : Une loi votée par les comices populaires acquérait une légitimité renforcée si elle recevait l'approbation (l'<em>auctoritas</em>) du Sénat.`
  },
  // Question n°04
  {
    question: "Question n°04 : Quelle est la distinction établie par Max Weber entre <em>puissance</em> (<em>Macht</em>) et <em>domination</em> (<em>Herrschaft</em>) ?",
    answers: [
      "La <em>puissance</em> est la possibilité d'imposer sa volonté, la <em>domination</em> est une <em>autorité</em> institutionnalisée",
      "La <em>puissance</em> est légitime, la <em>domination</em> est illégitime",
      "La <em>puissance</em> est collective, la <em>domination</em> est individuelle"
    ],
    correct: 1,
    explanation: `Max Weber définit la <em>puissance</em> (<em>Macht</em>) comme « toute chance de faire triompher au sein d'une relation sociale sa propre volonté, même contre des résistances ». C'est un rapport de <em>force</em> contingente. La <em>domination</em> (<em>Herrschaft</em>) est « la chance de trouver des personnes déterminables prêtes à obéir à un ordre de contenu déterminé ». Elle implique une légitimité reconnue, une institutionnalisation qui rend l'obéissance quasi-automatique. La <em>domination</em> se rapproche ainsi de la notion d'<em>autorité</em> légitime.<br>Exemple : Un chef de bande a de la <em>puissance</em> sur ses hommes ; un juge exerce une <em>domination</em> légale-rationnelle.`
  },
  // Question n°05
  {
    question: "Question n°05 : Dans l'<em>Odyssée</em>, comment Télémaque justifie-t-il son ordre à Pénélope de se retirer dans ses appartements ?",
    answers: [
      "En affirmant que <em>parler</em> appartient aux hommes",
      "Par son statut de <em>futur roi</em>",
      "En invoquant la <em>volonté des dieux</em>"
    ],
    correct: 1,
    explanation: `Face à Pénélope qui demande à l'aède de cesser de chanter les malheurs d'Ulysse, Télémaque, son fils, l'interrompt et lui ordonne de se retirer, déclarant : « Le soin de <em>parler</em> appartient aux hommes, et surtout à moi qui règne dans ce palais ». Cette scène illustre l'<em>autorité</em> patriarcale dans la société homérique : la <em>parole</em> publique, politique et décisionnelle est l'apanage des hommes, en particulier du maître de maison. Pénélope, bien que reine, doit s'incliner devant la <em>parole</em> masculine de son fils devenu adulte.<br>Exemple : Cette scène fonde symboliquement le passage de l'<em>autorité</em> d'Ulysse (absent) à son fils Télémaque.`
  },
  // Question n°06
  {
    question: "Question n°06 : Quel concept décrit l'<em>autorité</em> qui repose sur les qualités extraordinaires (réelles ou supposées) d'un individu ?",
    answers: [
      "<em>Autorité</em> traditionnelle",
      "<em>Autorité</em> légale-rationnelle",
      "<em>Autorité</em> charismatique"
    ],
    correct: 3,
    explanation: `L'<em>autorité</em> charismatique, selon Max Weber, est celle qui s'appuie sur la dévotion extraordinaire que suscite une personne en raison de ses qualités héroïques, exemplaires ou divinement inspirées. Le <em>charisme</em> (<em>χάρισμα</em>, « don de grâce ») n'est pas tant une qualité objective qu'une croyance collective dans les <em>pouvoirs</em> exceptionnels du leader. Cette <em>autorité</em> est souvent instable et personnelle, contrairement aux <em>autorités</em> traditionnelle ou légale-rationnelle qui sont institutionnalisées.<br>Exemple : Les prophètes religieux, les leaders révolutionnaires ou certains chefs politiques populistes exercent une <em>autorité</em> charismatique.`
  },
  // Question n°07
  {
    question: "Question n°07 : Que signifie l'expression <em>dissonance cognitive</em> dans l'analyse des rapports à l'<em>autorité</em> ?",
    answers: [
      "Le <em>conflit</em> entre deux sources d'<em>autorité</em>",
      "La <em>tendance</em> à justifier une situation subie",
      "L'<em>incapacité</em> à comprendre les ordres"
    ],
    correct: 2,
    explanation: `La <em>dissonance cognitive</em> est un concept de psychologie sociale qui décrit l'inconfort mental ressenti lorsqu'une personne détient deux croyances, attitudes ou comportements contradictoires. Face à une <em>autorité</em> imposée et inchangeable, l'individu a tendance à modifier son attitude (son « avis sur la situation ») pour la justifier et réduire la <em>dissonance</em>, plutôt que de maintenir une opinion critique qui le mettrait en <em>conflit</em> permanent avec une réalité immuable.<br>Exemple : Une victime de <em>violence</em> peut finir par justifier ou minimiser les actes de son agresseur pour réduire la <em>dissonance</em> entre la souffrance subie et l'impuissance à y échapper.`
  },
  // Question n°08
  {
    question: "Question n°08 : Quelle est la principale conclusion de l'<em>expérience</em> de Milgram sur la <em>soumission</em> à l'<em>autorité</em> ?",
    answers: [
      "Seuls les individus <em>malveillants</em> obéissent à des ordres <em>immoraux</em>",
      "L'<em>obéissance</em> dépend exclusivement de la <em>personnalité</em> des individus",
      "Une <em>majorité</em> d'individus <em>ordinaires</em> peut obéir à une <em>autorité</em> perçue comme <em>légitime</em>"
    ],
    correct: 3,
    explanation: `L'<em>expérience</em> de Stanley Milgram (1961-1963) démontre que, dans un cadre institutionnel perçu comme <em>légitime</em> (un laboratoire universitaire), une proportion alarmante de participants <em>ordinaires</em> (environ 65%) est prête à administrer des décharges électriques potentiellement mortelles à un tiers, sur l'ordre d'une <em>autorité</em> scientifique. Cette <em>expérience</em> révèle la <em>puissance</em> de la situation et de l'<em>autorité</em> institutionnelle sur le comportement individuel, pouvant surpasser les inhibitions morales personnelles.<br>Exemple : L'adaptation télévisée française « Le Jeu de la Mort » (2010) a reproduit ces résultats, montrant que l'<em>autorité</em> d'une animatrice de télévision pouvait obtenir des taux de <em>soumission</em> encore plus élevés.`
  },
  // Question n°09
  {
    question: "Question n°09 : Selon Hannah Arendt, quel est le fondement de l'<em>autorité</em> (<em>auctoritas</em>) dans la Rome antique ?",
    answers: [
      "La <em>force militaire</em>",
      "L'<em>origine sacrée</em> de sa fondation",
      "La <em>richesse économique</em>"
    ],
    correct: 2,
    explanation: `Hannah Arendt, dans <em>Qu'est-ce que l'autorité ?</em>, explique que l'<em>auctoritas</em> romaine dérive de la <em>fondation</em> sacrée de Rome. Les actes présents tirent leur légitimité en étant « ajoutés », pour ainsi dire, au poids entier du passé <em>fondateur</em>. L'<em>autorité</em> n'est pas la <em>force</em> (<em>potestas</em>) mais ce qui « augmente » (de <em>augere</em>) et confirme les actions humaines en les reliant à un commencement <em>sacré</em>. Les dieux et le Sénat avaient de l'<em>auctoritas</em> : ils augmentaient et validaient, mais ne commandaient pas directement.<br>Exemple : L'approbation du Sénat (son <em>auctoritas</em>) « augmentait » la valeur et la légitimité d'une décision prise par les magistrats.`
  },
  // Question n°10
  {
    question: "Question n°10 : Quelle caractéristique définit principalement un <em>mythe</em> par rapport à une <em>légende</em> ou une <em>fable</em> ?",
    answers: [
      "Il est <em>historiquement attesté</em>",
      "Il comporte toujours des éléments <em>merveilleux</em>",
      "Il met en scène des êtres <em>symboliques</em>"
    ],
    correct: 3,
    explanation: `Un <em>mythe</em> est un récit traditionnel et fabuleux qui met en scène des êtres (dieux, héros, <em>forces</em> naturelles) incarnant sous une forme <em>symbolique</em> des aspects fondamentaux de la condition humaine, du monde ou de la société. Contrairement à la <em>légende</em> (qui peut s'appuyer sur un fond historique) ou à la <em>fable</em> (qui a une morale explicite), le <em>mythe</em> propose une explication <em>symbolique</em> et <em>fondatrice</em>. Il répond aux grandes questions existentielles (origine du monde, du mal, de l'amour) et fonde des pratiques sociales.<br>Exemple : Le <em>mythe</em> de Prométhée explique l'origine du feu et de la technique humaine, ainsi que la condition de l'homme, partagé entre l'immortalité des dieux et la mortalité des bêtes.`
  },
  // Question n°11
  {
    question: "Question n°11 : Quel est l'enjeu principal du <em>mythe</em> de Gygès, rapporté par Platon dans <em>La République</em> ?",
    answers: [
      "L'enjeu de la <em>supériorité</em> de la monarchie par rapport à la démocratie",
      "L'enjeu de l'<em>importance</em> de la richesse pour le bonheur",
      "L'enjeu de savoir si la <em>vertu</em> naît de la <em>peur</em> de la punition"
    ],
    correct: 3,
    explanation: `Le <em>mythe</em> de Gygès raconte l'histoire d'un berger qui trouve un anneau lui conférant l'<em>invisibilité</em>. Devenu <em>impunissable</em>, il séduit la reine, tue le roi et s'empare du trône. Platon utilise ce <em>mythe</em> pour poser une question fondamentale à la morale : un homme qui pourrait commettre l'<em>injustice</em> en toute <em>impunité</em> le ferait-il ? L'histoire suggère que oui. L'enjeu est de savoir si la <em>justice</em> est choisie pour elle-même ou seulement par <em>crainte</em> des conséquences. Socrate devra ensuite défendre, par la raison, que la <em>justice</em> est préférable en soi.<br>Exemple : La question posée par le <em>mythe</em> est : « Que feriez-vous si vous étiez sûr de ne jamais être découvert ? »`
  },
  // Question n°12
  {
    question: "Question n°12 : Quelle est la fonction de la <em>parole symbolique</em> selon l'analyse anthropologique de Claude Lévi-Strauss ?",
    answers: [
      "Transmettre des <em>informations</em> pratiques",
      "<em>Divertir</em> la communauté",
      "<em>Réparer</em> symboliquement un <em>désordre</em>"
    ],
    correct: 3,
    explanation: `Claude Lévi-Strauss développe le concept d'« <em>efficacité symbolique</em> ». À travers l'exemple du <em>chaman</em> qui guérit une femme en difficulté d'accouchement en racontant un <em>mythe</em>, il montre que la <em>parole symbolique</em> opère une « substitution » : elle transpose un trouble physiologique (corporel) dans un registre <em>mythico-social</em> compréhensible et manipulable par la collectivité. En donnant un sens social au mal individuel, le <em>rituel</em> verbal permet une réorganisation psychique et sociale qui peut avoir des effets thérapeutiques concrets. La <em>parole</em> fait le pont entre l'individu et le groupe.<br>Exemple : Le <em>mythe</em> raconté par le <em>chaman</em> fait de l'utérus de la femme le théâtre d'une lutte entre <em>esprits</em>, lutte que le <em>chaman</em> peut résoudre par sa <em>parole</em>, apaisant ainsi les contractions désordonnées.`
  },
  // Question n°13
  {
    question: "Question n°13 : Dans la Genèse, quel <em>pouvoir</em> particulier est attribué à la <em>parole</em> de Dieu lors de la Création ?",
    answers: [
      "Elle fait <em>advenir</em> ce qu'elle nomme",
      "Elle <em>décrit</em> ce qui existe déjà",
      "Elle <em>persuade</em> les anges d'obéir"
    ],
    correct: 1,
    explanation: `Le récit de la Création dans la Genèse présente une <em>parole</em> <em>performative</em> à l'état pur. Dieu dit : « Que la lumière soit ! Et la lumière fut. » Sa <em>parole</em> n'est pas descriptive mais <em>créatrice</em> : l'énonciation même fait <em>advenir</em> l'être désigné. Ensuite, il nomme les choses (« Dieu appela la lumière jour »), instituant par le langage l'ordre du monde. Cette <em>parole</em> <em>fondatrice</em> est le modèle absolu d'une <em>autorité</em> qui agit par la seule vertu de son énonciation, sans intermédiaire ni résistance possible.<br>Exemple : « Que la terre produise de la verdure » : l'ordre divin produit immédiatement son effet dans la réalité.`
  },
  // Question n°14
  {
    question: "Question n°14 : Quel terme, repris par Martin Heidegger, désigne la <em>vérité</em> comme <em>dévoilement</em> plutôt que comme <em>adéquation</em> ?",
    answers: [
      "<em>Logos</em> (λόγος)",
      "<em>Epistémè</em> (ἐπιστήμη)",
      "<em>Alètheia</em> (ἀλήθεια)"
    ],
    correct: 3,
    explanation: `Heidegger renoue avec le sens originel du mot grec <em>ἀλήθεια</em> (<em>alètheia</em>), formé du α- privatif et de <em>λήθης</em> (oubli, caché). La <em>vérité</em> n'est donc pas d'abord une correspondance entre un jugement et un fait, mais un « <em>dé-voilement</em> », un « arrachement à l'oubli ». La <em>parole</em> poétique authentique, selon Heidegger, a cette fonction <em>alèthique</em> : elle ne décrit pas le monde, elle le <em>dévoile</em>, fait apparaître l'être des choses dans leur présence nue et essentielle.<br>Exemple : Pour Heidegger, un poème de Hölderlin ne parle pas « sur » les dieux, il fait <em>advenir</em> leur absence ou leur retrait dans la <em>parole</em>, les <em>dévoilant</em> comme retrait.`
  },
  // Question n°15
  {
    question: "Question n°15 : Que signifie l'expression <em>parole performative</em>', développée par le philosophe John L. Austin ?",
    answers: [
      "Une <em>parole</em> particulièrement <em>théâtrale</em>",
      "Une <em>parole</em> qui <em>persuade</em> efficacement",
      "Une <em>parole</em> qui est en soi une <em>action</em>"
    ],
    correct: 3,
    explanation: `Dans <em>Quand dire, c'est faire</em>, Austin distingue les énoncés <em>constatifs</em> (qui décrivent un état de choses et peuvent être vrais ou faux) des énoncés <em>performatifs</em>. Un <em>performatif</em> est un énoncé qui, prononcé dans les conditions appropriées (contextuelles, institutionnelles, intentionnelles), accomplit l'<em>action</em> qu'il désigne. Dire, c'est faire. Ces énoncés sont au cœur de l'<em>autorité</em> discursive, car ils transforment la réalité sociale par la <em>parole</em> seule.<br>Exemple : « Je vous déclare mari et femme » (par un maire), « Je promets », « Je nomme », « Je parie » sont des <em>performatifs</em>.`
  },
  // Question n°16
  {
    question: "Question n°16 : Dans la fable <em>Le Loup et l'Agneau</em> (Ésope/La Fontaine), quelle est la fonction de la <em>parole</em> du loup ?",
    answers: [
      "Chercher un <em>compromis</em>",
      "Instruire <em>moralement</em> l'agneau",
      "<em>Légitimer</em> par avance la <em>violence</em>"
    ],
    correct: 3,
    explanation: `Le loup, décidé à dévorer l'agneau, invente successivement des prétextes (« tu troubles mon eau », « tu as insulté mon père l'an passé »). L'agneau réfute chaque accusation avec des arguments logiques et factuels. La <em>parole</em> du loup n'a donc pas pour but un dialogue authentique ou la recherche de la <em>vérité</em>, mais de donner une apparence de justification à son acte de <em>violence</em>. Elle sert à <em>légitimer</em> l'injustifiable, à masquer la loi du plus fort sous un semblant de droit. La morale est que face à celui qui veut abuser de sa <em>force</em>, la raison est impuissante.<br>Exemple : Le loup conclut : « Quelle que soit ta facilité à te justifier, je ne t'en mangerai pas moins », révélant la vacuité de son propre discours.`
  },
  // Question n°17
  {
    question: "Question n°17 : Quelle distinction Kant établit-il dans son texte sur les Lumières entre les <em>ordres</em> courants et l'<em>ordre</em> du seul <em>maître</em> qui autorise à <em>raisonner</em> ?",
    answers: [
      "L'<em>officier</em>, le <em>financier</em> et le <em>prêtre</em> disent « Ne <em>raisonnez</em> pas, <em>obéissez</em> ! »",
      "Tous les <em>maîtres</em> disent « <em>Raisonnez</em> autant que vous voudrez, mais <em>obéissez</em> ! »",
      "L'<em>officier</em> dit « <em>Raisonnez</em> ! », le <em>financier</em> « <em>Payez</em> ! », le <em>prêtre</em> « <em>Croyez</em> ! »"
    ],
    correct: 1,
    explanation: `Kant dénonce les limitations de la liberté de penser imposées par différentes <em>autorités</em> sociales : l'<em>officier</em> (« Ne <em>raisonnez</em> pas, exécutez ! »), le <em>financier</em> (« Ne <em>raisonnez</em> pas, <em>payez</em> ! »), le <em>prêtre</em> (« Ne <em>raisonnez</em> pas, <em>croyez</em> ! »). Face à cela, il fait exception : « Il n'y a qu'un seul <em>maître</em> au monde qui dise « <em>Raisonnez</em> autant que vous voudrez et sur tout ce que vous voudrez, mais <em>obéissez</em> ! » ». Ce <em>maître</em> est le souverain légitime (Frédéric II de Prusse selon Kant). La formule paradoxale « <em>Raisonnez</em> mais <em>obéissez</em> » distingue la liberté de pensée (publique) de l'<em>obéissance</em> civile nécessaire.<br>Exemple : Un citoyen peut discuter publiquement des défauts d'une loi (<em>raisonner</em>), mais doit lui <em>obéir</em> tant qu'elle est en vigueur.`
  },
  // Question n°18
  {
    question: "Question n°18 : Quel est le principal <em>argument</em> utilisé par Dominique de Villepin dans son <em>discours</em> à l'ONU (2003) pour s'opposer à la <em>guerre</em> en Irak ?",
    answers: [
      "La <em>nécessité</em> de laisser plus de temps aux <em>inspections</em>",
      "La <em>faiblesse militaire</em> de la France",
      "L'<em>alliance historique</em> avec Saddam Hussein"
    ],
    correct: 1,
    explanation: `Dans son célèbre <em>discours</em>, Dominique de Villepin utilise un <em>discours</em> délibératif pour exhorter à la paix et dissuader de l'intervention militaire. Son <em>argument</em> central est que la menace n'est pas assez avérée, immédiate et massive pour justifier un recours immédiat à la <em>force</em>. Il plaide pour donner du temps aux <em>inspecteurs</em> de l'ONU et pour privilégier la voie diplomatique et du <em>désarmement</em> contrôlé. Il en appelle à la responsabilité historique et à la sagesse (« un vieux pays... qui a connu les <em>guerres</em>, l'occupation, la barbarie ») pour choisir la voie de la paix et de l'unité internationale.<br>Exemple : « Rien... ne sera le fait de la précipitation, de l'incompréhension, de la suspicion ou de la peur. »`
  },
  // Question n°19
  {
    question: "Question n°19 : Que signifie étymologiquement le mot <em>poésie</em>, issu du grec ποιεῖν (<em>poiein</em>) ?",
    answers: [
      "<em>Faire</em>",
      "<em>Chanter</em>",
      "<em>Rêver</em>"
    ],
    correct: 1,
    explanation: `Le mot « <em>poésie</em> » vient du verbe grec <em>ποιεῖν</em> (<em>poiein</em>), qui signifie « <em>faire</em> », « <em>créer</em> », « <em>fabriquer</em> ». Le <em>poète</em> (<em>ποιητής</em>) est donc un « <em>faiseur</em> », un <em>créateur</em>. Son matériau n'est pas la pierre ou l'argile, mais le langage. Cette étymologie souligne la dimension active, voire <em>artisanale</em>, de la <em>parole</em> poétique : elle ne se contente pas de décrire le monde, elle le refait, le recrée par les mots, donnant forme à une réalité nouvelle ou rendant visible l'<em>essence</em> des choses.<br>Exemple : Pour Mallarmé, dire « une fleur » en <em>poésie</em>, c'est <em>faire</em> advenir « l'absente de tous bouquets », l'Idée pure de la fleur.`
  },
  // Question n°20
  {
    question: "Question n°20 : Comment Stéphane Mallarmé définit-il le <em>projet</em> de la <em>poésie</em> dans <em>Crise de vers</em> ?",
    answers: [
      "Exprimer les <em>sentiments personnels</em> du <em>poète</em>",
      "Décrire la <em>nature</em> avec précision",
      "<em>Transposer</em> un fait de <em>nature</em>"
    ],
    correct: 3,
    explanation: `Mallarmé écrit : « A quoi bon la merveille de <em>transposer</em> un fait de <em>nature</em> en sa presque disparition vibratoire selon le jeu de la <em>parole</em>, cependant, si ce n'est pour qu'en émane, sans la gêne d'un proche ou concret rappel, la notion pure ? » La <em>poésie</em> ne cherche pas à copier ou décrire le monde sensible (la « fleur » concrète). Elle opère une « <em>transposition</em> » qui fait disparaître l'apparence immédiate pour faire surgir, par le jeu des mots et des sons, l'Idée ou l'<em>essence</em> pure de la chose. La <em>parole</em> poétique vise l'intelligible, non le visible.<br>Exemple : Le poème « Le vierge, le vivace et le bel aujourd'hui... » ne décrit pas un cygne, mais évoque l'idée de pureté, de blancheur et d'impuissance <em>créatrice</em>.`
  },
  // Question n°21
  {
    question: "Question n°21 : Quelle est la <em>critique</em> majeure que Socrate (Platon) adresse à l'<em>écriture</em> dans le <em>Phèdre</em> ?",
    answers: [
      "Elle <em>fixe</em> la <em>parole</em> vivante, la rend <em>muette</em> et <em>orpheline</em>",
      "Elle est trop <em>chère</em> et réservée aux <em>riches</em>",
      "Elle est <em>incapable</em> de transmettre des <em>connaissances</em> complexes"
    ],
    correct: 1,
    explanation: `À travers le <em>mythe</em> de Theuth, Socrate présente l'<em>écriture</em> comme un <em>φάρμακον</em> (remède/poison). Elle donne aux hommes « la présomption qu'ils ont la <em>science</em>, non la <em>science</em> elle-même ». L'<em>écrit</em> est une <em>parole</em> morte, <em>figée</em>, qui « roule partout » et ne sait pas à qui <em>parler</em>. Il ne peut répondre aux questions, se défendre, s'adapter. Elle affaiblit la vraie <em>mémoire</em> (intérieure) et produit des « <em>savants</em> imaginaires » (<em>doxosophoi</em>). Seule la <em>parole</em> dialogique, vivante, inscrite dans l'âme de l'apprenant, est capable de <em>vérité</em>.<br>Exemple : Un livre reste toujours <em>silencieux</em> face aux questions du lecteur, contrairement à un maître dans un dialogue.`
  },
  // Question n°22
  {
    question: "Question n°22 : Selon Pierre Bourdieu, quelle est la fonction du <em>pouvoir symbolique</em> de la <em>parole</em> ?",
    answers: [
      "<em>Communiquer</em> des <em>informations</em> neutres",
      "Produire des <em>représentations</em> du monde social",
      "<em>Amuser</em> et <em>divertir</em>"
    ],
    correct: 2,
    explanation: `Dans <em>Ce que parler veut dire</em>, Bourdieu analyse le langage comme un instrument de <em>pouvoir symbolique</em>. La <em>parole</em> n'est pas un simple moyen de <em>communication</em> neutre. Elle « vise à produire et à imposer des <em>représentations</em> (mentales, verbales, graphiques ou théâtrales) du monde social qui soient capables d'agir sur ce monde en agissant sur les <em>représentations</em> que s'en font les agents ». <em>Parler</em>, c'est exercer un <em>pouvoir</em> de nomination, de catégorisation, qui structure la perception de la réalité et contribue à la maintenir ou à la transformer.<br>Exemple : Les <em>discours</em> politiques qui définissent qui est « français », « immigré », « intégré » participent à construire la réalité sociale qu'ils prétendent décrire.`
  },
  // Question n°23
  {
    question: "Question n°23 : Quel est le sens de la célèbre formule de Pascal : 'La <em>justice</em> sans la <em>force</em> est <em>impuissante</em>, la <em>force</em> sans la <em>justice</em> est <em>tyrannique</em> ?",
    answers: [
      "La <em>justice</em> et la <em>force</em> sont <em>inconciliables</em>",
      "Il faut toujours <em>préférer</em> la <em>force</em> à la <em>justice</em>",
      "L'<em>idéal</em> est d'<em>unir</em> la <em>justice</em> et la <em>force</em>"
    ],
    correct: 3,
    explanation: `Pascal expose ici le dilemme tragique du politique. D'un côté, une <em>justice</em> (le droit, la légitimité) qui n'a pas la <em>force</em> pour s'imposer est vaine, contournée par les méchants. De l'autre, une <em>force</em> (la <em>puissance</em>, la coercition) qui n'est pas guidée par la <em>justice</em> n'est qu'arbitraire et <em>tyrannie</em>. L'<em>idéal</em> serait de « mettre ensemble la <em>justice</em> et la <em>force</em> ». Mais Pascal constate amèrement que dans la réalité, « ne pouvant <em>faire</em> que ce qui est <em>juste</em> fût <em>fort</em>, on a <em>fait</em> que ce qui est <em>fort</em> fût <em>juste</em> ». La <em>force</em> finit par se donner à elle-même l'apparence de la <em>justice</em>.<br>Exemple : Un gouvernement <em>légitime</em> mais faible peut être renversé ; une dictature <em>forte</em> se donne des lois pour paraître <em>juste</em>.`
  },
  // Question n°24
  {
    question: "Question n°24 : Que signifie le concept d'« <em>internalité</em> » dans l'analyse de la <em>soumission</em> à l'<em>autorité</em> (expériences type Milgram) ?",
    answers: [
      "Le fait de <em>garder</em> ses <em>pensées</em> pour soi",
      "L'<em>obéissance</em> due à une <em>conviction</em> intime",
      "La <em>tendance</em> à attribuer les <em>événements</em> à des <em>causes internes</em>"
    ],
    correct: 3,
    explanation: `L'<em>internalité</em> est un trait de personnalité qui consiste à attribuer la responsabilité des <em>événements</em> (succès, échecs) à des <em>causes internes</em> (ses propres efforts, capacités) plutôt qu'externes (la chance, les autres, le système). Dans les répliques de l'<em>expérience</em> de Milgram, il a été observé que les participants ayant un score élevé d'<em>internalité</em> administraient en moyenne des chocs électriques plus forts. Cela peut s'expliquer par le fait que les « <em>internes</em> », souvent bien intégrés socialement, adhèrent plus fortement aux normes et à l'<em>autorité</em> institutionnelle, qu'ils perçoivent comme <em>légitime</em> et à laquelle ils se soumettent.<br>Exemple : Un « <em>interne</em> » pensera : « J'<em>obéis</em> parce que c'est mon devoir dans cette <em>expérience</em> scientifique », un « <em>externe</em> » pensera : « C'est l'expérimentateur qui est responsable, pas moi ».`
  },
  // Question n°25
  {
    question: "Question n°25 : Quelle est la caractéristique de l'<em>autorité</em> <em>traditionnelle</em> selon la typologie de Max Weber ?",
    answers: [
      "Elle repose sur la <em>croyance</em> en la <em>sainteté</em> des ordres et des <em>pouvoirs</em> de commandement existant de tout temps",
      "Elle repose sur la <em>croyance</em> en la <em>légalité</em> des règles établies",
      "Elle repose sur la <em>dévotion</em> envers la <em>sainteté</em>, la <em>valeur</em> héroïque ou le <em>caractère exemplaire</em> d'une personne"
    ],
    correct: 1,
    explanation: `L'<em>autorité</em> <em>traditionnelle</em>, selon Weber, trouve sa légitimité dans « la <em>croyance</em> en la <em>sainteté</em> des ordres et des <em>pouvoirs</em> de commandement existant de tout temps ». On <em>obéit</em> au chef, au roi, au père parce que « cela a toujours été ainsi », parce que la coutume et la tradition ont sanctifié cette position. L'<em>autorité</em> est héréditaire ou transmise selon des règles immémoriales. Son modèle est la monarchie de droit divin ou le <em>patriarcat</em> familial.<br>Exemple : L'<em>autorité</em> du roi Louis XIV découlait de la tradition monarchique et du sacre religieux, bien plus que de ses qualités personnelles ou d'une constitution.`
  },
  // Question n°26
  {
    question: "Question n°26 : Quel rôle joue la <em>parole</em> dans le <em>contrat social</em> selon Rousseau ?",
    answers: [
      "Elle est l'<em>instrument</em> de la <em>tromperie</em> des <em>puissants</em>",
      "Elle est <em>inutile</em>, seul le <em>pacte</em> tacite importe",
      "Chacun <em>aliène</em> sa <em>liberté</em> naturelle à la <em>volonté générale</em>"
    ],
    correct: 3,
    explanation: `Pour Rousseau, le <em>contrat social</em> est l'acte <em>fondateur</em> par lequel des individus isolés deviennent un peuple. Cet acte est essentiellement verbal/discursif : « Chacun de nous met en commun sa personne et toute sa <em>puissance</em> sous la suprême direction de la <em>volonté générale</em> ». La <em>parole</em> <em>performative</em> du <em>pacte</em> (« nous contractons ») fait <em>advenir</em> une nouvelle réalité politique. Elle transforme la <em>liberté</em> naturelle (faire tout ce qu'on peut) en <em>liberté</em> civile (<em>obéir</em> à la loi qu'on s'est prescrite). L'<em>autorité</em> <em>légitime</em> émane ainsi de cette <em>parole</em> collective <em>fondatrice</em>.<br>Exemple : La Déclaration des droits de l'homme et du citoyen de 1789 est une <em>parole</em> <em>performative</em> qui institue un nouvel ordre politique fondé sur la souveraineté nationale.`
  },
  // Question n°27
  {
    question: "Question n°27 : Que désigne le terme <em>oint</em> (Christ, Messie) dans le contexte de la <em>légitimation</em> du <em>pouvoir</em> monarchique ?",
    answers: [
      "Celui qui est <em>élu</em> par Dieu",
      "Le <em>guerrier</em> le plus <em>fort</em>",
      "Le plus <em>sage</em> du royaume"
    ],
    correct: 1,
    explanation: `L'« <em>oint</em> » (du latin « <em>unctus</em> », « <em>oint</em> ») traduit les termes hébreu « <em>messie</em> » et grec « <em>christos</em> ». Il désigne celui qui a reçu l'<em>onction</em> d'huile sacrée, signe de son élection et de sa consécration par Dieu. Dans la monarchie de droit divin (notamment en France avec le sacre à Reims), le roi est « l'<em>oint</em> du Seigneur ». Cette <em>onction</em> lui confère une <em>autorité</em> (<em>auctoritas</em>) <em>sacrée</em>, qui dépasse sa personne physique. Il incarne ainsi une double nature, à l'image du Christ : un corps mortel et un corps politique immortel (théorie des « deux corps du roi » étudiée par Kantorowicz).<br>Exemple : Le roi de France était réputé guérir les écrouelles (scrofules) par son toucher, <em>pouvoir</em> thaumaturgique lié à son <em>onction</em> <em>sacrée</em>.`
  },
  // Question n°28
  {
    question: "Question n°28 : Quelle est la fonction principale du <em>serment</em> dans l'accès à une fonction (médecin, président, etc.) ?",
    answers: [
      "Créer un <em>engagement</em> solennel",
      "<em>Rassurer</em> l'<em>opinion publique</em>",
      "Satisfaire une <em>formalité</em> administrative"
    ],
    correct: 1,
    explanation: `Le <em>serment</em> est un énoncé <em>performative</em> par excellence. En prononçant la formule (« Je jure... »), l'individu accomplit l'acte de s'<em>engager</em> solennellement. Cet <em>engagement</em> a une double portée : morale (il lie la conscience de la personne) et souvent juridique (sa violation peut entraîner des sanctions). Le <em>serment</em> institue une <em>autorité</em> déléguée (celle du médecin, du président) et en même temps la soumet à des règles supérieures (la Constitution, l'éthique). Il marque le passage d'un statut privé à un statut public investi d'<em>autorité</em>.<br>Exemple : Le <em>serment</em> d'Hippocrate <em>engage</em> le médecin envers ses patients et la profession ; le <em>serment</em> présidentiel <em>engage</em> le chef de l'État envers la Constitution.`
  },
  // Question n°29
  {
    question: "Question n°29 : Dans l'Exode, comment Dieu répond-il à l'<em>objection</em> de Moïse qui se dit <em>lent à la parole</em> pour convaincre Pharaon ?",
    answers: [
      "Il lui donne un <em>porte-parole</em>, son frère Aaron",
      "Il lui apprend l'<em>éloquence</em> par un <em>miracle</em>",
      "Il renonce à l'envoyer"
    ],
    correct: 1,
    explanation: `Moïse, choisi par Dieu pour libérer les Hébreux, <em>objecte</em> : « Je ne suis pas un homme doué pour <em>parler</em>... j'ai la bouche et la langue embarrassées ». Dieu répond d'abord en affirmant sa souveraineté sur les facultés humaines : « Qui a donné une bouche à l'homme ? ... N'est-ce pas moi, l'Éternel ? ». Puis, face à l'insistance de Moïse, il lui délègue une partie de son <em>autorité</em> prophétique en lui donnant Aaron comme <em>porte-parole</em> : « Tu lui <em>parleras</em> et tu mettras les paroles dans sa bouche, et moi, je serai avec ta bouche et avec sa bouche ». L'<em>autorité</em> de la <em>parole</em> divine peut ainsi se déléguer et s'incarner dans une chaîne de transmission.<br>Exemple : Aaron deviendra le « prophète » de Moïse, transmettant ses paroles à Pharaon avec <em>éloquence</em>.`
  },
  // Question n°30
  {
    question: "Question n°30 : Que signifie l'expression <em>parole déviante</em> dans le contexte de la <em>critique</em> socratique ?",
    answers: [
      "Une <em>parole</em> prononcée par un <em>marginal</em>",
      "Une <em>parole</em> grammaticalement <em>incorrecte</em>",
      "Une <em>parole</em> qui s'<em>écarte</em> de la <em>recherche</em> de la <em>vérité</em>"
    ],
    correct: 3,
    explanation: `Pour Socrate/Platon, une <em>parole</em> est « <em>déviante</em> » lorsqu'elle <em>dévie</em> de sa fin propre, qui est la <em>recherche</em> de la <em>vérité</em> (<em>alètheia</em>) et du bien. C'est le cas de la <em>rhétorique</em> sophistique, qui vise à <em>persuader</em> coûte que coûte, indépendamment du vrai ; de l'<em>écriture</em>, qui fige et appauvrit la pensée vivante ; du sérieux pompeux, qui masque l'ignorance sous des apparences savantes. Face à ces <em>déviances</em>, Socrate oppose la <em>parole</em> philosophique : dialogique, ironique, aporétique, toujours en quête, incarnée dans une relation vivante avec l'interlocuteur.<br>Exemple : Les <em>discours</em> flatteurs des sophistes auprès des jeunes aristocrates sont des <em>paroles</em> <em>déviantes</em> car ils visent à plaire et à gagner de l'argent, non à éveiller à la <em>vérité</em>.`
  },
  // Question n°31
  {
    question: "Question n°31 : Comment Pierre Clastres caractérise-t-il la <em>parole</em> du <em>chef</em> dans les sociétés primitives qu'il étudie ?",
    answers: [
      "Elle est <em>secrète</em> et réservée aux <em>initiés</em>",
      "Elle est un <em>ordre</em> impératif et <em>coercitif</em>",
      "Elle est <em>prolixe</em> sans dire rien de <em>nouveau</em>"
    ],
    correct: 3,
    explanation: `Dans <em>La société contre l'État</em>, l'ethnologue Pierre Clastres observe que dans les sociétés amazoniennes, le <em>chef</em> a l'obligation de <em>parler</em> longuement. Mais cette <em>parole</em> n'est pas un commandement. Elle consiste « pour l'essentiel, en une célébration, maintes fois répétée, des normes de vie traditionnelles ». Le <em>chef</em> ne dit « littéralement... rien » de <em>nouveau</em> ; il ne crée pas la loi, il la récite. Son <em>autorité</em> n'est pas un <em>pouvoir</em> de décision, mais une fonction de rappel et d'incarnation du consensus communautaire. La <em>parole</em> du <em>chef</em> maintient la cohésion sociale en réaffirmant ce que tout le monde sait déjà.<br>Exemple : Le <em>chef</em> prononce des <em>discours</em> lors des fêtes pour rappeler les <em>mythes</em> <em>fondateurs</em> et les règles du groupe, sans les modifier.`
  },
  // Question n°32
  {
    question: "Question n°32 : Quel est le sens de la formule de Carl Schmitt : 'Le <em>Führer</em> protège le droit' ?",
    answers: [
      "L'<em>action</em> du <em>Führer</em> est la <em>justice</em> qui crée le droit",
      "Le <em>chef</em> a pour <em>devoir</em> de faire respecter les lois existantes",
      "Le <em>chef</em> est <em>soumis</em> à la loi comme tout le monde"
    ],
    correct: 1,
    explanation: `Carl Schmitt, théoricien du droit nazi, justifie ici les purges de la Nuit des Longs Couteaux (1934). Il affirme que « l'<em>action</em> du <em>Führer</em> était juridictionnelle. Elle n'est donc pas soumise à l'organisation judiciaire, mais elle est elle-même la <em>justice</em> suprême. » Dans cette conception totalitaire, la <em>parole</em>/volonté du <em>chef</em> fait loi et <em>justice</em> immédiatement, sans médiation d'institutions indépendantes. Le <em>Führer</em> n'applique pas un droit préexistant ; son <em>action</em> souveraine crée le droit dans l'instant. C'est l'apogée d'une <em>autorité</em> personnelle et charismatique absorbant en elle toute légitimité.<br>Exemple : Hitler, en ordonnant l'exécution de ses opposants SA, ne violait pas la loi ; sa décision était la loi.`
  },
  // Question n°33
  {
    question: "Question n°33 : Quelle est la différence entre <em>mythe</em>', <em>légende</em> et <em>fable</em> selon les définitions retenues ?",
    answers: [
      "Le <em>mythe</em> est grec, la <em>légende</em> est médiévale, la <em>fable</em> est moderne",
      "Le <em>mythe</em> est vrai, la <em>légende</em> est fausse, la <em>fable</em> est morale",
      "Le <em>mythe</em> explique <em>symboliquement</em>, la <em>légende</em> <em>amplifie</em> un fond <em>historique</em>, la <em>fable</em> enseigne une <em>morale</em> explicite"
    ],
    correct: 3,
    explanation: `Le <em>mythe</em> est un récit <em>symbolique</em> sur les origines, les dieux ou la condition humaine, <em>fondateur</em> pour une culture. La <em>légende</em> (du latin « <em>legenda</em> », « ce qui doit être lu ») est un récit populaire traditionnel qui peut s'appuyer sur un fond <em>historique</em> réel, mais <em>amplifié</em> et merveilleux. La <em>fable</em> est un récit bref, souvent animalier, comportant une <em>morale</em> explicite à la fin. Le <em>mythe</em> vise à donner du sens, la <em>légende</em> à glorifier ou émerveiller, la <em>fable</em> à instruire <em>moralement</em>.<br>Exemple : Le <em>mythe</em> d'Œdipe explore la destinée et la faute ; la <em>légende</em> du roi Arthur mêle histoire et merveilleux ; la <em>fable</em> « Le Corbeau et le Renard » enseigne à se méfier de la flatterie.`
  },
  // Question n°34
  {
    question: "Question n°34 : Que signifie l'expression <em>parole utopique</em> au sens étymologique strict ?",
    answers: [
      "Une <em>parole</em> qui décrit une société <em>parfaite</em>",
      "Une <em>parole</em> idéaliste",
      "Une <em>parole</em> sans <em>lieu</em> propre"
    ],
    correct: 3,
    explanation: `<em>Utopique</em> vient du grec <em>οὐ-τόπος</em> (<em>ou-topos</em>), qui signifie « sans <em>lieu</em> ». Une <em>parole utopique</em> est donc, au sens premier, une <em>parole</em> qui n'a pas de <em>lieu</em> institutionnel assigné, qui échappe aux cadres établis du discours (tribunal, assemblée, chaire, média). Elle est par essence marginale, subversive, déplacée. La <em>parole</em> authentique du philosophe, du poète ou du prophète est souvent <em>utopique</em> en ce sens : elle surgit hors des lieux prévus, dérange l'ordre discursif établi. Ce n'est que secondairement qu'« <em>utopique</em> » a pris le sens de « chimérique ».<br>Exemple : Socrate <em>parlait</em> sur l'agora, dans la rue, hors des institutions scolaires ou politiques officielles ; sa <em>parole</em> était <em>utopique</em>.`
  },
  // Question n°35
  {
    question: "Question n°35 : Quel rôle joue le <em>silence</em> dans l'analyse de la <em>prise de parole</em> ?",
    answers: [
      "Il est toujours un signe de <em>soumission</em> ou d'<em>impuissance</em>",
      "Il doit être absolument <em>combattu</em> pour que la <em>liberté d'expression</em> règne",
      "Il est l'<em>arrière-plan</em> d'où émerge la <em>parole</em>"
    ],
    correct: 3,
    explanation: `Le <em>silence</em> n'est pas le simple contraire ou l'absence de <em>parole</em>. Il en est la condition de possibilité : comme le blanc du papier permet l'écriture, le <em>silence</em> est l'espace de résonance où la <em>parole</em> prend sens. De plus, le <em>silence</em> peut être lui-même une <em>parole</em> éloquente : <em>silence</em> de refus, de mépris, de recueillement, de complicité. Dans un débat, savoir se taire au bon moment est une stratégie rhétorique. <em>Parler</em>, c'est aussi savoir laisser des <em>silences</em>. La « minute de <em>silence</em> » est une <em>parole</em> collective non verbale.<br>Exemple : Le <em>silence</em> obstiné d'un accusé face à un juge est une <em>parole</em> de défi ou de protection.`
  },
  // Question n°36
  {
    question: "Question n°36 : Que signifie le concept d'<em>efficacité symbolique</em> développé par Claude Lévi-Strauss ?",
    answers: [
      "L'<em>effet magique</em> des mots",
      "L'<em>impact persuasif</em> des figures de style",
      "La <em>capacité</em> à produire des <em>effets réels</em>"
    ],
    correct: 3,
    explanation: `L'<em>efficacité symbolique</em> désigne le <em>pouvoir</em> qu'ont certains <em>discours</em> rituels ou <em>mythiques</em> de produire des <em>effets</em> concrets (comme une guérison) non par magie, mais en opérant une réorganisation <em>symbolique</em>. En transposant un trouble physiologique individuel (une maladie) dans le langage <em>mythique</em> partagé par la collectivité, le <em>chaman</em> donne un sens social à ce trouble. Ce réencadrement <em>symbolique</em> permet au malade de réintégrer son expérience dans un ordre compréhensible, ce qui peut déclencher des processus psychosomatiques de guérison. La <em>parole</em> agit comme un opérateur de transformation du sens.<br>Exemple : Le chant du <em>chaman</em> décrit la lutte des <em>esprits</em> dans le corps de la femme ; cette narration « met en ordre » le chaos de la douleur et facilite l'accouchement.`
  },
  // Question n°37
  {
    question: "Question n°37 : Comment Hannah Arendt définit-elle la relation entre <em>autorité</em> et <em>tradition</em> ?",
    answers: [
      "L'<em>autorité</em> est l'<em>ennemie</em> de la <em>tradition</em>",
      "La <em>tradition</em> fonde et est <em>gardienne</em> de l'<em>autorité</em>",
      "L'<em>autorité</em> et la <em>tradition</em> n'ont aucun <em>lien</em> nécessaire"
    ],
    correct: 2,
    explanation: `Pour Arendt, l'<em>autorité</em> (au sens romain d'<em>auctoritas</em>) est inextricablement liée à la <em>tradition</em> et à la <em>fondation</em>. L'<em>autorité</em> du Sénat romain venait de ce qu'il était le <em>gardien</em> et le continuateur de l'acte <em>fondateur</em> de Rome. L'<em>autorité</em> « augmente » le présent en le reliant constamment au passé <em>fondateur</em>. Dans le monde moderne, la crise de l'<em>autorité</em> est, selon Arendt, une crise de la <em>tradition</em> : le fil qui reliait le présent à l'origine s'est rompu. Sans <em>tradition</em> vivante, l'<em>autorité</em> dégénère en <em>violence</em> pure (<em>potestas</em>) ou en persuasion.<br>Exemple : L'<em>autorité</em> d'un professeur peut venir en partie de sa position dans une longue <em>tradition</em> de transmission du savoir, qu'il incarne et perpétue.`
  },
  // Question n°38
  {
    question: "Question n°38 : Que signifie l'affirmation selon laquelle la <em>parole poétique</em> est une <em>parole gratuite</em> ?",
    answers: [
      "Elle ne coûte <em>rien</em> à produire",
      "Elle est souvent <em>offerte</em> au public",
      "Elle n'a pas d'autre <em>fin</em> qu'elle-même"
    ],
    correct: 3,
    explanation: `La <em>parole poétique</em> est dite « <em>gratuite</em> » au sens où elle n'est pas soumise à une finalité extérieure. Elle ne vise pas à informer, convaincre, vendre, ordonner ou divertir (du moins pas comme fin principale). Elle est à elle-même sa propre fin : elle existe pour le plaisir du langage, pour la révélation de l'être, pour la beauté. Cette <em>gratuité</em> la distingue radicalement de la « <em>parole</em> de <em>communication</em> » utilitaire et en fait une forme de résistance à la réduction de la <em>parole</em> à un simple instrument.<br>Exemple : Un poème de René Char ne « <em>sert</em> » à rien d'utile ; il est un acte de langage pur, une offrande à la langue elle-même.`
  },
  // Question n°39
  {
    question: "Question n°39 : Quelle est la caractéristique d'une <em>parole testimoniale</em> ?",
    answers: [
      "Elle <em>atteste</em> d'un fait <em>objectif</em> et <em>vérifiable</em>",
      "Elle est prononcée devant un <em>tribunal</em>",
      "Elle <em>engage</em> celui qui <em>parle</em>"
    ],
    correct: 3,
    explanation: `Une <em>parole testimoniale</em> est une <em>parole</em> qui fait acte de témoignage. Celui qui <em>parle</em> (« je témoigne que... ») s'<em>engage</em> personnellement dans son énonciation. Il certifie, par sa présence et son intégrité, la véracité de ce qu'il rapporte (une expérience, un événement vécu, une conviction). Cette <em>parole</em> est incarnée : sa <em>force</em> vient de l'identification entre le locuteur et son discours. Elle s'oppose à la <em>parole</em> anonyme, détachée, ou purement informative. Le témoignage fonde une <em>autorité</em> particulière, celle de l'expérience directe.<br>Exemple : Le témoignage d'une rescapée d'Auschwitz a une <em>autorité</em> morale et historique que n'a pas un manuel d'histoire, car elle incarne dans sa <em>parole</em> la mémoire vive de l'événement.`
  },
  // Question n°40
  {
    question: "Question n°40 : Comment Démosthène, dans la <em>Première Philippique</em>, cherche-t-il à exhorter les Athéniens à l'<em>action</em> ?",
    answers: [
      "En piquant leur <em>orgueil</em>",
      "En les flattant sur leur <em>puissance</em> passée",
      "En leur promettant des <em>richesses</em>"
    ],
    correct: 1,
    explanation: `Démosthène utilise un <em>discours</em> délibératif pour exhorter ses concitoyens à se préparer à la <em>guerre</em> contre Philippe de Macédoine. Sa stratégie est de provoquer la honte et de réveiller la fierté athénienne. Il les apostrophe avec véhémence : « Quand est-ce que vous ferez ce que demande le salut de l'État ? » Il raille leur passivité (« vous demander les uns aux autres : Qu'y a-t-il de <em>nouveau</em> ? ») et leur fait comprendre que leur inaction est la cause même de la <em>puissance</em> de Philippe. L'<em>autorité</em> de sa <em>parole</em> vient de sa clairvoyance politique et de son ardent patriotisme.<br>Exemple : « Philippe est-il mort ? ... Et que vous importe qu'il soit mort ou vivant ? puisque, s'il n'existait plus, vous vous feriez bientôt à vous-mêmes un autre Philippe, en gardant toujours la même conduite. »`
  },
  // Question n°41
  {
    question: "Question n°41 : Que signifie l'expression <em>parole d'engagement</em> dans le contexte politique ?",
    answers: [
      "Un <em>discours</em> détaillé",
      "Un <em>contrat</em> écrit",
      "Une <em>promesse</em> publique"
    ],
    correct: 3,
    explanation: `Une <em>parole d'engagement</em> est une <em>promesse</em> publique par laquelle un individu (souvent un homme politique) s'<em>engage</em> à faire ou à être quelque chose dans le futur. Cette <em>parole</em> <em>performative</em> crée une attente chez les auditeurs et <em>engage</em> la responsabilité, la crédibilité et l'honneur de celui qui <em>parle</em>. Le fait de « donner sa <em>parole</em> » crée un lien moral. Si la <em>promesse</em> n'est pas tenue, c'est la confiance et l'<em>autorité</em> du locuteur qui sont atteintes. Dans l'ère médiatique, cet <em>engagement</em> est souvent renforcé par des formules comme « je vous le dis les yeux dans les yeux ».<br>Exemple : Un candidat qui promet « Je ne fermerai pas telle usine » <em>engage</em> sa <em>parole</em> ; s'il la ferme une fois élu, il perd en crédibilité et en <em>autorité</em> morale.`
  },
  // Question n°42
  {
    question: "Question n°42 : Quelle est la différence entre <em>universel</em> et <em>général</em> selon les définitions données ?",
    answers: [
      "L'<em>universel</em> est <em>abstrait</em>, le <em>général</em> est <em>concret</em>",
      "L'<em>universel</em> vaut pour tous, le <em>général</em> vaut pour la <em>plupart</em>",
      "L'<em>universel</em> est <em>quantitatif</em>, le <em>général</em> est <em>qualitatif</em>"
    ],
    correct: 2,
    explanation: `L'<em>universel</em> (du latin « <em>universus</em> », « tout entier ») désigne ce qui s'applique nécessairement à tous les individus d'une catégorie, sans exception possible. C'est le registre de la loi logique, mathématique ou morale rationnelle (ex: « Tous les hommes sont mortels »). Le <em>général</em> désigne ce qui est vrai pour la <em>majorité</em>, le plus souvent, mais admet des exceptions. C'est le registre statistique et empirique (ex: « Les chats n'aiment pas l'eau » – mais certains si). Une loi juste aspire à l'<em>universalité</em> ; une coutume est <em>générale</em>.<br>Exemple : Le droit à la vie est un principe <em>universel</em> des droits de l'homme ; la mode vestimentaire est un phénomène <em>général</em> dans une société.`
  },
  // Question n°43
  {
    question: "Question n°43 : Comment Machiavel justifie-t-il, dans <em>Le Prince</em>, qu'il vaut mieux être <em>craint</em> qu'<em>aimé</em> ?",
    answers: [
      "Parce que les hommes sont naturellement <em>méchants</em> et ne méritent pas l'<em>amour</em>",
      "Parce que l'<em>amour</em> est un lien <em>versatile</em> et la <em>crainte</em> du châtiment est plus <em>stable</em>",
      "Parce que la <em>crainte</em> est <em>moralement</em> beaucoup plus <em>noble</em> que l'<em>amour</em>"
    ],
    correct: 2,
    explanation: `Machiavel, dans un calcul purement pragmatique de conservation du <em>pouvoir</em>, argue que « l'<em>amour</em> tient par un lien de reconnaissance bien faible pour la perversité humaine, et qui cède au moindre motif d'intérêt personnel ; au lieu que la <em>crainte</em> résulte de la menace du châtiment, et cette peur ne s'évanouit jamais. » Pour lui, l'<em>autorité</em> du prince doit reposer sur une <em>crainte</em> calculée : assez <em>forte</em> pour assurer l'<em>obéissance</em>, mais pas au point de provoquer la haine et la révolte. C'est une vision cynique de l'<em>autorité</em> comme <em>potestas</em> (<em>puissance</em> de contrainte) dénuée de légitimité morale (<em>auctoritas</em>).<br>Exemple : Un prince qui est seulement <em>aimé</em> risque d'être abandonné en cas de crise ; un prince <em>craint</em> mais pas haï peut compter sur l'<em>obéissance</em> par intérêt.`
  },
  // Question n°44
  {
    question: "Question n°44 : Quel est le sens de la formule de l'apôtre Paul : 'Toute <em>autorité</em> vient de Dieu' (Romains 13:1) ?",
    answers: [
      "Le <em>pouvoir</em> politique a été voulu par Dieu et mérite donc <em>obéissance</em>",
      "Les détenteurs du <em>pouvoir</em> sont toujours des <em>saints</em>",
      "Seul un roi <em>chrétien</em> a une <em>autorité</em> légitime"
    ],
    correct: 1,
    explanation: `Dans un contexte où les premières communautés chrétiennes sont minoritaires dans l'Empire romain, Paul exhorte à l'<em>obéissance</em> civile : « Que chacun se soumette aux <em>autorités</em> qui nous gouvernent, car toute <em>autorité</em> vient de Dieu, et celles qui existent ont été établies par Dieu. » Cette thèse fonde la doctrine de l'origine divine du <em>pouvoir</em> politique, quelle que soit la personne du détenteur. Elle légitime l'ordre établi et dissuade la révolte, tout en subordonnant ultimement le <em>pouvoir</em> temporel à Dieu. Cette idée sera centrale pour la théorie médiévale des « deux glaives » et la monarchie de droit divin.<br>Exemple : Même l'empereur Néron, persécuteur des chrétiens, tire son <em>autorité</em> de Dieu, selon cette lecture, ce qui impose (jusqu'à un certain point) l'<em>obéissance</em>.`
  },
  // Question n°45
  {
    question: "Question n°45 : Que signifie le concept de <em>domination légale-rationnelle</em> chez Max Weber ?",
    answers: [
      "La <em>domination</em> par la <em>force</em> de la loi",
      "L'<em>obéissance</em> à un leader <em>charismatique</em> qui promulgue des lois",
      "La <em>croyance</em> en la <em>légalité</em> des règles établies"
    ],
    correct: 3,
    explanation: `La <em>domination légale-rationnelle</em> est le troisième type de légitimité identifié par Weber. Elle repose sur « la <em>croyance</em> en la <em>légalité</em> des règlements arrêtés et du droit de donner des directives qu'ont ceux qui sont appelés à exercer la <em>domination</em> par ces moyens ». On n'<em>obéit</em> pas à une personne, mais à la loi impersonnelle et à la fonction qu'elle incarne. C'est le modèle de l'État moderne bureaucratique, de l'administration, de l'entreprise. L'<em>autorité</em> y est dépersonnalisée, procédurale et limitée par des règles.<br>Exemple : On <em>obéit</em> à un agent de police ou à un chef de service non pas à titre personnel, mais parce qu'ils représentent et appliquent la loi ou le règlement intérieur.`
  },
  // Question n°46
  {
    question: "Question n°46 : Quelle est la fonction de la <em>parole fondatrice</em> ?",
    answers: [
      "<em>Annoncer</em> un <em>programme</em> politique",
      "Faire l'<em>éloge</em> des <em>fondateurs</em>",
      "<em>Instituer</em> une nouvelle réalité"
    ],
    correct: 3,
    explanation: `Une <em>parole fondatrice</em> est une <em>parole</em> qui fait <em>advenir</em>, par sa seule énonciation <em>performative</em>, une entité nouvelle. Elle brise la continuité et inaugure un ordre différent. C'est la <em>parole</em> qui institue : « Nous, peuple des États-Unis... » (Constitution américaine), « Je fonde la République » (déclaration), « Je vous baptise... ». Cette <em>parole</em> a une <em>autorité</em> originaire ; elle est l'acte de naissance symbolique. Elle crée le cadre à l'intérieur duquel d'autres paroles (lois, décisions) pourront ensuite avoir sens et <em>autorité</em>.<br>Exemple : Le « <em>Fiat lux</em> » de la Genèse est la <em>parole fondatrice</em> du cosmos ; la Déclaration d'Indépendance des États-Unis est la <em>parole fondatrice</em> de la nation américaine.`
  },
  // Question n°47
  {
    question: "Question n°47 : Que signifie l'expression <em>parole ironique</em> dans la <em>méthode</em> socratique ?",
    answers: [
      "Une <em>parole</em> qui dit le <em>contraire</em> de ce qu'elle pense pour tromper",
      "Une <em>parole</em> <em>moqueuse</em> et <em>méprisante</em>",
      "Une <em>parole</em> qui feint l'<em>ignorance</em> pour <em>révéler</em> celle de l'autre"
    ],
    correct: 3,
    explanation: `L'<em>ironie</em> socratique (<em>είρωνεία</em>, <em>eirôneia</em>) est une attitude discursive fondamentale de Socrate. Il feint l'<em>ignorance</em> (« Je sais que je ne sais rien »), pose des questions naïves, et se déclare l'élève de son interlocuteur. Cette feinte a un but pédagogique et dialectique : elle pousse l'interlocuteur, souvent présomptueux de son savoir, à exposer ses opinions. Socrate peut alors, par un questionnement serré, <em>révéler</em> les contradictions de ces opinions. L'<em>ironie</em> n'est pas méchante mais stratégique : elle déstabilise les certitudes non fondées pour ouvrir la voie à une <em>recherche</em> authentique.<br>Exemple : Socrate demande à un général : « Qu'est-ce que le courage ? » et, feignant d'admirer sa réponse, l'amène à se contredire, montrant qu'il ne sait pas vraiment ce qu'est le courage.`
  },
  // Question n°48
  {
    question: "Question n°48 : Comment le <em>mythe</em> des androgynes (Platon, <em>Le Banquet</em>) explique-t-il l'origine de l'<em>amour</em> ?",
    answers: [
      "L'<em>amour</em> est le <em>désir</em> de retrouver notre <em>moitié</em>",
      "L'<em>amour</em> est une <em>punition</em> des dieux",
      "L'<em>amour</em> est une <em>invention</em> des poètes"
    ],
    correct: 1,
    explanation: `Selon le <em>mythe</em> raconté par Aristophane dans <em>Le Banquet</em>, les humains étaient à l'origine des êtres ronds et doubles (androgyne, masculin-masculin, féminin-féminin). Par orgueil, ils tentèrent d'escalader l'Olympe. Zeus les coupa en deux pour les affaiblir. Depuis, chaque <em>moitié</em> erre à la <em>recherche</em> de sa <em>moitié</em> originelle, et c'est ce <em>désir</em> de fusion qui est l'<em>amour</em> (Éros). L'<em>amour</em> est donc « l'aspiration à l'antique nature », l'effort pour « guérir la nature humaine » et retrouver l'unité perdue. Le <em>mythe</em> explique la <em>puissance</em> et la nostalgie du sentiment amoureux.<br>Exemple : « Nous sommes devenus deux ; aussi chacun <em>cherche</em> sa <em>moitié</em>. » Cette explication <em>symbolique</em> rend compte de l'intensité du <em>désir</em> d'union.`
  },
  // Question n°49
  {
    question: "Question n°49 : Que signifie la <em>délégation d'autorité</em> dans l'exemple biblique de Moïse et Aaron ?",
    answers: [
      "Le <em>transfert</em> complet du <em>pouvoir</em> à un subordonné",
      "La <em>renonciation</em> à son propre <em>discours</em>",
      "La <em>transmission</em> d'une <em>parole</em> autorisée"
    ],
    correct: 3,
    explanation: `Moïse, investi par Dieu, délègue à son frère Aaron la fonction de <em>porte-parole</em>. Dieu dit : « Tu lui <em>parleras</em> et tu mettras les paroles dans sa bouche, et moi, je serai avec ta bouche et avec sa bouche ». Aaron ne <em>parle</em> pas en son nom propre ; il est la « bouche » de Moïse, qui lui-même est le représentant de Dieu. L'<em>autorité</em> de la <em>parole</em> d'Aaron dérive entièrement de cette chaîne de <em>délégation</em>. Sa <em>parole</em> est <em>performative</em> parce qu'elle est investie de l'<em>autorité</em> divine qu'il transmet. C'est le modèle des prophètes et, en politique, des ambassadeurs ou <em>porte-parole</em> officiels.<br>Exemple : Un ambassadeur qui déclare : « Mon gouvernement exige... » <em>parle</em> avec l'<em>autorité</em> de l'État qu'il représente, non en son nom personnel.`
  },
  // Question n°50
  {
    question: "Question n°50 : Quel est l'enjeu du <em>serment d'allégeance</em> dans les relations féodales ?",
    answers: [
      "Un acte <em>performative</em> hiérarchique",
      "Un simple <em>formulaire</em> juridique",
      "Une <em>promesse</em> d'<em>amitié</em>"
    ],
    correct: 1,
    explanation: `Le <em>serment</em> féodal (l'hommage) est un acte solennel de <em>parole</em> qui institue la relation vassalique. Le vassal place ses mains entre celles du seigneur et dit : « Je deviens votre homme ». Le seigneur lui donne l'accolade et parfois un objet <em>symbolique</em> (un fief). Par ces paroles et gestes, le vassal s'<em>engage</em> à la fidélité et au service (<em>auxilium</em> et <em>consilium</em>) ; le seigneur s'<em>engage</em> à la protection et à l'entretien. L'<em>autorité</em> du seigneur sur le vassal naît de cet échange <em>performative</em>. C'est une <em>autorité</em> personnelle, contractuelle et sacralisée par le <em>serment</em>.<br>Exemple : Cet acte de <em>parole</em> crée la pyramide féodale, fondement de l'ordre politique médiéval, distinct à la fois de la parenté et de l'État moderne.`
  },
  // Question n°51
  {
    question: "Question n°51 : Quelle est la caractéristique d'une <em>parole prophétique</em> ?",
    answers: [
      "Elle utilise un langage <em>codé</em> et <em>obscur</em>",
      "Elle prédit l'avenir avec <em>exactitude</em>",
      "Elle <em>dénonce</em> les <em>injustices</em>"
    ],
    correct: 3,
    explanation: `La <em>parole prophétique</em> (dans les traditions biblique et coranique notamment) n'est pas principalement divinatoire. Le prophète (<em>nabi</em> en hébreu) est un « <em>porte-parole</em> » de Dieu. Sa <em>parole</em> est une interpellation vigoureuse adressée au peuple et aux <em>puissants</em>, <em>dénonçant</em> l'idolâtrie, l'<em>injustice</em> sociale, l'hypocrisie religieuse, et appelant à un retour à l'Alliance (la Torah). Elle annonce des malheurs (châtiments) si l'on ne se convertit pas. L'<em>autorité</em> du prophète vient de sa conviction d'être mandaté par Dieu, non d'une institution. Sa <em>parole</em> est souvent en <em>conflit</em> avec l'<em>autorité</em> établie (rois, prêtres).<br>Exemple : Le prophète Amos tonne : « Je hais, je méprise vos fêtes... Mais que le droit coule comme l'eau, et la <em>justice</em> comme un torrent intarissable ! » (Amos 5, 21-24).`
  },
  // Question n°52
  {
    question: "Question n°52 : Comment la <em>parole</em> de l'<em>oracle</em> (comme la Pythie à Delphes) était-elle considérée dans l'Antiquité ?",
    answers: [
      "Comme une <em>parole</em> humaine éclairée",
      "Comme une <em>supercherie</em> des prêtres",
      "Comme une <em>parole</em> divine <em>énigmatique</em>"
    ],
    correct: 3,
    explanation: `La Pythie, assise sur un trépied au-dessus d'une faille d'où émanaient des vapeurs, prononçait des paroles incohérentes sous l'effet d'une possession divine (par Apollon). Ces paroles étaient ensuite transcrites et versifiées par les prêtres en réponses souvent <em>ambiguës</em>. L'<em>oracle</em> ne donnait pas des ordres clairs, mais des <em>énigmes</em> à interpréter. Son <em>autorité</em> était immense : on le consultait pour les décisions cruciales (<em>fondation</em> de colonies, déclarations de <em>guerre</em>). La <em>parole</em> oraculaire était <em>performative</em> : elle validait ou invalidait un projet, mais laissait à l'homme la responsabilité de l'interpréter correctement.<br>Exemple : L'<em>oracle</em> dit à Crésus : « Si tu traverses le fleuve Halys, tu détruiras un grand empire. » Crésus interprète qu'il détruira l'empire perse ; c'est le sien qui sera détruit.`
  },
  // Question n°53
  {
    question: "Question n°53 : Que signifie le concept de « <em>violence symbolique</em> » développé par Pierre Bourdieu ?",
    answers: [
      "Les <em>insultes</em> et le <em>harcèlement</em> verbal",
      "L'<em>imposition</em> de <em>schèmes</em> de perception",
      "La <em>violence</em> physique <em>légitimée</em> par le <em>discours</em>"
    ],
    correct: 2,
    explanation: `La <em>violence symbolique</em> est une forme de <em>violence</em> douce, invisible, qui s'exerce avec la complicité inconsciente de ceux qui la subissent. C'est l'<em>imposition</em>, par les dominants (via l'école, les médias, le langage courant), de catégories de pensée, de goûts, de normes qui font apparaître l'ordre social comme naturel, évident, juste. Cette <em>violence</em> est « <em>symbolique</em> » car elle passe par les <em>symboles</em> (les mots, les images, les rites). Elle est d'autant plus efficace qu'elle n'est pas perçue comme <em>violence</em> mais comme culture légitime.<br>Exemple : Le système scolaire qui valorise la culture « légitime » (littérature classique, art muséal) et dévalorise implicitement les cultures populaires exerce une <em>violence symbolique</em> en inculquant un sentiment d'illégitimité aux enfants des milieux populaires.`
  },
  // Question n°54
  {
    question: "Question n°54 : Comment le <em>silence de Dieu</em> (<em>deus absconditus</em>) est-il interprété dans la théologie et la littérature ?",
    answers: [
      "Comme un <em>désintérêt</em> de Dieu pour les affaires humaines",
      "Comme une <em>parole</em> en creux qu'il faut apprendre à <em>écouter</em>",
      "Comme une <em>preuve</em> de son inexistence"
    ],
    correct: 2,
    explanation: `Le <em>silence de Dieu</em> (<em>deus absconditus</em>), surtout face à la souffrance (comme dans le Livre de Job ou pendant la Shoah), constitue une <em>énigme</em> majeure pour la foi. Il n'est pas nécessairement interprété comme une absence, mais souvent comme une présence cachée, un retrait, une <em>parole</em> qui se tait pour laisser place à la liberté humaine ou pour inviter à une <em>écoute</em> plus profonde. Ce <em>silence</em> peut être une épreuve qui purifie la foi de ses attentes magiques. Dans la littérature moderne, il devient parfois le signe de l'absurdité du monde (Camus).<br>Exemple : Le cri du Christ sur la croix, « Mon Dieu, mon Dieu, pourquoi m'as-tu abandonné ? », est l'expression paroxystique de cette expérience du <em>silence de Dieu</em>.`
  },
  // Question n°55
  {
    question: "Question n°55 : Quelle est la fonction de la <em>parole de conciliation</em> ou de médiation ?",
    answers: [
      "<em>Désigner</em> un coupable",
      "<em>Imposer</em> un <em>compromis</em> par la <em>force</em>",
      "<em>Rétablir</em> la <em>communication</em> dans un <em>conflit</em>"
    ],
    correct: 3,
    explanation: `La <em>parole de conciliation</em> (diplomatique, judiciaire, familiale) a pour fonction de <em>rétablir</em> un lien rompu par le <em>conflit</em>. Le médiateur n'est pas un juge qui <em>impose</em> une solution, mais un tiers qui facilite la réouverture du dialogue. Sa <em>parole</em> <em>cherche</em> à faire entendre les positions de chacun, à désamorcer les malentendus, à reformuler les enjeux, et à aider les parties à trouver elles-mêmes un terrain d'entente. L'<em>autorité</em> du médiateur vient de sa neutralité, de son <em>écoute</em> et de son habileté à faire émerger une <em>parole</em> commune.<br>Exemple : Un médiateur familial aide des parents divorcés à trouver un <em>accord</em> sur la garde des enfants en les amenant à dépasser leurs griefs pour se recentrer sur l'intérêt de l'enfant.`
  },
  // Question n°56
  {
    question: "Question n°56 : Que signifie l'expression « <em>parole performative malheureuse</em> » chez Austin ?",
    answers: [
      "Un <em>performatif</em> prononcé avec une <em>mauvaise intention</em>",
      "Un <em>performatif</em> qui échoue",
      "Une <em>parole</em> qui rend <em>triste</em>"
    ],
    correct: 2,
    explanation: `Austin appelle « infélicités » (<em>infelicities</em>) les échecs d'un énoncé <em>performative</em>. Pour qu'un <em>performatif</em> réussisse (« Je te promets », « Je te baptise »), certaines conditions doivent être remplies : des procédures conventionnelles existantes, des participants et des circonstances appropriés, une exécution correcte et complète, et des intentions sincères. Si une de ces conditions fait défaut, le <em>performatif</em> est « <em>malheureux</em> » (<em>infelicitous</em>) : il n'accomplit pas l'<em>action</em>. Ex: dire « Je te baptise » à un chat, ou « Je vous déclare mari et femme » sans être maire.<br>Exemple : Un faux médecin qui dit « Je vous opère » ne réalise pas une opération médicale légitime ; le <em>performatif</em> échoue (il est « nul »).`
  },
  // Question n°57
  {
    question: "Question n°57 : Comment le concept de « <em>parole vive</em> » s'oppose-t-il à celui de « <em>parole morte</em> » ?",
    answers: [
      "La <em>parole vive</em> est <em>poétique</em>, la <em>parole morte</em> est <em>scientifique</em>",
      "La <em>parole vive</em> est <em>criée</em>, la <em>parole morte</em> est <em>chuchotée</em>",
      "La <em>parole vive</em> est <em>dialogique</em>, la <em>parole morte</em> est <em>fixée</em>"
    ],
    correct: 3,
    explanation: `La « <em>parole vive</em> » est celle de la <em>communication</em> orale en présence, du dialogue, de l'enseignement interactif. Elle est vivante parce qu'elle peut s'adapter à l'interlocuteur, répondre à ses objections, se moduler selon les réactions. La « <em>parole morte</em> » est celle de l'écrit <em>figé</em>, du <em>discours</em> enregistré, du slogan répété. Elle est morte parce qu'elle est détachée de son auteur, qu'elle dit toujours la même chose et ne peut répondre. Pour Platon, la philosophie ne peut se faire que dans la <em>parole vive</em> ; l'<em>écriture</em> n'est qu'un simulacre mort.<br>Exemple : Une conversation entre un maître et son élève est une <em>parole vive</em> ; le manuel scolaire est une <em>parole morte</em> (mais utile).`
  },
  // Question n°58
  {
    question: "Question n°58 : Quel rôle joue la <em>parole d'exhortation</em> dans les <em>discours</em> militaires ou politiques ?",
    answers: [
      "<em>Dénoncer</em> les erreurs du passé",
      "<em>Susciter</em> l'<em>engagement</em> dans l'<em>action</em>",
      "<em>Analyser</em> froidement une situation"
    ],
    correct: 2,
    explanation: `La <em>parole d'exhortation</em> (du latin « <em>exhortari</em> », encourager) est un sous-genre du <em>discours</em> délibératif. Elle vise à élever les esprits, à galvaniser les énergies, à pousser à l'<em>action</em> collective. Elle utilise massivement le pathos (appel aux émotions nobles : honneur, courage, fraternité, patriotisme), mais aussi l'ethos (crédibilité du leader) et le logos (<em>arguments</em> sur la nécessité ou la <em>justice</em> de la cause). Son <em>autorité</em> vient de sa <em>capacité</em> à créer une communion émotionnelle et une volonté commune.<br>Exemple : Le <em>discours</em> de Winston Churchill : « Nous nous battrons sur les plages... nous ne nous rendrons jamais » est une <em>exhortation</em> à la résistance face au nazisme.`
  },
  // Question n°59
  {
    question: "Question n°59 : Que signifie l'affirmation <em>la parole est un acte</em> dans la philosophie du langage ?",
    answers: [
      "Il faut <em>agir</em> et non <em>parler</em>",
      "<em>Parler</em> nécessite un <em>effort</em> physique",
      "Toute énonciation est une <em>action</em>"
    ],
    correct: 3,
    explanation: `Contre une conception purement représentationnelle du langage (les mots décrivent le monde), la philosophie du langage du XXe siècle (Austin, Wittgenstein, Searle) a montré que « <em>parler</em>, c'est <em>faire</em> ». Tout énoncé est une <em>action</em> : questionner, promettre, ordonner, insulter, baptiser, etc. Ces « actes de langage » modifient les relations entre les personnes, créent des obligations, des statuts, des réalités sociales. L'<em>autorité</em> de la <em>parole</em> réside précisément dans ce <em>pouvoir</em> d'<em>agir</em> sur le monde par les mots, et non seulement de le décrire.<br>Exemple : Dire « Je m'excuse » n'est pas décrire une excuse, c'est accomplir l'acte de s'excuser.`
  },
  // Question n°60
  {
    question: "Question n°60 : Comment la <em>parole judiciaire</em> (du juge) exerce-t-elle son <em>autorité</em> ?",
    answers: [
      "Par la <em>puissance</em> <em>performative</em> de l'institution",
      "Par la <em>force</em> des <em>arguments</em> logiques seulement",
      "Par la <em>persuasion</em> émotionnelle des jurés"
    ],
    correct: 1,
    explanation: `La <em>parole</em> du juge est l'archétype de la <em>parole</em> <em>performative</em> institutionnelle. En prononçant la formule « Au nom du peuple français, la cour condamne... » ou « Le tribunal déclare... », le juge ne décrit pas une sanction, il l'institue. Cette <em>parole</em> a une <em>force</em> contraignante immédiate (<em>potestas</em>) parce qu'elle s'appuie sur l'<em>autorité</em> (<em>auctoritas</em>) de l'institution judiciaire et de la loi qu'elle représente. La solennité du rituel (robe, formules, décorum) renforce le caractère <em>performative</em> de l'énoncé.<br>Exemple : La phrase « La cour vous condamne à cinq ans de prison » crée immédiatement l'obligation pour l'État d'incarcérer le condamné.`
  },
  // Question n°61
  {
    question: "Question n°61 : Quelle est la caractéristique d'une <em>parole sacramentelle</em> dans les religions ?",
    answers: [
      "Elle est réservée aux prêtres",
      "Elle est incompréhensible aux laïcs",
      "Elle est <em>performative</em> par elle-même"
    ],
    correct: 3,
    explanation: `Dans des confessions du christianisme (notamment catholique et orthodoxe), les sacrements sont des signes sensibles institués par le Christ qui donnent la grâce. La <em>parole</em> qui les accompagne est essentielle et <em>performative</em> : elle ne décrit pas, elle <em>agit</em>. « Je te baptise », « Ceci est mon corps », « Je te pardonne tes péchés » – ces paroles, prononcées par le ministre avec l'intention requise et sur la matière appropriée, sont censées réaliser ce qu'elles disent, grâce à l'<em>action</em> de Dieu. L'<em>autorité</em> de cette <em>parole</em> vient à la fois de l'institution ecclésiale et de la promesse divine.<br>Exemple : Lors de l'Eucharistie, les paroles de la consécration (« Ceci est mon corps ») transsubstantient, selon la doctrine, le pain en corps du Christ.`
  },
  // Question n°62
  {
    question: "Question n°62 : Que signifie le concept de <em>parole aliénée</em> ou <em>aliénante</em> ?",
    answers: [
      "Une <em>parole</em> qui isole socialement",
      "Une <em>parole</em> prononcée dans une langue étrangère",
      "Une <em>parole</em> qui ne vient pas de celui qui <em>parle</em>"
    ],
    correct: 3,
    explanation: `Une <em>parole</em> est <em>aliénée</em> (ou aliénante) lorsqu'elle est subie plutôt qu'appropriée, lorsqu'elle exprime non la pensée personnelle de celui qui <em>parle</em>, mais des idées reçues, des slogans, un <em>discours</em> dominant intériorisé. L'individu <em>parle</em> avec des mots qui ne sont pas vraiment les siens, il se fait le <em>porte-parole</em> inconscient d'une idéologie ou d'un <em>pouvoir</em>. Cette <em>parole</em> peut aussi aliéner autrui en le maintenant dans la dépendance ou l'illusion. La <em>critique</em> de la <em>parole aliénée</em> est au cœur des pensées de Marx (idéologie), d'Ellul (parole anonyme) et de la psychanalyse (<em>discours</em> de l'Autre).<br>Exemple : Un employé qui répète sans distance <em>critique</em> le <em>discours</em> managérial de son entreprise (« Il faut être flexible, compétitif... ») profère une <em>parole aliénée</em>.`
  },
  // Question n°63
  {
    question: "Question n°63 : Comment la <em>parole proverbiale</em> ou de <em>sagesse populaire</em> exerce-t-elle son <em>autorité</em> ?",
    answers: [
      "Par la <em>preuve</em> scientifique apportée",
      "Par le poids de la <em>tradition</em>",
      "Par la <em>force</em> de la loi"
    ],
    correct: 2,
    explanation: `Les <em>proverbes</em> (« pierre qui roule n'amasse pas mousse », « l'habit ne fait pas le moine »...) sont des énoncés brefs, anonymes, traditionnels, qui prétendent énoncer une <em>vérité</em> générale sur la vie humaine. Leur <em>autorité</em> vient de leur ancienneté, de leur caractère supposé immémorial, et de la concision percutante de la formule. Ils condensent une prétendue <em>sagesse</em> collective, une expérience millénaire. On les cite pour clore une discussion, donner un conseil, ou justifier une <em>action</em>. Leur <em>force</em> persuasive tient à leur évidence apparente et à leur poids culturel.<br>Exemple : Invoquer « qui vole un œuf vole un bœuf » pour justifier une punition sévère pour un petit larcin, en s'appuyant sur l'<em>autorité</em> de la <em>sagesse</em> populaire.`
  },
  // Question n°64
  {
    question: "Question n°64 : Quelle est la fonction de la <em>parole rituelle</em> dans les cérémonies ?",
    answers: [
      "<em>Expliquer</em> le sens du rituel",
      "<em>Répéter</em> des formules <em>fixes</em>",
      "<em>Improviser</em> selon l'inspiration"
    ],
    correct: 2,
    explanation: `La <em>parole rituelle</em> (liturgique, magique, cérémonielle) est caractérisée par sa <em>fixité</em>. Les formules doivent être <em>répétées</em> à l'identique, avec les bons mots, le bon ton, le bon ordre. Cette invariance garantit l'<em>efficacité symbolique</em> du rituel et son lien avec la <em>tradition</em>. En disant exactement ce qui a toujours été dit, on actualise le passé <em>fondateur</em> et on assure la continuité de l'ordre cosmique ou social. L'<em>autorité</em> de cette <em>parole</em> vient de sa fidélité à l'origine et de son <em>pouvoir</em> présumé de maintenir ou de restaurer l'harmonie.<br>Exemple : Les prières de la messe catholique, les formules du mariage civil (« Je déclare unis par les liens du mariage... »), les incantations d'un rituel magique doivent suivre un texte précis.`
  },
  // Question n°65
  {
    question: "Question n°65 : Que signifie l'expression <em>prendre la parole</em> au-delà du simple fait de <em>parler</em> ?",
    answers: [
      "<em>Parler</em> à un niveau sonore très <em>fort</em>",
      "S'<em>emparer</em> physiquement d'un microphone",
      "<em>Accéder</em> à un espace public d'énonciation"
    ],
    correct: 3,
    explanation: `« <em>Prendre la parole</em> » est une expression <em>performative</em> qui désigne l'acte par lequel un individu ou un groupe s'inscrit dans l'espace public du <em>discours</em>, revendiquant le droit d'être écouté et de participer à la délibération commune. Cela suppose de franchir une barrière (timidité, exclusion sociale, censure). Dans un débat, « <em>prendre la parole</em> » c'est obtenir un tour de parole, une légitimité momentanée à s'exprimer. C'est un acte souvent politique, car il implique une redistribution de l'<em>autorité</em> discursive.<br>Exemple : Lors des États généraux de 1789, le Tiers État « <em>prend la parole</em> » en rédigeant des cahiers de doléances et en s'auto-proclamant Assemblée nationale, contestant le monopole de la <em>parole</em> royale.`
  },
  // Question n°66
  {
    question: "Question n°66 : Comment la <em>parole d'aveu</em> fonctionne-t-elle dans les relations de pouvoir (Foucault) ?",
    answers: [
      "Elle <em>libère</em> toujours celui qui avoue",
      "Elle est un dialogue entre égaux",
      "Elle <em>assujettit</em> celui qui avoue"
    ],
    correct: 3,
    explanation: `Michel Foucault, dans <em>Histoire de la sexualité</em>, analyse l'aveu comme un « rituel de <em>discours</em> » où « le sujet énonce la <em>vérité</em> sur lui-même ». Ce rituel est profondément lié au <em>pouvoir</em> : le <em>pouvoir</em> (religieux, judiciaire, psychiatrique, éducatif) exige, encourage, organise l'aveu. En se confessant, l'individu reconnaît l'<em>autorité</em> de celui qui l'écoute (prêtre, juge, psychanalyste) et produit une <em>vérité</em> sur lui-même qui sera l'objet d'un jugement, d'une absolution, d'un diagnostic. L'aveu est ainsi à la fois un acte de <em>libération</em> (<em>parler</em> de son secret) et d'<em>assujettissement</em> (se soumettre au cadre interprétatif du <em>pouvoir</em>).<br>Exemple : La confession catholique, l'interrogatoire policier, l'entretien d'embauche où l'on doit « se raconter » sont des situations d'aveu.`
  },
  // Question n°67
  {
    question: "Question n°67 : Quel est le rôle de la <em>parole d'intercession</em> (prière de demande) ?",
    answers: [
      "<em>Intercéder</em> en faveur de quelqu'un",
      "<em>Ordonner</em> quelque chose à Dieu",
      "Converser d'égal à égal avec le divin"
    ],
    correct: 1,
    explanation: `La <em>parole d'intercession</em> est une prière par laquelle on demande à une <em>puissance</em> supérieure (dieu, saint, souverain) d'accorder une faveur à un tiers. En priant pour quelqu'un, on reconnaît à la fois l'<em>autorité</em> de l'<em>intercesseur</em> (le saint, le Christ) et celle de l'<em>autorité</em> ultime (Dieu). On se place en position de demande, de dépendance. Dans le domaine politique, l'<em>intercession</em> (un courtisan demandant une grâce au roi pour un ami) fonctionne sur le même modèle : elle renforce la structure hiérarchique en passant par les canaux reconnus.<br>Exemple : « Priez pour nous, pauvres pécheurs » (Ave Maria) est une <em>intercession</em> adressée à Marie pour qu'elle intercède elle-même auprès de Dieu.`
  },
  // Question n°68
  {
    question: "Question n°68 : Que signifie l'expression <em>parole d'ordre</em> dans le vocabulaire politique et militaire ?",
    answers: [
      "Un <em>désordre</em> verbal",
      "L'<em>organisation</em> alphabétique des <em>discours</em>",
      "Un <em>mot d'ordre</em> qui sert à mobiliser"
    ],
    correct: 3,
    explanation: `Une <em>parole d'ordre</em> (ou <em>mot d'ordre</em>) est une formule brève, frappante, souvent impérative, qui condense une orientation politique, une revendication, un appel à l'<em>action</em>. « Liberté, Égalité, Fraternité », « <em>Proletarier aller Länder, vereinigt euch!</em> » (« Prolétaires de tous les pays, unissez-vous ! »), « Yes we can ». Ces paroles ont une fonction <em>performative</em> de mobilisation : elles créent une identité collective (« nous »), désignent un ennemi ou un objectif, et incitent à <em>agir</em>. Leur <em>autorité</em> vient de leur simplicité, de leur répétition, et du mouvement qu'elles incarnent.<br>Exemple : Le <em>mot d'ordre</em> « Grève générale ! » lancé par un syndicat a pour but de déclencher l'arrêt du travail en créant un sentiment d'urgence et d'unité.`
  },
  // Question n°69
  {
    question: "Question n°69 : Comment la <em>parole d'expert</em> (scientifique, technicien) fonde-t-elle son <em>autorité</em> ?",
    answers: [
      "Sur la <em>force</em> de ses convictions",
      "Sur la <em>reconnaissance</em> sociale",
      "Sur le <em>charisme</em> de l'<em>expert</em>"
    ],
    correct: 2,
    explanation: `La <em>parole d'expert</em> tire son <em>autorité</em> non de la personne (<em>ethos</em> charismatique) ni de la <em>tradition</em>, mais de la compétence technique ou scientifique socialement <em>reconnue</em>. On fait confiance au médecin, à l'ingénieur, à l'économiste parce qu'ils maîtrisent un savoir validé par des institutions (universités, diplômes, publications). Leur <em>parole</em> est censée être objective, fondée sur des <em>preuves</em> et des méthodes reproductibles (logos). Cette <em>autorité</em> est limitée à son domaine de compétence et peut être contestée par d'autres <em>experts</em>.<br>Exemple : On suit les recommandations sanitaires d'un épidémiologiste non parce qu'il est charismatique, mais parce qu'on croit en la validité des modèles scientifiques qu'il utilise.`
  },
  // Question n°70
  {
    question: "Question n°70 : Quelle est la caractéristique d'une <em>parole délibérative</em> au sens aristotélicien ?",
    answers: [
      "Elle <em>juge</em> le passé",
      "Elle fait l'<em>éloge</em> ou le blâme du présent",
      "Elle délibère sur l'avenir"
    ],
    correct: 3,
    explanation: `Le <em>discours</em> délibératif, selon Aristote, a pour objet l'avenir : il vise à exhorter (pousser à faire) ou à dissuader (pousser à ne pas faire). Il se prononce dans les assemblées politiques. Sa finalité est l'utile (ou le nuisible) pour la cité. Il s'oppose au <em>discours</em> judiciaire (focalisé sur le passé, le juste/injuste) et au <em>discours</em> épidictique (focalisé sur le présent, l'honorable/honteux). L'<em>autorité</em> de l'orateur délibératif repose sur sa <em>sagesse</em> pratique (<em>phronésis</em>), sa connaissance des affaires de la cité et sa <em>capacité</em> à envisager les conséquences.<br>Exemple : Un <em>discours</em> parlementaire pour ou contre un projet de loi est un <em>discours</em> délibératif : il <em>cherche</em> à convaincre de voter une loi en montrant ses avantages ou ses dangers futurs.`
  },
  // Question n°71
  {
    question: "Question n°71 : Que signifie l'expression <em>parole proleptique</em> ?",
    answers: [
      "Une <em>parole</em> qui <em>propage</em> des <em>rumeurs</em>",
      "Une <em>parole</em> complexe",
      "Une <em>parole</em> qui <em>anticipe</em> une <em>objection</em>"
    ],
    correct: 3,
    explanation: `La <em>prolepse</em> (du grec « <em>prolambanein</em> », prendre par avance) est une figure de rhétorique et une stratégie argumentative. Elle consiste à <em>anticiper</em> une <em>objection</em> que pourrait faire l'adversaire ou l'auditoire, et à y répondre avant qu'elle ne soit formulée. Cela permet de désamorcer la <em>critique</em>, de montrer qu'on l'a envisagée et qu'on a une réponse. C'est une manière de renforcer son <em>autorité</em> en se présentant comme ayant tout prévu. Cette technique est fréquente dans les <em>discours</em> politiques et les plaidoyers.<br>Exemple : « Certains diront que cette réforme coûte trop cher. Je leur réponds par avance que son coût est largement compensé par les économies futures qu'elle générera. »`
  },
  // Question n°72
  {
    question: "Question n°72 : Comment la <em>parole écrite</em> (lois, constitutions) fonde-t-elle l'<em>autorité</em> dans les États modernes ?",
    answers: [
      "Par le <em>charisme</em> de ceux qui l'ont écrite",
      "Par sa beauté stylistique",
      "Par sa <em>fixité</em> opposable à tous"
    ],
    correct: 3,
    explanation: `Dans l'État de droit moderne, l'<em>autorité</em> suprême est souvent incarnée par un texte écrit : la Constitution. Ce texte fait <em>autorité</em> (<em>auctoritas</em>) parce qu'il est le fondement écrit, stable et public de tout l'ordre juridique. Sa <em>fixité</em> le rend indépendant des fluctuations des majorités et des humeurs du moment. Il s'<em>impose</em> à tous, gouvernants et gouvernés. L'<em>écriture</em> permet ici de soustraire la loi fondamentale à l'arbitraire de la <em>parole</em> vive du souverain, en l'objectivant dans un document sacralisé.<br>Exemple : La Constitution américaine de 1787, écrite et amendée selon des procédures rigoureuses, fait <em>autorité</em> sur le Président, le Congrès et la Cour suprême elle-même.`
  },
  // Question n°73
  {
    question: "Question n°73 : Quelle est la fonction de la <em>parole prophétique de malheur</em> (annonce de châtiment) ?",
    answers: [
      "Prédire l'avenir pour montrer sa <em>puissance</em>",
      "Appeler à la <em>conversion</em> par la <em>crainte</em>",
      "<em>Démoraliser</em> le peuple"
    ],
    correct: 2,
    explanation: `Les prophètes bibliques annoncent souvent des malheurs (<em>guerre</em>, exil, famine...) comme châtiments divins pour les infidélités du peuple (idolâtrie, <em>injustice</em> sociale). Cette <em>parole prophétique de malheur</em> n'est pas une simple prédiction ; elle a une fonction <em>performative</em> et pédagogique. En créant la <em>crainte</em>, elle <em>cherche</em> à provoquer un retour (<em>teshouva</em>) vers Dieu et la loi. L'annonce du malheur n'est pas inéluctable ; elle peut être évitée par la <em>conversion</em>. L'<em>autorité</em> du prophète vient de sa conviction d'être le <em>porte-parole</em> de la colère divine.<br>Exemple : Le prophète Jérémie annonce la destruction de Jérusalem et l'exil à Babylone pour punir l'infidélité, mais il appelle aussi constamment à la repentance pour l'éviter.`
  },
  // Question n°74
  {
    question: "Question n°74 : Que signifie le concept de <em>parole autoréférentielle</em> du <em>pouvoir</em> (le <em>pouvoir</em> qui se légitime lui-même) ?",
    answers: [
      "Le <em>pouvoir</em> qui <em>parle</em> de lui-même avec <em>modestie</em>",
      "Le <em>pouvoir</em> qui <em>écoute</em> ses propres conseillers",
      "Le <em>pouvoir</em> qui produit le <em>discours</em> qui le légitime"
    ],
    correct: 3,
    explanation: `Dans les systèmes autocratiques ou totalitaires, le <em>pouvoir</em> tend à produire lui-même les <em>discours</em> qui le légitiment, sans référence à une instance extérieure (Dieu, le peuple, la raison). Il crée sa propre mythologie, sa propre histoire, son propre langage. La <em>parole</em> du <em>pouvoir</em> devient <em>autoréférentielle</em> : elle ne se justifie que par elle-même. « Le <em>Führer</em> a toujours raison » (Schmitt) est la formule extrême de cette <em>autoréférentialité</em>. L'<em>autorité</em> n'a plus de fondement que la <em>puissance</em> même de l'énonciation répétée.<br>Exemple : La propagande d'un régime totalitaire qui répète : « Notre chef est génial, notre système est parfait » sans autre <em>argument</em> que l'affirmation même, crée une bulle discursive <em>autoréférentielle</em>.`
  },
  // Question n°75
  {
    question: "Question n°75 : Comment la <em>parole de pardon</em> exerce-t-elle son <em>autorité</em> ?",
    answers: [
      "En <em>effaçant</em> magiquement la faute",
      "En <em>rompant</em> le cycle de la vengeance",
      "En <em>humiliant</em> celui qui est pardonné"
    ],
    correct: 2,
    explanation: `Le pardon est un acte de <em>parole</em> <em>performative</em> par lequel la victime ou l'<em>autorité</em> lésée (« je te pardonne ») renonce à sa vengeance légitime et restaure le coupable dans sa dignité. Cet acte est d'une grande <em>autorité</em> morale car il suppose de dépasser le droit strict (qui exigerait châtiment) pour instaurer une relation nouvelle fondée sur la grâce. Le pardon ne nie pas la faute, mais en suspend les conséquences. Il est souvent considéré comme le sommet de l'<em>autorité</em> éthique, car il manifeste une liberté souveraine par rapport à la logique du talion.<br>Exemple : Le « Je vous pardonne » prononcé par des victimes d'attentats ou par des juges dans des procès restauratifs a une <em>puissance</em> <em>symbolique</em> et transformative considérable.`
  },
  // Question n°76
  {
    question: "Question n°76 : Quelle est la caractéristique d'une <em>parole d'injonction thérapeutique</em> (ordres du médecin, du psychothérapeute) ?",
    answers: [
      "Elle n'a aucune <em>force</em> contraignante",
      "Elle est <em>experte</em> et <em>performative</em>",
      "Elle est toujours négociable"
    ],
    correct: 2,
    explanation: `La <em>parole</em> du thérapeute (médecin, psychanalyste, etc.) est une <em>parole</em> d'<em>autorité</em> particulière. Elle s'appuie sur un savoir <em>expert</em> (l'ethos du savant) mais elle est aussi <em>performative</em> : elle vise à produire un changement chez le patient. L'ordonnance (« Prenez ce médicament trois fois par jour ») a <em>force</em> de prescription. L'interprétation du psychanalyste (« Vous dites ceci, mais vous pensez cela ») a pour but de transformer la compréhension de soi du patient. Cette <em>parole</em> est censée <em>agir</em> sur le corps ou l'esprit en s'appuyant sur la confiance que le patient accorde à l'<em>autorité</em> du thérapeute.<br>Exemple : Le placebo ne fonctionne que si le patient croit en l'<em>autorité</em> du médecin qui le prescrit ; la <em>parole</em> du médecin fait partie du traitement.`
  },
  // Question n°77
  {
    question: "Question n°77 : Que signifie l'expression <em>parole de défi</em> ou de provocation ?",
    answers: [
      "Une <em>parole</em> qui <em>cherche</em> à éviter le <em>conflit</em>",
      "Une <em>parole</em> qui propose un <em>compromis</em>",
      "Une <em>parole</em> qui défie une <em>autorité</em> établie"
    ],
    correct: 3,
    explanation: `La <em>parole de défi</em> est une <em>parole</em> qui s'adresse à une <em>autorité</em> (politique, morale, parentale) pour la contester frontalement. Elle peut prendre la forme de l'insulte, de la moquerie, de la déclaration publique d'opposition. Cette <em>parole</em> a une fonction <em>performative</em> de rupture : elle brise le <em>silence</em> de la <em>soumission</em>, elle institue un rapport de <em>force</em> symétrique (ou le revendique) là où régnait l'asymétrie. Elle est souvent le prélude à un <em>conflit</em> ouvert. Son <em>autorité</em> (celle du rebelle) vient du courage de dire non et de la justesse de la cause invoquée.<br>Exemple : La déclaration de Martin Luther : « Je ne peux pas, je ne veux pas me rétracter » face à la Diète de Worms est une <em>parole de défi</em> à l'<em>autorité</em> de l'Église et de l'Empereur.`
  },
  // Question n°78
  {
    question: "Question n°78 : Comment la <em>parole de consolation</em> exerce-t-elle son <em>autorité</em> ?",
    answers: [
      "En ordonnant de ne plus souffrir",
      "En <em>reconnaissant</em> la souffrance d'autrui",
      "En <em>minimisant</em> la souffrance"
    ],
    correct: 2,
    explanation: `La <em>parole de consolation</em> est adressée à quelqu'un qui souffre (deuil, maladie, échec). Son <em>autorité</em> ne vient pas d'un savoir ou d'un <em>pouvoir</em>, mais d'une <em>capacité</em> à être présent, à <em>écouter</em>, et à dire les mots justes qui <em>reconnaissent</em> la douleur sans la nier, et qui offrent un réconfort, un espoir, ou simplement la certitude de ne pas être seul. Cette <em>parole</em> peut être religieuse (« Dieu est avec vous »), philosophique (« la mort fait partie de la vie ») ou simplement humaine (« je suis là »). Elle a une <em>autorité</em> morale et affective.<br>Exemple : Les amis de Job qui viennent s'asseoir en <em>silence</em> près de lui pendant sept jours avant de tenter (maladroitement) des paroles de <em>consolation</em>.`
  },
  // Question n°79
  {
    question: "Question n°79 : Quelle est la fonction de la <em>parole d'interdiction</em> (tabous, interdits) ?",
    answers: [
      "<em>Cacher</em> des secrets",
      "<em>Limiter</em> la liberté pour le plaisir",
      "<em>Définir</em> les limites du possible"
    ],
    correct: 3,
    explanation: `Les <em>interdits</em> (« tu ne tueras point », « tu ne commettras pas d'inceste », tabous alimentaires) sont énoncés dans des paroles <em>fondatrices</em> (loi divine, <em>mythe</em>, coutume). Leur énonciation <em>performative</em> crée la frontière entre le sacré et le profane, le pur et l'impur, le possible et l'impossible. Ces paroles ont une <em>autorité</em> immense car elles structurent l'identité et la cohésion du groupe. Leur transgression provoque souvent une sanction sociale ou <em>symbolique</em> (souillure, exclusion). L'<em>interdit</em> fondamental (l'inceste selon Lévi-Strauss) est même constitutif de la culture humaine.<br>Exemple : L'<em>interdit</em> de l'inceste, présent dans toutes les sociétés, fonde l'échange des femmes et la parenté, base de l'organisation sociale.`
  },
  // Question n°80
  {
    question: "Question n°80 : Que signifie l'expression <em>parole d'institution</em> (Bourdieu) ?",
    answers: [
      "Le règlement intérieur d'une école",
      "Un <em>discours</em> prononcé dans une institution",
      "Un acte qui confère une identité sociale"
    ],
    correct: 3,
    explanation: `Pierre Bourdieu analyse les <em>actes d'institution</em> comme des performances <em>symboliques</em> qui ont le <em>pouvoir</em> de transformer l'identité sociale d'un individu en lui conférant un titre, un statut, un nom. « Je te baptise », « Je te fais chevalier », « Je te nomme professeur ». Ces paroles sont magico-sociales : elles font être ce qu'elles disent, elles produisent une différence de statut <em>reconnue</em> par tous. L'<em>autorité</em> de celui qui institue (l'évêque, le roi, le président d'université) doit être socialement <em>reconnue</em> pour que l'acte prenne.<br>Exemple : La cérémonie de remise de diplôme est un acte d'<em>institution</em> : la <em>parole</em> du président (« je vous confère le grade de... ») transforme officiellement l'étudiant en diplômé.`
  },
  // Question n°81
  {
    question: "Question n°81 : Comment la <em>parole de séduction</em> exerce-t-elle une forme d'<em>autorité</em> ?",
    answers: [
      "En disant toujours la <em>vérité</em>",
      "En <em>imposant</em> sa volonté par la <em>force</em>",
      "En <em>captant</em> le désir de l'autre"
    ],
    correct: 3,
    explanation: `La <em>parole de séduction</em> (amoureuse, commerciale, politique) vise à <em>captant</em> l'attention, à plaire, à créer du désir et à orienter le choix de l'autre. Elle exerce une <em>autorité</em> douce, une « <em>potestas</em> » affective. Elle utilise le charme, la <em>promesse</em>, la flatterie, le mystère. Son <em>pouvoir</em> réside dans sa <em>capacité</em> à créer un lien émotionnel et à faire adhérer l'autre à un projet (une relation, un achat, une idée) en donnant l'impression que c'est son propre désir. Cette <em>autorité</em> peut être bienveillante ou manipulatrice.<br>Exemple : Les <em>discours</em> de Dom Juan dans la pièce de Molière sont des paroles de <em>séduction</em> qui lui donnent <em>autorité</em> sur le cœur des femmes qu'il conquiert (puis abandonne).`
  },
  // Question n°82
  {
    question: "Question n°82 : Quelle est la caractéristique de la <em>parole mystique</em> ou d'extase ?",
    answers: [
      "Elle donne des ordres à Dieu",
      "Elle tente de dire l'<em>indicible</em>, l'expérience de l'union avec le divin, souvent par le paradoxe et le <em>silence</em>",
      "Elle est parfaitement claire et rationnelle"
    ],
    correct: 2,
    explanation: `La <em>parole mystique</em> naît d'une expérience d'union <em>indicible</em> avec Dieu ou l'Absolu. Le mystique se heurte aux limites du langage : ce qu'il a vécu est <em>indicible</em>. Sa <em>parole</em> est donc souvent paradoxale, poétique, allégorique, fragmentaire. Elle dit en même temps l'impossibilité de dire. Elle peut culminer dans le <em>silence</em>. L'<em>autorité</em> du mystique vient non d'une institution, mais de la <em>force</em> testimoniale de son expérience intérieure, parfois suspecte aux yeux de l'Église officielle.<br>Exemple : Thérèse d'Avila ou Jean de la Croix décrivent l'extase par des images (« nuit obscure », « château intérieur ») tout en affirmant que les mots sont inadéquats.`
  },
  // Question n°83
  {
    question: "Question n°83 : Que signifie l'expression <em>parole d'apaisement</em> ou de pacification ?",
    answers: [
      "Une <em>parole</em> qui <em>impose</em> la paix par la menace",
      "Une <em>parole</em> qui étouffe les <em>conflits</em> sans les résoudre",
      "Une <em>parole</em> qui <em>cherche</em> à calmer les tensions"
    ],
    correct: 3,
    explanation: `La <em>parole d'apaisement</em> est prononcée dans un contexte de crise, de colère ou de <em>violence</em> latente. Elle vise à réduire l'intensité émotionnelle, à faire baisser la pression, à créer les conditions d'un dialogue raisonnable. Elle peut <em>reconnaître</em> les griefs (« Je comprends votre colère »), faire appel au calme (« Restons raisonnables »), proposer des gages (« Examinons cela ensemble »). Son <em>autorité</em> vient de son caractère mesuré, de sa raisonnabilité, et souvent du statut de celui qui <em>parle</em> (médiateur, <em>autorité</em> respectée).<br>Exemple : Le <em>discours</em> d'un maire tentant de calmer des tensions communautaires après un fait divers : « Ne tombons pas dans le piège de la <em>violence</em>, <em>parlons</em>-nous. »`
  },
  // Question n°84
  {
    question: "Question n°84 : Comment la <em>parole de dénonciation</em> (<em>whistleblowing</em>, lanceur d'alerte) exerce-t-elle son <em>autorité</em> ?",
    answers: [
      "En répandant des <em>rumeurs</em>",
      "En <em>obéissant</em> aux ordres de sa hiérarchie",
      "En <em>révélant</em> des faits cachés"
    ],
    correct: 3,
    explanation: `La <em>parole de dénonciation</em> (ou « lancement d'alerte ») est prononcée par un individu qui, au sein d'une organisation (entreprise, État), <em>révèle</em> des actes illégaux, immoraux ou dangereux que cette organisation <em>cherchait</em> à cacher. Cette <em>parole</em> est hautement risquée pour le lanceur d'alerte (licenciement, poursuites). Son <em>autorité</em> vient de son courage, de la véracité des faits qu'elle apporte (<em>preuves</em>), et de l'appel à la conscience publique qu'elle lance. Elle s'adresse souvent aux médias ou à la <em>justice</em> pour contourner l'<em>autorité</em> hiérarchique corrompue.<br>Exemple : Edward Snowden <em>révélant</em> les programmes de surveillance massive de la NSA ; ou Chelsea Manning divulguant des documents militaires sur la <em>guerre</em> en Irak.`
  },
  // Question n°85
  {
    question: "Question n°85 : Quelle est la fonction de la <em>parole d'enseignement</em> (du maître, du professeur) ?",
    answers: [
      "<em>Imposer</em> un savoir par la contrainte",
      "<em>Répéter</em> ce que disent les manuels",
      "<em>Transmettre</em> un savoir et des méthodes"
    ],
    correct: 3,
    explanation: `La <em>parole d'enseignement</em> exerce une <em>autorité</em> spécifique : l'<em>autorité</em> pédagogique. Le maître est censé détenir un savoir et une compétence didactique. Sa <em>parole</em> fait <em>autorité</em> (<em>auctoritas</em>) en ce sens. Mais une bonne pédagogie vise à ce que l'élève s'approprie le savoir et devienne autonome. L'<em>autorité</em> du maître doit donc être à la fois ferme (pour structurer l'apprentissage) et discrète, s'effaçant progressivement (« toute <em>autorité</em> véritable inclut le moment de sa propre abolition », selon Hegel). Le dialogue socratique est le modèle d'une <em>autorité</em> qui ne s'<em>impose</em> pas mais fait accoucher les esprits.<br>Exemple : Un bon professeur n'<em>impose</em> pas des réponses, mais pose des questions qui guident l'élève vers la découverte personnelle.`
  },
  // Question n°86
  {
    question: "Question n°86 : Que signifie l'expression <em>parole de résistance</em> face à une <em>autorité</em> oppressive ?",
    answers: [
      "Une <em>parole</em> silencieuse",
      "Une <em>parole</em> qui dit « non » à la <em>parole</em> dominante",
      "Une <em>parole</em> qui <em>cherche</em> un <em>compromis</em> avec l'oppresseur"
    ],
    correct: 2,
    explanation: `La <em>parole de résistance</em> est prononcée dans un contexte d'oppression, de censure, de terreur. Elle peut prendre des formes variées : pamphlet clandestin, graffiti, chanson protestataire, déclaration publique au péril de sa vie. Cette <em>parole</em> brise le monopole discursif du <em>pouvoir</em>. Elle affirme une <em>vérité</em> niée, une identité méprisée, un droit bafoué. Son <em>autorité</em> vient de son courage, de sa justesse, et de son <em>pouvoir</em> de mobilisation des consciences. Elle est souvent le premier acte d'une lutte pour la liberté.<br>Exemple : Les <em>discours</em> de Nelson Mandela contre l'apartheid, prononcés avant et pendant son emprisonnement ; ou les tracts de la Résistance française pendant l'Occupation.`
  },
  // Question n°87
  {
    question: "Question n°87 : Comment la <em>parole prophétique de salut</em> (annonce d'un avenir radieux) fonctionne-t-elle ?",
    answers: [
      "Elle garantit le bonheur matériel immédiat",
      "Elle promet un salut conditionné",
      "Elle décrit un futur inéluctable"
    ],
    correct: 2,
    explanation: `À côté des prophéties de malheur, il y a les <em>prophéties de salut</em>. Elles annoncent un avenir de libération, de paix, de <em>justice</em>, de rédemption (« Voici que je crée un ciel nouveau et une terre nouvelle »). Cette <em>parole</em> n'est pas une simple prédiction ; elle est <em>performative</em> : en annonçant le salut, elle le rend possible, elle donne une espérance qui soutient l'<em>action</em> et la fidélité dans l'épreuve. Elle désigne un but (l'Exode, le <em>Messie</em>, la révolution) et mobilise les énergies pour l'atteindre. Son <em>autorité</em> vient de la <em>force</em> de l'espérance qu'elle suscite.<br>Exemple : Le <em>discours</em> « I have a dream » de Martin Luther King est une prophétie de salut racial, décrivant un avenir de fraternité qui appelle à l'<em>action</em> non-violente pour le réaliser.`
  },
  // Question n°88
  {
    question: "Question n°88 : Quelle est la caractéristique d'une <em>parole d'assemblée</em> (délibérations collectives) ?",
    answers: [
      "Elle est <em>secrète</em>",
      "Elle est le produit de discussions",
      "Elle est toujours le monologue d'un <em>chef</em>"
    ],
    correct: 2,
    explanation: `La <em>parole d'assemblée</em> (parlement, conseil municipal, AG) est constitutive de la démocratie délibérative. L'<em>autorité</em> n'y réside pas dans la <em>parole</em> d'un seul, mais dans le processus discursif lui-même : la confrontation des <em>arguments</em>, le débat, le vote. La décision finale (« la loi est adoptée ») tire son <em>autorité</em> de ce qu'elle a été discutée et approuvée selon des règles acceptées par tous. La <em>parole</em> y est à la fois un droit (<em>prendre la parole</em>) et un devoir (<em>écouter</em>, argumenter). C'est l'institutionnalisation de la <em>parole</em> comme fondement du <em>pouvoir</em>.<br>Exemple : Dans l'Athènes classique, les décisions de l'Ecclésia (assemblée du peuple) naissaient de discussions souvent vives entre citoyens.`
  },
  // Question n°89
  {
    question: "Question n°89 : Que signifie l'expression <em>parole de trahison</em> ?",
    answers: [
      "Une <em>parole</em> prononcée dans une langue étrangère",
      "Une <em>parole</em> qui <em>révèle</em> un secret promis",
      "Une <em>parole</em> qui <em>rompt</em> un <em>engagement</em>"
    ],
    correct: 3,
    explanation: `La <em>parole de trahison</em> est l'envers de la <em>parole d'engagement</em>. Elle brise un <em>pacte</em>, une <em>promesse</em>, une alliance. Elle peut être explicite (« Je <em>romps</em> notre alliance ») ou implicite (<em>agir</em> contrairement à sa <em>parole</em>). La <em>trahison</em> sape l'<em>autorité</em> même de la <em>parole</em> comme lien social, car elle montre que la <em>parole</em> peut être vaine. Dans les relations de confiance (amitié, mariage, politique), la <em>trahison</em> verbale est souvent plus blessante que la <em>trahison</em> par l'<em>action</em>, car elle attaque le fondement <em>symbolique</em> de la relation.<br>Exemple : Un ami qui <em>révèle</em> un secret intime qu'on lui avait confié <em>trahit</em> la <em>parole</em> de confiance qui les liait.`
  },
  // Question n°90
  {
    question: "Question n°90 : Comment la <em>parole d'interprétation</em> (de l'herméneute, du critique) exerce-t-elle son <em>autorité</em> ?",
    answers: [
      "En <em>répétant</em> le texte mot pour mot",
      "En <em>imposant</em> une lecture unique",
      "En proposant une lecture éclairante"
    ],
    correct: 3,
    explanation: `L'interprète (philosophe, critique littéraire, historien, psychanalyste) ne crée pas un texte ou un événement, mais il en propose une lecture qui en dégage le sens caché, la structure, les implications. L'<em>autorité</em> de sa <em>parole d'interprétation</em> ne vient pas d'un <em>pouvoir</em> institutionnel (sauf cas de magistère religieux) mais de la qualité de son interprétation : sa rigueur, son érudition, sa profondeur, sa <em>capacité</em> à rendre compte du matériau étudié. Une bonne interprétation s'<em>impose</em> par sa <em>force</em> persuasive intrinsèque. Elle ouvre le texte à de nouvelles compréhensions.<br>Exemple : L'interprétation freudienne des rêves ou des actes manqués propose une grille de lecture (l'inconscient, le désir) qui fait <em>autorité</em> dans le champ psychanalytique, sans être pourtant une « <em>preuve</em> » scientifique au sens strict.`
  },
  // Question n°91
  {
    question: "Question n°91 : Quelle est la fonction de la <em>parole d'investiture</em> (cérémonie d'intronisation) ?",
    answers: [
      "<em>Critiquer</em> le prédécesseur",
      "<em>Conférer</em> solennellement une charge",
      "Fêter la fin d'un mandat"
    ],
    correct: 2,
    explanation: `La cérémonie d'investiture (sacre d'un roi, intronisation d'un pape, inauguration d'un président) est un rituel <em>performative</em> essentiel. La <em>parole d'investiture</em> prononcée (« Je te sacre roi de France », « Je déclare investi le président de la République ») accomplit le transfert d'<em>autorité</em>. Elle est souvent accompagnée de <em>symboles</em> (couronne, sceptre, <em>serment</em> sur la Constitution). Cette <em>parole</em> ne fait pas que constater une élection ou une succession ; elle l'achève et la rend effective aux yeux de tous. Elle marque le passage d'un individu à un statut supérieur, investi d'une <em>autorité</em> publique.<br>Exemple : Le sacre de Reims transformait le dauphin en roi « de droit divin » ; l'investiture présidentielle moderne transforme le président-élu en chef de l'État en exercice.`
  },
  // Question n°92
  {
    question: "Question n°92 : Que signifie l'expression « <em>parole de révélation</em> » (dans les religions <em>révélées</em>) ?",
    answers: [
      "Une <em>découverte</em> scientifique",
      "Une <em>parole</em> de l'homme sur Dieu",
      "Une <em>parole</em> de Dieu aux hommes"
    ],
    correct: 3,
    explanation: `Dans les religions dites « <em>révélées</em> », la <em>parole</em> <em>fondatrice</em> est une <em>parole de révélation</em> : Dieu se fait connaître et <em>parle</em> aux hommes. Cette <em>parole</em> est transcendante, elle vient d'en haut. Elle est consignée dans des textes sacrés (Torah, Bible, Coran) considérés comme « <em>Parole</em> de Dieu ». L'<em>autorité</em> de ces textes est absolue pour les croyants, car elle a son origine en Dieu lui-même. L'interprétation de cette <em>parole</em> (exégèse, théologie) devient alors une activité majeure, mais soumise à l'<em>autorité</em> du texte <em>révélé</em>.<br>Exemple : Pour les musulmans, le Coran est la <em>parole</em> incréée de Dieu, dictée mot à mot à Mahomet par l'ange Gabriel ; son <em>autorité</em> est sans égale.`
  },
  // Question n°93
  {
    question: "Question n°93 : Comment la <em>parole de dérision</em> (satire, moquerie) peut-elle saper une <em>autorité</em> ?",
    answers: [
      "En la ridiculisant",
      "En l'ignorant",
      "En la complimentant"
    ],
    correct: 1,
    explanation: `La <em>parole de dérision</em> (des fabulistes, des comiques, des caricaturistes) use de l'<em>ironie</em>, de l'exagération, de la moquerie pour attaquer les <em>puissants</em>, les institutions, les dogmes. En ridiculisant, elle désacralise, elle montre que le roi est nu. Elle prive l'<em>autorité</em> de son aura de sérieux et d'inviolabilité. C'est une arme des faibles contre les <em>forts</em>, une forme de contre-<em>pouvoir</em> <em>symbolique</em>. Son <em>autorité</em> vient de son esprit, de sa justesse, et de la complicité qu'elle crée avec le public. Les régimes autoritaires redoutent et censurent souvent la satire.<br>Exemple : Les caricatures de Daumier ridiculisant le roi Louis-Philippe en poire contribuèrent à miner le prestige de la monarchie de Juillet.`
  },
  // Question n°94
  {
    question: "Question n°94 : Quelle est la caractéristique de la <em>parole d'évidence</em> (qui s'impose comme allant de soi) ?",
    answers: [
      "Elle résulte d'une démonstration",
      "Elle se présente sans <em>preuve</em>",
      "Elle est toujours vraie"
    ],
    correct: 2,
    explanation: `La <em>parole d'évidence</em> est un énoncé qui se donne pour incontestable, qui va de soi (« Tout le monde sait que... », « Il est évident que... »). Elle tire son <em>autorité</em> non d'une argumentation, mais de son inscription dans le sens commun, dans les préjugés d'une époque ou d'un groupe. Elle fonctionne comme un raccourci de pensée et peut être un obstacle à la réflexion <em>critique</em>. La philosophie a souvent pour tâche de mettre en question ces « évidences ». L'<em>autorité</em> de cette <em>parole</em> est celle de la doxa, souvent renforcée par la répétition.<br>Exemple : « Une femme doit rester à la maison » était une « évidence » sociale pendant des siècles, rarement remise en cause avant les mouvements féministes.`
  },
  // Question n°95
  {
    question: "Question n°95 : Que signifie l'expression <em>parole de rupture</em> (dans les révolutions, les schismes) ?",
    answers: [
      "Une <em>parole</em> hésitante",
      "Une <em>parole</em> qui inaugure un nouvel ordre",
      "Une <em>parole</em> qui répare un lien"
    ],
    correct: 2,
    explanation: `La <em>parole de rupture</em> est un acte discursif qui brise une continuité institutionnelle ou idéologique. « Nous <em>rompons</em> avec Rome » (Henri VIII créant l'Église anglicane), « Le Tiers État est l'Assemblée nationale » (<em>Serment</em> du Jeu de Paume), « L'Algérie est indépendante » (Déclaration d'indépendance). Ces paroles <em>performatives</em> créent une nouvelle légitimité en niant l'ancienne. Elles sont souvent prononcées dans un contexte de crise et de <em>conflit</em>. Leur <em>autorité</em> est révolutionnaire : elle ne vient pas du passé, mais se fonde sur une nouvelle souveraineté qu'elle proclame.<br>Exemple : La déclaration d'indépendance des États-Unis (1776) est une <em>parole de rupture</em> avec l'<em>autorité</em> de la Couronne britannique, fondant la souveraineté du « peuple » américain.`
  },
  // Question n°96
  {
    question: "Question n°96 : Comment la <em>parole de consolation philosophique</em> (Boèce, Sénèque) <em>cherche</em>-t-elle à agir ?",
    answers: [
      "En atténuant la douleur par la compréhension",
      "En promettant une récompense dans l'au-delà",
      "En niant la souffrance"
    ],
    correct: 1,
    explanation: `La <em>parole de consolation philosophique</em> (genre illustré par Sénèque, Boèce) s'adresse à quelqu'un frappé par le malheur (deuil, exil, disgrâce). Elle n'use pas de compassion sentimentale, mais de raison (logos). Elle propose une mise en perspective : le malheur fait partie de la condition humaine, la Fortune est changeante, les biens perdus étaient précaires, la souffrance peut être surmontée par la <em>force</em> de l'âme. L'<em>autorité</em> de cette <em>parole</em> vient de la <em>sagesse</em> du philosophe et de la <em>vérité</em> des <em>arguments</em> stoïciens ou platoniciens qu'il déploie.<br>Exemple : Boèce, en prison et condamné à mort, écrit <em>La Consolation de la Philosophie</em>, où la figure allégorique de Philosophie lui explique que le vrai bonheur est intérieur et ne dépend pas des biens extérieurs que la Fortune peut retirer.`
  },
  // Question n°97
  {
    question: "Question n°97 : Quelle est la fonction de la <em>parole d'avertissement</em> ?",
    answers: [
      "<em>Annoncer</em> une bonne nouvelle",
      "<em>Mettre en garde</em>",
      "Faire peur inutilement"
    ],
    correct: 2,
    explanation: `La <em>parole d'avertissement</em> (« attention ! », « méfie-toi de... », « si vous faites cela, il arrivera... ») a une fonction préventive. Elle vise à éviter un mal futur en alertant sur un risque. Son <em>autorité</em> peut venir de l'expérience de celui qui <em>parle</em> (« je te préviens en connaissance de cause »), d'un savoir <em>expert</em> (alerte scientifique), ou d'une position d'<em>autorité</em> (parent, gouvernement). Elle combine souvent un constat (le danger existe) et une injonction (il faut <em>agir</em> pour l'éviter). Son efficacité dépend de la crédibilité de l'émetteur et de la perception du risque par le récepteur.<br>Exemple : Les avertissements sanitaires sur les paquets de cigarettes (« fumer tue ») sont des paroles d'<em>autorité</em> (de l'État, de la science) visant à dissuader.`
  },
  // Question n°98
  {
    question: "Question n°98 : Que signifie l'expression <em>parole de dévoilement</em> au sens philosophique (<em>alètheia</em>) ?",
    answers: [
      "Enlever un voile matériel",
      "<em>Faire sortir</em> de l'oubli",
      "<em>Révéler</em> un secret personnel"
    ],
    correct: 2,
    explanation: `Reprenant l'étymologie grecque d'<em>alètheia</em> (α-λήθεια, non-oubli), Heidegger fait de la <em>parole</em> authentique (surtout poétique) un « <em>dévoilement</em> ». Elle ne se contente pas de <em>communiquer</em> des <em>informations</em> sur des étants (les choses). Elle fait <em>advenir</em> l'Être lui-même, elle rend présente la <em>vérité</em> des choses en les arrachant à l'oubli et à la banalité du quotidien. Cette <em>parole de dévoilement</em> a une <em>autorité</em> ontologique : elle nous met en contact avec le fondement de ce qui est. C'est la tâche du poète et, dans une autre mesure, du philosophe.<br>Exemple : Pour Heidegger, le poème de Hölderlin « Etremellement habite poétiquement l'homme... » n'est pas une belle image, mais un <em>dévoilement</em> de l'<em>essence</em> de l'habitation humaine comme fondée dans la <em>poésie</em>.`
  },
  // Question n°99
  {
    question: "Question n°99 : Comment la <em>parole de réconciliation</em> (post-<em>conflit</em>) opère-t-elle ?",
    answers: [
      "En <em>désignant</em> un vainqueur et un vaincu",
      "En établissant une <em>vérité</em> commune",
      "En effaçant le passé"
    ],
    correct: 2,
    explanation: `Après un <em>conflit</em> violent (<em>guerre</em> civile, régime autoritaire), la <em>parole de réconciliation</em> est essentielle pour refonder une communauté. Elle peut prendre la forme de commissions « <em>Vérité</em> et Réconciliation » (Afrique du Sud), où victimes et bourreaux témoignent. Ces paroles visent à établir une <em>vérité</em> historique partagée, à <em>reconnaître</em> les souffrances, et parfois à pardonner. Des <em>discours</em> officiels (« tourner la page », « écrire ensemble une nouvelle histoire ») sont aussi des <em>performatifs</em> qui visent à clore <em>symboliquement</em> le <em>conflit</em> et à inaugurer une nouvelle ère.<br>Exemple : Le <em>discours</em> de Nelson Mandela, devenu président, appelant à dépasser les haines raciales et à construire une « nation arc-en-ciel ».`
  },
  // Question n°100
  {
    question: "Question n°100 : Quel est l'enjeu ultime de la séquence l'<em>autorité de la parole</em> ?",
    answers: [
      "Distinguer les différents types de <em>discours</em>",
      "Apprendre à <em>imposer</em> sa <em>parole</em> par la <em>force</em>",
      "Interroger les conditions d'une <em>autorité</em> légitime"
    ],
    correct: 3,
    explanation: `Cette séquence explore la <em>parole</em> non comme simple <em>communication</em>, mais comme <em>pouvoir</em> de fonder, d'instituer, de légitimer ou de subvertir l'ordre des choses et des sociétés. Elle distingue l'<em>autorité</em> fondée sur la <em>tradition</em> (<em>auctoritas</em>) de la <em>puissance</em> de contrainte (<em>potestas</em>), analyse les formes concrètes de la <em>parole</em> d'<em>autorité</em> (du <em>mythe</em> au <em>performatif</em>, du <em>charisme</em> à l'institution), et interroge sans cesse ce qui fait qu'une <em>parole</em> « fait <em>autorité</em> ». L'enjeu est de former un jugement <em>critique</em> sur les <em>discours</em> qui nous entourent et sur les conditions d'une <em>parole</em> authentique, qui lie <em>vérité</em> et responsabilité.<br>Exemple : Face à la prolifération des « paroles » sur les réseaux sociaux, la réflexion sur l'<em>autorité</em> légitime (compétence, <em>preuve</em>, débat contradictoire) est plus cruciale que jamais.`
  }
];