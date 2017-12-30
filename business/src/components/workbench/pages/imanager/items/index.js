
//tabs.js

import React from 'react';
import {
    View, Text, TouchableOpacity, Image, ScrollView, ListView
} from 'react-native';

import s from './style'

const Item = ({itemData}) => (
	<View style={s.item,{marginBottom:1}}>
	<View style={s.ctn}>

	<View style={s.left}>
	<Image style={s.img} source={{uri:itemData.pics}}/>
	</View>
	
	<View style={s.right}>
	<View ><Text style={s.title} allowFontScaling={false} >{itemData.name}</Text></View>
	<View ><Text style={s.price} allowFontScaling={false} >{itemData.price}元</Text></View>
	<View style={s.detailwrap}>
	<Text style={s.detailctn} allowFontScaling={false} >销量: {itemData.sale}</Text>
	<Text style={s.detailctn} allowFontScaling={false} >库存: {itemData.stock}</Text>	
	</View>
	</View>
	
    </View>
	<View style={s.btnwrap}>
	<TouchableOpacity style={s.btn}>
	<Text style={s.tabf} allowFontScaling={false} >修改</Text>
	</TouchableOpacity>
	<TouchableOpacity style={s.btn}>
	<Text style={s.tabf} allowFontScaling={false} >分享</Text>
	</TouchableOpacity>
	<TouchableOpacity style={s.btn}>
	<Text style={s.tabf} allowFontScaling={false} >排序</Text>
	</TouchableOpacity>
	<TouchableOpacity style={s.btn}>
	<Text style={s.tabf} allowFontScaling={false} >删除</Text>
	</TouchableOpacity>
	</View>
	</View>
)

const Items = ({navigation, items}) => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(items)
    return(
            <View style={{display:'flex',flex:1}}>
            <ScrollView>
            <ListView
        dataSource={dataSource} enableEmptySections={true}
        renderRow={(rowData) => <Item itemData={rowData} />}
            />
            </ScrollView>
            <TouchableOpacity style={s.addItem} onPress={()=>navigation.navigate('AddItem')}>
            <Text style={s.tabf} allowFontScaling={false} >添加商品</Text>
            </TouchableOpacity></View>
    )
}

export default Items
