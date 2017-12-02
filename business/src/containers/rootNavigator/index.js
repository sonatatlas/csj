import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import RootTabs from '../rootTabs'


const RootNavigator = StackNavigator({
    Tabs:{
	screen: RootTabs,
    }
});

export default RootNavigator;
