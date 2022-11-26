import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { string } from "prop-types";

const Title = ({ text }) => {
  console.log(text);
  return (
    <View style={styles.title}>
      <Text style={styles.text}> {text} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    alignItems: "flex-start",
    margin: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

Title.propTypes = {
  text: string,
};
Title.defaultProps = {
  text: "nic nie ma",
};

export default Title;
