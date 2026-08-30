// ============================================
// DONNÉES GÉNÉRALES
// ============================================
const titre = "QUIZ HLP TERM - histoire et violence";
const sousTitre = "100 questions";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE (Synthèse)
// ============================================
const philosophyData = {
  texte: `Le 20e siècle, marqué par des violences inédites (guerres mondiales, Shoah, totalitarismes, guerres coloniales), a définitivement ébranlé la confiance des Lumières dans le progrès continu de la raison. Ce module interroge la nature de la violence : est-elle inhérente à l'homme ou produite par la société ? Il en explore les formes (martiale, politique, sociale, symbolique) et les tentatives de l'encadrer par le droit (guerre juste, contrat social). Enfin, il examine comment les écrivains et philosophes du 20e siècle se sont engagés pour dénoncer, résister ou penser cette violence, de l'horreur des tranchées à la « banalité du mal » totalitaire.`,
  source: "synthèse des enjeux de la séquence"
};

// ============================================
// QUESTIONS DU QUIZ (1 à 100)
// ============================================
const questions = [
  // Question n°1
  {
    question: "Question n°01 : Selon Alain, pourquoi la guerre est-elle un instrument au service d'intérêts qui la dépassent ?",
    answers: [
      "Les soldats cherchent à prouver leur courage personnel dans un conflit.",
      "La guerre répond à une pulsion de mort naturelle présente chez tous les humains.",
      "La guerre est un prétexte construit pour justifier des conquêtes et des appropriations économiques."
    ],
    correct: 3,
    explanation: `Alain analyse la guerre comme une entreprise rationnelle et organisée, non comme l'expression d'un instinct. Elle sert des intérêts économiques et politiques, le « ventre » qui exige des richesses. Les discours patriotiques ou héroïques masquent cette réalité instrumentale. Cette vision politise la guerre et la soustrait au registre de la fatalité biologique ou psychologique, invitant à une critique des mécanismes qui mènent aux conflits.
\nExemple : Les rivalités coloniales pour le contrôle des ressources (comme le charbon ou le caoutchouc) ont été des causes structurelles majeures des tensions ayant conduit à la Première Guerre mondiale, illustrant la thèse d'Alain.`
  },
  // Question n°2
  {
    question: "Question n°02 : Que signifie pour Hannah Arendt l'idée que, sans épée, les pactes ne sont que des mots à l'échelle internationale ?",
    answers: [
      "Les traités internationaux sont toujours rédigés dans un langage obscur et inapplicable.",
      "La parole donnée entre États est suffisante et rend inutile toute menace de force.",
      "L'absence d'une autorité supranationale coercitive rend la menace de la guerre nécessaire."
    ],
    correct: 3,
    explanation: `Arendt reprend l'argument hobbesien pour l'appliquer aux relations entre États souverains. En l'absence d'un super-État disposant du monopole de la violence légitime à l'échelle mondiale, la guerre demeure l'<em>ultima ratio</em>, le dernier recours pour trancher un différend. La persistance de la violence internationale relève ainsi d'un défaut structurel de l'ordre politique mondial, et non d'une nature humaine agressive.
\nExemple : L'inefficacité de la Société des Nations à empêcher l'invasion de la Mandchourie par le Japon en 1931 ou celle de l'Éthiopie par l'Italie en 1935 a confirmé cette analyse : sans force pour les faire appliquer, les pactes étaient violés.`
  },
  // Question n°3
  {
    question: "Question n°03 : Que nous apprennent les travaux d'anthropologues comme Laurence Keeley sur les sociétés préhistoriques ?",
    answers: [
      "Elles vivaient dans un état de paix et d'harmonie totale, confirmant le mythe du bon sauvage.",
      "La violence intertribale y était absente, car les humains n'avaient pas encore inventé les armes.",
      "Le taux de mortalité violente pouvait y être élevé, invalidant l'idée d'un âge d'or pacifique."
    ],
    correct: 3,
    explanation: `Ces recherches remettent en cause la vision rousseauiste d'un état de nature pacifique. En calculant les taux de mortalité dans des populations de chasseurs-cueilleurs, elles montrent que la violence collective n'est pas un produit de la « civilisation » ou de l'État, mais une constante de l'histoire humaine. Cela suggère une propension à la violence bien ancrée, que les sociétés doivent ensuite tenter de canaliser.
\nExemple : Chez les Hiwi de Colombie, le taux de mortalité violente pouvait atteindre des niveaux extrêmes, démontrant que la guerre destructrice a précédé l'apparition des sociétés agricoles et étatiques modernes.`
  },
  // Question n°4
  {
    question: "Question n°04 : Quelle expression de Max Weber définit le fondement de l'État moderne ?",
    answers: [
      "Le « contrat social » comme origine du pouvoir politique légitime.",
      "Le « monopole de la violence légitime » sur un territoire donné.",
      "La « main invisible » du marché comme régulateur économique et social."
    ],
    correct: 2,
    explanation: `Pour Weber, l'État se distingue par sa revendication réussie du monopole de l'usage légitime de la force physique. Ce monopole est constitutif de l'ordre civil : les individus renoncent à leur droit de se faire justice eux-mêmes (vengeance privée) et le délèguent à l'État, qui en contrepartie garantit leur sécurité. Ce concept est central pour comprendre la pacification des relations sociales et la construction de l'autorité politique.
\nExemple : Un citoyen victime d'un vol doit porter plainte et laisser la police et la justice agir. S'il décide de se faire justice lui-même en agressant le voleur, il viole le monopole de l'État et devient lui-même un délinquant.`
  },
  // Question n°5
  {
    question: "Question n°05 : Comment Norbert Elias analyse-t-il l'évolution des comportements en Occident dans <em>La Civilisation des mœurs</em> ?",
    answers: [
      "Il décrit un processus de libération des pulsions et d'augmentation de la violence privée.",
      "Il met en lumière une civilisation des mœurs où la violence est codifiée par des règles.",
      "Il affirme que les sociétés sont revenues à un état de nature après la chute de l'Empire romain."
    ],
    correct: 2,
    explanation: `Elias décrit un processus historique long où l'État centralisé impose progressivement le contrôle des pulsions. La violence physique directe recule dans la vie quotidienne au profit de l'autocontrainte psychique, internalisée via des codes de bienséance (étiquette, politesse). La violence n'est plus une affaire privée, mais relève des institutions. Cela ne signifie pas sa disparition, mais sa transformation et sa canalisation.
\nExemple : Au Moyen Âge, un duel pour une insulte était courant. À l'époque moderne, la même insulte mène à un procès en diffamation. La violence se déplace du corps au langage et est traitée par une institution.`
  },
  // Question n°6
  {
    question: "Question n°06 : Que désigne George Mosse par l'expression « brutalisation des sociétés » après 1918 ?",
    answers: [
      "Le retour à des valeurs traditionnelles et pacifiques après l'horreur de la guerre.",
      "L'habituation à la cruauté qui a marqué les mentalités et les pratiques politiques.",
      "Le développement d'une sensibilité artistique plus rude et moins raffinée."
    ],
    correct: 2,
    explanation: `Mosse analyse que l'expérience de masse de la violence industrielle de la Première Guerre mondiale a banalisé l'horreur et la mort. Les sociétés sont sorties de la guerre « brutalisées », c'est-à-dire plus enclines à accepter la violence comme mode normal d'action politique et sociale. Cette culture de guerre a préparé le terrain pour les violences politiques extrêmes de l'entre-deux-guerres, notamment la montée des fascismes.
\nExemple : Les anciens combattants des corps francs allemands, habitués à une violence extrême dans les tranchées, ont souvent rejoint les rangs des milices paramilitaires comme les SA, transférant les méthodes de la guerre au combat politique.`
  },
  // Question n°7
  {
    question: "Question n°07 : Quelles sont les trois conditions principales de la « guerre juste » selon la théorie classique ?",
    answers: [
      "Être rapide, victorieuse et peu coûteuse en vies humaines pour être justifiée moralement.",
      "Être déclarée par une autorité légitime, avoir une cause juste, et être menée de manière juste.",
      "Avoir l'approbation divine, viser uniquement des cibles militaires et éviter tout pillage."
    ],
    correct: 2,
    explanation: `La théorie de la guerre juste, d'origine augustinienne, tente de moraliser et d'encadrer la violence guerrière. Le <em>jus ad bellum</em> (droit de faire la guerre) exige une autorité légitime et une cause juste (défense, réparation d'une injustice). Le <em>jus in bello</em> (droit dans la guerre) impose des limites pendant le conflit (proportionnalité, distinction entre combattants et non-combattants). Cette théorie fonde une partie du droit international humanitaire moderne.
\nExemple : L'intervention militaire pour arrêter un génocide peut constituer une « cause juste ». Mais bombarder délibérément un marché civil pendant cette intervention violerait le <em>jus in bello</em>.`
  },
  // Question n°8
  {
    question: "Question n°08 : Pourquoi les hommes, selon Hobbes, acceptent-ils de conclure un contrat social et de renoncer à leur liberté naturelle ?",
    answers: [
      "Parce qu'ils sont naturellement sociables et recherchent la compagnie de leurs semblables.",
      "Par désir de gloire et de reconnaissance au sein d'une communauté politique organisée.",
      "Par crainte d'une mort violente dans l'état de nature, qui est une guerre de tous contre tous."
    ],
    correct: 3,
    explanation: `Hobbes décrit un état de nature hypothétique où, en l'absence de pouvoir commun, les hommes égaux et rivaux vivent dans la peur permanente d'une mort violente. Pour échapper à cette condition misérable et dangereuse, ils acceptent rationnellement de céder leur droit naturel à tout faire (y compris à la violence) à un souverain absolu, le Léviathan. En échange, celui-ci leur garantit la sécurité et la paix. La violence légitime devient ainsi le monopole exclusif de l'État.
\nExemple : Les confinements stricts durant la pandémie de Covid-19 peuvent être interprétés dans une perspective hobbesienne : l'État use de son pouvoir pour limiter des libertés individuelles au nom de la sécurité collective, ce que les citoyens acceptent pour éviter un pire (la propagation incontrôlée de la maladie).`
  },
  // Question n°9
  {
    question: "Question n°09 : Quel projet l'abbé de Saint-Pierre propose-t-il au 18e siècle pour établir une paix durable en Europe ?",
    answers: [
      "La conversion de tous les souverains européens à un christianisme pacifiste et universaliste.",
      "Un désarmement général et unilatéral initié par la France pour montrer l'exemple.",
      "La création d'une assemblée dotée d'une force armée pour arbitrer les conflits entre nations."
    ],
    correct: 3,
    explanation: `L'abbé de Saint-Pierre est un précurseur visionnaire du fédéralisme européen et de la sécurité collective. Il comprend que la paix ne peut reposer sur la seule bonne volonté des princes, mais nécessite une institution supranationale capable d'imposer ses décisions par la force si nécessaire. Son projet, jugé utopique à son époque, pose les bases intellectuelles des organisations internationales du 20e siècle comme la SDN ou l'ONU.
\nExemple : Le système de sécurité collective de l'ONU, avec son Conseil de Sécurité pouvant autoriser des interventions armées (casques bleus), est l'héritier lointain de cette idée d'une force commune au service du maintien de la paix.`
  },
  // Question n°10
  {
    question: "Question n°10 : Comment Kant envisage-t-il dans <em>Idée d'une histoire universelle</em> la sortie de l'état de guerre entre nations ?",
    answers: [
      "Par la conquête et l'unification de l'Europe sous l'autorité d'un seul empire universel.",
      "Par le développement du commerce international, qui rendrait la guerre trop coûteuse.",
      "Par la formation progressive d'une <em>société des nations</em> fondée sur le droit."
    ],
    correct: 3,
    explanation: `Kant extrapole la logique du contrat social à l'échelle internationale. De même que les individus sortent de l'état de nature en formant des États civils, les États, qui sont dans un état de nature entre eux (donc de guerre latente), devraient s'unir en une fédération libre (<em>foedus pacificum</em>). Cette société des nations n'est pas un super-État mondial, mais une alliance garantissant la paix perpétuelle par le droit. C'est un idéal régulateur de la raison.
\nExemple : L'Union européenne, malgré ses limites, incarne partiellement ce projet kantien : des États souverains qui ont renoncé à l'usage de la force entre eux et soumettent leurs différends à des institutions et des tribunaux communs.`
  },
  // Question n°11
  {
    question: "Question n°11 : Quelle distinction fondamentale Hannah Arendt établit-elle entre « pouvoir » et « violence » ?",
    answers: [
      "Le pouvoir est psychologique tandis que la violence est exclusivement physique et tangible.",
      "Le pouvoir est toujours juste et la violence est toujours injuste et immorale par nature.",
      "Le pouvoir repose sur le consentement et la violence est au service d'un pouvoir affaibli."
    ],
    correct: 3,
    explanation: `Pour Arendt, le pouvoir (<em>power</em>) émane de la capacité des hommes à agir et à décider ensemble ; il est constitutif de la sphère politique authentique. La violence (<em>violence</em>) est un outil, souvent le signe qu'un pouvoir a perdu son assentiment et doit compenser par la force ce qui lui manque en légitimité. Un régime qui ne repose que sur la violence est fragile ; un pouvoir authentique peut se passer d'elle.
\nExemple : Un mouvement social de masse et pacifique (comme les manifestations de 1989 en Europe de l'Est) démontre un pouvoir populaire qui finit par faire tomber des régimes apparemment forts, tandis qu'une dictature qui réprime dans le sang montre la faiblesse de son assise.`
  },
  // Question n°12
  {
    question: "Question n°12 : Quelle est la caractéristique principale d'une guerre de « conquête » ?",
    answers: [
      "Elle vise à libérer un peuple opprimé par un régime tyrannique ou colonial.",
      "Elle a pour objectif de s'approprier des territoires et des richesses.",
      "Elle cherche à détruire complètement l'ennemi, y compris sa population civile."
    ],
    correct: 2,
    explanation: `La guerre de conquête incarne la vision instrumentale et économique de la violence. Elle est motivée par l'intérêt matériel (ressources, terres, routes commerciales) ou par l'impérialisme idéologique (propager une religion, un système politique). C'est le type de guerre que critique Alain quand il dit qu'elle n'est qu'un « prétexte » pour s'emparer de ce qui ne nous appartient pas, masquant des intérêts peu avouables derrière des justifications nobles.
\nExemple : Les conquêtes coloniales du 19e siècle en Afrique et en Asie étaient largement motivées par l'exploitation économique (caoutchouc, minerais, ivoire) et justifiées idéologiquement par le « fardeau de l'homme blanc » et la mission civilisatrice.`
  },
  // Question n°13
  {
    question: "Question n°13 : Quelle est la visée première d'une guerre de « libération » ?",
    answers: [
      "Étendre son territoire national et assurer sa prééminence géopolitique sur un continent.",
      "S'enrichir en pillant les richesses du vaincu et en asservissant sa population.",
      "Renverser un ordre oppressif pour instaurer plus de liberté ou de justice."
    ],
    correct: 3,
    explanation: `Les guerres de libération visent une fin politique émancipatrice. La violence y est présentée comme un mal nécessaire pour en abolir un plus grand (l'oppression). Cela pose la question complexe de la « violence juste » ou révolutionnaire : une violence peut-elle être légitime si elle sert une cause considérée comme progressiste ? Le bilan humain souvent lourd de ces conflits montre l'ambiguïté et les dangers de cet argument.
\nExemple : La guerre d'indépendance algérienne (1954-1962) était vue par le FLN comme une guerre de libération nationale contre le colonialisme français. La violence extrême des deux côtés fut justifiée, pour les uns, par la fin de l'oppression, et pour les autres, par le maintien de l'ordre et de l'intégrité territoriale.`
  },
  // Question n°14
  {
    question: "Question n°14 : Comment Hannah Arendt définit-elle la spécificité des régimes <em>totalitaires</em> ?",
    answers: [
      "Ce sont des régimes autoritaires classiques, similaires aux monarchies absolues de l'Ancien Régime.",
      "Ils visent à transformer la nature humaine et à contrôler la vie des masses atomisées par la terreur.",
      "Ce sont des démocraties défaillantes où l'État intervient de manière excessive dans l'économie."
    ],
    correct: 2,
    explanation: `Pour Arendt, le totalitarisme (nazisme, stalinisme) est une nouveauté radicale du 20e siècle. Il ne se contente pas de réprimer l'opposition, mais détruit l'espace public et la sphère privée, transformant les individus en une masse homogène et docile. Il utilise une idéologie totalisante (la race, la lutte des classes) pour justifier une terreur systématique et des crimes de masse, y compris l'extermination. Le but est la domination totale et la transformation de l'humain.
\nExemple : Les camps de concentration et d'extermination nazis n'étaient pas seulement des outils de répression, mais des « laboratoires » visant à réduire l'homme à l'état de « déchet » superflu, selon l'analyse d'Arendt.`
  },
  // Question n°15
  {
    question: "Question n°15 : Quel extrait de <em>Vie et Destin</em> de Vassili Grossman illustre la mécanique de la violence totalitaire ?",
    answers: [
      "La description épique d'une bataille entre l'Armée rouge et la Wehrmacht sur le front de l'Est.",
      "Un discours idéologique prononcé par un commissaire politique soviétique pour motiver les troupes.",
      "Le récit de l'enfermement dans un ghetto où les nazis tuent des enfants pour se divertir."
    ],
    correct: 3,
    explanation: `Grossman, témoin des horreurs du nazisme et du stalinisme, décrit la banalisation et l'absurdité de la violence totale. La scène du ghetto montre comment la vie quotidienne (coiffeurs, médecins) peut coexister avec l'horreur la plus extrême, et comment la violence devient un divertissement gratuit, signe d'une déshumanisation systémique. Cette littérature documentaire est un acte de résistance par la mémoire et la dénonciation.
\nExemple : Ce passage évoque les exécutions arbitraires et les « chasses à l'homme » dans les ghettos, où la vie d'un enfant n'a plus aucune valeur, illustrant la profonde déchéance éthique du régime nazi.`
  },
  // Question n°16
  {
    question: "Question n°16 : Selon les données sociologiques, quelle est la tendance longue de la violence privée (homicides) en France depuis le 19e siècle ?",
    answers: [
      "Elle est globalement à la hausse, confirmant le sentiment d'insécurité contemporain.",
      "Elle est restée parfaitement stable, sans variation significative sur deux siècles.",
      "Elle est globalement à la baisse, une tendance qui remonte même au Moyen-Âge."
    ],
    correct: 3,
    explanation: `Contre l'intuition commune alimentée par la médiatisation, les statistiques historiques montrent un déclin séculaire de la violence interpersonnelle dans les sociétés occidentales. Le sociologue Nicolas Bourgoin parle de « révolution sécuritaire ». Cette baisse est attribuée au monopole étatique de la violence (Weber), à la civilisation des mœurs (Elias) et à la rationalisation de la justice. Elle n'empêche pas des pics ou de nouvelles formes de violence.
\nExemple : Le taux d'homicides pour 100 000 habitants en France est passé d'environ 3,5 au début du 19e siècle à moins de 1,5 au début du 21e siècle, malgré une population bien plus nombreuse.`
  },
  // Question n°17
  {
    question: "Question n°17 : Pourquoi a-t-on souvent l'impression, aujourd'hui, que la violence augmente partout dans le monde ?",
    answers: [
      "Parce qu'elle augmente effectivement en valeur absolue, le monde comptant plus d'habitants qu'autrefois.",
      "À cause de la démultiplication de sa visibilité médiatique et de notre plus faible tolérance à son égard.",
      "Parce que les êtres humains sont devenus génétiquement plus agressifs au fil des générations."
    ],
    correct: 2,
    explanation: `La mondialisation de l'information fait que tout acte violent, où qu'il se produise, peut être vu en temps réel. Cette surabondance d'images crée une impression de monde dangereux. Parallèlement, les sociétés démocratiques ont élevé leurs standards de sécurité et de respect de l'intégrité physique, rendant chaque acte de violence plus insupportable et plus médiatisable. L'écart entre perception et réalité statistique est ainsi considérable.
\nExemple : Un attentat terroriste en Europe, bien que statistiquement rare, occupe l'espace médiatique pendant des semaines, tandis que la baisse constante des homicides quotidiens passe inaperçue.`
  },
  // Question n°18
  {
    question: "Question n°18 : Qu'est-ce que la « violence symbolique » selon Pierre Bourdieu ?",
    answers: [
      "La violence physique déguisée en accident ou présentée comme légitime.",
      "La violence représentée dans les œuvres d'art ou dans la littérature.",
      "La violence qui s'exerce avec l'assentiment inconscient du dominé."
    ],
    correct: 3,
    explanation: `C'est la forme la plus insidieuse et efficace de domination. Elle ne fonctionne pas par la contrainte physique, mais par l'imposition de schémas mentaux (langage, goûts, manières) qui font apparaître l'ordre social comme naturel et légitime. Le dominé méconnaît cette violence et y collabore, croyant par exemple que son échec est dû à un manque personnel de « mérite ». C'est une violence douce mais extrêmement puissante, qui assure la reproduction des inégalités.
\nExemple : Un enfant d'ouvrier qui échoue à l'école peut intérioriser qu'il n'est « pas doué », alors que Bourdieu montre qu'il est surtout confronté à un langage et des références culturelles (la « culture légitime ») qui sont celles des classes dominantes et qu'il n'a pas acquises dans son milieu familial.`
  },
  // Question n°19
  {
    question: "Question n°19 : Comment Bourdieu analyse-t-il le rôle du système éducatif dans la société ?",
    answers: [
      "L'école est un sanctuaire de pure méritocratie qui récompense uniquement le travail et le talent individuels.",
      "L'école est totalement inefficace et n'enseigne rien d'utile pour la vie professionnelle et sociale.",
      "L'école présente des critères culturels comme neutres alors qu'ils favorisent les enfants des classes dominantes."
    ],
    correct: 3,
    explanation: `Pour Bourdieu, l'école est une instance majeure de violence symbolique. Elle prétend évaluer des « dons » naturels ou des « compétences » universelles, mais en réalité, elle sanctionne un « capital culturel » hérité du milieu familial. L'enfant de cadre baigne dans un langage et des pratiques proches de ceux de l'école, ce qui lui donne un avantage invisible. L'école transforme ainsi un privilège social en « excellence » scolaire, reproduisant et justifiant les inégalités.
\nExemple : La dissertation de philosophie valorise un type d'écriture abstrait, une maîtrise de références littéraires et une capacité à manier des concepts qui sont plus familiers dans les milieux intellectuels bourgeois que dans les milieux populaires.`
  },
  // Question n°20
  {
    question: "Question n°20 : Que dénonce Serge Paugam à propos des « cités socialement disqualifiées » ?",
    answers: [
      "Leur architecture moderne et déshumanisante, responsable de tous les maux sociaux.",
      "Leur intégration trop réussie à la ville, qui nuit à leur identité propre et spécifique.",
      "Un processus où la pauvreté entraîne la stigmatisation spatiale du lieu de vie."
    ],
    correct: 3,
    explanation: `Paugam analyse comment la pauvreté et l'exclusion sociale produisent une ségrégation spatiale. Certains quartiers concentrent les difficultés (chômage, précarité) et deviennent des « stigmates » pour leurs habitants. Les médias, en focalisant sur la « violence urbaine », accentuent cette stigmatisation. Les habitants les plus mobiles fuient, renforçant la concentration de la pauvreté. L'espace lui-même devient un marqueur négatif, une forme de violence sociale.
\nExemple : Un jeune habitant d'un quartier dit « sensible » peut voir son adresse devenir un obstacle à l'embauche, indépendamment de ses compétences, à cause des préjugés négatifs associés à son code postal.`
  },
  // Question n°21
  {
    question: "Question n°21 : Comment le personnage de Bardamu dans 'Voyage au bout de la nuit' incarne-t-il l'impact de la Grande Guerre ?",
    answers: [
      "Il en sort grandi, héroïque et plus déterminé que jamais à servir sa patrie.",
      "Il oublie rapidement les horreurs vécues et reprend une vie normale et productive.",
      "Il en sort cyniquement déshumanisé, à l'image d'une génération perdue."
    ],
    correct: 3,
    explanation: `Bardamu est l'anti-héros par excellence de la littérature d'après-guerre. La violence absurde et industrielle des tranchées a détruit en lui toute croyance en des valeurs comme la patrie, l'honneur ou le progrès. Son voyage à travers différents milieux (Afrique coloniale, Amérique) ne fait que confirmer sa vision désenchantée d'un monde fondé sur l'exploitation, la bêtise et la lâcheté. Céline fait de lui le porte-parole d'une génération marquée à jamais.
\nExemple : La célèbre réplique « La guerre, c'est tout ce qui n'est pas la paix. Et c'est tout ce qu'il y a de plus intéressant » est dite sur un ton d'une ironie cinglante qui résume le désespoir et le refus de Bardamu de se laisser berner par les grands discours.`
  },
  // Question n°22
  {
    question: "Question n°22 : Quelle position Céline défend-il à travers Bardamu concernant la guerre ?",
    answers: [
      "Il faut y aller par devoir patriotique, car la patrie et l'honneur sont des valeurs suprêmes.",
      "C'est une épreuve nécessaire qui forge le caractère et révèle la vraie nature des hommes.",
      "Il faut la refuser car elle est absurde et seuls ceux qui la refusent survivent."
    ],
    correct: 3,
    explanation: `Céline pousse à l'extrême un pacifisme radical et individualiste. Face aux discours patriotiques, Bardamu rétorque que la « gloire » promise aux soldats est un leurre et que leur mort est statistique et oubliée. Le refus de la guerre n'est pas une lâcheté, mais la seule position rationnelle face à l'absurdité du sacrifice. Ce discours, publié en 1932, est d'une grande radicalité et annonce le désastre à venir.
\nExemple : L'argument de Bardamu – « Avez-vous jamais cherché à en connaître un seul de ces noms [des soldats morts pendant la guerre de Cent Ans] ? » – montre que le sacrifice est inutile car la mémoire des morts est éphémère.`
  },
  // Question n°23
  {
    question: "Question n°23 : Dans la pièce 'Antigone' de Jean Anouilh (1944), quelle figure historique Créon représente-t-il symboliquement ?",
    answers: [
      "Le général de Gaulle, chef de la France libre et de la Résistance.",
      "Adolf Hitler, l'incarnation du mal totalitaire et de la folie destructrice.",
      "Le maréchal Pétain, représentant l'autorité collaborationniste."
    ],
    correct: 3,
    explanation: `Montée sous l'Occupation, la pièce est une allégorie transparente. Créon, le roi qui impose sa loi au nom de la raison d'État et de la survie de Thèbes (la France de Vichy), s'oppose à Antigone, qui incarne la résistance individuelle et l'intransigeance des valeurs (la liberté, l'honneur familial). Créon argumente qu'il doit gouverner un navire en tempête, faisant des compromis nécessaires – tout comme Pétain justifiait la collaboration.
\nExemple : La réplique de Créon : « C'est – entre beaucoup d'autres – l'avantage de la tyrannie qu'elle a le droit de dire et de faire absolument ce qu'elle veut » peut être lue comme une critique de l'arbitraire du régime de Vichy qui gouvernait par décrets-lois.`
  },
  // Question n°24
  {
    question: "Question n°24 : Quel concept célèbre Hannah Arendt a-t-elle forgé en couvrant le procès d'Adolf Eichmann en 1961 ?",
    answers: [
      "La « guerre juste » comme cadre éthique pour les conflits modernes.",
      "Le « choc des civilisations » comme grille de lecture des relations internationales.",
      "La « banalité du mal » pour décrire le fonctionnement déshumanisé du crime de masse."
    ],
    correct: 3,
    explanation: `En observant Eichmann, organisateur bureaucratique de la Shoah, Arendt fut frappée non par sa monstruosité, mais par sa normalité terrifiante. Il n'était pas un fanatique diabolique, mais un fonctionnaire soucieux de sa carrière, obéissant aux ordres sans pensée critique. Le « mal » n'était pas radical et satanique, mais banal, issu de l'incapacité à penser, de la soumission à l'autorité et du fonctionnement d'un système administratif. Cette thèse bouleversa la compréhension des crimes de masse.
\nExemple : Eichmann arguait à son procès qu'il « suivait les ordres » et n'avait fait que son devoir en organisant efficacement les déportations. Arendt y vit le comble de la pensée absente, où le zèle bureaucratique remplace le jugement moral.`
  },
  // Question n°25
  {
    question: "Question n°25 : Quel est le rôle du poème <em>Liberté</em> de Paul Eluard, publié clandestinement en 1942 ?",
    answers: [
      "Célébrer la beauté de la nature française comme un refuge face à l'occupant.",
      "Faire l'éloge indirect du maréchal Pétain et des valeurs de la Révolution nationale.",
      "Servir d'acte de résistance poétique en affirmant le mot « Liberté » comme un mantra."
    ],
    correct: 3,
    explanation: `Dans le contexte de l'Occupation et de la censure, le poème d'Eluard est une arme politique. La répétition obsessionnelle « J'écris ton nom » sur tous les éléments du réel (cahiers, neige, armes, pain) fait de la liberté une présence concrète et omniprésente, que l'oppresseur ne peut effacer. C'est un acte de défi et d'affirmation des valeurs républicaines. Le poème circule clandestinement et devient un symbole de l'esprit résistant.
\nExemple : Le poème était diffusé sous le manteau, parachuté par la RAF sur la France occupée, et récité dans les réseaux de résistance. Il montrait que la littérature pouvait être une forme de combat, affirmant des valeurs que la violence physique tentait d'étouffer.`
  },
  // Question n°26
  {
    question: "Question n°26 : Que symbolise l'épidémie de peste dans le roman <em>La Peste</em> d'Albert Camus (1947) ?",
    answers: [
      "Une simple catastrophe naturelle et biologique, sans dimension politique ou symbolique particulière.",
      "Une punition divine envoyée pour châtier les péchés et les vices des hommes.",
      "Une allégorie du nazisme et de tout fléau totalitaire qui isole et contre lequel il faut résister."
    ],
    correct: 3,
    explanation: `Camus utilise la métaphore de la peste pour décrire la mécanique du mal politique. Comme le nazisme (la « peste brune »), la peste isole, instaure la méfiance, tue indifféremment et impose un régime d'exception. Les réactions des personnages (Rieux qui lutte, Tarrou qui cherche la sainteté sans Dieu, Rambert l'égoïste qui change) reflètent les attitudes possibles face à la tyrannie. Le roman est un appel à la solidarité et à la lutte, même vaine, contre l'absurde du mal.
\nExemple : La phrase « Il y a dans les hommes plus de choses à admirer que de choses à mépriser » résume l'humanisme résistant de Camus : malgré l'horreur, il faut choisir le côté des victimes et lutter, car c'est ainsi qu'on affirme sa dignité.`
  },
  // Question n°27
  {
    question: "Question n°27 : Qu'est-ce que la « littérature engagée » selon Jean-Paul Sartre ?",
    answers: [
      "Une littérature qui ne s'occupe que de beauté formelle et d'esthétique pure, en dehors de toute contingence historique.",
      "Une littérature de propagande au service exclusif d'un parti politique ou d'une idéologie, quitte à trahir la vérité.",
      "Une littérature qui prend parti dans les conflits de son temps, dénonce l'oppression et s'engage pour la liberté."
    ],
    correct: 3,
    explanation: `Pour Sartre, l'écrivain est « en situation » dans son époque et a une responsabilité. La littérature engagée consiste à dévoiler le monde, à montrer les injustices et les aliénations, pour que les hommes puissent les transformer. Elle doit préserver la liberté du lecteur et ne pas tomber dans le mensonge de la propagande. L'écriture est ainsi conçue comme une action dans le monde, un moyen de participer aux luttes pour l'émancipation.
\nExemple : Sartre lui-même s'est engagé contre la guerre d'Algérie, a fondé la revue <em>Les Temps Modernes</em> et a pris position sur de nombreuses causes, considérant que son statut d'intellectuel lui imposait de parler et d'agir.`
  },
  // Question n°28
  {
    question: "Question n°28 : Quelle est la différence entre le <em>jus ad bellum</em> et le <em>jus in bello</em> dans la théorie de la guerre juste ?",
    answers: [
      "Le <em>jus ad bellum</em> concerne le droit pendant la guerre, le <em>jus in bello</em> le droit avant la guerre.",
      "Le <em>jus ad bellum</em> concerne le droit à la guerre, le <em>jus in bello</em> concerne le droit pendant la guerre.",
      "C'est la même chose, deux termes synonymes pour désigner le droit de la guerre."
    ],
    correct: 2,
    explanation: `Cette distinction est fondamentale dans l'éthique de la guerre. On peut avoir une cause juste (se défendre contre une agression - <em>jus ad bellum</em>) mais mener la guerre de manière injuste (bombarder des civils délibérément - violation du <em>jus in bello</em>). Inversement, une guerre menée « proprement » ne justifie pas une cause injuste. Cette double exigence tente de limiter moralement la violence à toutes les étapes du conflit. C'est le fondement du droit international humanitaire contemporain.
\nExemple : L'intervention de l'OTAN au Kosovo en 1999 a été débattue : avait-elle une cause juste (arrêter un nettoyage ethnique) ? Mais le bombardement de civils a soulevé des questions sur le respect du <em>jus in bello</em> (proportionnalité, précision).`
  },
  // Question n°29
  {
    question: "Question n°29 : En quoi les attentats du 11 septembre 2001 illustrent-ils le concept de « guerre asymétrique » ?",
    answers: [
      "Ils opposaient deux armées conventionnelles de puissance équivalente dans une bataille rangée.",
      "Ils ont eu un impact médiatique et psychologique très faible, restant ignorés de l'opinion publique mondiale.",
      "Un petit groupe a utilisé une violence spectaculaire contre une superpuissance, obtenant un impact démesuré par rapport à ses moyens militaires."
    ],
    correct: 3,
    explanation: `Le 11-Septembre est l'archétype de la violence asymétrique et « théâtrale ». Avec des moyens relativement faibles (des couteaux et des avions détournés), les terroristes ont frappé les symboles du pouvoir économique et militaire américain, en direct à la télévision mondiale. L'objectif n'était pas une victoire militaire classique, mais de semer la terreur, de déstabiliser et de provoquer une réaction excessive. La visibilité et l'effet psychologique deviennent centraux.
\nExemple : L'effondrement des tours jumelles, filmé en direct et diffusé en boucle, a créé un trauma collectif à l'échelle planétaire, bien au-delà du nombre de victimes, démontrant la puissance de l'image dans la guerre moderne.`
  },
  // Question n°30
  {
    question: "Question n°30 : Comment le licenciement massif par visioconférence (ex. Better.com en 2021) peut-il être analysé comme une violence ?",
    answers: [
      "C'est un acte de violence physique directe contre les employés licenciés.",
      "C'est un acte de générosité de l'employeur qui évite la gêne d'un entretien.",
      "C'est un acte de violence symbolique et sociale qui déshumanise et fait souffrir."
    ],
    correct: 3,
    explanation: `Au-delà de l'aspect économique, la manière dont un licenciement est effectué est chargée de sens. Le faire par visioconférence à des centaines de personnes simultanément, sans préavis ni accompagnement, est une négation de l'individu et de sa dignité. C'est une manifestation de pouvoir arbitraire qui produit de la détresse, de la colère et un sentiment d'injustice. Cette violence sociale, bien que non physique, a des conséquences psychologiques graves.
\nExemple : La brutalité froide de l'annonce (« vous faites partie des malchanceux ») transforme un processus managérial en une épreuve humiliante et traumatisante, mettant en lumière la violence inhérente à certaines pratiques capitalistes contemporaines.`
  },
  // Question n°31
  {
    question: "Question n°31 : Quel événement majeur du 20e siècle a définitivement ébranlé la confiance dans le progrès héritée des Lumières ?",
    answers: [
      "La révolution industrielle du 19e siècle et ses conditions de travail difficiles.",
      "La découverte de l'Amérique et les violences coloniales qui ont suivi.",
      "Les guerres mondiales, la Shoah et les totalitarismes, qui ont détourné la science."
    ],
    correct: 3,
    explanation: `Les violences de masse et industrielles du 20e siècle ont montré de manière tragique que les avancées techniques et scientifiques pouvaient être détournées vers la destruction systématique, contredisant l'idée d'un progrès linéaire et bénéfique de l'humanité. L'optimisme positiviste du 19e siècle a laissé place au doute, à l'absurde et à la nécessité de repenser les limites de l'humain face à sa propre capacité d'autodestruction.
\nExemple : L'utilisation du gaz moutarde à Ypres en 1915, puis la bombe atomique sur Hiroshima en 1945, sont des symboles de ce retournement : la science, censée libérer l'homme, devient un outil de son anéantissement.`
  },
  // Question n°32
  {
    question: "Question n°32 : Que signifie l'expression de Simone Weil « l'âme souffre violence tous les jours » dans le contexte de la guerre ?",
    answers: [
      "La guerre est une expérience spirituellement enrichissante qui fortifie l'âme des combattants.",
      "La violence de la guerre efface jusqu'à la pensée de ses causes et de sa fin.",
      "Les soldats sont tous des âmes sensibles qui pleurent chaque soir dans les tranchées."
    ],
    correct: 2,
    explanation: `Simone Weil, commentant <em>L'Iliade</em>, décrit la guerre comme une force écrasante qui abîme les âmes de tous, vainqueurs et vaincus. Elle est si totale qu'elle rend inconcevable aussi bien son déclenchement que sa fin. La pensée et l'aspiration sont annihilées. La violence n'est plus un moyen pour une fin, elle devient une fin en soi, un état permanent qui annule la réflexion et l'action orientée vers la paix, révélant une dimension tragique de la condition humaine.
\nExemple : Un soldat dans les tranchées de Verdun, soumis à un bombardement continu, peut perdre jusqu'à l'idée même d'un « après » la guerre ; sa conscience est réduite à la survie immédiate, mutilée dans sa capacité à envisager un futur.`
  },
  // Question n°33
  {
    question: "Question n°33 : Quel argument principal est avancé pour expliquer la baisse séculaire de la violence privée ?",
    answers: [
      "Les hommes sont devenus génétiquement moins agressifs grâce à l'évolution biologique.",
      "La présence policière massive et visible dans tous les espaces publics dissuade automatiquement toute agression.",
      "Le monopole étatique de la violence a internalisé les contrôles sociaux et canalisé la violence."
    ],
    correct: 3,
    explanation: `La thèse d'Elias, corroborée par les statistiques, est que l'État, en s'imposant comme arbitre unique des conflits, a progressivement dévalué et criminalisé la violence privée. Les individus ont dû apprendre à maîtriser leurs impulsions, à différer la satisfaction, à utiliser des moyens pacifiques (la parole, la justice) pour régler leurs différends. Cette autocontrainte psychique est devenue une « seconde nature ». La violence a changé de forme plus qu'elle n'a disparu.
\nExemple : Le duel, pratique courante et souvent légale pour l'honneur à l'époque moderne, est devenu un crime au 19e siècle, signe que l'État ne tolérait plus que les individus règlent leurs comptes par les armes.`
  },
  // Question n°34
  {
    question: "Question n°34 : Quelle est la signification du terme <em>post bellum</em> dans la théorie élargie de la guerre juste ?",
    answers: [
      "La période de préparation et de montée des tensions qui précède immédiatement le déclenchement des hostilités.",
      "Une stratégie militaire de dernière minute visant à forcer la victoire par une offensive ultime et désespérée.",
      "Les conditions de paix doivent être équitables et viser la réconciliation pour éviter de futurs conflits."
    ],
    correct: 3,
    explanation: `Le <em>jus post bellum</em> complète la théorie classique en reconnaissant que les responsabilités morales ne s'arrêtent pas avec le cessez-le-feu. Une paix juste doit inclure la reconstruction, la réparation des dommages, le jugement des crimes et des mesures pour rétablir des relations stables. Imposer des conditions punitives peut créer un ressentiment durable et semer les germes d'un futur conflit, comme l'a montré le traité de Versailles de 1919.
\nExemple : Le Plan Marshall après 1945, qui a aidé à reconstruire l'Europe (y compris l'Allemagne vaincue), est souvent cité comme un exemple de <em>jus post bellum</em> réussi, ayant contribué à la réconciliation et à la stabilité durable.`
  },
  // Question n°35
  {
    question: "Question n°35 : Pourquoi la <em>trêve olympique</em> est-elle un exemple d'encadrement traditionnel de la violence ?",
    answers: [
      "Parce qu'elle arrête mécaniquement toutes les guerres dans le monde pendant la durée des Jeux modernes.",
      "Parce qu'elle représente un code coutumier suspendant les conflits et montrant que la guerre avait ses règles.",
      "Parce que les athlètes étaient des soldats en congé payé, ce qui réduisait temporairement les effectifs militaires."
    ],
    correct: 2,
    explanation: `La trêve sacrée (<em>ekecheiria</em>) dans la Grèce antique obligeait les cités en guerre à cesser les hostilités pour permettre aux athlètes et aux spectateurs de se rendre aux Jeux Olympiques en sécurité. C'est un exemple précoce de droit international coutumier qui limitait la violence par une règle supérieure (religieuse). Cela montre que l'idée d'encadrer la guerre par des périodes de non-violence et des règles partagées n'est pas moderne.
\nExemple : Malgré les guerres incessantes entre Sparte et Athènes, elles respectaient généralement la trêve olympique. Sa violation était considérée comme un sacrilège et provoquait l'opprobre général.`
  },
  // Question n°36
  {
    question: "Question n°36 : Quel paradoxe Sartre soulève-t-il concernant l'engagement contre l'oppression ?",
    answers: [
      "Il faut toujours et systématiquement utiliser la violence contre les oppresseurs, sans aucune limite morale.",
      "L'engagement est par nature inutile et ne change jamais le cours de l'histoire, il vaut mieux rester passif.",
      "Peut-on perpétuer l'oppression (par le mensonge, la terreur) sous prétexte de vouloir y mettre fin ?"
    ],
    correct: 3,
    explanation: `Sartre pose un problème éthique central pour tout mouvement révolutionnaire ou de libération. Pour lutter efficacement contre une oppression violente, faut-il adopter ses méthodes (mensonge, terreur, manipulation) ? Le risque est de créer une nouvelle oppression en croyant la combattre. Pour Sartre, la littérature engagée doit justement éviter ce piège : elle doit dévoiler la vérité et la liberté, pas servir de nouvel instrument de domination. La fin ne justifie pas tous les moyens.
\nExemple : Un parti révolutionnaire qui ment à ses militants « pour leur bien » ou qui élimine ses opposants internes reproduit les mécanismes autoritaires qu'il prétend abattre, comme l'ont montré les purges staliniennes.`
  },
  // Question n°37
  {
    question: "Question n°37 : Quelle est l'analyse d'Hannah Arendt concernant les <em>masses</em> dans les régimes totalitaires ?",
    answers: [
      "Les masses sont des classes sociales conscientes de leurs intérêts et naturellement révolutionnaires.",
      "Les mouvements totalitaires séduisent des masses atomisées et désocialisées, offrant une pseudo-communauté.",
      "Les masses sont toujours hostiles au totalitarisme et constituent le principal rempart contre sa prise de pouvoir."
    ],
    correct: 2,
    explanation: `Arendt distingue la <em>masse</em> de la <em>classe</em>. Une classe a des intérêts économiques communs et une structure. La masse est un agrégat d'individus isolés, déracinés par la modernité, qui ont perdu leurs appartenances sociales traditionnelles. Le totalitarisme séduit cette masse en lui offrant une explication totalisante du monde (l'idéologie) et une appartenance fanatique à un mouvement qui nie l'individu. La violence devient alors le ciment de cette fausse communauté.
\nExemple : Le parti nazi a recruté parmi les « déclassés » de toutes origines, les chômeurs, les anciens combattants désillusionnés, offrant un sens et une identité par la haine de l'ennemi désigné (le Juif, le bolchevik).`
  },
  // Question n°38
  {
    question: "Question n°38 : Comment Simone Weil analyse-t-elle la <em>force</em> dans <em>L'Iliade ou le poème de la force</em> ?",
    answers: [
      "Comme une vertu héroïque qui élève l'homme et lui permet de transcender sa condition mortelle.",
      "Comme une simple technique militaire, un rapport de puissance qui n'a aucune dimension métaphysique.",
      "Comme ce qui chosifie quiconque : la victime en cadavre, le vainqueur en esclave de sa violence."
    ],
    correct: 3,
    explanation: `Pour Weil, la force (<em>dynamis</em>, δύναμις) est le vrai sujet de l'épopée homérique. Elle n'épargne personne. La victime est transformée en objet (un corps à dépouiller). Mais le vainqueur, en cédant à la démesure de la force, devient aussi l'esclave de sa propre colère et de sa soif de vengeance ; il perd sa capacité de compassion et de mesure. La force est ainsi une puissance aveugle qui déshumanise symétriquement bourreaux et victimes.
\nExemple : Achille, après avoir tué Hector, traîne son cadavre autour de Troie. Cet acte ne rend pas seulement Hector chose, il révèle aussi la déchéance d'Achille, devenu une bête de rage, aliéné à sa propre violence.`
  },
  // Question n°39
  {
    question: "Question n°39 : Quelle est la principale critique adressée à la thèse de Rousseau sur la bonté naturelle, selon les données anthropologiques ?",
    answers: [
      "Elle est confirmée par les fossiles et les archives archéologiques les plus récentes.",
      "Rousseau parlait en réalité des plantes et des animaux, pas de la nature humaine spécifiquement.",
      "Les données montrent que la violence meurtrière est une constante des sociétés pré-étatiques."
    ],
    correct: 3,
    explanation: `Rousseau voyait dans l'état de nature un état de paix relative, la violence augmentant avec la propriété et la société. Les travaux d'anthropologues comme Keeley montrent au contraire que les taux de mortalité violente étaient extrêmement élevés dans de nombreuses sociétés pré-étatiques. Cela suggère que la propension à la violence collective est profondément ancrée dans l'histoire humaine et n'est pas un simple produit de la « civilisation ». La « guerre » a précédé l'État.
\nExemple : Les études sur les sociétés amazoniennes comme les Yanomami ont montré des cycles de vengeance et des raids inter-villages causant un pourcentage élevé de décès, contredisant l'image d'une harmonie primitive.`
  },
  // Question n°40
  {
    question: "Question n°40 : Quelle est la signification de l'expression « guerre asymétrique » dans le contexte contemporain ?",
    answers: [
      "Une guerre entre deux armées de force parfaitement égale, où aucun camp n'a d'avantage initial.",
      "Une guerre qui n'a pas de front définissable et se déroule uniquement dans l'espace cybernétique.",
      "Un conflit où un belligérant faible utilise des moyens non-conventionnels pour compenser son infériorité."
    ],
    correct: 3,
    explanation: `L'asymétrie caractérise les conflits où les rapports de force classiques sont déséquilibrés. Le faible évite l'affrontement direct et utilise la surprise, le ciblage de civils, la propagande et les réseaux pour déstabiliser le fort. L'objectif est d'user l'adversaire, de saper sa volonté politique et de gagner l'opinion publique. Cela rend la violence plus diffuse, plus imprévisible et souvent plus traumatisante pour les populations civiles.
\nExemple : Le conflit israélo-palestinien est souvent qualifié d'asymétrique : face à l'armée israélienne conventionnelle, des groupes utilisent des roquettes artisanales, des attentats-suicides et des tunnels, visant autant à causer des pertes qu'à entretenir un état de terreur et une couverture médiatique.`
  },
  // Question n°41
  {
    question: "Question n°41 : En quoi l'exemple des <em>nettoyeurs de tranchées</em> de la Première Guerre mondiale illustre-t-il la <em>brutalisation</em> ?",
    answers: [
      "Ces soldats étaient des spécialistes du ménage et de l'hygiène, leur expérience n'avait rien de violent.",
      "Ces soldats ont souvent recyclé cette violence dans les milices politiques de l'entre-deux-guerres.",
      "Ils sont tous devenus de fervents pacifistes et militants pour la réconciliation européenne après la guerre."
    ],
    correct: 2,
    explanation: `George Mosse a montré que l'expérience de violence de masse a créé une génération <em>brutalisée</em>, pour laquelle la violence était devenue un mode d'action normal, voire valorisé. Les nettoyeurs de tranchées, qui opéraient dans un environnement clos et sanglant (combat au couteau, à la grenade), étaient à l'extrême de cette expérience. Leur savoir-faire brutal a parfois été réutilisé dans les corps francs allemands puis a alimenté les rangs des SA nazis.
\nExemple : Ernst Röhm, chef des SA, était un ancien officier et membre des Freikorps. Les méthodes brutales et paramilitaires des SA devaient beaucoup à cette culture de violence de tranchée transposée dans le combat politique.`
  },
  // Question n°42
  {
    question: "Question n°42 : Pourquoi la Convention de La Haye de 1899 interdisant les gaz asphyxiants a-t-elle été violée en 1915 ?",
    answers: [
      "Parce que tous les belligérants avaient oublié son existence au milieu de la confusion générale.",
      "Parce que les gaz utilisés à Ypres n'étaient pas techniquement « asphyxiants » mais seulement irritants, contournant ainsi la loi.",
      "Cela montre la fragilité de l'encadrement juridique face à l'urgence militaire et à la logique de l'escalade dans une guerre totale."
    ],
    correct: 3,
    explanation: `L'emploi des gaz à Ypres est un cas d'école de la violation du droit de la guerre. Dans la dynamique d'une guerre d'usure où chaque camp cherche un avantage décisif, les interdictions morales ou juridiques peuvent céder. L'innovation technique crée une tentation trop forte. Cela révèle les limites du droit face à la réalité de la violence extrême : les règles sont souvent élaborées pour la guerre précédente et sont dépassées par la suivante. La guerre totale a systématiquement repoussé ces limites.
\nExemple : Après les gaz de 1915, les belligérants ont tous développé leurs propres armes chimiques, malgré les traités, inaugurant une course aux armements et une banalisation de cette arme de terreur.`
  },
  // Question n°43
  {
    question: "Question n°43 : Comment le concept de <em>violence symbolique</em> éclaire-t-il les inégalités scolaires ?",
    answers: [
      "L'école est violente physiquement en imposant des châtiments corporels systématiques aux élèves en échec.",
      "Les professeurs sont tous consciemment des bourreaux qui prennent plaisir à humilier les élèves des classes populaires.",
      "L'école impose une <em>culture légitime</em> présentée comme neutre en légitimant leur réussite comme un <em>mérite</em>."
    ],
    correct: 3,
    explanation: `Bourdieu montre que la violence de l'école n'est pas dans les punitions, mais dans son fonctionnement apparemment neutre. En demandant à tous les mêmes choses, elle favorise ceux qui ont acquis « naturellement » ces compétences dans leur famille. L'école transforme ainsi un héritage culturel en « don » individuel. L'enfant en échec croit qu'il n'est « pas fait pour les études », acceptant sa position sociale future comme juste. C'est une violence invisible qui produit l'acceptation de la domination.
\nExemple : L'épreuve de culture générale dans certains concours (Sciences Po) valorise une culture « générale » qui est en fait très spécifique (littérature classique, arts), avantageant les enfants de milieux cultivés.`
  },
  // Question n°44
  {
    question: "Question n°44 : En quoi la figure d'Antigone chez Anouilh représente-t-elle la résistance à la violence politique ?",
    answers: [
      "Elle obéit sans discuter à l'autorité de Créon, reconnaissant la nécessité de la raison d'État.",
      "Elle épouse Créon pour le faire changer d'avis en utilisant la séduction comme arme politique.",
      "Elle incarne l'intransigeance des valeurs individuelles face à la raison d'État du tyran."
    ],
    correct: 3,
    explanation: `Antigone refuse le compromis. Face à Créon qui justifie son ordre par la nécessité de maintenir l'ordre dans la cité, elle oppose un « non » catégorique. Elle représente la révolte de la conscience individuelle contre la loi injuste, de l'humain contre le politique. Son geste, bien que suicidaire, est un acte de liberté pure qui dénonce la violence du pouvoir. Dans le contexte de 1944, elle était une allégorie évidente de l'esprit de la Résistance.
\nExemple : La réplique « Je ne suis pas là pour comprendre, je suis là pour vous dire non » résume le refus absolu d'Antigone de se plier à une logique qu'elle juge inhumaine, même si elle la comprend.`
  },
  // Question n°45
  {
    question: "Question n°45 : Pourquoi Camus écrit-il dans <em>La Peste</em> : « Comment auraient-ils pensé à la peste qui supprime l'avenir » ?",
    answers: [
      "Pour critiquer la lenteur et l'inefficacité bureaucratique de l'administration sanitaire d'Oran.",
      "Pour faire l'éloge de la médecine moderne et de sa capacité à anticiper et à vaincre toutes les épidémies.",
      "Pour rendre compte de ce que les hommes habitués à la continuité sont incapables d'imaginer la catastrophe."
    ],
    correct: 3,
    explanation: `Camus décrit ici un mécanisme psychologique universel face aux catastrophes. Les habitants d'Oran, comme les Européens des années 1930, vivaient dans l'illusion du progrès et de la sécurité. Ils ne pouvaient concevoir qu'un mal aussi radical que la peste (ou le totalitarisme) puisse anéantir leur monde familier. Cette incapacité à penser l'impensable les rend vulnérables et passifs au début du fléau. C'est une critique de la naïveté et un appel à la vigilance.
\nExemple : Beaucoup dans les années 1930 ont sous-estimé la menace nazie, croyant à la rationalité ou à des compromis possibles, incapables d'imaginer l'horreur de la Solution finale.`
  },
  // Question n°46
  {
    question: "Question n°46 : Quelle est la place de la « souffrance psychique » dans une définition élargie de la violence ?",
    answers: [
      "Elle n'est pas considérée comme de la violence, seule la souffrance physique compte légalement et moralement.",
      "La violence est définie comme ce qui génère une souffrance incluant le harcèlement, les humiliations, les menaces.",
      "La souffrance psychique est toujours une exagération ou une faiblesse individuelle, pas une conséquence réelle de la violence."
    ],
    correct: 2,
    explanation: `Cette définition inclusive est essentielle pour saisir la violence dans sa complexité contemporaine. La violence psychologique (harcèlement moral, manipulation, menaces verbales) peut être aussi destructrice, voire plus, que la violence physique, car elle attaque l'estime de soi et l'intégrité mentale. Reconnaître cette dimension permet de mieux combattre des formes de violence qui échappaient traditionnellement au droit ou étaient minimisées.
\nExemple : Le harcèlement scolaire ou professionnel, qui n'implique pas nécessairement de coups, peut conduire à la dépression, à l'isolement et même au suicide, ce qui en fait une forme de violence à part entière.`
  },
  // Question n°47
  {
    question: "Question n°47 : Pourquoi la figure du « héros » change-t-elle radicalement dans la littérature du début du 20e siècle ?",
    answers: [
      "Parce que les écrivains manquent d'imagination pour créer de nouveaux personnages héroïques classiques.",
      "L'expérience de la violence de masse remplace le héros traditionnel par un anti-héros désillusionné et passif.",
      "Parce que les lecteurs modernes préfèrent désormais les happy ends et les histoires d'amour sans conflit."
    ],
    correct: 2,
    explanation: `La Grande Guerre a brisé les grands récits et les idéaux du 19e siècle. Face à l'absurdité des tranchées et à la mort industrielle, les valeurs héroïques (patrie, honneur, gloire) apparaissent comme des mensonges. Le personnage de roman devient un « homme ordinaire » écrasé par l'histoire, cynique, lâche parfois, et surtout profondément désabusé. La littérature moderne explore cette crise du sujet et de la représentation.
\nExemple : Contrairement aux héros de Balzac qui cherchaient à conquérir le monde, Bardamu (<em>Voyage au bout de la nuit</em>) ne cherche qu'à le fuir. Sa « grandeur » réside dans sa lucidité désespérée.`
  },
  // Question n°48
  {
    question: "Question n°48 : Quel est l'enjeu philosophique de la question : « La violence est-elle un phénomène ontologique ou politique ? »",
    answers: [
      "C'est une question purement linguistique sur l'origine des mots « violence » et « politique ».",
      "C'est une question sans intérêt, car la violence est toujours et partout la même, quel que soit son contexte.",
      "Si elle est ontologique, elle est inévitable ; si elle est politique, elle peut être transformée."
    ],
    correct: 3,
    explanation: `Cette alternative est au cœur des débats sur la violence. Les penseurs comme Hobbes ou Freud penchent pour une nature humaine conflictuelle (ontologique). D'autres, comme Rousseau (dans une certaine mesure) ou Marx, voient la violence comme le produit de conditions sociales historiques (la propriété, les classes). La position qu'on adopte a des conséquences pratiques énormes : si la violence est ontologique, on ne peut que la canaliser. Si elle est politique, on peut espérer l'éliminer en transformant la société.
\nExemple : L'idée marxiste que la violence disparaîtra avec la société sans classes suppose que la violence est d'origine sociale (la lutte des classes) et non une caractéristique éternelle de l'homme.`
  },
  // Question n°49
  {
    question: "Question n°49 : Comment l'exemple des « gueules cassées » de la Première Guerre mondiale illustre-t-il une violence inédite ?",
    answers: [
      "Leur beauté et leur dignité face à l'adversité ont inspiré un nouvel idéal esthétique dans l'art moderne.",
      "Ces survivants sont devenus les symboles vivants d'une violence industrielle qui défigure l'humanité même.",
      "Ils montraient principalement que la médecine de guerre avait fait des progrès spectaculaires pour sauver des vies."
    ],
    correct: 2,
    explanation: `Les « gueules cassées » étaient des hommes qui avaient survécu à des blessures faciales horribles, grâce aux progrès de la médecine. Leur présence dans la société d'après-guerre était une confrontation permanente avec l'horreur. Ils incarnaient une violence qui ne se contentait pas de tuer, mais qui mutilait l'identité et la sociabilité (le visage). Ils ont contribué à la prise de conscience de la brutalité de la guerre moderne.
\nExemple : L'Union des Blessés de la Face, fondée en 1921, a milité pour la reconnaissance de ces blessés. Leur image a aussi été utilisée dans les campagnes pacifistes de l'entre-deux-guerres.`
  },
  // Question n°50
  {
    question: "Question n°50 : Quelle est la signification de la loi du 11 juillet 2019 contre les Violences Éducatives Ordinaires (VEO) ?",
    answers: [
      "Elle rend obligatoire la fessée et les châtiments corporels modérés comme outils éducatifs légitimes.",
      "Elle interdit tous les châtiments corporels et humiliations psychologiques dans l'éducation.",
      "Elle ne concerne que l'école et n'a pas d'impact sur les pratiques éducatives au sein des familles."
    ],
    correct: 2,
    explanation: `Cette loi, dite « anti-fessée », inscrit dans le Code civil que « l'autorité parentale s'exerce sans violences physiques ou psychologiques ». Elle vise à changer les mentalités en affirmant qu'aucune violence, même légère ou « traditionnelle », n'est acceptable dans l'éducation. Elle s'appuie sur les connaissances en psychologie de l'enfant, qui montrent les effets nocifs de ces violences. C'est une étape dans la civilisation des mœurs au sein de la famille.
\nExemple : Avant cette loi, la France avait été condamnée par la Cour européenne des droits de l'homme pour ne pas interdire explicitement les châtiments corporels. La loi aligne la France sur de nombreux pays ayant une telle interdiction.`
  },
  // Question n°51
  {
    question: "Question n°51 : En quoi la servitude volontaire de La Boétie diffère-t-elle de la violence symbolique de Bourdieu ?",
    answers: [
      "C'est exactement la même chose, exprimée avec des mots différents à des époques différentes.",
      "La servitude volontaire est toujours psychologique, alors que la violence symbolique est uniquement physique.",
      "La servitude volontaire suppose une obéissance consciente, la violence symbolique suppose l'accord inconscient du dominé."
    ],
    correct: 3,
    explanation: `La Boétie s'interroge : pourquoi le peuple obéit-il au tyran alors qu'il est plus nombreux ? Il évoque la coutume, la lâcheté, la pyramide des intérêts. Le dominé est actif dans son asservissement, mais d'une manière qu'il pourrait théoriquement comprendre. Bourdieu va plus loin : le dominé ne perçoit même pas la domination comme telle. Il croit que l'ordre social est juste. La violence est tellement intégrée qu'elle n'a plus besoin d'être imposée ; elle est « incorporée ».
\nExemple : Un ouvrier qui vote contre ses intérêts de classe par conviction idéologique pourrait relever de la servitude volontaire. Un enfant qui croit qu'il n'est « pas fait pour les études » sans voir le biais social relève de la violence symbolique.`
  },
  // Question n°52
  {
    question: "Question n°52 : Quel est le rôle des médias dans le processus de « disqualification spatiale » décrit par Paugam ?",
    answers: [
      "Ils le corrigent en mettant en valeur les initiatives positives et la diversité des quartiers stigmatisés.",
      "Ils l'ignorent complètement, ne parlant jamais de ces quartiers pour ne pas attiser les polémiques.",
      "Ils le renforcent en diffusant des reportages qui stigmatisent ces espaces et leurs habitants."
    ],
    correct: 3,
    explanation: `Les médias jouent un rôle crucial dans la construction des représentations sociales. En traitant de manière répétitive et sensationnaliste les faits divers survenant dans certains quartiers, ils associent ces territoires à la dangerosité et à l'anomie sociale. Cela influence l'opinion publique, les politiques publiques (qui peuvent devenir purement sécuritaires) et l'image que les habitants ont d'eux-mêmes. Cette médiatisation est une forme de violence symbolique qui aggrave l'exclusion.
\nExemple : Les termes « quartier sensible » ou « zone de non-droit », employés de manière extensive, créent une représentation monolithique et négative qui peut devenir une prophétie auto-réalisatrice en décourageant les investissements et en nourrissant les préjugés.`
  },
  // Question n°53
  {
    question: "Question n°53 : Comment le concept de « guerre juste » peut-il être utilisé à des fins de propagande ?",
    answers: [
      "Il ne l'est jamais, car c'est un concept purement philosophique et académique, sans usage politique.",
      "N'importe quel belligérant peut prétendre avoir une cause juste et mener une guerre propre.",
      "Il est trop compliqué et obscur pour être utilisé dans la propagande, qui préfère des slogans simples."
    ],
    correct: 2,
    explanation: `La théorie de la guerre juste, conçue pour limiter la guerre, peut être détournée pour la légitimer. Les États présentent toujours leurs guerres comme défensives et leurs méthodes comme proportionnées. Il revient alors aux observateurs indépendants, aux historiens et aux tribunaux internationaux de démêler le vrai du faux. Cette instrumentalisation montre que les concepts éthiques ne sont pas à l'abri de la rhétorique politique et que la « vérité » de la guerre est un enjeu de pouvoir.
\nExemple : L'invasion de l'Irak en 2003 a été justifiée par la présence supposée d'armes de destruction massive (une <em>cause juste</em> préventive). L'absence de ces armes a jeté le discrédit sur cette justification.`
  },
  // Question n°54
  {
    question: "Question n°54 : Pourquoi la violence peut-elle être qualifiée d'« instrumentale » selon Hannah Arendt ?",
    answers: [
      "Parce qu'on utilise toujours des instruments pour l'exercer, contrairement au pouvoir qui est immatériel.",
      "Parce qu'elle est un moyen en vue d'une fin, contrairement au pouvoir qui est une fin en soi.",
      "Parce que c'est un art qui s'apprend et se perfectionne, comme un instrument de musique."
    ],
    correct: 2,
    explanation: `Cette analyse est fondamentale pour distinguer violence et pouvoir. La violence a une rationalité utilitaire : on frappe pour obtenir quelque chose. Elle est donc toujours justiciable d'une évaluation (la fin justifie-t-elle les moyens ?). En politique, recourir à la violence est souvent le signe que le pouvoir (la capacité de convaincre et d'agir ensemble) fait défaut. Arendt invite à ne pas fétichiser la violence, mais à la voir pour ce qu'elle est : un outil coûteux, jamais créateur en politique.
\nExemple : Un État qui réprime une manifestation pacifique par la force montre qu'il a perdu le pouvoir de convaincre ou de négocier ; il utilise alors la violence comme instrument de dernier recours, mais au prix d'une perte de légitimité.`
  },
  // Question n°55
  {
    question: "Question n°55 : Quelle est la place de la <em>vengeance</em> dans le cycle de la violence ?",
    answers: [
      "Elle n'existe pas, c'est un mythe littéraire sans fondement dans la réalité des conflits humains.",
      "C'est la meilleure solution pour rétablir l'honneur et la justice, elle met fin définitivement au conflit.",
      "C'est un moteur classique de perpétuation de la violence ; le droit étatique tente de rompre ce cycle."
    ],
    correct: 3,
    explanation: `La logique de la vendetta ou de la faida (vengeance privée) est une des formes les plus anciennes et tenaces de violence. Elle crée un engrenage sans fin où chaque mort appelle une nouvelle mort. L'une des grandes conquêtes de l'État de droit a été de s'arroger le monopole de la punition, interdisant aux familles ou aux clans de se faire justice eux-mêmes. La justice publique, en principe impartiale et proportionnée, vise à apaiser les conflits et à empêcher l'escalade violente.
\nExemple : Dans les sociétés où l'État est faible, les cycles de vengeance peuvent durer des générations, comme dans certaines régions d'Albanie ou de Somalie, montrant la difficulté à sortir de cette logique sans une autorité tierce reconnue.`
  },
  // Question n°56
  {
    question: "Question n°56 : Comment la littérature de témoignage contribue-t-elle à la lutte contre la violence ?",
    answers: [
      "En la glorifiant et en en faisant un spectacle fascinant pour le lecteur, comme dans les romans d'aventures.",
      "En donnant une voix aux victimes, en documentant l'horreur pour l'inscrire dans la mémoire collective.",
      "En l'oubliant rapidement pour tourner la page et se concentrer sur des sujets plus positifs et édifiants."
    ],
    correct: 2,
    explanation: `Face à la violence de masse qui vise souvent à réduire les individus à l'anonymat et au silence (dans les camps, les ghettos), la littérature de témoignage est un acte de résistance par l'écriture. Elle restaure la singularité des victimes, nomme les bourreaux, décrit les mécanismes de l'oppression. Elle crée une archive irréfutable contre les négationnistes. C'est une façon de dire : « cela a existé, et nous en témoignons pour que cela ne se reproduise pas ».
\nExemple : 'Si c'est un homme' de Primo Levi est devenu un texte fondateur de la mémoire de la Shoah précisément parce qu'il décrit avec une précision clinique et une humanité bouleversante l'univers concentrationnaire.`
  },
  // Question n°57
  {
    question: "Question n°57 : Quelle est la différence entre « guerre civile » et « guerre interétatique » du point de vue de la violence ?",
    answers: [
      "Il n'y a pas de différence, les deux sont des guerres et obéissent aux mêmes règles et génèrent la même violence.",
      "La guerre civile est toujours moins violente, car elle oppose des concitoyens qui se connaissent et s'épargnent mutuellement.",
      "La guerre civile est souvent moins encadrée par le droit et peut générer des violences dues à la proximité des belligérants."
    ],
    correct: 3,
    explanation: `Les guerres civiles présentent des caractéristiques spécifiques qui les rendent souvent plus brutales. Les lignes de front sont floues, les combattants ne portent pas toujours d'uniforme, et le conflit oppose souvent des voisins, des communautés qui cohabitaient. Cela peut conduire à des violences intimes et à des crimes de masse (génocides, viols systématiques). Le droit international humanitaire s'applique, mais son application est plus difficile à faire respecter.
\nExemple : La guerre civile en ex-Yougoslavie (1991-1995) a été marquée par des sièges de villes, des camps et le massacre de Srebrenica, montrant l'extrême violence de conflits où les enjeux nationaux et identitaires se superposent.`
  },
  // Question n°58
  {
    question: "Question n°58 : Quel est le sens de l'expression « la bombe atomique » comme borne dans l'histoire de la violence ?",
    answers: [
      "C'est une invention comme une autre, sans impact majeur sur la manière de penser la guerre et la paix.",
      "Elle a mis fin à toute guerre en rendant les conflits trop horribles pour être envisagés par des nations civilisées.",
      "Elle symbolise l'entrée dans une ère où l'humanité détient les moyens de son auto-anéantissement."
    ],
    correct: 3,
    explanation: `Hiroshima et Nagasaki (août 1945) marquent un saut qualitatif. Pour la première fois, une arme pouvait détruire une ville entière en un instant, et ses effets (radioactivité) se prolongeaient longtemps après. La bombe A a créé l'équation de la « destruction mutuelle assurée ». La violence atteint une échelle et une puissance telles qu'elle met en jeu la survie même de l'espèce. Cela a profondément modifié la stratégie, la politique internationale et la conscience collective.
\nExemple : La « crise des missiles de Cuba » en 1962 a amené le monde au bord d'une guerre nucléaire totale, illustrant le nouvel équilibre de la terreur où la violence absolue devient paradoxalement un facteur de dissuasion.`
  },
  // Question n°59
  {
    question: "Question n°59 : Comment la notion de « crime contre l'humanité », forgée à Nuremberg, modifie-t-elle le regard sur la violence de guerre ?",
    answers: [
      "Elle ne change rien, car elle n'a été appliquée qu'aux vaincus de la Seconde Guerre mondiale.",
      "Elle crée une catégorie pour des crimes exceptionnellement graves qui violent des lois supérieures à celles des États.",
      "Elle excuse les crimes de guerre classiques en les relativisant par rapport à l'horreur des crimes contre l'humanité."
    ],
    correct: 2,
    explanation: `Avant Nuremberg, la souveraineté des États était un écran. Le procès a établi le principe que des individus, y compris des chefs d'État, pouvaient être jugés pour des actes commis au nom de leur pays, s'ils violaient des principes fondamentaux d'humanité. Cela rompt avec l'idée que « la guerre justifie tout ». C'est une tentative de moraliser le droit international et de prévenir la répétition d'atrocités comme la Shoah en créant une justice universelle.
\nExemple : La condamnation de Julius Streicher, éditeur du journal antisémite 'Der Stürmer', pour incitation au génocide, a établi que la propagande de haine pouvait constituer un crime contre l'humanité.`
  },
  // Question n°60
  {
    question: "Question n°60 : Pourquoi la violence peut-elle être qualifiée de « spectacle » dans les sociétés médiatiques ?",
    answers: [
      "Parce qu'elle n'existe pas vraiment, elle est une pure construction de l'imaginaire collectif.",
      "Parce qu'elle est mise en scène, devenant un produit de consommation qui peut banaliser l'horreur.",
      "Parce que c'est amusant et divertissant à regarder, comme un film d'action ou un jeu vidéo."
    ],
    correct: 2,
    explanation: `Guy Debord a analysé comment le capitalisme transforme toute réalité en image. La violence n'échappe pas à cette logique. Les images de guerre, d'attentats, d'émeutes sont montées, commentées, rejouées en boucle. Cela peut conduire à une « pornographie de la violence » où l'on consomme l'horreur à distance, sans comprendre ses racines. En même temps, cette médiatisation peut mobiliser l'opinion. La violence spectacle est donc ambivalente.
\nExemple : La diffusion en direct et en boucle de l'effondrement des tours jumelles le 11 septembre 2001 a créé un trauma collectif à l'échelle planétaire, faisant de l'événement un « spectacle » global.`
  },
  // Question n°61
  {
    question: "Question n°61 : Quel est le rôle de l'humour et de la satire dans la dénonciation de la violence ?",
    answers: [
      "Il n'a aucun rôle, car la violence est un sujet trop grave pour être traité avec légèreté.",
      "L'humour noir et la satire peuvent être des armes pour dénoncer l'absurdité de la violence.",
      "Il encourage la violence en la banalisant et en en faisant un sujet de moquerie insensible."
    ],
    correct: 2,
    explanation: `Face à la violence grave et terrifiante, le rire peut être un acte de résistance. En rendant ridicule ce qui veut inspirer la peur, on désarme symboliquement l'oppresseur. La satire expose les contradictions et la bêtise des discours de haine. Des journaux comme 'Charlie Hebdo' ont utilisé ce moyen, parfois au péril de leur vie. L'humour permet aussi de dire l'indicible et de créer une solidarité parmi ceux qui rient.
\nExemple : Les caricatures de Mahomet publiées par 'Charlie Hebdo' étaient pour ses auteurs une manière d'affirmer la liberté d'expression contre tous les intégrismes. L'attentat de 2015 a montré la dangerosité de cet engagement.`
  },
  // Question n°62
  {
    question: "Question n°62 : Comment la notion de « résilience » est-elle utilisée dans l'analyse des sociétés confrontées à la violence ?",
    answers: [
      "Pour dire qu'elles oublient tout rapidement et reprennent une vie normale sans séquelles.",
      "Pour décrire la capacité à surmonter un traumatisme violent et à reconstruire.",
      "Pour souligner leur faiblesse et leur incapacité à se défendre face à l'agression."
    ],
    correct: 2,
    explanation: `La résilience, notion empruntée à la physique, est utilisée en psychologie et en sociologie. Elle ne signifie pas l'oubli ou l'absence de séquelles, mais la possibilité de continuer à vivre et à se développer malgré un traumatisme grave. Des individus (anciens déportés) et des sociétés (le Rwanda après le génocide) font preuve de résilience. C'est un concept qui insiste sur les ressources et la capacité de rebond, sans sous-estimer la violence subie.
\nExemple : Le Mémorial de la Shoah à Paris ou le musée du génocide à Kigali sont des lieux de mémoire qui témoignent de l'horreur, mais aussi de la volonté de transmettre et de reconstruire, illustrant une résilience collective.`
  },
  // Question n°63
  {
    question: "Question n°63 : Quelle est la place de l'enfance dans les représentations de la violence en littérature ?",
    answers: [
      "Elle en est absente, car on protège les enfants de ces sujets dans la littérature comme dans la vie.",
      "L'enfant est une figure d'innocence brisée, symbole de la barbarie absolue et de l'échec du monde adulte à protéger.",
      "Les enfants sont naturellement violents, donc leur représentation sert à montrer la violence inhérente à l'humain."
    ],
    correct: 2,
    explanation: `La violence contre les enfants a un impact symbolique particulièrement fort car elle transgresse un tabou fondamental : la protection due à la vulnérabilité et à l'innocence. Dans les récits de guerre ou de génocide, les enfants morts ou traumatisés incarnent l'avenir détruit. Cette représentation vise à susciter une indignation et une empathie universelles. Elle est un moyen de dire l'indicible : si même les enfants ne sont pas épargnés, alors la violence a atteint son paroxysme.
\nExemple : La photo du petit Aylan Kurdi, enfant syrien noyé échoué sur une plage en 2015, est devenue le symbole mondial de la tragédie des migrants fuyant la guerre.`
  },
  // Question n°64
  {
    question: "Question n°64 : Comment la notion de « violence légitime » de Weber s'articule-t-elle avec la démocratie ?",
    answers: [
      "La démocratie n'a pas de violence légitime, elle repose uniquement sur la discussion et le consensus.",
      "La violence de l'État est contrôlée par le peuple et sa légitimité repose sur le consentement des citoyens.",
      "La démocratie utilise nécessairement plus de violence que les dictatures pour maintenir un ordre complexe."
    ],
    correct: 2,
    explanation: `Weber ne dit pas que la violence étatique est toujours juste, mais qu'elle est légitime si elle est reconnue comme telle par la population, selon des règles établies. En démocratie, cette légitimité vient de la souveraineté populaire : la police et l'armée agissent au nom d'une loi votée par des représentants élus. Les citoyens acceptent ce monopole car ils en sont, en théorie, les auteurs. La violence démocratique est donc censée être encadrée et au service de tous.
\nExemple : Une intervention policière pour disperser une manifestation non déclarée peut être légale, mais si elle est perçue comme disproportionnée, elle peut perdre sa légitimité aux yeux d'une partie de la population.`
  },
  // Question n°65
  {
    question: "Question n°65 : Quel est l'enjeu du principe de « proportionnalité » dans le <em>jus in bello</em> ?",
    answers: [
      "Utiliser toutes les armes disponibles pour écraser l'ennemi, quelle que soit la puissance destructrice.",
      "Avoir plus de soldats et de matériel que l'adversaire pour assurer une victoire rapide et décisive.",
      "Les dommages collatéraux aux civils ne doivent pas être excessifs par rapport à l'avantage attendu."
    ],
    correct: 3,
    explanation: `C'est un principe clé du droit humanitaire. Il reconnaît qu'en guerre, des dommages aux civils sont parfois inévitables, mais ils doivent être minimisés et mis en balance avec l'objectif militaire. Bombarder tout un quartier pour éliminer un seul sniper serait disproportionné. Ce principe est extrêmement difficile à appliquer en pratique et donne lieu à de nombreuses controverses, mais il pose une limite morale et juridique à la violence « aveugle ».
\nExemple : Les frappes aériennes israéliennes à Gaza sont régulièrement accusées de violer le principe de proportionnalité lorsque le bilan civil est très lourd par rapport aux cibles militaires visées.`
  },
  // Question n°66
  {
    question: "Question n°66 : Comment la philosophie des Lumières a-t-elle envisagé la sortie de la violence entre États ?",
    answers: [
      "Par la conquête universelle et l'unification du monde sous l'autorité d'un empire éclairé et pacifique.",
      "Par la glorification de la guerre comme épreuve nécessaire pour forger les nations et les civilisations.",
      "Par le commerce, la raison et le droit, croyant que le droit international pourrait remplacer la guerre."
    ],
    correct: 3,
    explanation: `Les Lumières ont été marquées par un optimisme rationnel. On a cru que la croissance des échanges rendrait la guerre trop coûteuse, et que la diffusion de la raison conduirait les princes à préférer l'arbitrage au combat. Le projet de paix perpétuelle de Kant incarne cet idéal. Le 20e siècle a cruellement démenti ces espoirs, montrant que le progrès technique pouvait aussi alimenter la violence. Mais ces idées ont inspiré la création d'organisations internationales.
\nExemple : La construction européenne après 1945 a été fondée sur l'idée de lier économiquement les nations pour rendre la guerre « matériellement impossible » (déclaration Schuman).`
  },
  // Question n°67
  {
    question: "Question n°67 : Quelle est la spécificité de la violence « génocidaire » ?",
    answers: [
      "Elle est moins grave qu'une guerre classique, car elle vise des groupes spécifiques et non des États entiers.",
      "C'est une simple guerre civile où les atrocités sont commises dans la confusion et la chaleur des combats.",
      "Elle vise la destruction intentionnelle d'un groupe en tant que tel (national, ethnique, racial, religieux)."
    ],
    correct: 3,
    explanation: `Défini par la Convention de 1948, le génocide se distingue par son intention spécifique (détruire un groupe) et par des actes précis (meurtre, atteinte grave, mesures pour empêcher les naissances). C'est une violence qui nie l'humanité de l'autre au nom de son appartenance. La dimension idéologique (racisme) et bureaucratique est souvent centrale. C'est un crime contre l'humanité spécifique, considéré comme le « crime des crimes ».
\nExemple : Le génocide des Tutsi au Rwanda en 1994 a été planifié par l'État, utilisant la radio pour la propagande haineuse et distribuant des machettes pour exterminer les Tutsi en quelques semaines.`
  },
  // Question n°68
  {
    question: "Question n°68 : Comment la notion de « trauma » a-t-elle émergé pour décrire les conséquences de la violence ?",
    answers: [
      "Elle n'existe pas, c'est une invention moderne pour justifier le manque de courage des soldats.",
      "À partir de l'observation des <em>névroses de guerre</em> (shell shock) des soldats de 14-18.",
      "Elle a toujours existé, décrite avec les mêmes mots, depuis l'Antiquité et les récits homériques."
    ],
    correct: 2,
    explanation: `La Première Guerre mondiale a été un tournant. Des soldats présentaient des symptômes (tremblements, mutisme) sans blessure physique visible. On a d'abord parlé de « lâcheté », puis reconnu une blessure psychique. Ce concept a ensuite été étendu aux survivants de catastrophes, d'attentats, etc. Reconnaître le trauma, c'est reconnaître que la violence laisse des traces invisibles mais profondes, et que la guérison nécessite une prise en charge spécifique.
\nExemple : Le trouble de stress post-traumatique (TSPT) est aujourd'hui une catégorie diagnostique qui décrit les séquelles d'un événement traumatique, avec des symptômes comme les flashbacks et l'hypervigilance.`
  },
  // Question n°69
  {
    question: "Question n°69 : Quel est le rôle de l'architecture et de l'urbanisme dans la prévention ou l'aggravation de la violence sociale ?",
    answers: [
      "Il n'a aucun rôle, la violence est un phénomène purement humain indépendant de l'environnement bâti.",
      "Un urbanisme de rupture peut favoriser la délinquance ; un urbanisme de mixité et de rencontre peut la prévenir.",
      "Les beaux bâtiments et les espaces verts augmentent mécaniquement la violence par la jalousie qu'ils provoquent."
    ],
    correct: 2,
    explanation: `La théorie de la <em>vitre brisée</em> et les travaux de Jane Jacobs ont mis en lumière le lien entre environnement urbain et criminalité. Un espace abandonné, mal éclairé, où personne ne « surveille » naturellement, peut devenir un lieu de trafic ou d'agression. À l'inverse, une rue commerçante, habitée, dissuade la violence. L'urbanisme est donc un outil de prévention non négligeable, capable de favoriser ou d'entraver le lien social et le sentiment de sécurité.
\nExemple : La rénovation urbaine dans certains quartiers vise à <em>décloisonner</em> les grands ensembles, à créer des rues passantes et des commerces pour recréer du lien social et de la surveillance naturelle.`
  },
  // Question n°70
  {
    question: "Question n°70 : Comment la <em>violence verbale</em> se situe-t-elle par rapport à la violence physique ?",
    answers: [
      "Elle n'est pas de la violence, ce ne sont que des mots qui ne font pas vraiment de mal.",
      "Elle peut être un prélude de violence qui blesse psychiquement et crée un climat de peur.",
      "Elle est pire que la violence physique car elle laisse des cicatrices inguérissables."
    ],
    correct: 2,
    explanation: `La violence verbale n'est pas moins réelle. Elle attaque la dignité et l'estime de soi. Dans le contexte politique, la propagande haineuse (comme celle des radios durant le génocide rwandais) est un outil de déshumanisation qui prépare le terrain aux massacres. Les menaces peuvent constituer un harcèlement terrorisant. Le droit reconnaît de plus en plus ces formes de violence (loi sur le harcèlement moral, provocation à la haine).
\nExemple : Les campagnes de lynchage sur les réseaux sociaux, où une personne est insultée, menacée et doxxée, est une forme de violence verbale collective aux conséquences potentiellement désastreuses (dépression, perte d'emploi).`
  },
  // Question n°71
  {
    question: "Question n°71 : Quelle est la position d'Alain concernant la responsabilité des dirigeants dans le déclenchement de la guerre ?",
    answers: [
      "Ils sont toujours de bonne foi et croient sincèrement agir pour le bien de leur nation et de la paix.",
      "Ils sont tous des monstres assoiffés de sang et de pouvoir, qui cherchent délibérément le conflit.",
      "Aucun ne la veut vraiment, mais ils se laissent entraîner par des mécanismes non-maîtrisés."
    ],
    correct: 3,
    explanation: `Alain refuse les explications simplistes par la méchanceté des chefs. Dans <em>Mars ou la guerre jugée</em>, il décortique les mécanismes par lesquels des hommes raisonnables en viennent à prendre des décisions catastrophiques : la peur de paraître faible, l'engrenage des mobilisations, la rhétorique patriotique, l'influence des « marchands de canons ». Sa thèse est que la guerre est moins un choix délibéré qu'un processus où la raison est submergée.
\nExemple : Alain analyse que le patriotisme exacerbé et la course aux armements avant 1914 ont créé une atmosphère de peur mutuelle entre les grandes puissances, rendant la guerre presque inévitable, même si aucun dirigeant ne la souhaitait ouvertement.`
  },
  // Question n°72
  {
    question: "Question n°72 : En quoi la violence coloniale est-elle aussi une violence épistémique (sur le savoir) ?",
    answers: [
      "Elle n'a pas touché au savoir, les colonisateurs ont préservé et étudié avec respect les cultures autochtones.",
      "Elle a imposé la pensée, l'histoire et la langue du colonisateur, en dévalorisant les savoirs autochtones.",
      "Elle a enrichi les savoirs locaux en y ajoutant les bienfaits de la science et de la rationalité occidentales."
    ],
    correct: 2,
    explanation: `La domination coloniale ne se limite pas au contrôle des terres et des corps ; elle vise aussi les esprits. L'école coloniale enseigne l'histoire de la « mère patrie », présente les cultures locales comme primitives, et impose la langue du colonisateur comme langue du savoir. Cette violence symbolique a des effets durables : elle crée un complexe d'infériorité, coupe les populations de leur héritage et façonne des élites « assimilées » mais souvent aliénées.
\nExemple : Le concept de « négritude » développé par Aimé Césaire et Léopold Sédar Senghor était une réaction à cette violence épistémique : réhabiliter la culture et l'histoire noires, niées par le colonialisme.`
  },
  // Question n°73
  {
    question: "Question n°73 : Comment la notion de <em>pardon</em> peut-il intervenir dans le cycle de la violence ?",
    answers: [
      "Elle l'aggrave en légitimant l'impunité des bourreaux et en niant la souffrance des victimes.",
      "Elle efface tout et permet d'oublier complètement le passé pour repartir sur de nouvelles bases.",
      "Elle peut être envisagée comme une manière de rompre le cycle de la vengeance sans nier la justice."
    ],
    correct: 3,
    explanation: `Le pardon ne doit pas être confondu avec l'oubli ou l'impunité. Dans des contextes post-conflictuels (Afrique du Sud après l'apartheid), des processus de justice transitionnelle ont tenté d'articuler vérité, justice et réconciliation. L'idée est que pour construire un avenir commun, il faut parfois dépasser la logique purement punitive, à condition que la vérité soit dite et que les bourreaux reconnaissent leurs crimes. C'est une démarche fragile et controversée.
\nExemple : La Commission Vérité et Réconciliation en Afrique du Sud offrait l'amnistie aux auteurs de crimes en échange de l'aveu public, dans l'espoir de guérir les blessures de la nation sans nouvelles violences.`
  },
  // Question n°74
  {
    question: "Question n°74 : Quelle est la place de la peur dans la genèse et le maintien de la violence ?",
    answers: [
      "La peur n'a aucun rôle, c'est l'agressivité qui est le véritable moteur de la violence.",
      "La peur est un moteur puissant qui peut justifier la violence préventive ou l'oppression.",
      "La peur empêche toujours la violence car elle pousse à la prudence dans les conflits."
    ],
    correct: 2,
    explanation: `La peur est une émotion fondamentale qui peut conduire à la violence par plusieurs chemins. La peur existentielle peut pousser à attaquer le premier (Hobbes). La peur de l'étranger peut générer des violences identitaires. Les dirigeants peuvent instrumentaliser la peur (d'un ennemi, du chaos) pour obtenir l'obéissance et légitimer la répression. Comprendre les ressorts de la peur est donc essentiel pour désamorcer les dynamiques violentes.
\nExemple : La « peur du grand remplacement », théorie complotiste, alimente la violence raciste en présentant certaines populations comme une menace existentielle, justifiant ainsi des actes haineux.`
  },
  // Question n°75
  {
    question: "Question n°75 : Comment la violence est-elle représentée dans les arts visuels du 20e siècle ?",
    answers: [
      "Elle en est absente, les artistes préférant représenter la beauté, l'harmonie et les sujets apaisants.",
      "De manière directe et crue (Guernica) mais aussi en interrogeant la possibilité de représenter l'horreur.",
      "Toujours de manière héroïque et glorifiante, pour célébrer le courage des soldats et la grandeur des nations."
    ],
    correct: 2,
    explanation: `La représentation de la violence a évolué. Après les horreurs du 20e siècle, l'art ne peut plus se contenter de l'esthétiser. <em>Guernica</em> (1937) de Picasso déforme et synthétise l'horreur du bombardement pour en faire un cri politique. La photographie de guerre choque pour mobiliser. Certains estiment que la Shoah échappe à toute représentation directe. Le cinéma explore les limites de la représentation et la responsabilité du regard.
\nExemple : Le film <em>Hiroshima mon amour</em> d'Alain Resnais mêle histoire d'amour et images documentaires, refusant une représentation spectaculaire pour mieux interroger la mémoire et l'indicible de la violence nucléaire.`
  },
  // Question n°76
  {
    question: "Question n°76 : Quel est le statut de la <em>violence révolutionnaire</em> dans la pensée marxiste ?",
    answers: [
      "Elle est toujours condamnée comme un mal absolu, incompatible avec l'idéal communiste de fraternité.",
      "Elle n'a aucun statut théorique, Marx ne s'est jamais prononcé sur les moyens de la révolution.",
      "Elle est souvent présentée comme un mal nécessaire pour renverser l'ordre bourgeois oppressif."
    ],
    correct: 3,
    explanation: `Pour Marx et Lénine, la violence n'est pas un principe, mais un instrument au service de la transformation historique. L'État bourgeois étant un instrument de violence au service de la classe dominante, la révolution prolétarienne doit user de la violence pour le briser. Cette « violence révolutionnaire » est censée être temporaire, jusqu'à l'avènement du communisme, société réconciliée où l'État « s'éteindra ». Cette justification a servi à légitimer les répressions des régimes communistes.
\nExemple : La révolution d'Octobre 1917 a été justifiée par Lénine comme une violence nécessaire. La terreur rouge qui a suivi a été présentée comme une nécessité pour défendre la révolution.`
  },
  // Question n°77
  {
    question: "Question n°77 : Comment la notion de <em>sécurité humaine</em> élargit-elle la conception traditionnelle de la sécurité ?",
    answers: [
      "Elle la réduit à la seule protection contre les agressions militaires venant d'un État étranger.",
      "Elle inclut la protection contre les menaces chroniques et la satisfaction des besoins essentiels.",
      "C'est la même chose : elle a été simplement rebaptisée pour des raisons de communication politique."
    ],
    correct: 2,
    explanation: `Développée par le PNUD dans les années 1990, l'approche de la sécurité humaine dépasse le cadre étatique et militaire. Elle met l'accent sur l'individu et ses besoins fondamentaux. L'idée est qu'un être humain qui vit dans la misère, la peur de la répression ou l'absence de soins n'est pas « en sécurité ». Cette insécurité peut être une cause majeure de violence (révoltes, criminalité). La prévention de la violence passe donc aussi par le développement.
\nExemple : Les printemps arabes de 2011 ont été en partie déclenchés par des revendications liées à la sécurité humaine : manque de perspectives pour les jeunes, corruption, répression politique.`
  },
  // Question n°78
  {
    question: "Question n°78 : Quel est le rôle des femmes dans la construction de la paix, selon les études de genre ?",
    answers: [
      "Elles n'ont aucun rôle, la paix et la guerre étant des affaires d'hommes par tradition et par nature.",
      "Les femmes sont des actrices clés dans la résolution des conflits au niveau local et la reconstruction sociale.",
      "Elles aggravent les conflits en encourageant la vengeance et en maintenant vivaces les haines entre les communautés."
    ],
    correct: 2,
    explanation: `La résolution 1325 de l'ONU (2000) a reconnu l'importance du rôle des femmes dans la prévention et le règlement des conflits. Les études montrent que lorsque les femmes participent aux processus de paix, les accords sont plus durables. Au niveau communautaire, elles organisent souvent des réseaux de solidarité et maintiennent un semblant de normalité. Leur inclusion n'est pas seulement une question de justice, mais d'efficacité pour une paix durable.
\nExemple : Au Liberia, le mouvement des femmes, mené par Leymah Gbowee, a joué un rôle décisif pour mettre fin à la guerre civile en 2003, organisant des sit-in et des grèves du sexe. Gbowee a reçu le prix Nobel de la paix en 2011.`
  },
  // Question n°79
  {
    question: "Question n°79 : Comment la <em>violence économique</em> se manifeste-t-elle dans le monde contemporain ?",
    answers: [
      "Elle n'existe pas, l'économie est un domaine rationnel et pacifique par essence, régi par des lois objectives.",
      "C'est quand on vole un pain par nécessité, un acte de violence mineur et excusable dans certaines circonstances.",
      "À travers des inégalités extrêmes, la précarité imposée, les embargos qui frappent les populations civiles."
    ],
    correct: 3,
    explanation: `La violence n'est pas seulement directe et physique. Des structures économiques injustes peuvent tuer à bas bruit et générer de la souffrance à grande échelle. L'économiste Amartya Sen a montré que les famines sont moins dues au manque de nourriture qu'à des défauts de distribution. Les politiques d'austérité brutale, les paradis fiscaux ou les conditions de travail inhumaines sont des formes de violence économique, source de conflits et de désespoir.
\nExemple : L'embargo américain contre l'Irak dans les années 1990 est accusé d'avoir causé la mort de centaines de milliers d'enfants par malnutrition et manque de médicaments.`
  },
  // Question n°80
  {
    question: "Question n°80 : Quel est l'apport de la psychologie sociale dans la compréhension de la violence de masse ?",
    answers: [
      "Aucun, elle prouve que seuls les individus psychologiquement anormaux ou fous peuvent commettre des atrocités.",
      "Elle montre que des personnes <em>ordinaires</em> peuvent commettre des actes particulièrement violents.",
      "Elle confirme l'idée de Hobbes selon laquelle l'homme est un loup pour l'homme et capable d'agressivité."
    ],
    correct: 2,
    explanation: `Les expériences de Stanley Milgram (sur l'obéissance) et de Philip Zimbardo (la prison de Stanford) ont bouleversé la compréhension de la violence. Elles montrent que la soumission à une autorité perçue comme légitime, la pression du groupe et le fait d'être inséré dans un rôle peuvent conduire des individus normaux à infliger des souffrances. Cela éclaire les comportements des « exécutants » dans les génocides, qui ne sont pas nécessairement des sadiques.
\nExemple : Milgram a montré qu'une majorité de participants étaient prêts à administrer des chocs électriques potentiellement mortels à un inconnu, simplement parce qu'un scientifique en blouse blanche le leur ordonnait.`
  },
  // Question n°81
  {
    question: "Question n°81 : Comment la notion de <em>responsabilité de protéger</em> (R2P) modifie-t-elle le droit international ?",
    answers: [
      "Elle renforce la souveraineté absolue des États, interdisant toute ingérence sous quelque prétexte que ce soit.",
      "Elle établit que la communauté internationale a la responsabilité d'intervenir, pour protéger les populations.",
      "Elle interdit toute intervention militaire, privilégiant les moyens diplomatiques et les sanctions économiques."
    ],
    correct: 2,
    explanation: `Adoptée par l'ONU en 2005, la <em>responsabilité de protéger</em> (R2P) est une tentative de répondre aux échecs face aux génocides (Rwanda, Srebrenica). Elle pose trois piliers : la responsabilité première de l'État ; l'obligation de la communauté internationale d'aider ; et, en dernier recours, la responsabilité de prendre des mesures collectives, y compris coercitives, si l'État manque à son devoir. C'est un principe controversé, car il peut justifier des guerres.
\nExemple : L'intervention militaire en Libye en 2011, sous mandat de l'ONU, a été justifiée par la R2P pour protéger les civils menacés par le régime de Kadhafi. Les critiques estiment que cette intervention a dépassé son mandat.`
  },
  // Question n°82
  {
    question: "Question n°82 : Quel est le lien entre « environnement » et « violence » selon les analyses contemporaines ?",
    answers: [
      "Il n'y a pas de lien, l'environnement est un cadre neutre dans lequel se déroulent les conflits.",
      "Un environnement bien entretenu empêche mécaniquement toute forme de violence sociale ou criminelle.",
      "La dégradation environnementale peut être une cause de conflits violents pour l'accès aux ressources."
    ],
    correct: 3,
    explanation: `La crise écologique crée de nouvelles vulnérabilités et tensions. Quand des ressources vitales comme l'eau ou les terres arables viennent à manquer, la compétition peut dégénérer en violence, surtout dans des régions déjà instables. Le changement climatique est considéré comme un « multiplicateur de menaces ». Par ailleurs, les activités militaires polluent. La « sécurité environnementale » devient donc un enjeu géopolitique majeur.
\nExemple : Le conflit au Darfour (Soudan) a été en partie analysé comme un conflit environnemental : la désertification a exacerbé les tensions entre éleveurs nomades et agriculteurs sédentaires.`
  },
  // Question n°83
  {
    question: "Question n°83 : Comment la violence est-elle instrumentalisée dans les théories du complot ?",
    answers: [
      "Elles la nient toujours, affirmant que les attentats ou les guerres sont des mises en scène et n'ont pas eu lieu.",
      "Elles attribuent les actes de violence à des coupables cachés nourrissant la haine contre des boucs émissaires.",
      "Elles l'expliquent toujours rationnellement, en identifiant les responsabilités politiques et économiques réelles."
    ],
    correct: 2,
    explanation: `Les complotistes offrent une explication rassurante (car manichéenne) à la violence : ce n'est pas le chaos ou des causes complexes, mais l'action délibérée d'un ennemi omnipotent. Cette narration désigne des boucs émissaires (les Juifs, les Illuminati, les gouvernements secrets) et justifie la méfiance, voire la violence, contre eux. Après un attentat, les théories falsifiées se multiplient. Cette instrumentalisation aggrave les fractures sociales.
\nExemple : Après la fusillade de l'école de Sandy Hook (2012), des théoriciens du complot ont prétendu que c'était une mise en scène, harcelant et menaçant les parents des enfants tués.`
  },
  // Question n°84
  {
    question: "Question n°84 : Quel est le sens de la phrase d'Alain : « Je ne puis appeler guerre... cette chasse sans pitié que la faim, l'avidité... éperonnent » ?",
    answers: [
      "La faim et l'avidité sont les seules causes de toutes les guerres de l'histoire humaine.",
      "La violence individuelle n'est pas la guerre, qui est une entreprise collective et organisée.",
      "La guerre est une chasse à l'homme pratiquée par les élites militaires pour leur divertissement."
    ],
    correct: 2,
    explanation: `Alain distingue soigneusement deux niveaux de violence. D'un côté, les actes violents isolés, dictés par des besoins ou des passions individuelles (un affamé qui vole). De l'autre, la guerre, phénomène social et politique, planifié par des États, mobilisant des armées, et servant des intérêts qui ne sont pas ceux des soldats individuels. Cette distinction est importante pour ne pas naturaliser la guerre en la réduisant à une explosion de violence primaire.
\nExemple : Les exactions commises par des soldats affamés qui pillent un village sont des crimes de guerre, mais elles ne définissent pas à elles seules le conflit, qui peut avoir pour cause des rivalités géopolitiques à grande échelle.`
  },
  // Question n°85
  {
    question: "Question n°85 : Comment définir la <em>violence politique</em> de type idéologique en France aujourd'hui ?",
    answers: [
      "Elle n'existe plus, la France étant un pays pleinement pacifié et dépassionné sur le plan politique.",
      "Elle peut émaner de groupes informels et viser à interpeller le pouvoir ou à fédérer autour d'un ennemi.",
      "Elle est toujours le fait de l'État, qui réprime par la police et l'armée les contestations populaires."
    ],
    correct: 2,
    explanation: `La violence politique contemporaine en France est souvent le fait de petits groupes ou d'individus radicalisés. Les motivations sont variées : extrême-droite (violence raciste, homophobe), extrême-gauche (black blocs, dégradation), intégrismes religieux (attentats). Les cibles et les méthodes diffèrent, mais l'objectif est souvent de produire un choc médiatique et politique, de polariser le débat ou d'imposer par la force une vision du monde.
\nExemple : L'incendie d'un cinéma projetant <em>La Dernière Tentation du Christ</em> en 1988 par des intégristes catholiques visait à censurer par la violence une œuvre jugée blasphématoire.`
  },
  // Question n°86
  {
    question: "Question n°86 : Quelle est la thèse du livre <em>La révolution sécuritaire</em> de Nicolas Bourgoin sur l'évolution de la criminalité violente ?",
    answers: [
      "La violence privée (homicides) est en hausse continue et exponentielle depuis le Moyen Âge.",
      "Seules les statistiques policières sont fiables et elles montrent une augmentation constante de la violence.",
      "La violence privée est en baisse continue depuis des siècles en France, contredisant le sentiment d'insécurité."
    ],
    correct: 3,
    explanation: `Bourgoin analyse les données historiques sur le long terme. Il montre que le taux d'homicides a été divisé par plus de dix depuis le Moyen Âge. La baisse est particulièrement marquée depuis les années 1970. Il explique cette « révolution sécuritaire » par le renforcement des institutions policières et judiciaires, la généralisation du contrôle social et l'élévation du niveau de vie. Son travail s'inscrit contre la thèse d'une « montée de la violence » souvent utilisée à des fins politiques.
\nExemple : Alors que le débat public est saturé de discours sur l'« insécurité », le nombre d'homicides volontaires en France est passé d'environ 2 000 par an dans les années 1970 à moins de 900 par an dans les années 2010, pour une population qui a augmenté.`
  },
  // Question n°87
  {
    question: "Question n°87 : Pourquoi évoquer la chanson <em>Strange Fruit</em> de Billie Holiday dans le contexte des luttes pour la liberté ?",
    answers: [
      "C'est une chanson d'amour mélancolique sans rapport avec la politique ou la violence.",
      "Elle célèbre la beauté des paysages du Sud des États-Unis et la douceur de vivre.",
      "C'est un réquisitoire artistique qui dénonce la violence raciste des lynchages."
    ],
    correct: 3,
    explanation: `<em>Strange Fruit</em>, avec ses paroles poignantes décrivant les corps pendus des victimes de lynchage, est un acte de résistance artistique majeure. Elle a exposé l'horreur de la violence raciale à un large public blanc, contribuant à la prise de conscience qui mènera au mouvement des droits civiques. Elle montre que la lutte contre l'oppression n'est pas seulement militaire ; elle est aussi culturelle, symbolique et morale. L'art devient une arme.
\nExemple : La chanson était si subversive que Billie Holiday a souvent dû la chanter en dernier, les lumières éteintes, et a subi des pressions. Elle est devenue un hymne contre le racisme.`
  },
  // Question n°88
  {
    question: "Question n°88 : Comment la violence est-elle <em>extrêmisée</em> au 20e siècle ?",
    answers: [
      "Elle devient plus rare et plus localisée, les sociétés modernes répugnant de plus en plus à l'usage de la force.",
      "L'industrialisation de la mort et l'idéologisation ont conduit à pousser la violence à ses limites extrêmes.",
      "Elle devient plus chirurgicale, avec des armes de précision qui évitent les victimes civiles."
    ],
    correct: 2,
    explanation: `Le 20e siècle a connu une escalade qualitative de la violence. La Première Guerre mondiale invente la guerre d'usure et industrielle. La Seconde systématise le bombardement de civils, la guerre idéologique totale et l'extermination de masse bureaucratique. La violence n'est plus un moyen limité ; elle devient parfois une fin en soi, ou un moyen illimité. Cette « extrêmisation » marque une rupture avec les codes de la guerre « civilisée » du 19e siècle.
\nExemple : Le bombardement de Dresde en février 1945 par les Alliés, qui a fait environ 25 000 morts civils, n'avait pas d'objectif militaire stratégique clair et relevait d'une logique de terreur, illustrant cette violence poussée à l'extrême.`
  },
  // Question n°89
  {
    question: "Question n°89 : Quel est le rôle de la mémoire dans la lutte contre la violence, selon le témoignage d'Hannah Arendt sur la Shoah ?",
    answers: [
      "Il faut oublier pour tourner la page et construire l'avenir sans être handicapé par le poids du passé.",
      "Il est <em>désespérément nécessaire</em> de connaître et transmettre l'histoire pour éviter la possible répétition.",
      "La mémoire est inutile et douloureuse, elle entretient les haines et empêche la réconciliation entre les peuples."
    ],
    correct: 2,
    explanation: `Pour Arendt, les camps nazis ne sont pas un accident, mais la révélation des potentialités les plus sombres de la modernité (bureaucratie, idéologie). En comprendre les mécanismes est une condition pour prévenir leur retour. La mémoire n'est pas seulement un devoir envers les victimes, mais un outil politique pour le présent. Ignorer ou nier cette histoire, c'est se rendre vulnérable à la réémergence des conditions qui l'ont rendue possible.
\nExemple : Le négationnisme est considéré non seulement comme une insulte aux victimes, mais comme un danger politique, car il efface les leçons qui devraient en être tirées sur les dangers du totalitarisme.`
  },
  // Question n°90
  {
    question: "Question n°90 : En quoi la violence coloniale est-elle un exemple de violence à la fois martiale et politique ?",
    answers: [
      "Elle n'était pas violente, mais une entreprise civilisatrice pacifique et bienveillante.",
      "Elle combine la conquête militaire violente avec un système d'exploitation justifié par une idéologie raciste.",
      "Elle était uniquement économique, sans recours significatif à la force armée pour soumettre les populations."
    ],
    correct: 2,
    explanation: `La colonisation est un processus global de violence. La phase de conquête implique des guerres et des massacres. Une fois établie, la domination se maintient par une violence politique structurelle : code de l'indigénat, justice discriminatoire, travail forcé, répressions sanglantes des révoltes. Cette violence est légitimée par un discours idéologique qui présente les colonisés comme inférieurs. C'est une violence à la fois physique, institutionnelle et symbolique.
\nExemple : La répression du soulèvement de Sétif en Algérie en 1945 par l'armée française, qui fit des milliers de morts algériens, illustre la violence politique utilisée pour maintenir l'ordre colonial.`
  },
  // Question n°91
  {
    question: "Question n°91 : Comment le droit international contemporain tente-t-il d'encadrer la violence de guerre ?",
    answers: [
      "Il l'interdit totalement, considérant que toute guerre est illégale et doit être empêchée par la communauté internationale.",
      "À travers le droit international humanitaire qui définit des règles pour protéger les civils et limiter les moyens de combat.",
      "Il encourage la guerre totale comme moyen légitime pour un État de défendre ses intérêts vitaux sans aucune restriction."
    ],
    correct: 2,
    explanation: `Le droit international moderne est l'héritier des théories de la guerre juste. Les Conventions de Genève (1949) et leurs Protocoles forment le cœur du droit humanitaire (<em>jus in bello</em>). Parallèlement, la Cour pénale internationale (CPI) peut poursuivre les individus pour crimes de guerre, crimes contre l'humanité et génocide. Ce système, bien qu'imparfait et souvent violé, représente une tentative institutionnelle de limiter l'horreur de la guerre et d'en punir les excès.
\nExemple : Le procès de Slobodan Milošević devant le TPIY pour crimes de guerre montrait la volonté de juger les responsables politiques de violences massives, au-delà du principe de souveraineté.`
  },
  // Question n°92
  {
    question: "Question n°92 : Quelle est la différence entre <em>potestas</em> et <em>auctoritas</em> dans la pensée d'Hannah Arendt ?",
    answers: [
      "La <em>potestas</em> est le pouvoir légitime, l'<em>auctoritas</em> est la violence arbitraire.",
      "La <em>potestas</em> est le pouvoir fondé sur la force ; l'<em>auctoritas</em> est l'autorité morale.",
      "Ce sont des synonymes dans le vocabulaire politique, termes qu'Arendt utilise indifféremment."
    ],
    correct: 2,
    explanation: `Arendt puise cette distinction dans la Rome antique. La <em>potestas</em> est le pouvoir de commander, éventuellement par la force (celui du magistrat). L'<em>auctoritas</em> est une influence, un prestige qui incite à obéir sans contrainte (celui du Sénat). Pour Arendt, un pouvoir politique sain repose sur l'<em>auctoritas</em>, sur la capacité de persuader et de rassembler. Quand il perd cette autorité, il doit recourir à la <em>potestas</em> (la violence), signe de sa faiblesse.
\nExemple : Un professeur respecté par ses élèves a de l'<em>auctoritas</em> ; ils travaillent par intérêt et respect. Un professeur qui doit sans cesse menacer de sanctions (<em>potestas</em>) a perdu cette autorité.`
  },
  // Question n°93
  {
    question: "Question n°93 : Quel est le sens de la phrase de John Rawls définissant la <em>désobéissance civile</em> ?",
    answers: [
      "Un acte violent de rébellion armée contre l'État pour instaurer un nouveau régime.",
      "Un refus individuel de payer ses impôts par protestation contre une politique injuste.",
      "Un acte public, non-violent, contraire à la loi, accompli en conscience pour protester."
    ],
    correct: 3,
    explanation: `Rawls théorise la désobéissance civile comme une forme d'opposition légitime dans une démocratie quasi-juste. Elle n'est pas une révolution, mais un appel à la conscience de la majorité. Son caractère public, non-violent et légaliste (les désobéissants acceptent généralement la peine) en fait un moyen de pression moral plutôt que coercitif. Elle vise à corriger une injustice spécifique sans renverser l'ordre constitutionnel. C'est une forme de résistance qui refuse la violence tout en utilisant la transgression symbolique.
\nExemple : Les sit-in des militants des droits civiques aux États-Unis dans les années 1960, qui enfreignaient délibérément les lois de ségrégation tout en restant non-violents, incarnent la désobéissance civile rawlsienne.`
  },
  // Question n°94
  {
    question: "Question n°94 : Pourquoi la littérature enfantine qui contient des scènes de maltraitance ne constitue-t-elle pas une incitation à la violence éducative ?",
    answers: [
      "Parce que les enfants sont trop stupides pour comprendre ce qu'ils lisent et ne font pas le lien avec la réalité.",
      "Parce que l'enfant est capable de distinguer le réel de la fiction, laquelle représente la complexité du monde.",
      "Parce que ces livres sont interdits à la vente et ne tombent donc jamais entre les mains des enfants."
    ],
    correct: 2,
    explanation: `L'argument est que la littérature n'a pas une fonction prescriptive mais descriptive et réflexive. Les contes de Perrault ou les histoires de Roald Dahl ne sont pas des manuels d'éducation, mais des récits qui mettent en scène des conflits, des peurs et des violences pour les apprivoiser par l'imaginaire. L'identification de l'enfant est complexe et ne mène pas à la reproduction littérale. Interdire ces œuvres au nom de la prévention confondrait le registre de l'art avec celui de la vie réelle.
\nExemple : Dans <em>Matilda</em> de Roald Dahl, l'héroïne est maltraitée par ses parents. L'enfant lecteur s'identifie à Matilda et comprend la nécessité de résister à l'injustice, ce qui est un message positif.`
  },
  // Question n°95
  {
    question: "Question n°95 : Quelle interrogation soulève la représentation de la <em>violence féminine</em> en littérature ?",
    answers: [
      "Elle ne doit donc pas être représentée, car elle contredit la nature pacifique et maternelle des femmes.",
      "Seuls les hommes peuvent être violents dans les romans, c'est une convention littéraire depuis l'Antiquité.",
      "Elle permet de dépasser le stéréotype de la femme-victime et d'explorer la complexité de la violence humaine."
    ],
    correct: 3,
    explanation: `La violence est souvent genrée dans les représentations : l'homme serait l'acteur naturel, la femme la victime. Pourtant, la réalité historique et sociale montre que les femmes peuvent aussi être auteurs de violence. La littérature contemporaine explore cette facette, montrant des femmes engagées dans des luttes violentes ou poussées à la violence par des circonstances extrêmes. Cela permet de dépasser les stéréotypes et d'interroger la violence humaine dans toute sa complexité.
\nExemple : Le personnage de Lisbeth Salander dans la saga <em>Millénium</em> est une femme victime de violences masculines, mais qui use aussi d'une violence froide et calculée pour se venger, bousculant les représentations traditionnelles.`
  },
  // Question n°96
  {
    question: "Question n°96 : Quelle est la fonction du marché de l'art dans la performance de Maurizio Cattelan avec la banane scotchée ?",
    answers: [
      "Il la dénonce comme une arnaque et une supercherie indignes du monde de l'art.",
      "Le système institutionnel donne sa valeur à un geste et fait partie de l'œuvre.",
      "Il veut vendre des fruits en les présentant comme des œuvres d'art."
    ],
    correct: 2,
    explanation: `L'œuvre de Cattelan est méta-artistique : elle parle du système de l'art lui-même. Le geste simple n'acquiert de sens et une valeur de 120 000 dollars que parce qu'il est signé par un artiste reconnu, exposé dans une foire prestigieuse et acheté par un collectionneur. L'œuvre, c'est ce dispositif complet. Elle révèle le caractère arbitraire et conventionnel du marché de l'art, où la valeur dépend moins de l'objet que de son contexte et de sa signature.
\nExemple : Quand un performeur a mangé la banane en 2019, il n'a pas détruit l'œuvre, il l'a transformée, créant un nouvel événement médiatique et confirmant que l'« œuvre » était le concept et son récit.`
  },
  // Question n°97
  {
    question: "Question n°97 : Comment la sociologie analyse-t-elle le lien entre <em>ségrégation spatiale</em> et <em>violence symbolique</em> ?",
    answers: [
      "Il n'y a pas de lien, ce sont deux phénomènes sociaux totalement indépendants l'un de l'autre.",
      "Les quartiers pauvres sont objectivement plus vivants, ce qui compense la stigmatisation.",
      "La concentration des pauvres dans certains quartiers entraîne une stigmatisation de l'espace."
    ],
    correct: 3,
    explanation: `La ségrégation n'est pas seulement géographique, elle est aussi sociale et symbolique. Un quartier stigmatisé (médiatiquement, administrativement) devient un stigmate pour ses habitants. Le simple fait d'y habiter peut être un obstacle à l'emploi, au crédit, à la considération sociale. Les habitants intériorisent cette image négative. C'est une violence diffuse qui, sans coup direct, assigne les individus à une place inférieure dans la hiérarchie sociale.
\nExemple : Les politiques de <em>discrimination positive</em> tentent de lutter contre cette violence symbolique en changeant l'image des quartiers et en y attirant des populations plus diversifiées.`
  },
  // Question n°98
  {
    question: "Question n°98 : Quel est le sens de l'expression de Simone Weil sur la guerre : « L'âme souffre violence tous les jours » ?",
    answers: [
      "La guerre est spirituellement enrichissante : elle fortifie le caractère des combattants jour après jour.",
      "Les soldats sont des âmes sensibles qui souffrent moralement de devoir tuer, même lorsque c'est nécessaire.",
      "La violence de la guerre est si totale qu'elle efface jusqu'à la pensée de ses causes et de sa fin."
    ],
    correct: 3,
    explanation: `Simone Weil, <em>L'Iliade ou le poème de la force</em>, décrit la guerre comme une force écrasante qui abîme les âmes de tous. Elle est si totale qu'elle rend inconcevable aussi bien son déclenchement que sa fin. La pensée et l'aspiration sont annihilées. La violence n'est plus un moyen pour une fin, elle devient une fin en soi, un état permanent qui annule la réflexion et l'action orientée vers la paix, révélant une dimension tragique de la condition humaine face à la mort.
\nExemple : Un soldat dans les tranchées de Verdun, soumis à un bombardement continu, peut perdre jusqu'à l'idée même d'un <em>après</em> la guerre ; sa conscience est réduite à la survie immédiate.`
  },
  // Question n°99
  {
    question: "Question n°99 : Comment la violence coloniale illustre-t-elle le concept de violence à la fois martiale et politique ?",
    answers: [
      "La colonisation était un processus entièrement pacifique, fondé sur le commerce et la coopération culturelle.",
      "Elle a été menée sans aucune violence militaire, uniquement par la persuasion et la supériorité technique.",
      "Elle combine la conquête militaire violente avec un système politique d'oppression fondé sur une idéologie raciste."
    ],
    correct: 3,
    explanation: `La colonisation est un processus global de violence. La phase de conquête implique des guerres et des massacres. Une fois établie, la domination se maintient par une violence politique structurelle : code de l'indigénat, justice discriminatoire, travail forcé, répressions sanglantes des révoltes. Cette violence est légitimée par un discours idéologique qui présente les colonisés comme inférieurs et la colonisation comme une mission civilisatrice. C'est une violence à la fois physique, institutionnelle et symbolique.
\nExemple : La conquête de l'Algérie par la France au 19e siècle a impliqué une guerre longue et brutale, puis l'instauration d'un régime politique qui refusait la pleine citoyenneté aux « indigènes » musulmans.`
  },
  // Question n°100
  {
    question: "Question n°100 : Quel fil directeur permet de relier les différentes dimensions de la violence abordées dans cette séquence ?",
    answers: [
      "Une simple chronologie des guerres les plus importantes du 20e siècle, sans analyse conceptuelle.",
      "La glorification de la force et de l'héroïsme militaire comme valeurs suprêmes de l'histoire humaine.",
      "L'idée que la violence permet de comprendre les causes de la violence et les moyens de la dénoncer."
    ],
    correct: 3,
    explanation: `Le parcours est construit comme une investigation pluridisciplinaire autour d'un problème unique : la violence comme défi à l'humanité. Il commence par une interrogation philosophique sur son essence, puis retrace son histoire. Il examine les réponses institutionnelles (droit, État) pour la canaliser. Il se penche sur ses typologies contemporaines. Enfin, il explore la réponse des écrivains et des artistes qui, face à l'horreur, ont utilisé la plume comme arme de résistance, de témoignage et d'espoir.
\nExemple : De la réflexion d'Alain sur les fausses justifications de la guerre, à l'analyse de Bourdieu sur la violence invisible de l'école, en passant par le témoignage de Grossman et le poème d'Eluard, le module montre que penser la violence exige de croiser tous les regards.`
  }
];