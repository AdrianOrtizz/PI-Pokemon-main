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
        <div>
            <img src={shinyImg} alt="shiny" onClick={handleShiny} />
            {
                shiny ? (
                    <img src={pokemon.imageShiny} className={styles.foto} alt={pokemon.name} title={pokemon.name} />
                ) : (
                    <img src={pokemon.image} className={styles.foto} alt={pokemon.name} title={pokemon.name} />
                )
            }
            <h2>{ pokemon.name }</h2>

            <h2>Pokedex Number: #{pokemon.id}</h2>

            <h2> Characteristics: </h2>
            <ul>
                <li>Height: {pokemon.height / 10}m</li>
                <li>Weight: {pokemon.weight / 10}kg</li>
            </ul>

            <h2>Stats:</h2>
            <ul>
                <li>HP: {pokemon.hp}</li>
                <li>Attack: {pokemon.attack}</li>
                <li>Defense: {pokemon.defense}</li>
                <li>Special Attack: {pokemon.specialAttack}</li>
                <li>Special Defense: {pokemon.specialDefense}</li>
                <li>Speed: {pokemon.speed}</li>
            </ul>
            <h2>
                Types: 
                <b> { pokemon.types && pokemon.types[0].name } </b>
                <b>{ pokemon.types && pokemon.types[1] && pokemon.types[1].name }</b>
            </h2>

        </div>
    )
}

export default DetailPage;