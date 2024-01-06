import styles from './PokemonsCards.module.scss';

import PokemonCard from "../PokemonCard/PokemonCard";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { getPokemonsHandler, pagesHandler, handlerOrder, handlerFilter } from './pokemonsCardsHandlers';

const PokemonsCards = () => {

    const pokemonsAux = useSelector((state) => state.pokemonsAux);
    const [ actualPagePokemons, setActualPagePokemons ] = useState([]);

    const dispatch = useDispatch();
    const page = Number(useParams().page);

    const handlerTools = {
        pokemonsAux,
        actualPagePokemons,
        setActualPagePokemons,
        dispatch,
        page
    }

    useEffect(() => {
        getPokemonsHandler(handlerTools);
    }, [])

    useEffect(() => {
        pagesHandler(handlerTools)
    }, [page, pokemonsAux])

    return (
        <section>
            <div className={styles.filtersContainer}>
                <select name="Filter" onChange={() => handlerFilter(event, handlerTools)}>
                    <option value="AP"> All Pokemons </option>
                    <option value="API"> Originals </option>
                    <option value="DB"> Created by the community </option>
                </select>

                <select name="Order" onChange={() => handlerOrder(event, handlerTools)}>
                    <option value="PNU"> Pokedex Number upward </option>
                    <option value="PNF"> Pokedex Number falling </option>
                    <option value="HP"> Hp </option>
                    <option value="AT"> Attack </option>
                    <option value="DF"> Defense </option>
                    <option value="SA"> Special Attack </option>
                    <option value="SD"> Special Defense </option>
                    <option value="SP"> Speed </option>
                </select>
            </div>

            <span>
                {page > 1 && <Link to={`/home/${page - 1}`}> {' < '} </Link>} 
                { page } 
                {page < pokemonsAux.length / 12 && <Link to={`/home/${page + 1}`}> {' > '} </Link>}
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