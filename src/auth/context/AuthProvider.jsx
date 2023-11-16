import { useReducer } from "react";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// Cada vez que se recarga el navegador se manda a llamar esta función de inicialización
const init = () => {
    // ? Lectura del local storage
    // Si retornar null significa que no hay ningún usuario logueado
    // Si regresa un valor diferente de null si hay un usuario
    const user = JSON.parse(localStorage.getItem('user'));


    return {
        logged: !!user, // SI user existe esto esta en true
        user: user,
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init );

    const login = (name = '') => {

        const user = {id: 'ABC', name}

        const action = { type: types.login, payload: user }

        // ?  Escritura en local Storage
        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: types.logout, payload: null}
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{ 
            ...authState, 
            login: login,
            logout: logout }} >
            { children }
        </AuthContext.Provider>    
    )

}
