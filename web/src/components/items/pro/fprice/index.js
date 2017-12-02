import React from 'react'
import {
    Col,
    Label,
    Input,
    FormGroup,
    FormText
}from 'reactstrap'

const Vprice = ()=>(
        <FormGroup row >
        <Col xs={2}/>
        <Label for="name" xs={2}>库存计算方式</Label>
        <Col xs={6}>
        <Label xs={4}><Input type="radio" name="limit"/>下单减库存</Label>
        <Label xs={4}><Input type="radio" name="limit"/>支付减库存</Label>
	<FormText>[支付减库存]存在超卖风险,建议秒杀等活动商品使用[下单减库存]方式</FormText>
        </Col>
        <Col xs={2}/>
        </FormGroup>
)

export default Vprice
