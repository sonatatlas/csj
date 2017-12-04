import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    ctnr:{
        display:'flex',
	flex:1,
	alignItems:'center',
	backgroundColor:'#fff'
    },
    sf:{
	fontSize:18,
	color:'#aaa'
    },
    tb:{
	display:'flex',
	flex:1,
	justifyContent:'center',
	alignItems:'center'
    },
    btn:{
	width:30,
	height:10,	
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
