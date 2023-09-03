








function sum(val) {
    // sentinel value: value must be greater than 0 to recursively call again.
    if (val > 0) {
        return val + sum(val - 1)
    } else {
        return 0
    }
}

console.log(sum(2));
// 2 > 0 = 2 + sum(2-1 = 1) = 3
// 1 > 0 = 1 + sum(1-1 = 0) = 1
// 0 > 0 = 0 + sum(0-1 = -1) = 0


function nestedArray(arr) {
    if (arr.length === 0) {
        return []
    }
    const [curr, ...remain] = arr 
    const nested = nestedArray(remain)
    return [curr, nested]
}

const numbers = [1, 2, 3, 4, 5]
const nestedNum = nestedArray(numbers);
console.log(nestedNum);