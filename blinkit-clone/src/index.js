import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from "./App"
import {Provider} from 'react-redux';
import { store } from './Redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

// console.log(store.getState().AppReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Provider store = {store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </ChakraProvider>
);

