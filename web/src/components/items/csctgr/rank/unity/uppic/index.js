import React from 'react'
import {
    Col,
    Label,
    Input,
    FormGroup,    
}from 'reactstrap'

const Uppic = () =>(
	<FormGroup row>
	<Col xs={2} />
        <Col xs={2}><Label for="uppic">商品图片</Label></Col>
        <Col><Input type="file" name="uppic"/></Col>
	</FormGroup>
)

export default Uppic
