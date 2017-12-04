import React,{Component} from 'react';
import {connect} from 'react-redux'
import ImanagerModel from '../../../components/workbench/pages/imanager'
import {
    Keyboard,Image,View,TouchableOpacity
} from 'react-native'

import {switchImanagerTab} from '../../../actions/cstmService'


const Back = ({navigation})=>(
	<TouchableOpacity
    onPress = {()=>navigation.goBack()}
	><Image
    source={require('../../icon/header/back.png')}
    style={{height:20,width:20,marginLeft:12}}
	/></TouchableOpacity>)

const Right = ({navigation})=>(
	<TouchableOpacity
    onPress = {()=>navigation.navigate('Search')}
	><Image
    source={require('../../icon/header/search.png')}
    style={{height:20,width:20,marginRight:12}}
	/></TouchableOpacity>)

const dsms =()=>Keyboard.dismiss()

class Imanager extends Component{
    static navigationOptions = ({navigation})=>({
	title:'商品管理',
        headerTitleStyle:{color:'#707070',fontSize:22},
        headerStyle:{backgroundColor:'#fff'},
	headerLeft:<Back navigation={navigation}/>,
	headerRight:<Right navigation={navigation}/>,	
	headerBackTitleStyle:{color:'#eee'}
    })
    render(){
	const {imanagerTab,dispatch} = this.props
	return(
		<ImanagerModel
	    dsms={dsms}
	    imanagerTab={imanagerTab}
	    switchImanagerTab={(tab)=>dispatch(switchImanagerTab(tab))}
		/>
	)
    }
}


const mapStateToProps = state=>{
    const {imanagerTab} = state.cstmServiceReducer
    return{
	imanagerTab
    }
}
export default connect(mapStateToProps)(Imanager)



