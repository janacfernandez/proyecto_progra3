import React from 'react';
/*import {Link} from 'react-router-dom'; */
import './Header.css';


function Header() {

    return (

        <header className='header-section'>
                <img src="/img/logo.png" alt="Logo"  className='site-logo' />

                    <nav className='main-menu'>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Favoritos
                        </li>
                        <li>
                            Populares
                        </li>
                        <li>
                            Ver todas
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;