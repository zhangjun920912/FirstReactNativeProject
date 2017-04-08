/**
 * Created by zhangjunimust on 17/4/8.
 */
import {Component} from 'react'
import {AsyncStorage} from 'react-native'
var DeviceInfo=require('react-native-device-info');

export default class I18n extends Component
{
    constructor(props)
    {
        super(props);
        this.isEnglish=false;
        //获取用户的地理位置
        let deviceLocale=DeviceInfo.getDeviceLocale();
        //判断用户的位置
        console.log("===========deviceLocale============"+deviceLocale);
        if(deviceLocale=="zh-CN"||"zh-TW"==deviceLocale||"zh-HK"==deviceLocale)
        {
            this.isEnglish=false;
        }else{
            this.isEnglish=true;
        }

    }

    //切换为英文
    async changeToEnglish()
    {
        if(this.isEnglish)
        {
            return;
        }
        this.isEnglish=true;
        AsyncStorage.setItem("language","en");
        return "en";
    }
    //切换为中文
    async changeToChinese()
    {
        if(!this.isEnglish)
        {
            return;
        }
        this.isEnglish=false;
        AsyncStorage.setItem("language","cn");
        return "cn";
    }
    //切换底部tab标签title的语言
    translate(key)
    {
        if(this.isEnglish)
        {
            return dictory["en"][key];
        }else{
            return dictory["cn"][key];
        }
    }
    //获取英文对象
    getDictory()
    {
        if(this.isEnglish)
        {
            return dictory["en"];
        }else{
            return dictory["cn"];
        }
    }
}

//中英文切换对照
var dictory={
    "en":{
        "News":"News",
        "Homes":"Homes",
        "Flowers":"Flowers",
        "Recommend":"Recommend",
        "Profits":"Profits",
        "Personal setting":"Personal setting",
        "Learning More":"Learning More",
        "Language setting":"Language setting",
        "Personal hobby setting":"Personal hobby setting"
    },
    "cn":{
        "News":"新闻咨询",
        "Homes":"项目主页",
        "Flowers":"项目领衔",
        "Recommend":"项目推荐",
        "Profits":"个人信息",
        "Personal setting":"个人设置",
        "Learning More":"了解更多",
        "Language setting":"语言设置",
        "Personal hobby setting":"个人❤爱好❤设置"
    }
};
