import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { getAllPokemons } from '../../redux/actions/actions';

import SearchBar from "../../components/SearchBar/SearchBar";
import PokemonsCards from '../../components/PokemonsCards/PokemonsCards';


const HomePage = () => {

    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons);
    const [ allPokemons, setAllPokemons ] = useState([]);

    useEffect(() => {
        dispatch(getAllPokemons());
    }, [])
    
    useEffect(() => {
        setAllPokemons(pokemons);
    }, [pokemons])

    return (
        <div>
            <SearchBar/>

            { allPokemons.length === 0 && <p> Loading... </p> } 
            <PokemonsCards allPokemons={allPokemons}/>
        </div>
    )
}

export default HomePage;