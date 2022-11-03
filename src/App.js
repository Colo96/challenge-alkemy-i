import Login from './components/Login';
import Listado from './components/Listado';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/listado' element={<Listado/>}/>
      </Routes>
    </>
  );
}

export default App;
