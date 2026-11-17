/* =======================================================
CONFIGURATION GÉNÉRALE DE L'APPLICATION
- `appTitle`    : titre principal affiché dans la barre d'outils
- `appSubtitle` : sous-titre affiché sous le titre principal
========================================================== */
var AppConfig = {
	appTitle: "application « reconstituer »",
	appSubtitle: "par classement"
};

var AppDataList = [

	/* ---------- Définition 1 ---------- */
	{
		title: "Définition 1",
		items: [
			{ id: 0,  text: "mot(s) 01", defined: true},
			{ id: 1,  text: "mot(s) 02", defined: false},
			{ id: 2,  text: "mot(s) 03", defined: false},
			{ id: 3,  text: "mot(s) 04", defined: false},
			{ id: 4,  text: "mot(s) 05", defined: false},
			{ id: 5,  text: "mot(s) 06", defined: false},
			{ id: 6,  text: "mot(s) 07", defined: false},
			{ id: 7,  text: "mot(s) 08.", defined: true},
			{ id: 8,  text: "mot(s) 09", defined: true},
			{ id: 9,  text: "mot(s) 10", defined: false},
			{ id: 10, text: "mot(s) 11", defined: false},
			{ id: 11, text: "mot(s) 12", defined: false},
			{ id: 12, text: "mot(s) 13", defined: false},
			{ id: 13, text: "mot(s) 14", defined: false},
			{ id: 14, text: "mot(s) 15.", defined: true}
		],
		textLeft:  "",
		textRight: "",
		showhints: true
	},

	/* ---------- Définition 2 ---------- */
	{
		title: "Définition 2",
		items: [
			{ id: 0,  text: "mot(s) 01'", defined: true},
			{ id: 1,  text: "mot(s) 02'", defined: false},
			{ id: 2,  text: "mot(s) 03'", defined: false},
			{ id: 3,  text: "mot(s) 04'", defined: false},
			{ id: 4,  text: "mot(s) 05'", defined: false},
			{ id: 5,  text: "mot(s) 06'", defined: false},
			{ id: 6,  text: "mot(s) 07'", defined: false},
			{ id: 7,  text: "mot(s) 08'.", defined: true},
			{ id: 8,  text: "mot(s) 09'", defined: true},
			{ id: 9,  text: "mot(s) 10'", defined: false},
			{ id: 10, text: "mot(s) 11'", defined: false},
			{ id: 11, text: "mot(s) 12'", defined: false},
			{ id: 12, text: "mot(s) 13'.", defined: true}
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