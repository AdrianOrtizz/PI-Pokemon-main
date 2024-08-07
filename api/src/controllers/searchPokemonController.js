const axios = require('axios');
const endpoint = 'https://pokeapi.co/api/v2/pokemon/';
const { Pokemon, Type } = require('../db.js')

const searchPokemonController = async (name) => {
    try {
        
        if(name.includes(' ')){
            name = name.replace(' ', '-');
        }
        
        name = name.toLowerCase();

        let poke = await Pokemon.findOne({
            where: {
                name: name
            },
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        });

        if(poke === null){
            const { data } = await axios(`${endpoint}${name}`);
        
            poke = {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default,
                imageShiny: data.sprites.front_shiny,
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                specialAttack: data.stats[3].base_stat,
                specialDefense: data.stats[4].base_stat,
                speed: data.stats[5].base_stat,
                height: data.height,
                weight: data.weight,
                types: [data.types[0].type],
            }

            data.types[1] && poke.types.push(data.types[1].type);
        }
    
        return poke;
    } catch (error) {
        const poke = null;
        return poke;
    }
}

module.exports = searchPokemonController;