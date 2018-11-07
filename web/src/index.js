import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(reducer)

render(
	<Provider store={store}>
	<App />
	</Provider>,
    document.getElementById('root')
);
registerServiceWorker();
