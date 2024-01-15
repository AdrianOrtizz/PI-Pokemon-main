import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { validate } from "./validate";
import { createPokemon, getAllTypes } from "../../redux/actions/actions";

import styles from './CreatePage.module.scss';

const CreatePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pokemonDetail = useSelector(state => state.pokemonDetail);
    const types = useSelector(state => state.types);

    useEffect(() => {
        dispatch(getAllTypes());
    }, [])

    useEffect(() => {
        if(Object.keys(pokemonDetail).length !== 0){
            navigate(`/pokemons/${pokemonDetail.id}`);
        }else{
            navigate('/create');
        }
    }, [pokemonDetail])

    const [ pokemonData, setPokemonData ] = useState({
        name:'',
        image:'',
        imageShiny:'',
        hp:'',
        attack:'',
        defense:'',
        specialAttack:'',
        specialDefense:'',
        speed:'',
        height:'',
        weight:'',
        type1: 0,
        type2: 20,
    })

    const [ errors, setErrors ] = useState({})

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setPokemonData({ ...pokemonData, [property]: value });
        setErrors(validate({ ...pokemonData, [property]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(Object.keys(errors).length > 0){
            alert('Credentials are not valid')
        }else{
            dispatch(createPokemon(pokemonData));
            setPokemonData({
                name:'',
                image:'',
                imageShiny:'',
                hp:'',
                attack:'',
                defense:'',
                specialAttack:'',
                specialDefense:'',
                speed:'',
                height:'',
                weight:'',
                type1: 0,
                type2: 20,
            })
        }
    }

    return (
        <section className={styles.createContainer}>

            <h2>Create Pokemons!</h2>

            <form onSubmit={handleSubmit}>
                <div className={styles.basic}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input name="name" type="text" value={pokemonData.name} onChange={handleChange} />
                        { errors.name && <span> {errors.name} </span>}
                    </div>

                    <div>
                        <label htmlFor="image">Image: </label>
                        <input name="image" type="text" value={pokemonData.image} onChange={handleChange} />
                        { pokemonData.image && <div className={styles.imgVP}><img src={pokemonData.image} title="pokemon image" alt="pokemon image" /></div> }
                        { errors.image && <span> {errors.image} </span>}
                    </div>

                    <div>
                        <label htmlFor="imageShiny">Image Shiny: </label>
                        <input name="imageShiny" type="text" value={pokemonData.imageShiny} onChange={handleChange} />
                        { pokemonData.imageShiny && <div className={styles.imgVP}><img src={pokemonData.imageShiny} title="pokemon image shiny" alt="pokemon image shiny" /></div> }
                        { errors.imageShiny && <span> {errors.imageShiny} </span>}
                    </div>

                    <div>
                    <label htmlFor="type1">firts type:</label>
                    <select name="type1" value={pokemonData.type1} onChange={handleChange}>
                        {
                            types && types.map((type, index) => {
                                return (<option key={type.name} value={index}> {type.name} </option>)
                            })
                        }
                    </select>
                </div>
                
                <div>
                    <label htmlFor="type2">{"Second Type (optional):"}</label>
                    <select name="type2" value={pokemonData.type2} onChange={handleChange}>
                        <option value={20}>None</option>
                        {
                            types && types.map((type, index) => {
                                return (<option key={type.name} value={index}> {type.name} </option>)
                            })
                        }
                    </select>
                    { errors.types && <span> {errors.types} </span>}
                </div>

                </div>

                <div className={styles.stats}>

                    <div>
                        <label htmlFor="hp">HP: </label>
                        <input name="hp" type="number" value={pokemonData.hp} onChange={handleChange} />
                        { errors.hp && <span> {errors.hp} </span>}
                    </div>

                    <div>
                        <label htmlFor="attack">Attack: </label>
                        <input name="attack" type="number" value={pokemonData.attack} onChange={handleChange} />
                        { errors.attack && <span> {errors.attack} </span>}
                    </div>

                    <div>
                        <label htmlFor="specialAttack">Special Attack: </label>
                        <input name="specialAttack" type="number" value={pokemonData.specialAttack} onChange={handleChange} />
                        { errors.specialAttack && <span> {errors.specialAttack} </span>}
                    </div>

                    <div>
                        <label htmlFor="defense">Defense: </label>
                        <input name="defense" type="number" value={pokemonData.defense} onChange={handleChange} />
                        { errors.defense && <span> {errors.defense} </span>}
                    </div>

                    <div>
                        <label htmlFor="specialDefense">Special Defense: </label>
                        <input name="specialDefense" type="number" value={pokemonData.specialDefense} onChange={handleChange} />
                        { errors.specialDefense && <span> {errors.specialDefense} </span>}
                    </div>

                    <div>
                        <label htmlFor="speed">Speed: </label>
                        <input name="speed" type="number" value={pokemonData.speed} onChange={handleChange} />
                        { errors.speed && <span> {errors.speed} </span>}
                    </div>

                    <div>
                        <label htmlFor="height">Height: </label>
                        <input name="height" type="number" value={pokemonData.height} onChange={handleChange} />
                        { errors.height && <span> {errors.height} </span>}
                    </div>

                    <div>
                        <label htmlFor="weight">Weight: </label>
                        <input name="weight" type="number" value={pokemonData.weight} onChange={handleChange} />
                        { errors.weight && <span> {errors.weight} </span>}
                    </div>
                </div>

                
                <button type="submit"> Create! </button>
            </form>
        </section>
    )
}

export default CreatePage;