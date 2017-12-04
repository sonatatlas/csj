
//tabs.js

import React from 'react';
import {
    View, Text,
    TouchableOpacity
} from 'react-native';

import s from './style'

const tw = (isLeft,left)=>isLeft?
      left?[s.bfwTap,s.bfw]:s.bfw:
      left?s.bfw:[s.bfwTap,s.bfw]

const bf = (isLeft,left)=>isLeft?
      left?[s.bf,s.bfTap]:s.bf:
      left?s.bf:[s.bf,s.bfTap]


const Tabs = ({isLeft,switchAccessTab}) => (
	<View style={s.ctnr}>
	<View><TouchableOpacity onPress={()=>switchAccessTab(true)} style={s.btn}>
	<View style={tw(isLeft,true)}><Text style={bf(isLeft,true)}>已接入(0)</Text></View>
	</TouchableOpacity></View>
	<View><TouchableOpacity onPress={()=>switchAccessTab(false)} style={s.btn}>
	<View style={tw(isLeft,false)}><Text style={bf(isLeft,false)}>等待接入(0)</Text></View>
	</TouchableOpacity></View>	
	</View>
);

export default Tabs
