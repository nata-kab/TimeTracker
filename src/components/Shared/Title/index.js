import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { number, string } from "prop-types";

const Title = ({ text, size }) => {
  return (
    <View style={styles(size).title}>
      <Text style={styles.text}> {text} </Text>
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
      color: "#444444",
      fontSize: size,
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
