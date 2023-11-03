import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { usePlanetContext } from "../../providers/PlanetContextProvider";
import Assets from "../../Assets";
import Header from "../../components/Header";
import useOwnNavigation from "../../hooks/useOwnNavigation";
import DropDownListItem from "../../components/DropDownListItem";
import { doggoIpsum } from "../../data";
import { PlanetInfo, fetchPlanet } from "../../components/api";
import { useEffect, useState } from "react";






const DetailsPage: React.FC = () => {
    const [planetInfo, setPlanetInfo] = useState<PlanetInfo>();
    const { currentPlanet } = usePlanetContext();
    const { name, Image, description } = currentPlanet;
    const { goBack } = useOwnNavigation();

    const useFetchData = async () => {
        const planet = await fetchPlanet(name);
        setPlanetInfo(planet);
    }

    useEffect(() => {
        useFetchData();
    }, [currentPlanet]);



    const handleBackPress = () => {
        goBack();
    }

    const prettyPrintPlanetInfo = (planetInfo: PlanetInfo | undefined) => {
        if (!planetInfo) {
            return "No planet info available";
        }
        return JSON.stringify(planetInfo, null, 4);
    };
    return (
        <View className="flex-1 bg-white round pt-10">

            <View className="w-full absolute overflow-hidden pt-10 bg-system-brand h-[200px]">
                <Assets.images.BackgroundApp />
            </View>
            <Header
                handleBack={handleBackPress}
            />
            <Image
                width={200}
                height={200}
                className="self-center bottom-20 shadow-2xl"
            />
            <ScrollView className="border-2 border-white px-4 bottom-20">
                <View className="flex-row items-center justify-between">
                    <Text className="text-3xl font-bold">{name}</Text>
                    <View className="flex-row justify-between">
                        <TouchableOpacity className="mr-6">
                            <Assets.icons.Save width={24} height={24} fill={'#FA3'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Assets.icons.Share width={24} height={24} />
                        </TouchableOpacity>
                    </View>
                </View>

                <Text className="mt-4 text-md">{description}</Text>
                <DropDownListItem title="History" text={doggoIpsum} />
                <View className="border border-brand opacity-10" />
                <DropDownListItem title="Physical Characteristics" text={prettyPrintPlanetInfo(planetInfo)} />
                <View className="border border-brand opacity-10" />
                <DropDownListItem title="Notable people" text={doggoIpsum} />
                <View className="border border-brand opacity-10" />
                <DropDownListItem title="Location" text={doggoIpsum} />
            </ScrollView>


        </View>
    );
}
export default DetailsPage;