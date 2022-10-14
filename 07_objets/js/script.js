/*
    - La variables stocke une valeur 
    - La fonction stock un ensemble d'instructions 
    - L'objet stock des variables (Propriétés) et des methodes, qui sont des fonctions 
      definies à l'interieur des objets

    Il y a deux types d'objets : 
        - Objet litteral 
        - Objet crée à partir d'une classe (new + constructeur)
*/

/*
    Lorsqu'on va créer nos classes, nous allons devoir respecter les concepts 
    de la programmation orienté objet (POO)
    Nous décrirons trois concepts principaux : 
    - Les classes et instances (Objets)
    - Héritage 
    - Encapsulation

    Encapsulation :  
         - L'encapsulation est le fait de regrouper dans une seule entité les données et les 
         traitements qui sont propres à l'entité 
         - La partie interne, doit être non visible par les utilisateurs - les propriétés font 
            partie du niveau interne 
        - Il faut donc les definir en "private": javascript utilise le symbole #
        - Possibilité d'offrir aux utilisateurs l'accès aux attributs via des getters et setters
            avec du contrôle 
          getters : Recupère la valeur des propriétés  (Lecture)
          setters : Modifie les propriétés  (Modification)
        - Interface : contient que des méthodes public (dont getters et setters)

    Heritage : 
        L'héritage permet de créer un nouveau type de données basé sur un autre type, en 
        l'enrichissant, en ajoutant des caractéristiques propres à chaque type

*/

class User {
    #firstname;  //un champ privé est un identifiant préfixé par #
    #lastname;
    username;
    email;
    age;
    role = "USER";


    constructor(firstname, lastname, email) {
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.email = email;
        this.username = `${firstname} ${lastname}`;
    }

    get firstname() {
        return this.#firstname;
    }

    set firstname(firstname) {
        this.#firstname = firstname;
    }

    get lastname() {
        return this.#lastname;
    }

    set lastname(lastname) {
        this.#lastname = lastname;
    }

    sayhello() {
        console.log(this.username + " dit bonjour");
    }

    sayhello2 = function() {
        console.log(this.username + " dit bonjour 2");
    }

    sayhello3 = () => console.log(this.username + " dit bonjour 2");

}

let user1 = new User("Dupont", "David", "ddupont@gmail.com");
console.log(user1);
console.log(user1.firstname);

user1.lastname = "Pierre";
console.log(user1.lastname);

user1.sayhello2();


class Employe extends User {
    job;

    constructor(firstname, lastname, email, job) {
        super(firstname, lastname, email);
        this.job = job;
    }
}

let e = new Employe("Jane", "Doe", "jdoe@email.fr", "Développeuse");
e.sayhello();

let isEmployee = e instanceof Employe; //true 
let isUser = e instanceof User; //true 
const isObject = e instanceof Object; //true
const isString = e instanceof String; //false


/* 
    Les objets litteraux 
    Pour créer un objet littéral, on utilise une syntaxe utilisant une paire d'accolade {...}
    qui indique que nous créons un objet 
*/
const book= {
    title : `Frankenstein`,
    author: {
        firstname: 'Mary', 
        lastname: 'Shelley',
        nationality: 'English',
        fullname: function() {
            return `${this.firstname} ${this.lastname}` //this fait reference à l'objet en cours
        }, 
        fullname2: () => `${this.firstname} ${this.lastname}`,
        fullname4() {
            return `${this.firstname}${this.lastname}`
        }
    }, 
    year : 1880, 
    is_read : true, 
    awards: ['Prix Goncourts', 'Prix bidule', 'Super prix']
};

console.log(book.title);

console.log(book.author.fullname2()); //undefined undefined 
/*
    Dans un objet littéral, les méthodes écrites en fléchée ne reconnaissent pas 
    l'objet comme contexte (this )
    Les fonctions fléchées, sont différentes des autres fonctions au sens où elles ne possède 
    pas de valeur propre pour this
*/




/*
    On peut utiliser le point pour acceder aux membres d'un objet, les modifier ou 
    en definir des nouveaux
*/
book.id = 1;

console.log(book);

/*
    On peut utiliser les crochets pour accéder aux propriétés d'un objet, les modifier ou 
    en definir de nouvelles 
*/
const new_prop = 'edition'; //On defini une nouvelle propriété nommée 'edition'
book[new_prop] = 'Edition Pingouins'; //Sa valeur est 'Edition Pingouins

console.log(book.edition); 
console.log(book[new_prop]);
console.log(book);  

/*
    L'opérateur delete permet de retirer une propriété d'un objet
*/
delete book.id;
console.log(book);

//Lister les propriétés d'un objet 
//Utilisation de la boucle for..in
for(let prop in book) {
    console.log(prop);  //On recupère la propriété, non la valeur
    console.log(book[prop]);  //On reccupère la valeur
}


/*
    "L'affectation par decomposition : destructuring"   est une syntaxe qui nous permet
    d'affecter des propriétés d'objets ou des éléments dans une variable 
    Cela permet de reduire considerablement les lignes de code 
*/

//Sans l'affecation par décomposition
// const title = book.title;
// const published_year = book.year; 
// const edition = book.edition;


//Avec Affectation par decomposition 
/*
    L'affectation par décomposition des objets crée de nouvelles variable portant le même 
    nom que la propriété de l'objet 
    Si vous souhaitez pas que la nouvelle variable ait le même nom que le nom de la propriété
    de l'objet, vous avez également la possibilité de renommer la nouvelle 
    variable  (ex : year:published_year)
*/
const{title, year:published_year, lang='en', ...rest} = book;

console.log(published_year);
console.log(rest);

//Fonctionne aussi pour les tableaux 
const fruits = ['Peche', 'Pomme', 'Poire', 'Abricot'];

const[a, b, ...c] = fruits;

console.log(fruits);
/*
Equivalent : 
    const a = fruits[0];
    const b = fruits[1];
*/
console.log(a);  //Peche
console.log(c); //[Poire, Abricot]


/*
    Créer un objet litteral voiture qui contient les propriétés : 
        - couleur 
        - nbPorte 
        - vitesse 
        - nbRoue
        - une propriété 'accelerer' qui pointe vers une méthodes 

    Ajouter une propriété id 
    Recuperer les propriétés couleur, nbPorte, vitesse 
*/

let voiture = {
    couleur: 'rouge', 
    nbPorte: 4, 
    vitesse: 120, 
    nbRoue: 4, 
    accelerer : function(pVitesse) {
        this.vitesse = pVitesse;
        return this.vitesse;
    }
}

let vitesses = voiture.accelerer(130);
console.log(vitesses);

voiture.id = 1;
console.log(voiture);

console.log(voiture.couleur);

//Modification de la couleur 
voiture.couleur = "noir";
console.log(voiture);

//Ajouter une propriété  "proprietaire" 
//Le propriétaire aura un nom, un prenom, un age, et une adresse mail
voiture.propritaire = {
    nom : "Pierre", 
    prenom: "Dupont", 
    age: 28,
    mail: "pDupont@gmail.com"
}

console.log(voiture);


//Autre methode
// let prop1 = "proprietaire";
// voiture[prop1] = {
//     nom : "Pierre", 
//     prenom: "Dupont", 
//     age: 28,
//     mail: "pDupont@gmail.com"
// }
