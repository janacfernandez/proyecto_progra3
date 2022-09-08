import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';

class Principal extends Component {
    constructor() {
        super();
        this.state = {
            key: 'f59e4c6662e96a0d026c2c66a7dcf812',
            popularMovies: [],
            cartelMovies: [],
            resultados: [],
            valor: '',
            verMas: true,
        }
    }

    componentDidMount() {      
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + this.state.key + '&language=es&page=1')
            .then(data => data.json())
            .then(info => {
                this.setState({
                    allMovies: info.results,
                    popularMovies: info.results.slice(0, 10),
                })
            })

        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.state.key)
            .then(data => data.json())
            .then(info => {
                let idsMovies = this.state.popularMovies.map(elemento => elemento.id)
                let movies = info.results.filter(elemento => !idsMovies.includes(elemento.id))
                this.setState({
                    cartelMovies: movies.slice(0, 10),
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
            if(e.target.value.length !== 0){
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
            popularMovies: this.state.allMovies.slice(10,20)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.evitarSubmit(e)}>
                    <input type="text" onChange={(e) => this.controlarCambios(e)} placeholder = '¿Qué querés ver?'/>
                </form>

                {this.state.valor.length === 0 ?
                    <React.Fragment>
                        <h1>Más Populares</h1>
                        <section className="movieContainer">
                            {this.state.popularMovies.map((elemento, i) => <MovieCard key={elemento + i} name={elemento.title} img={'https://image.tmdb.org/t/p/w342/' + elemento.poster_path} alt={elemento.title} description={elemento.overview} />)}
                            <p onClick={()=>this.verMas()}>Ver más</p>
                        </section>

                        <h1>En cartelera</h1>
                        <section className="movieContainer">
                            {this.state.cartelMovies.map((elemento, i) => <MovieCard key={elemento + i} name={elemento.title} img={'https://image.tmdb.org/t/p/w342/' + elemento.poster_path} alt={elemento.title} description={elemento.overview} />)}
                        </section>
                    </React.Fragment>
                    :
                    <section className="movieContainer">
                        {this.state.resultados.map((elemento, i) => <MovieCard key={elemento + i} name={elemento.title} img={'https://image.tmdb.org/t/p/w342/' + elemento.poster_path} alt={elemento.title} description={elemento.overview} />)}
                    </section>

                }
           </div>

        )
    }
}

export default Principal