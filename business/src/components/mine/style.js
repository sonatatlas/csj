//cstmService.js
import {StyleSheet} from 'react-native'
import {css} from 'init'
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
	height:48,
	width:48,
	borderWidth:0.1,
	borderColor:'#aaa',
	borderRadius:5,
	resizeMode:'contain',
	margin:12

    },
    tf:{
	fontSize:css.f2,
	marginLeft:12
    },
    extra:{
	margin:12,
	fontSize:css.f2,
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
	margin:12,
	fontSize:css.f2,
	color:css.color
    }
})

export default style
