import { Link } from 'react-router-dom';

// Tarjeta que muestra información de cada uno de los heroes
export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`; // URL de la imagen del super heroe. Tomada por el id del hero

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroImageUrl } className="card-img" alt={ superhero } /> {/* Imagen del super heroe */}
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>
                            {   // El siguiente código valida si el super heroe tiene un alter ego diferente al nombre 
                                // del caracter. En caso de que sea diferente, despliega todos los caracteres (nombres 
                                // del heroe).
                                ( alter_ego !== characters ) && (<p>{characters}</p>)
                            }
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`} > {/* Redigire al hero page. en la URL indica de cual heroe se desea */}
                                Mas..
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
