// flex
import { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import React from "react";

type FlexStateType = {
  flexValue: number
}
export default class FlexTestComponent extends Component<null, FlexStateType> {
  flexValue = 1;
  constructor(props) {
    super(props);
    this.state = {
      flexValue: this.flexValue
    };
  }

  clickView = () => {
    this.flexValue ++;
    this.setState({flexValue: this.flexValue})
  };

  item = (flexValue: number) => {
    return (
      <View style={{ flex: flexValue, height: 50, backgroundColor: 'black', marginLeft:10, marginRight: 10 , justifyContent: 'center', alignItems:'center'}}>
        <Text style = {{color: '#fff'}}>flex = {flexValue}</Text>
      </View>
    );
  };

  render () {
    const {
      flexValue
    } = this.state;
    return (
      <TouchableOpacity onPress={this.clickView}>
        <View style={{ height: 60, width: '100%', backgroundColor: '#e5e5e5', flexDirection: 'row' , alignItems: 'center'}}>
          {this.item(1)}
          {this.item(flexValue)}
          {this.item(1)}
        </View>
      </TouchableOpacity>
    );
  }
}
