import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { func, oneOfType, string, node, number } from "prop-types";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ButtonHelper = ({
  children,
  onPress,
  buttonColor,
  iconName,
  borderRadius,
  buttonWidth,
  buttonHeight,
}) => {
  return (
    <TouchableOpacity
      style={
        styles(buttonColor, borderRadius, buttonWidth, buttonHeight).button
      }
      onPress={onPress}
    >
      {iconName && <FontAwesome name={iconName} size={18} color="#ffffff" />}
      {children && <Text>{children}</Text>}
    </TouchableOpacity>
  );
};

const styles = (buttonColor, borderRadius, buttonWidth, buttonHeight) =>
  StyleSheet.create({
    button: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: buttonColor,
      width: buttonWidth,
      height: buttonHeight,
      borderRadius: borderRadius,
      margin: 7,
      padding: 15,
    },
    text: {
      textAlign: "center",
    },
  });

ButtonHelper.propTypes = {
  iconName: string,
  onPress: func,
  children: oneOfType([string, node]),
  buttonColor: string,
  borderRadius: number,
  buttonWidth: number,
  buttonHeight: number,
};

ButtonHelper.defaultProps = {
  iconName: null,
  onPress: null,
  children: null,
  buttonColor: null,
  borderRadius: 50,
  buttonWidth: 50,
  buttonHeight: 50,
};

export default ButtonHelper;
