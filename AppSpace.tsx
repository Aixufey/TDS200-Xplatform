import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { CustomButton as BTN } from './laboratory/lab2/medium/AdvancedReactNativeComponent';
import useAuthContext from "./hooks/useAuthContext";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";








export default function () {
    const handlePress = () => {
        alert(useAuth?.currentUser)
    }
    const useAuth = useAuthContext();
    console.log(useAuth)

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.belt}>Let's journey through the solar system together!</Text>
            <Text style={styles.belt}>Click the button below to embark!</Text>
            <TouchableOpacity style={styles.button}>
                <Text>Continue</Text>
            </TouchableOpacity>
            <BTN
                label='Continue'
                onPress={handlePress}
                style={styles.button}
            />
            <Counter1 />
            <Counter2 />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        maxWidth: '85%',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 50,
    },
    belt: {
        color: 'white',
        textAlign: 'center',
        opacity: 0.65,
    },
    button: {
        backgroundColor: '#d23',
        padding: 10,
        borderRadius: 5,
        marginTop: 25,
    }
});