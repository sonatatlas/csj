import React,{Component} from 'react';
import {connect} from 'react-redux'
import RenovateModel from '../../../components/workbench/pages/renovate'
import {
    Keyboard,Image,View,TouchableOpacity,Text
} from 'react-native'

import {css} from 'init'

const HEADER = ()=>(<Text
                    allowFontScaling={false}
                    style={{color:css.dark,fontSize:css.f2}}
                    >打理店铺</Text>)

const Left = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.goBack()}
        ><Image
    source={require('../../icon/header/back.png')}
    style={[css.headerIcon, {height:24}]}
        /></TouchableOpacity>)


const dsms =()=>Keyboard.dismiss()

class Renovate extends Component{
    static navigationOptions = ({navigation})=>({
	headerTitle:<HEADER />,
	headerLeft: <Left navigation={navigation} />,
	headerStyle:{backgroundColor:css.light},
    })
    render(){
	const {imanagerTab,dispatch} = this.props
	return(
		<RenovateModel
	    dsms={dsms}
		/>
	)
    }
}


const mapStateToProps = state=>{
    const {imanagerTab} = state.cstmServiceReducer
    return{
	imanagerTab
    }
}
export default connect(mapStateToProps)(Renovate)



