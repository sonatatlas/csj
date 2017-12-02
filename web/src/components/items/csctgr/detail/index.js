
import React from 'react'
import {
    FormGroup,
    Col,
    Input,
    Label,
}from 'reactstrap'


const Detail=()=>(
        <FormGroup row>
	<Col xs={2} />
	
	<Col xs={2}><Label>商品详情</Label></Col>
	
	<Col xs={6}>
        <Input type="textarea" name="label" />{' '}
	</Col>	

	
	<Col xs={2}/>
        </FormGroup>
)

export default Detail
