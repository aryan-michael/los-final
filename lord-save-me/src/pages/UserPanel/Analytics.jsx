import SideBar from "../../components/Sidebar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

const Analytics = () => {
  return (
    <>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div className="title"> Analytics </div>
      </div>
    </>
  )
};

export default Analytics;
