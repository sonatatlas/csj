//App

import React from 'react';
import Csj from './src'
import reducer from './src/reducers'
import {createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

import { AsyncStorage } from 'react-native'
import {login} from './src/actions/login'

const middleware = [ thunk, promise() ]

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

AsyncStorage.getItem('account',(err,value)=>{
    if(value){
	store.dispatch(login({account:value}))
    }
})

export default class App extends React.Component {
    render() {
	return (
		<Provider store={store}>
		<Csj />
		</Provider>
	);
    }
}


