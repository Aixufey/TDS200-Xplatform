/**
 *
 * @param array of any type.
 * @param predicate accept a function that return boolean based on the condition.
 * @returns the array of the items that match the condition.
 */
var filter = function (array, predicate) {
    var result = [];
    // Classic loop with index
    // for (let i = 0; i < array.length; i++) {
    //     let item = array[i];
    //     if (predicate(item)) {
    //         result.push(item);
    //     }
    // }
    // ES6 foreach
    array.forEach(function (item, i) {
        if (predicate(item)) {
            result.push(item);
        }
    });
    return result;
};
var n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var isEven = function (n) { return n % 2 === 0; };
console.log(filter(n, isEven));
