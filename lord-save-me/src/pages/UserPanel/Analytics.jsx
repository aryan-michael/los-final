import SideBar from "../../components/Sidebar/SideBar";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";

const Analytics = () => {
  return (
    <>
      <PostLoginNavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div className="title"> Analytics </div>
      </div>
    </>
  )
};

export default Analytics;
