import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../helpers/const";

const menuContext = createContext();
export const useMenuContext = () => useContext(menuContext);

const MenuContext = ({ children }) => {
   const [data, setData] = useState([]);

   //! POST
   async function postProduct(newProduct) {
      await axios.post(API, newProduct);
   }
   //! POST

   //! GET
   async function getProduct() {
      let res = await axios(API);
      setData(res.data);
   }
   //! GET

   //! DELETE
   async function deleteProduct(id) {
      await axios.delete(`${API}/${id}`);
      getProduct();
   }
   //! DELETE
      
   //! PATCH
   
   //! PATCH

   const values = {
      postProduct,
      getProduct,
      data,
      deleteProduct,
   };
   return (
      <menuContext.Provider value={values}>{children}</menuContext.Provider>
   );
};

export default MenuContext;
