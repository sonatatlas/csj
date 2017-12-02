import React from 'react'

import {
    Col,    
    Label,
    Input,
    FormGroup
}from 'reactstrap'


const Limit = () =>(
        <FormGroup row className="mt-5" >
        <Col xs={2}/>
	<Label for="name" xs={2}>商品限购</Label>
        <Col xs={6}>
	<Label xs={3}><Input type="radio" name="limit"/>限购</Label>
	<Label xs={3}><Input type="radio" name="limit"/>不限购</Label>	
	</Col>
	<Col xs={2}/>
        </FormGroup>
)

export default Limit
