import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";


const ItemCount = ({stock, initial, item, addItem}) => {
    const [counter, setCounter] = useState(initial);
    
    const Suma = () => {
        if(counter < stock ){
            setCounter(counter + 1); 
        }else{
            alert('No hay mas stock');
        }     
    }

    const Resta = () => {
        if(counter > 0){
            setCounter(counter - 1); 
        }else{
            alert('Debe seleccionar un producto');
        }
        
    }    
    
    return(  
        <>
        <div id="cajaCounter">
            <button className="btn btn-outline-danger" id="btnResta" onClick={Resta}> - </button>
            <span id="cajaCantidadCounter"> {counter} </span> 
            <button className="btn btn-outline-success" id="btnSuma" disabled= ""  onClick={Suma}> + </button>
        </div>  
            <br/>
            {
                counter > 0 ?
                <button className="btn btn-dark" id="btnAgregar" onClick={() => addItem({item, counter})}> 
                    { <FontAwesomeIcon icon={faCartPlus} style={{marginRight:'5px'}} />}
                    Agregar al Carrito 
                </button>
                :
                <button className="btn btn-secondary disabled" id="btnAgregar"> 
                    { <FontAwesomeIcon icon={faCartPlus} style={{marginRight:'5px'}} />}
                    Agregar al Carrito 
                </button>
            }
        </>
    );
}
export default ItemCount;