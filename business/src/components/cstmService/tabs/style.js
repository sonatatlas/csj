import {StyleSheet} from 'react-native'
import {h,w} from '../../../global'

const style = StyleSheet.create({
    ctnr:{
        display:'flex',
	flexDirection:'row',
	height:15*w,
	backgroundColor:'#eee',
    },
    btn:{
	width:50*w,
	display:'flex',
	flex:1,
	justifyContent:'center',
	alignItems:'center',
	borderBottomWidth:0.5,
	borderColor:'#ddd'
    },
    bf:{
	fontSize:18
    }
})

export default style
