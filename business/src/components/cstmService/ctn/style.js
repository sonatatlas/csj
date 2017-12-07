import {StyleSheet} from 'react-native'
import  {css,deviceWidth} from 'init'

const style = StyleSheet.create({
    ctnr:{
        display:'flex',
	flex:1,
	alignItems:'center',
	backgroundColor:'#fff'
    },
    tiw:{
	display:'flex',
	marginTop:12,
        width:0.9*deviceWidth,
        backgroundColor:'#ececec',
        borderRadius:5
    },
    ti:{
        fontSize:css.f1,
	margin:12,
	color:'#999',
        marginLeft:3
    },    
    sf:{
	fontSize:css.f1,
	color:'#aaa'
    },
    tb:{
	display:'flex',
	flex:1,
	justifyContent:'center',
	alignItems:'center'
    },
    btn:{
	width:128,
	height:36,
        display:'flex',
	justifyContent:'center',
	alignItems:'center',
	borderWidth:1,
	borderColor:'#aaa',
	borderRadius:5,
	marginTop:30,
	marginBottom:80
    }
})

export default style
