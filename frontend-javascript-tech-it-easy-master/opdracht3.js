//Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven.
// Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

//Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten,
// zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!

//1. Maak een html opslag plek in de index html
//2. haal het element naar javascript
//3. loop door de array heen
//4. Maak voor elke loop of iteratie een list element
//5. stop in het element de tv naam
//6. voeg het resultaat aan de container

const list = document.getElementById("listBrandName")

inventory.map((listTv) => {
    const newList = document.createElement("li")
    newList.textContent = listTv.brand

    return list.appendChild(newList)
})

//1. maak een functie
//2. schrijf de logica van 3a
//3. roep de functie aan

// je krijgt nu wel 2x een lijst maar dat kan je voorkomen om de bovenste uit te zetten!!!

function brandName(array){

    const list = document.getElementById("listBrandName")

    array.map((listTv) => {
        const newList = document.createElement("li")
        newList.textContent = listTv.brand

        return list.appendChild(newList)
    })
}

brandName(inventory)
