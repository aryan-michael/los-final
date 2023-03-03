import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import SideBar from "../../components/Sidebar/SideBar";


const KYC = () => {
  return (
    <>
      <PostLoginNavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div className="title"> KYC </div>
      </div>
    </>
  );
};

export default KYC;
