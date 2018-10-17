// alignItem
import { FlexAlignType, Text, TouchableOpacity, View } from "react-native";
import { Component } from "react";
import React from "react";

type AlignItemTestCompontStateType = {
  alignItemValue: FlexAlignType
}
export default class AlignItemTestComponent extends Component<null, AlignItemTestCompontStateType> {
  constructor(props) {
    super(props);
    this.state = {
      alignItemValue: 'flex-start'
    };
  }

  clickView = (title: FlexAlignType) => () => {
    this.setState({ alignItemValue: title});
  };

  customButton = (title: FlexAlignType) => {
    return (
      <TouchableOpacity onPress={this.clickView(title)}>
        <View style = {{ width: 80, height: 30, backgroundColor: 'red', margin: 5, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color: '#fff', fontSize: 17}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  operaView = () => {
    return (
      <View style={{ height: '100%', width: '30%', backgroundColor: '#e0e0e0', justifyContent: 'center', alignItems: 'center'
      }}>
        {this.customButton('flex-start')}
        {this.customButton('center')}
        {this.customButton('flex-end')}
        {this.customButton('stretch')}
        {this.customButton('baseline')}
      </View>
    );
  };

  item = (height: number, fontSize: number) => {
    return (
      <View style = {{ height: height, width: 50, backgroundColor: 'red' , margin: 10 }}>
        <Text style={{fontSize: fontSize}}> {fontSize} </Text>
      </View>
    );
  };

  resultDisplayView = () => {
    const {
      alignItemValue
    } = this.state;

    let heights = [100, 150, 80];
    if (alignItemValue === 'stretch') {
      heights = [-1, -1, -1];
    }
    return (
      <View style={{ height: '100%', width: '70%', alignItems: alignItemValue, backgroundColor: '#efefef', flexDirection: 'row', justifyContent: 'center' }}>
        {this.item(heights[0], 10)}
        {this.item(heights[1], 20)}
        {this.item(heights[2], 30)}
      </View>
    );
  };

  render () {
    return (
      <View style={{ height: 200, backgroundColor: '#e5e5e5' , flexDirection: 'row'}}>
        {this.operaView()}
        {this.resultDisplayView()}
      </View>
    );
  }
}
