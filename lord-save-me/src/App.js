import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Forms from './pages/Register/Forms';
import Login from './pages/Login/Login';
import SetPassword from './pages/Password/SetPassword';
import ForgotPassword from './pages/Password/ForgotPassword';
import OTP from './pages/Password/OTP';

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
        <Route path='/otp' element={<OTP />} />
        <Route path='/set-password' element={<SetPassword />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
