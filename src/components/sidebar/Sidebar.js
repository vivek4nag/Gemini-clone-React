import "./sidebar.css";
import {assets} from "../../assets/assets"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <img className="menu" src= {assets.menu_icon} alt="menuicon" />
                <div className="new-chat">
                    <img src = {assets.plus_icon} alt="" />
                    <p>New chat</p>
                </div>
            </div>

            <div className="bottom"></div>
        </div>
    );
};

export default Sidebar;
