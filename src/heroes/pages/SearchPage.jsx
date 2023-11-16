import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import {HeroCard} from '../components';
import { getHeroesByName } from '../helpers';


export const SearchPage = () => {

    // Use navigate se utiliza para enviar el query parameter, ya que se puede indicar que se navegue a la misma página
    // pero con unformación extra en la URL. 
    const navigate = useNavigate();

    // utilizado para obtener el query parameter desde la URL del navegador. Se obtiene en la propiedad search
    // Lo que hace es obtener la ubicación actual dentro del HTML o URLs utilizadas para navegar
    const location = useLocation();

    // queryString se utiliza para extraer todo lo que se encuentra en el objeto search del location. Facilita el manejo
    // de la información que viene por medio de los query parameters
    const { q = ''} = queryString.parse( location.search ); 

    const heroes = getHeroesByName(q);

    // Variables utilizadas para mostrar el mensaje de error o el mensaje que indica que busque un heroe
    const showSearch = (q === '');
    const showError = (q.length > 0) && (heroes.length === 0);

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        
        // Forma de enviar query parameters 
        navigate(`?q=${searchText.toLowerCase()}`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ onSearchSubmit }>
                        <input 
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ onInputChange } 
                        />

                        <button
                            className="btn btn-outline-primary mt-3"
                        >Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {/* {
                        ( q === '')
                        ? <div className="alert alert-primary"> Search a hero </div>
                        : (heroes.length === 0) && <div className="alert alert-danger"> No hero with <b>{ q }</b> </div>
                    } */}

                    <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}> 
                        Search a hero 
                    </div>
                    
                    <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}> 
                        No hero with <b>{ q }</b> 
                    </div>


                    {
                        heroes.map( hero => {
                            return <HeroCard key={hero.id} {...hero} />
                        })    
                    }      
                    
                </div>
            </div>
            
        </>      
    )
}
