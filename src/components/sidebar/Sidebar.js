import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Sidebar = () => {
    //using extended to show or hide the sidebar at maxwidth
    const [extended, setExtended] = useState(false);

    return (
        <div className="sidebar">
            
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className="menu" src={assets.menu_icon} alt="menuicon" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New chat</p> : null}
                </div>

                {extended ? (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="message" />
                            <p>what is JS...</p>
                        </div>
                    </div>
                ) : null}
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="questionicon" />
                    {extended? <p>Help</p> : null }
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="historyicon" />
                    {extended ? <p>Activity</p> : null }
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="setting" />
                    {extended?  <p>Setting</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
