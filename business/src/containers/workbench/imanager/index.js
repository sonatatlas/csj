import React,{Component} from 'react';
import {connect} from 'react-redux'
import ImanagerModel from '../../../components/workbench/pages/imanager'
import {
    Image,View,TouchableOpacity,Text
} from 'react-native'

import {switchImanagerTab} from '../../../actions/cstmService'
import {css} from 'init'

const Back = ({navigation})=>(
	<TouchableOpacity
    onPress = {()=>navigation.goBack()}
	><Image
    source={require('../../icon/header/back.png')}
    style={[css.headerIcon,{height:24}]}
	/></TouchableOpacity>)

const Right = ({navigation})=>(
	<TouchableOpacity
    onPress = {()=>navigation.navigate('Search')}
	><Image
    source={require('../../icon/header/search.png')}
    style={css.headerIcon}
	/></TouchableOpacity>)

const HEADER = ()=>(<Text
                    allowFontScaling={false}
                    style={{color:css.dark,fontSize:css.f2}}
                    >商品管理</Text>)



class Imanager extends Component{
    static navigationOptions = ({navigation})=>({
	headerTitle:<HEADER />,
        headerStyle:{backgroundColor:css.light},
	headerLeft:<Back navigation={navigation}/>,
	headerRight:<Right navigation={navigation}/>,	
    })
    render(){
	const {imanagerTab,dispatch, navigation} = this.props
	return(
		<ImanagerModel
	    imanagerTab={imanagerTab}
	    navigation = {navigation}
	    switchImanagerTab={(tab)=>dispatch(switchImanagerTab(tab))}
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
export default connect(mapStateToProps)(Imanager)



