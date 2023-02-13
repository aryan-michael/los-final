import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Forms from './pages/Forms';
import Login from './pages/Login';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='loan/business' element={<Forms loan_type={"Business"} country={"India"} />} />
        <Route path='loan/home' element={<Forms loan_type={"Home"} country={"India"} />} />
        <Route path='loan/education' element={<Forms loan_type={"Education"} country={"India"} />} />
        <Route path='loan/personal' element={<Forms loan_type={"Personal"} country={"India"} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
