import React from "react";
import ItemCount from "./ItemCount";
import {useState} from 'react';
import { Link } from "react-router-dom";
import FinalizarCompra from './FinalizarCompra';
import {useContext} from 'react';
import {CartContext} from '../context/CartContext';



const ItemDetail = ({ producto }) => {
    console.log('Detalle de Producto en ItemDetail', producto);  //Aca se muestra el Detalle del Producto
   
    const [productoAgregado, setproductoAgregado] = useState(1)//Nuevo estado para counter: le asignamos un estado inicial en 1(initial={productoAgregado})
    
    // const onAdd = (counter) => {                // Al ejecutar onAdd: tomamos valor de counter como parámetro y seteamos nuestro estado inicial (productoAgregado) por el nuevo valor (se muestra x medio de alert)
    //     alert('Agregaste' + ' '  + counter + ' '+  'productos al carrito!');
    //     setproductoAgregado(counter);
    // }
   
    const [{ addItem }] = useContext(CartContext);
    
    return ( 
        <>
        <div className="container mt-2" >
            <div className='titulosPaginas mb-3'>
                <h2>Detalle del Producto</h2>
            </div>
            <div className='subtitleCarrito mb-1'>
                <Link to='/' style={{color: 'black'}}> Volver a Home </Link>
            </div>
        </div>
        <div className="container mt-5">
            <div key={producto.id} className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={producto.picture} className="img-fluid rounded-start" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body"> 
                            <h5 className="card-title fs-1">{producto.title}</h5>
                            <p className="card-text fs-6 fst-italic">{producto.description}</p>
                            <p className="card-text fs-3">$ {producto.price}</p>
                            { productoAgregado === 1?
                            <>
                            <ItemCount item={producto} stock={producto.stock} initial={productoAgregado} addItem={addItem} />
                            <p className="card-text"><small className="text-muted">Stock Disponible {producto.stock}</small></p>
                            </>
                            :
                            <Link to='/cart'> <FinalizarCompra /> </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </>

    );
}
export default ItemDetail;