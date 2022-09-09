import React, { Component } from "react";
/* import verTodasPelis from "../../components/verTodasPelis/verTodasPelis"; */
import './todasPelis.css';
import '../../loadingimg.gif' 

class todasPelis extends Component {


    constructor(props) {
        super(props)
        this.state = {
            haciendoFetch: true,
            data: [],
            siguientePag: ''
        }
    }


    componentDidMount() {
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + this.state.key + '&language=es&page=1'
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                data: data.results,
                siguientePag: data.page + 1,
                haciendoFetch: false
            }))
            .catch(error => console.log(error));
    }


    showMoreCharacters() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${this.state.info.key}&language=es=${this.state.siguientePag}`)
            .then(response => response.json())
            .then(data => this.setState({
                data: this.state.data.concat(data.results),
                siguientePag: data.page + 1,
                haciendoFetch: false,
            }))
            .catch(error => console.log(error));
    }

    render() {
        return (


            /*   this.state.haciendoFetch === true ?

             <img src={loadingimg} alt="Espere a que cargue la página" /> 

                : */

                <React.Fragment>

                    <div>

                        <div className="allMoviesH1"> <h1> Todas las peliculas </h1> </div>

                        <section className='allMoviesContainer'>

                            {this.state.data.map((data, id) => <verTodasPelis data={data} key={data + '_' + id} />)}


                        </section>

                        <div className="buttonVerMasAllMovies-container"> <button onClick={() => this.showMoreCharacters()} className="buttonVerMasAllMovies"> Ver más </button> </div>

                    </div>
                </React.Fragment>



        )
    }
}


export default todasPelis;