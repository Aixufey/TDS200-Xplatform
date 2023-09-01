/*
    Oppgave 3: Enum and Function Signatures
    Opprett en enum ButtonType med verdiene Primary, Secondary og Danger.
    Skriv en funksjon createButton som genererer en html button basert på typen
    og textinnhold som blir sendt som argumenter.
    Her kan du bare printe HTMLinnholdet som en string
*/
// numeric enums has auto incrementing values
var boolEnum;
(function (boolEnum) {
    boolEnum[boolEnum["no"] = 0] = "no";
    boolEnum[boolEnum["yes"] = 1] = "yes"; // this will be 1
})(boolEnum || (boolEnum = {}));
// string enums must have values
var buttonTypeEnum;
(function (buttonTypeEnum) {
    buttonTypeEnum["Primary"] = "primary";
    buttonTypeEnum["Secondary"] = "secondary";
    buttonTypeEnum["Danger"] = "danger";
})(buttonTypeEnum || (buttonTypeEnum = {}));
var createButton = function (type) {
    // const button = document.createElement('button');
    // button.setAttribute('class', type);
    // document.body.appendChild(button);
    var button = "<button class=".concat(type, ">Klikk meg</button>");
    return button;
};
var lol = createButton(buttonTypeEnum.Primary);
console.log(lol);
