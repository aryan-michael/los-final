import { Routes, Route } from 'react-router-dom';

//MAIN PAGES
import Home from './pages/Home/Home';
import Forms from './pages/Register/Forms';
import ClientLogin from './pages/Login/ClientLogin';
import AdminLogin from './pages/Login/AdminLogin';
import Policy from './pages/Policy';
import SetPassword from './pages/Password/SetPassword';
import ForgotPassword from './pages/Password/ForgotPassword';
import OTP from './pages/Password/OTP';

//USER PANEL
import Dashboard from "./pages/UserPanel/Dashboard";
import KYC from "./pages/UserPanel/KYC";
import BankDetails from "./pages/UserPanel/BankDetails";
import CheckStatus from "./pages/UserPanel/CheckStatus";
import Analytics from "./pages/UserPanel/Analytics";
import AddInquiry from './pages/UserPanel/AddInquiry';
import PersonalInfo from './pages/UserPanel/PersonalInfo';
import LoanInfo from './pages/UserPanel/LoanInfo';

//ADMIN PANEL
import AdminDashboard from "./pages/AdminPanel/AdminDashboard";
import ClientData from "./pages/AdminPanel/ClientData";
import ClientDetails from "./pages/AdminPanel/ClientDetails";
import Statistics from "./pages/AdminPanel/Statistics";

//COMPONENTS
import SideBar from './components/Sidebar/SideBar';
import AdminSideBar from './components/Sidebar/AdminSideBar';
import PostLoginNavBar from './components/NavBar/PostLoginNavBar';


//TESTING
import Test from './pages/Register/Test';
import Practice from './pages/Register/Practice';
import SideBar2 from './components/SideBar2/SideBar2';


function App() {
  return (
    <>
      <Routes>

        {/* MAIN PAGES */}
        <Route exact path='/' element={<Home />} />
        <Route path='loan/business' element={<Forms loan_type={"Business"} country={"India"} />} />
        <Route path='loan/home' element={<Forms loan_type={"Home"} country={"India"} />} />
        <Route path='loan/education' element={<Forms loan_type={"Education"} country={"India"} />} />
        <Route path='loan/personal' element={<Forms loan_type={"Personal"} country={"India"} />} />
        <Route path='/otp' element={<OTP />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/set-password' element={<SetPassword />} />
        <Route path='/login/client' element={<ClientLogin />} />
        <Route path='/login/admin' element={<AdminLogin />} />
        <Route path='/forgot-password/:id' element={<ForgotPassword />} />

        {/* COMPONENTS */}
        <Route path='/new-navbar' element={<PostLoginNavBar />} />
        <Route path='/sidebar' element={<SideBar />} />
        <Route path='/admin-sidebar' element={<AdminSideBar />} />

        {/* USER PANEL */}
        <Route path="/sidebar/dashboard" element={<Dashboard />} />
        <Route path="/sidebar/kyc-docs" element={<KYC />} />
        <Route path="/sidebar/bank-details" element={<BankDetails />} />
        <Route path="/sidebar/analytics" element={<Analytics />} />
        <Route path="/sidebar/check-status" element={<CheckStatus />} />
        <Route path="/sidebar/add-inquiry" element={<AddInquiry />} />
        <Route path="/sidebar/my-info/personal-info" element={<PersonalInfo />} />
        <Route path="/sidebar/my-info/loan-info" element={<LoanInfo />} />

        {/* ADMIN PANEL */}
        <Route path="/admin-sidebar/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-sidebar/client-data" element={<ClientData />} />
        <Route path="/admin-sidebar/client-details" element={<ClientDetails />} />
        <Route path="/admin-sidebar/statistics" element={<Statistics />} />

        {/* TESTING */}
        <Route path='/test' element={<Test />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/sidebar2' element={<SideBar2 />} />

      </Routes>
    </>
  );
}

export default App;
