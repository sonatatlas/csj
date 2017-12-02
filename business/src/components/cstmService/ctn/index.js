
//tabs.js

import React from 'react';
import {
    View, Text,
    TouchableOpacity
} from 'react-native';

import s from './style'

const Tabs = () => (
	<View style={s.ctnr}>
	<Text style={s.sf}>没有已接入的客人了，快去接待一个吧～</Text>
	<TouchableOpacity style={s.btn}>
	<Text style={s.sf}>接待客人去咯</Text>
	</TouchableOpacity>
	</View>
);

export default Tabs
