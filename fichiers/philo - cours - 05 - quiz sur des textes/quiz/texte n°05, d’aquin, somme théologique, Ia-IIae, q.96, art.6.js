// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de D'AQUIN";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
		texte: `« [1] Toute loi, avons-nous dit, vise l'intérêt commun des hommes, et c'est seulement dans cette mesure qu'elle acquiert force et valeur de loi. [2] Dans la mesure, au contraire, où elle ne réalise pas ce but, elle perd sa force d'obligation […]. [3] Or, il arrive fréquemment qu'une disposition légale utile à observer pour le bien public en règle générale devienne, en certains cas, extrêmement nuisible. [4] Car le législateur, ne pouvant envisager tous les cas particuliers, rédige la loi en fonction de ce qui se présente le plus souvent, portant son attention sur l'utilité commune. [5] C'est pourquoi s'il surgit un cas où l'observation de telle loi soit préjudiciable au bien commun, celle-ci ne doit plus être observée.
[6] Ainsi à supposer que dans une ville assiégée on promulgue la loi que les portes doivent demeurer closes, c'est évidemment utile au bien public, en règle générale ; mais s'il arrive que les ennemis poursuivent des citoyens dont dépend le salut de la cité, il serait très préjudiciable à cette ville de ne pas leur ouvrir ses portes. [7] Et par conséquent dans une telle occurrence, il faudrait ouvrir les portes, malgré les termes de la loi, afin de sauvegarder l'intérêt général que le législateur a en vue. »`,
		source: "THOMAS D’AQUIN, Somme théologique, Prima Secundae (Ia-IIae), q.96, art.6, trad. A. Lemonnyer o. p., Paris, Desclée & Brouwer / Le Cerf, 1955, pp.174-175"
};

// ============================================
// QUESTIONS DU QUIZ (50 questions)
// ============================================

