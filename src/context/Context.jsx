import { createContext, useState } from "react";
import run from "../config/gemini";


// createContext() is called to create a new Context object, stored in Context. This Context object can later be referenced to provide values to any component within the ContextProvider component.
// whn createContext() is called eact sets up a system to track the Context object and manages its values across any components that need access to it.
export const Context = createContext()


// below we are providing the context with ContextProvider ==> Inside ContextProvider, a Provider component, Context.Provider, wraps props.children, meaning all components within ContextProvider can access the contextValue.
const ContextProvider = (props) => {

    const [input, setInput] = useState("") // input data save krne ke liye
    const [recentPrompt, setRecentprompt] = useState("") // to set the input value into prompt when send button is clicked
    const [prevPrompts, setPrevPrompts] = useState([]) // to handle prev input & display on side panel
    const [showResult, setShowResult] = useState(false) // if true it will hide all the stuff & display the result
    const [loading, setLoading] = useState(false) // to show loading animation
    const [resultData, setResultData] = useState("") //this will show the actual result data


    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord)
        }, 75 * index);
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }


    //load hone pe jo niche cards aata hai.. unpe click hone pr sidha generate ho jayga
    const cardClick = (cardValue) => {
        onSent(cardValue)
        setPrevPrompts(prev => [...prev, cardValue])
    }

    const onSent = async (prompt) => {

        setLoading(true)
        setResultData("") // clearing the prev result
        setShowResult(true)

        // niche if else me basically hum check kr rhe ki humne sidebar ki kisi item ko click kiya hai ki nhi, agr onsent function me prompt recieve hua hai means that is from sidebar, warna normal input ko lekr generate kr do apna response
        let response;
        if (prompt !== undefined) {
            response = await run(prompt);
            setRecentprompt(prompt)
        } else {
            //prev jo bhi search kiya hai usko store krne ke liye array me store kr rhe
            setPrevPrompts(prev => [...prev, input])

            setRecentprompt(input) // wo ans se pehle upar jo ques pucha hai wohi idkhata hai.. wohi krne ke liye
            response = await run(input);

        }
        // const response = await run(input)
        // setResultData(response)

        //typing effect ke liye hum space se split kr rhe & then settimeout function me word by word passs kr denge
        let resposeArray = response?.split(" ")
        for (let i = 0; i < resposeArray?.length; i++) {
            const nextWord = resposeArray[i]
            delayPara(i, nextWord + " ")
        }
        setLoading(false) // dat load hone ke baad loading bandh
        setInput("") // input field khali kr do 
    }

    // onSent("explain peace by pieces in international relations")

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        setRecentprompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
        cardClick
    }


    // The value prop of Context.Provider defines what values will be available to any component that consumes this context. Here, contextValue includes the onSent function, making it accessible to all components wrapped by ContextProvider.
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider