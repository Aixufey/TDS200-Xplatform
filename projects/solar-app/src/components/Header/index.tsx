import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Assets } from "../../Assets";
import { Fonts } from "../../Styles/StyleGuide";
import useOwnNavigation from "../../hooks/useOwnNavigation";





interface IHeaderProps {
    home?: boolean;
    handleBack?: () => void;
}
const Header: React.FC<IHeaderProps> = ({ home, handleBack }) => {
    const { goBack } = useOwnNavigation();

    const handleBackPress = () => {
        if (handleBack)
            return handleBack();
        goBack();
    }

    const handleSettingsPress = () => {
        console.log("settings")
    };

    return (
        <View className="flex-row justify-between items-center w-full h-1/5 p-5">
            {home ?
                (
                    <View>
                        <View className="flex-row">
                            <Text className="text-white font-bold text-3xl">
                                Well met,
                            </Text>
                            <Text className="text-[#FF2184] font-bold text-3xl"> friend</Text>
                            <Text className="text-white font-bold text-3xl">!</Text>
                        </View>
                        <Text className="text-white">What are you going to learn today?</Text>
                    </View>
                ) :
                (
                    <TouchableOpacity onPress={handleBackPress}>
                        <Assets.icons.Back />
                    </TouchableOpacity>
                )

            }

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
        alignItems: 'center',
        marginTop: 40,
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