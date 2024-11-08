import React from "react";
import ReactDOM from "react-dom"
import "./index.css"
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {

    return(
        <>
        <Sidebar/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)