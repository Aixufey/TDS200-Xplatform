/*
    Vanskelige Oppgaver:
    Oppgave 1: Rekursive types
    Definer en type NestedArray som representerer en array med potensielt uendelig dype nested arrays.
    Opprett en array av denne typen med flere nivåer av 3 nesting.
    Implementer en funksjon som flater ut den innebygde array-strukturen.
    Det vil si: [1, [2, [3, 4], 5], 6] blir til [1, 2, 3, 4, 5, 6].
    console.log(flattenArray([1, [2, [3, 4], 5], 6]));
    // Prints: [1, 2, 3, 4, 5, 6]
*/
// Accepts an array of T's
var flattenArray = function (array) {
    // Sentinel value for stopping recursion
    if (!Array.isArray(array)) {
        var a = [array];
        console.log(a);
        return a;
    }
    console.log(array);
    return array.flatMap(function (i) { return flattenArray(i); });
};
console.log(flattenArray([[1, [2, [3, [4]], 5], 6]]));
