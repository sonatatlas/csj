//App

import React from 'react';
import Csj from './src'
import reducer from './src/reducers'
import {createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default class App extends React.Component {
    render() {
      return (
	      <Provider store={store}>
	      <Csj />
	      </Provider>
      );
  }
}


