import { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, TextInput, Pressable, TouchableOpacity } from "react-native";



let rates = [
    { "USD": 1.0, "GBP": 0.71964, "EUR": 0.8249 }
]





const CurrencyPage: React.FC = () => {
    const [amount, setAmount] = useState<string>("")
    const [from, setFrom] = useState<string>("")
    const [to, setTo] = useState<string>("")

    const handleAmount = (txt: string) => {
        console.log(amount)
        return setAmount(txt)
    }
    const handleFrom = (txt: string) => {
        console.log(from);
        setFrom(txt)
    }
    const handleTo = (txt: string) => {
        console.log(to);
        setTo(txt)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.text}>Amount</Text>
                    <TextInput
                        autoCorrect={false}
                        style={styles.inputStyle}
                        onChangeText={handleAmount}
                        placeholder="Enter an amount.."
                        placeholderTextColor={'#9F9F9F'}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.text}>From</Text>
                    <TextInput
                        autoCorrect={false}
                        style={styles.inputStyle}
                        onChangeText={handleFrom}
                        placeholder="USD.. GBP.. EUR.."
                        placeholderTextColor={'#9F9F9F'}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.text}>To</Text>
                    <TextInput
                        autoCorrect={false}
                        style={styles.inputStyle}
                        onChangeText={handleTo}
                        placeholder="USD.. GBP.. EUR.."
                        placeholderTextColor={'#9F9F9F'}
                    />
                </View>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.text}>{amount} {from} {from ? '=': ''}</Text>
                <Text>{to}</Text>
            </View>
            <View style={styles.fieldContainer}>
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={{ color: 'linen', fontWeight: 'bold', fontSize: 28, fontFamily: 'American Typewriter' }}>Convert</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#293241"
    },
    fieldContainer: {
        paddingTop: 15,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    inputStyle: {
        color: '#F1F4F8',
        marginTop: 15,
        fontSize: 14,
        width: "100%", // Make the note input full width
        height: "100%", // Make the note input full height
        outlineStyle: 'none',
    },
    text: {
        fontSize: 20,
        color: '#F1F4F8',
        fontWeight: 'bold',
        fontFamily: 'American Typewriter',
    },
    btnStyle: {
        borderStyle: 'solid',
        borderColor: '#293241',
        borderWidth: 2,
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: '#3D5A80',
        borderRadius: 15,
    },
});

export default CurrencyPage;