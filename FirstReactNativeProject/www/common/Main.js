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
                configureScene={(route,routeStack)=>{Navigator.SceneConfigs.HorizontalSwipeJump}}
                initialRouteStack={initialRouters}
                renderScene={(route,navigator)=>{
                    if(route.name=="tab")
                    {
                        return(
                            <TabNavigator>
                                <TabNavigator.Item
                                    selected={this.state.selectedTab==='news'}
                                    title="News"
                                    renderIcon={()=><Image source={require('./../images/News_L@2x.png')}/>}
                                    renderSelectedIcon={()=><Image source={require('./../images/News_F@2x.png')}/>}
                                    onPress={()=>this.setState({selectedTab:'news'})}
                                >
                                    <NewsPage navigator={navigator}></NewsPage>
                                </TabNavigator.Item>
                                <TabNavigator.Item
                                    selected={this.state.selectedTab==='home'}
                                    title="Homes"
                                    renderIcon={()=><Image source={require('./../images/Deals_L@2x.png')}/>}
                                    renderSelectedIcon={()=><Image source={require('./../images/Deals_F@2x.png')}/>}
                                    onPress={()=>this.setState({selectedTab:'home'})}
                                >
                                    <HomePage navigator={navigator}></HomePage>
                                </TabNavigator.Item>
                                <TabNavigator.Item
                                    selected={this.state.selectedTab==='profile'}
                                    title="Profile"
                                    renderIcon={()=><Image source={require('./../images/Account_L@2x.png')}/>}
                                    renderSelectedIcon={()=><Image source={require('./../images/Account_F@2x.png')}/>}
                                    onPress={()=>this.setState({selectedTab:'profile'})}
                                >
                                    <ProfilePage navigator={navigator}></ProfilePage>
                                </TabNavigator.Item>

                            </TabNavigator>);

                    }

                }}
            />
        );
    }

}
