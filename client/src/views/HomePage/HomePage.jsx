import SearchBar from "../../components/SearchBar/SearchBar";
import PokemonsCards from '../../components/PokemonsCards/PokemonsCards';
import { useEffect } from "react";
import { getAllTypes } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {

    const dispatch = useDispatch()
    const types = useSelector(state => state.types);

    useEffect(() => {
        types.length === 0 && dispatch(getAllTypes());
    }, [])

    return (
        <div>
            <SearchBar/>
            <PokemonsCards/>
        </div>
    )
}

export default HomePage;