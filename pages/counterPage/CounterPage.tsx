import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import useCounter from './useCounter';






const CounterPage: React.FC = () => {
    // useCounter is a custom hook that returns count, increment and decrement
    const { count, decrement, increment } = useCounter();

    return (
        <View style={{ flexGrow: 1, flexShrink: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is a counter page</Text>
            <Text>{count}</Text>
            <TouchableOpacity style={{ marginTop: 20 }} onPress={increment}>
                <Text>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20 }} onPress={decrement}>
                <Text>Decrement</Text>
            </TouchableOpacity>

        </View>
    )
}

export default CounterPage;