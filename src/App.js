import './App.css';
import Home from './Components/Home';
import Error from './Components/Error';
import SingleMovies from './Components/SingleMovies';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='movie/:id' element={<SingleMovies/>}/>
          <Route path='*' element=<Error/>/>
        </Routes>
    </>
  )
}

export default App;
