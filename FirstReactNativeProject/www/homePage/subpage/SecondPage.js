/**
 * Created by zhangjunimust on 17/3/17.
 */
import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    ListView,
    TouchableWithoutFeedback,
    ActivityIndicator,
    TouchableOpacity,
    RefreshControl,
    ToastAndroid,
    StyleSheet,
} from "react-native";
import ProjectSumma from './../subpage/ProjectSumma.js'
var screenHeight = Dimensions.get('window').height;
var screenWeight = Dimensions.get('window').width;
var dealDescription = null;
var dealList = null;

export default class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initProject: false,//初始化加载界面
        };
    }

    //获取数据
    componentWillMount() {
        window.UMNative.onEvent("HomeDeallist");
    }






    //渲染函数
    render() {
        var content = null;
        if (this.state.initProject) {
            content = (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator
                        size={"large"}
                        color={'rgba(60,60,255,0.6)'}
                        animating={true}
                    />
                    <Text style={{marginTop: 10, fontSize: 18}}>正在加载...</Text>
                </View>);
        } else {
            content = (
                <View>
                    <Text>输入框</Text>
                </View>
            );
        }
        return (
            <View style={{height: screenHeight}}>
                <TouchableOpacity style={{
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 60
                }} onPress={()=> {
                    alert("设置我的订阅信息")
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image source={require('./../../images/Account_F@2x.png')} style={{height: 20, width: 20}}/>
                        <Text>设置订阅项目信息</Text>
                    </View>
                </TouchableOpacity>
                {content}
            </View>);
    }
}

const exclusiveProjectStyle = {
    exclusiveImageStyle: {
        width: '100%',
        height: screenHeight / 5,
        alignItems: 'center'
    },
    exclusiveImageLabelStyle: {
        width: screenWeight / 5,
        height: 30,
        marginTop: 2
    },
    projectProjessStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginRight: 15,
        marginLeft: 15
    }
};
