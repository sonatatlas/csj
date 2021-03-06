import React from 'react'
import {
    Col,
    Label,
    Input,
    FormGroup
}from 'reactstrap'

const Stime = ()=>(
        <FormGroup row >
	<Col xs={2}/>
        <Label xs={2}>上架时间</Label>
        <Col xs={6}>
        <Label xs={12}><Input type="radio" name="stime"/>立即上架(上架后商品不可修改)</Label>
        <Label xs={12}><Input type="radio" name="stime"/>放入仓库中</Label>
        <Label xs={12}><Input type="radio" name="stime"/>设置商品上架时间</Label>	
        </Col>
        <Col xs={2}/>
        </FormGroup>
)

export default Stime
