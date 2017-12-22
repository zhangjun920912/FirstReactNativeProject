/**
 * Created by zhangjunimust on 2017/6/30.
 */
import React, {Component} from 'react'
import {
    ListView,
    Image,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native'

//noinspection JSUnresolvedVariable
import {TabNavigator, StackNavigator} from 'react-navigation'
import FirstPage from './subpage/FirstPage.js'
import SecondPage from './subpage/SecondPage.js'
import ThirdPage from './subpage/ThirdPage.js'
import FourthPage from './subpage/FourthPage.js'
import FivePage from './subpage/FivePage.js'
import DealDetail from './DealDetail.js'

var fullScreenWidth = Dimensions.get('window').width;
const FirstNavigator=StackNavigator({
    DealDetail:{screen:DealDetail},
    FirstPage:{screen:FirstPage}
},{
    initialRouteName:'FirstPage',
    navigationOptions:{
        headerStyle:{height:0}
    }
});
const MainScreenNavigation = TabNavigator({
    First: {screen: FirstNavigator, navigationOptions: {tabBarLabel: '我的订阅'}},
    Second: {screen: SecondPage, navigationOptions: {tabBarLabel: '共享项目'}},
    Third: {screen: ThirdPage, navigationOptions: {tabBarLabel: '投资情报'}},
    Fourth: {screen: FourthPage, navigationOptions: {tabBarLabel: '全部项目'}},
}, {
    initialRouteName: 'First',
    tabBarPosition: 'top',
    tabBarOptions: {
        scrollEnabled: false,
        showIcon: true,
        style: {backgroundColor: '#141414'},
        labelStyle: {color: '#ffffff', fontSize: 16},
        indicatorStyle: {height: 4, backgroundColor: '#ffffff'}
    }
});

export default class ProjectFlashHomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <MainScreenNavigation/>
        );
    }
}
