

import React,{Component} from 'react';
import {Image} from 'react-native'
import WorkbenchComponent  from '../../components/workbench'
import {url,style,color} from '../../global'

const ICON = ({focused,tintColor})=>(
    focused?
        <Image style={style.icon} source={{uri:url+'/b/tabbar/workbench_tap.png'}}/>:
        <Image style={style.icon} source={{uri:url+'/b/tabbar/workbench.png'}}/>
)


class Workbench extends Component{
    static navigationOptions = {
        title:"工作台",
        headerTitleStyle:{color:'#eee',fontSize:22},
        headerStyle:{backgroundColor:color,borderBottomWidth:0},
	tabBarIcon:ICON	
    }
    render(){
	const {navigate} = this.props.navigation
	return(
		<WorkbenchComponent navigate={navigate}/>
	)
    }
}


export default Workbench
