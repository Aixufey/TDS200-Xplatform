import { SvgProps } from "react-native-svg";
import Assets from "../Assets";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Planet, retrieveFavoritesFromStorage } from "../data";
import AsyncStorage from "@react-native-async-storage/async-storage";






const EARTH: Planet = {
    name: "Earth",
    Image: Assets.images.Earth,
    description: "Earth"
}


// Context is tracking which planet was selected
type PlanetContextType = {
    currentPlanet: Planet;
    favorites: string[];
    setCurrentPlanet: (planet: Planet) => void;
    addToFavorites: (planetName: string) => void;
    removeFromFavorites: (planetName: string) => void;
    children?: React.ReactNode;
}

const PlanetContext = createContext<PlanetContextType>({
    currentPlanet: EARTH,
    favorites: [],
    setCurrentPlanet: (planet: Planet) => { },
    addToFavorites: (planetName: string) => { },
    removeFromFavorites: (planetName: string) => { },
})

export const usePlanetContext = () => useContext(PlanetContext);

const PlanetContextProvider = ({ children }: { children: ReactNode }) => {
    const [currentPlanet, setCurrentPlanet] = useState<Planet>(EARTH);
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const getFavorites = async () => {
            const favorites = await retrieveFavoritesFromStorage();
            setFavorites(favorites);
        };
        getFavorites();
    }, [])

    // Encapsulate children not to change state
    const updateCurrentPlanet = (planet: Planet) => {
        setCurrentPlanet(planet);
    }

    // Add to favorites
    const addToFavorites = async (planetName: string) => {
        if (favorites.includes(planetName)) return;
        const newFavorites = [...favorites, planetName];
        setFavorites(newFavorites);
        await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
    };

    // Remove from favorites
    const removeFromFavorites = async (planetName: string) => {
        const newFavorites = favorites.filter(item => item !== planetName);
        setFavorites(newFavorites);
        await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
    };

    return (
        <PlanetContext.Provider value={{
            favorites,
            currentPlanet,
            addToFavorites,
            removeFromFavorites,
            setCurrentPlanet: updateCurrentPlanet, // setCurrentPlanet is of type UpdateCurrentPlanet that takes in the same type of prop
        }}>
            {children}
        </PlanetContext.Provider>
    )
}

export default PlanetContextProvider;