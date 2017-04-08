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
import BaseComponent from './../common/BaseComponent.js'
var screenHeight=Dimensions.get('window').height;
var screenWeight=Dimensions.get('window').width;

export default class Profilepage extends BaseComponent
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
                    <Text style={{fontSize:22,color:'#ffffff',alignSelf:'center'}}>{this.i18n["Personal setting"]}</Text>
                </View>
                <View style={{flex:1}}>
                    <View style={{marginTop:screenHeight/30,alignItems:'center'}}>
                      <Image source={require('./../images/imagexx.jpeg')}  style={{height:screenWeight/5,width:screenWeight/5,borderRadius:76,borderWidth:2,borderColor:'#ffff00'}}/>
                    </View>
                    <View style={{height:1,backgroundColor:'#E3E3E3', marginTop:screenHeight/30,marginLeft:20}}/>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigator.push({name:'learnmore'});
                    }}>
                    <View style={{height:60,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{color:'#1A1A1A',paddingLeft:20,fontSize:20,marginRight:40}}>{this.i18n["Learning More"]}</Text>
                        <Image source={require('./../images/Next-item_@3x.png')} style={{height:40,width:40}}/>
                    </View>
                    </TouchableOpacity>
                    <View style={{height:1,backgroundColor:'#E3E3E3',marginLeft:20}}/>
                    <TouchableOpacity onPress={()=>{this.props.navigator.push({name:'setlanguage'})}}>
                    <View style={{height:60,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{color:'#1A1A1A', paddingLeft:20,fontSize:20,marginRight:40}}>{this.i18n["Language setting"]}</Text>
                        <Image source={require('./../images/Next-item_@3x.png')} style={{height:40,width:40}}/>
                    </View>
                    </TouchableOpacity>
                    <View style={{height:1,backgroundColor:'#E3E3E3',marginLeft:20}}/>
                    <TouchableOpacity onPress={()=>{this.props.navigator.push({name:'hobbysetting'})}}>
                        <View style={{height:60,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Text style={{color:'#1A1A1A', paddingLeft:20,fontSize:20,marginRight:40}}>{this.i18n["Personal hobby setting"]}</Text>
                            <Image source={require('./../images/Next-item_@3x.png')} style={{height:40,width:40}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:1,backgroundColor:'#E3E3E3',marginLeft:20}}/>
                </View>
            </View>);
    }
}