
//tabs.js

import React from 'react';
import {
    View, Text,
    TouchableOpacity
} from 'react-native';

import s from './style'

const Tabs = () => (
	<View style={s.ctnr}>
	<View><TouchableOpacity style={s.btn}>
	<Text style={s.bf}>已接入(0)</Text>
	</TouchableOpacity></View>
	<View><TouchableOpacity style={s.btn}>
	<Text style={s.bf}>等待接入(0)</Text>
	</TouchableOpacity></View>	
	</View>
);

export default Tabs
