import { useState } from 'react';
import { View, Text, StyleSheet, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Colors, Fonts } from '../../Styles/StyleGuide';






type InputProps = {
    onTextChange?: (text: string) => void;
}
const Input: React.FC = ( {onTextChange}: InputProps ) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleTextChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setInputValue(e.nativeEvent.text);
        onTextChange && onTextChange(e.nativeEvent.text);
    }
    return (
        <View style={styles.container}>
            <TextInput
                value={inputValue}
                onChange={handleTextChange}
                style={[styles.input, Fonts.paragraph()]}
                placeholder="Search..."
                placeholderTextColor={"#909090"}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: Colors.brandBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        color: 'white',
        opacity: 0.6,
        fontSize: 20,
        //backgroundColor: '#909090'
    },
})
export default Input;