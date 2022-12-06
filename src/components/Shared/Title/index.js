import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { number, string } from "prop-types";

const Title = ({ text, size }) => {
  return (
    <View style={styles().title}>
      <Text style={styles(size).text}> {text} </Text>
    </View>
  );
};

const styles = (size) =>
  StyleSheet.create({
    title: {
      flex: 1,
      alignItems: "flex-start",
      marginLeft: 15,
      marginRight: 15,
    },
    text: {
      fontSize: size,
      color: "#555555",
    },
  });

Title.propTypes = {
  text: string,
  size: number,
};
Title.defaultProps = {
  text: "",
  size: 15,
};

export default Title;
