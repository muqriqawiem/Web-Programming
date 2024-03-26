const coffeePrices = {
    1: 42,
    2: 42,
    3: 56,
    4: 69,
};

function displayMenu() {
    const menu = `Coffee Bean Menu:
    1: Brazil Cerrado (RM${coffeePrices[1]} per pack)
    2: Vanguard Blend (RM${coffeePrices[2]} per pack)
    3: Organic Marcala (RM${coffeePrices[3]} per pack)
    4: Taster Pack Trio (RM${coffeePrices[4]} per pack)
    `;
    return menu;
}

function calculateTotal(coffeeId, numPacks) {
    if (coffeeId < 1 || coffeeId > 4) {
        alert("Error: Invalid Coffee Bean ID. Please enter a number between 1 and 4.");
        return;
    }

    const pricePerPack = coffeePrices[coffeeId];
    const totalCost = pricePerPack * numPacks;

    alert(`The total cost for ${numPacks} pack(s) of coffee beans is RM${totalCost.toFixed(2)}`);
}

while (true) {
    const coffeeId = parseInt(prompt(displayMenu() + "\nEnter Coffee Bean ID (1-4) (0 to stop):"));

    if (coffeeId === 0) {
        alert("Thank you for buying our Coffee Bean!");
        break;
    } else if (isNaN(coffeeId)) {
        alert("Error: Coffee Bean ID must be between 1 and 4 or 0 to stop.");
        continue;
    }

    const numPacks = parseInt(prompt("Enter number of pack of coffee that you want to purchase:"));

    calculateTotal(coffeeId, numPacks);
}
