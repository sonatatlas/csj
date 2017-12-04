import React from 'react';
import { View, Text } from 'react-native';

import {
    TouchableWithoutFeedback,
    StatusBar,Alert
}from 'react-native'

import Tabs  from './tabs'
import Ctn from './ctn'

import s from './style.js'


const Omanager = ({dsms,omanagerTab,switchOmanagerTab}) => (
	<TouchableWithoutFeedback onPress={dsms}><View style={s.ctnr}>
	<StatusBar barStyle="dark-content"/>
	<Tabs omanagerTab={omanagerTab} switchOmanagerTab={switchOmanagerTab} />
	<Ctn omanagerTab={omanagerTab}/>
	</View></TouchableWithoutFeedback>
);

export default Omanager
