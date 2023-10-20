import { useId, useState } from "react";
import { StyleSheet, Platform, StatusBar, SafeAreaView, View, Button, TextInput, Text } from "react-native";








const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const pass = useId();

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Username</Text>
                <TextInput
                    style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setUsername(text)}
                    value={username}
                    aria-d
                />
                <Text>Password</Text>
                <TextInput
                    style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
                <Button
                    title="Login"
                    onPress={() => {
                        console.log(username, password);
                    }}
                />
                <Text>
                    {pass}
                </Text>
            </View>
        </SafeAreaView>
    )
}
export default LoginPage;


const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: 'azure',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})