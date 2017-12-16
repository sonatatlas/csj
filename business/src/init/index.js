
import {
    Platform, PixelRatio, Dimensions, StyleSheet
} from 'react-native'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const resizeScale = ()=>{
    if (PixelRatio.get() === 2){
	if (deviceWidth < 360) {
	    return 0.95
	}else if (deviceHeight < 667) {
	    return 1
	}else if (deviceHeight >= 667 && deviceHeight <= 735) {
	    return 1.15;
	}
	return 1.25;
    }else if(PixelRatio.get() === 3){
	return 1.27;
    }
}

const fs = ()=> Platform.OS ==='ios'?
    resizeScale():
      PixelRatio.get()/PixelRatio.getFontScale()

const SERVER = 'http://172.20.10.3:6262/business'

const color = '#4283a1'

const css ={
    color:'#4283a1',
    dark: '#666',
    light:'#fff',
    f1:14*fs(),
    f2:16*fs(),
    f3:36*fs(),
    f4:12*fs(),
    f5:10*fs(),
    tabIcon : {
	width:22,
	height:22
    },
    headerIcon:{
	margin:12,
	height:20,
	width:20
    },
    backIcon:{
	margin:12,
	height:30,
	width:20
    },    
    workbenchIcon:{
	width:32,	
	height:32
    }
}




module.exports={
    deviceWidth,css,SERVER
}
