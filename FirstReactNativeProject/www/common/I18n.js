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
        AsyncStorage.getItem("language",(error,result)=>{
            if(result)
            {
                console.log("=================="+result);
                if("en"==result)
                {
                    this.isEnglish=true;
                }else{
                    this.isEnglish=false;
                }
            }
        });
    }

    //切换为英文
    async changeToEnglish()
    {
        if(this.isEnglish)
        {
            return;
        }
        this.isEnglish=true;
        let ret=AsyncStorage.setItem("language","en");
        console.log("======english========="+JSON.stringify(ret));
        return ret;
    }
    //切换为中文
    async changeToChinese()
    {
        if(!this.isEnglish)
        {
            return;
        }
        this.isEnglish=false;
        let ret=AsyncStorage.setItem("language","cn");
        console.log("=======chinese========"+JSON.stringify(ret));
        return ret;
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
        "Personal hobby setting":"Personal hobby setting",
        "Back":"Back",
        "Personal Hobby":"Personal Hobby",
        "Login":"Login"

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
        "Personal hobby setting":"个人❤爱好❤设置",
        "Back":"返回",
        "Personal Hobby":"个人❤爱好",
        "Login":"登录"
    }
};
