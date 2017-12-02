import React from 'react'
import {
    Col,
    Label,
    Input,
    FormGroup
}from 'reactstrap'

const Vprice = ()=>(
        <FormGroup row >
        <Col xs={2}/>
        <Label for="name" xs={2}>会员优惠</Label>
        <Col xs={6}>
        <Label xs={3}><Input type="checkbox" name="limit"/>会员价格</Label>
        </Col>
        <Col xs={2}/>
        </FormGroup>
)

export default Vprice
