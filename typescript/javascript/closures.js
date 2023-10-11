// global
let count = 0;







const counter = (function() {
    let count = 0;
    return function() {
        return count += 1;
    }
})();

// console.log(counter());
// console.log(counter());
// console.log(counter());


const add = (() => {
    let count = 0;
    return () => {
        return count += 1;
    }
})();

console.log(add())

let posts = [
    {id: 1, title: 'Hello'},
    {id: 2, title: 'Bonjour'},
]
const List = ((posts, () => {
    posts.forEach(p => (
        console.log(p.title)
    ))
}))();

const teller = (() => {
    let count = 0;
    return {
        leggtil: () => {return count += 1;}
    }
})();



// console.log(teller.leggtil());
// console.log(teller.leggtil());
// console.log(teller.leggtil());