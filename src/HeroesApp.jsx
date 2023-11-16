import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    // AuthProvider permite utilizar el contexto en toda la aplicación, por eso se carga desde este punto principal
    < AuthProvider>
        <AppRouter />
    </ AuthProvider>
  )
}
