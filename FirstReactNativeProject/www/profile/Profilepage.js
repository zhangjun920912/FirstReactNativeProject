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
                    <View style={{marginTop:screenHeight/30,alignItems:'center'}}>
                      <Image source={require('./../images/iamge2.jpg')}  style={{height:screenWeight/5,width:screenWeight/5,borderRadius:76}}/>
                    </View>
                    <View style={{height:1,backgroundColor:'#E3E3E3', marginTop:screenHeight/30,marginLeft:20}}/>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigator.push({name:'learnmore'});
                    }}>
                    <View style={{height:60,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{color:'#1A1A1A',paddingLeft:20,fontSize:20,marginRight:40}}>了解更多</Text>
                        <Image source={require('./../images/Next-item_@3x.png')} style={{height:40,width:40}}/>
                    </View>
                    </TouchableOpacity>
                    <View style={{height:1,backgroundColor:'#E3E3E3',marginLeft:20}}/>
                    <TouchableOpacity onPress={()=>{this.props.navigator.push({name:'setlanguage'})}}>
                    <View style={{height:60,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{color:'#1A1A1A', paddingLeft:20,fontSize:20,marginRight:40}}>语言设置</Text>
                        <Image source={require('./../images/Next-item_@3x.png')} style={{height:40,width:40}}/>
                    </View>
                    </TouchableOpacity>
                    <View style={{height:1,backgroundColor:'#E3E3E3',marginLeft:20}}/>
                </View>
            </View>);
    }
}