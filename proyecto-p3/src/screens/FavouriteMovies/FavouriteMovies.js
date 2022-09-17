import React, { Component } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import './FavouriteMovies.css';
import loadingimg from "../../loadingimg.gif";

//Falta hacer un if cuando no hay favoritos!!!!

class Favourite extends Component {
    constructor() {
        super();
        this.state = {
            ShowMovie: [],//Es array de objetos literales con cada Movie
            favoritos: true
        }
    }

    componentDidMount() {

        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null) {
            let movieFav = JSON.parse(recuperoStorage) //array de ids
            let movies = [];

            //recorrer el array y pedir al endpoint los datos de cada Movie.
            movieFav.forEach((id) => {

                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f59e4c6662e96a0d026c2c66a7dcf812&language=es`)
                    .then(res => res.json())
                    .then(data => {
                        movies.push(data)

                        this.setState(
                            {
                                ShowMovie: movies,
                                loading: false
                            }
                        )

                    })
                    .catch(e => console.log(e))
            });
            console.log(movies)
        }
    }

    borrar(id) {
        // borrar un objeto del array.
        let favoritos = this.state.ShowMovie.filter(oneMovie => oneMovie.id !== id);

        this.setState({
            ShowMovie: favoritos
        })

        //borrar un id de localStorage
        let recuperoStorage = JSON.parse(localStorage.getItem('favoritos'));


        let favoritosStorage = recuperoStorage.filter(oneId => oneId !== id);


        let favoritosToString = JSON.stringify(favoritosStorage);
        localStorage.setItem('favoritos', favoritosToString)
    }



    render() {
        return (
            <React.Fragment>

                <h1 className='favName'>Películas Favoritas</h1>
                {this.state.loading ?
                    <img className="gifcargando" src={loadingimg} alt="Cargando..." />
                    :
                    <section className='movieContainer'>
                        {this.state.ShowMovie.map((data, id) => <MovieCard key={data.title + id} name={data.title} img={'https://image.tmdb.org/t/p/w342/' + data.poster_path} alt={data.title} description={data.overview} id={data.id} fav={this.state.favoritos} borrar={(id) => this.borrar(id)} />)}

                    </section>

                }
            </React.Fragment>
        )
    }

}

export default Favourite; 