/*
    Les boucles permettent de repeter un traitement, une suite d'instruction
*/

// console.log("Je ne dois pas..");
// console.log("Je ne dois pas..");


//for(initialisation; condition; operation) {}
//Utiliser la boucle quand on connait le nombre d'iteration 
for(let i = 0; i <= 100; i++) {
    console.log(`Ligne ${i} : Je ne dois pas... avec un for`);
}


/*
    Une instruction While  permet d'executer une instruction tant qu'une condition 
    donnée est vérifiée
*/
let compteur = 1;
while(compteur <= 5) {
    console.log(`Ligne ${compteur} : Je ne dois pas... avec un while`);
    compteur++; //compteur = compteur + 1;
}

/*
    DO-WHILE
    permet de repeter des instruction tant qu'une condition est verifiée 
    Comme la condition est testée à la fin, on est sûre de passer 
    dans le bloc d'instruction au moins une fois
*/
compteur = 10;
do {
    console.log("Je passe ici au moins une fois");
    compteur++; //compteur = compteur + 1;
}while(compteur < 5);


/*
    Instruction CONTINUE ET BREAK 
    L'instruction Break est utilisé pour finir l'execution d'une boucle 
    L'instruction continue ne stoppe pas entierement l'execution de la boucle...
    Il va stopper l'iteration courante de la boucle (ex : i == 3) et passe 
    à  l'tération suivante
*/

let i = 0;
let n = 0; 
while( i < 5) {
    i++;
    if( i === 3) {
        continue; //revient à while
    }
    n += i; // n = n + i
    console.log(n);
}

