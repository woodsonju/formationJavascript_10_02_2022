/*
    - Les opérateurs Arithmétiques 
    - Les opérateurs de comparaison 
    - Les opérateurs logiques 
*/

let a = '2';
let b = '3';
let d = 'toto';

//string + string = concatenation 
//number + string = concatenation 
//number + number = addition
let c = a + b;
console.log("c: " + c);

console.log(typeof(a)); //string

//Number(maVariable): convertit une chaine de caractère en nombre si c'est possible
//Sinon on obtient un NaN (Not a Number)
let nombre = Number(a);
console.log(nombre + " est de type " + typeof(nombre)); //Number

//+maVariable fait la même chose que Number()
let nombre2 = +b;

console.log(Number(d));  //NaN 


console.log("_________Addition_______________");
let resultat = nombre + nombre2;
/*
    opérateur combinées : +=, -=, *=, /=
    resultat = resultat + 2;
    resultat += 2;
*/
resultat += 2;

/*
    Incrementation (++) et Decrementation (--) 
    resultat += 1 ==> resultat = resultat + 1
*/
resultat++;  //Incrementation


console.log("__________Soustraction_______________");
let resultat2 = nombre - nombre2;
resultat -= 2;
resultat--;


console.log("__________Multiplication_______________");
let resultat3 = nombre * nombre2;
resultat *= 5;
//resultat**; <- erreur, revient à faire x1 donc inutile


console.log("__________Division_______________");
let resultat4 = nombre / nombre2;
resultat /= 2;

/*
    Utilisation de l'objet Math
*/
let division_entier_floor = Math.floor(5/2);
console.log(division_entier_floor);  //2

let division_entier_ceil = Math.ceil(5/2);
console.log(division_entier_ceil); //3

let division_entier_round = Math.round(5/2);
console.log(division_entier_round); //3

console.log("__________Modulo____________");
//Permet de recuperer le reste d'une division entière
//14 % 3 = 2 
resultat = 5 % 2;
console.log(`resultat = ${resultat}`); //1


/*
    OPERATEURS DE COMPARAISON
    Retourne un résultat booléen (True ou False)
*/
nombre = 12;
nombre2 = 12;

//Strictement superieur   > 
resultat = nombre > nombre2;
console.log(typeof(resultat));

//superieur ou égale  >=
result = nombre >= nombre2; 
console.log(resultat); 

//Strictement inferieur  < 
resultat = nombre < nombre2;

//inferieur ou égal <= 
resultat = nombre <= nombre2;

//Egalité   ==
resultat = nombre == nombre2;

//different   !=
resultat = nombre != nombre2;
console.log(resultat);


nombre = '2';
nombre2 = 2;

//Compare les valeur  ==
resultat = (nombre2 == nombre);
console.log('Egalité : ' + resultat); //true 

/*
    === compare les valeurs + type 
    returne true si les valeurs sont égaux et du même type
*/
resultat = nombre2 === nombre; //false 
console.log('Egalité stricte : ' + resultat);

//!==
resultat = (nombre2 !== nombre); //true
console.log("Inégalité stricte : " + resultat);


/*
    OPERATEURS LOGIQUES 
        - ET logique (&&)
        - OU logique (||)
        - NON logique (!)
*/

//&& : Il faut que les deux testes soient vraies pour que le resultat soit vrai
let age = 19;
resultat = (age >= 18 && age <= 25);  //true 

//|| :  Il faut qu'au moins un des deux tests soient vrais pour que le résultat soit vrai
let derogation = false;
resultat = (age > 18 || derogation == true);  //true

if(a>= 18 || derogation == true) {
    console.log("Vous avez au moins 18 ans ou une dérogation");
} else {
    console.log("Vous n'avez pas  18 ans ou pas de dérogation");
}

//! (on logique) : returne false si le test est vrai sinon retourne true 
age = 26;
resultat = !(age > 30);
console.log(resultat);


//prompt('') : afficher une boite de dialogue dans laquelle l'utilisateur 
//peut saisir quelque chose 
//Ce que l'utilisateur saisit est toujours une chaine de caractère

/*
    Exo :

        On va demander à l'utilisateur: 
            -  de saisir une heure : 1 
            -  de saisir des minutes : 45 
            -  des minutes à ajouter : 30

    ===> 1h45 + 30minute = 2h15

*/
let heures = prompt('Saisir une heure : ');
heures = Number(heures);
let minutes = Number(prompt('Saisir des minutes: '));
let ajout = +prompt('Saisir des minutes à ajouter : ');

//minutes = 45 + 30 = 75 
minutes = minutes + ajout;

heures = heures + Math.floor(minutes / 60);  //1 + 1  

minutes = minutes % 60; // 75 % 60 = 15 
console.log(`Resultat : ${heures}h${minutes}`);
