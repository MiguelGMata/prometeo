import React from 'react';
import './burgerIcon.css';

const BurgerIcon = ({ isOpen, onClick }) => {
    return (
        <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};
export default BurgerIcon;