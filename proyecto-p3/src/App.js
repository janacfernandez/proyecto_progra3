import './App.css';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { Route, Switch } from 'react-router-dom';
import TodasPelisPopu from "./screens/TodasPelisPopu/TodasPelisPopu";
import TodasPelisCarte from "./screens/TodasPelisCarte/TodasPelisCarte"
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
          <Route path='/TodasPelisPopu' component={TodasPelisPopu} />
          <Route path='/TodasPelisCarte' component={TodasPelisCarte} />
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
