import React from 'react'
import {
    Col,
    Label,
    Input,
    FormGroup,    
} from 'reactstrap'

const Idcode = () =>(
	<FormGroup row >
	<Col xs={2} />
	<Col xs={2}><Label>商家编码</Label></Col>
	<Col xs={6}><Input /></Col>
	<Col xs={2}/>
	</FormGroup>
)

export default Idcode
