import {StyleSheet} from 'react-native'
import {h,w} from '../../../global'

const style = StyleSheet.create({
    ctnr:{
        display:'flex',
	flex:1,
	flexDirection:'row',
	marginTop:1*h
    },
    nctnr:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
	height:33*w,
	width:33*w,
	backgroundColor:'#fff',
	borderColor:'#eee',
	borderWidth:1
    },
    icon:{
	height:12*w,
	width:12*w
    },
    label:{
	marginTop:4*w,
        color:'#999',
        fontSize:5*w
    },
    listViewStyle:{
	flexDirection:'row',  
        flexWrap:'wrap',
	alignItems:'center'
    }
})

export default style
