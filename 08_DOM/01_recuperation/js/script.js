/*
    DOM : Document Object Model 
        Il permet d'acceder aux différents élements de la page (document) 
        grâce au langage Javascript
        Le DOM va representer notre page HTML sous forme d'objet Javascript 
*/

//Point de depart du DOM, represente notre page web
console.log(document);

//La propriété body retourne le noeud representant l'élément body
console.log(document.body);

/*
    l'objet document va nous fournir des propriétés et des méthodes 
    qui vont nous permettre d'acceder directement à certains éléments 
*/

//La propriété links retourne une liste de tous les élements possédant
// un href
console.log(document.links);


//getElementById() : permet d'acceder à un élément qui possède un id
let h1Elt = document.getElementById('titre2');
console.log(h1Elt);

/*
     - La propriété innerHTML de l'objet Element permet de recuperer ou 
      ou redefinir la syntaxe HTML interne à un élément 
    -  La propriété textContent  de l'objet node represente le contenu 
       textuel d'un noeud et de ses enfants 
*/

h1Elt.textContent += " -  Salut !";
h1Elt.style.color = "red";

//querySelector() <-  fonctionne avec un selecteur css 
let divElt = document.querySelector('div');

//textContent recupère le contenu text des balises
console.log('textContent: ', divElt.textContent);

//innerHTML recupère tout le contenu de la div avec les balises
//transformer en texte
console.log("innerHTML: ", divElt.innerHTML);

//Recupère le premier element trouvé
let h2Elt =  document.querySelector('.titres');
console.log(h2Elt);

//Récuperer tous les élements 
let titresElts = document.querySelectorAll('.titres');

//On va utiliser la boucle for...of, for,  forEach
//Pour chaque element parcouru on ajoute " - For of", 
// " - For classique", - Foreach
for (const titre of titresElts) {
    titre.textContent += " - For of";
}

//Boucle for classique
for (let i = 0; i < titresElts.length; i++) {

    let titre = titresElts[i];
    titre.textContent += " - For classique";

    //titresElts[i].textContent += " - For classique";
}

titresElts.forEach(titre => titre.textContent += " - ForEach");

/*
    Acceder au parent ou à la liste des enfants d'un noeud
*/

let body = document.querySelector('body');

//La propriété childNodes renvoie une liste des noeufs enfants 
let child_nodes = body.childNodes;
console.log(child_nodes);
child_nodes[7].style.color = 'green';

//Si on ne souhaite récuperer que les noeufs enfants elements, on utilise la propriété children
let children_node =  body.children;
console.log(children_node);

//On accède au premier noeud enfant de body 
let firstChildBody =  body.firstChild; 
console.log(firstChildBody); 

//On accède au premier noeud element enfant de body 
let firstElementChildBody =  body.firstElementChild;
console.log(firstElementChildBody);

/*
    Accéder au noeud précedent ou suivant un dans l'architecture DOM 
*/

let lien2 = document.getElementById('lien2');
let previousSiblingLien2 =  lien2.previousSibling;
console.log(previousSiblingLien2);

let previousElementSiblingLien2 = lien2.previousElementSibling;
console.log(previousElementSiblingLien2);
//previousElementSiblingLien2.style.color = "#E58B32"; 
//On accède à l'enfant de l'element parent li de l'élement dont l'id = lien2
previousElementSiblingLien2.firstElementChild.style.color = "#E58B32";


