/**
 * Created by zhangjunimust on 17/4/8.
 */
import React,{Component} from 'react'
import {AsyncStorage} from 'react-native'

export default class BaseComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.i18n=window.i18n.getDictory();
    }

}
