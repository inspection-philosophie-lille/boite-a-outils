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
const sousTitre = "Tester ses connaissances sur un texte de Pascal (Pensées, fr. 434)";

// ============================================
// APP : QUIZ — TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Les principales forces des pyrrhoniens, je laisse les moindres, sont que nous n’avons aucune certitude de la vérité de ces principes, hors la foi et la révélation, sinon en (ce) que nous les sentons naturellement en nous. [2] Or ce sentiment naturel n’est pas une preuve convaincante de leur vérité, puisque n’y ayant point de certitude hors la foi, si l’homme est créé par un dieu bon, par un démon méchant ou à l’aventure, il est en doute si ces principes nous sont donnés ou véritables, ou faux, ou incertains selon notre origine. [3] De plus que personne n’a d’assurance, hors de la foi, s’il veille ou s’il dort, vu que durant le sommeil on croit veiller aussi fermement que nous faisons ; on croit voir les espaces, les figures, les mouvements ; on sent couler le temps, on le mesure ; et enfin on agit de même qu’éveillé ; de sorte que la moitié de la vie se passant en sommeil par notre propre aveu, ou, quoiqu’il nous en paraisse, nous n’avons aucune idée du vrai, tous nos sentiments étant alors des illusions, qui sait si cette autre moitié de la vie où nous pensons veiller n’est pas un autre sommeil un peu différent du premier, dont nous nous éveillons quand nous pensons dormir ?\n[4] Voilà les principales forces de part et d’autre.\n[5] Je laisse les moindres, comme les discours que font les pyrrhoniens contre les impressions de la coutume, de l’éducation, des mœurs, des pays, et les autres choses semblables, qui, quoiqu’elles entraînent la plus grande partie des hommes communs, qui ne dogmatisent que sur ces vains fondements, sont renversés par le moindre souffle des pyrrhoniens. [6] On n’a qu’à voir leurs livres, si l’on n’en est pas assez persuadé ; on le deviendra bien vite, et peut-être trop.\n[7] Je m’arrête à l’unique fort des dogmatistes qui est qu’en parlant de bonne foi et sincèrement on ne peut douter des principes naturels. [8] Contre quoi les pyrrhoniens opposent, en un mot, l’incertitude de notre origine qui enferme celle de notre nature ; à quoi les dogmatistes sont encore à répondre depuis que le monde dure. […]\n[9] Quelle chimère est-ce donc que l’homme ? [10] Quelle nouveauté, quel monstre, quel chaos, quel sujet de contradiction, quel prodige ! [11] Juge de toutes choses, imbécile ver de terre ; dépositaire du vrai, cloaque d’incertitude et d’erreur ; gloire et rebut de l’univers.\n[12] Qui démêlera cet embrouillement ? [13] La nature confond les pyrrhoniens et la raison confond les dogmatiques. [14] Que deviendrez-vous donc, ô hommes qui cherchez quelle est votre véritable condition par votre raison naturelle ? [15] Vous ne pouvez fuir une de ces sectes ni subsister dans aucune.\n[16] Connaissez donc, superbe, seul paradoxe vous êtes à vous-même. [17] Humiliez-vous raison impuissante ; taisez-vous, nature imbécile ; apprenez que l’homme passe infiniment l’homme, et entendez de votre maître votre condition véritable que vous ignorez. [18] Écoutez Dieu. »",
	source: "Blaise Pascal, <em>Pensées</em>, fragment n° 434 (éd. Brunschvicg)"
};

// ============================================
// APP : QUIZ — QUESTIONS
// ============================================

