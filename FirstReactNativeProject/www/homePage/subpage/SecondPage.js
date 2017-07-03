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
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 != r2}),
            initProject: true,//初始化加载界面
            refreshing: false,//是否正在刷新界面
            currentpage: 1 //当前页面
        };
    }

    //获取数据
    componentWillMount() {
        window.UMNative.onEvent("HomeDeallist");
        this.getDealList()
    }

    //获取表单数据
    getDealList() {
        this.setState({...this.state, refreshing: true});
        window.netWork.fetchData("api/v4/deals/search", {page: 8}, 'GET', {"Accept": "application/json"})
            .then((response)=> {
                return response.json()
            })
            .then((responseData)=> {
                this.setState({...this.state, refreshing: false});
                dealDescription = responseData.meta;
                dealList = responseData.deals;
                this.setState({dataSource: this.state.dataSource.cloneWithRows(dealList), initProject: false});
            }).catch((error)=> {
            if (error) {
                console.log("============================" + error);
            }
        });
    }


    //渲染listview的行函数
    renderEveryRow(deal, sectionId, rowId) {
        console.log("==============propsnejuga========="+JSON.stringify(deal));
        if (rowId % 5 == 0) {
            return (
                <TouchableOpacity onPress={()=> {
                    alert(deal.name)
                }}>
                    <View>
                        <Image source={{uri: deal.sector_image_path}} style={exclusiveProjectStyle.exclusiveImageStyle}>
                            <Image source={require('./../../images/300x62_CH_logo_ok.png')}
                                   style={exclusiveProjectStyle.exclusiveImageLabelStyle}/>
                        </Image>
                        <ProjectSumma title={deal.display_name} country={deal.country_name} revenue={deal.revenue} tags={deal.tags} sectors={deal.sectors}/>
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity onPress={()=>{alert(deal.name)}}>
                    <View>
                        <View style={exclusiveProjectStyle.projectProjessStyle}>
                            <Text>卖房考虑出售</Text>
                            <Text>4月22日</Text>
                        </View>
                        <ProjectSumma title={deal.display_name} country={deal.country_name} revenue={deal.revenue} tags={deal.tags} sectors={deal.sectors}/>
                    </View>
                </TouchableOpacity>
            );
        }
    }

    //获取上一页的数据
    getPrePage() {
        if (dealDescription.is_first_page) {
            ToastAndroid.show("当前为首页", ToastAndroid.SHORT);
        } else {
            this.setState({...this.state, refreshing: true, currentpage: this.state.currentpage - 1}, ()=> {
                window.netWork.fetchData("api/v4/deals/search", {page: this.state.currentpage}, 'GET', {"Accept": "application/json"})
                    .then((response)=> {
                        return response.json()
                    })
                    .then((responseData)=> {
                        this.setState({...this.state, refreshing: false});
                        dealDescription = responseData.meta;
                        dealList = responseData.deals;
                        this.setState({dataSource: this.state.dataSource.cloneWithRows(dealList), initProject: false});
                    }).catch((error)=> {
                    if (error) {
                        console.log("============================" + error);
                    }
                });
            });
        }
    }

    //获取下一页的数据
    getNextPage() {
        if (dealDescription.is_last_page) {
            ToastAndroid.show("当前为尾页", ToastAndroid.SHORT);
        } else {
            this.setState({...this.state, refreshing: true, currentpage: this.state.currentpage + 1}, ()=> {
                window.netWork.fetchData("api/v4/deals/search", {page: this.state.currentpage}, 'GET', {"Accept": "application/json"})
                    .then((response)=> {
                        return response.json()
                    })
                    .then((responseData)=> {
                        this.setState({...this.state, refreshing: false});
                        dealDescription = responseData.meta;
                        dealList = responseData.deals;
                        this.setState({dataSource: this.state.dataSource.cloneWithRows(dealList), initProject: false});
                    }).catch((error)=> {
                    if (error) {
                        console.log("============================" + error);
                    }
                });
            });
        }
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
                <View style={{flex: 1}}>
                    <ListView
                        renderRow={this.renderEveryRow.bind(this)}
                        dataSource={this.state.dataSource}
                        showsVerticalScrollIndicator={false}
                        style={{marginBottom: 10}}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={()=> {
                                    this.getDealList();
                                }}
                            />
                        }
                    />
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
