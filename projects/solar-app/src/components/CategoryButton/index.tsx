import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SvgProps } from "react-native-svg";
import { Gradients } from "../../Styles/StyleGuide";







type CategoryButtonProps = {
    label: string,
    Icon: React.FC<SvgProps>;
    color: "blue" | "pink" | "cyan" | "yellow",
};

const CategoryButton: React.FC<CategoryButtonProps> = ({label, Icon, color}) => {

    const Gradient = Gradients[color];

    return (
        <TouchableOpacity>
            <Gradient style={styles.container}>
                <Icon className="mb-2"/>
                <Text className="text-[#FFAA]">{label}</Text>
            </Gradient>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginBottom: 8,
    },
    label: {
        color: 'white'
    },
    textWhite: {
        color: 'white'
    }
})
export default CategoryButton;