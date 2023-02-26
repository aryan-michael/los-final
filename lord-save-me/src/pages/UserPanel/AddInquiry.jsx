import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import SideBar from "../../components/Sidebar/SideBar";


const AddInquiry = () => {
  return (
    <>
      <PostLoginNavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div className="title"> Add Inquiry </div>
      </div>
    </>
  )

};

export default AddInquiry;
