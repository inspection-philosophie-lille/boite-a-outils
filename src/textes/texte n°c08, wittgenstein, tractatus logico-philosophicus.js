// ============================================================
// DONNÉES PARTAGÉES ENTRE PLUSIEURS APPLICATIONS
// ------------------------------------------------------------
// ⚠ Ce fichier est lu par plusieurs pages. 
// Chaque application lit uniquement les constantes qui la concernent
// ============================================================

// ============================================
// DONNÉES GÉNÉRALES
// ============================================

const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Wittgenstein (Tractatus)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] 4.111 – La philosophie n’est aucune des sciences de la nature. [2] Le mot « philosophie » doit signifier quelque chose qui est au-dessus ou au-dessous, mais non pas à côté des sciences de la nature.\n[3] 4.112 — Le but de la philosophie est la clarification logique de la pensée. [4] La philosophie n’est pas une doctrine mais une activité. [5] Une œuvre philosophique consiste essentiellement en élucidations. [6] Le résultat de la philosophie n’est pas un nombre de « propositions philosophiques », mais le fait que des propositions s’éclaircissent. [7] La philosophie a pour but de rendre claires et de délimiter rigoureusement les pensées qui autrement, pour ainsi dire, sont troubles et floues (…)\n[8] 6.53 — La juste méthode de la philosophie serait en somme la suivante : ne rien dire sinon ce qui se peut dire, donc les propositions des sciences de la nature — donc quelque chose qui n’a rien à voir avec la philosophie — et puis à chaque fois qu’un autre voudrait dire quelque chose de métaphysique, lui démontrer qu’il n’a pas donné de signification à certains signes dans ses propositions. [9] Cette méthode ne serait pas satisfaisante pour l’autre — il n’aurait pas le sentiment que nous lui enseignons la philosophie — mais elle serait la seule rigoureusement juste. »",
	source: "Ludwig Wittgenstein, <em>Tractatus logico-philosophicus</em>, propositions 4.111, 4.112, 6.53, trad. Pierre Klossowski, Gallimard, 1961"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["Bertrand Russell", "Ludwig Wittgenstein", "Gottlob Frege"],
		correct: 2,
		explanation: "Le texte est extrait du *Tractatus logico-philosophicus*, l'œuvre majeure du philosophe autrichien Ludwig Wittgenstein."
	},
	{
		question: "Question n°2 : De quelle œuvre ce passage est-il tiré ?",
		answers: ["Investigations philosophiques", "Tractatus logico-philosophicus", "De la certitude"],
		correct: 2,
		explanation: "La numérotation décimale (4.111, 6.53) et le contenu sont caractéristiques du *Tractatus logico-philosophicus*."
	},
	{
		question: "Question n°3 : Qui est le traducteur de cette édition française ?",
		answers: ["Jacques Bouveresse", "Pierre Klossowski", "Gilles Deleuze"],
		correct: 2,
		explanation: "La source indique explicitement la traduction de Pierre Klossowski, publiée dans la collection Tel chez Gallimard en 1961."
	},
	{
		question: "Question n°4 : Selon la proposition 4.111, la philosophie est-elle une science de la nature ?",
		answers: ["Oui, c'est la science suprême", "Non, elle n'est aucune des sciences de la nature", "Oui, mais seulement la physique"],
		correct: 2,
		explanation: "Le texte l'affirme sans équivoque : « La philosophie n’est aucune des sciences de la nature »."
	},
	{
		question: "Question n°5 : Quelle position la philosophie doit-elle occuper par rapport aux sciences de la nature ?",
		answers: ["À côté d'elles", "Au-dessus ou au-dessous, mais non pas à côté", "En opposition frontale"],
		correct: 2,
		explanation: "Wittgenstein précise : « Le mot « philosophie » doit signifier quelque chose qui est au-dessus ou au-dessous, mais non pas à côté des sciences de la nature »."
	},
	{
		question: "Question n°6 : Quel est le but de la philosophie selon la proposition 4.112 ?",
		answers: ["Découvrir les secrets de l'univers", "La clarification logique de la pensée", "Établir une morale universelle"],
		correct: 2,
		explanation: "Le texte déclare : « Le but de la philosophie est la clarification logique de la pensée »."
	},
	{
		question: "Question n°7 : Comment Wittgenstein définit-il la philosophie en opposition à une « doctrine » ?",
		answers: ["Comme une religion", "Comme une activité", "Comme une science exacte"],
		correct: 2,
		explanation: "Il écrit explicitement : « La philosophie n’est pas une doctrine mais une activité »."
	},
	{
		question: "Question n°8 : En quoi consiste essentiellement une œuvre philosophique ?",
		answers: ["En démonstrations mathématiques", "En élucidations", "En récits historiques"],
		correct: 2,
		explanation: "Le texte affirme : « Une œuvre philosophique consiste essentiellement en élucidations »."
	},
	{
		question: "Question n°9 : Quel est le véritable résultat de la philosophie ?",
		answers: ["Un nombre de « propositions philosophiques »", "Le fait que des propositions s’éclaircissent", "La découverte de nouvelles entités métaphysiques"],
		correct: 2,
		explanation: "Wittgenstein insiste : « Le résultat de la philosophie n’est pas un nombre de « propositions philosophiques », mais le fait que des propositions s’éclaircissent »."
	},
	{
		question: "Question n°10 : Quel est l'état des pensées avant l'intervention de la philosophie ?",
		answers: ["Claires et distinctes", "Troubles et floues", "Inexistantes"],
		correct: 2,
		explanation: "La philosophie vise à rendre claires les pensées « qui autrement, pour ainsi dire, sont troubles et floues »."
	},
	{
		question: "Question n°11 : Que doit faire la philosophie avec les pensées, selon le texte ?",
		answers: ["Les amplifier", "Les rendre claires et les délimiter rigoureusement", "Les supprimer"],
		correct: 2,
		explanation: "Le but est de « rendre claires et de délimiter rigoureusement les pensées »."
	},
	{
		question: "Question n°12 : Quelle est la « juste méthode de la philosophie » selon la proposition 6.53 ?",
		answers: ["Proposer de nouvelles théories métaphysiques", "Ne rien dire sinon ce qui se peut dire", "Ignorer les sciences de la nature"],
		correct: 2,
		explanation: "La méthode est énoncée ainsi : « ne rien dire sinon ce qui se peut dire »."
	},
	{
		question: "Question n°13 : Que peut-on dire, selon cette méthode ?",
		answers: ["Les propositions des sciences de la nature", "Les jugements de valeur", "Les mystères de l'âme"],
		correct: 1,
		explanation: "Le texte précise : « ne rien dire sinon ce qui se peut dire, donc les propositions des sciences de la nature »."
	},
	{
		question: "Question n°14 : Quel rapport les propositions des sciences de la nature ont-elles avec la philosophie ?",
		answers: ["Elles en sont le fondement", "Elles n'ont rien à voir avec la philosophie", "Elles en sont la conclusion"],
		correct: 2,
		explanation: "Wittgenstein ajoute entre tirets : « donc quelque chose qui n’a rien à voir avec la philosophie »."
	},
	{
		question: "Question n°15 : Que faut-il faire lorsqu'une personne veut dire quelque chose de métaphysique ?",
		answers: ["L'encourager à développer sa pensée", "Lui démontrer qu'il n'a pas donné de signification à certains signes", "L'ignorer poliment"],
		correct: 2,
		explanation: "La méthode prescrit de « lui démontrer qu’il n’a pas donné de signification à certains signes dans ses propositions »."
	},
	{
		question: "Question n°16 : Comment l'interlocuteur réagira-t-il à cette méthode, selon Wittgenstein ?",
		answers: ["Il sera pleinement satisfait", "Cette méthode ne serait pas satisfaisante pour lui", "Il deviendra immédiatement philosophe"],
		correct: 2,
		explanation: "Le texte anticipe : « Cette méthode ne serait pas satisfaisante pour l’autre »."
	},
	{
		question: "Question n°17 : Pourquoi cette méthode serait-elle insatisfaisante pour l'interlocuteur ?",
		answers: ["Parce qu'elle est trop complexe", "Parce qu'il n'aurait pas le sentiment qu'on lui enseigne la philosophie", "Parce qu'elle contredit la Bible"],
		correct: 2,
		explanation: "Wittgenstein explique : « il n’aurait pas le sentiment que nous lui enseignons la philosophie »."
	},
	{
		question: "Question n°18 : Malgré cette insatisfaction, quel est le statut de cette méthode ?",
		answers: ["Elle est approximative", "Elle est la seule rigoureusement juste", "Elle est provisoire"],
		correct: 2,
		explanation: "La conclusion est ferme : « mais elle serait la seule rigoureusement juste »."
	},
	{
		question: "Question n°19 : Que signifie « élucidation » dans ce contexte ?",
		answers: ["L'ajout de détails poétiques", "L'action de rendre clair, d'expliquer la structure logique", "La création d'un nouveau langage"],
		correct: 2,
		explanation: "Une élucidation (ou clarification) vise à dissiper la confusion logique, non à ajouter du contenu factuel."
	},
	{
		question: "Question n°20 : Pourquoi la philosophie est-elle une « activité » et non une « doctrine » ?",
		answers: ["Parce qu'elle ne produit pas un corps de connaissances positives, mais un travail de clarification du langage", "Parce qu'elle est réservée aux sportifs", "Parce qu'elle change tout le temps d'avis"],
		correct: 1,
		explanation: "Une doctrine est un ensemble de thèses ; une activité est un processus (ici, l'analyse logique) qui ne laisse pas de « propositions philosophiques » en héritage, mais des propositions éclaircies."
	},
	{
		question: "Question n°21 : Que désignent les « signes » dans la proposition 6.53 ?",
		answers: ["Les panneaux de signalisation", "Les mots ou symboles utilisés dans les propositions", "Les événements mystiques"],
		correct: 2,
		explanation: "En logique et en philosophie du langage, les « signes » sont les éléments physiques (mots, symboles) qui, s'ils ne sont pas correctement liés par des règles, n'ont pas de « signification » (sens)."
	},
	{
		question: "Question n°22 : Quelle est la cible principale de la critique de Wittgenstein dans ce texte ?",
		answers: ["La physique quantique", "La métaphysique traditionnelle", "La littérature romantique"],
		correct: 2,
		explanation: "La proposition 6.53 vise explicitement celui qui « voudrait dire quelque chose de métaphysique », montrant que la métaphysique est un mauvais usage du langage."
	},
	{
		question: "Question n°23 : Que signifie l'expression « au-dessus ou au-dessous » des sciences de la nature ?",
		answers: ["Que la philosophie est soit divine, soit animale", "Que la philosophie est soit la condition de possibilité (au-dessus), soit l'analyse logique du langage des sciences (au-dessous)", "Que la philosophie est inférieure aux sciences"],
		correct: 2,
		explanation: "La philosophie n'est pas une science concurrente (à côté). Elle est soit la logique qui sous-tend les sciences (au-dessous), soit la réflexion sur les limites du langage et du monde (au-dessus)."
	},
	{
		question: "Question n°24 : Quel est le paradoxe apparent du *Tractatus* lui-même, à la lumière de ce texte ?",
		answers: ["Il n'y a aucun paradoxe", "C'est un livre de philosophie qui affirme que les propositions philosophiques ne sont pas le but de la philosophie", "Il est écrit en vers"],
		correct: 2,
		explanation: "Le *Tractatus* est composé de « propositions philosophiques », alors que 4.112 dit que le résultat n'est pas un nombre de telles propositions. Wittgenstein le reconnaîtra en disant que ses propres propositions sont des échelles à jeter après usage."
	},
	{
		question: "Question n°25 : Que signifie « délimiter rigoureusement » ?",
		answers: ["Tracer des frontières géographiques", "Définir avec précision les conditions de sens et d'application d'une pensée", "Limiter la liberté de pensée"],
		correct: 2,
		explanation: "Il s'agit de montrer exactement ce qu'une proposition peut dire et, surtout, ce qu'elle ne peut pas dire (ses limites logiques)."
	},
	{
		question: "Question n°26 : Pourquoi les pensées sont-elles « troubles et floues » sans la philosophie ?",
		answers: ["Parce que le cerveau humain est défectueux", "Parce que le langage ordinaire masque la structure logique de la pensée", "Parce que la vérité est subjective"],
		correct: 2,
		explanation: "Pour Wittgenstein, la grammaire de surface du langage naturel induit en erreur et crée des pseudo-problèmes philosophiques (les pensées troubles)."
	},
	{
		question: "Question n°27 : Quel est le rôle des « sciences de la nature » dans ce schéma ?",
		answers: ["Elles disent tout ce qui peut être dit de manière sensée (les faits du monde)", "Elles sont fausses", "Elles doivent être remplacées par la philosophie"],
		correct: 1,
		explanation: "Les sciences de la nature ont le monopole des « propositions » ayant un sens descriptif. La philosophie ne les contredit pas, elle clarifie leur logique."
	},
	{
		question: "Question n°28 : Que signifie « ne rien dire sinon ce qui se peut dire » ?",
		answers: ["Se taire absolument", "Se limiter aux propositions qui ont un sens logique vérifiable (comme les sciences)", "Ne parler que de soi"],
		correct: 2,
		explanation: "C'est le principe de la limite du langage sensé : tout ce qui n'est pas proposition scientifique (ou tautologie logique) est soit du non-sens, soit de l'indicible."
	},
	{
		question: "Question n°29 : En quoi la méthode de Wittgenstein est-elle « thérapeutique » ?",
		answers: ["Elle soigne le corps", "Elle guérit l'esprit des maladies causées par le mauvais usage du langage", "Elle prescrit des médicaments"],
		correct: 2,
		explanation: "En montrant que les problèmes métaphysiques sont des confusions linguistiques, la philosophie « guérit » le philosophe de l'envie de poser ces questions."
	},
	{
		question: "Question n°30 : Que révèle l'usage des tirets dans le texte ?",
		answers: ["Une hésitation de l'auteur", "Des incises explicatives ou des précisions logiques", "Des dialogues entre personnages"],
		correct: 2,
		explanation: "Les tirets introduisent des précisions ou des conséquences logiques immédiates (ex: « — donc quelque chose qui n’a rien à voir avec la philosophie — »)."
	},
	{
		question: "Question n°31 : Pourquoi l'interlocuteur métaphysicien se sent-il frustré ?",
		answers: ["Parce qu'il veut des réponses sur le sens de la vie, et on lui répond par une analyse logique du langage", "Parce qu'il ne comprend pas le français", "Parce qu'il est de mauvaise foi"],
		correct: 1,
		explanation: "Le métaphysicien cherche un savoir substantiel ; la méthode wittgensteinienne ne lui offre qu'une dissolution de sa question, ce qui ne ressemble pas à un « enseignement » traditionnel."
	},
	{
		question: "Question n°32 : Que signifie le mot « doctrine » dans ce contexte ?",
		answers: ["Un ensemble de thèses dogmatiques sur le monde", "Une méthode scientifique", "Une règle de vie"],
		correct: 1,
		explanation: "Une doctrine prétend décrire la réalité (comme la physique ou la métaphysique). Wittgenstein refuse ce statut à la philosophie."
	},
	{
		question: "Question n°33 : Quelle est la relation entre la philosophie et le langage selon ce texte ?",
		answers: ["La philosophie crée de nouveaux mots", "La philosophie est une activité de clarification du langage", "La philosophie ignore le langage"],
		correct: 2,
		explanation: "Tout le texte tourne autour de la clarification des « pensées », des « propositions » et de la « signification » des « signes »."
	},
	{
		question: "Question n°34 : Que se passe-t-il quand on donne une « signification » à des signes ?",
		answers: ["On crée un poème", "On forme une proposition qui a du sens (ou on démontre qu'on ne l'a pas fait)", "On devient riche"],
		correct: 2,
		explanation: "Donner une signification, c'est respecter les règles de la logique et de la syntaxe pour que la proposition représente un état de choses possible."
	},
	{
		question: "Question n°35 : En quoi ce texte annonce-t-il la philosophie analytique ?",
		answers: ["Il rejette l'analyse", "Il fait de l'analyse logique du langage la tâche centrale de la philosophie", "Il prône la synthèse mystique"],
		correct: 2,
		explanation: "La « clarification logique de la pensée » est le programme fondateur de la philosophie analytique du XXe siècle."
	},
	{
		question: "Question n°36 : Que signifie « le fait que des propositions s’éclaircissent » ?",
		answers: ["Elles deviennent plus longues", "Leur structure logique et leurs conditions de vérité deviennent visibles", "Elles sont traduites en latin"],
		correct: 2,
		explanation: "L'éclaircissement n'est pas l'ajout d'information, mais la mise en lumière de la logique interne d'une proposition."
	},
	{
		question: "Question n°37 : Pourquoi Wittgenstein utilise-t-il le conditionnel (« serait », « voudrait ») en 6.53 ?",
		answers: ["Parce qu'il doute de sa méthode", "Pour décrire une méthode idéale ou contrefactuelle, reconnaissant qu'elle est difficilement applicable dans la pratique", "Parce qu'il traduit mal"],
		correct: 2,
		explanation: "Il décrit la « juste méthode » de manière théorique, tout en concédant immédiatement qu'elle ne satisferait pas l'interlocuteur, montrant le décalage entre l'idéal logique et la pratique humaine."
	},
	{
		question: "Question n°38 : Que peut-on déduire de l'affirmation « La philosophie n’est aucune des sciences de la nature » ?",
		answers: ["Que la philosophie est inférieure", "Que la philosophie n'a pas pour objet l'étude des faits empiriques du monde", "Que la philosophie est une science sociale"],
		correct: 2,
		explanation: "Les sciences de la nature étudient les faits. La philosophie, elle, étudie la logique du langage qui décrit ces faits."
	},
	{
		question: "Question n°39 : Quel est le ton de la proposition 6.53 ?",
		answers: ["Poétique et émouvant", "Prescriptif, rigoureux et sans compromis", "Humoristique et léger"],
		correct: 2,
		explanation: "Les termes « juste méthode », « rigoureusement juste », « démontrer » indiquent un ton normatif et strict."
	},
	{
		question: "Question n°40 : En quoi la philosophie est-elle « au-dessous » des sciences de la nature ?",
		answers: ["Elle est moins importante", "Elle fournit la base logique et syntaxique qui rend les énoncés scientifiques possibles", "Elle est obsolète"],
		correct: 2,
		explanation: "Elle est « au-dessous » car elle analyse les fondements logiques du langage que les sciences utilisent pour décrire le monde."
	},
	{
		question: "Question n°41 : Que signifie l'expression « pour ainsi dire » dans « pour ainsi dire, sont troubles et floues » ?",
		answers: ["Une certitude absolue", "Une métaphore ou une approximation pour décrire l'état pré-philosophique de la pensée", "Un doute sur l'existence de la pensée"],
		correct: 2,
		explanation: "Wittgenstein utilise cette formule pour indiquer qu'il s'agit d'une image (le flou visuel) appliquée à la logique."
	},
	{
		question: "Question n°42 : Quel est l'objectif final de la démonstration face au métaphysicien ?",
		answers: ["Le convertir à la science", "Lui faire reconnaître le non-sens de sa propre entreprise", "Gagner le débat"],
		correct: 2,
		explanation: "Il s'agit de lui montrer qu'il « n’a pas donné de signification à certains signes », c'est-à-dire qu'il parle sans dire quoi que ce soit de logique."
	},
	{
		question: "Question n°43 : Comment ce texte définit-il implicitement la « métaphysique » ?",
		answers: ["Comme la science la plus élevée", "Comme une tentative d'utiliser le langage en dehors de ses limites significatives", "Comme l'étude de l'être"],
		correct: 2,
		explanation: "Pour Wittgenstein, la métaphysique est le résultat d'un mauvais usage du langage, une tentative de dire ce qui ne peut pas être dit."
	},
	{
		question: "Question n°44 : Que signifie le mot « juste » dans « la seule rigoureusement juste » ?",
		answers: ["Équitable", "Logiquement correcte et exacte", "Moralement bonne"],
		correct: 2,
		explanation: "Il s'agit d'une justesse logique et méthodologique, non d'une justice morale."
	},
	{
		question: "Question n°45 : Pourquoi le résultat de la philosophie n'est-il pas des « propositions philosophiques » ?",
		answers: ["Parce que les philosophes sont paresseux", "Parce que toute proposition philosophique traditionnelle est soit une tautologie, soit un non-sens", "Parce que la philosophie ne s'écrit pas"],
		correct: 2,
		explanation: "Selon la théorie du *Tractatus*, une proposition a du sens si elle décrit un fait. Les propositions philosophiques ne décrivent pas de faits, elles tentent de parler de la logique du monde, ce qui est impossible à « dire », seulement à « montrer »."
	},
	{
		question: "Question n°46 : Quelle est la fonction de la numérotation (4.111, 4.112, 6.53) ?",
		answers: ["Des numéros de page", "Une structure hiérarchique et logique des propositions, où les décimales sont des commentaires ou des développements", "Un code secret"],
		correct: 2,
		explanation: "Le système décimal du *Tractatus* indique le niveau de profondeur logique : 4 est un thème, 4.1 un sous-thème, 4.11 un commentaire de 4.1, etc."
	},
	{
		question: "Question n°47 : En quoi ce texte est-il une « élucidation » de lui-même ?",
		answers: ["Il ne l'est pas", "Il clarifie ce que fait le livre lui-même : il ne propose pas une doctrine, mais une activité de clarification", "Il est écrit en langage binaire"],
		correct: 2,
		explanation: "En lisant 4.112, le lecteur comprend que les propositions du *Tractatus* ne sont pas des vérités à croire, mais des outils pour clarifier sa propre pensée."
	},
	{
		question: "Question n°48 : Que signifie « ne rien dire » dans le contexte de 6.53 ?",
		answers: ["Le mutisme total", "S'abstenir d'énoncer des propositions qui n'ont pas de sens logique", "Ne pas répondre aux questions"],
		correct: 2,
		explanation: "C'est l'application du célèbre dernier mot du *Tractatus* : « Sur ce dont on ne peut parler, il faut garder le silence ». »"
	},
	{
		question: "Question n°49 : Quelle est la portée de ce texte pour l'histoire de la philosophie ?",
		answers: ["Aucune", "Il opère un « tournant linguistique », faisant du langage l'objet central de la réflexion philosophique", "Il marque la fin de la logique"],
		correct: 2,
		explanation: "Ce texte est l'un des piliers du tournant linguistique, déplaçant la philosophie de l'étude de la conscience ou de l'être vers l'analyse du langage."
	},
	{
		question: "Question n°50 : Quelle est la leçon ultime de ce passage pour celui qui veut « faire de la philosophie » ?",
		answers: ["Il doit mémoriser les grands auteurs", "Il doit cesser de chercher des réponses métaphysiques et commencer à analyser la logique de ce qui est dit", "Il doit devenir physicien"],
		correct: 2,
		explanation: "La philosophie n'est pas une quête de vérités cachées, mais un travail rigoureux de nettoyage logique du langage pour dissiper les confusions."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "Nature et méthode de la philosophie (Tractatus)" },
		{ key: 1, parent: 0, text: "Ce qu'elle n'est pas" },
		{ key: 2, parent: 1, text: "[4.111] Aucune des sciences de la nature" },
		{ key: 3, parent: 1, text: "[4.112] Pas une doctrine" },
		{ key: 4, parent: 1, text: "[4.112] Pas un ensemble de propositions philosophiques" },
		{ key: 5, parent: 0, text: "Ce qu'elle est" },
		{ key: 6, parent: 5, text: "[4.111] Au-dessus ou au-dessous des sciences" },
		{ key: 7, parent: 5, text: "[4.112] Une activité" },
		{ key: 8, parent: 5, text: "[4.112] Un travail d'élucidation" },
		{ key: 9, parent: 0, text: "Son but" },
		{ key: 10, parent: 9, text: "[4.112] Clarification logique de la pensée" },
		{ key: 11, parent: 9, text: "[4.112] Rendre claires et délimiter les pensées troubles" },
		{ key: 12, parent: 0, text: "La juste méthode (6.53)" },
		{ key: 13, parent: 12, text: "Ne dire que ce qui se peut dire (sciences de la nature)" },
		{ key: 14, parent: 12, text: "Démontrer l'absence de signification des signes métaphysiques" },
		{ key: 15, parent: 12, text: "Méthode insatisfaisante pour l'interlocuteur, mais rigoureusement juste" }
	]
};

