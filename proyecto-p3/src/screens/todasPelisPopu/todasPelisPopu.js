import React, { Component } from "react";
import './todasPelis.css';
import Form from '../../components/Form/Form';
import loadingimg from "../../loadingimg.gif";
import MovieCard from "../../components/MovieCard/MovieCard";

class TodasPelisPopu extends Component {


    constructor(props) {
        super(props)
        this.state = {
            key: 'f59e4c6662e96a0d026c2c66a7dcf812',
            loading: true,
            data: [],
            data2: [],
            siguientePag: ''
        }
    }

    componentDidMount() {
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + this.state.key + '&language=es&page=1'
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                data: data.results,
                data2: data.results,
                siguientePag: data.page + 1,
                loading: false
            }))
            .catch(error => console.log(error));

    }


    showMoreCharacters() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + this.state.key + '&language=es&page=' + this.state.siguientePag)
            .then(response => response.json())
            .then(data => this.setState({
                data: this.state.data.concat(data.results),
                data2: this.state.data.concat(data.results),
                siguientePag: data.page + 1,
                loading: false,
            }))
            .catch(error => console.log(error));
    }

    filtrarPelis(Filtro) {
        let pelisFiltradas = this.state.data.filter(peli => peli.title.toLowerCase().includes(Filtro.toLowerCase()))
        this.setState({
            data2: pelisFiltradas
        })
    }

    render() {
        return (

            <React.Fragment>

                {this.state.loading ?
                    <img className="gifcargando" src={loadingimg} alt="Cargando..." />
                    :

                    <div>
                        <div className="todasPelisH1"> <h1> Todas las peliculas populares </h1> </div>
                        <Form filtrarPelis={(Filtro) => this.filtrarPelis(Filtro)} />

                        <section className='movieContainer'>
                            {this.state.data2.map((elemento, i) => <MovieCard key={elemento + i} name={elemento.title} img={'https://image.tmdb.org/t/p/w342/' + elemento.poster_path} alt={elemento.title} description={elemento.overview} id={elemento.id} release_date={elemento.release_date} />)}
                        </section>

                        <div className="buttonVerMasTodasPelis-container">
                            <button onClick={() => this.showMoreCharacters()} className="buttonVerMasTodasPelis"> Ver más </button>
                        </div>
                    </div>}

            </React.Fragment>
        )
    }
}

export default TodasPelisPopu;