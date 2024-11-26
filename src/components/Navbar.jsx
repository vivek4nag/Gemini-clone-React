import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
    return (
        <div className="bg-[#1e1f20]  border-b border-b-slate-500/20 p-5 flex text-slate-50 justify-between items-center text-[22px]">
            <p className="text-transparent bg-gradient-to-r from-slate-100 to-purple-300 bg-clip-text font-bold">
                Gemini AI
            </p>
            <img src={assets.user_icon} alt="thobda" className="w-12 rounded-full" />
        </div>
    );
};

export default Navbar;
