
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
	margin:12,
	marginLeft:20,
	marginRight:20
    },
    barf2:{
	margin:12,
	marginLeft:30,
	marginRight:20
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
    },
    tabf:{
        fontSize:css.f1,
        margin:8
    },
    addItem:{
        padding:5,
        position:'absolute',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:css.light,
        width:'100%',
        bottom:0,
    }
})

export default style

