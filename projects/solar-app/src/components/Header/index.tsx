import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Assets } from "../../Assets";
import { Fonts } from "../../Styles/StyleGuide";






const Header: React.FC = () => {
    const handleSettingsPress = () => {
        console.log("settings")
    };

    return (
        <View style={styles.container}>

            <View>
                <View style={styles.helloBlock}>
                    <Text style={[Fonts.homeTitle(), styles.textWhite]}>
                        Well met,
                    </Text>
                    <Text style={[Fonts.homeTitle(), styles.textPink]}>friend</Text>
                </View>
                <Text style={styles.textWhite}>What are you going to learn today?</Text>
            </View>

            <View>
                <TouchableOpacity onPress={handleSettingsPress}>
                    <Assets.icons.Settings />
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "95%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    helloBlock: {
        flexDirection: 'row',
    },
    settingsWrapper: {
        flexDirection: 'row',
    },
    textWhite: {
        color: "white"
    },
    textPink: {
        color: "#FF2184"
    }
})
export default Header;