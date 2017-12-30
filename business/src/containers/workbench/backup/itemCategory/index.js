import React,{Component} from 'react';
import {connect} from 'react-redux'
import ItemCategoryModel from '../../../../components/workbench/pages/imanager/itemCategory'
import {switchTab, updateItems, updateCategories}  from '../../../../actions/workbench'
import {
    Keyboard,Image,View,TouchableOpacity,Text
} from 'react-native'

import {css} from 'init'

const Back = ({navigation})=>(
	<TouchableOpacity
    onPress = {()=>navigation.goBack()}
	><Image
    source={require('../../../icon/header/back.png')}
    style={[css.headerIcon,{height:24}]}
	/></TouchableOpacity>)

const HEADER = ()=>(<Text
                    allowFontScaling={false}
                    style={{color:css.dark,fontSize:css.f2}}
                    >商品管理</Text>)



const dsms =()=>Keyboard.dismiss()

class Imanager extends Component{
    static navigationOptions = ({navigation})=>({
	headerTitle:<HEADER />,
        headerStyle:{backgroundColor:css.light, borderBottomWidth:0},
	headerLeft:<Back navigation={navigation}/>,
    })
    render(){
	const { navigation, itemTab, dispatch} = this.props
	const _switchTab = (tab) =>{dispatch(switchTab(tab))}
	
	return(
		<ItemCategoryModel
	    navigation={navigation} _switchTab={_switchTab}
	    itemTab = {itemTab}
		/>
	)
    }
}


const mapStateToProps = state=>{
    const { itemTab, categories, items }  = state.workbenchReducer
    return{
	categories, itemTab, items
    }
}
export default connect(mapStateToProps)(Imanager)



