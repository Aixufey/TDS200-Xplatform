




const animals = ['cat', 'dog', 'snake']
const person = {
    name: 'John',
    age: 30,
    weight: 75
}
// Entries returns an array so we need to use destructuring when we iterate over k/v
Object.entries(person).forEach(([k, v]) => console.log(k, v))

// Values returns an array with values.
Object.values(person).forEach((val, i) => console.log(i, val))

// for in... iterate over keys BUT can get values
for (let x in person) {
    console.log(x, person[x])
}
// for of...
for (let [k, v] of Object.entries(person)) {
    console.log(k,v)
}

// for of... iterate over key or value
for (let k of Object.keys(person)) console.log(k)
for (let v of Object.values(person)) console.log(v)

// Shorthand the same as forEach with destructuring
for (let [k, v] of Object.entries(person)) {
    console.log(k, v)
}

// What is the difference between for...in and for...of?

// Complex structures
const complexData = [
    { id: 0, name: "John", age: 30 },
    { id: 1, name: "Jane", age: 25 },
    { id: 2, name: "Peter", age: 35 },
]
for (let x of complexData) {
    console.log(x)
}
// single object
const simpleData = {
    id: 0, name: "John", age: 30
}
for (let x in simpleData) {
    console.log(x, simpleData[x])
}
// API mock data
const APIDATA = {
    "data": {
        "users": [
            {
                "id": 1,
                "name": "John",
                "age": 30
            },
            {
                "id": 2,
                "name": "Jane",
                "age": 25
            },
            {
                "id": 3,
                "name": "Peter",
                "age": 35
            }
        ],
        "url": [
            { "url": "http://www.google.com" },
            { "url": "http://www.yahoo.com" },
            { "url": "http://www.bing.com" }
        ]
    }
}
for (let x of APIDATA.data.users) {
    console.log(x)
}
for (let x of APIDATA.data.url) {
    console.log(x.url)
}