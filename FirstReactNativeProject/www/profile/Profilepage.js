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
} from 'react-native'
var screenHeight=Dimensions.get('window').height;
var screenWeight=Dimensions.get('window').width;

export default class Profilepage extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <View style={{height:screenHeight}}>
                <View style={{height:60,backgroundColor:'rgba(60,255,60,0.6)',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:22,color:'#ffffff',alignSelf:'center'}}>个人设置</Text>
                </View>
                <View style={{flex:1}}>
                    <Text>profile page</Text>
                </View>
            </View>);
    }
}