import {StyleSheet} from 'react-native'
import {h,w,color} from '../../../global'

const style = StyleSheet.create({
    ctnr:{
        display:'flex',
	flexDirection:'row',
	justifyContent:'space-around',
	alignItems:'center',
	height:38*w,
	backgroundColor:color,
    },
    nctnr:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    number:{
        color:'#eee',
        fontSize:16*w,
    },
    label:{
        color:'#eee',
        fontSize:5*w
    },
    listViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
	justifyContent:'space-around',
        alignItems:'center'
    }
})

export default style
