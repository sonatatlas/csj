import React from 'react';
import { StackNavigator } from 'react-navigation';


import RootTabs from '../rootTabs'
import OmanagerScreen from '../workbench/omanager'
import ImanagerScreen from '../workbench/imanager'
import PmanagerScreen from '../workbench/pmanager'
import StatiticsScreen from '../workbench/statitics'
import RenovateScreen from '../workbench/renovate'
import MessageScreen from '../header/message'
import SearchScreen from '../header/search'
import QRcodeScreen from '../header/qrcode'
import RecordScreen from '../header/record'
import ItemCategoryScreen from '../workbench/imanager/itemCategory'
import AddItemScreen from '../workbench/imanager/addItem'

const RootNavigator = StackNavigator({
    Tabs:{screen: RootTabs},
    Omanager:{screen: OmanagerScreen},
    Imanager:{screen: ImanagerScreen},
    Pmanager:{screen: PmanagerScreen},
    Renovate:{screen: RenovateScreen},    
    Statitics:{screen: StatiticsScreen},
    Message:{screen: MessageScreen},
    QRcode:{screen: QRcodeScreen},        
    Search:{screen: SearchScreen},
    Record:{screen: RecordScreen},
    ItemCategory: {screen: ItemCategoryScreen},
    AddItem: { screen: AddItemScreen }
});

export default RootNavigator;
