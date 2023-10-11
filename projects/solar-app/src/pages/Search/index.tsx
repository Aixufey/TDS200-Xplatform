import { StyleSheet, Text, View } from "react-native";
import Input from "../../components/Input";
import { Colors } from "react-native/Libraries/NewAppScreen";








const SearchPage: React.FC = () => {
    return (
        <View style={styles.container}>
            <Input />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.brandBackground,
    },
});
export default SearchPage;