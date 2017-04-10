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

export default class Login extends BaseComponent {
    constructor(props) {
        super(props);
        this.state={
            cca2:"CN",
            prefix:"86",
            canSubmit:false,
            options:{
                title:"选择照片",
                cancelButtonTitle:"取消",
                takePhotoButtonTitle:"拍照",
                chooseFromLibraryButtonTitle:"从相册选择",
            }
        };
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
                    </Image>

                </View>

            </View>);
    }
}