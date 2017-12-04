//cstmService.js
import {StyleSheet} from 'react-native'
import {h,w,color} from '../../../../global'

const style = StyleSheet.create({
    ctnr:{
	marginTop:3.8*w,	
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
	fontSize:4.2*w,
	margin:4.2*w,
	color:'#666'
    },
    info:{
	margin:4.2*w,
	fontSize:5*w,
	color:'#333'
    },
    listViewStyle:{
        flexDirection:'column',
    },
})

export default style
