import React, {Component} from 'react';
import './MovieCard.css';
import {Link} from 'react-router-dom'

class MovieCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            verMas: true,
        }
    }

    verMasFunc() {
        this.setState({
          verMas: !this.state.verMas,
        })
      }

    render(){
        return(
          <React.Fragment>
            <article className = "movieCard">
            <h3>{this.props.name}</h3>
               <Link to={`/movie/id/${this.props.id}`}> 
                <img src={this.props.img} alt={this.props.alt}/> 
              </Link>
                <p onClick={() => this.verMasFunc()}>
            {
              this.state.verMas ? "Ver Más" : "Ver menos"
            }
          </p>
          
          {this.state.verMas ? <p className = "hide">{this.props.description}</p> : <p class="show">{this.props.description}</p>}
            </article>

         </React.Fragment>
        )
    }
}

export default MovieCard;