import React from 'react';
import {Link} from 'react-router-dom';


function Header (){

    return (
        <nav>
        <Link to='/' className='logo'><img src="/img/logo.png" alt="Logo" /></Link>
            <ul className='header-cont'>                
                <li> 
                    <Link to='/'> Home </Link>
                </li>
                <li> 
                    <Link to='/Favoritos'> Favoritos </Link>
                </li>
                <li>                    
                    <div className="drop">
                        <p className="drop1"> Ver todas </p>                                                
                        <div className="drop2">
                        <Link to='/All'> Peliculas más populares 2022 </Link>                            
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Header ;