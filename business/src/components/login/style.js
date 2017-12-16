
//login css
import {StyleSheet} from 'react-native'
import {css} from 'init'

const style = StyleSheet.create({
    ctnr:{
	display:'flex',
	justifyContent:'center',
	alignItems:'center'
    },logo:{
	height:88,
	width:88,
	marginTop:168,	
    },tiw:{
	marginTop:10,
	borderColor: '#999',	
	borderBottomWidth: 1,		
    },ti:{
	height:30,
	width:200,
	marginTop:10,
	fontSize:css.f1,
    },btn:{
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	width:200,
	marginTop:30,
	backgroundColor:css.color,
	borderRadius:8,
    },fontl:{
	margin:10,
	fontSize:css.f1,
	color:'#eee'
    },space:{
	height:25,
    }
})
    

export default style
