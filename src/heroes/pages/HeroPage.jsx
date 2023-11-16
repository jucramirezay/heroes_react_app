import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

  // Hook que obtiene la información enviada por la URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Cada vez que cambie el id, se vuelve a ejecutar la función interna de useMemo
  const hero = useMemo(() => getHeroById(id), [id]);
  
  // Retorna a la página del publisher una vez se oprime el botón back
  const onNavigateBack = () => {
    hero.publisher === 'Marvel Comics' ? navigate('/marvel') : navigate('/dc');
  }

  // En caso de que no haya un heroe, la función getHeroById retorna undefined. Se redirige a la pagína de marvel
  if(!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <>
        <div className="row mt-5">
          <div className="col-4">
            <img 
              src={`/assets/heroes/${ id }.jpg`} 
              alt={ hero.superhero }
              className="img-thumbnail animate__animated animate__fadeInLeft" />
          </div>
          <div className="col-8">
            <h3>{hero.superhero}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego} </li>
              <li className="list-group-item"><b>Publisher:</b> {hero.publisher} </li>
              <li className="list-group-item"><b>First Appearance:</b> {hero.first_appearance} </li>
            </ul>

            <h5 className="mt-3">Characters</h5>
            <p>{ hero.characters }</p>

            <button
              className="btn btn-outline-info"
              onClick={ onNavigateBack }
            > Back </button>

          </div>
        </div>
    </>
  )
}
