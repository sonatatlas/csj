import React,{Component} from 'react';
import {connect} from 'react-redux'
import {url,style,color,w} from '../../../global'
import OmanagerModel from '../../../components/workbench/pages/omanager'
import {
    Keyboard,Image,View,TouchableOpacity
} from 'react-native'

import {switchOmanagerTab} from '../../../actions/cstmService'


const dsms =()=>Keyboard.dismiss()
const Back = ({navigation})=>(
	<TouchableOpacity
    onPress = {()=>navigation.goBack()}
	><Image
    source={{uri: url+'/icon/back.png'}}
    style={{height:8*w,width:8*w,marginLeft:6}}
	/></TouchableOpacity>)

class Omanager extends Component{
    static navigationOptions = ({navigation})=>({
	title:"全部订单",
        headerTitleStyle:{color:'#707070',fontSize:22},
        headerStyle:{backgroundColor:'#fff'},
	headerLeft:<Back navigation={navigation}/>,
	headerBackTitleStyle:{color:'#eee'}
    })
    render(){
	const {omanagerTab,dispatch} = this.props
	return(
		<OmanagerModel
	    dsms={dsms}
	    omanagerTab={omanagerTab}
	    switchOmanagerTab={(tab)=>dispatch(switchOmanagerTab(tab))}
		/>
	)
    }
}


const mapStateToProps = state=>{
    console.log('where is state?')
    console.log(state)
    const {omanagerTab} = state.cstmServiceReducer
    return{
	omanagerTab
    }
}
export default connect(mapStateToProps)(Omanager)



