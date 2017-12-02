import React from 'react'

import {
    Col,    
    Label,
    Input,
    FormGroup
}from 'reactstrap'

import Unity from './unity'
import Multiple from './multiple'

const Rank = ({p}) =>(
        <FormGroup row>
	<Col xs={2} />
        <Col xs={2}><Label>商品规格*</Label></Col>
        <Col xs={6}>	
        <Label check className="mr-5">
        <Input type="radio" name="rank"
    defaultChecked onClick = {p.unity}
	/>{' '}统一规格</Label>
        <Label check>
        <Input type="radio" name="rank"
    onClick = {p.multiple}
	/>{' '}多规格</Label>
        </Col>
	{
	    p.itemRank==="统一规格"?
		<Unity />:
		<Multiple />
	}
        <Col xs={2}/>
        </FormGroup>
)

export default Rank
