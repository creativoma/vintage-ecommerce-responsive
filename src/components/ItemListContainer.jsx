import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
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
            <div className="container mt-2" >
            <div className='titulosPaginas mb-3'>
            <h2>Productos Disponibles</h2>
            </div>
            </div>
            <ItemList  productos = {ropa} />
        </>
    );
}
export default ItemListContainer;