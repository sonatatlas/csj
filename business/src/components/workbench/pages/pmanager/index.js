import React from 'react';
import { View, Text } from 'react-native';

import {
    TouchableWithoutFeedback,
    StatusBar,Alert
}from 'react-native'

import Tabs  from './tabs'
import Ctn from './ctn'

import s from './style.js'


const Pmanager = ({dsms,pmanagerTab,switchPmanagerTab}) => (
	<TouchableWithoutFeedback onPress={dsms}><View style={s.ctnr}>
	<StatusBar barStyle="dark-content"/>
	<Tabs pmanagerTab={pmanagerTab} switchPmanagerTab={switchPmanagerTab} />
	<Ctn pmanagerTab={pmanagerTab}/>
	</View></TouchableWithoutFeedback>
);

export default Pmanager
