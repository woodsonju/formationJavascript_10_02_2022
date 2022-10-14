/*
    Tester si l'année est bissextile 
    - Utiliser prompt 
    - L'utilisateur doit entrer une année 
    //Afficher :  2024 est une année bissextie / 2022 est une année simple

    Une année est bissextile ((1/4 - 1/100) + (1/400)) : 
        Si l'année est divisible par 4 et non divisible par 100   ==> C1  = (annee/4 - annee/100)
        Ou si l'année est divisible par 400   ==> C2 = (annee/400)
*/
let annee = +prompt("Veuillez saisir une année : ");
let bissextile = ((annee % 4 == 0 && annee % 100 != 0) || (annee % 400 == 0)); 
if(bissextile) {
    console.log( annee + " est une année bissextile");
} else {
    console.log( annee + " est une année simple");
}
