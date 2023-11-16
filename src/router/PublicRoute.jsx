import { useContext } from 'react'
import { AuthContext } from '../auth/context';
import { Navigate } from 'react-router-dom';

// Componente utilizado para manejar las rutas públicas. Es un High Order Component
export const PublicRoute = ({ children }) => {

    // Con el logged se sabe si el usuario esta logueado
    const { logged } = useContext( AuthContext );

    // * Si el usuario esta autenticado, no permite que este vaya a la página de login
    // * Si el usuario NO esta autenticado, es posible dirigirse a la página de login
    return ( logged )
        ?   <Navigate to='/marvel' />
        :   children
        
}
