import { View, Text, StyleSheet, ScrollView } from "react-native"
import Assets from "../../Assets";
import Header from "../../components/Header";
import { Colors } from "../../Styles/StyleGuide";
import CategoryButton from "../../components/CategoryButton";
import PlanetCard from "../../components/PlanetCard";
import { CATEGORIES, PLANETS } from "../../data";








const HomePage: React.FC = () => {
    return (
        <View className="flex-1 bg-system-brand">
            <Assets.images.BackgroundApp className="absolute z-0" />
            <Header
                home
            />
            <View className="p-4">
                <Text className="text-white">Categories</Text>
                <View className="flex-row justify-between mt-3">
                    {CATEGORIES.map((category, i) => (
                        <CategoryButton
                            key={i}
                            category={category}
                        />
                    ))
                    }
                </View>
            </View>

            <Text className="text-white pl-4 mt-5">Planets</Text>
            <ScrollView
                horizontal={true}
                decelerationRate={"fast"}
                className="mt-3"
            >
                {PLANETS.map((planet, i) => (
                    <PlanetCard
                        key={i}
                        planet={planet}
                    />
                ))
                }
            </ScrollView>

        </View>
    );
};
export default HomePage;