import { useEffect } from "react";
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraItem } from "../../components";
import { Design } from "../../styles";






type ScreenProps = {
    pageName?: string,
    onMount?: (unMount: boolean) => void
    setCurrentPage?: React.Dispatch<React.SetStateAction<string>>
}
/**
 * 
 * @param pageName specify which page this Page may Route too otherwise unMount itself from DOM
 * @returns Camera Screen
 */
const CameraScreen: React.FC<ScreenProps> = ({ pageName, onMount, setCurrentPage }) => {
    // console.log(onUnmount)
    const handlePressUnMount = (event: GestureResponderEvent) => {
        // Assert prop exist and set the conditional state from children back to Parent.
        onMount && onMount(true);
        setCurrentPage && pageName && setCurrentPage(pageName);
    }

    useEffect(() => {
        console.log('Mounted Camera Screen')
        return () => {
            console.log('Unmounted Camera Screen')
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                <View style={styles.camera}>
                    <CameraItem />
                </View>
            </View>

            <TouchableOpacity
                onPress={handlePressUnMount}
                style={Design.buttonPrimary}
            >
                <Text style={Design.textWhite}>
                    Unmount Me
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'green',
        width: `100%`,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    // flex 1 is like Spacer() it will stretch all available spaces 
    cameraContainer: {
        flex: 1,
        // borderWidth: 1,
        // borderStyle: `dotted`,
    },
    camera: {
        width: 350,
        height: 350,
        borderWidth: 1,
        borderStyle: `dotted`,
        borderColor: `pink`,
        justifyContent: `center`,
        alignItems: `center`,
    }
});
export default CameraScreen;