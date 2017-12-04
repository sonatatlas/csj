
// header message page

import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
    TouchableOpacity,TextInput,View,Text,Keyboard
} from 'react-native'
import SearchModel from '../../../components/header/search'

import s from './style'

const Right = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.goBack()}
        >
	<Text style={s.cancel}>取消</Text>
        </TouchableOpacity>)

const SEARCH = ()=>(
        <View style={s.tiw}>
        <TextInput style={s.ti} placeholder={'搜索订单'} />
        </View>
)


class Search extends Component{
    static navigationOptions = ({navigation})=>({
        headerLeft:<SEARCH />,
	headerRight:<Right navigation={navigation}/>,	
        headerTitleStyle:{color:'#666',fontSize:18},
        headerStyle:{backgroundColor:'#eee',borderBottomWidth:0},
    })
    render(){
	return(
		<SearchModel />
	)
    }
}

const mapStateToProps = state=>{
    const {isLeft} = state.cstmServiceReducer
    return{
        isLeft
    }
}
export default connect(mapStateToProps)(Search)
