
import { StyleSheet } from 'react-native'
import {css, deviceWidth} from 'init'

const style = StyleSheet.create({
    barBtn :{
	display:'flex',
	justifyContent:'space-between',
	alignItems:'center',
	flexDirection:'row',
	width:css.deviceWidth,
	backgroundColor:css.light,
	
    },
    barf:{
	margin:10,
	
    },
    tabwrap:{
	display: 'flex',
	flexDirection:'row',
	borderWidth:1,
	borderColor:'#eee'
    },
    tab:{
	display:'flex',
	backgroundColor:css.light,
	justifyContent:'center',
	alignItems:'center',
	width:deviceWidth/2
	
    },
    tf:{
	margin:10,
	fontSize:css.f1
    }
})

export default style

