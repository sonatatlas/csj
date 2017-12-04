import {StyleSheet} from 'react-native'


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
	height:33,
	width:33,
	backgroundColor:'#fff',
	borderColor:'#eee',
	borderWidth:1
    },
    icon:{
	height:12,
	width:12
    },
    label:{
	marginTop:4,
        color:'#999',
        fontSize:5
    },
    listViewStyle:{
	flexDirection:'row',  
        flexWrap:'wrap',
	alignItems:'center'
    }
})

export default style
