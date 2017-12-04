//mine containers

import React,{Component} from 'react';
import MineComponent from '../../components/mine'
import {
    Image, TouchableOpacity
} from 'react-native'


const ICON = ({focused,tintColor})=>(
    focused?
        <Image style={{width:22,height:22}} source={require('../icon/tabbar/mine_tap.png')}/>:
        <Image style={{width:22,height:22}} source={require('../icon/tabbar/mine.png')}/>
)

const Right = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.navigate('Message')}
        ><Image
    source={require('../icon/header/message.png')}
    style={{height:20,width:20,marginRight:12}}
        /></TouchableOpacity>)

class Mine extends Component{
    static navigationOptions = ({navigation})=>({
        title:"我的",
        headerTitleStyle:{color:'#eee',fontSize:18},
        headerStyle:{backgroundColor:"#4283a1",borderBottomWidth:0},
	headerRight: <Right navigation={navigation}/>,
        tabBarIcon:ICON
    })
    render(){
	return(
	    <MineComponent />
	)
    }
}


export default Mine
