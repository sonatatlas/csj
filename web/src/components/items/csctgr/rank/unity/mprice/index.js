import React from 'react'
import {
    Col,
    Label,
    Input,
    FormGroup,    
} from 'reactstrap'

const Mprice = () =>(
	<FormGroup row>
	<Col xs={2} />
	<Col xs={2}><Label>市场价格</Label></Col>
	<Col xs={6}><Input name="mprice"/></Col>
	<Col xs={2}/>
	</FormGroup>
)

export default Mprice
