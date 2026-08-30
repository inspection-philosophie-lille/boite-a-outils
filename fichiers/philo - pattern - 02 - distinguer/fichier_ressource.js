// fichier_ressource.js
// Application de classement par glisser-déposer

window.title = "application « distinguer »";
window.subtitle = "distinguer par glisser-déposer";

window.dropzone = [
	{
	"colonne_gauche": "catégorie 1",
	"colonne_droite": "catégorie 2",
	"exemples_gauche": [
		"catégorie 1.1",
		"catégorie 1.2",
		"catégorie 1.3",
		"catégorie 1.4",
		"catégorie 1.5",
		"catégorie 1.6",
		"catégorie 1.7",
		"catégorie 1.8",
		"catégorie 1.9",
		"catégorie 1.10",
		"catégorie 1.11",
		"catégorie 1.12"	
	],
	"exemples_droite": [
		"catégorie 2.1",
		"catégorie 2.2",
		"catégorie 2.3",
		"catégorie 2.4",
		"catégorie 2.5",
		"catégorie 2.6",
		"catégorie 2.7",
		"catégorie 2.8",
		"catégorie 2.9",
		"catégorie 2.10",
		"catégorie 2.11",
		"catégorie 2.12"	
	]
	},
	{
	"colonne_gauche": "catégorie 3",
	"colonne_droite": "catégorie 4",
	"exemples_gauche": [
	"catégorie 3.1",
		"catégorie 3.2",
		"catégorie 3.3",
		"catégorie 3.4",
		"catégorie 3.5",
		"catégorie 3.6",
		"catégorie 3.7",
		"catégorie 3.8",
		"catégorie 3.9",
		"catégorie 3.10",
		"catégorie 3.11",
		"catégorie 3.12"
	],
	"exemples_droite": [
		"catégorie 4.1",
		"catégorie 4.2",
		"catégorie 4.3",
		"catégorie 4.4",
		"catégorie 4.5",
		"catégorie 4.6",
		"catégorie 4.7",
		"catégorie 4.8",
		"catégorie 4.9",
		"catégorie 4.10",
		"catégorie 4.11",
		"catégorie 4.12"
	]
	},
	{
	"colonne_gauche": "catégorie 5",
	"colonne_droite": "catégorie 6",
	"exemples_gauche": [
		"catégorie 5.1",
		"catégorie 5.2",
		"catégorie 5.3",
		"catégorie 5.4",
		"catégorie 5.5",
		"catégorie 5.6",
		"catégorie 5.7",
		"catégorie 5.8",
		"catégorie 5.9",
		"catégorie 5.10",
		"catégorie 5.11",
		"catégorie 5.12"
	],
	"exemples_droite": [
		"catégorie 6.1",
		"catégorie 6.2",
		"catégorie 6.3",
		"catégorie 6.4",
		"catégorie 6.5",
		"catégorie 6.6",
		"catégorie 6.7",
		"catégorie 6.8",
		"catégorie 6.9",
		"catégorie 6.10",
		"catégorie 6.11",
		"catégorie 6.12"
	]
	},
	{
	"colonne_gauche": "catégorie 7",
	"colonne_droite": "catégorie 8",
	"exemples_gauche": [
		"catégorie 7.1",
		"catégorie 7.2",
		"catégorie 7.3",
		"catégorie 7.4",
		"catégorie 7.5",
		"catégorie 7.6",
		"catégorie 7.7",
		"catégorie 7.8",
		"catégorie 7.9",
		"catégorie 7.10",
		"catégorie 7.11",
		"catégorie 7.12"
	],
	"exemples_droite": [
		"catégorie 8.1",
		"catégorie 8.2",
		"catégorie 8.3",
		"catégorie 8.4",
		"catégorie 8.5",
		"catégorie 8.6",
		"catégorie 8.7",
		"catégorie 8.8",
		"catégorie 8.9",
		"catégorie 8.10",
		"catégorie 8.11",
		"catégorie 8.12"
	]
	},
	{
	"colonne_gauche": "catégorie 9",
	"colonne_droite": "catégorie 10",
	"exemples_gauche": [
		"catégorie 9.1",
		"catégorie 9.2",
		"catégorie 9.3",
		"catégorie 9.4",
		"catégorie 9.5",
		"catégorie 9.6",
		"catégorie 9.7",
		"catégorie 9.8",
		"catégorie 9.9",
		"catégorie 9.10",
		"catégorie 9.11",
		"catégorie 9.12"
	],
	"exemples_droite": [
		"catégorie 10.1",
		"catégorie 10.2",
		"catégorie 10.3",
		"catégorie 10.4",
		"catégorie 10.5",
		"catégorie 10.6",
		"catégorie 10.7",
		"catégorie 10.8",
		"catégorie 10.9",
		"catégorie 10.10",
		"catégorie 10.11",
		"catégorie 10.12"
	]
	}
];

window.settings = {
	"titleColor": "#ff0000",
	"subtitleColor": "#000000",
	"textColor": "#000000",
	"backgroundColor": "#f0f0f0",
	"cellColor": "#e0e0e0",
	"buttonColor": "#e0e0e0",
	"correctColor": "#008000",
	"incorrectColor": "#ff0000",
	"titleColorDark": "#ff6666",
	"subtitleColorDark": "#ffffff",
	"textColorDark": "#ffffff",
	"backgroundColorDark": "#121212",
	"cellColorDark": "#2d2d2d",
	"buttonColorDark": "#3d3d3d",
	"correctColorDark": "#4CAF50",
	"incorrectColorDark": "#f44336",
	"fontFamily": "'Muli', Arial, sans-serif",
	"titleSize": "clamp(1.8rem, 5vw, 2.5rem)",
	"cellSize": "clamp(0.9rem, 2.5vw, 1rem)",
	"enableAnimations": true,
	"enableDarkMode": false,
	"enableColorblindMode": false,
	"maxExamples": 5,
	"showScore": true,
	"randomOrder": true,
	"showHints": true,
	"baseFontSize": 16
};