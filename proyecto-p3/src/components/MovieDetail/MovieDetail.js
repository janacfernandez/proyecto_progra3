import React, { Component } from 'react';
import './MovieDetail.css';
import loadingimg from "../../loadingimg.gif";

class MovieDetail extends Component {

    constructor(props) {
        super();
        this.state = {
            id: Number(props.match.params.id),
            info: {
                genres: [],
                key: 'f59e4c6662e96a0d026c2c66a7dcf812',
            },
            loading: true
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${this.state.info.key}&language=es`)
            .then(response => response.json())
            .then(data => this.setState({
                info: data,
                loading: false
            },
                () => console.log(data)
            ))
            .catch(error => console.error(error))
    }

    render() {
        return (
            <>
                {
                    this.state.loading ?
                        <img className="gifcargando" src={loadingimg} alt="Cargando..." />
                        :
                        <article className='card-container'>
                            <h1 className="main-title">{this.state.info.title}</h1>
                            <article className='photo-container'>
                                <img src={`https://image.tmdb.org/t/p/w342/${this.state.info.poster_path}`} alt={this.state.info.title} />
                            </article>
                            <p>Ranking: {this.state.info.popularity}</p>
                            <p>Fecha de estreno: {this.state.info.release_date}</p>
                            <p>Duración: {this.state.info.runtime}</p>
                            <p>Sinópsis: {this.state.info.overview}</p>
                            <ul className='genre'>
                                Géneros:
                                {
                                    this.state.info.genres.map((oneGenre, i) => <li className='genre' key={oneGenre.id + i}>{oneGenre.name}</li>)
                                }
                            </ul>
                        </article>
                }
            </>
        )
    }
}

export default MovieDetail; 