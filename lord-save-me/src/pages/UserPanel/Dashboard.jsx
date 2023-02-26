import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import SideBar from "../../components/Sidebar/SideBar";

const Dashboard = () => {
  return (
    <>
      <PostLoginNavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div>
          <div className="title"> Dashboard </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
