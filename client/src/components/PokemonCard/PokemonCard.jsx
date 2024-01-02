import { Link } from 'react-router-dom'

const PokemonCard = ({ id, name, image, types }) => {
    return (
        <Link to={`/pokemons/${id}`}>
            <div>
                <img src={image} title={name} alt={name} />
                <h2>{name}</h2>
                <h2>#{id}</h2>
                <h2>{types[0] && types[0].name} {types[1] && types[1].name}</h2>
            </div>
        </Link>
    )
}

export default PokemonCard;