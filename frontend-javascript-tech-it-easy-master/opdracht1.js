// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

const outcomeTvName = inventory.map(function (stockList) {
    return stockList.name;
})

console.log(outcomeTvName);

const outcomeTvSold = inventory.filter(function (itemsSold){
    if (itemsSold.originalStock - itemsSold.sold === 0){
        return itemsSold.name;
    }
})
console.log(outcomeTvSold);

const outcomeAmbiLight = inventory.filter(function (AmbiLight){
    if (AmbiLight.options.ambiLight === true){
        return AmbiLight.options.ambiLight;
    }
})
console.log(outcomeAmbiLight);

function sortArray(banaan){
    return banaan.sort((a, b) =>{
        if (a.price - b.price > 0){
            return 1
        } else if(a.price - b.price < 0){
            return -1
        } else{
            return 0;
        }
    })
}

console.log(sortArray(inventory));
