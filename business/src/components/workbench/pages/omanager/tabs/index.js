
//tabs.js

import React from 'react';
import {
    View, Text,
    TouchableOpacity
} from 'react-native';

import s from './style'

const tw = (omanagerTab,tab)=>omanagerTab===tab?[s.bfwTap,s.bfw]:s.bfw
const bf = (omanagerTab,tab)=>omanagerTab===tab?[s.bf,s.bfTap]:s.bf


const Tabs = ({omanagerTab,switchOmanagerTab}) => (
	<View style={s.ctnr}>
	<View><TouchableOpacity onPress={()=>switchOmanagerTab(1)} style={s.btn}>
	<View style={tw(omanagerTab,1)}><Text style={bf(omanagerTab,1)}>待发货</Text></View>
	</TouchableOpacity></View>
	<View><TouchableOpacity onPress={()=>switchOmanagerTab(2)} style={s.btn}>
	<View style={tw(omanagerTab,2)}><Text style={bf(omanagerTab,2)}>待支付</Text></View>
	</TouchableOpacity></View>
	<View><TouchableOpacity onPress={()=>switchOmanagerTab(3)} style={s.btn}>
	<View style={tw(omanagerTab,3)}><Text style={bf(omanagerTab,3)}>已发货</Text></View>
	</TouchableOpacity></View>		
	</View>
);

export default Tabs
