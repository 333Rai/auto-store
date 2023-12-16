import React, { useState } from "react";
import "./Admin.css";
import { useMenuContext } from "../../context/MenuContext";

const Admin = () => {
   const { postProduct } = useMenuContext();
   const [file, setFile] = useState("");
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [photo, setPhoto] = useState("");

   function createProduct() {
      if (!file.trim() || !name.trim() || !price.trim() || !photo.trim()) {
         return alert("Заполните все поле!!!");
      }
      const dataProducts = {
         file: file,
         name: name,
         price: price,
         photo: photo,
      };
      postProduct(dataProducts);
      setFile("");
      setName("");
      setPrice("");
      setPhoto("");
   }

   return (
      <div className="container">
         <div className="admin">
            <h2>create product</h2>
            <div className="admin__content">
               <div className="admin__left-content">
                  <div className="admin__inputs">
                     <input
                        onChange={(event) => setFile(event.target.value)}
                        type="text"
                        placeholder="choose file..."
                        value={file}
                     />
                     <input
                        onChange={(event) => setName(event.target.value)}
                        type="text"
                        placeholder="food name..."
                        value={name}
                     />
                     <input
                        onChange={(event) => setPrice(event.target.value)}
                        type="number"
                        placeholder="price..."
                        value={price}
                     />
                  </div>
                  <button onClick={createProduct}>create</button>
               </div>
               <div className="admin__right-content">
                  <input
                     onChange={(event) => setPhoto(event.target.value)}
                     type="text"
                     placeholder="place for a photo"
                     value={photo}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Admin;
