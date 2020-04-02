import React, { useReducer, useEffect } from 'react';

export default (reducer, actions, initialState, localStorageName = '') => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      if (localStorageName) localStorage.setItem(localStorageName, JSON.stringify(state));
    }, [state]);

    const boundedActions = Object.keys(actions).reduce((result, key) => {
      return { ...result, [key]: actions[key](dispatch) };
    }, {});

    return <Context.Provider value={{ state, ...boundedActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
