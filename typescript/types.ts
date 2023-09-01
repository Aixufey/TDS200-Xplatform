// Type definition
type Student = {
    name?: string
    age?: number
}

// Object of type Student
let newStudent: Student = {
    name: 'John',
    age: 38
}

// Enums
enum Colors {
    Red,
    Green,
    Blue
}
const yyy: Colors = Colors.Red



// Tuples
let tup: [string, number] = ['John', 38]
tup = ['Wick', 40]
// tup[0] -> Wick
// tup[1] -> 40
console.log(tup)


// Union combining or removing fields from different source
type companyA = {
    id: number
    name: string
    employeeNumber?: string
}
type companyB = {
    id: number
    name: string
    employeeNumber?: string
    bankrupt?: boolean
}

type mergeCompany = companyA & companyB;
let addAddressToComp: mergeCompany & {
    address?: string
}