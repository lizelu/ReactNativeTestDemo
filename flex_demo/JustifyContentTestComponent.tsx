// justifyContent
import { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

type JustifyContentType = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
type JustifyContentCompontStateType = {
  justifyContentValue: JustifyContentType
}
export default class JustifyContentTestComponent extends Component<null, JustifyContentCompontStateType> {
  constructor(props) {
    super(props);
    this.state = {
      justifyContentValue: 'flex-start'
    };
  }

  clickView = (value: JustifyContentType) => () => {
    this.setState({ justifyContentValue: value});
  };

  customButton = (title: JustifyContentType) => {
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
        height: 90,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        flexWrap:'wrap'}}>
        {this.customButton('flex-start')}
        {this.customButton('flex-end')}
        {this.customButton('center')}
        {this.customButton('space-between')}
        {this.customButton('space-around')}
        {this.customButton('space-evenly')}
      </View>
    );
  };

  item = (width: number) => {
    return (
      <View style = {{ height: 30, width: width, backgroundColor: 'green' , margin: 2}}/>
    );
  };

  resultDisplayView = () => {
    const {
      justifyContentValue
    } = this.state;
    return (
      <View style={{ height: 110, width: '100%', justifyContent: justifyContentValue, flexDirection: 'row', flexWrap:'wrap' }}>
        {this.item(60)}
        {this.item(100)}
        {this.item(30)}
        {this.item(80)}
        {this.item(100)}
        {this.item(90)}
        {this.item(30)}
        {this.item(80)}
      </View>
    );
  };

  render () {
    return (
      <View style={{ height: 200, backgroundColor: '#e5e5e5' }}>
        {this.operaView()}
        {this.resultDisplayView()}
      </View>
    );
  }
}
