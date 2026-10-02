// ============================================
// DONNÉES GÉNÉRALES
// ============================================

const titre = "QUIZ";
const sousTitre = "Tester ses connaissances sur un texte de Rousseau";

// ============================================
// DONNÉES DU TEXTE PHILOSOPHIQUE
// ============================================

const philosophyData = {
	texte: "« [1] Trouver une forme d'association qui défende et protège de toute la force commune la personne et les biens de chaque associé, et par laquelle chacun, s'unissant à tous, n'obéisse **pourtant** qu'à lui-même et reste **aussi** libre qu'auparavant. [2] **Tel est** le problème fondamental dont le contrat social donne la solution. [3] Les clauses de ce contrat se réduisent à une seule : l'aliénation totale de chaque associé avec tous ses droits à toute la communauté. [4] **Car** **premièrement**, chacun se donnant tout entier, la condition est égale pour tous. [5] **En outre**, la condition étant égale pour tous, nul n'a intérêt à la rendre onéreuse aux autres. [6] **De plus**, l'aliénation se faisant sans réserve, l'union est **aussi** parfaite qu'elle peut l'être. [7] **Enfin**, chacun se donnant à tous ne se donne à personne. [8] **Ainsi**, **puisqu'**il n'y a pas un associé sur lequel on n'acquière le même droit qu'on lui cède sur soi, on gagne l'équivalent de tout ce qu'on perd. [9] **Par conséquent**, cet acte d'association produit un corps moral et collectif, qui est la République ou le corps politique. »",
	source: "Jean-Jacques ROUSSEAU, <em>Du contrat social</em>, livre I, chapitre 6, in <em>Œuvres complètes</em>, tome III, Bibliothèque de la Pléiade, Gallimard, 1964, pp.360-361"
};

// ============================================
// QUESTIONS DU QUIZ
// ============================================

