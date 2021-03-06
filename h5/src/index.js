
//index.js

// react
import React from 'react';
import { render } from 'react-dom'
//redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
// material-ui
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// init
import App from './containers';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto'

import './index.css'

const theme = createMuiTheme();
let store = createStore(todoApp)

render(
	<Provider store={store}>
	<MuiThemeProvider theme={theme}>
	<App/>
	</MuiThemeProvider>
	</Provider>,
    document.getElementById('root')
);

registerServiceWorker();
