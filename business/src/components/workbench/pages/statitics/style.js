//cstmService.js
import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    ctnr:{
	marginTop:8,	
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
    label:{
	fontSize:15,
	margin:12,
	color:'#666'
    },
    info:{
	margin:12,
	fontSize:15,
	color:'#333'
    },
    listViewStyle:{
        flexDirection:'column',
    },
})

export default style
