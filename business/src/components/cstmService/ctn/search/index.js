
//tabs.js

import React from 'react';
import {
    View, Text, TextInput,
    TouchableOpacity
} from 'react-native';

import s from './style'

const Search = () => (
	<View style={s.ctnr}>
	<View style={s.tiw}>
	<TextInput style={s.ti} placeholder={'搜索'} />
	</View>	
  </View>
);

export default Search
