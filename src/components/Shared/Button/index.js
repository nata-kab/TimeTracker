import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const SimpleButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text>{props.children}</Text>
    </TouchableOpacity>
  );
};
