import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    evitarSubmit(e) {
        e.preventDefault();

    }

    obtenerDatos(e) {
        this.setState({
            value: e.target.value,
        }, () => this.props.filtrarPelis(this.state.value))
    }

    render() {
        return (
            <form onSubmit={(e) => this.evitarSubmit(e)} className='formFiltro'>
                <input placeholder="Filtrar peliculas" onChange={(e) => this.obtenerDatos(e)} type="text" name="usuario" value={this.state.value} />
                <span class="material-symbols-outlined filt">
                    filter_list
                </span>
            </form>)
    }
}

export default Form;
