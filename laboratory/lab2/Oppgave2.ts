/*
    Oppgave 2: Union and Intersection typer
    Definer typene Triangle og Rectangle som representerer figurer med egenskapene type og width, og height. 
    Opprett en array som kun inneholder
    typen Shape og beregn det totale arealet basert på alle figurene i listen.
*/

interface IShape {
    type?: string
    width?: number
    height?: number
}

interface ITriangle extends IShape { 
    type: "triangle"
}

interface IRectangle extends IShape {
    type: "rectangle"
}

const shapes: IShape[] = [
    { type: "triangle", width: 5, height: 8 },
    { type: "rectangle", width: 4, height: 6 },
]


const formulation = (shape: IShape): number => {
    switch (shape.type)
    {
        case "triangle": return shape.width! * shape.height! / 2
        case "rectangle": return shape.width! * shape.height!
    }

    return 0
}

const calculateArea = (shapes: IShape[]): number => {
    let totalArea = 0
    
    for (const s of shapes) {
        totalArea += formulation(s)
    }
    return totalArea
}

console.log(calculateArea(shapes))