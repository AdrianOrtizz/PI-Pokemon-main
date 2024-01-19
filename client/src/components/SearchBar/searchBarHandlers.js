import { searchPokemon } from "../../redux/actions/actions";

//* Regex para comprobar que lo que buscó el usuario solo contenga letras o espacios
const regex = /^[a-zA-Z\s]+$/

export const handleChange = (event, { setPokemonSerchead } ) => {
    setPokemonSerchead(event.target.value);
}

export const handleSearch = ( { pokemonSerchead, setPokemonSerchead, dispatch } ) => {
    try {
        //* Comprueba que el usuario ingresó una cadena solo de letras y espacios
        if(regex.test(pokemonSerchead)){
            dispatch(searchPokemon(pokemonSerchead));
            setPokemonSerchead('');
        }else{
            alert('Only letters');
        }
    } catch (error) {
        alert('The requested pokemon does not exist');
        setPokemonSerchead('');
    }
}

export const handleRandom = ( { navigate } ) => {
    let randomNumber = Math.trunc(Math.random() * 1015);
    navigate(`/pokemons/${randomNumber}`);
}

export const handleKey = (event, { pokemonSerchead, setPokemonSerchead, dispatch } ) => {
    if(event.key === 'Enter'){
        handleSearch({pokemonSerchead, setPokemonSerchead, dispatch})
    }
}


//* handlerRedirect hace la redirección cuando el usuario busca un pokemon
export const handleRedirect = ({ navigate, pokemonDetail }) => {
    if(Object.keys(pokemonDetail).length !== 0){
        navigate(`/pokemons/${pokemonDetail.id}`);
    }else{
        // este else sirve para que cuando el usuario está en la página del detail y quiere volver
        // al home, no se redireccione de nuevo al detail. Ya que cuando el usuario sale del detail
        // la action no llega a resetear el estado de redux y cuando se renderiza la searchBar, este 
        // todavía contiene la información del pokemon, por lo que se vuelve a redireccionar. Esta línea
        // lo que hace es que se vuelve a ejecutar cuando pokemonDetail se actualiza y como el estado no
        // tiene nada. El usuario vuelve al home
        navigate(`/home/1`);
    }
}