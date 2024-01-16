
import { getAllPokemons, orderPokemons, filterPokemons, getAllTypes } from '../../redux/actions/actions';

export const getDataHandler = ({ dispatch }) => {
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
}

export const pagesHandler = ({ page, pokemonsAux, setActualPagePokemons }) => {
    //* Ej: page = 1: 
    // min = 0
    // max = 12
    //* Siguiente página: min = 12 y max = 24
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