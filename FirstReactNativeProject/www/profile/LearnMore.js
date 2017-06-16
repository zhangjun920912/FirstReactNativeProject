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

export default class LearnMore extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentWillMount() {
        window.UMNative.onEvent("LearnMore");
    }

    render()
    {
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
                        <Text style={{fontSize:22,color:'#ffffff',alignSelf:'center'}}>公司主页</Text>
                    </View>
                </View>
                <WebView
                    source={{uri:"http://www.dealglobe.com",headers:{"client-type":"android","Content-Type":"text/html;"}}}
                    style={{width:screenWeight,height:screenWeight-60}}
                    startInLoadingState={true}
                />
            </View>);
    }
}
