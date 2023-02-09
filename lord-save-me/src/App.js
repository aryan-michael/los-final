import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Forms from './pages/Forms';
//import ProductForm from './pages/ProductForm';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='loan/:type' element={<Forms />} />
      </Routes>
    </>
  );
}

export default App;
