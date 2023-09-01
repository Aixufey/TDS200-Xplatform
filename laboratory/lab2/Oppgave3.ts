/*
    Oppgave 3: Enum and Function Signatures
    Opprett en enum ButtonType med verdiene Primary, Secondary og Danger.
    Skriv en funksjon createButton som genererer en html button basert på typen
    og textinnhold som blir sendt som argumenter. 
    Her kan du bare printe HTMLinnholdet som en string
*/







// numeric enums has auto incrementing values
enum boolEnum {
    no = 0,
    yes // this will be 1
}
// string enums must have values
enum buttonTypeEnum {
    Primary = "primary",
    Secondary = "secondary",
    Danger = "danger"
}

const createButton = (type: buttonTypeEnum): HTMLButtonElement | String => {
    // const button = document.createElement('button');
    // button.setAttribute('class', type);
    // document.body.appendChild(button);
    const button = `<button class=${type}>Klikk meg</button>`
    return button
}


const lol = createButton(buttonTypeEnum.Primary)
console.log(lol)