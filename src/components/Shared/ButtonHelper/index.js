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
}) => {
  return (
    <TouchableOpacity
      style={styles(buttonColor, borderRadius, buttonWidth).button}
      onPress={onPress}
    >
      {iconName && <FontAwesome name={iconName} size={18} color="#ffffff" />}
      {children && <Text>{children}</Text>}
    </TouchableOpacity>
  );
};

const styles = (buttonColor, borderRadius, buttonWidth) =>
  StyleSheet.create({
    button: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: buttonColor,
      width: buttonWidth,
      height: 50,
      borderRadius: borderRadius,
      margin: 5,
      padding: 10,
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
};

ButtonHelper.defaultProps = {
  iconName: null,
  onPress: null,
  children: null,
  buttonColor: null,
  borderRadius: 50,
  buttonWidth: 50,
};

export default ButtonHelper;
