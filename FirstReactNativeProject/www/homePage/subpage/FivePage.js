/**
 * Created by zhangjunimust on 2017/6/30.
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

export default class FivePage extends Component
{
    static navigationOptions={
        header:{
            visible:false
        }
    }
    constructor(props) {
        super(props);
    }
    render()
    {
        return(
            <View>
                <Text>FivePage</Text>
            </View>
        );
    }

}