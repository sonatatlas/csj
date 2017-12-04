import React,{Component} from 'react';
import {connect} from 'react-redux'
import {url,style,color,w} from '../../../global'
import PmanagerModel from '../../../components/workbench/pages/pmanager'
import {
    Keyboard,Image,View,TouchableOpacity
} from 'react-native'

import {switchPmanagerTab} from '../../../actions/cstmService'


const dsms =()=>Keyboard.dismiss()
const Back = ({navigation})=>(
	<TouchableOpacity
    onPress = {()=>navigation.goBack()}
	><Image
    source={{uri: url+'/icon/back.png'}}
    style={{height:8*w,width:8*w,marginLeft:6}}
	/></TouchableOpacity>)

class Pmanager extends Component{
    static navigationOptions = ({navigation})=>({
	title:"维权管理",
        headerTitleStyle:{color:'#707070',fontSize:22},
        headerStyle:{backgroundColor:'#fff'},
	headerLeft:<Back navigation={navigation}/>,
	headerBackTitleStyle:{color:'#eee'}
    })
    render(){
	const {pmanagerTab,dispatch} = this.props
	return(
		<PmanagerModel
	    dsms={dsms}
	    pmanagerTab={pmanagerTab}
	    switchPmanagerTab={(tab)=>dispatch(switchPmanagerTab(tab))}
		/>
	)
    }
}


const mapStateToProps = state=>{
    const {pmanagerTab} = state.cstmServiceReducer
    return{
	pmanagerTab
    }
}
export default connect(mapStateToProps)(Pmanager)



