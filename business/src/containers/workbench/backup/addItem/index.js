import React,{Component} from 'react';
import {connect} from 'react-redux'
import AddItemModel from '../../../../components/workbench/pages/imanager/addItem'
import {
    Keyboard,Image,View,TouchableOpacity,Text
} from 'react-native'

import {css} from 'init'

import { updateInfo } from '../../../../actions/workbench'

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
    componentWillMount(){
	const {imanagerTab,dispatch, navigation, uploadInfo} = this.props

    }
    render(){
	const {imanagerTab,dispatch, navigation, uploadInfo} = this.props

	const _updateInfo = async ( form ) => {
	    await dispatch(updateInfo( form ))
	}
 	
	return(
		<AddItemModel
	    navigation={navigation} 
	    updateInfo={_updateInfo} uploadInfo={uploadInfo}
		/>
	)
    }
}


const mapStateToProps = state=>{
    const { imanagerTab } = state.cstmServiceReducer
    const { uploadInfo } = state.workbenchReducer
    return{
	imanagerTab, uploadInfo
    }
}
export default connect(mapStateToProps)(AddItem)



