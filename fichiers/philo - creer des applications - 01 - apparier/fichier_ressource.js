// Contenu à modifier

window.title = "application « apparier »";
window.subtitle = "associer un élément à un autre";

window.argumentsData = [
	{ colonne_de_gauche: "mot 01", colonne_de_droite: "mot 01'" },
	{ colonne_de_gauche: "mot 02", colonne_de_droite: "mot 02'" },
	{ colonne_de_gauche: "mot 03", colonne_de_droite: "mot 03'" },
	{ colonne_de_gauche: "mot 04", colonne_de_droite: "mot 04'" },
	{ colonne_de_gauche: "mot 05", colonne_de_droite: "mot 05'" },
	{ colonne_de_gauche: "mot 06", colonne_de_droite: "mot 06'" },
	{ colonne_de_gauche: "mot 07", colonne_de_droite: "mot 07'" },
	{ colonne_de_gauche: "mot 08", colonne_de_droite: "mot 08'" },
	{ colonne_de_gauche: "mot 09", colonne_de_droite: "mot 09'" },
	{ colonne_de_gauche: "mot 10", colonne_de_droite: "mot 10'" },
	{ colonne_de_gauche: "mot 11", colonne_de_droite: "mot 11'" }
];

window.settings = {
	// MODE CLAIR - Couleurs neumorphiques classiques
	"titleColor": "#ff0000",					// couleur du titre en mode clair
	"subtitleColor": "#000000",			// couleur du sous-titre en mode clair
	"textColor": "#000000",					// couleur du texte en mode clair
	"backgroundColor": "#f0f0f0",		// couleur de fond en mode clair
	"cellColor": "#e0e0e0",					// couleur des cellules en mode clair
	"buttonColor": "#e0e0e0",				// couleur des boutons en mode clair
	"correctColor": "#008000",				// couleur pour les bonnes réponses en mode clair
	"incorrectColor": "#ff0000",			// couleur pour les mauvaises réponses en mode clair
	
	// MODE SOMBRE - Couleurs neumorphiques classiques
	"titleColorDark": "#ff6666",			// couleur du titre en mode sombre
	"subtitleColorDark": "#ffffff",	// couleur du sous-titre en mode sombre
	"textColorDark": "#ffffff",			// couleur du texte en mode sombre
	"backgroundColorDark": "#121212",// couleur de fond en mode sombre
	"cellColorDark": "#2d2d2d",			// couleur des cellules en mode sombre
	"buttonColorDark": "#3d3d3d",		// couleur des boutons en mode sombre
	"correctColorDark": "#4caf50",		// couleur pour les bonnes réponses en mode sombre
	"incorrectColorDark": "#f44336",	// couleur pour les mauvaises réponses en mode sombre
	
	"fontFamily": "'Muli', Arial, sans-serif",
	"titleSize": "clamp(1.8rem, 5vw, 2.5rem)",
	"cellSize": "clamp(0.9rem, 2.5vw, 1rem)",
	"enableAnimations": true,
	"enableDarkMode": false,
	"enableColorblindMode": false,
	"maxPairs": 5,
	"showScore": true,
	"randomOrder": true,
	"baseFontSize": 12				// taille de base du texte en pixels (16 = 100%)
};