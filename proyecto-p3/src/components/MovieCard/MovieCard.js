import React, { Component } from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'


class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verMas: true,
      favsMessage: "Agregar a favoritos"
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
        favsMessage: "Quitar de favoritos",
      })
    }
  }

  agregarYQuitarDeFavs(id) {
    let favoritos = [];

    let recuperoStorage = localStorage.getItem('favoritos')

    if (recuperoStorage !== null) {
      let favsToArray = JSON.parse(recuperoStorage);
      favoritos = favsToArray
    }

    if (favoritos.includes(id)) {
      favoritos = favoritos.filter(idFav => idFav !== id);

      this.setState({
        favsMessage: "Agregar a favoritos"
      })

    } else {
      favoritos.push(id);

      this.setState({
        favsMessage: "Quitar de favoritos"
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

          
            <Link to={`/movie/id/${this.props.id}`}>
            <img src={this.props.img} alt={this.props.alt} />
          </Link>
          
          <div className='contenedor1'>
         
          <div className='contenedorDetalleFav'><h3>{this.props.name}</h3>
            <p className="viewMore" onClick={() => this.verMasFunc()}>
              {
                this.state.verMas ? <span class="material-symbols-outlined">
                expand_more
                </span> : <span class="material-symbols-outlined">
expand_less
</span>
              }
            </p>
           
          </div>
           <p onClick={() => this.agregarYQuitarDeFavs(this.props.id)}>{this.state.favsMessage}</p>
          {this.state.verMas ? <p className="hide">{this.props.description}</p> : <p class="show">{this.props.description}</p>}
         
          </div>
        </article>

      </React.Fragment>
    )
  }
}

export default MovieCard;