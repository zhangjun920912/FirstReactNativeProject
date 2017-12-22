/**
 * Created by zhangjunimust on 2017/10/9.
 */
import React, {Component} from 'react'
import {
    Text,
    TextInput,
    View,
    Dimensions,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Alert,
    TouchableHighlight,
    TouchableNativeFeedback,
    Navigator,
    AsyncStorage,
    TouchableOpacity,
    ScrollView,
    ListView,
    ActivityIndicator,
    Platform,
    Animated,
    Modal,
    NetInfo,
    RefreshControl,
    DeviceEventEmitter,
    StatusBar,
    FlatList
} from 'react-native'
import {allCountriesList} from './countriesInfo'

const {width, height}=Dimensions.get('window');
var cca2 = ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CD", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "CI", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "XK", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "KP", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "CG", "RO", "RU", "RW", "RE", "BL", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "KR", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "ST", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "VI", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "EH", "YE", "ZM", "ZW", "AX"];
export default class CountryPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contriesInfo: null,
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2}),//项目列表展示
            country:""
        };
    }

    componentWillMount() {
        this.setState({...this.state, countriesInfo: allCountriesList,dataSource:this.state.dataSource.cloneWithRows(cca2)});
    }


    getItem(country) {
        return(
            <TouchableOpacity onPress={()=>{
                console.log("============country=========="+JSON.stringify(this.state.countriesInfo[country]));
                this.props.router.callback(this.state.countriesInfo[country]);
                this.props.navigator.pop();
            }}>
                <View style={{height: 40, alignItem: 'center', marginLeft: 20}}>
                    <View style={{height: 39, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={{uri: this.state.countriesInfo[country].flag}}
                               style={{height: 19, width: 25}}/>
                        <Text style={{marginLeft: 20}}>{this.state.countriesInfo[country].name.zho}</Text>
                    </View>
                    <View style={{height: 1, backgroundColor: '#E5E5E5', width: width}}/>
                </View>
            </TouchableOpacity>
        );
    }

    searchCountries(value)
    {
        var searchCountry=[];
        for(var iso in this.state.contriesInfo)
        {
            if(this.state.contriesInfo[iso].name.zho.indexOf("value")!=-1)
            {
                searchCountry.push(iso);
            }
        }
        if(value.length==0||value=="")
        {
            this.setState({...this.state,dataSource:this.state.dataSource.cloneWithRows(cca2)});
        }else{
            this.setState({...this.state,dataSource:this.state.dataSource.cloneWithRows(searchCountry)});
        }

    }

    render() {
        return (
            <View style={{backgroundColor: '#fff'}}>
                <View style={{height: 45, backgroundColor: '#204B7D', alignItems: 'center',flexDirection:'row',}}>
                    <TouchableOpacity onPress={()=> {
                        this.props.navigator.pop()
                    }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('./../../../images/whitecolorbackpre.png')}
                                   style={{marginLeft: 15}}/>
                            <Text style={{color: '#fff', fontSize: 18, marginLeft: 10}}>返回</Text>
                        </View>
                    </TouchableOpacity>
                    <TextInput
                        style={{flex:1,marginLeft:20,marginRight:5}}
                        autoCorrect={true}
                        placeholder={"输入国家名称搜索"}
                        placeholderTextColor={'#5B96DD'}
                        onChangeText={(value)=>{this.setState({...this.state,country:value},()=>{
                            this.searchCountries(value)
                        })}}
                        value={this.state.country}
                    />
                </View>
                <ListView
                    removeClippedSubviews={true}
                    dataSource={this.state.dataSource}
                    renderRow={this.getItem.bind(this)}
                />
            </View>
        );
    }
}
