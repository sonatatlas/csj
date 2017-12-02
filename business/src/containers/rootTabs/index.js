import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

import CstmService from '../cstmService'
import Workbench from '../workbench'
import App from '../profit'
import Mine from '../mine'

const RootTabs = TabNavigator({
    "微客服": {
	screen: CstmService,
    },
    "工作台": {
	screen: Workbench,
    },
    "收益":{
	screen:App
    },
    "我的":{
	screen:Mine
    }
},{
  tabBarOptions: {
    activeTintColor: '#1296db',
  }
});

export default RootTabs;