const questions = [
    { 
        question: "Question n°1 : Quel est le problème fondamental selon Rousseau ?",
        answers: [
            "trouver une forme d'association qui protège chacun tout en le laissant libre", 
            "trouver une forme de gouvernement", 
            "trouver une religion civile"
        ], 
        correct: 1,
        explanation: "Rousseau formule ainsi le problème fondamental : « Trouver une forme d'association qui défende et protège de toute la force commune la personne et les biens de chaque associé, et par laquelle chacun, s'unissant à tous, n'obéisse pourtant qu'à lui-même et reste aussi libre qu'auparavant. » Ce problème est le cœur du contrat social : comment concilier la sécurité collective et la liberté individuelle ? Comment l'individu peut-il obéir à une autorité collective sans perdre sa liberté ? La solution rousseauiste consiste dans l'aliénation totale de chaque associé à la communauté, qui garantit l'égalité et la liberté."
    },
    { 
        question: "Question n°2 : Que donne le contrat social selon Rousseau ?",
        answers: [
            "la solution au problème fondamental", 
            "une nouvelle religion", 
            "une monarchie"
        ], 
        correct: 1,
        explanation: "Rousseau affirme : « Tel est le problème fondamental dont le contrat social donne la solution. » Le contrat social est donc la solution au problème de l'association qui protège et libère à la fois. Cette solution consiste dans un pacte par lequel chaque individu s'aliène totalement à la communauté. Ce pacte n'est pas un contrat historique mais un principe de légitimité : il définit les conditions sous lesquelles l'autorité politique est légitime. Le contrat social est ainsi la solution théorique au problème de la légitimité politique, non la description d'un événement réel."
    },
    { 
        question: "Question n°3 : À quoi se réduisent les clauses du contrat social ?",
        answers: [
            "à l'aliénation totale de chaque associé à toute la communauté", 
            "à la conservation de la propriété privée", 
            "à l'obéissance à un roi"
        ], 
        correct: 1,
        explanation: "Rousseau affirme : « Les clauses de ce contrat se réduisent à une seule : l'aliénation totale de chaque associé avec tous ses droits à toute la communauté. » Cette clause unique est le fondement du pacte social. Elle signifie que chaque individu renonce à tous ses droits au profit de la communauté. Cette aliénation totale est la condition de l'égalité et de la liberté : en se donnant tout entier à tous, chacun ne se donne à personne en particulier. Cette clause est radicale : elle implique la souveraineté absolue du peuple sur lui-même. Elle distingue Rousseau de Locke, qui conserve des droits individuels inaliénables."
    },
    { 
        question: "Question n°4 : Pourquoi l'aliénation totale est-elle juste selon Rousseau ?",
        answers: [
            "parce que chacun se donnant tout entier, la condition est égale pour tous", 
            "parce qu'elle enrichit les plus forts", 
            "parce qu'elle est imposée par Dieu"
        ], 
        correct: 1,
        explanation: "Rousseau explique : « Car premièrement, chacun se donnant tout entier, la condition est égale pour tous. » L'égalité est la première raison de l'aliénation totale. En effet, si chacun se donne tout entier, personne ne peut se prévaloir d'un privilège sur les autres : tous sont dans la même situation. Cette égalité est la condition de la justice : dans une société juste, les conditions doivent être égales pour tous. Cette conception fonde l'égalité républicaine, qui est l'égalité des citoyens devant la loi et dans la participation à la souveraineté. Elle distingue Rousseau des libéraux, qui acceptent les inégalités de fait."
    },
    { 
        question: "Question n°5 : Pourquoi nul n'a-t-il intérêt à rendre la condition onéreuse ?",
        answers: [
            "parce que la condition étant égale pour tous, chacun est également concerné", 
            "parce que la loi l'interdit", 
            "parce que Dieu le commande"
        ], 
        correct: 1,
        explanation: "Rousseau explique : « En outre, la condition étant égale pour tous, nul n'a intérêt à la rendre onéreuse aux autres. » Cette deuxième raison est la conséquence de la première : puisque tous sont dans la même situation, personne n'a intérêt à rendre la condition plus lourde pour les autres, car cela se retournerait contre lui. Cette réciprocité est la garantie de la justice : dans une société où les conditions sont égales, l'intérêt de chacun est de maintenir cette égalité. Cette conception fonde l'idée d'un intérêt commun, qui est l'intérêt de tous et de chacun. Elle distingue Rousseau de Hobbes, pour qui les hommes sont naturellement en guerre."
    },
    { 
        question: "Question n°6 : Pourquoi l'union est-elle parfaite selon Rousseau ?",
        answers: [
            "parce que l'aliénation se fait sans réserve", 
            "parce que les riches dominent", 
            "parce que le roi est juste"
        ], 
        correct: 1,
        explanation: "Rousseau explique : « De plus, l'aliénation se faisant sans réserve, l'union est aussi parfaite qu'elle peut l'être. » Cette troisième raison souligne la radicalité de l'aliénation : en se donnant sans réserve, chacun s'unit totalement à la communauté. Cette union parfaite est la condition de la cohésion sociale : il n'y a pas de reste, pas de partie de soi qui échappe au pacte. Cette conception fonde l'idée d'une communauté politique une et indivisible, où chaque citoyen est totalement engagé. Elle distingue Rousseau des contractualistes qui réservent des droits individuels (Locke) ou qui maintiennent un pouvoir souverain extérieur (Hobbes)."
    },
    { 
        question: "Question n°7 : Que signifie « chacun se donnant à tous ne se donne à personne » ?",
        answers: [
            "que chacun garde sa liberté en se donnant à la communauté", 
            "que chacun perd toute liberté", 
            "que chacun devient esclave"
        ], 
        correct: 1,
        explanation: "Rousseau affirme : « Enfin, chacun se donnant à tous ne se donne à personne. » Cette formule paradoxale est la clé de la liberté dans le contrat social. En se donnant à tous, chacun ne se donne à aucun individu en particulier : il n'obéit donc à personne, mais à la volonté générale, qui est la sienne propre en tant que citoyen. Cette conception de la liberté comme obéissance à la loi qu'on s'est prescrite est au cœur de la pensée de Rousseau. Elle sera reprise par Kant, pour qui la liberté est l'autonomie de la volonté. Elle distingue Rousseau des conceptions de la liberté comme absence de contrainte."
    },
    { 
        question: "Question n°8 : Que gagne-t-on dans le contrat social selon Rousseau ?",
        answers: [
            "l'équivalent de tout ce qu'on perd", 
            "la richesse", 
            "le pouvoir"
        ], 
        correct: 1,
        explanation: "Rousseau affirme : « Ainsi, puisqu'il n'y a pas un associé sur lequel on n'acquière le même droit qu'on lui cède sur soi, on gagne l'équivalent de tout ce qu'on perd. » Cette formule résume l'équilibre du contrat social : en cédant ses droits naturels, on acquiert des droits civils équivalents. Ce qu'on perd, c'est la liberté naturelle (illimitée mais précaire) ; ce qu'on gagne, c'est la liberté civile (limitée mais garantie par la loi) et la propriété de tout ce qu'on possède. Le contrat social est donc un échange équitable : on perd une liberté précaire, on gagne une liberté garantie. Cette conception fonde l'idée que le contrat social est avantageux pour tous, non un sacrifice."
    },
    { 
        question: "Question n°9 : Que produit l'acte d'association selon Rousseau ?",
        answers: [
            "un corps moral et collectif", 
            "une monarchie", 
            "une religion"
        ], 
        correct: 1,
        explanation: "Rousseau conclut : « Par conséquent, cet acte d'association produit un corps moral et collectif, qui est la République ou le corps politique. » Cette conclusion est capitale : le contrat social produit une entité nouvelle, le corps politique, qui a une volonté propre (la volonté générale) et une personnalité morale. Ce corps politique est appelé République, État, souverain ou peuple selon les perspectives. Cette conception de la souveraineté comme corps moral et collectif fonde la démocratie rousseauiste : le peuple est souverain, il ne peut aliéner sa souveraineté. Elle distingue Rousseau des conceptions individualistes du contrat social."
    },
    { 
        question: "Question n°10 : Quelle est la méthode de Rousseau dans ce passage ?",
        answers: [
            "la déduction à partir de principes", 
            "l'analyse historique", 
            "l'observation empirique"
        ], 
        correct: 1,
        explanation: "Dans ce passage, Rousseau utilise une méthode déductive : il part du problème fondamental (trouver une forme d'association qui protège et libère) et en déduit la solution (l'aliénation totale). Cette méthode est caractéristique du contrat social : il s'agit de construire un modèle théorique de légitimité politique, non de décrire une réalité historique. Rousseau ne prétend pas que le contrat social a eu lieu historiquement, mais qu'il est le principe de légitimité de toute société juste. Cette méthode déductive distingue Rousseau des empiristes, qui partent de l'observation des faits. Elle fonde la philosophie politique comme science normative."
    },
    { 
        question: "Question n°11 : Quel est le rapport entre liberté et contrat social chez Rousseau ?",
        answers: [
            "le contrat social supprime la liberté", 
            "le contrat social préserve la liberté", 
            "le contrat social est indifférent à la liberté"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, le contrat social préserve la liberté. C'est même sa finalité : « chacun, s'unissant à tous, n'obéisse pourtant qu'à lui-même et reste aussi libre qu'auparavant. » Le contrat social ne supprime pas la liberté, il la transforme : on passe de la liberté naturelle (illimitée mais précaire) à la liberté civile (limitée mais garantie par la loi). Cette conception de la liberté comme obéissance à la loi qu'on s'est prescrite est au cœur de la pensée de Rousseau. Elle distingue Rousseau de Hobbes, pour qui le contrat social supprime la liberté au profit de la sécurité."
    },
    { 
        question: "Question n°12 : Quelle est la conception de la souveraineté chez Rousseau ?",
        answers: [
            "la souveraineté appartient au roi", 
            "la souveraineté appartient au peuple", 
            "la souveraineté appartient à Dieu"
        ], 
        correct: 2,
        explanation: "Pour Rousseau, la souveraineté appartient au peuple. Cette conception est la conséquence du contrat social : en s'aliénant à la communauté, chaque individu devient membre du souverain, c'est-à-dire du peuple souverain. La souveraineté est donc inaliénable : le peuple ne peut pas la céder à un roi ou à un représentant. Elle est aussi indivisible : elle appartient à tout le peuple, non à une partie. Cette conception de la souveraineté populaire fonde la démocratie rousseauiste et distingue Rousseau des théoriciens de la monarchie absolue (Bossuet) et de la monarchie parlementaire (Montesquieu)."
    },
    { 
        question: "Question n°13 : Quel est le rapport entre l'individu et la communauté chez Rousseau ?",
        answers: [
            "l'individu est indépendant de la communauté", 
            "l'individu s'aliène totalement à la communauté", 
            "la communauté est indépendante de l'individu"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, l'individu s'aliène totalement à la communauté. Cette aliénation totale est la clause unique du contrat social : « l'aliénation totale de chaque associé avec tous ses droits à toute la communauté. » Cette conception radicale signifie que l'individu ne conserve aucun droit en dehors de la communauté. Il devient citoyen, c'est-à-dire membre du souverain. Cette conception fonde l'idée d'une communauté politique une et indivisible, où chaque citoyen est totalement engagé. Elle distingue Rousseau des libéraux, qui réservent des droits individuels inaliénables."
    },
    { 
        question: "Question n°14 : Quelle est la conception de la volonté générale chez Rousseau ?",
        answers: [
            "la volonté générale est la somme des volontés particulières", 
            "la volonté générale est la volonté du corps politique", 
            "la volonté générale est la volonté du roi"
        ], 
        correct: 2,
        explanation: "Pour Rousseau, la volonté générale est la volonté du corps politique, c'est-à-dire du peuple en tant que souverain. Elle n'est pas la somme des volontés particulières (volonté de tous), mais la volonté de tous en tant qu'ils visent le bien commun. La volonté générale est donc toujours droite : elle vise l'intérêt commun, non les intérêts particuliers. Elle est la source de la loi, qui est l'expression de la volonté générale. Cette conception de la volonté générale fonde la démocratie rousseauiste et distingue Rousseau des libéraux, qui fondent la loi sur la somme des intérêts particuliers."
    },
    { 
        question: "Question n°15 : Quel est le rapport entre égalité et contrat social chez Rousseau ?",
        answers: [
            "le contrat social produit l'égalité", 
            "le contrat social produit l'inégalité", 
            "le contrat social est indifférent à l'égalité"
        ], 
        correct: 1,
        explanation: "Chez Rousseau, le contrat social produit l'égalité. En effet, l'aliénation totale a pour première conséquence que « chacun se donnant tout entier, la condition est égale pour tous. » L'égalité est donc la condition de la justice : dans une société juste, tous les citoyens sont égaux devant la loi et dans la participation à la souveraineté. Cette conception fonde l'égalité républicaine, qui est l'égalité des citoyens, non l'égalité des biens. Elle distingue Rousseau des libéraux, qui acceptent les inégalités de fait, et des communistes, qui visent l'égalité des biens."
    },
    { 
        question: "Question n°16 : Quelle est la conception de la loi chez Rousseau ?",
        answers: [
            "la loi est l'expression de la volonté générale", 
            "la loi est l'expression du roi", 
            "la loi est l'expression de Dieu"
        ], 
        correct: 1,
        explanation: "Pour Rousseau, la loi est l'expression de la volonté générale. Cette conception est la conséquence du contrat social : puisque le peuple est souverain, la loi est l'acte par lequel le peuple statue sur lui-même. La loi est donc toujours juste, car elle est l'expression de la volonté générale, qui vise le bien commun. Cette conception de la loi comme expression de la volonté générale fonde la démocratie rousseauiste : le peuple est à la fois sujet et objet de la loi. Elle distingue Rousseau des conceptions de la loi comme commandement du souverain (Hobbes) ou comme expression de la raison divine (Saint Thomas)."
    },
    { 
        question: "Question n°17 : Quel est le rapport entre la liberté et la loi chez Rousseau ?",
        answers: [
            "la loi supprime la liberté", 
            "la loi est la condition de la liberté", 
            "la loi est indifférente à la liberté"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, la loi est la condition de la liberté. En effet, la liberté civile consiste à obéir à la loi qu'on s'est prescrite : « chacun, s'unissant à tous, n'obéisse pourtant qu'à lui-même. » La loi n'est donc pas une contrainte extérieure, mais l'expression de la volonté générale, à laquelle chacun participe en tant que citoyen. Cette conception de la liberté comme obéissance à la loi qu'on s'est prescrite est au cœur de la pensée de Rousseau. Elle sera reprise par Kant, pour qui la liberté est l'autonomie de la volonté. Elle distingue Rousseau des conceptions de la liberté comme absence de contrainte."
    },
    { 
        question: "Question n°18 : Quelle est la conception de la citoyenneté chez Rousseau ?",
        answers: [
            "le citoyen est un sujet passif", 
            "le citoyen est membre du souverain", 
            "le citoyen est un esclave"
        ], 
        correct: 2,
        explanation: "Pour Rousseau, le citoyen est membre du souverain. En s'aliénant à la communauté, chaque individu devient citoyen, c'est-à-dire partie du peuple souverain. Le citoyen n'est donc pas un sujet passif qui obéit à un pouvoir extérieur, mais un membre actif du souverain qui fait la loi. Cette conception de la citoyenneté comme participation à la souveraineté fonde la démocratie rousseauiste : le citoyen est à la fois auteur et sujet de la loi. Elle distingue Rousseau des conceptions de la citoyenneté comme simple obéissance (Hobbes) ou comme participation à la vie de la cité (Aristote)."
    },
    { 
        question: "Question n°19 : Quel est le rapport entre la propriété et le contrat social chez Rousseau ?",
        answers: [
            "le contrat social supprime la propriété", 
            "le contrat social transforme la propriété en propriété légitime", 
            "le contrat social est indifférent à la propriété"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, le contrat social transforme la propriété en propriété légitime. En effet, le contrat social ne supprime pas la propriété, mais il la fonde sur un titre légitime : la possession devient propriété par la loi. Rousseau affirme : « on gagne l'équivalent de tout ce qu'on perd », c'est-à-dire qu'on acquiert la propriété légitime de tout ce qu'on possède. Cette conception de la propriété comme droit civil, fondé sur la loi, distingue Rousseau de Locke, pour qui la propriété est un droit naturel antérieur à la société. Pour Rousseau, la propriété est une création de la société, non un droit naturel."
    },
    { 
        question: "Question n°20 : Quelle est la conception de la justice chez Rousseau ?",
        answers: [
            "la justice est l'intérêt du plus fort", 
            "la justice est l'égalité et la réciprocité", 
            "la justice est la loi du talion"
        ], 
        correct: 2,
        explanation: "Pour Rousseau, la justice est l'égalité et la réciprocité. En effet, l'aliénation totale garantit l'égalité : « chacun se donnant tout entier, la condition est égale pour tous. » Et cette égalité garantit la réciprocité : « nul n'a intérêt à la rendre onéreuse aux autres. » La justice consiste donc dans l'égalité des conditions et la réciprocité des droits et des devoirs. Cette conception fonde la justice républicaine, qui est l'égalité des citoyens devant la loi et dans la participation à la souveraineté. Elle distingue Rousseau des conceptions de la justice comme intérêt du plus fort (Calliclès) ou comme loi du talion (Antigone)."
    },
    { 
        question: "Question n°21 : Quel est le rapport entre la liberté naturelle et la liberté civile chez Rousseau ?",
        answers: [
            "la liberté naturelle et la liberté civile sont identiques", 
            "la liberté civile est supérieure à la liberté naturelle", 
            "la liberté civile est inférieure à la liberté naturelle"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, la liberté civile est supérieure à la liberté naturelle. La liberté naturelle est illimitée mais précaire : elle consiste à faire tout ce qu'on veut, mais elle est sans cesse menacée par la force des autres. La liberté civile est limitée mais garantie : elle consiste à obéir à la loi qu'on s'est prescrite, et elle est garantie par la force commune. En échangeant la liberté naturelle contre la liberté civile, on gagne donc une liberté plus solide et plus durable. Cette conception de la liberté civile comme supérieure à la liberté naturelle distingue Rousseau des libéraux, qui voient dans la société une limitation de la liberté."
    },
    { 
        question: "Question n°22 : Quelle est la conception de l'égalité chez Rousseau ?",
        answers: [
            "l'égalité est l'égalité des biens", 
            "l'égalité est l'égalité des conditions", 
            "l'égalité est impossible"
        ], 
        correct: 2,
        explanation: "Pour Rousseau, l'égalité est l'égalité des conditions. En effet, l'aliénation totale a pour conséquence que « la condition est égale pour tous ». Cette égalité n'est pas l'égalité des biens (communisme), ni l'égalité des talents (impossible), mais l'égalité des citoyens devant la loi et dans la participation à la souveraineté. Cette conception fonde l'égalité républicaine, qui est l'égalité des droits et des devoirs. Elle distingue Rousseau des libéraux, qui acceptent les inégalités de fait, et des communistes, qui visent l'égalité des biens. Pour Rousseau, l'égalité des conditions est la condition de la justice."
    },
    { 
        question: "Question n°23 : Quel est le rapport entre la volonté générale et la volonté particulière chez Rousseau ?",
        answers: [
            "la volonté générale est la somme des volontés particulières", 
            "la volonté générale s'oppose aux volontés particulières", 
            "la volonté générale est la volonté de tous"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, la volonté générale s'oppose aux volontés particulières. La volonté particulière vise l'intérêt particulier de chaque individu ; la volonté générale vise l'intérêt commun. Ces deux volontés peuvent entrer en conflit : l'individu, en tant qu'homme, peut avoir une volonté particulière contraire à la volonté générale qu'il a en tant que citoyen. C'est pourquoi Rousseau distingue la volonté générale (qui vise le bien commun) de la volonté de tous (qui est la somme des volontés particulières). Cette distinction est fondamentale : la volonté générale n'est pas la somme des intérêts particuliers, mais la volonté du corps politique en tant que tel."
    },
    { 
        question: "Question n°24 : Quelle est la conception de la démocratie chez Rousseau ?",
        answers: [
            "la démocratie est représentative", 
            "la démocratie est directe", 
            "la démocratie est impossible"
        ], 
        correct: 2,
        explanation: "Pour Rousseau, la démocratie est directe. En effet, la souveraineté appartient au peuple, qui ne peut l'aliéner ni la déléguer. Le peuple doit donc exercer lui-même sa souveraineté, en faisant la loi directement, sans représentants. Cette conception de la démocratie directe est la conséquence de la souveraineté populaire : la volonté générale ne peut être représentée, car elle est la volonté du peuple lui-même. Rousseau critique donc la démocratie représentative anglaise, où le peuple n'est libre que le jour des élections. Cette conception de la démocratie directe distingue Rousseau des libéraux, qui défendent la démocratie représentative."
    },
    { 
        question: "Question n°25 : Quel est le rapport entre la religion et le contrat social chez Rousseau ?",
        answers: [
            "la religion est indépendante du contrat social", 
            "la religion civile est nécessaire au contrat social", 
            "la religion s'oppose au contrat social"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, la religion civile est nécessaire au contrat social. Cette thèse, développée à la fin du Contrat social, fait de la religion civile une profession de foi minimale, qui doit être partagée par tous les citoyens. Cette religion civile n'est pas une religion révélée, mais une religion naturelle, qui se réduit à quelques dogmes simples : l'existence de Dieu, la vie future, la sainteté du contrat social et des lois. Elle vise à renforcer le lien social en donnant aux citoyens une morale commune. Cette conception de la religion civile distingue Rousseau des libéraux, qui séparent l'Église et l'État, et des théocrates, qui soumettent l'État à l'Église."
    },
    { 
        question: "Question n°26 : Quelle est la conception de la société chez Rousseau ?",
        answers: [
            "la société est artificielle", 
            "la société est naturelle", 
            "la société est une illusion"
        ], 
        correct: 1,
        explanation: "Pour Rousseau, la société est artificielle : elle est le produit du contrat social, non de la nature. Cette conception distingue Rousseau d'Aristote, pour qui l'homme est un animal politique naturellement social. Pour Rousseau, l'homme est naturellement solitaire et indépendant ; la société est une convention, un artefact humain. Cette conception fonde la théorie du contrat social : la société n'est pas naturelle, elle est le produit d'un pacte entre les individus. Elle distingue Rousseau des théoriciens du droit naturel, qui fondent la société sur la nature humaine. Pour Rousseau, la société est une construction humaine, qui doit être justifiée par le contrat social."
    },
    { 
        question: "Question n°27 : Quel est le rapport entre la nature et la société chez Rousseau ?",
        answers: [
            "la société est conforme à la nature", 
            "la société transforme la nature humaine", 
            "la société est indifférente à la nature"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, la société transforme la nature humaine. En effet, le passage de l'état de nature à l'état civil transforme l'homme : il passe de l'instinct à la justice, de l'appétit à la raison, de la liberté naturelle à la liberté civile. Cette transformation est ambivalente : elle peut être une perfection (l'homme devient un être moral et rationnel) ou une corruption (l'homme devient dépendant et vaniteux). Cette conception dialectique de la société distingue Rousseau des optimistes (pour qui la société est un progrès) et des pessimistes (pour qui la société est une corruption). Pour Rousseau, la société est à la fois la source de tous les maux et la condition de toutes les vertus."
    },
    { 
        question: "Question n°28 : Quelle est la conception de la loi chez Rousseau par rapport à la liberté ?",
        answers: [
            "la loi s'oppose à la liberté", 
            "la loi est la condition de la liberté", 
            "la loi est indifférente à la liberté"
        ], 
        correct: 2,
        explanation: "Pour Rousseau, la loi est la condition de la liberté. En effet, la liberté civile consiste à obéir à la loi qu'on s'est prescrite : « chacun, s'unissant à tous, n'obéisse pourtant qu'à lui-même. » La loi n'est donc pas une contrainte extérieure, mais l'expression de la volonté générale, à laquelle chacun participe en tant que citoyen. Cette conception de la liberté comme obéissance à la loi qu'on s'est prescrite est au cœur de la pensée de Rousseau. Elle sera reprise par Kant, pour qui la liberté est l'autonomie de la volonté. Elle distingue Rousseau des conceptions de la liberté comme absence de contrainte."
    },
    { 
        question: "Question n°29 : Quel est le rapport entre l'état de nature et l'état civil chez Rousseau ?",
        answers: [
            "l'état civil est une dégradation de l'état de nature", 
            "l'état civil est un progrès par rapport à l'état de nature", 
            "l'état civil est identique à l'état de nature"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, l'état civil est un progrès par rapport à l'état de nature. En effet, l'état civil transforme l'homme : il le fait passer de l'instinct à la justice, de l'appétit à la raison, de la liberté naturelle à la liberté civile. L'homme civilisé est supérieur à l'homme sauvage en tant qu'être moral et rationnel. Cette conception optimiste de l'état civil distingue Rousseau des critiques de la civilisation, qui voient dans la société une corruption de la nature. Pour Rousseau, l'état civil est un progrès, à condition qu'il soit fondé sur le contrat social, qui garantit l'égalité et la liberté."
    },
    { 
        question: "Question n°30 : Quelle est la conception de la morale chez Rousseau ?",
        answers: [
            "la morale est naturelle", 
            "la morale est sociale", 
            "la morale est individuelle"
        ], 
        correct: 2,
        explanation: "Pour Rousseau, la morale est sociale. En effet, l'homme devient un être moral par son passage à l'état civil : c'est la société qui développe en lui la raison et la conscience morale. Dans l'état de nature, l'homme n'a pas de morale proprement dite : il a seulement une pitié naturelle, qui le pousse à compatir aux souffrances de ses semblables. C'est la société qui transforme cette pitié en vertu morale, en développant la raison et la conscience. Cette conception sociale de la morale distingue Rousseau des moralistes qui fondent la morale sur la nature (stoïciens) ou sur la raison individuelle (Kant). Pour Rousseau, la morale est un produit de la société."
    },
    { 
        question: "Question n°31 : Quel est le rapport entre le souverain et le gouvernement chez Rousseau ?",
        answers: [
            "le souverain et le gouvernement sont identiques", 
            "le souverain est le peuple, le gouvernement est l'organe d'exécution", 
            "le gouvernement est souverain"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, le souverain est le peuple, et le gouvernement est l'organe d'exécution. Le souverain (le peuple) fait la loi, qui est l'expression de la volonté générale ; le gouvernement exécute la loi, en tant qu'organe subordonné au souverain. Cette distinction entre le souverain (législateur) et le gouvernement (exécutif) est fondamentale dans la pensée politique de Rousseau. Elle fonde la primauté du législatif sur l'exécutif : le gouvernement n'est qu'un instrument au service du souverain. Cette conception distingue Rousseau de Montesquieu, qui sépare les pouvoirs, et de Hobbes, qui les réunit dans le souverain."
    },
    { 
        question: "Question n°32 : Quelle est la conception de la souveraineté chez Rousseau par rapport à la liberté ?",
        answers: [
            "la souveraineté supprime la liberté", 
            "la souveraineté est la condition de la liberté", 
            "la souveraineté est indifférente à la liberté"
        ], 
        correct: 2,
        explanation: "Pour Rousseau, la souveraineté est la condition de la liberté. En effet, la liberté civile consiste à obéir à la loi qu'on s'est prescrite, c'est-à-dire à la volonté générale, qui est la volonté du souverain (le peuple). La souveraineté n'est donc pas une contrainte extérieure, mais l'expression de la liberté des citoyens. Cette conception de la souveraineté comme condition de la liberté est au cœur de la pensée de Rousseau : le peuple est libre parce qu'il est souverain, c'est-à-dire parce qu'il fait lui-même la loi à laquelle il obéit. Elle distingue Rousseau des conceptions de la souveraineté comme pouvoir de contrainte (Hobbes) ou comme puissance divine (Bossuet)."
    },
    { 
        question: "Question n°33 : Quel est le rapport entre l'intérêt particulier et l'intérêt général chez Rousseau ?",
        answers: [
            "l'intérêt particulier est identique à l'intérêt général", 
            "l'intérêt particulier s'oppose à l'intérêt général", 
            "l'intérêt particulier est indifférent à l'intérêt général"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, l'intérêt particulier s'oppose à l'intérêt général. La volonté particulière vise l'intérêt de l'individu ; la volonté générale vise l'intérêt commun. Ces deux volontés peuvent entrer en conflit : l'individu, en tant qu'homme, peut avoir une volonté particulière contraire à la volonté générale qu'il a en tant que citoyen. C'est pourquoi Rousseau insiste sur la nécessité de subordonner l'intérêt particulier à l'intérêt général. Cette conception de l'opposition entre intérêt particulier et intérêt général distingue Rousseau des libéraux, pour qui l'intérêt général est la somme des intérêts particuliers. Pour Rousseau, l'intérêt général est qualitativement différent de la somme des intérêts particuliers."
    },
    { 
        question: "Question n°34 : Quelle est la conception du peuple chez Rousseau ?",
        answers: [
            "le peuple est un ensemble d'individus", 
            "le peuple est un corps moral et collectif", 
            "le peuple est une multitude"
        ], 
        correct: 2,
        explanation: "Pour Rousseau, le peuple est un corps moral et collectif. Cette conception est la conséquence du contrat social : en s'associant, les individus forment un corps politique qui a une volonté propre (la volonté générale) et une personnalité morale. Le peuple n'est donc pas une simple somme d'individus (multitude), mais une personne morale, un être collectif. Cette conception du peuple comme corps moral et collectif fonde la souveraineté populaire : le peuple est souverain en tant que personne morale, non en tant que somme d'individus. Elle distingue Rousseau des conceptions individualistes du peuple, qui le réduisent à une somme d'intérêts particuliers."
    },
    { 
        question: "Question n°35 : Quel est le rapport entre la loi et la justice chez Rousseau ?",
        answers: [
            "la loi est toujours juste", 
            "la loi peut être injuste", 
            "la loi est indifférente à la justice"
        ], 
        correct: 1,
        explanation: "Chez Rousseau, la loi est toujours juste, car elle est l'expression de la volonté générale, qui vise toujours le bien commun. Cette conception de la loi comme toujours juste est la conséquence de la souveraineté populaire : puisque le peuple est souverain, et puisque la volonté générale vise toujours l'intérêt commun, la loi ne peut être injuste. Cette conception optimiste de la loi distingue Rousseau des libéraux, qui admettent que la loi peut être injuste et qui prévoient des contre-pouvoirs pour la limiter. Pour Rousseau, la loi est toujours juste, mais elle peut être mal appliquée ou mal comprise. C'est pourquoi il insiste sur l'éducation du citoyen et sur le rôle du législateur."
    },
    { 
        question: "Question n°36 : Quelle est la conception de l'homme chez Rousseau ?",
        answers: [
            "l'homme est naturellement bon", 
            "l'homme est naturellement méchant", 
            "l'homme est naturellement neutre"
        ], 
        correct: 1,
        explanation: "Pour Rousseau, l'homme est naturellement bon. Cette thèse, développée dans le Discours sur l'origine de l'inégalité et dans l'Émile, est fondamentale dans la pensée de Rousseau. L'homme à l'état de nature est bon : il est guidé par l'amour de soi (instinct de conservation) et la pitié (répugnance à voir souffrir ses semblables). C'est la société qui corrompt l'homme, en développant l'amour-propre (vanité, désir de paraître) et l'inégalité. Cette conception de la bonté naturelle de l'homme distingue Rousseau de Hobbes, pour qui l'homme est naturellement méchant (homo homini lupus), et des théologiens, pour qui l'homme est marqué par le péché originel."
    },
    { 
        question: "Question n°37 : Quel est le rapport entre la société et la corruption chez Rousseau ?",
        answers: [
            "la société est la source de la corruption", 
            "la société est le remède à la corruption", 
            "la société est indifférente à la corruption"
        ], 
        correct: 1,
        explanation: "Chez Rousseau, la société est la source de la corruption. C'est la société qui corrompt l'homme naturellement bon, en développant l'amour-propre, la vanité, l'inégalité et la domination. Cette thèse, développée dans le Discours sur l'origine de l'inégalité, est fondamentale dans la pensée de Rousseau : le mal n'est pas dans la nature humaine, mais dans la société. Cependant, Rousseau ne propose pas un retour à l'état de nature (impossible) : il propose de fonder une société juste sur le contrat social, qui garantit l'égalité et la liberté. Cette conception dialectique de la société distingue Rousseau des optimistes (pour qui la société est un progrès) et des pessimistes (pour qui la société est irrémédiablement corrompue)."
    },
    { 
        question: "Question n°38 : Quelle est la conception de la liberté chez Rousseau ?",
        answers: [
            "la liberté est l'absence de contrainte", 
            "la liberté est l'obéissance à la loi qu'on s'est prescrite", 
            "la liberté est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Rousseau, la liberté est l'obéissance à la loi qu'on s'est prescrite. Cette conception, qui sera reprise par Kant sous le nom d'autonomie, est au cœur de la pensée politique de Rousseau. La liberté n'est pas l'absence de contrainte (liberté naturelle), mais l'obéissance à la loi qu'on s'est prescrite en tant que citoyen (liberté civile). Cette conception de la liberté comme autonomie distingue Rousseau des libéraux, pour qui la liberté est l'absence de contrainte. Pour Rousseau, la vraie liberté est dans l'obéissance à la loi, non dans l'absence de loi."
    },
    { 
        question: "Question n°39 : Quel est le rapport entre la volonté générale et la loi chez Rousseau ?",
        answers: [
            "la loi est l'expression de la volonté générale", 
            "la loi est indépendante de la volonté générale", 
            "la loi s'oppose à la volonté générale"
        ], 
        correct: 1,
        explanation: "Chez Rousseau, la loi est l'expression de la volonté générale. Cette conception est la conséquence du contrat social : puisque le peuple est souverain, la loi est l'acte par lequel le peuple statue sur lui-même. La loi est donc toujours juste, car elle est l'expression de la volonté générale, qui vise le bien commun. Cette conception de la loi comme expression de la volonté générale fonde la démocratie rousseauiste : le peuple est à la fois sujet et objet de la loi. Elle distingue Rousseau des conceptions de la loi comme commandement du souverain (Hobbes) ou comme expression de la raison divine (Saint Thomas)."
    },
    { 
        question: "Question n°40 : Quelle est la conception de la société civile chez Rousseau ?",
        answers: [
            "la société civile est naturelle", 
            "la société civile est conventionnelle", 
            "la société civile est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Rousseau, la société civile est conventionnelle : elle est le produit du contrat social, non de la nature. Cette conception distingue Rousseau d'Aristote, pour qui l'homme est un animal politique naturellement social. Pour Rousseau, l'homme est naturellement solitaire et indépendant ; la société est une convention, un artefact humain. Cette conception fonde la théorie du contrat social : la société n'est pas naturelle, elle est le produit d'un pacte entre les individus. Elle distingue Rousseau des théoriciens du droit naturel, qui fondent la société sur la nature humaine. Pour Rousseau, la société est une construction humaine, qui doit être justifiée par le contrat social."
    },
    { 
        question: "Question n°41 : Quel est le rapport entre l'égalité et la liberté chez Rousseau ?",
        answers: [
            "l'égalité et la liberté sont identiques", 
            "l'égalité et la liberté sont inséparables", 
            "l'égalité s'oppose à la liberté"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, l'égalité et la liberté sont inséparables. En effet, l'aliénation totale garantit à la fois l'égalité (chacun se donnant tout entier, la condition est égale pour tous) et la liberté (chacun se donnant à tous ne se donne à personne). L'égalité est donc la condition de la liberté : sans égalité, il n'y a pas de liberté, car les plus forts dominent les plus faibles. Cette conception de l'inséparabilité de l'égalité et de la liberté distingue Rousseau des libéraux, qui privilégient la liberté, et des communistes, qui privilégient l'égalité. Pour Rousseau, les deux sont inséparables : pas de liberté sans égalité, pas d'égalité sans liberté."
    },
    { 
        question: "Question n°42 : Quelle est la conception de la démocratie chez Rousseau ?",
        answers: [
            "la démocratie est le gouvernement du peuple par le peuple", 
            "la démocratie est le gouvernement des représentants", 
            "la démocratie est impossible"
        ], 
        correct: 1,
        explanation: "Pour Rousseau, la démocratie est le gouvernement du peuple par le peuple. Cette conception, qui distingue Rousseau de Montesquieu (pour qui la démocratie est le gouvernement où le peuple est souverain mais où il gouverne par ses représentants), fait de la démocratie un régime où le peuple est à la fois souverain et gouvernement. Rousseau reconnaît que cette démocratie directe est difficile à réaliser (elle exige un peuple de dieux), mais elle est le modèle de tout gouvernement légitime. Cette conception de la démocratie directe distingue Rousseau des libéraux, qui défendent la démocratie représentative."
    },
    { 
        question: "Question n°43 : Quel est le rapport entre la souveraineté et la liberté chez Rousseau ?",
        answers: [
            "la souveraineté supprime la liberté", 
            "la souveraineté est la condition de la liberté", 
            "la souveraineté est indifférente à la liberté"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, la souveraineté est la condition de la liberté. En effet, la liberté civile consiste à obéir à la loi qu'on s'est prescrite, c'est-à-dire à la volonté générale, qui est la volonté du souverain (le peuple). La souveraineté n'est donc pas une contrainte extérieure, mais l'expression de la liberté des citoyens. Cette conception de la souveraineté comme condition de la liberté est au cœur de la pensée de Rousseau : le peuple est libre parce qu'il est souverain, c'est-à-dire parce qu'il fait lui-même la loi à laquelle il obéit. Elle distingue Rousseau des conceptions de la souveraineté comme pouvoir de contrainte (Hobbes)."
    },
    { 
        question: "Question n°44 : Quelle est la conception de la loi chez Rousseau par rapport à la volonté générale ?",
        answers: [
            "la loi est l'expression de la volonté générale", 
            "la loi est l'expression de la volonté particulière", 
            "la loi est l'expression de la volonté divine"
        ], 
        correct: 1,
        explanation: "Pour Rousseau, la loi est l'expression de la volonté générale. Cette conception est la conséquence du contrat social : puisque le peuple est souverain, la loi est l'acte par lequel le peuple statue sur lui-même. La loi est donc toujours juste, car elle est l'expression de la volonté générale, qui vise le bien commun. Cette conception de la loi comme expression de la volonté générale fonde la démocratie rousseauiste : le peuple est à la fois sujet et objet de la loi. Elle distingue Rousseau des conceptions de la loi comme commandement du souverain (Hobbes) ou comme expression de la raison divine (Saint Thomas)."
    },
    { 
        question: "Question n°45 : Quel est le rapport entre la liberté et la loi chez Rousseau ?",
        answers: [
            "la loi supprime la liberté", 
            "la loi est la condition de la liberté", 
            "la loi est indifférente à la liberté"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, la loi est la condition de la liberté. En effet, la liberté civile consiste à obéir à la loi qu'on s'est prescrite : « chacun, s'unissant à tous, n'obéisse pourtant qu'à lui-même. » La loi n'est donc pas une contrainte extérieure, mais l'expression de la volonté générale, à laquelle chacun participe en tant que citoyen. Cette conception de la liberté comme obéissance à la loi qu'on s'est prescrite est au cœur de la pensée de Rousseau. Elle sera reprise par Kant, pour qui la liberté est l'autonomie de la volonté. Elle distingue Rousseau des conceptions de la liberté comme absence de contrainte."
    },
    { 
        question: "Question n°46 : Quelle est la conception de la société chez Rousseau par rapport à la nature ?",
        answers: [
            "la société est conforme à la nature", 
            "la société est une seconde nature", 
            "la société s'oppose à la nature"
        ], 
        correct: 2,
        explanation: "Pour Rousseau, la société est une seconde nature. Elle n'est pas conforme à la nature (comme le pensent Aristote et les stoïciens), ni opposée à la nature (comme le pensent certains critiques de la civilisation), mais elle est une seconde nature, c'est-à-dire une transformation de la nature humaine. La société transforme l'homme : elle développe en lui la raison, la morale, la liberté civile. Cette conception dialectique de la société distingue Rousseau des optimistes (pour qui la société est un progrès) et des pessimistes (pour qui la société est une corruption). Pour Rousseau, la société est une seconde nature, qui peut être bonne ou mauvaise selon qu'elle est fondée sur le contrat social ou sur la force."
    },
    { 
        question: "Question n°47 : Quel est le rapport entre le peuple et la souveraineté chez Rousseau ?",
        answers: [
            "le peuple est souverain", 
            "le peuple est sujet", 
            "le peuple est esclave"
        ], 
        correct: 1,
        explanation: "Chez Rousseau, le peuple est souverain. Cette conception est la conséquence du contrat social : en s'aliénant à la communauté, chaque individu devient membre du souverain, c'est-à-dire du peuple souverain. Le peuple est donc souverain : il fait la loi, il ne la reçoit pas d'un pouvoir extérieur. Cette conception de la souveraineté populaire fonde la démocratie rousseauiste : le peuple est à la fois auteur et sujet de la loi. Elle distingue Rousseau des théoriciens de la monarchie absolue (Bossuet) et de la monarchie parlementaire (Montesquieu). Pour Rousseau, la souveraineté appartient au peuple, qui ne peut ni l'aliéner ni la déléguer."
    },
    { 
        question: "Question n°48 : Quelle est la conception de la liberté chez Rousseau par rapport à la société ?",
        answers: [
            "la liberté est naturelle", 
            "la liberté est civile", 
            "la liberté est une illusion"
        ], 
        correct: 2,
        explanation: "Pour Rousseau, la liberté est civile. En effet, la liberté naturelle (illimitée mais précaire) est transformée par le contrat social en liberté civile (limitée mais garantie par la loi). La liberté civile consiste à obéir à la loi qu'on s'est prescrite, c'est-à-dire à la volonté générale. Cette conception de la liberté comme liberté civile distingue Rousseau des libéraux, pour qui la liberté est naturelle (absence de contrainte). Pour Rousseau, la vraie liberté est dans l'obéissance à la loi, non dans l'absence de loi. Cette conception de la liberté comme autonomie sera reprise par Kant."
    },
    { 
        question: "Question n°49 : Quel est le rapport entre le contrat social et la liberté chez Rousseau ?",
        answers: [
            "le contrat social supprime la liberté", 
            "le contrat social préserve la liberté", 
            "le contrat social est indifférent à la liberté"
        ], 
        correct: 2,
        explanation: "Chez Rousseau, le contrat social préserve la liberté. C'est même sa finalité : « chacun, s'unissant à tous, n'obéisse pourtant qu'à lui-même et reste aussi libre qu'auparavant. » Le contrat social ne supprime pas la liberté, il la transforme : on passe de la liberté naturelle (illimitée mais précaire) à la liberté civile (limitée mais garantie par la loi). Cette conception de la liberté comme obéissance à la loi qu'on s'est prescrite est au cœur de la pensée de Rousseau. Elle distingue Rousseau de Hobbes, pour qui le contrat social supprime la liberté au profit de la sécurité."
    },
    { 
        question: "Question n°50 : En quoi ce texte de Rousseau est-il représentatif de sa philosophie ?",
        answers: [
            "il montre la théorie du contrat social et de la souveraineté populaire", 
            "il montre la conception de la liberté comme obéissance à la loi", 
            "les deux réponses sont correctes"
        ], 
        correct: 3,
        explanation: "Ce texte du Contrat social est représentatif de la philosophie de Rousseau à plusieurs égards. D'abord, il montre la théorie du contrat social, qui fonde la société sur un pacte entre les individus. Ensuite, il montre la conception de la souveraineté populaire, qui fait du peuple le souverain inaliénable. Enfin, il montre la conception de la liberté comme obéissance à la loi qu'on s'est prescrite, qui sera reprise par Kant sous le nom d'autonomie. Ce texte condense ainsi les thèmes majeurs de la philosophie politique de Rousseau : contrat social, aliénation totale, volonté générale, souveraineté populaire, liberté civile, égalité des conditions."
    }
];