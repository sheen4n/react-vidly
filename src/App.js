import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Provider as MoviesProvider } from './context/MoviesContext';
import { Provider as AuthProvider } from './context/AuthContext';

import ProtectedRoute from './components/common/protectedRoute';

import NavBar from './components/navBar';
import Movies from './components/movies';
import Rentals from './components/rentals';
import Customers from './components/customers';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import NotFound from './components/notFound';
import Logout from './components/logout';
import Profile from './components/profile';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <MoviesProvider>
        <ToastContainer />
        <NavBar />

        <main role="main" className="container">
          <Switch>
            <ProtectedRoute path="/movies/:movieId" render={(props) => <MovieForm {...props} hello="hello" />} />
            <Route path="/movies" render={(props) => <Movies {...props} />} />
            <Route path="/login" render={(props) => <LoginForm {...props} />} />
            <Route path="/register" render={(props) => <RegisterForm {...props} />} />
            <Route path="/rentals" render={() => <Rentals />} />
            <Route path="/customers" render={() => <Customers />} />
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/logout" render={() => <Logout />} />
            <Route path="/not-found" render={NotFound} />
            <Redirect exact from="/react-vidly" to="/movies" />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </MoviesProvider>
    </AuthProvider>
  );
};
export default App;
