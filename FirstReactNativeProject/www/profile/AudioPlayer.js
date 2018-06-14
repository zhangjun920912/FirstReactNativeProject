/**
 * Created by zhangjunimust on 2018/6/14.
 */
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
    StyleSheet
} from 'react-native'
var screenHeight=Dimensions.get('window').height;
var screenWeight=Dimensions.get('window').width;

export default class AudioPlayer extends Component
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
                <TouchableOpacity activeOpacity={.65}
                                  onPress={()=>{
                                      alert("music");
                                  }}
                >
                    <View style={{backgroundColor:'#00ff00',alignItems:'center',justifyContent:'center',height:44,margin:5}}>
                        <Text style={{color:'#fff'}}>
                            音频
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>);
    }
}


const AudioPageStyle=StyleSheet.create({

});
