// ============================================
// DONNÉES GÉNÉRALES
// ============================================
const titre = "QUIZ HLP - Les métamorphoses du moi";
const sousTitre = "100 questions";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE (Synthèse)
// ============================================
const philosophyData = {
  texte: `Le « moi » est l’objet d’une quête permanente et problématique. Depuis le « connais-toi toi-même » de l’Antiquité, la pensée occidentale a tenté de cerner cette entité. Le <em>cogito</em> cartésien en fait une substance pensante, fondement certain de la connaissance. Pourtant, dès le XVIIIe siècle, Hume et Rousseau ébranlent cette évidence, révélant un moi fluide, insaisissable, construit par la mémoire et le récit. Le XIXe siècle romantique exalte un moi tourmenté et en devenir, tandis que le XXe siècle, avec Freud, le découvre traversé par l’inconscient, éclaté en instances conflictuelles. Finalement, le moi apparaît moins comme une donnée que comme une construction, à la fois psychologique, narrative et sociale, en perpétuelle métamorphose.`,
  source: "Synthèse des enjeux philosophiques de la séquence « Les métamorphoses du moi »."
};

// ============================================
// QUESTIONS DU QUIZ (1 à 100)
// ============================================
const questions = [
  // Question n°1
  {
    question: "Quelle est la maxime inscrite sur le fronton du temple d’Apollon à Delphes, souvent considérée comme l’origine de la quête philosophique de soi ?",
    answers: [
      "« Rien de trop » (<em>Μηδὲν ἄγαν</em>), un appel à la modération en toutes choses.",
      "« La mesure est ce qu’il y a de meilleur » (<em>Μέτρον ἄριστον</em>), une formule attribuée à Cléobule.",
      "« Connais-toi toi-même » (<em>Γνῶθι σεαυτόν</em>), une invitation à l’examen de sa propre nature."
    ],
    correct: 3,
    explanation: `La maxime delphique « Connais-toi toi-même » pose le problème de la connaissance de soi comme un fondement de la sagesse. Dans son contexte antique, elle était moins une incitation à l’introspection psychologique moderne qu’un rappel à l’humilité, invitant l’homme à reconnaître ses limites face aux dieux et sa condition mortelle. Socrate en a fait le principe de sa méthode maïeutique, transformant cette injonction en un questionnement permanent sur ce que l’on croit savoir, notamment sur soi-même. Elle instaure ainsi une circularité problématique où le sujet qui cherche et l’objet cherché ne font qu’un.
    \nExemple : En proclamant qu’il ne savait qu’une chose, c’est qu’il ne savait rien, Socrate se présentait comme le fidèle serviteur de cette maxime, montrant que la véritable connaissance de soi commence par la reconnaissance de son ignorance.`
  },
  // Question n°2
  {
    question: "Comment Platon, dans le <em>Théétète</em>, définit-il l’acte de penser ?",
    answers: [
      "Comme une intuition immédiate de la vérité, sans discours intérieur.",
      "Comme le simple enregistrement passif des impressions sensibles venues du monde extérieur.",
      "Comme un dialogue silencieux que l’âme se tient à elle-même, s’interrogeant et se répondant."
    ],
    correct: 3,
    explanation: `Dans le <em>Théétète</em>, Platon définit la pensée comme un dialogue intérieur et silencieux de l’âme avec elle-même. Cette conception, héritée de la pratique socratique, signifie que penser n’est pas recevoir passivement des idées, mais être actif dans un processus de questionnement, d’affirmation et de négation. L’âme devient son propre interlocuteur, examinant et jugeant ses propres opinions. Cette vision maïeutique de la pensée souligne que la formation d’un jugement ou d’une opinion passe par ce débat intérieur critique, qui est aussi une manière de se mettre soi-même en question.    \nExemple : Lorsque nous hésitons sur une décision importante, nous pesons mentalement le pour et le contre dans un débat intérieur qui illustre parfaitement ce « discours de l’âme à elle-même ».`
  },
  // Question n°3
  {
    question: "Quelle capacité, selon Kant dans son <em>Anthropologie</em>, distingue fondamentalement l’homme de l’animal ?",
    answers: [
      "La capacité de fabriquer et d’utiliser des outils complexes de manière intentionnelle.",
      "La capacité de ressentir des émotions complexes comme la pitié ou la honte.",
      "La capacité de posséder le « Je » dans sa représentation, de se désigner soi-même comme sujet."
    ],
    correct: 3,
    explanation: `Kant identifie la possession du « Je » dans la représentation comme le trait distinctif et fondateur de l’humanité. Cette capacité de se rapporter à soi-même comme à un sujet unifié (« Je ») à travers toutes ses expériences confère à l’homme sa dignité de personne. Cette unité de la conscience, rendue possible par l’entendement, est antérieure au langage et marque le passage de l’enfant qui « se sent » à l’enfant qui « se pense ». Elle est la condition de possibilité de l’identité personnelle et de la responsabilité.    \nExemple : Le moment où un enfant cesse de parler de lui à la troisième personne (« Charles a faim ») pour dire « J’ai faim » représente, pour Kant, l’avènement de cette conscience de soi comme sujet pensant et unifié.`
  },
  // Question n°4
  {
    question: "Que signifie l’expression « Je est un autre », formulée par Arthur Rimbaud dans ses lettres dites « du voyant » ?",
    answers: [
      "Une dénégation radicale de l’identité personnelle : le « Je » n’existe tout simplement pas.",
      "Une affirmation du solipsisme : je ne peux connaître avec certitude que ma propre conscience.",
      "L’idée que le sujet créateur ne coïncide pas avec lui-même ; une altérité interne s’exprime dans la création poétique."
    ],
    correct: 3,
    explanation: `« Je est un autre » révolutionne la conception du sujet créateur. Rimbaud y exprime que le « moi » quotidien, social et conscient, n’est pas l’auteur véritable de la poésie. L’acte de création fait émerger une autre voix, une altérité radicale au sein même du sujet. Le poète n’est plus un « pilote » maître de sa pensée, mais un instrument (« le bois qui se trouve violon ») traversé par des visions (« On me pense »). Cette non-coïncidence du sujet avec lui-même est le principe de la modernité poétique, obtenue par un « dérèglement raisonné de tous les sens » qui brise le moi rationnel.    \nExemple : L’écrivain qui dit « mes personnages m’échappent et agissent d’eux-mêmes » exprime une intuition proche de celle de Rimbaud sur la part d’inconnu et d’altérité à l’œuvre dans la création.`
  },
  // Question n°5
  {
    question: "Dans la « première topique » freudienne, comment l’appareil psychique est-il organisé ?",
    answers: [
      "En deux instances principales : le conscient et l’inconscient.",
      "En quatre sphères fonctionnelles : la pulsion, l’affect, la représentation et la conscience.",
      "En trois systèmes ou lieux : l’inconscient, le préconscient et le conscient."
    ],
    correct: 3,
    explanation: `Le premier modèle de Freud, dit « première topique », divise l’appareil psychique en trois systèmes ou lieux (<em>τόποι</em>). L’inconscient est le réservoir des pulsions et des désirs refoulés, inaccessible directement à la conscience. Le préconscient fait office de sas ; il contient des éléments (souvenirs, connaissances) qui ne sont pas actuellement conscients mais peuvent le devenir sans résistance. Le conscient est le lieu de la perception interne et externe, et de la pensée logique. Cette topique décrit un parcours où les contenus de l’inconscient doivent être déformés ou « lissés » pour franchir la censure et accéder, via le préconscient, à la conscience.    \nExemple : Un souvenir d’enfance oublié (préconscient) peut remonter à la mémoire (conscient) à la faveur d’une odeur, contrairement à un désir œdipien refoulé (inconscient) qui reste inaccessible sans un travail analytique.`
  },
  // Question n°6
  {
    question: "Selon la lecture de Bergson, comment les romanciers réalistes présentent-ils généralement la vie intérieure de leurs personnages ?",
    answers: [
      "Avec une profondeur psychologique qui saisit parfaitement la fluidité des sentiments.",
      "Comme une « ombre » conventionnelle, une juxtaposition d’états simplifiés et étiquetés qui masque la complexité réelle.",
      "En mettant en lumière de manière scientifique les mécanismes inconscients qui les animent."
    ],
    correct: 2,
    explanation: `Bergson critique la psychologie des romanciers réalistes (comme Balzac) qui, pour les besoins du récit, décrivent les personnages avec le vocabulaire psychologique ordinaire. Ils isolent des états d’âme (jalousie, ambition), les nomment et les juxtaposent. Cette description donne une image figée et schématique du moi, une « ombre » utile pour la communication sociale, mais qui est une construction figée. Elle rate l’essentiel : la fluidité, l’interpénétration des sentiments, le changement continu. Seul un romancier « hardi » comme Dostoïevski peut suggérer la richesse et la mobilité du moi réel.    \nExemple : Décrire un personnage comme « jaloux » est une étiquette commode, mais elle ne rend pas compte de la nuance, de l’évolution et du mélange constant de cette jalousie avec d’autres sentiments (amour, honte, désir de reconnaissance).`
  },
  // Question n°7
  {
    question: "Quelle est la principale difficulté que rencontre Rousseau dans l’écriture de ses <em>Confessions</em>, selon son propre aveu ?",
    answers: [
      "La pression de la censure et la crainte des réactions du public à ses révélations.",
      "Le manque d’événements marquants ou héroïques dans sa vie personnelle.",
      "Les lacunes de sa mémoire, qui l’obligent parfois à combler des vides et menacent la sincérité absolue qu’il revendique."
    ],
    correct: 3,
    explanation: `Rousseau, dans le préambule des <em>Confessions</em>, affirme un projet d’une sincérité radicale : montrer « un homme dans toute la vérité de la nature ». Cependant, il se heurte à l’obstacle fondamental de la mémoire. Il avoue lui-même qu’il peut « employer quelque ornement indifférent » pour « remplir un vide occasionné par [son] défaut de mémoire ». Cela crée une tension constitutive de l’autobiographie : la volonté de vérité totale se heurte à la fragilité, à la sélectivité et aux reconstructions inévitables de la remémoration. L’autobiographie est toujours, en partie, une recréation du passé.    \nExemple : Nos propres souvenirs d’enfance sont souvent des reconstructions à partir de photos ou de récits familiaux, et non des enregistrements fidèles et complets de l’événement vécu.`
  },
  // Question n°8
  {
    question: "Dans <em>Lorenzaccio</em> de Musset, comment le héros justifie-t-il son projet d’assassinat du tyran Alexandre de Médicis ?",
    answers: [
      "Comme un acte purement politique, motivé par un idéal républicain et le bien du peuple.",
      "Comme une vengeance personnelle pour un affront ou un tort qu’Alexandre lui aurait directement fait.",
      "Comme la seule action qui puisse encore lui donner un sens et le raccrocher à une forme de vertu perdue."
    ],
    correct: 3,
    explanation: `Lorenzaccio est un héros romantique rongé par le dédoublement et la perte d’identité. Il ne se reconnaît plus dans l’homme raffiné qu’il était. Le meurtre n’est pas présenté comme un acte vertueux et héroïque au sens classique. C’est un geste désespéré, « le seul brin d’herbe » auquel il peut se cramponner. Il s’agit pour lui de retrouver, par une action extrême, une unité et un sens à sa vie disloquée. Le meurtre devient « le seul fil » qui le rattache à son « cœur d’autrefois », la dernière possibilité de retrouver une forme de consistance morale.    \nExemple : Ce raisonnement illustre la logique tragique du héros romantique pour qui l’action violente, même immorale, est préférable à la passivité et au néant intérieur qui le caractérise.`
  },
  // Question n°9
  {
    question: "Selon la « seconde topique » freudienne, quelle est la fonction principale du « moi » (<em>Ich</em>) ?",
    answers: [
      "Incarné la morale sociale et les interdits parentaux intériorisés.",
      "Être le réservoir des pulsions libidinales et agressives, source de l’énergie psychique.",
      "Assurer la médiation et le compromis entre les exigences du ça, les interdits du surmoi et les contraintes de la réalité extérieure."
    ],
    correct: 3,
    explanation: `Dans la seconde topique (ça, moi, surmoi), le moi est l’instance exécutive et médiatrice. Il est « pressé par le ça » (les pulsions), « opprimé par le surmoi » (la conscience morale) et « repoussé par la réalité ». Sa tâche difficile est de trouver un équilibre, de « servir trois maîtres sévères » souvent contradictoires. Il tente de satisfaire les désirs du ça de manière socialement acceptable et réaliste, tout en respectant les exigences morales du surmoi. Il est le siège de la raison, de la perception et de l’action adaptée.    \nExemple : Lorsque nous ressentons de la colère (pulsion du ça), le moi peut décider de l’exprimer de manière civilisée (par une discussion) plutôt que par la violence, pour éviter les sanctions sociales (réalité) et la culpabilité (surmoi).`
  },
  // Question n°10
  {
    question: "Que découvre Œdipe dans la tragédie de Sophocle, et en quoi cette découverte constitue-t-elle une révélation catastrophique sur le moi ?",
    answers: [
      "Il découvre qu’il est le fils d’un dieu et que son destin était de régner glorieusement sur Thèbes.",
      "Il découvre que ses parents biologiques sont toujours vivants et qu’il peut enfin les retrouver.",
      "Il découvre qu’il est l’assassin de son père et l’époux de sa mère, réalisant qu’il est l’auteur des actes les plus contraires à l’identité qu’il se donnait."
    ],
    correct: 3,
    explanation: `La tragédie d’Œdipe est une exploration radicale de la méconnaissance de soi. Œdipe, en cherchant l’assassin du roi Laïos pour sauver Thèbes, découvre qu’il est lui-même cet assassin, et que sa victime était son père. Il découvre aussi que Jocaste, qu’il a épousée, est sa mère. Cette révélation est une catastrophe identitaire : il est l’auteur des actes les plus impies (parricide, inceste) qu’il cherchait à punir. Il découvre qu’il n’est pas celui qu’il croyait être – un roi juste et intelligent – mais un monstre à ses propres yeux. La quête de connaissance sur soi aboutit ici à un savoir insupportable qui détruit le moi.    \nExemple : Œdipe illustre le paradoxe d’une quête de vérité sur soi qui peut révéler une identité monstrueuse et inacceptable, que la conscience avait refoulée.`
  },
  // Question n°11
  {
    question: "Quelle critique principale Alain adresse-t-il à la notion freudienne d’inconscient ?",
    answers: [
      "Il la trouve trop scientifique et pas assez philosophique ou spirituelle.",
      "Il estime qu’elle surestime de manière obsessionnelle le rôle de la sexualité infantile.",
      "Il y voit une « idolâtrie du corps », faisant du corps un « autre Moi » doué d’intentions, alors qu’il ne s’agit que du mécanisme corporel."
    ],
    correct: 3,
    explanation: `Alain, philosophe rationaliste, rejette la conception freudienne d’un inconscient psychique structuré comme un autre sujet. Pour lui, parler d’inconscient est acceptable comme « abrégé du mécanisme » corporel (les réflexes, les habitudes). Mais il critique le fait d’en faire un « autre Moi » avec ses propres passions et ruses. Cela revient, selon lui, à faire du corps un « semblable », un « esclave » doué d’intentions, ce qui est une « idolâtrie du corps » et une « méprise sur le Moi ». Alain défend l’idée que la conscience et la volonté sont maîtresses, et que l’inconscient est souvent une excuse pour se décharger de sa responsabilité.    \nExemple : Pour Alain, un lapsus n’est pas la manifestation d’un désir inconscient, mais simplement un raté mécanique de la parole, sans signification psychologique profonde nécessitant une interprétation.`
  },
  // Question n°12
  {
    question: "Selon David Hume, dans son <em>Traité de la nature humaine</em>, que découvre-t-on lorsque l’on essaie de percevoir son propre « moi » par l’introspection ?",
    answers: [
      "Une substance simple, immatérielle et permanente : l’âme ou le sujet pensant.",
      "Un flux incessant et changeant de perceptions distinctes, sans aucun noyau substantiel permanent.",
      "La trace de Dieu dans l’âme humaine, garantissant son unité et son identité."
    ],
    correct: 2,
    explanation: `Hume, empiriste radical, applique sa méthode à la notion de « moi ». Il invite à une introspection rigoureuse : que perçoit-on quand on essaie de saisir son « moi » ? On ne trouve jamais une entité unique et stable, mais toujours une perception particulière (une douleur, une couleur, une pensée, une émotion). Le « moi » n’est donc pas une impression simple. C’est un « faisceau ou une collection de perceptions différentes, qui se succèdent avec une rapidité inconcevable ». L’idée d’un moi identique et continu est une fiction produite par l’imagination, qui, par habitude et via la mémoire, relie ces perceptions successives et crée l’illusion de l’identité.    \nExemple : Je suis tour à tour « celui qui a froid », « celui qui pense à un ami », « celui qui est joyeux ». Aucune de ces perceptions n’est le « moi » ; leur succession, liée par la mémoire, crée l’illusion d’un « moi » unique et substantiel.`
  },
  // Question n°13
  {
    question: "Quelle distinction majeure Paul Ricœur établit-il dans son analyse de l’identité personnelle ?",
    answers: [
      "Entre l’identité biologique (le corps) et l’identité sociale (les rôles).",
      "Entre le moi conscient (l’ego) et le moi inconscient (le ça).",
      "Entre la « mêmeté » (<em>idem</em>), permanence d’un être, et l’« ipséité » (<em>ipse</em>), fidélité à soi-même par la promesse."
    ],
    correct: 3,
    explanation: `Paul Ricœur, dans <em>Soi-même comme un autre</em>, propose une distinction capitale pour penser l’identité. La « mêmeté » (<em>idem</em>, « sameness ») désigne l’identité au sens de la similitude, de la permanence d’un être à travers le temps malgré les changements (comme un arbre qui reste le même). L’« ipséité » (<em>ipse</em>, « selfhood ») renvoie à l’identité narrative du « soi », à la capacité de se maintenir comme le même auteur de ses actes et de tenir ses promesses. L’ipséité n’implique pas une identité substantielle immuable, mais une identité dynamique construite par le récit et l’engagement éthique.    \nExemple : Un homme qui change d’opinion politique conserve sa « mêmeté » biologique, mais son « ipséité » (son identité narrative) se transforme ; il reste cependant capable de tenir ses engagements (fidélité à soi), ce qui relève précisément de l’ipséité.`
  },
  // Question n°14
  {
    question: "Quelle est la position de Nietzsche sur la formule cartésienne « Je pense » ?",
    answers: [
      "Il la voit comme le fondement inébranlable de toute certitude et de la philosophie moderne.",
      "Il l’approuve, mais y ajoute la dimension essentielle du corps et des pulsions négligées par Descartes.",
      "Il la considère comme une « superstition des logiciens », une falsification grammaticale qui postule un sujet là où il n’y a qu’une activité impersonnelle."
    ],
    correct: 3,
    explanation: `Nietzsche déconstruit radicalement le <em>cogito</em> cartésien. Il affirme qu’il est faux de dire « je pense ». On devrait dire impersonnellement « ça pense », comme on dit « il pleut ». La grammaire de nos langues (sujet + verbe) nous impose l’idée d’un sujet substantiel (le « je ») qui serait l’auteur de la pensée. Pour Nietzsche, c’est une illusion métaphysique. La pensée est un événement qui survient, produit par des jeux de forces (les instincts, les pulsions, la volonté de puissance) dont nous n’avons qu’une connaissance très partielle. Postuler un « je » stable derrière l’acte est une « supposition », pas une « certitude immédiate ».    \nExemple : Une idée géniale nous « traverse » souvent de manière subite, sans que nous l’ayons « voulue » ou calculée ; elle semble venir d’ailleurs, illustrant le « ça pense » de Nietzsche.`
  },
  // Question n°15
  {
    question: "Comment le sociologue Émile Durkheim caractérise-t-il la différence entre les sociétés animales et les sociétés humaines ?",
    answers: [
      "Les sociétés animales sont fondées sur la domination hiérarchique, les sociétés humaines sur la coopération égalitaire.",
      "Il n’y a pas de différence fondamentale, l’homme étant un animal social comme les autres.",
      "Dans les sociétés animales, l’individu est gouverné par l’instinct ; dans les sociétés humaines, il est soumis à des règles et des lois venant « du dehors »."
    ],
    correct: 3,
    explanation: `Durkheim, fondateur de la sociologie française, insiste sur le fait que la société humaine impose à l’individu des contraintes extérieures qui le façonnent. L’animal dans son groupe suit principalement ses instincts biologiques, programmés « du dedans ». L’homme, lui, naît dans un monde déjà structuré par des normes, des lois, des coutumes, des langues. Ces réalités sociales, qui préexistent à l’individu et lui survivront, viennent « du dehors », s’imposent à lui et « se surajoutent à sa nature propre ». Le « moi » humain se construit donc dans l’intériorisation de ces règles sociales et ne peut être pensé en dehors d’elles.    \nExemple : Les règles de politesse, le sens du devoir ou l’interdit de l’inceste ne sont pas des instincts, mais des normes sociales que nous apprenons et qui deviennent partie intégrante de notre personnalité et de notre conscience morale.`
  },
  // Question n°16
  {
    question: "Que signifie l’expression de Montaigne « Je peins le passage », dans le contexte de ses <em>Essais</em> ?",
    answers: [
      "Il décrit ses nombreux voyages et les paysages qu’il traverse physiquement.",
      "Il fait des portraits de personnes célèbres de son époque en mouvement.",
      "Il décrit non un être fixe, mais un moi toujours changeant, saisi dans le flux du temps."
    ],
    correct: 3,
    explanation: `Montaigne, dans ses <em>Essais</em>, révolutionne la littérature en faisant de sa propre personne mouvante l’objet de l’écriture. « Je peins le passage » signifie qu’il ne prétend pas capturer un « moi » substantiel et stable. Au contraire, il saisit et décrit son propre changement, sa métamorphose permanente « de jour en jour, de minute en minute ». Son moi est comparable au monde, une « branloire pérenne » (un perpétuel mouvement de balancier). L’identité n’est pas un état, mais un processus. Les <em>Essais</em> sont le journal de cette exploration d’un soi insaisissable et fluide.    \nExemple : Montaigne peut écrire des choses contradictoires à quelques pages d’intervalle, non par incohérence, mais parce qu’il a changé, ou qu’il se saisit sous un angle différent à des moments distincts.`
  },
  // Question n°17
  {
    question: "Dans la psychanalyse de Carl Gustav Jung, qu’est-ce que « l’inconscient collectif » ?",
    answers: [
      "La somme des refoulements personnels de tous les membres d’une même société ou culture.",
      "La partie de l’inconscient personnel influencée par l’éducation et la culture environnante.",
      "Un réservoir de structures psychiques universelles et archaïques communes à toute l’humanité, exprimées dans les mythes et les symboles."
    ],
    correct: 3,
    explanation: `Jung se sépare de Freud sur ce point crucial. Pour lui, l’inconscient ne se réduit pas à l’histoire personnelle et aux pulsions refoulées (inconscient personnel). Il postule l’existence d’un inconscient collectif, couche la plus profonde de la psyché, héritée et commune à l’humanité entière. Il contient des « archétypes », qui sont des formes symboliques universelles (le Héros, la Grande Mère, l’Ombre, le Soi). Ces archétypes structurent notre expérience et apparaissent dans les rêves, les contes, les religions et les œuvres d’art de toutes les cultures. Le moi individuel plonge ses racines dans cette matrice commune et peut entrer en relation avec elle.    \nExemple : Le motif du « voyage au centre de la terre » ou de la « rencontre avec un vieux sage » dans les récits de nombreuses cultures refléterait, selon Jung, des archétypes de l’inconscient collectif.`
  },
  // Question n°18
  {
    question: "Quelle est la critique logique de Sartre à l’égard de la notion freudienne d’inconscient ?",
    answers: [
      "Elle est trop complexe et inutile pour expliquer les comportements humains.",
      "Elle est matérialiste et nie la dimension spirituelle et transcendante de l’homme.",
      "Elle est un concept de « mauvaise foi », car elle suppose une conscience (la censure) qui refoulerait sans savoir ce qu’elle refoule."
    ],
    correct: 3,
    explanation: `Sartre, existentialiste, rejette l’inconscient freudien car il le voit comme une machine à évacuer la responsabilité. Son argument est logique : pour que le refoulement fonctionne, il faut une instance (la « censure ») qui reconnaisse le désir à refouler pour le bloquer. Cette instance doit donc avoir une conscience (même non-thétique) de ce qu’elle refoule. Or, Freud dit que le désir refoulé est totalement inconscient. Pour Sartre, cette contradiction se résout en parlant de « mauvaise foi » : le sujet sait, au fond de lui, ce qu’il refuse de savoir ; il se ment à lui-même pour éviter l’angoisse de la liberté et de la responsabilité. L’inconscient est une aliénation choisie.    \nExemple : Pour Sartre, une personne qui « oublie » systématiquement un rendez-vous important ne le fait pas par un mécanisme inconscient, mais par une mauvaise foi active : elle ne veut pas assumer le choix conscient d’y aller ou non, et préfère se croire victime d’un oubli indépendant de sa volonté.`
  },
  // Question n°19
  {
    question: "Quel problème célèbre de l’identité à travers le temps est illustré par le « bateau de Thésée » rapporté par Plutarque ?",
    answers: [
      "Le problème de l’identité des jumeaux parfaits, indiscernables l’un de l’autre.",
      "Le problème de savoir si un objet qui a toutes ses parties remplacées une à une reste le même objet.",
      "Le problème de l’identité entre un original et une copie parfaite et simultanée."
    ],
    correct: 2,
    explanation: `Le paradoxe du bateau de Thésée est une énigme métaphysique classique sur l’identité dans le temps. Les Athéniens conservent le navire de Thésée en remplaçant au fur et à mesure les planches pourries par des neuves. Quand toutes les planches ont été changées, est-ce encore le même bateau ? Si l’on reconstitue un bateau avec les anciennes planches mises de côté, lequel des deux est le « vrai » ? Ce paradoxe s’applique à l’homme : nos cellules se renouvellent constamment. Qu’est-ce qui fait que nous restons la même personne ? La « forme » ? La continuité psychologique ? La mémoire ? Ce problème met en question l’idée d’une identité substantielle immuable et pose la question du critère de la persistance.    \nExemple : Notre corps se renouvelle presque entièrement en quelques années ; pourtant, nous nous considérons comme la même personne, ce qui suggère que l’identité ne réside pas dans la matière mais dans une forme, une organisation ou une continuité de conscience.`
  },
  // Question n°20
  {
    question: "Comment, selon le cours, la littérature romantique utilise-t-elle le « je » dans des récits fictionnels ?",
    answers: [
      "Pour affirmer l’identité stable, glorieuse et triomphante de l’auteur devant le public.",
      "Pour éviter tout engagement personnel et se cacher derrière un masque purement esthétique.",
      "Pour « métamorphoser » l’auteur à bon compte, en projetant dans un personnage fictionnel ses tourments intimes."
    ],
    correct: 3,
    explanation: `Le romantisme opère un brouillage des frontières entre l’auteur et son personnage. Les écrivains romantiques, souvent tourmentés (Musset, Chateaubriand), utilisent le « je » fictionnel non pour se dissimuler, mais pour explorer et exprimer leur propre sensibilité de manière démultipliée et souvent exacerbée. Le « je » du roman ou du drame devient un double, un <em>alter ego</em> qui vit des passions extrêmes, des doutes métaphysiques, des mélancolies que l’auteur ressent. Cela permet une « métamorphose à bon compte » : l’auteur se projette et se transforme littérairement sans avoir à subir les conséquences réelles des actions de son héros, tout en livrant une part de lui-même.    \nExemple : Dans <em>La Confession d’un enfant du siècle</em>, le « je » du narrateur est un mélange du vécu de Musset et d’une construction romanesque, lui permettant d’analyser et de mettre en scène le « mal du siècle » de sa génération.`
  },
  // Question n°21
  {
    question: "Que met en lumière l’exemple du « couteau de saint Hubert » concernant la notion d’identité ?",
    answers: [
      "La supériorité de la foi et des croyances sur la raison dans la définition de l’identité.",
      "L’importance cruciale de l’artisanat et de la tradition pour préserver l’authenticité des objets.",
      "Que l’identité d’un objet peut être préservée par la croyance et la tradition, indépendamment des changements matériels complets."
    ],
    correct: 3,
    explanation: `Le « couteau de saint Hubert » est un objet de dévotion dont toutes les pièces ont été remplacées au fil des siècles. Pourtant, pour les croyants, il reste le « vrai » couteau du saint. Cet exemple, parallèle au bateau de Thésée, montre que l’identité n’est pas une propriété purement matérielle ou objective. Elle peut être conférée ou maintenue par des facteurs symboliques, narratifs ou sociaux : la croyance collective, le récit qui relie l’objet présent à son origine sacrée, la fonction rituelle qu’on lui attribue. L’identité est donc aussi une construction sociale et culturelle, et non seulement une donnée physique.    \nExemple : Les reliques religieuses, même d’authenticité historique douteuse, conservent leur identité et leur pouvoir sacré aux yeux des fidèles grâce à la tradition et à la foi qui les entourent.`
  },
  // Question n°22
  {
    question: "Selon Kant dans les <em>Fondements de la métaphysique des mœurs</em>, quand l’homme est-il véritablement lui-même ?",
    answers: [
      "Quand il suit ses désirs naturels et ses inclinations sensibles sans entrave.",
      "Quand il est pleinement intégré dans la communauté et vit en harmonie avec les autres.",
      "En tant qu’intelligence appartenant au monde intelligible, soumise aux lois de la raison pure, et non en tant qu’homme sensible."
    ],
    correct: 3,
    explanation: `Kant opère une distinction fondamentale dans la constitution de l’être humain. En tant qu’être sensible (phénomène), l’homme est soumis aux désirs, aux inclinations, aux lois de la nature. Mais en tant qu’être raisonnable (noumène), il appartient au « monde intelligible » et est capable d’autonomie, c’est-à-dire de se donner à lui-même la loi morale par la raison. C’est dans cet exercice de la raison pratique, lorsqu’il agit par devoir et non par inclination sensible, que l’homme accède à son « soi authentique », à sa véritable liberté et dignité. Ce « soi » est le fondement de la responsabilité morale.    \nExemple : Lorsque je résiste à un mensonge profitable par simple respect du principe moral « tu ne mentiras pas », j’agis en tant qu’être raisonnable et j’accède, selon Kant, à mon « vrai moi », par-delà mes intérêts sensibles immédiats.`
  },
  // Question n°23
  {
    question: "Selon Hegel, pourquoi une violence faite à mon corps est-elle une violence faite à « moi » ?",
    answers: [
      "Parce que le corps est la propriété du moi, au même titre qu’une maison ou un vêtement.",
      "Parce que le corps abrite l’âme immortelle, qui est le vrai moi et qui est ainsi atteinte.",
      "Parce que, dans l’existence concrète, je ne suis pas un pur esprit logé dans un corps ; je suis immédiatement présent pour autrui dans mon corps sensible."
    ],
    correct: 3,
    explanation: `Hegel critique la conception cartésienne d’une âme simplement « logée » dans un corps. Pour lui, dans l’existence sociale et juridique, l’individu n’est pas séparable de son corps. Je suis immédiatement présent pour les autres en tant qu’être corporel et sensible. Mon corps n’est pas un objet extérieur, il est l’incarnation de ma liberté dans le monde. Par conséquent, une violence physique contre mon corps (une agression, un viol) n’est pas une simple atteinte à un objet, mais une violence faite à ma personne même, à ma liberté incarnée. Le droit doit protéger le corps car il est l’existence même de la liberté individuelle.    \nExemple : La qualification juridique de « violences » ou de « viol » comme atteintes à l’intégrité de la personne, et non simplement à l’intégrité corporelle, repose sur cette idée hégélienne de l’unité indissociable de la personne et de son corps.`
  },
  // Question n°24
  {
    question: "Quelle est la thèse de John Locke sur l’identité personnelle, illustrée par l’exemple du chêne ?",
    answers: [
      "L’identité personnelle réside dans la substance immatérielle et immuable de l’âme.",
      "L’identité personnelle n’existe pas ; seul le changement perpétuel des perceptions est réel.",
      "L’identité personnelle réside dans la continuité de la conscience et de la mémoire, qui permet de s’approprier ses actes passés."
    ],
    correct: 3,
    explanation: `Locke, dans l’<em>Essai sur l’entendement humain</em>, propose un critère psychologique et non métaphysique de l’identité personnelle. Un chêne qui grandit et est taillé reste le même chêne par continuité de son organisation vitale. De même, pour une personne, ce qui fait son identité à travers le temps n’est pas une substance immatérielle, mais l’étendue de sa conscience rétrospective. Je suis la même personne que celui qui a vécu tel événement dans mon passé si, et seulement si, je peux me souvenir d’avoir vécu cet événement « de l’intérieur ». La mémoire est le fil qui tisse l’identité personnelle en reliant les expériences.    \nExemple : Un amnésique qui a perdu tous ses souvenirs peut avoir le même corps (identité de l’« homme »), mais on peut douter qu’il soit la même « personne » au sens lockéien, car le lien de mémoire avec son passé est rompu.`
  },
  // Question n°25
  {
    question: "Dans <em>Le Horla</em> de Maupassant, quel symptôme manifeste de façon spectaculaire la dépossession de soi du narrateur ?",
    answers: [
      "Il entend des voix distinctes qui lui ordonnent de faire du mal à son entourage.",
      "Il ne voit plus son reflet dans le miroir, signe qu’un autre être a pris possession de son corps et de son identité.",
      "Il se transforme physiquement, prenant peu à peu l’apparence d’une créature monstrueuse."
    ],
    correct: 2,
    explanation: `Le Horla est un récit fantastique qui explore la dissolution du moi. Le narrateur, hanté par une présence invisible qu’il nomme le Horla, sombre peu à peu dans la folie. Le point culminant de cette aliénation est la scène du miroir : un matin, il ne se voit plus réfléchi. Cet événement symbolise la perte totale de sa propre identité et de la maîtrise de soi. Le Horla, être supérieur et parasitaire, aurait pris possession de son corps et de son esprit, le vidant de sa substance. Le miroir, instrument traditionnel de la conscience de soi (« je me vois, donc je suis »), devient ici l’instrument de la révélation de la perte de soi.    \nExemple : Cette scène préfigure les thèmes de la schizophrénie et du dédoublement de la personnalité, où le sujet ne se reconnaît plus comme étant lui-même dans son reflet ou dans ses actes.`
  },
  // Question n°26
  {
    question: "Que signifie philosophiquement l’expression « autrui est un <em>alter ego</em> » ?",
    answers: [
      "Autrui est mon ennemi naturel (<em>alter</em> = autre, <em>ego</em> = moi).",
      "Autrui est le miroir parfait dans lequel je me reconnais totalement et sans distorsion.",
      "Autrui est un autre moi, un sujet de conscience semblable à moi, mais radicalement distinct et séparé."
    ],
    correct: 3,
    explanation: `La formule « <em>alter ego</em> » (un autre moi) résume le paradoxe de la relation à autrui. D’un côté, autrui est comme moi : un centre de conscience, de volonté, de sensations, un sujet. De l’autre, il est radicalement autre, séparé, opaque. Il n’est ni un simple objet que je peux manipuler, ni un pur sujet transparent dont je pourrais lire les pensées. Cette altérité fondamentale d’autrui est à la fois ce qui me confirme dans mon existence (son regard me constitue) et ce qui peut me menacer (il peut me réduire à l’état d’objet). Le problème philosophique est de penser cette relation entre deux libertés.    \nExemple : Lorsque je croise le regard d’un inconnu dans la rue, j’ai immédiatement conscience qu’il est un être conscient comme moi (<em>alter ego</em>), mais je ne peux pas accéder à son monde intérieur, à ses pensées (il est autre).`
  },
  // Question n°27
  {
    question: "Quelle est la fonction du « surmoi » (<em>Über-Ich</em>) dans la seconde topique freudienne ?",
    answers: [
      "Il représente les pulsions de vie (<em>Éros</em>) et de plaisir, cherchant la satisfaction immédiate.",
      "Il gère les relations avec la réalité extérieure et l’adaptation au monde social.",
      "Il incarne l’idéal du moi, la conscience morale, les interdits parentaux et sociaux internalisés ; il juge et punit le moi."
    ],
    correct: 3,
    explanation: `Le surmoi est l’instance critique et normative de la psyché. Il se forme par l’intériorisation (introjection) des interdits, des exigences et des idéaux des parents, puis de la société. Il fonctionne comme un juge sévère à l’égard du moi : il lui impose des standards de comportement, le récompense par le sentiment de fierté ou d’estime de soi lorsqu’il les suit, et le punit par des sentiments de culpabilité, d’infériorité ou d’angoisse lorsqu’il y déroge. Le surmoi est souvent en conflit avec les demandes pulsionnelles du ça, ce qui met le moi en difficulté.    \nExemple : Le sentiment de honte après avoir menti, même si personne ne le sait et qu’il n’y a pas de conséquence pratique, est une manifestation typique du surmoi qui punit le moi pour avoir transgressé un interdit moral internalisé.`
  },
  // Question n°28
  {
    question: "Comment Nietzsche, dans <em>Aurore</em>, caractérise-t-il notre connaissance des instincts qui nous constituent ?",
    answers: [
      "Elle est complète et scientifique, grâce aux progrès de la biologie et de la psychologie.",
      "Elle est le fruit d’une introspection rigoureuse et méthodique que chacun peut pratiquer.",
      "Elle est totalement incomplète ; nous ignorons leur nombre, leur force, leurs flux et leurs lois."
    ],
    correct: 3,
    explanation: `Nietzsche s’inscrit en faux contre l’idée d’une transparence du sujet à lui-même. Il affirme avec force notre ignorance fondamentale de ce qui nous meut. Les instincts, ces forces qui nous animent, nous sont largement inconnus : nous ne pouvons nommer que « les plus grossiers », et leur dynamique interne (leurs combats, leurs alliances, leurs nutritions) nous échappe totalement. Cette méconnaissance est structurelle ; le « moi » conscient n’est que la partie émergée d’un iceberg de forces obscures et multiples. Cela remet en cause l’idée même d’un « moi » autonome, transparent et maître de ses actes.    \nExemple : Nous expliquons souvent nos actions par des motifs conscients et socialement acceptables (« j’ai fait cela par générosité »), alors que, selon Nietzsche, des instincts bien plus complexes et cachés (volonté de puissance, ressentiment, désir de domination) sont à l’œuvre sans que nous en ayons conscience.`
  },
  // Question n°29
  {
    question: "Que désigne le « Soi » (<em>Selbst</em>) dans la psychologie analytique de Carl Gustav Jung ?",
    answers: [
      "Le moi conscient, identique à l’ego, c’est-à-dire le sentiment immédiat que j’ai de mon identité.",
      "L’inconscient personnel, réservoir des souvenirs et désirs refoulés depuis l’enfance.",
      "L’ensemble total de la psyché, consciente et inconsciente, représentant la totalité et l’unité ultime de la personne."
    ],
    correct: 3,
    explanation: `Pour Jung, le « Soi » (avec une majuscule) est un concept central et distinct du « moi » (l’ego conscient). Le Soi est l’archétype de la totalité psychique, il englobe à la fois le conscient et l’inconscient (personnel et collectif). Il représente le centre organisateur et unifiant de la personnalité, souvent symbolisé par des figures comme le cercle, le mandala ou le sage. Le but de la psychothérapie jungienne est l’« individuation », un processus par lequel le moi conscient se met en relation avec le Soi, permettant une réalisation plus complète et harmonieuse de la personne. Le Soi dépasse et inclut le moi.    \nExemple : Dans les rêves ou les œuvres d’art, le Soi peut apparaître sous la forme d’un personnage central, sage et puissant (un vieil homme, une reine), ou d’un symbole de totalité (un cercle parfait, une rose), qui guide le rêveur vers une plus grande intégration.`
  },
  // Question n°30
  {
    question: "Quelle est la position de Descartes sur la relation entre l’âme (le moi) et le corps, dans la Sixième Méditation ?",
    answers: [
      "Ils sont une seule et même substance, l’étendue et la pensée étant deux attributs d’une même chose.",
      "L’âme est simplement « logée » dans le corps comme un pilote en son navire, sans union réelle.",
      "Ils sont « très étroitement conjoints » pour former un tout, mais restent deux substances distinctes que l’on peut concevoir séparément."
    ],
    correct: 3,
    explanation: `Descartes est le père du dualisme substance/esprit-corps. Il affirme que l’âme (<em>res cogitans</em>) et le corps (<em>res extensa</em>) sont deux substances radicalement différentes par leur essence (pensée vs étendue). Pourtant, l’expérience montre qu’ils sont « très étroitement conjoints » dans l’homme. Cette union est si intime que les passions, la douleur, la faim sont des « façons confuses de penser » provenant de ce mélange. Ainsi, bien que distincts par l’entendement pur, ils forment dans l’existence une unité composée. La métaphore imparfaite du pilote et du navire montre les limites de la représentation de cette union.    \nExemple : Quand je me pince le bras, ce n’est pas mon âme qui le « constate » de l’extérieur comme un pilote verrait une avarie sur son navire ; je ressens immédiatement et confusément la douleur « en » moi, ce qui témoigne de l’union substantielle.`
  },
  // Question n°31
  {
    question: "Quel est le risque majeur pour le moi s’il est trop dominé par le « surmoi » ?",
    answers: [
      "La perversion, c’est-à-dire le débridement sans frein des pulsions du ça.",
      "La névrose, c’est-à-dire un bridage excessif des pulsions, un effacement du moi devant les autres et une culpabilité paralysante.",
      "La psychose, c’est-à-dire une rupture complète avec la réalité commune."
    ],
    correct: 2,
    explanation: `Dans le schéma freudien, un équilibre fragile doit être maintenu entre les instances. Si le moi est trop faible et dominé par un surmoi tyrannique, les pulsions du ça sont excessivement refoulées et contrôlées. Le moi, écrasé par des exigences morales trop rigides, une culpabilité omniprésente et un idéal du moi inatteignable, s’efface. L’individu devient alors névrosé : il peut développer des symptômes (phobies, obsessions, anxiété) qui sont l’expression déguisée des conflits internes, et il a tendance à se soumettre aux autres, à manquer d’affirmation de soi et à rechercher constamment l’approbation.    \nExemple : Une personne souffrant d’un perfectionnisme paralysant, qui se sent constamment coupable de ne pas être à la hauteur et qui s’efface systématiquement au profit des désirs des autres, illustre un surmoi tyrannique dominant un moi affaibli.`
  },
  // Question n°32
  {
    question: "Que signifie l’expression « l’autre n’est donc ni un sujet ni un objet mais un projet », dans le contexte de la quête de soi ?",
    answers: [
      "Autrui est un être incomplet qu’il faut éduquer et transformer selon nos propres idéaux.",
      "La relation à autrui est un projet politique de construction d’une société idéale et harmonieuse.",
      "Dans la relation à moi-même, « l’autre » (comme partie de moi ou comme miroir) n’est pas une donnée fixe, mais une possibilité à explorer, une existence à construire."
    ],
    correct: 3,
    explanation: `Cette formule synthétise une idée forte : l’« autre » dont il est question peut être compris de deux façons : 1) l’altérité en moi-même (l’autre que je suis, l’inconscient, l’étranger familier) ; 2) autrui comme médiateur de ma connaissance de moi. Dans les deux cas, cet « autre » n’est pas une entité statique (un sujet déjà là comme moi, ou un objet à manipuler). Il est un « projet », c’est-à-dire une dynamique, une ouverture, une tâche. Se connaître, c’est se métamorphoser en explorant ces altérités ; se construire, c’est se projeter dans une relation avec autrui qui me transforme. L’identité est un devenir, pas un état.    \nExemple : Le journal intime de Michelet, où il écrit à son « moi » comme à un autre (« écoutez-moi »), montre cette tentative de faire de son propre moi un « projet » à découvrir et à construire par le dialogue et l’écriture.`
  },
  // Question n°33
  {
    question: "Quel est le sens du poème d’Antonio Machado : « Voyageur, il n’y a pas de chemin, le chemin se fait en marchant » ?",
    answers: [
      "Une invitation à l’errance physique et géographique, sans but ni destination.",
      "Une critique de la planification rationnelle et un éloge de l’improvisation pure.",
      "Une métaphore de la quête du moi : le « moi » n’est pas un trésor préexistant à découvrir, il se construit dans l’action même de la recherche."
    ],
    correct: 3,
    explanation: `Cette citation célèbre de Machado résume une conception existentialiste et pragmatique de l’identité. Elle s’oppose à l’idée que le « moi » serait une essence prédéfinie, un chemin tout tracé qu’il suffirait de suivre. Au contraire, il n’y a pas de chemin préexistant. Le chemin – c’est-à-dire l’identité, la vie singulière – n’apparaît qu’à mesure que l’on avance, qu’on agit, qu’on fait des choix. Il se « fait en marchant ». L’identité est une création continue, un processus qui n’a de sens que rétrospectivement, quand on regarde en arrière. Elle est définie par le parcours lui-même.    \nExemple : Un adolescent ne sait pas qui il sera ; ce n’est qu’en vivant, en choisissant des études, des amours, des engagements, qu’il construit peu à peu, pas à pas, le « chemin » de son identité adulte.`
  },
  // Question n°34
  {
    question: "Pourquoi, selon Saint Augustin dans ses <em>Confessions</em>, est-il devenu « une énigme » pour lui-même ?",
    answers: [
      "Parce qu’il a commis des péchés si graves qu’il ne se comprend plus lui-même.",
      "Parce qu’il a perdu la mémoire de son passé et ne sait plus qui il a été.",
      "Parce que la relation du sujet à lui-même est opaque ; il y a dans le sujet une part d’inconnu qui le rend mystérieux à ses propres yeux."
    ],
    correct: 3,
    explanation: `Augustin, bien avant la psychanalyse, exprime avec une force rare l’opacité fondamentale du moi à lui-même. Dans une prière à Dieu, il s’exclame : « je suis devenu pour moi-même une énigme » (<em>mihi quaestio factus sum</em>). Cette phrase marque la découverte que la conscience n’est pas une transparence totale. Le sujet qui cherche à se connaître se heurte à des profondeurs obscures, à des contradictions, à des motivations cachées, à une part d’inconnaissable en lui. La quête de soi bute sur un mystère intérieur. Cette intuition augustinienne préfigure toutes les interrogations modernes sur l’inconscient et les limites de l’introspection.    \nExemple : Le sentiment de ne pas comprendre pourquoi on agit parfois à l’encontre de ses propres principes les plus chers ou de ses intérêts bien compris illustre cette « énigme » de soi-même.`
  },
  // Question n°35
  {
    question: "Dans <em>L’Étrange Cas du Dr Jekyll et de Mr Hyde</em>, comment le Dr Jekyll décrit-il sa double nature avant l’invention du sérum ?",
    answers: [
      "Comme une hypocrisie totale : il feignait d’être bon alors qu’il était foncièrement mauvais.",
      "Comme une « double conscience » où ses deux facettes étaient également sincères ; il était « fondamentalement toutes les deux ».",
      "Comme une maladie mentale où il était périodiquement possédé par un démon ou un esprit malin."
    ],
    correct: 2,
    explanation: `La confession du Dr Jekyll est remarquable par sa profondeur psychologique. Il n’était pas un hypocrite au sens ordinaire. Il affirme que ses deux faces – l’homme vertueux et public, et l’homme plongé dans le vice en secret – étaient « également d’une sincérité parfaite ». Il était authentiquement l’un et l’autre. Cela signifie que la dualité n’était pas entre un vrai moi et un faux-semblant, mais entre deux tendances constitutives de sa personne, également réelles et présentes. Cette description rejoint l’idée freudienne de conflit intrapsychique entre des instances opposées (surmoi moral vs pulsions agressives ou libidinales du ça).    \nExemple : Une personne peut être un parent aimant et dévoué, et en même temps éprouver, dans certaines circonstances, des pulsions de colère ou de rejet qu’elle juge honteuses, sans que l’une des deux facettes ne soit moins « réelle » ou « authentique ».`
  },
  // Question n°36
  {
    question: "Quelle est la « superstition des logiciens » que Nietzsche dénonce dans <em>Par-delà le bien et le mal</em> ?",
    answers: [
      "Croire que la logique formelle peut tout expliquer, y compris les phénomènes humains.",
      "Croire que les mathématiques sont le langage universel et parfait de la nature.",
      "Croire que s’il y a une pensée, il doit y avoir un « je » (un sujet) qui en est l’auteur, comme le postule le « je pense »."
    ],
    correct: 3,
    explanation: `Nietzsche utilise l’expression « superstition des logiciens » pour tourner en dérision une habitude de pensée qu’il juge naïve et erronée. Cette superstition consiste à déduire de la structure grammaticale de nos phrases (sujet + verbe + complément) une vérité métaphysique. Parce que nous disons « je pense », « je veux », nous en concluons qu’il existe une entité substantielle, le « je », qui est la cause de la pensée ou de la volonté. Pour Nietzsche, c’est une inversion : la pensée ou la volonté sont des processus qui arrivent ; le « je » n’en est que l’effet secondaire, une simplification linguistique commode. C’est une « superstition » car c’est une croyance infondée.    \nExemple : Dire « l’éclair brille » ne signifie pas qu’il y a un sujet (« l’éclair ») qui produit l’action (« briller ») ; c’est un événement unique. De même, « ça pense » serait plus juste que « je pense ».`
  },
  // Question n°37
  {
    question: "Comment le cours définit-il le « préconscient » dans la première topique freudienne ?",
    answers: [
      "La partie de l’inconscient qui est sur le point de devenir consciente, à l’instant même.",
      "La conscience immédiate et non réfléchie de nos perceptions sensorielles et de nos affects.",
      "Un lieu intermédiaire, un « sas » contenant des éléments qui ne sont pas actuellement conscients, mais peuvent le devenir sans résistance."
    ],
    correct: 3,
    explanation: `Le préconscient est un concept essentiel dans le premier modèle freudien. Il se situe entre l’inconscient (refoulé, inaccessible) et le conscient. Il contient tout le matériel psychique qui n’est pas présent à l’esprit à un instant donné, mais qui est facilement rappelable : nos souvenirs disponibles, nos connaissances, nos compétences acquises, nos pensées latentes. La frontière entre préconscient et conscient est poreuse et fluide. En revanche, la frontière entre inconscient et préconscient est gardée par la « censure », qui bloque l’accès des désirs refoulés. Le préconscient est donc l’antichambre de la conscience.    \nExemple : Votre numéro de téléphone, votre adresse ou le nom de votre professeur ne sont pas constamment dans votre conscience, mais ils sont dans votre préconscient ; vous pouvez les retrouver et les « rendre conscients » sans effort ni travail analytique.`
  },
  // Question n°38
  {
    question: "Quel est l’argument de Leibniz pour dépasser le dualisme âme/corps cartésien ?",
    answers: [
      "Il nie l’existence de l’âme et défend un matérialisme strict identifiant l’âme au cerveau.",
      "Il propose de voir le corps comme un simple agrégat de parties, sans unité propre, contrairement à l’âme.",
      "Il insiste sur l’unité organique du corps et considère que l’âme est la manifestation d’une substance (la monade) qui exprime l’ensemble du corps."
    ],
    correct: 3,
    explanation: `Leibniz critique la conception cartésienne d’un corps-machine et d’une âme-pensée radicalement hétérogènes. Pour lui, toute substance (qu’il appelle « monade ») est une unité indivisible et dynamique. Le corps humain n’est pas une machine, mais un organisme vivant, une totalité unifiée. L’« âme » n’est pas une substance pensante étrangère à ce corps, mais la manifestation, à un certain degré de clarté, d’une monade dominante (la monade « âme ») qui exprime l’ensemble du corps organisé. L’âme a des « petites perceptions » inconscientes du corps. Ainsi, l’unité de l’homme est préservée, et la conscience n’est qu’un état particulier, plus clair, de la vie de la monade.    \nExemple : Pour Leibniz, le sentiment de soif est une perception confuse de l’état de déshydratation du corps par la monade âme, et non l’effet d’un mécanisme corporel sur une substance étrangère. L’âme et le corps sont en harmonie préétablie.`
  },
  // Question n°39
  {
    question: "Que signifie la métaphore du « pilote en son navire » employée par Descartes, et quelles sont ses limites ?",
    answers: [
      "Une description parfaite et définitive de la relation d’extériorité entre l’âme et le corps.",
      "La preuve que le corps est un simple instrument de l’âme, totalement passif et contrôlé.",
      "Une métaphore imparfaite, car le pilote ne ressent pas les avaries du navire, alors que l’âme ressent immédiatement les affections du corps."
    ],
    correct: 3,
    explanation: `Descartes utilise cette métaphore (âme = pilote, corps = navire) pour illustrer le dualisme : deux substances distinctes. Cependant, il reconnaît lui-même les limites de cette image. Dans la Sixième Méditation, il note que si l’âme n’était qu’un pilote, elle ne ressentirait pas la douleur quand le corps est blessé ; elle le constaterait intellectuellement, comme un pilote voit une avarie sur son navire. Or, nous ressentons immédiatement la douleur, la faim, etc., ce qui prouve une union « très étroite » et intime, produisant des « façons confuses de penser ». La métaphore est donc utile pour penser la distinction par l’entendement, mais inadéquate pour penser l’union réelle et vécue.    \nExemple : Un pilote a froid si la cabine est mal chauffée, mais il n’a pas « mal » si une pièce du moteur casse. L’âme, elle, a directement « mal » à son corps, ce qui montre qu’elle n’en est pas simplement le pilote, mais qu’elle y est unie.`
  },
  // Question n°40
  {
    question: "Quelle est la fonction de l’autobiographie selon Rousseau, telle qu’elle apparaît dans le préambule des <em>Confessions</em> ?",
    answers: [
      "Se justifier et se disculper aux yeux de ses contemporains qui l’ont calomnié.",
      "Écrire un roman déguisé sous la forme de mémoires, pour le plaisir littéraire.",
      "Montrer « un homme dans toute la vérité de la nature », avec une sincérité totale, pour se présenter tel qu’il fut devant le « souverain juge »."
    ],
    correct: 3,
    explanation: `Rousseau assigne à son autobiographie une ambition sans précédent et presque sacrée. Il ne s’agit pas d’une apologie mondaine ou d’un exercice littéraire. Il prétend à une révélation intégrale de soi : « Je veux montrer à mes semblables un homme dans toute la vérité de la nature ; et cet homme ce sera moi. » Il jure de dire « le bien et le mal avec la même franchise », sans rien cacher de mauvais, ni ajouter de bon. Le tribunal ultime n’est pas l’opinion publique, mais Dieu lui-même, devant lequel il se présentera, « ce livre à la main ». L’autobiographie devient ainsi un acte de vérité existentiel et un jugement dernier de soi par soi, dans une perspective quasi religieuse.    \nExemple : Rousseau raconte sans fard des épisodes honteux, comme le vol d’un ruban et l’accusation mensongère d’une servante, ce qui était révolutionnaire pour l’époque et correspond à son projet de vérité absolue.`
  },
  // Question n°41
  {
    question: "Quel est le risque majeur pour le moi s’il est trop dominé par le « ça » ?",
    answers: [
      "La névrose, caractérisée par l’anxiété et les inhibitions.",
      "La perversion, c’est-à-dire le débridement des pulsions sans frein moral ni considération de la réalité.",
      "La mélancolie romantique, un état de tristesse profonde et d’inaction."
    ],
    correct: 2,
    explanation: `Toujours selon le schéma freudien, si le moi est trop faible et laisse les pulsions du ça s’exprimer librement, sans la régulation du surmoi et de la réalité, l’individu tombe dans la perversion. Les désirs primitifs, agressifs ou sexuels, s’expriment sans retenue ni considération pour autrui ou pour les normes sociales. Le moi, débordé, ne parvient plus à jouer son rôle de médiateur et de planificateur. L’individu cherche alors la satisfaction immédiate de ses pulsions, au mépris des conséquences, des dangers et de la morale. Il est gouverné par le principe de plaisir pur.    \nExemple : Un criminel qui agit sous l’emprise exclusive d’une pulsion violente ou sexuelle sans éprouver le moindre remords ni planifier les conséquences illustre (de manière caricaturale) une domination du ça sur un moi et un surmoi défaillants.`
  },
  // Question n°42
  {
    question: "Selon la conception kantienne de la conscience de soi, que permet la synthèse du « Je pense » ?",
    answers: [
      "De découvrir la nature substantielle et immortelle de l’âme comme chose en soi.",
      "De prouver l’existence de Dieu comme garant de l’unité du moi et du monde.",
      "D’unifier la diversité des représentations en une conscience unique et identique : le « Je » transcendantal."
    ],
    correct: 3,
    explanation: `Pour Kant, le « Je pense » n’est pas une intuition qui me donnerait accès à une substance (l’âme). C’est une « aperception pure » ou « transcendantale ». C’est la fonction logique et nécessaire qui accompagne toutes mes représentations et les rend « miennes ». Quand je dis « je pense ceci », « je sens cela », le « je » est le même. Il opère une synthèse : il rassemble la diversité changeante de mes expériences (les différents « moi » empiriques) sous l’unité d’une même conscience. Cette unité formelle est la condition subjective de toute expérience cohérente et de toute connaissance objective. Le « Je » kantien n’est donc pas un objet de connaissance, mais la condition subjective de toute connaissance.    \nExemple : Quand je relie la sensation du froid, la vue de la neige et le souvenir d’une précédente tempête, c’est le même « Je » qui effectue ce lien et fait de ces perceptions disparates une expérience unifiée et signifiante.`
  },
  // Question n°43
  {
    question: "Comment Nietzsche, dans <em>Le Gai Savoir</em>, remet-il en cause l’idée de « santé » de l’âme ?",
    answers: [
      "En affirmant que la santé est un état purement physique, sans rapport avec l’âme ou l’esprit.",
      "En soutenant que « la vertu est la santé de l’âme » est une formule médicale erronée et sans fondement.",
      "En questionnant si notre « soif de connaissance » n’aurait pas besoin de la maladie de l’âme autant que de la santé."
    ],
    correct: 3,
    explanation: `Nietzsche procède à une subversion des valeurs traditionnelles, y compris celle de la santé mentale. Il commence par corriger la formule morale « la vertu est la santé de l’âme » en « ta vertu est la santé de ton âme », soulignant que la santé est relative aux buts et valeurs de chacun. Puis il pousse plus loin : et si la maladie, les états « morbides » (comme la mélancolie, l’angoisse, la folie) étaient aussi nécessaires au développement de certaines « vertus », en particulier la soif de connaissance et la connaissance de soi ? Vouloir exclusivement la santé pourrait être un signe de « barbarie » et de médiocrité. Il ouvre ainsi la possibilité d’une valeur de la souffrance psychique.    \nExemple : Pour Nietzsche, les grandes créations artistiques ou philosophiques sont souvent le fruit d’âmes tourmentées, « malades » au sens conventionnel, mais d’une richesse, d’une profondeur et d’une lucidité inouïes sur la condition humaine.`
  },
  // Question n°44
  {
    question: "Que signifie la formule de Jules Michelet s’adressant à lui-même dans son <em>Journal</em> : « Profitons au moins de ce moment de repos ; écoutez-moi » ?",
    answers: [
      "Une simple note pragmatique pour ne pas oublier une idée ou une tâche importante.",
      "Un signe de trouble psychique, de schizophrénie ou de dédoublement pathologique de la personnalité.",
      "Une illustration de la distance que l’on peut prendre avec soi-même : le « je » qui écrit s’adresse à son « moi » comme à un autre."
    ],
    correct: 3,
    explanation: `Cette citation de Michelet est un exemple frappant d’écriture de l’intime où le sujet se dédouble. Le « je » qui prend la plume ne coïncide pas simplement avec le « moi » quotidien. Il l’interpelle (« mon cher moi »), lui parle (« écoutez-moi »), cherche à « faire connaissance » avec lui. L’écriture du journal devient un espace où le sujet peut prendre du recul, se regarder vivre, dialoguer avec lui-même. Cette mise à distance est un moyen de construction et d’exploration de soi. Elle montre que le « moi » peut être à la fois sujet et objet de la pensée, et que cette relation n’est pas une donnée, mais un travail actif d’élaboration.    \nExemple : Tenir un journal intime est souvent une manière de se parler à soi-même pour clarifier ses pensées et ses sentiments, comme si on se confiait à un ami intérieur, ce qui permet une meilleure connaissance et une certaine maîtrise de soi.`
  },
  // Question n°45
  {
    question: "Quelle est la conception du moi défendue par Alain ?",
    answers: [
      "Un moi éclaté et divisé, dominé par les forces obscures de l’inconscient freudien.",
      "Un moi substantiel, identique à l’âme cartésienne, entité simple et pensante.",
      "Un moi maître de lui, identifié à la volonté et à la conscience, qui doit assumer sa liberté et sa responsabilité."
    ],
    correct: 3,
    explanation: `Alain incarne une philosophie rationaliste et stoïcienne. Pour lui, le moi, c’est la volonté et la conscience. Il rejette vigoureusement l’inconscient freudien qu’il voit comme une « idolâtrie du corps » et une machine à produire des excuses. Croire à l’inconscient, c’est se décharger de sa responsabilité (« c’est plus fort que moi », « je n’y peux rien »). Alain défend l’idée que l’homme est toujours capable, par un effort de volonté et d’attention, de reprendre le contrôle sur ses pensées, ses émotions et ses actes. Le moi n’est pas un champ de bataille de forces obscures, mais le siège de la liberté, de la décision et de la maîtrise de soi.    \nExemple : Pour Alain, un accès de colère n’est pas l’explosion incontrôlable d’une pulsion inconsciente, mais le résultat d’un manque de contrôle volontaire sur soi ; on peut et on doit, par l’habitude et l’effort, apprendre à se maîtriser et à ne pas se laisser emporter.`
  },
  // Question n°46
  {
    question: "En quoi M. Hyde est-il, selon le Dr Jekyll, « plus intégral et plus un » que le Dr Jekyll lui-même ?",
    answers: [
      "Parce qu’il est plus intelligent et plus rusé, capable de plans complexes.",
      "Parce qu’il est physiquement plus fort et plus résistant, doté d’une vitalité supérieure.",
      "Parce qu’il est libéré de la lutte intérieure ; il incarne de manière pure, sans conflit, le mal, alors que Jekyll est partagé."
    ],
    correct: 3,
    explanation: `Cette affirmation paradoxale est au cœur de la nouvelle de Stevenson. Le Dr Jekyll, l’homme respectable, est un être divisé, tiraillé en permanence entre ses aspirations morales et ses désirs honteux. Son moi est un champ de bataille intérieur, source de souffrance. M. Hyde, en revanche, est la matérialisation de la seule partie mauvaise, libérée de tout frein moral et social. Il est donc « plus intégral » : il ne connaît pas la division, le remords, le conflit psychique. Il est « un », tout entier voué à la satisfaction immédiate de ses pulsions. Cette « unité » monstrueuse est présentée comme plus « naturelle et humaine » à Jekyll, car elle est l’expression sans entrave d’une partie de lui-même, non contrariée par l’autre.    \nExemple : Cette idée rejoint la notion romantique du « monstre » ou du « sauvage » comme être plus authentique car non socialisé, non civilisé, même si cette authenticité est destructrice et amoral.`
  },
  // Question n°47
  {
    question: "Quelle est la position de Sartre sur le rapport du « moi » à ses propres attitudes, comme l’attention en classe ?",
    answers: [
      "Le moi coïncide parfaitement avec ses attitudes ; si je joue à être attentif, alors je suis réellement et pleinement attentif.",
      "Le moi « échappe » toujours à l’être ; je ne suis jamais pleinement aucune de mes attitudes, je joue toujours plus ou moins à les être.",
      "Le moi est déterminé par son inconscient, donc ses attitudes ne sont pas libres mais le résultat de mécanismes cachés."
    ],
    correct: 2,
    explanation: `Sartre développe une phénoménologie de la conscience. Pour lui, la conscience est toujours « conscience de quelque chose » et, par là même, elle n’est jamais identique à son objet. Appliqué au moi : quand j’adopte une attitude (être attentif, être courageux, être triste), je ne suis pas cette attitude comme la boîte d’allumettes est sur la table. Il y a toujours une distance, un « jeu », une possibilité de prendre conscience de cette attitude. « Le beau parleur est celui qui joue à parler ». Même dans l’attitude la plus sincère, je ne coïncide jamais totalement avec elle ; je peux toujours en prendre conscience, la modifier, y échapper. Cette non-coïncidence est la liberté même de la conscience.    \nExemple : Lors d’un enterrement, je peux « jouer » le rôle du parent triste, adopter les gestes et les paroles attendus, tout en étant conscient de jouer ce rôle, sans forcément éprouver une tristesse pure et simple qui m’envahirait totalement.`
  },
  // Question n°48
  {
    question: "Quel était le rôle de l’hypnose dans les premiers travaux de Freud et de Breuer ?",
    answers: [
      "Un simple outil de spectacle et de divertissement, sans valeur scientifique.",
      "Un moyen thérapeutique de suggestion directe, visant à imposer la guérison par la parole de l’hypnotiseur.",
      "Un moyen de rendre poreuse la séparation entre conscience et inconscient, permettant d’accéder à des souvenirs traumatiques refoulés."
    ],
    correct: 3,
    explanation: `Dans ses premiers travaux avec Breuer (<em>Études sur l’hystérie</em>), Freud utilisait l’hypnose. Ils avaient observé que sous hypnose, les patients hystériques pouvaient se souvenir de traumatismes psychiques oubliés à l’état de veille, et que l’expression de ce souvenir accompagnée de l’émotion associée (catharsis) pouvait faire disparaître le symptôme physique (paralysie, etc.). Cela les a conduits à l’idée d’une « double conscience » ou d’états « hypnoïdes » : une partie de la vie psychique, liée au trauma, serait dissociée de la conscience normale. L’hypnose permettait de faire le pont entre ces deux états. Freud abandonnera ensuite l’hypnose pour la méthode des associations libres, mais l’idée d’un matériel psychique inaccessible à la conscience volontaire était posée.    \nExemple : Une patiente souffrant d’une paralysie du bras sans cause organique pouvait, sous hypnose, se rappeler un événement où elle avait voulu frapper quelqu’un mais s’était retenue ; le symptôme disparaissait après ce rappel et l’expression de la colère refoulée.`
  },
  // Question n°49
  {
    question: "Que signifie l’expression « ipséité » (<em>selfhood</em>) chez Paul Ricœur, opposée à la « mêmeté » ?",
    answers: [
      "L’identité biologique et génétique, garantie par la permanence de l’ADN.",
      "L’identité sociale et les différents rôles (parent, professionnel) que l’on joue dans la société.",
      "L’identité du « soi » comme capacité à se maintenir comme le même auteur de ses actes et de ses promesses."
    ],
    correct: 3,
    explanation: `Ricœur distingue soigneusement deux types d’identité. La « mêmeté » (<em>idem</em>) est l’identité du même, la permanence d’un être à travers le temps (comme un rocher ou un arbre qui reste numériquement le même). L’« ipséité » (<em>ipse</em>) est l’identité du soi, spécifiquement humaine. Elle ne repose pas sur l’immutabilité, mais sur la capacité à tenir ses promesses, à être responsable de ses actes passés et à se projeter dans l’avenir. C’est une identité narrative, construite par le récit que l’on fait de sa vie. Je reste « moi-même » non parce que je suis substantiellement identique, mais parce que je peux dire « c’est moi qui ai fait cela » et « je m’engage à faire cela ».    \nExemple : Un ami sur lequel on peut toujours compter manifeste une forte ipséité : il est fidèle à lui-même et à sa parole, même si ses goûts, ses opinions ou son apparence ont pu changer au fil des ans (sa mêmeté évolue).`
  },
  // Question n°50
  {
    question: "Comment la question des personnes transgenres éclaire-t-elle le débat philosophique sur l’identité ?",
    answers: [
      "Elle montre que l’identité sexuelle est purement biologique, génétique et immuable de la naissance à la mort.",
      "Elle prouve l’importance décisive des stéréotypes de genre imposés par la société.",
      "Elle illustre la possibilité d’une dissociation entre l’identité biologique (le corps) et l’identité vécue, psychologique, remettant en cause une définition purement substantielle ou corporelle du moi."
    ],
    correct: 3,
    explanation: `L’exemple des personnes transgenres est mobilisé pour montrer la complexité et la multi-dimensionnalité de l’identité. Il révèle qu’il n’y a pas nécessairement coïncidence entre le sexe biologique assigné à la naissance (corps) et le genre vécu (le sentiment profond et durable d’être un homme, une femme, ou non-binaire). Pour une personne transgenre, son « moi » authentique, son identité psychologique profonde, ne correspond pas au corps dans lequel elle est née. Cela montre que l’identité personnelle n’est pas réductible à un donné biologique ou anatomique ; elle inclut une dimension psychologique essentielle, un vécu, une histoire narrative. La transition (sociale, médicale) vise alors à faire coïncider le corps et l’apparence sociale avec cette identité vécue.    \nExemple : Cette situation pose des questions philosophiques et juridiques fondamentales sur ce qui définit l’identité d’une personne : est-ce l’état civil (basé sur le sexe observé à la naissance) ou le sentiment d’appartenance à un genre, lequel relève de l’expérience intime et de l’autodétermination ?`
  },
  // Question n°51
  {
    question: "Que signifie, dans le contexte de la séquence, l’expression « archéologie de la subjectivité » ?",
    answers: [
      "Une étude historique des civilisations anciennes par des sujets modernes et leur point de vue.",
      "L’analyse des textes philosophiques anciens sur le moi, pour en retracer la généalogie.",
      "Une méthode qui consiste à creuser dans les couches profondes du psychisme pour retrouver les fondements oubliés de la construction du moi."
    ],
    correct: 3,
    explanation: `L’expression « archéologie de la subjectivité » évoque une recherche qui ne prend pas le moi comme une donnée évidente, mais qui cherche à en reconstituer la genèse, les strates, les conditions d’émergence. Comme l’archéologue fouille le sol pour trouver les vestiges d’une civilisation enfouie, le philosophe ou le psychanalyste « fouille » la psyché pour retrouver les souvenirs enfouis, les traumatismes fondateurs, les mécanismes inconscients qui ont construit le sujet tel qu’il est. Freud, avec sa méthode de remontée vers les souvenirs d’enfance et les désirs refoulés, pratique une telle archéologie. C’est une enquête sur les origines souvent oubliées du moi actuel.    \nExemple : La cure psychanalytique est souvent comparée à un travail archéologique : le patient et l’analyste exhument et réassemblent patiemment les fragments d’une histoire personnelle oubliée ou refoulée pour lui donner sens et comprendre la formation des symptômes actuels.`
  },
  // Question n°52
  {
    question: "Comment interpréter la phrase de Nietzsche : « Ô mon frère, derrière tes sentiments et tes pensées se cache un maître puissant, un sage inconnu ; il se nomme toi-même (<em>Selbst</em>). Il habite ton corps, il est ton corps. » ?",
    answers: [
      "Comme une affirmation d’un moi spirituel distinct du corps, qui l’habite et le contrôle.",
      "Comme une invitation à identifier le « soi » véritable non à la conscience réfléchie, mais au corps vivant et à ses instincts.",
      "Comme une simple métaphore poétique sans portée philosophique précise sur la nature du moi."
    ],
    correct: 2,
    explanation: `Cette citation de <em>Ainsi parlait Zarathoustra</em> résume le renversement nietzschéen. Nietzsche s’adresse à un frère encore englué dans les illusions de la métaphysique (les sentiments, les pensées abstraites). Il lui révèle que son vrai maître, son « soi » (<em>Selbst</em>) authentique, n’est pas cette conscience réfléchie, mais son corps lui-même, avec sa sagesse propre, ses instincts, ses forces vitales. Le corps n’est pas la prison de l’âme, il est le siège de la vie et de la volonté de puissance. Cette identification du <em>Selbst</em> au corps vise à dépasser le mépris chrétien et philosophique du corps, et à retrouver une unité de l’être où le soi est incarnation.    \nExemple : Pour Nietzsche, un choix important, comme une orientation de vie, devrait se faire en « écoutant » son corps, ses instincts de vie, ses dégoûts et ses attirances profondes, plutôt qu’en suivant seulement des raisonnements abstraits ou des morales ascétiques qui méprisent le corps.`
  },
  // Question n°53
  {
    question: "Quel est l’enjeu du « paradoxe du train sans frein » évoqué en marge de l’analyse de <em>Lorenzaccio</em> ?",
    answers: [
      "Illustrer un problème technique de mécanique ferroviaire et de sécurité.",
      "Montrer la supériorité absolue de l’action, même violente, sur la passivité et l’inaction.",
      "Poser le problème éthique de l’action dans une situation où toute décision semble immorale, rendant le choix identitaire tragique."
    ],
    correct: 3,
    explanation: `Ce paradoxe éthique (parfois appelé « dilemme du tramway ») est évoqué pour éclairer le choix impossible de Lorenzaccio. Dans le paradoxe, un train hors de contrôle va tuer cinq personnes sur la voie. Vous pouvez actionner un aiguillage pour le dévier sur une autre voie où il n’en tuera qu’une. Que faire ? Agir fait de vous le meurtrier actif d’un innocent. Ne pas agir fait de vous le spectateur passif de la mort de cinq personnes. Lorenzaccio est dans une situation analogue : tuer le tyran Alexandre (action violente et criminelle) pour sauver Florence de la tyrannie, ou ne rien faire et laisser le peuple souffrir. Ce dilemme montre que la métamorphose du moi en « héros » ou en « criminel » peut naître d’une situation extrême où les cadres moraux habituels sont impuissants et où tout choix engage profondément l’identité de l’agent.    \nExemple : Le cas de résistants durant la Seconde Guerre mondiale qui ont dû commettre des actions violentes (sabotages, exécutions) pour un bien supérieur illustre ce type de choix tragique où l’identité morale se construit dans l’action difficile.`
  },
  // Question n°54
  {
    question: "Pourquoi le « moi » peut-il être considéré comme une « construction » selon la conclusion du cours ?",
    answers: [
      "Parce qu’il est une illusion pure et simple, sans aucune réalité objective.",
      "Parce qu’il n’est pas une donnée naturelle préexistante, mais se forme à travers des processus psychologiques, narratifs et sociaux.",
      "Parce que le cerveau, organe biologique, le construit neuronalement à partir des stimuli extérieurs."
    ],
    correct: 2,
    explanation: `La conclusion de la séquence insiste sur l’idée que le moi n’est pas une « chose » qu’on découvre toute faite, mais un processus, une œuvre en perpétuelle élaboration. Il se construit : 1) Psychologiquement : par la mémoire (Locke), par la synthèse des perceptions (Kant), dans le conflit et la négociation entre les instances psychiques (Freud). 2) Narrativement : par les histoires que nous nous racontons sur nous-mêmes, dans l’autobiographie, le journal intime ou le simple récit de vie (Rousseau, Michelet). 3) Socialement : par le regard et la reconnaissance d’autrui, par l’intériorisation des normes, des rôles et du langage (Durkheim, Sartre). Le moi est donc le résultat dynamique et toujours provisoire de ces multiples constructions entrelacées.    \nExemple : Notre identité professionnelle (« je suis médecin ») est une construction sociale (diplôme, titre, rôle reconnu) que nous avons intériorisée et faite nôtre par un récit personnel (choix d’études, sentiment de vocation, expériences formatrices) et par une identification psychologique.`
  },
  // Question n°55
  {
    question: "Quelle est la signification de l’expérience décrite par Montaigne : la perte d’une dent comme analogie de la mort ?",
    answers: [
      "Une simple observation médicale et physiologique sur le processus de vieillissement.",
      "Une preuve de la résurrection des corps, puisque seule une partie de nous meurt à la fois.",
      "Une métaphore pour dire que le vieillard n’est plus qu’une « moitié » d’homme, et que le moi « fond et échappe à lui-même » avec le temps."
    ],
    correct: 3,
    explanation: `Montaigne, dans une réflexion sur la vieillesse et la mort, utilise l’image concrète et personnelle de la chute d’une dent. Cette perte partielle, survenue sans douleur, lui semble être le « terme naturel » de la durée de cette partie de son être. Il en déduit que beaucoup d’autres parties de lui sont déjà « mortes » ou « demi-mortes ». La vieillesse est ainsi un processus de décomposition lente et progressive, où le moi « fond et échappe à lui-même », se dissout peu à peu, par morceaux. La mort finale ne sera alors que l’achèvement de cette lente métamorphose, tuant « un demi ou un quart d’homme » seulement. Cette vision naturaliste et désenchantée présente le moi comme une entité périssable, évanescente, qui se défait avec le temps.    \nExemple : Cette réflexion rejoint l’idée moderne que nous ne sommes pas les mêmes à 20 ans et à 80 ans, et que la personnalité elle-même peut se modifier profondément avec l’âge, la maladie ou les traumatismes, comme si des parts de nous-mêmes disparaissaient.`
  },
  // Question n°56
  {
    question: "Quel est le statut du « ça » (<em>Es</em>) dans la seconde topique freudienne ?",
    answers: [
      "Le siège de la raison, de la perception de la réalité et de l’action adaptée.",
      "Le réservoir des pulsions (de vie et de mort), des désirs refoulés, de l’énergie psychique brute ; il est inconscient et régit par le principe de plaisir.",
      "L’instance morale et idéale, héritière des interdits parentaux et sociaux."
    ],
    correct: 2,
    explanation: `Le « ça » est la partie la plus archaïque et la plus obscure de l’appareil psychique. Il est le réservoir de l’énergie pulsionnelle, héritée et propre à chaque individu. Il contient les pulsions de vie (<em>Éros</em>, libido) et de mort (<em>Thanatos</em>, agressivité, pulsion de destruction). Il fonctionne selon le « principe de plaisir » : il cherche la satisfaction immédiate et complète des désirs, par n’importe quel moyen, sans égard à la réalité, à la logique, à la morale ou à la sécurité. Le ça est totalement inconscient et ignore le temps et la contradiction. Il est la source de la force qui anime toute la vie psychique, mais une force aveugle et chaotique que le moi doit canaliser et civiliser.    \nExemple : Le désir immédiat de manger tout le gâteau, l’impulsion de frapper quelqu’un qui nous contrarie, ou l’envie soudaine de fuir une situation anxiogène relèvent d’impulsions premières du ça.`
  },
  // Question n°57
  {
    question: "En quoi le « mal du siècle » romantique est-il lié à une certaine conception du moi ?",
    answers: [
      "Il exprime la joie et l’exaltation d’un moi libéré des contraintes sociales et traditionnelles.",
      "Il traduit la confiance en un moi rationnel et scientifique, capable de comprendre et de maîtriser le monde.",
      "Il manifeste le désespoir d’un moi qui se sent démesuré (aspirant à l’absolu) mais coincé dans un monde médiocre, ce qui le conduit à la passivité ou à l’action destructrice."
    ],
    correct: 3,
    explanation: `Le « mal du siècle », caractéristique du héros romantique (René, Oberman, Lorenzaccio), est inséparable d’une nouvelle conception du moi. Ce moi se vit comme une sensibilité exacerbée, une aspiration infinie vers l’idéal, l’amour absolu, la grandeur héroïque. Mais il se heurte à la réalité prosaïque, aux conventions sociales étouffantes, à l’échec des idéaux politiques (post-Révolution, post-Napoléon). Ce décalage entre les aspirations infinies du moi et la finitude décevante du monde crue un sentiment d’impuissance, de vide existentiel, de « vague à l’âme », de mélancolie profonde. Le moi romantique est donc un moi en souffrance, en quête d’absolu, souvent tourné vers le passé ou rêvant d’un ailleurs, et qui peut sombrer dans le désespoir, la passivité stérile ou se réfugier dans une action extrême et souvent auto-destructrice pour retrouver un sens.    \nExemple : Le personnage de René chez Chateaubriand incarne ce moi romantique rongé par un ennui et une tristesse sans cause apparente, un « sentiment du vide » des choses qu’il ne peut apaiser, et qui le conduit à une solitude misanthropique.`
  },
  // Question n°58
  {
    question: "Quelle conception du temps est impliquée dans la définition du moi comme « passage » chez Montaigne ?",
    answers: [
      "Un temps cyclique et éternel, comme celui des saisons ou des réincarnations.",
      "Un temps mécanique et mesurable, linéaire, comme celui d’une horloge ou d’un calendrier.",
      "Un temps fluide et continu, un « branle » perpétuel, dans lequel le moi est saisi comme un être toujours changeant, impossible à fixer."
    ],
    correct: 3,
    explanation: `Montaigne a une intuition profonde de la temporalité constitutive du moi. Le temps n’est pas une série d’instants séparés et fixes, mais un mouvement continu, un « branle » (balancement) incessant. Dans ce flux, toutes choses changent, y compris le moi. C’est pourquoi il « ne peut assurer son objet » (le moi) ; il le prend « en l’instant », mais cet instant est déjà passé, et le moi avec lui. Peindre le moi, c’est donc nécessairement « peindre le passage », c’est-à-dire saisir et décrire cette mouvance même, « de jour en jour, de minute en minute ». Le moi n’a pas d’être stable, il est devenir pur, changement perpétuel.    \nExemple : Montaigne compare le monde et le moi à une rivière où l’on ne se baigne jamais deux fois au même endroit, anticipant ainsi la pensée d’Héraclite (« tout s’écoule ») et celle de Bergson (la durée comme flux continu).`
  },
  // Question n°59
  {
    question: "Comment la psychanalyse a-t-elle transformé le regard sur la folie au XXe siècle ?",
    answers: [
      "Elle l’a ramenée à une possession diabolique ou à une punition divine, comme au Moyen Âge.",
      "Elle l’a « médicalisée », cessant d’y voir une tare naturelle ou une possession, pour en faire une maladie mentale dont on peut chercher les causes psychiques.",
      "Elle l’a glorifiée comme un accès privilégié à une vérité supérieure, inaccessible à la raison."
    ],
    correct: 2,
    explanation: `Le cours situe Freud dans une histoire des représentations de la folie. Avant lui, la folie était souvent considérée comme une malédiction divine, une possession démoniaque (Moyen Âge) ou, à partir du Classicisme, comme une « aliénation » mentale (être « autre »), parfois traitée comme une dégénérescence héréditaire. Avec la psychanalyse, la folie (ou plus précisément, les névroses et psychoses) devient l’objet d’une science médicale et psychologique. Elle n’est plus un état d’âme mystérieux ou un signe de dégénérescence, mais le résultat de conflits psychiques, de traumatismes, de mécanismes de défense pathologiques. Elle devient « compréhensible » (même si pas toujours guérissable) à travers l’investigation de l’inconscient et l’histoire personnelle du sujet. La parole du fou acquiert un sens à décrypter.    \nExemple : L’hystérie, qui était auparavant un diagnostic vague et souvent dépréciatif (surtout pour les femmes, considérées comme « simulatrices »), est devenue pour Freud un trouble nécessitant une écoute et une interprétation des symptômes comme langage symbolique du corps exprimant un conflit refoulé.`
  },
  // Question n°60
  {
    question: "Que permet de comprendre l’exemple des nombreux autoportraits de Rembrandt ?",
    answers: [
      "La maîtrise technique exceptionnelle du peintre dans le traitement de la lumière et de l’ombre.",
      "La volonté de l’artiste de se montrer toujours sous son meilleur jour, idéalisé et glorifié.",
      "La quête d’un peintre à travers les âges pour saisir les métamorphoses de son propre visage et, par là, les changements de son moi."
    ],
    correct: 3,
    explanation: `Rembrandt a réalisé tout au long de sa vie une centaine d’autoportraits, des premiers où il apparaît jeune, ambitieux et plein d’assurance, aux derniers où il se montre vieilli, marqué par les épreuves, les deuils et les difficultés financières, dans une introspection sans fard. Cette œuvre exceptionnelle est comme un journal visuel de ses métamorphoses physiques et, par extension, psychologiques. Elle montre la tentative d’un artiste de se saisir lui-même, de se regarder changer, de fixer les différents « moi » successifs que le temps façonne. Ces autoportraits sont autant de réponses à la question « qui suis-je ? » posée à différents moments de l’existence. Ils illustrent la conscience aiguë de la temporalité, du vieillissement, et le désir de laisser une trace de cette identité mouvante.    \nExemple : En comparant un autoportrait de Rembrandt à 25 ans (fier, costume riche) et un autre à 63 ans (visage buriné, expression mélancolique et sage), on ne voit pas le même homme, et pourtant c’est le même artiste qui s’est peint, témoignant d’une continuité à travers le changement radical.`
  },
  // Question n°61
  {
    question: "Selon la conception freudienne, que sont les « actes manqués » (lapsus, oublis, etc.) ?",
    answers: [
      "De simples accidents sans signification, dus à la fatigue, à la distraction ou au hasard.",
      "Des ratés mécaniques du cerveau, analogues à un bug informatique, qu’il faut corriger.",
      "Des expressions déguisées de désirs ou de pensées inconscientes, qui échappent au contrôle du moi et trahissent le sujet."
    ],
    correct: 3,
    explanation: `Freud accorde une grande importance aux actes manqués (lapsus linguae, oublis de noms, pertes d’objets, erreurs de lecture…). Contrairement au sens commun qui y voit des accidents insignifiants, il y voit la « psychopathologie de la vie quotidienne ». Ce sont des compromis entre une intention consciente et un désir ou une pensée refoulée qui cherche à s’exprimer. Le moi, dans un moment de relâchement de la censure, laisse passer cette expression déformée. L’acte manqué est donc un message de l’inconscient, une « bavure » révélatrice qui montre que le moi n’est pas maître dans sa propre maison. Ils ont une signification qu’il s’agit d’interpréter.    \nExemple : Un élève qui dit « bonjour » à son professeur en lui serrant la main et qui ajoute involontairement « au revoir » fait un lapsus qui peut trahir un désir inconscient de ne pas être là, de mettre fin rapidement à l’interaction, ou de quitter symboliquement l’autorité que représente le professeur.`
  },
  // Question n°62
  {
    question: "Comment le cours définit-il la « maïeutique » socratique, en lien avec la pensée du moi ?",
    answers: [
      "L’art d’accoucher les femmes, métier qu’exerçait la mère de Socrate.",
      "Une méthode pour convaincre autrui par des discours éloquents et des arguments irréfutables.",
      "L’art d’accoucher les esprits : par le questionnement, Socrate aide son interlocuteur à prendre conscience de ce qu’il sait déjà sans le savoir."
    ],
    correct: 3,
    explanation: `La maïeutique (du grec <em>maieuesthai</em>, accoucher) est la méthode philosophique de Socrate. Se comparant à sa mère qui était sage-femme, Socrate dit qu’il n’enseigne pas un savoir tout fait, mais qu’il aide ses interlocuteurs à « accoucher » de la vérité qui est déjà en eux, de manière latente et inconsciente. Par des questions insistantes et souvent déstabilisantes, il les amène à examiner leurs croyances, à en percevoir les contradictions, et à reformuler des définitions plus justes par eux-mêmes. Appliquée à la connaissance de soi, la maïeutique signifie que la vérité sur soi n’est pas à recevoir de l’extérieur, mais à découvrir par un dialogue intérieur critique et exigeant, qui fait passer le savoir de l’implicite à l’explicite.    \nExemple : Dans le <em>Théétète</em>, Socrate, par ses questions, amène le jeune Théétète à découvrir par lui-même que la pensée est un dialogue intérieur de l’âme avec elle-même, sans lui imposer cette définition.`
  },
  // Question n°63
  {
    question: "Qu’est-ce que le « processus d’individuation » dans la psychologie de Jung ?",
    answers: [
      "Le processus par lequel un enfant devient indépendant de ses parents et acquiert son autonomie sociale.",
      "Le développement de l’individualisme dans les sociétés modernes, au détriment des valeurs collectives.",
      "Le processus par lequel le moi conscient se différencie de l’inconscient collectif et entre en relation avec le « Soi », visant à réaliser la totalité de la personnalité."
    ],
    correct: 3,
    explanation: `L’individuation est le concept central de la psychologie analytique jungienne. C’est un processus naturel de maturation psychique qui va bien au-delà de la simple adaptation sociale. Il s’agit pour l’individu de devenir ce qu’il est fondamentalement, de réaliser son potentiel unique en intégrant les différentes parts de sa psyché. Concrètement, cela implique que le moi conscient prenne conscience des contenus de l’inconscient (personnel et collectif), intègre ses différentes parts (y compris l’« Ombre », la part refoulée et négative, et l’« Anima/Animus », la part du sexe opposé), et établisse une relation vivante avec le « Soi », l’archétype de la totalité. Ce chemin, souvent long et difficile, mène à une personnalité plus unifiée, équilibrée et créative.    \nExemple : Dans les rêves ou les œuvres d’art d’une personne en processus d’individuation, on peut voir apparaître des symboles d’unité (mandalas, cercle magique) ou des figures archétypales (le sage, l’enfant divin) qui guident la transformation intérieure.`
  },
  // Question n°64
  {
    question: "Pourquoi la quête du moi est-elle finalement une « énigme » selon la conclusion du cours ?",
    answers: [
      "Parce que les philosophes se complaisent dans l’obscurité et refusent de donner des réponses claires.",
      "Parce qu’il n’y a tout simplement pas de moi ; c’est une illusion qu’il faut dissiper.",
      "Parce que le moi, étant à la fois le sujet qui cherche et l’objet recherché, échappe à toute saisie définitive ; il est à la fois familier et étranger."
    ],
    correct: 3,
    explanation: `La conclusion du cours reprend l’idée d’Augustin (« je suis devenu une énigme pour moi-même ») et la notion freudienne d’« inquiétante étrangeté » (<em>Unheimliche</em>) pour caractériser le moi. L’énigme tient à la structure même de la recherche : je suis celui qui cherche et ce qui est cherché. Cette circularité empêche une objectivation totale, une prise de distance complète. De plus, le moi n’est pas une entité stable ; il se métamorphose sans cesse sous l’effet du temps, de l’inconscient, des relations sociales. Il est à la fois le plus proche (je le vis immédiatement) et le plus lointain (je ne le comprends pas toujours, il me surprend). Cette tension entre familiarité et étrangeté fait du moi une quête infinie, jamais achevée, toujours recommencée.    \nExemple : Plus nous cherchons à nous analyser, à nous comprendre, plus nous découvrons des contradictions, des zones d’ombre, des motivations inavouées, des souvenirs oubliés qui nous rendent étrangers à nous-mêmes et complexifient l’image que nous avions de nous.`
  },
  // Question n°65
  {
    question: "Quel est le sens de l’expression « branloire pérenne » utilisée par Montaigne pour décrire le monde et le moi ?",
    answers: [
      "Une machine complexe mais prévisible, dont on peut calculer les mouvements.",
      "Un objet solide et immuable, comme un pilier ou une fondation.",
      "Une balançoire éternelle, image d’un mouvement de va-et-vient perpétuel et instable."
    ],
    correct: 3,
    explanation: `Montaigne forge cette expression pittoresque et profonde. Une « branloire » est un balancement, un mouvement d’oscillation, comme celui d’une balançoire. « Pérenne » signifie éternel, qui dure toujours. Le monde, et par extension le moi qui en fait partie, est donc comparé à un perpétuel mouvement de balancier, une instabilité fondamentale et constitutive. Rien n’est fixe, tout « branle », tout est en flux constant, en changement perpétuel. Cette image s’oppose radicalement aux visions statiques, essentialistes de l’univers et de l’âme. Elle capture l’essence du changement qui, pour Montaigne, est la loi première de l’existence, rendant vaine toute tentative de fixer l’être dans une définition immuable.    \nExemple : Nos humeurs, nos opinions, nos projets, nos désirs sont souvent en « branle », changeants, instables, contradictoires d’un jour à l’autre, à l’image de cette « branloire pérenne » qu’est notre être.`
  },
  // Question n°66
  {
    question: "Quelle est la différence fondamentale entre l’« inconscient » et le « préconscient » dans la première topique freudienne ?",
    answers: [
      "Il n’y a pas de différence ; ce sont deux noms pour désigner la même instance psychique.",
      "Le préconscient contient les pulsions de vie, l’inconscient les pulsions de mort.",
      "Le préconscient est accessible à la conscience sans résistance, tandis que l’inconscient est refoulé et son accès est barré par la censure."
    ],
    correct: 3,
    explanation: `La distinction est cruciale. Le préconscient contient des éléments (souvenirs, connaissances, pensées) qui ne sont pas actuellement dans le champ de la conscience, mais qui peuvent y être rappelés sans difficulté particulière. Il n’y a pas de refoulement actif contre eux. L’inconscient, en revanche, contient des désirs, des souvenirs, des pulsions qui ont été refoulés parce qu’ils sont inacceptables pour la conscience (moralement, socialement, trop douloureux). L’accès à ces contenus est barré par une force de « censure » ou de « résistance ». Ils ne peuvent devenir conscients qu’à travers des détours (rêves, symptômes, actes manqués) ou par le travail analytique qui lève les résistances.    \nExemple : Le nom d’un ami que je n’arrive pas à me rappeler sur le moment est dans le préconscient ; il va « me revenir » spontanément plus tard. Un souvenir traumatique d’humiliation vécue dans l’enfance peut être dans l’inconscient et rester inaccessible pendant des décennies, tout en influençant mes comportements.`
  },
  // Question n°67
  {
    question: "Comment le « regard d’autrui » constitue-t-il le moi, selon l’analyse de Sartre ?",
    answers: [
      "Autrui me donne une image objective, vraie et complète de moi-même, que je dois accepter.",
      "Le regard d’autrui n’a aucune importance pour la constitution du moi, qui est une pure intériorité.",
      "En me regardant, autrui me fige dans une identité, un rôle dont je dépends pour ma conscience de moi ; je deviens un « être-pour-autrui »."
    ],
    correct: 3,
    explanation: `Pour Sartre, autrui joue un rôle constitutif et inévitable dans la formation de ma conscience de moi. Quand autrui me regarde, je me sens devenir un objet sous son regard. Il me confère une identité, des qualités (« il est en colère », « il est maladroit », « il est généreux ») sur lesquelles je n’ai pas de prise immédiate. Je deviens un « être-pour-autrui », une chose définie, figée. Cette expérience est souvent vécue comme une aliénation, un vol (je suis volé par le regard d’autrui). Cependant, elle est nécessaire : c’est par le regard d’autrui que je prends conscience de moi-même comme étant aussi un objet dans le monde, avec une extériorité. Ma conscience de moi est donc toujours médiatisée par autrui.    \nExemple : La honte est un sentiment typiquement sartrien : je me surprends à faire quelque chose de ridicule (écouter à une porte), et soudain je « vois » mon action à travers le regard d’un autre qui pourrait me surprendre ; je me constitue alors immédiatement comme « honteux », mon être se coagule en cette qualité sous ce regard.`
  },
  // Question n°68
  {
    question: "Que signifie l’idée que le moi est un « choix moral », évoquée en conclusion de la séquence ?",
    answers: [
      "Que le moi est entièrement déterminé par l’éducation morale reçue dans l’enfance.",
      "Qu’il faut choisir consciemment d’être une « bonne personne » selon des critères sociaux.",
      "Que le moi se définit par la capacité à imputer des actes à un auteur responsable, à tenir des promesses ; il est construit par l’action éthique."
    ],
    correct: 3,
    explanation: `Cette idée marque un tournant dans la conception du moi, passant d’une approche métaphysique ou descriptive à une approche pratique et normative. Au lieu de le chercher dans une intériorité substantielle (l’âme) ou psychologique (la mémoire), on le définit par ses actes et sa relation à autrui dans le champ éthique et juridique. Le moi est celui qui peut dire « c’est moi qui l’ai fait » (imputabilité), qui peut s’engager pour l’avenir (« je te le promets ») et tenir cet engagement (fidélité à soi). Il est celui qui est responsable de ses actes devant les autres et devant sa propre conscience. Le moi devient ainsi une construction pratique et morale, une identité narrative qui se tisse dans l’action et la parole données, dans l’assomption de sa responsabilité.    \nExemple : Un juge qui condamne un criminel ne s’intéresse pas à la nature de son « moi substantiel » ou à la dynamique de son inconscient, mais à son « moi moral » et juridique : était-il conscient et libre au moment des faits ? Peut-on lui imputer le crime ? Est-il responsable ?`
  },
  // Question n°69
  {
    question: "Qu’est-ce que la « double conscience » évoquée par Freud dans ses premières études sur l’hystérie ?",
    answers: [
      "Le fait d’avoir deux personnalités distinctes et alternantes, comme dans le trouble dissociatif de l’identité.",
      "La capacité exceptionnelle de certains individus à penser consciemment à deux choses à la fois.",
      "L’existence, chez les hystériques, d’un état de conscience normal et d’un état « hypnoïde » où des souvenirs traumatiques sont maintenus séparés."
    ],
    correct: 3,
    explanation: `Dans ses premiers travaux avec Breuer, Freud utilise l’expression « double conscience » pour décrire un phénomène observé chez les patients hystériques. Ils semblent avoir deux états de conscience qui coexistent sans communiquer : un état normal, et un autre état, qualifié d’« hypnoïde » (semblable à l’état hypnotique), dans lequel se logent des souvenirs et des émotions intenses liés à un traumatisme psychique. Ces contenus, dissociés de la conscience normale, sont à l’origine des symptômes hystériques (paralysies, crises, anesthésies…). Sous hypnose, le patient pouvait accéder à cet état second et exprimer le souvenir refoulé, ce qui entraînait souvent la disparition du symptôme. Cette notion préfigure la théorie du refoulement et de l’inconscient comme système séparé.    \nExemple : La patiente Anna O. présentait des symptômes variés (toux nerveuse, paralysie d’un bras) qui disparaissaient lorsqu’elle racontait, dans un état de transe quasi-hypnotique qu’elle appelait « talking cure », le souvenir précis de l’événement traumatique à l’origine de chaque symptôme.`
  },
  // Question n°70
  {
    question: "Que signifie l’expression « l’âme est un principe d’animation » dans la conception antique (aristotélicienne) ?",
    answers: [
      "L’âme est ce qui rend joyeux, enthousiaste et donne le moral (« avoir de l’âme »).",
      "L’âme est le siège de la pensée rationnelle et de la conscience, propre à l’homme seul.",
      "L’âme (<em>psychè</em>) est ce qui distingue les êtres vivants des choses inanimées ; elle est le principe qui les fait vivre, croître, se mouvoir."
    ],
    correct: 3,
    explanation: `Dans la philosophie antique (notamment chez Aristote), le terme « âme » (<em>ψυχή</em>) a d’abord un sens biologique et large. Elle est le « principe » ou la « forme » qui explique les fonctions vitales. Aristote distingue ainsi une âme végétative (nutrition, croissance, reproduction) pour les plantes, une âme sensitive (perception, désir, mouvement local) pour les animaux, et une âme intellective (pensée, raison) pour les hommes. L’âme n’est pas encore conçue comme une substance immatérielle et pensante opposée au corps (comme chez Descartes), mais comme ce qui fait qu’un corps est vivant et organisé. Elle est la « forme » du corps organisé. L’âme et le corps ne sont pas deux substances, mais deux aspects d’un même être vivant.    \nExemple : Pour Aristote, dire qu’un arbre a une « âme » signifie simplement qu’il possède en lui-même le principe de sa croissance et de sa reproduction, ce qui le distingue d’une pierre inerte. L’âme est la « cause formelle » de l’être vivant.`
  },
  // Question n°71
  {
    question: "Comment le « positivisme » d’Auguste Comte influence-t-il la conception du moi au XIXe siècle ?",
    answers: [
      "Il réhabilite la foi religieuse et l’intuition comme seules sources valables de connaissance de soi.",
      "Il alimente une confiance absolue en la raison scientifique pour tout expliquer, y compris l’homme et son moi.",
      "Il nie catégoriquement l’existence du moi, considéré comme une illusion métaphysique à dépasser."
    ],
    correct: 2,
    explanation: `Auguste Comte, fondateur du positivisme, affirme que l’humanité passe par trois états : théologique, métaphysique et positif. À l’état positif, on renonce à chercher les causes premières ou les substances (comme l’« âme »), et on se contente d’établir des lois par l’observation et la raison. Cette confiance en la science pour tout expliquer s’étend à l’homme. Le moi, autrefois domaine de la métaphysique ou de l’introspection littéraire, devient un objet possible de la psychologie naissante, de la sociologie, voire de la biologie. On pense pouvoir le « mathématiser », le mesurer, ou le comprendre par des lois déterministes, comme le monde physique. Le moi devient un fait observable et analysable.    \nExemple : Cette mentalité positiviste a favorisé l’émergence de la psychologie expérimentale (Wundt) et des approches naturalistes du comportement humain, qui cherchent à réduire les phénomènes psychiques à des lois et à des mesures objectives.`
  },
  // Question n°72
  {
    question: "Quelle est la signification de l’expression « inquiétante étrangeté » (<em>Unheimliche</em>) de Freud, mentionnée en conclusion ?",
    answers: [
      "La peur des fantômes et des revenants, typique des contes et des légendes populaires.",
      "Le sentiment éprouvé quand quelque chose de familier et d’intime devient soudain étranger, inquiétant, comme si un autre était logé au cœur du familier.",
      "L’angoisse face à l’inconnu pur, à l’étranger radical qui vient d’une culture différente."
    ],
    correct: 2,
    explanation: `Freud consacre un essai à l’« inquiétante étrangeté » (<em>Das Unheimliche</em>). Ce sentiment particulier naît non de l’étranger pur, mais de la perturbation du familier. Quelque chose qui devrait être rassurant et connu (la maison, le double de soi, une poupée trop vivante, un membre de la famille) devient soudain source d’angoisse et de malaise parce qu’il semble habité par une force étrangère ou parce qu’un refoulé familial y fait retour. Appliqué au moi, cela signifie que ce qu’il y a de plus intime en nous (nos pensées, nos désirs, notre corps, notre image dans le miroir) peut parfois nous apparaître comme étranger, comme s’il appartenait à un autre. C’est l’expérience du dédoublement, de la possession, ou simplement de l’incompréhension de nos propres actes.    \nExemple : Se voir dans un miroir et avoir l’impression fugace de ne pas se reconnaître, ou être effrayé par sa propre main qui semble agir d’elle-même, sont des expériences d’<em>Unheimliche</em> où le familier (mon reflet, mon corps) devient étrangement inquiétant.`
  },
  // Question n°73
  {
    question: "En quoi la métaphore du « <em>Holzweg</em> » (chemin forestier) de Heidegger s’applique-t-elle à la quête du moi ?",
    answers: [
      "Elle montre que chercher le moi est une perte de temps, il faut suivre les chemins tracés par la tradition et la société.",
      "Elle signifie que la forêt (l’inconscient) est un lieu dangereux où la raison se perd et où l’on peut devenir fou.",
      "Elle illustre que le chemin de la connaissance de soi n’est pas une autoroute toute tracée, mais un sentier qui se dessine en avançant, et qui parfois ne mène « nulle part » de définitif."
    ],
    correct: 3,
    explanation: `Heidegger utilise le terme « <em>Holzweg</em> » qui désigne en allemand un chemin forestier qui sert à l’exploitation du bois et qui s’arrête brusquement en pleine forêt. En philosophie, cela devient une métaphore pour une voie de pensée qui ne conduit pas à une destination attendue ou à un résultat définitif, mais qui ouvre un nouvel espace de questionnement et de découverte. Appliquée à la quête du moi, cela signifie qu’il ne faut pas s’attendre à découvrir un « moi » tout fait, un objet stable au bout du chemin. Le chemin lui-même, le processus de recherche, d’interrogation, d’exploration, est constitutif de ce qu’on découvre. La quête peut être circulaire, déroutante, sans fin claire, mais elle est le seul « lieu » où le moi se manifeste et se construit.    \nExemple : La cure psychanalytique est un « <em>Holzweg</em> » : le patient ne « trouve » pas un moi caché comme un trésor, mais se construit un nouveau rapport à lui-même, une nouvelle compréhension de son histoire, à travers le parcours sinueux de la parole libre et de l’interprétation.`
  },
  // Question n°74
  {
    question: "Quelle est la conception du moi dans le roman réaliste du XIXe siècle, selon l’analyse de Bergson ?",
    answers: [
      "Un moi fluide, insaisissable, saisi dans sa durée pure et son interpénétration d’états.",
      "Un moi conventionnel, présenté comme une « ombre » simplifiée, une juxtaposition d’états psychiques étiquetés.",
      "Un moi héroïque et sublime, capable de passions absolues et de destins exceptionnels."
    ],
    correct: 2,
    explanation: `Bergson, dans son <em>Essai sur les données immédiates de la conscience</em>, critique la psychologie des romanciers réalistes de son temps (comme Balzac ou Flaubert). Selon lui, pour les besoins du récit et de la communication, ces auteurs décrivent les personnages avec le vocabulaire psychologique ordinaire. Ils isolent des états d’âme (la jalousie, l’avarie, l’ambition), les nomment, les juxtaposent comme des perles sur un fil. Mais cette description donne une image figée et schématique du moi, une « ombre ». Elle rate l’essentiel : la fluidité, l’interpénétration des sentiments, le changement continu, la durée réelle. Bergson estime que seul un romancier « hardi » (comme Dostoïevski) parvient à suggérer, par des contradictions et des nuances, la richesse et la mobilité du moi réel.    \nExemple : Dire « Emma Bovary est une rêveuse romantique » est une étiquette commode, mais elle ne rend pas compte de la multiplicité et de l’évolution de ses sentiments, de ses désirs et de ses angoisses tout au long du roman, de leur mélange et de leur flux permanent.`
  },
  // Question n°75
  {
    question: "Comment le « dérèglement de tous les sens » prôné par Rimbaud est-il lié à sa conception du « Je est un autre » ?",
    answers: [
      "Le dérèglement est une fin en soi, un plaisir hédoniste recherché pour lui-même.",
      "Le dérèglement systématique est une méthode pour briser le moi rationnel et social, et laisser émerger l’« autre » en soi, le voyant.",
      "Rimbaud prône en réalité l’ascétisme et la maîtrise des sens pour atteindre une pureté spirituelle."
    ],
    correct: 2,
    explanation: `Pour Rimbaud, le poète doit se faire « voyant ». Cela ne s’obtient pas par la culture ou la raison, mais par un « long, immense et raisonné dérèglement de tous les sens ». Ce dérèglement (par l’alcool, la drogue, la fatigue, la privation, la transgression morale) a pour but précis de démanteler le moi habituel, le moi conscient et volontaire qui dit « Je pense ». En brisant ce moi, en détraquant les sens et la raison, on laisse la place à l’« autre », à cette voix étrangère, à ces visions qui viennent d’ailleurs. Le poète devient alors le « grand malade », le « grand maudit », mais aussi le « suprême Savant » car il « arrive à l’inconnu ». La création poétique authentique naît de cette altérité radicale en soi, rendue possible par la destruction contrôlée du moi social.    \nExemple : La vie chaotique de Rimbaud lui-même, ses fugues, ses expériences extrêmes avec Verlaine, étaient autant de tentatives pour provoquer ce dérèglement et accéder à l’état de voyant, source de ses illuminations poétiques.`
  },
  // Question n°76
  {
    question: "Quelle est la position de Descartes sur la certitude de l’existence du moi, résumée par « <em>cogito ergo sum</em> » ?",
    answers: [
      "Le moi existe parce que mon corps existe et que je le sens ; l’existence du corps est première.",
      "Je doute de tout, mais du fait même que je doute, je pense ; et si je pense, j’existe nécessairement. L’existence du moi pensant est la première certitude.",
      "L’existence du moi est une croyance sociale et linguistique, mais non une certitude rationnelle."
    ],
    correct: 2,
    explanation: `Dans le <em>Discours de la méthode</em> et les <em>Méditations métaphysiques</em>, Descartes entreprend de douter méthodiquement de toutes ses opinions. Il doute des sens (ils peuvent tromper), des démonstrations mathématiques (un « génie malin » pourrait me les faire croire fausses). Mais il remarque que pour douter, il faut penser. Et pour penser, il faut exister. Même si un trompeur tout-puissant me trompait sur tout, il faudrait bien que *je* sois, moi qui suis trompé. Ainsi, « je pense, donc je suis » (<em>cogito ergo sum</em>) s’impose comme une vérité absolue, indubitable, le premier principe de la philosophie. Le moi, en tant que « chose qui pense » (<em>res cogitans</em>), acquiert ainsi un statut métaphysique fondateur, une substance dont l’existence est la plus certaine qui soit.    \nExemple : Cette certitude est au fondement de la philosophie moderne : avant de connaître le monde avec certitude, je sais avec une évidence absolue que je suis un sujet pensant. Toute connaissance ultérieure devra être reconstruite sur ce roc inébranlable.`
  },
  // Question n°77
  {
    question: "Comment la notion de « projet » s’applique-t-elle à la construction du moi, selon les perspectives existentialistes ?",
    answers: [
      "Le moi est un projet social à réaliser collectivement, en harmonie avec les projets des autres.",
      "Le moi doit avoir un projet de vie clair, ambitieux et planifié pour être valable et reconnu.",
      "Le moi n’est pas une essence prédéfinie, mais il se construit et se définit par ses choix, ses actions, ses engagements tournés vers l’avenir."
    ],
    correct: 3,
    explanation: `L’existentialisme, notamment chez Sartre, défend le primat de l’existence sur l’essence. Cela signifie que l’homme n’a pas de nature ou d’essence définie à l’avance (comme un couteau a l’essence de couper). Il existe d’abord, et il se définit ensuite par ce qu’il fait. Le moi est donc un « projet » : il est toujours en avant de lui-même, tendu vers des possibilités qu’il réalise par ses actes libres. « L’existence est un perpétuel dépassement », dit Sartre. Le moi n’est pas un donné, mais une tâche, une construction permanente par l’action et l’engagement. Je ne suis rien d’autre que le projet de moi-même que je réalise dans le monde.    \nExemple : Un homme n’est pas « lâche » par essence ; il se fait lâche par des actes de lâcheté répétés. Inversement, il peut choisir d’être courageux par des actes courageux, se projetant ainsi dans une nouvelle définition de lui-même, qu’il devra sans cesse reconquérir par ses actions futures.`
  },
  // Question n°78
  {
    question: "Quel est le rôle de la mémoire dans la conception lockéenne de l’identité personnelle ?",
    answers: [
      "La mémoire est un simple outil de stockage d’informations, sans lien direct avec l’identité.",
      "La mémoire est le fil conducteur qui fait l’identité : je suis la même personne que celui qui a vécu un événement passé si je peux m’en souvenir.",
      "La mémoire déforme le passé et nous empêche de connaître notre vrai moi, qu’il faut atteindre par l’introspection immédiate."
    ],
    correct: 2,
    explanation: `Pour Locke, l’identité personnelle est une identité de conscience. Ce qui fait que je suis le même aujourd’hui qu’hier, c’est que ma conscience actuelle peut s’étendre rétrospectivement et s’approprier les actions et les pensées passées comme étant les miennes. La mémoire est le moyen de cette appropriation. Si je me souviens avoir fait telle action ou éprouvé telle sensation, alors cette action est mienne, et je suis la même personne que son auteur. La continuité de la conscience à travers le temps, assurée par la mémoire, est le critère de l’identité personnelle, et non la permanence d’une substance immatérielle. Sans mémoire, le lien identitaire est rompu.    \nExemple : Si je ne me souviens absolument pas d’un crime commis pendant un black-out (ivresse, traumatisme crânien), puis-je moralement et juridiquement en être tenu pour responsable ? Locke suggérerait que non, car il n’y a pas continuité de conscience entre le moi actuel et l’auteur du crime.`
  },
  // Question n°79
  {
    question: "Comment interpréter la phrase de Kant : « Le beau parleur est celui qui joue à parler » ?",
    answers: [
      "Comme une simple critique de l’éloquence vide de sens et purement formelle.",
      "Comme une illustration de la distance sartrienne entre le moi et ses attitudes : on ne « est » jamais pleinement son attitude, on la « joue ».",
      "Comme une remarque sur l’éducation des enfants, qu’il faut apprendre à parler correctement."
    ],
    correct: 2,
    explanation: `Cette phrase, citée dans le cadre de l’analyse de Sartre, illustre parfaitement le concept de « mauvaise foi » et de non-coïncidence du sujet avec ses attitudes. Le « beau parleur » n’est pas un être dont l’essence serait « parlant ». Il joue un rôle, il adopte une attitude de parleur éloquent. Il y a une distance entre ce qu’il est (une conscience libre) et le personnage qu’il incarne. Cette distance est la liberté même : il pourrait arrêter de jouer, se taire, ou parler autrement. Appliqué au moi en général, cela signifie que nous ne sommes jamais totalement identifiés à nos qualités, nos émotions, nos rôles sociaux ; nous les jouons toujours, à des degrés divers de conscience et d’adhésion. Nous ne sommes pas ce que nous sommes, nous sommes ce que nous ne sommes pas (puisque nous pourrions être autre chose).    \nExemple : Un professeur « joue » le rôle du professeur en classe (ton, posture, savoir) ; il n’est pas substantiellement « professeur » 24h/24, même si ce rôle fait partie de son identité sociale ; il peut en sortir, et même en classe, une part de lui reste distante de ce rôle.`
  },
  // Question n°80
  {
    question: "Quel est l’apport de la psychanalyse à la compréhension des « métamorphoses du moi » ?",
    answers: [
      "Elle nie toute métamorphose, affirmant la fixité des structures psychiques dès l’enfance.",
      "Elle montre que le moi n’est pas une unité maîtresse, mais une instance fragile, traversée par des conflits entre des forces inconscientes.",
      "Elle réduit les métamorphoses à des changements biologiques et chimiques du cerveau, sans signification psychologique."
    ],
    correct: 2,
    explanation: `La psychanalyse introduit une révolution dans la conception du moi. Avant elle, le moi était généralement conçu comme le siège de la conscience et de la volonté, plus ou moins unifié et maître de lui. Freud découvre que le moi n’est qu’une partie de l’appareil psychique, et qu’il est constamment menacé et transformé par des forces qui lui échappent : les pulsions du ça, les exigences tyranniques du surmoi, les exigences de la réalité. Le moi doit négocier, faire des compromis, ce qui peut produire des symptômes (métamorphose pathologique), des actes manqués, des rêves. Il peut aussi se cliver, se défendre par des mécanismes variés (refoulement, déni, projection). Le moi est donc un champ de bataille et un lieu de métamorphoses constantes, souvent inconscientes, qui peuvent le déformer, le diviser, ou lui faire adopter des conduites apparemment étrangères à lui-même.    \nExemple : La transformation d’une pulsion agressive en un symptôme physique (une paralysie hystérique, une cécité psychogène) est une métamorphose du moi où un conflit psychique trouve une expression corporelle symbolique et où le moi est aliéné dans son propre corps.`
  },
  // Question n°81
  {
    question: "Quelle est la conception du moi dans la pensée d’Héraclite, évoquée par la formule « on ne se baigne jamais deux fois dans le même fleuve » ?",
    answers: [
      "Le moi est une substance immuable comme le lit du fleuve, qui demeure identique sous le flux.",
      "Le moi, comme toute chose, est en perpétuel changement (<em>πάντα ῥεῖ</em>, « tout s’écoule ») ; il est un flux et non une entité stable.",
      "Le moi est identique à l’eau du fleuve, toujours renouvelée mais restant essentiellement de l’eau."
    ],
    correct: 2,
    explanation: `Bien qu’Héraclite ne parle pas explicitement du « moi » au sens moderne, sa philosophie du changement universel s’applique nécessairement à l’homme. La célèbre formule sur le fleuve (dont on attribue souvent une version à Héraclite) signifie que rien n’est stable, tout est devenir, écoulement. L’eau s’écoule, le fleuve change à chaque instant. De même, l’homme change constamment : ses cellules, ses humeurs, ses pensées, ses désirs. Il n’y a pas d’identité substantielle fixe, mais un processus de métamorphose permanente, un flux d’expériences. Cette intuition préfigure les critiques modernes du moi substantiel (Hume, Nietzsche) et les conceptions du moi comme flux ou durée (Bergson).    \nExemple : Je ne suis pas le même que celui qui s’est baigné hier dans le fleuve, car le fleuve a changé (nouvelles eaux) et j’ai changé moi aussi (nouvelles cellules, nouvelles pensées, nouvelles expériences). L’identité est une illusion de continuité dans le changement.`
  },
  // Question n°82
  {
    question: "Comment le « principe de plaisir », régissant le ça, entre-t-il en conflit avec la réalité ?",
    answers: [
      "Il n’y a pas de conflit, le principe de plaisir s’adapte automatiquement et intelligemment à la réalité.",
      "Le principe de plaisir cherche la satisfaction immédiate et complète, ignorant les contraintes du monde ; le moi doit différer ou modifier cette satisfaction.",
      "Le principe de plaisir est la recherche du bonheur à long terme, donc il intègre et calcule les contraintes de la réalité."
    ],
    correct: 2,
    explanation: `Le ça, régi par le principe de plaisir, est entièrement tourné vers la décharge immédiate de l’énergie pulsionnelle. Il veut la satisfaction sans délai, par l’hallucination (comme dans le rêve) ou par l’action directe. Le monde extérieur (la « réalité ») oppose des obstacles : l’objet du désir n’est pas toujours présent, la satisfaction peut être dangereuse, douloureuse ou socialement interdite. Le moi, se développant à partir du ça au contact de la réalité, se met au service du « principe de réalité ». Son rôle est de trouver des moyens réalistes et socialement acceptables de satisfaire les désirs du ça, quitte à les différer, les sublimer (les détourner vers des buts socialement valorisés), ou y renoncer. Ce travail de médiation est source de conflits internes, de frustrations et nécessite un investissement d’énergie psychique.    \nExemple : Un enfant qui a faim (principe de plaisir du ça) doit apprendre à attendre que le repas soit prêt et à utiliser des couverts (principe de réalité du moi), au lieu de crier et de saisir la nourriture avec les mains. L’apprentissage de la propreté est un autre conflit majeur entre le plaisir de la décharge immédiate et les exigences de la réalité sociale.`
  },
  // Question n°83
  {
    question: "Quelle est la signification des concepts d’« être-pour-soi » et d’« être-pour-autrui » chez Sartre ?",
    answers: [
      "Être-pour-soi : être égoïste ; être-pour-autrui : être altruiste et tourné vers les autres.",
      "Être-pour-soi : exister seul, dans l’isolement ; être-pour-autrui : exister en société, dans la relation.",
      "Être-pour-soi : la conscience comme liberté et néantisation ; être-pour-autrui : le moi comme objet figé sous le regard d’autrui."
    ],
    correct: 3,
    explanation: `Sartre distingue deux modes d’être fondamentaux de la conscience humaine. L’« être-pour-soi » est la conscience dans sa liberté radicale, son pouvoir de néantiser ce qui est (de le nier, de le dépasser par un projet). Le pour-soi n’est rien, il se fait être. Il échappe à toute détermination fixe, il est toujours ailleurs que là où on le cherche. L’« être-pour-autrui » naît lorsque je suis regardé par autrui. Sous son regard, je deviens un objet, une chose définie avec des qualités (lâche, beau, méchant). Je suis « chosifié », aliéné, figé dans une essence. Le moi (l’ego) est précisément cette synthèse instable et conflictuelle entre mon être-pour-soi (libre, indéfinissable) et mon être-pour-autrui (objet défini). Je suis condamné à vivre dans cette tension permanente.    \nExemple : Quand je marche seul dans la rue, perdu dans mes pensées, je suis libre, je suis pour-soi. Si je sens soudain le regard scrutateur d’un inconnu sur moi, je deviens conscient de ma démarche, de mon apparence, je me sens « vu » et défini (timide, pressé, suspect), je deviens pour-autrui.`
  },
  // Question n°84
  {
    question: "Comment le « surmoi » se forme-t-il, selon la théorie freudienne ?",
    answers: [
      "Il est inné, présent à la naissance comme une instance morale universelle.",
      "Il se forme par l’intériorisation (introjection) des interdits, des exigences et des idéaux des parents, puis de la société.",
      "Il émerge spontanément de la confrontation directe du ça avec la réalité extérieure, sans médiation parentale."
    ],
    correct: 2,
    explanation: `Le surmoi n’est pas présent à la naissance. Il se construit progressivement dans l’enfance, notamment lors de la résolution du complexe d’Œdipe (entre 3 et 6 ans). L’enfant, face aux interdits parentaux (notamment l’interdit de l’inceste et du parricide), intériorise ces interdits pour résoudre le conflit psychique et identifier au parent du même sexe. Il incorpore les figures parentales, leurs voix, leurs commandements, leurs idéaux. Plus tard, d’autres autorités (enseignants, société, religion, culture) viennent renforcer et élargir cette instance. Le surmoi est donc l’héritier du complexe d’Œdipe et le représentant interne de la morale sociale. Sa sévérité dépend de la rigueur des parents et des valeurs de la culture.    \nExemple : Un enfant à qui on répète avec force « il ne faut pas mentir » finit par intérioriser cette interdiction ; plus tard, lorsqu’il ment, il éprouvera de la culpabilité et de la honte même si personne ne le sait et qu’il n’y a pas de conséquence pratique, car son surmoi intériorisé le punit intérieurement.`
  },
  // Question n°85
  {
    question: "Quelle est la critique adressée par Nietzsche à la notion de « sujet » comme cause de la pensée ?",
    answers: [
      "Elle est trop matérialiste, réduisant la pensée à un épiphénomène du cerveau.",
      "Elle est une « superstition grammaticale » : nous projetons dans la réalité la structure sujet-verbe de notre langage.",
      "Elle est parfaitement juste et scientifique, confirmée par l’introspection de chacun."
    ],
    correct: 2,
    explanation: `Nietzsche mène une critique généalogique des concepts métaphysiques. Le « sujet » (le « je » substantiel) est l’un de ces concepts. Selon lui, nous avons d’abord l’expérience d’activités (penser, vouloir, sentir). Puis, par commodité linguistique et par besoin psychologique de causalité, nous inventons un agent derrière ces activités : le « sujet ». C’est comme si on disait que « l’éclair brille » en faisant de « l’éclair » un sujet qui produit l’action de briller, alors qu’il n’y a qu’un événement unique : l’éclair-brillant. De même, « je pense » invente un « je » cause de la pensée. Pour Nietzsche, c’est une inversion : la pensée n’est pas l’action d’un sujet, c’est la pensée qui, en tant qu’événement, crée l’illusion du « je » comme cause. Le sujet est un effet, non une cause.    \nExemple : Dire « la foudre frappe l’arbre » personnifie et substantialise la foudre. De même, « je décide » personnifie et substantialise le processus complexe de la décision, qui est en réalité un jeu de forces et d’affects.`
  },
  // Question n°86
  {
    question: "En quoi l’exemple de la personne transgenre met-il en crise une définition purement « ontologique » ou « substantielle » du moi ?",
    answers: [
      "Il montre que le moi est entièrement déterminé par la biologie et la génétique, sans marge de manœuvre.",
      "Il prouve que le genre est un choix purement arbitraire et culturel, sans ancrage dans le corps.",
      "Il illustre qu’une définition du moi basée uniquement sur une substance (le corps sexué) est insuffisante face à l’identité psychologique vécue."
    ],
    correct: 3,
    explanation: `L’exemple des personnes transgenres est présenté comme un cas concret qui questionne les fondements de l’identité. Une conception ontologique ou substantialiste du moi (comme chez Descartes) identifierait le moi à une âme certes, mais cette âme est souvent associée de manière essentialiste à un corps donné, considéré comme une donnée naturelle et définitive. Or, pour une personne transgenre, le « moi » authentique, le sentiment profond et durable d’appartenance à un genre, ne correspond pas au sexe biologique assigné à la naissance. Cela montre que l’identité personnelle (le « qui je suis ») n’est pas réductible à un donné biologique substantiel. Elle inclut une dimension psychologique essentielle, un vécu, une histoire narrative qui peut entrer en tension radicale avec le corps. La revendication de transition vise précisément à faire coïncider le corps et l’apparence sociale avec cette identité vécue, montrant que le moi n’est pas une substance fixe mais peut demander une transformation de la substance corporelle elle-même.    \nExemple : Ce cas extrême met en lumière que pour tout un chacun, l’identité n’est pas une simple « donnée » naturelle mais implique un rapport complexe, parfois conflictuel, à son corps, à son histoire et au regard des autres.`
  },
  // Question n°87
  {
    question: "Quelle est la fonction de la « censure » dans le modèle freudien de la première topique ?",
    answers: [
      "Elle empêche les contenus conscients de tomber dans l’inconscient et d’être oubliés.",
      "Elle filtre les contenus de l’inconscient, empêchant les désirs refoulés d’accéder directement à la conscience, et les déforme lorsqu’ils passent.",
      "Elle contrôle ce que nous disons à haute voix, pour éviter les paroles socialement inacceptables."
    ],
    correct: 2,
    explanation: `La « censure » est un concept-clé de la première topique freudienne. C’est une fonction (ou une instance) qui garde la frontière entre l’inconscient et le préconscient-conscient. Son rôle est de bloquer l’accès à la conscience des désirs et souvenirs jugés inacceptables (contraires à la morale, trop douloureux, etc.), car leur expression directe provoquerait de l’angoisse ou de la culpabilité. Ces contenus sont « refoulés » dans l’inconscient. Cependant, l’énergie de ces désirs ne disparaît pas ; elle cherche à s’exprimer. La censure, pendant le sommeil (rêves) ou dans des moments de relâchement (actes manqués, mots d’esprit), peut laisser passer ces contenus, mais à condition qu’ils soient déformés, métamorphosés, rendus méconnaissables par le « travail du rêve » (condensation, déplacement, figuration). La censure est ainsi à la fois gardienne et censeur, obligeant l’inconscient à user de ruses.    \nExemple : Un désir agressif envers une personne respectée peut apparaître dans un rêve sous la forme symbolique et déplacée d’un animal féroce qui attaque un objet inanimé, afin de tromper la censure et de ne pas réveiller l’angoisse du dormeur.`
  },
  // Question n°88
  {
    question: "Comment le poème d’Eminescu (« Ô ! entendre ma vie comme on écoute un conte… ») exprime-t-il une certaine relation à soi ?",
    answers: [
      "Le désir de vivre une vie héroïque et extraordinaire, digne des plus grands contes épiques.",
      "La nostalgie de l’enfance et du temps des contes merveilleux, perdu à jamais.",
      "Le souhait de prendre de la distance avec sa propre vie, de la voir comme une histoire racontée, tout en éprouvant l’impossibilité de cette distance."
    ],
    correct: 3,
    explanation: `Ce poème exprime de manière très fine le dédoublement et la difficulté de la connaissance de soi. Le poète souhaiterait pouvoir « entendre sa vie comme on écoute un conte », c’est-à-dire de l’extérieur, avec la distance confortable du narrateur ou de l’auditeur. Il voudrait se voir comme un personnage (« un empereur ») dont l’histoire se déroule objectivement, avec un début, un milieu et une fin. Mais il constate aussitôt l’échec de ce vœu : « Mais non — le cœur qui bat en moi est le cœur même du monde ». Il ne peut sortir de lui-même ; il est immergé dans le sentiment immédiat de vivre, de ressentir, de battre au rythme du monde. La vie vécue (immédiate, sensorielle, émotionnelle) et la vie racontée (mise à distance, organisée en récit) sont irréductiblement différentes. Cette tension entre le désir de distance narrative et l’immédiateté du vécu est au cœur de l’entreprise autobiographique.    \nExemple : Quand nous racontons notre vie à un ami, nous la « mettons en récit », nous sélectionnons les événements, nous les interprétons, nous cherchons une cohérence ; mais pendant que nous la vivions, c’était un flux d’impressions, d’émotions, de sensations dans lequel nous étions plongés sans perspective.`
  },
  // Question n°89
  {
    question: "Quelle est la conception du moi implicite dans l’expérience de la honte, selon l’analyse sartrienne ?",
    answers: [
      "La honte prouve l’existence d’un moi substantiel et moral, qui juge ses propres actes.",
      "La honte révèle que mon moi est immédiatement constitué par le regard d’autrui : je me découvre comme objet (honteux) sous ce regard.",
      "La honte est un sentiment pathologique et irrationnel qu’il faut surmonter par la fierté et l’affirmation de soi."
    ],
    correct: 2,
    explanation: `Pour Sartre, la honte est une expérience phénoménologique révélatrice de la structure du moi. Imaginons que je fasse un geste vulgaire ou ridicule, seul, caché. Rien ne se passe. Mais si soudain je perçois qu’une personne me regarde par la fenêtre, je suis saisi par la honte. Cette honte ne vient pas de ma conscience solitaire se jugeant ; elle naît du fait que je me vois *à travers* le regard d’autrui. Autrui me transforme en un objet (l’homme qui fait ce geste ridicule) et m’assigne une essence (ridicule). La honte est la reconnaissance de cette objectivation. Elle montre que mon moi n’est pas une pure intériorité close ; il est toujours déjà pris dans le regard des autres, défini par eux. Je dépends d’autrui pour avoir une certaine objectivité sur moi-même, mais cette objectivité est aliénante.    \nExemple : Rougir en public est la manifestation corporelle involontaire de cette soudaine conscience d’être un objet sous le regard jugé d’autrui. Mon corps lui-même trahit cette aliénation.`
  },
  // Question n°90
  {
    question: "Comment la notion de « responsabilité » est-elle liée à celle de « moi », selon les perspectives juridique et éthique ?",
    answers: [
      "La responsabilité est un fardeau imposé par la société qui limite et entrave la libre expression du moi.",
      "Le moi, en tant qu’auteur de ses actes et capable de tenir ses promesses, est le présupposé et le support de la responsabilité.",
      "Seuls les adultes ayant un moi pleinement formé et rationnel peuvent être tenus pour responsables."
    ],
    correct: 2,
    explanation: `En conclusion, le cours opère un glissement d’une définition métaphysique ou psychologique du moi vers une définition pratique et éthique. Le « moi » n’est plus seulement une entité à découvrir, mais celui qui peut répondre de ses actes. Dans le droit, la notion de « personne juridique » implique la capacité à être sujet de droits et de devoirs, et à être tenu pour responsable de ses actions (imputabilité). En morale, être une personne, c’est pouvoir s’engager, tenir parole, être fidèle à ses promesses, c’est-à-dire manifester une ipséité (Ricœur). Ainsi, le moi se constitue dans et par l’exercice de la responsabilité. Il est moins ce que je suis que ce que je fais et ce dont je réponds. La responsabilité n’est pas un attribut secondaire, elle est constitutive de l’identité personnelle en société.    \nExemple : Un tribunal ne juge pas « l’âme » ou le « moi profond » d’un accusé, mais il le considère comme une personne responsable, c’est-à-dire comme un moi capable d’avoir compris la portée de son acte et d’avoir fait un choix libre, pour lequel il doit rendre des comptes.`
  },
  // Question n°91
  {
    question: "Quelle est la différence entre le « moi » (ego) et le « Soi » (Selbst) chez Jung ?",
    answers: [
      "Le moi est inconscient, le Soi est conscient et correspond à la personnalité sociale.",
      "Le moi est l’instance centrale de la conscience, le Soi est l’archétype de la totalité psychique, consciente et inconsciente.",
      "Le moi est individuel et unique, le Soi est collectif et commun à tous les membres d’une culture."
    ],
    correct: 2,
    explanation: `Jung établit une distinction capitale. Le « moi » (<em>Ich</em>) est le centre du champ de la conscience. C’est ce que je pense être, mon sentiment d’identité personnelle, ma volonté, mes souvenirs accessibles, le sens que j’ai de mon unité et de ma continuité. Le « Soi » (<em>Selbst</em>), en revanche, est un concept bien plus large et profond. C’est l’archétype de la totalité et du centre organisateur de la psyché toute entière. Il englobe à la fois le conscient et l’inconscient (personnel et collectif). Le Soi est le but du processus d’individuation : il s’agit pour le moi conscient de se mettre en relation avec le Soi, de reconnaître qu’il n’est qu’une partie d’un tout plus vaste et de se laisser guider par lui. Le Soi est souvent symbolisé par des images de totalité (cercle, carré, mandala, enfant divin).    \nExemple : Dans les rêves, le moi peut apparaître comme le rêveur lui-même dans ses activités quotidiennes, tandis que le Soi peut apparaître sous la forme d’un sage, d’un roi, d’un enfant divin ou d’un mandala, représentant la guidance vers l’unité et la plénitude intérieure.`
  },
  // Question n°92
  {
    question: "Comment le cours caractérise-t-il l’évolution de la conception du moi entre le XVIIe et le XXe siècle ?",
    answers: [
      "D’une conception unitaire et transparente (moi pensant cartésien) à une conception éclatée, opaque et conflictuelle (moi freudien, narratif, social).",
      "D’une conception matérialiste et biologique à une conception purement spirituelle et religieuse.",
      "D’une conception purement individuelle et solipsiste à une conception exclusivement collective et sociale."
    ],
    correct: 1,
    explanation: `Le cours retrace une évolution majeure dans l’histoire des idées. Au XVIIe siècle, avec Descartes, le moi est conçu comme une substance pensante, unifiée, transparente à elle-même dans le <em>cogito</em>. C’est un fondement certain, une « chose qui pense ». Au XVIIIe siècle, Rousseau et Hume introduisent le doute (mémoire fragile, moi comme flux de perceptions). Au XIXe siècle, le romantisme explore un moi tourmenté, en devenir, et le positivisme veut en faire un objet scientifique. Mais c’est au XXe siècle que l’éclatement est consommé : Freud découvre que le moi est traversé par l’inconscient et divisé en instances conflictuelles (ça, moi, surmoi). La phénoménologie (Sartre, Merleau-Ponty) montre qu’il est toujours à distance de lui-même, incarné et relationnel. Les sciences sociales (Durkheim) soulignent sa construction sociale. Le moi perd ainsi son unité, sa transparence et son statut de fondement certain pour devenir un problème complexe, un chantier, une construction mouvante et multidimensionnelle.    \nExemple : On est passé de « Je pense donc je suis » (unité certaine et fondatrice) à « Je est un autre » (altérité interne) et « Le moi n’est pas maître dans sa propre maison » (conflit et opacité inconsciente).`
  },
  // Question n°93
  {
    question: "Que signifie l’idée que le moi est une « fiction grammaticale » selon Nietzsche ?",
    answers: [
      "Que le moi n’existe que dans les livres de grammaire, comme exemple de conjugaison.",
      "Que notre langage, par sa structure sujet-verbe, nous pousse à inventer un agent (le « je ») derrière chaque action ou état.",
      "Que les écrivains et les poètes inventent des moi fictifs dans leurs romans et leurs poèmes."
    ],
    correct: 2,
    explanation: `Nietzsche mène une critique radicale de la métaphysique du sujet. Il observe que notre langage découpe le monde en sujets et en prédicats. Nous disons « l’éclair brille », « l’arbre est vert », « je pense ». Cette structure grammaticale nous habitue à penser qu’il y a d’abord un sujet (une substance) qui *a* des propriétés ou *fait* des actions. Nous projetons ensuite ce schéma linguistique sur l’expérience intérieure : nous croyons qu’il y a un « je » substantiel qui « a » des pensées, des sentiments, des volontés. Pour Nietzsche, c’est une « fiction » commode pour la communication et la vie sociale, mais c’est une erreur métaphysique. En réalité, il n’y a que des événements, des « faits », des forces en interaction : penser, vouloir, sentir. Le « je » est une simplification linguistique rétrospective, non la cause de ces événements.    \nExemple : Dire « la foudre frappe l’arbre » crée l’illusion d’un agent (la foudre) qui produit une action, alors qu’il n’y a qu’un phénomène électrique unique. De même pour « je décide », qui suggère un décideur derrière la décision.`
  },
  // Question n°94
  {
    question: "Quel est le rôle de l’artiste, selon Bergson, par rapport à la connaissance du moi ?",
    answers: [
      "L’artiste nous divertit et nous fait oublier notre moi et les soucis du quotidien.",
      "L’artiste, en déchirant « la toile habilement tissée de notre moi conventionnel », nous montre la richesse et la mobilité réelle de notre vie intérieure.",
      "L’artiste nous impose sa vision subjective et arbitraire du moi, sans valeur universelle."
    ],
    correct: 2,
    explanation: `Bergson oppose l’artiste véritable au psychologue ou au romancier conventionnel. Ceux-ci décrivent le moi avec les catégories sociales toutes faites (jalousie, ambition), nous présentant une « ombre » de nous-mêmes. L’artiste véritable (Bergson pense à un romancier comme Dostoïevski, un dramaturge comme Shakespeare, peut-être un musicien) a le courage et le génie de montrer la complexité, les contradictions, la pénétration mutuelle des sentiments, la durée concrète. En présentant des personnages aux motivations troubles, aux retours sur eux-mêmes, aux métamorphoses imprévisibles, il « nous a remis en présence de nous-mêmes ». Il ne nous donne pas une connaissance théorique ou conceptuelle, mais une intuition de la richesse et de la profondeur de la vie psychique. Il nous révèle à nous-mêmes.    \nExemple : Le personnage de Raskolnikov dans <em>Crime et Châtiment</em> de Dostoïevski, partagé entre la théorie du surhomme et le remords accablant, montre la complexité d’une âme bien au-delà des étiquettes simplistes « criminel » ou « repenti » ; il nous fait éprouver les tourments de la conscience morale.`
  },
  // Question n°95
  {
    question: "Comment la « mémoire » est-elle à la fois ce qui permet et ce qui limite la connaissance de soi, selon les analyses du cours ?",
    answers: [
      "La mémoire donne un accès parfait et total au passé, donc une connaissance complète de soi.",
      "La mémoire est le fil qui assure la continuité du moi et permet le récit de soi. Mais elle est fragile, lacunaire, sélective, et peut tromper.",
      "La mémoire n’a aucun rôle dans la connaissance de soi, seule l’introspection immédiate du présent compte."
    ],
    correct: 2,
    explanation: `Le cours présente une dialectique concernant la mémoire. D’un côté, elle est constitutive du moi. Pour Locke, c’est par la mémoire que je m’approprie mes actes passés et que j’assure mon identité dans le temps. Pour Rousseau, l’autobiographie repose entièrement sur la remémoration. Elle est le matériau de base du récit de soi. Mais d’un autre côté, la mémoire est un matériau problématique et peu fiable. Rousseau avoue devoir combler les « vides » de sa mémoire, ce qui menace la sincérité absolue qu’il revendique. La mémoire n’est pas un enregistrement fidèle ; elle sélectionne, interprète, reconstruit, oublie, parfois déforme ou invente. La connaissance de soi par la mémoire est donc toujours une connaissance médiate, partielle, et en partie fictive ou reconstruite. Elle est à la fois notre seul accès à notre passé et un obstacle à la vérité totale sur ce passé.    \nExemple : Nos souvenirs d’enfance sont souvent des reconstructions à partir de photos, de récits familiaux ou de nos désirs actuels ; nous ne savons plus exactement ce que nous avons vécu et ce que nous avons « appris » après coup. Un souvenir « heureux » peut masquer une réalité plus ambivalente.`
  },
  // Question n°96
  {
    question: "Quelle est la signification de l’expression « moi ontologique » ?",
    answers: [
      "Un moi défini par ses relations avec autrui et sa place dans le monde social.",
      "Un moi conçu comme une substance, une entité réelle et permanente, dotée d’une essence (comme la substance pensante).",
      "Un moi défini exclusivement par ses actes, ses choix et ses engagements dans le monde."
    ],
    correct: 2,
    explanation: `L’expression « moi ontologique » désigne une conception du moi qui le pose comme un être (<em>ontos</em>), une substance. C’est la conception classique, héritée en partie de la métaphysique et illustrée de manière paradigmatique par Descartes. Le moi est ici une « chose qui pense » (<em>res cogitans</em>), distincte du corps (<em>res extensa</em>). Il a une réalité substantielle, une unité et une permanence qui fondent son identité à travers le temps. Cette conception s’oppose aux conceptions « psychologiques » (le moi comme fonction ou comme flux de conscience chez Hume), « narratives » (le moi comme récit chez Ricœur) ou « sociales » (le moi comme construction relationnelle chez Durkheim ou Sartre). Le moi ontologique est un substrat immuable.    \nExemple : La recherche cartésienne d’une « chose pensante » comme fondement certain de la connaissance, distincte du corps, est typique d’une approche ontologique du moi. La question « qu’est-ce que le moi ? » y reçoit une réponse substantielle.`
  },
  // Question n°97
  {
    question: "En quoi la notion de « métamorphose » est-elle problématique pour penser le moi, selon la conclusion du cours ?",
    answers: [
      "Parce que la métamorphose implique un changement complet, une rupture, alors que nous avons le sentiment d’une continuité indéniable.",
      "Parce que si le moi est une substance stable, il ne peut se métamorphoser ; s’il n’est rien ou est insaisissable, le terme de métamorphose n’a pas de sens non plus.",
      "Parce que seuls les insectes et les amphibiens se métamorphosent, pas les êtres humains, qui ont une nature fixe."
    ],
    correct: 2,
    explanation: `La conclusion soulève une aporie logique au cœur même du titre de la séquence. La notion de « métamorphose du moi » est centrale, mais elle est conceptuellement difficile. En effet, si l’on conçoit le moi comme une substance immuable (moi ontologique), parler de métamorphose est contradictoire : une substance ne change pas d’essence, elle reste identique à elle-même. Si, à l’opposé, on nie l’existence d’un moi substantiel (comme Hume ou Nietzsche), ou si on le considère comme un pur flux insaisissable, alors il n’y a rien qui « se » métamorphose, juste du changement pur, une succession d’états sans sujet. La métamorphose, au sens fort (changer de forme tout en restant le même individu), semble nécessiter à la fois la permanence d’un substrat et le changement radical de ses attributs. Cette tension est au centre du problème philosophique de l’identité personnelle.    \nExemple : La chenille qui devient papillon : est-ce le même être ? La matière est largement la même, la forme et les fonctions sont radicalement différentes. Pour le moi, la question est similaire : qu’est-ce qui persiste à travers les changements radicaux de personnalité, d’opinions, de corps ? La mémoire ? La conscience ? Un substrat biologique ?`
  },
  // Question n°98
  {
    question: "Quel est l’apport de la phénoménologie (Merleau-Ponty, Sartre) à la compréhension du moi ?",
    answers: [
      "Elle réduit le moi à des processus cérébraux et neuronaux observables scientifiquement.",
      "Elle décrit le moi tel qu’il se donne dans l’expérience vécue, mettant en lumière son caractère incarné, sa relation à autrui, et sa structure de « dépassement ».",
      "Elle prouve scientifiquement l’existence de l’inconscient freudien par l’analyse des phénomènes de conscience."
    ],
    correct: 2,
    explanation: `La phénoménologie, initiée par Husserl et développée par Merleau-Ponty et Sartre, propose de décrire les structures de l’expérience vécue, sans présupposés métaphysiques ou scientifiques. Son apport au problème du moi est considérable. 1) Le moi est incarné : je ne suis pas une conscience dans un corps, je suis mon corps en situation dans le monde ; ma perception est corporelle et engagée (Merleau-Ponty). 2) Le moi est relation à autrui : autrui n’est pas une inférence, il est donné dans l’expérience primitive du regard qui me constitue comme objet (Sartre). 3) Le moi n’est pas un objet ou une substance : la conscience est toujours « conscience de… », elle est intentionnalité et dépassement. Je ne coïncide jamais avec ce que je suis, je suis toujours projeté vers des possibles (Sartre). Le moi apparaît ainsi comme une relation dynamique et ambiguë au monde, au corps et à autrui.    \nExemple : Merleau-Ponty montre que percevoir n’est pas recevoir passivement des données sensorielles, mais être engagé activement dans un monde qui a du sens pour mon corps en mouvement ; mon « moi » est cet engagement même, cette « chair » du monde.`
  },
  // Question n°99
  {
    question: "Comment la notion de « folie » est-elle revalorisée par Nietzsche dans <em>Le Gai Savoir</em> ?",
    answers: [
      "Comme un état supérieur de conscience, seul capable d’accéder à des vérités métaphysiques inaccessibles à la raison.",
      "Non comme un état supérieur en soi, mais comme une condition possiblement nécessaire au développement de certaines vertus ; la santé exclusive n’est qu’un préjugé.",
      "Comme une maladie qu’il faut absolument soigner par la médecine et la psychiatrie pour retrouver la raison."
    ],
    correct: 2,
    explanation: `Nietzsche ne fait pas l’apologie romantique inconditionnelle de la folie comme génie. Il procède à un renversement critique et subtil. Il commence par souligner que la « santé de l’âme » est relative à nos buts et valeurs. Puis il pose une question subversive : « si nous pourrions nous passer de la maladie, même pour le développement de notre vertu » ? Et plus précisément : notre « soif de connaissance et de connaissance de nous-mêmes n’aurait-elle pas tout autant besoin de l’âme malade que de l’âme saine » ? Autrement dit, les états considérés comme morbides (la mélancolie, l’angoisse, la « folie » même, les crises) pourraient être des ferments de profondeur, de lucidité, de créativité et de connaissance de soi. Vouloir à tout prix la « santé », l’équilibre, la normalité, pourrait être un signe de superficialité, de médiocrité et de « barbarie ». Il ouvre ainsi un espace de pensée où la souffrance psychique n’est pas seulement un mal à éradiquer, mais peut avoir une valeur.    \nExemple : Les grands artistes, penseurs ou mystiques ont souvent traversé des crises profondes, des états limites, des périodes de « folie » qui ont été la source de leur œuvre, de leur vision du monde ou de leur percée philosophique (Nietzsche pense sans doute à Pascal, à Dostoïevski, ou à lui-même).`
  },
  // Question n°100
  {
    question: "Selon la conclusion générale, que devient le moi une fois qu’on a parcouru les différentes « métamorphoses » de ses conceptions ?",
    answers: [
      "Une illusion à dissiper, un concept inutile qu’il faut abandonner.",
      "Une substance éternelle et immuable qu’il faut retrouver sous les changements apparents.",
      "Une « énigme » vivante, une construction toujours en devenir, à la fois psychique, narrative et sociale."
    ],
    correct: 3,
    explanation: `La conclusion synthétise le parcours de la séquence. Le moi n’est pas résolu en une définition simple et univoque. Il apparaît comme une « énigme » (Augustin), une « question » pour lui-même. Il n’est ni une substance fixe, ni une pure illusion. C’est une réalité complexe et mouvante, le résultat de multiples constructions entrelacées : construction psychique (par la mémoire, l’inconscient, le conflit des instances), construction narrative (par les récits que nous faisons de notre vie, les autobiographies), construction sociale (par le regard et la reconnaissance d’autrui, par les rôles que nous jouons, par l’intériorisation des normes). Finalement, le moi se définit peut-être moins par une essence que par une activité : il est celui qui agit, qui choisit, qui est responsable de ses actes, qui se projette dans l’avenir, qui tient ses promesses. Il est un devenir perpétuel, une « métamorphose » permanente qui est son mode d’être même. Il est à la fois donné (par le corps, l’inconscient, la société) et à faire (par les choix, le récit, l’engagement).    \nExemple : Notre identité est le fragile et dynamique équilibre entre ce que nous avons été (mémoire et histoire), ce que nous sommes dans l’instant (expérience vécue et incarnée), ce que les autres voient et attendent de nous (rôles sociaux), et ce que nous aspirons à devenir (projet et idéaux).`
  }
];