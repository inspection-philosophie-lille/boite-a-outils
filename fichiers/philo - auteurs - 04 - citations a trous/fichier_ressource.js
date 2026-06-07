// REMARQUES
// Pour mettre le texte en italique			Les bornes &lt;i&gt;...&lt;/i&gt; ou &lt;em&gt;...&lt;/em&gt;
// Pour mettre le texte en gras				Les bornes &lt;strong&gt;...&lt;/strong&gt; ou &lt;b&gt;...&lt;/b&gt;
// Pour mettre le texte en couleur adaptée	Les bornes &lt;span style="color:red"&gt;...&lt;/span&gt;
// Pour mettre un espace insécable			Utiliser &amp;nbsp;

// 1. TITRES DE L'APPLICATION
// Généré le 07/06/2026 06:36:31
const title = "citations à trous";
const subtitle = "réviser le cours par les citations";

// 2. CITATIONS AVEC TROUS PRÉDÉFINIS
const textesAvecTrous = [

	// ============================================
	// ART (10 citations)
	// ============================================

	{ texte: "« L’**art** est l’**expression** de la **société**. »<BR><BR>Hippolyte TAINE, <em>Philosophie de l’art</em>, 1re partie", source: "art" },
	{ texte: "« L’art ne **reproduit** pas le **visible**, il **rend** visible. »<BR><BR>Paul KLEE, <em>Théorie de l’art moderne</em>", source: "art" },
	{ texte: "« Le **beau** est l’**éclat** du **vrai**. »<BR><BR>Platon, <em>Phèdre</em>, 250d", source: "art" },
	{ texte: "« L’art est un **mensonge** qui nous fait **prendre conscience** de la **vérité**. »<BR><BR>Friedrich NIETZSCHE, <em>fragments posthumes</em>, 1872", source: "art" },
	{ texte: "« L’**œuvre** d’art est une **idée** qu’on **rend** sensible. »<BR><BR>Georg Wilhelm Friedrich HEGEL, <em>Esthétique</em>, Introduction", source: "art" },
	{ texte: "« L’art **imite** la **nature** dans sa manière d’**opérer**. »<BR><BR>Aristote, <em>Physique</em>, livre II, chapitre 8", source: "art" },
	{ texte: "« La **poésie** est plus **philosophique** et plus **sérieuse** que l’histoire. »<BR><BR>Aristote, <em>Poétique</em>, chapitre 9", source: "art" },
	{ texte: "« L’art **délivre** de la **souffrance** par la **représentation**. »<BR><BR>Arthur SCHOPENHAUER, <em>Le Monde comme volonté et comme représentation</em>, livre III", source: "art" },
	{ texte: "« L’art est le **jeu** de la **raison**. »<BR><BR>Emmanuel KANT, <em>Critique de la faculté de juger</em>, § 43", source: "art" },
	{ texte: "« La **technique** sans l’art est **vide**, l’art sans la technique est **aveugle**. »<BR><BR>Denis DIDEROT, <em>Encyclopédie</em>, article « Art »", source: "art" },

	// ============================================
	// BONHEUR (10 citations)
	// ============================================
	{ texte: "« Le **bonheur** est le **souverain** **bien**. »<BR><BR>Aristote, <em>Éthique à Nicomaque</em>, livre I, chapitre 7", source: "bonheur" },
	{ texte: "« Le **plaisir** est le **commencement** et la **fin** de la vie heureuse. »<BR><BR>Épicure, <em>Lettre à Ménécée</em>", source: "bonheur" },
	{ texte: "« Le bonheur n’est pas un **idéal** de la raison, mais de l’**imagination**. »<BR><BR>Emmanuel KANT, <em>Critique de la raison pratique</em>, livre I", source: "bonheur" },
	{ texte: "« Le bonheur **suppose** une certaine **disposition** à se **suffire** à soi-même. »<BR><BR>Sénèque, <em>De la vie heureuse</em>, chapitre 4", source: "bonheur" },
	{ texte: "« Le souverain bien **consiste** à **vivre** conformément à la **nature**. »<BR><BR>Marc AURÈLE, <em>Pensées</em>, livre VIII", source: "bonheur" },
	{ texte: "« La **recherche** du bonheur est le **mobile** de toute **action** humaine. »<BR><BR>John LOCKE, <em>Essai concernant l’entendement humain</em>, livre II, chapitre 21", source: "bonheur" },
	{ texte: "« Le bonheur est un **art** à **pratiquer** au **quotidien**. »<BR><BR>Émile CHARTIER (Alain), <em>Propos sur le bonheur</em>, propos 1", source: "bonheur" },
	{ texte: "« Le bonheur est ce qui **rend** la vie **désirable** et la **mort** facile. »<BR><BR>Lucrèce, <em>De la nature des choses</em>, chant III", source: "bonheur" },
	{ texte: "« Le **premier devoir** de l’homme est d’être **heureux**. »<BR><BR>Jean-Jacques ROUSSEAU, <em>Les Rêveries du promeneur solitaire</em>, 5e promenade", source: "bonheur" },
	{ texte: "« La **vertu** **suffit** au **bonheur**. »<BR><BR>Cicéron, <em>Tusculanes</em>, livre V", source: "bonheur" },
	
	// ============================================
	// CONSCIENCE (10 citations)
	// ============================================
	{ texte: "« La **raison** est une **lumière** **naturelle**. »<BR><BR>René DESCARTES, <em>Règles pour la direction de l’esprit</em>, règle 1", source: "conscience" },
	{ texte: "« La **conscience** est la **voix** de l’**âme**. »<BR><BR>Jean-Jacques ROUSSEAU, <em>Émile ou De l’éducation</em>, livre IV", source: "conscience" },
	{ texte: "« La conscience est la **représentation** de ce qui se **passe** dans notre **esprit**. »<BR><BR>John LOCKE, <em>Essai concernant l’entendement humain</em>, livre II, chapitre 1", source: "conscience" },
	{ texte: "« La conscience **morale** est la **crainte** de la **société**. »<BR><BR>Friedrich NIETZSCHE, <em>Par-delà bien et mal</em>, § 199", source: "conscience" },
	{ texte: "« La conscience est une **lumière** **naturelle**. »<BR><BR>René DESCARTES, <em>Règles pour la direction de l’esprit</em>, règle 1", source: "conscience" },
	{ texte: "« La conscience est le **noyau** de l’**être**. »<BR><BR>Martin HEIDEGGER, <em>Être et temps</em>, § 54", source: "conscience" },
	{ texte: "« **Avoir** conscience, c’est **avoir** une **intention**. »<BR><BR>Edmund HUSSERL, <em>Idées directrices pour une phénoménologie</em>, § 84", source: "conscience" },
	{ texte: "« La conscience est un **fait** **indéniable**. »<BR><BR>Henri BERGSON, <em>Essai sur les données immédiates de la conscience</em>, chapitre 1", source: "conscience" },
	{ texte: "« **Dieu** a **donné** à l’homme la conscience pour être son **juge**. »<BR><BR>Blaise PASCAL, <em>Pensées</em>, fragment 131", source: "conscience" },
	{ texte: "« La conscience n’est **jamais** **adéquate** à elle-**même**. »<BR><BR>Jean-Paul SARTRE, <em>L’Être et le Néant</em>, Introduction", source: "conscience" },
	
	// ============================================
	// DEVOIR (10 citations)
	// ============================================
	{ texte: "« **Agis** de telle **sorte** que ta **volonté** puisse toujours valoir en même temps comme principe d’une législation universelle. »<BR><BR>Emmanuel KANT, <em>Fondation de la métaphysique des mœurs</em>, 1re section", source: "devoir" },
	{ texte: "« Le **devoir** est la **nécessité** d’**agir** par respect pour la loi. »<BR><BR>Emmanuel KANT, <em>Critique de la raison pratique</em>, livre I", source: "devoir" },
	{ texte: "« Le devoir de l’homme est d’**obéir** aux **lois** de la **cité**. »<BR><BR>Platon, <em>Criton</em>, 51b", source: "devoir" },
	{ texte: "« **L’homme** est **condamné** à être **libre**. »<BR><BR>Jean-Paul SARTRE, <em>L’Existentialisme est un humanisme</em>", source: "devoir" },
	{ texte: "« Le devoir est le **sentiment** de l’**obligation**. »<BR><BR>David HUME, <em>Traité de la nature humaine</em>, livre III, partie 2", source: "devoir" },
	{ texte: "« Le **premier devoir** est de **vivre** conformément à la **nature**. »<BR><BR>Épictète, <em>Entretiens</em>, livre I, chapitre 26", source: "devoir" },
	{ texte: "« Le devoir est la **matière** **première** de la **vertu**. »<BR><BR>Cicéron, <em>Les Devoirs</em>, livre I", source: "devoir" },
	{ texte: "« Le devoir s’**oppose** au **désir**. »<BR><BR>Spinoza, <em>Éthique</em>, partie IV, proposition 15", source: "devoir" },
	{ texte: "« Le devoir est un **principe** **pratique** qui **commande** sans promettre de bonheur. »<BR><BR>Emmanuel KANT, <em>Critique de la raison pratique</em>, livre II", source: "devoir" },
	{ texte: "« Le devoir est la **représentation** de la **loi** **morale**. »<BR><BR>Emmanuel KANT, <em>Métaphysique des mœurs</em>, Introduction", source: "devoir" },

	// ============================================
	// ETAT (10 citations)
	// ============================================
	{ texte: "« L’**homme** est un **animal** **politique**. »<BR><BR>Aristote, <em>Politique</em>, livre I, chapitre 2", source: "etat" },
	{ texte: "« L’**État** est la **chose** du **peuple**. »<BR><BR>Cicéron, <em>De la République</em>, livre I, 25", source: "etat" },
	{ texte: "« L’État est le **Léviathan**, c’est-à-dire l’homme **artificiel**. »<BR><BR>Thomas HOBBES, <em>Léviathan</em>, Introduction", source: "etat" },
	{ texte: "« L’État est la **raison** en **acte**. »<BR><BR>Georg Wilhelm Friedrich HEGEL, <em>Principes de la philosophie du droit</em>, § 258", source: "etat" },
	{ texte: "« L’État est la **forme** la plus **achevée** de la **communauté**. »<BR><BR>Aristote, <em>Politique</em>, livre III, chapitre 6", source: "etat" },
	{ texte: "« L’État est l’**instrument** de l’**oppression** d’une **classe** par une autre. »<BR><BR>Karl MARX, <em>Le Capital</em>, livre I, chapitre 32", source: "etat" },
	{ texte: "« L’État doit se **borner** à **garantir** la **liberté**. »<BR><BR>John LOCKE, <em>Traité du gouvernement civil</em>, chapitre 9", source: "etat" },
	{ texte: "« L’État est une **communauté** d’**hommes** **libres**. »<BR><BR>Montesquieu, <em>De l’esprit des lois</em>, livre XI, chapitre 3", source: "etat" },
	{ texte: "« L’État est la **séparation** de la **société** **civile** et de la communauté politique. »<BR><BR>Karl MARX, <em>La Question juive</em>", source: "etat" },
	{ texte: "« L’État **moderne** est **fondé** sur le **contrat social**. »<BR><BR>Jean-Jacques ROUSSEAU, <em>Du contrat social</em>, livre I, chapitre 6", source: "etat" },

	// ============================================
	// INCONSCIENT (10 citations)
	// ============================================
	{ texte: "« L’**inconscient** est le **véritable** **psychique**. »<BR><BR>Sigmund FREUD, <em>L’Interprétation du rêve</em>, chapitre 7", source: "inconscient" },
	{ texte: "« L’inconscient **parle** en **rêves**. »<BR><BR>Sigmund FREUD, <em>Introduction à la psychanalyse</em>, chapitre 5", source: "inconscient" },
	{ texte: "« Le **moi** n’est pas **maître** dans sa **propre** maison. »<BR><BR>Sigmund FREUD, <em>Nouvelles conférences sur la psychanalyse</em>, 31e conférence", source: "inconscient" },
	{ texte: "« L’inconscient **ignore** la **contradiction**. »<BR><BR>Sigmund FREUD, <em>L’Inconscient</em>", source: "inconscient" },
	{ texte: "« L’inconscient est **structuré** comme un **langage**. »<BR><BR>Jacques LACAN, <em>Écrits</em>, « Fonction et champ de la parole »", source: "inconscient" },
	{ texte: "« L’inconscient est le **discours** de l’**Autre**. »<BR><BR>Jacques LACAN, <em>Écrits</em>, « Subversion du sujet »", source: "inconscient" },
	{ texte: "« Il n’y a pas de **pensée** sans **inconscient**. »<BR><BR>Henri BERGSON, <em>L’Énergie spirituelle</em>, chapitre 5", source: "inconscient" },
	{ texte: "« L’inconscient est la **mémoire** **organique**. »<BR><BR>Henri BERGSON, <em>Matériau et mémoire</em>, chapitre 3", source: "inconscient" },
	{ texte: "« **L’homme** est **condamné** à être **libre**. »<BR><BR>Jean-Paul SARTRE, <em>L’Existentialisme est un humanisme</em>", source: "inconscient" },
	{ texte: "« L’inconscient est une **hypothèse** **nécessaire**. »<BR><BR>Arthur SCHOPENHAUER, <em>Le Monde comme volonté et comme représentation</em>, livre II", source: "inconscient" },

	// ============================================
	// JUSTICE (10 citations)
	// ============================================
	{ texte: "« La **justice** est la **vertu** des **cités**. »<BR><BR>Platon, <em>La République</em>, livre IV, 433a", source: "justice" },
	{ texte: "« La justice est de **rendre** à **chacun** son **dû**. »<BR><BR>Cicéron, <em>Les Devoirs</em>, livre I, chapitre 15", source: "justice" },
	{ texte: "« La justice est la **première vertu** des **institutions** **sociales**. »<BR><BR>John RAWLS, <em>Théorie de la justice</em>, chapitre 1", source: "justice" },
	{ texte: "« La justice est l’**avantage** du **plus fort**. »<BR><BR>Platon, <em>La République</em>, livre I, 338c (Thrasymaque)", source: "justice" },
	{ texte: "« La justice est une **modération**. »<BR><BR>Aristote, <em>Éthique à Nicomaque</em>, livre V", source: "justice" },
	{ texte: "« La justice n’est que la **convention** **humaine**. »<BR><BR>Épicure, <em>Maximes capitales</em>, maxime 31", source: "justice" },
	{ texte: "« La justice est la **volonté** **constante** de **donner** à chacun son droit. »<BR><BR>Ulpien, <em>Digeste</em>, livre I", source: "justice" },
	{ texte: "« La justice est un **fruit** de la **raison**. »<BR><BR>Montesquieu, <em>De l’esprit des lois</em>, livre XXVI, chapitre 15", source: "justice" },
	{ texte: "« La justice **commande** de **respecter** les **droits** d’autrui. »<BR><BR>John LOCKE, <em>Traité du gouvernement civil</em>, chapitre 2", source: "justice" },
	{ texte: "« La justice est une **construction** **sociale**. »<BR><BR>Blaise PASCAL, <em>Pensées</em>, fragment 60", source: "justice" },

	// ============================================
	// LANGAGE (10 citations)
	// ============================================
	{ texte: "« La **limite** de mon **langage** est la **limite** de mon monde. »<BR><BR>Ludwig WITTGENSTEIN, <em>Tractatus logico-philosophicus</em>, proposition 5.6", source: "langage" },
	{ texte: "« Le langage est une **forme** de **vie**. »<BR><BR>Ludwig WITTGENSTEIN, <em>Recherches philosophiques</em>, § 23", source: "langage" },
	{ texte: "« Le langage est le **miroir** de la **pensée**. »<BR><BR>Aristote, <em>De l’interprétation</em>, chapitre 1", source: "langage" },
	{ texte: "« Le langage est un **système** de **signes**. »<BR><BR>Ferdinand de SAUSSURE, <em>Cours de linguistique générale</em>, 1re partie", source: "langage" },
	{ texte: "« Le langage est la **maison** de l’**être**. »<BR><BR>Martin HEIDEGGER, <em>Lettre sur l’humanisme</em>", source: "langage" },
	{ texte: "« Le langage est une **convention** **sociale**. »<BR><BR>Jean-Jacques ROUSSEAU, <em>Essai sur l’origine des langues</em>, chapitre 1", source: "langage" },
	{ texte: "« Le langage **distingue** l’**homme** de l’**animal**. »<BR><BR>René DESCARTES, <em>Lettre au marquis de Newcastle</em>", source: "langage" },
	{ texte: "« Le langage est une **technique**. »<BR><BR>Platon, <em>Cratyle</em>, 388c", source: "langage" },
	{ texte: "« Le langage n’est pas seulement **communication** mais **expression**. »<BR><BR>Henri BERGSON, <em>La Pensée et le Mouvant</em>, chapitre 4", source: "langage" },
	{ texte: "« Le langage **trompe**. »<BR><BR>Blaise PASCAL, <em>Pensées</em>, fragment 44", source: "langage" },

	// ============================================
	// LIBERTÉ (10 citations)
	// ============================================
	{ texte: "« L’**homme** est **né** **libre**, et partout il est dans les fers. »<BR><BR>Jean-Jacques ROUSSEAU, <em>Du contrat social</em>, livre I, chapitre 1", source: "liberté" },
	{ texte: "« La **liberté** est le **pouvoir** de **faire** ce que l’on doit vouloir. »<BR><BR>Emmanuel KANT, <em>Métaphysique des mœurs</em>, Introduction", source: "liberté" },
	{ texte: "« La liberté est le **fondement** de la **morale**. »<BR><BR>Jean-Paul SARTRE, <em>L’Existentialisme est un humanisme</em>", source: "liberté" },
	{ texte: "« La liberté **consiste** à **obéir** aux **lois** qu’on s’est prescrites. »<BR><BR>Jean-Jacques ROUSSEAU, <em>Du contrat social</em>, livre I, chapitre 8", source: "liberté" },
	{ texte: "« La liberté est l’**absence** d’**obstacle**. »<BR><BR>Thomas HOBBES, <em>Léviathan</em>, chapitre 21", source: "liberté" },
	{ texte: "« La liberté est un **droit** **naturel**. »<BR><BR>John LOCKE, <em>Traité du gouvernement civil</em>, chapitre 4", source: "liberté" },
	{ texte: "« La liberté est la **condition** de la **dignité** **humaine**. »<BR><BR>Emmanuel KANT, <em>Fondation de la métaphysique des mœurs</em>, 3e section", source: "liberté" },
	{ texte: "« La liberté est une **illusion** **nécessaire**. »<BR><BR>Spinoza, <em>Éthique</em>, partie II, proposition 35", source: "liberté" },
	{ texte: "« La liberté est le **pouvoir** de **dire** **non**. »<BR><BR>Henri BERGSON, <em>Les Deux Sources de la morale et de la religion</em>, chapitre 1", source: "liberté" },
	{ texte: "« La liberté, c’est la **conscience**. »<BR><BR>Georg Wilhelm Friedrich HEGEL, <em>Leçons sur la philosophie de l’histoire</em>, Introduction", source: "liberté" },

	// ============================================
	// NATURE (10 citations)
	// ============================================
	{ texte: "« La **nature** ne **fait** rien en **vain**. »<BR><BR>Aristote, <em>La Politique</em>, livre I, chapitre 8", source: "nature" },
	{ texte: "« **Reviens** à la **nature**. »<BR><BR>Épicure, <em>Maximes capitales</em>, maxime 29", source: "nature" },
	{ texte: "« La nature est un **livre** **écrit** en **langage** mathématique. »<BR><BR>Galileo GALILEI, <em>L’Essayeur</em>", source: "nature" },
	{ texte: "« La nature est la **volonté** de **vivre**. »<BR><BR>Arthur SCHOPENHAUER, <em>Le Monde comme volonté et comme représentation</em>, livre II", source: "nature" },
	{ texte: "« La nature a **horreur** du **vide**. »<BR><BR>Aristote, <em>Physique</em>, livre IV", source: "nature" },
	{ texte: "« La nature est l’**œuvre** de **Dieu**. »<BR><BR>Thomas d’AQUIN, <em>Somme théologique</em>, 1re partie, question 47", source: "nature" },
	{ texte: "« La nature ne **fait** pas de **saut**. »<BR><BR>Gottfried Wilhelm LEIBNIZ, <em>Nouveaux essais sur l’entendement humain</em>, préface", source: "nature" },
	{ texte: "« La nature est la **mère** et la **maîtresse**. »<BR><BR>Michel de MONTAIGNE, <em>Essais</em>, livre III, chapitre 13", source: "nature" },
	{ texte: "« La nature **humaine** ne **change** pas. »<BR><BR>Blaise PASCAL, <em>Pensées</em>, fragment 131", source: "nature" },
	{ texte: "« La nature est une **puissance** **créatrice**. »<BR><BR>Henri BERGSON, <em>L’Évolution créatrice</em>, chapitre 1", source: "nature" },

	// ============================================
	// RAISON (10 citations)
	// ============================================
	{ texte: "« La **raison** est la **faculté** des **principes**. »<BR><BR>Emmanuel KANT, <em>Critique de la raison pure</em>, Introduction", source: "raison" },
	{ texte: "« La raison est le **propre** de l’**homme**. »<BR><BR>Aristote, <em>Politique</em>, livre I, chapitre 13", source: "raison" },
	{ texte: "« La raison est l’**esclave** des **passions**. »<BR><BR>David HUME, <em>Traité de la nature humaine</em>, livre II, partie 3", source: "raison" },
	{ texte: "« La raison ne peut rien sans l’**expérience**. »<BR><BR>John LOCKE, <em>Essai concernant l’entendement humain</em>, livre II, chapitre 1", source: "raison" },
	{ texte: "« La raison est la **lumière** **naturelle**. »<BR><BR>René DESCARTES, <em>Règles pour la direction de l’esprit</em>, règle 1", source: "raison" },
	{ texte: "« La raison est la **seule** **chose** qui nous **rende** semblables à Dieu. »<BR><BR>Thomas d’AQUIN, <em>Somme théologique</em>, 1re partie, question 79", source: "raison" },
	{ texte: "« La raison a **toujours** **tort** face au **cœur**. »<BR><BR>Blaise PASCAL, <em>Pensées</em>, fragment 277", source: "raison" },
	{ texte: "« La raison est le **logos** **universel**. »<BR><BR>Marc AURÈLE, <em>Pensées</em>, livre IV", source: "raison" },
	{ texte: "« La raison **libère** l’homme des **passions**. »<BR><BR>Spinoza, <em>Éthique</em>, partie V, proposition 42", source: "raison" },
	{ texte: "« **Penser** **raison** **exister**. »<BR><BR>René DESCARTES, <em>Discours de la méthode</em>", source: "raison" },

	// ============================================
	// RELIGION (10 citations)
	// ============================================
	{ texte: "« **Dieu** est **mort**. »<BR><BR>Friedrich NIETZSCHE, <em>Le Gai Savoir</em>, §125", source: "religion" },
	{ texte: "« La **religion** est l’**opium** du **peuple**. »<BR><BR>Karl MARX, <em>Critique de la philosophie du droit de Hegel</em>, Introduction", source: "religion" },
	{ texte: "« La religion est le **sentiment** d’une **dépendance** **absolue**. »<BR><BR>Friedrich SCHLEIERMACHER, <em>Discours sur la religion</em>", source: "religion" },
	{ texte: "« La religion est une **illusion**. »<BR><BR>Sigmund FREUD, <em>L’Avenir d’une illusion</em>, chapitre 8", source: "religion" },
	{ texte: "« La religion **naturelle** est la plus **ancienne**. »<BR><BR>David HUME, <em>Histoire naturelle de la religion</em>, section 1", source: "religion" },
	{ texte: "« La religion est la **reconnaissance** de **Dieu**. »<BR><BR>Thomas d’AQUIN, <em>Somme théologique</em>, 2e partie, question 81", source: "religion" },
	{ texte: "« La religion est un **fait** **social**. »<BR><BR>Émile DURKHEIM, <em>Les Formes élémentaires de la vie religieuse</em>, Introduction", source: "religion" },
	{ texte: "« La **foi** est **supérieure** à la **raison**. »<BR><BR>Blaise PASCAL, <em>Pensées</em>, fragment 277", source: "religion" },
	{ texte: "« Dieu est la **substance** **infinie**. »<BR><BR>Spinoza, <em>Éthique</em>, partie I, définition 6", source: "religion" },
	{ texte: "« La religion est le **refuge** de l’**ignorance**. »<BR><BR>Lucrèce, <em>De la nature des choses</em>, chant I", source: "religion" },

	// ============================================
	// SCIENCE (10 citations)
	// ============================================
	{ texte: "« Le **doute** est le **commencement** de la **science**. »<BR><BR>René DESCARTES, <em>Méditations métaphysiques</em>, Méditation 1", source: "science" },
	{ texte: "« **Savoir**, c’est **savoir** par les **causes**. »<BR><BR>Aristote, <em>Métaphysique</em>, livre I, chapitre 1", source: "science" },
	{ texte: "« La science **progresse** par **révolutions**. »<BR><BR>Thomas KUHN, <em>La Structure des révolutions scientifiques</em>, chapitre 9", source: "science" },
	{ texte: "« La science est un **langage** **bien** **fait**. »<BR><BR>Émile MEYERSON, <em>Identité et réalité</em>, chapitre 1", source: "science" },
	{ texte: "« La science ne **rend** pas **heureux**. »<BR><BR>Jean-Jacques ROUSSEAU, <em>Discours sur les sciences et les arts</em>, 2e partie", source: "science" },
	{ texte: "« La science est une **entreprise** **essentiellement** **critique**. »<BR><BR>Karl POPPER, <em>La Logique de la découverte scientifique</em>, chapitre 1", source: "science" },
	{ texte: "« La science est la **mesure** de **toutes** **choses**. »<BR><BR>Protagoras, fragment B1", source: "science" },
	{ texte: "« La science est une **connaissance** **certaine** par les **causes**. »<BR><BR>Spinoza, <em>Traité de la réforme de l’entendement</em>, § 85", source: "science" },
	{ texte: "« La science **humaine** n’est que la **copie** de la science divine. »<BR><BR>Francis BACON, <em>Novum Organum</em>, livre I, aphorisme 1", source: "science" },
	{ texte: "« La science **moderne** est **fille** de la **technique**. »<BR><BR>Martin HEIDEGGER, <em>La Question de la technique</em>", source: "science" },

	// ============================================
	// TECHNIQUE (10 citations)
	// ============================================
	{ texte: "« La **technique** est une **forme** de la **poésie**. »<BR><BR>Martin HEIDEGGER, <em>La Question de la technique</em>", source: "technique" },
	{ texte: "« La technique est une **prothèse**. »<BR><BR>Ernst KAPP, <em>Principes d’une philosophie de la technique</em>", source: "technique" },
	{ texte: "« La technique **transforme** le **monde**. »<BR><BR>Gilbert SIMONDON, <em>Du mode d’existence des objets techniques</em>, Introduction", source: "technique" },
	{ texte: "« La technique est la **plus grande** **puissance** de **destruction**. »<BR><BR>Friedrich NIETZSCHE, <em>Fragments posthumes</em>", source: "technique" },
	{ texte: "« La technique est la **révélation** de la **nature**. »<BR><BR>Francis BACON, <em>Novum Organum</em>, livre I, aphorisme 3", source: "technique" },
	{ texte: "« La technique est une **activité** de l’**esprit**. »<BR><BR>Émile CHARTIER (Alain), <em>Propos sur la technique</em>", source: "technique" },
	{ texte: "« La technique **prolonge** les **organes**. »<BR><BR>Karl MARX, <em>Le Capital</em>, livre I, chapitre 13", source: "technique" },
	{ texte: "« La technique est un **danger** pour l’**homme**. »<BR><BR>Hans JONAS, <em>Le Principe responsabilité</em>, chapitre 1", source: "technique" },
	{ texte: "« La technique est l’**expression** de la **volonté** de **puissance**. »<BR><BR>Friedrich NIETZSCHE, <em>La Volonté de puissance</em>, § 366", source: "technique" },
	{ texte: "« La technique n’est **ni** **bonne** **ni** mauvaise. »<BR><BR>Bertrand RUSSELL, <em>Science et Bonheur</em>", source: "technique" },

	// ============================================
	// TEMPS (10 citations)
	// ============================================
	{ texte: "« Le **temps** est la **mesure** du **mouvement**. »<BR><BR>Aristote, <em>Physique</em>, livre IV, chapitre 11", source: "temps" },
	{ texte: "« Le temps est une **image** **mobile** de l’**éternité**. »<BR><BR>Platon, <em>Timée</em>, 37d", source: "temps" },
	{ texte: "« Le **passé** n’est plus, l’**avenir** n’est pas encore. »<BR><BR>Augustin, <em>Confessions</em>, livre XI", source: "temps" },
	{ texte: "« Le temps est la **forme** **a priori** du **sens** interne. »<BR><BR>Emmanuel KANT, <em>Critique de la raison pure</em>, Esthétique transcendantale", source: "temps" },
	{ texte: "« Le temps est la **condition** de l’**existence**. »<BR><BR>Martin HEIDEGGER, <em>Être et temps</em>, § 65", source: "temps" },
	{ texte: "« Le temps est le **nombre** du **mouvement**. »<BR><BR>Aristote, <em>Physique</em>, livre IV, chapitre 14", source: "temps" },
	{ texte: "« Le temps est la **substance** de l’**homme**. »<BR><BR>Henri BERGSON, <em>La Pensée et le Mouvant</em>, chapitre 5", source: "temps" },
	{ texte: "« Le temps est l’**étoffe** dont la **vie** est faite. »<BR><BR>Henri BERGSON, <em>L’Évolution créatrice</em>, chapitre 3", source: "temps" },
	{ texte: "« Le temps n’existe pas en **soi**. »<BR><BR>Gottfried Wilhelm LEIBNIZ, <em>Cinquième écrit à Clarke</em>, § 47", source: "temps" },
	{ texte: "« Le **temps** **passe** **irréversiblement**. »<BR><BR>Anonyme", source: "temps" },

	// ============================================
	// TRAVAIL (10 citations)
	// ============================================
	{ texte: "« Le **travail** est une **nécessité** **naturelle**. »<BR><BR>Aristote, <em>Éthique à Nicomaque</em>, livre X, chapitre 6", source: "travail" },
	{ texte: "« Le travail **rend** l’homme **maître** de la **nature**. »<BR><BR>Francis BACON, <em>Novum Organum</em>, livre I, aphorisme 3", source: "travail" },
	{ texte: "« Le travail est le **père** de la **richesse**. »<BR><BR>William PETTY, <em>Traité des impôts</em>", source: "travail" },
	{ texte: "« Le travail est la **mesure** de la **valeur**. »<BR><BR>Adam SMITH, <em>La Richesse des nations</em>, livre I, chapitre 5", source: "travail" },
	{ texte: "« Le travail est l’**essence** de l’**homme**. »<BR><BR>Karl MARX, <em>Le Capital</em>, livre I, chapitre 7", source: "travail" },
	{ texte: "« Le travail **aliène** **l’homme** **social**. »<BR><BR>Karl MARX, <em>Manuscrits de 1844</em>", source: "travail" },
	{ texte: "« Le travail est une **peine** **nécessaire**. »<BR><BR>Jean-Jacques ROUSSEAU, <em>Émile ou De l’éducation</em>, livre III", source: "travail" },
	{ texte: "« Le travail **divise** l’**homme**. »<BR><BR>Karl MARX, <em>Manuscrits de 1844</em>, 1er manuscrit", source: "travail" },
	{ texte: "« Le travail est la **fin** de la **liberté**. »<BR><BR>Georg Wilhelm Friedrich HEGEL, <em>Principes de la philosophie du droit</em>, § 194", source: "travail" },
	{ texte: "« Le travail est une **activité** **aliénante**. »<BR><BR>Karl MARX, <em>Manuscrits de 1844</em>, 1er manuscrit", source: "travail" },

	// ============================================
	// VÉRITÉ (10 citations)
	// ============================================
	{ texte: "« La **vérité** est la **conformité** de l’**intellect** à la chose. »<BR><BR>Thomas d’AQUIN, <em>Somme théologique</em>, 1re partie, question 16", source: "vérité" },
	{ texte: "« La vérité est **fille** du **temps**. »<BR><BR>Francis BACON, <em>Novum Organum</em>, livre I, aphorisme 84", source: "vérité" },
	{ texte: "« La vérité est la **plus grande** des **puissances**. »<BR><BR>Spinoza, <em>Traité théologico-politique</em>, chapitre 20", source: "vérité" },
	{ texte: "« La vérité n’existe pas en **soi**. »<BR><BR>Friedrich NIETZSCHE, <em>Fragments posthumes</em>", source: "vérité" },
	{ texte: "« La vérité est une **idole**. »<BR><BR>Blaise PASCAL, <em>Pensées</em>, fragment 44", source: "vérité" },
	{ texte: "« La vérité est une **puissance**. »<BR><BR>Georg Wilhelm Friedrich HEGEL, <em>Phénoménologie de l’esprit</em>, Préface", source: "vérité" },
	{ texte: "« La vérité est **relative** au **langage**. »<BR><BR>Ludwig WITTGENSTEIN, <em>Tractatus logico-philosophicus</em>, proposition 4.001", source: "vérité" },
	{ texte: "« La vérité est ce qu’on ne peut pas ne pas **penser**. »<BR><BR>Henri BERGSON, <em>La Pensée et le Mouvant</em>, chapitre 1", source: "vérité" },
	{ texte: "« La **vérité** est le **fondement** de toute **connaissance**. »<BR><BR>Emmanuel KANT, <em>Critique de la raison pure</em>", source: "vérité" }
	
];