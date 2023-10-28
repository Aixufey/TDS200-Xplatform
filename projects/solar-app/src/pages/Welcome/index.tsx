import React from "react";
import { StyleSheet, Text, View } from "react-native"
import Assets from "../../Assets"
import { Colors, Fonts } from "../../Styles/StyleGuide";
import Button from "../../components/Button";
import useOwnNavigation from "../../hooks/useOwnNavigation";





const Welcome: React.FC = () => {
    const { goBack, navigate } = useOwnNavigation();

    const handleContinueClick = () => {
        navigate("HomeRoutes");
    }


    return (
        <View className="justify-center items-center bg-system-brand flex-1">
            <Assets.images.BackgroundApp className="absolute z-0" />
            <Text className="text-white text-center text-lg opacity-70">Welcome</Text>
            <Text className="text-white content-center w-10/12 text-center text-3xl font-bold">
                Lets's journey through our solar system
            </Text>
            <Text className="text-white mt-[50%] text-md">
                Press the button below to embark
            </Text>
            <Button
                title="Continue"
                Icon={Assets.icons.Forward}
                onPress={handleContinueClick}
            />
        </View>
    );
}

export default Welcome;