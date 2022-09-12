import './App.css';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { Route, Switch } from 'react-router-dom';
import todasPelisPopu from "./screens/todasPelisPopu/todasPelisPopu";
import todasPelisCarte from "./screens/todasPelisCarte/todasPelisCarte"
import FavouriteMovies from './screens/FavouriteMovies/FavouriteMovies';
import NotFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <React.Fragment>

      <Header />
      <div>

        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/movie/id/:id' component={MovieDetail} />
          <Route path='/todasPelisPopu' component={todasPelisPopu} />
          <Route path='/todasPelisCarte' component={todasPelisCarte} />
          <Route path='/movie/FavouriteMovies' component={FavouriteMovies} />
          <Route path='' component={NotFound} />
          <Route />
          <Route />
        </Switch>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
