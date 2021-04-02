import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import "./index.css";

import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import {fetchDispensaryByName} from './util/dispensary_api_util'

window.

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    store = configureStore(preloadedState);
    
    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/';
    }
  } else {
    store = configureStore({});
  }
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  window.fetchDispensaryByName = fetchDispensaryByName

  // FUN STUFF

  // let policecar = document.getElementById('#policecar');
  // let move = 10; 

  // // window.addEventListener('load', () => {
  // //   policecar.style.position = 'absolute';
  // //   policecar.style.left = 0;
  // //   policecar.style.top = 0;
  // //   policecar.style.zindex = 1000;
  // // });

  // policecar.addEventListener('keyDown', (e) => {
  //   switch (e.key) {
  //     case 'ArrowUp':
  //       policecar.style.top = `${parseInt(policecar.style.top) - move}px`;
  //       break;
  //     case 'ArrowDown':
  //       policecar.style.top = `${parseInt(policecar.style.top) + move}px`;
  //       break;
  //     case 'ArrowLeft':
  //       policecar.style.left = `${parseInt(policecar.style.left) - move}px`;
  //       break;
  //     case 'ArrowRight':
  //       policecar.style.left = `${parseInt(policecar.style.left) + move}px`;
  //       break;
  //   }
  // });

});