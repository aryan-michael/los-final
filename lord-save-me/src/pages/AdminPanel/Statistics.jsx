import AdminSideBar from "../../components/Sidebar/AdminSideBar";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";

const Statistics = () => {
    return (
        <>
            <PostLoginNavBar />
            <div style={{ display: 'flex' }}>
                <AdminSideBar />
                <div className="title"> stats </div>
            </div>
        </>
    );
}

export default Statistics