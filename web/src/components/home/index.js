import React from 'react'
import {
    Col,Button
} from 'reactstrap'
import "./index.css"

import Intro from './intro'

const HomeModel = ({qrcode,shopcode})=>(
	<div>
	
	<div className="bg"><div className='title' >
	<h1>0元小程序店铺，就这么简单</h1>
	<h5 className="font-weight-light">草市集，精品的电商平台</h5>
	<div className="btn-wrap">
	<Button color="primary" onClick={qrcode}>我要开店</Button>
	<Button onClick={shopcode} style={{backgroundColor:'transparent'}}>商家入驻</Button>	
	</div>
	</div>
	<div className="jbt-foot">
	<div className="space-font">小程序店铺</div>
	<div className="space-font">营销服务</div>
	<div className="space-font">货源服务</div>
	<div className="space-font">配送服务</div>
	<div className="space-font">商家版APP</div>
	<div className="sf-last">社交电商</div>
	</div>
	</div>	
	
	<Col className="ft-intro">迄今为止，草市集已经帮助了10万个店主创立了自己的小程序店铺</Col>
	<Intro />
	</div>
)


export default HomeModel
