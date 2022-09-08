import React , {Component} from 'react';
import './MovieDetail.css';

class MovieDetail extends Component {

    constructor(props) {
        super();
        this.state = {
            id: Number(props.match.params.id),
            info: {
                genres:[],
                key: 'f59e4c6662e96a0d026c2c66a7dcf812',
            },
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${this.state.info.key}&language=es`)
        .then(response => response.json())
        .then(data => this.setState({
            info: data
        },
        () => console.log(data)
        ))
        .catch(error =>console.error(error))
    }

    render(){
        return(

            <article className='card-container'>
             <h1 className="main-title">{this.state.info.title}</h1>
             <article className='photo-container'>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.state.info.poster_path}`} alt={this.state.info.title}/>
                    </article>
            <p>Rating: {this.state.info.popularity}</p>
            <p>Release date: {this.state.info.release_date}</p>
            <p>Plot: {this.state.info.overview}</p>
            <ul className='genre'>
                            genres:
                            {
                                this.state.info.genres.map((oneGenre, i) => <li className='genre' key={oneGenre.id + i}>{oneGenre.name}</li>)
                            }
                        </ul>


        </article>

        )
    }
}

export default MovieDetail; 