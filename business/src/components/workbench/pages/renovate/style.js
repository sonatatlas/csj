//cstmService.js
import {StyleSheet} from 'react-native'
import {css} from 'init'
const style = StyleSheet.create({
    ctnr:{
	display:'flex',
	flex:1,
	backgroundColor:'white'
    },
    tt:{
	margin:css.f1/14*8,	
	display:'flex',
	flexDirection:'row',
	justifyContent:'space-between',
	alignItems:'center'
    },
    lt:{
	fontSize:css.f2
    },
    ct:{
	margin:css.f1/14*3,
	fontSize:css.f2,
	color:'white'
    },
    btn:{
	backgroundColor:'red',
    }
})

export default style
