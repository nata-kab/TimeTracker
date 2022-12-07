import React from "react";
import { Text } from "react-native";
import { number, string } from "prop-types";

import styles from "./Title.style";

const Title = ({ text, size, color }) => {
  return <Text style={styles(size, color).text}> {text} </Text>;
};

Title.propTypes = {
  text: string,
  size: number,
  color: string,
};
Title.defaultProps = {
  text: "",
  size: 15,
  color: "#555555",
};

export default Title;
