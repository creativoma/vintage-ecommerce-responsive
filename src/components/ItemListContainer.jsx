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
            async function obtenerProducts (){ //Definimos F con Async
                const datosProducts = await getProducts(); //Await para resolver promesa(nos envía el array Products) y lo guardo en datosProducts
                setRopa(datosProducts);//Seteamos el array y modifica estado de [ropa]
            }
            obtenerProducts(); //Llamamos a la F
        }else {
            async function obtenerProducts (){ 
                const datosProducts = await getProducts(); 
                setRopa(datosProducts.filter(item => item.categoryName === categoryName));
            }
            obtenerProducts();
        }
    }, [categoryName]); //Lo ponemos entre [] para que vuelva a renderizar el array al momento de filtrar la categoria
   
    // console.log(ropa, 'Soy el array de Products');
    // console.log(categoryName); //Me muestra categoryName seleccionada en URL
    // const onAdd = () => {
    //     console.log('Agregaste ' + {counter} + 'productos')
    // }


    return (
        <>
            
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd}  /> */}
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