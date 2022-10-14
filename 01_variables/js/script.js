

//alert('Hello');

/*
    Un  commentaire 
    plus long
    sur plusieurs lignes
*/

//mot-clé nomDeLaVariable = valeur;
var prenom = "John";   //Définit des variables globales 
let nom = 'Doe';  //Définie des variables locales 
const age = 15;  //Définit des constantes 
let email;

console.log(prenom);

prenom = "Rick";
console.log(prenom);

// age = 25;
// console.log(age);  <- On ne peut pas changer la valeur d'une constante

//undefined signifie qu'une variable a été déclarée mais n'a pas encore reçu de valeur
console.log(email); //undefined
email = "j.doe@exemple.fr";

let val; //undefined
console.log(typeof(val)); //undefined
val = val + 6;
console.log(val); //NaN (Not a Number) signifie que la variable n'est pas un nombre

//La valeur null est une valeur qui represente la réference nulle, vide, ou inexistante 
let val2 = null;

//Concatenation : Ajoute une chaine de caractère à la fin d'une autre 
console.log("Bonjour " + 'tout le monde');
console.log("Variable prenom: " + prenom);

/*
    Nommage d'une variable : 
        1- Le noms d'une variable ne peut contenir que des lettres, peut commencer un $, 
        ou un _(underscore)
        2- Le nom d'une variable ne peut pas commencer par un chiffre 
        3- Les espaces ne sont pas autorisées dans le nom de la variable
        4- Sensible au majuscule/minuscule. age != Age 
        5- CamelCase (ex: nomDeLaVariable)
*/
//let mon-age = 5; <- erreur 
let mon_age = 20;
let nbre2vie = 5;

//Javascript est sensible à la casse (age != Age)
let Age;
console.log("Age = " + Age); //undefined
console.log("age = " + age); //15

/*
    Types de variables : 
        - boolean 
        - number 
        - null
        - undefined 
        - string
        - Objet : objets natifs : date, math, array, string
        - fonction
*/

//Exemple de type fonction
let val20 =  function() {
    console.log('Hello Fonction anonyme');
}
console.log(typeof(val20)); //function

//Echaper un caractère on utilise anti-slash (\)
//C'est \ un mot 
console.log('c\'est \\ un mot');

//En JS on peut change le type d'une variable
//lors de l'affectation
mon_age = "25"; //string
console.log(typeof(mon_age));

/*
    Chaines des litteraux
*/
let chaine1 = "toto";
let chaine2 = "1234";
let chaine3 = 'Une ligne \n une autre ligne';


/*
    Avec ECMAScript 2015(ES6), on peut également utiliser des litteraux sous forme de gabarits
    en utilisant le caractère accent grave (`) comme separateur : alt gr + 7
*/
let chaine4 = `Un saut de ligne '\n' en Javascript`;
let chaine5 = `Dans les gabarits
                        On peut écrire sur plusieurs lignes.`;
console.log(chaine5);


//Interpolation de chaine 
let nom2 = "Robert", jour ="aujourd'hui";

//Utilisation de la concatenation 
console.log("Bonjour " + nom2 + " Comment allez-vous " + jour + "?");
//Utilisation de l'interpolation de chaine
console.log(`Bonjour ${nom2}, comment allez-vous ${jour} ?`);


//var : variable globale 
//let: variable local

//Le problème avec var  c'est qu'on peut  créer plusieurs fois des variables avec le même nom
//Cela peut être une source de bug sur des gros projets
//Pour eviter ces problèmes on va utiliser le mot clé "let"
var testVar = "test1";
var testVar = "test2";
console.log(testVar);

//Avec "let" impossible de créer deux variables avec le même nom
let testLet = "test1";
//let testLet = "test2"; <- erreur

let c = "toto";
let d = "ciao";

if(true) {
    let d = "tata";
    let a = "Salut";
    const z = 5;
    var f = "Hello";
    var b ="Hola";
    console.log("let d : " + d); 
    console.log("let a : " + a);
    console.log("let c : " + c); 
}

var b = 500;
//On ecrase la variable b qui porte le même nom que la variable b qui est déclarée 
//dans le bloc if
console.log(b); //500

//console.log(a);  //n'existe plus à la fin du bloc d'instruction du if

console.log(d); //ciao
console.log(f); //Hello
console.log(c); //"toto"
//console.log(z); //<- n'existe plus à la fin du bloc d'instruction du if





