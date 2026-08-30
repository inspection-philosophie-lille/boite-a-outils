// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Kant";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: `« [1] Qu'est-ce que les Lumières ? [2] La sortie de l'homme de sa minorité dont il est lui-même responsable. [3] Minorité, c'est-à-dire incapacité de se servir de son entendement sans la direction d'autrui. [4] Minorité dont il est lui-même responsable, puisque la cause en réside non dans un défaut de l'entendement, mais dans un manque de décision et de courage de s'en servir sans la direction d'autrui. [5] Sapere aude ! [6] Aie le courage de te servir de ton propre entendement. [7] Voilà la devise des Lumières. [8] La paresse et la lâcheté sont les causes qui expliquent qu'un si grand nombre d'hommes, après que la nature les a affranchis depuis longtemps d'une direction étrangère… restent cependant volontiers leur vie durant mineurs, et qu'ils soient si facile à d'autres de se poser en tuteur des premiers. [9] Il est si aisé d'être mineur ! [10] Si j'ai un livre qui me tient lieu d'entendement, un directeur qui me tient lieu de conscience, un médecin qui décide pour moi de mon régime etc., je n'ai vraiment pas besoin de me donner de peine moi-même. [11] Je n'ai pas besoin de penser, pourvu que je puisse payer ; d'autres se chargeront bien de ce travail ennuyeux. [12] Il est donc difficile pour chaque individu de sortir tout seul de la minorité qui est presque pour lui devenue un état naturel »`,

	source: "KANT, Réponse à la question : Qu'est-ce que les Lumières ?, trad. J.-F. Poirier et F. Proust, Paris, Flammarion, [1784] 1991, p.43"
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================
const questions = [
    {
        question: "Question n°1 : Comment Kant définit-il les Lumières ?",
        answers: [
            "l'acquisition de connaissances scientifiques",
            "la sortie de l'homme de sa minorité dont il est lui-même responsable",
            "l'obéissance à l'autorité éclairée"
        ],
        correct: 2,
        explanation: "La définition correcte est donnée explicitement au début du texte : « La sortie de l'homme de sa minorité dont il est lui-même responsable. » Cette formulation place la responsabilité individuelle au cœur du processus d'émancipation, plutôt qu'un progrès collectif ou institutionnel. Cette perspective fait de l'accession aux Lumières un acte moral et courageux plutôt qu'une simple accumulation de savoir. Elle s'inscrit dans la pensée kantienne qui valorise l'autonomie de la volonté et la sortie de la tutelle intellectuelle comme condition de la moralité."
    },
    {
        question: "Question n°2 : Que signifie « minorité » dans ce texte ?",
        answers: [
            "être jeune d'âge",
            "incapacité de se servir de son entendement sans la direction d'autrui",
            "avoir un statut social inférieur"
        ],
        correct: 2,
        explanation: "Kant définit explicitement la minorité comme « incapacité de se servir de son entendement sans la direction d'autrui », détournant ainsi le sens juridique vers un concept philosophique. Cette redéfinition transforme la minorité d'un état naturel lié à l'âge en un état d'esprit caractérisé par la dépendance intellectuelle. Elle permet à Kant de critiquer non pas les jeunes, mais toute personne qui renonce à exercer sa propre raison. Cette conception est cohérente avec son impératif d'autonomie, central dans sa philosophie morale et politique."
    },
    {
        question: "Question n°3 : Pourquoi l'homme est-il responsable de sa minorité selon Kant ?",
        answers: [
            "parce qu'il naît naturellement ignorant",
            "parce que la cause réside dans un défaut de l'entendement",
            "parce que la cause réside dans un manque de décision et de courage"
        ],
        correct: 3,
        explanation: "Kant précise que « la cause en réside non dans un défaut de l'entendement, mais dans un manque de décision et de courage », ce qui fonde la responsabilité individuelle. Cette affirmation est cruciale car elle écarte tout déterminisme naturel ou social qui exonérerait l'individu de sa condition. Elle transforme la minorité d'un destin subi en un choix passif, engageant la liberté et la volonté de chacun. Cette idée s'articule avec l'éthique kantienne pour laquelle la liberté humaine implique nécessairement la responsabilité des choix individuels."
    },
    {
        question: "Question n°4 : Que signifie la formule latine « Sapere aude ! » ?",
        answers: [
            "pense par toi-même",
            "aie le courage de te servir de ton propre entendement",
            "connais-toi toi-même"
        ],
        correct: 2,
        explanation: "Kant traduit lui-même la formule par « Aie le courage de te servir de ton propre entendement », insistant ainsi sur la dimension volontaire et courageuse de l'acte. Cette traduction souligne que l'émancipation intellectuelle n'est pas seulement une capacité cognitive, mais un acte de bravoure face à la paresse et à la peur. Elle implique que la raison ne s'exerce véritablement que lorsqu'elle est assumée avec audace et détermination personnelles. On retrouve ici l'importance de la disposition morale (le courage) comme condition de l'usage pratique de la raison, thème présent dans toute la philosophie pratique de Kant."
    },
    {
        question: "Question n°5 : Que constitue « Sapere aude ! » pour Kant ?",
        answers: [
            "le principe fondamental de la métaphysique",
            "la devise des Lumières",
            "une maxime morale universelle"
        ],
        correct: 2,
        explanation: "Kant déclare explicitement : « Voilà la devise des Lumières », élevant ainsi cette maxime au rang de principe directeur du siècle. Cette attribution donne à la formule une portée historique et collective, en faisant le mot d'ordre d'un mouvement culturel et philosophique tout entier. Elle résume l'idéal d'autonomie intellectuelle qui doit guider non seulement les philosophes, mais l'humanité dans son progrès vers la maturité. Cette idée s'inscrit dans la vision kantienne d'un progrès historique de l'humanité vers un usage public et éclairé de la raison."
    },
    {
        question: "Question n°6 : Quelles sont les deux causes principales qui maintiennent les hommes dans la minorité ?",
        answers: [
            "l'ignorance et la pauvreté",
            "la paresse et la lâcheté",
            "l'oppression politique et religieuse"
        ],
        correct: 2,
        explanation: "Kant identifie clairement « la paresse et la lâcheté » comme les causes psychologiques de la minorité. Ce diagnostic déplace l'origine du problème des structures sociales vers les dispositions intérieures de l'individu, faisant de la minorité une affaire de caractère et de volonté. Il suggère que l'oppression extérieure (des tuteurs) prospère sur un terrain préparé par ces vices intérieurs. Cette analyse psychologique est cohérente avec la philosophie morale kantienne qui voit dans la paresse (indolentia) et la lâcheté un obstacle majeur à l'accomplissement du devoir et de la vertu."
    },
    {
        question: "Question n°7 : Pourquoi selon Kant est-il « si aisé d'être mineur » ?",
        answers: [
            "parce que l'État y encourage",
            "parce qu'on n'a pas besoin de penser par soi-même",
            "parce que c'est notre condition naturelle"
        ],
        correct: 2,
        explanation: "Kant explique cette facilité par le confort intellectuel : être mineur dispense de l'effort de penser et de décider par soi-même. Cette économie cognitive représente un gain immédiat et tangible, contrairement aux bénéfices incertains et lointains de l'autonomie. Elle crée une inertie psychologique puissante qui retient les hommes dans l'état de tutelle. Cette thèse rejoint l'analyse kantienne de la nature humaine, partagée entre la raison qui pousse vers l'autonomie et les penchants qui recherchent le confort et l'évitement de l'effort."
    },
    {
        question: "Question n°8 : Quel exemple Kant donne-t-il pour illustrer la facilité de rester mineur ?",
        answers: [
            "avoir un livre qui tient lieu d'entendement",
            "suivre les coutumes traditionnelles",
            "obéir aux lois sans les questionner"
        ],
        correct: 1,
        explanation: "Kant énumère plusieurs exemples concrets : « un livre qui me tient lieu d'entendement, un directeur qui me tient lieu de conscience, un médecin qui décide pour moi de mon régime ». Ces exemples montrent la délégation de la pensée à des autorités extérieures dans différents domaines (intellectuel, moral, pratique). Ils illustrent comment la dépendance s'étend à toutes les sphères de la vie, créant une aliénation généralisée. Cette critique de la substitution des jugements personnels par des autorités externes s'accorde avec la défense kantienne de l'autonomie comme fondement de la dignité humaine dans ses œuvres morales."
    },
    {
        question: "Question n°9 : Que permet l'argent selon le texte lorsqu'on veut éviter de penser ?",
        answers: [
            "d'acheter la liberté",
            "de payer d'autres pour penser à notre place",
            "d'accéder à l'éducation"
        ],
        correct: 2,
        explanation: "Kant écrit ironiquement : « Je n'ai pas besoin de penser, pourvu que je puisse payer ; d'autres se chargeront bien de ce travail ennuyeux. » Cette observation révèle comment la division du travail et l'économie marchande peuvent pervertir l'idéal des Lumières en permettant d'acheter des substituts à la pensée personnelle. L'argent devient alors un moyen de perpétuer sa minorité tout en ayant l'apparence de la culture et du savoir. Cette critique annonce les analyses modernes de l'aliénation et montre la perspicacité de Kant quant aux risques de marchandisation de la pensée."
    },
    {
        question: "Question n°10 : Pourquoi est-il difficile de sortir de la minorité ?",
        answers: [
            "parce que la société l'interdit",
            "parce que c'est presque devenu un état naturel",
            "parce que cela nécessite une intelligence exceptionnelle"
        ],
        correct: 2,
        explanation: "Kant conclut que la minorité est « presque pour lui devenue un état naturel », signifiant que l'habitude de dépendance est tellement ancrée qu'elle semble innée. Cette naturalisation de l'habitude crée une seconde nature qui rend la sortie de la minorité contre-intuitive et psychologiquement coûteuse. L'individu doit lutter contre ses propres automatismes et le confort de la familiarité. Cette idée de l'habitude comme « seconde nature » rejoint des thèmes classiques en philosophie, mais Kant l'applique spécifiquement à la dépendance intellectuelle, en cohérence avec sa vision de l'éducation comme processus d'émancipation progressive."
    },
    {
        question: "Question n°11 : Quelle est la thèse paradoxale concernant majorité et minorité selon Kant ?",
        answers: [
            "La majorité est majeure, la minorité est mineure",
            "La majorité est mineure, la minorité est majeure",
            "Tous les hommes naissent majeurs"
        ],
        correct: 2,
        explanation: "Kant suggère que la majorité numérique (le plus grand nombre) reste dans un état de minorité intellectuelle, tandis qu'une minorité seulement atteint la majorité véritable. Ce paradoxe révèle l'écart entre la capacité potentielle d'autonomie (dont tous sont dotés) et sa réalisation effective (rare). Il met en lumière le caractère non spontané et exigeant de l'émancipation intellectuelle. Cette thèse est cohérente avec la vision kantienne du progrès historique comme processus lent et difficile, nécessitant un effort collectif et individuel soutenu."
    },
    {
        question: "Question n°12 : Quel terme traduit le mieux « Aufklärung » en français ?",
        answers: [
            "Illumination",
            "Éclaircissement/Explication",
            "Révolution"
        ],
        correct: 2,
        explanation: "Le terme allemand « Aufklärung » dérive du verbe « aufklären » qui signifie éclaircir, expliquer, élucider. Cette traduction met l'accent sur le processus actif de clarification rationnelle plutôt que sur le résultat statique d'une illumination. Elle correspond à l'idée d'un travail méthodique de la raison pour dissiper les obscurités de l'ignorance et des préjugés. Cette conception s'accorde avec la méthode critique de Kant, qui privilégie l'examen rationnel systématique sur l'intuition ou la révélation."
    },
    {
        question: "Question n°13 : Que fait la lumière selon la philosophie des Lumières ?",
        answers: [
            "Elle ajoute quelque chose à la réalité",
            "Elle retire ce qui obscurcit l'intelligence",
            "Elle crée une nouvelle réalité"
        ],
        correct: 2,
        explanation: "La métaphore de la lumière suggère un acte de révélation : elle ne crée pas l'objet, mais permet de le voir en dissipant les ténèbres qui l'obscurcissent. Appliquée à l'intelligence, cette image signifie que la raison permet de voir clair dans les problèmes en éliminant préjugés, superstitions et dogmes. Cette conception s'oppose à un constructivisme radical et maintient l'idée d'une vérité accessible à la raison. On retrouve ici l'optimisme rationaliste de Kant, confiant dans la capacité de la raison à atteindre la vérité lorsqu'elle est correctement employée."
    },
    {
        question: "Question n°14 : Que signifie « s'affranchir d'une direction étrangère » ?",
        answers: [
            "devenir indépendant politiquement",
            "se libérer de la tutelle intellectuelle d'autrui",
            "échapper à l'autorité parentale"
        ],
        correct: 2,
        explanation: "L'expression « direction étrangère » désigne toute influence extérieure qui guide la pensée à la place de la raison autonome. S'en affranchir signifie donc atteindre l'autonomie intellectuelle complète, où l'individu pense et juge par lui-même. Cette libération est rendue possible par la maturation naturelle, mais doit être activement choisie et entretenue. Cette idée d'autonomie intellectuelle comme affranchissement de toute autorité externe non rationnelle est un pilier de la philosophie kantienne, liée à sa conception de la liberté comme obéissance à la loi qu'on s'est prescrite."
    },
    {
        question: "Question n°15 : Qui sont les « tuteurs » dont parle Kant ?",
        answers: [
            "les parents et éducateurs",
            "ceux qui se posent en guides intellectuels pour les mineurs",
            "les autorités politiques"
        ],
        correct: 2,
        explanation: "Les tuteurs sont tous ceux qui, profitant de la paresse intellectuelle des autres, « se posent en tuteur » en offrant leurs jugements comme substituts à la pensée personnelle. Cette catégorie peut inclure des autorités religieuses, des experts, des intellectuels, ou toute personne exerçant une influence intellectuelle non fondée sur la raison autonome de l'autre. Leur pouvoir repose sur la complicité passive des mineurs qui préfèrent cette dépendance. Cette analyse anticipe les critiques modernes des figures d'autorité intellectuelle et des mécanismes de domination symbolique."
    },
    {
        question: "Question n°16 : Quelle est la condition première pour les Lumières selon ce texte ?",
        answers: [
            "l'éducation formelle",
            "le courage d'utiliser sa propre raison",
            "la liberté politique"
        ],
        correct: 2,
        explanation: "Kant place clairement le courage (« aude ») comme condition première, avant même l'éducation ou la liberté politique. Ce primat du courage souligne que l'émancipation intellectuelle est d'abord une décision éthique et un acte de volonté. Même dans des conditions favorables, sans courage, l'individu restera dans la minorité par confort. Cette priorité donnée à la disposition morale sur les conditions externes est caractéristique de l'éthique kantienne, qui fait de la bonne volonté le seul bien inconditionnel."
    },
    {
        question: "Question n°17 : Que rejette Kant comme cause de la minorité ?",
        answers: [
            "le manque d'éducation",
            "un défaut de l'entendement",
            "l'oppression sociale"
        ],
        correct: 2,
        explanation: "Kant affirme explicitement que la cause de la minorité « ne réside pas dans un défaut de l'entendement », rejetant ainsi toute explication naturaliste ou essentialiste. Ce rejet est fondamental car il fonde la responsabilité individuelle : si la minorité venait d'une incapacité naturelle, elle serait un destin et non un choix. Il ouvre la possibilité de l'émancipation pour tous, indépendamment de leurs capacités intellectuelles naturelles. Cette position est cohérente avec l'universalisme kantien, qui postule l'égalité fondamentale de la raison chez tous les êtres humains."
    },
    {
        question: "Question n°18 : Comment Kant caractérise-t-il le travail de penser ?",
        answers: [
            "comme une joie naturelle",
            "comme un travail ennuyeux",
            "comme un devoir moral"
        ],
        correct: 2,
        explanation: "Kant note que ceux qui restent mineurs considèrent la pensée comme « ce travail ennuyeux » qu'ils préfèrent déléguer. Cette caractérisation révèle la perception négative de l'effort intellectuel dans la psychologie commune. Elle explique pourquoi l'autonomie est si rare : elle exige de surmonter la répulsion naturelle pour l'effort cognitif. Cette analyse psychologique réaliste montre que Kant ne sous-estime pas les obstacles concrets à l'émancipation, malgré son optimisme rationnel."
    },
    {
        question: "Question n°19 : Quelle est la dimension morale de la sortie de la minorité ?",
        answers: [
            "c'est un choix courageux et responsable",
            "c'est un devoir envers la société",
            "c'est une exigence religieuse"
        ],
        correct: 1,
        explanation: "Kant présente la sortie de la minorité comme un acte dont l'homme « est lui-même responsable », ce qui en fait un choix moral engageant la responsabilité individuelle. Cette dimension morale dépasse la simple acquisition de connaissances pour toucher à l'accomplissement de soi comme être rationnel et libre. Elle transforme l'émancipation intellectuelle en impératif éthique personnel. Cette connexion entre autonomie intellectuelle et moralité est au cœur du projet kantien d'unifier raison théorique et raison pratique."
    },
    {
        question: "Question n°20 : Que permet la minorité selon Kant ?",
        answers: [
            "l'ordre et la stabilité sociale",
            "de ne pas se donner de peine soi-même",
            "une vie plus heureuse et paisible"
        ],
        correct: 2,
        explanation: "Kant identifie le principal avantage de la minorité dans le fait qu'« on n'a vraiment pas besoin de se donner de peine soi-même ». Cet avantage immédiat et tangible explique l'attrait psychologique de la dépendance intellectuelle. Il crée une forme de confort cognitif qui compense largement, aux yeux du mineur, les inconvénients de l'hétéronomie. Cette analyse des bénéfices secondaires de la servitude volontaire montre la profondeur de la réflexion kantienne sur les ressorts psychologiques de l'aliénation."
    },
    {
        question: "Question n°21 : Quelle est la nature du processus des Lumières selon Kant ?",
        answers: [
            "un processus collectif et historique",
            "une conversion religieuse",
            "une libération principalement individuelle et courageuse"
        ],
        correct: 3,
        explanation: "Kant insiste sur la difficulté pour « chaque individu de sortir tout seul », soulignant ainsi le caractère d'abord individuel de l'émancipation. Bien qu'il reconnaisse l'importance du contexte social, il présente les Lumières comme une décision personnelle qui précède et rend possible tout progrès collectif. Cette priorité donnée à l'individu reflète la conception kantienne de la moralité comme affaire de volonté individuelle. Elle influence durablement la conception libérale de l'autonomie personnelle comme fondement de la vie sociale."
    },
    {
        question: "Question n°22 : Que signifie « sortir » de la minorité ?",
        answers: [
            "devenir majeur légalement",
            "opérer une transformation intellectuelle et morale",
            "quitter la maison familiale"
        ],
        correct: 2,
        explanation: "« Sortir » désigne ici une transformation complète de l'être : passer de l'hétéronomie intellectuelle à l'autonomie du jugement, de la dépendance à la responsabilité. Cette métamorphose implique non seulement des compétences cognitives, mais aussi des vertus morales comme le courage et la persévérance. C'est un changement de régime dans l'usage de sa raison. Cette conception de l'émancipation comme transformation profonde de la personne s'inscrit dans la tradition philosophique du « souci de soi » et de la conversion spirituelle, mais Kant la laïcise et la rationalise."
    },
    {
        question: "Question n°23 : À quel siècle et courant philosophique ce texte appartient-il ?",
        answers: [
            "XVIIe siècle - Rationalisme",
            "XVIIIe siècle - Lumières",
            "XIXe siècle - Idéalisme allemand"
        ],
        correct: 2,
        explanation: "Le texte est publié en 1784, au cœur du siècle des Lumières (Aufklärung), dont Kant est l'un des plus éminents représentants. Il s'inscrit dans le courant philosophique qui prône la raison, la critique et l'émancipation intellectuelle. Ce contexte explique les préoccupations du texte : l'autonomie, le progrès, la lutte contre les préjugés. Kant représente ici la forme la plus aboutie et réflexive des Lumières, celle qui interroge ses propres conditions de possibilité."
    },
    {
        question: "Question n°24 : Que signifie « être responsable de son irresponsabilité » selon Kant ?",
        answers: [
            "Être puni pour ce qu'on ne contrôle pas",
            "Le comble de l'irresponsabilité",
            "Une contradiction logique"
        ],
        correct: 2,
        explanation: "Cette formule paradoxale désigne la situation de l'homme qui est responsable de ne pas assumer sa responsabilité intellectuelle. C'est l'apogée de l'irresponsabilité car il s'agit d'un refus délibéré de la liberté et de l'autonomie que la raison rend possibles. Cette situation est moralement plus grave qu'une simple ignorance, car elle implique une faute active de la volonté. Cette analyse rejoint la conception kantienne du mal comme perversion de la volonté, qui préfère l'hétéronomie à l'autonomie."
    },
    {
        question: "Question n°25 : Comment devient-on mineur selon Kant ?",
        answers: [
            "On naît mineur",
            "On devient mineur par habitude",
            "La société nous rend mineurs"
        ],
        correct: 2,
        explanation: "Kant suggère que tout se passe comme si on naissait potentiellement majeurs (dotés de raison) et qu'on devenait mineurs par habitude, par conformisme et par manque de courage. La minorité est donc une « seconde nature » acquise, le résultat d'un processus de déresponsabilisation progressive. Cette conception inverse l'idée commune selon laquelle la maturité viendrait naturellement avec l'âge. Elle souligne le rôle actif que joue l'individu dans son propre infantilisation, même si cette action est souvent passive (laisser-faire)."
    },
    {
        question: "Question n°26 : Que veut dire Kant par « état naturel » à la fin du texte ?",
        answers: [
            "Un état inné et biologique",
            "Une habitude devenue spontanée",
            "Un déterminisme génétique"
        ],
        correct: 2,
        explanation: "L'expression « presque devenu un état naturel » désigne une habitude tellement ancrée par la répétition qu'elle fonctionne comme une nature. Cette « seconde nature » rend la minorité aussi familière et évidente qu'un instinct, bien qu'elle reste fondamentalement artificielle et acquise. Cette naturalisation de l'habitude explique pourquoi il est si difficile de la remettre en question. Cette notion de « seconde nature » a une longue histoire philosophique (Aristote, Hegel) et Kant l'utilise ici pour expliquer l'inertie psychologique de la dépendance intellectuelle."
    },
    {
        question: "Question n°27 : Pourquoi la sortie de la minorité doit-elle être collective selon Kant ?",
        answers: [
            "Parce que l'État doit l'imposer",
            "Parce qu'on ne peut s'émanciper tout seul",
            "Parce que la pensée est forcément sociale"
        ],
        correct: 2,
        explanation: "Kant suggère que l'émancipation individuelle est difficilement viable en solitaire, car elle suppose un environnement intellectuel favorable et des modèles d'autonomie. La sortie collective crée un cercle vertueux où les individus émancipés s'encouragent mutuellement et renforcent ainsi leur autonomie face aux pressions conformistes. Cela ne diminue pas la responsabilité individuelle, mais reconnaît l'importance des conditions sociales pour la soutenir. Cette idée annonce les théories contemporaines de l'émancipation qui articulent transformation individuelle et changement social."
    },
    {
        question: "Question n°28 : De quoi doit se méfier le philosophe selon la pensée des Lumières ?",
        answers: [
            "À la science",
            "À l'opinion commune",
            "À ses propres idées"
        ],
        correct: 2,
        explanation: "Le philosophe doit se méfier particulièrement de l'opinion commune non critique, car elle tend à imposer des préjugés sans examen rationnel. Cette méfiance méthodique est au cœur de l'autonomie intellectuelle : il faut soumettre toute croyance au tribunal de la raison, quelle que soit son ancienneté ou sa popularité. Cette attitude définit la posture critique caractéristique des Lumières. Elle est parfaitement illustrée par la démarche kantienne elle-même, qui soumet à l'examen critique les fondements de la métaphysique, de la morale et de la connaissance."
    },
    {
        question: "Question n°29 : Que recherche le philosophe à la place de l'opinion ?",
        answers: [
            "La certitude absolue",
            "Le savoir objectif",
            "L'intuition immédiate"
        ],
        correct: 2,
        explanation: "Le philosophe ambitionne de remplacer l'opinion subjective et incertaine par un savoir objectif et fondé rationnellement. Cette recherche n'exclut pas la modestie épistémique (reconnaissance des limites de la connaissance), mais elle s'oppose au relativisme qui mettrait toutes les opinions sur le même plan. L'objectivité ici ne signifie pas une vérité absolue et définitive, mais une connaissance justifiée et communicable. Cette exigence reflète l'idéal scientifique des Lumières que Kant cherche à étendre à tous les domaines de la pensée."
    },
    {
        question: "Question n°30 : Comment se reconnaît le philosophe selon la tradition philosophique ?",
        answers: [
            "À son rejet des certitudes",
            "À son goût de la certitude et son sens de l'ambiguïté",
            "À sa capacité à simplifier les problèmes"
        ],
        correct: 2,
        explanation: "Le philosophe authentique combine paradoxalement le goût de la certitude (recherche de vérités solides) et le sens de l'ambiguïté (conscience des complexités et des limites du savoir). Cette tension féconde définit la posture philosophique par opposition au dogmatisme (certitude sans nuance) comme au scepticisme absolu (nuance sans certitude). Cette double exigence caractérise parfaitement la démarche kantienne, qui cherche à établir les limites certaines de la connaissance tout en reconnaissant les incertitudes de son contenu."
    },
    {
        question: "Question n°31 : Que signifie l'expression « un livre qui me tient lieu d'entendement » ?",
        answers: [
            "Un livre qu'on comprend mal",
            "Un livre qui pense à notre place",
            "Un livre trop complexe"
        ],
        correct: 2,
        explanation: "Cette expression illustre la tendance à substituer la pensée d'autrui (celle de l'auteur) à sa propre réflexion. Le livre, au lieu d'être un outil pour développer son jugement, devient une prothèse intellectuelle qui dispense de l'effort personnel. Cette perversion de la fonction du livre montre comment même les instruments de culture peuvent servir à entretenir la dépendance. Kant critique ici une certaine relation passive au savoir, contraire à l'idéal d'une raison active et critique."
    },
    {
        question: "Question n°32 : Dans le texte, que sont « la paresse et la lâcheté » ?",
        answers: [
            "Des péchés capitaux",
            "Des causes psychologiques de la minorité",
            "Des défauts naturels"
        ],
        correct: 2,
        explanation: "Kant identifie la paresse (refus de l'effort intellectuel) et la lâcheté (peur des responsabilités et des conséquences de la pensée autonome) comme les ressorts psychologiques fondamentaux qui expliquent pourquoi les hommes « restent volontiers leur vie durant mineurs ». Ces dispositions caractérielles sont plus déterminantes que les obstacles externes car elles rendent l'individu complice de sa propre servitude. Cette analyse rejoint la conception kantienne des penchants naturels qui s'opposent à l'exercice de la raison et de la moralité."
    },
    {
        question: "Question n°33 : Que signifie « la nature les a affranchis » ?",
        answers: [
            "La biologie les a libérés",
            "Ils ont atteint l'âge adulte biologiquement",
            "Ils sont indépendants économiquement"
        ],
        correct: 2,
        explanation: "Kant évoque l'affranchissement naturel par la maturation biologique, qui rend théoriquement possible l'autonomie intellectuelle à l'âge adulte. Cet affranchissement physique (devenir biologiquement adulte) contraste avec le maintien volontaire dans la minorité intellectuelle. Il crée une tension entre la capacité objective et la réalisation effective, mettant en lumière la responsabilité de l'individu dans cet écart. Cette idée souligne que l'émancipation intellectuelle n'est pas un processus naturel spontané, mais nécessite un acte de volonté qui dépasse la simple maturation biologique."
    },
    {
        question: "Question n°34 : D'après le texte, pourquoi certains deviennent-ils tuteurs ?",
        answers: [
            "Par altruisme",
            "Parce que c'est facile face à des mineurs",
            "Par devoir professionnel"
        ],
        correct: 2,
        explanation: "Kant observe qu'« il est si facile à d'autres de se poser en tuteur » face à des individus qui préfèrent la dépendance intellectuelle. Cette facilité attire naturellement ceux qui aiment exercer de l'influence ou du pouvoir sur autrui, créant une relation symbiotique entre mineurs et tuteurs. Les tuteurs tirent satisfaction et pouvoir de cette position, tandis que les mineurs y trouvent le confort de ne pas penser. Cette analyse des motivations des « gardiens » anticipe les critiques modernes des relations de pouvoir dans le domaine intellectuel et éducatif."
    },
    {
        question: "Question n°35 : Que critique Kant à travers l'exemple du médecin ?",
        answers: [
            "L'incompétence des médecins",
            "La démission de sa propre réflexion",
            "Le coût des soins médicaux"
        ],
        correct: 2,
        explanation: "L'exemple du médecin qui décide du régime illustre la tendance à déléguer totalement des décisions qui devraient impliquer notre propre jugement, même dans des domaines qui nous concernent directement. Kant ne critique pas la médecine ou l'expertise en soi, mais la démission intellectuelle qui consiste à renoncer à toute réflexion personnelle au profit d'une autorité extérieure. Cette critique s'applique à tous les domaines où l'on pourrait exercer son jugement. Elle rejoint la défense kantienne de l'autonomie comme principe régulateur de toutes les sphères de la vie humaine."
    },
    {
        question: "Question n°36 : Comment comprendre « manque de décision » dans ce contexte ?",
        answers: [
            "Incapacité à prendre des décisions pratiques",
            "Refus de décider d'utiliser son entendement",
            "Indécision pathologique"
        ],
        correct: 2,
        explanation: "Le « manque de décision » désigne spécifiquement le refus de prendre la décision fondamentale de se servir de son propre entendement. C'est une décision méta-cognitive qui engage tout le rapport à la pensée, précédant et conditionnant toutes les autres décisions particulières. Ce manque n'est pas une incapacité, mais un refus actif, une abdication de la liberté intellectuelle. Cette idée est cohérente avec la conception kantienne de la liberté comme capacité à initier une série causale par un acte de volonté, capacité que le mineur refuse d'exercer."
    },
    {
        question: "Question n°37 : Quelle est la relation entre « entendement » et « raison » dans ce texte ?",
        answers: [
            "Ce sont des synonymes",
            "L'entendement est inférieur à la raison",
            "La raison guide l'entendement"
        ],
        correct: 1,
        explanation: "Dans ce texte, Kant utilise « entendement » dans un sens large équivalent à la faculté de penser de manière autonome, englobant ce qu'il distingue ailleurs entre entendement (faculté des concepts) et raison (faculté des principes). Cette simplification permet de s'adresser à un public large et de concentrer le propos sur l'opposition entre autonomie et hétéronomie plutôt que sur des distinctions techniques. Elle montre comment Kant adapte son vocabulaire selon le contexte, sans pour autant trahir sa pensée fondamentale sur l'autonomie de la raison."
    },
    {
        question: "Question n°38 : À quoi est comparée la philosophie des Lumières ?",
        answers: [
            "À un moutonnement",
            "À une démoutonnisation de la tête",
            "À un élevage ovin"
        ],
        correct: 2,
        explanation: "On pourrait dire métaphoriquement que la philosophie des Lumières vise à « démoutonniser la tête », c'est-à-dire à libérer les individus de la pensée grégaire et du conformisme intellectuel. Cette image souligne l'aspect collectif et mimétique de la minorité, où les individus suivent docilement les opinions dominantes sans les examiner. L'émancipation consiste alors à briser cette mentalité de troupeau pour penser par soi-même. Cette métaphore, bien que non littéralement présente chez Kant, capture bien l'esprit de sa critique du conformisme intellectuel."
    },
    {
        question: "Question n°39 : Quelle est l'origine de la formule « Sapere aude » ?",
        answers: [
            "Cicéron",
            "Horace",
            "Sénèque"
        ],
        correct: 2,
        explanation: "L'expression « sapere aude » est empruntée au poète latin Horace (Épîtres, I, 2, 40). Kant la reprend et la réinterprète dans le contexte des Lumières, transformant une maxime de sagesse personnelle en principe d'émancipation collective. Cet emprunt montre comment les Lumières se nourrissent de la tradition classique tout en la réorientant vers de nouvelles préoccupations. Il illustre également la dimension humaniste du projet kantien, qui dialogue avec l'Antiquité tout en innovant radicalement."
    },
    {
        question: "Question n°40 : Comment interpréter « sapere » chez Horace ?",
        answers: [
            "Savoir théorique",
            "Avoir du goût, être soi-même",
            "Être sage"
        ],
        correct: 2,
        explanation: "Chez Horace, « sapere » signifie littéralement « avoir du goût » (cf. « savourer ») et par extension « être sensé, avoir du jugement, être soi-même ». Cette dimension sensible et personnelle enrichit l'interprétation kantienne, suggérant que l'autonomie intellectuelle implique aussi une forme d'authenticité et de singularité personnelle. Elle ajoute une dimension esthétique et existentielle à l'idéal rationnel des Lumières. Cette lecture montre la complexité de la réception kantienne de l'Antiquité, qui sélectionne et transforme ses sources selon ses propres préoccupations."
    },
    {
        question: "Question n°41 : Que signifie l'expression « état devenu naturel » dans le texte de Kant ?",
        answers: [
            "Un état purement biologique",
            "Une habitude tellement ancrée qu'elle semble innée",
            "Un retour à l'état de nature"
        ],
        correct: 2,
        explanation: "Kant décrit une habitude de dépendance intellectuelle tellement ancienne et répétée qu'elle fonctionne comme une nature. Cette naturalisation de l'habitude est un processus psychologique par lequel des comportements acquis finissent par paraître évidents et nécessaires. Elle rend particulièrement difficile la prise de conscience de leur caractère artificiel et, partant, la possibilité de s'en libérer. Cette notion de « seconde nature » est importante dans la philosophie moderne pour penser la socialisation et ses effets contraignants."
    },
    {
        question: "Question n°42 : Quel risque menace l'opinion publique ?",
        answers: [
            "De devenir trop critique",
            "D'être flattée et manipulée (démagogie)",
            "De disparaître"
        ],
        correct: 2,
        explanation: "L'opinion publique non critique est particulièrement vulnérable à la démagogie, c'est-à-dire à la manipulation par des discours flatteurs et simplificateurs qui confortent les préjugés plutôt que de les mettre en question. Ce risque justifie la méfiance du philosophe envers l'opinion et son souci de lui substituer un jugement éclairé. Kant anticipe ici les dangers politiques des sociétés modernes où l'opinion publique, mal informée et peu critique, peut être instrumentalisée. Cette préoccupation annonce les réflexions contemporaines sur les médias et la démocratie délibérative."
    },
    {
        question: "Question n°43 : Que faut-il distinguer de l'opinion publique ?",
        answers: [
            "L'opinion scientifique",
            "L'opinion commune",
            "L'opinion philosophique"
        ],
        correct: 2,
        explanation: "Il importe de distinguer l'opinion publique (médiatisée, institutionnalisée, souvent manipulée) de l'opinion commune (spontanée, partagée dans les interactions quotidiennes, moins formalisée). Cette distinction permet d'analyser plus finement les mécanismes de formation et de diffusion des croyances collectives. Elle est importante pour comprendre comment les préjugés circulent et se renforcent dans une société. Bien que Kant n'opère pas explicitement cette distinction, elle est implicite dans son analyse des différents niveaux de la vie intellectuelle collective."
    },
    {
        question: "Question n°44 : De quoi le philosophe doit-il se méfier ?",
        answers: [
            "De l'orthodoxie (mainstream)",
            "De l'innovation",
            "De la solitude"
        ],
        correct: 1,
        explanation: "Penser par soi-même implique nécessairement une méfiance envers l'orthodoxie intellectuelle, c'est-à-dire les idées dominantes non examinées qui s'imposent par leur ancienneté ou leur popularité plutôt que par leur validité rationnelle. Cette attitude critique est au cœur de l'autonomie kantienne, qui refuse toute autorité non fondée sur la raison. Elle définit la posture des Lumières face aux traditions et aux pouvoirs établis. Cette méfiance méthodique est constitutive de la pensée critique dans toutes ses dimensions."
    },
    {
        question: "Question n°45 : Que remplace le philosophe par la critique ?",
        answers: [
            "La science",
            "L'opinion",
            "La métaphysique"
        ],
        correct: 2,
        explanation: "Le philosophe remplace l'opinion non fondée par la critique méthodique et le savoir rationnellement justifié. Cette substitution constitue l'opération fondamentale de la philosophie des Lumières : passer de l'adhésion non réfléchie aux croyances établies à l'examen systématique et autonome de toutes les assertions. Le terme « critique » renvoie directement au projet kantien de « critique de la raison » qui examine les conditions de possibilité et les limites de notre connaissance. Cette substitution définit le programme intellectuel des Lumières dans son ensemble."
    },
    {
        question: "Question n°46 : Selon le texte, que se passe-t-il si je peux payer ?",
        answers: [
            "Je deviens libre",
            "Je n'ai pas besoin de penser",
            "Je peux acheter des livres"
        ],
        correct: 2,
        explanation: "Kant écrit explicitement : « Je n'ai pas besoin de penser, pourvu que je puisse payer. » Cette observation révèle comment la richesse peut paradoxalement favoriser l'aliénation intellectuelle en permettant d'acheter les services de ceux qui pensent à notre place. L'argent devient alors un moyen de perpétuer et même de renforcer sa minorité tout en donnant l'apparence de la culture et du savoir. Cette critique anticipe les analyses de la marchandisation de la culture et du savoir dans les sociétés modernes."
    },
    {
        question: "Question n°47 : Comment Kant présente-t-il la relation entre le mineur et son tuteur ?",
        answers: [
            "Comme une relation conflictuelle",
            "Comme une relation consentie et commode",
            "Comme une relation éducative"
        ],
        correct: 2,
        explanation: "Kant décrit une relation de confort mutuel et de consentement : le mineur « reste volontiers » mineur car cela lui évite des efforts, et il est « facile » à d'autres de devenir tuteurs car cela flatte leur amour-propre et leur donne du pouvoir. Cette commodité réciproque explique la stabilité et la persistance de ce système de dépendance. Contrairement à une relation d'oppression pure, il s'agit d'une aliénation consentie, ce qui la rend plus difficile à combattre. Cette analyse rejoint la notion de « servitude volontaire » développée par La Boétie, que Kant actualise dans le domaine intellectuel."
    },
    {
        question: "Question n°48 : Que signifie « sans la direction d'autrui » ?",
        answers: [
            "Sans conseils extérieurs",
            "En autonomie intellectuelle",
            "Sans éducation"
        ],
        correct: 2,
        explanation: "Cette expression définit l'autonomie intellectuelle complète : être capable de former ses jugements, de prendre ses décisions et de conduire sa pensée sans être guidé, influencé ou déterminé par les opinions, les préjugés ou les dogmes d'autrui. C'est l'idéal même de la majorité selon Kant. Cette autonomie ne signifie pas le rejet de tout apprentissage ou dialogue, mais le refus de toute subordination intellectuelle non critique. Elle constitue la condition de possibilité d'une pensée véritablement libre et responsable."
    },
    {
        question: "Question n°49 : Quel est le problème avec la catégorie d'« adolescent » par rapport à la pensée de Kant ?",
        answers: [
            "Elle est trop récente",
            "Elle brouille la frontière enfant/adulte",
            "Elle n'existe pas chez Kant"
        ],
        correct: 2,
        explanation: "Notre culture moderne a introduit la catégorie intermédiaire d'« adolescent », créant des distinctions floues (préadolescent, adulescent) qui complexifient la dichotomie kantienne entre mineur et majeur. Cette évolution sociologique pose la question de savoir si l'autonomie intellectuelle est un état binaire (on est soit mineur soit majeur) ou un continuum avec des degrés. Elle interroge également la relation entre maturité biologique, psychologique et intellectuelle, que Kant simplifie pour les besoins de son argument. Cette question montre les limites historiques du modèle kantien tout en en préservant la pertinence normative."
    },
    {
        question: "Question n°50 : Que permet la démocratie selon la pensée des Lumières ?",
        answers: [
            "La liberté sans contrôle",
            "Un pouvoir de contrôle par l'opinion publique",
            "L'absence de débat"
        ],
        correct: 2,
        explanation: "Dans l'idéal des Lumières, une opinion publique éclairée et critique constitue un contre-pouvoir essentiel dans une démocratie, permettant de contrôler les gouvernants et de garantir les libertés. Cette conception suppose cependant que l'opinion soit informée, raisonnée et critique, et non manipulée ou superficielle. Kant développe cette idée dans d'autres textes sur la politique et l'histoire. Elle fonde l'idéal démocratique moderne d'une citoyenneté active et éclairée, capable de participer rationnellement à la vie publique."
    }
];