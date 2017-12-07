import React,{Component} from 'react';
import {connect} from 'react-redux'
import PmanagerModel from '../../../components/workbench/pages/pmanager'
import {
    Keyboard,Image,View,TouchableOpacity,Text
} from 'react-native'

import {switchPmanagerTab} from '../../../actions/cstmService'
import {css} from 'init'

const dsms =()=>Keyboard.dismiss()
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
                    >维权管理</Text>)


class Pmanager extends Component{
    static navigationOptions = ({navigation})=>({
	headerTitle:<HEADER />,
        headerTitleStyle:{color:css.dark,fontSize:css.f2},
        headerStyle:{backgroundColor:css.light},
	headerLeft:<Back navigation={navigation}/>,
    })
    render(){
	const {pmanagerTab,dispatch} = this.props
	return(
		<PmanagerModel
	    dsms={dsms}
	    pmanagerTab={pmanagerTab}
	    switchPmanagerTab={(tab)=>dispatch(switchPmanagerTab(tab))}
		/>
	)
    }
}


const mapStateToProps = state=>{
    const {pmanagerTab} = state.cstmServiceReducer
    return{
	pmanagerTab
    }
}
export default connect(mapStateToProps)(Pmanager)



