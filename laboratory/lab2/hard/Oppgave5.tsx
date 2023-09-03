/* 
    Oppgave 5: Avanserte Egendefinerte Hooks
    Opprett en egendefinert hook som håndterer henting av data fra et API.
    Hooken skal ta en URL som parameter og returnere en type ApiResponse med
    egenskapene data, isLoading og error. 
    Hvis det oppstår en feil skal error egenskapen inneholde feilmeldingen, 
    ellers skal data-egenskapen inneholde dataene som ble hentet fra API-et.
    Du kan igjen bruke pokeapi.co for å teste ut funksjonaliteten - eller et annet
    API du ønsker.
*/
import { useState, useEffect } from "react";
type Props = {
    name: string;
    url: string;
};
interface PokemonResponse {
    name?: string;
    sprites?: {
        other?: {
            "official-artwork": {
                front_default?: string;
            };
        };
    };
}
export const useFetchPokemonByName = ({ name, url }: Props) => {
    const [data, setData] = useState<PokemonResponse | null>(null)
    let _url = url + name
    // console.log(_url)
    useEffect(() => {
        fetch(_url)
            .then((resp) => (
                resp.json()
            ))
            .then((data) => (
                setData(data)
            ))
    }, [url])
    
    return [data]
};
