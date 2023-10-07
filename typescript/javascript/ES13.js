//Private Class Fields


class Car {
    color;
    #year;
    constructor(color, year) {
        this.color = color;
        this.#year = year;
    }
    set year(year) {
        this.#year = year;
    }
    get year() {
        return this.#year;
    }
    #privateMethod() { }

    hasYear() {
        return #year in this;
    }
}

const redCar = new Car("red", 2000);
console.log(redCar.hasYear());


// Array Indexing
const names = ["Jake", "Jon", "Thruster"];
console.log(names.at(-1));


// regex
const email = 'test@gmail.com'

const regex = /@gmail.com/d;
const match = regex.exec(email);
console.log(match);