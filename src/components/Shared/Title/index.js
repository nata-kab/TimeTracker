import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { string } from "prop-types";

const Title = ({ text }) => {
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
  text: string.isRequired,
};

export default Title;
