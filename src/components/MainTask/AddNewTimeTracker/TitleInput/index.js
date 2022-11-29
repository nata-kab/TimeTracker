import { func, oneOfType, object, string } from "prop-types";
import React from "react";
import { TextInput } from "react-native";

const TitleInput = ({ timeTrackerTitleRef }) => {
  return (
    <TextInput
      onChangeText={(value) => (timeTrackerTitleRef.current = value)}
      placeholder="Add activity title"
      maxLength={40}
      multiline={true}
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
