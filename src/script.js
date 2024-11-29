import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import ContextProvider from "./context/Context";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="w-full flex  bg-[#0a101e] ">
      <Sidebar/>
      <Main/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
