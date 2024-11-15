import { assets } from '../../assets/assets'
import './Main.css'
import React, { useContext } from 'react'
import { Context } from "../../context/Context"


const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)



    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className='main-container'>
                <div className='greet'>
                    <p><span>Hello, my Friend.</span></p>
                    <p>How can I help You Today ?</p>
                </div>

                <div className='cards'>
                    <div className='card'>
                        <p>Suggest me a road trip idea</p>
                        <img src={assets.compass_icon} alt="icon images" />
                    </div>

                    <div className='card'>
                        <p>summerize the concept: world system theory </p>
                        <img src={assets.message_icon} alt="icon images" />
                    </div>

                    <div className='card'>
                        <p>Brainstorm ideas for new workout routine</p>
                        <img src={assets.bulb_icon} alt="icon images" />
                    </div>

                    <div className='card'>
                        <p>analyze data</p>
                        <img src={assets.code_icon} alt="icon images" />
                    </div>
                </div>


                <div className='main-bottom'>
                    <div className='search-box'>
                        <input type="text" placeholder='Enter a Prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="inputicon" />
                            <img src={assets.mic_icon} alt="inputicon" />
                            <img src={assets.send_icon} alt="inputicon" />

                        </div>
                    </div>

                    <p className='bottom-info'>
                    Gemini can make mistakes. Check important info.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Main