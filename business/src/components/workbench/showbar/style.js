import {StyleSheet} from 'react-native'
import {css,deviceWidth} from 'init'

const style = StyleSheet.create({
    ctnr:{
        display:'flex',
	flexDirection:'row',
	justifyContent:'space-around',
	alignItems:'center',
	height:128,
	backgroundColor:css.color,
    },
    nctnr:{
        display:'flex',
	flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    number:{
        color:css.light,
        fontSize:css.f3,
	margin:12
    },
    label:{
        color:css.light,
        fontSize:css.f1
    },
    listViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
	justifyContent:'space-around',
        alignItems:'center'
    }
})

export default style
