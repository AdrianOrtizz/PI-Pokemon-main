const request = require('supertest');
const server = require('../../src/app');
const { conn } = require('../../src/db.js');

beforeAll(async () => {
    await conn.sync({ force: true });
})

afterAll(async () => {
    await conn.close();
})

const pokemon = {
    name: 'Abcdefg',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    imageShiny: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    hp: 1,
    attack: 1,
    specialAttack: 1,
    defense: 1,
    specialDefense: 1,
    speed: 1,
    height: 1,
    weight: 1,
    type1: 1,
    type2: 2,
}

const bulbasaur = {
    id: 1,
    name: 'bulbasaur',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    imageShiny: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    hp: 1,
    attack: 1,
    specialAttack: 1,
    defense: 1,
    specialDefense: 1,
    speed: 1,
    height: 1,
    weight: 1,
    type1: 1,
    type2: 2,
}

describe('get', () => {
    it('/pokemons', async () => {
        const pokemons = await request(server).get('/pokemons');

        expect(pokemons.status).toEqual(200);
        expect(Array.isArray(pokemons.body)).toEqual(true);
        expect(pokemons.body.length).toEqual(48);
    })

    it('/pokemons/name', async () => {
        const charmander = await request(server).get('/pokemons?name=charmander');

        expect(charmander.status).toEqual(200);
        expect(typeof charmander.body).toEqual('object');

        expect(charmander.body.hasOwnProperty('name'));
        expect(charmander.body.hasOwnProperty('id'));
        expect(charmander.body.hasOwnProperty('types'));

        expect(charmander.body.name).toEqual('charmander');
        expect(charmander.body.id).toEqual(4);
    })

    it('/pokemons/name error', async () => {
        const error = await request(server).get('/pokemons?name=abcdefg');

        expect(error.status).toEqual(404);
        expect(error.text).toEqual('The requested pokemon does not exist');
    })

    it('/pokemons/:id', async () => {
        const bulbasaur = await request(server).get('/pokemons/1');

        expect(bulbasaur.status).toEqual(200);
        expect(typeof bulbasaur.body).toEqual('object');

        expect(bulbasaur.body.hasOwnProperty('name'));
        expect(bulbasaur.body.hasOwnProperty('id'));
        expect(bulbasaur.body.hasOwnProperty('types'));

        expect(bulbasaur.body.name).toEqual('bulbasaur');
        expect(bulbasaur.body.id).toEqual(1);

    })

    it('/pokemons/:id error', async () => {
        const error = await request(server).get('/pokemons/100000');

        expect(error.status).toEqual(404);
        expect(error.text).toEqual('The request pokemon does not exist');
    })

    it('type', async () => {
        const types = await request(server).get('/type');

        expect(types.status).toEqual(200);
        expect(Array.isArray(types.body));
        expect(types.body.length).toEqual(20);
    })
})

describe('post', () => {
    it('/pokemons', async () => {
        const newPokemon = await request(server).post('/pokemons').send(pokemon);

        expect(newPokemon.status).toEqual(201);
        expect(typeof newPokemon.body).toEqual('object');

        expect(newPokemon.body.hasOwnProperty('name'));
        expect(newPokemon.body.hasOwnProperty('id'));
        expect(newPokemon.body.hasOwnProperty('types'));

        expect(newPokemon.body.name).toEqual('abcdefg');
        expect(newPokemon.body.id).toEqual(9000);
    })

    it('/pokemons error', async () => {
        // const newPokemon = await request(server).post('/pokemons').send(pokemon);
        const newPokemon2 = await request(server).post('/pokemons').send(pokemon);

        expect(newPokemon2.status).toEqual(500);
        expect(newPokemon2.text).toEqual('The pokemon name already exist');
    })
})