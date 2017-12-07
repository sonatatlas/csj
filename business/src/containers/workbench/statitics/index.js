import React,{Component} from 'react';
import {connect} from 'react-redux'
import StatiticsModel from '../../../components/workbench/pages/statitics'
import {
    Keyboard,Image,View,TouchableOpacity,Text
} from 'react-native'
import {css} from 'init'

const Back = ({navigation})=>(
	<TouchableOpacity
    onPress = {()=>navigation.goBack()}
	><Image
    source={require('../../icon/header/back.png')}
    style={[css.headerIcon,{height:24}]}
	/></TouchableOpacity>)

const HEADER = ()=>(<Text
		    allowFontScaling={false}
		    style={{color:css.dark,fontSize:css.f2}}
		    >数据统计</Text>)

class Statitics extends Component{
    static navigationOptions = ({navigation})=>({
	headerTitle:<HEADER />,
        headerStyle:{backgroundColor:css.light},
	headerLeft:<Back navigation={navigation}/>,
	headerBackTitleStyle:{color:css.light}
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



