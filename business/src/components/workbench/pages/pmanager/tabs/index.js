
//tabs.js

import React from 'react';
import {
    View, Text,
    TouchableOpacity
} from 'react-native';

import s from './style'

const tw = (pmanagerTab,tab)=>pmanagerTab===tab?[s.bfwTap,s.bfw]:s.bfw
const bf = (pmanagerTab,tab)=>pmanagerTab===tab?[s.bf,s.bfTap]:s.bf


const Tabs = ({pmanagerTab,switchPmanagerTab}) => (
	<View style={s.ctnr}>
	<View><TouchableOpacity onPress={()=>switchPmanagerTab(1)} style={s.btn}>
	<View style={tw(pmanagerTab,1)}><Text style={bf(pmanagerTab,1)}>未处理</Text></View>
	</TouchableOpacity></View>
	<View><TouchableOpacity onPress={()=>switchPmanagerTab(2)} style={s.btn}>
	<View style={tw(pmanagerTab,2)}><Text style={bf(pmanagerTab,2)}>处理中</Text></View>
	</TouchableOpacity></View>
	<View><TouchableOpacity onPress={()=>switchPmanagerTab(3)} style={s.btn}>
	<View style={tw(pmanagerTab,3)}><Text style={bf(pmanagerTab,3)}>已处理</Text></View>
	</TouchableOpacity></View>		
	</View>
);

export default Tabs
