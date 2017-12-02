import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const MyRouter = ({Containers})=>(
        <Router>
	<div style={{marginTop:"8vh"}}>
        <Route exact path="/" component={Containers.Home}/>
        <Route path="/intro" component={Containers.Intro}/>
        <Route path="/items" component={Containers.Items}/>	
	</div>
        </Router>
)

export default MyRouter