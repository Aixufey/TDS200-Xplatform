/*
    Oppgave 3: Avanserte Funksjonssignaturer
    Definer en type FilterFunction for en funksjon som filtrerer en array basert
    på resultattypen til en callback. Implementer en generisk funksjon filterArray
    ved hjelp av denne typen. Test funksjonen med ulike datatyper.
*/
var filterArray = function (arr, callback) {
    return arr.filter(callback);
};
var names = ["John", "Jane", "Jack", "Doe", "Doe"];
var filteredNames = filterArray(names, function (name) {
    var _a;
    return ((_a = name.charAt(1)) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'o';
});
console.log(filteredNames);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var oddNumbers = filterArray(numbers, function (num) {
    return num % 2 !== 0;
});
console.log(oddNumbers);
var words = ['kayak', 'asdfasdf', 'wow', 'noon', 'dad', 'racecar'];
var isPalindrome = filterArray(words, function (word) {
    return word.split("").reverse().join("") === word;
});
console.log(isPalindrome);
// API call
var fetchData = function (callback) {
    // mimick an async call to API
    setTimeout(function () {
        // STATUS CODE
        var resp = 200;
        if (resp === 200) {
            callback({ data: "dummy" }, null);
        }
        else {
            callback(null, new Error("Error"));
        }
    }, 3000);
};
// Calling the fetchData with two arguments and respond accordingly.
fetchData(function (result, err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(result);
    }
});
var addTwo = function (para1, para2) {
    return "Add: " + (para1 + para2);
};
var multiplyTwo = function (para1, para2) {
    return "Multiply: " + (para1 * para2);
};
var divideTwo = function (para1, para2) {
    return "Divide: " + (para1 / para2).toPrecision(2);
};
var myCalculator = function (add) {
    return add;
};
var r1 = myCalculator(addTwo(2, 3));
var r2 = myCalculator(multiplyTwo(2, 3));
var r3 = myCalculator(divideTwo(2, 3));
console.log(r1);
console.log(r2);
console.log(r3);
