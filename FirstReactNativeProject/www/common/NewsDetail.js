/**
 * Created by zhangjunimust on 17/4/14.
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

export default class NewsDetail extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            comeTrue:true
        };
    }

    componentWillMount() {
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
            </View>
            <WebView
                source={{uri:"http://"+this.props.fullPath,headers:{"client-type":"android","Content-Type":"text/html;"}}}
                style={{width:screenWeight,height:screenWeight-60}}
                startInLoadingState={true}
            />
        </View>);
    }
}

