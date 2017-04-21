/**
 * Created by zhangjunimust on 17/3/18.
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    WebView,
    AsyncStorage
} from 'react-native'
import BaseComponent from './../common/BaseComponent.js'
import {connect} from 'react-redux'
import * as constants from './../reduxapp/constants.js'
var screenHeight=Dimensions.get('window').height;
var screenWeight=Dimensions.get('window').width;

class Setlanguage extends BaseComponent
{
    constructor(props)
    {
        super(props);
        this.state={
            chinese:true
        };
    }

    componentWillMount() {
        AsyncStorage.getItem("language",(error,result)=>{
            if(null!=result)
            {
                console.log("=========language==========="+result);
                if("cn"==result)
                {
                    this.setState({...this.state,chinese:true});
                }else{
                    this.setState({...this.state,chinese:false});
                }
            }
        });
    }

    componentDidMount() {
        setTimeout(()=>{this.getLanguageStyle();},10)
    }

    //根据语言设置进行设置界面显示方式
    getLanguageStyle()
    {
        console.log("==========getLanguageStyle============"+this.state.chinese);
        if(this.state.chinese)
        {
            this.refs.english.setNativeProps({
                style:{
                    opacity:0
                }
            });
            this.refs.chinese.setNativeProps({
                style:{
                    opacity:1
                }
            });
        }else{
            this.refs.chinese.setNativeProps({
                style:{
                    opacity:0
                }
            });
            this.refs.english.setNativeProps({
                style:{
                    opacity:1
                }
            });
        }
    }
    //修改语言
    changeLanguageTo(isEnglish)
    {
        window.UMNative.onEvent("ChangeLanguage");
        if(isEnglish)
        {
            window.i18n.changeToEnglish().then(()=>{this.props.languageChange()});
        }else{
            window.i18n.changeToChinese().then(()=>{this.props.languageChange()});
        }
    }

    render()
    {
        return(
            <View style={{height:screenHeight}}>
                <View style={{height:60,backgroundColor:'rgba(60,255,60,0.6)',alignItems:'center',flexDirection:'row',paddingRight:screenWeight/12}}>
                    <TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('./../images/whitecolorbackpre.png')} style={{marginLeft:20}}/>
                            <Text style={{color:'#ffffff',marginLeft:8}}>{this.i18n["Back"]}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:22,color:'#ffffff',alignSelf:'center'}}>{this.i18n["Language setting"]}</Text>
                    </View>
                </View>
                <View>
                    <View style={{height:1,backgroundColor:'#E3E3E3',marginTop:20}}/>
                    <TouchableOpacity onPress={()=>{
                        this.setState({chinese:true},()=>{
                            this.getLanguageStyle();
                        });
                        this.changeLanguageTo(false);
                        window.EventBus.trigger('LanguageHasChanged',"please click here");
                        AsyncStorage.setItem("language","cn");
                    }}>
                        <View style={{height:60,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
                            <Text style={{fontSize:20,color:'#1A1A1A'}}>中文</Text>
                            <Image source={require('./../images/Accept.png')} style={{height:50,width:50}} ref="chinese"/>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:1,backgroundColor:'#E3E3E3',marginLeft:20}}/>
                    <TouchableOpacity onPress={()=>{
                        this.setState({chinese:false},()=>{
                            this.getLanguageStyle();
                        });
                        this.changeLanguageTo(true);
                        window.EventBus.trigger('LanguageHasChanged',"please click here");
                        AsyncStorage.setItem("language","en");
                    }}>
                        <View style={{height:60,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
                            <Text style={{fontSize:20,color:'#1A1A1A'}}>English</Text>
                            <Image source={require('./../images/Accept.png')} style={{height:50,width:50}} ref="english"/>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:1,backgroundColor:'#E3E3E3'}}/>
                </View>
            </View>);
    }
}

export default connect(
    (state)=>({

    }),
    (dispatch)=>({
        languageChange:()=>dispatch({type:constants.CHANGE_TOCHINESE})
    })
)(Setlanguage)

