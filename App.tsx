import AppSpace from './AppSpace';
import AuthProvider from './laboratory/lab2/medium/AuthContext';
import LoginPage from './pages/loginPage';
import Navigation from './routes';








export default function App() {
  return (
    <AuthProvider>
      {/* <LoginPage /> */}
      <Navigation />
      {/* <AppSpace /> */}
    </AuthProvider>
  );
}
