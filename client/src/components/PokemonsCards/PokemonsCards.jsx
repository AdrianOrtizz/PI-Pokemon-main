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
        pagesHandler(handlerTools);
    }, [page, pokemonsAux])

    return (
        <section>
            <div className={styles.filtersContainer}>
                <select name="FilterByOrigin" onChange={() => handlerFilter(event, handlerTools)}>
                    <option value="AP"> All Pokemons </option>
                    <option value="API"> Originals </option>
                    <option value="DB"> Created by the community </option>
                    <option value='normal'>Normal</option>
                    <option value='fight'>Fight</option>
                    <option value='flying'>Flying</option>
                    <option value='poison'>Poison</option>
                    <option value='ground'>Ground</option>
                    <option value='rock'>Rock</option>
                    <option value='bug'>Bug</option>
                    <option value='ghost'>Ghost</option>
                    <option value='steel'>Steel</option>
                    <option value='fire'>Fire</option>
                    <option value='water'>Water</option>
                    <option value='grass'>Grass</option>
                    <option value='electric'>Electric</option>
                    <option value='psychic'>Psychic</option>
                    <option value='ice'>Ice</option>
                    <option value='dragon'>Dragon</option>
                    <option value='dark'>Dark</option>
                    <option value='fairy'>Fairy</option> 
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
            
            {console.log(pokemonsAux[0])}

            <div className={styles.cardsContainer}>
                { actualPagePokemons.length === 0 && <p> Loading... </p> }

                {
                    actualPagePokemons.map( poke => {
                        return <PokemonCard
                            key={poke.id}
                            id={poke.id}
                            name={poke.name}
                            image={poke.image}
                            imageShiny={poke.imageShiny}
                            types={poke.types}
                        />
                    })
                }
            </div>


        </section>
    )
}

export default PokemonsCards;