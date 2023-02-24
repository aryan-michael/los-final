import SideBar from "../../components/Sidebar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

const Setting = () => {
  return (
    <>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div className="title"> Settings </div>
      </div>
    </>
  );
};

export default Setting;
