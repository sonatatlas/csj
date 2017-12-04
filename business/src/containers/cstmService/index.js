import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Keyboard,Image,TouchableOpacity} from 'react-native'
import CstmServiceComponent from '../../components/cstmService'
import {switchAccessTab} from '../../actions/cstmService'


const ICON = ({focused,tintColor})=>(
    focused?
	<Image style={{height:22,width:22}} source={require('../icon/tabbar/cstmService_tap.png')}/>:
    	<Image style={{height:22,width:22}} source={require('../icon/tabbar/cstmService.png')}/>
)

const Right = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.navigate('Record')}
        ><Image
    source={require('../icon/header/record.png')}
    style={{height:20,width:20,marginRight:12}}
        /></TouchableOpacity>)

class CstmService extends Component{
    static navigationOptions = ({navigation})=>({
	title:"微客服",
        headerTitleStyle:{color:'#eee',fontSize:18},
        headerStyle:{backgroundColor:'#4283a1',borderBottomWidth:0},
	headerRight: <Right navigation={navigation}/>,
        tabBarIcon:ICON
    })
    render(){
	const {isLeft,dispatch,navigation} = this.props
	return(
		<CstmServiceComponent
	    isLeft={isLeft}
	    navigation={navigation}
	    switchAccessTab={(left)=>dispatch(switchAccessTab(left))}
		/>

	)
    }
}

const mapStateToProps = state=>{
    const {isLeft} = state.cstmServiceReducer
    return{
	isLeft
    }
}
export default connect(mapStateToProps)(CstmService)
