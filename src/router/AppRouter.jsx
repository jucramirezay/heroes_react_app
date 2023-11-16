import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';

// Componente encargado de definir las rutas del aplicativo. Router principal, existe un Router secundario para los heroes
export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>    
                }/>
                
                {/* Rutas privadas. Si el usuario trata de dirigirse a una ruta que se encuentre en HeroesRoute sin estar autenticado. No podra */}
                <Route path="/*" element={ 
                    <PrivateRouter >
                        <HeroesRoutes />
                    </ PrivateRouter >
                } />

            </Routes>
        </>
    )
}
