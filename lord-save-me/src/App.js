import Home from './pages/Home/Home';
import { Routes, Route, Outlet, useParams } from 'react-router-dom';
import Forms from './pages/Register/Forms';
import ClientLogin from './pages/Login/ClientLogin';
import SetPassword from './pages/Password/SetPassword';
import ForgotPassword from './pages/Password/ForgotPassword';
import OTP from './pages/Password/OTP';
import Test from './pages/Register/Test';
import Practice from './pages/Register/Practice';
import SideBar2 from './components/SideBar2/SideBar2';

//import './App.css'
import SideBar from './components/Sidebar/SideBar';
import Dashboard from "./pages/UserPanel/Dashboard";
import KYC from "./pages/UserPanel/KYC";
import CheckStatus from "./pages/UserPanel/CheckStatus";
import Analytics from "./pages/UserPanel/Analytics";
import Setting from "./pages/UserPanel/Setting";
import AddInquiry from './pages/UserPanel/AddInquiry';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='loan/business' element={<Forms loan_type={"Business"} country={"India"} />} />
        <Route path='loan/home' element={<Forms loan_type={"Home"} country={"India"} />} />
        <Route path='loan/education' element={<Forms loan_type={"Education"} country={"India"} />} />
        <Route path='loan/personal' element={<Forms loan_type={"Personal"} country={"India"} />} />
        <Route path='/otp' element={<OTP />} />
        <Route path='/set-password' element={<SetPassword />} />
        <Route path='/login/client' element={<ClientLogin />} />
        <Route path='/forgot-password/:id' element={<ForgotPassword />} />
        <Route path='/test' element={<Test />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/sidebar2' element={<SideBar2 />} />

        <Route path='/sidebar' element={<SideBar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="kyc-docs" element={<KYC />} />
          <Route path="check-status" element={<CheckStatus />} />
          <Route path="add-inquiry" element={<AddInquiry />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Setting />} />
        </Route>
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
