import React from "react";
import { Text, StyleSheet } from "react-native";
import { number, string } from "prop-types";

const Title = ({ text, size, color }) => {
  return <Text style={styles(size, color).text}> {text} </Text>;
};

const styles = (size, color) =>
  StyleSheet.create({
    text: {
      fontSize: size,
      color: color,
    },
  });

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
