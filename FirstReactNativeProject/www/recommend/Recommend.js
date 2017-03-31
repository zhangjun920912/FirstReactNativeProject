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
    }

    render()
    {
        return(
            <View style={{height:screenHeight}}>
                <View style={{height:60,backgroundColor:'rgba(245,166,35,0.8)',alignItems:'center',flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:22,color:'#ffffff',alignSelf:'center'}}>项目推荐</Text>
                    </View>
                </View>
                <View style={{marginTop:8,marginLeft:20,marginRight:20}}>
                    <Text style={{fontSize:22,alignSelf:'center'}}>项目推荐</Text>
                </View>
            </View>);
    }
}
