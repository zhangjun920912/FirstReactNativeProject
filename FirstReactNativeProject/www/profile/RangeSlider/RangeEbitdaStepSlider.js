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
let rangeValue=null;

export default class RangeStepSlider extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            rangeMin:0,
            rangeMax:7,
            allRangePoint:null,
        };
    }

    componentWillMount() {
        rangeValue=this.props.rangeValue;
        this.setState({...this.state,allRangePoint:this.getRangeValue()});
    }

    //根据范围值的数量获取滑动点
    getRangeValue()
    {
        var newRangeValue=rangeValue.map((arrayValue,arrayIndex)=>{
            return(
                <View style={{height:10,width:10,borderRadius:5,backgroundColor:'#F5A623',marginTop:8}} key={'range'+arrayIndex}/>
            );
        });
        return newRangeValue;
    }
    //根据range的范围值进行重新设置所有的点
    resetAllRangePoint()
    {
        var resetNewRange=[];
        for(i=0;i<this.state.allRangePoint.length;i++)
        {
            var oneNewPoint=null;
            if(i>=this.state.rangeMin&&i<=this.state.rangeMax)
            {
                oneNewPoint=(<View style={{height:10,width:10,borderRadius:5,backgroundColor:'#F5A623',marginTop:8}} key={'range'+i}/>);
            }else{
                oneNewPoint=(<View style={{height:10,width:10,borderRadius:5,backgroundColor:'#CCCCCC',marginTop:8}} key={'range'+i}/>);
            }
            resetNewRange.push(oneNewPoint);
        }
        this.setState({...this.state,allRangePoint:resetNewRange});
        var value={min:rangeValue[this.state.rangeMin],max:rangeValue[this.state.rangeMax]};
        this.props.setValue(value);

    }
    render()
    {
        return(
            <View>
                <View style={{alignItems:'center'}}>
                    <View style={{
                        flexDirection:'row',
                        marginTop:8,
                        width:screenWeight-60,
                    }}>
                        <Text style={{width:(screenWeight-60)/7}}>{rangeValue[0]}</Text>
                        <Text style={{width:(screenWeight-60)/7}}>{rangeValue[1]}</Text>
                        <Text style={{width:(screenWeight-60)/7}}>{rangeValue[2]}</Text>
                        <Text style={{width:(screenWeight-60)/7, marginLeft:-6}}>{rangeValue[3]}</Text>
                        <Text style={{width:(screenWeight-60)/7}}>{rangeValue[4]}</Text>
                        <Text style={{width:(screenWeight-60)/7, marginLeft:-6}}>{rangeValue[5]}</Text>
                        <Text style={{width:(screenWeight-60)/7,marginLeft:-6}}>{rangeValue[6]}</Text>
                        <Text style={{width:(screenWeight-60)/7}}>{rangeValue[7]}</Text>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        marginTop:8,
                        width:screenWeight-60,
                        justifyContent:'space-between',
                    }}>
                        {this.state.allRangePoint}
                    </View>
                    <RangeSlider
                        step={1}
                        min={0}
                        max={7}
                        trackSize={2}
                        thumbPadding={10}
                        minValue={this.state.rangeMin}
                        maxValue={this.state.rangeMax}
                        style={{width:screenWeight-40,marginTop:-20}}
                        lowerTrackColor={'#F5A623'}
                        onChange={(currentValue)=>{
                            this.setState({rangeMin:Math.round(currentValue.min),rangeMax:Math.round(currentValue.max)},()=>{
                                this.resetAllRangePoint();
                            });
                        }}
                    />
                </View>
            </View>);
    }
}
