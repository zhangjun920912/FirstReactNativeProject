/**
 * Created by zhangjunimust on 2017/7/3.
 */
import React, {Component} from 'react'
import {View, Text, Image, Dimensions} from 'react-native'


var fullScreenWidth=Dimensions.get('window').width;
export default class ProjectSumma extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var sort=[];
        if(this.props.sectors&&this.props.tags)
        {
            sort=sort.concat(this.props.tags).concat(this.props.sectors)
        }
        return (
            <View>
                <Text style={projectSummaStyle.projectTitleStyle}>{this.props.title}</Text>
                <View style={projectSummaStyle.summerInfoStyle} numberOfLines={2}>
                    <Image source={require('./../../images/chinaicon.jpg')} style={projectSummaStyle.countryIcon}/>
                    <View style={projectSummaStyle.projectContentStyle}>
                        <Text>{this.props.country}</Text>
                        <Text style={{marginLeft: 5}}>{this.props.revenue} 美元</Text>
                        <Text style={{marginLeft: 5,width:fullScreenWidth*0.6}} numberOfLines={1}>{sort}</Text>
                    </View>
                </View>
                <View style={projectSummaStyle.lineStyle}/>
            </View>
        );
    }
}

const projectSummaStyle = {
    summerInfoStyle: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
    },
    countryIcon: {
        height: 20,
        width: 26
    },
    projectTitleStyle: {
        fontSize: 16,
        marginTop: 10,
        color: '#000000',
        flexWrap: 'wrap',
        marginLeft: 15,
        marginRight: 15
    },
    projectContentStyle: {
        flexDirection: 'row',
        marginLeft: 5,
        alignItems: 'center'
    },
    lineStyle: {
        marginTop: 18,
        backgroundColor: '#E7E7E7',
        height: 1,
        width: Dimensions.get('window').weight
    }
};