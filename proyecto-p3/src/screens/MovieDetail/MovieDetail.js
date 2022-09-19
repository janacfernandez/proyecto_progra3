import React, { Component } from 'react';
import './MovieDetail.css';
import MovieCard from '../../components/MovieCard/MovieCard';
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
            loading: true,
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
                        <section className='detail-container'>
                            <MovieCard key={this.state.info.title + 1} name={this.state.info.title} img={'https://image.tmdb.org/t/p/w342/' + this.state.info.poster_path} alt={this.state.info.title} description={this.state.info.overview} id={this.state.info.id} release_date={this.state.info.release_date} />
                            <article className='detail-info'>
                                <p> <span className='tituloDetail'>Rating:  </span> {this.state.info.popularity} ptos
                                </p>
                                <p> <span className='tituloDetail'> Fecha de estreno:  </span> {this.state.info.release_date}</p>
                                <p> <span className='tituloDetail'> Duración:  </span> {this.state.info.runtime} min</p>
                                <ul className='genre'>
                                    Géneros:
                                    {
                                        this.state.info.genres.map((oneGenre, i) => <li className='genres' key={oneGenre.id + i}>{oneGenre.name}</li>)
                                    }
                                </ul>
                            </article>
                        </section>
                }
            </>
        )
    }
}

export default MovieDetail; 