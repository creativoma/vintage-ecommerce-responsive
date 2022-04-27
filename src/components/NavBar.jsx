import React, {Fragment} from 'react';
import CartWidget from './CartWidget';
import vintagelogo from '../img/vintagelogo.png';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Link to='/' className="navbar-brand">
                        <img    src={vintagelogo} 
                                alt="VINTAGE" title='VINTAGE' width="30" height="30"
                                class="d-inline-block align-text-top"
                                id="imgLogo" />V I N T A G E
                    </Link>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link" aria-current="page">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category/hombres' className="nav-link">Hombres</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category/mujeres' className="nav-link">Mujeres</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category/decoracion' className="nav-link">Decoración</NavLink>
                        </li>
                        <span className="navbar-text">
                            <NavLink to='/cart'><CartWidget /></NavLink>
                        </span>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
}
 
export default NavBar;