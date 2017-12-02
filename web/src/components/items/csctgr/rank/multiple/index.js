import React from 'react'
import {
    Row,
    Col,
    Card,
    Button,
    CardBody
}from 'reactstrap'

import Batch from './batch'
import Uppic from './uppic'


const Multiple = ()=>(
	<Col xs={12}>
	<Row xs={12} className="mt-3">
	<Col xs={4}/>
	<Col xs={6}><Card className="bg-light">
	<CardBody>
	<Button xs={12} color="link"
    onClick={()=>{console.log('aa')}}
	>添加规格</Button>
	<Col xs={12} className="text-secondary">
	规格添加后请勿随意删除，删除后正在使用相应规格的商品在编辑时规格部分将受到影响</Col>
	</CardBody>
	</Card></Col>
	</Row>
	<hr className="hr" />	
	<Batch />
	<hr className="hr" />
	<Uppic />
	</Col>
)

export default Multiple
