// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Bachelard";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
		texte: `« [1] La science, dans son besoin d'achèvement comme dans son principe, s'oppose absolument à l'opinion. [2] S'il lui arrive, sur un point particulier, de légitimer l'opinion, c'est pour d'autres raisons que celles qui fondent l'opinion ; de sorte que l'opinion a, en droit, toujours tort. [3] L'opinion pense mal ; elle ne pense pas : elle traduit des besoins en connaissances. [4] En désignant les objets par leur utilité, elle s'interdit de les connaître. [5] On ne peut rien fonder sur l'opinion : il faut d'abord la détruire. [6] Elle est le premier obstacle à surmonter.
[7] Il ne suffirait pas, par exemple, de la rectifier sur des points particuliers, en maintenant, comme une sorte de morale provisoire, une connaissance vulgaire provisoire. [8] L'esprit scientifique nous interdit d'avoir une opinion sur des questions que nous ne comprenons pas, sur des questions que nous ne savons pas formuler clairement. [9] Avant tout, il faut savoir poser des problèmes. [10] Et quoi qu'on dise, dans la vie scientifique, les problèmes ne se posent pas d'eux-mêmes. [11] C'est précisément ce sens du problème qui donne la marque du véritable esprit scientifique. [12] Pour un esprit scientifique, toute connaissance est une réponse à une question. [13] S'il n'y a pas eu de question, il ne peut y avoir connaissance scientifique. [14] Rien ne va de soi. [15] Rien n'est donné. Tout est construit. »`,

		source: "BACHELARD, La formation de l'esprit scientifique, I, §1, (1938) Paris, Librairie philosophique J. Vrin, p.14"
};

// ============================================
// QUESTIONS DU QUIZ (50 questions)
// ============================================

