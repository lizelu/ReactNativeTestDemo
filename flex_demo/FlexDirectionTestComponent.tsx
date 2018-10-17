// flexDirection
import React, { Component } from 'react'
import { FlexStyle, StyleSheet, Text, View } from 'react-native'

export default  function FlexDirectionTestComponent () {
  return (
    <View style={{ height: 180, backgroundColor: '#c1c1c1' , flexDirection: 'row'}}>
      <View style={{ height: '100%', width: '50%', justifyContent: 'space-around'}}>
        <FlexDirectionTestView value={{ flexDirection: 'row' }}/>
        <FlexDirectionTestView value={{ flexDirection: 'row-reverse' }}/>
      </View>

      <View style={{ height: '100%', width: '50%', flexDirection: 'row' , justifyContent: 'space-around'}}>
        <FlexDirectionTestView value={{ flexDirection: 'column' }}/>
        <FlexDirectionTestView value={{ flexDirection: 'column-reverse' }}/>
      </View>
    </View>
  )
}

type FlexDirectionProps = {
  value?: FlexStyle
}

class FlexDirectionTestView extends Component<FlexDirectionProps> {
  render () {
    return (
      <View style={[myStyle.flexDirectionProps, { flexDirection: this.props.value.flexDirection }]}>
        <SubView value={'1'}/>
        <SubView value={'2'}/>
        <SubView value={'3'}/>
      </View>
    )
  }
}

type SubViewProps = {
  value: string
}
class SubView extends Component<SubViewProps> {
  render () {
    return(
      <View style={myStyle.subViewStyle}>
        <Text style={{ color: 'white', fontSize: 17 }}> {this.props.value} </Text>
      </View>
    )
  }
}

const myStyle = StyleSheet.create({
  subViewStyle: {
    margin: 10,
    borderRadius: 25,
    width: 25,
    height: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexDirectionProps: {
    backgroundColor: 'gray',
    margin: 5
  }
});

