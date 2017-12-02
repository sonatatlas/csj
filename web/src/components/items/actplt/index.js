import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap'

import Info from './info'
import Actinfo from './actinfo'

const Actplt = ()=>(
	<Card className="mt-3">
	<CardHeader>活动版块</CardHeader>
	<CardBody>
	<Info />
	<Actinfo />
	</CardBody>
	</Card>
)


export default Actplt
