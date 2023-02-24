import SideBar from "../../components/Sidebar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

const KYC = () => {
  return (
    <>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div className="title"> KYC </div>
      </div>
    </>
  );
};

export default KYC;
