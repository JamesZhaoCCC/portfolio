import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import reducers from './reducers';

import './index.css';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';

const preloadedState = window.__PRELOADED_STATE__;

const store = configureStore({
    middleware: [thunk],
    reducer: reducers,
    preloadedState,
});

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

const theme = createTheme();

root.render(
    <ThemeProvider theme={theme}>
        <Provider store = {store} serverState = {preloadedState}>
            <App />
        </Provider>
    </ThemeProvider>
);

