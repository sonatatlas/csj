
// header message page

import React,{Component} from 'react'
import {connect} from 'react-redux'
import {TouchableOpacity,Image} from 'react-native'
import RecordModel from '../../../components/header/record'


const Left = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.goBack()}
        ><Image
    source={require('../../icon/header/back_white.png')}
    style={{height:20,width:20,marginLeft:12}}
        /></TouchableOpacity>)



class Record extends Component{
    static navigationOptions = ({navigation})=>({
        title:"消息记录",
        headerTitleStyle:{color:'#eee',fontSize:18},
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
