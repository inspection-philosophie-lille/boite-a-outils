/* =======================================================
CONFIGURATION GÉNÉRALE DE L'APPLICATION
- `appTitle`    : titre principal affiché dans la barre d'outils
- `appSubtitle` : sous-titre affiché sous le titre principal
========================================================== */
var AppConfig = {
	appTitle: "introduction à la « philosophie »",
	appSubtitle: "reconstituer la définition"
};

/* =======================================================
Pour adapter le contenu, modifiez uniquement cet objet.
- `text`    :   texte de la vignette (`|` = saut de ligne)
- `defined` :   true  → cellule pré-affichée
                false → vignette à remplir
- `title`   :   titre affiché dans la liste des textes

RÈGLE : chaque définition contient EXACTEMENT 15 cellules (id 0 à 14).
        Tous les DÉBUTS DE PHRASE sont `defined: true`
        (y compris le tout premier et le tout dernier item).
========================================================== */

var AppDataList = [

	/* ---------- Définition 1 ---------- */
	{
		title: "Définition 1",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est une activité", defined: false},
			{ id: 2,  text: "de réflexion critique", defined: false},
			{ id: 3,  text: "qui interroge", defined: false},
			{ id: 4,  text: "les évidences", defined: false},
			{ id: 5,  text: "et les certitudes", defined: false},
			{ id: 6,  text: "les mieux établies.", defined: false},
			{ id: 7,  text: "Elle naît", defined: true},
			{ id: 8,  text: "de l'étonnement", defined: false},
			{ id: 9,  text: "devant le monde", defined: false},
			{ id: 10, text: "et pousse à", defined: false},
			{ id: 11, text: "se poser des questions", defined: false},
			{ id: 12, text: "sans se contenter", defined: false},
			{ id: 13, text: "des réponses", defined: false},
			{ id: 14, text: "toutes faites.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 2 ---------- */
	{
		title: "Définition 2",
		items: [
			{ id: 0,  text: "Philosopher,", defined: true},
			{ id: 1,  text: "c'est refuser", defined: false},
			{ id: 2,  text: "de se satisfaire", defined: false},
			{ id: 3,  text: "des apparences", defined: false},
			{ id: 4,  text: "et chercher", defined: false},
			{ id: 5,  text: "à comprendre", defined: false},
			{ id: 6,  text: "le sens profond", defined: false},
			{ id: 7,  text: "des choses.", defined: false},
			{ id: 8,  text: "C'est aussi", defined: true},
			{ id: 9,  text: "apprendre à penser", defined: false},
			{ id: 10, text: "par soi-même", defined: false},
			{ id: 11, text: "en examinant", defined: false},
			{ id: 12, text: "chaque idée", defined: false},
			{ id: 13, text: "avec rigueur", defined: false},
			{ id: 14, text: "et en acceptant de douter.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 3 ---------- */
	{
		title: "Définition 3",
		items: [
			{ id: 0,  text: "L'opinion", defined: true},
			{ id: 1,  text: "est une croyance", defined: false},
			{ id: 2,  text: "spontanée et", defined: false},
			{ id: 3,  text: "souvent incertaine,", defined: false},
			{ id: 4,  text: "tandis que", defined: false},
			{ id: 5,  text: "la philosophie", defined: false},
			{ id: 6,  text: "cherche à fonder", defined: false},
			{ id: 7,  text: "ses affirmations.", defined: false},
			{ id: 8,  text: "Là où l'opinion", defined: true},
			{ id: 9,  text: "se contente", defined: false},
			{ id: 10, text: "d'affirmer,", defined: false},
			{ id: 11, text: "la philosophie", defined: false},
			{ id: 12, text: "exige des raisons", defined: false},
			{ id: 13, text: "et interroge la valeur", defined: false},
			{ id: 14, text: "de ses propres certitudes.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 4 ---------- */
	{
		title: "Définition 4",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "n'est pas", defined: false},
			{ id: 2,  text: "un savoir tout fait,", defined: false},
			{ id: 3,  text: "mais une", defined: false},
			{ id: 4,  text: "démarche vivante", defined: false},
			{ id: 5,  text: "qui consiste", defined: false},
			{ id: 6,  text: "à questionner", defined: false},
			{ id: 7,  text: "sans relâche.", defined: false},
			{ id: 8,  text: "Elle apprend", defined: true},
			{ id: 9,  text: "à penser", defined: false},
			{ id: 10, text: "par soi-même", defined: false},
			{ id: 11, text: "plutôt que", defined: false},
			{ id: 12, text: "de répéter", defined: false},
			{ id: 13, text: "les idées reçues", defined: false},
			{ id: 14, text: "sans les examiner.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 5 ---------- */
	{
		title: "Définition 5",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "se distingue", defined: false},
			{ id: 2,  text: "de la science", defined: false},
			{ id: 3,  text: "en ce qu'elle", defined: false},
			{ id: 4,  text: "interroge", defined: false},
			{ id: 5,  text: "le sens", defined: false},
			{ id: 6,  text: "et les fondements", defined: false},
			{ id: 7,  text: "de toute connaissance.", defined: false},
			{ id: 8,  text: "Elle ne se contente pas", defined: true},
			{ id: 9,  text: "de décrire", defined: false},
			{ id: 10, text: "les faits,", defined: false},
			{ id: 11, text: "elle cherche", defined: false},
			{ id: 12, text: "à comprendre", defined: false},
			{ id: 13, text: "ce qu'ils signifient", defined: false},
			{ id: 14, text: "pour l'être humain.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 6 ---------- */
	{
		title: "Définition 6",
		items: [
			{ id: 0,  text: "Faire de la philosophie,", defined: true},
			{ id: 1,  text: "c'est d'abord", defined: false},
			{ id: 2,  text: "apprendre à douter", defined: false},
			{ id: 3,  text: "de ce qui", defined: false},
			{ id: 4,  text: "nous semble", defined: false},
			{ id: 5,  text: "évident,", defined: false},
			{ id: 6,  text: "afin de mieux", defined: false},
			{ id: 7,  text: "comprendre.", defined: false},
			{ id: 8,  text: "C'est ensuite", defined: true},
			{ id: 9,  text: "chercher des", defined: false},
			{ id: 10, text: "raisons solides", defined: false},
			{ id: 11, text: "plutôt que", defined: false},
			{ id: 12, text: "de se fier", defined: false},
			{ id: 13, text: "à ses premières", defined: false},
			{ id: 14, text: "impressions.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 7 ---------- */
	{
		title: "Définition 7",
		items: [
			{ id: 0,  text: "Le philosophe", defined: true},
			{ id: 1,  text: "ne se contente pas", defined: false},
			{ id: 2,  text: "de son avis :", defined: false},
			{ id: 3,  text: "il cherche", defined: false},
			{ id: 4,  text: "à justifier", defined: false},
			{ id: 5,  text: "ce qu'il affirme", defined: false},
			{ id: 6,  text: "par des arguments", defined: false},
			{ id: 7,  text: "solides.", defined: false},
			{ id: 8,  text: "Sa démarche", defined: true},
			{ id: 9,  text: "est donc", defined: false},
			{ id: 10, text: "avant tout", defined: false},
			{ id: 11, text: "une quête", defined: false},
			{ id: 12, text: "de vérité", defined: false},
			{ id: 13, text: "menée avec rigueur", defined: false},
			{ id: 14, text: "et honnêteté.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 8 ---------- */
	{
		title: "Définition 8",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "nous invite", defined: false},
			{ id: 2,  text: "à examiner", defined: false},
			{ id: 3,  text: "nos propres", defined: false},
			{ id: 4,  text: "convictions", defined: false},
			{ id: 5,  text: "pour les", defined: false},
			{ id: 6,  text: "éprouver", defined: false},
			{ id: 7,  text: "et les affiner.", defined: false},
			{ id: 8,  text: "Elle enseigne", defined: true},
			{ id: 9,  text: "que penser", defined: false},
			{ id: 10, text: "n'est pas", defined: false},
			{ id: 11, text: "répéter,", defined: false},
			{ id: 12, text: "mais construire", defined: false},
			{ id: 13, text: "sa pensée par un effort", defined: false},
			{ id: 14, text: "personnel.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 9 ---------- */
	{
		title: "Définition 9",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "consiste à", defined: false},
			{ id: 2,  text: "poser des questions", defined: false},
			{ id: 3,  text: "radicales", defined: false},
			{ id: 4,  text: "sur des sujets", defined: false},
			{ id: 5,  text: "que l'on croit", defined: false},
			{ id: 6,  text: "maîtriser,", defined: false},
			{ id: 7,  text: "afin de mieux les penser.", defined: false},
			{ id: 8,  text: "Elle est", defined: true},
			{ id: 9,  text: "un exercice", defined: false},
			{ id: 10, text: "de lucidité", defined: false},
			{ id: 11, text: "et de liberté,", defined: false},
			{ id: 12, text: "qui libère des préjugés", defined: false},
			{ id: 13, text: "et des habitudes,", defined: false},
			{ id: 14, text: "pour penser plus librement.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 10 ---------- */
	{
		title: "Définition 10",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est un questionnement", defined: false},
			{ id: 2,  text: "sur les grandes énigmes", defined: false},
			{ id: 3,  text: "de l'existence :", defined: false},
			{ id: 4,  text: "la vie, la mort,", defined: false},
			{ id: 5,  text: "la vérité,", defined: false},
			{ id: 6,  text: "le bien", defined: false},
			{ id: 7,  text: "et le mal.", defined: false},
			{ id: 8,  text: "Elle cherche", defined: true},
			{ id: 9,  text: "à éclairer", defined: false},
			{ id: 10, text: "l'existence humaine", defined: false},
			{ id: 11, text: "par la raison", defined: false},
			{ id: 12, text: "plutôt que", defined: false},
			{ id: 13, text: "par les seules", defined: false},
			{ id: 14, text: "croyances ou traditions.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 11 ---------- */
	{
		title: "Définition 11",
		items: [
			{ id: 0,  text: "Philosopher,", defined: true},
			{ id: 1,  text: "c'est prendre", defined: false},
			{ id: 2,  text: "le temps", defined: false},
			{ id: 3,  text: "de réfléchir", defined: false},
			{ id: 4,  text: "au lieu de", defined: false},
			{ id: 5,  text: "réagir", defined: false},
			{ id: 6,  text: "dans l'urgence.", defined: false},
			{ id: 7,  text: "C'est préférer", defined: true},
			{ id: 8,  text: "l'examen patient", defined: false},
			{ id: 9,  text: "à la précipitation", defined: false},
			{ id: 10, text: "du jugement.", defined: false},
			{ id: 11, text: "C'est enfin", defined: true},
			{ id: 12, text: "chercher la vérité", defined: false},
			{ id: 13, text: "sans se presser", defined: false},
			{ id: 14, text: "de conclure trop vite.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 12 ---------- */
	{
		title: "Définition 12",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "n'est ni", defined: false},
			{ id: 2,  text: "une science", defined: false},
			{ id: 3,  text: "ni une religion :", defined: false},
			{ id: 4,  text: "elle est", defined: false},
			{ id: 5,  text: "une recherche", defined: false},
			{ id: 6,  text: "libre et rationnelle", defined: false},
			{ id: 7,  text: "de la vérité.", defined: false},
			{ id: 8,  text: "Elle assume", defined: true},
			{ id: 9,  text: "ses incertitudes", defined: false},
			{ id: 10, text: "et progresse", defined: false},
			{ id: 11, text: "par le doute", defined: false},
			{ id: 12, text: "plutôt que", defined: false},
			{ id: 13, text: "par la seule", defined: false},
			{ id: 14, text: "autorité.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 13 ---------- */
	{
		title: "Définition 13",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "apprend à", defined: false},
			{ id: 2,  text: "penser par soi-même", defined: false},
			{ id: 3,  text: "sans dépendre", defined: false},
			{ id: 4,  text: "de l'opinion", defined: false},
			{ id: 5,  text: "dominante", defined: false},
			{ id: 6,  text: "ni des", defined: false},
			{ id: 7,  text: "préjugés.", defined: false},
			{ id: 8,  text: "Elle forme", defined: true},
			{ id: 9,  text: "un esprit", defined: false},
			{ id: 10, text: "libre, critique", defined: false},
			{ id: 11, text: "et responsable,", defined: false},
			{ id: 12, text: "capable de", defined: false},
			{ id: 13, text: "juger par lui-même", defined: false},
			{ id: 14, text: "et en connaissance de cause.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 14 ---------- */
	{
		title: "Définition 14",
		items: [
			{ id: 0,  text: "Philosopher,", defined: true},
			{ id: 1,  text: "c'est s'interroger", defined: false},
			{ id: 2,  text: "sur le sens", defined: false},
			{ id: 3,  text: "de la vie,", defined: false},
			{ id: 4,  text: "de la connaissance", defined: false},
			{ id: 5,  text: "et de l'action", defined: false},
			{ id: 6,  text: "humaine,", defined: false},
			{ id: 7,  text: "sans jamais se satisfaire", defined: false},
			{ id: 8,  text: "de réponses", defined: true},
			{ id: 9,  text: "toutes faites", defined: false},
			{ id: 10, text: "et en gardant", defined: false},
			{ id: 11, text: "toujours", defined: false},
			{ id: 12, text: "l'esprit ouvert", defined: false},
			{ id: 13, text: "et critique,", defined: false},
			{ id: 14, text: "pour avancer dans la vérité.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 15 ---------- */
	{
		title: "Définition 15",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est l'amour", defined: false},
			{ id: 2,  text: "de la sagesse,", defined: false},
			{ id: 3,  text: "c'est-à-dire", defined: false},
			{ id: 4,  text: "la recherche", defined: false},
			{ id: 5,  text: "constante", defined: false},
			{ id: 6,  text: "de la vérité", defined: false},
			{ id: 7,  text: "et du bien.", defined: false},
			{ id: 8,  text: "Elle ne possède pas", defined: true},
			{ id: 9,  text: "la sagesse,", defined: false},
			{ id: 10, text: "elle la", defined: false},
			{ id: 11, text: "poursuit", defined: false},
			{ id: 12, text: "avec", defined: false},
			{ id: 13, text: "patience", defined: false},
			{ id: 14, text: "et persévérance.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 16 ---------- */
	{
		title: "Définition 16",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "nous apprend", defined: false},
			{ id: 2,  text: "à voir", defined: false},
			{ id: 3,  text: "le monde", defined: false},
			{ id: 4,  text: "autrement,", defined: false},
			{ id: 5,  text: "à dépasser", defined: false},
			{ id: 6,  text: "nos habitudes", defined: false},
			{ id: 7,  text: "de pensée.", defined: false},
			{ id: 8,  text: "Elle invite", defined: true},
			{ id: 9,  text: "à remettre", defined: false},
			{ id: 10, text: "en question", defined: false},
			{ id: 11, text: "ce que nous", defined: false},
			{ id: 12, text: "croyons", defined: false},
			{ id: 13, text: "savoir", defined: false},
			{ id: 14, text: "et à explorer de nouvelles pistes.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 17 ---------- */
	{
		title: "Définition 17",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est un dialogue", defined: false},
			{ id: 2,  text: "avec soi-même", defined: false},
			{ id: 3,  text: "et avec les autres,", defined: false},
			{ id: 4,  text: "un échange", defined: false},
			{ id: 5,  text: "d'arguments", defined: false},
			{ id: 6,  text: "et de raisons", defined: false},
			{ id: 7,  text: "qui vise à clarifier les idées.", defined: false},
			{ id: 8,  text: "Elle permet", defined: true},
			{ id: 9,  text: "de mieux", defined: false},
			{ id: 10, text: "comprendre", defined: false},
			{ id: 11, text: "le monde", defined: false},
			{ id: 12, text: "et", defined: false},
			{ id: 13, text: "nous-mêmes,", defined: false},
			{ id: 14, text: "par le dialogue et la raison.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 18 ---------- */
	{
		title: "Définition 18",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "commence", defined: false},
			{ id: 2,  text: "par un doute", defined: false},
			{ id: 3,  text: "radical :", defined: false},
			{ id: 4,  text: "rien n'est", defined: false},
			{ id: 5,  text: "accepté", defined: false},
			{ id: 6,  text: "sans preuve", defined: false},
			{ id: 7,  text: "ni examen.", defined: false},
			{ id: 8,  text: "Elle reconstruit", defined: true},
			{ id: 9,  text: "ensuite", defined: false},
			{ id: 10, text: "patiemment", defined: false},
			{ id: 11, text: "un savoir", defined: false},
			{ id: 12, text: "solide,", defined: false},
			{ id: 13, text: "fondé", defined: false},
			{ id: 14, text: "sur la raison.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 19 ---------- */
	{
		title: "Définition 19",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "cherche", defined: false},
			{ id: 2,  text: "des réponses", defined: false},
			{ id: 3,  text: "aux questions", defined: false},
			{ id: 4,  text: "fondamentales", defined: false},
			{ id: 5,  text: "que tout", defined: false},
			{ id: 6,  text: "être humain", defined: false},
			{ id: 7,  text: "se pose un jour ou l'autre.", defined: false},
			{ id: 8,  text: "Elle refuse", defined: true},
			{ id: 9,  text: "de prétendre", defined: false},
			{ id: 10, text: "les", defined: false},
			{ id: 11, text: "clore", defined: false},
			{ id: 12, text: "définitivement,", defined: false},
			{ id: 13, text: "préférant", defined: false},
			{ id: 14, text: "poursuivre l'enquête indéfiniment.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 20 ---------- */
	{
		title: "Définition 20",
		items: [
			{ id: 0,  text: "Philosopher,", defined: true},
			{ id: 1,  text: "c'est examiner", defined: false},
			{ id: 2,  text: "ses croyances", defined: false},
			{ id: 3,  text: "et ses valeurs", defined: false},
			{ id: 4,  text: "pour vérifier", defined: false},
			{ id: 5,  text: "qu'elles", defined: false},
			{ id: 6,  text: "résistent", defined: false},
			{ id: 7,  text: "à l'examen critique.", defined: false},
			{ id: 8,  text: "C'est aussi", defined: true},
			{ id: 9,  text: "accepter de les", defined: false},
			{ id: 10, text: "modifier", defined: false},
			{ id: 11, text: "si", defined: false},
			{ id: 12, text: "nécessaire,", defined: false},
			{ id: 13, text: "afin de penser", defined: false},
			{ id: 14, text: "plus justement.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 21 ---------- */
	{
		title: "Définition 21",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est une", defined: false},
			{ id: 2,  text: "école de liberté :", defined: false},
			{ id: 3,  text: "elle libère", defined: false},
			{ id: 4,  text: "l'esprit", defined: false},
			{ id: 5,  text: "des chaînes", defined: false},
			{ id: 6,  text: "de l'ignorance", defined: false},
			{ id: 7,  text: "et des préjugés.", defined: false},
			{ id: 8,  text: "Elle ouvre", defined: true},
			{ id: 9,  text: "de nouveaux", defined: false},
			{ id: 10, text: "horizons", defined: false},
			{ id: 11, text: "et permet", defined: false},
			{ id: 12, text: "de penser", defined: false},
			{ id: 13, text: "par soi-même,", defined: false},
			{ id: 14, text: "librement et critiquement.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 22 ---------- */
	{
		title: "Définition 22",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est la", defined: false},
			{ id: 2,  text: "recherche", defined: false},
			{ id: 3,  text: "rationnelle", defined: false},
			{ id: 4,  text: "du sens", defined: false},
			{ id: 5,  text: "de l'existence,", defined: false},
			{ id: 6,  text: "de la", defined: false},
			{ id: 7,  text: "vérité et du bien.", defined: false},
			{ id: 8,  text: "Elle procède", defined: true},
			{ id: 9,  text: "par le dialogue", defined: false},
			{ id: 10, text: "et", defined: false},
			{ id: 11, text: "l'argumentation", defined: false},
			{ id: 12, text: "plutôt que", defined: false},
			{ id: 13, text: "par la seule", defined: false},
			{ id: 14, text: "croyance aveugle.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 23 ---------- */
	{
		title: "Définition 23",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "nous aide", defined: false},
			{ id: 2,  text: "à vivre", defined: false},
			{ id: 3,  text: "plus lucidement,", defined: false},
			{ id: 4,  text: "à comprendre", defined: false},
			{ id: 5,  text: "nos émotions", defined: false},
			{ id: 6,  text: "et nos désirs,", defined: false},
			{ id: 7,  text: "à mieux choisir nos actions.", defined: false},
			{ id: 8,  text: "Elle nous apprend", defined: true},
			{ id: 9,  text: "à assumer", defined: false},
			{ id: 10, text: "nos", defined: false},
			{ id: 11, text: "responsabilités", defined: false},
			{ id: 12, text: "avec", defined: false},
			{ id: 13, text: "discernement", defined: false},
			{ id: 14, text: "et courage.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 24 ---------- */
	{
		title: "Définition 24",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est une", defined: false},
			{ id: 2,  text: "quête de sens", defined: false},
			{ id: 3,  text: "et de vérité", defined: false},
			{ id: 4,  text: "qui ne se", defined: false},
			{ id: 5,  text: "satisfait", defined: false},
			{ id: 6,  text: "ni des", defined: false},
			{ id: 7,  text: "apparences ni des opinions.", defined: false},
			{ id: 8,  text: "Elle exige", defined: true},
			{ id: 9,  text: "des raisons", defined: false},
			{ id: 10, text: "et des", defined: false},
			{ id: 11, text: "preuves,", defined: false},
			{ id: 12, text: "et refuse", defined: false},
			{ id: 13, text: "les certitudes", defined: false},
			{ id: 14, text: "toutes faites.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 25 ---------- */
	{
		title: "Définition 25",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "nous engage", defined: false},
			{ id: 2,  text: "à examiner", defined: false},
			{ id: 3,  text: "nos croyances", defined: false},
			{ id: 4,  text: "les plus", defined: false},
			{ id: 5,  text: "profondes,", defined: false},
			{ id: 6,  text: "à les", defined: false},
			{ id: 7,  text: "confronter aux arguments contraires.", defined: false},
			{ id: 8,  text: "Elle nous invite", defined: true},
			{ id: 9,  text: "à les", defined: false},
			{ id: 10, text: "réviser", defined: false},
			{ id: 11, text: "si elles", defined: false},
			{ id: 12, text: "ne", defined: false},
			{ id: 13, text: "résistent", defined: false},
			{ id: 14, text: "pas à l'examen.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 26 ---------- */
	{
		title: "Définition 26",
		items: [
			{ id: 0,  text: "Philosopher,", defined: true},
			{ id: 1,  text: "c'est chercher", defined: false},
			{ id: 2,  text: "la vérité", defined: false},
			{ id: 3,  text: "avec méthode,", defined: false},
			{ id: 4,  text: "en discutant", defined: false},
			{ id: 5,  text: "les idées", defined: false},
			{ id: 6,  text: "et en", defined: false},
			{ id: 7,  text: "examinant les arguments de chacun.", defined: false},
			{ id: 8,  text: "C'est avancer", defined: true},
			{ id: 9,  text: "sans", defined: false},
			{ id: 10, text: "dogmatisme", defined: false},
			{ id: 11, text: "ni", defined: false},
			{ id: 12, text: "scepticisme", defined: false},
			{ id: 13, text: "excessif,", defined: false},
			{ id: 14, text: "mais avec exigence.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 27 ---------- */
	{
		title: "Définition 27",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est un", defined: false},
			{ id: 2,  text: "art de poser", defined: false},
			{ id: 3,  text: "les bonnes questions,", defined: false},
			{ id: 4,  text: "plus encore", defined: false},
			{ id: 5,  text: "que de", defined: false},
			{ id: 6,  text: "donner", defined: false},
			{ id: 7,  text: "des réponses toutes faites.", defined: false},
			{ id: 8,  text: "Car bien", defined: true},
			{ id: 9,  text: "questionner", defined: false},
			{ id: 10, text: "ouvre", defined: false},
			{ id: 11, text: "des chemins", defined: false},
			{ id: 12, text: "de pensée", defined: false},
			{ id: 13, text: "que", defined: false},
			{ id: 14, text: "les réponses referment souvent.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 28 ---------- */
	{
		title: "Définition 28",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "nous apprend", defined: false},
			{ id: 2,  text: "à reconnaître", defined: false},
			{ id: 3,  text: "nos ignorances", defined: false},
			{ id: 4,  text: "et à", defined: false},
			{ id: 5,  text: "les dépasser", defined: false},
			{ id: 6,  text: "par", defined: false},
			{ id: 7,  text: "l'effort de la pensée.", defined: false},
			{ id: 8,  text: "Elle exige", defined: true},
			{ id: 9,  text: "une recherche", defined: false},
			{ id: 10, text: "patiente", defined: false},
			{ id: 11, text: "et un", defined: false},
			{ id: 12, text: "examen", defined: false},
			{ id: 13, text: "critique", defined: false},
			{ id: 14, text: "de soi et du monde.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 29 ---------- */
	{
		title: "Définition 29",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est une", defined: false},
			{ id: 2,  text: "manière de vivre", defined: false},
			{ id: 3,  text: "et de penser,", defined: false},
			{ id: 4,  text: "un art", defined: false},
			{ id: 5,  text: "de l'existence", defined: false},
			{ id: 6,  text: "qui", defined: false},
			{ id: 7,  text: "cherche la sagesse.", defined: false},
			{ id: 8,  text: "Elle invite", defined: true},
			{ id: 9,  text: "à l'examen", defined: false},
			{ id: 10, text: "constant", defined: false},
			{ id: 11, text: "de soi", defined: false},
			{ id: 12, text: "et", defined: false},
			{ id: 13, text: "du monde,", defined: false},
			{ id: 14, text: "pour mieux vivre et mieux penser.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 30 ---------- */
	{
		title: "Définition 30",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "nous enseigne", defined: false},
			{ id: 2,  text: "à penser", defined: false},
			{ id: 3,  text: "autrement,", defined: false},
			{ id: 4,  text: "c'est-à-dire", defined: false},
			{ id: 5,  text: "à sortir", defined: false},
			{ id: 6,  text: "des sentiers", defined: false},
			{ id: 7,  text: "battus de la pensée ordinaire.", defined: false},
			{ id: 8,  text: "Elle nous pousse", defined: true},
			{ id: 9,  text: "à oser", defined: false},
			{ id: 10, text: "des", defined: false},
			{ id: 11, text: "hypothèses", defined: false},
			{ id: 12, text: "nouvelles", defined: false},
			{ id: 13, text: "et à", defined: false},
			{ id: 14, text: "les tester avec rigueur.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 31 ---------- */
	{
		title: "Définition 31",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est une", defined: false},
			{ id: 2,  text: "discipline", defined: false},
			{ id: 3,  text: "exigeante", defined: false},
			{ id: 4,  text: "qui demande", defined: false},
			{ id: 5,  text: "rigueur,", defined: false},
			{ id: 6,  text: "patience", defined: false},
			{ id: 7,  text: "et honnêteté intellectuelle.", defined: false},
			{ id: 8,  text: "Elle ne se contente pas", defined: true},
			{ id: 9,  text: "d'à-peu-près", defined: false},
			{ id: 10, text: "ni", defined: false},
			{ id: 11, text: "d'approximations,", defined: false},
			{ id: 12, text: "mais", defined: false},
			{ id: 13, text: "vise", defined: false},
			{ id: 14, text: "la clarté et la précision.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 32 ---------- */
	{
		title: "Définition 32",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "nous apprend", defined: false},
			{ id: 2,  text: "à écouter", defined: false},
			{ id: 3,  text: "les autres", defined: false},
			{ id: 4,  text: "et à", defined: false},
			{ id: 5,  text: "dialoguer", defined: false},
			{ id: 6,  text: "avec eux,", defined: false},
			{ id: 7,  text: "à comprendre leurs raisons.", defined: false},
			{ id: 8,  text: "Elle nous invite", defined: true},
			{ id: 9,  text: "à discuter", defined: false},
			{ id: 10, text: "sans", defined: false},
			{ id: 11, text: "violence", defined: false},
			{ id: 12, text: "et à", defined: false},
			{ id: 13, text: "chercher", defined: false},
			{ id: 14, text: "ensemble la vérité.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 33 ---------- */
	{
		title: "Définition 33",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "n'est pas", defined: false},
			{ id: 2,  text: "un catalogue", defined: false},
			{ id: 3,  text: "de réponses", defined: false},
			{ id: 4,  text: "toutes faites,", defined: false},
			{ id: 5,  text: "mais une", defined: false},
			{ id: 6,  text: "activité", defined: false},
			{ id: 7,  text: "de pensée vivante.", defined: false},
			{ id: 8,  text: "Elle s'exerce", defined: true},
			{ id: 9,  text: "à chaque", defined: false},
			{ id: 10, text: "question", defined: false},
			{ id: 11, text: "que l'on", defined: false},
			{ id: 12, text: "se", defined: false},
			{ id: 13, text: "pose", defined: false},
			{ id: 14, text: "sérieusement et librement.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 34 ---------- */
	{
		title: "Définition 34",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "nous apprend", defined: false},
			{ id: 2,  text: "à distinguer", defined: false},
			{ id: 3,  text: "ce que nous", defined: false},
			{ id: 4,  text: "savons", defined: false},
			{ id: 5,  text: "de ce que", defined: false},
			{ id: 6,  text: "nous croyons savoir.", defined: false},
			{ id: 7,  text: "Elle nous aide", defined: true},
			{ id: 8,  text: "à reconnaître", defined: false},
			{ id: 9,  text: "les limites", defined: false},
			{ id: 10, text: "de notre", defined: false},
			{ id: 11, text: "savoir,", defined: false},
			{ id: 12, text: "et à", defined: false},
			{ id: 13, text: "rester", defined: false},
			{ id: 14, text: "humbles et vigilants.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 35 ---------- */
	{
		title: "Définition 35",
		items: [
			{ id: 0,  text: "Philosopher,", defined: true},
			{ id: 1,  text: "c'est avoir", defined: false},
			{ id: 2,  text: "le courage", defined: false},
			{ id: 3,  text: "de penser", defined: false},
			{ id: 4,  text: "par soi-même,", defined: false},
			{ id: 5,  text: "de remettre", defined: false},
			{ id: 6,  text: "en cause", defined: false},
			{ id: 7,  text: "les idées reçues.", defined: false},
			{ id: 8,  text: "C'est aussi", defined: true},
			{ id: 9,  text: "refuser", defined: false},
			{ id: 10, text: "les", defined: false},
			{ id: 11, text: "autorités", defined: false},
			{ id: 12, text: "aveugles", defined: false},
			{ id: 13, text: "et suivre", defined: false},
			{ id: 14, text: "la raison plutôt que la coutume.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 36 ---------- */
	{
		title: "Définition 36",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est un", defined: false},
			{ id: 2,  text: "effort", defined: false},
			{ id: 3,  text: "constant", defined: false},
			{ id: 4,  text: "pour penser", defined: false},
			{ id: 5,  text: "avec clarté,", defined: false},
			{ id: 6,  text: "pour", defined: false},
			{ id: 7,  text: "distinguer le vrai du faux.", defined: false},
			{ id: 8,  text: "Elle apprend", defined: true},
			{ id: 9,  text: "à discerner", defined: false},
			{ id: 10, text: "le juste", defined: false},
			{ id: 11, text: "de l'injuste,", defined: false},
			{ id: 12, text: "le", defined: false},
			{ id: 13, text: "raisonnable", defined: false},
			{ id: 14, text: "de l'arbitraire.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 37 ---------- */
	{
		title: "Définition 37",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "nous invite", defined: false},
			{ id: 2,  text: "à ne", defined: false},
			{ id: 3,  text: "rien tenir", defined: false},
			{ id: 4,  text: "pour définitif,", defined: false},
			{ id: 5,  text: "à toujours", defined: false},
			{ id: 6,  text: "poursuivre", defined: false},
			{ id: 7,  text: "l'enquête.", defined: false},
			{ id: 8,  text: "Elle nous apprend", defined: true},
			{ id: 9,  text: "à garder", defined: false},
			{ id: 10, text: "l'esprit", defined: false},
			{ id: 11, text: "ouvert", defined: false},
			{ id: 12, text: "et à", defined: false},
			{ id: 13, text: "accepter", defined: false},
			{ id: 14, text: "de réviser ses jugements.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 38 ---------- */
	{
		title: "Définition 38",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est une", defined: false},
			{ id: 2,  text: "recherche", defined: false},
			{ id: 3,  text: "de la vérité", defined: false},
			{ id: 4,  text: "menée", defined: false},
			{ id: 5,  text: "par la", defined: false},
			{ id: 6,  text: "raison,", defined: false},
			{ id: 7,  text: "sans renoncer au doute.", defined: false},
			{ id: 8,  text: "Elle exige", defined: true},
			{ id: 9,  text: "la remise", defined: false},
			{ id: 10, text: "en question", defined: false},
			{ id: 11, text: "de ses", defined: false},
			{ id: 12, text: "propres", defined: false},
			{ id: 13, text: "certitudes,", defined: false},
			{ id: 14, text: "pour avancer vers la vérité.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 39 ---------- */
	{
		title: "Définition 39",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est une", defined: false},
			{ id: 2,  text: "réflexion", defined: false},
			{ id: 3,  text: "sur les", defined: false},
			{ id: 4,  text: "conditions", defined: false},
			{ id: 5,  text: "et les", defined: false},
			{ id: 6,  text: "limites", defined: false},
			{ id: 7,  text: "de la connaissance.", defined: false},
			{ id: 8,  text: "Elle interroge", defined: true},
			{ id: 9,  text: "l'action", defined: false},
			{ id: 10, text: "et", defined: false},
			{ id: 11, text: "l'existence", defined: false},
			{ id: 12, text: "humaine,", defined: false},
			{ id: 13, text: "menée", defined: false},
			{ id: 14, text: "avec rigueur et liberté.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 40 ---------- */
	{
		title: "Définition 40",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "nous apprend", defined: false},
			{ id: 2,  text: "à ne pas", defined: false},
			{ id: 3,  text: "nous contenter", defined: false},
			{ id: 4,  text: "des apparences", defined: false},
			{ id: 5,  text: "ni des", defined: false},
			{ id: 6,  text: "préjugés,", defined: false},
			{ id: 7,  text: "à chercher toujours plus loin.", defined: false},
			{ id: 8,  text: "Elle nous pousse", defined: true},
			{ id: 9,  text: "à questionner", defined: false},
			{ id: 10, text: "ce qui", defined: false},
			{ id: 11, text: "semble", defined: false},
			{ id: 12, text: "évident", defined: false},
			{ id: 13, text: "et à", defined: false},
			{ id: 14, text: "penser en profondeur.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 41 ---------- */
	{
		title: "Définition 41",
		items: [
			{ id: 0,  text: "Philosopher,", defined: true},
			{ id: 1,  text: "c'est chercher", defined: false},
			{ id: 2,  text: "à comprendre", defined: false},
			{ id: 3,  text: "le sens", defined: false},
			{ id: 4,  text: "de son existence,", defined: false},
			{ id: 5,  text: "à donner", defined: false},
			{ id: 6,  text: "une direction", defined: false},
			{ id: 7,  text: "à sa vie.", defined: false},
			{ id: 8,  text: "C'est aussi", defined: true},
			{ id: 9,  text: "choisir", defined: false},
			{ id: 10, text: "ses valeurs", defined: false},
			{ id: 11, text: "et", defined: false},
			{ id: 12, text: "vivre", defined: false},
			{ id: 13, text: "en", defined: false},
			{ id: 14, text: "accord avec elles.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 42 ---------- */
	{
		title: "Définition 42",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "nous apprend", defined: false},
			{ id: 2,  text: "à examiner", defined: false},
			{ id: 3,  text: "les arguments", defined: false},
			{ id: 4,  text: "de nos", defined: false},
			{ id: 5,  text: "adversaires", defined: false},
			{ id: 6,  text: "avec", defined: false},
			{ id: 7,  text: "honnêteté et rigueur.", defined: false},
			{ id: 8,  text: "Elle nous invite", defined: true},
			{ id: 9,  text: "à reconnaître", defined: false},
			{ id: 10, text: "leurs", defined: false},
			{ id: 11, text: "raisons", defined: false},
			{ id: 12, text: "quand elles", defined: false},
			{ id: 13, text: "sont", defined: false},
			{ id: 14, text: "bonnes, et à réviser son avis.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 43 ---------- */
	{
		title: "Définition 43",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "n'est pas", defined: false},
			{ id: 2,  text: "un savoir", defined: false},
			{ id: 3,  text: "livresque,", defined: false},
			{ id: 4,  text: "mais une", defined: false},
			{ id: 5,  text: "pratique", defined: false},
			{ id: 6,  text: "vivante", defined: false},
			{ id: 7,  text: "qui s'exerce dans nos actes.", defined: false},
			{ id: 8,  text: "Elle éclaire", defined: true},
			{ id: 9,  text: "nos", defined: false},
			{ id: 10, text: "décisions", defined: false},
			{ id: 11, text: "et nos", defined: false},
			{ id: 12, text: "jugements", defined: false},
			{ id: 13, text: "au quotidien,", defined: false},
			{ id: 14, text: "et leur donne du sens.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 44 ---------- */
	{
		title: "Définition 44",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "nous aide", defined: false},
			{ id: 2,  text: "à donner", defined: false},
			{ id: 3,  text: "un sens", defined: false},
			{ id: 4,  text: "à notre", defined: false},
			{ id: 5,  text: "existence,", defined: false},
			{ id: 6,  text: "à comprendre", defined: false},
			{ id: 7,  text: "nos limites et nos possibilités.", defined: false},
			{ id: 8,  text: "Elle nous apprend", defined: true},
			{ id: 9,  text: "à vivre", defined: false},
			{ id: 10, text: "avec plus", defined: false},
			{ id: 11, text: "de", defined: false},
			{ id: 12, text: "lucidité", defined: false},
			{ id: 13, text: "et de", defined: false},
			{ id: 14, text: "liberté intérieure.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 45 ---------- */
	{
		title: "Définition 45",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est une", defined: false},
			{ id: 2,  text: "pensée", defined: false},
			{ id: 3,  text: "critique", defined: false},
			{ id: 4,  text: "qui n'accepte", defined: false},
			{ id: 5,  text: "rien", defined: false},
			{ id: 6,  text: "sans examen,", defined: false},
			{ id: 7,  text: "qui s'interroge sur ses principes.", defined: false},
			{ id: 8,  text: "Elle avance", defined: true},
			{ id: 9,  text: "avec", defined: false},
			{ id: 10, text: "prudence,", defined: false},
			{ id: 11, text: "mais", defined: false},
			{ id: 12, text: "sans", defined: false},
			{ id: 13, text: "renoncer", defined: false},
			{ id: 14, text: "à la recherche de la vérité.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 46 ---------- */
	{
		title: "Définition 46",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "apprend", defined: false},
			{ id: 2,  text: "à vivre", defined: false},
			{ id: 3,  text: "en pensant", defined: false},
			{ id: 4,  text: "et à penser", defined: false},
			{ id: 5,  text: "en vivant,", defined: false},
			{ id: 6,  text: "à ne pas", defined: false},
			{ id: 7,  text: "séparer la théorie de la pratique.", defined: false},
			{ id: 8,  text: "Elle unit", defined: true},
			{ id: 9,  text: "la pensée", defined: false},
			{ id: 10, text: "et", defined: false},
			{ id: 11, text: "l'action,", defined: false},
			{ id: 12, text: "l'idée", defined: false},
			{ id: 13, text: "et", defined: false},
			{ id: 14, text: "la réalité vécue.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 47 ---------- */
	{
		title: "Définition 47",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "nous apprend", defined: false},
			{ id: 2,  text: "à nous", defined: false},
			{ id: 3,  text: "étonner", defined: false},
			{ id: 4,  text: "de ce qui", defined: false},
			{ id: 5,  text: "nous semble", defined: false},
			{ id: 6,  text: "familier,", defined: false},
			{ id: 7,  text: "à voir du mystère dans le quotidien.", defined: false},
			{ id: 8,  text: "Elle invite", defined: true},
			{ id: 9,  text: "à poser", defined: false},
			{ id: 10, text: "des", defined: false},
			{ id: 11, text: "questions", defined: false},
			{ id: 12, text: "simples", defined: false},
			{ id: 13, text: "et", defined: false},
			{ id: 14, text: "profondes sur le monde.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 48 ---------- */
	{
		title: "Définition 48",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est une", defined: false},
			{ id: 2,  text: "manière", defined: false},
			{ id: 3,  text: "de chercher", defined: false},
			{ id: 4,  text: "la sagesse", defined: false},
			{ id: 5,  text: "par la", defined: false},
			{ id: 6,  text: "raison", defined: false},
			{ id: 7,  text: "et par l'expérience.", defined: false},
			{ id: 8,  text: "Elle avance", defined: true},
			{ id: 9,  text: "sans", defined: false},
			{ id: 10, text: "dogmatisme", defined: false},
			{ id: 11, text: "et", defined: false},
			{ id: 12, text: "sans", defined: false},
			{ id: 13, text: "scepticisme", defined: false},
			{ id: 14, text: "absolu, mais avec exigence.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 49 ---------- */
	{
		title: "Définition 49",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "nous apprend", defined: false},
			{ id: 2,  text: "à reconnaître", defined: false},
			{ id: 3,  text: "que nos", defined: false},
			{ id: 4,  text: "certitudes", defined: false},
			{ id: 5,  text: "peuvent", defined: false},
			{ id: 6,  text: "être", defined: false},
			{ id: 7,  text: "erronées, à douter de nous-mêmes.", defined: false},
			{ id: 8,  text: "Elle nous pousse", defined: true},
			{ id: 9,  text: "à chercher", defined: false},
			{ id: 10, text: "la vérité", defined: false},
			{ id: 11, text: "sans", defined: false},
			{ id: 12, text: "orgueil", defined: false},
			{ id: 13, text: "et", defined: false},
			{ id: 14, text: "avec persévérance.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 50 ---------- */
	{
		title: "Définition 50",
		items: [
			{ id: 0,  text: "La philosophie", defined: true},
			{ id: 1,  text: "est un", defined: false},
			{ id: 2,  text: "questionnement", defined: false},
			{ id: 3,  text: "sans fin", defined: false},
			{ id: 4,  text: "sur l'être,", defined: false},
			{ id: 5,  text: "le connaître,", defined: false},
			{ id: 6,  text: "l'agir", defined: false},
			{ id: 7,  text: "et le vivre.", defined: false},
			{ id: 8,  text: "Elle invite", defined: true},
			{ id: 9,  text: "chacun", defined: false},
			{ id: 10, text: "à penser", defined: false},
			{ id: 11, text: "par lui-même", defined: false},
			{ id: 12, text: "et à", defined: false},
			{ id: 13, text: "chercher", defined: false},
			{ id: 14, text: "la vérité sans se lasser.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	}
];

/* =======================================================
Tirage aléatoire : expose window.AppData
Évite de retomber immédiatement sur le même texte.
Expose aussi window.AppDataList pour le menu.
========================================================== */
var _lastAppDataIndex = -1;

function pickRandomAppDataIndex() {
	if (AppDataList.length === 0) return -1;
	if (AppDataList.length === 1) return 0;
	var idx;
	do {
		idx = Math.floor(Math.random() * AppDataList.length);
	} while (idx === _lastAppDataIndex);
	_lastAppDataIndex = idx;
	return idx;
}

function pickRandomAppData() {
	var idx = pickRandomAppDataIndex();
	return (idx >= 0) ? AppDataList[idx] : null;
}

/* Tirage initial au chargement */
(function() {
	var index = pickRandomAppDataIndex();
	if (index >= 0) {
		window.AppData = AppDataList[index];
		console.log('📚 définition tirée au hasard : n°' + (index + 1) + ' / ' + AppDataList.length);
	}
})();

/* Expose la liste complète pour le menu */
window.AppDataList = AppDataList;

/* Expose la configuration pour l'application HTML */
window.AppConfig = AppConfig;
