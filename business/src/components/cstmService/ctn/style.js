import {StyleSheet} from 'react-native'


const style = StyleSheet.create({
    ctnr:{
        display:'flex',
	flex:1,
	alignItems:'center',
	backgroundColor:'#fff'
    },
    tiw:{
	display:'flex',
	marginTop:8,
        width:90,
        backgroundColor:'#ececec',
        borderRadius:5
    },
    ti:{
        fontSize:15,
	margin:8,
	color:'#999',
        marginLeft:3
    },    
    sf:{
	fontSize:15,
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
