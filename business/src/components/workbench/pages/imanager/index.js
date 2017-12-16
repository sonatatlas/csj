import React from 'react';
import { View, Text } from 'react-native';

import {
    TouchableWithoutFeedback,
    StatusBar,Alert
}from 'react-native'

import Tabs  from './tabs'
import Ctn from './ctn'

import s from './style.js'


const Imanager = ({imanagerTab,switchImanagerTab, navigation}) => (
	<View style={s.ctnr}>
	<StatusBar barStyle="dark-content"/>
	<Tabs imanagerTab={imanagerTab} switchImanagerTab={switchImanagerTab} />
	<Ctn imanagerTab={imanagerTab} navigation={ navigation }/>
	</View>
);

export default Imanager
