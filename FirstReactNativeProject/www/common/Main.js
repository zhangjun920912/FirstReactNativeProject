/**
 * Created by zhangjunimust on 17/3/17.
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Navigator,
} from 'react-native'
import HomePage from '../homePage/HomePage.js'
import ProfilePage from '../profile/Profilepage.js'
import NewsPage from '../newspage/Newspage.js'
import TabNavigator from 'react-native-tab-navigator'
import DealDetail from './../homePage/DealDetail.js'
import LearnMore from './../profile/LearnMore.js'
import HobbySetting from './../profile/hobbysetting/HobbySetting.js'
import SetLanguage from './../profile/Setlanguage.js'
import Recommend from './../recommend/Recommend.js'
import Flower from './../flower/Flower.js'
import I18n from './../common/I18n.js'
import Login from './../profile/login/Login.js'

//导入事件变量
var BackboneEvents=require('backbone-events-standalone');
//创建全局的时间变量
window.EventBus=BackboneEvents.mixin({});
window.i18n=new I18n();
var initialRouters=[{name:"tab",index:0}];


export default class Main extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            selectedTab:"home"
        }
    }
    render()
    {
        return(
            <Navigator
                initialRoute={initialRouters[0]}
                configureScene={(route,routeStack)=>({...Navigator.SceneConfigs.HorizontalSwipeJump,gestures:{pop:false}})}
                initialRouteStack={initialRouters}
                renderScene={(route,navigator)=>{
                    if(route.name=="tab")
                    {
                        return(
                            <TabNavigator>
                                <TabNavigator.Item
                                    selected={this.state.selectedTab==='news'}
                                    title={window.i18n.translate("News")}
                                    renderIcon={()=><Image source={require('./../images/News_L@2x.png')}/>}
                                    renderSelectedIcon={()=><Image source={require('./../images/News_F@2x.png')}/>}
                                    onPress={()=>this.setState({selectedTab:'news'})}
                                >
                                    <NewsPage navigator={navigator}></NewsPage>
                                </TabNavigator.Item>
                                <TabNavigator.Item
                                    selected={this.state.selectedTab==='home'}
                                    title={window.i18n.translate("Homes")}
                                    renderIcon={()=><Image source={require('./../images/Deals_L@2x.png')}/>}
                                    renderSelectedIcon={()=><Image source={require('./../images/Deals_F@2x.png')}/>}
                                    onPress={()=>this.setState({selectedTab:'home'})}
                                >
                                    <HomePage navigator={navigator}></HomePage>
                                </TabNavigator.Item>
                                <TabNavigator.Item
                                    selected={this.state.selectedTab==='flower'}
                                    title={window.i18n.translate("Flowers")}
                                    renderIcon={()=><Image source={require('./../images/Flower_L.png')}/>}
                                    renderSelectedIcon={()=><Image source={require('./../images/Flower_F.png')}/>}
                                    onPress={()=>this.setState({selectedTab:'flower'})}
                                >
                                    <Flower navigator={navigator}></Flower>
                                </TabNavigator.Item>
                                <TabNavigator.Item
                                    selected={this.state.selectedTab==='recommend'}
                                    title={window.i18n.translate("Recommend")}
                                    renderIcon={()=><Image source={require('./../images/Recommended_L@2x.png')}/>}
                                    renderSelectedIcon={()=><Image source={require('./../images/Recommended_F@2x.png')}/>}
                                    onPress={()=>this.setState({selectedTab:'recommend'})}
                                >
                                    <Recommend navigator={navigator}></Recommend>
                                </TabNavigator.Item>
                                <TabNavigator.Item
                                    selected={this.state.selectedTab==='profile'}
                                    title={window.i18n.translate("Profits")}
                                    renderIcon={()=><Image source={require('./../images/Account_L@2x.png')}/>}
                                    renderSelectedIcon={()=><Image source={require('./../images/Account_F@2x.png')}/>}
                                    onPress={()=>this.setState({selectedTab:'profile'})}
                                >
                                    <ProfilePage navigator={navigator}></ProfilePage>
                                </TabNavigator.Item>
                            </TabNavigator>);

                    }
                    if(route.name=="dealdetail") {
                        return (<DealDetail navigator={navigator} router={route} deal={route.deal}/>);
                    }
                    if(route.name=="learnmore") {
                        return (<LearnMore navigator={navigator} router={route}/>);
                    }
                    if(route.name=="setlanguage") {
                        return (<SetLanguage navigator={navigator} router={route}/>);
                    }
                    if(route.name=="hobbysetting") {
                        return (<HobbySetting navigator={navigator} router={route}/>);
                    }
                    if(route.name=="login")
                    {
                        return(<Login navigator={navigator} router={route}></Login>);
                    }
                }}
            />
        );
    }

}
