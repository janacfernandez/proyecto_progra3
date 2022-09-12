import React, {Component} from 'react';
import './MovieCard.css';
import {Link} from 'react-router-dom';

class MovieCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            verMas: true,
            favsMessage: 'Agregar a favoritos'
        }
    }

    verMasFunc() {
        this.setState({
          verMas: !this.state.verMas,
        })
      }

componentDidMount() {
  let favoritos = [];
  let recuperoStorage = localStorage.getItem('favoritos')

  if(recuperoStorage !== null) {
     let favsToArray = JSON.parse(recuperoStorage);
      favoritos = favsToArray
  }

  if(favoritos.includes(this.props.id)){
    this.setState({
      favsMessage : 'Quitar de favoritos'
    })
  }
}

agregarYQuitarDeFavs(id){
  //agegar id dentro del Array que creamos y guardarlo en localstorage.
        // Si el id ya existe, posibilidad de quitar el id del array.

    let favoritos = [];

    let recuperoStorage = localStorage.getItem('favoritos')

    if(recuperoStorage !== null) {
      let favsToArray = JSON.parse(recuperoStorage);
       favoritos = favsToArray
   }

   if(favoritos.includes(id)){
    favoritos = favoritos.filter(idFav => idFav !== id);
    
    this.setState({
      favsMessage: 'Agregar a favoritos'
    })
    
  } else {
    favoritos.push(id); 

    this.setState({
      favsMessage: 'Quitar de favoritos'
    })
  }
 
  let favoritosToString = JSON.stringify(favoritos);
  localStorage.setItem('favoritos', favoritosToString);
  console.log(localStorage);
}


    render(){
        return(
          <React.Fragment>
            <article className = "movieCard">
            <h3>{this.props.name}</h3>
               <Link to={`/movie/id/${this.props.id}`}> 
                <img src={this.props.img} alt={this.props.alt}/> 
              </Link>
              <p onClick={()=>this.agregarYQuitarDeFavs(this.props.id)}>{this.state.favsMessage}</p>
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