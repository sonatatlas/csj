import React from 'react';
import { View } from 'react-native';

import ShowBar from './showbar'
import Modules from './modules'
import s from './style.js'

const Workbench = ({navigate}) => (
	<View style={s.ctnr}>
	<ShowBar navigate={navigate} />
	<Modules navigate={navigate} />
	</View>
);

export default Workbench
