import { AuthContext } from "../laboratory/lab2/medium/AuthContext";
import { useContext } from "react";

export default function useAuthContext() {
    return useContext(AuthContext);
}
