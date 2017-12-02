import React from 'react'

import {
    Col,    
    Label,
    Input,
    FormGroup
}from 'reactstrap'


const Name = () =>(
        <FormGroup row >
        <Col xs={2}/>
	<Label for="name" xs={2}>商品名称*</Label>
        <Col xs={6}><Input type="text" name="name"/></Col>
	<Col xs={2}/>
        </FormGroup>
)

export default Name
