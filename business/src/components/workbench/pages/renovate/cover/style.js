
import {css,deviceWidth} from 'init'

const style={
    ctn:{
	height:deviceWidth/100*50,
	margin:css.f1/14*5,
	marginTop:0,
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
	fontSize:css.f1
    }
}

export default style
