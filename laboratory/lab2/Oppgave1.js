/*
    Oppgave 1: Type Inference and Interfaces
    Definer et interface eller type Student med egenskapene name (string), age
    (nuimber) og grade (string). Opprett en array med Student-objekter. Skriv
    en funksjon som tar et Student-objekt som parameter og logger detaljene med
    console.log.
*/
var students = [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 21, grade: "B" },
];
var logStudent = function (student) {
    student.forEach(function (s) { return console.log("".concat(s.name, " er ").concat(s.age, " \u00E5r gammel og har karakteren ").concat(s.grade)); });
};
logStudent(students);
