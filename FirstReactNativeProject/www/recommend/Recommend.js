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

export default class Recommend extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            comeTrue:true
        };
    }

    componentWillMount() {
        window.UMNative.onEvent("OpenRecommendpage");
    }

    render()
    {
        var image=null;
        if(this.state.comeTrue)
        {
            image=(<Image source={require('./../images/feifei.jpg')} style={{width:140,height:140,borderRadius:70}}/>);
        }else{
            image=(<Image source={require('./../images/yaodi.jpg')} style={{width:140,height:140,borderRadius:70}}/>);
        }
        return(
            <View style={{height:screenHeight}}>
                <View style={{height:60,backgroundColor:'rgba(245,166,35,0.8)',alignItems:'center',flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:22,color:'#ffffff',alignSelf:'center'}}>项目推荐</Text>
                    </View>
                </View>
                <View style={{marginTop:20,marginLeft:20,marginRight:20,alignItems:'center'}}>
                    {image}
                </View>
                <TouchableOpacity onPress={()=>{this.setState({...this.state,comeTrue:!this.state.comeTrue});}}>
                <View style={{backgroundColor:'#00A600',height:40,marginLeft:10,marginRight:10,marginTop:20,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#ffffff'}}>点击修改</Text>
                </View>
                </TouchableOpacity>
            </View>);
    }
}
