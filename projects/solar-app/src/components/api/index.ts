
export type PlanetInfo = {
    name: string;
    mass: number;
    radius: number;
    period: number;
    semi_major_axis: number;
    temperature: number;
    distance_light_year: number;
    host_star_mass: number;
    host_star_temperature: number;
}
export const fetchPlanet = async (name: string) : Promise<PlanetInfo> => {
    const resp = await fetch(`https://api.api-ninjas.com/v1/planets?name=${name}`,
        {
            headers: {  
                "X-Api-Key" : "jvMqsIO/2wq4QwzuP5CTFw==rJLSs49v8HtDCK78"
            }
        }
    );

    const data = await resp.json();
    return data;
}