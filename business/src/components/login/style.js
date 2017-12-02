
//login css
import {StyleSheet} from 'react-native'
import {h,w} from '../../global'

const style = StyleSheet.create({
    ctnr:{
	display:'flex',
	justifyContent:'center',
	alignItems:'center'
    },logo:{
	height:20*w,
	width:20*w,
	marginTop:20*h,
	
    },tiw:{
	height:10*w,
	width:70*w,	
	marginTop:10*w,
	borderColor: '#999',	
	borderBottomWidth: 1,		
    },ti:{	
	height:10*w,
	width:70*w,
	fontSize:6*w,
	textAlign:'right',
	paddingRight:2*w
    },btn:{
	width:70*w,
	height:15*w,
	marginTop:10*w,
	backgroundColor:'#4283a1',
	borderRadius:10,
	display:'flex',
	justifyContent:'center',
	alignItems:'center'
    },fontl:{
	fontSize:5*w,
	color:'#eee'
    },space:{
	height:25*w,
    }
})
    

export default style
