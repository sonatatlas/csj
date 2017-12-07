

import React,{Component} from 'react';
import {
    Image,TouchableOpacity,Text
} from 'react-native'
import WorkbenchComponent  from '../../components/workbench'
import {css} from 'init'

const ICON = ({focused,tintColor})=>(
    focused?
        <Image style={css.tabIcon} source={require('../icon/tabbar/workbench_tap.png')}/>:
        <Image style={css.tabIcon} source={require('../icon/tabbar/workbench.png')}/>
)

const HEADER = ()=>(<Text
                    allowFontScaling={false}
                    style={{color:css.light,fontSize:css.f2}}
                    >工作台</Text>)


const Right = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.navigate('Message')}
        ><Image
    source={require('../icon/header/message.png')}
    style={css.headerIcon}
        /></TouchableOpacity>)
const Left = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.navigate('QRcode')}
        ><Image
    source={require('../icon/header/qrcode.png')}
    style={css.headerIcon}
        /></TouchableOpacity>)

class Workbench extends Component{
    static navigationOptions = ({navigation})=>({
	headerTitle:<HEADER />,
        headerStyle:{backgroundColor:css.color,borderBottomWidth:0},
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
