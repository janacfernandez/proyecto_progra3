import React, { Component } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { Link } from 'react-router-dom';
import './Principal.css';
import loadingimg from "../../loadingimg.gif";

class Principal extends Component {
    constructor() {
        super();
        this.state = {
            key: 'f59e4c6662e96a0d026c2c66a7dcf812',
            popularMovies: [],
            cartelMovies: [],
            resultados: [],
            movies: [],
            moviesCar: [],
            valor: '',
            verMas: true,
            allMovies: [],
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + this.state.key + '&language=es&page=1')
            .then(data => data.json())
            .then(info => {
                this.setState({
                    allMovies: info.results,
                    movies: [info.results.slice(0, 5), info.results.slice(5, 10), info.results.slice(10, 15), info.results.slice(15, 20)],
                    popularMovies: info.results.slice(0, 5),
                    index: 0,
                })
            })

        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.state.key + '&language=es&page=1')
            .then(data => data.json())
            .then(info => {
                let idsMovies = this.state.allMovies.map(elemento => elemento.id)
                let movies = info.results.filter(elemento => !idsMovies.includes(elemento.id))
                this.setState({
                    moviesCar: [movies.slice(0, 5), movies.slice(5, 10)],
                    cartelMovies: movies.slice(0, 5),
                    indexCar: 0,
                })
            })
    }
         evitarSubmit(e) {
        e.preventDefault();
    }

    controlarCambios(e) {
        this.setState({
            valor: e.target.value,
        }, () => {
            if (e.target.value.length !== 0) {
                fetch('https://api.themoviedb.org/3/search/movie?api_key=' + this.state.key + '&query=' + this.state.valor)
                    .then(data => data.json())
                    .then(info => {
                        this.setState({
                            resultados: info.results
                        })
                    })
            }
        })
    }

    verMas() {
        this.setState({
            popularMovies: this.state.allMovies.slice(10, 20)
        })
    }

    verMasPop() {
        this.setState({
            popularMovies: this.state.movies[this.state.index + 1],
            index: this.state.index + 1
        })
    }

    verMenosPop() {
        if (this.state.index !== 0) {
            this.setState({
                popularMovies: this.state.movies[this.state.index - 1],
                index: this.state.index - 1
            })
        }
    }

    verMasCar() {
        this.setState({
            cartelMovies: this.state.moviesCar[this.state.indexCar + 1],
            indexCar: this.state.indexCar + 1
        })
    }

    verMenosCar() {
        if (this.state.indexCar !== 0) {
            this.setState({
                cartelMovies: this.state.moviesCar[this.state.indexCar - 1],
                indexCar: this.state.indexCar - 1
            })
        }
    }

    render() {
        return (
            <div>
                <section className='primera'>
                    <h1>Todas tus pel??culas favoritas, en un solo lugar.</h1>
                </section>

                <form onSubmit={(e) => this.evitarSubmit(e)}>
                    <input className="buscador" type="text" onChange={(e) => this.controlarCambios(e)} placeholder='??Qu?? quer??s ver?' />
                </form>

                {this.state.valor.length === 0 ?

                    <React.Fragment>

                        <h1>M??s Populares</h1>

                        <section className="movieContainer populares">
                            {this.state.popularMovies.length === 0 ?
                                <img className="gifcargando" src={loadingimg} alt="Cargando..." /> :
                                this.state.popularMovies.map((elemento, i) => <MovieCard key={elemento + i} name={elemento.title} img={'https://image.tmdb.org/t/p/w342/' + elemento.poster_path} alt={elemento.title} description={elemento.overview} id={elemento.id} release_date={elemento.release_date} />)}

                        </section>

                        <div className='flechas'>
                            <p onClick={() => this.verMenosPop()}>
                                <span className="material-symbols-outlined arrows">
                                    arrow_back_ios
                                </span>
                            </p>

                            <p onClick={() => this.verMasPop()}>{this.state.index === 3 ? <Link to={'/TodasPelisPopu'} className='todas'>Ver todas</Link> :
                                <span className="material-symbols-outlined arrows">
                                    arrow_forward_ios
                                </span>
                            }
                            </p>
                        </div>

                        <h1>En cartelera</h1>

                        <section className="movieContainer cartelera">
                            {this.state.cartelMovies.length === 0 ?
                                <img className="gifcargando" src={loadingimg} alt="Cargando..." />

                                :

                                this.state.cartelMovies.map((elemento, i) => <MovieCard key={elemento + i} name={elemento.title} img={'https://image.tmdb.org/t/p/w342/' + elemento.poster_path} alt={elemento.title} description={elemento.overview} id={elemento.id} release_date={elemento.release_date} />)}
                        </section>

                        <div className='flechas'>
                            <p onClick={() => this.verMenosCar()}>
                                <span className="material-symbols-outlined arrows">
                                    arrow_back_ios
                                </span>
                            </p>
                            <p onClick={() => this.verMasCar()}>{this.state.indexCar === 1 ? <Link to={'/TodasPelisCarte'} className='todas'>Ver todas</Link> :
                                <span className="material-symbols-outlined arrows">
                                    arrow_forward_ios
                                </span>
                            }
                            </p>
                        </div>
                    </React.Fragment>

                    :

                    this.state.resultados.length === 0 ?

                        <h3 className="noResulados">No se han encontrado resultados para: {this.state.valor}</h3> :

                        <section className="movieContainer">
                            {this.state.resultados.map((elemento, i) => <MovieCard key={elemento + i} name={elemento.title} img={'https://image.tmdb.org/t/p/w342/' + elemento.poster_path} alt={elemento.title} description={elemento.overview} id={elemento.id} release_date={elemento.release_date} />)}
                        </section>
                }
            </div>
        )
    }
}

export default Principal
