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
    Slider
} from 'react-native'
import RangeSlider from 'react-native-material-kit/lib/mdl/RangeSlider.js'
var screenHeight=Dimensions.get('window').height;
var screenWeight=Dimensions.get('window').width;

export default class HobbySetting extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            revenue:40,
            networkmin:20,
            networkmax:80
        };
    }

    render()
    {
        return(
            <View style={{height:screenHeight}}>
                <View style={{height:60,backgroundColor:'rgba(60,255,60,0.6)',alignItems:'center',flexDirection:'row',paddingRight:screenWeight/12}}>
                    <TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('./../../images/whitecolorbackpre.png')} style={{marginLeft:20}}/>
                            <Text style={{color:'#ffffff',marginLeft:8}}>返回</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:22,color:'#ffffff',alignSelf:'center'}}>个人❤️爱好</Text>
                    </View>
                </View>
                <View style={{marginTop:12,marginLeft:20,marginRight:20}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:18,color:'#1A1A1A',flex:4}}>收入状况:</Text>
                        <Slider
                            style={{width:screenWeight*0.6}}
                            maximumTrackTintColor={"#F5A623"}
                            minimumTrackTintColor={"#ff0000"}
                            thumbTintColor={"#ffffff"}
                            maximumValue={100}
                            minimumValue={0}
                            step={10}
                            value={this.state.revenue}
                            onSlidingComplete={(revenueValue)=>{
                                this.setState({...this.state,revenue:revenueValue});
                            }}
                        />
                    </View>
                    <View style={{marginTop:16}}>
                        <Text style={{fontSize:18,color:'#1A1A1A',alignSelf:'center'}}>净收入状况:</Text>
                        <View style={{flexDirection:'row',marginTop:20,width:screenWeight*0.8,justifyContent:'space-between',marginLeft:(screenWeight-40)*0.08}}>
                            <View style={{alignItems:'center',width:30}}>
                                <Text>0</Text>
                                <View style={{height:16,width:16,borderRadius:8,backgroundColor:'#CCCCCC',marginTop:8}}/>
                            </View>
                            <View style={{alignItems:'center',width:30}}>
                                <Text>10</Text>
                                <View style={{height:16,width:16,borderRadius:8,backgroundColor:'#CCCCCC',marginTop:8}}/>
                            </View>
                            <View style={{alignItems:'center',width:30}}>
                                <Text>25</Text>
                                <View style={{height:16,width:16,borderRadius:8,backgroundColor:'#F5A623',marginTop:8}}/>
                            </View>
                            <View style={{alignItems:'center',width:30}}>
                                <Text>50</Text>
                                <View style={{height:16,width:16,borderRadius:8,backgroundColor:'#F5A623',marginTop:8}}/>
                            </View>
                            <View style={{alignItems:'center',width:30}}>
                                <Text>75</Text>
                                <View style={{height:16,width:16,borderRadius:8,backgroundColor:'#F5A623',marginTop:8}}/>
                            </View>
                            <View style={{alignItems:'center',width:30}}>
                                <Text>100</Text>
                                <View style={{height:16,width:16,borderRadius:8,backgroundColor:'#F5A623',marginTop:8}}/>
                            </View>
                            <View style={{alignItems:'center',width:30}}>
                                <Text>150</Text>
                                <View style={{height:16,width:16,borderRadius:8,backgroundColor:'#F5A623',marginTop:8}}/>
                            </View>
                            <View style={{alignItems:'center',width:30}}>
                                <Text>250</Text>
                                <View style={{height:16,width:16,borderRadius:8,backgroundColor:'#F5A623',marginTop:8}}/>
                            </View>
                            <View style={{alignItems:'center',width:30}}>
                                <Text>+∞</Text>
                                <View style={{height:16,width:16,borderRadius:8,backgroundColor:'#CCCCCC',marginTop:8}}/>
                            </View>
                        </View>
                        <RangeSlider
                            step={10}
                            min={0}
                            max={80}
                            trackSize={5}
                            minValue={this.state.networkmin}
                            maxValue={this.state.networkmax}
                            style={{width:screenWeight*0.8, alignSelf:'center',marginTop:-23}}
                            lowerTrackColor={'#F5A623'}
                            onChange={(currentValue)=>{
                                this.setState({networkmin:currentValue.min,networkmax:currentValue.max});
                            }}
                        />
                    </View>
                </View>
                <View style={{marginTop:12,marginLeft:20,marginRight:20}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'#ff0000',fontSize:18}}>收入状况数值:</Text>
                        <Text style={{color:'#F5A623',marginLeft:20}}>{this.state.revenue}</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <View style={{flexDirection: 'row',alignItems:'center'}}>
                          <Text style={{color:'#ff0000',fontSize:18}}>净收入最小值:</Text>
                          <Text style={{color:'#F5A623',marginLeft:20}}>{this.state.networkmin}</Text>
                        </View>
                        <View style={{flexDirection: 'row',alignItems:'center'}}>
                            <Text style={{color:'#ff0000',fontSize:18}}>净收入最大值:</Text>
                            <Text style={{color:'#F5A623',marginLeft:20}}>{this.state.networkmax}</Text>
                        </View>
                    </View>
                </View>
            </View>);
    }
}
