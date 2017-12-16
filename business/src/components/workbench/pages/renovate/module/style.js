
import {css,deviceWidth} from 'init'

const style={
    ctn:{
	height:deviceWidth/100*55,
	margin:css.f1/14*5,
	marginTop:deviceWidth/100*5,
	borderWidth:1,
	borderColor:'#666'
    },
    tt:{
	display:'flex',
	flex:1,
	alignItems:'center',
	justifyContent:'center'
    },
    t:{
	fontSize:css.f1,
	margin:css.f1/14*5,
    },
    btnw:{
	display:'flex',
	flex:1,
	flexDirection:'row'
    }
}

export default style
