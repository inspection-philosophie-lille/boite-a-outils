// ============================================================
// DONNÉES PARTAGÉES ENTRE PLUSIEURS APPLICATIONS
// ------------------------------------------------------------
// ⚠ Ce fichier est lu par plusieurs pages. 
// Chaque application lit uniquement les constantes qui la concernent
// ============================================================

// ============================================
// DONNÉES GÉNÉRALES
// ============================================

const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Malebranche (De la Recherche de la Vérité)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Il est assez difficile de comprendre, comment il se peut faire que des gens qui ont de l’esprit, aiment mieux se servir de l’esprit des autres dans la recherche de la vérité, que de celui que Dieu leur a donné. [2] Il y a sans doute infiniment plus de plaisir et plus d’honneur à se conduire par ses propres yeux, que par ceux des autres ; et un homme qui a de bons yeux ne s’avisa jamais de se les fermer, ou de se les arracher, dans l’espérance d’avoir un conducteur. [3] (…) Pourquoi le fou marche-t-il dans les ténèbres ? [4] C’est qu’il ne voit que par les yeux d’autrui, et que ne voir que de cette manière, à proprement parler, c’est ne rien voir. [5] L’usage de l’esprit est à l’usage des yeux, ce que l’esprit est aux yeux ; et de même que l’esprit est infiniment au-dessus des yeux, l’usage de l’esprit est accompagné de satisfactions bien plus solides, et qui le contentent bien autrement que la lumière et les couleurs ne contentent la vue. [6] Les hommes toutefois se servent toujours de leurs yeux pour se conduire, et ils ne se servent presque jamais de leur esprit pour découvrir la vérité. »",
	source: "Nicolas Malebranche, <em>De la Recherche de la Vérité</em>, Livre 2, chap. 3 (10e éclaircissement), 1675"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["René Descartes", "Nicolas Malebranche", "Blaise Pascal"],
		correct: 2,
		explanation: "Le texte est extrait de *De la Recherche de la Vérité*, l'œuvre majeure du philosophe et théologien français Nicolas Malebranche."
	},
	{
		question: "Question n°2 : De quelle œuvre ce passage est-il tiré ?",
		answers: ["Les Méditations métaphysiques", "De la Recherche de la Vérité", "Les Pensées"],
		correct: 2,
		explanation: "La source indique explicitement *De la Recherche de la Vérité*, publiée pour la première fois en 1674-1675."
	},
	{
		question: "Question n°3 : En quelle année cette œuvre a-t-elle été publiée (1re édition) ?",
		answers: ["1637", "1675", "1751"],
		correct: 2,
		explanation: "La première édition de *De la Recherche de la Vérité* date de 1674-1675. Le 10e éclaircissement du Livre 2 a été ajouté dans les éditions ultérieures, mais l'ensemble est daté de cette période."
	},
	{
		question: "Question n°4 : Quelle est la thèse principale défendue dans ce passage ?",
		answers: ["Il faut faire confiance aux savants pour trouver la vérité", "Il est absurde de renoncer à sa propre raison pour s'en remettre à l'esprit d'autrui", "La vérité est inaccessible à l'homme"],
		correct: 2,
		explanation: "Malebranche dénonce le fait que des gens « aiment mieux se servir de l’esprit des autres [...] que de celui que Dieu leur a donné », défendant ainsi l'autonomie de la pensée."
	},
	{
		question: "Question n°5 : Selon le §1, d'où vient l'esprit de l'homme ?",
		answers: ["De l'éducation", "De la société", "De Dieu"],
		correct: 3,
		explanation: "Le texte parle de « celui [l'esprit] que Dieu leur a donné », ancrant la raison dans une origine divine."
	},
	{
		question: "Question n°6 : Que trouve Malebranche « assez difficile de comprendre » ?",
		answers: ["Que Dieu ait donné un esprit aux hommes", "Que des gens ayant de l'esprit préfèrent utiliser celui des autres", "Que la vérité existe"],
		correct: 2,
		explanation: "Il exprime son étonnement face à la paresse intellectuelle de ceux qui, pourtant doués, choisissent l'autorité d'autrui plutôt que leur propre jugement."
	},
	{
		question: "Question n°7 : Quels deux avantages Malebranche attribue-t-il au fait de « se conduire par ses propres yeux » ?",
		answers: ["La richesse et la puissance", "Le plaisir et l'honneur", "La rapidité et l'efficacité"],
		correct: 2,
		explanation: "Le texte affirme : « Il y a sans doute infiniment plus de plaisir et plus d’honneur à se conduire par ses propres yeux »."
	},
	{
		question: "Question n°8 : Quelle analogie centrale structure le paragraphe [2] ?",
		answers: ["La marche et la course", "La vue (les yeux) et la pensée (l'esprit)", "La lumière et l'obscurité"],
		correct: 2,
		explanation: "Malebranche compare l'usage de l'esprit à l'usage des yeux physiques pour se guider."
	},
	{
		question: "Question n°9 : Que ne ferait jamais, selon l'auteur, « un homme qui a de bons yeux » ?",
		answers: ["Regarder le soleil en face", "Se fermer ou s'arracher les yeux pour avoir un conducteur", "Marcher la nuit"],
		correct: 2,
		explanation: "C'est une hyperbole visant à montrer l'absurdité de renoncer volontairement à sa propre faculté de jugement."
	},
	{
		question: "Question n°10 : Que signifie l'expression « se conduire par ses propres yeux » ?",
		answers: ["Ne pas porter de lunettes", "Penser et juger par soi-même de manière autonome", "Observer attentivement son environnement"],
		correct: 2,
		explanation: "C'est une métaphore de l'autonomie intellectuelle : utiliser sa propre raison pour s'orienter dans la recherche de la vérité."
	},
	{
		question: "Question n°11 : Quelle figure Malebranche introduit-il au §3 pour illustrer son propos ?",
		answers: ["Le sage", "L'enfant", "Le fou"],
		correct: 3,
		explanation: "Il pose la question rhétorique : « Pourquoi le fou marche-t-il dans les ténèbres ? »"
	},
	{
		question: "Question n°12 : Pourquoi le fou marche-t-il dans les ténèbres selon le §4 ?",
		answers: ["Parce qu'il est physiquement aveugle", "Parce qu'il ne voit que par les yeux d'autrui", "Parce qu'il refuse d'allumer une lampe"],
		correct: 2,
		explanation: "La folie, ici, est définie comme une hétéronomie intellectuelle : « C’est qu’il ne voit que par les yeux d’autrui »."
	},
	{
		question: "Question n°13 : Que signifie « à proprement parler » dans le §4 ?",
		answers: ["Au sens figuré", "Au sens strict et rigoureux du terme", "Selon l'opinion commune"],
		correct: 2,
		explanation: "Malebranche précise sa pensée : au sens strict, voir par les autres équivaut à ne pas voir du tout, car on n'exerce pas sa propre faculté de vision."
	},
	{
		question: "Question n°14 : Quelle est la conclusion du §4 sur le fait de « ne voir que de cette manière » ?",
		answers: ["C'est une forme de sagesse", "C'est ne rien voir", "C'est voir deux fois mieux"],
		correct: 2,
		explanation: "Le texte est catégorique : « ne voir que de cette manière, à proprement parler, c’est ne rien voir »."
	},
	{
		question: "Question n°15 : Quelle figure de style est utilisée dans « L’usage de l’esprit est à l’usage des yeux, ce que l’esprit est aux yeux » ?",
		answers: ["Une métaphore filée", "Une analogie proportionnelle (A est à B ce que C est à D)", "Une antithèse"],
		correct: 2,
		explanation: "C'est une analogie classique qui établit un rapport de proportionnalité pour démontrer la supériorité de l'esprit."
	},
	{
		question: "Question n°16 : Selon le §5, quelle est la relation de valeur entre l'esprit et les yeux ?",
		answers: ["Ils sont égaux", "Les yeux sont infiniment au-dessus de l'esprit", "L'esprit est infiniment au-dessus des yeux"],
		correct: 3,
		explanation: "Le texte affirme clairement : « de même que l’esprit est infiniment au-dessus des yeux »."
	},
	{
		question: "Question n°17 : Que procure l'usage de l'esprit, selon le §5 ?",
		answers: ["Des satisfactions bien plus solides", "De la fatigue mentale", "Des illusions dangereuses"],
		correct: 1,
		explanation: "Malebranche oppose la solidité des satisfactions de l'esprit à la superficialité des sensations visuelles."
	},
	{
		question: "Question n°18 : À quoi les « satisfactions » de l'esprit sont-elles comparées ?",
		answers: ["À la faim et la soif", "À ce que la lumière et les couleurs procurent à la vue", "À la douleur physique"],
		correct: 2,
		explanation: "Le texte dit que l'esprit contente « bien autrement que la lumière et les couleurs ne contentent la vue »."
	},
	{
		question: "Question n°19 : Quel est le paradoxe final énoncé au §6 ?",
		answers: ["Les hommes utilisent toujours leurs yeux, mais presque jamais leur esprit pour découvrir la vérité", "Les hommes voient mieux la nuit que le jour", "Les hommes ont plus d'esprit que de yeux"],
		correct: 1,
		explanation: "C'est le constat amer de Malebranche : nous faisons un usage constant et naturel de nos sens, mais nous négligeons presque totalement l'usage de notre raison."
	},
	{
		question: "Question n°20 : Que dénonce implicitement Malebranche dans ce texte ?",
		answers: ["L'athéisme", "L'autoritarisme, le préjugé et la paresse intellectuelle", "Le progrès scientifique"],
		correct: 2,
		explanation: "Le texte est une critique virulente de ceux qui s'en remettent aveuglément à l'autorité (livres, maîtres, traditions) au lieu d'exercer leur propre jugement."
	},
	{
		question: "Question n°21 : Quel courant philosophique influence fortement cette conception de l'autonomie de la raison ?",
		answers: ["Le stoïcisme", "Le cartésianisme", "L'empirisme de Locke"],
		correct: 2,
		explanation: "Malebranche est un grand disciple de Descartes. L'idée de ne pas accepter d'autorité autre que celle de sa propre raison est un pilier de la méthode cartésienne."
	},
	{
		question: "Question n°22 : Que signifie « avoir de l'esprit » dans ce contexte ?",
		answers: ["Être spirituel et drôle", "Posséder la faculté de raisonner et de comprendre", "Avoir de l'imagination"],
		correct: 2,
		explanation: "Au XVIIe siècle, « avoir de l'esprit » signifie être doué de raison, d'intelligence et de capacité de jugement."
	},
	{
		question: "Question n°23 : Pourquoi Malebranche utilise-t-il une question rhétorique au §3 (« Pourquoi le fou... ») ?",
		answers: ["Parce qu'il ne connaît pas la réponse", "Pour interpeller le lecteur et l'amener à constater lui-même l'absurdité de la situation", "Pour changer de sujet"],
		correct: 2,
		explanation: "La question rhétorique est un procédé persuasif qui force le lecteur à participer au raisonnement et à adhérer à la réponse évidente qui suit."
	},
	{
		question: "Question n°24 : Que symbolisent les « ténèbres » dans ce passage ?",
		answers: ["La nuit physique", "L'ignorance et l'erreur", "Le sommeil"],
		correct: 2,
		explanation: "Les ténèbres sont la métaphore classique de l'absence de connaissance et de la soumission à l'opinion d'autrui."
	},
	{
		question: "Question n°25 : En quoi l'expression « se les arracher » renforce-t-elle l'argumentation ?",
		answers: ["Elle montre la violence de la nature humaine", "Elle souligne l'absurdité extrême et l'automutilation intellectuelle que représente le renoncement à sa raison", "Elle fait référence à Œdipe"],
		correct: 2,
		explanation: "Cette hyperbole violente vise à choquer le lecteur pour lui faire comprendre que renoncer à penser par soi-même est une mutilation de sa propre nature."
	},
	{
		question: "Question n°26 : Quelle est la fonction de la conjonction « toutefois » au §6 ?",
		answers: ["Marquer une conséquence", "Marquer une opposition ou un paradoxe par rapport à ce qui devrait être logique", "Marquer une addition"],
		correct: 2,
		explanation: "« Toutefois » introduit le constat décevant de la réalité humaine, qui contredit la logique établie dans les paragraphes précédents."
	},
	{
		question: "Question n°27 : Que révèle la mention de Dieu dans le §1 sur la conception de la raison chez Malebranche ?",
		answers: ["Que la raison est une illusion", "Que la raison est un don divin et qu'y renoncer est une ingratitude envers le Créateur", "Que Dieu empêche de penser"],
		correct: 2,
		explanation: "Pour Malebranche (et la tradition augustinienne), la raison est une participation à la Raison divine. Ne pas l'utiliser est donc une faute morale et métaphysique."
	},
	{
		question: "Question n°28 : Que signifie « un conducteur » dans l'analogie du §2 ?",
		answers: ["Un chauffeur de carrosse", "Un guide intellectuel ou une autorité extérieure", "Un sens moral inné"],
		correct: 2,
		explanation: "Le « conducteur » représente le philosophe, le maître ou l'auteur dont on suit aveuglément les pensées au lieu de chercher par soi-même."
	},
	{
		question: "Question n°29 : Quelle hiérarchie des facultés ce texte établit-il ?",
		answers: ["Les sens > L'imagination > La raison", "La raison (esprit) > Les sens (yeux)", "Toutes les facultés sont égales"],
		correct: 2,
		explanation: "Le texte affirme que « l’esprit est infiniment au-dessus des yeux », établissant une supériorité ontologique et axiologique de la raison."
	},
	{
		question: "Question n°30 : En quoi la satisfaction de l'esprit est-elle « plus solide » que celle de la vue ?",
		answers: ["Parce que l'esprit ne fatigue pas", "Parce que la vérité intellectuelle est durable et universelle, contrairement aux sensations éphémères", "Parce que les yeux sont fragiles"],
		correct: 2,
		explanation: "La connaissance vraie (la vérité) procure une joie stable et durable, tandis que les plaisirs des sens (lumière, couleurs) sont passagers et superficiels."
	},
	{
		question: "Question n°31 : Quel est le ton général de ce passage ?",
		answers: ["Descriptif et neutre", "Polémique, ironique et exhortatif", "Poétique et mélancolique"],
		correct: 2,
		explanation: "Malebranche utilise l'ironie (« assez difficile de comprendre »), l'hyperbole (« se les arracher ») et l'exhortation pour réveiller le lecteur de sa torpeur intellectuelle."
	},
	{
		question: "Question n°32 : Que signifie « découvrir la vérité » dans le §6 ?",
		answers: ["Trouver un objet caché", "Accéder à la connaissance certaine par l'exercice de la raison", "Inventer une histoire"],
		correct: 2,
		explanation: "La « recherche de la vérité » est le titre même de l'œuvre. Il s'agit du processus actif de l'intelligence pour atteindre des connaissances claires et distinctes."
	},
	{
		question: "Question n°33 : Pourquoi Malebranche dit-il que les hommes « ne se servent presque jamais » de leur esprit ?",
		answers: ["Parce qu'ils en sont incapables", "Parce qu'ils sont paresseux, prisonniers des habitudes et de l'autorité", "Parce que l'esprit est inutile"],
		correct: 2,
		explanation: "C'est une critique de la paresse naturelle de l'homme, qui préfère la facilité de l'opinion reçue à l'effort de l'examen critique."
	},
	{
		question: "Question n°34 : En quoi ce texte est-il un appel à l'émancipation intellectuelle ?",
		answers: ["Il encourage la révolte politique", "Il invite chacun à utiliser le don de raison qu'il a reçu pour ne plus être dépendant des opinions d'autrui", "Il demande de brûler les livres"],
		correct: 2,
		explanation: "Le texte valorise l'autonomie (« ses propres yeux ») comme source de « plaisir » et d'« honneur », invitant le lecteur à prendre en charge sa propre pensée."
	},
	{
		question: "Question n°35 : Que signifie l'expression « gens qui ont de l’esprit » ?",
		answers: ["Des personnes spirituelles", "Des personnes dotées de capacités intellectuelles", "Des fantômes"],
		correct: 2,
		explanation: "Cela désigne les personnes intelligentes et capables de raisonner, ce qui rend leur choix de l'hétéronomie d'autant plus incompréhensible pour l'auteur."
	},
	{
		question: "Question n°36 : Quelle est la portée morale de l'usage de l'esprit selon ce texte ?",
		answers: ["Il n'y en a pas", "C'est un devoir envers soi-même et envers Dieu qui a donné cette faculté", "C'est un péché d'orgueil"],
		correct: 2,
		explanation: "Puisque l'esprit est un « don » de Dieu, ne pas l'utiliser est non seulement une erreur logique, mais aussi une faute morale (ingratitude, lâcheté)."
	},
	{
		question: "Question n°37 : Que révèle l'opposition entre « plaisir » et « honneur » ?",
		answers: ["Qu'ils sont incompatibles", "Que l'autonomie intellectuelle satisfait à la fois le désir personnel (plaisir) et la dignité morale (honneur)", "Que l'honneur est plus important que le plaisir"],
		correct: 2,
		explanation: "Malebranche associe l'agrément subjectif et la valeur objective : penser par soi-même est à la fois agréable et noble."
	},
	{
		question: "Question n°38 : En quoi la définition du « fou » chez Malebranche est-elle originale ?",
		answers: ["Elle est purement médicale", "Elle est intellectuelle et morale : le fou est celui qui renonce à sa propre raison", "Elle est sociale"],
		correct: 2,
		explanation: "La folie n'est pas ici une maladie mentale, mais un choix volontaire d'aliénation intellectuelle, ce qui la rend plus condamnable."
	},
	{
		question: "Question n°39 : Quel est le rôle de l'adverbe « infiniment » dans le texte ?",
		answers: ["Il est utilisé au hasard", "Il marque l'écart absolu et qualitatif entre l'ordre de la pensée et l'ordre des sens", "Il exagère pour faire rire"],
		correct: 2,
		explanation: "« Infiniment plus de plaisir », « infiniment au-dessus » : Malebranche utilise ce terme pour marquer une discontinuité radicale entre le spirituel et le sensible."
	},
	{
		question: "Question n°40 : Que suggère l'idée que « ne voir que de cette manière [...] c’est ne rien voir » ?",
		answers: ["Que la vision est impossible", "Que la connaissance par ouï-dire n'est pas une connaissance réelle, mais une simple croyance", "Que les yeux des autres sont fermés"],
		correct: 2,
		explanation: "Pour Malebranche, la vraie connaissance exige l'acte intérieur de l'esprit. Recevoir une opinion sans l'examiner n'est pas « voir » la vérité."
	},
	{
		question: "Question n°41 : Comment ce texte s'inscrit-il dans le projet du 10e éclaircissement du Livre 2 ?",
		answers: ["Il traite de la grammaire", "Il traite de la nature de l'imagination et de la tendance à juger précipitamment ou à suivre les autres", "Il traite de la politique"],
		correct: 2,
		explanation: "Le 10e éclaircissement porte sur la nature de l'imagination et les erreurs qui en découlent, notamment la confiance excessive dans les témoignages et l'autorité."
	},
	{
		question: "Question n°42 : Quelle métaphore filée traverse l'ensemble du texte ?",
		answers: ["La métaphore du voyage", "La métaphore de la lumière et de la vision", "La métaphore de la construction"],
		correct: 2,
		explanation: "Les yeux, voir, lumière, couleurs, ténèbres, conducteur : tout le vocabulaire appartient au champ lexical de la vue pour illustrer l'activité intellectuelle."
	},
	{
		question: "Question n°43 : Que signifie « se servir de l'esprit des autres » ?",
		answers: ["Manipuler les autres", "Adopter les opinions, les dogmes ou les raisonnements d'autrui sans examen critique", "Enseigner aux autres"],
		correct: 2,
		explanation: "C'est la définition même du préjugé d'autorité : accepter une idée parce qu'elle vient d'une source réputée, sans la soumettre à sa propre raison."
	},
	{
		question: "Question n°44 : Pourquoi Malebranche insiste-t-il sur le fait que les hommes utilisent « toujours » leurs yeux ?",
		answers: ["Pour souligner la fiabilité naturelle et immédiate des sens par rapport à l'effort requis par la raison", "Pour dire que les hommes sont obsédés par l'apparence", "Pour critiquer la biologie"],
		correct: 1,
		explanation: "Il oppose l'usage spontané, constant et naturel des sens à l'usage rare et laborieux de l'esprit, soulignant ainsi la paresse humaine."
	},
	{
		question: "Question n°45 : En quoi ce texte est-il une critique de l'érudition aveugle ?",
		answers: ["Il ne la critique pas", "Il dénonce le fait d'accumuler les connaissances des autres sans les comprendre par soi-même", "Il encourage à lire plus de livres"],
		correct: 2,
		explanation: "Malebranche distingue la vraie science (usage de son propre esprit) de la simple érudition (mémorisation de l'esprit des autres)."
	},
	{
		question: "Question n°46 : Quelle est la condition préalable pour « découvrir la vérité » selon ce texte ?",
		answers: ["Avoir un bon maître", "Oser faire usage de sa propre raison", "Avoir une bonne vue"],
		correct: 2,
		explanation: "Le texte implique que la vérité ne se donne pas, elle se découvre par l'exercice actif et autonome de l'esprit que Dieu a donné."
	},
	{
		question: "Question n°47 : Que marque la parenthèse « (…) » au début du §3 ?",
		answers: ["Une erreur d'impression", "Une ellipse rhétorique qui accélère le rythme et introduit brusquement une nouvelle image (le fou)", "Un oubli de l'auteur"],
		correct: 2,
		explanation: "Cette ellipse crée un effet de rupture, passant directement de l'analogie générale à l'application concrète et frappante de la figure du fou."
	},
	{
		question: "Question n°48 : En quoi Malebranche rejoint-il le « bon sens » de Descartes ?",
		answers: ["Il dit que le bon sens est inutile", "Il affirme que la raison (le bon sens) est la chose du monde la mieux partagée, et qu'il faut l'exercer", "Il rejette Descartes"],
		correct: 2,
		explanation: "Comme Descartes dans le *Discours de la méthode*, Malebranche part du principe que tout homme a les moyens de bien juger, à condition de vouloir s'en servir."
	},
	{
		question: "Question n°49 : Quelle est la portée pédagogique de ce texte ?",
		answers: ["Il décourage l'apprentissage", "Il vise à éveiller l'esprit critique de l'élève et à le rendre autonome", "Il impose un dogme"],
		correct: 2,
		explanation: "En tant que membre de l'Oratoire et éducateur, Malebranche cherche à former des esprits libres et actifs, non des perroquets qui répètent des leçons."
	},
	{
		question: "Question n°50 : Quelle est la leçon ultime de ce passage pour le lecteur contemporain ?",
		answers: ["Il faut faire confiance aux réseaux sociaux", "La vigilance critique et l'autonomie de jugement restent des devoirs fondamentaux face à la facilité des opinions toutes faites", "Il ne faut jamais lire les autres"],
		correct: 2,
		explanation: "Le texte résonne fortement aujourd'hui face à la désinformation et à la paresse intellectuelle : la vérité exige un effort personnel et l'usage de sa propre raison."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "L'usage de l'esprit et l'autonomie de la pensée" },
		{ key: 1, parent: 0, text: "Le constat paradoxal" },
		{ key: 2, parent: 1, text: "[1] Les hommes ont un esprit (don de Dieu)" },
		{ key: 3, parent: 1, text: "[1, 6] Ils préfèrent utiliser l'esprit des autres" },
		{ key: 4, parent: 0, text: "L'analogie de la vue" },
		{ key: 5, parent: 4, text: "[2] Se conduire par ses propres yeux = plaisir et honneur" },
		{ key: 6, parent: 4, text: "[2] S'arracher les yeux pour avoir un conducteur = absurdité" },
		{ key: 7, parent: 4, text: "[5] Hiérarchie : l'esprit est infiniment au-dessus des yeux" },
		{ key: 8, parent: 0, text: "La figure du fou" },
		{ key: 9, parent: 8, text: "[3] Il marche dans les ténèbres" },
		{ key: 10, parent: 8, text: "[4] Car il ne voit que par les yeux d'autrui = ne rien voir" },
		{ key: 11, parent: 0, text: "La conclusion et le devoir" },
		{ key: 12, parent: 11, text: "[5] L'usage de l'esprit procure des satisfactions solides" },
		{ key: 13, parent: 11, text: "[6] Il faut cesser de négliger son esprit pour découvrir la vérité" }
	]
};

