/* 
    Oppgave 1: Type Inference and Interfaces
    Definer et interface eller type Student med egenskapene name (string), age
    (nuimber) og grade (string). Opprett en array med Student-objekter. Skriv
    en funksjon som tar et Student-objekt som parameter og logger detaljene med
    console.log.
*/

interface IStudent {
    name?: string
    age?: number
    grade?: string
}

const students: IStudent[] = [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 21, grade: "B" },
]

const logStudent = (student: IStudent[]) => {
    student.forEach(s => console.log(`${s.name} er ${s.age} år gammel og har karakteren ${s.grade}`))
}

logStudent(students)


