const onglet = "identifier le type de sophisme";
const title = "identifier le type de sophisme";
const subtitle = "relier chaque type de sophisme à l'exemple correspondant";


const argumentsData = [
    
/* attention aux virgules ! le dernier argument est le seul à ne pas en comporter !*/
/* attention aux " que l'on ajouterait dans la définition. A remplacer par '' */

  	{ colonne_de_gauche: "Fausse analogie",colonne_de_droite:"L'art est à la philosophie ce que le bonheur est au malheur. Donc la philosophie rend malheureux."},
  	{ colonne_de_gauche: "Fausse alternative",colonne_de_droite:"Soit la philosophie rend malheureux, soit elle n'a aucun effet. Or elle a bien un effet, donc elle rend malheureux."},
  	{ colonne_de_gauche: "Généralisation hâtive",colonne_de_droite:"Ce malheureux a fait de la philosophie, donc la philosophie rend tous les hommes malheureux."},
  	{ colonne_de_gauche: "Pétition de principe (cercle vicieux)",colonne_de_droite:"Le malheur est la conséquence de la philosophie, donc la philosophie rend malheureux."}, 
  	{ colonne_de_gauche: "Appel à l'ignorance",colonne_de_droite:"Rien ne prouve que la philosophie rend heureux. Donc la philosophie rend malheureux"}, 	
	{ colonne_de_gauche: "Sophisme du pire(de la double faute)",colonne_de_droite:"La pauvreté rend peut-être malheureux, mais ce n'est rien en comparaison avec la philosophie!"}, 	
  	{ colonne_de_gauche: "Appel au sentiment",colonne_de_droite:"Oui, j'ai rendu mon DM en retard, mais ce travail était si difficile et j'y ai passé tellement d'heures, soyez humain !"},
	{ colonne_de_gauche: "Faux dilemme", colonne_de_droite: "Soit tu es avec nous, soit tu es contre nous." },
	{ colonne_de_gauche: "Faux dilemme", colonne_de_droite: "L'hydroélectricité est une énergie verte oui ou non." },
	{ colonne_de_gauche: "Faux dilemme", colonne_de_droite: "On tue l'industrie ou on pollue." },
	{ colonne_de_gauche: "Non sequitur", colonne_de_droite: "Le monde est d'une prodigieuse perfection, à l'image de l'œil humain. Donc, une intelligence supérieure est responsable de l'univers." },
	{ colonne_de_gauche: "Non sequitur", colonne_de_droite: "Tous les consommateurs d'héroïne ont commencé par le haschisch. Tu fumes du haschisch, donc tu vas finir héroïnomane." },
	{ colonne_de_gauche: "Non sequitur", colonne_de_droite: "100% des gagnants auront tenté leur chance. Donc si tu joues, tu gagnes." },
	{ colonne_de_gauche: "Généralisation hâtive", colonne_de_droite: "J'ai rencontré deux politiciens corrompus, donc toute la classe politique est corrompue." },
	{ colonne_de_gauche: "Appel à la tradition", colonne_de_droite: "Il en a toujours été ainsi que les femmes accomplissent davantage de tâches ménagères que les hommes." },
	{ colonne_de_gauche: "Caricature", colonne_de_droite: "Selon le réalisateur du film BACON, tous les agriculteurs sont des criminels qui devraient aller en prison." },
	{ colonne_de_gauche: "Double faute", colonne_de_droite: "Ce n'est pas grave si on ne signe pas le Protocole de Kyoto, les États-Unis ne le signent pas et ils polluent plus que nous." },
	{ colonne_de_gauche: "Appel à la popularité", colonne_de_droite: "La nature est au service de l'être humain. C'est vrai parce que tout le monde le sait depuis toujours." },
	{ colonne_de_gauche: "Appel à la popularité", colonne_de_droite: "80% de la population considère que l'eau devrait rester gratuite. On ne doit donc pas facturer la gestion de l'eau." },
	{ colonne_de_gauche: "Déshonneur par association", colonne_de_droite: "Comparer un adversaire politique à Hitler pour le discréditer." },
	{ colonne_de_gauche: "Fausse analogie", colonne_de_droite: "Les humains sont comme des ordinateurs, ils ont besoin d'être programmés pour fonctionner correctement." },
	{ colonne_de_gauche: "Ad hominem", colonne_de_droite: "Tu ne peux pas avoir raison sur le changement climatique, tu n'es même pas un scientifique !" },
	{ colonne_de_gauche: "Pente glissante", colonne_de_droite: "Si on légalise le mariage homosexuel, bientôt on légalisera le mariage avec des animaux." },
	{ colonne_de_gauche: "Post hoc ergo propter hoc", colonne_de_droite: "J'ai mis mon chapeau porte-bonheur et j'ai gagné au loto. Mon chapeau m'a fait gagner." },
	{ colonne_de_gauche: "Argument d'autorité", colonne_de_droite: "Ce célèbre acteur dit que ce régime fonctionne, donc ça doit être vrai." },
	{ colonne_de_gauche: "Homme de paille", colonne_de_droite: "Les végétariens veulent que tout le monde arrête de manger de la viande du jour au lendemain." },
	{ colonne_de_gauche: "Appel à la nature", colonne_de_droite: "Le tabac est naturel, donc il ne peut pas être mauvais pour la santé." },
	{ colonne_de_gauche: "Tu quoque", colonne_de_droite: "Tu me dis d'arrêter de fumer, mais toi-même tu fumes !" },
	{ colonne_de_gauche: "Appel à l'émotion", colonne_de_droite: "Comment peux-tu être contre cette loi ? Pense aux enfants !" },
	{ colonne_de_gauche: "Argument ad ignorantiam", colonne_de_droite: "On n'a jamais prouvé que les fantômes n'existaient pas, donc ils existent." },
	{ colonne_de_gauche: "Faux compromis", colonne_de_droite: "Les climatosceptiques et les climatologues ont tous les deux des arguments valables." },
	{ colonne_de_gauche: "Sophisme du joueur", colonne_de_droite: "J'ai perdu 10 fois de suite à la roulette, je suis sûr de gagner au prochain tour." },
	{ colonne_de_gauche: "Sophisme de la solution parfaite", colonne_de_droite: "Pourquoi recycler ? Ça ne résoudra pas totalement le problème des déchets." },
	{ colonne_de_gauche: "Sophisme de l'accident", colonne_de_droite: "Les couteaux peuvent tuer, donc il faut les interdire." },
	{ colonne_de_gauche: "Sophisme de composition", colonne_de_droite: "Chaque pièce de cette machine est légère, donc la machine entière est légère." },
	{ colonne_de_gauche: "Sophisme de division", colonne_de_droite: "L'équipe a gagné le championnat, donc chaque joueur est un champion." },
	{ colonne_de_gauche: "Sophisme du Texas", colonne_de_droite: "Cet hiver est particulièrement froid, donc le réchauffement climatique n'existe pas." },
	{ colonne_de_gauche: "Sophisme de l'anecdote", colonne_de_droite: "Mon grand-père fumait un paquet par jour et a vécu jusqu'à 95 ans, donc fumer n'est pas si dangereux." },
	{ colonne_de_gauche: "Sophisme du coût irrécupérable", colonne_de_droite: "J'ai déjà dépensé tant d'argent dans ce projet, je ne peux pas abandonner maintenant." },
	{ colonne_de_gauche: "Sophisme de l'effort", colonne_de_droite: "J'ai travaillé dur sur ce rapport, donc il doit être bon." },
	{ colonne_de_gauche: "Sophisme de la nouveauté", colonne_de_droite: "C'est une nouvelle technologie, donc elle est forcément meilleure que l'ancienne." },
	{ colonne_de_gauche: "Sophisme de l'ancienneté", colonne_de_droite: "Cette méthode est utilisée depuis des siècles, elle doit être la meilleure." },
	{ colonne_de_gauche: "Sophisme du juste milieu", colonne_de_droite: "Les extrêmes sont toujours mauvais, la vérité se trouve au milieu." },
	{ colonne_de_gauche: "Sophisme de la pureté", colonne_de_droite: "Si on ne peut pas éliminer complètement la pauvreté, ça ne vaut pas la peine d'essayer." },
	{ colonne_de_gauche: "Sophisme de l'homme qui bat sa femme", colonne_de_droite: "Avez-vous arrêté de battre votre femme ?" },
	{ colonne_de_gauche: "Sophisme de la cause unique", colonne_de_droite: "Le chômage a augmenté depuis que ce gouvernement est au pouvoir, donc c'est la faute du gouvernement." },
	{ colonne_de_gauche: "Sophisme du vrai Écossais", colonne_de_droite: "Aucun vrai chrétien ne commettrait un tel acte." },
	{ colonne_de_gauche: "Sophisme de la preuve anecdotique", colonne_de_droite: "Je connais quelqu'un qui a été guéri par cette thérapie alternative, donc elle fonctionne." },
	{ colonne_de_gauche: "Sophisme de l'appel à la flatterie", colonne_de_droite: "Une personne intelligente comme vous comprendra sûrement l'intérêt de cet investissement." },
	{ colonne_de_gauche: "Sophisme de l'appel à la pitié", colonne_de_droite: "Vous ne pouvez pas me mettre une mauvaise note, j'ai travaillé si dur !" },
	{ colonne_de_gauche: "Sophisme de l'appel à la crainte", colonne_de_droite: "Si vous ne votez pas pour moi, le pays sombrera dans le chaos." },
	{ colonne_de_gauche: "Sophisme de la fausse dichotomie", colonne_de_droite: "Soit vous êtes pour la croissance économique, soit vous êtes pour la protection de l'environnement." },
	{ colonne_de_gauche: "Sophisme de la pente fatale", colonne_de_droite: "Si on autorise l'euthanasie, bientôt on tuera les personnes âgées pour économiser." },
	{ colonne_de_gauche: "Sophisme de l'homme de paille inversé", colonne_de_droite: "Mon adversaire n'a même pas abordé mon argument le plus fort." },
	{ colonne_de_gauche: "Sophisme de la preuve par assertion", colonne_de_droite:"C'est vrai parce que je le dis, point final."},
	{ colonne_de_gauche: "Sophisme de l'appel à l'incrédulité" ,colonne_de_droite:"Je ne peux pas croire que l'évolution soit vraie, c'est trop complexe."},
	{ colonne_de_gauche: "Sophisme de la corrélation implique causalité" ,colonne_de_droite:"Les ventes de crème glacée augmentent en même temps que les noyades, donc la crème glacée cause des noyades."} /* pas de virgule ! */









	

];