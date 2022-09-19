import React, { Component } from 'react';
import Nav from '../Nav/Nav';
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
        })
    }

    render() {
        console.log(window.screen.width)
        return (
            <header className='header-section'>
                <img src="/img/logo.png" alt="Logo" className='site-logo' />


                <span onClick={() => this.menu()} className="material-symbols-outlined menu">
                    menu
                </span>

                {window.screen.width <= 460 ?

                    this.state.menu ?
                        ""
                        :
                        <nav className='main-menu mostrar'>
                            <Nav></Nav>
                        </nav>
                    :

                    <nav className='main-menu mostrar'>
                        <Nav></Nav>
                    </nav>
                }
            </header>
        )
    }
}

export default Header;