import React,{Component} from 'react';
import {connect} from 'react-redux'
import AddItemModel from '../../../../components/workbench/pages/imanager/addItem'
import {
    Keyboard,Image,View,TouchableOpacity,Text
} from 'react-native'

import {css} from 'init'

const Back = ({navigation})=>(
	<TouchableOpacity
    onPress = {()=>navigation.goBack()}
	><Image
    source={require('../../../icon/header/back.png')}
    style={[css.headerIcon,{height:24}]}
	/></TouchableOpacity>)

const HEADER = ()=>(<Text
                    allowFontScaling={false}
                    style={{color:css.dark,fontSize:css.f2}}
                    >添加商品</Text>)



class AddItem extends Component{
    static navigationOptions = ({navigation})=>({
	headerTitle:<HEADER />,
        headerStyle:{backgroundColor:css.light},
	headerLeft:<Back navigation={navigation}/>,
    })
    render(){
	const {imanagerTab,dispatch, navigation} = this.props
	return(
		<AddItemModel navigation={navigation} />
	)
    }
}


const mapStateToProps = state=>{
    const {imanagerTab} = state.cstmServiceReducer
    return{
	imanagerTab
    }
}
export default connect(mapStateToProps)(AddItem)



