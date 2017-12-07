//mine containers

import React,{Component} from 'react';
import ProfitComponent from '../../components/profit'
import {
    Image,TouchableOpacity,Text
} from 'react-native'
import {css} from 'init'
const ICON = ({focused,tintColor})=>(
    focused?
        <Image style={css.tabIcon} source={require('../icon/tabbar/profit_tap.png')}/>:
        <Image style={css.tabIcon} source={require('../icon/tabbar/profit.png')}/>
)

const HEADER = ()=>(<Text
                    allowFontScaling={false}
                    style={{color:css.light,fontSize:css.f2}}
                    >收益</Text>)


const Right = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.navigate('Message')}
        ><Image
    source={require('../icon/header/message.png')}
    style={css.headerIcon}
        /></TouchableOpacity>)

class Profit extends Component{
    static navigationOptions = ({navigation})=>({
	headerTitle:<HEADER />,
        headerStyle:{backgroundColor:css.color,borderBottomWidth:0},
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
