// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de PLATON";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
		texte: `« [1] Socrate : Voyons, essaye de dire ce que je te demande : qu'est-ce que le courage ? [2] Lachès : Par Zeus, Socrate, ce n'est pas difficile à dire. [3] Quand un homme est déterminé à faire tête à l'ennemi en gardant son rang, sans prendre la fuite, sois sûr que c'est un homme courageux. [4] Socrate : C'est bien dit, Lachès : … (…) que dire de celui qui combat l'ennemi en fuyant, au lieu de rester à son poste ? [5] Lachès : Comment, en fuyant ? [6] Socrate : Comme les Scythes, par exemple, qui, dit-on, combattent tout aussi bien en fuyant qu'en chargeant. (…) [7] Lachès : Et avec raison, Socrate ; car il parlait de chars, comme toi, tu parles des cavaliers scythes. [8] La cavalerie des Scythes combat en effet de cette manière, mais la grosse infanterie des Grecs, comme je le dis. [9] Socrate : Excepté peut-être celle des Lacédémoniens, Lachès ; car on rapporte qu'à Platées, quand ils se trouvèrent devant les gerrophores, ils ne jugèrent pas à propos de les combattre de pied ferme, mais qu'ils prirent la fuite ; puis, quand les rangs des Perses furent rompus, qu'ils firent volte-face, et, par cette manœuvre imitée de la cavalerie, gagnèrent la bataille. »`,
		source: "PLATON, Lachès 190e - 191c"
};

// ============================================
// QUESTIONS DU QUIZ (50 questions)
// ============================================

