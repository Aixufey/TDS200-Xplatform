import { useState } from "react";
import { Pressable, View, Text } from "react-native";









function Counter1() {
    const [counter, setCounter] = useState<number>(0)
    const handlePress = () => {
        setCounter(counter + 1)
    }
    return (
        <View style={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
        }}>
            <h1 style={{ color: 'white' }}>Counter 1</h1>
            <Text style={{ color: 'white', fontSize: 20 }}>{counter}</Text>
            <Pressable onPress={handlePress}>
                <Text style={{ color: 'white', fontSize: 20, marginTop: 20 }}>
                    Click
                </Text>
            </Pressable>
        </View>
    )
}

export default Counter1