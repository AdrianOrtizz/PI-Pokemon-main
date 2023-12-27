import { Routes, Route } from 'react-router-dom';

import LandingPage from './views/landingPage/landingPage';
import HomePage from './views/homePage/homePage';
import DetailPage from './views/detailPage/detailPage';
import ErrorPage from './views/ErrorPage/ErrorPage';


function App() {  
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<HomePage/>} />
      <Route path='/pokemons/:id' element={<DetailPage/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
  )
}

export default App
