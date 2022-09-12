import React, {Component} from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import './FavouriteMovies.css'; 

class Favourite extends Component{
 constructor(){
    super();
    this.state= {
        ShowMovie: [] //Es array de objetos literales con cada Movie
    }
 }

 componentDidMount(){
   
    let recuperoStorage = localStorage.getItem('favoritos');

    if(recuperoStorage !== null){
      let movieFav = JSON.parse(recuperoStorage) //array de ids
       let movies = []; 

  //recorrer el array y pedir al endpoint los datos de cada Movie.
        movieFav.forEach( (id) => {

            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f59e4c6662e96a0d026c2c66a7dcf812&language=es`)
            .then(res => res.json())
            .then(data => {movies.push(data)
            
                this.setState(
                    {
                        ShowMovie: movies
                    }
                )
            
            })
            .catch(e => console.log(e))
        });
        console.log(movies)
    }
 }

render(){
    return(
        <React.Fragment>

             <h2>Películas Favoritas</h2>
            <section className='movieContainer'>
             { this.state.ShowMovie.map((data, id) => <MovieCard key={data.title + id} name={data.title} img={'https://image.tmdb.org/t/p/w342/' + data.poster_path} alt={data.title} description={data.overview}  id={data.id}/>)}

            </section>


        </React.Fragment>
    )
}

}

export default Favourite; 