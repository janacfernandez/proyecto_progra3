import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './verTodasPelis.css';
import loadingimg from "../../loadingimg.gif";

class VerTodasPelisPopu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }

        render() {
            return (
                <React.Fragment>
                    {this.state.loading ?
                        <img className="gifcargando" src={loadingimg} alt="Cargando..." />
                        :
                        <article className='cadaContenedorPelis'>

                            <p> Fecha de estreno: {this.props.data.release_date}</p>
                            <div className='irAlDetalleCarte'>
                                <Link className='iraldetalle' to={`/movie/id/${this.props.data.id}`}> Ir al detalle </Link>
                                <p className='favoritosPelisCard'><span className="material-symbols-outlined"> </span></p>
                            </div>

                        </article>
                    }
                </React.Fragment>
            )
        }
    }
}
export default VerTodasPelisPopu;

