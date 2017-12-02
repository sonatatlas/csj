import React from 'react'

import {
    Col,
    Label,
    Input,
    Button,
    FormGroup,
    InputGroup,
    InputGroupButton
}from 'reactstrap'


const Fee = () =>(
	<div>
        <FormGroup row >
        <Col xs={2}/>
	<Label for="logistic" xs={2}>运费设置*</Label>	
        <Col xs={6}>
	<InputGroup>
        <Input type="select" name="logistic" id="exampleSelect">
        <option>方案一</option>
        <option>方案二</option>
        </Input>
        <InputGroupButton>
	<Button >⊙</Button>
	<Button >+</Button>
	</InputGroupButton>	
	</InputGroup>
	</Col>
	<Col xs={2}/>
        </FormGroup>
	</div>
)

export default Fee
