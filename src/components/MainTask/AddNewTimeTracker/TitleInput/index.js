import { func, oneOfType, object, string } from "prop-types";
import React from "react";
import { TextInput, StyleSheet } from "react-native";

const TitleInput = ({ timeTrackerTitleRef }) => {
  return (
    <TextInput
      onChangeText={(value) => (timeTrackerTitleRef.current = value)}
      placeholder="Add activity title"
      maxLength={40}
      style={styles.input}
      placeholderTextColor={styles.input.color}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    color: "#ffffff",
    borderRadius: 20,
    textAlign: "center",
  },
});

TitleInput.propTypes = {
  timeTrackerTitleRef: oneOfType([func, object, string]),
};

TitleInput.defaultProps = {
  timeTrackerTitleRef: null,
};

export default TitleInput;
