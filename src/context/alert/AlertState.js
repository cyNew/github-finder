import React, { useReducer } from 'react';
import { REMOVE_ALERT, SET_ALERT } from '../types';

import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

const AlertState = (props) => {
  const initialState = undefined;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 3000);
  };

  // Remove Alert
  const removeAlert = () => dispatch();

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
        removeAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
