import React from 'react';
import { View, Text } from 'react-native';


import {
    TouchableWithoutFeedback,
    StatusBar,Alert
}from 'react-native'

import s from './style.js'
import Tabs from './tabs'
import Ctn from './ctn'

const CstmService = ({ isLeft, switchAccessTab,navigation}) => (
	<View style={s.ctnr}>
	<StatusBar barStyle="light-content"/>
	<Tabs isLeft={isLeft} switchAccessTab={switchAccessTab}/>
	<Ctn isLeft={isLeft} navigation={navigation}/>
	</View>
);

export default CstmService
