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
                <View style={{height:60,flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingRight:10,backgroundColor:'rgba(0,0,0,0.8)',alignItems:'center'}}>
                    <Image source={require('./../images/Account_F@2x.png')} style={{height:45,width:45}}/>
                    <Image source={require('./../images/Logo_UK_colors.png')} style={{height:45,width:250}}/>
                    <Image source={require('./../images/CollectOutline.png')} style={{height:45,width:45}}/>
                </View>
                <View style={{flex:1}}>
                    <Text>{name}</Text>
                </View>
            </View>);
    }
}
