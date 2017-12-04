import {StyleSheet} from 'react-native'
import {h,w} from '../../../global'

const style = StyleSheet.create({
    ctnr:{
        display:'flex',
	flexDirection:'row',
	height:13
	    *w,
	backgroundColor:'#fff',
	borderColor:'#ddd',
	borderBottomWidth:0.1*w
    },
    btn:{
	display:'flex',
	width:50*w,		
	flex:1,
	justifyContent:'center',
	alignItems:'center'
    },
    bfw:{
	display:'flex',
	justifyContent:'center',
	paddingLeft:3.8*w,
	paddingRight:3.8*w,	
	flex:1,
    },
    bfwTap:{
	borderBottomWidth:1.5,
	borderColor:'#4283a1'
    },
    bf:{
	fontSize:18
    },
    bfTap:{
	color:'#4283a1'
    }
})

export default style
