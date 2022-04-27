import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts } from '../data';
import { useParams } from "react-router-dom";

const ItemListContainer = ({ }) => {
    const [ropa, setRopa] = useState([]);
    const { categoryName } = useParams();
 
    useEffect(() => {
        if(categoryName == undefined){
            async function obtenerProducts (){ 
                const datosProducts = await getProducts(); 
                setRopa(datosProducts);
            }
            obtenerProducts();
        }else {
            async function obtenerProducts (){ 
                const datosProducts = await getProducts(); 
                setRopa(datosProducts.filter(item => item.categoryName === categoryName));
            }
            obtenerProducts();
        }
    }, [categoryName]);

    return (
        <>
            <div className='titulosPaginas mb-4'>
            <h2>Productos Disponibles</h2>
            </div>
            <ItemList  productos = {ropa} />
        </>
    );
}
export default ItemListContainer;