/* file naming default index.tsx to avoid importing from relative path  ../../../ .....*/
import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Fonts, Gradients } from '../../Styles/StyleGuide';



interface IButtonProps {
    title: string;
    Icon?: React.FC<SvgProps>; // Returning Icon as a Component
    onPress?: (event: GestureResponderEvent) => void;
}

const Button: React.FC<IButtonProps> = ({ title, Icon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Gradients.button style={styles.gradient}>
                <Text style={ [Fonts.buttonTitle(), {color: 'white'}] }>{title}</Text>
                {
                    Icon && <Icon />
                }
            </Gradients.button>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    gradient: {
        borderRadius: 5,
        paddingHorizontal: 30,
        paddingVertical: 15,
        flexDirection: 'row',
        marginTop: 16,
    },
})

export default Button;