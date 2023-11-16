import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./";

// Toma la lista de heroes dependiendo el publisher de los mismos
export const HeroeList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]); 
    
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {   
                heroes.map( hero => { 
                    return <HeroCard 
                        key={ hero.id }
                        { ...hero } // Envia cada una de las propiedades del hero, las esparce al hijo
                    />
                })
            }
        </div>
        
    );
}
