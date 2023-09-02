/* 
    Oppgave 5: Type-Sikker context i React Native (Medium++)
    Opprett en context provider i Native med TypeScript-støtte. 
    Definer kontekst-typer og interfaces for consumer components. 
    Implementer en test av dette for
    å demonstrere type-sikker kommunikasjon. Stikkord: AuthProvider, useAuth, AuthContext.
    Målet er å late som vi har fått informasjon om en bruker som har logget inn, og
    at vi skal kunne bruke denne informasjonen i andre komponenter. Kult om du
    bruker denne funksjonaliteten for å vise navnet på din testbruker når du klikker
    på knappen du lagde i oppgave 4.
*/


import { createContext, useState, useContext } from "react";
// Contract for Authorization service
interface IAuthService {
    handleLogin?: (name: string, pw: string) => void
    handleLogout?: () => void
    isAuthenticated?: boolean
    currentUser?: string
    testFn?: () => void
}
// Creating a context following the contract
export const AuthContext = createContext<IAuthService | undefined>(undefined);

type Props = {
    children: React.ReactNode
}
const AuthProvider = ({ children }: Props) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<string>("Medium - Oppgave 5 user");

    const handleLogin = (username: string, pass: string) => {
        if (username === "test" && pass === "test") {
            setIsAuthenticated(true)
            setCurrentUser(username)
        } else {
            setIsAuthenticated(false)
            setCurrentUser("")
        }
    }

    const handleLogout = () => {
        setIsAuthenticated(false)
        setCurrentUser("")
    }
    const testFn = () => { 
        console.log("Test")
    }

    // Provide as an object
    const providerObject = {
        handleLogin,
        handleLogout,
        isAuthenticated,
        currentUser,
        testFn
    }
    return (
        <AuthContext.Provider value={providerObject}>
            { children }
        </AuthContext.Provider>
    )
}
export default AuthProvider