const questions = [
		// Question n°1
		{
				question: "Question n°1 : Comment Bachelard caractérise-t-il la relation entre science et opinion ?",
				answers: [
						"Réponse : la science prolonge et perfectionne l'opinion",
						"Réponse : la science s'oppose absolument à l'opinion",
						"Réponse : la science et l'opinion sont complémentaires"
				],
				correct: 2,
				explanation: "Bachelard affirme dès la première phrase : « La science, dans son besoin d'achèvement comme dans son principe, s'oppose absolument à l'opinion. » Cette opposition radicale est fondamentale pour comprendre son épistémologie, car elle établit une rupture nécessaire entre le savoir scientifique et le sens commun. Contrairement aux conceptions continuistes, Bachelard insiste sur la discontinuité épistémologique qui sépare radicalement la pensée scientifique de la pensée préscientifique."
		},

		// Question n°2
		{
				question: "Question n°2 : Que signifie « l'opinion a, en droit, toujours tort » ?",
				answers: [
						"Réponse : l'opinion est toujours empiriquement fausse",
						"Réponse : même quand elle dit vrai, c'est pour de mauvaises raisons",
						"Réponse : l'opinion ne peut jamais être exprimée clairement"
				],
				correct: 2,
				explanation: "Bachelard explique que même si la science légitime parfois l'opinion, c'est « pour d'autres raisons que celles qui fondent l'opinion ». Cela signifie que la vérité accidentelle de l'opinion ne la rend pas valide sur le plan épistémologique, car elle reste fondée sur des préjugés et non sur une méthode rationnelle. Même quand elle aboutit à des conclusions correctes, l'opinion procède par des voies erronées et non scientifiques, ce qui la discrédite en tant que démarche cognitive."
		},

		// Question n°3
		{
				question: "Question n°3 : Pourquoi l'opinion « pense mal » selon Bachelard ?",
				answers: [
						"Réponse : parce qu'elle utilise un langage imprécis",
						"Réponse : parce qu'elle traduit des besoins en connaissances",
						"Réponse : parce qu'elle ignore les traditions scientifiques"
				],
				correct: 2,
				explanation: "Il écrit : « L'opinion pense mal ; elle ne pense pas : elle traduit des besoins en connaissances. » L'opinion n'est pas une pensée authentique mais une rationalisation de désirs et d'intérêts pratiques. Elle substitue la satisfaction des besoins à la recherche désintéressée de la vérité, transformant ainsi des préférences subjectives en prétendues connaissances objectives, ce qui constitue une méconnaissance fondamentale de la nature même de la connaissance."
		},

		// Question n°4
		{
				question: "Question n°4 : Comment l'opinion s'interdit-elle de connaître les objets ?",
				answers: [
						"Réponse : en les désignant par leur utilité",
						"Réponse : en refusant de les observer",
						"Réponse : en les réduisant à des concepts abstraits"
				],
				correct: 1,
				explanation: "Bachelard précise : « En désignant les objets par leur utilité, elle s'interdit de les connaître. » En réduisant les choses à leur fonction pratique, l'opinion empêche toute compréhension objective de leur nature et de leurs propriétés intrinsèques. Cette approche utilitaire et anthropocentrique bloque l'accès aux propriétés essentielles des objets scientifiques, qui doivent être étudiés pour eux-mêmes et non en fonction de leur usage potentiel."
		},

		// Question n°5
		{
				question: "Question n°5 : Quelle attitude faut-il adopter face à l'opinion selon Bachelard ?",
				answers: [
						"Réponse : la corriger progressivement",
						"Réponse : la détruire d'abord",
						"Réponse : l'utiliser comme point de départ"
				],
				correct: 2,
				explanation: "Il affirme catégoriquement : « On ne peut rien fonder sur l'opinion : il faut d'abord la détruire. » Cette destruction est nécessaire car l'opinion constitue un obstacle épistémologique majeur qui empêche l'émergence de la pensée scientifique authentique. Il s'agit d'une rupture radicale et non d'une simple correction ou amélioration, car l'opinion n'est pas une connaissance imparfaite mais une anti-connaissance qui obéit à une logique fondamentalement différente de celle de la science."
		},

		// Question n°6
		{
				question: "Question n°6 : Que représente l'opinion dans le processus scientifique ?",
				answers: [
						"Réponse : un matériau à transformer",
						"Réponse : le premier obstacle à surmonter",
						"Réponse : une intuition à vérifier"
				],
				correct: 2,
				explanation: "Bachelard déclare : « Elle est le premier obstacle à surmonter. » L'opinion n'est pas le point de départ de la science mais ce qui doit être éliminé pour que la pensée scientifique puisse émerger. C'est un obstacle épistémologique qui bloque l'accès à la connaissance véritable, un écran mental qui déforme la réalité et empêche de la voir telle qu'elle est, indépendamment de nos intérêts et de nos préjugés."
		},

		// Question n°7
		{
				question: "Question n°7 : Pourquoi est-il insuffisant de rectifier l'opinion sur des points particuliers ?",
				answers: [
						"Réponse : parce que l'opinion serait alors une connaissance vulgaire provisoire",
						"Réponse : parce que cela prendrait trop de temps",
						"Réponse : parce que l'opinion est fondamentalement vraie"
				],
				correct: 1,
				explanation: "Il explique qu'il ne faut pas maintenir « une connaissance vulgaire provisoire » comme une morale provisoire. Une approche fragmentaire et corrective laisserait intact le fondement même de l'opinion et ses présupposés implicites. Seule une rupture totale avec la mentalité préscientifique permet l'accès à l'esprit scientifique, car on ne peut construire un édifice rationnel sur des bases irrationnelles, même partiellement corrigées."
		},

		// Question n°8
		{
				question: "Question n°8 : Que nous interdit l'esprit scientifique selon Bachelard ?",
				answers: [
						"Réponse : d'avoir des intuitions",
						"Réponse : d'avoir une opinion sur des questions mal comprises",
						"Réponse : d'utiliser l'expérience sensible"
				],
				correct: 2,
				explanation: "« L'esprit scientifique nous interdit d'avoir une opinion sur des questions que nous ne comprenons pas, sur des questions que nous ne savons pas formuler clairement. » L'esprit scientifique exige l'humilité intellectuelle et la rigueur méthodologique : on doit s'abstenir de juger ce qu'on ne maîtrise pas et ce qu'on ne peut formuler précisément. Cette discipline rigoureuse contraste avec la facilité avec laquelle l'opinion se prononce sur tout sans réelle compétence ni méthode."
		},

		// Question n°9
		{
				question: "Question n°9 : Quelle est la première chose à faire selon Bachelard ?",
				answers: [
						"Réponse : observer attentivement les phénomènes",
						"Réponse : savoir poser des problèmes",
						"Réponse : consulter les autorités scientifiques"
				],
				correct: 2,
				explanation: "Il affirme : « Avant tout, il faut savoir poser des problèmes. » La problématisation précède et conditionne toute recherche scientifique authentique, car c'est le questionnement qui oriente et structure l'investigation. Sans questionnement rigoureux et bien formulé, il n'y a que collection de faits ou expression d'opinions, mais pas de démarche scientifique véritable, car la science commence précisément là où l'on cesse d'accepter les évidences pour les interroger méthodiquement."
		},

		// Question n°10
		{
				question: "Question n°10 : Comment les problèmes se posent-ils dans la vie scientifique ?",
				answers: [
						"Réponse : ils se posent d'eux-mêmes naturellement",
						"Réponse : ils ne se posent pas d'eux-mêmes",
						"Réponse : ils sont imposés par la société"
				],
				correct: 2,
				explanation: "Bachelard souligne : « dans la vie scientifique, les problèmes ne se posent pas d'eux-mêmes. » Contrairement à une vision passive de la recherche où les problèmes surgiraient spontanément de l'observation, le scientifique doit activement construire et formuler ses problèmes à partir d'un cadre théorique et conceptuel. Cette construction problématique est un travail intellectuel exigeant qui distingue la science de la simple curiosité et qui suppose une rupture avec l'attitude naturelle qui accepte les apparences comme allant de soi."
		},

		// Question n°11
		{
				question: "Question n°11 : Qu'est-ce qui marque le véritable esprit scientifique ?",
				answers: [
						"Réponse : la capacité à accumuler des faits",
						"Réponse : le sens du problème",
						"Réponse : la rigueur mathématique"
				],
				correct: 2,
				explanation: "« C'est précisément ce sens du problème qui donne la marque du véritable esprit scientifique. » Ce n'est pas l'érudition ou la technicité qui définit l'esprit scientifique, mais la capacité à identifier, formuler et problématiser des questions pertinentes et fécondes. Le sens problématique oriente et organise toute la démarche de recherche, car c'est lui qui transforme une simple curiosité en investigation méthodique et qui permet de passer de l'observation passive à la recherche active."
		},

		// Question n°12
		{
				question: "Question n°12 : Comment Bachelard définit-il toute connaissance pour un esprit scientifique ?",
				answers: [
						"Réponse : une accumulation de faits vérifiés",
						"Réponse : une réponse à une question",
						"Réponse : une intuition confirmée par l'expérience"
				],
				correct: 2,
				explanation: "« Pour un esprit scientifique, toute connaissance est une réponse à une question. » Cette définition souligne le caractère dialogique et problématique de la science, qui ne se contente pas d'enregistrer des faits mais les interprète à la lumière de questions précises. La connaissance scientifique n'est pas un stock d'informations mais le résultat d'un processus actif de questionnement et d'investigation méthodique qui confère un sens aux observations et leur donne une cohérence théorique."
		},

		// Question n°13
		{
				question: "Question n°13 : Quelle condition est nécessaire pour qu'il y ait connaissance scientifique ?",
				answers: [
						"Réponse : qu'il y ait eu une question préalable",
						"Réponse : qu'il y ait des instruments de mesure",
						"Réponse : qu'il y ait un consensus des experts"
				],
				correct: 1,
				explanation: "« S'il n'y a pas eu de question, il ne peut y avoir connaissance scientifique. » La question est la matrice et la condition de possibilité de toute connaissance scientifique authentique, car c'est elle qui donne son orientation et son sens à la recherche. Sans interrogation préalable et bien formulée, on reste dans le registre de l'opinion ou de la simple constatation empirique, mais pas dans celui de la science proprement dite qui exige une démarche méthodique guidée par un questionnement précis."
		},

		// Question n°14
		{
				question: "Question n°14 : Que signifie « Rien ne va de soi » dans ce contexte ?",
				answers: [
						"Réponse : tout doit être remis en question",
						"Réponse : rien n'est évident ou immédiatement compréhensible",
						"Réponse : la science progresse difficilement"
				],
				correct: 2,
				explanation: "Cette formule lapidaire souligne que dans l'esprit scientifique, rien n'est accepté sans examen critique préalable ni considéré comme évident par nature. Elle exprime le refus de toute évidence immédiate et la nécessité d'une approche méthodique et soupçonneuse à l'égard des apparences. Ce principe s'oppose directement à l'attitude naturelle de l'opinion qui accepte les choses comme allant de soi et qui ne questionne pas ses propres présupposés."
		},

		// Question n°15
		{
				question: "Question n°15 : Quelle est la conception de la connaissance selon la dernière phrase ?",
				answers: [
						"Réponse : la connaissance est découverte dans la nature",
						"Réponse : la connaissance est révélée",
						"Réponse : tout est construit"
				],
				correct: 3,
				explanation: "La conclusion du texte est sans équivoque : « Rien n'est donné. Tout est construit. » Cette affirmation résume l'épistémologie constructiviste de Bachelard, qui rejette à la fois l'empirisme naïf et le rationalisme aprioriste. La science ne découvre pas des vérités préexistantes dans la nature mais construit activement ses objets et ses connaissances par un travail théorique et expérimental qui transforme radicalement les données immédiates de l'expérience."
		},

		// Question n°16
		{
				question: "Question n°16 : Quel est le statut de l'utilité dans la connaissance scientifique selon Bachelard ?",
				answers: [
						"Réponse : c'est un critère essentiel de vérité",
						"Réponse : c'est un obstacle à la connaissance véritable",
						"Réponse : c'est un moteur de la recherche"
				],
				correct: 2,
				explanation: "En désignant les objets par leur utilité, l'opinion « s'interdit de les connaître » véritablement selon Bachelard. Pour lui, l'approche utilitaire est incompatible avec la démarche scientifique car elle réduit les objets à leur fonction pratique plutôt que de les étudier pour eux-mêmes dans leur spécificité et leur complexité. La science requiert une attitude désintéressée qui cherche à comprendre les phénomènes indépendamment de leur usage possible, car la connaissance scientifique vise la vérité et non l'utilité."
		},

		// Question n°17
		{
				question: "Question n°17 : Quelle est la différence fondamentale entre opinion et science selon ce texte ?",
				answers: [
						"Réponse : l'opinion est subjective, la science objective",
						"Réponse : l'opinion répond à des besoins, la science à des problèmes",
						"Réponse : l'opinion est populaire, la science élitiste"
				],
				correct: 2,
				explanation: "L'opinion « traduit des besoins en connaissances » alors que la science construit des connaissances à partir de problèmes clairement posés et méthodiquement investigués. Cette distinction est essentielle : l'opinion est déterminée par des intérêts pratiques immédiats tandis que la science naît d'un questionnement théorique et méthodique qui cherche à comprendre les phénomènes pour eux-mêmes. L'opinion cherche à satisfaire, la science cherche à comprendre, ce qui les oppose radicalement dans leur finalité et leur méthode."
		},

		// Question n°18
		{
				question: "Question n°18 : Pourquoi Bachelard parle-t-il de « destruction » de l'opinion ?",
				answers: [
						"Réponse : parce que l'opinion est radicalement incompatible avec la démarche scientifique",
						"Réponse : parce que l'opinion est dangereuse pour la société",
						"Réponse : parce que l'opinion empêche la diffusion de la science"
				],
				correct: 1,
				explanation: "La destruction est nécessaire car « on ne peut rien fonder sur l'opinion » et elle constitue « le premier obstacle à surmonter » dans la formation de l'esprit scientifique. Il ne s'agit pas d'une métaphore violente mais d'une exigence épistémologique fondamentale : l'opinion doit être radicalement mise à distance et critiquée pour laisser place à la pensée scientifique, car leurs logiques sont tellement différentes qu'elles ne peuvent coexister. Cette destruction est un préalable à toute construction scientifique authentique."
		},

		// Question n°19
		{
				question: "Question n°19 : Quel est le rôle de la formulation claire dans l'esprit scientifique ?",
				answers: [
						"Réponse : elle est facultative mais souhaitable",
						"Réponse : elle est une condition préalable à toute investigation",
						"Réponse : elle vient après la découverte"
				],
				correct: 2,
				explanation: "Bachelard interdit d'avoir une opinion « sur des questions que nous ne savons pas formuler clairement ». La clarté de la formulation n'est pas un luxe stylistique mais une exigence méthodologique fondamentale qui permet de préciser l'objet de la recherche et les moyens de l'investiguer. Un problème mal formulé ou ambigu ne peut donner lieu à une investigation scientifique rigoureuse car il ne permet pas de déterminer les critères de validation des hypothèses ni les méthodes appropriées pour le résoudre."
		},

		// Question n°20
		{
				question: "Question n°20 : À quelle tradition épistémologique Bachelard se rattache-t-il principalement ?",
				answers: [
						"Réponse : à l'empirisme classique",
						"Réponse : au rationalisme constructiviste",
						"Réponse : au positivisme logique"
				],
				correct: 2,
				explanation: "L'affirmation « Rien n'est donné. Tout est construit » caractérise le rationalisme constructiviste de Bachelard, qui insiste sur le rôle actif et créateur de la raison dans la formation des connaissances scientifiques. Contrairement à l'empirisme qui voit la connaissance comme une découverte passive de données sensibles préexistantes, Bachelard montre comment la science transforme radicalement les données de l'expérience à travers des concepts, des instruments et des théories qui construisent activement leur objet d'étude."
		},

		// Question n°21
		{
				question: "Question n°21 : Comment Bachelard qualifie-t-il la connaissance vulgaire provisoire ?",
				answers: [
						"Réponse : comme une étape nécessaire vers la science",
						"Réponse : comme une morale provisoire à éviter",
						"Réponse : comme le fondement de toute recherche"
				],
				correct: 2,
				explanation: "Bachelard rejette catégoriquement l'idée de maintenir « une connaissance vulgaire provisoire » comme une sorte de morale provisoire en attendant mieux. Pour lui, cette attitude compromettrait irrémédiablement la rigueur scientifique en maintenant des éléments d'opinion non critiques qui contamineraient la démarche scientifique. La véritable démarche scientifique exige une rupture complète et immédiate avec toute forme de pensée préscientifique, sans compromis ni demi-mesure."
		},

		// Question n°22
		{
				question: "Question n°22 : Que représente la métaphore de la « construction » chez Bachelard ?",
				answers: [
						"Réponse : l'édification progressive de théories scientifiques",
						"Réponse : la création artificielle de la réalité",
						"Réponse : l'assemblage mécanique des connaissances"
				],
				correct: 1,
				explanation: "La métaphore de la construction souligne le caractère actif et créateur de la démarche scientifique, qui ne se contente pas de découvrir des vérités préexistantes mais élabore activement des concepts, des théories et des modèles. Pour Bachelard, la science construit ses objets en transformant les données immédiates de l'expérience à travers des instruments, des formalismes mathématiques et des cadres théoriques. Cette construction suppose un travail théorique et expérimental permanent de réélaboration et de perfectionnement des connaissances."
		},

		// Question n°23
		{
				question: "Question n°23 : Comment Bachelard conçoit-il le progrès scientifique ?",
				answers: [
						"Réponse : comme une accumulation linéaire de connaissances",
						"Réponse : comme une série de ruptures épistémologiques",
						"Réponse : comme un retour aux sources de l'opinion"
				],
				correct: 2,
				explanation: "Bachelard développe la théorie des « ruptures épistémologiques » pour penser le progrès scientifique non comme une accumulation continue mais comme une série de discontinuités radicales. Ces ruptures marquent des changements profonds dans les concepts, les méthodes et les paradigmes scientifiques, établissant de nouveaux cadres de pensée qui rendent obsolètes et incompréhensibles les conceptions antérieures. Ce modèle s'oppose à la vision cumulative et continuiste du progrès scientifique qui dominait au XIXe siècle."
		},

		// Question n°24
		{
				question: "Question n°24 : Quel est le rôle des obstacles épistémologiques selon Bachelard ?",
				answers: [
						"Réponse : ils sont des erreurs à éviter à tout prix",
						"Réponse : ils sont des étapes nécessaires dans l'apprentissage",
						"Réponse : ils sont des résistances intérieures à la pensée scientifique"
				],
				correct: 3,
				explanation: "Les obstacles épistémologiques sont pour Bachelard des résistances intérieures à la pensée scientifique, souvent inconscientes et profondément enracinées dans nos habitudes mentales, qui empêchent le progrès des connaissances. Ils ne sont pas de simples erreurs accidentelles mais des structures mentales tenaces (comme l'utilitarisme, le substantialisme, ou le réalisme naïf) qui doivent être identifiées, analysées et surmontées pour que la science puisse avancer. Ces obstacles expliquent pourquoi le progrès scientifique est si difficile et nécessite une véritable conversion intellectuelle."
		},

		// Question n°25
		{
				question: "Question n°25 : Comment Bachelard définit-il l'« esprit scientifique » ?",
				answers: [
						"Réponse : comme une attitude de doute systématique",
						"Réponse : comme une capacité à problématiser le réel",
						"Réponse : comme une maîtrise des techniques expérimentales"
				],
				correct: 2,
				explanation: "L'esprit scientifique se caractérise essentiellement par la capacité à problématiser, c'est-à-dire à poser des questions pertinentes, précises et bien formulées qui ouvrent un champ d'investigation méthodique. Cette aptitude à problématiser précède et conditionne toute recherche authentique, car c'est elle qui transforme une simple curiosité en programme de recherche. Elle distingue la démarche scientifique de la simple curiosité ou de l'accumulation désordonnée d'observations, et elle exige une rupture avec l'attitude naturelle qui accepte les évidences."
		},

		// Question n°26
		{
				question: "Question n°26 : Que signifie « épistémologie » dans le contexte bachelardien ?",
				answers: [
						"Réponse : l'étude historique des sciences",
						"Réponse : la réflexion critique sur les conditions de la connaissance scientifique",
						"Réponse : l'enseignement des méthodes scientifiques"
				],
				correct: 2,
				explanation: "L'épistémologie chez Bachelard est la réflexion critique sur les conditions de possibilité et les processus de la connaissance scientifique, analysant comment se forment, se transforment et se valident les savoirs scientifiques. Elle s'intéresse moins aux résultats finaux des sciences qu'à leur genèse, à leurs obstacles, à leurs méthodes et à leurs transformations historiques. Cette approche cherche à comprendre comment la pensée scientifique se forme et évolue, quelles sont ses ruptures et ses continuités, et quels sont les obstacles qu'elle doit surmonter pour progresser."
		},

		// Question n°27
		{
				question: "Question n°27 : Comment Bachelard conçoit-il la relation entre théorie et expérience ?",
				answers: [
						"Réponse : l'expérience précède toujours la théorie",
						"Réponse : la théorie et l'expérience s'articulent dialectiquement",
						"Réponse : la théorie prime absolument sur l'expérience"
				],
				correct: 2,
				explanation: "Bachelard rejette aussi bien l'empirisme pur (pour qui l'expérience précède et fonde la théorie) que le rationalisme dogmatique (pour qui la théorie prime absolument sur l'expérience). Pour lui, théorie et expérience entretiennent une relation dialectique et circulaire : la théorie guide et oriente l'expérience en lui posant des questions précises, tandis que l'expérience, à son tour, peut confirmer, infirmer ou modifier la théorie. Cette interaction permanente et féconde caractérise la dynamique de la recherche scientifique contemporaine et constitue ce qu'il appelle le « rationalisme appliqué »."
		},

		// Question n°28
		{
				question: "Question n°28 : Quel est le statut de l'erreur dans la pensée de Bachelard ?",
				answers: [
						"Réponse : l'erreur est toujours négative et à éviter",
						"Réponse : l'erreur peut être féconde dans le processus de recherche",
						"Réponse : l'erreur n'existe pas en science"
				],
				correct: 2,
				explanation: "Pour Bachelard, l'erreur n'est pas simplement un échec à éviter mais peut être féconde et instructive dans le processus de recherche, car elle révèle souvent des obstacles épistémologiques profonds ou des présupposés implicites qui, une fois identifiés et analysés, permettent d'avancer dans la connaissance. La rectification des erreurs est ainsi un moteur essentiel du progrès scientifique plutôt qu'une simple correction négative, car c'est en comprenant pourquoi on s'est trompé que l'on peut construire une connaissance plus solide et mieux fondée."
		},

		// Question n°29
		{
				question: "Question n°29 : Comment Bachelard caractérise-t-il la connaissance commune ?",
				answers: [
						"Réponse : comme une connaissance immédiate et naturelle",
						"Réponse : comme une connaissance imprécise mais utile",
						"Réponse : comme une connaissance empêtrée dans les préjugés"
				],
				correct: 3,
				explanation: "La connaissance commune est pour Bachelard une connaissance empêtrée dans les préjugés, les habitudes mentales non critiques, les besoins pratiques et les représentations sociales. Elle constitue un obstacle majeur à la connaissance scientifique car elle présente le monde comme allant de soi, sans recul critique ni interrogation sur ses propres présupposés. La science doit rompre radicalement avec cette attitude naturelle pour construire ses objets et ses méthodes, ce qui explique pourquoi la formation de l'esprit scientifique est si difficile et exige une véritable conversion intellectuelle."
		},

		// Question n°30
		{
				question: "Question n°30 : Que signifie « problématiser » pour Bachelard ?",
				answers: [
						"Réponse : trouver des solutions aux difficultés",
						"Réponse : rendre problématique ce qui semblait évident",
						"Réponse : compliquer inutilement les choses"
				],
				correct: 2,
				explanation: "Problématiser signifie rendre problématique ce qui dans l'opinion commune semble aller de soi et ne pas mériter d'être questionné. C'est mettre en question les évidences, interroger les présupposés implicites, formuler clairement et précisément des questions qui orientent et structurent la recherche scientifique. Cette activité intellectuelle est au cœur de l'esprit scientifique et constitue le premier pas de toute investigation rigoureuse, car c'est elle qui transforme une simple curiosité en programme de recherche méthodique et qui permet de passer de l'opinion à la science."
		},

		// Question n°31
		{
				question: "Question n°31 : Comment Bachelard conçoit-il la formation de l'esprit scientifique ?",
				answers: [
						"Réponse : comme un apprentissage technique",
						"Réponse : comme une conversion intellectuelle",
						"Réponse : comme une accumulation d'informations"
				],
				correct: 2,
				explanation: "La formation de l'esprit scientifique est pour Bachelard une véritable conversion intellectuelle qui implique une rupture radicale avec les habitudes mentales de l'opinion et du sens commun. Elle nécessite un travail sur soi pour surmonter les obstacles épistémologiques et adopter une attitude critique, problématisante et constructiviste. C'est moins une instruction technique qu'une transformation profonde de la manière de penser, qui exige de renoncer aux évidences immédiates, de développer le sens du problème, et d'accepter que la connaissance soit toujours une construction perfectible plutôt qu'une découverte définitive."
		},

		// Question n°32
		{
				question: "Question n°32 : Quel rôle joue l'imagination dans la science selon Bachelard ?",
				answers: [
						"Réponse : elle n'a aucun rôle dans la science rigoureuse",
						"Réponse : elle est essentielle pour formuler des hypothèses",
						"Réponse : elle est réservée à la poésie, pas à la science"
				],
				correct: 2,
				explanation: "Contrairement à une vision étroite et desséchée du rationalisme, Bachelard reconnaît à l'imagination un rôle important et même essentiel dans la science, particulièrement pour formuler des hypothèses audacieuses, concevoir des modèles innovants et anticiper des phénomènes non encore observés. Cependant, cette imagination scientifique doit être contrôlée par la raison, soumise à la validation expérimentale et disciplinée par la méthode. Elle est une imagination raisonnée et méthodique au service de la découverte, différente de l'imagination poétique mais tout aussi créative dans son domaine."
		},

		// Question n°33
		{
				question: "Question n°33 : Comment Bachelard analyse-t-il le passage de l'opinion à la science ?",
				answers: [
						"Réponse : comme une progression continue",
						"Réponse : comme une rupture radicale",
						"Réponse : comme une simple clarification"
				],
				correct: 2,
				explanation: "Le passage de l'opinion à la science n'est pas pour Bachelard une progression continue ou une simple clarification mais une rupture radicale et une discontinuité épistémologique. Il implique un changement de régime de pensée, une transformation profonde des concepts, des méthodes et des critères de vérité. Cette rupture est nécessaire car l'opinion et la science relèvent de logiques fondamentalement différentes et incompatibles : là où l'opinion est utilitaire, immédiate et non critique, la science est désintéressée, médiate et méthodiquement critique."
		},

		// Question n°34
		{
				question: "Question n°34 : Que signifie « rationalisme appliqué » chez Bachelard ?",
				answers: [
						"Réponse : un rationalisme qui s'applique à la pratique",
						"Réponse : un rationalisme qui intègre les apports de l'expérience",
						"Réponse : un rationalisme simplifié pour les applications techniques"
				],
				correct: 2,
				explanation: "Le « rationalisme appliqué » est la position épistémologique originale de Bachelard qui cherche à dépasser l'opposition traditionnelle et stérile entre rationalisme et empirisme. C'est un rationalisme ouvert qui reconnaît la nécessité et la fécondité de l'expérience, et un empirisme éclairé qui admet le rôle constitutif et organisateur de la raison. Cette synthèse dialectique caractérise selon lui la science moderne dans sa pratique effective, où théorie et expérience s'enrichissent mutuellement dans un mouvement continu de rectification et de perfectionnement."
		},

		// Question n°35
		{
				question: "Question n°35 : Comment Bachelard caractérise-t-il la connaissance préscientifique ?",
				answers: [
						"Réponse : comme une connaissance mythologique",
						"Réponse : comme une connaissance empirique non critiquée",
						"Réponse : comme une connaissance philosophique"
				],
				correct: 2,
				explanation: "La connaissance préscientifique est pour Bachelard une connaissance empirique non critiquée, marquée par l'immédiateté, l'utilitarisme et l'acceptation naïve des apparences. Elle accepte les phénomènes tels qu'ils se présentent spontanément à l'observation commune, sans les interroger méthodiquement ni les transformer conceptuellement. Cette attitude doit être radicalement dépassée pour accéder à la démarche scientifique authentique, qui exige précisément de rompre avec cette immédiateté et de construire ses objets à travers des concepts, des instruments et des théories."
		},

		// Question n°36
		{
				question: "Question n°36 : Quel est le rôle de la récurrence dans la méthode scientifique selon Bachelard ?",
				answers: [
						"Réponse : elle garantit la certitude des résultats",
						"Réponse : elle permet de corriger progressivement les erreurs",
						"Réponse : elle est inutile dans la science moderne"
				],
				correct: 2,
				explanation: "La récurrence, ou retour réflexif et autocritique sur les procédures, les concepts et les résultats, est essentielle dans la méthode scientifique selon Bachelard. Elle permet de corriger progressivement les erreurs, d'affiner les concepts, de perfectionner les méthodes et d'approfondir la compréhension dans un mouvement continu de rectification. Cette dimension réflexive et autocritique distingue la science de la simple accumulation d'observations ou de la répétition mécanique d'expériences, car elle suppose que la pensée scientifique est capable de se prendre elle-même pour objet et de s'améliorer indéfiniment."
		},

		// Question n°37
		{
				question: "Question n°37 : Comment Bachelard conçoit-il l'objectivité scientifique ?",
				answers: [
						"Réponse : comme une correspondance avec la réalité",
						"Réponse : comme un consensus entre experts",
						"Réponse : comme le résultat d'une construction méthodique"
				],
				correct: 3,
				explanation: "L'objectivité scientifique n'est pas pour Bachelard une simple correspondance miroir avec une réalité préexistante mais le résultat d'une construction méthodique et progressive à travers des procédures de contrôle, de validation intersubjective et de critique rationnelle. Elle s'élabore laborieusement dans le travail scientifique concret et n'est jamais donnée une fois pour toutes. Cette objectivité est donc toujours relative, perfectible et historiquement située, ce qui n'enlève rien à sa solidité mais explique pourquoi la science est un travail toujours inachevé et en devenir."
		},

		// Question n°38
		{
				question: "Question n°38 : Que signifie « nouvel esprit scientifique » chez Bachelard ?",
				answers: [
						"Réponse : l'esprit de la science du XXe siècle",
						"Réponse : une attitude révolutionnaire en science",
						"Réponse : un idéal de science encore à venir"
				],
				correct: 1,
				explanation: "Le « nouvel esprit scientifique » désigne chez Bachelard l'esprit caractéristique de la science du XXe siècle, marqué par les révolutions de la relativité, de la mécanique quantique, de la microphysique et des nouvelles mathématiques. Cet esprit se caractérise par le renoncement à l'intuition immédiate, l'acceptation de la discontinuité, la reconnaissance du rôle constructif de la théorie et l'usage systématique des formalismes mathématiques. Il représente une rupture avec l'esprit scientifique classique hérité des siècles précédents et ouvre de nouvelles perspectives épistémologiques."
		},

		// Question n°39
		{
				question: "Question n°39 : Comment Bachelard analyse-t-il les résistances à la science ?",
				answers: [
						"Réponse : comme des oppositions idéologiques",
						"Réponse : comme des obstacles psychologiques internes",
						"Réponse : comme des difficultés techniques"
				],
				correct: 2,
				explanation: "Les résistances à la science sont pour Bachelard avant tout des obstacles psychologiques internes, des habitudes mentales profondément enracinées dans notre psyché qu'il appelle « obstacles épistémologiques ». Ces obstacles (comme l'utilitarisme, le substantialisme, le réalisme naïf) empêchent d'adopter la posture critique, problématisante et constructiviste requise par la démarche scientifique. Ils doivent être identifiés, analysés et surmontés individuellement dans un travail sur soi qui est au cœur de la formation de l'esprit scientifique."
		},

		// Question n°40
		{
				question: "Question n°40 : Quel est le statut des mathématiques chez Bachelard ?",
				answers: [
						"Réponse : elles sont un langage universel de la science",
						"Réponse : elles sont un outil de construction des objets scientifiques",
						"Réponse : elles sont une science parmi d'autres"
				],
				correct: 2,
				explanation: "Les mathématiques ne sont pas pour Bachelard un simple langage descriptif ou un outil de calcul mais un instrument essentiel et constitutif de construction des objets scientifiques dans la science moderne. Elles permettent de formaliser les théories, de déduire des conséquences vérifiables, de modéliser les phénomènes et de donner une forme rigoureuse aux concepts. Leur rôle est tellement central que Bachelard parle d'une « mathématisation de la physique » qui caractérise le nouvel esprit scientifique du XXe siècle."
		},

		// Question n°41
		{
				question: "Question n°41 : Comment Bachelard conçoit-il la relation entre science et philosophie ?",
				answers: [
						"Réponse : la philosophie doit s'inspirer des sciences",
						"Réponse : la science doit remplacer la philosophie",
						"Réponse : ce sont deux domaines totalement séparés"
				],
				correct: 1,
				explanation: "Bachelard pense que la philosophie contemporaine doit nécessairement s'inspirer des sciences et intégrer leurs enseignements pour ne pas rester dans l'abstraction ou répéter des conceptions dépassées. Une philosophie coupée des sciences risque de devenir un discours creux ou de reprendre des préjugés préscientifiques. L'épistémologie devient ainsi le lieu privilégié d'un dialogue fécond entre philosophie et sciences, où la philosophie éclaire les présupposés des sciences et où les sciences nourrissent la réflexion philosophique de leurs résultats et de leurs méthodes."
		},

		// Question n°42
		{
				question: "Question n°42 : Que signifie « surrationalisme » chez Bachelard ?",
				answers: [
						"Réponse : un rationalisme qui dépasse ses propres limites",
						"Réponse : un rationalisme excessif et dogmatique",
						"Réponse : un rationalisme qui intègre l'irrationnel"
				],
				correct: 1,
				explanation: "Le « surrationalisme » est un rationalisme ouvert, dynamique et réflexif qui reconnaît ses propres limites historiques et cherche continuellement à les dépasser. Il n'est pas dogmatique mais autocritique, capable d'intégrer les apports de l'expérience et de s'enrichir des découvertes scientifiques. C'est un rationalisme en mouvement, toujours perfectible, caractéristique de la science contemporaine qui ne cesse de remettre en question ses propres concepts et méthodes. Ce surrationalisme s'oppose au rationalisme classique figé et prétendant à l'éternité."
		},

		// Question n°43
		{
				question: "Question n°43 : Comment Bachelard analyse-t-il les révolutions scientifiques ?",
				answers: [
						"Réponse : comme des changements de paradigme",
						"Réponse : comme des progrès cumulatifs",
						"Réponse : comme des retours en arrière"
				],
				correct: 1,
				explanation: "Bachelard analyse les révolutions scientifiques comme des changements de paradigme qui transforment profondément les concepts, les méthodes, les instruments et les critères de scientificité d'une discipline. Ces ruptures créent de nouveaux cadres de pensée rendant obsolètes et incompréhensibles les conceptions antérieures. Cette conception, développée dans sa théorie des « ruptures épistémologiques », anticipe et inspire celle de Thomas Kuhn sur les révolutions scientifiques. Elle s'oppose à la vision cumulative et continuiste du progrès scientifique qui dominait encore au début du XXe siècle."
		},

		// Question n°44
		{
				question: "Question n°44 : Quel est le rôle de la technique dans la science selon Bachelard ?",
				answers: [
						"Réponse : elle est accessoire et secondaire",
						"Réponse : elle est constitutive de la démarche scientifique",
						"Réponse : elle corrompt la pureté de la science"
				],
				correct: 2,
				explanation: "La technique n'est pas pour Bachelard un simple auxiliaire ou un instrument secondaire de la science mais un élément constitutif et essentiel de la démarche scientifique moderne. Les instruments techniques permettent de construire des phénomènes qui n'existent pas à l'état naturel, d'explorer des domaines inaccessibles à l'observation directe, et de produire des données qui transforment profondément la connaissance. Science et technique sont indissociablement liées dans le nouvel esprit scientifique, ce qui explique pourquoi Bachelard s'intéresse autant aux instruments et aux laboratoires qu'aux théories et aux concepts."
		},

		// Question n°45
		{
				question: "Question n°45 : Comment Bachelard caractérise-t-il la psychologie du savant ?",
				answers: [
						"Réponse : comme une psychologie de la découverte",
						"Réponse : comme une psychologie de l'erreur corrigée",
						"Réponse : comme une psychologie du génie solitaire"
				],
				correct: 2,
				explanation: "Bachelard s'intéresse moins à la psychologie de la découverte ou du génie créateur qu'à celle de l'erreur corrigée et de la rectification méthodique. Le travail scientifique est essentiellement un travail de correction, de critique, de dépassement et de perfectionnement des conceptions antérieures. La psychologie du savant est donc celle d'une pensée en mouvement, toujours capable de se remettre en question, de reconnaître ses erreurs et de les transformer en occasions de progrès. Cette psychologie de la rectification contraste avec les représentations romantiques du savant génial et inspiré."
		},

		// Question n°46
		{
				question: "Question n°46 : Quel est le statut de l'histoire des sciences chez Bachelard ?",
				answers: [
						"Réponse : elle est une source d'inspiration pour les chercheurs",
						"Réponse : elle est une leçon d'humilité montrant les erreurs passées",
						"Réponse : elle est une reconstruction rationnelle du progrès"
				],
				correct: 3,
				explanation: "L'histoire des sciences n'est pas pour Bachelard une simple chronologie des découvertes ou un catalogue d'erreurs dépassées mais une reconstruction rationnelle qui montre comment les concepts se sont formés, transformés et perfectionnés à travers les ruptures épistémologiques. Cette histoire « récurrente » éclaire le présent scientifique en révélant les obstacles surmontés, les continuités et les discontinuités, et la dynamique de la pensée scientifique. Elle est essentielle pour comprendre la genèse et l'évolution des connaissances, et pour former l'esprit scientifique à une vision dynamique et historique de la science."
		},

		// Question n°47
		{
				question: "Question n°47 : Comment Bachelard conçoit-il l'enseignement des sciences ?",
				answers: [
						"Réponse : comme une transmission de connaissances établies",
						"Réponse : comme une formation à l'esprit scientifique",
						"Réponse : comme un apprentissage de techniques"
				],
				correct: 2,
				explanation: "L'enseignement des sciences doit être avant tout une formation à l'esprit scientifique plutôt qu'une simple transmission de connaissances toutes faites ou un apprentissage de techniques. Il doit apprendre à problématiser, à critiquer, à construire des concepts, à surmonter les obstacles épistémologiques. Cet enseignement est difficile car il exige une rupture avec les habitudes mentales de l'opinion commune et une véritable conversion intellectuelle. C'est pourquoi Bachelard insiste sur la nécessité d'une pédagogie active qui mette l'élève en situation de recherche plutôt que de lui faire ingurgiter des résultats."
		},

		// Question n°48
		{
				question: "Question n°48 : Que signifie « philosophie du non » chez Bachelard ?",
				answers: [
						"Réponse : une philosophie négative et sceptique",
						"Réponse : une philosophie qui refuse les évidences",
						"Réponse : une philosophie qui nie la réalité"
				],
				correct: 2,
				explanation: "La « philosophie du non » est une philosophie essentiellement critique et problématisante qui refuse les évidences immédiates, les certitudes non critiquées et les affirmations dogmatiques. Ce « non » n'est pas un refus stérile ou un scepticisme négatif mais une mise en question constructive qui ouvre la voie à de nouveaux possibles théoriques et pratiques. Il exprime l'exigence scientifique fondamentale de ne rien accepter comme allant de soi et de tout soumettre à l'examen critique et méthodique. Cette philosophie du non est au cœur de l'esprit scientifique et de l'épistémologie bachelardienne."
		},

		// Question n°49
		{
				question: "Question n°49 : Comment Bachelard analyse-t-il le rapport entre science et culture ?",
				answers: [
						"Réponse : la science doit être indépendante de la culture",
						"Réponse : la science transforme profondément la culture",
						"Réponse : la culture limite le développement scientifique"
				],
				correct: 2,
				explanation: "La science ne se développe pas en dehors de la culture mais la transforme profondément en introduisant de nouvelles manières de penser, de voir le monde et de se représenter la réalité. En modifiant les représentations culturelles et les mentalités, la science exerce une influence décisive sur l'ensemble de la culture. Réciproquement, la culture peut soit faciliter soit entraver l'émergence et le développement de l'esprit scientifique selon ses valeurs, ses habitudes mentales et ses représentations dominantes. C'est pourquoi la formation de l'esprit scientifique est aussi un enjeu culturel majeur."
		},

		// Question n°50
		{
				question: "Question n°50 : Quelle est l'influence durable de l'épistémologie bachelardienne ?",
				answers: [
						"Réponse : elle a inspiré l'épistémologie historique française",
						"Réponse : elle est aujourd'hui totalement dépassée",
						"Réponse : elle n'a eu qu'une influence marginale"
				],
				correct: 1,
				explanation: "L'épistémologie de Bachelard a profondément influencé et structuré l'épistémologie historique française du XXe siècle, notamment à travers des penseurs comme Georges Canguilhem, Michel Foucault, Louis Althusser et les chercheurs du Centre d'Histoire des Sciences et des Techniques. Ses concepts de rupture épistémologique, d'obstacle épistémologique, de nouvel esprit scientifique et de construction des objets scientifiques continuent d'être discutés, développés et actualisés dans la réflexion contemporaine sur les sciences. Son œuvre reste une référence majeure pour qui s'intéresse à l'histoire et à la philosophie des sciences."
		}
];