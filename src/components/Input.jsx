import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { assets } from '../assets/assets'

const Input = () => {


    const {input, setInput,
        onSent,
        recentPrompt,} = useContext(Context)

    return (
        <div className="w-full max-w-[900px] px-5 m-auto absolute bottom-0">
            <div className="flex items-center justify-between gap-5 bg-[#1b1b1b] rounded-[50px] px-5 py-2.5">
                <input
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    type="text"
                    placeholder="Enter a Prompt here"
                    className="p-2 flex-1 text-lg border-none outline-none bg-transparent text-white"
                />
                <div className="flex items-center gap-[15px]">
                    {/* <img src={assets.gallery_icon} alt="inputicon" /> */}
                    {/* <img src={assets.mic_icon} alt="inputicon" /> */}
                    <img
                        onClick={() => onSent()}
                        src={assets.send_icon}
                        alt="inputicon"
                        className="w-[24px] cursor-pointer"
                    />
                </div>
            </div>

            <p className="text-[12px] my-[10px] mx-auto text-center font-light text-[#a2a2a2]">
                Gemini can make mistakes and display inaccurate info, please double-check it.
            </p>
            <p className="text-[13px] mx-auto text-center font-light text-[#a2a2a2]">Made with 💗 by Vivek Nag</p>
        </div>
    )
}

export default Input