import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    ctnr:{
        display:'flex',
	flexDirection:'row',
	height:13,
	backgroundColor:'#fff',
	borderColor:'#ddd',
	borderBottomWidth:0.1
    },
    btn:{
	display:'flex',
	flex:1,
	width:100/4,
	justifyContent:'center',
	alignItems:'center'
    },
    bfw:{
	display:'flex',
	justifyContent:'center',
	paddingLeft:3.8,
	paddingRight:3.8,	
	flex:1,
    },
    bfwTap:{
	borderBottomWidth:1.5,
	borderColor:'#4283a1'
    },
    bf:{
	fontSize:18,
	color:'#707070'
    },
    bfTap:{
	color:'#4283a1'
    }
})

export default style
