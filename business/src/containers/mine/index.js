//mine containers

import React,{Component} from 'react';
import MineComponent from '../../components/mine'
import {Image} from 'react-native'
import {url,style,color} from '../../global'

const ICON = ({focused,tintColor})=>(
    focused?
        <Image style={style.icon} source={{uri:url+'/b/tabbar/mine_tap.png'}}/>:
        <Image style={style.icon} source={{uri:url+'/b/tabbar/mine.png'}}/>
)


class Mine extends Component{
    static navigationOptions = {
        title:"我的",
        headerTitleStyle:{color:'#eee',fontSize:22},
        headerStyle:{backgroundColor:color,borderBottomWidth:0},
        tabBarIcon:ICON
    }
    render(){
	return(
	    <MineComponent />
	)
    }
}


export default Mine
