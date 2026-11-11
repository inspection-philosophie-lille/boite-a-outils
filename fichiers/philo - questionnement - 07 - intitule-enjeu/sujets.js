/* ============================================================
   sujets.js — « de l'intitulé à l'enjeu »
   100 sujets par notion
   ============================================================ */

const questions = [
{
id: 1,
notion: 'art',
intitule: "L'art a-t-il besoin d'être beau ?",
piste1: "La beauté est-elle une condition nécessaire à la création artistique ?",
piste2: "ou l'art peut-il exister indépendamment des critères esthétiques traditionnels ?",
racine1: "La fonction de l'art est-elle principalement de plaire aux sens ?",
racine2: "ou peut-elle inclure d'autres dimensions comme la provocation ou la réflexion critique ?",
enjeu: "Examiner la relation entre l'art, la beauté et les autres finalités possibles de la création artistique."
},
{
id: 2,
notion: 'art',
intitule: "L'art imite-t-il la nature ?",
piste1: "L'œuvre d'art tire-t-elle sa valeur de la fidélité avec laquelle elle reproduit le réel ?",
piste2: "ou l'artiste crée-t-il des formes que la nature ne contient pas ?",
racine1: "L'image vaut-elle par sa ressemblance avec son modèle ?",
racine2: "ou l'imitation est-elle déjà une sélection, donc une interprétation du réel ?",
enjeu: "Déterminer si l'art est reproduction du donné ou production d'une réalité nouvelle."
},
{
id: 3,
notion: 'art',
intitule: "L'art nous éloigne-t-il de la réalité ?",
piste1: "La fiction nous détourne-t-elle du monde tel qu'il est ?",
piste2: "ou nous donne-t-elle un accès que la perception ordinaire nous refuse ?",
racine1: "L'illusion artistique est-elle un voile posé sur les choses ?",
racine2: "ou la mise à distance permet-elle de voir ce que l'habitude nous cache ?",
enjeu: "Évaluer si l'expérience artistique est évasion ou dévoilement du réel."
},
{
id: 4,
notion: 'art',
intitule: "Peut-on apprendre à faire de l'art ?",
piste1: "La pratique artistique repose-t-elle sur des techniques transmissibles ?",
piste2: "ou exige-t-elle un don que l'enseignement ne peut pas donner ?",
racine1: "Le talent se réduit-il à un savoir-faire acquis par l'exercice ?",
racine2: "ou la règle apprise doit-elle être dépassée pour que l'œuvre existe ?",
enjeu: "Interroger la part de la règle et celle de l'invention dans la création artistique."
},
{
id: 5,
notion: 'art',
intitule: "L'artiste est-il maître de son œuvre ?",
piste1: "L'œuvre réalise-t-elle fidèlement l'intention de son auteur ?",
piste2: "ou lui échappe-t-elle dès qu'elle prend forme ?",
racine1: "Créer, est-ce exécuter un projet entièrement conçu à l'avance ?",
racine2: "ou la matière et le hasard imposent-ils des décisions non voulues ?",
enjeu: "Examiner le rôle de la maîtrise et celui de l'involontaire dans la production de l'œuvre."
},
{
id: 6,
notion: 'art',
intitule: "L'art doit-il plaire ?",
piste1: "Le plaisir du spectateur est-il la finalité de l'œuvre ?",
piste2: "ou l'art peut-il déplaire et rester de l'art ?",
racine1: "Le jugement esthétique se confond-il avec l'agrément immédiat ?",
racine2: "ou la déplaisance peut-elle être le moyen d'un effet plus profond ?",
enjeu: "Distinguer le plaisir esthétique de la simple satisfaction des goûts."
},
{
id: 7,
notion: 'art',
intitule: "Une œuvre d'art a-t-elle un sens ?",
piste1: "L'œuvre délivre-t-elle un message que l'on peut formuler ?",
piste2: "ou sa signification est-elle inséparable de sa forme sensible ?",
racine1: "Comprendre une œuvre, est-ce traduire ce qu'elle veut dire ?",
racine2: "ou ce qu'elle donne à sentir se perd-il dès qu'on le reformule ?",
enjeu: "Déterminer si le sens de l'art est discursif ou irréductiblement sensible."
},
{
id: 8,
notion: 'art',
intitule: "L'art est-il inutile ?",
piste1: "L'œuvre échappe-t-elle à toute fonction utilitaire ?",
piste2: "ou répond-elle à des besoins que nous ne savons pas nommer ?",
racine1: "La valeur d'une chose se mesure-t-elle à son utilité ?",
racine2: "ou l'inutilité apparente cache-t-elle une finalité sans fin ?",
enjeu: "Interroger le rapport de l'art à l'utilité et à la valeur."
},
{
id: 9,
notion: 'art',
intitule: "L'artiste sait-il ce qu'il fait ?",
piste1: "La création est-elle une activité consciente et réfléchie ?",
piste2: "ou l'artiste est-il guidé par des forces qu'il ignore ?",
racine1: "L'intention suffit-elle à rendre compte de l'œuvre produite ?",
racine2: "ou l'inconscient et l'époque travaillent-ils à travers l'artiste ?",
enjeu: "Examiner la lucidité de l'artiste sur sa propre création."
},
{
id: 10,
notion: 'art',
intitule: "L'art nous rend-il plus lucides ?",
piste1: "Les œuvres nous font-elles voir le monde autrement ?",
piste2: "ou nous enferment-elles dans des représentations trompeuses ?",
racine1: "La perception esthétique élargit-elle notre expérience ?",
racine2: "ou les images substituent-elles leurs clichés aux choses mêmes ?",
enjeu: "Évaluer la portée cognitive de l'expérience artistique."
},
{
id: 11,
notion: 'art',
intitule: "Peut-on se passer d'art ?",
piste1: "L'art est-il un ornement dont une société pourrait faire l'économie ?",
piste2: "ou répond-il à une exigence constitutive de l'existence humaine ?",
racine1: "Les besoins culturels sont-ils secondaires face aux besoins vitaux ?",
racine2: "ou l'homme se définit-il par la production de formes symboliques ?",
enjeu: "Déterminer si l'art est un supplément ou une nécessité anthropologique."
},
{
id: 12,
notion: 'art',
intitule: "L'art est-il un luxe ?",
piste1: "La création artistique suppose-t-elle l'oisiveté et l'abondance ?",
piste2: "ou accompagne-t-elle l'humanité jusque dans le dénuement ?",
racine1: "L'art naît-il de la satisfaction préalable des besoins matériels ?",
racine2: "ou l'ornement et le rite précèdent-ils toute accumulation de richesses ?",
enjeu: "Interroger les conditions matérielles et la destination sociale de l'art."
},
{
id: 13,
notion: 'art',
intitule: "L'art peut-il être vrai ?",
piste1: "Une œuvre peut-elle nous apprendre quelque chose sur le monde ?",
piste2: "ou la vérité n'a-t-elle pas de sens hors de la connaissance ?",
racine1: "La vérité se définit-elle par l'adéquation au réel vérifiable ?",
racine2: "ou l'art dévoile-t-il une vérité qui n'est pas de l'ordre de l'exactitude ?",
enjeu: "Examiner si l'art peut prétendre à une forme propre de vérité."
},
{
id: 14,
notion: 'art',
intitule: "L'art est-il un mensonge ?",
piste1: "La fiction nous fait-elle croire à ce qui n'existe pas ?",
piste2: "ou l'illusion assumée nous instruit-elle par détour ?",
racine1: "Tromper, est-ce nécessairement faire croire au faux ?",
racine2: "ou le pacte de fiction suspend-il la prétention à la vérité factuelle ?",
enjeu: "Distinguer l'illusion artistique de la tromperie."
},
{
id: 15,
notion: 'art',
intitule: "L'art peut-il se passer de public ?",
piste1: "L'œuvre existe-t-elle dès qu'elle est produite ?",
piste2: "ou n'existe-t-elle pleinement que dans la rencontre avec un spectateur ?",
racine1: "L'être de l'œuvre se confond-il avec sa fabrication ?",
racine2: "ou sa destination est-elle inscrite dans sa structure même ?",
enjeu: "Déterminer si la réception fait partie de l'œuvre."
},
{
id: 16,
notion: 'art',
intitule: "L'art dit-il l'indicible ?",
piste1: "L'œuvre exprime-t-elle ce que les mots ne peuvent pas dire ?",
piste2: "ou ne dit-elle rien de plus que ce qu'elle montre ?",
racine1: "Le langage épuise-t-il le champ de l'expérience ?",
racine2: "ou l'ineffable est-il seulement ce que le discours n'a pas encore saisi ?",
enjeu: "Interroger les pouvoirs respectifs de l'art et du langage."
},
{
id: 17,
notion: 'art',
intitule: "Faut-il comprendre une œuvre pour l'apprécier ?",
piste1: "L'appréciation exige-t-elle une connaissance de l'œuvre et de son contexte ?",
piste2: "ou une émotion immédiate suffit-elle à l'expérience esthétique ?",
racine1: "Le plaisir esthétique est-il un jugement qui s'éduque ?",
racine2: "ou une disposition sensible universellement partagée ?",
enjeu: "Examiner le rapport entre culture et sentiment dans le jugement de goût."
},
{
id: 18,
notion: 'art',
intitule: "L'art doit-il être original ?",
piste1: "La valeur d'une œuvre tient-elle à sa nouveauté ?",
piste2: "ou la reprise des formes anciennes est-elle aussi créatrice ?",
racine1: "Créer, est-ce produire ce qui n'a jamais existé ?",
racine2: "ou l'originalité naît-elle d'un écart à l'intérieur d'une tradition ?",
enjeu: "Définir l'originalité artistique et son rapport à la tradition."
},
{
id: 19,
notion: 'art',
intitule: "L'art peut-il tout représenter ?",
piste1: "Aucun objet n'échappe-t-il en principe à la représentation artistique ?",
piste2: "ou certains aspects du réel résistent-ils à toute mise en forme ?",
racine1: "La représentation a-t-elle des limites intrinsèques ?",
racine2: "ou l'irreprésentable n'est-il qu'une limite provisoire des moyens disponibles ?",
enjeu: "Interroger les limites de la représentation et l'éthique de l'image."
},
{
id: 20,
notion: 'art',
intitule: "L'art nous rend-il meilleurs ?",
piste1: "La fréquentation des œuvres éduque-t-elle moralement ?",
piste2: "ou la culture artistique est-elle sans effet sur la conduite ?",
racine1: "Le sentiment esthétique dispose-t-il à la sympathie et au jugement ?",
racine2: "ou la morale et l'esthétique relèvent-elles d'ordres indépendants ?",
enjeu: "Évaluer la portée morale de l'expérience artistique."
},
{
id: 21,
notion: 'art',
intitule: "L'art doit-il déranger ?",
piste1: "L'œuvre a-t-elle pour fonction de bousculer nos évidences ?",
piste2: "ou peut-elle se contenter d'harmoniser notre rapport au monde ?",
racine1: "L'art vaut-il par sa force de contestation ?",
racine2: "ou la contemplation apaisée est-elle une expérience esthétique pleine ?",
enjeu: "Déterminer si la subversion appartient à la définition de l'art."
},
{
id: 22,
notion: 'art',
intitule: "Peut-on juger une œuvre objectivement ?",
piste1: "Existe-t-il des critères de valeur indépendants des goûts de chacun ?",
piste2: "ou le jugement esthétique est-il irréductiblement subjectif ?",
racine1: "Le beau est-il une propriété de l'objet ou un effet sur le sujet ?",
racine2: "ou la prétention à l'universalité du goût a-t-elle un fondement commun ?",
enjeu: "Examiner la possibilité d'un jugement esthétique qui ne soit pas arbitraire."
},
{
id: 23,
notion: 'art',
intitule: "Le goût est-il une affaire personnelle ?",
piste1: "Chacun juge-t-il selon sa sensibilité et son histoire ?",
piste2: "ou nos goûts sont-ils façonnés par notre milieu et notre éducation ?",
racine1: "La préférence esthétique exprime-t-elle une singularité irréductible ?",
racine2: "ou la distinction sociale se cache-t-elle derrière le jugement de goût ?",
enjeu: "Interroger l'origine sociale et individuelle du goût."
},
{
id: 24,
notion: 'art',
intitule: "L'art est-il affaire d'émotion ?",
piste1: "L'œuvre vaut-elle par l'émotion qu'elle provoque ?",
piste2: "ou l'émotion n'est-elle qu'un effet parmi d'autres de la rencontre esthétique ?",
racine1: "Sentir, est-ce déjà comprendre une œuvre ?",
racine2: "ou l'émotion esthétique est-elle une pensée qui s'ignore ?",
enjeu: "Déterminer la place de l'affectivité dans l'expérience de l'art."
},
{
id: 25,
notion: 'art',
intitule: "L'artiste est-il libre ?",
piste1: "La création échappe-t-elle à toute contrainte extérieure ?",
piste2: "ou l'artiste est-il soumis aux règles, aux commandes et aux attentes de son temps ?",
racine1: "La liberté créatrice signifie-t-elle absence de contraintes ?",
racine2: "ou la contrainte assumée est-elle la condition même de l'invention ?",
enjeu: "Examiner le sens de la liberté dans l'activité artistique."
},
{
id: 26,
notion: 'art',
intitule: "L'art a-t-il des règles ?",
piste1: "La production d'une œuvre obéit-elle à des normes que l'on peut formuler ?",
piste2: "ou le génie donne-t-il ses règles à l'art au lieu de les recevoir ?",
racine1: "Une pratique sans règles peut-elle encore être un art ?",
racine2: "ou la règle esthétique se découvre-t-elle seulement après coup, dans l'œuvre réussie ?",
enjeu: "Interroger le statut des règles dans la création et le jugement."
},
{
id: 27,
notion: 'art',
intitule: "L'art peut-il se passer de technique ?",
piste1: "L'œuvre exige-t-elle un savoir-faire matériel éprouvé ?",
piste2: "ou l'idée suffit-elle, l'exécution devenant accessoire ?",
racine1: "L'art se définit-il par la transformation d'une matière ?",
racine2: "ou la dématérialisation de l'œuvre en révèle-t-elle la nature conceptuelle ?",
enjeu: "Déterminer si la technique est constitutive ou contingente de l'art."
},
{
id: 28,
notion: 'art',
intitule: "Le hasard peut-il créer une œuvre ?",
piste1: "L'œuvre suppose-t-elle une intention organisatrice ?",
piste2: "ou l'accident peut-il produire une forme qui vaut comme œuvre ?",
racine1: "La beauté d'un objet suffit-elle à en faire une œuvre d'art ?",
racine2: "ou faut-il y reconnaître la trace d'une décision humaine ?",
enjeu: "Examiner le rôle de l'intention dans la définition de l'œuvre."
},
{
id: 29,
notion: 'art',
intitule: "Une œuvre d'art est-elle une chose ?",
piste1: "L'œuvre se réduit-elle à un objet matériel soumis aux lois physiques ?",
piste2: "ou son être dépasse-t-il le support qui la porte ?",
racine1: "Ce qui existe n'existe-t-il que sur le mode de la chose ?",
racine2: "ou l'œuvre a-t-elle un mode d'existence propre, fait de sens et de reconnaissance ?",
enjeu: "Interroger le statut ontologique de l'œuvre d'art."
},
{
id: 30,
notion: 'art',
intitule: "L'art doit-il être vu ?",
piste1: "L'œuvre est-elle destinée à la perception sensible d'un regard ?",
piste2: "ou peut-elle exister comme idée, sans jamais être montrée ?",
racine1: "L'esthétique renvoie-t-elle nécessairement à la sensation ?",
racine2: "ou l'expérience artistique peut-elle être purement intellectuelle ?",
enjeu: "Déterminer si la visibilité appartient à l'essence de l'art."
},
{
id: 31,
notion: 'art',
intitule: "Peut-on mettre un prix sur l'art ?",
piste1: "La valeur d'une œuvre peut-elle se traduire en valeur marchande ?",
piste2: "ou l'œuvre est-elle par nature hors de prix ?",
racine1: "Toute valeur est-elle commensurable à l'argent ?",
racine2: "ou la singularité de l'œuvre interdit-elle toute équivalence ?",
enjeu: "Examiner le rapport entre valeur esthétique et valeur économique."
},
{
id: 32,
notion: 'art',
intitule: "L'art est-il démocratique ?",
piste1: "Les œuvres sont-elles accessibles à tous sans condition ?",
piste2: "ou leur appréciation suppose-t-elle des codes réservés à certains ?",
racine1: "L'égalité devant l'art est-elle donnée ou à construire ?",
racine2: "ou la compétence esthétique est-elle un capital socialement distribué ?",
enjeu: "Interroger l'accès réel à l'expérience artistique et ses conditions sociales."
},
{
id: 33,
notion: 'art',
intitule: "Tout peut-il être de l'art ?",
piste1: "N'importe quel objet peut-il devenir œuvre par la décision de l'artiste ?",
piste2: "ou l'art exige-t-il des conditions que rien ne peut remplacer ?",
racine1: "Le statut d'œuvre dépend-il d'un contexte institutionnel ?",
racine2: "ou repose-t-il sur des propriétés internes de l'objet ?",
enjeu: "Déterminer ce qui fait qu'une chose est une œuvre d'art."
},
{
id: 34,
notion: 'art',
intitule: "L'art nous apprend-il à voir ?",
piste1: "Les œuvres éduquent-elles notre regard ?",
piste2: "ou nous habituent-elles à des conventions qui masquent le réel ?",
racine1: "Voir est-il une capacité naturelle ou un apprentissage ?",
racine2: "ou les styles artistiques sont-ils autant de manières apprises de découper le monde ?",
enjeu: "Examiner la formation culturelle de la perception."
},
{
id: 35,
notion: 'art',
intitule: "L'art nous console-t-il ?",
piste1: "L'œuvre apaise-t-elle nos souffrances en leur donnant une forme ?",
piste2: "ou nous confronte-t-elle au contraire à ce que nous fuyons ?",
racine1: "La représentation de la douleur l'atténue-t-elle ?",
racine2: "ou l'art tire-t-il sa force de son refus de toute consolation facile ?",
enjeu: "Évaluer la fonction consolatrice ou critique de l'art."
},
{
id: 36,
notion: 'art',
intitule: "L'art est-il un divertissement ?",
piste1: "L'œuvre sert-elle à occuper agréablement notre temps libre ?",
piste2: "ou engage-t-elle quelque chose de plus sérieux que le loisir ?",
racine1: "Le divertissement détourne-t-il l'homme de lui-même ?",
racine2: "ou l'art, même plaisant, transforme-t-il celui qui le reçoit ?",
enjeu: "Distinguer l'expérience artistique de la consommation de loisirs."
},
{
id: 37,
notion: 'art',
intitule: "L'art nous fait-il perdre du temps ?",
piste1: "Le temps consacré aux œuvres est-il soustrait à l'action ?",
piste2: "ou est-il un temps gagné sur l'agitation quotidienne ?",
racine1: "Le temps n'a-t-il de valeur que par ce qu'il permet de produire ?",
racine2: "ou la contemplation suspend-elle le temps utile sans le gaspiller ?",
enjeu: "Interroger le rapport de l'expérience esthétique au temps et à l'action."
},
{
id: 38,
notion: 'art',
intitule: "L'art peut-il être populaire ?",
piste1: "Une œuvre peut-elle plaire au plus grand nombre sans rien perdre ?",
piste2: "ou la large diffusion impose-t-elle un appauvrissement des formes ?",
racine1: "La valeur esthétique se mesure-t-elle à l'assentiment du plus grand nombre ?",
racine2: "ou l'exigence de l'art le condamne-t-il à rester minoritaire ?",
enjeu: "Examiner la tension entre exigence artistique et diffusion de masse."
},
{
id: 39,
notion: 'art',
intitule: "L'art doit-il être de son temps ?",
piste1: "L'œuvre tire-t-elle sa force de son enracinement dans le présent ?",
piste2: "ou peut-elle s'arracher à son époque pour parler à tous les temps ?",
racine1: "L'art est-il l'expression d'une situation historique déterminée ?",
racine2: "ou sa valeur tient-elle à ce qui, en lui, excède cette situation ?",
enjeu: "Déterminer le rapport de l'œuvre à l'histoire et à l'intemporel."
},
{
id: 40,
notion: 'art',
intitule: "L'art peut-il être intemporel ?",
piste1: "Certaines œuvres échappent-elles à l'usure des époques ?",
piste2: "ou leur survie n'est-elle qu'une suite de relectures successives ?",
racine1: "La permanence d'une valeur suppose-t-elle une essence invariable du beau ?",
racine2: "ou l'œuvre classique n'est-elle classique que par la reprise qu'on en fait ?",
enjeu: "Interroger la survie des œuvres et la nature de leur universalité."
},
{
id: 41,
notion: 'art',
intitule: "L'art est-il une imitation ?",
piste1: "L'œuvre doit-elle son pouvoir à la ressemblance qu'elle produit ?",
piste2: "ou imiter est-il déjà créer autre chose que le modèle ?",
racine1: "Le plaisir de l'image vient-il de la reconnaissance du connu ?",
racine2: "ou la copie révèle-t-elle des aspects que l'original ne montrait pas ?",
enjeu: "Examiner si la représentation est dépendance ou production."
},
{
id: 42,
notion: 'art',
intitule: "L'art nous trompe-t-il par les ressemblances ?",
piste1: "Le réalisme des images nous fait-il prendre l'apparence pour la chose ?",
piste2: "ou la ressemblance est-elle un outil de connaissance ?",
racine1: "L'image nous donne-t-elle accès au réel ou à son double ?",
racine2: "ou la conscience de l'image neutralise-t-elle le risque d'illusion ?",
enjeu: "Évaluer le pouvoir trompeur ou instructif des images."
},
{
id: 43,
notion: 'art',
intitule: "L'art peut-il vaincre la mort ?",
piste1: "L'œuvre arrache-t-elle quelque chose à la disparition ?",
piste2: "ou ne fait-elle que signaler une absence qu'elle ne comble pas ?",
racine1: "Survivre par une trace, est-ce encore exister ?",
racine2: "ou l'œuvre donne-t-elle une présence à ce qui n'est plus ?",
enjeu: "Interroger le rapport de l'art à la finitude et à la mémoire."
},
{
id: 44,
notion: 'art',
intitule: "L'art embellit-il la vie ?",
piste1: "L'art ajoute-t-il du charme à une existence autrement terne ?",
piste2: "ou transforme-t-il le regard que nous portons sur elle ?",
racine1: "L'embellissement est-il un ajout superficiel ?",
racine2: "ou la forme artistique change-t-elle la valeur de ce qu'elle saisit ?",
enjeu: "Déterminer si l'art décore l'existence ou la reconfigure."
},
{
id: 45,
notion: 'art',
intitule: "La fiction nous ment-elle ?",
piste1: "Raconter ce qui n'a pas eu lieu, est-ce tromper ?",
piste2: "ou la fiction atteint-elle une vérité que le fait ne montre pas ?",
racine1: "La vérité se réduit-elle à l'exactitude des énoncés ?",
racine2: "ou l'invention peut-elle rendre sensible ce que le réel dissimule ?",
enjeu: "Examiner la vérité propre au récit de fiction."
},
{
id: 46,
notion: 'art',
intitule: "Pourquoi aimons-nous les œuvres tragiques ?",
piste1: "Le spectacle de la souffrance nous attire-t-il morbidement ?",
piste2: "ou le plaisir tragique est-il d'une autre nature que le plaisir ordinaire ?",
racine1: "Toute satisfaction suppose-t-elle un contenu agréable ?",
racine2: "ou la mise en forme de la douleur produit-elle une jouissance propre ?",
enjeu: "Interroger le paradoxe du plaisir pris à ce qui nous afflige."
},
{
id: 47,
notion: 'art',
intitule: "L'art peut-il représenter l'horreur ?",
piste1: "Aucun sujet ne doit-il être soustrait à la représentation ?",
piste2: "ou esthétiser l'horreur revient-il à la trahir ?",
racine1: "La forme artistique rend-elle supportable ce qui ne l'est pas ?",
racine2: "ou le devoir de mémoire exige-t-il de montrer malgré tout ?",
enjeu: "Examiner les limites éthiques de la représentation artistique."
},
{
id: 48,
notion: 'art',
intitule: "L'œuvre appartient-elle à son auteur ?",
piste1: "L'artiste reste-t-il propriétaire du sens de son œuvre ?",
piste2: "ou l'œuvre devient-elle commune dès qu'elle est publiée ?",
racine1: "L'intention de l'auteur fait-elle autorité sur l'interprétation ?",
racine2: "ou publier, est-ce se dessaisir de ce que l'on a produit ?",
enjeu: "Déterminer à qui revient le sens d'une œuvre."
},
{
id: 49,
notion: 'art',
intitule: "Peut-on tout interpréter dans une œuvre ?",
piste1: "Les lectures d'une œuvre sont-elles indéfiniment ouvertes ?",
piste2: "ou l'œuvre impose-t-elle des limites à l'interprétation ?",
racine1: "Le sens est-il produit par le lecteur ou déposé dans la forme ?",
racine2: "ou la structure de l'œuvre autorise-t-elle certaines lectures et en exclut-elle d'autres ?",
enjeu: "Interroger les critères de validité de l'interprétation artistique."
},
{
id: 50,
notion: 'art',
intitule: "Une œuvre peut-elle être traduite ?",
piste1: "Le contenu d'une œuvre peut-il passer dans une autre langue ou un autre art ?",
piste2: "ou sa forme fait-elle obstacle à tout transfert ?",
racine1: "Le sens d'une œuvre est-il séparable de son expression ?",
racine2: "ou traduire, est-ce nécessairement créer une autre œuvre ?",
enjeu: "Examiner l'unité du sens et de la forme dans l'œuvre."
},
{
id: 51,
notion: 'art',
intitule: "L'art a-t-il besoin de nouveauté ?",
piste1: "L'art progresse-t-il en renouvelant ses formes ?",
piste2: "ou la répétition est-elle constitutive de la pratique artistique ?",
racine1: "La valeur artistique se mesure-t-elle à l'innovation ?",
racine2: "ou la reprise d'un même motif est-elle inépuisable ?",
enjeu: "Déterminer si l'histoire de l'art est faite de ruptures ou de reprises."
},
{
id: 52,
notion: 'art',
intitule: "Y a-t-il un progrès dans l'art ?",
piste1: "Les œuvres récentes valent-elles mieux que les anciennes ?",
piste2: "ou l'art échappe-t-il à toute évaluation cumulative ?",
racine1: "Le progrès suppose-t-il une accumulation d'acquis ?",
racine2: "ou chaque œuvre repart-elle d'un commencement qui n'annule rien ?",
enjeu: "Interroger l'applicabilité du modèle scientifique du progrès à l'art."
},
{
id: 53,
notion: 'art',
intitule: "L'art est-il le propre de l'homme ?",
piste1: "Seul l'être humain produit-il des œuvres ?",
piste2: "ou certaines conduites animales présentent-elles une dimension esthétique ?",
racine1: "La production de formes suppose-t-elle la conscience et le symbole ?",
racine2: "ou le plaisir des formes peut-il précéder la représentation ?",
enjeu: "Examiner l'ancrage anthropologique de l'activité artistique."
},
{
id: 54,
notion: 'art',
intitule: "L'art nous sépare-t-il de la nature ?",
piste1: "L'œuvre affirme-t-elle l'arrachement de l'homme au monde naturel ?",
piste2: "ou nous réconcilie-t-elle avec lui ?",
racine1: "La culture se définit-elle par opposition à la nature ?",
racine2: "ou l'art révèle-t-il une continuité entre le vivant et ses productions ?",
enjeu: "Interroger le rapport de la culture artistique à la nature."
},
{
id: 55,
notion: 'art',
intitule: "L'art peut-il être naturel ?",
piste1: "Un paysage peut-il être dit beau comme une œuvre ?",
piste2: "ou la beauté artistique suppose-t-elle une intervention humaine ?",
racine1: "Le jugement de goût porte-t-il indifféremment sur la nature et l'art ?",
racine2: "ou l'admiration du naturel est-elle déjà une manière de l'humaniser ?",
enjeu: "Distinguer la beauté naturelle de la beauté artistique."
},
{
id: 56,
notion: 'art',
intitule: "L'art exige-t-il du génie ?",
piste1: "Les grandes œuvres supposent-elles un talent hors norme ?",
piste2: "ou le travail ordinaire suffit-il à produire de l'art ?",
racine1: "L'excellence artistique est-elle explicable par des causes ordinaires ?",
racine2: "ou le génie est-il le nom que nous donnons à ce que nous ne savons pas expliquer ?",
enjeu: "Examiner la notion de génie et sa fonction dans l'évaluation des œuvres."
},
{
id: 57,
notion: 'art',
intitule: "Le génie est-il un don ?",
piste1: "Le talent exceptionnel est-il inné ?",
piste2: "ou se construit-il par l'exercice et la fréquentation des maîtres ?",
racine1: "Ce qui ne s'apprend pas est-il nécessairement donné à la naissance ?",
racine2: "ou l'inné n'est-il qu'une disposition que seul le travail actualise ?",
enjeu: "Interroger l'origine de l'excellence artistique."
},
{
id: 58,
notion: 'art',
intitule: "L'art peut-il être sans talent ?",
piste1: "La virtuosité est-elle une condition de la valeur artistique ?",
piste2: "ou la maladresse peut-elle être expressive ?",
racine1: "La perfection technique garantit-elle la qualité de l'œuvre ?",
racine2: "ou l'écart à la norme peut-il être un choix signifiant ?",
enjeu: "Distinguer la maîtrise technique de la réussite artistique."
},
{
id: 59,
notion: 'art',
intitule: "L'art est-il un métier ?",
piste1: "L'artiste exerce-t-il une activité comparable aux autres métiers ?",
piste2: "ou son travail échappe-t-il aux catégories ordinaires de la production ?",
racine1: "Produire une œuvre, est-ce fabriquer un objet selon des règles ?",
racine2: "ou la finalité de l'œuvre se distingue-t-elle de celle du produit ?",
enjeu: "Examiner la spécificité du travail artistique."
},
{
id: 60,
notion: 'art',
intitule: "L'artiste est-il un travailleur ?",
piste1: "La création relève-t-elle de l'effort et de la production ?",
piste2: "ou se distingue-t-elle du travail par son absence de finalité extérieure ?",
racine1: "Le travail se définit-il par la transformation d'une matière en vue d'un usage ?",
racine2: "ou l'effort de l'artiste est-il travail sans être production utilitaire ?",
enjeu: "Interroger la place de la création artistique dans le monde du travail."
},
{
id: 61,
notion: 'art',
intitule: "L'art est-il une marchandise ?",
piste1: "Les œuvres sont-elles des biens échangeables comme les autres ?",
piste2: "ou leur singularité résiste-t-elle à la forme marchande ?",
racine1: "Tout ce qui se vend devient-il par là une marchandise ?",
racine2: "ou le prix n'atteint-il jamais ce qui fait la valeur de l'œuvre ?",
enjeu: "Examiner les effets du marché sur la création et la valeur artistiques."
},
{
id: 62,
notion: 'art',
intitule: "L'art peut-il être rentable ?",
piste1: "La recherche du profit est-elle compatible avec l'exigence artistique ?",
piste2: "ou la contrainte économique a-t-elle toujours pesé sur la création ?",
racine1: "L'indépendance de l'art suppose-t-elle l'indifférence à l'argent ?",
racine2: "ou le mécénat et la commande ont-ils produit des chefs-d'œuvre ?",
enjeu: "Interroger le rapport entre exigence esthétique et contraintes économiques."
},
{
id: 63,
notion: 'art',
intitule: "L'art doit-il être engagé ?",
piste1: "L'artiste doit-il mettre son travail au service d'une cause ?",
piste2: "ou l'engagement menace-t-il l'autonomie de l'œuvre ?",
racine1: "L'art tire-t-il sa dignité de sa participation aux luttes de son temps ?",
racine2: "ou sa valeur tient-elle à ce qu'il ne se réduit pas à un message ?",
enjeu: "Déterminer si l'engagement politique appartient à la vocation de l'art."
},
{
id: 64,
notion: 'art',
intitule: "L'art peut-il être politique ?",
piste1: "Les œuvres peuvent-elles transformer le rapport des hommes au pouvoir ?",
piste2: "ou leur effet politique est-il toujours indirect et incertain ?",
racine1: "L'art agit-il sur les opinions par son contenu ?",
racine2: "ou sa force politique réside-t-elle dans la forme qu'il propose au sensible ?",
enjeu: "Examiner la nature de l'efficacité politique de l'art."
},
{
id: 65,
notion: 'art',
intitule: "L'art doit-il être moral ?",
piste1: "L'œuvre doit-elle respecter et promouvoir des valeurs morales ?",
piste2: "ou peut-elle explorer ce que la morale réprouve ?",
racine1: "Représenter le mal, est-ce le recommander ?",
racine2: "ou la connaissance du mal exige-t-elle de le donner à voir ?",
enjeu: "Interroger l'autonomie de l'art à l'égard du jugement moral."
},
{
id: 66,
notion: 'art',
intitule: "Peut-on censurer une œuvre ?",
piste1: "La société est-elle en droit de limiter la diffusion de certaines œuvres ?",
piste2: "ou toute censure porte-t-elle atteinte à la liberté de créer ?",
racine1: "La protection du public justifie-t-elle une restriction de l'expression ?",
racine2: "ou l'œuvre ne relève-t-elle que du jugement de ceux qui la reçoivent librement ?",
enjeu: "Examiner les limites de la liberté artistique."
},
{
id: 67,
notion: 'art',
intitule: "L'art est-il dangereux ?",
piste1: "Les œuvres peuvent-elles corrompre ceux qui les fréquentent ?",
piste2: "ou leur pouvoir est-il sans effet sur les conduites réelles ?",
racine1: "L'imitation des passions représentées les renforce-t-elle ?",
racine2: "ou la distance esthétique permet-elle de les éprouver sans les subir ?",
enjeu: "Évaluer les effets réels de l'art sur les mœurs."
},
{
id: 68,
notion: 'art',
intitule: "L'art nous rend-il plus humains ?",
piste1: "La fréquentation des œuvres développe-t-elle ce qu'il y a d'humain en nous ?",
piste2: "ou la culture peut-elle coexister avec la barbarie ?",
racine1: "L'humanisation passe-t-elle par l'affinement de la sensibilité ?",
racine2: "ou la culture est-elle un vernis qui ne touche pas la volonté ?",
enjeu: "Examiner la portée humanisatrice de la culture artistique."
},
{
id: 69,
notion: 'art',
intitule: "L'art est-il un langage ?",
piste1: "L'œuvre communique-t-elle un contenu selon des codes partagés ?",
piste2: "ou fonctionne-t-elle sans grammaire ni vocabulaire ?",
racine1: "Tout échange de sens suppose-t-il un système de signes ?",
racine2: "ou l'art signifie-t-il sans coder, par la seule présence sensible ?",
enjeu: "Déterminer si le modèle linguistique permet de comprendre l'art."
},
{
id: 70,
notion: 'art',
intitule: "L'art peut-il se passer de sens ?",
piste1: "Une forme sans signification peut-elle encore être une œuvre ?",
piste2: "ou l'absence de sens est-elle encore une manière de signifier ?",
racine1: "L'expérience esthétique exige-t-elle un contenu saisissable ?",
racine2: "ou le refus du sens est-il une position artistique déterminée ?",
enjeu: "Interroger la nécessité du sens dans l'œuvre."
},
{
id: 71,
notion: 'art',
intitule: "L'art est-il une connaissance ?",
piste1: "Les œuvres nous font-elles savoir quelque chose que nous ignorions ?",
piste2: "ou nous font-elles seulement éprouver autrement ce que nous savions ?",
racine1: "Connaître, est-ce nécessairement énoncer des propositions vérifiables ?",
racine2: "ou existe-t-il un savoir sensible irréductible au discours ?",
enjeu: "Examiner la valeur cognitive de l'expérience artistique."
},
{
id: 72,
notion: 'art',
intitule: "L'art peut-il penser ?",
piste1: "L'œuvre produit-elle une pensée qui lui est propre ?",
piste2: "ou ne fait-elle qu'illustrer des idées venues d'ailleurs ?",
racine1: "Penser suppose-t-il nécessairement des concepts ?",
racine2: "ou la forme sensible peut-elle être un travail de pensée ?",
enjeu: "Déterminer si l'art est un mode de pensée autonome."
},
{
id: 73,
notion: 'art',
intitule: "L'art est-il plus vrai que l'histoire ?",
piste1: "La fiction atteint-elle une vérité que le récit des faits manque ?",
piste2: "ou l'exactitude historique reste-t-elle la seule mesure du vrai ?",
racine1: "Le réel se réduit-il à ce qui s'est effectivement produit ?",
racine2: "ou le possible exploré par l'art éclaire-t-il le sens des événements ?",
enjeu: "Comparer les régimes de vérité de l'art et du savoir historique."
},
{
id: 74,
notion: 'art',
intitule: "L'art peut-il remplacer la philosophie ?",
piste1: "Les œuvres répondent-elles aux questions que la philosophie pose ?",
piste2: "ou art et philosophie poursuivent-ils des fins différentes ?",
racine1: "Comprendre l'existence exige-t-il des concepts ou des formes ?",
racine2: "ou l'art donne-t-il à éprouver ce que la philosophie cherche à établir ?",
enjeu: "Examiner la complémentarité ou la concurrence de l'art et de la philosophie."
},
{
id: 75,
notion: 'art',
intitule: "L'art est-il une religion sans dieu ?",
piste1: "L'expérience artistique reprend-elle les formes du sentiment religieux ?",
piste2: "ou s'en distingue-t-elle par l'absence de toute croyance ?",
racine1: "Le sacré suppose-t-il un objet transcendant ?",
racine2: "ou la communion esthétique produit-elle un sacré immanent ?",
enjeu: "Interroger la parenté et la différence entre expérience artistique et expérience religieuse."
},
{
id: 76,
notion: 'art',
intitule: "L'art a-t-il besoin du sacré ?",
piste1: "La création artistique suppose-t-elle un rapport à ce qui dépasse l'homme ?",
piste2: "ou l'art peut-il être entièrement profane ?",
racine1: "L'œuvre tire-t-elle sa force d'une destination rituelle ?",
racine2: "ou la sécularisation de l'art a-t-elle libéré sa puissance propre ?",
enjeu: "Examiner le rapport historique et conceptuel de l'art au sacré."
},
{
id: 77,
notion: 'art',
intitule: "L'art est-il un jeu ?",
piste1: "La création est-elle une activité libre et sans enjeu, comme le jeu ?",
piste2: "ou engage-t-elle un sérieux que le jeu ignore ?",
racine1: "Le jeu se définit-il par l'absence de conséquences ?",
racine2: "ou le libre accord des facultés dans l'art est-il un jeu qui produit du sens ?",
enjeu: "Déterminer si le modèle du jeu éclaire l'activité artistique."
},
{
id: 78,
notion: 'art',
intitule: "L'art est-il sérieux ?",
piste1: "L'œuvre engage-t-elle notre rapport au vrai et au bien ?",
piste2: "ou sa gratuité la situe-t-elle en deçà du sérieux ?",
racine1: "Le sérieux se mesure-t-il aux conséquences pratiques ?",
racine2: "ou ce qui ne sert à rien peut-il être le plus important ?",
enjeu: "Interroger la gravité propre de l'expérience artistique."
},
{
id: 79,
notion: 'art',
intitule: "L'art vient-il du désir ?",
piste1: "La création est-elle l'expression de désirs refoulés ?",
piste2: "ou transforme-t-elle le désir en autre chose que lui-même ?",
racine1: "Toute production humaine s'explique-t-elle par son origine pulsionnelle ?",
racine2: "ou la sublimation produit-elle une valeur irréductible à sa source ?",
enjeu: "Examiner l'explication psychanalytique de la création artistique."
},
{
id: 80,
notion: 'art',
intitule: "L'art peut-il satisfaire nos désirs ?",
piste1: "Les œuvres nous donnent-elles en imagination ce que la vie nous refuse ?",
piste2: "ou creusent-elles au contraire notre insatisfaction ?",
racine1: "La satisfaction imaginaire apaise-t-elle le désir ?",
racine2: "ou l'art éduque-t-il le désir en le déplaçant vers d'autres objets ?",
enjeu: "Évaluer le rapport de l'art au désir et à son assouvissement."
},
{
id: 81,
notion: 'art',
intitule: "L'art est-il une évasion ?",
piste1: "L'œuvre nous fait-elle fuir un réel insupportable ?",
piste2: "ou nous donne-t-elle les moyens de l'affronter ?",
racine1: "S'absenter du monde est-il nécessairement une fuite ?",
racine2: "ou le détour par la fiction est-il une condition du retour lucide ?",
enjeu: "Distinguer l'évasion hors du monde et l'élargissement du monde."
},
{
id: 82,
notion: 'art',
intitule: "L'art nous réconcilie-t-il avec le monde ?",
piste1: "L'expérience esthétique apaise-t-elle notre conflit avec le réel ?",
piste2: "ou creuse-t-elle au contraire l'écart entre ce qui est et ce qui devrait être ?",
racine1: "La beauté rend-elle le monde habitable ?",
racine2: "ou l'œuvre réussie rend-elle le réel d'autant plus insuffisant ?",
enjeu: "Interroger la fonction pacificatrice ou critique de l'art."
},
{
id: 83,
notion: 'art',
intitule: "L'art exprime-t-il une culture ?",
piste1: "Les œuvres témoignent-elles de la vision du monde d'une société ?",
piste2: "ou s'arrachent-elles à leur culture d'origine ?",
racine1: "Toute production est-elle marquée par son contexte collectif ?",
racine2: "ou la singularité de l'œuvre excède-t-elle ce qui la rend possible ?",
enjeu: "Examiner le rapport de l'œuvre à son contexte culturel."
},
{
id: 84,
notion: 'art',
intitule: "L'art peut-il être universel ?",
piste1: "Certaines œuvres parlent-elles à tous les hommes ?",
piste2: "ou l'universalité de l'art n'est-elle qu'une projection de nos valeurs ?",
racine1: "Le partage esthétique suppose-t-il une nature humaine commune ?",
racine2: "ou l'universel se construit-il par la circulation et la traduction des œuvres ?",
enjeu: "Interroger le fondement de la portée universelle des œuvres."
},
{
id: 85,
notion: 'art',
intitule: "L'art est-il un patrimoine ?",
piste1: "Les œuvres constituent-elles un héritage à conserver ?",
piste2: "ou la création vivante exige-t-elle de rompre avec la conservation ?",
racine1: "Conserver une œuvre, est-ce la maintenir vivante ?",
racine2: "ou la muséification fige-t-elle ce qui était acte ?",
enjeu: "Examiner la tension entre conservation et création."
},
{
id: 86,
notion: 'art',
intitule: "Faut-il conserver les œuvres ?",
piste1: "La disparition d'une œuvre est-elle une perte irréparable ?",
piste2: "ou l'art peut-il être éphémère sans rien perdre de sa valeur ?",
racine1: "La valeur d'une œuvre suppose-t-elle sa permanence matérielle ?",
racine2: "ou l'événement de la création compte-t-il plus que sa trace ?",
enjeu: "Interroger le rapport de l'art à la durée et à la perte."
},
{
id: 87,
notion: 'art',
intitule: "L'art a-t-il besoin d'un lieu ?",
piste1: "L'œuvre exige-t-elle un espace qui la distingue du monde ordinaire ?",
piste2: "ou peut-elle advenir n'importe où ?",
racine1: "Le cadre institutionnel fait-il partie de l'expérience artistique ?",
racine2: "ou l'art se définit-il par une attention qui ne dépend pas du lieu ?",
enjeu: "Déterminer le rôle du dispositif spatial dans la réception de l'art."
},
{
id: 88,
notion: 'art',
intitule: "Le musée est-il nécessaire à l'art ?",
piste1: "La conservation et l'exposition sont-elles des conditions de l'art ?",
piste2: "ou le musée transforme-t-il l'œuvre en objet de contemplation morte ?",
racine1: "L'œuvre existe-t-elle pleinement hors de son usage d'origine ?",
racine2: "ou la réunion des œuvres en un même lieu crée-t-elle un rapport nouveau à l'art ?",
enjeu: "Examiner les effets de l'institution muséale sur l'œuvre."
},
{
id: 89,
notion: 'art',
intitule: "L'art peut-il être numérique ?",
piste1: "Les outils numériques produisent-ils des œuvres à part entière ?",
piste2: "ou l'absence de matière singulière leur retire-t-elle quelque chose d'essentiel ?",
racine1: "L'œuvre suppose-t-elle un original unique ?",
racine2: "ou la reproductibilité intégrale déplace-t-elle la valeur vers la conception ?",
enjeu: "Interroger les effets du numérique sur la définition de l'œuvre."
},
{
id: 90,
notion: 'art',
intitule: "La reproduction nuit-elle à l'œuvre ?",
piste1: "La diffusion massive des images dévalorise-t-elle les œuvres ?",
piste2: "ou rend-elle l'art accessible sans le détruire ?",
racine1: "L'aura de l'œuvre tient-elle à son unicité et à sa présence ?",
racine2: "ou la reproduction libère-t-elle l'œuvre de son privilège rituel ?",
enjeu: "Examiner les effets de la reproductibilité technique sur l'expérience de l'art."
},
{
id: 91,
notion: 'art',
intitule: "Une machine peut-elle créer une œuvre ?",
piste1: "Un système technique peut-il produire ce que nous appelons art ?",
piste2: "ou la création suppose-t-elle une intention et une existence vécue ?",
racine1: "Le résultat suffit-il à définir l'œuvre, indépendamment de sa genèse ?",
racine2: "ou l'art est-il l'expression d'un rapport singulier au monde ?",
enjeu: "Interroger les conditions de la création à l'âge des machines produisant des formes."
},
{
id: 92,
notion: 'art',
intitule: "L'art a-t-il besoin d'un auteur ?",
piste1: "L'œuvre doit-elle être attribuée à quelqu'un ?",
piste2: "ou peut-elle être anonyme ou collective sans rien perdre ?",
racine1: "La singularité de l'œuvre renvoie-t-elle à celle d'un individu ?",
racine2: "ou la signature est-elle une convention sociale récente ?",
enjeu: "Examiner la fonction de l'auteur dans la définition de l'œuvre."
},
{
id: 93,
notion: 'art',
intitule: "L'art peut-il être anonyme ?",
piste1: "Les œuvres sans auteur identifiable sont-elles pleinement des œuvres ?",
piste2: "ou l'anonymat révèle-t-il une autre conception de la création ?",
racine1: "La valeur artistique suppose-t-elle une subjectivité exprimée ?",
racine2: "ou l'art peut-il être la production d'un collectif sans sujet assignable ?",
enjeu: "Interroger le lien entre œuvre et individualité créatrice."
},
{
id: 94,
notion: 'art',
intitule: "L'art peut-il être collectif ?",
piste1: "Une œuvre peut-elle être créée à plusieurs ?",
piste2: "ou la création exige-t-elle l'unité d'une intention singulière ?",
racine1: "L'unité de l'œuvre suppose-t-elle l'unité de son auteur ?",
racine2: "ou la cohérence d'un projet peut-elle être partagée ?",
enjeu: "Examiner les conditions de la création collective."
},
{
id: 95,
notion: 'art',
intitule: "L'art est-il une affaire de goût ?",
piste1: "Juger une œuvre revient-il à dire ce que l'on aime ?",
piste2: "ou le jugement esthétique prétend-il à autre chose qu'une préférence ?",
racine1: "Le goût se réduit-il à une réaction agréable ou désagréable ?",
racine2: "ou juger, est-ce demander l'assentiment d'autrui ?",
enjeu: "Distinguer le jugement esthétique de l'expression d'une préférence."
},
{
id: 96,
notion: 'art',
intitule: "Peut-on discuter des goûts artistiques ?",
piste1: "Les désaccords esthétiques sont-ils insolubles ?",
piste2: "ou la discussion peut-elle faire évoluer un jugement de goût ?",
racine1: "Ce qui repose sur le sentiment échappe-t-il à l'argumentation ?",
racine2: "ou montrer quelque chose dans l'œuvre, est-ce déjà argumenter ?",
enjeu: "Interroger la rationalité du débat esthétique."
},
{
id: 97,
notion: 'art',
intitule: "L'art peut-il être laid ?",
piste1: "La laideur d'un sujet condamne-t-elle l'œuvre ?",
piste2: "ou la représentation peut-elle rendre beau ce qui ne l'est pas ?",
racine1: "La beauté de l'œuvre dépend-elle de celle de son objet ?",
racine2: "ou la réussite de la représentation est-elle indépendante du représenté ?",
enjeu: "Distinguer la beauté de l'œuvre de la beauté du sujet."
},
{
id: 98,
notion: 'art',
intitule: "La laideur peut-elle être artistique ?",
piste1: "L'art peut-il faire de la laideur sa matière même ?",
piste2: "ou l'échec esthétique commence-t-il là où le plaisir cesse ?",
racine1: "Le jugement esthétique est-il indexé sur l'agrément ?",
racine2: "ou la puissance expressive d'une forme peut-elle être laide et réussie ?",
enjeu: "Examiner si la catégorie de laideur a un usage positif dans l'art."
},
{
id: 99,
notion: 'art',
intitule: "L'art doit-il être harmonieux ?",
piste1: "L'œuvre vaut-elle par l'équilibre et la proportion de ses parties ?",
piste2: "ou la dissonance peut-elle être une exigence artistique ?",
racine1: "La beauté se définit-elle par des rapports mesurables ?",
racine2: "ou la rupture des proportions est-elle un moyen d'expression ?",
enjeu: "Interroger la validité des critères classiques de beauté."
},
{
id: 100,
notion: 'art',
intitule: "L'art peut-il se définir ?",
piste1: "Peut-on énoncer les conditions nécessaires et suffisantes de l'art ?",
piste2: "ou l'art est-il un concept ouvert que l'histoire transforme sans cesse ?",
racine1: "Définir suppose-t-il une essence stable ?",
racine2: "ou peut-on reconnaître l'art par des ressemblances de famille plutôt que par une essence ?",
enjeu: "Déterminer si l'art est susceptible d'une définition ou seulement d'une histoire."
},
{
id: 101,
notion: 'bonheur',
intitule: "Le bonheur est-il le but de l'existence ?",
piste1: "Toutes nos actions visent-elles en dernier lieu le bonheur ?",
piste2: "ou pouvons-nous poursuivre d'autres fins qui ne s'y ramènent pas ?",
racine1: "Ce que nous voulons, nous le voulons toujours en vue d'autre chose ?",
racine2: "ou le bonheur est-il la seule fin que nous voulons pour elle-même ?",
enjeu: "Déterminer si le bonheur est la fin ultime de l'action humaine."
},
{
id: 102,
notion: 'bonheur',
intitule: "Le bonheur dépend-il de nous ?",
piste1: "Notre bonheur est-il entre nos mains ?",
piste2: "ou dépend-il de circonstances que nous ne maîtrisons pas ?",
racine1: "Ce qui ne dépend pas de nous peut-il nous rendre heureux ou malheureux ?",
racine2: "ou le bonheur réside-t-il dans l'usage que nous faisons de ce qui nous arrive ?",
enjeu: "Examiner la part de maîtrise et celle de la fortune dans le bonheur."
},
{
id: 103,
notion: 'bonheur',
intitule: "Le bonheur est-il un état durable ?",
piste1: "Le bonheur suppose-t-il une stabilité dans le temps ?",
piste2: "ou peut-il être fait d'instants sans lendemain ?",
racine1: "Un état qui cesse est-il encore un bonheur ?",
racine2: "ou la durée n'est-elle pas une condition de la valeur d'un vécu ?",
enjeu: "Distinguer le bonheur comme état et comme succession d'instants."
},
{
id: 104,
notion: 'bonheur',
intitule: "Le bonheur se confond-il avec le plaisir ?",
piste1: "Être heureux, est-ce éprouver des plaisirs ?",
piste2: "ou le bonheur diffère-t-il du plaisir par sa nature ?",
racine1: "Le plaisir est-il une satisfaction ponctuelle et passagère ?",
racine2: "ou le bonheur est-il un accord global de l'existence avec elle-même ?",
enjeu: "Distinguer le plaisir, ponctuel, du bonheur comme état de l'existence."
},
{
id: 105,
notion: 'bonheur',
intitule: "Peut-on être heureux sans le savoir ?",
piste1: "Le bonheur exige-t-il d'en avoir conscience ?",
piste2: "ou peut-il être un état que l'on vit sans le reconnaître ?",
racine1: "Un vécu non conscientisé existe-t-il pour celui qui le vit ?",
racine2: "ou le bonheur n'est-il réel que lorsqu'il est reconnu comme tel ?",
enjeu: "Examiner le rôle de la conscience dans l'existence du bonheur."
},
{
id: 106,
notion: 'bonheur',
intitule: "Le bonheur est-il une illusion ?",
piste1: "L'idée de bonheur correspond-elle à quelque chose de réalisable ?",
piste2: "ou n'est-elle qu'un horizon que nous projetons sans jamais l'atteindre ?",
racine1: "Ce que nous appelons bonheur est-il un objet d'expérience ?",
racine2: "ou une idée que nous construisons à partir de nos manques ?",
enjeu: "Déterminer si le bonheur est un possible ou une projection de l'imagination."
},
{
id: 107,
notion: 'bonheur',
intitule: "Faut-il être lucide pour être heureux ?",
piste1: "La vérité sur notre condition est-elle compatible avec le bonheur ?",
piste2: "ou le bonheur exige-t-il une part d'aveuglement ?",
racine1: "La lucidité dissipe-t-elle les illusions qui nous font vivre ?",
racine2: "ou voir clair est-il la condition d'un bonheur qui ne soit pas tromperie ?",
enjeu: "Examiner le rapport entre vérité et bonheur."
},
{
id: 108,
notion: 'bonheur',
intitule: "Le bonheur est-il affaire de volonté ?",
piste1: "Peut-on décider d'être heureux ?",
piste2: "ou le bonheur échappe-t-il à toute décision ?",
racine1: "Ce qui dépend de nous est-il toujours commandable par la volonté ?",
racine2: "ou le bonheur résulte-t-il de dispositions que la volonté ne crée pas ?",
enjeu: "Déterminer la part de la volonté dans l'accès au bonheur."
},
{
id: 109,
notion: 'bonheur',
intitule: "Le bonheur est-il un droit ?",
piste1: "Chacun peut-il exiger les conditions de son bonheur ?",
piste2: "ou le bonheur n'est-il qu'une aspiration sans créance sur autrui ?",
racine1: "Un droit suppose-t-il un débiteur tenu de le satisfaire ?",
racine2: "ou la poursuite du bonheur est-elle une liberté sans garantie de résultat ?",
enjeu: "Distinguer le droit à la poursuite du bonheur et le droit au bonheur."
},
{
id: 110,
notion: 'bonheur',
intitule: "Le bonheur est-il une obligation ?",
piste1: "Avons-nous le devoir d'être heureux ?",
piste2: "ou le bonheur relève-t-il d'un choix personnel ?",
racine1: "Ce qui est exigé de tous peut-il être un état intérieur ?",
racine2: "ou l'injonction au bonheur est-elle une contrainte sociale déguisée ?",
enjeu: "Examiner le statut du bonheur comme exigence morale ou sociale."
},
{
id: 111,
notion: 'bonheur',
intitule: "Le bonheur s'apprend-il ?",
piste1: "Le bonheur est-il le résultat d'un apprentissage ?",
piste2: "ou relève-t-il d'une disposition que l'on ne peut acquérir ?",
racine1: "Ce qui s'apprend suppose-t-il des règles transmissibles ?",
racine2: "ou le bonheur est-il un savoir-vivre qui s'éprouve plus qu'il ne s'enseigne ?",
enjeu: "Déterminer si le bonheur est objet d'enseignement ou d'exercice."
},
{
id: 112,
notion: 'bonheur',
intitule: "Existe-t-il des recettes du bonheur ?",
piste1: "Des méthodes peuvent-elles garantir le bonheur ?",
piste2: "ou chaque existence doit-elle inventer sa propre voie ?",
racine1: "Une recette suppose-t-elle des cas interchangeables ?",
racine2: "ou la singularité de chacun rend-elle toute méthode inopérante ?",
enjeu: "Examiner la prétention des méthodes à produire le bonheur."
},
{
id: 113,
notion: 'bonheur',
intitule: "Le bonheur est-il une affaire privée ?",
piste1: "Le bonheur relève-t-il de la seule vie personnelle ?",
piste2: "ou engage-t-il nécessairement les autres et la cité ?",
racine1: "Ce qui est intérieur échappe-t-il à la sphère publique ?",
racine2: "ou les conditions du bonheur sont-elles socialement produites ?",
enjeu: "Déterminer la frontière entre privé et politique dans le bonheur."
},
{
id: 114,
notion: 'bonheur',
intitule: "L'État doit-il nous rendre heureux ?",
piste1: "La puissance publique a-t-elle pour fin le bonheur des citoyens ?",
piste2: "ou doit-elle se limiter à garantir les conditions de la liberté ?",
racine1: "L'État peut-il définir le bonheur à la place des individus ?",
racine2: "ou garantir la paix et les droits est-il la seule fin légitime ?",
enjeu: "Examiner les limites du rôle de l'État dans la vie bonne."
},
{
id: 115,
notion: 'bonheur',
intitule: "Le bonheur des uns fait-il le malheur des autres ?",
piste1: "Le bonheur est-il un bien dont la somme est fixe ?",
piste2: "ou peut-il augmenter pour tous sans se prendre à personne ?",
racine1: "Les biens de la vie sont-ils nécessairement rivaux ?",
racine2: "ou certains biens, comme la connaissance ou l'amitié, se partagent-ils sans perte ?",
enjeu: "Déterminer si le bonheur est un jeu à somme nulle."
},
{
id: 116,
notion: 'bonheur',
intitule: "Peut-on être heureux seul ?",
piste1: "Le bonheur peut-il se suffire de la solitude ?",
piste2: "ou suppose-t-il la présence d'autrui ?",
racine1: "L'homme est-il un être dont l'existence se suffit à elle-même ?",
racine2: "ou le bonheur est-il constitué par la relation à l'autre ?",
enjeu: "Examiner la dimension relationnelle du bonheur."
},
{
id: 117,
notion: 'bonheur',
intitule: "L'amour rend-il heureux ?",
piste1: "L'amour comble-t-il notre manque et nous rend-il heureux ?",
piste2: "ou nous expose-t-il à la souffrance et à la dépendance ?",
racine1: "Aimer, est-ce posséder ce qui nous manque ?",
racine2: "ou l'amour nous rend-il vulnérable à la perte de l'aimé ?",
enjeu: "Évaluer la part de joie et de risque dans l'amour."
},
{
id: 118,
notion: 'bonheur',
intitule: "L'amitié est-elle nécessaire au bonheur ?",
piste1: "Le bonheur exige-t-il des amis ?",
piste2: "ou peut-il se passer de tout lien électif ?",
racine1: "L'amitié est-elle un agrément ou un besoin de l'existence humaine ?",
racine2: "ou la solitude choisie peut-elle être une forme de plénitude ?",
enjeu: "Déterminer la nécessité de l'amitié dans la vie heureuse."
},
{
id: 119,
notion: 'bonheur',
intitule: "Le bonheur est-il égoïste ?",
piste1: "Chercher son bonheur, est-ce ne chercher que soi ?",
piste2: "ou le bonheur personnel inclut-il nécessairement celui d'autrui ?",
racine1: "Le souci de soi exclut-il le souci de l'autre ?",
racine2: "ou notre bonheur est-il lié à celui que nous rendons possible ?",
enjeu: "Examiner le rapport entre bonheur personnel et altruisme."
},
{
id: 120,
notion: 'bonheur',
intitule: "Peut-on être heureux dans l'injustice ?",
piste1: "L'injustice ambiante empêche-t-elle le bonheur ?",
piste2: "ou peut-on être heureux malgré un monde injuste ?",
racine1: "Le bonheur suppose-t-il un accord entre notre vie et nos valeurs ?",
racine2: "ou peut-on se préserver intérieurement de l'injustice extérieure ?",
enjeu: "Examiner la compatibilité du bonheur avec l'injustice du monde."
},
{
id: 121,
notion: 'bonheur',
intitule: "Le bonheur est-il compatible avec la morale ?",
piste1: "Être heureux exige-t-il de respecter la loi morale ?",
piste2: "ou le bonheur peut-il s'accommoder de l'injustice ?",
racine1: "La morale et le bonheur poursuivent-ils des fins convergentes ?",
racine2: "ou le bonheur est-il un objectif indépendant de la moralité ?",
enjeu: "Déterminer le rapport entre bonheur et moralité."
},
{
id: 122,
notion: 'bonheur',
intitule: "Faut-il être vertueux pour être heureux ?",
piste1: "La vertu est-elle la condition du bonheur ?",
piste2: "ou peut-on être heureux sans être vertueux ?",
racine1: "La vertu est-elle un moyen en vue du bonheur ou une fin en soi ?",
racine2: "ou le bonheur des méchants montre-t-il que vertu et bonheur sont dissociables ?",
enjeu: "Examiner le lien entre vertu et bonheur."
},
{
id: 123,
notion: 'bonheur',
intitule: "Le bonheur est-il le souverain bien ?",
piste1: "Le bonheur est-il le bien auquel tous les autres se subordonnent ?",
piste2: "ou y a-t-il un bien plus élevé que le bonheur ?",
racine1: "Ce que nous voulons pour lui-même est-il nécessairement le plus haut ?",
racine2: "ou la dignité morale vaut-elle plus que le bonheur ?",
enjeu: "Déterminer la place du bonheur dans la hiérarchie des biens."
},
{
id: 124,
notion: 'bonheur',
intitule: "Le bonheur est-il la satisfaction de tous nos désirs ?",
piste1: "Être heureux, est-ce avoir tout ce que l'on désire ?",
piste2: "ou le bonheur suppose-t-il de limiter nos désirs ?",
racine1: "Nos désirs sont-ils tous compatibles entre eux ?",
racine2: "ou la satisfaction de tous les désirs est-elle une idée impossible ?",
enjeu: "Examiner la conception du bonheur comme assouvissement du désir."
},
{
id: 125,
notion: 'bonheur',
intitule: "Le désir est-il un obstacle au bonheur ?",
piste1: "Le désir nous maintient-il dans le manque et l'insatisfaction ?",
piste2: "ou est-il le moteur d'une vie heureuse ?",
racine1: "Désirer, est-ce nécessairement souffrir de ce qui manque ?",
racine2: "ou le désir est-il une puissance qui nous porte vers ce qui nous fait vivre ?",
enjeu: "Déterminer si le désir est manque ou puissance."
},
{
id: 126,
notion: 'bonheur',
intitule: "Le bonheur est-il l'absence de souffrance ?",
piste1: "Le bonheur se définit-il négativement, comme absence de peine ?",
piste2: "ou exige-t-il un contenu positif de joie ?",
racine1: "Ne plus souffrir, est-ce déjà être heureux ?",
racine2: "ou l'absence de douleur n'est-elle qu'une condition nécessaire ?",
enjeu: "Distinguer le bonheur négatif et le bonheur positif."
},
{
id: 127,
notion: 'bonheur',
intitule: "Le bonheur est-il un repos ?",
piste1: "Le bonheur est-il l'absence de trouble et d'agitation ?",
piste2: "ou suppose-t-il une activité et un mouvement ?",
racine1: "Le repos de l'âme est-il une plénitude ou un vide ?",
racine2: "ou le bonheur est-il l'exercice de nos facultés plutôt que leur arrêt ?",
enjeu: "Examiner la conception du bonheur comme ataraxie ou comme activité."
},
{
id: 128,
notion: 'bonheur',
intitule: "Le bonheur est-il dans l'instant ?",
piste1: "Le bonheur se vit-il au présent, sans attente ni regret ?",
piste2: "ou suppose-t-il une durée et un projet ?",
racine1: "Ce qui est pleinement vécu n'a-t-il pas besoin de durée ?",
racine2: "ou le bonheur est-il une construction qui traverse le temps ?",
enjeu: "Déterminer le rapport du bonheur au présent et à la durée."
},
{
id: 129,
notion: 'bonheur',
intitule: "Le bonheur est-il dans l'attente ?",
piste1: "L'espérance d'un bien futur nous rend-elle heureux ?",
piste2: "ou le bonheur n'existe-t-il que dans la possession présente ?",
racine1: "L'attente est-elle une jouissance anticipée ou un manque ?",
racine2: "ou le bonheur se confond-il avec la satisfaction actuelle ?",
enjeu: "Examiner la part de l'anticipation dans le bonheur."
},
{
id: 130,
notion: 'bonheur',
intitule: "Le bonheur est-il dans le souvenir ?",
piste1: "Le bonheur passé continue-t-il d'exister dans la mémoire ?",
piste2: "ou le bonheur n'est-il réel que présent ?",
racine1: "Ce qui n'est plus existe-t-il encore pour nous ?",
racine2: "ou le souvenir transforme-t-il le passé en un bien présent ?",
enjeu: "Déterminer le statut du bonheur passé dans la mémoire."
},
{
id: 131,
notion: 'bonheur',
intitule: "Le temps détruit-il le bonheur ?",
piste1: "Le bonheur est-il menacé par l'usure du temps ?",
piste2: "ou le temps est-il la condition d'un bonheur qui se construit ?",
racine1: "Ce qui dure s'use-t-il nécessairement ?",
racine2: "ou la durée approfondit-elle ce qui a été commencé ?",
enjeu: "Examiner le rapport du bonheur au temps qui passe."
},
{
id: 132,
notion: 'bonheur',
intitule: "La mort empêche-t-elle le bonheur ?",
piste1: "La perspective de la mort rend-elle le bonheur impossible ?",
piste2: "ou le bonheur peut-il être complet dans une vie finie ?",
racine1: "Ce qui doit finir a-t-il moins de valeur ?",
racine2: "ou la finitude donne-t-elle au bonheur son intensité ?",
enjeu: "Déterminer si la finitude de la vie compromet le bonheur."
},
{
id: 133,
notion: 'bonheur',
intitule: "Le bonheur exige-t-il l'éternité ?",
piste1: "Le bonheur suppose-t-il de ne jamais finir ?",
piste2: "ou peut-il être parfait dans un temps limité ?",
racine1: "La perfection d'un état suppose-t-elle sa permanence ?",
racine2: "ou un instant peut-il avoir une valeur infinie ?",
enjeu: "Examiner le rapport entre bonheur et éternité."
},
{
id: 134,
notion: 'bonheur',
intitule: "Le bonheur est-il une affaire de chance ?",
piste1: "Le bonheur dépend-il de circonstances favorables ?",
piste2: "ou peut-il être conquis contre la fortune ?",
racine1: "Ce qui nous arrive sans que nous le voulions décide-t-il de notre vie ?",
racine2: "ou la sagesse peut-elle rendre heureux en toute circonstance ?",
enjeu: "Déterminer la part de la fortune dans le bonheur."
},
{
id: 135,
notion: 'bonheur',
intitule: "Le bonheur est-il un destin ?",
piste1: "Notre bonheur est-il fixé à l'avance ?",
piste2: "ou est-il ouvert à notre initiative ?",
racine1: "Ce qui arrive était-il nécessaire ?",
racine2: "ou l'existence humaine est-elle un champ de possibles ?",
enjeu: "Examiner le rapport entre bonheur et nécessité."
},
{
id: 136,
notion: 'bonheur',
intitule: "Le bonheur est-il une conquête ?",
piste1: "Le bonheur s'obtient-il par l'effort et la lutte ?",
piste2: "ou se reçoit-il sans qu'on le prenne ?",
racine1: "Ce qui a de la valeur doit-il être mérité par l'effort ?",
racine2: "ou le bonheur est-il ce qui survient quand on cesse de le poursuivre ?",
enjeu: "Déterminer si le bonheur se prend ou se reçoit."
},
{
id: 137,
notion: 'bonheur',
intitule: "Le bonheur est-il un don ?",
piste1: "Le bonheur nous est-il donné sans que nous le méritions ?",
piste2: "ou est-il le résultat de ce que nous faisons ?",
racine1: "Ce qui est gratuit a-t-il moins de valeur ?",
racine2: "ou le don est-il la forme la plus haute de ce qui nous arrive ?",
enjeu: "Examiner la gratuité du bonheur."
},
{
id: 138,
notion: 'bonheur',
intitule: "Le bonheur se mérite-t-il ?",
piste1: "Le bonheur est-il la récompense d'une conduite ?",
piste2: "ou frappe-t-il indifféremment les justes et les injustes ?",
racine1: "Le réel est-il ordonné à la justice ?",
racine2: "ou le bonheur est-il distribué sans égard au mérite ?",
enjeu: "Déterminer le rapport entre bonheur et mérite."
},
{
id: 139,
notion: 'bonheur',
intitule: "Le bonheur est-il une consolation ?",
piste1: "Le bonheur sert-il à compenser nos souffrances ?",
piste2: "ou est-il une plénitude qui n'a pas besoin de compensation ?",
racine1: "Ce qui console suppose-t-il un mal préalable ?",
racine2: "ou le bonheur est-il un état premier que la souffrance vient interrompre ?",
enjeu: "Distinguer le bonheur-compensation du bonheur-plénitude."
},
{
id: 140,
notion: 'bonheur',
intitule: "Le bonheur est-il une fuite ?",
piste1: "Chercher le bonheur, est-ce fuir ce qui nous dérange ?",
piste2: "ou est-ce affronter lucidement notre condition ?",
racine1: "Le désir de bonheur nous détourne-t-il du réel ?",
racine2: "ou la recherche du bonheur est-elle un travail sur soi ?",
enjeu: "Examiner si la quête du bonheur est évasion ou lucidité."
},
{
id: 141,
notion: 'bonheur',
intitule: "Le divertissement nous rend-il heureux ?",
piste1: "Le divertissement apaise-t-il notre inquiétude ?",
piste2: "ou ne fait-il que masquer un mal-être persistant ?",
racine1: "L'agitation nous empêche-t-elle de penser à notre condition ?",
racine2: "ou le divertissement est-il une pause nécessaire à la vie ?",
enjeu: "Distinguer le divertissement qui distrait et le bonheur qui accomplit."
},
{
id: 142,
notion: 'bonheur',
intitule: "L'ennui est-il incompatible avec le bonheur ?",
piste1: "L'ennui révèle-t-il un vide incompatible avec le bonheur ?",
piste2: "ou est-il un moment nécessaire à la vie intérieure ?",
racine1: "L'ennui est-il une souffrance ou une disponibilité ?",
racine2: "ou le bonheur suppose-t-il de savoir habiter le temps vide ?",
enjeu: "Examiner le rapport entre ennui et bonheur."
},
{
id: 143,
notion: 'bonheur',
intitule: "Le bonheur est-il dans l'action ?",
piste1: "Le bonheur naît-il de l'exercice de nos puissances ?",
piste2: "ou suppose-t-il de cesser d'agir ?",
racine1: "Agir, est-ce déployer ce que nous sommes ?",
racine2: "ou l'action nous éloigne-t-elle de la paix intérieure ?",
enjeu: "Déterminer si le bonheur est activité ou repos."
},
{
id: 144,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la contemplation ?",
piste1: "La contemplation est-elle la forme la plus haute du bonheur ?",
piste2: "ou le bonheur exige-t-il l'action et l'engagement ?",
racine1: "Ce qui ne sert à rien peut-il être le plus précieux ?",
racine2: "ou le bonheur est-il dans le rapport aux autres et au monde ?",
enjeu: "Examiner la place de la contemplation dans la vie heureuse."
},
{
id: 145,
notion: 'bonheur',
intitule: "Le travail rend-il heureux ?",
piste1: "Le travail est-il une source d'accomplissement ?",
piste2: "ou une contrainte qui nous éloigne du bonheur ?",
racine1: "Travailler, est-ce déployer ses capacités ou se soumettre à une nécessité ?",
racine2: "ou le bonheur commence-t-il là où le travail cesse ?",
enjeu: "Examiner le rapport entre travail et bonheur."
},
{
id: 146,
notion: 'bonheur',
intitule: "L'argent fait-il le bonheur ?",
piste1: "La richesse est-elle une condition du bonheur ?",
piste2: "ou le bonheur est-il indépendant des biens matériels ?",
racine1: "L'argent est-il un moyen ou une fin ?",
racine2: "ou la recherche de la richesse est-elle sans terme ?",
enjeu: "Déterminer le rapport entre argent et bonheur."
},
{
id: 147,
notion: 'bonheur',
intitule: "La consommation nous rend-elle heureux ?",
piste1: "La satisfaction des besoins par les biens nous rend-elle heureux ?",
piste2: "ou la consommation crée-t-elle de nouveaux manques ?",
racine1: "Posséder comble-t-il un manque ou en ouvre-t-il d'autres ?",
racine2: "ou le bonheur est-il dans le rapport aux choses plutôt que dans leur possession ?",
enjeu: "Examiner le rapport entre consommation et bonheur."
},
{
id: 148,
notion: 'bonheur',
intitule: "Le confort suffit-il au bonheur ?",
piste1: "L'absence de difficulté matérielle suffit-elle à rendre heureux ?",
piste2: "ou le bonheur exige-t-il autre chose que le bien-être ?",
racine1: "Le bien-être matériel est-il une condition suffisante ?",
racine2: "ou le bonheur suppose-t-il un sens que le confort ne donne pas ?",
enjeu: "Distinguer bien-être et bonheur."
},
{
id: 149,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la simplicité ?",
piste1: "Le bonheur suppose-t-il de réduire nos besoins ?",
piste2: "ou peut-il s'accommoder de la complexité et de l'abondance ?",
racine1: "La multiplicité des désirs nous disperse-t-elle ?",
racine2: "ou la simplicité est-elle une pauvreté déguisée ?",
enjeu: "Examiner la conception du bonheur comme sobriété."
},
{
id: 150,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la nature ?",
piste1: "Le retour à la nature nous rend-il heureux ?",
piste2: "ou le bonheur est-il une construction culturelle ?",
racine1: "La nature est-elle un ordre auquel il faut se conformer ?",
racine2: "ou l'homme se réalise-t-il en s'arrachant à la nature ?",
enjeu: "Déterminer le rapport entre nature et bonheur."
},
{
id: 151,
notion: 'bonheur',
intitule: "Le bonheur est-il dans le corps ?",
piste1: "Le bonheur est-il d'abord corporel ?",
piste2: "ou relève-t-il de l'esprit ?",
racine1: "Le corps est-il le lieu du plaisir et de la douleur ?",
racine2: "ou le bonheur est-il un état de l'âme indépendant du corps ?",
enjeu: "Examiner la part du corps dans le bonheur."
},
{
id: 152,
notion: 'bonheur',
intitule: "La santé est-elle nécessaire au bonheur ?",
piste1: "Peut-on être heureux sans la santé ?",
piste2: "ou la santé n'est-elle qu'une condition parmi d'autres ?",
racine1: "Le corps souffrant empêche-t-il toute joie ?",
racine2: "ou le bonheur peut-il coexister avec la maladie ?",
enjeu: "Déterminer le rapport entre santé et bonheur."
},
{
id: 153,
notion: 'bonheur',
intitule: "Peut-on être heureux dans la maladie ?",
piste1: "La maladie détruit-elle le bonheur ?",
piste2: "ou peut-on être heureux malgré elle ?",
racine1: "La souffrance du corps atteint-elle l'âme ?",
racine2: "ou le bonheur est-il une disposition que la maladie n'entame pas ?",
enjeu: "Examiner la compatibilité du bonheur et de la maladie."
},
{
id: 154,
notion: 'bonheur',
intitule: "Le bonheur est-il une affaire de jeunesse ?",
piste1: "Le bonheur appartient-il à la jeunesse ?",
piste2: "ou peut-il se construire à tout âge ?",
racine1: "La jeunesse est-elle le temps des possibles ?",
racine2: "ou le bonheur s'approfondit-il avec l'expérience ?",
enjeu: "Examiner le rapport entre âge et bonheur."
},
{
id: 155,
notion: 'bonheur',
intitule: "L'enfance est-elle l'âge du bonheur ?",
piste1: "L'enfance est-elle un bonheur perdu ?",
piste2: "ou n'est-elle qu'une illusion rétrospective ?",
racine1: "L'absence de souci est-elle le bonheur ?",
racine2: "ou l'enfance est-elle aussi un temps de dépendance et de peur ?",
enjeu: "Examiner la représentation de l'enfance comme bonheur."
},
{
id: 156,
notion: 'bonheur',
intitule: "La vieillesse est-elle compatible avec le bonheur ?",
piste1: "Le déclin empêche-t-il le bonheur ?",
piste2: "ou la vieillesse peut-elle être un accomplissement ?",
racine1: "La perte des capacités détruit-elle le sens de la vie ?",
racine2: "ou la sagesse de l'âge est-elle une forme de bonheur ?",
enjeu: "Déterminer le rapport entre vieillesse et bonheur."
},
{
id: 157,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la réussite ?",
piste1: "La réussite de nos projets nous rend-elle heureux ?",
piste2: "ou le bonheur est-il indépendant du succès ?",
racine1: "Réussir, est-ce réaliser ce que nous voulons ?",
racine2: "ou le bonheur est-il dans la manière de vivre plutôt que dans le résultat ?",
enjeu: "Examiner le rapport entre réussite et bonheur."
},
{
id: 158,
notion: 'bonheur',
intitule: "L'échec empêche-t-il le bonheur ?",
piste1: "L'échec détruit-il le bonheur ?",
piste2: "ou peut-on être heureux malgré l'échec ?",
racine1: "L'échec atteint-il notre valeur ou seulement nos projets ?",
racine2: "ou le bonheur est-il indépendant de la réussite de nos entreprises ?",
enjeu: "Déterminer le rapport entre échec et bonheur."
},
{
id: 159,
notion: 'bonheur',
intitule: "La comparaison nuit-elle au bonheur ?",
piste1: "Se comparer aux autres nous rend-il malheureux ?",
piste2: "ou la comparaison est-elle un moteur de progrès ?",
racine1: "Notre valeur se mesure-t-elle à celle des autres ?",
racine2: "ou le bonheur est-il dans le rapport à soi plutôt qu'à autrui ?",
enjeu: "Examiner les effets de la comparaison sur le bonheur."
},
{
id: 160,
notion: 'bonheur',
intitule: "L'envie est-elle incompatible avec le bonheur ?",
piste1: "L'envie nous empêche-t-elle d'être heureux ?",
piste2: "ou peut-elle être un aiguillon vers le mieux ?",
racine1: "Envier, est-ce souffrir du bien d'autrui ?",
racine2: "ou l'envie peut-elle se transformer en émulation ?",
enjeu: "Déterminer le rapport entre envie et bonheur."
},
{
id: 161,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la reconnaissance ?",
piste1: "Le bonheur suppose-t-il d'être reconnu par autrui ?",
piste2: "ou peut-il se suffire de l'estime de soi ?",
racine1: "Notre valeur dépend-elle du regard d'autrui ?",
racine2: "ou la reconnaissance est-elle un besoin constitutif de l'existence humaine ?",
enjeu: "Examiner le rôle de la reconnaissance dans le bonheur."
},
{
id: 162,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la puissance ?",
piste1: "Le bonheur suppose-t-il la puissance d'agir ?",
piste2: "ou peut-il s'accommoder de la faiblesse ?",
racine1: "La puissance est-elle une fin ou un moyen ?",
racine2: "ou le bonheur est-il dans l'acceptation de nos limites ?",
enjeu: "Déterminer le rapport entre puissance et bonheur."
},
{
id: 163,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la liberté ?",
piste1: "Le bonheur suppose-t-il la liberté ?",
piste2: "ou peut-on être heureux sans être libre ?",
racine1: "La liberté est-elle une condition du bonheur ou le bonheur lui-même ?",
racine2: "ou la servitude peut-elle procurer une forme de bonheur ?",
enjeu: "Examiner le rapport entre liberté et bonheur."
},
{
id: 164,
notion: 'bonheur',
intitule: "Le bonheur est-il dans l'égalité ?",
piste1: "Le bonheur suppose-t-il l'égalité des conditions ?",
piste2: "ou peut-il s'accommoder des inégalités ?",
racine1: "Les inégalités sont-elles une source de frustration ?",
racine2: "ou le bonheur est-il indépendant de la position sociale ?",
enjeu: "Examiner le rapport entre égalité et bonheur."
},
{
id: 165,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la sécurité ?",
piste1: "Le bonheur suppose-t-il l'absence de danger ?",
piste2: "ou peut-il s'accommoder du risque ?",
racine1: "La sécurité est-elle une condition du bonheur ?",
racine2: "ou le risque donne-t-il à la vie son intensité ?",
enjeu: "Déterminer le rapport entre sécurité et bonheur."
},
{
id: 166,
notion: 'bonheur',
intitule: "Le risque est-il nécessaire au bonheur ?",
piste1: "Le bonheur exige-t-il de prendre des risques ?",
piste2: "ou la prudence est-elle la voie du bonheur ?",
racine1: "Ce qui est sans risque a-t-il de la valeur ?",
racine2: "ou la sécurité est-elle la condition d'une vie heureuse ?",
enjeu: "Examiner le rapport entre risque et bonheur."
},
{
id: 167,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la nouveauté ?",
piste1: "Le bonheur suppose-t-il le renouvellement de nos expériences ?",
piste2: "ou peut-il se contenter de ce qui est déjà là ?",
racine1: "La nouveauté est-elle une source de plaisir ou une fuite ?",
racine2: "ou le bonheur est-il dans la profondeur plutôt que dans la variété ?",
enjeu: "Déterminer le rapport entre nouveauté et bonheur."
},
{
id: 168,
notion: 'bonheur',
intitule: "L'habitude tue-t-elle le bonheur ?",
piste1: "L'habitude émousse-t-elle le bonheur ?",
piste2: "ou est-elle la condition d'un bonheur durable ?",
racine1: "Ce qui est répété perd-il sa valeur ?",
racine2: "ou l'habitude stabilise-t-elle ce qui autrement s'épuiserait ?",
enjeu: "Examiner le rapport entre habitude et bonheur."
},
{
id: 169,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la répétition ?",
piste1: "Le bonheur peut-il se répéter sans s'user ?",
piste2: "ou exige-t-il sans cesse de nouveaux objets ?",
racine1: "La répétition est-elle un appauvrissement ou un approfondissement ?",
racine2: "ou le bonheur est-il dans l'intensité de l'instant plutôt que dans sa reprise ?",
enjeu: "Déterminer le rapport entre répétition et bonheur."
},
{
id: 170,
notion: 'bonheur',
intitule: "Le bonheur est-il intensité ou durée ?",
piste1: "Le bonheur se mesure-t-il à son intensité ?",
piste2: "ou à sa durée ?",
racine1: "Ce qui est intense mais bref vaut-il plus que ce qui est durable mais faible ?",
racine2: "ou le bonheur est-il un équilibre entre intensité et durée ?",
enjeu: "Examiner les critères d'évaluation du bonheur."
},
{
id: 171,
notion: 'bonheur',
intitule: "Le bonheur se mesure-t-il ?",
piste1: "Peut-on quantifier le bonheur ?",
piste2: "ou échappe-t-il à toute mesure ?",
racine1: "Ce qui est mesurable est-il nécessairement comparable ?",
racine2: "ou le bonheur est-il une qualité irréductible à la quantité ?",
enjeu: "Déterminer si le bonheur est susceptible de mesure."
},
{
id: 172,
notion: 'bonheur',
intitule: "Peut-on comparer les bonheurs ?",
piste1: "Les bonheurs sont-ils comparables entre eux ?",
piste2: "ou chacun est-il incomparable ?",
racine1: "Comparer suppose-t-il une mesure commune ?",
racine2: "ou la singularité de chaque existence interdit-elle toute comparaison ?",
enjeu: "Examiner la comparabilité des bonheurs."
},
{
id: 173,
notion: 'bonheur',
intitule: "Le bonheur est-il une affaire de sentiment ?",
piste1: "Le bonheur est-il un sentiment que l'on éprouve ?",
piste2: "ou est-il un état que l'on juge ?",
racine1: "Le sentiment est-il un critère suffisant du bonheur ?",
racine2: "ou le bonheur suppose-t-il un jugement sur sa vie ?",
enjeu: "Distinguer le bonheur comme sentiment et comme jugement."
},
{
id: 174,
notion: 'bonheur',
intitule: "Le bonheur est-il une affaire de jugement ?",
piste1: "Le bonheur dépend-il du jugement que l'on porte sur sa vie ?",
piste2: "ou est-il un vécu immédiat ?",
racine1: "Juger sa vie, est-ce la transformer ?",
racine2: "ou le bonheur est-il un sentiment qui précède tout jugement ?",
enjeu: "Examiner le rôle du jugement dans le bonheur."
},
{
id: 175,
notion: 'bonheur',
intitule: "Le bonheur est-il une affaire de raison ?",
piste1: "La raison peut-elle nous rendre heureux ?",
piste2: "ou le bonheur échappe-t-il à la raison ?",
racine1: "La raison maîtrise-t-elle les passions ?",
racine2: "ou le bonheur est-il au-delà de ce que la raison peut produire ?",
enjeu: "Déterminer le rapport entre raison et bonheur."
},
{
id: 176,
notion: 'bonheur',
intitule: "La philosophie rend-elle heureux ?",
piste1: "La philosophie est-elle un chemin vers le bonheur ?",
piste2: "ou nous éloigne-t-elle du bonheur en nous rendant lucides ?",
racine1: "La sagesse est-elle un savoir ou un art de vivre ?",
racine2: "ou la philosophie est-elle une inquiétude qui ne guérit pas ?",
enjeu: "Examiner la portée de la philosophie sur la vie heureuse."
},
{
id: 177,
notion: 'bonheur',
intitule: "La connaissance de soi rend-elle heureux ?",
piste1: "Se connaître soi-même est-il une condition du bonheur ?",
piste2: "ou la connaissance de soi nous révèle-t-elle ce qui nous rend malheureux ?",
racine1: "Se connaître, est-ce se maîtriser ?",
racine2: "ou la lucidité sur soi est-elle un fardeau ?",
enjeu: "Déterminer le rapport entre connaissance de soi et bonheur."
},
{
id: 178,
notion: 'bonheur',
intitule: "L'ignorance est-elle une condition du bonheur ?",
piste1: "L'ignorance nous protège-t-elle de ce qui nous ferait souffrir ?",
piste2: "ou le bonheur exige-t-il la vérité ?",
racine1: "Ce que l'on ignore peut-il nous nuire ?",
racine2: "ou un bonheur fondé sur l'ignorance est-il un bonheur véritable ?",
enjeu: "Examiner le rapport entre ignorance et bonheur."
},
{
id: 179,
notion: 'bonheur',
intitule: "Le bonheur est-il dans le mensonge ?",
piste1: "Le mensonge peut-il nous rendre heureux ?",
piste2: "ou le bonheur exige-t-il la vérité ?",
racine1: "Ce qui est faux peut-il avoir de la valeur pour nous ?",
racine2: "ou un bonheur fondé sur le mensonge est-il fragile ?",
enjeu: "Déterminer le rapport entre mensonge et bonheur."
},
{
id: 180,
notion: 'bonheur',
intitule: "Le bonheur est-il dans le rêve ?",
piste1: "Le rêve nous rend-il heureux ?",
piste2: "ou nous éloigne-t-il du bonheur réel ?",
racine1: "Le rêve est-il une satisfaction imaginaire ou une fuite ?",
racine2: "ou le rêve est-il un moteur qui nous porte vers le réel ?",
enjeu: "Examiner le rapport entre rêve et bonheur."
},
{
id: 181,
notion: 'bonheur',
intitule: "Le bonheur est-il dans l'imagination ?",
piste1: "L'imagination nous rend-elle heureux ?",
piste2: "ou nous enferme-t-elle dans des illusions ?",
racine1: "L'imagination comble-t-elle nos manques ou les creuse-t-elle ?",
racine2: "ou l'imagination est-elle une puissance de création qui enrichit la vie ?",
enjeu: "Déterminer le rapport entre imagination et bonheur."
},
{
id: 182,
notion: 'bonheur',
intitule: "Le bonheur est-il dans l'espérance ?",
piste1: "L'espérance nous rend-elle heureux ?",
piste2: "ou nous empêche-t-elle de vivre le présent ?",
racine1: "L'espérance est-elle une joie anticipée ou une insatisfaction ?",
racine2: "ou le bonheur est-il dans l'acceptation de ce qui est ?",
enjeu: "Examiner le rapport entre espérance et bonheur."
},
{
id: 183,
notion: 'bonheur',
intitule: "La tristesse est-elle incompatible avec le bonheur ?",
piste1: "La tristesse exclut-elle le bonheur ?",
piste2: "ou le bonheur peut-il inclure la tristesse ?",
racine1: "Le bonheur est-il un état sans mélange ?",
racine2: "ou la tristesse est-elle une composante de la vie heureuse ?",
enjeu: "Déterminer le rapport entre tristesse et bonheur."
},
{
id: 184,
notion: 'bonheur',
intitule: "Le bonheur est-il dans l'acceptation ?",
piste1: "Le bonheur suppose-t-il d'accepter ce qui est ?",
piste2: "ou exige-t-il de transformer ce qui nous déplaît ?",
racine1: "Accepter, est-ce se résigner ou se réconcilier ?",
racine2: "ou le bonheur est-il dans la lutte contre ce qui nous aliène ?",
enjeu: "Examiner le rapport entre acceptation et bonheur."
},
{
id: 185,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la révolte ?",
piste1: "La révolte est-elle un chemin vers le bonheur ?",
piste2: "ou nous condamne-t-elle à l'insatisfaction ?",
racine1: "Se révolter, est-ce refuser ce qui nous aliène ?",
racine2: "ou la révolte est-elle une impossibilité de se réconcilier avec le monde ?",
enjeu: "Déterminer le rapport entre révolte et bonheur."
},
{
id: 186,
notion: 'bonheur',
intitule: "Le bonheur est-il dans l'engagement ?",
piste1: "L'engagement donne-t-il un sens qui rend heureux ?",
piste2: "ou nous expose-t-il à la déception et à l'échec ?",
racine1: "S'engager, est-ce se donner une fin qui dépasse soi ?",
racine2: "ou le bonheur est-il dans la préservation de soi ?",
enjeu: "Examiner le rapport entre engagement et bonheur."
},
{
id: 187,
notion: 'bonheur',
intitule: "Le bonheur est-il dans le don ?",
piste1: "Donner nous rend-il heureux ?",
piste2: "ou le bonheur est-il dans la possession ?",
racine1: "Donner, est-ce perdre ou se réaliser ?",
racine2: "ou le bonheur est-il dans le rapport à autrui plutôt que dans l'avoir ?",
enjeu: "Déterminer le rapport entre don et bonheur."
},
{
id: 188,
notion: 'bonheur',
intitule: "Le bonheur est-il dans le pardon ?",
piste1: "Le pardon est-il une condition du bonheur ?",
piste2: "ou le ressentiment est-il nécessaire à la justice ?",
racine1: "Pardonner, est-ce effacer le mal ou le surmonter ?",
racine2: "ou le ressentiment nous enferme-t-il dans le passé ?",
enjeu: "Examiner le rapport entre pardon et bonheur."
},
{
id: 189,
notion: 'bonheur',
intitule: "Le bonheur est-il dans l'oubli ?",
piste1: "L'oubli est-il une condition du bonheur ?",
piste2: "ou le bonheur exige-t-il la mémoire ?",
racine1: "Oublier, est-ce se libérer ou se perdre ?",
racine2: "ou la mémoire est-elle nécessaire à l'identité et au sens ?",
enjeu: "Déterminer le rapport entre oubli et bonheur."
},
{
id: 190,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la mémoire ?",
piste1: "La mémoire nous rend-elle heureux ?",
piste2: "ou nous enferme-t-elle dans le passé ?",
racine1: "Se souvenir, est-ce faire revivre ou ressasser ?",
racine2: "ou le bonheur est-il dans le présent plutôt que dans le passé ?",
enjeu: "Examiner le rapport entre mémoire et bonheur."
},
{
id: 191,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la paix ?",
piste1: "La paix est-elle une condition du bonheur ?",
piste2: "ou le bonheur peut-il s'accommoder du conflit ?",
racine1: "La paix est-elle absence de guerre ou harmonie intérieure ?",
racine2: "ou le conflit est-il une composante de la vie ?",
enjeu: "Déterminer le rapport entre paix et bonheur."
},
{
id: 192,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la fête ?",
piste1: "La fête est-elle un moment de bonheur ?",
piste2: "ou n'est-elle qu'une parenthèse sans lendemain ?",
racine1: "La fête suspend-elle l'ordre ordinaire ou le révèle-t-elle ?",
racine2: "ou le bonheur est-il dans la durée plutôt que dans l'exception ?",
enjeu: "Examiner le rapport entre fête et bonheur."
},
{
id: 193,
notion: 'bonheur',
intitule: "Le bonheur est-il dans le jeu ?",
piste1: "Le jeu est-il une forme de bonheur ?",
piste2: "ou n'est-il qu'un divertissement ?",
racine1: "Le jeu est-il une activité sans fin ou une fin en soi ?",
racine2: "ou le bonheur est-il dans le sérieux de l'existence ?",
enjeu: "Déterminer le rapport entre jeu et bonheur."
},
{
id: 194,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la création ?",
piste1: "Créer nous rend-il heureux ?",
piste2: "ou le bonheur est-il dans la réception plutôt que dans la production ?",
racine1: "Créer, est-ce se réaliser ou se fuir ?",
racine2: "ou le bonheur est-il dans la contemplation de ce qui est ?",
enjeu: "Examiner le rapport entre création et bonheur."
},
{
id: 195,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la beauté ?",
piste1: "La beauté nous rend-elle heureux ?",
piste2: "ou le bonheur est-il indépendant de l'expérience esthétique ?",
racine1: "La beauté est-elle un plaisir ou une révélation ?",
racine2: "ou le bonheur est-il dans le rapport au sens plutôt qu'à la forme ?",
enjeu: "Déterminer le rapport entre beauté et bonheur."
},
{
id: 196,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la religion ?",
piste1: "La religion nous rend-elle heureux ?",
piste2: "ou le bonheur peut-il se passer de toute croyance ?",
racine1: "La religion est-elle une consolation ou une vérité ?",
racine2: "ou le bonheur est-il dans l'acceptation de la finitude sans au-delà ?",
enjeu: "Examiner le rapport entre religion et bonheur."
},
{
id: 197,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la technique ?",
piste1: "La technique nous rend-elle heureux ?",
piste2: "ou nous éloigne-t-elle du bonheur ?",
racine1: "La technique comble-t-elle nos manques ou en crée-t-elle de nouveaux ?",
racine2: "ou le bonheur est-il dans la limitation de nos besoins ?",
enjeu: "Déterminer le rapport entre technique et bonheur."
},
{
id: 198,
notion: 'bonheur',
intitule: "Le bonheur est-il dans la science ?",
piste1: "La science nous rend-elle heureux ?",
piste2: "ou le bonheur échappe-t-il à la connaissance scientifique ?",
racine1: "La science nous donne-t-elle les moyens de nos fins ?",
racine2: "ou le bonheur est-il une question que la science ne peut résoudre ?",
enjeu: "Examiner le rapport entre science et bonheur."
},
{
id: 199,
notion: 'bonheur',
intitule: "Le bonheur est-il dans le progrès ?",
piste1: "Le progrès nous rend-il heureux ?",
piste2: "ou le bonheur est-il indépendant du progrès ?",
racine1: "Le progrès améliore-t-il la condition humaine ou seulement ses moyens ?",
racine2: "ou le bonheur est-il dans la sagesse plutôt que dans l'accumulation ?",
enjeu: "Déterminer le rapport entre progrès et bonheur."
},
{
id: 200,
notion: 'bonheur',
intitule: "Le bonheur peut-il se définir ?",
piste1: "Peut-on donner une définition universelle du bonheur ?",
piste2: "ou le bonheur est-il une notion plurielle qui échappe à la définition ?",
racine1: "Définir suppose-t-il une essence commune ?",
racine2: "ou le bonheur est-il une famille de vécus aux contours ouverts ?",
enjeu: "Examiner si le bonheur est susceptible d'une définition."
},
{
id: 201,
notion: 'conscience',
intitule: "La conscience se définit-elle ?",
piste1: "Peut-on énoncer ce qu'est la conscience sans la dénaturer ?",
piste2: "ou échappe-t-elle à toute définition parce qu'elle est ce par quoi tout est défini ?",
racine1: "Définir suppose-t-il de faire de son objet une chose parmi les autres ?",
racine2: "ou la conscience est-elle la condition de toute définition, donc indéfinissable ?",
enjeu: "Examiner si la conscience peut devenir un objet de savoir comme les autres."
},
{
id: 202,
notion: 'conscience',
intitule: "La conscience est-elle un pouvoir ou un état ?",
piste1: "La conscience est-elle une capacité d'agir et de saisir ?",
piste2: "ou n'est-elle qu'une manière d'être, un état que l'on subit ?",
racine1: "Ce qui est actif est-il nécessairement une puissance ?",
racine2: "ou la conscience est-elle d'abord une présence passive à ce qui arrive ?",
enjeu: "Déterminer si la conscience est activité ou simple présence."
},
{
id: 203,
notion: 'conscience',
intitule: "La conscience est-elle toujours conscience de quelque chose ?",
piste1: "Toute conscience vise-t-elle un objet qui lui est extérieur ?",
piste2: "ou peut-elle être conscience d'elle-même sans objet ?",
racine1: "Connaître suppose-t-il une distinction entre le sujet et l'objet ?",
racine2: "ou la conscience peut-elle se saisir elle-même sans se diviser ?",
enjeu: "Examiner la structure intentionnelle de la conscience."
},
{
id: 204,
notion: 'conscience',
intitule: "La conscience est-elle un théâtre intérieur ?",
piste1: "Nos pensées se déroulent-elles devant un spectateur intérieur ?",
piste2: "ou cette image suppose-t-elle à tort un observateur dans l'observateur ?",
racine1: "Voir suppose-t-il toujours quelqu'un qui voit ?",
racine2: "ou la conscience est-elle le phénomène lui-même, sans double spectateur ?",
enjeu: "Interroger le modèle du regard intérieur et ses impasses."
},
{
id: 205,
notion: 'conscience',
intitule: "La conscience est-elle une chose ?",
piste1: "La conscience est-elle une réalité que l'on pourrait décrire comme un objet ?",
piste2: "ou n'existe-t-elle que comme acte et comme relation ?",
racine1: "Tout ce qui existe existe-t-il sur le mode de la chose ?",
racine2: "ou ce qui pense a-t-il un mode d'être irréductible à celui des choses ?",
enjeu: "Déterminer le statut d'être de la conscience."
},
{
id: 206,
notion: 'conscience',
intitule: "La conscience peut-elle être un objet de science ?",
piste1: "La conscience peut-elle être étudiée objectivement ?",
piste2: "ou sa subjectivité la soustrait-elle à la méthode scientifique ?",
racine1: "La science exige-t-elle des faits observables par tous ?",
racine2: "ou le vécu à la première personne est-il un datum irréductible ?",
enjeu: "Examiner les conditions d'une connaissance scientifique de la conscience."
},
{
id: 207,
notion: 'conscience',
intitule: "La conscience se réduit-elle au cerveau ?",
piste1: "Les états de conscience ne sont-ils que des états neuronaux ?",
piste2: "ou l'expérience vécue excède-t-elle ce que le cerveau peut expliquer ?",
racine1: "Expliquer un phénomène, est-ce le ramener à ses causes matérielles ?",
racine2: "ou la qualité de ce qui est ressenti résiste-t-elle à toute réduction ?",
enjeu: "Déterminer si la conscience est explicable par le fonctionnement cérébral."
},
{
id: 208,
notion: 'conscience',
intitule: "La conscience est-elle un mystère ?",
piste1: "La conscience restera-t-elle toujours inexpliquée ?",
piste2: "ou son obscurité n'est-elle qu'un état provisoire de notre savoir ?",
racine1: "Ce que nous ne comprenons pas est-il incompréhensible en principe ?",
racine2: "ou la limite est-elle dans nos concepts plutôt que dans la chose ?",
enjeu: "Distinguer l'ignorance provisoire et l'inexplicabilité de principe."
},
{
id: 209,
notion: 'conscience',
intitule: "La conscience est-elle le propre de l'homme ?",
piste1: "Seul l'être humain se rapporte-t-il à lui-même comme à un soi ?",
piste2: "ou d'autres êtres vivants possèdent-ils une forme de conscience ?",
racine1: "La conscience suppose-t-elle le langage et la réflexion ?",
racine2: "ou le sentiment de soi peut-il précéder la pensée conceptuelle ?",
enjeu: "Examiner la frontière entre conscience humaine et conscience animale."
},
{
id: 210,
notion: 'conscience',
intitule: "Les animaux ont-ils une conscience ?",
piste1: "Les animaux éprouvent-ils quelque chose de leur propre existence ?",
piste2: "ou leur comportement s'explique-t-il sans qu'il y ait un sujet ?",
racine1: "Le comportement observable suffit-il à établir une expérience vécue ?",
racine2: "ou la douleur et le plaisir supposent-ils un rapport à soi ?",
enjeu: "Déterminer ce qui permet d'attribuer une conscience à un être vivant."
},
{
id: 211,
notion: 'conscience',
intitule: "Une machine peut-elle être consciente ?",
piste1: "Un système assez complexe pourrait-il éprouver quelque chose ?",
piste2: "ou la conscience exige-t-elle un vivant et une existence vécue ?",
racine1: "La conscience dépend-elle de l'organisation fonctionnelle ou de la matière ?",
racine2: "ou simuler un comportement conscient n'est-il pas être conscient ?",
enjeu: "Examiner les conditions matérielles et structurelles de la conscience."
},
{
id: 212,
notion: 'conscience',
intitule: "La conscience est-elle une affaire de degré ?",
piste1: "Existe-t-il des degrés de conscience, de la veille au sommeil ?",
piste2: "ou la conscience est-elle un seuil que l'on franchit ou non ?",
racine1: "Ce qui varie en intensité change-t-il de nature ?",
racine2: "ou y a-t-il une différence de nature entre avoir et n'avoir pas conscience ?",
enjeu: "Déterminer si la conscience est continue ou discontinue."
},
{
id: 213,
notion: 'conscience',
intitule: "La conscience de soi est-elle naturelle ?",
piste1: "Chacun se rapporte-t-il spontanément à lui-même ?",
piste2: "ou la conscience de soi se construit-elle dans l'échange et l'éducation ?",
racine1: "Ce qui est universel est-il pour autant inné ?",
racine2: "ou le rapport à soi suppose-t-il l'intériorisation d'un rapport à l'autre ?",
enjeu: "Examiner l'origine naturelle ou sociale de la conscience de soi."
},
{
id: 214,
notion: 'conscience',
intitule: "Peut-on se connaître soi-même ?",
piste1: "Le sujet peut-il faire de lui-même un objet de connaissance ?",
piste2: "ou celui qui connaît et celui qui est connu font-ils obstacle à toute saisie ?",
racine1: "Connaître suppose-t-il une distance entre le sujet et l'objet ?",
racine2: "ou la proximité immédiate à soi est-elle un privilège de connaissance ?",
enjeu: "Déterminer les possibilités et les limites de la connaissance de soi."
},
{
id: 215,
notion: 'conscience',
intitule: "L'introspection est-elle une méthode ?",
piste1: "Le regard tourné vers soi peut-il produire des résultats contrôlables ?",
piste2: "ou n'est-il qu'une opinion sur soi, sans garantie ?",
racine1: "Une méthode exige-t-elle des résultats vérifiables par autrui ?",
racine2: "ou l'observation intérieure a-t-elle sa rigueur propre ?",
enjeu: "Examiner la valeur méthodique de l'examen de soi."
},
{
id: 216,
notion: 'conscience',
intitule: "Sommes-nous transparents à nous-mêmes ?",
piste1: "Rien de ce que nous vivons ne nous échappe-t-il ?",
piste2: "ou une part de nous reste-t-elle opaque à notre propre regard ?",
racine1: "Ce qui est en nous est-il nécessairement connu de nous ?",
racine2: "ou la conscience est-elle une lumière qui laisse des zones d'ombre ?",
enjeu: "Déterminer l'étendue de la conscience sur la vie psychique."
},
{
id: 217,
notion: 'conscience',
intitule: "La conscience de soi est-elle une illusion ?",
piste1: "Le sentiment d'être un soi correspond-il à une réalité ?",
piste2: "ou n'est-il qu'une construction utile produite par notre fonctionnement ?",
racine1: "Ce qui est éprouvé avec évidence est-il pour autant vrai ?",
racine2: "ou l'unité du moi est-elle un effet sans fondement substantiel ?",
enjeu: "Examiner la réalité du moi tel que la conscience le donne."
},
{
id: 218,
notion: 'conscience',
intitule: "Le moi est-il une substance ?",
piste1: "Y a-t-il en nous un support permanent de tous nos états ?",
piste2: "ou le moi n'est-il que la liaison de ces états entre eux ?",
racine1: "Ce qui change suppose-t-il quelque chose qui ne change pas ?",
racine2: "ou la permanence n'est-elle qu'une apparence produite par la continuité ?",
enjeu: "Déterminer si le moi est un sujet substantiel ou une unité de liaison."
},
{
id: 219,
notion: 'conscience',
intitule: "Le moi est-il le sujet de la conscience ?",
piste1: "Toute conscience suppose-t-elle un moi qui la possède ?",
piste2: "ou la conscience précède-t-elle le moi qu'elle constitue ensuite ?",
racine1: "Un acte suppose-t-il nécessairement un agent qui l'accomplit ?",
racine2: "ou le moi est-il un produit de la conscience plutôt que son principe ?",
enjeu: "Examiner l'antériorité respective du moi et de la conscience."
},
{
id: 220,
notion: 'conscience',
intitule: "Restons-nous le même au fil du temps ?",
piste1: "Notre identité persiste-t-elle à travers tous nos changements ?",
piste2: "ou celui que nous étions est-il devenu un autre ?",
racine1: "L'identité suppose-t-elle l'invariance des propriétés ?",
racine2: "ou peut-on être le même sans être semblable à soi ?",
enjeu: "Déterminer ce qui fonde la permanence de l'identité personnelle."
},
{
id: 221,
notion: 'conscience',
intitule: "La mémoire fonde-t-elle l'identité personnelle ?",
piste1: "Suis-je le même parce que je me souviens de ce que j'ai été ?",
piste2: "ou la mémoire suppose-t-elle déjà l'identité qu'elle prétend fonder ?",
racine1: "Se souvenir, est-ce reconnaître que c'est bien moi qui ai vécu cela ?",
racine2: "ou la continuité du souvenir crée-t-elle l'unité qu'elle constate ?",
enjeu: "Examiner le rôle de la mémoire dans la constitution du soi."
},
{
id: 222,
notion: 'conscience',
intitule: "Le corps fonde-t-il l'identité personnelle ?",
piste1: "Mon identité tient-elle à la permanence de mon corps ?",
piste2: "ou puis-je être le même alors que mon corps se transforme entièrement ?",
racine1: "L'unité d'un organisme suffit-elle à faire l'unité d'une personne ?",
racine2: "ou l'identité personnelle est-elle d'un autre ordre que l'identité biologique ?",
enjeu: "Déterminer la part du corps dans l'identité de la personne."
},
{
id: 223,
notion: 'conscience',
intitule: "L'identité personnelle est-elle un récit ?",
piste1: "Sommes-nous l'histoire que nous nous racontons sur nous-mêmes ?",
piste2: "ou cette histoire ne fait-elle que recouvrir une identité déjà donnée ?",
racine1: "L'unité d'une vie est-elle celle d'un récit que l'on compose ?",
racine2: "ou raconter sa vie suppose-t-il un sujet antérieur au récit ?",
enjeu: "Examiner la dimension narrative de la conscience de soi."
},
{
id: 224,
notion: 'conscience',
intitule: "Peut-on être étranger à soi-même ?",
piste1: "Certaines de nos conduites nous échappent-elles au point de nous étonner ?",
piste2: "ou ce qui est nôtre nous est-il nécessairement familier ?",
racine1: "Ce qui vient de nous est-il pour autant reconnu par nous ?",
racine2: "ou l'étrangeté à soi révèle-t-elle une division du sujet ?",
enjeu: "Déterminer les formes de l'aliénation de la conscience à elle-même."
},
{
id: 225,
notion: 'conscience',
intitule: "La conscience est-elle une ou multiple ?",
piste1: "Notre conscience forme-t-elle une unité indivisible ?",
piste2: "ou coexistent en nous plusieurs courants de conscience ?",
racine1: "Ce qui est vécu ensemble suppose-t-il un foyer unique ?",
racine2: "ou l'unité apparente masque-t-elle une multiplicité de processus ?",
enjeu: "Examiner l'unité de la conscience et ses divisions possibles."
},
{
id: 226,
notion: 'conscience',
intitule: "Peut-on perdre la conscience de soi ?",
piste1: "Le rapport à soi peut-il s'interrompre sans que la conscience disparaisse ?",
piste2: "ou toute conscience implique-t-elle un minimum de présence à soi ?",
racine1: "L'absorption dans une action supprime-t-elle le sujet ?",
racine2: "ou se perdre de vue est-il encore une manière d'être à soi ?",
enjeu: "Distinguer la conscience du monde et la conscience de soi."
},
{
id: 227,
notion: 'conscience',
intitule: "La conscience de soi suppose-t-elle autrui ?",
piste1: "Puis-je me connaître sans passer par le regard d'un autre ?",
piste2: "ou la conscience de soi naît-elle de la reconnaissance par autrui ?",
racine1: "Le rapport à soi est-il premier ou dérivé du rapport à l'autre ?",
racine2: "ou me voir vu est-il la condition pour me voir moi-même ?",
enjeu: "Examiner la médiation d'autrui dans la conscience de soi."
},
{
id: 228,
notion: 'conscience',
intitule: "Peut-on être conscient de soi sans se juger ?",
piste1: "Se saisir soi-même, est-ce nécessairement s'évaluer ?",
piste2: "ou une conscience de soi neutre est-elle possible ?",
racine1: "Tout regard sur soi implique-t-il une norme appliquée à soi ?",
racine2: "ou la description de soi peut-elle se séparer de l'estime de soi ?",
enjeu: "Distinguer la conscience de soi et le jugement sur soi."
},
{
id: 229,
notion: 'conscience',
intitule: "La conscience est-elle source de certitude ?",
piste1: "Ce que je vis immédiatement est-il indubitable ?",
piste2: "ou l'évidence subjective peut-elle être trompeuse ?",
racine1: "La certitude se fonde-t-elle sur l'évidence ou sur la vérification ?",
racine2: "ou le fait d'éprouver quelque chose résiste-t-il à tout doute ?",
enjeu: "Déterminer si la conscience offre un fondement sûr au savoir."
},
{
id: 230,
notion: 'conscience',
intitule: "Le doute peut-il atteindre la conscience ?",
piste1: "Puis-je douter que je pense au moment où je doute ?",
piste2: "ou ce doute confirme-t-il l'existence de celui qui doute ?",
racine1: "Douter d'une chose suppose-t-il que cette chose puisse être fausse ?",
racine2: "ou l'acte de douter est-il lui-même une existence certaine ?",
enjeu: "Examiner la résistance de la conscience au doute méthodique."
},
{
id: 231,
notion: 'conscience',
intitule: "La conscience peut-elle se tromper sur elle-même ?",
piste1: "Nos interprétations de nos propres états sont-elles fiables ?",
piste2: "ou la conscience a-t-elle un accès privilégié à ce qu'elle vit ?",
racine1: "Éprouver un état et le connaître sont-ils la même chose ?",
racine2: "ou l'interprétation introduit-elle l'erreur au cœur de l'évidence ?",
enjeu: "Déterminer la fiabilité de la conscience sur ses propres contenus."
},
{
id: 232,
notion: 'conscience',
intitule: "Peut-on se mentir à soi-même ?",
piste1: "Le mensonge à soi suppose-t-il de savoir ce que l'on se cache ?",
piste2: "ou cette contradiction montre-t-elle qu'il faut diviser le sujet ?",
racine1: "Mentir suppose-t-il de connaître la vérité que l'on dissimule ?",
racine2: "ou peut-on ignorer activement ce que l'on sait d'une autre manière ?",
enjeu: "Examiner la possibilité et la structure du mensonge à soi."
},
{
id: 233,
notion: 'conscience',
intitule: "L'authenticité est-elle possible ?",
piste1: "Puis-je coïncider avec ce que je suis vraiment ?",
piste2: "ou toute conscience de soi introduit-elle un écart et un rôle ?",
racine1: "Être soi suppose-t-il un moi donné à retrouver ?",
racine2: "ou le soi est-il une tâche à accomplir plutôt qu'une donnée ?",
enjeu: "Déterminer le sens et la possibilité d'un rapport authentique à soi."
},
{
id: 234,
notion: 'conscience',
intitule: "La conscience est-elle un obstacle à la vérité ?",
piste1: "Nos représentations nous éloignent-elles des choses telles qu'elles sont ?",
piste2: "ou toute vérité suppose-t-elle un sujet qui la saisit ?",
racine1: "Connaître, est-ce recevoir le réel ou le transformer ?",
racine2: "ou la subjectivité est-elle la condition d'accès au vrai plutôt qu'un filtre ?",
enjeu: "Examiner le rôle de la subjectivité dans l'accès à la vérité."
},
{
id: 235,
notion: 'conscience',
intitule: "La lucidité est-elle un fardeau ?",
piste1: "Voir clair sur soi et sur le monde nous fait-il souffrir ?",
piste2: "ou la lucidité est-elle la condition d'une vie maîtrisée ?",
racine1: "Le bonheur suppose-t-il une part d'ignorance ?",
racine2: "ou ce qui est connu cesse-t-il d'être subi ?",
enjeu: "Évaluer le coût et le bénéfice de la conscience lucide."
},
{
id: 236,
notion: 'conscience',
intitule: "Faut-il se connaître pour bien vivre ?",
piste1: "La connaissance de soi est-elle nécessaire à la conduite de la vie ?",
piste2: "ou peut-on bien vivre sans s'examiner ?",
racine1: "Bien agir suppose-t-il de savoir ce que l'on veut vraiment ?",
racine2: "ou l'examen de soi détourne-t-il de l'action et de la vie ?",
enjeu: "Examiner la valeur pratique de la connaissance de soi."
},
{
id: 237,
notion: 'conscience',
intitule: "L'estime de soi est-elle une connaissance de soi ?",
piste1: "S'estimer, est-ce se connaître à sa juste valeur ?",
piste2: "ou l'estime de soi déforme-t-elle nécessairement le regard sur soi ?",
racine1: "Évaluer suppose-t-il une mesure objective de ce que l'on est ?",
racine2: "ou le rapport à soi est-il d'abord affectif et non descriptif ?",
enjeu: "Distinguer le jugement de valeur sur soi et la connaissance de soi."
},
{
id: 238,
notion: 'conscience',
intitule: "La conscience est-elle un sens ?",
piste1: "La conscience est-elle un sens interne qui nous informe sur nous-mêmes ?",
piste2: "ou n'est-elle que la condition générale de tout exercice des sens ?",
racine1: "Un sens suppose-t-il un organe et un domaine d'objets propre ?",
racine2: "ou la conscience accompagne-t-elle toute sensation sans en être une ?",
enjeu: "Déterminer si la conscience est une faculté parmi d'autres."
},
{
id: 239,
notion: 'conscience',
intitule: "Peut-on être conscient sans le savoir ?",
piste1: "La conscience exige-t-elle de se savoir conscient ?",
piste2: "ou peut-on vivre un état sans en former la pensée ?",
racine1: "Un vécu non formulé existe-t-il pour celui qui le vit ?",
racine2: "ou la conscience de la conscience est-elle un acte second et distinct ?",
enjeu: "Distinguer conscience immédiate et conscience réfléchie."
},
{
id: 240,
notion: 'conscience',
intitule: "La conscience est-elle un savoir immédiat ?",
piste1: "La conscience nous donne-t-elle son contenu sans intermédiaire ?",
piste2: "ou tout savoir de soi est-il déjà médiatisé par des concepts ?",
racine1: "Existe-t-il une connaissance sans langage ni interprétation ?",
racine2: "ou l'immédiateté est-elle un effet de l'habitude de se comprendre ?",
enjeu: "Examiner l'immédiateté supposée de la conscience."
},
{
id: 241,
notion: 'conscience',
intitule: "La conscience morale est-elle innée ?",
piste1: "Portons-nous en nous, dès la naissance, le sens du bien et du mal ?",
piste2: "ou la conscience morale est-elle entièrement acquise ?",
racine1: "Ce qui est universel dans une espèce est-il inscrit dans sa nature ?",
racine2: "ou l'universalité apparente s'explique-t-elle par des conditions communes d'éducation ?",
enjeu: "Déterminer l'origine de la conscience morale."
},
{
id: 242,
notion: 'conscience',
intitule: "La conscience morale s'éduque-t-elle ?",
piste1: "Le sens moral se forme-t-il par l'enseignement et l'exemple ?",
piste2: "ou l'éducation ne fait-elle que réveiller un sens déjà présent ?",
racine1: "Apprendre le bien, est-ce acquérir une règle ou développer une disposition ?",
racine2: "ou la morale s'enseigne-t-elle comme un savoir-faire pratique ?",
enjeu: "Examiner la formation de la conscience morale."
},
{
id: 243,
notion: 'conscience',
intitule: "La conscience morale est-elle universelle ?",
piste1: "Tous les hommes partagent-ils les mêmes exigences morales ?",
piste2: "ou la conscience morale varie-t-elle selon les cultures et les époques ?",
racine1: "La diversité des mœurs prouve-t-elle la diversité des consciences ?",
racine2: "ou sous des règles différentes retrouve-t-on une même exigence de justice ?",
enjeu: "Déterminer la portée universelle du jugement moral."
},
{
id: 244,
notion: 'conscience',
intitule: "La conscience morale est-elle une voix intérieure ?",
piste1: "Le bien se signale-t-il à nous par un avertissement intime ?",
piste2: "ou cette voix n'est-elle que l'écho des interdits intériorisés ?",
racine1: "Ce qui parle en nous avec autorité vient-il de nous ?",
racine2: "ou l'intériorisation d'une loi sociale produit-elle un sentiment d'obligation ?",
enjeu: "Examiner l'origine et l'autorité du sentiment d'obligation."
},
{
id: 245,
notion: 'conscience',
intitule: "La conscience morale est-elle infaillible ?",
piste1: "Suivre sa conscience garantit-il d'agir bien ?",
piste2: "ou une conscience sincère peut-elle approuver le pire ?",
racine1: "La sincérité d'un jugement suffit-elle à sa justesse ?",
racine2: "ou la conscience doit-elle être éclairée par la réflexion et l'information ?",
enjeu: "Distinguer la sincérité et la validité du jugement moral."
},
{
id: 246,
notion: 'conscience',
intitule: "Peut-on aller contre sa conscience ?",
piste1: "Pouvons-nous agir tout en sachant que nous devrions nous abstenir ?",
piste2: "ou la conscience est-elle une contrainte que l'on ne peut violer ?",
racine1: "Savoir ce qu'il faut faire suffit-il à le faire ?",
racine2: "ou la volonté peut-elle se détacher du jugement moral ?",
enjeu: "Examiner le rapport entre jugement moral et volonté."
},
{
id: 247,
notion: 'conscience',
intitule: "La conscience morale est-elle un sentiment ?",
piste1: "Le bien et le mal se signalent-ils à nous par une émotion ?",
piste2: "ou la conscience morale est-elle un acte de la raison ?",
racine1: "Un sentiment peut-il fonder une obligation valable pour tous ?",
racine2: "ou la sympathie et l'indignation sont-elles les premiers juges du bien ?",
enjeu: "Déterminer la nature affective ou rationnelle du sens moral."
},
{
id: 248,
notion: 'conscience',
intitule: "La conscience morale est-elle une loi que l'on se donne ?",
piste1: "L'obligation morale vient-elle de la raison qui se légifère elle-même ?",
piste2: "ou toute loi suppose-t-elle une autorité extérieure au sujet ?",
racine1: "Peut-on être à la fois l'auteur et le sujet d'une loi ?",
racine2: "ou l'autonomie morale est-elle la condition d'une obligation véritable ?",
enjeu: "Examiner l'autonomie de la conscience morale."
},
{
id: 249,
notion: 'conscience',
intitule: "La conscience suffit-elle pour bien agir ?",
piste1: "Une intention droite garantit-elle la valeur de l'action ?",
piste2: "ou faut-il aussi juger des conséquences et des circonstances ?",
racine1: "La moralité d'une acte tient-elle à son intention ou à ses effets ?",
racine2: "ou la bonne volonté sans discernement peut-elle nuire ?",
enjeu: "Déterminer les conditions d'une action moralement bonne."
},
{
id: 250,
notion: 'conscience',
intitule: "Sommes-nous responsables de ce dont nous n'avons pas conscience ?",
piste1: "L'ignorance excuse-t-elle celui qui a causé un dommage ?",
piste2: "ou certaines ignorances sont-elles elles-mêmes fautives ?",
racine1: "La responsabilité suppose-t-elle la connaissance de ce que l'on fait ?",
racine2: "ou négliger de savoir est-il déjà une faute ?",
enjeu: "Examiner les limites de la responsabilité en cas d'ignorance."
},
{
id: 251,
notion: 'conscience',
intitule: "La conscience est-elle la condition du mérite ?",
piste1: "Une action ne mérite-t-elle éloge que si elle est accomplie lucidement ?",
piste2: "ou la valeur d'un acte est-elle indépendante de la conscience de son auteur ?",
racine1: "Mériter suppose-t-il avoir voulu le bien pour lui-même ?",
racine2: "ou le résultat heureux suffit-il à fonder notre estime ?",
enjeu: "Distinguer la valeur d'un acte et le mérite de son auteur."
},
{
id: 252,
notion: 'conscience',
intitule: "La culpabilité est-elle un savoir de soi ?",
piste1: "Se sentir coupable, est-ce connaître ce que l'on a fait ?",
piste2: "ou le sentiment de culpabilité peut-il être sans objet réel ?",
racine1: "Un sentiment porte-t-il nécessairement sur un fait vrai ?",
racine2: "ou la culpabilité est-elle un affect qui précède tout jugement ?",
enjeu: "Examiner la valeur cognitive du sentiment de culpabilité."
},
{
id: 253,
notion: 'conscience',
intitule: "La conscience du mal est-elle un mal ?",
piste1: "Savoir que l'on a mal agir nous fait-il souffrir inutilement ?",
piste2: "ou cette souffrance est-elle la condition d'un changement ?",
racine1: "Ce qui fait souffrir est-il pour autant à éviter ?",
racine2: "ou le trouble de la conscience est-il le moteur de la réparation ?",
enjeu: "Évaluer la fonction morale de la souffrance de la conscience."
},
{
id: 254,
notion: 'conscience',
intitule: "La honte suppose-t-elle le regard d'autrui ?",
piste1: "Ne peut-on avoir honte que devant quelqu'un ?",
piste2: "ou peut-on avoir honte de soi devant soi seul ?",
racine1: "La honte porte-t-elle sur ce que l'autre voit de nous ?",
racine2: "ou le regard intériorisé d'autrui suffit-il à constituer la honte ?",
enjeu: "Examiner la structure sociale de la conscience de soi affective."
},
{
id: 255,
notion: 'conscience',
intitule: "Peut-on avoir la conscience tranquille ?",
piste1: "Une vie sans reproche est-elle possible ?",
piste2: "ou la tranquillité de conscience suppose-t-elle un aveuglement ?",
racine1: "L'exigence morale a-t-elle un terme où l'on peut se satisfaire ?",
racine2: "ou l'examen de soi découvre-t-il toujours de nouveaux manques ?",
enjeu: "Déterminer si la bonne conscience est un idéal ou une illusion."
},
{
id: 256,
notion: 'conscience',
intitule: "L'objection de conscience est-elle un droit ?",
piste1: "Peut-on refuser d'obéir à la loi au nom de sa conscience ?",
piste2: "ou la conscience individuelle doit-elle céder devant la loi commune ?",
racine1: "Une conviction personnelle peut-elle fonder une exception juridique ?",
racine2: "ou la reconnaissance de la conscience est-elle une exigence de la démocratie ?",
enjeu: "Examiner la place de la conscience individuelle dans l'ordre juridique."
},
{
id: 257,
notion: 'conscience',
intitule: "La conscience peut-elle être dépassée par ce qu'elle vit ?",
piste1: "Nos émotions et nos expériences excèdent-elles notre capacité à les saisir ?",
piste2: "ou rien n'est vécu qui ne soit, d'une manière ou d'une autre, conscient ?",
racine1: "Vivre quelque chose et le comprendre sont-ils deux actes distincts ?",
racine2: "ou l'intensité d'un vécu en obscurcit-il la conscience ?",
enjeu: "Déterminer l'écart entre l'expérience vécue et sa saisie consciente."
},
{
id: 258,
notion: 'conscience',
intitule: "La conscience est-elle maître dans sa propre maison ?",
piste1: "La conscience gouverne-t-elle l'ensemble de notre vie psychique ?",
piste2: "ou est-elle dépendante de processus qu'elle ne commande pas ?",
racine1: "Ce qui se produit en nous est-il à notre disposition ?",
racine2: "ou la conscience est-elle un effet parmi d'autres de notre fonctionnement ?",
enjeu: "Examiner l'autonomie de la conscience à l'égard du psychisme."
},
{
id: 259,
notion: 'conscience',
intitule: "Ce qui nous échappe nous appartient-il ?",
piste1: "Ce que je ne connais pas de moi fait-il encore partie de moi ?",
piste2: "ou le propre du moi est-il d'être reconnu par la conscience ?",
racine1: "L'appartenance à soi suppose-t-elle la connaissance de soi ?",
racine2: "ou sommes-nous aussi ce que nous ignorons être ?",
enjeu: "Déterminer les frontières du moi au-delà de la conscience."
},
{
id: 260,
notion: 'conscience',
intitule: "La conscience est-elle une sélection ?",
piste1: "La conscience retient-elle seulement une part de ce qui nous affecte ?",
piste2: "ou accueille-t-elle indistinctement tout ce qui se présente ?",
racine1: "Attention et conscience se confondent-elles ?",
racine2: "ou ce qui n'est pas remarqué est-il encore perçu consciemment ?",
enjeu: "Examiner le caractère sélectif de la conscience."
},
{
id: 261,
notion: 'conscience',
intitule: "Peut-on agir sans en avoir conscience ?",
piste1: "Certaines de nos actions se produisent-elles sans que nous les voulions ?",
piste2: "ou tout acte véritable suppose-t-il une intention consciente ?",
racine1: "Un mouvement non voulu est-il encore une action ?",
racine2: "ou l'habitude et l'automatisme produisent-ils des actes sans sujet ?",
enjeu: "Distinguer l'action et le comportement automatique."
},
{
id: 262,
notion: 'conscience',
intitule: "La conscience est-elle nécessaire à la perception ?",
piste1: "Percevons-nous seulement ce dont nous avons conscience ?",
piste2: "ou des informations peuvent-elles être traitées sans être perçues consciemment ?",
racine1: "Percevoir, est-ce éprouver ou enregistrer une information ?",
racine2: "ou l'effet d'un stimulus prouve-t-il qu'il a été perçu ?",
enjeu: "Déterminer le rapport entre perception et conscience."
},
{
id: 263,
notion: 'conscience',
intitule: "L'habitude endort-elle la conscience ?",
piste1: "Ce que nous faisons régulièrement échappe-t-il à notre attention ?",
piste2: "ou l'habitude libère-t-elle la conscience pour d'autres objets ?",
racine1: "L'automatisation supprime-t-elle la vigilance ou la déplace-t-elle ?",
racine2: "ou la familiarité rend-elle les choses invisibles ?",
enjeu: "Examiner les effets de l'habitude sur la vigilance de la conscience."
},
{
id: 264,
notion: 'conscience',
intitule: "La conscience est-elle nécessaire pour apprendre ?",
piste1: "Tout apprentissage suppose-t-il une attention consciente ?",
piste2: "ou apprend-on aussi sans le savoir, par simple exposition ?",
racine1: "Acquérir un savoir-faire exige-t-il de comprendre ce que l'on fait ?",
racine2: "ou la répétition produit-elle des acquis sans médiation consciente ?",
enjeu: "Déterminer le rôle de la conscience dans l'acquisition des capacités."
},
{
id: 265,
notion: 'conscience',
intitule: "L'expertise se passe-t-elle de conscience ?",
piste1: "Le savoir-faire expert s'exerce-t-il sans délibération ?",
piste2: "ou la maîtrise suppose-t-elle une vigilance de chaque instant ?",
racine1: "La perfection d'un geste se mesure-t-elle à son automatisme ?",
racine2: "ou l'expert est-il celui qui sait ce qu'il fait mieux que les autres ?",
enjeu: "Examiner la place de la conscience dans le savoir-faire accompli."
},
{
id: 266,
notion: 'conscience',
intitule: "La conscience est-elle un épiphénomène ?",
piste1: "La conscience accompagne-t-elle nos conduites sans les produire ?",
piste2: "ou a-t-elle une efficacité propre sur ce que nous faisons ?",
racine1: "Ce qui est causé peut-il à son tour causer quelque chose ?",
racine2: "ou l'expérience consciente est-elle un simple doublon du processus physique ?",
enjeu: "Déterminer la causalité propre de la conscience."
},
{
id: 267,
notion: 'conscience',
intitule: "La conscience nous rend-elle libres ?",
piste1: "Avoir conscience de ce que l'on fait, est-ce en disposer ?",
piste2: "ou la conscience constate-t-elle des déterminations qu'elle ne change pas ?",
racine1: "La liberté suppose-t-elle la connaissance de ses actes ?",
racine2: "ou connaître ses causes suffit-il à s'en affranchir ?",
enjeu: "Examiner le rapport entre conscience et liberté."
},
{
id: 268,
notion: 'conscience',
intitule: "La conscience de nos déterminismes nous libère-t-elle ?",
piste1: "Savoir ce qui nous détermine nous permet-il d'y échapper ?",
piste2: "ou cette connaissance nous enferme-t-elle davantage dans notre condition ?",
racine1: "Comprendre une cause permet-il de suspendre son effet ?",
racine2: "ou la lucidité est-elle le seul usage libre d'une existence déterminée ?",
enjeu: "Déterminer si la lucidité sur les causes est émancipatrice."
},
{
id: 269,
notion: 'conscience',
intitule: "Sommes-nous conscients de nos choix avant de les faire ?",
piste1: "La décision consciente précède-t-elle l'action ?",
piste2: "ou la conscience enregistre-t-elle après coup une décision déjà prise ?",
racine1: "Le sentiment de décider prouve-t-il que l'on décide ?",
racine2: "ou la conscience est-elle le récit que nous faisons de nos actes ?",
enjeu: "Examiner la temporalité de la conscience et de la décision."
},
{
id: 270,
notion: 'conscience',
intitule: "La conscience décide-t-elle ?",
piste1: "La délibération consciente est-elle le lieu de la décision ?",
piste2: "ou décide-t-on ailleurs qu'en pleine lumière ?",
racine1: "Vouloir suppose-t-il de se représenter ce que l'on veut ?",
racine2: "ou la décision est-elle l'aboutissement de processus non conscients ?",
enjeu: "Déterminer le rôle effectif de la conscience dans la décision."
},
{
id: 271,
notion: 'conscience',
intitule: "La conscience est-elle un pouvoir sur soi ?",
piste1: "Se connaître permet-il de se transformer ?",
piste2: "ou la conscience nous laisse-t-elle tels que nous sommes ?",
racine1: "Le savoir sur soi est-il un moyen d'agir sur soi ?",
racine2: "ou la transformation exige-t-elle autre chose que la lucidité ?",
enjeu: "Examiner la portée pratique de la conscience de soi."
},
{
id: 272,
notion: 'conscience',
intitule: "La conscience peut-elle commander au corps ?",
piste1: "Nos décisions conscientes règlent-elles nos mouvements ?",
piste2: "ou le corps fonctionne-t-il selon des processus que la conscience ignore ?",
racine1: "L'intention suffit-elle à produire un mouvement ?",
racine2: "ou la commande consciente n'est-elle que la partie visible d'un réglage complexe ?",
enjeu: "Déterminer l'étendue du pouvoir de la conscience sur le corps."
},
{
id: 273,
notion: 'conscience',
intitule: "Le corps est-il connu par la conscience ?",
piste1: "Ai-je de mon corps une connaissance comme des autres objets ?",
piste2: "ou mon corps m'est-il donné d'une manière qui n'est pas un savoir ?",
racine1: "Connaître son corps, est-ce l'observer du dehors ?",
racine2: "ou le corps propre est-il vécu plutôt que représenté ?",
enjeu: "Distinguer la conscience du corps propre et la connaissance du corps."
},
{
id: 274,
notion: 'conscience',
intitule: "La conscience est-elle un effort ?",
piste1: "Être attentif exige-t-il un travail soutenu ?",
piste2: "ou la conscience est-elle spontanée et sans coût ?",
racine1: "Ce qui est naturel s'exerce-t-il sans peine ?",
racine2: "ou la vigilance est-elle une ressource limitée qu'il faut ménager ?",
enjeu: "Examiner le coût et les conditions de l'exercice de la conscience."
},
{
id: 275,
notion: 'conscience',
intitule: "Peut-on être trop conscient ?",
piste1: "L'excès d'attention à soi nuit-il à l'action et à la vie ?",
piste2: "ou plus de conscience est-il toujours préférable ?",
racine1: "Ce qui est bon en soi l'est-il à tous les degrés ?",
racine2: "ou la conscience réflexive peut-elle inhiber les puissances spontanées ?",
enjeu: "Déterminer s'il existe un excès de conscience de soi."
},
{
id: 276,
notion: 'conscience',
intitule: "La conscience est-elle compatible avec la spontanéité ?",
piste1: "Réfléchir détruit-il l'élan et la grâce de l'action ?",
piste2: "ou la spontanéité véritable suppose-t-elle une conscience exercée ?",
racine1: "Ce qui est immédiat est-il nécessairement irréfléchi ?",
racine2: "ou la spontanéité est-elle le fruit d'une conscience devenue disponible ?",
enjeu: "Examiner le rapport entre réflexion et spontanéité."
},
{
id: 277,
notion: 'conscience',
intitule: "La conscience est-elle un flux ?",
piste1: "Notre vie consciente est-elle un écoulement continu ?",
piste2: "ou est-elle faite d'états distincts que nous juxtaposons ?",
racine1: "Ce qui change sans cesse peut-il être découpé en moments ?",
racine2: "ou la continuité est-elle une reconstruction après coup ?",
enjeu: "Déterminer la structure temporelle de la vie consciente."
},
{
id: 278,
notion: 'conscience',
intitule: "La conscience peut-elle saisir l'instant ?",
piste1: "Pouvons-nous vivre un présent pur, sans passé ni avenir ?",
piste2: "ou toute conscience déborde-t-elle l'instant vers ce qui précède et suit ?",
racine1: "Le présent a-t-il une durée saisissable ?",
racine2: "ou la conscience retient-elle toujours ce qui vient de passer ?",
enjeu: "Examiner la temporalité de la conscience et la notion de présent."
},
{
id: 279,
notion: 'conscience',
intitule: "La conscience unifie-t-elle le temps ?",
piste1: "Est-ce la conscience qui relie passé, présent et avenir ?",
piste2: "ou le temps s'écoule-t-il indépendamment de celui qui le vit ?",
racine1: "La succession des instants suppose-t-elle un témoin qui la recueille ?",
racine2: "ou la conscience est-elle emportée par un temps qui la précède ?",
enjeu: "Déterminer le rôle de la conscience dans la constitution du temps."
},
{
id: 280,
notion: 'conscience',
intitule: "La conscience est-elle toujours en retard ?",
piste1: "Ne prenons-nous conscience qu'après que les choses ont eu lieu ?",
piste2: "ou la conscience peut-elle anticiper ce qui va venir ?",
racine1: "Saisir un événement suppose-t-il qu'il soit déjà accompli ?",
racine2: "ou l'attente et le projet sont-ils des modes de la conscience présente ?",
enjeu: "Examiner le décalage entre conscience et événement."
},
{
id: 281,
notion: 'conscience',
intitule: "La conscience est-elle présence au monde ?",
piste1: "Être conscient, est-ce d'abord être ouvert à ce qui nous entoure ?",
piste2: "ou la conscience est-elle d'abord un rapport intérieur à soi ?",
racine1: "La conscience se définit-elle par son rapport à l'extérieur ?",
racine2: "ou le monde n'est-il donné qu'à travers une conscience déjà repliée sur elle ?",
enjeu: "Déterminer si la conscience est d'abord ouverture ou intériorité."
},
{
id: 282,
notion: 'conscience',
intitule: "La conscience peut-elle être sans monde ?",
piste1: "Une conscience coupée de toute perception subsisterait-elle ?",
piste2: "ou sans objet, la conscience s'évanouit-elle ?",
racine1: "Une faculté peut-elle exister sans exercice ?",
racine2: "ou la conscience n'est-elle rien d'autre que son rapport aux choses ?",
enjeu: "Examiner la dépendance de la conscience à l'égard du monde."
},
{
id: 283,
notion: 'conscience',
intitule: "La conscience crée-t-elle son objet ?",
piste1: "Les choses n'existent-elles pour nous que par la conscience qui les vise ?",
piste2: "ou la conscience ne fait-elle que recevoir ce qui existe sans elle ?",
racine1: "L'objet de la connaissance est-il donné ou constitué ?",
racine2: "ou donner un sens à ce qui est, est-ce déjà le produire ?",
enjeu: "Déterminer la part de la conscience dans la constitution de ses objets."
},
{
id: 284,
notion: 'conscience',
intitule: "La conscience est-elle une représentation du réel ?",
piste1: "Notre conscience nous donne-t-elle une image du monde ?",
piste2: "ou est-elle un rapport direct aux choses, sans image interposée ?",
racine1: "Connaître suppose-t-il un intermédiaire entre le sujet et le réel ?",
racine2: "ou la représentation éloigne-t-elle de ce qu'elle prétend montrer ?",
enjeu: "Examiner le modèle représentatif de la conscience."
},
{
id: 285,
notion: 'conscience',
intitule: "Le monde existe-t-il sans conscience ?",
piste1: "Les choses existent-elles indépendamment de tout sujet ?",
piste2: "ou l'être des choses est-il relatif à une conscience qui les saisit ?",
racine1: "Exister, est-ce être perçu ?",
racine2: "ou la réalité déborde-t-elle nécessairement ce qui en est connu ?",
enjeu: "Déterminer l'indépendance du réel à l'égard de la conscience."
},
{
id: 286,
notion: 'conscience',
intitule: "La conscience peut-elle douter du monde extérieur ?",
piste1: "Puis-je mettre en doute l'existence de ce qui m'entoure ?",
piste2: "ou la conscience est-elle d'emblée assurée de son monde ?",
racine1: "Le doute méthodique peut-il porter sur ce qui est toujours donné ?",
racine2: "ou l'expérience du rêve et de l'illusion justifie-t-elle ce doute ?",
enjeu: "Examiner la certitude du monde extérieur dans la conscience."
},
{
id: 287,
notion: 'conscience',
intitule: "La conscience est-elle solitude ?",
piste1: "Chacun est-il enfermé dans son propre vécu ?",
piste2: "ou la conscience est-elle d'emblée tournée vers les autres ?",
racine1: "Ce qui est vécu à la première personne est-il inaccessible à autrui ?",
racine2: "ou la conscience se constitue-t-elle dans un monde partagé ?",
enjeu: "Déterminer si la subjectivité est close ou ouverte à autrui."
},
{
id: 288,
notion: 'conscience',
intitule: "La conscience d'autrui est-elle accessible ?",
piste1: "Puis-je savoir ce que l'autre éprouve ?",
piste2: "ou son vécu m'est-il par principe fermé ?",
racine1: "Connaître un autre esprit suppose-t-il d'y avoir accès directement ?",
racine2: "ou l'analogie avec mon propre vécu suffit-elle à le comprendre ?",
enjeu: "Examiner les conditions de la connaissance d'autrui."
},
{
id: 289,
notion: 'conscience',
intitule: "La conscience a-t-elle besoin des mots ?",
piste1: "Sans langage, pourrions-nous avoir conscience de ce que nous vivons ?",
piste2: "ou la conscience précède-t-elle les mots qui la disent ?",
racine1: "Penser suppose-t-il des signes pour se formuler ?",
racine2: "ou le vécu est-il conscient avant toute mise en mots ?",
enjeu: "Déterminer le rôle du langage dans la conscience."
},
{
id: 290,
notion: 'conscience',
intitule: "Peut-on penser sans en avoir conscience ?",
piste1: "Une pensée peut-elle se produire hors du champ de la conscience ?",
piste2: "ou penser, est-ce nécessairement savoir que l'on pense ?",
racine1: "Un traitement de l'information est-il déjà une pensée ?",
racine2: "ou la pensée suppose-t-elle la présence à soi de celui qui pense ?",
enjeu: "Distinguer pensée et conscience de la pensée."
},
{
id: 291,
notion: 'conscience',
intitule: "Le langage trahit-il la conscience ?",
piste1: "Les mots déforment-ils ce que nous éprouvons ?",
piste2: "ou donnent-ils au vécu la précision qu'il n'avait pas ?",
racine1: "Ce qui est singulier peut-il entrer dans des mots communs ?",
racine2: "ou formuler son vécu est-il la condition pour le connaître ?",
enjeu: "Examiner la fidélité de l'expression au vécu."
},
{
id: 292,
notion: 'conscience',
intitule: "Ce que je ressens est-il incomparable ?",
piste1: "Ma douleur ou ma joie sont-elles d'une nature que nul autre ne peut connaître ?",
piste2: "ou les qualités de l'expérience se communiquent-elles ?",
racine1: "Ce qui est ressenti a-t-il une propriété accessible à un seul ?",
racine2: "ou le partage des situations rend-il les vécus comparables ?",
enjeu: "Déterminer la singularité irréductible de l'expérience consciente."
},
{
id: 293,
notion: 'conscience',
intitule: "La conscience est-elle un dialogue intérieur ?",
piste1: "Penser, est-ce se parler à soi-même ?",
piste2: "ou la conscience est-elle un silence que le langage vient recouvrir ?",
racine1: "Le dialogue suppose-t-il deux interlocuteurs distincts ?",
racine2: "ou la conscience est-elle dédoublée par nature ?",
enjeu: "Examiner la structure dialogique de la pensée."
},
{
id: 294,
notion: 'conscience',
intitule: "La conscience est-elle façonnée par la société ?",
piste1: "Nos manières de penser et de sentir viennent-elles de notre milieu ?",
piste2: "ou la conscience garde-t-elle une part irréductible à toute influence ?",
racine1: "Ce qui est en nous porte-t-il la marque de nos conditions de vie ?",
racine2: "ou le sujet peut-il se distancier de ce qui l'a formé ?",
enjeu: "Déterminer la part sociale de la conscience individuelle."
},
{
id: 295,
notion: 'conscience',
intitule: "La conscience peut-elle être collective ?",
piste1: "Un groupe peut-il avoir une conscience qui n'est celle d'aucun de ses membres ?",
piste2: "ou toute conscience est-elle celle d'un individu ?",
racine1: "Un ensemble peut-il être un sujet ?",
racine2: "ou la conscience de groupe n'est-elle que la somme des consciences individuelles ?",
enjeu: "Examiner la possibilité d'un sujet collectif."
},
{
id: 296,
notion: 'conscience',
intitule: "Les écrans captent-ils notre conscience ?",
piste1: "Les dispositifs numériques disposent-ils de notre attention à notre insu ?",
piste2: "ou restent-ils des outils dont nous pouvons régler l'usage ?",
racine1: "L'attention est-elle une ressource que d'autres peuvent exploiter ?",
racine2: "ou la conscience garde-t-elle le pouvoir de se détourner ?",
enjeu: "Déterminer l'autonomie de la conscience à l'ère numérique."
},
{
id: 297,
notion: 'conscience',
intitule: "La conscience a-t-elle des limites de capacité ?",
piste1: "Ne pouvons-nous être conscients que d'un petit nombre de choses à la fois ?",
piste2: "ou la conscience peut-elle s'étendre indéfiniment par l'exercice ?",
racine1: "Une faculté finie peut-elle embrasser une multiplicité infinie ?",
racine2: "ou la limite de la conscience est-elle structurelle plutôt que quantitative ?",
enjeu: "Examiner les capacités et les bornes de la conscience."
},
{
id: 298,
notion: 'conscience',
intitule: "La conscience écologique est-elle une nouvelle conscience ?",
piste1: "La prise de conscience des limites planétaires transforme-t-elle notre rapport au monde ?",
piste2: "ou n'est-elle qu'un savoir de plus, sans effet sur nos conduites ?",
racine1: "Savoir un danger suffit-il à changer sa manière de vivre ?",
racine2: "ou la conscience se transforme-t-elle quand son objet change d'échelle ?",
enjeu: "Déterminer si une nouvelle conscience implique de nouvelles conduites."
},
{
id: 299,
notion: 'conscience',
intitule: "La conscience de la mort nous rend-elle humains ?",
piste1: "Savoir que nous mourrons définit-il notre condition ?",
piste2: "ou cette conscience nous détourne-t-elle de ce qui fait la vie ?",
racine1: "La connaissance de la finitude transforme-t-elle le sens de l'existence ?",
racine2: "ou l'homme se définit-il par autre chose que par cette anticipation ?",
enjeu: "Examiner le rôle de la conscience de la finitude dans l'existence humaine."
},
{
id: 300,
notion: 'conscience',
intitule: "La conscience est-elle ce qui donne du prix à l'existence ?",
piste1: "Une vie sans conscience aurait-elle encore de la valeur ?",
piste2: "ou la valeur d'une existence est-elle indépendante de la conscience qu'on en a ?",
racine1: "Ce qui a de la valeur doit-il être éprouvé par quelqu'un ?",
racine2: "ou la dignité d'une vie tient-elle à autre chose qu'à son vécu ?",
enjeu: "Déterminer le lien entre conscience et valeur de l'existence."
},
{
id: 301,
notion: 'devoir',
intitule: "Le devoir se définit-il ?",
piste1: "Peut-on dire ce qu'est le devoir sans le confondre avec ce qui est simplement exigé de nous ?",
piste2: "ou le devoir se laisse-t-il seulement éprouver, sans se laisser définir ?",
racine1: "Définir une obligation, est-ce en donner la source ou en décrire l'effet ?",
racine2: "ou ce qui oblige la volonté échappe-t-il à toute détermination objective ?",
enjeu: "Déterminer si le devoir est un concept susceptible d'être défini."
},
{
id: 302,
notion: 'devoir',
intitule: "Qu'est-ce qu'être obligé ?",
piste1: "Être obligé, est-ce être forcé de faire quelque chose ?",
piste2: "ou est-ce reconnaître qu'une action s'impose même si l'on peut s'y soustraire ?",
racine1: "L'obligation se confond-elle avec la contrainte qui ne laisse pas le choix ?",
racine2: "ou obliger suppose-t-il un sujet capable de désobéir ?",
enjeu: "Distinguer l'obligation morale de la contrainte physique ou sociale."
},
{
id: 303,
notion: 'devoir',
intitule: "Le devoir est-il une contrainte ?",
piste1: "Le devoir s'impose-t-il à nous comme une force extérieure ?",
piste2: "ou est-il une exigence que la volonté reconnaît comme sienne ?",
racine1: "Ce qui limite notre liberté est-il nécessairement subi ?",
racine2: "ou une contrainte consentie cesse-t-elle d'être une contrainte ?",
enjeu: "Examiner le rapport entre obligation morale et limitation de la liberté."
},
{
id: 304,
notion: 'devoir',
intitule: "Le devoir suppose-t-il la liberté ?",
piste1: "Ne peut-on être obligé que si l'on pouvait faire autrement ?",
piste2: "ou le devoir vaut-il même pour un être entièrement déterminé ?",
racine1: "Imputer une action suppose-t-il que son auteur en soit le maître ?",
racine2: "ou l'obligation vaut-elle indépendamment de la capacité de s'y conformer ?",
enjeu: "Déterminer si la liberté est la condition de l'obligation morale."
},
{
id: 305,
notion: 'devoir',
intitule: "Le devoir est-il un commandement ?",
piste1: "Le devoir prend-il la forme d'un ordre adressé à la volonté ?",
piste2: "ou se signale-t-il autrement que par une injonction ?",
racine1: "Un commandement suppose-t-il nécessairement quelqu'un qui commande ?",
racine2: "ou la raison peut-elle prescrire sans qu'il y ait un législateur extérieur ?",
enjeu: "Examiner la forme impérative de l'obligation morale."
},
{
id: 306,
notion: 'devoir',
intitule: "Le devoir est-il une nécessité ?",
piste1: "Ce qui doit être est-il ce qui ne peut pas ne pas être ?",
piste2: "ou le devoir désigne-t-il précisément ce qui peut ne pas être fait ?",
racine1: "La nécessité de la nature et l'obligation morale ont-elles le même sens ?",
racine2: "ou ce qui doit être est-il ce qui n'est pas toujours ?",
enjeu: "Distinguer la nécessité du devoir et celle des lois naturelles."
},
{
id: 307,
notion: 'devoir',
intitule: "Le devoir est-il un fait ou une valeur ?",
piste1: "Le devoir se constate-t-il dans les mœurs et les institutions ?",
piste2: "ou vaut-il indépendamment de ce qui se fait effectivement ?",
racine1: "Peut-on déduire ce qui doit être de ce qui est ?",
racine2: "ou l'obligation est-elle d'un autre ordre que les faits observables ?",
enjeu: "Déterminer le statut du devoir entre fait social et exigence normative."
},
{
id: 308,
notion: 'devoir',
intitule: "Le devoir est-il une invention humaine ?",
piste1: "Les hommes ont-ils créé les obligations pour rendre la vie commune possible ?",
piste2: "ou découvrent-ils des exigences qui s'imposent à eux ?",
racine1: "Ce qui varie selon les sociétés est-il pour autant inventé ?",
racine2: "ou l'institution d'une règle suppose-t-elle une exigence antérieure ?",
enjeu: "Examiner l'origine conventionnelle ou rationnelle du devoir."
},
{
id: 309,
notion: 'devoir',
intitule: "Le devoir a-t-il un fondement ?",
piste1: "Peut-on rendre raison de ce qui nous oblige ?",
piste2: "ou l'obligation est-elle un fait premier que l'on ne peut justifier ?",
racine1: "Fonder une obligation, est-ce la déduire d'un principe plus élevé ?",
racine2: "ou tout fondement suppose-t-il déjà une obligation reconnue ?",
enjeu: "Déterminer si l'obligation morale peut être justifiée sans régression."
},
{
id: 310,
notion: 'devoir',
intitule: "Le devoir est-il absolu ?",
piste1: "L'obligation morale vaut-elle sans condition ni exception ?",
piste2: "ou est-elle toujours subordonnée à des circonstances ?",
racine1: "Ce qui oblige peut-il dépendre de ce qui arrive ?",
racine2: "ou une obligation conditionnelle est-elle encore une obligation morale ?",
enjeu: "Examiner le caractère inconditionnel de l'exigence morale."
},
{
id: 311,
notion: 'devoir',
intitule: "Le devoir dépend-il des circonstances ?",
piste1: "Ce que nous devons faire varie-t-il selon la situation ?",
piste2: "ou le devoir reste-t-il le même quelles que soient les conditions ?",
racine1: "La singularité d'une situation échappe-t-elle à toute règle générale ?",
racine2: "ou adapter la règle aux cas, est-ce déjà la dissoudre ?",
enjeu: "Déterminer la part du contexte dans la détermination du devoir."
},
{
id: 312,
notion: 'devoir',
intitule: "Le devoir est-il une exigence ou un idéal ?",
piste1: "Le devoir désigne-t-il ce dont on ne peut se dispenser ?",
piste2: "ou ce vers quoi il est bon de tendre sans y être tenu ?",
racine1: "Peut-on blâmer celui qui n'atteint pas un idéal ?",
racine2: "ou confondre exigence et perfection rend-il la morale impossible ?",
enjeu: "Distinguer les obligations strictes et les actions surérogatoires."
},
{
id: 313,
notion: 'devoir',
intitule: "Le devoir est-il évident ?",
piste1: "Chacun sait-il immédiatement ce qu'il doit faire ?",
piste2: "ou la détermination du devoir exige-t-elle un travail de réflexion ?",
racine1: "L'évidence d'une exigence garantit-elle sa validité ?",
racine2: "ou ce qui semble aller de soi est-il souvent le produit de l'habitude ?",
enjeu: "Examiner la valeur de l'évidence dans le jugement moral."
},
{
id: 314,
notion: 'devoir',
intitule: "Le devoir est-il une règle ou un jugement ?",
piste1: "Le devoir consiste-t-il à appliquer des règles établies ?",
piste2: "ou à juger chaque situation sans règle préalable ?",
racine1: "Une règle peut-elle prévoir tous les cas ?",
racine2: "ou juger sans règle revient-il à décider arbitrairement ?",
enjeu: "Déterminer la place de la règle et du discernement dans la vie morale."
},
{
id: 315,
notion: 'devoir',
intitule: "Le devoir est-il un savoir ?",
piste1: "Peut-on apprendre ce que l'on doit faire comme on apprend un fait ?",
piste2: "ou savoir le bien ne suffit-il pas à le vouloir ?",
racine1: "La connaissance du bien détermine-t-elle la volonté ?",
racine2: "ou la morale relève-t-elle de la pratique plutôt que de la théorie ?",
enjeu: "Examiner le rapport entre connaissance morale et action."
},
{
id: 316,
notion: 'devoir',
intitule: "Le devoir est-il contraire à l'intérêt ?",
piste1: "Faire son devoir exige-t-il de renoncer à ce qui nous avantage ?",
piste2: "ou l'intérêt bien compris coïncide-t-il avec l'obligation ?",
racine1: "Ce qui nous avantage est-il nécessairement égoïste ?",
racine2: "ou une action intéressée peut-elle être moralement valable ?",
enjeu: "Déterminer le rapport entre devoir et intérêt personnel."
},
{
id: 317,
notion: 'devoir',
intitule: "Faire son devoir rend-il heureux ?",
piste1: "L'accomplissement du devoir procure-t-il une satisfaction durable ?",
piste2: "ou la morale exige-t-elle de renoncer au bonheur ?",
racine1: "La vertu et le bonheur sont-ils liés dans l'ordre du réel ?",
racine2: "ou faut-il seulement être digne du bonheur sans l'espérer ?",
enjeu: "Examiner la convergence ou la divergence du devoir et du bonheur."
},
{
id: 318,
notion: 'devoir',
intitule: "Le devoir est-il un sacrifice ?",
piste1: "Toute obligation nous coûte-t-elle quelque chose ?",
piste2: "ou peut-on accomplir son devoir sans rien perdre ?",
racine1: "La valeur morale d'une action se mesure-t-elle à ce qu'elle coûte ?",
racine2: "ou le devoir accompli avec joie vaut-il autant que le devoir arraché ?",
enjeu: "Déterminer si le coût de l'action fait partie de sa valeur morale."
},
{
id: 319,
notion: 'devoir',
intitule: "Le devoir est-il utile ?",
piste1: "Les obligations morales servent-elles la conservation de la société ?",
piste2: "ou valent-elles indépendamment de leur utilité ?",
racine1: "Ce qui est utile à tous est-il pour autant obligatoire ?",
racine2: "ou réduire le devoir à l'utilité supprime-t-il son caractère d'obligation ?",
enjeu: "Examiner la réduction utilitariste de l'obligation morale."
},
{
id: 320,
notion: 'devoir',
intitule: "Le devoir exclut-il toute récompense ?",
piste1: "Agir par devoir, est-ce agir sans rien attendre en retour ?",
piste2: "ou l'espérance d'une récompense peut-elle accompagner l'obligation ?",
racine1: "Le mobile d'une action en change-t-il la nature morale ?",
racine2: "ou une action conforme au devoir vaut-elle quel qu'en soit le motif ?",
enjeu: "Distinguer la moralité de l'action et la pureté de son intention."
},
{
id: 321,
notion: 'devoir',
intitule: "Agir par devoir, est-ce agir contre son désir ?",
piste1: "L'obligation se signale-t-elle par la résistance qu'elle oppose à nos penchants ?",
piste2: "ou peut-on vouloir ce que l'on doit ?",
racine1: "Le désir est-il nécessairement égoïste ?",
racine2: "ou l'accord du désir et du devoir est-il le signe d'une vertu accomplie ?",
enjeu: "Examiner le rapport entre obligation et inclination sensible."
},
{
id: 322,
notion: 'devoir',
intitule: "Le devoir est-il une aliénation ?",
piste1: "L'obligation morale nous dépossède-t-elle de nous-mêmes ?",
piste2: "ou est-elle la forme la plus haute de notre autonomie ?",
racine1: "Ce qui s'impose à nous vient-il nécessairement d'ailleurs ?",
racine2: "ou intérioriser une exigence est-il la condition de la vie proprement humaine ?",
enjeu: "Déterminer si le devoir émancipe ou asservit le sujet."
},
{
id: 323,
notion: 'devoir',
intitule: "Le devoir nous éloigne-t-il du plaisir ?",
piste1: "La morale exige-t-elle de renoncer aux satisfactions sensibles ?",
piste2: "ou le plaisir peut-il s'accorder avec l'obligation ?",
racine1: "Le plaisir est-il par nature contraire à la loi morale ?",
racine2: "ou ce qui est blâmable est-il l'excès plutôt que le plaisir lui-même ?",
enjeu: "Examiner la place du plaisir dans la vie morale."
},
{
id: 324,
notion: 'devoir',
intitule: "Le devoir est-il compatible avec l'amour de soi ?",
piste1: "Se soucier de soi détourne-t-il de ce que l'on doit ?",
piste2: "ou le respect de soi est-il la condition du respect d'autrui ?",
racine1: "L'amour de soi se confond-il avec l'égoïsme ?",
racine2: "ou ne peut-on obliger autrui qu'en se reconnaissant soi-même comme sujet ?",
enjeu: "Distinguer l'amour de soi légitime de l'égoïsme moral."
},
{
id: 325,
notion: 'devoir',
intitule: "Le devoir exige-t-il l'héroïsme ?",
piste1: "La morale demande-t-elle des actes exceptionnels ?",
piste2: "ou se contente-t-elle de ce que chacun peut ordinairement faire ?",
racine1: "Une exigence que peu peuvent satisfaire est-elle encore une obligation ?",
racine2: "ou l'héroïsme est-il un excès admirable plutôt qu'un devoir ?",
enjeu: "Déterminer le niveau d'exigence de la morale commune."
},
{
id: 326,
notion: 'devoir',
intitule: "Le devoir est-il quotidien ?",
piste1: "Le devoir se joue-t-il dans les petites décisions de chaque jour ?",
piste2: "ou ne se révèle-t-il que dans les grandes circonstances ?",
racine1: "La valeur morale se mesure-t-elle à l'éclat de l'action ?",
racine2: "ou la constance ordinaire est-elle plus exigeante que l'exploit ?",
enjeu: "Examiner la temporalité ordinaire de l'obligation morale."
},
{
id: 327,
notion: 'devoir',
intitule: "Le devoir est-il une dette ?",
piste1: "Devons-nous parce que nous avons reçu ?",
piste2: "ou l'obligation vaut-elle sans qu'aucun don préalable l'ait fondée ?",
racine1: "Toute obligation suppose-t-elle un créancier ?",
racine2: "ou ce que nous devons à l'humanité excède-t-il tout échange ?",
enjeu: "Déterminer si le modèle de la dette éclaire l'obligation morale."
},
{
id: 328,
notion: 'devoir',
intitule: "Peut-on se donner à soi-même sa loi ?",
piste1: "La volonté peut-elle être à la fois l'auteur et le sujet de la loi ?",
piste2: "ou une loi que l'on se donne peut-elle toujours être défaite ?",
racine1: "Ce que l'on institue, peut-on le révoquer à volonté ?",
racine2: "ou la loi que la raison se prescrit vaut-elle pour tout être raisonnable ?",
enjeu: "Examiner la possibilité de l'autonomie morale."
},
{
id: 329,
notion: 'devoir',
intitule: "L'obéissance est-elle le contraire de l'autonomie ?",
piste1: "Obéir, est-ce renoncer à se conduire soi-même ?",
piste2: "ou peut-on obéir à ce que l'on reconnaît comme juste ?",
racine1: "L'autonomie exige-t-elle l'absence de toute règle extérieure ?",
racine2: "ou l'obéissance réfléchie est-elle une forme de liberté ?",
enjeu: "Distinguer l'obéissance servile de l'adhésion rationnelle."
},
{
id: 330,
notion: 'devoir',
intitule: "Le devoir est-il rationnel ?",
piste1: "L'obligation se fonde-t-elle sur des raisons que tous peuvent examiner ?",
piste2: "ou relève-t-elle du sentiment, de la tradition ou de la foi ?",
racine1: "Ce qui oblige doit-il pouvoir se justifier devant autrui ?",
racine2: "ou la raison peut-elle seulement organiser des exigences qu'elle ne crée pas ?",
enjeu: "Déterminer le fondement rationnel de l'obligation morale."
},
{
id: 331,
notion: 'devoir',
intitule: "La raison suffit-elle à nous faire agir ?",
piste1: "Reconnaître ce qui est juste suffit-il à le faire ?",
piste2: "ou faut-il un mobile que la raison ne produit pas ?",
racine1: "Un jugement peut-il être par lui-même un moteur de la volonté ?",
racine2: "ou la raison pratique suppose-t-elle un sentiment qui la mette en mouvement ?",
enjeu: "Examiner l'efficacité pratique de la raison."
},
{
id: 332,
notion: 'devoir',
intitule: "Le devoir est-il universel ?",
piste1: "Ce que je dois faire vaut-il pour tout être humain en ma situation ?",
piste2: "ou l'obligation est-elle relative à chacun ?",
racine1: "Une exigence qui ne vaut que pour moi est-elle encore morale ?",
racine2: "ou la diversité des situations interdit-elle toute universalisation ?",
enjeu: "Déterminer la portée universelle du devoir."
},
{
id: 333,
notion: 'devoir',
intitule: "L'universalité suffit-elle à fonder le devoir ?",
piste1: "Une règle que tous peuvent vouloir est-elle pour autant obligatoire ?",
piste2: "ou l'accord universel peut-il porter sur l'inacceptable ?",
racine1: "La cohérence d'une maxime garantit-elle sa valeur morale ?",
racine2: "ou faut-il un contenu substantiel pour que la forme oblige ?",
enjeu: "Examiner les limites du critère d'universalisation."
},
{
id: 334,
notion: 'devoir',
intitule: "Le devoir est-il formel ?",
piste1: "La morale se réduit-elle à la forme de l'obligation ?",
piste2: "ou suppose-t-elle des contenus déterminés ?",
racine1: "Une loi sans contenu peut-elle prescrire quelque chose ?",
racine2: "ou tout contenu introduit-il des intérêts qui corrompent l'obligation ?",
enjeu: "Déterminer si la moralité tient à la forme ou à la matière de l'action."
},
{
id: 335,
notion: 'devoir',
intitule: "Le devoir dit-il ce qu'il faut faire ?",
piste1: "L'obligation morale fournit-elle des indications précises ?",
piste2: "ou se borne-t-elle à exclure ce qui est inadmissible ?",
racine1: "Une exigence générale suffit-elle à guider une action singulière ?",
racine2: "ou le discernement des situations est-il une tâche irréductible ?",
enjeu: "Examiner la capacité du devoir à déterminer l'action concrète."
},
{
id: 336,
notion: 'devoir',
intitule: "Le devoir est-il une loi de la volonté ?",
piste1: "L'obligation porte-t-elle sur ce que nous voulons ?",
piste2: "ou porte-t-elle sur ce que nous faisons effectivement ?",
racine1: "La valeur morale se juge-t-elle à l'intention ou au résultat ?",
racine2: "ou une volonté droite peut-elle produire le mal ?",
enjeu: "Déterminer le siège de la moralité dans la volonté."
},
{
id: 337,
notion: 'devoir',
intitule: "Le devoir suppose-t-il une loi divine ?",
piste1: "L'obligation tire-t-elle sa force d'un commandement transcendant ?",
piste2: "ou peut-elle obliger sans qu'aucune autorité supérieure l'établisse ?",
racine1: "Une loi suppose-t-elle nécessairement un législateur ?",
racine2: "ou la crainte d'un sanctionneur transforme-t-elle le devoir en calcul ?",
enjeu: "Examiner le rapport entre obligation morale et fondement religieux."
},
{
id: 338,
notion: 'devoir',
intitule: "Dieu peut-il commander le mal ?",
piste1: "Ce qui est commandé par Dieu est-il bien par cela même ?",
piste2: "ou Dieu commande-t-il parce que c'est bien ?",
racine1: "Le bien dépend-il d'une volonté ou s'impose-t-il à toute volonté ?",
racine2: "ou reconnaître un bien indépendant de Dieu limite-t-il sa toute-puissance ?",
enjeu: "Déterminer si le bien est institué par un commandement ou reconnu par la raison."
},
{
id: 339,
notion: 'devoir',
intitule: "Le devoir est-il relatif aux cultures ?",
piste1: "Chaque société définit-elle ce que ses membres doivent faire ?",
piste2: "ou certaines obligations valent-elles par-delà les cultures ?",
racine1: "La diversité des mœurs prouve-t-elle l'absence de morale universelle ?",
racine2: "ou sous des règles différentes retrouve-t-on des interdits communs ?",
enjeu: "Examiner la thèse du relativisme moral."
},
{
id: 340,
notion: 'devoir',
intitule: "La tolérance est-elle un devoir ?",
piste1: "Devons-nous respecter ce que nous désapprouvons ?",
piste2: "ou la tolérance a-t-elle des limites qui la définissent ?",
racine1: "Respecter autrui exige-t-il d'accepter ses convictions ?",
racine2: "ou tolérer l'intolérable revient-il à renoncer à toute exigence morale ?",
enjeu: "Déterminer le statut et les limites de la tolérance comme obligation."
},
{
id: 341,
notion: 'devoir',
intitule: "Peut-on juger les mœurs d'autrui ?",
piste1: "Sommes-nous en droit d'évaluer les pratiques d'une autre culture ?",
piste2: "ou tout jugement extérieur est-il un ethnocentrisme ?",
racine1: "Juger suppose-t-il une mesure commune au juge et au jugé ?",
racine2: "ou renoncer à juger revient-il à abandonner ceux qui souffrent ?",
enjeu: "Examiner la légitimité du jugement moral interculturel."
},
{
id: 342,
notion: 'devoir',
intitule: "Doit-on toujours obéir à la loi ?",
piste1: "La loi oblige-t-elle par cela seul qu'elle est la loi ?",
piste2: "ou une loi injuste cesse-t-elle d'obliger ?",
racine1: "L'obligation juridique se fonde-t-elle sur la légalité ou sur la justice ?",
racine2: "ou laisser chacun juger la loi détruit-il l'ordre commun ?",
enjeu: "Déterminer les conditions de l'obligation d'obéir au droit."
},
{
id: 343,
notion: 'devoir',
intitule: "La désobéissance civile est-elle légitime ?",
piste1: "Enfreindre publiquement une loi injuste peut-il être justifié ?",
piste2: "ou la contestation doit-elle rester dans les voies légales ?",
racine1: "La légitimité d'une action dépend-elle de sa légalité ?",
racine2: "ou l'appel à la conscience publique fonde-t-il un droit de résistance ?",
enjeu: "Examiner les conditions de légitimité de la désobéissance."
},
{
id: 344,
notion: 'devoir',
intitule: "Le devoir civique est-il un devoir moral ?",
piste1: "Les obligations du citoyen relèvent-elles de la morale ?",
piste2: "ou se réduisent-elles à des exigences juridiques ?",
racine1: "Ce que la loi impose est-il pour autant moralement obligatoire ?",
racine2: "ou la participation à la cité est-elle une exigence éthique ?",
enjeu: "Distinguer obligation civique et obligation morale."
},
{
id: 345,
notion: 'devoir',
intitule: "Le devoir est-il affaire d'État ?",
piste1: "La puissance publique a-t-elle pour tâche de définir ce que nous devons ?",
piste2: "ou le devoir relève-t-il de la conscience de chacun ?",
racine1: "L'État peut-il prescrire des fins morales sans empiéter sur la liberté ?",
racine2: "ou garantir le droit suffit-il à rendre possible la vie morale ?",
enjeu: "Déterminer les limites du rôle de l'État en matière morale."
},
{
id: 346,
notion: 'devoir',
intitule: "La loi peut-elle prescrire la vertu ?",
piste1: "Le législateur peut-il rendre les citoyens vertueux ?",
piste2: "ou la vertu échappe-t-elle par nature à la contrainte ?",
racine1: "Une action contrainte peut-elle avoir une valeur morale ?",
racine2: "ou les lois forment-elles indirectement les mœurs ?",
enjeu: "Examiner la possibilité d'une législation des mœurs."
},
{
id: 347,
notion: 'devoir',
intitule: "Le devoir de voter existe-t-il ?",
piste1: "Participer à la décision collective est-il une obligation ?",
piste2: "ou l'abstention est-elle un droit légitime ?",
racine1: "Ne pas choisir, est-ce encore une manière de choisir ?",
racine2: "ou la liberté du citoyen inclut-elle le refus de participer ?",
enjeu: "Déterminer le statut moral de la participation politique."
},
{
id: 348,
notion: 'devoir',
intitule: "Le devoir peut-il justifier la violence ?",
piste1: "L'accomplissement d'une obligation autorise-t-il l'usage de la force ?",
piste2: "ou la violence annule-t-elle la valeur morale de la fin poursuivie ?",
racine1: "La justesse d'une fin communique-t-elle sa valeur aux moyens ?",
racine2: "ou certains moyens dégradent-ils toute cause ?",
enjeu: "Examiner les conditions morales de l'usage de la violence."
},
{
id: 349,
notion: 'devoir',
intitule: "Le devoir est-il du côté de l'ordre ?",
piste1: "La morale commande-t-elle de préserver ce qui est établi ?",
piste2: "ou exige-t-elle parfois de bouleverser l'ordre existant ?",
racine1: "Ce qui est établi est-il pour autant juste ?",
racine2: "ou la contestation de l'ordre est-elle une exigence morale ?",
enjeu: "Déterminer le rapport entre devoir et conservation de l'ordre social."
},
{
id: 350,
notion: 'devoir',
intitule: "Désobéir, est-ce encore respecter la loi ?",
piste1: "Enfreindre une loi injuste, est-ce s'attaquer au droit ?",
piste2: "ou est-ce rendre hommage à ce que le droit devrait être ?",
racine1: "Le respect du droit se mesure-t-il à l'obéissance aux lois ?",
racine2: "ou la fidélité au principe de justice peut-elle passer par la transgression ?",
enjeu: "Examiner le paradoxe de la désobéissance respectueuse du droit."
},
{
id: 351,
notion: 'devoir',
intitule: "Le devoir et le droit coïncident-ils ?",
piste1: "Tout ce qui est dû juridiquement est-il moralement obligatoire ?",
piste2: "ou la morale exige-t-elle plus que le droit ?",
racine1: "Le droit définit-il l'ensemble de nos obligations ?",
racine2: "ou ce qui n'est pas interdit peut-il être moralement fautif ?",
enjeu: "Distinguer l'ordre juridique et l'ordre moral."
},
{
id: 352,
notion: 'devoir',
intitule: "Avoir des droits implique-t-il des devoirs ?",
piste1: "Un droit n'existe-t-il que s'il impose une obligation à autrui ?",
piste2: "ou peut-on avoir des droits sans devoir corrélatif ?",
racine1: "Un droit est-il une créance sur quelqu'un ?",
racine2: "ou la reconnaissance d'une dignité suffit-elle à fonder un droit ?",
enjeu: "Examiner la corrélation entre droits et devoirs."
},
{
id: 353,
notion: 'devoir',
intitule: "Peut-on avoir des devoirs sans droits ?",
piste1: "Un être privé de droits peut-il néanmoins être tenu à des obligations ?",
piste2: "ou l'obligation suppose-t-elle la reconnaissance d'un statut ?",
racine1: "Obliger quelqu'un sans le reconnaître est-il cohérent ?",
racine2: "ou la soumission imposée n'est-elle pas une obligation morale ?",
enjeu: "Déterminer le lien entre reconnaissance juridique et obligation morale."
},
{
id: 354,
notion: 'devoir',
intitule: "Le devoir s'arrête-t-il aux frontières ?",
piste1: "Nos obligations se limitent-elles à nos concitoyens ?",
piste2: "ou valent-elles pour tout être humain ?",
racine1: "L'appartenance politique fonde-t-elle l'étendue du devoir ?",
racine2: "ou l'humanité commune suffit-elle à créer une obligation ?",
enjeu: "Examiner la portée nationale ou cosmopolite du devoir."
},
{
id: 355,
notion: 'devoir',
intitule: "Devons-nous secourir les lointains ?",
piste1: "La distance géographique atténue-t-elle notre obligation d'aider ?",
piste2: "ou la souffrance oblige-t-elle quelle que soit sa localisation ?",
racine1: "La proximité est-elle une raison morale pertinente ?",
racine2: "ou pouvoir agir sans coût comparable suffit-il à créer un devoir ?",
enjeu: "Déterminer l'effet de la distance sur l'obligation de secours."
},
{
id: 356,
notion: 'devoir',
intitule: "Devons-nous quelque chose à autrui ?",
piste1: "La seule présence d'un autre être humain crée-t-elle une obligation ?",
piste2: "ou ne devons-nous à autrui que ce que nous avons contracté ?",
racine1: "L'obligation naît-elle d'un accord ou d'une relation donnée ?",
racine2: "ou autrui m'oblige-t-il avant tout engagement de ma part ?",
enjeu: "Examiner le fondement de l'obligation envers autrui."
},
{
id: 357,
notion: 'devoir',
intitule: "Autrui est-il une fin en soi ?",
piste1: "Chacun doit-il être traité comme ayant une valeur absolue ?",
piste2: "ou les hommes peuvent-ils être évalués selon leur utilité ?",
racine1: "Ce qui a un prix peut-il être remplacé par un équivalent ?",
racine2: "ou la dignité désigne-t-elle ce qui n'a pas d'équivalent ?",
enjeu: "Déterminer le statut de la personne comme fin absolue."
},
{
id: 358,
notion: 'devoir',
intitule: "Peut-on traiter autrui comme un moyen ?",
piste1: "Se servir d'autrui est-il toujours interdit ?",
piste2: "ou est-ce admissible si on le traite aussi comme une fin ?",
racine1: "L'instrumentalisation se définit-elle par l'usage ou par le déni de consentement ?",
racine2: "ou toute coopération implique-t-elle une utilisation réciproque ?",
enjeu: "Examiner les conditions morales de l'usage d'autrui."
},
{
id: 359,
notion: 'devoir',
intitule: "Le devoir est-il d'abord négatif ?",
piste1: "L'obligation première est-elle de ne pas nuire ?",
piste2: "ou devons-nous positivement contribuer au bien d'autrui ?",
racine1: "S'abstenir et agir ont-ils le même statut moral ?",
racine2: "ou la responsabilité s'étend-elle à ce que l'on laisse arriver ?",
enjeu: "Distinguer les devoirs de non-nuisance et les devoirs d'action."
},
{
id: 360,
notion: 'devoir',
intitule: "L'indifférence est-elle une faute ?",
piste1: "Ne rien faire devant le malheur d'autrui est-il blâmable ?",
piste2: "ou n'est-on fautif que de ce que l'on fait ?",
racine1: "L'omission peut-elle être imputée à son auteur ?",
racine2: "ou la responsabilité suppose-t-elle une intervention positive ?",
enjeu: "Déterminer la responsabilité morale de l'inaction."
},
{
id: 361,
notion: 'devoir',
intitule: "Bienfaisance et justice relèvent-elles du même devoir ?",
piste1: "Aider autrui et lui rendre ce qui lui est dû sont-ils une même exigence ?",
piste2: "ou la bienfaisance excède-t-elle ce que la justice impose ?",
racine1: "Ce qui est dû peut-il être exigé, contrairement à ce qui est donné ?",
racine2: "ou la charité masque-t-elle parfois une injustice non réparée ?",
enjeu: "Distinguer l'obligation de justice et l'exigence de bienfaisance."
},
{
id: 362,
notion: 'devoir',
intitule: "Devons-nous quelque chose à nous-mêmes ?",
piste1: "Peut-on avoir des obligations envers soi ?",
piste2: "ou toute obligation suppose-t-elle un autre que soi ?",
racine1: "Être à la fois créancier et débiteur est-il cohérent ?",
racine2: "ou le respect de soi est-il la condition de toute moralité ?",
enjeu: "Examiner la possibilité de devoirs envers soi-même."
},
{
id: 363,
notion: 'devoir',
intitule: "Devons-nous davantage à nos proches ?",
piste1: "Les liens particuliers créent-ils des obligations renforcées ?",
piste2: "ou la morale exige-t-elle de ne compter personne pour plus qu'un autre ?",
racine1: "L'impartialité morale interdit-elle toute préférence ?",
racine2: "ou les relations concrètes sont-elles la source même du devoir ?",
enjeu: "Déterminer la légitimité morale de la partialité."
},
{
id: 364,
notion: 'devoir',
intitule: "L'impartialité est-elle possible ?",
piste1: "Pouvons-nous juger sans être affectés par nos attachements ?",
piste2: "ou toute décision est-elle située et partiale ?",
racine1: "Se placer au point de vue de tous est-il à la portée d'un sujet ?",
racine2: "ou l'impartialité est-elle une exigence régulatrice plutôt qu'un état ?",
enjeu: "Examiner la possibilité effective du point de vue impartial."
},
{
id: 365,
notion: 'devoir',
intitule: "Le devoir d'aider autrui a-t-il des limites ?",
piste1: "Devons-nous aider tant que nous le pouvons ?",
piste2: "ou notre propre vie fixe-t-elle un seuil à l'obligation ?",
racine1: "Une exigence illimitée est-elle encore raisonnable ?",
racine2: "ou fixer une limite revient-il à justifier l'indifférence ?",
enjeu: "Déterminer l'étendue raisonnable de l'obligation d'aide."
},
{
id: 366,
notion: 'devoir',
intitule: "Peut-on devoir l'impossible ?",
piste1: "L'obligation s'éteint-elle là où cesse notre pouvoir ?",
piste2: "ou l'exigence morale demeure-t-elle même quand nous ne pouvons la satisfaire ?",
racine1: "Une obligation inaccessible est-elle une véritable obligation ?",
racine2: "ou l'impuissance excuse-t-elle sans supprimer le devoir ?",
enjeu: "Examiner le rapport entre obligation et capacité d'agir."
},
{
id: 367,
notion: 'devoir',
intitule: "Peut-on devoir à autrui plus qu'à soi-même ?",
piste1: "L'altruisme peut-il aller jusqu'à faire passer autrui avant soi ?",
piste2: "ou le souci de soi reste-t-il la mesure de toute obligation ?",
racine1: "Se sacrifier est-il un devoir ou un excès ?",
racine2: "ou la valeur d'autrui est-elle strictement égale à la nôtre ?",
enjeu: "Déterminer la priorité respective de soi et d'autrui dans le devoir."
},
{
id: 368,
notion: 'devoir',
intitule: "Le devoir est-il de dire la vérité ?",
piste1: "La véracité est-elle une obligation sans exception ?",
piste2: "ou dire la vérité peut-il cesser d'être un devoir ?",
racine1: "Le mensonge porte-t-il atteinte à la condition même de la parole ?",
racine2: "ou la vérité doit-elle céder devant un mal plus grand ?",
enjeu: "Examiner le caractère absolu du devoir de véracité."
},
{
id: 369,
notion: 'devoir',
intitule: "Le secret est-il un devoir ?",
piste1: "Certaines confidences nous obligent-elles au silence ?",
piste2: "ou taire ce que l'on sait est-il toujours suspect ?",
racine1: "La confiance reçue crée-t-elle une obligation ?",
racine2: "ou le secret protège-t-il parfois ce qui devrait être su ?",
enjeu: "Déterminer la valeur morale de la confidentialité."
},
{
id: 370,
notion: 'devoir',
intitule: "Tenir ses promesses est-il un devoir absolu ?",
piste1: "L'engagement pris nous lie-t-il quelles que soient les circonstances ?",
piste2: "ou des changements imprévus peuvent-ils nous délier ?",
racine1: "La promesse crée-t-elle une obligation par sa forme seule ?",
racine2: "ou celui qui s'engage suppose-t-il des conditions tacites ?",
enjeu: "Examiner la force obligatoire de l'engagement."
},
{
id: 371,
notion: 'devoir',
intitule: "Le devoir suppose-t-il la vertu ?",
piste1: "Accomplir son devoir exige-t-il une disposition stable du caractère ?",
piste2: "ou suffit-il de faire ce qu'il faut, quelle que soit notre disposition ?",
racine1: "La valeur d'une action dépend-elle de celui qui l'accomplit ?",
racine2: "ou la morale porte-t-elle sur les actes plutôt que sur les personnes ?",
enjeu: "Distinguer éthique du devoir et éthique de la vertu."
},
{
id: 372,
notion: 'devoir',
intitule: "La vertu est-elle une force ?",
piste1: "La vertu est-elle une puissance d'agir bien ?",
piste2: "ou n'est-elle qu'une conformité habituelle aux règles ?",
racine1: "Une disposition acquise peut-elle augmenter notre capacité d'agir ?",
racine2: "ou la vertu se définit-elle par l'excellence plutôt que par l'obéissance ?",
enjeu: "Déterminer la nature de la vertu comme disposition et comme excellence."
},
{
id: 373,
notion: 'devoir',
intitule: "La vertu s'apprend-elle ?",
piste1: "Peut-on devenir vertueux par l'exercice et l'exemple ?",
piste2: "ou la vertu suppose-t-elle une décision que nul ne peut prendre à notre place ?",
racine1: "Une disposition du caractère se transmet-elle comme un savoir ?",
racine2: "ou l'habitude produit-elle seulement l'apparence de la vertu ?",
enjeu: "Examiner l'acquisition de la vertu."
},
{
id: 374,
notion: 'devoir',
intitule: "Le devoir est-il une habitude ?",
piste1: "Accomplir son devoir devient-il une seconde nature ?",
piste2: "ou chaque obligation exige-t-elle une décision nouvelle ?",
racine1: "Ce qui est fait par habitude a-t-il encore une valeur morale ?",
racine2: "ou la vertu stable dispense-t-elle de la délibération ?",
enjeu: "Déterminer le rapport entre habitude et moralité."
},
{
id: 375,
notion: 'devoir',
intitule: "Le mérite tient-il à l'intention ?",
piste1: "Une action vaut-elle par ce que son auteur voulait ?",
piste2: "ou se juge-t-elle à ce qu'elle produit effectivement ?",
racine1: "Peut-on être responsable de ce que l'on n'a pas voulu ?",
racine2: "ou la bonne volonté sans effet mérite-t-elle notre estime ?",
enjeu: "Déterminer le critère du mérite moral."
},
{
id: 376,
notion: 'devoir',
intitule: "Le devoir accompli mérite-t-il reconnaissance ?",
piste1: "Celui qui fait son dû peut-il exiger notre estime ?",
piste2: "ou le devoir accompli ne fait-il que satisfaire une exigence normale ?",
racine1: "Ce qui est obligatoire est-il pour autant louable ?",
racine2: "ou la reconnaissance est-elle le moteur de la vie morale ?",
enjeu: "Distinguer l'accomplissement du devoir et le mérite qu'on lui accorde."
},
{
id: 377,
notion: 'devoir',
intitule: "Peut-on faire son devoir sans le vouloir ?",
piste1: "Une action conforme à l'obligation suffit-elle ?",
piste2: "ou faut-il l'accomplir parce qu'elle est obligatoire ?",
racine1: "La conformité extérieure et la moralité se confondent-elles ?",
racine2: "ou agir par prudence n'est-il pas agir par devoir ?",
enjeu: "Distinguer agir conformément au devoir et agir par devoir."
},
{
id: 378,
notion: 'devoir',
intitule: "Le devoir est-il une affaire de principes ou de sentiments ?",
piste1: "L'obligation se fonde-t-elle sur des règles impersonnelles ?",
piste2: "ou naît-elle de l'attention portée aux personnes concrètes ?",
racine1: "Un principe peut-il saisir ce qui rend une situation singulière ?",
racine2: "ou le sentiment sans principe devient-il arbitraire ?",
enjeu: "Examiner l'opposition entre éthique de justice et éthique de sollicitude."
},
{
id: 379,
notion: 'devoir',
intitule: "Le courage est-il un devoir ?",
piste1: "Devons-nous affronter le danger quand il le faut ?",
piste2: "ou le courage est-il une qualité admirable mais non exigible ?",
racine1: "Peut-on obliger quelqu'un à surmonter sa peur ?",
racine2: "ou la lâcheté est-elle un manquement à ce que l'on doit ?",
enjeu: "Déterminer le statut moral du courage."
},
{
id: 380,
notion: 'devoir',
intitule: "La prudence est-elle une vertu morale ?",
piste1: "Bien calculer ce qui nous avantage est-il moralement valable ?",
piste2: "ou la prudence n'est-elle qu'une habileté au service de nos fins ?",
racine1: "Une qualité qui sert nos intérêts peut-elle être une vertu ?",
racine2: "ou le discernement des moyens est-il inséparable de la justesse des fins ?",
enjeu: "Distinguer la prudence pratique de la sagesse morale."
},
{
id: 381,
notion: 'devoir',
intitule: "Le devoir s'éduque-t-il ?",
piste1: "L'exigence morale peut-elle être transmise ?",
piste2: "ou chacun doit-il la reconnaître par lui-même ?",
racine1: "Ce qui oblige la conscience peut-il venir de l'extérieur ?",
racine2: "ou l'éducation ne fait-elle que lever les obstacles à une exigence déjà présente ?",
enjeu: "Examiner la transmission de l'obligation morale."
},
{
id: 382,
notion: 'devoir',
intitule: "L'éducation morale est-elle un endoctrinement ?",
piste1: "Former le jugement moral, est-ce imposer des convictions ?",
piste2: "ou peut-on éduquer sans soumettre ?",
racine1: "Transmettre des valeurs suppose-t-il de les soustraire à l'examen ?",
racine2: "ou l'autonomie se construit-elle à partir de ce qui a d'abord été reçu ?",
enjeu: "Déterminer les conditions d'une éducation morale non dogmatique."
},
{
id: 383,
notion: 'devoir',
intitule: "Les devoirs peuvent-ils se contredire ?",
piste1: "Peut-on être tenu à deux actions incompatibles ?",
piste2: "ou un véritable devoir ne peut-il contredire un autre ?",
racine1: "Une exigence inconditionnelle peut-elle entrer en conflit avec une autre ?",
racine2: "ou le conflit révèle-t-il que l'un des deux devoirs était apparent ?",
enjeu: "Examiner la cohérence du système des obligations."
},
{
id: 384,
notion: 'devoir',
intitule: "Peut-on hiérarchiser les devoirs ?",
piste1: "Existe-t-il un ordre de priorité entre les obligations ?",
piste2: "ou toute hiérarchie est-elle arbitraire ?",
racine1: "Comparer des devoirs suppose-t-il une mesure commune ?",
racine2: "ou la situation singulière impose-t-elle à chaque fois un choix ?",
enjeu: "Déterminer les critères de résolution des conflits de devoirs."
},
{
id: 385,
notion: 'devoir',
intitule: "Le tragique moral est-il inévitable ?",
piste1: "Certaines situations condamnent-elles à mal agir quoi qu'on fasse ?",
piste2: "ou existe-t-il toujours une action juste ?",
racine1: "Le monde est-il ordonné de manière à rendre la vertu possible ?",
racine2: "ou la faute est-elle parfois le prix de toute décision ?",
enjeu: "Examiner l'existence de situations moralement sans issue."
},
{
id: 386,
notion: 'devoir',
intitule: "Le devoir est-il de suivre les conséquences ?",
piste1: "Une action se juge-t-elle à ses effets prévisibles ?",
piste2: "ou certaines actions sont-elles interdites quels que soient leurs effets ?",
racine1: "La valeur d'un acte est-elle contenue dans ses résultats ?",
racine2: "ou l'intention et la nature de l'acte comptent-elles par elles-mêmes ?",
enjeu: "Examiner l'opposition entre conséquentialisme et déontologie."
},
{
id: 387,
notion: 'devoir',
intitule: "La fin justifie-t-elle les moyens ?",
piste1: "Une fin bonne rend-elle acceptable tout ce qui la réalise ?",
piste2: "ou les moyens ont-ils une valeur morale propre ?",
racine1: "La valeur se transmet-elle de la fin aux moyens ?",
racine2: "ou certains moyens dégradent-ils la fin qu'ils servent ?",
enjeu: "Déterminer le rapport entre valeur des fins et valeur des moyens."
},
{
id: 388,
notion: 'devoir',
intitule: "Le nombre fait-il le devoir ?",
piste1: "Devons-nous agir pour le plus grand bien du plus grand nombre ?",
piste2: "ou les personnes ne peuvent-elles être additionnées ?",
racine1: "Les biens et les maux se somment-ils entre individus ?",
racine2: "ou chaque personne est-elle un tout qui ne se sacrifie pas à un total ?",
enjeu: "Examiner la légitimité morale de l'agrégation des intérêts."
},
{
id: 389,
notion: 'devoir',
intitule: "Peut-on sacrifier un innocent ?",
piste1: "Le salut d'un grand nombre autorise-t-il la mise à mort d'un seul ?",
piste2: "ou l'innocence est-elle un interdit absolu ?",
racine1: "La valeur d'une vie se compare-t-elle à celle d'autres vies ?",
racine2: "ou refuser tout sacrifice est-il une indifférence aux conséquences ?",
enjeu: "Déterminer les limites absolues de l'action morale."
},
{
id: 390,
notion: 'devoir',
intitule: "Le devoir est-il compatible avec la négociation politique ?",
piste1: "Agir en politique exige-t-il de compromettre ses principes ?",
piste2: "ou la responsabilité du gouvernant est-elle une autre forme du devoir ?",
racine1: "La conviction peut-elle survivre aux contraintes de l'action ?",
racine2: "ou répondre des conséquences est-il la morale propre de l'homme d'État ?",
enjeu: "Examiner la tension entre éthique de conviction et éthique de responsabilité."
},
{
id: 391,
notion: 'devoir',
intitule: "Tous les manquements sont-ils des fautes ?",
piste1: "Tout écart au devoir est-il imputable à son auteur ?",
piste2: "ou l'ignorance, la contrainte et la faiblesse excusent-elles ?",
racine1: "La faute suppose-t-elle la connaissance et la liberté ?",
racine2: "ou excuser trop revient-il à supprimer toute responsabilité ?",
enjeu: "Déterminer les conditions d'imputation d'un manquement."
},
{
id: 392,
notion: 'devoir',
intitule: "Le devoir est-il excessif ?",
piste1: "La morale demande-t-elle plus que ce que nous pouvons vivre ?",
piste2: "ou son exigence est-elle la mesure de notre humanité ?",
racine1: "Une exigence qui écrase celui qui la reçoit est-elle légitime ?",
racine2: "ou abaisser l'exigence revient-il à renoncer à la morale ?",
enjeu: "Examiner le niveau d'exigence supportable de la vie morale."
},
{
id: 393,
notion: 'devoir',
intitule: "Le devoir se déduit-il de la nature ?",
piste1: "Ce que nous devons faire se lit-il dans ce que nous sommes ?",
piste2: "ou la nature ne prescrit-elle rien à la volonté ?",
racine1: "Peut-on passer de ce qui est à ce qui doit être ?",
racine2: "ou l'homme se définit-il par sa capacité à s'arracher à ses déterminations ?",
enjeu: "Déterminer la validité du fondement naturaliste du devoir."
},
{
id: 394,
notion: 'devoir',
intitule: "Devons-nous quelque chose aux animaux ?",
piste1: "Les animaux peuvent-ils être l'objet d'obligations directes ?",
piste2: "ou ne devons-nous à leur égard que ce que nous devons aux hommes ?",
racine1: "Être un sujet de droits suppose-t-il la rationalité ?",
racine2: "ou la capacité de souffrir suffit-elle à fonder une obligation ?",
enjeu: "Examiner le fondement du devoir envers les êtres sensibles non humains."
},
{
id: 395,
notion: 'devoir',
intitule: "Devons-nous quelque chose aux générations futures ?",
piste1: "Peut-on avoir des obligations envers des êtres qui n'existent pas encore ?",
piste2: "ou toute obligation suppose-t-elle un destinataire actuel ?",
racine1: "Un devoir suppose-t-il un créancier identifiable ?",
racine2: "ou nos actes engagent-ils ceux qui en subiront les effets ?",
enjeu: "Déterminer la possibilité d'une obligation envers l'avenir."
},
{
id: 396,
notion: 'devoir',
intitule: "Le devoir est-il de protéger la nature ?",
piste1: "La nature a-t-elle une valeur qui oblige en elle-même ?",
piste2: "ou ne la protégeons-nous que pour les hommes qui en dépendent ?",
racine1: "Ce qui n'a pas de valeur d'usage peut-il avoir une valeur ?",
racine2: "ou l'obligation écologique se ramène-t-elle à la prudence collective ?",
enjeu: "Examiner le fondement du devoir environnemental."
},
{
id: 397,
notion: 'devoir',
intitule: "La technique crée-t-elle de nouveaux devoirs ?",
piste1: "Notre pouvoir accru étend-il le champ de nos obligations ?",
piste2: "ou les devoirs restent-ils les mêmes, seuls les moyens changeant ?",
racine1: "Pouvoir faire quelque chose crée-t-il une obligation de le faire ou de s'en abstenir ?",
racine2: "ou l'obligation est-elle antérieure aux moyens de la satisfaire ?",
enjeu: "Déterminer l'effet du pouvoir technique sur l'étendue du devoir."
},
{
id: 398,
notion: 'devoir',
intitule: "Le savant est-il responsable de ses découvertes ?",
piste1: "Celui qui produit un savoir répond-il de ses usages ?",
piste2: "ou la recherche est-elle neutre, seuls les usages étant fautifs ?",
racine1: "Peut-on séparer la connaissance de ses applications ?",
racine2: "ou prévoir les usages fait-il partie de l'acte de découvrir ?",
enjeu: "Examiner la responsabilité morale du chercheur."
},
{
id: 399,
notion: 'devoir',
intitule: "Le devoir est-il soluble dans la responsabilité ?",
piste1: "Répondre de ses actes remplace-t-il l'obéissance à des règles ?",
piste2: "ou la responsabilité suppose-t-elle encore des obligations définies ?",
racine1: "Être responsable, est-ce répondre devant quelqu'un de quelque chose ?",
racine2: "ou la responsabilité s'étend-elle sans règle à ce qui nous est confié ?",
enjeu: "Déterminer le rapport entre éthique du devoir et éthique de la responsabilité."
},
{
id: 400,
notion: 'devoir',
intitule: "Le devoir a-t-il un avenir ?",
piste1: "L'idée d'obligation conserve-t-elle un sens dans nos sociétés ?",
piste2: "ou cède-t-elle la place au calcul, au droit et à l'expression de soi ?",
racine1: "Une société peut-elle tenir sans exigence reconnue par tous ?",
racine2: "ou la multiplication des droits rend-elle le devoir superflu ?",
enjeu: "Examiner la pertinence contemporaine de la notion de devoir."
},

{
id: 401,
notion: 'État',
intitule: "Qu'est-ce que l'État ?",
piste1: "L'État se définit-il par le territoire, le peuple et le gouvernement ?",
piste2: "ou est-il une idée qui organise la vie commune ?",
racine1: "L'État est-il une réalité matérielle ou une institution abstraite ?",
racine2: "ou se réduit-il à l'appareil administratif qui exerce l'autorité ?",
enjeu: "Déterminer ce qui constitue l'essence de l'État."
},
{
id: 402,
notion: 'État',
intitule: "L'État est-il nécessaire ?",
piste1: "Sans État, la vie commune serait-elle impossible ?",
piste2: "ou l'humanité pourrait-elle s'organiser autrement ?",
racine1: "L'État répond-il à une nécessité naturelle ou historique ?",
racine2: "ou n'est-il qu'une solution contingente parmi d'autres ?",
enjeu: "Interroger la nécessité de l'État pour la vie humaine."
},
{
id: 403,
notion: 'État',
intitule: "L'État est-il un mal nécessaire ?",
piste1: "L'État restreint-il nos libertés pour éviter un pire ?",
piste2: "ou réalise-t-il positivement notre nature sociale ?",
racine1: "L'État est-il une limitation regrettable de la liberté individuelle ?",
racine2: "ou est-il la condition de l'exercice réel de cette liberté ?",
enjeu: "Évaluer si l'État est une contrainte ou un accomplissement."
},
{
id: 404,
notion: 'État',
intitule: "L'État a-t-il une origine naturelle ?",
piste1: "L'homme est-il par nature un animal politique ?",
piste2: "ou l'État est-il une construction artificielle ?",
racine1: "La cité réalise-t-elle une tendance inscrite dans la nature humaine ?",
racine2: "ou naît-elle d'une convention entre individus isolés ?",
enjeu: "Déterminer si l'État est naturel ou artificiel."
},
{
id: 405,
notion: 'État',
intitule: "L'État est-il une convention ?",
piste1: "L'État résulte-t-il d'un accord entre les hommes ?",
piste2: "ou s'impose-t-il indépendamment de leur volonté ?",
racine1: "Le contrat social est-il un événement historique ou une idée régulatrice ?",
racine2: "ou la société précède-t-elle toute convention ?",
enjeu: "Examiner le caractère contractuel ou spontané de l'État."
},
{
id: 406,
notion: 'État',
intitule: "L'État est-il un contrat ?",
piste1: "L'État repose-t-il sur un engagement mutuel des citoyens ?",
piste2: "ou cette idée masque-t-elle des rapports de force réels ?",
racine1: "Le contrat suppose-t-il des contractants libres et égaux ?",
racine2: "ou l'adhésion à l'État est-elle toujours tacite et contrainte ?",
enjeu: "Évaluer la pertinence du modèle contractuel pour penser l'État."
},
{
id: 407,
notion: 'État',
intitule: "L'État a-t-il un fondement rationnel ?",
piste1: "L'État peut-il être justifié par la raison seule ?",
piste2: "ou repose-t-il sur des croyances, des traditions, des passions ?",
racine1: "La rationalité suffit-elle à fonder l'obéissance politique ?",
racine2: "ou l'État exige-t-il un attachement qui excède la raison ?",
enjeu: "Déterminer si la raison peut fonder l'État."
},
{
id: 408,
notion: 'État',
intitule: "L'État a-t-il un fondement divin ?",
piste1: "L'autorité politique vient-elle de Dieu ?",
piste2: "ou l'État est-il une pure institution humaine ?",
racine1: "Le pouvoir politique requiert-il une sanction transcendante ?",
racine2: "ou la sécularisation est-elle la condition de l'État moderne ?",
enjeu: "Interroger le rapport entre politique et sacré."
},
{
id: 409,
notion: 'État',
intitule: "L'État est-il l'expression de la volonté générale ?",
piste1: "Les lois expriment-elles ce que le peuple veut réellement ?",
piste2: "ou la volonté générale diffère-t-elle de la somme des volontés particulières ?",
racine1: "La souveraineté populaire est-elle effective ou fictive ?",
racine2: "ou le peuple peut-il vouloir autre chose que son intérêt particulier ?",
enjeu: "Examiner la réalité de la volonté générale dans l'État."
},
{
id: 410,
notion: 'État',
intitule: "L'État est-il l'instrument d'une classe ?",
piste1: "L'État sert-il les intérêts des dominants ?",
piste2: "ou représente-t-il l'ensemble de la société ?",
racine1: "Le pouvoir politique est-il déterminé par les rapports économiques ?",
racine2: "ou l'État possède-t-il une autonomie relative ?",
enjeu: "Déterminer si l'État est neutre ou partial."
},
{
id: 411,
notion: 'État',
intitule: "L'État est-il neutre ?",
piste1: "L'État peut-il se tenir à égale distance de toutes les conceptions du bien ?",
piste2: "ou incarne-t-il nécessairement certaines valeurs ?",
racine1: "La neutralité de l'État est-elle possible ou souhaitable ?",
racine2: "ou toute politique suppose-t-elle un choix éthique ?",
enjeu: "Interroger la neutralité axiologique de l'État."
},
{
id: 412,
notion: 'État',
intitule: "L'État est-il au service du bien commun ?",
piste1: "L'État poursuit-il une fin qui dépasse les intérêts particuliers ?",
piste2: "ou n'est-il que l'arène où s'affrontent des intérêts rivaux ?",
racine1: "Le bien commun est-il une réalité ou une fiction ?",
racine2: "ou l'État peut-il se réduire à la gestion des particularismes ?",
enjeu: "Déterminer la finalité véritable de l'État."
},
{
id: 413,
notion: 'État',
intitule: "L'État est-il au service des individus ?",
piste1: "L'État existe-t-il pour protéger les droits des personnes ?",
piste2: "ou les individus existent-ils pour servir l'État ?",
racine1: "L'individu est-il la fin dernière de la politique ?",
racine2: "ou l'État a-t-il une valeur supérieure à celle de ses membres ?",
enjeu: "Examiner le rapport entre individu et collectivité politique."
},
{
id: 414,
notion: 'État',
intitule: "L'État doit-il être limité ?",
piste1: "L'action de l'État doit-elle connaître des bornes ?",
piste2: "ou peut-il intervenir dans tous les domaines de la vie sociale ?",
racine1: "Existe-t-il des sphères où l'État n'a pas à pénétrer ?",
racine2: "ou la toute-puissance de l'État est-elle la condition de son efficacité ?",
enjeu: "Déterminer les limites légitimes de l'État."
},
{
id: 415,
notion: 'État',
intitule: "L'État doit-il être minimal ?",
piste1: "L'État doit-il se limiter à la sécurité et à la justice ?",
piste2: "ou doit-il prendre en charge le bien-être de tous ?",
racine1: "L'État-gendarme est-il la seule forme légitime d'État ?",
racine2: "ou l'État-providence répond-il à une exigence de justice ?",
enjeu: "Débattre entre État minimal et État social."
},
{
id: 416,
notion: 'État',
intitule: "L'État doit-il être maximal ?",
piste1: "L'État doit-il tout réguler pour assurer l'égalité réelle ?",
piste2: "ou cette extension détruit-elle la liberté individuelle ?",
racine1: "L'État total est-il la conséquence logique de l'État social ?",
racine2: "ou existe-t-il un équilibre entre intervention et liberté ?",
enjeu: "Interroger les risques de l'extension étatique."
},
{
id: 417,
notion: 'État',
intitule: "L'État doit-il être fort ?",
piste1: "La puissance de l'État est-elle la condition de l'ordre ?",
piste2: "ou un État trop fort écrase-t-il les libertés ?",
racine1: "La force de l'État garantit-elle la paix civile ?",
racine2: "ou la faiblesse de l'État est-elle parfois une vertu ?",
enjeu: "Évaluer la relation entre force de l'État et liberté."
},
{
id: 418,
notion: 'État',
intitule: "L'État peut-il être faible ?",
piste1: "Un État faible est-il un État failli ?",
piste2: "ou la faiblesse de l'État peut-elle laisser place à l'autonomie sociale ?",
racine1: "L'absence d'État entraîne-t-elle nécessairement le chaos ?",
racine2: "ou certaines sociétés fonctionnent-elles sans État puissant ?",
enjeu: "Examiner les formes et les conséquences de la faiblesse étatique."
},
{
id: 419,
notion: 'État',
intitule: "L'État est-il légitime ?",
piste1: "Qu'est-ce qui fonde le droit de l'État à commander ?",
piste2: "ou la légitimité est-elle toujours contestable ?",
racine1: "La légitimité vient-elle du consentement, de la raison ou de la tradition ?",
racine2: "ou l'État n'a-t-il d'autre fondement que la force ?",
enjeu: "Déterminer les fondements de la légitimité politique."
},
{
id: 420,
notion: 'État',
intitule: "Qu'est-ce qui fonde la légitimité de l'État ?",
piste1: "Le consentement des gouvernés suffit-il à légitimer l'État ?",
piste2: "ou faut-il encore que l'État soit juste ?",
racine1: "La légitimité procède-t-elle d'en bas ou d'en haut ?",
racine2: "ou la légitimité exige-t-elle les deux à la fois ?",
enjeu: "Identifier les sources de la légitimité politique."
},
{
id: 421,
notion: 'État',
intitule: "L'État a-t-il le monopole de la violence légitime ?",
piste1: "L'État est-il le seul à pouvoir user légitimement de la force ?",
piste2: "ou d'autres instances peuvent-elles exercer une violence juste ?",
racine1: "La violence d'État est-elle toujours légitime ?",
racine2: "ou la violence privée peut-elle être légitime dans certains cas ?",
enjeu: "Examiner le rapport entre État et violence."
},
{
id: 422,
notion: 'État',
intitule: "L'État est-il violence ?",
piste1: "L'État se réduit-il à l'exercice de la force ?",
piste2: "ou la violence n'est-elle qu'un aspect de son action ?",
racine1: "L'État naît-il de la violence et s'y maintient-il ?",
racine2: "ou l'État est-il d'abord droit, raison et reconnaissance ?",
enjeu: "Déterminer la place de la violence dans l'État."
},
{
id: 423,
notion: 'État',
intitule: "L'État est-il raison ?",
piste1: "L'État incarne-t-il la rationalité dans l'histoire ?",
piste2: "ou est-il le lieu de l'arbitraire et de la passion ?",
racine1: "L'État réalise-t-il l'idée rationnelle du droit ?",
racine2: "ou la raison d'État justifie-t-elle l'irrationalité ?",
enjeu: "Interroger le rapport entre État et rationalité."
},
{
id: 424,
notion: 'État',
intitule: "L'État est-il droit ?",
piste1: "L'État se confond-il avec l'ordre juridique ?",
piste2: "ou l'État peut-il exister hors du droit ?",
racine1: "L'État de droit est-il la seule forme véritable d'État ?",
racine2: "ou l'État précède-t-il le droit qu'il institue ?",
enjeu: "Déterminer le rapport entre État et droit."
},
{
id: 425,
notion: 'État',
intitule: "L'État est-il au-dessus des lois ?",
piste1: "L'État peut-il s'exonérer des règles qu'il édicte ?",
piste2: "ou l'État doit-il se soumettre au droit qu'il produit ?",
racine1: "La souveraineté implique-t-elle l'irresponsabilité juridique ?",
racine2: "ou l'État de droit suppose-t-il l'autolimitation de l'État ?",
enjeu: "Examiner le rapport entre souveraineté et soumission au droit."
},
{
id: 426,
notion: 'État',
intitule: "L'État de droit est-il la meilleure forme d'État ?",
piste1: "La soumission de l'État au droit garantit-elle la liberté ?",
piste2: "ou le formalisme juridique peut-il cacher des injustices ?",
racine1: "Le droit suffit-il à faire un bon État ?",
racine2: "ou faut-il encore que le droit soit juste ?",
enjeu: "Évaluer les mérites et les limites de l'État de droit."
},
{
id: 427,
notion: 'État',
intitule: "L'État est-il une personne morale ?",
piste1: "L'État peut-il être sujet de droits et de devoirs ?",
piste2: "ou cette fiction masque-t-elle la réalité des individus ?",
racine1: "L'État a-t-il une existence propre distincte de ses membres ?",
racine2: "ou n'est-il qu'une abstraction commode ?",
enjeu: "Déterminer le statut ontologique de l'État."
},
{
id: 428,
notion: 'État',
intitule: "L'État a-t-il une conscience ?",
piste1: "L'État peut-il délibérer et décider comme un sujet ?",
piste2: "ou la conscience est-elle réservée aux individus ?",
racine1: "Les institutions peuvent-elles penser ?",
racine2: "ou la conscience de l'État est-elle celle de ses représentants ?",
enjeu: "Interroger la subjectivité politique de l'État."
},
{
id: 429,
notion: 'État',
intitule: "L'État a-t-il une volonté propre ?",
piste1: "L'État veut-il quelque chose par lui-même ?",
piste2: "ou sa volonté n'est-elle que celle de ceux qui le gouvernent ?",
racine1: "La volonté de l'État se réduit-elle à celle des gouvernants ?",
racine2: "ou l'État a-t-il une raison d'État qui lui est propre ?",
enjeu: "Déterminer la nature de la volonté étatique."
},
{
id: 430,
notion: 'État',
intitule: "L'État est-il distinct de la société ?",
piste1: "L'État et la société civile forment-ils deux ordres séparés ?",
piste2: "ou l'État est-il une émanation de la société ?",
racine1: "L'État domine-t-il la société ou en est-il l'instrument ?",
racine2: "ou la distinction entre État et société est-elle artificielle ?",
enjeu: "Examiner le rapport entre État et société civile."
},
{
id: 431,
notion: 'État',
intitule: "L'État est-il distinct du gouvernement ?",
piste1: "L'État survit-il aux gouvernements qui se succèdent ?",
piste2: "ou l'État se confond-il avec le pouvoir en place ?",
racine1: "La permanence de l'État garantit-elle sa continuité ?",
racine2: "ou chaque gouvernement refonde-t-il l'État ?",
enjeu: "Distinguer l'État et ses gouvernants."
},
{
id: 432,
notion: 'État',
intitule: "L'État est-il distinct de la nation ?",
piste1: "L'État et la nation coïncident-ils ?",
piste2: "ou peut-il y avoir un État sans nation et une nation sans État ?",
racine1: "La nation est-elle le fondement de l'État ?",
racine2: "ou l'État peut-il créer la nation ?",
enjeu: "Déterminer le rapport entre État et nation."
},
{
id: 433,
notion: 'État',
intitule: "L'État est-il distinct du peuple ?",
piste1: "Le peuple est-il souverain ou l'État l'est-il ?",
piste2: "ou le peuple et l'État sont-ils deux expressions d'une même réalité ?",
racine1: "Le peuple précède-t-il l'État ?",
racine2: "ou l'État constitue-t-il le peuple en sujet politique ?",
enjeu: "Examiner la relation entre peuple et État."
},
{
id: 434,
notion: 'État',
intitule: "L'État est-il la condition de la liberté ?",
piste1: "Sans État, la liberté serait-elle impossible ?",
piste2: "ou l'État est-il toujours une menace pour la liberté ?",
racine1: "La liberté politique suppose-t-elle l'État ?",
racine2: "ou la liberté véritable exige-t-elle l'absence d'État ?",
enjeu: "Déterminer si l'État rend possible ou empêche la liberté."
},
{
id: 435,
notion: 'État',
intitule: "L'État est-il une limite à la liberté ?",
piste1: "L'État restreint-il nécessairement nos libertés ?",
piste2: "ou fixe-t-il les conditions de leur exercice ?",
racine1: "Toute loi est-elle une limitation de la liberté ?",
racine2: "ou la loi est-elle la condition de la liberté civile ?",
enjeu: "Interroger le rapport entre État et liberté."
},
{
id: 436,
notion: 'État',
intitule: "L'État garantit-il la liberté ?",
piste1: "L'État protège-t-il effectivement les libertés individuelles ?",
piste2: "ou les menace-t-il par son expansion même ?",
racine1: "Les droits fondamentaux sont-ils mieux garantis par l'État ?",
racine2: "ou l'État est-il le premier violateur des droits ?",
enjeu: "Évaluer le rôle de l'État dans la protection des libertés."
},
{
id: 437,
notion: 'État',
intitule: "L'État garantit-il l'égalité ?",
piste1: "L'État peut-il produire une égalité réelle entre les citoyens ?",
piste2: "ou se contente-t-il d'une égalité formelle ?",
racine1: "L'égalité devant la loi suffit-elle à faire des citoyens égaux ?",
racine2: "ou l'État doit-il corriger les inégalités sociales ?",
enjeu: "Déterminer la portée de l'égalité produite par l'État."
},
{
id: 438,
notion: 'État',
intitule: "L'État doit-il être juste ?",
piste1: "La justice est-elle une exigence constitutive de l'État ?",
piste2: "ou l'État peut-il se passer de justice ?",
racine1: "Un État injuste est-il encore un État ?",
racine2: "ou la justice est-elle un idéal que l'État poursuit sans l'atteindre ?",
enjeu: "Examiner le rapport entre État et justice."
},
{
id: 439,
notion: 'État',
intitule: "L'État doit-il être moral ?",
piste1: "L'État doit-il promouvoir la vertu ?",
piste2: "ou doit-il se limiter à garantir le droit ?",
racine1: "La morale et la politique ont-elles les mêmes fins ?",
racine2: "ou l'État doit-il rester neutre sur les conceptions du bien ?",
enjeu: "Déterminer le rapport entre État et morale."
},
{
id: 440,
notion: 'État',
intitule: "L'État peut-il être immoral ?",
piste1: "L'État peut-il agir contre la morale commune ?",
piste2: "ou la raison d'État justifie-t-elle ce qui serait immoral pour un individu ?",
racine1: "La morale d'État diffère-t-elle de la morale privée ?",
racine2: "ou l'État est-il soumis aux mêmes exigences morales que les individus ?",
enjeu: "Interroger la moralité de l'action étatique."
},
{
id: 441,
notion: 'État',
intitule: "L'État a-t-il une morale ?",
piste1: "L'État obéit-il à des principes moraux spécifiques ?",
piste2: "ou la morale est-elle étrangère à l'action politique ?",
racine1: "La raison d'État constitue-t-elle une morale propre ?",
racine2: "ou l'État est-il amoral par nature ?",
enjeu: "Déterminer s'il existe une morale de l'État."
},
{
id: 442,
notion: 'État',
intitule: "L'État doit-il être laïque ?",
piste1: "L'État doit-il séparer le politique du religieux ?",
piste2: "ou cette séparation est-elle impossible ou indésirable ?",
racine1: "La laïcité est-elle la condition de la liberté de conscience ?",
racine2: "ou supprime-t-elle une dimension essentielle de la vie sociale ?",
enjeu: "Examiner le principe de laïcité dans l'État."
},
{
id: 443,
notion: 'État',
intitule: "L'État doit-il être religieux ?",
piste1: "L'État peut-il se passer d'un fondement religieux ?",
piste2: "ou la religion est-elle nécessaire à la cohésion politique ?",
racine1: "Le sacré est-il le fondement ultime de l'autorité politique ?",
racine2: "ou la sécularisation est-elle le signe de la maturité politique ?",
enjeu: "Déterminer le rapport entre État et religion."
},
{
id: 444,
notion: 'État',
intitule: "L'État doit-il être neutre religieusement ?",
piste1: "L'État peut-il traiter toutes les religions de manière égale ?",
piste2: "ou cette neutralité est-elle impossible ?",
racine1: "La neutralité religieuse de l'État est-elle une fiction ?",
racine2: "ou est-elle la condition de la paix civile ?",
enjeu: "Interroger la neutralité religieuse de l'État."
},
{
id: 445,
notion: 'État',
intitule: "L'État doit-il éduquer ?",
piste1: "L'éducation relève-t-elle de l'État ou de la famille ?",
piste2: "ou l'État a-t-il le devoir de former les citoyens ?",
racine1: "L'école publique est-elle une nécessité politique ?",
racine2: "ou l'éducation étatique est-elle un endoctrinement ?",
enjeu: "Déterminer le rôle de l'État dans l'éducation."
},
{
id: 446,
notion: 'État',
intitule: "L'État doit-il protéger ?",
piste1: "La protection des citoyens est-elle la fonction première de l'État ?",
piste2: "ou cette fonction justifie-t-elle des excès ?",
racine1: "L'État providence prolonge-t-il la fonction protectrice de l'État ?",
racine2: "ou l'État doit-il se limiter à la sécurité ?",
enjeu: "Définir le rôle protecteur de l'État."
},
{
id: 447,
notion: 'État',
intitule: "L'État doit-il assister ?",
piste1: "L'État doit-il venir en aide aux plus démunis ?",
piste2: "ou l'assistance relève-t-elle de la charité privée ?",
racine1: "L'assistance est-elle un devoir de justice ou de bienfaisance ?",
racine2: "ou l'État doit-il garantir un minimum vital à tous ?",
enjeu: "Déterminer le rôle de l'État dans l'assistance."
},
{
id: 448,
notion: 'État',
intitule: "L'État doit-il redistribuer ?",
piste1: "La redistribution des richesses est-elle une fonction légitime de l'État ?",
piste2: "ou constitue-t-elle une atteinte à la propriété ?",
racine1: "La justice sociale exige-t-elle la redistribution ?",
racine2: "ou la redistribution est-elle un vol légalisé ?",
enjeu: "Examiner la légitimité de la redistribution étatique."
},
{
id: 449,
notion: 'État',
intitule: "L'État doit-il intervenir dans l'économie ?",
piste1: "L'État doit-il réguler l'activité économique ?",
piste2: "ou le marché se régule-t-il de lui-même ?",
racine1: "L'intervention de l'État est-elle nécessaire au bon fonctionnement de l'économie ?",
racine2: "ou cette intervention crée-t-elle plus de problèmes qu'elle n'en résout ?",
enjeu: "Déterminer le rôle économique de l'État."
},
{
id: 450,
notion: 'État',
intitule: "L'État doit-il laisser faire le marché ?",
piste1: "Le laissez-faire est-il la meilleure politique économique ?",
piste2: "ou l'État doit-il corriger les défaillances du marché ?",
racine1: "L'État nuit-il à l'économie quand il intervient ?",
racine2: "ou le marché a-t-il besoin de l'État pour fonctionner ?",
enjeu: "Débattre entre libéralisme économique et interventionnisme."
},
{
id: 451,
notion: 'État',
intitule: "L'État est-il propriétaire ?",
piste1: "L'État peut-il posséder des biens ?",
piste2: "ou la propriété publique diffère-t-elle de la propriété privée ?",
racine1: "La propriété de l'État est-elle une extension de la souveraineté ?",
racine2: "ou l'État doit-il se désengager de la propriété ?",
enjeu: "Interroger la propriété étatique."
},
{
id: 452,
notion: 'État',
intitule: "L'État peut-il exproprier ?",
piste1: "L'État peut-il priver un individu de sa propriété ?",
piste2: "ou la propriété est-elle un droit absolu ?",
racine1: "L'expropriation pour cause d'utilité publique est-elle légitime ?",
racine2: "ou constitue-t-elle une violation du droit de propriété ?",
enjeu: "Déterminer les limites du droit de propriété face à l'État."
},
{
id: 453,
notion: 'État',
intitule: "L'État peut-il surveiller ?",
piste1: "La surveillance étatique est-elle compatible avec la liberté ?",
piste2: "ou est-elle nécessaire à la sécurité ?",
racine1: "L'État a-t-il le droit de contrôler la vie privée des citoyens ?",
racine2: "ou la sécurité exige-t-elle une surveillance généralisée ?",
enjeu: "Examiner le rapport entre surveillance étatique et libertés."
},
{
id: 454,
notion: 'État',
intitule: "L'État peut-il censurer ?",
piste1: "L'État peut-il limiter la liberté d'expression ?",
piste2: "ou la censure est-elle toujours illégitime ?",
racine1: "La liberté d'expression est-elle absolue ?",
racine2: "ou certaines limites sont-elles nécessaires à la vie démocratique ?",
enjeu: "Déterminer les limites de la liberté d'expression face à l'État."
},
{
id: 455,
notion: 'État',
intitule: "L'État peut-il punir ?",
piste1: "Le droit de punir appartient-il à l'État seul ?",
piste2: "ou la vengeance privée peut-elle être légitime ?",
racine1: "Le monopole de la sanction est-il constitutif de l'État ?",
racine2: "ou l'État doit-il partager ce pouvoir avec d'autres instances ?",
enjeu: "Déterminer le droit de punir de l'État."
},
{
id: 456,
notion: 'État',
intitule: "L'État a-t-il le droit de tuer ?",
piste1: "La peine de mort est-elle légitime ?",
piste2: "ou l'État n'a-t-il jamais le droit de donner la mort ?",
racine1: "Le droit de tuer appartient-il à l'État ?",
racine2: "ou la vie est-elle un droit absolu que l'État ne peut violer ?",
enjeu: "Interroger le droit de mort de l'État."
},
{
id: 457,
notion: 'État',
intitule: "L'État peut-il faire la guerre ?",
piste1: "L'État a-t-il le droit de recourir à la guerre ?",
piste2: "ou la guerre est-elle toujours illégitime ?",
racine1: "Le droit de guerre est-il un attribut de la souveraineté ?",
racine2: "ou l'État doit-il rechercher la paix par tous les moyens ?",
enjeu: "Déterminer la légitimité de la guerre par l'État."
},
{
id: 458,
notion: 'État',
intitule: "L'État doit-il faire la paix ?",
piste1: "La paix est-elle la fin dernière de l'État ?",
piste2: "ou l'État a-t-il d'autres fins que la paix ?",
racine1: "L'État existe-t-il pour assurer la paix intérieure et extérieure ?",
racine2: "ou la paix n'est-elle qu'un moyen au service d'autres fins ?",
enjeu: "Déterminer le rapport entre État et paix."
},
{
id: 459,
notion: 'État',
intitule: "L'État est-il souverain ?",
piste1: "L'État détient-il le pouvoir suprême ?",
piste2: "ou la souveraineté est-elle partagée ?",
racine1: "La souveraineté est-elle une et indivisible ?",
racine2: "ou peut-elle être divisée entre plusieurs instances ?",
enjeu: "Définir la souveraineté de l'État."
},
{
id: 460,
notion: 'État',
intitule: "La souveraineté de l'État est-elle absolue ?",
piste1: "L'État peut-il tout faire ?",
piste2: "ou la souveraineté connaît-elle des limites ?",
racine1: "La souveraineté est-elle illimitée par nature ?",
racine2: "ou le droit international et les droits fondamentaux la limitent-ils ?",
enjeu: "Déterminer les limites de la souveraineté étatique."
},
{
id: 461,
notion: 'État',
intitule: "La souveraineté de l'État est-elle partagée ?",
piste1: "L'Union européenne partage-t-elle la souveraineté des États ?",
piste2: "ou la souveraineté reste-t-elle intégralement nationale ?",
racine1: "La souveraineté peut-elle être divisée ?",
racine2: "ou l'intégration européenne transforme-t-elle la nature de la souveraineté ?",
enjeu: "Examiner le partage de la souveraineté."
},
{
id: 462,
notion: 'État',
intitule: "L'État est-il démocratique par nature ?",
piste1: "L'État tend-il nécessairement vers la démocratie ?",
piste2: "ou la démocratie n'est-elle qu'une forme parmi d'autres ?",
racine1: "La démocratie est-elle l'aboutissement de l'État ?",
racine2: "ou l'État peut-il être autre chose que démocratique ?",
enjeu: "Déterminer le rapport entre État et démocratie."
},
{
id: 463,
notion: 'État',
intitule: "L'État peut-il être totalitaire ?",
piste1: "L'État peut-il tout contrôler ?",
piste2: "ou le totalitarisme est-il une perversion de l'État ?",
racine1: "Le totalitarisme est-il une forme d'État ou sa négation ?",
racine2: "ou l'État totalitaire réalise-t-il la logique de tout État ?",
enjeu: "Interroger la possibilité du totalitarisme."
},
{
id: 464,
notion: 'État',
intitule: "L'État peut-il être autoritaire ?",
piste1: "L'autoritarisme est-il compatible avec l'État de droit ?",
piste2: "ou l'État autoritaire est-il une contradiction ?",
racine1: "L'autorité de l'État peut-elle s'exercer sans le consentement ?",
racine2: "ou l'autoritarisme est-il toujours une dérive ?",
enjeu: "Déterminer les formes de l'autoritarisme étatique."
},
{
id: 465,
notion: 'État',
intitule: "L'État peut-il être libertaire ?",
piste1: "Un État sans contrainte est-il pensable ?",
piste2: "ou l'État implique-t-il toujours une part de contrainte ?",
racine1: "L'État libertaire est-il une contradiction dans les termes ?",
racine2: "ou l'État peut-il se réduire à la coordination volontaire ?",
enjeu: "Examiner la possibilité d'un État libertaire."
},
{
id: 466,
notion: 'État',
intitule: "L'État peut-il être anarchique ?",
piste1: "Un État sans gouvernement est-il concevable ?",
piste2: "ou l'anarchie est-elle la négation de l'État ?",
racine1: "L'anarchie est-elle l'absence d'État ou une autre forme d'organisation ?",
racine2: "ou l'État disparaît-il là où commence l'anarchie ?",
enjeu: "Déterminer le rapport entre État et anarchie."
},
{
id: 467,
notion: 'État',
intitule: "L'État peut-il disparaître ?",
piste1: "L'État est-il appelé à dépérir ?",
piste2: "ou l'État est-il une forme éternelle de l'organisation humaine ?",
racine1: "Le dépérissement de l'État est-il une utopie ou une nécessité historique ?",
racine2: "ou l'État se transforme-t-il sans disparaître ?",
enjeu: "Interroger l'avenir de l'État."
},
{
id: 468,
notion: 'État',
intitule: "L'État est-il en crise ?",
piste1: "L'État contemporain traverse-t-il une crise profonde ?",
piste2: "ou cette crise est-elle un mythe ?",
racine1: "La défiance envers l'État signe-t-elle sa fin ?",
racine2: "ou l'État se transforme-t-il pour s'adapter ?",
enjeu: "Évaluer l'état de l'État contemporain."
},
{
id: 469,
notion: 'État',
intitule: "L'État est-il dépassé ?",
piste1: "L'État est-il adapté aux défis contemporains ?",
piste2: "ou reste-t-il la forme pertinente de l'organisation politique ?",
racine1: "La mondialisation rend-elle l'État obsolète ?",
racine2: "ou l'État se renforce-t-il face aux crises ?",
enjeu: "Déterminer la pertinence actuelle de l'État."
},
{
id: 470,
notion: 'État',
intitule: "L'État est-il universel ?",
piste1: "L'État est-il une forme universelle d'organisation politique ?",
piste2: "ou est-il une invention occidentale ?",
racine1: "Toutes les sociétés humaines connaissent-elles l'État ?",
racine2: "ou l'État est-il propre à certaines cultures ?",
enjeu: "Examiner l'universalité de l'État."
},
{
id: 471,
notion: 'État',
intitule: "L'État est-il historique ?",
piste1: "L'État a-t-il une histoire ?",
piste2: "ou est-il une forme intemporelle ?",
racine1: "L'État moderne diffère-t-il radicalement des formes antérieures ?",
racine2: "ou l'État réalise-t-il une essence éternelle ?",
enjeu: "Déterminer le caractère historique de l'État."
},
{
id: 472,
notion: 'État',
intitule: "L'État est-il moderne ?",
piste1: "L'État est-il une invention de la modernité ?",
piste2: "ou existe-t-il depuis les origines de la civilisation ?",
racine1: "L'État moderne se distingue-t-il par sa souveraineté ?",
racine2: "ou la continuité l'emporte-t-elle sur la rupture ?",
enjeu: "Définir la modernité de l'État."
},
{
id: 473,
notion: 'État',
intitule: "L'État est-il occidental ?",
piste1: "L'État est-il un produit de l'Occident ?",
piste2: "ou est-il une forme universelle ?",
racine1: "Le modèle westphalien est-il exportable partout ?",
racine2: "ou chaque culture produit-elle sa propre forme d'État ?",
enjeu: "Interroger l'occidentalité de l'État."
},
{
id: 474,
notion: 'État',
intitule: "L'État est-il une invention ?",
piste1: "L'État a-t-il été inventé à un moment donné ?",
piste2: "ou s'est-il développé progressivement ?",
racine1: "L'État est-il le produit d'une décision ou d'une évolution ?",
racine2: "ou l'État est-il le résultat de la conquête et de la domination ?",
enjeu: "Déterminer l'origine de l'État."
},
{
id: 475,
notion: 'État',
intitule: "L'État est-il une institution ?",
piste1: "L'État se réduit-il à un ensemble d'institutions ?",
piste2: "ou est-il plus que la somme de ses institutions ?",
racine1: "L'État est-il une institution parmi d'autres ?",
racine2: "ou l'État est-il l'institution qui fonde toutes les autres ?",
enjeu: "Définir l'État comme institution."
},
{
id: 476,
notion: 'État',
intitule: "L'État est-il une machine ?",
piste1: "L'État est-il un appareil impersonnel ?",
piste2: "ou est-il animé par des volontés humaines ?",
racine1: "La bureaucratie réduit-elle l'État à une machine ?",
racine2: "ou l'État conserve-t-il une dimension humaine ?",
enjeu: "Interroger la nature mécanique ou humaine de l'État."
},
{
id: 477,
notion: 'État',
intitule: "L'État est-il un organisme ?",
piste1: "L'État fonctionne-t-il comme un corps vivant ?",
piste2: "ou cette métaphore est-elle dangereuse ?",
racine1: "L'analogie organique éclaire-t-elle la nature de l'État ?",
racine2: "ou justifie-t-elle le totalitarisme ?",
enjeu: "Évaluer la métaphore organique de l'État."
},
{
id: 478,
notion: 'État',
intitule: "L'État est-il un corps ?",
piste1: "L'État a-t-il un corps au sens propre ou figuré ?",
piste2: "ou l'État est-il purement spirituel ?",
racine1: "Le territoire est-il le corps de l'État ?",
racine2: "ou l'État est-il une réalité incorporelle ?",
enjeu: "Déterminer la corporéité de l'État."
},
{
id: 479,
notion: 'État',
intitule: "L'État est-il un esprit ?",
piste1: "L'État est-il une réalité spirituelle ?",
piste2: "ou est-il une réalité matérielle ?",
racine1: "L'État réalise-t-il l'Esprit objectif ?",
racine2: "ou l'État se réduit-il à des faits matériels ?",
enjeu: "Interroger la spiritualité de l'État."
},
{
id: 480,
notion: 'État',
intitule: "L'État est-il rationnel ?",
piste1: "L'État obéit-il à la raison ?",
piste2: "ou est-il le lieu de l'irrationalité ?",
racine1: "L'État réalise-t-il la rationalité dans l'histoire ?",
racine2: "ou l'État est-il traversé par des forces irrationnelles ?",
enjeu: "Déterminer la rationalité de l'État."
},
{
id: 481,
notion: 'État',
intitule: "L'État est-il irrationnel ?",
piste1: "L'État échappe-t-il à la raison ?",
piste2: "ou peut-il être réformé rationnellement ?",
racine1: "Les passions collectives dominent-elles l'État ?",
racine2: "ou l'État peut-il être guidé par la raison ?",
enjeu: "Examiner l'irrationalité de l'État."
},
{
id: 482,
notion: 'État',
intitule: "L'État est-il bureaucratique ?",
piste1: "La bureaucratie est-elle l'essence de l'État moderne ?",
piste2: "ou l'État peut-il se passer de bureaucratie ?",
racine1: "La bureaucratie garantit-elle l'impartialité de l'État ?",
racine2: "ou la bureaucratie est-elle une dérive de l'État ?",
enjeu: "Déterminer le rôle de la bureaucratie dans l'État."
},
{
id: 483,
notion: 'État',
intitule: "L'État est-il efficace ?",
piste1: "L'État peut-il atteindre ses objectifs ?",
piste2: "ou est-il structurellement inefficace ?",
racine1: "L'État est-il plus efficace que le marché ?",
racine2: "ou l'efficacité n'est-elle pas le critère pertinent pour l'État ?",
enjeu: "Évaluer l'efficacité de l'État."
},
{
id: 484,
notion: 'État',
intitule: "L'État est-il lent ?",
piste1: "La lourdeur est-elle constitutive de l'État ?",
piste2: "ou l'État peut-il être réactif ?",
racine1: "La lenteur de l'État est-elle un défaut ou une vertu ?",
racine2: "ou la rapidité de décision est-elle incompatible avec la démocratie ?",
enjeu: "Interroger la temporalité de l'État."
},
{
id: 485,
notion: 'État',
intitule: "L'État est-il juste ?",
piste1: "L'État peut-il être véritablement juste ?",
piste2: "ou la justice est-elle un idéal inatteignable pour l'État ?",
racine1: "L'État réalise-t-il la justice ou la trahit-il ?",
racine2: "ou la justice de l'État est-elle toujours imparfaite ?",
enjeu: "Déterminer la justice de l'État."
},
{
id: 486,
notion: 'État',
intitule: "L'État est-il partial ?",
piste1: "L'État favorise-t-il nécessairement certains intérêts ?",
piste2: "ou peut-il être impartial ?",
racine1: "L'impartialité de l'État est-elle possible ?",
racine2: "ou l'État est-il toujours au service de quelques-uns ?",
enjeu: "Examiner la partialité de l'État."
},
{
id: 487,
notion: 'État',
intitule: "L'État est-il impartial ?",
piste1: "L'État peut-il traiter tous les citoyens de manière égale ?",
piste2: "ou l'impartialité est-elle une illusion ?",
racine1: "L'État peut-il s'abstraire des rapports de force sociaux ?",
racine2: "ou l'impartialité est-elle la condition de sa légitimité ?",
enjeu: "Déterminer l'impartialité de l'État."
},
{
id: 488,
notion: 'État',
intitule: "L'État est-il au service de tous ?",
piste1: "L'État représente-t-il l'ensemble des citoyens ?",
piste2: "ou ne sert-il que certains d'entre eux ?",
racine1: "L'universalité de l'État est-elle effective ?",
racine2: "ou l'État est-il toujours particulier ?",
enjeu: "Interroger l'universalité de l'État."
},
{
id: 489,
notion: 'État',
intitule: "L'État est-il au service de quelques-uns ?",
piste1: "L'État est-il capturé par des intérêts particuliers ?",
piste2: "ou peut-il résister à cette capture ?",
racine1: "L'oligarchie est-elle la vérité de tout État ?",
racine2: "ou la démocratie peut-elle empêcher cette capture ?",
enjeu: "Déterminer si l'État sert tous ou quelques-uns."
},
{
id: 490,
notion: 'État',
intitule: "L'État peut-il être renversé ?",
piste1: "Le renversement de l'État est-il légitime ?",
piste2: "ou toute révolution est-elle illégitime ?",
racine1: "Le droit de révolution existe-t-il ?",
racine2: "ou la stabilité de l'État prime-t-elle sur toute considération ?",
enjeu: "Examiner la légitimité du renversement de l'État."
},
{
id: 491,
notion: 'État',
intitule: "A-t-on le droit de résister à l'État ?",
piste1: "La résistance à l'État oppressif est-elle un droit ?",
piste2: "ou toute résistance est-elle illégitime ?",
racine1: "Le droit de résistance est-il un droit naturel ?",
racine2: "ou est-il une construction juridique ?",
enjeu: "Déterminer le droit de résistance à l'État."
},
{
id: 492,
notion: 'État',
intitule: "La désobéissance civile est-elle légitime ?",
piste1: "Enfreindre publiquement une loi injuste est-il justifié ?",
piste2: "ou la désobéissance menace-t-elle l'ordre étatique ?",
racine1: "La désobéissance civile est-elle compatible avec l'État de droit ?",
racine2: "ou en est-elle un complément nécessaire ?",
enjeu: "Examiner la légitimité de la désobéissance civile."
},
{
id: 493,
notion: 'État',
intitule: "La révolution est-elle légitime ?",
piste1: "Le changement radical de l'État est-il justifié ?",
piste2: "ou la révolution est-elle toujours illégitime ?",
racine1: "La révolution réalise-t-elle le droit ou le détruit-elle ?",
racine2: "ou la révolution est-elle le fondement d'un nouvel ordre juridique ?",
enjeu: "Déterminer la légitimité de la révolution."
},
{
id: 494,
notion: 'État',
intitule: "L'État doit-il réformer ?",
piste1: "La réforme est-elle préférable à la révolution ?",
piste2: "ou la réforme est-elle insuffisante ?",
racine1: "La réforme conserve-t-elle l'État ?",
racine2: "ou la réforme transforme-t-elle l'État en profondeur ?",
enjeu: "Déterminer la valeur de la réforme étatique."
},
{
id: 495,
notion: 'État',
intitule: "L'État doit-il évoluer ?",
piste1: "L'État doit-il s'adapter aux transformations sociales ?",
piste2: "ou doit-il rester fidèle à ses principes ?",
racine1: "L'adaptation de l'État est-elle une nécessité ?",
racine2: "ou la fidélité aux principes est-elle plus importante ?",
enjeu: "Interroger l'évolution de l'État."
},
{
id: 496,
notion: 'État',
intitule: "L'État doit-il se transformer ?",
piste1: "L'État peut-il changer de nature ?",
piste2: "ou reste-t-il fondamentalement le même ?",
racine1: "La transformation de l'État est-elle possible sans révolution ?",
racine2: "ou l'État se transforme-t-il continûment ?",
enjeu: "Déterminer la possibilité de transformation de l'État."
},
{
id: 497,
notion: 'État',
intitule: "L'État est-il perfectible ?",
piste1: "L'État peut-il s'améliorer ?",
piste2: "ou est-il structurellement imparfait ?",
racine1: "Le progrès politique est-il possible ?",
racine2: "ou l'État est-il condamné à l'imperfection ?",
enjeu: "Examiner la perfectibilité de l'État."
},
{
id: 498,
notion: 'État',
intitule: "L'État est-il perfectible à l'infini ?",
piste1: "L'État peut-il atteindre la perfection ?",
piste2: "ou la perfection de l'État est-elle une illusion ?",
racine1: "L'utopie d'un État parfait est-elle souhaitable ?",
racine2: "ou la perfectibilité infinie est-elle la vérité de l'État ?",
enjeu: "Déterminer les limites de la perfectibilité de l'État."
},
{
id: 499,
notion: 'État',
intitule: "L'État a-t-il un avenir ?",
piste1: "L'État est-il appelé à perdurer ?",
piste2: "ou va-t-il disparaître au profit d'autres formes d'organisation ?",
racine1: "L'État est-il une forme historique transitoire ?",
racine2: "ou l'État est-il la forme définitive de l'organisation politique ?",
enjeu: "Interroger l'avenir de l'État."
},
{
id: 500,
notion: 'inconscient',
intitule: "Qu'est-ce que l'inconscient ?",
piste1: "L'inconscient désigne-t-il ce qui échappe à la conscience ?",
piste2: "ou est-il une instance psychique autonome ?",
racine1: "L'inconscient est-il simplement l'absence de conscience ?",
racine2: "ou possède-t-il une réalité positive ?",
enjeu: "Définir la notion d'inconscient."
},
{
id: 501,
notion: 'inconscient',
intitule: "L'inconscient est-il une réalité ?",
piste1: "L'inconscient existe-t-il véritablement ?",
piste2: "ou n'est-il qu'une construction théorique ?",
racine1: "L'inconscient est-il observable ou seulement inféré ?",
racine2: "ou ses effets suffisent-ils à attester son existence ?",
enjeu: "Déterminer le statut ontologique de l'inconscient."
},
{
id: 502,
notion: 'inconscient',
intitule: "L'inconscient est-il une hypothèse ?",
piste1: "L'inconscient est-il une hypothèse scientifique nécessaire ?",
piste2: "ou peut-on expliquer la vie psychique sans lui ?",
racine1: "L'hypothèse de l'inconscient est-elle falsifiable ?",
racine2: "ou est-elle indispensable pour rendre compte des phénomènes psychiques ?",
enjeu: "Évaluer le statut hypothétique de l'inconscient."
},
{
id: 503,
notion: 'inconscient',
intitule: "L'inconscient est-il une métaphore ?",
piste1: "L'inconscient est-il un concept littéral ou métaphorique ?",
piste2: "ou désigne-t-il une réalité irréductible à toute métaphore ?",
racine1: "Les métaphores spatiales de l'inconscient sont-elles pertinentes ?",
racine2: "ou trahissent-elles la nature de l'inconscient ?",
enjeu: "Déterminer le statut conceptuel de l'inconscient."
},
{
id: 504,
notion: 'inconscient',
intitule: "L'inconscient est-il une instance ?",
piste1: "L'inconscient est-il une instance psychique distincte du moi ?",
piste2: "ou se confond-il avec l'ensemble de la vie psychique ?",
racine1: "Le ça, le moi et le surmoi désignent-ils des instances réelles ?",
racine2: "ou sont-ils des abstractions commodes ?",
enjeu: "Définir la nature de l'inconscient comme instance."
},
{
id: 505,
notion: 'inconscient',
intitule: "L'inconscient est-il un lieu ?",
piste1: "L'inconscient est-il un lieu psychique ?",
piste2: "ou cette spatialisation est-elle trompeuse ?",
racine1: "La topique psychique décrit-elle des lieux réels ?",
racine2: "ou n'est-elle qu'un modèle heuristique ?",
enjeu: "Interroger la spatialité de l'inconscient."
},
{
id: 506,
notion: 'inconscient',
intitule: "L'inconscient est-il une force ?",
piste1: "L'inconscient est-il une puissance qui agit en nous ?",
piste2: "ou n'est-il qu'un réservoir de contenus ?",
racine1: "L'inconscient a-t-il une efficacité causale ?",
racine2: "ou se réduit-il à un ensemble de représentations ?",
enjeu: "Déterminer la nature dynamique de l'inconscient."
},
{
id: 507,
notion: 'inconscient',
intitule: "L'inconscient est-il une structure ?",
piste1: "L'inconscient est-il structuré comme un langage ?",
piste2: "ou échappe-t-il à toute structure ?",
racine1: "L'inconscient obéit-il à des lois structurales ?",
racine2: "ou est-il le lieu du chaos et de l'informe ?",
enjeu: "Déterminer la structure de l'inconscient."
},
{
id: 508,
notion: 'inconscient',
intitule: "L'inconscient est-il un système ?",
piste1: "L'inconscient forme-t-il un système cohérent ?",
piste2: "ou est-il une multiplicité désordonnée ?",
racine1: "Les processus inconscients obéissent-ils à une logique ?",
racine2: "ou échappent-ils à toute systématicité ?",
enjeu: "Interroger la systématicité de l'inconscient."
},
{
id: 509,
notion: 'inconscient',
intitule: "L'inconscient est-il dynamique ?",
piste1: "L'inconscient est-il le siège de forces en conflit ?",
piste2: "ou est-il statique ?",
racine1: "Les conflits inconscients déterminent-ils la vie psychique ?",
racine2: "ou l'inconscient est-il un simple dépôt de traces ?",
enjeu: "Déterminer le caractère dynamique de l'inconscient."
},
{
id: 510,
notion: 'inconscient',
intitule: "L'inconscient est-il statique ?",
piste1: "L'inconscient est-il un dépôt figé de contenus ?",
piste2: "ou est-il en perpétuel mouvement ?",
racine1: "Les contenus inconscients sont-ils immuables ?",
racine2: "ou se transforment-ils constamment ?",
enjeu: "Examiner la staticité ou la dynamique de l'inconscient."
},
{
id: 511,
notion: 'inconscient',
intitule: "L'inconscient est-il personnel ?",
piste1: "L'inconscient est-il propre à chaque individu ?",
piste2: "ou existe-t-il un inconscient collectif ?",
racine1: "L'inconscient est-il le produit de l'histoire individuelle ?",
racine2: "ou partageons-nous un inconscient commun ?",
enjeu: "Déterminer le caractère personnel ou collectif de l'inconscient."
},
{
id: 512,
notion: 'inconscient',
intitule: "L'inconscient est-il collectif ?",
piste1: "Existe-t-il un inconscient commun à l'humanité ?",
piste2: "ou l'inconscient est-il toujours individuel ?",
racine1: "Les archétypes relèvent-ils d'un inconscient collectif ?",
racine2: "ou l'inconscient collectif est-il une fiction ?",
enjeu: "Examiner la réalité de l'inconscient collectif."
},
{
id: 513,
notion: 'inconscient',
intitule: "L'inconscient est-il universel ?",
piste1: "L'inconscient est-il le même chez tous les hommes ?",
piste2: "ou varie-t-il selon les cultures ?",
racine1: "Les structures de l'inconscient sont-elles universelles ?",
racine2: "ou l'inconscient est-il culturellement déterminé ?",
enjeu: "Déterminer l'universalité de l'inconscient."
},
{
id: 514,
notion: 'inconscient',
intitule: "L'inconscient est-il culturel ?",
piste1: "L'inconscient est-il façonné par la culture ?",
piste2: "ou précède-t-il toute culture ?",
racine1: "La culture inscrit-elle ses marques dans l'inconscient ?",
racine2: "ou l'inconscient est-il antérieur à la culture ?",
enjeu: "Interroger le rapport entre inconscient et culture."
},
{
id: 515,
notion: 'inconscient',
intitule: "L'inconscient est-il biologique ?",
piste1: "L'inconscient est-il enraciné dans le biologique ?",
piste2: "ou échappe-t-il à toute détermination biologique ?",
racine1: "Les pulsions sont-elles biologiques ou psychiques ?",
racine2: "ou l'inconscient est-il irréductible au biologique ?",
enjeu: "Déterminer le rapport entre inconscient et biologie."
},
{
id: 516,
notion: 'inconscient',
intitule: "L'inconscient est-il social ?",
piste1: "L'inconscient est-il produit par le social ?",
piste2: "ou est-il asocial par nature ?",
racine1: "Les structures sociales inscrivent-elles leurs marques dans l'inconscient ?",
racine2: "ou l'inconscient est-il antérieur au social ?",
enjeu: "Examiner le rapport entre inconscient et social."
},
{
id: 517,
notion: 'inconscient',
intitule: "L'inconscient est-il historique ?",
piste1: "L'inconscient est-il le produit de l'histoire individuelle ?",
piste2: "ou échappe-t-il à l'histoire ?",
racine1: "L'histoire personnelle détermine-t-elle l'inconscient ?",
racine2: "ou l'inconscient est-il intemporel ?",
enjeu: "Déterminer le rapport entre inconscient et histoire."
},
{
id: 518,
notion: 'inconscient',
intitule: "L'inconscient est-il linguistique ?",
piste1: "L'inconscient est-il structuré comme un langage ?",
piste2: "ou échappe-t-il à toute linguistique ?",
racine1: "Les lois du langage s'appliquent-elles à l'inconscient ?",
racine2: "ou l'inconscient précède-t-il le langage ?",
enjeu: "Interroger le rapport entre inconscient et langage."
},
{
id: 519,
notion: 'inconscient',
intitule: "L'inconscient est-il symbolique ?",
piste1: "L'inconscient fonctionne-t-il par symboles ?",
piste2: "ou échappe-t-il à toute symbolisation ?",
racine1: "Les symptômes sont-ils des symboles à décrypter ?",
racine2: "ou l'inconscient est-il littéral ?",
enjeu: "Déterminer le caractère symbolique de l'inconscient."
},
{
id: 520,
notion: 'inconscient',
intitule: "L'inconscient est-il imaginaire ?",
piste1: "L'inconscient est-il le siège de l'imaginaire ?",
piste2: "ou l'imaginaire est-il une formation de l'inconscient ?",
racine1: "Les images inconscientes sont-elles des réalités psychiques ?",
racine2: "ou sont-elles de pures illusions ?",
enjeu: "Examiner le rapport entre inconscient et imaginaire."
},
{
id: 521,
notion: 'inconscient',
intitule: "L'inconscient est-il réel ?",
piste1: "L'inconscient appartient-il au réel psychique ?",
piste2: "ou est-il une construction imaginaire ?",
racine1: "Le réel inconscient est-il différent du réel matériel ?",
racine2: "ou l'inconscient est-il une fiction utile ?",
enjeu: "Déterminer la réalité de l'inconscient."
},
{
id: 522,
notion: 'inconscient',
intitule: "L'inconscient est-il refoulé ?",
piste1: "L'inconscient est-il constitué par le refoulement ?",
piste2: "ou existe-t-il indépendamment du refoulement ?",
racine1: "Le refoulement crée-t-il l'inconscient ?",
racine2: "ou l'inconscient préexiste-t-il au refoulement ?",
enjeu: "Déterminer le rapport entre inconscient et refoulement."
},
{
id: 523,
notion: 'inconscient',
intitule: "L'inconscient est-il désir ?",
piste1: "L'inconscient est-il essentiellement désir ?",
piste2: "ou le désir n'est-il qu'une manifestation de l'inconscient ?",
racine1: "Le désir inconscient est-il la force motrice de la psyché ?",
racine2: "ou l'inconscient est-il plus que le désir ?",
enjeu: "Déterminer le rapport entre inconscient et désir."
},
{
id: 524,
notion: 'inconscient',
intitule: "L'inconscient est-il pulsion ?",
piste1: "L'inconscient est-il le siège des pulsions ?",
piste2: "ou les pulsions sont-elles conscientes ?",
racine1: "Les pulsions sont-elles essentiellement inconscientes ?",
racine2: "ou peuvent-elles être conscientes ?",
enjeu: "Déterminer le rapport entre inconscient et pulsion."
},
{
id: 525,
notion: 'inconscient',
intitule: "L'inconscient est-il représentation ?",
piste1: "L'inconscient est-il fait de représentations ?",
piste2: "ou échappe-t-il à toute représentation ?",
racine1: "Les représentations inconscientes sont-elles des représentations au sens propre ?",
racine2: "ou l'inconscient est-il irréductible à la représentation ?",
enjeu: "Déterminer le rapport entre inconscient et représentation."
},
{
id: 526,
notion: 'inconscient',
intitule: "L'inconscient est-il affect ?",
piste1: "L'inconscient est-il le siège des affects ?",
piste2: "ou les affects sont-ils toujours conscients ?",
racine1: "Les affects peuvent-ils être inconscients ?",
racine2: "ou l'affect est-il par essence conscient ?",
enjeu: "Déterminer le rapport entre inconscient et affect."
},
{
id: 527,
notion: 'inconscient',
intitule: "L'inconscient est-il traumatisme ?",
piste1: "L'inconscient est-il constitué par des traumatismes ?",
piste2: "ou le traumatisme n'est-il qu'une cause parmi d'autres ?",
racine1: "Les traumatismes structurent-ils l'inconscient ?",
racine2: "ou l'inconscient est-il antérieur au traumatisme ?",
enjeu: "Déterminer le rapport entre inconscient et traumatisme."
},
{
id: 528,
notion: 'inconscient',
intitule: "L'inconscient est-il mémoire ?",
piste1: "L'inconscient est-il une mémoire oubliée ?",
piste2: "ou est-il autre chose qu'une mémoire ?",
racine1: "L'inconscient conserve-t-il les traces du passé ?",
racine2: "ou est-il une production actuelle ?",
enjeu: "Déterminer le rapport entre inconscient et mémoire."
},
{
id: 529,
notion: 'inconscient',
intitule: "L'inconscient est-il oubli ?",
piste1: "L'inconscient est-il le lieu de l'oubli ?",
piste2: "ou l'oubli est-il un effet de l'inconscient ?",
racine1: "L'inconscient oublie-t-il ou refoule-t-il ?",
racine2: "ou l'oubli est-il constitutif de l'inconscient ?",
enjeu: "Déterminer le rapport entre inconscient et oubli."
},
{
id: 530,
notion: 'inconscient',
intitule: "L'inconscient est-il langage ?",
piste1: "L'inconscient parle-t-il un langage ?",
piste2: "ou est-il antérieur au langage ?",
racine1: "L'inconscient est-il structuré comme un langage ?",
racine2: "ou le langage est-il une traduction de l'inconscient ?",
enjeu: "Déterminer le rapport entre inconscient et langage."
},
{
id: 531,
notion: 'inconscient',
intitule: "L'inconscient parle-t-il ?",
piste1: "L'inconscient s'exprime-t-il par des mots ?",
piste2: "ou parle-t-il un autre langage ?",
racine1: "Les lapsus sont-ils la parole de l'inconscient ?",
racine2: "ou l'inconscient s'exprime-t-il autrement que par les mots ?",
enjeu: "Interroger la parole de l'inconscient."
},
{
id: 532,
notion: 'inconscient',
intitule: "L'inconscient s'exprime-t-il ?",
piste1: "L'inconscient trouve-t-il des moyens d'expression ?",
piste2: "ou reste-t-il muet ?",
racine1: "Les symptômes sont-ils l'expression de l'inconscient ?",
racine2: "ou l'inconscient est-il silencieux ?",
enjeu: "Déterminer les modes d'expression de l'inconscient."
},
{
id: 533,
notion: 'inconscient',
intitule: "L'inconscient se manifeste-t-il ?",
piste1: "L'inconscient se donne-t-il à voir ?",
piste2: "ou reste-t-il caché ?",
racine1: "Les manifestations de l'inconscient sont-elles déchiffrables ?",
racine2: "ou l'inconscient est-il inaccessible ?",
enjeu: "Déterminer les manifestations de l'inconscient."
},
{
id: 534,
notion: 'inconscient',
intitule: "L'inconscient se révèle-t-il ?",
piste1: "L'inconscient peut-il se révéler à la conscience ?",
piste2: "ou reste-t-il toujours caché ?",
racine1: "La révélation de l'inconscient est-elle possible ?",
racine2: "ou l'inconscient est-il par nature inconnaissable ?",
enjeu: "Déterminer la possibilité de révélation de l'inconscient."
},
{
id: 535,
notion: 'inconscient',
intitule: "L'inconscient se trahit-il ?",
piste1: "L'inconscient se trahit-il par des indices ?",
piste2: "ou reste-t-il toujours secret ?",
racine1: "Les actes manqués trahissent-ils l'inconscient ?",
racine2: "ou l'inconscient est-il toujours maîtrisé ?",
enjeu: "Déterminer les trahisons de l'inconscient."
},
{
id: 536,
notion: 'inconscient',
intitule: "Le rêve est-il la voie royale de l'inconscient ?",
piste1: "Le rêve est-il le meilleur accès à l'inconscient ?",
piste2: "ou existe-t-il d'autres voies d'accès ?",
racine1: "L'interprétation des rêves révèle-t-elle l'inconscient ?",
racine2: "ou le rêve est-il autre chose qu'une manifestation de l'inconscient ?",
enjeu: "Déterminer le rôle du rêve dans l'accès à l'inconscient."
},
{
id: 537,
notion: 'inconscient',
intitule: "Le lapsus révèle-t-il l'inconscient ?",
piste1: "Le lapsus est-il une manifestation de l'inconscient ?",
piste2: "ou n'est-il qu'une erreur sans signification ?",
racine1: "Les lapsus ont-ils un sens inconscient ?",
racine2: "ou sont-ils de simples accidents ?",
enjeu: "Déterminer la signification du lapsus."
},
{
id: 538,
notion: 'inconscient',
intitule: "L'acte manqué exprime-t-il l'inconscient ?",
piste1: "L'acte manqué est-il une expression de l'inconscient ?",
piste2: "ou n'est-il qu'un accident ?",
racine1: "Les actes manqués ont-ils une signification inconsciente ?",
racine2: "ou sont-ils dépourvus de sens ?",
enjeu: "Déterminer la signification de l'acte manqué."
},
{
id: 539,
notion: 'inconscient',
intitule: "Le symptôme est-il un message de l'inconscient ?",
piste1: "Le symptôme est-il un message à décrypter ?",
piste2: "ou n'est-il qu'un dysfonctionnement ?",
racine1: "Les symptômes ont-ils un sens inconscient ?",
racine2: "ou sont-ils de pures perturbations ?",
enjeu: "Déterminer la signification du symptôme."
},
{
id: 540,
notion: 'inconscient',
intitule: "Le mot d'esprit révèle-t-il l'inconscient ?",
piste1: "Le mot d'esprit est-il une manifestation de l'inconscient ?",
piste2: "ou est-il une production purement consciente ?",
racine1: "L'humour révèle-t-il l'inconscient ?",
racine2: "ou le mot d'esprit est-il une production volontaire ?",
enjeu: "Déterminer le rapport entre mot d'esprit et inconscient."
},
{
id: 541,
notion: 'inconscient',
intitule: "L'inconscient détermine-t-il nos actes ?",
piste1: "L'inconscient détermine-t-il nos actions à notre insu ?",
piste2: "ou sommes-nous libres malgré l'inconscient ?",
racine1: "L'inconscient est-il une cause de nos actes ?",
racine2: "ou nos actes sont-ils toujours conscients ?",
enjeu: "Déterminer le pouvoir déterminant de l'inconscient."
},
{
id: 542,
notion: 'inconscient',
intitule: "L'inconscient détermine-t-il nos pensées ?",
piste1: "L'inconscient détermine-t-il ce que nous pensons ?",
piste2: "ou la pensée est-elle toujours consciente ?",
racine1: "Les pensées inconscientes influencent-elles nos pensées conscientes ?",
racine2: "ou la pensée est-elle indépendante de l'inconscient ?",
enjeu: "Déterminer l'influence de l'inconscient sur la pensée."
},
{
id: 543,
notion: 'inconscient',
intitule: "L'inconscient détermine-t-il nos désirs ?",
piste1: "L'inconscient détermine-t-il ce que nous désirons ?",
piste2: "ou nos désirs sont-ils conscients ?",
racine1: "Les désirs inconscients sont-ils la source de nos désirs conscients ?",
racine2: "ou les désirs sont-ils toujours conscients ?",
enjeu: "Déterminer le rapport entre inconscient et désir."
},
{
id: 544,
notion: 'inconscient',
intitule: "L'inconscient détermine-t-il nos choix ?",
piste1: "L'inconscient détermine-t-il nos choix ?",
piste2: "ou sommes-nous libres de choisir ?",
racine1: "Les choix inconscients influencent-ils nos choix conscients ?",
racine2: "ou la liberté de choisir est-elle réelle ?",
enjeu: "Déterminer l'influence de l'inconscient sur les choix."
},
{
id: 545,
notion: 'inconscient',
intitule: "L'inconscient détermine-t-il notre personnalité ?",
piste1: "L'inconscient détermine-t-il qui nous sommes ?",
piste2: "ou la personnalité est-elle consciente ?",
racine1: "La personnalité est-elle le produit de l'inconscient ?",
racine2: "ou la personnalité est-elle une construction consciente ?",
enjeu: "Déterminer l'influence de l'inconscient sur la personnalité."
},
{
id: 546,
notion: 'inconscient',
intitule: "L'inconscient détermine-t-il notre destin ?",
piste1: "L'inconscient détermine-t-il notre destin ?",
piste2: "ou sommes-nous libres de notre destin ?",
racine1: "La répétition inconsciente détermine-t-elle notre destin ?",
racine2: "ou le destin est-il une construction consciente ?",
enjeu: "Déterminer l'influence de l'inconscient sur le destin."
},
{
id: 547,
notion: 'inconscient',
intitule: "L'inconscient est-il une cause ?",
piste1: "L'inconscient est-il une cause de nos conduites ?",
piste2: "ou n'est-il qu'une condition ?",
racine1: "L'inconscient a-t-il une efficacité causale ?",
racine2: "ou l'inconscient est-il une simple condition ?",
enjeu: "Déterminer la causalité de l'inconscient."
},
{
id: 548,
notion: 'inconscient',
intitule: "L'inconscient est-il une raison ?",
piste1: "L'inconscient fournit-il des raisons d'agir ?",
piste2: "ou n'est-il qu'une cause aveugle ?",
racine1: "Les raisons inconscientes sont-elles des raisons au sens propre ?",
racine2: "ou l'inconscient est-il étranger à la raison ?",
enjeu: "Déterminer le rapport entre inconscient et raison."
},
{
id: 549,
notion: 'inconscient',
intitule: "L'inconscient est-il un motif ?",
piste1: "L'inconscient fournit-il des motifs d'agir ?",
piste2: "ou n'est-il qu'une cause sans motif ?",
racine1: "Les motifs inconscients sont-ils des motifs au sens propre ?",
racine2: "ou l'inconscient est-il étranger à la motivation ?",
enjeu: "Déterminer le rapport entre inconscient et motif."
},
{
id: 550,
notion: 'inconscient',
intitule: "L'inconscient est-il une intention ?",
piste1: "L'inconscient a-t-il des intentions ?",
piste2: "ou est-il étranger à toute intention ?",
racine1: "Les intentions inconscientes sont-elles des intentions au sens propre ?",
racine2: "ou l'inconscient est-il sans intention ?",
enjeu: "Déterminer le rapport entre inconscient et intention."
},
{
id: 551,
notion: 'inconscient',
intitule: "L'inconscient remet-il en cause la conscience ?",
piste1: "L'inconscient remet-il en cause la primauté de la conscience ?",
piste2: "ou la conscience conserve-t-elle sa primauté ?",
racine1: "La découverte de l'inconscient transforme-t-elle notre conception de la conscience ?",
racine2: "ou la conscience reste-t-elle le fondement de la vie psychique ?",
enjeu: "Déterminer l'impact de l'inconscient sur la conscience."
},
{
id: 552,
notion: 'inconscient',
intitule: "L'inconscient remet-il en cause la liberté ?",
piste1: "L'inconscient remet-il en cause notre liberté ?",
piste2: "ou la liberté est-elle compatible avec l'inconscient ?",
racine1: "L'inconscient est-il un obstacle à la liberté ?",
racine2: "ou la connaissance de l'inconscient est-elle une condition de la liberté ?",
enjeu: "Déterminer le rapport entre inconscient et liberté."
},
{
id: 553,
notion: 'inconscient',
intitule: "L'inconscient remet-il en cause la responsabilité ?",
piste1: "L'inconscient remet-il en cause notre responsabilité ?",
piste2: "ou sommes-nous responsables de notre inconscient ?",
racine1: "L'inconscient excuse-t-il nos actes ?",
racine2: "ou sommes-nous responsables de ce qui échappe à notre conscience ?",
enjeu: "Déterminer le rapport entre inconscient et responsabilité."
},
{
id: 554,
notion: 'inconscient',
intitule: "L'inconscient remet-il en cause le sujet ?",
piste1: "L'inconscient remet-il en cause l'unité du sujet ?",
piste2: "ou le sujet est-il compatible avec la division inconsciente ?",
racine1: "Le sujet est-il un ou divisé ?",
racine2: "ou la division est-elle constitutive du sujet ?",
enjeu: "Déterminer l'impact de l'inconscient sur le sujet."
},
{
id: 555,
notion: 'inconscient',
intitule: "L'inconscient remet-il en cause la raison ?",
piste1: "L'inconscient remet-il en cause la primauté de la raison ?",
piste2: "ou la raison peut-elle intégrer l'inconscient ?",
racine1: "L'inconscient est-il irrationalité ?",
racine2: "ou l'inconscient a-t-il sa propre rationalité ?",
enjeu: "Déterminer le rapport entre inconscient et raison."
},
{
id: 556,
notion: 'inconscient',
intitule: "L'inconscient remet-il en cause la morale ?",
piste1: "L'inconscient remet-il en cause la morale ?",
piste2: "ou la morale peut-elle intégrer l'inconscient ?",
racine1: "L'inconscient est-il amoral ?",
racine2: "ou l'inconscient a-t-il une dimension morale ?",
enjeu: "Déterminer le rapport entre inconscient et morale."
},
{
id: 557,
notion: 'inconscient',
intitule: "L'inconscient remet-il en cause la vérité ?",
piste1: "L'inconscient remet-il en cause la vérité ?",
piste2: "ou l'inconscient est-il une voie d'accès à la vérité ?",
racine1: "L'inconscient est-il illusion ?",
racine2: "ou l'inconscient est-il vérité du sujet ?",
enjeu: "Déterminer le rapport entre inconscient et vérité."
},
{
id: 558,
notion: 'inconscient',
intitule: "L'inconscient remet-il en cause l'identité ?",
piste1: "L'inconscient remet-il en cause notre identité ?",
piste2: "ou l'identité est-elle compatible avec l'inconscient ?",
racine1: "L'inconscient divise-t-il le sujet ?",
racine2: "ou l'identité est-elle une construction consciente ?",
enjeu: "Déterminer le rapport entre inconscient et identité."
},
{
id: 559,
notion: 'inconscient',
intitule: "L'inconscient est-il compatible avec la liberté ?",
piste1: "L'inconscient est-il compatible avec la liberté ?",
piste2: "ou l'inconscient est-il un obstacle à la liberté ?",
racine1: "La connaissance de l'inconscient libère-t-elle ?",
racine2: "ou l'inconscient est-il une prison ?",
enjeu: "Déterminer la compatibilité entre inconscient et liberté."
},
{
id: 560,
notion: 'inconscient',
intitule: "L'inconscient est-il compatible avec la responsabilité ?",
piste1: "L'inconscient est-il compatible avec la responsabilité ?",
piste2: "ou l'inconscient excuse-t-il ?",
racine1: "Sommes-nous responsables de notre inconscient ?",
racine2: "ou l'inconscient nous décharge-t-il de toute responsabilité ?",
enjeu: "Déterminer la compatibilité entre inconscient et responsabilité."
},
{
id: 561,
notion: 'inconscient',
intitule: "L'inconscient est-il compatible avec la morale ?",
piste1: "L'inconscient est-il compatible avec la morale ?",
piste2: "ou l'inconscient est-il amoral ?",
racine1: "L'inconscient a-t-il une dimension morale ?",
racine2: "ou l'inconscient est-il étranger à la morale ?",
enjeu: "Déterminer la compatibilité entre inconscient et morale."
},
{
id: 562,
notion: 'inconscient',
intitule: "L'inconscient est-il compatible avec la raison ?",
piste1: "L'inconscient est-il compatible avec la raison ?",
piste2: "ou l'inconscient est-il irrationalité ?",
racine1: "L'inconscient a-t-il sa propre rationalité ?",
racine2: "ou l'inconscient est-il étranger à la raison ?",
enjeu: "Déterminer la compatibilité entre inconscient et raison."
},
{
id: 563,
notion: 'inconscient',
intitule: "L'inconscient est-il compatible avec la conscience ?",
piste1: "L'inconscient est-il compatible avec la conscience ?",
piste2: "ou l'inconscient exclut-il la conscience ?",
racine1: "Conscience et inconscient sont-ils antagonistes ?",
racine2: "ou peuvent-ils coexister ?",
enjeu: "Déterminer la compatibilité entre inconscient et conscience."
},
{
id: 564,
notion: 'inconscient',
intitule: "L'inconscient est-il compatible avec le sujet ?",
piste1: "L'inconscient est-il compatible avec le sujet ?",
piste2: "ou l'inconscient divise-t-il le sujet ?",
racine1: "Le sujet est-il un ou divisé ?",
racine2: "ou la division est-elle constitutive du sujet ?",
enjeu: "Déterminer la compatibilité entre inconscient et sujet."
},
{
id: 565,
notion: 'inconscient',
intitule: "L'inconscient est-il compatible avec la science ?",
piste1: "L'inconscient est-il compatible avec la science ?",
piste2: "ou l'inconscient échappe-t-il à la science ?",
racine1: "L'inconscient peut-il être objet de science ?",
racine2: "ou l'inconscient est-il étranger à la science ?",
enjeu: "Déterminer la compatibilité entre inconscient et science."
},
{
id: 566,
notion: 'inconscient',
intitule: "L'inconscient est-il un objet de science ?",
piste1: "L'inconscient peut-il être objet de science ?",
piste2: "ou échappe-t-il à toute scientificité ?",
racine1: "La psychanalyse est-elle une science ?",
racine2: "ou l'inconscient est-il irréductible à la science ?",
enjeu: "Déterminer la scientificité de l'inconscient."
},
{
id: 567,
notion: 'inconscient',
intitule: "La psychanalyse est-elle une science ?",
piste1: "La psychanalyse est-elle une science ?",
piste2: "ou est-elle une herméneutique ?",
racine1: "La psychanalyse respecte-t-elle les critères de la scientificité ?",
racine2: "ou la psychanalyse est-elle une interprétation ?",
enjeu: "Déterminer le statut scientifique de la psychanalyse."
},
{
id: 568,
notion: 'inconscient',
intitule: "La psychanalyse est-elle une thérapie ?",
piste1: "La psychanalyse est-elle une thérapie efficace ?",
piste2: "ou est-elle autre chose qu'une thérapie ?",
racine1: "La psychanalyse guérit-elle ?",
racine2: "ou la psychanalyse est-elle une exploration de soi ?",
enjeu: "Déterminer le statut thérapeutique de la psychanalyse."
},
{
id: 569,
notion: 'inconscient',
intitule: "La psychanalyse est-elle une interprétation ?",
piste1: "La psychanalyse est-elle une interprétation ?",
piste2: "ou est-elle une science ?",
racine1: "La psychanalyse interprète-t-elle ou explique-t-elle ?",
racine2: "ou la psychanalyse est-elle les deux à la fois ?",
enjeu: "Déterminer le statut herméneutique de la psychanalyse."
},
{
id: 570,
notion: 'inconscient',
intitule: "La psychanalyse est-elle une herméneutique ?",
piste1: "La psychanalyse est-elle une herméneutique ?",
piste2: "ou est-elle une science ?",
racine1: "La psychanalyse interprète-t-elle les symptômes ?",
racine2: "ou la psychanalyse explique-t-elle les symptômes ?",
enjeu: "Déterminer le statut herméneutique de la psychanalyse."
},
{
id: 571,
notion: 'inconscient',
intitule: "L'inconscient peut-il être connu ?",
piste1: "L'inconscient peut-il être connu ?",
piste2: "ou échappe-t-il à toute connaissance ?",
racine1: "L'inconscient est-il connaissable ?",
racine2: "ou l'inconscient est-il par nature inconnaissable ?",
enjeu: "Déterminer la connaissabilité de l'inconscient."
},
{
id: 572,
notion: 'inconscient',
intitule: "L'inconscient peut-il être conscient ?",
piste1: "L'inconscient peut-il devenir conscient ?",
piste2: "ou l'inconscient reste-t-il toujours inconscient ?",
racine1: "La conscience de l'inconscient est-elle possible ?",
racine2: "ou la conscience de l'inconscient le transforme-t-elle ?",
enjeu: "Déterminer la possibilité de conscience de l'inconscient."
},
{
id: 573,
notion: 'inconscient',
intitule: "L'inconscient peut-il être maîtrisé ?",
piste1: "L'inconscient peut-il être maîtrisé ?",
piste2: "ou échappe-t-il à toute maîtrise ?",
racine1: "La maîtrise de l'inconscient est-elle possible ?",
racine2: "ou l'inconscient est-il par nature insaisissable ?",
enjeu: "Déterminer la possibilité de maîtrise de l'inconscient."
},
{
id: 574,
notion: 'inconscient',
intitule: "L'inconscient peut-il être guéri ?",
piste1: "L'inconscient peut-il être guéri ?",
piste2: "ou l'inconscient est-il une dimension permanente de la psyché ?",
racine1: "La guérison de l'inconscient est-elle possible ?",
racine2: "ou l'inconscient est-il constitutif de la psyché ?",
enjeu: "Déterminer la possibilité de guérison de l'inconscient."
},
{
id: 575,
notion: 'inconscient',
intitule: "L'inconscient peut-il être libéré ?",
piste1: "L'inconscient peut-il être libéré ?",
piste2: "ou l'inconscient est-il une prison ?",
racine1: "La libération de l'inconscient est-elle possible ?",
racine2: "ou l'inconscient est-il une structure permanente ?",
enjeu: "Déterminer la possibilité de libération de l'inconscient."
},
{
id: 576,
notion: 'inconscient',
intitule: "L'inconscient peut-il être éduqué ?",
piste1: "L'inconscient peut-il être éduqué ?",
piste2: "ou l'inconscient échappe-t-il à toute éducation ?",
racine1: "L'éducation de l'inconscient est-elle possible ?",
racine2: "ou l'inconscient est-il réfractaire à toute éducation ?",
enjeu: "Déterminer la possibilité d'éducation de l'inconscient."
},
{
id: 577,
notion: 'inconscient',
intitule: "L'inconscient peut-il être cultivé ?",
piste1: "L'inconscient peut-il être cultivé ?",
piste2: "ou l'inconscient échappe-t-il à toute culture ?",
racine1: "La culture de l'inconscient est-elle possible ?",
racine2: "ou l'inconscient est-il étranger à la culture ?",
enjeu: "Déterminer la possibilité de culture de l'inconscient."
},
{
id: 578,
notion: 'inconscient',
intitule: "L'inconscient peut-il être refoulé ?",
piste1: "L'inconscient peut-il être refoulé ?",
piste2: "ou l'inconscient est-il déjà refoulement ?",
racine1: "Le refoulement de l'inconscient est-il possible ?",
racine2: "ou l'inconscient est-il le produit du refoulement ?",
enjeu: "Déterminer la possibilité de refoulement de l'inconscient."
},
{
id: 579,
notion: 'inconscient',
intitule: "L'inconscient peut-il être sublimé ?",
piste1: "L'inconscient peut-il être sublimé ?",
piste2: "ou la sublimation est-elle une transformation de l'inconscient ?",
racine1: "La sublimation transforme-t-elle l'inconscient ?",
racine2: "ou la sublimation est-elle une expression de l'inconscient ?",
enjeu: "Déterminer la possibilité de sublimation de l'inconscient."
},
{
id: 580,
notion: 'inconscient',
intitule: "L'inconscient peut-il être transféré ?",
piste1: "L'inconscient peut-il être transféré ?",
piste2: "ou le transfert est-il une manifestation de l'inconscient ?",
racine1: "Le transfert est-il une projection de l'inconscient ?",
racine2: "ou le transfert est-il une relation consciente ?",
enjeu: "Déterminer la possibilité de transfert de l'inconscient."
},
{
id: 581,
notion: 'inconscient',
intitule: "L'inconscient crée-t-il ?",
piste1: "L'inconscient crée-t-il ?",
piste2: "ou la création est-elle toujours consciente ?",
racine1: "L'inconscient est-il créateur ?",
racine2: "ou la création est-elle une activité consciente ?",
enjeu: "Déterminer le pouvoir créateur de l'inconscient."
},
{
id: 582,
notion: 'inconscient',
intitule: "L'inconscient inspire-t-il l'artiste ?",
piste1: "L'inconscient inspire-t-il l'artiste ?",
piste2: "ou l'artiste crée-t-il consciemment ?",
racine1: "L'inspiration artistique vient-elle de l'inconscient ?",
racine2: "ou la création artistique est-elle une activité consciente ?",
enjeu: "Déterminer le rôle de l'inconscient dans la création artistique."
},
{
id: 583,
notion: 'inconscient',
intitule: "L'inconscient inspire-t-il le penseur ?",
piste1: "L'inconscient inspire-t-il le penseur ?",
piste2: "ou la pensée est-elle toujours consciente ?",
racine1: "La pensée philosophique vient-elle de l'inconscient ?",
racine2: "ou la pensée est-elle une activité consciente ?",
enjeu: "Déterminer le rôle de l'inconscient dans la pensée."
},
{
id: 584,
notion: 'inconscient',
intitule: "L'inconscient inspire-t-il le rêveur ?",
piste1: "L'inconscient inspire-t-il le rêveur ?",
piste2: "ou le rêve est-il une production de l'inconscient ?",
racine1: "Le rêve vient-il de l'inconscient ?",
racine2: "ou le rêve est-il une activité consciente ?",
enjeu: "Déterminer le rôle de l'inconscient dans le rêve."
},
{
id: 585,
notion: 'inconscient',
intitule: "L'inconscient est-il créateur ?",
piste1: "L'inconscient est-il créateur ?",
piste2: "ou l'inconscient est-il reproducteur ?",
racine1: "L'inconscient produit-il du nouveau ?",
racine2: "ou l'inconscient ne fait-il que reproduire ?",
enjeu: "Déterminer le pouvoir créateur de l'inconscient."
},
{
id: 586,
notion: 'inconscient',
intitule: "L'inconscient est-il productif ?",
piste1: "L'inconscient est-il productif ?",
piste2: "ou l'inconscient est-il stérile ?",
racine1: "L'inconscient produit-il quelque chose ?",
racine2: "ou l'inconscient est-il un simple réservoir ?",
enjeu: "Déterminer la productivité de l'inconscient."
},
{
id: 587,
notion: 'inconscient',
intitule: "L'inconscient est-il producteur de sens ?",
piste1: "L'inconscient est-il producteur de sens ?",
piste2: "ou l'inconscient est-il absurde ?",
racine1: "L'inconscient produit-il du sens ?",
racine2: "ou l'inconscient est-il dépourvu de sens ?",
enjeu: "Déterminer la production de sens par l'inconscient."
},
{
id: 588,
notion: 'inconscient',
intitule: "L'inconscient est-il producteur de formes ?",
piste1: "L'inconscient est-il producteur de formes ?",
piste2: "ou l'inconscient est-il informel ?",
racine1: "L'inconscient produit-il des formes ?",
racine2: "ou l'inconscient est-il chaos ?",
enjeu: "Déterminer la production de formes par l'inconscient."
},
{
id: 589,
notion: 'inconscient',
intitule: "L'inconscient est-il producteur de symboles ?",
piste1: "L'inconscient est-il producteur de symboles ?",
piste2: "ou l'inconscient est-il littéral ?",
racine1: "L'inconscient produit-il des symboles ?",
racine2: "ou l'inconscient est-il étranger au symbolique ?",
enjeu: "Déterminer la production de symboles par l'inconscient."
},
{
id: 590,
notion: 'inconscient',
intitule: "L'inconscient est-il producteur de mythes ?",
piste1: "L'inconscient est-il producteur de mythes ?",
piste2: "ou les mythes sont-ils des constructions conscientes ?",
racine1: "Les mythes viennent-ils de l'inconscient ?",
racine2: "ou les mythes sont-ils des productions conscientes ?",
enjeu: "Déterminer la production de mythes par l'inconscient."
},
{
id: 591,
notion: 'inconscient',
intitule: "L'inconscient est-il le fondement de la culture ?",
piste1: "L'inconscient est-il le fondement de la culture ?",
piste2: "ou la culture est-elle une production consciente ?",
racine1: "La culture vient-elle de l'inconscient ?",
racine2: "ou la culture est-elle une construction consciente ?",
enjeu: "Déterminer le rôle de l'inconscient dans la culture."
},
{
id: 592,
notion: 'inconscient',
intitule: "L'inconscient est-il le fondement de la société ?",
piste1: "L'inconscient est-il le fondement de la société ?",
piste2: "ou la société est-elle une construction consciente ?",
racine1: "La société vient-elle de l'inconscient ?",
racine2: "ou la société est-elle une construction consciente ?",
enjeu: "Déterminer le rôle de l'inconscient dans la société."
},
{
id: 593,
notion: 'inconscient',
intitule: "L'inconscient est-il le fondement de la religion ?",
piste1: "L'inconscient est-il le fondement de la religion ?",
piste2: "ou la religion est-elle une construction consciente ?",
racine1: "La religion vient-elle de l'inconscient ?",
racine2: "ou la religion est-elle une construction consciente ?",
enjeu: "Déterminer le rôle de l'inconscient dans la religion."
},
{
id: 594,
notion: 'inconscient',
intitule: "L'inconscient est-il le fondement de la morale ?",
piste1: "L'inconscient est-il le fondement de la morale ?",
piste2: "ou la morale est-elle une construction consciente ?",
racine1: "La morale vient-elle de l'inconscient ?",
racine2: "ou la morale est-elle une construction consciente ?",
enjeu: "Déterminer le rôle de l'inconscient dans la morale."
},
{
id: 595,
notion: 'inconscient',
intitule: "L'inconscient est-il le fondement du droit ?",
piste1: "L'inconscient est-il le fondement du droit ?",
piste2: "ou le droit est-il une construction consciente ?",
racine1: "Le droit vient-il de l'inconscient ?",
racine2: "ou le droit est-il une construction consciente ?",
enjeu: "Déterminer le rôle de l'inconscient dans le droit."
},
{
id: 596,
notion: 'inconscient',
intitule: "L'inconscient est-il le fondement de l'art ?",
piste1: "L'inconscient est-il le fondement de l'art ?",
piste2: "ou l'art est-il une production consciente ?",
racine1: "L'art vient-il de l'inconscient ?",
racine2: "ou l'art est-il une production consciente ?",
enjeu: "Déterminer le rôle de l'inconscient dans l'art."
},
{
id: 597,
notion: 'inconscient',
intitule: "L'inconscient est-il le fondement de la philosophie ?",
piste1: "L'inconscient est-il le fondement de la philosophie ?",
piste2: "ou la philosophie est-elle une production consciente ?",
racine1: "La philosophie vient-elle de l'inconscient ?",
racine2: "ou la philosophie est-elle une production consciente ?",
enjeu: "Déterminer le rôle de l'inconscient dans la philosophie."
},
{
id: 598,
notion: 'inconscient',
intitule: "L'inconscient est-il le fondement de la science ?",
piste1: "L'inconscient est-il le fondement de la science ?",
piste2: "ou la science est-elle une production consciente ?",
racine1: "La science vient-elle de l'inconscient ?",
racine2: "ou la science est-elle une production consciente ?",
enjeu: "Déterminer le rôle de l'inconscient dans la science."
},
{
id: 599,
notion: 'inconscient',
intitule: "L'inconscient est-il le fondement de l'humanité ?",
piste1: "L'inconscient est-il le fondement de l'humanité ?",
piste2: "ou l'humanité est-elle une construction consciente ?",
racine1: "L'humanité vient-elle de l'inconscient ?",
racine2: "ou l'humanité est-elle une construction consciente ?",
enjeu: "Déterminer le rôle de l'inconscient dans l'humanité."
},

{
id: 601,
notion: 'justice',
intitule: "Qu'est-ce que la justice ?",
piste1: "La justice est-elle une vertu de l'âme ou une institution sociale ?",
piste2: "ou est-elle un principe qui régit les rapports entre les hommes ?",
racine1: "La justice se définit-elle par l'intention ou par l'effet de l'action ?",
racine2: "ou est-elle une harmonie objective indépendante des sujets ?",
enjeu: "Établir une définition philosophique de la justice au-delà du sens commun."
},
{
id: 602,
notion: 'justice',
intitule: "La justice est-elle une idée ou une réalité ?",
piste1: "La justice n'est-elle qu'un idéal régulateur que le monde réel n'atteint jamais ?",
piste2: "ou se réalise-t-elle concrètement dans les institutions et les actes ?",
racine1: "Les idées de justice ont-elles une existence propre (Platon) ?",
racine2: "ou ne sont-elles que des constructions humaines provisoires ?",
enjeu: "Déterminer le statut ontologique de la justice."
},
{
id: 603,
notion: 'justice',
intitule: "La justice est-elle naturelle ou conventionnelle ?",
piste1: "Existe-t-il un droit naturel et une justice universelle inscrits dans la nature humaine ?",
piste2: "ou la justice n'est-elle qu'une convention établie par les hommes pour vivre ensemble ?",
racine1: "Le juste est-il le même partout par nature ?",
racine2: "ou varie-t-il nécessairement selon les cités et les époques ?",
enjeu: "Opposer le fondement naturel et le fondement conventionnel de la justice."
},
{
id: 604,
notion: 'justice',
intitule: "La justice dépend-elle des lois ?",
piste1: "Est juste tout ce qui est conforme à la loi ?",
piste2: "ou la justice peut-elle exister en dehors ou contre la loi ?",
racine1: "Le légal et le juste sont-ils identiques ?",
racine2: "ou la loi n'est-elle qu'une tentative imparfaite d'incarner la justice ?",
enjeu: "Examiner le rapport entre justice et légalité."
},
{
id: 605,
notion: 'justice',
intitule: "Peut-il y avoir des lois injustes ?",
piste1: "Une loi peut-elle être valide juridiquement mais injuste moralement ?",
piste2: "ou une loi injuste cesse-t-elle d'être une vraie loi ?",
racine1: "La validité d'une loi dépend-elle de sa conformité à la justice ?",
racine2: "ou la loi est-elle juste par le seul fait d'avoir été légitimement votée ?",
enjeu: "Interroger la légitimité morale du droit positif."
},
{
id: 606,
notion: 'justice',
intitule: "La justice est-elle la même pour tous ?",
piste1: "La règle de justice doit-elle s'appliquer de manière identique à chaque individu ?",
piste2: "ou doit-elle s'adapter aux particularités de chacun ?",
racine1: "L'universalité de la règle est-elle la condition de la justice ?",
racine2: "ou l'application stricte de la règle crée-t-elle parfois de l'injustice ?",
enjeu: "Déterminer si la justice exige l'uniformité ou la différenciation."
},
{
id: 607,
notion: 'justice',
intitule: "La justice est-elle universelle ?",
piste1: "Les principes de justice valent-ils pour tous les êtres humains, en tout temps ?",
piste2: "ou sont-ils toujours relatifs à une culture ou une époque donnée ?",
racine1: "Existe-t-il des valeurs de justice transculturelles ?",
racine2: "ou l'universalisme n'est-il qu'une projection de valeurs occidentales ?",
enjeu: "Examiner la portée universelle des prétentions de la justice."
},
{
id: 608,
notion: 'justice',
intitule: "La justice est-elle relative aux cultures ?",
piste1: "Chaque société définit-elle son propre juste et son propre injuste ?",
piste2: "ou peut-on juger les pratiques d'une culture à l'aune d'une justice supérieure ?",
racine1: "Le relativisme moral est-il la seule attitude tolérante ?",
racine2: "ou renoncer à juger revient-il à tolérer l'intolérable ?",
enjeu: "Confronter relativisme culturel et exigence de justice universelle."
},
{
id: 609,
notion: 'justice',
intitule: "La justice est-elle un idéal ou une pratique ?",
piste1: "La justice est-elle d'abord un horizon vers lequel tendre ?",
piste2: "ou n'existe-t-elle que dans les actes concrets et les institutions ?",
racine1: "L'idéal de justice est-il une illusion qui paralyse l'action ?",
racine2: "ou sans idéal, la pratique juridique n'est-elle qu'une gestion des rapports de force ?",
enjeu: "Déterminer le rapport entre l'idée de justice et sa réalisation effective."
},
{
id: 610,
notion: 'justice',
intitule: "La justice est-elle une vertu ?",
piste1: "La justice est-elle une disposition stable de la volonté à rendre à chacun son dû ?",
piste2: "ou est-elle uniquement une qualité des institutions, et non des individus ?",
racine1: "Peut-on être juste dans une société injuste ?",
racine2: "ou la vertu de justice suppose-t-elle un cadre politique juste ?",
enjeu: "Examiner la justice comme vertu individuelle et comme qualité institutionnelle."
},
{
id: 611,
notion: 'justice',
intitule: "La justice est-elle une passion ou une raison ?",
piste1: "Le sentiment d'injustice est-il le moteur premier de la revendication de justice ?",
piste2: "ou la justice doit-elle être entièrement dégagée des passions pour être rationnelle ?",
racine1: "La raison peut-elle seule définir et appliquer le juste ?",
racine2: "ou l'indignation est-elle la condition affective de la conscience morale ?",
enjeu: "Déterminer le rôle des affects et de la raison dans la justice."
},
{
id: 612,
notion: 'justice',
intitule: "Le sens de la justice est-il inné ?",
piste1: "Naît-on avec une idée naturelle du juste et de l'injuste ?",
piste2: "ou le sens de la justice est-il entièrement le produit de l'éducation et de la société ?",
racine1: "L'indignation spontanée face à une inégalité prouve-t-elle un sens inné ?",
racine2: "ou ce sens est-il le résultat d'une intériorisation des normes sociales ?",
enjeu: "Interroger l'origine naturelle ou acquise du sentiment de justice."
},
{
id: 613,
notion: 'justice',
intitule: "La justice est-elle une invention des faibles ?",
piste1: "Les règles de justice ont-elles été créées par les faibles pour se protéger des forts ?",
piste2: "ou la justice est-elle une exigence rationnelle qui s'impose à tous ?",
racine1: "La morale et la justice sont-elles un instrument de domination des faibles (Nietzsche) ?",
racine2: "ou la justice est-elle la condition de possibilité de toute vie commune, forte ou faible ?",
enjeu: "Examiner la critique généalogique de la justice."
},
{
id: 614,
notion: 'justice',
intitule: "La justice est-elle l'intérêt du plus fort ?",
piste1: "Ceux qui détiennent le pouvoir définissent-ils le juste à leur propre avantage ?",
piste2: "ou la justice est-elle précisément ce qui limite l'arbitraire du plus fort ?",
racine1: "Le droit n'est-il que la volonté du puissant érigée en loi ?",
racine2: "ou la force sans justice n'est-elle qu'une tyrannie illégitime ?",
enjeu: "Confronter la conception réaliste de la justice à sa conception normative."
},
{
id: 615,
notion: 'justice',
intitule: "La justice est-elle un contrat ?",
piste1: "La justice naît-elle d'un accord mutuel pour éviter de se nuire les uns aux autres ?",
piste2: "ou existe-t-il des exigences de justice antérieures à tout contrat ?",
racine1: "Le juste est-il défini par ce qui est convenu entre des individus libres ?",
racine2: "ou le contrat lui-même doit-il être juste pour être valide ?",
enjeu: "Évaluer le modèle contractualiste de la justice."
},
{
id: 616,
notion: 'justice',
intitule: "La justice est-elle un calcul ?",
piste1: "Rendre à chacun son dû est-il une opération de mesure et de proportion ?",
piste2: "ou la justice échappe-t-elle à toute quantification ?",
racine1: "La justice distributive repose-t-elle sur une égalité mathématique des rapports ?",
racine2: "ou la singularité de la personne résiste-t-elle à tout calcul ?",
enjeu: "Déterminer si la justice peut être formalisée rationnellement."
},
{
id: 617,
notion: 'justice',
intitule: "La justice est-elle désintéressée ?",
piste1: "Agir justement, est-ce agir sans rien attendre en retour ?",
piste2: "ou la justice suppose-t-elle un équilibre des échanges et des intérêts ?",
racine1: "Le désintéressement est-il la marque de la véritable vertu de justice ?",
racine2: "ou la justice vise-t-elle précisément à garantir les intérêts légitimes de chacun ?",
enjeu: "Examiner le lien entre justice et intérêt."
},
{
id: 618,
notion: 'justice',
intitule: "Chercher la justice est-il naturel à l'homme ?",
piste1: "L'homme est-il par nature un être de justice et de droit ?",
piste2: "ou la justice est-elle une conquête contre nos penchants égoïstes ?",
racine1: "La sociabilité humaine inclut-elle originellement le souci du juste ?",
racine2: "ou la justice est-elle une contrainte nécessaire pour canaliser la violence naturelle ?",
enjeu: "Déterminer si la justice est une disposition naturelle ou une construction artificielle."
},
{
id: 619,
notion: 'justice',
intitule: "La justice se confond-elle avec la légalité ?",
piste1: "Tout ce qui est légal est-il nécessairement juste ?",
piste2: "ou peut-il y avoir un décalage entre la loi et la justice ?",
racine1: "Le positivisme juridique a-t-il raison de séparer le droit de la morale ?",
racine2: "ou une loi inique perd-elle sa validité morale, sinon juridique ?",
enjeu: "Distinguer le juste et le légal."
},
{
id: 620,
notion: 'justice',
intitule: "Obéir à la loi, est-ce être juste ?",
piste1: "Le citoyen juste est-il celui qui obéit scrupuleusement aux lois de sa cité ?",
piste2: "ou l'obéissance aveugle à une loi injuste est-elle une complicité ?",
racine1: "La légalité suffit-elle à garantir la moralité de l'action ?",
racine2: "ou le sens critique est-il une dimension essentielle de la justice ?",
enjeu: "Interroger le rapport entre obéissance civile et exigence de justice."
},
{
id: 621,
notion: 'justice',
intitule: "Peut-on être juste en enfreignant la loi ?",
piste1: "La désobéissance civile peut-elle être un acte de justice supérieur ?",
piste2: "ou enfreindre la loi est-il toujours un acte d'injustice ?",
racine1: "L'appel à une justice supérieure justifie-t-il la transgression de la loi positive ?",
racine2: "ou la désobéissance menace-t-elle l'État de droit, condition de toute justice ?",
enjeu: "Examiner la légitimité de la désobéissance au nom de la justice."
},
{
id: 622,
notion: 'justice',
intitule: "La justice est-elle supérieure au droit ?",
piste1: "Le droit n'est-il qu'un instrument au service d'une idée de justice qui le dépasse ?",
piste2: "ou la justice n'a-t-elle de réalité que celle que lui donne le droit ?",
racine1: "Le droit naturel est-il un tribunal d'appel contre le droit positif ?",
racine2: "ou le droit positif est-il la seule justice effective et non utopique ?",
enjeu: "Hiérarchiser ou articuler justice et droit."
},
{
id: 623,
notion: 'justice',
intitule: "Le droit est-il l'outil de la justice ?",
piste1: "Le système juridique est-il conçu pour réaliser la justice ?",
piste2: "ou le droit sert-il d'abord à maintenir l'ordre, quelle que soit sa justice ?",
racine1: "La fonction du droit est-elle de traduire la justice en règles contraignantes ?",
racine2: "ou le droit est-il avant tout un instrument de pouvoir et de contrôle ?",
enjeu: "Déterminer la finalité du système juridique."
},
{
id: 624,
notion: 'justice',
intitule: "La justice sans la force est-elle impuissante ?",
piste1: "La justice a-t-elle besoin de la contrainte pour s'imposer et être effective ?",
piste2: "ou la force corrompt-elle nécessairement la pureté de la justice ?",
racine1: "La justice doit-elle être armée pour ne pas être bafouée (Pascal) ?",
racine2: "ou la force de la justice réside-t-elle dans sa seule légitimité reconnue ?",
enjeu: "Examiner le rapport nécessaire ou problématique entre justice et force."
},
{
id: 625,
notion: 'justice',
intitule: "La force sans la justice est-elle tyrannique ?",
piste1: "Le pouvoir qui ne s'appuie que sur la force est-il par nature illégitime ?",
piste2: "ou la force peut-elle être légitime sans référence à une idée de justice ?",
racine1: "La tyrannie est-elle la définition même de la force dépourvue de droit ?",
racine2: "ou la stabilité de l'ordre par la force a-t-elle une valeur en soi ?",
enjeu: "Définir les limites de la légitimité du pouvoir par la force."
},
{
id: 626,
notion: 'justice',
intitule: "Faut-il choisir entre la justice et la paix ?",
piste1: "La recherche de la paix exige-t-elle parfois de sacrifier l'exigence de justice ?",
piste2: "ou n'y a-t-il de paix durable que fondée sur la justice ?",
racine1: "La paix est-elle l'absence de conflit, même au prix de l'injustice ?",
racine2: "ou la paix sans justice n'est-elle qu'une trêve précaire ?",
enjeu: "Arbitrer entre les exigences de la paix et celles de la justice."
},
{
id: 627,
notion: 'justice',
intitule: "La justice est-elle une affaire d'État ?",
piste1: "L'État a-t-il la charge exclusive d'instaurer et de rendre la justice ?",
piste2: "ou la justice relève-t-elle aussi de la société civile et des individus ?",
racine1: "Le monopole de la justice est-il un attribut essentiel de la souveraineté ?",
racine2: "ou la justice est-elle d'abord une vertu citoyenne ?",
enjeu: "Déterminer le rôle de l'État dans la réalisation de la justice."
},
{
id: 628,
notion: 'justice',
intitule: "L'État a-t-il le monopole de la justice ?",
piste1: "L'État est-il le seul habilité à définir et à sanctionner l'injustice ?",
piste2: "ou des formes de justice communautaire ou privée peuvent-elles être légitimes ?",
racine1: "La justice privée est-elle nécessairement une vengeance illégitime ?",
racine2: "ou l'État peut-il déléguer certaines formes de résolution des conflits ?",
enjeu: "Examiner l'étendue du monopole étatique sur la justice."
},
{
id: 629,
notion: 'justice',
intitule: "La justice est-elle rendue ou faite ?",
piste1: "La justice est-elle une découverte d'une vérité préexistante que le juge révèle ?",
piste2: "ou est-elle une construction, une décision qui crée le juste ?",
racine1: "Le juge applique-t-il une règle ou interprète-t-il et crée-t-il du droit ?",
racine2: "la justice est-elle un constat ou un acte de volonté ?",
enjeu: "Interroger la nature de l'acte de juger."
},
{
id: 630,
notion: 'justice',
intitule: "Le juge est-il l'incarnation de la justice ?",
piste1: "Le juge est-il la voix neutre et impartiale de la loi ?",
piste2: "ou reste-t-il un homme sujet à ses propres biais et limites ?",
racine1: "L'institution judiciaire garantit-elle l'effacement de la subjectivité du juge ?",
racine2: "ou la justice humaine est-elle irrémédiablement faillible ?",
enjeu: "Évaluer la place de l'humain dans l'institution judiciaire."
},
{
id: 631,
notion: 'justice',
intitule: "La justice est-elle aveugle ?",
piste1: "La justice doit-elle ignorer les identités, les statuts et les particularités des personnes ?",
piste2: "ou cette cécité la rend-elle injuste en ne tenant pas compte des inégalités réelles ?",
racine1: "L'impartialité exige-t-elle de ne rien voir des différences entre les justiciables ?",
racine2: "ou la justice véritable doit-elle voir ces différences pour les corriger ?",
enjeu: "Confronter l'idéal d'impartialité formelle et l'exigence de justice réelle."
},
{
id: 632,
notion: 'justice',
intitule: "L'impartialité est-elle la condition de la justice ?",
piste1: "Peut-il y avoir justice sans un tiers neutre et désintéressé ?",
piste2: "ou l'impartialité absolue est-elle une illusion qui masque des partis pris ?",
racine1: "La neutralité du juge est-elle une garantie procédurale suffisante ?",
racine2: "ou la justice exige-t-elle une forme d'engagement en faveur du plus faible ?",
enjeu: "Déterminer le rôle de l'impartialité dans l'acte de juger."
},
{
id: 633,
notion: 'justice',
intitule: "Peut-on être juge et partie ?",
piste1: "Celui qui a un intérêt dans une affaire peut-il la juger de manière juste ?",
piste2: "ou la subjectivité assumée peut-elle parfois mieux servir la justice ?",
racine1: "Le conflit d'intérêts invalide-t-il par principe toute prétention à la justice ?",
racine2: "ou la règle 'nul ne peut être juge en sa propre cause' est-elle un formalisme ?",
enjeu: "Examiner les conditions de légitimité de celui qui juge."
},
{
id: 634,
notion: 'justice',
intitule: "La justice est-elle une procédure ?",
piste1: "La justice réside-t-elle dans le respect scrupuleux des règles du procès ?",
piste2: "ou une procédure irréprochable peut-elle aboutir à une décision injuste ?",
racine1: "La justice procédurale garantit-elle la justice du résultat ?",
racine2: "ou le respect de la forme est-il parfois un obstacle à la justice de fond ?",
enjeu: "Opposer justice procédurale et justice substantielle."
},
{
id: 635,
notion: 'justice',
intitule: "La forme juridique garantit-elle le fond juste ?",
piste1: "Le respect des droits de la défense et des règles de preuve suffit-il à faire une décision juste ?",
piste2: "ou la vérité et la justice peuvent-elles être sacrifiées sur l'autel de la procédure ?",
racine1: "La légalité de la procédure est-elle la meilleure protection contre l'arbitraire ?",
racine2: "ou le formalisme juridique peut-il devenir une machine à produire de l'injustice ?",
enjeu: "Évaluer les limites du formalisme juridique."
},
{
id: 636,
notion: 'justice',
intitule: "La justice est-elle une institution ou une idée ?",
piste1: "La justice n'existe-t-elle que par les tribunaux, les lois et les juges ?",
piste2: "ou est-elle une idée qui juge les institutions elles-mêmes ?",
racine1: "L'institution est-elle la seule réalité de la justice ?",
racine2: "ou l'idée de justice est-elle la mesure critique de toute institution ?",
enjeu: "Déterminer le rapport entre l'idéal de justice et sa réalisation institutionnelle."
},
{
id: 637,
notion: 'justice',
intitule: "La justice est-elle l'égalité ?",
piste1: "Être juste, est-ce traiter tout le monde de la même manière ?",
piste2: "ou la justice consiste-t-elle à traiter de manière inégale ce qui est inégal ?",
racine1: "L'égalité stricte est-elle la définition même de la justice ?",
racine2: "ou l'égalité mathématique appliquée à des situations différentes est-elle injuste ?",
enjeu: "Clarifier le rapport complexe entre justice et égalité."
},
{
id: 638,
notion: 'justice',
intitule: "Traiter tout le monde de la même façon est-il juste ?",
piste1: "L'universalité de la règle garantit-elle l'équité du traitement ?",
piste2: "ou l'indifférence aux particularités crée-t-elle des injustices ?",
racine1: "La justice exige-t-elle l'aveuglement aux différences de situation ?",
racine2: "ou la prise en compte du contexte est-elle indispensable pour être juste ?",
enjeu: "Interroger les limites de l'égalité formelle."
},
{
id: 639,
notion: 'justice',
intitule: "L'égalité stricte est-elle injuste ?",
piste1: "Donner la même chose à des personnes aux besoins différents est-il injuste ?",
piste2: "ou toute différenciation du traitement est-elle une porte ouverte à l'arbitraire ?",
racine1: "L'équité doit-elle corriger l'égalité stricte pour être véritablement juste ?",
racine2: "ou l'égalité stricte est-elle la seule garantie contre le favoritisme ?",
enjeu: "Confronter égalité stricte et équité."
},
{
id: 640,
notion: 'justice',
intitule: "La justice est-elle proportionnelle ?",
piste1: "La justice consiste-t-elle à donner à chacun en proportion de ce qu'il mérite ou de ce qu'il a apporté ?",
piste2: "ou certains droits sont-ils inconditionnels et non proportionnels ?",
racine1: "La justice commutative et distributive repose-t-elle sur des rapports de proportion ?",
racine2: "ou la dignité humaine échappe-t-elle à toute logique de proportion ?",
enjeu: "Examiner le rôle de la proportionnalité dans la justice."
},
{
id: 641,
notion: 'justice',
intitule: "Donner à chacun selon son mérite est-il juste ?",
piste1: "La justice distributive doit-elle récompenser l'effort et le talent ?",
piste2: "ou le mérite est-il largement dépendant de facteurs sociaux que l'individu ne contrôle pas ?",
racine1: "Le mérite est-il une base solide et équitable pour la répartition des biens ?",
racine2: "ou la logique du mérite ne justifie-t-elle pas les inégalités existantes ?",
enjeu: "Critiquer ou défendre le principe de justice comme mérite."
},
{
id: 642,
notion: 'justice',
intitule: "Le mérite est-il une base solide pour la justice ?",
piste1: "Peut-on objectivement mesurer le mérite d'une personne ?",
piste2: "ou la notion de mérite est-elle trop subjective pour fonder la justice ?",
racine1: "Le mérite individuel est-il réel ou est-il le produit de la chance et du milieu ?",
racine2: "ou la société doit-elle malgré tout organiser la répartition autour de cette idée ?",
enjeu: "Évaluer la pertinence du mérite comme critère de justice."
},
{
id: 643,
notion: 'justice',
intitule: "La justice est-elle l'équité ?",
piste1: "L'équité est-elle la forme la plus haute de la justice, adaptant la règle au cas particulier ?",
piste2: "ou l'équité n'est-elle qu'une entorse subjective à la règle de droit ?",
racine1: "L'équité corrige-t-elle la loi là où elle est déficiente en raison de sa généralité (Aristote) ?",
racine2: "ou l'équité introduit-elle un arbitraire dangereux dans l'application du droit ?",
enjeu: "Définir le rapport entre la règle générale et l'équité."
},
{
id: 644,
notion: 'justice',
intitule: "L'équité corrige-t-elle la rigueur de la loi ?",
piste1: "La loi, par sa généralité, est-elle condamnée à être injuste dans des cas particuliers ?",
piste2: "ou la rigueur de la loi est-elle précisément ce qui protège de l'arbitraire du juge ?",
racine1: "L'esprit de la loi doit-il prévaloir sur la lettre de la loi ?",
racine2: "ou la lettre de la loi est-elle la seule garantie de sécurité juridique ?",
enjeu: "Examiner la fonction correctrice de l'équité."
},
{
id: 645,
notion: 'justice',
intitule: "La justice doit-elle tenir compte des particularités ?",
piste1: "Pour être juste, la décision doit-elle intégrer l'histoire et le contexte de la personne ?",
piste2: "ou la justice exige-t-elle d'abstraire ces particularités pour ne voir que le citoyen ?",
racine1: "La singularité de la situation est-elle un obstacle ou une condition de la justice ?",
racine2: "ou l'abstraction des particularités est-elle la condition de l'universalité du droit ?",
enjeu: "Déterminer la place du particulier dans le jugement de justice."
},
{
id: 646,
notion: 'justice',
intitule: "L'universalité de la règle est-elle injuste ?",
piste1: "Appliquer une règle universelle à des situations radicalement différentes est-il une injustice ?",
piste2: "ou l'universalité est-elle la seule protection contre les privilèges et le favoritisme ?",
racine1: "La généralité de la loi est-elle un défaut ou une qualité essentielle ?",
racine2: "ou la justice ne peut-elle se réaliser que dans le cas par cas ?",
enjeu: "Interroger les limites de l'universalisme juridique."
},
{
id: 647,
notion: 'justice',
intitule: "La justice sociale est-elle une contradiction ?",
piste1: "La justice ne concerne-t-elle que le droit et les libertés, laissant le social à la charité ou au marché ?",
piste2: "ou la répartition des richesses est-elle une question centrale de justice ?",
racine1: "L'État social réalise-t-il la justice ou la dénature-t-il par l'assistanat ?",
racine2: "ou l'inégalité matérielle rend-elle illusoire l'égalité des droits ?",
enjeu: "Débattre de la légitimité de la notion de justice sociale."
},
{
id: 648,
notion: 'justice',
intitule: "L'État doit-il redistribuer les richesses pour être juste ?",
piste1: "La justice exige-t-elle une correction active des inégalités économiques par l'impôt ?",
piste2: "ou la redistribution est-elle une atteinte injuste au droit de propriété et au mérite ?",
racine1: "La justice distributive moderne passe-t-elle nécessairement par la redistribution ?",
racine2: "ou la justice se limite-t-elle à garantir l'égalité des chances et non des résultats ?",
enjeu: "Examiner le rôle de la redistribution dans la justice."
},
{
id: 649,
notion: 'justice',
intitule: "La justice est-elle compatible avec la liberté ?",
piste1: "Les exigences de la justice (égalité, redistribution) limitent-elles la liberté individuelle ?",
piste2: "ou la liberté réelle n'est-elle possible que dans un cadre juste ?",
racine1: "Liberté et égalité sont-elles en tension irréductible ?",
racine2: "ou la justice est-elle la condition de l'exercice effectif de la liberté ?",
enjeu: "Articuler les principes de liberté et de justice."
},
{
id: 650,
notion: 'justice',
intitule: "L'égalité des chances est-elle une exigence de justice ?",
piste1: "La justice exige-t-elle que tous partent avec les mêmes atouts dans la vie ?",
piste2: "ou l'égalité des chances est-elle une illusion qui masque les inégalités structurelles ?",
racine1: "Corriger les inégalités de départ est-il le devoir premier d'une société juste ?",
racine2: "ou la méritocratie fondée sur l'égalité des chances est-elle suffisante ?",
enjeu: "Évaluer le principe d'égalité des chances comme idéal de justice."
},
{
id: 651,
notion: 'justice',
intitule: "La justice est-elle aveugle aux différences ?",
piste1: "La justice doit-elle ignorer le genre, la race ou la classe sociale pour être juste ?",
piste2: "ou cette cécité perpétue-t-elle des injustices systémiques ?",
racine1: "L'universalisme abstrait est-il la meilleure arme contre les discriminations ?",
racine2: "ou faut-il une justice qui 'voit' les différences pour les combattre ?",
enjeu: "Confronter l'universalisme abstrait et la reconnaissance des identités."
},
{
id: 652,
notion: 'justice',
intitule: "La discrimination positive est-elle juste ?",
piste1: "Favoriser temporairement un groupe défavorisé est-il un acte de justice réparatrice ?",
piste2: "ou est-ce une injustice envers les individus de ce groupe qui sont jugés sur des critères collectifs ?",
racine1: "L'équité justifie-t-elle de rompre temporairement avec l'égalité formelle ?",
racine2: "ou la discrimination positive contredit-elle le principe de mérite individuel ?",
enjeu: "Examiner la légitimité morale de la discrimination positive."
},
{
id: 653,
notion: 'justice',
intitule: "La justice est-elle une question de répartition ?",
piste1: "Le problème central de la justice est-il de savoir qui reçoit quoi et comment ?",
piste2: "ou la justice concerne-t-elle d'abord la reconnaissance et le statut des personnes ?",
racine1: "La justice distributive est-elle le paradigme exclusif de la justice (Rawls) ?",
racine2: "ou la justice de la reconnaissance est-elle tout aussi fondamentale (Honneth) ?",
enjeu: "Élargir la conception de la justice au-delà de la seule distribution des biens."
},
{
id: 654,
notion: 'justice',
intitule: "La justice distributive est-elle la seule forme de justice ?",
piste1: "Existe-t-il d'autres formes de justice (commutative, corrective, réparatrice) tout aussi importantes ?",
piste2: "ou toute justice peut-elle se ramener à une question de distribution ?",
racine1: "La justice commutative (échange) et la justice corrective (sanction) sont-elles dérivées ?",
racine2: "ou sont-elles des dimensions irréductibles de la justice ?",
enjeu: "Distinguer les différentes formes de la justice."
},
{
id: 655,
notion: 'justice',
intitule: "La justice est-elle une question de reconnaissance ?",
piste1: "L'injustice fondamentale est-elle le mépris ou l'invisibilisation d'un groupe ou d'un individu ?",
piste2: "ou la reconnaissance est-elle une conséquence de la justice distributive, et non son fondement ?",
racine1: "Être traité avec dignité est-il la première exigence de la justice ?",
racine2: "ou la reconnaissance sans ressources matérielles est-elle une coquille vide ?",
enjeu: "Examiner la théorie de la reconnaissance comme paradigme de la justice."
},
{
id: 656,
notion: 'justice',
intitule: "L'injustice est-elle le refus de reconnaître autrui ?",
piste1: "L'injustice naît-elle du déni de la pleine humanité ou de la dignité d'autrui ?",
piste2: "ou l'injustice est-elle d'abord une privation matérielle objective ?",
racine1: "Le mépris est-il la racine de toutes les formes d'injustice ?",
racine2: "ou l'exploitation économique est-elle une injustice indépendamment de la reconnaissance ?",
enjeu: "Lier injustice et défaut de reconnaissance."
},
{
id: 657,
notion: 'justice',
intitule: "La justice est-elle punitive ?",
piste1: "La fonction première de la justice est-elle de punir ceux qui enfreignent les règles ?",
piste2: "ou la punition n'est-elle qu'un aspect secondaire de la justice ?",
racine1: "La société a-t-elle le devoir de faire souffrir celui qui a fait souffrir ?",
racine2: "ou la justice doit-elle viser la restauration du lien social plutôt que la peine ?",
enjeu: "Interroger la place de la punition dans l'idée de justice."
},
{
id: 658,
notion: 'justice',
intitule: "Punir est-il un acte de justice ?",
piste1: "La peine est-elle la conséquence juste et nécessaire de la faute ?",
piste2: "ou la punition est-elle une violence d'État qui reproduit le mal ?",
racine1: "Le châtiment rétablit-il l'équilibre moral rompu par l'infraction ?",
racine2: "ou la punition est-elle socialement utile mais moralement injustifiable ?",
enjeu: "Examiner la légitimité morale de la sanction pénale."
},
{
id: 659,
notion: 'justice',
intitule: "La peine de mort est-elle juste ?",
piste1: "La loi du talion justifie-t-elle que la société donne la mort au meurtrier ?",
piste2: "ou la peine de mort est-elle une barbarie qui dégrade la société qui l'applique ?",
racine1: "L'État a-t-il le droit de disposer de la vie d'un citoyen, même coupable ?",
racine2: "ou la justice suprême exige-t-elle la suppression définitive du criminel ?",
enjeu: "Débattre de la légitimité de la peine capitale au nom de la justice."
},
{
id: 660,
notion: 'justice',
intitule: "La justice est-elle une vengeance légitime ?",
piste1: "La justice institutionnelle n'est-elle qu'une vengeance d'État codifiée et contrôlée ?",
piste2: "ou la justice est-elle précisément ce qui permet de sortir de la logique de la vengeance ?",
racine1: "La punition est-elle une vengeance sublimée ?",
racine2: "ou la justice et la vengeance sont-elles deux ordres radicalement hétérogènes ?",
enjeu: "Distinguer la justice de la vengeance."
},
{
id: 661,
notion: 'justice',
intitule: "La vengeance est-elle l'opposé de la justice ?",
piste1: "La vengeance est-elle une justice privée, aveugle et sans limite ?",
piste2: "ou contient-elle une revendication de justice que le système formel ignore parfois ?",
racine1: "La vengeance est-elle une régression barbare ?",
racine2: "ou exprime-t-elle un besoin de reconnaissance de la souffrance de la victime ?",
enjeu: "Analyser les liens complexes entre vengeance et justice."
},
{
id: 662,
notion: 'justice',
intitule: "La justice doit-elle viser la réhabilitation ?",
piste1: "Le but de la justice pénale est-il de réinsérer le coupable dans la société ?",
piste2: "ou la réhabilitation est-elle secondaire par rapport à l'expiation de la faute ?",
racine1: "La justice est-elle au service de l'avenir (réinsertion) ou du passé (sanction) ?",
racine2: "ou la réhabilitation est-elle la seule manière de réaliser une justice humaine ?",
enjeu: "Déterminer la finalité de la justice pénale."
},
{
id: 663,
notion: 'justice',
intitule: "La justice réparatrice est-elle plus juste que la justice punitive ?",
piste1: "Mettre l'accent sur la réparation du préjudice et le dialogue est-il plus juste que d'emprisonner ?",
piste2: "ou la justice réparatrice risque-t-elle de banaliser la faute et de négliger la sanction ?",
racine1: "La réparation du lien social est-elle l'essence de la justice ?",
racine2: "ou la justice exige-t-elle une souffrance infligée au coupable ?",
enjeu: "Confronter les modèles de justice punitive et réparatrice."
},
{
id: 664,
notion: 'justice',
intitule: "Pardonner est-il un acte de justice ?",
piste1: "Le pardon peut-il accomplir la justice là où la punition échoue ?",
piste2: "ou le pardon est-il une grâce qui suspend la justice, sans être juste lui-même ?",
racine1: "Le pardon répare-t-il l'injustice d'une manière supérieure à la loi ?",
racine2: "ou pardonner sans que la justice soit passée est-il une forme de complicité ?",
enjeu: "Examiner le rapport entre justice et pardon."
},
{
id: 665,
notion: 'justice',
intitule: "La justice est-elle compatible avec la clémence ?",
piste1: "La clémence est-elle une correction humaine nécessaire de la rigueur de la justice ?",
piste2: "ou la clémence est-elle une injustice envers la règle et les victimes ?",
racine1: "La clémence est-elle une vertu du souverain qui complète la justice ?",
racine2: "ou la clémence est-elle un arbitraire qui corrompt l'État de droit ?",
enjeu: "Déterminer la place de la clémence dans un système juste."
},
{
id: 666,
notion: 'justice',
intitule: "L'impunité est-elle une injustice ?",
piste1: "L'absence de sanction pour un crime est-elle en soi une injustice majeure ?",
piste2: "ou l'impunité peut-elle être parfois un prix nécessaire pour la paix ou la vérité ?",
racine1: "La justice exige-t-elle impérativement que le coupable soit puni ?",
racine2: "ou la recherche de la vérité et de la réconciliation peut-elle primer sur la sanction ?",
enjeu: "Évaluer le scandale de l'impunité au regard de la justice."
},
{
id: 667,
notion: 'justice',
intitule: "La justice peut-elle tout réparer ?",
piste1: "Certains préjudices sont-ils irréparables, rendant la justice impuissante ?",
piste2: "ou la justice doit-elle toujours trouver un moyen de compenser ou de reconnaître le tort ?",
racine1: "L'irréparable existe-t-il, ou la justice a-t-elle pour fonction de le symboliser ?",
racine2: "ou la réparation matérielle ou symbolique a-t-elle des limites infranchissables ?",
enjeu: "Interroger les limites de la capacité réparatrice de la justice."
},
{
id: 668,
notion: 'justice',
intitule: "Le temps efface-t-il l'injustice ?",
piste1: "Avec le temps, l'injustice perd-elle de sa gravité et de son exigence de réparation ?",
piste2: "ou l'injustice reste-t-elle une dette imprescriptible ?",
racine1: "La prescription juridique est-elle une nécessité pratique ou une injustice ?",
racine2: "ou la mémoire de l'injustice doit-elle être éternellement entretenue ?",
enjeu: "Examiner le rapport entre justice, temps et prescription."
},
{
id: 669,
notion: 'justice',
intitule: "La justice est-elle rétrospective ou prospective ?",
piste1: "La justice consiste-t-elle à juger et réparer le passé ?",
piste2: "ou doit-elle viser à construire un avenir plus juste ?",
racine1: "La justice est-elle tournée vers la faute commise ou vers la prévention et l'amélioration ?",
racine2: "ou ces deux dimensions sont-elles indissociables ?",
enjeu: "Déterminer l'orientation temporelle de la justice."
},
{
id: 670,
notion: 'justice',
intitule: "La justice doit-elle prévenir le crime ?",
piste1: "La fonction de la justice est-elle d'empêcher le mal avant qu'il n'advienne ?",
piste2: "ou la justice ne doit-elle intervenir qu'après l'infraction, sous peine de devenir tyrannique ?",
racine1: "La prévention est-elle une forme de justice ou une logique de police ?",
racine2: "ou la justice doit-elle intégrer la dimension préventive pour être efficace ?",
enjeu: "Examiner les limites de la prévention au nom de la justice."
},
{
id: 671,
notion: 'justice',
intitule: "La justice est-elle une affaire de responsabilité ?",
piste1: "On ne peut être jugé que si l'on est responsable de ses actes ?",
piste2: "ou la justice peut-elle imposer des réparations sans responsabilité individuelle (responsabilité collective) ?",
racine1: "La responsabilité est-elle le fondement indispensable de toute imputation de justice ?",
racine2: "ou la justice sociale exige-t-elle de dépasser la responsabilité individuelle ?",
enjeu: "Lier justice et responsabilité."
},
{
id: 672,
notion: 'justice',
intitule: "Peut-on être tenu pour juste sans être responsable ?",
piste1: "La justice peut-elle exiger des comptes à quelqu'un qui n'avait pas le contrôle de ses actes ?",
piste2: "ou l'absence de responsabilité exclut-elle toute possibilité de jugement juste ?",
racine1: "L'imputabilité est-elle la condition sine qua non de la justice pénale ?",
racine2: "ou la justice peut-elle avoir une fonction purement objective de protection ?",
enjeu: "Déterminer le lien entre responsabilité et justice."
},
{
id: 673,
notion: 'justice',
intitule: "La justice est-elle une affaire de vérité ?",
piste1: "Peut-il y avoir justice sans l'établissement préalable de la vérité des faits ?",
piste2: "ou la justice est-elle une construction procédurale qui peut se passer de la vérité absolue ?",
racine1: "La vérité est-elle la condition de possibilité de tout jugement juste ?",
racine2: "ou la justice est-elle une décision qui tranche, même dans l'incertitude ?",
enjeu: "Examiner le rapport entre vérité et justice."
},
{
id: 674,
notion: 'justice',
intitule: "Peut-il y avoir justice sans vérité ?",
piste1: "Un procès équitable peut-il aboutir à une décision juste si la vérité reste inconnue ?",
piste2: "ou la vérité est-elle tellement essentielle que son absence rend la justice impossible ?",
racine1: "La justice procédurale peut-elle compenser l'absence de vérité matérielle ?",
racine2: "ou une décision fondée sur une erreur factuelle est-elle par définition injuste ?",
enjeu: "Confronter la vérité matérielle et la vérité procédurale dans la justice."
},
{
id: 675,
notion: 'justice',
intitule: "La justice est-elle une fin ou un moyen ?",
piste1: "La justice est-elle une valeur absolue à poursuivre pour elle-même ?",
piste2: "ou est-elle un moyen au service de la paix, de l'ordre ou du bonheur social ?",
racine1: "La justice est-elle le souverain bien des sociétés politiques ?",
racine2: "ou la justice est-elle subordonnée à des fins de stabilité et d'efficacité ?",
enjeu: "Déterminer le statut axiologique de la justice."
},
{
id: 676,
notion: 'justice',
intitule: "La justice est-elle le souverain bien de la cité ?",
piste1: "Une cité est-elle bonne et réussie si et seulement si elle est juste ?",
piste2: "ou la cité peut-elle être prospère et puissante sans être juste ?",
racine1: "La justice est-elle la condition de la survie et de l'harmonie de la cité (Platon) ?",
racine2: "ou la cité est-elle d'abord une entreprise de puissance et de sécurité ?",
enjeu: "Évaluer la place centrale de la justice dans la philosophie politique."
},
{
id: 677,
notion: 'justice',
intitule: "La justice est-elle toujours possible ?",
piste1: "Les conditions humaines et sociales permettent-elles une réalisation effective de la justice ?",
piste2: "ou la justice est-elle un idéal qui se heurte toujours à des obstacles insurmontables ?",
racine1: "La justice est-elle une tâche infinie ou un objectif atteignable ?",
racine2: "ou les conflits d'intérêts rendent-ils la justice parfaite impossible ?",
enjeu: "Interroger la possibilité pratique de la justice."
},
{
id: 678,
notion: 'justice',
intitule: "La justice est-elle un idéal inaccessible ?",
piste1: "La justice est-elle une étoile qui guide l'action mais ne peut être touchée ?",
piste2: "ou cette idée décourage-t-elle l'action en faveur d'une justice imparfaite mais réelle ?",
racine1: "L'idéalisme en matière de justice est-il une force ou une faiblesse ?",
racine2: "ou faut-il se contenter du 'moins pire' plutôt que de viser l'idéal ?",
enjeu: "Déterminer le rôle de l'idéal de justice."
},
{
id: 679,
notion: 'justice',
intitule: "La justice est-elle une illusion ?",
piste1: "La justice n'est-elle qu'un mot utilisé pour masquer des rapports de domination ?",
piste2: "ou l'expérience de l'injustice prouve-t-elle que l'idée de justice est réelle et opérante ?",
racine1: "La critique idéologique dissout-elle la réalité de la justice ?",
racine2: "ou la révolte contre l'injustice atteste-t-elle de l'existence d'une exigence de justice ?",
enjeu: "Confronter la critique de la justice et l'expérience morale de l'injustice."
},
{
id: 680,
notion: 'justice',
intitule: "La justice est-elle une utopie ?",
piste1: "Une société parfaitement juste est-elle concevable et réalisable ?",
piste2: "ou toute tentative d'instaurer une justice parfaite ne conduit-elle qu'à la tyrannie ?",
racine1: "L'utopie de la justice est-elle un moteur de progrès ou un danger totalitaire ?",
racine2: "ou la justice est-elle nécessairement un compromis imparfait ?",
enjeu: "Examiner le statut utopique ou réaliste de la justice."
},
{
id: 681,
notion: 'justice',
intitule: "La justice est-elle une construction idéologique ?",
piste1: "Les discours sur la justice servent-ils à légitimer l'ordre social existant ?",
piste2: "ou la justice est-elle un outil critique permettant de contester cet ordre ?",
racine1: "La justice est-elle l'idéologie de la classe dominante ?",
racine2: "ou la justice est-elle l'arme des dominés pour réclamer leurs droits ?",
enjeu: "Analyser la fonction idéologique ou émancipatrice du discours sur la justice."
},
{
id: 682,
notion: 'justice',
intitule: "La justice sert-elle à masquer les rapports de force ?",
piste1: "Le langage du droit et de la justice ne fait-il qu'habiller la violence des puissants ?",
piste2: "ou le droit est-il précisément ce qui permet de civiliser et de limiter les rapports de force ?",
racine1: "La justice est-elle la continuation de la guerre par d'autres moyens ?",
racine2: "ou la justice est-elle la seule alternative à la loi du plus fort ?",
enjeu: "Débattre de la relation entre justice et rapports de force."
},
{
id: 683,
notion: 'justice',
intitule: "La justice est-elle l'alibi des puissants ?",
piste1: "Les puissants invoquent-ils la justice pour justifier leurs privilèges ?",
piste2: "ou les puissants sont-ils eux-mêmes soumis à l'exigence de justice ?",
racine1: "La justice est-elle un instrument de domination symbolique ?",
racine2: "ou l'idée de justice s'impose-t-elle aussi aux puissants comme une limite ?",
enjeu: "Examiner la critique de la justice comme instrument de pouvoir."
},
{
id: 684,
notion: 'justice',
intitule: "Peut-on être trop juste ?",
piste1: "Une application trop rigoureuse de la justice peut-elle devenir une injustice ?",
piste2: "ou la justice ne peut-elle jamais être excessive ?",
racine1: "Summum jus, summa injuria : l'excès de droit est-il l'excès d'injustice ?",
racine2: "ou la justice est-elle par définition la mesure exacte, ne pouvant donc être excessive ?",
enjeu: "Interroger les excès potentiels de la justice."
},
{
id: 685,
notion: 'justice',
intitule: "La justice est-elle cruelle ?",
piste1: "La justice, en appliquant la loi sans émotion, peut-elle paraître cruelle ?",
piste2: "ou la cruauté est-elle l'opposé même de la justice ?",
racine1: "L'impassibilité de la justice est-elle une forme de dureté ?",
racine2: "ou la justice est-elle la seule protection contre la cruauté arbitraire ?",
enjeu: "Examiner le rapport entre la froideur de la loi et la cruauté."
},
{
id: 686,
notion: 'justice',
intitule: "La justice est-elle compatible avec l'amour ?",
piste1: "L'amour, qui est don inconditionnel, contredit-il la justice, qui est calcul et dû ?",
piste2: "ou l'amour et la justice peuvent-ils s'harmoniser ?",
racine1: "La justice donne ce qui est dû, l'amour donne au-delà du dû : sont-ils incompatibles ?",
racine2: "ou l'amour véritable inclut-il le souci de la justice pour l'aimé ?",
enjeu: "Confronter la logique du don (amour) et la logique du dû (justice)."
},
{
id: 687,
notion: 'justice',
intitule: "La charité est-elle supérieure à la justice ?",
piste1: "La charité, en donnant par grâce, est-elle une vertu plus haute que la justice ?",
piste2: "ou la charité est-elle une insulte à la justice, car elle maintient l'inégalité ?",
racine1: "La charité comble-t-elle les lacunes de la justice ?",
racine2: "ou la charité est-elle un alibi pour ne pas instaurer une justice structurelle ?",
enjeu: "Hiérarchiser ou opposer charité et justice."
},
{
id: 688,
notion: 'justice',
intitule: "La justice est-elle froide ?",
piste1: "La justice, pour être impartiale, doit-elle exclure toute émotion et toute compassion ?",
piste2: "ou une justice sans humanité est-elle une justice inhumaine ?",
racine1: "La froideur de la raison est-elle la garantie de la justice ?",
racine2: "ou la justice doit-elle être tempérée par la bienveillance ?",
enjeu: "Déterminer la place des émotions dans l'exercice de la justice."
},
{
id: 689,
notion: 'justice',
intitule: "La justice a-t-elle besoin de la compassion ?",
piste1: "La capacité à ressentir la souffrance d'autrui est-elle nécessaire pour rendre la justice ?",
piste2: "ou la compassion risque-t-elle de biaiser le jugement en faveur de celui qui inspire la pitié ?",
racine1: "La compassion est-elle le fondement affectif de la justice ?",
racine2: "ou la justice doit-elle se méfier de la compassion, qui est sélective et émotionnelle ?",
enjeu: "Examiner le rôle de la compassion dans le jugement de justice."
},
{
id: 690,
notion: 'justice',
intitule: "La justice est-elle une affaire de cœur ou de raison ?",
piste1: "Le sentiment d'injustice est-il plus fondamental que le raisonnement sur la justice ?",
piste2: "ou la justice ne peut-elle être élaborée que par la raison ?",
racine1: "Le cœur a-t-il ses raisons que la raison de la justice ignore ?",
racine2: "ou la justice est-elle la victoire de la raison sur les passions du cœur ?",
enjeu: "Articuler les dimensions affective et rationnelle de la justice."
},
{
id: 691,
notion: 'justice',
intitule: "La justice est-elle soluble dans la négociation ?",
piste1: "La justice peut-elle être le résultat d'un compromis et d'un marchandage entre intérêts ?",
piste2: "ou la justice est-elle un principe qui ne se négocie pas ?",
racine1: "Le compromis est-il une forme de justice pratique ou une trahison de la justice ?",
racine2: "ou la négociation est-elle la seule manière de parvenir à un accord juste dans la diversité ?",
enjeu: "Évaluer la place de la négociation dans la réalisation de la justice."
},
{
id: 692,
notion: 'justice',
intitule: "La justice est-elle un compromis ?",
piste1: "La justice est-elle toujours un équilibre instable entre des forces et des revendications opposées ?",
piste2: "ou la justice est-elle une vérité qui s'impose, au-delà des compromis ?",
racine1: "La justice est-elle le produit d'un rapport de force équilibré ?",
racine2: "ou la justice est-elle ce qui doit permettre de dépasser le rapport de force ?",
enjeu: "Déterminer si la justice est un compromis ou un absolu."
},
{
id: 693,
notion: 'justice',
intitule: "La justice est-elle un état ou un processus ?",
piste1: "La justice est-elle un résultat atteint, un état d'équilibre de la société ?",
piste2: "ou la justice est-elle un processus continu de lutte, de revendication et d'ajustement ?",
racine1: "Peut-on dire d'une société qu'elle 'est' juste ?",
racine2: "ou la justice est-elle une tâche infinie, un 'devenir-juste' permanent ?",
enjeu: "Définir la justice comme état statique ou comme dynamique processuelle."
},
{
id: 694,
notion: 'justice',
intitule: "La justice est-elle en crise ?",
piste1: "Les institutions judiciaires et l'idée même de justice traversent-elles une crise de légitimité ?",
piste2: "ou cette idée de crise est-elle un lieu commun qui masque des transformations nécessaires ?",
racine1: "La défiance envers la justice signe-t-elle l'échec de l'État de droit ?",
racine2: "ou la crise de la justice est-elle le signe d'une exigence de justice plus forte que jamais ?",
enjeu: "Diagnostiquer l'état contemporain de la justice."
},
{
id: 695,
notion: 'justice',
intitule: "La justice a-t-elle un avenir ?",
piste1: "Les défis contemporains (mondialisation, écologie, numérique) rendent-ils l'idée de justice obsolète ?",
piste2: "ou ces défis exigent-ils au contraire une réinvention et un renforcement de la justice ?",
racine1: "La justice est-elle une notion du passé, dépassée par la gestion technique des conflits ?",
racine2: "ou la justice reste-t-elle l'horizon indépassable de toute action politique ?",
enjeu: "Interroger la pertinence future de l'idée de justice."
},
{
id: 696,
notion: 'justice',
intitule: "La justice peut-elle se définir ?",
piste1: "Peut-on donner une définition unique et universelle de la justice ?",
piste2: "ou la justice est-elle un concept essentiellement contesté, pluriel et ouvert ?",
racine1: "La recherche d'une définition de la justice est-elle une entreprise philosophique légitime ?",
racine2: "ou la justice ne se laisse-t-elle saisir que par ses manifestations et ses contraires ?",
enjeu: "Examiner la possibilité et les limites d'une définition de la justice."
},
{
id: 697,
notion: 'justice',
intitule: "La justice est-elle une harmonie ?",
piste1: "La justice consiste-t-elle à mettre chaque partie à sa place pour former un tout harmonieux ?",
piste2: "ou cette vision harmonieuse masque-t-elle les conflits et les dominations réels ?",
racine1: "La justice est-elle l'ordre et la proportion dans la cité et dans l'âme ?",
racine2: "ou la justice est-elle toujours le résultat d'un conflit et d'une rupture de l'harmonie apparente ?",
enjeu: "Confronter la conception classique de la justice comme harmonie et la conception moderne comme conflit régulé."
},
{
id: 698,
notion: 'justice',
intitule: "La justice est-elle une obligation morale ou politique ?",
piste1: "La justice relève-t-elle d'abord de la conscience morale de l'individu ?",
piste2: "ou est-elle une obligation qui ne prend sens que dans le cadre de l'État et des lois ?",
racine1: "Peut-on être juste en dehors de toute appartenance politique ?",
racine2: "ou la justice est-elle la vertu spécifique du citoyen et de l'institution ?",
enjeu: "Déterminer le domaine de prédilection de la justice."
},
{
id: 699,
notion: 'justice',
intitule: "La justice est-elle une exigence de raison ou de sentiment ?",
piste1: "La justice est-elle déduite de principes rationnels universels ?",
piste2: "ou naît-elle d'un sentiment spontané de révolte face à la souffrance ?",
racine1: "La raison peut-elle seule fonder l'obligation de justice ?",
racine2: "ou le sentiment de sympathie est-il le véritable fondement de la justice ?",
enjeu: "Opposer les fondements rationalistes et sentimentalistes de la justice."
},
{
id: 700,
notion: 'justice',
intitule: "Peut-on vivre sans justice ?",
piste1: "Une société peut-elle survivre et fonctionner sans aucune idée de justice ?",
piste2: "ou la vie humaine devient-elle impossible, réduite à la violence pure, sans justice ?",
racine1: "La justice est-elle une condition de possibilité de la vie en société ?",
racine2: "ou des sociétés peuvent-elles être organisées par la seule peur ou la seule tradition, sans justice ?",
enjeu: "Évaluer la nécessité absolue ou relative de la justice pour l'existence humaine."
},
{
id: 701,
notion: 'langage',
intitule: "Le langage exprime-t-il la pensée ?",
piste1: "Le langage est-il le vêtement extérieur d'une pensée qui existe déjà en elle-même ?",
piste2: "ou la pensée se constitue-t-elle uniquement dans et par les mots ?",
racine1: "La pensée est-elle une réalité intérieure indépendante de son expression ?",
racine2: "ou n'y a-t-il de pensée claire que celle qui est formulée dans le langage ?",
enjeu: "Déterminer si le langage est un simple outil de traduction ou la condition même de la pensée."
},
{
id: 702,
notion: 'langage',
intitule: "Le langage est-il un instrument ?",
piste1: "Le langage est-il un outil neutre que nous utilisons pour transmettre nos idées ?",
piste2: "ou nous façonne-t-il en retour, imposant ses propres structures ?",
racine1: "Le sujet est-il maître du langage qu'il parle ?",
racine2: "ou le langage parle-t-il à travers nous, déterminant nos possibilités de penser ?",
enjeu: "Examiner le rapport de domination ou de soumission entre le sujet et la langue."
},
{
id: 703,
notion: 'langage',
intitule: "Pense-t-on sans mots ?",
piste1: "Existe-t-il une pensée pure, intuitive ou visuelle, antérieure au langage ?",
piste2: "ou toute pensée est-elle nécessairement articulée et structurée par des signes ?",
racine1: "L'expérience intérieure échappe-t-elle à la mise en mots ?",
racine2: "ou ce qui ne peut être dit n'est-il pas encore une pensée à proprement parler ?",
enjeu: "Interroger l'existence et la nature d'une pensée non linguistique."
},
{
id: 704,
notion: 'langage',
intitule: "Le langage déforme-t-il la pensée ?",
piste1: "Les mots trahissent-ils la richesse et la subtilité de nos idées ?",
piste2: "ou le langage est-il au contraire ce qui donne sa précision à la pensée ?",
racine1: "Le passage du vécu au discours entraîne-t-il une perte inévitable ?",
racine2: "ou la pensée confuse ne devient-elle distincte que par le langage ?",
enjeu: "Évaluer la fidélité du langage à l'égard de l'expérience subjective."
},
{
id: 705,
notion: 'langage',
intitule: "Le langage est-il un vêtement de la pensée ?",
piste1: "Le langage habille-t-il une pensée qui pourrait rester nue ?",
piste2: "ou la pensée sans langage est-elle une abstraction impossible ?",
racine1: "L'expression est-elle un ajout extérieur à la pensée ?",
racine2: "ou la forme et le fond sont-ils indissociables dans l'acte de penser ?",
enjeu: "Dépasser la métaphore du vêtement pour penser l'unité du dire et du penser."
},
{
id: 706,
notion: 'langage',
intitule: "La pensée précède-t-elle le langage ?",
piste1: "Avons-nous des idées avant de savoir les formuler ?",
piste2: "ou l'acquisition du langage est-elle la condition d'apparition de la pensée ?",
racine1: "Le nourrisson pense-t-il avant de parler ?",
racine2: "ou la structuration du monde par les mots est-elle première ?",
enjeu: "Déterminer l'antériorité chronologique et logique de la pensée ou du langage."
},
{
id: 707,
notion: 'langage',
intitule: "Le langage structure-t-il la pensée ?",
piste1: "La grammaire et le vocabulaire d'une langue imposent-ils une manière de voir le monde ?",
piste2: "ou la pensée peut-elle s'affranchir des cadres de sa langue maternelle ?",
racine1: "Sommes-nous prisonniers des catégories de notre langue ?",
racine2: "ou l'esprit humain possède-t-il des structures universelles indépendantes de la langue ?",
enjeu: "Examiner l'hypothèse du déterminisme linguistique."
},
{
id: 708,
notion: 'langage',
intitule: "Sommes-nous prisonniers de notre langue ?",
piste1: "Le langage nous enferme-t-il dans une vision du monde que nous ne pouvons dépasser ?",
piste2: "ou est-il au contraire l'outil de notre libération et de notre ouverture au monde ?",
racine1: "Les limites de mon langage sont-elles les limites de mon monde ?",
racine2: "ou le langage permet-il précisément de repousser ces limites ?",
enjeu: "Déterminer si le langage est une clôture ou une ouverture."
},
{
id: 709,
notion: 'langage',
intitule: "Le langage est-il une convention ?",
piste1: "Les mots n'ont-ils de sens que parce que nous sommes tombés d'accord sur leur usage ?",
piste2: "ou existe-t-il un lien naturel entre le mot et la chose ?",
racine1: "Le signe linguistique est-il arbitraire ?",
racine2: "ou le langage puise-t-il ses racines dans une expressivité naturelle ?",
enjeu: "Interroger le fondement du sens : convention sociale ou lien naturel."
},
{
id: 710,
notion: 'langage',
intitule: "Le langage est-il naturel ?",
piste1: "La faculté de parler est-elle inscrite dans la nature humaine ?",
piste2: "ou le langage est-il une invention culturelle et artificielle ?",
racine1: "L'homme est-il un animal parlant par essence ?",
racine2: "ou le langage est-il une technique acquise qui s'ajoute à la nature ?",
enjeu: "Déterminer le statut naturel ou culturel du langage."
},
{
id: 711,
notion: 'langage',
intitule: "Le langage distingue-t-il l'homme de l'animal ?",
piste1: "La parole est-elle le propre de l'homme, le séparant radicalement de la bête ?",
piste2: "ou la communication animale est-elle une forme de langage à part entière ?",
racine1: "Le langage suppose-t-il la conscience de soi et l'universalité des concepts ?",
racine2: "ou la continuité évolutive interdit-elle une rupture absolue ?",
enjeu: "Examiner la spécificité anthropologique du langage."
},
{
id: 712,
notion: 'langage',
intitule: "Les animaux ont-ils un langage ?",
piste1: "Les signaux et cris des animaux constituent-ils un système de signes organisé ?",
piste2: "ou manquent-ils de la double articulation et de la créativité du langage humain ?",
racine1: "La communication est-elle suffisante pour définir le langage ?",
racine2: "ou le langage exige-t-il la possibilité de parler de ce qui n'est pas là ?",
enjeu: "Définir les critères qui séparent le signal animal du signe humain."
},
{
id: 713,
notion: 'langage',
intitule: "Le langage est-il un système de signes ?",
piste1: "Le langage fonctionne-t-il comme un code où chaque élément renvoie à un autre ?",
piste2: "ou le langage est-il d'abord une expression vivante et incarnée ?",
racine1: "La valeur d'un mot vient-elle de sa place dans le système et non de lui-même ?",
racine2: "ou le langage excède-t-il toute formalisation systématique ?",
enjeu: "Évaluer le modèle structuraliste du langage."
},
{
id: 714,
notion: 'langage',
intitule: "Le signe linguistique est-il arbitraire ?",
piste1: "N'y a-t-il aucune raison naturelle pour qu'un mot désigne une chose plutôt qu'une autre ?",
piste2: "ou certaines langues conservent-elles une motivation naturelle des mots ?",
racine1: "L'arbitraire du signe est-il le principe fondamental de toute langue ?",
racine2: "ou l'onomatopée et le symbolisme sonore remettent-ils en cause cet arbitraire ?",
enjeu: "Déterminer le degré de motivation du signe linguistique."
},
{
id: 715,
notion: 'langage',
intitule: "Le langage sert-il à communiquer ?",
piste1: "La fonction première du langage est-elle la transmission d'informations ?",
piste2: "ou a-t-il d'autres fonctions (expressive, poétique, performative) tout aussi essentielles ?",
racine1: "Parler, est-ce avant tout faire passer un message à autrui ?",
racine2: "ou le langage sert-il aussi à se construire soi-même ?",
enjeu: "Hiérarchiser ou pluraliser les fonctions du langage."
},
{
id: 716,
notion: 'langage',
intitule: "Communiquer est-il la fonction première du langage ?",
piste1: "Le langage a-t-il été inventé pour la coopération sociale ?",
piste2: "ou est-il d'abord l'expression de l'intériorité du sujet ?",
racine1: "Le sens d'un mot est-il son usage dans la communication ?",
racine2: "ou le langage est-il d'abord un monologue intérieur ?",
enjeu: "Déterminer la finalité originaire du langage."
},
{
id: 717,
notion: 'langage',
intitule: "Le langage peut-il être un obstacle à la communication ?",
piste1: "Les mots, par leur ambiguïté, empêchent-ils souvent de se comprendre ?",
piste2: "ou sans le langage, toute communication serait-elle impossible ?",
racine1: "Le langage est-il un pont ou un mur entre les consciences ?",
racine2: "ou les malentendus viennent-ils d'un mauvais usage du langage, et non du langage lui-même ?",
enjeu: "Examiner les limites du langage comme medium de la communication."
},
{
id: 718,
notion: 'langage',
intitule: "Le silence est-il une forme de langage ?",
piste1: "Se taire, est-ce encore dire quelque chose ?",
piste2: "ou le silence est-il l'absence pure et simple de langage ?",
racine1: "Le silence a-t-il une signification qui dépend du contexte ?",
racine2: "ou le langage se définit-il précisément par l'émission de signes ?",
enjeu: "Déterminer si le silence fait partie intégrante du système linguistique."
},
{
id: 719,
notion: 'langage',
intitule: "Le langage dit-il le réel ?",
piste1: "Les mots parviennent-ils à saisir et à décrire le monde tel qu'il est ?",
piste2: "ou le langage ne nous donne-t-il accès qu'à une reconstruction du réel ?",
racine1: "Le langage est-il un miroir fidèle de la réalité ?",
racine2: "ou est-il un prisme qui déforme ce qu'il prétend montrer ?",
enjeu: "Interroger la capacité référentielle du langage."
},
{
id: 720,
notion: 'langage',
intitule: "Les mots sont-ils des étiquettes collées sur les choses ?",
piste1: "Le langage consiste-t-il à nommer des objets préexistants ?",
piste2: "ou le langage participe-t-il à la constitution des objets en tant que tels ?",
racine1: "Les choses existent-elles indépendamment des noms qu'on leur donne ?",
racine2: "ou n'y a-t-il de monde organisé que celui qui est découpé par le langage ?",
enjeu: "Dépasser la conception nominaliste du langage."
},
{
id: 721,
notion: 'langage',
intitule: "Le langage crée-t-il le réel ?",
piste1: "En nommant les choses, le langage leur donne-t-il une existence sociale ou symbolique ?",
piste2: "ou le langage se contente-t-il de décrire un réel qui lui préexiste ?",
racine1: "La parole a-t-elle un pouvoir ontologique de création ?",
racine2: "ou le langage est-il impuissant à modifier l'être des choses ?",
enjeu: "Examiner la portée créatrice ou performative du langage."
},
{
id: 722,
notion: 'langage',
intitule: "Nommer, est-ce faire exister ?",
piste1: "L'acte de donner un nom confère-t-il une identité et une existence à la chose ?",
piste2: "ou le nom n'est-il qu'un repère commode pour désigner ce qui est déjà là ?",
racine1: "L'absence de mot pour une chose équivaut-elle à son invisibilité sociale ?",
racine2: "ou l'être précède-t-il toujours le nom ?",
enjeu: "Déterminer le lien entre nomination et existence."
},
{
id: 723,
notion: 'langage',
intitule: "Le langage est-il un pouvoir ?",
piste1: "Maîtriser le langage, est-ce détenir une forme d'autorité sur autrui ?",
piste2: "ou le langage est-il un espace de partage égalitaire ?",
racine1: "La rhétorique et l'éloquence sont-elles des instruments de domination ?",
racine2: "ou le langage est-il ce qui permet de contester le pouvoir ?",
enjeu: "Analyser la dimension politique et hiérarchique du langage."
},
{
id: 724,
notion: 'langage',
intitule: "La parole est-elle une action ?",
piste1: "Parler, est-ce faire quelque chose dans le monde (promettre, ordonner, juger) ?",
piste2: "ou la parole est-elle distincte de l'action, relevant seulement du discours ?",
racine1: "Les énoncés performatifs montrent-ils que dire, c'est faire ?",
racine2: "ou l'action véritable exige-t-elle un geste au-delà des mots ?",
enjeu: "Examiner la théorie des actes de langage."
},
{
id: 725,
notion: 'langage',
intitule: "Le langage peut-il être une violence ?",
piste1: "Les mots peuvent-ils blesser, humilier ou exclure autant que des coups ?",
piste2: "ou la violence est-elle par définition physique, le langage restant du côté du dialogue ?",
racine1: "L'insulte ou le harcèlement verbal constituent-ils une violence réelle ?",
racine2: "ou le langage est-il précisément ce qui permet d'éviter la violence physique ?",
enjeu: "Évaluer la capacité du langage à nuire."
},
{
id: 726,
notion: 'langage',
intitule: "Le langage est-il un instrument de domination ?",
piste1: "La langue imposée par un groupe social sert-elle à maintenir sa supériorité ?",
piste2: "ou le langage appartient-il à tous et peut-il être détourné par les dominés ?",
racine1: "Les normes linguistiques sont-elles des normes sociales déguisées ?",
racine2: "ou la compétence langagière est-elle indépendante des rapports de classe ?",
enjeu: "Interroger la sociologie critique du langage."
},
{
id: 727,
notion: 'langage',
intitule: "Le langage libère-t-il ?",
piste1: "Mettre des mots sur ses maux permet-il de s'en affranchir ?",
piste2: "ou le langage nous enferme-t-il dans des catégories aliénantes ?",
racine1: "La prise de parole est-elle une condition de l'émancipation ?",
racine2: "ou la liberté consiste-t-elle à se taire pour échapper aux discours imposés ?",
enjeu: "Déterminer la valeur libératrice de la parole."
},
{
id: 728,
notion: 'langage',
intitule: "Le langage est-il une prison ?",
piste1: "Sommes-nous condamnés à penser dans les limites de notre langue ?",
piste2: "ou le langage est-il un outil que nous pouvons modeler à notre guise ?",
racine1: "Le déterminisme linguistique est-il une fatalité ?",
racine2: "ou la créativité langagière permet-elle de repousser sans cesse les murs de la prison ?",
enjeu: "Examiner la thèse de l'enfermement dans le langage."
},
{
id: 729,
notion: 'langage',
intitule: "Le langage est-il universel ?",
piste1: "Tous les êtres humains possèdent-ils la même faculté de langage ?",
piste2: "ou le langage est-il toujours particulier, incarné dans une langue historique ?",
racine1: "Existe-t-il une grammaire universelle sous-jacente à toutes les langues ?",
racine2: "ou l'incommensurabilité des langues interdit-elle toute universalité ?",
enjeu: "Déterminer l'universalité de la faculté de langage."
},
{
id: 730,
notion: 'langage',
intitule: "La diversité des langues est-elle un obstacle à l'universalité ?",
piste1: "La multiplicité des langues empêche-t-elle la compréhension mutuelle et l'unité humaine ?",
piste2: "ou cette diversité est-elle une richesse qui exprime la pluralité des cultures ?",
racine1: "Faut-il rêver d'une langue unique pour réaliser l'universalité ?",
racine2: "ou l'universel se construit-il précisément dans la traduction entre les langues ?",
enjeu: "Évaluer la valeur de la diversité linguistique."
},
{
id: 731,
notion: 'langage',
intitule: "Peut-on tout traduire ?",
piste1: "Tout énoncé dans une langue peut-il trouver un équivalent exact dans une autre ?",
piste2: "ou existe-t-il des intraduisibles qui résistent à tout passage d'une langue à l'autre ?",
racine1: "Le sens est-il indépendant de la langue dans laquelle il est exprimé ?",
racine2: "ou la forme linguistique est-elle inséparable du contenu ?",
enjeu: "Interroger les limites de la traduction."
},
{
id: 732,
notion: 'langage',
intitule: "La traduction est-elle une trahison ?",
piste1: "Traduire, est-ce nécessairement déformer le sens original ?",
piste2: "ou la traduction est-elle une recréation fidèle qui donne une nouvelle vie au texte ?",
racine1: "La trahison est-elle inhérente à l'acte de traduire ?",
racine2: "ou la traduction est-elle la condition de possibilité de la communication universelle ?",
enjeu: "Déterminer la fidélité et l'infidélité dans la traduction."
},
{
id: 733,
notion: 'langage',
intitule: "Le langage est-il une règle ?",
piste1: "Parler une langue, est-ce appliquer un ensemble de règles grammaticales et syntaxiques ?",
piste2: "ou le langage est-il une pratique souple qui échappe à toute codification stricte ?",
racine1: "La grammaire décrit-elle ou prescrit-elle l'usage ?",
racine2: "ou les règles du langage émergent-elles de l'usage lui-même ?",
enjeu: "Examiner le rapport entre règle et usage dans le langage."
},
{
id: 734,
notion: 'langage',
intitule: "Parler, est-ce suivre des règles ?",
piste1: "La communication n'est-elle possible que parce que nous respectons des conventions implicites ?",
piste2: "ou la créativité du langage consiste-t-elle précisément à enfreindre les règles ?",
racine1: "Un jeu de langage suppose-t-il des règles partagées ?",
racine2: "ou le langage vivant est-il une transgression continuelle des normes ?",
enjeu: "Déterminer le rôle des règles dans la pratique effective du langage."
},
{
id: 735,
notion: 'langage',
intitule: "Le langage est-il créateur ?",
piste1: "Le langage permet-il d'inventer des mondes, des concepts et des possibilités inédites ?",
piste2: "ou ne fait-il que combiner des éléments déjà donnés ?",
racine1: "La parole est-elle une production ex nihilo ?",
racine2: "ou le langage est-il un système fermé de combinaisons limitées ?",
enjeu: "Évaluer la puissance créatrice du langage."
},
{
id: 736,
notion: 'langage',
intitule: "La poésie est-elle un usage supérieur du langage ?",
piste1: "Le langage poétique réalise-t-il l'essence du langage en libérant les mots de leur fonction utilitaire ?",
piste2: "ou la poésie n'est-elle qu'un détournement marginal et décoratif du langage ?",
racine1: "Le langage ordinaire est-il un langage appauvri ?",
racine2: "ou la poésie est-elle un jeu formel sans portée ontologique ?",
enjeu: "Déterminer le statut du langage poétique par rapport au langage ordinaire."
},
{
id: 737,
notion: 'langage',
intitule: "Le langage poétique dit-il plus que le langage ordinaire ?",
piste1: "La poésie révèle-t-elle des vérités que le discours prosaïque ne peut atteindre ?",
piste2: "ou le langage poétique est-il volontairement obscur et évasif ?",
racine1: "Le poète est-il un voyant qui dit l'indicible ?",
racine2: "ou le langage poétique ne dit-il rien de plus que ce qu'il montre ?",
enjeu: "Examiner la valeur cognitive du langage poétique."
},
{
id: 738,
notion: 'langage',
intitule: "Le langage ordinaire est-il appauvri ?",
piste1: "L'usage quotidien des mots les use-t-il et les vide-t-il de leur sens ?",
piste2: "ou le langage ordinaire est-il suffisamment riche pour toutes nos besoins pratiques ?",
racine1: "Faut-il régénérer le langage pour retrouver une authenticité perdue ?",
racine2: "ou la banalité du langage est-elle la condition de son efficacité ?",
enjeu: "Évaluer la qualité du langage quotidien."
},
{
id: 739,
notion: 'langage',
intitule: "Le langage peut-il mentir ?",
piste1: "Le langage permet-il de dire ce qui n'est pas, et donc de tromper ?",
piste2: "ou le langage est-il par essence tourné vers la vérité ?",
racine1: "Le mensonge est-il un usage dévoyé du langage ?",
racine2: "ou la possibilité de mentir est-elle la preuve de la liberté du langage ?",
enjeu: "Déterminer le rapport entre langage et vérité."
},
{
id: 740,
notion: 'langage',
intitule: "Le mensonge est-il la preuve de la liberté du langage ?",
piste1: "Pouvoir dire le faux montre-t-il que l'homme n'est pas déterminé par le réel ?",
piste2: "ou le mensonge est-il une faiblesse qui nous asservit à l'illusion ?",
racine1: "Le langage permet-il de s'affranchir de l'ordre des choses ?",
racine2: "ou la liberté véritable est-elle dans l'adéquation de la parole au réel ?",
enjeu: "Examiner la valeur du mensonge comme marque de la liberté humaine."
},
{
id: 741,
notion: 'langage',
intitule: "Le langage dit-il la vérité ?",
piste1: "Le langage est-il le lieu où la vérité se manifeste et se communique ?",
piste2: "ou le langage est-il par nature trompeur et éloigné de l'être ?",
racine1: "La vérité a-t-elle besoin du langage pour advenir ?",
racine2: "ou le langage est-il un voile qui cache la vérité des choses ?",
enjeu: "Déterminer la capacité du langage à atteindre la vérité."
},
{
id: 742,
notion: 'langage',
intitule: "La vérité est-elle dans les mots ou dans les choses ?",
piste1: "La vérité est-elle une propriété des énoncés bien formés ?",
piste2: "ou est-elle une adéquation entre les mots et la réalité qu'ils désignent ?",
racine1: "La vérité est-elle une question de cohérence linguistique ?",
racine2: "ou la vérité est-elle une correspondance avec le réel ?",
enjeu: "Examiner les théories de la vérité (cohérence vs correspondance)."
},
{
id: 743,
notion: 'langage',
intitule: "Le langage est-il transparent ?",
piste1: "Les mots sont-ils des vitres à travers lesquelles nous voyons directement le monde ?",
piste2: "ou le langage a-t-il sa propre opacité qui retient l'attention sur lui-même ?",
racine1: "Le langage s'efface-t-il devant ce qu'il désigne ?",
racine2: "ou le langage fait-il obstacle à l'accès immédiat au réel ?",
enjeu: "Déterminer le degré de transparence du langage."
},
{
id: 744,
notion: 'langage',
intitule: "Le langage est-il opaque ?",
piste1: "Le langage nous renvoie-t-il sans cesse à lui-même, nous empêchant d'atteindre les choses ?",
piste2: "ou cette opacité est-elle précisément ce qui donne au langage sa consistance ?",
racine1: "Les mots ont-ils une épaisseur qui résiste à la signification pure ?",
racine2: "ou le langage est-il un moyen et non une fin ?",
enjeu: "Examiner l'opacité et la matérialité du langage."
},
{
id: 745,
notion: 'langage',
intitule: "Le langage a-t-il des limites ?",
piste1: "Y a-t-il des choses qui ne peuvent pas être dites ?",
piste2: "ou le langage peut-il s'étendre indéfiniment pour tout saisir ?",
racine1: "Les limites de mon langage sont-elles les limites de mon monde ?",
racine2: "ou le langage peut-il toujours reculer ses propres frontières ?",
enjeu: "Déterminer les bornes du pouvoir du langage."
},
{
id: 746,
notion: 'langage',
intitule: "Y a-t-il de l'indicible ?",
piste1: "Certaines expériences (mystiques, esthétiques, affectives) échappent-elles radicalement aux mots ?",
piste2: "ou l'indicible n'est-il que ce que nous n'avons pas encore trouvé les mots pour dire ?",
racine1: "Le langage est-il structurellement incapable de saisir l'absolu ou le vécu pur ?",
racine2: "ou l'indicible est-il un mythe qui masque les limites de notre vocabulaire ?",
enjeu: "Interroger l'existence d'un au-delà du langage."
},
{
id: 747,
notion: 'langage',
intitule: "Le silence est-il plus éloquent que les mots ?",
piste1: "Le silence peut-il exprimer ce que les mots trahissent ou appauvrissent ?",
piste2: "ou le silence est-il un vide de sens que seul le langage peut combler ?",
racine1: "Le silence est-il la forme la plus haute de l'expression ?",
racine2: "ou le silence n'a-t-il de sens que par contraste avec le langage ?",
enjeu: "Comparer la puissance expressive du silence et du langage."
},
{
id: 748,
notion: 'langage',
intitule: "Le langage est-il une représentation ?",
piste1: "Le langage fonctionne-t-il en remplaçant les choses par des signes qui les figurent ?",
piste2: "ou le langage est-il une présence qui fait advenir ce dont il parle ?",
racine1: "Le mot est-il une image de la chose ?",
racine2: "ou le langage est-il une action qui transforme le réel ?",
enjeu: "Déterminer si le langage représente ou performe."
},
{
id: 749,
notion: 'langage',
intitule: "Le langage est-il une performance ?",
piste1: "Parler, est-ce accomplir un acte (promettre, marier, condamner) par la force de la convention ?",
piste2: "ou le langage descriptif est-il le modèle de tout énoncé ?",
racine1: "Les énoncés performatifs montrent-ils l'essence du langage ?",
racine2: "ou la performance n'est-elle qu'un cas particulier et marginal du langage ?",
enjeu: "Examiner la dimension performative du langage."
},
{
id: 750,
notion: 'langage',
intitule: "Parler, est-ce agir ?",
piste1: "La parole est-elle une forme d'action qui modifie le monde et les relations entre les hommes ?",
piste2: "ou l'action se définit-elle par opposition aux vaines paroles ?",
racine1: "Les mots ont-ils des effets réels comparables à ceux des gestes ?",
racine2: "ou l'action véritable exige-t-elle de dépasser le stade du discours ?",
enjeu: "Déterminer le statut de la parole comme action."
},
{
id: 751,
notion: 'langage',
intitule: "Le langage est-il un jeu ?",
piste1: "Parler, est-ce participer à des jeux de langage régis par des règles sociales ?",
piste2: "ou le langage est-il trop sérieux et engagé pour être réduit à un jeu ?",
racine1: "Le sens d'un mot est-il son usage dans un jeu de langage ?",
racine2: "ou le langage a-t-il des enjeux de vérité qui dépassent le simple jeu ?",
enjeu: "Examiner le modèle du jeu pour comprendre le langage."
},
{
id: 752,
notion: 'langage',
intitule: "Le langage est-il appris ou inné ?",
piste1: "La faculté de langage est-elle un don de la nature avec lequel nous naissons ?",
piste2: "ou le langage est-il entièrement acquis par l'immersion dans un milieu social ?",
racine1: "L'enfant possède-t-il une grammaire universelle innée ?",
racine2: "ou le langage est-il une pure construction culturelle ?",
enjeu: "Déterminer l'origine innée ou acquise du langage."
},
{
id: 753,
notion: 'langage',
intitule: "L'enfant apprend-il le langage ou l'acquiert-il ?",
piste1: "L'acquisition du langage est-elle un processus spontané et naturel ?",
piste2: "ou exige-t-il un enseignement explicite et des efforts conscients ?",
racine1: "Le langage se développe-t-il comme une fonction biologique ?",
racine2: "ou l'apprentissage du langage est-il un effort culturel ?",
enjeu: "Distinguer acquisition naturelle et apprentissage culturel."
},
{
id: 754,
notion: 'langage',
intitule: "Le langage est-il social ?",
piste1: "Le langage n'existe-t-il que comme fait de communauté, partagé entre plusieurs individus ?",
piste2: "ou existe-t-il un langage intérieur, purement individuel et privé ?",
racine1: "Une langue est-elle un contrat social tacite ?",
racine2: "ou le sujet peut-il créer son propre langage en dehors de tout lien social ?",
enjeu: "Déterminer la dimension sociale constitutive du langage."
},
{
id: 755,
notion: 'langage',
intitule: "Une langue privée est-elle possible ?",
piste1: "Un individu pourrait-il inventer et utiliser des mots dont lui seul connaîtrait le sens ?",
piste2: "ou le langage exige-t-il nécessairement des critères publics de correction ?",
racine1: "Le sens d'un mot peut-il être défini par une ostension purement intérieure ?",
racine2: "ou l'absence de contrôle extérieur rend-elle la notion même de sens impossible ?",
enjeu: "Examiner l'argument du langage privé."
},
{
id: 756,
notion: 'langage',
intitule: "Le langage est-il un fait social ?",
piste1: "La langue est-elle une institution sociale qui s'impose à l'individu ?",
piste2: "ou le langage est-il d'abord une création individuelle ?",
racine1: "L'individu est-il impuissant à modifier la langue de sa communauté ?",
racine2: "ou la langue évolue-t-elle par les innovations de ses locuteurs ?",
enjeu: "Déterminer le rapport entre le fait social de la langue et l'usage individuel."
},
{
id: 757,
notion: 'langage',
intitule: "Le langage reflète-t-il la société ?",
piste1: "La structure d'une langue et son vocabulaire sont-ils le miroir de l'organisation sociale ?",
piste2: "ou le langage est-il autonome par rapport aux structures sociales ?",
racine1: "Les changements sociaux se traduisent-ils automatiquement par des changements linguistiques ?",
racine2: "ou le langage a-t-il sa propre histoire, indépendante de celle de la société ?",
enjeu: "Examiner le lien entre langage et structure sociale."
},
{
id: 758,
notion: 'langage',
intitule: "Le langage façonne-t-il la société ?",
piste1: "Les catégories linguistiques déterminent-elles l'organisation sociale et les mentalités ?",
piste2: "ou la société façonne-t-elle le langage qui lui convient ?",
racine1: "Le langage est-il un moteur du changement social ?",
racine2: "ou le langage n'est-il qu'un reflet passif des évolutions sociales ?",
enjeu: "Déterminer le sens de la causalité entre langage et société."
},
{
id: 759,
notion: 'langage',
intitule: "Le langage est-il neutre ?",
piste1: "Les mots sont-ils des outils objectifs, dépourvus de toute charge idéologique ?",
piste2: "ou le langage est-il toujours porteur de valeurs et de préjugés ?",
racine1: "Peut-on utiliser le langage sans être influencé par son histoire et ses usages ?",
racine2: "ou la neutralité du langage est-elle une illusion ?",
enjeu: "Interroger la prétendue neutralité du langage."
},
{
id: 760,
notion: 'langage',
intitule: "Le langage est-il porteur de préjugés ?",
piste1: "La langue véhicule-t-elle des stéréotypes (de genre, de race, de classe) qu'il faut dénoncer ?",
piste2: "ou le langage est-il un instrument innocent, seul l'usage qui en est fait étant préjugé ?",
racine1: "La structure même de la langue peut-elle être oppressive ?",
racine2: "ou la langue est-elle malléable et capable de s'adapter à des usages égalitaires ?",
enjeu: "Examiner la charge idéologique du langage."
},
{
id: 761,
notion: 'langage',
intitule: "Le langage inclusif est-il une nécessité ?",
piste1: "Modifier la langue est-il nécessaire pour rendre visibles et égaux tous les groupes sociaux ?",
piste2: "ou est-ce une contrainte artificielle qui appauvrit et alourdit la langue ?",
racine1: "La langue doit-elle être le reflet des évolutions sociales en matière d'égalité ?",
racine2: "ou la langue a-t-elle des règles internes qu'il ne faut pas briser pour des motifs politiques ?",
enjeu: "Débattre de la réforme du langage à des fins d'inclusion."
},
{
id: 762,
notion: 'langage',
intitule: "Le langage évolue-t-il ?",
piste1: "La langue est-elle un système vivant qui se transforme continuellement ?",
piste2: "ou existe-t-il un état pur et stable de la langue qu'il faut préserver ?",
racine1: "L'évolution du langage est-elle un signe de vitalité ou de décadence ?",
racine2: "ou la langue est-elle par nature historique et changeante ?",
enjeu: "Déterminer le caractère dynamique ou statique du langage."
},
{
id: 763,
notion: 'langage',
intitule: "Faut-il défendre la pureté de la langue ?",
piste1: "Doit-on lutter contre les emprunts étrangers et les néologismes pour protéger la langue ?",
piste2: "ou la langue s'enrichit-elle précisément par ces apports extérieurs ?",
racine1: "Une langue pure est-elle une langue vivante ou une langue morte ?",
racine2: "ou la défense de la langue est-elle une question de souveraineté culturelle ?",
enjeu: "Examiner le purisme linguistique."
},
{
id: 764,
notion: 'langage',
intitule: "Le langage est-il un outil ?",
piste1: "Le langage est-il un instrument technique que l'homme utilise pour atteindre ses fins ?",
piste2: "ou le langage est-il le milieu dans lequel l'homme existe, et non un simple outil ?",
racine1: "Peut-on séparer l'outil de celui qui l'utilise ?",
racine2: "ou l'homme est-il l'être dont l'essence est d'être dans le langage ?",
enjeu: "Dépasser l'instrumentalisation du langage."
},
{
id: 765,
notion: 'langage',
intitule: "Le langage est-il une fin en soi ?",
piste1: "Le langage a-t-il sa valeur en lui-même, indépendamment de ce qu'il permet de faire ou de dire ?",
piste2: "ou le langage n'a-t-il de valeur que comme moyen de communication ou d'action ?",
racine1: "Le plaisir des mots suffit-il à justifier leur usage ?",
racine2: "ou le langage est-il toujours tourné vers une extériorité ?",
enjeu: "Déterminer si le langage a une valeur intrinsèque."
},
{
id: 766,
notion: 'langage',
intitule: "Le langage est-il une technique ?",
piste1: "Le langage est-il un ensemble de procédés et de règles que l'on peut maîtriser et perfectionner ?",
piste2: "ou le langage échappe-t-il à toute technicisation par sa dimension vivante et créatrice ?",
racine1: "L'éloquence et la grammaire sont-elles des techniques ?",
racine2: "ou le langage est-il antérieur à toute technique ?",
enjeu: "Examiner le statut technique du langage."
},
{
id: 767,
notion: 'langage',
intitule: "L'écriture est-elle supérieure à la parole ?",
piste1: "L'écriture permet-elle de fixer la pensée et de la transmettre au-delà de la présence immédiate ?",
piste2: "ou l'écriture est-elle une dégradation de la vivacité et de la vérité de la parole ?",
racine1: "L'écriture est-elle le complément nécessaire de la parole ?",
racine2: "ou l'écriture est-elle un pharmakon, à la fois remède et poison pour la mémoire ?",
enjeu: "Comparer la valeur de l'écriture et de la parole."
},
{
id: 768,
notion: 'langage',
intitule: "L'écriture trahit-elle la parole ?",
piste1: "En fixant les mots, l'écriture ne fige-t-elle pas un sens qui était vivant et mouvant dans la parole ?",
piste2: "ou l'écriture est-elle la condition de survie de la parole ?",
racine1: "L'absence de l'interlocuteur et de l'intonation appauvrit-elle le message ?",
racine2: "ou l'écriture libère-t-elle le texte de la présence contraignante de l'auteur ?",
enjeu: "Examiner la critique de l'écriture comme trahison."
},
{
id: 769,
notion: 'langage',
intitule: "Le langage écrit fixe-t-il la pensée ?",
piste1: "L'écriture permet-elle de stabiliser et d'objectiver la pensée pour l'examiner ?",
piste2: "ou la rigidité de l'écrit empêche-t-elle la pensée de suivre son mouvement naturel ?",
racine1: "La pensée a-t-elle besoin de l'écrit pour devenir rigoureuse ?",
racine2: "ou la pensée est-elle un flux que l'écrit trahit en l'immobilisant ?",
enjeu: "Déterminer l'effet de l'écriture sur la pensée."
},
{
id: 770,
notion: 'langage',
intitule: "Le langage est-il une mémoire ?",
piste1: "La langue conserve-t-elle la trace des expériences et de l'histoire d'un peuple ?",
piste2: "ou le langage est-il toujours tourné vers le présent de la communication ?",
racine1: "Les mots sont-ils des sédiments de l'histoire ?",
racine2: "ou le langage est-il un système synchronique qui efface son histoire ?",
enjeu: "Examiner la fonction mémorielle du langage."
},
{
id: 771,
notion: 'langage',
intitule: "Le langage est-il un oubli ?",
piste1: "En nommant une chose, ne la réduit-on pas à un concept, oubliant sa richesse singulière ?",
piste2: "ou le langage est-il ce qui sauve la chose de l'oubli en la nommant ?",
racine1: "Le concept tue-t-il l'intuition singulière ?",
racine2: "ou sans le mot, la chose tomberait-elle dans l'oubli total ?",
enjeu: "Déterminer si le langage sauve ou efface le réel."
},
{
id: 772,
notion: 'langage',
intitule: "Le langage est-il une image du monde ?",
piste1: "La structure du langage reflète-t-elle la structure de la réalité ?",
piste2: "ou le langage projette-t-il sur le monde une grille de lecture qui lui est propre ?",
racine1: "Le langage est-il un tableau ou une carte du réel ?",
racine2: "ou le langage est-il un prisme qui déforme le réel ?",
enjeu: "Examiner le rapport entre structure linguistique et structure du monde."
},
{
id: 773,
notion: 'langage',
intitule: "Le langage est-il un calcul ?",
piste1: "Penser et parler, est-ce effectuer des opérations logiques sur des symboles ?",
piste2: "ou le langage échappe-t-il à toute formalisation mathématique ?",
racine1: "Le langage idéal devrait-il être une langue formelle sans ambiguïté ?",
racine2: "ou l'ambiguïté et la richesse du langage naturel sont-elles irréductibles ?",
enjeu: "Déterminer les limites du modèle computationnel du langage."
},
{
id: 774,
notion: 'langage',
intitule: "Le langage artificiel est-il un vrai langage ?",
piste1: "Les langages formels (logiques, mathématiques) méritent-ils le nom de langage ?",
piste2: "ou le langage est-il par essence naturel et humain ?",
racine1: "Un langage sans locuteurs humains et sans contexte social est-il possible ?",
racine2: "ou la rigueur des langages artificiels en fait-ils la forme la plus pure du langage ?",
enjeu: "Examiner le statut des langages artificiels."
},
{
id: 775,
notion: 'langage',
intitule: "Le langage informatique est-il un langage ?",
piste1: "Le code informatique est-il une forme de langage permettant de communiquer avec la machine ?",
piste2: "ou manque-t-il de la dimension de sens et d'intention propre au langage humain ?",
racine1: "La communication homme-machine est-elle analogue à la communication humaine ?",
racine2: "ou le langage informatique n'est-il qu'un ensemble d'instructions dépourvu de sens ?",
enjeu: "Déterminer si le code informatique relève du langage."
},
{
id: 776,
notion: 'langage',
intitule: "Le langage est-il un don ?",
piste1: "La faculté de langage est-elle un don de la nature ou de Dieu, que nous recevons passivement ?",
piste2: "ou le langage est-il une conquête active de l'humanité sur le silence ?",
racine1: "Le langage est-il une grâce qui nous est faite ?",
racine2: "ou le langage est-il le fruit d'un effort et d'une invention ?",
enjeu: "Déterminer l'origine du langage : don ou conquête."
},
{
id: 777,
notion: 'langage',
intitule: "Le langage est-il une conquête ?",
piste1: "L'humanité a-t-elle dû arracher le langage au silence par un effort culturel ?",
piste2: "ou le langage est-il une donnée naturelle qui s'épanouit spontanément ?",
racine1: "Le langage est-il le résultat d'une évolution ou d'une révolution ?",
racine2: "ou la faculté de langage est-elle inscrite dans nos gènes ?",
enjeu: "Examiner le caractère acquis ou inné de la maîtrise du langage."
},
{
id: 778,
notion: 'langage',
intitule: "Le bégaiement ou le mutisme révèlent-ils quelque chose du langage ?",
piste1: "Les troubles de la parole nous font-ils toucher les limites et la fragilité du langage ?",
piste2: "ou ne sont-ils que des accidents pathologiques sans portée philosophique ?",
racine1: "La difficulté à parler révèle-t-elle l'effort et la violence inhérents à l'acte de parole ?",
racine2: "ou le langage normal est-il transparent et sans histoire ?",
enjeu: "Interroger la pathologie comme révélateur de l'essence du langage."
},
{
id: 779,
notion: 'langage',
intitule: "Le langage est-il corporel ?",
piste1: "La parole est-elle un acte physique qui engage la voix, le souffle et le corps entier ?",
piste2: "ou le langage est-il une réalité spirituelle et immatérielle ?",
racine1: "Peut-on penser le langage sans faire référence à son incarnation corporelle ?",
racine2: "ou le sens est-il indépendant du support physique qui le véhicule ?",
enjeu: "Déterminer la dimension corporelle du langage."
},
{
id: 780,
notion: 'langage',
intitule: "La voix est-elle essentielle au langage ?",
piste1: "Le langage trouve-t-il son accomplissement et sa vérité dans la voix parlante ?",
piste2: "ou la voix n'est-elle qu'un support contingent, l'essentiel étant le sens ?",
racine1: "La présence de la voix garantit-elle la présence du sens et du sujet ?",
racine2: "ou le langage peut-il se passer de la voix (écriture, langue des signes) ?",
enjeu: "Examiner le privilège de la voix dans la tradition philosophique."
},
{
id: 781,
notion: 'langage',
intitule: "Le langage est-il rationnel ?",
piste1: "Le langage est-il structuré par la logique et la raison ?",
piste2: "ou est-il traversé par des forces irrationnelles (passions, affects, inconscient) ?",
racine1: "La grammaire est-elle la logique du langage ?",
racine2: "ou le langage est-il d'abord expression des pulsions et des émotions ?",
enjeu: "Déterminer la part de la rationalité dans le langage."
},
{
id: 782,
notion: 'langage',
intitule: "Le langage est-il passionnel ?",
piste1: "Le langage est-il d'abord l'expression des affects et des désirs du sujet ?",
piste2: "ou le langage doit-il se libérer des passions pour atteindre à l'objectivité ?",
racine1: "L'émotion est-elle la source première de la parole ?",
racine2: "ou le langage véritable est-il celui qui maîtrise et dépasse la passion ?",
enjeu: "Examiner la dimension affective du langage."
},
{
id: 783,
notion: 'langage',
intitule: "Le langage exprime-t-il les émotions ?",
piste1: "Les mots parviennent-ils à traduire fidèlement ce que nous ressentons ?",
piste2: "ou les émotions sont-elles par nature indicibles et muettes ?",
racine1: "Le langage des émotions est-il universel ou culturel ?",
racine2: "ou l'expression des émotions relève-t-elle d'autres canaux que le langage (geste, cri) ?",
enjeu: "Déterminer la capacité du langage à exprimer l'affectivité."
},
{
id: 784,
notion: 'langage',
intitule: "Le langage est-il une convention sociale ?",
piste1: "Les règles du langage sont-elles le produit d'un accord tacite entre les membres d'une communauté ?",
piste2: "ou le langage est-il fondé sur des lois naturelles et nécessaires ?",
racine1: "Pourquoi appelle-t-on un chien 'chien' ? Par convention ou par nature ?",
racine2: "ou la convention est-elle la seule base possible de tout langage ?",
enjeu: "Examiner le fondement conventionnel du langage."
},
{
id: 785,
notion: 'langage',
intitule: "Le langage est-il un contrat ?",
piste1: "Parler, est-ce accepter implicitement un contrat de communication avec autrui ?",
piste2: "ou le langage précède-t-il tout contrat, étant la condition de possibilité de tout accord ?",
racine1: "Le langage suppose-t-il un engagement de dire la vérité ?",
racine2: "ou le langage est-il antérieur à toute notion de contrat ?",
enjeu: "Déterminer si le modèle du contrat s'applique au langage."
},
{
id: 786,
notion: 'langage',
intitule: "Le langage est-il un don de Dieu ?",
piste1: "L'origine du langage est-elle divine, l'homme ayant reçu les mots avec les choses ?",
piste2: "ou le langage est-il une invention purement humaine ?",
racine1: "La théorie de l'origine divine du langage est-elle philosophiquement tenable ?",
racine2: "ou l'homme est-il le seul créateur de son langage ?",
enjeu: "Examiner l'hypothèse de l'origine divine du langage."
},
{
id: 787,
notion: 'langage',
intitule: "Le langage est-il une invention humaine ?",
piste1: "Les hommes ont-ils inventé le langage pour répondre à leurs besoins de communication ?",
piste2: "ou le langage est-il une structure qui s'est imposée à eux ?",
racine1: "Le langage est-il un outil fabriqué comme les autres ?",
racine2: "ou le langage est-il la condition de toute invention, y compris la sienne propre ?",
enjeu: "Déterminer le caractère inventé ou découvert du langage."
},
{
id: 788,
notion: 'langage',
intitule: "Le langage est-il une nécessité ?",
piste1: "L'homme peut-il être conçu comme un être de langage par nécessité absolue ?",
piste2: "ou le langage est-il un luxe ou un accident de l'évolution ?",
racine1: "L'humanité est-elle impensable sans le langage ?",
racine2: "ou l'homme pourrait-il exister et vivre sans langage ?",
enjeu: "Déterminer le caractère nécessaire du langage pour l'existence humaine."
},
{
id: 789,
notion: 'langage',
intitule: "Peut-on vivre sans langage ?",
piste1: "Une vie humaine est-elle possible en l'absence totale de langage ?",
piste2: "ou le langage est-il la condition sine qua non de la vie humaine ?",
racine1: "Les enfants sauvages sans langage mènent-ils une vie humaine ?",
racine2: "ou la vie sans langage est-elle une vie purement biologique, privée d'humanité ?",
enjeu: "Examiner la nécessité du langage pour la vie humaine."
},
{
id: 790,
notion: 'langage',
intitule: "Le langage est-il ce qui nous humanise ?",
piste1: "L'entrée dans le langage est-elle ce qui fait de l'animal humain un sujet humain ?",
piste2: "ou l'humanité se définit-elle par d'autres traits (outils, sociabilité, morale) ?",
racine1: "Le langage est-il le propre de l'homme au sens strict ?",
racine2: "ou l'humanité précède-t-elle le langage ?",
enjeu: "Déterminer le rôle du langage dans l'hominisation."
},
{
id: 791,
notion: 'langage',
intitule: "Le langage est-il une barrière entre les consciences ?",
piste1: "Les mots, en généralisant, trahissent-ils la singularité de l'expérience de chacun ?",
piste2: "ou le langage est-il le seul pont possible entre les subjectivités ?",
racine1: "Le langage nous enferme-t-il dans le solipsisme ?",
racine2: "ou le langage est-il la condition de l'intersubjectivité ?",
enjeu: "Examiner le langage comme obstacle ou comme lien entre les consciences."
},
{
id: 792,
notion: 'langage',
intitule: "Le langage permet-il la rencontre d'autrui ?",
piste1: "La parole est-elle le lieu privilégié où je reconnais autrui comme un autre moi-même ?",
piste2: "ou le langage est-il un moyen de manipulation et de domination d'autrui ?",
racine1: "Le dialogue est-il la forme authentique de la rencontre ?",
racine2: "ou le langage objectivise-t-il autrui en le réduisant à un interlocuteur ?",
enjeu: "Déterminer la valeur du langage pour la relation à autrui."
},
{
id: 793,
notion: 'langage',
intitule: "Le langage est-il un malentendu permanent ?",
piste1: "Comprendre, est-ce toujours mal comprendre, car chacun projette son propre sens dans les mots ?",
piste2: "ou la communication réussie est-elle la norme, le malentendu n'étant qu'une exception ?",
racine1: "L'ambiguïté du langage rend-elle tout accord véritable impossible ?",
racine2: "ou le langage contient-il les ressources pour corriger ses propres malentendus ?",
enjeu: "Examiner la thèse de l'incommunicabilité fondamentale."
},
{
id: 794,
notion: 'langage',
intitule: "Le langage est-il une clarification ?",
piste1: "Mettre en mots, est-ce rendre clair et distinct ce qui était confus ?",
piste2: "ou le langage complique-t-il les choses en ajoutant ses propres obscurités ?",
racine1: "La parole a-t-elle une vertu thérapeutique de clarification ?",
racine2: "ou le langage est-il une source de confusion et d'illusion ?",
enjeu: "Déterminer la capacité du langage à clarifier la pensée et le réel."
},
{
id: 795,
notion: 'langage',
intitule: "Le langage est-il un voile ?",
piste1: "Le langage nous cache-t-il la réalité des choses en nous donnant des mots à la place ?",
piste2: "ou le langage est-il ce qui dévoile le monde en le portant à la lumière ?",
racine1: "Les mots sont-ils des écrans qui nous séparent du réel ?",
racine2: "ou sans le langage, le monde resterait-il muet et invisible ?",
enjeu: "Examiner la métaphore du langage comme voile ou comme dévoilement."
},
{
id: 796,
notion: 'langage',
intitule: "Le langage est-il une lumière ?",
piste1: "Le langage éclaire-t-il le monde en le nommant et en le structurant ?",
piste2: "ou projette-t-il une lumière artificielle qui déforme les choses ?",
racine1: "Le langage est-il la condition de l'apparaître des choses ?",
racine2: "ou le langage est-il une illusion qui nous aveugle sur le réel ?",
enjeu: "Déterminer la valeur heuristique du langage."
},
{
id: 797,
notion: 'langage',
intitule: "Le langage est-il une force ?",
piste1: "Le langage possède-t-il une puissance d'agir et de transformer le monde ?",
piste2: "ou le langage est-il impuissant face à la force des choses et des actes ?",
racine1: "La parole est-elle une force spirituelle capable de rivaliser avec la violence physique ?",
racine2: "ou les mots ne sont-ils que du vent face à la réalité des faits ?",
enjeu: "Évaluer la puissance effective du langage."
},
{
id: 798,
notion: 'langage',
intitule: "Le langage est-il une faiblesse ?",
piste1: "Le recours aux mots ne témoigne-t-il pas d'une incapacité à agir directement sur le réel ?",
piste2: "ou le langage est-il la force suprême de l'homme, qui lui permet de ne pas subir le réel ?",
racine1: "Parler, est-ce avouer son impuissance à faire ?",
racine2: "ou le langage est-il la condition de toute action humaine digne de ce nom ?",
enjeu: "Examiner le langage comme signe de force ou de faiblesse."
},
{
id: 799,
notion: 'langage',
intitule: "Le langage est-il infini ?",
piste1: "La capacité de combiner des mots permet-elle de produire un nombre infini de phrases ?",
piste2: "ou le langage est-il limité par un vocabulaire et des règles finis ?",
racine1: "La créativité linguistique est-elle infinie ?",
racine2: "ou le langage est-il un système clos et dénombrable ?",
enjeu: "Déterminer l'étendue et les limites de la productivité du langage."
},
{
id: 800,
notion: 'langage',
intitule: "Le langage peut-il se définir ?",
piste1: "Peut-on donner une définition unique et universelle de ce qu'est le langage ?",
piste2: "ou le langage est-il un phénomène si complexe et pluriel qu'il échappe à toute définition ?",
racine1: "Le langage est-il un objet comme un autre, susceptible d'être défini ?",
racine2: "ou le langage est-il le milieu dans lequel toute définition doit avoir lieu, et donc indéfinissable ?",
enjeu: "Interroger la possibilité et les limites d'une définition du langage."
},
    {
id: 801,
notion: 'liberté',
intitule: "Qu'est-ce que la liberté ?",
piste1: "La liberté est-elle l'absence de toute contrainte et de tout obstacle ?",
piste2: "ou est-elle la capacité d'agir selon sa propre loi et ses propres valeurs ?",
racine1: "La liberté se définit-elle négativement comme une indépendance ?",
racine2: "ou positivement comme une autonomie et un pouvoir d'agir ?",
enjeu: "Établir une définition philosophique de la liberté au-delà du sens commun."
},
{
id: 802,
notion: 'liberté',
intitule: "La liberté est-elle l'absence de contrainte ?",
piste1: "Être libre, est-ce ne rencontrer aucun obstacle à ses désirs ?",
piste2: "ou la liberté peut-elle exister et même se renforcer face à la contrainte ?",
racine1: "La liberté se réduit-elle à la possibilité de faire tout ce qui nous plaît ?",
racine2: "ou la contrainte est-elle parfois la condition d'une liberté plus haute ?",
enjeu: "Distinguer la licence (faire tout ce que l'on veut) de la véritable liberté."
},
{
id: 803,
notion: 'liberté',
intitule: "La liberté est-elle un état naturel ?",
piste1: "L'homme naît-il libre et la société est-elle ce qui l'asservit ?",
piste2: "ou la liberté est-elle une conquête culturelle qui s'arrache à l'état de nature ?",
racine1: "La liberté est-elle une donnée immédiate de notre condition ?",
racine2: "ou est-elle le résultat d'un effort et d'une éducation ?",
enjeu: "Déterminer si la liberté est une origine ou une finalité."
},
{
id: 804,
notion: 'liberté',
intitule: "La liberté est-elle une illusion ?",
piste1: "Le sentiment de liberté n'est-il que l'ignorance des causes qui nous déterminent ?",
piste2: "ou la liberté est-elle une réalité que nous éprouvons et que nous exerçons ?",
racine1: "Sommes-nous libres ou croyons-nous seulement l'être ?",
racine2: "ou l'illusion de la liberté est-elle elle-même une preuve de notre liberté ?",
enjeu: "Examiner la thèse du déterminisme et son impact sur la notion de liberté."
},
{
id: 805,
notion: 'liberté',
intitule: "La liberté est-elle le propre de l'homme ?",
piste1: "Seul l'être humain est-il capable de liberté ?",
piste2: "ou peut-on attribuer une forme de liberté aux animaux ?",
racine1: "La liberté suppose-t-elle la conscience et la raison ?",
racine2: "ou l'instinct et l'adaptation sont-ils des formes de liberté naturelle ?",
enjeu: "Déterminer la spécificité anthropologique de la liberté."
},
{
id: 806,
notion: 'liberté',
intitule: "La liberté est-elle absolue ou relative ?",
piste1: "La liberté peut-elle être totale et sans limites ?",
piste2: "ou est-elle toujours relative à des conditions et à des contraintes ?",
racine1: "Une liberté absolue est-elle concevable ou souhaitable ?",
racine2: "ou la liberté n'a-t-elle de sens que dans un cadre de limites ?",
enjeu: "Interroger l'étendue et les bornes de la liberté."
},
{
id: 807,
notion: 'liberté',
intitule: "La liberté est-elle une donnée ou une construction ?",
piste1: "Sommes-nous libres par nature, sans rien avoir à faire pour l'être ?",
piste2: "ou la liberté est-elle une œuvre de soi sur soi ?",
racine1: "La liberté est-elle un fait brut de l'existence ?",
racine2: "ou est-elle une conquête permanente contre les déterminismes ?",
enjeu: "Déterminer si la liberté est un état ou une tâche."
},
{
id: 808,
notion: 'liberté',
intitule: "Peut-on définir la liberté sans la limiter ?",
piste1: "Toute définition de la liberté n'introduit-elle pas des critères qui la restreignent ?",
piste2: "ou la définition est-elle nécessaire pour la rendre effective et pensable ?",
racine1: "La liberté est-elle par essence indéfinissable et insaisissable ?",
racine2: "ou ne peut-on la réaliser qu'en la déterminant ?",
enjeu: "Examiner le paradoxe de la définition de la liberté."
},
{
id: 809,
notion: 'liberté',
intitule: "Sommes-nous déterminés par des causes que nous ignorons ?",
piste1: "Nos choix sont-ils le résultat de chaînes causales biologiques, psychiques ou sociales ?",
piste2: "ou existe-t-il en nous une capacité d'initier une action sans cause antérieure ?",
racine1: "Le principe de causalité s'applique-t-il à la volonté humaine ?",
racine2: "ou la liberté est-elle une exception à l'ordre de la nature ?",
enjeu: "Confronter le déterminisme et le libre arbitre."
},
{
id: 810,
notion: 'liberté',
intitule: "Le déterminisme exclut-il toute forme de liberté ?",
piste1: "Si tout est causé, la liberté est-elle impossible ?",
piste2: "ou la liberté peut-elle se redéfinir à l'intérieur du déterminisme ?",
racine1: "La liberté exige-t-elle l'indétermination absolue de nos actes ?",
racine2: "ou la liberté est-elle la conscience et l'acceptation de la nécessité ?",
enjeu: "Examiner la compatibilité entre déterminisme et liberté."
},
{
id: 811,
notion: 'liberté',
intitule: "La liberté est-elle compatible avec le déterminisme ?",
piste1: "Peut-on être libre tout en étant déterminé par son caractère et son histoire ?",
piste2: "ou la liberté exige-t-elle de pouvoir faire autrement dans les mêmes conditions ?",
racine1: "La liberté est-elle la capacité d'agir selon sa propre nature déterminée ?",
racine2: "ou la liberté est-elle le pouvoir de s'arracher à ses déterminations ?",
enjeu: "Articuler la nécessité et la liberté."
},
{
id: 812,
notion: 'liberté',
intitule: "La conscience de nos déterminismes nous rend-elle libres ?",
piste1: "Comprendre pourquoi nous agissons nous permet-il de nous affranchir de ces causes ?",
piste2: "ou cette connaissance nous enferme-t-elle davantage dans notre condition ?",
racine1: "La lucidité est-elle une condition de l'émancipation ?",
racine2: "ou la conscience n'est-elle qu'un spectateur impuissant de nos déterminismes ?",
enjeu: "Déterminer si la lucidité est émancipatrice."
},
{
id: 813,
notion: 'liberté',
intitule: "Le hasard nous rend-il plus libres que la nécessité ?",
piste1: "L'imprévisibilité de nos actes est-elle la preuve de notre liberté ?",
piste2: "ou le hasard est-il aussi étranger à la liberté que la nécessité stricte ?",
racine1: "Agir au hasard, est-ce être libre ?",
racine2: "ou la liberté suppose-t-elle au contraire une maîtrise et une intention ?",
enjeu: "Distinguer la liberté du simple hasard ou de l'aléatoire."
},
{
id: 814,
notion: 'liberté',
intitule: "La liberté suppose-t-elle l'indétermination de nos choix ?",
piste1: "Pour être libre, faut-il que rien n'ait déterminé notre choix à l'avance ?",
piste2: "ou la liberté peut-elle être la détermination de soi par soi-même ?",
racine1: "Le libre arbitre exige-t-il une absence totale de causes ?",
racine2: "ou la liberté est-elle une causalité d'un autre ordre (la causalité de la raison) ?",
enjeu: "Examiner la notion de libre arbitre."
},
{
id: 815,
notion: 'liberté',
intitule: "Pouvons-nous être libres dans un monde régi par des lois physiques ?",
piste1: "Les lois de la physique s'appliquent-elles au corps et à l'esprit humains ?",
piste2: "ou l'esprit humain échappe-t-il aux lois de la nature ?",
racine1: "Le matérialisme exclut-il la liberté ?",
racine2: "ou la liberté est-elle un phénomène émergent compatible avec les lois physiques ?",
enjeu: "Confronter la liberté humaine et le déterminisme scientifique."
},
{
id: 816,
notion: 'liberté',
intitule: "La génétique détermine-t-elle notre liberté ?",
piste1: "Notre patrimoine génétique fixe-t-il des limites infranchissables à notre liberté ?",
piste2: "ou la liberté consiste-t-elle à dépasser nos prédispositions biologiques ?",
racine1: "Sommes-nous les prisonniers de nos gènes ?",
racine2: "ou l'environnement et la volonté peuvent-ils modifier l'expression de notre génome ?",
enjeu: "Examiner l'impact du déterminisme biologique sur la liberté."
},
{
id: 817,
notion: 'liberté',
intitule: "L'inconscient est-il une menace pour notre liberté ?",
piste1: "Si nos actes sont guidés par des désirs inconscients, sommes-nous encore libres ?",
piste2: "ou la découverte de l'inconscient est-elle une nouvelle voie vers la liberté ?",
racine1: "L'inconscient nous dépossède-t-il de notre pouvoir de décision ?",
racine2: "ou la psychanalyse vise-t-elle à rendre le sujet plus libre en éclairant ses déterminismes ?",
enjeu: "Évaluer l'impact de la psychanalyse sur la notion de liberté."
},
{
id: 818,
notion: 'liberté',
intitule: "La liberté est-elle une exception dans l'ordre de la nature ?",
piste1: "L'homme est-il la seule créature capable de s'arracher aux lois naturelles ?",
piste2: "ou l'homme est-il soumis aux mêmes lois que le reste de la nature ?",
racine1: "La liberté est-elle une rupture dans la causalité naturelle ?",
racine2: "ou la liberté est-elle une propriété naturelle de certains êtres vivants ?",
enjeu: "Déterminer la place de la liberté dans l'ordre du monde."
},
{
id: 819,
notion: 'liberté',
intitule: "La liberté se confond-elle avec la liberté de vouloir ?",
piste1: "Être libre, est-ce pouvoir vouloir tout ce que l'on veut ?",
piste2: "ou la liberté réside-t-elle dans le pouvoir de faire ce que l'on a voulu ?",
racine1: "La volonté est-elle toujours libre, même quand l'action est empêchée ?",
racine2: "ou la liberté exige-t-elle l'efficacité de la volonté dans le réel ?",
enjeu: "Distinguer la liberté de la volonté et la liberté d'action."
},
{
id: 820,
notion: 'liberté',
intitule: "Peut-on vouloir ce que l'on ne désire pas ?",
piste1: "La volonté peut-elle s'opposer à nos désirs immédiats ?",
piste2: "ou ne voulons-nous jamais que ce que nous désirons le plus fort ?",
racine1: "La volonté est-elle une faculté indépendante du désir ?",
racine2: "ou la volonté n'est-elle que le désir le plus rationnel ou le plus fort ?",
enjeu: "Examiner le rapport entre volonté et désir."
},
{
id: 821,
notion: 'liberté',
intitule: "La volonté est-elle toujours libre ?",
piste1: "Pouvons-nous toujours décider de ce que nous voulons ?",
piste2: "ou notre volonté est-elle parfois déterminée malgré nous ?",
racine1: "La volonté est-elle une cause première de nos actes ?",
racine2: "ou la volonté est-elle elle-même le produit de causes antérieures ?",
enjeu: "Interroger la liberté de la volonté."
},
{
id: 822,
notion: 'liberté',
intitule: "Le libre arbitre existe-t-il ?",
piste1: "L'homme a-t-il le pouvoir de choisir entre plusieurs possibilités réelles ?",
piste2: "ou le libre arbitre n'est-il qu'une croyance utile mais fausse ?",
racine1: "Le libre arbitre est-il nécessaire pour fonder la morale et la responsabilité ?",
racine2: "ou peut-on penser la responsabilité sans libre arbitre ?",
enjeu: "Évaluer la réalité et la nécessité du libre arbitre."
},
{
id: 823,
notion: 'liberté',
intitule: "Choisir, est-ce nécessairement être libre ?",
piste1: "Le fait de faire un choix prouve-t-il notre liberté ?",
piste2: "ou peut-on choisir sous la contrainte ou l'illusion ?",
racine1: "Le choix est-il la manifestation de la liberté ?",
racine2: "ou certains choix sont-ils imposés et donc non libres ?",
enjeu: "Distinguer le choix formel du choix libre."
},
{
id: 824,
notion: 'liberté',
intitule: "La liberté est-elle dans l'action ou dans l'intention ?",
piste1: "Sommes-nous libres seulement quand nous pouvons agir ?",
piste2: "ou notre intention suffit-elle à nous rendre libres, même si l'action échoue ?",
racine1: "La liberté est-elle un pouvoir effectif sur le monde ?",
racine2: "ou la liberté est-elle une disposition intérieure de la volonté ?",
enjeu: "Déterminer le lieu de la liberté."
},
{
id: 825,
notion: 'liberté',
intitule: "Peut-on être libre de ne pas vouloir ?",
piste1: "La liberté inclut-elle la capacité de s'abstenir de tout choix ?",
piste2: "ou ne pas choisir est-il encore une manière de choisir ?",
racine1: "L'abstention est-elle un exercice de la liberté ?",
racine2: "ou sommes-nous condamnés à vouloir et à choisir ?",
enjeu: "Examiner la liberté de l'abstention."
},
{
id: 826,
notion: 'liberté',
intitule: "La volonté est-elle une force ou une faiblesse ?",
piste1: "La volonté est-elle une puissance qui nous permet de maîtriser notre vie ?",
piste2: "ou est-elle le signe d'un manque, d'un effort contre nos penchants naturels ?",
racine1: "La volonté est-elle la marque de la grandeur humaine ?",
racine2: "ou la spontanéité heureuse est-elle supérieure à l'effort de la volonté ?",
enjeu: "Évaluer la nature de la volonté."
},
{
id: 827,
notion: 'liberté',
intitule: "L'indécision est-elle une preuve de liberté ?",
piste1: "Hésiter, est-ce faire l'expérience de notre pouvoir de choisir ?",
piste2: "ou l'indécision est-elle une paralysie qui nous empêche d'être libres ?",
racine1: "Le doute est-il la manifestation de la liberté de la volonté ?",
racine2: "ou la liberté exige-t-elle au contraire la résolution et l'action ?",
enjeu: "Déterminer la valeur de l'indécision pour la liberté."
},
{
id: 828,
notion: 'liberté',
intitule: "La liberté consiste-t-elle à faire ce que l'on veut ?",
piste1: "La définition la plus simple de la liberté est-elle la satisfaction de nos désirs ?",
piste2: "ou cette définition ne mène-t-elle qu'à l'esclavage des passions ?",
racine1: "Faire ce que l'on veut est-il la réalisation de la liberté ?",
racine2: "ou la liberté est-elle de vouloir ce que l'on fait ?",
enjeu: "Confronter la liberté comme licence et la liberté comme autonomie."
},
{
id: 829,
notion: 'liberté',
intitule: "Sommes-nous esclaves de nos désirs ?",
piste1: "Nos désirs nous dominent-ils et nous empêchent-ils d'être libres ?",
piste2: "ou les désirs sont-ils l'expression de notre puissance d'être libre ?",
racine1: "Le désir est-il une servitude qui nous aliène ?",
racine2: "ou le désir est-il la force qui nous porte à agir et à nous réaliser ?",
enjeu: "Examiner le rapport entre désir et servitude."
},
{
id: 830,
notion: 'liberté',
intitule: "La liberté consiste-t-elle à satisfaire tous nos désirs ?",
piste1: "La liberté est-elle l'assouvissement de toutes nos envies ?",
piste2: "ou la liberté exige-t-elle de savoir renoncer à certains désirs ?",
racine1: "La satisfaction des désirs est-elle la condition du bonheur et de la liberté ?",
racine2: "ou la maîtrise des désirs est-elle la condition de la liberté ?",
enjeu: "Déterminer le rôle de la modération dans la liberté."
},
{
id: 831,
notion: 'liberté',
intitule: "Peut-on être libre en l'absence de tout désir ?",
piste1: "L'absence de désir est-elle la forme la plus haute de la liberté (ataraxie) ?",
piste2: "ou la liberté suppose-t-elle nécessairement un projet et donc un désir ?",
racine1: "La liberté est-elle l'indépendance à l'égard de tout besoin ?",
racine2: "ou la liberté est-elle vide et abstraite sans désir pour l'animer ?",
enjeu: "Examiner la conception de la liberté comme détachement."
},
{
id: 832,
notion: 'liberté',
intitule: "Le désir est-il une puissance de liberté ou une servitude ?",
piste1: "Le désir nous pousse-t-il à dépasser nos limites et à nous créer nous-mêmes ?",
piste2: "ou nous enchaîne-t-il à des objets extérieurs dont nous dépendons ?",
racine1: "Le désir est-il une affirmation de notre puissance d'agir ?",
racine2: "ou le désir est-il un manque qui nous rend dépendants ?",
enjeu: "Articuler les deux visages du désir : puissance et manque."
},
{
id: 833,
notion: 'liberté',
intitule: "La liberté exige-t-elle de maîtriser ses passions ?",
piste1: "Peut-on être libre si l'on est agité par des passions violentes ?",
piste2: "ou les passions sont-elles une composante essentielle de la liberté humaine ?",
racine1: "La raison doit-elle dominer les passions pour que l'homme soit libre ?",
racine2: "ou la liberté consiste-t-elle à intégrer et orienter ses passions ?",
enjeu: "Déterminer le rapport entre raison, passion et liberté."
},
{
id: 834,
notion: 'liberté',
intitule: "Sommes-nous libres de nos désirs ?",
piste1: "Pouvons-nous choisir ce que nous désirons ?",
piste2: "ou nos désirs s'imposent-ils à nous sans que nous les ayons choisis ?",
racine1: "Le désir est-il un acte libre de la volonté ?",
racine2: "ou le désir est-il subi, même si l'action qui le suit peut être libre ?",
enjeu: "Examiner la genèse du désir et son rapport à la liberté."
},
{
id: 835,
notion: 'liberté',
intitule: "L'addiction est-elle la négation de la liberté ?",
piste1: "L'addiction détruit-elle toute possibilité de choix libre ?",
piste2: "ou peut-on rester libre même dans la dépendance ?",
racine1: "L'addiction est-elle une perte totale de l'autonomie ?",
racine2: "ou la liberté peut-elle se manifester dans la demande d'aide et le combat contre l'addiction ?",
enjeu: "Évaluer l'impact de l'addiction sur la liberté."
},
{
id: 836,
notion: 'liberté',
intitule: "La liberté est-elle l'indépendance à l'égard des besoins ?",
piste1: "Plus nous avons de besoins, moins nous sommes libres ?",
piste2: "ou la satisfaction des besoins est-elle la condition de la liberté ?",
racine1: "La liberté est-elle la sobriété et le détachement ?",
racine2: "ou la liberté est-elle la puissance de satisfaire ses besoins ?",
enjeu: "Confronter deux conceptions de la liberté face aux besoins."
},
{
id: 837,
notion: 'liberté',
intitule: "Le bonheur est-il la condition de la liberté ?",
piste1: "Peut-on être libre si l'on est malheureux ?",
piste2: "ou la liberté est-elle possible même dans le malheur ?",
racine1: "Le bonheur est-il la réalisation de la liberté ?",
racine2: "ou la liberté est-elle une valeur indépendante du bonheur ?",
enjeu: "Examiner le lien entre bonheur et liberté."
},
{
id: 838,
notion: 'liberté',
intitule: "La liberté est-elle dans l'acceptation du destin ?",
piste1: "Accepter ce qui ne peut pas être changé est-il la forme la plus haute de la liberté ?",
piste2: "ou l'acceptation est-elle une résignation qui nie la liberté ?",
racine1: "La liberté est-elle la reconnaissance de la nécessité ?",
racine2: "ou la liberté est-elle la révolte contre le destin ?",
enjeu: "Confronter la liberté comme acceptation et la liberté comme révolte."
},
{
id: 839,
notion: 'liberté',
intitule: "La loi est-elle l'ennemie de la liberté ?",
piste1: "Toute loi est-elle une restriction de la liberté naturelle ?",
piste2: "ou la loi est-elle ce qui rend la liberté possible en société ?",
racine1: "La loi est-elle une contrainte illégitime ?",
racine2: "ou la loi est-elle l'expression de la volonté générale et donc de la liberté ?",
enjeu: "Examiner le rapport conflictuel ou complémentaire entre loi et liberté."
},
{
id: 840,
notion: 'liberté',
intitule: "La loi est-elle la condition de la liberté ?",
piste1: "Sans loi, la liberté de chacun n'est-elle pas menacée par la force des autres ?",
piste2: "ou la loi est-elle toujours une aliénation de la liberté ?",
racine1: "La liberté civile est-elle supérieure à la liberté naturelle ?",
racine2: "ou la loi est-elle toujours un instrument de domination ?",
enjeu: "Déterminer le rôle de la loi dans la réalisation de la liberté."
},
{
id: 841,
notion: 'liberté',
intitule: "Obéir à la loi, est-ce être libre ?",
piste1: "L'obéissance à une loi que l'on a prescrite est-elle un acte de liberté ?",
piste2: "ou l'obéissance est-elle par définition une soumission ?",
racine1: "L'autonomie est-elle l'obéissance à la loi qu'on s'est donnée ?",
racine2: "ou la liberté est-elle l'absence de toute obéissance ?",
enjeu: "Examiner le paradoxe de l'obéissance libre."
},
{
id: 842,
notion: 'liberté',
intitule: "La liberté a-t-elle des limites ?",
piste1: "La liberté peut-elle être illimitée ?",
piste2: "ou la liberté s'arrête-t-elle là où commence celle d'autrui ?",
racine1: "Une liberté sans limite est-elle concevable ou destructrice ?",
racine2: "ou la limite est-elle ce qui donne sa forme et sa réalité à la liberté ?",
enjeu: "Déterminer les bornes légitimes de la liberté."
},
{
id: 843,
notion: 'liberté',
intitule: "La liberté des uns s'arrête-t-elle là où commence celle des autres ?",
piste1: "Cette formule définit-elle correctement la justice et la liberté en société ?",
piste2: "ou cette conception est-elle trop négative et individualiste ?",
racine1: "La liberté est-elle un espace privé que les autres ne doivent pas envahir ?",
racine2: "ou la liberté est-elle une relation et une coopération avec les autres ?",
enjeu: "Examiner la célèbre définition de la liberté et ses limites."
},
{
id: 844,
notion: 'liberté',
intitule: "L'État de droit garantit-il la liberté ?",
piste1: "L'État de droit est-il le meilleur protecteur des libertés individuelles ?",
piste2: "ou l'État de droit peut-il devenir un instrument de contrôle et de restriction ?",
racine1: "La séparation des pouvoirs et les droits fondamentaux suffisent-ils à garantir la liberté ?",
racine2: "ou la liberté exige-t-elle une vigilance constante contre les dérives de l'État ?",
enjeu: "Évaluer le rôle de l'État de droit dans la protection de la liberté."
},
{
id: 845,
notion: 'liberté',
intitule: "Peut-il y avoir une liberté sans droit ?",
piste1: "La liberté existe-t-elle à l'état de nature, avant tout droit ?",
piste2: "ou la liberté n'est-elle réelle que lorsqu'elle est reconnue et protégée par le droit ?",
racine1: "Le droit est-il l'ennemi de la liberté ou sa condition de possibilité ?",
racine2: "ou la liberté sans droit n'est-elle que la loi du plus fort ?",
enjeu: "Déterminer le lien entre liberté et droit."
},
{
id: 846,
notion: 'liberté',
intitule: "La contrainte légale est-elle une violence ?",
piste1: "Toute contrainte imposée par la loi est-elle une atteinte à la liberté ?",
piste2: "ou la contrainte légale est-elle légitime et non violente ?",
racine1: "La loi est-elle une violence légitime ?",
racine2: "ou la violence est-elle précisément ce qui est illégal et arbitraire ?",
enjeu: "Distinguer la contrainte légale légitime de la violence illégitime."
},
{
id: 847,
notion: 'liberté',
intitule: "La liberté civile est-elle supérieure à la liberté naturelle ?",
piste1: "La liberté en société, réglée par la loi, est-elle plus vraie que la liberté sauvage ?",
piste2: "ou la liberté naturelle est-elle la seule liberté authentique ?",
racine1: "La liberté civile est-elle une perfection de la liberté naturelle ?",
racine2: "ou la liberté civile est-elle une aliénation de la liberté naturelle ?",
enjeu: "Comparer la liberté naturelle et la liberté civile."
},
{
id: 848,
notion: 'liberté',
intitule: "L'anarchie est-elle la forme ultime de la liberté ?",
piste1: "L'absence de tout État et de toute loi est-elle la condition de la liberté totale ?",
piste2: "ou l'anarchie mène-t-elle à la guerre de tous contre tous, détruisant toute liberté ?",
racine1: "L'État est-il par essence un oppresseur de la liberté ?",
racine2: "ou l'ordre spontané peut-il garantir la liberté sans contrainte ?",
enjeu: "Examiner la thèse anarchiste de la liberté."
},
{
id: 849,
notion: 'liberté',
intitule: "La société libère-t-elle ou aliène-t-elle l'individu ?",
piste1: "La vie en société permet-elle l'épanouissement et la liberté de l'individu ?",
piste2: "ou la société impose-t-elle des normes qui étouffent la liberté individuelle ?",
racine1: "La société est-elle le milieu de réalisation de la liberté ?",
racine2: "ou la société est-elle une machine à produire de la conformité ?",
enjeu: "Évaluer l'impact de la société sur la liberté individuelle."
},
{
id: 850,
notion: 'liberté',
intitule: "La liberté est-elle un droit ou un privilège ?",
piste1: "La liberté est-elle un droit universel appartenant à tous ?",
piste2: "ou la liberté est-elle un privilège réservé à ceux qui ont les moyens de l'exercer ?",
racine1: "La liberté est-elle formellement égale pour tous ?",
racine2: "ou les inégalités sociales rendent-elles la liberté inégale dans les faits ?",
enjeu: "Examiner l'écart entre le droit à la liberté et la réalité de la liberté."
},
{
id: 851,
notion: 'liberté',
intitule: "Peut-on être libre dans une société inégalitaire ?",
piste1: "Les inégalités économiques et sociales détruisent-elles la liberté des plus démunis ?",
piste2: "ou la liberté est-elle une disposition intérieure indépendante des conditions sociales ?",
racine1: "La liberté réelle exige-t-elle l'égalité des conditions ?",
racine2: "ou la liberté est-elle possible même dans l'adversité ?",
enjeu: "Déterminer le lien entre égalité et liberté."
},
{
id: 852,
notion: 'liberté',
intitule: "La liberté nécessite-t-elle des conditions matérielles ?",
piste1: "Peut-on être libre si l'on manque du nécessaire pour vivre ?",
piste2: "ou la liberté est-elle une affaire d'esprit, indépendante des biens matériels ?",
racine1: "La pauvreté est-elle une forme d'esclavage ?",
racine2: "ou la liberté intérieure est-elle possible dans la misère ?",
enjeu: "Examiner le rapport entre liberté et conditions matérielles d'existence."
},
{
id: 853,
notion: 'liberté',
intitule: "L'éducation est-elle un apprentissage de la liberté ?",
piste1: "L'éducation a-t-elle pour but de rendre l'individu libre et autonome ?",
piste2: "ou l'éducation est-elle un formatage qui limite la liberté ?",
racine1: "L'éducation libère-t-elle l'esprit des préjugés ?",
racine2: "ou l'éducation impose-t-elle des normes sociales contraignantes ?",
enjeu: "Déterminer le rôle de l'éducation dans la conquête de la liberté."
},
{
id: 854,
notion: 'liberté',
intitule: "La liberté est-elle compatible avec l'autorité ?",
piste1: "Toute autorité est-elle une négation de la liberté ?",
piste2: "ou une autorité légitime peut-elle être la condition de la liberté ?",
racine1: "L'autorité et la liberté sont-elles des contraires absolus ?",
racine2: "ou l'autorité de la raison ou de la loi est-elle libératrice ?",
enjeu: "Examiner la compatibilité entre liberté et autorité."
},
{
id: 855,
notion: 'liberté',
intitule: "Le travail libère-t-il ou asservit-il ?",
piste1: "Le travail est-il une activité par laquelle l'homme se réalise et se libère ?",
piste2: "ou le travail est-il une contrainte qui aliène l'homme ?",
racine1: "Le travail est-il une transformation libératrice de la nature ?",
racine2: "ou le travail salarié est-il une forme de dépendance et d'exploitation ?",
enjeu: "Évaluer la double nature du travail vis-à-vis de la liberté."
},
{
id: 856,
notion: 'liberté',
intitule: "La consommation est-elle une forme de liberté ?",
piste1: "Le pouvoir d'acheter et de choisir des biens est-il une expression de la liberté ?",
piste2: "ou la consommation est-elle une illusion de liberté qui nous rend dépendants ?",
racine1: "La liberté de consommer est-elle la liberté réelle ?",
racine2: "ou la société de consommation crée-t-elle de faux besoins qui nous asservissent ?",
enjeu: "Examiner la liberté à l'aune de la société de consommation."
},
{
id: 857,
notion: 'liberté',
intitule: "La technologie nous rend-elle plus libres ?",
piste1: "Les progrès techniques nous libèrent-ils des contraintes naturelles et du labeur ?",
piste2: "ou la technologie crée-t-elle de nouvelles dépendances et formes de contrôle ?",
racine1: "La technique est-elle un instrument de libération de l'humanité ?",
racine2: "ou la technique est-elle devenue un système qui détermine nos vies ?",
enjeu: "Évaluer l'impact de la technique sur la liberté humaine."
},
{
id: 858,
notion: 'liberté',
intitule: "La liberté est-elle menacée par la surveillance de masse ?",
piste1: "La collecte de nos données et la surveillance constante détruisent-elles notre liberté ?",
piste2: "ou la surveillance est-elle le prix à payer pour la sécurité, sans toucher à la liberté ?",
racine1: "La liberté nécessite-t-elle un espace d'intimité et d'invisibilité ?",
racine2: "ou la transparence totale est-elle compatible avec la liberté ?",
enjeu: "Examiner les menaces contemporaines sur la liberté issues du numérique."
},
{
id: 859,
notion: 'liberté',
intitule: "La liberté est-elle la condition de la responsabilité ?",
piste1: "Ne peut-on être tenu pour responsable que si l'on est libre ?",
piste2: "ou peut-on être responsable d'actes que l'on n'a pas commis librement ?",
racine1: "La responsabilité suppose-t-elle le libre arbitre ?",
racine2: "ou la responsabilité est-elle une attribution sociale indépendante de la liberté métaphysique ?",
enjeu: "Lier la liberté à la responsabilité morale et juridique."
},
{
id: 860,
notion: 'liberté',
intitule: "Sommes-nous responsables de ce que nous ne contrôlons pas ?",
piste1: "La responsabilité s'étend-elle au-delà de notre sphère de liberté et de contrôle ?",
piste2: "ou ne sommes-nous responsables que de ce que nous avons librement choisi ?",
racine1: "La responsabilité est-elle limitée par la liberté ?",
racine2: "ou avons-nous une responsabilité pour le monde, même sans l'avoir choisi ?",
enjeu: "Examiner l'étendue de la responsabilité face aux déterminismes."
},
{
id: 861,
notion: 'liberté',
intitule: "La liberté implique-t-elle le fardeau de la responsabilité ?",
piste1: "Être libre, est-ce devoir assumer seul le poids de ses choix et de leurs conséquences ?",
piste2: "ou la liberté est-elle un allègement des contraintes ?",
racine1: "La liberté est-elle une source d'angoisse et de responsabilité écrasante ?",
racine2: "ou la liberté est-elle une joie et une puissance d'agir ?",
enjeu: "Examiner le rapport entre liberté, angoisse et responsabilité."
},
{
id: 862,
notion: 'liberté',
intitule: "Peut-on être libre et innocent ?",
piste1: "La liberté implique-t-elle nécessairement la possibilité de fauter et donc la perte de l'innocence ?",
piste2: "ou peut-on être libre tout en restant bon et innocent ?",
racine1: "La liberté est-elle indissociable de la faute ?",
racine2: "ou l'innocence est-elle une forme de liberté non corrompue ?",
enjeu: "Déterminer le lien entre liberté et innocence."
},
{
id: 863,
notion: 'liberté',
intitule: "La mauvaise foi est-elle une fuite devant la liberté ?",
piste1: "Se mentir à soi-même, est-ce refuser d'assumer sa liberté et sa responsabilité ?",
piste2: "ou la mauvaise foi est-elle une stratégie nécessaire pour supporter l'existence ?",
racine1: "La mauvaise foi est-elle une négation de la liberté ?",
racine2: "ou la mauvaise foi est-elle elle-même un choix libre ?",
enjeu: "Examiner la notion de mauvaise foi comme rapport à la liberté."
},
{
id: 864,
notion: 'liberté',
intitule: "La liberté est-elle une valeur morale absolue ?",
piste1: "La liberté est-elle le bien suprême auquel tous les autres doivent être subordonnés ?",
piste2: "ou la liberté peut-elle être sacrifiée au nom d'autres valeurs (sécurité, égalité, ordre) ?",
racine1: "La liberté est-elle une fin en soi ?",
racine2: "ou la liberté est-elle un moyen au service d'autres fins ?",
enjeu: "Déterminer la place de la liberté dans la hiérarchie des valeurs."
},
{
id: 865,
notion: 'liberté',
intitule: "Peut-on renoncer à sa liberté ?",
piste1: "Un individu peut-il librement choisir de devenir esclave ou de se soumettre totalement ?",
piste2: "ou la liberté est-elle un droit inaliénable auquel on ne peut pas renoncer ?",
racine1: "La renonciation à la liberté est-elle un acte libre ou une contradiction ?",
racine2: "ou la liberté est-elle si essentielle qu'on ne peut s'en défaire ?",
enjeu: "Examiner l'inaliénabilité de la liberté."
},
{
id: 866,
notion: 'liberté',
intitule: "La liberté est-elle un devoir ?",
piste1: "Avons-nous le devoir d'être libres et de lutter pour notre liberté ?",
piste2: "ou la liberté est-elle un droit ou un fait, mais pas un devoir ?",
racine1: "Peut-on exiger de quelqu'un qu'il soit libre ?",
racine2: "ou la liberté est-elle la condition de tout devoir, mais pas un devoir elle-même ?",
enjeu: "Déterminer si la liberté peut être une obligation morale."
},
{
id: 867,
notion: 'liberté',
intitule: "Sommes-nous condamnés à être libres ?",
piste1: "La liberté est-elle une condition inévitable et inéluctable de l'existence humaine ?",
piste2: "ou pouvons-nous échapper à la liberté et vivre dans la soumission ?",
racine1: "La liberté est-elle une fatalité dont nous ne pouvons nous défaire ?",
racine2: "ou la liberté est-elle une conquête toujours menacée ?",
enjeu: "Examiner le caractère inéluctable de la liberté."
},
{
id: 868,
notion: 'liberté',
intitule: "La liberté est-elle la source de toute dignité humaine ?",
piste1: "Ce qui donne sa valeur et sa dignité à l'homme, est-ce sa capacité à être libre ?",
piste2: "ou la dignité humaine repose-t-elle sur d'autres fondements (raison, sensibilité, vie) ?",
racine1: "La liberté est-elle ce qui distingue l'homme de la chose ?",
racine2: "ou la dignité est-elle indépendante de l'exercice effectif de la liberté ?",
enjeu: "Lier la liberté à la dignité de la personne."
},
{
id: 869,
notion: 'liberté',
intitule: "La conscience est-elle le lieu de la liberté ?",
piste1: "La liberté réside-t-elle dans la conscience que nous avons de nos actes ?",
piste2: "ou la conscience n'est-elle qu'un reflet de déterminismes inconscients ?",
racine1: "La conscience est-elle la condition nécessaire de la liberté ?",
racine2: "ou la conscience est-elle impuissante face aux forces qui nous déterminent ?",
enjeu: "Déterminer le rôle de la conscience dans la liberté."
},
{
id: 870,
notion: 'liberté',
intitule: "L'ignorance est-elle une condition de la liberté ?",
piste1: "Ne pas savoir, est-ce être libre de préjugés et de soucis ?",
piste2: "ou l'ignorance est-elle une forme d'esclavage qui nous empêche de choisir lucidement ?",
racine1: "L'ignorance est-elle une forme de liberté naïve ?",
racine2: "ou la liberté exige-t-elle la connaissance et la lucidité ?",
enjeu: "Examiner le rapport entre ignorance et liberté."
},
{
id: 871,
notion: 'liberté',
intitule: "La vérité nous rend-elle libres ?",
piste1: "Connaître la vérité est-ce s'émanciper des illusions et des mensonges ?",
piste2: "ou la vérité peut-elle être une contrainte qui limite notre liberté ?",
racine1: "La liberté est-elle la reconnaissance de la vérité ?",
racine2: "ou la liberté est-elle le droit à l'erreur et à la fiction ?",
enjeu: "Déterminer le lien entre vérité et liberté."
},
{
id: 872,
notion: 'liberté',
intitule: "La liberté est-elle une connaissance de la nécessité ?",
piste1: "Comprendre les lois qui nous déterminent est-il la seule façon d'être libre ?",
piste2: "ou la liberté est-elle la capacité d'agir contre la nécessité ?",
racine1: "La liberté est-elle l'intelligence de la nécessité ?",
racine2: "ou la liberté est-elle la négation de la nécessité ?",
enjeu: "Examiner la conception spinoziste de la liberté."
},
{
id: 873,
notion: 'liberté',
intitule: "Peut-on être libre sans être lucide ?",
piste1: "La liberté peut-elle exister dans l'illusion ou l'ignorance de sa propre situation ?",
piste2: "ou la liberté exige-t-elle une conscience claire de soi et du monde ?",
racine1: "La liberté est-elle compatible avec l'aveuglement ?",
racine2: "ou la lucidité est-elle la condition sine qua non de la liberté ?",
enjeu: "Déterminer le rôle de la lucidité dans la liberté."
},
{
id: 874,
notion: 'liberté',
intitule: "L'illusion est-elle incompatible avec la liberté ?",
piste1: "Vivre dans l'illusion, est-ce être privé de liberté ?",
piste2: "ou l'illusion peut-elle être un choix libre ou une condition de l'action ?",
racine1: "La liberté exige-t-elle l'adhésion au réel tel qu'il est ?",
racine2: "ou la liberté inclut-elle le pouvoir de se raconter des histoires ?",
enjeu: "Examiner le rapport entre illusion et liberté."
},
{
id: 875,
notion: 'liberté',
intitule: "La raison est-elle la gardienne de la liberté ?",
piste1: "La raison est-elle ce qui nous permet de nous libérer des passions et des préjugés ?",
piste2: "ou la raison est-elle elle-même une contrainte qui limite notre liberté ?",
racine1: "La raison est-elle l'instrument de l'émancipation ?",
racine2: "ou la raison est-elle un carcan qui étouffe la spontanéité et la liberté ?",
enjeu: "Déterminer le rôle de la raison dans la liberté."
},
{
id: 876,
notion: 'liberté',
intitule: "La liberté est-elle une affaire de jugement ?",
piste1: "Être libre, est-ce être capable de juger par soi-même ?",
piste2: "ou la liberté est-elle une puissance d'action indépendante du jugement ?",
racine1: "La liberté de penser et de juger est-elle la première des libertés ?",
racine2: "ou la liberté est-elle d'abord dans l'agir, indépendamment du jugement ?",
enjeu: "Lier la liberté à la faculté de juger."
},
{
id: 877,
notion: 'liberté',
intitule: "La critique est-elle un exercice de la liberté ?",
piste1: "Exercer son esprit critique, est-ce faire l'expérience de sa liberté ?",
piste2: "ou la critique est-elle une contrainte intellectuelle qui limite la liberté ?",
racine1: "La critique est-elle l'usage public et libre de la raison ?",
racine2: "ou la critique est-elle une soumission à des normes de pensée ?",
enjeu: "Examiner la critique comme acte de liberté."
},
{
id: 878,
notion: 'liberté',
intitule: "La liberté de penser est-elle la première des libertés ?",
piste1: "Toutes les autres libertés dépendent-elles de la liberté de pensée ?",
piste2: "ou la liberté de pensée est-elle vide sans la liberté d'expression et d'action ?",
racine1: "La liberté intérieure est-elle la plus fondamentale et la plus inviolable ?",
racine2: "ou la liberté de pensée n'est-elle qu'une abstraction sans liberté réelle ?",
enjeu: "Hiérarchiser les différentes formes de liberté."
},
{
id: 879,
notion: 'liberté',
intitule: "La liberté est-elle une propriété de l'existence ?",
piste1: "L'existence humaine est-elle par essence liberté ?",
piste2: "ou la liberté est-elle un accident ou une conquête de l'existence ?",
racine1: "L'homme est-il condamné à être libre par sa seule existence ?",
racine2: "ou la liberté est-elle une possibilité qui n'est pas toujours réalisée ?",
enjeu: "Examiner le lien ontologique entre existence et liberté."
},
{
id: 880,
notion: 'liberté',
intitule: "Sommes-nous libres de notre passé ?",
piste1: "Pouvons-nous nous libérer du poids de notre histoire et de nos actes passés ?",
piste2: "ou le passé nous détermine-t-il de manière irrémédiable ?",
racine1: "La liberté est-elle la capacité de se réinventer malgré le passé ?",
racine2: "ou le passé est-il une chaîne dont on ne peut se défaire ?",
enjeu: "Déterminer le rapport entre liberté et passé."
},
{
id: 881,
notion: 'liberté',
intitule: "La liberté est-elle tournée vers l'avenir ?",
piste1: "La liberté consiste-t-elle à se projeter dans l'avenir et à le créer ?",
piste2: "ou la liberté est-elle ancrée dans le présent ?",
racine1: "La liberté est-elle le pouvoir de commencer quelque chose de nouveau ?",
racine2: "ou la liberté est-elle l'acceptation du présent tel qu'il est ?",
enjeu: "Examiner la temporalité de la liberté."
},
{
id: 882,
notion: 'liberté',
intitule: "Le temps est-il la dimension de la liberté ?",
piste1: "La liberté ne s'exerce-t-elle que dans la durée et le devenir ?",
piste2: "ou la liberté est-elle un instant d'éternité hors du temps ?",
racine1: "La liberté suppose-t-elle le temps pour se déployer ?",
racine2: "ou la liberté est-elle la capacité de suspendre le temps ?",
enjeu: "Lier la liberté à la temporalité."
},
{
id: 883,
notion: 'liberté',
intitule: "La mort est-elle la limite de la liberté ?",
piste1: "La mort met-elle un terme absolu à toute liberté ?",
piste2: "ou la conscience de la mort est-elle ce qui donne son sens et sa liberté à la vie ?",
racine1: "La mort est-elle l'anéantissement de la liberté ?",
racine2: "ou la liberté est-elle la manière dont nous nous rapportons à notre propre mort ?",
enjeu: "Examiner le rapport entre liberté et finitude."
},
{
id: 884,
notion: 'liberté',
intitule: "La liberté est-elle une création de soi ?",
piste1: "Être libre, est-ce se créer soi-même comme une œuvre d'art ?",
piste2: "ou la liberté est-elle la découverte de ce que nous sommes déjà ?",
racine1: "La liberté est-elle invention et autoproduction ?",
racine2: "ou la liberté est-elle l'actualisation d'une essence donnée ?",
enjeu: "Déterminer si la liberté est création ou révélation de soi."
},
{
id: 885,
notion: 'liberté',
intitule: "L'engagement est-il l'expression de la liberté ?",
piste1: "Se choisir et choisir le monde en s'engageant, est-ce la réalisation de la liberté ?",
piste2: "ou l'engagement est-il une limitation de la liberté par des obligations ?",
racine1: "La liberté ne se réalise-t-elle que dans l'action engagée ?",
racine2: "ou la liberté est-elle le maintien de toutes les possibilités ouvertes ?",
enjeu: "Examiner le rapport entre liberté et engagement."
},
{
id: 886,
notion: 'liberté',
intitule: "La liberté est-elle dans l'instant ou dans la durée ?",
piste1: "La liberté est-elle l'expérience d'un instant de décision pure ?",
piste2: "ou la liberté est-elle la construction patiente d'une vie dans la durée ?",
racine1: "La liberté est-elle un événement ponctuel ?",
racine2: "ou la liberté est-elle une habitude et une durée ?",
enjeu: "Déterminer la temporalité de l'expérience de la liberté."
},
{
id: 887,
notion: 'liberté',
intitule: "Peut-on être libre dans l'adversité ?",
piste1: "La liberté peut-elle être préservée même dans les pires conditions (prison, oppression) ?",
piste2: "ou l'adversité détruit-elle nécessairement toute forme de liberté ?",
racine1: "La liberté intérieure est-elle inviolable ?",
racine2: "ou la liberté exige-t-elle des conditions extérieures minimales ?",
enjeu: "Examiner la résilience de la liberté face à l'adversité."
},
{
id: 888,
notion: 'liberté',
intitule: "La liberté est-elle un don ou une conquête ?",
piste1: "La liberté nous est-elle donnée à la naissance ?",
piste2: "ou doit-elle être arrachée et conquise par la lutte ?",
racine1: "La liberté est-elle un droit naturel inné ?",
racine2: "ou la liberté est-elle le fruit d'un effort historique et personnel ?",
enjeu: "Déterminer l'origine de la liberté."
},
{
id: 889,
notion: 'liberté',
intitule: "La liberté absolue est-elle possible ?",
piste1: "Peut-on concevoir une liberté sans aucune limite ni contrainte ?",
piste2: "ou la liberté est-elle par essence relative et située ?",
racine1: "La liberté absolue est-elle un idéal régulateur ?",
racine2: "ou la liberté absolue est-elle une contradiction dans les termes ?",
enjeu: "Examiner la possibilité de la liberté absolue."
},
{
id: 890,
notion: 'liberté',
intitule: "La liberté absolue est-elle souhaitable ?",
piste1: "Une liberté sans limite serait-elle le bonheur suprême ?",
piste2: "ou la liberté absolue mènerait-elle à l'angoisse, au chaos ou à la tyrannie ?",
racine1: "La liberté absolue est-elle désirable ?",
racine2: "ou avons-nous besoin de limites pour être libres ?",
enjeu: "Évaluer la désirabilité de la liberté absolue."
},
{
id: 891,
notion: 'liberté',
intitule: "La liberté peut-elle se détruire elle-même ?",
piste1: "L'usage absolu de la liberté peut-il conduire à la perte de la liberté (ex: démocratie qui s'autodétruit) ?",
piste2: "ou la liberté est-elle auto-conservatrice par nature ?",
racine1: "La liberté contient-elle les germes de sa propre destruction ?",
racine2: "ou la liberté est-elle le principe qui empêche toute destruction de soi ?",
enjeu: "Examiner les paradoxes et les dangers internes de la liberté."
},
{
id: 892,
notion: 'liberté',
intitule: "La tolérance est-elle une limite à la liberté ?",
piste1: "La tolérance impose-t-elle de restreindre sa propre liberté d'expression ou d'action ?",
piste2: "ou la tolérance est-elle la condition même de la liberté de tous ?",
racine1: "La tolérance est-elle une contrainte morale ?",
racine2: "ou la tolérance est-elle l'expression la plus haute de la liberté ?",
enjeu: "Déterminer le rapport entre tolérance et liberté."
},
{
id: 893,
notion: 'liberté',
intitule: "La liberté est-elle un concept vide ?",
piste1: "Le mot 'liberté' est-il si polysémique qu'il en perd tout sens précis ?",
piste2: "ou la liberté désigne-t-elle une réalité philosophique robuste et définie ?",
racine1: "La liberté est-elle un mot-valise utilisé à toutes les sauces ?",
racine2: "ou la liberté a-t-elle un noyau de sens indépassable ?",
enjeu: "Examiner la consistance conceptuelle de la liberté."
},
{
id: 894,
notion: 'liberté',
intitule: "La liberté est-elle un luxe des sociétés riches ?",
piste1: "La liberté est-elle une préoccupation qui n'émerge que lorsque les besoins vitaux sont satisfaits ?",
piste2: "ou la liberté est-elle une exigence universelle, présente même dans la misère ?",
racine1: "La liberté est-elle le produit du développement économique ?",
racine2: "ou la liberté est-elle une aspiration fondamentale de toute condition humaine ?",
enjeu: "Évaluer le lien entre liberté et développement matériel."
},
{
id: 895,
notion: 'liberté',
intitule: "La liberté est-elle une illusion nécessaire ?",
piste1: "Même si la liberté n'existe pas, devons-nous faire comme si elle existait pour vivre ?",
piste2: "ou la liberté est-elle une réalité qui n'a pas besoin d'être une illusion ?",
racine1: "L'illusion de la liberté est-elle vitale pour l'action et la morale ?",
racine2: "ou la vérité du déterminisme peut-elle être vécue sans désespoir ?",
enjeu: "Examiner le statut pragmatique de la croyance en la liberté."
},
{
id: 896,
notion: 'liberté',
intitule: "La liberté peut-elle s'apprendre ?",
piste1: "Peut-on enseigner la liberté ou s'agit-il d'une expérience personnelle intransmissible ?",
piste2: "ou l'éducation à la liberté est-elle la tâche première de l'école ?",
racine1: "La liberté est-elle un savoir-faire qui s'acquiert ?",
racine2: "ou la liberté est-elle une disposition innée qu'il faut seulement préserver ?",
enjeu: "Déterminer si la liberté est objet d'apprentissage."
},
{
id: 897,
notion: 'liberté',
intitule: "La liberté est-elle la fin de l'histoire ?",
piste1: "L'histoire humaine tend-elle vers la réalisation universelle de la liberté ?",
piste2: "ou la liberté est-elle un combat éternel qui n'aura jamais de fin ?",
racine1: "La liberté est-elle le but ultime du progrès historique ?",
racine2: "ou la liberté est-elle toujours menacée et à reconquérir ?",
enjeu: "Examiner la place de la liberté dans la philosophie de l'histoire."
},
{
id: 898,
notion: 'liberté',
intitule: "La liberté peut-elle se définir ?",
piste1: "Peut-on donner une définition unique et satisfaisante de la liberté ?",
piste2: "ou la liberté est-elle un concept essentiellement contesté et ouvert ?",
racine1: "La liberté est-elle susceptible d'une définition close ?",
racine2: "ou la liberté échappe-t-elle à toute définition pour rester une expérience vive ?",
enjeu: "Interroger la possibilité et les limites d'une définition de la liberté."
},
{
id: 899,
notion: 'liberté',
intitule: "La liberté est-elle la condition de la créativité ?",
piste1: "Faut-il être libre pour créer ?",
piste2: "ou la création peut-elle naître de la contrainte et de la nécessité ?",
racine1: "La liberté est-elle le milieu indispensable de l'invention ?",
racine2: "ou la contrainte est-elle le véritable aiguillon de la créativité ?",
enjeu: "Examiner le lien entre liberté et création."
},
{
id: 900,
notion: 'liberté',
intitule: "La liberté est-elle un combat ?",
piste1: "La liberté doit-elle être constamment défendue et arrachée ?",
piste2: "ou la liberté est-elle un état de paix et d'harmonie une fois acquis ?",
racine1: "La liberté est-elle par nature conflictuelle et précaire ?",
racine2: "ou la liberté est-elle l'aboutissement d'un ordre juste ?",
enjeu: "Déterminer si la liberté est un état ou un combat permanent."
},
{
id: 901,
notion: 'nature',
intitule: "Qu'est-ce que la nature ?",
piste1: "La nature désigne-t-elle l'ensemble du monde matériel et de ses lois ?",
piste2: "ou renvoie-t-elle à l'essence intime et spécifique de chaque être ?",
racine1: "La nature est-elle le donné originel, ce qui existe sans intervention humaine ?",
racine2: "ou est-elle un principe interne de développement et de mouvement ?",
enjeu: "Déterminer les différentes acceptions du concept de nature."
},
{
id: 902,
notion: 'nature',
intitule: "La nature est-elle tout ce qui existe ?",
piste1: "L'univers entier, y compris l'homme et ses productions, fait-il partie de la nature ?",
piste2: "ou faut-il opposer la nature (ce qui naît de soi) et l'artifice (ce qui est fabriqué) ?",
racine1: "Les lois de la physique s'appliquent-elles uniformément à toute réalité ?",
racine2: "ou l'action humaine introduit-elle une rupture dans l'ordre naturel ?",
enjeu: "Délimiter l'extension du concept de nature."
},
{
id: 903,
notion: 'nature',
intitule: "L'homme fait-il partie de la nature ?",
piste1: "L'être humain est-il un animal comme les autres, soumis aux lois biologiques ?",
piste2: "ou sa conscience et sa culture l'arrachent-elles à l'ordre naturel ?",
racine1: "L'humanité est-elle une espèce animale parmi d'autres ?",
racine2: "ou l'homme se définit-il par sa capacité à s'opposer à la nature ?",
enjeu: "Interroger la place singulière de l'homme au sein du monde naturel."
},
{
id: 904,
notion: 'nature',
intitule: "La nature a-t-elle une histoire ?",
piste1: "Le monde naturel évolue-t-il et se transforme-t-il au fil du temps ?",
piste2: "ou la nature est-elle un cadre éternel et immuable où se déroule l'histoire humaine ?",
racine1: "L'évolution biologique et géologique prouve-t-elle que la nature a une histoire ?",
racine2: "ou l'histoire suppose-t-elle une conscience et une intentionnalité absentes de la nature ?",
enjeu: "Déterminer si la nature est le lieu du devenir ou de la permanence."
},
{
id: 905,
notion: 'nature',
intitule: "Y a-t-il une nature humaine ?",
piste1: "Existe-t-il une essence universelle et invariable qui définirait l'homme ?",
piste2: "ou l'homme est-il un être inachevé, dont l'existence précède l'essence ?",
racine1: "Les traits communs à tous les hommes suffisent-ils à définir une nature ?",
racine2: "ou l'homme se définit-il par sa liberté et son absence de détermination fixe ?",
enjeu: "Examiner la pertinence du concept de nature humaine."
},
{
id: 906,
notion: 'nature',
intitule: "La nature humaine est-elle fixe ou changeante ?",
piste1: "Les fondamentaux de l'humanité restent-ils identiques à travers les époques ?",
piste2: "ou l'homme se transforme-t-il radicalement au gré de l'histoire et des cultures ?",
racine1: "L'essence de l'homme est-elle soustraite au temps ?",
racine2: "ou l'historicité est-elle la caractéristique principale de la condition humaine ?",
enjeu: "Déterminer le rapport entre l'essence humaine et le temps historique."
},
{
id: 907,
notion: 'nature',
intitule: "L'homme est-il un animal comme les autres ?",
piste1: "La biologie suffit-elle à rendre compte de la réalité humaine ?",
piste2: "ou la culture et la raison créent-elles une différence de nature, et non de degré ?",
racine1: "L'appartenance au règne animal épuise-t-elle la définition de l'homme ?",
racine2: "ou le langage et la technique introduisent-ils une rupture ontologique ?",
enjeu: "Évaluer la continuité ou la rupture entre l'homme et l'animalité."
},
{
id: 908,
notion: 'nature',
intitule: "La culture est-elle contre-nature ?",
piste1: "Les institutions, les arts et les techniques s'opposent-ils aux lois naturelles ?",
piste2: "ou la culture est-elle le prolongement et l'accomplissement de la nature humaine ?",
racine1: "L'artifice est-il une violation de l'ordre naturel ?",
racine2: "ou est-il la réalisation de la puissance créatrice de la nature humaine ?",
enjeu: "Articuler les notions de nature et de culture."
},
{
id: 909,
notion: 'nature',
intitule: "La technique dénature-t-elle l'homme ?",
piste1: "Les outils et les machines nous éloignent-ils de notre condition naturelle ?",
piste2: "ou sont-ils l'expression de notre nature d'êtres fabricateurs ?",
racine1: "La technique est-elle une aliénation qui nous coupe du monde vivant ?",
racine2: "ou est-elle le moyen par lequel l'homme humanise la nature et se réalise ?",
enjeu: "Examiner l'impact de la technique sur l'essence humaine."
},
{
id: 910,
notion: 'nature',
intitule: "La nature est-elle une mère ou une marâtre ?",
piste1: "La nature pourvoit-elle aux besoins de l'homme avec bienveillance ?",
piste2: "ou est-elle un milieu hostile et indifférent à la survie humaine ?",
racine1: "Le monde est-il ordonné en vue du bien de l'homme ?",
racine2: "ou la nature est-elle aveugle, livrant l'homme à la lutte pour la vie ?",
enjeu: "Interroger la finalité et la bienveillance supposées de la nature."
},
{
id: 911,
notion: 'nature',
intitule: "Faut-il retourner à la nature ?",
piste1: "Le bonheur et la vertu résident-ils dans l'abandon de la civilisation ?",
piste2: "ou ce retour est-il une illusion nostalgique et régressive ?",
racine1: "L'état de nature est-il un paradis perdu ou un état de misère ?",
racine2: "ou le progrès de la civilisation est-il irréversible et nécessaire ?",
enjeu: "Évaluer le mythe du bon sauvage et la critique de la civilisation."
},
{
id: 912,
notion: 'nature',
intitule: "La nature est-elle un modèle à imiter ?",
piste1: "Devons-nous prendre la nature pour norme de nos actions et de nos lois ?",
piste2: "ou la nature est-elle un donné brut qu'il faut transformer et corriger ?",
racine1: "Ce qui est naturel est-il nécessairement bon et juste ?",
racine2: "ou la morale consiste-t-elle précisément à s'arracher aux déterminismes naturels ?",
enjeu: "Déterminer la valeur normative de la nature."
},
{
id: 913,
notion: 'nature',
intitule: "La nature a-t-elle des droits ?",
piste1: "Les écosystèmes et les espèces peuvent-ils être sujets de droits juridiques ?",
piste2: "ou les droits ne concernent-ils que les êtres doués de conscience et de parole ?",
racine1: "La nature a-t-elle une valeur intrinsèque indépendante de l'usage humain ?",
racine2: "ou ne lui accordons-nous une protection que pour préserver nos propres intérêts ?",
enjeu: "Examiner les fondements de l'éthique environnementale et du droit de la nature."
},
{
id: 914,
notion: 'nature',
intitule: "Avons-nous des devoirs envers la nature ?",
piste1: "Notre responsabilité s'étend-elle au-delà de l'humanité, vers le monde vivant ?",
piste2: "ou nos devoirs ne concernent-ils que les générations humaines futures ?",
racine1: "Le respect de la nature est-il un impératif moral catégorique ?",
racine2: "ou l'écologie n'est-elle qu'une prudence bien comprise pour la survie de l'espèce ?",
enjeu: "Déterminer l'étendue de la responsabilité humaine face au monde naturel."
},
{
id: 915,
notion: 'nature',
intitule: "La nature est-elle sacrée ?",
piste1: "Le monde naturel inspire-t-il un respect religieux et une crainte révérencielle ?",
piste2: "ou la désacralisation de la nature est-elle la condition de la science et de la technique ?",
racine1: "La nature est-elle une manifestation du divin ?",
racine2: "ou n'est-elle qu'un ensemble de mécanismes exploitables ?",
enjeu: "Interroger le rapport entre spiritualité et monde naturel."
},
{
id: 916,
notion: 'nature',
intitule: "La nature est-elle une machine ?",
piste1: "Le monde naturel fonctionne-t-il selon des mécanismes aveugles et prévisibles ?",
piste2: "ou est-il un organisme vivant, doué d'une organisation interne et de finalités ?",
racine1: "Le modèle mécaniste rend-il compte de la complexité du vivant ?",
racine2: "ou faut-il recourir à des principes vitaux irréductibles à la physique ?",
enjeu: "Confronter les conceptions mécaniste et vitaliste de la nature."
},
{
id: 917,
notion: 'nature',
intitule: "La nature a-t-elle une fin ?",
piste1: "L'univers et le vivant tendent-ils vers un but ou une perfection ?",
piste2: "ou l'évolution est-elle le fruit du hasard et de la nécessité, sans direction ?",
racine1: "Le finalisme est-il nécessaire pour comprendre l'organisation des êtres vivants ?",
racine2: "ou la sélection naturelle suffit-elle à expliquer l'apparence de la finalité ?",
enjeu: "Examiner la pertinence de la finalité dans l'explication de la nature."
},
{
id: 918,
notion: 'nature',
intitule: "Le hasard gouverne-t-il la nature ?",
piste1: "Les événements naturels sont-ils le fruit de rencontres fortuites et imprévisibles ?",
piste2: "ou tout phénomène naturel est-il strictement déterminé par des causes nécessaires ?",
racine1: "Le hasard n'est-il que le nom de notre ignorance des causes ?",
racine2: "ou l'indétermination est-elle une propriété fondamentale de la réalité physique et biologique ?",
enjeu: "Déterminer la part du hasard et de la nécessité dans les processus naturels."
},
{
id: 919,
notion: 'nature',
intitule: "La nature est-elle harmonieuse ?",
piste1: "Le monde naturel forme-t-il un écosystème équilibré et autorégulé ?",
piste2: "ou est-il le théâtre d'une lutte perpétuelle, violente et chaotique ?",
racine1: "L'équilibre de la nature est-il une loi ou une exception provisoire ?",
racine2: "ou la violence et la prédation sont-elles les moteurs de l'évolution ?",
enjeu: "Évaluer la réalité de l'harmonie naturelle."
},
{
id: 920,
notion: 'nature',
intitule: "La violence est-elle naturelle ?",
piste1: "L'agressivité et la destruction sont-elles inscrites dans le fonctionnement du vivant ?",
piste2: "ou la violence est-elle une pathologie ou une invention humaine ?",
racine1: "La loi de la jungle est-elle la loi universelle de la nature ?",
racine2: "ou la coopération et la symbiose sont-elles tout aussi naturelles ?",
enjeu: "Déterminer le statut de la violence dans l'ordre naturel."
},
{
id: 921,
notion: 'nature',
intitule: "La guerre est-elle naturelle ?",
piste1: "Le conflit armé est-il une pulsion biologique inhérente à l'espèce humaine ?",
piste2: "ou la guerre est-elle un phénomène culturel et politique contingent ?",
racine1: "L'homme est-il un loup pour l'homme par nature ?",
racine2: "ou la guerre est-elle le résultat de structures sociales et économiques ?",
enjeu: "Examiner l'origine naturelle ou culturelle de la guerre."
},
{
id: 922,
notion: 'nature',
intitule: "L'inégalité est-elle naturelle ?",
piste1: "Les différences de force, d'intelligence ou de statut sont-elles dictées par la nature ?",
piste2: "ou les inégalités sont-elles le produit de l'organisation sociale ?",
racine1: "La nature justifie-t-elle la hiérarchie sociale ?",
racine2: "ou l'égalité est-elle une exigence morale qui s'oppose aux faits naturels ?",
enjeu: "Déterminer le fondement des inégalités."
},
{
id: 923,
notion: 'nature',
intitule: "La domination est-elle naturelle ?",
piste1: "Le rapport de maître à esclave ou de domination masculine est-il fondé en nature ?",
piste2: "ou toute domination est-elle une construction historique et sociale ?",
racine1: "Certains êtres sont-ils nés pour commander et d'autres pour obéir ?",
racine2: "ou la domination est-elle une violence qui s'institutionnalise ?",
enjeu: "Critiquer l'argument naturaliste justifiant les rapports de domination."
},
{
id: 924,
notion: 'nature',
intitule: "Le droit naturel existe-t-il ?",
piste1: "Existe-t-il des lois juridiques universelles, inscrites dans la nature humaine ?",
piste2: "ou tout droit est-il une convention humaine, relative à une société donnée ?",
racine1: "La justice est-elle un fait de nature ou une invention de la raison ?",
racine2: "ou le droit positif est-il la seule réalité juridique ?",
enjeu: "Débattre de l'existence et de la portée du droit naturel."
},
{
id: 925,
notion: 'nature',
intitule: "La loi morale est-elle naturelle ?",
piste1: "Le sens du bien et du mal est-il inné, dicté par notre nature biologique ?",
piste2: "ou la morale est-elle une construction culturelle contre les pulsions naturelles ?",
racine1: "La conscience morale est-elle un instinct ?",
racine2: "ou est-elle l'expression de la raison s'opposant à la nature ?",
enjeu: "Déterminer l'origine de l'obligation morale."
},
{
id: 926,
notion: 'nature',
intitule: "Ce qui est naturel est-il bon ?",
piste1: "La nature est-elle le critère suprême de la valeur et de la moralité ?",
piste2: "ou la nature est-elle moralement indifférente, voire cruelle ?",
racine1: "L'argument de nature suffit-il à justifier une pratique ?",
racine2: "ou le devoir de l'homme est-il de corriger et d'améliorer la nature ?",
enjeu: "Examiner le sophisme naturaliste."
},
{
id: 927,
notion: 'nature',
intitule: "Ce qui est naturel est-il juste ?",
piste1: "L'ordre naturel fonde-t-il la justice sociale et politique ?",
piste2: "ou la justice est-elle une invention humaine visant à corriger l'ordre naturel ?",
racine1: "La justice consiste-t-elle à respecter les hiérarchies naturelles ?",
racine2: "ou consiste-t-elle à instaurer une égalité artificielle ?",
enjeu: "Confronter l'ordre de la nature et l'exigence de justice."
},
{
id: 928,
notion: 'nature',
intitule: "L'instinct est-il plus fiable que la raison ?",
piste1: "Les réponses spontanées de la nature en nous sont-elles plus sûres que le calcul ?",
piste2: "ou la raison est-elle nécessaire pour corriger les illusions de l'instinct ?",
racine1: "L'instinct est-il une sagesse naturelle infaillible ?",
racine2: "ou est-il un programme aveugle, inadapté aux situations complexes ?",
enjeu: "Évaluer la valeur cognitive et pratique de l'instinct."
},
{
id: 929,
notion: 'nature',
intitule: "La nature est-elle belle ?",
piste1: "Le monde naturel est-il la source première de notre expérience du beau ?",
piste2: "ou la beauté est-elle une projection de notre esprit sur les choses ?",
racine1: "La beauté naturelle est-elle objective ou subjective ?",
racine2: "ou la nature est-elle indifférente à la catégorie esthétique ?",
enjeu: "Déterminer le statut esthétique de la nature."
},
{
id: 930,
notion: 'nature',
intitule: "Le paysage est-il une invention ?",
piste1: "La nature se donne-t-elle à voir comme un tableau, un paysage ?",
piste2: "ou le paysage est-il une construction culturelle et historique du regard ?",
racine1: "Voir un paysage est-ce percevoir la nature brute ?",
racine2: "ou est-ce appliquer des catégories esthétiques héritées de l'art ?",
enjeu: "Examiner la médiation culturelle dans la perception de la nature."
},
{
id: 931,
notion: 'nature',
intitule: "L'art imite-t-il la nature ?",
piste1: "La fonction de l'art est-elle de reproduire fidèlement les formes naturelles ?",
piste2: "ou l'art crée-t-il ses propres règles, indépendamment du modèle naturel ?",
racine1: "La mimesis est-elle l'essence de la création artistique ?",
racine2: "ou l'art moderne a-t-il rompu avec toute imitation de la nature ?",
enjeu: "Déterminer le rapport entre création artistique et modèle naturel."
},
{
id: 932,
notion: 'nature',
intitule: "L'art surpasse-t-il la nature ?",
piste1: "L'œuvre d'art est-elle plus parfaite que les productions naturelles ?",
piste2: "ou l'art reste-t-il toujours inférieur à la richesse et à la vitalité du naturel ?",
racine1: "L'artiste corrige-t-il les imperfections de la nature ?",
racine2: "ou l'artifice est-il toujours une dégradation de la pureté naturelle ?",
enjeu: "Comparer la beauté naturelle et la beauté artistique."
},
{
id: 933,
notion: 'nature',
intitule: "La beauté naturelle est-elle supérieure à la beauté artistique ?",
piste1: "L'émotion face à un paysage ou un être vivant est-elle plus authentique ?",
piste2: "ou la beauté artistique est-elle plus élevée car elle porte la marque de l'esprit ?",
racine1: "La nature offre-t-elle une beauté pure, libre de toute intention ?",
racine2: "ou l'art est-il la manifestation supérieure de la liberté humaine ?",
enjeu: "Hiérarchiser les expériences esthétiques du naturel et de l'artificiel."
},
{
id: 934,
notion: 'nature',
intitule: "La nature nous parle-t-elle ?",
piste1: "Le monde naturel est-il porteur de sens, de messages ou de signes ?",
piste2: "ou la nature est-elle muette, et le sens n'est-il qu'une projection humaine ?",
racine1: "L'homme peut-il déchiffrer le langage des choses ?",
racine2: "ou le désenchantement du monde a-t-il réduit la nature au silence ?",
enjeu: "Interroger la signification du monde naturel pour la conscience humaine."
},
{
id: 935,
notion: 'nature',
intitule: "Peut-on connaître la nature ?",
piste1: "La science nous donne-t-elle un accès objectif et complet au monde naturel ?",
piste2: "ou la nature conserve-t-elle une part de mystère irréductible à la raison ?",
racine1: "La connaissance scientifique épuise-t-elle la réalité de la nature ?",
racine2: "ou existe-t-il d'autres voies d'accès (poésie, intuition, expérience vécue) ?",
enjeu: "Déterminer les modes et les limites de la connaissance de la nature."
},
{
id: 936,
notion: 'nature',
intitule: "La science épuise-t-elle la connaissance de la nature ?",
piste1: "Les équations et les modèles scientifiques disent-ils tout ce qu'il y a à savoir ?",
piste2: "ou la qualité sensible du monde (le « vert » de l'herbe) échappe-t-elle à la science ?",
racine1: "La nature objectivée par la science est-elle la vraie nature ?",
racine2: "ou la science ne retient-elle que les aspects quantifiables du réel ?",
enjeu: "Examiner les limites de l'approche scientifique face au monde naturel."
},
{
id: 937,
notion: 'nature',
intitule: "La nature est-elle mathématique ?",
piste1: "Les lois de la nature sont-elles écrites en langage mathématique ?",
piste2: "ou les mathématiques ne sont-elles qu'un outil commode inventé par l'homme ?",
racine1: "La structure du réel est-elle rationnelle et géométrique ?",
racine2: "ou plaquons-nous nos structures logiques sur un monde qui y échappe ?",
enjeu: "Interroger le rapport entre mathématiques et réalité physique."
},
{
id: 938,
notion: 'nature',
intitule: "La nature est-elle sauvage ?",
piste1: "La nature véritable est-elle celle qui échappe à toute emprise humaine ?",
piste2: "ou la nature est-elle aujourd'hui entièrement modelée et habitée par l'homme ?",
racine1: "L'idée de wilderness (nature vierge) a-t-elle encore un sens ?",
racine2: "ou toute nature est-elle une nature seconde, travaillée par l'histoire ?",
enjeu: "Déterminer le statut de la nature sauvage à l'Anthropocène."
},
{
id: 939,
notion: 'nature',
intitule: "Faut-il dompter la nature ?",
piste1: "La vocation de l'homme est-elle de se rendre « comme maître et possesseur de la nature » ?",
piste2: "ou cette volonté de puissance est-elle la cause de nos malheurs écologiques ?",
racine1: "La domination de la nature est-elle la condition de la liberté humaine ?",
racine2: "ou est-elle une illusion destructrice ?",
enjeu: "Évaluer le projet cartésien de maîtrise de la nature."
},
{
id: 940,
notion: 'nature',
intitule: "Faut-il préserver la nature ?",
piste1: "Avons-nous le devoir absolu de conserver les écosystèmes dans leur état originel ?",
piste2: "ou la nature est-elle faite pour être adaptée aux besoins humains ?",
racine1: "La préservation est-elle une fin en soi ?",
racine2: "ou n'est-elle qu'un moyen d'assurer la pérennité des ressources ?",
enjeu: "Débattre des objectifs de la conservation de la nature."
},
{
id: 941,
notion: 'nature',
intitule: "La nature sauvage a-t-elle une valeur ?",
piste1: "Les espaces non humanisés possèdent-ils une dignité propre ?",
piste2: "ou la valeur ne naît-elle que du travail et de l'appropriation humaine ?",
racine1: "L'absence d'empreinte humaine est-elle une richesse ou un vide ?",
racine2: "ou la valeur exige-t-elle une utilité ou une signification pour l'homme ?",
enjeu: "Déterminer la valeur intrinsèque de la nature non transformée."
},
{
id: 942,
notion: 'nature',
intitule: "L'écologie est-elle une politique ?",
piste1: "La défense de l'environnement exige-t-elle une refonte de nos institutions politiques ?",
piste2: "ou peut-elle se résoudre par de simples ajustements techniques et économiques ?",
racine1: "La crise écologique remet-elle en cause le modèle de l'État-nation et de la croissance ?",
racine2: "ou l'écologie est-elle un enjeu parmi d'autres dans le débat politique ?",
enjeu: "Examiner la portée politique des enjeux environnementaux."
},
{
id: 943,
notion: 'nature',
intitule: "La crise écologique est-elle une crise de la nature ?",
piste1: "Assistons-nous à la disparition de la nature au profit d'un monde entièrement artificiel ?",
piste2: "ou la nature est-elle indestructible, seules ses formes favorables à l'homme étant menacées ?",
racine1: "L'homme peut-il détruire la nature ?",
racine2: "ou ne détruit-il que les conditions de sa propre survie ?",
enjeu: "Analyser le sens philosophique de la crise environnementale."
},
{
id: 944,
notion: 'nature',
intitule: "Sommes-nous les maîtres de la nature ?",
piste1: "Le pouvoir technique nous donne-t-il un contrôle total sur le monde vivant et physique ?",
piste2: "ou la nature nous échappe-t-elle toujours, produisant des effets imprévus ?",
racine1: "La technique réalise-t-elle le rêve de toute-puissance humaine ?",
racine2: "ou révèle-t-elle notre vulnérabilité et notre dépendance ?",
enjeu: "Évaluer la réalité de la maîtrise humaine sur la nature."
},
{
id: 945,
notion: 'nature',
intitule: "La nature peut-elle se venger ?",
piste1: "Les catastrophes écologiques sont-elles des réactions de la nature agressée ?",
piste2: "ou cette métaphore masque-t-elle des mécanismes physiques aveugles ?",
racine1: "La nature a-t-elle une forme d'agence ou de subjectivité ?",
racine2: "ou le « retour de bâton » n'est-il que la conséquence mécanique de nos actions ?",
enjeu: "Interroger la personnification de la nature dans le discours écologique."
},
{
id: 946,
notion: 'nature',
intitule: "L'Anthropocène marque-t-il la fin de la nature ?",
piste1: "L'empreinte humaine étant devenue globale, la nature vierge a-t-elle disparu ?",
piste2: "ou assistons-nous à l'émergence d'une nouvelle nature, hybride et co-produite ?",
racine1: "La distinction entre nature et culture est-elle devenue obsolète ?",
racine2: "ou faut-il la repenser à nouveaux frais ?",
enjeu: "Penser le statut de la nature à l'époque de l'Anthropocène."
},
{
id: 947,
notion: 'nature',
intitule: "La nature est-elle une ressource ?",
piste1: "Le monde naturel n'est-il pour nous qu'un stock de matières premières à exploiter ?",
piste2: "ou cette vision instrumentale est-elle la cause de la destruction du monde ?",
racine1: "L'être des choses se réduit-il à leur valeur d'usage ?",
racine2: "ou la nature possède-t-elle une dignité qui interdit sa réduction au statut de ressource ?",
enjeu: "Critiquer la conception instrumentale de la nature."
},
{
id: 948,
notion: 'nature',
intitule: "La propriété de la nature est-elle légitime ?",
piste1: "Peut-on s'approprier la terre, les fleuves ou les espèces vivantes ?",
piste2: "ou la nature est-elle un bien commun inaliénable ?",
racine1: "Le droit de propriété s'étend-il légitimement aux éléments naturels ?",
racine2: "ou la terre n'appartient-elle à personne ?",
enjeu: "Débattre de la légitimité de l'appropriation privée de la nature."
},
{
id: 949,
notion: 'nature',
intitule: "L'animal est-il une chose ?",
piste1: "L'animal, dépourvu de raison, est-il un simple objet à notre disposition ?",
piste2: "ou sa sensibilité lui confère-t-elle un statut moral et juridique spécifique ?",
racine1: "Le droit romain (l'animal-chose) est-il encore défendable ?",
racine2: "ou faut-il reconnaître la personnalité juridique des animaux ?",
enjeu: "Examiner le statut ontologique et éthique de l'animal."
},
{
id: 950,
notion: 'nature',
intitule: "Les animaux ont-ils une nature ?",
piste1: "Chaque espèce animale possède-t-elle une essence et des besoins propres ?",
piste2: "ou l'animal est-il une matière malléable, modelable par la génétique et le dressage ?",
racine1: "Le respect de l'animal passe-t-il par le respect de sa nature spécifique ?",
racine2: "ou l'animal est-il un individu singulier au-delà de son espèce ?",
enjeu: "Déterminer si la notion de nature s'applique au vivant animal."
},
{
id: 951,
notion: 'nature',
intitule: "Souffrir est-il naturel ?",
piste1: "La douleur est-elle une donnée incontournable de la condition vivante ?",
piste2: "ou la souffrance est-elle un mal que la technique et la médecine doivent abolir ?",
racine1: "La souffrance a-t-elle un sens ou une utilité biologique ?",
racine2: "ou est-elle un scandale que la raison doit combattre ?",
enjeu: "Interroger le statut de la souffrance dans l'ordre naturel."
},
{
id: 952,
notion: 'nature',
intitule: "La mort est-elle naturelle ?",
piste1: "La finitude et la décomposition sont-elles des lois nécessaires de la vie ?",
piste2: "ou la mort est-elle un accident, un ennemi que la science finira par vaincre ?",
racine1: "Accepter la mort est-ce s'accorder avec la nature ?",
racine2: "ou lutter contre la mort est-il le propre de l'homme ?",
enjeu: "Déterminer le rapport entre la vie, la mort et la nature."
},
{
id: 953,
notion: 'nature',
intitule: "Faut-il lutter contre la nature ?",
piste1: "La survie et le progrès humains exigent-ils un combat permanent contre les forces naturelles ?",
piste2: "ou faut-il apprendre à composer et à collaborer avec le vivant ?",
racine1: "L'humanisation est-elle une victoire sur la nature ?",
racine2: "ou la sagesse consiste-t-elle à suivre le cours des choses ?",
enjeu: "Examiner les paradigmes de la lutte et de la coopération avec la nature."
},
{
id: 954,
notion: 'nature',
intitule: "La médecine est-elle contre-nature ?",
piste1: "Intervenir sur le corps et les maladies est-il une violation de l'ordre naturel ?",
piste2: "ou la médecine est-elle l'art d'aider la nature à se rétablir ?",
racine1: "Soigner, est-ce contrarier la sélection naturelle ?",
racine2: "ou est-ce réaliser la finalité interne de l'organisme vivant ?",
enjeu: "Évaluer la légitimité de l'intervention médicale au regard de la nature."
},
{
id: 955,
notion: 'nature',
intitule: "Le corps est-il une nature ?",
piste1: "Notre corps est-il un donné biologique immuable, notre « nature » intime ?",
piste2: "ou est-il une construction sociale, culturelle et technique ?",
racine1: "Le corps est-il un destin ?",
racine2: "ou est-il une matière que la liberté et la technique peuvent transformer ?",
enjeu: "Déterminer le statut du corps humain entre nature et culture."
},
{
id: 956,
notion: 'nature',
intitule: "Le genre est-il naturel ou culturel ?",
piste1: "La distinction masculin/féminin est-elle dictée par la biologie ?",
piste2: "ou est-elle une construction sociale et historique (le genre) ?",
racine1: "La nature fonde-t-elle les rôles sociaux et les identités ?",
racine2: "ou « on ne naît pas femme, on le devient » ?",
enjeu: "Débattre de l'articulation entre sexe biologique et identité de genre."
},
{
id: 957,
notion: 'nature',
intitule: "La sexualité est-elle naturelle ?",
piste1: "Le désir et les pratiques sexuelles sont-ils des pulsions biologiques innées ?",
piste2: "ou la sexualité humaine est-elle entièrement façonnée par la culture et l'histoire ?",
racine1: "Existe-t-il une norme naturelle de la sexualité ?",
racine2: "ou la sexualité est-elle le lieu de la plus grande liberté et inventivité humaines ?",
enjeu: "Examiner la part de nature et de culture dans la sexualité."
},
{
id: 958,
notion: 'nature',
intitule: "La famille est-elle une institution naturelle ?",
piste1: "Le regroupement parental autour des enfants est-il une donnée universelle de la nature ?",
piste2: "ou la famille est-elle une structure variable, produit de l'histoire et du droit ?",
racine1: "L'instinct maternel ou paternel fonde-t-il la famille ?",
racine2: "ou la famille est-elle une construction symbolique et juridique ?",
enjeu: "Déterminer le fondement naturel ou culturel de la famille."
},
{
id: 959,
notion: 'nature',
intitule: "L'amour est-il naturel ?",
piste1: "Le sentiment amoureux est-il une pulsion biologique au service de la reproduction ?",
piste2: "ou est-il une invention culturelle et poétique propre à l'humanité ?",
racine1: "L'amour se réduit-il à l'instinct sexuel sublimé ?",
racine2: "ou transcende-t-il radicalement les déterminismes naturels ?",
enjeu: "Interroger l'origine de l'expérience amoureuse."
},
{
id: 960,
notion: 'nature',
intitule: "L'égoïsme est-il naturel ?",
piste1: "L'instinct de conservation et l'intérêt personnel sont-ils nos moteurs premiers ?",
piste2: "ou l'homme est-il naturellement porté vers la sympathie et l'entraide ?",
racine1: "La nature humaine est-elle fondamentalement égoïste ?",
racine2: "ou l'altruisme est-il une donnée biologique et sociale primitive ?",
enjeu: "Déterminer la nature morale spontanée de l'être humain."
},
{
id: 961,
notion: 'nature',
intitule: "L'altruisme est-il naturel ?",
piste1: "La compassion et le souci d'autrui sont-ils inscrits dans notre biologie ?",
piste2: "ou l'altruisme est-il un effort moral contre notre nature égoïste ?",
racine1: "L'évolution favorise-t-elle la coopération et l'empathie ?",
racine2: "ou la morale est-elle une victoire artificielle sur la nature ?",
enjeu: "Examiner les fondements biologiques ou moraux de l'altruisme."
},
{
id: 962,
notion: 'nature',
intitule: "La société est-elle naturelle ?",
piste1: "L'homme est-il par nature un animal social et politique ?",
piste2: "ou la société est-elle le résultat d'un contrat artificiel passé entre individus ?",
racine1: "La sociabilité est-elle un instinct ?",
racine2: "ou est-elle une convention destinée à éviter la guerre de tous contre tous ?",
enjeu: "Déterminer l'origine naturelle ou contractuelle de la vie sociale."
},
{
id: 963,
notion: 'nature',
intitule: "L'État est-il naturel ?",
piste1: "L'organisation politique et la souveraineté découlent-elles de la nature humaine ?",
piste2: "ou l'État est-il une invention historique pour pallier les défauts de la nature ?",
racine1: "Le pouvoir politique est-il une donnée anthropologique universelle ?",
racine2: "ou est-il une construction artificielle et récente ?",
enjeu: "Interroger la naturalité de l'institution étatique."
},
{
id: 964,
notion: 'nature',
intitule: "Le langage est-il naturel ?",
piste1: "La faculté de parler est-elle un don de la nature inscrit dans nos gènes ?",
piste2: "ou le langage est-il une invention culturelle qui s'ajoute à notre biologie ?",
racine1: "L'homme est-il un animal parlant par essence ?",
racine2: "ou le langage est-il une technique acquise ?",
enjeu: "Débattre de l'origine innée ou acquise du langage."
},
{
id: 965,
notion: 'nature',
intitule: "La raison est-elle naturelle ?",
piste1: "La capacité de raisonner est-elle le propre de la nature humaine ?",
piste2: "ou la raison est-elle une discipline, un outil culturellement forgé ?",
racine1: "La rationalité est-elle une donnée biologique ?",
racine2: "ou est-elle le fruit de l'éducation et de l'histoire ?",
enjeu: "Déterminer le statut de la raison par rapport à la nature."
},
{
id: 966,
notion: 'nature',
intitule: "La liberté est-elle naturelle ?",
piste1: "L'homme naît-il libre, la société étant ce qui l'enchaîne ?",
piste2: "ou la liberté est-elle une conquête contre les déterminismes naturels ?",
racine1: "L'état de nature est-il un état de liberté absolue ?",
racine2: "ou la liberté est-elle une construction morale et politique ?",
enjeu: "Examiner le rapport entre nature et liberté."
},
{
id: 967,
notion: 'nature',
intitule: "La conscience est-elle naturelle ?",
piste1: "La conscience est-elle un produit de l'évolution biologique et cérébrale ?",
piste2: "ou introduit-elle une rupture, une transcendance au sein de la nature ?",
racine1: "Le subjectif peut-il s'expliquer par l'objectif naturel ?",
racine2: "ou la conscience est-elle un mystère irréductible aux lois de la nature ?",
enjeu: "Interroger la place de la conscience dans l'ordre naturel."
},
{
id: 968,
notion: 'nature',
intitule: "La religion est-elle naturelle ?",
piste1: "Le sentiment religieux et la croyance au sacré sont-ils universels et innés ?",
piste2: "ou la religion est-elle une construction sociale et une illusion ?",
racine1: "L'homme est-il un animal religieux par nature ?",
racine2: "ou la religion est-elle un phénomène culturel contingent ?",
enjeu: "Déterminer l'origine du phénomène religieux."
},
{
id: 969,
notion: 'nature',
intitule: "L'art est-il naturel ?",
piste1: "Le besoin de créer des formes et des fictions est-il une donnée de la nature humaine ?",
piste2: "ou l'art est-il un luxe culturel, une rupture avec l'utilité naturelle ?",
racine1: "L'esthétique est-elle une dimension biologique de l'adaptation ?",
racine2: "ou l'art est-il l'affirmation de la liberté contre la nécessité ?",
enjeu: "Examiner l'ancrage naturel de l'activité artistique."
},
{
id: 970,
notion: 'nature',
intitule: "Le travail est-il naturel ?",
piste1: "Transformer la nature pour survivre est-il une loi universelle de la condition humaine ?",
piste2: "ou le travail est-il une malédiction, une chute hors de l'état de nature ?",
racine1: "Le travail est-il l'essence de l'homme, ce par quoi il s'humanise ?",
racine2: "ou est-il une contrainte pénible que le progrès technique devrait abolir ?",
enjeu: "Déterminer la valeur anthropologique du travail."
},
{
id: 971,
notion: 'nature',
intitule: "L'ennui est-il naturel ?",
piste1: "Le sentiment du vide et de l'absurdité est-il une donnée de la conscience humaine ?",
piste2: "ou l'ennui est-il le produit des sociétés modernes désenchantées ?",
racine1: "L'ennui révèle-t-il notre nature d'êtres conscients de leur finitude ?",
racine2: "ou est-il une pathologie sociale liée à l'oisiveté ?",
enjeu: "Interroger la nature et l'origine de l'expérience de l'ennui."
},
{
id: 972,
notion: 'nature',
intitule: "Le désir est-il naturel ?",
piste1: "Le désir n'est-il que l'expression de besoins biologiques insatisfaits ?",
piste2: "ou est-il une structure infinie, irréductible à la simple nature ?",
racine1: "Le désir se réduit-il à l'instinct ?",
racine2: "ou le désir humain est-il toujours médiatisé par l'imagination et la culture ?",
enjeu: "Déterminer la part de biologie et de culture dans le désir."
},
{
id: 973,
notion: 'nature',
intitule: "La peur est-elle naturelle ?",
piste1: "L'angoisse et la peur sont-elles des réflexes de survie inscrits dans nos gènes ?",
piste2: "ou la peur est-elle un instrument de contrôle social et politique ?",
racine1: "La peur est-elle une passion utile et naturelle ?",
racine2: "ou est-elle une maladie de l'âme que la raison doit vaincre ?",
enjeu: "Examiner le statut anthropologique et politique de la peur."
},
{
id: 974,
notion: 'nature',
intitule: "La violence est-elle une pulsion naturelle ?",
piste1: "L'agressivité est-elle un instinct de mort ou de domination inné ?",
piste2: "ou la violence est-elle une réaction à des conditions sociales injustes ?",
racine1: "L'homme a-t-il une nature violente ?",
racine2: "ou la violence est-elle un échec de la socialisation ?",
enjeu: "Débattre de l'origine de la violence humaine."
},
{
id: 975,
notion: 'nature',
intitule: "L'homme est-il naturellement bon ?",
piste1: "La bonté et la pitié sont-elles des sentiments primitifs et naturels ?",
piste2: "ou l'homme est-il naturellement égoïste et cruel ?",
racine1: "La nature humaine est-elle innocente avant la corruption sociale ?",
racine2: "ou le mal est-il une donnée originaire de la condition humaine ?",
enjeu: "Examiner la thèse de la bonté naturelle (Rousseau)."
},
{
id: 976,
notion: 'nature',
intitule: "L'homme est-il naturellement méchant ?",
piste1: "L'égoïsme et la cruauté sont-ils les véritables moteurs de la nature humaine ?",
piste2: "ou cette vision cynique ignore-t-elle notre capacité naturelle à la sympathie ?",
racine1: "L'homme est-il un loup pour l'homme ?",
racine2: "ou la méchanceté est-elle le fruit de la peur et de la société ?",
enjeu: "Examiner la thèse de la méchanceté naturelle (Hobbes)."
},
{
id: 977,
notion: 'nature',
intitule: "L'enfant est-il proche de la nature ?",
piste1: "L'enfance représente-t-elle l'état de nature, l'innocence et la spontanéité ?",
piste2: "ou l'enfant est-il un être inachevé, brut, qui doit être civilisé ?",
racine1: "L'enfant est-il un modèle de pureté naturelle ?",
racine2: "ou est-il dominé par des pulsions sauvages qu'il faut éduquer ?",
enjeu: "Interroger la représentation de l'enfance et son rapport à la nature."
},
{
id: 978,
notion: 'nature',
intitule: "Le sauvage est-il un modèle ?",
piste1: "Les peuples premiers incarnent-ils une sagesse et une harmonie naturelles perdues ?",
piste2: "ou cette vision est-elle un mythe romantique qui nie leur complexité culturelle ?",
racine1: "L'état de nature est-il un idéal de vertu et de bonheur ?",
racine2: "ou est-il un état de misère et de barbarie ?",
enjeu: "Critiquer le mythe du bon sauvage."
},
{
id: 979,
notion: 'nature',
intitule: "La civilisation corrompt-elle la nature humaine ?",
piste1: "Le développement des arts, des sciences et des lois dégrade-t-il notre bonté originelle ?",
piste2: "ou la civilisation est-elle le processus par lequel l'homme réalise sa nature rationnelle ?",
racine1: "Le progrès social est-il une décadence morale ?",
racine2: "ou est-il une élévation éthique et spirituelle ?",
enjeu: "Évaluer l'impact de la civilisation sur l'essence humaine."
},
{
id: 980,
notion: 'nature',
intitule: "Le mythe de l'âge d'or est-il fondateur ?",
piste1: "L'humanité a-t-elle besoin de rêver à un paradis naturel originel pour donner sens à l'histoire ?",
piste2: "ou ce mythe est-il une illusion qui nous empêche d'affronter le présent ?",
racine1: "La nostalgie de la nature perdue est-elle un moteur de l'action humaine ?",
racine2: "ou est-elle une fuite réactionnaire devant le progrès ?",
enjeu: "Analyser la fonction anthropologique du mythe de l'âge d'or."
},
{
id: 981,
notion: 'nature',
intitule: "La nature est-elle une construction sociale ?",
piste1: "L'idée même de « nature » n'est-elle qu'un concept produit par des sociétés humaines à un moment donné ?",
piste2: "ou la nature est-elle une réalité indépendante de nos représentations ?",
racine1: "Nos catégories (sauvage, domestique, pur, impur) façonnent-elles la nature ?",
racine2: "ou la nature impose-t-elle ses limites à nos constructions ?",
enjeu: "Examiner la part de construction culturelle dans notre rapport à la nature."
},
{
id: 982,
notion: 'nature',
intitule: "La nature est-elle un concept idéologique ?",
piste1: "L'appel à la nature sert-il à justifier l'ordre établi et les dominations ?",
piste2: "ou la nature est-elle un point d'appui critique contre les excès de la société ?",
racine1: "Le discours sur la nature masque-t-il des intérêts politiques ?",
racine2: "ou la nature est-elle une réalité objective qui résiste à l'idéologie ?",
enjeu: "Dénoncer ou défendre l'usage politique du concept de nature."
},
{
id: 983,
notion: 'nature',
intitule: "L'appel à la nature est-il un argument valide ?",
piste1: "Invoquer la nature suffit-il à trancher un débat moral ou politique ?",
piste2: "ou est-ce un sophisme qui confond le fait et le droit ?",
racine1: "Peut-on déduire ce qui doit être de ce qui est naturellement ?",
racine2: "ou l'argument de nature est-il un paravent pour l'intolérance ?",
enjeu: "Évaluer la validité logique de l'argument naturaliste."
},
{
id: 984,
notion: 'nature',
intitule: "Peut-on agir contre nature ?",
piste1: "L'homme a-t-il le pouvoir de violer les lois de la nature ?",
piste2: "ou tout ce que l'homme fait est-il, par définition, naturel ?",
racine1: "L'artifice est-il une transgression de la nature ?",
racine2: "ou n'est-il que le déploiement des potentialités de la nature humaine ?",
enjeu: "Déterminer s'il est logiquement possible d'agir « contre nature »."
},
{
id: 985,
notion: 'nature',
intitule: "Le monstrueux est-il contre-nature ?",
piste1: "Le monstre est-il une erreur, une violation des lois naturelles ?",
piste2: "ou est-il une variation naturelle, révélatrice de la puissance créatrice de la nature ?",
racine1: "L'anomalie est-elle une faute de la nature ?",
racine2: "ou est-elle le moteur de l'évolution et de la nouveauté ?",
enjeu: "Interroger le statut de l'anomalie et de la monstruosité."
},
{
id: 986,
notion: 'nature',
intitule: "Le clonage est-il contre-nature ?",
piste1: "La reproduction asexuée et la manipulation génétique violent-elles l'ordre naturel ?",
piste2: "ou ne sont-elles que l'extension des pouvoirs de la technique humaine ?",
racine1: "Y a-t-il une limite naturelle à l'intervention technique sur le vivant ?",
racine2: "ou la nature est-elle une matière indéfiniment transformable ?",
enjeu: "Débattre des limites éthiques de la manipulation du vivant."
},
{
id: 987,
notion: 'nature',
intitule: "Les OGM sont-ils contre-nature ?",
piste1: "Le transfert de gènes entre espèces rompt-il une barrière naturelle sacrée ?",
piste2: "ou n'est-il qu'une accélération des mécanismes naturels de mutation ?",
racine1: "L'hybridation artificielle est-elle un danger pour la biodiversité ?",
racine2: "ou est-elle une nouvelle étape de l'évolution dirigée par l'homme ?",
enjeu: "Examiner la frontière entre sélection naturelle et manipulation génétique."
},
{
id: 988,
notion: 'nature',
intitule: "L'intelligence artificielle est-elle naturelle ?",
piste1: "L'IA, produite par l'homme, fait-elle partie du règne naturel ?",
piste2: "ou introduit-elle une forme d'existence radicalement étrangère à la nature ?",
racine1: "L'esprit artificiel est-il un prolongement de la nature humaine ?",
racine2: "ou est-il une entité post-humaine qui échappe à la biologie ?",
enjeu: "Interroger le statut ontologique de l'intelligence artificielle."
},
{
id: 989,
notion: 'nature',
intitule: "Le virtuel est-il naturel ?",
piste1: "Les mondes numériques et les simulations font-ils partie de notre environnement naturel ?",
piste2: "ou nous coupent-ils radicalement de la réalité physique et charnelle ?",
racine1: "Le virtuel est-il une seconde nature ?",
racine2: "ou est-il une illusion qui nous aliène ?",
enjeu: "Déterminer le rapport entre le virtuel et la réalité naturelle."
},
{
id: 990,
notion: 'nature',
intitule: "L'univers est-il naturel ?",
piste1: "Le cosmos dans son ensemble est-il ce que nous appelons la nature ?",
piste2: "ou la nature ne désigne-t-elle que la biosphère, le monde vivant et terrestre ?",
racine1: "La nature inclut-elle les étoiles et le vide spatial ?",
racine2: "ou la nature est-elle essentiellement le milieu de vie de l'homme ?",
enjeu: "Délimiter l'extension cosmologique ou terrestre de la nature."
},
{
id: 991,
notion: 'nature',
intitule: "La nature a-t-elle un centre ?",
piste1: "L'univers est-il ordonné autour d'un point ou d'un principe central ?",
piste2: "ou la nature est-elle décentrée, infinie et sans lieu privilégié ?",
racine1: "La Terre est-elle le centre de la nature ?",
racine2: "ou la révolution copernicienne a-t-elle détruit toute centralité ?",
enjeu: "Interroger la structure spatiale et symbolique de l'univers."
},
{
id: 992,
notion: 'nature',
intitule: "L'homme est-il le centre de la nature ?",
piste1: "Le monde a-t-il été créé pour l'homme, qui en serait le roi et la fin ?",
piste2: "ou l'homme n'est-il qu'un accident insignifiant dans l'immensité du cosmos ?",
racine1: "L'anthropocentrisme est-il une vérité philosophique ?",
racine2: "ou est-il une illusion narcissique ?",
enjeu: "Évaluer la place de l'homme dans l'ordre du monde."
},
{
id: 993,
notion: 'nature',
intitule: "La nature est-elle indifférente à l'homme ?",
piste1: "Le cosmos et le vivant ignorent-ils nos souffrances et nos projets ?",
piste2: "ou existe-t-il une connivence secrète entre l'esprit humain et le monde ?",
racine1: "Le silence des espaces infinis est-il angoissant ?",
racine2: "ou la nature est-elle une patrie accueillante ?",
enjeu: "Examiner le sentiment cosmique et le rapport affectif au monde."
},
{
id: 994,
notion: 'nature',
intitule: "Le cosmos est-il vivant ?",
piste1: "L'univers est-il un grand organisme animé, doué d'une âme ?",
piste2: "ou n'est-il qu'une étendue de matière inerte soumise à des lois mécaniques ?",
racine1: "Le vitalisme cosmique est-il une vision poétique ou une hypothèse scientifique ?",
racine2: "ou le mécanisme a-t-il définitivement désenchanté le monde ?",
enjeu: "Débattre de la nature vivante ou inerte de l'univers."
},
{
id: 995,
notion: 'nature',
intitule: "La nature est-elle divine ?",
piste1: "Dieu et la nature sont-ils une seule et même substance (panthéisme) ?",
piste2: "ou la nature est-elle une création distincte de son Créateur ?",
racine1: "Admirer la nature, est-ce adorer Dieu ?",
racine2: "ou la science de la nature s'oppose-t-elle à la théologie ?",
enjeu: "Examiner le rapport entre théologie et philosophie de la nature."
},
{
id: 996,
notion: 'nature',
intitule: "Dieu et la nature sont-ils la même chose ?",
piste1: "Faut-il identifier la puissance infinie de la nature à l'idée de Dieu (Spinoza) ?",
piste2: "ou la transcendance divine exige-t-elle de séparer Dieu du monde matériel ?",
racine1: "Le naturalisme est-il un athéisme déguisé ?",
racine2: "ou est-il la forme la plus pure de la piété ?",
enjeu: "Analyser la thèse panthéiste (Deus sive Natura)."
},
{
id: 997,
notion: 'nature',
intitule: "La nature est-elle une création ?",
piste1: "Le monde naturel est-il l'œuvre d'une intelligence ou d'une volonté supérieure ?",
piste2: "ou la nature est-elle incréée, existant de toute éternité par elle-même ?",
racine1: "L'ordre de la nature suppose-t-il un ordonnateur ?",
racine2: "ou l'auto-organisation de la matière suffit-elle à l'expliquer ?",
enjeu: "Débattre de l'origine du monde naturel."
},
{
id: 998,
notion: 'nature',
intitule: "La nature a-t-elle un sens ?",
piste1: "L'évolution de l'univers et de la vie tend-elle vers un but ou une signification ?",
piste2: "ou la nature est-elle un chaos absurde, dépourvu de toute finalité ?",
racine1: "Peut-on déchiffrer un message dans le livre de la nature ?",
racine2: "ou le sens est-il exclusivement une projection de la conscience humaine ?",
enjeu: "Interroger la finalité et la signification du monde naturel."
},
{
id: 999,
notion: 'nature',
intitule: "La nature est-elle muette ?",
piste1: "Le monde naturel est-il dépourvu de parole et de logos ?",
piste2: "ou la nature s'exprime-t-elle à travers ses formes, ses rythmes et sa beauté ?",
racine1: "Le langage est-il le propre de l'homme, laissant la nature au silence ?",
racine2: "ou la poésie et l'art sont-ils l'écoute de la parole du monde ?",
enjeu: "Déterminer si la nature possède une forme d'expressivité."
},
{
id: 1000,
notion: 'nature',
intitule: "La nature peut-elle se définir ?",
piste1: "Peut-on enfermer la totalité du monde naturel dans une définition conceptuelle ?",
piste2: "ou la nature échappe-t-elle à nos concepts, étant ce qui nous précède et nous englobe ?",
racine1: "La nature est-elle un objet de savoir comme les autres ?",
racine2: "ou est-elle le fond indéfinissable sur lequel se détache toute définition ?",
enjeu: "Interroger la possibilité et les limites d'une définition de la nature."
},
{
id: 1001,
notion: 'raison',
intitule: "Qu'est-ce que la raison ?",
piste1: "La raison est-elle la faculté de distinguer le vrai du faux et le bien du mal ?",
piste2: "ou est-elle la capacité d'agir conformément à des principes universels ?",
racine1: "La raison est-elle d'abord une faculté théorique de connaissance ?",
racine2: "ou est-elle une faculté pratique de détermination de la volonté ?",
enjeu: "Établir une définition philosophique de la raison."
},
{
id: 1002,
notion: 'raison',
intitule: "La raison est-elle propre à l'homme ?",
piste1: "Seul l'être humain possède-t-il la faculté de raisonner ?",
piste2: "ou peut-on attribuer une forme de rationalité aux animaux ou aux machines ?",
racine1: "La raison suppose-t-elle le langage et la conscience de soi ?",
racine2: "ou l'intelligence adaptative suffit-elle à définir la raison ?",
enjeu: "Déterminer la spécificité anthropologique de la raison."
},
{
id: 1003,
notion: 'raison',
intitule: "La raison est-elle universelle ?",
piste1: "Les principes de la raison sont-ils les mêmes pour tous les êtres humains ?",
piste2: "ou la raison varie-t-elle selon les cultures et les époques ?",
racine1: "Existe-t-il une raison universelle transcendant les différences culturelles ?",
racine2: "ou la raison n'est-elle qu'une construction historique et relative ?",
enjeu: "Examiner la prétention à l'universalité de la raison."
},
{
id: 1004,
notion: 'raison',
intitule: "La raison est-elle innée ou acquise ?",
piste1: "Naît-on avec la raison ou l'acquiert-on par l'éducation et l'expérience ?",
piste2: "ou la raison est-elle une disposition naturelle qui se développe ?",
racine1: "L'esprit humain possède-t-il des structures rationnelles a priori ?",
racine2: "ou l'esprit est-il une table rase façonnée par l'expérience ?",
enjeu: "Déterminer l'origine de la faculté rationnelle."
},
{
id: 1005,
notion: 'raison',
intitule: "La raison s'oppose-t-elle à la passion ?",
piste1: "La raison et la passion sont-elles deux forces antagonistes en l'homme ?",
piste2: "ou peuvent-elles collaborer et s'éclairer mutuellement ?",
racine1: "La passion est-elle par essence déraisonnable et aveugle ?",
racine2: "ou la raison a-t-elle besoin des passions pour se mettre en mouvement ?",
enjeu: "Examiner le rapport conflictuel ou complémentaire entre raison et passion."
},
{
id: 1006,
notion: 'raison',
intitule: "La raison peut-elle maîtriser les passions ?",
piste1: "La raison est-elle capable de gouverner nos désirs et nos émotions ?",
piste2: "ou est-elle impuissante face à la force des passions ?",
racine1: "La raison est-elle un frein ou un guide pour les passions ?",
racine2: "ou la passion est-elle toujours plus forte que les arguments de la raison ?",
enjeu: "Évaluer le pouvoir de la raison sur la vie affective."
},
{
id: 1007,
notion: 'raison',
intitule: "La raison est-elle une faculté de calcul ?",
piste1: "Raisonner, est-ce calculer les moyens les plus efficaces pour atteindre une fin ?",
piste2: "ou la raison a-t-elle une vocation plus haute que le simple calcul utilitaire ?",
racine1: "La raison instrumentale épuise-t-elle la notion de raison ?",
racine2: "ou existe-t-il une raison capable de juger des fins elles-mêmes ?",
enjeu: "Distinguer la raison instrumentale de la raison critique."
},
{
id: 1008,
notion: 'raison',
intitule: "La raison est-elle une faculté de jugement ?",
piste1: "La raison consiste-t-elle à appliquer des règles universelles à des cas particuliers ?",
piste2: "ou le jugement échappe-t-il parfois aux règles de la raison ?",
racine1: "Le jugement est-il l'opération fondamentale de la raison ?",
racine2: "ou la raison ne fournit-elle que des concepts, laissant le jugement à l'expérience ?",
enjeu: "Déterminer le rôle du jugement dans l'exercice de la raison."
},
{
id: 1009,
notion: 'raison',
intitule: "La raison est-elle une lumière naturelle ?",
piste1: "La raison est-elle une évidence innée qui éclaire l'esprit sans effort ?",
piste2: "ou est-elle le résultat d'un effort laborieux de réflexion et d'apprentissage ?",
racine1: "La vérité est-elle naturellement accessible à tout esprit attentif ?",
racine2: "ou la raison doit-elle se construire contre les préjugés et les illusions ?",
enjeu: "Examiner la métaphore cartésienne de la lumière naturelle."
},
{
id: 1010,
notion: 'raison',
intitule: "La raison a-t-elle des limites ?",
piste1: "La raison peut-elle tout connaître et tout expliquer ?",
piste2: "ou existe-t-il des domaines (la foi, l'infini, l'absurde) qui lui échappent ?",
racine1: "La raison est-elle toute-puissante dans l'ordre de la connaissance ?",
racine2: "ou doit-elle reconnaître ses propres bornes pour éviter l'illusion ?",
enjeu: "Déterminer les limites de la raison (critique kantienne)."
},
{
id: 1011,
notion: 'raison',
intitule: "La raison nous sépare-t-elle de la nature ?",
piste1: "La raison est-elle ce qui arrache l'homme à l'ordre naturel et à l'instinct ?",
piste2: "ou est-elle au contraire le développement le plus accompli de la nature ?",
racine1: "La raison est-elle une rupture avec la nature animale ?",
racine2: "ou l'homme rationnel est-il l'aboutissement de l'évolution naturelle ?",
enjeu: "Interroger le rapport entre raison et nature."
},
{
id: 1012,
notion: 'raison',
intitule: "La raison est-elle la vérité de l'homme ?",
piste1: "L'essence de l'homme réside-t-elle dans sa capacité à raisonner ?",
piste2: "ou l'homme est-il défini par d'autres traits (langage, travail, sociabilité) ?",
racine1: "L'animal rationnel est-il la définition adéquate de l'homme ?",
racine2: "ou la raison n'est-elle qu'un instrument au service d'une existence plus large ?",
enjeu: "Déterminer la place centrale de la raison dans l'anthropologie philosophique."
},
{
id: 1013,
notion: 'raison',
intitule: "La raison est-elle une essence ou une fonction ?",
piste1: "La raison est-elle une substance ou une nature permanente en l'homme ?",
piste2: "ou n'est-elle qu'une fonction, une activité que l'esprit exerce ?",
racine1: "La raison existe-t-elle en soi, indépendamment de son exercice ?",
racine2: "ou la raison n'est-elle rien d'autre que l'acte de raisonner ?",
enjeu: "Déterminer le statut ontologique de la raison."
},
{
id: 1014,
notion: 'raison',
intitule: "La raison est-elle une norme ?",
piste1: "La raison impose-t-elle des règles de pensée et d'action que nous devons suivre ?",
piste2: "ou est-elle seulement une description de la façon dont nous pensons ?",
racine1: "La raison est-elle normative, prescrivant ce qu'il faut penser ?",
racine2: "ou est-elle descriptive, constatant seulement les lois de notre esprit ?",
enjeu: "Examiner le caractère normatif de la raison."
},
{
id: 1015,
notion: 'raison',
intitule: "La raison est-elle une instance de régulation ?",
piste1: "La raison a-t-elle pour rôle d'harmoniser nos connaissances et nos actions ?",
piste2: "ou est-elle une force de rupture et de contestation ?",
racine1: "La raison vise-t-elle l'unité et la cohérence du système ?",
racine2: "ou la raison critique brise-t-elle les fausses unifications ?",
enjeu: "Déterminer la fonction régulatrice ou critique de la raison."
},
{
id: 1016,
notion: 'raison',
intitule: "La raison est-elle une capacité d'abstraction ?",
piste1: "Raisonner, est-ce s'éloigner du concret pour saisir des concepts universels ?",
piste2: "ou la raison peut-elle saisir le singulier et le concret ?",
racine1: "L'abstraction est-elle la condition de toute connaissance rationnelle ?",
racine2: "ou l'abstraction est-elle un appauvrissement du réel ?",
enjeu: "Examiner le rapport entre raison et abstraction."
},
{
id: 1017,
notion: 'raison',
intitule: "La raison est-elle une faculté de synthèse ?",
piste1: "La raison unit-elle les connaissances dispersées en un système cohérent ?",
piste2: "ou l'analyse et la division sont-elles ses opérations principales ?",
racine1: "La raison cherche-t-elle l'unité du divers ?",
racine2: "ou la raison est-elle d'abord un pouvoir de distinction et de séparation ?",
enjeu: "Déterminer si la raison unit ou divise."
},
{
id: 1018,
notion: 'raison',
intitule: "La raison est-elle une puissance d'unification ?",
piste1: "La raison rassemble-t-elle le sujet et l'objet, la théorie et la pratique ?",
piste2: "ou maintient-elle une distance irréductible entre eux ?",
racine1: "La raison est-elle le lieu de la réconciliation des contraires ?",
racine2: "ou la raison est-elle le principe de la distinction et de l'opposition ?",
enjeu: "Examiner le pouvoir unificateur de la raison."
},
{
id: 1019,
notion: 'raison',
intitule: "La raison est-elle une instance de légitimation ?",
piste1: "La raison est-elle ce qui donne leur fondement et leur validité à nos croyances ?",
piste2: "ou est-elle elle-même une croyance parmi d'autres ?",
racine1: "La raison peut-elle se justifier elle-même sans cercle vicieux ?",
racine2: "ou la raison est-elle le tribunal suprême qui ne peut être jugé ?",
enjeu: "Déterminer si la raison peut fonder sa propre légitimité."
},
{
id: 1020,
notion: 'raison',
intitule: "La raison est-elle ce qui nous rend humains ?",
piste1: "L'humanité se définit-elle exclusivement par l'usage de la raison ?",
piste2: "ou l'humanité inclut-elle des dimensions (affectives, corporelles) que la raison ignore ?",
racine1: "Perdre la raison, est-ce perdre son humanité ?",
racine2: "ou l'humanité est-elle plus large que la seule rationalité ?",
enjeu: "Évaluer la place de la raison dans la définition de l'humain."
},
{
id: 1021,
notion: 'raison',
intitule: "La raison est-elle froide et sans affect ?",
piste1: "La raison exige-t-elle l'absence totale d'émotion pour fonctionner ?",
piste2: "ou peut-elle être animée par des passions nobles (amour de la vérité) ?",
racine1: "L'objectivité rationnelle suppose-t-elle la neutralité affective ?",
racine2: "ou la raison a-t-elle ses propres passions et enthousiasmes ?",
enjeu: "Examiner la dimension affective ou neutre de la raison."
},
{
id: 1022,
notion: 'raison',
intitule: "La passion est-elle toujours déraisonnable ?",
piste1: "La passion est-elle par définition l'ennemie de la raison ?",
piste2: "ou existe-t-il des passions rationnelles ou raisonnables ?",
racine1: "La passion est-elle un trouble qui aveugle le jugement ?",
racine2: "ou la passion peut-elle être une énergie orientée par la raison ?",
enjeu: "Déterminer si la passion est intrinsèquement irrationnelle."
},
{
id: 1023,
notion: 'raison',
intitule: "La raison a-t-elle besoin des passions pour agir ?",
piste1: "La raison est-elle par elle-même un moteur de l'action ?",
piste2: "ou a-t-elle besoin des passions pour se mettre en mouvement ?",
racine1: "La raison peut-elle déterminer la volonté sans l'aide d'un penchant sensible ?",
racine2: "ou la raison est-elle inerte sans le concours des passions ?",
enjeu: "Examiner le rôle moteur des passions dans l'action rationnelle."
},
{
id: 1024,
notion: 'raison',
intitule: "La raison et le désir sont-ils incompatibles ?",
piste1: "Désirer, est-ce nécessairement faire taire la raison ?",
piste2: "ou peut-on désirer rationnellement ?",
racine1: "Le désir est-il par essence aveugle et insatiable ?",
racine2: "ou la raison peut-elle éclairer et orienter le désir ?",
enjeu: "Déterminer la compatibilité entre raison et désir."
},
{
id: 1025,
notion: 'raison',
intitule: "La raison peut-elle désirer ?",
piste1: "Existe-t-il un désir propre à la raison (désir de savoir, de vérité) ?",
piste2: "ou le désir appartient-il exclusivement à la sphère sensible ?",
racine1: "La raison est-elle purement spéculative et sans désir ?",
racine2: "ou la raison est-elle animée par un éros de la connaissance ?",
enjeu: "Examiner si la raison peut être source de désir."
},
{
id: 1026,
notion: 'raison',
intitule: "La raison est-elle une passion comme les autres ?",
piste1: "La volonté de raisonner est-elle elle-même une passion parmi d'autres ?",
piste2: "ou la raison se tient-elle au-dessus des passions pour les juger ?",
racine1: "La raison est-elle soumise aux mêmes déterminismes que les passions ?",
racine2: "ou la raison est-elle la faculté qui s'affranchit des passions ?",
enjeu: "Déterminer le statut de la raison par rapport aux passions."
},
{
id: 1027,
notion: 'raison',
intitule: "La raison est-elle l'ennemie du bonheur ?",
piste1: "La raison, en nous rendant lucides, nous empêche-t-elle d'être heureux ?",
piste2: "ou est-elle au contraire la condition nécessaire du véritable bonheur ?",
racine1: "Le bonheur suppose-t-il une part d'illusion que la raison dissipe ?",
racine2: "ou le bonheur véritable est-il la satisfaction de la raison ?",
enjeu: "Examiner le rapport entre raison et bonheur."
},
{
id: 1028,
notion: 'raison',
intitule: "La raison peut-elle nous rendre heureux ?",
piste1: "La sagesse rationnelle suffit-elle à assurer le bonheur ?",
piste2: "ou le bonheur dépend-il de facteurs extérieurs à la raison ?",
racine1: "La vertu rationnelle est-elle suffisante pour le bonheur ?",
racine2: "ou le bonheur exige-t-il des biens sensibles que la raison ne peut garantir ?",
enjeu: "Déterminer la capacité de la raison à produire le bonheur."
},
{
id: 1029,
notion: 'raison',
intitule: "La raison est-elle une force ou une faiblesse ?",
piste1: "La raison est-elle la plus grande force de l'homme ?",
piste2: "ou est-elle une faiblesse qui nous coupe de la vitalité naturelle ?",
racine1: "La raison est-elle une puissance d'adaptation et de maîtrise ?",
racine2: "ou la raison est-elle une maladie de la vie, comme le suggère Nietzsche ?",
enjeu: "Évaluer la valeur vitale de la raison."
},
{
id: 1030,
notion: 'raison',
intitule: "La raison est-elle impuissante face aux émotions ?",
piste1: "Les émotions submergent-elles inévitablement la raison ?",
piste2: "ou la raison peut-elle apaiser et réguler les émotions ?",
racine1: "La raison est-elle une digue fragile contre le flot des passions ?",
racine2: "ou la raison est-elle un remède efficace aux troubles de l'âme ?",
enjeu: "Examiner l'efficacité de la raison face à l'affectivité."
},
{
id: 1031,
notion: 'raison',
intitule: "La raison peut-elle éduquer les sentiments ?",
piste1: "La raison peut-elle transformer et affiner nos sentiments ?",
piste2: "ou les sentiments échappent-ils à toute éducation rationnelle ?",
racine1: "Les sentiments peuvent-ils être rendus plus conformes à la raison ?",
racine2: "ou la raison ne peut-elle que les réprimer, sans les éduquer ?",
enjeu: "Déterminer la capacité de la raison à former la vie affective."
},
{
id: 1032,
notion: 'raison',
intitule: "La raison est-elle un frein ou un moteur ?",
piste1: "La raison est-elle ce qui retient et limite nos élans ?",
piste2: "ou est-elle ce qui les oriente et les rend efficaces ?",
racine1: "La raison est-elle principalement négative et prohibitive ?",
racine2: "ou la raison est-elle une puissance positive de réalisation ?",
enjeu: "Déterminer la fonction dynamique ou restrictive de la raison."
},
{
id: 1033,
notion: 'raison',
intitule: "La raison est-elle aveugle sans le cœur ?",
piste1: "La raison a-t-elle besoin de l'intuition ou du sentiment pour saisir l'essentiel ?",
piste2: "ou la raison se suffit-elle à elle-même pour atteindre la vérité ?",
racine1: "Le cœur a-t-il ses raisons que la raison ne connaît point ?",
racine2: "ou le sentiment est-il une source d'erreur que la raison doit corriger ?",
enjeu: "Examiner la complémentarité ou l'opposition entre raison et sentiment."
},
{
id: 1034,
notion: 'raison',
intitule: "La raison peut-elle justifier nos penchants ?",
piste1: "La raison est-elle capable de trouver des arguments pour nos désirs ?",
piste2: "ou est-elle indépendante de nos penchants pour les juger ?",
racine1: "La raison est-elle la servante des passions, comme le dit Hume ?",
racine2: "ou la raison est-elle le maître qui doit commander aux passions ?",
enjeu: "Déterminer si la raison est autonome ou au service des penchants."
},
{
id: 1035,
notion: 'raison',
intitule: "La raison est-elle une ruse de la passion ?",
piste1: "La raison n'est-elle qu'un prétexte élaboré par nos passions pour se satisfaire ?",
piste2: "ou la raison a-t-elle une autonomie réelle par rapport aux passions ?",
racine1: "La rationalisation est-elle la fonction principale de la raison ?",
racine2: "ou la raison peut-elle s'opposer authentiquement aux passions ?",
enjeu: "Examiner la thèse de la raison comme instrument des passions."
},
{
id: 1036,
notion: 'raison',
intitule: "La raison est-elle une passion tranquille ?",
piste1: "Le désir de connaître est-il une passion, mais plus calme et durable ?",
piste2: "ou la raison est-elle d'une nature fondamentalement différente de la passion ?",
racine1: "La raison est-elle une passion qui s'ignore ou se maîtrise ?",
racine2: "ou la raison est-elle l'extinction des passions ?",
enjeu: "Déterminer la nature passionnelle ou apathique de la raison."
},
{
id: 1037,
notion: 'raison',
intitule: "La raison s'oppose-t-elle à la foi ?",
piste1: "La raison et la foi sont-elles deux voies d'accès à la vérité incompatibles ?",
piste2: "ou peuvent-elles se compléter et s'éclairer mutuellement ?",
racine1: "La foi exige-t-elle de suspendre l'usage de la raison ?",
racine2: "ou la foi cherche-t-elle à comprendre ce qu'elle croit ?",
enjeu: "Examiner le rapport conflictuel ou harmonieux entre raison et foi."
},
{
id: 1038,
notion: 'raison',
intitule: "La raison peut-elle prouver l'existence de Dieu ?",
piste1: "La raison est-elle capable d'établir l'existence d'un être suprême ?",
piste2: "ou Dieu échappe-t-il par nature aux démonstrations rationnelles ?",
racine1: "Les preuves rationnelles de l'existence de Dieu sont-elles valides ?",
racine2: "ou la raison est-elle limitée au monde sensible et ne peut atteindre le divin ?",
enjeu: "Déterminer les capacités de la raison naturelle en matière théologique."
},
{
id: 1039,
notion: 'raison',
intitule: "La foi est-elle supérieure à la raison ?",
piste1: "La foi donne-t-elle accès à des vérités que la raison ne peut atteindre ?",
piste2: "ou la raison est-elle le juge suprême de toute prétention à la vérité, y compris religieuse ?",
racine1: "La raison est-elle limitée et doit-elle s'incliner devant la révélation ?",
racine2: "ou la foi qui contredit la raison est-elle une superstition ?",
enjeu: "Hiérarchiser ou articuler les revendications de la foi et de la raison."
},
{
id: 1040,
notion: 'raison',
intitule: "La raison est-elle une révélation naturelle ?",
piste1: "La raison est-elle une lumière divine déposée en chaque homme ?",
piste2: "ou est-elle une construction purement humaine et terrestre ?",
racine1: "La raison participe-t-elle du logos divin ?",
racine2: "ou la raison est-elle un produit de l'évolution biologique et sociale ?",
enjeu: "Déterminer l'origine naturelle, divine ou humaine de la raison."
},
{
id: 1041,
notion: 'raison',
intitule: "La raison s'oppose-t-elle à l'expérience ?",
piste1: "La raison tire-t-elle ses principes d'elle-même, indépendamment de l'expérience ?",
piste2: "ou tout le contenu de la raison vient-il de l'expérience sensible ?",
racine1: "Existe-t-il des connaissances rationnelles a priori ?",
racine2: "ou l'esprit est-il entièrement déterminé par l'expérience (empirisme) ?",
enjeu: "Examiner le débat entre rationalisme et empirisme."
},
{
id: 1042,
notion: 'raison',
intitule: "La raison est-elle la source de toute connaissance ?",
piste1: "La raison peut-elle tout connaître par ses propres forces ?",
piste2: "ou doit-elle s'appuyer sur l'expérience pour avoir un contenu ?",
racine1: "La raison est-elle autonome dans l'ordre de la connaissance ?",
racine2: "ou la raison est-elle vide sans les données des sens ?",
enjeu: "Déterminer l'autosuffisance de la raison dans la connaissance."
},
{
id: 1043,
notion: 'raison',
intitule: "L'expérience est-elle la seule source de la raison ?",
piste1: "Toutes nos idées rationnelles viennent-elles de l'expérience ?",
piste2: "ou la raison apporte-t-elle des structures qui organisent l'expérience ?",
racine1: "L'esprit est-il passif, recevant tout de l'extérieur ?",
racine2: "ou l'esprit est-il actif, imposant ses formes au donné sensible ?",
enjeu: "Examiner le rôle actif ou passif de la raison face à l'expérience."
},
{
id: 1044,
notion: 'raison',
intitule: "La raison est-elle vide sans l'expérience ?",
piste1: "Les concepts de la raison ont-ils besoin de l'intuition sensible pour avoir un sens ?",
piste2: "ou la raison peut-elle connaître des objets purement intelligibles ?",
racine1: "La pensée sans contenu sensible est-elle vide, comme le dit Kant ?",
racine2: "ou la raison peut-elle saisir des vérités métaphysiques indépendamment de l'expérience ?",
enjeu: "Déterminer la dépendance de la raison à l'égard de l'expérience."
},
{
id: 1045,
notion: 'raison',
intitule: "L'expérience est-elle aveugle sans la raison ?",
piste1: "Les données sensibles ont-elles besoin d'être organisées par la raison pour être connues ?",
piste2: "ou l'expérience brute est-elle une connaissance suffisante ?",
racine1: "L'intuition sans concept est-elle aveugle, comme le dit Kant ?",
racine2: "ou l'expérience immédiate a-t-elle sa propre évidence ?",
enjeu: "Examiner la nécessité de la raison pour structurer l'expérience."
},
{
id: 1046,
notion: 'raison',
intitule: "La raison est-elle capable de connaître l'infini ?",
piste1: "La raison peut-elle saisir l'infini ou l'absolu ?",
piste2: "ou est-elle limitée au monde fini et conditionné ?",
racine1: "La raison a-t-elle une vocation métaphysique à dépasser le fini ?",
racine2: "ou l'infini est-il une idée régulative que la raison ne peut connaître ?",
enjeu: "Déterminer la portée de la raison au-delà de l'expérience sensible."
},
{
id: 1047,
notion: 'raison',
intitule: "La raison est-elle limitée au monde sensible ?",
piste1: "La raison ne peut-elle connaître que les phénomènes et non les choses en soi ?",
piste2: "ou peut-elle atteindre la réalité telle qu'elle est en elle-même ?",
racine1: "La raison est-elle condamnée à ne connaître que les apparences ?",
racine2: "ou la raison peut-elle percer le voile des apparences ?",
enjeu: "Examiner les limites de la connaissance rationnelle."
},
{
id: 1048,
notion: 'raison',
intitule: "La raison peut-elle connaître l'âme ?",
piste1: "La raison peut-elle faire de l'âme un objet de connaissance scientifique ?",
piste2: "ou l'âme échappe-t-elle aux catégories de la raison ?",
racine1: "Le moi est-il un objet comme les autres pour la raison ?",
racine2: "ou la raison est-elle incapable de se saisir elle-même comme objet ?",
enjeu: "Déterminer la capacité de la raison à connaître le sujet."
},
{
id: 1049,
notion: 'raison',
intitule: "La raison est-elle une illusion transcendantale ?",
piste1: "La raison nous pousse-t-elle inévitablement à croire en des objets qu'elle ne peut connaître ?",
piste2: "ou la raison est-elle capable de se corriger elle-même ?",
racine1: "La métaphysique est-elle une illusion naturelle de la raison ?",
racine2: "ou la raison peut-elle démasquer ses propres illusions ?",
enjeu: "Examiner la critique kantienne de la raison pure."
},
{
id: 1050,
notion: 'raison',
intitule: "La raison est-elle une faculté de principes ?",
piste1: "La raison est-elle la faculté qui cherche l'inconditionné et les premiers principes ?",
piste2: "ou se contente-t-elle de relier des faits entre eux ?",
racine1: "La raison vise-t-elle l'unité suprême de la connaissance ?",
racine2: "ou l'entendement suffit-il à relier les phénomènes sans chercher l'absolu ?",
enjeu: "Déterminer la fonction spécifique de la raison par rapport à l'entendement."
},
{
id: 1051,
notion: 'raison',
intitule: "La raison est-elle une faculté d'intuition ?",
piste1: "La raison peut-elle saisir la vérité de manière immédiate et directe ?",
piste2: "ou procède-t-elle toujours par démonstration et médiation ?",
racine1: "L'intellection est-elle une forme de vision intellectuelle ?",
racine2: "ou la raison est-elle discursive par essence ?",
enjeu: "Examiner le caractère intuitif ou discursif de la raison."
},
{
id: 1052,
notion: 'raison',
intitule: "La raison est-elle une faculté de déduction ?",
piste1: "La raison avance-t-elle en tirant des conséquences nécessaires de prémisses ?",
piste2: "ou la déduction n'est-elle qu'une partie de son activité ?",
racine1: "Le modèle mathématique est-il le modèle de toute raison ?",
racine2: "ou la raison doit-elle aussi inventer ses propres prémisses ?",
enjeu: "Déterminer la place de la déduction dans la méthode rationnelle."
},
{
id: 1053,
notion: 'raison',
intitule: "La raison est-elle une faculté d'induction ?",
piste1: "La raison peut-elle généraliser à partir de l'expérience ?",
piste2: "ou l'induction relève-t-elle de l'habitude et non de la raison ?",
racine1: "L'induction est-elle un procédé rationnel valide ?",
racine2: "ou la raison ne peut-elle garantir la nécessité des lois naturelles ?",
enjeu: "Examiner la validité rationnelle de l'induction."
},
{
id: 1054,
notion: 'raison',
intitule: "La raison est-elle une faculté de réflexion ?",
piste1: "La raison est-elle la capacité de l'esprit à se replier sur lui-même ?",
piste2: "ou est-elle tournée uniquement vers l'objet ?",
racine1: "La raison est-elle essentiellement réflexive ?",
racine2: "ou la réflexion n'est-elle qu'un moment de la raison ?",
enjeu: "Déterminer le caractère réflexif de la raison."
},
{
id: 1055,
notion: 'raison',
intitule: "La raison peut-elle se critiquer elle-même ?",
piste1: "La raison est-elle capable d'examiner ses propres pouvoirs et limites ?",
piste2: "ou toute critique de la raison suppose-t-elle une raison déjà établie ?",
racine1: "La critique de la raison est-elle l'acte suprême de la raison ?",
racine2: "ou la raison ne peut-elle se juger sans tomber dans le cercle vicieux ?",
enjeu: "Examiner la possibilité et la légitimité de l'autocritique de la raison."
},
{
id: 1056,
notion: 'raison',
intitule: "La raison est-elle impuissante face à l'absurde ?",
piste1: "La raison échoue-t-elle à donner un sens au monde ?",
piste2: "ou la raison peut-elle intégrer l'absurde dans son système ?",
racine1: "L'absurde est-il la limite ultime de la raison ?",
racine2: "ou la raison est-elle capable de surmonter l'absurde par la dialectique ?",
enjeu: "Déterminer la capacité de la raison à affronter l'absurde."
},
{
id: 1057,
notion: 'raison',
intitule: "La raison est-elle responsable de ses propres excès ?",
piste1: "La raison, en voulant tout expliquer, ne devient-elle pas déraisonnable ?",
piste2: "ou la raison est-elle toujours mesure et limitation ?",
racine1: "Le rationalisme absolu est-il une forme de déraison ?",
racine2: "ou la raison véritable est-elle celle qui connaît ses limites ?",
enjeu: "Examiner la responsabilité de la raison dans ses propres dérives."
},
{
id: 1058,
notion: 'raison',
intitule: "La raison est-elle une forme de folie ?",
piste1: "La raison, en s'isolant du réel, ne devient-elle pas une construction délirante ?",
piste2: "ou la raison est-elle par définition ce qui s'oppose à la folie ?",
racine1: "La raison est-elle une folie qui s'ignore ou qui s'organise ?",
racine2: "ou la raison est-elle la santé de l'esprit ?",
enjeu: "Interroger la frontière ténue entre raison et folie."
},
{
id: 1059,
notion: 'raison',
intitule: "La folie est-elle l'absence de raison ?",
piste1: "La folie est-elle simplement un défaut ou une privation de raison ?",
piste2: "ou la folie est-elle une autre forme de raison, avec sa propre logique ?",
racine1: "La folie est-elle un non-sens absolu ?",
racine2: "ou la folie a-t-elle une cohérence interne que la raison peut comprendre ?",
enjeu: "Déterminer le rapport entre raison et folie."
},
{
id: 1060,
notion: 'raison',
intitule: "La raison est-elle une construction sociale ?",
piste1: "La raison est-elle un produit de l'histoire et de la société ?",
piste2: "ou est-elle une structure universelle et intemporelle de l'esprit ?",
racine1: "La raison est-elle relative aux conditions sociales de production ?",
racine2: "ou la raison est-elle la condition de possibilité de toute société ?",
enjeu: "Examiner l'origine sociale ou transcendante de la raison."
},
{
id: 1061,
notion: 'raison',
intitule: "La raison est-elle un instrument de domination ?",
piste1: "La raison a-t-elle été utilisée pour justifier l'oppression et la colonisation ?",
piste2: "ou la raison est-elle l'outil principal de l'émancipation ?",
racine1: "La raison est-elle complice du pouvoir et de la violence ?",
racine2: "ou la raison est-elle la seule arme contre l'arbitraire et la domination ?",
enjeu: "Examiner la critique de la raison comme outil de pouvoir."
},
{
id: 1062,
notion: 'raison',
intitule: "La raison instrumentale est-elle une déraison ?",
piste1: "La raison qui ne calcule que les moyens sans se soucier des fins est-elle rationnelle ?",
piste2: "ou cette raison est-elle devenue folle et destructrice ?",
racine1: "La rationalité technique est-elle une forme dégénérée de la raison ?",
racine2: "ou la raison instrumentale est-elle une composante légitime de la raison ?",
enjeu: "Évaluer la critique de la raison instrumentale (École de Francfort)."
},
{
id: 1063,
notion: 'raison',
intitule: "La raison est-elle au service de la technique ?",
piste1: "La raison a-t-elle pour seule fonction d'optimiser les processus techniques ?",
piste2: "ou la raison doit-elle garder un pouvoir de critique sur la technique ?",
racine1: "La raison est-elle réduite à la calculabilité et à l'efficacité ?",
racine2: "ou la raison peut-elle interroger le sens et les fins de la technique ?",
enjeu: "Déterminer le rapport entre raison et technique."
},
{
id: 1064,
notion: 'raison',
intitule: "La raison est-elle calculatrice ?",
piste1: "Raisonner, est-ce essentiellement calculer des rapports et des quantités ?",
piste2: "ou la raison a-t-elle une dimension qualitative et intuitive ?",
racine1: "Le modèle mathématique est-il le seul modèle de la raison ?",
racine2: "ou la raison pratique et esthétique échappe-t-elle au calcul ?",
enjeu: "Examiner la réduction de la raison au calcul."
},
{
id: 1065,
notion: 'raison',
intitule: "La raison est-elle réductrice ?",
piste1: "La raison appauvrit-elle le réel en le simplifiant et en l'abstrayant ?",
piste2: "ou la raison révèle-t-elle la structure profonde du réel ?",
racine1: "La raison ne voit-elle que ce qu'elle peut mesurer et classer ?",
racine2: "ou la raison est-elle la seule voie d'accès à la vérité du réel ?",
enjeu: "Déterminer si la raison déforme ou éclaire le réel."
},
{
id: 1066,
notion: 'raison',
intitule: "La raison peut-elle tout expliquer ?",
piste1: "La raison a-t-elle une puissance explicative illimitée ?",
piste2: "ou existe-t-il des mystères ou des singularités qui lui résistent ?",
racine1: "Le principe de raison suffisante s'applique-t-il à toute chose ?",
racine2: "ou y a-t-il de l'irrationnel irréductible dans le monde ?",
enjeu: "Examiner les limites du pouvoir explicatif de la raison."
},
{
id: 1067,
notion: 'raison',
intitule: "La raison est-elle impuissante face au mystère ?",
piste1: "Le mystère est-il ce qui ferme la porte à la raison ?",
piste2: "ou le mystère est-il ce qui ouvre la raison à plus qu'elle-même ?",
racine1: "La raison doit-elle s'arrêter là où commence le mystère ?",
racine2: "ou la raison a-t-elle pour tâche d'approfondir le mystère ?",
enjeu: "Déterminer le rapport entre raison et mystère."
},
{
id: 1068,
notion: 'raison',
intitule: "La raison est-elle une violence faite au réel ?",
piste1: "La raison impose-t-elle ses catégories au réel, le déformant ainsi ?",
piste2: "ou la raison se contente-t-elle de suivre les articulations du réel ?",
racine1: "Concevoir, est-ce nécessairement simplifier et donc trahir ?",
racine2: "ou la raison est-elle l'oreille attentive à l'ordre du monde ?",
enjeu: "Examiner la thèse de la violence conceptuelle de la raison."
},
{
id: 1069,
notion: 'raison',
intitule: "La raison est-elle une pacification du monde ?",
piste1: "La raison a-t-elle pour fonction de rendre le monde compréhensible et habitable ?",
piste2: "ou la raison crée-t-elle des conflits en brisant les illusions ?",
racine1: "La raison est-elle un principe d'ordre et d'harmonie ?",
racine2: "ou la raison est-elle un facteur de trouble et de désenchantement ?",
enjeu: "Déterminer l'effet de la raison sur notre rapport au monde."
},
{
id: 1070,
notion: 'raison',
intitule: "La raison est-elle une défense contre l'angoisse ?",
piste1: "La raison est-elle un rempart que nous élevons contre l'incertitude et la peur ?",
piste2: "ou la raison est-elle ce qui nous expose à l'angoisse de la lucidité ?",
racine1: "La raison est-elle un mécanisme de sécurité psychologique ?",
racine2: "ou la raison est-elle la source de l'inquiétude métaphysique ?",
enjeu: "Examiner la fonction psychologique de la raison."
},
{
id: 1071,
notion: 'raison',
intitule: "La raison est-elle une fuite devant la vie ?",
piste1: "La raison, en conceptualisant, nous éloigne-t-elle de l'expérience vécue ?",
piste2: "ou la raison est-elle ce qui donne sens et valeur à la vie ?",
racine1: "La raison est-elle une négation de la vie immédiate et instinctive ?",
racine2: "ou la raison est-elle l'accomplissement de la vie ?",
enjeu: "Examiner la critique vitaliste ou nietzschéenne de la raison."
},
{
id: 1072,
notion: 'raison',
intitule: "La raison est-elle une maladie de la vie ?",
piste1: "La raison est-elle un symptôme de décadence et d'affaiblissement des instincts ?",
piste2: "ou la raison est-elle la santé suprême de l'esprit ?",
racine1: "La raison est-elle une pathologie de l'animal humain ?",
racine2: "ou la raison est-elle la guérison de l'animalité ?",
enjeu: "Évaluer la thèse de la raison comme pathologie."
},
{
id: 1073,
notion: 'raison',
intitule: "La raison est-elle une illusion nécessaire ?",
piste1: "La raison est-elle une fiction utile sans laquelle nous ne pourrions pas vivre ?",
piste2: "ou la raison est-elle la réalité la plus solide dont nous disposons ?",
racine1: "La raison est-elle une construction pragmatique sans fondement ultime ?",
racine2: "ou la raison est-elle le fondement de toute vérité ?",
enjeu: "Examiner le statut pragmatique ou réaliste de la raison."
},
{
id: 1074,
notion: 'raison',
intitule: "La raison est-elle la source de la morale ?",
piste1: "Les principes moraux sont-ils dictés par la raison ?",
piste2: "ou la morale vient-elle du sentiment, de la tradition ou de la religion ?",
racine1: "La raison peut-elle prescrire des devoirs ?",
racine2: "ou la raison est-elle seulement capable de calculer des intérêts ?",
enjeu: "Déterminer le fondement rationnel de la morale."
},
{
id: 1075,
notion: 'raison',
intitule: "La raison est-elle pratique ?",
piste1: "La raison a-t-elle le pouvoir de déterminer la volonté et de produire des actions ?",
piste2: "ou la raison est-elle seulement théorique et contemplative ?",
racine1: "La raison peut-elle être un mobile de l'action ?",
racine2: "ou l'action dépend-elle toujours de désirs sensibles ?",
enjeu: "Examiner la notion de raison pratique."
},
{
id: 1076,
notion: 'raison',
intitule: "La raison peut-elle fonder le droit ?",
piste1: "Le droit est-il l'expression de la raison universelle ?",
piste2: "ou le droit est-il le produit de rapports de force et d'histoire ?",
racine1: "Le droit naturel est-il un produit de la raison ?",
racine2: "ou le droit positif est-il indépendant de la raison ?",
enjeu: "Déterminer le rapport entre raison et droit."
},
{
id: 1077,
notion: 'raison',
intitule: "La raison est-elle politique ?",
piste1: "La raison a-t-elle une dimension intrinsèquement politique et sociale ?",
piste2: "ou la raison est-elle une faculté individuelle et solitaire ?",
racine1: "La raison se développe-t-elle dans l'espace public et le débat ?",
racine2: "ou la raison est-elle d'abord une méditation intérieure ?",
enjeu: "Examiner la dimension politique de la raison."
},
{
id: 1078,
notion: 'raison',
intitule: "La raison est-elle publique ?",
piste1: "La raison ne s'exerce-t-elle pleinement que dans l'usage public et le dialogue ?",
piste2: "ou la raison est-elle une affaire privée et intime ?",
racine1: "L'usage public de la raison est-il la condition de l'émancipation ?",
racine2: "ou la raison est-elle valable même dans la solitude ?",
enjeu: "Déterminer le caractère public ou privé de la raison."
},
{
id: 1079,
notion: 'raison',
intitule: "La raison est-elle émancipatrice ?",
piste1: "La raison est-elle l'outil principal de la libération humaine ?",
piste2: "ou la raison est-elle un nouvel instrument d'asservissement ?",
racine1: "Les Lumières ont-elles raison de voir dans la raison le chemin de la liberté ?",
racine2: "ou la raison a-t-elle échoué à émanciper l'humanité ?",
enjeu: "Évaluer le potentiel émancipateur de la raison."
},
{
id: 1080,
notion: 'raison',
intitule: "La raison est-elle universelle en politique ?",
piste1: "La raison peut-elle fonder un ordre politique universel et juste ?",
piste2: "ou la politique est-elle toujours particulière et conflictuelle ?",
racine1: "La raison peut-elle surmonter les conflits d'intérêts par le dialogue ?",
racine2: "ou la raison est-elle impuissante face à la violence politique ?",
enjeu: "Examiner la portée universelle de la raison en politique."
},
{
id: 1081,
notion: 'raison',
intitule: "La raison est-elle dialogique ?",
piste1: "La raison se réalise-t-elle dans le dialogue et la confrontation des points de vue ?",
piste2: "ou la raison est-elle une monologie de l'esprit avec lui-même ?",
racine1: "La vérité rationnelle émerge-t-elle de l'intersubjectivité ?",
racine2: "ou la raison est-elle une évidence solitaire ?",
enjeu: "Déterminer le caractère dialogique de la raison."
},
{
id: 1082,
notion: 'raison',
intitule: "La raison est-elle communicationnelle ?",
piste1: "La raison est-elle la capacité de s'entendre et de coopérer par le langage ?",
piste2: "ou la raison est-elle une faculté de calcul individuel ?",
racine1: "La rationalité communicationnelle est-elle le fondement de l'éthique ?",
racine2: "ou la raison est-elle d'abord stratégique et instrumentale ?",
enjeu: "Examiner la conception habermassienne de la raison communicationnelle."
},
{
id: 1083,
notion: 'raison',
intitule: "La raison est-elle une exigence de justice ?",
piste1: "Être rationnel, est-ce exiger l'équité et l'impartialité ?",
piste2: "ou la raison est-elle indifférente à la justice ?",
racine1: "La raison est-elle la source de l'idée de justice ?",
racine2: "ou la justice est-elle un sentiment que la raison ne peut fonder ?",
enjeu: "Lier la raison à l'exigence de justice."
},
{
id: 1084,
notion: 'raison',
intitule: "La raison est-elle en crise ?",
piste1: "La raison traverse-t-elle une période de doute et de perte de légitimité ?",
piste2: "ou la raison est-elle plus vivante et nécessaire que jamais ?",
racine1: "Les guerres et les catastrophes techniques ont-elles discrédité la raison ?",
racine2: "ou ces crises sont-elles des appels à une raison plus lucide et critique ?",
enjeu: "Diagnostiquer l'état contemporain de la raison."
},
{
id: 1085,
notion: 'raison',
intitule: "La raison est-elle dépassée ?",
piste1: "La raison est-elle un concept obsolète face à la complexité du monde ?",
piste2: "ou la raison est-elle la seule ressource pour affronter cette complexité ?",
racine1: "La raison est-elle incapable de penser le chaos et l'incertitude ?",
racine2: "ou la raison doit-elle se transformer pour inclure l'incertitude ?",
enjeu: "Évaluer la pertinence actuelle du concept de raison."
},
{
id: 1086,
notion: 'raison',
intitule: "La raison est-elle un projet inachevé ?",
piste1: "Le projet des Lumières de la raison est-il encore à accomplir ?",
piste2: "ou a-t-il échoué et doit-il être abandonné ?",
racine1: "La raison est-elle une tâche infinie pour l'humanité ?",
racine2: "ou la raison a-t-elle atteint ses limites définitives ?",
enjeu: "Examiner l'idée d'une raison comme projet historique inachevé."
},
{
id: 1087,
notion: 'raison',
intitule: "La raison peut-elle se définir ?",
piste1: "Peut-on donner une définition unique et universelle de la raison ?",
piste2: "ou la raison est-elle un concept essentiellement contesté et ouvert ?",
racine1: "La raison est-elle susceptible d'une définition close ?",
racine2: "ou la raison est-elle ce qui définit, et ne peut donc être définie ?",
enjeu: "Interroger la possibilité et les limites d'une définition de la raison."
},
{
id: 1088,
notion: 'raison',
intitule: "La raison est-elle une fin en soi ?",
piste1: "La raison a-t-elle une valeur absolue, indépendamment de ses résultats ?",
piste2: "ou la raison n'a-t-elle de valeur que comme moyen pour atteindre d'autres fins ?",
racine1: "La dignité humaine réside-t-elle dans la raison ?",
racine2: "ou la raison est-elle un outil au service de la vie et du bonheur ?",
enjeu: "Déterminer la valeur intrinsèque ou instrumentale de la raison."
},
{
id: 1089,
notion: 'raison',
intitule: "La raison est-elle une autorité ?",
piste1: "La raison a-t-elle le droit d'imposer ses conclusions ?",
piste2: "ou l'autorité de la raison doit-elle être constamment remise en question ?",
racine1: "La raison est-elle la seule autorité légitime en matière de vérité ?",
racine2: "ou la raison est-elle une autorité parmi d'autres, sans privilège absolu ?",
enjeu: "Examiner le statut d'autorité de la raison."
},
{
id: 1090,
notion: 'raison',
intitule: "La raison est-elle une liberté ?",
piste1: "Obéir à la raison, est-ce être libre ?",
piste2: "ou la raison est-elle une contrainte qui limite la liberté ?",
racine1: "L'autonomie est-elle l'obéissance à la loi que la raison se donne ?",
racine2: "ou la liberté est-elle la capacité de s'affranchir de la raison ?",
enjeu: "Articuler les notions de raison et de liberté."
},
{
id: 1091,
notion: 'raison',
intitule: "La raison est-elle une responsabilité ?",
piste1: "Être rationnel, est-ce assumer la responsabilité de ses pensées et de ses actes ?",
piste2: "ou la raison est-elle un processus impersonnel qui nous décharge de la responsabilité ?",
racine1: "La raison implique-t-elle la capacité de répondre de soi ?",
racine2: "ou la raison est-elle un déterminisme logique qui exclut la responsabilité ?",
enjeu: "Lier la raison à la responsabilité."
},
{
id: 1092,
notion: 'raison',
intitule: "La raison est-elle l'avenir de l'homme ?",
piste1: "Le progrès de l'humanité dépend-il du développement de la raison ?",
piste2: "ou l'avenir de l'homme réside-t-il dans le dépassement de la raison ?",
racine1: "La raison est-elle la seule garantie de survie et d'épanouissement de l'humanité ?",
racine2: "ou l'homme doit-il intégrer d'autres facultés (intuition, émotion) pour survivre ?",
enjeu: "Interroger le rôle de la raison dans l'avenir de l'humanité."
},
{
id: 1093,
notion: 'raison',
intitule: "La raison est-elle compatible avec la foi ?",
piste1: "La raison et la foi peuvent-elles coexister harmonieusement ?",
piste2: "ou s'excluent-elles mutuellement ?",
racine1: "La foi est-elle au-dessus de la raison ou contre elle ?",
racine2: "ou la raison peut-elle préparer et éclairer la foi ?",
enjeu: "Examiner la compatibilité entre raison et foi."
},
{
id: 1094,
notion: 'raison',
intitule: "La raison est-elle une faculté de doute ?",
piste1: "La raison commence-t-elle par le doute méthodique ?",
piste2: "ou la raison cherche-t-elle d'abord des certitudes ?",
racine1: "Le doute est-il l'outil principal de la raison ?",
racine2: "ou le doute est-il un obstacle que la raison doit surmonter ?",
enjeu: "Déterminer le rôle du doute dans la démarche rationnelle."
},
{
id: 1095,
notion: 'raison',
intitule: "La raison est-elle une faculté de certitude ?",
piste1: "La raison vise-t-elle à établir des vérités indubitables ?",
piste2: "ou la raison doit-elle se contenter de probabilités ?",
racine1: "La raison peut-elle atteindre la certitude absolue ?",
racine2: "ou la raison est-elle condamnée à l'opinion éclairée ?",
enjeu: "Examiner la prétention de la raison à la certitude."
},
{
id: 1096,
notion: 'raison',
intitule: "La raison est-elle une faculté de critique ?",
piste1: "La fonction première de la raison est-elle de remettre en question les croyances établies ?",
piste2: "ou la raison est-elle d'abord une faculté de construction et de fondation ?",
racine1: "La raison est-elle essentiellement négative et destructrice des illusions ?",
racine2: "ou la raison est-elle positive et fondatrice de la vérité ?",
enjeu: "Déterminer le caractère critique ou dogmatique de la raison."
},
{
id: 1097,
notion: 'raison',
intitule: "La raison est-elle une faculté de création ?",
piste1: "La raison peut-elle créer de nouvelles vérités et de nouvelles formes ?",
piste2: "ou se contente-t-elle de découvrir ce qui existe déjà ?",
racine1: "La raison est-elle inventive et productrice ?",
racine2: "ou la raison est-elle seulement réceptive et démonstrative ?",
enjeu: "Examiner la capacité créatrice de la raison."
},
{
id: 1098,
notion: 'raison',
intitule: "La raison est-elle une faculté de dialogue ?",
piste1: "La raison ne s'exerce-t-elle que dans la confrontation avec autrui ?",
piste2: "ou la raison est-elle une activité solitaire de l'esprit ?",
racine1: "La raison est-elle essentiellement intersubjective ?",
racine2: "ou la raison est-elle une monologie du sujet avec lui-même ?",
enjeu: "Déterminer le caractère social ou individuel de la raison."
},
{
id: 1099,
notion: 'raison',
intitule: "La raison est-elle une faculté de paix ?",
piste1: "La raison a-t-elle pour but de résoudre les conflits et d'établir la paix ?",
piste2: "ou la raison est-elle un facteur de division et de conflit ?",
racine1: "La raison est-elle un principe d'harmonie et de réconciliation ?",
racine2: "ou la raison est-elle un principe de distinction et de lutte ?",
enjeu: "Examiner le rapport entre raison et paix."
},
{
id: 1100,
notion: 'raison',
intitule: "La raison est-elle une faculté de sagesse ?",
piste1: "La raison conduit-elle à la sagesse et à la vie bonne ?",
piste2: "ou la sagesse est-elle au-delà ou en deçà de la raison ?",
racine1: "La raison est-elle le chemin le plus sûr vers la sagesse ?",
racine2: "ou la sagesse exige-t-elle de dépasser la raison discursive ?",
enjeu: "Déterminer le rapport entre raison et sagesse."
},
{
id: 1101,
notion: 'religion',
intitule: "Qu'est-ce que la religion ?",
piste1: "La religion se définit-elle par la croyance en des êtres ou des puissances surnaturelles ?",
piste2: "ou est-elle d'abord un ensemble de pratiques et de rites qui fondent une communauté ?",
racine1: "La religion se définit-elle par son objet (le divin) ou par sa fonction sociale ?",
racine2: "ou la religion est-elle une réponse à la condition humaine et à la finitude ?",
enjeu: "Établir une définition philosophique de la religion au-delà du sens commun."
},
{
id: 1102,
notion: 'religion',
intitule: "La religion est-elle une affaire purement privée ?",
piste1: "La croyance religieuse relève-t-elle uniquement de la conscience individuelle et de l'intime ?",
piste2: "ou la religion a-t-elle une dimension sociale et politique irréductible ?",
racine1: "La foi est-elle une expérience intérieure qui échappe à toute régulation collective ?",
racine2: "ou les institutions religieuses jouent-elles un rôle structurant dans la vie de la cité ?",
enjeu: "Examiner les rapports entre la croyance individuelle et l'espace public."
},
{
id: 1103,
notion: 'religion',
intitule: "La religion est-elle une illusion consolatrice ?",
piste1: "La religion est-elle une construction imaginaire destinée à apaiser nos angoisses ?",
piste2: "ou la religion donne-t-elle accès à une réalité supérieure que l'illusion nie ?",
racine1: "Le besoin de consolation suffit-il à expliquer la genèse du fait religieux ?",
racine2: "ou la religion répond-elle à une vérité ontologique sur la condition humaine ?",
enjeu: "Évaluer la thèse de la religion comme illusion (Freud, Feuerbach)."
},
{
id: 1104,
notion: 'religion',
intitule: "La religion est-elle l'opium du peuple ?",
piste1: "La religion endort-elle la conscience critique et accepte-t-elle la misère réelle ?",
piste2: "ou la religion peut-elle être un facteur de révolte et d'émancipation ?",
racine1: "La religion justifie-t-elle l'ordre social existant en le sacralisant ?",
racine2: "ou les mouvements religieux ont-ils souvent porté des luttes de libération ?",
enjeu: "Examiner la fonction sociale et politique de la religion (Marx)."
},
{
id: 1105,
notion: 'religion',
intitule: "La religion est-elle incompatible avec la raison ?",
piste1: "La foi exige-t-elle de suspendre l'usage de la raison et d'accepter l'absurde ?",
piste2: "ou la raison peut-elle éclairer la foi et la religion peut-elle être rationnelle ?",
racine1: "La vérité révélée et la vérité rationnelle s'excluent-elles mutuellement ?",
racine2: "ou la raison est-elle un don divin qui doit servir à comprendre la foi ?",
enjeu: "Déterminer les rapports de conflit ou d'harmonie entre foi et raison."
},
{
id: 1106,
notion: 'religion',
intitule: "La religion est-elle née de la peur et de l'ignorance ?",
piste1: "Le sentiment religieux provient-il de notre impuissance face aux forces de la nature ?",
piste2: "ou la religion est-elle une réponse positive et structurante à l'existence ?",
racine1: "L'homme a-t-il inventé les dieux pour combler son ignorance des causes naturelles ?",
racine2: "ou la religion est-elle la reconnaissance d'une dépendance ontologique ?",
enjeu: "Examiner les origines psychologiques et anthropologiques de la religion."
},
{
id: 1107,
notion: 'religion',
intitule: "L'homme est-il un animal religieux par nature ?",
piste1: "Le sentiment religieux est-il universel et inscrit dans la nature humaine ?",
piste2: "ou la religion est-elle une construction culturelle et historique contingente ?",
racine1: "L'homo religiosus est-il une constante de toutes les sociétés humaines ?",
racine2: "ou la religion est-elle un phénomène appelé à disparaître avec le progrès ?",
enjeu: "Déterminer si la religion est une nécessité anthropologique."
},
{
id: 1108,
notion: 'religion',
intitule: "Toutes les religions disent-elles fondamentalement la même chose ?",
piste1: "Existe-t-il un noyau de vérité universel commun à toutes les traditions religieuses ?",
piste2: "ou chaque religion est-elle un système de croyances exclusif et incommensurable ?",
racine1: "Le pluralisme religieux suppose-t-il une unité sous-jacente du sacré ?",
racine2: "ou les différences doctrinales sont-elles des obstacles infranchissables ?",
enjeu: "Examiner la thèse du pérennialisme ou de l'unité des religions."
},
{
id: 1109,
notion: 'religion',
intitule: "Le monothéisme est-il la forme la plus aboutie de la religion ?",
piste1: "La croyance en un Dieu unique représente-t-elle un progrès spirituel et moral ?",
piste2: "ou le polythéisme et l'animisme ont-ils leur propre cohérence et valeur ?",
racine1: "Le monothéisme a-t-il introduit une rupture éthique fondamentale dans l'histoire ?",
racine2: "ou l'évolutionnisme religieux est-il un préjugé ethnocentrique ?",
enjeu: "Évaluer la hiérarchisation des formes religieuses."
},
{
id: 1110,
notion: 'religion',
intitule: "La religion est-elle indissociable de la morale ?",
piste1: "La religion est-elle la source et le garant de toute obligation morale ?",
piste2: "ou la morale peut-elle être entièrement autonome et séculière ?",
racine1: "Le bien et le mal dépendent-ils d'un commandement divin ?",
racine2: "ou la raison peut-elle fonder la morale sans recours au sacré ?",
enjeu: "Déterminer le lien entre religion et fondement de la morale."
},
{
id: 1111,
notion: 'religion',
intitule: "Peut-on être moral sans religion ?",
piste1: "L'athéisme ou l'agnosticisme excluent-ils toute vie morale authentique ?",
piste2: "ou la vertu est-elle possible et même plus pure en l'absence de récompense divine ?",
racine1: "La crainte de Dieu est-elle le commencement de la sagesse morale ?",
racine2: "ou l'autonomie morale exige-t-elle de se passer de la sanction religieuse ?",
enjeu: "Examiner la possibilité d'une morale laïque."
},
{
id: 1112,
notion: 'religion',
intitule: "La religion est-elle un facteur de paix ?",
piste1: "La religion enseigne-t-elle l'amour du prochain et la réconciliation ?",
piste2: "ou est-elle structurellement une source de division et de violence ?",
racine1: "Le message religieux vise-t-il l'harmonie entre les hommes et avec le divin ?",
racine2: "ou la revendication de la vérité absolue engendre-t-elle inévitablement le conflit ?",
enjeu: "Évaluer le rôle de la religion dans la paix ou la guerre."
},
{
id: 1113,
notion: 'religion',
intitule: "La notion de 'guerre sainte' est-elle une contradiction dans les termes ?",
piste1: "Peut-on légitimement faire la guerre au nom de Dieu ou du sacré ?",
piste2: "ou la violence est-elle par essence une profanation du religieux ?",
racine1: "Le sacré justifie-t-il la transgression des règles morales ordinaires ?",
racine2: "ou la religion authentique est-elle fondamentalement non-violente ?",
enjeu: "Interroger la légitimité de la violence au nom de la religion."
},
{
id: 1114,
notion: 'religion',
intitule: "La religion est-elle compatible avec la démocratie ?",
piste1: "Les valeurs religieuses peuvent-elles s'harmoniser avec les principes démocratiques ?",
piste2: "ou l'obéissance à une autorité transcendante est-elle incompatible avec la souveraineté du peuple ?",
racine1: "La démocratie suppose-t-elle la neutralité religieuse de l'espace public ?",
racine2: "ou la religion peut-elle enrichir le débat démocratique par ses valeurs ?",
enjeu: "Examiner la tension entre autorité religieuse et autorité politique démocratique."
},
{
id: 1115,
notion: 'religion',
intitule: "La religion doit-elle être strictement séparée de l'État ?",
piste1: "La laïcité est-elle la condition nécessaire de la paix civile et de la liberté de conscience ?",
piste2: "ou la séparation est-elle une hostilité déguisée envers le fait religieux ?",
racine1: "L'État doit-il ignorer les religions pour garantir l'égalité de tous ?",
racine2: "ou l'État doit-il reconnaître et soutenir les cultes pour assurer la cohésion sociale ?",
enjeu: "Débattre du principe de laïcité et de ses modalités."
},
{
id: 1116,
notion: 'religion',
intitule: "La religion est-elle un obstacle au progrès scientifique ?",
piste1: "L'histoire de la religion est-elle celle d'une opposition systématique à la science ?",
piste2: "ou la religion et la science occupent-elles des domaines de vérité séparés et complémentaires ?",
racine1: "Le dogme religieux s'oppose-t-il par principe à la remise en question scientifique ?",
racine2: "ou la science et la religion répondent-elles à des questions différentes (le comment et le pourquoi) ?",
enjeu: "Examiner le conflit ou la conciliation entre science et religion."
},
{
id: 1117,
notion: 'religion',
intitule: "La science a-t-elle rendu l'hypothèse de Dieu inutile ?",
piste1: "Le progrès des explications scientifiques élimine-t-il le besoin d'une cause première divine ?",
piste2: "ou la science laisse-t-elle ouvertes les questions ultimes que seule la religion peut aborder ?",
racine1: "Le 'Dieu des lacunes' se réduit-il à mesure que la science progresse ?",
racine2: "ou la complexité et l'ordre de l'univers renforcent-ils l'hypothèse d'un créateur ?",
enjeu: "Évaluer l'impact du scientisme sur la croyance religieuse."
},
{
id: 1118,
notion: 'religion',
intitule: "La religion est-elle avant tout un langage symbolique ?",
piste1: "Les textes et les rites religieux doivent-ils être interprétés comme des symboles et non pris au pied de la lettre ?",
piste2: "ou le symbolisme vide-t-il la religion de sa vérité littérale et de sa puissance ?",
racine1: "Le langage religieux est-il par nature métaphorique et analogique ?",
racine2: "ou la foi exige-t-elle l'adhésion à des faits historiques et littéraux ?",
enjeu: "Déterminer le statut du langage et des récits religieux."
},
{
id: 1119,
notion: 'religion',
intitule: "Les mythes religieux sont-ils des mensonges ?",
piste1: "Le mythe est-il un récit faux destiné à tromper les esprits naïfs ?",
piste2: "ou le mythe véhicule-t-il une vérité d'un autre ordre, inaccessible au discours rationnel ?",
racine1: "Le mythe s'oppose-t-il radicalement au logos et à la vérité factuelle ?",
racine2: "ou le mythe est-il la forme narrative nécessaire pour dire l'origine et le sacré ?",
enjeu: "Réhabiliter ou critiquer la fonction cognitive du mythe religieux."
},
{
id: 1120,
notion: 'religion',
intitule: "La religion trouve-t-elle son essence dans l'expérience mystique ?",
piste1: "Le mysticisme, comme union directe avec le divin, est-il le cœur de toute religion ?",
piste2: "ou le mysticisme est-il une dérive individuelle qui s'éloigne de la religion institutionnelle ?",
racine1: "L'expérience religieuse authentique est-elle ineffable et personnelle ?",
racine2: "ou la religion est-elle d'abord une affaire de dogmes et de communautés ?",
enjeu: "Examiner le rapport entre mystique et institution religieuse."
},
{
id: 1121,
notion: 'religion',
intitule: "L'expérience religieuse est-elle incommunicable ?",
piste1: "Le vécu du sacré est-il si singulier qu'il ne peut être partagé par des mots ?",
piste2: "ou la religion consiste-t-elle précisément à transmettre et à mettre en commun cette expérience ?",
racine1: "Le langage ordinaire est-il impuissant à rendre compte du divin ?",
racine2: "ou la liturgie et le témoignage parviennent-ils à communiquer l'expérience ?",
enjeu: "Déterminer les limites de l'expression de l'expérience religieuse."
},
{
id: 1122,
notion: 'religion',
intitule: "Peut-on prouver rationnellement l'existence de Dieu ?",
piste1: "La raison peut-elle démontrer l'existence d'un être suprême (preuves cosmologique, ontologique) ?",
piste2: "ou Dieu échappe-t-il par principe à toute démonstration rationnelle ?",
racine1: "Les preuves de l'existence de Dieu sont-elles des arguments logiques valides ?",
racine2: "ou la raison est-elle limitée au monde sensible et ne peut atteindre le transcendant ?",
enjeu: "Examiner la portée de la théologie naturelle et des preuves rationnelles."
},
{
id: 1123,
notion: 'religion',
intitule: "La foi est-elle un saut dans l'absurde ?",
piste1: "Croire exige-t-il de suspendre la raison et d'accepter ce qui la scandalise ?",
piste2: "ou la foi est-elle une adhésion raisonnable à des motifs de crédibilité ?",
racine1: "La foi est-elle une décision subjective et passionnée (Kierkegaard) ?",
racine2: "ou la foi est-elle l'accomplissement de la raison qui reconnaît ses limites ?",
enjeu: "Déterminer le rapport entre foi, raison et absurdité."
},
{
id: 1124,
notion: 'religion',
intitule: "La foi est-elle une certitude ou un pari ?",
piste1: "Le croyant possède-t-il une certitude absolue et indubitable ?",
piste2: "ou la foi est-elle un risque et un pari sur l'existence de Dieu (Pascal) ?",
racine1: "La certitude de la foi exclut-elle le doute et la probabilité ?",
racine2: "ou la foi est-elle une confiance qui s'engage malgré l'incertitude rationnelle ?",
enjeu: "Analyser la nature épistémologique de la croyance religieuse."
},
{
id: 1125,
notion: 'religion',
intitule: "Le doute est-il incompatible avec une foi authentique ?",
piste1: "Le doute est-il un péché ou une faiblesse qui menace la foi ?",
piste2: "ou le doute est-il une étape nécessaire et une purification de la foi ?",
racine1: "La foi exige-t-elle l'adhésion totale et sans réserve de l'esprit ?",
racine2: "ou la foi qui n'a jamais douté est-elle une foi naïve et dogmatique ?",
enjeu: "Examiner la place du doute dans la vie religieuse."
},
{
id: 1126,
notion: 'religion',
intitule: "La religion est-elle une réponse satisfaisante au problème du mal ?",
piste1: "La religion permet-elle de donner un sens à la souffrance et au mal dans le monde ?",
piste2: "ou l'existence du mal rend-elle la croyance en un Dieu bon et tout-puissant impossible ?",
racine1: "La théodicée peut-elle concilier la bonté divine et la réalité du mal ?",
racine2: "ou le mal est-il l'objection ultime et insurmontable contre la religion ?",
enjeu: "Examiner la pertinence de la religion face à l'énigme du mal."
},
{
id: 1127,
notion: 'religion',
intitule: "La religion est-elle une aliénation de l'essence humaine ?",
piste1: "En projetant ses propres perfections sur un Dieu imaginaire, l'homme s'appauvrit-il ?",
piste2: "ou la relation à Dieu est-elle ce qui permet à l'homme de s'accomplir pleinement ?",
racine1: "La religion est-elle une extériorisation illusoire de l'essence humaine (Feuerbach) ?",
racine2: "ou l'homme ne trouve-t-il sa vraie grandeur qu'en se rapportant à plus grand que lui ?",
enjeu: "Évaluer la critique de la religion comme aliénation."
},
{
id: 1128,
notion: 'religion',
intitule: "La religion est-elle en déclin inéluctable ?",
piste1: "La sécularisation et la modernité condamnent-elles la religion à disparaître ?",
piste2: "ou la religion se transforme-t-elle pour survivre et rester pertinente ?",
racine1: "Le progrès de la rationalité scientifique rend-il la religion obsolète ?",
racine2: "ou le 'retour du religieux' montre-t-il la persistance du besoin de sens ?",
enjeu: "Diagnostiquer l'avenir de la religion dans le monde contemporain."
},
{
id: 1129,
notion: 'religion',
intitule: "La spiritualité individuelle remplace-t-elle la religion institutionnelle ?",
piste1: "Les individus cherchent-ils aujourd'hui une spiritualité sans dogme ni église ?",
piste2: "ou cette spiritualité 'à la carte' est-elle une illusion qui vide le religieux de sa substance ?",
racine1: "Le déclin des institutions libère-t-il une quête authentique du sacré ?",
racine2: "ou la religion a-t-elle besoin d'une communauté et d'une tradition pour exister ?",
enjeu: "Examiner la mutation contemporaine du fait religieux."
},
{
id: 1130,
notion: 'religion',
intitule: "La religion institutionnelle est-elle une trahison du message spirituel ?",
piste1: "L'Église ou l'institution religieuse trahit-elle la pureté du message originel par son pouvoir ?",
piste2: "ou l'institution est-elle nécessaire pour préserver et transmettre la vérité spirituelle ?",
racine1: "L'institutionnalisation fige-t-elle et corrompt-elle l'expérience religieuse vivante ?",
racine2: "ou sans institution, le message spirituel se perd-il dans le subjectivisme ?",
enjeu: "Débattre de la nécessité et des dérives de l'institution religieuse."
},
{
id: 1131,
notion: 'religion',
intitule: "La religion est-elle fondamentalement une affaire de tradition ?",
piste1: "La religion consiste-t-elle à transmettre fidèlement un héritage sacré du passé ?",
piste2: "ou la religion doit-elle se réinterpréter constamment pour rester vivante ?",
racine1: "La tradition est-elle la garantie de l'authenticité religieuse ?",
racine2: "ou l'attachement à la tradition est-il un frein à l'adaptation nécessaire ?",
enjeu: "Examiner le rôle de la tradition dans la religion."
},
{
id: 1132,
notion: 'religion',
intitule: "La religion est-elle compatible avec les valeurs de la modernité ?",
piste1: "La religion peut-elle s'accommoder des droits de l'homme, de l'égalité et de la liberté individuelle ?",
piste2: "ou la religion s'oppose-t-elle structurellement aux acquis de la modernité ?",
racine1: "La modernité exige-t-elle l'abandon des vérités religieuses absolues ?",
racine2: "ou la religion peut-elle être un contrepoids nécessaire aux excès de la modernité ?",
enjeu: "Évaluer la tension entre religion et modernité."
},
{
id: 1133,
notion: 'religion',
intitule: "Le fondamentalisme est-il l'essence de la religion ?",
piste1: "Le fondamentalisme est-il un retour à la vérité pure et originelle de la religion ?",
piste2: "ou est-il une dérive moderne et une trahison de l'esprit religieux ?",
racine1: "Toute religion contient-elle un germe fondamentaliste par sa revendication de vérité absolue ?",
racine2: "ou le fondamentalisme est-il une réaction politique déguisée en religion ?",
enjeu: "Analyser la nature et les causes du fondamentalisme religieux."
},
{
id: 1134,
notion: 'religion',
intitule: "La religion est-elle tolérante par nature ?",
piste1: "La religion enseigne-t-elle le respect de l'autre et l'ouverture ?",
piste2: "ou la prétention à détenir la vérité unique engendre-t-elle l'intolérance ?",
racine1: "La charité et la compassion sont-elles les vertus cardinales de toute religion ?",
racine2: "ou l'histoire des religions est-elle celle de la persécution des hérétiques et des infidèles ?",
enjeu: "Examiner la capacité de la religion à pratiquer la tolérance."
},
{
id: 1135,
notion: 'religion',
intitule: "La religion est-elle capable d'un dialogue authentique avec les autres croyances ?",
piste1: "Le dialogue interreligieux est-il possible et fructueux ?",
piste2: "ou chaque religion est-elle enfermée dans son propre langage et ses propres vérités ?",
racine1: "Le dialogue suppose-t-il de relativiser sa propre vérité ?",
racine2: "ou peut-on dialoguer tout en restant fermement attaché à sa foi ?",
enjeu: "Évaluer la possibilité et les conditions du dialogue interreligieux."
},
{
id: 1136,
notion: 'religion',
intitule: "La religion est-elle avant tout une quête de salut ?",
piste1: "Le but ultime de la religion est-il de sauver l'homme de la mort, du péché ou de l'ignorance ?",
piste2: "ou la religion vise-t-elle d'abord à organiser la vie sociale ici-bas ?",
racine1: "La promesse du salut est-elle le moteur principal de l'adhésion religieuse ?",
racine2: "ou le salut est-il une métaphore pour désigner l'épanouissement terrestre ?",
enjeu: "Déterminer la finalité sotériologique de la religion."
},
{
id: 1137,
notion: 'religion',
intitule: "La promesse du salut est-elle une illusion qui détourne de la vie présente ?",
piste1: "L'espérance d'une vie après la mort nous empêche-t-elle d'agir pour améliorer ce monde ?",
piste2: "ou l'espérance du salut donne-t-elle au contraire la force de transformer le présent ?",
racine1: "La religion est-elle une fuite hors du monde réel ?",
racine2: "ou la perspective du salut donne-t-elle un sens et un courage à l'action terrestre ?",
enjeu: "Examiner l'impact de l'espérance religieuse sur l'engagement dans le monde."
},
{
id: 1138,
notion: 'religion',
intitule: "La religion est-elle une soumission ou une libération ?",
piste1: "La religion est-elle une soumission (islam) à une autorité transcendante qui nous écrase ?",
piste2: "ou est-elle une libération des passions, de la peur et des aliénations terrestres ?",
racine1: "L'obéissance à Dieu est-elle une perte de liberté ou la condition de la liberté véritable ?",
racine2: "ou la religion est-elle un cadre qui structure et libère l'existence ?",
enjeu: "Déterminer si la religion asservit ou émancipe le sujet."
},
{
id: 1139,
notion: 'religion',
intitule: "La religion est-elle une discipline du corps et des désirs ?",
piste1: "La religion impose-t-elle des interdits et des ascèses pour maîtriser le corps ?",
piste2: "ou la religion valorise-t-elle le corps comme temple du divin ?",
racine1: "La religion est-elle fondamentalement hostile à la chair et aux plaisirs ?",
racine2: "ou la discipline religieuse vise-t-elle à libérer l'esprit pour une joie supérieure ?",
enjeu: "Examiner le rapport entre religion, corps et ascèse."
},
{
id: 1140,
notion: 'religion',
intitule: "Les institutions religieuses sont-elles structurellement patriarcales ?",
piste1: "La religion a-t-elle historiquement et structurellement exclu les femmes du pouvoir et de la parole ?",
piste2: "ou la religion contient-elle des ressources pour l'égalité et l'émancipation des femmes ?",
racine1: "Le patriarcat est-il une déformation historique ou une essence des textes sacrés ?",
racine2: "ou les figures féminines du sacré (déesses, saintes) offrent-elles des modèles d'émancipation ?",
enjeu: "Examiner le rapport entre religion et condition féminine."
},
{
id: 1141,
notion: 'religion',
intitule: "La religion peut-elle être féministe ?",
piste1: "Est-il possible de réinterpréter les textes et les traditions religieuses dans un sens féministe ?",
piste2: "ou le féminisme et la religion sont-ils des systèmes de valeurs incompatibles ?",
racine1: "La religion peut-elle évoluer pour intégrer l'égalité des genres ?",
racine2: "ou la religion est-elle par définition un système de domination masculine ?",
enjeu: "Évaluer la compatibilité entre foi et féminisme."
},
{
id: 1142,
notion: 'religion',
intitule: "La religion est-elle d'abord une communauté de croyants ?",
piste1: "La religion existe-t-elle principalement à travers le lien social qu'elle crée (l'Église, l'Oumma) ?",
piste2: "ou la religion est-elle d'abord une relation verticale et personnelle entre l'individu et Dieu ?",
racine1: "Le salut est-il une affaire individuelle ou communautaire ?",
racine2: "ou la foi personnelle a-t-elle besoin de la communauté pour s'exprimer et se nourrir ?",
enjeu: "Déterminer la primauté de l'individu ou de la communauté dans la religion."
},
{
id: 1143,
notion: 'religion',
intitule: "La religion crée-t-elle du lien social là où la société se délite ?",
piste1: "La religion est-elle un facteur de cohésion et de solidarité indispensable ?",
piste2: "ou la religion crée-t-elle des communautarismes qui fragmentent la société ?",
racine1: "La religion remplit-elle une fonction sociale que l'État et la laïcité ne peuvent assurer ?",
racine2: "ou le lien religieux est-il exclusif et menace-t-il le lien civique universel ?",
enjeu: "Examiner la fonction intégratrice ou désintégratrice de la religion."
},
{
id: 1144,
notion: 'religion',
intitule: "La religion est-elle devenue un marqueur identitaire plus qu'une foi ?",
piste1: "Se dire religieux, est-ce d'abord affirmer une appartenance culturelle ou ethnique ?",
piste2: "ou la dimension spirituelle et croyante reste-t-elle première ?",
racine1: "La religion est-elle utilisée comme un drapeau identitaire dans un monde globalisé ?",
racine2: "ou l'identité religieuse est-elle indissociable de la pratique et de la croyance ?",
enjeu: "Analyser la réduction de la religion à une identité culturelle."
},
{
id: 1145,
notion: 'religion',
intitule: "La religion peut-elle être un choix purement individuel et rationnel ?",
piste1: "Peut-on choisir sa religion comme on choisit une philosophie ou un mode de vie ?",
piste2: "ou la religion est-elle toujours un héritage subi et une grâce reçue ?",
racine1: "La conversion rationnelle est-elle possible et authentique ?",
racine2: "ou l'appartenance religieuse est-elle déterminée par la naissance et l'éducation ?",
enjeu: "Examiner la part du choix et de l'héritage dans l'appartenance religieuse."
},
{
id: 1146,
notion: 'religion',
intitule: "La religion a-t-elle un rôle éducatif irremplaçable ?",
piste1: "La religion transmet-elle des valeurs et une sagesse que l'école laïque ne peut enseigner ?",
piste2: "ou l'éducation religieuse est-elle un endoctrinement qui nuit à l'esprit critique ?",
racine1: "La religion forme-t-elle le caractère et la conscience morale des enfants ?",
racine2: "ou l'éducation doit-elle être strictement neutre pour respecter la liberté future de l'enfant ?",
enjeu: "Débattre de la place de l'éducation religieuse."
},
{
id: 1147,
notion: 'religion',
intitule: "La religion est-elle une forme de philosophie populaire ?",
piste1: "La religion offre-t-elle des réponses métaphoriques aux mêmes questions que la philosophie ?",
piste2: "ou la religion et la philosophie ont-elles des méthodes et des objets radicalement différents ?",
racine1: "La religion est-elle une métaphysique en images pour le peuple ?",
racine2: "ou la philosophie critique-t-elle les présupposés que la religion tient pour acquis ?",
enjeu: "Comparer la démarche religieuse et la démarche philosophique."
},
{
id: 1148,
notion: 'religion',
intitule: "La philosophie peut-elle et doit-elle remplacer la religion ?",
piste1: "La philosophie peut-elle combler le vide laissé par le déclin de la religion ?",
piste2: "ou la philosophie est-elle impuissante à répondre aux besoins existentiels que la religion satisfait ?",
racine1: "La raison philosophique suffit-elle à donner un sens à la vie et à la mort ?",
racine2: "ou la philosophie et la religion répondent-elles à des registres différents de l'existence ?",
enjeu: "Examiner la prétention de la philosophie à se substituer à la religion."
},
{
id: 1149,
notion: 'religion',
intitule: "La religion a-t-elle encore un avenir dans un monde sécularisé ?",
piste1: "La sécularisation est-elle un processus irréversible qui condamne la religion à la marginalité ?",
piste2: "ou la religion est-elle en train de se réinventer pour rester pertinente ?",
racine1: "La modernité a-t-elle définitivement résolu les questions que la religion posait ?",
racine2: "ou les crises de la modernité provoquent-elles un retour du besoin de religieux ?",
enjeu: "Prospecter l'avenir de la religion dans les sociétés contemporaines."
},
{
id: 1150,
notion: 'religion',
intitule: "La religion est-elle une nécessité anthropologique permanente ?",
piste1: "L'homme aura-t-il toujours besoin de religion pour supporter sa condition ?",
piste2: "ou l'humanité peut-elle atteindre une maturité où la religion devient obsolète ?",
racine1: "Le besoin de sacré est-il inscrit dans la structure même de la psyché humaine ?",
racine2: "ou la religion est-elle une phase de l'enfance de l'humanité que nous pouvons dépasser ?",
enjeu: "Déterminer si la religion est une constante ou une étape de l'histoire humaine."
},
{
id: 1151,
notion: 'religion',
intitule: "L'humanité peut-elle vivre et s'organiser sans aucune religion ?",
piste1: "Les sociétés athées ou post-religieuses peuvent-elles être stables et morales ?",
piste2: "ou l'absence de religion conduit-elle inévitablement au nihilisme et à la désintégration sociale ?",
racine1: "La morale et le lien social peuvent-ils se passer de tout fondement sacré ?",
racine2: "ou la religion est-elle le ciment invisible de toute société humaine ?",
enjeu: "Examiner la possibilité d'une société entièrement sécularisée."
},
{
id: 1152,
notion: 'religion',
intitule: "La religion peut-elle se définir de manière unique et universelle ?",
piste1: "Existe-t-il une essence de la religion qui englobe toutes les traditions historiques ?",
piste2: "ou le terme 'religion' est-il une catégorie occidentale inapplicable à d'autres cultures ?",
racine1: "Peut-on trouver des critères objectifs (croyance, rite, communauté) communs à toutes les religions ?",
racine2: "ou la diversité des phénomènes religieux résiste-t-elle à toute définition univoque ?",
enjeu: "Interroger la possibilité et les limites d'une définition universelle de la religion."
},
{
id: 1153,
notion: 'religion',
intitule: "Le sacré est-il le noyau de toute religion ?",
piste1: "Toute religion se définit-elle par la séparation entre le sacré et le profane ?",
piste2: "ou le sacré est-il une catégorie dépassée dans les religions modernes ?",
racine1: "L'expérience du sacré (Rudolf Otto) est-elle le fondement irréductible du religieux ?",
racine2: "ou la religion peut-elle être entièrement éthique et rationnelle, sans dimension sacrée ?",
enjeu: "Examiner le rôle central de la catégorie du sacré dans la religion."
},
{
id: 1154,
notion: 'religion',
intitule: "La religion est-elle une réponse à la finitude humaine ?",
piste1: "La religion naît-elle de la prise de conscience de notre mortalité et de nos limites ?",
piste2: "ou la religion est-elle une négation de la finitude qui nous empêche d'assumer notre condition ?",
racine1: "La religion offre-t-elle les seuls moyens symboliques pour apprivoiser la mort ?",
racine2: "ou l'acceptation lucide de la finitude rend-elle la religion inutile ?",
enjeu: "Lier la genèse de la religion à la condition finie de l'homme."
},
{
id: 1155,
notion: 'religion',
intitule: "La religion est-elle une forme d'art sublimé ?",
piste1: "La religion et l'art partagent-ils la même fonction de création de sens par la forme symbolique ?",
piste2: "ou la religion prétend-elle à une vérité factuelle que l'art ne revendique pas ?",
racine1: "Le rituel et le mythe sont-ils des œuvres d'art collectives ?",
racine2: "ou la religion exige-t-elle une adhésion que l'expérience esthétique ne demande pas ?",
enjeu: "Comparer les structures de l'expérience religieuse et de l'expérience artistique."
},
{
id: 1156,
notion: 'religion',
intitule: "La religion est-elle un facteur d'humanisation ?",
piste1: "La religion a-t-elle permis à l'homme de s'arracher à la barbarie et de développer la morale ?",
piste2: "ou la religion a-t-elle souvent été un frein à l'humanisme et à l'émancipation ?",
racine1: "Les interdits religieux (meurtre, inceste) sont-ils le fondement de la civilisation ?",
racine2: "ou l'humanisme s'est-il construit contre les dogmes religieux ?",
enjeu: "Évaluer le rôle de la religion dans l'histoire de l'humanisation."
},
{
id: 1157,
notion: 'religion',
intitule: "La religion est-elle une quête de sens ?",
piste1: "La religion répond-elle au besoin humain fondamental de donner un sens à l'existence ?",
piste2: "ou la religion impose-t-elle un sens tout fait qui dispense de la recherche personnelle ?",
racine1: "La religion comble-t-elle le vide de sens inhérent à la condition humaine ?",
racine2: "ou la religion est-elle une réponse illusoire à une question qui n'a pas de réponse ?",
enjeu: "Examiner la fonction de production de sens de la religion."
},
{
id: 1158,
notion: 'religion',
intitule: "La religion est-elle compatible avec la liberté de conscience ?",
piste1: "Une religion qui prétend détenir la vérité absolue peut-elle respecter la liberté de ne pas croire ?",
piste2: "ou la liberté de conscience est-elle une valeur qui peut être défendue au sein même de la religion ?",
racine1: "Le dogmatisme religieux est-il intrinsèquement intolérant ?",
racine2: "ou la foi authentique exige-t-elle la liberté de l'adhésion ?",
enjeu: "Confréter la prétention à la vérité absolue et l'exigence de liberté de conscience."
},
{
id: 1159,
notion: 'religion',
intitule: "La religion est-elle une affaire de femmes ?",
piste1: "Les femmes sont-elles plus religieuses que les hommes et constituent-elles le pilier des communautés ?",
piste2: "ou cette idée est-elle un stéréotype qui masque l'exclusion des femmes du pouvoir religieux ?",
racine1: "La piété est-elle une vertu assignée culturellement au féminin ?",
racine2: "ou les femmes trouvent-elles dans la religion un espace d'autonomie et de pouvoir ?",
enjeu: "Analyser la sociologie du genre dans le fait religieux."
},
{
id: 1160,
notion: 'religion',
intitule: "La religion peut-elle être une source de joie ?",
piste1: "La religion est-elle associée à la tristesse, à la culpabilité et à l'interdit ?",
piste2: "ou la religion est-elle d'abord une source de joie, de gratitude et de célébration ?",
racine1: "La religion est-elle une morale de la faute qui pèse sur l'existence ?",
racine2: "ou la religion est-elle la bonne nouvelle d'une libération et d'une réconciliation ?",
enjeu: "Réhabiliter la dimension joyeuse et festive de l'expérience religieuse."
},
{
id: 1161,
notion: 'religion',
intitule: "La religion est-elle une réponse à la solitude existentielle ?",
piste1: "La religion nous relie-t-elle à une présence qui comble notre solitude fondamentale ?",
piste2: "ou la religion est-elle une fuite devant la responsabilité de notre solitude ?",
racine1: "La relation à Dieu est-elle la seule relation qui ne déçoit pas et qui comble le manque ?",
racine2: "ou la religion est-elle une illusion qui nous empêche d'assumer notre existence singulière ?",
enjeu: "Examiner le rapport entre religion et solitude."
},
{
id: 1162,
notion: 'religion',
intitule: "La religion est-elle un langage de la reconnaissance ?",
piste1: "La religion permet-elle de reconnaître la dignité sacrée de chaque être humain ?",
piste2: "ou la religion divise-t-elle l'humanité entre croyants et infidèles, niant cette reconnaissance ?",
racine1: "L'idée de création à l'image de Dieu fonde-t-elle l'égalité et le respect universels ?",
racine2: "ou l'histoire religieuse est-elle celle de l'exclusion et de la persécution ?",
enjeu: "Déterminer si la religion fonde ou détruit la reconnaissance mutuelle."
},
{
id: 1163,
notion: 'religion',
intitule: "La religion est-elle une discipline de l'attention ?",
piste1: "La prière et la méditation religieuse sont-elles des exercices pour éduquer l'attention et la présence ?",
piste2: "ou la religion est-elle une distraction qui nous éloigne du réel immédiat ?",
racine1: "La vie religieuse est-elle un apprentissage de la présence à soi, aux autres et au divin ?",
racine2: "ou la religion est-elle une évasion hors du monde présent ?",
enjeu: "Examiner la religion comme pratique de l'attention et de la présence."
},
{
id: 1164,
notion: 'religion',
intitule: "La religion est-elle une réponse à la contingence du monde ?",
piste1: "La religion explique-t-elle pourquoi il y a quelque chose plutôt que rien ?",
piste2: "ou la religion est-elle une tentative désespérée de nier le hasard et la contingence ?",
racine1: "L'idée de Dieu est-elle la seule réponse rationnelle à la contingence de l'univers ?",
racine2: "ou la contingence est-elle un fait brut que la religion tente vainement de masquer ?",
enjeu: "Lier la religion à la question métaphysique de la contingence."
},
{
id: 1165,
notion: 'religion',
intitule: "La religion est-elle une forme de résistance ?",
piste1: "La religion peut-elle être un lieu de résistance contre les totalitarismes et le matérialisme ?",
piste2: "ou la religion est-elle souvent complice des pouvoirs en place ?",
racine1: "La foi offre-t-elle un point d'appui extérieur pour critiquer l'ordre établi ?",
racine2: "ou la religion est-elle structurellement conservatrice et soumise à l'autorité ?",
enjeu: "Examiner le potentiel critique et résistant de la religion."
},
{
id: 1166,
notion: 'religion',
intitule: "La religion est-elle une affaire de mémoire ?",
piste1: "La religion consiste-t-elle à se souvenir et à commémorer des événements fondateurs ?",
piste2: "ou la religion est-elle une présence vivante qui ne se réduit pas à la mémoire ?",
racine1: "Le rite est-il une répétition mémorielle qui actualise le passé ?",
racine2: "ou la religion est-elle une attente et une espérance tournées vers l'avenir ?",
enjeu: "Déterminer le rapport entre religion, mémoire et commémoration."
},
{
id: 1167,
notion: 'religion',
intitule: "La religion est-elle une forme de thérapie ?",
piste1: "La religion guérit-elle les maux de l'âme et apporte-t-elle la paix intérieure ?",
piste2: "ou la religion est-elle une pathologie qui crée des névroses et des culpabilités ?",
racine1: "La confession et le pardon sont-ils des outils thérapeutiques efficaces ?",
racine2: "ou la religion est-elle une illusion qui empêche la vraie guérison psychologique ?",
enjeu: "Comparer la fonction religieuse et la fonction thérapeutique."
},
{
id: 1168,
notion: 'religion',
intitule: "La religion est-elle une quête d'absolu ?",
piste1: "La religion est-elle le désir humain de toucher à l'absolu et à l'inconditionné ?",
piste2: "ou la religion est-elle une tentative de ramener l'absolu à des mesures humaines et finies ?",
racine1: "L'homme est-il hanté par le désir de l'infini que la religion tente de satisfaire ?",
racine2: "ou la religion est-elle une idolâtrie qui enferme l'infini dans des formes finies ?",
enjeu: "Examiner la religion comme expression du désir d'absolu."
},
{
id: 1169,
notion: 'religion',
intitule: "La religion est-elle une école de l'humilité ?",
piste1: "La religion apprend-elle à l'homme à reconnaître ses limites et sa dépendance ?",
piste2: "ou la religion nourrit-elle l'orgueil de ceux qui se croient élus ou détenteurs de la vérité ?",
racine1: "La conscience de la créature est-elle le fondement de l'humilité morale ?",
racine2: "ou la religion est-elle une source de vanité spirituelle et de mépris des autres ?",
enjeu: "Déterminer si la religion enseigne l'humilité ou l'orgueil."
},
{
id: 1170,
notion: 'religion',
intitule: "La religion est-elle une réponse à la question du pourquoi ?",
piste1: "La religion explique-t-elle le sens ultime des choses là où la science s'arrête ?",
piste2: "ou la question du 'pourquoi' est-elle une illusion que la religion entretient ?",
racine1: "La religion a-t-elle le monopole des réponses aux questions de sens ?",
racine2: "ou la science et la philosophie peuvent-elles aussi répondre au 'pourquoi' ?",
enjeu: "Délimiter le domaine de compétence de la religion face aux autres discours."
},
{
id: 1171,
notion: 'religion',
intitule: "La religion est-elle une forme de poésie ?",
piste1: "Le langage religieux est-il poétique, visant à évoquer plutôt qu'à décrire ?",
piste2: "ou la religion prétend-elle à une vérité littérale que la poésie ne revendique pas ?",
racine1: "La prière et le texte sacré sont-ils des œuvres poétiques qui disent l'indicible ?",
racine2: "ou la religion exige-t-elle une adhésion dogmatique étrangère à la liberté poétique ?",
enjeu: "Comparer le langage religieux et le langage poétique."
},
{
id: 1172,
notion: 'religion',
intitule: "La religion est-elle une affaire de génération ?",
piste1: "La transmission de la religion de père en fils est-elle le mode principal de sa survie ?",
piste2: "ou la religion doit-elle être choisie personnellement à l'âge adulte pour être authentique ?",
racine1: "L'héritage religieux est-il une chaîne qui lie les générations ?",
racine2: "ou la foi imposée par la famille est-elle une contradiction dans les termes ?",
enjeu: "Examiner la transmission intergénérationnelle de la religion."
},
{
id: 1173,
notion: 'religion',
intitule: "La religion est-elle un refuge ?",
piste1: "La religion offre-t-elle un abri contre les tempêtes de la vie et l'incertitude du monde ?",
piste2: "ou ce refuge est-il une forteresse qui nous isole du monde réel ?",
racine1: "La religion est-elle un port sûr pour l'âme en détresse ?",
racine2: "ou la religion est-elle une fuite qui nous empêche d'affronter nos responsabilités ?",
enjeu: "Évaluer la fonction de refuge de la religion."
},
{
id: 1174,
notion: 'religion',
intitule: "La religion est-elle une forme de connaissance ?",
piste1: "La religion nous donne-t-elle accès à une connaissance supérieure ou mystique du réel ?",
piste2: "ou la religion est-elle un domaine de croyance qui s'oppose à la connaissance ?",
racine1: "La gnose ou la révélation sont-elles des formes de savoir valables ?",
racine2: "ou la religion relève-t-elle de la pratique et de l'engagement, non du savoir ?",
enjeu: "Déterminer si la religion a une prétention ou une valeur cognitive."
},
{
id: 1175,
notion: 'religion',
intitule: "La religion est-elle une réponse à la question de l'origine ?",
piste1: "La religion satisfait-elle notre besoin de savoir d'où nous venons et qui a créé le monde ?",
piste2: "ou les récits de la création sont-ils des mythes qui ne répondent pas à la question scientifique ?",
racine1: "Le mythe de la création est-il une réponse symbolique à la question de l'origine ?",
racine2: "ou la religion doit-elle s'effacer devant l'explication cosmologique scientifique ?",
enjeu: "Examiner le rôle de la religion dans l'explication des origines."
},
{
id: 1176,
notion: 'religion',
intitule: "La religion est-elle une forme de justice ?",
piste1: "La religion promet-elle une justice ultime (jugement dernier, karma) que le monde ne fournit pas ?",
piste2: "ou cette promesse de justice future est-elle une illusion qui nous fait accepter l'injustice présente ?",
racine1: "L'idée de Dieu est-elle le garant nécessaire de la justice morale ?",
racine2: "ou la religion est-elle un opium qui détourne de la lutte pour la justice ici-bas ?",
enjeu: "Lier la religion à l'exigence de justice."
},
{
id: 1177,
notion: 'religion',
intitule: "La religion est-elle une forme de gratitude ?",
piste1: "La religion est-elle d'abord une reconnaissance et une action de grâce pour le don de la vie ?",
piste2: "ou la religion est-elle une transaction (do ut des) où l'on donne pour recevoir ?",
racine1: "La prière est-elle l'expression de la gratitude envers le créateur ?",
racine2: "ou la religion est-elle un marchandage avec le divin ?",
enjeu: "Examiner la religion comme attitude de gratitude."
},
{
id: 1178,
notion: 'religion',
intitule: "La religion est-elle une forme de pouvoir ?",
piste1: "La religion est-elle un instrument de domination et de contrôle social ?",
piste2: "ou la religion est-elle un contre-pouvoir qui limite l'arbitraire de l'État ?",
racine1: "Le clergé utilise-t-il le sacré pour asseoir son autorité temporelle ?",
racine2: "ou la religion est-elle la seule instance capable de dire 'non' au pouvoir politique ?",
enjeu: "Analyser la religion sous l'angle des rapports de pouvoir."
},
{
id: 1179,
notion: 'religion',
intitule: "La religion est-elle une forme de beauté ?",
piste1: "La religion est-elle la source principale de la beauté dans l'histoire (architecture, musique, art) ?",
piste2: "ou la beauté religieuse est-elle une idolâtrie qui détourne de la simplicité du message ?",
racine1: "Le beau est-il un chemin privilégié vers le divin (la voie de la beauté) ?",
racine2: "ou la religion authentique est-elle indifférente ou hostile à la beauté esthétique ?",
enjeu: "Examiner le rapport entre religion et beauté."
},
{
id: 1180,
notion: 'religion',
intitule: "La religion est-elle une forme de silence ?",
piste1: "La religion aboutit-elle au silence mystique, reconnaissant l'ineffabilité du divin ?",
piste2: "ou la religion est-elle un bavardage dogmatique qui prétend tout dire de Dieu ?",
racine1: "Le silence est-il le langage le plus approprié pour parler de l'absolu ?",
racine2: "ou la religion a-t-elle pour tâche de proclamer et d'enseigner la parole divine ?",
enjeu: "Déterminer la place du silence dans l'expérience et l'expression religieuses."
},
{
id: 1181,
notion: 'religion',
intitule: "La religion est-elle une forme de don ?",
piste1: "La religion est-elle fondée sur l'idée d'un don initial de Dieu et sur la pratique du don aux autres ?",
piste2: "ou la religion est-elle un système de dettes et de sacrifices que l'homme doit payer ?",
racine1: "La grâce est-elle un don gratuit qui fonde toute l'économie religieuse ?",
racine2: "ou la religion est-elle un commerce où l'on achète le salut par des œuvres ?",
enjeu: "Examiner la religion à travers la catégorie du don et de la dette."
},
{
id: 1182,
notion: 'religion',
intitule: "La religion est-elle une forme de mémoire collective ?",
piste1: "La religion est-elle ce qui permet à un peuple de se souvenir de son histoire et de ses valeurs ?",
piste2: "ou la religion est-elle un mythe qui déforme l'histoire réelle ?",
racine1: "Le rite est-il une mémoire en acte qui soude la communauté ?",
racine2: "ou la religion est-elle un oubli du réel au profit d'un récit idéalisé ?",
enjeu: "Lier la religion à la constitution de la mémoire collective."
},
{
id: 1183,
notion: 'religion',
intitule: "La religion est-elle une forme de résistance à la mort ?",
piste1: "La religion est-elle la négation de la mort et l'affirmation de la vie éternelle ?",
piste2: "ou la religion est-elle une acceptation lucide de la mort comme passage ?",
racine1: "La religion est-elle un déni de la finitude ?",
racine2: "ou la religion est-elle la seule manière de donner un sens à la mortalité ?",
enjeu: "Examiner le rapport de la religion à la mort."
},
{
id: 1184,
notion: 'religion',
intitule: "La religion est-elle une forme de sagesse ?",
piste1: "La religion enseigne-t-elle un art de vivre et une sagesse pratique ?",
piste2: "ou la religion est-elle une doctrine théorique déconnectée de la vie ?",
racine1: "Les textes sacrés sont-ils des guides de sagesse pour l'existence quotidienne ?",
racine2: "ou la sagesse est-elle une conquête philosophique indépendante de la religion ?",
enjeu: "Comparer la sagesse religieuse et la sagesse philosophique."
},
{
id: 1185,
notion: 'religion',
intitule: "La religion est-elle une forme de liberté ?",
piste1: "La religion libère-t-elle l'homme de la peur, du péché et des déterminismes ?",
piste2: "ou la religion est-elle un système d'interdits qui aliène la liberté ?",
racine1: "La vérité religieuse est-elle ce qui rend libre ('la vérité vous rendra libres') ?",
racine2: "ou la religion est-elle une soumission qui annule l'autonomie du sujet ?",
enjeu: "Déterminer si la religion est une libération ou une aliénation."
},
{
id: 1186,
notion: 'religion',
intitule: "La religion est-elle une forme de responsabilité ?",
piste1: "La religion rend-elle l'homme responsable de ses actes devant Dieu et devant les autres ?",
piste2: "ou la religion décharge-t-elle l'homme de sa responsabilité en remettant tout entre les mains de Dieu ?",
racine1: "Le jugement dernier est-il le fondement ultime de la responsabilité morale ?",
racine2: "ou la religion est-elle une excuse pour ne pas agir dans le monde ?",
enjeu: "Examiner le lien entre religion et responsabilité."
},
{
id: 1187,
notion: 'religion',
intitule: "La religion est-elle une forme de communauté ?",
piste1: "La religion crée-t-elle une communauté de destin et de valeurs plus forte que les liens du sang ?",
piste2: "ou la communauté religieuse est-elle une secte qui isole et coupe du reste de la société ?",
racine1: "L'Église ou l'Oumma sont-elles des modèles de communauté fraternelle ?",
racine2: "ou la religion divise-t-elle l'humanité en groupes hostiles ?",
enjeu: "Analyser la dimension communautaire de la religion."
},
{
id: 1188,
notion: 'religion',
intitule: "La religion est-elle une forme de tradition vivante ?",
piste1: "La religion est-elle une tradition qui s'adapte et se réinterprète à chaque époque ?",
piste2: "ou la religion est-elle une tradition figée qui refuse tout changement ?",
racine1: "La tradition religieuse est-elle un fleuve qui coule et se renouvelle ?",
racine2: "ou la religion est-elle un musée qui conserve des formes mortes ?",
enjeu: "Examiner la dynamique de la tradition religieuse."
},
{
id: 1189,
notion: 'religion',
intitule: "La religion est-elle une forme de langage performatif ?",
piste1: "Les paroles religieuses (bénédiction, prière, serment) transforment-elles la réalité ?",
piste2: "ou les paroles religieuses sont-elles seulement des vœux ou des descriptions ?",
racine1: "Le langage sacré a-t-il un pouvoir de création et de transformation ?",
racine2: "ou le langage religieux est-il purement symbolique et sans effet réel ?",
enjeu: "Examiner la dimension performative du langage religieux."
},
{
id: 1190,
notion: 'religion',
intitule: "La religion est-elle une forme de réponse au chaos ?",
piste1: "La religion met-elle de l'ordre et du sens dans un monde qui semble chaotique et absurde ?",
piste2: "ou la religion est-elle un ordre illusoire qui nous empêche d'accepter le chaos du réel ?",
racine1: "Le mythe et le rite sont-ils des moyens de dominer le chaos et d'instaurer le cosmos ?",
racine2: "ou la religion est-elle une fuite devant l'acceptation du chaos et de l'imprévisible ?",
enjeu: "Lier la religion à la lutte contre le chaos et l'absurde."
},
{
id: 1191,
notion: 'religion',
intitule: "La religion est-elle une forme de reconnaissance de l'altérité radicale ?",
piste1: "La religion nous apprend-elle à reconnaître l'altérité de Dieu et, par extension, celle d'autrui ?",
piste2: "ou la religion est-elle une tentative de ramener l'autre au même et de le contrôler ?",
racine1: "L'expérience du sacré est-elle l'expérience d'une altérité qui nous dépasse et nous oblige ?",
racine2: "ou la religion est-elle une projection de nos propres désirs sur un écran divin ?",
enjeu: "Examiner la religion comme école de la reconnaissance de l'altérité."
},
{
id: 1192,
notion: 'religion',
intitule: "La religion est-elle une forme de pardon ?",
piste1: "La religion offre-t-elle la possibilité unique du pardon et de la réconciliation ?",
piste2: "ou la religion est-elle un système de punition et de vengeance qui rend le pardon impossible ?",
racine1: "Le pardon divin est-il le modèle et la condition du pardon entre les hommes ?",
racine2: "ou la religion est-elle une machine à produire de la culpabilité qui empêche le pardon ?",
enjeu: "Déterminer le rôle de la religion dans l'économie du pardon."
},
{
id: 1193,
notion: 'religion',
intitule: "La religion est-elle une forme de fête ?",
piste1: "La religion est-elle à l'origine des fêtes qui rompent la monotonie du temps profane ?",
piste2: "ou la fête religieuse est-elle devenue une routine vide de sens ?",
racine1: "Le rite festif est-il le cœur battant de la religion qui célèbre la vie ?",
racine2: "ou la religion est-elle une discipline austère qui se méfie de la fête ?",
enjeu: "Examiner le rapport entre religion, fête et célébration."
},
{
id: 1194,
notion: 'religion',
intitule: "La religion est-elle une forme de pèlerinage ?",
piste1: "La vie religieuse est-elle essentiellement un cheminement, un voyage vers un lieu ou un état sacré ?",
piste2: "ou la religion est-elle une sédentarisation et un enfermement dans des institutions ?",
racine1: "Le pèlerinage est-il la métaphore de la condition humaine en quête de sens ?",
racine2: "ou la religion est-elle une forteresse qui défend ses frontières ?",
enjeu: "Penser la religion comme mouvement et cheminement."
},
{
id: 1195,
notion: 'religion',
intitule: "La religion est-elle une forme de service ?",
piste1: "La religion est-elle un service rendu à Dieu et, à travers lui, aux hommes (charité) ?",
piste2: "ou la religion est-elle une quête égoïste de salut personnel ?",
racine1: "Le service des pauvres est-il le véritable critère de l'authenticité religieuse ?",
racine2: "ou la religion est-elle un commerce spirituel où l'on cherche son propre avantage ?",
enjeu: "Examiner la religion sous l'angle du service et de la charité."
},
{
id: 1196,
notion: 'religion',
intitule: "La religion est-elle une forme de témoignage ?",
piste1: "Le croyant est-il un témoin qui rend compte d'une expérience ou d'une vérité ?",
piste2: "ou le témoignage religieux est-il une propagande ou une illusion ?",
racine1: "Le martyre est-il la forme ultime du témoignage religieux ?",
racine2: "ou le témoignage religieux est-il invérifiable et donc sans valeur ?",
enjeu: "Déterminer la valeur et la nature du témoignage religieux."
},
{
id: 1197,
notion: 'religion',
intitule: "La religion est-elle une forme de transgression ?",
piste1: "La religion institue-t-elle des interdits pour mieux permettre une transgression ritualisée et contrôlée ?",
piste2: "ou la religion est-elle l'ordre qui interdit toute transgression ?",
racine1: "Le sacré inclut-il une dimension de violence et de transgression (Bataille) ?",
racine2: "ou la religion est-elle la loi qui réprime les pulsions de transgression ?",
enjeu: "Examiner le rapport complexe entre religion, interdit et transgression."
},
{
id: 1198,
notion: 'religion',
intitule: "La religion est-elle une forme de vérité ?",
piste1: "La religion détient-elle une vérité supérieure à celle de la science et de la philosophie ?",
piste2: "ou la religion est-elle un domaine de croyance qui ne peut prétendre à la vérité ?",
racine1: "La vérité révélée est-elle la vérité absolue et définitive ?",
racine2: "ou la religion est-elle un mythe qui a sa propre vérité symbolique, mais pas factuelle ?",
enjeu: "Déterminer le statut de vérité des énoncés religieux."
},
{
id: 1199,
notion: 'religion',
intitule: "La religion est-elle une forme de vie ?",
piste1: "La religion est-elle une manière globale d'habiter le monde et de vivre son corps ?",
piste2: "ou la religion est-elle réduite à des croyances intellectuelles et des pratiques occasionnelles ?",
racine1: "La religion imprègne-t-elle tous les instants de la vie quotidienne ?",
racine2: "ou la religion est-elle une compartimentalisation de l'existence ?",
enjeu: "Penser la religion comme forme de vie et non comme simple doctrine."
},
{
id: 1200,
notion: 'religion',
intitule: "La religion peut-elle se définir de manière unique et universelle ?",
piste1: "Existe-t-il une essence de la religion qui englobe toutes les traditions historiques ?",
piste2: "ou le terme 'religion' est-il une catégorie occidentale inapplicable à d'autres cultures ?",
racine1: "Peut-on trouver des critères objectifs (croyance, rite, communauté) communs à toutes les religions ?",
racine2: "ou la diversité des phénomènes religieux résiste-t-elle à toute définition univoque ?",
enjeu: "Interroger la possibilité et les limites d'une définition universelle de la religion."
},
{
id: 1201,
notion: 'science',
intitule: "Qu'est-ce que la science ?",
piste1: "La science se définit-elle par son objet (le réel), sa méthode (l'expérimentation) ou son but (la vérité) ?",
piste2: "ou est-elle une institution sociale et historique en perpétuelle évolution ?",
racine1: "La science est-elle un ensemble de connaissances certaines ou un processus de recherche ?",
racine2: "ou la science est-elle une pratique sociale soumise à des rapports de pouvoir ?",
enjeu: "Établir une définition philosophique de la science au-delà du sens commun."
},
{
id: 1202,
notion: 'science',
intitule: "La science se distingue-t-elle radicalement de l'opinion ?",
piste1: "La science rompt-elle avec l'opinion (doxa) pour accéder à la connaissance (épistémè) ?",
piste2: "ou la science n'est-elle qu'une opinion plus élaborée et mieux étayée ?",
racine1: "L'opinion est-elle par essence un obstacle à la connaissance scientifique (Bachelard) ?",
racine2: "ou la science émerge-t-elle nécessairement d'un fond d'opinions communes ?",
enjeu: "Examiner la rupture épistémologique entre opinion et science."
},
{
id: 1203,
notion: 'science',
intitule: "La science est-elle la seule forme de connaissance légitime ?",
piste1: "Seul le savoir scientifique mérite-t-il le nom de connaissance véritable ?",
piste2: "ou existe-t-il d'autres formes de savoir (philosophique, artistique, pratique) tout aussi valables ?",
racine1: "Le scientisme est-il la seule position rationnelle face au savoir ?",
racine2: "ou le scientisme est-il une illusion qui méconnaît les limites de la science ?",
enjeu: "Déterminer la place de la science dans l'encyclopédie des savoirs."
},
{
id: 1204,
notion: 'science',
intitule: "La science peut-elle tout expliquer ?",
piste1: "La méthode scientifique est-elle universellement applicable à tous les domaines du réel ?",
piste2: "ou existe-t-il des phénomènes (conscience, sens, valeur) qui lui résistent par nature ?",
racine1: "Le principe de raison suffisante s'applique-t-il sans reste à la totalité du réel ?",
racine2: "ou y a-t-il un irréductible qui échappe à l'explication causale ?",
enjeu: "Examiner les prétentions totalisantes de la science."
},
{
id: 1205,
notion: 'science',
intitule: "La science a-t-elle des limites intrinsèques ?",
piste1: "Les limites de la science sont-elles provisoires, destinées à être repoussées par le progrès ?",
piste2: "ou existe-t-il des bornes absolues que la raison scientifique ne peut franchir ?",
racine1: "L'ignorance actuelle est-elle seulement un manque de moyens techniques ?",
racine2: "ou la structure même de l'esprit humain ou du réel impose-t-elle des limites infranchissables ?",
enjeu: "Déterminer si les limites de la science sont historiques ou structurelles."
},
{
id: 1206,
notion: 'science',
intitule: "La science est-elle objective ?",
piste1: "La science parvient-elle à éliminer toute subjectivité pour atteindre le réel tel qu'il est ?",
piste2: "ou l'objectivité n'est-elle qu'un idéal régulateur jamais pleinement atteint ?",
racine1: "La méthode scientifique garantit-elle l'effacement du sujet connaissant ?",
racine2: "ou toute observation est-elle inévitablement chargée de théorie et de subjectivité ?",
enjeu: "Examiner la possibilité et la nature de l'objectivité scientifique."
},
{
id: 1207,
notion: 'science',
intitule: "L'objectivité scientifique est-elle une illusion ?",
piste1: "La prétention à l'objectivité ne masque-t-elle pas des choix subjectifs et des paradigmes culturels ?",
piste2: "ou l'objectivité est-elle une conquête méthodique réelle, bien que perfectible ?",
racine1: "Les faits scientifiques sont-ils des constructions sociales déguisées en données naturelles ?",
racine2: "ou la contrainte de l'expérience impose-t-elle une discipline qui garantit l'objectivité ?",
enjeu: "Évaluer la critique sociologique et épistémologique de l'objectivité."
},
{
id: 1208,
notion: 'science',
intitule: "La science est-elle une construction sociale ?",
piste1: "Les théories scientifiques sont-elles le produit de négociations et de consensus au sein d'une communauté ?",
piste2: "ou la nature impose-t-elle ses lois indépendamment des contextes sociaux ?",
racine1: "La vérité scientifique est-elle relative aux conditions historiques de sa production ?",
racine2: "ou la science est-elle la découverte d'un ordre naturel préexistant ?",
enjeu: "Examiner le rapport entre contexte social et validité scientifique."
},
{
id: 1209,
notion: 'science',
intitule: "La science est-elle axiologiquement neutre ?",
piste1: "La science peut-elle faire abstraction de toute valeur morale, politique ou esthétique ?",
piste2: "ou est-elle toujours guidée par des intérêts et des valeurs implicites ?",
racine1: "Le fait et la valeur sont-ils radicalement séparés dans la pratique scientifique ?",
racine2: "ou le choix des objets de recherche est-il déjà un jugement de valeur ?",
enjeu: "Déterminer la neutralité axiologique de la science."
},
{
id: 1210,
notion: 'science',
intitule: "La science est-elle indépendante des valeurs ?",
piste1: "Le scientifique peut-il dissocier son travail de ses convictions personnelles et des enjeux de société ?",
piste2: "ou la science est-elle intrinsèquement liée aux valeurs de la société qui la finance et l'utilise ?",
racine1: "La recherche de la vérité est-elle une valeur qui suffit à elle-même ?",
racine2: "ou la science est-elle toujours instrumentalisée par des fins extérieures ?",
enjeu: "Examiner l'autonomie de la science par rapport aux valeurs sociales."
},
{
id: 1211,
notion: 'science',
intitule: "La science est-elle un pouvoir ?",
piste1: "Le savoir scientifique confère-t-il automatiquement un pouvoir de prédiction et de transformation du réel ?",
piste2: "ou la science est-elle d'abord une quête désintéressée de vérité, le pouvoir n'étant qu'un effet secondaire ?",
racine1: "Savoir, est-ce pouvoir (Bacon) ?",
racine2: "ou la science est-elle impuissante face à certaines questions fondamentales ?",
enjeu: "Analyser le lien entre connaissance scientifique et puissance d'agir."
},
{
id: 1212,
notion: 'science',
intitule: "La science est-elle au service de la technique ?",
piste1: "La science moderne a-t-elle pour fin principale l'application technique et l'efficacité ?",
piste2: "ou la science fondamentale conserve-t-elle une autonomie par rapport aux applications ?",
racine1: "La science est-elle devenue la servante de la technoscience ?",
racine2: "ou la technique n'est-elle qu'une conséquence contingente de la science ?",
enjeu: "Déterminer le rapport de subordination ou d'indépendance entre science et technique."
},
{
id: 1213,
notion: 'science',
intitule: "La science et la technique sont-elles indissociables ?",
piste1: "La science moderne est-elle inconcevable sans les instruments techniques qui la prolongent ?",
piste2: "ou peut-on penser une science purement théorique, détachée de toute matérialité technique ?",
racine1: "L'expérimentation suppose-t-elle une artificialisation du réel par la technique ?",
racine2: "ou la science et la technique relèvent-elles de deux rapports au monde distincts ?",
enjeu: "Examiner l'hybridation contemporaine de la science et de la technique."
},
{
id: 1214,
notion: 'science',
intitule: "La science rend-elle l'homme « maître et possesseur de la nature » ?",
piste1: "La science a-t-elle pour but de soumettre la nature à la volonté humaine ?",
piste2: "ou la science doit-elle nous apprendre à composer avec les lois de la nature ?",
racine1: "La maîtrise technique est-elle la finalité légitime de la connaissance scientifique ?",
racine2: "ou cette prétention à la maîtrise est-elle la source de la crise écologique ?",
enjeu: "Évaluer le projet cartésien de domination de la nature par la science."
},
{
id: 1215,
notion: 'science',
intitule: "La science nous libère-t-elle des superstitions ?",
piste1: "Le progrès des lumières scientifiques dissipe-t-il nécessairement les croyances irrationnelles ?",
piste2: "ou la science peut-elle elle-même devenir l'objet d'une croyance dogmatique (scientisme) ?",
racine1: "La science est-elle l'antidote universel à l'obscurantisme ?",
racine2: "ou l'homme a-t-il un besoin anthropologique de croyance que la science ne comble pas ?",
enjeu: "Examiner le rôle émancipateur de la science face aux croyances."
},
{
id: 1216,
notion: 'science',
intitule: "La science est-elle une nouvelle religion ?",
piste1: "La science occupe-t-elle aujourd'hui la place de la religion en offrant un récit global et une autorité suprême ?",
piste2: "ou la science se distingue-t-elle radicalement de la religion par son doute méthodique et sa falsifiabilité ?",
racine1: "La foi dans le progrès scientifique est-elle une croyance religieuse sécularisée ?",
racine2: "ou la science est-elle par essence profane et critique ?",
enjeu: "Comparer les structures de la croyance scientifique et de la croyance religieuse."
},
{
id: 1217,
notion: 'science',
intitule: "La science et la religion sont-elles incompatibles ?",
piste1: "Science et religion s'affrontent-elles nécessairement sur le même terrain de la vérité ?",
piste2: "ou peuvent-elles coexister en traitant de questions différentes (le comment et le pourquoi) ?",
racine1: "Le conflit entre science et religion est-il inévitable (thèse du conflit) ?",
racine2: "ou peuvent-elles dialoguer (thèse de la complémentarité) ?",
enjeu: "Examiner les rapports de conflit, d'indépendance ou de dialogue entre science et religion."
},
{
id: 1218,
notion: 'science',
intitule: "La science peut-elle prouver l'inexistence de Dieu ?",
piste1: "La méthode scientifique a-t-elle les moyens de trancher la question de l'existence de Dieu ?",
piste2: "ou cette question est-elle par définition hors du champ de compétence de la science ?",
racine1: "Le naturalisme scientifique exclut-il logiquement toute transcendance ?",
racine2: "ou la science est-elle agnostique par méthode sur les questions métaphysiques ?",
enjeu: "Délimiter le champ d'application de la science face aux questions métaphysiques."
},
{
id: 1219,
notion: 'science',
intitule: "La science a-t-elle besoin de la métaphysique ?",
piste1: "La science repose-t-elle sur des présupposés métaphysiques (causalité, ordre de la nature) qu'elle ne peut pas démontrer ?",
piste2: "ou la science a-t-elle réussi à s'affranchir de toute métaphysique pour devenir purement positive ?",
racine1: "La science est-elle une métaphysique qui s'ignore ?",
racine2: "ou la science est-elle la fin de la métaphysique (Comte) ?",
enjeu: "Examiner les fondements philosophiques implicites de la pratique scientifique."
},
{
id: 1220,
notion: 'science',
intitule: "La science est-elle une entreprise rationnelle ?",
piste1: "La science procède-t-elle exclusivement par des raisonnements logiques et des preuves ?",
piste2: "ou fait-elle appel à des sauts intuitifs, des imaginaires et des conventions ?",
racine1: "La rationalité scientifique est-elle la forme la plus haute de la raison ?",
racine2: "ou la découverte scientifique échappe-t-elle à la logique formelle ?",
enjeu: "Déterminer la part de la rationalité et de l'irrationalité dans la science."
},
{
id: 1221,
notion: 'science',
intitule: "La raison scientifique est-elle la seule raison valable ?",
piste1: "Le modèle de la raison scientifique doit-il s'appliquer à tous les domaines de la pensée (morale, politique, art) ?",
piste2: "ou existe-t-il d'autres formes de rationalité (pratique, esthétique) irréductibles au modèle scientifique ?",
racine1: "Le rationalisme scientifique est-il un impérialisme de la raison ?",
racine2: "ou la raison est-elle une et indivisible dans ses applications ?",
enjeu: "Examiner la prétention de la raison scientifique à l'universalité."
},
{
id: 1222,
notion: 'science',
intitule: "La science est-elle cumulative ?",
piste1: "Le savoir scientifique s'accumule-t-il comme des briques, chaque génération ajoutant son savoir à celui des précédentes ?",
piste2: "ou le progrès scientifique se fait-il par des ruptures qui rendent obsolètes les savoirs antérieurs ?",
racine1: "L'histoire des sciences est-elle un progrès continu et linéaire ?",
racine2: "ou est-elle une suite de révolutions et de changements de paradigmes (Kuhn) ?",
enjeu: "Déterminer la nature du progrès scientifique : continuité ou rupture."
},
{
id: 1223,
notion: 'science',
intitule: "Le progrès scientifique est-il continu ?",
piste1: "La science avance-t-elle de manière régulière et ininterrompue ?",
piste2: "ou connaît-elle des périodes de stagnation, de régression ou de crise ?",
racine1: "Le progrès est-il une loi interne du développement scientifique ?",
racine2: "ou le progrès dépend-il de conditions historiques et sociales contingentes ?",
enjeu: "Examiner la temporalité et les aléas du progrès scientifique."
},
{
id: 1224,
notion: 'science',
intitule: "Les révolutions scientifiques brisent-elles la continuité du savoir ?",
piste1: "Un changement de paradigme rend-il incommensurables l'ancienne et la nouvelle science ?",
piste2: "ou conserve-t-on toujours un noyau de vérité des théories précédentes ?",
racine1: "La révolution scientifique est-elle une rupture épistémologique totale ?",
racine2: "ou est-elle une extension et une correction des théories antérieures ?",
enjeu: "Analyser la nature des révolutions scientifiques."
},
{
id: 1225,
notion: 'science',
intitule: "La vérité scientifique est-elle provisoire ?",
piste1: "Une théorie scientifique n'est-elle vraie que jusqu'à ce qu'une meilleure théorie la réfute ?",
piste2: "ou la science atteint-elle des vérités définitives et absolues ?",
racine1: "La falsifiabilité implique-t-elle que toute vérité scientifique est conjecturale (Popper) ?",
racine2: "ou certaines lois fondamentales sont-elles établies de manière définitive ?",
enjeu: "Déterminer le statut de la vérité en science : absolue ou provisoire."
},
{
id: 1226,
notion: 'science',
intitule: "La science cherche-t-elle la vérité ou l'efficacité ?",
piste1: "Le but de la science est-il de dévoiler la nature profonde du réel ?",
piste2: "ou est-elle seulement de produire des modèles qui fonctionnent et permettent des prédictions ?",
racine1: "Le réalisme scientifique est-il la seule posture cohérente ?",
racine2: "ou l'instrumentalisme est-il plus fidèle à la pratique effective des scientifiques ?",
enjeu: "Opposer le réalisme et l'instrumentalisme en philosophie des sciences."
},
{
id: 1227,
notion: 'science',
intitule: "Une théorie scientifique est-elle une image du réel ?",
piste1: "Les concepts scientifiques (atome, champ, gène) désignent-ils des entités réelles ?",
piste2: "ou ne sont-ils que des fictions commodes pour organiser les phénomènes ?",
racine1: "La science décrit-elle le monde tel qu'il est en soi ?",
racine2: "ou ne construit-elle qu'une représentation utile mais fictive ?",
enjeu: "Examiner le rapport de référence entre théorie scientifique et réalité."
},
{
id: 1228,
notion: 'science',
intitule: "La science décrit-elle ou explique-t-elle la nature ?",
piste1: "La science se contente-t-elle d'établir des régularités et des lois descriptives ?",
piste2: "ou doit-elle remonter aux causes profondes pour expliquer pourquoi les choses sont ainsi ?",
racine1: "Expliquer, est-ce seulement décrire avec des mathématiques (d'Alembert) ?",
racine2: "ou l'explication exige-t-elle la mise au jour de mécanismes causaux ?",
enjeu: "Distinguer description et explication dans la démarche scientifique."
},
{
id: 1229,
notion: 'science',
intitule: "La science réduit-elle le réel à ce qui est mesurable ?",
piste1: "La science ne prend-elle en compte que les grandeurs quantifiables, laissant de côté les qualités ?",
piste2: "ou les qualités peuvent-elles être intégrées dans une description scientifique exhaustive ?",
racine1: "La mathématisation de la nature exclut-elle les qualités sensibles (Galilée) ?",
racine2: "ou la mesure est-elle seulement un outil, sans épuiser la réalité de l'objet ?",
enjeu: "Examiner le réductionnisme quantitatif de la science moderne."
},
{
id: 1230,
notion: 'science',
intitule: "La mathématisation de la nature déforme-t-elle le réel ?",
piste1: "En traduisant la nature en équations, la science la trahit-elle en la simplifiant ?",
piste2: "ou les mathématiques sont-elles le langage même dans lequel la nature est écrite ?",
racine1: "Le modèle mathématique est-il une abstraction qui s'éloigne du concret ?",
racine2: "ou la structure du réel est-elle fondamentalement mathématique (Pythagore, Galilée) ?",
enjeu: "Évaluer la pertinence et les limites du modèle mathématique en science."
},
{
id: 1231,
notion: 'science',
intitule: "L'expérience est-elle la source de toute connaissance scientifique ?",
piste1: "Tout savoir scientifique doit-il être vérifié par l'expérience sensible (empirisme) ?",
piste2: "ou la raison possède-t-elle des principes a priori qui structurent l'expérience ?",
racine1: "L'expérience est-elle le tribunal suprême de la vérité scientifique ?",
racine2: "ou l'expérience est-elle toujours déjà structurée par des concepts rationnels ?",
enjeu: "Examiner le rôle de l'expérience dans la fondation du savoir scientifique."
},
{
id: 1232,
notion: 'science',
intitule: "L'observation est-elle toujours objective ?",
piste1: "Peut-on observer les faits de manière neutre, sans a priori théorique ?",
piste2: "ou toute observation est-elle « chargée de théorie » (theory-laden) ?",
racine1: "Le fait brut existe-t-il indépendamment de celui qui l'observe ?",
racine2: "ou l'observation est-elle toujours une interprétation sélective ?",
enjeu: "Critiquer le mythe du fait brut et de l'observateur neutre."
},
{
id: 1233,
notion: 'science',
intitule: "L'expérimentation est-elle supérieure à la simple observation ?",
piste1: "La science progresse-t-elle en interrogeant activement la nature plutôt qu'en l'observant passivement ?",
piste2: "ou l'observation naturelle (astronomie, biologie de terrain) est-elle tout aussi rigoureuse ?",
racine1: "L'expérimentation permet-elle d'isoler les causes en contrôlant les variables ?",
racine2: "ou l'artificialisation de l'expérience fausse-t-elle le comportement naturel des objets ?",
enjeu: "Déterminer la valeur spécifique de la méthode expérimentale."
},
{
id: 1234,
notion: 'science',
intitule: "La théorie précède-t-elle l'expérience en science ?",
piste1: "Le scientifique commence-t-il par formuler une hypothèse avant de chercher à la vérifier ?",
piste2: "ou la science commence-t-elle par l'accumulation de faits qui mènent à la théorie (induction) ?",
racine1: "L'esprit ne voit-il dans la nature que ce qu'il y met lui-même (Kant) ?",
racine2: "ou la nature doit-elle d'abord s'imposer à l'esprit par les faits ?",
enjeu: "Examiner l'ordre de découverte en science : théorie ou expérience en premier."
},
{
id: 1235,
notion: 'science',
intitule: "La science procède-t-elle par induction ?",
piste1: "La science généralise-t-elle des lois universelles à partir d'observations particulières répétées ?",
piste2: "ou l'induction est-elle un raisonnement logiquement invalide que la science ne peut pas utiliser ?",
racine1: "L'induction permet-elle de fonder la nécessité des lois scientifiques ?",
racine2: "ou l'induction n'est-elle qu'une habitude psychologique sans fondement rationnel (Hume) ?",
enjeu: "Évaluer la validité logique du raisonnement inductif en science."
},
{
id: 1236,
notion: 'science',
intitule: "L'induction est-elle un raisonnement valide ?",
piste1: "Le passage du particulier à l'universel est-il logiquement garanti ?",
piste2: "ou l'induction repose-t-elle sur le postulat non démontré de l'uniformité de la nature ?",
racine1: "Peut-on justifier l'induction sans tomber dans un raisonnement circulaire ?",
racine2: "ou l'induction est-elle une règle pratique indispensable, bien que non démontrable ?",
enjeu: "Examiner le problème de l'induction (Hume, Popper)."
},
{
id: 1237,
notion: 'science',
intitule: "La science procède-t-elle par déduction ?",
piste1: "La science déduit-elle des conséquences observables à partir de principes généraux ?",
piste2: "ou la déduction est-elle stérile car elle ne dit rien de plus que ce qui est contenu dans les prémisses ?",
racine1: "Le modèle hypothético-déductif est-il le cœur de la méthode scientifique ?",
racine2: "ou la déduction ne sert-elle qu'à expliciter, sans rien découvrir de nouveau ?",
enjeu: "Déterminer le rôle de la déduction dans la découverte scientifique."
},
{
id: 1238,
notion: 'science',
intitule: "La méthode hypothético-déductive est-elle la seule méthode scientifique ?",
piste1: "Toute science digne de ce nom doit-elle formuler des hypothèses et en déduire des conséquences testables ?",
piste2: "ou existe-t-il d'autres méthodes (herméneutique, descriptive, historique) tout aussi scientifiques ?",
racine1: "Le modèle hypothético-déductif est-il universel ?",
racine2: "ou est-il propre aux sciences de la nature, mais inadapté aux sciences humaines ?",
enjeu: "Examiner l'universalité de la méthode hypothético-déductive."
},
{
id: 1239,
notion: 'science',
intitule: "La falsifiabilité est-elle le critère de la scientificité ?",
piste1: "Une théorie n'est-elle scientifique que si elle peut être potentiellement réfutée par l'expérience (Popper) ?",
piste2: "ou une théorie trop facilement falsifiable est-elle sans intérêt explicatif ?",
racine1: "La réfutabilité est-elle la marque distinctive de la science face à la métaphysique ou à la psychanalyse ?",
racine2: "ou la falsifiabilité est-elle un critère trop strict qui exclut des sciences établies ?",
enjeu: "Évaluer le critère de démarcation de Popper."
},
{
id: 1240,
notion: 'science',
intitule: "Une théorie non falsifiable est-elle nécessairement fausse ?",
piste1: "L'absence de falsifiabilité disqualifie-t-elle une théorie comme étant fausse ?",
piste2: "ou signifie-t-elle seulement qu'elle n'est pas (encore) scientifique ?",
racine1: "Ce qui n'est pas scientifique est-il nécessairement du non-sens ou de l'erreur ?",
racine2: "ou peut-il y avoir des vérités non scientifiques (métaphysiques, éthiques) ?",
enjeu: "Distinguer la non-scientificité de la fausseté."
},
{
id: 1241,
notion: 'science',
intitule: "La science peut-elle se passer de l'imagination ?",
piste1: "La découverte scientifique exige-t-elle une créativité et une imagination débordante ?",
piste2: "ou l'imagination est-elle un obstacle à la rigueur et à l'objectivité scientifiques ?",
racine1: "L'hypothèse est-elle un produit de l'imagination créatrice ?",
racine2: "ou l'imagination doit-elle être strictement contrôlée par la raison ?",
enjeu: "Examiner le rôle de l'imagination dans la démarche scientifique."
},
{
id: 1242,
notion: 'science',
intitule: "L'intuition joue-t-elle un rôle dans la découverte scientifique ?",
piste1: "Les grandes découvertes sont-elles le fruit d'éclairs de génie intuitifs plutôt que de raisonnements pas à pas ?",
piste2: "ou l'intuition n'est-elle qu'une étape préliminaire qui doit être rigoureusement démontrée ?",
racine1: "L'intuition est-elle une forme de connaissance immédiate et fiable ?",
racine2: "ou est-elle une source d'illusion que la méthode scientifique doit corriger ?",
enjeu: "Déterminer la place de l'intuition dans la genèse des théories scientifiques."
},
{
id: 1243,
notion: 'science',
intitule: "La science est-elle une affaire de génie individuel ?",
piste1: "Les révolutions scientifiques sont-elles l'œuvre de génies isolés (Newton, Einstein) ?",
piste2: "ou sont-elles le résultat d'un travail collectif et cumulatif au sein d'une communauté ?",
racine1: "Le mythe du génie solitaire est-il fidèle à la réalité de la pratique scientifique ?",
racine2: "ou le génie est-il la pointe émergée d'une structure sociale de la science ?",
enjeu: "Examiner le rôle de l'individu et du collectif dans le progrès scientifique."
},
{
id: 1244,
notion: 'science',
intitule: "La science est-elle une entreprise collective ?",
piste1: "La validation d'une théorie dépend-elle du consensus de la communauté scientifique ?",
piste2: "ou la vérité scientifique s'impose-t-elle par sa propre évidence, indépendamment du nombre de ses adeptes ?",
racine1: "La science est-elle une institution sociale avec ses normes et ses rites ?",
racine2: "ou la science est-elle un dialogue de la raison avec la nature, hors de toute sociologie ?",
enjeu: "Déterminer la dimension sociale et institutionnelle de la science."
},
{
id: 1245,
notion: 'science',
intitule: "Le langage scientifique est-il un langage parfait ?",
piste1: "La science cherche-t-elle à construire un langage univoque et sans ambiguïté ?",
piste2: "ou le langage scientifique reste-t-il soumis aux imprécisions du langage naturel ?",
racine1: "L'idéal d'une langue formelle est-il réalisable et souhaitable en science ?",
racine2: "ou la richesse du langage naturel est-elle nécessaire à l'invention scientifique ?",
enjeu: "Examiner les propriétés et les limites du langage scientifique."
},
{
id: 1246,
notion: 'science',
intitule: "Les mathématiques sont-elles le langage de la nature ?",
piste1: "L'univers est-il fondamentalement structuré de manière mathématique ?",
piste2: "ou les mathématiques ne sont-elles qu'un outil commode inventé par l'homme pour décrire le monde ?",
racine1: "Le réalisme mathématique est-il la seule façon d'expliquer l'efficacité des maths en physique ?",
racine2: "ou les mathématiques sont-elles une convention humaine sans rapport avec l'essence des choses ?",
enjeu: "Débattre du statut des mathématiques dans la description du réel."
},
{
id: 1247,
notion: 'science',
intitule: "La science est-elle réductible aux mathématiques ?",
piste1: "Toute science véritable doit-elle tendre à la formalisation mathématique ?",
piste2: "ou y a-t-il des aspects du réel (le vivant, l'humain) qui résistent à la mathématisation ?",
racine1: "La quantification est-elle la condition sine qua non de la scientificité ?",
racine2: "ou le qualitatif a-t-il sa propre rigueur, non mathématique ?",
enjeu: "Examiner les limites de la réduction mathématique en science."
},
{
id: 1248,
notion: 'science',
intitule: "Les sciences humaines sont-elles de vraies sciences ?",
piste1: "L'étude de l'homme peut-elle atteindre le même degré de certitude et d'objectivité que la physique ?",
piste2: "ou l'objet des sciences humaines (le sens, la liberté) les exclut-il du champ scientifique strict ?",
racine1: "La méthode des sciences de la nature est-elle transposable aux sciences de l'esprit ?",
racine2: "ou les sciences humaines nécessitent-elles une méthode spécifique (la compréhension) ?",
enjeu: "Déterminer le statut scientifique des sciences humaines et sociales."
},
{
id: 1249,
notion: 'science',
intitule: "Peut-on appliquer la méthode des sciences de la nature aux sciences humaines ?",
piste1: "L'homme peut-il être étudié comme un objet naturel, soumis à des lois déterministes ?",
piste2: "ou l'homme, étant un sujet, échappe-t-il par principe à ce type d'approche ?",
racine1: "Le naturalisme en sciences humaines est-il une illusion méthodologique ?",
racine2: "ou est-il la seule voie pour donner une assise solide à l'étude de l'homme ?",
enjeu: "Examiner la légitimité du naturalisme en sciences humaines."
},
{
id: 1250,
notion: 'science',
intitule: "La compréhension est-elle spécifique aux sciences humaines ?",
piste1: "Comprendre un acte humain (lui donner un sens) est-il radicalement différent d'expliquer un phénomène naturel (en trouver la cause) ?",
piste2: "ou l'explication et la compréhension sont-elles complémentaires dans toutes les sciences ?",
racine1: "La méthode des sciences de l'esprit (Dilthey) est-elle hétérogène à celle des sciences de la nature ?",
racine2: "ou la compréhension n'est-elle qu'une étape vers une explication plus fine ?",
enjeu: "Distinguer ou articuler explication et compréhension."
},
{
id: 1251,
notion: 'science',
intitule: "L'histoire est-elle une science ?",
piste1: "L'histoire peut-elle établir des lois générales et des prédictions comme les sciences de la nature ?",
piste2: "ou est-elle un récit singulier et interprétatif d'événements uniques ?",
racine1: "L'histoire cherche-t-elle des régularités ou la singularité des événements ?",
racine2: "ou l'histoire est-elle une science du singulier, distincte des sciences du général ?",
enjeu: "Déterminer le statut épistémologique de l'histoire."
},
{
id: 1252,
notion: 'science',
intitule: "La psychanalyse est-elle une science ?",
piste1: "La psychanalyse remplit-elle les critères de scientificité (falsifiabilité, prédictibilité) ?",
piste2: "ou est-elle une herméneutique (art d'interpréter) et non une science au sens strict ?",
racine1: "Les concepts psychanalytiques sont-ils trop vagues pour être testés empiriquement ?",
racine2: "ou la psychanalyse possède-t-elle sa propre rigueur clinique, différente de celle du laboratoire ?",
enjeu: "Examiner le débat sur le statut scientifique de la psychanalyse."
},
{
id: 1253,
notion: 'science',
intitule: "La sociologie peut-elle être objective ?",
piste1: "Le sociologue peut-il étudier la société dont il est lui-même membre sans biais ?",
piste2: "ou l'objectivité en sociologie est-elle un idéal inaccessible en raison de l'implication du chercheur ?",
racine1: "La distanciation méthodique suffit-elle à garantir l'objectivité en sciences sociales ?",
racine2: "ou la sociologie est-elle toujours engagée et porteuse de valeurs ?",
enjeu: "Évaluer la possibilité de l'objectivité en sociologie."
},
{
id: 1254,
notion: 'science',
intitule: "La science peut-elle expliquer l'homme tout entier ?",
piste1: "L'être humain est-il entièrement réductible à des processus biologiques, psychologiques et sociaux ?",
piste2: "ou existe-t-il une dimension (liberté, conscience, esprit) qui échappe à l'explication scientifique ?",
racine1: "Le réductionnisme scientifique est-il une vision complète de l'homme ?",
racine2: "ou l'homme est-il un être de sens qui dépasse la causalité naturelle ?",
enjeu: "Examiner les limites de l'explication scientifique appliquée à l'homme."
},
{
id: 1255,
notion: 'science',
intitule: "La science peut-elle expliquer la conscience ?",
piste1: "Les neurosciences peuvent-elles réduire les états de conscience à des états neuronaux ?",
piste2: "ou l'expérience subjective (qualia) est-elle irréductible à toute description physique ?",
racine1: "Le problème corps-esprit est-il soluble par la science ?",
racine2: "ou la conscience est-elle un épiphénomène ou une réalité d'un autre ordre ?",
enjeu: "Déterminer les limites des neurosciences face au problème de la conscience."
},
{
id: 1256,
notion: 'science',
intitule: "La science peut-elle expliquer la liberté ?",
piste1: "Le déterminisme scientifique (génétique, neuronal, social) laisse-t-il une place à la liberté humaine ?",
piste2: "ou la liberté n'est-elle qu'une illusion produite par notre ignorance des causes ?",
racine1: "La science et la liberté sont-elles mutuellement exclusives ?",
racine2: "ou la liberté peut-elle être comprise comme une propriété émergente de systèmes complexes ?",
enjeu: "Examiner la compatibilité entre déterminisme scientifique et liberté."
},
{
id: 1257,
notion: 'science',
intitule: "La science peut-elle expliquer l'amour ?",
piste1: "L'amour peut-il être réduit à des mécanismes hormonaux et évolutifs de reproduction ?",
piste2: "ou la dimension vécue, symbolique et éthique de l'amour échappe-t-elle à la science ?",
racine1: "L'explication naturaliste de l'amour en épuise-t-elle le sens ?",
racine2: "ou la science ne décrit-elle que les conditions de possibilité de l'amour, sans en saisir l'essence ?",
enjeu: "Évaluer la pertinence de l'explication scientifique des sentiments humains."
},
{
id: 1258,
notion: 'science',
intitule: "La science peut-elle expliquer la morale ?",
piste1: "La morale peut-elle être expliquée par l'évolution biologique et la sélection de groupe (altruisme) ?",
piste2: "ou l'obligation morale est-elle d'un ordre normatif que la science descriptive ne peut pas saisir ?",
racine1: "Peut-on déduire un devoir (ce qui doit être) d'un fait naturel (ce qui est) ?",
racine2: "ou la science peut-elle fonder une morale naturelle et universelle ?",
enjeu: "Examiner les limites du naturalisme moral."
},
{
id: 1259,
notion: 'science',
intitule: "La science peut-elle expliquer l'art ?",
piste1: "La création artistique peut-elle être expliquée par la psychologie, la sociologie ou les neurosciences ?",
piste2: "ou l'œuvre d'art possède-t-elle une singularité et une intentionnalité qui résistent à l'explication causale ?",
racine1: "L'explication scientifique de l'art en réduit-elle la valeur esthétique ?",
racine2: "ou la science éclaire-t-elle les conditions de production et de réception de l'art sans le réduire ?",
enjeu: "Déterminer si l'explication scientifique épuise le phénomène artistique."
},
{
id: 1260,
notion: 'science',
intitule: "La science peut-elle expliquer le sens de la vie ?",
piste1: "La science peut-elle répondre à la question « pourquoi vivons-nous ? » ?",
piste2: "ou cette question est-elle par définition hors du champ de compétence de la science ?",
racine1: "La science décrit-elle des mécanismes, mais est-elle muette sur le sens et la finalité ?",
racine2: "ou la science, en nous situant dans l'univers, nous donne-t-elle un sens à l'existence ?",
enjeu: "Délimiter le champ des questions de sens et des questions de fait."
},
{
id: 1261,
notion: 'science',
intitule: "La science a-t-elle réponse à tout ?",
piste1: "Le progrès scientifique finira-t-il par résoudre toutes les énigmes de l'univers et de l'existence ?",
piste2: "ou y aura-t-il toujours des zones d'ombre et des mystères irréductibles ?",
racine1: "Le scientisme postule-t-il une omniscience future de la science ?",
racine2: "ou la science est-elle par essence limitée à un domaine spécifique du réel ?",
enjeu: "Critiquer la prétention totalisante de la science."
},
{
id: 1262,
notion: 'science',
intitule: "Ce que la science ne peut pas expliquer est-il irrationnel ?",
piste1: "Tout ce qui échappe à la méthode scientifique est-il dénué de sens et de valeur ?",
piste2: "ou existe-t-il des formes de rationalité (philosophique, pratique) non scientifiques ?",
racine1: "La science est-elle le seul critère de la rationalité ?",
racine2: "ou l'irrationalité désigne-t-elle seulement ce qui est hors du champ de la science, sans être absurde ?",
enjeu: "Défendre la légitimité des savoirs non scientifiques."
},
{
id: 1263,
notion: 'science',
intitule: "La science et la philosophie sont-elles concurrentes ?",
piste1: "La philosophie et la science se disputent-elles le même territoire de la vérité ?",
piste2: "ou ont-elles des objets et des méthodes radicalement différents qui les rendent complémentaires ?",
racine1: "La philosophie est-elle une science qui s'ignore ou une science en devenir ?",
racine2: "ou la philosophie est-elle la réflexion sur les fondements et les limites de la science ?",
enjeu: "Déterminer le rapport de concurrence ou de complémentarité entre science et philosophie."
},
{
id: 1264,
notion: 'science',
intitule: "La philosophie a-t-elle encore un rôle à l'âge de la science ?",
piste1: "La science a-t-elle rendu la philosophie obsolète en prenant en charge toutes les grandes questions ?",
piste2: "ou la philosophie est-elle plus nécessaire que jamais pour interroger les présupposés et les fins de la science ?",
racine1: "La philosophie est-elle morte, remplacée par la physique et les neurosciences ?",
racine2: "ou la science a-t-elle besoin de la philosophie pour réfléchir à son propre sens ?",
enjeu: "Défendre la pertinence contemporaine de la philosophie face à la science."
},
{
id: 1265,
notion: 'science',
intitule: "La science rend-elle la philosophie obsolète ?",
piste1: "Les découvertes scientifiques (cosmologie, évolution, cerveau) ont-elles résolu les problèmes traditionnels de la philosophie ?",
piste2: "ou ces découvertes ouvrent-elles au contraire de nouveaux champs d'interrogation philosophique ?",
racine1: "La science répond-elle aux questions que la philosophie se posait ?",
racine2: "ou la science transforme-t-elle les questions sans les éliminer ?",
enjeu: "Examiner l'impact des sciences sur les problèmes philosophiques."
},
{
id: 1266,
notion: 'science',
intitule: "La science peut-elle fonder une morale ?",
piste1: "La connaissance scientifique peut-elle nous dire ce que nous devons faire ?",
piste2: "ou la science est-elle moralement neutre, incapable de prescrire des valeurs ?",
racine1: "Le passage du « est » au « doit » est-il logiquement possible à partir de la science ?",
racine2: "ou la science peut-elle éclairer les conséquences de nos actions pour guider nos choix moraux ?",
enjeu: "Déterminer si la science peut avoir une fonction normative."
},
{
id: 1267,
notion: 'science',
intitule: "Le scientisme est-il une erreur philosophique ?",
piste1: "Le scientisme (la croyance que la science peut tout expliquer et tout résoudre) est-il une extension illégitime de la science ?",
piste2: "ou est-il la conséquence logique et nécessaire du succès de la méthode scientifique ?",
racine1: "Le scientisme confond-il la méthode scientifique avec une métaphysique ?",
racine2: "ou le scientisme est-il un idéal régulateur qui pousse la science à repousser ses limites ?",
enjeu: "Critiquer ou défendre le scientisme."
},
{
id: 1268,
notion: 'science',
intitule: "La science est-elle responsable de ses applications ?",
piste1: "La science doit-elle anticiper et contrôler les usages techniques de ses découvertes ?",
piste2: "ou la science est-elle irresponsable des détournements ou des usages nuisibles de son savoir ?",
racine1: "Le scientifique a-t-il une responsabilité morale envers la société ?",
racine2: "ou la science est-elle un bien commun dont l'usage relève de la politique, pas du savant ?",
enjeu: "Examiner la responsabilité éthique du scientifique."
},
{
id: 1269,
notion: 'science',
intitule: "Le scientifique est-il responsable des usages de ses découvertes ?",
piste1: "Le chercheur doit-il refuser de travailler sur des projets à finalité militaire ou destructrice ?",
piste2: "ou le scientifique n'est-il responsable que de la vérité de ses résultats, pas de leur application ?",
racine1: "La neutralité du savant est-elle une excuse pour se décharger de la responsabilité ?",
racine2: "ou le scientifique est-il un citoyen comme les autres, sans responsabilité spécifique ?",
enjeu: "Déterminer l'étendue de la responsabilité du chercheur."
},
{
id: 1270,
notion: 'science',
intitule: "La science est-elle moralement neutre ?",
piste1: "Le savoir scientifique est-il un outil qui peut être utilisé indifféremment pour le bien ou pour le mal ?",
piste2: "ou la science est-elle intrinsèquement liée à des valeurs (vérité, objectivité, progrès) ?",
racine1: "La neutralité axiologique est-elle une condition de la scientificité ?",
racine2: "ou la science est-elle toujours engagée dans un projet humain et historique ?",
enjeu: "Examiner la neutralité morale de la science."
},
{
id: 1271,
notion: 'science',
intitule: "Peut-on faire de la science sans éthique ?",
piste1: "La recherche scientifique peut-elle se dérouler sans se soucier des questions éthiques (expérimentation animale, humaine, environnement) ?",
piste2: "ou l'éthique est-elle une condition préalable et interne à la pratique scientifique ?",
racine1: "L'éthique est-elle une contrainte extérieure qui freine la science ?",
racine2: "ou la science sans éthique est-elle une menace pour l'humanité ?",
enjeu: "Déterminer le rapport entre éthique et pratique scientifique."
},
{
id: 1272,
notion: 'science',
intitule: "La bioéthique est-elle un frein au progrès scientifique ?",
piste1: "Les comités d'éthique et les régulations bloquent-ils des recherches qui pourraient sauver des vies ?",
piste2: "ou la bioéthique est-elle une condition de possibilité d'une science respectueuse de la dignité humaine ?",
racine1: "L'éthique et le progrès scientifique sont-ils en tension irréductible ?",
racine2: "ou une science éthique est-elle une science plus fiable et plus légitime ?",
enjeu: "Examiner le rôle de la bioéthique dans la régulation de la recherche."
},
{
id: 1273,
notion: 'science',
intitule: "La science doit-elle être régulée politiquement ?",
piste1: "La société, par l'intermédiaire de ses représentants, doit-elle fixer des limites à la recherche scientifique ?",
piste2: "ou la science doit-elle rester libre de toute ingérence politique pour préserver sa vérité ?",
racine1: "La démocratie a-t-elle le droit de contrôler la science ?",
racine2: "ou la régulation politique risque-t-elle d'asservir la science à des intérêts idéologiques ?",
enjeu: "Débattre de la gouvernance démocratique de la science."
},
{
id: 1274,
notion: 'science',
intitule: "La science est-elle au service du capitalisme ?",
piste1: "La recherche scientifique est-elle principalement orientée par la recherche de profit et les brevets ?",
piste2: "ou la science conserve-t-elle une sphère de gratuité et de désintéressement ?",
racine1: "La marchandisation du savoir dénature-t-elle la vocation de la science ?",
racine2: "ou le financement privé est-il une condition nécessaire du progrès scientifique contemporain ?",
enjeu: "Examiner l'influence des logiques économiques sur la science."
},
{
id: 1275,
notion: 'science',
intitule: "La recherche scientifique est-elle libre ?",
piste1: "Le scientifique doit-il pouvoir choisir ses objets d'étude et publier ses résultats sans censure ?",
piste2: "ou la recherche est-elle toujours contrainte par des financements, des idéologies ou des secrets d'État ?",
racine1: "La liberté de recherche est-elle une condition absolue de la vérité scientifique ?",
racine2: "ou la science est-elle toujours située et contrainte par son contexte ?",
enjeu: "Déterminer les conditions et les limites de la liberté scientifique."
},
{
id: 1276,
notion: 'science',
intitule: "Le secret scientifique est-il justifiable ?",
piste1: "La rétention d'information (brevets, défense nationale, concurrence) est-elle compatible avec l'éthique de la science ?",
piste2: "ou le partage ouvert des connaissances est-il la condition même du progrès scientifique ?",
racine1: "Le secret protège-t-il des intérêts légitimes ou trahit-il l'idéal de la science ouverte ?",
racine2: "ou la science a-t-elle besoin de périodes de maturation à l'abri des regards avant publication ?",
enjeu: "Examiner la tension entre secret et partage dans la science."
},
{
id: 1277,
notion: 'science',
intitule: "La science doit-elle être partagée ouvertement (open science) ?",
piste1: "L'accès libre aux données et aux publications est-il un impératif moral et épistémologique ?",
piste2: "ou l'open science menace-t-elle la qualité, la propriété intellectuelle et le financement de la recherche ?",
racine1: "La science est-elle un bien commun qui doit être gratuit et accessible à tous ?",
racine2: "ou la gratuité totale est-elle économiquement intenable et nuisible à l'innovation ?",
enjeu: "Débattre du modèle de l'open science."
},
{
id: 1278,
notion: 'science',
intitule: "La science est-elle un bien commun ?",
piste1: "Les connaissances scientifiques appartiennent-elles à l'humanité entière ?",
piste2: "ou sont-elles la propriété légitime de ceux qui les produisent ou les financent ?",
racine1: "La science est-elle par essence universelle et non appropriable ?",
racine2: "ou la science est-elle un capital comme un autre, soumis aux lois de la propriété ?",
enjeu: "Déterminer le statut de la connaissance scientifique comme bien commun."
},
{
id: 1279,
notion: 'science',
intitule: "La science augmente-t-elle notre bonheur ?",
piste1: "Le progrès scientifique, en améliorant nos conditions de vie, nous rend-il plus heureux ?",
piste2: "ou le bonheur est-il indépendant des avancées techniques et scientifiques ?",
racine1: "La science comble-t-elle nos manques ou en crée-t-elle de nouveaux ?",
racine2: "ou la science est-elle un moyen au service du bonheur, mais pas une fin en soi ?",
enjeu: "Examiner le lien entre progrès scientifique et bonheur."
},
{
id: 1280,
notion: 'science',
intitule: "Le progrès scientifique garantit-il le progrès moral ?",
piste1: "L'augmentation de nos connaissances et de nos pouvoirs s'accompagne-t-elle d'une amélioration de nos mœurs ?",
piste2: "ou la science et la morale progressent-elles sur des lignes parallèles qui ne se rencontrent jamais ?",
racine1: "Le savoir rend-il nécessairement plus vertueux (intellectualisme moral) ?",
racine2: "ou la science peut-elle être mise au service du pire (armes, manipulations) ?",
enjeu: "Distinguer le progrès technique du progrès moral."
},
{
id: 1281,
notion: 'science',
intitule: "La science nous rend-elle plus humains ?",
piste1: "La science, en nous libérant des superstitions et des maladies, accomplit-elle notre humanité ?",
piste2: "ou la science risque-t-elle de nous déshumaniser en nous réduisant à des objets ou des chiffres ?",
racine1: "La science est-elle un humanisme en acte ?",
racine2: "ou la science est-elle indifférente à la condition humaine ?",
enjeu: "Évaluer l'impact de la science sur l'humanisme."
},
{
id: 1282,
notion: 'science',
intitule: "La science nous éloigne-t-elle de la nature ?",
piste1: "La science, en objectivant et en mathématisant la nature, nous coupe-t-elle de l'expérience sensible du monde ?",
piste2: "ou la science nous permet-elle au contraire de comprendre notre appartenance profonde à la nature ?",
racine1: "La science est-elle un facteur de désenchantement du monde (Weber) ?",
racine2: "ou la science révèle-t-elle les merveilles et la complexité du monde naturel ?",
enjeu: "Examiner le rapport à la nature induit par la science."
},
{
id: 1283,
notion: 'science',
intitule: "La science est-elle une forme de domination de la nature ?",
piste1: "Le but ultime de la science est-il de soumettre la nature à la volonté humaine ?",
piste2: "ou la science est-elle une écoute et une compréhension des lois de la nature ?",
racine1: "La science est-elle intrinsèquement liée au projet de maîtrise technique ?",
racine2: "ou la science peut-elle être émancipatrice et respectueuse de l'environnement ?",
enjeu: "Critiquer ou défendre le rapport de domination entre science et nature."
},
{
id: 1284,
notion: 'science',
intitule: "La science peut-elle sauver le monde (ex: écologie) ?",
piste1: "Les solutions aux crises globales (climat, ressources) viendront-elles nécessairement de l'innovation scientifique ?",
piste2: "ou la science est-elle partie du problème, et la solution est-elle politique, éthique ou spirituelle ?",
racine1: "Le salut par la technique est-il une illusion dangereuse ?",
racine2: "ou sans science, n'avons-nous aucun espoir de résoudre les problèmes complexes ?",
enjeu: "Examiner le rôle de la science face aux défis écologiques."
},
{
id: 1285,
notion: 'science',
intitule: "La science est-elle la cause de la crise écologique ?",
piste1: "Le développement scientifique et technique est-il responsable de la destruction de l'environnement ?",
piste2: "ou la crise écologique est-elle due à un mauvais usage politique et économique de la science ?",
racine1: "La science est-elle intrinsèquement destructrice de la nature ?",
racine2: "ou la science est-elle neutre, et la responsabilité incombe-t-elle aux choix de société ?",
enjeu: "Déterminer la responsabilité de la science dans la crise environnementale."
},
{
id: 1286,
notion: 'science',
intitule: "La science peut-elle prédire l'avenir avec certitude ?",
piste1: "La connaissance des lois de la nature permet-elle de prévoir l'avenir de manière déterministe ?",
piste2: "ou l'avenir reste-t-il fondamentalement ouvert et imprévisible, même pour la science ?",
racine1: "Le déterminisme scientifique implique-t-il la prédictibilité absolue (Laplace) ?",
racine2: "ou la complexité et le chaos rendent-elles la prédiction à long terme impossible ?",
enjeu: "Examiner les limites de la prédiction scientifique."
},
{
id: 1287,
notion: 'science',
intitule: "Le déterminisme scientifique est-il absolu ?",
piste1: "Tout événement dans l'univers est-il la conséquence nécessaire de causes antérieures ?",
piste2: "ou existe-t-il une part d'indétermination fondamentale dans la nature ?",
racine1: "Le déterminisme est-il un postulat méthodologique ou une vérité ontologique ?",
racine2: "ou la mécanique quantique a-t-elle introduit un hasard objectif dans la science ?",
enjeu: "Débattre de la validité du déterminisme en science contemporaine."
},
{
id: 1288,
notion: 'science',
intitule: "Le hasard a-t-il sa place dans la science ?",
piste1: "Le hasard est-il seulement l'expression de notre ignorance des causes cachées ?",
piste2: "ou le hasard est-il une propriété réelle et fondamentale de certains systèmes naturels ?",
racine1: "Le hasard est-il un obstacle à l'explication scientifique ?",
racine2: "ou le hasard est-il un concept scientifique légitime (probabilités, génétique) ?",
enjeu: "Déterminer le statut du hasard dans la pensée scientifique."
},
{
id: 1289,
notion: 'science',
intitule: "La mécanique quantique a-t-elle ruiné le déterminisme ?",
piste1: "L'indétermination quantique signifie-t-elle que le monde microscopique n'est pas déterminé ?",
piste2: "ou le déterminisme subsiste-t-il à un niveau plus profond que nous ne comprenons pas encore ?",
racine1: "L'interprétation de Copenhague impose-t-elle l'abandon du déterminisme classique ?",
racine2: "ou existe-t-il des théories à variables cachées qui sauvent le déterminisme ?",
enjeu: "Examiner l'impact de la physique quantique sur la notion de déterminisme."
},
{
id: 1290,
notion: 'science',
intitule: "La science est-elle une croyance comme une autre ?",
piste1: "Adhérer à une théorie scientifique exige-t-il un acte de foi similaire à la croyance religieuse ?",
piste2: "ou la science se distingue-t-elle radicalement de la croyance par sa méthode de validation ?",
racine1: "La confiance dans les experts scientifiques est-elle une forme de croyance aveugle ?",
racine2: "ou la science est-elle toujours ouverte à la révision et au doute, contrairement à la croyance ?",
enjeu: "Comparer la structure de la croyance scientifique et de la croyance dogmatique."
},
{
id: 1291,
notion: 'science',
intitule: "Faut-il avoir foi en la science ?",
piste1: "Le public doit-il faire confiance aux institutions scientifiques sans toujours comprendre les détails techniques ?",
piste2: "ou cette « foi » est-elle dangereuse et doit-elle être remplacée par un esprit critique systématique ?",
racine1: "La confiance épistémique est-elle nécessaire au fonctionnement de la société ?",
racine2: "ou la science doit-elle être constamment questionnée et mise à l'épreuve par tous ?",
enjeu: "Examiner le rôle de la confiance et du scepticisme face à la science."
},
{
id: 1292,
notion: 'science',
intitule: "La science est-elle dogmatique ?",
piste1: "Les institutions scientifiques tendent-elles à imposer des vérités officielles et à exclure les dissidents ?",
piste2: "ou le dogmatisme est-il par définition étranger à l'esprit scientifique, qui est critique et autocorrectif ?",
racine1: "Les paradigmes dominants étouffent-ils l'innovation et la critique (Kuhn) ?",
racine2: "ou la science est-elle le lieu par excellence de la remise en question permanente ?",
enjeu: "Évaluer les risques de dogmatisme au sein de la communauté scientifique."
},
{
id: 1293,
notion: 'science',
intitule: "Le doute est-il le moteur de la science ?",
piste1: "La science progresse-t-elle en remettant constamment en question ses propres résultats et théories ?",
piste2: "ou la science a-t-elle besoin de certitudes provisoires pour construire des savoirs stables ?",
racine1: "Le doute méthodique est-il la condition sine qua non de l'attitude scientifique ?",
racine2: "ou un doute trop radical paralyse-t-il toute recherche et toute affirmation ?",
enjeu: "Déterminer le rôle du doute dans la dynamique scientifique."
},
{
id: 1294,
notion: 'science',
intitule: "La science est-elle toujours rationnelle ?",
piste1: "La pratique réelle des scientifiques est-elle guidée par la raison et la logique ?",
piste2: "ou est-elle soumise à des facteurs irrationnels (ambition, mode, intuition, biais cognitifs) ?",
racine1: "La sociologie des sciences révèle-t-elle l'irrationalité des choix scientifiques ?",
racine2: "ou ces facteurs humains sont-ils canalisés par une méthode qui garantit la rationalité du résultat ?",
enjeu: "Examiner la rationalité effective de la pratique scientifique."
},
{
id: 1295,
notion: 'science',
intitule: "Les paradigmes scientifiques sont-ils des constructions sociales ?",
piste1: "Les théories dominantes sont-elles acceptées en raison de leur supériorité rationnelle ou de pressions sociales et institutionnelles ?",
piste2: "ou la force des preuves finit-elle toujours par s'imposer, indépendamment du contexte social ?",
racine1: "La science est-elle un champ de bataille d'intérêts et de pouvoirs ?",
racine2: "ou la contrainte du réel finit-elle par unifier la communauté scientifique ?",
enjeu: "Examiner la thèse de la construction sociale des faits scientifiques."
},
{
id: 1296,
notion: 'science',
intitule: "La science est-elle en crise ?",
piste1: "La science contemporaine traverse-t-elle une crise de reproductibilité, de financement ou de légitimité ?",
piste2: "ou ces « crises » sont-elles des signes de santé et de renouvellement normal de la science ?",
racine1: "La perte de confiance du public signe-t-elle une crise profonde de la science ?",
racine2: "ou la science est-elle en pleine expansion et n'a jamais été aussi puissante ?",
enjeu: "Diagnostiquer l'état actuel de l'entreprise scientifique."
},
{
id: 1297,
notion: 'science',
intitule: "La science a-t-elle un avenir ?",
piste1: "La science va-t-elle continuer à progresser indéfiniment, ou allons-nous vers un mur (complexité, limites physiques, fin du financement) ?",
piste2: "ou la science va-t-elle se transformer radicalement (IA, science ouverte) pour assurer sa survie ?",
racine1: "Le modèle de la science moderne est-il épuisé ?",
racine2: "ou la science est-elle une aventure humaine sans fin ?",
enjeu: "Prospecter l'avenir de la science."
},
{
id: 1298,
notion: 'science',
intitule: "L'intelligence artificielle va-t-elle remplacer la science humaine ?",
piste1: "Les algorithmes d'IA peuvent-ils découvrir des lois scientifiques et formuler des théories mieux que les humains ?",
piste2: "ou la science exige-t-elle une compréhension et une intentionnalité que l'IA ne possédera jamais ?",
racine1: "La science deviendra-t-elle une « boîte noire » dont nous ne comprenons plus les résultats ?",
racine2: "ou l'IA ne sera-t-elle qu'un outil puissant au service de l'intuition humaine ?",
enjeu: "Examiner l'impact de l'IA sur la méthodologie et l'épistémologie scientifiques."
},
{
id: 1299,
notion: 'science',
intitule: "La science peut-elle se définir ?",
piste1: "Existe-t-il une définition unique et universelle de la science qui englobe toutes ses formes (passées et présentes) ?",
piste2: "ou le terme « science » est-il un concept flou, historiquement variable et essentiellement contesté ?",
racine1: "Peut-on trouver des critères de démarcation objectifs et intemporels ?",
racine2: "ou la science est-elle une « famille de ressemblances » sans essence fixe (Wittgenstein) ?",
enjeu: "Interroger la possibilité et les limites d'une définition de la science."
},
{
id: 1300,
notion: 'science',
intitule: "La science est-elle la fin de l'histoire de la connaissance ?",
piste1: "La science représente-t-elle le stade ultime et définitif du développement de l'esprit humain (Comte) ?",
piste2: "ou l'histoire de la connaissance est-elle ouverte à des formes de savoir post-scientifiques ou radicalement nouvelles ?",
racine1: "Le positivisme a-t-il raison de voir dans la science l'aboutissement de la raison ?",
racine2: "ou la science est-elle une étape, aussi glorieuse soit-elle, dans une aventure de l'esprit qui continue ?",
enjeu: "Déterminer la place de la science dans l'histoire longue de la connaissance humaine."
},
{
id: 1301,
notion: 'technique',
intitule: "Qu'est-ce que la technique ?",
piste1: "La technique se définit-elle comme un ensemble d'outils et de machines ?",
piste2: "ou est-elle un système global d'organisation du monde et de l'action humaine ?",
racine1: "La technique est-elle un simple moyen mis au service de fins humaines ?",
racine2: "ou est-elle un mode de dévoilement du réel qui nous conditionne en retour ?",
enjeu: "Établir une définition philosophique de la technique au-delà du sens commun."
},
{
id: 1302,
notion: 'technique',
intitule: "La technique est-elle un simple moyen ?",
piste1: "La technique n'est-elle qu'un instrument neutre que l'homme utilise pour atteindre ses buts ?",
piste2: "ou la technique finit-elle par devenir une fin en soi, imposant ses propres exigences ?",
racine1: "Le moyen est-il toujours subordonné à la fin que l'homme se fixe ?",
racine2: "ou le moyen technique transforme-t-il la fin qu'il est censé servir ?",
enjeu: "Examiner la relation de subordination ou d'autonomie entre le moyen et la fin."
},
{
id: 1303,
notion: 'technique',
intitule: "La technique est-elle neutre ?",
piste1: "La technique est-elle un outil aveugle, dont la valeur morale dépend uniquement de l'usage qu'on en fait ?",
piste2: "ou porte-t-elle en elle-même des valeurs, des rapports de pouvoir et une vision du monde ?",
racine1: "L'outil est-il indifférent aux fins pour lesquelles il est employé ?",
racine2: "ou la structure même de la technique façonne-t-elle nos comportements et nos sociétés ?",
enjeu: "Déterminer si la technique est axiologiquement neutre ou porteuse de valeurs."
},
{
id: 1304,
notion: 'technique',
intitule: "La technique est-elle propre à l'homme ?",
piste1: "Seul l'être humain est-il capable de produire et d'utiliser des techniques ?",
piste2: "ou observe-t-on des comportements techniques chez certains animaux ?",
racine1: "La technique suppose-t-elle la conscience du projet et la liberté de l'invention ?",
racine2: "ou l'usage d'outils est-il une simple adaptation biologique au milieu ?",
enjeu: "Déterminer la spécificité anthropologique de la technique."
},
{
id: 1305,
notion: 'technique',
intitule: "L'outil est-il un prolongement du corps humain ?",
piste1: "La technique prolonge-t-elle nos organes et augmente-t-elle nos capacités naturelles ?",
piste2: "ou finit-elle par se substituer au corps, le rendant inutile ou dépendant ?",
racine1: "L'outil est-il une extension de la puissance d'agir du vivant ?",
racine2: "ou la technique crée-t-elle une rupture entre l'homme et sa propre corporéité ?",
enjeu: "Examiner le rapport entre le corps humain et l'objet technique."
},
{
id: 1306,
notion: 'technique',
intitule: "La technique est-elle une maîtrise de la nature ?",
piste1: "Le but de la technique est-il de soumettre les forces naturelles à la volonté humaine ?",
piste2: "ou la technique est-elle une collaboration et un ajustement aux lois de la nature ?",
racine1: "La nature est-elle un réservoir de ressources à exploiter sans limite ?",
racine2: "ou la technique doit-elle s'inscrire dans les cycles et les limites du vivant ?",
enjeu: "Déterminer le rapport de domination ou d'harmonie entre technique et nature."
},
{
id: 1307,
notion: 'technique',
intitule: "La technique nous éloigne-t-elle de la nature ?",
piste1: "Le monde artificiel créé par la technique nous coupe-t-il de l'expérience sensible du monde naturel ?",
piste2: "ou la technique nous permet-elle au contraire de mieux comprendre et d'habiter la nature ?",
racine1: "L'artifice est-il une négation de la nature ?",
racine2: "ou la technique est-elle le moyen par lequel l'homme réalise sa nature propre ?",
enjeu: "Examiner l'impact de la technique sur notre rapport au monde naturel."
},
{
id: 1308,
notion: 'technique',
intitule: "La technique est-elle une violence faite à la nature ?",
piste1: "Transformer la nature par la technique est-il un arrachement et une destruction ?",
piste2: "ou est-ce un processus de transformation créatrice et légitime ?",
racine1: "Toute intervention technique est-elle une agression contre l'intégrité du réel ?",
racine2: "ou la nature est-elle elle-même un champ de forces que l'homme a le droit d'orienter ?",
enjeu: "Évaluer la dimension destructrice ou créatrice de l'action technique."
},
{
id: 1309,
notion: 'technique',
intitule: "La technique est-elle une libération ?",
piste1: "La technique nous affranchit-elle des contraintes naturelles et des tâches pénibles ?",
piste2: "ou crée-t-elle de nouvelles dépendances et de nouvelles formes d'asservissement ?",
racine1: "Le progrès technique augmente-t-il notre autonomie et notre temps libre ?",
racine2: "ou nous rend-il esclave des machines et des systèmes que nous avons créés ?",
enjeu: "Déterminer si la technique émancipe ou aliène l'être humain."
},
{
id: 1310,
notion: 'technique',
intitule: "La technique est-elle une aliénation ?",
piste1: "L'homme perd-il la maîtrise de ce qu'il produit, qui se retourne contre lui comme une puissance étrangère ?",
piste2: "ou l'homme reste-t-il toujours le sujet et le maître de ses créations techniques ?",
racine1: "Le système technique échappe-t-il au contrôle de ceux qui l'ont mis en place ?",
racine2: "ou la technique est-elle toujours réappropriable par la conscience et la volonté ?",
enjeu: "Examiner la thèse de l'autonomisation de la technique et de la perte de contrôle."
},
{
id: 1311,
notion: 'technique',
intitule: "La technique est-elle une seconde nature ?",
piste1: "L'environnement technique est-il devenu notre milieu de vie naturel, au point de remplacer la nature ?",
piste2: "ou la technique reste-t-elle un artifice toujours distinct et opposé à la nature ?",
racine1: "L'artificiel finit-il par s'imposer comme une nouvelle nécessité objective ?",
racine2: "ou la technique reste-t-elle contingente et perfectible, contrairement à la nature ?",
enjeu: "Déterminer le statut du monde artificiel par rapport au monde naturel."
},
{
id: 1312,
notion: 'technique',
intitule: "La technique est-elle une fin en soi ?",
piste1: "Le développement technique poursuit-il sa propre course, indépendamment des besoins humains ?",
piste2: "ou reste-t-il toujours subordonné à des finalités humaines conscientes ?",
racine1: "La logique de l'efficacité et de la performance s'impose-t-elle comme une loi aveugle ?",
racine2: "ou l'homme peut-il toujours interrompre ou réorienter le progrès technique ?",
enjeu: "Examiner l'autonomie supposée du système technique."
},
{
id: 1313,
notion: 'technique',
intitule: "La technique est-elle un système ?",
piste1: "Les objets techniques forment-ils un ensemble interdépendant et cohérent qui dépasse la somme des parties ?",
piste2: "ou la technique n'est-elle qu'une collection d'outils disparates et indépendants ?",
racine1: "La technique moderne est-elle un réseau global qui conditionne tous les aspects de la vie ?",
racine2: "ou chaque technique reste-t-elle un instrument localisé et maîtrisable ?",
enjeu: "Déterminer si la technique doit être pensée comme un tout systémique."
},
{
id: 1314,
notion: 'technique',
intitule: "La technique est-elle une forme de savoir ?",
piste1: "La technique est-elle l'application pratique de connaissances scientifiques théoriques ?",
piste2: "ou est-elle un savoir-faire (techne) autonome, distinct de la science (episteme) ?",
racine1: "La technique moderne est-elle indissociable de la science (technoscience) ?",
racine2: "ou l'artisanat et l'invention pratique précèdent-ils et fondent-ils la théorie ?",
enjeu: "Articuler les rapports entre savoir théorique et savoir-faire technique."
},
{
id: 1315,
notion: 'technique',
intitule: "La technique est-elle une puissance ?",
piste1: "La technique augmente-t-elle la puissance d'agir de l'homme sur le monde et sur lui-même ?",
piste2: "ou cette puissance est-elle illusoire, masquant une impuissance fondamentale ?",
racine1: "Le pouvoir technique est-il une expansion réelle de la liberté humaine ?",
racine2: "ou la puissance technique nous rend-elle vulnérables à des risques que nous ne maîtrisons pas ?",
enjeu: "Évaluer la nature et les limites de la puissance technique."
},
{
id: 1316,
notion: 'technique',
intitule: "La technique est-elle une création ?",
piste1: "L'acte technique est-il un acte de création ex nihilo, comparable à l'art ?",
piste2: "ou n'est-il qu'une transformation de matériaux préexistants selon des règles fixes ?",
racine1: "L'invention technique participe-t-elle de la créativité humaine ?",
racine2: "ou la technique est-elle une production déterminée, dépourvue de véritable originalité ?",
enjeu: "Déterminer la part de créativité et d'invention dans l'acte technique."
},
{
id: 1317,
notion: 'technique',
intitule: "La technique est-elle opposée à l'art ?",
piste1: "La technique vise-t-elle l'utilité, tandis que l'art vise la beauté ou l'expression désintéressée ?",
piste2: "ou l'art et la technique partagent-ils une racine commune (la techne grecque) ?",
racine1: "La production utilitaire exclut-elle la dimension esthétique et symbolique ?",
racine2: "ou tout art n'est-il pas d'abord un savoir-faire technique maîtrisé ?",
enjeu: "Distinguer ou réunir les domaines de l'art et de la technique."
},
{
id: 1318,
notion: 'technique',
intitule: "La technique est-elle opposée à la politique ?",
piste1: "La gestion technique des problèmes remplace-t-elle le débat politique et les choix de société ?",
piste2: "ou la technique est-elle un outil au service du projet politique démocratique ?",
racine1: "La technocratie tend-elle à réduire la politique à une simple administration des choses ?",
racine2: "ou la démocratie a-t-elle besoin de la technique pour réaliser ses fins d'émancipation ?",
enjeu: "Examiner la tension entre rationalité technique et délibération politique."
},
{
id: 1319,
notion: 'technique',
intitule: "La technique est-elle opposée à la philosophie ?",
piste1: "La pensée technique, centrée sur l'efficacité, rend-elle la réflexion philosophique obsolète ?",
piste2: "ou la philosophie est-elle plus que jamais nécessaire pour interroger les fins de la technique ?",
racine1: "Le calcul technique épuise-t-il les questions de sens et de valeur ?",
racine2: "ou la technique a-t-elle besoin de la philosophie pour réfléchir à ses propres limites ?",
enjeu: "Déterminer la place de la philosophie à l'ère de la domination technique."
},
{
id: 1320,
notion: 'technique',
intitule: "La technique est-elle une réponse à un manque ?",
piste1: "L'homme invente-t-il des techniques pour compenser ses faiblesses biologiques et naturelles ?",
piste2: "ou la technique est-elle l'expression d'une surabondance de puissance créatrice ?",
racine1: "L'homme est-il un être inachevé qui a besoin de la technique pour survivre ?",
racine2: "ou la technique est-elle le déploiement d'une liberté qui ne se contente pas du donné ?",
enjeu: "Examiner l'origine de la technique : carence ou excès de puissance."
},
{
id: 1321,
notion: 'technique',
intitule: "La technique est-elle un danger ?",
piste1: "Le développement technique menace-t-il l'existence même de l'humanité et de la biosphère ?",
piste2: "ou la technique est-elle la seule ressource pour résoudre les problèmes qu'elle a créés ?",
racine1: "La puissance de destruction de la technique a-t-elle dépassé notre sagesse morale ?",
racine2: "ou le danger est-il une exagération qui empêche de voir les bienfaits du progrès ?",
enjeu: "Évaluer la menace existentielle que pourrait représenter la technique."
},
{
id: 1322,
notion: 'technique',
intitule: "La technique est-elle un destin ?",
piste1: "Le développement technique est-il une fatalité historique à laquelle nous ne pouvons échapper ?",
piste2: "ou reste-t-il un champ de possibles que la volonté humaine peut orienter ?",
racine1: "La technique est-elle l'accomplissement inéluctable de l'essence de la modernité ?",
racine2: "ou l'histoire de la technique est-elle ouverte et réversible ?",
enjeu: "Déterminer si la technique est une nécessité historique ou un choix."
},
{
id: 1323,
notion: 'technique',
intitule: "La technique est-elle une idéologie ?",
piste1: "La croyance en la toute-puissance de la technique masque-t-elle des rapports de domination ?",
piste2: "ou la technique est-elle un fait objectif, indépendant de toute croyance ?",
racine1: "Le technicisme est-il une foi moderne qui remplace les religions traditionnelles ?",
racine2: "ou la technique est-elle un domaine neutre, étranger aux questions de croyance ?",
enjeu: "Examiner la dimension idéologique de la foi dans le progrès technique."
},
{
id: 1324,
notion: 'technique',
intitule: "La technique est-elle une forme de langage ?",
piste1: "Les objets et les systèmes techniques communiquent-ils un sens et organisent-ils notre monde ?",
piste2: "ou la technique est-elle muette, n'étant qu'un agencement de matière ?",
racine1: "L'artefact est-il porteur d'une intention et d'un message culturel ?",
racine2: "ou le langage est-il le seul véritable vecteur de sens, la technique n'étant que son support ?",
enjeu: "Déterminer si la technique a une dimension sémiotique et expressive."
},
{
id: 1325,
notion: 'technique',
intitule: "La technique est-elle une mémoire ?",
piste1: "Les outils et les machines conservent-ils le savoir-faire des générations passées ?",
piste2: "ou la technique nous coupe-t-elle de la mémoire vivante et des traditions ?",
racine1: "L'objet technique est-il une cristallisation du travail et de l'intelligence humaine ?",
racine2: "ou la technique rend-elle obsolète et fait-elle oublier les savoirs ancestraux ?",
enjeu: "Examiner le rapport entre technique, mémoire et oubli."
},
{
id: 1326,
notion: 'technique',
intitule: "La technique est-elle une éducation ?",
piste1: "L'apprentissage d'une technique forme-t-il l'esprit et le caractère de l'individu ?",
piste2: "ou la technique est-elle une simple transmission de gestes, sans valeur formatrice ?",
racine1: "Le travail manuel et technique participe-t-il à l'éducation morale et intellectuelle ?",
racine2: "ou l'éducation véritable est-elle purement théorique et désintéressée ?",
enjeu: "Déterminer la valeur éducative et formatrice de l'activité technique."
},
{
id: 1327,
notion: 'technique',
intitule: "La technique est-elle une illusion de contrôle ?",
piste1: "Croyons-nous maîtriser la technique alors qu'elle nous détermine en réalité ?",
piste2: "ou notre maîtrise technique est-elle réelle et effective ?",
racine1: "Le sentiment de maîtrise est-il un effet secondaire de notre soumission au système ?",
racine2: "ou la capacité de prédiction et d'action prouve-t-elle notre contrôle réel ?",
enjeu: "Examiner la réalité de la maîtrise humaine sur les systèmes techniques."
},
{
id: 1328,
notion: 'technique',
intitule: "La technique est-elle une réduction du monde ?",
piste1: "La technique réduit-elle le monde à un ensemble de ressources calculables et exploitables ?",
piste2: "ou révèle-t-elle des aspects du monde qui nous seraient autrement restés cachés ?",
racine1: "La rationalité technique appauvrit-elle l'expérience qualitative du réel ?",
racine2: "ou la technique enrichit-elle notre compréhension du monde en le rendant intelligible ?",
enjeu: "Déterminer si la technique appauvrit ou enrichit notre rapport au réel."
},
{
id: 1329,
notion: 'technique',
intitule: "La technique est-elle une affaire de volonté ?",
piste1: "La technique est-elle le produit de la volonté humaine de transformer le monde ?",
piste2: "ou obéit-elle à une logique interne qui s'impose à la volonté ?",
racine1: "L'homme est-il le sujet absolu de l'histoire technique ?",
racine2: "ou la technique est-elle un processus qui dépasse et englobe la volonté individuelle ?",
enjeu: "Examiner le rôle de la volonté dans le développement technique."
},
{
id: 1330,
notion: 'technique',
intitule: "La technique est-elle une affaire de nécessité ?",
piste1: "Le développement technique est-il imposé par la nécessité de survivre et de s'adapter ?",
piste2: "ou est-il le fruit d'un luxe, d'un désir de puissance ou de curiosité ?",
racine1: "La technique répond-elle d'abord à des besoins vitaux ?",
racine2: "ou crée-t-elle des besoins artificiels pour justifier son propre développement ?",
enjeu: "Déterminer si la technique est motivée par la nécessité ou par le désir."
},
{
id: 1331,
notion: 'technique',
intitule: "Le progrès technique est-il un progrès moral ?",
piste1: "L'amélioration de nos moyens techniques nous rend-elle plus vertueux et plus justes ?",
piste2: "ou la morale et la technique évoluent-elles sur des plans indépendants ?",
racine1: "Le confort et la sécurité favorisent-ils l'épanouissement moral de l'humanité ?",
racine2: "ou la puissance technique peut-elle être mise au service du mal avec une efficacité accrue ?",
enjeu: "Examiner la corrélation (ou l'absence de corrélation) entre progrès technique et progrès moral."
},
{
id: 1332,
notion: 'technique',
intitule: "Le progrès technique est-il un progrès vers le bonheur ?",
piste1: "Les innovations techniques augmentent-elles notre bonheur et notre bien-être ?",
piste2: "ou le bonheur est-il indépendant des conditions matérielles et techniques ?",
racine1: "La satisfaction des besoins par la technique est-elle la voie royale vers le bonheur ?",
racine2: "ou la technique crée-t-elle de nouvelles frustrations et une agitation permanente ?",
enjeu: "Déterminer le rapport entre développement technique et quête du bonheur."
},
{
id: 1333,
notion: 'technique',
intitule: "La technique est-elle une source d'ennui ?",
piste1: "En nous dispensant de l'effort, la technique nous laisse-t-elle face au vide et à l'ennui ?",
piste2: "ou nous libère-t-elle au contraire pour des activités plus élevées et créatives ?",
racine1: "La facilité technique engendre-t-elle la perte de sens et le désœuvrement ?",
racine2: "ou le temps libéré par la technique est-il une opportunité pour la culture et la réflexion ?",
enjeu: "Examiner les conséquences psychologiques et existentielles de la facilité technique."
},
{
id: 1334,
notion: 'technique',
intitule: "La technique est-elle une source de stress ?",
piste1: "L'accélération technique et l'hyperconnexion augmentent-elles la pression et l'anxiété ?",
piste2: "ou la technique nous donne-t-elle les moyens de mieux gérer notre temps et nos tâches ?",
racine1: "La vitesse et l'immédiateté techniques sont-elles incompatibles avec la sérénité ?",
racine2: "ou le stress vient-il d'un mauvais usage de la technique, et non de la technique elle-même ?",
enjeu: "Évaluer l'impact de la technique sur la santé mentale et le rythme de vie."
},
{
id: 1335,
notion: 'technique',
intitule: "La technique est-elle une forme de travail ?",
piste1: "L'activité technique est-elle essentiellement un travail, c'est-à-dire une peine et une contrainte ?",
piste2: "ou peut-elle être un jeu, une création libre et épanouissante ?",
racine1: "La transformation de la matière est-elle toujours une lutte contre la résistance du réel ?",
racine2: "ou le savoir-faire technique peut-il être une source de joie et de fierté ?",
enjeu: "Déterminer si la technique relève de la pénibilité du travail ou du plaisir de la création."
},
{
id: 1336,
notion: 'technique',
intitule: "La technique remplace-t-elle le travail humain ?",
piste1: "L'automatisation et l'intelligence artificielle vont-elles rendre le travail humain obsolète ?",
piste2: "ou la technique va-t-elle transformer le travail sans jamais le supprimer totalement ?",
racine1: "La machine peut-elle accomplir toutes les tâches, y compris celles qui demandent de la créativité ?",
racine2: "ou l'homme restera-t-il indispensable pour fixer les fins et donner du sens ?",
enjeu: "Examiner l'impact de l'automatisation sur l'avenir du travail."
},
{
id: 1337,
notion: 'technique',
intitule: "La technique est-elle une forme d'art ?",
piste1: "L'artisanat et l'ingénierie de haute précision ne sont-ils pas des formes d'art ?",
piste2: "ou l'art et la technique sont-ils séparés par leur finalité (beauté vs utilité) ?",
racine1: "La maîtrise parfaite de la matière n'est-elle pas en soi une beauté ?",
racine2: "ou l'art se définit-il précisément par son inutilité et sa gratuité ?",
enjeu: "Interroger la frontière entre l'objet technique et l'œuvre d'art."
},
{
id: 1338,
notion: 'technique',
intitule: "La technique est-elle une culture ?",
piste1: "La technique est-elle le produit et l'expression d'une culture spécifique ?",
piste2: "ou est-elle un phénomène universel qui tend à uniformiser toutes les cultures ?",
racine1: "Chaque société développe-t-elle des techniques qui reflètent ses valeurs et son rapport au monde ?",
racine2: "ou la technique moderne impose-t-elle un modèle unique, effaçant les diversités culturelles ?",
enjeu: "Examiner le rapport entre diversité culturelle et universalité technique."
},
{
id: 1339,
notion: 'technique',
intitule: "La technique est-elle une religion ?",
piste1: "La technique occupe-t-elle la place du sacré, offrant un salut par le progrès et la toute-puissance ?",
piste2: "ou la technique est-elle profane, rationnelle et dépourvue de toute dimension transcendante ?",
racine1: "La foi dans la science et la technique remplace-t-elle les croyances religieuses traditionnelles ?",
racine2: "ou la technique est-elle précisément ce qui désenchante le monde et le vide de tout sacré ?",
enjeu: "Comparer les structures de la croyance technique et de la croyance religieuse."
},
{
id: 1340,
notion: 'technique',
intitule: "La technique est-elle une éthique ?",
piste1: "La technique peut-elle être guidée par des principes moraux et une responsabilité ?",
piste2: "ou est-elle par nature amorale, obéissant seulement à la logique de l'efficacité ?",
racine1: "Peut-on intégrer des valeurs éthiques dans la conception même des objets techniques ?",
racine2: "ou l'éthique est-elle une contrainte extérieure qui freine l'innovation technique ?",
enjeu: "Déterminer la possibilité d'une technique éthique ou d'une éthique de la technique."
},
{
id: 1341,
notion: 'technique',
intitule: "La technique est-elle responsable ?",
piste1: "Peut-on attribuer une responsabilité morale aux machines et aux systèmes techniques ?",
piste2: "ou la responsabilité incombe-t-elle exclusivement aux humains qui les conçoivent et les utilisent ?",
racine1: "L'autonomie croissante des systèmes (IA) exige-t-elle de repenser la notion de responsabilité ?",
racine2: "ou une machine ne peut-elle jamais être sujet moral, car elle n'a ni conscience ni liberté ?",
enjeu: "Examiner l'imputabilité des actions techniques."
},
{
id: 1342,
notion: 'technique',
intitule: "La technique est-elle un pouvoir ?",
piste1: "La maîtrise technique confère-t-elle un pouvoir de domination sur les autres et sur la nature ?",
piste2: "ou est-elle un pouvoir d'empuissancement qui bénéficie à tous ?",
racine1: "Le savoir technique est-il un instrument de contrôle social et politique ?",
racine2: "ou la technique est-elle un bien commun qui démocratise les capacités d'agir ?",
enjeu: "Analyser la dimension politique et sociale du pouvoir technique."
},
{
id: 1343,
notion: 'technique',
intitule: "La technique est-elle une surveillance ?",
piste1: "Les technologies modernes (données, caméras, algorithmes) transforment-elles la société en un système de contrôle total ?",
piste2: "ou ces technologies sont-elles des outils de sécurité et de confort qui respectent la vie privée ?",
racine1: "La technique rend-elle l'individu transparent et vulnérable face au pouvoir ?",
racine2: "ou la surveillance est-elle le prix acceptable d'une société plus sûre et plus efficace ?",
enjeu: "Examiner les menaces que la technique fait peser sur la liberté et l'intimité."
},
{
id: 1344,
notion: 'technique',
intitule: "La technique est-elle une marchandise ?",
piste1: "Les innovations techniques sont-elles principalement conçues pour générer du profit et être consommées ?",
piste2: "ou la technique conserve-t-elle une dimension de service public et d'intérêt général ?",
racine1: "La logique capitaliste dénature-t-elle le développement technique en le soumettant à la rentabilité ?",
racine2: "ou le marché est-il le meilleur moteur de l'innovation et de la diffusion des techniques ?",
enjeu: "Déterminer l'influence de l'économie de marché sur l'orientation de la technique."
},
{
id: 1345,
notion: 'technique',
intitule: "La technique est-elle une obsolescence programmée ?",
piste1: "Le système technique est-il conçu pour s'autodétruire ou se démoder afin de maintenir la consommation ?",
piste2: "ou l'obsolescence est-elle le résultat naturel de l'innovation et de l'amélioration continue ?",
racine1: "La technique moderne est-elle fondamentalement gaspilleuse et destructrice de ressources ?",
racine2: "ou le progrès technique vise-t-il à rendre les objets plus performants et plus durables ?",
enjeu: "Examiner la durabilité et l'éthique de la production technique."
},
{
id: 1346,
notion: 'technique',
intitule: "La technique est-elle une dépendance ?",
piste1: "Sommes-nous devenus incapables de vivre sans les systèmes techniques qui nous entourent ?",
piste2: "ou gardons-nous la capacité de nous en passer et de retrouver une autonomie ?",
racine1: "La dépendance technique est-elle une régression de nos capacités naturelles ?",
racine2: "ou est-elle une forme d'interdépendance sociale normale et acceptable ?",
enjeu: "Évaluer le degré et la nature de notre dépendance à l'égard de la technique."
},
{
id: 1347,
notion: 'technique',
intitule: "La technique est-elle une addiction ?",
piste1: "L'usage des technologies (smartphones, réseaux sociaux) crée-t-il des dépendances comparables à des addictions ?",
piste2: "ou s'agit-il simplement d'habitudes de consommation que l'on peut contrôler ?",
racine1: "Les concepteurs de techniques cherchent-ils délibérément à capter et retenir notre attention ?",
racine2: "ou la responsabilité de l'usage repose-t-elle entièrement sur la volonté de l'utilisateur ?",
enjeu: "Examiner les effets psychologiques et comportementaux des technologies contemporaines."
},
{
id: 1348,
notion: 'technique',
intitule: "La technique est-elle une prothèse ?",
piste1: "La technique compense-t-elle les déficiences du corps humain et améliore-t-elle ses fonctions ?",
piste2: "ou crée-t-elle un homme augmenté qui n'est plus tout à fait humain ?",
racine1: "La prothèse technique est-elle une restauration de la normalité ?",
racine2: "ou le transhumanisme est-il une rupture anthropologique majeure ?",
enjeu: "Déterminer les limites de l'intégration de la technique au corps humain."
},
{
id: 1349,
notion: 'technique',
intitule: "Le transhumanisme est-il une promesse ou une menace ?",
piste1: "L'utilisation de la technique pour dépasser les limites biologiques de l'homme est-elle un progrès souhaitable ?",
piste2: "ou est-ce une déshumanisation qui risque de créer des inégalités infranchissables ?",
racine1: "La mort et la finitude sont-elles des maux que la technique doit vaincre ?",
racine2: "ou ces limites sont-elles constitutives de la condition humaine et de sa dignité ?",
enjeu: "Évaluer les enjeux éthiques et philosophiques du transhumanisme."
},
{
id: 1350,
notion: 'technique',
intitule: "La technique est-elle une intelligence ?",
piste1: "Les machines peuvent-elles posséder une forme d'intelligence, voire une conscience ?",
piste2: "ou l'intelligence artificielle n'est-elle qu'une simulation de calcul sans compréhension réelle ?",
racine1: "L'intelligence est-elle réductible à des algorithmes et des traitements de données ?",
racine2: "ou l'intelligence suppose-t-elle nécessairement un vécu, un corps et une intentionnalité ?",
enjeu: "Déterminer la nature et les limites de l'intelligence artificielle."
},
{
id: 1351,
notion: 'technique',
intitule: "La technique est-elle une menace pour l'emploi ?",
piste1: "L'automatisation va-t-elle détruire plus d'emplois qu'elle n'en crée ?",
piste2: "ou va-t-elle transformer le travail en libérant l'homme des tâches répétitives ?",
racine1: "Le progrès technique conduit-il structurellement au chômage de masse ?",
racine2: "ou l'histoire montre-t-elle que la technique crée toujours de nouveaux besoins et de nouveaux métiers ?",
enjeu: "Examiner l'impact de la technique sur le marché du travail."
},
{
id: 1352,
notion: 'technique',
intitule: "La technique est-elle une menace pour la démocratie ?",
piste1: "Les algorithmes, la désinformation et la concentration des données menacent-ils le débat démocratique ?",
piste2: "ou la technique offre-t-elle au contraire de nouveaux outils de participation et de transparence ?",
racine1: "La technique favorise-t-elle la manipulation des masses et le contrôle des esprits ?",
racine2: "ou la technique est-elle neutre, et son impact dépend-il uniquement de l'usage politique qu'on en fait ?",
enjeu: "Déterminer l'impact de la technique sur les institutions et la vie démocratique."
},
{
id: 1353,
notion: 'technique',
intitule: "La technique est-elle une menace pour la vérité ?",
piste1: "Les deepfakes, les bulles de filtres et la désinformation rendent-ils la vérité indiscernable ?",
piste2: "ou la technique nous donne-t-elle plus que jamais accès aux faits et aux vérifications ?",
racine1: "La technique brouille-t-elle la frontière entre le réel et la fiction ?",
racine2: "ou la technique est-elle le meilleur rempart contre le mensonge et l'ignorance ?",
enjeu: "Examiner l'impact de la technique sur notre rapport à la vérité et à l'information."
},
{
id: 1354,
notion: 'technique',
intitule: "La technique est-elle une menace pour l'environnement ?",
piste1: "Le développement technique est-il la cause principale de la crise écologique et du réchauffement climatique ?",
piste2: "ou est-il la seule solution pour développer des énergies propres et sauver la planète ?",
racine1: "La logique d'exploitation infinie est-elle intrinsèque à la technique industrielle ?",
racine2: "ou l'innovation technique peut-elle nous permettre de découpler croissance et destruction environnementale ?",
enjeu: "Déterminer la responsabilité de la technique dans la crise écologique et son rôle dans sa résolution."
},
{
id: 1355,
notion: 'technique',
intitule: "La technique est-elle une menace pour la santé ?",
piste1: "La pollution, la sédentarité et les ondes liées à la technique détériorent-elles notre santé ?",
piste2: "ou la technique médicale et sanitaire a-t-elle considérablement augmenté notre espérance et notre qualité de vie ?",
racine1: "Les externalités négatives de la technique annulent-elles ses bienfaits sanitaires ?",
racine2: "ou la technique est-elle le principal facteur de l'amélioration de la santé humaine ?",
enjeu: "Évaluer le bilan sanitaire global du développement technique."
},
{
id: 1356,
notion: 'technique',
intitule: "La technique est-elle une menace pour l'éducation ?",
piste1: "Les écrans et l'accès immédiat à l'information détruisent-ils l'attention, la mémoire et l'esprit critique ?",
piste2: "ou offrent-ils des opportunités d'apprentissage personnalisées et infinies ?",
racine1: "La technique rend-elle l'effort intellectuel inutile et appauvrit-elle la pensée ?",
racine2: "ou la technique est-elle un outil pédagogique puissant s'il est bien encadré ?",
enjeu: "Examiner l'impact de la technique sur les processus d'apprentissage et de formation."
},
{
id: 1357,
notion: 'technique',
intitule: "La technique est-elle une menace pour les relations humaines ?",
piste1: "Les technologies de communication nous isolent-elles et détruisent-elles le lien social réel ?",
piste2: "ou nous permettent-elles de maintenir des liens à distance et de créer de nouvelles communautés ?",
racine1: "La médiation technique appauvrit-elle la richesse de la rencontre en face à face ?",
racine2: "ou la technique étend-elle notre capacité à être ensemble, au-delà des frontières géographiques ?",
enjeu: "Déterminer l'effet de la technique sur la sociabilité et les relations interpersonnelles."
},
{
id: 1358,
notion: 'technique',
intitule: "La technique est-elle une menace pour la créativité ?",
piste1: "L'IA et les outils de génération automatique vont-ils remplacer la création humaine et l'art ?",
piste2: "ou vont-ils au contraire offrir aux artistes de nouveaux moyens d'expression inédits ?",
racine1: "La créativité nécessite-t-elle une intention, une émotion et une expérience vécue que la machine n'a pas ?",
racine2: "ou la créativité n'est-elle qu'une recombinaison de données que la machine peut imiter ou surpasser ?",
enjeu: "Examiner l'impact de la technique sur la création artistique et intellectuelle."
},
{
id: 1359,
notion: 'technique',
intitule: "La technique est-elle une menace pour la souveraineté des États ?",
piste1: "Les géants du numérique et les flux transnationaux échappent-ils au contrôle des États-nations ?",
piste2: "ou les États utilisent-ils la technique pour renforcer leur pouvoir de surveillance et de contrôle ?",
racine1: "La technique rend-elle obsolète le modèle westphalien de l'État souverain ?",
racine2: "ou l'État reste-t-il l'acteur principal de la régulation et de l'usage de la technique ?",
enjeu: "Déterminer l'impact de la technique sur le pouvoir et l'autorité de l'État."
},
{
id: 1360,
notion: 'technique',
intitule: "La technique est-elle une menace pour la paix ?",
piste1: "Les armes de destruction massive et la cyber guerre rendent-elles les conflits plus probables et plus dévastateurs ?",
piste2: "ou l'interdépendance technique et économique rend-elle la guerre trop coûteuse et donc moins probable ?",
racine1: "La technique augmente-t-elle la capacité de nuisance et la tentation de la violence ?",
racine2: "ou la technique favorise-t-elle la coopération internationale et la dissuasion ?",
enjeu: "Examiner le rapport entre développement technique et risque de conflit armé."
},
{
id: 1361,
notion: 'technique',
intitule: "La technique est-elle une menace pour la liberté ?",
piste1: "Les systèmes techniques nous enferment-ils dans des déterminismes algorithmiques et des bulles de filtres ?",
piste2: "ou la technique nous libère-t-elle des contraintes naturelles et sociales traditionnelles ?",
racine1: "La technique crée-t-elle une servitude volontaire en nous rendant dépendants du confort et de la facilité ?",
racine2: "ou la technique est-elle l'outil par excellence de l'émancipation et de l'autonomie individuelle ?",
enjeu: "Déterminer si la technique est un facteur d'aliénation ou de libération."
},
{
id: 1362,
notion: 'technique',
intitule: "La technique est-elle une menace pour le sens de la vie ?",
piste1: "L'efficacité et la performance techniques vident-elles l'existence de toute dimension spirituelle ou métaphysique ?",
piste2: "ou la technique nous libère-t-elle des soucis matériels pour nous consacrer à la quête de sens ?",
racine1: "Le monde technique est-il un monde désenchanté, où tout est calculable et rien n'est sacré ?",
racine2: "ou la technique est-elle neutre, laissant à l'homme la responsabilité de donner un sens à sa vie ?",
enjeu: "Examiner l'impact de la technique sur la quête de sens et les valeurs ultimes."
},
{
id: 1363,
notion: 'technique',
intitule: "La technique est-elle une menace pour l'avenir de l'humanité ?",
piste1: "Les risques existentiels (IA incontrôlée, biotechnologie, guerre nucléaire) menacent-ils la survie de l'espèce ?",
piste2: "ou l'humanité a-t-elle toujours surmonté ses crises grâce à l'innovation technique ?",
racine1: "La puissance technique a-t-elle dépassé notre sagesse morale, nous menant à l'autodestruction ?",
racine2: "ou le principe responsabilité et la régulation permettront-ils de maîtriser ces risques ?",
enjeu: "Évaluer les risques existentiels liés au développement technique."
},
{
id: 1364,
notion: 'technique',
intitule: "La technique est-elle une chance pour l'humanité ?",
piste1: "La technique est-elle le principal vecteur de l'amélioration de la condition humaine (santé, éducation, liberté) ?",
piste2: "ou ses coûts humains et écologiques surpassent-ils ses bénéfices ?",
racine1: "Le bilan historique de la technique est-il globalement positif et émancipateur ?",
racine2: "ou la technique est-elle un pacte faustien où nous échangeons notre âme contre la puissance ?",
enjeu: "Établir un bilan global de l'apport de la technique à l'humanité."
},
{
id: 1365,
notion: 'technique',
intitule: "La technique est-elle une chance pour les pays en développement ?",
piste1: "Le transfert de technologie permet-il un rattrapage économique et social rapide ?",
piste2: "ou crée-t-il une nouvelle forme de dépendance et de néocolonialisme technologique ?",
racine1: "La technique est-elle un levier universel de développement et de réduction de la pauvreté ?",
racine2: "ou les pays en développement sont-ils condamnés à être des consommateurs passifs de technologies conçues ailleurs ?",
enjeu: "Examiner l'impact de la technique sur les inégalités Nord-Sud."
},
{
id: 1366,
notion: 'technique',
intitule: "La technique est-elle une chance pour les personnes handicapées ?",
piste1: "Les prothèses, l'IA et les technologies d'assistance restaurent-elles l'autonomie et l'égalité des chances ?",
piste2: "ou créent-elles une nouvelle norme de performance qui exclut ceux qui ne peuvent pas s'équiper ?",
racine1: "La technique compense-t-elle efficacement les limitations fonctionnelles ?",
racine2: "ou la société doit-elle d'abord s'adapter, plutôt que de compter sur la réparation technique des individus ?",
enjeu: "Déterminer le rôle de la technique dans l'inclusion et l'accessibilité."
},
{
id: 1367,
notion: 'technique',
intitule: "La technique est-elle une chance pour l'écologie ?",
piste1: "Les technologies vertes (énergies renouvelables, capture du carbone) sont-elles la solution à la crise climatique ?",
piste2: "ou sont-elles des illusions qui nous dispensent de changer nos modes de vie et de consommation ?",
racine1: "La technique peut-elle réparer les dégâts causés par la technique ?",
racine2: "ou la sobriété et la décroissance sont-elles les seules voies réalistes ?",
enjeu: "Examiner la pertinence des solutions techniques aux problèmes environnementaux."
},
{
id: 1368,
notion: 'technique',
intitule: "La technique est-elle une chance pour la médecine ?",
piste1: "Les avancées techniques (génétique, robotique, IA) vont-elles éradiquer les maladies et prolonger la vie ?",
piste2: "ou risquent-elles de déshumaniser le soin et de créer des inégalités d'accès insurmontables ?",
racine1: "La technique médicale est-elle un progrès absolu pour la santé humaine ?",
racine2: "ou le soin nécessite-t-il une relation humaine que la technique ne peut remplacer ?",
enjeu: "Évaluer l'impact de la technique sur la pratique médicale et la relation de soin."
},
{
id: 1369,
notion: 'technique',
intitule: "La technique est-elle une chance pour la démocratie ?",
piste1: "Le vote électronique, les consultations en ligne et l'open data peuvent-ils revitaliser la démocratie ?",
piste2: "ou ces outils favorisent-ils la démagogie, la polarisation et la manipulation ?",
racine1: "La technique peut-elle rendre la démocratie plus directe, participative et transparente ?",
racine2: "ou la complexité technique confisque-t-elle le pouvoir au profit d'experts non élus ?",
enjeu: "Déterminer si la technique peut être un levier de renouveau démocratique."
},
{
id: 1370,
notion: 'technique',
intitule: "La technique est-elle une chance pour la connaissance ?",
piste1: "Les outils techniques (télescopes, microscopes, accélérateurs de particules) étendent-ils considérablement notre savoir ?",
piste2: "ou la dépendance aux instruments nous éloigne-t-elle d'une compréhension intuitive et globale du monde ?",
racine1: "La science moderne est-elle inconcevable sans ses prolongements techniques ?",
racine2: "ou la technique introduit-elle un biais dans l'observation en artificialisant le réel ?",
enjeu: "Examiner le rôle de la technique dans l'élargissement des frontières de la connaissance."
},
{
id: 1371,
notion: 'technique',
intitule: "La technique est-elle une chance pour l'art ?",
piste1: "La photographie, le cinéma et les arts numériques ont-ils enrichi le paysage artistique ?",
piste2: "ou ont-ils dégradé l'art en le rendant reproductible, industriel et superficiel ?",
racine1: "La technique offre-t-elle de nouveaux mediums et de nouvelles formes d'expression ?",
racine2: "ou la technique détruit-elle l'aura et l'unicité de l'œuvre d'art ?",
enjeu: "Déterminer l'impact de la technique sur la création et la réception artistiques."
},
{
id: 1372,
notion: 'technique',
intitule: "La technique est-elle une chance pour la mémoire ?",
piste1: "Le stockage numérique et les archives en ligne préservent-ils notre patrimoine pour l'éternité ?",
piste2: "ou la fragilité des supports numériques et l'infobésité menacent-elles notre mémoire collective ?",
racine1: "La technique externalise-t-elle et sécurise-t-elle la mémoire humaine ?",
racine2: "ou la mémoire a-t-elle besoin d'être vivante et sélective, ce que la technique empêche ?",
enjeu: "Examiner le rapport entre technique, archivage et oubli."
},
{
id: 1373,
notion: 'technique',
intitule: "La technique est-elle une chance pour la communication ?",
piste1: "Internet et les smartphones nous permettent-ils de communiquer instantanément avec le monde entier ?",
piste2: "ou ces outils dégradent-ils la qualité de la communication en la rendant superficielle et fragmentée ?",
racine1: "La technique abolit-elle les distances et favorise-t-elle le dialogue interculturel ?",
racine2: "ou la communication technique est-elle appauvrie par l'absence de langage corporel et de présence ?",
enjeu: "Évaluer la qualité et la portée de la communication à l'ère technique."
},
{
id: 1374,
notion: 'technique',
intitule: "La technique est-elle une chance pour la sécurité ?",
piste1: "Les systèmes de surveillance, les alarmes et les technologies de défense nous protègent-elles efficacement ?",
piste2: "ou créent-elles un sentiment de sécurité illusoire tout en augmentant les risques de dérive autoritaire ?",
racine1: "La technique est-elle le meilleur rempart contre la violence et l'insécurité ?",
racine2: "ou la sécurité technique se fait-elle au prix de la liberté et de la confiance ?",
enjeu: "Déterminer le rapport entre sécurité technique et liberté individuelle."
},
{
id: 1375,
notion: 'technique',
intitule: "La technique est-elle une chance pour le temps libre ?",
piste1: "Les machines nous libèrent-elles du travail pour nous consacrer à nos loisirs et à notre épanouissement ?",
piste2: "ou le temps gagné est-il immédiatement réabsorbé par de nouvelles obligations et une accélération du rythme de vie ?",
racine1: "Le progrès technique devrait-il logiquement conduire à la réduction du temps de travail ?",
racine2: "ou la technique crée-t-elle une injonction permanente à la productivité et à la disponibilité ?",
enjeu: "Examiner l'impact de la technique sur la gestion et la qualité du temps libre."
},
{
id: 1376,
notion: 'technique',
intitule: "La technique est-elle une chance pour l'autonomie ?",
piste1: "La technique nous donne-t-elle les moyens d'être indépendants et de choisir notre vie ?",
piste2: "ou nous rend-elle dépendants de systèmes complexes que nous ne comprenons pas et ne contrôlons pas ?",
racine1: "L'empuissancement technique est-il synonyme d'autonomie accrue ?",
racine2: "ou l'autonomie véritable suppose-t-elle la capacité de se passer de la technique ?",
enjeu: "Déterminer si la technique favorise l'autonomie ou la dépendance."
},
{
id: 1377,
notion: 'technique',
intitule: "La technique est-elle une chance pour l'égalité ?",
piste1: "L'accès universel à la technique (éducation, santé, information) réduit-il les inégalités ?",
piste2: "ou la fracture numérique et le coût des innovations creusent-elles les écarts entre les individus et les nations ?",
racine1: "La technique est-elle un bien commun qui tend à se démocratiser ?",
racine2: "ou la technique est-elle un marqueur social qui distingue ceux qui la maîtrisent de ceux qui la subissent ?",
enjeu: "Examiner l'impact de la technique sur les inégalités sociales et économiques."
},
{
id: 1378,
notion: 'technique',
intitule: "La technique est-elle une chance pour la spiritualité ?",
piste1: "La technique peut-elle être mise au service de la méditation, de la contemplation et de la vie intérieure ?",
piste2: "ou est-elle par essence une distraction qui nous coupe de toute dimension spirituelle ?",
racine1: "Les outils techniques peuvent-ils faciliter l'accès au silence et à la transcendance ?",
racine2: "ou la logique technique est-elle incompatible avec le recueillement et le mystère ?",
enjeu: "Déterminer le rapport entre technique et expérience spirituelle."
},
{
id: 1379,
notion: 'technique',
intitule: "La technique est-elle une chance pour la jeunesse ?",
piste1: "Les jeunes, en tant que natifs du numérique, sont-ils mieux armés pour affronter l'avenir grâce à la technique ?",
piste2: "ou sont-ils les premières victimes des addictions, de la surveillance et de la précarité liées à la technique ?",
racine1: "La maîtrise précoce des outils techniques est-elle un avantage décisif ?",
racine2: "ou l'exposition précoce aux écrans nuit-elle au développement cognitif et social ?",
enjeu: "Examiner l'impact spécifique de la technique sur les nouvelles générations."
},
{
id: 1380,
notion: 'technique',
intitule: "La technique est-elle une chance pour la vieillesse ?",
piste1: "Les technologies d'assistance et de télémedicine permettent-elles aux personnes âgées de vieillir en bonne santé et à domicile ?",
piste2: "ou ces technologies renforcent-elles l'isolement et la déshumanisation de la fin de vie ?",
racine1: "La technique peut-elle compenser les pertes d'autonomie liées à l'âge ?",
racine2: "ou la vieillesse a-t-elle besoin de présence humaine plus que de solutions techniques ?",
enjeu: "Déterminer le rôle de la technique dans l'accompagnement du vieillissement."
},
{
id: 1381,
notion: 'technique',
intitule: "La technique est-elle une chance pour la ville ?",
piste1: "La smart city et les technologies urbaines rendent-elles la ville plus efficace, propre et vivable ?",
piste2: "ou transforment-elles la ville en un espace de contrôle, de standardisation et d'exclusion ?",
racine1: "La technique peut-elle résoudre les problèmes de congestion, de pollution et de gestion des ressources ?",
racine2: "ou la ville a-t-elle besoin d'humanité, de désordre et d'imprévu que la technique tend à éliminer ?",
enjeu: "Examiner l'impact de la technique sur l'espace urbain et la vie citadine."
},
{
id: 1382,
notion: 'technique',
intitule: "La technique est-elle une chance pour l'alimentation ?",
piste1: "L'agriculture intensive et les OGM permettent-ils de nourrir une population mondiale croissante ?",
piste2: "ou détruisent-ils les sols, la biodiversité et la qualité nutritionnelle des aliments ?",
racine1: "La technique est-elle la seule réponse au défi de la sécurité alimentaire mondiale ?",
racine2: "ou l'agroécologie et les méthodes traditionnelles sont-elles plus durables et plus saines ?",
enjeu: "Déterminer le rôle de la technique dans la production et la qualité de l'alimentation."
},
{
id: 1383,
notion: 'technique',
intitule: "La technique est-elle une chance pour le voyage ?",
piste1: "Les transports modernes nous ouvrent-ils le monde et favorisent-ils la rencontre des cultures ?",
piste2: "ou le tourisme de masse et l'empreinte carbone détruisent-ils les lieux que nous visitons ?",
racine1: "La technique abolit-elle les frontières et enrichit-elle l'expérience humaine ?",
racine2: "ou le voyage technique est-il une consommation superficielle qui dénature l'altérité ?",
enjeu: "Examiner l'impact de la technique sur l'expérience du voyage et de l'ailleurs."
},
{
id: 1384,
notion: 'technique',
intitule: "La technique est-elle une chance pour le sport ?",
piste1: "Les équipements et l'analyse de données permettent-ils aux athlètes de repousser les limites du corps humain ?",
piste2: "ou la technologie dénature-t-elle l'esprit du sport en créant des inégalités et en encourageant le dopage ?",
racine1: "La technique est-elle un prolongement légitime de l'effort et du mérite sportif ?",
racine2: "ou le sport doit-il rester une épreuve brute des capacités naturelles du corps ?",
enjeu: "Déterminer la place légitime de la technique dans la pratique sportive."
},
{
id: 1385,
notion: 'technique',
intitule: "La technique est-elle une chance pour la musique ?",
piste1: "L'enregistrement, la synthèse sonore et la diffusion numérique ont-ils démocratisé l'accès à la musique ?",
piste2: "ou ont-ils standardisé les productions et détruit l'expérience unique du concert live ?",
racine1: "La technique est-elle un nouvel instrument au service de la création musicale ?",
racine2: "ou la technique transforme-t-elle la musique en un produit de consommation de masse ?",
enjeu: "Examiner l'impact de la technique sur la création et l'écoute musicales."
},
{
id: 1386,
notion: 'technique',
intitule: "La technique est-elle une chance pour la littérature ?",
piste1: "Le livre numérique et l'auto-édition permettent-ils une plus grande diffusion et diversité des voix ?",
piste2: "ou l'attention fragmentée par les écrans tue-t-elle la lecture profonde et la littérature exigeante ?",
racine1: "La technique change-t-elle le support sans altérer l'essence de la littérature ?",
racine2: "ou le support technique modifie-t-il radicalement notre rapport au texte et à l'imaginaire ?",
enjeu: "Déterminer l'impact de la technique sur l'écriture et la lecture."
},
{
id: 1387,
notion: 'technique',
intitule: "La technique est-elle une chance pour la philosophie ?",
piste1: "Les outils numériques facilitent-ils l'accès aux textes, le débat et la diffusion des idées philosophiques ?",
piste2: "ou la culture de l'immédiateté et du slogan est-elle incompatible avec la lenteur et la profondeur de la réflexion ?",
racine1: "La technique est-elle un outil neutre au service de la pensée ?",
racine2: "ou la technique impose-t-elle un formatage de la pensée qui lui est hostile ?",
enjeu: "Examiner l'impact de la technique sur la pratique et la diffusion de la philosophie."
},
{
id: 1388,
notion: 'technique',
intitule: "La technique est-elle une chance pour la science ?",
piste1: "Sans instruments techniques (télescopes, accélérateurs), la science moderne serait-elle impossible ?",
piste2: "ou la dépendance à la technique rend-elle la science coûteuse, opaque et soumise à des intérêts industriels ?",
racine1: "La technique est-elle l'organe de perception de la science contemporaine ?",
racine2: "ou la technique biaise-t-elle la recherche en ne permettant d'observer que ce qui est mesurable ?",
enjeu: "Déterminer le rôle constitutif de la technique dans l'entreprise scientifique."
},
{
id: 1389,
notion: 'technique',
intitule: "La technique est-elle une chance pour la justice ?",
piste1: "Les preuves ADN, la vidéosurveillance et l'analyse de données aident-elles à établir la vérité et à condamner les coupables ?",
piste2: "ou les biais algorithmiques et la surveillance de masse menacent-ils les présomptions d'innocence et les libertés ?",
racine1: "La technique rend-elle la justice plus objective, rapide et fiable ?",
racine2: "ou la technique introduit-elle de nouvelles formes d'arbitraire et d'inégalité devant la loi ?",
enjeu: "Examiner l'impact de la technique sur le système judiciaire et les droits fondamentaux."
},
{
id: 1390,
notion: 'technique',
intitule: "La technique est-elle une chance pour la guerre ?",
piste1: "Les drones et les armes de précision limitent-elles les pertes civiles et rendent-elles la guerre plus 'propre' ?",
piste2: "ou ces technologies banalisent-elles l'usage de la force et rendent-elles les conflits plus probables ?",
racine1: "La technique peut-elle humaniser la guerre en la rendant plus chirurgicale ?",
racine2: "ou la distance et la déshumanisation de la guerre technique en augmentent-elles l'horreur ?",
enjeu: "Déterminer l'impact de la technique sur la nature et l'éthique des conflits armés."
},
{
id: 1391,
notion: 'technique',
intitule: "La technique est-elle une chance pour l'architecture ?",
piste1: "Les nouveaux matériaux et logiciels permettent-ils de construire des bâtiments plus beaux, plus écologiques et plus fonctionnels ?",
piste2: "ou standardisent-ils les paysages urbains en détruisant l'identité et le génie des lieux ?",
racine1: "La technique libère-t-elle la créativité des architectes ?",
racine2: "ou la technique impose-t-elle une rationalité économique qui écrase l'esthétique ?",
enjeu: "Examiner l'impact de la technique sur la création architecturale et l'espace bâti."
},
{
id: 1392,
notion: 'technique',
intitule: "La technique est-elle une chance pour la mode ?",
piste1: "Les innovations textiles et la production de masse rendent-elle la mode accessible à tous ?",
piste2: "ou la fast fashion est-elle un désastre écologique et social qui dévalue l'art du vêtement ?",
racine1: "La technique démocratise-t-elle l'esthétique et l'expression de soi ?",
racine2: "ou la technique transforme-t-elle le vêtement en un déchet éphémère ?",
enjeu: "Déterminer l'impact de la technique sur l'industrie de la mode et l'expression vestimentaire."
},
{
id: 1393,
notion: 'technique',
intitule: "La technique est-elle une chance pour le cinéma ?",
piste1: "Les effets spéciaux et la 3D offrent-ils des expériences visuelles et narratives inédites ?",
piste2: "ou la technologie remplace-t-elle l'écriture, la mise en scène et le jeu d'acteur par du spectacle vide ?",
racine1: "La technique est-elle un pinceau au service de l'imaginaire cinématographique ?",
racine2: "ou la technique devient-elle le sujet du film au détriment de l'histoire et des personnages ?",
enjeu: "Examiner l'impact de la technique sur l'art cinématographique."
},
{
id: 1394,
notion: 'technique',
intitule: "La technique est-elle une chance pour la photographie ?",
piste1: "La photographie numérique et les smartphones permettent-ils à chacun de capturer et de partager le monde ?",
piste2: "ou l'omniprésence des images banalise-t-elle le regard et détruit-elle la valeur de l'instant ?",
racine1: "La technique démocratise-t-elle l'art de la photographie ?",
racine2: "ou la facilité technique tue-t-elle l'intention et la composition photographiques ?",
enjeu: "Déterminer l'impact de la technique sur la pratique et la valeur de l'image photographique."
},
{
id: 1395,
notion: 'technique',
intitule: "La technique est-elle une chance pour la danse ?",
piste1: "L'éclairage, la scénographie et les prothèses élargissent-ils les possibilités expressives du corps dansant ?",
piste2: "ou la technologie distrait-elle du mouvement pur et de la présence physique du danseur ?",
racine1: "La technique est-elle un partenaire de la danse qui amplifie le geste ?",
racine2: "ou la danse doit-elle rester une confrontation brute et non médiatisée du corps à l'espace ?",
enjeu: "Examiner l'impact de la technique sur l'art chorégraphique."
},
{
id: 1396,
notion: 'technique',
intitule: "La technique est-elle une chance pour le théâtre ?",
piste1: "Les dispositifs scéniques modernes enrichissent-ils l'expérience théâtrale et la mise en scène ?",
piste2: "ou menacent-ils la tradition du jeu d'acteur et la relation vivante entre la scène et la salle ?",
racine1: "La technique est-elle au service du texte et de l'interprétation ?",
racine2: "ou la technique devient-elle un spectacle qui écrase la parole et la présence humaine ?",
enjeu: "Déterminer la place de la technique dans l'art théâtral."
},
{
id: 1397,
notion: 'technique',
intitule: "La technique est-elle une chance pour la cuisine ?",
piste1: "Les techniques culinaires modernes (moléculaire, sous-vide) élargissent-elles le champ des saveurs et des textures ?",
piste2: "ou dénaturent-elles les produits et le plaisir simple de manger ?",
racine1: "La technique est-elle un outil de raffinement et de créativité pour le cuisinier ?",
racine2: "ou la cuisine doit-elle rester un art simple, respectueux des produits bruts et des traditions ?",
enjeu: "Examiner l'impact de la technique sur l'art culinaire et l'expérience gustative."
},
{
id: 1398,
notion: 'technique',
intitule: "La technique est-elle une chance pour le jardinage ?",
piste1: "Les outils et les connaissances techniques permettent-ils de cultiver plus efficacement et de nourrir plus de monde ?",
piste2: "ou les pesticides et les machines détruisent-ils la vie des sols et le lien contemplatif avec la nature ?",
racine1: "La technique est-elle une aide précieuse pour travailler la terre ?",
racine2: "ou le jardinage véritable exige-t-il de renoncer à la maîtrise technique pour observer et accompagner la nature ?",
enjeu: "Déterminer le rôle de la technique dans le rapport à la terre et au vivant."
},
{
id: 1399,
notion: 'technique',
intitule: "La technique est-elle une chance pour l'humanité (bilan) ?",
piste1: "Malgré ses risques, la technique est-elle le plus grand levier de progrès et d'émancipation de l'histoire humaine ?",
piste2: "ou est-elle une fuite en avant qui nous mène droit à la catastrophe ?",
racine1: "Le bilan global de la technique est-il positif, car elle a vaincu la maladie, la faim et l'ignorance ?",
racine2: "ou la technique a-t-elle créé des problèmes d'une ampleur telle qu'aucune solution technique ne pourra les résoudre ?",
enjeu: "Établir un bilan philosophique global de la condition technique de l'humanité."
},
{
id: 1400,
notion: 'technique',
intitule: "La technique peut-elle se définir ?",
piste1: "Peut-on enfermer la technique dans une définition unique, ou est-elle un phénomène protéiforme qui évolue avec l'histoire ?",
piste2: "ou la technique est-elle si omniprésente qu'elle devient indéfinissable, comme l'air que nous respirons ?",
racine1: "La technique a-t-elle une essence stable (outil, moyen, système) ?",
racine2: "ou la technique est-elle un concept ouvert, un 'fait social total' qui échappe à toute définition close ?",
enjeu: "Interroger la possibilité et les limites d'une définition philosophique de la technique."
},
{
id: 1401,
notion: 'temps',
intitule: "Qu'est-ce que le temps ?",
piste1: "Le temps est-il une réalité objective qui s'écoule indépendamment de nous ?",
piste2: "ou est-il une construction de l'esprit humain pour ordonner ses expériences ?",
racine1: "Le temps existe-t-il en soi comme une dimension du monde ?",
racine2: "ou n'est-il qu'une forme a priori de notre sensibilité (Kant) ?",
enjeu: "Établir une définition philosophique du temps et interroger son statut ontologique."
},
{
id: 1402,
notion: 'temps',
intitule: "Le temps est-il une illusion ?",
piste1: "L'écoulement du temps n'est-il qu'une apparence subjective sans réalité physique ?",
piste2: "ou le temps est-il la structure même de toute réalité et de tout changement ?",
racine1: "Le présent est-il la seule réalité, rendant le passé et l'avenir illusoires ?",
racine2: "ou l'illusion réside-t-elle dans notre croyance en un présent immobile ?",
enjeu: "Examiner la thèse de l'irréalité du temps et ses implications métaphysiques."
},
{
id: 1403,
notion: 'temps',
intitule: "Le temps s'écoule-t-il réellement ?",
piste1: "Le temps passe-t-il comme un fleuve, emportant avec lui les événements ?",
piste2: "ou cet écoulement n'est-il qu'une métaphore projetée par la conscience ?",
racine1: "Le devenir est-il une propriété fondamentale de l'univers ?",
racine2: "ou l'univers est-il un bloc spatio-temporel statique où rien ne 'passe' vraiment ?",
enjeu: "Déterminer si le passage du temps est une réalité physique ou une expérience psychologique."
},
{
id: 1404,
notion: 'temps',
intitule: "Le présent est-il la seule réalité temporelle ?",
piste1: "Seul le présent existe-t-il réellement, le passé n'étant plus et l'avenir n'étant pas encore ?",
piste2: "ou le présent n'est-il qu'une frontière instable entre un passé et un avenir tout aussi réels ?",
racine1: "L'être se réduit-il à la présence actuelle ?",
racine2: "ou le temps est-il une totalité où passé, présent et futur coexistent ?",
enjeu: "Interroger le privilège ontologique du présent (présentisme) face à l'éternalisme."
},
{
id: 1405,
notion: 'temps',
intitule: "Le passé existe-t-il encore ?",
piste1: "Le passé subsiste-t-il quelque part, conservé par la mémoire ou l'histoire ?",
piste2: "ou est-il néantisé, n'existant plus que comme trace ou souvenir ?",
racine1: "Ce qui a été conserve-t-il une forme d'être ?",
racine2: "ou le passé n'est-il qu'une reconstruction actuelle de la conscience ?",
enjeu: "Déterminer le mode d'existence du passé et son rapport à la mémoire."
},
{
id: 1406,
notion: 'temps',
intitule: "L'avenir existe-t-il déjà ?",
piste1: "L'avenir est-il déjà écrit et déterminé, attendant simplement d'être vécu ?",
piste2: "ou est-il un champ de possibles ouverts, inexistant tant qu'il n'est pas actualisé ?",
racine1: "Le déterminisme implique-t-il que l'avenir soit aussi réel que le présent ?",
racine2: "ou la liberté humaine suppose-t-elle que l'avenir soit un néant d'être ?",
enjeu: "Examiner le statut de l'avenir entre nécessité et contingence."
},
{
id: 1407,
notion: 'temps',
intitule: "Le temps est-il continu ou discontinu ?",
piste1: "Le temps est-il un flux ininterrompu, une durée homogène et lisse ?",
piste2: "ou est-il composé d'instants discrets et juxtaposés, comme les images d'un film ?",
racine1: "Le temps est-il divisible à l'infini sans perdre sa nature ?",
racine2: "ou l'instant est-il l'atome indivisible du temps, rendant la continuité illusoire ?",
enjeu: "Déterminer la structure interne du temps : flux continu ou succession d'instants."
},
{
id: 1408,
notion: 'temps',
intitule: "Le temps est-il mesurable ?",
piste1: "Le temps peut-il être quantifié et réduit à une série de nombres (heures, minutes) ?",
piste2: "ou l'essence du temps échappe-t-elle à toute mesure objective ?",
racine1: "Mesurer le temps, est-ce le connaître véritablement ?",
racine2: "ou la mesure ne saisit-elle que l'espace (mouvement) et non le temps lui-même ?",
enjeu: "Examiner les limites de la quantification du temps et la distinction entre temps et espace."
},
{
id: 1409,
notion: 'temps',
intitule: "La mesure du temps le définit-elle ?",
piste1: "Le temps n'est-il rien d'autre que ce que mesurent les horloges et les calendriers ?",
piste2: "ou la mesure est-elle seulement un outil pratique qui manque l'essence du temps ?",
racine1: "Le temps est-il une grandeur physique objective ?",
racine2: "ou le temps vécu (la durée) est-il irréductible au temps des horloges ?",
enjeu: "Confronter le temps objectif de la physique et le temps subjectif de la conscience."
},
{
id: 1410,
notion: 'temps',
intitule: "Le temps est-il une dimension de l'espace ?",
piste1: "Le temps et l'espace sont-ils indissociables, formant un continuum spatio-temporel ?",
piste2: "ou le temps est-il radicalement hétérogène à l'espace et à l'étendue ?",
racine1: "La relativité réduit-elle le temps à une quatrième dimension géométrique ?",
racine2: "ou le temps possède-t-il une flèche et une qualité que l'espace n'a pas ?",
enjeu: "Déterminer si le temps peut être spatialisé sans perdre sa spécificité."
},
{
id: 1411,
notion: 'temps',
intitule: "Peut-on voyager dans le temps ?",
piste1: "Le voyage dans le temps est-il une possibilité théorique (physique) ou logique ?",
piste2: "ou est-il une absurdité qui viole le principe de non-contradiction et la causalité ?",
racine1: "Le passé et l'avenir sont-ils des lieux que l'on pourrait visiter ?",
racine2: "ou le temps est-il la condition même du déplacement, ne pouvant être lui-même déplacé ?",
enjeu: "Examiner les paradoxes du voyage dans le temps et la nature de la causalité."
},
{
id: 1412,
notion: 'temps',
intitule: "Le temps est-il réversible ?",
piste1: "Les lois de la physique étant réversibles, le temps pourrait-il s'écouler en sens inverse ?",
piste2: "ou la flèche du temps (entropie, conscience) rend-elle l'irréversibilité absolue ?",
racine1: "Le temps n'est-il qu'une variable mathématique sans direction privilégiée ?",
racine2: "ou l'irréversibilité est-elle inscrite dans la structure même du réel et de l'action ?",
enjeu: "Confronter la réversibilité des lois physiques et l'irréversibilité de l'expérience vécue."
},
{
id: 1413,
notion: 'temps',
intitule: "La flèche du temps est-elle une nécessité physique ?",
piste1: "L'augmentation de l'entropie donne-t-elle au temps une direction objective et universelle ?",
piste2: "ou la flèche du temps n'est-elle qu'une illusion statistique ou psychologique ?",
racine1: "Le désordre croissant de l'univers fonde-t-il l'asymétrie temporelle ?",
racine2: "ou l'irréversibilité est-elle seulement une propriété de notre point de vue limité ?",
enjeu: "Déterminer le fondement physique ou subjectif de l'irréversibilité temporelle."
},
{
id: 1414,
notion: 'temps',
intitule: "Le temps est-il une donnée naturelle ou culturelle ?",
piste1: "Le temps est-il un rythme biologique et cosmique imposé à l'homme ?",
piste2: "ou est-il une construction sociale, historique et linguistique ?",
racine1: "Vivons-nous le temps de la nature (saisons, cycles) ou le temps de la culture (horaires, histoire) ?",
racine2: "ou la culture ne fait-elle que mesurer et organiser un temps naturel préexistant ?",
enjeu: "Examiner l'articulation entre le temps cosmique/biologique et le temps social."
},
{
id: 1415,
notion: 'temps',
intitule: "L'homme est-il maître du temps ?",
piste1: "La technique et l'organisation permettent-elles de contrôler et d'optimiser le temps ?",
piste2: "ou l'homme reste-t-il fondamentalement soumis à l'écoulement du temps et à la finitude ?",
racine1: "Gagner du temps, est-ce vraiment le maîtriser ou seulement en changer l'usage ?",
racine2: "ou la maîtrise du temps est-elle une illusion qui masque notre impuissance face à la mort ?",
enjeu: "Évaluer les prétentions de la volonté et de la technique face à la temporalité."
},
{
id: 1416,
notion: 'temps',
intitule: "Peut-on gagner du temps ?",
piste1: "L'efficacité et la rapidité permettent-elles d'accumuler du temps comme une ressource ?",
piste2: "ou le temps gagné est-il immédiatement comblé par de nouvelles occupations ?",
racine1: "Le temps est-il une quantité que l'on peut économiser et stocker ?",
racine2: "ou le temps est-il un flux qui ne s'arrête jamais, rendant le 'gain' illusoire ?",
enjeu: "Interroger la métaphore économique du temps et la réalité de l'optimisation temporelle."
},
{
id: 1417,
notion: 'temps',
intitule: "Peut-on perdre du temps ?",
piste1: "Le temps passé à ne rien faire ou à des activités futiles est-il du temps perdu ?",
piste2: "ou la perte de temps est-elle une condition nécessaire à la liberté et à la rêverie ?",
racine1: "Le temps a-t-il une valeur intrinsèque qui se dégrade quand il n'est pas 'utile' ?",
racine2: "ou l'oisiveté est-elle un usage légitime et essentiel du temps ?",
enjeu: "Déterminer si le temps peut être 'perdu' et quelle est la valeur du temps non productif."
},
{
id: 1418,
notion: 'temps',
intitule: "Le temps perdu est-il vraiment perdu ?",
piste1: "Le temps passé peut-il être retrouvé, sublimé ou donné sens rétrospectivement (ex: par l'art) ?",
piste2: "ou le passé est-il définitivement révolu et irrécupérable ?",
racine1: "La mémoire et la création peuvent-elles racheter le temps écoulé ?",
racine2: "ou le temps perdu est-il la marque de notre finitude et de notre irréversibilité ?",
enjeu: "Examiner la possibilité de la rédemption ou de la récupération du temps passé."
},
{
id: 1419,
notion: 'temps',
intitule: "Le temps guérit-il toutes les blessures ?",
piste1: "L'éloignement temporel atténue-t-il nécessairement la souffrance et le chagrin ?",
piste2: "ou le temps peut-il au contraire cristalliser les traumatismes et les rancunes ?",
racine1: "L'oubli, œuvre du temps, est-il une condition de la guérison psychique ?",
racine2: "ou certaines blessures sont-elles indélébiles, défiant l'action du temps ?",
enjeu: "Évaluer le pouvoir thérapeutique ou destructeur du temps sur la psyché."
},
{
id: 1420,
notion: 'temps',
intitule: "Le temps est-il un destructeur ?",
piste1: "Le temps est-il cette force qui use, dégrade et mène toute chose à la ruine et à la mort ?",
piste2: "ou la destruction n'est-elle qu'un aspect du temps, qui est aussi créateur ?",
racine1: "Le temps est-il l'ennemi de l'être et de la permanence ?",
racine2: "ou le temps est-il la condition de toute naissance et de tout renouveau ?",
enjeu: "Déterminer le rapport ambivalent du temps à la destruction et à la conservation."
},
{
id: 1421,
notion: 'temps',
intitule: "Le temps est-il un créateur ?",
piste1: "Le temps permet-il l'émergence de la nouveauté, de l'évolution et de l'histoire ?",
piste2: "ou le temps ne fait-il que dérouler un programme déjà inscrit, sans rien créer de nouveau ?",
racine1: "La durée est-elle une invention continuelle de formes imprévisibles (Bergson) ?",
racine2: "ou le temps n'est-il qu'un cadre vide où se produisent des combinaisons de matières éternelles ?",
enjeu: "Examiner la capacité du temps à produire de la nouveauté et du sens."
},
{
id: 1422,
notion: 'temps',
intitule: "L'éternité est-elle l'absence de temps ?",
piste1: "L'éternité est-elle un état hors du temps, où rien ne change et rien ne passe ?",
piste2: "ou l'éternité est-elle une durée infinie, un temps qui ne s'arrête jamais ?",
racine1: "L'éternité est-elle la négation radicale de la temporalité et du devenir ?",
racine2: "ou l'éternité est-elle la totalité du temps, embrassant passé, présent et futur ?",
enjeu: "Définir l'éternité par opposition ou par extension du concept de temps."
},
{
id: 1423,
notion: 'temps',
intitule: "L'éternité est-elle un temps infini ?",
piste1: "L'éternité n'est-elle qu'une prolongation sans fin du temps mesurable ?",
piste2: "ou l'infini temporel est-il une contradiction, l'éternité étant d'un autre ordre ?",
racine1: "Peut-on atteindre l'éternité en ajoutant du temps au temps ?",
racine2: "ou l'éternité est-elle un 'maintenant' permanent, étranger à la succession ?",
enjeu: "Distinguer l'infinité temporelle de l'éternité au sens métaphysique ou théologique."
},
{
id: 1424,
notion: 'temps',
intitule: "Peut-on vivre dans l'instant présent ?",
piste1: "Est-il possible de se concentrer exclusivement sur le présent, sans souvenir ni anticipation ?",
piste2: "ou la conscience est-elle toujours déjà tendue vers le passé ou l'avenir ?",
racine1: "Le présent peut-il être vécu dans sa pureté, sans être contaminé par la mémoire ou le projet ?",
racine2: "ou l'instant présent n'est-il qu'une abstraction, la conscience étant toujours 'épaisse' ?",
enjeu: "Examiner la possibilité et la valeur de l'attention au présent (pleine conscience, épicurisme)."
},
{
id: 1425,
notion: 'temps',
intitule: "Vivre dans l'instant est-il une sagesse ou une fuite ?",
piste1: "Se concentrer sur le présent est-il la clé du bonheur et de la sérénité ?",
piste2: "ou est-ce une manière de fuir ses responsabilités et la réalité de sa condition mortelle ?",
racine1: "Le carpe diem est-il une affirmation de la vie ou un refus de l'histoire et du projet ?",
racine2: "ou la sagesse consiste-t-elle précisément à habiter le présent sans s'y enfermer ?",
enjeu: "Évaluer la portée éthique et existentielle de la vie dans l'instant."
},
{
id: 1426,
notion: 'temps',
intitule: "Le souvenir est-il une forme de présence du passé ?",
piste1: "Se souvenir, est-ce rendre le passé présent à l'esprit, lui redonnant une forme d'être ?",
piste2: "ou le souvenir n'est-il qu'une image actuelle, une reconstruction qui trahit le passé réel ?",
racine1: "Le passé survit-il dans la mémoire comme une couche d'être (Bergson) ?",
racine2: "ou le souvenir est-il une fiction du présent, utile mais fausse ?",
enjeu: "Déterminer le statut ontologique du souvenir et son rapport à la réalité passée."
},
{
id: 1427,
notion: 'temps',
intitule: "La mémoire déforme-t-elle le temps ?",
piste1: "La mémoire sélectionne, arrange et modifie-t-elle le passé pour le rendre supportable ou cohérent ?",
piste2: "ou la mémoire est-elle la gardienne fidèle de la vérité temporelle ?",
racine1: "L'identité narrative que nous construisons est-elle une falsification du temps vécu ?",
racine2: "ou sans cette déformation, le temps serait-il un chaos incompréhensible ?",
enjeu: "Examiner le rôle constructif et parfois illusoire de la mémoire dans la temporalité."
},
{
id: 1428,
notion: 'temps',
intitule: "L'oubli est-il une nécessité pour vivre ?",
piste1: "L'oubli est-il une condition indispensable pour agir, pardonner et avancer dans le temps ?",
piste2: "ou l'oubli est-il une perte de soi et une trahison de la vérité historique ?",
racine1: "Une mémoire totale serait-elle une malédiction qui paralyse l'action (Nietzsche) ?",
racine2: "ou l'oubli est-il toujours une forme d'injustice envers le passé ?",
enjeu: "Déterminer la valeur positive ou négative de l'oubli dans l'existence temporelle."
},
{
id: 1429,
notion: 'temps',
intitule: "L'attente allonge-t-elle le temps ?",
piste1: "Le temps de l'attente est-il subjectivement plus long et plus pesant que le temps de l'action ?",
piste2: "ou le temps est-il objectivement le même, seule notre perception changeant ?",
racine1: "L'ennui et l'attente révèlent-ils la structure pure du temps comme fardeau (Heidegger) ?",
racine2: "ou le temps n'est-il qu'une mesure physique, indifférente à nos états d'âme ?",
enjeu: "Examiner la distorsion subjective du temps et sa révélation dans l'attente."
},
{
id: 1430,
notion: 'temps',
intitule: "L'ennui est-il une expérience du temps pur ?",
piste1: "Dans l'ennui, le temps se révèle-t-il à nous comme une lourdeur vide et une succession interminable ?",
piste2: "ou l'ennui est-il simplement un manque de stimulation, sans rapport avec l'essence du temps ?",
racine1: "L'ennui nous confronte-t-il à la nudité du temps qui passe sans rien remplir ?",
racine2: "ou le temps n'est-il perceptible que lorsqu'il est rempli d'événements ?",
enjeu: "Déterminer si l'ennui est une révélation phénoménologique de la temporalité."
},
{
id: 1431,
notion: 'temps',
intitule: "Le bonheur suspend-il le temps ?",
piste1: "L'expérience du bonheur donne-t-elle l'illusion d'un présent éternel, où le temps ne passe plus ?",
piste2: "ou le bonheur est-il au contraire une conscience aiguë de la fuite du temps et de sa préciosité ?",
racine1: "Le bonheur est-il une sortie hors du temps (éternité immanente) ?",
racine2: "ou le bonheur est-il intrinsèquement temporel, fait de mémoire et d'espérance ?",
enjeu: "Examiner le rapport entre le bonheur et la perception de la durée."
},
{
id: 1432,
notion: 'temps',
intitule: "Le temps du travail est-il différent du temps du loisir ?",
piste1: "Le temps du travail est-il un temps mesuré, aliéné et vendu, opposé au temps libre du loisir ?",
piste2: "ou le travail peut-il être un temps de réalisation de soi, abolissant cette opposition ?",
racine1: "Le temps est-il une marchandise dans le capitalisme, rendant le loisir simple récupération ?",
racine2: "ou le temps du travail peut-il être un temps de création et de durée authentique ?",
enjeu: "Analyser la division sociale du temps et ses effets sur l'existence."
},
{
id: 1433,
notion: 'temps',
intitule: "Le temps est-il de l'argent ?",
piste1: "Le temps a-t-il une valeur économique, étant une ressource rare qu'il faut optimiser ?",
piste2: "ou cette équivalence réduit-elle la vie humaine à une logique comptable et marchande ?",
racine1: "La rationalisation du temps est-elle une condition du progrès économique ?",
racine2: "ou le temps de la vie est-il incommensurable et hors de prix ?",
enjeu: "Critiquer ou justifier la marchandisation du temps."
},
{
id: 1434,
notion: 'temps',
intitule: "La modernité a-t-elle accéléré le temps ?",
piste1: "Les technologies de communication et de transport ont-elles comprimé le temps et l'espace ?",
piste2: "ou cette accélération n'est-elle qu'une illusion, le temps restant objectivement le même ?",
racine1: "L'immédiateté moderne détruit-elle la durée et la patience nécessaires à la réflexion ?",
racine2: "ou la modernité nous a-t-elle simplement libérés des lenteurs naturelles ?",
enjeu: "Examiner la thèse de l'accélération sociale du temps et ses conséquences."
},
{
id: 1435,
notion: 'temps',
intitule: "L'accélération du temps nous rend-elle moins libres ?",
piste1: "L'urgence permanente nous empêche-t-elle de délibérer et de choisir nos actions ?",
piste2: "ou la rapidité nous libère-t-elle des contraintes, augmentant notre pouvoir d'agir ?",
racine1: "La tyrannie de l'immédiat est-elle incompatible avec l'autonomie de la volonté ?",
racine2: "ou la liberté consiste-t-elle à maîtriser cette accélération pour ses propres fins ?",
enjeu: "Déterminer l'impact de la vitesse et de l'urgence sur la liberté humaine."
},
{
id: 1436,
notion: 'temps',
intitule: "Le temps historique est-il un progrès ?",
piste1: "L'histoire avance-t-elle vers un mieux, rendant le temps porteur d'une amélioration morale et matérielle ?",
piste2: "ou le temps historique est-il cyclique, chaotique ou simplement un changement sans direction ?",
racine1: "Le progrès est-il une loi de l'histoire ou un mythe consolateur de la modernité ?",
racine2: "ou l'histoire est-elle tragique, faite de répétitions et de régressions ?",
enjeu: "Examiner la téléologie de l'histoire et l'idée de progrès temporel."
},
{
id: 1437,
notion: 'temps',
intitule: "L'histoire a-t-elle un sens ?",
piste1: "Le temps historique est-il orienté vers une fin ou un but (la liberté, la rédemption, la raison) ?",
piste2: "ou l'histoire est-elle une suite d'événements contingents, dépourvue de sens global ?",
racine1: "Peut-on lire l'histoire comme un récit cohérent et nécessaire ?",
racine2: "ou l'histoire n'est-elle que 'une chose après l'autre', sans plan ni finalité ?",
enjeu: "Débattre de la philosophie de l'histoire : sens immanent ou absurdité du devenir."
},
{
id: 1438,
notion: 'temps',
intitule: "Le temps cyclique est-il supérieur au temps linéaire ?",
piste1: "Le retour éternel des mêmes choses (cycles naturels, mythes) offre-t-il une sécurité et une sagesse ?",
piste2: "ou le temps linéaire (création, progrès, fin) est-il le seul à permettre la liberté et la nouveauté ?",
racine1: "Le temps cyclique annule-t-il la responsabilité et l'histoire au profit de la nature ?",
racine2: "ou le temps linéaire est-il une source d'angoisse et de destruction (fin du monde) ?",
enjeu: "Confronter les deux grandes structures temporelles de la pensée humaine."
},
{
id: 1439,
notion: 'temps',
intitule: "Le temps de la nature est-il différent du temps de l'homme ?",
piste1: "Le temps cosmique et biologique (saisons, vie, mort) est-il fondamentalement étranger au temps de la conscience et de l'histoire ?",
piste2: "ou l'homme est-il un être naturel dont le temps est une variation du temps cosmique ?",
racine1: "L'homme s'arrache-t-il au temps de la nature par la culture et la mémoire ?",
racine2: "ou l'homme reste-t-il soumis aux rythmes biologiques qui déterminent son existence ?",
enjeu: "Déterminer la spécificité du temps humain face au temps naturel."
},
{
id: 1440,
notion: 'temps',
intitule: "L'horloge a-t-elle changé notre rapport au temps ?",
piste1: "La mécanisation du temps a-t-elle aliéné l'homme, le soumettant à une discipline abstraite et impersonnelle ?",
piste2: "ou l'horloge a-t-elle libéré l'homme, lui permettant d'organiser rationnellement sa vie sociale ?",
racine1: "Le temps de l'horloge est-il une violence faite au temps vécu et à la durée ?",
racine2: "ou l'horloge est-elle un outil neutre, indifférent à la manière dont nous l'utilisons ?",
enjeu: "Analyser l'impact de la technologie sur la subjectivité temporelle."
},
{
id: 1441,
notion: 'temps',
intitule: "Le temps subjectif est-il plus réel que le temps objectif ?",
piste1: "Le temps tel que nous le vivons (durée, ennui, joie) est-il la seule réalité temporelle authentique ?",
piste2: "ou le temps objectif de la physique est-il la seule réalité, le temps subjectif n'étant qu'une illusion ?",
racine1: "La durée bergsonienne est-elle la substance même de notre être ?",
racine2: "ou le temps subjectif n'est-il qu'un épiphénomène des processus cérébraux objectifs ?",
enjeu: "Hiérarchiser ou articuler le temps de la conscience et le temps de la science."
},
{
id: 1442,
notion: 'temps',
intitule: "La durée est-elle la vraie nature du temps ?",
piste1: "Le temps est-il une multiplicité qualitative, une fusion et un écoulement continu (Bergson) ?",
piste2: "ou la durée n'est-elle qu'une intuition subjective, incapable de rendre compte du temps réel du monde ?",
racine1: "Le temps spatialisé (celui des horloges) est-il une trahison du temps véritable ?",
racine2: "ou la durée n'est-elle qu'un aspect psychologique, le temps physique étant quantitatif ?",
enjeu: "Examiner la thèse bergsonienne de la durée comme essence de la temporalité."
},
{
id: 1443,
notion: 'temps',
intitule: "Peut-on saisir l'instant ?",
piste1: "L'instant est-il un point sans épaisseur, insaisissable car il disparaît dès qu'il apparaît ?",
piste2: "ou peut-on habiter l'instant, lui donnant une épaisseur par l'attention et l'action ?",
racine1: "L'instant est-il la limite asymptotique du temps, toujours fuyante ?",
racine2: "ou l'instant de la décision ou de la grâce est-il le point de contact avec l'éternité ?",
enjeu: "Déterminer la nature et la possibilité d'une expérience de l'instant."
},
{
id: 1444,
notion: 'temps',
intitule: "Le temps est-il une succession d'instants ?",
piste1: "Le temps est-il composé d'instants juxtaposés, comme les perles d'un collier ?",
piste2: "ou le temps est-il un flux continu qui ne peut être découpé sans être dénaturé ?",
racine1: "Le paradoxe de Zénon montre-t-il l'absurdité de la conception atomiste du temps ?",
racine2: "ou la physique moderne (temps de Planck) réhabilite-t-elle l'instant comme unité fondamentale ?",
enjeu: "Examiner la structure discrète ou continue du temps."
},
{
id: 1445,
notion: 'temps',
intitule: "Le temps est-il une totalité ?",
piste1: "Le temps ne peut-il être compris que comme un tout, où chaque moment tire son sens de l'ensemble ?",
piste2: "ou le temps est-il une ouverture radicale, où l'avenir est imprévisible et non totalisable ?",
racine1: "Peut-on embrasser le temps dans une vue synoptique (sub specie aeternitatis) ?",
racine2: "ou l'existence temporelle est-elle essentiellement incomplète et en projet ?",
enjeu: "Confronter la vision totalisante du temps et la vision ouverte de l'existence."
},
{
id: 1446,
notion: 'temps',
intitule: "La mort donne-t-elle son sens au temps ?",
piste1: "La finitude et la perspective de la mort sont-elles ce qui rend le temps précieux et lui donne une direction ?",
piste2: "ou la mort est-elle l'absurde qui annule tout sens que nous pourrions donner au temps ?",
racine1: "L'être-pour-la-mort est-il la structure fondamentale du temps humain (Heidegger) ?",
racine2: "ou le sens du temps doit-il être cherché dans la vie et la création, malgré la mort ?",
enjeu: "Examiner le rôle de la finitude dans la constitution de la temporalité et du sens."
},
{
id: 1447,
notion: 'temps',
intitule: "L'immortalité rendrait-elle le temps insupportable ?",
piste1: "Un temps sans fin conduirait-il à l'ennui absolu, à la perte de sens et de valeur de nos actions ?",
piste2: "ou l'immortalité est-elle le rêve suprême, permettant l'accomplissement infini de soi ?",
racine1: "La valeur du temps dépend-elle de sa rareté et de sa limitation ?",
racine2: "ou l'immortalité est-elle la condition d'une sagesse et d'une liberté parfaites ?",
enjeu: "Évaluer la désirabilité de l'immortalité et son impact sur la valeur du temps."
},
{
id: 1448,
notion: 'temps',
intitule: "Le temps est-il une prison ?",
piste1: "Le temps nous enferme-t-il dans le changement, la décadence et l'impossibilité de revenir en arrière ?",
piste2: "ou le temps est-il le milieu de notre liberté, le lieu où nous pouvons agir et nous transformer ?",
racine1: "Le temps est-il la source de l'aliénation et de la souffrance (bouddhisme, schopenhauerisme) ?",
racine2: "ou le temps est-il la condition de possibilité de toute libération et de tout devenir ?",
enjeu: "Déterminer si le temps est une contrainte ou une condition de la liberté."
},
{
id: 1449,
notion: 'temps',
intitule: "Le temps est-il une ressource ?",
piste1: "Le temps est-il un capital que nous possédons et que nous devons gérer efficacement ?",
piste2: "ou cette vision est-elle une aliénation qui nous empêche d'habiter véritablement le temps ?",
racine1: "Le temps est-il une marchandise comme une autre dans la société moderne ?",
racine2: "ou le temps est-il un don ou une dimension de l'être, irréductible à l'utilité ?",
enjeu: "Critiquer la réification du temps et son traitement comme une ressource économique."
},
{
id: 1450,
notion: 'temps',
intitule: "Peut-on maîtriser le temps ?",
piste1: "La planification, la technologie et la discipline permettent-elles un contrôle effectif du temps ?",
piste2: "ou la maîtrise du temps est-elle une illusion, l'homme restant toujours en retard sur son propre devenir ?",
racine1: "L'homme peut-il s'approprier le temps ou ne fait-il que subir son écoulement ?",
racine2: "ou la sagesse consiste-t-elle à se réconcilier avec le temps plutôt qu'à le maîtriser ?",
enjeu: "Examiner les limites de la volonté et de la technique face à la temporalité."
},
{
id: 1451,
notion: 'temps',
intitule: "Le temps est-il un don ?",
piste1: "Le temps nous est-il donné comme une grâce, une opportunité d'exister et d'agir ?",
piste2: "ou le temps est-il une contrainte brute, une condamnation à durer et à mourir ?",
racine1: "Le temps est-il une faveur qui appelle la gratitude et l'usage juste ?",
racine2: "ou le temps est-il une dette que nous devons payer par la mort ?",
enjeu: "Déterminer le statut axiologique du temps : don ou fardeau."
},
{
id: 1452,
notion: 'temps',
intitule: "Le temps est-il une épreuve ?",
piste1: "Le temps met-il à l'épreuve nos convictions, nos relations et nos œuvres, révélant leur solidité ?",
piste2: "ou le temps est-il neutre, n'étant qu'un cadre où les choses se passent sans jugement ?",
racine1: "Le temps est-il un juge qui sépare le vrai du faux, l'essentiel de l'accessoire ?",
racine2: "ou le temps est-il indifférent, détruisant aussi bien le vrai que le faux ?",
enjeu: "Examiner la fonction révélatrice ou destructive du temps."
},
{
id: 1453,
notion: 'temps',
intitule: "La patience est-elle une vertu temporelle ?",
piste1: "La patience est-elle la capacité d'habiter le temps de l'attente sans s'agiter, en respectant le rythme des choses ?",
piste2: "ou la patience est-elle une passivité, un refus d'agir et de maîtriser le temps ?",
racine1: "La patience est-elle une sagesse qui reconnaît les limites de notre pouvoir sur le temps ?",
racine2: "ou la patience est-elle une faiblesse face à l'urgence de l'action ?",
enjeu: "Déterminer la valeur morale de la patience dans le rapport au temps."
},
{
id: 1454,
notion: 'temps',
intitule: "La précipitation est-elle un défaut temporel ?",
piste1: "La précipitation est-elle un manque de sagesse, une incapacité à respecter le temps nécessaire à l'action juste ?",
piste2: "ou la rapidité est-elle parfois une qualité, une capacité d'adaptation et de décision ?",
racine1: "La précipitation est-elle toujours une forme de violence faite au temps et aux choses ?",
racine2: "ou la lenteur est-elle parfois une excuse pour l'inaction et la peur ?",
enjeu: "Évaluer la valeur de la vitesse et de la lenteur dans l'action."
},
{
id: 1455,
notion: 'temps',
intitule: "Le temps est-il une guérison ?",
piste1: "Le temps permet-il de cicatriser les plaies et d'apaiser les passions par la distance et l'oubli ?",
piste2: "ou le temps ne fait-il qu'enterrer les problèmes sans les résoudre, ou les aggraver ?",
racine1: "Le temps a-t-il une vertu thérapeutique intrinsèque ?",
racine2: "ou la guérison exige-t-elle une action consciente, le temps seul étant impuissant ?",
enjeu: "Examiner le pouvoir de guérison attribué au temps."
},
{
id: 1456,
notion: 'temps',
intitule: "Le temps efface-t-il la vérité ?",
piste1: "Le temps, par l'oubli, la déformation des souvenirs et la disparition des témoins, obscurcit-il la vérité ?",
piste2: "ou le temps est-il au contraire ce qui permet à la vérité d'émerger et de s'imposer ?",
racine1: "La vérité est-elle fragile, menacée par l'écoulement du temps et la multiplication des interprétations ?",
racine2: "ou la vérité est-elle éternelle, et le temps ne fait-il que dévoiler ce qui était caché ?",
enjeu: "Déterminer l'effet du temps sur la conservation et la découverte de la vérité."
},
{
id: 1457,
notion: 'temps',
intitule: "Le temps révèle-t-il la vérité ?",
piste1: "Le temps est-il le grand révélateur, faisant tomber les masques et montrant la réalité des choses et des gens ?",
piste2: "ou le temps complique-t-il les choses, ajoutant des couches d'interprétation qui éloignent de la vérité originelle ?",
racine1: "Le temps est-il un processus de dévoilement (alètheia) ?",
racine2: "ou le temps est-il un processus d'obscurcissement et de dégradation ?",
enjeu: "Examiner le rôle du temps dans l'accès à la vérité."
},
{
id: 1458,
notion: 'temps',
intitule: "Le temps est-il un juge impartial ?",
piste1: "Le temps juge-t-il les actions et les œuvres avec une neutralité absolue, récompensant les unes et oubliant les autres ?",
piste2: "ou le temps est-il aveugle et indifférent, ne jugeant rien du tout ?",
racine1: "Le jugement du temps est-il une métaphore pour désigner la postérité et la mémoire collective ?",
racine2: "ou le temps est-il une force naturelle sans conscience ni intention morale ?",
enjeu: "Déterminer si le temps peut avoir une fonction normative ou judiciaire."
},
{
id: 1459,
notion: 'temps',
intitule: "Le temps est-il une dimension de la liberté ?",
piste1: "Le temps est-il le milieu où la liberté peut s'exercer, permettant le choix, le changement et le projet ?",
piste2: "ou le temps est-il le lieu du déterminisme, où chaque instant est la conséquence nécessaire du précédent ?",
racine1: "La liberté suppose-t-elle un avenir ouvert et un temps non déterminé ?",
racine2: "ou la liberté est-elle l'illusion que nous nous donnons pour supporter l'écoulement du temps ?",
enjeu: "Articuler les concepts de temps et de liberté."
},
{
id: 1460,
notion: 'temps',
intitule: "Le destin est-il l'avenir déjà écrit ?",
piste1: "Le destin est-il la certitude que l'avenir est déjà fixé, rendant le temps simple déroulement d'un scénario ?",
piste2: "ou le destin est-il compatible avec la liberté, étant la manière dont nous assumons un avenir que nous construisons ?",
racine1: "Le destin nie-t-il l'ouverture du temps et la contingence des événements ?",
racine2: "ou le destin est-il la nécessité interne de notre propre vie, que nous devons découvrir et accomplir ?",
enjeu: "Examiner la notion de destin et son rapport à la temporalité et à la liberté."
},
{
id: 1461,
notion: 'temps',
intitule: "Le temps est-il le lieu du changement ?",
piste1: "Le temps est-il défini par le changement, n'existant que parce que les choses se transforment ?",
piste2: "ou le temps est-il un cadre fixe dans lequel le changement se produit, mais qui lui-même ne change pas ?",
racine1: "Sans changement, y aurait-il encore du temps ?",
racine2: "ou le temps est-il la condition de possibilité du changement, lui restant extérieur ?",
enjeu: "Déterminer le rapport ontologique entre le temps et le changement."
},
{
id: 1462,
notion: 'temps',
intitule: "Le changement est-il la seule réalité du temps ?",
piste1: "Le temps n'est-il rien d'autre que la mesure du changement et du mouvement des corps ?",
piste2: "ou le temps est-il une réalité substantielle qui persiste même en l'absence de tout changement ?",
racine1: "Le temps est-il un rapport entre des états différents (Aristote) ?",
racine2: "ou le temps est-il un flux absolu qui s'écoule même si l'univers était figé (Newton) ?",
enjeu: "Confronter les conceptions relationnelle et substantielle du temps."
},
{
id: 1463,
notion: 'temps',
intitule: "Le temps est-il une illusion de la conscience ?",
piste1: "Le temps n'existe-t-il que parce que la conscience retient le passé et anticipe l'avenir, créant l'illusion de la durée ?",
piste2: "ou la conscience est-elle elle-même temporelle, découvrant un temps qui la dépasse ?",
racine1: "Le temps est-il une synthèse subjective de l'imagination (Kant, Husserl) ?",
racine2: "ou le temps est-il une structure objective du monde que la conscience se contente de refléter ?",
enjeu: "Examiner la thèse de l'idéalité du temps."
},
{
id: 1464,
notion: 'temps',
intitule: "Le temps existe-t-il sans conscience ?",
piste1: "Le temps serait-il aboli s'il n'y avait aucune conscience pour le percevoir, le mesurer ou le vivre ?",
piste2: "ou le temps est-il une propriété du monde physique, existant indépendamment de tout observateur ?",
racine1: "Le temps est-il corrélatif de la conscience, comme le suggère l'idéalisme ?",
racine2: "ou le temps est-il une dimension de la matière, antérieure et extérieure à l'esprit ?",
enjeu: "Déterminer si le temps est une réalité dépendante ou indépendante de la conscience."
},
{
id: 1465,
notion: 'temps',
intitule: "Le temps est-il une propriété de la matière ?",
piste1: "Le temps est-il inséparable de la matière et du mouvement, n'existant que comme relation entre des corps ?",
piste2: "ou le temps est-il un contenant vide, indépendant de la matière qu'il renferme ?",
racine1: "La relativité générale a-t-elle définitivement lié le temps à la matière et à la gravitation ?",
racine2: "ou peut-on concevoir un temps 'vide' ou un temps avant le Big Bang ?",
enjeu: "Examiner le lien entre le temps et la matière en physique et en métaphysique."
},
{
id: 1466,
notion: 'temps',
intitule: "Le temps est-il relatif ?",
piste1: "Le temps s'écoule-t-il différemment selon la vitesse et la gravité, n'ayant pas de rythme universel (Einstein) ?",
piste2: "ou existe-t-il un temps absolu, un 'maintenant' universel qui s'impose à tous ?",
racine1: "La relativité du temps détruit-elle l'idée d'un présent commun à tout l'univers ?",
racine2: "ou la relativité est-elle seulement une apparence due à nos limitations de mesure ?",
enjeu: "Comprendre les implications philosophiques de la relativité du temps."
},
{
id: 1467,
notion: 'temps',
intitule: "Le temps absolu existe-t-il ?",
piste1: "Existe-t-il un temps qui s'écoule uniformément, indépendamment de tout phénomène extérieur (Newton) ?",
piste2: "ou le temps absolu est-il une fiction métaphysique, tout temps étant mesuré par rapport à un mouvement ?",
racine1: "Le temps absolu est-il nécessaire pour fonder la physique et la métaphysique ?",
racine2: "ou le temps n'est-il qu'un réseau de relations entre événements ?",
enjeu: "Débattre de l'existence d'un temps absolu versus un temps relationnel."
},
{
id: 1468,
notion: 'temps',
intitule: "Le temps est-il une création divine ?",
piste1: "Le temps a-t-il été créé par Dieu en même temps que le monde, n'existant pas avant la création (Augustin) ?",
piste2: "ou le temps est-il éternel, coexistant avec Dieu de toute éternité ?",
racine1: "Le temps est-il une créature, marquée par la finitude et le changement, opposée à l'éternité divine ?",
racine2: "ou le temps est-il un attribut de la divinité, une dimension de l'être absolu ?",
enjeu: "Examiner l'origine théologique du temps et son rapport à l'éternité divine."
},
{
id: 1469,
notion: 'temps',
intitule: "Dieu est-il dans le temps ?",
piste1: "Dieu subit-il le temps, connaissant-il un passé et un avenir, ou est-il totalement hors du temps (intemporel) ?",
piste2: "ou Dieu est-il dans le temps, mais de manière différente, maîtrisant parfaitement son écoulement ?",
racine1: "L'immutabilité divine exige-t-elle que Dieu soit hors du temps ?",
racine2: "ou un Dieu hors du temps serait-il incapable d'agir dans l'histoire et de répondre aux prières ?",
enjeu: "Déterminer le rapport entre la divinité et la temporalité."
},
{
id: 1470,
notion: 'temps',
intitule: "Le temps a-t-il un commencement ?",
piste1: "Le temps a-t-il commencé à un moment donné (ex: Big Bang), ou est-il éternel, sans début ?",
piste2: "ou la question du 'avant' le commencement du temps est-elle dépourvue de sens ?",
racine1: "Le temps peut-il émerger du néant, ou suppose-t-il toujours un temps antérieur ?",
racine2: "ou le commencement du temps est-il le passage du potentiel à l'acte, sans 'avant' temporel ?",
enjeu: "Examiner la question de l'origine du temps et ses limites conceptuelles."
},
{
id: 1471,
notion: 'temps',
intitule: "Le temps aura-t-il une fin ?",
piste1: "Le temps s'arrêtera-t-il un jour (fin de l'univers, eschatologie), ou est-il infiniment prolongé ?",
piste2: "ou la fin du temps est-elle une contradiction, la 'fin' étant elle-même un événement temporel ?",
racine1: "La fin du temps est-elle une nécessité physique (mort thermique) ou un espoir métaphysique ?",
racine2: "ou le temps est-il une structure indépassable de toute réalité possible ?",
enjeu: "Interroger la finitude ou l'infinité du temps dans son ensemble."
},
{
id: 1472,
notion: 'temps',
intitule: "Le temps est-il circulaire ?",
piste1: "Le temps revient-il éternellement sur lui-même, les mêmes événements se reproduisant à l'identique (Nietzsche) ?",
piste2: "ou le temps est-il une ligne droite, allant d'un commencement unique vers une fin unique ?",
racine1: "Le retour éternel est-il une vision cosmologique ou un test existentiel de l'affirmation de la vie ?",
racine2: "ou le temps linéaire est-il la seule façon de penser l'histoire et la responsabilité ?",
enjeu: "Confronter les modèles cyclique et linéaire du temps."
},
{
id: 1473,
notion: 'temps',
intitule: "Le temps est-il linéaire ?",
piste1: "Le temps avance-t-il de manière irréversible d'un point A vers un point B, créant de la nouveauté et de l'histoire ?",
piste2: "ou la linéarité est-elle une illusion, le temps étant fondamentalement cyclique ou chaotique ?",
racine1: "Le temps linéaire est-il une invention judéo-chrétienne et moderne, étrangère à la nature ?",
racine2: "ou le temps linéaire est-il la structure même de la causalité et de l'action humaine ?",
enjeu: "Examiner la validité et l'origine du modèle linéaire du temps."
},
{
id: 1474,
notion: 'temps',
intitule: "Le temps est-il une flèche ?",
piste1: "Le temps a-t-il une direction unique et irréversible, comme une flèche qui ne peut revenir en arrière ?",
piste2: "ou la 'flèche du temps' n'est-elle qu'une illusion macroscopique, les lois fondamentales étant réversibles ?",
racine1: "L'irréversibilité est-elle la marque distinctive du temps par rapport à l'espace ?",
racine2: "ou la flèche du temps est-elle seulement une conséquence de l'entropie et de la perspective humaine ?",
enjeu: "Déterminer si la directionnalité est une propriété essentielle du temps."
},
{
id: 1475,
notion: 'temps',
intitule: "Le temps est-il une spirale ?",
piste1: "Le temps combine-t-il la répétition (cycles) et la progression (linéarité), avançant en spirale ?",
piste2: "ou ce modèle est-il une tentative de conciliation artificielle entre deux conceptions incompatibles ?",
racine1: "L'histoire et la nature montrent-elles des retours similaires mais jamais identiques (spirale) ?",
racine2: "ou le temps est-il soit cyclique, soit linéaire, sans troisième voie ?",
enjeu: "Évaluer le modèle spiralé comme synthèse des conceptions du temps."
},
{
id: 1476,
notion: 'temps',
intitule: "Le temps est-il une mesure du mouvement ?",
piste1: "Le temps n'est-il défini que par le changement de position des corps (Aristote) ?",
piste2: "ou le temps est-il une réalité indépendante, dont le mouvement n'est qu'une manifestation ?",
racine1: "Sans mouvement, y aurait-il encore du temps ?",
racine2: "ou le temps est-il le cadre dans lequel le mouvement devient possible et mesurable ?",
enjeu: "Examiner la définition aristotélicienne du temps et ses limites."
},
{
id: 1477,
notion: 'temps',
intitule: "Le mouvement est-il une mesure du temps ?",
piste1: "Utilisons-nous le mouvement régulier (rotation de la Terre, oscillation d'un pendule) pour mesurer le temps ?",
piste2: "ou le temps est-il la mesure qui permet de quantifier le mouvement ?",
racine1: "Le temps et le mouvement sont-ils mutuellement définis l'un par l'autre ?",
racine2: "ou cette circularité montre-t-elle qu'il faut une troisième référence pour les mesurer ?",
enjeu: "Clarifier la relation de mesure entre le temps et le mouvement."
},
{
id: 1478,
notion: 'temps',
intitule: "Le temps est-il une dimension de l'être ?",
piste1: "L'être est-il intrinsèquement temporel, n'existant que dans le devenir et la durée ?",
piste2: "ou l'être véritable est-il intemporel, le temps n'étant qu'une apparence ou un mode dégradé de l'être ?",
racine1: "L'être et le temps sont-ils indissociables (Heidegger) ?",
racine2: "ou l'être est-il éternel, et le temps est-il le lieu de la corruption et du non-être ?",
enjeu: "Déterminer le rapport ontologique fondamental entre l'être et le temps."
},
{
id: 1479,
notion: 'temps',
intitule: "L'être est-il temporel ?",
piste1: "Tout ce qui est, est-il nécessairement dans le temps, soumis au changement et à la finitude ?",
piste2: "ou peut-il y avoir des êtres intemporels (nombres, idées, Dieu) ?",
racine1: "La temporalité est-elle la condition de l'existence de tout étant ?",
racine2: "ou la temporalité n'est-elle qu'une propriété des êtres contingents et matériels ?",
enjeu: "Examiner la portée universelle de la temporalité."
},
{
id: 1480,
notion: 'temps',
intitule: "L'homme est-il un être-pour-la-mort ?",
piste1: "La conscience de la mort définit-elle l'existence humaine comme un temps limité et un projet vers la fin ?",
piste2: "ou l'homme peut-il vivre comme s'il était éternel, refoulant la finitude ?",
racine1: "L'authenticité de l'existence suppose-t-elle l'assomption de la finitude temporelle (Heidegger) ?",
racine2: "ou la vie bonne consiste-t-elle à oublier la mort pour se concentrer sur le présent ?",
enjeu: "Examiner le rôle de la mortalité dans la structure temporelle de l'existence humaine."
},
{
id: 1481,
notion: 'temps',
intitule: "Le temps est-il une aliénation ?",
piste1: "Le temps, en nous éloignant de notre origine et en nous menant à la mort, est-il une perte de soi ?",
piste2: "ou le temps est-il le milieu de la réalisation de soi, de l'apprentissage et de la création ?",
racine1: "Le temps est-il la source de l'étrangeté de l'homme à lui-même (chute, exil) ?",
racine2: "ou le temps est-il la condition de l'humanisation et de la culture ?",
enjeu: "Déterminer si le temps est un facteur d'aliénation ou d'accomplissement."
},
{
id: 1482,
notion: 'temps',
intitule: "Le temps est-il une libération ?",
piste1: "Le temps permet-il de se défaire des déterminismes, d'oublier les souffrances et de changer de vie ?",
piste2: "ou le temps est-il le lieu de l'enfermement dans l'habitude, la routine et la fatalité ?",
racine1: "Le temps est-il un espace de liberté où la nouveauté peut surgir ?",
racine2: "ou le temps est-il une prison qui nous empêche d'échapper à notre passé ?",
enjeu: "Examiner la capacité du temps à libérer ou à enfermer le sujet."
},
{
id: 1483,
notion: 'temps',
intitule: "Le temps est-il une construction sociale ?",
piste1: "Nos rythmes, nos calendriers et notre rapport au temps sont-ils entièrement produits par la société et la culture ?",
piste2: "ou la société ne fait-elle qu'organiser un temps naturel et biologique préexistant ?",
racine1: "Le temps est-il un fait social total, variant radicalement d'une culture à l'autre (Mauss, Durkheim) ?",
racine2: "ou existe-t-il un temps universel, fondé sur la nature humaine et cosmique ?",
enjeu: "Déterminer la part de la construction sociale dans notre expérience du temps."
},
{
id: 1484,
notion: 'temps',
intitule: "Le temps est-il une donnée biologique ?",
piste1: "Le temps est-il d'abord rythmé par nos horloges internes, notre vieillissement et nos cycles biologiques ?",
piste2: "ou la conscience humaine s'est-elle arrachée au temps biologique pour créer un temps culturel et historique ?",
racine1: "Le temps vécu est-il réductible aux rythmes circadiens et à la mortalité biologique ?",
racine2: "ou le temps humain est-il caractérisé par sa capacité à s'affranchir des rythmes naturels ?",
enjeu: "Examiner le fondement biologique de la temporalité humaine."
},
{
id: 1485,
notion: 'temps',
intitule: "Le temps est-il une expérience esthétique ?",
piste1: "L'art (musique, cinéma, littérature) a-t-il pour fonction de modeler, de suspendre ou de révéler le temps ?",
piste2: "ou l'art est-il intemporel, nous arrachant précisément à l'expérience du temps ?",
racine1: "L'œuvre d'art est-elle une machine à explorer le temps, créant des durées spécifiques ?",
racine2: "ou l'art vise-t-il l'éternité, cherchant à échapper à la fuite du temps ?",
enjeu: "Déterminer le rapport entre l'expérience esthétique et la temporalité."
},
{
id: 1486,
notion: 'temps',
intitule: "L'art peut-il vaincre le temps ?",
piste1: "L'œuvre d'art est-elle un moyen d'immortaliser le présent, de défier l'oubli et la mort ?",
piste2: "ou l'art est-il lui-même soumis au temps, se dégradant et devenant incompréhensible ?",
racine1: "L'art est-il une victoire sur le temps, fixant la beauté dans la permanence ?",
racine2: "ou l'art n'est-il qu'un sursis, une tentative désespérée et finalement vaine contre l'écoulement du temps ?",
enjeu: "Examiner la prétention de l'art à l'immortalité et ses limites."
},
{
id: 1487,
notion: 'temps',
intitule: "L'œuvre d'art est-elle intemporelle ?",
piste1: "Les grandes œuvres transcendent-elles leur époque pour parler à tous les temps, possédant une valeur éternelle ?",
piste2: "ou chaque époque réinterprète-t-elle l'œuvre, qui n'a donc pas de sens 'intemporel' en soi ?",
racine1: "L'intemporalité de l'art est-elle une propriété de l'œuvre ou un effet de sa réception continue ?",
racine2: "ou l'œuvre est-elle radicalement historique, ne pouvant être comprise que dans son contexte ?",
enjeu: "Débattre de l'intemporalité supposée des classiques et des œuvres d'art."
},
{
id: 1488,
notion: 'temps',
intitule: "Le temps est-il une question métaphysique ?",
piste1: "Le temps est-il l'un des problèmes les plus profonds de la métaphysique, touchant à l'être, à Dieu et à l'éternité ?",
piste2: "ou le temps est-il un problème purement physique ou psychologique, sans portée métaphysique ?",
racine1: "Comprendre le temps, est-ce comprendre la structure ultime de la réalité ?",
racine2: "ou la métaphysique du temps est-elle une illusion, le temps n'étant qu'un concept utile ?",
enjeu: "Déterminer la place du temps dans la hiérarchie des questions philosophiques."
},
{
id: 1489,
notion: 'temps',
intitule: "Le temps est-il une question physique ?",
piste1: "Le temps est-il un objet d'étude réservé à la physique, qui seule peut en décrire la nature réelle (relativité, thermodynamique) ?",
piste2: "ou la physique ne décrit-elle qu'un aspect du temps, laissant sa nature profonde à la philosophie ?",
racine1: "La physique a-t-elle résolu le problème du temps en le réduisant à des équations ?",
racine2: "ou la physique présuppose-t-elle le temps sans pouvoir l'expliquer ?",
enjeu: "Examiner les prétentions de la physique à définir le temps."
},
{
id: 1490,
notion: 'temps',
intitule: "Le temps est-il une question psychologique ?",
piste1: "Le temps n'est-il qu'une forme de l'intuition interne, une manière dont l'esprit organise ses représentations ?",
piste2: "ou le temps est-il une réalité objective que la psychologie ne fait que percevoir de manière déformée ?",
racine1: "Le temps est-il une construction de la mémoire et de l'attente (psychologie) ?",
racine2: "ou le temps psychologique est-il secondaire par rapport au temps cosmique ?",
enjeu: "Déterminer le rôle de la psychologie dans la compréhension du temps."
},
{
id: 1491,
notion: 'temps',
intitule: "Le temps est-il une question politique ?",
piste1: "Le contrôle du temps (calendriers, horaires, rythmes de travail) est-il un instrument de pouvoir et de domination ?",
piste2: "ou le temps est-il un bien commun, neutre, que la politique doit seulement organiser équitablement ?",
racine1: "L'aliénation temporelle est-elle une forme fondamentale de l'exploitation capitaliste ?",
racine2: "ou la maîtrise politique du temps est-elle une condition de la liberté collective ?",
enjeu: "Examiner la dimension politique et de pouvoir du temps."
},
{
id: 1492,
notion: 'temps',
intitule: "Le temps est-il une question éthique ?",
piste1: "Notre rapport au temps (patience, promesse, responsabilité envers l'avenir) est-il au cœur de la morale ?",
piste2: "ou l'éthique est-elle intemporelle, concernant des devoirs qui valent en tout temps ?",
racine1: "La responsabilité implique-t-elle une projection dans l'avenir et une fidélité au passé ?",
racine2: "ou l'éthique se joue-t-elle uniquement dans l'instant de la décision, hors du temps ?",
enjeu: "Déterminer la dimension temporelle de l'obligation et de l'action morales."
},
{
id: 1493,
notion: 'temps',
intitule: "Le temps est-il une question existentielle ?",
piste1: "Le temps est-il la matière même de notre existence, ce qui nous angoisse et nous définit comme mortels ?",
piste2: "ou l'existence est-elle une essence intemporelle, le temps n'étant qu'un accident ?",
racine1: "L'existence est-elle un projet temporel, une tension entre le passé (facticité) et l'avenir (transcendance) ?",
racine2: "ou l'existence est-elle une présence à soi immédiate, hors du temps ?",
enjeu: "Examiner le temps comme structure fondamentale de l'existence humaine."
},
{
id: 1494,
notion: 'temps',
intitule: "Le temps peut-il se définir ?",
piste1: "Peut-on donner une définition du temps qui ne soit pas circulaire (le temps est ce qui passe) ou spatialisante ?",
piste2: "ou le temps est-il un concept primitif, indéfinissable mais intuitivement évident ?",
racine1: "Toute définition du temps ne présuppose-t-elle pas déjà le temps qu'elle veut définir (Augustin) ?",
racine2: "ou la science et la philosophie peuvent-elles saisir l'essence du temps sans cercle vicieux ?",
enjeu: "Interroger la possibilité et les limites d'une définition du temps."
},
{
id: 1495,
notion: 'temps',
intitule: "Le temps est-il un concept vide ?",
piste1: "Le temps n'est-il qu'un mot que nous utilisons par habitude, sans qu'il corresponde à une réalité ou une propriété cohérente ?",
piste2: "ou le temps est-il le concept le plus riche et le plus fondamental, condition de tous les autres ?",
racine1: "Le temps est-il une illusion linguistique, une catégorie vide de contenu ?",
racine2: "ou le temps est-il la condition de possibilité de toute expérience et de tout concept ?",
enjeu: "Examiner la consistance et la nécessité du concept de temps."
},
{
id: 1496,
notion: 'temps',
intitule: "Le temps est-il le fondement de toute expérience ?",
piste1: "Toute expérience, qu'elle soit sensible, intellectuelle ou morale, est-elle nécessairement temporelle ?",
piste2: "ou existe-t-il des expériences intemporelles (extase, intuition intellectuelle, contemplation) ?",
racine1: "Le temps est-il la forme a priori de tous les phénomènes (Kant) ?",
racine2: "ou l'expérience mystique ou esthétique nous arrache-t-elle au temps ?",
enjeu: "Déterminer si le temps est la condition absolue de toute expérience possible."
},
{
id: 1497,
notion: 'temps',
intitule: "Le temps est-il la condition de la possibilité du changement ?",
piste1: "Le changement ne peut-il se concevoir que dans et par le temps, qui en est le milieu nécessaire ?",
piste2: "ou le temps est-il lui-même un changement, rendant cette définition circulaire ?",
racine1: "Le temps est-il le cadre vide où se produisent les changements ?",
racine2: "ou le temps est-il le changement lui-même, la mesure du mouvement ?",
enjeu: "Clarifier le rapport de conditionnalité entre le temps et le changement."
},
{
id: 1498,
notion: 'temps',
intitule: "Le temps est-il la condition de la possibilité de l'existence ?",
piste1: "Exister, est-ce nécessairement durer, être inscrit dans le temps et être soumis à la finitude ?",
piste2: "ou peut-on concevoir une existence intemporelle, éternelle et immuable ?",
racine1: "L'existence est-elle synonyme de temporalité et de devenir ?",
racine2: "ou l'existence véritable est-elle celle qui échappe au temps (l'éternité) ?",
enjeu: "Déterminer si l'existence est intrinsèquement liée à la condition temporelle."
},
{
id: 1499,
notion: 'temps',
intitule: "Le temps est-il une énigme insoluble ?",
piste1: "Le temps résiste-t-il fondamentalement à toute compréhension, restant le mystère ultime de la philosophie et de la science ?",
piste2: "ou le temps est-il un phénomène que nous avons appris à maîtriser conceptuellement et pratiquement ?",
racine1: "Le temps est-il l'objet d'un savoir impossible, comme le suggérait Augustin ?",
racine2: "ou le progrès des sciences et de la phénoménologie a-t-il dissipé l'énigme du temps ?",
enjeu: "Évaluer le degré de compréhensibilité du temps."
},
{
id: 1500,
notion: 'temps',
intitule: "Peut-on vivre sans le temps ?",
piste1: "Une vie sans temps (sans passé, sans avenir, sans changement) est-elle concevable, ou même souhaitable ?",
piste2: "ou le temps est-il la condition sine qua non de la vie, de la conscience et de l'action ?",
racine1: "L'intemporalité est-elle un idéal de paix et de plénitude, ou une forme de mort et de néant ?",
racine2: "ou la vie est-elle par essence temporalité, et vouloir vivre sans temps est-il une contradiction ?",
enjeu: "Interroger la nécessité absolue du temps pour l'existence et la vie humaine."
},
{
id: 1501,
notion: 'travail',
intitule: "Qu'est-ce que le travail ?",
piste1: "Le travail se définit-il par la transformation de la nature en vue de la satisfaction des besoins ?",
piste2: "ou est-il d'abord une activité qui transforme l'homme lui-même et le rapport qu'il entretient avec le monde ?",
racine1: "Le travail est-il une réponse à une nécessité biologique de survie ?",
racine2: "ou est-il une activité spécifiquement humaine, distincte de l'instinct animal ?",
enjeu: "Établir une définition philosophique du travail au-delà du sens économique ou commun."
},
{
id: 1502,
notion: 'travail',
intitule: "Le travail est-il une contrainte ?",
piste1: "Le travail est-il une peine imposée par la nécessité de vivre (etymologie : tripalium) ?",
piste2: "ou peut-il être une activité choisie et source de satisfaction ?",
racine1: "Le travail est-il par essence une soumission à la nécessité extérieure ?",
racine2: "ou la contrainte du travail est-elle la condition de toute liberté réelle ?",
enjeu: "Examiner le caractère pénible ou libérateur du travail."
},
{
id: 1503,
notion: 'travail',
intitule: "Le travail est-il une libération ?",
piste1: "Le travail permet-il à l'homme de s'arracher à la dépendance immédiate envers la nature ?",
piste2: "ou enferme-t-il l'homme dans une nouvelle dépendance, sociale et économique ?",
racine1: "Le travail est-il le moyen par lequel l'homme conquiert son autonomie ?",
racine2: "ou le travail est-il une aliénation qui dépossède l'homme de lui-même ?",
enjeu: "Déterminer si le travail émancipe ou asservit."
},
{
id: 1504,
notion: 'travail',
intitule: "Le travail est-il propre à l'homme ?",
piste1: "Seul l'être humain travaille-t-il, transformant la nature de manière consciente et projetée ?",
piste2: "ou certains animaux utilisent-ils des outils et modifient-ils leur environnement, travaillant ainsi ?",
racine1: "Le travail suppose-t-il la conscience d'une fin à atteindre et la fabrication de moyens ?",
racine2: "ou l'activité animale est-elle une forme de travail naturel ?",
enjeu: "Déterminer la spécificité anthropologique du travail."
},
{
id: 1505,
notion: 'travail',
intitule: "Le travail transforme-t-il la nature ?",
piste1: "Le travail est-il l'activité par laquelle l'homme plie la nature à ses besoins ?",
piste2: "ou le travail est-il une collaboration avec la nature, dont il suit les lois ?",
racine1: "Le travail est-il une domination et une violence faite à la nature ?",
racine2: "ou le travail est-il l'art de cultiver et de révéler les potentialités de la nature ?",
enjeu: "Examiner le rapport entre travail et nature."
},
{
id: 1506,
notion: 'travail',
intitule: "Le travail transforme-t-il l'homme ?",
piste1: "En transformant le monde, l'homme se transforme-t-il lui-même et développe-t-il ses facultés ?",
piste2: "ou le travail dégrade-t-il l'homme en le réduisant à une fonction mécanique ?",
racine1: "Le travail est-il un processus d'hominisation et d'éducation ?",
racine2: "ou le travail est-il une usure du corps et de l'esprit ?",
enjeu: "Déterminer l'impact du travail sur la formation du sujet."
},
{
id: 1507,
notion: 'travail',
intitule: "Le travail a-t-il une valeur en soi ?",
piste1: "Le travail est-il une activité digne et noble, indépendamment de son résultat ?",
piste2: "ou n'a-t-il de valeur que par ce qu'il permet d'obtenir (salaire, biens) ?",
racine1: "Le travail est-il une fin en soi, expression de la créativité humaine ?",
racine2: "ou le travail est-il uniquement un moyen, une activité instrumentale ?",
enjeu: "Déterminer si le travail a une valeur intrinsèque ou seulement extrinsèque."
},
{
id: 1508,
notion: 'travail',
intitule: "Le travail est-il une marchandise ?",
piste1: "La force de travail peut-elle être achetée et vendue comme n'importe quelle autre marchandise ?",
piste2: "ou le travail est-il inaliénable, car il engage la personne même du travailleur ?",
racine1: "Le travail est-il réductible à sa valeur d'échange sur le marché ?",
racine2: "ou le travail conserve-t-il une dignité qui résiste à la marchandisation ?",
enjeu: "Examiner la réduction du travail à une catégorie économique."
},
{
id: 1509,
notion: 'travail',
intitule: "Le travail est-il une aliénation ?",
piste1: "Le travailleur est-il dépossédé du fruit de son travail et de l'acte même de travailler ?",
piste2: "ou le travail est-il au contraire le lieu où l'homme s'objective et se reconnaît ?",
racine1: "Le travail salarié transforme-t-il l'activité vitale en un simple moyen de survie (Marx) ?",
racine2: "ou le travail est-il la condition de la reconnaissance de soi par autrui (Hegel) ?",
enjeu: "Évaluer la thèse marxiste de l'aliénation au travail."
},
{
id: 1510,
notion: 'travail',
intitule: "Le travail est-il une reconnaissance ?",
piste1: "Le travail permet-il d'être reconnu par les autres comme un membre utile de la société ?",
piste2: "ou le travail est-il une activité solitaire qui laisse indifférent le regard d'autrui ?",
racine1: "Le travail est-il une demande de reconnaissance adressée à la communauté ?",
racine2: "ou la reconnaissance au travail est-elle une illusion masquant l'exploitation ?",
enjeu: "Examiner le rôle du travail dans la construction de l'identité sociale et la reconnaissance."
},
{
id: 1511,
notion: 'travail',
intitule: "Le travail est-il une nécessité ?",
piste1: "Le travail est-il imposé par la finitude humaine et la nécessité de subvenir à ses besoins ?",
piste2: "ou l'homme pourrait-il, dans une société d'abondance, se passer de travailler ?",
racine1: "Le travail est-il une condition ontologique de l'existence humaine ?",
racine2: "ou le travail est-il une contrainte historique qui pourrait être abolie ?",
enjeu: "Déterminer le caractère contingent ou nécessaire du travail."
},
{
id: 1512,
notion: 'travail',
intitule: "Le travail est-il une punition ?",
piste1: "Le travail est-il une malédiction, une punition pour une faute originelle (mythe biblique) ?",
piste2: "ou le travail est-il une bénédiction, une participation à l'œuvre de création ?",
racine1: "Le travail est-il associé à la souffrance et à la sueur du front ?",
racine2: "ou le travail est-il une dignité, ce qui distingue l'homme de l'animal oisif ?",
enjeu: "Examiner les représentations religieuses et mythiques du travail."
},
{
id: 1513,
notion: 'travail',
intitule: "Le travail est-il un devoir ?",
piste1: "Avons-nous un devoir moral de travailler et de contribuer à l'effort commun ?",
piste2: "ou le travail est-il un droit que l'on peut choisir d'exercer ou non ?",
racine1: "L'oisiveté est-elle une faute morale ou une liberté légitime ?",
racine2: "ou le travail est-il une obligation sociale avant d'être un choix personnel ?",
enjeu: "Déterminer le statut moral du travail : droit ou devoir."
},
{
id: 1514,
notion: 'travail',
intitule: "Le travail est-il un droit ?",
piste1: "Le droit au travail est-il une condition fondamentale de la dignité et de l'autonomie ?",
piste2: "ou le travail est-il une charge que l'État ne peut garantir à tous ?",
racine1: "Le droit au travail est-il la condition de l'exercice de tous les autres droits ?",
racine2: "ou le droit au travail est-il une utopie dans une économie de marché ?",
enjeu: "Examiner la notion de droit au travail dans l'État social."
},
{
id: 1515,
notion: 'travail',
intitule: "Le travail est-il une fin ou un moyen ?",
piste1: "Le travail est-il un moyen pour obtenir autre chose (argent, loisirs, statut) ?",
piste2: "ou le travail peut-il être sa propre fin, une activité réalisée pour elle-même ?",
racine1: "Le travail est-il toujours instrumental, subordonné à la consommation ?",
racine2: "ou le travail peut-il être une fin en soi, source d'accomplissement ?",
enjeu: "Déterminer la finalité du travail."
},
{
id: 1516,
notion: 'travail',
intitule: "Le travail est-il compatible avec le bonheur ?",
piste1: "Le travail peut-il être une source d'épanouissement et de bonheur ?",
piste2: "ou le bonheur se trouve-t-il uniquement dans le temps libre, en dehors du travail ?",
racine1: "Le travail est-il une condition du bonheur par la réalisation de soi ?",
racine2: "ou le travail est-il par nature une contrainte qui s'oppose au bonheur ?",
enjeu: "Examiner le rapport entre travail et bonheur."
},
{
id: 1517,
notion: 'travail',
intitule: "Le travail est-il compatible avec la liberté ?",
piste1: "Le travail est-il l'activité par laquelle l'homme exerce sa liberté en transformant le monde ?",
piste2: "ou le travail, surtout salarié, est-il une soumission à la volonté d'autrui ?",
racine1: "Le travail est-il l'actualisation de la liberté humaine ?",
racine2: "ou le travail est-il une hétéronomie, une obéissance à des règles extérieures ?",
enjeu: "Déterminer si le travail est une expression ou une négation de la liberté."
},
{
id: 1518,
notion: 'travail',
intitule: "Le travail est-il l'opposé du loisir ?",
piste1: "Le travail et le loisir sont-ils deux sphères étanches et opposées ?",
piste2: "ou le loisir n'est-il que le temps nécessaire à la récupération pour le travail ?",
racine1: "Le loisir (schole) est-il le temps de la liberté et de la culture, opposé au travail ?",
racine2: "ou le travail et le loisir sont-ils de plus en plus imbriqués dans la société contemporaine ?",
enjeu: "Distinguer ou articuler travail et loisir."
},
{
id: 1519,
notion: 'travail',
intitule: "Le travail est-il compatible avec l'art ?",
piste1: "L'artiste travaille-t-il, ou son activité échappe-t-elle à la catégorie du travail ?",
piste2: "ou tout travail bien fait contient-il une dimension artistique ?",
racine1: "L'art est-il une activité libre, tandis que le travail est une activité nécessaire ?",
racine2: "ou la distinction entre travail et art est-elle une construction historique récente ?",
enjeu: "Examiner la frontière entre travail et création artistique."
},
{
id: 1520,
notion: 'travail',
intitule: "Le travail est-il compatible avec la pensée ?",
piste1: "Le travail manuel et répétitif empêche-t-il l'exercice de la pensée et de la réflexion ?",
piste2: "ou le travail est-il au contraire une occasion de penser et de résoudre des problèmes ?",
racine1: "Le travail aliène-t-il l'esprit en le soumettant à la répétition gestuelle ?",
racine2: "ou le travail est-il une forme d'intelligence pratique (phronesis) ?",
enjeu: "Déterminer le rapport entre activité laborieuse et vie de l'esprit."
},
{
id: 1521,
notion: 'travail',
intitule: "La division du travail est-elle bénéfique ?",
piste1: "La division du travail augmente-t-elle l'efficacité et la richesse de la société ?",
piste2: "ou appauvrit-elle l'activité de chaque travailleur en la réduisant à une tâche parcellaire ?",
racine1: "La division du travail est-elle la condition du progrès économique et de la coopération ?",
racine2: "ou la division du travail est-elle la source de l'abrutissement et de l'aliénation (Smith vs Marx) ?",
enjeu: "Évaluer les conséquences humaines et économiques de la division du travail."
},
{
id: 1522,
notion: 'travail',
intitule: "La division du travail est-elle aliénante ?",
piste1: "La parcellisation des tâches prive-t-elle le travailleur du sens global de son activité ?",
piste2: "ou la spécialisation permet-elle au contraire une maîtrise et une expertise valorisantes ?",
racine1: "L'ouvrier devient-il une partie de la machine, perdant son humanité ?",
racine2: "ou la spécialisation est-elle une condition de l'excellence et de la reconnaissance ?",
enjeu: "Examiner l'impact de la division du travail sur la conscience du travailleur."
},
{
id: 1523,
notion: 'travail',
intitule: "Le travail manuel est-il inférieur au travail intellectuel ?",
piste1: "Le travail de la pensée est-il plus noble et plus libre que le travail du corps ?",
piste2: "ou cette hiérarchie est-elle un préjugé social qui méprise l'habileté manuelle ?",
racine1: "L'esprit est-il supérieur au corps, et donc le travail intellectuel au travail manuel ?",
racine2: "ou le travail manuel est-il la condition de possibilité de toute vie intellectuelle ?",
enjeu: "Déconstruire la hiérarchie traditionnelle entre travail manuel et intellectuel."
},
{
id: 1524,
notion: 'travail',
intitule: "Le travail intellectuel est-il un vrai travail ?",
piste1: "Le travail intellectuel implique-t-il un effort, une contrainte et une transformation du réel ?",
piste2: "ou est-il une activité trop libre et immatérielle pour être qualifiée de travail ?",
racine1: "Le travail se définit-il par la fatigue physique et la production matérielle ?",
racine2: "ou la production d'idées et de savoirs est-elle une forme de travail à part entière ?",
enjeu: "Déterminer si la catégorie de travail s'applique aux activités immatérielles."
},
{
id: 1525,
notion: 'travail',
intitule: "Le travail est-il la mesure de la valeur ?",
piste1: "La valeur d'un bien est-elle déterminée par la quantité de travail nécessaire à sa production ?",
piste2: "ou la valeur dépend-elle de l'utilité et de la rareté, indépendamment du travail ?",
racine1: "Le travail est-il la substance de toute valeur économique (théorie de la valeur-travail) ?",
racine2: "ou le travail n'est-il qu'un coût parmi d'autres dans la formation des prix ?",
enjeu: "Examiner le rôle du travail dans la détermination de la valeur économique."
},
{
id: 1526,
notion: 'travail',
intitule: "Le travail est-il la source de la propriété ?",
piste1: "En mélangeant son travail à la nature, l'homme en devient-il légitimement propriétaire (Locke) ?",
piste2: "ou la propriété est-elle une convention sociale qui peut exclure ceux qui travaillent ?",
racine1: "Le travail est-il le fondement naturel et moral du droit de propriété ?",
racine2: "ou le travailleur est-il souvent exproprié du fruit de son travail ?",
enjeu: "Déterminer le lien entre travail et propriété."
},
{
id: 1527,
notion: 'travail',
intitule: "Le travail est-il une expression de soi ?",
piste1: "Le travail permet-il à l'individu de manifester ses talents et sa personnalité ?",
piste2: "ou le travail standardisé étouffe-t-il toute singularité ?",
racine1: "Le travail est-il un lieu d'accomplissement personnel et d'identité ?",
racine2: "ou le travail est-il une fonction anonyme que l'on occupe temporairement ?",
enjeu: "Examiner la capacité du travail à être un vecteur d'individualisation."
},
{
id: 1528,
notion: 'travail',
intitule: "Le travail est-il une soumission à la nécessité ?",
piste1: "Le travail est-il la réponse inévitable aux besoins biologiques de survie ?",
piste2: "ou le travail est-il une activité par laquelle l'homme s'affranchit de la nécessité ?",
racine1: "Le travail est-il le règne de la nécessité, opposé au règne de la liberté ?",
racine2: "ou le travail est-il la maîtrise de la nécessité par la technique et l'organisation ?",
enjeu: "Déterminer le rapport entre travail et nécessité."
},
{
id: 1529,
notion: 'travail',
intitule: "Le travail est-il une domination de la nature ?",
piste1: "Le travail est-il une conquête et une exploitation sans limite des ressources naturelles ?",
piste2: "ou le travail est-il une gestion raisonnée et respectueuse de l'environnement ?",
racine1: "Le travail est-il l'instrument de la toute-puissance humaine sur la nature ?",
racine2: "ou le travail est-il une interaction qui doit respecter les équilibres naturels ?",
enjeu: "Examiner la dimension écologique et destructive du travail."
},
{
id: 1530,
notion: 'travail',
intitule: "Le travail est-il une collaboration avec la nature ?",
piste1: "Le travail consiste-t-il à aider la nature à produire ce qu'elle ne peut produire seule ?",
piste2: "ou le travail est-il une rupture avec l'ordre naturel ?",
racine1: "Le travail est-il un prolongement des processus naturels (agriculture, élevage) ?",
racine2: "ou le travail est-il une artificialisation du monde qui s'oppose à la nature ?",
enjeu: "Déterminer si le travail s'inscrit dans la continuité ou la rupture avec la nature."
},
{
id: 1531,
notion: 'travail',
intitule: "Le travail est-il une activité créatrice ?",
piste1: "Le travail est-il une production de nouveauté, une invention de formes et d'objets ?",
piste2: "ou le travail est-il une simple reproduction de tâches déjà existantes ?",
racine1: "Le travail est-il une imitation de la création divine ou naturelle ?",
racine2: "ou le travail est-il une création ex nihilo, propre à l'homme ?",
enjeu: "Examiner la dimension créatrice du travail."
},
{
id: 1532,
notion: 'travail',
intitule: "Le travail est-il une répétition ?",
piste1: "Le travail est-il caractérisé par la cyclicité et la répétition des mêmes gestes ?",
piste2: "ou le travail est-il un processus linéaire qui produit du nouveau et de l'irréversible ?",
racine1: "Le travail est-il condamné à la répétition pour satisfaire des besoins qui renaissent sans cesse ?",
racine2: "ou le travail est-il un progrès qui s'accumule et transforme durablement le monde ?",
enjeu: "Déterminer la structure temporelle du travail : cycle ou progrès."
},
{
id: 1533,
notion: 'travail',
intitule: "Le travail est-il une épreuve ?",
piste1: "Le travail est-il une souffrance et une fatigue qu'il faut endurer ?",
piste2: "ou le travail est-il une épreuve formatrice qui renforce et construit l'individu ?",
racine1: "Le travail est-il une punition ou une contrainte subie ?",
racine2: "ou le travail est-il une ascèse qui permet de se dépasser soi-même ?",
enjeu: "Examiner la dimension douloureuse ou formatrice du travail."
},
{
id: 1534,
notion: 'travail',
intitule: "Le travail est-il une éducation ?",
piste1: "Le travail apprend-il la discipline, la patience et le sens des réalités ?",
piste2: "ou le travail déforme-t-il l'esprit en l'habituant à la soumission et à la routine ?",
racine1: "Le travail est-il le meilleur maître pour former le caractère ?",
racine2: "ou l'éducation doit-elle protéger l'enfant de la précocité du travail ?",
enjeu: "Déterminer la valeur éducative du travail."
},
{
id: 1535,
notion: 'travail',
intitule: "Le travail est-il une socialisation ?",
piste1: "Le travail est-il le lieu principal où l'on apprend à vivre avec les autres et à coopérer ?",
piste2: "ou le travail est-il un lieu de compétition et d'individualisme ?",
racine1: "Le travail est-il le ciment de la société et le lieu de l'intégration sociale ?",
racine2: "ou le travail est-il une source de division et de conflits de classes ?",
enjeu: "Examiner le rôle du travail dans la construction du lien social."
},
{
id: 1536,
notion: 'travail',
intitule: "Le travail est-il une source de liens sociaux ?",
piste1: "Le travail crée-t-il des solidarités et des amitiés durables ?",
piste2: "ou le travail est-il une activité solitaire qui isole les individus ?",
racine1: "Le travail est-il une activité collective qui unit les hommes ?",
racine2: "ou le travail moderne est-il une fragmentation des tâches qui empêche le lien ?",
enjeu: "Déterminer la capacité du travail à créer du lien."
},
{
id: 1537,
notion: 'travail',
intitule: "Le travail est-il une source de conflits ?",
piste1: "Le travail est-il le lieu de luttes pour la répartition des richesses et du pouvoir ?",
piste2: "ou le travail est-il une coopération harmonieuse où chacun trouve sa place ?",
racine1: "Le conflit social est-il inhérent à la relation de travail (capital/travail) ?",
racine2: "ou le conflit est-il un dysfonctionnement que l'on peut éliminer ?",
enjeu: "Examiner la dimension conflictuelle du travail."
},
{
id: 1538,
notion: 'travail',
intitule: "Le travail est-il une affaire privée ?",
piste1: "Le choix du travail et les conditions de travail relèvent-ils de la sphère privée de l'individu ?",
piste2: "ou le travail est-il une affaire publique qui concerne toute la société ?",
racine1: "Le contrat de travail est-il un accord purement privé entre deux parties ?",
racine2: "ou le travail est-il un fait social total qui engage la collectivité ?",
enjeu: "Déterminer la frontière entre sphère privée et sphère publique dans le travail."
},
{
id: 1539,
notion: 'travail',
intitule: "Le travail est-il une affaire politique ?",
piste1: "L'organisation du travail est-elle un enjeu de pouvoir et de décision politique ?",
piste2: "ou le travail est-il une question purement technique et économique, hors du politique ?",
racine1: "Le travail est-il le lieu où se jouent la domination et l'émancipation politiques ?",
racine2: "ou le travail est-il une sphère séparée de la citoyenneté et du débat politique ?",
enjeu: "Examiner la dimension politique du travail."
},
{
id: 1540,
notion: 'travail',
intitule: "Le travail est-il une affaire de dignité ?",
piste1: "Le travail confère-t-il une dignité à celui qui l'exerce, quel qu'il soit ?",
piste2: "ou certains travaux sont-ils indignes et dégradants pour l'homme ?",
racine1: "Le travail est-il ce qui donne à l'homme sa dignité et son respect de soi ?",
racine2: "ou la dignité est-elle inconditionnelle et indépendante du statut professionnel ?",
enjeu: "Déterminer le lien entre travail et dignité humaine."
},
{
id: 1541,
notion: 'travail',
intitule: "Le chômage est-il une perte de dignité ?",
piste1: "L'absence de travail prive-t-elle l'individu de son statut social et de son estime de soi ?",
piste2: "ou la dignité d'une personne est-elle indépendante de son emploi ?",
racine1: "Le chômage est-il une exclusion sociale et une blessure narcissique ?",
racine2: "ou la dignité peut-elle se construire en dehors du marché du travail ?",
enjeu: "Examiner l'impact du chômage sur la dignité et l'identité."
},
{
id: 1542,
notion: 'travail',
intitule: "Le travail est-il la condition de l'autonomie ?",
piste1: "Le travail permet-il de subvenir à ses besoins et de ne dépendre de personne ?",
piste2: "ou le travail salarié crée-t-il une nouvelle dépendance envers l'employeur ?",
racine1: "L'autonomie financière est-elle la condition de l'autonomie morale et politique ?",
racine2: "ou le travail est-il une hétéronomie qui nous soumet à la volonté d'autrui ?",
enjeu: "Déterminer si le travail rend autonome ou dépendant."
},
{
id: 1543,
notion: 'travail',
intitule: "Le travail est-il la condition de l'indépendance ?",
piste1: "Le travail permet-il de s'affranchir de la tutelle familiale ou sociale ?",
piste2: "ou le travail nous rend-il dépendant des conjonctures économiques et des marchés ?",
racine1: "Le travail est-il le moyen de l'émancipation individuelle ?",
racine2: "ou le travail est-il une nouvelle forme de servitude ?",
enjeu: "Examiner le rapport entre travail et indépendance."
},
{
id: 1544,
notion: 'travail',
intitule: "Le travail est-il une servitude volontaire ?",
piste1: "Les travailleurs acceptent-ils leur condition par habitude ou par crainte de perdre leur emploi ?",
piste2: "ou le travail est-il choisi et assumé comme une liberté ?",
racine1: "Le travail est-il une soumission consentie à un système qui nous dépasse ?",
racine2: "ou le travail est-il un engagement libre et réfléchi ?",
enjeu: "Examiner la part de consentement et de contrainte dans le travail."
},
{
id: 1545,
notion: 'travail',
intitule: "Le travail est-il une émancipation ?",
piste1: "Le travail permet-il de s'élever socialement et de s'affranchir de ses conditions d'origine ?",
piste2: "ou le travail reproduit-il les inégalités et les dominations ?",
racine1: "Le travail est-il un ascenseur social et un vecteur de liberté ?",
racine2: "ou le travail est-il un instrument de reproduction des structures sociales ?",
enjeu: "Déterminer le potentiel émancipateur du travail."
},
{
id: 1546,
notion: 'travail',
intitule: "Le travail est-il une fatigue ?",
piste1: "Le travail est-il essentiellement une dépense d'énergie qui épuise le corps et l'esprit ?",
piste2: "ou le travail peut-il être une source d'énergie et de vitalité ?",
racine1: "Le travail est-il une entropie, une usure inévitable de l'organisme ?",
racine2: "ou le travail est-il une activité qui renforce les capacités humaines ?",
enjeu: "Examiner la dimension physiologique et psychologique de la fatigue au travail."
},
{
id: 1547,
notion: 'travail',
intitule: "Le travail est-il une usure du corps ?",
piste1: "Le travail laisse-t-il des traces irréversibles sur le corps du travailleur ?",
piste2: "ou le travail peut-il être une activité qui entretient et développe le corps ?",
racine1: "Le travail est-il une violence faite au corps, une source de maladies professionnelles ?",
racine2: "ou le travail est-il une hygiène, une discipline qui structure le corps ?",
enjeu: "Déterminer l'impact du travail sur l'intégrité physique."
},
{
id: 1548,
notion: 'travail',
intitule: "Le travail est-il une discipline ?",
piste1: "Le travail impose-t-il un rythme, des règles et une obéissance qui forment le caractère ?",
piste2: "ou le travail est-il une activité qui doit rester flexible et libre ?",
racine1: "Le travail est-il une école de la discipline et de l'ordre ?",
racine2: "ou la discipline au travail est-elle une forme de dressage et de soumission ?",
enjeu: "Examiner la dimension disciplinaire du travail."
},
{
id: 1549,
notion: 'travail',
intitule: "Le travail est-il une vertu ?",
piste1: "Le travail est-il une qualité morale, une marque de courage et de persévérance ?",
piste2: "ou le travail est-il une valeur morale neutre, qui dépend de son usage ?",
racine1: "Le travail est-il une vertu cardinale, opposée au vice de la paresse ?",
racine2: "ou la valorisation du travail est-elle une idéologie destinée à faire accepter la domination ?",
enjeu: "Déterminer le statut moral du travail."
},
{
id: 1550,
notion: 'travail',
intitule: "Le travail est-il une malédiction ?",
piste1: "Le travail est-il un fardeau imposé à l'humanité, une source de souffrance ?",
piste2: "ou le travail est-il une chance, une opportunité de créer et de se réaliser ?",
racine1: "Le travail est-il une punition, comme le suggèrent certains mythes fondateurs ?",
racine2: "ou le travail est-il une bénédiction, une participation à l'ordre du monde ?",
enjeu: "Examiner les représentations négatives du travail."
},
{
id: 1551,
notion: 'travail',
intitule: "Le travail est-il une bénédiction ?",
piste1: "Le travail est-il un don, une opportunité de contribuer au bien commun et de s'épanouir ?",
piste2: "ou cette vision est-elle une idéologie destinée à masquer la pénibilité du travail ?",
racine1: "Le travail est-il une grâce qui donne du sens à l'existence ?",
racine2: "ou le travail est-il une contrainte qu'il faut subir le moins possible ?",
enjeu: "Examiner les représentations positives et idéalisées du travail."
},
{
id: 1552,
notion: 'travail',
intitule: "Le travail est-il un sacrifice ?",
piste1: "Travailler, est-ce renoncer à son temps, à son énergie et à ses désirs immédiats ?",
piste2: "ou le travail est-il un investissement qui rapporte plus qu'il ne coûte ?",
racine1: "Le travail est-il une abnégation, un don de soi qui implique une perte ?",
racine2: "ou le travail est-il un échange équivalent où chacun y trouve son compte ?",
enjeu: "Déterminer si le travail implique nécessairement une dimension sacrificielle."
},
{
id: 1553,
notion: 'travail',
intitule: "Le travail est-il un don de soi ?",
piste1: "Le travail est-il une activité où l'on s'investit personnellement et généreusement ?",
piste2: "ou le travail est-il une prestation impersonnelle, mesurée et comptabilisée ?",
racine1: "Le travail est-il une forme de générosité et de service envers autrui ?",
racine2: "ou le travail est-il une transaction froide, régie par le contrat et le salaire ?",
enjeu: "Examiner la dimension relationnelle et désintéressée du travail."
},
{
id: 1554,
notion: 'travail',
intitule: "Le travail est-il un échange ?",
piste1: "Le travail est-il la vente d'une force contre une rémunération ?",
piste2: "ou le travail est-il une coopération et un don qui dépasse le calcul économique ?",
racine1: "Le travail est-il réductible à un contrat d'échange de biens et de services ?",
racine2: "ou le travail est-il un lien social qui ne peut être entièrement monétarisé ?",
enjeu: "Déterminer la nature économique et sociale de l'échange de travail."
},
{
id: 1555,
notion: 'travail',
intitule: "Le travail est-il une exploitation ?",
piste1: "Le travail est-il le lieu où la force de l'un est captée au profit de l'autre ?",
piste2: "ou le travail est-il une collaboration mutuellement bénéfique ?",
racine1: "Le travail salarié est-il par essence une exploitation de la plus-value (Marx) ?",
racine2: "ou le travail est-il un contrat libre entre des partenaires égaux ?",
enjeu: "Examiner la thèse de l'exploitation au cœur du rapport de travail."
},
{
id: 1556,
notion: 'travail',
intitule: "Le travail est-il une coopération ?",
piste1: "Le travail est-il une activité collective où chacun apporte sa pierre à l'édifice commun ?",
piste2: "ou le travail est-il une compétition où chacun cherche à prendre la place de l'autre ?",
racine1: "Le travail est-il la manifestation de la solidarité organique de la société (Durkheim) ?",
racine2: "ou le travail est-il une lutte de tous contre tous pour la survie ?",
enjeu: "Déterminer si le travail unit ou divise les hommes."
},
{
id: 1557,
notion: 'travail',
intitule: "Le travail est-il une compétition ?",
piste1: "Le travail est-il un champ de bataille où il faut se surpasser pour survivre et réussir ?",
piste2: "ou le travail est-il un espace de solidarité et d'entraide ?",
racine1: "La compétition est-elle le moteur de l'efficacité et du progrès au travail ?",
racine2: "ou la compétition au travail est-elle destructrice de la santé et du lien social ?",
enjeu: "Examiner la place de la compétition dans le monde du travail."
},
{
id: 1558,
notion: 'travail',
intitule: "Le travail est-il une mesure du temps ?",
piste1: "Le travail structure-t-il notre rapport au temps, le découpant en heures et en journées ?",
piste2: "ou le travail est-il une activité qui peut s'affranchir de la mesure du temps ?",
racine1: "Le temps de travail est-il la mesure universelle de la valeur et de l'effort ?",
racine2: "ou le travail est-il une expérience qualitative de la durée, irréductible à la quantité ?",
enjeu: "Déterminer le rapport entre travail et temporalité."
},
{
id: 1559,
notion: 'travail',
intitule: "Le travail est-il une perte de temps ?",
piste1: "Le travail nous vole-t-il le temps que nous pourrions consacrer à des activités plus nobles ?",
piste2: "ou le travail est-il le meilleur usage du temps, celui qui le remplit de sens ?",
racine1: "Le travail est-il une aliénation temporelle, un temps vécu pour un autre ?",
racine2: "ou le travail est-il le temps de la réalisation de soi et de la contribution au monde ?",
enjeu: "Examiner la valeur temporelle du travail."
},
{
id: 1560,
notion: 'travail',
intitule: "Le travail est-il un gain de temps ?",
piste1: "Le travail, en développant la technique, permet-il de gagner du temps et de réduire la peine ?",
piste2: "ou le travail crée-t-il sans cesse de nouvelles tâches qui occupent tout le temps disponible ?",
racine1: "Le progrès du travail vise-t-il à libérer du temps pour les loisirs et la culture ?",
racine2: "ou le travail est-il une course sans fin qui accélère le rythme de vie ?",
enjeu: "Déterminer si le travail libère ou occupe le temps."
},
{
id: 1561,
notion: 'travail',
intitule: "Le travail est-il une fin en soi ?",
piste1: "Le travail est-il une activité que l'on pratique pour elle-même, pour la joie de faire ?",
piste2: "ou le travail est-il toujours un moyen pour obtenir autre chose (salaire, reconnaissance) ?",
racine1: "Le travail peut-il être autotélique, trouvant sa fin en lui-même comme l'art ou le jeu ?",
racine2: "ou le travail est-il par définition hétérotélique, orienté vers un résultat extérieur ?",
enjeu: "Déterminer la finalité intrinsèque ou extrinsèque du travail."
},
{
id: 1562,
notion: 'travail',
intitule: "Le travail est-il un moyen de subsistance ?",
piste1: "Le travail a-t-il pour unique but de garantir la survie biologique et matérielle ?",
piste2: "ou le travail a-t-il des dimensions qui dépassent largement la simple subsistance ?",
racine1: "Le travail est-il une réponse à la nécessité vitale, comme manger ou dormir ?",
racine2: "ou le travail est-il une activité culturelle qui donne du sens à la vie ?",
enjeu: "Examiner la réduction du travail à sa fonction de subsistance."
},
{
id: 1563,
notion: 'travail',
intitule: "Le travail est-il un moyen de consommation ?",
piste1: "Le travail n'est-il que le préalable nécessaire pour pouvoir consommer des biens et des services ?",
piste2: "ou le travail est-il une activité qui a sa propre valeur, indépendante de la consommation ?",
racine1: "Le travail est-il subordonné à la société de consommation, n'étant qu'un moyen de gagner de l'argent ?",
racine2: "ou le travail est-il une production qui s'oppose à la logique de la consommation passive ?",
enjeu: "Déterminer le rapport entre travail et consommation."
},
{
id: 1564,
notion: 'travail',
intitule: "Le travail est-il un moyen de pouvoir ?",
piste1: "Le travail permet-il d'acquérir du pouvoir sur les choses et sur les hommes ?",
piste2: "ou le travail est-il une activité de service qui implique une forme de soumission ?",
racine1: "Le travail est-il un instrument de domination et de contrôle ?",
racine2: "ou le travail est-il une activité d'émancipation qui rend puissant par la compétence ?",
enjeu: "Examiner la dimension de pouvoir inhérente au travail."
},
{
id: 1565,
notion: 'travail',
intitule: "Le travail est-il un moyen de reconnaissance sociale ?",
piste1: "Le travail est-il le principal vecteur par lequel la société nous attribue un statut et du respect ?",
piste2: "ou la reconnaissance peut-elle se trouver en dehors du travail (famille, amis, citoyenneté) ?",
racine1: "Le travail est-il la clé de l'intégration sociale et de l'estime de soi ?",
racine2: "ou le travail est-il une source de mépris et de hiérarchisation sociale ?",
enjeu: "Déterminer le rôle du travail dans l'obtention de la reconnaissance."
},
{
id: 1566,
notion: 'travail',
intitule: "Le travail est-il une identité ?",
piste1: "Sommes-nous définis par notre métier et notre activité professionnelle ?",
piste2: "ou notre identité est-elle plus large et plus profonde que notre travail ?",
racine1: "La question 'Que fais-tu dans la vie ?' résume-t-elle l'identité d'une personne ?",
racine2: "ou le travail n'est-il qu'un rôle social que l'on endosse temporairement ?",
enjeu: "Examiner le lien entre travail et construction de l'identité personnelle."
},
{
id: 1567,
notion: 'travail',
intitule: "Le travail est-il une assignation ?",
piste1: "Le travail est-il une place que l'on nous attribue et que l'on doit occuper ?",
piste2: "ou le travail est-il un choix libre et une construction personnelle ?",
racine1: "Le travail est-il une destination sociale déterminée par l'origine et le milieu ?",
racine2: "ou le travail est-il un projet que l'on se donne à soi-même ?",
enjeu: "Déterminer la part de contrainte sociale et de liberté individuelle dans le travail."
},
{
id: 1568,
notion: 'travail',
intitule: "Le travail est-il un choix ?",
piste1: "Peut-on choisir librement son travail et les conditions dans lesquelles on l'exerce ?",
piste2: "ou le travail est-il imposé par la nécessité, le manque de qualifications ou la contrainte économique ?",
racine1: "Le travail est-il l'expression de la liberté et des aspirations individuelles ?",
racine2: "ou le travail est-il une nécessité subie, un 'choix' contraint ?",
enjeu: "Examiner la réalité de la liberté de choix dans le domaine du travail."
},
{
id: 1569,
notion: 'travail',
intitule: "Le travail est-il une vocation ?",
piste1: "Le travail est-il un appel intérieur, une mission à laquelle on se sent destiné ?",
piste2: "ou la vocation est-elle une illusion romantique qui masque la réalité du marché du travail ?",
racine1: "Le travail peut-il être une réponse à un appel, une passion qui donne sens à la vie ?",
racine2: "ou le travail est-il une activité profane, indépendante de toute notion de destin ?",
enjeu: "Déterminer si le travail peut être vécu comme une vocation."
},
{
id: 1570,
notion: 'travail',
intitule: "Le travail est-il une passion ?",
piste1: "Peut-on travailler avec passion, trouvant dans l'activité elle-même une source de joie intense ?",
piste2: "ou la passion est-elle incompatible avec les contraintes et la rationalité du travail ?",
racine1: "Le travail est-il le lieu où la passion peut se sublimer et se réaliser ?",
racine2: "ou le travail est-il une froide transaction qui éteint la passion ?",
enjeu: "Examiner la compatibilité entre travail et passion."
},
{
id: 1571,
notion: 'travail',
intitule: "Le travail est-il une routine ?",
piste1: "Le travail est-il caractérisé par la répétition ennuyeuse et l'absence de nouveauté ?",
piste2: "ou le travail peut-il être une source constante de défis et d'apprentissage ?",
racine1: "Le travail est-il une habitude qui endort la conscience et l'esprit critique ?",
racine2: "ou la routine est-elle une condition de la maîtrise et de l'efficacité au travail ?",
enjeu: "Déterminer la place de la routine dans l'expérience du travail."
},
{
id: 1572,
notion: 'travail',
intitule: "Le travail est-il une aventure ?",
piste1: "Le travail est-il une exploration, une prise de risque et une découverte de l'inconnu ?",
piste2: "ou le travail est-il une activité sécurisée, prévisible et sans surprise ?",
racine1: "Le travail est-il un lieu d'innovation et de dépassement de soi ?",
racine2: "ou le travail est-il une recherche de stabilité et de sécurité ?",
enjeu: "Examiner la dimension d'aventure et de risque dans le travail."
},
{
id: 1573,
notion: 'travail',
intitule: "Le travail est-il une contrainte extérieure ?",
piste1: "Le travail est-il imposé par des forces extérieures (patron, marché, nécessité) ?",
piste2: "ou le travail est-il une activité que l'on s'impose à soi-même ?",
racine1: "Le travail est-il une hétéronomie, une soumission à des règles que l'on n'a pas choisies ?",
racine2: "ou le travail est-il une autodiscipline, une contrainte que l'on accepte librement ?",
enjeu: "Déterminer l'origine de la contrainte dans le travail."
},
{
id: 1574,
notion: 'travail',
intitule: "Le travail est-il une contrainte intérieure ?",
piste1: "Le travail est-il une exigence que l'on se donne à soi-même, une discipline personnelle ?",
piste2: "ou le travail est-il toujours une réponse à une nécessité extérieure ?",
racine1: "Le travail est-il une forme d'ascèse et de maîtrise de soi ?",
racine2: "ou le travail est-il une aliénation, même quand on croit l'avoir choisi ?",
enjeu: "Examiner la dimension d'autocontrainte dans le travail."
},
{
id: 1575,
notion: 'travail',
intitule: "Le travail est-il une libération de la nature ?",
piste1: "Le travail permet-il à l'homme de s'affranchir des cycles et des déterminismes naturels ?",
piste2: "ou le travail est-il une activité qui reste soumise aux lois de la nature ?",
racine1: "Le travail est-il l'acte par lequel l'homme s'arrache à l'animalité et à la nécessité ?",
racine2: "ou le travail est-il un métabolisme avec la nature, dont on ne peut sortir ?",
enjeu: "Déterminer si le travail est une rupture ou une continuité avec la nature."
},
{
id: 1576,
notion: 'travail',
intitule: "Le travail est-il un retour à la nature ?",
piste1: "Le travail manuel, notamment agricole, est-il une façon de se reconnecter à la nature ?",
piste2: "ou le travail est-il par essence une artificialisation qui nous éloigne de la nature ?",
racine1: "Le travail est-il un moyen de retrouver une harmonie perdue avec le monde naturel ?",
racine2: "ou le travail est-il la marque de la culture, opposée à la nature ?",
enjeu: "Examiner le rapport entre travail et nature dans une perspective écologique."
},
{
id: 1577,
notion: 'travail',
intitule: "Le travail est-il une transformation de soi ?",
piste1: "En transformant le monde, le travailleur se transforme-t-il lui-même, acquérant des compétences et une maturité ?",
piste2: "ou le travail déforme-t-il l'individu, le rendant unilatéral et spécialisé ?",
racine1: "Le travail est-il un processus d'éducation et de formation du sujet (Hegel) ?",
racine2: "ou le travail est-il une mutilation des potentialités humaines (Marx) ?",
enjeu: "Déterminer l'impact du travail sur la formation de la personnalité."
},
{
id: 1578,
notion: 'travail',
intitule: "Le travail est-il une objectivation de soi ?",
piste1: "Le travail permet-il de voir ses propres capacités matérialisées dans un objet ou un service ?",
piste2: "ou le travail est-il une activité qui laisse l'individu vide et dépossédé de son œuvre ?",
racine1: "Le travail est-il le miroir dans lequel l'homme se reconnaît et se confirme ?",
racine2: "ou le travail est-il une aliénation où l'objet produit devient une puissance étrangère ?",
enjeu: "Examiner la théorie de l'objectivation et de l'aliénation dans le travail."
},
{
id: 1579,
notion: 'travail',
intitule: "Le travail est-il une appropriation du monde ?",
piste1: "Le travail permet-il à l'homme de se sentir chez lui dans le monde, en le transformant ?",
piste2: "ou le travail est-il une dépossession, une expropriation de son propre environnement ?",
racine1: "Le travail est-il l'acte par lequel l'homme s'approprie la nature et en fait son 'chez-soi' ?",
racine2: "ou le travail est-il une destruction du monde qui rend l'homme étranger à son environnement ?",
enjeu: "Déterminer si le travail est un acte d'appropriation ou de dépossession."
},
{
id: 1580,
notion: 'travail',
intitule: "Le travail est-il une dépossession ?",
piste1: "Le travailleur est-il dépossédé du fruit de son travail, du processus de travail et de son propre potentiel ?",
piste2: "ou le travail est-il une activité où l'individu se réalise et s'enrichit ?",
racine1: "Le travail est-il une expropriation de soi au profit d'un autre (le capitaliste) ?",
racine2: "ou le travail est-il une propriété de soi, une maîtrise de son activité ?",
enjeu: "Examiner la thèse de la dépossession au cœur du travail moderne."
},
{
id: 1581,
notion: 'travail',
intitule: "Le travail est-il une mesure de l'effort ?",
piste1: "La valeur d'un travail est-elle proportionnelle à la peine et à l'effort qu'il a coûtés ?",
piste2: "ou la valeur du travail dépend-elle du résultat et de l'utilité, indépendamment de l'effort ?",
racine1: "L'effort est-il la mesure morale et économique du travail ?",
racine2: "ou l'effort est-il une inefficacité que le progrès technique cherche à éliminer ?",
enjeu: "Déterminer le rapport entre effort et valeur dans le travail."
},
{
id: 1582,
notion: 'travail',
intitule: "Le travail est-il une mesure du mérite ?",
piste1: "Le travail et la réussite professionnelle sont-ils la preuve du mérite et de la valeur d'une personne ?",
piste2: "ou le travail est-il dépendant de facteurs chanceux et sociaux qui rendent la notion de mérite illusoire ?",
racine1: "Le travail est-il la juste récompense de l'effort et du talent ?",
racine2: "ou le travail est-il une loterie sociale qui ne mesure pas le mérite réel ?",
enjeu: "Examiner le lien entre travail, mérite et justice sociale."
},
{
id: 1583,
notion: 'travail',
intitule: "Le travail est-il une mesure de la valeur d'une personne ?",
piste1: "Jugeons-nous la valeur d'un individu à l'aune de son travail et de sa réussite professionnelle ?",
piste2: "ou la dignité d'une personne est-elle inconditionnelle et indépendante de son statut professionnel ?",
racine1: "Le travail est-il le principal critère d'évaluation sociale d'un individu ?",
racine2: "ou la réduction de la personne à son travail est-elle une forme de mépris ?",
enjeu: "Déterminer si le travail définit la valeur morale et sociale d'une personne."
},
{
id: 1584,
notion: 'travail',
intitule: "Le travail est-il une condition de la citoyenneté ?",
piste1: "Le travail est-il la condition pour être un citoyen à part entière, contribuant à la société ?",
piste2: "ou la citoyenneté est-elle un statut politique indépendant de l'activité professionnelle ?",
racine1: "Le travail est-il le fondement de l'intégration civique et du droit de cité ?",
racine2: "ou la citoyenneté est-elle un droit inaliénable, indépendamment du travail ?",
enjeu: "Examiner le lien entre travail et citoyenneté."
},
{
id: 1585,
notion: 'travail',
intitule: "Le travail est-il une condition de l'égalité ?",
piste1: "Le travail est-il un facteur d'égalisation des conditions, permettant à chacun de gagner sa vie ?",
piste2: "ou le travail est-il la source principale des inégalités sociales et économiques ?",
racine1: "Le travail est-il un niveau commun qui rassemble les hommes dans une dignité partagée ?",
racine2: "ou le travail est-il un facteur de hiérarchisation et de division de la société ?",
enjeu: "Déterminer le rôle du travail dans la production ou la réduction des inégalités."
},
{
id: 1586,
notion: 'travail',
intitule: "Le travail est-il une source d'inégalités ?",
piste1: "Le travail crée-t-il des écarts de richesse, de statut et de pouvoir entre les individus ?",
piste2: "ou le travail est-il un facteur de mobilité sociale qui réduit les inégalités ?",
racine1: "Le travail est-il le moteur de la reproduction des structures sociales inégalitaires ?",
racine2: "ou le travail est-il un ascenseur social qui permet de dépasser sa condition d'origine ?",
enjeu: "Examiner la contribution du travail aux inégalités sociales."
},
{
id: 1587,
notion: 'travail',
intitule: "Le travail est-il une source de richesses ?",
piste1: "Le travail est-il la source unique de toute richesse et de toute valeur économique ?",
piste2: "ou la richesse provient-elle aussi de la nature, du capital et de l'innovation ?",
racine1: "Le travail est-il le seul facteur de production qui crée de la valeur (Smith, Ricardo, Marx) ?",
racine2: "ou le travail n'est-il qu'un facteur parmi d'autres dans la création de richesse ?",
enjeu: "Déterminer le rôle du travail dans la création de la richesse."
},
{
id: 1588,
notion: 'travail',
intitule: "Le travail est-il une source de pauvreté ?",
piste1: "Le travail peut-il être précaire, mal rémunéré et conduire à la pauvreté (travailleurs pauvres) ?",
piste2: "ou le travail est-il par définition le remède à la pauvreté ?",
racine1: "Le travail est-il toujours une garantie contre la pauvreté et l'exclusion ?",
racine2: "ou le travail peut-il être une trappe à pauvreté, exploitant ceux qui n'ont pas d'autre choix ?",
enjeu: "Examiner le paradoxe du travailleur pauvre."
},
{
id: 1589,
notion: 'travail',
intitule: "Le travail est-il une source de santé ?",
piste1: "Le travail est-il une activité qui structure la vie, donne un rythme et maintient en bonne santé ?",
piste2: "ou le travail est-il une source de stress, de maladies professionnelles et d'usure ?",
racine1: "Le travail est-il un facteur de protection et d'équilibre psychique et physique ?",
racine2: "ou le travail est-il un déterminant majeur de la dégradation de la santé ?",
enjeu: "Déterminer l'impact du travail sur la santé."
},
{
id: 1590,
notion: 'travail',
intitule: "Le travail est-il une source de maladie ?",
piste1: "Le travail est-il la cause de pathologies spécifiques (burn-out, troubles musculo-squelettiques) ?",
piste2: "ou le travail est-il un facteur de résilience et de maintien en bonne santé ?",
racine1: "Le travail est-il une violence faite au corps et à l'esprit, génératrice de maladie ?",
racine2: "ou la maladie est-elle une conséquence de l'absence de travail (chômage) plutôt que du travail lui-même ?",
enjeu: "Examiner la dimension pathogène du travail."
},
{
id: 1591,
notion: 'travail',
intitule: "Le travail est-il une source de sens ?",
piste1: "Le travail donne-t-il un but et une direction à l'existence, une raison de se lever le matin ?",
piste2: "ou le travail est-il une activité absurde, dépourvue de sens et de finalité ?",
racine1: "Le travail est-il le lieu où l'homme donne un sens à sa vie en contribuant au monde ?",
racine2: "ou le travail est-il une tâche de Sisyphe, répétitive et vide de sens ?",
enjeu: "Déterminer la capacité du travail à donner du sens à l'existence."
},
{
id: 1592,
notion: 'travail',
intitule: "Le travail est-il une source d'absurde ?",
piste1: "Le travail est-il une activité dénuée de sens, une répétition mécanique sans finalité humaine ?",
piste2: "ou le travail est-il toujours porteur d'une signification, même cachée ?",
racine1: "Le travail est-il une illustration de l'absurde de la condition humaine (Camus) ?",
racine2: "ou le travail est-il une révolte contre l'absurde, une tentative de donner du sens ?",
enjeu: "Examiner la dimension absurde ou significative du travail."
},
{
id: 1593,
notion: 'travail',
intitule: "Le travail est-il une source de fierté ?",
piste1: "Le travail permet-il d'éprouver de la fierté pour ce que l'on a accompli et construit ?",
piste2: "ou le travail est-il une source de honte et de sentiment d'infériorité ?",
racine1: "Le travail est-il un motif de fierté légitime et de reconnaissance de soi ?",
racine2: "ou le travail est-il une activité que l'on subit et dont on ne peut être fier ?",
enjeu: "Déterminer le lien entre travail et fierté."
},
{
id: 1594,
notion: 'travail',
intitule: "Le travail est-il une source de honte ?",
piste1: "Certains travaux sont-ils considérés comme honteux, dégradants ou indignes ?",
piste2: "ou tout travail, s'il est honnêtement fait, mérite-t-il le respect ?",
racine1: "Le travail est-il une source de stigmatisation sociale et de honte pour celui qui l'exerce ?",
racine2: "ou la honte vient-elle du regard des autres et non du travail lui-même ?",
enjeu: "Examiner la dimension de honte et de stigmatisation dans le travail."
},
{
id: 1595,
notion: 'travail',
intitule: "Le travail est-il une source de solidarité ?",
piste1: "Le travail crée-t-il des liens de dépendance mutuelle et de solidarité entre les hommes ?",
piste2: "ou le travail est-il une activité individualiste et compétitive ?",
racine1: "Le travail est-il le fondement de la solidarité organique de la société (Durkheim) ?",
racine2: "ou le travail est-il un champ de bataille où chacun est pour soi ?",
enjeu: "Déterminer le rôle du travail dans la création de solidarité."
},
{
id: 1596,
notion: 'travail',
intitule: "Le travail est-il une source d'individualisme ?",
piste1: "Le travail encourage-t-il la compétition, la réussite personnelle et le repli sur soi ?",
piste2: "ou le travail est-il une activité fondamentalement collective et sociale ?",
racine1: "Le travail est-il le moteur de l'individualisme et de la fragmentation du lien social ?",
racine2: "ou le travail est-il une école de la coopération et du vivre-ensemble ?",
enjeu: "Examiner l'impact du travail sur l'individualisme."
},
{
id: 1597,
notion: 'travail',
intitule: "Le travail est-il en train de disparaître ?",
piste1: "L'automatisation et l'intelligence artificielle vont-elles rendre le travail humain obsolète ?",
piste2: "ou le travail va-t-il se transformer sans jamais disparaître totalement ?",
racine1: "La fin du travail est-elle une perspective réaliste et souhaitable ?",
racine2: "ou le travail est-il une nécessité anthropologique qui persistera sous de nouvelles formes ?",
enjeu: "Examiner la thèse de la 'fin du travail'."
},
{
id: 1598,
notion: 'travail',
intitule: "Le travail est-il en train de se transformer ?",
piste1: "Le travail devient-il plus flexible, plus précaire et plus dématérialisé ?",
piste2: "ou les structures fondamentales du travail restent-elles les mêmes ?",
racine1: "La transformation du travail est-elle une rupture avec le modèle industriel ?",
racine2: "ou est-elle une simple adaptation aux nouvelles technologies ?",
enjeu: "Déterminer la nature et l'ampleur des transformations contemporaines du travail."
},
{
id: 1599,
notion: 'travail',
intitule: "Le travail peut-il être entièrement automatisé ?",
piste1: "Les machines et les algorithmes peuvent-ils remplacer l'homme dans toutes les tâches, y compris cognitives et créatives ?",
piste2: "ou existe-t-il une part irréductiblement humaine dans le travail que la machine ne peut saisir ?",
racine1: "L'automatisation totale est-elle une possibilité technique et économique ?",
racine2: "ou le travail humain est-il nécessaire pour donner du sens et de la responsabilité à l'action ?",
enjeu: "Examiner les limites de l'automatisation du travail."
},
{
id: 1600,
notion: 'travail',
intitule: "Le travail peut-il se définir ?",
piste1: "Peut-on donner une définition unique et universelle du travail qui englobe toutes ses formes ?",
piste2: "ou le travail est-il un concept historiquement variable et essentiellement contesté ?",
racine1: "Le travail a-t-il une essence stable (transformation de la nature, effort, production) ?",
racine2: "ou le travail est-il une catégorie sociale qui change de sens selon les époques et les cultures ?",
enjeu: "Interroger la possibilité et les limites d'une définition philosophique du travail."
},
{
id: 1601,
notion: 'vérité',
intitule: "Qu'est-ce que la vérité ?",
piste1: "La vérité est-elle l'adéquation entre un discours et la réalité qu'il décrit ?",
piste2: "ou est-elle la cohérence interne d'un système de pensée ?",
racine1: "La vérité se définit-elle par la correspondance au réel (adéquation) ?",
racine2: "ou se définit-elle par la non-contradiction logique (cohérence) ?",
enjeu: "Établir une définition philosophique de la vérité et ses différents critères."
},
{
id: 1602,
notion: 'vérité',
intitule: "La vérité est-elle l'opposé de l'opinion ?",
piste1: "La vérité s'oppose-t-elle radicalement à l'opinion (doxa) qui n'est qu'une croyance ?",
piste2: "ou l'opinion contient-elle déjà une part de vérité qu'il s'agit de dégager ?",
racine1: "L'opinion est-elle par essence fausse ou incertaine ?",
racine2: "ou la vérité émerge-t-elle du dialogue et de la confrontation des opinions ?",
enjeu: "Examiner la rupture ou la continuité entre opinion et vérité."
},
{
id: 1603,
notion: 'vérité',
intitule: "La vérité est-elle objective ?",
piste1: "La vérité existe-t-elle indépendamment du sujet qui la pense ?",
piste2: "ou est-elle toujours relative au point de vue de celui qui l'énonce ?",
racine1: "La vérité est-elle une propriété des choses elles-mêmes ?",
racine2: "ou est-elle une construction de l'esprit humain ?",
enjeu: "Déterminer si la vérité est indépendante ou dépendante du sujet."
},
{
id: 1604,
notion: 'vérité',
intitule: "La vérité est-elle subjective ?",
piste1: "La vérité n'est-elle qu'une conviction intime et personnelle ?",
piste2: "ou la subjectivité est-elle un obstacle à l'accès à la vérité ?",
racine1: "Ce qui est vrai pour moi peut-il être faux pour un autre ?",
racine2: "ou la vérité exige-t-elle de s'arracher à la subjectivité pour atteindre l'universel ?",
enjeu: "Examiner la légitimité de la vérité subjective."
},
{
id: 1605,
notion: 'vérité',
intitule: "La vérité est-elle une découverte ou une construction ?",
piste1: "La vérité préexiste-t-elle et l'esprit ne fait-il que la révéler ?",
piste2: "ou l'esprit construit-il la vérité en organisant le réel ?",
racine1: "La vérité est-elle un donné à contempler ?",
racine2: "ou est-elle un produit de l'activité rationnelle ?",
enjeu: "Déterminer le rôle actif ou passif du sujet dans l'accès à la vérité."
},
{
id: 1606,
notion: 'vérité',
intitule: "La vérité est-elle une ?",
piste1: "Existe-t-il une seule vérité sur chaque chose ?",
piste2: "ou peut-il y avoir plusieurs vérités coexistantes sur un même objet ?",
racine1: "Le principe de non-contradiction impose-t-il l'unicité de la vérité ?",
racine2: "ou la complexité du réel autorise-t-elle des vérités multiples et complémentaires ?",
enjeu: "Examiner l'unicité ou la pluralité de la vérité."
},
{
id: 1607,
notion: 'vérité',
intitule: "La vérité est-elle éternelle ?",
piste1: "Une fois établie, la vérité reste-t-elle vraie pour toujours ?",
piste2: "ou la vérité est-elle historique et évolutive ?",
racine1: "La vérité mathématique ou logique est-elle le modèle de toute vérité ?",
racine2: "ou la vérité est-elle toujours située dans un contexte et un temps ?",
enjeu: "Déterminer le rapport entre vérité et temporalité."
},
{
id: 1608,
notion: 'vérité',
intitule: "La vérité est-elle utile ?",
piste1: "La vérité a-t-elle de la valeur parce qu'elle nous permet d'agir efficacement ?",
piste2: "ou sa valeur est-elle intrinsèque, indépendamment de toute utilité ?",
racine1: "Une croyance fausse mais utile vaut-elle mieux qu'une vérité nuisible ?",
racine2: "ou la vérité est-elle une fin en soi, même si elle est douloureuse ou inutile ?",
enjeu: "Examiner le rapport entre vérité et utilité (pragmatisme)."
},
{
id: 1609,
notion: 'vérité',
intitule: "Faut-il toujours dire la vérité ?",
piste1: "La véracité est-elle un devoir moral absolu ?",
piste2: "ou existe-t-il des situations où le mensonge est moralement justifié ?",
racine1: "Le respect de la vérité est-il la condition de toute relation humaine ?",
racine2: "ou la bienveillance peut-elle exiger de taire ou de déformer la vérité ?",
enjeu: "Déterminer les limites du devoir de véracité."
},
{
id: 1610,
notion: 'vérité',
intitule: "Le mensonge est-il toujours condamnable ?",
piste1: "Le mensonge est-il une faute morale en soi, car il corrompt la parole ?",
piste2: "ou le mensonge peut-il être un moyen légitime de protection ou de justice ?",
racine1: "Mentir, est-ce toujours manquer de respect à la dignité d'autrui ?",
racine2: "ou le mensonge peut-il être une arme des faibles contre les forts ?",
enjeu: "Examiner la valeur morale du mensonge."
},
{
id: 1611,
notion: 'vérité',
intitule: "Peut-on se mentir à soi-même ?",
piste1: "La mauvaise foi est-elle une possibilité réelle de la conscience ?",
piste2: "ou se mentir à soi-même est-il une contradiction logique impossible ?",
racine1: "Peut-on savoir et ne pas savoir la même chose en même temps ?",
racine2: "ou la conscience est-elle toujours transparente à elle-même ?",
enjeu: "Analyser la structure paradoxale du mensonge à soi (mauvaise foi)."
},
{
id: 1612,
notion: 'vérité',
intitule: "La vérité est-elle une contrainte ?",
piste1: "La vérité s'impose-t-elle à nous avec une nécessité qui limite notre liberté ?",
piste2: "ou est-elle une libération qui nous arrache aux illusions ?",
racine1: "Reconnaître la vérité, est-ce se soumettre à une autorité extérieure ?",
racine2: "ou est-ce au contraire s'émanciper des préjugés et des déterminismes ?",
enjeu: "Déterminer si la vérité aliène ou libère le sujet."
},
{
id: 1613,
notion: 'vérité',
intitule: "La vérité rend-elle libre ?",
piste1: "Connaître la vérité est-ce acquérir le pouvoir d'agir lucidement ?",
piste2: "ou la vérité peut-elle être un fardeau qui paralyse l'action ?",
racine1: "L'ignorance est-elle une forme de servitude ?",
racine2: "ou la lucidité sur notre condition peut-elle être source de désespoir ?",
enjeu: "Examiner le lien entre vérité et liberté."
},
{
id: 1614,
notion: 'vérité',
intitule: "La vérité rend-elle heureux ?",
piste1: "Le bonheur suppose-t-il l'adhésion au vrai ?",
piste2: "ou le bonheur exige-t-il parfois l'illusion ?",
racine1: "Une vie fondée sur le mensonge peut-elle être heureuse ?",
racine2: "ou la vérité est-elle souvent incompatible avec le bien-être ?",
enjeu: "Déterminer le rapport entre vérité et bonheur."
},
{
id: 1615,
notion: 'vérité',
intitule: "L'illusion est-elle toujours fausse ?",
piste1: "L'illusion est-elle une erreur qu'il faut corriger ?",
piste2: "ou a-t-elle une vérité propre, symbolique ou psychologique ?",
racine1: "L'illusion est-elle une simple défaillance de la connaissance ?",
racine2: "ou remplit-elle une fonction nécessaire dans la vie humaine ?",
enjeu: "Examiner la valeur et la fonction de l'illusion."
},
{
id: 1616,
notion: 'vérité',
intitule: "L'erreur est-elle l'opposé de la vérité ?",
piste1: "L'erreur est-elle une privation de vérité, un simple manque ?",
piste2: "ou est-elle une étape nécessaire dans la recherche de la vérité ?",
racine1: "L'erreur est-elle une faute de l'esprit qu'il faut éliminer ?",
racine2: "ou est-elle un moment productif de l'apprentissage et de la découverte ?",
enjeu: "Déterminer le statut de l'erreur dans la démarche de connaissance."
},
{
id: 1617,
notion: 'vérité',
intitule: "La vérité est-elle une évidence ?",
piste1: "La vérité se reconnaît-elle immédiatement par sa clarté et sa distinctivité ?",
piste2: "ou l'évidence est-elle souvent trompeuse et la vérité exige-t-elle un effort ?",
racine1: "Ce qui est évident est-il nécessairement vrai ?",
racine2: "ou l'évidence n'est-elle qu'un sentiment subjectif de certitude ?",
enjeu: "Examiner la valeur de l'évidence comme critère de vérité."
},
{
id: 1618,
notion: 'vérité',
intitule: "Le doute est-il l'ennemi de la vérité ?",
piste1: "Douter, est-ce renoncer à atteindre la vérité ?",
piste2: "ou le doute est-il la condition méthodique de l'accès à la vérité ?",
racine1: "Le doute suspend-il le jugement et donc l'accès au vrai ?",
racine2: "ou le doute méthodique est-il le seul moyen d'éliminer le faux ?",
enjeu: "Déterminer le rôle du doute dans la quête de la vérité."
},
{
id: 1619,
notion: 'vérité',
intitule: "La vérité est-elle une certitude ?",
piste1: "On ne peut-il dire qu'une chose est vraie que si l'on en est absolument certain ?",
piste2: "ou la vérité peut-elle être probabiliste et révisable ?",
racine1: "La vérité exige-t-elle l'absence totale de doute ?",
racine2: "ou la certitude est-elle un état psychologique distinct de la vérité logique ?",
enjeu: "Distinguer la vérité (propriété de l'énoncé) et la certitude (état du sujet)."
},
{
id: 1620,
notion: 'vérité',
intitule: "La vérité est-elle relative ?",
piste1: "La vérité dépend-elle du contexte culturel, historique ou individuel ?",
piste2: "ou existe-t-il des vérités absolues et universelles ?",
racine1: "Le relativisme est-il la seule attitude tolérante face à la diversité des croyances ?",
racine2: "ou le relativisme se contredit-il lui-même en prétendant dire une vérité absolue ?",
enjeu: "Examiner la thèse du relativisme et ses limites."
},
{
id: 1621,
notion: 'vérité',
intitule: "La vérité est-elle absolue ?",
piste1: "La vérité est-elle inconditionnelle et indépendante de tout point de vue ?",
piste2: "ou l'absolu est-il une idée régulative inaccessible à l'homme ?",
racine1: "L'absolu est-il la seule forme authentique de la vérité ?",
racine2: "ou la vérité humaine est-elle nécessairement finie et située ?",
enjeu: "Déterminer la possibilité d'une vérité absolue pour l'esprit humain."
},
{
id: 1622,
notion: 'vérité',
intitule: "La vérité est-elle universelle ?",
piste1: "Ce qui est vrai pour un homme doit-il l'être pour tous ?",
piste2: "ou la vérité est-elle toujours liée à une perspective particulière ?",
racine1: "L'universalité est-elle le critère de la vérité rationnelle ?",
racine2: "ou l'universalité n'est-elle qu'une prétention impérialiste d'une culture sur les autres ?",
enjeu: "Examiner le lien entre vérité et universalité."
},
{
id: 1623,
notion: 'vérité',
intitule: "La vérité est-elle un consensus ?",
piste1: "Une chose est-elle vraie parce que tout le monde est d'accord pour la dire ?",
piste2: "ou le consensus peut-il se former autour d'une erreur collective ?",
racine1: "La vérité se définit-elle par l'adhésion du plus grand nombre ?",
racine2: "ou la vérité est-elle parfois le fait d'une minorité contre l'opinion commune ?",
enjeu: "Distinguer la vérité de l'opinion majoritaire."
},
{
id: 1624,
notion: 'vérité',
intitule: "La vérité est-elle une construction sociale ?",
piste1: "Ce que nous tenons pour vrai est-il le produit des rapports de force et des institutions ?",
piste2: "ou la vérité résiste-t-elle à toute réduction sociologique ?",
racine1: "La vérité est-elle un effet de discours et de pouvoir (Foucault) ?",
racine2: "ou existe-t-il un réel qui s'impose à toute construction sociale ?",
enjeu: "Examiner la thèse de la construction sociale de la vérité."
},
{
id: 1625,
notion: 'vérité',
intitule: "La vérité est-elle du côté du pouvoir ?",
piste1: "Le pouvoir impose-t-il sa propre version de la vérité ?",
piste2: "ou la vérité est-elle ce qui permet de critiquer et de limiter le pouvoir ?",
racine1: "La vérité est-elle l'arme des dominants pour légitimer leur domination ?",
racine2: "ou la recherche de la vérité est-elle un acte de résistance au pouvoir ?",
enjeu: "Analyser les relations entre vérité et pouvoir."
},
{
id: 1626,
notion: 'vérité',
intitule: "La vérité est-elle du côté de la violence ?",
piste1: "Imposer la vérité, n'est-ce pas faire violence à ceux qui pensent autrement ?",
piste2: "ou la vérité est-elle ce qui permet de dénoncer la violence ?",
racine1: "Toute prétention à la vérité absolue ne mène-t-elle pas au fanatisme ?",
racine2: "ou le refus de nommer la vérité est-il une complicité avec la violence ?",
enjeu: "Examiner le rapport entre vérité et violence."
},
{
id: 1627,
notion: 'vérité',
intitule: "La vérité est-elle du côté de la raison ?",
piste1: "Seule la raison est-elle capable d'atteindre la vérité ?",
piste2: "ou d'autres facultés (intuition, sentiment, foi) y ont-elles accès ?",
racine1: "La vérité rationnelle est-elle la seule forme de vérité légitime ?",
racine2: "ou la raison a-t-elle des limites que d'autres formes de vérité dépassent ?",
enjeu: "Déterminer le monopole ou non de la raison sur la vérité."
},
{
id: 1628,
notion: 'vérité',
intitule: "La vérité est-elle du côté de la science ?",
piste1: "La science est-elle la seule entreprise humaine qui produise des vérités ?",
piste2: "ou la vérité scientifique est-elle toujours provisoire et hypothétique ?",
racine1: "Le savoir scientifique est-il le modèle de toute vérité ?",
racine2: "ou la science ne produit-elle que des modèles utiles, sans accéder à la vérité ultime ?",
enjeu: "Examiner le statut de la vérité scientifique."
},
{
id: 1629,
notion: 'vérité',
intitule: "La science a-t-elle le monopole de la vérité ?",
piste1: "Hors de la science, n'y a-t-il point de vérité, seulement des opinions ?",
piste2: "ou la philosophie, l'art et la morale ont-ils leur propre régime de vérité ?",
racine1: "Le scientisme est-il la seule position rationnelle ?",
racine2: "ou la vérité est-elle pluridimensionnelle ?",
enjeu: "Défendre ou critiquer le monopole scientifique de la vérité."
},
{
id: 1630,
notion: 'vérité',
intitule: "L'art dit-il la vérité ?",
piste1: "L'œuvre d'art nous dévoile-t-elle une vérité sur le monde que la science ignore ?",
piste2: "ou l'art n'est-il qu'un jeu de fictions, par définition étranger à la vérité ?",
racine1: "L'art a-t-il une fonction cognitive et de dévoilement (Heidegger) ?",
racine2: "ou l'art est-il du côté de l'illusion et de l'apparence ?",
enjeu: "Examiner la prétention de l'art à la vérité."
},
{
id: 1631,
notion: 'vérité',
intitule: "La fiction est-elle contraire à la vérité ?",
piste1: "La fiction est-elle un mensonge organisé ?",
piste2: "ou peut-elle exprimer une vérité plus profonde que les faits bruts ?",
racine1: "La vérité se réduit-elle à l'exactitude factuelle ?",
racine2: "ou la fiction est-elle un moyen privilégié d'accès à la vérité humaine ?",
enjeu: "Déterminer le rapport entre fiction et vérité."
},
{
id: 1632,
notion: 'vérité',
intitule: "La vérité est-elle dans les mots ou dans les choses ?",
piste1: "La vérité est-elle une propriété du langage (énoncé) ?",
piste2: "ou est-elle une propriété des choses elles-mêmes ?",
racine1: "Seuls les énoncés peuvent-ils être vrais ou faux ?",
racine2: "ou les choses peuvent-elles être 'vraies' en étant conformes à leur essence ?",
enjeu: "Déterminer le lieu de la vérité (logique ou ontologique)."
},
{
id: 1633,
notion: 'vérité',
intitule: "Le langage peut-il exprimer la vérité ?",
piste1: "Le langage est-il un outil adéquat pour saisir et transmettre la vérité ?",
piste2: "ou trahit-il et déforme-t-il inévitablement ce qu'il prétend dire ?",
racine1: "Le langage est-il transparent à la réalité ?",
racine2: "ou le langage est-il un système de signes qui nous sépare du réel ?",
enjeu: "Examiner les capacités et les limites du langage face à la vérité."
},
{
id: 1634,
notion: 'vérité',
intitule: "La vérité est-elle un dévoilement ?",
piste1: "La vérité est-elle ce qui était caché et qui apparaît à la lumière (alètheia) ?",
piste2: "ou est-elle une construction active de l'esprit ?",
racine1: "La vérité est-elle un processus de sortie de l'oubli ou du voile ?",
racine2: "ou la vérité est-elle un produit de la méthode et du travail conceptuel ?",
enjeu: "Confronter la conception de la vérité comme dévoilement et comme construction."
},
{
id: 1635,
notion: 'vérité',
intitule: "La vérité est-elle une conquête ?",
piste1: "La vérité s'obtient-elle par un effort méthodique et une lutte contre l'erreur ?",
piste2: "ou est-elle un don, une intuition ou une grâce ?",
racine1: "La vérité est-elle le résultat d'un travail rationnel ?",
racine2: "ou l'accès à la vérité est-il une expérience passive et immédiate ?",
enjeu: "Déterminer le rôle de l'effort et de la méthode dans l'accès à la vérité."
},
{
id: 1636,
notion: 'vérité',
intitule: "La vérité est-elle une fin en soi ?",
piste1: "La vérité doit-elle être recherchée pour elle-même, quelle qu'en soit la conséquence ?",
piste2: "ou doit-elle être subordonnée à des fins pratiques, morales ou politiques ?",
racine1: "La volonté de vérité est-elle inconditionnelle ?",
racine2: "ou la vérité n'a-t-elle de valeur que par ses effets ?",
enjeu: "Examiner la valeur intrinsèque de la vérité."
},
{
id: 1637,
notion: 'vérité',
intitule: "Peut-on vivre sans vérité ?",
piste1: "Une vie humaine est-elle possible sans aucune croyance tenue pour vraie ?",
piste2: "ou l'homme peut-il s'accommoder d'un relativisme ou d'un scepticisme total ?",
racine1: "La vérité est-elle une condition de possibilité de l'action et de la vie sociale ?",
racine2: "ou l'illusion est-elle une composante vitale de l'existence ?",
enjeu: "Déterminer la nécessité vitale de la vérité."
},
{
id: 1638,
notion: 'vérité',
intitule: "La vérité est-elle une exigence morale ?",
piste1: "Chercher et dire la vérité est-il un devoir envers soi-même et envers autrui ?",
piste2: "ou la vérité est-elle une question de connaissance, indifférente à la morale ?",
racine1: "Le mensonge est-il d'abord une faute morale avant d'être une erreur logique ?",
racine2: "ou la vérité est-elle neutre moralement, seul son usage étant moral ou immoral ?",
enjeu: "Examiner la dimension éthique de la vérité."
},
{
id: 1639,
notion: 'vérité',
intitule: "La vérité est-elle une question de foi ?",
piste1: "Certaines vérités ne sont-elles accessibles que par la croyance et la révélation ?",
piste2: "ou la foi est-elle par définition l'abandon de la prétention à la vérité rationnelle ?",
racine1: "La vérité religieuse est-elle d'un ordre différent de la vérité rationnelle ?",
racine2: "ou la foi doit-elle être soumise au tribunal de la raison ?",
enjeu: "Déterminer le rapport entre vérité et foi."
},
{
id: 1640,
notion: 'vérité',
intitule: "La vérité est-elle une question d'expérience ?",
piste1: "La vérité se trouve-t-elle dans l'expérience sensible et le vécu ?",
piste2: "ou l'expérience est-elle trompeuse et la vérité réside-t-elle dans les idées ?",
racine1: "L'empirisme a-t-il raison de faire de l'expérience la source de toute vérité ?",
racine2: "ou l'expérience n'est-elle qu'un point de départ que la raison doit dépasser ?",
enjeu: "Examiner le rôle de l'expérience dans la fondation de la vérité."
},
{
id: 1641,
notion: 'vérité',
intitule: "La vérité est-elle une question de méthode ?",
piste1: "La vérité est-elle le produit d'une méthode rigoureuse et universelle ?",
piste2: "ou la méthode n'est-elle qu'un outil qui ne garantit pas la vérité du résultat ?",
racine1: "Une bonne méthode suffit-elle à produire la vérité ?",
racine2: "ou la vérité dépend-elle aussi de l'intuition et du génie ?",
enjeu: "Déterminer le rôle de la méthode dans l'accès à la vérité."
},
{
id: 1642,
notion: 'vérité',
intitule: "La vérité est-elle une question de temps ?",
piste1: "La vérité a-t-elle besoin de temps pour se révéler et s'imposer ?",
piste2: "ou la vérité est-elle intemporelle et immédiate ?",
racine1: "Le temps est-il le juge suprême de la vérité (veritas temporis filia) ?",
racine2: "ou la vérité est-elle indépendante du temps qui passe ?",
enjeu: "Examiner le rapport entre vérité et temporalité."
},
{
id: 1643,
notion: 'vérité',
intitule: "La vérité est-elle une question de mémoire ?",
piste1: "La vérité est-elle la fidélité au passé et la conservation du souvenir ?",
piste2: "ou la mémoire est-elle sélective et déformante, ennemie de la vérité ?",
racine1: "La vérité historique dépend-elle de la mémoire ?",
racine2: "ou la vérité exige-t-elle parfois l'oubli pour construire l'avenir ?",
enjeu: "Déterminer le rapport entre vérité et mémoire."
},
{
id: 1644,
notion: 'vérité',
intitule: "La vérité est-elle une question de justice ?",
piste1: "La recherche de la vérité est-elle une exigence de justice (ex: dans un procès) ?",
piste2: "ou la vérité peut-elle être injuste et la justice exiger parfois de taire la vérité ?",
racine1: "La vérité est-elle la condition de la justice ?",
racine2: "ou la justice et la vérité entrent-elles parfois en conflit ?",
enjeu: "Examiner les liens et les tensions entre vérité et justice."
},
{
id: 1645,
notion: 'vérité',
intitule: "La vérité est-elle une question de liberté ?",
piste1: "La liberté de pensée est-elle la condition nécessaire de l'accès à la vérité ?",
piste2: "ou la vérité, une fois connue, s'impose-t-elle à la liberté et la limite ?",
racine1: "On ne peut chercher la vérité que si l'on est libre de la trouver ?",
racine2: "ou la vérité est-elle une nécessité qui s'oppose à l'arbitraire de la liberté ?",
enjeu: "Déterminer le rapport entre vérité et liberté."
},
{
id: 1646,
notion: 'vérité',
intitule: "La vérité est-elle une question de pouvoir ?",
piste1: "La vérité est-elle un instrument au service du pouvoir ?",
piste2: "ou le pouvoir est-il une illusion que la vérité dissipe ?",
racine1: "La vérité est-elle produite par les mécanismes de pouvoir ?",
racine2: "ou la vérité est-elle ce qui résiste et critique le pouvoir ?",
enjeu: "Analyser la relation de la vérité avec le pouvoir."
},
{
id: 1647,
notion: 'vérité',
intitule: "La vérité est-elle une question de vie ?",
piste1: "La vérité doit-elle servir la vie et son affirmation (Nietzsche) ?",
piste2: "ou la vérité est-elle parfois mortifère et hostile à la vie ?",
racine1: "La volonté de vérité est-elle une forme de la volonté de puissance ?",
racine2: "ou la vérité est-elle un idéal qui nous arrache à la simple vie biologique ?",
enjeu: "Examiner le rapport entre vérité et vie."
},
{
id: 1648,
notion: 'vérité',
intitule: "La vérité est-elle une question de désir ?",
piste1: "Cherchons-nous la vérité parce que nous la désirons ?",
piste2: "ou le désir nous éloigne-t-il de la vérité en nous faisant préférer l'illusion ?",
racine1: "La volonté de vérité est-elle une forme de désir ?",
racine2: "ou le désir est-il par essence aveugle à la vérité ?",
enjeu: "Déterminer le rôle du désir dans la quête de la vérité."
},
{
id: 1649,
notion: 'vérité',
intitule: "La vérité est-elle une question de corps ?",
piste1: "La vérité est-elle accessible par l'expérience corporelle et sensible ?",
piste2: "ou le corps est-il une source d'erreur qui éloigne l'esprit de la vérité ?",
racine1: "Le corps est-il un obstacle à la vérité (platonisme) ?",
racine2: "ou la vérité est-elle incarnée et vécue à travers le corps ?",
enjeu: "Examiner le rapport entre vérité et corporéité."
},
{
id: 1650,
notion: 'vérité',
intitule: "La vérité est-elle une question d'inconscient ?",
piste1: "La vérité de l'homme réside-t-elle dans son inconscient, cachée à sa conscience ?",
piste2: "ou l'inconscient est-il par définition le lieu de l'illusion et du refoulement ?",
racine1: "La vérité du sujet est-elle une vérité inconsciente à déchiffrer ?",
racine2: "ou la vérité est-elle par essence ce qui se montre à la conscience ?",
enjeu: "Déterminer le rapport entre vérité et inconscient."
},
{
id: 1651,
notion: 'vérité',
intitule: "La vérité est-elle une question d'interprétation ?",
piste1: "N'y a-t-il pas de faits, seulement des interprétations (Nietzsche) ?",
piste2: "ou l'interprétation suppose-t-elle un fait vrai qu'elle cherche à comprendre ?",
racine1: "La vérité est-elle toujours relative à un point de vue interprétatif ?",
racine2: "ou existe-t-il une interprétation vraie qui épuise le sens du réel ?",
enjeu: "Examiner la thèse de l'interprétation universelle et ses limites."
},
{
id: 1652,
notion: 'vérité',
intitule: "La vérité est-elle une question de perspective ?",
piste1: "La vérité dépend-elle du point de vue d'où l'on regarde les choses ?",
piste2: "ou la vérité est-elle ce qui reste quand on élimine toutes les perspectives ?",
racine1: "La vérité est-elle la somme de toutes les perspectives possibles ?",
racine2: "ou la vérité est-elle le point de vue de nulle part (vue de Dieu) ?",
enjeu: "Déterminer le rôle de la perspective dans la constitution de la vérité."
},
{
id: 1653,
notion: 'vérité',
intitule: "La vérité est-elle une question d'histoire ?",
piste1: "La vérité est-elle le produit d'une époque et appelée à être dépassée ?",
piste2: "ou la vérité est-elle ce qui résiste à l'histoire et la juge ?",
racine1: "La vérité est-elle historique et relative à son temps ?",
racine2: "ou la vérité est-elle intemporelle et s'impose à toutes les époques ?",
enjeu: "Examiner le rapport entre vérité et historicité."
},
{
id: 1654,
notion: 'vérité',
intitule: "La vérité est-elle une question de culture ?",
piste1: "Chaque culture a-t-elle sa propre vérité, incommensurable avec les autres ?",
piste2: "ou la vérité est-elle ce qui permet le dialogue et la traduction entre les cultures ?",
racine1: "La vérité est-elle un produit culturel relatif ?",
racine2: "ou la vérité est-elle universelle et transcende les cultures ?",
enjeu: "Déterminer le rapport entre vérité et diversité culturelle."
},
{
id: 1655,
notion: 'vérité',
intitule: "La vérité est-elle une question de langage ?",
piste1: "La vérité est-elle une propriété des énoncés bien formés ?",
piste2: "ou le langage est-il un obstacle qui nous empêche d'atteindre la vérité des choses ?",
racine1: "La vérité est-elle un problème logique et sémantique ?",
racine2: "ou la vérité est-elle une expérience qui précède et excède le langage ?",
enjeu: "Examiner le rôle du langage dans la formulation et l'accès à la vérité."
},
{
id: 1656,
notion: 'vérité',
intitule: "La vérité est-elle une question de silence ?",
piste1: "La vérité ultime est-elle indicible et ne peut être approchée que par le silence ?",
piste2: "ou le silence est-il l'absence de vérité, qui exige au contraire la parole ?",
racine1: "Le langage trahit-il la vérité en la formulant ?",
racine2: "ou la vérité n'existe-t-elle que dans la mesure où elle est dite et partagée ?",
enjeu: "Déterminer le rapport entre vérité et silence."
},
{
id: 1657,
notion: 'vérité',
intitule: "La vérité est-elle une question de beauté ?",
piste1: "Le vrai et le beau sont-ils liés, la vérité ayant une harmonie esthétique ?",
piste2: "ou la vérité est-elle souvent laide, rude et dépourvue de toute grâce ?",
racine1: "La beauté est-elle l'éclat du vrai (Verum est index sui et falsi) ?",
racine2: "ou la vérité est-elle indépendante de toute considération esthétique ?",
enjeu: "Examiner le rapport entre vérité et beauté."
},
{
id: 1658,
notion: 'vérité',
intitule: "La vérité est-elle une question de bonté ?",
piste1: "Le vrai et le bien sont-ils convertibles, la vérité étant une forme de bien ?",
piste2: "ou la vérité peut-elle être mauvaise, nuisible et destructrice ?",
racine1: "Connaître la vérité, est-ce nécessairement devenir meilleur ?",
racine2: "ou la vérité est-elle moralement neutre, seul son usage étant bon ou mauvais ?",
enjeu: "Déterminer le rapport entre vérité et bonté."
},
{
id: 1659,
notion: 'vérité',
intitule: "La vérité est-elle une question de simplicité ?",
piste1: "La vérité est-elle simple, claire et accessible à tous ?",
piste2: "ou est-elle complexe, obscure et réservée à une élite ?",
racine1: "La simplicité est-elle un critère de vérité (rasoir d'Ockham) ?",
racine2: "ou la simplicité est-elle une réduction trompeuse de la complexité du réel ?",
enjeu: "Examiner le rapport entre vérité et simplicité."
},
{
id: 1660,
notion: 'vérité',
intitule: "La vérité est-elle une question de complexité ?",
piste1: "La vérité du monde est-elle fondamentalement complexe et ne peut être saisie que dans ses nuances ?",
piste2: "ou la complexité est-elle un signe de confusion et d'erreur ?",
racine1: "La vérité exige-t-elle de penser la multiplicité et les contradictions ?",
racine2: "ou la vérité est-elle l'unité qui résout la complexité ?",
enjeu: "Déterminer le rapport entre vérité et complexité."
},
{
id: 1661,
notion: 'vérité',
intitule: "La vérité est-elle une question de totalité ?",
piste1: "La vérité n'est-elle que dans le tout, chaque partie n'étant vraie que par rapport à l'ensemble ?",
piste2: "ou peut-il y avoir des vérités partielles et isolées ?",
racine1: "Le vrai est le tout (Hegel) ?",
racine2: "ou la connaissance de la totalité est-elle impossible à l'esprit fini ?",
enjeu: "Examiner le rapport entre vérité et totalité."
},
{
id: 1662,
notion: 'vérité',
intitule: "La vérité est-elle une question de détail ?",
piste1: "La vérité réside-t-elle dans les détails et la précision des faits ?",
piste2: "ou le détail est-il trompeur et la vérité est-elle dans la vue d'ensemble ?",
racine1: "L'exactitude factuelle est-elle la condition de la vérité ?",
racine2: "ou le détail est-il une distraction qui empêche de voir la vérité essentielle ?",
enjeu: "Déterminer le rapport entre vérité et détail."
},
{
id: 1663,
notion: 'vérité',
intitule: "La vérité est-elle une question de preuve ?",
piste1: "Une affirmation n'est-elle vraie que si elle peut être prouvée ?",
piste2: "ou existe-t-il des vérités qui se passent de preuve (vérités premières) ?",
racine1: "La preuve est-elle la condition sine qua non de la vérité ?",
racine2: "ou la preuve suppose-t-elle déjà des vérités admises sans preuve ?",
enjeu: "Examiner le rôle de la preuve dans l'établissement de la vérité."
},
{
id: 1664,
notion: 'vérité',
intitule: "La vérité est-elle une question de démonstration ?",
piste1: "La vérité ne s'obtient-elle que par des raisonnements démonstratifs rigoureux ?",
piste2: "ou la démonstration n'est-elle qu'un outil parmi d'autres pour atteindre la vérité ?",
racine1: "La démonstration est-elle le modèle suprême de la vérité ?",
racine2: "ou la démonstration ne fait-elle qu'expliciter ce qui est déjà contenu dans les prémisses ?",
enjeu: "Déterminer la place de la démonstration dans l'accès à la vérité."
},
{
id: 1665,
notion: 'vérité',
intitule: "La vérité est-elle une question d'intuition ?",
piste1: "La vérité est-elle saisie de manière immédiate et directe par l'intuition ?",
piste2: "ou l'intuition est-elle une source d'erreur qu'il faut soumettre à la raison ?",
racine1: "L'intuition est-elle une forme de connaissance supérieure et infaillible ?",
racine2: "ou l'intuition n'est-elle qu'un sentiment subjectif sans valeur de vérité ?",
enjeu: "Examiner le rôle de l'intuition dans la connaissance de la vérité."
},
{
id: 1666,
notion: 'vérité',
intitule: "La vérité est-elle une question de sentiment ?",
piste1: "Le sentiment de vérité (sentiment de la vérité) est-il un guide fiable ?",
piste2: "ou le sentiment est-il par essence étranger à l'ordre de la vérité ?",
racine1: "Le cœur a-t-il ses vérités que la raison ne connaît point ?",
racine2: "ou le sentiment est-il un obstacle à l'objectivité de la vérité ?",
enjeu: "Déterminer le rapport entre vérité et sentiment."
},
{
id: 1667,
notion: 'vérité',
intitule: "La vérité est-elle une question de foi ?",
piste1: "La foi est-elle une forme d'adhésion à la vérité sans preuve rationnelle ?",
piste2: "ou la foi est-elle l'abandon de la prétention à la vérité ?",
racine1: "La vérité religieuse est-elle une vérité de foi, distincte de la vérité de raison ?",
racine2: "ou la foi doit-elle être éclairée et fondée par la raison pour être une vérité ?",
enjeu: "Examiner le rapport entre vérité et foi."
},
{
id: 1668,
notion: 'vérité',
intitule: "La vérité est-elle une question de tradition ?",
piste1: "La vérité nous est-elle transmise par la tradition et l'autorité des anciens ?",
piste2: "ou la tradition est-elle un amas d'erreurs qu'il faut critiquer par la raison ?",
racine1: "La tradition est-elle un réservoir de vérités éprouvées par le temps ?",
racine2: "ou la vérité exige-t-elle de rompre avec la tradition pour penser par soi-même ?",
enjeu: "Déterminer le rapport entre vérité et tradition."
},
{
id: 1669,
notion: 'vérité',
intitule: "La vérité est-elle une question d'autorité ?",
piste1: "La vérité est-elle ce que dit l'autorité compétente (savant, Église, État) ?",
piste2: "ou l'autorité est-elle un obstacle à la recherche libre de la vérité ?",
racine1: "L'argument d'autorité a-t-il une valeur de vérité ?",
racine2: "ou la vérité est-elle ce qui s'impose par sa propre évidence, indépendamment de l'autorité ?",
enjeu: "Examiner le rapport entre vérité et autorité."
},
{
id: 1670,
notion: 'vérité',
intitule: "La vérité est-elle une question de dialogue ?",
piste1: "La vérité émerge-t-elle de la confrontation et du dialogue entre des points de vue différents ?",
piste2: "ou la vérité est-elle une découverte solitaire de l'esprit ?",
racine1: "Le dialogue est-il la méthode privilégiée pour atteindre la vérité (dialectique) ?",
racine2: "ou le dialogue n'est-il qu'un échange d'opinions qui n'atteint pas la vérité ?",
enjeu: "Déterminer le rôle du dialogue dans la recherche de la vérité."
},
{
id: 1671,
notion: 'vérité',
intitule: "La vérité est-elle une question de conflit ?",
piste1: "La vérité se conquiert-elle dans la lutte et la contradiction ?",
piste2: "ou la vérité est-elle harmonie et résolution des conflits ?",
racine1: "La contradiction est-elle le moteur de l'accès à la vérité (dialectique) ?",
racine2: "ou la contradiction est-elle le signe de l'erreur et de l'absence de vérité ?",
enjeu: "Examiner le rôle du conflit dans la dynamique de la vérité."
},
{
id: 1672,
notion: 'vérité',
intitule: "La vérité est-elle une question de paradoxe ?",
piste1: "La vérité profonde est-elle souvent paradoxale et contre-intuitive ?",
piste2: "ou le paradoxe est-il le signe d'une pensée confuse qui n'a pas atteint la vérité ?",
racine1: "Le paradoxe est-il une étape nécessaire vers une vérité plus haute ?",
racine2: "ou la vérité est-elle toujours non-contradictoire et claire ?",
enjeu: "Déterminer le rapport entre vérité et paradoxe."
},
{
id: 1673,
notion: 'vérité',
intitule: "La vérité est-elle une question d'énigme ?",
piste1: "Le réel est-il une énigme dont la vérité serait la solution ?",
piste2: "ou la vérité est-elle elle-même une énigme qui ne se laisse pas résoudre ?",
racine1: "La vérité est-elle ce qui dissipe le mystère ?",
racine2: "ou la vérité est-elle ce qui approfondit le mystère ?",
enjeu: "Examiner le rapport entre vérité et mystère."
},
{
id: 1674,
notion: 'vérité',
intitule: "La vérité est-elle une question de jeu ?",
piste1: "La recherche de la vérité est-elle un jeu de l'esprit sans conséquence réelle ?",
piste2: "ou la vérité est-elle un enjeu sérieux et vital ?",
racine1: "La vérité est-elle une construction ludique de l'esprit ?",
racine2: "ou la vérité est-elle ce qui s'impose sérieusement à nous ?",
enjeu: "Déterminer le rapport entre vérité et jeu."
},
{
id: 1675,
notion: 'vérité',
intitule: "La vérité est-elle une question d'artifice ?",
piste1: "La vérité est-elle toujours brute et naturelle, l'artifice étant du côté du faux ?",
piste2: "ou la vérité est-elle parfois une construction artificielle nécessaire pour comprendre le réel ?",
racine1: "L'artifice est-il un voile qui cache la vérité ?",
racine2: "ou l'artifice (modèle, théorie) est-il le seul moyen d'accéder à la vérité ?",
enjeu: "Examiner le rapport entre vérité et artifice."
},
{
id: 1676,
notion: 'vérité',
intitule: "La vérité est-elle une question de nature ?",
piste1: "La vérité est-elle conforme à la nature et à ses lois ?",
piste2: "ou la vérité est-elle une construction de l'esprit qui s'oppose à la nature ?",
racine1: "La vérité est-elle la conformité à l'ordre naturel ?",
racine2: "ou la vérité est-elle la capacité de l'esprit à s'arracher à l'ordre naturel ?",
enjeu: "Déterminer le rapport entre vérité et nature."
},
{
id: 1677,
notion: 'vérité',
intitule: "La vérité est-elle une question de technique ?",
piste1: "La technique nous permet-elle d'accéder à des vérités qui nous étaient cachées ?",
piste2: "ou la technique déforme-t-elle la vérité en ne montrant que ce qui est mesurable ?",
racine1: "La technique est-elle un organe de perception de la vérité ?",
racine2: "ou la technique est-elle un filtre qui réduit la vérité à l'utile ?",
enjeu: "Examiner le rapport entre vérité et technique."
},
{
id: 1678,
notion: 'vérité',
intitule: "La vérité est-elle une question de politique ?",
piste1: "La vérité est-elle un enjeu de pouvoir et de domination dans la cité ?",
piste2: "ou la politique doit-elle être soumise à l'exigence de vérité ?",
racine1: "La vérité est-elle un instrument de la politique ?",
racine2: "ou la politique sans vérité est-elle une tyrannie ou une démagogie ?",
enjeu: "Déterminer le rapport entre vérité et politique."
},
{
id: 1679,
notion: 'vérité',
intitule: "La vérité est-elle une question d'éducation ?",
piste1: "La vérité s'enseigne-t-elle comme un savoir à transmettre ?",
piste2: "ou l'éducation doit-elle seulement apprendre à chercher la vérité par soi-même ?",
racine1: "La vérité est-elle un contenu à inculquer ?",
racine2: "ou la vérité est-elle une méthode et une attitude à former ?",
enjeu: "Examiner le rapport entre vérité et éducation."
},
{
id: 1680,
notion: 'vérité',
intitule: "La vérité est-elle une question de sagesse ?",
piste1: "La vérité est-elle le but ultime de la sagesse philosophique ?",
piste2: "ou la sagesse consiste-t-elle à accepter que la vérité absolue nous échappe ?",
racine1: "Le sage est-il celui qui possède la vérité ?",
racine2: "ou le sage est-il celui qui sait qu'il ne sait rien (Socrate) ?",
enjeu: "Déterminer le rapport entre vérité et sagesse."
},
{
id: 1681,
notion: 'vérité',
intitule: "La vérité est-elle une question de philosophie ?",
piste1: "La philosophie est-elle la seule discipline qui recherche la vérité pour elle-même ?",
piste2: "ou la philosophie est-elle condamnée à ne produire que des opinions ?",
racine1: "La philosophie est-elle l'amour et la recherche de la vérité ?",
racine2: "ou la philosophie est-elle un discours sans vérité objective ?",
enjeu: "Examiner le rapport entre philosophie et vérité."
},
{
id: 1682,
notion: 'vérité',
intitule: "La vérité est-elle une question de finitude ?",
piste1: "La vérité est-elle inaccessible à l'homme en raison de sa finitude ?",
piste2: "ou la finitude est-elle la condition même de l'accès à la vérité ?",
racine1: "Seul un esprit infini (Dieu) peut-il posséder la vérité absolue ?",
racine2: "ou la vérité humaine est-elle une vérité finie, mais authentique ?",
enjeu: "Déterminer le rapport entre vérité et finitude humaine."
},
{
id: 1683,
notion: 'vérité',
intitule: "La vérité est-elle une question de mort ?",
piste1: "La vérité est-elle ce qui survit à la mort et à l'oubli ?",
piste2: "ou la mort est-elle la vérité ultime qui annule toutes les autres vérités ?",
racine1: "La vérité est-elle une forme d'immortalité ?",
racine2: "ou la vérité est-elle l'aveu de notre condition mortelle ?",
enjeu: "Examiner le rapport entre vérité et mort."
},
{
id: 1684,
notion: 'vérité',
intitule: "La vérité est-elle une question de vie ?",
piste1: "La vérité est-elle ce qui permet de mieux vivre et d'affirmer la vie ?",
piste2: "ou la vérité est-elle indifférente à la vie, voire destructrice pour elle ?",
racine1: "La vérité est-elle au service de la vie ?",
racine2: "ou la vie est-elle au service de la vérité ?",
enjeu: "Déterminer le rapport entre vérité et vie."
},
{
id: 1685,
notion: 'vérité',
intitule: "La vérité est-elle une question de langage ?",
piste1: "La vérité est-elle une propriété du langage et des énoncés ?",
piste2: "ou la vérité est-elle une propriété des choses que le langage tente de saisir ?",
racine1: "La vérité est-elle une question de sémantique et de logique ?",
racine2: "ou la vérité est-elle une question ontologique ?",
enjeu: "Examiner le lieu de la vérité (langage ou réalité)."
},
{
id: 1686,
notion: 'vérité',
intitule: "La vérité est-elle une question de sujet ?",
piste1: "La vérité suppose-t-elle un sujet qui la pense et l'énonce ?",
piste2: "ou la vérité existe-t-elle en soi, indépendamment de tout sujet ?",
racine1: "La vérité est-elle une relation entre un sujet et un objet ?",
racine2: "ou la vérité est-elle une propriété de l'objet seul ?",
enjeu: "Déterminer le rôle du sujet dans la constitution de la vérité."
},
{
id: 1687,
notion: 'vérité',
intitule: "La vérité est-elle une question d'objet ?",
piste1: "La vérité est-elle la conformité de la pensée à l'objet ?",
piste2: "ou l'objet est-il constitué par la pensée qui le vise ?",
racine1: "L'objet est-il la mesure de la vérité de la pensée ?",
racine2: "ou la pensée est-elle la mesure de la vérité de l'objet ?",
enjeu: "Examiner le rôle de l'objet dans la vérité."
},
{
id: 1688,
notion: 'vérité',
intitule: "La vérité est-elle une question de relation ?",
piste1: "La vérité est-elle une relation d'adéquation entre deux termes (pensée et chose) ?",
piste2: "ou la vérité est-elle une propriété absolue d'un seul terme ?",
racine1: "La vérité est-elle essentiellement relationnelle ?",
racine2: "ou la vérité est-elle substantielle ?",
enjeu: "Déterminer la nature relationnelle ou substantielle de la vérité."
},
{
id: 1689,
notion: 'vérité',
intitule: "La vérité est-elle une question de processus ?",
piste1: "La vérité est-elle un résultat statique et acquis ?",
piste2: "ou la vérité est-elle un processus dynamique de recherche et de vérification ?",
racine1: "La vérité est-elle un état ou une activité ?",
racine2: "ou la vérité est-elle le mouvement même de la pensée vers le réel ?",
enjeu: "Examiner le caractère statique ou dynamique de la vérité."
},
{
id: 1690,
notion: 'vérité',
intitule: "La vérité est-elle une question de résultat ?",
piste1: "Seul le résultat compte pour juger de la vérité d'une démarche ?",
piste2: "ou la démarche elle-même a-t-elle une valeur de vérité, indépendamment du résultat ?",
racine1: "La vérité est-elle dans la réussite de l'entreprise de connaissance ?",
racine2: "ou la vérité est-elle dans la rigueur de la méthode, même si elle échoue ?",
enjeu: "Déterminer le rapport entre vérité et résultat."
},
{
id: 1691,
notion: 'vérité',
intitule: "La vérité est-elle une question de méthode ?",
piste1: "La vérité est-elle garantie par l'application stricte d'une méthode ?",
piste2: "ou la méthode n'est-elle qu'un guide qui ne garantit pas la vérité ?",
racine1: "La méthode est-elle la condition suffisante de la vérité ?",
racine2: "ou la vérité exige-t-elle aussi de l'intuition et du génie ?",
enjeu: "Examiner le rôle de la méthode dans l'accès à la vérité."
},
{
id: 1692,
notion: 'vérité',
intitule: "La vérité est-elle une question de critère ?",
piste1: "Existe-t-il un critère infaillible pour reconnaître la vérité ?",
piste2: "ou tout critère est-il lui-même sujet à discussion et à erreur ?",
racine1: "L'évidence, l'utilité ou la cohérence sont-elles des critères suffisants de vérité ?",
racine2: "ou la recherche d'un critère de la vérité est-elle une régression à l'infini ?",
enjeu: "Déterminer la possibilité d'un critère de la vérité."
},
{
id: 1693,
notion: 'vérité',
intitule: "La vérité est-elle une question de valeur ?",
piste1: "La vérité est-elle une valeur suprême qui guide toutes les autres ?",
piste2: "ou la vérité est-elle une valeur parmi d'autres, parfois en conflit avec elles ?",
racine1: "La vérité a-t-elle une valeur inconditionnelle ?",
racine2: "ou la vérité doit-elle être subordonnée à la justice, au bonheur ou à la vie ?",
enjeu: "Examiner le statut axiologique de la vérité."
},
{
id: 1694,
notion: 'vérité',
intitule: "La vérité est-elle une question de volonté ?",
piste1: "Vouloir la vérité est-il la condition pour la trouver ?",
piste2: "ou la volonté de vérité est-elle une illusion qui masque d'autres motivations ?",
racine1: "La vérité est-elle le fruit d'une volonté de connaître ?",
racine2: "ou la volonté de vérité est-elle une forme de volonté de puissance (Nietzsche) ?",
enjeu: "Déterminer le rôle de la volonté dans la quête de la vérité."
},
{
id: 1695,
notion: 'vérité',
intitule: "La vérité est-elle une question de hasard ?",
piste1: "La vérité est-elle parfois découverte par hasard, sans méthode ni intention ?",
piste2: "ou le hasard n'est-il qu'une apparence, la vérité étant toujours le fruit d'un travail ?",
racine1: "La sérendipité est-elle une voie légitime d'accès à la vérité ?",
racine2: "ou le hasard ne favorise-t-il que les esprits préparés (Pasteur) ?",
enjeu: "Examiner le rôle du hasard dans la découverte de la vérité."
},
{
id: 1696,
notion: 'vérité',
intitule: "La vérité est-elle une question de travail ?",
piste1: "La vérité s'obtient-elle uniquement par un travail long et pénible de l'esprit ?",
piste2: "ou la vérité peut-elle être donnée dans une illumination soudaine ?",
racine1: "La vérité est-elle le produit d'un effort méthodique ?",
racine2: "ou la vérité est-elle une grâce qui survient quand on ne l'attend pas ?",
enjeu: "Déterminer le rôle du travail dans l'accès à la vérité."
},
{
id: 1697,
notion: 'vérité',
intitule: "La vérité est-elle une question de patience ?",
piste1: "La vérité exige-t-elle du temps et de la patience pour se révéler ?",
piste2: "ou la vérité est-elle immédiate et ne supporte-t-elle aucun délai ?",
racine1: "La précipitation est-elle l'ennemie de la vérité ?",
racine2: "ou la vérité est-elle ce qui doit être saisi sur le vif ?",
enjeu: "Examiner le rapport entre vérité et patience."
},
{
id: 1698,
notion: 'vérité',
intitule: "La vérité est-elle une question de courage ?",
piste1: "Dire et chercher la vérité exige-t-il du courage face à l'adversité et au mensonge ?",
piste2: "ou la vérité est-elle une affaire de raison froide, sans rapport avec le courage ?",
racine1: "La vérité est-elle une vertu qui exige du courage (parrêsia) ?",
racine2: "ou la vérité est-elle une nécessité logique qui s'impose sans effort ?",
enjeu: "Déterminer le rapport entre vérité et courage."
},
{
id: 1699,
notion: 'vérité',
intitule: "La vérité est-elle une question de liberté ?",
piste1: "La liberté de penser est-elle la condition absolue de l'accès à la vérité ?",
piste2: "ou la vérité, une fois connue, s'impose-t-elle à la liberté et la détermine ?",
racine1: "La vérité est-elle le fruit de la liberté de l'esprit ?",
racine2: "ou la vérité est-elle une nécessité qui libère en nous soumettant à elle ?",
enjeu: "Examiner le rapport entre vérité et liberté."
},
{
id: 1700,
notion: 'vérité',
intitule: "La vérité peut-elle se définir ?",
piste1: "Peut-on donner une définition unique et universelle de la vérité ?",
piste2: "ou la vérité est-elle un concept ouvert, pluriel et essentiellement contesté ?",
racine1: "La vérité a-t-elle une essence stable que la philosophie peut saisir ?",
racine2: "ou la vérité est-elle ce qui échappe à toute définition, étant la condition de toute définition ?",
enjeu: "Interroger la possibilité et les limites d'une définition philosophique de la vérité."
}
];