import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { Route, Switch } from 'react-router-dom';
import todasPelis from "./screens/todasPelis/todasPelis";
import todasSeries from "./screens/todasSeries/todasSeries"
import NotFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <React.Fragment>

      <Header />
      <div>

        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/movie/id/:id' component={MovieDetail} />
          <Route path='/todasPelis' component={todasPelis} />
          <Route path='/todasSeries' component={todasSeries} />
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