// ============================================
// APP : EXPLICATION DE TEXTE
// ============================================

const textes = [
	{
		contenu: philosophyData.texte,
		source: philosophyData.source,
		reponses: {
			origine: "Ludwig Wittgenstein, Tractatus logico-philosophicus, propositions 4.111, 4.112, 6.53",
			theme: "La vérité",
			these: "La philosophie n'est pas une doctrine produisant des vérités métaphysiques, mais une activité de clarification logique du langage, dont le but est de délimiter ce qui peut être dit de manière sensée (la vérité scientifique) et de révéler le non-sens des propositions métaphysiques.",
			interet: "Ce texte est fondateur pour la philosophie analytique car il opère un tournant radical : la quête de la vérité ne passe plus par la découverte de réalités cachées, mais par l'élucidation des conditions de sens du langage. Il dissout les pseudo-problèmes traditionnels en montrant qu'ils résultent d'un mauvais usage des signes, réservant la vérité aux seules propositions vérifiables des sciences de la nature.",
			problematique: "En quoi la redéfinition de la philosophie comme une activité de clarification logique permet-elle de délimiter rigoureusement le domaine de la vérité (ce qui peut être dit) et de démasquer l'illusion des prétentions métaphysiques ?"
		}
	}
];

// ============================================
// APP : ALGORIGRAMME
// ------------------------------------------------------------
// BLOC RÉÉCRIT AUTOMATIQUEMENT PAR L'ÉDITEUR LORS D'UN EXPORT.
// Ne rien ajouter APRÈS ce bloc : un export ne conserverait que
// ce qui le précède + le bloc régénéré.
// ------------------------------------------------------------
// Le nom de la variable doit commencer par « algorigramme ».
// ============================================

