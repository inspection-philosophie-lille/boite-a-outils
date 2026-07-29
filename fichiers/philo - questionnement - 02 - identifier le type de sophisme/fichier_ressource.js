// Contenu à modifier

window.title = "identifier le sophisme";
window.subtitle = "relier un sophisme à l'exemple correspondant";

window.argumentsData = [
/* attention aux virgules ! le dernier argument est le seul à ne pas en comporter !*/
/* attention aux " que l'on ajouterait dans la définition. A remplacer par '' */

	{ colonne_de_gauche: "Faux dilemme", colonne_de_droite: "Soit vous soutenez le nucléaire, soit vous êtes anti-science." }, // n°1
	{ colonne_de_gauche: "Appel à la nature", colonne_de_droite: "Les OGM ne sont pas naturels, donc dangereux pour la santé." }, // n°2
	{ colonne_de_gauche: "Attaque personnelle", colonne_de_droite: "Vous ne pouvez pas parler d'écologie, vous prenez l'avion !" }, // n°3
	{ colonne_de_gauche: "Pente glissante", colonne_de_droite: "Si on autorise l'aide à mourir, on éliminera les handicapés." }, // n°4
	{ colonne_de_gauche: "Homme de paille", colonne_de_droite: "Les féministes veulent dominer les hommes et renverser tout." }, // n°5
	{ colonne_de_gauche: "Généralisation hâtive", colonne_de_droite: "Mon cousin a eu des effets secondaires, donc tous les vaccins sont dangereux." }, // n°6
	{ colonne_de_gauche: "Argument d'autorité", colonne_de_droite: "Cet influenceur le recommande, donc ce produit est efficace." }, // n°7
	{ colonne_de_gauche: "Appel à l'émotion", colonne_de_droite: "Pensez à tous ces enfants qui souffrent ! Ne critiquez pas cette loi." }, // n°8
	{ colonne_de_gauche: "Après quoi, donc à cause de quoi", colonne_de_droite: "J'ai utilisé ce talisman et trouvé un travail, donc il porte chance." }, // n°9
	{ colonne_de_gauche: "Appel à l'ignorance", colonne_de_droite: "On n'a pas prouvé le contraire, donc les ovnis existent." }, // n°10
	{ colonne_de_gauche: "Fausse analogie", colonne_de_droite: "L'État doit gérer l'économie comme un père son budget." }, // n°11
	{ colonne_de_gauche: "Conclusion sans logique", colonne_de_droite: "Il pleut aujourd'hui, donc le climat n'existe pas." }, // n°12
	{ colonne_de_gauche: "Toi aussi", colonne_de_droite: "Vous me critiquez, mais vous aussi vous avez un smartphone !" }, // n°13
	{ colonne_de_gauche: "Appel à la tradition", colonne_de_droite: "L'école a toujours fonctionné ainsi, inutile de changer." }, // n°14
	{ colonne_de_gauche: "Sophisme du Texas", colonne_de_droite: "Il a fait froid, donc le réchauffement climatique est un mythe." }, // n°15
	{ colonne_de_gauche: "Sophisme du joueur", colonne_de_droite: "Cette machine n'a pas payé depuis longtemps, elle va donner." }, // n°16
	{ colonne_de_gauche: "Sophisme de composition", colonne_de_droite: "Chaque citoyen est riche, donc le pays est riche." }, // n°17
	{ colonne_de_gauche: "Sophisme de division", colonne_de_droite: "Cette entreprise est performante, donc chaque employé l'est." }, // n°18
	{ colonne_de_gauche: "Sophisme du vrai Écossais", colonne_de_droite: "Aucun vrai écolo ne prendrait sa voiture pour 500 m." }, // n°19
	{ colonne_de_gauche: "Généralisation hâtive", colonne_de_droite: "Ma grand-mère fumait et a vécu 90 ans, donc ce n'est pas nocif." }, // n°20
	{ colonne_de_gauche: "Sophisme du pire", colonne_de_droite: "Ce n'est pas grave, les autres le font aussi." }, // n°21
	{ colonne_de_gauche: "Sophisme de la solution parfaite", colonne_de_droite: "Pourquoi trier ? Cela ne résoudra pas toute la pollution." }, // n°22
	{ colonne_de_gauche: "Sophisme du juste milieu", colonne_de_droite: "La Terre est ronde ou plate ? Non, en forme de ballon." }, // n°23
	{ colonne_de_gauche: "Appel à la popularité", colonne_de_droite: "Tout le monde utilise les réseaux sociaux, donc ils sont bons." }, // n°24
	{ colonne_de_gauche: "Pétition de principe", colonne_de_droite: "La liberté d'expression est essentielle, sans elle on ne serait pas libres." }, // n°25
	{ colonne_de_gauche: "Sophisme de la cause unique", colonne_de_droite: "La violence à l'école est due aux jeux vidéo, point." }, // n°26
	{ colonne_de_gauche: "Sophisme de l'appel à la crainte", colonne_de_droite: "Si vous ne votez pas pour nous, le pays sombre." }, // n°27
	{ colonne_de_gauche: "Faux dilemme", colonne_de_droite: "Soit l'économie, soit l'environnement. Choisissez." }, // n°28
	{ colonne_de_gauche: "Généralisation hâtive", colonne_de_droite: "Mon ami a guéri avec des plantes, donc c'est efficace." }, // n°29
	{ colonne_de_gauche: "Après quoi, donc à cause de quoi", colonne_de_droite: "Plus de médecins = plus de morts : ils tuent des patients." }, // n°30
	{ colonne_de_gauche: "Fausse analogie", colonne_de_droite: "L'art est au bonheur ce que la philo est au malheur. Donc la philo rend malheureux." }, // n°31
	{ colonne_de_gauche: "Faux dilemme", colonne_de_droite: "Soit la philo rend malheureux, soit elle n'a aucun effet. Donc elle rend malheureux." }, // n°32
	{ colonne_de_gauche: "Généralisation hâtive", colonne_de_droite: "Ce malheureux a fait de la philo, donc elle rend tous les hommes malheureux." }, // n°33
	{ colonne_de_gauche: "Pétition de principe", colonne_de_droite: "Le malheur vient de la philo, donc la philo rend malheureux." }, // n°34
	{ colonne_de_gauche: "Appel à l'ignorance", colonne_de_droite: "Rien ne prouve que la philo rend heureux, donc elle rend malheureux." }, // n°35
	{ colonne_de_gauche: "Sophisme du pire", colonne_de_droite: "La pauvreté n'est rien comparée au malheur de la philo." }, // n°36
	{ colonne_de_gauche: "Appel à l'émotion", colonne_de_droite: "J'ai rendu mon DM en retard mais j'ai tant travaillé, soyez humain !" }, // n°37
	{ colonne_de_gauche: "Faux dilemme", colonne_de_droite: "Soit vous êtes avec nous, soit vous êtes contre nous." }, // n°38
	{ colonne_de_gauche: "Faux dilemme", colonne_de_droite: "L'hydroélectricité est une énergie verte, oui ou non ?" }, // n°39
	{ colonne_de_gauche: "Faux dilemme", colonne_de_droite: "On tue l'industrie ou on pollue." }, // n°40
	{ colonne_de_gauche: "Conclusion sans logique", colonne_de_droite: "L'œil humain est parfait, donc une intelligence supérieure a tout créé." }, // n°41
	{ colonne_de_gauche: "Conclusion sans logique", colonne_de_droite: "Vous fumez du haschisch, donc vous finirez héroïnomane." }, // n°42
	{ colonne_de_gauche: "Conclusion sans logique", colonne_de_droite: "100% des gagnants ont tenté leur chance. Donc si vous jouez, vous gagnez." }, // n°43
	{ colonne_de_gauche: "Généralisation hâtive", colonne_de_droite: "J'ai rencontré deux politiciens corrompus, donc toute la classe l'est." }, // n°44
	{ colonne_de_gauche: "Appel à la tradition", colonne_de_droite: "Toujours les femmes ont fait plus de ménage que les hommes." }, // n°45
	{ colonne_de_gauche: "Homme de paille", colonne_de_droite: "Selon le réalisateur, tous les agriculteurs sont des criminels." }, // n°46
	{ colonne_de_gauche: "Sophisme du pire", colonne_de_droite: "Les USA polluent plus, on peut ne pas signer Kyoto." }, // n°47
	{ colonne_de_gauche: "Appel à la popularité", colonne_de_droite: "La nature sert l'humain. Tout le monde le sait depuis toujours." }, // n°48
	{ colonne_de_gauche: "Appel à la popularité", colonne_de_droite: "80% veulent l'eau gratuite, donc on ne doit pas la facturer." }, // n°49
	{ colonne_de_gauche: "Déshonneur par association", colonne_de_droite: "Comparer un adversaire à Hitler pour le discréditer." }, // n°50
	{ colonne_de_gauche: "Fausse analogie", colonne_de_droite: "Les humains sont des ordinateurs, ils ont besoin d'être programmés." }, // n°51
	{ colonne_de_gauche: "Attaque personnelle", colonne_de_droite: "Vous n'êtes pas scientifique, donc vous ne pouvez pas parler du climat." }, // n°52
	{ colonne_de_gauche: "Pente glissante", colonne_de_droite: "Si on légalise le mariage pour tous, on va légaliser celui avec des animaux." }, // n°53
	{ colonne_de_gauche: "Après quoi, donc à cause de quoi", colonne_de_droite: "J'ai mis mon chapeau porte-bonheur et j'ai gagné au loto." }, // n°54
	{ colonne_de_gauche: "Argument d'autorité", colonne_de_droite: "Un acteur dit que ce régime marche, donc c'est vrai." }, // n°55
	{ colonne_de_gauche: "Homme de paille", colonne_de_droite: "Les végétariens veulent que tous arrêtent la viande demain." }, // n°56
	{ colonne_de_gauche: "Appel à la nature", colonne_de_droite: "Le tabac est naturel, donc il n'est pas mauvais." }, // n°57
	{ colonne_de_gauche: "Toi aussi", colonne_de_droite: "Vous me demandez d'arrêter de fumer, mais vous-même vous fumez !" }, // n°58
	{ colonne_de_gauche: "Appel à l'émotion", colonne_de_droite: "Comment être contre cette loi ? Pense aux enfants !" }, // n°59
	{ colonne_de_gauche: "Appel à l'ignorance", colonne_de_droite: "On n'a pas prouvé que les fantômes n'existent pas." }, // n°60
	{ colonne_de_gauche: "Sophisme du juste milieu", colonne_de_droite: "Climatosceptiques et climatologues ont tous raison." }, // n°61
	{ colonne_de_gauche: "Sophisme du joueur", colonne_de_droite: "J'ai perdu 10 fois, je suis sûr de gagner au prochain." }, // n°62
	{ colonne_de_gauche: "Sophisme de la solution parfaite", colonne_de_droite: "Pourquoi recycler ? Cela ne résoudra pas tout." }, // n°63
	{ colonne_de_gauche: "Sophisme de l'accident", colonne_de_droite: "Les couteaux tuent, donc il faut les interdire." }, // n°64
	{ colonne_de_gauche: "Sophisme de composition", colonne_de_droite: "Chaque pièce est légère, donc la machine est légère." }, // n°65
	{ colonne_de_gauche: "Sophisme de division", colonne_de_droite: "L'équipe a gagné, donc chaque joueur est un champion." }, // n°66
	{ colonne_de_gauche: "Sophisme du Texas", colonne_de_droite: "Cet hiver est froid, donc le réchauffement n'existe pas." }, // n°67
	{ colonne_de_gauche: "Généralisation hâtive", colonne_de_droite: "Mon grand-père fumait et a vécu 95 ans, donc c'est safe." }, // n°68
	{ colonne_de_gauche: "Sophisme du coût irrécupérable", colonne_de_droite: "J'ai trop dépensé, je ne peux pas abandonner." }, // n°69
	{ colonne_de_gauche: "Sophisme de l'effort", colonne_de_droite: "J'ai travaillé dur, donc ce rapport est bon." }, // n°70
	{ colonne_de_gauche: "Sophisme de la nouveauté", colonne_de_droite: "C'est nouveau, donc c'est meilleur que l'ancien." }, // n°71
	{ colonne_de_gauche: "Appel à la tradition", colonne_de_droite: "Cette méthode est utilisée depuis des siècles." }, // n°72
	{ colonne_de_gauche: "Sophisme du juste milieu", colonne_de_droite: "La vérité se trouve toujours au milieu." }, // n°73
	{ colonne_de_gauche: "Sophisme de la solution parfaite", colonne_de_droite: "Si on ne peut pas tout résoudre, cela ne vaut pas le coup." }, // n°74
	{ colonne_de_gauche: "Sophisme de l'homme qui bat sa femme", colonne_de_droite: "Avez-vous arrêté de battre votre femme ?" }, // n°75
	{ colonne_de_gauche: "Sophisme de la cause unique", colonne_de_droite: "Le chômage a augmenté, donc c'est la faute du gouvernement." }, // n°76
	{ colonne_de_gauche: "Sophisme du vrai Écossais", colonne_de_droite: "Aucun vrai chrétien ne commettrait cet acte." }, // n°77
	{ colonne_de_gauche: "Généralisation hâtive", colonne_de_droite: "J'ai vu une guérison par thérapie alternative, donc ça marche." }, // n°78
	{ colonne_de_gauche: "Sophisme de l'appel à la flatterie", colonne_de_droite: "Une personne intelligente comme vous va investir." }, // n°79
	{ colonne_de_gauche: "Appel à l'émotion", colonne_de_droite: "Ne me mettez pas zéro, j'ai tellement travaillé !" }, // n°80
	{ colonne_de_gauche: "Sophisme de l'appel à la crainte", colonne_de_droite: "Sans mon vote, le pays sombre dans le chaos." }, // n°81
	{ colonne_de_gauche: "Faux dilemme", colonne_de_droite: "Soit la croissance, soit l'environnement." }, // n°82
	{ colonne_de_gauche: "Faux dilemme", colonne_de_droite: "Soit vous achetez notre produit, soit vous restez dans le passé." }, // n°83
	{ colonne_de_gauche: "Appel à la nature", colonne_de_droite: "Ce médicament vient d'une plante, donc il ne peut pas avoir d'effets secondaires." }, // n°84
	{ colonne_de_gauche: "Attaque personnelle", colonne_de_droite: "Son raisonnement sur l'éducation est nul, il a raté ses examens." }, // n°85
	{ colonne_de_gauche: "Pente glissante", colonne_de_droite: "Si on autorise le cannabis médical, tout le monde finira drogué dur." }, // n°86
	{ colonne_de_gauche: "Homme de paille", colonne_de_droite: "Les syndicats veulent que personne ne travaille jamais." }, // n°87
	{ colonne_de_gauche: "Généralisation hâtive", colonne_de_droite: "J'ai connu un parisien arrogant, donc tous les Parisiens sont odieux." }, // n°88
	{ colonne_de_gauche: "Argument d'autorité", colonne_de_droite: "Mon coach de vie, qui a vendu 500 000 livres, dit que l'astrologie marche." }, // n°89
	{ colonne_de_gauche: "Appel à l'émotion", colonne_de_droite: "Regardez cette biche pleurer, comment osez-vous défendre la chasse ?" }, // n°90
	{ colonne_de_gauche: "Après quoi, donc à cause de quoi", colonne_de_droite: "Je portais mon pull rouge quand j'ai réussi l'examen, donc ce pull porte chance." }, // n°91
	{ colonne_de_gauche: "Appel à l'ignorance", colonne_de_droite: "Personne n'a prouvé que l'âme n'existe pas, donc elle existe." }, // n°92
	{ colonne_de_gauche: "Fausse analogie", colonne_de_droite: "Une entreprise doit être gérée comme une famille, avec amour et sans licenciement." }, // n°93
	{ colonne_de_gauche: "Conclusion sans logique", colonne_de_droite: "Ce chat est noir, donc le mal absolu va apparaître." }, // n°94
	{ colonne_de_gauche: "Toi aussi", colonne_de_droite: "Tu critiques mon empreinte carbone, mais tu as un chauffe-eau électrique." }, // n°95
	{ colonne_de_gauche: "Appel à la tradition", colonne_de_droite: "On a toujours puni les enfants à l'école, pourquoi arrêter ?" }, // n°96
	{ colonne_de_gauche: "Sophisme du Texas", colonne_de_droite: "Il neige en avril, donc le réchauffement climatique est une arnaque." }, // n°97
	{ colonne_de_gauche: "Sophisme du joueur", colonne_de_droite: "Ça fait cinq fois que je perds au poker, la sixième je gagne forcément." }, // n°98
	{ colonne_de_gauche: "Sophisme de composition", colonne_de_droite: "Chaque joueur de l'équipe est grand, donc l'équipe est grande." }, // n°99
	{ colonne_de_gauche: "Sophisme de division", colonne_de_droite: "Ce groupe de musique est génial, donc chaque musicien est un génie." } // n°100
];

