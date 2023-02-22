import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Forms from './pages/Register/Forms';
import ClientLogin from './pages/Login/ClientLogin';
import SetPassword from './pages/Password/SetPassword';
import ForgotPassword from './pages/Password/ForgotPassword';
import OTP from './pages/Password/OTP';
import Test from './pages/Register/Test';
import Practice from './pages/Register/Practice';
import SideBar from './components/Sidebar/SideBar';
//import './App.css'
import Dashboard from "./pages/AdminPanel/Dashboard";
import Users from "./pages/AdminPanel/Users";
import Messages from "./pages/AdminPanel/Messages";
import FileManager from "./pages/AdminPanel/FileManager";
import Analytics from "./pages/AdminPanel/Analytics";
import Order from "./pages/AdminPanel/Order";
import Saved from "./pages/AdminPanel/Saved";
import Setting from "./pages/AdminPanel/Setting";

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
        <Route path='/sidebar' element={<SideBar />} />
        {/* <SideBar>
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </SideBar> */}
        {/* break */}

        {/* <SideBar>
          <Routes>
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Setting />} />

            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar> */}
      </Routes>
    </>
  );
}

export default App;
