import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './verTodasSeries.css'

class verTodasSeries extends Component{

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
                <article className='card-containerSeries'>                            
                                          
                    <Link to={`/shows/id/${this.props.data.id}`}> 
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} alt="Cartel serie"/>
                    </Link>                    
                    <h3>{ this.props.data.name}</h3> 
                    <p> Fecha de estreno: {this.props.data.first_air_date}</p>                    
                    {this.state.viewMore ? 
                        <section className='extraSeries'>                            
                            <p> Visión general: {this.props.data.overview}</p> 
                            <p className='masSeries' onClick={() => this.hide()}> Ver menos </p>
                        </section>
                        :                                                 
                        <p className='masSeries' onClick={() => this.show()}> Ver más </p>                         
                        
                    } 
                    <div>
                        <Link className='irAlDetalleSeries' to={`/shows/id/${this.props.data.id}`}> Ir al detalle </Link>                    
                        <p className='favoritosSeries'><span className="material-symbols-outlined"> </span></p>  
                    </div>
                                                                 
                    
                </article>

            </React.Fragment>
        )
    }
}

export default verTodasSeries;