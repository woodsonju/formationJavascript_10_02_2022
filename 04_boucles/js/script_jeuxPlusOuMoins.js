let nbreSecret;
let nbreUtilisateur;
let nbreDEssai = 1;
let rejouer;
let min = 1;
let max = 500;

do {
    
    nbreSecret = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(nbreSecret);
    do {
        nbreUtilisateur = Number(prompt('Entrer un nombre entre 1 et 500')); 
        if(nbreUtilisateur === nbreSecret) {
            console.log(`Trouver en ${nbreDEssai} essais!`);
        } else {
            nbreDEssai++;
            if(nbreUtilisateur > nbreSecret) {
                console.log("Votre nombre est trop grand");
            } else {
                console.log("Votre nombre est trop petit");
            }
        }
    
    }while(nbreUtilisateur !== nbreSecret);
    
    rejouer = +prompt("Vous vous faire une nouvelle partie ? Oui(1) / Non (0)")
    if(rejouer === 0) {
        console.log("A bientot");
        break;  //quitte la partie (on sort de la boucle while)
    }
    
}while(true);
