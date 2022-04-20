import React from "react";
import { NavLink } from "react-router-dom";


const Item = ({ id, title, description, price, picture }) =>{
    // console.log(title,  'Productos estan en Item') 
    return (
        <>
            <div className="col-xl-3" >
                <div key={id} className="card text-center ">
                <div className="card-body ">
                <img src={picture} className="card-img-top img-thumbnail" id="imgCard"/>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"> $ {price}</p>
                    <button className="btn btn-dark d-grid gap-2 mx-auto">
                        <NavLink 
                            to={`/item/${id}`} 
                            style={{textDecoration: 'none', color: 'white'}} >Ver Detalle del Producto
                        </NavLink>
                    </button>
                </div>
                </div>
            </div> 
        </>

    );
    
}

export default Item; 
