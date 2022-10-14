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

