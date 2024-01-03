import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonsCards = ({allPokemons}) => {

    return (
        <div>
            {
                allPokemons.map( poke => {
                    return <PokemonCard
                        key={poke.id}
                        id={poke.id}
                        name={poke.name}
                        image={poke.image}
                        types={poke.types}
                        // hp={poke.hp}
                        // attack={poke.attack}
                        // defense={poke.defense}
                        // specialAttack={poke.specialAttack}
                        // specialDefense={poke.specialDefense}
                        // speed={poke.speed}
                        // height={poke.height}
                        // weight={poke.weight}
                    />
                })
            }
        </div>
    )
}

export default PokemonsCards;