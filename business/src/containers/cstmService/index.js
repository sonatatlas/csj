import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Keyboard,Image} from 'react-native'
import {url,style,color} from '../../global'

import CstmServiceComponent from '../../components/cstmService'
import {switchAccessTab} from '../../actions/cstmService'

const dsms =()=>Keyboard.dismiss()


const ICON = ({focused,tintColor})=>(
    focused?
	<Image style={style.icon} source={{uri:url+'/b/tabbar/cstmService_tap.png'}}/>:
    	<Image style={style.icon} source={{uri:url+'/b/tabbar/cstmService.png'}}/>
)

class CstmService extends Component{
    static navigationOptions = {
	title:"微客服",
        headerTitleStyle:{color:'#eee',fontSize:22},
        headerStyle:{backgroundColor:color,borderBottomWidth:0},
        tabBarIcon:ICON
    }
    render(){
	const {isLeft,dispatch} = this.props
	return(
		<CstmServiceComponent
	    dsms={dsms}
	    isLeft={isLeft}
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
