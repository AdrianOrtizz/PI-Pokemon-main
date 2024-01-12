import { resetState } from "../../redux/actions/actions";

import styles from './DetailPage.module.scss';

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import shinyImg from '../../assets/shiny.png'

import { getPokemonDetail } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";

const DetailPage = () => {

    const pokemonDetail = useSelector(state => state.pokemonDetail);

    const [ pokemon, setPokemon ] = useState({});
    const [ shiny, setShiny ] = useState(false);

    const id = Number(useParams().id)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonDetail(id));

        return () => dispatch(resetState())
    }, [])

    useEffect(() => {
        setPokemon(pokemonDetail);
    }, [pokemonDetail])

    const handleShiny = () => {
        setShiny(!shiny);
    }

    return (
        <section className={styles.detail}>
            <h2 className={styles.title}> POKEMON INFO </h2>

            <div className={styles.pkmContainer}>
                <h2 className={styles.pkmName}>{ pokemon.name }</h2>

                <div className={styles.imgContainer}>
                    <img className={styles.shinyImg} src={shinyImg} alt="shiny" onClick={handleShiny} />
                    {
                        shiny ? (
                            <img className={styles.pkmImage} src={pokemon.imageShiny} alt={pokemon.name} title={pokemon.name} />
                        ) : (
                            <img className={styles.pkmImage} src={pokemon.image} alt={pokemon.name} title={pokemon.name} />
                        )
                    }
                </div>
            </div>

            <div className={styles.statsContainer}>
                <h2>Stats:</h2>
                <ul>
                    <li><p>HP:</p> <progress value={pokemon.hp} max={255}></progress> {pokemon.hp}</li>
                    <li><p>Attack:</p> <progress value={pokemon.attack} max={255}></progress> {pokemon.attack}</li>
                    <li><p>Defense:</p> <progress value={pokemon.defense} max={255}></progress> {pokemon.defense}</li>
                    <li><p>Special Attack:</p> <progress value={pokemon.specialAttack} max={255}></progress> {pokemon.specialAttack}</li>
                    <li><p>Special Defense:</p> <progress value={pokemon.specialDefense} max={255}></progress> {pokemon.specialDefense}</li>
                    <li><p>Speed:</p> <progress value={pokemon.speed} max={255}></progress> {pokemon.speed}</li>
                </ul>
            </div>

            <div className={styles.characteristicsContainer}>
                <h2>Pokedex Number: #{pokemon.id}</h2>

                <h2> Characteristics: </h2>
                <ul>
                    <li>Height: {pokemon.height / 10}m</li>
                    <li>Weight: {pokemon.weight / 10}kg</li>
                </ul>

                <div className={styles.typesContainer}>
                    <h2>Types:</h2>
                    { pokemon.types && pokemon.types[0] && <span className={styles[pokemon.types[0].name]} > { pokemon.types[0].name } </span> }
                    { pokemon.types && pokemon.types[1] && <span className={styles[pokemon.types[1].name]} > { pokemon.types[1].name } </span> }
                </div>
            </div>

        </section>
    )
}

export default DetailPage;