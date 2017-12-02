import React from 'react'

import {
    Col,    
    Label,
    Input,
    FormGroup
}from 'reactstrap'


const Info = () =>(
        <FormGroup row >
        <Col xs={2}/>
	<Label for="name" xs={2}>活动信息*</Label>
        <Col xs={8}>
	<Label xs={3} check><Input type="radio" name="actinfo"/>参与活动</Label>
	<Label xs={3} check><Input type="radio" name="actinfo"/>不参与活动</Label>	
	</Col>
	<Col xs={2}/>
        </FormGroup>
)

export default Info
