import React, { createContext, useContext } from "react";
import FIREBASE, { IFIREBASE } from "../firebaseConfig";


// Create Context
const FirebaseContext = createContext<IFIREBASE | undefined>(undefined);
// Context Hook
const useFireBase = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error(`${useFireBase} must be used inside Provider`)
    }
    return context;
};



type ProviderProps = {
    children: React.ReactNode
}
// Provider
const FireBaseContextProvider: React.FC<ProviderProps> = ({ children }) => {
    return (
        <FirebaseContext.Provider value={FIREBASE}>
            {children}
        </FirebaseContext.Provider>
    )
}

export {
    FireBaseContextProvider,
    useFireBase
}
