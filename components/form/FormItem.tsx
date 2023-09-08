import { useState } from "react"
import { NativeSyntheticEvent, StyleProp, StyleSheet, TextInput, TextInputChangeEventData, TextStyle, View } from "react-native"








interface FormItemProps {
    inputType: string
    name?: string,
    email?: string,
    placeholder?: string,
    style?: StyleProp<TextStyle>
    onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void
}
/**
 * 
 * @param param0 inputType is required as an unique identifier type to determine which input is being used. 'username' or 'email
 */
const FormItem: React.FC<FormItemProps> = ({ inputType, style, placeholder, onChange }) => {

    /**
     * This should be a custom hook of some sort.
     * If onChange is not provided, then use this state to handle the input change.
     */
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    // Killer type 👀👇
    const handleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const { text } = event.nativeEvent;
        console.log(text)

        switch (inputType) {
            case 'username':
                setUsername(text)
                break;
            case 'email':
                setEmail(text)
                break;
        }
    }

    return (
        <View>
            <TextInput
                onChange={onChange ?? handleChange}
                placeholder={placeholder ?? ""}
                placeholderTextColor={'#9F9F9F'}
                textContentType="emailAddress"
                style={[
                    {
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderColor: '#9F9F9F',
                    },
                    style
                ]}
            />
        </View>
    )
}

export default FormItem;