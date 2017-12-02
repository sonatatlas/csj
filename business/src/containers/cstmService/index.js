import React,{Component} from 'react';
import CstmServiceComponent from '../../components/cstmService'
import {
    Keyboard,Image
} from 'react-native'
import {url,style,color} from '../../global'

const dsms =()=>Keyboard.dismiss()

const ICON = ({focused,tintColor})=>(
    focused?
	<Image style={style.icon} source={{uri:url+'/b/tabbar/cstmService_tap.png'}}/>:
    	<Image style={style.icon} source={{uri:url+'/b/tabbar/cstmService.png'}}/>
)

class CstmService extends Component{
    static navigationOptions = {
	title:"微客服",
        headerTitleStyle:{color:'#eee',fontSize:22},
        headerStyle:{backgroundColor:color,borderBottomWidth:0},
        tabBarIcon:ICON
    }
    render(){
	const p = {dsms}
	return(
		<CstmServiceComponent p={p} />
	)
    }
}


export default CstmService
