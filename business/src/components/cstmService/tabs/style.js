import {StyleSheet} from 'react-native'


const style = StyleSheet.create({
    ctnr:{
        display:'flex',
	flexDirection:'row',
	height:48,
	backgroundColor:'#fff',
	borderColor:'#ddd',
	borderBottomWidth:1
    },
    btn:{
	display:'flex',
	width:128,		
	flex:1,
	justifyContent:'center',
	alignItems:'center'
    },
    bfw:{
	display:'flex',
	justifyContent:'center',
	paddingLeft:12,
	paddingRight:12,	
	flex:1,
    },
    bfwTap:{
	borderBottomWidth:2,
	borderColor:'#68a8c8'
    },
    bf:{
	fontSize:15
    },
    bfTap:{
	color:'#4283a1'
    }
})

export default style
