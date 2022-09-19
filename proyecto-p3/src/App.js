import './App.css';
import Principal from './screens/Principal/Principal';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import MovieDetail from './screens/MovieDetail/MovieDetail';
import { Route, Switch } from 'react-router-dom';
import TodasPelisPopu from "./screens/TodasPelisPopu/TodasPelisPopu";
import TodasPelisCarte from "./screens/TodasPelisCarte/TodasPelisCarte";
import FavouriteMovies from './screens/FavouriteMovies/FavouriteMovies';
import NotFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <React.Fragment>

      <Header />

      <div>
        <Switch>
          <Route path='/' exact={true} component={Principal} />
          <Route path='/movie/id/:id' component={MovieDetail} />
          <Route path='/TodasPelisPopu' exact={true} component={TodasPelisPopu} />
          <Route path='/TodasPelisCarte' exact={true} component={TodasPelisCarte} />
          <Route path='/movie/FavouriteMovies' exact={true} component={FavouriteMovies} />
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
