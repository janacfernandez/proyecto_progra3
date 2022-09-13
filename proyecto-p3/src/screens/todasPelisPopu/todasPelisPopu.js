import React, { Component } from "react";
import VerTodasPelisPopu from "../../components/VerTodasPelisPopu/VerTodasPelisPopu";
import './todasPelis.css';
import Form from '../../components/Form/Form';
import loadingimg from "../../loadingimg.gif";

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
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.state.key)
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
            data2: pelisFiltradas,
        })
    }

    render() {
        return (

            <React.Fragment>

                <div className='arriba-todas'>
                    <Form filtrarPelis={(Filtro) => this.filtrarPelis(Filtro)} />
                </div>

                {this.state.loading === true ?

                    <img src={loadingimg} alt="Espere a que cargue la página" />

                    :

                    <div>

                        <div className="todasPelisH1"> <h1> Todas las peliculas populares </h1> </div>

                        <section className='todasPelisContainer'>

                            {this.state.data.map((data, id) => <VerTodasPelisPopu data={data} key={data + '_' + id} />)}


                        </section>

                        <div className="buttonVerMasTodasPelis-container"> <button onClick={() => this.showMoreCharacters()} className="buttonVerMasTodasPelis"> Ver más </button> </div>

                    </div>}
            </React.Fragment>



        )
    }
}


export default TodasPelisPopu;