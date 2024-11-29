
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../context/Context";

const Sidebar = () => {
    //using extended to show or hide the sidebar at maxwidth
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentprompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentprompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className="bg-[#1b1b1b] min-h-[100vh] px-4 py-6 inline-flex flex-col justify-between">
            <div>
                <img
                    onClick={() => setExtended((prev) => !prev)}
                    className="w-5 block ml-3 cursor-pointer transition duration-300 hover:bg-[#3c3c3c]"
                    src={assets.menu_icon}
                    alt="menuicon"
                />
                <div
                    className="bg-[#161616] mt-[50px] px-[15px] py-[10px] inline-flex items-center gap-2 text-sm text-gray-500 rounded-full cursor-pointer"
                    onClick={() => newChat()}
                >
                    <img src={assets.plus_icon} alt="" className="w-5" />
                    {extended ? <p>New chat</p> : null}
                </div>

                {extended ? (
                    <div className="flex flex-col">
                        <p className="text-white mt-8 mb-5">Recent</p>
                        {prevPrompts.map((item) => {
                            return (
                                <div
                                    onClick={() => loadPrompt(item)}
                                    className="flex gap-2.5 py-2 pr-2 pl-1 rounded-full cursor-pointer transition duration-300 hover:bg-[#3c3c3c] "
                                >
                                    <img
                                        className="w-5"
                                        src={assets.message_icon}
                                        alt="message"
                                    />
                                    <p className="text-white">
                                        {item.length < 16 ? item : item.slice(0, 16) + "..."}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                ) : null}
            </div>

            <div className="flex flex-col items-start gap-4 cursor-pointer">
                <div className=" flex cursor-pointer p-4 gap-2 rounded-full transition duration-300 hover:bg-[#3c3c3c]">
                    <img className="w-5" src={assets.question_icon} alt="questionicon" />
                    {extended ? <p className="text-white">Help</p> : null}
                </div>
                <div className=" flex  cursor-pointer p-4 gap-2 rounded-full transition duration-300 hover:bg-[#3c3c3c]">
                    <img className="w-5" src={assets.history_icon} alt="historyicon" />
                    {extended ? <p className="text-white">Activity</p> : null}
                </div>
                <div className=" flex  cursor-pointer p-4 gap-2 rounded-full transition duration-300 hover:bg-[#3c3c3c]">
                    <img className="w-5" src={assets.setting_icon} alt="setting" />
                    {extended ? <p className="text-white">Setting</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
