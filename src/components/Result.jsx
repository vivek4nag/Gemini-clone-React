import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/Context";
import { marked } from "marked";


const Result = () => {
    const { recentPrompt, loading, resultData } = useContext(Context)
    const parsedHTML = marked(resultData || "");
    return (
        <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hide">
            <div className="my-10 flex items-center gap-2.5">
                <img src={assets.user_icon} alt="use-img" className="w-10 rounded-full" />
                <p className="text-white font-bold" >{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-5">
                <img src={assets.gemini_icon} alt="gemini-logo" className="w-10" />
                {loading ? (
                    <div className="w-full flex flex-col gap-3">
                        <hr className="line h-[9px] rounded-lg border-none bg-gradient-to-r from-[#9ed7ff] via-[#4b90ff] to-[#9ed7ff] animate-loader" />
                        <hr className="line h-[9px] rounded-lg border-none bg-gradient-to-r from-[#9ed7ff] via-[#4b90ff] to-[#9ed7ff] animate-loader" />
                        <hr className="line h-[9px] rounded-lg border-none bg-gradient-to-r from-[#9ed7ff] via-[#4b90ff] to-[#9ed7ff] animate-loader" />
                        <hr className="loader-line h-[9px] rounded-lg border-none bg-gradient-to-r from-[#9ed7ff] via-[#4b90ff] to-[#9ed7ff] w-1/2 animate-loader" />
                    </div>
                ) : (
                    <p dangerouslySetInnerHTML={{ __html: parsedHTML }} className="text-[18px] font-light leading-7 text-white" />
                )}
            </div>
        </div>
    );
};

export default Result;
