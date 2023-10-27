import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SvgProps } from 'react-native-svg';
import Assets from '../../Assets';
import { Colors, Fonts } from '../../Styles/StyleGuide';





type DetailPlanetCardProps = {
    planetName: string
    planetInfo: string
    PlanetImage: React.FC<SvgProps>
}

const DetailPlanetCard: React.FC<DetailPlanetCardProps> = ({ planetName, planetInfo, PlanetImage }) => {
    return (
        <View className='w-[100%] font-poppins overflow-hidden h-auto rounded-lg my-3 flex-row'>
            <PlanetImage width={200} height={200} className='bottom-8 right-8' />

            <View
                // style={styles.infos}
                className='left-[-30px] w-[40%] mr-[100px] ml-[5px] justify-center'
            >
                <View
                    // style={styles.title}
                    className='flex-row justify-between items-center'
                >
                    <Text
                        // style={[Fonts.homeTitle(), styles.whiteText]}
                        className='text-white font-sans'
                    >
                        {planetName}
                    </Text>
                    <TouchableOpacity>
                        <Assets.icons.Save width={24} height={24} />
                    </TouchableOpacity>
                </View>
                <Text
                    // style={[styles.whiteText, styles.info]}
                    className=''
                >{planetInfo}</Text>
                <TouchableOpacity style={styles.footer}>
                    <Text style={styles.whiteText}>Continue reading...</Text>
                    <Assets.icons.OrangeForward
                        width={16}
                        height={16}
                        style={styles.arrow}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default DetailPlanetCard;

const styles = StyleSheet.create({
    container: {
        width: "95%",
        backgroundColor: Colors.brandBackground,
        height: "auto",
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10,
        flexDirection: "row",
        borderWidth: 5,
        borderColor: "red",
    },
    planet: {
        top: -45,
        left: -35,
    },
    infos: {
        left: -30,
        width: "40%",
        marginRight: 100,
        marginLeft: 5,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "red",
    },
    info: {
        opacity: 0.6,
        height: 100,
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    whiteText: {
        color: "white",
    },

    arrow: {
        marginLeft: 5,
    },
    footer: {
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center",
    },

})