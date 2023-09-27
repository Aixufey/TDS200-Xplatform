import { useEffect, useState } from "react";
import { Image, View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import WeatherItem from "./WeatherItem";







type WeatherEntity = {
    location: {
        name?: string,
        region?: string,
        country?: string,
    },
    current: {
        temp_c: string,
        condition: {
            text: string,
            icon: string,
        }
    }
}
const WeatherPage: React.FC = () => {
    const [textInput, setTextInput] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [data, setData] = useState<WeatherEntity | null>(null)

    // handleTextChange: txt is being passed into this callback from onChangeText.
    const handleTextChange = (txt: string): void => {
        if (txt) {
            setTextInput(txt)
        }
    };
    const handlePressChange = (): void => {
        if (textInput) {
            setName(textInput)
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            let url = `http://api.weatherapi.com/v1/current.json?key=570c3cfc9f854b899a0105700232109&q=${name}&aqi=yes`
            const response = await fetch(url)
            const json = await response.json()

            // WeatherAPI returns error object if not found
            // assertion guard to set data only if json is WeatherEntity
            const assertThat = (data: any): data is WeatherEntity => {
                return (
                    "location" in data &&
                    "current" in data
                );
            };
            if (assertThat(json)) {
                setData(json)
                console.log(json)
            } else {
                setData(null)
            }
        };
        fetchData();
    }, [name]);




    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>WeatherPage</Text>
                <TextInput
                    autoCorrect={false}
                    onChangeText={handleTextChange}
                    placeholder="Enter a city.."
                    placeholderTextColor={'#9F9F9F'}
                />
                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={handlePressChange}
                >
                    <Text style={styles.textWhite}>Search</Text>
                </TouchableOpacity>
            </View>

            { data ? (
                <View style={styles.dataContainer}>
                    <WeatherItem 
                        location={data.location}
                        current={data.current}
                    />
                </View>) : (
                    <View style={styles.dataContainer}>
                        <Text>Not found</Text>
                    </View>
                )
            }


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'linen'
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        backgroundColor: "#000",
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    textWhite: {
        color: 'white'
    },
    dataContainer: {
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    

})
export default WeatherPage;



