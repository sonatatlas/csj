import {StyleSheet} from 'react-native'
import {h,w} from '../../../../global'

const style = StyleSheet.create({
    ctnr:{
        display:'flex',
	margin:2*w,
	justifyContent:'center',
	alignItems:'center',
    },
    tiw:{
	height:8*w,
	width:90*w,
	backgroundColor:'#ececec',
	borderRadius:5
    },
    ti:{
	height:8*w,
	width:80*w,
	fontSize:5*w,
	marginLeft:3
    }
})

export default style
