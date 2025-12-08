// 1. TITRES DE L'APPLICATION
const title = "application «&nbsp;compléter&nbsp;»";
const subtitle = "compléter par glisser-déposer";

// 2. TEXTES AVEC TROUS PRÉDÉFINIS

const textesAvecTrous = [
    {
        texte: "L'art est une forme d'expression qui touche les sens et évoque des réactions uniques. Il nous transporte à travers des mélodies, des couleurs et des formes qui défient les conventions culturelles et interpellent notre âme.",
        source: "références",
        trous: ["art", "expression", "sens", "réactions", "mélodies", "couleurs", "formes", "âme"]
    },



	{
		texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exertexte ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        source: "références",
		trous: ["Lorem ipsum", "consectetur adipiscing", "eiusmod tempor", "magna aliqua", "minim veniam", "voluptate velit"]
	},
	{
		texte: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
        source: "références",	
		trous: ["vero eos", "dignissimos ducimus", "voluptatum deleniti", "laborum et dolorum", "harum quidem", "libero tempore"]
	},
	{
		texte: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Ut enim ad minima veniam, quis nostrum exertexteem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur ?",
        source: "références",	
		trous: ["autem quibusdam", "debitis aut rerum", "sapiente delectus", "minima veniam", "ullam corporis", "ea commodi"]
	},
	{
		texte: "Nulla facilisi. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.",
        source: "références",
		trous: ["Nulla facilisi", "Curabitur pretium", "Integer in mauris", "risus vulputate", "Maecenas fermentum", "ligula eu", "euismod turpis"]
	},
	{
		texte: "Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede. Etiam vel neque nec dui dignissim bibendum. Vivamus id enim. Phasellus neque orci, porta a, aliquet quis, semper a, massa. Phasellus purus. Pellentesque tristique imperdiet tortor.",
        source: "références",	
		trous: ["Aliquam erat", "eleifend leo", "fermentum tempor", "tristique imperdiet", "Phasellus purus", "neque orci", "nullam tempus"]
	}
];