const questions = [
	// Question n°1
	{
		question: "Question n°1 : Quel est le but de toute loi selon Thomas d'Aquin ?",
		answers: [
			"l'intérêt particulier du législateur",
			"l'intérêt commun des hommes",
			"la punition des délinquants"
			],
			correct: 2,
			explanation: "Thomas d'Aquin affirme explicitement : « Toute loi, avons-nous dit, vise l'intérêt commun des hommes. » Cette définition téléologique place le bien commun comme finalité essentielle de toute législation, héritant ainsi de la tradition aristotélicienne pour qui la loi est un instrument au service de la cité."
		},

		// Question n°2
		{
		question: "Question n°2 : Quand une loi acquiert-elle force et valeur de loi ?",
		answers: [
			"quand elle est promulguée par l'autorité",
			"seulement dans la mesure où elle vise l'intérêt commun",
			"quand elle est conforme aux traditions"
			],
			correct: 2,
			explanation: "Le texte précise : « c'est seulement dans cette mesure qu'elle acquiert force et valeur de loi. » Pour Thomas d'Aquin, la validité d'une loi ne dépend pas seulement de son origine formelle mais essentiellement de sa finalité morale et sociale. Une loi qui ne sert pas le bien commun perd sa légitimité fondamentale."
		},

		// Question n°3
		{
		question: "Question n°3 : Que perd une loi quand elle ne réalise pas son but ?",
		answers: [
			"sa validité formelle",
			"sa force d'obligation",
			"son caractère écrit"
			],
			correct: 2,
			explanation: "Thomas d'Aquin déclare sans ambiguïté : « elle perd sa force d'obligation. » Cette thèse signifie que les citoyens ne sont plus moralement tenus d'obéir à une loi qui trahit sa finalité. Cette conception contraste avec le positivisme juridique pour qui la validité formelle suffit à créer l'obligation."
		},

		// Question n°4
		{
		question: "Question n°4 : Que peut-il arriver à une disposition légale généralement utile ?",
		answers: [
			"elle peut devenir nuisible dans certains cas particuliers",
			"elle reste toujours utile",
			"elle doit être modifiée immédiatement"
			],
			correct: 1,
			explanation: "Le texte observe que « il arrive fréquemment qu'une disposition légale utile... devienne, en certains cas, extrêmement nuisible. » Cette constatation réaliste reconnaît que les circonstances exceptionnelles peuvent transformer une bonne loi générale en instrument de nuisance. C'est ce paradoxe que la théorie de l'équité cherche à résoudre."
		},

		// Question n°5
		{
		question: "Question n°5 : Pourquoi le législateur ne peut-il envisager tous les cas particuliers ?",
		answers: [
			"parce qu'il n'a pas assez de temps",
			"parce que la nature humaine est imprévisible",
			"parce qu'il rédige la loi en fonction de ce qui se présente le plus souvent"
			],
			correct: 3,
			explanation: "Thomas d'Aquin explique : « le législateur, ne pouvant envisager tous les cas particuliers, rédige la loi en fonction de ce qui se présente le plus souvent. » Cette limitation cognitive du législateur humain est intrinsèque à la nature de la loi générale, qui par définition ne peut anticiper toutes les situations singulières qui pourront se présenter."
		},

		// Question n°6
		{
		question: "Question n°6 : Quel est le critère principal du législateur selon Thomas d'Aquin ?",
		answers: [
			"l'utilité commune",
			"la volonté divine",
			"la tradition juridique"
			],
			correct: 1,
			explanation: "Le texte indique clairement que le législateur légitime est celui qui porte « son attention sur l'utilité commune. » Cette orientation téléologique distingue la conception thomiste des conceptions volontaristes qui font de la volonté du souverain la source unique de la loi. Pour Thomas, la loi doit être raisonnable et orientée vers le bien."
		},

		// Question n°7
		{
		question: "Question n°7 : Que doit-on faire si l'observation d'une loi est préjudiciable au bien commun ?",
		answers: [
			"l'observer quand même",
			"ne plus l'observer",
			"attendre sa modification officielle"
			],
			correct: 2,
			explanation: "La conclusion est nette : « celle-ci ne doit plus être observée. » Cette prescription s'appuie sur le principe selon lequel la fin de la loi (le bien commun) prime sur sa lettre. Dans une telle situation, l'obéissance stricte deviendrait une désobéissance à l'esprit même de la loi et à l'intention du législateur."
		},

		// Question n°8
		{
		question: "Question n°8 : Quel exemple Thomas d'Aquin utilise-t-il pour illustrer son propos ?",
		answers: [
			"une ville assiégée où les portes doivent rester closes",
			"un tribunal qui doit rendre justice",
			"un impôt qui doit être payé"
			],
			correct: 1,
			explanation: "Pour concrétiser sa théorie, Thomas d'Aquin propose l'exemple suivant : « Ainsi à supposer que dans une ville assiégée on promulgue la loi que les portes doivent demeurer closes. » Cet exemple paradigmatique met en scène une situation extrême où le conflit entre la lettre de la loi et son esprit devient particulièrement évident et dramatique."
		},

		// Question n°9
		{
		question: "Question n°9 : Dans quelle situation concrète Thomas d'Aquin justifie-t-il la violation de la loi ?",
		answers: [
			"quand les ennemis poursuivent des citoyens importants pour la cité",
			"quand on veut aider un ami",
			"quand la loi est trop ancienne"
			],
			correct: 1,
			explanation: "L'exemple se précise : « s'il arrive que les ennemis poursuivent des citoyens dont dépend le salut de la cité. » Cette hypothèse montre que la dérogation n'est justifiée que par des considérations d'intérêt général exceptionnelles, et non par des préférences personnelles. Le salut de la communauté entière est en jeu, ce qui légitime la transgression."
		},

		// Question n°10
		{
		question: "Question n°10 : Que faudrait-il faire dans ce cas particulier selon Thomas d'Aquin ?",
		answers: [
			"respecter strictement la loi",
			"ouvrir les portes malgré la loi",
			"consulter le législateur"
			],
			correct: 2,
			explanation: "La conclusion pratique est claire : « il faudrait ouvrir les portes, malgré les termes de la loi. » Cette prescription illustre le principe d'équité : lorsque l'application littérale d'une loi contredit son but, il faut préférer l'esprit à la lettre. La décision doit être prise immédiatement, sans attendre une modification formelle de la loi."
		},

		// Question n°11
		{
		question: "Question n°11 : Quel est le but ultime de cette dérogation à la loi ?",
		answers: [
			"sauvegarder l'intérêt général",
			"favoriser des intérêts particuliers",
			"établir un précédent juridique"
			],
			correct: 1,
			explanation: "Thomas d'Aquin précise que cette action doit être accomplie « afin de sauvegarder l'intérêt général que le législateur a en vue. » La dérogation n'est donc pas une simple exception mais un retour à l'intention authentique du législateur. En transgressant la lettre, on respecte en réalité plus profondément l'esprit de la loi."
		},

		// Question n°12
		{
		question: "Question n°12 : Quelle conception de la loi Thomas d'Aquin défend-il ?",
		answers: [
			"une conception formaliste et rigide",
			"une conception téléologique (orientée vers une fin)",
			"une conception volontariste"
			],
			correct: 2,
			explanation: "Thomas d'Aquin défend une conception téléologique où la loi est jugée par sa capacité à réaliser sa fin : l'intérêt commun. Cette approche s'oppose au formalisme juridique pour qui la validité procédurale suffit. Pour le thomisme, une loi n'est véritablement loi que si elle sert effectivement le bien de la communauté."
		},

		// Question n°13
		{
		question: "Question n°13 : Que signifie « force d'obligation » dans ce texte ?",
		answers: [
			"la capacité de contraindre moralement",
			"la sanction pénale",
			"l'autorité du législateur"
			],
			correct: 1,
			explanation: "La « force d'obligation » désigne le pouvoir moral de la loi d'imposer une obligation aux citoyens, au-delà de la simple contrainte physique. Pour Thomas d'Aquin, cette force morale vient de la rationalité et de la justice de la loi, non de la seule volonté du législateur. Quand la loi cesse d'être juste, elle perd cette force obligatoire."
		},

		// Question n°14
		{
		question: "Question n°14 : Quelle est la limite essentielle du législateur humain ?",
		answers: [
			"son ignorance des cas particuliers",
			"sa corruption possible",
			"sa durée limitée au pouvoir"
			],
			correct: 1,
			explanation: "Thomas d'Aquin identifie une limite cognitive essentielle : « ne pouvant envisager tous les cas particuliers. » Cette reconnaissance de la finitude humaine fonde la nécessité de l'équité. Même le plus sage des législateurs ne peut anticiper toutes les circonstances futures où sa loi devra s'appliquer, d'où la nécessité d'une interprétation adaptable."
		},

		// Question n°15
		{
		question: "Question n°15 : Comment Thomas d'Aquin justifie-t-il la possibilité de déroger à la loi ?",
		answers: [
			"par la supériorité de la loi divine",
			"par la primauté de l'intention du législateur sur la lettre",
			"par l'urgence de la situation"
			],
			correct: 2,
			explanation: "La justification fondamentale est qu'il faut respecter « l'intérêt général que le législateur a en vue » plutôt que la lettre de la loi. Cette distinction entre la lettre et l'esprit permet de concilier le respect de la loi avec les exigences de situations imprévues. La dérogation n'est pas un acte d'insubordination mais un accomplissement plus profond de la volonté législative."
		},

		// Question n°16
		{
		question: "Question n°16 : Quelle distinction Thomas d'Aquin établit-il ?",
		answers: [
			"entre loi naturelle et loi positive",
			"entre règle générale et cas particuliers",
			"entre loi divine et loi humaine"
			],
			correct: 2,
			explanation: "Thomas d'Aquin opère une distinction cruciale entre ce qui est utile « en règle générale » et ce qui devient nuisible « en certains cas ». Cette distinction fonde toute la théorie de l'équité : la loi, nécessairement générale, ne peut s'appliquer mécaniquement à toutes les situations particulières sans parfois produire des effets contraires à sa finalité."
		},

		// Question n°17
		{
		question: "Question n°17 : Que représente l'exemple de la ville assiégée ?",
		answers: [
			"un cas d'application normale de la loi",
			"un cas exceptionnel justifiant la dérogation",
			"une situation sans issue"
			],
			correct: 2,
			explanation: "L'exemple de la ville assiégée illustre précisément le type de cas exceptionnel où l'application stricte de la loi serait contraire à son but. Cette mise en situation concrète montre comment une mesure de sécurité généralement sage (garder les portes fermées) peut devenir catastrophique dans des circonstances particulières (quand il faut sauver des défenseurs essentiels)."
		},

		// Question n°18
		{
		question: "Question n°18 : Quelle est la condition pour qu'une loi doive être observée ?",
		answers: [
			"qu'elle soit écrite",
			"qu'elle serve effectivement le bien commun",
			"qu'elle soit ancienne"
			],
			correct: 2,
			explanation: "Pour Thomas d'Aquin, une loi ne doit être observée que « dans la mesure où elle réalise le bien commun. » Cette condition téléologique fait de l'efficacité pratique de la loi à promouvoir le bien public le critère ultime de l'obligation d'obéissance. Une loi qui nuit au bien commun perd ipso facto son caractère obligatoire."
		},

		// Question n°19
		{
		question: "Question n°19 : Quelle théorie juridique Thomas d'Aquin développe-t-il ici ?",
		answers: [
			"la théorie de l'équité (épikie)",
			"la théorie du contrat social",
			"la théorie de la souveraineté"
			],
			correct: 1,
			explanation: "Thomas d'Aquin développe ici la théorie de l'équité (épikie en grec), vertu qui permet de corriger la loi générale dans des cas particuliers où son application littérale serait injuste. Cette vertu juridique supérieure complète la justice légale en permettant une application raisonnable et adaptée des lois aux circonstances concrètes."
		},

		// Question n°20
		{
		question: "Question n°20 : À quelle tradition philosophique appartient cette conception de la loi ?",
		answers: [
			"au positivisme juridique",
			"au thomisme (philosophie scolastique)",
			"à l'utilitarisme moderne"
			],
			correct: 2,
			explanation: "Cette conception s'inscrit dans la tradition thomiste, héritière d'Aristote et intégrée dans le cadre de la pensée chrétienne médiévale. Le thomisme considère la loi comme un instrument rationnel au service du bien commun, soumis à des critères moraux objectifs dérivés de la loi naturelle et de la raison divine."
		},

		// Question n°21
		{
		question: "Question n°21 : Quelle est la relation entre loi et moralité chez Thomas d'Aquin ?",
		answers: [
			"la loi est indépendante de la moralité",
			"la loi doit être moralement juste pour être obligatoire",
			"la moralité est une affaire privée, la loi une affaire publique"
			],
			correct: 2,
			explanation: "Pour Thomas d'Aquin, une loi n'est véritablement loi et n'oblige moralement que si elle est juste et conforme au bien commun. Cette position s'oppose au positivisme juridique qui sépare droit et morale. La justice est pour Thomas une condition nécessaire de la validité juridique, non un simple supplément optionnel."
		},

		// Question n°22
		{
		question: "Question n°22 : Comment Thomas d'Aquin définit-il le « bien commun » ?",
		answers: [
			"comme la somme des intérêts individuels",
			"comme l'intérêt objectif de la communauté politique",
			"comme l'intérêt de la majorité"
			],
			correct: 2,
			explanation: "Le bien commun chez Thomas d'Aquin n'est pas une simple agrégation d'intérêts particuliers mais l'intérêt objectif de la communauté politique considérée comme un tout organique. Il inclut la paix, la justice, la prospérité et les conditions permettant aux citoyens de réaliser leur perfection humaine selon leur nature rationnelle et sociale."
		},

		// Question n°23
		{
		question: "Question n°23 : Quelle est la différence entre loi humaine et loi divine selon Thomas ?",
		answers: [
			"la loi humaine est toujours imparfaite, la loi divine parfaite",
			"elles sont identiques dans leur essence",
			"la loi humaine prime sur la loi divine"
			],
			correct: 1,
			explanation: "Pour Thomas d'Aquin, la loi humaine participe de la loi divine éternelle mais de manière limitée et imparfaite. Cette imperfection explique pourquoi les lois humaines peuvent nécessiter des corrections par l'équité. La loi divine, étant parfaite, ne connaît pas ce problème d'inadéquation entre généralité et cas particuliers."
		},

		// Question n°24
		{
		question: "Question n°24 : Quelle vertu permet d'appliquer correctement l'équité selon Thomas ?",
		answers: [
			"la prudence",
			"le courage",
			"la tempérance"
			],
			correct: 1,
			explanation: "La prudence, vertu intellectuelle pratique, est essentielle pour discerner quand et comment appliquer l'équité. Elle permet de juger correctement des circonstances particulières et de déterminer si l'application stricte de la loi serait contraire à sa finalité. Sans prudence, l'équité pourrait dégénérer en arbitraire ou en exception injustifiée."
		},

		// Question n°25
		{
		question: "Question n°25 : Comment Thomas d'Aquin répond-il au problème de l'iniquité légale ?",
		answers: [
			"par la désobéissance civile systématique",
			"par l'équité qui corrige la loi sans la détruire",
			"par l'attente passive d'une réforme"
			],
			correct: 2,
			explanation: "Thomas propose l'équité comme solution au problème des lois qui, bien que justes en général, produisent des effets injustes dans des cas particuliers. L'équité permet de corriger la loi dans son application sans remettre en cause son autorité générale. C'est une voie médiane entre l'obéissance aveugle et la rébellion systématique."
		},

		// Question n°26
		{
		question: "Question n°26 : Quel est le statut de la loi injuste chez Thomas d'Aquin ?",
		answers: [
			"elle oblige toujours en conscience",
			"elle n'oblige jamais en conscience",
			"elle peut obliger pour éviter un plus grand mal"
			],
			correct: 3,
			explanation: "Pour Thomas, une loi profondément injuste (contraire au bien commun ou à la loi divine) ne crée pas d'obligation en conscience. Cependant, il peut être prudent de l'observer si la désobéissance causerait un scandale ou un désordre pire que l'injustice de la loi. Cette position nuancée évite à la fois l'anarchisme et la soumission absolue."
		},

		// Question n°27
		{
		question: "Question n°27 : Comment l'équité se distingue-t-elle de la simple exception ?",
		answers: [
			"l'équité respecte l'esprit de la loi, l'exception le viole",
			"elles sont identiques",
			"l'équité est plus restrictive"
			],
			correct: 1,
			explanation: "L'équité n'est pas une simple exception à la loi mais son application correcte dans des circonstances imprévues par le législateur. Elle respecte et accomplit l'intention du législateur mieux que ne le ferait une application littérale. Alors qu'une exception viole l'esprit de la loi, l'équité le réalise plus parfaitement."
		},

		// Question n°28
		{
		question: "Question n°28 : Quelle est la source de la loi selon la conception thomiste ?",
		answers: [
			"uniquement la volonté du souverain",
			"la raison orientée vers le bien commun",
			"la coutume et la tradition"
			],
			correct: 2,
			explanation: "Pour Thomas d'Aquin, la source de la loi n'est pas la volonté arbitraire du souverain mais « une ordonnance de la raison en vue du bien commun, promulguée par celui qui a charge de la communauté ». Cette définition met l'accent sur la rationalité et la finalité morale de la loi, distinguant le thomisme des conceptions volontaristes du droit."
		},

		// Question n°29
		{
		question: "Question n°29 : Comment Thomas d'Aquin conçoit-il l'autorité du législateur ?",
		answers: [
			"comme absolue et indiscutable",
			"comme relative à sa capacité à servir le bien commun",
			"comme dérivée uniquement de la force"
			],
			correct: 2,
			explanation: "L'autorité du législateur n'est pas absolue mais conditionnelle : elle dépend de sa capacité à servir effectivement le bien commun. Pour Thomas, le pouvoir politique est un service, non un privilège. Quand un gouvernant utilise son pouvoir contre le bien commun, il abuse de son autorité et peut perdre sa légitimité."
		},

		// Question n°30
		{
		question: "Question n°30 : Quel est le rapport entre équité et loi naturelle chez Thomas ?",
		answers: [
			"l'équité applique la loi naturelle aux cas concrets",
			"elles sont indépendantes",
			"la loi naturelle prime toujours sur l'équité"
			],
			correct: 1,
			explanation: "L'équité est le moyen par lequel la loi naturelle (les principes généraux de justice) s'applique aux situations concrètes que les lois humaines n'ont pas pu prévoir. Elle permet d'adapter les exigences universelles de la justice aux particularités des cas individuels, réalisant ainsi l'idéal d'une justice qui tient compte des circonstances."
		},

		// Question n°31
		{
		question: "Question n°31 : Comment Thomas d'Aquin justifie-t-il la nécessité des lois générales ?",
		answers: [
			"par l'incapacité des dirigeants à juger chaque cas",
			"par la méchanceté naturelle des hommes",
			"par la volonté divine"
			],
			correct: 1,
			explanation: "Thomas reconnaît que même les meilleurs dirigeants ne peuvent juger personnellement chaque cas particulier qui se présente dans une communauté. Les lois générales sont donc nécessaires pour assurer une certaine prévisibilité et uniformité dans l'administration de la justice. Cette nécessité pratique explique pourquoi les lois doivent être formulées en termes généraux."
		},

		// Question n°32
		{
		question: "Question n°32 : Quelle est la différence entre équité et interprétation stricte de la loi ?",
		answers: [
			"l'équité cherche l'intention du législateur, l'interprétation stricte la lettre",
			"elles sont identiques",
			"l'équité est plus rigide"
			],
			correct: 1,
			explanation: "L'équité cherche à découvrir et à accomplir l'intention véritable du législateur (servir le bien commun), même si cela exige de s'écarter de la lettre de la loi. L'interprétation stricte, au contraire, s'en tient au texte littéral sans considérer les conséquences pratiques ou la finalité de la loi dans des circonstances particulières."
		},

		// Question n°33
		{
		question: "Question n°33 : Comment Thomas d'Aquin aborde-t-il le conflit entre lois ?",
		answers: [
			"par la hiérarchie des lois (divine, naturelle, humaine)",
			"par la préférence pour la loi la plus récente",
			"par l'arbitrage du souverain"
			],
			correct: 1,
			explanation: "Thomas établit une hiérarchie des lois : la loi divine éternelle est suprême, puis vient la loi naturelle (participation de la créature rationnelle à la loi éternelle), enfin la loi humaine positive. En cas de conflit, la loi supérieure prime toujours. Cette hiérarchie permet de résoudre les contradictions apparentes entre différentes normes juridiques."
		},

		// Question n°34
		{
		question: "Question n°34 : Quel rôle joue la coutume dans la théorie juridique thomiste ?",
		answers: [
			"elle peut abroger ou modifier la loi écrite",
			"elle est sans valeur juridique",
			"elle prime toujours sur la loi"
			],
			correct: 1,
			explanation: "Pour Thomas d'Aquin, la coutume peut avoir force de loi lorsqu'elle exprime le consentement tacite de la communauté et qu'elle est raisonnable. Une coutume longue et acceptée peut ainsi abroger une loi écrite ou en modifier l'interprétation. Cette reconnaissance de la coutume comme source de droit montre le réalisme social de la pensée thomiste."
		},

		// Question n°35
		{
		question: "Question n°35 : Comment Thomas d'Aquin conçoit-il la relation entre liberté et loi ?",
		answers: [
			"la loi est essentiellement une restriction de la liberté",
			"la loi bien faite permet et réalise la liberté",
			"liberté et loi sont incompatibles"
			],
			correct: 2,
			explanation: "Contrairement à une conception purement négative de la loi comme restriction, Thomas voit dans la loi juste un instrument qui permet la réalisation de la liberté humaine authentique. En créant un ordre social juste et en réprimant les comportements nuisibles, la loi permet aux citoyens de vivre librement et de poursuivre leur perfection morale et spirituelle."
		},

		// Question n°36
		{
		question: "Question n°36 : Quelle est la place de la miséricorde dans l'application des lois selon Thomas ?",
		answers: [
			"elle doit parfois tempérer la rigueur de la justice légale",
			"elle n'a aucune place dans le droit",
			"elle remplace toujours la justice"
			],
			correct: 1,
			explanation: "Thomas d'Aquin reconnaît que la miséricorde peut et doit parfois tempérer la rigueur de la justice légale, particulièrement dans l'application des peines. Cette tempérance par la miséricorde est une forme d'équité qui tient compte des circonstances atténuantes et de la dignité de la personne. Elle n'abolit pas la justice mais l'accomplit de manière plus humaine."
		},

		// Question n°37
		{
		question: "Question n°37 : Comment Thomas d'Aquin justifie-t-il l'obéissance aux lois ?",
		answers: [
			"par la crainte des sanctions",
			"par la reconnaissance de leur rationalité et de leur justice",
			"par l'habitude"
			],
			correct: 2,
			explanation: "L'obéissance aux lois se justifie principalement par leur rationalité et leur justice, non par la seule crainte des sanctions. Pour Thomas, l'homme est un animal rationnel et politique qui reconnaît spontanément l'utilité des lois justes pour la vie commune. Cette obéissance raisonnée est supérieure à l'obéissance par contrainte."
		},

		// Question n°38
		{
		question: "Question n°38 : Quel est le statut de la loi positive imparfaite mais non injuste ?",
		answers: [
			"elle oblige en conscience malgré ses imperfections",
			"elle n'oblige pas du tout",
			"elle oblige seulement sous peine de sanction"
			],
			correct: 1,
			explanation: "Une loi positive peut être imparfaite (ne pas prévoir tous les cas, être formulée de manière imprécise) sans être pour autant injuste. Dans ce cas, elle oblige en conscience malgré ses défauts techniques. C'est précisément pour pallier ces imperfections que l'équité est nécessaire : elle permet d'appliquer la loi de manière raisonnable malgré ses lacunes formelles."
		},

		// Question n°39
		{
		question: "Question n°39 : Comment Thomas d'Aquin aborde-t-il les lois contraires à la conscience ?",
		answers: [
			"elles ne doivent jamais être obéies",
			"elles doivent toujours être obéies",
			"on peut désobéir si la loi viole gravement la conscience"
			],
			correct: 3,
			explanation: "Quand une loi commande quelque chose qui viole gravement la conscience morale (par exemple, une loi ordonnant d'adorer des idoles), Thomas autorise la désobéissance. Cette position respecte la primauté de la conscience et reconnaît les limites de l'autorité politique. Cependant, cette désobéissance doit être discrète pour éviter le scandale public."
		},

		// Question n°40
		{
		question: "Question n°40 : Quelle est la fonction éducative de la loi selon Thomas ?",
		answers: [
			"former les citoyens à la vertu",
			"seulement réprimer les comportements nuisibles",
			"informer sur les règles sociales"
			],
			correct: 1,
			explanation: "Pour Thomas d'Aquin, la loi a une fonction éducative essentielle : elle doit former les citoyens à la vertu en habituant leurs volontés à choisir le bien. Les lois ne se contentent pas d'interdire les comportements nuisibles ; elles orientent positivement la communauté vers le bien commun et aident les individus à développer leurs dispositions morales."
		},

		// Question n°41
		{
		question: "Question n°41 : Comment Thomas d'Aquin justifie-t-il la diversité des lois selon les sociétés ?",
		answers: [
			"par la diversité des circonstances historiques et culturelles",
			"par l'arbitraire des souverains",
			"par l'imperfection humaine"
			],
			correct: 1,
			explanation: "La diversité des lois positives entre différentes sociétés s'explique par la diversité des circonstances historiques, géographiques, culturelles et économiques. Pour Thomas, les principes généraux de la loi naturelle sont universels, mais leur application concrète doit s'adapter aux conditions particulières de chaque communauté. Cette adaptabilité est une force, non une faiblesse."
		},

		// Question n°42
		{
		question: "Question n°42 : Quel est le rapport entre loi et raison chez Thomas d'Aquin ?",
		answers: [
			"la loi est essentiellement un acte de la raison",
			"la loi est essentiellement un acte de la volonté",
			"loi et raison sont indépendantes"
			],
			correct: 1,
			explanation: "Thomas définit la loi comme « une ordonnance de la raison », soulignant ainsi son caractère essentiellement rationnel. La loi n'est pas un simple commandement arbitraire mais doit être raisonnable, c'est-à-dire conforme à la nature des choses et orientée vers des fins bonnes. Cette rationalité est ce qui distingue la loi véritable du simple décret autoritaire."
		},

		// Question n°43
		{
		question: "Question n°43 : Comment Thomas d'Aquin conçoit-il la promulgation de la loi ?",
		answers: [
			"comme condition nécessaire de son obligation",
			"comme simple formalité",
			"comme optionnelle"
			],
			correct: 1,
			explanation: "La promulgation (la publication officielle de la loi) est pour Thomas une condition nécessaire pour que la loi oblige les sujets. Sans promulgation, les citoyens ne peuvent connaître la loi et ne sont donc pas tenus de l'observer. Cette exigence de publicité assure la transparence et la prévisibilité du système juridique."
		},

		// Question n°44
		{
		question: "Question n°44 : Quel est le statut des lois tyranniques selon Thomas ?",
		answers: [
			"elles ne sont pas de vraies lois et n'obligent pas",
			"elles obligent quand même par respect pour l'autorité",
			"elles obligent seulement sous menace"
			],
			correct: 1,
			explanation: "Les lois tyranniques (qui servent l'intérêt privé du gouvernant plutôt que le bien commun) ne sont pas de véritables lois selon la définition thomiste. Elles n'ont donc pas force d'obligation en conscience. Thomas va même jusqu'à reconnaître, dans des cas extrêmes, le droit de résistance à la tyrannie, bien que cette résistance doive être prudente et proportionnée."
		},

		// Question n°45
		{
		question: "Question n°45 : Comment Thomas d'Aquin aborde-t-il l'évolution des lois dans le temps ?",
		answers: [
			"les lois doivent évoluer avec les besoins changeants de la société",
			"les lois doivent être immuables",
			"seules les lois divines peuvent changer"
			],
			correct: 1,
			explanation: "Thomas reconnaît que les lois humaines doivent évoluer pour s'adapter aux changements des circonstances sociales et des besoins de la communauté. Cette capacité d'évolution n'est pas une faiblesse mais une nécessité pour que la loi continue à servir efficacement le bien commun. L'équité joue ici un rôle crucial en permettant des adaptations provisoires avant des réformes formelles."
		},

		// Question n°46
		{
		question: "Question n°46 : Quel est le rapport entre équité et charité chez Thomas ?",
		answers: [
			"l'équité est l'application de la charité dans le domaine juridique",
			"elles sont indépendantes",
			"la charité prime toujours sur l'équité"
			],
			correct: 1,
			explanation: "Pour Thomas d'Aquin, l'équité peut être vue comme l'application de la vertu théologale de charité dans le domaine juridique. La charité, qui est amour de Dieu et du prochain, inspire une application miséricordieuse et compréhensive des lois. Elle pousse à considérer non seulement la justice stricte mais aussi les besoins concrets des personnes affectées par la loi."
		},

		// Question n°47
		{
		question: "Question n°47 : Comment Thomas d'Aquin justifie-t-il la nécessité d'un pouvoir coercitif ?",
		answers: [
			"par la nature imparfaite de l'homme après le péché originel",
			"par la méchanceté naturelle de tous les hommes",
			"par la volonté divine"
			],
			correct: 1,
			explanation: "La nécessité d'un pouvoir coercitif (capable d'imposer des sanctions) découle pour Thomas de la nature humaine blessée par le péché originel. Bien que l'homme soit naturellement sociable et rationnel, sa volonté est affaiblie et a besoin d'être soutenue par des incitations et des dissuasions extérieures. La contrainte légitime complète ainsi l'éducation morale."
		},

		// Question n°48
		{
		question: "Question n°48 : Quel est le rôle de la loi dans la réalisation du bonheur selon Thomas ?",
		answers: [
			"elle crée les conditions sociales du bonheur terrestre",
			"elle donne directement le bonheur",
			"elle n'a aucun rapport avec le bonheur"
			],
			correct: 1,
			explanation: "La loi humaine contribue au bonheur terrestre en créant les conditions sociales nécessaires à la vie bonne : paix, sécurité, justice, prospérité. Bien que le bonheur parfait (la béatitude) dépende de la grâce divine et de la vie éternelle, le bonheur imparfait de cette vie requiert un cadre juridique juste. La loi est ainsi un instrument au service de l'épanouissement humain."
		},

		// Question n°49
		{
		question: "Question n°49 : Comment Thomas d'Aquin distingue-t-il loi éternelle et loi naturelle ?",
		answers: [
			"la loi naturelle est la participation de la créature rationnelle à la loi éternelle",
			"elles sont identiques",
			"la loi naturelle est contraire à la loi éternelle"
			],
			correct: 1,
			explanation: "Thomas distingue soigneusement la loi éternelle (le plan divin pour la création dans l'intelligence de Dieu) et la loi naturelle (la participation de la créature rationnelle à cette loi éternelle). La loi naturelle est ainsi la manière dont les êtres humains, par leur raison, peuvent connaître et participer à l'ordre voulu par Dieu pour sa création."
		},

		// Question n°50
		{
		question: "Question n°50 : Quelle est l'influence durable de la conception thomiste de la loi ?",
		answers: [
			"elle a inspiré le droit naturel moderne et les déclarations des droits",
			"elle n'a eu aucune influence",
			"elle a été totalement rejetée par la modernité"
			],
			correct: 1,
			explanation: "La conception thomiste de la loi a profondément influencé le développement du droit naturel moderne et les déclarations des droits de l'homme. L'idée que la loi doit servir le bien commun, respecter la dignité humaine et être conforme à la raison a inspiré des penseurs comme Suarez, Grotius et les rédacteurs des déclarations des droits du XVIIIe siècle. Son héritage demeure vivant dans la réflexion contemporaine sur la justice et les limites du pouvoir."
		}
];