
import {
    Platform, PixelRatio, Dimensions,AsyncStorage
} from 'react-native'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export const resizeScale = ()=>{
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

export const fs = ()=> Platform.OS ==='ios'?
    resizeScale():
    PixelRatio.get()/PixelRatio.getFontScale()

AsyncStorage.setItem('fts',fs().toString())
AsyncStorage.setItem('url','http://192.168.1.105:6262')




