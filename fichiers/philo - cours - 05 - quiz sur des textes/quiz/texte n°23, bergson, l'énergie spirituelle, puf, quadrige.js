// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de BERGSON";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
		texte: `« [1] Conscience signifie d'abord mémoire. (…) [2] Une conscience qui ne conserverait rien de son passé, qui s'oublierait sans cesse elle-même, périrait et renaîtrait à chaque instant : comment définir autrement l'inconscience ? (…) [3] Toute conscience est donc mémoire — conservation et accumulation du passé dans le présent.
[4] Mais toute conscience est anticipation de l'avenir. [5] Considérez la direction de votre esprit à n'importe quel moment : vous trouverez qu'il s'occupe de ce qui est, mais en vue surtout de ce qui va être. (…) [6] L'avenir est là ; il nous appelle, ou plutôt il nous tire à lui : cette traction ininterrompue, qui nous fait avancer sur la route du temps, est cause aussi que nous agissons continuellement. Toute action est un empiétement sur l'avenir.
[7] (…) Disons donc, si vous voulez, que la conscience est un trait d'union entre ce qui a été et ce qui sera, un pont jeté entre le passé et l'avenir. »`,
		source: "Henri BERGSON, L'énergie spirituelle, P.U.F., coll. Quadrige, 5e éd., 1996, p. 5"
};

// ============================================
// QUESTIONS DU QUIZ (50 questions)
// ============================================

