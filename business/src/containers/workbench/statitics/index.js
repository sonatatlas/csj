import React,{Component} from 'react';
import {connect} from 'react-redux'
import {url,style,color,w} from '../../../global'
import StatiticsModel from '../../../components/workbench/pages/statitics'
import {
    Keyboard,Image,View,TouchableOpacity
} from 'react-native'


const Back = ({navigation})=>(
	<TouchableOpacity
    onPress = {()=>navigation.goBack()}
	><Image
    source={{uri: url+'/icon/back.png'}}
    style={{height:8*w,width:8*w,marginLeft:6}}
	/></TouchableOpacity>)

class Statitics extends Component{
    static navigationOptions = ({navigation})=>({
	title:"数据统计",
        headerTitleStyle:{color:'#707070',fontSize:22},
        headerStyle:{backgroundColor:'#fff'},
	headerLeft:<Back navigation={navigation}/>,
	headerBackTitleStyle:{color:'#eee'}
    })
    render(){
	return(
		<StatiticsModel	/>
	)
    }
}


const mapStateToProps = state=>{
    const {imanagerTab} = state.cstmServiceReducer
    return{
	imanagerTab
    }
}
export default connect(mapStateToProps)(Statitics)



