import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  // Es necesario que el login tenga acceso al contexto con el fin de indicar que el usuario se ha logueado
  const { login } = useContext(AuthContext);

  // custom Hook hecho por la librería de react-router-dom. Ayuda con la navegación
  // useNavigate permite utilizar funciones del Navigator.Provider
  const navigate = useNavigate();

  const onLogin = () => {

    // Cuando el usuario se loguee nuevamente, si existio un lasthPath, entonces lo redirige automáticamente a dicha ruta
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('jucramirezay');
    
    // Indica a que página redirigirse una vez se lanza la función onLogin al oprimir el botón
    // Redirige a la última página en la que estuvo el usuario antes de desloguearse
    navigate(lastPath, {
      replace: true,
    });
  }

  return (
    <>
        <div className="container mt-5">
          <h1>Login</h1>
          <hr />

          <button
            className="btn btn-primary"
            onClick={ onLogin }
          > Login </button>
        </div>
    </>
  )
}
