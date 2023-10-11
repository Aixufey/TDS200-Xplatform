import { View, Text, StyleSheet, ScrollView } from "react-native"
import Assets from "../../Assets";
import Header from "../../components/Header";
import { Colors } from "../../Styles/StyleGuide";
import CategoryButton from "../../components/CategoryButton";
import PlanetCard from "../../components/PlanetCard";









const HomePage: React.FC = () => {
    return (
        <View style={styles.container}>
            <Assets.images.BackgroundApp style={styles.bgImage} />

            <View style={styles.content}>
                <Header />

                <View style={styles.categories}>
                    <Text style={styles.textWhite}>Categories</Text>
                    <View style={styles.categoryList}>
                        <CategoryButton
                            label="Planets"
                            Icon={Assets.icons.Planets}
                            color="blue"
                        />
                        <CategoryButton
                            label="Asteroids"
                            Icon={Assets.icons.Asteroids}
                            color="pink"
                        />
                        <CategoryButton
                            label="Stars"
                            Icon={Assets.icons.Stars}
                            color="cyan"
                        />
                        <CategoryButton
                            label="Galaxies"
                            Icon={Assets.icons.Galaxies}
                            color="yellow"
                        />
                    </View>
                </View>

                <View style={styles.planets}>
                    <Text style={styles.textWhite}>Planets</Text>
                    <ScrollView horizontal={true} decelerationRate={"fast"} style={styles.scrollView}>
                        <PlanetCard
                            label="Mercury"
                            PlanetImage={Assets.images.Mercury}
                        />
                        <PlanetCard
                            label="Venus"
                            PlanetImage={Assets.images.Venus}
                        />
                        <PlanetCard
                            label="Earth"
                            PlanetImage={Assets.images.Earth}
                        />
                        <PlanetCard
                            label="Mars"
                            PlanetImage={Assets.images.Mars}
                        />
                        <PlanetCard
                            label="Jupiter"
                            PlanetImage={Assets.images.Jupiter}
                        />
                        <PlanetCard
                            label="Saturn"
                            PlanetImage={Assets.images.Saturn}
                        />
                    </ScrollView>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.brandBackground,
        // flexDirection: 'column',
        // justifyContent: "flex-start",
        // alignItems: "center",
    },
    categoryList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 18,
    },
    planetsList: {
        flexDirection: 'row',
    },
    bgImage: {
        position: "absolute",
        zIndex: 0,
    },
    textWhite: {
        color: 'white'
    },
})
export default HomePage;