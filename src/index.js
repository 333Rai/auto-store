import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./Routes/MyRoutes";
import MenuContext from "./context/MenuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
      <MenuContext>
         <App />
         <MyRoutes />
      </MenuContext>
   </BrowserRouter>
);
