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
    ToastAndroid
} from "react-native";
var screenHeight = Dimensions.get('window').height;
var screenWeight = Dimensions.get('window').width;
var dealDescription = null;
var dealList = null;

export default class HomePage extends Component {
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
        window.netWork.fetchData("api/v4/deals/search", null, 'GET', {"Accept": "application/json"})
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

    //监听语言发生变化
    componentDidMount() {
        window.EventBus.on('LanguageHasChanged', ()=> {
            console.log("======home======LanguageHasChanged=============")
        });
    }

    //获取项目的财务收入状况
    getRevenueInfo(dealDetail) {
        var revenue = null;
        var ebitda = null;
        var netprofit = null;
        if (dealDetail.revenue) {
            revenue = (<View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <Text>收入:</Text>
                <Text style={{color: '#3473BE'}}>{dealDetail.revenue}</Text>
            </View>);
        }
        if (dealDetail.ebitda) {
            ebitda = (<View style={{flexDirection: 'row', marginLeft: 12, justifyContent: 'flex-start'}}>
                <Text>EBITDA:</Text>
                <Text style={{color: '#3473BE'}}>{dealDetail.ebitda}</Text>
            </View>);
        }
        if (dealDetail.net_profit) {
            netprofit = (<View style={{flexDirection: 'row', marginLeft: 12, justifyContent: 'flex-start'}}>
                <Text>净利润:</Text>
                <Text style={{color: '#3473BE'}}>{dealDetail.net_profit}</Text>
            </View>);
        }
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {revenue}
                {ebitda}
                {netprofit}
            </View>);
    }

    //渲染listview的行函数
    renderEveryRow(deal) {
        return (
            <TouchableWithoutFeedback onPress={()=> {
                window.UMNative.onEvent("EnterDeallist");
                this.props.navigator.push({name: "dealdetail", deal: deal});
            }}>
                <View>
                    <View style={{backgroundColor: '#E3E3E3', height: 1}}/>
                    <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10, alignItems: 'center'}}>
                        <Image source={{uri: deal.sector_image_path}}
                               style={{height: screenWeight / 4, width: screenWeight / 4}}/>
                        <View style={{marginLeft: 20}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontSize: 20, color: '#1A1A1A'}}>{deal.country_name}</Text>
                                <Text style={{marginLeft: 12, fontSize: 18, color: '#1A1A1A'}}>项目ID:{deal.id}</Text>
                            </View>
                            <Text style={{color: '#1A1A1A', fontSize: 16}}>{deal.display_name}</Text>
                            <View style={{marginTop: 0}}>
                                {this.getRevenueInfo(deal)}
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>)
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
                <View style={{flex: 1, marginLeft: 20, marginRight: 20, marginTop: 18}}>
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
                <View style={{
                    height: 60,
                    backgroundColor: 'rgba(60,60,255,0.6)',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingRight: 20
                }}>
                    <TouchableOpacity onPress={()=> {
                        this.getPrePage();
                    }}>
                        <View style={{
                            height: 40,
                            width: 80,
                            backgroundColor: '#A946AE',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}><Text style={{color: '#ffffff', fontSize: 16}}>上一页</Text></View>
                    </TouchableOpacity>
                    <Text style={{fontSize: 22, color: '#ffffff', alignSelf: 'center'}}>项目列表</Text>
                    <TouchableOpacity onPress={()=> {
                        this.getNextPage();
                    }}>
                        <View style={{
                            height: 40,
                            width: 80,
                            backgroundColor: '#A946AE',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}><Text style={{color: '#ffffff', fontSize: 16}}>下一页</Text></View>
                    </TouchableOpacity>
                </View>
                {content}
            </View>);
    }
}
