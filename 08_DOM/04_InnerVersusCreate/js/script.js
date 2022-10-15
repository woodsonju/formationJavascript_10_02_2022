function inner() {
    let zone = document.getElementById("created");
    console.time("document.innerHtml : ")

    for (let i = 0; i < 500; i++) {
        zone.innerHTML += `
        <p>
            <a href="https://dawan.fr" title="Lien vers dawan>Dawan</a>
        </p>
        `
    }

    console.timeEnd("document.innerHtml : ");
}

function create() {
    let zone = document.getElementById("created");
    console.time("document.innerHtml : ")

    for (let i = 0; i < 500; i++) {
        let aElt = document.createElement("a");
        aElt.textContent = "Dawan";
        aElt.setAttribute("href", "https://dawan.fr");
        aElt.setAttribute("title", "Lien vers dawan.fr");

        let pElt = document.createElement("p");
        pElt.appendChild(aElt);
        zone.appendChild(pElt);

       // zone.appendChild(pElt.appendChild(aElt));
    }

    console.timeEnd("document.innerHtml : ");
}

/*
   L'utilisaton de createElement est plus performant que innerHTML
   Même si l'utilisation de innerHTML est plus propre et plus courte
   l'utilisation de innerHTML oblige les navigateurs Web à analyser et à recréer
   tous les nœuds DOM à l'intérieur de l'élément body si on prend notre exemple 
   Par consequent il est moins efficace que de créer un nouvel élément et de l'ajouter au body. 
   En d'autres termes, créer un nouvel élément et l'ajouter à l'arborescence DOM offre de meilleures performances que le innerHTML.

    L'utilisaton de createElement est plus sécurisé
    On devrait seulement utiliser le innerHTML lorsque les données proviennent d'une source fiable comme une base de données.
*/
