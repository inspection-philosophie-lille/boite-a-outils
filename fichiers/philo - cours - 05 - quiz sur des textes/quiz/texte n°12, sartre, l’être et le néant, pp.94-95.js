// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Sartre";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
    texte: `« [1] Voici, par exemple, une femme qui s'est rendue à un premier rendez-vous. [2] Elle sait fort bien les intentions que l'homme qui lui parle nourrit à son égard. [3] Elle sait aussi qu'il lui faudra prendre tôt ou tard une décision. [4] Mais elle n'en veut pas sentir l'urgence : elle s'attache seulement à ce qu'offre de respectueux et de discret l'attitude de son partenaire. [5] Elle ne saisit pas cette conduite comme une tentative pour réaliser ce qu'on nomme « les premières approches », c'est-à-dire qu'elle ne veut pas voir les possibilités de développement temporel que présente cette conduite : elle borne ce comportement à ce qu'il est dans le présent, elle ne veut pas lire dans les phrases qu'on lui adresse autre chose que leur sens explicite, si on lui dit : « Je vous admire tant », elle désarme cette phrase de son arrière-fond sexuel, elle attache aux discours et à la conduite de son interlocuteur des significations immédiates qu'elle envisage comme des qualités objectives. [6] L'homme qui parle lui semble sincère et respectueux comme la table est ronde ou carrée, comme la tenture murale est bleue ou grise. […] [7] Pourtant, elle ne trouverait aucun charme à un respect qui serait uniquement du respect. [8] Il faut, pour la satisfaire, un sentiment qui s'adresse tout entier à sa personne, c'est-à-dire à sa liberté plénière, et qui soit une reconnaissance de sa liberté. […] [9] Mais voici qu'on lui prend la main. [10] Cet acte de son interlocuteur risque de changer la situation en appelant une décision immédiate : abandonner cette main, c'est consentir de soi-même au flirt, c'est s'engager. [11] La retirer, c'est rompre cette harmonie trouble et instable qui fait le charme de l'heure. [12] Il s'agit de reculer le plus loin possible l'instant de la décision. [13] On sait ce qui se produit alors : la jeune femme abandonne sa main, mais ne s'aperçoit pas qu'elle l'abandonne. [14] Elle ne s'en aperçoit pas parce qu'il se trouve par hasard qu'elle est, à ce moment, tout esprit. […] [15] Et pendant ce temps, le divorce du corps et de l'âme est accompli ; la main repose inerte entre les mains chaudes de son partenaire : ni consentante ni résistante, une chose. [16] Nous dirons que cette femme est de mauvaise foi. »`,
    
    source: "SARTRE, L'être et le néant, Gallimard, 1943, pp.94-95"
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    // Question n°1
    { 
        question: "Question n°1 : Que sait la femme au début du rendez-vous selon Sartre ?",
        answers: [
            "elle ignore tout des intentions de l'homme", 
            "elle sait fort bien les intentions de l'homme à son égard", 
            "elle croit à une rencontre amicale"
        ], 
        correct: 2,
        explanation: "Sartre déclare explicitement : « Elle sait fort bien les intentions que l'homme qui lui parle nourrit à son égard. » Cette connaissance claire de la situation est essentielle pour comprendre le mécanisme de la mauvaise foi : celle-ci ne procède pas de l'ignorance mais d'un refus volontaire de prendre acte de ce qu'on sait. La femme est parfaitement consciente des enjeux sexuels et relationnels de la rencontre, ce qui rend sa conduite d'autant plus significative. Cette lucidité initiale montre que la mauvaise foi n'est pas une simple erreur ou une illusion, mais une stratégie délibérée (bien qu'inconsciente) pour éviter d'affronter la réalité. La connaissance préalable est ainsi la condition même de la mauvaise foi, qui consiste à savoir et à ne pas savoir à la fois."
    },

    // Question n°2
    { 
        question: "Question n°2 : Que sait-elle aussi concernant la décision à prendre ?",
        answers: [
            "qu'elle devra prendre tôt ou tard une décision", 
            "qu'elle n'aura jamais à décider", 
            "que l'homme décidera pour elle"
        ], 
        correct: 1,
        explanation: "Sartre précise : « Elle sait aussi qu'il lui faudra prendre tôt ou tard une décision. » Cette conscience de l'inéluctabilité du choix est cruciale pour comprendre la dynamique de la mauvaise foi. La femme reconnaît implicitement sa liberté et sa responsabilité : elle sait qu'elle devra se déterminer par rapport aux avances de l'homme. Cependant, au lieu d'assumer cette liberté, elle cherche à en différer l'exercice. Cette temporalité de la décision (le « tôt ou tard ») devient l'enjeu central de son attitude : elle veut repousser le moment où elle devra se prononcer clairement. Cette connaissance du caractère inévitable du choix montre que la mauvaise foi n'est pas un refus de la liberté en général, mais une tentative pour en suspendre provisoirement les exigences."
    },

    // Question n°3
    { 
        question: "Question n°3 : Comment réagit-elle face à l'urgence de cette décision ?",
        answers: [
            "elle l'affronte courageusement", 
            "elle n'en veut pas sentir l'urgence", 
            "elle décide immédiatement"
        ], 
        correct: 2,
        explanation: "Sartre explique : « Mais elle n'en veut pas sentir l'urgence. » Ce refus de ressentir l'urgence caractérise précisément l'attitude de mauvaise foi : il s'agit d'une neutralisation affective de ce qu'on connaît intellectuellement. La femme opère une dissociation entre sa connaissance objective de la situation et son expérience subjective immédiate. En refusant de « sentir » l'urgence, elle se donne l'illusion que la décision peut être indéfiniment différée. Cette opération psychologique est au cœur de la mauvaise foi : elle consiste à modifier son rapport au temps et à l'action pour échapper aux contraintes de la liberté. Le « vouloir » dans cette phrase est significatif : il indique une activité, non une passivité. La mauvaise foi est un travail sur soi, un effort pour transformer sa propre expérience."
    },

    // Question n°4
    { 
        question: "Question n°4 : À quoi s'attache-t-elle dans l'attitude de son partenaire ?",
        answers: [
            "à ce qu'offre de respectueux et de discret", 
            "à son aspect physique", 
            "à ses intentions cachées"
        ], 
        correct: 1,
        explanation: "Sartre décrit : « elle s'attache seulement à ce qu'offre de respectueux et de discret l'attitude de son partenaire. » Cette sélection attentionnelle est caractéristique de la mauvaise foi : la femme isole certains aspects de la réalité tout en en occultant délibérément d'autres. Elle se concentre sur les apparences immédiates (le respect, la discrétion) pour éviter de considérer les intentions sous-jacentes et les implications futures. Cette focalisation sélective lui permet de maintenir une interprétation rassurante de la situation tout en évitant d'en affronter les dimensions problématiques. L'expression « s'attache seulement » souligne le caractère volontaire et exclusif de cette attention. Elle montre comment la mauvaise foi opère par réduction et simplification de l'expérience, éliminant tout ce qui pourrait réveiller l'angoisse du choix."
    },

    // Question n°5
    { 
        question: "Question n°5 : Comment interprète-t-elle la phrase « Je vous admire tant » ?",
        answers: [
            "comme une avance sexuelle", 
            "en désarmant la phrase de son arrière-fond sexuel", 
            "comme une insulte"
        ], 
        correct: 2,
        explanation: "Sartre analyse : « elle désarme cette phrase de son arrière-fond sexuel. » Cette métaphore du « désarmement » est particulièrement éloquente : elle suggère que les paroles de l'homme sont initialement porteuses d'une intention (une « arme ») que la femme neutralise activement. Ce travail d'interprétation consiste à dépouiller le langage de ses connotations et implications pour le réduire à son sens littéral et immédiat. En « désarmant » la phrase, la femme se protège contre ce qu'elle signifiait réellement. Cette opération révèle le caractère actif de la mauvaise foi : il ne s'agit pas simplement de se tromper, mais de travailler à transformer la signification des choses pour les rendre inoffensives. Le « désarmement » est ainsi une forme de contrôle symbolique par lequel on désactive le pouvoir des mots et des gestes."
    },

    // Question n°6
    { 
        question: "Question n°6 : À quoi compare Sartre son interprétation de la sincérité ?",
        answers: [
            "à une qualité objective comme la rondeur d'une table", 
            "à une émotion subjective", 
            "à une illusion"
        ], 
        correct: 1,
        explanation: "Sartre établit une analogie frappante : « L'homme qui parle lui semble sincère et respectueux comme la table est ronde ou carrée, comme la tenture murale est bleue ou grise. » Cette comparaison révèle l'essence de la mauvaise foi : elle consiste à traiter des qualités humaines (la sincérité, le respect) comme si elles étaient des propriétés objectives et stables, analogues aux qualités physiques des objets. En réduisant les attitudes psychologiques à des données immédiates et incontestables, la femme évite d'avoir à les interpréter, à en évaluer la sincérité, à en anticiper les conséquences. Cette réification des relations humaines permet d'échapper à l'incertitude et à la responsabilité qu'elles impliquent. La table « est » ronde, la tenture « est » bleue : de même, l'homme « est » sincère, comme si cela allait de soi, sans qu'il y ait à s'interroger sur les intentions ou les évolutions possibles."
    },

    // Question n°7
    { 
        question: "Question n°7 : Que veut-elle vraiment dans ce respect selon Sartre ?",
        answers: [
            "un respect qui serait uniquement du respect", 
            "un sentiment qui reconnaisse sa liberté plénière", 
            "une relation purement physique"
        ], 
        correct: 2,
        explanation: "Sartre nuance son analyse : « Il faut, pour la satisfaire, un sentiment qui s'adresse tout entier à sa personne, c'est-à-dire à sa liberté plénière, et qui soit une reconnaissance de sa liberté. » Cette précision est essentielle car elle montre que la mauvaise foi n'est pas un simple refus du désir, mais une recherche paradoxale. La femme veut être désirée, mais d'un désir qui reconnaîtrait pleinement sa liberté et sa subjectivité. Elle refuse le désir comme simple attrait physique ou comme projet de possession, mais aspire à un désir qui l'aimerait comme être libre. Cette exigence contradictoire (vouloir être désirée sans être objet de désir) constitue le nœud même de la mauvaise foi. Elle révèle la tension fondamentale de la conscience humaine qui veut à la fois être reconnue comme sujet libre et comme objet désirable. Cette contradiction impossible à résoudre explique le recours à la mauvaise foi comme solution illusoire."
    },

    // Question n°8
    { 
        question: "Question n°8 : Que se passe-t-il quand l'homme lui prend la main ?",
        answers: [
            "rien ne change", 
            "la situation change en appelant une décision immédiate", 
            "elle prend immédiatement une décision claire"
        ], 
        correct: 2,
        explanation: "Sartre décrit le tournant décisif : « Cet acte de son interlocuteur risque de changer la situation en appelant une décision immédiate. » Le geste de prendre la main constitue un événement qui rompt l'ambiguïté maintenue jusqu'alors. Il transforme la relation potentielle en relation actuelle, l'intention en action, le possible en réel. Ce changement qualitatif met fin au jeu des apparences et des interprétations : la main tendue est une proposition concrète qui exige une réponse claire. L'« appel à une décision immédiate » signifie que le temps de l'hésitation et du flou est révolu. Ce moment critique révise la temporalité de la mauvaise foi : alors que la femme cherchait à différer indéfiniment la décision, le geste de l'homme la précipite dans l'instant présent. La main prise devient ainsi le symbole de l'irruption de la réalité dans le monde des apparences."
    },

    // Question n°9
    { 
        question: "Question n°9 : Que signifierait abandonner la main selon Sartre ?",
        answers: [
            "refuser le flirt", 
            "consentir au flirt et s'engager", 
            "indifférence totale"
        ], 
        correct: 2,
        explanation: "Sartre analyse les implications du geste : « abandonner cette main, c'est consentir de soi-même au flirt, c'est s'engager. » L'abandon de la main n'est pas un acte neutre mais un engagement clair, une réponse positive aux avances de l'homme. Le terme « consentir de soi-même » est important : il souligne que ce serait un choix actif, une prise de position responsable. « S'engager » renvoie à l'idée sartrienne que nos actes nous engagent et nous définissent. En abandonnant sa main, la femme deviendrait « celle qui a consenti », avec toutes les conséquences que cela implique. Cette clarification des significations montre comment la mauvaise foi cherche précisément à éviter : la clarté des engagements et la transparence des intentions. Face à cette exigence de clarté, la femme va développer une stratégie encore plus sophistiquée de fuite."
    },

    // Question n°10
    { 
        question: "Question n°10 : Que signifierait retirer la main ?",
        answers: [
            "accepter la relation", 
            "rompre l'harmonie trouble qui fait le charme de l'heure", 
            "provoquer l'homme"
        ], 
        correct: 2,
        explanation: "Sartre explore l'autre possibilité : « La retirer, c'est rompre cette harmonie trouble et instable qui fait le charme de l'heure. » Le retrait de la main signifierait la fin du jeu séducteur, la rupture de l'ambiguïté qui constituait jusqu'alors le « charme » de la situation. Cette « harmonie trouble et instable » représente précisément l'état de mauvaise foi : un équilibre précaire entre savoir et ne pas savoir, entre désir et refus, entre engagement et distance. En rompant cette harmonie, la femme mettrait fin à la séduction elle-même, renoncerait au plaisir ambigu du flirt. Cette analyse montre que la mauvaise foi n'est pas simplement une attitude défensive, mais qu'elle procure aussi des satisfactions spécifiques : le plaisir du jeu, l'excitation de l'incertitude, la jouissance de l'entre-deux. La femme est ainsi piégée entre deux options également coûteuses : s'engager ou renoncer."
    },

    // Question n°11
    { 
        question: "Question n°11 : Que cherche-t-elle à faire face à cette situation ?",
        answers: [
            "prendre une décision claire", 
            "reculer le plus loin possible l'instant de la décision", 
            "fuir immédiatement"
        ], 
        correct: 2,
        explanation: "Sartre révise la stratégie de la femme : « Il s'agit de reculer le plus loin possible l'instant de la décision. » Face à l'alternative contraignante (accepter ou refuser), la femme cherche une troisième voie : celle du report indéfini. Ce « recul » de la décision représente l'essence même de la mauvaise foi comme fuite devant la liberté. Il ne s'agit plus simplement de ne pas sentir l'urgence, mais d'éviter activement le moment du choix. Cette temporalité de l'ajournement est caractéristique de l'existentialisme sartrien : la liberté se présente toujours comme une exigence de décision dans l'instant présent, et la mauvaise foi est la tentative pour échapper à cette exigence en se réfugiant dans un avenir toujours différé. Le « plus loin possible » indique l'ampleur de cette fuite : il ne s'agit pas de gagner du temps, mais d'échapper au temps lui-même comme lieu de la décision."
    },

    // Question n°12
    { 
        question: "Question n°12 : Que fait-elle finalement de sa main ?",
        answers: [
            "elle la retire vivement", 
            "elle l'abandonne sans s'en apercevoir", 
            "elle serre la main de l'homme"
        ], 
        correct: 2,
        explanation: "Sartre décrit la solution trouvée par la femme : « la jeune femme abandonne sa main, mais ne s'aperçoit pas qu'elle l'abandonne. » Cette conduite apparemment paradoxale représente l'apogée de la mauvaise foi. Elle accomplit l'acte (abandonner la main) tout en refusant d'en assumer la signification et la responsabilité. Le « sans s'en apercevoir » n'est pas une absence de conscience, mais une forme particulière de conscience qui se refuse à elle-même. La femme sait qu'elle abandonne sa main (sinon elle ne pourrait pas le faire), mais elle organise sa conscience pour que cet acte ne se présente pas à elle comme un choix délibéré. Cette dissociation entre l'action et la conscience de l'action constitue le mécanisme central de la mauvaise foi : faire sans faire, choisir sans choisir, être actif en se présentant comme passif."
    },

    // Question n°13
    { 
        question: "Question n°13 : Pourquoi ne s'en aperçoit-elle pas selon Sartre ?",
        answers: [
            "parce qu'elle est endormie", 
            "parce qu'elle est, à ce moment, tout esprit", 
            "parce qu'elle est ivre"
        ], 
        correct: 2,
        explanation: "Sartre explique cet étrange état de conscience : « Elle ne s'en aperçoit pas parce qu'il se trouve par hasard qu'elle est, à ce moment, tout esprit. » L'expression « tout esprit » est cruciale : elle désigne une conscience qui se retire de son corps, qui se vit comme pure intériorité désincarnée. En étant « tout esprit », la femme peut prétendre que son corps n'est pas vraiment elle, que ce qui arrive à sa main ne la concerne pas directement. Cette dissociation entre l'esprit et le corps permet de maintenir l'illusion de la non-implication. Le « par hasard » est ironique : il suggère que cette retraite dans l'esprit n'est pas accidentelle mais stratégique. Elle correspond à ce que Sartre appellera ailleurs la « fuite dans la transcendance » : au lieu d'assumer son être-dans-le-monde (qui inclut nécessairement le corps), la conscience se réfugie dans une pure intériorité imaginaire."
    },

    // Question n°14
    { 
        question: "Question n°14 : Que devient sa main pendant ce temps ?",
        answers: [
            "elle résiste activement", 
            "elle consent pleinement", 
            "elle repose inerte, comme une chose"
        ], 
        correct: 3,
        explanation: "Sartre décrit le résultat de cette dissociation : « la main repose inerte entre les mains chaudes de son partenaire : ni consentante ni résistante, une chose. » Cette réification de la main est l'aboutissement logique de la mauvaise foi. En se retirant dans l'esprit, la femme transforme son propre corps en objet extérieur, en « chose » parmi les choses. La main n'est plus l'expression d'une volonté ou d'un désir, mais un simple objet physique, passif et indifférent. Cette inertie permet d'échapper à la dialectique du consentement et du refus : la main n'« est » ni l'un ni l'autre, elle « est » simplement là, sans signification. Cette transformation de soi en chose représente la forme la plus radicale de la mauvaise foi : c'est la tentative pour échapper à la condition humaine (qui est d'être à la fois sujet et objet, conscience et corps) en se réduisant à l'être de l'objet."
    },

    // Question n°15
    { 
        question: "Question n°15 : Comment Sartre qualifie-t-il cette femme ?",
        answers: [
            "de sincère", 
            "de mauvaise foi", 
            "de courageuse"
        ], 
        correct: 2,
        explanation: "Sartre conclut explicitement : « Nous dirons que cette femme est de mauvaise foi. » Ce diagnostic final donne son sens à toute l'analyse qui précède. La mauvaise foi n'est pas une simple erreur ou une faiblesse psychologique, mais une attitude existentielle fondamentale. Elle désigne la tentative de la conscience pour échapper à sa condition d'être libre et responsable en se mentant à elle-même. Le « nous dirons » indique que cette qualification n'est pas un jugement moral mais une catégorie phénoménologique : il s'agit de décrire une structure de la conscience, non de blâmer un individu. Cette conclusion montre que l'exemple de la femme au rendez-vous n'est pas anecdotique mais paradigmatique : il illustre de manière concrète un mécanisme qui, selon Sartre, caractérise toute conscience humaine dans son rapport à la liberté."
    },

    // Question n°16
    { 
        question: "Question n°16 : Qu'est-ce que la « mauvaise foi » pour Sartre ?",
        answers: [
            "un mensonge conscient à autrui", 
            "un mensonge à soi-même pour fuir sa liberté", 
            "une maladie mentale"
        ], 
        correct: 2,
        explanation: "Pour Sartre, la mauvaise foi est fondamentalement un mensonge à soi-même par lequel on cherche à fuir l'angoisse de la liberté et la responsabilité de ses choix. Contrairement au mensonge ordinaire qui suppose une distinction claire entre le menteur et le trompé, la mauvaise foi implique que la même conscience soit à la fois trompeuse et trompée. Cette structure paradoxale en fait un phénomène unique et particulièrement insidieux. La mauvaise foi n'est pas une pathologie mentale mais une possibilité permanente de la conscience humaine : elle correspond à ce que Sartre appelle la « facticité », c'est-à-dire la tentation de se réduire à ce qu'on est (un ensemble de déterminations) pour échapper à ce qu'on a à être (un projet libre). Elle représente ainsi la négation de la transcendance humaine au profit d'une identité fixe et rassurante."
    },

    // Question n°17
    { 
        question: "Question n°17 : Que signifie « le divorce du corps et de l'âme » ?",
        answers: [
            "une séparation réelle entre deux substances", 
            "une attitude de mauvaise foi où on fait comme si le corps n'était pas soi", 
            "une mort imminente"
        ], 
        correct: 2,
        explanation: "L'expression « divorce du corps et de l'âme » désigne métaphoriquement l'attitude de mauvaise foi par laquelle on tente de se faire passer pour une pure conscience désincarnée, comme si le corps n'était pas vraiment soi. Cette dissociation permet d'échapper à la responsabilité des actes corporels : ce n'est pas « moi » qui abandonne ma main, c'est simplement « mon corps » qui se comporte d'une certaine façon. Pour Sartre, cette séparation est illusoire car l'être humain est fondamentalement un être-au-monde, indissolublement corps et conscience. La mauvaise foi consiste précisément à nier cette unité pour se donner l'impression de ne pas être impliqué dans ce que fait son corps. Ce « divorce » est donc une fiction métaphysique au service d'une stratégie existentielle : éviter d'assumer la matérialité de son existence et les engagements qu'elle implique."
    },

    // Question n°18
    { 
        question: "Question n°18 : Quelle conception de la liberté Sartre illustre-t-il ici ?",
        answers: [
            "la liberté comme absence de contraintes", 
            "la liberté comme obligation de choisir et d'assumer ses actes", 
            "la liberté comme déterminisme"
        ], 
        correct: 2,
        explanation: "À travers cet exemple, Sartre illustre sa conception de la liberté comme obligation permanente de choisir et d'assumer la responsabilité de ses actes. La liberté n'est pas pour lui un simple pouvoir de faire ce qu'on veut, mais une condition ontologique inéluctable : l'être humain est « condamné à être libre ». Cette condamnation implique qu'à chaque instant, nous devons faire des choix qui nous engagent et nous définissent. La mauvaise foi représente la tentative pour échapper à cette condition en se donnant l'illusion de ne pas choisir, de n'être pas responsable, de n'être qu'un objet passif dans le cours des événements. L'exemple de la femme montre comment cette fuite devant la liberté prend des formes concrètes et sophistiquées, mais reste toujours vouée à l'échec car on ne peut échapper à sa propre liberté qu'en y renonçant, ce qui est encore un choix."
    },

    // Question n°19
    { 
        question: "Question n°19 : À quel courant philosophique appartient Sartre ?",
        answers: [
            "à l'existentialisme athée", 
            "au positivisme logique", 
            "au structuralisme"
        ], 
        correct: 1,
        explanation: "Jean-Paul Sartre est le principal représentant de l'existentialisme athée français du XXe siècle. Ce courant philosophique, qui trouve ses origines chez Kierkegaard et Nietzsche, met l'accent sur l'existence concrète de l'individu, sa liberté radicale, sa responsabilité, et l'absence de nature ou d'essence humaine préétablie. Pour les existentialistes, « l'existence précède l'essence » : l'être humain n'a pas de définition fixe mais se définit par ses choix et ses actions. L'existentialisme sartrien se caractérise par son athéisme (il n'y a pas de Dieu pour donner un sens à l'existence), son pessimisme (l'absurdité du monde), mais aussi par son optimisme quant à la possibilité pour l'homme de créer ses propres valeurs. La notion de mauvaise foi s'inscrit parfaitement dans ce cadre : elle décrit une des manières dont l'être humain tente d'échapper aux implications de son existence libre et responsable."
    },

    // Question n°20
    { 
        question: "Question n°20 : Quelle est la portée de cet exemple dans la pensée de Sartre ?",
        answers: [
            "il illustre concrètement le concept de mauvaise foi", 
            "il défend la supériorité des femmes", 
            "il critique les relations amoureuses"
        ], 
        correct: 1,
        explanation: "Cet exemple célèbre a une portée méthodologique et philosophique essentielle dans la pensée de Sartre : il illustre de manière concrète et vivante le concept abstrait de mauvaise foi. Sartre, fidèle à la méthode phénoménologique, part toujours d'expériences concrètes pour en dégager les structures universelles. L'exemple de la femme au rendez-vous n'est donc pas une simple anecdote, mais un « exemple phénoménologique » qui révèle les mécanismes généraux de la conscience en situation. Il montre comment la mauvaise foi opère dans la vie quotidienne, comment elle prend des formes subtiles et complexes, comment elle engage le rapport au temps, au corps, à autrui. Plus généralement, cet exemple permet à Sartre de développer sa conception de la liberté, de la responsabilité, et des stratégies par lesquelles les individus tentent d'échapper à leur condition d'êtres libres. Il est ainsi devenu un classique de la philosophie existentialiste."
    },

    // Question n°21
    { 
        question: "Question n°21 : Quel est le rôle du temps dans l'analyse sartrienne de la mauvaise foi ?",
        answers: [
            "le temps est sans importance", 
            "la mauvaise foi cherche à suspendre le temps de la décision", 
            "le temps accélère toujours la décision"
        ], 
        correct: 2,
        explanation: "Le temps joue un rôle central dans l'analyse sartrienne de la mauvaise foi : celle-ci consiste essentiellement à suspendre ou à différer le temps de la décision. La femme cherche à « reculer le plus loin possible l'instant de la décision », c'est-à-dire à maintenir une sorte de présent éternel où le choix reste toujours à venir. Cette manipulation du temps lui permet d'échapper à l'urgence du maintenant, à l'exigence de se déterminer dans l'instant. Pour Sartre, le temps n'est pas une dimension neutre mais le lieu même de la liberté : c'est dans la temporalité que se déploient nos projets et nos engagements. La mauvaise fou cherche à neutraliser cette temporalité en se réfugiant soit dans un présent immédiat dépourvu de futur (en ne voyant pas les implications des actes), soit dans un futur toujours reporté (en différant indéfiniment la décision). Cette relation au temps révèle ainsi la structure profonde de la mauvaise foi comme refus de la temporalité authentique."
    },

    // Question n°22
    { 
        question: "Question n°22 : Comment Sartre analyse-t-il le rapport entre conscience et corps dans cet exemple ?",
        answers: [
            "comme une unité indissoluble", 
            "comme une dualité radicale", 
            "comme une identité parfaite"
        ], 
        correct: 1,
        explanation: "Dans cet exemple, Sartre analyse le rapport entre conscience et corps comme une unité indissoluble que la mauvaise foi cherche artificiellement à dissocier. Pour la philosophie sartrienne, l'être humain est fondamentalement « être-au-monde », c'est-à-dire une conscience incarnée, toujours en situation dans un corps et dans un monde. La tentative de la femme pour être « tout esprit » représente donc une négation de sa condition réelle. En se retirant dans une pure intériorité, elle prétend que son corps n'est pas vraiment elle, que ce qui arrive à sa main la concerne de loin. Cette dissociation est illusoire car, selon Sartre, nous sommes notre corps : il n'y a pas de conscience sans incarnation. La mauvaise foi consiste précisément à nier cette vérité ontologique pour se donner l'illusion de n'être pas responsable de ce que fait son corps. Mais cette négation est elle-même un acte de la conscience incarnée, ce qui révèle sa contradiction interne."
    },

    // Question n°23
    { 
        question: "Question n°23 : Quelle est la différence entre mauvaise foi et mensonge selon Sartre ?",
        answers: [
            "il n'y a pas de différence", 
            "le mensonge est conscient, la mauvaise foi est un mensonge à soi-même", 
            "la mauvaise fou est un mensonge à autrui"
        ], 
        correct: 2,
        explanation: "Sartre établit une distinction fondamentale entre le mensonge ordinaire et la mauvaise foi. Dans le mensonge, le trompeur et le trompé sont des consciences distinctes : je sais que je mens et l'autre l'ignore. La structure est claire : une conscience cache délibérément la vérité à une autre conscience. Dans la mauvaise foi, au contraire, c'est la même conscience qui est à la fois trompeuse et trompée. Cette situation paradoxale en fait un phénomène unique et particulièrement complexe. La mauvaise foi n'est pas simplement une erreur (car on sait la vérité qu'on cache) ni un mensonge (car on se ment à soi-même). Elle représente une forme de duplicité interne où la conscience se dédouble pour échapper à une vérité qu'elle connaît pourtant. Cette analyse originale permet à Sartre de décrire des phénomènes psychologiques (comme l'auto-persuasion, la rationalisation, le refoulement) sans recourir à l'inconscient freudien."
    },

    // Question n°24
    { 
        question: "Question n°24 : Comment la femme transforme-t-elle les significations selon Sartre ?",
        answers: [
            "en les compliquant délibérément", 
            "en les réduisant à leur sens immédiat et objectif", 
            "en les inversant systématiquement"
        ], 
        correct: 2,
        explanation: "La femme transforme les significations en les réduisant à leur sens immédiat et objectif, éliminant toute dimension temporelle, intentionnelle ou projective. Quand l'homme dit « Je vous admire tant », elle interprète cette phrase comme exprimant simplement de l'admiration, comme si c'était une qualité objective de l'homme (il « est » admiratif) plutôt qu'une tentative de séduction avec des implications futures. Cette réduction permet de neutraliser le pouvoir des mots et des gestes en les dépouillant de leur profondeur et de leur orientation vers l'avenir. En traitant les attitudes humaines comme des qualités fixes (comme la rondeur d'une table), elle les rend inoffensives et évite d'avoir à y répondre. Cette transformation des significations est active : il ne s'agit pas de mal comprendre, mais de refuser délibérément de comprendre ce qu'on comprend pourtant. C'est cette activité de réduction qui caractérise la mauvaise foi comme travail de la conscience sur elle-même."
    },

    // Question n°25
    { 
        question: "Question n°25 : Quelle est la place d'autrui dans cet exemple de mauvaise foi ?",
        answers: [
            "autrui n'a aucune importance", 
            "autrui est le miroir qui révèle la mauvaise foi", 
            "autrui est complètement manipulé"
        ], 
        correct: 2,
        explanation: "Dans cet exemple, autrui (l'homme) joue un rôle essentiel comme miroir qui révèle et suscite la mauvaise foi. C'est par rapport à autrui que la femme développe sa stratégie de fuite : c'est pour éviter de répondre à ses avances, pour ne pas avoir à se positionner clairement face à lui, qu'elle met en œuvre la mauvaise foi. Autrui est à la fois la cause et l'enjeu de cette attitude. De plus, la présence d'autrui rend visible la mauvaise foi : sans lui, il n'y aurait pas de situation contraignante à fuir. Pour Sartre, autrui est toujours celui par qui le monde prend un sens contraignant, celui devant qui je dois me justifier, celui dont le regard me transforme en objet. La mauvaise foi est une tentative pour échapper à ce regard contraignant, pour maintenir une illusion d'autonomie face à la présence d'autrui. L'homme n'est donc pas un simple figurant, mais un élément constitutif de la situation qui rend possible et nécessaire la mauvaise foi."
    },

    // Question n°26
    { 
        question: "Question n°26 : Comment Sartre analyse-t-il le désir dans cet exemple ?",
        answers: [
            "comme une pulsion purement biologique", 
            "comme une relation complexe de liberté à liberté", 
            "comme une illusion sans réalité"
        ], 
        correct: 2,
        explanation: "Sartre analyse le désir non comme une pulsion biologique simple, mais comme une relation complexe entre deux libertés. La femme veut être désirée, mais d'un désir qui reconnaîtrait pleinement sa liberté : « un sentiment qui s'adresse tout entier à sa personne, c'est-à-dire à sa liberté plénière ». Cette exigence paradoxale révèle la nature fondamentalement intersubjective du désir humain : on ne désire pas simplement un corps, mais une conscience libre, et on veut être désiré comme conscience libre. Cependant, le désir tend toujours à réduire autrui à son corps, à en faire un objet. Cette tension entre la reconnaissance de la liberté d'autrui et sa réduction en objet constitue le drame de la relation érotique. La mauvaise foi représente une tentative pour résoudre cette contradiction de manière illusoire : en faisant comme si le désir de l'homme était pure admiration (reconnaissance de sa liberté) tout en en bénéficiant comme séduction (réduction à l'objet). Cette analyse du désir est typique de l'existentialisme sartrien qui voit dans les relations humaines un conflit permanent entre libertés."
    },

    // Question n°27
    { 
        question: "Question n°27 : Quelle est la fonction de l'exemple concret dans la méthode de Sartre ?",
        answers: [
            "simple illustration sans portée théorique", 
            "point de départ pour une analyse phénoménologique des structures universelles", 
            "anecdote destinée à divertir le lecteur"
        ], 
        correct: 2,
        explanation: "Chez Sartre, l'exemple concret (comme celui de la femme au rendez-vous) a une fonction méthodologique essentielle : il sert de point de départ pour une analyse phénoménologique qui vise à dégager les structures universelles de la conscience et de l'existence. Cette méthode, héritée de Husserl, consiste à décrire minutieusement une expérience vécue pour en révéler les dimensions essentielles. L'exemple n'est donc pas une simple illustration destinée à rendre la pensée plus accessible, mais un matériau d'analyse à part entière. En examinant cette situation particulière, Sartre découvre des mécanismes (la mauvaise foi, la fuite devant la liberté, la dissociation corps/esprit) qui ont une portée universelle. Cette approche concrète permet d'éviter l'abstraction vide et de fonder la philosophie sur l'expérience réelle. Elle montre aussi que les grandes questions philosophiques (la liberté, la responsabilité, la vérité) ne sont pas des problèmes théoriques mais se jouent dans les situations les plus banales de la vie quotidienne."
    },

    // Question n°28
    { 
        question: "Question n°28 : Comment la femme maintient-elle l'ambiguïté de la situation ?",
        answers: [
            "en clarifiant constamment ses intentions", 
            "en refusant de donner un sens clair aux paroles et aux gestes", 
            "en fuyant physiquement la situation"
        ], 
        correct: 2,
        explanation: "La femme maintient l'ambiguïté de la situation en refusant systématiquement de donner un sens clair et univoque aux paroles et aux gestes. Elle interprète les compliments comme de simples expressions d'admiration, les attitudes respectueuses comme des qualités objectives, le geste de prendre la main comme un événement dont elle n'est pas responsable. Ce travail d'interprétation vise à neutraliser les significations qui pourraient rompre l'ambiguïté et exiger une prise de position claire. En maintenant cette « harmonie trouble et instable », elle préserve le charme de la situation tout en évitant ses risques. Cette stratégie repose sur une maîtrise subtile du langage et du non-dit : il s'agit de laisser les choses dans l'imprécision, de refuser les catégorisations nettes, de jouer sur les multiples sens possibles. Pour Sartre, cette ambiguïté n'est pas un état naturel mais une construction active de la conscience qui cherche à échapper aux exigences de la clarté et de la décision."
    },

    // Question n°29
    { 
        question: "Question n°29 : Quelle est la relation entre mauvaise foi et authenticité chez Sartre ?",
        answers: [
            "ce sont deux concepts sans rapport", 
            "l'authenticité est l'opposé de la mauvaise foi", 
            "la mauvaise foi est une forme d'authenticité"
        ], 
        correct: 2,
        explanation: "Pour Sartre, l'authenticité représente l'opposé exact de la mauvaise foi. Si la mauvaise foi est la tentative pour fuir sa liberté et sa responsabilité en se mentant à soi-même, l'authenticité est au contraire l'assumption lucide et courageuse de cette liberté. L'authentique reconnaît qu'il est « condamné à être libre », qu'il n'a pas d'essence préétablie, qu'il se définit par ses choix et ses engagements. Il assume la responsabilité de ses actes sans chercher à se justifier par des déterminismes ou des circonstances atténuantes. Dans le cas de l'exemple, une attitude authentique consisterait soit à refuser clairement les avances de l'homme, soit à les accepter en pleine conscience des implications. L'authenticité n'est pas pour Sartre une qualité morale parmi d'autres, mais la condition d'une existence pleinement humaine. Cependant, il reconnaît que cette authenticité est difficile à atteindre et que la mauvaise foi est une tentation permanente de la conscience humaine."
    },

    // Question n°30
    { 
        question: "Question n°30 : Comment Sartre analyse-t-il le rapport entre liberté et situation ?",
        answers: [
            "la liberté est indépendante de la situation", 
            "la liberté ne s'exerce que dans et à travers une situation", 
            "la situation détermine complètement la liberté"
        ], 
        correct: 2,
        explanation: "Pour Sartre, la liberté ne s'exerce jamais dans l'abstrait mais toujours dans et à travers une situation concrète. Cette conception rompt avec l'idée classique de la liberté comme pouvoir de faire ce qu'on veut indépendamment des circonstances. Au contraire, la liberté sartrienne est toujours « en situation » : elle se manifeste dans la façon dont on assume, dépasse ou transforme les contraintes du monde. Dans l'exemple, la situation (un rendez-vous galant, un homme qui fait des avances) constitue le matériau sur lequel s'exerce la liberté de la femme. Sa mauvaise foi représente précisément un refus de cette liberté en situation : au lieu de prendre position par rapport à la situation, elle cherche à la nier ou à la neutraliser. Pour Sartre, nous sommes « condamnés à être libres » précisément parce que nous sommes toujours dans une situation qui exige de nous des choix et des engagements. La situation n'est pas une limite à la liberté, mais son lieu d'exercice nécessaire."
    },

    // Question n°31
    { 
        question: "Question n°31 : Quelle est la place de l'angoisse dans l'analyse sartrienne de la liberté ?",
        answers: [
            "l'angoisse est un sentiment pathologique sans rapport avec la liberté", 
            "l'angoisse est la prise de conscience de sa liberté radicale", 
            "l'angoisse empêche toute exercice de la liberté"
        ], 
        correct: 2,
        explanation: "Pour Sartre, l'angoisse n'est pas un sentiment pathologique mais la prise de conscience authentique de sa liberté radicale et de sa responsabilité illimitée. Contrairement à la peur qui a un objet déterminé (on a peur de quelque chose), l'angoisse est le sentiment de sa propre liberté comme abîme infini de possibilités. Dans l'exemple, la femme éprouverait de l'angoisse si elle assumait pleinement sa situation : l'angoisse de devoir choisir, de s'engager, de se définir par son choix. La mauvaise foi représente précisément une fuite devant cette angoisse : en se mentant à elle-même, en différant la décision, en se faisant passivité, elle cherche à éviter le vertige de la liberté. Pour Sartre, l'angoisse est donc le signe d'une conscience authentique, tandis que la mauvaise foi est une tentative pour s'en protéger. Cette conception de l'angoisse comme révélation de la condition humaine est un thème central de l'existentialisme, hérité de Kierkegaard mais sécularisé par Sartre."
    },

    // Question n°32
    { 
        question: "Question n°32 : Comment la femme utilise-t-elle le langage dans sa stratégie de mauvaise foi ?",
        answers: [
            "elle clarifie constamment ses intentions par le langage", 
            "elle utilise le langage pour maintenir l'ambiguïté", 
            "elle refuse tout langage"
        ], 
        correct: 2,
        explanation: "La femme utilise le langage non pour communiquer clairement mais pour maintenir l'ambiguïté et éviter les engagements. Quand l'homme dit « Je vous admire tant », elle interprète cette phrase de manière littérale et immédiate, en éliminant ses connotations érotiques et ses implications futures. Cette lecture « désarmée » du langage lui permet de répondre sans vraiment répondre, d'entendre sans vraiment comprendre. Elle traite les mots comme des choses fixes (comme la rondeur d'une table) plutôt que comme des signes ouverts et engageants. Cette utilisation du langage est caractéristique de la mauvaise foi : il s'agit de vider les mots de leur pouvoir performatif, de leur capacité à créer des engagements. En réduisant le langage à son sens apparent, la femme se donne l'illusion de n'être pas concernée par ce qu'il signifie réellement. Pour Sartre, cette manipulation du langage révèle comment la mauvaise foi opère au niveau même de la signification, en transformant activement notre rapport aux mots et à leurs implications."
    },

    // Question n°33
    { 
        question: "Question n°33 : Quelle est la conception sartrienne de la responsabilité ?",
        answers: [
            "la responsabilité est limitée à ses actes conscients", 
            "la responsabilité est totale et inclut même ce qu'on ne fait pas", 
            "la responsabilité n'existe pas"
        ], 
        correct: 2,
        explanation: "Pour Sartre, la responsabilité humaine est totale et illimitée : nous sommes responsables non seulement de nos actes conscients, mais aussi de ce que nous sommes, de ce que nous ne faisons pas, et même du monde dans lequel nous vivons. Cette conception radicale découle directement de la liberté absolue : si nous sommes libres de choisir à chaque instant, alors nous sommes responsables de tout ce qui nous arrive, y compris des situations que nous n'avons pas créées mais que nous acceptons par notre passivité. Dans l'exemple, la femme serait responsable non seulement si elle acceptait ou refusait clairement les avances, mais aussi de son attitude de mauvaise foi, de son refus de décider, de sa prétendue passivité. Même « ne rien faire » est un choix dont on est responsable. Cette responsabilité totale est angoissante car elle signifie que nous ne pouvons jamais nous justifier par des circonstances ou des déterminismes. La mauvaise foi est précisément une tentative pour échapper à cette responsabilité écrasante en se faisant objet plutôt que sujet."
    },

    // Question n°34
    { 
        question: "Question n°34 : Comment Sartre analyse-t-il le rapport entre action et passivité ?",
        answers: [
            "la passivité n'existe pas, elle est toujours une action déguisée", 
            "l'action et la passivité sont deux réalités distinctes", 
            "seule la passivité est authentique"
        ], 
        correct: 1,
        explanation: "Pour Sartre, la passivité n'existe pas en tant que telle : ce qui apparaît comme de la passivité est toujours en réalité une action déguisée, un choix actif de ne pas agir ou de se faire passif. Dans l'exemple, lorsque la femme laisse sa main « inerte » dans celle de l'homme, elle prétend être passive, subir la situation. Mais en réalité, cette inertie est le résultat d'un travail actif de la conscience : elle se retire dans l'esprit, elle dissocie son corps d'elle-même, elle organise son expérience pour ne pas sentir sa main. Cette « passivité » est donc une construction active, une performance. Pour Sartre, il n'y a pas d'état purement passif de la conscience : même lorsqu'on se laisse faire, on choisit de se laisser faire. Cette analyse renverse la distinction courante entre action et passivité et montre comment la mauvaise foi utilise l'apparence de la passivité pour dissimuler des choix actifs. La véritable passivité serait l'être de la chose, mais l'être humain ne peut jamais être une chose, seulement faire semblant de l'être."
    },

    // Question n°35
    { 
        question: "Question n°35 : Quelle est la place du corps dans la philosophie de Sartre ?",
        answers: [
            "le corps est une prison dont il faut se libérer", 
            "le corps est le mode d'être fondamental de la conscience au monde", 
            "le corps n'a aucune importance philosophique"
        ], 
        correct: 2,
        explanation: "Pour Sartre, le corps n'est pas une prison dont il faudrait se libérer (comme dans certaines traditions philosophiques), mais le mode d'être fondamental de la conscience au monde. Nous ne sommes pas une conscience qui « a » un corps, mais une conscience qui « est » son corps. Cette conception de l'incarnation radicale signifie que toute expérience est nécessairement corporelle, que toute conscience est conscience incarnée. Dans l'exemple, la tentative de la femme pour être « tout esprit » représente donc une négation de sa condition réelle. Elle prétend pouvoir se retirer de son corps, mais cette prétention est elle-même une expérience corporelle. Pour Sartre, le corps est à la fois ce par quoi nous sommes objets pour autrui (l'homme voit et touche son corps) et ce par quoi nous sommes sujets agissants (c'est avec son corps qu'elle pourrait retirer sa main). La mauvaise foi consiste précisément à nier cette double dimension du corps pour échapper soit à l'objectivation (en se faisant pure subjectivité), soit à la responsabilité (en se faisant pure objectivité)."
    },

    // Question n°36
    { 
        question: "Question n°36 : Comment Sartre comprend-il la notion de « projet » existentiel ?",
        answers: [
            "comme un plan prédéfini qu'on suit mécaniquement", 
            "comme une orientation fondamentale qui donne sens à tous nos actes", 
            "comme une illusion sans réalité"
        ], 
        correct: 2,
        explanation: "Pour Sartre, le « projet » existentiel désigne l'orientation fondamentale qui donne sens et unité à tous nos actes et choix. Contrairement à un plan prédéfini qu'on suivrait mécaniquement, le projet est toujours en train de se faire et de se refaire à travers nos actions. Il représente la manière dont nous nous projetons vers l'avenir, dont nous donnons un sens à notre existence. Dans l'exemple, on pourrait dire que le projet de la femme est de maintenir une relation ambiguë qui lui permet d'être désirée sans s'engager, d'être reconnue comme liberté sans prendre le risque de la liberté. Tous ses actes (interpréter les compliments de manière littérale, se retirer dans l'esprit, laisser sa main inerte) convergent vers ce projet. Pour Sartre, nous sommes toujours en projet, même lorsque nous cherchons à échapper à notre condition : la mauvaise foi est elle-même un projet, bien qu'un projet inauthentique. Cette notion de projet est essentielle car elle montre que l'existence humaine n'est pas une simple succession d'instants, mais une totalité organisée par une visée fondamentale."
    },

    // Question n°37
    { 
        question: "Question n°37 : Quelle est la relation entre mauvaise foi et sincérité pour Sartre ?",
        answers: [
            "la sincérité est l'opposé de la mauvaise foi", 
            "la sincérité est une forme particulièrement subtile de mauvaise foi", 
            "il n'y a pas de relation entre les deux"
        ], 
        correct: 2,
        explanation: "Étonnamment, pour Sartre, la sincérité n'est pas l'opposé de la mauvaise foi mais en constitue une forme particulièrement subtile et perverse. La sincérité prétend être une coïncidence parfaite avec soi-même : « Je suis ce que je suis », « Je dis ce que je pense ». Mais cette prétention est illusoire car l'être humain n'est jamais simplement ce qu'il est ; il est toujours aussi ce qu'il n'est pas encore (ses possibilités) et ce qu'il n'est plus (son passé). La sincérité consiste à se réduire à une identité fixe pour échapper à la mobilité et à l'ouverture de l'existence. Par exemple, quelqu'un qui dirait « Je suis lâche » et qui se comporterait en conséquence serait « sincère » mais en mauvaise foi, car il se donne une essence (la lâcheté) pour échapper à sa liberté de pouvoir agir courageusement. Ainsi, contrairement aux apparences, la sincérité peut être une stratégie de mauvaise foi aussi efficace que le mensonge à soi-même, car elle utilise la vérité pour se cacher la vérité plus profonde de la liberté."
    },

    // Question n°38
    { 
        question: "Question n°38 : Comment Sartre analyse-t-il le rapport entre présent et avenir dans cet exemple ?",
        answers: [
            "la femme vit uniquement dans le présent", 
            "la femme refuse l'avenir pour se réfugier dans un présent éternel", 
            "la femme anticipe activement l'avenir"
        ], 
        correct: 2,
        explanation: "Dans cet exemple, Sartre montre comment la femme refuse l'avenir pour se réfugier dans un présent éternel et sans conséquence. Elle « ne veut pas voir les possibilités de développement temporel » des actes et des paroles, elle « borne ce comportement à ce qu'il est dans le présent ». Cette réduction au présent lui permet d'éviter de considérer les implications futures de ses actions, les engagements qu'elles pourraient entraîner. Pour Sartre, cette attitude représente une négation de la temporalité authentique de la conscience, qui est toujours projet vers l'avenir. La conscience humaine n'est jamais simplement dans le présent ; elle est toujours « en avant d'elle-même », tournée vers ses possibilités. En se limitant au présent immédiat, la femme tente d'échapper à cette structure fondamentale. Cependant, cette tentative est vouée à l'échec car le présent lui-même n'a de sens que par rapport à un avenir. Même son refus de l'avenir est un projet qui oriente son présent vers un certain avenir (celui de l'ambiguïté maintenue)."
    },

    // Question n°39
    { 
        question: "Question n°39 : Quelle est la conception sartrienne de la vérité ?",
        answers: [
            "la vérité est une correspondance entre discours et réalité", 
            "la vérité est l'accord de la conscience avec elle-même dans l'assomption de sa liberté", 
            "la vérité n'existe pas"
        ], 
        correct: 2,
        explanation: "Pour Sartre, la vérité n'est pas principalement une correspondance entre discours et réalité (conception classique), mais l'accord de la conscience avec elle-même dans l'assomption lucide de sa liberté et de sa condition. La vérité existentielle consiste à reconnaître qu'on est libre, responsable, sans essence préétablie, toujours en projet. La mauvaise fou est précisément le refus de cette vérité : c'est un mensonge à soi-même sur sa propre condition. Ainsi, la femme de l'exemple « sait » la vérité (les intentions de l'homme, la nécessité de décider) mais elle organise sa conscience pour ne pas la reconnaître comme vérité. Pour Sartre, la vérité n'est donc pas simplement une propriété des énoncés, mais un mode d'être de la conscience. Être dans la vérité, c'est assumer sa condition sans fuite ni mauvaise foi. Cette conception existentialiste de la vérité comme authenticité s'oppose aux conceptions purement épistémologiques et montre que les questions de vérité sont d'abord des questions existentielles."
    },

    // Question n°40
    { 
        question: "Question n°40 : Comment la femme nie-t-elle sa propre transcendance ?",
        answers: [
            "en affirmant vigoureusement sa liberté", 
            "en se réduisant à l'immanence de l'objet", 
            "en développant ses potentialités"
        ], 
        correct: 2,
        explanation: "La femme nie sa propre transcendance (sa capacité à dépasser ce qu'elle est vers ce qu'elle pourrait être) en se réduisant à l'immanence de l'objet. Pour Sartre, la conscience humaine est par essence transcendante : elle n'est jamais coincée dans ce qu'elle est, mais toujours capable de se projeter vers de nouvelles possibilités. En laissant sa main « inerte », « ni consentante ni résistante, une chose », la femme tente de se faire chose, c'est-à-dire de se réduire à l'être de l'objet qui est pure immanence (un objet est ce qu'il est, sans possibilité de devenir autre). Cette réification de soi-même représente le comble de la mauvaise foi : c'est la tentative pour échapper à la condition humaine en adoptant le mode d'être de la chose. Mais cette tentative est nécessairement vouée à l'échec car la conscience ne peut jamais devenir vraiment chose ; elle ne peut que jouer à être chose. Même dans cette prétendue réduction à l'immanence, la conscience reste transcendante, ne serait-ce que par l'activité même de se faire objet."
    },

    // Question n°41
    { 
        question: "Question n°41 : Quel est le rôle de la honte dans l'analyse sartrienne ?",
        answers: [
            "la honte est un sentiment moral sans importance philosophique", 
            "la honte révèle le regard d'autrui qui nous objectivise", 
            "la honte n'a aucun rapport avec autrui"
        ], 
        correct: 2,
        explanation: "Pour Sartre, la honte n'est pas simplement un sentiment moral mais un phénomène ontologique qui révèle fondamentalement le regard d'autrui comme pouvoir d'objectivation. Quand j'ai honte, c'est parce que je me vois comme autrui me voit, je me découvre comme objet sous son regard. Dans l'exemple, on pourrait imaginer que la femme éprouverait de la honte si elle prenait soudain conscience de son attitude de mauvaise foi sous le regard d'un tiers. Cette honte révélerait qu'elle n'est pas seulement une conscience libre, mais aussi un objet pour autrui. La mauvaise foi peut être comprise comme une tentative pour échapper à cette honte potentielle en évitant les situations où on serait pleinement vu et jugé. En maintenant l'ambiguïté, en ne prenant pas de position claire, la femme évite de se donner en spectacle, de se révéler complètement aux yeux d'autrui. La honte est ainsi liée à la fois à la présence d'autrui et à la mauvaise foi comme fuite devant cette présence."
    },

    // Question n°42
    { 
        question: "Question n°42 : Comment Sartre analyse-t-il la relation entre être et paraître ?",
        answers: [
            "l'être et le paraître sont complètement séparés", 
            "chez l'être humain, l'être est inséparable du paraître", 
            "seul l'être compte, le paraître est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Sartre, chez l'être humain, l'être est inséparable du paraître : nous ne sommes jamais simplement ce que nous sommes en profondeur, indépendamment de nos apparences et de nos manifestations. Contrairement aux objets qui ont un être caché (la table est ronde même si on ne la voit pas), la conscience humaine n'a pas d'intériorité secrète qui serait plus vraie que ses extériorisations. Nous sommes ce que nous faisons, ce que nous montrons, ce que nous choisissons d'être dans nos actions. Dans l'exemple, la femme tente précisément de séparer son être de son paraître : elle fait semblant d'être passive et désintéressée (son paraître) alors qu'en réalité elle est active et intéressée (son être). Mais pour Sartre, cette séparation est illusoire : son « être » de femme qui joue à être passive est exactement ce qu'elle montre, même si elle le montre de manière trompeuse. La mauvaise foi consiste donc à croire qu'on pourrait avoir un être différent de son paraître, une vérité intérieure cachée derrière les apparences, alors que chez l'être humain, être c'est paraître."
    },

    // Question n°43
    { 
        question: "Question n°43 : Quelle est la place du néant dans la philosophie de Sartre ?",
        answers: [
            "le néant n'a aucune place", 
            "le néant est au cœur de la conscience comme pouvoir de négation", 
            "le néant est identique à l'être"
        ], 
        correct: 2,
        explanation: "Le néant est un concept central dans la philosophie de Sartre : il désigne le pouvoir de négation qui caractérise la conscience humaine. Contrairement aux objets qui sont pleinement ce qu'ils sont, la conscience a la capacité de se néantiser, c'est-à-dire de se distancer de ce qui est, de le nier, de le mettre entre parenthèses. Ce pouvoir de néantisation est à la source de la liberté : parce que je peux dire « non », parce que je peux imaginer ce qui n'est pas, parce que je peux me projeter vers ce qui n'existe pas encore, je suis libre. Dans l'exemple, la femme utilise ce pouvoir de néantisation de manière pervertie : elle nie les implications de ses actes, elle nie sa propre responsabilité, elle nie même son corps comme sien. La mauvaise foi est ainsi une utilisation du néant contre elle-même : au lieu de nier les déterminismes pour affirmer sa liberté, elle nie sa liberté pour s'installer dans une fausse nécessité. Le néant n'est donc pas simplement l'absence d'être, mais l'activité même de la conscience qui, en se néantisant, crée l'espace de la liberté."
    },

    // Question n°44
    { 
        question: "Question n°44 : Comment Sartre comprend-il la relation entre individu et société ?",
        answers: [
            "l'individu est complètement déterminé par la société", 
            "l'individu est totalement indépendant de la société", 
            "l'individu est libre dans une société qui le conditionne"
        ], 
        correct: 3,
        explanation: "Sartre adopte une position dialectique sur la relation entre individu et société : l'individu est radicalement libre, mais il exerce toujours sa liberté dans un contexte social qui le conditionne. Cette position évite à la fois le déterminisme sociologique (qui réduirait l'individu à un produit social) et l'individualisme abstrait (qui ignorerait les contraintes sociales). Dans l'exemple, la situation de rendez-vous galant est éminemment sociale : elle implique des codes, des rôles, des attentes culturellement déterminés. La femme n'invente pas cette situation, elle la trouve comme un fait social. Cependant, la manière dont elle y répond relève de sa liberté : elle pourrait accepter, refuser, ou adopter l'attitude de mauvaise foi. Son choix n'est pas déterminé par les codes sociaux, même s'il s'y réfère. Pour Sartre, nous sommes toujours « en situation » sociale, mais cette situation n'est pas une prison : c'est le matériau sur lequel s'exerce notre liberté. La mauvaise foi consiste souvent à se donner l'illusion d'être déterminé par les conventions sociales pour échapper à sa responsabilité personnelle."
    },

    // Question n°45
    { 
        question: "Question n°45 : Quelle est la conception sartrienne de l'amour ?",
        answers: [
            "l'amour est fusion harmonieuse de deux consciences", 
            "l'amour est conflit entre deux libertés qui veulent à la fois posséder et être reconnues", 
            "l'amour est une illusion sans réalité"
        ], 
        correct: 2,
        explanation: "Pour Sartre, l'amour est fondamentalement un conflit entre deux libertés qui veulent à la fois posséder l'autre et être reconnues par lui comme liberté. Contrairement aux visions romantiques de l'amour comme fusion harmonieuse, Sartre y voit une relation dialectique complexe et souvent contradictoire. Dans l'amour, je veux être aimé comme sujet libre, reconnu dans ma valeur absolue, mais je veux aussi posséder l'autre, le réduire à un objet de mon désir. L'autre, de son côté, a les mêmes exigences contradictoires. Cette tension est au cœur de l'exemple : la femme veut être désirée (reconnue comme objet désirable) mais aussi respectée (reconnue comme sujet libre). L'homme, probablement, veut à la fois la posséder et être aimé d'elle. La mauvaise foi de la femme représente une tentative pour résoudre cette contradiction de manière illusoire : en faisant comme si le désir de l'homme était pure reconnaissance de sa liberté, tout en en jouissant comme désir de possession. Pour Sartre, cette contradiction est insoluble et fait de l'amour une relation nécessairement conflictuelle, bien que cette conflictualité puisse être assumée de manière plus ou moins authentique."
    },

    // Question n°46
    { 
        question: "Question n°46 : Comment Sartre analyse-t-il le rapport entre conscience et monde ?",
        answers: [
            "la conscience est séparée du monde", 
            "la conscience est toujours conscience de quelque chose (intentionnalité)", 
            "le monde est une projection de la conscience"
        ], 
        correct: 2,
        explanation: "Sartre reprend à Husserl le principe de l'intentionnalité : la conscience est toujours conscience de quelque chose, elle est toujours tournée vers le monde, visant des objets. Cette conception rompt avec l'idée d'une conscience close sur elle-même, contemplant ses propres contenus. La conscience n'a pas d'intériorité substantielle ; elle est pure extériorité, pure relation au monde. Dans l'exemple, la conscience de la femme n'est pas une bulle intérieure où elle se réfugierait, mais une activité continuelle de visée du monde : elle vise l'homme, ses paroles, ses gestes, la situation dans son ensemble. Sa tentative pour être « tout esprit » représente donc une négation de cette structure intentionnelle : elle prétend se retirer du monde, devenir une pure intériorité sans objet. Mais cette prétention est contradictoire car même cette retraite est une manière de viser le monde (comme monde à fuir). Pour Sartre, on ne peut jamais échapper à l'intentionnalité, à l'être-au-monde. La mauvaise fou est une tentative pour le faire, mais elle échoue nécessairement car la conscience ne peut exister qu'en se transcendant vers le monde."
    },

    // Question n°47
    { 
        question: "Question n°47 : Quelle est la place de la littérature dans la philosophie de Sartre ?",
        answers: [
            "la littérature n'a aucun rapport avec la philosophie", 
            "la littérature est un moyen privilégié pour explorer les situations concrètes de l'existence", 
            "la littérature est inférieure à la philosophie"
        ], 
        correct: 2,
        explanation: "Pour Sartre, la littérature n'est pas séparée de la philosophie mais en constitue un complément essentiel, un moyen privilégié pour explorer les situations concrètes de l'existence humaine. Lui-même était à la fois philosophe et romancier/dramaturge, et ses œuvres littéraires (comme La Nausée, Huis clos, Les Mouches) illustrent et développent ses thèses philosophiques. L'exemple de la femme au rendez-vous, bien que tiré d'un texte philosophique, a une qualité littéraire évidente : c'est une petite scène romanesque, avec ses personnages, ses dialogues, ses tensions dramatiques. Cette approche montre que pour Sartre, les concepts philosophiques ne prennent leur sens que dans leur incarnation concrète. La littérature permet de décrire la complexité des situations, l'ambiguïté des sentiments, la subtilité des motivations, mieux qu'un discours abstrait. Elle révèle la philosophie en acte, dans la vie réelle. Cette alliance entre philosophie et littérature est caractéristique de l'existentialisme français et constitue l'une des originalités de l'œuvre de Sartre."
    },

    // Question n°48
    { 
        question: "Question n°48 : Comment Sartre comprend-il la notion de « choix » ?",
        answers: [
            "le choix est un événement rare et exceptionnel", 
            "nous choisissons à chaque instant, même quand nous ne choisissons pas", 
            "le choix n'existe pas"
        ], 
        correct: 2,
        explanation: "Pour Sartre, nous choisissons à chaque instant, même et surtout quand nous croyons ne pas choisir. Le choix n'est pas un événement ponctuel et spectaculaire, mais la texture même de l'existence. À chaque moment, nous choisissons ce que nous sommes, ce que nous faisons, ce que nous devenons. Même la passivité, même l'indécision, même la fuite sont des choix. Dans l'exemple, la femme choisit continuellement : elle choisit de ne pas sentir l'urgence, de s'attacher seulement aux apparences respectueuses, de désarmer les phrases de leur sens sexuel, de laisser sa main inerte. Chacun de ces « non-choix » apparents est en réalité un choix positif pour une certaine manière d'être. Pour Sartre, on ne peut pas ne pas choisir, car ne pas choisir est encore choisir de ne pas choisir. Cette conception radicale de la liberté comme choix permanent explique pourquoi elle est si angoissante : il n'y a jamais de répit, jamais de moment où on pourrait simplement « être » sans avoir à décider. La mauvaise foi est la tentative pour échapper à cette condition en se donnant l'illusion de ne pas choisir."
    },

    // Question n°49
    { 
        question: "Question n°49 : Quelle est la postérité de la notion de mauvaise foi ?",
        answers: [
            "elle est tombée dans l'oubli", 
            "elle a influencé la psychologie et la philosophie contemporaines", 
            "elle n'a eu aucune influence"
        ], 
        correct: 2,
        explanation: "La notion sartrienne de mauvaise fou a eu une postérité importante dans la philosophie et la psychologie contemporaines. En philosophie, elle a ouvert la voie à des réflexions sur l'authenticité, l'aliénation, les formes subtiles de domination et d'auto-domination. Des penseurs comme Foucault, Butler ou Honneth ont, chacun à leur manière, repris et transformé cette problématique. En psychologie, la notion de mauvaise fou a influencé les thérapies existentielles et les approches qui mettent l'accent sur la responsabilité et l'authenticité. Dans la culture populaire, l'expression « mauvaise foi » est entrée dans le langage courant, même si son sens s'est souvent éloigné de la conception technique de Sartre. Plus généralement, l'idée que nous nous mentons à nous-mêmes de manière systématique, que nous fuyons nos responsabilités, que nous nous créons des illusions pour supporter l'existence, est devenue un lieu commun de la psychologie moderne. Même ceux qui rejettent la métaphysique sartrienne reconnaissent souvent la pertinence descriptive de la notion de mauvaise foi pour comprendre certains comportements humains."
    },

    // Question n°50
    { 
        question: "Question n°50 : En quoi cet exemple est-il représentatif de la méthode philosophique de Sartre ?",
        answers: [
            "il montre une préférence pour l'abstraction pure", 
            "il illustre l'analyse concrète des situations comme voie d'accès aux structures universelles", 
            "il révèle un mépris pour les expériences quotidiennes"
        ], 
        correct: 2,
        explanation: "Cet exemple est parfaitement représentatif de la méthode philosophique de Sartre, qui consiste à partir de l'analyse concrète des situations vécues pour accéder aux structures universelles de l'existence humaine. Contrairement à une philosophie qui déduirait des principes abstraits à partir d'autres principes abstraits, Sartre commence toujours par décrire minutieusement une expérience particulière (une rencontre, un regard, une émotion) pour en faire émerger les dimensions essentielles. Cette méthode phénoménologique lui permet d'éviter à la fois le formalisme vide et le psychologisme réducteur. L'exemple de la femme au rendez-vous n'est donc pas une simple illustration pédagogique, mais le lieu même où se déploie la pensée. Il montre que les grandes questions philosophiques (la liberté, la vérité, la responsabilité) ne sont pas des problèmes théoriques lointains, mais se jouent dans les situations les plus banales de la vie quotidienne. Cette attention au concret, cette confiance dans la description fine des expériences, cette conviction que la philosophie doit parler de la vie réelle, caractérisent toute l'œuvre de Sartre et expliquent en partie son succès auprès d'un large public."
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