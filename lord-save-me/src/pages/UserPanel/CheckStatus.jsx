import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import SideBar from "../../components/Sidebar/SideBar";


const CheckStatus = () => {
    return (
        <>
            <PostLoginNavBar />
            <div style={{ display: 'flex' }}>
                <SideBar />
                <div className="title"> Check Status </div>
            </div>
        </>
    )
};

export default CheckStatus;
