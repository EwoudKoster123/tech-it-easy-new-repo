//Opdracht 4a:** Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één
//enkel tv-object (zoals `inventory[0]` of `inventory[6]`) verwacht en de naam op de volgende manier
//samenvoegt: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`. Test
//of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

//Opdracht 4b:** Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als
//parameter verwacht (zoals `379`) en daar de volgende string van maakt: `€379,-`. Test of jouw functie ook werkt
//wanneer er een andere tv-prijs wordt meegegeven.

//Opdracht 4c:** Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in
//zowel _inches_ als _cm_. Doe dit door een functie te schrijven die één screen-sizes array verwacht (
//zoals `inventory[0].availableSizes`) en de groottes op de volgende manier
//samenvoegt: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
//etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
//schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`.
//Test of jouw functie werkt in alle mogelijke gevallen.

//Opdracht 4d:** Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
//Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

//Opdracht 4e:** Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je
//natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
//Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De
//overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan
//te roepen!


function getTvName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

function getTvPrice(tvPrice) {
    return `€${tvPrice.price},-`;
}

function getAvailableTvSizes(tvSizes) {
    let displayedTvSizes = '';
    tvSizes.forEach((tvSize, index) => {
        displayedTvSizes += `${tvSize} inch (${inchToCm(tvSize)} cm)`;
        if (index !== (tvSizes.length - 1) && tvSizes.length > 1) {
            displayedTvSizes += ' | ';
        }
    });
    return displayedTvSizes;
}

function inchToCm(inch) {
    let inchInCm = 2.54
    return inch * inchInCm;
}

function TVDisplayGenerator(inventory) {
    let tvGenerator = '';
    inventory.forEach((tv) => {
        tvGenerator += getTvName(tv) + '<br />';
        tvGenerator += getTvPrice(tv) + '<br />';
        tvGenerator += getAvailableTvSizes(tv.availableSizes) + '<br />';
        tvGenerator += '<br />';

    });

    document.getElementById("tvs").innerHTML = tvGenerator;
}

brandName(inventory);
TVDisplayGenerator(inventory);
