const textes = [
  {
    id: 1,
    contenu: `« 
    <span class="phrase-num">[1]</span> L'art est une forme d'expression qui transcende les mots. 
    <span class="phrase-num">[2]</span> Il nous permet d'explorer nos émotions les plus profondes. 
    <span class="phrase-num">[3]</span> Chaque œuvre artistique raconte une histoire unique. 
    <span class="phrase-num">[4]</span> La beauté de l'art réside dans sa capacité à provoquer la réflexion. 
    <span class="phrase-num">[5]</span> L'art véhicule des valeurs culturelles et personnelles. 
    <span class="phrase-num">[6]</span> Les artistes jouent un rôle essentiel dans la société. 
    <span class="phrase-num">[7]</span> À travers leurs créations, ils nous sensibilisent à des enjeux sociaux. 
    <span class="phrase-num">[8]</span> L'art a le pouvoir de rassembler et d'unir les gens. 
    <span class="phrase-num">[9]</span> C'est un moyen d'évasion, mais aussi de prise de conscience. 
    <span class="phrase-num">[10]</span> En somme, l'art est indispensable à notre humanité. 
    »`,
    reponses: {
      origine: "Platon, *La République*, Paris : Les Belles Lettres, 2016, p. 125.",
      theme: "L’art",
      these: "L'art permet d'accéder à la vérité au-delà des apparences.",
      interet: "Il éveille les émotions et suscite la réflexion.",
      problematique: "Quel est le rôle de l'art dans la société contemporaine ?"
    }
  },
  {
    id: 2,
    contenu: `« 
    <span class="phrase-num">[1]</span> Le bonheur ne se trouve pas dans l'accumulation des biens matériels, 
    <span class="phrase-num">[2]</span> mais dans la satisfaction des désirs simples et l'amitié authentique. 
    <span class="phrase-num">[3]</span> La vie heureuse se construit sur des valeurs de partage et d'échange. 
    <span class="phrase-num">[4]</span> Les plaisirs simples, comme un repas partagé, apportent joie et sérénité. 
    <span class="phrase-num">[5]</span> La paix intérieure est un état que l'on cultive jour après jour. 
    <span class="phrase-num">[6]</span> La démarche vers le bonheur est profondément personnelle. 
    <span class="phrase-num">[7]</span> À travers les relations humaines, nous trouvons notre place dans le monde. 
    <span class="phrase-num">[8]</span> La gratitude, envers soi et envers les autres, est essentielle. 
    <span class="phrase-num">[9]</span> En définitive, le bonheur est une aventure individuelle. 
    <span class="phrase-num">[10]</span> Ainsi, apprendre à apprécier chaque moment devient un art en soi. 
    »`,
    reponses: {
      origine: "Épicure, *Lettre à Ménécée*, Genève : Éditions de l'Atlantique, 2015, p. 37.",
      theme: "Le bonheur",
      these: "Le bonheur véritable réside dans la simplicité et l'amitié.",
      interet: "Il nous enseigne à apprécier les petites choses de la vie.",
      problematique: "Comment distinguer le vrai bonheur des plaisirs éphémères ?"
    }
  },
  {
    id: 3,
    contenu: `« 
    <span class="phrase-num">[1]</span> La conscience est une lumière intérieure qui éclaire nos choix. 
    <span class="phrase-num">[2]</span> Elle nous guide vers le bien et nous avertit du mal. 
    <span class="phrase-num">[3]</span> C'est en écoutant notre conscience que nous devenons des êtres éthiques. 
    <span class="phrase-num">[4]</span> La conscience peut être façonnée par l'expérience et l'éducation. 
    <span class="phrase-num">[5]</span> Les conflits internes souvent émergent de nos luttes avec notre conscience. 
    <span class="phrase-num">[6]</span> Il est crucial d'affiner notre conscience pour qu'elle soit un bon guide. 
    <span class="phrase-num">[7]</span> La conscience collective joue un rôle dans l'éthique sociale. 
    <span class="phrase-num">[8]</span> Une société consciente est une société plus juste. 
    <span class="phrase-num">[9]</span> En fin de compte, la conscience est essentielle à notre humanité. 
    <span class="phrase-num">[10]</span> Il est vital de nourrir notre conscience par la réflexion. 
    »`,
    reponses: {
      origine: "Socrate, *Les dialogues*, Paris : Gallimard, 2018, p. 173.",
      theme: "La conscience",
      these: "La conscience guide nos choix moraux et éthiques.",
      interet: "Elle est essentielle pour vivre une vie harmonieuse.",
      problematique: "À quel point la conscience est-elle influencée par la société ?"
    }
  },
  {
    id: 4,
    contenu: `« 
    <span class="phrase-num">[1]</span> Le devoir est une obligation morale qui croît en nous. 
    <span class="phrase-num">[2]</span> Chacun doit ressentir l'appel à agir avec vertu. 
    <span class="phrase-num">[3]</span> Le devoir n'est pas toujours évident dans la société moderne. 
    <span class="phrase-num">[4]</span> Les choix difficiles révèlent souvent notre véritable caractère. 
    <span class="phrase-num">[5]</span> Il est important de se poser des questions éthiques sur nos actions. 
    <span class="phrase-num">[6]</span> Dans toute société, le devoir envers autrui doit être respecté. 
    <span class="phrase-num">[7]</span> Les valeurs éthiques doivent guider nos actions quotidiennes. 
    <span class="phrase-num">[8]</span> Agir selon son devoir est un acte de courage. 
    <span class="phrase-num">[9]</span> La contemplation du devoir renforce notre intégrité personnelle. 
    <span class="phrase-num">[10]</span> En somme, le devoir est la clé de notre moralité. 
    »`,
    reponses: {
      origine: "Kant, *Fondements de la métaphysique des mœurs*, Paris : Presses Universitaires de France, 2017, p. 202.",
      theme: "Le devoir",
      these: "Le devoir est la base de toutes les actions morales.",
      interet: "Il nous pousse à agir avec intégrité.",
      problematique: "Peut-on toujours agir selon son devoir ?"
    }
  },
  {
    id: 5,
    contenu: `« 
    <span class="phrase-num">[1]</span> L'État doit veiller à la sécurité et à la justice pour tous. 
    <span class="phrase-num">[2]</span> Il doit être un arbitre équitable dans les affaires des citoyens. 
    <span class="phrase-num">[3]</span> La légitimité de l'État repose sur le consentement des gouvernés. 
    <span class="phrase-num">[4]</span> Une politique d'inclusion est essentielle à la stabilité. 
    <span class="phrase-num">[5]</span> L'État doit évoluer avec les valeurs de ses citoyens. 
    <span class="phrase-num">[6]</span> Les libertés individuelles doivent être protégées. 
    <span class="phrase-num">[7]</span> Un bon gouvernement est celui qui écoute son peuple. 
    <span class="phrase-num">[8]</span> L'État doit être transparent dans sa gestion. 
    <span class="phrase-num">[9]</span> La participation citoyenne est vitale pour une démocratie saine. 
    <span class="phrase-num">[10]</span> En fin de compte, l'État doit servir le bien commun. 
    »`,
    reponses: {
      origine: "Platon, *La République*, Paris : Les Belles Lettres, 2016, p. 143.",
      theme: "L’État",
      these: "L'État doit être un modèle de justice et de vertu.",
      interet: "Sa fonction essentielle est d'assurer la paix sociale.",
      problematique: "Comment l'État peut-il équilibrer liberté et autorité ?"
    }
  },
  {
    id: 6,
    contenu: `« 
    <span class="phrase-num">[1]</span> L'inconscient influence nos pensées et notre comportement. 
    <span class="phrase-num">[2]</span> Il abrite des désirs refoulés et des peurs cachées. 
    <span class="phrase-num">[3]</span> La psychothérapie permet d'explorer ces profondeurs. 
    <span class="phrase-num">[4]</span> Les rêves sont souvent des fenêtres vers notre inconscient. 
    <span class="phrase-num">[5]</span> En les interprétant, nous découvrons des vérités sur nous-mêmes. 
    <span class="phrase-num">[6]</span> L'inconscient peut également révéler des complexités relationnelles. 
    <span class="phrase-num">[7]</span> Comprendre notre inconscient est essentiel pour notre santé mentale. 
    <span class="phrase-num">[8]</span> Nous devons reconnaître l'impact de l'inconscient dans nos choix. 
    <span class="phrase-num">[9]</span> En fin de compte, nous sommes souvent façonnés par l'invisible. 
    <span class="phrase-num">[10]</span> L'inconscient est un territoire à explorer, riche en découvertes. 
    »`,
    reponses: {
      origine: "Freud, *L'interprétation des rêves*, Paris : Éditions Payot, 2001, p. 58.",
      theme: "L’inconscient",
      these: "Nos désirs inconscients peuvent influencer notre comportement.",
      interet: "Comprendre l'inconscient nous aide à mieux nous connaître.",
      problematique: "À quel point sommes-nous conscients de notre inconscient ?"
    }
  },
  {
    id: 7,
    contenu: `« 
    <span class="phrase-num">[1]</span> La justice est la pierre angulaire d'une société prospère. 
    <span class="phrase-num">[2]</span> Elle garantit que chaque individu reçoit ce qui lui est dû. 
    <span class="phrase-num">[3]</span> La justice sociale est indispensable pour l'harmonie collective. 
    <span class="phrase-num">[4]</span> La loi doit être appliquée de manière égale à tous. 
    <span class="phrase-num">[5]</span> Un système judiciaire équitable est un impératif démocratique. 
    <span class="phrase-num">[6]</span> La justice doit également reconnaître les inégalités structurelles. 
    <span class="phrase-num">[7]</span> Elle n'est pas seulement punitive, mais aussi réparatrice. 
    <span class="phrase-num">[8]</span> Nous devons travailler vers la réconciliation plutôt que la simple punition. 
    <span class="phrase-num">[9]</span> En fin de compte, la véritable justice exige une réflexion constante. 
    <span class="phrase-num">[10]</span> En somme, la justice est essentielle pour l'épanouissement humain. 
    »`,
    reponses: {
      origine: "Aristote, *Éthique à Nicomaque*, Éditions PQR, 2014, p. 89.",
      theme: "La justice",
      these: "La justice est la vertu qui garantit l'harmonie sociale.",
      interet: "Elle assure l'équité entre tous les citoyens.",
      problematique: "Quels sont les critères de la justice véritable ?"
    }
  },
  {
    id: 8,
    contenu: `« 
    <span class="phrase-num">[1]</span> Le langage est un outil puissant qui structure notre pensée. 
    <span class="phrase-num">[2]</span> C'est par le langage que nous partageons nos pensées et nos sentiments. 
    <span class="phrase-num">[3]</span> Chaque culture a son propre vocabulaire qui reflète ses valeurs. 
    <span class="phrase-num">[4]</span> Le langage permet de construire des réalités partagées. 
    <span class="phrase-num">[5]</span> Parfois, les mots peuvent créer des malentendus. 
    <span class="phrase-num">[6]</span> La linguistique étudie les mécaniques du langage. 
    <span class="phrase-num">[7]</span> Les réflexions sur le langage interrogent notre perception du monde. 
    <span class="phrase-num">[8]</span> Maîtriser le langage, c'est maîtriser la communication. 
    <span class="phrase-num">[9]</span> En fin de compte, le langage est le fondement de notre vie sociale. 
    <span class="phrase-num">[10]</span> Il est donc essentiel de l'utiliser avec soin. 
    »`,
    reponses: {
      origine: "Saussure, *Cours de linguistique générale*, Éditions STU, 2003, p. 45.",
      theme: "Le langage",
      these: "Le langage structure notre perception de la réalité.",
      interet: "Il est essentiel pour la communication et les relations interpersonnelles.",
      problematique: "Comment le langage façonne-t-il nos idées et conceptions du monde ?"
    }
  },
  {
    id: 9,
    contenu: `« 
    <span class="phrase-num">[1]</span> La liberté est un droit fondamental qui permet à l'individu de s'épanouir. 
    <span class="phrase-num">[2]</span> Elle doit être exercée en respectant les droits d'autrui. 
    <span class="phrase-num">[3]</span> La liberté d'expression est cruciale dans une démocratie. 
    <span class="phrase-num">[4]</span> Toutefois, elle peut être mise à l'épreuve par des discours de haine. 
    <span class="phrase-num">[5]</span> Le défi consiste à trouver un équilibre entre liberté et égalité. 
    <span class="phrase-num">[6]</span> Les lois doivent protéger cette liberté tout en préservant l'ordre public. 
    <span class="phrase-num">[7]</span> Les citoyens ont la responsabilité de défendre leurs droits. 
    <span class="phrase-num">[8]</span> En somme, la liberté est un bien précieux à préserver. 
    <span class="phrase-num">[9]</span> Elle est souvent le cœur des débats politiques. 
    <span class="phrase-num">[10]</span> En conclusion, défendre la liberté, c'est défendre notre humanité. 
    »`,
    reponses: {
      origine: "Rousseau, *Du Contrat Social*, Éditions VWX, 1999, p. 67.",
      theme: "La liberté",
      these: "La vraie liberté ne peut exister sans responsabilité sociale.",
      interet: "Elle est indispensable à la démocratie.",
      problematique: "Quelle est la limite entre liberté individuelle et bien commun ?"
    }
  },
  {
    id: 10,
    contenu: `« 
    <span class="phrase-num">[1]</span> La nature est un écosystème complexe, essentiel à notre survie. 
    <span class="phrase-num">[2]</span> Chaque espèce a un rôle à jouer dans cet équilibre. 
    <span class="phrase-num">[3]</span> La destruction des habitats naturels menace la biodiversité. 
    <span class="phrase-num">[4]</span> Protéger la nature est une responsabilité partagée. 
    <span class="phrase-num">[5]</span> Les actions humaines ont un impact direct sur l'environnement. 
    <span class="phrase-num">[6]</span> La sensibilisation à l'écologie est cruciale. 
    <span class="phrase-num">[7]</span> Chaque geste compte dans la lutte pour la préservation de notre planète. 
    <span class="phrase-num">[8]</span> Apprendre à vivre en harmonie avec la nature est essentiel. 
    <span class="phrase-num">[9]</span> La nature offre également des ressources vitales pour notre existence. 
    <span class="phrase-num">[10]</span> En définitive, elle est à la fois notre refuge et notre origine. 
    »`,
    reponses: {
      origine: "Zhuangzi, *Le livre de Zhuangzi*, Éditions STU, 2014, p. 89.",
      theme: "La nature",
      these: "La nature doit être protégée pour préserver nos ressources.",
      interet: "Elle nous relie à une existence plus holistique.",
      problematique: "Comment concilier développement humain et préservation de la nature ?"
    }
  },
  {
    id: 11,
    contenu: `« 
    <span class="phrase-num">[1]</span> La science est guidée par la recherche de faits et de vérités. 
    <span class="phrase-num">[2]</span> Elle repose sur des méthodes rigoureuses et reproductibles. 
    <span class="phrase-num">[3]</span> Chaque expérience scientifique contribue à notre compréhension. 
    <span class="phrase-num">[4]</span> La communauté scientifique évolue par le questionnement constant. 
    <span class="phrase-num">[5]</span> Bien que puissants, les résultats scientifiques doivent être interprétés avec prudence. 
    <span class="phrase-num">[6]</span> Les implications éthiques de la science ne doivent jamais être négligées. 
    <span class="phrase-num">[7]</span> Scienciels et humanistes doivent dialoguer pour un progrès responsable. 
    <span class="phrase-num">[8]</span> La science, si mal dirigée, peut causer des ravages. 
    <span class="phrase-num">[9]</span> Les chercheurs ont une responsabilité envers la société. 
    <span class="phrase-num">[10]</span> En résumé, la science doit être au service de l'humanité. 
    »`,
    reponses: {
      origine: "Popper, *La logique de la découverte scientifique*, Éditions JKL, 2015.",
      theme: "La science",
      these: "La science doit se soumettre à des principes éthiques.",
      interet: "Elle éclaire notre compréhension du monde.",
      problematique: "Sous quelles conditions la science peut-elle être éthique ?"
    }
  },
  {
    id: 12,
    contenu: `« 
    <span class="phrase-num">[1]</span> La technique évolue à un rythme sans précédent dans notre société. 
    <span class="phrase-num">[2]</span> Elle améliore notre quotidien mais pose aussi des défis. 
    <span class="phrase-num">[3]</span> L'éthique technique enfin mérite notre attention. 
    <span class="phrase-num">[4]</span> L'innovation peut engendrer des abus si elle n'est pas maîtrisée. 
    <span class="phrase-num">[5]</span> Nous devons questionner les impacts sociétaux des nouvelles technologies. 
    <span class="phrase-num">[6]</span> La technique doit toujours soutenir et non remplacer les relations humaines. 
    <span class="phrase-num">[7]</span> Le bon usage de la technique nécessite une conscience éthique. 
    <span class="phrase-num">[8]</span> Apprendre à l'utiliser de manière responsable est essentiel. 
    <span class="phrase-num">[9]</span> Il est impératif que nous restions maîtres de notre destin face à la technique. 
    <span class="phrase-num">[10]</span> La technique doit être un moyen, pas une finalité. 
    »`,
    reponses: {
      origine: "Heidegger, *La question de la technique*, Éditions STU, 2015.",
      theme: "La technique",
      these: "La technique pose des questions éthiques.",
      interet: "Elle influence notre rapport à la nature et à l'homme.",
      problematique: "La technique nous libère-t-elle ou nous aliene-t-elle ?"
    }
  },
  {
    id: 13,
    contenu: `« 
    <span class="phrase-num">[1]</span> Le temps joue un rôle crucial dans notre perception de la vie. 
    <span class="phrase-num">[2]</span> Chaque instant est unique et précieux. 
    <span class="phrase-num">[3]</span> Nos expériences façonnent notre rapport au temps. 
    <span class="phrase-num">[4]</span> La quête de sens est souvent liée au passage du temps. 
    <span class="phrase-num">[5]</span> La mémoire est une manière de relier le passé au présent. 
    <span class="phrase-num">[6]</span> En prenant conscience du temps, nous découvrons l'importance du moment présent. 
    <span class="phrase-num">[7]</span> Le temps peut être un allié ou un ennemi dans notre existence. 
    <span class="phrase-num">[8]</span> Evolutions et changements sont inévitablement liés à la temporalité. 
    <span class="phrase-num">[9]</span> En fin de compte, c'est notre perception qui définit le temps. 
    <span class="phrase-num">[10]</span> Le temps, ce maître impitoyable, nous rappelle notre mortalité. 
    »`,
    reponses: {
      origine: "Bergson, *Essai sur les données immédiates de la conscience*, Éditions ABC, 2020.",
      theme: "Le temps",
      these: "Le temps vécu diffère du temps mesuré.",
      interet: "Il façonne nos souvenirs et nos attentes.",
      problematique: "Comment appréhender le temps qui passe ?"
    }
  },
  {
    id: 14,
    contenu: `« 
    <span class="phrase-num">[1]</span> Le bonheur est souvent une quête dont l'essence est en nous. 
    <span class="phrase-num">[2]</span> Il n'est pas dans l'accumulation des richesses. 
    <span class="phrase-num">[3]</span> Les expériences authentiques nous enrichissent bien plus. 
    <span class="phrase-num">[4]</span> Cultiver des relations sincères est fondamental. 
    <span class="phrase-num">[5]</span> La gratitude et le contentement produisent un bonheur durable. 
    <span class="phrase-num">[6]</span> Chaque individu doit définir son propre bonheur. 
    <span class="phrase-num">[7]</span> La recherche du bonheur nécessite un équilibre intérieur. 
    <span class="phrase-num">[8]</span> Le bonheur est aussi une aventure personnelle. 
    <span class="phrase-num">[9]</span> En effet, apprécier les moments simples enrichit notre existence. 
    <span class="phrase-num">[10]</span> En fin de compte, le bonheur doit être vu comme un état d'esprit. 
    »`,
    reponses: {
      origine: "Aristote, *Éthique à Nicomaque*, Éditions DEF, 2014.",
      theme: "Le bonheur",
      these: "Le bonheur dépend de l'équilibre entre plaisirs et raison.",
      interet: "Il est intimement lié à notre moralité.",
      problematique: "Peut-on vraiment définir le bonheur universellement ?"
    }
  },
  {
    id: 15,
    contenu: `« 
    <span class="phrase-num">[1]</span> La vérité est souvent considérée comme une pursuit infinie. 
    <span class="phrase-num">[2]</span> Au fil du temps, nos perceptions de la vérité évoluent. 
    <span class="phrase-num">[3]</span> Chaque culture a sa propre interprétation des vérités. 
    <span class="phrase-num">[4]</span> La quête de la vérité demande courage et introspection. 
    <span class="phrase-num">[5]</span> Nos certitudes peuvent être remises en question à chaque instant. 
    <span class="phrase-num">[6]</span> En réfléchissant profondément, nous façonnons notre compréhension. 
    <span class="phrase-num">[7]</span> La vérité se révèle souvent dans le dialogue. 
    <span class="phrase-num">[8]</span> En interrogeant nos croyances, nous avançons vers la sagesse. 
    <span class="phrase-num">[9]</span> En fin de compte, la vérité est une quête personnelle et universelle. 
    <span class="phrase-num">[10]</span> Que signifie vraiment chercher la vérité dans nos vies ? 
    »`,
    reponses: {
      origine: "Nietzsche, *Par-delà le bien et le mal*, Éditions MNO, 2004.",
      theme: "La vérité",
      these: "La vérité est souvent subjective et contextuelle.",
      interet: "Son étude permet de mieux comprendre l'humanité.",
      problematique: "Peut-on véritablement atteindre une vérité objective ?"
    }
  },
  {
    id: 16,
    contenu: `« 
    <span class="phrase-num">[1]</span> La nature est un précieux héritage à préserver. 
    <span class="phrase-num">[2]</span> Chaque écosystème joue un rôle vital dans notre survie. 
    <span class="phrase-num">[3]</span> La déforestation menace notre équilibre environnemental. 
    <span class="phrase-num">[4]</span> La pollution de l'air et de l'eau affecte notre santé. 
    <span class="phrase-num">[5]</span> Chaque geste compte dans la protection de notre planète. 
    <span class="phrase-num">[6]</span> La biodiversité est essentielle pour l'équilibre des écosystèmes. 
    <span class="phrase-num">[7]</span> La sensibilisation à la conservation est cruciale. 
    <span class="phrase-num">[8]</span> L'éducation est la clé pour encourager le respect de la nature. 
    <span class="phrase-num">[9]</span> En fin de compte, notre avenir dépend de notre rapport à la nature. 
    <span class="phrase-num">[10]</span> La nature est à la fois notre berceau et notre refuge. 
    »`,
    reponses: {
      origine: "Zhuangzi, *Le livre de Zhuangzi*, Éditions QRS, 2014.",
      theme: "La nature",
      these: "La nature doit être protégée pour préserver nos ressources.",
      interet: "Elle nous relie à une existence plus holistique.",
      problematique: "Comment concilier développement humain et préservation de la nature ?"
    }
  },
  {
    id: 17,
    contenu: `« 
    <span class="phrase-num">[1]</span> Le travail est un élément central de notre identité. 
    <span class="phrase-num">[2]</span> Il contribue à notre épanouissement personnel et social. 
    <span class="phrase-num">[3]</span> Cependant, il peut aussi être source de stress et d'aliénation. 
    <span class="phrase-num">[4]</span> Les conditions de travail doivent respecter chaque individu. 
    <span class="phrase-num">[5]</span> La reconnaissance au travail favorise un environnement positif. 
    <span class="phrase-num">[6]</span> L'équilibre entre vie professionnelle et personnelle est essentiel. 
    <span class="phrase-num">[7]</span> En recherchant un sens dans notre travail, nous gagnons en motivation. 
    <span class="phrase-num">[8]</span> Un travail éthique contribue au bien-être général. 
    <span class="phrase-num">[9]</span> Enfin, un bon travail enrichit notre existence. 
    <span class="phrase-num">[10]</span> Au fond, le travail doit être une source de fierté. 
    »`,
    reponses: {
      origine: "Marx, *Le Capital*, Éditions PQR, 2018.",
      theme: "Le travail",
      these: "Le travail est central dans la vie économique et sociale.",
      interet: "Il définit notre identité et notre place dans la société.",
      problematique: "Comment préserver l'humanité du travail dans un monde automatisé ?"
    }
  },
  {
    id: 18,
    contenu: `« 
    <span class="phrase-num">[1]</span> La science est la quête d’un savoir rigoureux et objectif. 
    <span class="phrase-num">[2]</span> Chaque théorie doit être soumise à la falsifiabilité. 
    <span class="phrase-num">[3]</span> Les découvertes récentes changent notre compréhension de l'univers. 
    <span class="phrase-num">[4]</span> La recherche doit être indépendante de toute pression politique. 
    <span class="phrase-num">[5]</span> Une bonne science implique éthique et responsabilité. 
    <span class="phrase-num">[6]</span> La transparence dans les méthodes est primordiale. 
    <span class="phrase-num">[7]</span> Les résultats scientifiques portent des implications dans nos vies. 
    <span class="phrase-num">[8]</span> Nous devons nous poser des questions sur l'usage de la science. 
    <span class="phrase-num">[9]</span> En fin de compte, la science doit œuvrer pour l'humanité. 
    <span class="phrase-num">[10]</span> La quête de la connaissance exige humilité et ouverture d'esprit. 
    »`,
    reponses: {
      origine: "Popper, *La logique de la découverte scientifique*, Éditions JKL, 2015.",
      theme: "La science",
      these: "La science doit se soumettre à des principes éthiques.",
      interet: "Elle éclaire notre compréhension du monde.",
      problematique: "Sous quelles conditions la science peut-elle être éthique ?"
    }
  },
  {
    id: 19,
    contenu: `« 
    <span class="phrase-num">[1]</span> La vérité est souvent un chemin semé d'embûches. 
    <span class="phrase-num">[2]</span> Elle nécessite une quête constante d'authenticité. 
    <span class="phrase-num">[3]</span> La perception de la vérité diffère d'un individu à l'autre. 
    <span class="phrase-num">[4]</span> Nos biais personnels peuvent obscurcir notre jugement. 
    <span class="phrase-num">[5]</span> En réfléchissant, nous pouvons découvrir des vérités cachées. 
    <span class="phrase-num">[6]</span> La philosophie nous incite à interroger nos certitudes. 
    <span class="phrase-num">[7]</span> La vérité est souvent révélée dans le dialogue. 
    <span class="phrase-num">[8]</span> Accepter différentes perspectives enrichit notre compréhension. 
    <span class="phrase-num">[9]</span> La raison doit guider notre quête de vérité. 
    <span class="phrase-num">[10]</span> En fin de compte, la vérité est une lumière qui éclaire notre chemin. 
    »`,
    reponses: {
      origine: "Nietzsche, *Par-delà le bien et le mal*, Éditions MNO, 2004.",
      theme: "La vérité",
      these: "La vérité est souvent une construction sociale.",
      interet: "Son étude permet de mieux comprendre l'humanité.",
      problematique: "Peut-on véritablement atteindre une vérité objective ?"
    }
  },
  {
    id: 20,
    contenu: `« 
    <span class="phrase-num">[1]</span> La technique moderne a transformé notre quotidien. 
    <span class="phrase-num">[2]</span> Sans elle, peu de choses seraient possibles dans notre société contemporaine. 
    <span class="phrase-num">[3]</span> Elle stimule le progrès tout en posant des dilemmes éthiques. 
    <span class="phrase-num">[4]</span> La dépendance à la technologie soulève des questions morales. 
    <span class="phrase-num">[5]</span> Il est impératif de réfléchir aux impacts de notre usage technique. 
    <span class="phrase-num">[6]</span> La responsabilité de la technique revient à l'homme. 
    <span class="phrase-num">[7]</span> Chaque innovation doit répondre à des critères éthiques. 
    <span class="phrase-num">[8]</span> La technique ne doit pas nuire aux relations humaines. 
    <span class="phrase-num">[9]</span> Un futur technologique doit être inclusif et respectueux. 
    <span class="phrase-num">[10]</span> En somme, la technique doit être un voyage vers la liberté. 
    »`,
    reponses: {
      origine: "Heidegger, *La question de la technique*, Éditions STU, 2015.",
      theme: "La technique",
      these: "La technique pose des questions éthiques.",
      interet: "Elle influence notre rapport à la nature et à l'homme.",
      problematique: "La technique nous libère-t-elle ou nous aliene-t-elle ?"
    }
  },
  {
    id: 21,
    contenu: `« 
    <span class="phrase-num">[1]</span> Le travail est un moyen par lequel nous acquérons des compétences. 
    <span class="phrase-num">[2]</span> Il nous permet de contribuer à la société de manière significative. 
    <span class="phrase-num">[3]</span> Les meilleures conditions de travail favorisent l'épanouissement personnel. 
    <span class="phrase-num">[4]</span> Le travail en équipe stimule la créativité et la collaboration. 
    <span class="phrase-num">[5]</span> Cependant, un travail mal géré peut conduire à la frustration. 
    <span class="phrase-num">[6]</span> Établir un équilibre entre vie professionnelle et personnelle est essentiel. 
    <span class="phrase-num">[7]</span> Chaque individu a un rôle à jouer dans l'économie et la communauté. 
    <span class="phrase-num">[8]</span> Le respect et la reconnaissance au travail renforcent la motivation. 
    <span class="phrase-num">[9]</span> En définitive, le travail doit être source de satisfaction. 
    <span class="phrase-num">[10]</span> Le travail bien fait mérite d'être célébré et respecté. 
    »`,
    reponses: {
      origine: "Marx, *Le Capital*, Éditions PQR, 2018.",
      theme: "Le travail",
      these: "Le travail est central dans la vie économique et sociale.",
      interet: "Il définit notre identité et notre place dans la société.",
      problematique: "Comment préserver l'humanité du travail dans un monde automatisé ?"
    }
  },
  {
    id: 22,
    contenu: `« 
    <span class="phrase-num">[1]</span> La nature est à la fois notre mère et notre source de ressources. 
    <span class="phrase-num">[2]</span> Elle offre un équilibre fragile qui doit être préservé. 
    <span class="phrase-num">[3]</span> Les changements climatiques menacent cet équilibre. 
    <span class="phrase-num">[4]</span> La prise de conscience écologique est cruciale pour assurer notre survie. 
    <span class="phrase-num">[5]</span> Chaque geste compte dans notre responsabilité envers la planète. 
    <span class="phrase-num">[6]</span> La biodiversité est clé pour maintenir la santé des écosystèmes. 
    <span class="phrase-num">[7]</span> L'éducation environnementale doit être une priorité. 
    <span class="phrase-num">[8]</span> Protéger la nature, c'est protéger notre héritage pour les générations futures. 
    <span class="phrase-num">[9]</span> En fin de compte, reconnaître notre place dans la nature est essentiel. 
    <span class="phrase-num">[10]</span> La nature nous enseigne les valeurs d'humilité et de respect. 
    »`,
    reponses: {
      origine: "Zhuangzi, *Le livre de Zhuangzi*, Éditions STU, 2014.",
      theme: "La nature",
      these: "La nature doit être protégée pour préserver nos ressources.",
      interet: "Elle nous relie à une existence plus holistique.",
      problematique: "Comment concilier développement humain et préservation de la nature ?"
    }
  },
  {
    id: 23,
    contenu: `« 
    <span class="phrase-num">[1]</span> La technique moderne a transformé notre quotidien de manière radicale. 
    <span class="phrase-num">[2]</span> Des innovations apparaissent chaque jour, modifiant nos interactions. 
    <span class="phrase-num">[3]</span> Bien que bénéfique, la technique soulève des préoccupations éthiques. 
    <span class="phrase-num">[4]</span> L'impact de la technologie doit être surveillé et régulé. 
    <span class="phrase-num">[5]</span> La responsabilité éthique des acteurs techniques est cruciale. 
    <span class="phrase-num">[6]</span> Apprendre à utiliser ces outils avec discernement est essentiel. 
    <span class="phrase-num">[7]</span> La technique doit servir le bien commun et non des intérêts particuliers. 
    <span class="phrase-num">[8]</span> Sa domination sur nos vies doit être questionnée. 
    <span class="phrase-num">[9]</span> En fin de compte, la technique doit enrichir notre humanité. 
    <span class="phrase-num">[10]</span> La technique doit être sous le contrôle de valeurs éthiques. 
    »`,
    reponses: {
      origine: "Heidegger, *La question de la technique*, Éditions DEF, 2015.",
      theme: "La technique",
      these: "La technique pose des questions éthiques.",
      interet: "Elle influence notre rapport à la nature et à l'homme.",
      problematique: "La technique nous libère-t-elle ou nous aliene-t-elle ?"
    }
  },
  {
    id: 24,
    contenu: `« 
    <span class="phrase-num">[1]</span> Le temps, ce concept insaisissable, modèle toute notre existence. 
    <span class="phrase-num">[2]</span> Chaque instant est précieux et ne revient jamais. 
    <span class="phrase-num">[3]</span> Notre perception du temps influence nos décisions. 
    <span class="phrase-num">[4]</span> Apprécier le moment présent est fondamental dans notre quête de bonheur. 
    <span class="phrase-num">[5]</span> Le temps est à la fois une contrainte et une opportunité. 
    <span class="phrase-num">[6]</span> Des philosophies différentes offrent des visions variées du temps. 
    <span class="phrase-num">[7]</span> La méditation et la pleine conscience nous aident à mieux accueillir le temps. 
    <span class="phrase-num">[8]</span> Comprendre notre rapport au temps est essentiel pour une vie épanouie. 
    <span class="phrase-num">[9]</span> En fin de compte, le temps est un miroir de notre existence. 
    <span class="phrase-num">[10]</span> C'est un voyage inévitable que nous devons apprécier. 
    »`,
    reponses: {
      origine: "Bergson, *Essai sur les données immédiates de la conscience*, Éditions GHI, 2020.",
      theme: "Le temps",
      these: "Le temps vécu diffère du temps mesuré.",
      interet: "Il façonne nos souvenirs et nos attentes.",
      problematique: "Comment appréhender le temps qui passe ?"
    }
  },
  {
    id: 25,
    contenu: `« 
    <span class="phrase-num">[1]</span> Le bonheur est souvent associé à la satisfaction des désirs. 
    <span class="phrase-num">[2]</span> Chaque être humain cherche à atteindre cet état de contentement. 
    <span class="phrase-num">[3]</span> Cependant, le bonheur dépend aussi de notre perspective. 
    <span class="phrase-num">[4]</span> C'est entre le plaisir et la sagesse que se cache le véritable bonheur. 
    <span class="phrase-num">[5]</span> Les petites joies de la vie quotidienne sont souvent les plus précieuses. 
    <span class="phrase-num">[6]</span> L'amitié et les relations authentiques apportent du sens à notre existence. 
    <span class="phrase-num">[7]</span> En agissant de manière altruiste, nous découvrons souvent le bonheur. 
    <span class="phrase-num">[8]</span> La quête du bonheur est un voyage, pas une destination. 
    <span class="phrase-num">[9]</span> En fin de compte, le bonheur est profondément ancré dans notre esprit. 
    <span class="phrase-num">[10]</span> Trouver le bonheur nécessite une exploration continue de soi. 
    »`,
    reponses: {
      origine: "Aristote, *Éthique à Nicomaque*, Éditions DEF, 2014.",
      theme: "Le bonheur",
      these: "Le bonheur dépend de l'équilibre entre plaisirs et raison.",
      interet: "Il est intimement lié à notre moralité.",
      problematique: "Peut-on vraiment définir le bonheur universellement ?"
    }
  },
  {
    id: 26,
    contenu: `« 
    <span class="phrase-num">[1]</span> La vérité est un combat intellectuel permanent. 
    <span class="phrase-num">[2]</span> Elle nécessite une investigation approfondie et critique. 
    <span class="phrase-num">[3]</span> Chaque individu est responsable de sa propre quête de vérité. 
    <span class="phrase-num">[4]</span> Souvent, la vérité et le mensonge s'entrelacent subtilement. 
    <span class="phrase-num">[5]</span> La tradition familiale et culturelle façonne notre perception. 
    <span class="phrase-num">[6]</span> Le dialogue entre différentes perspectives révèle des vérités nouvelles. 
    <span class="phrase-num">[7]</span> Pour découvrir la vérité, il faut oser questionner. 
    <span class="phrase-num">[8]</span> La vérité n'est pas toujours confortante, mais elle est nécessaire pour avancer. 
    <span class="phrase-num">[9]</span> En fin de compte, chercher la vérité est un acte de courage. 
    <span class="phrase-num">[10]</span> La vérité est une lumière dans l'obscurité de l'incertitude. 
    »`,
    reponses: {
      origine: "Nietzsche, *Par-delà le bien et le mal*, Éditions MNO, 2004.",
      theme: "La vérité",
      these: "La vérité est souvent une construction subjective.",
      interet: "Son étude permet de mieux comprendre l'humanité.",
      problematique: "Peut-on véritablement atteindre une vérité objective ?"
    }
  },
  {
    id: 27,
    contenu: `« 
    <span class="phrase-num">[1]</span> La nature est un équilibre complexe que nous devons apprendre à respecter. 
    <span class="phrase-num">[2]</span> Sa biodiversité nous rappelle la fragilité de notre écosystème. 
    <span class="phrase-num">[3]</span> Les actions humaines ont un impact direct sur l'environnement. 
    <span class="phrase-num">[4]</span> La déforestation et la pollution menacent cet équilibre. 
    <span class="phrase-num">[5]</span> Protéger la nature est aussi protéger notre propre survie. 
    <span class="phrase-num">[6]</span> L'éducation à la préservation de l'environnement est cruciale. 
    <span class="phrase-num">[7]</span> Chaque geste compte, même le plus petit. 
    <span class="phrase-num">[8]</span> En fin de compte, nous ne faisons qu'un avec la nature. 
    <span class="phrase-num">[9]</span> La nature est un trésor qu'il est un devoir de préserver. 
    <span class="phrase-num">[10]</span> C'est une responsabilité collective d'assurer sa pérennité. 
    »`,
    reponses: {
      origine: "Zhuangzi, *Le livre de Zhuangzi*, Éditions STU, 2014.",
      theme: "La nature",
      these: "La nature doit être protégée pour préserver nos ressources.",
      interet: "Elle nous relie à une existence plus holistique.",
      problematique: "Comment concilier développement humain et préservation de la nature ?"
    }
  },
  {
    id: 28,
    contenu: `« 
    <span class="phrase-num">[1]</span> La technique modifie notre rapport au monde à un rythme sans précédent. 
    <span class="phrase-num">[2]</span> Chaque jour apporte de nouvelles innovations qui transforment nos vies. 
    <span class="phrase-num">[3]</span> Cependant, avec ces avancées viennent des questionnements éthiques. 
    <span class="phrase-num">[4]</span> La technique doit être utilisée au service de l'humanité. 
    <span class="phrase-num">[5]</span> Le progrès technique doit se faire avec réflexion et responsabilité. 
    <span class="phrase-num">[6]</span> La dépendance à la technologie engendre des défis sociaux. 
    <span class="phrase-num">[7]</span> Il est essentiel de former une conscience technique critique. 
    <span class="phrase-num">[8]</span> La technologie doit enrichir nos vies sans déshumaniser. 
    <span class="phrase-num">[9]</span> En fin de compte, la technique est un moyen, pas une fin. 
    <span class="phrase-num">[10]</span> La sagesse est de l'utiliser avec discernement et éthique. 
    »`,
    reponses: {
      origine: "Heidegger, *La question de la technique*, Éditions DEF, 2015.",
      theme: "La technique",
      these: "La technique pose des questions éthiques.",
      interet: "Elle influence notre rapport à la nature et à l'homme.",
      problematique: "La technique nous libère-t-elle ou nous aliene-t-elle ?"
    }
  },
  {
    id: 29,
    contenu: `« 
    <span class="phrase-num">[1]</span> La science est la recherche inlassable de réponses à des questions fondamentales. 
    <span class="phrase-num">[2]</span> Elle repose sur des méthodes rigoureuses qui garantissent la vérifiabilité. 
    <span class="phrase-num">[3]</span> Chaque découverte scientifique doit être examinée et remise en question. 
    <span class="phrase-num">[4]</span> La science évolue grâce aux contributions de l'ensemble de la communauté. 
    <span class="phrase-num">[5]</span> L'innovation scientifique peut également conduire à des défis éthiques. 
    <span class="phrase-num">[6]</span> Une réflexion sur les impacts sociaux des recherches est cruciale. 
    <span class="phrase-num">[7]</span> En définitive, la science doit être au service du bien commun. 
    <span class="phrase-num">[8]</span> Avoir une vision intégrée entre science et éthique est essentiel. 
    <span class="phrase-num">[9]</span> La responsabilité de la science doit être partagée par tous. 
    <span class="phrase-num">[10]</span> La recherche est un voyage, pas un aboutissement. 
    »`,
    reponses: {
      origine: "Popper, *La logique de la découverte scientifique*, Éditions JKL, 2015.",
      theme: "La science",
      these: "La science doit se soumettre à des principes éthiques.",
      interet: "Elle éclaire notre compréhension du monde.",
      problematique: "Sous quelles conditions la science peut-elle être éthique ?"
    }
  },
  {
    id: 30,
    contenu: `« 
    <span class="phrase-num">[1]</span> La relation entre l’homme et la nature nécessite une guérison. 
    <span class="phrase-num">[2]</span> La nature a été trop souvent négligée dans notre quête de progrès. 
    <span class="phrase-num">[3]</span> Restaurer cet équilibre est vital pour notre survival. 
    <span class="phrase-num">[4]</span> La colère contre la destruction de la nature est en nous. 
    <span class="phrase-num">[5]</span> Nous devons apprendre à coexister avec notre environnement. 
    <span class="phrase-num">[6]</span> Lorsqu’on respecte la nature, elle nous donne tant en retour. 
    <span class="phrase-num">[7]</span> Chaque animal, chaque plante a une place dans cet écosystème. 
    <span class="phrase-num">[8]</span> La biodiversité assure la santé de notre planète. 
    <span class="phrase-num">[9]</span> Les jeunes générations portent un message fort de changement. 
    <span class="phrase-num">[10]</span> En somme, la nature doit être protégée par tous pour tous. 
    »`,
    reponses: {
      origine: "Zhuangzi, *Le livre de Zhuangzi*, Éditions STU, 2014.",
      theme: "La nature",
      these: "La nature doit être protégée pour préserver nos ressources.",
      interet: "Elle nous relie à une existence plus holistique.",
      problematique: "Comment concilier développement humain et préservation de la nature ?"
    }
  }
];