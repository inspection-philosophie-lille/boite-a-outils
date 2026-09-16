// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de PASCAL";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
		texte: `« [1] Nous connaissons la vérité, non seulement par la raison, mais encore par le cœur ; c'est de cette dernière sorte que nous connaissons les premiers principes, et c'est en vain que le raisonnement qui n'y a point de part essaye de les combattre. [2] Les pyrrhoniens qui n'ont que cela pour objet, y travaillent inutilement. [3] Nous savons que nous ne rêvons point ; quelque impuissance où nous soyons de le prouver par raison, cette impuissance ne conclut autre chose que la faiblesse de notre raison, mais non point l'incertitude de toutes nos connaissances, comme ils le prétendent. [4] Car la connaissance des premiers principes, comme qu'il y a espace, temps, mouvement, nombres, est aussi ferme qu'aucune de celles que nos raisonnements nous donnent. [5] Et c'est sur ces connaissances du cœur et de l'instinct qu'il faut que la raison s'appuie, et qu'elle y fonde tout son discours. [6] Le cœur sent qu'il y a trois dimensions dans l'espace et que les nombres sont infinis ; et la raison démontre ensuite qu'il n'y a point deux nombres carrés dont l'un soit le double de l'autre. [7] Les principes se sentent, les propositions se concluent ; et le tout avec certitude, quoique par différentes voies. [8] Et il est aussi ridicule et inutile que la raison demande au cœur des preuves de ses premiers principes, pour vouloir y consentir, qu'il serait ridicule que le cœur demandât à la raison un sentiment de toutes les propositions qu'elle démontre, pour vouloir les recevoir. »`,
		source: "Blaise PASCAL, Pensée n°110 (Lafuma), n°282 (Brunschvicg)"
};

// ============================================
// QUESTIONS DU QUIZ (50 questions)
// ============================================

