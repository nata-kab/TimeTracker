import React from "react";
import { Text } from "react-native";
import { bool, node, number, oneOf, oneOfType, string } from "prop-types";

import styles from "./Typography.styled";

const Typography = ({
  children,
  size,
  color,
  fontScaling,
  fontStyle,
  fontWeight,
}) => {
  return (
    <Text
      style={styles(size, color, fontStyle, fontWeight).text}
      allowFontScaling={fontScaling}
    >
      {children}
    </Text>
  );
};

Typography.propTypes = {
  children: oneOfType([string, node]),
  size: number,
  color: string,
  fontScaling: bool,
  fontStyle: oneOf(["italic", "normal"]),
  fontWeight: oneOf(["300", "400", "500", "600"]),
};
Typography.defaultProps = {
  children: "",
  size: 15,
  color: "#555555",
  fontScaling: true,
  fontStyle: "normal",
  fontWeight: "400",
};

export default Typography;
