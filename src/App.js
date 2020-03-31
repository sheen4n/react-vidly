import React from 'react';
import './App.css';
import { Provider as MoviesProvider } from './context/MoviesContext';

import Movies from './components/movies';
import NavBar from './components/navBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Rentals from './components/rentals';
import Customers from './components/customers';
import MovieForm from './components/movieForm';
import NotFound from './components/notFound';

function App() {
  return (
    <MoviesProvider>
      <NavBar />

      <main role="main" className="container">
        <Switch>
          <Route path="/movies/:movieId" render={props => <MovieForm {...props} />} />
          <Route path="/movies" render={() => <Movies />} />
          <Route path="/rentals" render={() => <Rentals />} />
          <Route path="/customers" render={() => <Customers />} />
          <Route path="/not-found" render={NotFound} />
          <Redirect exact from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </MoviesProvider>
  );
}

export default App;
