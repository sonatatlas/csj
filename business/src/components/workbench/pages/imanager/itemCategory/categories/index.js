
import React from 'react'
import {
    TouchableOpacity, Text, View, ListView
} from 'react-native'
import s from '../style.js'
import bs from '../../items/style.js'

const Category = ({navigation, categoryData}) => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource2 = ds.cloneWithRows(categoryData.subCategories)
    const Row = ({categoryData, sub}) => {
	let barf = s.barf
	sub?barf=s.barf2:s.barf
	return(
		<TouchableOpacity style={s.barBtn} onPress={()=>navigation.navigate('Imanager')}>
		<Text style={barf} allowFontScaling={false} >{categoryData.label}</Text>
		<Text style={s.barf} allowFontScaling={false} >18</Text>
		</TouchableOpacity>
	)
    }
    
    return(
	    <View><Row categoryData={categoryData}/>
            <ListView
	dataSource={dataSource2} enableEmptySections={true}
        renderRow={(rowData) => <Row categoryData={rowData} sub={true} />}
            />
	    </View>
    )
}


const Categories = ({navigation, categories}) => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(categories)
    return(
	    <View style={{display:'flex', flex:1}}>
	    <ListView
	dataSource={dataSource} enableEmptySections={true}
	renderRow={(rowData) => <Category navigation={navigation} categoryData={rowData} />}
	    />
	    <TouchableOpacity style={bs.addItem} onPress={()=>navigation.navigate('EditCategories')}>
            <Text style={bs.tabf} allowFontScaling={false} >编辑分类</Text>
            </TouchableOpacity>	
	    </View>
    )
}

export default Categories
