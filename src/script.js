import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import ContextProvider from "./context/Context";

const App = () => {
    return (
        <>
            <Sidebar />
            <Main />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ContextProvider>

        <App />
    </ContextProvider>

);