const questions = [
	{
		question: "Question n°1 : Qui est l'auteur de ce texte ?",
		answers: ["René Descartes", "Blaise Pascal", "Michel de Montaigne"],
		correct: 2,
		explanation: "Le texte est extrait des *Pensées*, l'œuvre inachevée de Blaise Pascal, destinée à défendre la religion chrétienne."
	},
	{
		question: "Question n°2 : De quelle édition célèbre ce numéro de fragment (434) est-il issu ?",
		answers: ["L'édition de Port-Royal", "L'édition Brunschvicg", "L'édition Lafuma"],
		correct: 2,
		explanation: "La numérotation 434 correspond au classement établi par Léon Brunschvicg dans son édition de 1897, qui a longtemps fait référence."
	},
	{
		question: "Question n°3 : Quel est le thème central de ce fragment ?",
		answers: ["La démonstration de l'existence de Dieu par la raison", "L'impuissance de la raison naturelle à trancher entre dogmatisme et pyrrhonisme", "La supériorité de la science moderne"],
		correct: 2,
		explanation: "Pascal montre que la raison naturelle est prise dans une impasse entre les doutes des pyrrhoniens et les affirmations des dogmatiques, nécessitant un recours à la foi."
	},
	{
		question: "Question n°4 : Quelle est la « principale force » des pyrrhoniens selon le §1 ?",
		answers: ["Leur foi inébranlable", "L'absence de certitude sur la vérité des principes hors la foi et la révélation", "Leur connaissance des sciences de la nature"],
		correct: 2,
		explanation: "Pascal reconnaît que les pyrrhoniens ont raison de douter des principes naturels, car nous n'en avons de certitude que par un « sentiment naturel », insuffisant sans la foi."
	},
	{
		question: "Question n°5 : Pourquoi le « sentiment naturel » n'est-il pas une preuve convaincante selon le §2 ?",
		answers: ["Parce qu'il est trop rare", "Parce que l'incertitude de notre origine (dieu bon, démon ou hasard) rend ce sentiment douteux", "Parce qu'il est contraire à la Bible"],
		correct: 2,
		explanation: "Si nous ne savons pas si nous sommes l'œuvre d'un dieu bon, d'un démon ou du hasard, nous ne pouvons pas faire confiance aveuglément à nos facultés naturelles."
	},
	{
		question: "Question n°6 : Quel argument célèbre, emprunté à la tradition sceptique, Pascal développe-t-il au §3 ?",
		answers: ["L'argument du rêve", "L'argument de la cire", "L'argument de la main coupée"],
		correct: 1,
		explanation: "Pascal reprend l'argument du rêve (déjà présent chez Platon, Zhuangzi et Descartes) pour montrer qu'on ne peut distinguer avec certitude l'état de veille du sommeil."
	},
	{
		question: "Question n°7 : Selon le §3, quelle proportion de la vie se passe en sommeil ?",
		answers: ["Le quart", "La moitié", "Les trois quarts"],
		correct: 2,
		explanation: "Pascal écrit : « la moitié de la vie se passant en sommeil par notre propre aveu »."
	},
	{
		question: "Question n°8 : Quelle hypothèse vertigineuse Pascal émet-il à la fin du §3 ?",
		answers: ["Que la vie éveillée pourrait n'être qu'un autre sommeil dont on s'éveille en pensant dormir", "Que le temps n'existe pas", "Que les autres sont des automates"],
		correct: 1,
		explanation: "Il suggère que la veille elle-même pourrait être « un autre sommeil un peu différent du premier », radicalisant le doute sceptique."
	},
	{
		question: "Question n°9 : Que fait Pascal des arguments pyrrhoniens « moindres » (§5) ?",
		answers: ["Il les développe longuement", "Il les laisse de côté car ils sont trop faciles à réfuter ou trop évidents", "Il les attribue aux dogmatiques"],
		correct: 2,
		explanation: "Il mentionne qu'il « laisse les moindres », comme les critiques de la coutume ou de l'éducation, car ils renversent trop aisément les fondements des « hommes communs »."
	},
	{
		question: "Question n°10 : Quel est l'« unique fort » des dogmatistes selon le §7 ?",
		answers: ["Leur capacité à faire des miracles", "Le fait qu'en parlant de bonne foi, on ne peut douter des principes naturels", "Leur nombre supérieur"],
		correct: 2,
		explanation: "Pascal concède aux dogmatiques que, sincèrement, nous ne pouvons pas douter au quotidien de principes comme l'existence du monde ou de notre corps."
	},
	{
		question: "Question n°11 : Comment les pyrrhoniens répliquent-ils à cet « unique fort » des dogmatistes (§8) ?",
		answers: ["En niant l'existence de la bonne foi", "En opposant l'incertitude de notre origine, qui enferme celle de notre nature", "En faisant appel à la science"],
		correct: 2,
		explanation: "La réplique pyrrhonienne est radicale : même de bonne foi, nous ne pouvons garantir la vérité de nos principes car nous ignorons l'origine de notre nature."
	},
	{
		question: "Question n°12 : Depuis combien de temps les dogmatistes n'ont-ils pas répondu à cet argument, selon Pascal ?",
		answers: ["Depuis un siècle", "Depuis que le monde dure", "Depuis la Renaissance"],
		correct: 2,
		explanation: "Pascal souligne l'échec historique de la philosophie dogmatique : « à quoi les dogmatistes sont encore à répondre depuis que le monde dure »."
	},
	{
		question: "Question n°13 : Quelle série de noms Pascal donne-t-il à l'homme au §9-10 ?",
		answers: ["Sage, maître, roi", "Chimère, nouveauté, monstre, chaos, sujet de contradiction, prodige", "Ange, démon, esprit"],
		correct: 2,
		explanation: "Pascal utilise une accumulation de termes forts pour exprimer l'incompréhensible contradiction de la condition humaine."
	},
	{
		question: "Question n°14 : Quelle antithèse célèbre Pascal utilise-t-il au §11 pour décrire l'homme ?",
		answers: ["Riche et pauvre", "Juge de toutes choses, imbécile ver de terre", "Jeune et vieux"],
		correct: 2,
		explanation: "L'antithèse « Juge de toutes choses, imbécile ver de terre » illustre la grandeur (la raison) et la misère (la condition mortelle) de l'homme."
	},
	{
		question: "Question n°15 : Quelle autre antithèse complète la description de l'homme au §11 ?",
		answers: ["Gloire et rebut de l'univers", "Maître et esclave", "Créateur et destructeur"],
		correct: 1,
		explanation: "L'homme est à la fois la « gloire » (par sa pensée) et le « rebut » (par sa corruption et sa finitude) de l'univers."
	},
	{
		question: "Question n°16 : Que signifie le mot « cloaque » dans l'expression « cloaque d’incertitude et d’erreur » ?",
		answers: ["Un lieu sacré", "Un égout, un lieu de corruption et d'accumulation d'immondices", "Une forteresse"],
		correct: 2,
		explanation: "Le terme, très violent, souligne la bassesse et la corruption de l'homme lorsqu'il est abandonné à ses seules lumières naturelles."
	},
	{
		question: "Question n°17 : Selon le §13, qu'est-ce qui « confond les pyrrhoniens » ?",
		answers: ["La raison", "La nature", "La foi"],
		correct: 2,
		explanation: "« La nature confond les pyrrhoniens » : malgré leurs doutes, la nature (l'instinct, le corps, le sentiment naturel) nous empêche de douter réellement dans la pratique."
	},
	{
		question: "Question n°18 : Selon le §13, qu'est-ce qui « confond les dogmatiques » ?",
		answers: ["La nature", "La raison", "Les sens"],
		correct: 2,
		explanation: "« La raison confond les dogmatiques » : la raison leur montre que leurs principes naturels ne peuvent être absolument certifiés à cause de l'incertitude de l'origine."
	},
	{
		question: "Question n°19 : Quelle est la conclusion pour ceux qui cherchent leur condition par la « raison naturelle » (§14-15) ?",
		answers: ["Ils trouvent la paix", "Ils ne peuvent fuir une de ces sectes ni subsister dans aucune", "Ils deviennent des savants accomplis"],
		correct: 2,
		explanation: "La raison naturelle mène à une impasse : on ne peut ni accepter pleinement le dogmatisme (réfuté par la raison), ni vivre dans le pyrrhonisme (réfuté par la nature)."
	},
	{
		question: "Question n°20 : À qui Pascal s'adresse-t-il directement au §16 en le traitant de « superbe » ?",
		answers: ["À l'athée", "À l'homme qui fait confiance à sa seule raison et s'enorgueillit", "Au roi"],
		correct: 2,
		explanation: "Le « superbe » est celui qui est orgueilleux de sa raison, sans voir qu'il est un « paradoxe » à lui-même, incapable de se comprendre seul."
	},
	{
		question: "Question n°21 : Que signifie l'expression « l’homme passe infiniment l’homme » (§17) ?",
		answers: ["L'homme évolue biologiquement", "L'homme a besoin d'un principe supérieur (la grâce, Dieu) pour se comprendre et se dépasser", "L'homme est supérieur aux animaux"],
		correct: 2,
		explanation: "C'est une idée clé de Pascal : l'homme ne peut se comprendre par lui-même ; il faut une lumière extérieure (la Révélation) pour expliquer sa grandeur et sa misère."
	},
	{
		question: "Question n°22 : Quelle est la toute dernière injonction du texte (§18) ?",
		answers: ["Lisez les philosophes", "Écoutez Dieu", "Doutez de tout"],
		correct: 2,
		explanation: "La chute est brève et impérative : « Écoutez Dieu », marquant le basculement de la raison naturelle vers la Révélation chrétienne."
	},
	{
		question: "Question n°23 : Quelle figure de style domine les §9 à 11 ?",
		answers: ["La litote", "L'accumulation et l'antithèse", "L'euphémisme"],
		correct: 2,
		explanation: "Pascal accumule les termes (chimère, monstre, chaos...) et les antithèses (juge/ver, vrai/erreur) pour traduire la violence de la contradiction humaine."
	},
	{
		question: "Question n°24 : Quel est le genre littéraire des *Pensées* ?",
		answers: ["Un traité systématique", "Un recueil de fragments apologétiques", "Un roman épistolaire"],
		correct: 2,
		explanation: "Les *Pensées* sont un ensemble de notes et fragments destinés à une « Apologie de la religion chrétienne », restée inachevée à la mort de Pascal."
	},
	{
		question: "Question n°25 : En quoi ce texte utilise-t-il le pyrrhonisme ?",
		answers: ["Pour le réfuter totalement et défendre le dogmatisme", "Comme un instrument pour humilier l'orgueil dogmatique et préparer la voie à la foi", "Pour prouver que rien n'existe"],
		correct: 2,
		explanation: "Pascal utilise le scepticisme (comme Montaigne) non pour y adhérer, mais comme une « machine de guerre » contre l'orgueil de la raison, afin de rendre l'homme réceptif à la grâce."
	},
	{
		question: "Question n°26 : Que signifie « dogmatiser » dans ce texte (§5) ?",
		answers: ["Enseigner la religion", "Affirmer des vérités de manière absolue sans fondement certain", "Douter de tout"],
		correct: 2,
		explanation: "Dogmatiser, c'est poser des affirmations comme des vérités absolues. Pascal critique ceux qui le font sur des fondements vains (coutume, éducation)."
	},
	{
		question: "Question n°27 : Pourquoi Pascal dit-il qu'on sera persuadé par les livres pyrrhoniens « peut-être trop » (§6) ?",
		answers: ["Parce qu'ils sont ennuyeux", "Parce que le doute peut devenir une habitude destructrice dont il est difficile de sortir", "Parce qu'ils sont trop courts"],
		correct: 2,
		explanation: "Le pyrrhonisme est un poison dangereux : il est facile d'être convaincu par le doute, mais il est ensuite très difficile de retrouver des certitudes pour agir."
	},
	{
		question: "Question n°28 : Quelle est la fonction de la question « Qui démêlera cet embrouillement ? » (§12) ?",
		answers: ["Annoncer que la science le fera", "Marquer l'impuissance de la raison humaine et appeler une solution extérieure", "Poser une énigme sans réponse"],
		correct: 2,
		explanation: "C'est une question rhétorique qui prépare la conclusion : la raison ne peut pas démêler cet embrouillement, seule la Révélation le peut."
	},
	{
		question: "Question n°29 : Que révèle l'usage de l'apostrophe « ô hommes » (§14) ?",
		answers: ["Une distance froide", "Un ton pathétique et exhortatif, typique du discours apologétique", "Une adresse à un seul interlocuteur"],
		correct: 2,
		explanation: "L'apostrophe vise à interpeller directement le lecteur, à le secouer et à l'impliquer personnellement dans la recherche de sa condition."
	},
	{
		question: "Question n°30 : Pourquoi la nature est-elle qualifiée d'« imbécile » au §17 ?",
		answers: ["Parce qu'elle est méchante", "Parce qu'elle est sans intelligence et incapable de fournir des certitudes rationnelles", "Parce qu'elle est trop complexe"],
		correct: 2,
		explanation: "Au sens classique, « imbécile » signifie « faible », « qui manque de force » (ici, de force rationnelle). La nature donne l'instinct, mais pas la vérité claire."
	},
	{
		question: "Question n°31 : En quoi ce fragment s'inscrit-il dans la stratégie apologétique de Pascal ?",
		answers: ["Il prouve l'existence de Dieu par des arguments scientifiques", "Il montre la misère de l'homme sans Dieu pour lui faire désirer le recours à la Révélation", "Il attaque directement les protestants"],
		correct: 2,
		explanation: "C'est la méthode pascalienne : montrer la contradiction de l'homme pour le rendre insatisfait de sa condition naturelle et ouvert au besoin d'un sauveur."
	},
	{
		question: "Question n°32 : Que signifie « seul paradoxe vous êtes à vous-même » (§16) ?",
		answers: ["Que l'homme est logique", "Que l'homme est une énigme insoluble pour sa propre raison", "Que l'homme est seul dans l'univers"],
		correct: 2,
		explanation: "L'homme est la seule créature qui soit un problème pour elle-même, incapable de se définir de manière cohérente sans recours à une vérité supérieure."
	},
	{
		question: "Question n°33 : Quel philosophe antique est implicitement visé par la critique du pyrrhonisme ?",
		answers: ["Platon", "Pyrrhon d'Élis (et Sextus Empiricus)", "Aristote"],
		correct: 2,
		explanation: "Le pyrrhonisme tire son nom de Pyrrhon d'Élis, fondateur du scepticisme antique, dont les arguments (comme celui du rêve) sont repris ici."
	},
	{
		question: "Question n°34 : Quelle est la différence entre « foi et révélation » et « raison naturelle » dans ce texte ?",
		answers: ["Aucune, c'est la même chose", "La raison naturelle mène à l'impasse, tandis que la foi et la révélation apportent la certitude manquante", "La raison est supérieure à la foi"],
		correct: 2,
		explanation: "Pascal établit une rupture : la raison naturelle ne peut pas tout, elle a besoin de la lumière surnaturelle de la Révélation pour comprendre la condition humaine."
	},
	{
		question: "Question n°35 : Pourquoi Pascal parle-t-il d'un « démon méchant » (§2) ?",
		answers: ["Pour faire peur", "En écho à l'hypothèse du « malin génie » de Descartes, pour illustrer l'incertitude radicale de l'origine", "Parce qu'il croit au dualisme"],
		correct: 2,
		explanation: "Pascal reprend à son compte l'hypothèse cartésienne du malin génie pour montrer que, sans la garantie d'un Dieu bon (révélé), tout doute est possible."
	},
	{
		question: "Question n°36 : Que signifie « dépositaire du vrai » (§11) ?",
		answers: ["Que l'homme possède la vérité absolue par nature", "Que l'homme a en lui des traces ou un désir de vérité, malgré ses erreurs", "Que l'homme est la vérité"],
		correct: 2,
		explanation: "Malgré sa corruption, l'homme garde une grandeur : il cherche le vrai et en a une idée, ce qui le distingue radicalement de la bête."
	},
	{
		question: "Question n°37 : Quelle est la portée de l'impératif « Humiliez-vous » (§17) ?",
		answers: ["Une injonction morale à la modestie sociale", "Une exigence intellectuelle et spirituelle de reconnaître les limites de la raison", "Un ordre politique"],
		correct: 2,
		explanation: "Il s'agit d'humilier l'orgueil de la raison (« raison impuissante ») pour la rendre docile à l'enseignement de la foi."
	},
	{
		question: "Question n°38 : Comment Pascal qualifie-t-il les fondements sur lesquels les « hommes communs » dogmatisent (§5) ?",
		answers: ["De solides", "De vains", "De divins"],
		correct: 2,
		explanation: "Il parle de « vains fondements » (coutume, éducation, mœurs), montrant que les certitudes du sens commun sont fragiles face à l'examen sceptique."
	},
	{
		question: "Question n°39 : En quoi l'argument du rêve (§3) est-il plus radical chez Pascal que chez Descartes ?",
		answers: ["Il est moins radical", "Pascal l'utilise pour conclure à l'impuissance de la raison, là où Descartes le dépasse par la véracité divine", "Pascal nie l'existence du rêve"],
		correct: 2,
		explanation: "Descartes utilise le rêve pour le dépasser et fonder la science. Pascal l'utilise pour montrer que la raison naturelle reste prisonnière du doute, seule la foi en sort."
	},
	{
		question: "Question n°40 : Que signifie « à l'aventure » dans « ou à l'aventure » (§2) ?",
		answers: ["Avec courage", "Par hasard", "Avec précaution"],
		correct: 2,
		explanation: "Au XVIIe siècle, « à l'aventure » signifie « par hasard ». Pascal évoque l'hypothèse d'une origine purement matérialiste et aléatoire de l'homme."
	},
	{
		question: "Question n°41 : Pourquoi la raison est-elle qualifiée d'« impuissante » (§17) ?",
		answers: ["Parce qu'elle ne peut pas tout comprendre, notamment sa propre origine et sa condition", "Parce qu'elle est lente", "Parce qu'elle est malade"],
		correct: 1,
		explanation: "Son impuissance réside dans son incapacité à trancher entre le dogmatisme et le pyrrhonisme, et à donner un sens cohérent à la condition humaine."
	},
	{
		question: "Question n°42 : Quelle est la structure globale de ce fragment ?",
		answers: ["Une narration linéaire", "Une mise en balance de deux thèses (pyrrhonisme/dogmatisme), suivie d'un constat d'échec et d'une résolution par la foi", "Une liste de définitions"],
		correct: 2,
		explanation: "Le texte suit un mouvement dialectique : thèse (pyrrhonisme), antithèse (dogmatisme), impasse (l'homme est un chaos), et synthèse transcendante (Écoutez Dieu)."
	},
	{
		question: "Question n°43 : Que signifie « entourez de votre maître votre condition véritable » (variante de « entendez de votre maître ») ?",
		answers: ["Apprenez de Dieu (le maître) ce que vous êtes réellement", "Entourez votre maître", "Ignorez votre maître"],
		correct: 1,
		explanation: "Le texte dit « entendez de votre maître » : c'est un appel à écouter l'enseignement divin, seul capable de révéler la vérité sur l'homme."
	},
	{
		question: "Question n°44 : En quoi ce texte est-il un exemple du « style coupé » de Pascal ?",
		answers: ["Par ses phrases longues et complexes", "Par ses phrases courtes, nerveuses, rythmées par des questions et des exclamations", "Par l'absence de ponctuation"],
		correct: 2,
		explanation: "Les §9 à 11 en sont l'illustration parfaite : une succession de phrases nominales et d'exclamations qui créent un effet de martèlement et d'urgence."
	},
	{
		question: "Question n°45 : Que nous apprend ce texte sur la conception pascalienne de la « nature humaine » ?",
		answers: ["Qu'elle est bonne par essence", "Qu'elle est corrompue mais garde une trace de sa grandeur perdue", "Qu'elle est divine"],
		correct: 2,
		explanation: "L'homme est un « cloaque d'erreur » (corruption) mais aussi un « juge de toutes choses » (grandeur), ce qui est la marque de la nature déchue mais pas anéantie."
	},
	{
		question: "Question n°46 : Pourquoi Pascal dit-il « je laisse les moindres » (§1 et §5) ?",
		answers: ["Parce qu'il les ignore", "Pour se concentrer sur les arguments les plus forts et les plus fondamentaux, donnant ainsi plus de poids à sa démonstration", "Par manque de place"],
		correct: 2,
		explanation: "C'est une stratégie rhétorique : en écartant les arguments faibles, Pascal renforce la crédibilité de son analyse des « principales forces » des deux camps."
	},
	{
		question: "Question n°47 : Quel est le rôle de la « foi » dans ce texte ?",
		answers: ["Elle est rejetée comme irrationnelle", "Elle est la seule source de certitude capable de dépasser l'impasse de la raison", "Elle est identique à la raison"],
		correct: 2,
		explanation: "La foi est mentionnée dès le §1 comme la seule alternative à l'incertitude, et elle est la conclusion logique de l'impasse démontrée par la raison."
	},
	{
		question: "Question n°48 : Que signifie le mot « sectes » au §15 ?",
		answers: ["Des groupes religieux marginaux", "Les écoles philosophiques (pyrrhoniens et dogmatiques)", "Des partis politiques"],
		correct: 2,
		explanation: "Au sens classique, une « secte » est une école de pensée ou un parti philosophique (secte stoïcienne, secte pyrrhonienne, etc.)."
	},
	{
		question: "Question n°49 : En quoi ce fragment prépare-t-il l'argument du « pari » ?",
		answers: ["Il ne le prépare pas", "En montrant que la raison est impuissante à trancher, il rend nécessaire un engagement du cœur et de la volonté (le pari) vers la foi", "Il le contredit"],
		correct: 2,
		explanation: "Une fois que la raison a montré ses limites et l'impasse du doute, l'homme doit « parier » et s'engager dans la foi, car la raison seule ne peut pas le sauver."
	},
	{
		question: "Question n°50 : Quelle est la leçon ultime de ce texte pour le lecteur ?",
		answers: ["Il faut devenir pyrrhonien", "Il faut devenir dogmatique", "Il faut reconnaître les limites de la raison et s'ouvrir à la Révélation divine pour trouver la paix et la vérité"],
		correct: 3,
		explanation: "Tout le mouvement du texte vise à conduire le lecteur de l'orgueil de la raison à l'humilité de la foi, seule capable de résoudre le paradoxe de la condition humaine."
	}
];

