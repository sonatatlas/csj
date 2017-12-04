
//tabs.js

import React from 'react';
import {
    View, Text,TextInput,
    TouchableOpacity
} from 'react-native';
import s from './style'

const Access = ({navigation})=> (
	<View style={s.ctnr}>
	<TouchableOpacity style={s.tiw} onPress={()=>navigation.navigate('Search')}>
        <Text style={s.ti}>搜索</Text>
        </TouchableOpacity>
	<View style={s.tb}>
	<Text style={s.sf}>没有已接入的客人了，快去接待一个吧～</Text>
	<TouchableOpacity style={s.btn}>
	<Text style={s.sf}>接待客人去咯</Text>
	</TouchableOpacity>
	</View>
	</View>
)

const WaitAccess = ()=> (
	<View style={s.ctnr}>
	<View style={s.tb}>
	<Text style={[s.sf,{marginBottom:12}]}>没有在等待的客人了,辛苦啦!</Text>
	<Text style={s.sf}>稍等休息一下吧～</Text></View>
	</View>
)

const Tabs = ({isLeft,navigation}) => isLeft?<Access navigation={navigation} />:<WaitAccess />
    

export default Tabs
