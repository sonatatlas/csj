
// header message page

import React,{Component} from 'react'
import {connect} from 'react-redux'
import {TouchableOpacity,Image, Text} from 'react-native'
import MessageModel from '../../../components/header/message'
import {css} from 'init'

const Left = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.goBack()}
        ><Image
    source={require('../../icon/header/back_white.png')}
    style={[css.headerIcon,{height:26}]}
        /></TouchableOpacity>)

const HEADER = ()=>(<Text
                    allowFontScaling={false}
                    style={{color:css.light,fontSize:css.f2}}
                    >消息</Text>)

class Message extends Component{
    static navigationOptions = ({navigation})=>({
	headerTitle:<HEADER />,
        headerStyle:{backgroundColor:css.color,borderBottomWidth:0},
	headerLeft:<Left navigation={navigation}/>,
    })
    render(){
	return(
	    <MessageModel />
	)
    }
}

const mapStateToProps = state=>{
    const {isLeft} = state.cstmServiceReducer
    return{
        isLeft
    }
}
export default connect(mapStateToProps)(Message)
