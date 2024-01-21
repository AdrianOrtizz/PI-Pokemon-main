
import { validate } from "./validate";
import { createPokemon, getAllTypes } from "../../redux/actions/actions";

export const handleTypes = ({ dispatch }) => {
    dispatch(getAllTypes());
}

export const handleRedirect = ({ pokemonDetail, navigate }) => {
    if(Object.keys(pokemonDetail).length !== 0){
        navigate(`/pokemons/${pokemonDetail.id}`);
    }else{
        navigate('/create');
    }
}

export const handleChange = (event, { pokemonData, setPokemonData, setErrors }) => {
    const property = event.target.name;
    const value = event.target.value;

    setPokemonData({ ...pokemonData, [property]: value });
    setErrors(validate({ ...pokemonData, [property]: value }));
}

export const handleSubmit = async (event, { dispatch,pokemonData, setPokemonData, errors }) => {
    event.preventDefault();
    
    if(Object.keys(errors).length > 0){
        alert('Credentials are not valid')
    }else{
        dispatch(createPokemon(pokemonData));
        setPokemonData({
            name:'',
            image:'',
            imageShiny:'',
            hp:'',
            attack:'',
            defense:'',
            specialAttack:'',
            specialDefense:'',
            speed:'',
            height:'',
            weight:'',
            type1: 0,
            type2: 20,
        })
    }
}