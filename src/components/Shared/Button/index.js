import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ children, onPress, color = "#ffffff" }) => {
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: { color },
        margin: 5,
        padding: 5,
      }}
      onPress={onPress}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
