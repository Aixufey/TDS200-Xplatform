import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Assets from "../../Assets";
import { Colors } from "../../Styles/StyleGuide";
import DetailPlanetCard from "../../components/DetailPlanetCard";
import Input from "../../components/Input";
import { PLANETS, Planet } from "../../data";





const SearchPage: React.FC = () => {
    const [planets, setPlanets] = useState<Planet[]>(PLANETS);

    const handleSearchChange = (text: string) => {
        const searchVal = text.toLowerCase();
        console.log(searchVal);
        setPlanets(
            PLANETS.filter((p) =>
                p.name.toLowerCase().includes(searchVal)
            ));
    }


    return (
        <View className="flex-1 pt-10 h-full justify-center items-center bg-system-brand">
            <Assets.images.BackgroundApp className="absolute z-0" />
            <Input onTextChange={handleSearchChange} />
            <ScrollView className="my-3 w-full">
                <View className="items-center">
                    {
                        planets && planets.map((planet, i) => (
                            <DetailPlanetCard
                                key={i}
                                planet={planet}
                            />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    );
};
export default SearchPage;


