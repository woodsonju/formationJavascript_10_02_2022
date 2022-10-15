let formElt =  document.querySelector("form");

formElt.addEventListener("submit", (event) => {
   let firstName = event.target.firstName;
})

/*
    AIDE / 

    1) On recupère le formulaire ou les éléments un par un du DOM 
    2) Lorsque l'utilisateur clique sur le bouton, on verifie que la 
    valeur des champs ont une taille > 0
*/