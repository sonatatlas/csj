import React from 'react'
import {
    Container,Jumbotron
} from 'reactstrap'
import "./index.css"


const HomeModel = ()=>(
	<div >
	<div className="bg"><div className='title'>
	<h1>0元小程序店铺，就这么简单</h1>
	<h5>草市集，精品的电商平台</h5>	
	</div></div>
	<div className="jbt-foot">
	<div className="space-font">好处一</div>
	<div className="space-font">好处二</div>
	<div className="space-font">好处三</div>
	<div className="space-font">好处四</div>		
	<div className="sf-last">好处五</div></div>
	<div className="ft-intro">迄今为止，草市集已经帮助了10万个店主创立了自己的小程序店铺</div>
	</div>
)


export default HomeModel
