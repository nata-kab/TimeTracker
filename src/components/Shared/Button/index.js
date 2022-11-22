import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
