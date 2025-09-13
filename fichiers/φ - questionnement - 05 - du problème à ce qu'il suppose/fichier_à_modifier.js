const argumentsData = [
    
/* attention aux virgules ! le dernier argument est le seul à ne pas en comporter !*/
/* attention aux " dans la définition. A remplacer par '' */

{colonne_de_gauche: "La raison est-elle un outil d'émancipation ou un instrument de domination qui limite notre liberté ?", colonne_de_droite: "Dans quelle mesure la raison peut-elle à la fois libérer et contraindre l'individu ?"},
{colonne_de_gauche: "L'art doit-il chercher à représenter fidèlement la réalité ou peut-il s'en affranchir pour exprimer l'imaginaire ?", colonne_de_droite: "Quel est le rôle de l'art dans la représentation du réel et de l'imaginaire ?"},
{colonne_de_gauche: "La morale est-elle universelle et immuable ou dépend-elle des contextes culturels et historiques ?", colonne_de_droite: "Comment concilier l'universalité des principes moraux avec la diversité des cultures ?"},
{colonne_de_gauche: "Le langage est-il un simple outil de communication ou un élément constitutif de notre pensée ?", colonne_de_droite: "Quelle est l'influence du langage sur notre façon de penser et de percevoir le monde ?"},
{colonne_de_gauche: "La conscience de soi est-elle le propre de l'homme ou peut-elle exister chez d'autres êtres vivants ?", colonne_de_droite: "Quels sont les critères permettant de définir et d'identifier la conscience de soi ?"},
{colonne_de_gauche: "Le travail est-il une source d'épanouissement personnel ou une forme d'aliénation de l'individu ?", colonne_de_droite: "Comment le travail peut-il à la fois contribuer à notre développement et nous asservir ?"},
{colonne_de_gauche: "La démocratie est-elle le meilleur système politique ou comporte-t-elle des failles intrinsèques ?", colonne_de_droite: "Quelles sont les forces et les limites du système démocratique dans la gouvernance des sociétés ?"},
{colonne_de_gauche: "La religion est-elle une source de paix ou un facteur de division entre les hommes ?", colonne_de_droite: "Quel rôle joue la religion dans la cohésion sociale et les conflits entre les peuples ?"},
{colonne_de_gauche: "Le bonheur est-il un état durable ou une succession d'instants fugaces ?", colonne_de_droite: "Comment définir et atteindre le bonheur dans une perspective philosophique ?"},
{colonne_de_gauche: "La violence est-elle inhérente à la nature humaine ou le produit de conditions sociales spécifiques ?", colonne_de_droite: "Quelles sont les origines de la violence et comment peut-on la prévenir ou la contrôler ?"},
{colonne_de_gauche: "Le libre arbitre existe-t-il réellement ou nos actions sont-elles déterminées par des facteurs externes ?", colonne_de_droite: "Comment concilier la notion de liberté individuelle avec les déterminismes qui influencent nos choix ?"},
{colonne_de_gauche: "L'éducation doit-elle viser l'épanouissement individuel ou l'adaptation sociale de l'être humain ?", colonne_de_droite: "Quel équilibre trouver entre le développement personnel et l'intégration sociale dans l'éducation ?"},
{colonne_de_gauche: "La justice est-elle un idéal atteignable ou une utopie irréalisable dans notre société ?", colonne_de_droite: "Comment définir et mettre en œuvre une justice équitable dans un monde complexe ?"},
{colonne_de_gauche: "La technologie améliore-t-elle notre qualité de vie ou nous rend-elle dépendants et vulnérables ?", colonne_de_droite: "Quels sont les avantages et les risques liés au progrès technologique pour l'humanité ?"},
{colonne_de_gauche: "La vérité est-elle absolue et universelle ou relative et contextuelle selon les situations ?", colonne_de_droite: "Comment appréhender la notion de vérité dans un monde en constante évolution ?"},
{colonne_de_gauche: "L'amour est-il un sentiment irrationnel ou peut-il être fondé sur la raison ?", colonne_de_droite: "Quelle est la nature de l'amour et comment s'articule-t-il avec la raison ?"},
{colonne_de_gauche: "La mort donne-t-elle un sens à la vie ou en révèle-t-elle l'absurdité fondamentale ?", colonne_de_droite: "Comment la conscience de notre finitude influence-t-elle notre perception de l'existence ?"},
{colonne_de_gauche: "La nature doit-elle être dominée par l'homme ou préservée dans son état originel ?", colonne_de_droite: "Quel rapport l'humanité doit-elle entretenir avec la nature pour assurer un avenir durable ?"},
{colonne_de_gauche: "Le temps est-il une réalité objective ou une construction subjective de l'esprit humain ?", colonne_de_droite: "Comment notre perception du temps influence-t-elle notre compréhension du monde et de nous-mêmes ?"},
{colonne_de_gauche: "La culture est-elle un facteur d'unité ou de division entre les peuples ?", colonne_de_droite: "Quel rôle joue la diversité culturelle dans les relations entre les différentes sociétés ?"},
{colonne_de_gauche: "Le désir est-il une force motrice positive ou une source de frustration et de souffrance ?", colonne_de_droite: "Comment le désir influence-t-il nos actions et notre quête du bonheur ?"},
{colonne_de_gauche: "La science peut-elle tout expliquer ou existe-t-il des limites à la connaissance humaine ?", colonne_de_droite: "Quelles sont les frontières de la connaissance scientifique et comment les appréhender ?"},
{colonne_de_gauche: "La liberté d'expression doit-elle être absolue ou peut-elle être limitée dans certains cas ?", colonne_de_droite: "Comment concilier la liberté d'expression avec la protection des individus et de la société ?"},
{colonne_de_gauche: "L'histoire est-elle le fruit du hasard ou obéit-elle à des lois déterminées ?", colonne_de_droite: "Quelle est la part du déterminisme et du libre arbitre dans le cours de l'histoire ?"},
{colonne_de_gauche: "La philosophie a-t-elle encore un rôle à jouer ou est-elle devenue obsolète dans notre société ?", colonne_de_droite: "Quelle est la pertinence de la réflexion philosophique dans le monde contemporain ?"},
{colonne_de_gauche: "L'inconscient gouverne-t-il nos actions ou pouvons-nous le maîtriser par la raison ?", colonne_de_droite: "Comment l'inconscient influence-t-il notre comportement et nos décisions ?"},
{colonne_de_gauche: "La mondialisation est-elle un facteur de progrès ou une menace pour les cultures locales ?", colonne_de_droite: "Quels sont les effets de la mondialisation sur la diversité culturelle et l'identité des peuples ?"},
{colonne_de_gauche: "Le corps est-il un simple instrument ou une partie intégrante de notre identité ?", colonne_de_droite: "Quel rôle joue le corps dans la construction de notre identité et de notre rapport au monde ?"},
{colonne_de_gauche: "La mémoire est-elle fiable ou sujette à des distorsions et des illusions ?", colonne_de_droite: "Comment la mémoire façonne-t-elle notre identité et notre perception de la réalité ?"},
{colonne_de_gauche: "La justice sociale est-elle compatible avec la liberté individuelle ou y a-t-il un conflit inévitable ?", colonne_de_droite: "Comment concilier les exigences de justice sociale avec le respect des libertés individuelles ?"},
{colonne_de_gauche: "L'art contemporain est-il une forme d'expression légitime ou une imposture intellectuelle ?", colonne_de_droite: "Quels sont les critères permettant de juger la valeur et la légitimité de l'art contemporain ?"},
{colonne_de_gauche: "La conscience animale est-elle comparable à celle de l'homme ou fondamentalement différente ?", colonne_de_droite: "Comment évaluer et comprendre la conscience animale par rapport à la conscience humaine ?"},
{colonne_de_gauche: "La désobéissance civile est-elle un devoir moral ou une menace pour l'ordre social ?", colonne_de_droite: "Dans quelles circonstances la désobéissance civile peut-elle être justifiée moralement ?"},
{colonne_de_gauche: "Le transhumanisme est-il une évolution souhaitable ou une menace pour notre humanité ?", colonne_de_droite: "Quels sont les enjeux éthiques et philosophiques liés à l'amélioration technologique de l'être humain ?"},
{colonne_de_gauche: "La tolérance a-t-elle des limites ou doit-elle s'appliquer à toutes les opinions ?", colonne_de_droite: "Comment définir les limites de la tolérance dans une société pluraliste ?"},
{colonne_de_gauche: "Le patriotisme est-il une vertu ou un obstacle à la fraternité universelle ?", colonne_de_droite: "Comment concilier l'attachement à sa nation avec l'idéal d'une humanité unie ?"},
{colonne_de_gauche: "La peine de mort est-elle une justice légitime ou une barbarie indigne de nos sociétés ?", colonne_de_droite: "Quels sont les arguments éthiques pour et contre l'application de la peine capitale ?"},
{colonne_de_gauche: "L'euthanasie est-elle un droit fondamental ou une atteinte à la sacralité de la vie ?", colonne_de_droite: "Comment aborder la question de la fin de vie d'un point de vue éthique et philosophique ?"},
{colonne_de_gauche: "La publicité est-elle une information utile ou une manipulation des consciences ?", colonne_de_droite: "Quel est l'impact de la publicité sur notre liberté de choix et notre perception du monde ?"},
{colonne_de_gauche: "L'argent fait-il le bonheur ou est-il source de corruption morale ?", colonne_de_droite: "Quelle est la relation entre la richesse matérielle et le bien-être individuel et collectif ?"},
{colonne_de_gauche: "Le rêve est-il une échappatoire à la réalité ou une autre forme de conscience ?", colonne_de_droite: "Quel est le rôle du rêve dans notre compréhension de nous-mêmes et du monde ?"},
{colonne_de_gauche: "La mode est-elle une forme d'expression personnelle ou un instrument de conformisme social ?", colonne_de_droite: "Comment la mode influence-t-elle notre identité et nos relations sociales ?"},
{colonne_de_gauche: "Le rire est-il libérateur ou peut-il être une forme de cruauté ?", colonne_de_droite: "Quelles sont les fonctions sociales et psychologiques du rire et de l'humour ?"},
{colonne_de_gauche: "La solitude est-elle une souffrance ou une condition nécessaire à l'épanouissement personnel ?", colonne_de_droite: "Comment la solitude affecte-t-elle notre développement personnel et nos relations aux autres ?"},
{colonne_de_gauche: "Le pardon est-il une faiblesse ou une force morale ?", colonne_de_droite: "Quel est le rôle du pardon dans les relations interpersonnelles et la résolution des conflits ?"},
{colonne_de_gauche: "La curiosité est-elle un défaut ou une qualité essentielle pour le développement humain ?", colonne_de_droite: "Comment la curiosité contribue-t-elle à l'acquisition de connaissances et à l'évolution personnelle ?"},
{colonne_de_gauche: "Le doute est-il un obstacle à la connaissance ou une condition nécessaire au progrès ?", colonne_de_droite: "Quel est le rôle du doute dans la démarche scientifique et philosophique ?"}




/* pas de virgule ! */

];

function getRandomElements(arr, num) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, num);
}

function loadReperes() {
    const selectedReperes = getRandomElements(reperes, 5);
    
    const repereTable = document.getElementById('repereTable');
    selectedReperes.forEach(repere => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = repere.name;
        cell.onclick = (event) => selectCell(event, 'repere', repere);
        row.appendChild(cell);
        repereTable.appendChild(row);
    });

    const definitionTable = document.getElementById('definitionTable');
    const shuffledDefinitions = getRandomElements(selectedReperes, selectedReperes.length);
    shuffledDefinitions.forEach(repere => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = repere.definition;
        cell.onclick = (event) => selectCell(event, 'definition');
        row.appendChild(cell);
        definitionTable.appendChild(row);
    });

    return selectedReperes;
}
