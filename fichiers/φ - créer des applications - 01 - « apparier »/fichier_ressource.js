// Contenu à modifier

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
	{ colonne_de_gauche: "mot 10", colonne_de_droite: "mot 10'" }
];

window.title = "application « apparier »";
window.subtitle = "associer un élément à un autre";
window.settings = {
    // MODE CLAIR - Couleurs neumorphiques classiques
    "titleColor": "#ff0000",              // couleur du titre 
    "subtitleColor": "#000000",           // couleur du sous-titre 
    "textColor": "#000000",               // couleur du texte 
    "backgroundColor": "#f0f0f0",         // couleur de fond 
    "cellColor": "#e0e0e0",               // couleur des cellules 
    "buttonColor": "#e0e0e0",             // couleur des boutons 
    "correctColor": "#008000",            // couleur pour les bonnes réponses 
    "incorrectColor": "#ff0000",          // couleur pour les mauvaises réponses 
    
    // MODE SOMBRE - Couleurs neumorphiques classiques
    "titleColorDark": "#ff6666",          // couleur du titre 
    "subtitleColorDark": "#ffffff",       // couleur du sous-titre 
    "textColorDark": "#ffffff",           // couleur du texte 
    "backgroundColorDark": "#121212",     // couleur de fond 
    "cellColorDark": "#2d2d2d",           // couleur des cellules 
    "buttonColorDark": "#3d3d3d",         // couleur des boutons 
    "correctColorDark": "#4caf50",        // couleur pour les bonnes réponses 
    "incorrectColorDark": "#f44336",      // couleur pour les mauvaises réponses 
    

    
    "fontFamily": "'Times New Roman', Times, serif",
    "titleSize": "clamp(1.8rem, 5vw, 2.5rem)",
    "cellSize": "clamp(0.9rem, 2.5vw, 1rem)",
    "enableAnimations": true,
    "enableDarkMode": false,
    "enableColorblindMode": false,
    "maxPairs": 5,
    "showScore": true,
    "randomOrder": true,
    "baseFontSize": 12                  // taille de base du texte en pixels (16 = 100%)
};