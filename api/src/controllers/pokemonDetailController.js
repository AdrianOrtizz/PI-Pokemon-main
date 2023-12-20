const { Pokemon, Type } = require('../db');
const axios = require('axios');
const endpoint = 'https://pokeapi.co/api/v2/pokemon/';

const pokemonDetailController = async (id) => {
    try {
        // el pokemon primero se busca en la base de datos donde están
        // los pokemons creados por el usuario
        let pokemonDetail = await Pokemon.findByPk(
            id,
            {
                include: {
                    model: Type,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    }
                }
            }
        );

        // si no lo encuentra se lo pide a la api
        if(pokemonDetail === null){
            const { data } = await axios(`${endpoint}${id}`);
            pokemonDetail = {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default,
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

            data.types[1] && pokemonDetail.types.push(data.types[1].type);
        }

        return pokemonDetail;
    } catch (error) {
        throw error.message;
    }
}

module.exports = pokemonDetailController;