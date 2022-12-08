import React from "react";
import { Text } from "react-native";
import { bool, number, string } from "prop-types";

import styles from "./Title.style";

const Title = ({ text, size, color, fontScaling }) => {
  return (
    <Text style={styles(size, color).text} allowFontScaling={fontScaling}>
      {" "}
      {text}{" "}
    </Text>
  );
};

Title.propTypes = {
  text: string,
  size: number,
  color: string,
  fontScaling: bool,
};
Title.defaultProps = {
  text: "",
  size: 15,
  color: "#555555",
  fontScaling: true,
};

export default Title;
