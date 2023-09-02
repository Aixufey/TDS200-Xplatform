// A Callback is a function passed as an argument to another function



// Func we will pass as an argument to another function
const evaluate = (...numbers) => {
    return numbers.filter(num => num >= 0);
}

// Parameter 1 is the callback function, Parameter 2 is a Rest Parameter
const positiveInteger = (callBackFn, ...numbers) => {
    return callBackFn(...numbers);
}

// Call the func with the callback func as the first arg, and the rest of the args
positiveInteger(evaluate, -1, 5, 5, -2)
    .forEach(n => console.log(n));



// SetInterval is a perfect example of a callback function
const getTime = () => {
    let date = new Date();
    date.getMinutes();
    console.log(date);
}

setInterval(getTime, 1000); // Prints the time every second
