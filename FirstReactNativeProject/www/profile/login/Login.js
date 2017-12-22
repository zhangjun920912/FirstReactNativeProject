/**
 * Created by zhangjunimust on 17/3/18.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import BaseComponent from './../../common/BaseComponent.js'
import CountryPicker from 'react-native-country-picker-modal'
var ImagePicker = require('react-native-image-picker');



var screenHeight = Dimensions.get('window').height;
var screenWeight = Dimensions.get('window').width;

const NORTH_AMERICA = ['CA', 'MX', 'US'];
const imageUrl='data:image/png;base64,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';
export default class Login extends BaseComponent {
    constructor(props) {
        super(props);
        this.state={
            cca2:"CN",
            prefix:"86",
            canSubmit:false,
            imageUrl:'data:image/png;base64,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',
        options:{
                title:"选择照片",
                cancelButtonTitle:"取消",
                takePhotoButtonTitle:"拍照",
                chooseFromLibraryButtonTitle:"从相册选择",
            },
            countryInfo:null
        };
    }

    componentWillMount() {
        window.UMNative.onEvent("LoginPage");
    }

    getCountryInfo(value)
    {
        this.setState({...this.state,imageUrl:value.flag,prefix:value.callingCode});
    }

    render() {
        var image=null;
        if(this.state.canSubmit)
        {
            image=(<Image source={this.state.avatarSource}  style={{height:140,width:140,marginLeft:20,borderRadius:70}}/>);
        }else{
            image=(<Image source={require('./../../images/PHOTO@3x.png')} style={{height:140,width:140,marginLeft:20}}/>);
        }
        return (
            <View style={{flex: 1}}>
                <View style={{
                    height: 60,
                    backgroundColor: 'rgba(60,255,60,0.6)',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingRight: screenWeight / 12
                }}>
                    <TouchableOpacity onPress={()=> {
                        this.props.navigator.pop()
                    }}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require('./../../images/whitecolorbackpre.png')} style={{marginLeft: 20}}/>
                            <Text style={{color: '#ffffff', marginLeft: 8}}>{this.i18n["Back"]}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 22, color: '#ffffff', alignSelf: 'center'}}>{this.i18n["Login"]}</Text>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <Image
                        source={require('./../../images/background.png')}
                        style={{height:screenHeight, width:screenWeight}}>
                        <View style={{flexDirection:'row',marginTop:20}}>
                            <Text style={{color:'#ffffff'}}>国家选择:</Text>
                            <Text style={{color:'#ffffff',marginLeft:8}}>+{this.state.prefix}</Text>
                            <View style={{marginTop:-30,marginLeft:-30}}>
                            <CountryPicker
                                cca2={this.state.cca2}
                                onChange={(value)=>{
                                    console.log("====================="+JSON.stringify(value));
                                    this.setState({...this.state,cca2:value.cca2,prefix:value.callingCode});
                                }}
                                closeable={true}
                                translation="zho"
                                filterable={true}

                            />
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:20, alignItems:'center'}}>
                            <Text style={{color:'#ffffff'}}>头像选择:</Text>
                            <TouchableOpacity onPress={()=>{
                                ImagePicker.showImagePicker(this.state.options, (response) => {
                                    console.log('Response = ', response);

                                    if (response.didCancel) {
                                        console.log('User cancelled image picker');
                                    }
                                    else if (response.error) {
                                        console.log('ImagePicker Error: ', response.error);
                                    }
                                    else if (response.customButton) {
                                        console.log('User tapped custom button: ', response.customButton);
                                    }
                                    else {
                                        let source = { uri: response.uri };

                                        // You can also display the image using data:
                                        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                                        this.setState({
                                            avatarSource: source,
                                            canSubmit:true
                                        });
                                    }
                                });
                            }}>
                                {image}
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigator.push({name:'countryPicker',callback:(msg)=>{this.getCountryInfo(msg)}});
                        }}>
                            <View style={{flexDirection:'row',marginTop:20}}>
                                <Text style={{color:'#ffffff'}}>国家选择:</Text>
                                <Text style={{color:'#ffffff',marginLeft:8}}>+{this.state.prefix}</Text>
                                <View style={{marginLeft:10}}>
                                    <Image style={{height:19,width:25}} source={{uri:this.state.imageUrl}}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Image>

                </View>

            </View>);
    }
}