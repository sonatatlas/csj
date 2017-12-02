import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap'

import Type from './type'
import Name from './name'
import Ilabel from './ilabel'
import Rank from './rank'
import Detail from './detail'

const Intro = ({csctgr})=>(
	<Card>
	<CardHeader>选择类目</CardHeader>
	<CardBody>
	<Type p={csctgr.type}/>
	<hr className="hr"/>
	<Name />	
	<hr className="hr"/>
	<Ilabel />
	<hr className="hr"/>
	<Rank p={csctgr.rank}/>
	<hr className="hr" />
	<Detail />	
	</CardBody>
	</Card>
)


export default Intro
