
// header message page

import React,{Component} from 'react'
import {connect} from 'react-redux'
import {TouchableOpacity,Image, Text} from 'react-native'
import RecordModel from '../../../components/header/record'
import {css} from 'init'

const Left = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.goBack()}
        ><Image
    source={require('../../icon/header/back_white.png')}
    style={[css.headerIcon, {height:26}]}
        /></TouchableOpacity>)

const HEADER = ()=>(<Text
                    allowFontScaling={false}
                    style={{color:css.light,fontSize:css.f2}}
                    >消息记录</Text>)


class Record extends Component{
    static navigationOptions = ({navigation})=>({
        title:"消息记录",
	headerTitle: <HEADER />,
        headerStyle:{backgroundColor:'#4283a1',borderBottomWidth:0},
	headerLeft:<Left navigation={navigation}/>,
    })
    render(){
	return(
	    <RecordModel />
	)
    }
}

const mapStateToProps = state=>{
    const {isLeft} = state.cstmServiceReducer
    return{
        isLeft
    }
}
export default connect(mapStateToProps)(Record)
