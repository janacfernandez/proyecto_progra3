import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <ul className='nav'>
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
            <Link to="/todasPelisPopu" >
                <li>
                    Populares
                </li>
            </Link>
            <Link to="/todasPelisCarte" >
                <li>
                    En cartelera
                </li>
            </Link>
        </ul>
    )
}

export default Nav;


