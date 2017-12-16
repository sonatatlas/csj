
import { StyleSheet } from 'react-native'
import {css} from 'init'

const style = StyleSheet.create({
    barBtn :{
	display:'flex',
	justifyContent:'space-between',
	alignItems:'center',
	flexDirection:'row',
	width:css.deviceWidth,
	backgroundColor:css.light,
	marginTop:10,
	marginBottom:10
	
    },
    barf:{
	margin:10,
	fontSize:css.f4
    },
    imgWrap:{
	height:120,
	backgroundColor:css.light
    },
    imgLabel:{
	display:'flex',
	alignItems:'center',
	justifyContent:'center',
	backgroundColor:css.light
    },
    ti:{
	marginLeft:5,
	width: 200,
	fontSize:css.f1,
	borderWidth:1,
	borderColor:'#ddd'
    }
})

export default style

