import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SvgProps } from "react-native-svg"
import Assets from "../../Assets";
import { Colors } from "../../Styles/StyleGuide";








type PlanetCardProps = {
    label: string;
    PlanetImage: React.FC<SvgProps>;
    onPress?: (planetName: string) => void;
}
const PlanetCard: React.FC<PlanetCardProps> = ({ label, PlanetImage, onPress }) => {
    return (
        <TouchableOpacity onPress={ () => onPress && onPress(label) }>
            <View style={styles.container}>
                <PlanetImage style={styles.image} width={140} height={140} />
                <View style={styles.footer}>
                    <Text style={styles.label}>{label}</Text>
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