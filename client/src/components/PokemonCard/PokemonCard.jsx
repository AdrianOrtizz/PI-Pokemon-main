import styles from './PokemonCard.module.scss';

import shinyImg from '../../assets/shiny.png';

import { useState } from 'react';
import { Link } from 'react-router-dom';


const PokemonCard = ({ id, name, image, imageShiny, types }) => {

    const [ shiny, setShiny ] = useState(false)

    const handleShiny = () => {
        setShiny(!shiny);
    }

    return (
        <div className={styles.container}>
            <img src={shinyImg} alt="Shiny" className={styles.shiny} onClick={handleShiny}/>

            <Link to={`/pokemons/${id}`} className={styles.link} >
                <div className={`${styles.pokemonContainer} ${styles[types[0].name]}`}>

                    <h2 >{name}</h2>

                    <div className={styles.imgContainer}>
                        {
                            shiny ? (
                                <img src={imageShiny} title={name} alt={name} className={styles.pkmImage} />
                            ) : (
                                <img src={image} title={name} alt={name} className={styles.pkmImage} />
                            ) 
                        }
                    </div>

                    <h2>Pokedex number: #{id}</h2>
                    
                    <div className={styles.typesContainer}>
                        { types[0] && <span className={styles[types[0].name]} > { types[0].name } </span> }
                        { types[1] && <span className={styles[types[1].name]} > { types[1].name } </span> }
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PokemonCard;