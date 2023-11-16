import { useState } from "react"

// Custom hook que permite crear un formulario de acuerdo con un objeto enviado como argumento
// donde en dicho objeto se indican los valores iniciales que van a contener los elementos del formulario
export const useForm = ( initialForm = {}) => {

    // Los nombres de las propiedades del objeto deben ser los mismos del name del input, esto para que se sepa que variable va a cambiar
    const [formState, setFormState] = useState(initialForm);

    // Gracias a esta función se maneja el cambio de los valores del input
    // se desestructura el target que proviene del objeto event de react
    const onInputChange = ({ target }) => {
        const { name, value } = target; // Se desestructuran del target las propiedades name y value (propiedades del input)
        setFormState({
            ...formState, // Mantiene el valor de los input que no se estan modificando
            [ name ]: value // De esta forma se indica que solamente la propiedad que se esta modificando es la que se va a cambiar en el estado
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    // Con el operador spread envia uno a uno en el objeto, los valores que se encuentran dentro de formState
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}