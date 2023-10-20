import { SafeAreaView, Text, View } from 'react-native';
import { WelcomeScreen } from './screens';
import { Design } from './styles';


export default function App() {
  return (
    <SafeAreaView style={Design.AndroidSafeArea}>
      <View>
        <Text style={Design.title}>Camera App</Text>
      </View>
      <WelcomeScreen
        pageName='WelcomeScreen'
      />
    </SafeAreaView>
  );
}
