import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Forms from './pages/Forms';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='loan/business' element={<Forms loan_type={"Business"} />} />
        <Route path='loan/home' element={<Forms loan_type={"Home"} />} />
        <Route path='loan/education' element={<Forms loan_type={"Education"} />} />
        <Route path='loan/personal' element={<Forms loan_type={"Personal"} />} />
      </Routes>
    </>
  );
}

export default App;
