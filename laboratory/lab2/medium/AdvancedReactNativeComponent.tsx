/*
    Oppgave 4: Avansert React Native Komponent
    Design en egendefinert knapp i React Native (bruk TouchableOpacity) som
    støtter ulike stiler basert på egenskaper som størrelse (size), farge (color) og
    deaktivert tilstand (isDisabled). Knappen bør også ha tekst (label) og bør
    utføre en funksjon (onPress) når den trykkes på. Implementer komponenten
    ved hjelp av TypeScript-grensesnitt
*/
import {
    Text,
    TextStyle,
    StyleSheet,
    Pressable,
    GestureResponderEvent
} from "react-native";





type pressableProps = {
    onPress?: (event: GestureResponderEvent) => void | null | undefined,
    label?: string,
    style?: TextStyle
    children?: React.ReactNode
}
/* Syntax pre ES6
React.FC<T> is an explicit declaration
export const Btn: React.FC<pressableProps> = function ({ onPress, label, style, children }) {}

ES6 sytax sugar
export const Btn: React.FC<pressableProps> = ({ onPress, label, style, children }) => {}

*/

/**
 * 
 * @param param0 props attributes of type pressableProps for this button
 * @returns a React JSX element
 */
export const CustomButton = ({ onPress, label, style, children }: pressableProps): React.JSX.Element => {
    const styles = StyleSheet.create({
        btn: {
            fontSize: 18,
            color: "white"
        }
    })
    return (
        <Pressable onPress={onPress}>
            <Text style={style ?? styles.btn}>
                {children ? children : label}
            </Text>
        </Pressable>
    )
}
