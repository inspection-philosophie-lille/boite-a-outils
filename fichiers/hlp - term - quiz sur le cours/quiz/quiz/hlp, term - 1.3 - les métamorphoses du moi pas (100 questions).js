// ============================================
// DONNÉES GÉNÉRALES
// ============================================
const titre = "QUIZ HLP - Les métamorphoses du moi";
const sousTitre = "100 questions pour explorer la construction, les définitions et les remises en question de l'identité personnelle, de l'Antiquité à la psychanalyse.";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE (Synthèse)
// ============================================
const philosophyData = {
  texte: `Le 'moi' est l'objet d'une quête permanente et problématique. Depuis le 'connais-toi toi-même' de l'Antiquité, la pensée occidentale a tenté de cerner cette entité. Le cogito cartésien en fait une substance pensante, fondement certain de la connaissance. Pourtant, dès le XVIIIe siècle, Hume et Rousseau ébranlent cette évidence, révélant un moi fluide, insaisissable, construit par la mémoire et le récit. Le XIXe siècle romantique exalte un moi tourmenté et en devenir, tandis que le XXe siècle, avec Freud, le découvre traversé par l'inconscient, éclaté en instances conflictuelles. Finalement, le moi apparaît moins comme une donnée que comme une construction, à la fois psychologique, narrative et sociale, en perpétuelle métamorphose.`,
  source: "Synthèse des enjeux philosophiques de la séquence 'Les métamorphoses du moi'."
};

