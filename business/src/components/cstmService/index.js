import React from 'react';
import { View, Text } from 'react-native';

import Tabs from './tabs'
import Search from './search'
import Ctn from './ctn'

import {
    TouchableWithoutFeedback,
    StatusBar,Alert
}from 'react-native'

import s from './style.js'

const CstmService = ({p}) => (
	<TouchableWithoutFeedback onPress={p.dsms}><View style={s.ctnr}>
	<StatusBar barStyle="light-content"/>
	<Tabs />
	<Search />
	<Ctn />
	</View></TouchableWithoutFeedback>
);

export default CstmService
