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

// A definition of a type that can be either a T or an array of T.
type NestedArray<T> = T | NestedArray<T>[];
// Accepts an array of T's
const flattenArray = <T>(array: NestedArray<T>): T[] => {
    // Sentinel value for stopping recursion
    if (!Array.isArray(array)) {
        let a = [array];
        console.log(a)
        return a
    }
    console.log(array)
    return array.flatMap((i) => flattenArray(i));
};

console.log(flattenArray([[1, [2, [3, [4]], 5], 6]]));

