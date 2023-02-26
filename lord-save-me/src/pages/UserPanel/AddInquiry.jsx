import SideBar from "../../components/Sidebar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

const AddInquiry = () => {
  return (
    <>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div className="title"> Add Inquiry </div>
      </div>
    </>
  )

};

export default AddInquiry;
