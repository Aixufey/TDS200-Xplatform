import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import { useState } from 'react';






const CounterPage: React.FC = () => {

    const [count, setCount] = useState<number>(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <View style={{ flexGrow: 1, flexShrink: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is a counter page</Text>
            <Text>{count}</Text>
            <TouchableOpacity style={{marginTop: 20}} onPress={handleClick}>
                <Text>Click Me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CounterPage;