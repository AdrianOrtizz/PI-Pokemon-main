import styles from './PokemonCard.module.scss';

import shinyImg from '../../assets/shiny.png'

import { useState } from 'react';

import { Link } from 'react-router-dom';


const PokemonCard = ({ id, name, image, imageShiny, types }) => {

    const [ shiny, setShiny ] = useState(false)

    const handleShiny = () => {
        setShiny(!shiny);
    }

    return (
        <div className={styles.link}>
            <img src={shinyImg} alt="Shiny" className={styles.shiny} onClick={handleShiny}/>
            <Link to={`/pokemons/${id}`} >
                    <div className={styles.cardContainer}>
                    {
                        shiny ? (
                            <img src={imageShiny} title={name} alt={name}/>
                            ) : (
                                <img src={image} title={name} alt={name}/>
                                ) 
                            }
                    <h2>{name}</h2>
                    <h2>#{id}</h2>
                    <h2>{types[0] && types[0].name} {types[1] && types[1].name}</h2>
                </div>
            </Link>
        </div>
    )
}

export default PokemonCard;