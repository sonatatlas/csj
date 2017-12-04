//mine containers

import React,{Component} from 'react';
import ProfitComponent from '../../components/profit'
import {Image,TouchableOpacity} from 'react-native'

const ICON = ({focused,tintColor})=>(
    focused?
        <Image style={{height:22,width:22}} source={require('../icon/tabbar/profit_tap.png')}/>:
        <Image style={{height:22,width:22}} source={require('../icon/tabbar/profit.png')}/>
)

const Right = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.navigate('Message')}
        ><Image
    source={require('../icon/header/message.png')}
    style={{height:20,width:20,marginRight:12}}
        /></TouchableOpacity>)

class Profit extends Component{
    static navigationOptions = ({navigation})=>({
        title:"收益",
        headerTitleStyle:{color:'#eee',fontSize:18},
        headerStyle:{backgroundColor:'#4283a1',borderBottomWidth:0},
	headerRight:<Right navigation={navigation} />,
        tabBarIcon:ICON
    })
    render(){
	return(
	    <ProfitComponent />
	)
    }
}


export default Profit
