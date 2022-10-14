/*
    Les variables stockent une valeur 
    les fonctions stockent un ensemble d'instruction, dont le but est de factoriser du code

    Une definition de fonction (appelée déclaration de fonction ) est construite avec 
    le mot clé "function", suivi par : 
        - le nom de la fonction 
        - Une liste d'arguments à passer à la fonction, entre parenthèse 
        - Les instruction entre accolade {...}
*/

console.log("____________________Fonctions sans paramètre_________________");
//function maFonction() {.....}
function sayHello() {
    //traitement/ instruction; 
    console.log("Bonjour");
    console.log("tout");
    console.log("le");
    console.log("monde");
}

sayHello();
sayHello();

function fairePunitionSimple() {
    let index = 1;
    while(index <= 10) {
        console.log(`Ligne ${index} : Je ne dois pas ...`);
        index++;
    }
}

fairePunitionSimple();

console.log("__________Fonction avec paramètres____________");
function fairePunition(combienDeFois) {
    let index = 1;
    while(index <= combienDeFois) {
        console.log(`Ligne ${index} : Je ne dois pas ...`);
        index++;
    }
}

fairePunition(100);
fairePunition(40);

//Je souhaite personaliser le message *
function fairePunitionV2(combienDeFois, message) {
    let index = 1;
    while(index <= combienDeFois) {
        console.log(`Ligne ${index} ${message}`);
        index++;
    }
}

fairePunitionV2(3, "je ne dois pas faire ça");
fairePunitionV2(5, "je ne dois pas faire ci");

/*
    Fonction afficher table multiplication 
    L'utilisateur pourra choisir la table et le max
    boucle for 

    ex table : 5   max = 7 
    5*1 = 5
    5*2 = 10 
    5*3 = 15
    5*4 = 20
    5*5 = 25
    5*6 = 30
    5*7 = 35

*/

function afficherTable(table, max) {
    for(let i = 1; i <= max; i++) {
        let resultat = table * i;
        console.log(`${table} x ${i} = ${resultat}`)
    }
}

afficherTable(5, 20);
afficherTable(8, 10);

//Lorsqu'on déclare une fonction, on lui fournir un paramètre par defaut
/**
 * Fonction qui affiche la table de multiplication
 * @param {*} table 
 * @param {*} max 
 */
function afficherTableV2(table, max=10) {
    for(let i = 1; i <= max; i++) {
        let resultat = table * i;
        console.log(`${table} x ${i} = ${resultat}`)
    }
}

afficherTableV2(4);
afficherTableV2(7, 20);


console.log("_______Renvoie d'une valeur________");

/**
 * Une fonction qui calcule le carré du nombre 
 * @param {*} nombre 
 * @returns  retourne le carré du nombre
 */
function carre(nombre) {
    let resultat = nombre * nombre;
    return resultat;
}

let val = carre(5); 
console.log(val);

/*
    Paramètres du rest (Rest parameters)
    La syntaxe des paramètres du reste permet de representer un nombre indéfini 
    d'arguments 
*/
function multiplier(facteur, ...lesArgs) {
    let produit = [];

    for(let i = 0; i <= lesArgs.length-1; i++) {
        produit[i] = facteur * lesArgs[i];     // i=0 => 2 * 1 
    }
    return produit;
}

let valMult =  multiplier(2, 1, 2, 3); // [2,4,6]

console.log(valMult);

//Fonction non anonyme
multiplicationv2(8, 7);

//Erreur : Une  fonction anonyme n'existe qu'à partir de sa déclaration
//multiplication(6, 5);

/*
    Fonction Anonyme  
*/


//On peut assigner une anonyme entant que valeur d'une variable 
//On appelera la fonction avec la variable
let multiplication = function(nombre, nombre2) {
    let resultat = nombre * nombre2;
    console.log(resultat);
}

multiplication(5, 3);


//Fonction non anonyme
function multiplicationv2(nombre, nombre2) {
    let resultat = nombre * nombre2;
    console.log(resultat);
}


/*
    Fonction flechée : 
    une fonction flechée est une fonction anonyme permettant d'avoir une syntaxe plus 
    courte et ne sont pas destinée à être utilisées pour déclarer des méthodes
*/
let multiplicationFlechee = (nombre, nombre2) => {
    let resultat = nombre * nombre2;
    console.log("Resultat : " + resultat);
}

multiplicationFlechee(2, 4);


//Si un seul paramètre on peut supprimé les parenthèses 
//Si une seule instruction on peut supprimer les accolades
let afficherPrenom = (prenom) => console.log(prenom);

afficherPrenom("John");


/*
    Quelques méthodes de l'objet string et array
     - split()   :   "Chien"  =>  ['C', 'h', 'i', 'e', 'n']   ==> tableau
     - reverse()  ==> une méthode qui est dans l'objet tableau  (Array)
     - join() ==>  dans l'objet array  
*/

//Créer une méthode  non anonyme inversePrenom qui inverse le prenom passé en paramètre
function inversePrenom(prenom) {
    let tableauLettre = prenom.split(''); 
    let tableauInverse = tableauLettre.reverse();
    let nomJoin = tableauInverse.join('');
   // let nomJoin = prenom.split('').reverse().join('');
    console.log(nomJoin);
}

let inversePrenomFlechee = (prenom) => {
    let tableauLettre = prenom.split(''); 
    let tableauInverse = tableauLettre.reverse();
    let nomJoin = tableauInverse.join('');
   // let nomJoin = prenom.split('').reverse().join('');
    console.log(nomJoin);
}

inversePrenom("Chien");

inversePrenomFlechee("Patrick");

/*
    Fonction de rappel (CallBack)
    Une fonction Callback est une fonction passée dans une autre fonction en tant qu'argument
*/

function faireQqChoseAvecPrenom(fonctionCallBack) {  //uneFonction = afficherPrenom
    prenom = "Yohann";  //On lui donne le prenom à afficher
    fonctionCallBack(prenom);
}

faireQqChoseAvecPrenom(afficherPrenom);  

faireQqChoseAvecPrenom(inversePrenom);

faireQqChoseAvecPrenom(function(nom) {
    console.log("Fonction dans une fonction => " + nom);
})

faireQqChoseAvecPrenom((nom) => {
    console.log(nom.toUpperCase());
})

faireQqChoseAvecPrenom(nom => console.log(nom));

/*  
    Déclarer une fonction faireOperation qui prend en paramètre une fonction callback 
        On declare  deux variables à l'interieur de La fonction faireOperation
            - nbre1 = 10
            - nbre2 = 5
    
    1- Appeller la fonction faireOperation en lui passant la fonction multiplicationFlechee
    
    2- Ensuite, lui passer directement une fonction anonyme, puis une fonction  flechée
       afin de faire une autre operation par exemple une addition ou une soustraction...
*/

//Defintion de la fonction faireOperation 
function faireOperation(fonctionCallBack) {
    nbre1 = 10;
    nbre2 = 5;
    fonctionCallBack(nbre1, nbre2);
}

faireOperation(multiplicationFlechee);

faireOperation((x, y) => {
    let resultat = x + 6 - y;
    console.log(resultat)
})

faireOperation(function(u, v) {
    let resultat = (u / v)  * 10;
    console.log(resultat);
})










