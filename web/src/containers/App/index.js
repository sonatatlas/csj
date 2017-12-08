import React, { Component } from 'react';
import Navbar from '../navbar';

//components
import RouterComponent from '../../components/router'

//containers
import Home from '../home'

const Containers={Home}

//containers will try to dispatch state&&props to actions

class App extends Component {
    render() {
	return (
		<div>
		<Navbar />
		<RouterComponent Containers={Containers}/>
		</div>
	);
    }
}

export default App
