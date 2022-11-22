import React from "react";
import { View, Text } from "react-native";

const Title = ({ text }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        margin: 4,
      }}
    >
      <Text> {text} </Text>
    </View>
  );
};

export default Title;
