import { useLocation } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';

import LandingPage from './views/landingPage/landingPage';
import HomePage from './views/HomePage/HomePage';
import DetailPage from './views/DetailPage/DetailPage';
import ErrorPage from './views/ErrorPage/ErrorPage';
import CreatePage from './views/CreatePage/CreatePage';

import Nav from './components/Nav/Nav';

function App() {

  const location = useLocation().pathname;

  return (
    <div>
      { location !== '/' && <Nav/> }
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/pokemons/:id' element={<DetailPage/>} />
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}

export default App