// ============================================
// QUESTIONS DU QUIZ (1 à 100)
// ============================================
const questions = [
  // Question n°1
  {
    question: "Comment Platon, dans le 'Théétète', définit-il l'acte de penser ?",
    answers: [
      "Comme une intuition immédiate de la vérité, sans discours intérieur.",
      "Comme un discours silencieux que l'âme se tient à elle-même, s'interrogeant et se répondant.",
      "Comme le simple enregistrement passif des impressions sensibles."
    ],
    correct: 2,
    explanation: `Dans le 'Théétète', Platon définit la pensée comme un dialogue intérieur. L'âme n'est pas un spectateur passif mais un interlocuteur actif qui se pose des questions et y répond, passant de l'affirmation à la négation. Cet échange silencieux est le processus même par lequel se forme une opinion ou un jugement. Cette conception maïeutique de la pensée, héritée de Socrate, souligne que penser, c'est avant tout se mettre en question soi-même, examiner et critiquer ses propres idées. Exemple : Lorsque nous hésitons sur une décision importante, nous pesons mentalement le pour et le contre dans un débat intérieur qui illustre ce 'discours de l'âme à elle-même'.`
  },
  // Question n°2
  {
    question: "Quelle capacité, selon Kant dans son 'Anthropologie', élève infiniment l'homme au-dessus des autres êtres vivants ?",
    answers: [
      "La capacité de fabriquer des outils.",
      "La capacité de posséder le 'Je' dans sa représentation, de se désigner à la première personne.",
      "La capacité de ressentir des émotions complexes comme la pitié."
    ],
    correct: 2,
    explanation: `Kant identifie la possession du 'Je' dans la représentation comme le trait distinctif et fondateur de l'humanité. Ce pouvoir de se rapporter à soi-même comme à un sujet unifié ('Je') confère à l'homme sa dignité de personne, le rendant 'une seule et même personne' à travers tous les changements. Cette unité de la conscience, rendue possible par l'entendement, est antérieure au langage (on peut penser 'Je' sans le dire) et marque le passage de l'enfant qui 'se sent' à l'enfant qui 'se pense'. Exemple : Le moment où un enfant cesse de dire 'Charles a faim' pour dire 'J'ai faim' représente, pour Kant, l'avènement de la conscience de soi comme sujet.`
  },
  // Question n°3
  {
    question: "Que signifie l'expression 'Je est un autre', formulée par Arthur Rimbaud dans ses lettres dites 'du voyant' ?",
    answers: [
      "Une affirmation du solipsisme : je ne peux connaître que ma propre conscience.",
      "Une dénégation de l'identité personnelle : 'Je' n'existe pas vraiment.",
      "L'idée que le sujet créateur ne coïncide pas avec lui-même ; une altérité interne, un 'autre' en lui, s'exprime dans la création poétique."
    ],
    correct: 3,
    explanation: `Rimbaud révolutionne la conception du sujet créateur. 'Je est un autre' signifie que le 'moi' quotidien, social, n'est pas l'auteur de la poésie. L'acte de création fait émerger une autre voix, une altérité radicale au sein du sujet. Le poète n'est pas un 'pilote' maître de sa pensée ('Je pense'), mais un instrument ('le bois qui se trouve violon') traversé par des visions ('On me pense'). Cette non-coïncidence du sujet avec lui-même est le principe même de la modernité poétique, obtenue par un 'dérèglement raisonné de tous les sens'. Exemple : L'écrivain qui dit 'mes personnages m'échappent et agissent d'eux-mêmes' exprime une intuition proche de celle de Rimbaud.`
  },
  // Question n°4
  {
    question: "Dans la 'première topique' freudienne, comment sont organisés les systèmes de l'appareil psychique ?",
    answers: [
      "En deux instances : le conscient et l'inconscient.",
      "En trois systèmes : l'inconscient, le préconscient et le conscient.",
      "En quatre sphères : la pulsion, l'affect, la représentation et la conscience."
    ],
    correct: 2,
    explanation: `Dans sa première modélisation (dite 'première topique'), Freud divise l'appareil psychique en trois systèmes ou lieux (τόποι). L'inconscient est le réservoir des pulsions et des désirs refoulés, inaccessible directement. Le préconscient fait office de sas ; il contient des éléments qui ne sont pas actuellement conscients, mais peuvent le devenir sans résistance particulière. Le conscient est le lieu de la perception interne et externe, et de la pensée logique. Cette topique décrit un parcours où les contenus de l'inconscient doivent être 'lissés' par le préconscient pour accéder à la conscience. Exemple : Un souvenir d'enfance oublié (préconscient) peut remonter à la mémoire (conscient) à la vue d'une photo, contrairement à un désir refoulé (inconscient) qui reste inaccessible sans un travail d'analyse.`
  },
  // Question n°5
  {
    question: "Quelle est la célèbre maxime inscrite sur le fronton du temple d'Apollon à Delphes, évoquée en introduction de la séquence ?",
    answers: [
      "« Rien de trop » (Μηδὲν ἄγαν).",
      "« Connais-toi toi-même » (Γνῶθι σεαυτόν).",
      "« La mesure est ce qu'il y a de meilleur » (Μέτρον ἄριστον)."
    ],
    correct: 2,
    explanation: `La maxime delphique 'Connais-toi toi-même' (Γνῶθι σεαυτόν) est présentée comme l'origine lointaine de la quête du moi en philosophie. Dans son contexte antique, il ne s'agissait pas d'une invitation à l'introspection psychologique moderne, mais d'un rappel à l'humilité : connaître sa place, ses limites d'être humain mortel face aux dieux immortels. Elle invitait à reconnaître son ignorance fondamentale. Cette injonction pose néanmoins le problème de la connaissance de soi comme un problème philosophique central, où le sujet qui connaît et l'objet à connaître sont une seule et même entité. Exemple : Socrate, en proclamant qu'il ne sait qu'une chose, c'est qu'il ne sait rien, se présente comme le fidèle serviteur de l'oracle delphique et de cette maxime.`
  },
  // Question n°6
  {
    question: "Selon la lecture que propose Bergson dans 'Les données immédiates de la conscience', que nous présentent généralement les romanciers réalistes à propos de notre moi ?",
    answers: [
      "Sa vérité profonde et son unité substantielle.",
      "Une 'ombre' conventionnelle, une juxtaposition d'états simplifiés et traduisibles en mots, qui masque la complexité et la mobilité réelle de notre vie intérieure.",
      "La preuve de l'existence de l'inconscient freudien."
    ],
    correct: 2,
    explanation: `Bergson critique la psychologie associationniste de son temps, qui découpe le moi en états psychiques distincts et fixes (joie, tristesse, etc.). Les romanciers réalistes, en décrivant les personnages avec ce langage psychologique conventionnel, ne font que reprendre cette simplification. Ils nous présentent une 'ombre' de nous-mêmes, un 'moi social' utile pour la communication, mais qui est une construction figée. Le moi réel, lui, est un flux continu, une 'pénétration mutuelle' d'impressions mouvantes et infinies. Seul un romancier 'hardi' (comme Dostoïevski) peut, en montrant les contradictions et la fluidité du sentiment, nous 'remettre en présence de nous-mêmes'. Exemple : La description d'un personnage comme 'jaloux' est une étiquette commode, mais elle ne rend pas compte de la nuance, de l'évolution et du mélange constant de cette jalousie avec d'autres sentiments (amour, honte, désir).`
  },
  // Question n°7
  {
    question: "Quelle est la principale difficulté que rencontre Rousseau dans l'écriture de ses 'Confessions', selon le cours ?",
    answers: [
      "Le manque d'événements marquants dans sa vie.",
      "La pression de la censure et de l'opinion publique.",
      "Les lacunes de sa mémoire, qui l'obligent parfois à combler les vides et menacent la sincérité absolue qu'il revendique."
    ],
    correct: 3,
    explanation: `Rousseau, dans le préambule des 'Confessions', affirme un projet d'une sincérité radicale et sans précédent : montrer un homme 'dans toute la vérité de la nature'. Cependant, le cours souligne l'obstacle fondamental que représente la mémoire. Rousseau avoue lui-même qu'il peut 'employer quelque ornement indifférent' pour 'remplir un vide occasionné par [son] défaut de mémoire'. Cela crée une tension constitutive de l'autobiographie : la volonté de vérité se heurte à la fragilité et aux reconstructions de la remémoration. L'autobiographie est toujours, en partie, une recréation du passé. Exemple : Nos propres souvenirs d'enfance sont souvent des reconstructions à partir de photos ou de récits familiaux, et non des enregistrements fidèles.`
  },
  // Question n°8
  {
    question: "Dans 'Lorenzaccio' de Musset, comment le héros justifie-t-il son projet de meurtre contre le tyran Alexandre de Médicis ?",
    answers: [
      "Comme un acte purement politique, motivé par l'idéal républicain.",
      "Comme la seule action qui puisse encore lui donner un sens et le raccrocher à une forme de vertu, dans une existence qu'il sent dégradée et 'ombre de lui-même'.",
      "Comme une vengeance personnelle pour un tort qu'Alexandre lui aurait fait."
    ],
    correct: 2,
    explanation: `Lorenzaccio est un héros romantique rongé par le dédoublement et la perte d'identité. Il ne se reconnaît plus dans l'homme raffiné qu'il était. Le meurtre n'est pas présenté comme un acte vertueux et héroïque. C'est un geste désespéré, 'le seul brin d'herbe' auquel il peut se cramponner alors qu'il 'glisse sur un mur taillé à pic'. Il s'agit pour lui de retrouver, par une action extrême, une unité et un sens à sa vie disloquée. Le meurtre devient 'le seul fil' qui le rattache à son 'cœur d'autrefois', la dernière chose qui lui reste de sa 'vertu'. Exemple : Ce raisonnement illustre la logique tragique du héros romantique pour qui l'action violente, même immorale, est préférable à la passivité et au néant intérieur.`
  },
  // Question n°9
  {
    question: "Selon la 'seconde topique' freudienne, quelle est la fonction du 'moi' (Ich) ?",
    answers: [
      "Être le réservoir des pulsions libidinales et agressives.",
      "Incarné la morale sociale et les interdits parentaux.",
      "Assurer la médiation et le compromis entre les exigences du ça, les interdits du surmoi et les contraintes de la réalité extérieure."
    ],
    correct: 3,
    explanation: `Dans la seconde topique (ça, moi, surmoi), le moi est l'instance exécutive et médiatrice. Il est 'pressé par le ça' (les pulsions), 'opprimé par le surmoi' (la conscience morale, l'idéal) et 'repoussé par la réalité'. Sa tâche difficile ('Ah, la vie n'est pas facile !') est de trouver un équilibre, de 'servir trois maîtres sévères' souvent contradictoires. Il tente de satisfaire les désirs du ça de manière socialement acceptable, tout en respectant les exigences du surmoi. Il est le siège de la raison, de la perception et de l'action adaptée au réel. Exemple : Lorsque nous ressentons de la colère (pulsion du ça), le moi peut décider de l'exprimer de manière civilisée (par une discussion) plutôt que par un coup de poing, pour éviter les sanctions de la réalité et la culpabilité induite par le surmoi.`
  },
  // Question n°10
  {
    question: "Que découvre Œdipe dans la tragédie de Sophocle, et en quoi cela constitue-t-il une révélation sur le moi ?",
    answers: [
      "Il découvre qu'il est l'assassin de son père et l'époux de sa mère, réalisant ainsi qu'il est l'auteur des actes les plus contraires à l'identité qu'il se donnait et qu'il voulait incarner.",
      "Il découvre qu'il est le fils d'un dieu et que son destin était de régner glorieusement.",
      "Il découvre que ses parents biologiques sont toujours vivants et qu'il peut retrouver sa famille."
    ],
    correct: 1,
    explanation: `La tragédie d'Œdipe est une exploration radicale de la méconnaissance de soi. Œdipe, en cherchant l'assassin du roi Laïos pour sauver Thèbes, découvre qu'il est lui-même cet assassin, et que sa victime était son père. Il découvre aussi que Jocaste, qu'il a épousée, est sa mère. Cette révélation est une catastrophe identitaire : il est l'auteur des actes les plus impies (parricide, inceste) qu'il cherchait à punir. Il découvre qu'il n'est pas celui qu'il croyait être. La quête de connaissance sur soi ('connais-toi toi-même') aboutit ici à un savoir insupportable qui détruit le moi. Exemple : Œdipe illustre le paradoxe d'une quête de vérité sur soi qui peut révéler une identité monstrueuse et inacceptable, que l'on avait refoulée.`
  },
  // Question n°11
  {
    question: "Quelle critique principale Alain adresse-t-il à la notion freudienne d'inconscient ?",
    answers: [
      "Il la trouve trop scientifique et pas assez philosophique.",
      "Il y voit une 'idolâtrie du corps', une manière de faire du corps un 'autre Moi', un 'animal redoutable', alors qu'il ne s'agit que du mécanisme corporel.",
      "Il estime qu'elle surestime le rôle de la sexualité infantile."
    ],
    correct: 2,
    explanation: `Alain, philosophe rationaliste, rejette la conception freudienne d'un inconscient psychique structuré comme un autre sujet. Pour lui, parler d'inconscient est acceptable comme 'abrégé du mécanisme' corporel (les réflexes, les habitudes). Mais il critique le fait de 'grossir' cette notion pour en faire un 'autre Moi' avec ses propres passions et ruses. Cela revient, selon lui, à faire du corps un 'semblable', un 'esclave' doué d'intentions, ce qui est une 'idolâtrie du corps' et une 'méprise sur le Moi'. Alain défend l'idée que la conscience et la volonté sont maîtresses, et que l'inconscient est une excuse pour se décharger de sa responsabilité. Exemple : Pour Alain, un lapsus n'est pas la manifestation d'un désir inconscient, mais simplement un raté mécanique de la parole, sans signification psychologique profonde.`
  },
  // Question n°12
  {
    question: "Selon David Hume, dans son 'Traité de la nature humaine', que découvre-t-on lorsque l'on essaie de percevoir son propre 'moi' ?",
    answers: [
      "Une substance simple, immatérielle et permanente : l'âme.",
      "Un flux incessant et changeant de perceptions distinctes (impressions, idées), sans aucun noyau substantiel permanent.",
      "La trace de Dieu dans l'âme humaine."
    ],
    correct: 2,
    explanation: `Hume, empiriste radical, applique sa méthode à la notion de 'moi'. Il invite à introspecter : que perçoit-on quand on essaie de saisir son 'moi' ? On ne trouve jamais une entité unique et stable, mais toujours une perception particulière (une douleur, une couleur, une pensée, une émotion). Le 'moi' n'est donc pas une impression simple. C'est un 'faisceau ou une collection de perceptions différentes, qui se succèdent avec une rapidité inconcevable'. L'idée d'un moi identique et continu est une fiction produite par l'imagination, qui, par habitude, relie ces perceptions successives. Exemple : Je suis tour à tour 'celui qui a froid', 'celui qui pense à un ami', 'celui qui est joyeux'. Aucune de ces perceptions n'est le 'moi' ; leur succession, liée par la mémoire, crée l'illusion d'un 'moi' unique.`
  },
  // Question n°13
  {
    question: "Quelle distinction majeure Paul Ricœur établit-il dans son analyse de l'identité personnelle ?",
    answers: [
      "Entre l'identité biologique et l'identité sociale.",
      "Entre la 'mêmeté' (idem), qui désigne la permanence d'un être à travers le changement, et l' 'ipséité' (ipse), qui renvoie au 'soi' comme promesse et fidélité à soi-même.",
      "Entre le moi conscient et le moi inconscient."
    ],
    correct: 2,
    explanation: `Paul Ricœur, dans 'Soi-même comme un autre', propose une distinction capitale. La 'mêmeté' (idem, 'sameness') désigne l'identité au sens de la similitude, de la permanence d'un être à travers le temps malgré les changements (comme un arbre qui reste le même bien qu'il grandisse). L''ipséité' (ipse, 'selfhood') renvoie à l'identité narrative du 'soi', à la capacité de se maintenir comme le même auteur de ses actes et de ses promesses. L'ipséité n'implique pas une identité substantielle immuable, mais une identité dynamique construite par le récit et l'engagement. Exemple : Un homme qui change d'opinion politique conserve sa 'mêmeté' biologique, mais son 'ipséité' (son identité narrative) se transforme ; il reste cependant capable de tenir ses promesses (fidélité à soi), ce qui relève aussi de l'ipséité.`
  },
  // Question n°14
  {
    question: "Quelle est la position de Nietzsche sur la formule cartésienne 'Je pense' ?",
    answers: [
      "Il la voit comme le fondement inébranlable de toute certitude.",
      "Il la considère comme une 'superstition des logiciens', une falsification grammaticale qui postule un sujet (le 'je') là où il n'y a qu'une activité impersonnelle ('ça pense').",
      "Il l'approuve, mais y ajoute la dimension du corps et des pulsions."
    ],
    correct: 2,
    explanation: `Nietzsche déconstruit le cogito cartésien. Il affirme qu'il est faux de dire 'je pense'. On devrait dire impersonnellement 'ça pense', comme on dit 'il pleut'. La grammaire de nos langues (sujet + verbe) nous impose l'idée d'un sujet substantiel (le 'je') qui serait l'auteur de la pensée. Pour Nietzsche, c'est une illusion. La pensée est un événement qui survient, produit par des jeux de forces (les instincts, les pulsions) dont nous n'avons qu'une connaissance très partielle. Postuler un 'je' stable derrière l'acte de penser est une 'supposition', pas une 'certitude immédiate'. Exemple : Une idée géniale nous 'traverse' souvent de manière subite, sans que nous l'ayons 'voulue' ; elle semble venir d'ailleurs, illustrant le 'ça pense' de Nietzsche.`
  },
  // Question n°15
  {
    question: "Comment le sociologue Émile Durkheim caractérise-t-il la différence entre les sociétés animales et les sociétés humaines ?",
    answers: [
      "Les sociétés animales sont fondées sur la domination, les sociétés humaines sur la coopération.",
      "Dans les sociétés animales, l'individu est gouverné par l'instinct (du dedans) ; dans les sociétés humaines, il est soumis à des règles, des lois qui viennent 'du dehors' et se surajoutent à sa nature.",
      "Il n'y a pas de différence fondamentale, l'homme étant un animal social comme les autres."
    ],
    correct: 2,
    explanation: `Durkheim, fondateur de la sociologie française, insiste sur le fait que la société humaine impose à l'individu des contraintes extérieures qui le façonnent. L'animal dans son groupe suit principalement ses instincts biologiques, programmés 'du dedans'. L'homme, lui, naît dans un monde déjà structuré par des normes, des lois, des coutumes, des langues. Ces réalités sociales, qui préexistent à l'individu et lui survivront, viennent 'du dehors', s'imposent à lui et 'se surajoutent à sa nature propre'. Le 'moi' humain se construit donc dans l'intériorisation de ces règles sociales. Exemple : Les règles de politesse, le sens du devoir ou l'interdit de l'inceste ne sont pas des instincts, mais des normes sociales que nous apprenons et qui deviennent partie intégrante de notre personnalité.`
  },
  // Question n°16
  {
    question: "Selon le cours, que signifie l'expression de Montaigne : 'Je peins le passage' ?",
    answers: [
      "Il fait des portraits de personnes en mouvement.",
      "Il décrit dans ses 'Essais' non un être fixe et défini, mais un moi toujours changeant, dans le flux du temps.",
      "Il voyage beaucoup et écrit sur ses voyages."
    ],
    correct: 2,
    explanation: `Montaigne, dans ses 'Essais', révolutionne la littérature en faisant de sa propre personne mouvante l'objet de l'écriture. 'Je peins le passage' signifie qu'il ne prétend pas capturer un 'moi' substantiel et stable. Au contraire, il saisit et décrit son propre changement, sa métamorphose permanente 'de jour en jour, de minute en minute'. Son moi est comparable au monde, une 'branloire pérenne' (un perpétuel mouvement de balancier). L'identité n'est pas un état, mais un processus. Les 'Essais' sont le journal de cette exploration d'un soi insaisissable. Exemple : Montaigne peut écrire des choses contradictoires à quelques pages d'intervalle, non par incohérence, mais parce qu'il a changé, ou qu'il se saisit sous un angle différent.`
  },
  // Question n°17
  {
    question: "Dans la psychanalyse de Carl Gustav Jung, qu'est-ce que 'l'inconscient collectif' ?",
    answers: [
      "La somme des refoulements personnels de tous les membres d'une société.",
      "Un réservoir de structures psychiques universelles et archaïques communes à toute l'humanité, exprimées dans les mythes, les rêves et les symboles.",
      "La partie de l'inconscient influencée par la culture et l'éducation."
    ],
    correct: 2,
    explanation: `Jung se sépare de Freud sur ce point crucial. Pour lui, l'inconscient ne se réduit pas à l'histoire personnelle et aux pulsions refoulées (inconscient personnel). Il postule l'existence d'un inconscient collectif, couche la plus profonde de la psyché, héritée et commune à l'humanité entière. Il contient des 'archétypes', qui sont des formes symboliques universelles (le Héros, la Mère, l'Ombre, le Soi). Ces archétypes structurent notre expérience et apparaissent dans les rêves, les contes, les religions et les œuvres d'art de toutes les cultures. Le moi individuel plonge ses racines dans cette matrice commune. Exemple : Le motif du 'voyage au centre de la terre' ou de la 'rencontre avec un vieux sage' dans les récits de nombreuses cultures refléterait, selon Jung, des archétypes de l'inconscient collectif.`
  },
  // Question n°18
  {
    question: "Quelle est la critique de Sartre à l'égard de la notion freudienne d'inconscient ?",
    answers: [
      "Elle est trop complexe et inutile.",
      "Elle est matérialiste et nie la spiritualité humaine.",
      "Elle est un concept de 'mauvaise foi', car elle suppose une conscience (la censure) qui refoulerait sans savoir ce qu'elle refoule, ce qui est contradictoire."
    ],
    correct: 3,
    explanation: `Sartre, existentialiste, rejette l'inconscient freudien car il le voit comme une machine à évacuer la responsabilité. Son argument est logique : pour que le refoulement fonctionne, il faut une instance (la 'censure') qui reconnaisse le désir à refouler pour le bloquer. Cette instance doit donc avoir une conscience (même non-thétique) de ce qu'elle refoule. Or, Freud dit que le désir refoulé est totalement inconscient. Pour Sartre, cette contradiction se résout en parlant de 'mauvaise foi' : le sujet sait, au fond de lui, ce qu'il refuse de savoir ; il se ment à lui-même pour éviter l'angoisse de la liberté et de la responsabilité. L'inconscient est une aliénation choisie. Exemple : Pour Sartre, une personne qui 'oublie' systématiquement un rendez-vous important ne le fait pas par un mécanisme inconscient, mais par une mauvaise foi active : elle ne veut pas assumer le choix conscient d'y aller ou non.`
  },
  // Question n°19
  {
    question: "Quel problème célèbre de l'identité à travers le temps est illustré par le 'bateau de Thésée' rapporté par Plutarque ?",
    answers: [
      "Le problème de l'identité des jumeaux.",
      "Le problème de savoir si un objet qui a toutes ses parties remplacées une à une reste le même objet.",
      "Le problème de l'identité entre l'original et la copie parfaite."
    ],
    correct: 2,
    explanation: `Le paradoxe du bateau de Thésée est une énigme métaphysique classique sur l'identité dans le temps. Les Athéniens conservent le navire de Thésée en remplaçant au fur et à mesure les planches pourries par des neuves. Quand toutes les planches ont été changées, est-ce encore le même bateau ? Si l'on reconstruit un bateau avec les anciennes planches, lequel est le 'vrai' ? Ce paradoxe s'applique à l'homme : nos cellules se renouvellent constamment. Qu'est-ce qui fait que nous restons la même personne ? La 'forme' ? La continuité psychologique ? La mémoire ? Ce problème met en question l'idée d'une identité substantielle immuable. Exemple : Notre corps se renouvelle presque entièrement en quelques années ; pourtant, nous nous considérons comme la même personne, ce qui suggère que l'identité ne réside pas dans la matière mais dans une forme ou une continuité de conscience.`
  },
  // Question n°20
  {
    question: "Comment, selon le cours, la littérature romantique utilise-t-elle le 'je' dans des récits fictionnels ?",
    answers: [
      "Pour affirmer l'identité stable et glorieuse de l'auteur.",
      "Pour 'métamorphoser' l'auteur à bon compte, en projetant dans un personnage fictionnel ses tourments et ses interrogations intimes.",
      "Pour éviter tout engagement personnel et se cacher derrière un masque."
    ],
    correct: 2,
    explanation: `Le romantisme opère un brouillage des frontières entre l'auteur et son personnage. Les écrivains romantiques, souvent tourmentés (Musset, Chateaubriand), utilisent le 'je' fictionnel non pour se dissimuler, mais pour explorer et exprimer leur propre sensibilité de manière démultipliée. Le 'je' du roman ou du drame devient un double, un alter ego qui vit des passions extrêmes, des doutes métaphysiques, des mélancolies que l'auteur ressent. Cela permet une 'métamorphose à bon compte' : l'auteur se projette et se transforme littérairement sans avoir à subir les conséquences réelles des actions de son héros. Exemple : Dans 'La Confession d'un enfant du siècle', le 'je' du narrateur est un mélange du vécu de Musset et d'une construction romanesque, lui permettant d'analyser le 'mal du siècle' de sa génération.`
  },
  // Question n°21
  {
    question: "Dans l'exemple du 'couteau de saint Hubert', que met en lumière le cours sur la notion d'identité ?",
    answers: [
      "La supériorité de la foi sur la raison dans la définition de l'identité.",
      "Que l'identité d'un objet (ou d'une personne) peut être préservée par la croyance et la tradition, indépendamment des changements matériels complets.",
      "L'importance de l'artisanat dans la préservation du patrimoine."
    ],
    correct: 2,
    explanation: `Le 'couteau de saint Hubert' est un objet de dévotion dont toutes les pièces ont été remplacées au fil des siècles. Pourtant, pour les croyants, il reste le 'vrai' couteau du saint. Cet exemple, parallèle au bateau de Thésée, montre que l'identité n'est pas une propriété purement matérielle ou objective. Elle peut être conférée ou maintenue par des facteurs symboliques, narratifs ou sociaux : la croyance collective, le récit qui relie l'objet présent à son origine, la fonction qu'on lui attribue. L'identité est aussi une construction sociale et culturelle. Exemple : Les reliques religieuses, même d'authenticité douteuse, conservent leur identité et leur pouvoir sacré aux yeux des fidèles grâce à la tradition et à la foi.`
  },
  // Question n°22
  {
    question: "Quelle affirmation de Kant, dans les 'Fondements de la métaphysique des mœurs', définit le 'soi authentique' de l'homme ?",
    answers: [
      "L'homme est véritablement lui-même quand il suit ses désirs naturels.",
      "L'homme est véritablement lui-même (son 'soi') en tant qu'intelligence appartenant au monde intelligible, soumise aux lois de la raison pure, et non en tant qu'homme phénoménal soumis à la sensibilité.",
      "L'homme est véritablement lui-même dans ses relations affectives avec autrui."
    ],
    correct: 2,
    explanation: `Kant opère une distinction fondamentale dans la constitution de l'être humain. En tant qu'être sensible (phénomène), l'homme est soumis aux désirs, aux inclinations, aux lois de la nature. Mais en tant qu'être raisonnable (noumène), il appartient au 'monde intelligible' et est capable d'autonomie, c'est-à-dire de se donner à lui-même la loi morale par la raison. C'est dans cet exercice de la raison pratique, lorsqu'il agit par devoir et non par inclination, que l'homme accède à son 'soi authentique', à sa véritable liberté et dignité. Ce 'soi' est le fondement de la responsabilité morale. Exemple : Lorsque je résiste à un mensonge profitable par simple respect du principe moral 'tu ne mentiras pas', j'agis en tant qu'être raisonnable et j'accède, selon Kant, à mon 'vrai moi', par-delà mes intérêts sensibles.`
  },
  // Question n°23
  {
    question: "Selon Hegel, cité dans le cours, pourquoi une violence faite à mon corps est-elle une violence faite à 'moi' ?",
    answers: [
      "Parce que le corps est une propriété du moi, au même titre qu'une maison.",
      "Parce que, dans l'existence concrète, je ne suis pas un pur esprit logé dans un corps comme un pilote dans son navire ; je suis immédiatement présent pour autrui dans mon corps sensible. Une atteinte à lui m'atteint directement.",
      "Parce que le corps abrite l'âme immortelle."
    ],
    correct: 2,
    explanation: `Hegel critique la conception cartésienne (et plus largement chrétienne) d'une âme simplement 'logée' dans un corps. Pour lui, dans l'existence sociale et juridique, l'individu n'est pas séparable de son corps. Je suis immédiatement présent pour les autres en tant qu'être corporel et sensible. Par conséquent, une violence physique contre mon corps (une agression, un viol) n'est pas une simple atteinte à un objet extérieur, mais une violence faite à ma personne même, à ma liberté incarnée. Le droit doit protéger le corps car il est l'existence même de la liberté individuelle dans le monde. Exemple : La qualification juridique de 'violences' ou de 'viol' comme atteintes à l'intégrité de la personne, et non simplement au corps, repose sur cette idée hégélienne de l'unité de la personne et de son corps.`
  },
  // Question n°24
  {
    question: "Quelle est la thèse de John Locke sur l'identité personnelle, évoquée à travers l'exemple du chêne ?",
    answers: [
      "L'identité personnelle réside dans la substance immatérielle de l'âme.",
      "L'identité personnelle réside dans la continuité de la conscience et de la mémoire : c'est le même homme parce qu'il a conscience d'être le même.",
      "L'identité personnelle n'existe pas ; seul le changement est réel."
    ],
    correct: 2,
    explanation: `Locke, dans l''Essai sur l'entendement humain', propose un critère psychologique et non métaphysique de l'identité personnelle. Un chêne qui grandit et est taillé reste le même chêne par continuité de son organisation vitale. De même, pour une personne, ce qui fait son identité à travers le temps n'est pas une substance immatérielle, mais l'étendue de sa conscience rétrospective. Je suis la même personne que celui qui a vécu tel événement dans mon passé si, et seulement si, je peux me souvenir d'avoir vécu cet événement 'de l'intérieur'. La mémoire est le fil qui tisse l'identité personnelle. Exemple : Un amnésique qui a perdu tous ses souvenirs peut avoir le même corps (identité de l'homme), mais on peut douter qu'il soit la même 'personne' au sens lockéien.`
  },
  // Question n°25
  {
    question: "Dans 'Le Horla' de Maupassant, quel symptôme manifeste la dépossession de soi du narrateur ?",
    answers: [
      "Il entend des voix qui lui ordonnent de faire du mal.",
      "Il ne voit plus son reflet dans le miroir, signe qu'un autre (le Horla) a pris possession de son corps et de son identité.",
      "Il se transforme physiquement en une créature monstrueuse."
    ],
    correct: 2,
    explanation: `'Le Horla' est un récit fantastique qui explore la dissolution du moi. Le narrateur, hanté par une présence invisible qu'il nomme le Horla, sombre peu à peu dans la folie. Le point culminant de cette aliénation est la scène du miroir : un matin, il ne se voit plus réfléchi. Cet événement symbolise la perte de sa propre identité et de la maîtrise de soi. Le Horla, être supérieur et parasitaire, aurait pris possession de son corps et de son esprit. Le miroir, instrument traditionnel de la conscience de soi ('je me vois, donc je suis'), devient ici l'instrument de la révélation de la perte de soi. Exemple : Cette scène préfigure les thèmes de la schizophrénie et du dédoublement de la personnalité, où le sujet ne se reconnaît plus comme étant lui-même.`
  },
  // Question n°26
  {
    question: "Que signifie, selon le cours, l'expression 'autrui est un alter ego' ?",
    answers: [
      "Autrui est mon ennemi (alter = autre, ego = moi).",
      "Autrui est un autre moi, un sujet de conscience semblable à moi, mais radicalement distinct et séparé.",
      "Autrui est le miroir parfait dans lequel je me reconnais totalement."
    ],
    correct: 2,
    explanation: `La formule 'alter ego' (un autre moi) résume le paradoxe de la relation à autrui en philosophie. D'un côté, autrui est comme moi : un centre de conscience, de volonté, de sensations, un sujet. De l'autre, il est radicalement autre, séparé, opaque. Il n'est ni un simple objet que je peux manipuler, ni un pur sujet transparent. Cette altérité fondamentale d'autrui est à la fois ce qui me confirme dans mon existence (son regard me constitue) et ce qui peut me menacer (il peut me réduire à l'état d'objet). Le problème philosophique est de penser cette relation entre deux libertés. Exemple : Lorsque je croise le regard d'un inconnu, j'ai immédiatement conscience qu'il est un être conscient comme moi (alter ego), mais je ne peux pas accéder à son monde intérieur (il est autre).`
  },
  // Question n°27
  {
    question: "Quelle est la fonction du 'surmoi' (Über-Ich) dans la seconde topique freudienne ?",
    answers: [
      "Il représente les pulsions de vie et de plaisir.",
      "Il incarne l'idéal du moi, la conscience morale, les interdits parentaux et sociaux internalisés ; il juge et punit le moi.",
      "Il gère les relations avec la réalité extérieure."
    ],
    correct: 2,
    explanation: `Le surmoi est l'instance critique et normative de la psyché. Il se forme par l'intériorisation (introjection) des interdits, des exigences et des idéaux des parents, puis de la société. Il fonctionne comme un juge sévère à l'égard du moi : il lui impose des standards de comportement, le récompense par le sentiment de fierté lorsqu'il les suit, et le punit par des sentiments de culpabilité, d'infériorité ou d'angoisse lorsqu'il y déroge. Le surmoi est souvent en conflit avec les demandes pulsionnelles du ça, ce qui met le moi en difficulté. Exemple : Le sentiment de honte après avoir menti, même si personne ne le sait, est une manifestation du surmoi qui punit le moi pour avoir transgressé un interdit moral internalisé.`
  },
  // Question n°28
  {
    question: "Comment Nietzsche, dans 'Aurore', caractérise-t-il notre connaissance des instincts qui nous constituent ?",
    answers: [
      "Elle est complète et scientifique.",
      "Elle est totalement incomplète ; nous ignorons leur nombre, leur force, leurs interactions et leurs lois.",
      "Elle est le fruit d'une introspection rigoureuse et méthodique."
    ],
    correct: 2,
    explanation: `Nietzsche s'inscrit en faux contre l'idée d'une transparence du sujet à lui-même. Il affirme avec force notre ignorance fondamentale de ce qui nous meut. Les instincts, ces forces qui nous animent, nous sont largement inconnus : nous ne pouvons nommer que 'les plus grossiers', et leur dynamique interne (flux, reflux, nutrition) nous échappe totalement. Cette méconnaissance est structurelle ; le 'moi' conscient n'est que la partie émergée d'un iceberg de forces obscures. Cela remet en cause l'idée même d'un 'moi' autonome et maître de ses actes. Exemple : Nous expliquons souvent nos actions par des motifs conscients ('j'ai fait cela par générosité'), alors que, selon Nietzsche, des instincts bien plus complexes et cachés (volonté de puissance, ressentiment) sont à l'œuvre.`
  },
  // Question n°29
  {
    question: "Que désigne le 'soi' (Selbst) dans la psychologie analytique de Carl Gustav Jung ?",
    answers: [
      "Le moi conscient, identique à l'ego.",
      "L'ensemble total de la psyché, consciente et inconsciente, représentant la totalité et l'unité ultime de la personne, vers laquelle tend le processus d'individuation.",
      "L'inconscient personnel refoulé."
    ],
    correct: 2,
    explanation: `Pour Jung, le 'Soi' (avec une majuscule) est un concept central et distinct du 'moi' (l'ego conscient). Le Soi est l'archétype de la totalité psychique, il englobe à la fois le conscient et l'inconscient (personnel et collectif). Il représente le centre organisateur et unifiant de la personnalité, souvent symbolisé par des figures comme le cercle, le mandala ou le sage. Le but de la psychothérapie jungienne est l''individuation', un processus par lequel le moi conscient se met en relation avec le Soi, permettant une réalisation plus complète et harmonieuse de la personne. Le Soi dépasse et inclut le moi. Exemple : Dans les rêves, le Soi peut apparaître sous la forme d'un personnage central, sage et puissant, qui guide le rêveur.`
  },
  // Question n°30
  {
    question: "Quelle est la position de Descartes sur la relation entre l'âme (le moi) et le corps, selon le texte des 'Méditations' cité ?",
    answers: [
      "Ils sont une seule et même substance (monisme).",
      "L'âme est simplement 'logée' dans le corps comme un pilote en son navire ; ils sont deux substances totalement indépendantes.",
      "L'âme et le corps sont 'très étroitement conjoints' pour former un tout, mais ils restent deux substances distinctes (l'une pensante, l'autre étendue) que l'on peut concevoir clairement l'une sans l'autre."
    ],
    correct: 3,
    explanation: `Descartes est le père du dualisme substance/esprit-corps. Dans la Sixième Méditation, il affirme que l'âme (res cogitans) et le corps (res extensa) sont deux substances radicalement différentes par leur essence (pensée vs étendue). Pourtant, l'expérience montre qu'ils sont 'très étroitement conjoints' dans l'homme. Cette union est si intime que les passions, la douleur, la faim sont des 'façons confuses de penser' provenant de ce mélange. Ainsi, bien que distincts par l'entendement, ils forment dans l'existence une unité composée. La célèbre métaphore du pilote et du navire est donc imparfaite, car le pilote ne ressent pas directement les avaries de son navire, alors que l'âme ressent immédiatement les affections du corps. Exemple : Quand je me pince le bras, ce n'est pas mon âme qui le 'voit' de l'extérieur comme un pilote verrait une avarie ; je ressens immédiatement et confusément la douleur 'en' moi.`
  },
  // Question n°31
  {
    question: "Selon le cours, quel est le risque majeur pour le moi s'il est trop dominé par le 'surmoi' ?",
    answers: [
      "La perversion (débridement des pulsions).",
      "La névrose (bridage excessif, effacement du moi devant les autres).",
      "La psychose (rupture avec la réalité)."
    ],
    correct: 2,
    explanation: `Le cours présente un équilibre fragile entre les instances freudiennes. Si le moi est trop faible et dominé par le surmoi, les pulsions du ça sont excessivement refoulées et contrôlées. Le moi, écrasé par des exigences morales trop rigides, une culpabilité omniprésente et un idéal du moi inatteignable, s'efface. L'individu devient alors névrosé : il peut développer des symptômes (phobies, obsessions, anxiété) qui sont l'expression déguisée des conflits internes, et il a tendance à se soumettre aux autres, à manquer d'affirmation de soi. Exemple : Une personne souffrant d'un perfectionnisme paralysant, qui se sent constamment coupable de ne pas être à la hauteur, illustre un surmoi tyrannique dominant un moi affaibli.`
  },
  // Question n°32
  {
    question: "Que signifie l'expression 'l'autre n'est donc ni un sujet ni un objet mais un projet', dans la conclusion de la séance 2 ?",
    answers: [
      "Autrui est un être incomplet qu'il faut éduquer et transformer.",
      "La relation à autrui est un projet politique de construction d'une société idéale.",
      "Dans la relation à moi-même, 'l'autre' (comme partie de moi ou comme miroir) n'est pas une donnée fixe, mais une possibilité à explorer, une existence à construire par l'écriture, la réflexion ou l'action."
    ],
    correct: 3,
    explanation: `Cette formule synthétise une idée forte de la séquence. L''autre' dont il est question ici peut être compris de deux façons : 1) l'altérité en moi-même (l'autre que je suis, l'inconscient, l'étranger familier) ; 2) autrui comme médiateur de ma connaissance de moi. Dans les deux cas, cet 'autre' n'est pas une entité statique (un sujet déjà là comme moi, ou un objet à manipuler). Il est un 'projet', c'est-à-dire une dynamique, une ouverture. Se connaître, c'est se métamorphoser en explorant ces altérités ; se construire, c'est se projeter dans une relation avec autrui qui me transforme. L'identité est un devenir, pas un état. Exemple : Le journal intime de Michelet, où il écrit à son 'moi', montre cette tentative de faire de son propre moi un 'projet' à découvrir et à construire par l'écriture.`
  },
  // Question n°33
  {
    question: "Quel est le sens du poème d'Antonio Machado cité en conclusion : 'Voyageur, il n'y a pas de chemin, le chemin se fait en marchant' ?",
    answers: [
      "Une invitation à l'errance et à l'aventure physique.",
      "Une métaphore de la quête du moi : le 'moi' n'est pas un trésor préexistant à découvrir, il se construit dans l'action même de la recherche, dans le parcours de la vie.",
      "Une critique de la planification et de la raison."
    ],
    correct: 2,
    explanation: `Cette citation célèbre de Machado résume une conception existentialiste et pragmatique de l'identité. Elle s'oppose à l'idée que le 'moi' serait une essence prédéfinie, un chemin tout tracé qu'il suffirait de suivre. Au contraire, il n'y a pas de chemin préexistant. Le chemin – c'est-à-dire l'identité, la vie singulière – n'apparaît qu'à mesure que l'on avance, qu'on agit, qu'on fait des choix. Il se 'fait en marchant'. L'identité est une création continue, un processus qui n'a de sens que rétrospectivement ('quand tu regardes en arrière, tu vois le sentier'). Exemple : Un adolescent ne sait pas qui il sera ; ce n'est qu'en vivant, en choisissant des études, des amours, des engagements, qu'il construit peu à peu le 'chemin' de son identité adulte.`
  },
  // Question n°34
  {
    question: "Pourquoi, selon Saint Augustin dans ses 'Confessions', est-il devenu 'une énigme' pour lui-même ?",
    answers: [
      "Parce qu'il a commis des péchés trop graves.",
      "Parce que la relation du sujet à lui-même est opaque ; il y a dans le sujet une part d'inconnu, d'inconnaissable, qui le rend mystérieux à ses propres yeux.",
      "Parce qu'il a perdu la mémoire de son passé."
    ],
    correct: 2,
    explanation: `Augustin, bien avant la psychanalyse, exprime avec une force rare l'opacité fondamentale du moi à lui-même. Dans une prière à Dieu, il s'exclame : 'je suis devenu pour moi-même une énigme' (mihi quaestio factus sum). Cette phrase marque la découverte que la conscience n'est pas une transparence totale. Le sujet qui cherche à se connaître se heurte à des profondeurs obscures, à des contradictions, à des motivations cachées. La quête de soi bute sur un mystère intérieur. Cette intuition augustinienne préfigure toutes les interrogations modernes sur l'inconscient et les limites de l'introspection. Exemple : Le sentiment de ne pas comprendre pourquoi on agit parfois à l'encontre de ses propres principes ou de ses intérêts bien compris illustre cette 'énigme' de soi-même.`
  },
  // Question n°35
  {
    question: "Dans l'extrait de 'L'Étrange cas du Dr Jekyll et de Mr Hyde', comment le Dr Jekyll décrit-il sa double nature avant la métamorphose ?",
    answers: [
      "Comme une hypocrisie totale : il feignait d'être bon alors qu'il était mauvais.",
      "Comme une 'double conscience' où ses deux facettes (le bien et le mal) étaient également sincères ; il était 'fondamentalement toutes les deux'.",
      "Comme une maladie mentale où il était possédé par un démon."
    ],
    correct: 2,
    explanation: `La confession du Dr Jekyll est remarquable par sa profondeur psychologique. Il n'était pas un hypocrite au sens ordinaire. Il affirme que ses deux faces – l'homme vertueux et public, et l'homme plongé dans le vice en secret – étaient 'également d'une sincérité parfaite'. Il était authentiquement l'un et l'autre. Cela signifie que la dualité n'était pas entre un vrai moi et un faux-semblant, mais entre deux tendances constitutives de sa personne, également réelles. Cette description rejoint l'idée freudienne de conflit intrapsychique entre des instances opposées (surmoi moral vs pulsions du ça). Exemple : Une personne peut être un parent aimant et dévoué, et en même temps éprouver, dans certaines circonstances, des pulsions de colère ou de rejet qu'elle juge honteuses, sans que l'une des deux facettes ne soit moins 'réelle'.`
  },
  // Question n°36
  {
    question: "Quelle est la 'superstition des logiciens' que Nietzsche dénonce dans 'Par-delà le bien et le mal' ?",
    answers: [
      "Croire que la logique peut tout expliquer.",
      "Croire que s'il y a une pensée, il doit y avoir un 'je' (un sujet) qui en est l'auteur, comme le postule le 'je pense' cartésien.",
      "Croire que les mathématiques sont le langage de la nature."
    ],
    correct: 2,
    explanation: `Nietzsche utilise l'expression 'superstition des logiciens' pour tourner en dérision une habitude de pensée qu'il juge naïve et erronée. Cette superstition consiste à déduire de la structure grammaticale de nos phrases (sujet + verbe + complément) une vérité métaphysique. Parce que nous disons 'je pense', 'je veux', nous en concluons qu'il existe une entité substantielle, le 'je', qui est la cause de la pensée ou de la volonté. Pour Nietzsche, c'est une inversion : la pensée ou la volonté sont des processus qui arrivent ; le 'je' n'en est que l'effet secondaire, une simplification linguistique commode. Exemple : Dire 'l'éclair brille' ne signifie pas qu'il y a un sujet ('l'éclair') qui produit l'action ('briller') ; c'est un événement unique. De même, 'ça pense' serait plus juste que 'je pense'.`
  },
  // Question n°37
  {
    question: "Comment le cours définit-il le 'préconscient' dans la première topique freudienne ?",
    answers: [
      "La partie de l'inconscient qui est sur le point de devenir consciente.",
      "Un τόπος (lieu) intermédiaire, un 'sas' qui contient des éléments (souvenirs, connaissances) qui ne sont pas actuellement conscients, mais peuvent le devenir sans résistance particulière.",
      "La conscience immédiate des perceptions sensorielles."
    ],
    correct: 2,
    explanation: `Le préconscient est un concept essentiel dans le premier modèle freudien. Il se situe entre l'inconscient (refoulé, inaccessible) et le conscient. Il contient tout le matériel psychique qui n'est pas présent à l'esprit à un instant donné, mais qui est facilement rappelable : nos souvenirs disponibles, nos connaissances, nos compétences acquises. La frontière entre préconscient et conscient est poreuse et fluide. En revanche, la frontière entre inconscient et préconscient est gardée par la 'censure', qui bloque l'accès des désirs refoulés. Exemple : Votre numéro de téléphone n'est pas constamment dans votre conscience, mais il est dans votre préconscient ; vous pouvez le retrouver et le 'rendre conscient' sans effort. En revanche, un souvenir traumatique refoulé est dans l'inconscient et n'y a pas accès.`
  },
  // Question n°38
  {
    question: "Quel est l'argument de Leibniz pour dépasser le dualisme âme/corps cartésien, évoqué dans le cours ?",
    answers: [
      "Il nie l'existence de l'âme et affirme un matérialisme strict.",
      "Il propose de voir le corps comme un simple agrégat de parties, sans unité propre.",
      "Il insiste sur l'unité organique du corps (comme un tout changeant) et considère que l'âme est la manifestation d'une substance (la monade) qui se sent exister, plutôt qu'une substance pensante séparée."
    ],
    correct: 3,
    explanation: `Leibniz critique la conception cartésienne d'un corps-machine et d'une âme-pensée radicalement hétérogènes. Pour lui, toute substance (qu'il appelle 'monade') est une unité indivisible et dynamique. Le corps humain n'est pas une machine, mais un organisme vivant, une totalité unifiée. L''âme' n'est pas une substance pensante étrangère à ce corps, mais la manifestation, à un certain degré de clarté, d'une monade dominante (la monade 'âme') qui exprime l'ensemble du corps. L'âme a des 'petites perceptions' inconscientes du corps. Ainsi, l'unité de l'homme est préservée, et la conscience n'est qu'un état particulier, plus clair, de la vie de la monade. Exemple : Pour Leibniz, le sentiment de soif est une perception confuse de l'état du corps par la monade âme, et non l'effet d'un mécanisme corporel sur une substance étrangère.`
  },
  // Question n°39
  {
    question: "Que signifie, selon le cours, la métaphore du 'pilote en son navire' employée par Descartes pour décrire la relation âme/corps ?",
    answers: [
      "Une description parfaite et définitive de cette relation.",
      "Une métaphore imparfaite que Descartes lui-même nuance, car le pilote ne ressent pas directement les avaries du navire, alors que l'âme ressent immédiatement les affections du corps.",
      "La preuve que le corps est un simple instrument de l'âme, totalement passif."
    ],
    correct: 2,
    explanation: `Descartes utilise cette métaphore (âme = pilote, corps = navire) pour illustrer le dualisme : deux substances distinctes. Cependant, le cours souligne que Descartes reconnaît lui-même les limites de cette image. Dans la Sixième Méditation, il note que si l'âme n'était qu'un pilote, elle ne ressentirait pas la douleur quand le corps est blessé ; elle le constaterait intellectuellement, comme un pilote voit une avarie sur son navire. Or, nous ressentons immédiatement la douleur, la faim, etc., ce qui prouve une union 'très étroite' et intime, produisant des 'façons confuses de penser'. La métaphore est donc utile pour penser la distinction, mais inadéquate pour penser l'union réelle. Exemple : Un pilote a froid si la cabine est mal chauffée, mais il n'a pas 'mal' si une pièce du moteur casse. L'âme, elle, a directement 'mal' à son corps.`
  },
  // Question n°40
  {
    question: "Quelle est la fonction de l'autobiographie selon Rousseau, telle qu'elle apparaît dans le préambule des 'Confessions' ?",
    answers: [
      "Se justifier et se disculper aux yeux de ses contemporains.",
      "Montrer 'un homme dans toute la vérité de la nature', c'est-à-dire lui-même, avec une sincérité totale, pour se présenter tel qu'il fut devant le 'souverain juge'.",
      "Écrire un roman déguisé sous la forme de mémoires."
    ],
    correct: 2,
    explanation: `Rousseau assigne à son autobiographie une ambition sans précédent et presque sacrée. Il ne s'agit pas d'une apologie mondaine ou d'un exercice littéraire. Il prétend à une révélation intégrale de soi : 'Je veux montrer à mes semblables un homme dans toute la vérité de la nature ; et cet homme ce sera moi.' Il jure de dire 'le bien et le mal avec la même franchise', sans rien cacher de mauvais, ni ajouter de bon. Le tribunal ultime n'est pas l'opinion publique, mais Dieu lui-même, devant lequel il se présentera, 'ce livre à la main'. L'autobiographie devient ainsi un acte de vérité existentiel et un jugement dernier de soi par soi. Exemple : Rousseau raconte sans fard des épisodes honteux, comme le vol d'un ruban et l'accusation d'une servante, ce qui était révolutionnaire pour l'époque.`
  },
  // Question n°41
  {
    question: "Quel est le risque majeur pour le moi s'il est trop dominé par le 'ça' ?",
    answers: [
      "La névrose.",
      "La perversion (débridement des pulsions sans frein moral).",
      "La mélancolie romantique."
    ],
    correct: 2,
    explanation: `Toujours selon le schéma freudien présenté, si le moi est trop faible et laisse les pulsions du ça s'exprimer librement, sans la régulation du surmoi et de la réalité, l'individu tombe dans la perversion. Les désirs primitifs, agressifs ou sexuels, s'expriment sans retenue ni considération pour autrui ou pour les normes sociales. Le moi, débordé, ne parvient plus à jouer son rôle de médiateur. L'individu cherche alors la satisfaction immédiate de ses pulsions, au mépris des conséquences. Exemple : Un criminel qui agit sous l'emprise d'une pulsion violente sans éprouver de remords illustre (de manière caricaturale) une domination du ça sur un moi et un surmoi défaillants.`
  },
  // Question n°42
  {
    question: "Selon la conception kantienne de la conscience de soi, que permet la synthèse du 'Je pense' ?",
    answers: [
      "De découvrir la nature substantielle de l'âme.",
      "D'unifier la diversité des représentations et des 'moi' empiriques en une conscience unique et identique : le 'Je' transcendantal.",
      "De prouver l'existence de Dieu."
    ],
    correct: 2,
    explanation: `Pour Kant, le 'Je pense' n'est pas une intuition qui me donnerait accès à une substance (l'âme). C'est une 'aperception pure' ou 'transcendantale'. C'est la fonction logique et nécessaire qui accompagne toutes mes représentations et les rend 'miennes'. Quand je dis 'je pense ceci', 'je sens cela', le 'je' est le même. Il opère une synthèse : il rassemble la diversité changeante de mes expériences (les différents 'moi' empiriques) sous l'unité d'une même conscience. Cette unité formelle est la condition de toute expérience cohérente. Le 'Je' kantien n'est donc pas un objet de connaissance, mais la condition subjective de toute connaissance. Exemple : Quand je relie la sensation du froid, la vue de la neige et le souvenir d'une précédente tempête, c'est le même 'Je' qui effectue ce lien et fait de ces perceptions une expérience unifiée.`
  },
  // Question n°43
  {
    question: "Comment Nietzsche, dans 'Le Gai Savoir', remet-il en cause l'idée de 'santé' de l'âme ?",
    answers: [
      "En affirmant que la santé est un état purement physique, sans rapport avec l'âme.",
      "En soutenant que 'la vertu est la santé de l'âme' est une formule médicale erronée.",
      "En questionnant si notre 'soif de connaissance' n'aurait pas besoin de la maladie de l'âme autant que de la santé, et si la volonté exclusive de santé n'est pas un préjugé."
    ],
    correct: 3,
    explanation: `Nietzsche procède à une subversion des valeurs traditionnelles, y compris celle de la santé mentale. Il commence par corriger la formule morale 'la vertu est la santé de l'âme' en 'ta vertu est la santé de ton âme', soulignant que la santé est relative aux buts et valeurs de chacun. Puis il pousse plus loin : et si la maladie, les états 'morbides' (comme la mélancolie, l'angoisse, la folie) étaient aussi nécessaires au développement de certaines 'vertus', en particulier la soif de connaissance et la connaissance de soi ? Vouloir exclusivement la santé pourrait être un signe de 'barbarie' et de médiocrité. Exemple : Pour Nietzsche, les grandes créations artistiques ou philosophiques sont souvent le fruit d'âmes tourmentées, 'malades' au sens conventionnel, mais d'une richesse et d'une profondeur inouïes.`
  },
  // Question n°44
  {
    question: "Que signifie, selon le cours, la formule de Jules Michelet s'adressant à lui-même dans son 'Journal' : 'Profitons au moins de ce moment de repos ; écoutez-moi' ?",
    answers: [
      "Une simple note pour ne pas oublier une idée.",
      "Une illustration de la distance que l'on peut prendre avec soi-même : le 'je' qui écrit s'adresse à son 'moi' comme à un autre, pour mieux se connaître et se construire.",
      "Un signe de schizophrénie."
    ],
    correct: 2,
    explanation: `Cette citation de Michelet est un exemple frappant d'écriture de l'intime où le sujet se dédouble. Le 'je' qui prend la plume ne coïncide pas simplement avec le 'moi' quotidien. Il l'interpelle ('mon cher moi'), lui parle ('écoutez-moi'), cherche à 'faire connaissance' avec lui. L'écriture du journal devient un espace où le sujet peut prendre du recul, se regarder vivre, dialoguer avec lui-même. Cette mise à distance est un moyen de construction et d'exploration de soi. Elle montre que le 'moi' peut être à la fois sujet et objet de la pensée, et que cette relation n'est pas une donnée, mais un travail. Exemple : Tenir un journal intime est souvent une manière de se parler à soi-même pour clarifier ses pensées et ses sentiments, comme si on se confiait à un ami.`
  },
  // Question n°45
  {
    question: "Quelle est la conception du moi défendue par Alain, d'après le cours ?",
    answers: [
      "Un moi éclaté, dominé par l'inconscient.",
      "Un moi substantiel, identique à l'âme cartésienne.",
      "Un moi maître de lui, identifié à la volonté et à la conscience, qui doit refuser les excuses de l'inconscient pour assumer sa liberté et sa responsabilité."
    ],
    correct: 3,
    explanation: `Alain incarne une philosophie rationaliste et stoïcienne. Pour lui, le moi, c'est la volonté et la conscience. Il rejette vigoureusement l'inconscient freudien qu'il voit comme une 'idolâtrie du corps' et une machine à produire des excuses. Croire à l'inconscient, c'est se décharger de sa responsabilité ('c'est plus fort que moi'). Alain défend l'idée que l'homme est toujours capable, par un effort de volonté et d'attention, de reprendre le contrôle sur ses pensées, ses émotions et ses actes. Le moi n'est pas un champ de bataille de forces obscures, mais le siège de la liberté et de la décision. Exemple : Pour Alain, un accès de colère n'est pas l'explosion d'une pulsion inconsciente, mais le résultat d'un manque de contrôle volontaire sur soi ; on peut et on doit apprendre à se maîtriser.`
  },
  // Question n°46
  {
    question: "En quoi le personnage de M. Hyde est-il, selon le Dr Jekyll, 'plus intégral et plus un' que le Dr Jekyll lui-même ?",
    answers: [
      "Parce qu'il est plus intelligent.",
      "Parce qu'il est libéré de la lutte intérieure ; il incarne de manière pure et sans conflit le mal, alors que Jekyll est un être composite, partagé entre le bien et le mal.",
      "Parce qu'il est physiquement plus fort."
    ],
    correct: 2,
    explanation: `Cette affirmation paradoxale est au cœur de la nouvelle de Stevenson. Le Dr Jekyll, l'homme respectable, est un être divisé, tiraillé en permanence entre ses aspirations morales et ses désirs honteux. Son moi est un champ de bataille. M. Hyde, en revanche, est la matérialisation de la seule partie mauvaise, libérée de tout frein moral. Il est donc 'plus intégral' : il ne connaît pas la division, le remords, le conflit. Il est 'un', tout entier voué à la satisfaction de ses pulsions. Cette 'unité' monstrueuse est présentée comme plus 'naturelle et humaine' à Jekyll, car elle est l'expression sans entrave d'une partie de lui-même. Exemple : Cette idée rejoint la notion romantique du 'monstre' comme être plus authentique car non socialisé, non civilisé, même si cette authenticité est destructrice.`
  },
  // Question n°47
  {
    question: "Quelle est la position de Sartre sur le rapport du 'moi' à ses propres attitudes (comme l'attention en classe) ?",
    answers: [
      "Le moi coïncide parfaitement avec ses attitudes ; si je joue à être attentif, je suis attentif.",
      "Le moi 'échappe' toujours à l'être ; je ne suis jamais pleinement aucune de mes attitudes, je joue toujours plus ou moins à les être.",
      "Le moi est déterminé par son inconscient, donc ses attitudes ne sont pas libres."
    ],
    correct: 2,
    explanation: `Sartre développe une phénoménologie de la conscience. Pour lui, la conscience est toujours 'conscience de quelque chose' et, par là même, elle n'est jamais identique à son objet. Appliqué au moi : quand j'adopte une attitude (être attentif, être courageux, être triste), je ne suis pas cette attitude comme la boîte d'allumettes est sur la table. Il y a toujours une distance, un jeu. 'Le beau parleur est celui qui joue à parler'. Même dans l'attitude la plus sincère, je ne coïncide jamais totalement avec elle ; je peux toujours en prendre conscience, la modifier, y échapper. Cette non-coïncidence est la liberté même de la conscience. Exemple : Lors d'un enterrement, je peux 'jouer' le rôle du parent triste, tout en étant conscient de jouer ce rôle, sans forcément éprouver une tristesse pure et simple.`
  },
  // Question n°48
  {
    question: "Quel est le rôle de l'hypnose dans la théorie freudienne des débuts, évoquée dans le cours ?",
    answers: [
      "Un simple outil de spectacle.",
      "Un moyen thérapeutique de suggérer directement la guérison au patient.",
      "Un moyen de rendre poreuse la séparation entre conscience et inconscient, permettant d'accéder à des souvenirs traumatiques refoulés ('double conscience')."
    ],
    correct: 3,
    explanation: `Dans ses premiers travaux avec Breuer (études sur l'hystérie), Freud utilisait l'hypnose. Ils avaient observé que sous hypnose, les patients hystériques pouvaient se souvenir de traumatismes psychiques oubliés à l'état de veille, et que l'expression de ce souvenir (avec l'émotion associée) pouvait faire disparaître le symptôme. Cela les a conduits à l'idée d'une 'double conscience' ou d'états 'hypnoïdes' : une partie de la vie psychique, liée au trauma, serait dissociée de la conscience normale. L'hypnose permettait de faire le pont. Freud abandonnera ensuite l'hypnose pour la méthode des associations libres, mais l'idée d'un matériel psychique inaccessible à la conscience volontaire était posée. Exemple : Une patiente souffrant d'une paralysie du bras sans cause organique pouvait, sous hypnose, se rappeler un événement où elle avait voulu frapper quelqu'un mais s'était retenue ; le symptôme disparaissait après ce rappel.`
  },
  // Question n°49
  {
    question: "Que signifie l'expression 'ipséité' (selfhood) chez Paul Ricœur, opposée à la 'mêmeté' ?",
    answers: [
      "L'identité biologique et génétique.",
      "L'identité du 'soi' comme capacité à se maintenir comme le même auteur de ses actes et de ses promesses, impliquant une fidélité à soi-même qui n'est pas une permanence substantielle.",
      "L'identité sociale et les rôles que l'on joue."
    ],
    correct: 2,
    explanation: `Ricœur distingue soigneusement deux types d'identité. La 'mêmeté' (idem) est l'identité du même, la permanence d'un être à travers le temps (comme un rocher). L''ipséité' (ipse) est l'identité du soi, spécifiquement humaine. Elle ne repose pas sur l'immutabilité, mais sur la capacité à tenir ses promesses, à être responsable de ses actes passés et à se projeter dans l'avenir. C'est une identité narrative, construite par le récit que l'on fait de sa vie. Je reste 'moi-même' non parce que je suis substantiellement identique, mais parce que je peux dire 'c'est moi qui ai fait cela' et 'je m'engage à faire cela'. Exemple : Un ami sur lequel on peut toujours compter manifeste une forte ipséité : il est fidèle à lui-même et à sa parole, même si ses goûts ou ses opinions ont pu changer (sa mêmeté évolue).`
  },
  // Question n°50
  {
    question: "Selon le cours, comment la question des personnes transgenres éclaire-t-elle le débat sur l'identité ?",
    answers: [
      "Elle montre que l'identité sexuelle est purement biologique et immuable.",
      "Elle illustre la possibilité d'une dissociation entre l'identité biologique (le corps sexué) et l'identité vécue, psychologique et sociale, remettant en cause une définition purement substantielle ou corporelle du moi.",
      "Elle prouve l'importance des stéréotypes de genre."
    ],
    correct: 2,
    explanation: `L'exemple des personnes transgenres est mobilisé pour montrer la complexité de l'identité. Il révèle qu'il n'y a pas nécessairement coïncidence entre le sexe biologique (corps) et le genre vécu (le sentiment profond d'être un homme, une femme, ou non-binaire). Pour une personne transgenre, son 'moi' authentique, son identité psychologique, ne correspond pas au corps dans lequel elle est née. Cela montre que l'identité personnelle n'est pas réductible à un donné biologique ou anatomique ; elle inclut une dimension psychologique, un vécu, une histoire. La transition (sociale, médicale) vise alors à faire coïncider le corps et l'apparence sociale avec cette identité vécue. Exemple : Cette situation pose des questions philosophiques et juridiques sur ce qui définit l'identité d'une personne : est-ce l'état civil (basé sur le sexe à la naissance) ou le sentiment d'appartenance à un genre ?`
  },
  // Question n°51
  {
    question: "Que signifie, dans le contexte de la séquence, l'expression 'archéologie de la subjectivité' ?",
    answers: [
      "Une étude des civilisations anciennes par des sujets modernes.",
      "Une méthode qui consiste à creuser dans les couches profondes du psychisme (comme l'inconscient) pour retrouver les traces et les fondements oubliés de la construction du moi.",
      "L'analyse des textes philosophiques anciens sur le moi."
    ],
    correct: 2,
    explanation: `L'expression 'archéologie de la subjectivité' évoque une recherche qui ne prend pas le moi comme une donnée évidente, mais qui cherche à en reconstituer la genèse, les strates, les conditions d'émergence. Comme l'archéologue fouille le sol pour trouver les vestiges d'une civilisation, le philosophe ou le psychanalyste 'fouille' la psyché pour retrouver les souvenirs enfouis, les traumatismes fondateurs, les mécanismes inconscients qui ont construit le sujet tel qu'il est. Freud, avec sa méthode de remontée vers les souvenirs d'enfance et les désirs refoulés, pratique une telle archéologie. Exemple : La cure psychanalytique est souvent comparée à un travail archéologique : le patient et l'analyste exhument et réassemblent les fragments d'une histoire personnelle oubliée pour lui donner sens.`
  },
  // Question n°52
  {
    question: "Comment le cours interprète-t-il la phrase de Nietzsche : 'Ô mon frère, derrière tes sentiments et tes pensées se cache un maître puissant, un sage inconnu ; il se nomme toi-même (Selbst). Il habite ton corps, il est ton corps.' ?",
    answers: [
      "Comme une affirmation d'un moi spirituel distinct du corps.",
      "Comme une invitation à identifier le 'soi' véritable non à la conscience réfléchie, mais au corps vivant et à ses instincts, dans une perspective qui renverse le dualisme traditionnel.",
      "Comme une métaphore poétique sans portée philosophique."
    ],
    correct: 2,
    explanation: `Cette citation de 'Ainsi parlait Zarathoustra' résume le renversement nietzschéen. Nietzsche s'adresse à un frère encore englué dans les illusions de la métaphysique (les sentiments, les pensées abstraites). Il lui révèle que son vrai maître, son 'soi' (Selbst) authentique, n'est pas cette conscience réfléchie, mais son corps lui-même, avec sa sagesse propre, ses instincts, ses forces. Le corps n'est pas la prison de l'âme, il est le siège de la vie et de la volonté de puissance. Cette identification du Selbst au corps vise à dépasser le mépris chrétien et philosophique du corps, et à retrouver une unité de l'être. Exemple : Pour Nietzsche, un choix important devrait se faire en 'écoutant' son corps, ses instincts de vie, plutôt qu'en suivant seulement des raisonnements abstraits ou des morales ascétiques.`
  },
  // Question n°53
  {
    question: "Quel est l'enjeu du 'paradoxe du train sans frein' évoqué en marge de l'analyse de 'Lorenzaccio' ?",
    answers: [
      "Illustrer un problème de mécanique ferroviaire.",
      "Poser le problème éthique de l'action dans une situation où toute décision semble immorale : agir (tuer un innocent pour en sauver plusieurs) ou ne pas agir (laisser tous les passagers mourir) ?",
      "Montrer la supériorité de l'action sur la passivité."
    ],
    correct: 2,
    explanation: `Ce paradoxe éthique (parfois appelé 'dilemme du tramway') est évoqué pour éclairer le choix impossible de Lorenzaccio. Dans le paradoxe, un train hors de contrôle va tuer cinq personnes sur la voie. Vous pouvez actionner un aiguillage pour le dévier sur une autre voie où il n'en tuera qu'une. Que faire ? Agir fait de vous le meurtrier d'un innocent. Ne pas agir fait de vous le spectateur passif de la mort de cinq personnes. Lorenzaccio est dans une situation analogue : tuer le tyran Alexandre (action violente et criminelle) pour sauver Florence de la tyrannie, ou ne rien faire et laisser le peuple souffrir. Ce dilemme montre que la métamorphose du moi en 'héros' ou en 'criminel' peut naître d'une situation où les cadres moraux habituels sont impuissants. Exemple : Le cas de Witold Pilecki, qui s'est volontairement fait enfermer à Auschwitz pour y organiser la résistance, illustre un choix héroïque né d'une situation extrême où les moyens conventionnels étaient inopérants.`
  },
  // Question n°54
  {
    question: "Selon la conclusion du cours, pourquoi le 'moi' peut-il être considéré comme une 'construction' ?",
    answers: [
      "Parce qu'il est une illusion pure et simple.",
      "Parce qu'il n'est pas une donnée naturelle ou métaphysique préexistante, mais qu'il se forme et se transforme à travers des processus psychologiques (mémoire, inconscient), narratifs (récit de soi) et sociaux (reconnaissance par autrui).",
      "Parce que le cerveau le construit neuronalement."
    ],
    correct: 2,
    explanation: `La conclusion de la séquence insiste sur l'idée que le moi n'est pas une 'chose' qu'on découvre, mais un processus, une œuvre en perpétuelle élaboration. Il se construit : 1) Psychologiquement : par la mémoire (Locke), par la synthèse des perceptions (Kant), dans le conflit des instances (Freud). 2) Narrativement : par les histoires que nous nous racontons sur nous-mêmes, dans l'autobiographie ou le journal intime (Rousseau, Michelet). 3) Socialement : par le regard et la reconnaissance d'autrui, par l'intériorisation des normes (Durkheim, Sartre). Le moi est donc le résultat dynamique et toujours provisoire de ces multiples constructions. Exemple : Notre identité professionnelle ('je suis médecin') est une construction sociale (diplôme, titre, rôle) que nous avons intériorisée et faite nôtre par un récit personnel (choix d'études, vocation, expériences).`
  },
  // Question n°55
  {
    question: "Quelle est la signification de l'expérience décrite par Montaigne : la perte d'une dent comme analogie de la mort ?",
    answers: [
      "Une simple observation médicale.",
      "Une métaphore pour dire que le vieillard n'est plus qu'une 'moitié' ou un 'quart' d'homme, et que le moi 'fonds et échappe à lui-même' avec le temps, se métamorphosant imperceptiblement jusqu'à disparaître.",
      "Une preuve de la résurrection des corps."
    ],
    correct: 2,
    explanation: `Montaigne, dans une réflexion sur la vieillesse et la mort, utilise l'image concrète de la chute d'une dent. Cette perte partielle, sans douleur, lui semble être le 'terme naturel' de la durée de cette partie de son être. Il en déduit que beaucoup d'autres parties de lui sont déjà 'mortes' ou 'demi-mortes'. La vieillesse est ainsi un processus de décomposition lente, où le moi 'fonds et échappe à lui-même', se dissout peu à peu. La mort finale ne sera alors que l'achèvement de cette lente métamorphose, tuant 'un demi ou un quart d'homme' seulement. Cette vision naturaliste et désenchantée présente le moi comme une entité périssable et évanescente. Exemple : Cette réflexion rejoint l'idée moderne que nous ne sommes pas les mêmes à 20 ans et à 80 ans, et que la personnalité elle-même peut se modifier profondément avec l'âge ou la maladie.`
  },
  // Question n°56
  {
    question: "Quel est le statut du 'ça' (Es) dans la seconde topique freudienne ?",
    answers: [
      "Le siège de la raison et de la perception de la réalité.",
      "Le réservoir des pulsions (de vie et de mort), des désirs refoulés, de l'énergie psychique brute ; il est inconscient et régit par le principe de plaisir.",
      "L'instance morale et idéale."
    ],
    correct: 2,
    explanation: `Le 'ça' est la partie la plus archaïque et la plus obscure de l'appareil psychique. Il est le réservoir de l'énergie pulsionnelle, héritée et propre à chaque individu. Il contient les pulsions de vie (Éros, libido) et de mort (Thanatos). Il fonctionne selon le 'principe de plaisir' : il cherche la satisfaction immédiate et complète des désirs, par n'importe quel moyen, sans égard à la réalité, à la logique, à la morale ou à la sécurité. Le ça est totalement inconscient et ignore le temps. Il est la source de la force qui anime toute la vie psychique, mais une force aveugle et chaotique que le moi doit canaliser. Exemple : Le désir de manger tout le gâteau, de frapper quelqu'un qui nous contrarie, ou de fuir immédiatement une situation dangereuse relève d'impulsions premières du ça.`
  },
  // Question n°57
  {
    question: "En quoi le 'mal du siècle' romantique est-il lié à une certaine conception du moi ?",
    answers: [
      "Il exprime la joie d'un moi libéré des contraintes sociales.",
      "Il traduit le désespoir et la mélancolie d'un moi qui se sent démesuré (aspirant à l'absolu) mais coincé dans un monde médiocre et désenchanté, ce qui le conduit à la passivité ou à l'action destructrice.",
      "Il manifeste la confiance en un moi rationnel et scientifique."
    ],
    correct: 2,
    explanation: `Le 'mal du siècle', caractéristique du héros romantique (René, Oberman, Lorenzaccio), est inséparable d'une nouvelle conception du moi. Ce moi se vit comme une sensibilité exacerbée, une aspiration infinie vers l'idéal, l'amour absolu, la grandeur. Mais il se heurte à la réalité prosaïque, aux conventions sociales, à l'échec des révolutions (post-Napoléon). Ce décalage entre les aspirations du moi et le monde crée un sentiment d'impuissance, de vide, de 'vague à l'âme', de mélancolie profonde. Le moi romantique est donc un moi en souffrance, en quête d'absolu, souvent tourné vers le passé ou rêvant d'un ailleurs, et qui peut sombrer dans le désespoir ou se réfugier dans une action extrême (comme le meurtre pour Lorenzaccio) pour retrouver un sens. Exemple : Le personnage de René chez Chateaubriand incarne ce moi romantique rongé par un ennui et une tristesse sans cause apparente, qu'il ne peut apaiser.`
  },
  // Question n°58
  {
    question: "Quelle est la conception du temps impliquée dans la définition du moi comme 'passage' chez Montaigne ?",
    answers: [
      "Un temps cyclique et éternel.",
      "Un temps mécanique et mesurable, comme celui d'une horloge.",
      "Un temps fluide et continu, un 'branle' perpétuel, dans lequel le moi est saisi comme un être toujours changeant, impossible à fixer dans un instant."
    ],
    correct: 3,
    explanation: `Montaigne a une intuition profonde de la temporalité constitutive du moi. Le temps n'est pas une série d'instants séparés, mais un mouvement continu, un 'branle' (balancement) incessant. Dans ce flux, toutes choses changent, y compris le moi. C'est pourquoi il 'ne peut assurer son objet' (le moi) ; il le prend 'en l'instant', mais cet instant est déjà passé. Peindre le moi, c'est donc nécessairement 'peindre le passage', c'est-à-dire saisir et décrire cette mouvance même, 'de jour en jour, de minute en minute'. Le moi n'a pas d'être stable, il est devenir pur. Exemple : Montaigne compare le monde et le moi à une rivière où l'on ne se baigne jamais deux fois au même endroit, anticipant la pensée d'Héraclite et de Bergson.`
  },
  // Question n°59
  {
    question: "Selon le cours, comment la psychanalyse a-t-elle transformé le regard sur la folie au XXe siècle ?",
    answers: [
      "Elle l'a ramenée à une possession diabolique.",
      "Elle l'a 'médicalisée', cessant d'y voir une tare naturelle irréversible ou une possession, pour en faire une maladie mentale dont on peut chercher les causes et tenter de guérir par la parole et l'analyse.",
      "Elle l'a glorifiée comme un accès à la vérité supérieure."
    ],
    correct: 2,
    explanation: `Le cours situe Freud dans une histoire des représentations de la folie. Avant lui, la folie était souvent considérée comme une malédiction divine, une possession démoniaque (Moyen Âge) ou, à partir du Classicisme, comme une 'aliénation' mentale (être 'autre'). Avec la psychanalyse, la folie (ou plus précisément, les névroses et psychoses) devient l'objet d'une science médicale et psychologique. Elle n'est plus un état d'âme mystérieux ou un signe de dégénérescence, mais le résultat de conflits psychiques, de traumatismes, de mécanismes de défense pathologiques. Elle devient 'compréhensible' (même si pas toujours guérissable) à travers l'investigation de l'inconscient et l'histoire du sujet. Exemple : L'hystérie, qui était auparavant un diagnostic vague et souvent dépréciatif (surtout pour les femmes), est devenue pour Freud un trouble nécessitant une écoute et une interprétation des symptômes comme langage du corps exprimant un conflit refoulé.`
  },
  // Question n°60
  {
    question: "Que permet de comprendre l'exemple des autoportraits de Rembrandt, évoqué dans le cours ?",
    answers: [
      "La technique picturale de la lumière et de l'ombre.",
      "La volonté de l'artiste de se montrer toujours sous son meilleur jour.",
      "La quête d'un peintre à travers les âges pour saisir les métamorphoses de son propre visage et, par là, les changements de son moi au fil du temps.",
    ],
    correct: 3,
    explanation: `Rembrandt a réalisé tout au long de sa vie une centaine d'autoportraits, des premiers où il apparaît jeune et ambitieux, aux derniers où il se montre vieilli, marqué par les épreuves, dans une introspection sans fard. Cette œuvre exceptionnelle est comme un journal visuel de ses métamorphoses. Elle montre la tentative d'un artiste de se saisir lui-même, de se regarder changer, de fixer les différents 'moi' successifs. Ces autoportraits sont autant de réponses à la question 'qui suis-je ?' posée à différents moments de l'existence. Ils illustrent la conscience de la temporalité et du vieillissement, et le désir de laisser une trace de cette identité mouvante. Exemple : En comparant un autoportrait de Rembrandt à 25 ans et un autre à 63 ans, on ne voit pas le même homme, et pourtant c'est le même artiste qui s'est peint, témoignant d'une continuité à travers le changement.`
  },
  // Question n°61
  {
    question: "Selon la conception freudienne, que sont les 'actes manqués' (lapsus, oublis, etc.) ?",
    answers: [
      "De simples accidents sans signification.",
      "Des manifestations de la fatigue ou du hasard.",
      "Des expressions déguisées de désirs ou de pensées inconscientes, qui échappent au contrôle du moi et trahissent le sujet."
    ],
    correct: 3,
    explanation: `Freud accorde une grande importance aux actes manqués (lapsus linguae, oublis de noms, pertes d'objets, erreurs de lecture...). Contrairement au sens commun qui y voit des accidents insignifiants, il y voit la 'symptomatologie de la vie quotidienne'. Ce sont des compromis entre une intention consciente et un désir ou une pensée refoulée qui cherche à s'exprimer. Le moi, dans un moment de relâchement de la censure, laisse passer cette expression déformée. L'acte manqué est donc un message de l'inconscient, une 'bavure' révélatrice. Exemple : Un élève qui dit 'bonjour' à son professeur en lui serrant la main et qui ajoute 'au revoir' fait un lapsus qui peut trahir un désir inconscient de ne pas être là ou de mettre fin rapidement à l'interaction.`
  },
  // Question n°62
  {
    question: "Comment le cours définit-il la 'maïeutique' socratique, en lien avec la pensée du moi ?",
    answers: [
      "L'art d'accoucher les femmes.",
      "L'art d'accoucher les esprits : par le questionnement, Socrate aide son interlocuteur à prendre conscience de ce qu'il sait déjà sans le savoir, c'est-à-dire à faire naître la connaissance en lui.",
      "Une méthode pour convaincre par des discours éloquents."
    ],
    correct: 2,
    explanation: `La maïeutique (du grec 'maieuesthai', accoucher) est la méthode philosophique de Socrate. Se comparant à sa mère qui était sage-femme, Socrate dit qu'il n'enseigne pas un savoir tout fait, mais qu'il aide ses interlocuteurs à 'accoucher' de la vérité qui est déjà en eux, de manière latente. Par des questions insistantes, il les amène à examiner leurs croyances, à en percevoir les contradictions, et à reformuler des définitions plus justes. Appliquée à la connaissance de soi, la maïeutique signifie que la vérité sur soi n'est pas à recevoir de l'extérieur, mais à découvrir par un dialogue intérieur critique et exigeant. Exemple : Dans le 'Théétète', Socrate, par ses questions, amène le jeune Théétète à découvrir par lui-même que la pensée est un dialogue intérieur de l'âme avec elle-même.`
  },
  // Question n°63
  {
    question: "Qu'est-ce que le 'processus d'individuation' dans la psychologie de Jung ?",
    answers: [
      "Le processus par lequel un enfant devient indépendant de ses parents.",
      "Le processus par lequel le moi conscient se différencie de l'inconscient collectif et entre en relation avec le 'Soi', visant à réaliser la totalité et l'unicité de la personnalité.",
      "Le développement de l'individualisme dans les sociétés modernes."
    ],
    correct: 2,
    explanation: `L'individuation est le concept central de la psychologie analytique jungienne. C'est un processus naturel de maturation psychique qui va bien au-delà de l'adaptation sociale. Il s'agit pour l'individu de devenir ce qu'il est fondamentalement, de réaliser son potentiel unique. Concrètement, cela implique que le moi conscient prenne conscience des contenus de l'inconscient (personnel et collectif), intègre ses différentes parts (y compris l''ombre', la part refoulée et négative), et établisse une relation avec le 'Soi', l'archétype de la totalité. Ce chemin, souvent long et difficile, mène à une personnalité plus unifiée, équilibrée et créative. Exemple : Dans les rêves ou les œuvres d'art d'une personne en processus d'individuation, on peut voir apparaître des symboles d'unité (mandalas) ou des figures archétypales (le sage, l'anima/animus) qui guident la transformation.`
  },
  // Question n°64
  {
    question: "Selon la conclusion, pourquoi la quête du moi est-elle finalement une 'énigme' ?",
    answers: [
      "Parce que les philosophones se complaisent dans l'obscurité.",
      "Parce que le moi, étant à la fois le sujet qui cherche et l'objet recherché, échappe à toute saisie définitive ; il est à la fois familier et étranger (Unheimliche), et sa métamorphose permanente le rend insaisissable.",
      "Parce qu'il n'y a tout simplement pas de moi."
    ],
    correct: 2,
    explanation: `La conclusion du cours reprend l'idée d'Augustin ('je suis devenu une énigme pour moi-même') et la notion freudienne d''inquiétante étrangeté' (Unheimliche) pour caractériser le moi. L'énigme tient à la structure même de la recherche : je suis celui qui cherche et ce qui est cherché. Cette circularité empêche une objectivation totale. De plus, le moi n'est pas une entité stable ; il se métamorphose sans cesse sous l'effet du temps, de l'inconscient, des relations. Il est à la fois le plus proche (je le vis immédiatement) et le plus lointain (je ne le comprends pas toujours). Cette tension entre familiarité et étrangeté fait du moi une quête infinie, jamais achevée. Exemple : Plus nous cherchons à nous analyser, plus nous découvrons des contradictions, des zones d'ombre, des motivations inavouées, qui nous rendent étrangers à nous-mêmes.`
  },
  // Question n°65
  {
    question: "Quel est le sens de l'expression 'branloire pérenne' utilisée par Montaigne pour décrire le monde et le moi ?",
    answers: [
      "Une balançoire éternelle, image d'un mouvement de va-et-vient perpétuel et instable.",
      "Un objet solide et immuable.",
      "Une machine complexe mais prévisible."
    ],
    correct: 1,
    explanation: `Montaigne forge cette expression pittoresque et profonde. Une 'branloire' est un balancement, un mouvement d'oscillation. 'Pérenne' signifie éternel, qui dure toujours. Le monde, et par extension le moi qui en fait partie, est donc comparé à un perpétuel mouvement de balancier, une instabilité fondamentale. Rien n'est fixe, tout 'branle', tout est en flux constant. Cette image s'oppose aux visions statiques de l'univers et de l'âme. Elle capture l'essence du changement qui, pour Montaigne, est la loi première de l'existence, rendant vaine toute tentative de fixer l'être dans une définition immuable. Exemple : Nos humeurs, nos opinions, nos projets sont souvent en 'branle', changeants, instables, à l'image de cette 'branloire pérenne'.`
  },
  // Question n°66
  {
    question: "Quelle est la différence entre l' 'inconscient' et le 'préconscient' dans la première topique freudienne ?",
    answers: [
      "Il n'y a pas de différence ; ce sont deux noms pour la même chose.",
      "Le préconscient est accessible à la conscience sans résistance, tandis que l'inconscient est refoulé et son accès est barré par la censure.",
      "L'inconscient contient les pulsions de vie, le préconscient les pulsions de mort."
    ],
    correct: 2,
    explanation: `La distinction est cruciale. Le préconscient contient des éléments (souvenirs, connaissances) qui ne sont pas actuellement dans le champ de la conscience, mais qui peuvent y être rappelés sans difficulté particulière. Il n'y a pas de refoulement actif. L'inconscient, en revanche, contient des désirs, des souvenirs, des pulsions qui ont été refoulés parce qu'ils sont inacceptables pour la conscience (moralement, socialement). L'accès à ces contenus est barré par une force de 'censure' ou de 'résistance'. Ils ne peuvent devenir conscients qu'à travers des détours (rêves, symptômes, actes manqués) ou par le travail analytique qui lève les résistances. Exemple : Le nom d'un ami que je n'arrive pas à me rappeler sur le moment est dans le préconscient ; il va 'me revenir'. Un souvenir traumatique d'enfance peut être dans l'inconscient et rester inaccessible pendant des décennies.`
  },
  // Question n°67
  {
    question: "Comment le 'regard d'autrui' constitue-t-il le moi, selon l'analyse de Sartre mentionnée dans le cours ?",
    answers: [
      "Autrui me donne une image objective et vraie de moi-même.",
      "En me regardant, autrui me fige dans une identité, un rôle (le 'fayot', le 'timide') qui m'échappe et dont je dépends pour ma conscience de moi ; je deviens un 'être-pour-autrui' qui vient s'ajouter à mon 'être-pour-soi'.",
      "Le regard d'autrui n'a aucune importance pour la constitution du moi."
    ],
    correct: 2,
    explanation: `Pour Sartre, autrui joue un rôle constitutif dans la formation de ma conscience de moi. Quand autrui me regarde, je me sens devenir un objet sous son regard. Il me confère une identité, des qualités ('il est en colère', 'il est maladroit') sur lesquelles je n'ai pas de prise immédiate. Je deviens un 'être-pour-autrui', une chose définie. Cette expérience est souvent vécue comme une aliénation (je suis volé par le regard d'autrui). Cependant, elle est nécessaire : c'est par le regard d'autrui que je prends conscience de moi-même comme étant aussi un objet dans le monde, avec une extériorité. Ma conscience de moi est donc toujours médiatisée par autrui. Exemple : La honte est un sentiment typiquement sartrien : je me surprends à faire quelque chose de ridicule, et soudain je 'vois' mon action à travers le regard d'un autre qui pourrait me surprendre ; je me constitue alors comme 'honteux'.`
  },
  // Question n°68
  {
    question: "Que signifie l'idée que le moi est un 'choix moral', évoquée en conclusion de la séquence ?",
    answers: [
      "Que le moi est entièrement déterminé par l'éducation morale reçue.",
      "Que le moi n'est plus une substance métaphysique, mais qu'il se définit par la capacité à imputer des actes à un auteur responsable, à tenir des promesses, à être fidèle à des engagements ; il est construit par l'action éthique.",
      "Qu'il faut choisir d'être une bonne personne."
    ],
    correct: 2,
    explanation: `Cette idée marque un tournant dans la conception du moi. Au lieu de le chercher dans une intériorité substantielle (l'âme) ou psychologique (la mémoire), on le définit par ses actes et sa relation à autrui dans le champ éthique et juridique. Le moi est celui qui peut dire 'c'est moi qui l'ai fait' (imputabilité), qui peut s'engager pour l'avenir ('je te le promets') et tenir cet engagement (fidélité à soi). Il est celui qui est responsable de ses actes devant les autres. Le moi devient ainsi une construction pratique et morale, une identité narrative qui se tisse dans l'action et la parole données. Exemple : Un juge qui condamne un criminel ne s'intéresse pas à la nature de son 'moi substantiel', mais à son 'moi moral' : était-il responsable de ses actes ? Peut-on lui imputer le crime ?`
  },
  // Question n°69
  {
    question: "Quelle est la 'double conscience' évoquée par Freud dans ses premières études sur l'hystérie ?",
    answers: [
      "Le fait d'avoir deux personnalités distinctes, comme dans le trouble dissociatif de l'identité.",
      "L'existence, chez les hystériques, d'un état de conscience normal et d'un état 'hypnoïde' (comme sous hypnose) où des souvenirs traumatiques sont maintenus séparés et inaccessibles à la conscience ordinaire.",
      "La capacité de penser à deux choses à la fois."
    ],
    correct: 2,
    explanation: `Dans ses premiers travaux avec Breuer, Freud utilise l'expression 'double conscience' pour décrire un phénomène observé chez les patients hystériques. Ils semblent avoir deux états de conscience : un état normal, et un autre état, qualifié d''hypnoïde', dans lequel se logent des souvenirs et des émotions liés à un traumatisme psychique. Ces contenus, dissociés de la conscience normale, sont à l'origine des symptômes hystériques (paralysies, crises...). Sous hypnose, le patient pouvait accéder à cet état second et exprimer le souvenir refoulé, ce qui entraînait souvent la disparition du symptôme. Cette notion préfigure la théorie du refoulement et de l'inconscient. Exemple : Une patiente, Anna O., présentait des symptômes variés (toux, paralysie) qui disparaissaient lorsqu'elle racontait, dans un état quasi-hypnotique, le souvenir de l'événement traumatique à l'origine de chaque symptôme.`
  },
  // Question n°70
  {
    question: "Que signifie l'expression 'l'âme est un principe d'animation', dans la conception antique évoquée au début de la séance 1 ?",
    answers: [
      "L'âme est ce qui rend joyeux et donne le moral.",
      "L'âme (psychè) est ce qui distingue les êtres vivants (végétaux, animaux, hommes) des choses inanimées (minéraux) ; elle est le principe qui les fait vivre, croître, se mouvoir, sentir.",
      "L'âme est le siège de la pensée rationnelle, propre à l'homme."
    ],
    correct: 2,
    explanation: `Dans la philosophie antique (notamment chez Aristote), le terme 'âme' (ψυχή) a d'abord un sens biologique et large. Elle est le 'principe' qui explique les fonctions vitales. Aristote distingue ainsi une âme végétative (nutrition, croissance) pour les plantes, une âme sensitive (perception, désir, mouvement local) pour les animaux, et une âme intellective (pensée) pour les hommes. L'âme n'est pas encore conçue comme une substance immatérielle et pensante opposée au corps (comme chez Descartes), mais comme la 'forme' ou l'actualisation d'un corps organisé. Elle est ce qui fait qu'un corps est vivant. Exemple : Pour Aristote, dire qu'un arbre a une 'âme' signifie simplement qu'il possède en lui-même le principe de sa croissance et de sa reproduction, ce qui le distingue d'une pierre.`
  },
  // Question n°71
  {
    question: "Comment le 'positivisme' d'Auguste Comte, évoqué en introduction, influence-t-il la conception du moi au XIXe siècle ?",
    answers: [
      "Il réhabilite la foi et l'intuition comme sources de connaissance de soi.",
      "Il alimente une confiance absolue en la raison scientifique pour expliquer le monde et, par extension, l'homme ; le moi pourrait être compris comme un objet d'étude scientifique.",
      "Il nie l'existence du moi, considéré comme une illusion métaphysique."
    ],
    correct: 2,
    explanation: `Auguste Comte, fondateur du positivisme, affirme que l'humanité passe par trois états : théologique, métaphysique et positif. À l'état positif, on renonce à chercher les causes premières ou les substances, et on se contente d'établir des lois par l'observation et la raison. Cette confiance en la science pour tout expliquer s'étend à l'homme. Le moi, autrefois domaine de la métaphysique ou de l'introspection, devient un objet possible de la psychologie naissante, de la sociologie, voire de la biologie. On pense pouvoir le 'mathématiser' ou le comprendre par des lois déterministes, comme le monde physique. Exemple : Cette mentalité positiviste a favorisé l'émergence de la psychologie expérimentale (Wundt) et des approches naturalistes du comportement humain.`
  },
  // Question n°72
  {
    question: "Quelle est la signification de l'expression 'inquiétante étrangeté' (Unheimliche) de Freud, mentionnée en conclusion ?",
    answers: [
      "La peur des fantômes et des revenants.",
      "Le sentiment éprouvé quand quelque chose de familier et d'intime (heimlich) devient soudain étranger, inquiétant, comme si un autre était logé au cœur du psychisme.",
      "L'angoisse face à l'inconnu et à l'étranger."
    ],
    correct: 2,
    explanation: `Freud consacre un essai à l''inquiétante étrangeté' (Das Unheimliche). Ce sentiment particulier naît non de l'étranger pur, mais de la perturbation du familier. Quelque chose qui devrait être rassurant et connu (la maison, le double de soi, une poupée) devient soudain source d'angoisse et de malaise parce qu'il semble habité par une force étrangère. Appliqué au moi, cela signifie que ce qu'il y a de plus intime en nous (nos pensées, nos désirs, notre corps) peut parfois nous apparaître comme étranger, comme s'il appartenait à un autre. C'est l'expérience du dédoublement, de la possession, ou simplement de l'incompréhension de nos propres actes. Exemple : Se voir dans un miroir et avoir l'impression fugace de ne pas se reconnaître, ou être effrayé par sa propre main qui semble agir d'elle-même, sont des expériences d'Unheimliche.`
  },
  // Question n°73
  {
    question: "En quoi la métaphore du 'Holzweg' (chemin forestier) de Heidegger, évoquée en conclusion, s'applique-t-elle à la quête du moi ?",
    answers: [
      "Elle montre que chercher le moi est une perte de temps, il faut suivre les chemins tracés par la tradition.",
      "Elle illustre l'idée que le chemin de la connaissance de soi n'est pas une autoroute toute tracée menant à un but clair, mais un sentier qui se dessine en avançant, et qui parfois ne mène 'nulle part' de définitif.",
      "Elle signifie que la forêt est un lieu dangereux pour la raison."
    ],
    correct: 2,
    explanation: `Heidegger utilise le terme 'Holzweg' qui désigne en allemand un chemin forestier qui sert à l'exploitation du bois et qui s'arrête brusquement en pleine forêt. En philosophie, cela devient une métaphore pour une voie de pensée qui ne conduit pas à une destination attendue, mais qui ouvre un nouvel espace de questionnement. Appliquée à la quête du moi, cela signifie qu'il ne faut pas s'attendre à découvrir un 'moi' tout fait au bout du chemin. Le chemin lui-même, le processus de recherche, d'interrogation, d'exploration, est constitutif de ce qu'on découvre. La quête peut être circulaire, déroutante, mais elle est le seul 'lieu' où le moi se manifeste. Exemple : La cure psychanalytique est un 'Holzweg' : le patient ne 'trouve' pas un moi caché, mais se construit un nouveau rapport à lui-même à travers le parcours de la parole et de l'analyse.`
  },
  // Question n°74
  {
    question: "Quelle est la conception du moi dans le roman réaliste du XIXe siècle, selon l'analyse de Bergson citée ?",
    answers: [
      "Un moi fluide et insaisissable.",
      "Un moi conventionnel, présenté comme une 'ombre' simplifiée, une juxtaposition d'états psychiques étiquetés (jalousie, ambition) qui masque la complexité réelle de la vie intérieure.",
      "Un moi héroïque et sublime."
    ],
    correct: 2,
    explanation: `Bergson, dans son 'Essai', critique la psychologie des romanciers réalistes de son temps (comme Balzac ou Flaubert). Selon lui, pour les besoins du récit et de la communication, ces auteurs décrivent les personnages avec le vocabulaire psychologique ordinaire. Ils isolent des états d'âme (la jalousie, l'avarice), les nomment, les juxtaposent. Mais cette description donne une image figée et schématique du moi, une 'ombre'. Elle rate l'essentiel : la fluidité, l'interpénétration des sentiments, le changement continu. Bergson estime que seul un romancier 'hardi' (comme Dostoïevski) parvient à suggérer, par des contradictions et des nuances, la richesse et la mobilité du moi réel. Exemple : Dire 'Emma Bovary est une rêveuse romantique' est une étiquette commode, mais elle ne rend pas compte de la multiplicité et de l'évolution de ses sentiments, de ses désirs et de ses angoisses tout au long du roman.`
  },
  // Question n°75
  {
    question: "Comment le 'dérèglement de tous les sens' prôné par Rimbaud est-il lié à sa conception du 'Je est un autre' ?",
    answers: [
      "Le dérèglement est une fin en soi, pour le plaisir.",
      "Le dérèglement systématique (par l'alcool, la drogue, l'expérience extrême) est une méthode pour briser le moi rationnel et social, et laisser émerger l''autre' en soi, le voyant, qui accède à l'inconnu.",
      "Rimbaud prône l'ascétisme et la maîtrise des sens."
    ],
    correct: 2,
    explanation: `Pour Rimbaud, le poète doit se faire 'voyant'. Cela ne s'obtient pas par la culture ou la raison, mais par un 'long, immense et raisonné dérèglement de tous les sens'. Ce dérèglement (par l'alcool, la fatigue, la privation, la transgression morale) a pour but de démanteler le moi habituel, le moi conscient et volontaire qui dit 'Je pense'. En brisant ce moi, on laisse la place à l''autre', à cette voix étrangère, à ces visions qui viennent d'ailleurs. Le poète devient alors le 'grand malade', le 'grand maudit', mais aussi le 'suprême Savant' car il 'arrive à l'inconnu'. La création poétique authentique naît de cette altérité radicale en soi. Exemple : La vie chaotique de Rimbaud lui-même, ses fugues, ses expériences extrêmes, étaient autant de tentatives pour provoquer ce dérèglement et accéder à l'état de voyant.`
  },
  // Question n°76
  {
    question: "Quelle est la position de Descartes sur la certitude de l'existence du moi, résumée par la formule 'cogito ergo sum' ?",
    answers: [
      "Le moi existe parce que mon corps existe.",
      "Je doute de tout, mais du fait même que je doute, je pense ; et si je pense, j'existe nécessairement. L'existence du moi pensant est la première certitude indubitable.",
      "L'existence du moi est une croyance sociale."
    ],
    correct: 2,
    explanation: `Dans le 'Discours de la méthode' et les 'Méditations', Descartes entreprend de douter méthodiquement de toutes ses opinions. Il doute des sens (ils peuvent tromper), des démonstrations mathématiques (un Dieu trompeur pourrait me les faire croire fausses). Mais il remarque que pour douter, il faut penser. Et pour penser, il faut exister. Même si un trompeur tout-puissant me trompait sur tout, il faudrait bien que *je* sois, moi qui suis trompé. Ainsi, 'je pense, donc je suis' (cogito ergo sum) s'impose comme une vérité absolue, le premier principe de la philosophie. Le moi, en tant que 'chose qui pense' (res cogitans), acquiert ainsi un statut métaphysique fondateur. Exemple : Cette certitude est au fondement de la philosophie moderne : avant de connaître le monde, je sais avec une évidence absolue que je suis un sujet pensant.`
  },
  // Question n°77
  {
    question: "Comment la notion de 'projet' s'applique-t-elle à la construction du moi, selon les perspectives existentialistes évoquées ?",
    answers: [
      "Le moi est un projet social à réaliser collectivement.",
      "Le moi n'est pas une essence prédéfinie, mais il se construit et se définit par ses choix, ses actions, ses engagements tournés vers l'avenir ; il est ce qu'il se fait être.",
      "Le moi doit avoir un projet de vie clair et ambitieux pour être valable."
    ],
    correct: 2,
    explanation: `L'existentialisme, notamment chez Sartre, défend le primat de l'existence sur l'essence. Cela signifie que l'homme n'a pas de nature ou d'essence définie à l'avance (comme un couteau a l'essence de couper). Il existe d'abord, et il se définit ensuite par ce qu'il fait. Le moi est donc un 'projet' : il est toujours en avant de lui-même, tendu vers des possibilités qu'il réalise par ses actes libres. 'L'existence est un perpétuel dépassement', dit Sartre. Le moi n'est pas un donné, mais une tâche, une construction permanente par l'action et l'engagement. Exemple : Un homme n'est pas 'lâche' par essence ; il se fait lâche par des actes de lâcheté répétés. Inversement, il peut choisir d'être courageux par des actes courageux, se projetant ainsi dans une nouvelle définition de lui-même.`
  },
  // Question n°78
  {
    question: "Quel est le rôle de la mémoire dans la conception lockéenne de l'identité personnelle ?",
    answers: [
      "La mémoire est un simple outil de stockage d'informations sans lien avec l'identité.",
      "La mémoire est le fil conducteur qui fait l'identité : je suis la même personne que celui qui a vécu un événement passé si, et seulement si, je peux me souvenir avoir vécu cet événement 'de l'intérieur'.",
      "La mémoire déforme le passé et nous empêche de connaître notre vrai moi."
    ],
    correct: 2,
    explanation: `Pour Locke, l'identité personnelle est une identité de conscience. Ce qui fait que je suis le même aujourd'hui qu'hier, c'est que ma conscience actuelle peut s'étendre rétrospectivement et s'approprier les actions et les pensées passées comme étant les miennes. La mémoire est le moyen de cette appropriation. Si je me souviens avoir fait telle action ou éprouvé telle sensation, alors cette action est mienne, et je suis la même personne que son auteur. La continuité de la conscience à travers le temps, assurée par la mémoire, est le critère de l'identité personnelle, et non la permanence d'une substance immatérielle. Exemple : Si je ne me souviens absolument pas d'un crime commis pendant un black-out (ivresse, traumatisme), puis-je moralement et juridiquement en être tenu pour responsable ? Locke suggérerait que non, car il n'y a pas continuité de conscience.`
  },
  // Question n°79
  {
    question: "Comment le cours interprète-t-il la phrase de Kant : 'Le beau parleur est celui qui joue à parler' ?",
    answers: [
      "Comme une critique de l'éloquence vide de sens.",
      "Comme une illustration de la distance sartrienne entre le moi et ses attitudes : on ne 'est' jamais pleinement son attitude, on la 'joue' plus ou moins.",
      "Comme une remarque sur l'éducation des enfants."
    ],
    correct: 2,
    explanation: `Cette phrase, citée dans le cadre de l'analyse de Sartre, illustre parfaitement le concept de 'mauvaise foi' et de non-coïncidence du sujet avec ses attitudes. Le 'beau parleur' n'est pas un être dont l'essence serait 'parlant'. Il joue un rôle, il adopte une attitude de parleur. Il y a une distance entre ce qu'il est (une conscience libre) et le personnage qu'il incarne. Cette distance est la liberté même : il pourrait arrêter de jouer, se taire, ou parler autrement. Appliqué au moi en général, cela signifie que nous ne sommes jamais totalement identifiés à nos qualités, nos émotions, nos rôles sociaux ; nous les jouons toujours, à des degrés divers de conscience et d'adhésion. Exemple : Un professeur 'joue' le rôle du professeur en classe ; il n'est pas substantiellement 'professeur' 24h/24, même si ce rôle fait partie de son identité sociale.`
  },
  // Question n°80
  {
    question: "Quel est l'apport de la psychanalyse à la compréhension des 'métamorphoses du moi' ?",
    answers: [
      "Elle nie toute métamorphose, affirmant la fixité des structures psychiques.",
      "Elle montre que le moi n'est pas une unité maîtresse, mais une instance fragile, traversée par des conflits entre des forces inconscientes (ça, surmoi), et donc susceptible de transformations, de symptômes, de dédoublements.",
      "Elle réduit les métamorphoses à des changements biologiques du cerveau."
    ],
    correct: 2,
    explanation: `La psychanalyse introduit une révolution dans la conception du moi. Avant elle, le moi était généralement conçu comme le siège de la conscience et de la volonté, plus ou moins unifié. Freud découvre que le moi n'est qu'une partie de l'appareil psychique, et qu'il est constamment menacé et transformé par des forces qui lui échappent : les pulsions du ça, les exigences tyranniques du surmoi, les exigences de la réalité. Le moi doit négocier, faire des compromis, ce qui peut produire des symptômes (métamorphose pathologique), des actes manqués, des rêves. Il peut aussi se cliver, se défendre par des mécanismes variés. Le moi est donc un champ de bataille et un lieu de métamorphoses constantes, souvent inconscientes. Exemple : La transformation d'une pulsion agressive en un symptôme physique (une paralysie hystérique) est une métamorphose du moi où un conflit psychique trouve une expression corporelle symbolique.`
  },
  // Question n°81
  {
    question: "Quelle est la conception du moi dans la pensée d'Héraclite, évoquée par la formule 'on ne se baigne jamais deux fois dans le même fleuve' ?",
    answers: [
      "Le moi est une substance immuable comme le lit du fleuve.",
      "Le moi, comme toute chose, est en perpétuel changement (πάντα ῥεῖ, 'tout s'écoule') ; il est un flux et non une entité stable.",
      "Le moi est identique à l'eau du fleuve, toujours renouvelée."
    ],
    correct: 2,
    explanation: `Bien qu'Héraclite ne parle pas explicitement du 'moi' au sens moderne, sa philosophie du changement universel s'applique à l'homme. La célèbre formule sur le fleuve (dont on attribue souvent une version à Héraclite) signifie que rien n'est stable, tout est devenir. L'eau s'écoule, le fleuve change. De même, l'homme change constamment : ses cellules, ses humeurs, ses pensées. Il n'y a pas d'identité substantielle fixe, mais un processus de métamorphose permanente. Cette intuition préfigure les critiques modernes du moi substantiel (Hume, Nietzsche) et les conceptions du moi comme flux (Bergson). Exemple : Je ne suis pas le même que celui qui s'est baigné hier dans le fleuve, car le fleuve a changé et j'ai changé moi aussi.`
  },
  // Question n°82
  {
    question: "Comment le 'principe de plaisir', régissant le ça, entre-t-il en conflit avec la réalité ?",
    answers: [
      "Il n'y a pas de conflit, le principe de plaisir s'adapte automatiquement à la réalité.",
      "Le principe de plaisir cherche la satisfaction immédiate et complète des désirs, ignorant les contraintes de la réalité (lois physiques, sociales, dangers). Le moi, régi par le 'principe de réalité', doit différer, modifier ou renoncer à cette satisfaction pour tenir compte du monde extérieur.",
      "Le principe de plaisir est la recherche du bonheur à long terme, donc il intègre la réalité."
    ],
    correct: 2,
    explanation: `Le ça, régi par le principe de plaisir, est entièrement tourné vers la décharge immédiate de l'énergie pulsionnelle. Il veut la satisfaction sans délai, par l'hallucination (comme dans le rêve) ou par l'action directe. Le monde extérieur (la 'réalité') oppose des obstacles : l'objet du désir n'est pas toujours présent, la satisfaction peut être dangereuse ou socialement interdite. Le moi, se développant à partir du ça au contact de la réalité, se met au service du 'principe de réalité'. Son rôle est de trouver des moyens réalistes et socialement acceptables de satisfaire les désirs du ça, quitte à les différer, les sublimer, ou y renoncer. Ce travail de médiation est source de conflits et de frustrations. Exemple : Un enfant qui a faim (principe de plaisir du ça) doit apprendre à attendre que le repas soit prêt et à utiliser des couverts (principe de réalité du moi), au lieu de crier et de saisir la nourriture avec les mains.`
  },
  // Question n°83
  {
    question: "Quelle est la signification de l'expression 'être-pour-soi' et 'être-pour-autrui' chez Sartre, dans le contexte de la constitution du moi ?",
    answers: [
      "Être-pour-soi : être égoïste ; être-pour-autrui : être altruiste.",
      "Être-pour-soi : la conscience comme liberté et néantisation ; être-pour-autrui : le moi comme objet figé sous le regard d'autrui. Ces deux dimensions sont irréductibles et en tension permanente.",
      "Être-pour-soi : exister seul ; être-pour-autrui : exister en société."
    ],
    correct: 2,
    explanation: `Sartre distingue deux modes d'être fondamentaux de la conscience humaine. L''être-pour-soi' est la conscience dans sa liberté radicale, son pouvoir de néantiser ce qui est (de le nier, de le dépasser par un projet). Le pour-soi n'est rien, il se fait être. Il échappe à toute détermination fixe. L''être-pour-autrui' naît lorsque je suis regardé par autrui. Sous son regard, je deviens un objet, une chose définie avec des qualités (lâche, beau, méchant). Je suis 'chosifié', aliéné. Le moi (l'ego) est précisément cette synthèse instable et conflictuelle entre mon être-pour-soi (libre) et mon être-pour-autrui (objet). Je suis condamné à vivre dans cette tension. Exemple : Quand je marche seul dans la rue, je suis libre (pour-soi) ; si je sens soudain le regard d'un inconnu sur moi, je deviens conscient de ma démarche, de mon apparence, je me sens 'vu' et défini (pour-autrui).`
  },
  // Question n°84
  {
    question: "Comment le 'surmoi' se forme-t-il, selon la théorie freudienne ?",
    answers: [
      "Il est inné, présent à la naissance.",
      "Il se forme par l'intériorisation (introjection) des interdits, des exigences et des idéaux des parents, puis de la société et de la culture.",
      "Il émerge spontanément de la confrontation du ça avec la réalité."
    ],
    correct: 2,
    correct: 2,
    explanation: `Le surmoi n'est pas présent à la naissance. Il se construit progressivement dans l'enfance, notamment lors du complexe d'Œdipe. L'enfant, face aux interdits parentaux (notamment l'interdit de l'inceste et du parricide), intériorise ces interdits pour résoudre le conflit psychique. Il incorpore les figures parentales, leurs voix, leurs commandements, leurs idéaux. Plus tard, d'autres autorités (enseignants, société, religion) viennent renforcer cette instance. Le surmoi est donc l'héritier du complexe d'Œdipe et le représentant interne de la morale sociale. Sa sévérité dépend de la rigueur des parents et de la culture. Exemple : Un enfant à qui on répète 'il ne faut pas mentir' finit par intérioriser cette interdit ; plus tard, lorsqu'il ment, il éprouvera de la culpabilité même si personne ne le sait, car son surmoi le punit intérieurement.`
  },
  // Question n°85
  {
    question: "Quelle est la critique adressée par Nietzsche à la notion de 'sujet' comme cause de la pensée ?",
    answers: [
      "Elle est trop matérialiste.",
      "Elle est une 'superstition grammaticale' : nous projetons dans la réalité la structure sujet-verbe de notre langage, en inventant un 'sujet' (le 'je') derrière chaque action (penser, vouloir).",
      "Elle est parfaitement juste et scientifique."
    ],
    correct: 2,
    explanation: `Nietzsche mène une critique généalogique des concepts métaphysiques. Le 'sujet' (le 'je' substantiel) est l'un de ces concepts. Selon lui, nous avons d'abord l'expérience d'activités (penser, vouloir, sentir). Puis, par commodité linguistique et par besoin de causalité, nous inventons un agent derrière ces activités : le 'sujet'. C'est comme si on disait que 'l'éclair brille' en faisant de 'l'éclair' un sujet qui produit l'action de briller, alors qu'il n'y a qu'un événement unique : l'éclair-brillant. De même, 'je pense' invente un 'je' cause de la pensée. Pour Nietzsche, c'est une inversion : la pensée n'est pas l'action d'un sujet, c'est la pensée qui, en tant qu'événement, crée l'illusion du 'je'. Exemple : Dire 'la foudre frappe l'arbre' personnifie la foudre. De même, 'je décide' personnifie et substantialise le processus de décision.`
  },
  // Question n°86
  {
    question: "En quoi l'exemple de la personne transgenre, selon le cours, met-il en crise une définition purement 'ontologique' ou 'substantielle' du moi ?",
    answers: [
      "Il montre que le moi est entièrement déterminé par la biologie.",
      "Il illustre qu'une définition du moi basée uniquement sur une substance (le corps sexué) est insuffisante, car elle ne rend pas compte de l'identité psychologique vécue, qui peut entrer en conflit avec le corps et exiger une transformation de celui-ci.",
      "Il prouve que le genre est un choix purement arbitraire."
    ],
    correct: 2,
    explanation: `L'exemple des personnes transgenres est présenté comme un cas concret qui questionne les fondements de l'identité. Une conception ontologique ou substantialiste du moi (comme chez Descartes) identifierait le moi à une âme certes, mais souvent associée à un corps donné. Or, pour une personne transgenre, le 'moi' authentique, le sentiment profond et durable d'appartenance à un genre, ne correspond pas au sexe biologique assigné à la naissance. Cela montre que l'identité personnelle (le 'qui je suis') n'est pas réductible à un donné biologique substantiel. Elle inclut une dimension psychologique, un vécu, une histoire narrative qui peut entrer en tension avec le corps. La revendication de transition vise à faire coïncider le corps et l'apparence sociale avec cette identité vécue. Exemple : Ce cas extrême met en lumière que pour tout un chacun, l'identité n'est pas une simple 'donnée' mais implique un rapport à son corps et à son histoire.`
  },
  // Question n°87
  {
    question: "Quelle est la fonction de la 'censure' dans le modèle freudien de la première topique ?",
    answers: [
      "Elle empêche les contenus conscients de tomber dans l'inconscient.",
      "Elle filtre les contenus de l'inconscient, empêchant les désirs et souvenirs refoulés d'accéder directement à la conscience, et les déforme lorsqu'ils passent (comme dans les rêves).",
      "Elle contrôle ce que nous disons à haute voix."
    ],
    correct: 2,
    explanation: `La 'censure' est un concept-clé de la première topique freudienne. C'est une fonction (ou une instance) qui garde la frontière entre l'inconscient et le préconscient-conscient. Son rôle est de bloquer l'accès à la conscience des désirs et souvenirs jugés inacceptables (contraires à la morale, trop douloureux, etc.), car leur expression directe provoquerait de l'angoisse. Ces contenus sont 'refoulés' dans l'inconscient. Cependant, l'énergie de ces désirs ne disparaît pas ; elle cherche à s'exprimer. La censure, pendant le sommeil (rêves) ou dans des moments de relâchement (actes manqués), peut laisser passer ces contenus, mais à condition qu'ils soient déformés, métamorphosés, rendus méconnaissables par le 'travail du rêve' (condensation, déplacement, figuration). Exemple : Un désir agressif envers une personne peut apparaître dans un rêve sous la forme symbolique d'un animal féroce qui attaque un objet, afin de tromper la censure.`
  },
  // Question n°88
  {
    question: "Comment le poème d'Eminescu ('Ô ! entendre ma vie comme on écoute un conte...') exprime-t-il une certaine relation à soi ?",
    answers: [
      "Le désir de vivre une vie héroïque comme dans les contes.",
      "Le souhait de prendre de la distance avec sa propre vie, de la voir comme une histoire racontée par un autre, tout en éprouvant simultanément l'impossibilité de cette distance totale car on est immergé dans le sentiment de vivre.",
      "La nostalgie de l'enfance et des contes merveilleux."
    ],
    correct: 2,
    explanation: `Ce poème exprime de manière très fine le dédoublement et la difficulté de la connaissance de soi. Le poète souhaiterait pouvoir 'entendre sa vie comme on écoute un conte', c'est-à-dire de l'extérieur, avec la distance du narrateur ou de l'auditeur. Il voudrait se voir comme un personnage ('un empereur') dont l'histoire se déroule objectivement. Mais il constate aussitôt l'échec de ce vœu : 'Mais non — le cœur qui bat en moi est le cœur même du monde'. Il ne peut sortir de lui-même ; il est immergé dans le sentiment immédiat de vivre, de ressentir. La vie vécue et la vie racontée sont irréductiblement différentes. Cette tension entre le désir de distance narrative et l'immédiateté du vécu est au cœur de l'entreprise autobiographique. Exemple : Quand nous racontons notre vie à un ami, nous la 'mettons en récit', nous sélectionnons, nous interprétons ; mais pendant que nous la vivions, c'était un flux d'impressions et d'émotions dans lequel nous étions plongés.`
  },
  // Question n°89
  {
    question: "Quelle est la conception du moi implicite dans l'expérience de la honte, selon l'analyse sartrienne évoquée ?",
    answers: [
      "La honte prouve l'existence d'un moi substantiel et moral.",
      "La honte révèle que mon moi est immédiatement constitué par le regard d'autrui : je me découvre comme objet (honteux) sous ce regard, et je ne peux échapper à cette objectivation.",
      "La honte est un sentiment pathologique qu'il faut surmonter."
    ],
    correct: 2,
    explanation: `Pour Sartre, la honte est une expérience phénoménologique révélatrice. Imaginons que je fasse un geste vulgaire ou ridicule, seul. Rien ne se passe. Mais si soudain je perçois qu'une personne me regarde par la fenêtre, je suis saisi par la honte. Cette honte ne vient pas de ma conscience solitaire ; elle naît du fait que je me vois *à travers* le regard d'autrui. Autrui me transforme en un objet (l'homme qui fait ce geste ridicule) et m'assigne une essence (ridicule). La honte est la reconnaissance de cette objectivation. Elle montre que mon moi n'est pas une pure intériorité ; il est toujours déjà pris dans le regard des autres, défini par eux. Exemple : Rougir en public est la manifestation corporelle de cette soudaine conscience d'être un objet sous le regard jugé d'autrui.`
  },
  // Question n°90
  {
    question: "Comment la notion de 'responsabilité' est-elle liée à celle de 'moi', selon les perspectives juridique et éthique évoquées en conclusion ?",
    answers: [
      "La responsabilité est un fardeau imposé par la société qui limite le moi.",
      "Le moi, en tant qu'auteur de ses actes et capable de tenir ses promesses, est le présupposé et le support de la responsabilité morale et juridique. Être un 'moi', c'est être imputable et responsable.",
      "Seuls les adultes ont un moi, donc ils sont responsables."
    ],
    correct: 2,
    explanation: `En conclusion, le cours opère un glissement d'une définition métaphysique ou psychologique du moi vers une définition pratique et éthique. Le 'moi' n'est plus seulement une entité à découvrir, mais celui qui peut répondre de ses actes. Dans le droit, la notion de 'personne juridique' implique la capacité à être sujet de droits et de devoirs, et à être tenu pour responsable de ses actions (imputabilité). En morale, être une personne, c'est pouvoir s'engager, tenir parole, être fidèle à ses promesses. Ainsi, le moi se constitue dans et par l'exercice de la responsabilité. Il est moins ce que je suis que ce que je fais et ce dont je réponds. Exemple : Un tribunal ne juge pas 'l'âme' ou le 'moi profond' d'un accusé, mais il le considère comme une personne responsable, capable d'avoir compris et choisi son acte.`
  },
  // Question n°91
  {
    question: "Quelle est la différence entre le 'moi' (ego) et le 'soi' (Selbst) chez Jung ?",
    answers: [
      "Le moi est inconscient, le soi est conscient.",
      "Le moi est l'instance centrale de la conscience, le sens que j'ai de mon identité ; le soi est l'archétype de la totalité psychique, consciente et inconsciente, qui dépasse et inclut le moi.",
      "Le moi est individuel, le soi est collectif."
    ],
    correct: 2,
    explanation: `Jung établit une distinction capitale. Le 'moi' (Ich) est le centre du champ de la conscience. C'est ce que je pense être, mon sentiment d'identité personnelle, ma volonté, mes souvenirs accessibles. Le 'Soi' (Selbst), en revanche, est un concept bien plus large et profond. C'est l'archétype de la totalité et du centre organisateur de la psyché toute entière. Il englobe à la fois le conscient et l'inconscient (personnel et collectif). Le Soi est le but du processus d'individuation : il s'agit pour le moi conscient de se mettre en relation avec le Soi, de reconnaître qu'il n'est qu'une partie d'un tout plus vaste. Le Soi est souvent symbolisé par des images de totalité (cercle, carré, mandala). Exemple : Dans les rêves, le moi peut apparaître comme le rêveur lui-même, tandis que le Soi peut apparaître sous la forme d'un sage, d'un roi, d'un enfant divin ou d'un mandala, représentant la guidance vers l'unité.`
  },
  // Question n°92
  {
    question: "Comment le cours caractérise-t-il l'évolution de la conception du moi entre le 17e et le 20e siècle ?",
    answers: [
      "D'une conception unitaire et transparente (moi pensant cartésien) à une conception éclatée, opaque et conflictuelle (moi freudien, moi narratif, moi social).",
      "D'une conception matérialiste à une conception spirituelle.",
      "D'une conception individuelle à une conception purement collective."
    ],
    correct: 1,
    explanation: `Le cours retrace une évolution majeure. Au XVIIe siècle, avec Descartes, le moi est conçu comme une substance pensante, unifiée, transparente à elle-même dans le cogito. C'est un fondement certain. Au XVIIIe siècle, Rousseau et Hume introduisent le doute (mémoire fragile, moi comme flux de perceptions). Au XIXe siècle, le romantisme explore un moi tourmenté et en devenir. Mais c'est au XXe siècle que l'éclatement est consommé : Freud découvre que le moi est traversé par l'inconscient et divisé en instances (ça, moi, surmoi). La phénoménologie (Sartre) montre qu'il est toujours à distance de lui-même. Les sciences sociales (Durkheim) soulignent sa construction sociale. Le moi perd ainsi son unité, sa transparence et son statut de fondement pour devenir un problème, un chantier, une construction complexe et mouvante. Exemple : On est passé de 'Je pense donc je suis' (unité certaine) à 'Je est un autre' (altérité interne) et 'Le moi n'est pas maître dans sa propre maison' (conflit inconscient).`
  },
  // Question n°93
  {
    question: "Que signifie l'idée que le moi est une 'fiction grammaticale' selon Nietzsche ?",
    answers: [
      "Que le moi n'existe que dans les livres de grammaire.",
      "Que notre langage, par sa structure sujet-verbe, nous pousse à inventer un agent (le 'je') derrière chaque action ou état, alors qu'il n'y a que des processus et des forces en interaction.",
      "Que les écrivains inventent des moi dans leurs romans."
    ],
    correct: 2,
    explanation: `Nietzsche mène une critique radicale de la métaphysique du sujet. Il observe que notre langage découpe le monde en sujets et en prédicats. Nous disons 'l'éclair brille', 'l'arbre est vert', 'je pense'. Cette structure grammaticale nous habitue à penser qu'il y a d'abord un sujet (une substance) qui *a* des propriétés ou *fait* des actions. Nous projetons ensuite ce schéma sur l'expérience intérieure : nous croyons qu'il y a un 'je' substantiel qui 'a' des pensées, des sentiments. Pour Nietzsche, c'est une 'fiction' commode mais erronée. En réalité, il n'y a que des événements, des 'faits' : penser, vouloir, sentir. Le 'je' est une simplification linguistique rétrospective, non la cause de ces événements. Exemple : Dire 'la foudre frappe l'arbre' crée l'illusion d'un agent (la foudre) qui produit une action, alors qu'il n'y a qu'un phénomène électrique unique. De même pour 'je décide'.`
  },
  // Question n°94
  {
    question: "Quel est le rôle de l'artiste, selon Bergson, par rapport à la connaissance du moi ?",
    answers: [
      "L'artiste nous divertit et nous fait oublier notre moi.",
      "L'artiste, en déchirant 'la toile habilement tissée de notre moi conventionnel', nous montre la richesse et la mobilité réelle de notre vie intérieure, nous invitant à une connaissance plus vraie de nous-mêmes.",
      "L'artiste nous impose sa vision subjective du moi."
    ],
    correct: 2,
    explanation: `Bergson oppose l'artiste au psychologue ou au romancier conventionnel. Ceux-ci décrivent le moi avec les catégories sociales toutes faites (jalousie, ambition), nous présentant une 'ombre' de nous-mêmes. L'artiste véritable (Bergson pense à un romancier comme Dostoïevski, un dramaturge comme Shakespeare) a le courage de montrer la complexité, les contradictions, la pénétration mutuelle des sentiments. En présentant des personnages aux motivations troubles, aux retours sur eux-mêmes, aux métamorphoses imprévisibles, il 'nous a remis en présence de nous-mêmes'. Il ne nous donne pas une connaissance théorique, mais une intuition de la richesse et de la profondeur de la vie psychique. Exemple : Le personnage de Raskolnikov dans 'Crime et Châtiment' de Dostoïevski, partagé entre la théorie du surhomme et le remords, montre la complexité d'une âme bien au-delà des étiquettes 'criminel' ou 'repenti'.`
  },
  // Question n°95
  {
    question: "Comment la 'mémoire' est-elle à la fois ce qui permet et ce qui limite la connaissance de soi, selon les analyses du cours (Rousseau, Locke) ?",
    answers: [
      "La mémoire donne un accès parfait au passé, donc une connaissance totale de soi.",
      "La mémoire est le fil qui assure la continuité du moi (Locke) et permet le récit de soi (autobiographie). Mais elle est fragile, lacunaire, sélective, et peut même tromper (Rousseau), rendant la connaissance de soi partielle et reconstruite.",
      "La mémoire n'a aucun rôle dans la connaissance de soi, seule l'introspection immédiate compte."
    ],
    correct: 2,
    explanation: `Le cours présente une dialectique concernant la mémoire. D'un côté, elle est constitutive du moi. Pour Locke, c'est par la mémoire que je m'approprie mes actes passés et que j'assure mon identité dans le temps. Pour Rousseau, l'autobiographie repose sur la remémoration. Mais d'un autre côté, la mémoire est un matériau problématique. Rousseau avoue devoir combler les 'vides' de sa mémoire, ce qui menace la sincérité absolue qu'il revendique. La mémoire n'est pas un enregistrement fidèle ; elle sélectionne, interprète, reconstruit, oublie, parfois déforme. La connaissance de soi par la mémoire est donc toujours une connaissance médiate, partielle, et en partie fictive. Exemple : Nos souvenirs d'enfance sont souvent des reconstructions à partir de photos ou de récits familiaux ; nous ne savons plus exactement ce que nous avons vécu et ce que nous avons 'appris' après coup.`
  },
  // Question n°96
  {
    question: "Quelle est la signification de l'expression 'moi ontologique' ?",
    answers: [
      "Un moi défini par ses relations avec autrui.",
      "Un moi conçu comme une substance, une entité réelle et permanente, dotée d'une essence (comme la substance pensante de Descartes).",
      "Un moi défini par ses actes et ses choix."
    ],
    correct: 2,
    explanation: `L'expression 'moi ontologique' désigne une conception du moi qui le pose comme un être (ontos), une substance. C'est la conception classique, héritée en partie de la métaphysique et illustrée par Descartes. Le moi est ici une 'chose qui pense' (res cogitans), distincte du corps (res extensa). Il a une réalité substantielle, une unité et une permanence qui fondent son identité à travers le temps. Cette conception s'oppose aux conceptions 'psychologiques' (le moi comme fonction ou comme flux de conscience), 'narratives' (le moi comme récit) ou 'sociales' (le moi comme construction relationnelle). Exemple : La recherche cartésienne d'une 'chose pensante' comme fondement certain de la connaissance est typique d'une approche ontologique du moi.`
  },
  // Question n°97
  {
    question: "En quoi la notion de 'métamorphose' est-elle problématique pour penser le moi, selon la conclusion du cours ?",
    answers: [
      "Parce que la métamorphose implique un changement complet, une rupture, alors que nous avons le sentiment d'une continuité.",
      "Parce que si le moi est une substance stable, il ne peut se métamorphoser ; s'il n'est rien ou est insaisissable, le terme de métamorphose n'a pas de sens non plus. Le concept même de métamorphose présuppose quelque chose qui change tout en restant d'une certaine manière le même.",
      "Parce que seuls les insectes et les amphibiens se métamorphosent, pas les humains."
    ],
    correct: 2,
    explanation: `La conclusion soulève une aporie logique. La notion de 'métamorphose du moi' est au cœur de la séquence, mais elle est conceptuellement difficile. En effet, si l'on conçoit le moi comme une substance immuable (moi ontologique), parler de métamorphose est contradictoire : une substance ne change pas d'essence. Si, à l'opposé, on nie l'existence d'un moi substantiel (comme Hume ou Nietzsche), ou si on le considère comme un pur flux insaisissable, alors il n'y a rien qui 'se' métamorphose, juste du changement pur. La métamorphose, au sens fort (changer de forme tout en restant le même individu), semble nécessiter à la fois la permanence et le changement. Cette tension est au centre du problème de l'identité personnelle. Exemple : La chenille qui devient papillon : est-ce le même être ? La matière est largement la même, la forme est radicalement différente. Pour le moi, la question est similaire : qu'est-ce qui persiste à travers les changements radicaux de personnalité, d'opinions, de corps ?`
  },
  // Question n°98
  {
    question: "Quel est l'apport de la phénoménologie (à travers Merleau-Ponty et Sartre) à la compréhension du moi ?",
    answers: [
      "Elle réduit le moi à des processus cérébraux.",
      "Elle décrit le moi tel qu'il se donne dans l'expérience vécue, mettant en lumière son caractère incarné (être-au-monde), sa relation constitutive à autrui, et sa structure de 'dépassement' ou de 'négation' par rapport à ce qu'il est.",
      "Elle prouve scientifiquement l'existence de l'inconscient."
    ],
    correct: 2,
    explanation: `La phénoménologie, initiée par Husserl et développée par Merleau-Ponty et Sartre, propose de décrire les structures de l'expérience vécue, sans présupposés métaphysiques ou scientifiques. Son apport au problème du moi est considérable. 1) Le moi est incarné : je ne suis pas une conscience dans un corps, je suis mon corps en situation dans le monde (Merleau-Ponty). 2) Le moi est relation à autrui : autrui n'est pas une inférence, il est donné dans l'expérience du regard qui me constitue (Sartre). 3) Le moi n'est pas un objet : la conscience est toujours 'conscience de...', elle est intentionnalité et dépassement. Je ne coïncide jamais avec ce que je suis (Sartre). Le moi apparaît ainsi comme une relation dynamique et ambiguë au monde, au corps et à autrui. Exemple : Merleau-Ponty montre que percevoir n'est pas recevoir des données sensorielles, mais être engagé activement dans un monde qui a du sens pour mon corps ; mon 'moi' est cet engagement même.`
  },
  // Question n°99
  {
    question: "Comment la notion de 'folie' est-elle revalorisée par Nietzsche dans 'Le Gai Savoir' ?",
    answers: [
      "Comme un état supérieur de conscience, seul capable d'accéder à des vérités inaccessibles à la raison.",
      "Non comme un état supérieur en soi, mais comme une condition possiblement nécessaire au développement de certaines vertus (comme la soif de connaissance) ; la santé exclusive n'est peut-être qu'un préjugé.",
      "Comme une maladie qu'il faut absolument soigner par la médecine."
    ],
    correct: 2,
    explanation: `Nietzsche ne fait pas l'apologie romantique de la folie comme génie. Il procède à un renversement critique. Il commence par souligner que la 'santé de l'âme' est relative à nos buts et valeurs. Puis il pose une question subversive : 'si nous pourrions nous passer de la maladie, même pour le développement de notre vertu' ? Et plus précisément : notre 'soif de connaissance et de connaissance de nous-mêmes n’aurait-elle pas tout autant besoin de l’âme malade que de l’âme saine' ? Autrement dit, les états considérés comme morbides (la mélancolie, l'angoisse, la 'folie' même) pourraient être des ferments de profondeur, de lucidité et de création. Vouloir à tout prix la 'santé' pourrait être un signe de superficialité. Exemple : Les grands artistes, penseurs ou mystiques ont souvent traversé des crises profondes, des états limites, qui ont été source de leur œuvre ou de leur vision.`
  },
  // Question n°100
  {
    question: "Selon la conclusion générale, que devient le moi une fois qu'on a parcouru les différentes 'métamorphoses' de ses conceptions ?",
    answers: [
      "Une illusion à dissiper.",
      "Une substance éternelle à retrouver.",
      "Une 'énigme' vivante, une construction toujours en devenir, à la fois psychique, narrative et sociale, qui se définit moins par ce qu'il est que par ce qu'il fait, choisit et assume.",
    ],
    correct: 3,
    explanation: `La conclusion synthétise le parcours de la séquence. Le moi n'est pas résolu en une définition simple. Il apparaît comme une 'énigme' (Augustin), une 'question' pour lui-même. Il n'est ni une substance fixe, ni une pure illusion. C'est une réalité complexe et mouvante, le résultat de multiples constructions : construction psychique (par la mémoire, l'inconscient, le conflit des instances), construction narrative (par les récits que nous faisons de notre vie), construction sociale (par le regard et la reconnaissance d'autrui, par les rôles que nous jouons). Finalement, le moi se définit peut-être moins par une essence que par une activité : il est celui qui agit, qui choisit, qui est responsable de ses actes, qui se projette dans l'avenir. Il est un devenir perpétuel, une 'métamorphose' permanente qui est son mode d'être même. Exemple : Notre identité est le fragile et dynamique équilibre entre ce que nous avons été (mémoire), ce que nous sommes dans l'instant (expérience vécue), ce que les autres voient de nous, et ce que nous aspirons à devenir (projet).`
  }
];