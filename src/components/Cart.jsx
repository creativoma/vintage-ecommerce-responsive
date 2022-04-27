import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Cart = () => {
   
    const [{ items, removeItem, clearItems, totalPrenda, subTotalProductos, impuestos, costoEnvio, totalCompra, finalizarCompra }] = useContext(CartContext);
    console.log('Item en cart', items);
   
    return(
        <>
        <div className="container mt-2" >
            <div className='titulosPaginas mb-3'>
                <h2>Mi Carrito</h2>
            </div>
            {
                items.length > 0 ?
                <div className='subtitleCarrito mb-2'>
                    <Link to='/' style={{color: 'black'}}> Seguir Comprando </Link>
                    <span style={{marginLeft: '800px'}}>
                    <button className="btn btn-dark btn-sm "  onClick={() => clearItems()}>
                    { <FontAwesomeIcon icon={faClipboardCheck} style={{marginRight:'5px'}}/> }
                    Vaciar Carrito
                    </button> 
                    </span>
                </div>
                :
                <div className="alert alert-danger" role="alert">
                   Tu carrito está vacío... <Link to='/' style={{textDecoration: 'none', color: 'black'}}> Volver a Home </Link>
                </div>
            }
            
        </div>
       
        <div className="row">
        {
            items.length > 0 &&
            items.map((item) => (
                <div className="container mt-5" >
                    <div className="row" >
                        <div className="col-sm-8">
                            <div key={item.id} className="card mb-4" >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.picture} className="img-fluid"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title h1">{item.name}</h5>
                                            <p className="card-text h4">Precio: $ {item.price}</p>
                                            <p className="card-text h4">Cantidad: {item.counter}</p>
                                            <p className="card-text h4">Subtotal: $ {totalPrenda(item.id)} </p>
                                            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                                                { <FontAwesomeIcon icon={faClipboardCheck} style={{marginRight:'5px'}}/> }
                                                Eliminar Producto 
                                            </button>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            ))   
        }
        {
            items.length > 0 &&
             <div className="col-sm-4" style={{position: 'relative'}}>
                <div className="row">
                    <div className="col-12 mb-2 h5"> Subtotal: $ {subTotalProductos()}</div>
                    <div className="col-12 mb-2 h5">+ Iva (21%): $ {impuestos()}</div>
                    <div className="col-12 mb-2 h5">+ Costo de Envío: $ {costoEnvio()}</div>
                    <div className="col-12 mb-2 h3">TOTAL: $ {totalCompra()}</div>
                    <button className="btn btn-success"
                    onClick={finalizarCompra}>{<FontAwesomeIcon icon={faClipboardCheck} style={{marginRight:'5px'}}/>}
                    Finalizar Compra</button> 
                </div>
            </div>
        }
        </div>
        </>
    );
}
export default Cart;
