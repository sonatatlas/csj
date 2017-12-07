import React,{Component} from 'react';
import {connect} from 'react-redux'
import OmanagerModel from '../../../components/workbench/pages/omanager'
import {
    Keyboard,Image,View,TouchableOpacity,Text
} from 'react-native'

import {switchOmanagerTab} from '../../../actions/cstmService'
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
                    >全部订单</Text>)


class Omanager extends Component{
    static navigationOptions = ({navigation})=>({
	headerTitle:<HEADER />,
        headerTitleStyle:{color:css.dark,fontSize:css.f2},
        headerStyle:{backgroundColor:css.light},
	headerLeft:<Back navigation={navigation}/>,
    })
    render(){
	const {omanagerTab,dispatch} = this.props
	return(
		<OmanagerModel
	    dsms={dsms}
	    omanagerTab={omanagerTab}
	    switchOmanagerTab={(tab)=>dispatch(switchOmanagerTab(tab))}
		/>
	)
    }
}


const mapStateToProps = state=>{
    const {omanagerTab} = state.cstmServiceReducer
    return{
	omanagerTab
    }
}
export default connect(mapStateToProps)(Omanager)



