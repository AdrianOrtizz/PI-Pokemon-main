//* Las peticiones se van a hacer con axios
const axios = require('axios');

//* Importamos el modelo de los pokemons para guardar cada uno en un registro de la base de datos
const { Pokemon } = require('../db');

//* Endpoint al que haremos las peticiones a la api
const endpoint = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonById = async (req, res) => {
    try {
        const id = Number(req.params.id); // el id (numero en la pokedex) del pokemon llega a través de params
        const { data } = await axios(`${endpoint}${id}`); // hacemos la petición y traemos la data del pokemon

        // guardamos toda la información solicitada del pokemon
        const poke = {
            id,
            name: data.name,
            image: data.sprites.front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            "special-attack": data.stats[3].base_stat,
            "special-defense": data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight,
        }

        if(poke.name){ // si existe la propiedad name dentro del objeto pokemon, es decir, si se encontró un pokemon y se guardaron sus propiedades, se ejecuta el if
            const pokemon = await Pokemon.create({ ...poke }); // crea el registro de ese pokemon
            res.status(200).json(pokemon); // se envía el pokemón como respuesta
        }else{
            res.stats(404).send('Pokemon no encontrado'); // se envía el mensaje como respuesta cuando no se encuentra un pokemon con un id que coincida
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = getPokemonById;