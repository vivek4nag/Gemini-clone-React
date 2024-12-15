import React, { useContext } from "react";
import { Context } from "../context/Context";
import { marked } from "marked";
import Navbar from "./Navbar";
import MainContent from "./MainContent";

const Main = () => {
    const {
        
        resultData,
        
    } = useContext(Context);

    const parsedHTML = marked(resultData || ""); // ye backchodi kr rhe bcz jo resultData aarha api se wo markdown format me hai & hum usko normal me dikha rhe. md ko normal me convert krne ke liye ek marked package install kiya hai & us function me humne result data ko pass krwakr simply parsedHTML ko render krwa diya hai niche .

    return (
        <>
            <div className="font-outfit bg-[#1e1f20] flex-1 relative pb-[15vh] w-[100%] "
            style={{ userSelect: "none" }}>
            
                <Navbar/>

                <MainContent/>

                
            </div>
        </>
    );
};
// dangerouslySetInnerHTML attribute renders the parsedHTML string as HTML rather than plain text. Using dangerouslySetInnerHTML ensures these tags are rendered as actual HTML. React labels this as "dangerous" bcz inserting raw HTML directly can make our app vulnerable to Cross-Site Scripting (XSS) attacks if the content is not sanitized.

export default Main;
