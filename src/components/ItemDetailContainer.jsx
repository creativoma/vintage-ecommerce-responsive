import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from '../data';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]) 
    const { id } = useParams();
    
    useEffect(() => { 
        if(id == undefined){
            async function getItem() { 
                const detalleProducto = await getProducts([]) 
                setItem(detalleProducto); 
            }
            getItem(); 

        }else{
            async function getItem() { 
                const detalleProducto = await getProducts([]) 
                setItem(detalleProducto.find(prod => prod.id == id)); 
            }
            getItem();
        }
    }, [id])
    console.log(id);

    return(
        <>
            <ItemDetail producto = {item}   />
        </>
    );
}
export default ItemDetailContainer;