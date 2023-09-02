/*
    Oppgave 2: Type Inferens
    Definer en type Product med egenskapene name (string), price (number), og
    description (string). Opprett et objekt av typen Product uten description,
    og uten å spesifisere typen eksplisit. Skriv en funksjon som tar en array av
    produkter og logger detaljene. Hvordan kan du få denne funksjonen til å kjøre
    uten å endre typen?
*/
// Product without description
var monsterUltra = {
    name: 'monster ultra',
    price: 24,
};
// Logging an Array of type Product
var printProducts = function (product) {
    product.forEach(function (p) {
        var _a;
        return (console.log("Name: ".concat(p.name, ", Price: ").concat(p.price, ", Description: ").concat((_a = p.description) !== null && _a !== void 0 ? _a : (p.description = 'N/A'))));
    });
};
/**
 *
 * How to run this function without changing the type?
 * */
// Way 1 - Assign the array with the same type of products to a variable
var productsOfSameType = [
    monsterUltra,
    { name: 'monster green', price: 22 },
    // { navn: 'monster red', pris: 22 } Wrong type will not work
];
printProducts(productsOfSameType);
// Way 2 - Type Assertions -> You assert that the type is correct, not recommended.
// IT will run as printProducts([monsterUltra]) and compiler will not check if the type is correct.
printProducts([monsterUltra]);
