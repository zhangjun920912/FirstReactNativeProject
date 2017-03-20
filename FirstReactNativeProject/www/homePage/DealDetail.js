/**
 * Created by zhangjunimust on 17/3/20.
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    Dimensions,
    ListView,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
var screenHeight=Dimensions.get('window').height;
var screenWeight=Dimensions.get('window').width;

export default class DealDetail extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            deal:this.props.deal
        };
    }
    getName()
    {
        console.log("=====dealdetail=======LanguageHasChanged=============")
    }

    componentWillMount() {
        console.log("===========componentWillMount================"+JSON.stringify(this.props.deal));
    }

    componentDidMount() {
        window.EventBus.on('LanguageHasChanged',()=>{this.getName()});
    }
    render()
    {
        return(
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
            <View style={{height:screenHeight}}>
                <View style={{height:60,backgroundColor:'rgba(60,60,255,0.6)',alignItems:'center',flexDirection:'row',paddingRight:screenWeight/12}}>
                    <TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
                      <View style={{flexDirection:'row'}}>
                        <Image source={require('./../images/whitecolorbackpre.png')} style={{marginLeft:20}}/>
                        <Text style={{color:'#ffffff',marginLeft:8}}>项目列表</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={{flex:1}}>
                      <Text style={{fontSize:22,color:'#ffffff',alignSelf:'center'}}>项目详情</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={{uri:this.state.deal.sector_image_path}} style={{width:screenWeight/3,height:screenWeight/3}}/>
                    <Text style={{marginTop:80,fontSize:22,color:'#1A1A1A'}}>项目名称:{this.state.deal.display_name}</Text>
                    <Text style={{marginTop:20,fontSize:22,color:'#1A1A1A'}}>项目所属国家:{this.state.deal.country_name}</Text>
                    <Text style={{marginTop:20,fontSize:22,color:'#1A1A1A'}}>项目ID:{this.state.deal.id}</Text>
                    <Text style={{marginTop:20,fontSize:22,color:'#1A1A1A'}}>项目描述:{this.state.deal.public_description.replace("<","").replace(">","").replace("<Li>","").replace("/","").replace("r","").replace("n","").replace("t","").replace("<p>","").replace("<ul>","")}</Text>
                    <Text style={{marginTop:20,fontSize:22,color:'#1A1A1A'}}>项目收入:{this.state.deal.revenue}</Text>
                    <Text style={{marginTop:20,fontSize:22,color:'#1A1A1A'}}>项目EBITDA:{this.state.deal.ebitda}</Text>
                    <Text style={{marginTop:20,fontSize:22,color:'#1A1A1A'}}>项目净收入:{this.state.deal.net_profit}</Text>
                </View>
            </View>
            </ScrollView>
        );
    }

}
