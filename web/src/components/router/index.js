import React from 'react'
import {
    BrowserRouter as Router, Route, Redirect, withRouter
} from 'react-router-dom'


const MyRouter = ({Containers})=>(
        <Router>
	<div >
        <Route exact path="/" component={Containers.Home}/>
        <Route path="/home" component={Containers.Home}/>	
	</div>
        </Router>
)

export default MyRouter
