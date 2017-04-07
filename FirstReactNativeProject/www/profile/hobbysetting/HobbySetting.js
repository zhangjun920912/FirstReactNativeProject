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
    Slider,
    ScrollView
} from 'react-native'
import RangeRevenueStepSlider from '../RangeSlider/RangeRevenueStepSlider.js'
import RangeEbitdaStepSlider from '../RangeSlider/RangeEbitdaStepSlider.js'
var screenHeight=Dimensions.get('window').height;
var screenWeight=Dimensions.get('window').width;
var revenueValue=["0","10","25","50","75","100","150","250","+∞"];
var ebitdaValue=["-∞","1","5","20","50","75","100","+∞"];
var netProfitValue=["-∞","1","5","20","50","75","100","+∞"];
var rangeRevenueSetpSlider=new RangeRevenueStepSlider();
var rangeEbitdaStepSlider=new RangeEbitdaStepSlider();

export default class HobbySetting extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            revenueMin:0,
            revenueMax:+999999999,
            ebitdaMin:-999999999,
            ebitdaMax:+999999999,
            netProfitMin:-999999999,
            netProfitMax:+999999999
        };
    }

    //回调设置revenue的值
    resetRevenue(revenue)
    {
        var revenueMinValue=0;
        var revenueMaxValue=0;
        if(revenue.min=="+∞")
        {
            revenueMinValue=+999999999;
        }else{
            revenueMinValue=parseInt(revenue.min)*1000000;
        }
        if(revenue.max=="+∞")
        {
            revenueMaxValue=+999999999;
        }else{
            revenueMaxValue=parseInt(revenue.max)*1000000;
        }
        this.setState({...this.state,revenueMin:revenueMinValue,revenueMax:revenueMaxValue});
    }
    //回调设置ebitda的值
    resetEbitda(ebitda)
    {
        var ebitdaMinValue=0;
        var ebitdaMaxValue=0;
        if(ebitda.min=="+∞")
        {
            ebitdaMinValue=+999999999;
        }else if(ebitda.min=="-∞")
        {
            ebitdaMinValue=-999999999;
        }else{
            ebitdaMinValue=parseInt(ebitda.min)*1000000;
        }
        if(ebitda.max=="+∞")
        {
            ebitdaMaxValue=+999999999;
        }else if(ebitda.max=="-∞")
        {
            ebitdaMaxValue=-999999999;
        }else{
            ebitdaMaxValue=parseInt(ebitda.max)*1000000;
        }
        this.setState({...this.state,ebitdaMin:ebitdaMinValue,ebitdaMax:ebitdaMaxValue});
    }
    //回调设置net profit的值
    resetNetProfit(profit)
    {
        var profitMinValue=0;
        var profitMaxValue=0;
        if(profit.min=="+∞")
        {
            profitMinValue=+999999999;
        }else if(profit.min=="-∞")
        {
            profitMinValue=-999999999;
        }else{
            profitMinValue=parseInt(profit.min)*1000000;
        }
        if(profit.max=="+∞")
        {
            profitMaxValue=+999999999;
        }else if(profit.max=="-∞")
        {
            profitMaxValue=-999999999;
        }else{
            profitMaxValue=parseInt(profit.max)*1000000;
        }
        this.setState({...this.state,netProfitMin:profitMinValue,netProfitMax:profitMaxValue});
    }
    render()
    {
        return(
            <View style={{flex:1}}>
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
                <ScrollView style={{paddingBottom:10}}>
                <View style={{marginTop:20}}>
                    <View style={{alignItems:'center'}}>
                        <Text style={{marginBottom:12,fontSize:16}}>Revenue $(M)</Text>
                        <RangeRevenueStepSlider setValue={(value)=>{this.resetRevenue(value)}} rangeValue={revenueValue} min={2} max={8}/>
                    </View>
                    <View style={{alignItems:'center',marginTop:20}}>
                        <Text style={{marginBottom:12,fontSize:16}}>EBITDA $(M)</Text>
                        <RangeEbitdaStepSlider setValue={(value)=>{this.resetEbitda(value)}} rangeValue={ebitdaValue} min={2} max={7}/>
                    </View>
                    <View style={{alignItems:'center',marginTop:20}}>
                        <Text style={{marginBottom:12,fontSize:16}}>Net Profit $(M)</Text>
                        <RangeEbitdaStepSlider setValue={(value)=>{this.resetNetProfit(value)}} rangeValue={netProfitValue} min={2} max={7}/>
                    </View>
                </View>
                <View style={{marginTop:12,marginLeft:20,marginRight:20}}>
                    <View style={{marginTop:10}}>
                        <View style={{flexDirection: 'row',alignItems:'center'}}>
                            <Text style={{color:'#ff0000',fontSize:18}}>Revenue最小值:</Text>
                            <Text style={{color:'#F5A623',marginLeft:20}}>{this.state.revenueMin}</Text>
                        </View>
                        <View style={{flexDirection: 'row',alignItems:'center'}}>
                            <Text style={{color:'#ff0000',fontSize:18}}>Revenue最大值:</Text>
                            <Text style={{color:'#F5A623',marginLeft:20}}>{this.state.revenueMax}</Text>
                        </View>
                        <View style={{flexDirection: 'row',alignItems:'center'}}>
                            <Text style={{color:'#ff0000',fontSize:18}}>EBITDA最小值:</Text>
                            <Text style={{color:'#F5A623',marginLeft:20}}>{this.state.ebitdaMin}</Text>
                        </View>
                        <View style={{flexDirection: 'row',alignItems:'center'}}>
                            <Text style={{color:'#ff0000',fontSize:18}}>EBITDA最大值:</Text>
                            <Text style={{color:'#F5A623',marginLeft:20}}>{this.state.ebitdaMax}</Text>
                        </View>
                        <View style={{flexDirection: 'row',alignItems:'center'}}>
                            <Text style={{color:'#ff0000',fontSize:18}}>profit最小值:</Text>
                            <Text style={{color:'#F5A623',marginLeft:20}}>{this.state.netProfitMin}</Text>
                        </View>
                        <View style={{flexDirection: 'row',alignItems:'center'}}>
                            <Text style={{color:'#ff0000',fontSize:18}}>profit最大值:</Text>
                            <Text style={{color:'#F5A623',marginLeft:20}}>{this.state.netProfitMax}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>{
                    this.setState({...this.state,revenueMin:0, revenueMax:+999999999, ebitdaMin:-999999999, ebitdaMax:+999999999, netProfitMin:-999999999, netProfitMax:+999999999});
                    window.EventBus.trigger("resetrevenuerange","reset revenue range");
                }}>
                <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#00ff00',marginLeft:20,marginRight:20,marginTop:20,height:40}}>
                    <Text style={{color:'#ffffff'}}>重置</Text>
                </View>
                </TouchableOpacity>
                    <View style={{height:10}}/>
                </ScrollView>
            </View>);
    }
}
