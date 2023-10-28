import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SvgProps } from 'react-native-svg';
import Assets from '../../Assets';
import { Colors, Fonts } from '../../Styles/StyleGuide';
import { Planet } from '../../data';
import { usePlanetContext } from '../../providers/PlanetContextProvider';
import useOwnNavigation from '../../hooks/useOwnNavigation';





type DetailPlanetCardProps = {
    planetName: string
    planetInfo: string
    PlanetImage: React.FC<SvgProps>
}
interface IDetailPlanetCardProps {
    planet: Planet;
}
const DetailPlanetCard: React.FC<IDetailPlanetCardProps> = ({ planet }) => {
    const { Image, description, name } = planet;
    const { navigate } = useOwnNavigation();
    const {
        setCurrentPlanet,
        favorites,
        addToFavorites,
        removeFromFavorites
    } = usePlanetContext();

    const isFavorite = favorites.includes(name);
    const handleFavoriteSave = () => {
        if (isFavorite) {
            removeFromFavorites(name);
            return
        }
        addToFavorites(name);
    };

    const handleContinueReading = () => {
        setCurrentPlanet(planet);
        navigate("DetailsPage");
    };

    return (
        <View className='w-[100%] border-[1px] border-[#21A] overflow-hidden h-auto rounded-lg my-3 flex-row'>
            <Image width={200} height={200} className='bottom-8 right-10' />

            <View className='left-[-20px] w-[45%] mr-[100px] ml-[5px] justify-center '>
                <View className='flex-row justify-between items-center'>
                    <Text className='text-white text-2xl font-bold mb-2'>
                        {name}
                    </Text>
                    <TouchableOpacity
                        onPress={handleFavoriteSave}
                        className='left-3'
                    >
                        {isFavorite ? (
                            <Assets.icons.Save fill={'white'} />
                        ) : (
                            <Assets.icons.Save />
                        )}
                    </TouchableOpacity>
                </View>
                <Text className='text-white opacity-70'>
                    {description}
                </Text>
                <TouchableOpacity
                    className='flex-row mt-5 item-center'
                    onPress={handleContinueReading}
                >
                    <Text className='mr-3 text-white'>Continue reading...</Text>
                    <Assets.icons.OrangeForward
                        width={14}
                        height={14}
                        className='ml-2'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default DetailPlanetCard;