const algorigramme = {
	"nodeDataArray": [
		{
			"key": "1",
			"text": "DÉBUT\nQu'est-ce que la philosophie ?",
			"loc": "217.18 120",
			"category": "ellipse",
			"color": "#74b9ff",
			"borderColor": "#286DB3",
			"width": 220,
			"height": 100,
			"revealed": true
		},
		{
			"key": "2",
			"text": "Est-ce une science\nde la nature ou\nune doctrine ?",
			"loc": "480 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "3",
			"text": "[4.111-4.112] NON.\nElle est au-dessus ou\nau-dessous des sciences.\nC'est une activité\nd'élucidation.",
			"loc": "480 259.98",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "4",
			"text": "Quel est son but ?",
			"loc": "760.53 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "5",
			"text": "[4.112] La clarification\nlogique de la pensée.\nRendre claires et\ndélimiter les pensées\ntroubles et floues.",
			"loc": "760.53 259.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "6",
			"text": "Quelle est la juste\nméthode face à une\nproposition métaphysique ?",
			"loc": "1034.36 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "7",
			"text": "[6.53] Lui démontrer\nqu'il n'a pas donné\nde signification\nà certains signes.\n(Méthode rigoureusement\njuste, bien qu'insatisfaisante).",
			"loc": "1034.36 266.25",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 120,
			"revealed": true
		},
		{
			"key": "8",
			"text": "FIN\nLes propositions\ns'éclaircissent.\nLa philosophie a\naccompli sa tâche.",
			"loc": "1331.05 120",
			"category": "ellipse",
			"color": "#74b9ff",
			"borderColor": "#286DB3",
			"width": 260,
			"height": 120,
			"revealed": true
		}
	],
	"linkDataArray": [
		{
			"from": "1",
			"to": "2",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "2",
			"to": "3",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "2",
			"to": "4",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "4",
			"to": "5",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "4",
			"to": "6",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "6",
			"to": "7",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "6",
			"to": "8",
			"fromSide": "right",
			"toSide": "left"
		}
	]
};
