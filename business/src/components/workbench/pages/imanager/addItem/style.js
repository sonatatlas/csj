
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
	display:'flex',
	flexDirection:'row',
	justifyContent:'center',
	alignItems:'center',
	backgroundColor:css.light
    },
    listStyle : {
	display:'flex',
	flexDirection:'row',
	justifyContent:'center',
	alignItems:'center'
    },
    img:{
	width:88,
	height:88,
	margin:10
    },
    imgLabel:{
	display:'flex',
	alignItems:'center',
	justifyContent:'center',
	backgroundColor:css.light,
	borderWidth:0.5,
	borderColor:'#ddd'
    },
    ti:{
	padding:3,
	width: 120,
	fontSize:css.f1,
	borderWidth:1,
	borderColor:'#ddd'
    },
    sideRow:{
	margin:10,
	paddingBottom:5,
	borderBottomWidth:1,
	borderColor: '#ddd'
    },
    sideRowFont:{
	fontSize:css.f1
    },
    sideRowFont2:{
	marginLeft:12,
	fontSize:css.f1
    }    
})

export default style

