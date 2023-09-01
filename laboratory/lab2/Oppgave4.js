/*
    Oppgave 4: Optional and Default parametre
    Implementer en funksjon som beregner arealet til en rektangel. Utvid funksjonen
    til å akseptere valgfrie parametere for bredden og høyden til rektangelet. Hvis
    ikke gitt, bruk standardverdier på 5 for begge dimensjoner.
    Utvid denne funksjonen til å støtte sirkler også. Du trenger ikke definere typer,
    men du er velkommen til å gjøre det. Du må derimot klare å differensiere mellom
    rektangler og sirkler.
*/
var formula = function (shape, width, height, radius) {
    switch (shape.type) {
        case "rectangle": return (width ? width : 5) * (height ? height : 5);
        case "circle": return Math.PI * (radius ? radius : 5) * (radius ? radius : 5);
    }
};
var calcArea = function (type, width, height, radius) {
    var shape;
    if (type === 'rectangle') {
        shape = { type: type, width: width, height: height };
    }
    else if (type === 'circle') {
        shape = { type: type, radius: radius };
    }
    else {
        throw new Error('Invalid type');
    }
    return formula(shape, width, height, radius);
};
var rectanglelol = calcArea('rectangle');
var rectanglelol2 = calcArea('rectangle', 7, 7);
var circlelol = calcArea('circle', 5);
console.log(rectanglelol);
console.log(rectanglelol2);
console.log(circlelol);
