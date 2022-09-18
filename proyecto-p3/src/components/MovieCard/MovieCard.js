import React, { Component } from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  constructor(props) {
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

    if (recuperoStorage !== null) {
      let favsToArray = JSON.parse(recuperoStorage);
      favoritos = favsToArray
    }

    if (favoritos.includes(this.props.id)) {
      this.setState({
        favsMessage: 'Quitar de favoritos'
      })
    }
  }

  agregarYQuitarDeFavs(id) {
    //agegar id dentro del Array que creamos y guardarlo en localstorage.
    // Si el id ya existe, posibilidad de quitar el id del array.

    let favoritos = [];

    let recuperoStorage = localStorage.getItem('favoritos')

    if (recuperoStorage !== null) {
      let favsToArray = JSON.parse(recuperoStorage);
      favoritos = favsToArray
    }

    if (favoritos.includes(id)) {
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


  render() {
    return (
      <React.Fragment>
        <article className="movieCard">
          <h3>{this.props.name}</h3>
          <Link to={`/movie/id/${this.props.id}`}>
            <img src={this.props.img} alt={this.props.alt} />
          </Link>
          
          <div className ='contenedorDetalleFav'>
          <p onClick={() => this.verMasFunc()}>
            {
              this.state.verMas ?
                <span className="material-symbols-outlined">
                  expand_more
                </span> :
                <span className="material-symbols-outlined">
                  expand_less
                </span>
            }
          </p>

          {!this.props.fav ?
            <p className = "favs" onClick={() => this.agregarYQuitarDeFavs(this.props.id)}>{this.state.favsMessage}</p> :
            <p className = "delete" onClick={() => this.props.borrar(this.props.id)}>Eliminar</p>}

          </div>

         


          {this.state.verMas ?
            <div className="hide"><p>Fecha de lanzamiento: {this.props.release_date}</p><p>{this.props.description}</p></div> :
            <div className="show"><p>Fecha de lanzamiento: {this.props.release_date}</p><p>{this.props.description}</p></div>}

        </article>

      </React.Fragment>
    )
  }
}

export default MovieCard;