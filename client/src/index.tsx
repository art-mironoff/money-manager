import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';
import router from './router';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

const history = createHistory();

const store = configureStore(history);

const theme = {
  expenseColor: '#d2d200',
  incomeColor: 'green'
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>{router(history)}</Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
