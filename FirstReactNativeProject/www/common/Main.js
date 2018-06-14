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
    Alert,
    NativeModules
} from 'react-native'
import HomePage from '../homePage/HomePage.js'
import ProfilePage from '../profile/Profilepage.js'
import NewsPage from '../newspage/Newspage.js'
import TabNavigator from 'react-native-tab-navigator'
import DealDetail from './../homePage/DealDetail.js'
import LearnMore from './../profile/LearnMore.js'
import AudioPlayer from './../profile/AudioPlayer.js'
import HobbySetting from './../profile/hobbysetting/HobbySetting.js'
import SetLanguage from './../profile/Setlanguage.js'
import Recommend from './../recommend/Recommend.js'
import Flower from './../flower/Flower.js'
import I18n from './../common/I18n.js'
import Login from './../profile/login/Login.js'
import CountryPicker from './../profile/login/SelectCountryPicker/CountryPicker.js'
import NewsDetail from './../common/NewsDetail.js'

import JPushModule from 'jpush-react-native'
import {Network} from './../common/Network.js'
import ProjectFlashHomePage from './../homePage/ProjectFlashHomePage.js'

//导入事件变量
var BackboneEvents=require('backbone-events-standalone');
//创建全局的时间变量
window.EventBus=BackboneEvents.mixin({});
window.netWork=new Network();
window.i18n=new I18n();
window.UMNative=require('react-native').NativeModules.UmengNativeModule;
var initialRouters=[{name:"tab",index:0}];



export default class Main extends Component
{
    constructor(props)
    {
        super(props);
        console.log("===========all redux state===================="+JSON.stringify(window.store.getState()));
        this.navigator=null;
        this.state={
            selectedTab:"profile"
        }
        JPushModule.initPush();
        JPushModule.getInfo((device)=>{
            console.log("We get device info:"+JSON.stringify(device));
        })
        JPushModule.getRegistrationID((res)=>{
            console.log("We get register id:"+res);
        })
    }

    componentWillMount() {
        window.UMNative.onEvent("LaunchApp");
    }


    componentDidMount() {
        if(null!=this.navigator)
        {
            console.log("============this.navigator================");
        }
        //点击打开notifycation时候的监听
        JPushModule.addReceiveOpenNotificationListener((message)=>{
            var newMessage=JSON.parse(message.extras);
            Alert.alert("您有新的消息,是否查看:",newMessage.title,[{text:"确定",onPress:()=>{
                this.navigator.push({name:"NewsDetail",path:newMessage.content});
            }},{text:"取消",onPress:()=>{}}]);
        })
        //接收到推送的时候的监听
        JPushModule.addReceiveNotificationListener((msg)=>{
            var newMessage=JSON.parse(msg.extras);
            Alert.alert("您有新的消息,是否查看:",newMessage.title,[{text:"确定",onPress:()=>{
                this.navigator.push({name:"NewsDetail",path:newMessage.content});
                window.UMNative.onEvent("OpenJpushNews");
            }},{text:"取消",onPress:()=>{}}]);
        })
    }
    render()
    {
        return(
            <Navigator
                ref={ref=>{this.navigator=ref}}
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
                                    <ProjectFlashHomePage navigator={navigator}></ProjectFlashHomePage>
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
                        return(<Login navigator={navigator} router={route}/>);
                    }
                    if(route.name=="NewsDetail")
                    {
                        return(<NewsDetail navigator={navigator} router={route} fullPath={route.path}/>);
                    }
                    if(route.name=="countryPicker")
                    {
                        return(<CountryPicker navigator={navigator} router={route}/>);
                    }
                    if(route.name=="audioplayer")
                    {
                        return(<AudioPlayer navigator={navigator} router={route}/>);
                    }
                }}
            />
        );
    }

}
