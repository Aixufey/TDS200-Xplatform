import React, { useState } from 'react';
import {
    View,
    Text,
    Pressable,
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from 'react-native'
import { FormItem } from '../../components';







const BasicFormPage: React.FC = () => {

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [msg, setMsg] = useState<string>('')

    const handleNameChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setUsername(e.nativeEvent.text)
    }
    const handleEmailChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setEmail(e.nativeEvent.text)
    }

    const handleSubmit = (): void => {
        if (email.includes('@') && username.length > 0) {
            return setMsg('Success!')
        }
        setMsg('Please enter a valid email and username')
    }

    return (
        <View style={{
            flexGrow: 1,
            flexShrink: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>This is a form page</Text>
            <FormItem
                inputType='username'
                placeholder='username'
                onChange={handleNameChange}
            />
            <FormItem
                inputType='email'
                placeholder='email@email.com'
                onChange={handleEmailChange}
            />
            <Pressable style={{ borderStyle: 'solid', borderWidth: 1, backgroundColor: 'black' }}
                onPress={handleSubmit}
            >
                <Text style={{ color: 'white' }}>Submit</Text>
            </Pressable>
            <Text>{msg}</Text>
        </View>
    )
}

export default BasicFormPage;