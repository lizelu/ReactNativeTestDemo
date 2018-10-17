// flexWrap
import { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import React from "react";

type FlexWrapTestComponentStateType = {
  allViews: Array<any>
}
export default class FlexWrapTestComponent extends Component<null, FlexWrapTestComponentStateType> {
  constructor(props) {
    super(props);
    this.state = {
      allViews : [this.item()]
    };
  }

  clickView = () => {
    let items = this.state.allViews;
    items.push(this.item());
    this.setState({allViews: items});
  };

  item = () => {
    let randomWidth = Math.random() * 100 + 10;
    return (
      <View style={{backgroundColor: 'green', height: 30, width: randomWidth, margin: 5}} />
    );
  };

  render () {
    return (
      <TouchableOpacity onPress={this.clickView}>
        <View style={{ height: 100, backgroundColor: '#eaeaea' , flexDirection: 'row', flexWrap: 'wrap',}}>
          {this.state.allViews}
        </View>
      </TouchableOpacity>
    );
  }
}
