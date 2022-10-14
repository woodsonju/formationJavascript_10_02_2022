/*
    Expression d'un test conditionnel 
        Si (condition est vraie)
            instructions; 
        Sinon 
            d'autres instructions 

    Le bloc IF (quand la condition est vraie)
    Le bloc ELSE (tous les autres cas : quand la condition est fusse)
    Le bloc ELSE-IF (traite un cas)
*/

//let age = +prompt('Veuillez saisir votre age: ');
let age = 17;
//if(boolean){}
if(age < 18) {
    //Si c'est vrai, on entre ici
    console.log("Vous ne pouvez pas louer de voiture");
} else if((age>= 18 && age <= 20)) {
    console.log("Vous avez droit qu'à certains modèles de voiture ! ")
} else {
    console.log("Quel modèle voulez vous ?");
}


/*
    Tester si un nombre est pair ou impair 
     - L'utilisateur doit saisir le nombre 
     - Affiche si ce nombre est pair ou impair
*/
let nombre = +prompt('Saisir un nombre : ');

if((nombre % 2 !== 0)) {
    console.log(nombre + " est impair");
} else if(nombre === 0) {
    console.log("Division par zéro impossible!!!");
}else {
    console.log(nombre + " est pair");
}

/*
    Switch - Case
    On peut l'utiliser lorsqu'on a des données à la carte
    Pour une question de rapidité et de performance, le switch est preféré
*/

let choix = 3; 

// if(choix == 1) {
//     console.log('Convertir des heures');
// } else if(choix == 2) {
//     console.log("Convertir des euros");
// } else if(choix == 3)  {
//     console.log("Convertir des mètres");
// } else {
//     console.log("Quitter");
// }

switch(choix) {
    //if(choix == 1)
    case 1:
        console.log('Convertir des heures');       
    case 2: 
        console.log("Convertir des euros");
        break;
    case 3: 
    case 4: 
    case 5:
        console.log("Convertir des mètres");
        break;
    default:
        console.log("Quitter");
}

/*
    Une valeur est truthy lorsqu'elle est considérée comme vraie (true) 
    quand elle est evaluée dans un contexte booléen 
    Sinon elle est falsy 
        - falsy : false, undefined, null, tableau vide[], un objet vide, 0, 0.0...
        - truthy : la valeur n'est ni null, ni undefined, ou vide .... quand elle n'est pas falsy

*/
let c;
console.log(c); //undefined 

if(c) {   // c !== undefined || c !== null || c !== ""...
    //On fait quelque chose si c n'est pas undefined...
    console.log("truthy");
} else {
    //c'est falsy 
    console.log("falsy");
}

if(!c) {
    //On fait quelque chose si c'est false
    console.log("falsy");
}

let bool = c; // même valeur que c ==> Undefined 
console.log(bool);
bool = !c; //  true si c'est falsy
console.log(bool); 

bool = !!c; 
console.log(bool);//false

/*
    Est ce que c est true (truthy)
    si oui, on affecte la valeur toto
*/
c &&="toto";

// Equivalent à => c &&="toto";
// if(c) {
//     c="toto";
// }

/*
    Si c est falsy, alors on  affecte la valeur "Toto"
*/
c ||="TotoFalsy";

//Equivalent à c ||="TotoFalsy";
// if(!c) {
//     c = "TotoFalsy";
// }


//Si c est undefined, alors on affecte la valeur "Toto"
c ??= "TotoUndefined";


console.log(c);


/*
    Expression ternaire 
    (condition) ? expreSiVrai : exprSiFaux
*/
let message;
// if(c) {
//    message = "C'est defini";
// } else {
//     message = "C'est Undefined";
// }

message = (c) ? "C'est defini" : "C'est Undefined";
console.log(message);

/*
     - Variable 'result' 
     - variable 'y' (tester si c'est un nombre ou pas)
     - result = 0 si la variable y n'est pas un nombre 
     - result = y si c'est un nombre 
*/
let y ;
//isNaN(n) : returne true si le nombre est NaN
let result = (isNaN(y)) ? 0 : y;
console.log(result);










