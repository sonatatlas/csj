import React from 'react'
import {
    Col,
    Row,
    Input,
    Label,
    FormGroup    
}from 'reactstrap'

const Batch = ()=>(
	<FormGroup row>
	<Col xs={2}/>
	<Label xs={2} >价格&库存</Label>
	<Col xs={7}>
	<Row>
	<Col xs={2}><Input  name="ilabel" /></Col>
	<Col xs={2}><Input  name="sprice" /></Col>
	<Col xs={2}><Input  name="mprice" /></Col>
	<Col xs={2}><Input  name="store" /></Col>
	<Col xs={2}><Input  name="weight" /></Col>
	<Col xs={2}><Input  name="bluk" /></Col>
	</Row></Col>
	</FormGroup>
)

export default Batch
