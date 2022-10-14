/*
    Pour créer un élement HTML en Javascript, on peut utiliser la méthode :  
    createElement('nomDeLaBaliseHTML')
*/

//Etape 1 : Création de l'objet 
let newLiElt = document.createElement('li'); 
//<li></li>
console.log(newLiElt);

//Etape 2: Personnalisation 
//<li>Abricot</li>
newLiElt.textContent = "Abricot";
newLiElt.style.color = "orange";

//Etape 3 : Insertion dans le DOM
let ulElt = document.querySelector('ul');

//Ajouter l'élement en dernière position 
ulElt.appendChild(newLiElt);


/*
    <a href="https://dawan.fr" title="Lien vers dawan.fr">
        Lien vers Dawan
    </a>

    Ajouter le lien dans le body après l'élément ul
*/
let newAElt = document.createElement('a');  //<a></a>
newAElt.href = "https://dawan.fr";
newAElt.textContent = "Lien vers Dawan";

//newElt.setAttribute('attrHTML', valeur);
newAElt.setAttribute('title', 'Lien vers dawan.fr');
newAElt.setAttribute('target', '_blank');
newAElt.setAttribute('id', 'super_id');

console.log(newAElt);

let bodyElt = document.querySelector('body');
bodyElt.appendChild(newAElt);


//Utilisation de innerHTML 
//Ajouter ==>   <a href="">Lien Dawan</a>
bodyElt.innerHTML += "<br/><a href=''>Lien Dawan</a>";


/*
    L'utilisation de createElement est plus performant que innerHTML
    Même si l'utilisation de innerHTML est plus propre plus courte 
    L'utilisation de innerHTML oblige les navigateurs web à annalyser et à récreer 
    tous les noeuds DOM à l'interieur de l'éméent body
*/

