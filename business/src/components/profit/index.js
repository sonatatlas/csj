import React from 'react';


import s from './style.js'
import Item from './item'
import {
    View,ListView,StatusBar,Text, TouchableOpacity
} from 'react-native';


const rtg = [{
    label:'可提现', info:'已完成的交易'
},{
    label:'待提现', info:'进行中的交易'
},{
    label:'冻结中', info:'需维权的交易'
},{
    label:'银行卡', info:'绑定您的对公账户'
},{
    label:'礼品卡', info:'您发行的礼品卡'
}]


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const rtgs = ds.cloneWithRows(rtg)


const Statitics = () => (
	<View >
	<StatusBar barStyle="light-content" />
	<View style={s.cdbg} >
	<Text allowFontScaling={false} style={s.cdhd}>用户可用余额</Text>
	<Text allowFontScaling={false} style={s.cdsm}>130,000</Text>
	<Text allowFontScaling={false} style={s.cdid}>20171231</Text></View>
	<View style={s.wdbg}><TouchableOpacity style={s.wdbtn}>
	<Text allowFontScaling={false} style={s.wdtext}>提现</Text>
	</TouchableOpacity><Text allowFontScaling={false} style={s.wzinfo}>12/31日可提现</Text></View>
        <ListView
    scrollEnabled={false}
    dataSource={rtgs}
    renderRow={(rowData) => <Item info={rowData}/>}
    contentContainerStyle={s.listViewStyle}
    removeClippedSubviews={false}
        />
    </View>
);

export default Statitics
