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
const sousTitre = "Tester ses connaissances sur un texte de Descartes (Lettre au Père Mesland)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] … l’indifférence me semble signifier proprement l’état dans lequel est la volonté lorsqu’elle n’est pas poussée d’un côté plutôt que de l’autre par la perception du vrai ou du bien ; et c’est en ce sens que je l’ai prise lorsque j’ai écrit que le plus bas degré de la liberté est celui où nous nous déterminons aux choses pour lesquelles nous sommes indifférents. [2] Mais peut-être que d’autres entendent par indifférence une faculté positive de se déterminer pour l’un ou l’autre des deux contraires, c’est-à-dire pour poursuivre ou pour fuir, pour affirmer ou pour nier. [3] Cette faculté positive, je n’ai pas nié qu’elle fut dans la volonté. [4] Bien plus, j’estime qu’elle y est, non seulement dans ces actes où elle n’est pas poussée par des raisons évidentes d’un côté plutôt que de l’autre, mais aussi dans tous les autres ; à ce point que, lorsqu’une raison très évidente nous porte d’un côté, bien que, moralement parlant, nous ne puissions guère aller à l’opposé, absolument parlant, néanmoins, nous le pourrions. [5] En effet, il nous est toujours possible de nous retenir de poursuivre un bien clairement connu ou d’admettre une vérité évidente, pourvu que nous pensions que c’est un bien d’affirmer par là notre libre arbitre.\n[6] De plus, il faut remarquer que la liberté peut être considérée dans les actions de la volonté avant l’accomplissement ou pendant l’accomplissement.\n[7] Considérée dans ces actions avant l’accomplissement, elle implique l’indifférence prise au second sens, non au premier. [8] Et bien que nous puissions dire, quand nous opposons notre propre jugement aux commandements des autres, que nous sommes plus libres de faire les choses pour lesquelles rien ne nous a été prescrit par les autres et dans lesquelles il nous est permis de suivre notre propre jugement que de faire celles qui nous sont interdites, nous ne pouvons pas dire de la même façon, quand nous opposons les uns aux autres nos jugements ou nos connaissances, que nous sommes plus libres de faire les choses qui ne nous semblent ni bonnes ni mauvaises, ou dans lesquelles nous voyons autant de bien que de mal que de faire celles où nous voyons beaucoup plus de bien que de mal. [9] Une plus grande liberté consiste en effet ou bien dans une plus grande facilité de se déterminer, ou bien dans un plus grand usage de cette puissance positive que nous avons de suivre le pire, tout en voyant le meilleur. [10] Si nous prenons le parti où nous voyons le plus de bien, nous nous déterminons plus facilement ; si nous suivons le parti contraire, nous usons davantage de cette puissance positive ; ainsi, nous pouvons toujours agir plus librement dans les choses où nous voyons plus de bien que de mal, que dans les choses appelées par nous indifférentes. [11] En ce sens on peut même dire que les choses qui nous sont commandées par les autres et que sans cela nous ne ferions point de nous-mêmes, nous les faisons moins librement que celles qui ne nous sont pas commandées ; parce que le jugement qu’elles sont difficiles à faire est opposé au jugement qu’il est bon de faire ce qui est commandé, et, ces deux jugements, plus ils nous meuvent également, plus ils mettent en nous d’indifférence prise au premier sens.\n[12] (...) C’est en ce sens que j’ai écrit que je suis porté d’autant plus librement vers quelque chose que je suis poussé par plus de raisons, car il est certain que notre volonté se meut avec plus de facilité et d’élan. »",
	source: "René Descartes, <em>Lettre au Père Mesland</em>, 9 février 1645"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de cette lettre ?",
		answers: ["Blaise Pascal", "René Descartes", "Nicolas Malebranche"],
		correct: 2,
		explanation: "Le texte est une célèbre lettre de René Descartes adressée au Père Mesland."
	},
	{
		question: "Question n°2 : À qui cette lettre est-elle adressée ?",
		answers: ["Au Père Mersenne", "Au Père Mesland", "À la princesse Élisabeth"],
		correct: 2,
		explanation: "La source indique explicitement : « Lettre au Père Mesland »."
	},
	{
		question: "Question n°3 : En quelle année cette lettre a-t-elle été écrite ?",
		answers: ["1637", "1641", "1645"],
		correct: 3,
		explanation: "La date indiquée est le 9 février 1645."
	},
	{
		question: "Question n°4 : Selon le §1, que signifie proprement l'« indifférence » au premier sens ?",
		answers: ["La capacité de choisir n'importe quoi", "L'état de la volonté lorsqu'elle n'est pas poussée d'un côté plutôt que de l'autre", "Le refus de toute action"],
		correct: 2,
		explanation: "Descartes la définit comme « l’état dans lequel est la volonté lorsqu’elle n’est pas poussée d’un côté plutôt que de l’autre par la perception du vrai ou du bien »."
	},
	{
		question: "Question n°5 : Quel est, selon Descartes, le « plus bas degré de la liberté » ?",
		answers: ["Celui où nous sommes poussés par des raisons évidentes", "Celui où nous nous déterminons aux choses pour lesquelles nous sommes indifférents", "Celui où nous obéissons à autrui"],
		correct: 2,
		explanation: "Il écrit : « le plus bas degré de la liberté est celui où nous nous déterminons aux choses pour lesquelles nous sommes indifférents »."
	},
	{
		question: "Question n°6 : Quel second sens de l'« indifférence » Descartes évoque-t-il au §2 ?",
		answers: ["Une ignorance totale", "Une faculté positive de se déterminer pour l'un ou l'autre des deux contraires", "Une paralysie de la volonté"],
		correct: 2,
		explanation: "Il mentionne : « une faculté positive de se déterminer pour l’un ou l’autre des deux contraires »."
	},
	{
		question: "Question n°7 : Que signifie « se déterminer pour l'un ou l'autre des deux contraires » ?",
		answers: ["Poursuivre ou fuir, affirmer ou nier", "Aimer ou haïr", "Savoir ou ignorer"],
		correct: 1,
		explanation: "Le texte précise : « c’est-à-dire pour poursuivre ou pour fuir, pour affirmer ou pour nier »."
	},
	{
		question: "Question n°8 : Descartes nie-t-il l'existence de cette « faculté positive » dans la volonté ?",
		answers: ["Oui, absolument", "Non, il ne l'a pas niée", "Il reste neutre sur la question"],
		correct: 2,
		explanation: "Il affirme clairement : « Cette faculté positive, je n’ai pas nié qu’elle fut dans la volonté »."
	},
	{
		question: "Question n°9 : Dans quels actes cette faculté positive est-elle présente, selon le §4 ?",
		answers: ["Uniquement dans les actes indifférents", "Dans tous les actes, y compris ceux poussés par des raisons évidentes", "Uniquement dans les actes moraux"],
		correct: 2,
		explanation: "Descartes estime qu'elle y est « non seulement dans ces actes où elle n’est pas poussée par des raisons évidentes..., mais aussi dans tous les autres »."
	},
	{
		question: "Question n°10 : Que signifie « moralement parlant » dans le §4 ?",
		answers: ["Selon les lois de la société", "Selon la force de la raison qui rend l'option opposée très peu probable", "Selon la religion"],
		correct: 2,
		explanation: "Moralement parlant, une raison très évidente nous porte d'un côté au point que nous n'irons guère à l'opposé, bien que ce soit absolument possible."
	},
	{
		question: "Question n°11 : Que signifie « absolument parlant » dans ce même contexte ?",
		answers: ["De manière métaphysique et réelle, la possibilité contraire subsiste", "De manière juridique", "De manière imaginaire"],
		correct: 1,
		explanation: "Absolument parlant, la volonté conserve la puissance de choisir le contraire, même face à une raison évidente."
	},
	{
		question: "Question n°12 : Comment est-il possible de se retenir de poursuivre un bien clairement connu (§5) ?",
		answers: ["Parce que nous sommes faibles", "Pourvu que nous pensions que c’est un bien d’affirmer par là notre libre arbitre", "Parce que le bien est en fait un mal"],
		correct: 2,
		explanation: "Descartes explique que nous pouvons choisir de ne pas suivre le bien évident si nous jugeons que l'affirmation de notre libre arbitre est un bien supérieur dans ce contexte."
	},
	{
		question: "Question n°13 : À quels moments la liberté peut-elle être considérée (§6) ?",
		answers: ["Avant l'accomplissement ou pendant l'accomplissement", "Uniquement avant l'action", "Uniquement après l'action"],
		correct: 1,
		explanation: "Le texte dit : « la liberté peut être considérée dans les actions de la volonté avant l’accomplissement ou pendant l’accomplissement »."
	},
	{
		question: "Question n°14 : Considérée avant l'accomplissement, la liberté implique quelle indifférence (§7) ?",
		answers: ["L'indifférence au premier sens", "L'indifférence au second sens (faculté positive)", "Aucune indifférence"],
		correct: 2,
		explanation: "« Considérée dans ces actions avant l’accomplissement, elle implique l’indifférence prise au second sens, non au premier »."
	},
	{
		question: "Question n°15 : Quand opposons-nous notre jugement aux commandements d'autres personnes, que pouvons-nous dire (§8) ?",
		answers: ["Que nous sommes moins libres", "Que nous sommes plus libres de suivre notre propre jugement que de faire ce qui est interdit", "Que nous sommes totalement déterminés"],
		correct: 2,
		explanation: "Nous sommes plus libres de faire les choses pour lesquelles rien ne nous a été prescrit et où nous pouvons suivre notre propre jugement."
	},
	{
		question: "Question n°16 : Pouvons-nous dire que nous sommes plus libres dans les choses qui nous semblent ni bonnes ni mauvaises que dans celles où nous voyons plus de bien que de mal ?",
		answers: ["Oui, absolument", "Non, nous ne pouvons pas dire cela de la même façon", "Cela dépend des circonstances"],
		correct: 2,
		explanation: "Descartes réfute cette idée : « nous ne pouvons pas dire de la même façon... que nous sommes plus libres de faire les choses qui ne nous semblent ni bonnes ni mauvaises... »."
	},
	{
		question: "Question n°17 : En quoi consiste une « plus grande liberté » selon le §9 ?",
		answers: ["Dans l'absence totale de motifs", "Dans une plus grande facilité de se déterminer, ou un plus grand usage de la puissance positive de suivre le pire", "Dans l'obéissance aveugle"],
		correct: 2,
		explanation: "Elle consiste « ou bien dans une plus grande facilité de se déterminer, ou bien dans un plus grand usage de cette puissance positive que nous avons de suivre le pire, tout en voyant le meilleur »."
	},
	{
		question: "Question n°18 : Si nous prenons le parti où nous voyons le plus de bien, que se passe-t-il (§10) ?",
		answers: ["Nous perdons notre liberté", "Nous nous déterminons plus facilement", "Nous agissons moins librement"],
		correct: 2,
		explanation: "« Si nous prenons le parti où nous voyons le plus de bien, nous nous déterminons plus facilement »."
	},
	{
		question: "Question n°19 : Si nous suivons le parti contraire (le pire en voyant le meilleur), que faisons-nous (§10) ?",
		answers: ["Nous usons davantage de notre puissance positive", "Nous agissons par habitude", "Nous sommes déterminés par autrui"],
		correct: 1,
		explanation: "« si nous suivons le parti contraire, nous usons davantage de cette puissance positive »."
	},
	{
		question: "Question n°20 : Dans quel cas pouvons-nous toujours agir plus librement (§10) ?",
		answers: ["Dans les choses indifférentes", "Dans les choses où nous voyons plus de bien que de mal", "Dans les choses interdites"],
		correct: 2,
		explanation: "« nous pouvons toujours agir plus librement dans les choses où nous voyons plus de bien que de mal, que dans les choses appelées par nous indifférentes »."
	},
	{
		question: "Question n°21 : Comment considérons-nous les choses commandées par d'autres que nous ne ferions pas de nous-mêmes (§11) ?",
		answers: ["Nous les faisons plus librement", "Nous les faisons moins librement", "Nous les faisons avec la même liberté"],
		correct: 2,
		explanation: "« on peut même dire que les choses qui nous sont commandées... nous les faisons moins librement que celles qui ne nous sont pas commandées »."
	},
	{
		question: "Question n°22 : Pourquoi les choses commandées sont-elles faites moins librement dans ce cas ?",
		answers: ["Parce que le jugement de leur difficulté s'oppose au jugement qu'il est bon d'obéir", "Parce que nous n'aimons pas l'autorité", "Parce qu'elles sont illégales"],
		correct: 1,
		explanation: "« parce que le jugement qu’elles sont difficiles à faire est opposé au jugement qu’il est bon de faire ce qui est commandé »."
	},
	{
		question: "Question n°23 : Que crée l'opposition de ces deux jugements qui nous meuvent également (§11) ?",
		answers: ["Une plus grande liberté", "De l'indifférence prise au premier sens", "Une certitude absolue"],
		correct: 2,
		explanation: "« plus ils nous meuvent également, plus ils mettent en nous d’indifférence prise au premier sens »."
	},
	{
		question: "Question n°24 : Quelle est la conclusion de Descartes sur le rapport entre raisons et liberté (§12) ?",
		answers: ["Plus il y a de raisons, moins nous sommes libres", "Je suis porté d’autant plus librement vers quelque chose que je suis poussé par plus de raisons", "Les raisons n'ont aucun impact sur la liberté"],
		correct: 2,
		explanation: "« C’est en ce sens que j’ai écrit que je suis porté d’autant plus librement vers quelque chose que je suis poussé par plus de raisons »."
	},
	{
		question: "Question n°25 : Pourquoi plus de raisons entraînent-elles plus de liberté (§12) ?",
		answers: ["Parce que la volonté se meut avec plus de facilité et d’élan", "Parce que nous sommes forcés d'obéir", "Parce que la raison annule la volonté"],
		correct: 1,
		explanation: "« car il est certain que notre volonté se meut avec plus de facilité et d’élan »."
	},
	{
		question: "Question n°26 : Quel est le lien entre ce texte et la IVe Méditation ?",
		answers: ["Il la contredit totalement", "Il en clarifie et en nuance la conception de l'indifférence et du libre arbitre", "Il n'a aucun lien"],
		correct: 2,
		explanation: "Cette lettre vise à préciser des points de la IVe Méditation qui avaient pu être mal interprétés, notamment sur le rôle de l'indifférence."
	},
	{
		question: "Question n°27 : Que désigne la « perception du vrai ou du bien » (§1) ?",
		answers: ["Les sens physiques", "L'éclairage de l'entendement qui motive la volonté", "L'opinion publique"],
		correct: 2,
		explanation: "C'est la représentation claire et distincte par l'entendement qui pousse la volonté à se déterminer."
	},
	{
		question: "Question n°28 : Pourquoi l'indifférence au premier sens est-elle le « plus bas degré » de la liberté ?",
		answers: ["Parce qu'elle est une absence de détermination, donc un défaut de connaissance, et non une perfection", "Parce qu'elle est interdite par Dieu", "Parce qu'elle mène toujours à l'erreur"],
		correct: 1,
		explanation: "Pour Descartes, la liberté est une perfection. L'absence de motif (indifférence 1) est un manque de lumière de l'entendement, donc le degré le plus bas de cette perfection."
	},
	{
		question: "Question n°29 : La « faculté positive » est-elle une simple absence d'obstacle ?",
		answers: ["Oui", "Non, c'est une puissance active de la volonté", "C'est une illusion"],
		correct: 2,
		explanation: "Descartes insiste sur le terme « positive » : ce n'est pas juste un manque de détermination, mais une capacité active de choisir les contraires."
	},
	{
		question: "Question n°30 : Que prouve l'exemple de « s'abstenir de poursuivre un bien clairement connu » ?",
		answers: ["Que nous sommes toujours libres de choisir le mal par pure affirmation de notre liberté", "Que le bien n'existe pas", "Que la raison est impuissante"],
		correct: 1,
		explanation: "Cela démontre que la volonté conserve toujours, absolument parlant, la puissance de s'opposer à l'évidence, ne serait-ce que pour prouver qu'elle n'est pas contrainte."
	},
	{
		question: "Question n°31 : Que signifie « élan » dans la conclusion du texte ?",
		answers: ["Un mouvement physique du corps", "La spontanéité et la vigueur avec laquelle la volonté adhère à la vérité", "Une émotion passagère"],
		correct: 2,
		explanation: "L'« élan » désigne la force et la spontanéité de l'acte volontaire lorsqu'il est pleinement soutenu par la clarté de l'entendement."
	},
	{
		question: "Question n°32 : La liberté, pour Descartes, est-elle incompatible avec la détermination par des raisons ?",
		answers: ["Oui, absolument", "Non, au contraire, plus la volonté est déterminée par des raisons évidentes, plus elle est libre", "Seulement dans les affaires religieuses"],
		correct: 2,
		explanation: "C'est le cœur de la thèse : la détermination par la raison n'annule pas la liberté, elle la perfectionne en lui donnant de la « facilité et de l'élan »."
	},
	{
		question: "Question n°33 : Que signifie « suivre le pire, tout en voyant le meilleur » (§9) ?",
		answers: ["C'est une impossibilité logique", "C'est l'usage maximal de la puissance positive de la volonté, prouvant son indépendance", "C'est la définition de la sagesse"],
		correct: 2,
		explanation: "C'est la preuve ultime de la liberté de la volonté : sa capacité à s'auto-déterminer contre l'évidence même, bien que ce soit un mauvais usage de cette liberté."
	},
	{
		question: "Question n°34 : Quelle est la différence entre « moralement » et « absolument » dans ce texte ?",
		answers: ["Aucune", "Moralement = selon la tendance forte de la raison ; Absolument = selon la puissance métaphysique de la volonté", "Moralement = religieusement ; Absolument = scientifiquement"],
		correct: 2,
		explanation: "C'est une distinction modale : la nécessité morale n'est pas une nécessité absolue (métaphysique), laissant une place au pouvoir de la volonté."
	},
	{
		question: "Question n°35 : Pourquoi Descartes précise-t-il « peut-être que d'autres entendent... » (§2) ?",
		answers: ["Parce qu'il est incertain", "Pour introduire une définition alternative qu'il va finalement accepter et intégrer à sa propre théorie", "Pour critiquer une erreur sans nommer personne"],
		correct: 2,
		explanation: "C'est une stratégie rhétorique pour valider une intuition commune (la faculté de choisir) tout en la reformulant dans son propre cadre métaphysique."
	},
	{
		question: "Question n°36 : Que se passe-t-il quand nous voyons « autant de bien que de mal » (§8) ?",
		answers: ["Nous sommes parfaitement libres", "Nous sommes dans un état d'indifférence qui rend la détermination moins facile", "Nous choisissons toujours le bien"],
		correct: 2,
		explanation: "Cet équilibre des motifs crée une indifférence (au premier sens) qui est un obstacle à la facilité de la détermination, donc un degré inférieur de liberté."
	},
	{
		question: "Question n°37 : L'obéissance aux commandements d'autrui diminue-t-elle toujours la liberté ?",
		answers: ["Oui, toujours", "Non, seulement si notre propre jugement s'y oppose, créant un conflit et donc de l'indifférence", "Non, jamais"],
		correct: 2,
		explanation: "Le texte précise que c'est le cas quand « le jugement qu’elles sont difficiles à faire est opposé au jugement qu’il est bon de faire ce qui est commandé »."
	},
	{
		question: "Question n°38 : Quel est le rôle de l'entendement dans la liberté de la volonté selon ce texte ?",
		answers: ["Il est un obstacle à la liberté", "Il est le guide qui, par ses raisons, augmente la facilité et l'élan de la volonté", "Il est totalement séparé de la volonté"],
		correct: 2,
		explanation: "L'entendement fournit les « raisons » qui poussent la volonté, augmentant ainsi sa liberté (facilité et élan) plutôt que de la contraindre."
	},
	{
		question: "Question n°39 : Que signifie « puissance positive » dans ce contexte ?",
		answers: ["Une force physique", "La capacité réelle et active de la volonté à se déterminer par elle-même", "Une illusion de l'esprit"],
		correct: 2,
		explanation: "C'est l'essence même du libre arbitre cartésien : une faculté réelle d'auto-détermination, et non une simple absence de contrainte extérieure."
	},
	{
		question: "Question n°40 : Ce texte défend-il un compatibilisme ?",
		answers: ["Non, il défend un libertarisme absolu", "Oui, il compatibilise la liberté de la volonté avec la détermination par des raisons évidentes", "Il ne se prononce pas"],
		correct: 2,
		explanation: "Descartes montre que la liberté (spontanéité) est compatible, et même renforcée, par la détermination causale issue des raisons de l'entendement."
	},
	{
		question: "Question n°41 : Que signifie « nous ne pouvons pas dire de la même façon » (§8) ?",
		answers: ["Que les deux situations sont identiques", "Que l'analogie entre l'obéissance à autrui et l'indifférence des motifs ne tient pas pour définir le degré suprême de liberté", "Que le langage est insuffisant"],
		correct: 2,
		explanation: "Descartes nuance : être libre de désobéir à un ordre n'est pas la même chose que d'être libre dans l'indifférence des motifs. La vraie liberté supérieure est dans la clarté des motifs."
	},
	{
		question: "Question n°42 : Quel est le paradoxe apparent que Descartes résout ici ?",
		answers: ["Comment Dieu peut-il être libre", "Comment nous pouvons être plus libres quand nous sommes déterminés par des raisons évidentes que quand nous sommes indifférents", "Comment le corps peut-il penser"],
		correct: 2,
		explanation: "Le sens commun associe liberté et absence de contrainte (indifférence). Descartes renverse cela : la vraie liberté est l'aisance et l'élan donnés par la raison."
	},
	{
		question: "Question n°43 : Que signifie « affirmer par là notre libre arbitre » (§5) ?",
		answers: ["Prouver aux autres que nous sommes libres", "Faire de l'acte de choix lui-même, indépendamment de l'objet, la valeur suprême", "Nier l'existence de Dieu"],
		correct: 2,
		explanation: "C'est l'idée que la volonté peut se prendre elle-même pour objet : choisir de choisir, pour prouver qu'elle n'est pas une machine déterminée."
	},
	{
		question: "Question n°44 : La liberté « pendant l'accomplissement » est-elle détaillée dans ce texte ?",
		answers: ["Oui, longuement", "Non, le texte se concentre principalement sur la liberté avant l'accomplissement et la facilité de détermination", "Elle est niée"],
		correct: 2,
		explanation: "Bien que mentionnée au §6, la suite du texte développe surtout les conditions de la détermination (avant/pendant l'acte) en lien avec les motifs et la facilité."
	},
	{
		question: "Question n°45 : Que nous apprend ce texte sur la faiblesse de la volonté (akrasia) ?",
		answers: ["Qu'elle est impossible", "Qu'elle est possible car la volonté possède la puissance positive de suivre le pire en voyant le meilleur", "Qu'elle est causée par le corps uniquement"],
		correct: 2,
		explanation: "Le §9 reconnaît explicitement la possibilité de « suivre le pire, tout en voyant le meilleur » comme un usage (dévoyé) de la puissance positive de la volonté."
	},
	{
		question: "Question n°46 : Pourquoi Descartes utilise-t-il l'expression « poussée d'un côté plutôt que de l'autre » ?",
		answers: ["Pour décrire une contrainte physique", "Pour illustrer la dynamique de la motivation : la perception du bien agit comme un poids qui incline la volonté sans la contraindre absolument", "Pour décrire un conflit armé"],
		correct: 2,
		explanation: "C'est l'image de l'inclinaison : la raison pousse (incline) la volonté, ce qui facilite le choix, sans le rendre métaphysiquement nécessaire."
	},
	{
		question: "Question n°47 : Quelle est la relation entre « facilité » et « liberté » dans ce texte ?",
		answers: ["Elles sont opposées", "La facilité est un marqueur ou une composante d'une plus grande liberté", "La facilité est un signe de paresse"],
		correct: 2,
		explanation: "« Une plus grande liberté consiste en effet ou bien dans une plus grande facilité de se déterminer » (§9). La facilité est la fluidité de l'acte libre."
	},
	{
		question: "Question n°48 : En quoi ce texte est-il une réponse à des objections potentielles ?",
		answers: ["Il anticipe l'accusation que sa théorie de la liberté détruit le libre arbitre en le soumettant à la raison", "Il répond à une question sur la physique", "Il critique Aristote"],
		correct: 1,
		explanation: "Descartes veut éviter que sa notion d'indifférence comme « plus bas degré » ne soit interprétée comme un déni de la liberté dans les choix éclairés."
	},
	{
		question: "Question n°49 : Que signifie « choses appelées par nous indifférentes » (§10) ?",
		answers: ["Les choses qui n'ont aucune importance", "Les choses pour lesquelles nous ne voyons pas de raison de préférer un parti à un autre", "Les choses interdites"],
		correct: 2,
		explanation: "Ce sont les situations où les motifs sont équilibrés ou absents, créant l'indifférence au premier sens, qui est le degré le plus bas de la liberté."
	},
	{
		question: "Question n°50 : Quelle est la thèse finale et synthétique de cet extrait ?",
		answers: ["La liberté est l'indifférence absolue", "La liberté atteint son plus haut degré non dans l'indifférence, mais dans la détermination spontanée et facile par des raisons évidentes", "La volonté est déterminée par le corps"],
		correct: 2,
		explanation: "Le texte conclut que nous sommes « portés d’autant plus librement vers quelque chose que [nous] sommes poussés par plus de raisons », unissant ainsi liberté et rationalité."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "Liberté et Indifférence (Descartes, Lettre à Mesland)" },
		{ key: 1, parent: 0, text: "Les deux sens de l'indifférence" },
		{ key: 2, parent: 1, text: "1er sens : Absence de penchant (plus bas degré de liberté)" },
		{ key: 3, parent: 1, text: "2e sens : Faculté positive de choisir les contraires" },
		{ key: 4, parent: 0, text: "La puissance de la volonté" },
		{ key: 5, parent: 4, text: "Présente dans tous les actes, même face à l'évidence" },
		{ key: 6, parent: 4, text: "Permet de suivre le pire en voyant le meilleur (affirmation du libre arbitre)" },
		{ key: 7, parent: 0, text: "Les degrés de la liberté" },
		{ key: 8, parent: 7, text: "Liberté supérieure : facilité de se déterminer par des raisons évidentes" },
		{ key: 9, parent: 7, text: "Liberté inférieure : indifférence (équilibre des motifs ou absence de motifs)" },
		{ key: 10, parent: 0, text: "Le cas des commandements d'autrui" },
		{ key: 11, parent: 10, text: "Conflit de jugements = indifférence (1er sens) = liberté diminuée" },
		{ key: 12, parent: 0, text: "Conclusion" },
		{ key: 13, parent: 12, text: "Plus de raisons = plus de facilité et d'élan = plus de liberté" }
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
			origine: "René Descartes, Lettre au Père Mesland, 9 février 1645",
			theme: "La liberté",
			these: "La liberté de la volonté ne réside pas dans l'indifférence (absence de motif), qui en est le plus bas degré, mais dans la facilité et l'élan avec lesquels elle se détermine lorsqu'elle est éclairée par des raisons évidentes, tout en conservant la puissance positive de choisir le contraire.",
			interet: "Ce texte est essentiel pour comprendre la maturité de la pensée cartésienne sur la liberté. Il dépasse la simple définition de l'indifférence comme liberté pour montrer que la véritable liberté est une spontanéité éclairée : plus l'entendement fournit de raisons claires, plus la volonté agit avec aisance et vigueur, sans pour autant perdre sa capacité métaphysique d'auto-détermination.",
			problematique: "En quoi la détermination de la volonté par des raisons évidentes, loin d'annuler le libre arbitre, en constitue-t-elle au contraire le plus haut degré de perfection et de liberté ?"
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
			"text": "DÉBUT\nQu'est-ce que l'indifférence\net quel est son rapport\nà la liberté ?",
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
			"text": "DEUX SENS DE\nL'INDIFFÉRENCE :\n1. Absence de penchant\n(plus bas degré).\n2. Faculté positive\nde choisir les contraires.",
			"loc": "480 120",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "3",
			"text": "LA PUISSANCE DE\nLA VOLONTÉ :\nElle subsiste même\nface à des raisons\névidentes (possibilité\nabsolue de choisir\nle contraire).",
			"loc": "760.53 120",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "4",
			"text": "LES DEGRÉS\nDE LA LIBERTÉ :",
			"loc": "1034.36 120",
			"category": "losange",
			"color": "#ffeaa7",
			"borderColor": "#C9A227",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "5",
			"text": "Moins libre :\nIndifférence (1er sens),\nconflit de jugements\n(commandements d'autrui\nopposés à notre jugement).",
			"loc": "1034.36 259.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "6",
			"text": "Plus libre :\nFacilité de se déterminer\npar des raisons évidentes\nOU usage de la puissance\npositive de suivre le pire.",
			"loc": "1034.36 400",
			"category": "rectangle",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "7",
			"text": "FIN\nPlus de raisons =\nplus de facilité\net d'élan =\nplus grande liberté.",
			"loc": "1319.74 120",
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
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "3",
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
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "4",
			"to": "7",
			"fromSide": "right",
			"toSide": "left"
		}
	]
};