// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Machivael";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
    texte: `« [1] … les hommes ont tant de crédulité, ils se plient si servilement aux nécessités du moment que le trompeur trouvera toujours quelqu'un qui se laisse tromper. […] 
[2] Il n'est donc pas nécessaire à un prince de posséder toutes les vertus énumérées plus haut ; ce qu'il faut, c'est qu'il paraisse les avoir. [3] Bien mieux, j'affirme que s'il les avait et les appliquait toujours, elles lui porteraient préjudice ; mais si ce sont de simples apparences, il en tirera profit. [4] Ainsi, tu peux sembler — et être réellement — pitoyable, fidèle, humain, intègre, religieux : fort bien ; mais tu dois avoir entraîné ton cœur à être exactement l'opposé, si les circonstances l'exigent. [5] Si bien qu'un prince doit comprendre — et spécialement un prince nouveau — qu'il ne peut pratiquer toutes ces vertus qui rendent les hommes dignes de louanges, puisqu'il lui faut souvent, s'il veut garder le pouvoir, agir contre la foi, contre la charité, contre l'humanité, contre la religion. »`,
    
    source: "MACHIAVEL, Le Prince, chap. XVIII, trad. E. Barincou, in Œuvres complètes, Paris, Gallimard, coll. \"Pléiade\", [1532], 1952, p. 341"
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    // Question n°1
    { 
        question: "Question n°1 : Que souligne Machiavel à propos de la crédulité des hommes ?",
        answers: [
            "Réponse : leur incrédulité et leur méfiance naturelle", 
            "Réponse : leur crédulité et leur servilité face aux nécessités du moment", 
            "Réponse : leur capacité à toujours détecter les tromperies"
        ], 
        correct: 2,
        explanation: "Machiavel déclare : « les hommes ont tant de crédulité, ils se plient si servilement aux nécessités du moment. » Cette observation psychologique constitue le fondement de sa théorie politique : la tendance des masses à la crédulité rend possible l'art de gouverner par la ruse et l'apparence. Cette analyse réaliste de la nature humaine s'oppose aux conceptions idéalisées de l'être humain comme être rationnel et vertueux. Pour Machiavel, cette crédulité n'est pas un défaut accidentel mais une caractéristique structurelle qui permet au prince habile de manipuler l'opinion publique et de conserver son pouvoir en paraissant vertueux plutôt qu'en l'étant réellement."
    },

    // Question n°2
    { 
        question: "Question n°2 : Que trouvera toujours le trompeur selon Machiavel ?",
        answers: [
            "Réponse : quelqu'un qui se laisse tromper", 
            "Réponse : une résistance systématique", 
            "Réponse : une punition divine"
        ], 
        correct: 1,
        explanation: "Machiavel affirme : « le trompeur trouvera toujours quelqu'un qui se laisse tromper. » Cette affirmation découle directement de son analyse de la crédulité humaine et fonde la possibilité de la manipulation politique. Elle révèle une vision pessimiste mais réaliste des relations sociales où la tromperie rencontre toujours un terrain favorable. Cette idée justifie la stratégie politique machiavélienne : si les hommes sont naturellement crédules, alors le prince a intérêt à utiliser la tromperie comme instrument de gouvernement. Cette position rompt avec la tradition morale qui condamne le mensonge absolument, et inaugure une conception instrumentale de la vérité en politique."
    },

    // Question n°3
    { 
        question: "Question n°3 : Que doit faire un prince concernant les vertus selon Machiavel ?",
        answers: [
            "Réponse : les posséder réellement", 
            "Réponse : paraître les avoir", 
            "Réponse : les mépriser totalement"
        ], 
        correct: 2,
        explanation: "Machiavel affirme : « Il n'est donc pas nécessaire à un prince de posséder toutes les vertus énumérées plus haut ; ce qu'il faut, c'est qu'il paraisse les avoir. » Cette distinction entre être et paraître constitue le cœur de la pensée machiavélienne. Le prince doit cultiver les apparences de la vertu pour gagner la faveur du peuple et des alliés, sans être contraint par la réalité morale. Cette approche instrumentalise les vertus traditionnelles en les réduisant à des moyens au service de la conservation du pouvoir. Elle marque une rupture radicale avec l'éthique politique classique qui exigeait la coïncidence entre l'être et le paraître, et fonde une conception moderne de la politique comme art de la représentation."
    },

    // Question n°4
    { 
        question: "Question n°4 : Quel serait l'effet si le prince avait réellement les vertus et les appliquait toujours ?",
        answers: [
            "Réponse : elles lui seraient toujours bénéfiques", 
            "Réponse : elles lui porteraient préjudice", 
            "Réponse : elles seraient indifférentes"
        ], 
        correct: 2,
        explanation: "Machiavel déclare : « j'affirme que s'il les avait et les appliquait toujours, elles lui porteraient préjudice. » Cette affirmation choquante pour la tradition morale révèle le réalisme politique de Machiavel : dans le monde réel de la politique, caractérisé par la concurrence, la trahison et la violence, une vertu rigide peut devenir un handicap. Le prince qui respecterait toujours ses engagements, qui serait toujours miséricordieux ou pieux, se rendrait vulnérable à ses ennemis moins scrupuleux. Cette analyse fonde la séparation entre morale privée et action politique, et justifie l'utilisation d'une « double morale » : une pour l'apparence, une pour l'action effective."
    },

    // Question n°5
    { 
        question: "Question n°5 : Quel avantage tire-t-on des simples apparences de vertu selon Machiavel ?",
        answers: [
            "Réponse : on en tire profit", 
            "Réponse : on perd la confiance du peuple", 
            "Réponse : on risque la damnation"
        ], 
        correct: 1,
        explanation: "Machiavel précise : « mais si ce sont de simples apparences, il en tirera profit. » Les apparences de vertu sont présentées comme plus utiles que la vertu réelle car elles permettent de bénéficier des avantages de la réputation vertueuse sans subir les inconvénients des contraintes morales. Cette conception utilitariste des vertus renverse la perspective traditionnelle : ce n'est pas la vertu en elle-même qui est bonne, mais ses effets sur la conservation du pouvoir. Le « profit » dont parle Machiavel est politique : il s'agit de la stabilité du régime, de la loyauté des sujets, de la crainte des ennemis. Les apparences deviennent ainsi un capital symbolique à gérer stratégiquement."
    },

    // Question n°6
    { 
        question: "Question n°6 : Quelles vertus Machiavel énumère-t-il comme exemples ?",
        answers: [
            "Réponse : pitoyable, fidèle, humain, intègre, religieux", 
            "Réponse : courageux, juste, sage, fort, tempérant", 
            "Réponse : riche, puissant, célèbre, influent, respecté"
        ], 
        correct: 1,
        explanation: "Machiavel énumère : « Ainsi, tu peux sembler — et être réellement — pitoyable, fidèle, humain, intègre, religieux. » Cette liste correspond aux vertus chrétiennes et humanistes valorisées à la Renaissance : la pitié (miséricorde), la fidélité (respect des engagements), l'humanité (bienveillance), l'intégrité (honnêteté), la religiosité (piété). Le choix de ces vertus particulières est significatif : ce sont précisément celles que la tradition morale considérait comme obligatoires pour un bon gouvernant. En les soumettant à son analyse réaliste, Machiavel opère une déconstruction systématique de l'idéal du prince chrétien et humaniste, montrant leur incompatibilité avec les exigences de la réalité politique."
    },

    // Question n°7
    { 
        question: "Question n°7 : Que doit faire le prince si les circonstances l'exigent ?",
        answers: [
            "Réponse : être exactement l'opposé de ces vertus", 
            "Réponse : renforcer encore ces vertus", 
            "Réponse : abdiquer le pouvoir"
        ], 
        correct: 1,
        explanation: "Machiavel conseille : « mais tu dois avoir entraîné ton cœur à être exactement l'opposé, si les circonstances l'exigent. » Cette recommandation est l'une des plus radicales du texte : le prince doit être prêt à agir contrairement à toutes les vertus qu'il affiche publiquement. Cette capacité à inverser son comportement selon les nécessités politiques définit la virtu machiavélienne : non pas la vertu morale, mais la capacité d'adaptation et de décision efficace. L'expression « entraîné ton cœur » suggère que cette flexibilité morale doit devenir une seconde nature, une disposition intérieure acquise par l'habitude. Le prince doit ainsi maîtriser l'art du renversement entre apparence et réalité."
    },

    // Question n°8
    { 
        question: "Question n°8 : Quel prince doit spécialement comprendre cette leçon selon Machiavel ?",
        answers: [
            "Réponse : un prince ancien et établi", 
            "Réponse : un prince nouveau", 
            "Réponse : un prince religieux"
        ], 
        correct: 2,
        explanation: "Machiavel précise : « un prince doit comprendre — et spécialement un prince nouveau. » Cette spécification est cruciale car elle reconnaît que les contraintes politiques varient selon la situation du prince. Un prince nouveau, qui vient d'accéder au pouvoir, a une légitimité plus fragile et fait face à plus de menaces. Il doit donc être particulièrement pragmatique et prêt à utiliser tous les moyens nécessaires pour consolider son pouvoir. Cette distinction montre le réalisme historique de Machiavel : il ne propose pas des règles abstraites mais des conseils adaptés aux situations concrètes. Le prince nouveau incarne ainsi la figure du politique moderne, affranchi des traditions et contraint d'inventer ses propres règles."
    },

    // Question n°9
    { 
        question: "Question n°9 : Pourquoi un prince ne peut-il pratiquer toutes les vertus ?",
        answers: [
            "Réponse : parce qu'il est naturellement mauvais", 
            "Réponse : parce que pour garder le pouvoir, il doit souvent agir contre elles", 
            "Réponse : parce qu'il en est incapable"
        ], 
        correct: 2,
        explanation: "Machiavel explique : « puisqu'il lui faut souvent, s'il veut garder le pouvoir, agir contre la foi, contre la charité, contre l'humanité, contre la religion. » La conservation du pouvoir apparaît comme la fin suprême qui justifie la transgression des normes morales. Cette affirmation fonde l'autonomie de la politique par rapport à la morale : la logique du pouvoir a ses propres exigences qui peuvent entrer en contradiction avec les impératifs éthiques. Machiavel ne nie pas la valeur des vertus en elles-mêmes, mais il montre leur incompatibilité avec les nécessités de l'action politique dans un monde imparfait. Le prince se trouve ainsi dans une tension permanente entre les exigences du pouvoir et celles de la morale."
    },

    // Question n°10
    { 
        question: "Question n°10 : Contre quelles valeurs le prince doit-il parfois agir ?",
        answers: [
            "Réponse : la foi, la charité, l'humanité, la religion", 
            "Réponse : la justice, la prudence, la force, la tempérance", 
            "Réponse : l'honneur, la gloire, la richesse, le pouvoir"
        ], 
        correct: 1,
        explanation: "Machiavel énumère : « agir contre la foi, contre la charité, contre l'humanité, contre la religion. » Cette liste correspond aux principales vertus chrétiennes : la foi (fidélité à la parole donnée et croyance religieuse), la charité (amour du prochain et générosité), l'humanité (bienveillance et compassion), la religion (piété et respect des cultes). En identifiant précisément ces valeurs, Machiavel cible le cœur de l'éthique chrétienne médiévale. Sa démonstration montre comment ces vertus, louables dans la sphère privée, peuvent devenir des obstacles dans l'arène politique. Cette opposition systématique entre exigences politiques et valeurs chrétiennes constitue l'un des aspects les plus subversifs de sa pensée."
    },

    // Question n°11
    { 
        question: "Question n°11 : Quelle est la conception machiavélienne de la politique ?",
        answers: [
            "Réponse : une politique morale guidée par la vertu", 
            "Réponse : une politique réaliste séparée de la morale", 
            "Réponse : une politique religieuse guidée par la foi"
        ], 
        correct: 2,
        explanation: "Machiavel défend une conception réaliste de la politique qui se sépare de la morale conventionnelle pour se concentrer sur l'efficacité du pouvoir. Cette approche constitue une rupture radicale avec la tradition politique occidentale qui, d'Aristote à Thomas d'Aquin, avait toujours subordonné la politique à l'éthique. Pour Machiavel, la politique est un domaine autonome avec ses propres règles, dictées par la nécessité de conserver le pouvoir dans un monde imprévisible et dangereux. Cette autonomisation de la politique fonde la science politique moderne : il s'agit d'étudier le pouvoir tel qu'il est exercé réellement, non tel qu'il devrait être selon des principes moraux. Le réalisme machiavélien cherche ainsi à fonder l'art de gouverner sur l'observation des faits plutôt que sur des idéaux."
    },

    // Question n°12
    { 
        question: "Question n°12 : Que signifie « entraîner son cœur » selon Machiavel ?",
        answers: [
            "Réponse : développer sa sensibilité morale", 
            "Réponse : s'endurcir pour pouvoir agir contre les vertus si nécessaire", 
            "Réponse : devenir plus religieux"
        ], 
        correct: 2,
        explanation: "L'expression « entraîner son cœur » signifie que le prince doit se préparer psychologiquement et moralement à agir contrairement aux apparences vertueuses qu'il affiche. Cet entraînement implique une transformation intérieure : il ne s'agit pas seulement de feindre extérieurement mais de développer une capacité interne à inverser ses dispositions morales selon les circonstances. Cette exigence révèle la profondeur de la rupture machiavélienne : le bon prince n'est pas celui qui cultive des vertus stables, mais celui qui maîtrise l'art de la métamorphose éthique. L'« entraînement du cœur » désigne ainsi la discipline par laquelle le politique apprend à dominer ses scrupules moraux pour servir les exigences du pouvoir. C'est une forme d'ascèse inversée qui fortifie non pour le bien mais pour l'efficacité."
    },

    // Question n°13
    { 
        question: "Question n°13 : Quel est le but ultime du prince selon ce texte ?",
        answers: [
            "Réponse : être moralement parfait", 
            "Réponse : garder le pouvoir", 
            "Réponse : plaire à Dieu"
        ], 
        correct: 2,
        explanation: "Pour Machiavel, la conservation du pouvoir constitue la fin ultime qui justifie tous les moyens. Cette finalité immanente remplace les finalités transcendantes (le salut, le bien commun métaphysique) qui orientaient traditionnellement l'action politique. Le pouvoir n'est plus un moyen au service d'une fin plus haute, mais devient sa propre fin. Cette conception instrumentalise tous les autres biens (vertu, religion, justice) en les subordonnant à la logique de la conservation. Elle fonde une vision tragique de la politique où le prince, pour survivre, doit souvent sacrifier ce qui fait normalement la dignité humaine. Cette priorité absolue donnée à la conservation du pouvoir caractérise ce qu'on appellera plus tard la « raison d'État »."
    },

    // Question n°14
    { 
        question: "Question n°14 : Comment Machiavel considère-t-il les vertus traditionnelles ?",
        answers: [
            "Réponse : comme des fins en elles-mêmes", 
            "Réponse : comme des instruments au service du pouvoir", 
            "Réponse : comme des obstacles inutiles"
        ], 
        correct: 2,
        explanation: "Machiavel considère les vertus traditionnelles comme des instruments au service du pouvoir plutôt que comme des fins en elles-mêmes. Cette inversion de perspective est fondamentale : les vertus ne valent pas par leur essence morale mais par leur utilité politique. Elles sont des moyens pour gagner la faveur du peuple, obtenir la loyauté des alliés, et légitimer le pouvoir. Cette instrumentalisation des valeurs marque une rupture avec la pensée classique et chrétienne qui faisait de la vertu la finalité de la vie politique. Pour Machiavel, la vertu n'est vertu que si elle sert le prince ; si elle lui nuit, elle cesse d'être une vertu pour devenir un vice politique. Cette approche pragmatique réduit ainsi l'éthique à une technique de gouvernement."
    },

    // Question n°15
    { 
        question: "Question n°15 : Quelle est l'importance des apparences selon Machiavel ?",
        answers: [
            "Réponse : elles sont sans importance", 
            "Réponse : elles sont plus importantes que la réalité", 
            "Réponse : elles sont dangereuses"
        ], 
        correct: 2,
        explanation: "Pour Machiavel, paraître vertueux est plus important que l'être réellement pour le succès politique. Cette primauté des apparences sur la réalité constitue l'une des thèses les plus célèbres et les plus choquantes de sa pensée. Elle repose sur une analyse de la psychologie collective : les hommes jugent davantage par les apparences que par la réalité, se fient plus à ce qu'ils voient qu'à ce qui est. Dans cette perspective, l'art politique devient essentiellement un art de la représentation et de la mise en scène. Le prince doit être à la fois acteur et metteur en scène de sa propre image publique. Cette attention portée aux apparences annonce les analyses modernes de la communication politique et du rôle des médias dans la construction du leadership."
    },

    // Question n°16
    { 
        question: "Question n°16 : Quel type de réalisme Machiavel défend-il ?",
        answers: [
            "Réponse : un réalisme psychologique sur la nature humaine", 
            "Réponse : un réalisme métaphysique", 
            "Réponse : un réalisme scientifique"
        ], 
        correct: 1,
        explanation: "Machiavel défend un réalisme psychologique qui part d'une observation lucide et non idéalisée de la nature humaine. Son analyse de la crédulité, de la servilité, de la capacité à se laisser tromper constitue le fondement empirique de sa théorie politique. Ce réalisme psychologique s'oppose aux conceptions optimistes ou moralisatrices de l'être humain, et refuse de fonder la politique sur ce que les hommes devraient être plutôt que sur ce qu'ils sont réellement. Cette approche fait de Machiavel un précurseur de la psychologie politique moderne. Son réalisme n'est pas seulement descriptif mais prescriptif : c'est parce que les hommes sont ainsi qu'il faut gouverner de telle façon. La connaissance de la nature humaine devient ainsi la condition de l'efficacité politique."
    },

    // Question n°17
    { 
        question: "Question n°17 : Pourquoi un prince nouveau doit-il particulièrement comprendre cette leçon ?",
        answers: [
            "Réponse : parce que son pouvoir est plus fragile et instable", 
            "Réponse : parce qu'il est plus vertueux", 
            "Réponse : parce qu'il est plus naïf"
        ], 
        correct: 1,
        explanation: "Un prince nouveau a un pouvoir moins légitimé et donc plus fragile, ce qui exige de sa part un pragmatisme accru. Contrairement au prince héréditaire dont l'autorité repose sur la tradition et l'habitude, le prince nouveau doit construire sa légitimité et faire face à plus de contestations. Cette situation de précarité justifie l'utilisation de moyens exceptionnels, y compris la tromperie et la violence. Machiavel reconnaît ainsi que les contraintes morales varient selon la position politique : ce qui serait condamnable pour un prince établi peut devenir nécessaire pour un prince nouveau. Cette différenciation selon les circonstances historiques montre la sophistication de l'analyse machiavélienne, qui refuse les principes absolus au profit d'une appréciation contextuelle."
    },

    // Question n°18
    { 
        question: "Question n°18 : Que révèle ce texte sur la conception machiavélienne de la vérité ?",
        answers: [
            "Réponse : la vérité doit toujours être dite", 
            "Réponse : la vérité politique est ce qui est efficace, non ce qui est moralement vrai", 
            "Réponse : la vérité religieuse prime sur tout"
        ], 
        correct: 2,
        explanation: "Ce texte révèle que pour Machiavel, en politique, l'efficacité prime sur la vérité morale. La vérité n'est plus une valeur absolue mais devient relative aux objectifs politiques. Ce qui est « vrai » politiquement n'est pas ce qui correspond à une réalité morale, mais ce qui fonctionne pour conserver le pouvoir. Cette conception instrumentale de la vérité s'exprime dans la valorisation du paraître sur l'être : ce qui importe, ce n'est pas d'être vertueux mais de paraître l'être. Machiavel opère ainsi une séparation entre vérité factuelle (ce qui est réellement) et vérité politique (ce qui doit être cru). La vérité politique devient une construction stratégique au service de la conservation du pouvoir, annonçant les analyses modernes de la propagande et de la désinformation."
    },

    // Question n°19
    { 
        question: "Question n°19 : À quel siècle et courant de pensée appartient Machiavel ?",
        answers: [
            "Réponse : XVe-XVIe siècle, Renaissance et réalisme politique", 
            "Réponse : XVIIIe siècle, Lumières", 
            "Réponse : XIXe siècle, Romantisme"
        ], 
        correct: 1,
        explanation: "Machiavel (1469-1527) appartient à la Renaissance italienne et fonde le réalisme politique moderne. Son œuvre s'inscrit dans le contexte des cités-États italiennes déchirées par les conflits internes et les invasions étrangères. Cette période de crise politique profonde explique son rejet des idéalismes et sa recherche d'une science politique basée sur l'observation des réalités concrètes. Machiavel incarne le passage de la pensée médiévale, dominée par la théologie, à la pensée moderne, caractérisée par la sécularisation et l'autonomisation des différents domaines du savoir. Son réalisme politique influencera durablement la philosophie politique, de Hobbes à Max Weber, et donnera naissance au terme « machiavélisme » désignant une conception cynique et amorale de la politique."
    },

    // Question n°20
    { 
        question: "Question n°20 : Quelle est la portée révolutionnaire de ce texte ?",
        answers: [
            "Réponse : il fonde une conception autonome de la politique, séparée de la morale", 
            "Réponse : il renforce l'union du trône et de l'autel", 
            "Réponse : il défend la démocratie libérale"
        ], 
        correct: 1,
        explanation: "La portée révolutionnaire de ce texte réside dans le fait qu'il fonde une conception autonome de la politique, radicalement séparée de la morale. Machiavel est le premier penseur à affirmer clairement que la politique obéit à sa propre logique, distincte de celle de l'éthique ou de la religion. Cette autonomisation de la sphère politique constitue une rupture majeure avec la tradition occidentale qui, de Platon à la scolastique médiévale, avait toujours subordonné le politique au moral ou au théologique. En libérant la politique de la tutelle morale, Machiavel ouvre la voie à la science politique moderne et à l'analyse objective des mécanismes du pouvoir. Cette révolution intellectuelle explique pourquoi son œuvre a été si controversée et pourquoi le terme « machiavélique » est devenu synonyme de cynisme politique."
    },

    // Question n°21
    { 
        question: "Question n°21 : Quelle est la conception machiavélienne de la nécessité politique ?",
        answers: [
            "Réponse : une nécessité métaphysique imposée par Dieu", 
            "Réponse : une contrainte pragmatique dictée par les circonstances", 
            "Réponse : une libre création du prince"
        ], 
        correct: 2,
        explanation: "Pour Machiavel, la nécessité politique est une contrainte pragmatique dictée par les circonstances concrètes plutôt qu'une nécessité métaphysique. Le prince doit adapter ses actions aux exigences du moment, aux menaces qu'il affronte, aux opportunités qui se présentent. Cette conception de la nécessité comme contingence historique s'oppose aux visions providentialistes ou déterministes. Elle fait du prince un être de décision qui doit lire correctement les situations et y répondre avec flexibilité. La « nécessité du moment » dont parle Machiavel est ce qui justifie les écarts par rapport à la morale : quand la survie de l'État est en jeu, les règles ordinaires peuvent être suspendues. Cette notion annonce la modernité politique en faisant de la contingence le principe même de l'action politique."
    },

    // Question n°22
    { 
        question: "Question n°22 : Comment Machiavel comprend-il la relation entre moyens et fins en politique ?",
        answers: [
            "Réponse : les moyens doivent toujours être conformes aux fins", 
            "Réponse : la fin justifie les moyens", 
            "Réponse : les moyens sont plus importants que les fins"
        ], 
        correct: 2,
        explanation: "Machiavel est souvent associé à la maxime « la fin justifie les moyens », bien qu'il ne l'ait jamais formulée exactement ainsi. Son texte montre en effet que pour atteindre la fin suprême qu'est la conservation du pouvoir, le prince peut et doit utiliser tous les moyens nécessaires, y compris ceux qui violent la morale traditionnelle. Cette approche instrumentale rompt avec la conception aristotélicienne selon laquelle les moyens doivent être conformes aux fins. Pour Machiavel, l'efficacité prime sur la moralité : un moyen est bon s'il conduit au but, indépendamment de sa valeur éthique intrinsèque. Cette conception a profondément marqué la pensée politique moderne et continue d'alimenter les débats sur l'éthique en politique et les limites de l'action étatique."
    },

    // Question n°23
    { 
        question: "Question n°23 : Quelle est la place de la religion dans la pensée politique de Machiavel ?",
        answers: [
            "Réponse : elle doit guider toutes les décisions politiques", 
            "Réponse : elle est un instrument de contrôle social au service du prince", 
            "Réponse : elle doit être éliminée de la sphère politique"
        ], 
        correct: 2,
        explanation: "Pour Machiavel, la religion n'est pas une fin en soi mais un instrument de contrôle social au service du prince. Bien qu'il reconnaisse son utilité pour maintenir l'ordre et la cohésion sociale, il la subordonne aux exigences politiques. Le prince doit « paraître » religieux pour bénéficier de la légitimité que confère la piété, mais il ne doit pas hésiter à agir « contre la religion » si les circonstances l'exigent. Cette instrumentalisation de la religion constitue une rupture avec la conception médiévale qui faisait de la foi le fondement du pouvoir politique. Machiavel inaugure ainsi une vision sécularisée du politique où la religion devient un outil de gouvernement plutôt qu'un principe transcendant. Cette approche préfigure les analyses modernes de la religion comme « opium du peuple » ou comme facteur d'intégration sociale."
    },

    // Question n°24
    { 
        question: "Question n°24 : Comment Machiavel conçoit-il la relation entre pouvoir et moralité ?",
        answers: [
            "Réponse : le pouvoir doit toujours être exercé moralement", 
            "Réponse : le pouvoir et la moralité sont deux domaines séparés", 
            "Réponse : la moralité doit contrôler strictement l'exercice du pouvoir"
        ], 
        correct: 2,
        explanation: "Machiavel établit une séparation radicale entre le domaine du pouvoir et celui de la moralité. Cette distinction constitue l'apport le plus original et le plus controversé de sa pensée. Alors que la tradition philosophique avait toujours cherché à concilier pouvoir et moralité (le bon gouvernant étant nécessairement vertueux), Machiavel montre leur incompatibilité fondamentale dans la pratique. Le pouvoir a ses propres exigences qui peuvent entrer en contradiction avec les impératifs moraux. Cette séparation fonde l'autonomie de la science politique : on peut étudier le pouvoir en lui-même, indépendamment de jugements moraux. Elle justifie également la spécificité de l'éthique politique, distincte de l'éthique individuelle. Cette distinction reste au cœur des débats contemporains sur l'éthique en politique."
    },

    // Question n°25
    { 
        question: "Question n°25 : Quelle est la conception machiavélienne de l'État ?",
        answers: [
            "Réponse : une communauté morale fondée sur la vertu", 
            "Réponse : un mécanisme de pouvoir devant assurer sa propre conservation", 
            "Réponse : une émanation de la volonté divine"
        ], 
        correct: 2,
        explanation: "Pour Machiavel, l'État est avant tout un mécanisme de pouvoir dont la fin première est sa propre conservation. Cette conception instrumentale et réaliste s'oppose aux visions organicistes ou moralistes de l'État. L'État n'a pas pour vocation de réaliser un idéal de justice ou de vertu, mais simplement de maintenir son existence face aux menaces internes et externes. Cette vision minimaliste fait de la survie de l'État la condition de toute autre réalisation politique. Elle anticipe les conceptions modernes de l'État comme organisation territoriale exerçant le monopole de la violence légitime. La priorité absolue donnée à la conservation explique pourquoi Machiavel justifie l'usage de tous les moyens nécessaires à cette fin, y compris les plus immoraux."
    },

    // Question n°26
    { 
        question: "Question n°26 : Comment Machiavel comprend-il la notion de « fortune » en politique ?",
        answers: [
            "Réponse : comme une force divine qui détermine tout", 
            "Réponse : comme l'ensemble des circonstances imprévisibles que le prince doit maîtriser", 
            "Réponse : comme une illusion sans réalité"
        ], 
        correct: 2,
        explanation: "Pour Machiavel, la « fortune » représente l'ensemble des circonstances imprévisibles et contingentes qui affectent la vie politique. Contrairement à la conception providentialiste médiévale, la fortune n'est pas une volonté divine mais une force aveugle et changeante. Le prince ne doit pas se soumettre passivement à la fortune mais doit s'efforcer de la maîtriser par sa virtù (sa capacité d'action et d'adaptation). Cette conception de la fortune comme contingence à dominer fonde une vision active et volontariste de la politique. Elle fait du prince un créateur de son propre destin plutôt qu'un simple exécutant d'un plan divin. Cette idée annonce la modernité politique en faisant de l'action humaine le principal facteur de l'histoire, contre les conceptions fatalistes ou providentialistes."
    },

    // Question n°27
    { 
        question: "Question n°27 : Quelle est la place du peuple dans la pensée politique de Machiavel ?",
        answers: [
            "Réponse : le peuple doit être éduqué à la vertu", 
            "Réponse : le peuple est un instrument passif que le prince doit manipuler", 
            "Réponse : le peuple est la source légitime de tout pouvoir"
        ], 
        correct: 2,
        explanation: "Dans la pensée de Machiavel, le peuple apparaît principalement comme un instrument passif que le prince doit manipuler pour conserver son pouvoir. L'analyse de la crédulité populaire sert à justifier l'utilisation de la tromperie et de l'apparence. Cependant, Machiavel reconnaît aussi que le soutien populaire est essentiel pour la stabilité du régime, d'où l'importance de paraître vertueux. Cette vision du peuple comme masse crédible et manipulable s'oppose aux conceptions démocratiques qui font du peuple un acteur rationnel et souverain. Elle reflète le contexte historique des cités-États italiennes où les régimes populaires étaient souvent instables. Cette ambivalence à l'égard du peuple (à la fois nécessaire et dangereux) caractérise toute la pensée politique moderne."
    },

    // Question n°28
    { 
        question: "Question n°28 : Comment Machiavel conçoit-il la relation entre loi et force ?",
        answers: [
            "Réponse : la loi doit toujours prévaloir sur la force", 
            "Réponse : la force est le fondement réel de la loi", 
            "Réponse : loi et force sont complètement indépendantes"
        ], 
        correct: 2,
        explanation: "Pour Machiavel, la force constitue le fondement réel de la loi et de l'ordre politique. Cette conception réaliste s'oppose aux visions idéalistes qui font reposer la loi sur le consentement ou la justice. Machiavel montre que sans la force pour les faire respecter, les lois ne sont que des paroles vides. Le prince doit donc maîtriser à la fois l'art de la loi (pour gouverner en temps normal) et l'art de la force (pour faire face aux crises). Cette priorité donnée à la force annonce les théories modernes de la souveraineté qui font du monopole de la violence légitime la caractéristique essentielle de l'État. Elle justifie également l'usage de moyens extra-légaux lorsque la survie de l'État est en jeu, fondant ainsi la notion d'exception politique."
    },

    // Question n°29
    { 
        question: "Question n°29 : Quelle est la conception machiavélienne de la guerre ?",
        answers: [
            "Réponse : un mal absolu à éviter à tout prix", 
            "Réponse : la continuation de la politique par d'autres moyens", 
            "Réponse : une activité purement destructrice sans intérêt politique"
        ], 
        correct: 2,
        explanation: "Machiavel considère la guerre comme un élément constitutif et permanent de la vie politique. Contrairement aux visions pacifistes ou moralisatrices, il voit dans la guerre non pas une anomalie mais une dimension essentielle des relations entre États. Le prince doit donc être avant tout un chef militaire capable de défendre son territoire et d'étendre son pouvoir. Cette centralité de la guerre dans la pensée machiavélienne reflète le contexte des guerres incessantes entre les cités-États italiennes. Elle anticipe la formule clausewitzienne selon laquelle « la guerre est la continuation de la politique par d'autres moyens ». Pour Machiavel, la vertu politique par excellence est la virtù militaire, c'est-à-dire la capacité à faire la guerre avec succès, car sans cette capacité, aucun pouvoir ne peut se maintenir durablement."
    },

    // Question n°30
    { 
        question: "Question n°30 : Comment Machiavel comprend-il la notion de « république » ?",
        answers: [
            "Réponse : comme un régime idéal fondé sur la vertu civique", 
            "Réponse : comme un régime mixte combinant différents principes de gouvernement", 
            "Réponse : comme une forme de gouvernement sans prince"
        ], 
        correct: 2,
        explanation: "Dans ses Discours sur la première décade de Tite-Live, Machiavel développe une conception de la république comme régime mixte combinant les principes monarchique, aristocratique et démocratique. Cette république idéale repose sur la virtù civique des citoyens et sur des institutions qui canalisent les conflits sociaux de manière productive. Cependant, dans Le Prince, Machiavel s'intéresse davantage à la figure du prince nouveau qui doit fonder ou restaurer un État. Cette dualité dans sa pensée (entre république et principat) reflète son analyse des conditions historiques : là où la virtù civique existe, la république est possible ; là où elle fait défaut, un prince fort est nécessaire. Cette vision réaliste et contextuelle montre la complexité de la pensée machiavélienne, souvent réduite à la seule apologie de la tyrannie."
    },

    // Question n°31
    { 
        question: "Question n°31 : Quelle est la place de l'histoire dans la méthode de Machiavel ?",
        answers: [
            "Réponse : l'histoire est sans intérêt pour la politique", 
            "Réponse : l'histoire fournit des exemples concrets pour fonder une science politique empirique", 
            "Réponse : l'histoire révèle un plan divin providentiel"
        ], 
        correct: 2,
        explanation: "Machiavel utilise l'histoire comme un laboratoire d'expériences politiques qui permet de fonder une science politique empirique. Contrairement aux philosophes qui raisonnent à partir de principes abstraits, il analyse les événements historiques pour en tirer des leçons pratiques. Cette méthode inductive constitue une innovation majeure : la politique devient une science fondée sur l'observation des régimes passés et présents. Machiavel étudie particulièrement l'histoire de Rome, qu'il considère comme un modèle de virtù politique et militaire. Cette utilisation de l'histoire comme réservoir d'exemples annonce les méthodes des sciences sociales modernes. Elle permet à Machiavel de fonder ses conseils non sur des spéculations métaphysiques mais sur l'étude concrète des succès et des échecs des gouvernants à travers les âges."
    },

    // Question n°32
    { 
        question: "Question n°32 : Comment Machiavel conçoit-il la relation entre intérêt particulier et intérêt général ?",
        answers: [
            "Réponse : l'intérêt du prince coïncide toujours avec l'intérêt général", 
            "Réponse : le prince doit parfois sacrifier l'intérêt général à son intérêt particulier", 
            "Réponse : l'intérêt général doit toujours primer sur l'intérêt du prince"
        ], 
        correct: 2,
        explanation: "Machiavel reconnaît que l'intérêt du prince (conserver son pouvoir) peut entrer en conflit avec l'intérêt général (le bien commun). Contrairement aux théories du despotisme éclairé, il ne postule pas une harmonie automatique entre les deux. Le prince doit parfois sacrifier l'intérêt général à son intérêt particulier, notamment lorsqu'il s'agit de faire face à des menaces immédiates. Cette reconnaissance du conflit potentiel entre pouvoir et bien commun constitue l'un des aspects les plus réalistes et les plus troublants de sa pensée. Elle montre que pour Machiavel, la politique n'est pas d'abord une affaire de bien commun mais de conservation du pouvoir. Cette perspective préfigure les analyses modernes des régimes autoritaires où la survie du régime prime sur le bien-être de la population."
    },

    // Question n°33
    { 
        question: "Question n°33 : Quelle est la conception machiavélienne de la liberté ?",
        answers: [
            "Réponse : la liberté comme autonomie individuelle", 
            "Réponse : la liberté comme indépendance nationale", 
            "Réponse : la liberté comme participation politique"
        ], 
        correct: 2,
        explanation: "Pour Machiavel, la liberté désigne avant tout l'indépendance nationale, c'est-à-dire la capacité d'un État à se gouverner lui-même sans domination étrangère. Cette conception collective et politique de la liberté s'oppose aux conceptions individualistes modernes. Elle est inséparable de la virtù, c'est-à-dire de la capacité d'un peuple à défendre sa souveraineté par les armes. Dans le contexte des invasions étrangères qui ravagent l'Italie, cette préoccupation pour la liberté nationale est centrale. Machiavel rêve d'un prince capable d'unifier l'Italie et de la libérer des « barbares ». Cette conception patriotique de la liberté explique en partie son pragmatisme : pour préserver l'indépendance nationale, tous les moyens sont permis. La liberté ainsi comprise devient la fin ultime qui peut justifier les moyens les plus immoraux."
    },

    // Question n°34
    { 
        question: "Question n°34 : Comment Machiavel comprend-il la notion de « crainte » et d'« amour » en politique ?",
        answers: [
            "Réponse : le prince doit être aimé plutôt que craint", 
            "Réponse : le prince doit être craint plutôt qu'aimé", 
            "Réponse : le prince doit être à la fois craint et aimé"
        ], 
        correct: 2,
        explanation: "Dans un autre chapitre du Prince, Machiavel affirme qu'« il est beaucoup plus sûr d'être craint que d'être aimé ». Cette préférence pour la crainte découle de son analyse réaliste de la nature humaine : les hommes sont changeants, ingrats, hypocrites, et abandonnent plus facilement celui qu'ils aiment que celui qu'ils craignent. Cependant, le prince doit éviter d'être haï, car la haine peut provoquer des conspirations. Cette dialectique entre crainte et amour montre la sophistication de l'analyse machiavélienne : il ne s'agit pas simplement de choisir entre terreur et bienveillance, mais de doser habilement les deux. Le prince doit inspirer suffisamment de crainte pour être obéi, mais pas au point de susciter la haine. Cette gestion des affects politiques annonce les analyses modernes du leadership et de la légitimité."
    },

    // Question n°35
    { 
        question: "Question n°35 : Quelle est la place de la trahison dans la pensée politique de Machiavel ?",
        answers: [
            "Réponse : la trahison est toujours condamnable", 
            "Réponse : la trahison peut être nécessaire pour conserver le pouvoir", 
            "Réponse : la trahison est le pire des crimes politiques"
        ], 
        correct: 2,
        explanation: "Machiavel reconnaît que la trahison peut être un moyen nécessaire pour conserver le pouvoir dans certaines situations. Cette position choquante pour la morale traditionnelle découle de son analyse des réalités politiques : dans un monde où les autres princes n'hésitent pas à trahir, celui qui respecterait toujours ses engagements se mettrait en danger. Cependant, Machiavel conseille aussi de ne pas trahir inutilement, car la réputation de perfidie peut nuire à long terme. Il s'agit donc de calculer soigneusement les avantages et les inconvénients de la trahison dans chaque situation particulière. Cette approche utilitariste de la fidélité politique constitue l'un des aspects les plus controversés du machiavélisme. Elle montre à quel point Machiavel a rompu avec l'éthique chevaleresque et la conception chrétienne de la parole donnée."
    },

    // Question n°36
    { 
        question: "Question n°36 : Comment Machiavel conçoit-il la relation entre ancienneté et nouveauté en politique ?",
        answers: [
            "Réponse : l'ancienneté est toujours préférable à la nouveauté", 
            "Réponse : la nouveauté est toujours préférable à l'ancienneté", 
            "Réponse : chaque situation exige une appréciation spécifique"
        ], 
        correct: 3,
        explanation: "Machiavel adopte une position nuancée sur la relation entre ancienneté et nouveauté en politique. D'un côté, il reconnaît les avantages de l'ancienneté : un prince héréditaire bénéficie d'une légitimité traditionnelle qui lui épargne certaines difficultés. De l'autre, il valorise la nouveauté : un prince nouveau, s'il est habile, peut accomplir de grandes choses et fonder un État durable. Cette appréciation contextuelle montre le refus machiavélien des dogmes absolus. L'important n'est pas d'être ancien ou nouveau en soi, mais de savoir tirer parti de sa situation particulière. Le prince nouveau doit être particulièrement attentif aux conseils de Machiavel car il fait face à des défis spécifiques, mais cela ne signifie pas que l'ancienneté soit sans valeur. Cette approche dialectique caractérise la subtilité de la pensée machiavélienne."
    },

    // Question n°37
    { 
        question: "Question n°37 : Quelle est la conception machiavélienne du temps en politique ?",
        answers: [
            "Réponse : le temps est cyclique et les mêmes situations reviennent", 
            "Réponse : le temps est linéaire et chaque situation est unique", 
            "Réponse : le temps est une illusion sans importance politique"
        ], 
        correct: 1,
        explanation: "Machiavel a une conception cyclique du temps politique : les mêmes situations tendent à se répéter à travers l'histoire, ce qui permet d'en tirer des leçons générales. Cette idée, influencée par la pensée antique, fonde sa méthode historique : en étudiant le passé, on peut comprendre le présent et anticiper l'avenir. Cependant, cette cyclicité n'est pas un déterminisme strict : le prince vertueux peut, par sa virtù, infléchir le cours des événements. Cette dialectique entre répétition historique et action humaine caractérise la pensée machiavélienne du temps. Elle justifie à la fois l'étude des exemples historiques (car les situations se répètent) et l'importance de la décision politique (car l'homme peut modifier le cours des choses). Cette conception annonce les philosophies de l'histoire modernes qui cherchent à concilier régularité historique et liberté humaine."
    },

    // Question n°38
    { 
        question: "Question n°38 : Comment Machiavel comprend-il la notion de « conseil » politique ?",
        answers: [
            "Réponse : le prince doit toujours suivre les conseils de ses ministres", 
            "Réponse : le prince doit décider seul sans conseil", 
            "Réponse : le prince doit écouter les conseils mais garder sa liberté de décision"
        ], 
        correct: 3,
        explanation: "Machiavel conseille au prince d'écouter les avis de ses conseillers mais de garder toujours sa liberté de décision. Cette position médiane reflète sa compréhension réaliste des relations de pouvoir : les conseillers peuvent apporter des informations et des analyses utiles, mais ils poursuivent aussi leurs propres intérêts. Le prince doit donc savoir discerner les conseils sincères des manœuvres intéressées, et prendre ses décisions en toute indépendance. Cette conception du conseil politique s'oppose à la fois à l'autocratie absolue (qui refuse tout conseil) et à la domination des ministres (qui réduisent le prince à un figurant). Elle fait du prince un décideur éclairé qui sait utiliser l'expertise sans s'y soumettre. Cette approche préfigure les conceptions modernes du leadership et de la prise de décision en situation d'incertitude."
    },

    // Question n°39
    { 
        question: "Question n°39 : Quelle est la place des passions dans la pensée politique de Machiavel ?",
        answers: [
            "Réponse : les passions doivent être éliminées de la politique", 
            "Réponse : les passions sont des forces qu'il faut comprendre et utiliser", 
            "Réponse : les passions n'ont aucune importance politique"
        ], 
        correct: 2,
        explanation: "Pour Machiavel, les passions (crainte, amour, haine, ambition, etc.) sont des forces politiques essentielles qu'il faut comprendre et utiliser plutôt qu'éliminer. Contrairement aux philosophies qui prônent la domination rationnelle des passions, Machiavel les considère comme des données fondamentales de la vie collective. Le prince habile est celui qui sait manipuler les passions de ses sujets et de ses ennemis pour conserver son pouvoir. Cette attention aux dimensions affectives et irrationnelles de la politique constitue l'une des originalités de sa pensée. Elle annonce la psychologie politique moderne et les analyses des mécanismes de l'influence et de la persuasion. Pour Machiavel, la politique n'est pas seulement une affaire de raison et d'intérêt, mais aussi de passions et d'émotions qu'il faut savoir canaliser à son profit."
    },

    // Question n°40
    { 
        question: "Question n°40 : Comment Machiavel conçoit-il la relation entre politique et économie ?",
        answers: [
            "Réponse : l'économie doit être subordonnée à la politique", 
            "Réponse : la politique doit être subordonnée à l'économie", 
            "Réponse : politique et économie sont complètement séparées"
        ], 
        correct: 1,
        explanation: "Machiavel subordonne clairement l'économie à la politique : la richesse n'est qu'un moyen au service de la puissance de l'État. Cette conception mercantiliste avant l'heure s'explique par le contexte des cités-États italiennes où la prospérité économique était inséparable de la puissance militaire. Pour Machiavel, un État riche mais faible est voué à être conquis ; un État puissant mais pauvre peut toujours s'enrichir par la conquête. Cette primauté du politique sur l'économique s'oppose aux conceptions libérales modernes qui font de l'économie un domaine autonome. Elle reflète une vision où la survie et l'expansion de l'État sont les valeurs suprêmes, auxquelles tout doit être subordonné. Cette perspective justifie les politiques économiques interventionnistes et les mesures exceptionnelles en temps de crise."
    },

    // Question n°41
    { 
        question: "Question n°41 : Quelle est la conception machiavélienne de la justice ?",
        answers: [
            "Réponse : la justice est une valeur absolue qui doit toujours guider le prince", 
            "Réponse : la justice est ce qui sert la conservation du pouvoir", 
            "Réponse : la justice n'a aucune place en politique"
        ], 
        correct: 2,
        explanation: "Pour Machiavel, la justice n'est pas une valeur absolue mais un instrument au service de la conservation du pouvoir. Le prince doit paraître juste pour gagner la confiance de ses sujets, mais il ne doit pas hésiter à commettre des injustices si elles sont nécessaires à la survie de l'État. Cette conception instrumentale de la justice rompt avec la tradition philosophique qui faisait de la justice la fin et le fondement du politique. Elle réduit la justice à une apparence utile plutôt qu'à une réalité substantielle. Cette position extrême découle de l'observation des régimes réels où les princes les plus justes ne sont pas nécessairement les plus durables. Pour Machiavel, dans un monde imparfait et dangereux, l'injustice peut parfois être plus « juste » (au sens politique) qu'une justice rigide qui mettrait l'État en péril."
    },

    // Question n°42
    { 
        question: "Question n°42 : Comment Machiavel comprend-il la notion de « prudence » politique ?",
        answers: [
            "Réponse : comme une vertu morale de modération", 
            "Réponse : comme un calcul rationnel des risques et des opportunités", 
            "Réponse : comme une intuition mystique"
        ], 
        correct: 2,
        explanation: "Pour Machiavel, la prudence politique n'est pas une vertu morale de modération (comme dans la tradition aristotélicienne) mais un calcul rationnel des risques et des opportunités. Cette prudence machiavélienne est inséparable de la virtù : elle consiste à évaluer correctement les situations, à anticiper les conséquences des actions, et à choisir le moment opportun pour agir. Contrairement à la prudence morale qui vise à éviter le mal, la prudence politique vise à maximiser les chances de succès. Elle implique une connaissance fine des hommes et des situations, une capacité à dissimuler ses intentions, et une habileté à retourner les difficultés en avantages. Cette conception instrumentale de la prudence fait du prince un stratège plutôt qu'un moraliste, un calculateur plutôt qu'un idéaliste."
    },

    // Question n°43
    { 
        question: "Question n°43 : Quelle est la place de la violence dans la pensée politique de Machiavel ?",
        answers: [
            "Réponse : la violence doit toujours être évitée", 
            "Réponse : la violence peut être nécessaire et doit être utilisée de manière calculée", 
            "Réponse : la violence est le seul fondement du pouvoir"
        ], 
        correct: 2,
        explanation: "Machiavel reconnaît que la violence peut être nécessaire en politique et doit être utilisée de manière calculée et efficace. Contrairement aux moralistes qui condamnent absolument la violence, il montre qu'elle est parfois indispensable pour fonder ou conserver un État. Cependant, il conseille aussi de l'utiliser avec mesure : une violence excessive peut susciter la haine et provoquer des révoltes. Le prince doit donc savoir doser la violence, l'utilisant quand elle est nécessaire mais évitant la cruauté gratuite. Cette approche pragmatique de la violence constitue l'un des aspects les plus controversés du machiavélisme. Elle fonde une conception réaliste du pouvoir où la force n'est ni glorifiée ni diabolisée, mais considérée comme un instrument parmi d'autres, dont il faut savoir user avec discernement."
    },

    // Question n°44
    { 
        question: "Question n°44 : Comment Machiavel conçoit-il la relation entre tradition et innovation en politique ?",
        answers: [
            "Réponse : la tradition doit toujours être respectée", 
            "Réponse : l'innovation doit toujours primer sur la tradition", 
            "Réponse : il faut savoir rompre avec la tradition quand c'est nécessaire"
        ], 
        correct: 3,
        explanation: "Machiavel adopte une position dialectique sur la relation entre tradition et innovation : il faut en général respecter les traditions car elles assurent la stabilité, mais savoir les rompre quand c'est nécessaire pour sauver l'État. Cette flexibilité découle de son pragmatisme : ce qui compte, ce n'est pas de suivre des règles absolues, mais d'adapter son action aux exigences de la situation. Un prince trop attaché aux traditions peut perdre son pouvoir face à un ennemi plus innovant ; un prince qui bouleverse toutes les traditions risque de susciter l'hostilité de son peuple. L'art politique consiste donc à doser savamment continuité et rupture, à innover dans la mesure nécessaire tout en préservant l'essentiel de l'ordre établi. Cette conception anti-dogmatique caractérise l'ensemble de la pensée machiavélienne."
    },

    // Question n°45
    { 
        question: "Question n°45 : Quelle est la conception machiavélienne du « bien commun » ?",
        answers: [
            "Réponse : le bien commun est la fin ultime de la politique", 
            "Réponse : le bien commun est un instrument de légitimation du pouvoir", 
            "Réponse : le bien commun n'existe pas"
        ], 
        correct: 2,
        explanation: "Pour Machiavel, le « bien commun » est avant tout un instrument de légitimation du pouvoir plutôt que la fin ultime de la politique. Le prince doit parler du bien commun et paraître s'y dévouer pour gagner le soutien de son peuple, mais en réalité, sa préoccupation première est la conservation de son pouvoir. Cette conception instrumentale du bien commun rompt avec la tradition républicaine qui en faisait le fondement et la finalité de la vie politique. Elle reflète une vision réaliste où les discours sur le bien commun servent souvent à masquer des intérêts particuliers. Cependant, Machiavel ne nie pas totalement l'existence du bien commun : il reconnaît qu'un prince qui gouverne mal finira par perdre le pouvoir. Le bien commun devient ainsi un moyen indirect de conservation du pouvoir plutôt qu'une fin en soi."
    },

    // Question n°46
    { 
        question: "Question n°46 : Comment Machiavel comprend-il la notion de « légitimité » politique ?",
        answers: [
            "Réponse : la légitimité vient de Dieu", 
            "Réponse : la légitimité vient de l'efficacité à conserver le pouvoir", 
            "Réponse : la légitimité vient du consentement populaire"
        ], 
        correct: 2,
        explanation: "Machiavel propose une conception pragmatique de la légitimité politique : est légitime le pouvoir qui réussit à se maintenir et à assurer l'ordre. Cette conception « par les résultats » s'oppose aux conceptions traditionnelles qui fondaient la légitimité sur la naissance (monarchie héréditaire), sur Dieu (droit divin), ou sur la vertu (république). Pour Machiavel, ces justifications idéales comptent moins que l'efficacité réelle. Un prince nouveau qui réussit à unifier un pays et à lui donner la paix est plus légitime qu'un prince héréditaire qui le plonge dans le chaos. Cette conception anticipatrice fait de la réussite politique le critère ultime de légitimité. Elle annonce les théories modernes de la légitimité par les performances (performance legitimacy) et prépare le terrain aux justifications utilitaristes du pouvoir."
    },

    // Question n°47
    { 
        question: "Question n°47 : Quelle est la place de la ruse dans l'art de gouverner selon Machiavel ?",
        answers: [
            "Réponse : la ruse est toujours condamnable", 
            "Réponse : la ruse est souvent plus efficace que la force", 
            "Réponse : la ruse est inutile en politique"
        ], 
        correct: 2,
        explanation: "Pour Machiavel, la ruse (l'astuce, la tromperie, la dissimulation) est souvent plus efficace que la force brutale dans l'art de gouverner. Cette préférence pour la ruse découle de son analyse de la nature humaine crédible et de sa recherche de l'efficacité politique. La ruse permet d'atteindre ses objectifs à moindre coût, sans déclencher de conflits ouverts ni susciter de résistances frontales. Cependant, Machiavel conseille de doser ruse et force : la ruse pure peut être découverte et discréditer le prince, tandis que la force pure peut provoquer la haine. Le prince habile est celui qui sait combiner les deux, utilisant la ruse quand elle suffit et la force quand elle devient nécessaire. Cette conception stratégique de la ruse annonce les analyses modernes de la realpolitik et de la géopolitique."
    },

    // Question n°48
    { 
        question: "Question n°48 : Comment Machiavel conçoit-il la relation entre public et privé ?",
        answers: [
            "Réponse : la vie privée du prince doit être exemplaire", 
            "Réponse : le prince doit avoir une double vie : publique et privée", 
            "Réponse : la vie privée n'a aucune importance politique"
        ], 
        correct: 2,
        explanation: "Machiavel établit une distinction radicale entre la vie publique et la vie privée du prince. En public, le prince doit paraître vertueux, pieux, généreux ; en privé, il peut être tout le contraire si les circonstances l'exigent. Cette dissociation entre l'homme privé et le personnage public constitue l'une des innovations les plus importantes de la pensée machiavélienne. Elle fonde une conception moderne de la politique comme scène où se joue un rôle plutôt que comme expression d'une identité authentique. Le prince devient ainsi un acteur qui interprète un personnage vertueux tout en gardant sa liberté d'action dans l'ombre. Cette distinction annonce les analyses contemporaines de la communication politique et de la construction médiatique des leaders. Elle justifie également l'idée que les actions privées d'un gouvernant n'ont d'importance que dans la mesure où elles affectent sa capacité à gouverner."
    },

    // Question n°49
    { 
        question: "Question n°49 : Quelle est la conception machiavélienne de la gloire ?",
        answers: [
            "Réponse : la gloire vient de la sainteté", 
            "Réponse : la gloire vient du succès politique durable", 
            "Réponse : la gloire est une illusion sans valeur"
        ], 
        correct: 2,
        explanation: "Pour Machiavel, la gloire ne vient pas de la sainteté ou de la vertu morale, mais du succès politique durable. Un prince qui réussit à fonder un État stable, à le défendre contre ses ennemis, et à lui assurer la prospérité, acquiert une gloire immortelle. Cette conception immanente et politique de la gloire s'oppose aux conceptions chrétiennes qui la situent dans l'au-delà. Elle fait de l'action dans le monde le seul chemin vers l'immortalité. Cette recherche de la gloire terrestre anime le prince machiavélien et justifie ses actions les plus discutables : pour atteindre une grande fin (la fondation d'un État durable), tous les moyens sont permis. Cette conception héroïque et tragique de la politique annonce les philosophies de l'histoire modernes qui font des grands hommes les moteurs du progrès historique."
    },

    // Question n°50
    { 
        question: "Question n°50 : Quelle est la postérité de la pensée machiavélienne ?",
        answers: [
            "Réponse : elle a été complètement rejetée et oubliée", 
            "Réponse : elle a influencé profondément la pensée politique moderne", 
            "Réponse : elle n'a eu aucune influence réelle"
        ], 
        correct: 2,
        explanation: "La pensée machiavélienne a influencé profondément la pensée politique moderne, malgré (ou à cause de) son caractère scandaleux. Dès le XVIe siècle, Le Prince a été mis à l'Index par l'Église catholique mais largement lu et commenté dans les cours européennes. Au XVIIe siècle, des penseurs comme Hobbes ont développé son réalisme politique en le systématisant. Au XVIIIe siècle, Rousseau a dénoncé son immoralité tout en reconnaissant son acuité analytique. Au XIXe siècle, Hegel et Marx ont vu en lui un précurseur de la pensée moderne de l'État. Au XXe siècle, des théoriciens comme Gramsci et Strauss ont renouvelé son interprétation. Aujourd'hui encore, le « machiavélisme » reste une référence incontournable pour penser les rapports entre éthique et politique, entre moyens et fins, entre pouvoir et moralité. Son héritage ambigu continue de nourrir les débats les plus actuels sur la démocratie, le leadership et la realpolitik."
    }
];

// ============================================
// NOTES IMPORTANTES POUR LA COMPATIBILITÉ
// ============================================

/*
IMPORTANT : Ce fichier est compatible avec le HTML fourni qui contient :

1. Une fonction formatPhilosophyText() qui convertit les retours chariot en paragraphes
2. Une fonction formatSource() qui met en italique seulement la partie après la première virgule
3. Un système de quiz qui pioche aléatoirement 10 questions parmi les 50 disponibles

Le texte philosophique utilise des retours chariot (\n) qui seront automatiquement 
convertis en paragraphes distincts dans l'affichage.

Chaque question a exactement 3 réponses (comme attendu par le code HTML).
Les indices corrects commencent maintenant à 1 (première réponse = 1, deuxième = 2, troisième = 3).
Les explications contiennent désormais 3-4 phrases détaillant la réponse.
*/