// Fichier textes.js - 100 sujets de dissertation rédigés (début d'année de terminale)
// Chaque cellule contient une phrase complète, développée, sans deux-points isolés.
// Structure : id, sujet, reponses { these, justification_these, charniere, antithese, justification_antithese, problematique }

const textes = [
    {
        id: 1,
        sujet: "Peut-on tout dire ?",
        reponses: {
            these: "À première vue, il semble que l'on puisse tout dire, car la liberté d'expression paraît n'admettre aucune limite et se présente comme un droit fondamental.",
            justification_these: "En effet, empêcher quelqu'un de s'exprimer revient à porter atteinte à sa liberté la plus élémentaire et à faire obstacle à la recherche de la vérité, qui progresse par la confrontation libre des opinions.",
            charniere: "Toutefois, cette liberté sans bornes mérite d'être interrogée,",
            antithese: "car tout dire peut nuire gravement à autrui : certaines paroles blessent, diffament ou mettent en danger des personnes réelles.",
            justification_antithese: "Or la liberté d'un individu s'arrête là où commence celle des autres, et une parole qui détruit autrui n'est plus l'exercice d'un droit mais une forme de violence, d'autant plus redoutable qu'elle est parfois irréversible.",
            problematique: "La liberté d'expression est-elle un droit sans limite ou bien doit-elle être bornée par le respect dû à autrui ?"
        }
    },
    {
        id: 2,
        sujet: "Faut-il toujours obéir à la loi ?",
        reponses: {
            these: "Il semble évident qu'il faut toujours obéir à la loi, car sans elle ce serait la guerre de tous contre tous et le plus faible serait livré à la merci du plus fort.",
            justification_these: "En effet, la loi garantit l'ordre, protège les personnes et les biens, et permet à chacun de vivre en sécurité parmi les autres : elle est la condition même de la vie en société.",
            charniere: "Pourtant, l'histoire enseigne que",
            antithese: "certaines lois ont été profondément injustes et que leur obéir aveuglément a parfois conduit aux pires crimes, notamment lorsqu'elles ordonnaient de persécuter des innocents.",
            justification_antithese: "Car une loi n'est pas juste du seul fait qu'elle est une loi : elle peut servir les intérêts d'une minorité contre le bien commun, et le simple respect de la légalité ne suffit donc pas à fonder une conduite morale.",
            problematique: "La loi doit-elle être obéie en toutes circonstances ou bien peut-on légitimement lui désobéir lorsqu'elle est injuste ?"
        }
    },
    {
        id: 3,
        sujet: "Le travail est-il seulement une contrainte ?",
        reponses: {
            these: "À première vue, le travail apparaît comme une contrainte, car il faut travailler pour subsister et le travail pèse lourdement sur celui qui l'accomplit.",
            justification_these: "En effet, l'étymologie même du mot rappelle la dimension pénible du travail, longtemps associé à la peine, à la fatigue et à la nécessité, comme si l'homme ne travaillait que sous la pression du besoin.",
            charniere: "Toutefois, réduire le travail à une simple contrainte serait méconnaître",
            antithese: "qu'il peut aussi être le lieu de l'accomplissement de soi, de la reconnaissance par autrui et de la transformation du monde.",
            justification_antithese: "Car en travaillant, l'homme se donne une œuvre, s'inscrit dans une communauté et se reconnaît lui-même dans ce qu'il produit : le travail peut alors devenir une source de fierté et un moyen de se réaliser pleinement.",
            problematique: "Le travail n'est-il qu'une contrainte subie ou bien est-il aussi le moyen par lequel l'homme se réalise ?"
        }
    },
    {
        id: 4,
        sujet: "La liberté consiste-t-elle à faire tout ce que l'on veut ?",
        reponses: {
            these: "Il semble évident que la liberté consiste à faire tout ce que l'on veut, sans rencontrer d'obstacle, car est libre celui qui peut satisfaire tous ses désirs.",
            justification_these: "En effet, l'expérience spontanée associe immédiatement la liberté à l'absence de contrainte : nul ne se sentirait libre s'il était empêché d'agir selon sa volonté.",
            charniere: "Pourtant, une telle liberté, livrée à elle-même, risque de se retourner en servitude,",
            antithese: "car celui qui fait tout ce qu'il veut devient rapidement esclave de ses désirs les plus immédiats.",
            justification_antithese: "Car vouloir tout ce que l'on désire, c'est obéir à des penchants que l'on n'a pas choisis, et non se gouverner soi-même : la vraie liberté suppose donc que la volonté se donne à elle-même sa propre loi, au lieu de céder à toutes ses impulsions.",
            problematique: "La liberté se réduit-elle à l'absence de contrainte ou bien exige-t-elle au contraire que la volonté se donne à elle-même sa propre loi ?"
        }
    },
    {
        id: 5,
        sujet: "Peut-on être heureux sans les autres ?",
        reponses: {
            these: "À première vue, on peut être heureux sans les autres, car le bonheur semble une affaire strictement personnelle qui dépend avant tout de soi-même.",
            justification_these: "En effet, chacun connaît ses propres désirs et peut chercher à les satisfaire dans la solitude, à l'abri du regard et des exigences parfois pesantes d'autrui.",
            charniere: "Cependant, cette conception solitaire du bonheur se heurte à une difficulté,",
            antithese: "car l'homme ne devient pleinement lui-même qu'au contact des autres : l'amitié, l'amour et la reconnaissance sont des sources essentielles de bonheur.",
            justification_antithese: "Car un bonheur sans partage, sans témoin et sans échange finit par se confondre avec l'indifférence ou la solitude subie, et il est difficile de se réjouir vraiment de ce que personne ne partage avec nous.",
            problematique: "Le bonheur est-il une affaire privée qui se passe des autres ou bien suppose-t-il nécessairement la présence et la reconnaissance d'autrui ?"
        }
    },
    {
        id: 6,
        sujet: "Le progrès technique rend-il l'homme plus libre ?",
        reponses: {
            these: "Il semble évident que le progrès technique libère l'homme, car il nous affranchit des contraintes naturelles les plus dures et allège considérablement le poids du labeur.",
            justification_these: "En effet, grâce aux machines et aux outils, nous nous déplaçons plus vite, nous communiquons à distance, nous nous soignons mieux et nous vivons plus longtemps : la technique recule les limites de nos possibilités.",
            charniere: "Or, cette libération n'est peut-être qu'apparente,",
            antithese: "car la technique peut aussi nous asservir en créant sans cesse de nouveaux besoins et en nous rendant dépendants de ses dispositifs.",
            justification_antithese: "Car celui qui ne peut plus se passer de son smartphone, de sa voiture ou de ses applications perd une part de son autonomie sans même s'en rendre compte, et la technique finit par devenir une seconde nature à laquelle on obéit aveuglément.",
            problematique: "Le progrès technique est-il un moyen d'affranchissement ou bien engendre-t-il de nouvelles formes de servitude ?"
        }
    },
    {
        id: 7,
        sujet: "L'art n'a-t-il pour fin que de plaire ?",
        reponses: {
            these: "L'art semble d'abord destiné à plaire, à susciter chez celui qui le contemple un plaisir esthétique, une émotion agréable et un charme immédiat.",
            justification_these: "En effet, une œuvre qui ne procure aucun plaisir, qui n'émeut ni ne charme, manque apparemment sa destination première, car nous nous tournons naturellement vers ce qui nous touche et nous enchante.",
            charniere: "Cependant, réduire l'art à la seule recherche du plaisir serait l'appauvrir,",
            antithese: "car certaines œuvres nous déplaisent, nous dérangent, voire nous scandalisent, tout en nous faisant accéder à une vérité ou à une émotion plus profonde.",
            justification_antithese: "Car l'art peut aussi critiquer, faire voir le monde autrement, révéler ce que nous préférons ignorer : sa valeur ne se mesure donc pas seulement au plaisir immédiat qu'il procure, mais aussi à la lucidité et à l'intensité qu'il nous fait éprouver.",
            problematique: "L'art se définit-il par le plaisir qu'il procure ou bien sa finalité réside-t-elle dans autre chose que le seul plaisir ?"
        }
    },
    {
        id: 8,
        sujet: "Faut-il toujours dire la vérité ?",
        reponses: {
            these: "Il semble évident qu'il faut toujours dire la vérité, car mentir est immoral et ruine la confiance qui rend possible la vie entre les hommes.",
            justification_these: "En effet, la vie sociale repose entièrement sur la parole donnée : si chacun mentait, plus personne ne pourrait se fier à personne, et le lien social lui-même se dissoudrait.",
            charniere: "Pourtant, certaines situations mettent cette exigence à l'épreuve,",
            antithese: "car des vérités peuvent blesser inutilement, et un mensonge peut parfois protéger autrui d'une souffrance insupportable.",
            justification_antithese: "Car dire la vérité n'est pas seulement une question de principe : c'est aussi une question de circonstances et de responsabilité envers celui à qui l'on parle, et il serait cruel de tout dire au nom d'une honnêteté sans discernement.",
            problematique: "Dire la vérité est-il un devoir absolu ou bien peut-on légitimement mentir dans certaines situations ?"
        }
    },
    {
        id: 9,
        sujet: "La violence peut-elle être juste ?",
        reponses: {
            these: "À première vue, la violence ne peut jamais être juste, car elle est toujours un mal : une atteinte portée à autrui, à son corps ou à sa dignité.",
            justification_these: "En effet, la violence brute détruit, humilie et réduit l'autre à une chose ; elle contredit l'idée même de justice, qui suppose de traiter chacun avec égards et selon des règles communes.",
            charniere: "Toutefois, l'histoire et l'expérience morale montrent que",
            antithese: "la violence devient parfois le seul moyen de résister à une violence plus grande, comme dans le cas de la légitime défense ou de la résistance à l'oppression.",
            justification_antithese: "Car refuser toute violence face à un tyran, c'est laisser triompher l'injustice : la non-violence peut alors devenir, malgré elle, une forme de complicité avec le mal.",
            problematique: "La violence est-elle toujours condamnable ou bien peut-elle devenir légitime lorsqu'elle sert à défendre la justice ?"
        }
    },
    {
        id: 10,
        sujet: "Sommes-nous responsables de ce que nous sommes ?",
        reponses: {
            these: "Il semble évident que nous sommes responsables de ce que nous sommes, car nos choix, nos efforts et nos actes nous appartiennent en propre.",
            justification_these: "En effet, nous nous jugeons mutuellement sur ce que chacun fait de sa vie, comme si chacun était l'auteur de sa propre existence et pouvait répondre de ce qu'il est devenu.",
            charniere: "Pourtant, cette conviction se heurte à une objection de poids,",
            antithese: "car nous sommes largement déterminés par notre éducation, notre milieu social, notre corps et notre histoire familiale.",
            justification_antithese: "Car nul ne choisit de naître dans telle famille, avec tel caractère ou telles capacités : une part de ce que nous sommes nous échappe, et il serait injuste de nous en tenir rigueur.",
            problematique: "Sommes-nous les auteurs de ce que nous sommes ou bien le produit de conditions qui nous dépassent ?"
        }
    },
    {
        id: 11,
        sujet: "Peut-on aimer sans se tromper ?",
        reponses: {
            these: "À première vue, aimer, c'est se tromper, car l'amour idéalise l'autre et nous fait voir ce que nous désirons plutôt que ce qu'il est réellement.",
            justification_these: "En effet, l'expérience amoureuse est souvent celle de la désillusion : l'autre ne correspond pas à l'image que nous nous étions faite de lui, et la chute n'en est que plus rude.",
            charniere: "Cependant, cette illusion n'est peut-être pas le dernier mot de l'amour,",
            antithese: "car aimer vraiment, ce n'est pas se tromper mais au contraire reconnaître l'autre tel qu'il est, avec ses défauts et ses limites.",
            justification_antithese: "Car l'amour qui dure n'est pas celui de l'illusion mais celui de la connaissance : il aime une personne réelle et non un rêve, et c'est précisément cette lucidité qui donne à l'amour sa solidité.",
            problematique: "L'amour est-il nécessairement aveugle ou bien peut-il être lucide et véritablement connaître l'autre ?"
        }
    },
    {
        id: 12,
        sujet: "Faut-il préférer la justice à l'amitié ?",
        reponses: {
            these: "Il semble évident qu'il faut préférer la justice à l'amitié, car la justice est impersonnelle et traite chacun selon les mêmes règles, tandis que l'amitié est partiale.",
            justification_these: "En effet, un juge qui rendrait des verdicts différents selon ses amitiés ne serait plus un juge : la justice exige l'égalité de traitement et l'impartialité, sans quoi elle se confond avec la faveur.",
            charniere: "Toutefois, cette opposition tranchée mérite d'être nuancée,",
            antithese: "car l'amitié comporte elle aussi ses exigences morales : trahir un ami au nom d'une justice abstraite peut être une forme de lâcheté.",
            justification_antithese: "Car nous avons des devoirs particuliers envers ceux qui nous sont proches, et la justice elle-même doit tenir compte des liens qui nous unissent, faute de quoi elle devient inhumaine.",
            problematique: "La justice et l'amitié s'opposent-elles nécessairement ou bien peuvent-elles se concilier dans une même exigence morale ?"
        }
    },
    {
        id: 13,
        sujet: "La beauté est-elle une affaire de goût personnel ?",
        reponses: {
            these: "À première vue, la beauté est une affaire de goût personnel, car chacun trouve beau ce qui lui plaît, et les goûts ne se discutent pas.",
            justification_these: "En effet, ce qui semble beau à l'un peut sembler laid à l'autre, et nous constatons chaque jour la diversité des jugements esthétiques selon les époques, les cultures et les individus.",
            charniere: "Pourtant, cette relativité du goût n'est pas sans limite,",
            antithese: "car certaines œuvres traversent les siècles et rassemblent les admirations les plus diverses : il y a bien quelque chose comme une beauté reconnue.",
            justification_antithese: "Car si la beauté n'était qu'une affaire privée, on ne comprendrait pas pourquoi nous cherchons à convaincre les autres de nos goûts ni pourquoi nous discutons d'art avec passion, comme s'il y avait quelque chose à défendre.",
            problematique: "La beauté se réduit-elle à une préférence subjective ou bien existe-t-il des critères partagés du beau ?"
        }
    },
    {
        id: 14,
        sujet: "La mort donne-t-elle un sens à la vie ?",
        reponses: {
            these: "Il semble d'abord que la mort ôte tout sens à la vie, car puisque tout finit, à quoi bon agir, aimer et construire ?",
            justification_these: "En effet, si tout doit disparaître, nos efforts, nos réussites et nos amours semblent voués à l'insignifiance, engloutis dans un néant qui annule jusqu'à leur souvenir.",
            charniere: "Cependant, cette conclusion hâtive mérite d'être renversée,",
            antithese: "car c'est précisément parce que la vie est finie qu'elle prend un prix : ce qui dure toujours ne saurait être précieux.",
            justification_antithese: "Car nous aimons, nous créons et nous agissons d'autant plus intensément que le temps nous est compté : la conscience de notre finitude est ce qui donne à chaque instant son urgence et sa valeur.",
            problematique: "La mort est-elle ce qui ruine le sens de la vie ou bien ce qui, au contraire, le rend possible ?"
        }
    },
    {
        id: 15,
        sujet: "Peut-on vivre sans illusions ?",
        reponses: {
            these: "Il semble souhaitable de vivre sans illusions, car les illusions nous trompent et nous exposent à la déception en nous faisant croire à ce qui n'existe pas.",
            justification_these: "En effet, voir le monde tel qu'il est nous permet d'agir lucidement et de ne pas fonder notre vie sur des chimères qui s'effondrent tôt ou tard.",
            charniere: "Toutefois, une vie sans aucune illusion est-elle seulement possible et souhaitable ?",
            antithese: "car certaines illusions sont nécessaires à l'action et au bonheur : sans espoir ni idéal, la vie devient froide et sans élan.",
            justification_antithese: "Car nous avons besoin de croire en des possibles qui ne sont pas encore réels pour nous mettre en mouvement et donner du sens à nos projets : l'illusion, quand elle est féconde, est aussi un moteur.",
            problematique: "Faut-il chercher à se débarrasser de toute illusion ou bien certaines illusions sont-elles indispensables à la vie ?"
        }
    },
    {
        id: 16,
        sujet: "Le mensonge peut-il être un bien ?",
        reponses: {
            these: "À première vue, le mensonge est toujours un mal, car il trompe autrui et détruit la confiance qui est au fondement de toute relation.",
            justification_these: "En effet, une société où le mensonge serait la règle deviendrait rapidement invivable, puisque chacun douterait de la parole de tous et que plus rien ne pourrait être tenu pour vrai.",
            charniere: "Pourtant, il existe des situations où le mensonge semble s'imposer,",
            antithese: "car certains mensonges protègent, consolent ou évitent une souffrance inutile à celui à qui l'on parle.",
            justification_antithese: "Car la vérité n'est pas toujours bonne à dire, et la bonté peut parfois exiger que l'on taise ou que l'on adoucisse ce que l'on pense, non par lâcheté, mais par égard pour autrui.",
            problematique: "Le mensonge est-il toujours condamnable ou bien peut-il devenir légitime lorsqu'il sert le bien d'autrui ?"
        }
    },
    {
        id: 17,
        sujet: "L'argent fait-il le bonheur ?",
        reponses: {
            these: "À première vue, l'argent fait le bonheur, car il permet de satisfaire ses désirs et de vivre sans le souci rongeant de la pauvreté.",
            justification_these: "En effet, la pauvreté est source de souffrances bien concrètes : la faim, le logement précaire, l'impossibilité de se soigner ou de faire étudier ses enfants, autant de maux que l'argent peut directement soulager.",
            charniere: "Toutefois, l'argent ne suffit pas au bonheur,",
            antithese: "car il ne peut acheter ni l'amitié, ni l'amour, ni la santé, ni le sens de la vie, qui sont pourtant les biens les plus précieux.",
            justification_antithese: "Car certains riches sont profondément malheureux et certains pauvres intensément heureux : le bonheur dépend aussi de ce que l'on est et de la manière dont on vit, non seulement de ce que l'on possède.",
            problematique: "L'argent est-il la condition du bonheur ou bien n'en est-il qu'un moyen parmi d'autres, insuffisant par lui-même ?"
        }
    },
    {
        id: 18,
        sujet: "Faut-il craindre la mort ?",
        reponses: {
            these: "Il semble évident qu'il faut craindre la mort, car elle est la fin de tout : la destruction de ce que nous sommes et la séparation d'avec ceux que nous aimons.",
            justification_these: "En effet, la mort nous prive des êtres chers, des projets en cours et des plaisirs simples de l'existence : elle est vécue comme la plus grande des pertes, celle qui rend toutes les autres irréparables.",
            charniere: "Cependant, un examen rigoureux de la question conduit à douter de cette crainte,",
            antithese: "car craindre la mort n'a peut-être pas de sens : tant que je suis, la mort n'est pas là, et quand elle est là, je ne suis plus.",
            justification_antithese: "Car la mort ne se rencontre jamais dans l'expérience : on ne peut ni la vivre, ni l'éprouver, ni la regretter une fois qu'elle est survenue, de sorte que la craindre revient à craindre un mal qui ne nous concernera jamais en tant que sujets conscients.",
            problematique: "La mort mérite-t-elle d'être crainte ou bien cette crainte repose-t-elle sur une illusion ?"
        }
    },
    {
        id: 19,
        sujet: "La vie a-t-elle un sens ?",
        reponses: {
            these: "À première vue, la vie n'a aucun sens, car elle est un fait brut, sans but ni direction donnés d'avance, et rien ne nous dit pourquoi nous existons.",
            justification_these: "En effet, ni la nature ni la raison ne nous indiquent quelle est la finalité de notre existence : nous naissons sans mode d'emploi, et le monde semble indifférent à nos questions.",
            charniere: "Cependant, cette absence de sens donné n'implique pas l'absence de tout sens,",
            antithese: "car c'est nous qui donnons un sens à notre vie par nos projets, nos engagements et nos amours.",
            justification_antithese: "Car un sens n'a pas besoin d'être inscrit dans l'univers pour être réel et vivant : il suffit que nous y croyions profondément et que nous le fassions nôtre à travers nos choix et nos actes.",
            problematique: "La vie a-t-elle un sens qui lui serait donné d'avance ou bien est-ce à nous de le lui donner ?"
        }
    },
    {
        id: 20,
        sujet: "Peut-on forcer quelqu'un à être libre ?",
        reponses: {
            these: "À première vue, on ne peut pas forcer quelqu'un à être libre, car une liberté contrainte n'est plus une liberté : elle est son contraire.",
            justification_these: "En effet, être libre, c'est agir selon sa propre volonté, et non selon celle d'un autre : la contrainte, en soumettant la volonté à une force extérieure, détruit cela même qu'elle prétend produire.",
            charniere: "Toutefois, l'expérience de l'éducation oblige à nuancer cette évidence,",
            antithese: "car certaines contraintes éduquent et libèrent : on force un enfant à apprendre à lire, et cette contrainte le rend plus tard autonome.",
            justification_antithese: "Car la liberté n'est pas donnée d'emblée : elle se conquiert par une éducation qui commence souvent par des obligations, et l'on ne saurait être libre sans avoir d'abord été contraint d'apprendre ce qui rend la liberté possible.",
            problematique: "Toute contrainte détruit-elle la liberté ou bien certaines contraintes sont-elles les conditions de son développement ?"
        }
    },
    {
        id: 21,
        sujet: "Peut-on rire de tout ?",
        reponses: {
            these: "Il semble évident qu'on peut rire de tout, car l'humour n'a pas de limites et il vaut souvent mieux en rire qu'en pleurer.",
            justification_these: "En effet, le rire est une soupape qui désamorce la peur, la violence et la gravité : il libère celui qui rit et rassemble ceux qui partagent la même plaisanterie.",
            charniere: "Pourtant, certaines choses résistent à la plaisanterie,",
            antithese: "car il existe des sujets qui ne se racontent pas sur le mode de l'humour : la souffrance d'autrui, les génocides, la mort d'un enfant.",
            justification_antithese: "Car rire de tout, c'est parfois manquer de respect à ceux qui souffrent et banaliser l'horreur, en la réduisant à un simple objet de divertissement.",
            problematique: "L'humour doit-il être sans limites ou bien existe-t-il des sujets qui ne sauraient être tournés en dérision ?"
        }
    },
    {
        id: 22,
        sujet: "L'homme est-il un animal comme les autres ?",
        reponses: {
            these: "Il semble évident que l'homme est un animal comme les autres, car il naît, se nourrit, se reproduit et meurt comme toutes les espèces vivantes.",
            justification_these: "En effet, la biologie le rattache au règne animal : son corps, son ADN et ses besoins vitaux sont comparables à ceux des autres mammifères, et il partage avec eux une longue histoire évolutive.",
            charniere: "Toutefois, l'homme se distingue radicalement de l'animal,",
            antithese: "car il parle, pense, crée des œuvres, invente des lois et se pose des questions sur lui-même et sur le monde.",
            justification_antithese: "Car aucune société animale ne comporte de langage symbolique, d'art, de morale ni d'histoire au sens où l'homme en a : la culture introduit dans la nature une rupture que rien ne semble combler.",
            problematique: "L'homme doit-il être compris comme un animal parmi d'autres ou bien la culture le place-t-elle à part dans la nature ?"
        }
    },
    {
        id: 23,
        sujet: "Faut-il se méfier des apparences ?",
        reponses: {
            these: "Il semble évident qu'il faut se méfier des apparences, car elles sont souvent trompeuses, comme un mirage dans le désert.",
            justification_these: "En effet, juger sur l'apparence conduit à des erreurs fréquentes : on peut prendre une personne pour ce qu'elle n'est pas et se laisser abuser par les dehors séduisants d'une réalité décevante.",
            charniere: "Pourtant, les apparences ne sont pas toujours à rejeter,",
            antithese: "car elles constituent souvent notre première rencontre avec le monde et la seule voie d'accès à certaines réalités.",
            justification_antithese: "Car une œuvre d'art, un visage ou un paysage ne se donnent d'abord que par leur apparence, et c'est bien sur elle que se fonde notre jugement esthétique : sans apparence, rien ne nous apparaîtrait.",
            problematique: "Les apparences sont-elles nécessairement trompeuses ou bien peuvent-elles nous conduire à la vérité ?"
        }
    },
    {
        id: 24,
        sujet: "La paresse est-elle un défaut ?",
        reponses: {
            these: "À première vue, la paresse est un défaut, car elle empêche d'agir, fait perdre du temps et est unanimement condamnée par la morale commune.",
            justification_these: "En effet, on a tous en tête l'image du paresseux qui laisse les autres travailler à sa place et qui ne réalise rien de sa vie, gaspillant les talents qu'il aurait pu faire fructifier.",
            charniere: "Cependant, la paresse mérite peut-être d'être réhabilitée,",
            antithese: "car elle peut aussi être une forme de sagesse : elle nous invite à ne pas nous agiter inutilement et à jouir du temps présent.",
            justification_antithese: "Car notre époque valorise tellement l'activité, la rentabilité et le rendement que nous en oublions de nous reposer, de contempler et de vivre simplement, comme si le repos était une faute.",
            problematique: "La paresse est-elle un vice qu'il faut combattre ou bien une vertu qu'il faut réhabiliter ?"
        }
    },
    {
        id: 25,
        sujet: "La science peut-elle tout expliquer ?",
        reponses: {
            these: "Il semble que la science puisse tout expliquer, car son histoire est celle d'une conquête continue du savoir, chaque génération repoussant les frontières de l'ignorance.",
            justification_these: "En effet, des mystères longtemps jugés insondables — la foudre, les maladies, l'origine des espèces, la structure de la matière — ont été éclaircis par la science, ce qui nourrit l'espoir d'une explication totale du réel.",
            charniere: "Pourtant, la science a peut-être des limites indépassables,",
            antithese: "car elle explique comment le monde fonctionne, non pourquoi il existe ni quel sens lui donner.",
            justification_antithese: "Car les questions du sens, de la beauté, de l'amour et du bien ne se résolvent ni par des équations ni par des expériences : elles relèvent d'un autre registre, que la méthode scientifique ne saurait épuiser.",
            problematique: "La science peut-elle rendre compte de la totalité du réel ou bien existe-t-il des questions qui échappent par nature à son domaine ?"
        }
    },
    {
        id: 26,
        sujet: "A-t-on besoin des autres pour se connaître ?",
        reponses: {
            these: "À première vue, on n'a pas besoin des autres pour se connaître, car la connaissance de soi est une affaire intime et personnelle qui se mène dans la solitude.",
            justification_these: "En effet, c'est dans le silence et le recueillement que nous réfléchissons à ce que nous sommes, à nos désirs et à nos valeurs, comme si nous étions les seuls témoins de notre vie intérieure.",
            charniere: "Cependant, notre connaissance de nous-mêmes est peut-être plus dépendante d'autrui qu'il n'y paraît,",
            antithese: "car nous ne nous voyons jamais mieux nous-mêmes qu'à travers le regard des autres, qui révèlent des aspects de nous que nous ignorons.",
            justification_antithese: "Car un défaut que nos proches nous signalent nous échappe souvent à nous-mêmes, et l'amitié est le miroir le plus fidèle : autrui est à la fois un révélateur et un juge de ce que nous sommes.",
            problematique: "La connaissance de soi est-elle possible dans la solitude ou bien exige-t-elle la médiation d'autrui ?"
        }
    },
    {
        id: 27,
        sujet: "La loi doit-elle protéger les individus de leurs propres excès ?",
        reponses: {
            these: "Il semble évident que la loi ne doit pas protéger l'individu contre lui-même, car chacun est libre de faire ce qu'il veut de sa personne.",
            justification_these: "En effet, une loi qui voudrait empêcher les gens de manger trop, de fumer ou de boire serait liberticide et maternisante, transformant l'État en tuteur des adultes.",
            charniere: "Pourtant, certaines conduites individuelles appellent une protection légale,",
            antithese: "car elles nuisent gravement à la personne elle-même, comme la consommation de drogues dures ou les pratiques dangereuses.",
            justification_antithese: "Car l'État a la charge de la santé publique et il lui arrive de contraindre pour le bien de ceux qui ne peuvent plus se gouverner seuls, comme le montre l'obligation de porter la ceinture de sécurité.",
            problematique: "La loi doit-elle limiter les comportements individuels au nom de la protection ou bien respecter strictement la liberté de chacun sur lui-même ?"
        }
    },
    {
        id: 28,
        sujet: "Faut-il être libre pour être heureux ?",
        reponses: {
            these: "Il semble évident qu'il faut être libre pour être heureux, car un esclave ne saurait être heureux.",
            justification_these: "En effet, le bonheur suppose que l'on choisisse sa vie, ses amours et ses projets : une vie imposée par un autre n'est pas une vie désirable, quand bien même elle serait confortable.",
            charniere: "Pourtant, le lien entre liberté et bonheur n'est pas si simple,",
            antithese: "car certaines personnes privées de liberté apparente connaissent un bonheur profond, tandis que des hommes libres sont malheureux.",
            justification_antithese: "Car le bonheur dépend moins des conditions extérieures que de la manière dont on les vit intérieurement : un prisonnier peut trouver dans sa cellule une paix que le mondain libre ne connaît jamais.",
            problematique: "La liberté est-elle une condition nécessaire du bonheur ou bien peut-on être heureux même dans la contrainte ?"
        }
    },
    {
        id: 29,
        sujet: "Peut-on apprendre à être libre ?",
        reponses: {
            these: "À première vue, on n'apprend pas à être libre, car la liberté est un état naturel : elle ne s'enseigne pas, elle se constate.",
            justification_these: "En effet, nul n'a eu besoin d'apprendre à naître libre : la liberté semble être donnée avec la vie elle-même, comme une propriété de la volonté.",
            charniere: "Cependant, la liberté véritable exige un apprentissage,",
            antithese: "car elle suppose de savoir résister aux pressions, de connaître ses désirs et de se gouverner soi-même.",
            justification_antithese: "Car celui qui obéit à toutes ses impulsions n'est pas libre mais esclave de lui-même : la liberté s'apprend par la discipline, l'éducation et la réflexion, comme un art qui ne s'improvise pas.",
            problematique: "La liberté est-elle un fait donné ou bien un apprentissage qui exige effort et éducation ?"
        }
    },
    {
        id: 30,
        sujet: "Le sport est-il une école de la vie ?",
        reponses: {
            these: "Le sport semble être une école de la vie, car il enseigne l'effort, le respect des règles et le goût de la victoire.",
            justification_these: "En effet, un sportif apprend à s'entraîner, à échouer, à se relever et à travailler en équipe : autant de leçons utiles dans la vie personnelle et professionnelle.",
            charniere: "Cependant, le sport a aussi son envers,",
            antithese: "car il peut être le théâtre de la violence, du dopage et du culte de la performance à tout prix.",
            justification_antithese: "Car certains sports poussent à l'épuisement du corps et à des comportements inhumains, loin des valeurs morales qu'ils prétendent véhiculer, comme l'illustrent les scandales de dopage.",
            problematique: "Le sport est-il un moyen d'éducation morale ou bien le reflet des pires travers de notre société ?"
        }
    },
    {
        id: 31,
        sujet: "Faut-il aimer son prochain comme soi-même ?",
        reponses: {
            these: "Il semble évident qu'il faut aimer son prochain comme soi-même, car c'est l'exigence morale la plus universelle et la plus partagée par les traditions.",
            justification_these: "En effet, si chacun traitait l'autre comme il veut être traité, la violence et l'injustice disparaîtraient presque entièrement de la vie sociale.",
            charniere: "Toutefois, cette exigence peut sembler impossible,",
            antithese: "car aimer tout le monde de la même manière est hors de portée : l'amour véritable est sélectif et ne se décide pas.",
            justification_antithese: "Car nous n'aimons pas nos proches, nos amis et des inconnus avec la même intensité : l'impartialité absolue demandée par la morale est peut-être une illusion, voire une hypocrisie.",
            problematique: "L'amour universel du prochain est-il un idéal moral réalisable ou bien une exigence impossible ?"
        }
    },
    {
        id: 32,
        sujet: "Le temps nous appartient-il ?",
        reponses: {
            these: "Il semble que le temps nous appartienne, car nous disposons de nos heures et choisissons comment les employer.",
            justification_these: "En effet, nous disons que nous prenons le temps de faire une chose, que nous donnons du temps à autrui : comme s'il était une possession dont nous pouvions user à notre guise.",
            charniere: "Pourtant, cette impression de maîtrise est trompeuse,",
            antithese: "car le temps nous échappe : il passe sans nous demander notre avis et rien ne peut le retenir.",
            justification_antithese: "Car nous vieillissons malgré nous, et chaque seconde écoulée est une seconde que nous ne retrouverons jamais : la fuite du temps est l'expérience la plus universelle de notre impuissance.",
            problematique: "Le temps est-il une propriété dont nous disposons ou bien une fuite qui nous échappe irrémédiablement ?"
        }
    },
    {
        id: 33,
        sujet: "L'ennui est-il utile ?",
        reponses: {
            these: "À première vue, l'ennui est inutile, car il est ce temps vide, sans intérêt, que l'on cherche à fuir par tous les moyens.",
            justification_these: "En effet, l'ennui est souvent associé à la paresse, à l'oisiveté et à la perte de temps : on lui préfère toujours l'occupation, le divertissement ou l'action.",
            charniere: "Cependant, l'ennui peut être fécond,",
            antithese: "car il ouvre un espace intérieur où naissent la réflexion, la création et le désir.",
            justification_antithese: "Car c'est souvent dans l'ennui que l'enfant invente ses premiers jeux et que l'artiste trouve ses premières idées : en nous privant d'occupations, l'ennui nous oblige à puiser en nous-mêmes.",
            problematique: "L'ennui est-il un vide à combler ou bien une expérience féconde qu'il faut savoir cultiver ?"
        }
    },
    {
        id: 34,
        sujet: "Peut-on pardonner l'impardonnable ?",
        reponses: {
            these: "À première vue, on ne peut pas pardonner l'impardonnable, car certains actes sont si graves qu'ils dépassent toute possibilité de pardon.",
            justification_these: "En effet, pardonner le meurtre d'un enfant ou un crime contre l'humanité semble insulter la mémoire des victimes et banaliser l'horreur.",
            charniere: "Pourtant, le pardon n'a de sens que face à l'impardonnable,",
            antithese: "car c'est précisément ce qui paraît impardonnable qui appelle le pardon : sinon il n'y aurait rien à pardonner.",
            justification_antithese: "Car si l'on ne pardonnait que ce qui est facile à pardonner, le pardon ne serait plus qu'une formalité sans grandeur, indigne de ce nom.",
            problematique: "Le pardon doit-il avoir des limites ou bien sa grandeur consiste-t-elle à s'exercer même au-delà de toute limite ?"
        }
    },
    {
        id: 35,
        sujet: "La curiosité est-elle un défaut ?",
        reponses: {
            these: "À première vue, la curiosité est un défaut, car la curiosité excessive peut être indiscrète, voire dangereuse.",
            justification_these: "En effet, on dit parfois que la curiosité est un vilain défaut : elle pousse à fouiller dans la vie des autres et à se mêler de ce qui ne nous regarde pas.",
            charniere: "Toutefois, la curiosité est aussi la source de tout savoir,",
            antithese: "car c'est elle qui pousse l'enfant à questionner le monde et le savant à chercher.",
            justification_antithese: "Car sans curiosité, il n'y aurait ni science, ni exploration, ni progrès : c'est l'envie de comprendre qui fait avancer l'humanité depuis ses origines.",
            problematique: "La curiosité est-elle un travers à corriger ou bien une vertu à cultiver ?"
        }
    },
    {
        id: 36,
        sujet: "Faut-il suivre la mode ?",
        reponses: {
            these: "Il semble naturel de suivre la mode, car elle nous intègre dans un groupe et nous permet de nous sentir à notre place.",
            justification_these: "En effet, porter les mêmes vêtements que les autres, partager les mêmes références, c'est une manière d'appartenir à une communauté et d'être reconnu par ses pairs.",
            charniere: "Pourtant, suivre la mode a un coût,",
            antithese: "car c'est souvent renoncer à son propre goût pour adopter celui du plus grand nombre.",
            justification_antithese: "Car la mode change sans cesse et impose ses diktats : celui qui la suit aveuglément n'est plus lui-même, il est ce que les autres attendent qu'il soit, prisonnier d'un conformisme qui le vide de sa singularité.",
            problematique: "Suivre la mode est-il une manière de s'intégrer ou bien une aliénation à laquelle il faut résister ?"
        }
    },
    {
        id: 37,
        sujet: "L'échec est-il une bonne chose ?",
        reponses: {
            these: "À première vue, l'échec est une mauvaise chose, car il fait mal, déçoit et nous éloigne de nos objectifs.",
            justification_these: "En effet, personne n'aspire à échouer : l'échec est vécu comme une blessure et une remise en question de sa valeur, parfois même de son identité.",
            charniere: "Cependant, l'échec est souvent la meilleure école,",
            antithese: "car il révèle nos faiblesses et nous oblige à progresser.",
            justification_antithese: "Car les grandes réussites sont presque toujours passées par des échecs retentissants : l'échec apprend l'humilité, la persévérance et le discernement, trois vertus sans lesquelles nul ne saurait progresser durablement.",
            problematique: "L'échec est-il un mal dont il faut se garder ou bien une étape nécessaire de toute réussite ?"
        }
    },
    {
        id: 38,
        sujet: "Le silence est-il toujours d'or ?",
        reponses: {
            these: "Il semble évident que le silence est d'or, car se taire évite bien des conflits et préserve la paix.",
            justification_these: "En effet, la parole peut blesser, trahir ou envenimer une situation : le silence, lui, ne fait de mal à personne et laisse le temps à la réflexion.",
            charniere: "Toutefois, il y a des silences coupables,",
            antithese: "car se taire devant une injustice, c'est laisser faire le mal.",
            justification_antithese: "Car celui qui assiste à une injustice sans rien dire en devient, d'une certaine manière, le complice : le silence peut être une forme de lâcheté, voire une trahison.",
            problematique: "Le silence est-il toujours préférable à la parole ou bien y a-t-il des moments où il faut parler ?"
        }
    },
    {
        id: 39,
        sujet: "Peut-on être ami avec quelqu'un qui pense différemment ?",
        reponses: {
            these: "À première vue, on ne peut pas être ami avec quelqu'un qui pense différemment, car l'amitié repose sur une certaine complicité de pensée et de valeurs.",
            justification_these: "En effet, il est difficile d'être proche de quelqu'un dont les convictions heurtent profondément les nôtres, surtout lorsqu'elles touchent à l'essentiel.",
            charniere: "Cependant, l'amitié véritable résiste aux différences d'opinion,",
            antithese: "car elle se noue sur autre chose que l'accord intellectuel.",
            justification_antithese: "Car ce que nous aimons dans un ami, c'est d'abord une personne, un caractère, une manière d'être, plus qu'un ensemble de thèses : la richesse d'une amitié vient parfois de ce que l'autre voit le monde autrement que nous.",
            problematique: "L'amitié exige-t-elle une communauté de pensée ou bien peut-elle se passer de l'accord des opinions ?"
        }
    },
    {
        id: 40,
        sujet: "Le jeu est-il sérieux ?",
        reponses: {
            these: "À première vue, le jeu n'est pas sérieux, car c'est justement parce qu'il n'a pas de conséquence grave qu'il est un jeu.",
            justification_these: "En effet, on oppose traditionnellement le jeu au travail, aux responsabilités et aux affaires sérieuses : le jeu est le domaine de la gratuité et de l'insouciance.",
            charniere: "Pourtant, le jeu est pris très au sérieux par ceux qui jouent,",
            antithese: "car un enfant qui joue, un sportif en compétition ou un comédien sur scène y mettent tout leur être.",
            justification_antithese: "Car le jeu a ses règles, ses enjeux et ses exigences : il engage autant que bien des activités dites sérieuses, et peut même être le lieu d'une véritable création.",
            problematique: "Le jeu est-il un simple divertissement sans conséquence ou bien engage-t-il sérieusement celui qui joue ?"
        }
    },
    {
        id: 41,
        sujet: "Faut-il des frontières ?",
        reponses: {
            these: "Il semble qu'il faille des frontières, car elles délimitent les États, protègent les peuples et organisent les relations internationales.",
            justification_these: "En effet, sans frontières, il n'y aurait plus de droit d'asile, plus de citoyenneté, plus de communauté politique clairement définie : le monde deviendrait un espace indifférencié.",
            charniere: "Pourtant, les frontières séparent aussi les hommes,",
            antithese: "car elles empêchent la libre circulation de ceux qui fuient la misère ou la guerre.",
            justification_antithese: "Car la frontière est souvent vécue comme un mur par ceux qu'elle arrête : elle peut être une protection ou une barrière inhumaine selon le côté où l'on se trouve.",
            problematique: "Les frontières sont-elles nécessaires à l'organisation du monde ou bien des obstacles à la solidarité humaine ?"
        }
    },
    {
        id: 42,
        sujet: "La guerre est-elle inévitable ?",
        reponses: {
            these: "À première vue, la guerre est inévitable, car l'histoire montre qu'il y a toujours eu des conflits armés.",
            justification_these: "En effet, la rivalité pour les ressources, la puissance et les territoires semble inscrite dans la nature humaine et dans celle des États, comme si la violence était une donnée permanente de la vie collective.",
            charniere: "Cependant, la guerre n'est peut-être pas une fatalité,",
            antithese: "car des peuples autrefois ennemis vivent aujourd'hui en paix.",
            justification_antithese: "Car les institutions internationales, le commerce et les échanges culturels ont permis de sortir de cycles de violence longtemps jugés inévitables, comme l'illustre la réconciliation franco-allemande après 1945.",
            problematique: "La guerre est-elle une fatalité de la condition humaine ou bien une réalité que l'on peut espérer dépasser ?"
        }
    },
    {
        id: 43,
        sujet: "Le luxe est-il un besoin ?",
        reponses: {
            these: "À première vue, le luxe n'est pas un besoin, car il est superflu par définition.",
            justification_these: "En effet, on peut vivre sans bijoux, sans voiture de sport ou sans vêtements de marque : ce ne sont pas des nécessités vitales, et leur absence ne met pas la vie en danger.",
            charniere: "Pourtant, le luxe répond à des besoins symboliques et sociaux profonds,",
            antithese: "car il satisfait un désir de reconnaissance, de distinction et d'appartenance.",
            justification_antithese: "Car un objet de luxe n'est pas seulement un objet : il dit quelque chose de celui qui le possède et de la place qu'il occupe dans le monde social, ce qui en fait bien plus qu'un simple ornement.",
            problematique: "Le luxe est-il un superflu dont on peut se passer ou bien répond-il à des besoins essentiels d'une autre nature que les besoins matériels ?"
        }
    },
    {
        id: 44,
        sujet: "Faut-il oublier pour vivre ?",
        reponses: {
            these: "Il semble qu'il faille oublier pour vivre, car le ressassement du passé empêche d'avancer et empoisonne le présent.",
            justification_these: "En effet, celui qui se souvient sans cesse de ses échecs ou de ses souffrances ne peut ni agir ni espérer : le passé pèse sur lui comme une chape de plomb.",
            charniere: "Toutefois, oublier peut aussi être dangereux,",
            antithese: "car un peuple qui oublie son histoire est condamné à la répéter.",
            justification_antithese: "Car la mémoire est ce qui permet de comprendre le présent et de tirer les leçons du passé, tant pour les individus que pour les sociétés : l'oubli volontaire est souvent une forme de fuite devant la responsabilité.",
            problematique: "L'oubli est-il nécessaire à la vie ou bien la mémoire est-elle une condition de la lucidité et de la justice ?"
        }
    },
    {
        id: 45,
        sujet: "Peut-on être trop gentil ?",
        reponses: {
            these: "Il semble qu'on ne puisse pas être trop gentil, car la gentillesse est une qualité morale unanimement appréciée.",
            justification_these: "En effet, une personne gentille fait du bien autour d'elle, apaise les tensions et crée un climat de confiance propice à la vie commune.",
            charniere: "Pourtant, la gentillesse excessive peut devenir une faiblesse,",
            antithese: "car elle se laisse abuser, n'ose pas dire non et finit par s'oublier elle-même.",
            justification_antithese: "Car être toujours gentil avec tout le monde expose à se faire exploiter et peut conduire à trahir ses propres valeurs : la gentillesse sans fermeté devient complicité avec l'injustice.",
            problematique: "La gentillesse est-elle toujours une vertu ou bien peut-elle devenir un défaut lorsqu'elle manque de fermeté ?"
        }
    },
    {
        id: 46,
        sujet: "La solitude est-elle une richesse ?",
        reponses: {
            these: "À première vue, la solitude est un malheur, car elle est souvent vécue comme un isolement douloureux.",
            justification_these: "En effet, l'homme est un être social : privé de compagnie, il souffre, s'étiole et peut sombrer dans la dépression.",
            charniere: "Cependant, la solitude choisie est féconde,",
            antithese: "car elle permet la réflexion, la création et la rencontre avec soi-même.",
            justification_antithese: "Car les grandes œuvres — livres, symphonies, tableaux — sont souvent nées dans la solitude d'un esprit qui s'isole pour mieux penser et mieux créer.",
            problematique: "La solitude est-elle une épreuve à fuir ou bien une expérience précieuse à cultiver ?"
        }
    },
    {
        id: 47,
        sujet: "Faut-il juger les autres ?",
        reponses: {
            these: "Il semble qu'il faille juger les autres, car nous ne pouvons pas vivre ensemble sans évaluer les comportements d'autrui.",
            justification_these: "En effet, juger permet de distinguer ce qui est acceptable de ce qui ne l'est pas, et de protéger les plus faibles contre les abus des plus forts.",
            charniere: "Toutefois, juger autrui est souvent injuste,",
            antithese: "car nous ne connaissons ni son histoire, ni ses raisons, ni ses souffrances.",
            justification_antithese: "Car porter un jugement définitif sur quelqu'un, c'est oublier que chacun peut changer et que nous ne voyons jamais l'autre tout entier : nos jugements sont toujours partiels et souvent injustes.",
            problematique: "Faut-il juger les autres ou bien le jugement moral est-il toujours présomptueux et injuste ?"
        }
    },
    {
        id: 48,
        sujet: "L'égalité est-elle une utopie ?",
        reponses: {
            these: "L'égalité semble une utopie, car partout les différences de talents, de fortune et de pouvoir rétablissent l'inégalité.",
            justification_these: "En effet, il y aura toujours des individus plus doués ou mieux placés que d'autres : l'égalité parfaite paraît impossible dans les faits.",
            charniere: "Cependant, l'égalité n'est peut-être pas si utopique,",
            antithese: "car des sociétés ont réduit considérablement les inégalités par des lois, des impôts et des institutions communes.",
            justification_antithese: "Car l'égalité n'est pas l'identité : elle peut être une égalité de droits, de dignité et de chances, même si les situations diffèrent, comme le montre l'école gratuite et obligatoire.",
            problematique: "L'égalité est-elle un idéal inaccessible ou bien une exigence réalisable, au moins partiellement ?"
        }
    },
    {
        id: 49,
        sujet: "Peut-on être indifférent à tout ?",
        reponses: {
            these: "Il semble qu'on puisse être indifférent à tout, car certaines personnes affirment ne rien attendre de la vie.",
            justification_these: "En effet, l'indifférence protège : celui qui ne tient à rien ne peut être déçu ni blessé, et il se met ainsi à l'abri des souffrances de l'attachement.",
            charniere: "Pourtant, l'indifférence absolue est impossible,",
            antithese: "car nous tenons toujours à quelque chose, ne serait-ce qu'à notre propre survie.",
            justification_antithese: "Car même celui qui se dit indifférent agit : il mange, il se soigne, il évite la douleur, ce qui suppose des préférences minimales et un attachement à sa propre existence.",
            problematique: "L'indifférence totale est-elle possible ou bien tout être humain est-il nécessairement attaché à quelque chose ?"
        }
    },
    {
        id: 50,
        sujet: "Le bonheur dépend-il de nous ?",
        reponses: {
            these: "Il semble que le bonheur dépende de nous, car chacun peut choisir sa manière de vivre et de réagir aux événements.",
            justification_these: "En effet, deux personnes placées dans la même situation peuvent être l'une heureuse et l'autre malheureuse : c'est donc une affaire d'attitude intérieure.",
            charniere: "Pourtant, le bonheur dépend aussi de conditions qui nous échappent,",
            antithese: "car il suppose la santé, la paix, un minimum de ressources et la présence de ceux qu'on aime.",
            justification_antithese: "Car nul ne peut être heureux dans un corps souffrant, dans un pays en guerre ou dans une misère extrême : le bonheur exige des conditions objectives que la seule volonté ne peut produire.",
            problematique: "Le bonheur est-il le fruit de notre volonté ou bien dépend-il largement de conditions extérieures ?"
        }
    },
    {
        id: 51,
        sujet: "Faut-il tout pardonner aux enfants ?",
        reponses: {
            these: "À première vue, il faut tout pardonner aux enfants, car ils ne savent pas ce qu'ils font et il convient donc d'être indulgent avec eux.",
            justification_these: "En effet, l'enfant n'a pas encore la maturité qui permet de mesurer la portée de ses actes : le juger comme un adulte serait injuste.",
            charniere: "Cependant, tout pardonner à un enfant, c'est l'empêcher de grandir,",
            antithese: "car il ne peut apprendre la responsabilité et le respect d'autrui sans limites posées.",
            justification_antithese: "Car l'enfant a besoin de cadres pour se construire : une éducation sans exigence produit des adultes incapables de vivre en société et de supporter la moindre frustration.",
            problematique: "L'indulgence envers l'enfant doit-elle être sans bornes ou bien doit-elle être tempérée par l'exigence éducative ?"
        }
    },
    {
        id: 52,
        sujet: "La vieillesse est-elle un naufrage ?",
        reponses: {
            these: "Il semble que la vieillesse soit un naufrage, car elle s'accompagne de la perte des forces, des proches et parfois de l'autonomie.",
            justification_these: "En effet, vieillir, c'est voir son corps se dérober, ses amis disparaître et son avenir se rétrécir : l'image du naufrage traduit bien cette expérience de la perte.",
            charniere: "Toutefois, la vieillesse peut aussi être un temps de plénitude,",
            antithese: "car elle offre la sagesse, la sérénité et la possibilité de transmettre.",
            justification_antithese: "Car les anciens possèdent une expérience, un recul et une disponibilité que la jeunesse n'a pas : ils ont beaucoup à donner à ceux qui savent les écouter.",
            problematique: "La vieillesse est-elle une déchéance inéluctable ou bien un âge de la vie qui peut avoir sa propre richesse ?"
        }
    },
    {
        id: 53,
        sujet: "Le voyage est-il une fuite ?",
        reponses: {
            these: "Il semble que le voyage soit une fuite, car on part souvent pour échapper à son quotidien, à ses problèmes ou à soi-même.",
            justification_these: "En effet, changer de lieu, c'est d'abord changer d'air, oublier ses soucis et se dépayser : le voyage procure une légèreté qui ressemble à une délivrance.",
            charniere: "Pourtant, le voyage est aussi une rencontre,",
            antithese: "car il nous met en contact avec des paysages, des cultures et des personnes qui transforment notre regard.",
            justification_antithese: "Car celui qui voyage vraiment revient changé : il a compris d'autres manières de vivre et a relativisé la sienne, ce qui est tout le contraire d'une fuite.",
            problematique: "Le voyage est-il une manière de fuir le réel ou bien un moyen de l'habiter plus pleinement ?"
        }
    },
    {
        id: 54,
        sujet: "Peut-on rire de ses propres malheurs ?",
        reponses: {
            these: "À première vue, on ne peut pas rire de ses propres malheurs, car rire d'eux serait les nier ou faire preuve d'inconséquence.",
            justification_these: "En effet, la souffrance demande à être reconnue et prise au sérieux : en rire serait une forme de déni, voire une trahison de soi-même.",
            charniere: "Pourtant, l'humour est souvent la meilleure manière de supporter ce qui nous accable,",
            antithese: "car rire de ses malheurs, c'est prendre distance, refuser d'être totalement écrasé par eux.",
            justification_antithese: "Car l'humour sur soi affirme une forme de liberté intérieure : celui qui peut rire de son malheur montre qu'il n'est pas entièrement soumis à lui.",
            problematique: "Rire de ses malheurs est-il une fuite ou bien une manière courageuse de les surmonter ?"
        }
    },
    {
        id: 55,
        sujet: "La lecture est-elle une perte de temps ?",
        reponses: {
            these: "À première vue, la lecture peut sembler une perte de temps, car elle n'a pas d'effet immédiat sur le monde.",
            justification_these: "En effet, lire un roman ne nourrit pas, ne soigne pas, ne construit rien de matériel : cela semble un pur loisir, voire une oisiveté.",
            charniere: "Cependant, la lecture est tout sauf une perte,",
            antithese: "car elle forme l'esprit, développe l'imaginaire et fait vivre mille vies en une seule.",
            justification_antithese: "Car lire, c'est rencontrer des pensées, des mondes et des sensibilités que l'on n'aurait jamais connus autrement : la lecture est une école de l'humanité, irremplaçable.",
            problematique: "La lecture est-elle un simple passe-temps ou bien une activité essentielle à la formation de l'esprit ?"
        }
    },
    {
        id: 56,
        sujet: "La politesse est-elle hypocrite ?",
        reponses: {
            these: "À première vue, la politesse est hypocrite, car elle nous fait dire des choses que nous ne pensons pas.",
            justification_these: "En effet, dire bonjour à quelqu'un qu'on n'aime pas, c'est dissimuler ses sentiments véritables sous une formule convenue.",
            charniere: "Pourtant, la politesse est d'abord une forme de respect,",
            antithese: "car elle reconnaît l'autre comme un être avec qui il faut vivre.",
            justification_antithese: "Car sans politesse, la vie sociale serait un choc permanent d'égoïsmes : la politesse est le minimum de considération dû à chacun, indépendamment de nos sentiments.",
            problematique: "La politesse est-elle une comédie sociale ou bien une condition élémentaire de la vie commune ?"
        }
    },
    {
        id: 57,
        sujet: "Faut-il aimer la nature ?",
        reponses: {
            these: "Il semble qu'il faille aimer la nature, car elle est notre milieu de vie, notre source et notre condition.",
            justification_these: "En effet, sans air, sans eau, sans sol, nous ne pourrions pas exister : la nature est notre maison commune, et la détruire revient à scier la branche sur laquelle nous sommes assis.",
            charniere: "Toutefois, la nature n'est pas toujours bienveillante,",
            antithese: "car elle peut être hostile, dangereuse et indifférente à nos souffrances.",
            justification_antithese: "Car séismes, tempêtes, maladies et prédateurs nous rappellent que la nature ne se soucie pas de l'homme : l'aimer ne doit pas conduire à idéaliser sa férocité.",
            problematique: "La nature mérite-t-elle notre amour ou bien devons-nous entretenir avec elle un rapport de prudence et de maîtrise ?"
        }
    },
    {
        id: 58,
        sujet: "Le temps des études est-il du temps perdu ?",
        reponses: {
            these: "À première vue, les études prennent du temps : des années passées à apprendre sans encore gagner sa vie.",
            justification_these: "En effet, on peut trouver que ces années d'apprentissage retardent l'entrée dans la vie active et l'autonomie financière, et qu'elles sont donc improductives.",
            charniere: "Cependant, les études sont un investissement décisif,",
            antithese: "car elles forment la personne : elles donnent des savoirs, une culture et une capacité à penser qui servent toute la vie.",
            justification_antithese: "Car un esprit formé ne vaut pas seulement par ce qu'il sait, mais par ce qu'il est devenu : plus lucide, plus libre, plus riche intérieurement, capable de se réinventer tout au long de sa vie.",
            problematique: "Le temps des études est-il un retard à combler ou bien un investissement irremplaçable ?"
        }
    },
    {
        id: 59,
        sujet: "Peut-on être trop honnête ?",
        reponses: {
            these: "Il semble qu'on ne puisse pas être trop honnête, car l'honnêteté est une vertu sans excès.",
            justification_these: "En effet, dire la vérité, ne pas voler, ne pas tromper : ce sont des exigences morales claires et unanimement reconnues.",
            charniere: "Pourtant, une honnêteté brutale peut blesser,",
            antithese: "car dire tout ce qu'on pense sans égard peut être cruel et inutilement destructeur.",
            justification_antithese: "Car la vérité a besoin d'être dite avec tact : ce n'est pas mentir que de ménager autrui en lui disant le vrai de manière appropriée, en tenant compte du moment et de sa fragilité.",
            problematique: "L'honnêteté doit-elle être totale et sans concession ou bien s'accommoder d'une certaine prudence dans son expression ?"
        }
    },
    {
        id: 60,
        sujet: "L'argent peut-il tout acheter ?",
        reponses: {
            these: "Il semble que l'argent puisse tout acheter, car tout ce qui a un prix s'obtient avec de l'argent.",
            justification_these: "En effet, avec de l'argent on achète une maison, un voyage, des soins, des œuvres d'art : le pouvoir d'achat paraît illimité, et tout semble avoir un prix sur le marché.",
            charniere: "Cependant, certaines choses échappent à toute transaction,",
            antithese: "car l'amitié, la confiance, l'amour, le talent et le temps ne s'achètent pas.",
            justification_antithese: "Car ce qui s'achète perd précisément la valeur qui en faisait le prix : un ami acheté n'est pas un ami, et une œuvre d'amour monnayée n'est plus un don.",
            problematique: "L'argent est-il un moyen universel d'échange ou bien existe-t-il des biens essentiels qui échappent à toute monétarisation ?"
        }
    },
    {
        id: 61,
        sujet: "Faut-il respecter toutes les opinions ?",
        reponses: {
            these: "Il semble qu'il faille respecter toutes les opinions, car chacun a droit à sa pensée, et le respect est dû à la personne.",
            justification_these: "En effet, la liberté d'opinion est un droit fondamental : nul ne peut être contraint de penser comme un autre, et la diversité des points de vue est une richesse.",
            charniere: "Toutefois, toutes les opinions ne se valent pas,",
            antithese: "car certaines sont fausses, dangereuses ou contraires aux faits établis.",
            justification_antithese: "Car respecter la personne n'oblige pas à respecter toutes ses opinions : on peut respecter un être humain tout en combattant fermement ses idées, surtout lorsqu'elles appellent à la haine ou à la violence.",
            problematique: "Toutes les opinions méritent-elles le même respect ou bien certaines doivent-elles être combattues ?"
        }
    },
    {
        id: 62,
        sujet: "L'homme est-il naturellement bon ?",
        reponses: {
            these: "Il semble que l'homme soit naturellement bon, car les enfants ont spontanément de la compassion pour ceux qui souffrent.",
            justification_these: "En effet, la violence et la méchanceté semblent souvent venir de l'éducation ou de la société, non de la nature elle-même : l'homme serait corrompu par la vie sociale.",
            charniere: "Pourtant, l'histoire jette un doute sur cette bonté naturelle,",
            antithese: "car les violences sont si constantes que l'on peut douter de la bonté de l'homme.",
            justification_antithese: "Car les guerres, les crimes et les égoïsmes ne sont pas seulement des faits de société : ils semblent inscrits dans la condition humaine, ce qui invite à se méfier de l'idée d'une bonté originelle.",
            problematique: "L'homme est-il naturellement porté au bien ou bien est-ce la société qui le rend bon ou mauvais ?"
        }
    },
    {
        id: 63,
        sujet: "Peut-on aimer la laideur ?",
        reponses: {
            these: "À première vue, on ne peut pas aimer la laideur, car on ne saurait aimer ce qui est laid, la laideur étant précisément ce qui déplaît.",
            justification_these: "En effet, la laideur suscite la répugnance ou l'indifférence esthétique : elle est l'opposé du beau et semble ne pouvoir susciter que le rejet.",
            charniere: "Pourtant, certaines œuvres jouent de la laideur et nous touchent profondément,",
            antithese: "car une ruine, un visage marqué ou une scène brutale peuvent nous émouvoir plus qu'une beauté lisse.",
            justification_antithese: "Car la laideur peut avoir une beauté paradoxale : elle dit quelque chose de vrai sur la condition humaine, la souffrance et la fragilité, ce que la beauté idéale ne peut exprimer.",
            problematique: "La laideur peut-elle devenir belle ou bien la beauté et la laideur s'excluent-elles nécessairement ?"
        }
    },
    {
        id: 64,
        sujet: "La solitude est-elle dangereuse ?",
        reponses: {
            these: "Il semble que la solitude soit dangereuse, car l'homme isolé peut perdre le sens du réel et de la mesure.",
            justification_these: "En effet, la solitude prolongée peut mener à la dépression, à l'angoisse et à des troubles du jugement : l'homme a besoin des autres pour se sentir exister.",
            charniere: "Toutefois, la solitude peut aussi protéger,",
            antithese: "car elle met à l'abri des mauvaises influences et permet de réfléchir par soi-même.",
            justification_antithese: "Car celui qui sait s'isoler volontairement développe son indépendance d'esprit : il n'est plus prisonnier du regard des autres ni des modes du moment.",
            problematique: "La solitude est-elle une épreuve à craindre ou bien une expérience à cultiver avec discernement ?"
        }
    },
    {
        id: 65,
        sujet: "La famille est-elle un refuge ?",
        reponses: {
            these: "Il semble que la famille soit un refuge, car elle offre un soutien inconditionnel, quel que soit ce qui arrive.",
            justification_these: "En effet, en cas de maladie, d'échec ou de détresse, la famille est souvent la première à répondre présente, et son soutien est vécu comme allant de soi.",
            charniere: "Cependant, la famille peut aussi être un lieu de souffrance,",
            antithese: "car conflits, violences et incompréhensions y sont monnaie courante.",
            justification_antithese: "Car ce sont parfois les proches qui font le plus de mal : les liens du sang n'excluent ni la cruauté ni l'injustice, et la proximité rend les blessures plus profondes.",
            problematique: "La famille est-elle par nature un refuge ou bien peut-elle être un lieu de souffrance dont il faut savoir s'éloigner ?"
        }
    },
    {
        id: 66,
        sujet: "Faut-il tout comprendre pour tout pardonner ?",
        reponses: {
            these: "Il semble qu'il faille tout comprendre pour tout pardonner, car comprendre, c'est déjà cesser d'accuser.",
            justification_these: "En effet, quand on connaît les circonstances, l'histoire et les motivations d'un acte, on devient plus indulgent : la connaissance des causes adoucit le jugement.",
            charniere: "Pourtant, comprendre n'est pas excuser,",
            antithese: "car on peut parfaitement comprendre un crime sans le pardonner pour autant.",
            justification_antithese: "Car comprendre les raisons d'un acte, c'est l'expliquer, non le justifier : la connaissance n'abolit pas la responsabilité, et le pardon reste une décision qui excède la seule compréhension.",
            problematique: "Comprendre un acte suffit-il à le pardonner ou bien la compréhension laisse-t-elle intacte l'exigence de justice ?"
        }
    },
    {
        id: 67,
        sujet: "Le désir est-il une souffrance ?",
        reponses: {
            these: "Il semble que le désir soit une souffrance, car désirer, c'est manquer de ce qu'on n'a pas.",
            justification_these: "En effet, le désir est tendu vers ce qui nous fait défaut : il est l'expérience d'un vide et d'une attente, souvent douloureuse, comme le montre l'impatience de celui qui attend.",
            charniere: "Pourtant, le désir est aussi la source de notre élan vital,",
            antithese: "car sans désir, la vie serait plate, immobile et sans saveur.",
            justification_antithese: "Car ce n'est pas le désir qui est souffrance, mais son impossibilité de se satisfaire : le désir lui-même est une force qui nous met en mouvement et donne du prix à ce que nous obtenons.",
            problematique: "Le désir est-il essentiellement souffrance ou bien est-il la source même de notre vitalité ?"
        }
    },
    {
        id: 68,
        sujet: "Peut-on être heureux dans un monde injuste ?",
        reponses: {
            these: "Il semble qu'on puisse être heureux dans un monde injuste, car chacun peut trouver du bonheur dans sa sphère privée.",
            justification_these: "En effet, on rencontre des gens heureux dans des pays pauvres ou injustes : le bonheur ne dépend pas uniquement de la justice du monde, mais aussi de la manière dont chacun vit sa vie.",
            charniere: "Pourtant, un bonheur fondé sur l'ignorance de l'injustice est fragile,",
            antithese: "car être heureux tandis que d'autres souffrent injustement suppose une certaine cécité morale.",
            justification_antithese: "Car la conscience de l'injustice d'autrui finit par ronger le bonheur : on ne peut durablement se réjouir en sachant que d'autres souffrent par notre faute ou par notre indifférence.",
            problematique: "Le bonheur est-il possible indépendamment de la justice du monde ou bien exige-t-il que le monde soit au moins un peu juste ?"
        }
    },
    {
        id: 69,
        sujet: "Faut-il obéir à sa conscience ?",
        reponses: {
            these: "Il semble qu'il faille obéir à sa conscience, car elle est la voix intérieure qui nous dit ce qui est bien et mal.",
            justification_these: "En effet, agir contre sa conscience, c'est se trahir soi-même et perdre l'estime de soi, ce qui est une souffrance plus grande que bien des échecs extérieurs.",
            charniere: "Pourtant, la conscience n'est pas toujours fiable,",
            antithese: "car elle peut être le produit de préjugés, d'une éducation particulière ou d'une époque.",
            justification_antithese: "Car des hommes ont commis des crimes au nom de leur conscience : la sincérité n'est pas une garantie de vérité morale, et il faut parfois soumettre ses intuitions à la critique de la raison.",
            problematique: "La conscience est-elle une boussole sûre ou bien faut-il la soumettre au contrôle de la raison et de la critique ?"
        }
    },
    {
        id: 70,
        sujet: "L'humour est-il une forme de courage ?",
        reponses: {
            these: "À première vue, l'humour n'est pas du courage, car c'est un jeu, un divertissement, une légèreté.",
            justification_these: "En effet, rire semble à l'opposé de l'affrontement : on rit pour ne pas se battre, pour esquiver le sérieux et éviter la confrontation.",
            charniere: "Pourtant, faire de l'humour dans l'épreuve, c'est faire preuve de courage,",
            antithese: "car c'est refuser d'être totalement écrasé par la difficulté.",
            justification_antithese: "Car les humoristes qui racontent l'horreur des camps ou de la guerre font preuve d'un courage singulier : celui de dire le pire en le rendant supportable, et de maintenir vivante la liberté de l'esprit dans les pires conditions.",
            problematique: "L'humour est-il une fuite ou bien une forme de courage qui permet de tenir face à l'insupportable ?"
        }
    },
    {
        id: 71,
        sujet: "La fatigue est-elle seulement physique ?",
        reponses: {
            these: "Il semble que la fatigue soit purement physique, car elle vient de l'effort, du manque de sommeil ou de maladie.",
            justification_these: "En effet, on se sent fatigué après avoir couru, veillé ou lutté contre un virus : cela se mesure dans le corps, et le repos suffit généralement à la dissiper.",
            charniere: "Pourtant, il existe une fatigue de l'âme,",
            antithese: "car celle qui vient du sens perdu, de l'ennui ou du désespoir ne se guérit pas par le sommeil.",
            justification_antithese: "Car certaines personnes se sentent épuisées alors qu'elles n'ont rien fait : leur fatigue est morale, elle a sa source dans le sens ou l'absence de sens, et elle demande un autre remède que le repos.",
            problematique: "La fatigue se réduit-elle à ses dimensions physiques ou bien engage-t-elle aussi le psychisme et le sens de la vie ?"
        }
    },
    {
        id: 72,
        sujet: "Peut-on tout dire sous prétexte d'art ?",
        reponses: {
            these: "Il semble qu'on puisse tout dire au nom de l'art, car l'artiste a une liberté particulière, celle de provoquer et de déranger.",
            justification_these: "En effet, l'histoire de l'art est faite de scandales : des œuvres qui ont choqué leur époque sont aujourd'hui considérées comme des chefs-d'œuvre, ce qui invite à la prudence dans la condamnation.",
            charniere: "Pourtant, la liberté artistique a des limites,",
            antithese: "car certaines provocations humilient, insultent ou propagent la haine.",
            justification_antithese: "Car l'art n'est pas au-dessus des lois : la liberté d'expression artistique n'autorise ni la diffamation ni l'incitation à la violence, et la création ne saurait servir de prétexte à la nuisance.",
            problematique: "L'art justifie-t-il toutes les audaces ou bien existe-t-il des limites morales que même l'artiste doit respecter ?"
        }
    },
    {
        id: 73,
        sujet: "L'habitude est-elle une seconde nature ?",
        reponses: {
            these: "Il semble que l'habitude soit une seconde nature, car elle s'installe en nous jusqu'à devenir automatique.",
            justification_these: "En effet, certaines habitudes — se lever tôt, dire bonjour, ranger — s'accomplissent sans y penser, comme des réflexes : on les dirait inscrites dans notre être.",
            charniere: "Pourtant, l'habitude n'est pas nature,",
            antithese: "car elle est acquise, donc elle peut se perdre et se transformer.",
            justification_antithese: "Car on peut défaire une habitude par un effort volontaire : elle n'a pas la rigidité d'un instinct ni d'un déterminisme biologique, et c'est précisément ce qui rend possible l'éducation et le changement.",
            problematique: "L'habitude est-elle une force naturelle qui nous gouverne ou bien une disposition acquise que nous pouvons modifier ?"
        }
    },
    {
        id: 74,
        sujet: "Faut-il apprendre à s'ennuyer ?",
        reponses: {
            these: "Il semble étrange d'apprendre à s'ennuyer, car l'ennui est ce dont on cherche précisément à se débarrasser.",
            justification_these: "En effet, notre époque offre mille distractions : pourquoi cultiver l'ennui quand on peut s'occuper, se divertir et remplir chaque instant ?",
            charniere: "Pourtant, l'ennui a une valeur qu'il faut redécouvrir,",
            antithese: "car c'est dans ses moments vides que naissent les idées, les questions et les désirs profonds.",
            justification_antithese: "Car en fuyant systématiquement l'ennui, nous nous privons d'un espace intérieur où l'esprit se déploie librement : apprendre à s'ennuyer, c'est apprendre à penser par soi-même.",
            problematique: "L'ennui est-il un mal à éliminer ou bien une expérience précieuse qu'il faut apprendre à accueillir ?"
        }
    },
    {
        id: 75,
        sujet: "Peut-on vivre sans projet ?",
        reponses: {
            these: "Il semble qu'on puisse vivre sans projet, car beaucoup de gens vivent au jour le jour, sans plan à long terme.",
            justification_these: "En effet, la vie apporte son lot d'imprévus : à quoi bon se fixer des objectifs qui seront peut-être contrariés par les circonstances ?",
            charniere: "Pourtant, vivre sans projet, c'est se laisser porter,",
            antithese: "car l'existence devient alors une simple succession de moments sans direction.",
            justification_antithese: "Car le projet donne un sens et une orientation à la vie : il est ce qui permet de se lever le matin, de se sentir utile et de relier les jours entre eux dans une histoire cohérente.",
            problematique: "Le projet est-il nécessaire à une vie pleinement humaine ou bien peut-on vivre de manière satisfaisante sans lui ?"
        }
    },
    {
        id: 76,
        sujet: "La musique adoucit-elle les mœurs ?",
        reponses: {
            these: "Il semble que la musique adoucisse les mœurs, car elle apaise, rassemble et élève l'âme.",
            justification_these: "En effet, la musique a des effets apaisants sur le corps et sur l'esprit : elle calme les tensions, unit les personnes et accompagne les moments les plus importants de la vie.",
            charniere: "Pourtant, certaines musiques exaltent la violence,",
            antithese: "car elles peuvent être utilisées comme instrument de propagande ou d'endoctrinement.",
            justification_antithese: "Car la musique n'est pas neutre : elle peut servir à mobiliser les foules, à préparer à la guerre ou à renforcer des idéologies, comme l'ont montré certains régimes du XXe siècle.",
            problematique: "La musique a-t-elle un effet moralisateur naturel ou bien son influence dépend-elle entièrement de l'usage qu'on en fait ?"
        }
    },
    {
        id: 77,
        sujet: "Faut-il avoir peur de ses désirs ?",
        reponses: {
            these: "Il semble qu'il faille avoir peur de ses désirs, car ils peuvent nous emporter et nous faire commettre des actes regrettables.",
            justification_these: "En effet, les désirs violents ou excessifs peuvent ruiner une vie : dépendances, addictions et crimes passionnels en sont la triste illustration.",
            charniere: "Pourtant, il ne faut pas craindre ses désirs,",
            antithese: "car ils sont l'expression de notre vitalité et le moteur de nos actions.",
            justification_antithese: "Car refouler tous ses désirs conduit à la névrose et à l'épuisement intérieur : il faut apprendre à les écouter, à les comprendre et à les réguler, non à les craindre.",
            problematique: "Les désirs sont-ils des forces dangereuses qu'il faut craindre ou bien des énergies vitales qu'il faut accueillir avec discernement ?"
        }
    },
    {
        id: 78,
        sujet: "Le bonheur se mérite-t-il ?",
        reponses: {
            these: "Il semble que le bonheur se mérite, car il est le fruit d'efforts, de vertus et de sagesse.",
            justification_these: "En effet, on ne devient pas heureux par hasard : cela demande de travailler à sa vie, à ses relations et à sa manière de voir les choses, comme un artisan façonne son œuvre.",
            charniere: "Pourtant, le bonheur dépend aussi de ce qui ne se mérite pas,",
            antithese: "car il suppose la santé, la chance et des rencontres favorables.",
            justification_antithese: "Car certains sont heureux sans avoir rien fait pour cela, tandis que d'autres, méritants, sont malheureux toute leur vie : il y a dans le bonheur une part irréductible de hasard.",
            problematique: "Le bonheur est-il une récompense que l'on peut mériter ou bien largement l'effet du hasard et des circonstances ?"
        }
    },
    {
        id: 79,
        sujet: "Peut-on être sûr de soi ?",
        reponses: {
            these: "Il semble qu'on puisse être sûr de soi, car la confiance en soi est une qualité précieuse et accessible.",
            justification_these: "En effet, les personnes qui réussissent affichent souvent une grande confiance dans leurs capacités et leurs jugements, ce qui semble confirmer l'utilité de cette assurance.",
            charniere: "Pourtant, la certitude de soi peut être une illusion,",
            antithese: "car nous ne savons jamais tout de nous-mêmes ni de l'avenir.",
            justification_antithese: "Car celui qui est trop sûr de lui devient souvent aveugle à ses erreurs et sourd aux avertissements d'autrui : l'excès de confiance est souvent le prélude à la chute.",
            problematique: "La confiance en soi est-elle une force à développer ou bien une certitude dont il faut se méfier ?"
        }
    },
    {
        id: 80,
        sujet: "La culture est-elle un luxe ?",
        reponses: {
            these: "Il semble que la culture soit un luxe, car elle vient après les besoins matériels, quand on a le temps et les moyens.",
            justification_these: "En effet, quand on manque de nourriture ou de logement, on ne pense pas d'abord à lire, à visiter un musée ou à écouter un concert : la culture apparaît comme un superflu.",
            charniere: "Pourtant, la culture n'est pas un supplément,",
            antithese: "car elle est une dimension essentielle de l'humanité.",
            justification_antithese: "Car même dans les situations les plus difficiles, les hommes créent, chantent et racontent : la culture est une manière d'être au monde, non un ornement réservé aux privilégiés.",
            problematique: "La culture est-elle un surplus réservé à ceux qui en ont les moyens ou bien une dimension constitutive de toute vie humaine ?"
        }
    },
    {
        id: 81,
        sujet: "Faut-il se méfier du progrès ?",
        reponses: {
            these: "À première vue, il ne faut pas se méfier du progrès, car il améliore nos conditions de vie et recule les limites de nos possibilités.",
            justification_these: "En effet, la médecine, l'hygiène et la technologie ont permis de vivre plus longtemps et mieux qu'à aucune époque : le progrès a un bilan humain largement positif.",
            charniere: "Pourtant, le progrès a aussi un coût,",
            antithese: "car il peut détruire la nature, produire des armes toujours plus meurtrières et aliéner les individus.",
            justification_antithese: "Car chaque progrès technique ouvre de nouvelles possibilités, y compris de destruction : le progrès n'est pas en lui-même un bien, et il faut apprendre à en user avec discernement.",
            problematique: "Le progrès est-il une chance à saisir ou bien une force ambiguë dont il faut apprendre à se méfier ?"
        }
    },
    {
        id: 82,
        sujet: "La générosité peut-elle être calculée ?",
        reponses: {
            these: "Il semble que la générosité soit incompatible avec le calcul, car donner en attendant quelque chose, ce n'est pas donner.",
            justification_these: "En effet, la générosité est un don gratuit : dès qu'elle attend un retour, elle devient un investissement et perd son caractère moral.",
            charniere: "Pourtant, toute générosité comporte une part de calcul,",
            antithese: "car on donne aussi pour se sentir bien, pour être reconnu ou pour se donner une image.",
            justification_antithese: "Car l'être humain n'agit jamais entièrement gratuitement : même les gestes les plus généreux comportent une part d'intérêt, fût-elle inconsciente, comme le plaisir de se sentir bon.",
            problematique: "La générosité peut-elle être purement gratuite ou bien comporte-t-elle nécessairement une part de calcul intéressé ?"
        }
    },
    {
        id: 83,
        sujet: "Le rêve a-t-il une fonction dans notre vie ?",
        reponses: {
            these: "À première vue, le rêve est accessoire, car c'est une production de l'esprit pendant le sommeil, sans conséquence sur la vie réelle.",
            justification_these: "En effet, on oublie souvent ses rêves en se réveillant : ils ne semblent pas compter dans nos vies éveillées et paraissent de simples résidus de l'activité cérébrale.",
            charniere: "Pourtant, le rêve joue un rôle dans notre équilibre,",
            antithese: "car il exprime, symbolise et met en scène ce que nous refoulons ou désirons.",
            justification_antithese: "Car l'analyse des rêves révèle souvent des aspects cachés de notre psychisme : ils sont une voie d'accès à notre vie intérieure et un moyen pour l'inconscient de se manifester.",
            problematique: "Le rêve est-il un simple phénomène sans importance ou bien une activité psychique essentielle à notre équilibre ?"
        }
    },
    {
        id: 84,
        sujet: "Faut-il vivre au présent ?",
        reponses: {
            these: "Il semble qu'il faille vivre au présent, car le passé est révolu, l'avenir incertain, et seul le présent est réel.",
            justification_these: "En effet, la sagesse populaire nous invite à profiter de l'instant, à ne pas remettre à demain ce qui peut être fait aujourd'hui, et à ne pas nous ronger de regrets ou d'angoisses.",
            charniere: "Pourtant, vivre uniquement au présent, c'est perdre la mémoire et le projet,",
            antithese: "car on oublie alors d'où l'on vient et où l'on va.",
            justification_antithese: "Car une vie réduite à l'instant présent devient une succession de plaisirs sans cohérence ni sens : l'existence a besoin de durée, de mémoire et de projet pour former une histoire.",
            problematique: "Faut-il vivre au présent ou bien est-ce la continuité entre passé, présent et avenir qui donne un sens à la vie ?"
        }
    },
    {
        id: 85,
        sujet: "La haine est-elle toujours destructrice ?",
        reponses: {
            these: "Il semble que la haine soit toujours destructrice, car elle ronge celui qui l'éprouve et blesse celui qui en est l'objet.",
            justification_these: "En effet, la haine ferme le cœur, obscurcit le jugement et pousse à des actes violents dont on finit souvent par se repentir.",
            charniere: "Pourtant, certaines haines sont fécondes,",
            antithese: "car elles s'opposent à l'injustice et nourrissent le combat pour la liberté.",
            justification_antithese: "Car celui qui hait l'oppression ou la barbarie trouve dans cette haine l'énergie de se battre pour un monde meilleur : la haine de l'injustice peut être le revers de l'amour de la justice.",
            problematique: "La haine est-elle nécessairement destructrice ou bien peut-elle devenir une force légitime lorsqu'elle combat l'injustice ?"
        }
    },
    {
        id: 86,
        sujet: "L'homme peut-il se passer de croyances ?",
        reponses: {
            these: "Il semble que l'homme puisse se passer de croyances, car la raison et la science suffisent à nous orienter dans le monde.",
            justification_these: "En effet, croire sans preuve, c'est s'exposer à l'erreur : mieux vaut s'en tenir à ce qui est démontré et vérifiable, comme le recommandent les méthodes scientifiques.",
            charniere: "Pourtant, la vie humaine est tissée de croyances,",
            antithese: "car croire en l'amitié, en la justice, en l'amour ou en autrui n'est jamais démontrable.",
            justification_antithese: "Car sans croyance minimale, aucune action n'est possible : il faut bien parier sur des valeurs et des personnes sans preuve absolue, comme on fait confiance à un ami sans exiger de garanties.",
            problematique: "Peut-on vivre sans croyance ou bien la croyance est-elle une dimension constitutive de l'existence humaine ?"
        }
    },
    {
        id: 87,
        sujet: "La jalousie est-elle toujours mauvaise ?",
        reponses: {
            these: "À première vue, la jalousie est un défaut, car elle empoisonne les relations et traduit un manque de confiance.",
            justification_these: "En effet, la jalousie fait souffrir celui qui l'éprouve et étouffe celui qui en est l'objet, en transformant l'amour en surveillance et la tendresse en soupçon.",
            charniere: "Pourtant, la jalousie peut aussi être le signe d'un attachement sincère,",
            antithese: "car on ne jalouse que ce à quoi l'on tient.",
            justification_antithese: "Car une certaine jalousie témoigne de l'importance que l'autre a pour nous et de la peur de le perdre : elle peut être une manière maladroite mais sincère d'exprimer son amour.",
            problematique: "La jalousie est-elle un travers à combattre ou bien peut-elle exprimer un attachement légitime ?"
        }
    },
    {
        id: 88,
        sujet: "Le silence peut-il être violent ?",
        reponses: {
            these: "Il semble que le silence ne puisse pas être violent, car la violence est un acte, et le silence est une absence.",
            justification_these: "En effet, frapper, crier, insulter : voilà la violence. Le silence, lui, ne fait rien, il n'agit pas, et l'on ne voit pas comment une absence pourrait blesser.",
            charniere: "Pourtant, il existe des violences silencieuses,",
            antithese: "car le mépris, l'indifférence et le refus de parler peuvent être des armes redoutables.",
            justification_antithese: "Car le silence peut exclure, humilier et torturer celui qui attend une parole qui ne vient pas : la violence n'est pas seulement dans l'acte, elle est aussi dans l'omission.",
            problematique: "Le silence peut-il être une forme de violence ou bien la violence suppose-t-elle nécessairement un acte positif ?"
        }
    },
    {
        id: 89,
        sujet: "Peut-on forcer quelqu'un à être heureux ?",
        reponses: {
            these: "À première vue, on ne peut pas forcer quelqu'un à être heureux, car le bonheur ne se décrète pas et ne peut être imposé de l'extérieur.",
            justification_these: "En effet, une personne heureuse parce qu'on la force à l'être n'est pas vraiment heureuse : son bonheur serait factice, imposé, et ne correspondrait pas à ce qu'elle ressent.",
            charniere: "Pourtant, on peut créer les conditions du bonheur,",
            antithese: "car éduquer, soigner, protéger et aimer, c'est aider quelqu'un à être heureux.",
            justification_antithese: "Car si le bonheur ne se force pas, il se cultive : l'entourage et les institutions peuvent y contribuer de manière décisive en assurant la sécurité, la santé et l'affection.",
            problematique: "Le bonheur est-il une affaire strictement personnelle ou bien peut-il être favorisé, voire imposé, par autrui ?"
        }
    },
    {
        id: 90,
        sujet: "L'imagination nous éloigne-t-elle du réel ?",
        reponses: {
            these: "Il semble que l'imagination nous éloigne du réel, car elle nous fait vivre dans un monde de chimères et d'illusions.",
            justification_these: "En effet, celui qui imagine sans cesse risque de ne plus voir le monde tel qu'il est et de fuir ses responsabilités dans des rêveries sans conséquence.",
            charniere: "Pourtant, l'imagination est aussi ce qui nous permet d'agir sur le réel,",
            antithese: "car avant de transformer le monde, il faut l'avoir imaginé autrement.",
            justification_antithese: "Car les inventions, les révolutions et les œuvres d'art sont d'abord nées dans l'imagination de quelqu'un : sans imaginaire, aucune transformation du réel n'est possible.",
            problematique: "L'imagination est-elle une fuite hors du réel ou bien la condition de sa transformation ?"
        }
    },
    {
        id: 91,
        sujet: "Faut-il être triste pour être profond ?",
        reponses: {
            these: "À première vue, la profondeur est liée à la tristesse, car les grandes œuvres semblent nées de la souffrance.",
            justification_these: "En effet, la joie paraît légère, tandis que la tristesse semble sonder les abîmes de l'existence et révéler des vérités que la bonne humeur dissimule.",
            charniere: "Pourtant, la profondeur n'est pas dans la tristesse mais dans la lucidité,",
            antithese: "car on peut être profond dans la joie.",
            justification_antithese: "Car certaines œuvres joyeuses — une comédie de Molière, un opéra de Mozart — touchent à des vérités humaines essentielles : la joie peut être aussi profonde que la tristesse, et parfois plus difficile à atteindre.",
            problematique: "La profondeur est-elle nécessairement liée à la tristesse ou bien peut-elle se rencontrer aussi dans la joie ?"
        }
    },
    {
        id: 92,
        sujet: "Peut-on être libre sans responsabilité ?",
        reponses: {
            these: "Il semble qu'on puisse être libre sans responsabilité, car un enfant est libre de jouer sans avoir à rendre de comptes.",
            justification_these: "En effet, la liberté semble d'abord une absence de contrainte, indépendante de toute obligation morale : on est libre quand rien ne nous empêche d'agir.",
            charniere: "Pourtant, la liberté véritable engage la responsabilité,",
            antithese: "car agir librement, c'est assumer les conséquences de ses actes.",
            justification_antithese: "Car celui qui ne répond de rien n'est pas libre : il est irresponsable, comme un être qui n'a pas encore accédé à la maturité, et sa liberté est celle d'un enfant, non d'un adulte.",
            problematique: "La liberté peut-elle se concevoir sans responsabilité ou bien les deux sont-elles indissociables ?"
        }
    },
    {
        id: 93,
        sujet: "L'argent est-il le moteur du monde ?",
        reponses: {
            these: "Il semble que l'argent soit le moteur du monde, car il met en marche l'économie, les échanges et les ambitions.",
            justification_these: "En effet, tout semble s'acheter et se vendre : le travail, les biens, les services, parfois même les consciences, comme si l'argent était la mesure universelle de toute chose.",
            charniere: "Pourtant, beaucoup d'actions humaines échappent à l'argent,",
            antithese: "car l'amour, l'amitié, l'art, la science et le dévouement ne se monnayent pas.",
            justification_antithese: "Car les plus grands accomplissements humains — une œuvre, une découverte, un acte héroïque — ne sont pas motivés par le gain : ils obéissent à d'autres ressorts, plus profonds et plus nobles.",
            problematique: "L'argent est-il le ressort principal des affaires humaines ou bien n'est-il qu'un moyen parmi d'autres, souvent dépassé ?"
        }
    },
    {
        id: 94,
        sujet: "Faut-il aimer ses ennemis ?",
        reponses: {
            these: "Il semble qu'il faille aimer ses ennemis, car c'est une exigence morale présente dans de nombreuses traditions spirituelles.",
            justification_these: "En effet, aimer ses ennemis, c'est refuser la logique de la vengeance et sortir du cycle infini de la haine, qui ne fait que reproduire la violence.",
            charniere: "Pourtant, aimer ses ennemis paraît impossible,",
            antithese: "car comment aimer celui qui nous veut du mal ?",
            justification_antithese: "Car l'amour véritable ne se commande pas : on ne peut pas décider d'aimer, encore moins celui qui nous nuit, et une telle exigence semble dépasser les forces humaines.",
            problematique: "Aimer ses ennemis est-il un idéal moral accessible ou bien une exigence contraire à la nature humaine ?"
        }
    },
    {
        id: 95,
        sujet: "Le travail peut-il être une passion ?",
        reponses: {
            these: "Il semble que le travail puisse être une passion, car certains aiment leur métier au point de ne plus le vivre comme une contrainte.",
            justification_these: "En effet, un artiste, un chercheur ou un artisan peut trouver dans son travail une source d'épanouissement profond, au point de ne plus compter ses heures.",
            charniere: "Pourtant, la passion peut aussi aliéner,",
            antithese: "car celui qui aime trop son travail peut s'y perdre, y sacrifier sa santé et ses proches.",
            justification_antithese: "Car la passion devient un piège quand elle ne laisse plus de place au repos, à l'amour et à la vie sociale : le workaholisme en est la triste illustration.",
            problematique: "Le travail passionné est-il une chance d'épanouissement ou bien un risque d'aliénation ?"
        }
    },
    {
        id: 96,
        sujet: "Peut-on se connaître soi-même ?",
        reponses: {
            these: "Il semble qu'on puisse se connaître soi-même, car chacun a un accès privilégié à ses pensées et à ses sentiments.",
            justification_these: "En effet, nul ne sait mieux que moi ce que je pense, ce que je veux et ce que je ressens : la conscience semble être le lieu par excellence de la connaissance de soi.",
            charniere: "Pourtant, nous sommes souvent les derniers à nous connaître,",
            antithese: "car nous ignorons nos motivations profondes et nous nous trompons sur nous-mêmes.",
            justification_antithese: "Car nous avons des désirs inconscients, des peurs refoulées et des illusions sur nous-mêmes que les autres perçoivent parfois mieux que nous : la connaissance de soi est une conquête difficile, jamais achevée.",
            problematique: "La connaissance de soi est-elle possible ou bien nous échappons-nous toujours en partie à nous-mêmes ?"
        }
    },
    {
        id: 97,
        sujet: "Faut-il craindre l'avenir ?",
        reponses: {
            these: "Il semble qu'il faille craindre l'avenir, car il est incertain, imprévisible et porteur de dangers.",
            justification_these: "En effet, l'avenir peut apporter la maladie, la perte, la guerre ou la catastrophe : il est ce qui peut à tout moment nous briser, sans que nous puissions nous y préparer entièrement.",
            charniere: "Pourtant, craindre l'avenir, c'est gâcher le présent,",
            antithese: "car l'angoisse du lendemain nous empêche de vivre aujourd'hui.",
            justification_antithese: "Car ce qui n'est pas encore n'existe pas : il n'y a pas lieu de souffrir par avance de maux qui ne sont peut-être pas destinés à se produire, comme le montre l'expérience de ceux qui ont tant redouté un malheur qui ne vint jamais.",
            problematique: "L'avenir mérite-t-il d'être craint ou bien cette crainte est-elle une source inutile de souffrance ?"
        }
    },
    {
        id: 98,
        sujet: "La beauté peut-elle être dangereuse ?",
        reponses: {
            these: "À première vue, la beauté ne saurait être dangereuse, car elle est ce qui attire, charme et élève.",
            justification_these: "En effet, la beauté est une valeur positive : elle est associée au bien et à la vérité dans la tradition, et elle nous procure un plaisir désintéressé.",
            charniere: "Pourtant, la beauté peut fasciner et aveugler,",
            antithese: "car un beau visage peut cacher un monstre et une belle parole peut séduire pour mieux tromper.",
            justification_antithese: "Car la séduction esthétique peut être un instrument de manipulation : l'apparence belle détourne l'attention du fond, et l'on se laisse prendre à ce qui n'est qu'un dehors.",
            problematique: "La beauté est-elle toujours bienfaisante ou bien peut-elle devenir un piège et une source de dangers ?"
        }
    },
    {
        id: 99,
        sujet: "Peut-on être heureux sans être libre ?",
        reponses: {
            these: "Il semble qu'on puisse être heureux sans être libre, car un prisonnier peut connaître des joies et un enfant contraint peut être heureux.",
            justification_these: "En effet, le bonheur est un état intérieur : il dépend de la manière dont on vit ce qui nous arrive, plus que des conditions extérieures, et certaines personnes privées de liberté témoignent d'une sérénité profonde.",
            charniere: "Pourtant, un bonheur dans la contrainte est fragile,",
            antithese: "car il peut à tout moment être brisé par celui qui détient le pouvoir.",
            justification_antithese: "Car celui qui ne peut pas choisir sa vie n'est pas vraiment maître de son bonheur : celui-ci dépend de la volonté d'un autre, et cette dépendance le rend précaire.",
            problematique: "La liberté est-elle indispensable au bonheur ou bien peut-on être heureux même privé de liberté ?"
        }
    },
    {
        id: 100,
        sujet: "Faut-il vivre pour soi ou pour les autres ?",
        reponses: {
            these: "Il semble qu'il faille vivre pour soi, car chacun n'a qu'une vie et il serait absurde de la sacrifier entièrement aux autres.",
            justification_these: "En effet, vivre pour les autres sans se ménager conduit à l'épuisement, au ressentiment et à l'oubli de soi : on ne peut donner durablement si l'on se vide soi-même.",
            charniere: "Pourtant, une vie qui ne serait tournée que vers soi-même serait vide,",
            antithese: "car c'est dans le don et la relation que l'existence prend tout son sens.",
            justification_antithese: "Car les plus grandes joies viennent de l'amour, de l'amitié et du service rendu : un égoïsme absolu est un appauvrissement, non une réussite.",
            problematique: "La vie trouve-t-elle son sens dans la recherche de son propre bonheur ou bien dans le don de soi aux autres ?"
        }
    }
];