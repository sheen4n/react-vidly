import createDataContext from './createDataContext';
import jwtDecode from 'jwt-decode';
import { login } from '../services/authService';
import { setHttpJwt } from '../services/httpService';

const initialState = { jwt: '' };

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'set_jwt':
      return payload;
    case 'logout':
      return initialState;
    default:
      return state;
  }
};

const loginUser = (dispatch) => async (credentials) => {
  try {
    const { data: jwt } = await login(credentials.email, credentials.password);
    setHttpJwt(jwt);
    dispatch({ type: 'set_jwt', payload: { jwt, user: jwtDecode(jwt) } });
  } catch (ex) {
    if (ex.response && ex.response.status === 400) {
      console.log(ex.response.status);
      throw new Error(ex.response.data);
    }
  }
};

const logout = (dispatch) => () => {
  setHttpJwt('');
  dispatch({ type: 'logout' });
};

const loadStorage = () => {
  const savedData = JSON.parse(window.localStorage.getItem('token'));
  savedData && setHttpJwt(savedData.jwt);
  return savedData || initialState;
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    loginUser,
    logout,
  },
  loadStorage(),
  'token'
);
