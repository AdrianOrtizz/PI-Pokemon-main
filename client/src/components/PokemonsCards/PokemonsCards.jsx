import PokemonCard from "../PokemonCard/PokemonCard";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { getAllPokemons } from '../../redux/actions/actions';

import styles from './PokemonsCards.module.scss';

const PokemonsCards = () => {

    const pokemons = useSelector((state) => state.pokemons);
    const [ actualPagePokemons, setActualPagePokemons ] = useState([]);

    const dispatch = useDispatch();
    const page = Number(useParams().page);

    useEffect(() => {
        pokemons.length === 0 && dispatch(getAllPokemons());  
    }, [])

    useEffect(() => {
        const aux = page * 12;

        const min = aux - 12;
        const max = aux;

        const pokes = pokemons.slice(min, max);

        setActualPagePokemons(pokes);
    }, [page, pokemons])

    return (
        <section>
            <div className={styles.filtersContainer}>
                <select name="filter by origin">
                    <option value="AP"> All Pokemons </option>
                    <option value="API"> Originals </option>
                    <option value="DB"> Created by the community </option>
                </select>

                <select name="filter by stats">
                    <option value="PN"> Pokedex Number upward </option>
                    <option value="PN"> Pokedex Number falling </option>
                    <option value="HP"> Hp </option>
                    <option value="AT"> Attack </option>
                    <option value="DF"> Defense </option>
                    <option value="SD"> Special Defense </option>
                    <option value="SA"> Special Attack </option>
                    <option value="SP"> Speed </option>
                </select>
            </div>

            <span>
                {page > 1 && <Link to={`/home/${page - 1}`}> {'<'} </Link>} 
                { page } 
                {page < 4 && <Link to={`/home/${page + 1}`}> {' > '} </Link>}
            </span>

            <div className={styles.cardsContainer}>
                { actualPagePokemons.length === 0 && <p> Loading... </p> }

                {
                    actualPagePokemons.map( poke => {
                        return <PokemonCard
                            key={poke.id}
                            id={poke.id}
                            name={poke.name}
                            image={poke.image}
                            types={poke.types}
                        />
                    })
                }
            </div>


        </section>
    )
}

export default PokemonsCards;