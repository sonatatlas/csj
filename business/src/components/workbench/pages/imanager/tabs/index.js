
//tabs.js

import React from 'react';
import {
    View, Text,
    TouchableOpacity
} from 'react-native';

import s from './style'

const tw = (imanagerTab,tab)=>imanagerTab===tab?[s.bfwTap,s.bfw]:s.bfw
const bf = (imanagerTab,tab)=>imanagerTab===tab?[s.bf,s.bfTap]:s.bf


const Tabs = ({imanagerTab,switchImanagerTab}) => (
	<View style={s.ctnr}>
	<View><TouchableOpacity onPress={()=>switchImanagerTab(1)} style={s.btn}>
	<View style={tw(imanagerTab,1)}><Text style={bf(imanagerTab,1)}>全部</Text></View>
	</TouchableOpacity></View>
	<View><TouchableOpacity onPress={()=>switchImanagerTab(2)} style={s.btn}>
	<View style={tw(imanagerTab,2)}><Text style={bf(imanagerTab,2)}>已上架</Text></View>
	</TouchableOpacity></View>
	<View><TouchableOpacity onPress={()=>switchImanagerTab(3)} style={s.btn}>
	<View style={tw(imanagerTab,3)}><Text style={bf(imanagerTab,3)}>已告罄</Text></View>
	</TouchableOpacity></View>
	<View><TouchableOpacity onPress={()=>switchImanagerTab(4)} style={s.btn}>
	<View style={tw(imanagerTab,4)}><Text style={bf(imanagerTab,4)}>仓库中</Text></View>
	</TouchableOpacity></View>			
	</View>
);

export default Tabs
