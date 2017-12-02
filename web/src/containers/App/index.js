import React, { Component } from 'react';

import Navbar from '../navbar'

//components
import Router from '../../components/router'

//containers
import Home from '../home'
import Intro from '../intro'
import Items from '../items'

const Containers={Home,Items,Intro}

//containers will try to dispatch state&&props to actions

class NavBar extends Component {
    render() {
	return (
		<div>
		<Navbar />
		<Router Containers={Containers}/>
		</div>
	);
    }
}

export default NavBar
