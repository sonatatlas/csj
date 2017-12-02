
/*
 * containers/type
 *
 */

import React from 'react'
//import PropTypes from 'prop-types'
import {
    FormGroup,
    Col,
    Input,
    Label,
    FormText,    
}from 'reactstrap'


const Type=({p})=>(
        <FormGroup row style={{marginTop:"10vh"}}>
	<Col xs={2} />
	
	<Col xs={2}><Label>商品类型*</Label></Col>
	
	<Col xs={6}>
	<Col><Label check className="mr-5">
        <Input type="radio" name="type"
    defaultChecked
    onClick={p.normal}/>{' '}普通商品</Label>
        <Label check>
        <Input type="radio" name="type"
    onClick={p.aboard} />{' '}海外商品</Label>
	</Col>	
	<Col>
	<FormText className="mt-3">
	商品上架后不可修改，请谨慎选择。如需修改，请先将商品下架。</FormText>
	</Col>	
	</Col>
	
	<Col xs={2}/>
        </FormGroup>
)

Type.propTypes = {
   
}

export default Type
