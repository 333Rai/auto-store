import React from "react";
import Admin from "../components/Admin/Admin";
import { Routes, Route } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Orders from "../components/Orders/Orders";

const MyRoutes = () => {
   const PUBLIC_ROUTES = [
      {
         path: "/",
         element: <Menu />,
         id: 1,
      },
      {
         path: "/orders",
         element: <Orders />,
         id: 2,
      },
      {
         path: "/admin",
         element: <Admin />,
         id: 3,
      },
   ];
   return (
      <>
         <Routes>
            {PUBLIC_ROUTES.map((page) => (
               <Route path={page.path} element={page.element} key={page.id} />
            ))}
         </Routes>
      </>
   );
};

export default MyRoutes;
