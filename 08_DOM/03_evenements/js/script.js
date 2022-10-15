function direBonjour() {
    console.log('Bonjour');
}

function creerLien() {
    let newAElt = document.createElement('a'); 
    newAElt.textContent = 'Dawan';
    newAElt.href = "https://dawan.fr";
    newAElt.style.display = 'block'

    let bodyElt = document.querySelector('body');
    bodyElt.appendChild(newAElt);
}

function afficherLettre(event) {

    console.log(event);
    /*
        event.target : Permet d'obtenir l'élément qui a déclenché un évenement
    */
    //console.log(event.target);

    console.log(event.target.value);
}

//avec l'attribut defer 
// let btnElt = document.querySelector("#btn1");
// btnElt.addEventListener("click", () => alert('Bonjour'));


//Sans l'attribut defer 
//L'évenement load est déclenché lorsque la page entiere est chargé  
//y compris toutes les ressources dépedants telles que les feuilles de style et 
//et les images
window.addEventListener("load", function() {
    let btnElt = document.querySelector("#btn1");
    btnElt.addEventListener("click", () => alert('Bonjour'));
})