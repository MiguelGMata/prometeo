import React, { useState } from 'react';
import Image from '../../atoms/image/Image';
import BurgerIcon from '../../atoms/burger/BurgerIcon';
import NavbarLabel from '../../molecules/nav/NavLabel';
import './navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);


    const openClickMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleActiveItem = (item) => {
        setActiveItem(item);
        setMenuOpen(false);
    };
    return (
        <nav className='navbar-content'>
            <Image image="/Logo.png" className="image-logo " />
            <BurgerIcon
                isOpen={menuOpen}
                onClick={openClickMenu}
            />
            <NavbarLabel
                isOpen={menuOpen}
                activeItem={activeItem}
                onClick={handleActiveItem}
            />
        </nav>
    )
}
export default Navbar;