// ============================================
// APP : CARTE MENTALE
// ============================================

const carte = {
	nodes: [
		{ key: 0, parent: null, text: "L'impasse de la raison et la nécessité de la foi (Pascal)" },
		{ key: 1, parent: 0, text: "La force des Pyrrhoniens" },
		{ key: 2, parent: 1, text: "[1-2] Incertitude de l'origine (dieu bon, démon, hasard)" },
		{ key: 3, parent: 1, text: "[3] Argument du rêve : impossibilité de distinguer veille et sommeil" },
		{ key: 4, parent: 1, text: "[5] Critique des vains fondements (coutume, éducation)" },
		{ key: 5, parent: 0, text: "La force des Dogmatiques" },
		{ key: 6, parent: 5, text: "[7] Évidence des principes naturels de bonne foi" },
		{ key: 7, parent: 0, text: "L'impasse de la raison naturelle" },
		{ key: 8, parent: 7, text: "[8] Les dogmatiques ne peuvent répondre à l'incertitude de l'origine" },
		{ key: 9, parent: 7, text: "[13] La nature confond les pyrrhoniens, la raison confond les dogmatiques" },
		{ key: 10, parent: 7, text: "[15] Impossible de fuir une secte ou de subsister dans l'autre" },
		{ key: 11, parent: 0, text: "La condition humaine : un paradoxe" },
		{ key: 12, parent: 11, text: "[9-11] Chimère, monstre, chaos, prodige" },
		{ key: 13, parent: 11, text: "[11] Antithèses : juge / ver, dépositaire du vrai / cloaque d'erreur" },
		{ key: 14, parent: 0, text: "La solution : la Révélation" },
		{ key: 15, parent: 14, text: "[16-17] Humilier la raison impuissante" },
		{ key: 16, parent: 14, text: "[17] L'homme passe infiniment l'homme" },
		{ key: 17, parent: 14, text: "[18] Écoutez Dieu" }
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
			origine: "Blaise Pascal, Pensées, fragment n° 434 (éd. Brunschvicg)",
			theme: "La religion",
			these: "La raison naturelle est impuissante à trancher entre le dogmatisme et le pyrrhonisme, révélant la condition contradictoire de l'homme et la nécessité absolue de se tourner vers la Révélation divine pour connaître sa véritable condition.",
			interet: "Ce texte illustre parfaitement la stratégie apologétique de Pascal : il utilise le scepticisme (pyrrhonisme) comme une « machine de guerre » pour humilier l'orgueil de la raison dogmatique. En montrant que l'homme est une « chimère » et un « paradoxe » incapable de se comprendre par lui-même, il prépare l'esprit du lecteur à accueillir la vérité religieuse, seule capable de résoudre cette énigme.",
			problematique: "En quoi l'impasse de la raison naturelle, prise entre les doutes des pyrrhoniens et les affirmations des dogmatiques, démontre-t-elle la nécessité de la Révélation pour comprendre la condition humaine ?"
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
			"text": "DÉBUT\nLa recherche de la vérité\npar la raison naturelle",
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
			"text": "Le conflit des sectes :\nPyrrhoniens vs\nDogmatiques",
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
			"text": "[1-3] Force des\nPyrrhoniens :\nIncertitude de l'origine\net argument du rêve.",
			"loc": "480 259.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "4",
			"text": "[7-8] Force des\nDogmatiques :\nÉvidence des principes\nnaturels de bonne foi.\n(Mais sans réponse\nà l'origine).",
			"loc": "480 389.98",
			"category": "rectangle",
			"color": "#f6e58d",
			"borderColor": "#b8a22b",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "5",
			"text": "L'IMPASSE :\n[13] La nature confond\nles pyrrhoniens,\nla raison confond\nles dogmatiques.",
			"loc": "760.53 120",
			"category": "rectangle",
			"color": "#ff7675",
			"borderColor": "#d63031",
			"width": 240,
			"height": 100,
			"revealed": true
		},
		{
			"key": "6",
			"text": "CONSÉQUENCE :\n[9-11] L'homme est une\nchimère, un monstre,\nun paradoxe à lui-même\n(juge / ver de terre).",
			"loc": "1034.36 120",
			"category": "rectangle",
			"color": "#ff7675",
			"borderColor": "#d63031",
			"width": 240,
			"height": 110,
			"revealed": true
		},
		{
			"key": "7",
			"text": "LA SOLUTION :\n[17-18] Humilier la raison\nimpuissante.\nL'homme passe infiniment\nl'homme.\nÉcoutez Dieu.",
			"loc": "1319.74 120",
			"category": "ellipse",
			"color": "#55efc4",
			"borderColor": "#2e8b6e",
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
			"from": "3",
			"to": "4",
			"fromSide": "bottom",
			"toSide": "top"
		},
		{
			"from": "2",
			"to": "5",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "5",
			"to": "6",
			"fromSide": "right",
			"toSide": "left"
		},
		{
			"from": "6",
			"to": "7",
			"fromSide": "right",
			"toSide": "left"
		}
	]
};