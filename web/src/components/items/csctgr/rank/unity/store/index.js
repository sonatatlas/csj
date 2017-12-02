import React from 'react'
import {
    Col,
    Label,
    Input,
    FormGroup,    
} from 'reactstrap'

const Store = () =>(
	<FormGroup row>
	<Col xs={2} />
	<Col xs={2}><Label>库存</Label></Col>
	<Col xs={6}><Input name="库存" /></Col>
	<Col xs={2}/>
	</FormGroup>
)

export default Store
