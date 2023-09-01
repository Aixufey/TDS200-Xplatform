/*
    Oppgave 2: Union and Intersection typer
    Definer typene Triangle og Rectangle som representerer figurer med egenskapene type og width, og height.
    Opprett en array som kun inneholder
    typen Shape og beregn det totale arealet basert på alle figurene i listen.
*/
var shapes = [
    { type: "triangle", width: 5, height: 8 },
    { type: "rectangle", width: 4, height: 6 },
];
var formulation = function (shape) {
    switch (shape.type) {
        case "triangle": return shape.width * shape.height / 2;
        case "rectangle": return shape.width * shape.height;
    }
    return 0;
};
var calculateArea = function (shapes) {
    var totalArea = 0;
    for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
        var s = shapes_1[_i];
        totalArea += formulation(s);
    }
    return totalArea;
};
console.log(calculateArea(shapes));