window.settings = {
		// MODE CLAIR - Couleurs neumorphiques classiques
		"titleColor": "#ff0000",							// couleur du titre en mode clair
		"subtitleColor": "#000000",					 // couleur du sous-titre en mode clair
		"textColor": "#000000",							 // couleur du texte en mode clair
		"backgroundColor": "#f0f0f0",				 // couleur de fond en mode clair
		"cellColor": "#e0e0e0",							 // couleur des cellules en mode clair
		"buttonColor": "#e0e0e0",						 // couleur des boutons en mode clair
		"correctColor": "#008000",						// couleur pour les bonnes réponses en mode clair
		"incorrectColor": "#ff0000",					// couleur pour les mauvaises réponses en mode clair
		
		// MODE SOMBRE - Couleurs neumorphiques classiques
		"titleColorDark": "#ff6666",					// couleur du titre en mode sombre
		"subtitleColorDark": "#ffffff",			 // couleur du sous-titre en mode sombre
		"textColorDark": "#ffffff",					 // couleur du texte en mode sombre
		"backgroundColorDark": "#121212",		 // couleur de fond en mode sombre
		"cellColorDark": "#2d2d2d",					// couleur des cellules en mode sombre
		"buttonColorDark": "#3d3d3d",				// couleur des boutons en mode sombre
		"correctColorDark": "#4caf50",				// couleur pour les bonnes réponses en mode sombre
		"incorrectColorDark": "#f44336",			// couleur pour les mauvaises réponses en mode sombre
		
		"fontFamily": "'Muli', Arial, sans-serif",
		"titleSize": "clamp(1.8rem, 5vw, 2.5rem)",
		"cellSize": "clamp(0.9rem, 2.5vw, 1rem)",
		"enableAnimations": true,
		"enableDarkMode": false,
		"enableColorblindMode": false,
		"maxPairs": 5,
		"showScore": true,
		"randomOrder": true,
		"baseFontSize": 12									// taille de base du texte en pixels (16 = 100%)
};