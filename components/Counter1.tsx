import { Pressable, View, Text } from "react-native";
import HOC from "../laboratory/lab2/hard/HOC";







type OGComponentProps = {
    counter?: number,
    handlePress?: () => void
}
const Counter1: React.FC<OGComponentProps> = ({ counter, handlePress}) => {
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

export default HOC(Counter1)