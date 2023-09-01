/*
    Oppgave 5: Type guards and Discriminated unions
    Definer en unionstype MyResponse med egenskapene status (number) og
    data (string eller number) for å representere API-responser. Skriv en funksjon
    handleResponsesom tar et MyResponse-objekt og logger innholdet basert på
    statusen. Du kan se på alt som ikke gir status = 200 som en error.

    Utvid funksjonen til å bruke fetch for å hente data fra et API. F.eks. pokeapi.co.
*/

// Defining available data types
type MyResponse = {
    status: number
    data: string | number
}
// Dummy datagram
const successData: MyResponse = {
    status: 200,
    data: "Fetched successful"
}
const errorData : MyResponse = {
    status: 400,
    data: "Error fetching data"
}

// Part 1 test 
const getResponse = (response: MyResponse) : void => {
    if (response.status === 200) {
        console.log("Success", response.data)
    } else {
        console.log("Error", response.data)
    }
}
getResponse(successData)

// Part 2 call to PokeAPI https://pokeapi.co/api/v2/pokemon/1
type Bulbasaur = {
    id?: number,
    name?: string,
    forms?: {
        name?: string
        url?: string
    }[],
}
const fetchResponse = async (response: Response) => {
    if (response.status === 200) {
        const data: Bulbasaur = await response.json()
        if (data.forms) {
            const form =  data.forms[0];
            console.log(`A Pokemon ${data.id} ${data.name} ${form.name} ${form.url}`)
        }
        //console.log("Success", data) 
    } else {
        console.log("Error", await response.json())
    }
}

const getPokemon = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/1")
    fetchResponse(data)
}


getPokemon()