import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useMenuContext } from "../../context/MenuContext";

const Orders = () => {
   const { data, getProduct } = useMenuContext();
   useEffect(() => {
      getProduct();
   }, []);
   
   const [count, setCount] = useState(0);

   function handleIncrement() {
      setCount(count + 1);
   }
   function handleDecrement() {
      setCount(count ? count - 1 : count);
   }
   
   return (
      <div className="container">
         <div className="orders">
            <h2>MY ORDERS</h2>
            <div className="orders__wrap">
               {data.map((el) => (
                  <div className="orders__card" key={el.id}>
                     <div className="orders__img">
                        <img src={el.photo} alt="" />
                     </div>
                     <div className="orders__text">
                        <h4>{el.name}</h4>
                        <h4>{el.price}$</h4>
                     </div>
                     <div className="orders__left-block">
                        <div className="orders__btn-box">
                           <button>delete order</button>
                        </div>
                        <div className="orders__count-box">
                           <button onClick={handleDecrement}>-</button>
                           <h5>
                              {count}
                              <span>X</span>
                           </h5>
                           <button onClick={handleIncrement}>+</button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Orders;
