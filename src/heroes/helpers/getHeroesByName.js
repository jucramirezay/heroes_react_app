import { heroes } from "../data/heroes";

export const getHeroesByName = (name) => {

    // Limpia la URL
    name = name.toLowerCase().trim();

    // Caso en el cual no se escribio nombre o la función fue llamada sin ningún nombre
    if(name.length === 0) return [];

    // Valida y filtra en el arreglo de heroes si el hero contiene en la propiedad superhero el nombre name enviado
    // como argumento de la función, en caso de ser así, retorna dicho heroe. Se pueden retornar variso heroes en un arreglo
    // ya que por ejemplo, el name 'man' esta incluido en mas de un superheroe
    return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name) );


}