
import { getAllPokemons, orderPokemons, filterPokemons } from '../../redux/actions/actions';

export const getPokemonsHandler = ({ pokemonsAux, dispatch }) => {
    pokemonsAux.length === 0 && dispatch(getAllPokemons());
}

export const pagesHandler = ({ page, pokemonsAux, setActualPagePokemons }) => {
    const aux = page * 12;

    const min = aux - 12;
    const max = aux;

    const pokes = pokemonsAux.slice(min, max);

    setActualPagePokemons(pokes);
}

export const handlerOrder = (event, { dispatch }) => {
    dispatch(orderPokemons(event.target.value));
}

export const handlerFilter = (event, { dispatch }) => {
    dispatch(filterPokemons(event.target.value));
}