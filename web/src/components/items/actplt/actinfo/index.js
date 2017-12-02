import React from 'react'
import {
    Col,
    Row,
    Label,
    Input,
    FormGroup
}from 'reactstrap'


const Actinfo = ()=>(

        <FormGroup className="mt-3">
	
        <FormGroup row >
        <Col xs={2}/>
        <Label for="name" xs={2}>拼团购</Label>
        </FormGroup>
	
	<Row xs={12} className="mt-3"><Col xs={3}/>	
	<Label>成团人数</Label>
	<Col xs={2} ><Input /></Col>
	<Label>拼价格</Label>
	<Col xs={2} ><Input /></Col>
	<Label>开团时间</Label>
	<Col xs={2}><Input /></Col>	
	</Row>

	<Row xs={12} className="mt-3"><Col xs={3}/>

	<Label>优惠价格</Label>
	<Col xs={2} ><Input /></Col>
	<Label>时间</Label>
	<Col xs={2} ><Input /></Col>
	<Label>——</Label>
	<Col xs={2}><Input /></Col>

	</Row>
	</FormGroup>
)

export default Actinfo
