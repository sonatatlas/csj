//cstmService.js
import {StyleSheet} from 'react-native'

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
	marginTop:3,
	backgroundColor:'#fff',
	display:'flex',
	borderBottomWidth:-1
    },
    shop:{
	height:15,
	width:15,
	borderWidth:0.1,
	borderColor:'#aaa',
	borderRadius:5,
	resizeMode:'contain',
	margin:4.2

    },
    tf:{
	fontSize:5,
	marginLeft:3.8
    },
    extra:{
	margin:4.2,
	fontSize:3.8,
	color:'#666'
    },
    listViewStyle:{
        flexDirection:'column',
    },
    btn:{
	marginTop:5,
	marginBottom:5,	
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	backgroundColor:'#fff'
    },
    btnf:{
	margin:5,
	fontSize:5,
	color:'#4283a1'
    }
})

export default style
