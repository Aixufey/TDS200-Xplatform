import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SvgProps } from "react-native-svg"
import Assets from "../../Assets";
import { Colors } from "../../Styles/StyleGuide";
import { usePlanetContext } from "../../providers/PlanetContextProvider";
import useOwnNavigation from "../../hooks/useOwnNavigation";
import { Planet } from "../../data";







type PlanetCardProps = {
    label: string;
    PlanetImage: React.FC<SvgProps>;
    onPress?: (planetName: string) => void;
}


interface IPlanetCardProps {
    planet: Planet;
}
const PlanetCard: React.FC<IPlanetCardProps> = ({ planet }) => {
    const { Image, name } = planet;
    const { setCurrentPlanet } = usePlanetContext();
    const { navigate } = useOwnNavigation();

    const handlePlanetPress = () => {
        setCurrentPlanet(planet);
        navigate("DetailsPage");
    };


    return (
        <TouchableOpacity onPress={handlePlanetPress}>
            <View className="bg-brand w-140 h-190 overflow-hidden mr-5 rounded-md">
                <Image width={140} height={140} className="right-6 bottom-5" />
                <View className="flex-row justify-between items-center bottom-2">
                    <Text className="text-white ml-4">{name}</Text>
                    <Assets.icons.OrangeForward className="mr-2" width={15} height={15} />
                </View>
            </View>

        </TouchableOpacity>
    );
};
export default PlanetCard;