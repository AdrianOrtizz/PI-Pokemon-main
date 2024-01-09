import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { validate } from "./validate";
import { createPokemon } from "../../redux/actions/actions";

const CreatePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pokemonDetail = useSelector(state => state.pokemonDetail);

    useEffect(() => {
        if(Object.keys(pokemonDetail).length !== 0){
            navigate(`/pokemons/${pokemonDetail.id}`);
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
        <div>

            <h2>Create Pokemons!</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input name="name" type="text" value={pokemonData.name} onChange={handleChange} />
                    <span> {errors.name} </span>
                </div>

                <div>
                    <label htmlFor="image">Image: </label>
                    <input name="image" type="text" value={pokemonData.image} onChange={handleChange} />
                    <span> {errors.image} </span>
                </div>

                <div>
                    <label htmlFor="imageShiny">Image Shiny: </label>
                    <input name="imageShiny" type="text" value={pokemonData.imageShiny} onChange={handleChange} />
                    <span> {errors.imageShiny} </span>
                </div>

                <div>

                    <label htmlFor="hp">HP: </label>
                    <input name="hp" type="text" value={pokemonData.hp} onChange={handleChange} />
                    <span> {errors.hp} </span>
                </div>

                <div>
                    <label htmlFor="attack">Attack: </label>
                    <input name="attack" type="text" value={pokemonData.attack} onChange={handleChange} />
                    <span> {errors.attack} </span>
                </div>

                <div>
                    <label htmlFor="specialAttack">Special Attack: </label>
                    <input name="specialAttack" type="text" value={pokemonData.specialAttack} onChange={handleChange} />
                    <span> {errors.specialAttack} </span>
                </div>

                <div>
                    <label htmlFor="defense">Defense: </label>
                    <input name="defense" type="text" value={pokemonData.defense} onChange={handleChange} />
                    <span> {errors.defense} </span>
                </div>

                <div>
                    <label htmlFor="specialDefense">Special Defense: </label>
                    <input name="specialDefense" type="text" value={pokemonData.specialDefense} onChange={handleChange} />
                    <span> {errors.specialDefense} </span>
                </div>

                <div>
                    <label htmlFor="speed">Speed: </label>
                    <input name="speed" type="text" value={pokemonData.speed} onChange={handleChange} />
                    <span> {errors.speed} </span>
                </div>

                <div>
                    <label htmlFor="height">Height: </label>
                    <input name="height" type="text" value={pokemonData.height} onChange={handleChange} />
                    <span> {errors.height} </span>
                </div>

                <div>
                    <label htmlFor="weight">Weight: </label>
                    <input name="weight" type="text" value={pokemonData.weight} onChange={handleChange} />
                    <span> {errors.weight} </span>
                </div>

                <div>
                    <label htmlFor="type1">firts type:</label>
                    <select name="type1" value={pokemonData.type1} onChange={handleChange}>
                        <option value={0}>Normal</option>
                        <option value={1}>Fight</option>
                        <option value={2}>Flying</option>
                        <option value={3}>Poison</option>
                        <option value={4}>Ground</option>
                        <option value={5}>Rock</option>
                        <option value={6}>Bug</option>
                        <option value={7}>Ghost</option>
                        <option value={8}>Steel</option>
                        <option value={9}>Fire</option>
                        <option value={10}>Water</option>
                        <option value={11}>Grass</option>
                        <option value={12}>Electric</option>
                        <option value={13}>Psychic</option>
                        <option value={14}>Ice</option>
                        <option value={15}>Dragon</option>
                        <option value={16}>Dark</option>
                        <option value={17}>Fairy</option>
                    </select>

                    <label htmlFor="type2">{"Second Type (optional):"}</label>
                    <select name="type2" value={pokemonData.type2} onChange={handleChange}>
                        <option value={20}>None</option>
                        <option value={0}>Normal</option>
                        <option value={1}>Fight</option>
                        <option value={2}>Flying</option>
                        <option value={3}>Poison</option>
                        <option value={4}>Ground</option>
                        <option value={5}>Rock</option>
                        <option value={6}>Bug</option>
                        <option value={7}>Ghost</option>
                        <option value={8}>Steel</option>
                        <option value={9}>Fire</option>
                        <option value={10}>Water</option>
                        <option value={11}>Grass</option>
                        <option value={12}>Electric</option>
                        <option value={13}>Psychic</option>
                        <option value={14}>Ice</option>
                        <option value={15}>Dragon</option>
                        <option value={16}>Dark</option>
                        <option value={17}>Fairy</option>
                    </select>
                    <span> {errors.types} </span>
                </div>

                <button type="submit"> Create! </button>
            </form>
        </div>
    )
}

export default CreatePage;