import { assets } from "../../assets/assets";
import "./Main.css";
import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { marked } from 'marked';


const Main = () => {
    const {
        input,
        setInput,
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
    } = useContext(Context);

    const parsedHTML = marked(resultData || ""); // ye backchodi kr rhe bcz jo resultData aarha api se wo markdown format me hai & hum usko normal me dikha rhe. md ko normal me convert krne ke liye ek marked package install kiya hai & us function me humne result data ko pass krwakr simply parsedHTML ko render krwa diya hai niche .
    

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p>
                                <span>Hello, my Friend.</span>
                            </p>
                            <p>How can I help You Today ?</p>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <p>Suggest me a road trip idea</p>
                                <img src={assets.compass_icon} alt="icon images" />
                            </div>

                            <div className="card">
                                <p>summerize the concept: world system theory </p>
                                <img src={assets.message_icon} alt="icon images" />
                            </div>

                            <div className="card">
                                <p>Brainstorm ideas for new workout routine</p>
                                <img src={assets.bulb_icon} alt="icon images" />
                            </div>

                            <div className="card">
                                <p>analyze data</p>
                                <img src={assets.code_icon} alt="icon images" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="results-title">
                            <img src={assets.user_icon} alt="use-img" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="gemini-logo" />
                            {loading ? 
                                <div className="loader">
                                    <hr/>
                                    <hr/>
                                    <hr/>
                                    <hr className="half"/>
                                </div> : 
                                <p dangerouslySetInnerHTML={{ __html: parsedHTML }}/>
                                
                                
                            }
                            
                        </div>

                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Enter a Prompt here"
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="inputicon" />
                            <img src={assets.mic_icon} alt="inputicon" />
                            <img
                                onClick={() => onSent()}
                                src={assets.send_icon}
                                alt="inputicon"
                            />
                        </div>
                    </div>

                    <p className="bottom-info">
                        Gemini can make mistakes. Check important info.
                    </p>
                </div>
            </div>
        </div>
    );
};
// dangerouslySetInnerHTML attribute renders the parsedHTML string as HTML rather than plain text. Using dangerouslySetInnerHTML ensures these tags are rendered as actual HTML. React labels this as "dangerous" bcz inserting raw HTML directly can make our app vulnerable to Cross-Site Scripting (XSS) attacks if the content is not sanitized.

export default Main;
