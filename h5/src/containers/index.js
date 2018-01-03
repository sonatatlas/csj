
//router.js

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import Home from './home'
import RedPacket from './redpacket'
import Special from './special'
import Renew from './renew'
import Certificate from './certificate'
import TradeRecord from './traderecord'


const AppRouter = () => (
	<Router>
	<div style={{overflow:'hidden'}}>
	<Route exact path="/" component={ Home } />
	<Route exact path="/redpacket" component={ RedPacket } />
	<Route exact path="/renew" component={ Renew } />		
	<Route exact path="/special" component={ Special } />
	<Route exact path="/certificate" component={ Certificate } />
	<Route exact path="/traderecord" component={ TradeRecord } />	
	</div>
	</Router>
)
export default AppRouter
