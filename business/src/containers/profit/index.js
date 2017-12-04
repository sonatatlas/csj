//mine containers

import React,{Component} from 'react';
import ProfitComponent from '../../components/profit'
import {Image} from 'react-native'
import {url,style,color} from '../../global'

const ICON = ({focused,tintColor})=>(
    focused?
        <Image style={style.icon} source={{uri:url+'/b/tabbar/profit_tap.png'}}/>:
        <Image style={style.icon} source={{uri:url+'/b/tabbar/profit.png'}}/>
)


class Profit extends Component{
    static navigationOptions = {
        title:"收益",
        headerTitleStyle:{color:'#eee',fontSize:22},
        headerStyle:{backgroundColor:color,borderBottomWidth:0},
        tabBarIcon:ICON
    }
    render(){
	return(
	    <ProfitComponent />
	)
    }
}


export default Profit
