import React, { useEffect } from "react";
import "./Menu.css";
import { useMenuContext } from "../../context/MenuContext";

const Menu = () => {
   const { data, getProduct } = useMenuContext();

   useEffect(() => {
      getProduct();
   }, []);

   return (
      <div id="menu">
         <div className="container">
            <div className="menu">
               {data.map((el) => (
                  <div className="menu__card" key={el.id}>
                     <img className="menu__img" src={el.photo} alt="img" />
                     <div className="menu__text">
                        <h3>
                           Name: <span>{el.name}</span>
                        </h3>
                        <h3>
                           Type: <span>{el.file}</span>
                        </h3>
                        <h3>
                           Price: <span>{el.price}$</span>
                        </h3>
                     </div>
                     <div className="menu__btns">
                        <button className="menu__order-btn">to order</button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Menu;
