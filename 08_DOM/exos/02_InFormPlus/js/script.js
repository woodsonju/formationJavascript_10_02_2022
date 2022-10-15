/*
    Exercice : 
    Lorsque l'on clique sur le bouton "Publier", 
    un evenement se déclenche et appelle une fonction qui prend 
    en paramètre : 
        1- la valeur du champ textarea qui a pour nom 'article', 
        2- la valeur du champ input qui a pour nom 'size'
        3- la valeur du champs input qui a pour nom couleur 
    (ex: creerPara(str, size, color))
    La fonction 'creerPara' s'occupe de créer un paragraphe <p></> avec comme texte: 'str', une taille de 'size' et comme couleur 'couleur' Le paragraphe sera affiché dans la balise <div id="blog">
*/

function createArticle(event) {
    console.log(event);

    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
    // console.log(event.target[2].value);


    let texte = event.target.article.value;
    let size = event.target.size.value;
    let color = event.target.color.value;

    let newPElt = document.createElement('p'); //<p></p>
    newPElt.textContent = texte; //on  lui ajoute le texte
    newPElt.style.color = color; //Ensuite une couleur
    newPElt.style.fontSize = size; //Puis la taille

    let blogElt = document.getElementById("blog"); //On selectionne le div dont l'id = "blog"
   
    blogElt.appendChild(newPElt);

    //Supprime le comportement par defaut (Rafraichissement de la page)
    event.preventDefault();
}