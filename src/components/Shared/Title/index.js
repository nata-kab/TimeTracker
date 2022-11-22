import React from "react";
import { View, Text } from "react-native";

const Title = ({ text }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        margin: 4,
      }}
    >
      <Text> {text} </Text>
    </View>
  );
};

export default Title;
