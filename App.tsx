import AppSpace from './AppSpace';
import AuthProvider from './laboratory/lab2/medium/AuthContext';








export default function App() {
  return (
    <AuthProvider>
      <AppSpace />
    </AuthProvider>
  );
}
