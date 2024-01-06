import { getPokemonDetail, resetState } from "../../redux/actions/actions";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const DetailPage = () => {

    const [pokemon, setPokemon] = useState({});
    const searchPokemon = useSelector(state => state.searchPokemon);
    const id = Number(useParams().id);

    const dispatch = useDispatch()

    useEffect(() => {
        if(Object.keys(pokemon).length === 0){
            dispatch(getPokemonDetail(id));
        }
        
        return () => {
            setPokemon({});
        }
    }, []);
    
    useEffect(() => {
        setPokemon(searchPokemon);
    }, [searchPokemon])

    return (
        <h1>detail de { pokemon.name }</h1>
    )
}

export default DetailPage;