const questions = [
	// Question n°1
	{
		question: "Question n°1 : Par quels moyens connaissons-nous la vérité selon Pascal ?",
		answers: [
			"Uniquement par la raison",
			"Par la raison et par le cœur",
			"Uniquement par le cœur"
			],
			correct: 2,
			explanation: "Pascal affirme d'emblée : « Nous connaissons la vérité, non seulement par la raison, mais encore par le cœur. » Cette thèse fondamentale pose deux voies d'accès à la vérité : la raison et le cœur. Pascal ne rejette pas la raison mais refuse de lui attribuer l'exclusivité de la connaissance. Le cœur est une faculté de connaissance à part entière, irréductible à la raison. Cette conception dualiste de la connaissance est au cœur de la pensée pascalienne."
		},

		// Question n°2
	{
		question: "Question n°2 : Par quelle faculté connaissons-nous les premiers principes selon Pascal ?",
		answers: [
			"Par la raison",
			"Par le cœur",
			"Par l'expérience"
			],
		correct: 2,
			explanation: "Pascal affirme que « c'est de cette dernière sorte [le cœur] que nous connaissons les premiers principes ». Les premiers principes (espace, temps, mouvement, nombres) sont connus par le cœur, non par la raison. Cette thèse est essentielle : les fondements de la connaissance ne sont pas démontrables rationnellement, ils sont saisis intuitivement par le cœur. La raison, elle, travaille à partir de ces principes qu'elle reçoit du cœur. Il y a donc une antériorité du cœur sur la raison dans l'ordre de la connaissance."
		},

		// Question n°3
{
	question: "Question n°3 : Que peut faire le raisonnement contre les premiers principes selon Pascal ?",
		answers: [
			"Il peut les démontrer",
			"Il essaye en vain de les combattre",
			"Il peut les remplacer"
			],
		correct: 2,
		explanation: "Pascal affirme que « c'est en vain que le raisonnement qui n'y a point de part essaye de les combattre ». Le raisonnement ne peut ni fonder ni détruire les premiers principes, car il n'y a point de part. Les premiers principes sont antérieurs au raisonnement et le rendent possible. Vouloir les combattre par le raisonnement est une entreprise vaine et contradictoire : on ne peut pas utiliser la raison pour nier ce qui rend la raison possible. Cette thèse limite le pouvoir de la raison et affirme l'irréductibilité du cœur."
		},

		// Question n°4
{
	question: "Question n°4 : Qui sont les adversaires que Pascal critique dans ce texte ?",
	answers: [
			"Les stoïciens",
			"Les pyrrhoniens",
			"Les épicuriens"
			],
		correct: 2,
		explanation: "Pascal critique « les pyrrhoniens qui n'ont que cela pour objet ». Les pyrrhoniens sont les partisans du scepticisme radical, qui doutent de tout et prétendent que rien ne peut être connu avec certitude. Leur objectif est de montrer l'incertitude de toutes nos connaissances, y compris des premiers principes. Pascal s'oppose à cette entreprise : selon lui, les pyrrhoniens travaillent inutilement car les premiers principes sont connus avec certitude par le cœur, indépendamment de toute preuve rationnelle."
		},

		// Question n°5
{
	question: "Question n°5 : Que font les pyrrhoniens selon Pascal ?",
	answers: [
			"Ils découvrent la vérité",
			"Ils travaillent inutilement",
			"Ils fondent la science"
			],
		correct: 2,
		explanation: "Pascal affirme que les pyrrhoniens « y travaillent inutilement ». Leur entreprise, qui consiste à combattre les premiers principes par le raisonnement, est vaine car les premiers principes sont connus par le cœur avec une certitude inébranlable. Les pyrrhoniens ont beau multiplier les arguments sceptiques, ils ne peuvent pas détruire la certitude naturelle qui accompagne la connaissance des premiers principes. Pascal reconnaît cependant une part de vérité au pyrrhonisme : notre raison est faible et incapable de tout prouver. Mais cette faiblesse ne conduit pas à l'incertitude universelle."
		},

		// Question n°6
{
	question: "Question n°6 : Que savons-nous selon Pascal, même si nous ne pouvons le prouver par raison ?",
	answers: [
			"Que nous ne rêvons point",
			"Que Dieu existe",
			"Que l'âme est immortelle"
			],
		correct: 1,
		explanation: "Pascal affirme : « Nous savons que nous ne rêvons point. » Cette certitude est immédiate, indubitable, mais elle ne peut être prouvée par la raison. C'est un exemple paradigmatique de connaissance par le cœur : nous savons avec une certitude absolue que nous ne rêvons pas, mais nous ne pouvons pas le démontrer rationnellement. Cette impuissance de la raison ne remet pas en cause la certitude de cette connaissance. Elle révèle seulement la faiblesse de notre raison, non l'incertitude de nos connaissances."
		},

		// Question n°7
{
	question: "Question n°7 : Que conclut l'impuissance de prouver que nous ne rêvons point ?",
	answers: [
			"L'incertitude de toutes nos connaissances",
			"La faiblesse de notre raison, mais non l'incertitude de nos connaissances",
			"L'impossibilité de la connaissance"
			],
		correct: 2,
		explanation: "Pascal affirme que l'impuissance de prouver que nous ne rêvons point « ne conclut autre chose que la faiblesse de notre raison, mais non point l'incertitude de toutes nos connaissances ». Cette distinction est cruciale : de l'incapacité de la raison à tout prouver, on ne peut pas conclure à l'incertitude universelle. La faiblesse de la raison est une chose, l'incertitude de la connaissance en est une autre. Les pyrrhoniens commettent l'erreur de conclure de la première à la seconde. Pascal refuse ce passage : notre raison est faible, mais nos connaissances peuvent être certaines grâce au cœur."
		},

		// Question n°8
{
	question: "Question n°8 : Quelle est la certitude des premiers principes selon Pascal ?",
	answers: [
			"Faible",
			"Moindre que celle des raisonnements",
			"Aussi ferme qu'aucune de celles que nos raisonnements nous donnent"
			],
		correct: 2,
		explanation: "Pascal affirme que « la connaissance des premiers principes... est aussi ferme qu'aucune de celles que nos raisonnements nous donnent ». Les premiers principes ne sont pas connus avec moins de certitude que les conclusions rationnelles : ils le sont avec une certitude égale, voire supérieure. Cette affirmation est essentielle : elle place la connaissance par le cœur au même niveau de certitude que la connaissance par la raison. Il n'y a pas de hiérarchie de certitude entre les deux, seulement une différence de voie."
		},

		// Question n°9
{
	question: "Question n°9 : Quels exemples de premiers principes Pascal donne-t-il ?",
	answers: [
			"L'espace, le temps, le mouvement, les nombres",
			"Dieu, l'âme, l'infini",
			"La vertu, le bien, la justice"
			],
		correct: 1,
		explanation: "Pascal donne comme exemples de premiers principes « qu'il y a espace, temps, mouvement, nombres ». Ces notions fondamentales sont à la base de toute connaissance scientifique et mathématique. Elles ne sont pas démontrables : elles sont saisies intuitivement par le cœur. Personne ne peut prouver que l'espace existe ou que le temps s'écoule ; ces évidences sont antérieures à toute démonstration. Pascal illustre par ces exemples le rôle fondateur du cœur dans la connaissance : il fournit à la raison ses principes premiers."
		},

		// Question n°10
{
	question: "Question n°10 : Sur quoi la raison doit-elle s'appuyer selon Pascal ?",
	answers: [
			"Sur elle-même",
			"Sur les connaissances du cœur et de l'instinct",
			"Sur l'expérience sensible"
			],
		correct: 1,
		explanation: "Pascal affirme que « c'est sur ces connaissances du cœur et de l'instinct qu'il faut que la raison s'appuie, et qu'elle y fonde tout son discours ». La raison ne est pas autonome : elle repose sur des principes qu'elle reçoit du cœur. Sans ces principes premiers, la raison ne pourrait rien démontrer. Il y a donc une dépendance de la raison à l'égard du cœur : le cœur fournit les fondements, la raison construit l'édifice. Cette conception renverse la prétention rationaliste à l'autonomie absolue : la raison a besoin du cœur pour commencer."
		},

		// Question n°11
{
	question: "Question n°11 : Que sent le cœur selon Pascal ?",
	answers: [
			"Qu'il y a trois dimensions dans l'espace et que les nombres sont infinis",
			"Que Dieu existe",
			"Que l'âme est immortelle"
			],
		correct: 1,
		explanation: "Pascal affirme : « Le cœur sent qu'il y a trois dimensions dans l'espace et que les nombres sont infinis. » Ces deux exemples illustrent la connaissance par le cœur : la tridimensionnalité de l'espace et l'infinité des nombres sont des évidences immédiates, non des conclusions rationnelles. Le cœur les sent, c'est-à-dire les saisit intuitivement, avant toute démonstration. Cette connaissance précède la raison et la rend possible. Pascal utilise le verbe « sentir » pour souligner le caractère immédiat et intuitif de cette connaissance."
		},

		// Question n°12
{
	question: "Question n°12 : Que démontre la raison ensuite selon Pascal ?",
	answers: [
			"Qu'il n'y a point deux nombres carrés dont l'un soit le double de l'autre",
			"Que Dieu existe",
			"Que l'espace a trois dimensions"
			],
		correct: 1,
		explanation: "Pascal affirme que « la raison démontre ensuite qu'il n'y a point deux nombres carrés dont l'un soit le double de l'autre ». Cet exemple illustre le rôle de la raison : à partir des principes fournis par le cœur (les nombres, l'infini), la raison démontre des propositions. La démonstration rationnelle vient après la saisie intuitive des principes. Il y a donc un ordre : d'abord le cœur saisit les principes, ensuite la raison en tire des conclusions. Cet exemple mathématique montre la complémentarité du cœur et de la raison dans la connaissance."
		},

		// Question n°13
{
	question: "Question n°13 : Comment Pascal résume-t-il la différence entre principes et propositions ?",
	answers: [
			"Les principes se sentent, les propositions se concluent",
			"Les principes se démontrent, les propositions se sentent",
			"Principes et propositions sont identiques"
			],
		correct: 1,
		explanation: "Pascal résume : « Les principes se sentent, les propositions se concluent. » Cette formule lapidaire exprime la différence entre les deux voies de la connaissance. Les principes sont saisis par le sentiment, c'est-à-dire par une intuition immédiate du cœur. Les propositions sont conclues par la raison, c'est-à-dire déduites à partir des principes. Cette distinction fonde la complémentarité du cœur et de la raison : le cœur fournit les fondements, la raison en tire les conséquences. Les deux opèrent avec certitude, mais par des voies différentes."
		},

		// Question n°14
{
	question: "Question n°14 : Avec quelle certitude connaissons-nous principes et propositions selon Pascal ?",
	answers: [
			"Avec une certitude inégale",
			"Avec une certitude égale, quoique par différentes voies",
			"Avec une certitude incertaine"
			],
		correct: 1,
		explanation: "Pascal affirme que « le tout [se fait] avec certitude, quoique par différentes voies ». Les principes connus par le cœur et les propositions conclues par la raison sont connus avec la même certitude. Il n'y a pas de hiérarchie de certitude entre les deux : la connaissance par le cœur n'est pas moins certaine que la connaissance par la raison. La différence est dans la voie, non dans le degré de certitude. Cette affirmation est essentielle pour comprendre la conception pascalienne de la connaissance : les deux voies sont également valides et également certaines."
		},

		// Question n°15
{
	question: "Question n°15 : Que serait-il ridicule de demander au cœur selon Pascal ?",
	answers: [
			"Des sentiments",
			"Des preuves de ses premiers principes",
			"Des démonstrations mathématiques"
			],
		correct: 1,
		explanation: "Pascal affirme qu'« il est aussi ridicule et inutile que la raison demande au cœur des preuves de ses premiers principes, pour vouloir y consentir ». Cette demande est ridicule car les premiers principes ne sont pas démontrables : ils sont saisis intuitivement. Demander des preuves de ce qui est évident, c'est méconnaître la nature de la connaissance par le cœur. C'est aussi inutile car le cœur ne peut pas fournir de preuves : il sent, il ne démontre pas. Cette exigence de preuve est donc à la fois absurde et vaine. Elle révèle une méconnaissance de la nature de la connaissance."
		},

		// Question n°16
{
	question: "Question n°16 : À quoi Pascal compare-t-il l'attitude de la raison demandant des preuves au cœur ?",
	answers: [
			"À un procès",
			"Au cœur demandant à la raison un sentiment de toutes les propositions qu'elle démontre",
			"À un voyage"
			],
		correct: 1,
		explanation: "Pascal compare l'attitude de la raison demandant des preuves au cœur « au ridicule qu'il serait que le cœur demandât à la raison un sentiment de toutes les propositions qu'elle démontre, pour vouloir les recevoir ». Cette comparaison souligne la symétrie des deux situations : de même qu'il serait ridicule de demander à la raison de sentir les propositions qu'elle démontre, il serait ridicule de demander au cœur de prouver les principes qu'il sent. Chaque faculté a sa manière propre de connaître, et il est absurde de vouloir les confondre. Cette analogie est au cœur de l'argumentation de Pascal."
		},

		// Question n°17
{
	question: "Question n°17 : Quelle est la thèse centrale de ce texte ?",
	answers: [
			"La raison est toute-puissante",
			"Le cœur a ses raisons que la raison ne connaît point",
			"Seul le cœur connaît la vérité"
			],
		correct: 1,
		explanation: "La thèse centrale de ce texte est que le cœur a sa propre manière de connaître, irréductible à la raison. Pascal affirme que nous connaissons la vérité non seulement par la raison mais aussi par le cœur. Les premiers principes sont connus par le cœur, et la raison doit s'appuyer sur eux. Cette thèse est célèbre sous la formule : « Le cœur a ses raisons que la raison ne connaît point. » Elle ne signifie pas que le cœur est supérieur à la raison, mais que les deux sont complémentaires et irréductibles l'un à l'autre."
		},

		// Question n°18
{
	question: "Question n°18 : Comment Pascal conçoit-il la relation entre cœur et raison ?",
	answers: [
			"Ils sont opposés",
			"Ils sont complémentaires : le cœur fournit les principes, la raison démontre les propositions",
			"La raison est supérieure au cœur"
			],
		correct: 1,
		explanation: "Pascal conçoit la relation entre cœur et raison comme une relation de complémentarité. Le cœur fournit les principes premiers (espace, temps, mouvement, nombres) ; la raison en tire des propositions et les démontre. La raison s'appuie sur les connaissances du cœur et y fonde tout son discours. Loin d'être opposés, cœur et raison collaborent : le cœur fonde, la raison construit. Cette conception de la complémentarité des facultés de connaissance est au cœur de l'épistémologie pascalienne. Elle permet de dépasser l'opposition stérile entre rationalisme et irrationalisme."
		},

		// Question n°19
{
	question: "Question n°19 : Pourquoi les pyrrhoniens sont-ils critiqués par Pascal ?",
	answers: [
			"Parce qu'ils doutent de tout et prétendent que rien n'est certain",
			"Parce qu'ils croient tout savoir",
			"Parce qu'ils nient l'existence de Dieu"
			],
		correct: 1,
		explanation: "Les pyrrhoniens sont critiqués par Pascal parce qu'ils doutent de tout et prétendent que rien n'est certain. Ils utilisent l'impuissance de la raison à tout prouver pour conclure à l'incertitude universelle. Pascal refuse cette conclusion : la faiblesse de la raison ne conduit pas à l'incertitude de toutes nos connaissances. Les premiers principes sont connus avec certitude par le cœur, indépendamment de toute preuve rationnelle. Les pyrrhoniens se trompent donc en confondant la faiblesse de la raison et l'incertitude de la connaissance. Leur entreprise est vaine car ils combattent des certitudes inébranlables."
		},

		// Question n°20
{
	question: "Question n°20 : Quel exemple Pascal utilise-t-il pour illustrer la connaissance par le cœur ?",
	answers: [
			"L'amour",
			"Le fait que nous ne rêvons point",
			"La foi en Dieu"
			],
		correct: 1,
		explanation: "Pascal utilise l'exemple du rêve pour illustrer la connaissance par le cœur : « Nous savons que nous ne rêvons point. » Cette certitude est immédiate et indubitable, mais elle ne peut être prouvée par la raison. C'est un exemple paradigmatique de connaissance par le cœur : une certitude qui précède toute démonstration et qui résiste à tous les arguments sceptiques. Personne ne peut douter sérieusement qu'il ne rêve pas au moment où il est éveillé. Cette certitude naturelle est le modèle de la connaissance par le cœur."
		},

		// Question n°21
{
	question: "Question n°21 : Quel est le rôle de la raison dans la connaissance selon Pascal ?",
	answers: [
			"La raison fonde les premiers principes",
			"La raison démontre les propositions à partir des principes fournis par le cœur",
			"La raison est inutile"
			],
		correct: 1,
		explanation: "Selon Pascal, le rôle de la raison dans la connaissance est de démontrer les propositions à partir des principes fournis par le cœur. La raison ne fonde pas les premiers principes : elle les reçoit du cœur et les utilise comme point de départ de ses démonstrations. Elle travaille à partir d'un donné qui la précède. Cette conception de la raison est à la fois modeste (elle n'est pas autonome) et valorisante (elle a un rôle essentiel dans la construction du savoir). La raison est l'instrument de la déduction, non la source des principes."
		},

		// Question n°22
{
	question: "Question n°22 : Qu'est-ce que le « cœur » chez Pascal ?",
	answers: [
			"L'organe physique",
			"Une faculté de connaissance intuitive et immédiate",
			"Le siège des émotions"
			],
		correct: 1,
		explanation: "Chez Pascal, le « cœur » n'est pas l'organe physique ni simplement le siège des émotions. C'est une faculté de connaissance intuitive et immédiate, irréductible à la raison. Le cœur saisit les premiers principes, les évidences fondamentales, avec une certitude qui précède toute démonstration. Il est aussi la faculté par laquelle nous connaissons Dieu et les vérités de la foi. Cette conception élargie du cœur comme faculté de connaissance est caractéristique de la pensée pascalienne. Elle permet de fonder la connaissance sur autre chose que la seule raison démonstrative."
		},

		// Question n°23
{
	question: "Question n°23 : Comment Pascal définit-il les premiers principes ?",
	answers: [
			"Comme des vérités démontrables",
			"Comme des évidences premières connues par le cœur",
			"Comme des hypothèses"
			],
		correct: 2,
		explanation: "Pascal définit les premiers principes comme des évidences premières connues par le cœur. Ce sont des notions fondamentales (espace, temps, mouvement, nombres) qui ne sont pas démontrables mais qui sont saisies intuitivement avec une certitude absolue. Ils constituent le fondement de toute connaissance : la raison s'appuie sur eux pour construire ses démonstrations. Cette conception des premiers principes s'inscrit dans une longue tradition philosophique, d'Aristote à Descartes, mais Pascal en déplace la source : ce n'est pas la raison qui les pose, c'est le cœur qui les sent."
		},

		// Question n°24
{
	question: "Question n°24 : Pourquoi est-il ridicule de demander au cœur des preuves de ses principes ?",
	answers: [
			"Parce que le cœur ne peut pas parler",
			"Parce que les principes sont évidents et ne se démontrent pas",
			"Parce que la raison est supérieure"
			],
		correct: 1,
		explanation: "Il est ridicule de demander au cœur des preuves de ses principes parce que les principes sont évidents et ne se démontrent pas. Les premiers principes sont saisis intuitivement par le cœur, non conclus par la raison. Exiger des preuves de ce qui est évident, c'est méconnaître la nature de l'évidence. C'est aussi inutile car le cœur ne peut pas fournir de preuves : il sent, il ne démontre pas. Cette exigence est donc absurde et vaine. Pascal souligne par là l'irréductibilité des deux voies de connaissance : on ne peut pas demander à l'une ce qui est le propre de l'autre."
		},

		// Question n°25
{
	question: "Question n°25 : Quelle est la différence entre sentir et conclure selon Pascal ?",
	answers: [
			"Sentir est inférieur à conclure",
			"Sentir est le mode de connaissance du cœur, conclure est celui de la raison",
			"Sentir et conclure sont identiques"
			],
		correct: 2,
		explanation: "Selon Pascal, sentir est le mode de connaissance du cœur, conclure est celui de la raison. « Les principes se sentent, les propositions se concluent. » Sentir est une saisie immédiate, intuitive, qui ne passe pas par le raisonnement. Conclure est une opération discursive, qui déduit des propositions à partir de principes. Ces deux modes de connaissance sont différents mais également certains. Cette distinction entre sentir et conclure est fondamentale dans l'épistémologie pascalienne : elle fonde la complémentarité du cœur et de la raison."
		},

		// Question n°26
{
	question: "Question n°26 : Comment Pascal réfute-t-il le scepticisme des pyrrhoniens ?",
	answers: [
			"Par la démonstration rationnelle",
			"En montrant que la faiblesse de la raison ne conduit pas à l'incertitude de la connaissance",
			"Par la foi"
			],
		correct: 2,
		explanation: "Pascal réfute le scepticisme des pyrrhoniens en montrant que la faiblesse de la raison ne conduit pas à l'incertitude de la connaissance. Les pyrrhoniens concluent de l'impuissance de la raison à tout prouver à l'incertitude universelle. Pascal refuse ce passage : il y a une différence entre la faiblesse de la raison et l'incertitude de la connaissance. Les premiers principes sont connus avec certitude par le cœur, indépendamment de toute preuve rationnelle. La connaissance humaine n'est donc pas condamnée au doute universel. Cette réfutation du scepticisme est au cœur de l'argumentation pascalienne."
		},

		// Question n°27
{
	question: "Question n°27 : Quel est le rapport entre cœur et instinct chez Pascal ?",
	answers: [
			"Ils sont opposés",
			"Ils désignent tous deux la faculté de connaissance intuitive",
			"L'instinct est supérieur au cœur"
			],
		correct: 1,
		explanation: "Chez Pascal, le cœur et l'instinct désignent tous deux la faculté de connaissance intuitive. Pascal parle des « connaissances du cœur et de l'instinct » comme d'une même réalité. L'instinct est la dimension naturelle et spontanée de cette connaissance : c'est une inclination immédiate vers la vérité qui précède toute réflexion. Le cœur est la faculté qui saisit les premiers principes et les vérités de la foi. Les deux termes sont complémentaires : l'instinct désigne le caractère naturel et immédiat de cette connaissance, le cœur la faculté qui en est le siège."
		},

		// Question n°28
{
	question: "Question n°28 : Que démontre la raison selon l'exemple mathématique de Pascal ?",
	answers: [
			"Que les nombres sont infinis",
			"Qu'il n'y a point deux nombres carrés dont l'un soit le double de l'autre",
			"Que l'espace a trois dimensions"
			],
		correct: 2,
		explanation: "Selon l'exemple mathématique de Pascal, la raison démontre « qu'il n'y a point deux nombres carrés dont l'un soit le double de l'autre ». Cette proposition est démontrable rationnellement, contrairement aux principes (l'infinité des nombres, la tridimensionnalité de l'espace) qui sont sentis par le cœur. Pascal distingue ainsi deux types de connaissances mathématiques : les principes, saisis intuitivement, et les propositions, démontrées rationnellement. Cette distinction illustre la complémentarité du cœur et de la raison dans la science mathématique elle-même."
		},

		// Question n°29
{
	question: "Question n°29 : Pourquoi la raison doit-elle s'appuyer sur le cœur selon Pascal ?",
	answers: [
			"Parce que le cœur est supérieur",
			"Parce que la raison ne peut pas fonder ses propres principes",
			"Parce que la raison est inutile"
			],
		correct: 2,
		explanation: "La raison doit s'appuyer sur le cœur selon Pascal parce que la raison ne peut pas fonder ses propres principes. La raison ne peut pas démontrer les premiers principes (espace, temps, mouvement, nombres) : elle les présuppose. Si elle veut éviter une régression à l'infini, elle doit admettre des principes premiers qui ne sont pas démontrables. Ces principes lui sont fournis par le cœur. La raison dépend donc du cœur pour son fondement. Cette dépendance n'est pas une faiblesse mais une condition de possibilité de la raison : sans principes, pas de démonstration."
		},

		// Question n°30
{
	question: "Question n°30 : Comment Pascal caractérise-t-il la connaissance des premiers principes ?",
	answers: [
			"Comme incertaine",
			"Comme aussi ferme que les conclusions de la raison",
			"Comme provisoire"
			],
		correct: 2,
		explanation: "Pascal caractérise la connaissance des premiers principes comme aussi ferme que les conclusions de la raison. Il affirme qu'elle « est aussi ferme qu'aucune de celles que nos raisonnements nous donnent ». Cette affirmation place la connaissance par le cœur au même niveau de certitude que la connaissance par la raison. Il n'y a pas de hiérarchie de certitude : les principes sentis par le cœur sont aussi certains que les propositions conclues par la raison. Cette égalité de certitude est essentielle : elle fonde la légitimité de la connaissance par le cœur et réfute le scepticisme."
		},

		// Question n°31
{
	question: "Question n°31 : Quel est le rôle du cœur dans la connaissance scientifique selon Pascal ?",
	answers: [
			"Le cœur est inutile à la science",
			"Le cœur fournit les principes premiers sur lesquels la science se fonde",
			"Le cœur remplace la raison"
			],
		correct: 2,
		explanation: "Selon Pascal, le rôle du cœur dans la connaissance scientifique est de fournir les principes premiers sur lesquels la science se fonde. Les notions d'espace, de temps, de mouvement, de nombre sont saisies par le cœur avant toute démonstration. La science les présuppose et construit ses démonstrations à partir d'elles. Sans le cœur, la science serait impossible car elle n'aurait pas de fondement. Cette conception reconnaît une dimension intuitive et non rationnelle au fondement de la science. Elle s'oppose au rationalisme pur qui prétend tout fonder par la raison."
		},

		// Question n°32
{
	question: "Question n°32 : Que signifie l'expression « la raison s'appuie sur le cœur » ?",
	answers: [
			"La raison dépend du cœur pour ses principes",
			"La raison est émotionnelle",
			"La raison est supérieure au cœur"
			],
		correct: 1,
		explanation: "L'expression « la raison s'appuie sur le cœur » signifie que la raison dépend du cœur pour ses principes. La raison ne est pas autonome : elle a besoin des premiers principes que le cœur lui fournit pour commencer ses démonstrations. Cette dépendance est structurelle : sans principes, la raison ne peut rien construire. La raison est donc fondée sur quelque chose qui la dépasse : l'intuition du cœur. Cette conception de la raison comme faculté seconde, dépendante du cœur, est caractéristique de la pensée pascalienne. Elle limite les prétentions de la raison à l'autonomie absolue."
		},

		// Question n°33
{
	question: "Question n°33 : Comment Pascal distingue-t-il les principes des propositions ?",
	answers: [
			"Par leur degré de certitude",
			"Par leur mode de connaissance : les principes se sentent, les propositions se concluent",
			"Par leur objet"
			],
		correct: 2,
		explanation: "Pascal distingue les principes des propositions par leur mode de connaissance : les principes se sentent, les propositions se concluent. Les principes sont saisis intuitivement par le cœur ; les propositions sont déduites discursivement par la raison. Cette distinction est fondée sur la nature des objets : les principes sont des évidences premières qui ne se démontrent pas ; les propositions sont des conclusions qui se démontrent. La différence n'est pas dans le degré de certitude (égale pour les deux) mais dans la voie d'accès. Cette distinction est fondamentale dans l'épistémologie pascalienne."
		},

		// Question n°34
{
	question: "Question n°34 : Pourquoi Pascal affirme-t-il que les pyrrhoniens travaillent inutilement ?",
	answers: [
			"Parce qu'ils sont paresseux",
			"Parce qu'ils essayent de combattre des certitudes inébranlables",
			"Parce qu'ils n'ont pas de méthode"
			],
		correct: 2,
		explanation: "Pascal affirme que les pyrrhoniens travaillent inutilement parce qu'ils essayent de combattre des certitudes inébranlables. Les premiers principes sont connus par le cœur avec une certitude qui résiste à tous les arguments sceptiques. Les pyrrhoniens ont beau multiplier les raisonnements, ils ne peuvent pas détruire ces certitudes naturelles. Leur entreprise est donc vaine : ils s'attaquent à quelque chose qui ne peut pas être ébranlé par le raisonnement. Cette critique du pyrrhonisme ne signifie pas que Pascal rejette tout scepticisme : il reconnaît la faiblesse de la raison, mais refuse d'en conclure à l'incertitude universelle."
		},

		// Question n°35
{
	question: "Question n°35 : Quelle est la conséquence de la faiblesse de la raison selon Pascal ?",
	answers: [
			"L'incertitude de toutes nos connaissances",
			"La nécessité de s'appuyer sur le cœur pour les premiers principes",
			"L'impossibilité de connaître"
			],
		correct: 2,
		explanation: "Selon Pascal, la conséquence de la faiblesse de la raison est la nécessité de s'appuyer sur le cœur pour les premiers principes. Puisque la raison ne peut pas tout prouver, elle doit admettre des principes premiers qui ne sont pas démontrables. Ces principes lui sont fournis par le cœur. La faiblesse de la raison n'est donc pas une raison de douter de tout, mais une raison de reconnaître la complémentarité du cœur et de la raison. La raison a besoin du cœur pour ses fondements. Cette conception transforme la faiblesse de la raison en une invitation à reconnaître le rôle du cœur dans la connaissance."
		},

		// Question n°36
{
	question: "Question n°36 : Comment Pascal conçoit-il la certitude dans la connaissance ?",
	answers: [
			"La certitude vient uniquement de la raison",
			"La certitude vient du cœur pour les principes et de la raison pour les propositions",
			"La certitude est impossible"
			],
		correct: 2,
		explanation: "Pascal conçoit la certitude dans la connaissance comme venant du cœur pour les principes et de la raison pour les propositions. Les deux voies de connaissance produisent une certitude égale, quoique par des moyens différents. Le cœur sent les principes avec certitude ; la raison conclut les propositions avec certitude. Il n'y a pas de hiérarchie de certitude entre les deux. Cette conception pluraliste de la certitude est caractéristique de Pascal : elle reconnaît la validité de plusieurs modes de connaissance et refuse le monopole de la raison démonstrative. La certitude n'est pas l'apanage d'une seule faculté."
		},

		// Question n°37
{
	question: "Question n°37 : Quel est le rapport entre la connaissance par le cœur et la connaissance par la raison ?",
	answers: [
			"Ils sont opposés",
			"Ils sont complémentaires et également certains",
			"L'un est supérieur à l'autre"
			],
		correct: 2,
		explanation: "Le rapport entre la connaissance par le cœur et la connaissance par la raison est un rapport de complémentarité et d'égalité de certitude. Les deux voies sont différentes mais convergent vers la vérité. Le cœur saisit les principes, la raison en tire les conclusions. Les deux opèrent avec certitude. Il n'y a pas de hiérarchie entre les deux : ni le cœur ni la raison n'est supérieur à l'autre. Cette conception de la complémentarité des facultés de connaissance est au cœur de l'épistémologie pascalienne. Elle permet de dépasser l'opposition stérile entre rationalisme et irrationalisme."
		},

		// Question n°38
{
	question: "Question n°38 : Pourquoi Pascal critique-t-il la prétention de la raison à tout prouver ?",
	answers: [
			"Parce que la raison est inutile",
			"Parce que la raison ne peut pas fonder ses propres principes",
			"Parce que la raison est mauvaise"
			],
		correct: 2,
		explanation: "Pascal critique la prétention de la raison à tout prouver parce que la raison ne peut pas fonder ses propres principes. La raison ne peut pas démontrer les premiers principes qu'elle utilise : elle les présuppose. Si elle voulait tout prouver, elle serait entraînée dans une régression à l'infini. La raison doit donc reconnaître ses limites : elle ne peut pas se fonder elle-même. Cette critique de la prétention rationaliste à l'autonomie absolue est caractéristique de la pensée pascalienne. Elle ne rejette pas la raison mais la replace dans ses limites : la raison est un instrument puissant mais elle n'est pas la source de ses propres principes."
		},

		// Question n°39
{
	question: "Question n°39 : Comment Pascal définit-il le cœur comme faculté de connaissance ?",
	answers: [
			"Comme une faculté inférieure à la raison",
			"Comme une faculté de saisie intuitive et immédiate des premiers principes",
			"Comme une faculté émotionnelle"
			],
		correct: 2,
		explanation: "Pascal définit le cœur comme une faculté de saisie intuitive et immédiate des premiers principes. Le cœur sent, c'est-à-dire saisit directement et sans médiation les évidences premières (espace, temps, mouvement, nombres). Cette connaissance est immédiate : elle ne passe pas par le raisonnement. Elle est intuitive : elle saisit directement son objet. Elle est certaine : elle ne peut être ébranlée par le doute. Cette définition du cœur comme faculté de connaissance à part entière est essentielle dans la pensée pascalienne. Elle fonde la légitimité d'une connaissance non rationnelle."
		},

		// Question n°40
{
	question: "Question n°40 : Que signifie l'expression « les principes se sentent » ?",
	answers: [
			"Les principes sont émotionnels",
			"Les principes sont saisis intuitivement par le cœur",
			"Les principes sont irrationnels"
			],
		correct: 2,
		explanation: "L'expression « les principes se sentent » signifie que les principes sont saisis intuitivement par le cœur. Le verbe « sentir » ne renvoie pas ici à l'émotion mais à une saisie immédiate et intuitive. Les principes ne se démontrent pas : ils se sentent, c'est-à-dire qu'ils sont saisis directement par le cœur avec évidence. Cette terminologie pascalienne distingue la connaissance intuitive (sentir) de la connaissance discursive (conclure). Elle souligne le caractère immédiat et non médiat de la saisie des premiers principes. C'est une connaissance par contact direct, non par démonstration."
		},

		// Question n°41
{
	question: "Question n°41 : Pourquoi la raison et le cœur ne peuvent-ils pas se demander mutuellement des preuves ?",
	answers: [
			"Parce qu'ils sont ennemis",
			"Parce que chacun a son mode de connaissance propre et irréductible",
			"Parce qu'ils sont identiques"
			],
		correct: 2,
		explanation: "La raison et le cœur ne peuvent pas se demander mutuellement des preuves parce que chacun a son mode de connaissance propre et irréductible. La raison démontre, le cœur sent. Demander à la raison de sentir serait absurde ; demander au cœur de démontrer serait tout aussi absurde. Chaque faculté opère selon sa propre logique. Pascal souligne cette irréductibilité pour montrer l'inanité des exigences croisées : on ne peut pas demander à une faculté ce qui est le propre d'une autre. Cette conception de l'irréductibilité des modes de connaissance est au cœur de l'épistémologie pascalienne."
		},

		// Question n°42
{
	question: "Question n°42 : Comment Pascal articule-t-il connaissance rationnelle et connaissance intuitive ?",
	answers: [
			"En les opposant",
			"En montrant que la connaissance rationnelle présuppose la connaissance intuitive",
			"En les identifiant"
			],
		correct: 2,
		explanation: "Pascal articule connaissance rationnelle et connaissance intuitive en montrant que la connaissance rationnelle présuppose la connaissance intuitive. La raison ne peut pas commencer sans les principes que le cœur lui fournit. Il y a donc une antériorité logique de l'intuition sur la déduction. La connaissance rationnelle est seconde par rapport à la connaissance intuitive : elle s'appuie sur elle et la présuppose. Cette articulation est fondamentale : elle fonde la légitimité des deux modes de connaissance tout en établissant leur ordre. L'intuition est première, la déduction vient ensuite."
		},

		// Question n°43
{
	question: "Question n°43 : Quel est le rôle de l'évidence dans la connaissance selon Pascal ?",
	answers: [
			"L'évidence est trompeuse",
			"L'évidence est le mode de saisie des premiers principes par le cœur",
			"L'évidence n'existe pas"
			],
		correct: 2,
		explanation: "Selon Pascal, le rôle de l'évidence dans la connaissance est d'être le mode de saisie des premiers principes par le cœur. Les premiers principes sont évidents : ils s'imposent immédiatement à l'esprit sans avoir besoin d'être démontrés. Cette évidence est le signe de leur vérité. Le cœur les saisit avec une certitude qui ne dépend pas du raisonnement. Cette conception de l'évidence comme mode de connaissance première est caractéristique de la tradition cartésienne, mais Pascal la déplace : ce n'est pas la raison qui saisit l'évidence, c'est le cœur. L'évidence est une connaissance du cœur, non de la raison."
		},

		// Question n°44
{
	question: "Question n°44 : Pourquoi Pascal affirme-t-il que la connaissance des premiers principes est aussi ferme que celle des raisonnements ?",
	answers: [
			"Parce que les principes sont démontrables",
			"Parce que le cœur saisit les principes avec une certitude immédiate et inébranlable",
			"Parce que les raisonnements sont incertains"
			],
		correct: 2,
		explanation: "Pascal affirme que la connaissance des premiers principes est aussi ferme que celle des raisonnements parce que le cœur saisit les principes avec une certitude immédiate et inébranlable. Cette certitude est aussi forte que celle qui accompagne les conclusions rationnelles. Il n'y a pas de différence de degré dans la certitude : les principes sentis par le cœur sont aussi certains que les propositions démontrées par la raison. Cette affirmation est essentielle pour réfuter le scepticisme : elle montre que la connaissance humaine n'est pas condamnée à l'incertitude. Les certitudes premières sont aussi solides que les certitudes dérivées."
		},

		// Question n°45
{
	question: "Question n°45 : Comment Pascal conçoit-il le fondement de la connaissance ?",
	answers: [
			"Le fondement est la raison",
			"Le fondement est le cœur, qui fournit les premiers principes",
			"Le fondement est l'expérience"
			],
		correct: 1,
		explanation: "Pascal conçoit le fondement de la connaissance comme étant le cœur, qui fournit les premiers principes. La connaissance ne repose pas en dernière instance sur la raison, mais sur une saisie intuitive et immédiate des évidences premières. Le cœur est le fondement : il fournit à la raison les principes qu'elle utilise. Cette conception du fondement de la connaissance est originale : elle fait de l'intuition, non de la déduction, le socle du savoir. Elle s'oppose au rationalisme pur qui prétend tout fonder par la raison. Pour Pascal, la raison elle-même repose sur le cœur."
		},

		// Question n°46
{
	question: "Question n°46 : Pourquoi Pascal affirme-t-il que les pyrrhoniens n'ont « que cela pour objet » ?",
	answers: [
			"Parce qu'ils ne s'intéressent qu'à la connaissance",
			"Parce que leur seul but est de combattre les premiers principes",
			"Parce qu'ils sont ignorants"
			],
		correct: 1,
		explanation: "Pascal affirme que les pyrrhoniens n'ont « que cela pour objet » parce que leur seul but est de combattre les premiers principes. Toute leur entreprise consiste à utiliser l'impuissance de la raison à tout prouver pour conclure à l'incertitude universelle. Ils s'attaquent spécifiquement aux premiers principes pour ruiner la connaissance. Pascal souligne ainsi l'obsession des pyrrhoniens : ils ne s'intéressent pas à la connaissance en général mais à sa destruction. Cette critique vise le scepticisme radical qui fait du doute une fin en soi. Pour Pascal, cette entreprise est vaine car les premiers principes sont inébranlables."
		},

		// Question n°47
{
	question: "Question n°47 : Comment Pascal caractérise-t-il la demande de preuves adressée au cœur ?",
	answers: [
			"Comme légitime",
			"Comme ridicule et inutile",
			"Comme nécessaire"
			],
		correct: 1,
		explanation: "Pascal caractérise la demande de preuves adressée au cœur comme ridicule et inutile. Elle est ridicule car elle méconnaît la nature de la connaissance par le cœur : les premiers principes sont évidents et ne se démontrent pas. Elle est inutile car le cœur ne peut pas fournir de preuves : il sent, il ne démontre pas. Cette double caractérisation (ridicule et inutile) souligne l'absurdité de l'exigence rationaliste de tout prouver. Pascal montre ainsi les limites de la raison : elle ne peut pas tout exiger, car il y a des domaines qui échappent à sa juridiction. La connaissance par le cœur a sa légitimité propre."
		},

		// Question n°48
{
	question: "Question n°48 : Quel est le rapport entre les principes et les propositions dans la connaissance ?",
	answers: [
			"Les principes sont dérivés des propositions",
			"Les propositions sont dérivées des principes",
			"Principes et propositions sont indépendants"
			],
		correct: 1,
		explanation: "Dans la connaissance, les propositions sont dérivées des principes. Les principes sont premiers : ils sont sentis par le cœur et constituent le fondement de la connaissance. Les propositions sont secondes : elles sont conclues par la raison à partir des principes. Il y a donc un ordre : les principes viennent avant les propositions, et les propositions dépendent des principes. Cette conception de l'ordre de la connaissance est fondamentale : elle établit la dépendance de la raison à l'égard du cœur. La raison travaille à partir d'un donné qu'elle n'a pas produit elle-même."
		},

		// Question n°49
{
	question: "Question n°49 : Pourquoi Pascal affirme-t-il que la raison ne peut pas tout prouver ?",
	answers: [
			"Parce que la raison est paresseuse",
			"Parce qu'elle doit s'appuyer sur des principes indémontrables",
			"Parce que la vérité n'existe pas"
			],
		correct: 1,
		explanation: "Pascal affirme que la raison ne peut pas tout prouver parce qu'elle doit s'appuyer sur des principes indémontrables. Toute démonstration part de principes premiers qui ne sont pas eux-mêmes démontrés. Si la raison voulait tout prouver, elle serait entraînée dans une régression à l'infini. Elle doit donc admettre des principes indémontrables qui sont saisis par le cœur. Cette limitation de la raison n'est pas un défaut : c'est une condition de possibilité de la connaissance. La raison ne peut pas être autofondatrice ; elle repose sur le cœur. Cette thèse est au cœur de l'épistémologie pascalienne."
		},

		// Question n°50
{
	question: "Question n°50 : Quelle est l'importance de ce texte dans l'histoire de la philosophie ?",
	answers: [
			"C'est un texte mineur",
			"C'est un texte majeur qui fonde une épistémologie du cœur et critique le rationalisme exclusif",
			"C'est un texte purement religieux"
			],
		correct: 2,
		explanation: "Ce texte de Pascal est majeur car il fonde une épistémologie du cœur et critique le rationalisme exclusif. Pascal y affirme que la connaissance ne se réduit pas à la raison : le cœur a sa propre manière de connaître, irréductible à la démonstration rationnelle. Les premiers principes sont connus par le cœur, et la raison doit s'appuyer sur eux. Cette conception a profondément influencé la philosophie moderne et contemporaine, notamment la phénoménologie et l'herméneutique. Elle a aussi contribué à la critique du rationalisme cartésien et à la reconnaissance d'autres modes de connaissance. Ce texte est l'un des fondements de l'épistémologie pascalienne."
		}
];