const questions = [
	// Question n°1
	{
		question: "Question n°1 : Quelle question Socrate pose-t-il à Lachès au début du texte ?",
		answers: [
			"Qu'est-ce que la vertu ?",
			"Qu'est-ce que le courage ?",
			"Qu'est-ce que la justice ?"
			],
			correct: 2,
			explanation: "Socrate formule explicitement sa question : « essaye de dire ce que je te demande : qu'est-ce que le courage ? » Cette interrogation inaugure la recherche définitionnelle qui structure tout le dialogue. Socrate cherche non pas des exemples de courage, mais l'essence universelle du courage, ce qui le distingue d'une simple énumération de cas particuliers."
		},

		// Question n°2
	{
		question: "Question n°2 : Comment Lachès réagit-il à la question de Socrate ?",
		answers: [
			"Il trouve la question très difficile",
			"Il affirme que ce n'est pas difficile à dire",
			"Il refuse de répondre"
			],
			correct: 2,
			explanation: "Lachès répond avec assurance : « Par Zeus, Socrate, ce n'est pas difficile à dire. » Cette confiance initiale contraste avec la difficulté que Socrate va progressivement révéler. Ce contraste est caractéristique de la méthode socratique : l'interlocuteur, croyant savoir, découvre son ignorance au fil de l'examen critique, ce qui constitue le premier pas vers la véritable connaissance."
		},

		// Question n°3
		{
		question: "Question n°3 : Quelle première définition du courage Lachès propose-t-il ?",
		answers: [
			"Combattre en fuyant",
			"Faire tête à l'ennemi en gardant son rang, sans prendre la fuite",
			"Gagner toutes les batailles"
			],
			correct: 2,
			explanation: "Lachès définit le courage comme le fait, pour un homme, d'être « déterminé à faire tête à l'ennemi en gardant son rang, sans prendre la fuite ». Cette définition reflète l'idéal militaire traditionnel du hoplite grec : le courage consiste à tenir sa position dans la phalange, à ne pas reculer devant l'ennemi. C'est une conception essentiellement statique et défensive du courage."
		},

		// Question n°4
		{
		question: "Question n°4 : Quelle objection Socrate formule-t-il contre cette première définition ?",
		answers: [
			"Elle est trop vague",
			"Que dire de celui qui combat l'ennemi en fuyant ?",
			"Elle ne concerne que les soldats"
			],
			correct: 2,
			explanation: "Socrate objecte en demandant : « que dire de celui qui combat l'ennemi en fuyant, au lieu de rester à son poste ? » Cette question soulève un contre-exemple qui remet en cause la définition de Lachès. Si le courage consiste à ne pas fuir, comment qualifier celui qui combat efficacement en fuyant ? Socrate montre ainsi que la définition proposée est trop restrictive et exclut des cas pourtant reconnus comme courageux."
		},

		// Question n°5
		{
		question: "Question n°5 : Comment Lachès réagit-il à l'objection de Socrate ?",
		answers: [
			"Il l'accepte immédiatement",
			"Il est surpris et demande : « Comment, en fuyant ? »",
			"Il se met en colère"
			],
			correct: 2,
			explanation: "Lachès manifeste sa surprise par une question incrédule : « Comment, en fuyant ? » Cette réaction révèle son étonnement face à une idée qui contredit sa conception traditionnelle du courage. Pour un guerrier grec, fuir semble intrinsèquement opposé au courage. La question de Lachès exprime la tension entre son expérience militaire et le contre-exemple que Socrate introduit."
		},

		// Question n°6
		{
		question: "Question n°6 : Quel exemple Socrate donne-t-il pour illustrer son objection ?",
		answers: [
			"Les Athéniens",
			"Les Scythes",
			"Les Spartiates"
			],
			correct: 2,
			explanation: "Socrate invoque l'exemple des Scythes : « Comme les Scythes, par exemple, qui, dit-on, combattent tout aussi bien en fuyant qu'en chargeant. » Les Scythes, peuple nomade d'Asie centrale réputé pour sa cavalerie, pratiquaient une guerre de mouvement où la fuite simulée faisait partie intégrante de la tactique militaire. Cet exemple ethnographique montre que le courage peut revêtir des formes différentes selon les cultures et les modes de combat."
		},

		// Question n°7
		{
		question: "Question n°7 : Comment Lachès tente-t-il de réfuter l'exemple de Socrate ?",
		answers: [
			"En niant que les Scythes soient courageux",
			"En distinguant la cavalerie de l'infanterie",
			"En invoquant l'autorité de Zeus"
			],
			correct: 2,
			explanation: "Lachès tente de sauver sa définition en opérant une distinction : « car il parlait de chars, comme toi, tu parles des cavaliers scythes. » Il reconnaît que la cavalerie scythe peut combattre en fuyant, mais soutient que cela ne s'applique pas à l'infanterie lourde grecque. Cette distinction entre types de troupes vise à préserver la validité de sa définition pour le cas qui lui importe : le fantassin grec."
		},

		// Question n°8
		{
		question: "Question n°8 : Quelle distinction Lachès établit-il dans sa réponse ?",
		answers: [
			"Entre Grecs et barbares",
			"Entre la cavalerie des Scythes et la grosse infanterie des Grecs",
			"Entre les dieux et les hommes"
			],
			correct: 2,
			explanation: "Lachès précise : « La cavalerie des Scythes combat en effet de cette manière, mais la grosse infanterie des Grecs, comme je le dis. » Il accepte que les cavaliers scythes combattent en fuyant, mais maintient que l'infanterie lourde grecque (les hoplites) doit tenir sa position. Cette distinction révèle une conception du courage liée à un type spécifique de combat : celui du fantassin lourdement armé qui doit rester dans la phalange."
		},

		// Question n°9
		{
		question: "Question n°9 : Quel nouveau contre-exemple Socrate introduit-il ?",
		answers: [
			"Les Athéniens à Marathon",
			"Les Lacédémoniens à Platées",
			"Les Thébains à Leuctres"
			],
			correct: 2,
			explanation: "Socrate invoque l'exemple des Lacédémoniens (Spartiates) à la bataille de Platées : « on rapporte qu'à Platées, quand ils se trouvèrent devant les gerrophores, ils ne jugèrent pas à propos de les combattre de pied ferme, mais qu'ils prirent la fuite. » Cet exemple est particulièrement fort car il concerne l'infanterie lourde grecque, précisément le cas que Lachès voulait préserver. Les Spartiates, modèles par excellence du courage guerrier grec, ont pourtant eu recours à la fuite tactique."
		},

		// Question n°10
		{
		question: "Question n°10 : Que firent les Lacédémoniens à Platées selon le texte ?",
		answers: [
			"Ils combattirent de pied ferme",
			"Ils prirent la fuite puis firent volte-face",
			"Ils refusèrent de combattre"
			],
			correct: 2,
			explanation: "Socrate rapporte que les Lacédémoniens « prirent la fuite ; puis, quand les rangs des Perses furent rompus, qu'ils firent volte-face ». Cette manœuvre tactique consistait à simuler la déroute pour attirer l'ennemi dans un piège, puis à se retourner pour l'attaquer quand ses lignes étaient désorganisées. Loin d'être un acte de lâcheté, cette fuite simulée était une ruse militaire calculée qui permit de remporter la victoire."
		},

		// Question n°11
		{
		question: "Question n°11 : Quelle est la fonction de l'exemple des Lacédémoniens dans l'argumentation ?",
		answers: [
			"Montrer que les Spartiates sont lâches",
			"Réfuter la distinction de Lachès en montrant que même l'infanterie grecque peut combattre en fuyant",
			"Démontrer la supériorité de la cavalerie"
			],
			correct: 2,
			explanation: "L'exemple des Lacédémoniens à Platées vise à réfuter la distinction de Lachès entre cavalerie et infanterie. Puisque même l'infanterie lourde spartiate, référence absolue du courage guerrier grec, a eu recours à la fuite tactique, la définition de Lachès (rester à son poste sans fuir) ne peut plus tenir. Socrate montre ainsi que le courage ne peut être identifié à une posture physique déterminée."
		},

		// Question n°12
		{
		question: "Question n°12 : Quelle conception du courage Lachès défend-il initialement ?",
		answers: [
			"Une conception intellectuelle",
			"Une conception militaire et statique",
			"Une conception philosophique"
			],
			correct: 2,
			explanation: "Lachès défend une conception militaire et statique du courage : rester à sa place dans la phalange, faire face à l'ennemi sans reculer. Cette conception reflète l'idéal du guerrier hoplite pour qui le courage se mesure à la capacité de maintenir sa position dans la ligne de bataille. Elle est « statique » car elle identifie le courage à une posture fixe plutôt qu'à une qualité dynamique de l'âme."
		},

		// Question n°13
		{
		question: "Question n°13 : Quelle est la méthode philosophique utilisée par Socrate dans ce passage ?",
		answers: [
			"La rhétorique persuasive",
			"La réfutation par contre-exemples (elenchos)",
			"L'exposé magistral"
			],
			correct: 2,
			explanation: "Socrate utilise la méthode de la réfutation par contre-exemples, appelée elenchos. Il ne propose pas lui-même une définition du courage mais examine critiquement celle de Lachès en cherchant des cas où elle ne s'applique pas. Cette méthode vise à faire prendre conscience à l'interlocuteur de l'insuffisance de sa définition, le conduisant à reconnaître son ignorance et à poursuivre la recherche."
		},

		// Question n°14
		{
		question: "Question n°14 : Quel est l'enjeu philosophique de ce dialogue ?",
		answers: [
			"Définir la stratégie militaire",
			"Définir l'essence du courage",
			"Définir la justice"
			],
			correct: 2,
			explanation: "L'enjeu du dialogue est de définir l'essence universelle du courage, et non de simples exemples ou manifestations particulières. Socrate cherche ce qui fait qu'une action est courageuse, ce qui est commun à toutes les formes de courage. Cette recherche de l'universel à travers le particulier est caractéristique de la démarche platonicienne visant à saisir les Formes ou Idées."
		},

		// Question n°15
		{
		question: "Question n°15 : Que révèle l'exemple des Scythes sur la nature du courage ?",
		answers: [
			"Que le courage est purement physique",
			"Que le courage peut prendre des formes différentes selon les cultures et les tactiques",
			"Que les Scythes ne sont pas courageux"
			],
			correct: 2,
			explanation: "L'exemple des Scythes révèle que le courage peut se manifester de manières diverses selon les contextes culturels et militaires. Ce qui semble être de la fuite peut en réalité être une forme de combat courageux. Cette observation suggère que le courage ne réside pas dans un comportement extérieur déterminé (rester ou fuir) mais dans une qualité intérieure de l'âme qui peut s'exprimer de multiples façons."
		},

		// Question n°16
		{
		question: "Question n°16 : Comment Lachès caractérise-t-il la cavalerie scythe ?",
		answers: [
			"Comme lâche",
			"Comme combattant en fuyant",
			"Comme invincible"
			],
			correct: 2,
			explanation: "Lachès reconnaît que « la cavalerie des Scythes combat en effet de cette manière », c'est-à-dire en fuyant. Il admet donc que la fuite peut être une tactique de combat légitime pour la cavalerie. Cette concession est importante car elle montre que Lachès lui-même reconnaît que le courage ne s'identifie pas nécessairement à l'immobilité, du moins pour certaines troupes."
		},

		// Question n°17
		{
		question: "Question n°17 : Quelle est la manœuvre des Lacédémoniens à Platées ?",
		answers: [
			"Une charge frontale",
			"Une fuite simulée suivie d'un retour offensif",
			"Un siège prolongé"
			],
			correct: 2,
			explanation: "À Platées, les Lacédémoniens effectuèrent une fuite simulée suivie d'un retour offensif : « ils prirent la fuite ; puis, quand les rangs des Perses furent rompus, qu'ils firent volte-face ». Cette manœuvre, qualifiée par Socrate d'« imitée de la cavalerie », consistait à feindre la déroute pour désorganiser l'ennemi, puis à se retourner pour l'attaquer. Elle combine ruse et courage, montrant que l'intelligence tactique fait partie intégrante du courage guerrier."
		},

		// Question n°18
		{
		question: "Question n°18 : Que signifie l'expression « faire volte-face » ?",
		answers: [
			"Fuir définitivement",
			"Se retourner pour faire face à l'ennemi",
			"Se rendre"
			],
			correct: 2,
			explanation: "« Faire volte-face » signifie se retourner pour faire face à l'ennemi après avoir simulé la fuite. Cette manœuvre tactique transforme la fuite apparente en attaque surprise. Elle montre que le courage peut impliquer une dimension stratégique et intellectuelle : il ne s'agit pas seulement d'affronter le danger physiquement, mais de savoir quand et comment l'affronter pour maximiser les chances de victoire."
		},

		// Question n°19
		{
		question: "Question n°19 : Quel peuple est réputé pour combattre en fuyant selon le texte ?",
		answers: [
			"Les Perses",
			"Les Scythes",
			"Les Athéniens"
			],
			correct: 2,
			explanation: "Ce sont les Scythes qui sont réputés pour combattre en fuyant : « Comme les Scythes, par exemple, qui, dit-on, combattent tout aussi bien en fuyant qu'en chargeant. » Ce peuple nomade d'Asie centrale était célèbre dans l'Antiquité pour sa cavalerie légère et ses tactiques de harcèlement, consistant à attirer l'ennemi puis à l'attaquer par surprise. Leur style de combat contrastait avec l'idéal grec de la bataille rangée entre hoplites."
		},

		// Question n°20
		{
		question: "Question n°20 : Quelle est la réaction de Lachès face à l'exemple des Lacédémoniens ?",
		answers: [
			"Il l'accepte sans réserve",
			"Il tente de le minimiser en distinguant les types de troupes",
			"Il abandonne sa définition immédiatement"
			],
			correct: 2,
			explanation: "Face à l'exemple des Scythes, Lachès tente de préserver sa définition en distinguant la cavalerie de l'infanterie. Mais quand Socrate introduit l'exemple des Lacédémoniens (infanterie lourde), cette distinction s'effondre. Le texte s'arrête avant que Lachès ne réagisse à ce second exemple, mais la logique de l'argumentation suggère qu'il se trouve acculé à abandonner ou modifier sa définition initiale."
		},

		// Question n°21
		{
		question: "Question n°21 : Quelle conception du courage se dégage de l'exemple des Lacédémoniens ?",
		answers: [
			"Le courage est purement instinctif",
			"Le courage peut impliquer ruse et intelligence tactique",
			"Le courage est réservé aux Spartiates"
			],
			correct: 2,
			explanation: "L'exemple des Lacédémoniens à Platées montre que le courage peut impliquer ruse et intelligence tactique. La fuite simulée n'est pas un acte de lâcheté mais une manœuvre calculée visant à remporter la victoire. Cette conception enrichit la notion de courage en y intégrant des dimensions intellectuelles : savoir quand fuir pour mieux combattre est une forme de sagesse pratique, non une défaillance morale."
		},

		// Question n°22
		{
		question: "Question n°22 : Quel est le rôle de l'exemple dans la méthode socratique ?",
		answers: [
			"Illustrer une théorie déjà établie",
			"Tester la validité d'une définition en cherchant des contre-exemples",
			"Décorer le discours"
			],
			correct: 2,
			explanation: "Dans la méthode socratique, l'exemple sert à tester la validité d'une définition en cherchant des cas où elle ne s'applique pas. Socrate ne se contente pas de discuter abstraitement ; il mobilise des cas concrets (Scythes, Lacédémoniens) pour éprouver la solidité des définitions proposées. Cette approche empirique et critique distingue la dialectique socratique de la simple spéculation."
		},

		// Question n°23
		{
		question: "Question n°23 : Que signifie le « elenchos » dans ce contexte ?",
		answers: [
			"Un éloge",
			"Une réfutation par examen critique",
			"Une définition"
			],
			correct: 2,
			explanation: "L'elenchos est la méthode de réfutation par examen critique utilisée par Socrate. Elle consiste à interroger une définition, à en tirer les conséquences, puis à montrer qu'elles sont contredites par des exemples ou d'autres croyances de l'interlocuteur. Le but n'est pas de vaincre dans une joute verbale mais de purifier les croyances erronées et de stimuler la recherche de la vérité."
		},

		// Question n°24
		{
		question: "Question n°24 : Quelle est l'attitude de Lachès au début du texte ?",
		answers: [
			"Confiant et assuré",
			"Hésitant et perplexe",
			"Hostile et agressif"
			],
			correct: 1,
			explanation: "Au début du texte, Lachès est confiant et assuré : « Par Zeus, Socrate, ce n'est pas difficile à dire. » Il croit fermement que le courage est une chose simple à définir et que sa propre définition est évidente. Cette confiance initiale rend d'autant plus frappante la découverte progressive des difficultés. Le contraste entre l'assurance initiale et la perplexité finale est un trait caractéristique des dialogues socratiques."
		},

		// Question n°25
		{
		question: "Question n°25 : Comment Socrate procède-t-il pour réfuter Lachès ?",
		answers: [
			"Par des discours longs et complexes",
			"Par des questions courtes qui révèlent des contradictions",
			"Par des citations de poètes"
			],
			correct: 2,
			explanation: "Socrate procède par des questions courtes et incisives qui révèlent progressivement les contradictions dans la définition de Lachès. Il ne prononce pas de longs discours mais amène son interlocuteur à reconnaître lui-même les insuffisances de sa position. Cette méthode, appelée maïeutique, vise à accoucher les esprits de leurs propres contradictions pour les pousser vers une recherche plus rigoureuse."
		},

		// Question n°26
		{
		question: "Question n°26 : Que révèle la distinction de Lachès entre cavalerie et infanterie ?",
		answers: [
			"Sa mauvaise foi",
			"Sa tentative de sauver sa définition en la restreignant",
			"Son ignorance totale"
			],
			correct: 2,
			explanation: "La distinction de Lachès entre cavalerie scythe et infanterie grecque révèle sa tentative de sauver sa définition en la restreignant à un cas particulier. En reconnaissant que la cavalerie peut combattre en fuyant, il admet implicitement que sa définition générale ne tient pas. Mais il essaie de préserver une version limitée de sa définition. Socrate montre ensuite que même cette version restreinte est invalidée par l'exemple des Lacédémoniens."
		},

		// Question n°27
		{
		question: "Question n°27 : Quel est le problème logique de la définition de Lachès ?",
		answers: [
			"Elle est trop large",
			"Elle est trop étroite et exclut des cas de courage",
			"Elle est contradictoire"
			],
			correct: 2,
			explanation: "La définition de Lachès est trop étroite car elle exclut des cas reconnus comme courageux : les Scythes combattant en fuyant, les Lacédémoniens à Platées. Une bonne définition doit couvrir tous les cas du concept défini et exclure ce qui n'en fait pas partie. En identifiant le courage à une seule manifestation particulière (rester à son poste), Lachès commet l'erreur de prendre une partie pour le tout."
		},

		// Question n°28
		{
		question: "Question n°28 : Quelle est la signification philosophique de l'exemple des Lacédémoniens ?",
		answers: [
			"Il montre que les Spartiates sont meilleurs que les autres Grecs",
			"Il montre que même l'infanterie d'élite peut combattre en fuyant, ruinant la distinction de Lachès",
			"Il prouve que la guerre est absurde"
			],
			correct: 2,
			explanation: "L'exemple des Lacédémoniens a une portée philosophique décisive : il montre que même l'infanterie d'élite, celle des Spartiates réputés pour leur discipline et leur courage, peut avoir recours à la fuite tactique. Cet exemple ruine la distinction de Lachès entre cavalerie et infanterie, et par conséquent sa définition du courage. Le courage ne peut donc être identifié à une posture physique déterminée."
		},

		// Question n°29
		{
		question: "Question n°29 : Comment Socrate qualifie-t-il la manœuvre des Lacédémoniens ?",
		answers: [
			"Comme une lâcheté",
			"Comme une manœuvre imitée de la cavalerie",
			"Comme un suicide"
			],
			correct: 2,
			explanation: "Socrate qualifie la manœuvre des Lacédémoniens de « manœuvre imitée de la cavalerie ». Cette expression souligne que les Spartiates ont adapté à l'infanterie une tactique typiquement équestre : la fuite simulée suivie d'un retour offensif. Cette capacité d'innovation tactique est elle-même une forme d'intelligence et de courage, montrant que le courage guerrier ne s'oppose pas à la ruse mais peut l'intégrer."
		},

		// Question n°30
		{
		question: "Question n°30 : Quel est le résultat de la bataille de Platées selon le texte ?",
		answers: [
			"Les Lacédémoniens perdirent",
			"Les Lacédémoniens gagnèrent grâce à leur manœuvre",
			"La bataille fut un match nul"
			],
			correct: 2,
			explanation: "Selon le texte, les Lacédémoniens « gagnèrent la bataille » grâce à leur manœuvre de fuite simulée suivie d'un retour offensif. Cette victoire valide la fuite tactique comme stratégie courageuse et efficace. Elle montre que le courage ne se mesure pas à l'immobilité mais à la capacité de remporter la victoire, même si cela implique des mouvements apparemment contraires à l'idéal traditionnel du guerrier."
		},

		// Question n°31
		{
		question: "Question n°31 : Quelle est la visée ultime du dialogue socratique ?",
		answers: [
			"Humilier l'interlocuteur",
			"Définir l'essence universelle d'une vertu",
			"Gagner un débat"
			],
			correct: 2,
			explanation: "La visée ultime du dialogue socratique est de définir l'essence universelle d'une vertu, ici le courage. Socrate ne cherche pas à humilier Lachès ni à gagner un débat, mais à faire progresser la recherche de la vérité. Les réfutations successives ne sont pas des fins en soi mais des étapes purifiant les conceptions erronées pour permettre l'accès à une définition plus adéquate."
		},

		// Question n°32
		{
		question: "Question n°32 : Que signifie « faire tête à l'ennemi » ?",
		answers: [
			"Fuir devant l'ennemi",
			"Affronter l'ennemi de face sans reculer",
			"Se cacher de l'ennemi"
			],
			correct: 2,
			explanation: "« Faire tête à l'ennemi » signifie l'affronter de face, sans reculer ni fuir. Cette expression évoque la posture du guerrier qui tient bon face au danger. Dans le contexte de la phalange hoplitique, cela signifie maintenir sa position dans la ligne de bataille, bouclier contre bouclier avec ses compagnons. C'est cette attitude que Lachès identifie initialement au courage."
		},

		// Question n°33
		{
		question: "Question n°33 : Pourquoi Lachès mentionne-t-il les « gerrophores » ?",
		answers: [
			"Il ne les mentionne pas",
			"C'est Socrate qui les mentionne dans son exemple sur Platées",
			"Il les considère comme des alliés"
			],
			correct: 2,
			explanation: "C'est Socrate qui mentionne les gerrophores (porteurs de boucliers d'osier, troupes perses) dans son exemple sur la bataille de Platées : « quand ils se trouvèrent devant les gerrophores ». Les gerrophores étaient des fantassins perses équipés de boucliers légers en osier. Leur mention situe précisément le contexte historique de l'anecdote et renforce la crédibilité du contre-exemple."
		},

		// Question n°34
		{
		question: "Question n°34 : Quelle est la fonction de l'exemple de Platées dans l'argumentation ?",
		answers: [
			"Décorer le récit",
			"Fournir un cas concret où l'infanterie grecque a combattu en fuyant",
			"Prouver la supériorité spartiate"
			],
			correct: 2,
			explanation: "L'exemple de Platées fournit un cas concret et historiquement attesté où l'infanterie grecque (spartiate) a combattu en fuyant. Il répond directement à la distinction de Lachès en montrant que même l'infanterie lourde, et qui plus est l'élite spartiate, peut avoir recours à la fuite tactique. Cet exemple est d'autant plus efficace qu'il concerne le modèle même du courage guerrier grec."
		},

		// Question n°35
		{
		question: "Question n°35 : Comment définir l'elenchos socratique ?",
		answers: [
			"Un discours élogieux",
			"Une méthode de réfutation par questions et réponses",
			"Une technique de persuasion"
			],
			correct: 2,
			explanation: "L'elenchos socratique est une méthode de réfutation par questions et réponses. Socrate interroge son interlocuteur, examine ses réponses, en tire les conséquences et montre les contradictions. Le but est de tester la cohérence des croyances et de purifier l'esprit des opinions fausses. Cette méthode est au cœur de la philosophie socratique et de sa recherche de définitions universelles."
		},

		// Question n°36
		{
		question: "Question n°36 : Quel est le paradoxe du courage selon ce passage ?",
		answers: [
			"Le courage est toujours récompensé",
			"La fuite peut être une forme de courage",
			"Le courage est inné"
			],
			correct: 2,
			explanation: "Le paradoxe mis en lumière par ce passage est que la fuite, qui semble l'opposé même du courage, peut en être une forme. Les Scythes et les Lacédémoniens combattent en fuyant et sont pourtant courageux. Ce paradoxe remet en cause les conceptions simplistes du courage comme absence de peur ou immobilité face au danger, et ouvre la voie à une définition plus nuancée et plus profonde."
		},

		// Question n°37
		{
		question: "Question n°37 : Quelle est la différence entre courage et témérité selon le contexte ?",
		answers: [
			"Il n'y a pas de différence",
			"Le courage implique intelligence et discernement, la témérité est irréfléchie",
			"La témérité est supérieure au courage"
			],
			correct: 2,
			explanation: "Bien que le texte ne développe pas explicitement cette distinction, elle est implicite dans l'exemple des Lacédémoniens. Leur fuite simulée n'est pas un acte irréfléchi mais une manœuvre calculée. Le courage véritable implique discernement et intelligence des situations, tandis que la témérité est une audace aveugle qui ignore les conséquences. Cette distinction sera développée plus loin dans le dialogue."
		},

		// Question n°38
		{
		question: "Question n°38 : Pourquoi Socrate utilise-t-il des exemples militaires ?",
		answers: [
			"Par hasard",
			"Parce que Lachès est un général et que le courage est traditionnellement associé à la guerre",
			"Pour impressionner Lachès"
			],
			correct: 2,
			explanation: "Socrate utilise des exemples militaires parce que Lachès est un général athénien réputé et que le courage est traditionnellement associé à la guerre dans la culture grecque. En partant des croyances et de l'expérience de son interlocuteur, Socrate peut plus facilement les examiner et les critiquer. Cette stratégie pédagogique consistant à partir du familier pour aller vers l'inconnu est caractéristique de la méthode socratique."
		},

		// Question n°39
		{
		question: "Question n°39 : Que signifie l'expression « combattre de pied ferme » ?",
		answers: [
			"Combattre en reculant",
			"Combattre sans bouger, en restant à sa place",
			"Combattre à cheval"
			],
			correct: 2,
			explanation: "« Combattre de pied ferme » signifie combattre sans bouger, en restant fermement à sa place. Cette expression correspond à l'idéal hoplitique de la bataille rangée où les soldats doivent tenir leur position dans la phalange. C'est cette attitude que Lachès valorise initialement comme l'essence du courage. Socrate montre ensuite que le courage peut aussi s'exprimer par le mouvement et la ruse."
		},

		// Question n°40
		{
		question: "Question n°40 : Comment le texte illustre-t-il la diversité des formes de courage ?",
		answers: [
			"Par des exemples de différents peuples et tactiques",
			"Par des définitions abstraites",
			"Par des mythes"
			],
			correct: 1,
			explanation: "Le texte illustre la diversité des formes de courage par des exemples de différents peuples (Scythes, Lacédémoniens) et de différentes tactiques (fuite simulée, volte-face). Ces exemples montrent que le courage ne se réduit pas à un seul type de comportement mais peut se manifester de multiples manières selon les circonstances et les cultures. Cette diversité empirique rend d'autant plus difficile la recherche d'une définition universelle."
		},

		// Question n°41
		{
		question: "Question n°41 : Quelle est la leçon philosophique de ce passage ?",
		answers: [
			"Les définitions simples suffisent",
			"La recherche de définitions universelles se heurte à la diversité des cas particuliers",
			"Le courage n'existe pas"
			],
			correct: 2,
			explanation: "La leçon philosophique de ce passage est que la recherche de définitions universelles se heurte à la diversité des cas particuliers. Toute définition simple (comme celle de Lachès) risque d'être contredite par des exemples qui n'y correspondent pas. Cette difficulté motive la poursuite du dialogue et la recherche d'une définition plus adéquate, capable d'intégrer la diversité des manifestations du courage."
		},

		// Question n°42
		{
		question: "Question n°42 : Comment Socrate amène-t-il Lachès à douter de sa définition ?",
		answers: [
			"Par la force",
			"Par une série de questions qui révèlent des contradictions",
			"Par des menaces"
			],
			correct: 2,
			explanation: "Socrate amène Lachès à douter de sa définition par une série de questions qui révèlent des contradictions. Il ne lui dit pas directement que sa définition est fausse, mais l'interroge sur des cas particuliers (Scythes, Lacédémoniens) qui contredisent sa position. Lachès est ainsi conduit à reconnaître lui-même les insuffisances de sa définition. Cette méthode respectueuse de la liberté de l'interlocuteur est au cœur de la maïeutique socratique."
		},

		// Question n°43
		{
		question: "Question n°43 : Que signifie l'expression « gerrophores » ?",
		answers: [
			"Porteurs de lances",
			"Porteurs de boucliers d'osier",
			"Archers"
			],
			correct: 2,
			explanation: "Les gerrophores étaient des soldats perses équipés de boucliers légers en osier (gerrhon en grec). Ces troupes étaient moins bien protégées que les hoplites grecs et plus vulnérables au combat rapproché. Leur mention dans le texte situe précisément le contexte de la bataille de Platées et explique pourquoi les Lacédémoniens ont pu recourir à une tactique de fuite simulée contre elles."
		},

		// Question n°44
		{
		question: "Question n°44 : Quelle est la différence entre l'attitude de Lachès et celle de Socrate ?",
		answers: [
			"Lachès est dogmatique, Socrate est critique et interrogatif",
			"Lachès est critique, Socrate est dogmatique",
			"Ils sont identiques"
			],
			correct: 1,
			explanation: "Lachès est dogmatique : il croit détenir la vérité et propose une définition sans examen critique. Socrate est critique et interrogatif : il examine les définitions, cherche des contre-exemples et refuse de s'arrêter à des certitudes prématurées. Cette opposition entre dogmatisme et esprit critique est fondamentale dans la démarche philosophique et caractérise la supériorité de la méthode socratique."
		},

		// Question n°45
		{
		question: "Question n°45 : Pourquoi le courage est-il un sujet important dans la Grèce antique ?",
		answers: [
			"Parce que la guerre est omniprésente et le courage est une vertu civique essentielle",
			"Parce que c'est un sujet de divertissement",
			"Parce que les Grecs étaient pacifistes"
			],
			correct: 1,
			explanation: "Le courage est un sujet important dans la Grèce antique parce que la guerre est omniprésente et le courage est une vertu civique essentielle. Dans les cités grecques en conflit permanent, la capacité de défendre sa patrie est cruciale. Le courage est donc une vertu à la fois militaire et politique, dont la définition et l'éducation préoccupent les philosophes comme Socrate et Platon."
		},

		// Question n°46
		{
		question: "Question n°46 : Comment le texte remet-il en cause l'idéal héroïque traditionnel ?",
		answers: [
			"En montrant que l'intelligence tactique peut faire partie du courage",
			"En niant l'existence des héros",
			"En critiquant les dieux"
			],
			correct: 1,
			explanation: "Le texte remet en cause l'idéal héroïque traditionnel en montrant que l'intelligence tactique peut faire partie du courage. L'idéal héroïque valorise la force brute et l'affrontement direct. Les exemples de Socrate montrent qu'un courage intelligent, capable de ruse et de manœuvre, peut être supérieur à la simple bravoure physique. Cette intellectualisation du courage annonce la conception platonicienne de la vertu comme connaissance."
		},

		// Question n°47
		{
		question: "Question n°47 : Quel est le rôle de la ruse dans la conception du courage selon ce passage ?",
		answers: [
			"Elle est exclue du courage",
			"Elle peut être un élément du courage quand elle sert une juste cause",
			"Elle remplace le courage"
			],
			correct: 2,
			explanation: "Selon ce passage, la ruse peut être un élément du courage quand elle sert une juste cause. La fuite simulée des Lacédémoniens est une ruse tactique qui permet de remporter la victoire. Cette intégration de la ruse dans le courage marque une évolution par rapport à l'idéal héroïque traditionnel et prépare la conception platonicienne du courage comme vertu intellectuelle et morale, non simple force physique."
		},

		// Question n°48
		{
		question: "Question n°48 : Quelle est la conclusion implicite du passage sur la définition du courage ?",
		answers: [
			"Le courage ne peut être défini simplement par un comportement extérieur",
			"Le courage est impossible à définir",
			"Le courage se réduit à la fuite"
			],
			correct: 1,
			explanation: "La conclusion implicite du passage est que le courage ne peut être défini simplement par un comportement extérieur. Puisque des comportements opposés (rester ou fuir) peuvent être courageux selon les circonstances, le courage doit résider dans quelque chose de plus profond que l'action visible. Cette conclusion négative prépare la recherche d'une définition plus adéquate, qui sera poursuivie dans le reste du dialogue."
		},

		// Question n°49
		{
		question: "Question n°49 : Comment le texte illustre-t-il la complexité de la notion de courage ?",
		answers: [
			"En montrant que des actions opposées peuvent être courageuses",
			"En donnant une définition simple",
			"En niant toute complexité"
			],
			correct: 1,
			explanation: "Le texte illustre la complexité de la notion de courage en montrant que des actions opposées (rester à son poste, fuir puis revenir) peuvent être courageuses selon les circonstances. Cette complexité rend insuffisantes les définitions simples et univoques. Elle suggère que le courage est une qualité de l'âme qui peut s'exprimer de multiples façons, et dont la compréhension requiert une analyse philosophique approfondie."
		},

		// Question n°50
	{
		question: "Question n°50 : Quelle est l'importance du Lachès dans l'œuvre de Platon ?",
		answers: [
			"C'est un dialogue de jeunesse qui explore la définition du courage et illustre la méthode socratique",
			"C'est un dialogue politique",
			"C'est un dialogue cosmologique"
			],
			correct: 1,
			explanation: "Le Lachès est un dialogue de jeunesse de Platon qui explore la définition du courage et illustre la méthode socratique. Comme d'autres dialogues aporetiques (Euthyphron, Charmide), il se termine sans conclusion définitive, laissant le lecteur face à sa propre ignorance. Son importance réside dans la démonstration de la méthode elenctique et dans la préparation de la théorie platonicienne des vertus et des Formes."
		}
];