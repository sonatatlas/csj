//cstmService.js
import {StyleSheet} from 'react-native'
import { css } from 'init'

const style = StyleSheet.create({
    ctnr:{
	display:'flex',
	flex:1,
    },
    tabf:{
        fontSize:css.f1,
        margin:8
    },
    addItem:{
        padding:5,
        position:'absolute',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:css.light,
        width:'100%',
        bottom:0
    }
})

export default style
