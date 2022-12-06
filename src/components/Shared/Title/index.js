import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { number, string } from "prop-types";

const Title = ({ text, size, textColor }) => {
  return (
    <View style={styles(size).title}>
      <Text style={styles(textColor).text}> {text} </Text>
    </View>
  );
};

const styles = (size, textColor) =>
  StyleSheet.create({
    title: {
      flex: 1,
      alignItems: "flex-start",
      marginLeft: 15,
      marginRight: 15,
    },
    text: {
      color: "rgb(128,128,128)",
      fontSize: size,
    },
  });

Title.propTypes = {
  text: string,
  size: number,
  textColor: string,
};
Title.defaultProps = {
  text: "",
  size: 15,
  textColor: "#333333",
};

export default Title;
