//* Estilos
import styles from './PokemonsCards.module.scss';

//* Componente de la carta del pokemon
import PokemonCard from "../PokemonCard/PokemonCard";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

//* Handlers
import { getDataHandler, pagesHandler, handlerOrder, handlerFilter } from './pokemonsCardsHandlers';

const PokemonsCards = () => {

    const pokemonsAux = useSelector((state) => state.pokemonsAux);
    const types = useSelector((state) => state.types);
    const [ actualPagePokemons, setActualPagePokemons ] = useState([]);

    const dispatch = useDispatch();
    const page = Number(useParams().page);

    //* handlerTools contiene todas las herramientas que necesitan
    //* los handlers para ejecutarse. De este objeto la función solo 
    //* recibe los parámetros que necesita.

    const handlerTools = {
        pokemonsAux,
        actualPagePokemons,
        setActualPagePokemons,
        dispatch,
        page
    }

    useEffect(() => {
        //* Cuando se renderiza el componente se trae los pokemons para mostrar 
        //* y los tipos se cargan en la base de datos.
        getDataHandler(handlerTools);
    }, [])

    useEffect(() => {
        //* Esta función contiene la lógica del páginado
        pagesHandler(handlerTools);
    }, [page, pokemonsAux])

    return (
        <section className={styles.container}>
            <div className={styles.filtersContainer}>
                <div className={styles.filter}>
                    <label htmlFor="Filter"> Filter by origin or type: </label>
                    <select name="Filter" onChange={() => handlerFilter(event, handlerTools)}>
                        <option value="AP"> All Pokemons </option>
                        <option value="API"> Originals </option>
                        <option value="DB"> Created by the community </option>
                        {
                            types && types.map(type => {
                                return (<option key={type.name} value={type.name}> {type.name} </option>)
                            })
                        }
                    </select>
                </div>

                <div className={styles.order}>
                    <label htmlFor="Order"> Order pokemons by stats: </label>
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
            </div>


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

            <span className={styles.pages}>
                { page > 1 && <Link to={`/home/${page - 1}`} className={styles.link} > <span>  {' < '}  </span></Link> }
                { page } 
                { page < pokemonsAux.length / 12 && <Link to={`/home/${page + 1}`} className={styles.link} ><span> {' > '} </span></Link> }
            </span>

        </section>
    )
}

export default PokemonsCards;