






type Filter = {
    <T>(array: T[], predicate: (item: T) => boolean): T[]
}
/**
 * 
 * @param array of any type.
 * @param predicate accept a function that return boolean based on the condition.
 * @returns the array of the items that match the condition.
 */
const filter: Filter = (array: any[], predicate: Function) => {
    let result: any = []; 

    // Classic loop with index
    // for (let i = 0; i < array.length; i++) {

    //     let item = array[i];
    //     if (predicate(item)) {
    //         result.push(item);
    //     }
    // }

    // ES6 foreach
    array.forEach((item, i) => {
        if (predicate(item)) {
            result.push(item);
        }
    })

    return result;
}


let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isEven = (n: number) => n % 2 === 0;
console.log(filter(n, isEven))