import React from 'react'
import {
    Form
} from 'reactstrap'
import "./index.css"

import Csctgr from './csctgr'
import Logistic from './logistic'
import Actplt from './actplt'
import Pro from './pro'


const Items = ({csctgr})=>(
	<div>
	<Form className="mform">
	<Csctgr csctgr={csctgr}/>
	<Logistic />
	<Actplt />
	<Pro />
	</Form>
	<div className="footer"/>	
	</div>
)


export default Items
