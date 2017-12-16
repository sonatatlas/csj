import {StyleSheet} from 'react-native'
import {css,deviceWidth} from 'init'

const style = StyleSheet.create({
    ctnr:{
        display:'flex',
        flexDirection:'row',
        height:css.f3,
        backgroundColor:'#fff',
        borderColor:'#ddd',
        borderBottomWidth:1
    },
    btn:{
        display:'flex',
        width:deviceWidth/3,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    bfw:{
        display:'flex',
        justifyContent:'center',
        paddingLeft:12,
        paddingRight:12,
        flex:1,
    },
    bfwTap:{
        borderBottomWidth:2,
        borderColor:'#68a8c8'
    },
    bf:{
        fontSize:css.f1
    },
    bfTap:{
        color:'#4283a1'
    }
})

export default style
