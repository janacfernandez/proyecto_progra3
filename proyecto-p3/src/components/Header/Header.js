import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends Component {
    constructor() {
        super();
        this.state = {
            menu: true,
        }
    }

    menu() {
        this.setState({
            menu: !this.state.menu
        }, () => console.log(this.state.menu))
    }

    render() {
        console.log(window.screen.width)
        return (
            <header className='header-section'>
                <img src="/img/logo.png" alt="Logo" className='site-logo' />


                <span onClick={() => this.menu()} className="material-symbols-outlined">
                    menu
                </span>

                {window.screen.width <= 460 ?
                    
                    this.state.menu ?
                        <nav className='ocultar'>
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
                        </nav>
                        :
                        <nav className='main-menu mostrar'>
                            <ul className=' nav'>
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
                        </nav>
                     :

                    <nav className='main-menu mostrar'>
                            <ul className='nav mostrar'>
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
                        </nav>

                
                
                
                
                }
                    


            </header>
        )
    }
}

export default Header;