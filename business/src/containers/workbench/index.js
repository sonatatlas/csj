

import React,{Component} from 'react';
import {Image,TouchableOpacity} from 'react-native'
import WorkbenchComponent  from '../../components/workbench'

const ICON = ({focused,tintColor})=>(
    focused?
        <Image style={{height:22,width:22}} source={require('../icon/tabbar/workbench_tap.png')}/>:
        <Image style={{height:22,width:22}} source={require('../icon/tabbar/workbench.png')}/>
)

const Right = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.navigate('Message')}
        ><Image
    source={require('../icon/header/message.png')}
    style={{height:20,width:20,marginRight:12}}
        /></TouchableOpacity>)
const Left = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.navigate('QRcode')}
        ><Image
    source={require('../icon/header/qrcode.png')}
    style={{height:20,width:20,marginLeft:12}}
        /></TouchableOpacity>)

class Workbench extends Component{
    static navigationOptions = ({navigation})=>({
        title:"工作台",
        headerTitleStyle:{color:'#eee',fontSize:18},
        headerStyle:{backgroundColor:'#4283a1',borderBottomWidth:0},
	headerLeft: <Left navigation={navigation} />,		
	headerRight:<Right navigation={navigation} />,
	tabBarIcon:ICON	
    })
    render(){
	const {navigate} = this.props.navigation
	return(
		<WorkbenchComponent navigate={navigate}/>
	)
    }
}


export default Workbench
