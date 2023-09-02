/*
    Oppgave 3: Avanserte Funksjonssignaturer
    Definer en type FilterFunction for en funksjon som filtrerer en array basert
    på resultattypen til en callback. Implementer en generisk funksjon filterArray
    ved hjelp av denne typen. Test funksjonen med ulike datatyper.
*/

/**
 * In essence, when creating your own function signatures with callbacks
 * 1. think about the purpose it should provide.
 * 2. consider the data types involved.
 * 3. using types or interface to define the structure of the callback.
 * 
 * Common context: filtering, mapping, reducing, event handling, async and validation.
 * */

// Filtering an array based on a condition. Accepts an element of type T
// and returns a boolean to determine yes or no for filtering.
type filterCallback<T> = (element: T) => boolean;
const filterArray = <T>(arr: T[], callback: filterCallback<T>) => {
    return arr.filter(callback);
}

const names = ["John", "Jane", "Jack", "Doe", "Doe"];
const filteredNames = filterArray(names, (name) => {
    return name.charAt(1)?.toLowerCase() === 'o'
})
console.log(filteredNames)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = filterArray(numbers, (num) => {
    return num % 2 !== 0;
})
console.log(oddNumbers)

const words = ['kayak', 'asdfasdf', 'wow', 'noon', 'dad', 'racecar']
const isPalindrome = filterArray(words, (word) => {
    return word.split("").reverse().join("") === word;
})
console.log(isPalindrome)


// Mapping involves transforming an array of type T to a new array of type V.
// Basically, iterating over each element, perform operations on each element and return a new array with the result.
type mapCallback<T, V> = (element: T) => V;

// Reducer is an aggregate function.
// Reducing an array of type T to a single value of type V, using an accumulator.
// Accumulator gathers the type V and returns an updated accumaulator of type V.
type reduceCallback<T, V> = (accumulator: V, element: T) => V;

// Event Handling is click, change or submit etc..
// The event handler accept an event of type E that extends the Event interface.
// respond to the event accordingly. Returns nothing.
type eventHandlerCallback<E extends Event> = (event: E) => void;

// Async accept a result of type T and error of type Error if any.
type asyncCallback<T> = (result: T, error?: Error | null) => void;
// API call
const fetchData = (callback: asyncCallback<any>): void => {
    // mimick an async call to API
    setTimeout(() => {
        // STATUS CODE
        const resp = 200;
        if (resp === 200) {
            callback({ data: "dummy" }, null);
        } else {
            callback(null, new Error("Error"));
        }
    }, 3000)
}

// Calling the fetchData with two arguments and respond accordingly.
fetchData((result, err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})


const addTwo = (para1: number, para2: number) => {
    return "Add: " + (para1 + para2)
}
const multiplyTwo = (para1: number, para2: number) => {
    return "Multiply: " + (para1 * para2)
}
const divideTwo = (para1: number, para2: number) => {
    return "Divide: " + (para1 / para2).toPrecision(2)
}

type mathTypes = ReturnType<typeof addTwo> | ReturnType<typeof multiplyTwo> | ReturnType<typeof divideTwo>


const myCalculator = (add: mathTypes) => { 
    return add
}


const r1 = myCalculator(addTwo(2,3))
const r2 = myCalculator(multiplyTwo(2,3))
const r3 = myCalculator(divideTwo(2,3))
console.log(r1)
console.log(r2)
console.log(r3)