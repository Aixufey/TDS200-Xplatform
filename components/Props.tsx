import { View, Text } from "react-native";







type myProps = {
    children?: React.ReactNode
    propA?: string
    propB?: number
    props?: boolean
}
export const ParentComponent : React.FC<myProps> = ({ propA, propB, ...restProps }) =>  (
    <View>
        <ChildComponent  {...restProps} />
        <Text>{ propA }</Text>
    </View>
)

export const ChildComponent : React.FC<myProps> = ({ props }) => (
    <View>
        { props}
    </View>
);