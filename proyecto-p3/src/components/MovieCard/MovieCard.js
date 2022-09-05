import React, {Component} from 'react';
import './MovieCard.css';

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
            <article className = "movieCard">
                <h3>{this.props.name}</h3>
                <img src={this.props.img} alt={this.props.alt}/>
                <p onClick={() => this.verMasFunc()}>
            {
              this.state.verMas ? "Ver Más" : "Ver menos"
            }
          </p>
          
          {this.state.verMas ? <p className = "hide">{this.props.description}</p> : <p class="show">{this.props.description}</p>}
            </article>
        )
    }
}

export default MovieCard;