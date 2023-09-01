/*
    Oppgave 4: Optional and Default parametre
    Implementer en funksjon som beregner arealet til en rektangel. Utvid funksjonen
    til å akseptere valgfrie parametere for bredden og høyden til rektangelet. Hvis
    ikke gitt, bruk standardverdier på 5 for begge dimensjoner.
    Utvid denne funksjonen til å støtte sirkler også. Du trenger ikke definere typer,
    men du er velkommen til å gjøre det. Du må derimot klare å differensiere mellom
    rektangler og sirkler.
*/


interface IRectangle {
    type: "rectangle";
    width?: number;
    height?: number;
}
interface ICircle {
    type: "circle";
    radius?: number;
}

type unionShape = IRectangle | ICircle;
type intersectionShape = IRectangle & ICircle;

const formula = (shape: unionShape | intersectionShape, width?: number, height?: number, radius?: number): number => {
    switch (shape.type) {
        case "rectangle": return (width ? width : 5) * (height ? height : 5)
        case "circle": return Math.PI * (radius ? radius : 5) * (radius ? radius : 5);
    }
}

const calcArea = (type: string, width?: number, height?: number, radius?: number): number => {
    let shape: unionShape | intersectionShape;
    if (type === 'rectangle') {
        shape = { type: type, width, height}
    } else if (type === 'circle') {
        shape = { type: type, radius }
    } else {
        throw new Error('Invalid type')
    }
    return formula(shape, width, height, radius)
}

const rectanglelol = calcArea('rectangle')
const rectanglelol2 = calcArea('rectangle', 7, 7)
const circlelol = calcArea('circle', 5)

console.log(rectanglelol)
console.log(rectanglelol2)
console.log(circlelol)