import { useContext } from 'react'
import { AuthContext } from '../auth/context';
import { Navigate, useLocation } from 'react-router-dom';

// Componente utilizado para manejar las rutas privadas. Es un High Order Component. Solamente permite acceder 
// a las rutas hijas si el usuario esta logueado
export const PrivateRouter = ({ children }) => {

    // Con el logged se sabe si el usuario esta logueado
    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();
    
    // arma la URL completa. Variable utilizada para saber si el usuario logueado estuvo en una URL en especifico y una
    // vez el usuario se desloguee y se vuelva a loguear, dejarlo nuevamente en dicho lastPath
    const lastPath = pathname + search;
    localStorage.setItem( 'lastPath', lastPath );

    // * Si el usuario esta autenticado, se muestran los hijos de este High Order Component, es decir, las rutas hijas
    // * Si el hijo no esta autenticado, se lleva a la pantalla de Login
    return ( logged )
        ? children
        : <Navigate to='/login' />
}
