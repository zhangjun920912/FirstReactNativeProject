/**
 * Created by zhangjunimust on 17/3/17.
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    Dimensions,
    ListView,
} from 'react-native'
var screenHeight=Dimensions.get('window').height;
var screenWeight=Dimensions.get('window').width;

export default class HomePage extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            project:false
        };
    }

    render()
    {
        var name=null;
        if(this.state.project)
        {
            name="zhangjun";
        }else{
            name="yangjing";
        }
        return(
            <View style={{height:screenHeight}}>
                <View style={{height:60,backgroundColor:'rgba(60,60,255,0.6)',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:22,color:'#ffffff',alignSelf:'center'}}>项目列表</Text>
                </View>
                <View style={{flex:1}}>
                    <Text>Deal List Page</Text>
                </View>
            </View>);
    }
}
