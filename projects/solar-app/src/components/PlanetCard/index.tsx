import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SvgProps } from "react-native-svg"
import Assets from "../../Assets";
import { Colors } from "../../Styles/StyleGuide";
import { Planet, usePlanetContext } from "../../providers/PlanetContextProvider";
import useOwnNavigation from "../../hooks/useOwnNavigation";








type PlanetCardProps = {
    label: string;
    PlanetImage: React.FC<SvgProps>;
    onPress?: (planetName: string) => void;
}



const PlanetCard: React.FC<PlanetCardProps> = ({ label, PlanetImage, }) => {
    const {setCurrentPlanet} = usePlanetContext();
    const {navigate} = useOwnNavigation();
    
    const handlePlanetPress = () => {
        const planet: Planet = {
            planetName: label,
            PlanetImage,
            planetInfo: label,
        }
        setCurrentPlanet(planet);
        navigate("DetailsPage");
    };
    

    return (
        <TouchableOpacity onPress={ handlePlanetPress }>
            <View className="bg-brand w-140 h-190 overflow-hidden mr-5 rounded-md">
                <PlanetImage width={140} height={140} className="right-6 bottom-5"/>
                <View className="flex-row justify-between items-center bottom-2">
                    <Text className="text-white ml-4">{label}</Text>
                    <Assets.icons.OrangeForward style={styles.icon} width={15} height={15} />
                </View>
            </View>

        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.brandBackground,
        borderRadius: 8,
        width: 140,
        height: 190,
        overflow: 'hidden',
        gap: 16,
    },
    image: {
        left: -35,
        top: -25,
    },
    label: {
        color: 'white',
        marginLeft: 16,
    },
    icon: {
        marginRight: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        bottom: 8,
    },
});
export default PlanetCard;