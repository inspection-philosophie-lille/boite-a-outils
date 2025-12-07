// 1. TITRES DE L'APPLICATION
const title = "citations à trous";
const subtitle = "réviser le cours";

// 2. CITATIONS AVEC TROUS PRÉDÉFINIS
const textesAvecTrous = [
    {
        texte: "« L’homme est une corde tendue entre l’animal et le Surhomme, une corde au-dessus d’un abîme. Il est dangereux de passer d’un bord à l’autre, dangereux de rester en chemin, dangereux de regarder en arrière, dangereux de frissonner et de s’arrêter. »",
        source: "Friedrich NIETZSCHE, <em>Ainsi parlait Zarathoustra</em>,<br>Éditions Gallimard, coll. « Folio », 1971, p.41.",
        trous: ["corde tendue", "passer d’un bord à l’autre", "rester en chemin", "regarder en arrière", "frissonner et de s’arrêter"]
    },
    {
        texte: "« L’homme est condamné à être libre. Condamné, parce qu’il ne s’est pas créé lui-même, et pourtant libre, parce qu’une fois jeté dans le monde, il est responsable de tout ce qu’il fait. »",
        source: "Jean-Paul SARTRE, <em>L’être et le néant</em>,<br>Éditions Gallimard, coll. « Tel », 1993, p.58.",
        trous: ["condamné à être libre", "il ne s’est pas créé lui-même", "il est responsable"]
    },
    {
        texte: "« Je pense, donc je suis. Cette vérité était si ferme et si assurée, que toutes les extravagantes suppositions des sceptiques n’étaient pas capables de l’ébranler. »",
        source: "René DESCARTES, <em>Méditations métaphysiques</em>,<br>Éditions Flammarion, coll. « G.F. », 2009, p.89.",
        trous: ["Je pense", "je suis", "si ferme et si assurée", "des sceptiques"]
    },
    {
        texte: "« Le travail est de l’ordre de la nécessité, tandis que l’action est de l’ordre de la liberté. L’homme ne se révèle pleinement qu’à travers ses actes et ses paroles, qui sont les seuls à pouvoir transcender la simple survie. »",
        source: "Hannah ARENDT, <em>La Condition de l’homme moderne</em>,<br>Éditions Calmann-Lévy, coll. « Agora », 1983, p.23.",
        trous: ["nécessité", "liberté", "paroles", "survie"]
    },
    {
        texte: "« La raison pure est un tribunal qui doit assurer à l’entendement humain ses prétentions légitimes, mais qui doit aussi condamner ses prétentions infondées. Sans cette critique, la raison s’égare dans des spéculations vaines ou se perd dans des contradictions sans issue. »",
        source: "Emmanuel KANT, <em>Critique de la raison pure</em>,<br>Éditions PUF, coll. « Quadrige », 2006, p.27.",
        trous: []
    }
];