const questions = [
	// Question n°1
	{
		question: "Question n°1 : Que signifie d'abord la conscience selon Bergson ?",
		answers: [
			"Anticipation",
			"Mémoire",
			"Action"
			],
			correct: 2,
			explanation: "Bergson affirme d'emblée : « Conscience signifie d'abord mémoire. » Cette première définition fait de la mémoire la caractéristique fondamentale de la conscience. La conscience n'est pas d'abord perception ou pensée : elle est conservation du passé. Cette thèse est au cœur de la philosophie bergsonienne : la durée intérieure de la conscience est essentiellement mémoire, conservation et accumulation du passé dans le présent. La conscience est d'abord tournée vers ce qui a été."
		},

		// Question n°2
	{
		question: "Question n°2 : Que se passerait-il pour une conscience qui ne conserverait rien de son passé ?",
		answers: [
			"Elle serait plus libre",
			"Elle périrait et renaîtrait à chaque instant",
			"Elle serait plus claire"
			],
			correct: 2,
			explanation: "Bergson décrit le cas d'« une conscience qui ne conserverait rien de son passé, qui s'oublierait sans cesse elle-même ». Une telle conscience « périrait et renaîtrait à chaque instant ». Cette description est une expérience de pensée visant à montrer que la mémoire est constitutive de la conscience. Sans mémoire, il n'y aurait pas de continuité du moi, pas d'identité personnelle. Chaque instant serait un commencement absolu, sans lien avec le précédent. Cette conscience sans mémoire serait en réalité une inconscience."
		},

		// Question n°3
{
	question: "Question n°3 : Comment Bergson définit-il l'inconscience ?",
	answers: [
			"Comme l'absence de mémoire, une conscience qui s'oublie sans cesse",
			"Comme le sommeil",
			"Comme la mort"
			],
		correct: 2,
		explanation: "Bergson définit l'inconscience comme l'absence de mémoire, une conscience qui s'oublie sans cesse. Il pose la question rhétorique : « comment définir autrement l'inconscience ? » Une conscience sans mémoire serait une conscience qui périt et renaît à chaque instant, sans continuité ni identité. Elle serait donc équivalente à l'inconscience. Cette définition de l'inconscience par l'absence de mémoire est significative : elle fait de la mémoire la condition de la conscience. La conscience se définit par la conservation du passé."
		},

		// Question n°4
{
	question: "Question n°4 : Que signifie l'expression « toute conscience est mémoire » ?",
	answers: [
			"La conscience se réduit au souvenir",
			"La conscience conserve et accumule le passé dans le présent",
			"La conscience oublie tout"
			],
		correct: 2,
		explanation: "L'expression « toute conscience est mémoire » signifie que la conscience conserve et accumule le passé dans le présent. Bergson précise : « conservation et accumulation du passé dans le présent ». La mémoire n'est pas seulement le rappel volontaire de souvenirs : elle est la conservation de tout le passé dans le présent de la conscience. C'est cette conservation qui donne à la conscience sa continuité et son épaisseur. La conscience est mémoire en ce qu'elle retient et accumule son passé, qui influence son présent."
		},

		// Question n°5
{
	question: "Question n°5 : Que fait la conscience du passé selon Bergson ?",
	answers: [
			"Elle l'oublie",
			"Elle le conserve et l'accumule dans le présent",
			"Elle le rejette"
			],
		correct: 2,
		explanation: "Selon Bergson, la conscience conserve et accumule le passé dans le présent. La mémoire n'est pas une simple faculté de rappel : elle est la conservation intégrale du passé, qui s'accumule et s'incorpore au présent. Chaque moment de conscience est gros de tout le passé. Cette conception de la mémoire comme accumulation est essentielle dans la philosophie bergsonienne de la durée. Le passé ne est pas perdu : il s'accumule dans le présent et le constitue. La conscience est cette accumulation vivante du passé."
		},

		// Question n°6
{
	question: "Question n°6 : Que dit Bergson après avoir défini la conscience comme mémoire ?",
	answers: [
			"Que la conscience est immuable",
			"Que toute conscience est anticipation de l'avenir",
			"Que la conscience est passive"
			],
		correct: 2,
		explanation: "Après avoir défini la conscience comme mémoire, Bergson ajoute : « Mais toute conscience est anticipation de l'avenir. » Cette seconde caractéristique est aussi essentielle que la première. La conscience n'est pas seulement tournée vers le passé : elle est aussi tournée vers l'avenir. Elle anticipe, prévoit, se projette. Cette double orientation (passé et avenir) définit la conscience comme tension entre ce qui a été et ce qui sera. La conscience est à la fois mémoire et anticipation."
		},

		// Question n°7
{
	question: "Question n°7 : De quoi s'occupe notre esprit selon Bergson ?",
	answers: [
			"Uniquement du présent",
			"De ce qui est, mais en vue de ce qui va être",
			"Uniquement du passé"
			],
		correct: 2,
		explanation: "Bergson affirme : « Considérez la direction de votre esprit à n'importe quel moment : vous trouverez qu'il s'occupe de ce qui est, mais en vue surtout de ce qui va être. » Cette observation phénoménologique montre que la conscience est essentiellement prospective. Même quand elle s'occupe du présent, c'est en vue de l'avenir. La conscience est tendue vers ce qui va être, vers l'action à venir. Cette orientation vers l'avenir est constitutive de la conscience : elle est anticipation, projection, prévision."
		},

		// Question n°8
{
	question: "Question n°8 : Comment Bergson décrit-il l'avenir ?",
	answers: [
			"Comme une illusion",
			"Comme ce qui nous appelle et nous tire à lui",
			"Comme ce qui est derrière nous"
			],
		correct: 2,
		explanation: "Bergson décrit l'avenir comme ce qui « est là ; il nous appelle, ou plutôt il nous tire à lui ». Cette description donne à l'avenir une force active : il n'est pas un simple horizon passif mais une puissance qui nous attire. Cette traction de l'avenir est ce qui nous fait avancer sur la route du temps. L'avenir n'est pas seulement ce qui n'est pas encore : il est une force qui agit sur nous, qui nous mobilise et nous fait agir. Cette conception dynamique de l'avenir est caractéristique de la pensée bergsonienne."
		},

		// Question n°9
{
	question: "Question n°9 : Que cause la traction de l'avenir selon Bergson ?",
	answers: [
			"Notre passivité",
			"Notre action continuelle",
			"Notre sommeil"
			],
		correct: 2,
		explanation: "Selon Bergson, la traction de l'avenir « est cause aussi que nous agissons continuellement ». L'avenir qui nous tire à lui est ce qui nous pousse à agir. Nous agissons parce que nous sommes tendus vers l'avenir, parce que nous anticipons et voulons réaliser quelque chose. L'action est ainsi motivée par l'anticipation de l'avenir. Cette conception lie étroitement conscience, temps et action : la conscience est tendue vers l'avenir, et c'est cette tension qui produit l'action. L'action est la manifestation de notre orientation vers l'avenir."
		},

		// Question n°10
{
	question: "Question n°10 : Que signifie l'expression « toute action est un empiétement sur l'avenir » ?",
	answers: [
			"L'action détruit l'avenir",
			"L'action réalise dans le présent ce qui était anticipé pour l'avenir",
			"L'action ignore l'avenir"
			],
		correct: 2,
		explanation: "L'expression « toute action est un empiétement sur l'avenir » signifie que l'action réalise dans le présent ce qui était anticipé pour l'avenir. Agir, c'est faire advenir maintenant ce qui n'était que projeté. L'action empiète sur l'avenir en le réalisant par avance, en le faisant passer du possible au réel. Cette conception de l'action comme empiétement sur l'avenir souligne le rôle du temps dans l'action humaine : nous agissons toujours en vue d'un avenir que nous anticipons et que nous cherchons à réaliser. L'action est la matérialisation de l'anticipation."
		},

		// Question n°11
{
	question: "Question n°11 : Comment Bergson définit-il la conscience à la fin du texte ?",
	answers: [
			"Comme une substance immatérielle",
			"Comme un trait d'union entre ce qui a été et ce qui sera",
			"Comme une illusion"
			],
		correct: 2,
		explanation: "Bergson définit la conscience comme « un trait d'union entre ce qui a été et ce qui sera, un pont jeté entre le passé et l'avenir ». Cette métaphore du pont et du trait d'union exprime la fonction médiatrice de la conscience : elle relie le passé et l'avenir, elle est le lieu de leur articulation. La conscience n'est ni purement passé ni purement avenir : elle est le lien entre les deux, le présent vivant qui retient le passé et anticipe l'avenir. Cette définition synthétise les deux caractéristiques précédentes : mémoire et anticipation."
		},

		// Question n°12
{
	question: "Question n°12 : Quelle est la première caractéristique de la conscience selon Bergson ?",
	answers: [
			"L'anticipation",
			"La mémoire",
			"L'action"
			],
		correct: 2,
		explanation: "La première caractéristique de la conscience selon Bergson est la mémoire. Il affirme : « Conscience signifie d'abord mémoire. » La conscience est d'abord conservation et accumulation du passé dans le présent. Cette primauté de la mémoire dans la définition de la conscience est significative : elle fait de la conservation du passé la condition de toute vie consciente. Sans mémoire, pas de conscience, car pas de continuité ni d'identité. La mémoire est donc le premier attribut de la conscience."
		},

		// Question n°13
{
	question: "Question n°13 : Quelle est la seconde caractéristique de la conscience selon Bergson ?",
	answers: [
			"La mémoire",
			"L'anticipation de l'avenir",
			"L'inconscience"
			],
		correct: 2,
		explanation: "La seconde caractéristique de la conscience selon Bergson est l'anticipation de l'avenir. Il affirme : « Mais toute conscience est anticipation de l'avenir. » La conscience n'est pas seulement tournée vers le passé : elle est aussi tendue vers l'avenir, qu'elle anticipe et prévoit. Cette orientation vers l'avenir est constitutive de la conscience : elle nous fait agir, elle nous tire à elle. La conscience est donc double : mémoire du passé et anticipation de l'avenir. Ces deux caractéristiques sont inséparables."
		},

		// Question n°14
{
	question: "Question n°14 : Quel est le rapport entre conscience et temps selon Bergson ?",
	answers: [
			"La conscience est indépendante du temps",
			"La conscience est essentiellement temporelle : elle unit passé et avenir dans le présent",
			"La conscience est éternelle"
			],
		correct: 2,
		explanation: "Selon Bergson, la conscience est essentiellement temporelle : elle unit passé et avenir dans le présent. La conscience est mémoire (conservation du passé) et anticipation (projection vers l'avenir). Elle est le lieu où le passé et l'avenir se rejoignent dans un présent vivant. Cette conception de la conscience comme temporalité est au cœur de la philosophie bergsonienne de la durée. La conscience n'est pas dans le temps comme dans un contenant : elle est le temps lui-même, dans son écoulement et son accumulation."
		},

		// Question n°15
{
	question: "Question n°15 : Que signifie l'expression « la conscience est un pont jeté entre le passé et l'avenir » ?",
	answers: [
			"La conscience sépare le passé et l'avenir",
			"La conscience relie le passé et l'avenir dans une continuité vivante",
			"La conscience ignore le passé et l'avenir"
			],
		correct: 2,
		explanation: "L'expression « la conscience est un pont jeté entre le passé et l'avenir » signifie que la conscience relie le passé et l'avenir dans une continuité vivante. La métaphore du pont exprime la fonction médiatrice de la conscience : elle n'est ni purement passé ni purement avenir, mais le lien qui les unit. La conscience est le présent vivant qui retient le passé et anticipe l'avenir. Cette conception de la conscience comme pont est caractéristique de la pensée bergsonienne : la conscience est durée, c'est-à-dire continuité et interpénétration du passé et de l'avenir dans le présent."
		},

		// Question n°16
{
	question: "Question n°16 : Pourquoi une conscience sans mémoire serait-elle une inconscience ?",
	answers: [
			"Parce qu'elle n'aurait pas de continuité ni d'identité",
			"Parce qu'elle serait vide",
			"Parce qu'elle serait trop pleine"
			],
		correct: 2,
		explanation: "Une conscience sans mémoire serait une inconscience parce qu'elle n'aurait pas de continuité ni d'identité. Bergson affirme qu'une telle conscience « périrait et renaîtrait à chaque instant ». Elle n'aurait pas de moi stable, pas de continuité temporelle. Chaque instant serait un commencement absolu, sans lien avec les précédents. Cette conscience serait incapable de se reconnaître comme la même à travers le temps. Elle serait donc équivalente à l'inconscience. La mémoire est ce qui donne à la conscience son unité et sa continuité."
		},

		// Question n°17
{
	question: "Question n°17 : Comment Bergson conçoit-il la mémoire ?",
	answers: [
			"Comme un réservoir de souvenirs inertes",
			"Comme conservation et accumulation vivante du passé dans le présent",
			"Comme une faculté de rappel volontaire"
			],
		correct: 2,
		explanation: "Bergson conçoit la mémoire comme conservation et accumulation vivante du passé dans le présent. La mémoire n'est pas un réservoir de souvenirs inertes que l'on consulterait occasionnellement : elle est la présence agissante de tout le passé dans le présent. Chaque moment de conscience est gros de tout le passé qui s'y accumule. Cette conception de la mémoire comme accumulation vivante est caractéristique de la philosophie bergsonienne de la durée. Le passé ne est pas mort : il vit dans le présent et le constitue."
		},

		// Question n°18
{
	question: "Question n°18 : Quel est le rapport entre conscience et action selon Bergson ?",
	answers: [
			"La conscience est passive",
			"La conscience est tendue vers l'action par l'anticipation de l'avenir",
			"La conscience est indifférente à l'action"
			],
		correct: 2,
		explanation: "Selon Bergson, la conscience est tendue vers l'action par l'anticipation de l'avenir. La traction de l'avenir est ce qui nous fait agir continuellement. La conscience est essentiellement pratique : elle anticipe l'avenir en vue de l'action. Bergson affirme que « toute action est un empiétement sur l'avenir ». L'action réalise dans le présent ce que la conscience avait anticipé. Il y a donc un lien circulaire entre conscience et action : la conscience anticipe l'avenir, et l'action réalise cette anticipation. La conscience est orientée vers l'action."
		},

		// Question n°19
{
	question: "Question n°19 : Que signifie l'expression « l'avenir nous tire à lui » ?",
	answers: [
			"L'avenir est une force active qui nous mobilise",
			"L'avenir est passif",
			"L'avenir n'existe pas"
			],
		correct: 1,
		explanation: "L'expression « l'avenir nous tire à lui » signifie que l'avenir est une force active qui nous mobilise. Bergson corrige lui-même : « il nous appelle, ou plutôt il nous tire à lui ». L'avenir n'est pas un simple horizon passif : il est une puissance qui nous attire, qui nous met en mouvement. Cette traction de l'avenir est ce qui nous fait avancer sur la route du temps et agir continuellement. Cette conception dynamique de l'avenir est caractéristique de la pensée bergsonienne : le temps n'est pas un cadre vide mais une force vivante qui nous entraîne."
		},

		// Question n°20
{
	question: "Question n°20 : Quelle est la thèse principale de ce texte ?",
	answers: [
			"La conscience est une substance immatérielle",
			"La conscience est mémoire et anticipation, un trait d'union entre passé et avenir",
			"La conscience est une illusion"
			],
		correct: 2,
		explanation: "La thèse principale de ce texte est que la conscience est mémoire et anticipation, un trait d'union entre passé et avenir. Bergson définit la conscience par deux caractéristiques complémentaires : elle conserve le passé (mémoire) et anticipe l'avenir (projection). Elle est donc le lien vivant entre ce qui a été et ce qui sera. Cette conception de la conscience comme temporalité vivante est au cœur de la philosophie bergsonienne. Elle s'oppose aux conceptions statiques ou substantielles de la conscience."
		},

		// Question n°21
{
	question: "Question n°21 : Comment Bergson caractérise-t-il la conscience dans sa dimension temporelle ?",
	answers: [
			"Comme éternelle",
			"Comme un mouvement continu entre passé et avenir",
			"Comme immobile"
			],
		correct: 2,
		explanation: "Bergson caractérise la conscience dans sa dimension temporelle comme un mouvement continu entre passé et avenir. La conscience n'est pas une chose statique mais un flux, une durée. Elle conserve le passé et anticipe l'avenir dans un mouvement ininterrompu. Cette conception dynamique de la conscience est caractéristique de la philosophie bergsonienne de la durée. La conscience est essentiellement temporelle : elle est le temps vécu, la durée intérieure. Elle ne est pas dans le temps : elle est le temps lui-même dans son écoulement créateur."
		},

		// Question n°22
{
	question: "Question n°22 : Que signifie l'expression « conservation et accumulation du passé dans le présent » ?",
	answers: [
			"Le passé est conservé et s'accumule dans le présent de la conscience",
			"Le passé est oublié",
			"Le passé est nié"
			],
		correct: 2,
		explanation: "L'expression « conservation et accumulation du passé dans le présent » signifie que le passé est conservé et s'accumule dans le présent de la conscience. Cette formule définit la mémoire selon Bergson. La mémoire n'est pas un simple rappel : elle est la présence agissante de tout le passé dans le présent. Chaque moment de conscience contient tout le passé qui s'y est accumulé. Cette conception de la mémoire comme accumulation est essentielle dans la philosophie bergsonienne : le passé ne est pas perdu, il s'incorpore au présent et le constitue."
		},

		// Question n°23
{
	question: "Question n°23 : Pourquoi Bergson affirme-t-il que toute action est un empiétement sur l'avenir ?",
	answers: [
			"Parce que l'action réalise dans le présent ce qui était anticipé pour l'avenir",
			"Parce que l'action détruit l'avenir",
			"Parce que l'action ignore l'avenir"
			],
		correct: 2,
		explanation: "Bergson affirme que toute action est un empiétement sur l'avenir parce que l'action réalise dans le présent ce qui était anticipé pour l'avenir. Agir, c'est faire advenir maintenant ce qui n'était que projeté. L'action empiète sur l'avenir en le réalisant par avance. Cette conception de l'action comme empiétement sur l'avenir souligne le rôle du temps dans l'action humaine : nous agissons toujours en vue d'un avenir que nous anticipons. L'action est la matérialisation de l'anticipation, la réalisation dans le présent de ce qui était projeté pour l'avenir."
		},

		// Question n°24
{
	question: "Question n°24 : Comment Bergson définit-il le rapport entre passé, présent et avenir dans la conscience ?",
	answers: [
			"Comme une succession linéaire",
			"Comme une interpénétration vivante où le passé et l'avenir se rejoignent dans le présent",
			"Comme une séparation radicale"
			],
		correct: 2,
		explanation: "Bergson définit le rapport entre passé, présent et avenir dans la conscience comme une interpénétration vivante où le passé et l'avenir se rejoignent dans le présent. La conscience est mémoire (conservation du passé) et anticipation (projection vers l'avenir). Elle est le lieu où passé et avenir s'unissent dans un présent vivant. Cette conception de la temporalité de la conscience comme interpénétration est caractéristique de la philosophie bergsonienne de la durée. Le temps vécu n'est pas une succession linéaire d'instants séparés : c'est une continuité où passé, présent et avenir s'interpénètrent."
		},

		// Question n°25
{
	question: "Question n°25 : Quel est le rôle de la mémoire dans la conscience selon Bergson ?",
	answers: [
			"La mémoire est accessoire",
			"La mémoire est constitutive de la conscience : sans elle, pas de continuité ni d'identité",
			"La mémoire est nuisible"
			],
		correct: 2,
		explanation: "Selon Bergson, le rôle de la mémoire dans la conscience est constitutif : sans elle, pas de continuité ni d'identité. La mémoire est ce qui donne à la conscience son unité à travers le temps. Sans mémoire, la conscience périt et renaît à chaque instant, sans lien avec elle-même. Elle serait donc équivalente à l'inconscience. La mémoire est donc la condition de possibilité de la conscience. Cette thèse est fondamentale dans la philosophie bergsonienne : la mémoire n'est pas une faculté parmi d'autres, elle est l'essence même de la conscience."
		},

		// Question n°26
{
	question: "Question n°26 : Comment Bergson décrit-il la direction de notre esprit ?",
	answers: [
			"Tournée vers le passé uniquement",
			"Tournée vers ce qui est, mais en vue de ce qui va être",
			"Tournée vers l'éternel"
			],
		correct: 2,
		explanation: "Bergson décrit la direction de notre esprit comme tournée vers « ce qui est, mais en vue surtout de ce qui va être ». Cette description phénoménologique montre que la conscience est essentiellement prospective. Même quand elle s'occupe du présent, c'est en vue de l'avenir. La conscience est tendue vers ce qui va être, vers l'action à venir. Cette orientation vers l'avenir est constitutive de la conscience : elle est anticipation, projection, prévision. La conscience est essentiellement pratique et prospective."
		},

		// Question n°27
{
	question: "Question n°27 : Que signifie l'expression « la conscience est un trait d'union » ?",
	answers: [
			"La conscience sépare",
			"La conscience relie le passé et l'avenir",
			"La conscience divise"
			],
		correct: 2,
		explanation: "L'expression « la conscience est un trait d'union » signifie que la conscience relie le passé et l'avenir. La métaphore du trait d'union exprime la fonction médiatrice de la conscience : elle unit ce qui a été et ce qui sera. La conscience n'est ni purement passé ni purement avenir : elle est le lien vivant entre les deux. Cette conception de la conscience comme lien est caractéristique de la pensée bergsonienne : la conscience est durée, c'est-à-dire continuité et interpénétration du passé et de l'avenir dans le présent."
		},

		// Question n°28
{
	question: "Question n°28 : Pourquoi Bergson utilise-t-il la métaphore du pont ?",
	answers: [
			"Pour décorer son discours",
			"Pour exprimer la fonction médiatrice de la conscience entre passé et avenir",
			"Pour parler de géographie"
			],
		correct: 2,
		explanation: "Bergson utilise la métaphore du pont pour exprimer la fonction médiatrice de la conscience entre passé et avenir. Le pont est ce qui relie deux rives séparées. De même, la conscience relie le passé et l'avenir. Cette métaphore exprime l'idée que la conscience n'est pas coupée du passé ou de l'avenir : elle est le lien vivant qui les unit. La conscience est le présent qui retient le passé et anticipe l'avenir. Cette image du pont est l'une des plus célèbres de Bergson : elle synthétise sa conception de la conscience comme temporalité vivante."
		},

		// Question n°29
{
	question: "Question n°29 : Comment Bergson conçoit-il le présent de la conscience ?",
	answers: [
			"Comme un instant isolé",
			"Comme le lieu où passé et avenir s'unissent",
			"Comme une illusion"
			],
		correct: 2,
		explanation: "Bergson conçoit le présent de la conscience comme le lieu où passé et avenir s'unissent. Le présent n'est pas un instant isolé et ponctuel : il est gros du passé qu'il conserve et de l'avenir qu'il anticipe. Il est le point de jonction entre ce qui a été et ce qui sera. Cette conception du présent comme lieu d'union du passé et de l'avenir est caractéristique de la philosophie bergsonienne de la durée. Le présent vivant n'est pas un point mathématique : il a une épaisseur, une durée, qui lui vient de la mémoire et de l'anticipation."
		},

		// Question n°30
{
	question: "Question n°30 : Quel est le rapport entre conscience et durée chez Bergson ?",
	answers: [
			"La conscience est indépendante de la durée",
			"La conscience est essentiellement durée : elle est conservation et création continue",
			"La conscience est immobile"
			],
		correct: 2,
		explanation: "Chez Bergson, le rapport entre conscience et durée est essentiel : la conscience est durée. La durée bergsonienne est la continuité vivante du temps intérieur, où le passé se conserve et s'accumule dans le présent, et où l'avenir est anticipation. La conscience est cette durée elle-même : elle est conservation et création continue. Cette conception de la conscience comme durée est au cœur de la philosophie bergsonienne. La conscience n'est pas dans le temps : elle est le temps vécu, la durée intérieure, le flux continu de la vie psychique."
		},

		// Question n°31
{
	question: "Question n°31 : Pourquoi la conscience est-elle essentiellement tournée vers l'avenir ?",
	answers: [
			"Parce que le passé est oublié",
			"Parce que l'avenir nous tire à lui et nous fait agir",
			"Parce que l'avenir est plus important"
			],
		correct: 2,
		explanation: "La conscience est essentiellement tournée vers l'avenir parce que l'avenir nous tire à lui et nous fait agir. Bergson affirme : « L'avenir est là ; il nous appelle, ou plutôt il nous tire à lui. » Cette traction de l'avenir est ce qui nous met en mouvement et nous fait agir continuellement. La conscience est prospective parce qu'elle est pratique : elle anticipe l'avenir en vue de l'action. Cette orientation vers l'avenir est constitutive de la conscience : elle est anticipation, projection, prévision. La conscience est tendue vers ce qui va être."
		},

		// Question n°32
{
	question: "Question n°32 : Comment Bergson définit-il l'action par rapport au temps ?",
	answers: [
			"L'action est intemporelle",
			"L'action est un empiétement sur l'avenir",
			"L'action est tournée vers le passé"
			],
		correct: 2,
		explanation: "Bergson définit l'action par rapport au temps comme un empiétement sur l'avenir. Agir, c'est faire advenir dans le présent ce qui était anticipé pour l'avenir. L'action réalise par avance ce qui n'était que projeté. Cette conception de l'action comme empiétement sur l'avenir souligne le rôle du temps dans l'action humaine. Nous agissons toujours en vue d'un avenir que nous anticipons et que nous cherchons à réaliser. L'action est la matérialisation de l'anticipation, la réalisation dans le présent de ce qui était projeté pour l'avenir."
		},

		// Question n°33
{
	question: "Question n°33 : Quel est le lien entre mémoire et anticipation chez Bergson ?",
	answers: [
			"Ils sont opposés",
			"Ils sont complémentaires : la mémoire nourrit l'anticipation",
			"Ils sont identiques"
			],
		correct: 2,
		explanation: "Chez Bergson, le lien entre mémoire et anticipation est un lien de complémentarité : la mémoire nourrit l'anticipation. Ce que nous avons vécu (mémoire) nous permet d'anticiper l'avenir. L'expérience passée est la base de la prévision. La mémoire et l'anticipation sont les deux faces de la conscience temporelle : la conscience se souvient pour mieux prévoir. Cette conception de la complémentarité de la mémoire et de l'anticipation est essentielle dans la philosophie bergsonienne. La conscience est à la fois tournée vers le passé qu'elle conserve et vers l'avenir qu'elle anticipe."
		},

		// Question n°34
{
	question: "Question n°34 : Pourquoi Bergson affirme-t-il que la conscience est un « trait d'union » ?",
	answers: [
			"Parce qu'elle unit le passé et l'avenir",
			"Parce qu'elle divise",
			"Parce qu'elle est inutile"
			],
		correct: 2,
		explanation: "Bergson affirme que la conscience est un « trait d'union » parce qu'elle unit le passé et l'avenir. La conscience est le lien vivant entre ce qui a été et ce qui sera. Elle n'est ni purement passé ni purement avenir : elle est le présent qui retient le passé et anticipe l'avenir. Cette fonction médiatrice de la conscience est essentielle : sans elle, il n'y aurait pas de continuité temporelle, pas de durée vécue. La conscience est ce qui fait tenir ensemble le passé et l'avenir dans une unité vivante."
		},

		// Question n°35
{
	question: "Question n°35 : Comment Bergson conçoit-il la conscience dans son rapport au temps ?",
	answers: [
			"Comme extérieure au temps",
			"Comme essentiellement temporelle, constituée par la mémoire et l'anticipation",
			"Comme intemporelle"
			],
		correct: 2,
		explanation: "Bergson conçoit la conscience dans son rapport au temps comme essentiellement temporelle, constituée par la mémoire et l'anticipation. La conscience n'est pas une substance intemporelle qui serait dans le temps comme dans un contenant : elle est le temps vécu lui-même, la durée intérieure. Elle est faite de mémoire (conservation du passé) et d'anticipation (projection vers l'avenir). Cette conception de la conscience comme temporalité constitutive est au cœur de la philosophie bergsonienne. La conscience n'est pas dans le temps : elle est le temps."
		},

		// Question n°36
{
	question: "Question n°36 : Quel est le rôle de l'anticipation dans la conscience selon Bergson ?",
	answers: [
			"L'anticipation est accessoire",
			"L'anticipation est constitutive de la conscience : elle nous fait agir et nous projette vers l'avenir",
			"L'anticipation est nuisible"
			],
		correct: 2,
		explanation: "Selon Bergson, le rôle de l'anticipation dans la conscience est constitutif : elle nous fait agir et nous projette vers l'avenir. La conscience n'est pas seulement mémoire du passé : elle est aussi anticipation de l'avenir. C'est cette anticipation qui nous tire en avant, qui nous fait agir, qui donne un sens à notre existence. Sans anticipation, il n'y aurait pas d'action, pas de projet, pas de vie orientée vers un but. L'anticipation est donc aussi essentielle que la mémoire à la constitution de la conscience. Elle est la dimension prospective de la conscience."
		},

		// Question n°37
{
	question: "Question n°37 : Pourquoi la conscience est-elle à la fois mémoire et anticipation ?",
	answers: [
			"Parce qu'elle est temporelle : elle est le lien entre passé et avenir",
			"Parce qu'elle est éternelle",
			"Parce qu'elle est immobile"
			],
		correct: 2,
		explanation: "La conscience est à la fois mémoire et anticipation parce qu'elle est temporelle : elle est le lien entre passé et avenir. La conscience n'est pas une faculté statique : elle est un mouvement, une durée. Elle conserve le passé (mémoire) et anticipe l'avenir (projection). Ces deux dimensions sont inséparables : elles constituent la temporalité vivante de la conscience. Cette conception de la conscience comme unité de la mémoire et de l'anticipation est au cœur de la philosophie bergsonienne. La conscience est le temps vécu dans son unité et sa continuité."
		},

		// Question n°38
{
	question: "Question n°38 : Comment Bergson définit-il la conscience dans sa dimension active ?",
	answers: [
			"Comme passive",
			"Comme tendue vers l'action par l'anticipation de l'avenir",
			"Comme contemplative"
			],
		correct: 2,
		explanation: "Bergson définit la conscience dans sa dimension active comme tendue vers l'action par l'anticipation de l'avenir. La conscience n'est pas passive ou contemplative : elle est essentiellement pratique, orientée vers l'action. C'est l'anticipation de l'avenir qui nous fait agir. Bergson affirme que « toute action est un empiétement sur l'avenir ». La conscience est donc inséparable de l'action : elle anticipe l'avenir en vue de l'action, et l'action réalise dans le présent ce qui était anticipé. La conscience est dynamique, tendue vers l'avenir et l'action."
		},

		// Question n°39
{
	question: "Question n°39 : Quel est le rapport entre conscience et identité personnelle selon Bergson ?",
	answers: [
			"La conscience est indépendante de l'identité",
			"La conscience est ce qui constitue l'identité personnelle par la mémoire",
			"La conscience détruit l'identité"
			],
		correct: 2,
		explanation: "Selon Bergson, le rapport entre conscience et identité personnelle est constitutif : la conscience est ce qui constitue l'identité personnelle par la mémoire. La mémoire conserve le passé et permet à la conscience de se reconnaître comme la même à travers le temps. Sans mémoire, pas d'identité personnelle : la conscience périt et renaît à chaque instant, sans continuité. La mémoire est donc la condition de l'identité personnelle. Cette conception de la conscience comme fondement de l'identité est essentielle dans la philosophie bergsonienne de la durée."
		},

		// Question n°40
{
	question: "Question n°40 : Pourquoi Bergson affirme-t-il que la conscience est un pont jeté entre le passé et l'avenir ?",
	answers: [
			"Parce que la conscience relie le passé et l'avenir dans une continuité vivante",
			"Parce que la conscience sépare le passé et l'avenir",
			"Parce que la conscience est un objet"
			],
		correct: 2,
		explanation: "Bergson affirme que la conscience est un pont jeté entre le passé et l'avenir parce que la conscience relie le passé et l'avenir dans une continuité vivante. La métaphore du pont exprime la fonction médiatrice de la conscience : elle unit ce qui a été et ce qui sera. La conscience n'est ni purement passé ni purement avenir : elle est le présent vivant qui retient le passé et anticipe l'avenir. Cette conception de la conscience comme pont est caractéristique de la pensée bergsonienne : la conscience est durée, c'est-à-dire continuité et interpénétration du passé et de l'avenir dans le présent."
		},

		// Question n°41
{
	question: "Question n°41 : Comment Bergson conçoit-il la relation entre conscience et liberté ?",
	answers: [
			"La conscience est déterminée",
			"La conscience est libre dans son mouvement même de mémoire et d'anticipation",
			"La conscience n'a pas de rapport avec la liberté"
			],
		correct: 2,
		explanation: "Bien que Bergson ne parle pas explicitement de liberté dans ce texte, sa conception de la conscience comme mémoire et anticipation implique une certaine forme de liberté. La conscience n'est pas simplement déterminée par le passé : elle anticipe l'avenir, elle crée du nouveau. La durée bergsonienne est création continue. La conscience, en tant que durée, est le lieu de l'innovation et de la liberté. Cette conception de la conscience comme liberté créatrice est développée par Bergson dans d'autres œuvres, notamment L'Évolution créatrice. La conscience n'est pas un simple reflet du passé : elle est invention et création."
		},

		// Question n°42
{
	question: "Question n°42 : Quel est le sens de l'expression « conservation et accumulation du passé » ?",
	answers: [
			"Le passé est conservé et s'accumule dans le présent",
			"Le passé est perdu",
			"Le passé est inutile"
			],
		correct: 1,
		explanation: "L'expression « conservation et accumulation du passé » signifie que le passé est conservé et s'accumule dans le présent. Cette formule définit la mémoire selon Bergson. La mémoire n'est pas un simple rappel : elle est la présence agissante de tout le passé dans le présent. Chaque moment de conscience contient tout le passé qui s'y est accumulé. Cette conception de la mémoire comme accumulation est essentielle dans la philosophie bergsonienne : le passé ne est pas perdu, il s'incorpore au présent et le constitue. La conscience est cette accumulation vivante du passé."
		},

		// Question n°43
{
	question: "Question n°43 : Comment Bergson caractérise-t-il le mouvement de la conscience ?",
	answers: [
			"Comme un mouvement circulaire",
			"Comme un mouvement ininterrompu entre passé et avenir",
			"Comme un mouvement immobile"
			],
		correct: 2,
		explanation: "Bergson caractérise le mouvement de la conscience comme un mouvement ininterrompu entre passé et avenir. La conscience est un flux, une durée. Elle ne est pas statique : elle conserve le passé et anticipe l'avenir dans un mouvement continu. Bergson parle de « cette traction ininterrompue, qui nous fait avancer sur la route du temps ». La conscience est ce mouvement même : elle est le temps vécu dans son écoulement continu. Cette conception dynamique de la conscience est caractéristique de la philosophie bergsonienne."
		},

		// Question n°44
{
	question: "Question n°44 : Pourquoi la conscience est-elle essentiellement temporelle selon Bergson ?",
	answers: [
			"Parce qu'elle est dans le temps",
			"Parce qu'elle est constituée par la mémoire et l'anticipation, qui sont des modes temporels",
			"Parce qu'elle est éternelle"
			],
		correct: 2,
		explanation: "La conscience est essentiellement temporelle selon Bergson parce qu'elle est constituée par la mémoire et l'anticipation, qui sont des modes temporels. La conscience n'est pas une substance intemporelle qui serait dans le temps comme dans un contenant : elle est le temps vécu lui-même. Elle est faite de mémoire (conservation du passé) et d'anticipation (projection vers l'avenir). Ces deux dimensions sont temporelles : elles concernent le passé et l'avenir. La conscience est donc le temps vécu dans son unité et sa continuité. Cette conception de la conscience comme temporalité constitutive est au cœur de la philosophie bergsonienne."
		},

		// Question n°45
{
	question: "Question n°45 : Comment Bergson définit-il le présent dans sa relation au passé et à l'avenir ?",
	answers: [
			"Comme un instant isolé",
			"Comme le lieu de jonction entre passé et avenir",
			"Comme une illusion"
			],
		correct: 2,
		explanation: "Bergson définit le présent dans sa relation au passé et à l'avenir comme le lieu de jonction entre passé et avenir. Le présent de la conscience n'est pas un instant ponctuel isolé : il est gros du passé qu'il conserve et de l'avenir qu'il anticipe. Il est le point de rencontre entre ce qui a été et ce qui sera. Cette conception du présent comme lieu de jonction est caractéristique de la philosophie bergsonienne de la durée. Le présent vivant a une épaisseur, une durée, qui lui vient de la mémoire et de l'anticipation."
		},

		// Question n°46
{
	question: "Question n°46 : Quel est le rapport entre conscience et création selon Bergson ?",
	answers: [
			"La conscience est créatrice",
			"La conscience est répétitive",
			"La conscience est passive"
			],
		correct: 1,
		explanation: "Bien que Bergson ne développe pas explicitement cette idée dans ce texte, sa conception de la conscience comme mémoire et anticipation implique une dimension créatrice. La conscience ne se contente pas de répéter le passé : elle anticipe l'avenir et crée du nouveau. La durée bergsonienne est création continue. La conscience, en tant que durée, est le lieu de l'innovation et de la création. Cette conception de la conscience comme création est développée par Bergson dans d'autres œuvres, notamment L'Évolution créatrice. La conscience n'est pas un simple reflet du passé : elle est invention et création."
		},

		// Question n°47
{
	question: "Question n°47 : Comment Bergson conçoit-il l'unité de la conscience ?",
	answers: [
			"Comme une unité statique",
			"Comme une unité dynamique fondée sur la mémoire et l'anticipation",
			"Comme une unité impossible"
			],
		correct: 2,
		explanation: "Bergson conçoit l'unité de la conscience comme une unité dynamique fondée sur la mémoire et l'anticipation. La conscience n'est pas une unité statique, une substance immuable : elle est une unité vivante, en mouvement, qui se fait par la conservation du passé et l'anticipation de l'avenir. Cette unité est celle de la durée : elle est continuité et interpénétration. La conscience est une unité dynamique parce qu'elle est temporelle : elle unit le passé et l'avenir dans un présent vivant. Cette conception de l'unité de la conscience est caractéristique de la philosophie bergsonienne."
		},

		// Question n°48
{
	question: "Question n°48 : Pourquoi Bergson affirme-t-il que la conscience est un trait d'union entre ce qui a été et ce qui sera ?",
	answers: [
			"Parce qu'elle unit le passé et l'avenir",
			"Parce qu'elle sépare le passé et l'avenir",
			"Parce qu'elle ignore le passé et l'avenir"
			],
		correct: 2,
		explanation: "Bergson affirme que la conscience est un trait d'union entre ce qui a été et ce qui sera parce qu'elle unit le passé et l'avenir. La conscience est le lien vivant entre le passé qu'elle conserve et l'avenir qu'elle anticipe. Elle n'est ni purement passé ni purement avenir : elle est le présent qui les unit. Cette conception de la conscience comme trait d'union est caractéristique de la pensée bergsonienne. La conscience est durée, c'est-à-dire continuité et interpénétration du passé et de l'avenir dans le présent. Elle est ce qui fait tenir ensemble le temps dans une unité vivante."
		},

		// Question n°49
{
	question: "Question n°49 : Comment Bergson définit-il la conscience dans sa dimension relationnelle ?",
	answers: [
			"Comme isolée",
			"Comme un pont, un trait d'union entre passé et avenir",
			"Comme séparée"
			],
		correct: 2,
		explanation: "Bergson définit la conscience dans sa dimension relationnelle comme un pont, un trait d'union entre passé et avenir. La conscience n'est pas une substance isolée : elle est relation, lien, médiation. Elle unit ce qui a été et ce qui sera. Cette conception relationnelle de la conscience est caractéristique de la philosophie bergsonienne : la conscience est durée, c'est-à-dire continuité et interpénétration. Elle n'existe que dans et par sa relation au passé et à l'avenir. La conscience est le lien vivant du temps."
		},

		// Question n°50
{
	question: "Question n°50 : Quelle est l'importance de ce texte dans l'histoire de la philosophie ?",
	answers: [
			"C'est un texte mineur",
			"C'est un texte majeur qui définit la conscience comme temporalité vivante, unité de mémoire et d'anticipation",
			"C'est un texte purement littéraire"
			],
		correct: 2,
		explanation: "Ce texte de L'énergie spirituelle est majeur car il définit la conscience comme temporalité vivante, unité de mémoire et d'anticipation. Bergson y synthétise sa conception de la conscience : elle est mémoire (conservation du passé) et anticipation (projection vers l'avenir), un trait d'union entre ce qui a été et ce qui sera. Cette conception de la conscience comme durée est au cœur de la philosophie bergsonienne et a profondément influencé la philosophie du XXe siècle, notamment la phénoménologie et l'existentialisme. Ce texte est l'un des textes classiques sur la conscience et la temporalité."
		}
];