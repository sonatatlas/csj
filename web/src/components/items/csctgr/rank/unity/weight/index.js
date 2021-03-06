import React from 'react'
import {
    Col,
    Label,
    Input,
    FormGroup,
    InputGroup,
    InputGroupAddon,    
} from 'reactstrap'

const Idcode = () =>(
	<FormGroup row>
	<Col xs={2} />
	<Col xs={2}><Label>重量</Label></Col>
	<Col xs={6}>
	<InputGroup>
        <Input name="weight" />
        <InputGroupAddon>kg</InputGroupAddon>
	</InputGroup>
	</Col>
	<Col xs={2}/>
	</FormGroup>
)

export default Idcode
