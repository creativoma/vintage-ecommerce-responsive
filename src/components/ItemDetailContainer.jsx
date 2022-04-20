import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from '../data';
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]) //Estado para obtener y/o modificar 1 Item
    const { id } = useParams();
    
    useEffect(() => { 
        if(id == undefined){
            async function getItem() { //F para mostrar un solo item dentro del ItemDetailContainer
                const detalleProducto = await getProducts([]) //Guardamos en detalleProducto 1 solo Producto
                setItem(detalleProducto); //Modificamos el estado de item (osea del producto que quiero mostrar)
            }
            getItem(); //Llamamos a la función 

        }else{
            async function getItem() { //F para mostrar un solo item dentro del ItemDetailContainer
                const detalleProducto = await getProducts([]) //Guardamos en detalleProducto 1 solo Producto
                setItem(detalleProducto.find(prod => prod.id == id)); //Modificamos el estado de item (osea del producto que quiero mostrar)
            }
            getItem(); //Llamamos a la función 
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