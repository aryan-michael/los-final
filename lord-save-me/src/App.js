import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

//HOME PAGE
import Home from './pages/Home/Home';
import Policy from './pages/Home/Policy';
import Forms from './pages/Register/Forms';
import Login from './pages/Login/Login';
import SetPassword from './pages/Password/SetPassword';
import ForgotPassword from './pages/Password/ForgotPassword';
import OTP from './pages/Password/OTP';

//COMPONENTS
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/Sidebar/SideBar';
import AdminSideBar from './components/Sidebar/AdminSideBar';
import PostLoginNavBar from './components/NavBar/PostLoginNavBar';

//USER PANEL
import Dashboard from "./pages/UserPanel/Dashboard";
import KYC from "./pages/UserPanel/KYC";
import CheckStatus from "./pages/UserPanel/CheckStatus";
import AddInquiry from './pages/UserPanel/AddInquiry';
import Analytics from "./pages/UserPanel/Analytics";
import PersonalInfo from './pages/UserPanel/PersonalInfo';
import LoanInfo from './pages/UserPanel/LoanInfo';
import LinkBankDetails from "./pages/UserPanel/LinkBankDetails";
import DisplayBankDetails from "./pages/UserPanel/DisplayBankDetails"
import BankDetails from "./pages/UserPanel/BankDetails"

//ADMIN PANEL
import AdminDashboard from "./pages/AdminPanel/AdminDashboard";
import AddUser from "./pages/AdminPanel/AddUser";
import ClientData from "./pages/AdminPanel/ClientData";
import ClientDetails from "./pages/AdminPanel/ClientDetails";
import Statistics from "./pages/AdminPanel/Statistics";
import LoanData from './pages/AdminPanel/LoanData';

//TESTING
import Test from './pages/Register/Test';
import Practice from './pages/Register/Practice';
import SideBar2 from './components/SideBar2/SideBar2';
import Creators from './pages/Home/Creators';

function App() {
  const [loginToken, setLoginToken] = useState({})
  return (
    <>
      <Routes>
        {/* HOME */}
        <Route exact path='/' element={<Home />} />
        <Route path='loan/business' element={<Forms loan_type={"Business"} country={"India"} />} />
        <Route path='loan/home' element={<Forms loan_type={"Home"} country={"India"} />} />
        <Route path='loan/education' element={<Forms loan_type={"Education"} country={"India"} />} />
        <Route path='loan/personal' element={<Forms loan_type={"Personal"} country={"India"} />} />
        <Route path='/otp' element={<OTP />} />
        <Route path='/set-password' element={<SetPassword />} />
        <Route path='/login/client' element={<Login />} />
        <Route path='/login/admin' element={<Login />} />
        <Route path='/forgot-password/:id' element={<ForgotPassword />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/creators' element={<Creators />} />

        {/* COMPONENTS */}
        <Route path='/navbar' element={<NavBar />} />
        <Route path='/sidebar' element={<SideBar />} />
        <Route path='/new-navbar' element={<PostLoginNavBar />} />
        <Route path='/admin-sidebar' element={<AdminSideBar />} />

        {/* USER PANEL */}
        <Route path="/sidebar/dashboard" element={<Dashboard />} />
        <Route path="/sidebar/kyc-docs" element={<KYC />} />
        <Route path="/sidebar/analytics" element={<Analytics />} />
        <Route path="/sidebar/check-status" element={<CheckStatus />} />
        <Route path="/sidebar/add-inquiry" element={<AddInquiry />} />
        <Route path="/sidebar/my-info/personal-info" element={<PersonalInfo />} />
        <Route path="/sidebar/my-info/loan-info" element={<LoanInfo />} />
        <Route path="/sidebar/bank-details" element={<BankDetails />} />
        {/* <Route path="/sidebar/bank-details-final" element={<DisplayBankDetails />} /> */}

        {/* ADMIN PANEL */}
        <Route path="/admin-sidebar/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-sidebar/add-user" element={<AddUser />} />
        <Route path="/admin-sidebar/client-data" element={<ClientData />} />
        <Route path="/admin-sidebar/client-details" element={<ClientDetails />} />
        <Route path="/admin-sidebar/statistics" element={<Statistics />} />
        <Route path="/admin-sidebar/client-details/loan-data" element={<LoanData />} />

        {/* TESTING */}
        <Route path='/test' element={<Test />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/sidebar2' element={<SideBar2 />} />

      </Routes>
    </>
  );
}

export default App;
