import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider as MoviesProvider } from './context/MoviesContext';

import NavBar from './components/navBar';

import Movies from './components/movies';
import Rentals from './components/rentals';
import Customers from './components/customers';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import Register from './components/register';
import NotFound from './components/notFound';
import './App.css';

function App() {
  return (
    <MoviesProvider>
      <NavBar />

      <main role='main' className='container'>
        <Switch>
          <Route path='/movies/:movieId' render={props => <MovieForm {...props} />} />
          <Route path='/movies' render={() => <Movies />} />
          <Route path='/login' render={() => <LoginForm />} />
          <Route path='/register' render={() => <Register />} />
          <Route path='/rentals' render={() => <Rentals />} />
          <Route path='/customers' render={() => <Customers />} />
          <Route path='/not-found' render={NotFound} />
          <Redirect exact from='/' to='/movies' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </MoviesProvider>
  );
}

export default App;
