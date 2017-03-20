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
    WebView
} from 'react-native'
var screenHeight=Dimensions.get('window').height;
var screenWeight=Dimensions.get('window').width;

export default class Setlanguage extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            english:false,
            chinese:true
        };
    }

    render()
    {
        var selectedChinese=null;
        var selectedEnglish=null;
        if(this.state.chinese)
        {
            selectedChinese=(
                <TouchableOpacity onPress={()=>{
                    this.setState({chinese:true,english:false});
                }}>
                    <View style={{height:60,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
                        <Text style={{fontSize:20,color:'#1A1A1A'}}>中文</Text>
                        <Image source={require('./../images/Accept.png')} style={{height:50,width:50}}/>
                    </View>
                </TouchableOpacity>
            );
            selectedEnglish=(
                <TouchableOpacity onPress={()=>{
                    this.setState({chinese:false,english:true});
                }}>
                    <View style={{height:60,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
                        <Text style={{fontSize:20,color:'#1A1A1A'}}>English</Text>
                    </View>
                </TouchableOpacity>
            );
        }else{
            selectedChinese=(
                <TouchableOpacity onPress={()=>{
                    this.setState({chinese:true,english:false});
                }}>
                    <View style={{height:60,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
                        <Text style={{fontSize:20,color:'#1A1A1A'}}>中文</Text>
                    </View>
                </TouchableOpacity>
            );
            selectedEnglish=(
                <TouchableOpacity onPress={()=>{
                    this.setState({chinese:false,english:true});
                }}>
                    <View style={{height:60,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
                        <Text style={{fontSize:20,color:'#1A1A1A'}}>English</Text>
                        <Image source={require('./../images/Accept.png')} style={{height:50,width:50}}/>
                    </View>
                </TouchableOpacity>
            );
        }
        return(
            <View style={{height:screenHeight}}>
                <View style={{height:60,backgroundColor:'rgba(60,255,60,0.6)',alignItems:'center',flexDirection:'row',paddingRight:screenWeight/12}}>
                    <TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('./../images/whitecolorbackpre.png')} style={{marginLeft:20}}/>
                            <Text style={{color:'#ffffff',marginLeft:8}}>返回</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:22,color:'#ffffff',alignSelf:'center'}}>语言设置</Text>
                    </View>
                </View>
                <View>
                    <View style={{height:1,backgroundColor:'#E3E3E3',marginTop:20}}/>
                    {selectedChinese}
                    <View style={{height:1,backgroundColor:'#E3E3E3',marginLeft:20}}/>
                    {selectedEnglish}
                    <View style={{height:1,backgroundColor:'#E3E3E3'}}/>
                </View>
            </View>);
    }
}

