import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "../../components/Input";
import { Colors } from "react-native/Libraries/NewAppScreen";
import DetailPlanetCard from "../../components/DetailPlanetCard";
import Assets from "../../Assets";
import { SvgProps } from "react-native-svg";
import { useEffect, useState } from "react";





export type Planet = {
    planetName: string;
    PlanetImage: React.FC<SvgProps>;
    planetInfo: string;
}


const SearchPage: React.FC = () => {
    const [planets, setPlanets] = useState<Planet[]>([
        { planetName: "Mercury", PlanetImage: Assets.images.Mercury, planetInfo: "Mercury" }
    ])

    const handleSearchChange = (text: string) => {
        console.log(text);
        const searchVal = text.toLowerCase();
        const searchHit: any = PLANETS.filter((p) =>
            p.planetName.toLowerCase().includes(searchHit));
        setPlanets(searchHit);
    }
    useEffect(() => {
        setPlanets(PLANETS)
    }, [])


    return (
        <View style={styles.container}>
            <Input onTextChange={handleSearchChange} />
            <View style={styles.listContainer}>

                <ScrollView>
                    {
                        planets && planets.map((p, i) => (
                            <DetailPlanetCard
                                key={i}
                                planetName={p.planetName}
                                planetInfo={p.planetInfo}
                                PlanetImage={p.PlanetImage}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.brandBackground,
    },
    listContainer: {
        width: "95%",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: "green"
    }
});
export default SearchPage;


const PLANETS: Planet[] = [
    {
        planetName: "Mercury",
        PlanetImage: Assets.images.Mercury,
        planetInfo:
            "Mercury is the closest planet to the Sun and is known for its extreme temperatures.",
    },
    {
        planetName: "Venus",
        PlanetImage: Assets.images.Venus,
        planetInfo:
            'Venus is often called Earth’s "sister planet" due to its similar size and composition.',
    },
    {
        planetName: "Earth",
        PlanetImage: Assets.images.Earth,
        planetInfo:
            "Earth is the only known planet with life and is characterized by its diverse ecosystems.",
    },
    {
        planetName: "Mars",
        PlanetImage: Assets.images.Mars,
        planetInfo:
            'Mars is often called the "Red Planet" and is known for its iron-rich surface.',
    },
    {
        planetName: "Jupiter",
        PlanetImage: Assets.images.Jupiter,
        planetInfo:
            "Jupiter is the largest planet in the solar system and is composed mainly of gas.",
    },
    {
        planetName: "Saturn",
        PlanetImage: Assets.images.Saturn,
        planetInfo:
            "Saturn is famous for its stunning ring system made up of ice and rock particles.",
    },
    {
        planetName: "Uranus",
        PlanetImage: Assets.images.Uranus,
        planetInfo:
            "Uranus is a gas giant with a unique feature: it rotates on its side.",
    },
    {
        planetName: "Neptune",
        PlanetImage: Assets.images.Neptune,
        planetInfo:
            "Neptune is the farthest known planet from the Sun and is a frigid, windy world.",
    },
];