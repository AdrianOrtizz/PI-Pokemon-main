import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { getAllPokemons } from '../../redux/actions/actions';

import PokemonsCards from '../../components/PokemonsCards/PokemonsCards';

import Nav from '../../components/Nav/Nav';

const HomePage = () => {

    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons);
    const [allPokemons, setAllPokemons] = useState([]);

    useEffect(() => {
        dispatch(getAllPokemons());
        setAllPokemons(pokemons);
    }, [])

    return (
        <div>
            <Nav/>
            <PokemonsCards allPokemons={allPokemons}/>
        </div>
    )
}

export default HomePage;