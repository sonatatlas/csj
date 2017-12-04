//cstmService.js
import {StyleSheet} from 'react-native'
import {h,w,color} from '../../global'

const style = StyleSheet.create({
    ctnr:{
	display:'flex',
	flex:1,
	backgroundColor:'#dedede'
    },
    sctnr:{
	display:'flex',
	flexDirection:'row',
	alignItems: 'center',
	backgroundColor:'#fff',
    },
    actnr:{
        display:'flex',
        flexDirection:'row',
	justifyContent:'space-between',
        alignItems: 'center',
	borderBottomWidth:1,
	borderColor:'#dedede',
        backgroundColor:'#fff',
    },
    rtgbg:{
	marginTop:3*w,
	backgroundColor:'#fff',
	display:'flex',
	borderBottomWidth:-1
    },
    shop:{
	height:15*w,
	width:15*w,
	borderWidth:0.1*w,
	borderColor:'#aaa',
	borderRadius:5,
	resizeMode:'contain',
	margin:4.2*w

    },
    tf:{
	fontSize:5*w,
	marginLeft:3.8*w
    },
    extra:{
	margin:4.2*w,
	fontSize:3.8*w,
	color:'#666'
    },
    listViewStyle:{
        flexDirection:'column',
    },
    btn:{
	marginTop:5*w,
	marginBottom:5*w,	
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	backgroundColor:'#fff'
    },
    btnf:{
	margin:5*w,
	fontSize:5*w,
	color:color
    }
})

export default style