// ============================================
// APP : EXPLICATION DE TEXTE
// ============================================

const textes = [
	{
		contenu: philosophyData.texte,
		source: philosophyData.source,
		reponses: {
			origine: "Nicolas Malebranche, De la Recherche de la Vérité, Livre 2, chap. 3 (10e éclaircissement), 1675",
			theme: "La vérité",
			these: "La découverte de la vérité exige l'usage autonome et personnel de sa propre raison (don de Dieu), car se fier aveuglément à l'autorité ou à l'esprit d'autrui revient à rester dans l'ignorance et les ténèbres.",
			interet: "Ce texte est un plaidoyer vibrant pour l'autonomie intellectuelle. En comparant l'esprit à la vue, Malebranche montre que la vérité ne se reçoit pas passivement d'autrui, mais qu'elle doit être « vue » par soi-même. Il oppose la satisfaction solide et durable que procure la découverte personnelle de la vérité à l'illusion et à la dépendance de ceux qui se contentent des opinions reçues.",
			problematique: "En quoi l'usage autonome de sa propre raison est-il la condition indispensable pour accéder à la vérité, par opposition à la dépendance aveugle envers l'autorité ou l'esprit d'autrui ?"
		}
	}
];

// ============================================
// APP : ALGORIGRAMME
// ------------------------------------------------------------
// BLOC RÉÉCRIT AUTOMATIQUEMENT PAR L'ÉDITEUR LORS D'UN EXPORT.
// Ne rien ajouter APRÈS ce bloc : un export ne conserverait que
// ce qui le précède + le bloc régénéré.
// ------------------------------------------------------------
// Le nom de la variable doit commencer par « algorigramme ».
// ============================================

