//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
//Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

//1. Maak een variabele waar je alle tv's kan opslaan (alleen die zijn verkocht)
//2. loop dan door de array heen voor de waardes die je wil
//3. tel elke tv die is verkocht bij erlkaar
//4. log dit vervolgens

let resultSold = 0;

for (let i = 0; i < inventory.length; i++){
    resultSold = resultSold + inventory[i].sold
}

console.log(resultSold);

//1. maak een html element die je als opslag plek kan gebruiken
//2. haal het element naar ja javascript bestand
//3. maak in je javascript nieuwe elementen om het op te slaan
//4. koppel dit aan de opslag plek in html
//5. geef dit dan styling

const soldTvs = document.getElementById("containerSold")

const soldTvsTitle = document.createElement("h3")
soldTvsTitle.textContent = "Aantal verkochte tv's: "

const allSoldTvsResult = document.createElement("h4")
allSoldTvsResult.textContent = resultSold
allSoldTvsResult.setAttribute('id', "resultSold-color")

soldTvs.appendChild(soldTvsTitle)
soldTvs.appendChild(allSoldTvsResult)

//1. Maak een variabele waar je alle tv's kan opslaan (alleen die zijn ingekocht)
//2. loop dan door de array heen voor de waardes die je wil
//3. tel elke tv die er nog zijn bij erlkaar
//4. log dit vervolgens

let resultStock = 0;

for (let i = 0; i < inventory.length; i++){
    resultStock = resultStock + inventory[i].originalStock
}

console.log(resultStock);

//1. maak een html element die je als opslag plek kan gebruiken
//2. haal het element naar ja javascript bestand
//3. maak in je javascript nieuwe elementen om het op te slaan
//4. koppel dit aan de opslag plek in html
//5. geef dit dan styling

const stockTvs = document.getElementById("containerStock")

const stockTvsTitle = document.createElement("h3")
stockTvsTitle.textContent = "Aantal op vooraad tv's: "

const allStockTvsResult = document.createElement("h4")
allStockTvsResult.textContent = resultStock
allStockTvsResult.setAttribute('id', "resultStock-color")


stockTvs.appendChild(stockTvsTitle)
stockTvs.appendChild(allStockTvsResult)

// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
//1. Maak een variabele waar je alle tv's kan opslaan
//2. loop dan door de array heen voor de waardes die je wil (de stock en sold)
//3. haal dan de items sold van de stock af
//4. log dit vervolgens

let resultForSale = 0;

for (let i = 0; i < inventory.length; i++){
    resultForSale = resultForSale + inventory[i].originalStock - inventory[i].sold
}

//1. maak een html element die je als opslag plek kan gebruiken
//2. haal het element naar ja javascript bestand
//3. maak in je javascript nieuwe elementen om het op te slaan
//4. koppel dit aan de opslag plek in html
//5. geef dit dan styling

console.log(resultForSale);

const stockTvsForSale = document.getElementById("containerStockForSale")

const stockTvsForSaleTitle = document.createElement("h3")
stockTvsForSaleTitle.textContent = "Aantal te verkrijgen tv's: "

const allStockForSaleResult = document.createElement("h4")
allStockForSaleResult.textContent = resultForSale
allStockForSaleResult.setAttribute('id', "resultStockForSale-color")


stockTvsForSale.appendChild(stockTvsForSaleTitle)
stockTvsForSale.appendChild(allStockForSaleResult)
