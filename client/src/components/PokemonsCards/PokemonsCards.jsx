import PokemonCard from "../PokemonCard/PokemonCard";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllPokemons } from '../../redux/actions/actions';

import styles from './PokemonsCards.module.scss';

const PokemonsCards = () => {

    const pokemons = useSelector((state) => state.pokemons);
    const [ allPokemons, setAllPokemons ] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        allPokemons.length === 0 && dispatch(getAllPokemons());
    }, [])
    
    useEffect(() => {
        setAllPokemons(pokemons);
    }, [pokemons])

    return (
        <div className={styles.cardsContainer}>

            {/* <select name="" id="">
                <option value=""></option>
                <option value=""></option>
            </select> */}

            { allPokemons.length === 0 && <p> Loading... </p> }

            {
                allPokemons.map( poke => {
                    return <PokemonCard
                        key={poke.id}
                        id={poke.id}
                        name={poke.name}
                        image={poke.image}
                        types={poke.types}
                        // hp={poke.hp}
                        // attack={poke.attack}
                        // defense={poke.defense}
                        // specialAttack={poke.specialAttack}
                        // specialDefense={poke.specialDefense}
                        // speed={poke.speed}
                        // height={poke.height}
                        // weight={poke.weight}
                    />
                })
            }
        </div>
    )
}

export default PokemonsCards;