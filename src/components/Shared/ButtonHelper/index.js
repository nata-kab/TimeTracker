import React from "react";
import { TouchableOpacity, Text } from "react-native";
import FAIcon from "../FAIcon";

const Button = ({ children, onPress, color, iconName }) => {
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: color,
        borderRadius: 10,
        margin: 5,
        padding: 5,
      }}
      onPress={onPress}
    >
      {iconName && <FAIcon name={iconName} />}
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
