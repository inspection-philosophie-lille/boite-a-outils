const textes = [
	// --------------------------------
	// ALAIN
	// --------------------------------
	{
		id: 1,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le travail bien fait est source de joie. 
	<span class="phrase-num">[2]</span> Il est l'expression même de l'humanité de l'homme. 
	<span class="phrase-num">[3]</span> Le travail forcé est le plus dur des châtiments. 
	<span class="phrase-num">[4]</span> Mais le travail libre est le plus noble des plaisirs. 
	<span class="phrase-num">[5]</span> C'est que le travail, dans son essence, est une activité créatrice. 
	<span class="phrase-num">[6]</span> L'homme y imprime sa marque sur la matière. 
	<span class="phrase-num">[7]</span> Il y réalise une idée, il y exprime sa pensée. 
	<span class="phrase-num">[8]</span> Le produit de son travail est comme un miroir où il se contemple lui-même. 
	<span class="phrase-num">[9]</span> C'est pourquoi l'artisan aime son œuvre. 
	<span class="phrase-num">[10]</span> C'est pourquoi il y met du sien. 
	»`,
		reponses: {
			origine: "ALAIN, <i>Propos sur le bonheur</i>, LXXXI, et <i>Idées</i>, Paris : Flammarion, 2017, p.289.",
			theme: "Le travail",
			these: "Le travail, quand il est libre et créateur, est une source de joie et d'humanisation, car l'homme s'y réalise.",
			interet: "Il réhabilite la valeur humaine et psychologique du travail bien fait, contre l'idée de sa malédiction.",
			problematique: "Le travail est-il nécessairement une aliénation ou peut-il être une source d'épanouissement ?"
		}
	},
	{
		id: 2,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le bonheur n'est pas dans la possession, mais dans l'action. 
	<span class="phrase-num">[2]</span> L'homme heureux est celui qui fait ce qu'il fait de tout son cœur. 
	<span class="phrase-num">[3]</span> C'est pourquoi l'artisan qui aime son travail est plus heureux que le riche qui s'ennuie. 
	<span class="phrase-num">[4]</span> La joie de vivre est dans le faire, non dans l'avoir. 
	<span class="phrase-num">[5]</span> Celui qui construit une maison est plus heureux que celui qui l'habite. 
	<span class="phrase-num">[6]</span> Car dans l'action, l'homme s'oublie et se dépasse. 
	<span class="phrase-num">[7]</span> Il cesse de penser à lui-même pour se donner à sa tâche. 
	<span class="phrase-num">[8]</span> Et c'est dans cet oubli de soi que naît la vraie joie. 
	<span class="phrase-num">[9]</span> Le bonheur est donc une conséquence, non un but. 
	<span class="phrase-num">[10]</span> Il est la récompense de l'action bien faite. 
	»`,
		reponses: {
			origine: "ALAIN, <i>Propos sur le bonheur</i>, LXXIV, Paris : Flammarion, 2017, p.234.",
			theme: "Le bonheur",
			these: "Le bonheur est dans l'action accomplie avec cœur, non dans la possession passive.",
			interet: "Il lie le bonheur à l'activité créatrice et au travail bien fait.",
			problematique: "Le bonheur réside-t-il dans une activité qui nous fait oublier nous-mêmes ou dans la possession de ce que l'on désire ?"
		}
	},
	// --------------------------------
	// ANSELME
	// --------------------------------
	{
		id: 3,
		contenu: `« 
	<span class="phrase-num">[1]</span> Seigneur, je ne cherche pas à comprendre pour croire, mais je crois pour comprendre. 
	<span class="phrase-num">[2]</span> Car je crois ceci : que je ne comprendrai pas si je ne crois pas. 
	<span class="phrase-num">[3]</span> Or nous croyons que tu es quelque chose de tel que rien de plus grand ne peut être pensé. 
	<span class="phrase-num">[4]</span> Est-ce qu'une telle nature n'existe pas, car l'insensé a dit en son cœur : Dieu n'est pas ? 
	<span class="phrase-num">[5]</span> Mais quand cet insensé entend ce que je dis : quelque chose de tel que rien de plus grand ne peut être pensé, il comprend ce qu'il entend. 
	<span class="phrase-num">[6]</span> Et ce qu'il comprend est dans son intelligence, même s'il ne comprend pas que cela existe. 
	<span class="phrase-num">[7]</span> Car c'est une chose qu'une chose soit dans l'intelligence, et une autre de comprendre qu'elle existe. 
	<span class="phrase-num">[8]</span> Or ce dont on ne peut penser rien de plus grand ne peut pas être seulement dans l'intelligence. 
	<span class="phrase-num">[9]</span> Car si elle est seulement dans l'intelligence, on peut penser qu'elle existe aussi dans la réalité, ce qui est plus grand. 
	<span class="phrase-num">[10]</span> Si donc ce dont on ne peut penser rien de plus grand est seulement dans l'intelligence, ce dont on ne peut penser rien de plus grand est tel qu'on peut penser quelque chose de plus grand. Ce qui est contradictoire. 
	<span class="phrase-num">[11]</span> Il existe donc sans aucun doute quelque chose de tel que rien de plus grand ne peut être pensé, et cela dans l'intelligence et dans la réalité. 
	»`,
		reponses: {
			origine: "ANSELME de Cantorbéry, <i>Proslogion</i>, chapitres I-III, Paris : Cerf, 2016, p.123.",
			theme: "La religion",
			these: "L'existence de Dieu est prouvée par le concept même de « ce dont rien de plus grand ne peut être pensé ».",
			interet: "Il formule l'argument ontologique de l'existence de Dieu, qui sera repris et discuté par Descartes, Leibniz, Kant et bien d'autres.",
			problematique: "L'existence de Dieu se déduit-elle de sa seule définition ou nécessite-t-elle une preuve a posteriori ?"
		}
	},
	// --------------------------------
	// ANSCOMBE
	// --------------------------------
	{
		id: 4,
		contenu: `« 
	<span class="phrase-num">[1]</span> La philosophie morale moderne, depuis Kant et Mill, est devenue vide car elle repose sur une conception erronée de la psychologie. 
	<span class="phrase-num">[2]</span> Les concepts de \" devoir \" et d'\" obligation \" sont des survivances d'une éthique religieuse sans fondement. 
	<span class="phrase-num">[3]</span> Il nous faut revenir à une psychologie des vertus, comme Aristote. 
	<span class="phrase-num">[4]</span> Une action intentionnelle est celle à laquelle on peut appliquer la question \" pourquoi ? \". 
	<span class="phrase-num">[5]</span> La description de l'action est relative à son contexte et à son intention. 
	<span class="phrase-num">[6]</span> Il n'y a pas de différence entre un fait et une valeur si l'on considère correctement l'intention. 
	»`,
		reponses: {
			origine: "Elizabeth ANSCOMBE, <i>Intention</i>, §1-5, et <i>La philosophie morale moderne</i>, Paris : Gallimard, 2016.",
			theme: "Le devoir",
			these: "La philosophie morale moderne est dans une impasse ; pour en sortir, il faut 100 l'éthique sur une philosophie de l'esprit (philosophie de l'action) qui renoue avec la notion de vertu.",
			interet: "Elle relance l'éthique des vertus au XXe siècle en critiquant le conséquentialisme et le déontologisme.",
			problematique: "Faut-il fonder la morale sur des règles universelles ou sur l'excellence du caractère ?"
		}
	},
	// --------------------------------
	// ARENDT
	// --------------------------------
	{
		id: 5,
		contenu: `« 
	<span class="phrase-num">[1]</span> La condition humaine est plus que la nature humaine. 
	<span class="phrase-num">[2]</span> Les conditions de l'existence humaine – la vie elle-même, la natalité et la mortalité, le monde, la pluralité et la Terre – ne peuvent jamais expliquer ce que nous sommes. 
	<span class="phrase-num">[3]</span> Elles ne font que situer notre existence dans le monde. 
	<span class="phrase-num">[4]</span> Le travail est l'activité qui correspond au processus biologique du corps humain. 
	<span class="phrase-num">[5]</span> L'œuvre est l'activité qui correspond à la non-naturalité de l'existence humaine. 
	<span class="phrase-num">[6]</span> L'action est la seule activité qui mette directement en rapport les hommes, sans l'intermédiaire des choses. 
	<span class="phrase-num">[7]</span> Son conditionnement est la pluralité, fait fondamental de la condition humaine. 
	<span class="phrase-num">[8]</span> C'est parce que nous sommes tous pareils, c'est-à-dire humains, que nous pouvons nous comprendre. 
	<span class="phrase-num">[9]</span> C'est parce que nous sommes tous différents que nous avons besoin de l'action et du discours pour nous comprendre. 
	<span class="phrase-num">[10]</span> La politique repose sur le fait de la pluralité humaine. 
	»`,
		reponses: {
			origine: "Hannah ARENDT, <i>Condition de l'homme moderne</i>, chapitre I, Paris : Calmann-Lévy, 2018, p.89.",
			theme: "Le travail",
			these: "L'activité humaine se distingue en travail, œuvre et action, qui correspondent à différentes conditions de l'existence.",
			interet: "Elle propose une typologie fondamentale des activités humaines pour penser la modernité.",
			problematique: "L'action politique se distingue-t-elle du travail et de l'œuvre par sa capacité à révéler l'unicité des individus dans l'espace public, ou bien n'est-elle qu'une modalité particulière de la condition humaine parmi d'autres, sans privilège ontologique ?"
		}
	},
	{
		id: 6,
		contenu: `« 
	<span class="phrase-num">[1]</span> La banalité du mal est une expression qui ne prétend à aucune thèse ou doctrine. 
	<span class="phrase-num">[2]</span> Elle ne signifie rien d'autre que ce constat, effrayant, qui s'imposa à tous lors du procès : l'accusé était un homme parfaitement normal, ni monstrueux ni démoniaque. 
	<span class="phrase-num">[3]</span> Ce qui frappait en lui, c'était une parfaite inconscience, une absence totale de pensée. 
	<span class="phrase-num">[4]</span> Il n'agissait pas par motifs méchants, mais par pure irréflexion. 
	<span class="phrase-num">[5]</span> C'est cette absence de pensée qui lui permit de participer aux pires crimes sans en avoir vraiment conscience. 
	<span class="phrase-num">[6]</span> Le mal n'est pas radical, il n'a pas de profondeur. 
	<span class="phrase-num">[7]</span> C'est pourquoi il peut envahir le monde entier comme un champignon, tant il est superficiel. 
	<span class="phrase-num">[8]</span> La pensée, au contraire, a besoin de profondeur, de racines. 
	<span class="phrase-num">[9]</span> C'est là sa force et sa faiblesse. 
	<span class="phrase-num">[10]</span> Le défi de notre temps est de penser ce qui arrive, pour ne pas se laisser entraîner dans l'irréflexion qui rend possible le pire. 
	»`,
		reponses: {
			origine: "Hannah ARENDT, <i>Eichmann à Jérusalem</i>, Postface, et <i>La Vie de l'esprit</i>, Paris : Gallimard, 2017, p.456.",
			theme: "La conscience",
			these: "Le mal peut être commis par des hommes ordinaires par simple absence de pensée et irréflexion.",
			interet: "Elle introduit le concept controversé de « banalité du mal » pour penser les crimes de masse du XXe siècle.",
			problematique: "Le mal est-il le fruit d'une intention mauvaise ou peut-il résulter de l'absence de pensée ?"
		}
	},
	// --------------------------------
	// ARISTOTE
	// --------------------------------
	{
		id: 7,
		contenu: `« 
	<span class="phrase-num">[1]</span> Tous les hommes désirent naturellement savoir. 
	<span class="phrase-num">[2]</span> Ce qui le prouve, c'est le plaisir que nous procurent les sensations. 
	<span class="phrase-num">[3]</span> En dehors même de leur utilité, elles nous plaisent par elles-mêmes. 
	<span class="phrase-num">[4]</span> Et plus que toutes les autres, les sensations visuelles. 
	<span class="phrase-num">[5]</span> En effet, non seulement pour agir, mais même sans intention d'agir, nous préférons la vue à tout, pour ainsi dire. 
	<span class="phrase-num">[6]</span> La raison en est que la vue est, de tous nos sens, celui qui nous fait acquérir le plus de connaissances et nous révèle le plus de différences. 
	<span class="phrase-num">[7]</span> Or les animaux naissent avec la sensation, mais celle-ci ne produit pas chez tous la mémoire. 
	<span class="phrase-num">[8]</span> Les animaux qui n'ont pas de mémoire sont sans intelligence. 
	<span class="phrase-num">[9]</span> Ceux au contraire qui peuvent retenir leurs sensations sont capables d'apprendre. 
	»`,
		reponses: {
			origine: "ARISTOTE, <i>Métaphysique</i>, livre A, 980a, Paris : Vrin, 2015, p.75.",
			theme: "La science",
			these: "Le désir de savoir est naturel à l'homme et trouve son origine dans la sensation.",
			interet: "Il fonde la connaissance sur l'expérience sensible et la mémoire.",
			problematique: "La connaissance commence-t-elle nécessairement par les sens ou peut-elle s'en affranchir ?"
		}
	},
	{
		id: 8,
		contenu: `« 
	<span class="phrase-num">[1]</span> Nous appelons État une communauté d'hommes libres. 
	<span class="phrase-num">[2]</span> Le but de l'État, ce n'est pas seulement de faire vivre les hommes en société, mais de leur faire mener une vie heureuse et vertueuse. 
	<span class="phrase-num">[3]</span> Car autrement on pourrait tout aussi bien établir une communauté d'esclaves ou d'animaux, ce qui n'est pas possible, parce qu'il n'y a point de bonheur commun là où il n'y a point de vertu commune. 
	<span class="phrase-num">[4]</span> Ce qui fait l'unité de l'État, c'est donc l'amitié, car l'amitié est le plus grand des biens pour les États, et c'est elle qui les préserve le mieux des séditions. 
	<span class="phrase-num">[5]</span> La justice et l'amitié sont les liens qui unissent les citoyens entre eux. 
	<span class="phrase-num">[6]</span> L'État n'est donc pas une simple association de voisinage. 
	»`,
		reponses: {
			origine: "ARISTOTE, <i>Politique</i>, livre III, 1280b-1281a, Paris : Vrin, 2016, p.345.",
			theme: "L'État",
			these: "L'État vise la vie heureuse et vertueuse, non la seule association.",
			interet: "Il définit la finalité éthique de la communauté politique.",
			problematique: "L'État doit-il seulement assurer la sécurité ou promouvoir activement la vertu ?"
		}
	},
	{
		id: 9,
		contenu: `« 
	<span class="phrase-num">[1]</span> Il faut donc définir le souverain bien comme quelque chose de parfait. 
	<span class="phrase-num">[2]</span> Or le bonheur est parfait et se suffit à soi-même, et il est la fin de tous nos actes. 
	<span class="phrase-num">[3]</span> Mais le bonheur n'est pas dans les plaisirs, ni dans les honneurs, ni dans les richesses, mais dans une activité de l'âme conforme à la vertu. 
	<span class="phrase-num">[4]</span> Et s'il y a plusieurs vertus, dans la plus parfaite d'entre elles. 
	<span class="phrase-num">[5]</span> Mais il faut ajouter aussi que cette activité doit s'exercer dans une vie complète. 
	<span class="phrase-num">[6]</span> Car une seule hirondelle ne fait pas le printemps, ni non plus un seul jour, et ainsi la félicité et le bonheur ne sont pas non plus l'affaire d'un seul jour. 
	»`,
		reponses: {
			origine: "ARISTOTE, <i>Éthique à Nicomaque</i>, livre I, 1097a-1098a, Paris : Vrin, 2017, p.89.",
			theme: "Le bonheur",
			these: "Le bonheur est une activité de l'âme conforme à la vertu dans une vie accomplie.",
			interet: "Il définit le bonheur comme activité vertueuse, non comme état passif.",
			problematique: "Le bonheur est-il un état que l'on possède ou une activité que l'on exerce ?"
		}
	},
	{
		id: 10,
		contenu: `« 
	<span class="phrase-num">[1]</span> La nature ne fait rien en vain. 
	<span class="phrase-num">[2]</span> Aussi l'homme, seul entre tous les animaux, a-t-il reçu la parole. 
	<span class="phrase-num">[3]</span> La voix est le signe de la douleur et du plaisir, et c'est pourquoi elle a été donnée aux autres animaux. 
	<span class="phrase-num">[4]</span> Leur nature va jusqu'à éprouver la sensation de la douleur et du plaisir et à se la signifier entre eux. 
	<span class="phrase-num">[5]</span> Mais la parole a pour fin de manifester l'utile et le nuisible, et par suite aussi le juste et l'injuste. 
	<span class="phrase-num">[6]</span> Car c'est le caractère propre de l'homme par rapport aux autres animaux d'être le seul à avoir la perception du bien et du mal, du juste et de l'injuste, et des autres notions de ce genre. 
	<span class="phrase-num">[7]</span> Or c'est la communauté de ces notions qui constitue la famille et l'État. 
	<span class="phrase-num">[8]</span> Ainsi la cité est antérieure à la famille et à chacun de nous. 
	»`,
		reponses: {
			origine: "ARISTOTE, <i>Politique</i>, livre I, 1253a, Paris : Vrin, 2016, p.123.",
			theme: "Le langage",
			these: "Le langage est propre à l'homme car il manifeste le juste et l'injuste.",
			interet: "Il lie langage, politique et éthique.",
			problematique: "Le langage est-il simplement un outil de communication ou le fondement de la vie sociale et morale ?"
		}
	},
	{
		id: 11,
		contenu: `« 
	<span class="phrase-num">[1]</span> Nous avons dit que l'âme est en quelque façon tous les êtres. 
	<span class="phrase-num">[2]</span> Car les choses sensibles sont connaissables par les sens, et les choses intelligibles par l'intelligence. 
	<span class="phrase-num">[3]</span> Mais puisque tout est soit sensible soit intelligible, et que la science est en quelque façon les choses mêmes, la science en acte est identique à son objet. 
	<span class="phrase-num">[4]</span> Ce n'est pas dans la matière que la science réside, mais dans la forme. 
	<span class="phrase-num">[5]</span> Et c'est pourquoi la connaissance est une certaine manière d'être l'autre. 
	<span class="phrase-num">[6]</span> Ainsi, par la connaissance, l'âme devient toutes choses. 
	<span class="phrase-num">[7]</span> Elle est en puissance ce que les choses sont en acte. 
	<span class="phrase-num">[8]</span> Et c'est en cela que consiste la grandeur de l'âme humaine. 
	»`,
		reponses: {
			origine: "ARISTOTE, <i>De l'âme</i>, livre III, 431b, Paris : Vrin, 2015, p.267.",
			theme: "La science",
			these: "Par la connaissance, l'âme devient en quelque façon tous les êtres.",
			interet: "Il établit le rapport d'identité entre la connaissance et son objet.",
			problematique: "Connaître, est-ce s'assimiler l'objet ou devenir l'objet connu ?"
		}
	},
	{
		id: 12,
		contenu: `« 
	<span class="phrase-num">[1]</span> La nature ne fait rien en vain. 
	<span class="phrase-num">[2]</span> Tout dans la nature a une fin. 
	<span class="phrase-num">[3]</span> Cette fin est le bien de chaque être. 
	<span class="phrase-num">[4]</span> Mais il y a un ordre des fins. 
	<span class="phrase-num">[5]</span> Certaines sont subordonnées à d'autres. 
	<span class="phrase-num">[6]</span> La fin ultime est le bien de l'univers. 
	<span class="phrase-num">[7]</span> Chaque être y contribue à sa manière. 
	<span class="phrase-num">[8]</span> Ainsi, la nature est un ordre téléologique. 
	<span class="phrase-num">[9]</span> Tout y a un sens et une place. 
	<span class="phrase-num">[10]</span> Et l'homme y occupe la place la plus haute. 
	»`,
		reponses: {
			origine: "ARISTOTE, <i>Physique</i>, livre II, 194a-195a, Paris : Flammarion, 2016, p.234.",
			theme: "La nature",
			these: "La nature est un ordre téléologique où tout a une fin.",
			interet: "Il propose une conception finaliste de la nature.",
			problematique: "La nature a-t-elle une finalité ou n'est-elle qu'un pur mécanisme sans but ?"
		}
	},
	{
		id: 13,
		contenu: `« 
	<span class="phrase-num">[1]</span> La science est la connaissance des choses par leurs causes. 
	<span class="phrase-num">[2]</span> Il y a quatre sortes de causes. 
	<span class="phrase-num">[3]</span> La cause matérielle, c'est ce dont une chose est faite. 
	<span class="phrase-num">[4]</span> La cause formelle, c'est l'essence de la chose. 
	<span class="phrase-num">[5]</span> La cause efficiente, c'est ce qui produit la chose. 
	<span class="phrase-num">[6]</span> La cause finale, c'est la fin en vue de quoi la chose est faite. 
	<span class="phrase-num">[7]</span> Connaître une chose, c'est connaître ses quatre causes. 
	<span class="phrase-num">[8]</span> Mais selon les êtres, l'une ou l'autre cause prédomine. 
	<span class="phrase-num">[9]</span> Dans les êtres naturels, toutes les causes sont à l'œuvre. 
	<span class="phrase-num">[10]</span> Ainsi, la science est connaissance causale. 
	»`,
		reponses: {
			origine: "ARISTOTE, <i>Physique</i>, livre II, chapitre III, Paris : Flammarion, 2016, p.189.",
			theme: "La science",
			these: "La science est la connaissance des quatre causes des choses.",
			interet: "Il établit la théorie des quatre causes comme fondement de la connaissance.",
			problematique: "Connaître, est-ce connaître les causes ou suffit-il de décrire les phénomènes ?"
		}
	},
	{
		id: 14,
		contenu: `« 
	<span class="phrase-num">[1]</span> La vérité est une. 
	<span class="phrase-num">[2]</span> Les erreurs sont multiples. 
	<span class="phrase-num">[3]</span> Il n'y a qu'une manière d'avoir raison. 
	<span class="phrase-num">[4]</span> Il y a mille manières d'avoir tort. 
	<span class="phrase-num">[5]</span> C'est pourquoi la vérité est difficile à atteindre. 
	<span class="phrase-num">[6]</span> Mais elle n'en existe pas moins. 
	<span class="phrase-num">[7]</span> La vérité est indépendante de nous. 
	<span class="phrase-num">[8]</span> Nous ne la créons pas, nous la découvrons. 
	<span class="phrase-num">[9]</span> Elle s'impose à notre esprit. 
	<span class="phrase-num">[10]</span> Ainsi, la vérité est objective. 
	»`,
		reponses: {
			origine: "ARISTOTE, <i>Métaphysique</i>, livre II, 993b, Paris : Vrin, 2015, p.156.",
			theme: "La vérité",
			these: "La vérité est une et objective, les erreurs sont multiples.",
			interet: "Il affirme l'unité et l'objectivité de la vérité.",
			problematique: "La vérité est-elle unique et universelle ou multiple et relative ?"
		}
	},
	{
		id: 15,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'être se dit de plusieurs manières. 
	<span class="phrase-num">[2]</span> Toute science porte sur ce qui est. 
	<span class="phrase-num">[3]</span> Mais ce qui est peut se dire de plusieurs manières. 
	<span class="phrase-num">[4]</span> Il y a l'être en puissance et l'être en acte. 
	<span class="phrase-num">[5]</span> La puissance, c'est la capacité de devenir ou d'agir. 
	<span class="phrase-num">[6]</span> L'acte, c'est la réalité achevée, l'exercice effectif. 
	<span class="phrase-num">[7]</span> Le passage de la puissance à l'acte, c'est le mouvement. 
	<span class="phrase-num">[8]</span> Ainsi, le gland est un chêne en puissance. 
	<span class="phrase-num">[9]</span> Le chêne est le gland en acte. 
	<span class="phrase-num">[10]</span> L'acte est antérieur à la puissance, car c'est pour être en acte que ce qui est en puissance devient ce qu'il devient. 
	<span class="phrase-num">[11]</span> La nature est donc tendance à l'acte, à l'accomplissement. 
	»`,
		reponses: {
			origine: "ARISTOTE, <i>Métaphysique</i>, livre IX (Thêta), 1045b-1051a, Paris : Vrin, 2015, p.456.",
			theme: "La nature",
			these: "L'être se dit en puissance et en acte, l'acte étant la finalité et la réalité première vers laquelle tend la puissance.",
			interet: "Il introduit les concepts fondamentaux de puissance et d'acte pour penser le mouvement et la finalité.",
			problematique: "La réalité d'une chose est-elle dans ce qu'elle est maintenant ou dans ce qu'elle peut devenir ?"
		}
	},
	{
		id: 16,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'habitude est une seconde nature. 
	<span class="phrase-num">[2]</span> Elle est une disposition acquise à agir d'une certaine manière. 
	<span class="phrase-num">[3]</span> Elle se forme par la répétition des actes. 
	<span class="phrase-num">[4]</span> C'est pourquoi il importe de contracter de bonnes habitudes dès l'enfance. 
	<span class="phrase-num">[5]</span> La vertu est une habitude de bien agir. 
	<span class="phrase-num">[6]</span> Le vice est une habitude de mal agir. 
	<span class="phrase-num">[7]</span> Mais l'habitude n'est pas une fatalité. 
	<span class="phrase-num">[8]</span> On peut en changer par de nouveaux actes. 
	<span class="phrase-num">[9]</span> L'éducation est l'art de former de bonnes habitudes. 
	<span class="phrase-num">[10]</span> Par elle, l'homme se fait lui-même une seconde nature, meilleure que la première. 
	»`,
		reponses: {
			origine: "ARISTOTE, <i>Éthique à Nicomaque</i>, livre II, 1103a-1103b, Paris : Vrin, 2017, p.178.",
			theme: "La nature",
			these: "La vertu morale est une disposition acquise, une habitude (hexis) qui devient une seconde nature par la répétition des actes.",
			interet: "Il montre que la vertu n'est ni purement naturelle ni contre nature, mais le fruit d'une éducation et d'une pratique.",
			problematique: "Devenons-nous vertueux par nature ou par habitude ?"
		}
	},
	{
		id: 17,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'homme est un être naturellement politique. 
	<span class="phrase-num">[2]</span> Celui qui ne peut vivre en société, ou qui n'a besoin de rien parce qu'il se suffit à lui-même, ne fait point partie de l'État ; c'est une brute ou un dieu. 
	<span class="phrase-num">[3]</span> L'instinct pousse tous les hommes à s'unir, mais c'est la raison qui les maintient ensemble. 
	<span class="phrase-num">[4]</span> L'État est une communauté de citoyens libres. 
	<span class="phrase-num">[5]</span> Son but n'est pas seulement de faire vivre, mais de faire bien vivre, c'est-à-dire de rendre possible une vie vertueuse et heureuse. 
	<span class="phrase-num">[6]</span> La justice est le lien des hommes dans l'État. 
	<span class="phrase-num">[7]</span> Car la justice est l'ordre de la communauté politique. 
	<span class="phrase-num">[8]</span> Sans justice, l'État n'est qu'une alliance pour le brigandage. 
	»`,
		reponses: {
			origine: "ARISTOTE, <i>Politique</i>, livre I, chapitre II, et livre III, chapitre VI, Paris : Vrin, 2016, p.234.",
			theme: "L'État",
			these: "L'homme est un animal politique (zoon politikon) dont la fin est de vivre bien et justement au sein de la communauté civique.",
			interet: "Il pose le fondement de la philosophie politique classique en définissant l'homme par sa nature sociale et politique.",
			problematique: "L'homme peut-il s'accomplir en dehors de la société politique ou a-t-il besoin de la cité pour être pleinement humain ?"
		}
	},
	{
		id: 18,
		contenu: `« 
	<span class="phrase-num">[1]</span> Il y a deux sortes de causes : les causes naturelles et les causes libres. 
	<span class="phrase-num">[2]</span> Les causes naturelles sont nécessaires. 
	<span class="phrase-num">[3]</span> Les causes libres sont contingentes. 
	<span class="phrase-num">[4]</span> L'homme est une cause libre. 
	<span class="phrase-num">[5]</span> Sa liberté se manifeste dans le choix entre des possibles. 
	<span class="phrase-num">[6]</span> Ce choix n'est pas indifférent. 
	<span class="phrase-num">[7]</span> Il engage l'homme tout entier. 
	<span class="phrase-num">[8]</span> C'est pourquoi l'homme est responsable de ses actes. 
	<span class="phrase-num">[9]</span> La liberté est le fondement de la responsabilité. 
	<span class="phrase-num">[10]</span> Sans liberté, il n'y a ni mérite ni démérite. 
	»`,
		reponses: {
			origine: "ARISTOTE, <i>Éthique à Nicomaque</i>, livre III, 1110a-1111b, Paris : Vrin, 2017, p.234.",
			theme: "La liberté",
			these: "L'homme est cause libre de ses actions, ce qui le rend responsable et fonde l'éloge ou le blâme.",
			interet: "Il lie la liberté au choix délibéré et à la responsabilité morale.",
			problematique: "Être libre, est-ce avoir le choix entre plusieurs possibles ou suivre sa nature ?"
		}
	},
	{
		id: 19,
		contenu: `« 
	<span class="phrase-num">[1]</span> La nature ne fait rien en vain. 
	<span class="phrase-num">[2]</span> L'homme est le seul animal qui ait la parole. 
	<span class="phrase-num">[3]</span> La voix est le signe du plaisir et de la peine ; aussi ne manque-t-elle pas aux autres animaux. 
	<span class="phrase-num">[4]</span> Car leur nature va jusqu'à éprouver la sensation de la peine et du plaisir et à se la signifier entre eux. 
	<span class="phrase-num">[5]</span> Mais la parole existe pour manifester l'utile et le nuisible, et par suite aussi le juste et l'injuste. 
	<span class="phrase-num">[6]</span> C'est le caractère propre de l'homme par rapport aux autres animaux d'être le seul à avoir la perception du bien et du mal, du juste et de l'injuste. 
	<span class="phrase-num">[7]</span> Or, c'est la communauté de ces choses qui constitue la famille et l'État. 
	»`,
		reponses: {
			origine: "ARISTOTE, <i>Politique</i>, livre I, chapitre II, 1253a, Paris : Vrin, 2016, p.98.",
			theme: "Le langage",
			these: "Le langage (logos) est propre à l'homme car il permet de manifester le juste et l'injuste, fondant ainsi la communauté politique.",
			interet: "Il distingue la simple voix (phone) de la parole (logos) et lie celle-ci à la vie éthique et politique.",
			problematique: "Le langage est-il simplement un outil de communication ou le fondement de la vie sociale et morale ?"
		}
	},
	// --------------------------------
	// ARON
	// --------------------------------
	{
		id: 20,
		contenu: `« 
	<span class="phrase-num">[1]</span> La liberté politique est la condition de la libre discussion. 
	<span class="phrase-num">[2]</span> Elle n'est jamais définitivement acquise. 
	<span class="phrase-num">[3]</span> Les régimes totalitaires du XXe siècle ont montré qu'elle pouvait disparaître. 
	<span class="phrase-num">[4]</span> La démocratie suppose un accord sur les règles du jeu politique. 
	<span class="phrase-num">[5]</span> Elle repose sur la reconnaissance de l'opposition légitime. 
	<span class="phrase-num">[6]</span> Le pluralisme des opinions est sa condition de possibilité. 
	<span class="phrase-num">[7]</span> Mais ce pluralisme ne doit pas conduire à l'indifférence. 
	<span class="phrase-num">[8]</span> La démocratie a besoin de citoyens engagés. 
	<span class="phrase-num">[9]</span> Elle suppose une éducation à la liberté. 
	<span class="phrase-num">[10]</span> Sans cette éducation, la liberté se perd dans la démagogie. 
	»`,
		reponses: {
			origine: "Raymond ARON, <i>Démocratie et totalitarisme</i>, chapitre I, Paris : Gallimard, 2017, p.89.",
			theme: "La liberté",
			these: "La liberté politique est fragile et suppose un accord sur les règles du jeu démocratique.",
			interet: "Il analyse les conditions de possibilité et les menaces pesant sur les régimes démocratiques.",
			problematique: "La démocratie est-elle un régime naturel ou un équilibre fragile à préserver ?"
		}
	},
	// --------------------------------
	// AUGUSTIN
	// --------------------------------
	{
		id: 21,
		contenu: `« 
	<span class="phrase-num">[1]</span> Nul ne choisit le mal pour le mal. 
	<span class="phrase-num">[2]</span> On ne le choisit que parce qu'on le prend pour un bien, ou pour un moindre mal qui paraît un bien en comparaison d'un plus grand mal. 
	<span class="phrase-num">[3]</span> Ainsi, le méchant même ne veut pas le mal, mais le bien apparent. 
	<span class="phrase-num">[4]</span> C'est pourquoi tout homme veut être heureux. 
	<span class="phrase-num">[5]</span> Mais tous ne savent pas en quoi consiste le vrai bonheur. 
	<span class="phrase-num">[6]</span> Les uns le placent dans les plaisirs du corps, les autres dans les honneurs, d'autres dans la vertu. 
	<span class="phrase-num">[7]</span> L'erreur vient de ce qu'on prend le moyen pour la fin. 
	<span class="phrase-num">[8]</span> Le vrai bonheur ne peut être que dans la possession de Dieu, qui est le bien suprême. 
	<span class="phrase-num">[9]</span> Car lui seul peut rassasier notre désir infini. 
	<span class="phrase-num">[10]</span> Aimer Dieu et être aimé de lui, voilà la béatitude. 
	»`,
		reponses: {
			origine: "AUGUSTIN, <i>La Cité de Dieu</i>, livre X, chapitre I, et <i>Confessions</i>, livre I, Paris : Gallimard, 2016, p.456.",
			theme: "Le bonheur",
			these: "Le désir de bonheur est universel, mais seul Dieu, le bien suprême, peut le combler véritablement.",
			interet: "Il christianise la quête antique du bonheur en l'orientant vers Dieu comme fin ultime.",
			problematique: "Le bonheur parfait est-il accessible sur Terre ou seulement dans l'au-delà ?"
		}
	},
	{
		id: 22,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le temps est-il une substance ? Est-il un accident ? 
	<span class="phrase-num">[2]</span> Il n'est ni l'un ni l'autre. 
	<span class="phrase-num">[3]</span> Le temps n'existe que dans l'esprit qui le mesure. 
	<span class="phrase-num">[4]</span> Car si personne ne compte les mouvements du ciel, il n'y a pas de temps. 
	<span class="phrase-num">[5]</span> Le temps est donc la mesure du mouvement selon l'avant et l'après. 
	<span class="phrase-num">[6]</span> Mais cette mesure suppose une âme qui mesure. 
	<span class="phrase-num">[7]</span> Sans l'âme, il n'y a que des mouvements, mais pas de temps. 
	<span class="phrase-num">[8]</span> C'est pourquoi le temps est quelque chose de relatif à l'âme. 
	<span class="phrase-num">[9]</span> Il n'est pas dans les choses, mais dans la conscience que nous en avons. 
	<span class="phrase-num">[10]</span> Ainsi, le temps est la forme de la sensibilité interne. 
	»`,
		reponses: {
			origine: "AUGUSTIN, <i>Confessions</i>, livre XI, chapitres XIV-XXVIII, Paris : Gallimard, 2016, p.345.",
			theme: "Le temps",
			these: "Le temps n'a pas de réalité objective ; il est une « distension de l'âme », une mesure subjective du mouvement.",
			interet: "Il propose une analyse psychologique et subjective du temps, anticipant des philosophies modernes.",
			problematique: "Le temps existe-t-il en dehors de notre esprit qui le perçoit et le mesure ou n'est-il qu'une réalité objective ?"
		}
	},
	{
		id: 23,
		contenu: `« 
	<span class="phrase-num">[1]</span> La volonté est libre. 
	<span class="phrase-num">[2]</span> Cette liberté se manifeste dans le choix entre le bien et le mal. 
	<span class="phrase-num">[3]</span> Dieu a créé l'homme avec le libre arbitre, afin qu'il puisse mériter la récompense ou la punition. 
	<span class="phrase-num">[4]</span> Sans liberté, point de morale. 
	<span class="phrase-num">[5]</span> Mais comment concilier cette liberté avec la prescience divine ? 
	<span class="phrase-num">[6]</span> Dieu sait ce que je choisirai, mais ce savoir ne cause pas mon choix. 
	<span class="phrase-num">[7]</span> Je choisis librement ce que Dieu sait que je choisirai. 
	<span class="phrase-num">[8]</span> La prescience divine n'enlève rien à la liberté humaine. 
	<span class="phrase-num">[9]</span> Car Dieu est hors du temps ; il voit d'un seul regard l'éternité de mon acte libre. 
	<span class="phrase-num">[10]</span> Ainsi, liberté et prescience sont compatibles. 
	»`,
		reponses: {
			origine: "AUGUSTIN, <i>De la grâce et du libre arbitre</i>, chapitres II-III, et <i>La Cité de Dieu</i>, livre V, Paris : Gallimard, 2016, p.234.",
			theme: "La liberté",
			these: "Le libre arbitre, condition de la moralité, est compatible avec la prescience divine, car Dieu connaît éternellement nos choix libres.",
			interet: "Il tente de résoudre l'aporie théologique de la liberté humaine face à la toute-puissance et prescience divines.",
			problematique: "La liberté humaine est-elle possible si Dieu sait d'avance ce que nous ferons ou n'est-ce qu'une illusion ?"
		}
	},
	{
		id: 24,
		contenu: `« 
	<span class="phrase-num">[1]</span> La religion est le lien qui unit l'homme à Dieu. 
	<span class="phrase-num">[2]</span> Mais ce lien ne va pas de soi. 
	<span class="phrase-num">[3]</span> L'homme a besoin de médiations. 
	<span class="phrase-num">[4]</span> Ces médiations sont les rites, les sacrements, la prière. 
	<span class="phrase-num">[5]</span> Par elles, l'homme entre en relation avec le sacré. 
	<span class="phrase-num">[6]</span> La religion est donc une pratique, pas seulement une croyance. 
	<span class="phrase-num">[7]</span> Elle est une manière de vivre. 
	<span class="phrase-num">[8]</span> Elle donne un sens à l'existence. 
	<span class="phrase-num">[9]</span> Elle répond aux questions ultimes : d'où venons-nous, que faisons-nous ici, où allons-nous ? 
	<span class="phrase-num">[10]</span> Sans religion, la vie humaine serait comme une lettre sans adresse. 
	»`,
		reponses: {
			origine: "AUGUSTIN, <i>Confessions</i>, livre I, Paris : Gallimard, 2016, p.56.",
			theme: "La religion",
			these: "La religion est le lien pratique et rituel qui unit l'homme à Dieu, donnant un sens ultime à son existence.",
			interet: "Il définit la religion par la relation concrète au divin, par la quête de sens et la pratique cultuelle.",
			problematique: "La religion est-elle affaire de croyance intérieure ou de pratique rituelle ?"
		}
	},
	// --------------------------------
	// AVERROÈS
	// --------------------------------
	{
		id: 25,
		contenu: `« 
	<span class="phrase-num">[1]</span> La vérité ne saurait contredire la vérité, mais elles s'accordent et témoignent l'une pour l'autre. 
	<span class="phrase-num">[2]</span> La Loi divine commande l'étude rationnelle des êtres. 
	<span class="phrase-num">[3]</span> La philosophie n'est donc pas une innovation blâmable, mais une obligation pour ceux qui en ont la capacité. 
	<span class="phrase-num">[4]</span> Il y a une seule intelligence, séparée et éternelle, pour tout le genre humain. 
	<span class="phrase-num">[5]</span> Les croyances religieuses sont des images de la vérité philosophique, accessibles à tous. 
	<span class="phrase-num">[6]</span> La raison et la foi sont deux voies différentes vers une même vérité. 
	»`,
		reponses: {
			origine: "AVERROÈS (Ibn Rochd), <i>Discours décisif</i>, Paris : Flammarion, 2016.",
			theme: "La religion",
			these: "La raison (philosophie) et la foi (religion) sont deux expressions d'une même vérité et ne peuvent entrer en conflit.",
			interet: "Il défend l'autonomie et la légitimité de la philosophie face à la théologie dans le monde musulman médiéval.",
			problematique: "La vérité religieuse et la vérité philosophique sont-elles conciliables ou irrémédiablement opposées ?"
		}
	},
	// --------------------------------
	// AVICENNE
	// --------------------------------
	{
		id: 26,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'être nécessaire est celui qui, s'il n'existait pas, rien n'existerait. 
	<span class="phrase-num">[2]</span> L'être contingent est celui qui peut exister ou ne pas exister. 
	<span class="phrase-num">[3]</span> Tout être contingent a besoin d'une cause pour exister. 
	<span class="phrase-num">[4]</span> La chaîne des causes ne peut remonter à l'infini. 
	<span class="phrase-num">[5]</span> Il faut donc un être nécessaire, cause première de tout ce qui existe. 
	<span class="phrase-num">[6]</span> Cet être nécessaire, c'est Dieu. 
	<span class="phrase-num">[7]</span> Il est un, simple, éternel. 
	<span class="phrase-num">[8]</span> En lui, essence et existence sont identiques. 
	<span class="phrase-num">[9]</span> Pour tous les autres êtres, l'existence est distincte de l'essence, elle leur est donnée. 
	<span class="phrase-num">[10]</span> Ainsi, tout ce qui est contingent reçoit son existence de l'être nécessaire. 
	»`,
		reponses: {
			origine: "AVICENNE, <i>Métaphysique du Shifâ</i>, livre I, chapitre VI, Paris : Vrin, 2016, p.234.",
			theme: "La religion",
			these: "L'existence de Dieu est prouvée par la distinction entre l'être nécessaire et l'être contingent.",
			interet: "Il formule une preuve de l'existence de Dieu par la contingence, qui influencera Thomas d'Aquin et la scolastique.",
			problematique: "L'existence du monde contingent prouve-t-elle l'existence d'un être nécessaire ou faut-il d'autres arguments ?"
		}
	},
	{
		id: 27,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'âme humaine est une substance spirituelle indépendante du corps. 
	<span class="phrase-num">[2]</span> Elle n'est pas la forme du corps, comme le pensait Aristote. 
	<span class="phrase-num">[3]</span> Elle est une substance à part entière. 
	<span class="phrase-num">[4]</span> Sa connaissance d'elle-même ne passe pas par les sens. 
	<span class="phrase-num">[5]</span> L'homme volant est une expérience de pensée : si un homme était créé d'un coup, suspendu dans l'air, sans perception sensible, il aurait encore conscience de lui-même. 
	<span class="phrase-num">[6]</span> Cette conscience de soi est la preuve de l'existence de l'âme indépendamment du corps. 
	<span class="phrase-num">[7]</span> L'âme se connaît elle-même par elle-même, non par l'intermédiaire du corps. 
	<span class="phrase-num">[8]</span> Elle est donc immortelle. 
	<span class="phrase-num">[9]</span> Après la mort du corps, elle subsiste. 
	<span class="phrase-num">[10]</span> Sa félicité ou sa souffrance éternelle dépend de sa connaissance de Dieu. 
	»`,
		reponses: {
			origine: "AVICENNE, <i>De anima</i>, livre V, chapitre VII, Paris : Vrin, 2016, p.345.",
			theme: "La conscience",
			these: "L'âme est une substance spirituelle indépendante du corps, qui se connaît elle-même par une intuition directe.",
			interet: "Il introduit l'argument dit de « l'homme volant » pour prouver l'immatérialité de l'âme.",
			problematique: "La conscience de soi précède-t-elle toute connaissance sensible ou en est-elle le produit ?"
		}
	},
	// --------------------------------
	// BACHELARD
	// --------------------------------
	{
		id: 28,
		contenu: `« 
	<span class="phrase-num">[1]</span> La science s'oppose à l'opinion. 
	<span class="phrase-num">[2]</span> L'opinion pense mal ; elle ne pense pas. 
	<span class="phrase-num">[3]</span> Elle traduit des besoins en connaissances. 
	<span class="phrase-num">[4]</span> En désignant les objets par leur utilité, elle s'interdit de les connaître. 
	<span class="phrase-num">[5]</span> Rien ne va de soi. Rien n'est donné. Tout est construit. 
	<span class="phrase-num">[6]</span> La connaissance scientifique est une conquête sur l'erreur. 
	<span class="phrase-num">[7]</span> Elle progresse par rectification. 
	<span class="phrase-num">[8]</span> L'esprit scientifique nous interdit d'avoir une opinion sur des questions qu'on ne comprend pas. 
	<span class="phrase-num">[9]</span> Avant tout, il faut savoir poser des problèmes. 
	<span class="phrase-num">[10]</span> Et quoi qu'on dise, dans la vie scientifique, les problèmes ne se posent pas d'eux-mêmes. C'est précisément ce sens du problème qui donne la marque du véritable esprit scientifique. 
	»`,
		reponses: {
			origine: "Gaston BACHELARD, <i>La Formation de l'esprit scientifique</i>, chapitre I, Paris : Vrin, 2016, p.78.",
			theme: "La science",
			these: "La connaissance scientifique se construit contre l'opinion et l'évidence première, par une rupture épistémologique.",
			interet: "Il fonde l'épistémologie française en montrant que la science progresse par obstacles surmontés.",
			problematique: "La science commence-t-elle par l'observation ou par la rupture avec les évidences premières ?"
		}
	},
	// --------------------------------
	// BACON
	// --------------------------------
	{
		id: 29,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le savoir est puissance. 
	<span class="phrase-num">[2]</span> La connaissance et la puissance humaine coïncident. 
	<span class="phrase-num">[3]</span> Car l'ignorance de la cause prive de l'effet. 
	<span class="phrase-num">[4]</span> On ne vainc la nature qu'en lui obéissant. 
	<span class="phrase-num">[5]</span> Ce qui dans la contemplation est cause, dans l'opération est règle. 
	<span class="phrase-num">[6]</span> L'homme, ministre et interprète de la nature, n'agit et ne comprend que selon ce qu'il a observé de l'ordre de la nature. 
	<span class="phrase-num">[7]</span> Au-delà, il ne sait et ne peut rien. 
	<span class="phrase-num">[8]</span> Nulle force ne peut briser la chaîne des causes. 
	<span class="phrase-num">[9]</span> La vaincre, c'est la comprendre. 
	<span class="phrase-num">[10]</span> Ainsi, science et puissance se rejoignent dans la connaissance des causes. 
	»`,
		reponses: {
			origine: "Francis BACON, <i>Novum Organum</i>, livre I, Aphorismes III et CXXIX, Paris : PUF, 2016, p.123.",
			theme: "La science",
			these: "La connaissance des causes donne le pouvoir d'agir sur la nature : savoir est pouvoir.",
			interet: "Il pose les fondements de la science moderne comme maîtrise technique de la nature.",
			problematique: "La science doit-elle viser la contemplation ou la domination de la nature ?"
		}
	},
	{
		id: 30,
		contenu: `« 
	<span class="phrase-num">[1]</span> Les idoles de la tribu sont fondées sur la nature humaine elle-même. 
	<span class="phrase-num">[2]</span> L'entendement humain ressemble à un miroir infidèle qui mêle sa propre nature à celle des choses. 
	<span class="phrase-num">[3]</span> Les idoles de la caverne sont les idoles propres à chaque individu. 
	<span class="phrase-num">[4]</span> Chacun a sa caverne particulière qui refracte et corrompt la lumière de la nature. 
	<span class="phrase-num">[5]</span> Les idoles de la place publique viennent du commerce des hommes entre eux. 
	<span class="phrase-num">[6]</span> Les mots font violence à l'entendement et troublent tout. 
	<span class="phrase-num">[7]</span> Les idoles du théâtre sont celles qui sont entrées dans l'âme par la fausseté des dogmes philosophiques. 
	<span class="phrase-num">[8]</span> Ce sont des fictions, des mondes imaginaires. 
	<span class="phrase-num">[9]</span> Il faut purger l'esprit de toutes ces idoles pour accéder à la vraie connaissance. 
	<span class="phrase-num">[10]</span> Telle est la purification nécessaire à la science. 
	»`,
		reponses: {
			origine: "Francis BACON, <i>Novum Organum</i>, livre I, Aphorismes XLI-LXII, Paris : PUF, 2016, p.178.",
			theme: "La raison",
			these: "L'esprit humain est sujet à quatre types d'illusions (idoles) qu'il faut identifier et éliminer pour accéder à la vraie connaissance.",
			interet: "Il propose une critique des préjugés qui entravent la connaissance scientifique.",
			problematique: "La raison peut-elle se libérer complètement de ses préjugés ou en reste-t-elle toujours tributaire ?"
		}
	},
	// --------------------------------
	// BEAUVOIR
	// --------------------------------
	{
		id: 31,
		contenu: `« 
	<span class="phrase-num">[1]</span> On ne naît pas femme : on le devient. 
	<span class="phrase-num">[2]</span> Aucun destin biologique, psychique, économique ne définit la figure que revêt au sein de la société la femelle humaine. 
	<span class="phrase-num">[3]</span> C'est l'ensemble de la civilisation qui élabore ce produit intermédiaire entre le mâle et le castrat qu'on qualifie de féminin. 
	<span class="phrase-num">[4]</span> La femme se détermine par rapport à l'homme, non l'homme par rapport à elle. 
	<span class="phrase-num">[5]</span> Elle est l'inessentiel en face de l'essentiel. 
	<span class="phrase-num">[6]</span> Il est le Sujet, il est l'Absolu : elle est l'Autre. 
	<span class="phrase-num">[7]</span> La catégorie de l'Autre est aussi originelle que la conscience elle-même. 
	<span class="phrase-num">[8]</span> Mais la femme n'a jamais constitué un groupe séparé qui se poserait pour soi en face du groupe masculin. 
	<span class="phrase-num">[9]</span> Le lien qui l'unit à ses oppresseurs n'est comparable à aucun autre. 
	<span class="phrase-num">[10]</span> C'est pourquoi sa libération sera d'une nature particulière. 
	»`,
		reponses: {
			origine: "Simone de BEAUVOIR, <i>Le Deuxième Sexe</i>, Introduction, Paris : Gallimard, 2016, p.123.",
			theme: "La liberté",
			these: "La féminité n'est pas une essence naturelle mais une construction sociale et culturelle.",
			interet: "Elle pose les fondements de la philosophie féministe en distinguant sexe biologique et genre construit.",
			problematique: "L'identité féminine est-elle naturelle ou culturelle ?"
		}
	},
	// --------------------------------
	// BENJAMIN
	// --------------------------------
	{
		id: 32,
		contenu: `« 
	<span class="phrase-num">[1]</span> Il n'est pas de document de civilisation qui ne soit aussi un document de barbarie. 
	<span class="phrase-num">[2]</span> Les biens culturels doivent leur existence non seulement au labeur des grands génies qui les ont créés, mais aussi au servage anonyme de leurs contemporains. 
	<span class="phrase-num">[3]</span> L'historien matérialiste se tient à l'écart de cette transmission traditionnelle de la culture. 
	<span class="phrase-num">[4]</span> Il considère comme sa tâche de brosser l'histoire à rebrousse-poil. 
	<span class="phrase-num">[5]</span> L'ange de l'histoire a le visage tourné vers le passé. 
	<span class="phrase-num">[6]</span> Là où pour nous apparaît une chaîne d'événements, il ne voit qu'une seule et unique catastrophe. 
	<span class="phrase-num">[7]</span> Il voudrait bien s'attarder, réveiller les morts et rassembler ce qui a été démembré. 
	<span class="phrase-num">[8]</span> Mais une tempête souffle du paradis, elle s'est prise dans ses ailes, si violemment que l'ange ne peut plus les refermer. 
	<span class="phrase-num">[9]</span> Cette tempête le pousse irrésistiblement vers l'avenir auquel il tourne le dos. 
	<span class="phrase-num">[10]</span> Ce que nous appelons le progrès, c'est cette tempête. 
	»`,
		reponses: {
			origine: "Walter BENJAMIN, <i>Sur le concept d'histoire</i>, Thèses VII et IX, Paris : Gallimard, 2016, p.234.",
			theme: "Le temps",
			these: "L'histoire est vue comme une catastrophe permanente, et la culture porte la marque de la barbarie qui l'a rendue possible.",
			interet: "Il propose une vision messianique et critique de l'histoire, opposée à l'idée de progrès continu.",
			problematique: "Le progrès historique est-il une réalité ou une illusion ?"
		}
	},
	// --------------------------------
	// BENTHAM
	// --------------------------------
	{
		id: 33,
		contenu: `« 
	<span class="phrase-num">[1]</span> La nature a placé l'humanité sous la gouverne de deux maîtres souverains : la douleur et le plaisir. 
	<span class="phrase-num">[2]</span> C'est à eux seuls qu'il appartient de nous indiquer ce que nous devons faire, aussi bien que de déterminer ce que nous ferons. 
	<span class="phrase-num">[3]</span> D'un côté, le critère du bien et du mal, de l'autre, l'enchaînement des causes et des effets, leur sont attachés. 
	<span class="phrase-num">[4]</span> Le principe d'utilité reconnaît cette sujétion et la prend pour fondement de tout système moral. 
	<span class="phrase-num">[5]</span> Par principe d'utilité, on entend le principe qui approuve ou désapprouve toute action selon la tendance qu'elle a à augmenter ou diminuer le bonheur de la partie dont l'intérêt est en jeu. 
	<span class="phrase-num">[6]</span> Je dis de toute action, et par conséquent non seulement de toute action d'un individu privé, mais aussi de toute mesure de gouvernement. 
	<span class="phrase-num">[7]</span> L'intérêt de la communauté est l'un des plus généraux qu'on puisse avoir en vue. 
	<span class="phrase-num">[8]</span> Mais qu'est-ce que l'intérêt de la communauté ? C'est la somme des intérêts des divers membres qui la composent. 
	<span class="phrase-num">[9]</span> Le but de la morale et de la législation est donc de maximiser le bonheur collectif. 
	<span class="phrase-num">[10]</span> Telle est la mesure du bien et du mal. 
	»`,
		reponses: {
			origine: "Jeremy BENTHAM, <i>Introduction aux principes de morale et de législation</i>, chapitre I, Paris : Vrin, 2017, p.89.",
			theme: "Le devoir",
			these: "Le principe d'utilité, fondé sur la recherche du plaisir et l'évitement de la douleur, est le fondement de toute morale et de toute législation.",
			interet: "Il pose les bases de l'utilitarisme classique, où le bien est identifié à l'utile pour le plus grand nombre.",
			problematique: "Le bien moral se réduit-il à la maximisation du plaisir et de la minimisation de la douleur ou repose-t-il sur d'autres principes ?"
		}
	},
	// --------------------------------
	// BERGSON
	// --------------------------------
	{
		id: 34,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le temps est la durée même de la conscience. 
	<span class="phrase-num">[2]</span> Il n'est pas une succession d'instants extérieurs les uns aux autres. 
	<span class="phrase-num">[3]</span> Il est un flux continu, une mélodie intérieure. 
	<span class="phrase-num">[4]</span> Le temps de la science n'est qu'un temps spatialisé. 
	<span class="phrase-num">[5]</span> Le temps réel est celui de la conscience. 
	<span class="phrase-num">[6]</span> Il est hétérogène, qualitatif, irréversible. 
	<span class="phrase-num">[7]</span> Chaque moment y est unique. 
	<span class="phrase-num">[8]</span> Le passé s'y conserve dans le présent. 
	<span class="phrase-num">[9]</span> Ainsi, le temps est mémoire et création. 
	<span class="phrase-num">[10]</span> Il est la vie même de l'esprit. 
	»`,
		reponses: {
			origine: "Henri BERGSON, <i>Essai sur les données immédiates de la conscience</i>, chapitre II, Paris : PUF, 2016, p.189.",
			theme: "Le temps",
			these: "Le temps réel est la durée qualitative de la conscience, non le temps spatialisé de la science.",
			interet: "Il distingue le temps vécu du temps mesuré.",
			problematique: "Le temps est-il mesurable objectivement ou est-il avant tout une réalité vécue ?"
		}
	},
	{
		id: 35,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le rire est le propre de l'homme. 
	<span class="phrase-num">[2]</span> Mais il ne serait pas un simple agrément. 
	<span class="phrase-num">[3]</span> Le rire a une fonction sociale. 
	<span class="phrase-num">[4]</span> Il corrige les hommes en leur faisant peur. 
	<span class="phrase-num">[5]</span> Il est une espèce de brimade sociale. 
	<span class="phrase-num">[6]</span> Il punit les raideurs, les automatismes, les distractions. 
	<span class="phrase-num">[7]</span> Il exige de nous une attention toujours en éveil, une souplesse toujours renouvelée. 
	<span class="phrase-num">[8]</span> Il est le signe que la vie sociale exige de l'adaptabilité. 
	<span class="phrase-num">[9]</span> Rire de quelqu'un, c'est le rappeler à la souplesse de la vie. 
	<span class="phrase-num">[10]</span> Ainsi, le comique est du mécanique plaqué sur du vivant. 
	»`,
		reponses: {
			origine: "Henri BERGSON, <i>Le Rire. Essai sur la signification du comique</i>, chapitre I, Paris : PUF, 2016, p.89.",
			theme: "La nature",
			these: "Le rire est une correction sociale qui vise à punir la raideur et le mécanisme, rappelant l'homme à la souplesse de la vie.",
			interet: "Il propose une théorie sociale et vitaliste du rire, liant comique, vie et société.",
			problematique: "Le rire a-t-il une fonction sociale utile ou n'est-il qu'un divertissement sans portée ?"
		}
	},
	// --------------------------------
	// BERKELEY
	// --------------------------------
	{
		id: 36,
		contenu: `« 
	<span class="phrase-num">[1]</span> Être, c'est être perçu. 
	<span class="phrase-num">[2]</span> Il est en effet évident pour quiconque prête attention aux objets de la connaissance humaine que ce sont des idées. 
	<span class="phrase-num">[3]</span> Les idées sont imprimées sur les sens, ou bien perçues par l'attention portée aux passions et aux opérations de l'esprit, ou bien formées par l'imagination. 
	<span class="phrase-num">[4]</span> Et qu'est-ce que l'ensemble des objets de la connaissance humaine, sinon des idées ? 
	<span class="phrase-num">[5]</span> Or, une idée ne peut exister que dans un esprit qui la perçoit. 
	<span class="phrase-num">[6]</span> L'existence d'une idée consiste donc à être perçue. 
	<span class="phrase-num">[7]</span> Il n'y a pas d'autre substance que l'esprit qui perçoit. 
	<span class="phrase-num">[8]</span> Les objets sensibles n'ont pas d'existence distincte de leur perceptibilité. 
	<span class="phrase-num">[9]</span> Leur esse est percipi. 
	<span class="phrase-num">[10]</span> C'est pourquoi il ne peut y avoir de matière inerte et sans pensée. 
	»`,
		reponses: {
			origine: "George BERKELEY, <i>Principes de la connaissance humaine</i>, §1-3, Paris : Flammarion, 2017, p.123.",
			theme: "La conscience",
			these: "L'existence des objets sensibles consiste dans leur perceptibilité : être, c'est être perçu (esse est percipi).",
			interet: "Il pousse l'empirisme jusqu'à l'immatérialisme, niant l'existence de la matière indépendante de l'esprit.",
			problematique: "Les objets existent-ils en dehors de notre perception ou n'existent-ils qu'à travers elle ?"
		}
	},
	// --------------------------------
	// CICÉRON
	// --------------------------------
	{
		id: 37,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'amitié est la seule chose sur l'utilité de laquelle tous les hommes sont d'accord. 
	<span class="phrase-num">[2]</span> La vertu, la sagesse, la culture, beaucoup les rejettent ; l'amitié, personne. 
	<span class="phrase-num">[3]</span> Il n'est personne qui ne préfère avoir un ami que de l'argent, des honneurs, des richesses. 
	<span class="phrase-num">[4]</span> Et si, pour certains, l'amitié n'est pas le premier des biens, elle est du moins l'un des premiers. 
	<span class="phrase-num">[5]</span> Mais qu'est-ce que l'amitié ? Est-ce vouloir à quelqu'un tout le bien possible, comme on se le veut à soi-même ? 
	<span class="phrase-num">[6]</span> Ou bien est-ce une communauté de sentiments dans les choses humaines et divines, jointe à la bienveillance et à l'affection ? 
	<span class="phrase-num">[7]</span> Ou encore, comme je le pense, est-ce l'accord parfait de deux âmes sur toutes les questions ? 
	<span class="phrase-num">[8]</span> Il y a là une énigme. 
	<span class="phrase-num">[9]</span> Ce qui est certain, c'est que l'amitié est un bien, et qu'elle est nécessaire à la vie. 
	»`,
		reponses: {
			origine: "CICÉRON, <i>Laelius de Amicitia</i>, chapitres VI, XIII, Paris : Les Belles Lettres, 2017, p.123.",
			theme: "La nature",
			these: "L'amitié, bien universellement reconnu, est une communauté de sentiments et de vues qui rend la vie bonne.",
			interet: "Il place l'amitié au cœur de la vie bonne, la distinguant des biens matériels.",
			problematique: "L'amitié est-elle un moyen pour atteindre le bonheur ou une part essentielle de celui-ci ?"
		}
	},
	// --------------------------------
	// COMTE
	// --------------------------------
	{
		id: 38,
		contenu: `« 
	<span class="phrase-num">[1]</span> La loi des trois états est la loi fondamentale du développement de l'humanité. 
	<span class="phrase-num">[2]</span> Chacune de nos conceptions principales, chaque branche de nos connaissances, passe successivement par trois états théoriques différents. 
	<span class="phrase-num">[3]</span> L'état théologique est le premier. 
	<span class="phrase-num">[4]</span> L'esprit humain, dirigeant ses recherches vers la nature intime des êtres, vers les causes premières, se représente les phénomènes comme produits par l'action directe d'agents surnaturels. 
	<span class="phrase-num">[5]</span> L'état métaphysique n'est au fond qu'une simple modification du premier. 
	<span class="phrase-num">[6]</span> On y substitue aux agents surnaturels des forces abstraites, de véritables entités. 
	<span class="phrase-num">[7]</span> L'état positif est l'état définitif de l'intelligence humaine. 
	<span class="phrase-num">[8]</span> L'esprit humain renonce à chercher l'origine et la destination de l'univers, et s'attache à découvrir, par l'usage bien combiné du raisonnement et de l'observation, leurs lois effectives. 
	<span class="phrase-num">[9]</span> Tel est le progrès fondamental de l'esprit humain. 
	<span class="phrase-num">[10]</span> La science positive doit maintenant étendre sa méthode à l'étude des sociétés pour fonder une physique sociale. 
	»`,
		reponses: {
			origine: "Auguste COMTE, <i>Cours de philosophie positive</i>, 1re leçon, Paris : Hermann, 2015, p.89.",
			theme: "La science",
			these: "L'esprit humain passe par trois états successifs : théologique, métaphysique et positif.",
			interet: "Il fonde le positivisme et la sociologie comme science positive des faits sociaux.",
			problematique: "L'humanité progresse-t-elle nécessairement vers une connaissance scientifique de tous les phénomènes ou cette progression est-elle contingente ?"
		}
	},
	// --------------------------------
	// CONDILLAC
	// --------------------------------
	{
		id: 39,
		contenu: `« 
	<span class="phrase-num">[1]</span> La sensation est le principe de toute connaissance. 
	<span class="phrase-num">[2]</span> Il n'y a rien dans l'entendement qui n'ait d'abord été dans les sens. 
	<span class="phrase-num">[3]</span> Toutes nos idées viennent des sensations. 
	<span class="phrase-num">[4]</span> Les idées les plus abstraites elles-mêmes ne sont que des sensations transformées. 
	<span class="phrase-num">[5]</span> La réflexion n'est qu'une sensation qui naît de la sensation. 
	<span class="phrase-num">[6]</span> Ainsi, tout se ramène à la sensation. 
	<span class="phrase-num">[7]</span> L'homme est une statue qui sent. 
	<span class="phrase-num">[8]</span> L'âme n'est qu'une faculté de sentir. 
	<span class="phrase-num">[9]</span> Les opérations de l'âme ne sont que des sensations transformées. 
	<span class="phrase-num">[10]</span> Le jugement, la réflexion, le désir, ne sont que des manières d'être de la sensation. 
	»`,
		reponses: {
			origine: "Étienne Bonnot de CONDILLAC, <i>Traité des sensations</i>, Extrait raisonné, Paris : Vrin, 2015, p.123.",
			theme: "La science",
			these: "Toute connaissance et toutes les facultés de l'âme dérivent de la sensation, qui est le principe unique de la vie mentale.",
			interet: "Il radicalise l'empirisme de Locke en ramenant toutes les opérations de l'esprit à la sensation transformée.",
			problematique: "La sensation est-elle la source unique de toutes nos connaissances ou faut-il admettre d'autres sources (raison, intuition) ?"
		}
	},
	// --------------------------------
	// COURNOT
	// --------------------------------
	{
		id: 40,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le hasard n'est pas une cause, mais la rencontre de séries causales indépendantes. 
	<span class="phrase-num">[2]</span> Deux séries d'événements, chacune déterminée par ses propres lois, peuvent se rencontrer par hasard. 
	<span class="phrase-num">[3]</span> Cette rencontre n'est pas elle-même causée par une loi particulière. 
	<span class="phrase-num">[4]</span> Elle est fortuite. 
	<span class="phrase-num">[5]</span> Le hasard est donc objectif : il tient à l'indépendance des séries causales, non à notre ignorance. 
	<span class="phrase-num">[6]</span> La probabilité mesure la possibilité de ces rencontres. 
	<span class="phrase-num">[7]</span> Elle est le fondement de notre connaissance du monde réel. 
	<span class="phrase-num">[8]</span> Car nous ne pouvons tout connaître des séries causales. 
	<span class="phrase-num">[9]</span> Le probable est notre guide dans l'action et dans la science. 
	<span class="phrase-num">[10]</span> Ainsi, le hasard est au cœur de notre rapport au monde. 
	»`,
		reponses: {
			origine: "Antoine Augustin COURNOT, <i>Essai sur les fondements de nos connaissances</i>, chapitre III, Paris : Vrin, 2016, p.234.",
			theme: "La science",
			these: "Le hasard est la rencontre de séries causales indépendantes, non une absence de détermination.",
			interet: "Il propose une conception objective du hasard, distincte de l'indétermination.",
			problematique: "Le hasard est-il dans les choses ou seulement dans notre ignorance ?"
		}
	},
	// --------------------------------
	// DESCARTES
	// --------------------------------
	{
		id: 41,
		contenu: `« 
	<span class="phrase-num">[1]</span> Je pense, donc je suis est la première et la plus certaine qui se présente à celui qui conduit ses pensées par ordre. 
	<span class="phrase-num">[2]</span> Et pour examiner cela, il faut considérer que je suis un être qui pense, c'est-à-dire un être qui doute, qui affirme, qui nie, qui connaît peu de choses, qui en ignore beaucoup, qui aime, qui hait, qui veut, qui ne veut pas, qui imagine aussi et qui sent. 
	<span class="phrase-num">[3]</span> Car, comme j'ai remarqué ci-dessus, quoique les choses que je sens et que j'imagine ne soient peut-être rien du tout hors de moi et en elles-mêmes, je suis néanmoins assuré que ces façons de penser, que j'appelle sentiments et imaginations, en tant seulement qu'elles sont des façons de penser, résident et se rencontrent certainement en moi. 
	<span class="phrase-num">[4]</span> Et dans ce peu que je viens de dire, je crois avoir rapporté tout ce que je sais véritablement, sinon que peut-être suis-je quelque chose de plus que je ne pense. 
	»`,
		reponses: {
			origine: "René DESCARTES, <i>Méditations métaphysiques</i>, Méditation seconde, Paris : Flammarion, 2015, p.98.",
			theme: "La conscience",
			these: "La conscience de soi comme être pensant est la première certitude.",
			interet: "Il fonde la philosophie moderne sur le sujet pensant.",
			problematique: "La conscience de soi est-elle le fondement de toute connaissance ou une connaissance parmi d'autres ?"
		}
	},
	{
		id: 42,
		contenu: `« 
	<span class="phrase-num">[1]</span> La raison est la règle de la vérité. 
	<span class="phrase-num">[2]</span> Mais pour bien user de la raison, il faut suivre certaines règles. 
	<span class="phrase-num">[3]</span> Ces règles sont celles de la méthode. 
	<span class="phrase-num">[4]</span> La première est de ne recevoir jamais aucune chose pour vraie que je ne la connusse évidemment être telle. 
	<span class="phrase-num">[5]</span> La seconde, de diviser chacune des difficultés en autant de parcelles qu'il se pourrait. 
	<span class="phrase-num">[6]</span> La troisième, de conduire par ordre mes pensées, en commençant par les objets les plus simples. 
	<span class="phrase-num">[7]</span> La dernière, de faire partout des dénombrements si entiers et des revues si générales, que je fusse assuré de ne rien omettre. 
	<span class="phrase-num">[8]</span> Ainsi, la raison bien conduite mène à la vérité. 
	<span class="phrase-num">[9]</span> Telle est la méthode cartésienne. 
	»`,
		reponses: {
			origine: "René DESCARTES, <i>Discours de la méthode</i>, Deuxième partie, Paris : Flammarion, 2016, p.89.",
			theme: "La raison",
			these: "La raison doit être conduite selon des règles méthodiques pour atteindre la vérité.",
			interet: "Il fonde le rationalisme méthodique moderne.",
			problematique: "La raison peut-elle bien juger spontanément ou a-t-elle besoin d'une méthode pour atteindre la vérité ?"
		}
	},
	{
		id: 43,
		contenu: `« 
	<span class="phrase-num">[1]</span> Je ne puis rien connaître hors de moi que par l'entremise de mes sens. 
	<span class="phrase-num">[2]</span> Or mes sens me trompent parfois, et la prudence veut que je ne me fie jamais à ceux qui m'ont trompé. 
	<span class="phrase-num">[3]</span> Mais il se peut que, même si les sens nous trompent quelquefois touchant des choses peu sensibles et éloignées, il s'en rencontre encore plusieurs dont on ne puisse raisonnablement douter. 
	<span class="phrase-num">[4]</span> Par exemple, que je sois ici, assis auprès du feu, vêtu d'une robe de chambre, tenant ce papier entre les mains. 
	<span class="phrase-num">[5]</span> Et comment pourrais-je nier que ces mains et ce corps soient à moi ? 
	<span class="phrase-num">[6]</span> À moins que je ne me compare à ces insensés de qui le cerveau est tellement troublé qu'ils assurent qu'ils sont des rois, alors qu'ils sont très pauvres. 
	<span class="phrase-num">[7]</span> Toutefois, j'ai à considérer que je suis homme, et par conséquent sujet au sommeil. 
	»`,
		reponses: {
			origine: "René DESCARTES, <i>Méditations métaphysiques</i>, Méditation première, Paris : Flammarion, 2015, p.78.",
			theme: "La conscience",
			these: "La possibilité du rêve et de l'illusion des sens jette un doute radical sur la réalité du monde extérieur.",
			interet: "Il met en place le doute hyperbolique comme méthode pour atteindre une certitude indubitable.",
			problematique: "Puis-je être certain de l'existence du monde qui m'entoure ou dois-je toujours en douter ?"
		}
	},
	// --------------------------------
	// DIDEROT
	// --------------------------------
	{
		id: 44,
		contenu: `« 
	<span class="phrase-num">[1]</span> La sensibilité est une propriété universelle de la matière. 
	<span class="phrase-num">[2]</span> Ou bien la matière est sensible, ou bien elle devient sensible par organisation. 
	<span class="phrase-num">[3]</span> Je vous dirai que la sensibilité est une qualité générale de la matière, qualité qui est en acte dans certains êtres, en puissance dans d'autres. 
	<span class="phrase-num">[4]</span> La sensibilité inerte est à la sensibilité active ce que la statue de marbre est à la chair. 
	<span class="phrase-num">[5]</span> Le passage de l'état inerte à l'état actif se fait par le mouvement et la chaleur. 
	<span class="phrase-num">[6]</span> La vie est une somme de petites sensibilités. 
	<span class="phrase-num">[7]</span> La conscience n'est qu'un effet de l'organisation. 
	<span class="phrase-num">[8]</span> Il n'y a pas de séparation entre la matière brute et la matière vivante. 
	<span class="phrase-num">[9]</span> Tout se tient, tout se transforme. 
	<span class="phrase-num">[10]</span> Le monde est un grand animal en devenir. 
	»`,
		reponses: {
			origine: "Denis DIDEROT, <i>Lettre sur les aveugles</i>, et <i>Le Rêve de d'Alembert</i>, Paris : Flammarion, 2016, p.345.",
			theme: "La nature",
			these: "La sensibilité est une propriété de la matière, et la conscience émerge de l'organisation matérielle.",
			interet: "Il propose un matérialisme vitaliste où la vie et la conscience sont des propriétés émergentes de la matière.",
			problematique: "La conscience peut-elle émerger de la matière inerte ou suppose-t-elle un principe immatériel ?"
		}
	},
	// --------------------------------
	// DURKHEIM
	// --------------------------------
	{
		id: 45,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le suicide varie en raison inverse du degré d'intégration de la société religieuse, de la société domestique, de la société politique. 
	<span class="phrase-num">[2]</span> Plus les groupes auxquels appartient l'individu sont forts, moins il est exposé au suicide. 
	<span class="phrase-num">[3]</span> Les liens qui l'attachent à la vie se relâchent parce que ceux qui l'attachent à la société se détendent. 
	<span class="phrase-num">[4]</span> Si l'homme tient d'autant plus à la vie que la vie a de sens, et elle n'a de sens que par les fins collectives. 
	<span class="phrase-num">[5]</span> L'égoïsme et l'anomie sont les deux courants qui mènent au suicide. 
	<span class="phrase-num">[6]</span> Le suicide altruiste est celui où l'individu se tue pour son groupe. 
	<span class="phrase-num">[7]</span> Ces trois types de suicide correspondent à des états de la conscience collective. 
	<span class="phrase-num">[8]</span> Le suicide est donc un fait social normal, mais qui peut devenir pathologique par excès. 
	<span class="phrase-num">[9]</span> Il varie selon les sociétés et les époques. 
	<span class="phrase-num">[10]</span> Son étude permet de mesurer la santé morale d'une société. 
	»`,
		reponses: {
			origine: "Émile DURKHEIM, <i>Le Suicide</i>, livre II, Paris : PUF, 2016, p.456.",
			theme: "La conscience",
			these: "Le suicide est un fait social qui varie selon le degré d'intégration et de régulation sociales.",
			interet: "Il fonde la sociologie empirique en traitant un phénomène individuel comme un fait social explicable socialement.",
			problematique: "Un acte aussi individuel que le suicide peut-il avoir des causes sociales ou relève-t-il seulement de la psychologie individuelle ?"
		}
	},
	// --------------------------------
	// ENGELS
	// --------------------------------
	{
		id: 46,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le travail est la condition fondamentale de toute vie humaine. 
	<span class="phrase-num">[2]</span> Il l'est à un tel point que, dans un certain sens, il faut dire que le travail a créé l'homme lui-même. 
	<span class="phrase-num">[3]</span> Le travail a commencé avec la fabrication d'outils. 
	<span class="phrase-num">[4]</span> La main n'est pas seulement l'organe du travail, elle est aussi son produit. 
	<span class="phrase-num">[5]</span> Le développement du travail a nécessité l'entraide et la collaboration. 
	<span class="phrase-num">[6]</span> Il a ainsi favorisé le développement du langage. 
	<span class="phrase-num">[7]</span> Travail et langage ont ensemble transformé le cerveau du singe en cerveau humain. 
	<span class="phrase-num">[8]</span> L'homme a appris à dominer la nature, mais en même temps à mieux comprendre ses lois. 
	<span class="phrase-num">[9]</span> Ainsi, le travail a fait l'homme, et l'homme a fait l'histoire. 
	<span class="phrase-num">[10]</span> Telle est la conception matérialiste de l'histoire. 
	»`,
		reponses: {
			origine: "Friedrich ENGELS, <i>Dialectique de la nature</i>, « Le rôle du travail dans la transformation du singe en homme », Paris : Éditions Sociales, 2016, p.234.",
			theme: "Le travail",
			these: "Le travail est le facteur décisif de l'humanisation : il a créé l'homme lui-même.",
			interet: "Il développe une conception matérialiste de l'anthropogenèse où le travail est le moteur de l'évolution humaine.",
			problematique: "Le travail est-il le fondement exclusif de l'humanisation ou n'est-il qu'un facteur parmi d'autres dans un processus plus complexe (impliquant le langage, la conscience et les rapports sociaux) ?"
		}
	},
	// --------------------------------
	// ÉPICTÈTE
	// --------------------------------
	{
		id: 47,
		contenu: `« 
	<span class="phrase-num">[1]</span> De toutes les choses qui sont, les unes dépendent de nous, les autres n'en dépendent pas. 
	<span class="phrase-num">[2]</span> Ce qui dépend de nous, ce sont nos opinions, nos mouvements, nos désirs, nos inclinations, nos aversions. 
	<span class="phrase-num">[3]</span> En un mot, tout ce qui est notre propre fait. 
	<span class="phrase-num">[4]</span> Ce qui ne dépend pas de nous, c'est le corps, les richesses, les honneurs, les dignités. 
	<span class="phrase-num">[5]</span> En un mot, tout ce qui n'est pas notre propre fait. 
	<span class="phrase-num">[6]</span> Ce qui dépend de nous est libre par nature, ne peut être entravé ni gêné. 
	<span class="phrase-num">[7]</span> Ce qui n'en dépend pas est faible, esclave, sujet à empêchement, et nous est étranger. 
	<span class="phrase-num">[8]</span> Souviens-toi donc que si tu prends pour libres les choses naturellement esclaves, et pour tiennes celles qui sont étrangères, tu seras entravé, tu gémiras, tu seras troublé, tu t'en prendras aux dieux et aux hommes. 
	<span class="phrase-num">[9]</span> Mais si tu ne prends pour tien que ce qui est vraiment tien, et pour étranger ce qui est vraiment étranger, nul ne te contraindra jamais, nul ne t'empêchera. 
	<span class="phrase-num">[10]</span> Tu ne t'en prendras à personne, tu n'accuseras personne, tu ne feras rien contre ton gré. 
	»`,
		reponses: {
			origine: "ÉPICTÈTE, <i>Manuel</i>, chapitre I, Paris : Flammarion, 2017, p.45.",
			theme: "La liberté",
			these: "La liberté consiste à distinguer ce qui dépend de nous de ce qui n'en dépend pas, et à ne s'attacher qu'au premier.",
			interet: "Il pose le fondement de l'éthique stoïcienne : la liberté intérieure par le détachement des choses extérieures.",
			problematique: "La liberté est-elle intérieure ou dépend-elle des circonstances extérieures ?"
		}
	},
	// --------------------------------
	// ÉPICURE
	// --------------------------------
	{
		id: 48,
		contenu: `« 
	<span class="phrase-num">[1]</span> Lors donc qu'on dit que le plaisir est le souverain bien, il ne faut pas entendre par là les plaisirs des débauchés, ni ceux qui consistent dans la jouissance effective, comme le croient quelques ignorants, qui sont d'un avis contraire au nôtre ou qui le mal interprètent. 
	<span class="phrase-num">[2]</span> Le plaisir que nous entendons, c'est de ne pas souffrir dans le corps et de n'être pas troublé dans l'âme. 
	<span class="phrase-num">[3]</span> Car ce ne sont pas les beuveries et les festins continuels, ni la jouissance des jeunes garçons et des femmes, ni celle des poissons et des autres mets que porte une table somptueuse, qui engendrent une vie heureuse, mais la raison sobre. 
	<span class="phrase-num">[4]</span> La raison qui recherche les motifs de nos choix et de nos refus, et qui dissipe les opinions par lesquelles le trouble s'empare de l'âme. 
	<span class="phrase-num">[5]</span> Le commencement de tout cela et le plus grand des biens, c'est la prudence. 
	<span class="phrase-num">[6]</span> La prudence est plus précieuse que la philosophie même. 
	<span class="phrase-num">[7]</span> D'elle sont nées toutes les autres vertus. 
	<span class="phrase-num">[8]</span> Elle nous enseigne qu'on ne peut pas vivre agréablement sans vivre prudemment, honnêtement et justement. 
	<span class="phrase-num">[9]</span> Et l'on ne peut vivre prudemment, honnêtement et justement sans vivre agréablement. 
	<span class="phrase-num">[10]</span> Les vertus sont naturellement liées à la vie agréable, et la vie agréable leur est inséparable. 
	»`,
		reponses: {
			origine: "ÉPICURE, <i>Lettre à Ménécée</i>, 131-132, Paris : Flammarion, 2017, p.86.",
			theme: "Le bonheur",
			these: "Le bonheur consiste dans l'absence de souffrance corporelle (aponie) et de trouble de l'âme (ataraxie).",
			interet: "Il distingue le vrai plaisir, qui est négatif (absence de douleur), de la débauche.",
			problematique: "Le plaisir peut-il être le souverain bien sans conduire à la débauche ou cette conception est-elle trop restrictive ?"
		}
	},
	{
		id: 49,
		contenu: `« 
	<span class="phrase-num">[1]</span> Il y a des dieux, car la connaissance que nous en avons est évidente. 
	<span class="phrase-num">[2]</span> Mais ils ne sont pas tels que la foule le croit, car la foule ne se représente pas les dieux avec piété. 
	<span class="phrase-num">[3]</span> Ce n'est pas celui qui rejette les dieux de la foule qui est impie, mais celui qui attribue aux dieux les opinions de la foule. 
	<span class="phrase-num">[4]</span> Car les affirmations de la foule sur les dieux ne sont pas des prénotions, mais des suppositions fausses. 
	<span class="phrase-num">[5]</span> De là viennent les plus grands dommages causés par les méchants et les plus grands bienfaits accordés par les bons. 
	<span class="phrase-num">[6]</span> En effet, les dieux, toujours familiarisés avec leurs propres perfections, sont bienveillants à l'égard de ceux qui leur ressemblent. 
	<span class="phrase-num">[7]</span> Ils n'accueillent pas tout ce qui leur est étranger, mais ce qui leur est apparenté. 
	<span class="phrase-num">[8]</span> La piété consiste à penser juste à leur sujet, à leur offrir des hommages dignes d'eux. 
	<span class="phrase-num">[9]</span> Les dieux ne se soucient pas des affaires humaines, ils vivent dans une parfaite béatitude. 
	<span class="phrase-num">[10]</span> C'est pourquoi il ne faut pas les craindre, mais les contempler comme des modèles de sérénité. 
	»`,
		reponses: {
			origine: "ÉPICURE, <i>Lettre à Ménécée</i> (sur les dieux) et <i>Maximes capitales</i> I, Paris : Flammarion, 2017, p.98.",
			theme: "La religion",
			these: "Les dieux existent, mais sont des modèles de béatitude, indifférents aux affaires humaines et sans pouvoir de nuisance.",
			interet: "Il libère l'homme de la crainte des dieux en les concevant comme des idéaux de sérénité plutôt que comme des puissances tutélaires.",
			problematique: "Faut-il croire aux dieux pour vivre heureux ou bien le bonheur implique-t-il une autre conception du divin ?"
		}
	},
	// --------------------------------
	// FEUERBACH
	// --------------------------------
	{
		id: 50,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le secret de la théologie, c'est l'anthropologie. 
	<span class="phrase-num">[2]</span> Dieu n'est rien d'autre que l'essence de l'homme projetée hors de l'homme. 
	<span class="phrase-num">[3]</span> L'homme a en lui-même son Dieu. 
	<span class="phrase-num">[4]</span> Plus l'homme vide son être pour le transférer à Dieu, plus il s'appauvrit. 
	<span class="phrase-num">[5]</span> La conscience de Dieu est la conscience que l'homme a de lui-même. 
	<span class="phrase-num">[6]</span> La religion est le dédoublement de l'homme en lui-même : il pose Dieu en face de lui comme un être distinct. 
	<span class="phrase-num">[7]</span> Dieu est le miroir de l'homme. 
	<span class="phrase-num">[8]</span> Ce que l'homme affirme de Dieu, il l'affirme en vérité de lui-même. 
	<span class="phrase-num">[9]</span> La théologie doit donc se résoudre en anthropologie. 
	<span class="phrase-num">[10]</span> C'est là le vrai sens de la critique de la religion. 
	»`,
		reponses: {
			origine: "Ludwig FEUERBACH, <i>L'Essence du christianisme</i>, chapitre II, Paris : Gallimard, 2017, p.234.",
			theme: "La religion",
			these: "Dieu est la projection de l'essence de l'homme : la théologie est en réalité de l'anthropologie.",
			interet: "Il pose les bases de la critique matérialiste de la religion reprise par Marx.",
			problematique: "Dieu existe-t-il en soi ou n'est-il qu'une projection de l'esprit humain ?"
		}
	},
	// --------------------------------
	// FOUCAULT
	// --------------------------------
	{
		id: 51,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'homme est une invention dont l'archéologie de notre pensée montre aisément la date récente. 
	<span class="phrase-num">[2]</span> Et peut-être la fin prochaine. 
	<span class="phrase-num">[3]</span> Si ces dispositions venaient à disparaître comme elles sont apparues, si quelque événement les effaçait, comme le visage de sable au bord de la mer, on pourrait parier que l'homme s'effacerait. 
	<span class="phrase-num">[4]</span> La notion d'homme est une configuration épistémologique récente. 
	<span class="phrase-num">[5]</span> Elle est née avec la fin de la représentation classique. 
	<span class="phrase-num">[6]</span> Avant le XIXe siècle, l'homme n'existait pas. 
	<span class="phrase-num">[7]</span> Il y avait des êtres humains, mais pas l'homme comme figure du savoir. 
	<span class="phrase-num">[8]</span> Les sciences humaines ne parlent pas de l'homme, mais de configurations épistémologiques. 
	<span class="phrase-num">[9]</span> L'archéologie du savoir montre la discontinuité de l'histoire. 
	<span class="phrase-num">[10]</span> L'homme est une figure entre deux modes d'être du langage. 
	»`,
		reponses: {
			origine: "Michel FOUCAULT, <i>Les Mots et les Choses</i>, chapitre X, Paris : Gallimard, 2016, p.398.",
			theme: "La conscience",
			these: "L'homme est une invention récente de l'épistémè moderne, destinée peut-être à disparaître.",
			interet: "Il historicise la notion d'homme et questionne le statut des sciences humaines.",
			problematique: "L'homme est-il une réalité universelle ou une construction historique ?"
		}
	},
	// --------------------------------
	// FREUD
	// --------------------------------
	{
		id: 52,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'inconscient est le concept le plus important de la psychanalyse. 
	<span class="phrase-num">[2]</span> Il désigne une réalité psychique dont nous n'avons pas conscience. 
	<span class="phrase-num">[3]</span> Cette réalité a ses lois propres. 
	<span class="phrase-num">[4]</span> Elle ignore la contradiction, le temps, la négation. 
	<span class="phrase-num">[5]</span> Elle obéit au seul principe de plaisir. 
	<span class="phrase-num">[6]</span> Ses contenus sont des représentations refoulées. 
	<span class="phrase-num">[7]</span> Le refoulement les maintient dans l'inconscient. 
	<span class="phrase-num">[8]</span> Mais ils cherchent sans cesse à revenir à la conscience. 
	<span class="phrase-num">[9]</span> D'où les symptômes, les rêves, les actes manqués. 
	<span class="phrase-num">[10]</span> L'inconscient est donc dynamique, non statique. 
	»`,
		reponses: {
			origine: "Sigmund FREUD, <i>Métapsychologie</i>, « L'inconscient », Paris : Gallimard, 2015, p.178.",
			theme: "L'inconscient",
			these: "L'inconscient est une réalité psychique dynamique aux lois propres, distinct de la conscience.",
			interet: "Il définit les caractéristiques du système inconscient et son rôle dans la vie psychique.",
			problematique: "L'inconscient est-il un lieu ou un mode de fonctionnement ?"
		}
	},
	{
		id: 53,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le moi n'est pas maître dans sa propre maison. 
	<span class="phrase-num">[2]</span> Il est contraint de se contenter de renseignements fragmentaires sur ce qui se passe dans sa vie psychique. 
	<span class="phrase-num">[3]</span> L'inconscient est le véritable psychique. 
	<span class="phrase-num">[4]</span> La conscience n'est qu'une qualité du psychique, qui peut s'ajouter ou non. 
	<span class="phrase-num">[5]</span> Le moi est comme le cavalier qui doit réfréner la force supérieure du cheval, avec cette différence que le cavalier le fait par ses propres forces, tandis que le moi le fait avec des forces empruntées. 
	<span class="phrase-num">[6]</span> Le ça est la partie obscure, inaccessible de notre personnalité. 
	<span class="phrase-num">[7]</span> Le surmoi est l'héritier du complexe d'Œdipe. 
	<span class="phrase-num">[8]</span> La psychanalyse est l'instrument qui permet au moi de conquérir peu à peu le ça. 
	<span class="phrase-num">[9]</span> Là où était le ça, le moi doit advenir. 
	<span class="phrase-num">[10]</span> C'est une œuvre de culture, comme le dessèchement du Zuyderzée. 
	»`,
		reponses: {
			origine: "Sigmund FREUD, <i>Introduction à la psychanalyse</i>, et <i>Nouvelles conférences</i>, Paris : PUF, 2016, p.345.",
			theme: "L'inconscient",
			these: "Le moi n'est pas le maître dans sa propre maison ; il doit composer avec le ça et le surmoi.",
			interet: "Il propose une topique de l'appareil psychique (ça, moi, surmoi) qui relativise la toute-puissance de la conscience.",
			problematique: "Sommes-nous pleinement conscients des motifs de nos actions ou ceux-ci sont-ils largement déterminés par l'inconscient ?"
		}
	},
	// --------------------------------
	// HEGEL
	// --------------------------------
	{
		id: 54,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le travail est l'activité par laquelle l'homme s'oppose à la nature. 
	<span class="phrase-num">[2]</span> Mais en s'opposant à elle, il se l'approprie. 
	<span class="phrase-num">[3]</span> Par le travail, l'homme fait du monde un monde humain. 
	<span class="phrase-num">[4]</span> Il transforme la nature en produits qui répondent à ses besoins. 
	<span class="phrase-num">[5]</span> Mais en même temps, il se transforme lui-même. 
	<span class="phrase-num">[6]</span> Le travail est donc le processus d'humanisation de l'homme. 
	<span class="phrase-num">[7]</span> C'est par lui que l'homme devient véritablement homme. 
	<span class="phrase-num">[8]</span> Sans travail, l'homme resterait à l'état de nature. 
	<span class="phrase-num">[9]</span> Le travail est donc la médiation fondamentale. 
	<span class="phrase-num">[10]</span> Il est le propre de l'homme comme être culturel. 
	»`,
		reponses: {
			origine: "Georg Wilhelm Friedrich HEGEL, <i>Phénoménologie de l'esprit</i>, chapitre IV, Paris : Aubier, 2016, p.312.",
			theme: "Le travail",
			these: "Le travail est le processus par lequel l'homme s'humanise en transformant la nature.",
			interet: "Il montre la dimension formatrice du travail, notamment dans la dialectique du maître et de l'esclave.",
			problematique: "Le travail est-il ce qui fait l'humanité de l'homme ou n'en est-il qu'une dimension parmi d'autres ?"
		}
	},
	{
		id: 55,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'État est la réalité de l'idée morale. 
	<span class="phrase-num">[2]</span> Il est l'esprit objectif. 
	<span class="phrase-num">[3]</span> La famille est la première forme de cette réalité. 
	<span class="phrase-num">[4]</span> La société civile est la seconde. 
	<span class="phrase-num">[5]</span> L'État est la troisième et la plus haute. 
	<span class="phrase-num">[6]</span> En lui, l'individu trouve sa liberté substantielle. 
	<span class="phrase-num">[7]</span> Car l'État n'est pas une simple association extérieure. 
	<span class="phrase-num">[8]</span> Il est la réalité où l'individu a et connaît sa liberté. 
	<span class="phrase-num">[9]</span> Mais cette liberté n'est pas l'arbitraire individuel. 
	<span class="phrase-num">[10]</span> Elle est la liberté de se savoir membre du tout. 
	»`,
		reponses: {
			origine: "Georg Wilhelm Friedrich HEGEL, <i>Principes de la philosophie du droit</i>, §257-258, Paris : Vrin, 2015, p.456.",
			theme: "L'État",
			these: "L'État est la réalité de l'idée morale où l'individu trouve sa liberté substantielle.",
			interet: "Il conçoit l'État comme l'achèvement de l'esprit objectif.",
			problematique: "L'État est-il une contrainte ou la condition de la liberté ?"
		}
	},
	{
		id: 56,
		contenu: `« 
	<span class="phrase-num">[1]</span> La conscience de soi est l'acte par lequel le sujet se saisit lui-même comme sujet. 
	<span class="phrase-num">[2]</span> Mais elle n'est pas une simple contemplation. 
	<span class="phrase-num">[3]</span> Elle est désir, mouvement vers l'autre. 
	<span class="phrase-num">[4]</span> Le désir de reconnaissance est le moteur de l'histoire. 
	<span class="phrase-num">[5]</span> C'est par la lutte que les consciences s'affrontent pour se faire reconnaître. 
	<span class="phrase-num">[6]</span> L'une triomphe et devient le maître. 
	<span class="phrase-num">[7]</span> L'autre, vaincue, devient l'esclave. 
	<span class="phrase-num">[8]</span> Mais l'esclave, par le travail, transforme la nature et prend conscience de sa liberté. 
	<span class="phrase-num">[9]</span> Le maître, au contraire, s'enfonce dans une jouissance stérile. 
	<span class="phrase-num">[10]</span> Ainsi, l'histoire est la dialectique de la reconnaissance. 
	»`,
		reponses: {
			origine: "Georg Wilhelm Friedrich HEGEL, <i>Phénoménologie de l'esprit</i>, chapitre IV, A, Paris : Aubier, 2016, p.456.",
			theme: "La conscience",
			these: "La conscience de soi ne s'accomplit que dans la reconnaissance par une autre conscience, via une lutte qui produit la relation maître-esclave.",
			interet: "Il pose la dialectique du maître et de l'esclave comme moteur de l'histoire et de la prise de conscience de soi.",
			problematique: "Ai-je besoin d'être reconnu par autrui pour avoir conscience de moi-même ou puis-je y parvenir seul ?"
		}
	},
	// --------------------------------
	// HEIDEGGER
	// --------------------------------
	{
		id: 57,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le langage est la maison de l'être. 
	<span class="phrase-num">[2]</span> Dans son abri habite l'homme. 
	<span class="phrase-num">[3]</span> Les penseurs et les poètes sont les gardiens de cette demeure. 
	<span class="phrase-num">[4]</span> Leur gardiennage est l'accomplissement de la manifestation de l'être, en tant qu'ils la portent au langage et l'y conservent. 
	<span class="phrase-num">[5]</span> Le langage n'est pas un simple outil de communication. 
	<span class="phrase-num">[6]</span> Il est ce qui permet à l'être de se manifester. 
	<span class="phrase-num">[7]</span> Sans le langage, il n'y aurait ni monde ni histoire. 
	<span class="phrase-num">[8]</span> C'est pourquoi il importe de penser le langage à partir de l'être. 
	<span class="phrase-num">[9]</span> Ainsi, le langage est la dimension où l'homme habite poétiquement. 
	<span class="phrase-num">[10]</span> L'homme parle parce qu'il répond à l'être. 
	»`,
		reponses: {
			origine: "Martin HEIDEGGER, <i>Lettre sur l'humanisme</i>, Paris : Aubier, 2016, p.67.",
			theme: "Le langage",
			these: "Le langage est la maison de l'être où l'homme habite.",
			interet: "Il propose une conception ontologique du langage, non plus instrumentale.",
			problematique: "Le langage est-il un simple instrument ou le lieu de notre habitation dans le monde ?"
		}
	},
	{
		id: 58,
		contenu: `« 
	<span class="phrase-num">[1]</span> La technique n'est ni bonne ni mauvaise. 
	<span class="phrase-num">[2]</span> Elle est d'abord un mode de dévoilement. 
	<span class="phrase-num">[3]</span> La technique moderne, cependant, n'est plus un simple dévoilement. 
	<span class="phrase-num">[4]</span> Elle est une provocation qui met la nature en demeure de livrer ses énergies. 
	<span class="phrase-num">[5]</span> Elle la traite comme un fonds, un stock disponible. 
	<span class="phrase-num">[6]</span> L'homme lui-même devient alors une simple ressource. 
	<span class="phrase-num">[7]</span> C'est là le danger de la technique moderne. 
	<span class="phrase-num">[8]</span> Mais ce danger n'est pas dans la technique elle-même. 
	<span class="phrase-num">[9]</span> Il est dans notre manière de la penser. 
	<span class="phrase-num">[10]</span> Il faut donc penser l'essence de la technique. 
	»`,
		reponses: {
			origine: "Martin HEIDEGGER, <i>La Question de la technique</i>, Paris : Gallimard, 2016, p.156.",
			theme: "La technique",
			these: "La technique moderne est un mode de dévoilement qui réduit la nature à l'état de fonds disponible.",
			interet: "Il interroge l'essence de la technique au-delà de son aspect instrumental.",
			problematique: "La technique transforme-t-elle notre rapport à l'être ou n'est-elle qu'un outil neutre ?"
		}
	},
	{
		id: 59,
		contenu: `« 
	<span class="phrase-num">[1]</span> Il est de la nature de la vérité d'être dévoilée. 
	<span class="phrase-num">[2]</span> Mais ce dévoilement n'est jamais complet. 
	<span class="phrase-num">[3]</span> La vérité est à la fois voilée et dévoilée. 
	<span class="phrase-num">[4]</span> C'est pourquoi les Grecs l'appelaient aletheia, qui signifie le non-voilement. 
	<span class="phrase-num">[5]</span> La vérité n'est pas d'abord adéquation de l'intellect et de la chose. 
	<span class="phrase-num">[6]</span> Elle est manifestation de l'être. 
	<span class="phrase-num">[7]</span> L'être se manifeste en se cachant. 
	<span class="phrase-num">[8]</span> Telle est la loi de son apparition. 
	<span class="phrase-num">[9]</span> Ainsi, la vérité est le combat entre le voilement et le dévoilement. 
	<span class="phrase-num">[10]</span> Et c'est dans l'œuvre d'art que ce combat trouve son accomplissement. 
	»`,
		reponses: {
			origine: "Martin HEIDEGGER, <i>De l'essence de la vérité</i>, Paris : Gallimard, 2016, p.98.",
			theme: "La vérité",
			these: "La vérité est dévoilement de l'être, non adéquation du jugement.",
			interet: "Il propose une conception originaire de la vérité comme aletheia.",
			problematique: "La vérité est-elle dans le jugement ou dans la manifestation ?"
		}
	},
	// --------------------------------
	// HERSCH
	// --------------------------------
	{
		id: 60,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'étonnement est le commencement de la philosophie. 
	<span class="phrase-num">[2]</span> Non pas l'étonnement devant ceci ou cela, mais l'étonnement que les choses soient. 
	<span class="phrase-num">[3]</span> Que quelque chose existe plutôt que rien. 
	<span class="phrase-num">[4]</span> Cet étonnement est à la fois source de la métaphysique et de la poésie. 
	<span class="phrase-num">[5]</span> Il ouvre à la question du sens. 
	<span class="phrase-num">[6]</span> Mais la philosophie ne peut pas apporter de réponse définitive. 
	<span class="phrase-num">[7]</span> Elle est une interrogation sans fin. 
	<span class="phrase-num">[8]</span> Elle nous apprend à vivre dans la question. 
	<span class="phrase-num">[9]</span> C'est pourquoi elle est inséparable de la liberté. 
	<span class="phrase-num">[10]</span> Philosopher, c'est apprendre à mourir, disaient les Anciens. Mais c'est d'abord apprendre à naître à la question. 
	»`,
		reponses: {
			origine: "Jeanne HERSCH, <i>L'étonnement philosophique</i>, Introduction, Paris : Gallimard, 2017, p.23.",
			theme: "La raison",
			these: "La philosophie naît de l'étonnement que quelque chose existe plutôt que rien.",
			interet: "Elle propose une introduction vivante à la philosophie centrée sur l'expérience de l'étonnement.",
			problematique: "La philosophie commence-t-elle par l'étonnement ou par le doute ?"
		}
	},
	// --------------------------------
	// HOBBES
	// --------------------------------
	{
		id: 61,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'homme est un loup pour l'homme. 
	<span class="phrase-num">[2]</span> Dans l'état de nature, c'est la guerre de tous contre tous. 
	<span class="phrase-num">[3]</span> La vie y est solitaire, pauvre, sale, brutale et courte. 
	<span class="phrase-num">[4]</span> Il n'y a ni industrie, ni navigation, ni commerce, ni connaissance de la terre, ni société. 
	<span class="phrase-num">[5]</span> Il n'y a que la crainte permanente et le danger de mort violente. 
	<span class="phrase-num">[6]</span> Pour sortir de cet état, les hommes ont conclu un pacte. 
	<span class="phrase-num">[7]</span> Ils ont transféré tous leurs droits à un souverain absolu. 
	<span class="phrase-num">[8]</span> Ce souverain, c'est l'État, le Léviathan. 
	<span class="phrase-num">[9]</span> Il a seul le droit d'user de la force. 
	<span class="phrase-num">[10]</span> En échange, il assure la paix et la sécurité. 
	<span class="phrase-num">[11]</span> Hors de l'État, point de salut. 
	»`,
		reponses: {
			origine: "Thomas HOBBES, <i>Léviathan</i>, chapitres XIII et XVII, Paris : Gallimard, 2016, p.456.",
			theme: "L'État",
			these: "L'état de nature est un état de guerre de tous contre tous, dont les hommes sortent par un contrat instituant un État souverain absolu.",
			interet: "Il fonde la souveraineté de l'État sur la nécessité de la paix et de la sécurité, justifiant ainsi l'absolutisme.",
			problematique: "L'État absolu est-il la seule solution viable pour sortir de l'état de guerre ou existe-t-il d'autres formes d'organisation politique capables d'assurer la paix sans sacrifier la liberté des individus ?"
		}
	},
	// --------------------------------
	// HUME
	// --------------------------------
	{
		id: 62,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'expérience ne nous donne jamais que des jugements habituels, non des vérités nécessaires. 
	<span class="phrase-num">[2]</span> Le soleil se lèvera-t-il demain ? Nous en sommes certains, mais cette certitude n'est que probable. 
	<span class="phrase-num">[3]</span> Toute notre connaissance des causes est fondée sur l'habitude et la coutume. 
	<span class="phrase-num">[4]</span> Nous voyons une boule de billard en frapper une autre, et nous nous attendons à ce que la seconde se mette en mouvement. 
	<span class="phrase-num">[5]</span> Mais nous ne percevons aucune connexion nécessaire entre les deux événements. 
	<span class="phrase-num">[6]</span> L'idée de causalité n'est qu'une croyance née de la répétition. 
	<span class="phrase-num">[7]</span> La raison ne peut pas démontrer la nécessité des lois de la nature. 
	<span class="phrase-num">[8]</span> La coutume est donc le grand guide de la vie humaine. 
	<span class="phrase-num">[9]</span> C'est ce principe qui rend notre expérience utile. 
	<span class="phrase-num">[10]</span> Ainsi, toute connaissance du fait est fondée sur la probabilité, non sur la nécessité. 
	»`,
		reponses: {
			origine: "David HUME, <i>Enquête sur l'entendement humain</i>, Section IV et V, Paris : Flammarion, 2016, p.234.",
			theme: "La science",
			these: "La causalité n'est pas une connexion nécessaire perçue dans les choses, mais une croyance forgée par l'habitude et la répétition.",
			interet: "Il sape le fondement rationaliste de la science en montrant que ses principes (causalité, induction) reposent sur la coutume, non sur la raison.",
			problematique: "La science peut-elle prouver la nécessité des lois de la nature ou doit-elle renoncer à cette prétention ?"
		}
	},
	// --------------------------------
	// HUSSERL
	// --------------------------------
	{
		id: 63,
		contenu: `« 
	<span class="phrase-num">[1]</span> La phénoménologie est le retour aux choses mêmes. 
	<span class="phrase-num">[2]</span> Il ne s'agit pas de construire des théories, mais de décrire ce qui apparaît. 
	<span class="phrase-num">[3]</span> Toute conscience est conscience de quelque chose. 
	<span class="phrase-num">[4]</span> L'intentionnalité est la structure fondamentale de la conscience. 
	<span class="phrase-num">[5]</span> Le monde n'est pas un donné brut, mais un corrélat de la conscience. 
	<span class="phrase-num">[6]</span> Il faut mettre le monde entre parenthèses, pratiquer l'épochè. 
	<span class="phrase-num">[7]</span> Cette suspension du jugement permet d'atteindre la sphère transcendantale de la conscience. 
	<span class="phrase-num">[8]</span> L'ego transcendantal est le résidu de cette réduction. 
	<span class="phrase-num">[9]</span> Le monde est constitué par la conscience transcendantale. 
	<span class="phrase-num">[10]</span> Telle est la tâche de la phénoménologie : décrire la manière dont le monde se donne à la conscience. 
	»`,
		reponses: {
			origine: "Edmund HUSSERL, <i>Idées directrices pour une phénoménologie</i>, §1-33, Paris : Gallimard, 2016, p.234.",
			theme: "La conscience",
			these: "La phénoménologie est la science descriptive des vécus de conscience, qui met le monde entre parenthèses pour étudier son apparaître.",
			interet: "Il fonde la méthode phénoménologique comme retour aux choses mêmes par la réduction transcendantale.",
			problematique: "Peut-on décrire le monde tel qu'il apparaît indépendamment de toute théorie ou toute description est-elle théorique ?"
		}
	},
	// --------------------------------
	// JAMES
	// --------------------------------
	{
		id: 64,
		contenu: `« 
	<span class="phrase-num">[1]</span> La vérité est une espèce de bien, et non pas, comme on le croit communément, une catégorie distincte. 
	<span class="phrase-num">[2]</span> C'est pourquoi nous disons d'une idée qu'elle est vraie quand elle est utile à notre vie. 
	<span class="phrase-num">[3]</span> Une idée n'est pas vraie parce qu'elle est ancienne, mais parce qu'elle a fait ses preuves. 
	<span class="phrase-num">[4]</span> La vérité est ce qui nous permet de naviguer dans l'expérience. 
	<span class="phrase-num">[5]</span> Elle est un instrument, comme toute idée. 
	<span class="phrase-num">[6]</span> Une idée est vraie si elle fonctionne, si elle mène à des conséquences satisfaisantes. 
	<span class="phrase-num">[7]</span> La vérité n'est pas une propriété inerte et statique. 
	<span class="phrase-num">[8]</span> Elle se fait, elle se vérifie dans l'action. 
	<span class="phrase-num">[9]</span> Le vrai, c'est simplement ce qui est avantageux dans la manière de penser. 
	<span class="phrase-num">[10]</span> Ainsi, le vrai est une espèce du bien. 
	»`,
		reponses: {
			origine: "William JAMES, <i>Le Pragmatisme</i>, chapitre II et VI, Paris : Flammarion, 2016, p.234.",
			theme: "La vérité",
			these: "La vérité n'est pas une propriété statique de correspondance, mais un processus de vérification : est vrai ce qui est utile et avantageux pour la vie.",
			interet: "Il expose la conception pragmatiste de la vérité, liée à l'action et aux conséquences pratiques.",
			problematique: "Une idée est-elle vraie parce qu'elle correspond à la réalité ou parce qu'elle est utile ?"
		}
	},
	// --------------------------------
	// JANKÉLÉVITCH
	// --------------------------------
	{
		id: 65,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'irréversible est la forme même du temps. 
	<span class="phrase-num">[2]</span> Ce qui est fait est fait, et ne peut être défait. 
	<span class="phrase-num">[3]</span> Le remords est la conscience douloureuse de cette irréversibilité. 
	<span class="phrase-num">[4]</span> Il est le retour du passé dans le présent, mais un retour impuissant. 
	<span class="phrase-num">[5]</span> On ne peut pas ne pas avoir fait ce qu'on a fait. 
	<span class="phrase-num">[6]</span> Le temps est cette dimension tragique de l'existence. 
	<span class="phrase-num">[7]</span> Mais le pardon est l'envers du remords. 
	<span class="phrase-num">[8]</span> Il est la possibilité de dépasser l'irréversible sans le nier. 
	<span class="phrase-num">[9]</span> Pardonner, ce n'est pas oublier, c'est transcender. 
	<span class="phrase-num">[10]</span> Ainsi, la morale est aux prises avec l'irréversibilité du temps. 
	»`,
		reponses: {
			origine: "Vladimir JANKÉLÉVITCH, <i>L'Irréversible et la Nostalgie</i>, Paris : Flammarion, 2016, p.345.",
			theme: "Le temps",
			these: "L'irréversibilité est la loi fondamentale du temps, source du remords mais aussi condition du pardon.",
			interet: "Il explore la dimension morale et existentielle du temps comme irréversible.",
			problematique: "Le passé est-il définitivement passé ou peut-il être racheté ?"
		}
	},
	// --------------------------------
	// JASPERS
	// --------------------------------
	{
		id: 66,
		contenu: `« 
	<span class="phrase-num">[1]</span> Les grandes philosophies sont comme des sommets que l'on peut contempler de loin. 
	<span class="phrase-num">[2]</span> Chacune a sa grandeur propre. 
	<span class="phrase-num">[3]</span> Leur diversité n'est pas un scandale, mais une richesse. 
	<span class="phrase-num">[4]</span> L'histoire de la philosophie est le dialogue des grands penseurs à travers les siècles. 
	<span class="phrase-num">[5]</span> Platon et Aristote, Augustin et Thomas, Kant et Hegel. 
	<span class="phrase-num">[6]</span> Chacun répond aux questions éternelles à sa manière. 
	<span class="phrase-num">[7]</span> Il ne s'agit pas de choisir entre eux, mais de les comprendre tous. 
	<span class="phrase-num">[8]</span> La vérité est une, mais les chemins pour y accéder sont multiples. 
	<span class="phrase-num">[9]</span> L'étude de l'histoire de la philosophie est une propédeutique à la pensée personnelle. 
	<span class="phrase-num">[10]</span> C'est en dialoguant avec les grands morts que l'on apprend à penser par soi-même. 
	»`,
		reponses: {
			origine: "Karl JASPERS, <i>Introduction à la philosophie</i>, chapitre I, Paris : Plon, 2017, p.45.",
			theme: "La raison",
			these: "La diversité des philosophies n'est pas une faiblesse mais une richesse, et l'histoire de la philosophie est un dialogue à travers les âges.",
			interet: "Il propose une conception ouverte et pluraliste de la philosophie, centrée sur la communication entre les penseurs.",
			problematique: "La pluralité des philosophies est-elle un obstacle ou une condition de la vérité ?"
		}
	},
	// --------------------------------
	// JONAS
	// --------------------------------
	{
		id: 67,
		contenu: `« 
	<span class="phrase-num">[1]</span> La promesse de la technique moderne s'est inversée en menace. 
	<span class="phrase-num">[2]</span> Notre puissance d'agir a atteint des proportions planétaires et ses effets sont irréversibles. 
	<span class="phrase-num">[3]</span> La nature est devenue vulnérable comme jamais auparavant. 
	<span class="phrase-num">[4]</span> Les éthiques traditionnelles, centrées sur l'ici et maintenant et les relations interhumaines, sont devenues caduques. 
	<span class="phrase-num">[5]</span> Il nous faut un nouveau principe de responsabilité. 
	<span class="phrase-num">[6]</span> Agis de telle sorte que les effets de ton action soient compatibles avec la Permanence d'une vie authentiquement humaine sur terre. 
	»`,
		reponses: {
			origine: "Hans JONAS, <i>Le Principe Responsabilité</i>, chapitre I, Paris : Flammarion, 2016.",
			theme: "La technique",
			these: "Face à la puissance de la technique moderne, l'humanité a le devoir de préserver les conditions d'une vie future sur Terre (principe de responsabilité).",
			interet: "Il fonde une éthique tournée vers l'avenir, prenant en compte la vulnérabilité de la nature et des générations futures.",
			problematique: "La responsabilité morale doit-elle se limiter aux contemporains ou s'étendre aux générations futures ?"
		}
	},
	// --------------------------------
	// KANT
	// --------------------------------
	{
		id: 68,
		contenu: `« 
	<span class="phrase-num">[1]</span> Toute notre connaissance commence avec les sens, passe de là à l'entendement, et finit par la raison. 
	<span class="phrase-num">[2]</span> La raison est la faculté des principes. 
	<span class="phrase-num">[3]</span> Elle cherche l'inconditionné pour toute connaissance conditionnée. 
	<span class="phrase-num">[4]</span> Mais en cherchant à dépasser les limites de l'expérience, elle tombe dans des contradictions insolubles, les antinomies. 
	<span class="phrase-num">[5]</span> Par exemple, on peut prouver également que le monde a un commencement et qu'il n'en a pas. 
	<span class="phrase-num">[6]</span> La raison a donc un usage légitime dans les limites de l'expérience, et un usage illégitime quand elle prétend connaître ce qui est au-delà. 
	<span class="phrase-num">[7]</span> Il faut donc critiquer la raison pour en définir les justes limites. 
	<span class="phrase-num">[8]</span> Tel est le but de la philosophie transcendantale. 
	<span class="phrase-num">[9]</span> La critique de la raison pure est un traité de la méthode, non un système de la science. 
	<span class="phrase-num">[10]</span> Elle doit déterminer les bornes de notre connaissance. 
	»`,
		reponses: {
			origine: "Emmanuel KANT, <i>Critique de la raison pure</i>, Préface de la seconde édition et Dialectique transcendantale, Paris : PUF, 2016, p.345.",
			theme: "La raison",
			these: "La raison a une tendance naturelle à dépasser les limites de l'expérience, ce qui engendre des illusions (antinomies) qu'il faut critiquer.",
			interet: "Il définit la raison comme faculté des principes, mais en limite l'usage spéculatif au domaine de l'expérience possible.",
			problematique: "La raison peut-elle connaître des réalités qui dépassent l'expérience ou doit-elle rester dans ses limites ?"
		}
	},
	{
		id: 69,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le temps est la condition de possibilité des phénomènes. 
	<span class="phrase-num">[2]</span> Il est la forme a priori du sens interne. 
	<span class="phrase-num">[3]</span> Tous les phénomènes sont dans le temps. 
	<span class="phrase-num">[4]</span> Le temps n'est pas un concept discursif, mais une intuition pure. 
	<span class="phrase-num">[5]</span> Il a une réalité empirique mais une idéalité transcendantale. 
	<span class="phrase-num">[6]</span> Sans le temps, aucune expérience ne serait possible. 
	<span class="phrase-num">[7]</span> Il est donc la condition subjective de notre sensibilité. 
	<span class="phrase-num">[8]</span> Les choses en soi ne sont pas dans le temps. 
	<span class="phrase-num">[9]</span> Seuls les phénomènes y sont soumis. 
	<span class="phrase-num">[10]</span> Ainsi, le temps est en nous et non dans les choses. 
	»`,
		reponses: {
			origine: "Emmanuel KANT, <i>Critique de la raison pure</i>, Esthétique transcendantale, Paris : PUF, 2016, p.189.",
			theme: "Le temps",
			these: "Le temps est la forme a priori de notre sensibilité interne, condition subjective de possibilité de tous les phénomènes.",
			interet: "Il établit la conception transcendantale du temps comme forme de la sensibilité, ni chose en soi, ni concept.",
			problematique: "Le temps est-il une propriété réelle du monde ou une forme de notre perception ?"
		}
	},
	{
		id: 70,
		contenu: `« 
	<span class="phrase-num">[1]</span> La conscience morale est un jugement de la raison sur soi-même. 
	<span class="phrase-num">[2]</span> Ce jugement porte sur la conformité de nos actions à la loi morale. 
	<span class="phrase-num">[3]</span> Il est inévitable et nécessaire. 
	<span class="phrase-num">[4]</span> Nul ne peut échapper à ce tribunal intérieur. 
	<span class="phrase-num">[5]</span> La conscience nous approuve ou nous condamne. 
	<span class="phrase-num">[6]</span> Elle est source de paix ou de remords. 
	<span class="phrase-num">[7]</span> Mais elle peut aussi s'égarer. 
	<span class="phrase-num">[8]</span> Une conscience erronée n'en est pas moins une conscience. 
	<span class="phrase-num">[9]</span> C'est pourquoi il faut l'éduquer. 
	<span class="phrase-num">[10]</span> La conscience droite est celle qui juge conformément à la raison. 
	»`,
		reponses: {
			origine: "Emmanuel KANT, <i>Métaphysique des mœurs</i>, Doctrine de la vertu, Paris : Vrin, 2016, p.345.",
			theme: "La conscience",
			these: "La conscience morale est le jugement de la raison sur la moralité de nos actions.",
			interet: "Il définit la conscience comme tribunal intérieur.",
			problematique: "La conscience est-elle un guide infaillible ou peut-elle se tromper ?"
		}
	},
	{
		id: 71,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le devoir est la nécessité d'agir par respect pour la loi. 
	<span class="phrase-num">[2]</span> Une action accomplie par devoir a sa valeur morale, non dans le but qui doit être atteint par elle, mais dans la maxime d'après laquelle elle est décidée. 
	<span class="phrase-num">[3]</span> Elle ne dépend pas de la réalité de l'objet de l'action, mais uniquement du principe du vouloir. 
	<span class="phrase-num">[4]</span> Ainsi, le devoir est la valeur morale de l'intention. 
	<span class="phrase-num">[5]</span> Les conséquences de l'action n'importent pas pour sa moralité. 
	<span class="phrase-num">[6]</span> Seule compte la volonté bonne. 
	<span class="phrase-num">[7]</span> Telle est la rigueur de la morale kantienne. 
	<span class="phrase-num">[8]</span> La bonne volonté n'est pas bonne par ce qu'elle effectue ou par sa capacité à atteindre tel ou tel but, mais seulement par le vouloir. 
	<span class="phrase-num">[9]</span> C'est-à-dire qu'elle est bonne en soi. 
	<span class="phrase-num">[10]</span> Elle est comme un joyau qui brille de sa propre lumière. 
	»`,
		reponses: {
			origine: "Emmanuel KANT, <i>Fondements de la métaphysique des mœurs</i>, Première section, Paris : Nathan, 2018, p.98.",
			theme: "Le devoir",
			these: "La valeur morale d'une action réside dans l'intention, non dans ses conséquences.",
			interet: "Il fonde la morale déontologique sur l'intention et la bonne volonté.",
			problematique: "Seule l'intention compte-t-elle en morale ou faut-il aussi considérer les conséquences ?"
		}
	},
	// --------------------------------
	// KIERKEGAARD
	// --------------------------------
	{
		id: 72,
		contenu: `« 
	<span class="phrase-num">[1]</span> Il faut choisir. Le choix est le propre de l'homme. 
	<span class="phrase-num">[2]</span> Mais le choix véritable n'est pas le choix entre le bien et le mal. 
	<span class="phrase-num">[3]</span> Il est le choix de vouloir choisir, l'engagement. 
	<span class="phrase-num">[4]</span> L'existence est un risque, un saut. 
	<span class="phrase-num">[5]</span> Il y a trois stades sur le chemin de la vie : esthétique, éthique, religieux. 
	<span class="phrase-num">[6]</span> Le stade esthétique est celui de la jouissance immédiate. 
	<span class="phrase-num">[7]</span> Le stade éthique est celui de l'engagement et du devoir. 
	<span class="phrase-num">[8]</span> Le stade religieux est celui de la foi, du rapport absolu à l'absolu. 
	<span class="phrase-num">[9]</span> Le passage de l'un à l'autre est un saut, une décision sans raison suffisante. 
	<span class="phrase-num">[10]</span> C'est en cela que consiste l'existence authentique. 
	»`,
		reponses: {
			origine: "Søren KIERKEGAARD, <i>Ou bien... ou bien</i>, et <i>Post-scriptum</i>, Paris : Gallimard, 2016, p.456.",
			theme: "La liberté",
			these: "L'existence humaine se déploie à travers trois stades (esthétique, éthique, religieux) séparés par des sauts qualitatifs.",
			interet: "Il oppose la subjectivité du choix existentiel à l'objectivité du système hégélien.",
			problematique: "L'existence authentique se réalise-t-elle nécessairement par un saut dans la foi religieuse ou peut-elle s'accomplir pleinement au stade éthique, dans l'engagement et le devoir, sans recours au transcendant ?"
		}
	},
	{
		id: 73,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'angoisse est le vertige de la liberté. 
	<span class="phrase-num">[2]</span> Elle naît lorsque l'esprit veut poser la synthèse de l'âme et du corps, mais que la liberté plonge ses regards dans l'abîme de sa propre possibilité. 
	<span class="phrase-num">[3]</span> L'angoisse est la réalité de la liberté comme possibilité avant la possibilité. 
	<span class="phrase-num">[4]</span> C'est pourquoi elle est différente de la peur qui a un objet déterminé. 
	<span class="phrase-num">[5]</span> L'angoisse n'a pas d'objet. 
	<span class="phrase-num">[6]</span> Elle est le vertige devant le rien. 
	<span class="phrase-num">[7]</span> Mais ce rien est précisément la liberté. 
	<span class="phrase-num">[8]</span> Car la liberté est le pouvoir de pouvoir. 
	<span class="phrase-num">[9]</span> Ainsi, l'angoisse est l'apprentissage de la liberté. 
	<span class="phrase-num">[10]</span> Celui qui a appris à être vraiment angoissé a appris l'absolu. 
	»`,
		reponses: {
			origine: "Søren KIERKEGAARD, <i>Le Concept de l'angoisse</i>, chapitre I, §5, Paris : Gallimard, 2016, p.145.",
			theme: "La liberté",
			these: "L'angoisse est le sentiment de la liberté devant sa propre possibilité, le vertige du rien qui s'ouvre devant le choix.",
			interet: "Il lie liberté, angoisse et possibilité, faisant de l'angoisse la condition de la prise de conscience de la liberté.",
			problematique: "La liberté est-elle source d'angoisse ou de joie ?"
		}
	},
	// --------------------------------
	// LEIBNIZ
	// --------------------------------
	{
		id: 74,
		contenu: `« 
	<span class="phrase-num">[1]</span> Pourquoi y a-t-il quelque chose plutôt que rien ? 
	<span class="phrase-num">[2]</span> Car le rien est plus simple et plus facile que quelque chose. 
	<span class="phrase-num">[3]</span> La raison suffisante de l'existence du monde ne peut se trouver dans la série des choses contingentes. 
	<span class="phrase-num">[4]</span> Il faut donc chercher cette raison dans une substance qui porte en elle-même sa raison d'être. 
	<span class="phrase-num">[5]</span> Cette substance, c'est Dieu. 
	<span class="phrase-num">[6]</span> Dieu, étant parfait, ne peut créer qu'un monde parfait. 
	<span class="phrase-num">[7]</span> Or, parmi tous les mondes possibles, il a choisi le meilleur. 
	<span class="phrase-num">[8]</span> C'est pourquoi nous vivons dans le meilleur des mondes possibles. 
	<span class="phrase-num">[9]</span> Le mal qui s'y trouve est la condition du plus grand bien. 
	<span class="phrase-num">[10]</span> Telle est la justification de Dieu par la perfection de l'œuvre. 
	»`,
		reponses: {
			origine: "Gottfried Wilhelm LEIBNIZ, <i>Principes de la nature et de la grâce</i>, §7-8, et <i>Théodicée</i>, Paris : Flammarion, 2017, p.234.",
			theme: "La religion",
			these: "Dieu, étant parfait, a choisi le meilleur des mondes possibles, ce qui justifie l'existence du mal.",
			interet: "Il formule le principe de raison suffisante et la célèbre thèse du meilleur des mondes possibles.",
			problematique: "L'existence du mal est-elle compatible avec la perfection divine ou la contredit-elle ?"
		}
	},
	{
		id: 75,
		contenu: `« 
	<span class="phrase-num">[1]</span> Il y a deux sortes de vérités : les vérités de raison et les vérités de fait. 
	<span class="phrase-num">[2]</span> Les vérités de raison sont nécessaires et leur opposé est impossible. 
	<span class="phrase-num">[3]</span> Les vérités de fait sont contingentes et leur opposé est possible. 
	<span class="phrase-num">[4]</span> Le principe des vérités de raison est le principe de contradiction. 
	<span class="phrase-num">[5]</span> Le principe des vérités de fait est le principe de raison suffisante. 
	<span class="phrase-num">[6]</span> Rien n'arrive sans qu'il y ait une raison pourquoi cela est ainsi plutôt qu'autrement. 
	<span class="phrase-num">[7]</span> Ce principe s'étend à toute la réalité. 
	<span class="phrase-num">[8]</span> Il fonde la science des faits. 
	<span class="phrase-num">[9]</span> Il permet de penser l'harmonie universelle. 
	<span class="phrase-num">[10]</span> Tout est lié dans l'univers par des raisons que seul Dieu connaît pleinement. 
	»`,
		reponses: {
			origine: "Gottfried Wilhelm LEIBNIZ, <i>Monadologie</i>, §31-36, Paris : Flammarion, 2017, p.156.",
			theme: "La raison",
			these: "Il y a deux types de vérités : les vérités de raison (nécessaires) et les vérités de fait (contingentes), fondées sur le principe de raison suffisante.",
			interet: "Il distingue la logique de la factualité et pose le principe de raison suffisante comme fondement de la connaissance du monde.",
			problematique: "Tout événement a-t-il une raison d'être ou y a-t-il de l'absurde dans le monde ?"
		}
	},
	// --------------------------------
	// LÉVI-STRAUSS
	// --------------------------------
	{
		id: 76,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le but dernier des sciences humaines n'est pas de constituer l'homme, mais de le dissoudre. 
	<span class="phrase-num">[2]</span> La pensée sauvage est logique, dans le même sens que la nôtre, mais différemment. 
	<span class="phrase-num">[3]</span> Elle est une science du concret. 
	<span class="phrase-num">[4]</span> Les structures élémentaires de la parenté obéissent à des lois universelles. 
	<span class="phrase-num">[5]</span> La prohibition de l'inceste est le passage de la nature à la culture. 
	<span class="phrase-num">[6]</span> Les mythes sont des machines à supprimer le temps. 
	<span class="phrase-num">[7]</span> Leur structure binaire révèle le fonctionnement de l'esprit humain. 
	<span class="phrase-num">[8]</span> L'anthropologie structurale cherche les invariants de la vie sociale. 
	<span class="phrase-num">[9]</span> Derrière la diversité des coutumes, il y a des structures universelles. 
	<span class="phrase-num">[10]</span> L'homme n'est pas au centre, il est un nœud de relations. 
	»`,
		reponses: {
			origine: "Claude LÉVI-STRAUSS, <i>La Pensée sauvage</i>, et <i>Tristes Tropiques</i>, Paris : Plon, 2016, p.456.",
			theme: "La nature",
			these: "Les structures de la parenté et des mythes révèlent des lois universelles de l'esprit humain.",
			interet: "Il fonde l'anthropologie structurale en cherchant les invariants derrière la diversité des cultures.",
			problematique: "Y a-t-il des structures universelles derrière la diversité des cultures ou chaque culture est-elle singulière ?"
		}
	},
	// --------------------------------
	// LEVINAS
	// --------------------------------
	{
		id: 77,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le visage d'autrui s'impose à moi sans que je puisse cesser d'être responsable de sa misère. 
	<span class="phrase-num">[2]</span> La responsabilité pour autrui est le premier fait de la subjectivité. 
	<span class="phrase-num">[3]</span> Elle n'est pas un engagement, mais l'engagement originaire. 
	<span class="phrase-num">[4]</span> La conscience morale n'est pas une expérience de valeurs, mais l'accès au visage d'autrui. 
	<span class="phrase-num">[5]</span> Le visage est ce qui nous ordonne de ne pas laisser autrui mourir seul. 
	<span class="phrase-num">[6]</span> Il est l'épiphanie de l'Autre. 
	<span class="phrase-num">[7]</span> Cette responsabilité infinie ne s'annule jamais. 
	<span class="phrase-num">[8]</span> Je suis responsable d'autrui sans attendre la réciproque, dût-il m'en coûter la vie. 
	<span class="phrase-num">[9]</span> La réciproque, c'est son affaire. 
	<span class="phrase-num">[10]</span> Ainsi, l'éthique est la philosophie première. 
	»`,
		reponses: {
			origine: "Emmanuel LEVINAS, <i>Totalité et Infini</i>, Préface et Section III, et <i>Éthique et Infini</i>, Paris : Le livre de Poche, 2016, p.234.",
			theme: "Le devoir",
			these: "Le devoir éthique fondamental est la responsabilité infinie et asymétrique envers le visage d'autrui.",
			interet: "Il fonde l'éthique non sur des règles ou des valeurs, mais sur la relation première et contraignante au visage d'autrui.",
			problematique: "Le fondement de la morale est-il dans des principes universels ou dans la rencontre concrète avec autrui ?"
		}
	},
	// --------------------------------
	// LOCKE
	// --------------------------------
	{
		id: 78,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'État de nature a sa loi pour le régir, qui oblige tout le monde. 
	<span class="phrase-num">[2]</span> Et cette loi, c'est la raison, qui enseigne à tous les hommes, pour peu qu'ils veuillent bien la consulter, qu'étant tous égaux et indépendants, 
	<span class="phrase-num">[3]</span> nul ne doit nuire à un autre dans sa vie, sa santé, sa liberté, ni dans ses biens. 
	<span class="phrase-num">[4]</span> Car les hommes étant tous l'ouvrage d'un Dieu tout-puissant et infiniment sage, et étant envoyés dans le monde pour ses desseins et à sa disposition, ils sont sa propriété, et il ne leur est pas permis de se détruire les uns les autres. 
	<span class="phrase-num">[5]</span> Chacun est tenu de se conserver soi-même, et de conserver le reste de l'humanité. 
	<span class="phrase-num">[6]</span> Et c'est pourquoi la loi de nature veut que personne ne nuise à autrui. 
	<span class="phrase-num">[7]</span> Mais pour que cette loi soit observée, il faut un pouvoir qui la fasse respecter. 
	<span class="phrase-num">[8]</span> C'est pourquoi les hommes se rassemblent en société. 
	<span class="phrase-num">[9]</span> L'État n'est pas un maître, mais un serviteur du droit naturel. 
	<span class="phrase-num">[10]</span> S'il viole ce droit, il devient tyrannique et peut être renversé. 
	»`,
		reponses: {
			origine: "John LOCKE, <i>Traité du gouvernement civil</i>, chapitre II, Paris : Flammarion, 2015, p.178.",
			theme: "L'État",
			these: "La loi de nature oblige à ne pas nuire à autrui, mais elle a besoin d'un pouvoir pour être appliquée.",
			interet: "Il fonde le droit naturel et la nécessité de l'État comme garant des droits naturels.",
			problematique: "L'État est-il nécessaire pour faire respecter les droits naturels ou peut-on s'en passer ?"
		}
	},
	// --------------------------------
	// LUCRÈCE
	// --------------------------------
	{
		id: 79,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'univers est infini, car il n'y a aucune raison de lui assigner une limite. 
	<span class="phrase-num">[2]</span> Il n'a ni centre, ni circonférence. 
	<span class="phrase-num">[3]</span> Notre monde n'est pas le seul monde habité. 
	<span class="phrase-num">[4]</span> Il existe une infinité d'autres mondes semblables au nôtre. 
	<span class="phrase-num">[5]</span> Tous sont composés des mêmes éléments. 
	<span class="phrase-num">[6]</span> Ils naissent et ils périssent selon des cycles éternels. 
	<span class="phrase-num">[7]</span> L'homme n'est donc pas au centre de l'univers. 
	<span class="phrase-num">[8]</span> Cette idée doit nous rendre modestes. 
	<span class="phrase-num">[9]</span> Mais elle doit aussi nous libérer de la crainte des dieux. 
	<span class="phrase-num">[10]</span> Car tout se fait selon des lois nécessaires, sans l'intervention d'aucune divinité. 
	»`,
		reponses: {
			origine: "LUCRÈCE, <i>De la nature des choses</i>, livre II, v. 1048-1089, Paris : Flammarion, 2017, p.234.",
			theme: "La science",
			these: "L'univers est infini et composé d'une infinité de mondes, obéissant à des lois naturelles sans intervention divine.",
			interet: "Il expose la conception matérialiste et atomiste de l'univers, héritée d'Épicure.",
			problematique: "La connaissance de l'infinité de l'univers et de ses lois nécessaires conduit-elle nécessairement à l'athéisme et à la libération de la crainte des dieux ou peut-elle au contraire susciter une forme renouvelée d'émerveillement religieux face au cosmos ?"
		}
	},
	// --------------------------------
	// MACHIAVEL
	// --------------------------------
	{
		id: 80,
		contenu: `« 
	<span class="phrase-num">[1]</span> Un prince ne doit point avoir d'autre objet ni d'autre pensée, ni prendre chose aucune pour son art, que la guerre et les institutions et la discipline de la guerre. 
	<span class="phrase-num">[2]</span> Car c'est le seul art qui convienne à celui qui commande. 
	<span class="phrase-num">[3]</span> Et il est d'une telle vertu que non seulement il maintient ceux qui sont nés princes, mais souvent il fait monter à ce rang des hommes de condition privée. 
	<span class="phrase-num">[4]</span> Au contraire, quand les princes ont pensé plus aux délices qu'aux armes, ils ont perdu leur État. 
	<span class="phrase-num">[5]</span> La première cause qui te le fait perdre est de négliger cet art. 
	<span class="phrase-num">[6]</span> La cause qui te le fait acquérir est d'en être professeur. 
	<span class="phrase-num">[7]</span> Francesco Sforza, pour être armé, devint duc de Milan. 
	<span class="phrase-num">[8]</span> Ses fils, pour avoir fui les armes, devinrent simples particuliers. 
	<span class="phrase-num">[9]</span> Car, entre les autres mauvais effets de n'être point armé, il fait que l'on te méprise. 
	<span class="phrase-num">[10]</span> C'est une des ignominies que le prince doit fuir. 
	»`,
		reponses: {
			origine: "Nicolas MACHIAVEL, <i>Le Prince</i>, chapitre XIV, Paris : Gallimard, 2016, p.234.",
			theme: "L'État",
			these: "L'art de la guerre est la seule compétence essentielle du prince pour conserver et accroître son État.",
			interet: "Il fonde la pensée politique moderne sur le réalisme et l'efficacité, hors des considérations morales traditionnelles.",
			problematique: "Le Prince doit-il être vertueux ou seulement efficace ?"
		}
	},
	// --------------------------------
	// MAIMONIDE
	// --------------------------------
	{
		id: 81,
		contenu: `« 
	<span class="phrase-num">[1]</span> Il y a des choses que l'homme peut comprendre par sa raison. 
	<span class="phrase-num">[2]</span> Mais il y a des choses que la raison ne peut atteindre. 
	<span class="phrase-num">[3]</span> La création du monde est de celles-ci. 
	<span class="phrase-num">[4]</span> Aristote croyait à l'éternité du monde, mais il n'en a pas de preuve démonstrative. 
	<span class="phrase-num">[5]</span> Moïse a enseigné la création, et c'est un article de foi. 
	<span class="phrase-num">[6]</span> La raison ne peut trancher entre ces deux opinions. 
	<span class="phrase-num">[7]</span> Nous devons donc accepter la révélation. 
	<span class="phrase-num">[8]</span> Mais là où la raison peut s'exercer, elle doit le faire. 
	<span class="phrase-num">[9]</span> La loi juive commande d'étudier la philosophie. 
	<span class="phrase-num">[10]</span> Car connaître Dieu, c'est d'abord connaître son œuvre, la nature. 
	»`,
		reponses: {
			origine: "MAIMONIDE, <i>Guide des égarés</i>, livre II, chapitres XIII-XV, Paris : Verdier, 2017, p.456.",
			theme: "La raison",
			these: "La raison et la révélation ont leurs domaines propres ; là où la raison ne peut conclure, il faut s'en remettre à la révélation.",
			interet: "Il tente une synthèse entre la philosophie aristotélicienne et la théologie juive.",
			problematique: "Faut-il toujours chercher à accorder raison et foi ou admettre leurs limites respectives ?"
		}
	},
	// --------------------------------
	// MALEBRANCHE
	// --------------------------------
	{
		id: 82,
		contenu: `« 
	<span class="phrase-num">[1]</span> Nous voyons toutes choses en Dieu. 
	<span class="phrase-num">[2]</span> Dieu est le lieu des esprits, comme l'espace est le lieu des corps. 
	<span class="phrase-num">[3]</span> C'est en lui que nous voyons les vérités éternelles. 
	<span class="phrase-num">[4]</span> Les idées que nous avons des choses sont en Dieu. 
	<span class="phrase-num">[5]</span> Dieu est l'archétype de toute perfection. 
	<span class="phrase-num">[6]</span> Nous ne voyons pas les choses directement, mais leurs idées en Dieu. 
	<span class="phrase-num">[7]</span> C'est pourquoi notre connaissance est limitée. 
	<span class="phrase-num">[8]</span> Dieu ne nous montre que ce qu'il veut. 
	<span class="phrase-num">[9]</span> Mais cette vision en Dieu est la condition de toute connaissance certaine. 
	<span class="phrase-num">[10]</span> Sans elle, nous serions livrés au doute et à l'erreur. 
	»`,
		reponses: {
			origine: "Nicolas MALEBRANCHE, <i>De la recherche de la vérité</i>, livre III, Paris : Vrin, 2016, p.345.",
			theme: "La raison",
			these: "Nous voyons toutes choses en Dieu, qui contient les idées éternelles des créatures.",
			interet: "Il propose un occasionalisme où Dieu est la seule cause véritable et le lieu des idées.",
			problematique: "La vision des idées en Dieu garantit-elle véritablement la certitude de notre connaissance ou n'est-ce qu'une illusion qui nous éloigne de l'appréhension directe du réel ?"
		}
	},
	// --------------------------------
	// MARC AURÈLE
	// --------------------------------
	{
		id: 83,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le matin, quand tu te lèves à regret, aie cette pensée : je m'éveille pour faire œuvre d'homme. 
	<span class="phrase-num">[2]</span> Et irai-je donc mécontent, quand je vais faire ce pour quoi je suis né, ce pour quoi j'ai été mis au monde ? 
	<span class="phrase-num">[3]</span> Ou donc ai-je été organisé pour rester là, sous mes couvertures, à me tenir chaud ? 
	<span class="phrase-num">[4]</span> C'est plus agréable, dis-tu. 
	<span class="phrase-num">[5]</span> Est-ce donc pour le plaisir que tu es fait, et non pour l'action, pour l'effort ? 
	<span class="phrase-num">[6]</span> Ne vois-tu pas les plantes, les passereaux, les fourmis, les araignées, les abeilles, faire leur office, mettre en ordre, à leur mesure, le monde ? 
	<span class="phrase-num">[7]</span> Et toi, tu ne veux pas faire œuvre d'homme ? 
	<span class="phrase-num">[8]</span> Tu ne cours pas vers ce qui est conforme à ta nature ? 
	<span class="phrase-num">[9]</span> Mais il faut bien se reposer, dis-tu. 
	<span class="phrase-num">[10]</span> D'accord, mais la nature a fixé une mesure au repos, comme à la nourriture et à la boisson. 
	»`,
		reponses: {
			origine: "MARC AURÈLE, <i>Pensées pour moi-même</i>, livre V, 1, Paris : Flammarion, 2017, p.234.",
			theme: "Le travail",
			these: "L'homme est fait pour l'action conforme à sa nature, non pour le repos et le plaisir.",
			interet: "Il exprime l'éthique stoïcienne du devoir et de l'action dans la vie quotidienne.",
			problematique: "L'homme est-il fait pour le travail ou pour le repos ?"
		}
	},
	// --------------------------------
	// MARX
	// --------------------------------
	{
		id: 84,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le travail est d'abord un procès entre l'homme et la nature, un procès dans lequel l'homme règle et contrôle ses échanges de matières avec la nature. 
	<span class="phrase-num">[2]</span> Il se présente lui-même, vis-à-vis de la nature, comme une puissance naturelle. 
	<span class="phrase-num">[3]</span> Les forces dont son corps est doué, bras et jambes, tête et mains, il les met en mouvement afin de s'assimiler des matières en leur donnant une forme utile à sa vie. 
	<span class="phrase-num">[4]</span> En même temps qu'il agit par ce mouvement sur la nature extérieure et la modifie, il modifie sa propre nature et développe les facultés qui y sommeillent. 
	<span class="phrase-num">[5]</span> Le travail est donc un processus de transformation mutuelle. 
	<span class="phrase-num">[6]</span> L'homme transforme la nature et se transforme lui-même. 
	<span class="phrase-num">[7]</span> C'est en cela que consiste l'essence du travail humain. 
	<span class="phrase-num">[8]</span> Mais dans le capitalisme, le travail devient aliéné. 
	<span class="phrase-num">[9]</span> Le produit du travail échappe au travailleur. 
	<span class="phrase-num">[10]</span> L'ouvrier devient d'autant plus pauvre qu'il produit plus de richesses. 
	»`,
		reponses: {
			origine: "Karl MARX, <i>Le Capital</i>, livre I, Section III, chapitre VII, Paris : Éditions Sociales, 2016, p.245.",
			theme: "Le travail",
			these: "Le travail est un processus de transformation mutuelle de l'homme et de la nature, mais dans le capitalisme il devient aliéné.",
			interet: "Il définit le travail comme médiation entre l'homme et la nature, et analyse son aliénation dans le système capitaliste.",
			problematique: "Le travail transforme-t-il seulement la nature ou aussi l'homme ?"
		}
	},
	{
		id: 85,
		contenu: `« 
	<span class="phrase-num">[1]</span> La religion est le soupir de la créature opprimée, l'âme d'un monde sans cœur, comme elle est l'esprit d'une époque sans esprit. 
	<span class="phrase-num">[2]</span> Elle est l'opium du peuple. 
	<span class="phrase-num">[3]</span> L'homme fait la religion, ce n'est pas la religion qui fait l'homme. 
	<span class="phrase-num">[4]</span> La religion est la conscience de soi et le sentiment de soi de l'homme qui ou bien ne s'est pas encore conquis ou bien s'est déjà reperdu. 
	<span class="phrase-num">[5]</span> La misère religieuse est à la fois l'expression de la misère réelle et la protestation contre cette misère réelle. 
	<span class="phrase-num">[6]</span> Le bonheur illusoire qu'elle procure est le reflet d'un bonheur réel qui fait défaut. 
	<span class="phrase-num">[7]</span> Abolir la religion comme bonheur illusoire du peuple, c'est exiger son bonheur réel. 
	<span class="phrase-num">[8]</span> La critique du ciel se transforme ainsi en critique de la terre. 
	<span class="phrase-num">[9]</span> La critique de la théologie se transforme en critique de la politique. 
	<span class="phrase-num">[10]</span> C'est pourquoi la lutte contre la religion est indirectement la lutte contre le monde dont la religion est l'arôme spirituel. 
	»`,
		reponses: {
			origine: "Karl MARX, <i>Critique de la philosophie du droit de Hegel. Introduction</i>, Paris : Gallimard, 2016, p.123.",
			theme: "La religion",
			these: "La religion est une production humaine, une consolation illusoire et un opium qui masque la misère réelle et empêche la révolte.",
			interet: "Il formule la critique matérialiste de la religion comme aliénation et comme symptôme des conditions sociales injustes.",
			problematique: "La religion est-elle un refuge ou un obstacle à l'émancipation humaine ?"
		}
	},
	// --------------------------------
	// MAUSS
	// --------------------------------
	{
		id: 86,
		contenu: `« 
	<span class="phrase-num">[1]</span> Dans les sociétés archaïques, les échanges ne sont pas simplement des transactions commerciales, mais des \" faits sociaux totaux \". 
	<span class="phrase-num">[2]</span> Le potlatch en est un exemple : on y donne, on y reçoit et on y rend, sous peine de perdre son rang. 
	<span class="phrase-num">[3]</span> L'obligation de donner et de recevoir crée un lien social fondamental. 
	<span class="phrase-num">[4]</span> Le don a une triple obligation : donner, recevoir, rendre. 
	<span class="phrase-num">[5]</span> Ce système n'est pas désintéressé, car il y a une lutte de prestige et une quête d'honneur. 
	<span class="phrase-num">[6]</span> Contre l'utilitarisme, il faut retrouver la solidarité par le don, une \" morale de la coopération \". 
	»`,
		reponses: {
			origine: "Marcel MAUSS, <i>Essai sur le don</i>, Introduction et Conclusion, Paris : PUF, 2016.",
			theme: "La nature",
			these: "Le don, loin d'être un acte gratuit et désintéressé, est un système d'échange obligatoire qui fonde et structure la vie sociale.",
			interet: "Il fonde l'anthropologie du don et influence profondément les sciences sociales en montrant la triple obligation (donner, recevoir, rendre).",
			problematique: "Le lien social est-il fondé sur l'échange marchand ou sur des relations de don et de contre-don ?"
		}
	},
	// --------------------------------
	// MERLEAU-PONTY
	// --------------------------------
	{
		id: 87,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'art est un moyen de pénétrer dans un monde, un autre monde, celui de la réalité. 
	<span class="phrase-num">[2]</span> Mais on ne peut pas dire que ce monde soit le monde des apparences. 
	<span class="phrase-num">[3]</span> Il est plutôt le monde de la vérité, mais de la vérité sensible. 
	<span class="phrase-num">[4]</span> Dans l'art, la vérité devient sensible. 
	<span class="phrase-num">[5]</span> C'est pourquoi l'art est supérieur à la simple copie de la nature. 
	<span class="phrase-num">[6]</span> Il ne reproduit pas, il produit. 
	<span class="phrase-num">[7]</span> Il donne à voir ce qui sans lui resterait invisible. 
	<span class="phrase-num">[8]</span> Ainsi, l'art est une révélation. 
	<span class="phrase-num">[9]</span> Il manifeste ce qui est caché. 
	<span class="phrase-num">[10]</span> Et c'est en cela que réside sa puissance. 
	»`,
		reponses: {
			origine: "Maurice MERLEAU-PONTY, <i>L'Œil et l'Esprit</i>, Paris : Gallimard, 2016, p.78.",
			theme: "L'art",
			these: "L'art est la manifestation de la vérité sensible, une révélation du visible.",
			interet: "Il propose une conception phénoménologique de l'art comme expression de la perception.",
			problematique: "L'art révèle-t-il une vérité que la science ne peut atteindre ou n'est-il qu'un divertissement ?"
		}
	},
	// --------------------------------
	// MILL
	// --------------------------------
	{
		id: 88,
		contenu: `« 
	<span class="phrase-num">[1]</span> La liberté de l'un s'arrête là où commence celle de l'autre. 
	<span class="phrase-num">[2]</span> Tel est le principe de toute société libre. 
	<span class="phrase-num">[3]</span> Ma liberté n'est pas absolue. 
	<span class="phrase-num">[4]</span> Elle est limitée par la liberté des autres. 
	<span class="phrase-num">[5]</span> Mais cette limitation n'est pas une diminution. 
	<span class="phrase-num">[6]</span> Elle est la condition de la liberté pour tous. 
	<span class="phrase-num">[7]</span> Sans elle, ce serait la guerre de tous contre tous. 
	<span class="phrase-num">[8]</span> La loi est là pour garantir ces limites. 
	<span class="phrase-num">[9]</span> Elle est la forme de notre liberté commune. 
	<span class="phrase-num">[10]</span> Ainsi, la liberté et la loi ne s'opposent pas. 
	»`,
		reponses: {
			origine: "John Stuart MILL, <i>De la liberté</i>, chapitre I, Paris : Gallimard, 2015, p.89.",
			theme: "La liberté",
			these: "La liberté de chacun est limitée par celle des autres, et la loi garantit cette limitation.",
			interet: "Il définit le principe libéral de la liberté comme non-nuisance à autrui.",
			problematique: "La liberté est-elle sans limites ou doit-elle être restreinte par celle d'autrui ?"
		}
	},
	// --------------------------------
	// MONTESQUIEU
	// --------------------------------
	{
		id: 89,
		contenu: `« 
	<span class="phrase-num">[1]</span> Il y a trois pouvoirs dans chaque État : la puissance législative, la puissance exécutrice des choses qui dépendent du droit des gens, et la puissance exécutrice de celles qui dépendent du droit civil. 
	<span class="phrase-num">[2]</span> Par la première, le prince ou le magistrat fait des lois pour un temps ou pour toujours, et corrige ou abroge celles qui sont faites. 
	<span class="phrase-num">[3]</span> Par la seconde, il fait la paix ou la guerre, envoie ou reçoit des ambassades, établit la sûreté, prévient les invasions. 
	<span class="phrase-num">[4]</span> Par la troisième, il punit les crimes, ou juge les différends des particuliers. 
	<span class="phrase-num">[5]</span> On appellera cette dernière la puissance de juger, et l'autre simplement la puissance exécutrice de l'État. 
	<span class="phrase-num">[6]</span> La liberté politique ne se trouve que dans les gouvernements modérés. 
	<span class="phrase-num">[7]</span> Mais elle n'est présente que lorsqu'on n'abuse pas du pouvoir. 
	<span class="phrase-num">[8]</span> C'est une expérience éternelle que tout homme qui a du pouvoir est porté à en abuser. 
	<span class="phrase-num">[9]</span> Pour qu'on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrête le pouvoir. 
	<span class="phrase-num">[10]</span> Tout serait perdu si le même homme, ou le même corps des principaux, ou des nobles, ou du peuple, exerçait ces trois pouvoirs. 
	»`,
		reponses: {
			origine: "MONTESQUIEU, <i>De l'esprit des lois</i>, livre XI, chapitre VI, Paris : Flammarion, 2016, p.345.",
			theme: "L'État",
			these: "La séparation des trois pouvoirs (législatif, exécutif, judiciaire) est la condition de la liberté politique.",
			interet: "Il pose les bases théoriques de la démocratie libérale et de l'équilibre des pouvoirs.",
			problematique: "La séparation des pouvoirs est-elle une condition suffisante pour garantir la liberté politique, ou doit-elle être complétée par une distribution équilibrée des forces sociales pour empêcher efficacement tout abus ?"
		}
	},
	// --------------------------------
	// MONTAIGNE
	// --------------------------------
	{
		id: 90,
		contenu: `« 
	<span class="phrase-num">[1]</span> Que sais-je ? 
	<span class="phrase-num">[2]</span> La présomption est notre maladie naturelle et originelle. 
	<span class="phrase-num">[3]</span> L'homme est le plus calamiteux et fragile de toutes les créatures, et quant et quant la plus orgueilleuse. 
	<span class="phrase-num">[4]</span> Il se voit et se plaît à se voir, il se déteste et se voit. 
	<span class="phrase-num">[5]</span> La peste de l'homme, c'est l'opinion de savoir. 
	<span class="phrase-num">[6]</span> C'est pourquoi l'ignorance et l'incuriosité donnent deux doux fruits à l'âme qui les cultive. 
	<span class="phrase-num">[7]</span> La philosophie n'est que poésie sophistiquée. 
	<span class="phrase-num">[8]</span> Les lois de la conscience, que nous disons naître de la nature, naissent de la coutume. 
	<span class="phrase-num">[9]</span> Nous sommes nés pour quêter la vérité ; il appartient de la posséder à une plus grande puissance. 
	<span class="phrase-num">[10]</span> La raison a tant de formes que nous ne savons à laquelle nous prendre. 
	»`,
		reponses: {
			origine: "Michel de MONTAIGNE, <i>Essais</i>, livre II, chapitre XII, Paris : Gallimard, 2016, p.567.",
			theme: "La raison",
			these: "La raison humaine est incertaine et présomptueuse ; le doute et l'ignorance sont des sagesses.",
			interet: "Il exprime un scepticisme mesuré qui interroge les certitudes de la raison.",
			problematique: "La raison peut-elle atteindre la vérité ou doit-elle reconnaître ses limites ?"
		}
	},
	// --------------------------------
	// MURDOCH
	// --------------------------------
	{
		id: 91,
		contenu: `« 
	<span class="phrase-num">[1]</span> La bonne volonté n'est pas un \" je veux \" abstrait, mais un regard juste et attentif. 
	<span class="phrase-num">[2]</span> L'amour est la connaissance d'un individu. 
	<span class="phrase-num">[3]</span> La réalité est opaque, et l'art nous apprend à la voir. 
	<span class="phrase-num">[4]</span> Le soi est un conglomérat d'égoïsme qu'il faut dissoudre par l'attention à ce qui n'est pas soi. 
	<span class="phrase-num">[5]</span> La liberté est la perception de la réalité. 
	<span class="phrase-num">[6]</span> La morale n'est pas une affaire de choix publics, mais de vision privée et de purification intérieure. 
	»`,
		reponses: {
			origine: "Iris MURDOCH, <i>La Souveraineté du Bien</i>, Paris : L'Éclat, 2017.",
			theme: "L'art",
			these: "La moralité ne réside pas d'abord dans le choix et l'action, mais dans la qualité de l'attention que l'on porte au monde et aux autres, une attention que l'art peut nous apprendre.",
			interet: "Elle propose une éthique de la vision et de l'attention, en opposition aux philosophies morales centrées sur la décision et l'acte.",
			problematique: "La vertu morale est-elle une affaire de bonnes actions ou de regard juste sur la réalité ?"
		}
	},
	// --------------------------------
	// NĀGĀRJUNA
	// --------------------------------
	{
		id: 92,
		contenu: `« 
	<span class="phrase-num">[1]</span> Tout est vide. 
	<span class="phrase-num">[2]</span> La vacuité ne signifie pas le néant, mais l'absence d'existence propre. 
	<span class="phrase-num">[3]</span> Rien n'existe par soi-même, indépendamment des causes et des conditions. 
	<span class="phrase-num">[4]</span> Tous les phénomènes sont interdépendants. 
	<span class="phrase-num">[5]</span> La production conditionnée est la loi universelle. 
	<span class="phrase-num">[6]</span> Ce qui est produit en dépendance est vide de nature propre. 
	<span class="phrase-num">[7]</span> La vacuité elle-même est vide. 
	<span class="phrase-num">[8]</span> Il ne faut pas s'attacher à la vacuité comme à une réalité. 
	<span class="phrase-num">[9]</span> Le juste milieu est entre l'éternalisme et le nihilisme. 
	<span class="phrase-num">[10]</span> Celui qui comprend la vacuité comprend la loi de l'univers. 
	»`,
		reponses: {
			origine: "NĀGĀRJUNA, <i>Stances du milieu par excellence</i> (Mūlamadhyamakakārikā), chapitre XXIV, Paris : Seuil, 2017, p.234.",
			theme: "La nature",
			these: "Tous les phénomènes sont vides d'existence propre car ils sont produits en dépendance.",
			interet: "Il fonde la philosophie du Madhyamaka, la voie du milieu entre éternalisme et nihilisme.",
			problematique: "Les choses existent-elles par elles-mêmes ou seulement en relation ?"
		}
	},
	// --------------------------------
	// NIETZSCHE
	// --------------------------------
	{
		id: 93,
		contenu: `« 
	<span class="phrase-num">[1]</span> Dieu est mort ! Dieu reste mort ! Et c'est nous qui l'avons tué ! 
	<span class="phrase-num">[2]</span> Comment nous consoler, nous les meurtriers des meurtriers ? 
	<span class="phrase-num">[3]</span> Ce que le monde a possédé de plus sacré et de plus puissant jusqu'à ce jour a perdu son sang sous notre couteau. 
	<span class="phrase-num">[4]</span> Qui nous lavera de ce sang ? 
	<span class="phrase-num">[5]</span> Quelle eau pourra jamais nous purifier ? 
	<span class="phrase-num">[6]</span> Quelles fêtes expiatoires, quels jeux sacrés serons-nous forcés d'inventer ? 
	<span class="phrase-num">[7]</span> La grandeur de cet acte n'est-elle pas trop grande pour nous ? 
	<span class="phrase-num">[8]</span> Ne nous faut-il pas devenir nous-mêmes des dieux, ne fût-ce que pour paraître dignes d'elle ? 
	<span class="phrase-num">[9]</span> Il n'y eut jamais d'action plus grandiose, et ceux qui pourront naître après nous appartiendront, à cause d'elle, à une histoire plus haute que toute histoire passée. 
	<span class="phrase-num">[10]</span> L'événement est encore en chemin, il n'est pas encore parvenu aux oreilles des hommes. 
	»`,
		reponses: {
			origine: "Friedrich NIETZSCHE, <i>Le Gai Savoir</i>, livre III, §125, Paris : Gallimard, 2015, p.234.",
			theme: "La religion",
			these: "La mort de Dieu est l'événement fondamental de la modernité qui appelle une transmutation des valeurs.",
			interet: "Il annonce la crise du nihilisme et la nécessité de nouvelles valeurs après l'effondrement des valeurs chrétiennes.",
			problematique: "La disparition des valeurs religieuses laisse-t-elle l'homme sans repères ou ouvre-t-elle à la création de nouvelles valeurs ?"
		}
	},
	{
		id: 94,
		contenu: `« 
	<span class="phrase-num">[1]</span> Ce qui est fait par amour est toujours au-delà du bien et du mal. 
	<span class="phrase-num">[2]</span> Il n'y a pas de morale, il n'y a que des interprétations morales des phénomènes. 
	<span class="phrase-num">[3]</span> La morale n'est pas un fait, mais un symptôme. 
	<span class="phrase-num">[4]</span> Il n'y a pas de phénomènes moraux, mais seulement une interprétation morale des phénomènes. 
	<span class="phrase-num">[5]</span> Le jugement moral a cela de commun avec le jugement religieux qu'il croit à des réalités qui n'en sont pas. 
	<span class="phrase-num">[6]</span> La morale n'est qu'une interprétation de certains phénomènes, une interprétation qui en cache d'autres. 
	<span class="phrase-num">[7]</span> Celui qui est moral est aussi peu libre qu'une bête de somme. 
	<span class="phrase-num">[8]</span> La vraie liberté est au-delà du bien et du mal. 
	<span class="phrase-num">[9]</span> Il faut se délivrer de la morale pour créer ses propres valeurs. 
	<span class="phrase-num">[10]</span> Le surhumain est celui qui crée ses valeurs par-delà le bien et le mal. 
	»`,
		reponses: {
			origine: "Friedrich NIETZSCHE, <i>Par-delà bien et mal</i>, §4, §108, et <i>Le Crépuscule des idoles</i>, Paris : Gallimard, 2015, p.378.",
			theme: "La religion",
			these: "La morale n'est pas un absolu, mais une interprétation, un symptôme, dont il faut se libérer pour créer ses propres valeurs.",
			interet: "Il propose une généalogie de la morale, la critiquant comme un préjugé et un signe de décadence.",
			problematique: "La morale est-elle un guide universel ou une illusion à dépasser ?"
		}
	},
	// --------------------------------
	// OCKHAM
	// --------------------------------
	{
		id: 95,
		contenu: `« 
	<span class="phrase-num">[1]</span> Il ne faut pas multiplier les êtres sans nécessité. 
	<span class="phrase-num">[2]</span> Ce qui peut être expliqué par un plus petit nombre de principes ne doit pas l'être par un plus grand nombre. 
	<span class="phrase-num">[3]</span> La simplicité est un critère de vérité. 
	<span class="phrase-num">[4]</span> Les universaux n'ont pas d'existence réelle. 
	<span class="phrase-num">[5]</span> Seuls les individus existent. 
	<span class="phrase-num">[6]</span> L'universel n'est qu'un concept de l'esprit, un signe qui représente plusieurs individus. 
	<span class="phrase-num">[7]</span> Il n'y a pas d'idées platoniciennes séparées. 
	<span class="phrase-num">[8]</span> La connaissance intuitive est celle par laquelle je sais qu'une chose existe ou n'existe pas. 
	<span class="phrase-num">[9]</span> La connaissance abstraite porte sur l'universel, indépendamment de l'existence. 
	<span class="phrase-num">[10]</span> Telle est la voie de la raison : ne pas supposer d'entités superflues. 
	»`,
		reponses: {
			origine: "Guillaume d'OCKHAM, <i>Commentaire sur les Sentences</i>, livre I, Paris : Vrin, 2017, p.156.",
			theme: "La raison",
			these: "Les universaux n'ont pas d'existence réelle ; seuls les individus existent (nominalisme).",
			interet: "Il pose le principe de parcimonie (rasoir d'Ockham) et fonde le nominalisme médiéval.",
			problematique: "Les idées générales existent-elles en dehors de notre esprit ou ne sont-elles que des constructions mentales ?"
		}
	},
	// --------------------------------
	// PASCAL
	// --------------------------------
	{
		id: 96,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'homme n'est qu'un roseau, le plus faible de la nature, mais c'est un roseau pensant. 
	<span class="phrase-num">[2]</span> Il ne faut pas que l'univers entier s'arme pour l'écraser. 
	<span class="phrase-num">[3]</span> Une vapeur, une goutte d'eau suffit pour le tuer. 
	<span class="phrase-num">[4]</span> Mais quand l'univers l'écraserait, l'homme serait encore plus noble que ce qui le tue, parce qu'il sait qu'il meurt, et l'avantage que l'univers a sur lui, l'univers n'en sait rien. 
	<span class="phrase-num">[5]</span> Toute notre dignité consiste donc en la pensée. 
	<span class="phrase-num">[6]</span> C'est de là qu'il faut nous relever, non de l'espace et de la durée. 
	<span class="phrase-num">[7]</span> Travaillons donc à bien penser : voilà le principe de la morale. 
	<span class="phrase-num">[8]</span> Or qu'est-ce que penser ? 
	<span class="phrase-num">[9]</span> C'est être conscient de soi et du monde. 
	<span class="phrase-num">[10]</span> La pensée fait la grandeur de l'homme. 
	»`,
		reponses: {
			origine: "Blaise PASCAL, <i>Pensées</i>, Fragment 200 (éd. Brunschvicg), Paris : Flammarion, 2016, p.187.",
			theme: "La conscience",
			these: "La dignité humaine réside dans la pensée consciente.",
			interet: "Il montre la grandeur de l'homme par sa conscience, même dans sa faiblesse physique.",
			problematique: "La conscience fait-elle notre dignité ou notre misère ?"
		}
	},
	{
		id: 97,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'homme est un être intermédiaire entre Dieu et le néant. 
	<span class="phrase-num">[2]</span> Il participe de l'un et de l'autre. 
	<span class="phrase-num">[3]</span> Par son corps, il appartient au monde sensible. 
	<span class="phrase-num">[4]</span> Par son âme, il s'élève vers Dieu. 
	<span class="phrase-num">[5]</span> Mais cette élévation n'est jamais achevée. 
	<span class="phrase-num">[6]</span> L'homme est toujours en chemin. 
	<span class="phrase-num">[7]</span> Il est un être de désir et de quête. 
	<span class="phrase-num">[8]</span> C'est pourquoi il est aussi un être d'inquiétude. 
	<span class="phrase-num">[9]</span> Son cœur est sans repos tant qu'il ne repose en Dieu. 
	<span class="phrase-num">[10]</span> Ainsi, l'homme est à la fois grandeur et misère. 
	»`,
		reponses: {
			origine: "Blaise PASCAL, <i>Pensées</i>, Fragment 72 (éd. Sellier), Paris : Flammarion, 2016, p.156.",
			theme: "La nature",
			these: "L'homme est un être intermédiaire, à la fois grandeur et misère.",
			interet: "Il montre la dualité de la nature humaine, tiraillée entre l'ange et la bête.",
			problematique: "La nature humaine est-elle une ou double ?"
		}
	},
	// --------------------------------
	// PLATON
	// --------------------------------
	{
		id: 98,
		contenu: `« 
	<span class="phrase-num">[1]</span> Or, je pense avoir établi qu'il y a le Beau en soi, le Bon en soi, et ainsi de toutes les choses que nous posions tout à l'heure comme multiples. 
	<span class="phrase-num">[2]</span> Nous les rapportons toutes à une Idée unique, qui est l'essence de chacune, et nous les appelons les Idées. 
	<span class="phrase-num">[3]</span> Ce qu'il y a de multiple dans la réalité sensible participe de ces Idées, dont il porte le nom. 
	<span class="phrase-num">[4]</span> Mais il n'y a là qu'une participation, et les choses sensibles ne sont pas les Idées elles-mêmes. 
	<span class="phrase-num">[5]</span> Il y a donc les Idées, et puis les choses qui en participent et qui en reçoivent le nom. 
	<span class="phrase-num">[6]</span> Enfin, la participation elle-même, comment s'opère-t-elle ? 
	<span class="phrase-num">[7]</span> C'est là, Socrate, ce qu'il y a de plus difficile à déterminer. 
	<span class="phrase-num">[8]</span> Toujours est-il que les Idées sont en quelque sorte des modèles dans la nature, et que les autres choses leur ressemblent et en sont des copies. 
	<span class="phrase-num">[9]</span> Cette participation des choses aux Idées n'est donc pas autre chose qu'une imitation. 
	<span class="phrase-num">[10]</span> Ainsi, le monde sensible est une copie du monde intelligible. 
	»`,
		reponses: {
			origine: "PLATON, <i>Parménide</i>, 132d-133a, Paris : Les Belles Lettres, 2014, p.89.",
			theme: "La vérité",
			these: "Les choses sensibles participent des Idées intelligibles par imitation.",
			interet: "Il expose la théorie des Idées et le rapport entre sensible et intelligible.",
			problematique: "Les choses sensibles ne sont-elles que des copies d'un modèle idéal ou ont-elles une réalité propre ?"
		}
	},
	{
		id: 99,
		contenu: `« 
	<span class="phrase-num">[1]</span> Il n'y a qu'une seule chose, disait Héraclite, qui soit sage : c'est de connaître la pensée qui sait gouverner toutes choses à travers toutes choses. 
	<span class="phrase-num">[2]</span> Ce n'est pas moi, mais l'oracle de Delphes que je cite. 
	<span class="phrase-num">[3]</span> C'est lui qui atteste que Socrate est le plus sage. 
	<span class="phrase-num">[4]</span> Et moi, interrogé par le dieu, j'examinai les hommes. 
	<span class="phrase-num">[5]</span> Je reconnus que ceux qui avaient la plus grande réputation me paraissaient à peu près les plus dénués de raison, tandis que d'autres, réputés inférieurs, étaient plus sensés. 
	<span class="phrase-num">[6]</span> Il faut vous raconter mes pérégrinations, les travaux que j'ai entrepris pour vérifier l'oracle d'une manière irréfutable. 
	<span class="phrase-num">[7]</span> Après les politiques, j'allai chez les poètes. 
	<span class="phrase-num">[8]</span> Et là, je trouvai qu'ils ne savaient pas ce qu'ils disaient. 
	<span class="phrase-num">[9]</span> Puis j'allai chez les artisans, et je vis qu'ils savaient beaucoup de choses que j'ignorais. 
	<span class="phrase-num">[10]</span> Finalement, je compris que la sagesse consiste à savoir que l'on ne sait pas. 
	»`,
		reponses: {
			origine: "PLATON, <i>Apologie de Socrate</i>, 21b-22a, Paris : Flammarion, 2016, p.56.",
			theme: "La raison",
			these: "La sagesse consiste à reconnaître les limites de son propre savoir.",
			interet: "Il montre la méthode socratique d'examen des prétentions au savoir.",
			problematique: "La conscience de son ignorance est-elle le commencement de la sagesse ou un obstacle à la connaissance ?"
		}
	},
	{
		id: 100,
		contenu: `« 
	<span class="phrase-num">[1]</span> Je conviendrai donc qu'il y a de l'injustice chez l'homme, mais je ne conviendrai pas qu'il soit plus avantageux que juste d'être injuste. 
	<span class="phrase-num">[2]</span> En effet, ou bien l'injustice n'est pas un mal, ou bien, si elle en est un, elle n'est pas le plus grand des maux, comme tu le prétends. 
	<span class="phrase-num">[3]</span> Et ce n'est pas non plus la justice qui est le plus grand des biens. 
	<span class="phrase-num">[4]</span> Mais il faut examiner la question plus à fond. 
	<span class="phrase-num">[5]</span> Et peut-être, dit-il, que l'injustice, quand elle est portée à un certain point, est plus forte, plus libre, plus puissante que la justice, et qu'ainsi, comme je le disais d'abord, la justice est ce qui est avantageux au plus fort, et l'injustice ce qui est avantageux et profitable à soi-même. 
	<span class="phrase-num">[6]</span> Voilà le défi que nous devons relever. 
	<span class="phrase-num">[7]</span> Il nous faut montrer que la justice est préférable en elle-même, indépendamment de ses conséquences. 
	<span class="phrase-num">[8]</span> C'est la tâche la plus importante de la philosophie. 
	<span class="phrase-num">[9]</span> Car il s'agit de savoir comment vivre. 
	<span class="phrase-num">[10]</span> La question n'est pas de peu d'importance : il s'agit de savoir comment nous devons vivre. 
	»`,
		reponses: {
			origine: "PLATON, <i>La République</i>, livre I, 348b-348c, Paris : Les Belles Lettres, 2016, p.145.",
			theme: "La justice",
			these: "La question de savoir si l'injustice est plus avantageuse que la justice doit être examinée.",
			interet: "Il pose le problème fondamental de l'avantage de la justice.",
			problematique: "Est-il toujours plus avantageux d'être juste que d'être injuste ou l'injustice peut-elle parfois être préférable ?"
		}
	},
	{
		id: 101,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le temps est l'image mobile de l'éternité immobile. 
	<span class="phrase-num">[2]</span> Quand le démiurge eut engendré le monde, il conçut le projet de le rendre encore plus semblable à son modèle. 
	<span class="phrase-num">[3]</span> Comme celui-ci est un animal éternel, il entreprit de rendre l'univers éternel aussi, autant que possible. 
	<span class="phrase-num">[4]</span> Or la nature de cet être vivant qu'est le modèle est éternelle, et il n'était pas possible d'adapter complètement cette propriété à ce qui est engendré. 
	<span class="phrase-num">[5]</span> Il songea donc à faire une image mobile de l'éternité, et, en même temps qu'il organisait le ciel, il fit de l'éternité qui demeure dans l'un cette image éternelle qui progresse suivant le nombre, ce que nous avons appelé le temps. 
	<span class="phrase-num">[6]</span> Car il n'y avait pas de jours et de nuits avant la naissance du ciel. 
	<span class="phrase-num">[7]</span> Le temps est donc né avec le ciel. 
	<span class="phrase-num">[8]</span> Il est la mesure du mouvement du monde. 
	<span class="phrase-num">[9]</span> Il participe de l'éternité sans être éternel lui-même. 
	<span class="phrase-num">[10]</span> Ainsi, le temps est l'image mobile de l'éternité immobile. 
	»`,
		reponses: {
			origine: "PLATON, <i>Timée</i>, 37d-38c, Paris : Les Belles Lettres, 2015, p.234.",
			theme: "Le temps",
			these: "Le temps est l'image mobile de l'éternité, créé par le démiurge en même temps que le monde ordonné (cosmos).",
			interet: "Il établit un lien cosmologique entre le temps et l'éternité, faisant du temps la mesure du mouvement du monde.",
			problematique: "Le temps est-il une réalité du monde sensible ou une simple apparence ?"
		}
	},
	{
		id: 102,
		contenu: `« 
	<span class="phrase-num">[1]</span> La justice est l'harmonie de l'âme et de la cité. 
	<span class="phrase-num">[2]</span> Dans l'âme juste, chaque partie remplit sa fonction. 
	<span class="phrase-num">[3]</span> La raison commande, la volonté exécute, les désirs obéissent. 
	<span class="phrase-num">[4]</span> Dans la cité juste, chaque classe fait de même. 
	<span class="phrase-num">[5]</span> Les philosophes gouvernent, les guerriers défendent, les producteurs travaillent. 
	<span class="phrase-num">[6]</span> Ainsi, la justice est l'ordre et l'harmonie. 
	<span class="phrase-num">[7]</span> Elle est la santé de l'âme et du corps social. 
	<span class="phrase-num">[8]</span> L'injustice, au contraire, est le désordre. 
	<span class="phrase-num">[9]</span> Elle est la maladie de l'âme et de la cité. 
	<span class="phrase-num">[10]</span> C'est pourquoi il faut être juste, pour la santé de l'âme comme pour celle de la cité. 
	»`,
		reponses: {
			origine: "PLATON, <i>La République</i>, livre IV, 441c-444a, Paris : Les Belles Lettres, 2016, p.356.",
			theme: "La justice",
			these: "La justice est l'harmonie de l'âme et de la cité, chaque partie remplissant sa fonction.",
			interet: "Il établit le parallèle entre psychologie et politique.",
			problematique: "La justice est-elle un ordre ou une égalité ?"
		}
	},
	// --------------------------------
	// PLOTIN
	// --------------------------------
	{
		id: 103,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'Un est au-delà de l'être. 
	<span class="phrase-num">[2]</span> Il est la source de tout ce qui existe. 
	<span class="phrase-num">[3]</span> De l'Un procède l'Intelligence, qui est l'être et la pensée. 
	<span class="phrase-num">[4]</span> De l'Intelligence procède l'Âme, qui anime le monde sensible. 
	<span class="phrase-num">[5]</span> Du monde sensible procède la matière, qui est le dernier degré de la réalité. 
	<span class="phrase-num">[6]</span> C'est la procession des hypostases. 
	<span class="phrase-num">[7]</span> Mais il y a aussi un mouvement de retour : l'âme peut remonter vers sa source. 
	<span class="phrase-num">[8]</span> Par la contemplation, elle s'unit à l'Intelligence. 
	<span class="phrase-num">[9]</span> Par l'extase, elle peut même s'unir à l'Un. 
	<span class="phrase-num">[10]</span> Là, dans le silence, elle touche l'ineffable. 
	»`,
		reponses: {
			origine: "PLOTIN, <i>Ennéades</i>, V, 2, Paris : Les Belles Lettres, 2015, p.234.",
			theme: "La religion",
			these: "Toute réalité procède de l'Un par émanation, et l'âme peut retourner à sa source par la contemplation et l'extase.",
			interet: "Il fonde le néoplatonisme, qui influencera profondément la philosophie chrétienne et musulmane.",
			problematique: "L'absolu est-il au-delà de l'être et de la pensée ou peut-il être saisi par la raison ?"
		}
	},
	// --------------------------------
	// POPPER
	// --------------------------------
	{
		id: 104,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le critère de la scientificité d'une théorie est sa falsifiabilité. 
	<span class="phrase-num">[2]</span> Une théorie qui n'est falsifiable par aucun événement concevable n'est pas scientifique. 
	<span class="phrase-num">[3]</span> L'invérifiabilité de la psychanalyse et du marxisme montre leur caractère non scientifique. 
	<span class="phrase-num">[4]</span> Une théorie doit prendre le risque d'être réfutée. 
	<span class="phrase-num">[5]</span> Plus une théorie est réfutable, plus elle est scientifique. 
	<span class="phrase-num">[6]</span> La science progresse par conjectures et réfutations. 
	<span class="phrase-num">[7]</span> Nous ne pouvons jamais vérifier définitivement une théorie, seulement la corroborer provisoirement. 
	<span class="phrase-num">[8]</span> La vérité est l'idée régulatrice de la recherche. 
	<span class="phrase-num">[9]</span> Nous nous approchons de la vérité en éliminant les erreurs. 
	<span class="phrase-num">[10]</span> Telle est la méthode de la science : essais et erreurs. 
	»`,
		reponses: {
			origine: "Karl POPPER, <i>La Logique de la découverte scientifique</i>, chapitre I, Paris : Payot, 2017, p.123.",
			theme: "La science",
			these: "Le critère de scientificité d'une théorie est sa falsifiabilité, non sa vérifiabilité.",
			interet: "Il propose le falsificationnisme comme critère de démarcation entre science et non-science.",
			problematique: "Le critère de falsifiabilité permet-il véritablement de distinguer la science de la non-science ou n'est-il qu'un idéal méthodologique que la pratique scientifique effective ne cesse de contourner ?"
		}
	},
	// --------------------------------
	// PRÉSOCRATIQUES (Héraclite)
	// --------------------------------
	{
		id: 105,
		contenu: `« 
	<span class="phrase-num">[1]</span> Ce monde, le même pour tous, aucun dieu ni aucun homme ne l'a fait. 
	<span class="phrase-num">[2]</span> Mais il a toujours été, il est et il sera : un feu toujours vivant, s'allumant avec mesure et s'éteignant avec mesure. 
	<span class="phrase-num">[3]</span> Il est sagesse de reconnaître que tout est un. 
	<span class="phrase-num">[4]</span> L'harmonie invisible est plus forte que l'harmonie visible. 
	<span class="phrase-num">[5]</span> Tout s'écoule (panta rhei) : on ne se baigne jamais deux fois dans le même fleuve. 
	<span class="phrase-num">[6]</span> La contradiction est le père de toutes choses. 
	»`,
		reponses: {
			origine: "HÉRACLITE, <i>Fragments</i> (DK 22 B30, B51, B91), Paris : Flammarion, 2016.",
			theme: "La nature",
			these: "Le monde est un feu éternel et vivant, régi par un ordre caché (le Logos) fait de contradictions et de devenir permanent.",
			interet: "Il introduit une pensée du mouvement et de l'unité des contraires qui influencera toute la philosophie.",
			problematique: "L'essence du monde est-elle dans l'être immuable ou dans le devenir perpétuel ?"
		}
	},
	// --------------------------------
	// PUTNAM
	// --------------------------------
	{
		id: 106,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le réalisme interne est la position selon laquelle la question de ce qui constitue la réalité n'a de sens qu'à l'intérieur d'une théorie ou d'une description. 
	<span class="phrase-num">[2]</span> Il n'y a pas de point de vue divin sur la réalité. 
	<span class="phrase-num">[3]</span> Nous ne pouvons pas voir le monde d'un œil nul, d'un œil qui ne serait celui de personne. 
	<span class="phrase-num">[4]</span> Toute description du monde est relative à un schème conceptuel. 
	<span class="phrase-num">[5]</span> Mais cela ne signifie pas que tout se vaut, que toutes les descriptions sont équivalentes. 
	<span class="phrase-num">[6]</span> Certaines descriptions sont meilleures que d'autres, plus adéquates, plus riches. 
	<span class="phrase-num">[7]</span> La vérité n'est pas une copie du monde, mais une construction raisonnable. 
	<span class="phrase-num">[8]</span> Elle est une idéalisation de l'acceptabilité rationnelle. 
	<span class="phrase-num">[9]</span> Nous devons donc rejeter à la fois le réalisme métaphysique et le relativisme radical. 
	<span class="phrase-num">[10]</span> Telle est la voie étroite du réalisme interne. 
	»`,
		reponses: {
			origine: "Hilary PUTNAM, <i>Raison, vérité et histoire</i>, chapitre II, Paris : Minuit, 2016, p.89.",
			theme: "La vérité",
			these: "La vérité est une idéalisation de l'acceptabilité rationnelle au sein d'un schème conceptuel.",
			interet: "Il propose un réalisme interne qui évite à la fois le relativisme et le réalisme métaphysique.",
			problematique: "Le réalisme interne parvient-il à éviter l'écueil du relativisme en maintenant un critère de meilleure description ou ne fait-il que déplacer le problème en soumettant la vérité à l'acceptabilité rationnelle sans fondement absolu ?"
		}
	},
	// --------------------------------
	// RAWLS
	// --------------------------------
	{
		id: 107,
		contenu: `« 
	<span class="phrase-num">[1]</span> La justice est la première vertu des institutions sociales. 
	<span class="phrase-num">[2]</span> Pour définir les principes de justice, il faut se placer derrière un \" voile d'ignorance \" : on ignore sa position sociale, ses talents, sa conception du bien. 
	<span class="phrase-num">[3]</span> Dans cette position originelle, des personnes rationnelles et libres choisiraient deux principes. 
	<span class="phrase-num">[4]</span> Premier principe : chaque personne a un droit égal à un système pleinement adéquat de libertés de base. 
	<span class="phrase-num">[5]</span> Second principe : les inégalités sociales et économiques doivent être liées à des fonctions et positions ouvertes à tous, et être au plus grand bénéfice des plus désavantagés (principe de différence). 
	<span class="phrase-num">[6]</span> La société juste est donc une société équitable (justice as fairness). 
	»`,
		reponses: {
			origine: "John RAWLS, <i>Théorie de la justice</i>, chapitre I, Paris : Seuil, 2016.",
			theme: "La justice",
			these: "Une société juste est celle que des individus rationnels, ignorant leur situation future, choisiraient derrière un \"voile d'ignorance\", privilégiant les libertés de base et l'équité des chances.",
			interet: "Il renouvelle la philosophie politique au XXe siècle en proposant une théorie contractualiste et libérale de la justice comme équité.",
			problematique: "Une société juste doit-elle garantir l'égalité absolue ou peut-elle admettre des inégalités si elles profitent aux plus défavorisés ?"
		}
	},
	// --------------------------------
	// RICŒUR
	// --------------------------------
	{
		id: 108,
		contenu: `« 
	<span class="phrase-num">[1]</span> Se comprendre, c'est se comprendre devant le texte. 
	<span class="phrase-num">[2]</span> Le symbole donne à penser. 
	<span class="phrase-num">[3]</span> Le récit est la forme privilégiée de l'identité humaine (identité narrative). 
	<span class="phrase-num">[4]</span> Il y a un conflit des interprétations (herméneutique du soupçon vs herméneutique de la confiance). 
	<span class="phrase-num">[5]</span> La justice suppose la capacité de se distancier de soi-même pour reconnaître autrui comme un semblable. 
	<span class="phrase-num">[6]</span> Soi-même comme un autre : l'altérité est constitutive de l'ipséité. 
	»`,
		reponses: {
			origine: "Paul RICŒUR, <i>Soi-même comme un autre</i>, Paris : Seuil, 2015.",
			theme: "La conscience",
			these: "La compréhension de soi ne se fait pas par introspection directe, mais passe par la médiation des signes, des symboles et des récits (identité narrative).",
			interet: "Il développe une herméneutique du soi qui intègre le détour par la culture, le langage et le récit.",
			problematique: "La connaissance de soi est-elle immédiate (introspection) ou médiatisée par le langage et la culture ?"
		}
	},
	// --------------------------------
	// ROUSSEAU
	// --------------------------------
	{
		id: 109,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'homme est né libre, et partout il est dans les fers. 
	<span class="phrase-num">[2]</span> Renoncer à sa liberté, c'est renoncer à sa qualité d'homme. 
	<span class="phrase-num">[3]</span> Le problème fondamental est de trouver une forme d'association qui défende et protège de toute la force commune la personne et les biens de chaque associé, et par laquelle chacun, s'unissant à tous, n'obéisse pourtant qu'à lui-même et reste aussi libre qu'auparavant. 
	<span class="phrase-num">[4]</span> Ce passage de l'état de nature à l'état civil substitue la justice à l'instinct. 
	<span class="phrase-num">[5]</span> La volonté générale est toujours droite et tend toujours à l'utilité publique. 
	<span class="phrase-num">[6]</span> Il faut distinguer la volonté de tous (somme des intérêts particuliers) de la volonté générale (intérêt commun). 
	»`,
		reponses: {
			origine: "Jean-Jacques ROUSSEAU, <i>Du contrat social</i>, livre I, chapitres I, VI, Paris : Flammarion, 2016.",
			theme: "L'État",
			these: "Le contrat social a pour but de concilier la liberté naturelle et l'autorité politique en créant un corps politique dont la volonté générale est l'expression de l'intérêt commun.",
			interet: "Il fonde la souveraineté sur la volonté générale et pose le problème de la légitimité politique.",
			problematique: "La vie en société est-elle une aliénation de la liberté ou sa condition d'accomplissement ?"
		}
	},
	// --------------------------------
	// RUSSELL
	// --------------------------------
	{
		id: 110,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le désir de possession, et le pouvoir qui l'accompagne, est la source de la plupart des maux de l'humanité. 
	<span class="phrase-num">[2]</span> Le vrai bonheur réside dans l'élargissement de nos intérêts à des objets impersonnels. 
	<span class="phrase-num">[3]</span> La philosophie a pour but de nous libérer du dogmatisme en montrant que nos certitudes ne sont que des hypothèses. 
	<span class="phrase-num">[4]</span> Le fanatisme est le grand ennemi de la paix et de la raison. 
	<span class="phrase-num">[5]</span> L'esprit scientifique ne cherche pas à éviter les erreurs, mais à les corriger. 
	<span class="phrase-num">[6]</span> La sagesse consiste à cultiver le doute méthodique et la bienveillance universelle. 
	»`,
		reponses: {
			origine: "Bertrand RUSSELL, <i>La Conquête du bonheur</i>, et <i>Problèmes de philosophie</i>, Paris : Payot, 2016.",
			theme: "La raison",
			these: "La fonction de la raison n'est pas de fournir des certitudes absolues, mais de lutter contre le dogmatisme et le fanatisme par l'exercice du doute et de l'esprit critique.",
			interet: "Il incarne un rationalisme ouvert, anti-dogmatique, soucieux de paix et de bonheur concret.",
			problematique: "La raison est-elle un outil pour atteindre des vérités certaines ou pour lutter contre l'illusion de certitude ?"
		}
	},
	// --------------------------------
	// SARTRE
	// --------------------------------
	{
		id: 111,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'existence précède l'essence. 
	<span class="phrase-num">[2]</span> L'homme n'est rien d'autre que ce qu'il se fait. 
	<span class="phrase-num">[3]</span> Il est condamné à être libre. 
	<span class="phrase-num">[4]</span> Cette liberté est un fardeau : l'homme est responsable de tout ce qu'il vit. 
	<span class="phrase-num">[5]</span> L'enfer, c'est les Autres. 
	<span class="phrase-num">[6]</span> Le regard d'autrui me fige, me réduit à un objet et me vole ma liberté. 
	»`,
		reponses: {
			origine: "Jean-Paul SARTRE, <i>L'existentialisme est un humanisme</i>, et <i>Huis clos</i>, Paris : Gallimard, 2016.",
			theme: "La liberté",
			these: "L'homme, n'ayant pas de nature prédéfinie, est absolument libre et entièrement responsable de ce qu'il devient par ses choix.",
			interet: "Il est la figure de proue de l'existentialisme français, mettant l'accent sur la liberté radicale et la responsabilité de l'individu.",
			problematique: "La liberté humaine est-elle une libération ou une condamnation à l'angoisse et à la responsabilité totale ?"
		}
	},
	// --------------------------------
	// SÉNÈQUE
	// --------------------------------
	{
		id: 112,
		contenu: `« 
	<span class="phrase-num">[1]</span> Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles. 
	<span class="phrase-num">[2]</span> Le vrai bonheur consiste à se satisfaire de l'instant présent, quel qu'il soit. 
	<span class="phrase-num">[3]</span> La philosophie n'est pas un art de parade, mais une loi pour la vie. 
	<span class="phrase-num">[4]</span> Le temps, voilà la seule chose qui nous appartienne. 
	<span class="phrase-num">[5]</span> La vie est longue si tu sais t'en servir. 
	<span class="phrase-num">[6]</span> Être partout, c'est n'être nulle part. 
	»`,
		reponses: {
			origine: "SÉNÈQUE, <i>Lettres à Lucilius</i>, Lettres 1, 16, 71, Paris : Flammarion, 2017.",
			theme: "Le temps",
			these: "Le temps est notre bien le plus précieux, mais nous le gaspillons en nous dispersant dans des projets futurs, au lieu de vivre pleinement le présent.",
			interet: "Il exprime la sagesse stoïcienne pratique, centrée sur l'usage du temps et la maîtrise de soi.",
			problematique: "Faut-il vivre pour l'avenir ou se concentrer sur la pleine possession de l'instant présent ?"
		}
	},
	// --------------------------------
	// SEXTUS EMPIRICUS
	// --------------------------------
	{
		id: 113,
		contenu: `« 
	<span class="phrase-num">[1]</span> À toute raison s'oppose une raison égale. 
	<span class="phrase-num">[2]</span> Le sceptique est celui qui continue de chercher. 
	<span class="phrase-num">[3]</span> Ni les perceptions sensibles ni les jugements de la raison ne peuvent fonder une certitude absolue. 
	<span class="phrase-num">[4]</span> En suspendant son jugement (épochè), le sage atteint la tranquillité de l'âme (ataraxie). 
	<span class="phrase-num">[5]</span> Nous ne disons pas que le miel est doux, mais qu'il nous paraît doux. 
	<span class="phrase-num">[6]</span> Le critère de l'action n'est pas la vérité, mais l'apparence et la coutume. 
	»`,
		reponses: {
			origine: "SEXTUS EMPIRICUS, <i>Esquisses pyrrhoniennes</i>, livre I, Paris : Seuil, 2017.",
			theme: "La vérité",
			these: "L'impossibilité de trancher entre des opinions contradictoires conduit le sage à suspendre son jugement, seule voie vers la sérénité.",
			interet: "Il est la source principale de la philosophie sceptique antique, opposant au dogmatisme la recherche perpétuelle.",
			problematique: "La vérité est-elle accessible à la raison ou conduit-elle à une suspension sceptique du jugement ?"
		}
	},
	// --------------------------------
	// SIMONDON
	// --------------------------------
	{
		id: 114,
		contenu: `« 
	<span class="phrase-num">[1]</span> Il faut s'intéresser à la genèse de l'individu (individuation), non à l'individu déjà constitué. 
	<span class="phrase-num">[2]</span> L'être est sursaturé, plus qu'unité et plus qu'identité. 
	<span class="phrase-num">[3]</span> L'individuation a des phases : physique, vitale, psychique, collective. 
	<span class="phrase-num">[4]</span> L'objet technique n'est pas un simple outil, mais un support de culture et de relation au monde. 
	<span class="phrase-num">[5]</span> Il faut réintégrer la culture dans la technique pour surmonter l'aliénation. 
	<span class="phrase-num">[6]</span> La réalité humaine est une réalité transindividuelle, qui relie les individus à travers leurs œuvres et leurs symboles. 
	»`,
		reponses: {
			origine: "Gilbert SIMONDON, <i>L'Individuation à la lumière des notions de forme et d'information</i>, et <i>Du mode d'existence des objets techniques</i>, Paris : Jérôme Millon, 2017.",
			theme: "La technique",
			these: "Il faut penser l'individu non comme un donné, mais comme le résultat d'un processus (individuation) qui inclut aussi bien le vivant que le collectif et le technique.",
			interet: "Il propose une pensée originale de la technique et de l'individuation, influençant les philosophies de la technique et de la différence.",
			problematique: "L'objet technique est-il un simple outil aliénant ou un vecteur de relation et de culture ?"
		}
	},
	// --------------------------------
	// SMITH
	// --------------------------------
	{
		id: 115,
		contenu: `« 
	<span class="phrase-num">[1]</span> Ce n'est pas de la bienveillance du boucher, du brasseur ou du boulanger que nous attendons notre dîner, mais bien du soin qu'ils apportent à leurs intérêts. 
	<span class="phrase-num">[2]</span> La division du travail est la principale cause de l'accroissement de la richesse des nations. 
	<span class="phrase-num">[3]</span> L'échange est naturel à l'homme, et c'est lui qui fonde la société. 
	<span class="phrase-num">[4]</span> La valeur d'une chose a deux sens : l'utilité (valeur d'usage) et le pouvoir d'acheter d'autres biens (valeur d'échange). 
	<span class="phrase-num">[5]</span> L'effort naturel de chaque individu pour améliorer sa propre condition est un principe si puissant qu'il peut à lui seul, sans aucune aide, porter la société vers l'opulence et la prospérité. 
	<span class="phrase-num">[6]</span> La main invisible du marché transforme l'intérêt personnel en bien commun. 
	»`,
		reponses: {
			origine: "Adam SMITH, <i>Recherche sur la nature et les causes de la richesse des nations</i>, livre I, Paris : Flammarion, 2016.",
			theme: "Le travail",
			these: "La poursuite par chacun de son intérêt personnel, régulée par le marché, est le moteur le plus efficace de la prospérité collective.",
			interet: "Il pose les fondements de l'économie politique classique et de la pensée libérale moderne.",
			problematique: "La recherche de l'intérêt personnel est-elle un obstacle ou le meilleur moteur du bien commun ?"
		}
	},
	// --------------------------------
	// SPINOZA
	// --------------------------------
	{
		id: 116,
		contenu: `« 
	<span class="phrase-num">[1]</span> Dieu, ou la Nature, est une substance unique, éternelle et infinie. 
	<span class="phrase-num">[2]</span> La liberté n'est pas un libre arbitre, mais la nécessité comprise et acceptée. 
	<span class="phrase-num">[3]</span> Le sage ne pleure pas, ne maudit pas, mais comprend. 
	<span class="phrase-num">[4]</span> La joie est le passage de l'homme d'une moindre à une plus grande perfection. 
	<span class="phrase-num">[5]</span> Une affection ne peut être réprimée que par une affection contraire et plus forte. 
	<span class="phrase-num">[6]</span> Le bien suprême est la connaissance de l'union de l'esprit avec la Nature tout entière. 
	»`,
		reponses: {
			origine: "Baruch SPINOZA, <i>Éthique</i>, Parties I, III, IV, Paris : Flammarion, 2016.",
			theme: "La liberté",
			these: "La liberté ne consiste pas dans un illusoire pouvoir de choisir, mais dans la compréhension rationnelle de la nécessité qui nous gouverne.",
			interet: "Il propose un rationalisme radical où Dieu et la Nature ne font qu'un, et où la liberté est une conquête de la raison.",
			problematique: "La liberté est-elle un libre arbitre indéterminé ou la reconnaissance de la nécessité ?"
		}
	},
	// --------------------------------
	// THOMAS D'AQUIN
	// --------------------------------
	{
		id: 117,
		contenu: `« 
	<span class="phrase-num">[1]</span> La grâce ne supprime pas la nature, mais la perfectionne. 
	<span class="phrase-num">[2]</span> La raison naturelle peut démontrer certains attributs de Dieu (existence, unité), mais non les mystères de la foi (Trinité, Incarnation). 
	<span class="phrase-num">[3]</span> La loi naturelle, inscrite dans le cœur de l'homme, est une participation de la loi éternelle. 
	<span class="phrase-num">[4]</span> L'homme est destiné à une fin surnaturelle qui dépasse les capacités de sa raison. 
	<span class="phrase-num">[5]</span> La théologie est une science, car elle procède de principes révélés par Dieu. 
	<span class="phrase-num">[6]</span> Il y a donc une double ordre de vérité, mais sans contradiction. 
	»`,
		reponses: {
			origine: "THOMAS D'AQUIN, <i>Somme théologique</i>, Ia, q. 1, a. 1, et <i>Somme contre les Gentils</i>, Paris : Cerf, 2017.",
			theme: "La raison",
			these: "La raison et la foi sont deux ordres de connaissance distincts mais complémentaires, la foi venant parfaire et guider la raison.",
			interet: "Il réalise la synthèse majeure de la philosophie chrétienne avec la pensée d'Aristote.",
			problematique: "La foi est-elle un obstacle ou un accomplissement pour la raison humaine ?"
		}
	},	
	// --------------------------------
	// TOCQUEVILLE
	// --------------------------------
	{
		id: 118,
		contenu: `« 
	<span class="phrase-num">[1]</span> Les peuples démocratiques ont un goût passionné pour l'égalité. 
	<span class="phrase-num">[2]</span> L'égalité peut se concilier avec une certaine idée de liberté, mais elle prédispose aussi les hommes à vouloir un pouvoir tutélaire, immense et doux qui les maintienne dans leur minorité. 
	<span class="phrase-num">[3]</span> La tyrannie de la majorité est le principal danger des démocraties. 
	<span class="phrase-num">[4]</span> L'individualisme, fruit de l'égalité, détache chaque homme de ses semblables et le replie sur lui-même. 
	<span class="phrase-num">[5]</span> La liberté politique, l'association et les corps intermédiaires sont les remèdes à ces maux. 
	<span class="phrase-num">[6]</span> C'est en faisant participer les citoyens au gouvernement qu'on les arrache à l'individualisme. 
	»`,
		reponses: {
			origine: "Alexis de TOCQUEVILLE, <i>De la démocratie en Amérique</i>, Vol. II, Paris : Gallimard, 2016.",
			theme: "La liberté",
			these: "La démocratie, fondée sur l'égalité, porte en elle le double risque de la tyrannie de la majorité et d'un nouvel absolutisme doux (le despotisme).",
			interet: "Il analyse les promesses et les périls de la démocratie moderne, anticipant les dérives possibles des sociétés égalitaires.",
			problematique: "Le développement de l'égalité favorise-t-il la liberté ou conduit-il à de nouvelles formes de servitude ?"
		}
	},
	// --------------------------------
	// VICO
	// --------------------------------
	{
		id: 119,
		contenu: `« 
	<span class="phrase-num">[1]</span> Le vrai est identique au fait (verum ipsum factum). 
	<span class="phrase-num">[2]</span> On ne peut connaître véritablement que ce que l'on a fait soi-même. 
	<span class="phrase-num">[3]</span> L'histoire des nations est plus certaine que la physique, car c'est l'homme qui l'a faite. 
	<span class="phrase-num">[4]</span> La nature divine, en revanche, nous échappe car seul Dieu la connaît. 
	<span class="phrase-num">[5]</span> Les sociétés humaines parcourent des cycles (corsi e ricorsi) : âge des dieux, des héros, des hommes. 
	<span class="phrase-num">[6]</span> La philosophie doit s'unir à la philologie pour connaître le vrai dans le certain. 
	»`,
		reponses: {
			origine: "Giambattista VICO, <i>La Science nouvelle</i>, livre I, Paris : Gallimard, 2015.",
			theme: "Le temps",
			these: "La connaissance authentique est une construction (le \"faire\") : on ne connaît vraiment que ce que l'on a créé, comme l'histoire et les institutions humaines.",
			interet: "Il fonde la philosophie de l'histoire et s'oppose au cartésianisme en affirmant la spécificité et la supériorité du savoir historique.",
			problematique: "La connaissance historique est-elle plus certaine que la connaissance de la nature parce que l'homme en est l'auteur ou cette certitude n'est-elle qu'apparente, l'histoire échappant elle aussi à la pleine maîtrise de ses acteurs ?"
		}
	},
	// --------------------------------
	// WEBER
	// --------------------------------
	{
		id: 120,
		contenu: `« 
	<span class="phrase-num">[1]</span> L'esprit du capitalisme est né de l'ascétisme protestant, notamment calviniste. 
	<span class="phrase-num">[2]</span> La profession (Beruf) devient une vocation divine. 
	<span class="phrase-num">[3]</span> Le travail acharné et la réussite professionnelle sont des signes d'élection. 
	<span class="phrase-num">[4]</span> Le gain, autrefois suspect, devient un devoir. 
	<span class="phrase-num">[5]</span> Mais cette éthique, une fois le capitalisme établi, perd son fondement religieux. 
	<span class="phrase-num">[6]</span> L'homme moderne est enfermé dans une \" cage d'acier \" (stahlhartes Gehäuse) : il est condamné au travail pour le travail, sans autre finalité que lui-même. 
	»`,
		reponses: {
			origine: "Max WEBER, <i>L'Éthique protestante et l'esprit du capitalisme</i>, Paris : Gallimard, 2016.",
			theme: "Le travail",
			these: "L'éthique protestante, en donnant une valeur religieuse au travail, a joué un rôle décisif dans la naissance et le développement du capitalisme moderne.",
			interet: "Il propose une explication sociologique et culturelle du capitalisme, liant croyances religieuses et comportements économiques.",
			problematique: "Le travail est-il une simple nécessité économique ou trouve-t-il son origine et sa justification dans des croyances religieuses et morales ?"
		}
	},
	// --------------------------------
	// WEIL
	// --------------------------------
	{
		id: 121,
		contenu: `« 
	<span class="phrase-num">[1]</span> La force, c'est ce qui fait de celui qui lui est soumis une chose. 
	<span class="phrase-num">[2]</span> L'attention est la forme la plus rare et la plus pure de la générosité. 
	<span class="phrase-num">[3]</span> L'usage des mots \" je \" et \" nous \" est souvent une usurpation. 
	<span class="phrase-num">[4]</span> Le malheur est un déracinement de la vie, un équivalent du froid qui brûle. 
	<span class="phrase-num">[5]</span> La justice consiste à voir l'autre non pas comme un autre moi-même, mais comme un être humain absolument autre. 
	<span class="phrase-num">[6]</span> La beauté du monde est la présence réelle de Dieu dans la matière. 
	»`,
		reponses: {
			origine: "Simone WEIL, <i>La Pesanteur et la Grâce</i>, et <i>L'Enracinement</i>, Paris : Plon, 2016.",
			theme: "Le devoir",
			these: "La source de l'obligation morale ne se trouve pas dans les droits de l'individu, mais dans les besoins éternels de l'âme humaine et dans la reconnaissance de la réalité d'autrui.",
			interet: "Elle propose une philosophie morale exigeante, centrée sur l'attention, le déracinement et la justice envers le malheur d'autrui.",
			problematique: "Le fondement de la morale est-il dans les droits de l'individu ou dans ses obligations envers l'autre ?"
		}
	},
	// --------------------------------
	// WITTGENSTEIN
	// --------------------------------
	{
		id: 122,
		contenu: `« 
	<span class="phrase-num">[1]</span> La plupart des propositions et des questions qu'on a écrites sur les matières philosophiques ne sont pas fausses, mais sont dénuées de sens. 
	<span class="phrase-num">[2]</span> Les problèmes philosophiques surviennent quand le langage part en vacances. 
	<span class="phrase-num">[3]</span> La signification d'un mot, c'est son usage dans le langage (jeux de langage). 
	<span class="phrase-num">[4]</span> Ce dont on ne peut parler, il faut le taire. 
	<span class="phrase-num">[5]</span> La philosophie n'est pas une théorie, mais une activité de clarification. 
	<span class="phrase-num">[6]</span> Le but de la philosophie est de rendre à la mouche la sortie du bocal à mouches. 
	»`,
		reponses: {
			origine: "Ludwig WITTGENSTEIN, <i>Tractatus logico-philosophicus</i>, Préface et §4.003, et <i>Recherches philosophiques</i>, §43, Paris : Gallimard, 2016.",
			theme: "Le langage",
			these: "Les problèmes philosophiques ne sont pas de vrais problèmes, mais des confusions linguistiques qu'il faut dissoudre en clarifiant l'usage des mots.",
			interet: "Il opère un tournant majeur dans la philosophie du langage, en passant d'une conception figurative du langage à une conception pragmatique (jeux de langage).",
			problematique: "Les problèmes de la philosophie sont-ils des mystères profonds ou des illusions produites par notre langage ?"
		}
	},
	// --------------------------------
	// ZHUANGZI
	// --------------------------------
	{
		id: 123,
		contenu: `« 
	<span class="phrase-num">[1]</span> Je rêvais que j'étais un papillon, un papillon qui voletait çà et là, en pleine possession de son plaisir. 
	<span class="phrase-num">[2]</span> Je ne savais pas que j'étais Tchouang-tcheou. 
	<span class="phrase-num">[3]</span> Soudain je m'éveillai, et me voilà Tchouang-tcheou bien visible. 
	<span class="phrase-num">[4]</span> Je ne sais plus si c'est Tchouang-tcheou qui a rêvé qu'il était un papillon, ou si c'est le papillon qui rêve qu'il est Tchouang-tcheou. 
	<span class="phrase-num">[5]</span> Le sage accepte la transformation de toutes choses. 
	<span class="phrase-num">[6]</span> L'utile et l'inutile ne sont que des points de vue. 
	»`,
		reponses: {
			origine: "ZHUANGZI (Tchouang-tseu), <i>Œuvre complète</i>, chapitre II, Paris : Gallimard, 2017.",
			theme: "La conscience",
			these: "L'identité du moi est incertaine et fluide ; le sage vit en harmonie avec la transformation perpétuelle du monde, au-delà des distinctions rigides.",
			interet: "Il propose une philosophie taoïste du non-agir et de la relativité des points de vue, anticipant certaines réflexions sur l'identité.",
			problematique: "Le moi a-t-il une identité fixe ou n'est-il qu'une illusion face au flux perpétuel des choses ?"
		}
	}
];