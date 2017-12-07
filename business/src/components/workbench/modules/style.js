import {StyleSheet} from 'react-native'
import {css,deviceWidth} from 'init'

const style = StyleSheet.create({
    ctnr:{
        display:'flex',
	flex:1,
	flexDirection:'row',
	marginTop:1
    },
    nctnr:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
	width:deviceWidth/3,
	height:deviceWidth/3,
	backgroundColor:'#fff',
	borderColor:'#eee',
	borderWidth:1
    },
    icon:{
	height:40,
	width:40
    },
    label:{
	marginTop:12,
        color:css.dark,
        fontSize:css.f1*12/14
    },
    listViewStyle:{
	flexDirection:'row',  
        flexWrap:'wrap',
	alignItems:'center'
    }
})

export default style