const algorigramme = {
	"nodeDataArray": [
		{
			"key": "1",
			"text": "DÉBUT\nComment les hommes\nrecherchent-ils la vérité ?",
			"loc": "217.18 120",
			"category": "ellipse",
			"color": "#74b9ff",
			"borderColor": "#286DB3",
			"width": 220,
			"height": 100,
			"revealed": true
		},
		{
			"key": "2",
			"text": "Utilisent-ils leur propre\nesprit (don de Dieu) ?",
			"loc": "480 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "3",
			"text": "[1, 6] NON (Paradoxe) :\nIls aiment mieux se servir\nde l'esprit des autres.\nIls n'utilisent presque\njamais leur esprit.",
			"loc": "480 259.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "4",
			"text": "ANALOGIE :\nSe conduire par ses\npropres yeux vs\nyeux d'autrui.",
			"loc": "760.53 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "5",
			"text": "[2] C'est absurde :\nun homme ne s'arrache\npas les yeux pour avoir\nun conducteur.",
			"loc": "760.53 259.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "6",
			"text": "[3-4] Le fou :\nIl voit par les yeux\nd'autrui = il marche\ndans les ténèbres\n(c'est ne rien voir).",
			"loc": "760.53 389.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "7",
			"text": "[5] Hiérarchie :\nL'esprit > les yeux.\nL'usage de l'esprit\nprocure des satisfactions\nbien plus solides.",
			"loc": "1034.36 259.98",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "8",
			"text": "FIN\nIl faut cesser de\nnégliger son esprit\net l'utiliser pour\ndécouvrir la vérité.",
			"loc": "1319.74 120",
			"category": "ellipse",
			"color": "#74b9ff",
			"borderColor": "#286DB3",
			"width": 260,
			"height": 120,
			"revealed": true
		}
	],
	"linkDataArray": [
		{
			"from": "1",
			"to": "2",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "2",
			"to": "3",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "2",
			"to": "4",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "4",
			"to": "5",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "5",
			"to": "6",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "4",
			"to": "7",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "7",
			"to": "8",
			"fromSide": "right",
			"toSide": "left"
		}
	]
};