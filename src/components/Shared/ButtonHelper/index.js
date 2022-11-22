import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { func, oneOf, oneOfType, string, node } from "prop-types";
import FAIcon from "../FAIcon";

const ButtonHelper = ({ children, onPress, color, iconName }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {iconName && <FAIcon name={iconName} />}
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
});

ButtonHelper.propTypes = {
  iconName: string,
  onPress: func,
  children: oneOfType([string, node]),
  color: string,
};

ButtonHelper.defaultProps = {
  iconName: false,
  onPress: null,
  children: null,
  color: null,
};

export default ButtonHelper;
