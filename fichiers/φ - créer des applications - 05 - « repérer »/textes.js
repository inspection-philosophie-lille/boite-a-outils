// Fichier textes.js - Contient les textes philosophiques et les connecteurs logiques

// Textes philosophiques d'exemple
const textes = [
    `La question du libre arbitre est au cœur de la philosophie. En effet, si nos actions sont déterminées par des causes antérieures, alors notre sentiment de liberté n'est qu'une illusion. Cependant, certains philosophes soutiennent que la conscience nous permet d'échapper à ce déterminisme. Par conséquent, nous serions véritablement responsables de nos actes. De plus, la capacité à choisir démontrerait l'existence d'une volonté libre. En revanche, les neurosciences contemporaines remettent en cause cette conception. En conclusion, le débat entre déterminisme et libre arbitre reste ouvert.`,

    `L'éthique kantienne repose sur l'impératif catégorique. D'abord, il faut agir selon des maximes universalisables. Ensuite, il convient de traiter l'humanité comme une fin et jamais comme un moyen. De plus, la volonté bonne est celle qui obéit à la loi morale par devoir. Cependant, cette rigueur peut sembler excessive dans certaines situations concrètes. Par conséquent, certains philosophes proposent des approches plus flexibles. Néanmoins, la position de Kant conserve toute sa pertinence pour fonder une morale rationnelle.`,

    `La recherche du bonheur est une préoccupation majeure de la philosophie antique. En effet, Épicure considérait que le plaisir était le souverain bien. Cependant, il distinguait les plaisirs natural des désirs vains. Par ailleurs, les stoïciens soutenaient que le bonheur résidait dans l'acceptation du destin. Ainsi, pour eux, il fallait distinguer ce qui dépend de nous de ce qui n'en dépend pas. En conclusion, ces différentes conceptions montrent que le bonheur est autant une question de sagesse que de circonstances.`
];

// Connecteurs logiques par catégorie
const connecteurs = {
    cause: [
        'car', 'en effet', 'puisque', 'parce que', 'étant donné que', 
        'du fait que', 'vu que', 'attendu que', 'grâce à', 'en raison de',
        'sous prétexte que', 'd\'autant que', 'd\'autant plus que'
    ],
    consequence: [
        'donc', 'ainsi', 'par conséquent', 'c\'est pourquoi', 'de ce fait', 
        'si bien que', 'alors', 'de sorte que', 'd\'où', 'aussi', 'par suite',
        'de là', 'il s\'ensuit que', 'cela entraîne que'
    ],
    opposition: [
        'mais', 'cependant', 'en revanche', 'par contre', 'néanmoins', 
        'toutefois', 'or', 'pourtant', 'au contraire', 'bien que', 'quoique',
        'malgré', 'en dépit de', 'alors que', 'tandis que', 'sinon', 
        'sauf que', 'excepté que'
    ],
    addition: [
        'et', 'de plus', 'en outre', 'par ailleurs', 'également', 
        'aussi', 'de même', 'non seulement', 'mais encore', 'mais aussi',
        'd\'une part', 'd\'autre part', 'd\'un côté', 'de l\'autre côté',
        'en plus', 'qui plus est'
    ],
    time: [
        'd\'abord', 'ensuite', 'enfin', 'premièrement', 'deuxièmement', 
        'finalement', 'puis', 'alors', 'après', 'avant que', 'après que',
        'pendant que', 'lorsque', 'quand', 'dès que', 'aussitôt que',
        'tant que', 'au moment où', 'au fur et à mesure que'
    ],
    conclusion: [
        'en somme', 'finalement', 'en conclusion', 'pour conclure', 
        'en résumé', 'bref', 'ainsi', 'donc', 'en définitive', 'pour finir',
        'en dernier lieu', 'en un mot', 'somme toute', 'en dernière analyse'
    ],
    condition: [
        'si', 'à condition que', 'pourvu que', 'à moins que', 'au cas où',
        'dans la mesure où', 'selon que', 'suivant que'
    ],
    comparaison: [
        'comme', 'de même que', 'ainsi que', 'autant que', 'plus que',
        'moins que', 'mieux que', 'autrement que', 'tel que'
    ]
};