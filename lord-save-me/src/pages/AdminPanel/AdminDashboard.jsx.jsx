import AdminSideBar from "../../components/Sidebar/AdminSideBar";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";

const AdminDashboard = () => {
    return (
        <>
            <PostLoginNavBar />
            <div style={{ display: 'flex' }}>
                <AdminSideBar />
                <div className="title"> admin home page </div>
            </div>
        </>
    );
}

export default AdminDashboard