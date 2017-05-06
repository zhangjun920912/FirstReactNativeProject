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
import {connect} from 'react-redux'
import * as constants from './../reduxapp/constants.js'
var screenHeight=Dimensions.get('window').height;
var screenWeight=Dimensions.get('window').width;

class Recommend extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
        };
    }

    componentWillMount() {
        window.UMNative.onEvent("OpenRecommendpage");
    }

    render()
    {
        var image=null;
        if(this.props.trueLove)
        {
            image=(<Image source={require('./../images/wenzhang.jpg')} style={{width:140,height:140,borderRadius:70}}/>);
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
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                    style={{flex:1}}
                    onPress={()=>{
                    this.props.changeImage2();
                }}>
                <View style={{backgroundColor:'#00A600',height:40,marginLeft:10,marginRight:10,marginTop:20,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#ffffff'}}>点击修改-->文章</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{flex:1}}
                    onPress={()=>{
                    this.props.changeImage();
                }}>
                    <View style={{backgroundColor:'#A600A6',height:40,marginLeft:10,marginRight:10,marginTop:20,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#ffffff'}}>点击修改-->姚笛</Text>
                    </View>
                </TouchableOpacity>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                    <Text style={{fontSize:26,color:'#ff0000'}}>{this.props.imageName}</Text>
                </View>
                <View style={{marginTop:60,alignItems:'center'}}>
                    <Text style={{fontSize:22,color:'#A946AE',marginBottom:20}}>Redux Demo1</Text>
                    <Counter1></Counter1>
                    <Counter1></Counter1>
                    <Counter2></Counter2>
                </View>
            </View>);
    }
}

class Counter1 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            counter:0
        };
    }

    render()
    {
        return(
            <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                <Text style={{color:'#23EDF5',fontSize:20}}>计数器:{this.state.counter}</Text>
                <TouchableOpacity onPress={()=>{this.addCounter()}}>
                    <View style={{width:80,height:40,marginLeft:20,backgroundColor:'#F5A623',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#ffffff'}}>点击我</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    addCounter()
    {
        this.setState({...this.state,counter:this.state.counter+1});
    }
}

class Counter2 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            counter:0
        };
    }

    render()
    {
        return(
            <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                <Text style={{color:'#F55823',fontSize:20}}>计数器:{this.state.counter}</Text>
                <TouchableOpacity onPress={this.addCounter.bind(this)}>
                    <View style={{width:80,height:40,marginLeft:20,backgroundColor:'#4485F2',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#ffffff'}}>点击我</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    addCounter()
    {
        this.setState({...this.state,counter:this.state.counter+1});
    }
}

export default connect(
    (state)=>({
       imageName:state.recommand.imageName,
       trueLove:state.recommand.trueLove
    }),
    (dispatch)=>({
        changeImage:()=>dispatch({type:constants.CHANGETOYAODI}),
        changeImage2:()=>dispatch({type:constants.CHANGETOWENZHANG})
    })
)(Recommend)