import React from 'react'
import {
    Col,
    Label,
    Input,
    FormGroup,    
} from 'reactstrap'

const Sprice = () =>(
	<FormGroup row>
	<Col xs={2} />
	<Col xs={2}><Label>销售价格</Label></Col>
	<Col xs={6}><Input name="sprice"/></Col>
	<Col xs={2}/>
	</FormGroup>
)

export default Sprice
