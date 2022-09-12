import React from 'react';
import {Link} from 'react-router-dom'; 
import './Header.css';


function Header() {

    return (

        <header className='header-section'>
                <img src="/img/logo.png" alt="Logo"  className='site-logo' />
              
                    <nav className='main-menu'>
                    <ul>
                        <Link to="/" >
                            <li>
                            Home
                         </li> 
                        </Link>
                        <Link to="/movie/FavouriteMovies" >
                            <li>
                            Favoritos
                        </li> 
                        </Link>
                        <li>
                            Populares
                        </li>
                        <li>
                            En cartelera
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;