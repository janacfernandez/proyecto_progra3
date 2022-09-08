import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';

class Principal extends Component {
    constructor() {
        super();
        this.state = {
            key: 'f59e4c6662e96a0d026c2c66a7dcf812',
            popularMovies: [],
            cartelMovies: [],
            verMas: true,
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + this.state.key)
            .then(res => res.json())
            .then(data => {
                this.setState({
                popularMovies: data.results,
            }, () => console.log(this.state.popularMovies))
            })

            fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.state.key)
            .then(res => res.json())
            .then(data => {
                let idsMovies = this.state.popularMovies.map(elemento => elemento.id)
                let movies = data.results.filter(elemento => !idsMovies.includes(elemento.id))
                this.setState({
                cartelMovies: movies,
                }, () => console.log(movies)) })
           
    }

    render() {
        return (
            <div>
            <h1>Más Populares</h1>
            <section className = "movieContainer">
              {this.state.popularMovies.map((elemento, i) => <MovieCard key = {elemento + i } name = {elemento.title} img = {'https://image.tmdb.org/t/p/w185/'+elemento.poster_path} alt = {elemento.title} description = {elemento.overview} data={elemento} id={elemento.id}/>)}
            </section>

            <h1>En cartelera</h1>
            <section className = "movieContainer">
            {this.state.cartelMovies.map((elemento, i) => <MovieCard key = {elemento + i} name = {elemento.title} img = {'https://image.tmdb.org/t/p/w185/'+elemento.poster_path} alt = {elemento.title} description = {elemento.overview} data={elemento} id={elemento.id}/>)}
          </section>
          </div>

        )
    }
}

export default Principal