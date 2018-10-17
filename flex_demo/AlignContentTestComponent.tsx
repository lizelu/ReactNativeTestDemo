// alignItem
import { FlexAlignType, Text, TouchableOpacity, View } from "react-native";
import { Component } from "react";
import React from "react";

type AlignContentType = "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around";

type AlignContentTestCompontStateType = {
  alignContentValue: AlignContentType
}
export default class AlignContentTestComponent extends Component<null, AlignContentTestCompontStateType> {
  constructor(props) {
    super(props);
    this.state = {
      alignContentValue: 'flex-start'
    };
  }

  clickView = (title: AlignContentType) => () => {
    this.setState({ alignContentValue: title});
  };

  customButton = (title: AlignContentType) => {
    return (
      <TouchableOpacity onPress={this.clickView(title)}>
        <View style = {{ width: 120, height: 30, backgroundColor: 'green', margin: 5, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color: '#fff', fontSize: 17}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  operaView = () => {
    return (
      <View style={{
        height: '40%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        flexWrap:'wrap'}}>
        {this.customButton('flex-start')}
        {this.customButton('center')}
        {this.customButton('flex-end')}
        {this.customButton('space-between')}
        {this.customButton('space-around')}
        {this.customButton('stretch')}
      </View>
    );
  };

  item = (width: number, height: number) => {
    return (
      <View style = {{ height: height, width: width, backgroundColor: 'red' , margin: 2}}/>
    );
  };

  resultDisplayView = () => {
    const {
      alignContentValue
    } = this.state;

    let height = 30;
    if (alignContentValue === 'stretch') {
      height = -1;
    }
    return (
      <View style={{ height: "60%", width: '100%', alignContent: alignContentValue, backgroundColor: '#efefef', flexDirection: 'row', flexWrap:'wrap'}}>
        {this.item(50, height)}
        {this.item(80, height)}
        {this.item(30, height)}
        {this.item(60, height)}
        {this.item(50, height)}
        {this.item(100, height)}
        {this.item(30, height)}
        {this.item(50, height)}
        {this.item(80, height)}
        {this.item(30, height)}
      </View>
    );
  };

  render () {
    return (
      <View style={{ height: 200, backgroundColor: '#e5e5e5'}}>
        {this.operaView()}
        {this.resultDisplayView()}
      </View>
    );
  }
}





