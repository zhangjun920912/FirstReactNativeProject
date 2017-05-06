/**
 * Created by zhangjunimust on 17/4/20.
 */
import React,{Component} from 'react'
import {AsyncStorage,Alert} from 'react-native'


export class Network extends Component
{
    constructor(props)
    {
        super(props);
        this.host="http://pre.dealglobe.com/";
    }

    fetchData(path,params={},method="GET",header={})
    {
        var fullPath=null;
        if(path.includes("http://")||path.includes("https://"))
        {
            fullPath=path;
        }else{
            fullPath=this.host+path;
        }
        var reqPrarms=[];
        for(var item in params)
        {
            reqPrarms.push(item + "=" + params[item]);
        }
        reqPrarms=reqPrarms.join("&");

        if(0!==reqPrarms.length)
        {
            fullPath=fullPath+'?'+reqPrarms;
        }
        console.log("=============We get path:"+(fullPath));
        return fetch(fullPath,{method:method,headers:header});

    }
}
