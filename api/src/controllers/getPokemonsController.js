const { Pokemon, Type } = require('../db');

const axios = require('axios');
const endpoint = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonsController = async () => {
    try {
        const newPromises = [];
        for(let i = 1; i <= 100; i++){
            newPromises.push(axios(`${endpoint}${i}`));
        }
        let newPokemons = await Promise.all(newPromises);
        
        newPokemons = newPokemons.map(pok => pok.data);
        
        newPokemons = newPokemons.map(pok => {
            const poke = {
                id: pok.id,
                name: pok.name,
                image: pok.sprites.front_default,
                imageShiny: pok.sprites.front_shiny,
                hp: pok.stats[0].base_stat,
                attack: pok.stats[1].base_stat,
                defense: pok.stats[2].base_stat,
                specialAttack: pok.stats[3].base_stat,
                specialDefense: pok.stats[4].base_stat,
                speed: pok.stats[5].base_stat,
                height: pok.height,
                weight: pok.weight,
                types: [pok.types[0].type],
                origin: 'API',
            }

            pok.types[1] && poke.types.push(pok.types[1].type)

            return poke;
        })

        const pokemonsFromDB = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        });

        return [...newPokemons, ...pokemonsFromDB];
        
    } catch (error) {
        throw error.message
    }
}

module.exports = getPokemonsController;

