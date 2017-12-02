import React from 'react';
import { View } from 'react-native';

import ShowBar from './showbar'
import Modules from './modules'
import s from './style.js'

const Workbench = () => (
	<View style={s.ctnr}>
	<ShowBar />
	<Modules />
	</View>
);

export default Workbench
