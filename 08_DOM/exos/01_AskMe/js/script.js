/*
    Exercice 1: 
    Lorsque l'on clique sur le bouton "creation de bouton" 
    un événement se declenche et demande à l'utilisateur combien de boutton 
    il veut créer. 
    Sa réponse est stockée dans une variable (ex: 'combien' ou 'answer'....)
    La fonction creerBtn appelera la fonction ajouterXButtons qui s'occupera de 
    créer autant de boutons que demandé 
    qui seront affichés dans la balise <div id="boutons">
*/


function ajouterXBouton(combien) {
    let btnDivElt = document.getElementById('boutons');
    for (let i = 0; i < combien; i++) {
       let newBtnElt = document.createElement('button');
       newBtnElt.textContent = "Bouton " + i;
       newBtnElt.style.display='block';
       
       btnDivElt.appendChild(newBtnElt);

    }
}


function creerBtn() {
    let nombre = +prompt('Combien de boutons voulez vous créer ?');
    ajouterXBouton(nombre);
}