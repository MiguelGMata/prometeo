import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navLabel.css';

const NavbarLabel = ({ isOpen, activeItem, onClick }) => {
    return (
        <div className={`navbar-label ${isOpen ? 'open' : ''}`}>
            <ul className='navbar-label-content'>
                <li className={activeItem === 'home' ? 'active' : ''}
                    onClick={() => onClick('home')} >
                    <Link to="/">Accueil</Link>
                </li>
                <li className={activeItem === 'previsions' ? 'active' : ''} onClick={() => onClick('previsions')}>
                    <Link to="/previsions">Prévisions par ville</Link>
                </li>
                <li className={activeItem === 'confiabilite' ? 'active' : ''} onClick={() => onClick('confiabilite')}>
                    <Link to="/confiabilite">Confidentialité</Link>
                </li>
            </ul>
        </div>
    )
}
export default NavbarLabel;