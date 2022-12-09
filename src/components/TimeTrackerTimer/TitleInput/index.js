import { func, oneOfType, object, string } from "prop-types";
import React from "react";
import { TextInput } from "react-native";

import styles from "./TitleInput.style";

const TitleInput = ({ timeTrackerTitleRef }) => {
  return (
    <TextInput
      onChangeText={(value) => (timeTrackerTitleRef.current = value)}
      placeholder="Add activity title"
      maxLength={40}
      style={styles.input}
      placeholderTextColor={styles.input.color}
      selectionColor={styles.input.color}
      allowFontScaling={false}
      cursorColor={styles.input.color}
    />
  );
};

TitleInput.propTypes = {
  timeTrackerTitleRef: oneOfType([func, object, string]),
};

TitleInput.defaultProps = {
  timeTrackerTitleRef: null,
};

export default TitleInput;
