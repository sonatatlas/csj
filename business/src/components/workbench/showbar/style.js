import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    ctnr:{
        display:'flex',
	flexDirection:'row',
	justifyContent:'space-around',
	alignItems:'center',
	height:128,
	backgroundColor:'#4283a1',
    },
    nctnr:{
        display:'flex',
	flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    number:{
        color:'#eee',
        fontSize:40,
	margin:12
    },
    label:{
        color:'#eee',
        fontSize:16
    },
    listViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
	justifyContent:'space-around',
        alignItems:'center'
    }
})

export default style
