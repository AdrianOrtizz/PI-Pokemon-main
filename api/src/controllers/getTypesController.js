const axios = require('axios');

const { Type } = require('../db');

const endpoint = 'https://pokeapi.co/api/v2/type';

const getTypesController = async () => {
    try {
        const types = await Type.findAll();

        if(types.length === 0){
            const { data } = await axios(endpoint);

            // results es el array con todos los tipos
            data.results.forEach(type => types.push(type));

            await data.results.forEach(async (typeObj, index) => {
                const type = await Type.create({id: index, name: typeObj.name});
            })
        }

        return types;
        
    } catch (error) {
        throw error.message;
    }
}

module.exports = getTypesController;