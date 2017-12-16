//mine containers

import React,{Component} from 'react';
import { connect } from 'react-redux';
import MineComponent from '../../components/mine'
import {
    Image, TouchableOpacity, Text,
    AsyncStorage, Alert
} from 'react-native'
import {css} from 'init'

import { login } from '../../actions/login'

const ICON = ({focused,tintColor})=>(
    focused?
        <Image style={css.tabIcon} source={require('../icon/tabbar/mine_tap.png')}/>:
        <Image style={css.tabIcon} source={require('../icon/tabbar/mine.png')}/>
)

const HEADER = ()=>(<Text
                    allowFontScaling={false}
		    style={{color:css.light,fontSize:css.f2}}
                    >管理</Text>)

const Right = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.navigate('Message')}
        ><Image
    source={require('../icon/header/message.png')}
    style={css.headerIcon}
        /></TouchableOpacity>)

class Mine extends Component{
    static navigationOptions = ({navigation})=>({
	headerTitle:<HEADER />,
	headerRight:<Right navigation={navigation}/>,
	headerStyle:{backgroundColor:css.color,borderBottomWidth:0},
        tabBarIcon:ICON
    })
    _logOut = () =>{
	let { dispatch } = this.props
	AsyncStorage.removeItem('accountTel')
	dispatch(login(false))
	Alert.alert('退出成功!')
    }
    render(){
	return(
		<MineComponent logOut= {this._logOut}/>
	)
    }
}

const mapStateToProps = state =>({
    login : state.loginReducer
})

export default connect(mapStateToProps)(Mine)
