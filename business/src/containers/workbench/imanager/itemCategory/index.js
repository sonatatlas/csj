import React,{Component} from 'react';
import {connect} from 'react-redux'
import ItemCategoryModel from '../../../../components/workbench/pages/imanager/itemCategory'
import {
    switchTab, updateItems, updateCategories,
    getCategories, getItems
}  from '../../../../actions/workbench'
import {
    Keyboard,Image,View,TouchableOpacity,Text, AsyncStorage
} from 'react-native'

import { css, SERVER } from 'init'

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
    componentWillMount(){
	getCategories(this.props.dispatch)
	getItems(this.props.dispatch)	
    }
    render(){
	const {
	    navigation, itemTab, dispatch, categories, items
	} = this.props
	const _switchTab = (tab) =>{dispatch(switchTab(tab))}
	return(
		<ItemCategoryModel
	    navigation={navigation} switchTab={_switchTab}
	    itemTab = {itemTab} items={items} categories={categories}
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



