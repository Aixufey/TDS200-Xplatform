import { SvgProps } from "react-native-svg";
import Assets from "../Assets";
import { ReactNode, createContext, useContext, useState } from "react";





export type Planet = {
    planetName: string;
    PlanetImage: React.FC<SvgProps>;
    planetInfo: string;
}

const EARTH: Planet = {
    planetName: "Earth",
    PlanetImage: Assets.images.Earth,
    planetInfo: "Earth"
}


// Context is tracking which planet was selected
type PlanetContextType = {
    currentPlanet: Planet
    setCurrentPlanet: (planet: Planet) => void
    children?: React.ReactNode
}

const PlanetContext = createContext<PlanetContextType>({
    currentPlanet: {
        planetName: "",
        PlanetImage: Assets.images.Earth,
        planetInfo: ""
    },
    setCurrentPlanet: () => {},
})
export const usePlanetContext = () => useContext(PlanetContext);

const PlanetContextProvider = ({children}: {children: ReactNode}) => {
    const [currentPlanet, setCurrentPlanet] = useState<Planet>(EARTH);

    // Encapsulate children not to change state
    const updateCurrentPlanet = (planet: Planet) => {
        setCurrentPlanet(planet);
    }
    return (
    <PlanetContext.Provider value={{
        currentPlanet, 
        setCurrentPlanet: updateCurrentPlanet, // setCurrentPlanet is of type UpdateCurrentPlanet that takes in the same type of prop
        }}>
        {children}
    </PlanetContext.Provider>
    )
}

export default PlanetContextProvider;