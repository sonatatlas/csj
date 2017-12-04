
// header message page

import React,{Component} from 'react'
import {connect} from 'react-redux'
import {TouchableOpacity,Image} from 'react-native'
import MessageModel from '../../../components/header/message'


const Left = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.goBack()}
        ><Image
    source={require('../../icon/header/back_white.png')}
    style={{height:24,width:20,marginLeft:12}}
        /></TouchableOpacity>)



class Message extends Component{
    static navigationOptions = ({navigation})=>({
        title:"消息",
        headerTitleStyle:{color:'#eee',fontSize:18},
        headerStyle:{backgroundColor:'#4283a1',borderBottomWidth:0},
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
