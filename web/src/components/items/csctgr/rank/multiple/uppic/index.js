import React from 'react'
import {
    Col,
    Input,
    Label,
    FormGroup    
}from 'reactstrap'


const Uppic = () =>(
	<FormGroup row>
	<Col xs={2} />
	<Col xs={2}><Label >商品图片</Label></Col>
	<Col xs={6}><Input name="uppic" type="file" value="商品图片"/></Col>
	</FormGroup>
)

export default Uppic
