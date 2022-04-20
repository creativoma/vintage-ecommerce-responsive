import React, {Fragment} from 'react';
import CartWidget from './CartWidget';
import vintagelogo from '../img/vintagelogo.png';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <Fragment>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to='/' className="navbar-brand">
                    <img    src={vintagelogo} 
                            alt="" width="30" height="30"
                            className="d-inline-block align-text-top"
                            id="imgLogo" />
                    V I N T A G E
                </Link>
                
                <div className="d-flex flex-row">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link" aria-current="page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/category/hombre' className="nav-link">Hombre</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/category/mujer' className="nav-link">Mujer</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/category/deco' className="nav-link">Deco</NavLink>
                    </li>
                    <span className="navbar-text">
                        <NavLink to='/cart'>  <CartWidget />   </NavLink>
                    </span>
                </ul>
                </div>
            </div>
        </nav>
    </Fragment>
    );
}
 
export default NavBar;