import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {useContext} from 'react';
import {CartContext} from '../context/CartContext';


const CartWidget = () => {
   const [{items}] = useContext(CartContext);

   let itemsInCart = 0
   items.map((item) => {
       itemsInCart = itemsInCart + item.counter;
   }) 

    return (
       <>
            
        <button className="btn btn-outline-success btn-sm" id="btnCarrito" >
            { <FontAwesomeIcon icon={faCartShopping} style={{marginRight:'3px'}}/> }
            {itemsInCart > 0 ? <span>{itemsInCart}</span> : <span style={{visibility: 'hidden'}}></span>  }
            
        </button>  
               
       </>
    );
    

}
export default CartWidget;