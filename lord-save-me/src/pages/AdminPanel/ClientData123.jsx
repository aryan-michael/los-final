import AdminSideBar from "../../components/Sidebar/AdminSideBar";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";

const ClientData = () => {

  return (
    <>
      <PostLoginNavBar />
      <div style={{ display: 'flex' }}>
        <AdminSideBar />
        <div className="title"> datatables </div>
      </div>
    </>
  )
}

export default ClientData

