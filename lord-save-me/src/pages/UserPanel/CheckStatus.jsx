import SideBar from "../../components/Sidebar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

const CheckStatus = () => {
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex' }}>
                <SideBar />
                <div className="title"> Check Status </div>
            </div>
        </>
    )
};

export default CheckStatus;
