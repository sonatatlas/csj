import React,{Component} from 'react';
import {connect} from 'react-redux'
import AddItemModel from '../../../../components/workbench/pages/imanager/addItem'
import {
    Keyboard,Image,View,TouchableOpacity,Text
} from 'react-native'
import { ImagePicker } from 'expo'

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

    render(){
	const {imanagerTab,dispatch, navigation, uploadInfo} = this.props
	const _updateInfo = async ( key, value) => {
	    try{
		let _state = uploadInfo
		_state[key] = value
		await dispatch(updateInfo(_state))
		console.log('update state')
	    }catch(err){
		console.log(err)
	    }
	}	

	const _pickImage = async () => {
	    try{
		let result = await ImagePicker.launchImageLibraryAsync({
		    allowsEditing: true,
		    aspect: [4, 3],
		});
		console.log('pickimage')		    
		if (!result.cancelled) {

		    await _updateInfo('image',result.uri)		    
		}	
	    }catch(error){
		console.log(error)
	    }
	};	
	return(
		<AddItemModel
	    navigation={navigation} pickImage={_pickImage}
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



