import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './verTodasPelisCarte.css';
import loadingimg from "../../loadingimg.gif";

class VerTodasPelisCarte extends Component {

    constructor(props) {
        super(props);
        this.state = {
            verMas: false,
            loading: false
        }
    };
    show() {
        this.setState({ verMas: true })
    }
    hide() {
        this.setState({ verMas: false })
    }

    render() {
        return (
            <React.Fragment>

                {this.state.loading ?
                    <img className="gifcargando" src={loadingimg} alt="Cargando..." />
                    :
                    <article className='card-containerCarte'>

                        <Link to={`/movie/id/${this.props.data.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} alt="Foto pelicula en cartelera" />
                        </Link>
                        <h3>{this.props.data.title}</h3>
                        <p> Fecha de estreno: {this.props.data.release_date}</p>
                        {this.state.verMas ?
                            <section className='extraCarte'>
                                <p> Resumen: {this.props.data.overview}</p>
                                <p className='masCarte' onClick={() => this.hide()}> <span class="material-symbols-outlined">
                                    expand_less
                                </span> </p>
                            </section>
                            :
                            <p className='masCarte' onClick={() => this.show()}> <span class="material-symbols-outlined">
                                expand_more
                            </span> </p>

                        }
                        <div className='irAlDetalleCarte'>
                            <Link className='iraldetalle' to={`/movie/id/${this.props.data.id}`}> Ir al detalle </Link>
                            <p className='favoritosCarte'><span className="material-symbols-outlined"> </span></p>
                        </div>


                    </article>
                }
            </React.Fragment>
        )
    }
}

export default VerTodasPelisCarte;