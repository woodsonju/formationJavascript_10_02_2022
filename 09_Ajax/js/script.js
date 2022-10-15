/*
    JSONPlaceholder  est une API REST en ligne gratruite qu'on va utiliser 
    pour récuperer nos données (des fausses données)
*/

const url = "https://jsonplaceholder.typicode.com/";
const user_url = url + "users";  //"https://jsonplaceholder.typicode.com/users";
let users = [];

/*
    Déclaration de la fonction displayUsers() 
    parcourt chaque User et le stock dans un élément li
*/
function displayUsers() {
    users.forEach(u => {
        const li = document.createElement("li");
        li.textContent = u.name;
        document.querySelector('#ul').appendChild(li);
    })
}

//Faire un get sur l'url passée en paramètre
//utilisation la méthode fetch qui permet de faire des appels AJAX en javascript 
//La méthode fetch retourne une promesse 
//Les promesses representent le resultat d'une fonction asynchrone
//Il est possible d'executer du code après le resultat d'une promesse grace à la 
//méthode "then"
// res.json() la reponse qu'on obtient n'est pas du JSON, mais plutot un objet 
//Pour convertir l'objet en JSON, on utilise la méthode json()
fetch(user_url)
    .then((res) => res.json())
    .then(res_users => {
        console.log(res_users);
        displayUsers();
    })