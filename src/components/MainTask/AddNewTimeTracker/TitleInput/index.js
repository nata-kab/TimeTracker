import { func, oneOfType, object, string } from "prop-types";
import React from "react";
import { TextInput, StyleSheet } from "react-native";

const TitleInput = ({ timeTrackerTitleRef }) => {
  return (
    <TextInput
      onChangeText={(value) => (timeTrackerTitleRef.current = value)}
      placeholder="Add activity title"
      maxLength={40}
      multiline={true}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
  },
});

TitleInput.propTypes = {
  timeTrackerTitleRef: oneOfType([func, object, string]),
};

TitleInput.defaultProps = {
  timeTrackerTitleRef: null,
};

export default TitleInput;
