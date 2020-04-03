import createDataContext from './createDataContext';
import jwtDecode from 'jwt-decode';
import { setHttpJwt } from '../services/httpService';

const initialState = { jwt: '' };

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'set_jwt':
      setHttpJwt(payload);
      return { jwt: payload, user: jwtDecode(payload) };
    case 'logout':
      setHttpJwt('');
      return initialState;
    default:
      return state;
  }
};

const setJwt = dispatch => jwt => dispatch({ type: 'set_jwt', payload: jwt });

const logout = dispatch => () => dispatch({ type: 'logout' });

const loadStorage = () => {
  const savedData = JSON.parse(window.localStorage.getItem('token'));
  savedData && setHttpJwt(savedData.jwt);
  return savedData || initialState;
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    setJwt,
    logout
  },
  loadStorage(),
  'token'
);
