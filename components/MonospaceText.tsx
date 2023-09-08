import { Text, StyleSheet, TextStyle } from "react-native"







type textType = {
    children?: React.ReactNode,
    style?: TextStyle
}

export default function (props: Text["props"] & textType){
    return (
        <Text
            {...props}
            style={[
                props.style,
                styles.font,
                styles.color,
                styles.size,
                { textAlign: 'justify' }
            ]}
        />
    )
}

const styles = StyleSheet.create({
    font: {
        fontFamily: 'monospace'
    },
    color: {
        color: 'green'
    },
    size: {
        fontSize: 20
    }
})