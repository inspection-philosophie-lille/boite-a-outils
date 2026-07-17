// ============================================
// DONNÉES GÉNÉRALES
// ============================================

// Titre et description du fichier
const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Rousseau";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
    texte: `« [1] Le plus fort n'est jamais assez fort pour être toujours le maître, s'il ne transforme sa force en droit, et l'obéissance en devoir. [2] De là le droit du plus fort ; droit pris ironiquement en apparence, et réellement établi en principe. [3] Mais ne nous expliquera-t-on jamais ce mot ? [4] La force est une puissance physique ; je ne vois point quelle moralité peut résulter de ses effets. [5] Céder à la force est un acte de nécessité, non de volonté ; c'est tout au plus un acte de prudence. [6] En quel sens pourra-ce être un devoir ?

[7] Supposons un moment ce prétendu droit. [8] Je dis qu'il n'en résulte qu'un galimatias inexplicable ; car sitôt que c'est la force qui fait le droit, l'effet change avec la cause : toute force qui surmonte la première succède à son droit. [9] Sitôt qu'on peut désobéir impunément, on le peut légitimement ; et, puisque le plus fort a toujours raison, il ne s'agit que de faire en sorte qu'on soit le plus fort. [10] Or, qu'est-ce qu'un droit qui périt quand la force cesse ? [11] S'il faut obéir par force, on n'a pas besoin d'obéir par devoir ; et si l'on n'est plus forcé d'obéir, on n'y est plus obligé. [12] On voit donc que ce mot de droit n'ajoute rien à la force ; il ne signifie ici rien du tout.

[13] Obéissez aux puissances. [14] Si cela veut dire, cédez à la force, le précepte est bon, mais superflu ; je réponds qu'il ne sera jamais violé. [15] Toute puissance vient de Dieu, je l'avoue ; mais toute maladie en vient aussi : est-ce à dire qu'il soit défendu d'appeler le médecin ? [16] Qu'un brigand me surprenne au coin d'un bois, non seulement il faut par force donner la bourse, mais quand je pourrais la soustraire, suis-je en conscience obligé de la donner ? [17] Car enfin le pistolet qu'il tient est aussi une puissance.

[18] Convenons donc que force ne fait pas droit, et qu'on n'est obligé d'obéir qu'aux puissances légitimes. »`,
    
    source: "ROUSSEAU, Du contrat social, livre I, chap.3 (1762), Amsterdam chez Marc-Michel Rey, pp.12-15."
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    // Question n°1
    { 
        question: "Question n°1 : Que doit faire le plus fort pour être toujours le maître selon Rousseau ?",
        answers: [
            "Réponse : Augmenter constamment sa force physique",
            "Réponse : Transformer sa force en droit et l'obéissance en devoir", 
            "Réponse : Éliminer tous ceux qui pourraient le menacer"
        ], 
        correct: 2,
        explanation: "Rousseau déclare explicitement : « Le plus fort n'est jamais assez fort pour être toujours le maître, s'il ne transforme sa force en droit, et l'obéissance en devoir. » Cette formule célèbre montre que la force physique seule est insuffisante pour assurer une domination durable, car elle doit être transfigurée en autorité légitime reconnue par les sujets."
    },

    // Question n°2
    { 
        question: "Question n°2 : Comment Rousseau qualifie-t-il le « droit du plus fort » ?",
        answers: [
            "Réponse : Un droit sérieux et légitime", 
            "Réponse : Un droit pris ironiquement en apparence mais réellement établi", 
            "Réponse : Un droit naturel évident pour tous"
        ], 
        correct: 2,
        explanation: "Rousseau écrit : « droit pris ironiquement en apparence, et réellement établi en principe », soulignant le paradoxe de cette notion. Bien que cette idée soit absurde sur le plan philosophique, elle fonctionne dans la réalité politique comme un principe effectif de gouvernement, ce qui rend sa critique d'autant plus nécessaire."
    },

    // Question n°3
    { 
        question: "Question n°3 : Quelle est la nature de la force selon Rousseau ?",
        answers: [
            "Réponse : Une puissance morale et spirituelle", 
            "Réponse : Une puissance physique purement matérielle", 
            "Réponse : Une manifestation de la volonté divine"
        ], 
        correct: 2,
        explanation: "Rousseau précise clairement : « La force est une puissance physique », ce qui la distingue radicalement du droit qui est de l'ordre moral. Cette distinction fondamentale permet de critiquer toute tentative de faire dériver des obligations morales ou juridiques de simples rapports de force matérielle."
    },

    // Question n°4
    { 
        question: "Question n°4 : Quelle moralité peut résulter des effets de la force selon Rousseau ?",
        answers: [
            "Réponse : Une moralité supérieure et noble", 
            "Réponse : Aucune moralité ne peut en résulter", 
            "Réponse : Une moralité relative selon les circonstances"
        ], 
        correct: 2,
        explanation: "Rousseau affirme catégoriquement : « je ne vois point quelle moralité peut résulter de ses effets », niant tout lien entre force physique et valeur morale. Cette position s'oppose aux théories qui cherchent à justifier le pouvoir par son efficacité ou sa simple existence, sans considérer les principes qui le fondent."
    },

    // Question n°5
    { 
        question: "Question n°5 : Comment Rousseau qualifie-t-il l'acte de céder à la force ?",
        answers: [
            "Réponse : Un acte de volonté libre et réfléchie", 
            "Réponse : Un acte de nécessité ou tout au plus de prudence", 
            "Réponse : Un devoir moral fondamental"
        ], 
        correct: 2,
        explanation: "Rousseau distingue : « Céder à la force est un acte de nécessité, non de volonté ; c'est tout au plus un acte de prudence. » Cette distinction est cruciale car elle sépare la contrainte physique (où on agit par peur) de l'obligation morale (où on agit par conviction), préparant ainsi sa critique du prétendu « devoir » d'obéir au plus fort."
    },

    // Question n°6
    { 
        question: "Question n°6 : Que se passe-t-il quand c'est la force qui fait le droit selon Rousseau ?",
        answers: [
            "Réponse : Le droit devient stable et permanent", 
            "Réponse : Toute force qui surmonte la première succède à son droit", 
            "Réponse : La société trouve enfin un fondement solide"
        ], 
        correct: 2,
        explanation: "Rousseau montre l'instabilité : « car sitôt que c'est la force qui fait le droit, l'effet change avec la cause : toute force qui surmonte la première succède à son droit. » Cette démonstration révèle l'absurdité pratique du droit du plus fort : il crée une instabilité perpétuelle où chaque changement de rapport de force entraîne un changement de « droit », ce qui est incompatible avec l'idée même de droit comme principe stable."
    },

    // Question n°7
    { 
        question: "Question n°7 : Que peut-on faire sitôt qu'on peut désobéir impunément selon Rousseau ?",
        answers: [
            "Réponse : On doit quand même obéir par devoir", 
            "Réponse : On le peut légitimement", 
            "Réponse : On ne peut rien faire sans autorisation"
        ], 
        correct: 2,
        explanation: "Rousseau tire la conséquence logique : « Sitôt qu'on peut désobéir impunément, on le peut légitimement. » Cette formule montre que dans la logique du droit du plus fort, la légitimité se réduit à la simple possibilité d'agir sans être contraint, ce qui vide complètement la notion de droit de son contenu moral pour n'en garder que l'aspect purement factuel."
    },

    // Question n°8
    { 
        question: "Question n°8 : Quel est le problème d'un droit qui périt quand la force cesse ?",
        answers: [
            "Réponse : Il devient trop rigide", 
            "Réponse : Ce n'est pas un vrai droit selon Rousseau", 
            "Réponse : Il acquiert une valeur divine"
        ], 
        correct: 2,
        explanation: "Rousseau pose la question rhétorique : « Or, qu'est-ce qu'un droit qui périt quand la force cesse ? » qui implique qu'un véritable droit doit avoir une autre base. Pour lui, un droit authentique doit transcender les rapports de force contingents et s'imposer même en l'absence de contrainte physique, ce qui est impossible si on le fonde uniquement sur la force."
    },

    // Question n°9
    { 
        question: "Question n°9 : Que signifie le précepte « Obéissez aux puissances » selon Rousseau ?",
        answers: [
            "Réponse : Cédez toujours à toutes les autorités sans réfléchir", 
            "Réponse : Cédez à la force, mais c'est un précepte superflu", 
            "Réponse : Obéissez seulement aux lois divines"
        ], 
        correct: 2,
        explanation: "Rousseau analyse : « Si cela veut dire, cédez à la force, le précepte est bon, mais superflu ; je réponds qu'il ne sera jamais violé. » En d'autres termes, on cède nécessairement à la force quand on n'a pas le choix, donc un tel précepte n'a aucune valeur normative puisqu'il ne fait que constater un fait inévitable sans prescrire aucune conduite morale."
    },

    // Question n°10
    { 
        question: "Question n°10 : Comment Rousseau réagit-il à l'argument « Toute puissance vient de Dieu » ?",
        answers: [
            "Réponse : Il l'accepte sans réserve comme vérité absolue", 
            "Réponse : Il le rejette complètement comme superstition", 
            "Réponse : Il l'accepte mais montre son absurdité par analogie"
        ], 
        correct: 2,
        explanation: "Rousseau utilise une analogie : « Toute puissance vient de Dieu, je l'avoue ; mais toute maladie en vient aussi : est-ce à dire qu'il soit défendu d'appeler le médecin ? » Cette réponse habile montre que même si on admet la prémisse théologique, on n'en tire pas nécessairement la conclusion politique voulue, à savoir l'obéissance inconditionnelle à tout pouvoir établi."
    },

    // Question n°11
    { 
        question: "Question n°11 : Quel exemple Rousseau utilise-t-il pour critiquer le droit du plus fort ?",
        answers: [
            "Réponse : Un brigand au coin d'un bois", 
            "Réponse : Un roi dans son palais", 
            "Réponse : Un juge rendant la justice"
        ], 
        correct: 1,
        explanation: "Rousseau prend l'exemple concret : « Qu'un brigand me surprenne au coin d'un bois... » pour montrer l'absurdité du droit du plus fort. Cet exemple sert à réduire à l'absurde la théorie critiquée : si la force fait droit, alors le brigand aurait autant de « droit » à mon argent que n'importe quelle autorité, ce qui est manifestement inacceptable."
    },

    // Question n°12
    { 
        question: "Question n°12 : Que représente le pistolet du brigand selon Rousseau ?",
        answers: [
            "Réponse : Une puissance illégitime qu'on peut ignorer", 
            "Réponse : Aussi une puissance au même titre que les autres", 
            "Réponse : Un simple objet sans signification politique"
        ], 
        correct: 2,
        explanation: "Rousseau conclut l'exemple : « Car enfin le pistolet qu'il tient est aussi une puissance. », réduisant ainsi toute puissance à de la force brute. Cette conclusion ironique montre que si on fonde le droit sur la force, on ne peut plus distinguer le brigand du souverain légitime, puisque tous deux exercent une contrainte physique."
    },

    // Question n°13
    { 
        question: "Question n°13 : Quelle est la conclusion principale de Rousseau ?",
        answers: [
            "Réponse : La force fait toujours droit dans la pratique", 
            "Réponse : Force ne fait pas droit", 
            "Réponse : Le droit dépend uniquement de la volonté divine"
        ], 
        correct: 2,
        explanation: "Rousseau conclut formellement : « Convenons donc que force ne fait pas droit. » Cette affirmation péremptoire résume tout son argumentaire et établit le point de départ de sa propre théorie politique : puisque la force ne peut fonder un pouvoir légitime, il faut chercher un autre fondement, qui sera précisément le contrat social."
    },

    // Question n°14
    { 
        question: "Question n°14 : À quelles puissances sommes-nous obligés d'obéir selon Rousseau ?",
        answers: [
            "Réponse : À toutes les puissances sans distinction", 
            "Réponse : Seulement aux puissances légitimes", 
            "Rép : Uniquement aux puissances les plus fortes"
        ], 
        correct: 2,
        explanation: "Rousseau termine par : « et qu'on n'est obligé d'obéir qu'aux puissances légitimes. », introduisant ainsi la notion cruciale de légitimité. Cette conclusion ouvre la voie à la question centrale de sa philosophie politique : qu'est-ce qui rend un pouvoir légitime, si ce n'est pas la simple possession de la force ?"
    },

    // Question n°15
    { 
        question: "Question n°15 : Que signifie « galimatias inexplicable » dans ce texte ?",
        answers: [
            "Réponse : Une théorie claire et évidente", 
            "Réponse : Un discours confus et incohérent", 
            "Réponse : Une vérité philosophique profonde"
        ], 
        correct: 2,
        explanation: "Rousseau qualifie ainsi le prétendu « droit du plus fort », soulignant son caractère absurde et incohérent. Ce terme péjoratif suggère que cette théorie est non seulement fausse, mais si confuse qu'elle en devient incompréhensible, ce qui montre le mépris de Rousseau pour ce qu'il considère comme une imposture intellectuelle."
    },

    // Question n°16
    { 
        question: "Question n°16 : Pourquoi Rousseau dit-il que le mot « droit » n'ajoute rien à la force ?",
        answers: [
            "Réponse : Parce que la force est déjà suffisante par elle-même", 
            "Réponse : Parce que dans cette théorie, droit et force sont confondus", 
            "Réponse : Parce que le droit vient toujours après la force"
        ], 
        correct: 2,
        explanation: "Rousseau explique : « On voit donc que ce mot de droit n'ajoute rien à la force ; il ne signifie ici rien du tout. » Cette critique montre que dans la théorie du droit du plus fort, le terme « droit » est un mot vide qui ne fait que redoubler la notion de force sans y ajouter aucune dimension normative ou morale supplémentaire."
    },

    // Question n°17
    { 
        question: "Question n°17 : Quelle distinction fondamentale Rousseau établit-il ?",
        answers: [
            "Réponse : Entre force physique et obligation morale", 
            "Réponse : Entre richesse et pauvreté", 
            "Réponse : Entre nature et culture"
        ], 
        correct: 1,
        explanation: "Tout le texte oppose la contrainte physique (force) à l'obligation morale (droit), fondement de la critique du droit du plus fort. Cette distinction est essentielle car elle permet de comprendre pourquoi Rousseau rejette toute tentative de dériver le devoir de la simple contrainte : l'obéissance morale suppose la reconnaissance volontaire d'une autorité, non la soumission à une contrainte extérieure."
    },

    // Question n°18
    { 
        question: "Question n°18 : Que critique principalement Rousseau dans ce texte ?",
        answers: [
            "Réponse : L'idée que la force physique puisse fonder un droit légitime", 
            "Réponse : L'existence de toute forme de pouvoir politique", 
            "Réponse : La nécessité d'obéir à quelque autorité que ce soit"
        ], 
        correct: 1,
        explanation: "Rousseau critique spécifiquement la justification du pouvoir par la seule force physique, qu'il distingue soigneusement du pouvoir légitime. Sa cible n'est pas le pouvoir en soi, mais les justifications fallacieuses qui cherchent à transformer un simple rapport de force en autorité morale contraignante."
    },

    // Question n°19
    { 
        question: "Question n°19 : Quelle conception du pouvoir légitime Rousseau défend-il implicitement ?",
        answers: [
            "Réponse : Un pouvoir fondé uniquement sur la force", 
            "Réponse : Un pouvoir fondé sur le consentement ou un pacte", 
            "Réponse : Un pouvoir fondé sur l'hérédité divine"
        ], 
        correct: 2,
        explanation: "En rejetant la force comme fondement, Rousseau prépare sa théorie du contrat social fondé sur le consentement des citoyens. Ce texte constitue ainsi une propédeutique négative : après avoir éliminé la fausse solution (le droit du plus fort), il pourra proposer sa propre solution positive (le pacte social)."
    },

    // Question n°20
    { 
        question: "Question n°20 : À quel siècle et courant philosophique appartient ce texte ?",
        answers: [
            "Réponse : XVIIe siècle - Rationalisme", 
            "Réponse : XVIIIe siècle - Lumières/Contractualisme", 
            "Réponse : XIXe siècle - Romantisme"
        ], 
        correct: 2,
        explanation: "Rousseau (1712-1778) est un philosophe des Lumières et l'un des principaux théoriciens du contractualisme avec son Contrat social. Ce texte s'inscrit donc dans le mouvement intellectuel du XVIIIe siècle qui critique les fondements traditionnels du pouvoir et cherche à fonder la société sur des principes rationnels."
    },

    // Question n°21
    { 
        question: "Question n°21 : Quel est l'objectif principal de Rousseau dans ce texte ?",
        answers: [
            "Réponse : Justifier l'absolutisme royal", 
            "Réponse : Démontrer l'invalidité du droit du plus fort", 
            "Réponse : Promouvoir l'anarchie"
        ], 
        correct: 2,
        explanation: "Rousseau cherche à invalider définitivement l'argument du droit du plus fort pour préparer une théorie politique fondée sur la légitimité. En démontrant l'absurdité de cette conception, il dégage le terrain pour construire sa propre théorie du contrat social, qui cherchera un fondement rationnel et moral au pouvoir politique."
    },

    // Question n°22
    { 
        question: "Question n°22 : Comment Rousseau traite-t-il l'argument d'autorité religieuse ?",
        answers: [
            "Réponse : Il l'accepte sans discussion", 
            "Réponse : Il le rejette avec mépris", 
            "Réponse : Il l'accepte formellement mais en neutralise la portée"
        ], 
        correct: 2,
        explanation: "Rousseau utilise la formule « je l'avoue » puis réduit l'argument à l'absurde par l'analogie avec la maladie, montrant ainsi son inefficacité politique. Cette stratégie argumentative lui permet de désamorcer une objection potentielle sans entrer dans une controverse théologique directe, en montrant simplement que cet argument ne permet pas de justifier l'obéissance politique."
    },

    // Question n°23
    { 
        question: "Question n°23 : Quel est le statut du « devoir » dans l'argument de Rousseau ?",
        answers: [
            "Réponse : Il est identique à la nécessité physique", 
            "Réponse : Il suppose une adhésion volontaire de la volonté", 
            "Réponse : Il n'existe pas vraiment"
        ], 
        correct: 2,
        explanation: "Rousseau oppose radicalement « acte de nécessité » et « devoir », ce dernier impliquant une dimension morale et volontaire. Pour lui, un devoir authentique suppose que l'individu reconnaisse librement l'autorité qui le lui impose, ce qui est impossible dans le cas de la simple contrainte physique exercée par le plus fort."
    },

    // Question n°24
    { 
        question: "Question n°24 : Que montre l'exemple du brigand selon Rousseau ?",
        answers: [
            "Réponse : Que le vol est parfois justifié", 
            "Réponse : Que la force ne crée aucune obligation morale", 
            "Réponse : Que les brigands ont des droits"
        ], 
        correct: 2,
        explanation: "L'exemple sert à montrer qu'on cède à la force par nécessité, non parce qu'on reconnaît un quelconque droit au brigand. En comparant le brigand au souverain, Rousseau montre que si on fonde le droit sur la force, on ne peut plus distinguer entre pouvoir légitime et violence illégitime, ce qui est absurde."
    },

    // Question n°25
    { 
        question: "Question n°25 : Quelle est la fonction du mot « ironiquement » dans le texte ?",
        answers: [
            "Réponse : Montrer que personne ne prend ce droit au sérieux", 
            "Réponse : Indiquer que ce droit est présenté comme sérieux mais est en fait absurde", 
            "Réponse : Faire une plaisanterie sur le pouvoir"
        ], 
        correct: 2,
        explanation: "Rousseau souligne le paradoxe : on présente ce droit comme sérieux (« établi en principe ») alors qu'il est en réalité absurde (« pris ironiquement »). Cette remarque montre que le « droit du plus fort » fonctionne comme une imposture intellectuelle : on feint de le prendre au sérieux alors qu'il ne résiste pas à l'examen critique."
    },

    // Question n°26
    { 
        question: "Question n°26 : En quoi consiste la « prudence » évoquée par Rousseau ?",
        answers: [
            "Réponse : Une vertu morale élevée", 
            "Réponse : Un simple calcul d'intérêt face au danger", 
            "Réponse : Une qualité des gouvernants"
        ], 
        correct: 2,
        explanation: "La prudence est ici un calcul utilitaire (« tout au plus ») qui s'oppose à la véritable obligation morale. Rousseau distingue ainsi entre la sagesse pratique qui conseille de céder pour éviter un mal pire (prudence) et le sentiment du devoir qui commande d'obéir par respect pour une autorité légitime (morale)."
    },

    // Question n°27
    { 
        question: "Question n°27 : Quel type de raisonnement Rousseau utilise-t-il principalement ?",
        answers: [
            "Réponse : Un raisonnement par l'absurde", 
            "Réponse : Une argumentation historique", 
            "Réponse : Une démonstration mathématique"
        ], 
        correct: 1,
        explanation: "Rousseau montre les conséquences absurdes et incohérentes du droit du plus fort, ce qui invalide la théorie par réduction à l'absurde. En particulier, il démontre que cette théorie conduit à des contradictions pratiques (l'instabilité perpétuelle du droit) et logiques (la confusion entre force et droit), ce qui suffit à la réfuter."
    },

    // Question n°28
    { 
        question: "Question n°28 : Que signifie « l'effet change avec la cause » ?",
        answers: [
            "Réponse : La stabilité du pouvoir est assurée", 
            "Réponse : Dès qu'une force est vaincue, son droit disparaît", 
            "Réponse : La cause produit toujours le même effet"
        ], 
        correct: 2,
        explanation: "Cela illustre l'instabilité radicale d'un droit fondé sur la force : chaque changement de rapport de force entraîne un changement de « droit ». Cette instabilité rend impossible toute société organisée, car elle signifie que les règles du jeu politique changent à chaque fois que les rapports de pouvoir se modifient, ce qui est incompatible avec l'idée même de droit comme système stable de règles."
    },

    // Question n°29
    { 
        question: "Question n°29 : Quelle conception de la liberté Rousseau présuppose-t-il ?",
        answers: [
            "Réponse : La liberté comme absence de toute contrainte", 
            "Réponse : La liberté comme obéissance à la loi qu'on s'est prescrite", 
            "Réponse : La liberté comme pouvoir de nuire aux autres"
        ], 
        correct: 2,
        explanation: "En distinguant contrainte et obligation, Rousseau prépare sa célèbre définition de la liberté civile comme obéissance à la loi commune. Cette conception « positive » de la liberté s'oppose à la fois à la simple absence de contrainte (liberté « négative ») et à la soumission à une force extérieure, en faisant de l'autonomie le fondement de l'obéissance légitime."
    },

    // Question n°30
    { 
        question: "Question n°30 : En quoi ce texte prépare-t-il la théorie du contrat social ?",
        answers: [
            "Réponse : Il justifie la domination des plus forts", 
            "Rép : Il élimine la force comme fondement pour chercher un autre principe", 
            "Réponse : Il appelle à la révolution violente"
        ], 
        correct: 2,
        explanation: "En démontrant que la force ne peut fonder un droit légitime, Rousseau ouvre la voie à sa théorie d'un pouvoir fondé sur le consentement et le pacte social. Ce texte constitue ainsi une étape préparatoire essentielle : après avoir écarté la fausse solution, Rousseau pourra développer sa propre conception du fondement légitime du pouvoir politique."
    },

    // Question n°31
    { 
        question: "Question n°31 : Quelle est la portée politique de ce texte ?",
        answers: [
            "Réponse : Justifier les régimes autoritaires", 
            "Réponse : Critiquer toute forme d'autorité", 
            "Réponse : Fonder la distinction entre pouvoir légitime et pouvoir de fait"
        ], 
        correct: 2,
        explanation: "Rousseau établit une distinction capitale entre la simple possession du pouvoir (force) et son exercice légitime (droit). Cette distinction a des implications politiques majeures : elle permet de critiquer les régimes qui se maintiennent uniquement par la contrainte et d'exiger que tout pouvoir prouve sa légitimité, ouvrant ainsi la voie à des conceptions démocratiques du gouvernement."
    },

    // Question n°32
    { 
        question: "Question n°32 : Comment Rousseau traite-t-il la question de l'obéissance ?",
        answers: [
            "Réponse : Il recommande l'obéissance absolue", 
            "Réponse : Il distingue obéissance forcée et obéissance par devoir", 
            "Réponse : Il rejette toute forme d'obéissance"
        ], 
        correct: 2,
        explanation: "Tout le texte oppose l'obéissance contrainte (« par force ») à l'obéissance morale (« par devoir »). Cette distinction est fondamentale car elle permet de comprendre que pour Rousseau, la véritable obéissance politique ne peut être obtenue par la contrainte, mais doit reposer sur la reconnaissance volontaire de l'autorité par les citoyens."
    },

    // Question n°33
    { 
        question: "Question n°33 : Que représente la « conscience » dans l'exemple du brigand ?",
        answers: [
            "Réponse : La peur de la punition", 
            "Réponse : Le sentiment d'une obligation morale intérieure", 
            "Réponse : La connaissance des lois"
        ], 
        correct: 2,
        explanation: "« suis-je en conscience obligé » renvoie à l'idée d'une obligation morale intérieure, distincte de la contrainte extérieure. Rousseau montre ainsi que face au brigand, notre devoir n'est pas de lui donner notre argent par respect pour son « droit », mais seulement de le faire si nous y sommes contraints physiquement, sans aucune dimension morale."
    },

    // Question n°34
    { 
        question: "Question n°34 : Quelle est la méthode argumentative de Rousseau ?",
        answers: [
            "Réponse : L'appel aux traditions", 
            "Réponse : L'analyse conceptuelle et logique", 
            "Réponse : L'invocation de l'autorité"
        ], 
        correct: 2,
        explanation: "Rousseau procède par analyse rigoureuse des concepts (force, droit, devoir) et déduction logique de leurs implications. Sa méthode est essentiellement rationnelle : il part de définitions claires, examine les conséquences des positions adverses, et montre leurs incohérences internes, sans recourir à l'autorité ou à la tradition pour fonder ses conclusions."
    },

    // Question n°35
    { 
        question: "Question n°35 : En quoi ce texte est-il caractéristique des Lumières ?",
        answers: [
            "Réponse : Par son rejet de la tradition comme justification", 
            "Réponse : Par son appel à l'autorité religieuse", 
            "Réponse : Par son mépris de la raison"
        ], 
        correct: 1,
        explanation: "Comme beaucoup de textes des Lumières, il soumet les croyances établies (droit du plus fort) à l'examen critique de la raison. Rousseau ne se contente pas de répéter les justifications traditionnelles du pouvoir, mais les interroge radicalement, exigeant qu'elles satisfassent aux exigences de la logique et de la cohérence rationnelle."
    },

    // Question n°36
    { 
        question: "Question n°36 : Quel rôle joue l'analogie avec la maladie ?",
        answers: [
            "Réponse : Justifier la résignation face au malheur", 
            "Réponse : Montrer l'absurdité de l'argument théologique", 
            "Réponse : Défendre la médecine traditionnelle"
        ], 
        correct: 2,
        explanation: "L'analogie sert à réduire à l'absurde l'argument selon lequel « toute puissance vient de Dieu » en montrant qu'on n'en tire pas les mêmes conséquences pratiques. Si on acceptait cet argument de manière conséquente, il faudrait renoncer à lutter contre les maladies comme contre les pouvoirs injustes, ce qui est manifestement absurde."
    },

    // Question n°37
    { 
        question: "Question n°37 : Que signifie « puissance légitime » pour Rousseau ?",
        answers: [
            "Réponse : La puissance la plus forte", 
            "Réponse : La puissance fondée sur un principe autre que la force", 
            "Réponse : La puissance héréditaire"
        ], 
        correct: 2,
        explanation: "C'est précisément ce que Rousseau cherche à définir : un pouvoir dont l'autorité ne vient pas de la force mais d'un autre principe (le contrat, la loi). Cette notion de légitimité sera au cœur de sa théorie du contrat social, où le pouvoir légitime est celui qui émane de la volonté générale des citoyens."
    },

    // Question n°38
    { 
        question: "Question n°38 : En quoi Rousseau se distingue-t-il de Hobbes ?",
        answers: [
            "Réponse : Il accepte le droit du plus fort que Hobbes rejette", 
            "Réponse : Il rejette la force comme fondement alors que Hobbes l'accepte", 
            "Réponse : Ils ont exactement la même théorie"
        ], 
        correct: 2,
        explanation: "Contrairement à Hobbes qui fonde l'autorité sur la crainte et la force, Rousseau cherche un fondement consensuel et moral au pouvoir. Pour Hobbes, le souverain a droit à l'obéissance parce qu'il protège les sujets de la violence ; pour Rousseau, cette conception reste prisonnière de la logique de la force et ne peut fonder une véritable obligation morale."
    },

    // Question n°39
    { 
        question: "Question n°39 : Quelle est la fonction rhétorique des questions dans le texte ?",
        answers: [
            "Réponse : Éviter de prendre position", 
            "Réponse : Guider le lecteur dans la réflexion et souligner les absurdités", 
            "Réponse : Montrer son ignorance"
        ], 
        correct: 2,
        explanation: "Les questions rhétoriques (« ne nous expliquera-t-on jamais... ? », « en quel sens... ? », « qu'est-ce qu'un droit... ? ») structurent l'argumentation et mettent en évidence les contradictions. Elles permettent à Rousseau d'impliquer le lecteur dans sa réflexion et de le conduire progressivement vers les conclusions qu'il souhaite établir."
    },

    // Question n°40
    { 
        question: "Question n°40 : À quel ouvrage de Rousseau ce texte appartient-il ?",
        answers: [
            "Réponse : Les Confessions", 
            "Réponse : Du contrat social", 
            "Réponse : Émile ou De l'éducation"
        ], 
        correct: 2,
        explanation: "Le texte est explicitement tiré de « Du contrat social, livre I, chap. 3 », ouvrage majeur de philosophie politique de Rousseau. Ce chapitre fait partie de la première partie de l'œuvre, où Rousseau critique les fausses conceptions du pouvoir avant de développer sa propre théorie dans les chapitres suivants."
    },

    // Question n°41
    { 
        question: "Question n°41 : Quel siècle avant/après J.-C. Rousseau a-t-il vécu ?",
        answers: [
            "Réponse : XVIe siècle", 
            "Réponse : XVIIIe siècle", 
            "Réponse : XIXe siècle"
        ], 
        correct: 2,
        explanation: "Rousseau a vécu de 1712 à 1778, ce qui correspond au siècle des Lumières (XVIIIe siècle). Cette période est marquée par un intense débat sur les fondements du pouvoir politique et les conditions de la liberté, débat auquel Rousseau contribue de manière décisive avec ses œuvres politiques."
    },

    // Question n°42
    { 
        question: "Question n°42 : Quel est le contexte historique de ce texte ?",
        answers: [
            "Réponse : La Révolution française", 
            "Réponse : L'absolutisme monarchique en France", 
            "Réponse : La démocratie athénienne"
        ], 
        correct: 2,
        explanation: "Rousseau écrit sous l'Ancien Régime, critiquant indirectement les justifications du pouvoir absolu du roi. Bien que publié en 1762, ce texte préfigure les critiques qui conduiront à la Révolution française de 1789, en sapant les fondements traditionnels de l'autorité monarchique."
    },

    // Question n°43
    { 
        question: "Question n°43 : Que signifie « établir en principe » ?",
        answers: [
            "Réponse : Mettre de côté", 
            "Réponse : Poser comme fondement indiscutable", 
            "Réponse : Critiquer ouvertement"
        ], 
        correct: 2,
        explanation: "Rousseau note le paradoxe : bien qu'absurde, le droit du plus fort est effectivement posé comme principe de gouvernement dans les faits. Cette observation montre que Rousseau ne critique pas seulement une théorie abstraite, mais une pratique politique réelle qui se présente comme une théorie, ce qui rend sa critique d'autant plus urgente."
    },

    // Question n°44
    { 
        question: "Question n°44 : En quoi ce texte est-il subversif pour son époque ?",
        answers: [
            "Réponse : Il remet en cause le fondement traditionnel du pouvoir", 
            "Réponse : Il appelle à la violence", 
            "Réponse : Il rejette toute religion"
        ], 
        correct: 1,
        explanation: "En critiquant le droit du plus fort, Rousseau sape les justifications de l'absolutisme royal et ouvre la voie à une conception contractuelle du pouvoir. Bien qu'il ne prône pas directement la révolution, son texte fournit des armes intellectuelles à ceux qui contestent l'ordre établi, ce qui explique pourquoi ses œuvres seront censurées et qu'il devra fuir la France."
    },

    // Question n°45
    { 
        question: "Question n°45 : Comment Rousseau envisage-t-il les relations entre gouvernants et gouvernés ?",
        answers: [
            "Réponse : Comme des relations de pur rapport de force", 
            "Réponse : Comme des relations devant être fondées sur le droit", 
            "Réponse : Comme des relations purement affectives"
        ], 
        correct: 2,
        explanation: "Tout le texte tend à substituer au rapport de force une relation juridique et morale entre citoyens. Pour Rousseau, la politique ne doit pas être l'art de dominer par la force, mais celui d'établir des institutions qui garantissent la liberté et l'égalité des citoyens dans le cadre d'un État légitime."
    },

    // Question n°46
    { 
        question: "Question n°46 : Que signifie « impunément » dans le contexte ?",
        answers: [
            "Réponse : Sans être vu", 
            "Réponse : Sans subir de conséquence physique", 
            "Réponse : Avec l'accord de tous"
        ], 
        correct: 2,
        explanation: "« Désobéir impunément » signifie désobéir sans être physiquement contraint ou puni, ce qui dans la logique du droit du plus fort rend cette désobéissance « légitime ». Rousseau montre ainsi que cette théorie conduit à une absurdité : elle fait de la simple possibilité d'échapper à la contrainte la source d'un « droit » à désobéir."
    },

    // Question n°47
    { 
        question: "Question n°47 : Quelle est la conséquence politique de l'argument de Rousseau ?",
        answers: [
            "Réponse : La justification de toutes les révolutions", 
            "Réponse : L'idée que tout pouvoir doit prouver sa légitimité", 
            "Réponse : Le rejet de tout gouvernement"
        ], 
        correct: 2,
        explanation: "Si la force ne fait pas droit, alors tout pouvoir doit trouver un autre fondement à son autorité, ce qui implique une exigence de justification. Cette conséquence est révolutionnaire pour son époque : elle signifie que les gouvernants ne peuvent plus se contenter d'exercer le pouvoir, mais doivent démontrer qu'ils y ont droit selon des principes acceptables par la raison."
    },

    // Question n°48
    { 
        question: "Question n°48 : En quoi ce texte préfigure-t-il la démocratie moderne ?",
        answers: [
            "Réponse : Il justifie la dictature", 
            "Réponse : Il fonde l'autorité sur le consentement plutôt que sur la force", 
            "Réponse : Il rejette toute forme de représentation"
        ], 
        correct: 2,
        explanation: "En recherchant un fondement au pouvoir autre que la force, Rousseau ouvre la voie aux théories démocratiques fondées sur le consentement des gouvernés. Sa critique du droit du plus fort prépare sa propre théorie de la souveraineté populaire, où le pouvoir légitime émane de la volonté générale des citoyens réunis par un pacte social."
    },

    // Question n°49
    { 
        question: "Question n°49 : Quel est le ton dominant de ce texte ?",
        answers: [
            "Réponse : Un ton lyrique et poétique", 
            "Réponse : Un ton polémique et ironique", 
            "Réponse : Un ton scientifique et neutre"
        ], 
        correct: 2,
        explanation: "Rousseau utilise l'ironie (« droit pris ironiquement ») et la polémique pour dénoncer vigoureusement le droit du plus fort. Son ton est souvent incisif et moqueur, notamment lorsqu'il réduit à l'absurde les positions adverses, ce qui donne à son texte une force persuasive considérable tout en témoignant de son engagement intellectuel."
    },

    // Question n°50
    { 
        question: "Question n°50 : Pourquoi ce texte est-il considéré comme un classique de la philosophie politique ?",
        answers: [
            "Réponse : Parce qu'il justifie la tyrannie", 
            "Réponse : Parce qu'il pose avec force la question de la légitimité du pouvoir", 
            "Réponse : Parce qu'il décrit des événements historiques"
        ], 
        correct: 2,
        explanation: "Ce texte pose la question fondamentale de la philosophie politique : qu'est-ce qui rend un pouvoir légitime et non simplement fort ? En démontrant avec rigueur que la force ne peut fonder un droit, Rousseau établit un critère exigeant pour évaluer toute forme de pouvoir, critère qui continue d'inspirer les réflexions sur la démocratie et la justice politique aujourd'hui."
    }
];