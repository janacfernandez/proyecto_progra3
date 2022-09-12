import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './verTodasPelis.css'

class verTodasPelis extends Component{

    constructor(props){
        super(props);
        this.state = {
            viewMore: false
        }
    };
    show(){
        this.setState( {viewMore: true} )
    }
    hide(){
        this.setState({viewMore: false} )
    }

    render(){
        return(
            <React.Fragment>
                <article className='cadaContenedorPelis'>                            
                                            
                    <Link to={`/movies/id/${this.props.data.id}`}> 
                    <img src= {`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} alt="Cartel película"/>
                    </Link>
                  
                    <h3>{ this.props.data.title}</h3> 
                    <p> Fecha de estreno: {this.props.data.release_date}</p>
                    {this.state.viewMore ? 
                        <section className='extraAllMoviesCard'>                            
                            <p> Visión general: {this.props.data.overview}</p> 
                            <p className='masPelisCard' onClick={() => this.hide()}>Ver menos</p>
                        </section>
                        :                                                 
                        <p className='masPelisCard' onClick={() => this.show()}>Ver más</p>                         
                        
                    } 
                    <div className='irAlDetalleSeries'>
                        <Link className='go-to-detailAllMoviesCard' to={`/movies/id/${this.props.data.id}`}> Ir al detalle </Link>                    
                        <p className='favoritosPelisCard'><span className="material-symbols-outlined"> </span></p>  
                    </div>                                              
                    
                </article>

            </React.Fragment>
        )
    }
}

export default verTodasPelis;