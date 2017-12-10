import React from 'react'
import {
    Col
}from 'reactstrap'

import './index.css'


const Intro = ()=>(
    <div id="intro" className="ctn">
	<Col className="n1">
	<div style={{fontSize:'2rem'}}>国内领先的小微零售服务商</div>
	<div className="mt-1" style={{fontSize:'1.2rem'}}>提供小微零售、新零售综合解决方案</div>
	</Col>
	
	<Col className="n2">
	<img alt="no" className="p mr-5" src={require('./public/microprogram.png')}/ >
	<div className="ml-5"><div style={{fontSize:'2rem'}}>小程序店铺</div>
	<div className="mt-1" style={{fontSize:'1.2rem'}}>5分钟，免费拥有自己的小程序店铺，让流量入口，您的店铺更bigger</div></div>
	</Col>

	<Col className="n2 bg-grey">
	<div className="mr-5"><div style={{fontSize:'2rem'}}>营销服务</div>
	<div className="mt-1" style={{fontSize:'1.2rem'}}>优惠券、拼团购、节日活动，多种营销帮您玩转店铺</div></div>
	<img alt="nil" className="ml-5" style={{height:'6rem'}} src={require('./public/sale.png')}/ >	
	</Col>

	<Col className="n2">
	<img alt="nil" className="p mr-5" src={require('./public/around.png')}/ >
	<div className="ml-5"><div style={{fontSize:'2rem'}}>货源服务</div>
	<div className="mt-1" style={{fontSize:'1.2rem'}}>
	从<span className="if">近千个</span>供货商中精选<span className="if">200</span>个优质供应商，草市集不仅仅把握质量</div></div>
	</Col>
	
	<Col className="n2 bg-grey">
	<div className="mr-5"><div style={{fontSize:'2rem'}}>配送服务</div>
	<div className="mt-1" style={{fontSize:'1.2rem'}}>草市集联手
	<span className="if">蜂鸟</span>团队，为您的客户提供完整的消费服务</div></div>
	<img alt="nil" className="ml-5" style={{height:'10rem'}} src={require('./public/express.png')}/ >	
	</Col>
	
	<Col className="n2">
	<img alt="nil" className="p mr-5" src={require('./public/app.png')}/ >
	<div className="ml-5"><div style={{fontSize:'2rem'}}>商家版APP</div>
	<div className="mt-1" style={{fontSize:'1.2rem'}}>客服、订单、店铺、营业... 店铺信息随手掌握</div></div>
	</Col>

	<Col className="n2 bg-grey">
	<div className="mr-5"><div style={{fontSize:'2rem'}}>社交电商</div>
	<div className="mt-1" style={{fontSize:'1.2rem'}}>加入附近的店铺，让您的店铺覆盖方圆
	<span className="if">5公里用户</span></div></div>
	<img alt="nil" className="ml-5" style={{height:'10rem'}} src={require('./public/circle.png')}/ >	
	</Col>
    
	</div>
)

export default Intro
