import { createContext, useState } from "react";
import run from "../config/gemini";


// createContext() is called to create a new Context object, stored in Context. This Context object can later be referenced to provide values to any component within the ContextProvider component.
// whn createContext() is called eact sets up a system to track the Context object and manages its values across any components that need access to it.
export const Context = createContext()


// below we are providing the context with ContextProvider ==> Inside ContextProvider, a Provider component, Context.Provider, wraps props.children, meaning all components within ContextProvider can access the contextValue.
const ContextProvider = (props) => {

    const[input, setInput] = useState("") // to cater input
    const [recentPrompt, setRecentprompt] = useState("") // to set the input value into prompt when send button is clicked
    const [ prevPrompts, setPrevPrompts] = useState([]) // to handle prev input & display on side panel
    const [ showResult, setShowResult] = useState(false) // if true it will hide all the stuff & display the result
    const [loading, setLoading] = useState(false) // to show loading animation
    const[resultData, setResultData] = useState("") //this will show the actual result data


    const onSent = async (prompt) => {
        await run(prompt)
    }

    // onSent("explain peace by pieces in international relations")

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentprompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }
    

    // The value prop of Context.Provider defines what values will be available to any component that consumes this context. Here, contextValue includes the onSent function, making it accessible to all components wrapped by ContextProvider.
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider