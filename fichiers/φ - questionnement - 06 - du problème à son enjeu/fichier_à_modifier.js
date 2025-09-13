const argumentsData = [
    
/* attention aux virgules ! le dernier argument est le seul à ne pas en comporter !*/
/* attention aux " dans la définition. A remplacer par '' */

{colonne_de_gauche: "La raison est-elle un outil d'émancipation ou un instrument de domination qui limite notre liberté ?", colonne_de_droite: "L'enjeu est de déterminer si la raison libère l'homme ou l'asservit."},
{colonne_de_gauche: "L'art doit-il chercher à représenter fidèlement la réalité ou peut-il s'en affranchir pour exprimer l'imaginaire ?", colonne_de_droite: "L'enjeu est de définir la fonction de l'art entre mimesis et création pure."},
{colonne_de_gauche: "La morale est-elle universelle et immuable ou dépend-elle des contextes culturels et historiques ?", colonne_de_droite: "L'enjeu est de déterminer si les valeurs morales sont absolues ou relatives."},
{colonne_de_gauche: "Le langage est-il un simple outil de communication ou un élément constitutif de notre pensée ?", colonne_de_droite: "L'enjeu est de comprendre le rôle du langage dans la formation de la pensée."},
{colonne_de_gauche: "La conscience de soi est-elle le propre de l'homme ou peut-elle exister chez d'autres êtres vivants ?", colonne_de_droite: "L'enjeu est de définir la spécificité de la conscience humaine."},
{colonne_de_gauche: "Le travail est-il une source d'épanouissement personnel ou une forme d'aliénation de l'individu ?", colonne_de_droite: "L'enjeu est d'évaluer l'impact du travail sur la condition humaine."},
{colonne_de_gauche: "La démocratie est-elle le meilleur système politique ou comporte-t-elle des failles intrinsèques ?", colonne_de_droite: "L'enjeu est d'examiner les forces et les limites du système démocratique."},
{colonne_de_gauche: "La religion est-elle une source de paix ou un facteur de division entre les hommes ?", colonne_de_droite: "L'enjeu est d'analyser le rôle de la religion dans les relations humaines."},
{colonne_de_gauche: "Le bonheur est-il un état durable ou une succession d'instants fugaces ?", colonne_de_droite: "L'enjeu est de comprendre la nature et la temporalité du bonheur."},
{colonne_de_gauche: "La violence est-elle inhérente à la nature humaine ou le produit de conditions sociales spécifiques ?", colonne_de_droite: "L'enjeu est de déterminer l'origine de la violence humaine."},
{colonne_de_gauche: "Le libre arbitre existe-t-il réellement ou nos actions sont-elles déterminées par des facteurs externes ?", colonne_de_droite: "L'enjeu est d'examiner la possibilité de la liberté humaine face au déterminisme."},
{colonne_de_gauche: "L'éducation doit-elle viser l'épanouissement individuel ou l'adaptation sociale de l'être humain ?", colonne_de_droite: "L'enjeu est de définir les objectifs de l'éducation entre individualité et socialisation."},
{colonne_de_gauche: "La justice est-elle un idéal atteignable ou une utopie irréalisable dans notre société ?", colonne_de_droite: "L'enjeu est d'évaluer la possibilité de réaliser la justice dans le monde réel."},
{colonne_de_gauche: "La technologie améliore-t-elle notre qualité de vie ou nous rend-elle dépendants et vulnérables ?", colonne_de_droite: "L'enjeu est d'analyser l'impact de la technologie sur la condition humaine."},
{colonne_de_gauche: "La vérité est-elle absolue et universelle ou relative et contextuelle selon les situations ?", colonne_de_droite: "L'enjeu est de déterminer la nature de la vérité entre absolu et relativisme."},
{colonne_de_gauche: "L'amour est-il un sentiment irrationnel ou peut-il être fondé sur la raison ?", colonne_de_droite: "L'enjeu est de comprendre la nature de l'amour entre émotion et rationalité."},
{colonne_de_gauche: "La mort donne-t-elle un sens à la vie ou en révèle-t-elle l'absurdité fondamentale ?", colonne_de_droite: "L'enjeu est d'examiner l'influence de la mortalité sur le sens de l'existence."},
{colonne_de_gauche: "La nature doit-elle être dominée par l'homme ou préservée dans son état originel ?", colonne_de_droite: "L'enjeu est de définir la relation idéale entre l'homme et la nature."},
{colonne_de_gauche: "Le temps est-il une réalité objective ou une construction subjective de l'esprit humain ?", colonne_de_droite: "L'enjeu est de comprendre la nature du temps entre réalité et perception."},
{colonne_de_gauche: "La culture est-elle un facteur d'unité ou de division entre les peuples ?", colonne_de_droite: "L'enjeu est d'analyser le rôle de la culture dans les relations interculturelles."},
{colonne_de_gauche: "Le désir est-il une force motrice positive ou une source de frustration et de souffrance ?", colonne_de_droite: "L'enjeu est d'évaluer l'impact du désir sur le bien-être humain."},
{colonne_de_gauche: "La science peut-elle tout expliquer ou existe-t-il des limites à la connaissance humaine ?", colonne_de_droite: "L'enjeu est de déterminer l'étendue et les limites du savoir scientifique."},
{colonne_de_gauche: "La liberté d'expression doit-elle être absolue ou peut-elle être limitée dans certains cas ?", colonne_de_droite: "L'enjeu est de définir les limites éthiques de la liberté d'expression."},
{colonne_de_gauche: "L'histoire est-elle le fruit du hasard ou obéit-elle à des lois déterminées ?", colonne_de_droite: "L'enjeu est de comprendre les mécanismes qui régissent le cours de l'histoire."},
{colonne_de_gauche: "La philosophie a-t-elle encore un rôle à jouer ou est-elle devenue obsolète dans notre société ?", colonne_de_droite: "L'enjeu est d'évaluer la pertinence de la philosophie dans le monde contemporain."},
{colonne_de_gauche: "L'inconscient gouverne-t-il nos actions ou pouvons-nous le maîtriser par la raison ?", colonne_de_droite: "L'enjeu est de déterminer l'influence de l'inconscient sur notre comportement."},
{colonne_de_gauche: "La mondialisation est-elle un facteur de progrès ou une menace pour les cultures locales ?", colonne_de_droite: "L'enjeu est d'analyser les effets de la mondialisation sur la diversité culturelle."},
{colonne_de_gauche: "Le corps est-il un simple instrument ou une partie intégrante de notre identité ?", colonne_de_droite: "L'enjeu est de comprendre le rôle du corps dans la construction de l'identité."},
{colonne_de_gauche: "La mémoire est-elle fiable ou sujette à des distorsions et des illusions ?", colonne_de_droite: "L'enjeu est d'évaluer la fiabilité de la mémoire dans notre perception du passé."},
{colonne_de_gauche: "La justice sociale est-elle compatible avec la liberté individuelle ou y a-t-il un conflit inévitable ?", colonne_de_droite: "L'enjeu est de concilier les exigences de justice sociale et de liberté individuelle."},
{colonne_de_gauche: "L'art contemporain est-il une forme d'expression légitime ou une imposture intellectuelle ?", colonne_de_droite: "L'enjeu est de définir la valeur et la légitimité de l'art contemporain."},
{colonne_de_gauche: "La conscience animale est-elle comparable à celle de l'homme ou fondamentalement différente ?", colonne_de_droite: "L'enjeu est de comprendre la nature de la conscience animale par rapport à l'humain."},
{colonne_de_gauche: "La désobéissance civile est-elle un devoir moral ou une menace pour l'ordre social ?", colonne_de_droite: "L'enjeu est d'évaluer la légitimité et les conséquences de la désobéissance civile."},
{colonne_de_gauche: "Le transhumanisme est-il une évolution souhaitable ou une menace pour notre humanité ?", colonne_de_droite: "L'enjeu est d'examiner les implications éthiques de l'amélioration technologique de l'homme."},
{colonne_de_gauche: "La tolérance a-t-elle des limites ou doit-elle s'appliquer à toutes les opinions ?", colonne_de_droite: "L'enjeu est de définir les limites de la tolérance dans une société pluraliste."},
{colonne_de_gauche: "Le patriotisme est-il une vertu ou un obstacle à la fraternité universelle ?", colonne_de_droite: "L'enjeu est de concilier l'attachement national et l'ouverture aux autres cultures."},
{colonne_de_gauche: "La peine de mort est-elle une justice légitime ou une barbarie indigne de nos sociétés ?", colonne_de_droite: "L'enjeu est d'évaluer la légitimité éthique et l'efficacité de la peine capitale."},
{colonne_de_gauche: "L'euthanasie est-elle un droit fondamental ou une atteinte à la sacralité de la vie ?", colonne_de_droite: "L'enjeu est de définir les limites éthiques concernant la fin de vie."},
{colonne_de_gauche: "La publicité est-elle une information utile ou une manipulation des consciences ?", colonne_de_droite: "L'enjeu est d'analyser l'impact de la publicité sur notre liberté de choix."},
{colonne_de_gauche: "L'argent fait-il le bonheur ou est-il source de corruption morale ?", colonne_de_droite: "L'enjeu est d'examiner la relation entre richesse matérielle et bien-être."},
{colonne_de_gauche: "Le rêve est-il une échappatoire à la réalité ou une autre forme de conscience ?", colonne_de_droite: "L'enjeu est de comprendre la nature et la fonction du rêve dans notre vie psychique."},
{colonne_de_gauche: "La mode est-elle une forme d'expression personnelle ou un instrument de conformisme social ?", colonne_de_droite: "L'enjeu est d'analyser le rôle de la mode dans l'identité et les relations sociales."},
{colonne_de_gauche: "Le rire est-il libérateur ou peut-il être une forme de cruauté ?", colonne_de_droite: "L'enjeu est d'examiner les fonctions sociales et psychologiques du rire."},
{colonne_de_gauche: "La solitude est-elle une souffrance ou une condition nécessaire à l'épanouissement personnel ?", colonne_de_droite: "L'enjeu est de comprendre le rôle de la solitude dans le développement personnel."},
{colonne_de_gauche: "Le pardon est-il une faiblesse ou une force morale ?", colonne_de_droite: "L'enjeu est d'évaluer la valeur morale et les effets du pardon."},
{colonne_de_gauche: "La curiosité est-elle un défaut ou une qualité essentielle pour le développement humain ?", colonne_de_droite: "L'enjeu est de déterminer le rôle de la curiosité dans l'acquisition de connaissances."},
{colonne_de_gauche: "Le doute est-il un obstacle à la connaissance ou une condition nécessaire au progrès ?", colonne_de_droite: "L'enjeu est de comprendre le rôle du doute dans la démarche scientifique et philosophique."}

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
