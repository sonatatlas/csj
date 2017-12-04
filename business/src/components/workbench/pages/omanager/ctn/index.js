
//tabs.js

import React from 'react';
import {
    View, Text,
    TouchableOpacity
} from 'react-native';

import s from './style'
    
const WaitDispatch = ()=> (
	<View style={s.ctnr}>
	<View style={s.tb}>
	<Text style={s.sf}>暂无数据</Text></View>
	</View>
)

const WaitPayment = ()=> (
	<View style={s.ctnr}>
	<View style={s.tb}>
	<Text style={s.sf}>暂无数据</Text></View>
	</View>
)

const Dispatched = ()=> (
	<View style={s.ctnr}>
	<View style={s.tb}>
	<Text style={s.sf}>暂无数据</Text></View>
	</View>
)

const Tabs = ({omanagerTab}) => {
    switch(omanagerTab){
    case 1:
	return <WaitDispatch />;
    case 2:
	return <WaitPayment />;
    case 3:
	return <Dispatched />
    }
    
}
    

export default Tabs
