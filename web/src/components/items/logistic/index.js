import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap'

import Info from './info'

const Intro = ()=>(
	<Card className="mt-3">
	<CardHeader>物流信息</CardHeader>
	<CardBody>
	<Info />	
	</CardBody>
	</Card>
)


export default Intro
