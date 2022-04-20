import React from "react";
import Item from './Item'
import { Link } from "react-router-dom";

//Recibimos productos de ItemListContainer
const ItemList = ({ productos }) => {

    // console.log(productos, 'Productos llegaron a ItemList')
    return (
        <>
        
        <div className="row">
                { productos.length > 0 ?
                         productos.map( item => 
                                (<Item  id={item.id}
                                        key={item.id}  
                                        title={item.title} 
                                        // description={item.description} 
                                        price={item.price} 
                                        picture={item.picture} 
                                        stock={item.stock} />
                                )) 
                
                        :
                        <div className="d-flex align-items-center">
                                <strong>Cargando Productos...</strong>
                                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div>
                }
                
        </div>
        </>

    );

}
export default ItemList;