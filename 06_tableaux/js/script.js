
"use strict";

/*
    Un tableau sont des objets Array permettant de stocker proprement une liste d'élément 
    de données sous un seul nom de variable

*/

//Déclaration de tableau
//tableau vide
let nombres = [];
console.log(nombres);

let notes = [15, 16, 8, 7];
console.log(notes);

//Un tableau commence toujours à 0 
//Pour acceder à une valeur de ce tableau on utilise les []
console.log(`notes[0] = ${notes[0]}`);
console.log(`notes[2] = ${notes[2]}`);

//Ajouter des éléments dans le tableau nombres 
nombres[0] = 12;
nombres[1] = 27;
console.log(nombres);

//La propriété lenght de l'objet Array permet de connaitre la taille du tableau 
//(Le nombre d'élément qu'il comporte)
console.log(`Nombre d'élément dans notes : ${notes.length}`);


//Acceder au dernier élément d'un tableau 
//notes[4-1] => notes[3]
console.log(`${notes[notes.length - 1]}`); 


console.log("_______________while____________");
let index = 0;
let notesLength = notes.length;
while(index < notesLength) {
    console.log(notes[index]);
    index++;
}

console.log("___________________FOR______________");
for(let i = 0; i < notes.length; i++) {
    console.log(notes[i]);
}

console.log("____________FOR...OF_______________");
//Le for...of determine automatiquement la taille  du tableau 
//Incremente automatiquement un index interne 
for(const note of notes) {
    console.log(note * 2);
}


/*
    Utilisation de quelques méthodes de l'objet Array utilisées pour les tableaux
*/
//Syntaxe littéral 
let prenoms = ["Maude", "John", "b", "Ella", "ella", "maude", "mathilde", "Sarah", "Marc"];

//Création d'un tableau à partir de la classe Array
let prenomsObj = new Array("Maude", "John", "Ella", "Sarah", "Marc");

console.log(prenoms);
console.log(prenomsObj);

//push : Ajoute un élément à la fin du tableau 
prenoms.push('Rick');
console.log(prenoms);

//shift : Supprime le premier élément du tableau
//et retourne l'élément supprimé
let firstPrenomDelete =  prenoms.shift();
console.log(firstPrenomDelete);


//pop : Supprime le dernier élément et retourne l'élément supprimé
let lastPrenomDelete = prenoms.pop();
console.log(lastPrenomDelete);

//unshift : Ajouter un élément à la première position du tableau
prenoms.unshift("Yohann");
console.log(prenoms);

//Trouver l'index d'un élément dans un tableau
let position =  prenoms.indexOf('Ella');
if(position != -1) {
    console.log("L'élément existe dans le tableau à la position " + position);
} else {
    console.log("Cet élément n'existe pas");
}
console.log(prenoms[position]);

//Inverser l'ordre des éléments du tableau 
prenoms.reverse();
console.log(prenoms);

//

//sort() : permet de trier le tableau par ordre alphabetique 
prenoms.sort();
console.log(prenoms);


//On va faire le tri par rapport au nombre des caractères
//Fonction anonyme
//Fonction callBack retourne plusieurs valeurs : 
// si s1 < s2 la fonction callback retourne une valeur négative
//si s1 > s2 la fonction callback retourne une valeur positive
//si s1 === s2 la fonction callback retourne 0
prenoms.sort(function(s1, s2) {
    let resultat = s1.length - s2.length;
    return resultat;
})

//Utilisation de la fonction fléchée version 1
prenoms.sort((s1, s2) => {
    let resultat = s1.length - s2.length;
    return resultat;
});

//Utilisation de la fonction fléchée version 2
prenoms.sort((s1, s2) => s1.length - s2.length);

console.log(prenoms);

 let deletePrenoms = prenoms.splice(3, 5);
 console.log("Les éléments supprimés : " + deletePrenoms);
 console.log(prenoms);

 //Ajouter à l'index 2, un nouveau tableau contenant 3 valeurs [2, 6, 9]
prenoms.splice(2, 0, [2, 6, 9]);
console.log(prenoms);

console.log("_____________ForEach____________");
notes.forEach(note => console.log(note*2));

console.log("_______________Filter____________");
//Selectionner tous les prenoms qui commencent par un "m" minuscule
let newTabFilter = prenoms.filter(prenom => prenom.toString().charAt(0) === "m");
console.log(newTabFilter);


console.log("___________Map______________")
//Calculer le nombre lettre pour chaque prenom 
let strPrenoms =  prenoms.map(prenom => prenom.length);
console.log(strPrenoms);

/*
    Ne pas prendre en compte le table [2, 6, 9] 
*/
let mapFilterPrenom = prenoms
                            .filter(prenom => typeof(prenom) === 'string')
                            .map(prenom => prenom.length);
console.log(mapFilterPrenom);

