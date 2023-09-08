import AppSpace from './AppSpace';
import AuthProvider from './laboratory/lab2/medium/AuthContext';
import Navigation from './routes';








export default function App() {
  return (
    <AuthProvider>
      <Navigation />
      {/* <AppSpace /> */}
    </AuthProvider>
  );
}
