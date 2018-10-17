import { ScrollView, Text } from "react-native";
import FlexTestComponent from "./FlexTestComponent";
import FlexDirectionTestComponent from "./FlexDirectionTestComponent";
import FlexWrapTestComponent from "./FlexWrapTestComponent";
import AlignItemTestComponent from "./AlignItemTestComponent";
import AlignSelfTestComponent from "./AlignSelfTestComponent";
import JustifyContentTestComponent from "./JustifyContentTestComponent";
import React from "react";
import AlignContentTestComponent from "./AlignContentTestComponent";

export default  function FlexBoxTestView () {
  return (
    <ScrollView>
      <Text>Flex</Text>
      <FlexTestComponent />

      <Text>FlexDirection</Text>
      <FlexDirectionTestComponent />

      <Text>JustifyContent</Text>
      <JustifyContentTestComponent />

      <Text>AlignContent</Text>
      <AlignContentTestComponent />

      <Text>FlexWrap</Text>
      <FlexWrapTestComponent />

      <Text>AlignItem</Text>
      <AlignItemTestComponent />

      <Text>AlignSelf</Text>
      <AlignSelfTestComponent />
    </ScrollView>
  );
}
