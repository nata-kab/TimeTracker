import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { string } from "prop-types";

const Title = ({ text }) => {
  console.log(text);
  return (
    <View style={styles.title}>
      <Text> {text} </Text>
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
    fontSize: 20,
  },
});

Title.propTypes = {
  text: string,
};
Title.defaultProps = {
  text: "nic nie ma",
};

export default Title;
