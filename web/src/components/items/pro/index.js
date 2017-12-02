import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap'


import Limit from './limit'
import Vprice from './vprice'
import Fprice from './fprice'
import Stime from './stime'

const Pro = ()=>(
	<Card className="mt-3">
	<CardHeader>其他信息</CardHeader>
	<CardBody>
	<Limit />
	<hr className="hr" />
	<Vprice />
	<hr className="hr" />
	<Fprice />
	<hr className="hr"/>
	<Stime />
	</CardBody>
	</Card>
)


export default Pro
