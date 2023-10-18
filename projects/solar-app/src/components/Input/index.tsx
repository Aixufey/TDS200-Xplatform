import { useState } from 'react';
import { View, Text, StyleSheet, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Colors, Fonts } from '../../Styles/StyleGuide';
import Assets from '../../Assets';






type InputProps = {
    onTextChange?: (text: string) => void;
}
const Input: React.FC<InputProps> = ( {onTextChange} ) => {
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
            <Assets.icons.Search width={16} height={16}/>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: Colors.brandBackground,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    input: {
        flex: 1,
        color: 'white',
        opacity: 0.6,
        fontSize: 20,
        marginHorizontal: 20,
        //backgroundColor: '#909090'
    },
})
export default Input;