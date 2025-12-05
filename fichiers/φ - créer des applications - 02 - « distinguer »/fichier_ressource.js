const title = "application « distinguer »";
const subtitle = "distinguer par glisser-déposer";
const dropzone = [
    {
        "colonne_gauche": "catégorie 1",
        "colonne_droite": "catégorie 2",
        "exemples_gauche": [
            "catégorie 1.1",
            "catégorie 1.2",
            "catégorie 1.3",
            "catégorie 1.4",
            "catégorie 1.5"
        ],
        "exemples_droite": [
            "catégorie 2.1",
            "catégorie 2.2",
            "catégorie 2.3",
            "catégorie 2.4",
            "catégorie 2.5"
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
            "catégorie 3.5"
        ],
        "exemples_droite": [
            "catégorie 4.1",
            "catégorie 4.2",
            "catégorie 4.3",
            "catégorie 4.4",
            "catégorie 4.5"
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
            "catégorie 5.5"
        ],
        "exemples_droite": [
            "catégorie 6.1",
            "catégorie 6.2",
            "catégorie 6.3",
            "catégorie 6.4",
            "catégorie 6.5"
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
            "catégorie 7.5"
        ],
        "exemples_droite": [
            "catégorie 8.1",
            "catégorie 8.2",
            "catégorie 8.3",
            "catégorie 8.4",
            "catégorie 8.5"
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
            "catégorie 9.5"
        ],
        "exemples_droite": [
            "catégorie 10.1",
            "catégorie 10.2",
            "catégorie 10.3",
            "catégorie 10.4",
            "catégorie 10.5"
        ]
    }
];

const settings = {
    // MODE CLAIR - Couleurs neumorphiques classiques
    "titleColor": "#ff0000",
    "subtitleColor": "#000000",
    "textColor": "#000000",
    "backgroundColor": "#f0f0f0",
    "cellColor": "#e0e0e0",
    "buttonColor": "#e0e0e0",
    "correctColor": "#008000",
    "incorrectColor": "#ff0000",
    
    // MODE SOMBRE - Couleurs neumorphiques classiques
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