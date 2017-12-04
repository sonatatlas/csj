import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';


import RootTabs from '../rootTabs'
import OmanagerScreen from '../workbench/omanager'
import ImanagerScreen from '../workbench/imanager'
import PmanagerScreen from '../workbench/pmanager'
import StatiticsScreen from '../workbench/statitics'

const RootNavigator = StackNavigator({
    Tabs:{screen: RootTabs},
    Omanager:{screen: OmanagerScreen},
    Imanager:{screen: ImanagerScreen},
    Pmanager:{screen: PmanagerScreen},
    Statitics:{screen: StatiticsScreen}    
});

export default RootNavigator;
