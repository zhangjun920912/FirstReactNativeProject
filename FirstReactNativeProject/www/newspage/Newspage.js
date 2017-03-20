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
    ActivityIndicator
} from 'react-native'
var screenHeight=Dimensions.get('window').height;
var screenWeight=Dimensions.get('window').width;

export default class Newspage extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            initPage:false,
        };
    }
    getName()
    {
        console.log("======news======LanguageHasChanged============")
    }
    //监听语言发生变化
    componentDidMount() {
        window.EventBus.on('LanguageHasChanged',()=>{this.getName()});
    }

    render()
    {
        var animation=null;
        if(this.state.initPage)
        {
           animation=(
               <View>
                   <ActivityIndicator
                       size={"large"}
                       color={"#00ff00"}
                   />
                   <Text style={{marginTop:10,fontSize:18}}>正在加载...</Text>
               </View>
           );
        }
        return(
            <View style={{height:screenHeight}}>
                <View style={{height:60,backgroundColor:'rgba(255,60,60,0.6)',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:22,color:'#ffffff',alignSelf:'center'}}>新闻咨询</Text>
                </View>
                <View style={{flex:1}}>
                    <WebView
                        source={{uri:"http://en.dealglobe.com/dealglobe-insight/", headers:{"client-type":"android","Content-Type":"text/html;"}} }
                        onLoadStart={()=>{
                            this.setState({initPage:true})
                            console.log("========load start===========");
                        }}
                        onLoadEnd={()=>{
                            console.log("========load end===========");
                            this.setState({initPage:false});
                        }}
                    >
                        {animation}
                    </WebView>
                </View>
            </View>);
    }
}