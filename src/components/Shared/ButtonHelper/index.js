import React from "react";
import { TouchableOpacity } from "react-native";
import { func, oneOfType, string, node, number } from "prop-types";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import styles from "./ButtonHelper.style";
import Typography from "../Typography";

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
      {iconName && <FontAwesome name={iconName} size={19} color="#ffffff" />}
      {children && <Typography>{children}</Typography>}
    </TouchableOpacity>
  );
};

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
